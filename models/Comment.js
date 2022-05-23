const { DataTypes, } = require("sequelize");
const Comment = sequelize.define(
  "Comment",
  {
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
        type :DataTypes.INTEGER,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    }
  },
  {
    // Other model options go here
  }
);

// (async function () {
//   await Comment.sync();
// })();

module.exports = Comment;