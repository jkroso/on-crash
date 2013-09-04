require('./')(function(){
	console.log('almost')
})
setTimeout(function(){
	throw new Error('boom')
}, 0)