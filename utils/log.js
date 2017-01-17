var moment = require('moment')

module.exports = function(src, ...rest){
	console.log(moment().format() + ' - {' + src + '} ', ...rest)
}
