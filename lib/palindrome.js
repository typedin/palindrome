"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(aString) {
    const sanatizedString = sanatizeString(aString);
    let response = true;
    const length = sanatizedString.length;
    for (let forwardIndex = 0, backwardIndex = length - 1; forwardIndex < backwardIndex; forwardIndex++, backwardIndex = length - (forwardIndex + 1)) {
        if (sanatizedString[forwardIndex] != sanatizedString[backwardIndex]) {
            response = false;
            break;
        }
    }
    return response;
}
exports.default = default_1;
function sanatizeString(aString) {
    return aString
        .normalize("NFC")
        .replace(/[^0-9a-z]/gi, "")
        .replace(/\s/g, "")
        .toLocaleLowerCase();
}
