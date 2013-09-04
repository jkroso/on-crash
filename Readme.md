
# on-crash

  listen for the next uncaught error x-platform. Useful for testing your async errors aren't getting chewed up somewhere they shouldn't

## Installation

_With [packin](//github.com/jkroso/packin) or [component](//github.com/component/component)_

	$ packin add jkroso/on-crash

then in your app:

```js
var onCrash = require('on-crash')
```

## API

### onCrash(fn)

 call `fn` at the next crash

## Running the tests

Just run `make` and navigate your browser to the test.html file
