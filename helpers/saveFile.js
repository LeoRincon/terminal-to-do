const fs = require('fs');

const saveDB = (data) => {
 const dataAsString = JSON.stringify(data);
 const file = './db/data.json';
 fs.writeFileSync(file, dataAsString);
};

module.exports = { saveDB };
