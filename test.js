var assert = require('assert')

require('./')(function(e){
	assert(e.message == 'boom')
	console.log('it works')
})
setTimeout(function(){
	throw new Error('boom')
}, 0)