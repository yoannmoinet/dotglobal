#! /usr/bin/env node

var cli = require('cli').enable('status', 'glob', 'version');
var pkg = require('./package.json');
var options = require('./lib/options').get(pkg.dotconf);
cli.setApp(pkg.name, pkg.version);

cli.parse({});

cli.main(function (args, opts) {
    var log = {
        debug: cli.debug,
        error: cli.error,
        fatal: cli.fatal,
        info: cli.info,
        ok: cli.ok
    };
});
