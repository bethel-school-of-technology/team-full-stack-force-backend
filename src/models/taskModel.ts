import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";
import { User } from "./userModel";  // Ensure this import is correct and points to your User model

// Define Task model
export class Task extends Model<InferAttributes<Task>, InferCreationAttributes<Task>> {
    declare taskId?: number;
    declare title: string;
    declare priority: string;
    declare description: string;
    declare assignedTo?: number;
    declare dueDate: Date;
    declare userId?: number;
    declare createdDate?: Date;
    declare completed: Boolean;
}

// Factory function to initialize Task model
export function TaskFactory(sequelize: Sequelize): void {
    Task.init({
        taskId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        priority: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        assignedTo: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        dueDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        createdDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        completed: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, {
        tableName: 'tasks',
        freezeTableName: true,
        sequelize
    });
}

// Function to associate Task model with User model
export function AssociateUserMessage(): void {
    User.hasMany(Task, { foreignKey: 'userId' });
    Task.belongsTo(User, { foreignKey: 'userId', as: 'owner' });
    Task.belongsTo(User, { foreignKey: 'assignedTo', as: 'assignee' });
}