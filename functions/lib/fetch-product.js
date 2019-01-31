"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fetchProduct(sheets, spreadsheetId, barcode) {
    return new Promise((resolve, reject) => {
        sheets.spreadsheets.values.batchGet({
            spreadsheetId,
            ranges: ['Products', 'Manufacturers'],
        }, (err, res) => {
            if (err) {
                reject(err);
                return;
            }
            const { data: { valueRanges } } = res;
            // Find product
            const product = valueRanges[0].values.find(row => row[0].trim() === barcode);
            // If no product then return error
            if (!product) {
                reject();
            }
            const manufacturer = valueRanges[1].values.find(row => row[0].trim() === product[2].trim());
            resolve({ product, manufacturer });
            return;
        });
    });
}
exports.fetchProduct = fetchProduct;
//# sourceMappingURL=fetch-product.js.map