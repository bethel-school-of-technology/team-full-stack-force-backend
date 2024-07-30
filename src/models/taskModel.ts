import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";
import { User } from "./userModel";  // Ensure this import is correct and points to your User model

// Define Task model
export class Task extends Model<InferAttributes<Task>, InferCreationAttributes<Task>> {
    declare taskId?: number;
    declare priority: number;
    declare task: string;
    declare dueDate: Date;
    declare userId?: number;
    declare createdDate?: Date;
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
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
    Task.belongsTo(User, { foreignKey: 'userId' });
}