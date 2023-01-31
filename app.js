require('colors');

const { inquirerMenu, StopMenu } = require('./helpers/inquirer');
const Tasks = require('./models/tasks');

const main = async () => {
 let selectedOptionUser = '';

 do {
  selectedOptionUser = await inquirerMenu();
  console.log({ selectedOptionUser });

  await StopMenu();
 } while (selectedOptionUser !== '0');
};

main();
