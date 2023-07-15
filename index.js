const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {
    let height = document.body.scrollHeight - window.innerHeight;
    let scrollPosition = document.documentElement.scrollTop;
    let width = (scrollPosition / height) * 100;
    progressBar.style.width = `${width}%`;
})


// Valentine's Mode
var checkbox = document.getElementById('heart');
checkbox.addEventListener("change", validaCheckbox, false);
function validaCheckbox() {
    var checked = checkbox.checked;
    if (checked) {
        setTheme('dark')
    } else {
        setTheme('light')
    }
}

window.addEventListener('load', function () {
    setTheme('light')
});

const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme)
}

const toggleBtn = document.getElementById('heart')
toggleBtn.addEventListener('click', () => {
    let switchTheme = localStorage.getItem('theme') == 'dark' ? 'light' : 'dark'
    setTheme(switchTheme)
    document.documentElement.classList.toggle('dark')
})
