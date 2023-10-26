
interface ColorSwitcher {
    currentColor: string;
    availableColors: string[];
    switchColor: () => void;
}


function updateColorDisplay(color: string) {
    const colorDisplay = document.getElementById('color-display');
    if (colorDisplay) {
        colorDisplay.textContent = `Current Color: ${color}`;
    }
}

function handleSwitchColorClick(colorSwitcher: ColorSwitcher) {
    colorSwitcher.switchColor();
    updateColorDisplay(colorSwitcher.currentColor);
    console.log(`Color switched to: ${colorSwitcher.currentColor}`);
    document.body.style.backgroundColor = colorSwitcher.currentColor;
}



const colorSwitcher: ColorSwitcher = {
    currentColor: 'red',
    availableColors: ['red', 'blue', 'green', 'yellow'],
    switchColor: function () {
        const randomIndex = Math.floor(Math.random() * this.availableColors.length);
        this.currentColor = this.availableColors[randomIndex];
    },
};


const switchButton = document.getElementById('switch-button');
if (switchButton) {
    console.log('Adding event listener to the "Switch Color" button');
    switchButton.addEventListener('click', () => handleSwitchColorClick(colorSwitcher));
}

//to display the colour
updateColorDisplay(colorSwitcher.currentColor);

