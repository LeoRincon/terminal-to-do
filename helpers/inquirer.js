require('colors');

const { menuOptions, stopOptions } = require('../utils/dataOptions');

const inquirer = require('inquirer');

const inquirerMenu = async () => {
 console.clear();

 console.log('======== TODO ========\n'.green);
 const { option } = await inquirer.prompt(menuOptions);

 return option;
};

const StopMenu = async () => {
 console.log('\n');
 await inquirer.prompt(stopOptions);
};

const readInput = async (description) => {
 const inputCreateTask = [
  {
   type: 'input',
   name: 'description',
   message: description,
   validate(value) {
    if (value.length === 0) {
     return 'Please enter a value';
    }
    return true;
   },
  },
 ];

 const { description: descriptionTask } = await inquirer.prompt(
  inputCreateTask
 );

 return descriptionTask;
};

module.exports = {
 inquirerMenu,
 StopMenu,
 readInput,
};
