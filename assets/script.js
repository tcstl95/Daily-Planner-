// Variable to set current date on Planner//

var currentDate = moment().format("MMMM Do YYYY");
$("#currentDay").text(currentDate);

// Variables in order to be used for jquery event listener//

var submit9amEl = $('#submit9am');
var submit10amEl = $('#submit10am');
var submit11amEl = $('#submit11am');
var submit12pmEl = $('#submit12pm');
var submit1pmEl = $('#submit1pm');
var submit2pmEl = $('#submit2pm');
var submit3pmEl = $('#submit3pm');
var submit4pmEl = $('#submit4pm');
var submit5pmEl = $('#submit5pm');



// Functions in order to return value into the local storage//
function retrive9am(){
    return localStorage.getItem('9am');
}
function retrive10am(){
    return localStorage.getItem('10am');
}
function retrive11am(){
    return localStorage.getItem('11am');
}
function retrive12pm(){
    return localStorage.getItem('12pm');
}
function retrive1pm(){
    return localStorage.getItem('1pm');
}
function retrive2pm(){
    return localStorage.getItem('2pm');
}
function retrive3pm(){
    return localStorage.getItem('3pm');
}
function retrive4pm(){
    return localStorage.getItem('4pm');
}
function retrive5pm(){
    return localStorage.getItem('5pm');
}

// Calling functions//
retrive9am()
retrive10am()
retrive11am()
retrive12pm()
retrive1pm()
retrive2pm()
retrive3pm()
retrive4pm()
retrive5pm()

// Event listeners in order for user to submit events into local storage //
submit9amEl.on('click', function(){
    var text = $("#Nine").val()
    localStorage.setItem('9am', text);
    alert('You did it brother! Event Saved to local storage');
});
submit10amEl.on('click', function (){
    var text = $("#Ten").val()
    localStorage.setItem('10am', text);
   alert('You did it brother! Event Saved to local storage');
});
submit11amEl.on('click', function(){
    var text = $("#Eleven").val()
    localStorage.setItem('11am', text);
    alert('You did it brother! Event Saved to local storage');
});
submit12pmEl.on('click', function(){
    var text = $("#Twelve").val()
    localStorage.setItem('12pm', text);
    alert('You did it brother! Event Saved to local storage');
})
submit1pmEl.on('click', function(){
    var text = $("#One").val()
    localStorage.setItem('1pm', text);
    alert('You did it brother! Event Saved to local storage');
})
submit2pmEl.on('click', function(){
    var text = $("#Two").val()
    localStorage.setItem('2pm', text);
    alert('You did it brother! Event Saved to local storage');
})
submit3pmEl.on('click', function(){
    var text = $("#Three").val()
    localStorage.setItem('3pm', text);
    alert('You did it brother! Event Saved to local storage');
})
submit4pmEl.on('click', function(){
    var text = $("#Four").val()
    localStorage.setItem('4pm', text);
    alert('You did it brother! Event Saved to local storage');
})
submit5pmEl.on('click', function(){
    var text = $("#Five").val()
    localStorage.setItem('5pm', text);
    alert('You did it brother! Event Saved to local storage');
})

