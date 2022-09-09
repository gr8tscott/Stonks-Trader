// {
//   "development": {
//     "database": "stonks_database",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   },
//   "test": {
//     "database": "stonks_test",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   },
//   "production": {
//     "database": "stonks_production",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   }
// }
// require('dotenv').config()
module.exports = {
  development: {
    database: 'stonks_database',
    dialect: 'postgres'
  },
  test: {
    database: 'stonks_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
