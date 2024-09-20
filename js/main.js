// select variable 
let icon = document.querySelector(".icon");
let links = document.querySelector(".links ul");
let sitttingBox = document.querySelector(".sitting-box");
let gearSitting = document.querySelector(".fa-gear")
let landing = document.querySelector(".landing")


// toggle class on sitting + gear
gearSitting.onclick = function(){
    gearSitting.classList.toggle("fa-spin")
    
    sitttingBox.classList.toggle("clicked")
}

// toggle class block on icon
icon.addEventListener("click" , ()=>{
    links.classList.toggle("block");
});


// random backgrond
let images = ["1.jpeg" , "2.jpeg" , "3.jpeg" , "4.jpeg", "5.jpeg" ,"color.jpeg"];

// function for random background 
function randomBackgraound(){
    intervalBackground = setInterval(function(){

        let randomNumberImage = Math.floor(Math.random() *images.length )

        landing.style.backgroundImage = 'url("/images/' + images[randomNumberImage] +'")'

    },3000)

}
randomBackgraound()

