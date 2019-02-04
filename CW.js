//Print the first p tag to the console using the ID, class, and tag selectors.
var pTag1 = document.getElementsByTagName("p");
console.log(pTag1[0].textContent);

var pTag2 = document.getElementsByClassName("special");
console.log(pTag2[0].textContent);

var pTag3 = document.getElementById("first");
console.log(pTag3.textContent);

//Print the special class using both the query selector and query all selector.
var specialClass1 = document.querySelectorAll(".special");
for (var i=0;i<specialClass1.length;i++)
{
    console.log(specialClass1[i].textContent);
}
//query selector will only print the first item (hello)
var specialClass2 = document.querySelector(".special");
console.log(specialClass2.textContent);

//Change the color of the h1 statement to blue.
var blueheader1 = document.getElementsByTagName("h1");
blueheader1[0].style.color = "blue";

//Change the color of the last p tag to yellow.
var lastTag = document.getElementsByTagName("p");
var numlength = (lastTag.length) -1;
console.log(numlength);
lastTag[numlength].style.color = "yellow";