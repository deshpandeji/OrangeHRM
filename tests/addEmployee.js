import { Selector } from 'testcafe'
//ignore-prettier
fixture`Add a new employee`.page`https://opensource-demo.orangehrmlive.com/`

test.before(async t => {
  await t.maximizeWindow()
  const loginName = Selector('#divUsername')
  const password = Selector('#txtPassword')
  const submitButton = Selector('#btnLogin')

  await t.typeText(loginName, 'Admin', { paste: true })
  await t.typeText(password, 'admin123', { paste: true })
  await t.click(submitButton)
})('Add a new employee with file upload', async t => {
  const pimMenu = Selector('#menu_pim_viewPimModule')
  const addEmp = Selector('a').withText('Add Employee')
  const fName = Selector('#firstName')
  const lName = Selector('#lastName')
  const cFileBtn = Selector('#photofile')
  const saveBtn = Selector('#btnSave')
  const profileHead = Selector('#profile-pic > h1')

  await t
    .hover(pimMenu)
    .click(addEmp)
    .typeText(fName, 'Minion', { paste: true })
    .typeText(lName, 'Bob', { paste: true })
    // substitute the following string with the path to a local file or multiple files you want to upload
    .setFilesToUpload(
      cFileBtn.withAttribute('type', 'file'),
      './image/TestCafe_Upload.jpg'
    )

    .click(saveBtn)
    .expect(profileHead.innerText)
    .contains('Minion Bob')
})
