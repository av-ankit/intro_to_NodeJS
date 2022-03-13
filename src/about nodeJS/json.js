var data = {
    name: 'ankit',
    age: 22,
    location: 'moradabad'
}

console.log('normal', data);
var stringifiedData = JSON.stringify(data);

console.log('\nstringify', stringifiedData);
console.log('\nparse', JSON.parse(stringifiedData));