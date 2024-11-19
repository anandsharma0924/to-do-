import { DataTypes } from "sequelize";
import sequelize from "../config/databases.js";

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 255],
      },
    },
  },
  {
    timestamps: true,
    tableName: "to-do",
  }
);

sequelize
  .sync()
  .then(() => console.log("Database tables have been created or updated."))
  .catch((err) => console.error("Error creating or updating database table:", err));

export default User;
