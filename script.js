
// menu

const menuIcon = document.querySelector('.menu-icon');
const menuList = document.querySelector('nav');
const hamburgerIcon = document.querySelector('.fa-solid');

menuIcon.addEventListener('click', () => {
    if (hamburgerIcon.classList.contains("fa-bars")) {
        hamburgerIcon.classList.add('fa-xmark');
        hamburgerIcon.classList.remove('fa-bars');
        menuList.style.display = "block";
    } else {
        hamburgerIcon.classList.add("fa-bars");
        hamburgerIcon.classList.remove("fa-xmark");
        menuList.style.display = "none";
    }
});

// images

const image1 = document.querySelector('.image1');

image1.addEventListener('mouseenter', () => {
    image1.style.transform = 'scale(1.4)'
    image1.style.zIndex = '3'
})  

image1.addEventListener('mouseleave', () => {
    image1.style.transform = 'scale(1)'
    image2.style.zIndex = 'auto'
})  


const image2 = document.querySelector('.image2');

image2.addEventListener('mouseenter', () => {
    image2.style.transform = 'scale(1.4)'
    image2.style.zIndex = '3'
})  

image2.addEventListener('mouseleave', () => {
    image2.style.transform = 'scale(1)'
    image2.style.zIndex = 'auto'
})  

const image3 = document.querySelector('.image3');

image3.addEventListener('mouseenter', () => {
    image3.style.transform = 'scale(1.4)'
    image3.style.zIndex = '3'
})  

image3.addEventListener('mouseleave', () => {
    image3.style.transform = 'scale(1)'
    image3.style.zIndex = 'auto'
})  

//scoll button

const scrollTopButton = document.getElementById("scrollTopBtn");


window.addEventListener("scroll", scrollFunction);


function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollTopButton.style.display = "block";
  } else {
    scrollTopButton.style.display = "none";
  }
}


scrollTopButton.addEventListener("click", scrollToTop);


function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
}

//password checker

const password1 = document.querySelector('.password-first')
const password2 = document.querySelector('.password-second')
const paragraphText = document.querySelector('.result-text')

password1.addEventListener("input", () => {
  const password1Value = password1.value
  const password2Value = password2.value

  if (password1Value === password2Value) {
    paragraphText.textContent = "Password matches"
    paragraphText.classList.add("valid")
    paragraphText.classList.remove("invalid")
  } else {
    paragraphText.textContent = "Password does not match"
    paragraphText.classList.add("invalid")
    paragraphText.classList.remove("valid")
  }

  if (password1Value === "" && password2Value === "") {
      paragraphText.textContent = ""
  }

})

password2.addEventListener("input", () => {
  const password1Value = password1.value
  const password2Value = password2.value

  if (password1Value === password2Value) {
    paragraphText.textContent = "Password matches"
    paragraphText.classList.add("valid")
    paragraphText.classList.remove("invalid")
  } else {
    paragraphText.textContent = "Password does not match"
    paragraphText.classList.add("invalid")
    paragraphText.classList.remove("valid")
  }

    if (password1Value === "" && password2Value === "") {
      paragraphText.textContent = ""
  }

})

// light mode

const switcher = document.querySelector('.switch input')
const header = document.querySelector('header')
const themeText = document.querySelector('.switcher-description p')
const themeIcon = document.querySelector('.switcher-description i')

const darkMode = () => {
  themeText.textContent = 'Dark Mode'
  themeIcon.classList.replace('fa-sun', 'fa-moon')

}

const lightMode = () => {
  themeText.textContent = 'Light Mode'
  themeIcon.classList.replace('fa-moon', 'fa-sun')

}

const switchTheme = (event) => {

    console.log(event.target.checked);

    if (event.target.checked) {
      document.documentElement.setAttribute('data-theme', 'light');
      lightMode()
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      darkMode()
    }
}

switcher.addEventListener('change', switchTheme);

