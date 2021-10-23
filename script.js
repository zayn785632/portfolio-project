// mouse circle
const mouseCircle = document.querySelector(".mouse-circle");
const mouseDot = document.querySelector(".mouse-dot");

const mouseCircleFn = (x,y)=>{
    mouseCircle.style.cssText=`top:${y}px; left:${x}px; opacity:1`;
    mouseDot.style.cssText=`top:${y}px; left:${x}px; opacity:1`; 
}


//animated mouse circle
const circle = document.querySelectorAll(".circle");
const mainImg = document.querySelector(".main-circle img")
let mX=0;
let mY=0;
const z =70;
const animateCircles =(e,x,y)=>{
if (x<mX){
    circle.forEach((circle)=>{
        circle.style.left=`${z}px`;
    });
    mainImg.style.left=`${z}px`;
}else if(x>mX){
    circle.forEach((circle)=>{
        circle.style.left=`-${z}px`;
    });
    mainImg.style.left=`-${z}px`;
}

if(y<mY){
    circle.forEach((circle)=>{
        circle.style.top=`${z}px`;
    });
    mainImg.style.top=`${z}px`
}else if(y>mY){
    circle.forEach((circle)=>{
        circle.style.top=`-${z}px`;
    });
    mainImg.style.top=`-${z}px`
}
mX=e.clientX;
mY=e.clientY;

}


//end of animated mouse circle

document.body.addEventListener("mousemove",(e) =>{
let x= e.clientX;
let y= e.clientY;
mouseCircleFn(x,y)
animateCircles(e,x,y)
})

document.body.addEventListener("mouseleave",()=>{
    mouseCircle.style.opacity='0';
    mouseDot.style.opacity='0';
})
// end of mouse circle

//main button

const mainBtns= document.querySelectorAll(".main-btn");
mainBtns.forEach(btn =>{
    let ripple;
    btn.addEventListener('mouseenter',e =>{
    const left = e.clientX-e.target.getBoundingClientRect().left;
    const top = e.clienty-e.target.getBoundingClientRect().top;
    ripple = document.createElement('div');
    ripple.classList.add("ripple");
    ripple.style.left=`${left}px`
    ripple.style.top=`${top}px`
    btn.prepend(ripple);
    
    });
    
    btn.addEventListener('mouseleave',()=>{
        btn.removeChild(ripple);
    }) 
})


//end of main button
// navigation
const menuIcon = document.querySelector(".menu-icon");
const navBar = document.querySelector(".navbar");
document.addEventListener('scroll',()=>{
    menuIcon.classList.add("show-menu-icon");
    navBar.classList.add("hide-navbar");

    if(window.scrollY===0){
        menuIcon.classList.remove("show-menu-icon");
        navBar.classList.remove("hide-navbar");

    }
   
});
menuIcon.addEventListener('click' ,()=>{
    menuIcon.classList.remove("show-menu-icon");
    navBar.classList.remove("hide-navbar");
})
//End of navigation

// About me text
const AboutMeText = document.querySelector(".about-me-text");
const AboutMeTextContent = 
"I am a designer & I create some cool & splendid website with the best user experience & I do not talk much, just contact me. :)";


Array.from(AboutMeTextContent).forEach(cha =>{
    const spang = document.createElement("span")
    spang.textContent = cha;
    AboutMeText.appendChild(spang);

    spang.addEventListener("mouseenter", (e)=>{
        e.target.style.animation="AboutMeTextAnime 10s infinite";
    })
});
//End of About me text

// section 3
document.querySelectorAll(".service-btn").forEach(service=>{
    service.addEventListener('click',e=>{
        e.preventDefault();

    const serviceText = service.nextElementSibling
    serviceText.classList.toggle("change");

    
})

});
//End of section 3

// section 4
// form

const FormHeading = document.querySelector(".form-heading");
const FormInputs = document.querySelectorAll(".form-content-input");

FormInputs.forEach(input =>{
input.addEventListener("focus", ()=>{
    FormHeading.style.opacity="0";
    setTimeout(() => {
    FormHeading.textContent=`Your ${input.placeholder}`;
    FormHeading.style.opacity="1";
    }, 300);
})
input.addEventListener("blur", ()=>{
    FormHeading.style.opacity="0";
    setTimeout(() => {
    FormHeading.textContent=`Let's Talk`;
    FormHeading.style.opacity="1"
    }, 300);
})
})

//End of form

// slideshow
const slideShow = document.querySelector(".slideShow");

setInterval(() => {
   const firstIcon = slideShow.firstElementChild
   firstIcon.classList.add("fade-out");
   const thirdIcon = slideShow.children[3]
   thirdIcon.classList.add("light")
   thirdIcon.previousElementSibling.classList.remove("light")


   setTimeout(() => {
    slideShow.removeChild(firstIcon);
    slideShow.appendChild(firstIcon);
    setTimeout(() => {
    firstIcon.classList.remove("fade-out");
        
    }, 500);
   }, 500);
   
  
}, 3000);
// End of slideshow

//form validation
const form = document.querySelector(".contact-form");
const userName = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

const messages= document.querySelectorAll(".message");
const error=(input,message)=>{
input.nextElementSibling.classList.add("error");
input.nextElementSibling.textContent=message;
}

const success= (input) =>{
    input.nextElementSibling.classList.remove("error");

}

const CheckRequiredFields= inputArr=>{
 inputArr.forEach(input=>{
     if(input.value.trim()===""){
         error(input,`${input.id} is required`)
     }
 })
}

const checkLength = (input,min)=>{
    if (input.value.trim().length<min) {
        error(input,`${input.id} must be atleast ${min} characters`);
    }else{
        success(input);
    }
}

const checkEmail = (input)=>{
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(regEx.test(input.value.trim())){
        success(input);
    }else{
        error(input,"Email is not valid")
    }
}

form.addEventListener('submit',e=>{
    e.preventDefault();
    
    checkLength(userName,2);
    checkLength(subject,2);
    checkLength(message,10);
    checkEmail(email);
    CheckRequiredFields([userName,subject,email,message]);
})
//End of form validation

//End of section 4






