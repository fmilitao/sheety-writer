# Sheety Writer

Web app to append values to google sheets.<br>
This is for my own person use. To get a useful configuration for your own uses, you need to see the configuration section below.

Deployed at:
https://fmilitao.github.io/sheety-writer/

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

1. `yarn start`

   Runs the app in the development mode.<br>
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

   The page will reload if you make edits.<br>
   You will also see any lint errors in the console.

2. `yarn run build`

   Builds the app for production to the `build` folder.<br>
   It correctly bundles React in production mode and optimizes the build for the best performance.

   The build is minified and the filenames include the hashes.<br>
   Your app is ready to be deployed!

   See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

3. `yarn run deploy`

   Builds bundle and deploys to github pages.

<!--
## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
-->

## Configuration

The configuration file that is deployed to GitHub Pages is encrypted with a password.

You should get your own API Key and Client ID by following the steps in:
https://developers.google.com/sheets/api/quickstart/js.<br>
Note that you must whitelist the GitHub Pages URL for your API Key to ensure that it is allowed to request sign ins from that URL.
(You can manage that at: https://console.developers.google.com/apis/credentials.)

The configuration JSON has the following format (note that comments are not valid JSON, so make sure to not include any):

```js
{
  // you can get the 2 from the URL above
  "apiKey": "<YOUR_API_KEY>",
  "clientId": "<YOUR_CLIENT_ID>",
  // you can get the spreadsheetId by looking at the Google Sheet URL
  // https://docs.google.com/spreadsheets/d/<SPREADSHEET_ID>/edit
  "spreadsheetId": "<SPREAD_SHEET_ID_YOU_WANT_TO_WRITE_TO>",
  "sheetData": [
    {
      // the name of the sheet, a string you can usually find at the bottom of the Google Sheet page
      "title": "<TITLE_OF_SHEET>",
      // the following order matters, as the app will append the values in the same order
      // as specified in this array
      "headers": [
        // Comment: number
        { "title": "Amount" },
        // Comment: date
        { "title": "Date" },
        // Comment: text
        { "title": "Comment" },
        {
          // Type: auto-complete text
          "title": "Type",
          // if you want suggestions, populate "value" with some strings
          "values": ["type1", "type2", "hello"]
        }
      ]
    }
    // ... other sheets in the same spreadsheet
  ]
}
```

URL options:

- `debug=<BOOLEAN>` - console log the values to be submitted, but do not send them, and do not load service workers.
- `config=<ENCRYPTED_STRING|JSON>` - override the default configuration with your own, make sure to url encode the string/JSON.

## Creating an Encrypted Configuration File

For encryption:

```bash
# encrypt some JSON file
yarn run encrypt:file PASSWORD PATH_TO_PLAIN_TEXT_JSON_FILE
```

For decryption:

```bash
# encrypt some JSON file
yarn run decrypt:file PASSWORD PATH_TO_ENCRYPTED_JSON_FILE
```

You can try these command with the sample resources:

```bash
yarn run encrypt:file example src/resources/sample.decrypted.json
yarn run decrypt:file example src/resources/sample.encrypted.json
```
