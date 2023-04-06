function doGet(e) {
  const accessToken = ScriptApp.getOAuthToken();
  const htmlOutput = HtmlService.createHtmlOutputFromFile('index')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setTitle('Random Question Selector');
  
  // Pass the access token to the client-side JavaScript
  htmlOutput.append(`<script>const accessToken = '${accessToken}';</script>`);
  
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
