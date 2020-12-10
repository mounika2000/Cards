// movement animation
const card= document.querySelector('.card');
const container= document.querySelector('.container');
// for rest of the elements
const title= document.querySelector(".title");
const sneaker= document.querySelector('.sneaker img');
const purchase= document.querySelector('.purchase button');
const description= document.querySelector('.info h3');
const sizes= document.querySelector('.sizes');

//movinf animation event
container.addEventListener('mousemove',(e)=>{
   // console.log(e.pageX,e.pageY);
    let xAxis= (window.innerWidth/2- e.pageX)/25;
    let yAxis= (window.innerHeight/2- e.pageY)/25;
    card.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

});

// return the card back to the original position
// animate in
container.addEventListener('mouseenter',(e)=>{
    card.style.transition="none";
    //popout effect for items
    title.style.transform="translateZ(50px)";
    sneaker.style.transform="translateZ(200px) rotateZ(-45deg)";
    purchase.style.transform="translateZ(25px)";
    description.style.transform="translateZ(25px)";
    sizes.style.transform="translateZ(25px)";
})


//Animate out
container.addEventListener('mouseleave',(e)=>{
    card.style.transition="all 0.5s ease";
    card.style.transform=`rotateY(0deg) rotateX(0deg)`
    //popback
    title.style.transform="translateZ(0px)";
    sneaker.style.transform="translateZ(0px) rotateZ(0deg)";
    purchase.style.transform="translateZ(0px)";
    description.style.transform="translateZ(0px)";
    sizes.style.transform="translateZ(0px)";
});