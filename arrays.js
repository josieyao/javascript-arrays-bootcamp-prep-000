/*  describe('chocolateBars', () => {
    it('is an array containing "snickers", "hundred grand", "kitkat", and "skittles"', () => {
      expect(chocolateBars).to.eql['snickers', 'hundred grand', 'kitkat', 'skittles']
    })
  })*/

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

/*  describe('addElementToBeginningOfArray(array, element)', () => {
    it('adds an element to the beginning of an array', () => {
      expect(addElementToBeginningOfArray([1], 'foo')).to.eql(['foo', 1])
    })

    it('does not alter the original array', () => {
      const array = [1]

      addElementToBeginningOfArray(array, 'foo')

      expect(array).to.eql([1])
    })
  })*/

function addElementToBeginningOfArray(chocolateBars, twix) {
  return [twix, ...chocolateBars];
}

/*  describe('destructivelyAddElementToBeginningOfArray(array, element)', () => {
    it('adds an element to the beginning of an array', () => {
      expect(destructivelyAddElementToBeginningOfArray([1], 'foo')).to.eql(['foo', 1])
    })

    it('alters the original array', () => {
      const array = [1]

      destructivelyAddElementToBeginningOfArray(array, 'foo')

      expect(array).to.eql(['foo', 1])
    })
  })*/ 
  
function destructivelyAddElementToBeginningOfArray(chocolateBars, twix) {
  chocolateBars.unshift(twix);
  return chocolateBars;
}

/*  describe('addElementToEndOfArray(array, element)', () => {
    it('adds an element to the end of an array', () => {
      expect(addElementToEndOfArray([1], 'foo')).to.eql([1, 'foo'])
    })

    it('does not alter the original array', () => {
      const array = [1]

      addElementToEndOfArray(array, 'foo')

      expect(array).to.eql([1])
    })
  })*/
  
function addElementToEndOfArray(chocolateBars, twix) {
  return [...chocolateBars, twix];
}

function destructivelyAddElementToEndOfArray(chocolateBars, twix) {
  chocolateBars.push(twix);
  return chocolateBars;
}

function accessElementInArray(array, index) {
  return array[index];
}
 
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift();
  return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars) {
  return chocolateBars.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop();
  return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars) {
  return chocolateBars.slice(0, chocolateBars.length - 1);
}