const User = require('./user');
const Posts = require('./posts');
const Comments = require('./comments');

User.hasMany(Posts, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Posts.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Posts.hasMany(Comment, {
    foreignKey: 'user_id',
});

Comment.belongsTo(Posts, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user',
    targetKey: 'id',
});

module.exports = { User, Posts, Comments };