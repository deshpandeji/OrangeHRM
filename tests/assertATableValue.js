import { Selector } from 'testcafe'
//ignore-prettier
fixture`Validate User Name`.page`https://opensource-demo.orangehrmlive.com/`

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
  const userName = Selector('.left > a')

  await t.hover(adminMenu).hover(UserManage).click(usersLink)
  await t.expect(userName.innerText).contains('Admin')
})
