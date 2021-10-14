#!/usr/bin/env node
import greetUser from './cli.js';
import getGcd from '../games/gcd-game.js';
import gameFlow from './index.js';

const userName = greetUser();

console.log('Find the greatest common divisor of given numbers.');
gameFlow(userName, getGcd);
