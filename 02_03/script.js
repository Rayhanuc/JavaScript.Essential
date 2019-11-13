/*
১.১৮ - ব্রেক ও কন্টিনিউ
*/

document.write("Example 1"+"</br>"+"<hr>" );
console.log("Example 1");
var found = 0;
var target = 21;
var iterator = 2;
// While loop
while(!found) {
    let answer = target%iterator;
    //console.log(answer);
    if(!answer) {
        found = iterator;
    }
    iterator++;
}
document.write(found+"</br>");
console.log(found);

// for loop

// for (start, condition, increment) {
//     // statements
// }

document.write("Example 2"+"</br>"+"<hr>");
console.log("Example 2");
var target2 = 21;
var found2 = 0;
for (let i = 2; !found2; i++) {
    let result2 = target2%i;
    if(!result2){
        found2 = i;
    }
}
document.write(found2+"</br>");
console.log(found2);


document.write("Example 3"+"</br>"+"<hr>");
console.log("Example 3");
for (j = 0; j<10; j++) {
    document.write("This loop ran "+j+" times</br>");
    console.log("This loop ran "+j+" times</br>");
}