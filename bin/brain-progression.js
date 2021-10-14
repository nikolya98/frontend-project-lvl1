#!/usr/bin/env node
import greetUser from './cli.js';
import guessProgressionElem from '../games/progression-game.js';
import gameFlow from './index.js';

const userName = greetUser();

console.log('What number is missing in the progression?');
gameFlow(userName, guessProgressionElem);
