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
