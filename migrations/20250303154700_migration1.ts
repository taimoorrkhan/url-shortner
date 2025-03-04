import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
await knex.schema.createTable('users',(table)=>{
table.increments('id').primary();
table.string("username").notNullable().unique();
table.text('password').notNullable();
table.timestamps(true,true)
//table.dateTime('created_at').defaultTo(knex.fn.now());
//table.dateTime('updated_at').defaultTo(knex.fn.now());

})
}


export async function down(knex: Knex): Promise<void> {
await knex.schema.dropTable('users')
}

