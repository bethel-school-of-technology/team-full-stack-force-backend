"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
exports.TaskFactory = TaskFactory;
const sequelize_1 = require("sequelize");
class Task extends sequelize_1.Model {
}
exports.Task = Task;
function TaskFactory(sequelize) {
    Task.init({
        taskId: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        priority: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        task: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        assigned: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        },
        dueDate: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false
        }
    }, {
        tableName: 'tasks',
        freezeTableName: true,
        sequelize
    });
}
;
