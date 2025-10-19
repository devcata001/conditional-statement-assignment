const checkWeather = () => {
    if (weather.value == '') {
        weatherStatus.style.color = 'red';
        weatherStatus.innerHTML = "Enter the temperature";
    } else {
        const temperature = Number(weather.value);

        if (temperature <= 19.9) {
            weatherStatus.innerHTML = "The weather is cold"
        } else if (temperature >= 20 && temperature <= 28) {
            weatherStatus.innerHTML = "The weather is normal"
        } else if (temperature >= 28.1) {
            weatherStatus.innerHTML = "The weather is hot"
        }
    }
}

const checkBMI = () => {
    if (height.value == '' || weight.value == '') {
        showStatus.style.color = 'red'
        showStatus.innerHTML = 'Fill in the empty space(s)';
    } else {
        console.log(height.value, weight.value);
        const formula = Number(weight.value) / (Number(height.value) ** 2)
        console.log(formula);
        if (formula < 18.5) {
            showStatus.innerHTML = "Underweight"
        } else if (formula >= 18.5 && formula <= 24.9) {
            showStatus.innerHTML = "Normal"
        } else if (formula >= 25 && formula <= 29.9) {
            showStatus.innerHTML = "Overweight"
        } else if (formula >= 30) {
            showStatus.innerHTML = "Obese"
        }
    }
}

const lowerCase = () => {
    const address = addressInput.value;
    if (address == '') {
        result.style.color = 'red';
        result.innerHTML = "Please enter your delivery address";
    } else {
        result.style.color = 'green';
        result.innerHTML = address.toLowerCase();
    }
}

const checkWeight = () => {
    if (luggageWeight.value == '') {
        weightStatus.style.color = 'red';
        weightStatus.innerHTML = 'Enter the weight of your Lugggage';
    } else {
        const weight = Number(luggageWeight.value);

        if (weight <= 19.9) {
            weightStatus.innerHTML = "Underweight"
        } else if (weight >= 20 && weight <= 30) {
            weightStatus.innerHTML = "Allowed"
        } else if (weight >= 30.1) {
            weightStatus.innerHTML = "Overweight"
        }
    }
}

const checkGrade = () => {
    if (score.value == '') {
        scoreStatus.style.color = 'red';
        scoreStatus.innerHTML = 'Enter your score';
    } else {
        const grade = Number(score.value);

        if (grade <= 39.9) {
            scoreStatus.style.color = 'red';
            scoreStatus.innerHTML = "F (Fail)"
        } else if (grade >= 40 && grade <= 49.9) {
            scoreStatus.style.color = 'yellow';
            scoreStatus.innerHTML = "D (Pass)"
        } else if (grade >= 50 && grade <= 59.9) {
            scoreStatus.style.color = 'blue';
            scoreStatus.innerHTML = "C (Good)"
        } else if (grade >= 60 && grade <= 69.9) {
            scoreStatus.style.color = 'green';
            scoreStatus.innerHTML = "B (Very Good)"
        } else if (grade >= 70 && grade <= 100) {
            scoreStatus.style.color = 'green';
            scoreStatus.innerHTML = "A (Excellent)"
        }
    }
}

const checkEmail = () => {
    if (email.value == '') {
        emailStatus.style.color = 'red';
        emailStatus.innerHTML = 'Please enter your email address';
    } else {
        const userEmail = email.value; 

        if (userEmail.endsWith('@oauife.edu.ng')) {
            emailStatus.style.color = 'green';
            emailStatus.innerHTML = ' Valid OAU email.';
            return true;
        } else {
            emailStatus.style.color = 'red';
            emailStatus.innerHTML = ' Invalid email. Please use your OAU email (must end with @oauife.edu.ng)';
            return false;
        }
    }
};


const checkEligibity = () => {
    if (jambScore.value == '' || course.value == '') {
        checkHere.style.color = 'red';
        checkHere.innerHTML = 'Enter your details first';
    } else {
        const score = Number(jambScore.value);
        const selectedCourse = (course.value);

        if (selectedCourse == 'Medicine') {
            if (score >= 280) {
                checkHere.style.color = 'green';
                checkHere.innerHTML = " You are eligible for Medicine.";
            } else {
                checkHere.innerHTML = " You are not eligible for Medicine. Minimum required score is 280.";
            }
        }
        else if (selectedCourse == 'Engineering') {
            if (score >= 250 && score <= 400) {
                checkHere.style.color = 'green';
                checkHere.innerHTML = "Eligible for Engineering.";
            } else {
                checkHere.style.color = 'red';
                checkHere.innerHTML = " Not eligible for Engineering. Minimum required score is 250.";
            }
        }
        else if (selectedCourse == 'Sciences') {
            if (score >= 220 && score <= 400) {
                checkHere.style.color = 'green';
                checkHere.innerHTML = "Eligible for Sciences.";
            } else {checkHere.style.color = 'red';
                checkHere.innerHTML = " Not eligible for Sciences. inimum required score is 220.";
            }
        }
        else if (selectedCourse == 'Arts') {
            if (score >= 200 && score <= 400) {
                checkHere.style.color = 'green';
                checkHere.innerHTML = " You are eligible for Arts.";
            } else {
                checkHere.style.color = 'red';
                checkHere.innerHTML = " You are not eligible for Arts. THe minimum required score is 200.";
            }
        }
        else {
            checkHere.style.color = 'red';
            checkHere.innerHTML = "Invalid course! Choose Medicine, Engineering, Sciences, or Arts.";
        }
    }
};

const removeExtraSpaces = () => {
    let essay = Input.value;
    if (essay == '') {
        essayCorrect.style.color = 'red';
        essayCorrect.innerHTML = 'Please enter your essay';
    } else if (essay.includes("    ")) {
        essayCorrect.style.white = 'normal';
        essayCorrect.style.color = 'green';
        essayCorrect.innerHTML = essay;
    } else {
        essayCorrect.style.color = 'green';
        essayCorrect.whiteSpace = 'normal';
        essayCorrect.innerHTML = essay;
    }
};

const checkItems = () => {
    if (cartNo.value == '') {
        discountCheck.style.color = 'red';
        discountCheck.innerHTML = 'Please enter the number of items in your cart';
    } else {
        let cart = cartNo.value;

        if ((cart % 2) == 0) {
            discountCheck.style.color = 'green';
            discountCheck.innerHTML = 'Congratulations, you have a discount';
        } else {
            discountCheck.style.color = 'green';
            discountCheck.innerHTML = 'Sorry, you do not have a discount';
        }
    }
};

const checkDiscountPrice = () => {
    if (price.value == '') {
        checkDiscount.style.color = 'red';
        checkDiscount.innerHTML = 'Please enter the price of your goods';
    } else {
        const DiscPrice = Number(price.value); 
        if (DiscPrice <= 4999) {
            checkDiscount.style.color = 'red';
            checkDiscount.innerHTML = 'No discount';
        } 
        else if (DiscPrice >= 5000 && DiscPrice <= 10000) {
            let discount = DiscPrice * 0.05; // 5%
            let newPrice = DiscPrice - discount;
            checkDiscount.style.color = 'green';
            checkDiscount.innerHTML = '5% discount New price: ₦' + newPrice.toFixed(2);
        } 
        else if (DiscPrice >= 10001 && DiscPrice <= 20000) {
            let discount = DiscPrice * 0.10; // 10%
            let newPrice = DiscPrice - discount;
            checkDiscount.style.color = 'green';
            checkDiscount.innerHTML = '10% discount New price: ₦' + newPrice.toFixed(2);
        } 
        else if (DiscPrice > 20000) {
            let discount = DiscPrice * 0.15; // 15%
            let newPrice = DiscPrice - discount;
            checkDiscount.style.color = 'green';
            checkDiscount.innerHTML = '15% discount New price: ₦' + newPrice.toFixed(2);
        }
    }
};
const checkAgeStatus = () => {
    if (birthYear.value == '') {
        ageStatus.style.color = 'red';
        ageStatus.innerHTML = 'Please enter your year of birth';
    } else {
        const year = Number(birthYear.value);
        const currentYear = 2025;
        const age = currentYear - year;

        
        if (year < 1900 || year > currentYear) {
            ageStatus.style.color = 'red';
            ageStatus.innerHTML = 'Invalid year entered. Please enter a valid year of birth.';
        }
        
        else if (age >= 18) {
            ageStatus.style.color = 'green';
            ageStatus.innerHTML = ' You are eligible to vote. You are ' + age + ' years old.';
        } 
        
        else {
            const yearsLeft = 18 - age;
            ageStatus.style.color = 'red';
            ageStatus.innerHTML = ' You are not eligible to vote. You will be eligible in ' + yearsLeft + ' year(s).';
        }
    }
};

const checkUsername = () => {
    if (username.value == '') {
        userStatus.style.color = 'red';
        userStatus.innerHTML = 'Please enter a username';
    } else {
        const user = username.value; 
        const validUsername = /^[A-Za-z0-9_]+$/; 

        if (validUsername.test(user)) {
            userStatus.style.color = 'green';
            userStatus.innerHTML = ' Valid username';
        } else {
            userStatus.style.color = 'red';
            userStatus.innerHTML = ' Invalid username. Only letters, numbers, and underscores are allowed.';
        }
    }
};
