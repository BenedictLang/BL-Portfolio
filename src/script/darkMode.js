// Dark mode
darkModeInit();
/*const themeIcon = document.querySelector('.theme-icon').classList;*/
function darkModeInit() {
    let darkMode = null;
    if (typeof(Storage) !== "undefined") {
        switch (localStorage.getItem("darkMode")) {
            case 'true':
                darkMode = true;
                break;
            case 'false':
                darkMode = false;
                break;
        }
    }
    if (darkMode === null) {
        if (window.matchMedia) {
            darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
    }
    if (darkMode === true) {
        document.documentElement.classList.add('darkMode');
        document.querySelector('.theme-icon').classList.remove('uil-sun');
        document.querySelector('.theme-icon').classList.add('uil-moon');
        console.log("darkMode active");
    } else if (darkMode === false) {
        document.documentElement.classList.remove('darkMode');
        document.querySelector('.theme-icon').classList.remove('uil-moon');
        document.querySelector('.theme-icon').classList.add('uil-sun');
        console.log("lightMode active");
    }
}

/*export function darkModeToggle() {
    document.documentElement.classList.toggle('darkMode');
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem("darkMode", document.documentElement.classList.contains('darkMode').toString());
    }
}*/
/*function darkModeIcon() {
    if (document.querySelector('.theme-icon').classList.contains('uil-moon')){
        document.querySelector('.theme-icon').classList.remove('uil-moon');
        document.querySelector('.theme-icon').classList.add('uil-sun');
    } else {
        document.querySelector('.theme-icon').classList.remove('uil-sun');
        document.querySelector('.theme-icon').classList.add('uil-moon');
    }
}*/
