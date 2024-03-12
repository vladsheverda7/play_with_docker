const fs = require('fs');

test('a is not equal to b', () => {
    const jsonData = fs.readFileSync('/usr/src/app/data/data.json', 'utf8');
    const data = JSON.parse(jsonData);
    console.log(`a = ${data.a}`);
    console.log(`b = ${data.b}`);
    expect(data.a).not.toBe(data.b);
});

test('25 is equal to 25', () => {
    expect(25).toBe(25);
});

test('25 is equal to 25', () => {
    expect(25).toBe(24);
});
