import clc from "cli-color";

const buildOutputMessage = function ({
  string,
  isPalindrome,
}: {
  string: string;
  isPalindrome: boolean;
}): string {
  return `${clc.blue.bold(string)} is a${
    isPalindrome ? " " : clc.red.underline(" not ")
  }palindrome.`;
};

export { buildOutputMessage };
