const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});

function calculateAge(dob) {
    const dobDate = new Date(dob);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - dobDate.getFullYear();
    const monthDifference = currentDate.getMonth() - dobDate.getMonth();
    const dayDifference = currentDate.getDate() - dobDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    return age;
}

function appendAgeIntoPTag(dob) {
    const age = calculateAge(dob);
    const pTag = document.querySelector('.section__subtitle.section__subtitle--age');
    if (pTag) {
        pTag.textContent += ` (Age: ${age})`;
    }
}

const dob = '1995-01-01'; //Not my real DOB for securing my personal info but my actual birth year!
appendAgeIntoPTag(dob);