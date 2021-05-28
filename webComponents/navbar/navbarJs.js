document.addEventListener('DOMContentLoaded', () => {

    var navbarComponent = document.getElementById("navbarComponent");
    var navbar = document.createElement("nav"); 
    navbar.classList.add("navbar", "navbar-expand-lg", "bg-dark");
    var aBrand = document.createElement("a");
    aBrand.href = "index.html"
    aBrand.classList.add("navbar-brand");

    var imgLogo = document.createElement("img");
    imgLogo.src = "media/logoSm.svg";
    imgLogo.height = "50";
    imgLogo.alt = "";
    imgLogo.loading = "lazy";

    aBrand.appendChild(imgLogo);
    navbar.appendChild(aBrand);

    var aToggler = document.createElement("a");
    aToggler.classList.add("navbar-toggler");
    aToggler.href = "index.html";
    aToggler.setAttribute("data-toggle", "collapse");
    aToggler.setAttribute("data-target", "#navbarSupportedContent");
    aToggler.setAttribute("aria-controls", "navbarSupportedContent");
    aToggler.setAttribute("aria-expanded", "false");
    aToggler.setAttribute("aria-label", "Toggle navigation");

    var imgIcon = document.createElement("img");
    imgIcon.src = "media/logoToggler.svg";
    imgIcon.height = "50";
    imgIcon.alt = "";
    imgIcon.loading = "eager";
    imgIcon.classList.add("togglerIcon");

    aToggler.appendChild(imgIcon);
    navbar.appendChild(aToggler);

    var divMenu = document.createElement("div");
    divMenu.classList.add("collapse", "navbar-collapse", "justify-content-around", "col-lg-6");
    divMenu.id = "navbarSupportedContent";

    var aQuienSoy = document.createElement("a");
    aQuienSoy.href = "quienSoy.html";
    aQuienSoy.style.color = "white";
    aQuienSoy.classList.add("btn");
    var aQuienSoyText = document.createTextNode("QUIÉN SOY");
    aQuienSoy.appendChild(aQuienSoyText);

    var aTitulos = document.createElement("a");
    aTitulos.href = "conocimientos.html";
    aTitulos.style.color = "white";
    aTitulos.classList.add("btn");
    var aTitulosText = document.createTextNode("CONOCIMIENTOS");
    aTitulos.appendChild(aTitulosText);

    var aTrabajos = document.createElement("a");
    aTrabajos.href = "trabajos.html";
    aTrabajos.style.color = "white";
    aTrabajos.classList.add("btn");
    var aTrabajosText = document.createTextNode("TRABAJOS");
    aTrabajos.appendChild(aTrabajosText);

    var aContacto = document.createElement("a");
    aContacto.href = "contacto.html";
    aContacto.style.color = "white";
    aContacto.classList.add("btn");
    var aContactoText = document.createTextNode("CONTACTO");
    aContacto.appendChild(aContactoText);
    
    divMenu.appendChild(aQuienSoy);
    divMenu.appendChild(aTitulos);
    divMenu.appendChild(aTrabajos);
    divMenu.appendChild(aContacto);
    navbar.appendChild(divMenu);

    navbarComponent.appendChild(navbar);

    const toggler = document.querySelector('.togglerIcon');
    let isClicked = false;

    toggler.addEventListener('click', () => {
        if(isClicked == false){
            toggler.classList.remove('togglerIconFalse');
            toggler.classList.add('togglerIconTrue');
            isClicked = true;
        } else{
            toggler.classList.remove('togglerIconTrue');
            toggler.classList.add('togglerIconFalse');
            isClicked = false;
        }
    });

    const hover = document.querySelectorAll('.btn');

    for (let i = 0; i < hover.length; i++) {
        hover[i].addEventListener("mouseover", () => {
            hover[i].style.color = "#E0171F";
        });

        hover[i].addEventListener("mouseout", () => {
            hover[i].style.color = "white";
        });
    }


})

// , "hover"