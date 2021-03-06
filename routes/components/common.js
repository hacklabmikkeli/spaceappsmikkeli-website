﻿exports.index = function (req, res) {
  res.render('index', {user: req.user, menu: 'index'});
};

exports.program = function (req, res) {
  res.render('program', { user: req.user, menu: 'program' });
};

exports.challenges = function (req, res) {
  res.render('challenges', { user: req.user, menu: 'challenges' });
};

exports.venue = function (req, res) {
  res.render('venue', { user: req.user, menu: 'venue' }); 
};

exports.spaceguide= function (req, res) {
  res.render('spaceguide', { user: req.user, menu: 'spaceguide' });
};

exports.faq= function (req, res) {
  res.render('faq', { user: req.user, menu: 'faq' });
};

exports.users = function (req, res) {
  res.render('management', {user: req.user, menu: 'management'});
};

exports.newpost = function(req, res) {
  res.render('newpost', {user: req.user, menu: 'blog'});
};