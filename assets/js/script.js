//initiate a moment object
var NowMoment = moment()
// display value of momento object in #displayMoment div
var elemDisplayMoment = document.getElementById('displayMoment');
elemDisplayMoment.innerHTML = NowMoment;
//display  value of date object in #display
var hour = document.querySelector('.hour')
var timeBlock = document.querySelector('.time-block')
var past = document.querySelector('.past')
var present = document.querySelector('present')
var future = document.querySelector('future')

var tasks = {};

//color-code each time-block
function colorCode () {
    if (hour === elemDisplayMoment) {
        timeBlock[i].style.addClass('present');
    }else (hour < elemDisplayMoment || hour > elemDisplayMoment);{
        timeBlock [i].style.getElementsByClassName('past');
        timeBlock[i].style.getElementsByClassName('future');
    }
}


// create tasks inside the "time-block" textarea
var createTask = function(taskText) {
    var taskText = $("<textarea>").addClass('time-block');
}  


// save task function and storage in localStorage
$(".saveBtn").click(function() {
    // get textarea values
    var taskText = $(".time-block").val();
    //save in tasks array
    tasks.push({
    text: taskText,
    });

    saveTasks();
},
function loadTasks() {
        tasks = JSON.parse(localStorage.getItem("tasks"));
        // if nothing in localStorage, create a new object to track all task status arrays
        if (!tasks) {
            tasks = {
                toDo: [],
            };
        }
        // loop over object properties
        $.each(tasks, function (list, arr) {
            console.log(list, arr);
            // then loop over sub-array
            arr.forEach(function (task) {
                createTask(task.text);
            });
        });
},    
function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
})