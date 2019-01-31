import {google} from 'googleapis';
import {fetchProduct} from '../src/fetch-product';

const config = require(__dirname + '/../.runtimeconfig.json');

const spreadsheetId = config.sheets.id;
const auth = config.sheets.key;
const sheets = google.sheets({version: 'v4', auth});

async function run() {
  const product = await fetchProduct(sheets, spreadsheetId, '5039303004311');
  console.log(product);
}

run();
