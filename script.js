window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".nav");
    if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
    ) {
        navbar.classList.add("shrink");
    } else {
        navbar.classList.remove("shrink");
    }
});

const navLinks = document.querySelectorAll("nav a");

function getPosition(element) {
    let top = 0;

    while (element) {
        top += element.offsetTop;
        element = element.offsetParent;
    }

    return top;
}

function getActiveSection() {
    let fromTop = window.scrollY + 350;

    for (let i = navLinks.length - 1; i >= 0; i--) {
        let section = document.querySelector(navLinks[i].hash);
        if (section) {
            let position = getPosition(section);

            if (
                position <= fromTop &&
                position + section.offsetHeight > fromTop
            ) {
                return navLinks[i];
            }
        }
    }
}

window.addEventListener("scroll", () => {
    let activeLink = getActiveSection();

    if (activeLink) {
        navLinks.forEach((link) => {
            link.classList.remove("accent");
        });
        activeLink.classList.add("accent");
    }
});
