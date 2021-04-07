let canvas= document.querySelector("#game");
let ctx= canvas.getContext("2d");
let button= document.querySelectorAll(".click");

const scale=10;
const rows= canvas.height / scale;
const columns= canvas.width / scale;

var snake;
var food;
let direction;


main();

function main(){
    
    snake= new Snake();
    food= new Food();
    food.pickLocation();

    window.setInterval(()=>{
        ctx.clearRect(0,0,canvas.width,canvas.height);
        food.draw();
        snake.update();
        snake.draw();

        if (snake.eat(food)) {
            food.pickLocation();
            clearTimeout(mytimer);
            mytimer =window.setInterval(()=>{
                if(!snake.eat(food)){
                    alert("Time Up");
                    snake.total = 0;
                    snake.tail = [];
                }
            },7000);
        }

        snake.checkCollision();
        document.querySelector('#score').innerHTML = (snake.total)*10;
        
    },120);
    var mytimer =window.setInterval(()=>{
        if(!snake.eat(food)){
            alert("Time Up");
            snake.total = 0;
            snake.tail = [];
        }
    },7000);
} ;   
    
window.addEventListener('keydown',(e)=>{
    direction= e.key.replace('Arrow','');
    snake.changeDirection(direction);
});

button.forEach((btn)=>{btn.addEventListener('click',(e)=>{
    direction=btn.id;
    snake.changeDirection(direction);
});
});


