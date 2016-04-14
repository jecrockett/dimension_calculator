# dimension-calculator

> If you want to resize an object and know the height or width you would like,
the dimension calculator will return the other dimension needed to maintain the
original height/width ratio.
Supports all object types that have width and height properties.


## Install

```
$ npm install --save dimension-calculator
```


## Usage

The first argument passed in should be an object with either the height or width
 to which you would like to resize. (ex ```{ width: 40 }```)


The second argument passed in should be the object you would like to resize. It
should have properties height and width. (ex ```{ width: 100, height: 50 }```)


The dimension calculator will calculate the ratio of the dimensions for the original
object and return the other dimension size (in this case height), needed to maintain the
original height/width ratio.

```js
const dimensionCalculator = require('dimension-calculator');

// Calculate the dimension needed
dimensionCalculator({ width: 40 }, { width: 100, height: 50 })
=> 20
```


## API

### dimensionCalculator(options)

#### options

##### object with width OR height

Type: `object`
*Required*

The width in pixels to resize the object to or the height in pixels to resize the object to.

##### object with width AND height

Type: `object`
*Required*

Object that you would like to resize. Must have width and height properties.

#### Returns

Returns the dimension not provided in order to retain the proportions of the original object.

## License

MIT © James Crockett and Shannon Paige
