function makeArray(array){
  for(var i = 0; i < 25; i++) {
    console.log(i)
    if(i===1) {
      array.push(`I am 1 strong loop`)
    } else {
      array.push(`I am ${i} strange loops`)
    }
console.log(array)
  }
return array
}
