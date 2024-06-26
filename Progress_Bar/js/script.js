const next = document.getElementById('next');
const prev = document.getElementById('prev');
const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');

let currentActive = 0;

next.addEventListener('click',()=>{
    currentActive++
    if(currentActive > circles.length){
        currentActive = circles.length;
    }
    update();
   

});

prev.addEventListener('click', ()=>{
    currentActive--;
    if(currentActive < 1){
        currentActive = 0;
    }
    update();
})

function update(){
    circles.forEach((circle,idx)=>{
        
        if(idx < currentActive){
            circle.classList.add('active');
        }else{
            circle.classList.remove('active');
        }
    })

    if(currentActive === 1){
        prev.disabled = false;
    }

const actives = document.querySelectorAll('.active');
   progress.style.width = (actives.length - 1)/(circles.length - 1) * 100 + '%';
}

