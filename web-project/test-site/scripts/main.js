let myHeading = document.querySelector("h1");
let myImage = document.querySelector("img");
let myButton = document.querySelector("button");

myImage.onclick = function() {
    let mySrc = myImage.getAttribute("src");
    if(mySrc === "images/OIP-C.jpg"){
        myImage.setAttribute("src","images/edge.jpg");
    }else{
        myImage.setAttribute("src","images/OIP-C.jpg");
    }
};

function setUserName(){
    let myName = prompt("请输入你的名字: ");
    if(!myName){
        setUserName();
    }
    else{
        localStorage.setItem("name",myName);
        myHeading.textContent = "Mozilla is so cool," + myName;
    }
}

if(!localStorage.getItem("name")){
    setUserName();
}else{
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla is  cool," + storedName;
}

myButton.onclick = function(){
    setUserName();
};
