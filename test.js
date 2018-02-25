const { Map } = require('immutable');

let obj = Map({
    name:'imooc',
    course:Map({
        name:'react+redux'
    })
})

let obj1 = obj.set('name','yuhan');
console.log(typeof obj.getIn(['course','name']),obj1.get('course'));