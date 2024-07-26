import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";
import { User } from "./userModel";

export class Task extends Model<InferAttributes<Task>, InferCreationAttributes<Task>> {
    declare taskId?: number;
    declare priority: number;
    declare task: string;
    declare dueDate: Date;
    declare createdDate?: Date;
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
        dueDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        createdDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        }
    }, {
        tableName: 'tasks',
        freezeTableName: true,
        sequelize
    });
};

export function AssociateUserMessage() {
    User.hasMany(Task, { foreignKey: 'userId' });
    Task.belongsTo(User, { foreignKey: 'userId' });
}