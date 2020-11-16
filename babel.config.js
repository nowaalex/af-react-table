const plugins = [
    [ "module-resolver", {
        root: [ "./src" ],
        extensions: [ ".js", ".css", ".scss" ],
        alias: {
            "lodash-es": "lodash",
            "af-virtual-scroll/List": "./src/components/List"
        }
    }],
    [ "@babel/plugin-proposal-decorators", { "legacy": true }],
    [ "@babel/plugin-proposal-class-properties", { loose: true }],
    [ "@babel/plugin-proposal-object-rest-spread", { loose: true, useBuiltIns: true }],
    [ "transform-react-remove-prop-types", {
        mode: "wrap"
    }]
];

const presets = [
    [ "@babel/preset-react", { "runtime": "automatic" }]
];

module.exports = api => {

    const presetEnvOptions = {
        loose: true
    };

    if( api.env( "test" ) ){
        presetEnvOptions.targets = {
            node: "current"
        };
    }
    else{
        presetEnvOptions.modules = false;
        plugins.push([ "@babel/plugin-transform-runtime", { useESModules: true }]);
    }

    presets.push([ "@babel/preset-env", presetEnvOptions ]);

    return {
        plugins,
        presets
    };
};