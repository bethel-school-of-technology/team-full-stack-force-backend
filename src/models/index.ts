import { Sequelize } from "sequelize"
import { AssociateUserMessage, TaskFactory } from "./taskModel"
import { UserFactory } from "./userModel"


const dbName = 'sql5724433';
const username = 'sql5724433'; 
const password = 'FpXyFP4PI7'; // change password if necessary

const sequelize = new Sequelize(dbName, username, password, {
    host: 'sql5.freemysqlhosting.net',
    port: 3306, //change port if necessary
    dialect: 'mysql'
});

TaskFactory(sequelize);
UserFactory(sequelize);
AssociateUserMessage();

export const db = sequelize;