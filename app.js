
// function foo(){
//     let a = ['vue', 'angular'];
//     return{
//         setA(f){
//             return a.push(f);
//         },
//         getA(){
//             console.log(a);
//         }
//     }
// };

// const ff = foo();
// ff.setA('Kukuruku');
// ff.getA();

// function foo(){
//     console.log(this);
// }

// const a = {
//     name: 'Vova2'
// }

// foo.call(a.name)
// console.log(a.name)

function Cat(a,b){
    this.a = a,
    this.b = b
}

const g = new Cat(1,5)

console.log(g)






