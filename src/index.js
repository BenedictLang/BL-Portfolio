import './styles/main.scss';
import './script/darkMode';
import './script/main';

darkModeInit();
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
    } else if (darkMode === false) {
        document.documentElement.classList.remove('darkMode');
    }
}
function darkModeToggle() {
    document.documentElement.classList.toggle('darkMode');
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("darkMode", document.documentElement.classList.contains('darkMode'));
    }
}