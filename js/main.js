renderSidebar(TABS);
renderActiveTab();
renderLessons();
renderTasks();
renderStats();
renderDiagram();
renderGradesTable();
renderTasksTable();
renderTasksCardData();
renderProfileCard();

sidebar.addEventListener('click', function (event) {
    const btn = event.target.closest('.tab-btn');
    if (!btn) return;

    const tabName = btn.dataset.tab;
    setActiveTab(tabName);
    renderActiveTab();
});

tasksTabs.addEventListener('click', function (event) {
    const filterBtn = event.target.closest('.task-tab-btn');
    if (!filterBtn) return;
    
    setActiveFilter(filterBtn.dataset.filter);
    renderTasksTable();
});

tasksList.addEventListener('click', function (event) {
    const checkbox = event.target.closest('.task-checkbox');
    if (!checkbox) return;

    const taskItem = checkbox.closest('.task-item');
    if (!taskItem) return;

    const taskId = Number(taskItem.dataset.id);

    taskItem.classList.add('is-removing');
    setTimeout(() => {
        const foundTask = TASKS.find(t => t.id === taskId);
        if (foundTask) {
            foundTask.completed = true;
            renderTasks();
            renderStats();
            renderTasksTable();
            renderTasksCardData();
        }
    }, 400);
});

taskSearchInput.addEventListener('input', function(event) {
    const query = event.target.value.trim().toLowerCase();
    setSearchQuery(query);
    renderTasksTable();
});
