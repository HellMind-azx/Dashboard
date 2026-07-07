function syncSidebarState() {
    const isTablet = window.matchMedia('(max-width: 1024px)').matches;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    if (isMobile) {
        document.body.classList.remove('sidebar-collapsed');
        sidebar.classList.remove('is-collapsed');
        document.body.classList.remove('sidebar-open');
        return;
    }

    document.body.classList.toggle('sidebar-collapsed', isTablet);
    sidebar.classList.toggle('is-collapsed', isTablet);
    document.body.classList.remove('sidebar-open');
}

function toggleSidebar() {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    if (isMobile) {
        document.body.classList.toggle('sidebar-open');
        return;
    }

    const isCollapsed = document.body.classList.toggle('sidebar-collapsed');
    sidebar.classList.toggle('is-collapsed', isCollapsed);
}

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
syncSidebarState();
window.addEventListener('resize', syncSidebarState);

sidebar.addEventListener('click', function (event) {
    const toggleBtn = event.target.closest('.sidebar-toggle-btn');
    if (toggleBtn) {
        toggleSidebar();
        return;
    }

    const btn = event.target.closest('.tab-btn');
    if (!btn) return;

    const tabName = btn.dataset.tab;
    setActiveTab(tabName);
    renderActiveTab();

    if (window.matchMedia('(max-width: 768px)').matches) {
        document.body.classList.remove('sidebar-open');
    }
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
