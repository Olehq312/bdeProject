//First test - minor change
import { Selector } from 'testcafe';

fixture`Color Switcher Test`
    .page('http://127.0.0.1:5500/bdeProject/src/index.html'); // Replace with the URL of your page

test('Check for the button', async t => {

    const switchButton = Selector('#switch-button');

    await t
        .click(switchButton)
        .expect(switchButton.innerText).contains('Switch Color');
});



//Second test
test('Switch color and verify display', async t => {

    const colorDisplay = Selector('#color-display');
    const switchButton = Selector('#switch-button');


    async function getBackgroundColor() {
        return (await colorDisplay.getStyleProperty('background-color')).toLowerCase();
    }

    // Start the test
    await t
        .click(switchButton)
        .expect(colorDisplay.innerText).contains('Current Color: ')
        .expect(await getBackgroundColor()).notEql('rgb(255, 255, 255)');

});
