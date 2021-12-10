#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const palindrome_1 = __importDefault(require("./palindrome"));
const yargs_1 = __importDefault(require("yargs/yargs"));
const helpers_1 = require("./helpers");
const argv = yargs_1.default(process.argv.slice(2))
    .usage("Usage: palindrome word")
    .example("$0 palindrome abba", "(check wether abba is a palindrome)")
    .demandCommand(1)
    .options({
    _: { type: "string", default: true, demandOption: true },
})
    .parseSync();
console.log(helpers_1.buildOutputMessage({
    string: argv._[0].toString(),
    isPalindrome: palindrome_1.default(argv._[0].toString()),
}));
