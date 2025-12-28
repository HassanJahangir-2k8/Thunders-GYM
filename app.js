const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    if(weight && height){
        const bmi = (weight / ((height/100) ** 2)).toFixed(2);
        document.getElementById('bmi-result').innerText = "Your BMI is: " + bmi;
    } else {
        document.getElementById('bmi-result').innerText = "Please enter valid numbers!";
    }
}









const infoIcon = document.getElementById('info-icon');
const infoTooltip = document.getElementById('info-tooltip');

infoIcon.addEventListener('click', () => {
    if(infoTooltip.style.display === 'block') {
        infoTooltip.style.display = 'none';
    } else {
        infoTooltip.style.display = 'block';
    }
});


