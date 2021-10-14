#!/usr/bin/env node
import greetUser from './cli.js';
import guessSimpleNumber from '../games/prime-game.js';
import gameFlow from './index.js';

const userName = greetUser();

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
gameFlow(userName, guessSimpleNumber);
