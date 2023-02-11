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

 createTask(description = '') {
  const task = new Task(description);

  this._list[task.id] = task;
 }
}

module.exports = Tasks;
