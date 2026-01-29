// modules/build_overrides/BuildOverrideConstants.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var1 = dependencyMap;
    var0 = 0;
    var3 = var1[var0];
    var1 = require;
    var0 = undefined;
    var4 = var1.bind(var0)(var3);
    var3 = var4.fileFinishedImporting;
    var1 = 'modules/build_overrides/BuildOverrideConstants.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = {
        'discord_marketing': 'Discord Marketing',
        'discord_web': 'Discord Web',
        'discord_ios': 'Discord iOS',
        'discord_android': 'Discord Android',
        'discord_developers': 'Discord Developers'
    };
    var2.BUILD_OVERRIDE_TARGET_NAMES = var1;
    var1 = new Array(7);
    var3 = {
        'id': '1hr',
        'value': 3600,
        'label': '1 Hour'
    };
    var1[0] = var3;
    var3 = {
        'id': '1day',
        'value': 86400,
        'label': '1 Day'
    };
    var1[1] = var3;
    var3 = {
        'id': '3days',
        'value': 259200,
        'label': '3 Days'
    };
    var1[2] = var3;
    var3 = {
        'id': '1week',
        'value': 604800,
        'label': '1 Week'
    };
    var1[3] = var3;
    var3 = {
        'id': '2weeks',
        'value': 1209600,
        'label': '2 Weeks'
    };
    var1[4] = var3;
    var3 = {
        'id': '3weeks',
        'value': 1814400,
        'label': '3 Weeks'
    };
    var1[5] = var3;
    var3 = {
        'id': '1month',
        'value': 2628000,
        'label': '1 Month'
    };
    var1[6] = var3;
    var2.BUILD_OVERRIDE_EXPIRATION_OPTIONS = var1;
    var1 = new Array(5);
    var3 = {
        'id': 'all',
        'value': 'all',
        'label': 'All'
    };
    var1[0] = var3;
    var3 = {
        'id': 'canary',
        'value': 'canary',
        'label': 'Canary'
    };
    var1[1] = var3;
    var3 = {
        'id': 'ptb',
        'value': 'ptb',
        'label': 'PTB'
    };
    var1[2] = var3;
    var3 = {
        'id': 'stable',
        'value': 'stable',
        'label': 'Stable'
    };
    var1[3] = var3;
    var3 = {
        'id': 'staging',
        'value': 'staging',
        'label': 'Staging'
    };
    var1[4] = var3;
    var2.BUILD_OVERRIDE_RELEASE_CHANNEL_OPTIONS = var1;
    var1 = 'buildOverride';
    var2.BUILD_OVERRIDE_COOKIE_NAME = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);