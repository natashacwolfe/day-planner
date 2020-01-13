let container = $(".container");
let body = $("body");
let currentDate = $("#currentDay")
let timeFormat = moment().format("dddd, MMMM Do");
let currentHour = moment().hour();
let textarea = $("textarea");
let saveBtn = $(".saveBtn");

$( document ).ready(function() {
    console.log( "document loaded" );

    function displayTime(){
        currentDate.text(timeFormat) 
        }

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
displayTime();

});

function setStorage(){
    $(textarea).each(function(){
    let textareaTime = $(this).attr("id");
    let textareaTask = $(this).val();
    
    localStorage.setItem(textareaTime, textareaTask)

    console.log(textareaTask);
    console.log(textareaTime);
})
}

function getStorage(){
//     const items = {...localStorage};
//     console.log(items)
//     for (const property in items) {
//         console.log(`${property}: ${items[property]}`);
//         if (items[property]){
//             let $(`#${property}`)
//         } 
//     }
    $(textarea).each(function(index, value){
        let savedTask = localStorage.getItem(value.id)
        console.log(savedTask);
        $(this).text(savedTask);
    })
}



(saveBtn).on("click", setStorage);


getStorage();