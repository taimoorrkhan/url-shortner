import type { Knex } from "knex";
const { 
  DB_HOST,
  DB_USER,
  DB_PORT,
  DB_PASSWORD,
  DB_NAME }=process.env;
// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "postgresql",
      connection : {
        host : DB_HOST,
        user : DB_USER,
        port : Number(DB_PORT),
        password : String(DB_PASSWORD),
        database : DB_NAME
    },
  },

  staging: {
    client: "postgresql",
    connection : {
      host : DB_HOST,
      user : DB_USER,
      port : Number(DB_PORT),
      password : String(DB_PASSWORD),
      database : DB_NAME
  },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection : {
      host : DB_HOST,
      user : DB_USER,
      port : Number(DB_PORT),
      password : String(DB_PASSWORD),
      database : DB_NAME
  },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};

module.exports = config;
