// document.addEventListener("DOMContentLoaded", function() {
//     const menuIcon = document.querySelector('[data-bs-toggle="dropdown"]');
//     const dropdownMenu = menuIcon.nextElementSibling;

//     menuIcon.addEventListener('click', function() {
//         const isDisplayed = dropdownMenu.classList.contains('show');
//         if (isDisplayed) {
//             dropdownMenu.classList.remove('show');
//         } else {
//             dropdownMenu.classList.add('show');
//         }
//     });

//     menuIcon.addEventListener('mouseenter', function() {
//         dropdownMenu.classList.add('show');
//     });

//     dropdownMenu.addEventListener('mouseleave', function() {
//         dropdownMenu.classList.remove('show');
//     });
// });

document.getElementById('sidebar-toggler').addEventListener('click', function() {
    var sidebarModal = new bootstrap.Modal(document.getElementById('sidebarModal'));
    sidebarModal.toggle();
    document.getElementById('overlay').classList.toggle('active');
});

// Close the sidebar modal and overlay when the close button is clicked
document.querySelector('#sidebarModal .btn-close').addEventListener('click', function() {
    var sidebarModal = new bootstrap.Modal(document.getElementById('sidebarModal'));
    sidebarModal.hide();
    document.getElementById('overlay').classList.remove('active');
});


