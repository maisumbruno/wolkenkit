'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var getEnvironmentVariables = require('./getEnvironmentVariables'),
    shell = require('../shell');

var removeContainer = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
    var configuration, env, container, environmentVariables;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (options) {
              _context.next = 2;
              break;
            }

            throw new Error('Options are missing.');

          case 2:
            if (options.configuration) {
              _context.next = 4;
              break;
            }

            throw new Error('Configuration is missing.');

          case 4:
            if (options.env) {
              _context.next = 6;
              break;
            }

            throw new Error('Environment is missing.');

          case 6:
            if (options.container) {
              _context.next = 8;
              break;
            }

            throw new Error('Container is missing.');

          case 8:
            configuration = options.configuration, env = options.env, container = options.container;
            _context.next = 11;
            return getEnvironmentVariables({ configuration: configuration, env: env });

          case 11:
            environmentVariables = _context.sent;
            _context.next = 14;
            return shell.exec('docker rm --force --volumes "' + container.name + '"', {
              env: environmentVariables
            });

          case 14:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function removeContainer(_x) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = removeContainer;