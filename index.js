#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Toggl start timer
// @raycast.mode compact

// Optional parameters:
// @raycast.icon ./icons/toggl.png
// @raycast.argument1 { "type": "text", "placeholder": "Description", "optional": true }

// Documentation:
// @raycast.description Start Toggl Timer
// @raycast.author Chris Pennington @cpenned on Twitter

import {startTimer} from './start-timer.js'
import 'dotenv/config'

// const PROJECT_NAME = 'Google'
// const PROJECT_ID = 157063009;

const description = process.argv[2];

startTimer(process.env.WORKSPACE_ID, description);