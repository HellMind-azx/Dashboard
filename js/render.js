const tabs = document.querySelectorAll('.tab-section');
const filterBtns = document.querySelectorAll('.task-tab-btn');
const legendValues = document.querySelectorAll('.leg-val');
const sidebar = document.getElementById('sidebar');
const tasksList = document.getElementById('tasks-list');
const tasksTabs = document.getElementById('tasks-tabs');
const taskSearchInput = document.getElementById('task-search-input');

function renderActiveTab() {
  tabs.forEach(tab => {
    if (tab.dataset.tab === state.activeTab) {
      tab.hidden = false;
    } else {
      tab.hidden = true;
    }
  });
}

function renderSidebar(tabs) {
  const tabsBtns = tabs.map(tab => `
        <button class="tab-btn" data-tab="${tab.id}">
            <i class="${tab.icon}"></i>
            <span>${tab.label}</span>
        </button>
        `).join('');

  sidebar.innerHTML = tabsBtns;
}

function renderLessons() {
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const todayName = dayNames[new Date().getDay()];
  const todayLessons = SCHEDULE.filter(item => item.day === todayName);

  const lessonsList = document.getElementById('lessons-list');

  if (todayLessons.length === 0) {
    lessonsList.innerHTML = `<li class="empty-schedule">There are no lessons today</li>`;
    return;
  }

  const lessonsHTML = todayLessons.map(item => {
    const subject = SUBJECTS.find(s => s.id === item.subjectId);

    return `<li class="schedule-item">
<div class="schedule-icon" style="background-color:${subject.color};">${subject.icon}</div>
  <div class="schedule-main">
    <h4 class="schedule-title">${subject.name}</h4>
    <p class="schedule-teacher">${item.teacher}</p>
  </div>
  <div class="schedule-meta">
    <span class="schedule-time">${item.time}</span>
    <span class="schedule-room">Каб. ${item.room}</span>
  </div>
</li>`
  }).join('');

  lessonsList.innerHTML = lessonsHTML
}

function renderTasks() {
  const notCompletedTasks = TASKS.filter(task => task.completed === false).slice(0, 3);

  if (notCompletedTasks.length === 0) {
    tasksList.innerHTML = `<li class="empty-task-list">The task list is empty</li>`;
    return;
  }

  const taskHTML = notCompletedTasks.map(task => {
    return `
        <li class="task-item" data-id="${task.id}">
            <div class="task-checkbox-wrapper">
                <button class="task-checkbox" aria-label="Mark as completed"></button>
            </div>
            <div class="task-content">
                <span class="task-title">${task.title}</span>
                <span class="task-date">Due: ${task.due}</span>
            </div>
            <div class="task-badge priority-${task.priority.toLowerCase()}">
                ${task.priority}
            </div>
        </li>
        `
  }).join('');

  tasksList.innerHTML = taskHTML;
}

function renderStats() {

  const pendingTasksCount = TASKS.filter(task => !task.completed).length;
  
  const dashboardCardsHTML = `
  <div class="dashboard-card">
    <div class="card-header">
      <span class="card-title">GPA</span>
      <div class="card-icon">${ICONS.icon}</div>
    </div>
    <div class="card-value">${STUDENT.gpa}</div>
  </div>

  <div class="dashboard-card">
    <div class="card-header">
      <span class="card-title">Attendance</span>
      <div class="card-icon">📊</div>
    </div>
    <div class="card-value">${STUDENT.attendance}%</div>
  </div>

  <div class="dashboard-card">
    <div class="card-header">
      <span class="card-title">Pending Tasks</span>
      <div class="card-icon">📅</div>
    </div>
    <div class="card-value">${pendingTasksCount}</div>
  </div>

  <div class="dashboard-card">
    <div class="card-header">
      <span class="card-title">Credits</span>
      <div class="card-icon">💎</div>
    </div>
    <div class="card-value">
      ${STUDENT.completedCredits}<span class="card-value-divider">/</span>${STUDENT.totalCredits}
    </div>
  </div>
`;

  document.getElementById('stats-wrapper').innerHTML = dashboardCardsHTML;
}

function renderDiagram() {
  const diagram = document.getElementById('diagram');

  diagram.innerHTML = GRADES.map(grade => {
    const subject = SUBJECTS.find(s => s.id === grade.subjectId);

    return `
      <div class="bar-column">
          <div class="bar" style="height: ${grade.score}%; background-color: ${subject.color};"></div>
          <span class="bar-label">${subject.name}</span>
          <span class="bar-value">${grade.score}</span>
      </div>
    `;
  }).join('');
}

function renderGradesTable() {
  const gradesTable = document.getElementById('grades-table-body');

  gradesTable.innerHTML = GRADES.map(grade => {
    const subject = SUBJECTS.find(s => s.id === grade.subjectId);

    return `<tr>
                <td class="subject-name">${subject.name}</td>
                <td class="room-number">${subject.room}</td>
                <td class="grade-letter">${grade.grade}</td>
                <td class="grade-score">${grade.score}%</td>
                <td><span class="badge status-${grade.status}">${grade.status}</span></td>
              </tr>`
  }).join('');
}

function getFilteredTasks() {
  const filter = state.activeFilter || 'all';
  const searchQuery = (state.searchQuery || '').trim().toLowerCase();

  switch (filter) {
    case 'todo':
      tasks = COURSES.filter(course => course.status === status.todo);
      break;
    case 'progress':
      tasks = COURSES.filter(course => course.status === status.inProgress);
      break;
    case 'completed':
      tasks = COURSES.filter(course => course.status === status.completed);
      break;
    default:
      tasks = COURSES;
  }

  if (!searchQuery) {
    return tasks;
  }

  return tasks.filter(task => task.title.toLowerCase().includes(searchQuery));
}

function renderTaskFilterButtons() {
  document.querySelectorAll('.task-tab-btn').forEach(button => {
    const isActive = button.dataset.filter === state.activeFilter;
    button.classList.toggle('active', isActive);
  });
}

function renderTasksTable() {
  const tasksTable = document.getElementById('tasks-table-body');
  const filteredTasks = getFilteredTasks();

  renderTaskFilterButtons();

  if (filteredTasks.length === 0) {
    tasksTable.innerHTML = `<tr><td colspan="5" class="empty-task-table">No tasks found for this filter</td></tr>`;
    return;
  }

  tasksTable.innerHTML = filteredTasks.map(task => {
    const course = COURSES.find(c => c.id === task.id);

    return `<tr>
                <td>
                    <div class="task-cell-title">📄 ${task.title}
                    </div>
                    <div class="task-cell-desc">Practice basic JS concepts</div>
                </td>
                <td>${course.title}</td>
                <td>
                    <div class="date-text">${task.due}</div>
                    <div class="days-left text-red">2 days left</div>
                </td>
                <td><span class="priority-badge p-${course.priority}">${course.priority}</span></td>
                <td><span class="status-badge s-${course.status}">${course.status}</span></td>
            </tr>`
  }).join('');
}

function renderTasksCardData() {
  const totalTasksCount = document.getElementById('total-tasks-count');
  const completedTasksCount = document.getElementById('completed-tasks-count');
  const progressTasksCount = document.getElementById('progress-tasks-count');
  const upcomingTasksCount = document.getElementById('upcoming-tasks-count');

  const maxScore = 100;
  const completed = TASKS.filter(t => t.completed === true).length;
  const inProgress = COURSES.filter(c => c.status === 'in-progress').length;
  const upcoming = COURSES.filter(u => u.status === 'upcoming').length;
  const completedTasks = maxScore / TASKS.length * completed;

  totalTasksCount.textContent = TASKS.length;
  completedTasksCount.textContent = `${completedTasks.toFixed(1)}%`;
  progressTasksCount.textContent = inProgress;
  upcomingTasksCount.textContent = upcoming;
}

function renderProfileCard() {
  const profileCard = document.getElementById('profile-card');

  profileCard.innerHTML = `<div class="avatar-wrapper">
                                <img src="${STUDENT.avatar}" alt="Student Avatar" class="student-avatar" id="profile-avatar">
                                <label for="avatar-upload" class="change-avatar-badge"><i
                                        class="fa-solid fa-camera"></i></label>
                                <input type="file" id="avatar-upload" hidden accept="image/*">
                            </div>

                            <div class="student-meta">
                                <h2 class="student-name" id="meta-name">${STUDENT.fullName}</h2>
                                <span class="student-badge">${STUDENT.faculty}</span>
                                <ul class="student-contact-list">
                                    <li><i class="fa-solid fa-at"></i> <span id="meta-email">${STUDENT.email}</span>
                                    </li>
                                    <li><i class="fa-solid fa-phone"></i> <span id="meta-phone">${STUDENT.phone}</span>
                                    </li>
                                    <li><i class="fa-solid fa-map-marker-alt"></i> <span id="meta-location">${STUDENT.location}</span></li>
                                    <li><i class="fa-solid fa-calendar"></i> Joined: <span id="meta-join-date">${STUDENT.joined}</span></li>
                                </ul>
                            </div>

                            <div class="student-academic-details">
                                <div class="detail-row">
                                    <span class="detail-label"><i class="fa-solid fa-id-badge"></i> Student ID</span>
                                    <span class="detail-value" id="academic-id">${STUDENT.studentId}</span>
                                </div>
                                <div class="detail-row">
                                    <span class="detail-label"><i class="fa-solid fa-graduation-cap"></i> Program</span>
                                    <span class="detail-value" id="academic-program">B.Sc. in Computer Science</span>
                                </div>
                                <div class="detail-row">
                                    <span class="detail-label"><i class="fa-solid fa-calendar-days"></i> Year</span>
                                    <span class="detail-value" id="academic-year">${STUDENT.year}</span>
                                </div>
                                <div class="detail-row">
                                    <span class="detail-label"><i class="fa-solid fa-user"></i> Advisor</span>
                                    <span class="detail-value" id="academic-advisor">${STUDENT.advisor}</span>
                                </div>
                                <div class="detail-row">
                                    <span class="detail-label"><i class="fa-solid fa-check-circle"></i> Enrollment
                                        Status</span>
                                    <span class="status-badge s-active" id="academic-status">${STUDENT.status}</span>
                                </div>
                            </div>`
}