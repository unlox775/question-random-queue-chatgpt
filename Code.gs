function doGet(e) {
  const template = HtmlService.createTemplateFromFile('index');
  const htmlOutput = template.evaluate()
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setTitle('Random Question Selector');

  return htmlOutput.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getSheetData() {
  const spreadsheetId = '1VZ-DLNwue5SpMjBBD7JKFak_MjFrZrK-E_JtflH922s';
  const range = 'Form Responses 1!A1:D10'; // Adjust this range to match your Sheet's data

  const sheets = SpreadsheetApp.openById(spreadsheetId);
  const sheet = sheets.getRange(range);
  const values = sheet.getValues();

  return JSON.stringify(values);
}

function checkUserAuthorization() {
  const userEmail = Session.getActiveUser().getEmail();
  const allowedEmail = 'your-email@example.com'; // Replace with your email address

  if (userEmail === allowedEmail) {
    return true;
  } else {
    return false;
  }
}
