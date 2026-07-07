const state = {
    activeTab: "overview",
    activeFilter: "all",
    searchQuery: ""
};

function setActiveTab(tabName) {
    state.activeTab = tabName;
}

function setActiveFilter(filterName) {
    state.activeFilter = filterName;
}

function setSearchQuery(query) {
    state.searchQuery = query;
}

