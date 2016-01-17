# Hashgen - simple random hash CLI

Sometimes you just need a command-line utility that generates random hashes
to standard out. Hashgen does exactly that.

## Installation

Install via npm, globally since it's a command-line utility.

```bash
npm install -g hashgen
```

## Usage

Run hashgen without arguments to generate a single, 30-character random hash.

```bash
hashgen

# tg9hjyGdUSISfcqK4aqIfmeEiWl7kU
```

## Arguments

Hashgen takes a few arguments that let you customise the output. Mostly these
are options for `random-id` the module hashgen uses to generate hashes:

- **-c, --count**     Number of random hashes to generate, one per line.
- **-l, --length**    Number of characters to include in each hash
- **-p, --pattern**   Generate hashes from only the characters included in this 
					  arg
