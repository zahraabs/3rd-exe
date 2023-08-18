// make variables
var inpText = document.querySelector("#text");
var btn = document.querySelector(".button");
var list = document.querySelector("ul");
var inpSearch = document.querySelector("#search");
var myArray = [];
var exist =false;
var searchArray = [];

// make addEventListener function for clicking on add button
btn.addEventListener("click", function () {
    // make variable for trim input text
    var inpTrim = inpText.value.trim();
    // if myArray is empty
    if (myArray.length == 0) {
          // push inptrim in myArraySearch
        pushArray(myArray, inpTrim);
        // add inptrim in listInner
        listInner(inpTrim);
        // show list in output
        list.style.display = "block";
        // make inpText empty
        inpText.value = null;
        // if myArray is not empty
    } else {
        // condition for inpTrim existing in array
        for (var i = 0; i < myArray.length; i++) {
            // if exist is true go out from loop
            if (inpTrim.toLowerCase() == myArray[i].toLowerCase()) {
                exist =true;
                i=myArray.length;

            }else{
                exist =false;
            }
         
        }
        // condition for existing in the array
        if  (exist){
            inpText.value = null;
            // show alert for existed item
            alert("Your item is existed! Enter new...");
          }
          else {          
            // push inpTrim in myArray for duplicate words
            pushArray(myArray, inpTrim);
            // for showing list in output
            list.style.display = "block";
            // for adding items in the list
            listInner(inpTrim);
            // empty the inpText for writing new item
            inpText.value = null;
        }
    
    }
});

// make addEventListener function for putting up keyboard keys on input search
inpSearch.addEventListener("keyup", function () {
    // if it is not empty
    if (inpSearch.value != "") {
        // empty the list inner html
        listInner();

        // loop on words that starts with input search value
        for (var i = 0; i < myArray.length; i++) {
            if (searchWith(myArray[i], inpSearch.value)) {
                // push indexes of myArray in searchArray
                pushArray(searchArray, myArray[i]);
                // show the list of searching
                listInner(myArray[i]);
            }
        }
        // else if it is empty
    } else {
        // empty the list inner
        listInner();
        // again show the list of input text in list inner
        for (var i = 0; i < myArray.length; i++) {
            listInner(myArray[i]);
        }
    }
});


// function for pushing one array in another
function pushArray(firstArr, secondArr) {
    return firstArr.push(secondArr);
}

// function for making items to lower case then find the starting word in lowercase
function searchWith(arrayIndex, value) {
    return arrayIndex.toLowerCase().startsWith(value.trim().toLowerCase());
}

// function for making list in inner html
function listInner(value) {
    if (value=="" || value == undefined ) {
        return list.innerHTML += [];
    } else {
        return list.innerHTML += `<li>${value}</li>`;
    }
}