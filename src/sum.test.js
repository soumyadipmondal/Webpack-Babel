const sum = require('./sum');
const sumTest = require('./sum');

test('adding 1 with 2 will give 3', ()=>{
    expect(sum(1,2)).toBe(3)
});

/* Matchers
**/
// Object assignment

test('Object Assignment', ()=>{
  const data = {one:1}
  console.log(data);
  data['two'] = 2;

  expect(data).toEqual({one:1, two:2})
})