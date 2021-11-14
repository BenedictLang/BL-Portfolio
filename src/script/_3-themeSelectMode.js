// Dark mode
ThemeInit();
function ThemeInit() {
    let darkModePreferred = null;
    if (typeof(Storage) !== "undefined") {
        switch (localStorage.getItem("darkMode")) {
            case 'true':
                darkModePreferred = true;
                break;
            case 'false':
                darkModePreferred = false;
                break;
        }
    }
    if (darkModePreferred === null) {
        if (window.matchMedia) {
            darkModePreferred = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
    }

    if (darkModePreferred === true) {
        document.documentElement.classList.add('darkMode');
        loadTheme()
    } else if (darkModePreferred === false) {
        document.documentElement.classList.remove('darkMode');
        loadTheme()
    }
}

document.querySelectorAll('.dark-mode-toggle').forEach((toggle) => {
    toggle.addEventListener('click', () => darkModeToggle);
});

//toggle theme mode
window.darkModeToggle = function darkModeToggle() {
    document.documentElement.classList.toggle('darkMode');
    loadTheme()
}

//set theme
function loadTheme(){
    loadThemeIcon();
    loadSVGColors();
}

function loadSVGColors() {
    const svg = document.querySelectorAll('.svg');
    Array.from(svg).forEach(svg => {
        const style = getComputedStyle(document.body);
        const element = svg.contentDocument;
        const textClr = element.querySelectorAll('.svg-element__textClr');
        Array.from(textClr).forEach(e => {
            e.style.fill = style.getPropertyValue('--clr-text');
        });
        const primeConClr = element.querySelectorAll('.svg-element__primeContrastClr');
        Array.from(primeConClr).forEach(e => {
            e.style.fill = style.getPropertyValue('--clr-primary-contrast');
        });
    });
}

function loadThemeIcon(){

    const themeIcon = Array.from(document.querySelectorAll('.theme-icon'));
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem("darkMode", document.documentElement.classList.contains('darkMode').toString());
    }
    if (!document.documentElement.classList.contains('darkMode')) {
        themeIcon.forEach(icon => {
            icon.classList.remove('uil-moon');
            icon.classList.add('uil-sun');
        });
    } else {
        themeIcon.forEach(icon => {
            icon.classList.add('uil-moon');
            icon.classList.remove('uil-sun');
        });
    }
}

