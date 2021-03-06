let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/舞会.png'){
        myImage.setAttribute('src','images/舞会2.png');
    } else {
        myImage.setAttribute('src','images/舞会.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt ('お名前は？');
    if(!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name',myName);
        myHeading.textContent = '欢迎您，' + myName;
    }  
}

if(!localStorage.getItem('name')) {
    setUserName();
} else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '欢迎您，' + storedName;
}

myButton.onclick = function(){
    setUserName();
}