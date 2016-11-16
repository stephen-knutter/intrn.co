var express = require('express');
var posts = require('../database/posts.js');
var challengdb = require('../database/challenges.js');
var compdb = require('../database/companies.js');
var applicationdb = require('../database/applicants.js')
var router = express.Router();

router.get('/:id', function(req, res, next){
  var companyID = req.params.id;
  posts.getCompanyPosts(companyID)
  // .then(function(){
  //   posts.getPostApplicants(postID)
    .then(function(data){
      res.json(data);
    })
  // })
});

module.exports = router;