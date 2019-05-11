import { Selector } from 'testcafe';

fixture `Populate the Gifs`
    .page `https://stanmozolevskiy.github.io/GifTastic/index.html`;

test('Populate the Gifs', async t => {
    await t
        .typeText(Selector('#input-for-gif'), 'test')
        .click(Selector('#addNewButton'));

    const Gifcard = Selector('.card').find('.card-img-top.hl');

    await t
        .click(Selector('#blur'));
});

test('Populate Button', async t => {
    await t
        .typeText(Selector('#input-for-gif'), 'test')
        .pressKey('enter');

    const button = Selector('button').withText('Test');

    await t
        .drag(Selector('#border'), -148, 29, {
            offsetX: 196,
            offsetY: 12
        });
});