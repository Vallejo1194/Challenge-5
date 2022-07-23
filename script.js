
var m = moment();



// Day, date, time

$("#currentDay").text(moment().format('LLLL'));


$(document).ready( function() {
    ChangeColor ();
    renderText();
});


function ChangeColor () {
    
    var PresentTime = moment().hours();
    console.log("Current Time" + PresentTime);
       
// Setting past, present future 

    $(".input").each(function () {
        var scheduledTime = parseInt($(this).attr("id"));
        console.log(scheduledTime);

        if (PresentTime > scheduledTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (PresentTime < scheduledTime) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        } else {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
    });
}

/// How the button works, variables for on save button click
var text;
var time;


$(".saveBtn").click(function() {
    text = $(this).siblings(".input").val();
    console.log(text);
    time = $(this).siblings(".hour").text();
    console.log(time);
    localStorage.setItem(time, JSON.stringify(text));

    ChangeColor ();
    renderText ();
    
});


// Button functionality, save button funtionality .val() is where the text goes

var text;
var time;

$(".saveBtn").click(function() {
    text = $(this).siblings(".input").val();
    console.log(text);
    time = $(this).siblings(".hour").text();
    console.log(time);
    localStorage.setItem(time, JSON.stringify(text));

    ChangeColor ();
    renderText ();
    
});


   //Saves and displays events on time blocks / .val() input for text


function renderText () {   
    var saveEventText8 = JSON.parse(localStorage.getItem("8:00 am"));
    $("#8").val("");
    $("#8").val(saveEventText8);

    var saveEventText9 = JSON.parse(localStorage.getItem("9:00 am"));
    $("#9").val("");
    $("#9").val(saveEventText9);
    
    var saveEventText10 = JSON.parse(localStorage.getItem("10:00 am"));
    $("#10").val("");
    $("#10").val(saveEventText10);
    
    var saveEventText11 = JSON.parse(localStorage.getItem("11:00 am"));
    $("#11").val("");
    $("#11").val(saveEventText11);
    
    var saveEventText12 = JSON.parse(localStorage.getItem("12:00 pm"));
    $("#12").val("");
    $("#12").val(saveEventText12);
    
    var saveEventText13 = JSON.parse(localStorage.getItem("13:00 pm"));
    $("#13").val("");
    $("#13").val(saveEventText13);

    var saveEventText14 = JSON.parse(localStorage.getItem("14:00 pm"));
    $("#14").val("");
    $("#14").val(saveEventText14);

    var saveEventText15 = JSON.parse(localStorage.getItem("15:00 pm"));
    $("#15").val("");
    $("#15").val(saveEventText15);

    var saveEventText16 = JSON.parse(localStorage.getItem("16:00 pm"));
    $("#16").val("");
    $("#16").val(saveEventText16);

    var saveEventText17 = JSON.parse(localStorage.getItem("17:00 pm"));
    $("#17").val("");
    $("#17").val(saveEventText17);

    var saveEventText18 = JSON.parse(localStorage.getItem("18:00 pm"));
    $("#18").val("");
    $("#18").val(saveEventText18);

    var saveEventText19 = JSON.parse(localStorage.getItem("19:00 pm"));
    $("#19").val("");
    $("#19").val(saveEventText19);

    var saveEventText20 = JSON.parse(localStorage.getItem("20:00 pm"));
    $("#20").val("");
    $("#20").val(saveEventText20);

};