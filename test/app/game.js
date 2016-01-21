var utils = require('./modules/utils');
// var _ = require('lodash');
var Phaser = require('phaser');


var assets = {
	images:{
		phaser:'images/phaser-dude.png'
	},
	sprites:{},
	audio:{},
	atlas:{}
}
var scope = {};

// var atlas = {};
// atlas.loading = require('./data/loading.json');
// assets.atlas['loading'] = {
// 	image:'images/loading.png',
// 	json:utils.frameAtlas(atlas.loading)
// }


module.exports = function(game,rootScope){
	var state = {};

	// var craft = require('./modules/craft')(game);

	state.init = function(){
	}

	state.preload = function(){
		game.stage.disableVisibilityChange = false;
		game.stage.backgroundColor = '#fff';
		utils.loadAssets(game,assets);
		game.load.start();
	}

	state.create = function(){
		var $c = require('$craft')(game);

		var sprite = $c.$sprite('phaser');

		var circle = $c.$circle({
			size:40,
			stroke:{
				size:2
			}
		}).$set({
			x:100,
			y:100
		})


		var d = $c.$d();
		d.x=200;
		d.y=200;

		var rect = $c.$box()
		rect.x = 300;
		rect.y = 30;

		var group = $c.$g()
		console.log(group)
		// var group = craft.$g();

		// var sprite = craft.$sprite('phaser')
		// .$set({
		// 	x:100,
		// 	y:100
		// })
		// .$into(group)
		// .$mid()
		// .$tint('#FF0000');


		// var ball = craft.$circle({
		// 	fill:'#FF00FF',
		// 	size:40
		// }).$set({
		// 	x:200,
		// 	y:200,
		// })
		// .$into(group)
	}

	return state;
}
