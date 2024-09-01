document.addEventListener('DOMContentLoaded', function () {

    const toggleSwitch = document.getElementById('theme-toggle');
    const table = document.getElementById('table');
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';

    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        toggleSwitch.checked = true;
        table.classList.add('table-dark');
    }

    toggleSwitch.addEventListener('change', function () {
        if (toggleSwitch.checked) {
            document.body.classList.add('dark-mode');
            table.classList.add('table-dark');
            localStorage.setItem('dark-mode', 'true', 'table');
        } else {
            document.body.classList.remove('dark-mode');
            table.classList.remove('table-dark');
            localStorage.setItem('dark-mode', 'false', 'table');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {

    const toggleSwitch = document.getElementById('theme-toggle-green');
    const table = document.getElementById('table');
    const isGreenMode = localStorage.getItem('green-mode') === 'true';

    if (isGreenMode) {
        document.body.classList.add('green-mode');
        toggleSwitch.checked = true;
        table.classList.add('table-success');
    }

    toggleSwitch.addEventListener('change', function () {
        if (toggleSwitch.checked) {
            document.body.classList.add('green-mode');
            table.classList.add('table-success');
            localStorage.setItem('green-mode', 'true', 'table');
        } else {
            document.body.classList.remove('green-mode');
            table.classList.remove('table-success');
            localStorage.setItem('green-mode', 'false', 'table');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {

    const toggleSwitch = document.getElementById('theme-toggle-red');
    const isDarkMode = localStorage.getItem('red-mode') === 'true';

    if (isDarkMode) {
        document.body.classList.add('red-mode');
        toggleSwitch.checked = true;
        table.classList.add('table-danger');
    }

    toggleSwitch.addEventListener('change', function () {
        if (toggleSwitch.checked) {
            document.body.classList.add('red-mode');
            localStorage.setItem('red-mode', 'true', 'table');
        } else {
            document.body.classList.remove('red-mode');
            table.classList.remove('table-danger');
            localStorage.setItem('red-mode', 'false', 'table');
        }
    });
});