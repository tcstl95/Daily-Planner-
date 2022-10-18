var currentDate = moment().format("MMMM Do YYYY");
$("#currentDay").text(currentDate);
var submit9amEl = $('#submit9am');
var submit10amEl = $('#submit10am');
var submit11amEl = $('#submit11am');
var submit12pmEl = $('#submit12pm');
var submit1pmEl = $('#submit1pm');
var submit2pmEl = $('#submit2pm');
var submit3pmEl = $('#submit3pm');
var submit4pmEl = $('#submit4pm');
var submit5pmEl = $('#submit5pm');



function saveData(){
    localStorage.setItem('9am', 'My 9am Event');
    localStorage.setItem('10am', 'My 10am Event');
    localStorage.setItem('11am', "My 11am Event");
    localStorage.setItem('12pm', "My 12pm Event");
    localStorage.setItem('1pm', "My 1pm Event");
    localStorage.setItem('2pm', "My 2pm Event");
    localStorage.setItem('3pm', "My 3pm Event");
    localStorage.setItem('4pm', "My 4pm Event");
    localStorage.setItem('5pm', "My 5pm Event");

}
saveData()

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
retrive9am()
retrive10am()
retrive11am()
retrive12pm()
retrive1pm()
retrive2pm()
retrive3pm()
retrive4pm()
retrive5pm()


submit9amEl.on('click', function(){
    console.log(retrive9am());
    alert('You did it brother! Event Saved to local storage');
});
submit10amEl.on('click', function (){
    console.log(retrive10am());
    alert('You did it brother! Event Saved to local storage');
});
submit11amEl.on('click', function(){
    console.log(retrive11am());
    alert('You did it brother! Event Saved to local storage');
});
submit12pmEl.on('click', function(){
    console.log(retrive12pm());
    alert('You did it brother! Event Saved to local storage');
})
submit1pmEl.on('click', function(){
    console.log(retrive1pm());
    alert('You did it brother! Event Saved to local storage');
})
submit2pmEl.on('click', function(){
    console.log(retrive2pm());
    alert('You did it brother! Event Saved to local storage');
})
submit3pmEl.on('click', function(){
    console.log(retrive3pm());
    alert('You did it brother! Event Saved to local storage');
})
submit4pmEl.on('click', function(){
    console.log(retrive4pm());
    alert('You did it brother! Event Saved to local storage');
})
submit5pmEl.on('click', function(){
    console.log(retrive5pm());
    alert('You did it brother! Event Saved to local storage');
})

