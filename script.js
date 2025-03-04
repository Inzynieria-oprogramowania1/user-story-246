function toggleMenu() {
    let menu = document.getElementById("dynamicMenu");
    menu.style.display = menu.style.display === "none" ? "block" : "none";
}

function showSection(sectionId) {
    document.querySelectorAll('.form-container').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function login(event) {
    event.preventDefault();
    alert("Zalogowano użytkownika: " + document.getElementById("username").value);
}

function register(event) {
    event.preventDefault();
    alert("Zarejestrowano użytkownika: " + document.getElementById("newUsername").value);
}

function editPart(event) {
    event.preventDefault();
    alert("Dane części zapisane: " + document.getElementById("partName").value);
}
