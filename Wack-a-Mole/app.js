let squares=document.querySelectorAll('.square');
let mole=document.querySelector('.mole');
let timeLeft=document.querySelector('.Time_left');
let score=document.querySelector('.score');
let hitPosition
let result=0;
let currentTime=10;
let timeId
function randomSquare(){
squares.forEach(square =>{
    square.classList.remove('mole');
}

)
let randomPosition=squares[Math.floor(Math.random()*9)]
randomPosition.classList.add('mole');
hitPosition=randomPosition;
}

squares.forEach(square=>{
    square.addEventListener('mousedown', () => {
      if(square.id==hitPosition.id){
          result++;
          score.textContent=result;
          hitPosition=null;
      }
    }
    )
})


function moveMole(){
   timeId= setInterval(randomSquare,1500);
}
moveMole();

function countDown()
{
    currentTime--;
    timeLeft.textContent=currentTime;
    
    if(currentTime==0){
        clearInterval(countDownId);
        alert('your score is  '+ result)
        clearInterval(timeId);
    }


}
 
let countDownId=setInterval(countDown,1000);

randomSquare()