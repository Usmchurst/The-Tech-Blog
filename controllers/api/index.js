const {
    getDashboardPost,
    getHomePost,
    getAddPostHandlerbar,
    addPost,
    getPostById,
    addCommentToPostById,
    getEditPostHandlebar,
    updatPostById,
    deletPostById,
  } = require('./postRoutes');
  const {
    getSigninHandlebar,
    userSignIn,
    getUserSignUpHandlerbar,
    createUser,
    userLogout,
  } = require('./userRoutes');
  
  module.exports = {
    getDashboardPost,
    getHomePost,
    getAddPostHandlerbar,
    addPost,
    getPostById,
    addCommentToPostById,
    getEditPostHandlebar,
    updatPostById,
    deletPostById,
    getSigninHandlebar,
    userSignIn,
    getUserSignUpHandlerbar,
    createUser,
    userLogout,
  };