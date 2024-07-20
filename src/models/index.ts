import { Sequelize } from "sequelize"
import { TaskFactory } from "./taskModel"
import { UserFactory } from "./userModel"


const dbName = 'taskmanagerdb';
const username = 'root'; 
const password = 'changeme'; // change password if necessary

const sequelize = new Sequelize(dbName, username, password, {
    host: 'localhost',
    port: 3306, //change port if necessary
    dialect: 'mysql'
});

TaskFactory(sequelize);
UserFactory(sequelize);

export const db = sequelize;