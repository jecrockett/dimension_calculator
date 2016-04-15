'use strict'

module.exports = function dimensionCalculator(userDimension, originalDimensions) {
  if (typeof userDimension.width  === 'number' &&
      typeof userDimension.height === 'number') {
        reject(new TypeError('Expected first argument to have a number value for `height` OR `width`, but received both.'))
  }

  if (!(typeof originalDimensions.width  === 'number' &&
        typeof originalDimensions.height === 'number')) {
          reject(new TypeError('Expected second argument to have a number value for both `height` AND `width`. '))
  }

  if(typeof userDimension.width === 'number') {
    return originalDimensions.height * userDimension.width / originalDimensions.width
  } else if (typeof userDimension.height === 'number') {
    return originalDimensions.width * userDimension.height / originalDimensions.height
  } else {
    reject(new TypeError('Expected option `height` or `width` of type number'));
  }
}
