﻿var config = {
  'host': '192.168.11.30',
  'table': 'spaceapps'
};

exports.getConnectUrl = function () {
  return 'mongodb://' + config.host + '/' + config.table;
};