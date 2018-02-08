const test = (i) => { console.log(i) };

for (var i = 0; i < 10; i++) {

    (function () {
        setTimeout(() => {
            console.log(i);
        }, 0)
    })(i);





}

console.log('i:' + i);