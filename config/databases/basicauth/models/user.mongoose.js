'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const scheme = {
  id: ObjectId,
  updatedat: {
    type: Date,
    default: Date.now,
  },
  createdat: {
    type: Date,
    default: Date.now,
  },
  username: String,
  password: String,
};

module.exports = {
  scheme,
  options: {},
  coreDataOptions: {
    sort: { createdat: -1, },
    docid: ['_id', 'username',],
    search: ['username',],
    // population: false,
  },
};