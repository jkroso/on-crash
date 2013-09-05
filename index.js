
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
			fn(e)
		}
	}
	: function browser(fn){
		var old = onerror
		onerror = function(msg, file, line){
			onerror = old
			var e = new Error(msg.slice(msg.indexOf(':') + 2))
			e.file = file
			e.line = line
			fn(e)
			return true
		}
	}