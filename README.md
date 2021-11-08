## What?

This is a Node.js app which provides an http interface for locking the cursor and capturing mouse movement.

## Setup

### Prerequisites

1. Node.js version 13.9.0 (due to current [iohook](https://www.npmjs.com/package/iohook) limitations)
2. [Visual Studio 2017](https://visualstudio.microsoft.com/vs/older-downloads/) (For the c++ libraries used by [robotjs](https://www.npmjs.com/package/robotjs))

### Steps
1. Clone this repo
2. `npm i`
3. `node app.js`

## APIs

### GET `/enable`
Enables the cursor lock.<br/>
Returns: "Enabled"

### GET `/disable`
Disables the cursor lock.<br/>
Returns: "Disabled"

### GET `/getMouseDelta`
Gets the delta in mouse movement including deltas from only when the cursor lock is enabled and only from after the last call to this API.<br/>
Returns: "[x delta],[y delta]"