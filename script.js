var text1 = document.querySelector("#text_1");
var text2 = document.querySelector("#text_2");
var text3 = document.querySelector("#text_3");
var text4 = document.querySelector("#text_4");

var section1 = document.querySelector("#section_1");
var section2 = document.querySelector("#section_2");
var section3 = document.querySelector("#section_3");
var section4 = document.querySelector("#section_4");

section1.addEventListener('click', ()=>{

        if(text1.style.display == "none", minus = document.querySelector(".minus-1").style.display == "none"){

           text1.style.display = "block"
           minus = document.querySelector(".minus-1").style.display = "block"
           plus = document.querySelector(".plus-1").style.display = "none"


        }else{
           text1.style.display = "none"
           minus = document.querySelector(".minus-1").style.display = "none"
           plus = document.querySelector(".plus-1").style.display = "block"
        }

})
section2.addEventListener('click', ()=>{

        if(text2.style.display == "none", minus = document.querySelector(".minus-2").style.display == "none"){

           text2.style.display = "block"
           minus = document.querySelector(".minus-2").style.display = "block"
           plus = document.querySelector(".plus-2").style.display = "none"


        }else{
           text2.style.display = "none"
           minus = document.querySelector(".minus-2").style.display = "none"
           plus = document.querySelector(".plus-2").style.display = "block"
        }

})
section3.addEventListener('click', ()=>{

        if(text3.style.display == "none", minus = document.querySelector(".minus-3").style.display == "none"){

           text3.style.display = "block"
           minus = document.querySelector(".minus-3").style.display = "block"
           plus = document.querySelector(".plus-3").style.display = "none"


        }else{
           text3.style.display = "none"
           minus = document.querySelector(".minus-3").style.display = "none"
           plus = document.querySelector(".plus-3").style.display = "block"
        }

})
section4.addEventListener('click', ()=>{

        if(text4.style.display == "none", minus = document.querySelector(".minus-4").style.display == "none"){

           text4.style.display = "block"
           minus = document.querySelector(".minus-4").style.display = "block"
           plus = document.querySelector(".plus-4").style.display = "none"


        }else{
           text4.style.display = "none"
           minus = document.querySelector(".minus-4").style.display = "none"
           plus = document.querySelector(".plus-4").style.display = "block"
        }

})