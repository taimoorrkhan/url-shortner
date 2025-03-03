import { onDatabaseConnect } from "./config/knex";  

onDatabaseConnect().then(() => console.log("Database connected!")).
catch((err) => console.error(err));

