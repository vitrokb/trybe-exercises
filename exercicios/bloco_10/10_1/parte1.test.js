function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

describe('Test sum function', () => {
  it('should sum a + b', () => {
    expect(sum(1, 2)).toBe(3);
  })
  it('should sum 4 + 5', () => {
    expect(sum(4, 5)).toBe(9);
  })
  it('should sum 0 + 0', () => {
    expect(sum(0, 0)).toBe(0);
  })
  it('should return error when 5 is a string', () => {
    expect(() => sum(4, '5')).toThrow(Error);
  })
  it(`should return 'parameters must be numbers' when an argument is a string`, () => {
    expect(() => sum(4, '5')).toThrow('parameters must be numbers');
  })
});

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

describe('Test myRemove function', () => {
  it(`test the function returns for 'myRemove([1, 2, 3, 4], 3)'`, () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it(`test the function returns for 'myRemove([1, 2, 3, 4], 3)' doesn't return '[1, 2, 3, 4]`, () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it(`should not change the parameter array`, () => {
    const array = [1, 2, 3, 4];
    myRemove(array, 3);
    expect(array).toEqual([1, 2, 3, 4]);
  });
  it(`should return [1, 2, 3, 4]`, () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
})

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

describe('Test myRemoveWithoutCopy function', () => {
  it(`should return [1, 2, 4]`, () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it(`should not return [1, 2, 3, 4]`, () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it(`should change the parameter array`, () => {
    const array = [1, 2, 3, 4];
    myRemoveWithoutCopy(array, 3);
    expect(array).toEqual([1, 2, 4]);
  });
  it(`should return [1, 2, 3, 4]`, () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
})

// função myFizzBuzz