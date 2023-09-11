function toggleModal(event) {
    event.preventDefault();
    document.querySelector('#modal-example').attributes.setNamedItem(document.createAttribute('open'));
}

document.querySelector('#deactivate').addEventListener('click', (e) => {
    e.target.classList.add("flip-scale-up-ver");
    e.target.attributes.setNamedItem(document.createAttribute('disabled'));
});

document.addEventListener("scroll", () => {
    setTimeout(function () {
        document.querySelector("#nav").style.opacity = "1"
    }, 500);
    document.querySelector("#nav").style.opacity = "0.3"
})