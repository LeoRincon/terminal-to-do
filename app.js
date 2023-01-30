const { inquirerMenu, StopMenu } = require('./helpers/inquirer');

require('colors');

console.clear();

const main = async () => {
 let selectedOptionUser = '';

 do {
  selectedOptionUser = await inquirerMenu();
  console.log({ selectedOptionUser });
  await StopMenu();
 } while (selectedOptionUser !== '0');
};

main();
