const canvas=document.getElementById("myCanvas");

canvas.width=window.innerWidth;

const ctx=canvas.getContext("2d");
                // 100x 100y 30w 30h
const car=new Car (100,100,30,50);

car.draw(ctx);

animate();

function animate(){
    car.update();
    canvas.height=window.innerHeight;
    car.draw(ctx);
    requestAnimationFrame(animate);
}