// getting DOM elements
// document.querySelector() can be used to select elements the same way you do in CSS, i.e irrespective of the class, id, or tag. e.g
// for id - document.querySelector("#idName")
// for class - document.querySelector(".className")
// for tag - document.querySelector("tagName")
// to select multiple elements at once, use document.querySelectorAll()

let genBtn = document.querySelector("#genbtn");
let display = document.querySelector(".display");

genBtn.addEventListener("click", () => {
  display.innerText = passGen();
});

// genBtn.addEventListener('onclick', () => {

// })

// password generating function
function passGen() {
  /// 8 characters
  /// a capital letter
  // a symbol
  //  a number

  let finalPassword = "";
  const alpabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const seed = "?@$-_,.+%";

  // step 1
  for (let i = 0; i < 16; i++) {
    /*
        Math.random() returns a random decimal value between 0 & 1
        Math.round() rounds a decimal value to the nearest interger.
        */
    let randomNumber = Math.round(Math.random() * 25);
    finalPassword = finalPassword + alpabets[randomNumber];
  }

  //  step 2
  for (let j = 0; j < 9; j++) {
    // We use 7 in Math.random() because we need a number between 0 and 8, which is the range of values found in finalPassword

    let randomNumber = Math.round(Math.random() * 15);
    let charAtIndex = finalPassword[randomNumber].toLowerCase();
    finalPassword = finalPassword.replace(
      finalPassword[randomNumber],
      charAtIndex
    );
  }

  // step 3 -

  // We use 7 in Math.random() because we need a number between 0 and 8, which is the range of values found in finalPassword
  // We use 9 in the second Math.random() because we need a number between 0 and 9, which is a random single digit number

  finalPassword = finalPassword.replace(
    finalPassword[Math.round(Math.random() * 15)],
    Math.round(Math.random() * 9)
  );

  // step 4
  for (let k = 0; k < 4; k++) {
    // We use 8 in Math.random() because we need a number between 0 and 9, which is the range of values found in seed
    let randomNumber = Math.round(Math.random() * 8);
    let charAtIndex = seed[randomNumber];
    finalPassword = finalPassword.replace(
      finalPassword[randomNumber],
      charAtIndex
    );
  }
  return finalPassword;
}

document.querySelector(".btn").innerHTML;

// copy password function

// ASSIGNMENT
/*
1. IMPROVE THE PASSGEN FUNCTION TO RETURN A PASSWORD STRING WITH VARIABLE LENGTH BETWEEN 8 & 16 done

2. IMPROVE THE GENERATE BUTTON TO SHOW A TEXT (PASSWORD GENERATED) FOR A FEW SECONDS  WHEN THE PASSWORD IS GENERATED
*/
