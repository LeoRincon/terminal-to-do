require('colors');

const { inquirerMenu, StopMenu, readInput } = require('./helpers/inquirer');

const Tasks = require('./models/tasks');

const main = async () => {
 let selectedOptionUser = '';

 const tasks = new Tasks();

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
    console.log(tasks._list);
    break;
   default:
    break;
  }

  await StopMenu();
 } while (selectedOptionUser !== '0');
};

main();
