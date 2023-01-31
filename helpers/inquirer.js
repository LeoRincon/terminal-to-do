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

module.exports = {
 inquirerMenu,
 StopMenu,
};
