console.log("Selamat Pagi!");

let hamburgerIsOpen = false;

function openHamburger() {
    let hamburgerNavContainer = document.getElementById(
        "hamburger-nav-container");

        // !hamburgerIsOpen > hamburgerIsOpen = false
        // hamburgerIsOpen > hamburgerIsOpen = true
    if (!hamburgerIsOpen)
        console.log(hamburgerIsOpen);
        hamburgerNavContainer.style.display = 'block'
        hamburgerISOpne = true;
    } else {
        console.log(hamburgerIsOpen);
        hamburgerNavContainer.style.display = none;
        hamburgerISOpen = false;
    }
}