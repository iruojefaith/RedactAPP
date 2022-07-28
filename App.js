const commentWords = document.getElementById("input-comment");
const redactWords = document.getElementById("inputText");
const symbol = document.getElementById("inputSymbol");
const Button = document.getElementById("btn");
const outputComment = document.getElementById("output")

Button.addEventListener('click', () => {
    //To get the all the user inputs
    let userComment = commentWords.value;
    let redactArr = redactWords.value.split(" ");
    let Symbol = symbol.value;

    // looping through comments to redact word change
    for (let i = 0; i < redactArr.length; i++){
        userComment = userComment.replace(redactArr[i],Symbol.repeat(redactArr[i].length));
    }

    outputComment.innerText = userComment;
})