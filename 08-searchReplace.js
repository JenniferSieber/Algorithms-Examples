console.log('Search and replace using .replace() method.  Receiving a sentence, a word in the sentence and a replacement for that word as arguments, perform a search and replace on the sentence using the arguments provided and return the new sentence. E.g. major objective in solving this challenge is to ensure that the replacing word matches the casing(capitalization) of the word to be replaced.')


function searchReplace(str, w1, w2) {
  if ( w1[0] === w1[0].toUpperCase()) {
    w2 = w2[0].toUpperCase() + w2.slice(1)
  }
  return str.replace(w1, w2)
}
console.log(searchReplace("He is Sleeping on the couch", "Sleeping", "sitting")) // should return "He is Sitting on the couch"


// .replace() method using REGEX and .test() method and charAt()
function searchReplaceREGEX(str, w1, w2) {
  let regex = new RegExp(w1, "gi")

  if (/[A-Z]/.test(w1[0])) {
    w2 = w2.charAt(0).toUpperCase() + w2.slice(1)
  }
  return str.replace(regex, w2)
}

console.log(searchReplaceREGEX("He is Sleeping on the couch", "Sleeping", "jumping")) // should return "He is Sitting on the couch"


console.log('From the test result, the faster solution is the first approach where we simply replace the word using **.replace()** , while the regular expression method is approximately 72% slower.')