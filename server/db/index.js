const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'GES_Takip',
  password: 'Admin',
  port: 5436,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};