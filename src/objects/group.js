var utils = require('../utils');
var bindProto = require('../protos');

module.exports = function(game,Phaser){
	return function $group(options){
		var defaults = {
			parent:undefined,
			name:undefined,
			addToStage:undefined,
			enableBody:undefined,
			physicsBodyType:undefined
		};
		options = utils.extend({},options,defaults);
		var tmpG = game.add.group(options.parent, options.name, options.addToStage, options.enableBody, options.physicsBodyType);

		bindProto(tmpG,'group')

		return tmpG;
	}
}
