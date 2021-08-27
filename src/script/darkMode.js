// Dark mode
//theme-toggler
/*const getTheme = window.localStorage && window.localStorage.getItem("theme");
const themeToggle = document.querySelector(".theme-toggle");
const isDark = getTheme === "darkTheme";

if (getTheme !== null) {
    document.body.classList.toggle("dark-theme", isDark);
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("toggleTheme");
    window.localStorage &&
    window.localStorage.setItem(
        "theme",
        document.body.classList.contains("dark-theme") ? "darkTheme" : "light"
    );
});
console.log()*/



/*new vue({
    el: "#app",
    data: function(){
        return {
            darkTheme:false
        }
    },
    methods: {
        toggleTheme: function () {
            this.darkTheme = !this.darkTheme;
        }
    }
})*/



/*
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
        document.documentElement.classList.add('darkmode');
    } else if (darkMode === false) {
        document.documentElement.classList.remove('darkmode');
    }
}
function darkModeToggle() {
    document.documentElement.classList.toggle('darkmode');
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("darkMode", document.documentElement.classList.contains('darkmode'));
    }
}*/
