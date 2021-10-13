#!/usr/bin/env node
import greetUser from './cli.js';
import calculateNumbers from '../games/calc-game.js';
import gameFlow from './index.js';

const userName = greetUser();

console.log('What is the result of the expression?');

gameFlow(userName, calculateNumbers);