require('colors');

const {
 inquirerMenu,
 StopMenu,
 readInput,
 askDeleteTask,
 confirmTaskDelete,
} = require('./helpers/inquirer');

const { saveDB, readDB } = require('./helpers/saveFile');

const Tasks = require('./models/tasks');

const main = async () => {
 let selectedOptionUser = '';

 const tasks = new Tasks();
 const tasksDB = readDB();

 if (tasksDB) {
  tasks.loadTasksFromArray(tasksDB);
 }

 do {
  selectedOptionUser = await inquirerMenu();

  switch (selectedOptionUser) {
   case '1':
    const taskDescription = await readInput(
     `${'New task description: '.blue}: `
    );
    tasks.createTask(taskDescription);
    break;
   case '2':
    tasks.completeList();
    break;
   case '3':
    tasks.taskCompletedAndPending(true);
    break;
   case '4':
    tasks.taskCompletedAndPending(false);
    break;
   case '6':
    const taskId = await askDeleteTask(tasks.listTaskAsArray);
    if (taskId !== '0') {
     const responseDelete = await confirmTaskDelete(
      'Are you sure you want to delete this task?'
     );
     responseDelete && tasks.deleteTask(taskId);
    }
    break;

   default:
    break;
  }

  saveDB(tasks.listTaskAsArray);

  await StopMenu();
 } while (selectedOptionUser !== '0');
};

main();
