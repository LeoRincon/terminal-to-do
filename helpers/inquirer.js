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

const askDeleteTask = async (tasks = []) => {
 const choices = tasks.map((task, index) => {
  const idx = `${index + 1}.`.green;
  return {
   value: task.id,
   name: `${idx} ${task.description}`,
  };
 });

 choices.unshift({
  value: '0',
  name: '0.'.green + ' Cancel',
 });

 const questions = [
  {
   type: 'list',
   name: 'id',
   message: 'Delete',
   choices,
  },
 ];

 const { id } = await inquirer.prompt(questions);
 return id;
};

const confirmTaskDelete = async (message) => {
 const question = [
  {
   type: 'confirm',
   name: 'ok',
   message,
  },
 ];

 const { ok } = await inquirer.prompt(question);
 return ok;
};

module.exports = {
 confirmTaskDelete,
 inquirerMenu,
 StopMenu,
 readInput,
 askDeleteTask,
};
