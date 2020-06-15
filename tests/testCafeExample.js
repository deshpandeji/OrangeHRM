import { Selector } from 'testcafe'

fixture`Example Page Test`.page`https://devexpress.github.io/testcafe/example/`

test('Slider Test', async t => {
  await t.maximizeWindow()

  const inputName = Selector('#developer-name')
  const populateBtn = Selector('#populate')
  const remoteTesting = Selector('#remote-testing')
  //   const reUseJsCode = Selector('.input').withAttribute('name', 're-using')
  //   const traffic = Selector('.input').withAttribute('name', 'analysis')
  const useTestCafe = Selector('#tried-test-cafe')
  const sliderValue = Selector('div').withAttribute('id', 'slider')

  await t
    // .typeText(inputName, 'Jonathan', { paste: true })
    // .click(populateBtn)
    // .click(remoteTesting)
    // .click(reUseJsCode)
    // .click(traffic)
    .click(useTestCafe)
    .drag('#slider', 700, 0, { offsetX: 12, offsetY: 12 })
    //.expect(slider.value).eql(7)
    .wait(10000)
})
