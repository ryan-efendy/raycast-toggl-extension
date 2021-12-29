#!/usr/bin/env node
import 'dotenv/config'
import fetch from 'node-fetch'; 
const URL = 'https://api.track.toggl.com/api/v8/time_entries/start';

export function startTimer(WORKSPACE_ID, desc){
  fetch(URL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${btoa(`${process.env.API_TOKEN}:api_token`)}`
    },
    body: JSON.stringify({"time_entry":{"description":`${desc}`,"wid":WORKSPACE_ID,"created_with":"raycast"}})
    })
    .then((response) => {
      if (!response.ok) {
      throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      console.log(`⏲️: ${desc} timer started`);
    })
    .catch((error) => {
      console.error('There has been a problem with your fetch operation:', error);
  });
}