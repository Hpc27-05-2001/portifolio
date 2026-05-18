
const words = [
"Full Stack Developer",
"Frontend Developer",

];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

const typingText = document.getElementById("typing-text");

function type(){

currentWord = words[i];

if(isDeleting){

typingText.textContent =
currentWord.substring(0,j--);

}else{

typingText.textContent =
currentWord.substring(0,j++);

}

if(!isDeleting && j === currentWord.length){

isDeleting = true;

setTimeout(type,1000);

return;

}

if(isDeleting && j === 0){

isDeleting = false;

i = (i + 1) % words.length;

}

setTimeout(type,isDeleting ? 60 : 120);

}

type();