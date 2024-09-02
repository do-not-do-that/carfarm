const { DataSource } = require('typeorm');
const dbConfig = require('./ormconfig');
const connectionSource = new DataSource(
  Object.assign(dbConfig, {
    migrations: ['./src/migrations/*.js'],
  }),
);

console.log(connectionSource);

module.exports = {
  connectionSource,
};
