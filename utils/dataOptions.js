const menuOptions = [
 {
  type: 'list',
  name: 'option',
  message: 'What do you want to do?',
  choices: [
   {
    value: '1',
    name: `${'1.'.green} Create task`,
   },
   {
    value: '2',
    name: `${'2.'.green} List tasks`,
   },
   {
    value: '3',
    name: `${'3.'.green} List completed tasks`,
   },
   {
    value: '4',

    name: `${'4.'.green} List pending tasks`,
   },
   {
    value: '5',
    name: `${'5.'.green} Complete task(s)`,
   },
   {
    value: '6',
    name: `${'6.'.green} Delete task`,
   },
   {
    value: '0',
    name: `${'0.'.green} Exit`,
   },
  ],
 },
];
const stopOptions = [
 {
  type: 'input',
  name: 'enter',
  message: `Press ${'ENTER'.green} to continue`,
 },
];
module.exports = { menuOptions, stopOptions };
