const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// day
const today = new Date();
const dayName = days[today.getDay()]; 
document.getElementById('day').textContent = dayName;
// date
const todate = new Date();
const date = todate.toISOString().split('T')[0];

document.getElementById('date').textContent = date;

// clicked card button
const buttons = document.querySelectorAll(".card-btn");

taskplusValue = 23;
taskMinusValue = 6;
for(let button of buttons){
    button.addEventListener('click',function(){
        alert('board update succesfully');

        if(taskMinusValue > 1){
            taskplusValue += 1;
            taskMinusValue -= 1;
             document.getElementById('task-plas').textContent = taskplusValue;
            document.getElementById('task-minus').textContent = '0' + taskMinusValue;

         
            button.disabled = true;
            button.style.background = 'gray'
        }
        else if(taskMinusValue > 0){
                alert('Congrat ! You Have Complete The Current Task');
                taskplusValue += 1;
                taskMinusValue -= 1;
                document.getElementById('task-plas').textContent = taskplusValue;
                document.getElementById('task-minus').textContent = '0' + taskMinusValue;
                button.disabled = true;
                button.style.background = 'gray'
        }
        else{
            
        }


        let time = new Date();
        let hours = time.getHours();
        let nowHours = hours % 12 || 12;
        let minute = time.getMinutes();
        let nowMinute = minute < 10 ? '0' + minute : minute;
        let pmam = hours > 12 ? 'PM' : "AM" ;
        
        const nowTime = nowHours + ':' + nowMinute + pmam; 

        let taskCard = button.closest('.task'); 
        let titleElement = taskCard.querySelector('.card-title');
        let title = titleElement.textContent;
        let p = document.createElement('p');
        p.classList.add('py-5')
        p.innerText = 'You have completed the task ' + title + nowTime;

        const div = document.getElementById('task-history');
        div.appendChild(p);

    })
}

// clear buttons
document.getElementById('clear-btn').addEventListener('click' , function(){
    document.getElementById('task-history').textContent = '';
})

// theme color changed
const colors = ['#ccd1d1', '#a2d9ce', '#fad7a0', '#aeb6bf', '#9FE2BF' , '#f5cba7'];
let randomColor = 0;
document.getElementById('theme').addEventListener('click', function(){
    
        if(randomColor < colors.length){
            document.getElementById('body').style.background = colors[randomColor];
            randomColor++;
        }
        else{
            randomColor = 0;
        }
        
        
});


// page button clicked
document.getElementById('page-btn').addEventListener('click', function(){
    window.location.href = 'question.html';
})
