document.getElementById('calculateBtn').addEventListener('click', function() {
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);
    const resultSection = document.getElementById('result-section');
    const bmiValue = document.getElementById('bmiValue');
    const bmiStatus = document.getElementById('bmiStatus');

    if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
        alert("Please enter valid weight and height!");
        return;
    }

    // BMI Formula: weight (kg) / [height (m)]^2
    const heightM = heightCm / 100;
    const bmi = (weight / (heightM * heightM)).toFixed(1);

    bmiValue.textContent = bmi;
    resultSection.style.display = "block";

    // Categorize BMI
    if (bmi < 18.5) {
        bmiStatus.textContent = "Underweight";
        bmiStatus.style.color = "#3498db";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiStatus.textContent = "Normal Weight";
        bmiStatus.style.color = "#2ecc71";
    } else if (bmi >= 25 && bmi <= 29.9) {
        bmiStatus.textContent = "Overweight";
        bmiStatus.style.color = "#f1c40f";
    } else {
        bmiStatus.textContent = "Obese";
        bmiStatus.style.color = "#e74c3c";
    }
});