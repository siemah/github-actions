const add = require('./add');

describe('Add function', () => {
 
  test('should return a number', () => {
    const res =  add(1, 2);
    expect(typeof res).toEqual('number');
    expect(res).toBe(3);
  })

  test('should return a concat string', () => {
    expect(add(3, 'dd')).toBeFalsy()
  })
  
})
