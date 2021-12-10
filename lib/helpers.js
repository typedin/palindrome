"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildOutputMessage = void 0;
const cli_color_1 = __importDefault(require("cli-color"));
const buildOutputMessage = function ({ string, isPalindrome, }) {
    return `${cli_color_1.default.blue.bold(string)} is a${isPalindrome ? " " : cli_color_1.default.red.underline(" not ")}palindrome.`;
};
exports.buildOutputMessage = buildOutputMessage;
