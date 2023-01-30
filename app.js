require('colors');

const { showMenu, stopMessage } = require('./helpers/messages');

console.clear();

const main = async () => {
 let opt = '';

 do {
  opt = await showMenu();
  if (opt !== '0') await stopMessage();
 } while (opt !== '0');

 //  stopMessage();
};

main();
