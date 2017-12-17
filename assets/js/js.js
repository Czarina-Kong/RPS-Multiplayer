// Initialize Firebase
var config = {
	apiKey: "AIzaSyCMSACWVbrYcx3oU9u77F6UV1R33mc99YE",
	authDomain: "recentuser-3706d.firebaseapp.com",
	databaseURL: "https://recentuser-3706d.firebaseio.com",
	projectId: "recentuser-3706d",
	storageBucket: "recentuser-3706d.appspot.com",
	messagingSenderId: "1092227535335"
};
firebase.initializeApp(config)


//let's make some variables
var player1 = null
var player2 = null
var player1Name
var player2Name
var player1RPS
var player2RPS
var turn = 1
var database = firebase.database()

