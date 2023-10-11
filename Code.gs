function doGet(e) {
  const template = HtmlService.createTemplateFromFile('index');
  const htmlOutput = template.evaluate()
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setTitle('Random Question Selector');

  return htmlOutput.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getSheetData() {
  const allowedEmail = 'unlox775@gmail.com'; // Replace with your email address
  const userEmail = Session.getActiveUser().getEmail();

  if (userEmail !== allowedEmail) {
    throw new Error('Unauthorized access');
  }

  // Access the Google Sheet
  const sheetId = '1VZ-DLNwue5SpMjBBD7JKFak_MjFrZrK-E_JtflH922s';
  const range = 'Form Responses 1!A:D';
  return gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: range,
  }).then((response) => {
    console.log(response);
    return response.result.values;
  }).error((response) => {
    console.log(`Error: ${response}`);
    return response.result.values;
  })
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
