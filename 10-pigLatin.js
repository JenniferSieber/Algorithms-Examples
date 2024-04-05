console.log('Pig Latin is a constructed language game in which words in English are altered, usually by adding a fabricated suffix or by moving the initial consonant or consonant cluster of a word to the end of the word and adding a vocalic syllable to create such a suffix. For example, Wikipedia would become ikipediaway (taking the `W`and `ay` to create a suffix). The objective is to conceal the words from others not familiar with the rules.” - Wikipedia')
console.log(`The challenge: For words that begin with consonant sounds, the consonant before the initial vowel should be moved to the end of the word sequence and "ay" affixed. E.g "pig" = "igpay", For words that begin with consonant clusters, the clusters should be moved to the end of the word sequence and "ay" affixed. E.g "glove" = "oveglay", For words that begin with vowel sounds, simply add "way" to the end of the word. E.g "explain" = "explainway”`)

console.log('Approaches: Imperative and Declarative: ', `The point is, in imperative programming, you specify how things get done(step-by-step). However, in declarative programming, you simply state(declare) what should be done and aren’t concerned with how it gets done.`)


// An imperative approach
function pigLatin(str) {
  str = str.toLowerCase()
  const vowels = ["a", "e", "i", "o", "u"]
  // initialize vowel index:
  let vowelIndex = 0

  if (vowels.includes(str[0])) {
    return str + 'way'
  } else {
    for (let char of str) {
      if (vowels.includes(char)) {
        vowelIndex = str.indexOf(char)
        break
      }
    }
    return str.slice(vowelIndex) + str.slice(0, vowelIndex) + 'ay'
  }
}
console.log(pigLatin('pig'))
console.log(pigLatin('glove'))
console.log(pigLatin('explain'))