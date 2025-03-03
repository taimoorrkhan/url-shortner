import   Knex  from "knex";

const knex  = Knex({
    client : 'postgresql',
    connection : {
        host : 'localhost',
        user : 'postgres',
        port : 5432,
        password : 'admin',
        database : 'urlshortner'
    },
});
export const onDatabaseConnect = async () => knex.raw('SELECT 1');