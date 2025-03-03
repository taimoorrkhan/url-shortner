import   Knex  from "knex";
 const { 
    DB_HOST,
    DB_USER,
    DB_PORT,
    DB_PASSWORD,
    DB_NAME }=process.env;
const knex  = Knex({
    client : 'postgresql',
    connection : {
        host : DB_HOST,
        user : DB_USER,
        port : Number(DB_PORT),
        password : DB_PASSWORD,
        database : DB_NAME
    },
});
export const onDatabaseConnect = async () => knex.raw('SELECT 1');