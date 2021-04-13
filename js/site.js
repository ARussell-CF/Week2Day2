function reverseString() {
    //Get the user's word
    let userWord = document.getElementById("tacoCat").value;
    let cleanedWord = userWord.replace(" ", "");
    //Do something here with it
    let start = cleanedWord.length - 1;
    let reverseWord = "";
    //Frank.length = 5
    //[F, r, a, n, k]
    //[0, 1, 2, 3, 4]
    //For loop
    for (let i = start; i >= 0; i--) {
        reverseWord = reverseWord + cleanedWord[i];
    }

    let output = document.getElementById("tacoOutput");
    output.innerText = reverseWord;
    //Before Loop - reverseWord = "" []
    //Loop 1 - i = 4: userWord[4] = k reverseWord [] + k = [k]
    //Loop 2 - i = 3: userWord[3] = n reverseWord [k] + n = [k, n]
    //Loop 3 - i = 2: userWord[2] = a
    //Loop 4 - i = 1: userWord[1] = r
    //Loop 5 - i = 0: userWord[0] = F
}