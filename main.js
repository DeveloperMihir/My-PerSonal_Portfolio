window.addEventListener("load",() => {
    const preloader = document.querySelector(".js-preloader");
    preloader.classList.add("fade-out");

    setTimeout(() => {
        preloader.style.display = "none";
    })


  AOS.init(); 
})





const headerBg = () =>{
    const header = document.querySelector(".js-header")
    window.addEventListener("scroll",function(){
        if(this.scrollY > 0){
            header.classList.add("bg-reveal");
        }else{
            header.classList.remove("bg-reveal");
        }
    });
}
headerBg();


var tablelinks  = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablelinks){
        tablink.classList.remove("active-links");

    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-links")

    document.getElementById(tabname).classList.add("active-tab");
}


var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";

}

function closemenu(){
    sidemenu.style.right = "-200px";
    
}




const scriptURL = 'https://script.google.com/macros/s/AKfycbyvkODmjFb198qaBJIOz_6wdXLPdARYNSKi2egJCgr8CjtbGSIB_EjKQhtMMGhXwdVLqw/exec'
const form = document.forms['submit-to-google-sheet']
 const msg =document.getElementById("msg")
 form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Thanks For Contacting Me "
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})




