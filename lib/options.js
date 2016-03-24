function get (overwrites) {
    var options = {};

    var ignore = [
        'node_modules/**'
    ];

    options.ignore = ignore.concat(overwrites.ignore ? overwrites.ignore : []);
    return options;
}

module.exports = {
    get: get
};
