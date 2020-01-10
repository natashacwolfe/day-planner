let container = $(".container");
let body = $("body");
let currentDate = $("#currentDay")
let timeFormat = moment().format("dddd, MMMM Do YYYY");



$( document ).ready(function() {
    console.log( "document loaded" );


function displayTime(){
currentDate.text(timeFormat) 

}

displayTime();
});




