
/**
 * call `fn` at the next crash
 *
 * @param {Function} fn
 * @api public
 */

module.exports = typeof window == 'undefined'
	? function node(fn){
		var old = process._events.uncaughtException
		process._events.uncaughtException = function(e){
			process._events.uncaughtException = old
			fn()
		}
	}
	: function browser(fn){
		var old = onerror
		onerror = function(){
			onerror = old
			fn()
			return true
		}
	}