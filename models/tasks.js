const Task = require('./task');

class Tasks {
 _list = {};

 get listTaskAsArray() {
  const listArr = [];

  Object.keys(this._list).forEach((key) => {
   const task = this._list[key];
   listArr.push(task);
  });

  return listArr;
 }

 constructor() {
  this._list = {};
 }

 loadTasksFromArray(tasks = []) {
  tasks.forEach((task) => {
   this._list[task.id] = task;
  });
 }

 createTask(description = '') {
  const task = new Task(description);

  this._list[task.id] = task;
 }

 completeList() {
  console.log();
  this.listTaskAsArray.forEach((task, index) => {
   const idx = `${index + 1}.`.green;
   const { description, completedAt } = task;
   const status = completedAt ? 'Completed'.green : 'Pending'.red;
   console.log(`${idx} ${description} => ${status}`);
  });
 }
}

module.exports = Tasks;
