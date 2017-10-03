function makeArray(array){
  console.log(array)
  for(var i = 0; i < 25; i++) {
    console.log("variable i = " + i)
    if(i===1) {
      array.push(`I am 1 strong loop`)
    } else {
      array.push(`I am ${i} strange loops`)
    }
  }
return array
}
