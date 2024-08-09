import { DataTypes } from "sequelize";
import { sequelize } from "./connection.js";


export const commentsmodel=sequelize.define('comment',
  {
    
    content: {
      type: DataTypes.STRING,
     
    },
    userid: {
      type: DataTypes.INTEGER,
     
    },
    postid:{
        type: DataTypes.INTEGER,
    }
  },
  {
    
  },
);