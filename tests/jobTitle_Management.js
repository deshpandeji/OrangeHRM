import { Selector } from 'testcafe'
//ignore-prettier
fixture`Search Job Title`.page`https://opensource-demo.orangehrmlive.com/`

test.before(async t => {
  await t.maximizeWindow()
  const loginName = Selector('#divUsername')
  const password = Selector('#txtPassword')
  const submitButton = Selector('#btnLogin')

  await t.typeText(loginName, 'Admin', { paste: true })
  await t.typeText(password, 'admin123', { paste: true })
  await t.click(submitButton)
})('Job Title: Management', async t => {
  await t.maximizeWindow()
  const dashboard = Selector('#content > div > div.head > h1')
  await t.expect(dashboard.innerText).contains('Dashboard')
  const adminMenu = Selector('#menu_admin_viewAdminModule')
  const jobTitlesLink = Selector('a').withText('Job Titles')
  const menuJobs = Selector('#menu_admin_Job')
  const jobDesc = Selector(
    '#resultTable > tbody > tr:nth-child(8) > td:nth-child(3)'
  )

  await t.hover(adminMenu).hover(menuJobs).click(jobTitlesLink)
  await t.expect(jobDesc.innerText).contains('Management')
})
