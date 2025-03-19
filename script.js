document.addEventListener('DOMContentLoaded', function () {

    // Functions Pre Variable
    function getId(element) {
        return document.getElementById(element);
    }

    function getClass(element) {
        return document.querySelector(`.${element}`);
    }

    function sendTo(element, path) {
        return element.addEventListener("click", function () {
            window.location.href = `${path}.html`
        });
    }

    // Variables
    const menu = getId('menu');

    // Load Menu
    if (menu) {
        $(function () {
            $("#menu").load("res/menu.html", function () {
                // Once the menu is loaded, get the buttons and attach event listeners
                const homeBtn = getId('homebtn');
                const membershipsBtn = getId('membershipsbtn');
                const contactBtn = getId('contactbtn');
                const accountBtn = getId('accountbtn');
                const loginBtn = getId('loginbtn');

                // Button Redirecting
                sendTo(homeBtn, 'index');
                sendTo(membershipsBtn, 'memberships');
                sendTo(contactBtn, 'contact');
                sendTo(accountBtn, 'account');
                sendTo(loginBtn, 'login');
            });
        });
    }
})