/**
 * Module dependencies.
 */
var db = require('../../db');
const User = require("../../models/user");

exports.engine = "hbs";

exports.before = function (req, res, next) {
  var id = req.params.user_id;
  if (!id) return next();
  // pretend to query a database...
  process.nextTick(function () {
    req.user = db.users[id];
    // cant find that user
    if (!req.user) return next("route");
    // found it, move on to the routes
    next();
  });
};

exports.list = function (req, res, next) {
  User.find()
    .exec(function (err, list_users) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('list', { users: list_users });
    });
};

exports.edit = function (req, res, next) {
  res.render("edit", { user: req.user });
};

exports.show = function (req, res, next) {
  res.render("show", { user: req.user });
};

exports.update = function (req, res, next) {
  var body = req.body;
  req.user.name = body.user.name;
  res.message("Information updated!");
  res.redirect("/user/" + req.user._id);
};
