function openNavigation() {
    let hamburger = document.getElementById('hamburger');
    let navigation = document.getElementById('navigation');

    hamburger.classList.toggle("is-active");
    navigation.classList.toggle("is-active");
}

function openSearch() {
    let searchMenu = document.getElementById('search-menu');
    searchMenu.classList.toggle("is-active");
}

function openProfile() {
    let searchMenu = document.getElementById('profile-menu');
    searchMenu.classList.toggle("is-active");
}

function toggleColorMode() {
    let body = document.getElementById('color-mode');
    body.classList.toggle('dark');
}
