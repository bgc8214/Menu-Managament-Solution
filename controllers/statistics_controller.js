var configAuth = require('../config/auth');
var User = require('../models/user');
var Day = require('../models/day');
var mongoose = require('mongoose');

exports.makeStatis=function(req,res){

	// console.log("hihi");
	// console.log(req.body);

	// console.log(req.user);
  	var id = mongoose.Types.ObjectId(req.user.id);
  	var start = req.body.startDay;
  	var end = req.body.endDay;
  	// console.log(id);
	
	console.log(db.users.find({_id:id}));
	// User.findOne({'_id':id}, function(err, askdata){

	// 	console.log(askdata);
	// 	console.log(start);
	// 	console.log(end);
	//   	// res.render('statistics', { user : req.user });

	// });



  // User.findOne({'_id':id}, function(err, ){

  // 	res.render('statistics', { user : req.user });

  // });

  // Ask.findOne({'_id':id},function(err, askdata) {

  //   res.render('askInfo', { title: 'Ask Page', statu:req.body.stat,user : req.user, askdata:askdata,activity:req.body.activity });

  // });
};