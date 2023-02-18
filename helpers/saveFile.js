const fs = require('fs');
const file = './db/data.json';

const saveDB = (data) => {
 const dataAsString = JSON.stringify(data);
 fs.writeFileSync(file, dataAsString);
};

const readDB = () => {
 if (!fs.existsSync(file)) return null;
 const info = fs.readFileSync(file, { encoding: 'utf-8' });
 const infoData = JSON.parse(info);
 return infoData;
};

module.exports = { saveDB, readDB };
