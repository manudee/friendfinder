var friends = require('../data/friend.js');


module.exports = function(app){


	app.get("/api/friends", function(req, res) {
		res.json(friends);
	});
	
	app.post("/api/friends", function(req,res){

		var friendAdded = req.body;
		friends.push(friendAdded);
		// res.json(friendAdded);
		console.log(friendAdded);
		console.log(friendAdded.scores[0]);

		
		var friendDiff = [];

		// for (var i = 0; i < 10; i++) {
		// 	console.log("score[" + i + "]" + friendAdded.scores[i]);
		// }

		for (var i = 0; i < friends.length - 1 ; i++) {
			var totalDiff = 0;
			for (var j = 0; j < friends[i].scores.length ; j++) {
				
				totalDiff = totalDiff + Math.abs(( friends[i].scores[j] - friendAdded.scores[j]));
				console.log("Total Diff " + totalDiff);
			}
				console.log("Total diff calculated ");
				friendDiff.push(totalDiff);
				console.log("frienddiff array " + friendDiff);
		
		}
			
		console.log("Best friend is " + (Math.min.apply(null,friendDiff)));
		console.log("Best friend index is " + friendDiff.indexOf((Math.min.apply(null,friendDiff))));

		var min = function(friendDiff){
			return Math.min.apply(null, friendDiff);

		};


		var value = min(friendDiff);
		var index = friendDiff.indexOf(value);

		var bestFriendPhoto = friends[index].photo;
		var bestFriendName = friends[index].name;


		console.log("Best friend Name " + bestFriendName);
		console.log("Best friend photo " + bestFriendPhoto);

		console.log("Value = " + value);
		console.log("Index = " + index);

		res.json({status: "OK",bestFriendName:bestFriendName, bestFriendPhoto:bestFriendPhoto });
	});


}

