#!/usr/bin/env node

"use strict";

const randomId = require("random-id");
const args = require("args");

const USAGE = `hashgen [-c count] [-l length] [-p pattern]

DESCRIPTION

  Generates a useful random hash string with optional configuration, to stdout.

  Run without arguments to generate one random alphanumeric string,
  30 characters in length.

OPTIONS

  -c, --count     Number of random hashes to generate, one per line.
  -l, --length    Number of characters to include in each hash
  -p, --pattern   Generate hashes from only the characters included in this arg

`;

const options = args.Options.parse([
  {
    name: "count",
    shortName: "c",
    type: "int",
    help: "Number of random hashes to generate, one per line."
  },
  {
    name: "length",
    shortName: "l",
    type: "int",
    help: "Number of characters to include in each hash."
  },
  {
    name: "pattern",
    shortName: "p",
    help: "Generate hashes from only the characters included in this arg."
  }
]);

let parsedArgs = args.parser(process.argv).parse(options);

try {
  if (!parsedArgs.count) {
    console.log(generateHash(parsedArgs.length, parsedArgs.pattern));
    process.exit(0);
  }

  while(parsedArgs.count > 0) {
    console.log(generateHash(parsedArgs.length, parsedArgs.pattern));
    parsedArgs.count -= 1;
  }
  process.exit(0);
} catch (e) {
  console.log(USAGE);
  process.exit(1);
}

function generateHash(length, pattern) {
  return randomId(length, pattern);
}
