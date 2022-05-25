const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override')
const sequelize = require('./config/connection');
const { User, Post, Comment } = require('./models');
const postRoutes = require('./routes/postRoute');
const userRoutes = require('./routes/userRoute');
const { dateFormat } = require('./utils/hbs');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// database connection checking
(async function () {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({
  helpers: {
    dateFormat: dateFormat,
  },
});

const sessionStore = new SequelizeStore({
  db: sequelize,
});

const sess = {
  secret: 'Super secret secret',
  store: sessionStore,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: sessionStore,
};

app.use(session(sess));
sessionStore.sync();
app.use(methodOverride('_method'));
// Inform Express.js on which template engine to use

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.locals.user = req.session.userId || null;
  next();
});

User.hasMany(Comment, {
  foreignKey: 'userId',
  as: 'Comment',
}); // A HasOne B
Comment.belongsTo(User, {
  foreignKey: 'userId',
  as: 'User',
});

User.hasMany(Post, {
  foreignKey: 'userId',
  as: 'Post',
});
Post.belongsTo(User, {
  foreignKey: 'userId',
  as: 'User',
});

app.use(postRoutes);
app.use(userRoutes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
