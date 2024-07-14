const color_box = document.getElementById("color-box");

const redSlider = document.getElementById("redSlider");
const greenSlider = document.getElementById("greenSlider");
const blueSlider = document.getElementById("blueSlider");

const redValue = document.getElementById("redValue");
const greenValue = document.getElementById("greenValue");
const blueValue = document.getElementById("blueValue");

const copyButton = document.getElementById("copyButton");
const rgbInputValue = document.getElementById("inputType");

redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);
copyButton.addEventListener('click', copyRGBValue);

function updateColor(){
    const red = redSlider.value;
    const green = greenSlider.value;
    const blue = blueSlider.value;

    console.log(red, green, blue);

    const color = `rgb(${red}, ${green}, ${blue})`;
    console.log(color);

    color_box.style.backgroundColor = color;
    rgbInputValue.textContent = color;

    redValue.textContent = red;
    greenValue.textContent = green;
    blueValue.textContent = blue;
}

updateColor();

function copyRGBValue(){
    const red = redSlider.value;
    const green = greenSlider.value;
    const blue = blueSlider.value;

    const color = `rgb(${red}, ${green}, ${blue})`;

    navigator.clipboard.writeText(color)
    .then(()=>{
        console.log("Copied to clipboard");
        alert("RGB Color Value copied to clipboard." + color);
    })
    .catch((error)=>{
        console.error("Failed to copy RGB value:", error);
    })
}
