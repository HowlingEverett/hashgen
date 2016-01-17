#!/usr/bin/env node


"use strict";

var randomId = require("random-id");
var args = require("args");

var USAGE = "hashgen [-c count] [-l length] [-p pattern]\n\nDESCRIPTION\n\n  Generates a useful random hash string with optional configuration, to stdout.\n\n  Run without arguments to generate one random alphanumeric string,\n  30 characters in length.\n\nOPTIONS\n\n  -c, --count     Number of random hashes to generate, one per line.\n  -l, --length    Number of characters to include in each hash\n  -p, --pattern   Generate hashes from only the characters included in this arg\n\n";

var options = args.Options.parse([{
  name: "count",
  shortName: "c",
  type: "int",
  help: "Number of random hashes to generate, one per line."
}, {
  name: "length",
  shortName: "l",
  type: "int",
  help: "Number of characters to include in each hash."
}, {
  name: "pattern",
  shortName: "p",
  help: "Generate hashes from only the characters included in this arg."
}]);

var parsedArgs = args.parser(process.argv).parse(options);

try {
  if (!parsedArgs.count) {
    console.log(generateHash(parsedArgs.length, parsedArgs.pattern));
    process.exit(0);
  }

  while (parsedArgs.count > 0) {
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
