var adults = [
    {
        name: 'humza',
        age: 10,
    },
    {
        name: 'ali',
        age: 12,
    },
    {
        name: 'hiba',
        age: 14,
    },
    {
        name: 'dayan',
        age: 16,
    },
    {
        name: 'farzam',
        age: 18,
    },
    {
        name: 'ammar',
        age: 20,
    },
    {
        name: 'habib',
        age: 22,
    },
    {
        name: 'adil',
        age: 24,
    },
    {
        name: 'zubair',
        age: 26,
    },
    {
        name: 'ali',
        age: 28,
    },
    {
        name: 'fahad',
        age: 30,
    },
    {
        name: 'ashar',
        age: 35,
    },
    {
        name: 'umair',
        age: 40,
    },
    {
        name: 'noor',
        age: 45,
    },
    {
        name: 'wasif',
        age: 50,
    },
];
console.log(adults);
var arr = adults.filter(function (obj) {
    return (obj['age'] < 20 || obj.age > 30);
});
console.log('filtered values', arr);
//# sourceMappingURL=task.js.map