let container = $(".container"); // setting variable for html element
let body = $("body");// setting variable for html element
let currentDate = $("#currentDay") // setting variable for html element
let timeFormat = moment().format("dddd, MMMM Do"); // date formate using moments js
let currentHour = moment().hour(); // getting current hour using moments js
let textarea = $("textarea"); // setting variable for html element
let saveBtn = $(".saveBtn"); // setting variable for html element

// on load
$( document ).ready(function() {
    console.log( "document loaded" );

    // rendering time top of page
    function displayTime(){
        currentDate.text(timeFormat) 
        }
        getStorage();
        displayTime();
});

// for each textarea set color depending on the current hour and checking if it is = < or > the textarea class
$(textarea).each(function(){
    let timeblockColor = parseInt($(this).attr("id"));
    console.log(timeblockColor);
    
    if (timeblockColor === currentHour){
        $(this).addClass("present")
    } else if (timeblockColor > currentHour){
        $(this).addClass("future")
    } else if (timeblockColor < currentHour){
        $(this).addClass("past")
    }
})


// for each textarea, save the key value to storage
function setStorage(){
    $(textarea).each(function(){
    let textareaTime = $(this).attr("id");
    let textareaTask = $(this).val();
    
    localStorage.setItem(textareaTime, textareaTask)

    console.log(textareaTask);
    console.log(textareaTime);
})
}

// for each textarea, setting the var savedTask to the value in storage and setting the text in the textarea to savedTask
function getStorage(){
    $(textarea).each(function(index, value){
        let savedTask = localStorage.getItem(value.id)
        console.log(savedTask);
        $(this).text(savedTask);
    })
}


// entry point
(saveBtn).on("click", setStorage);

// loads local storage on to page
