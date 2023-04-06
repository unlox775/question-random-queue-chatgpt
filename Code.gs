function doGet(e) {
  const user = Session.getActiveUser();
  if (user) {
    const template = HtmlService.createTemplateFromFile('index');
    const htmlOutput = template.evaluate()
      .addMetaTag('viewport', 'width=device-width, initial-scale=1')
      .setTitle('Random Question Selector');

    return htmlOutput.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  } else {
    const loginUrl = ScriptApp.getService().getUrl();
    return HtmlService.createHtmlOutput(`<a href="${loginUrl}">Click here to authorize</a>`);
  }
}

function getSheetData() {
  const allowedEmail = 'unlox775@gmail.com'; // Replace with your email address
  const userEmail = Session.getActiveUser().getEmail();

  if (userEmail !== allowedEmail) {
    throw new Error('Unauthorized access');
  }

  // const spreadsheetId = '1VZ-DLNwue5SpMjBBD7JKFak_MjFrZrK-E_JtflH922s';
  // const range = 'Form Responses 1!A1:D10'; // Adjust this range to match your Sheet's data

  // const sheets = SpreadsheetApp.openById(spreadsheetId);
  // const sheet = sheets.getRange(range);
  // const values = sheet.getValues();

  // return JSON.stringify(values);
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
