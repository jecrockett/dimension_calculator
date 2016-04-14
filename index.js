'use strict'

module.exports = function dimensionCalculator(userDimension, originalDimensions) {
  if (userDimension.width && userDimension.height) {
    reject(new TypeError('Expected  value for `height` OR `width` but received both. '))
  } else if(typeof userDimension.width === 'number') {
    var width = userDimension.width
    return originalDimensions.height * width / originalDimensions.width
  } else if (typeof userDimension.height === 'number') {
    var height = userDimension.height
    return originalDimensions.width * height / originalDimensions.height
  } else {
    reject(new TypeError('Expected option `height` or `width` of type number'));
  }
}
