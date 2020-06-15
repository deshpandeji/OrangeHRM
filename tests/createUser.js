import { Selector } from 'testcafe'
//ignore-prettier
fixture`Create a User`.page`https://opensource-demo.orangehrmlive.com/`

test.before(async t => {
  await t.maximizeWindow()
  const loginName = Selector('#divUsername')
  const password = Selector('#txtPassword')
  const submitButton = Selector('#btnLogin')

  await t.typeText(loginName, 'Admin', { paste: true })
  await t.typeText(password, 'admin123', { paste: true })
  await t.click(submitButton)
})('Create a User', async t => {
  await t.maximizeWindow()
  const dashboard = Selector('#content > div > div.head > h1')
  await t.expect(dashboard.innerText).contains('Dashboard')
  const adminMenu = Selector('#menu_admin_viewAdminModule')
  const UserManage = Selector('#menu_admin_UserManagement')
  const usersLink = Selector('a').withText('Users')
  const addButton = Selector('#btnAdd')
  const selUserRole = Selector('#systemUser_userType')
  const userRole = selUserRole.find('option')
  const empName = Selector('#systemUser_employeeName_empName')
  const uName = Selector('#systemUser_userName')
  const selStatus = Selector('#systemUser_status')
  const usrStatus = selStatus.find('option')
  const newPassword = Selector('#systemUser_password')
  const confPassowrd = Selector('#systemUser_confirmPassword')
  const saveBtn = Selector('#btnSave')
  //const resultTable = Selector('#resultTable').child('td')
  const resultTable = Selector('#inner')  

  await t
    .hover(adminMenu)
    .hover(UserManage)
    .click(usersLink)
    .click(addButton)
    .click(selUserRole)
    .click(userRole.withText('Admin'))
    .click(empName)
    .typeText(empName, 'Linda Anderson', { paste: true })
    .typeText(uName, 'FirstTestUser8', { paste: true })
    .click(selStatus)
    .click(usrStatus.withText('Enabled'))
    .typeText(newPassword, 'Password@123', { paste: true })
    .typeText(confPassowrd, 'Password@123', { paste: true })
    .click(saveBtn)
    .expect(resultTable.innerText).contains('FirstTestUser8')
    
})
