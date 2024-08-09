import { DataTypes } from "sequelize";
import { sequelize } from "./connection.js";
import { postsmodel } from "./posts.model.js";
import { commentsmodel } from "./comments.model.js";

export const usermodel = sequelize.define('User',
  {

    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,

    },
    password: {
      type: DataTypes.STRING,

    },
     isLoggedOut: {
      type: DataTypes.STRING
    }
  },
  {

  },
);
usermodel.hasMany(postsmodel, {
  foreignKey: "userid",
  onDelete: "CASCADE",
  onUpdate: "CASCADE"
});
postsmodel.belongsTo(usermodel, {
  foreignKey: "userid"
});

postsmodel.hasMany(commentsmodel, {
  foreignKey: "postid",
});
usermodel.hasMany(commentsmodel, {
  foreignKey: "userid",
});
commentsmodel.belongsTo(postsmodel,
  { foreignKey: "postid" });
commentsmodel.belongsTo(usermodel, {
  foreignKey: 'userid'
});

