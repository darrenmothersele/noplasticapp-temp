import * as functions from 'firebase-functions';
import { google } from 'googleapis';
import { fetchProduct } from './fetch-product';

const spreadsheetId = functions.config().sheets.id;
const auth = functions.config().sheets.key;
const sheets = google.sheets({version: 'v4', auth});

export const checkProduct = functions.https.onCall(async (data) => {
  const { barcode } = data;
  try {
    return await fetchProduct(sheets, spreadsheetId, barcode);
  } catch (err) {
    throw new functions.https.HttpsError('out-of-range', err.message);
  }
});

