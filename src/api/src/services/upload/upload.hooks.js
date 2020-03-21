const { authenticate } = require("@feathersjs/authentication").hooks;
const { protect } = require("@feathersjs/authentication-local").hooks;

module.exports = {
  before: {
    all: [ authenticate("jwt") ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [ protect("uri") ],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
