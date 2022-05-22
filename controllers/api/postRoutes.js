const { Post, User, Comment } = require('../../models');
const formatParsing = require('../../utils/formatParsing');

const getDashboardPost = async (req, res) => {
  const posts = await Post.findAll({
    include: {
      model: User,
      as: 'User',
    },
  });
  const postParsing = formatParsing(posts);
  res.render('dashboard', { title: 'Dashboard', posts: postParsing });
};
