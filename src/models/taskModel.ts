import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export class Task extends Model<InferAttributes<Task>, InferCreationAttributes<Task>> {
    declare taskId: number;
    declare priority: number;
    declare task: string;
    declare assigned: number;
    declare dueDate: Date;
}

export function TaskFactory(sequelize: Sequelize) {
    Task.init({
        taskId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        priority: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        task: {
            type: DataTypes.STRING,
            allowNull: false
        },
        assigned: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        dueDate: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        tableName: 'tasks',
        freezeTableName: true,
        sequelize
    });
};