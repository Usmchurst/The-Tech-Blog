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

const getHomePost = async (req, res) => {
    const posts = await Post.findAll({
      include: {
        model: User,
        as: 'User',
      },
    });
    const postParsing = formatParsing(posts);
    res.render('home', { title: 'The Tech Blog', posts: postParsing });
  };
  
  const getAddPostHandlerbar = (req, res) => {
    res.render('addpost', { title: 'Dashboard' });
  };
  
  const addPost = async (req, res) => {
    const post = Post.build({
      title: req.body.title,
      content: req.body.content,
      userId: req.userId,
    });
    await post.save();
    res.redirect('/');
  };