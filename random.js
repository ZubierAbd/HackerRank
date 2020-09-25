var foo = { N: 1 }
console.log(foo)
var bar = foo;
console.log(bar)
foo.x = foo
console.log(foo)
console.log(foo.x = { n: 2 })
foo.x = { n: 2 }
console.log(foo)
console.log(bar)
console.log(foo.x)