const User = require('./user');
const Post = require('./Post');
const Comment = require("./Comment");
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: '', 
}); 

Comment.belongsTo(User, {
  foreignKey: 'user_id'
})

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: '', 
})

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
})

module.exports = { User, Post,Comment };
