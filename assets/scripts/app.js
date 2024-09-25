class Tooltip{}

class ProjectItem {}

class ProjectList {
    constructor(type){
        const prjItem = document.querySelectorAll(`#${type}-projects li`);
        console.log(prjItem);
    }
}

class App {
    static init(){
      const activeProjectsList = new ProjectList('active');
      const FiishedProjectsList = new ProjectList('finished');
    }
}

App.init()