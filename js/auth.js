const loginCard = document.getElementById('auth-login');
const registerCard = document.getElementById('auth-register');
const login = document.getElementById('auth-submit-btn');

if (localStorage.getItem('isLoggedIn') === 'true') {
    document.getElementById('auth-container').setAttribute('hidden', '');
    document.getElementById('dashboard').removeAttribute('hidden');
} else {
    document.getElementById('auth-container').removeAttribute('hidden');
    document.getElementById('dashboard').setAttribute('hidden', '');
}

function handleSuccessLoggedIn() {
    document.getElementById('to-register-btn').addEventListener('click', () => {
        loginCard.setAttribute('hidden', '');
        registerCard.removeAttribute('hidden');
    });

    localStorage.setItem('isLoggedIn', 'true');

    alert("Authorization was successful.")

    document.getElementById('auth-container').setAttribute('hidden', '');
    document.getElementById('dashboard').removeAttribute('hidden');
}

// Переключение обратно на Логин
document.getElementById('to-login-btn').addEventListener('click', () => {
    registerCard.setAttribute('hidden', '');
    loginCard.removeAttribute('hidden');
});

login.addEventListener('click', handleSuccessLoggedIn)
