function doGet(e) {
  const template = HtmlService.createTemplateFromFile('index');
  const htmlOutput = template.evaluate()
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setTitle('Random Question Selector');

  return htmlOutput.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getSheetData() {
  return '{}'
}

function checkUserAuthorization() {
  const userEmail = Session.getActiveUser().getEmail();
  const allowedEmail = 'unlox775@gmail.com'; // Replace with your email address

  if (userEmail === allowedEmail) {
    return true;
  } else {
    return false;
  }
}
