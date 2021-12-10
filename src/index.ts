#!/usr/bin/env node

import checker from "./palindrome";
import yargs from "yargs/yargs";
import { buildOutputMessage } from "./helpers";

const argv = yargs(process.argv.slice(2))
  .usage("Usage: palindrome word")
  .example("$0 palindrome abba", "(check wether abba is a palindrome)")
  .demandCommand(1)
  .options({
    _: { type: "string", default: true, demandOption: true },
  })
  .parseSync();

console.log(
  buildOutputMessage({
    string: argv._[0].toString(),
    isPalindrome: checker(argv._[0].toString()),
  })
);
