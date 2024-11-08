{
  // Problem 03: Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.
  const input: string =
    "I am a beginner in TypeScript and want to get my self transformed from javascript to typescript. and I love coding with TypeScript. ";

  interface WordArr {
    words: string[];
  }

  const getWordsArr = (sentence: string): WordArr => {
    return {
      words: sentence.toLowerCase().split(/\W+/),
    };
  };

  const getWordCount = (sentence: string, word: string) => {
    let count = 0;
    const wordArr = getWordsArr(sentence);
    const searchWord = word.toLowerCase();
    wordArr?.words?.forEach((w) => {
      if (w === searchWord) {
        count++;
      }
    });
    return count;
  };

  console.log(
    "\n---------------- Solution of the Problem 03 ----------------\n"
  );
  const count = getWordCount(input, "typescript");
  console.log(
    `In the given sentence, the word "Typescript appears ${count} times`
  );
}
