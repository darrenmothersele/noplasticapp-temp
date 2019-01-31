"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const googleapis_1 = require("googleapis");
const fetch_product_1 = require("./fetch-product");
const spreadsheetId = functions.config().sheets.id;
const auth = functions.config().sheets.key;
const sheets = googleapis_1.google.sheets({ version: 'v4', auth });
exports.checkProduct = functions.https.onCall(async (data) => {
    const { barcode } = data;
    try {
        return await fetch_product_1.fetchProduct(sheets, spreadsheetId, barcode);
    }
    catch (err) {
        throw new functions.https.HttpsError('out-of-range', err.message);
    }
});
//# sourceMappingURL=index.js.map