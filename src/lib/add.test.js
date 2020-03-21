const add = require('./add');

describe('Add function', () => {
 
  test('should return a number', () => {
    const res =  add(1, 2);
    expect(typeof res).toEqual('number');
    expect(res).toBe(3);
  })
  
})
