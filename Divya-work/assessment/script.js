document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector('[data-bs-toggle="dropdown"]');
    const dropdownMenu = menuIcon.nextElementSibling;

    menuIcon.addEventListener('click', function() {
        const isDisplayed = dropdownMenu.classList.contains('show');
        if (isDisplayed) {
            dropdownMenu.classList.remove('show');
        } else {
            dropdownMenu.classList.add('show');
        }
    });

    menuIcon.addEventListener('mouseenter', function() {
        dropdownMenu.classList.add('show');
    });

    dropdownMenu.addEventListener('mouseleave', function() {
        dropdownMenu.classList.remove('show');
    });
});