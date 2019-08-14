const inputElement = document.querySelector('#totalWeight');
const outputElement = document.querySelector('#output');

let fiftyFives, fortyFives, thirtyFives, twentyFives, tens, fives, twoAndHalf;

const getPlates = () => {
  const userInput = inputElement.value;
  //verify input
  const isValid = validateInput(userInput);
  //calculate plates if input is valid
  if (isValid) {
    let plateOutput = doPlateMath(userInput);
    drawPlates();
    outputElement.innerHTML = plateOutput;
  } else {
    outputElement.innerHTML =
      'Invalid input. Weight must be in increments of 5.';
  }
};

const validateInput = input => {
  //add better validations
  if (input <= 1200 && input >= 45 && input % 5 === 0) return true;
  else return false;
};

const doPlateMath = userInput => {
  let plateOutput = '';
  let remainder = userInput - 45;

  //reset first

  // handle 45lbs scenario
  // if (userInput === 45) {
  //   plateOutput = 'Just the bar.';
  //   remainder = 0;
  // }
  while (remainder > 0) {
    if (remainder >= 110) {
      fiftyFives = Math.floor(remainder / 110);
      plateOutput += `55s: ${fiftyFives * 2} (${fiftyFives * 110} lbs)</br>`;
      remainder = remainder % (fiftyFives * 110);
    } else if (remainder >= 90) {
      //get 45s
      fortyFives = Math.floor(remainder / 90);
      plateOutput += `45s: ${fortyFives * 2} (${fortyFives * 90} lbs)</br>`;
      remainder = remainder % (fortyFives * 90);
    } else if (remainder >= 70) {
      //get 35s
      thirtyFives = Math.floor(remainder / 70);
      plateOutput += `35s: ${thirtyFives * 2} (${thirtyFives * 70} lbs)</br>`;
      remainder = remainder % (thirtyFives * 70);
    } else if (remainder >= 50) {
      //get 25s
      twentyFives = Math.floor(remainder / 50);
      plateOutput += `25s: ${twentyFives * 2} (${twentyFives * 50} lbs)</br>`;
      remainder = remainder % (twentyFives * 50);
    } else if (remainder >= 20) {
      //get 10s
      tens = Math.floor(remainder / 20);
      plateOutput += `10s: ${tens * 2} (${tens * 20} lbs)</br>`;
      remainder = remainder % (tens * 20);
    } else if (remainder >= 10) {
      //get 5s
      fives = Math.floor(remainder / 10);
      plateOutput += `5s: ${fives * 2} (${fives * 10} lbs)</br>`;
      remainder = remainder % (fives * 10);
    } else {
      //get 2.5s
      twoAndHalf = Math.floor(remainder / 5);
      plateOutput += `2.5s: ${twoAndHalf * 2} (${twoAndHalf * 5} lbs)</br>`;
      remainder = remainder % (twoAndHalf * 5);
    }
  }

  return plateOutput;
};

const drawPlates = () => {
  if (fiftyFives > 0) {
    for (let i = 0; i < fiftyFives; i++) {
      document.querySelectorAll('.sleeve').forEach(s => {
        s.appendChild(document.createElement('div')).classList.add(
          'fiftyFive',
          'plate'
        );
      });
    }
  }
  if (fortyFives > 0) {
    for (let i = 0; i < fortyFives; i++) {
      document.querySelectorAll('.sleeve').forEach(s => {
        s.appendChild(document.createElement('div')).classList.add(
          'fortyFive',
          'plate'
        );
      });
    }
  }
  if (thirtyFives > 0) {
    for (let i = 0; i < thirtyFives; i++) {
      document.querySelectorAll('.sleeve').forEach(s => {
        s.appendChild(document.createElement('div')).classList.add(
          'thirtyFive',
          'plate'
        );
      });
    }
  }
  if (twentyFives > 0) {
    for (let i = 0; i < twentyFives; i++) {
      document.querySelectorAll('.sleeve').forEach(s => {
        s.appendChild(document.createElement('div')).classList.add(
          'twentyFive',
          'plate'
        );
      });
    }
  }
  if (tens > 0) {
    for (let i = 0; i < tens; i++) {
      document.querySelectorAll('.sleeve').forEach(s => {
        s.appendChild(document.createElement('div')).classList.add(
          'ten',
          'plate'
        );
      });
    }
  }
  if (fives > 0) {
    for (let i = 0; i < fives; i++) {
      document.querySelectorAll('.sleeve').forEach(s => {
        s.appendChild(document.createElement('div')).classList.add(
          'five',
          'plate'
        );
      });
    }
  }
  if (twoAndHalf > 0) {
    for (let i = 0; i < twoAndHalf; i++) {
      document.querySelectorAll('.sleeve').forEach(s => {
        s.appendChild(document.createElement('div')).classList.add(
          'twoAndHalf',
          'plate'
        );
      });
    }
  }
};
