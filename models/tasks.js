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

 deleteTask(id = '') {
  if (this._list[id]) {
   delete this._list[id];
  }
 }

 loadTasksFromArray(tasks = []) {
  tasks.forEach((task) => {
   this._list[task.id] = task;
  });
 }

 completeList() {
  console.log();
  this.listTaskAsArray.forEach((task, index) => {
   const idx = `${index + 1}.`.green;
   const { description, completedAt } = task;
   const status = completedAt ? 'Completed'.green : 'Pending'.red;
   console.log(`${`${idx}`.green} ${description} => ${status}`);
  });
 }

 taskCompletedAndPending(completed = true) {
  console.log();
  let counterIndex = 0;
  this.listTaskAsArray.forEach((task) => {
   const { description, completedAt } = task;

   const status = completedAt ? 'Completed'.green : 'Pending'.red;

   if (completed) {
    if (completedAt) {
     counterIndex += 1;
     console.log(
      `${`${counterIndex}.`.green} ${description} => ${completedAt.green}`
     );
    }
   } else {
    if (!completedAt) {
     counterIndex += 1;
     console.log(`${`${counterIndex}.`.green} ${description} => ${status}`);
    }
   }
  });
 }

 toggleCompleted(ids = []) {
  ids.forEach((id) => {
   const task = this._list[id];
   if (!task.completedAt) {
    task.completedAt = new Date().toISOString();
   }
  });

  this.listTaskAsArray.forEach((task) => {
   if (!ids.includes(task.id)) {
    this._list[task.id].completedAt = null;
   }
  });
 }
}

module.exports = Tasks;
