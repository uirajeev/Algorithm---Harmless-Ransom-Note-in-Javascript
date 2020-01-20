// Problem : You have been given two strings. You have to find out whether you can make up the first string with the words present in the second string.

// Solution: 1 Simple Solution

function harmlessRansom(noteText, magazineText) {
  var noteArr = noteText.trim().split(' ');
  var magazineArr = magazineText.trim().split(' ');

  var magazineObj = magazineArr.reduce((obj, word) => {
    obj[word] ? obj[word]++ : obj[word] = 1;
    return obj;
    }, {});
  
  var isPossible = true;

  noteArr.forEach(word => {
    if (magazineObj[word] > 0) {
      magazineObj[word] --;
    } else {
      isPossible = false;
    }
  });

  return isPossible;
}

// Solution: 2 Single Loop Solution 
function harmlessRansomUseEvery(note, magazine) {
  let noteArr = note.split(' ');
  let magazineArr = magazine.split(' ');

  let noteIsPossible = noteArr.every(word => {
    let index = magazineArr.indexOf(word);
    if (index > -1) {
      magazineArr.splice(index, 1);
      return true;
    }
  });
  return noteIsPossible;
}

// Solution: 3 Using recursion
function harmlessRansomRecursion(noteArr, magazineArr) {
  let index = magazineArr.indexOf(noteArr[0]);
  if (noteArr.length === 0) return true;
  if (index === -1) return false;

  noteArr.shift();
  magazineArr.splice(index, 1);
  return harmlessRansomRecursion(noteArr, magazineArr);
}

// Simple solution
console.log(harmlessRansom(" whether you can make ", 'You have to find out whether you can make up the first string with the words present in the second string'));

// Using Every 
console.log(harmlessRansomUseEvery('whether you can make', 'You have to find out whether you can make up the first string with the words present in the second string'))

// Using recursion
let note = "whether you can make".split(' ');

let magazine = 'You have to find out whether you can make up the first string with the words present in the second string'.split(' ');

console.log(harmlessRansomRecursion(note, magazine));