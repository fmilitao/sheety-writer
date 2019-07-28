/* global gapi */

// Array of API discovery doc URLs for APIs
const discoveryDocs = [
  'https://sheets.googleapis.com/$discovery/rest?version=v4',
];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
// https://developers.google.com/sheets/api/guides/authorizing
const scope = 'https://www.googleapis.com/auth/spreadsheets';

export function loadGApi(
  apiKey: string,
  clientId: string,
  setSignInStatus: (status: boolean) => void,
) {
  function handleClientLoad() {
    gapi.load('client:auth2', initClient);
  }

  async function initClient() {
    try {
      await gapi.client.init({
        apiKey,
        clientId,
        discoveryDocs,
        scope,
      });

      // Listen for sign-in state changes.
      gapi.auth2.getAuthInstance().isSignedIn.listen(setSignInStatus);

      // Handle the initial sign-in state.
      setSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
    }
  }

  const script = document.createElement('script');
  script.src = 'https://apis.google.com/js/client.js';
  script.onload = () => handleClientLoad();
  document.body.appendChild(script);
}

export function handleSignIn() {
  gapi.auth2.getAuthInstance().signIn();
}

export function handleSignOut() {
  gapi.auth2.getAuthInstance().signOut();
}

// https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/append
export async function appendRow(
  spreadsheetId: string,
  sheet: string,
  row: any[],
) {
  const response = await gapi.client.sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheet}`,
    valueInputOption: 'USER_ENTERED',
    resource: {
      values: [row],
    },
  });

  return {
    response,
    updatedRange: response.result.updates.updatedRange,
    updatedRows: response.result.updates.updatedRows,
  };
}

/*
// What follows is code from an abandoned idea of building the config
// dynamically when the user signs in. In practice it is nicer to just
// manually tweak what elements to show or not.

async function updateSheetData(config: GApiData) {
  try {
    const sheets = await getSheets(config.spreadsheetId);
    config.sheetData = sheets;
    console.log(JSON.stringify(config, null, 2));
  } catch (error) {
    console.log('Error!');
    console.log(error);
  }
}

async function getSheets(spreadsheetId: string) {
  const spreadsheet = await gapi.client.sheets.spreadsheets.get({
    spreadsheetId,
  });

  const sheets = spreadsheet.result.sheets
    // do not list sheets that were hidden
    .filter((sheet: any) => !sheet.properties.hidden)
    .map((sheet: any) => ({
      title: String(sheet.properties.title),
      sheetId: String(sheet.properties.sheetId),
    }));

  // no forEach with async/await yet :/
  for (const sheet of sheets) {
    const headers = await getFirstRow(spreadsheetId, sheet.title);
    const expandedHeaders = headers.map((header: string, index: number) => ({
      index,
      title: header,
      values: [],
    }));
    for (const header of expandedHeaders) {
      if (/type/i.test(header.title)) {
        header.values = await getColumnValues(
          spreadsheetId,
          sheet.title,
          header.index,
        );
      }
    }
    sheet.headers = expandedHeaders;
  }
  return sheets;
}

async function getColumnValues(
  spreadsheetId: string,
  sheet: string,
  column: number,
) {
  const columnLetter = String.fromCharCode('A'.charCodeAt(0) + column);
  const response = await gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId,
    // ignores header (position 1)
    range: `${sheet}!${columnLetter}2:${columnLetter}`,
  });
  const flattened = response.result.values.flat();
  // only unique values
  return Array.from(new Set(flattened));
}

async function getFirstRow(spreadsheetId: string, sheet: string) {
  const response = await gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `${sheet}!A1:1`,
  });
  return response.result.values[0];
}
*/
