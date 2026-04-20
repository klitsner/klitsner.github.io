(function (global) {
  if (!global.portfolioProjects) {
    global.portfolioProjects = [];
  }

  global.registerPortfolioProject = function (projectConfig) {
    global.portfolioProjects.push(projectConfig);
  };
})(window);
