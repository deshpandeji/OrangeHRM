import { Selector } from 'testcafe'

const nameInput = Selector('#developer-name')

fixture`My Fixture`.page`http://devexpress.github.io/testcafe/example/`

test.only('My Test', async t => {
  await t
    .typeText(nameInput, 'Nagesh')
    .click(nameInput, { caretPos: 6 })
    .pressKey('D')
})
