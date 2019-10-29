const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const axios = require('axios');
const parseurl = require('parseurl');
const path = require('path');
const expressValidator = require('express-validator');

const db_url ='mongodb://ashique:surface313@ds239928.mlab.com:39928/guestbook';
const Signature = require('./Singnatures');
const app = express();



