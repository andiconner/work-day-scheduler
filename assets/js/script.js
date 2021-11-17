
//initiate moment.js to display the current date and time when the page opens
var NowMoment = moment()
// display value of momento object in #displayMoment div
var elemDisplayMoment = document.getElementById('displayMoment');
var elemHourMoment = document.getElementById('hourMoment')
elemDisplayMoment.innerHTML = NowMoment.format("MMM DD, YYYY");
elemHourMoment.innerHTML = NowMoment.format('hh:mm a')


var hour = moment().hour()
var timeArr = [9, 10, 11, 12, 13, 14, 15, 16, 17]
var timeBlock = document.querySelectorAll('.time-block')
var past = document.querySelector('.past')
var present = document.querySelector('.present')
var future = document.querySelector('.future')
var removeTasks = document.getElementById('#remove-tasks')

var tasks = {};


//color-code each time-block
function colorCode() {
    for (let i = 0; i < timeBlock.length; i++) {
        console.log(hour, timeArr[i])
        if (hour > timeArr[i]) {
            timeBlock[i].classList.add('past');
        } else if (hour < timeArr[i]) {
            timeBlock[i].classList.add('future');
        } else {
            timeBlock[i].classList.add('present');
        }
        if (localStorage.getItem(timeArr[i])) {
            $('#' + timeArr[i]).val(localStorage.getItem(timeArr[i]))
        }
    }

}

// create tasks inside the "time-block" textarea
var createTask = function (taskText) {
    var taskText = $('<textarea>').addClass('time-block');
}

$(document).ready(function () {
    colorCode()


// save task function and storage in localStorage
$(".saveBtn").on("click", function (event) {
        var id = $(this).attr('data-id')
        var text = $('#' + id).val()
        console.log(text)
        localStorage.setItem(id, text);

    })
});


