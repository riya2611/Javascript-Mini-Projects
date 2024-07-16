document.getElementById("info").addEventListener('submit', function(e){

    e.preventDefault();

    const gender = document.getElementById("gender").value;
    const age = document.getElementById("age").value;
    const height_f = document.getElementById("height-feet").value;
    const height_in = document.getElementById("height-inches").value;
    const weight = document.getElementById("weight").value;

    if(gender && age && height_f && height_in && weight){
        const height = ((height_f * 12) + height_in) * 0.0254;
        const bmi = weight / (height * height);
        const result = document.getElementById("result");

        let category = '';

        if(bmi < 18.5){
            category = 'Underweight';
        }
        else if(bmi >= 18.5 && bmi < 24.9){
            category = 'Normal Weight';
        }
        else if(bmi >= 25 && bmi < 29.9){
            category = 'Overweight';
        }
        else{
            category = 'Obese';
        }

        let msg = "Gender: " + gender + '<br>';
        msg += "Your BMI: " + bmi.toFixed(2) + '<br>';
        msg += "Category: " + category;

        result.innerHTML = msg;
    }
})