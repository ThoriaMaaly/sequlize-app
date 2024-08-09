import { DataTypes } from "sequelize";


import { sequelize } from "./connection.js";
export const postsmodel=sequelize.define('post',
  {
    
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
     

    }
  },
  {
    
  },

);


