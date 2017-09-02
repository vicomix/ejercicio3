function readBrowserProperties() {
 console.log(navigator.appCodeName);
 document.getElementById("result1").innerHTML ="<p>"+navigator.appCodeName+"</p>";
 document.getElementById("result1").innerHTML += "<p>"+navigator.appVersion+"</p>";  
};

