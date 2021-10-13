#!/usr/bin/env node
import greetUser from './cli.js';
import guessEven from '../games/even-game.js';
import gameFlow from './index.js';

const userName = greetUser();

console.log('Answer "yes" if the number is even, otherwise answer "no".');
gameFlow(userName, guessEven);
