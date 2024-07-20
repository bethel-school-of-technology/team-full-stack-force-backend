"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
const taskModel_1 = require("./taskModel");
const userModel_1 = require("./userModel");
const dbName = 'taskmanagerdb';
const username = 'root';
const password = 'changeme'; // change password if necessary
const sequelize = new sequelize_1.Sequelize(dbName, username, password, {
    host: 'localhost',
    port: 3306, //change port if necessary
    dialect: 'mysql'
});
(0, taskModel_1.TaskFactory)(sequelize);
(0, userModel_1.UserFactory)(sequelize);
exports.db = sequelize;
