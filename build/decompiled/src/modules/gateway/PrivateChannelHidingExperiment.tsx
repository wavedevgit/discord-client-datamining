// modules/gateway/PrivateChannelHidingExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var7 = var4.bind(var0)(var3);
    var6 = var7.createApexExperiment;
    var3 = {
        'name': '2026-02-private-channel-hiding',
        'kind': 'user'
    };
    var8 = {
        'enableObfuscation': false,
        'enableIntegrityCheck': false
    };
    var3.defaultConfig = var8;
    var8 = {};
    var9 = {
        'enableObfuscation': true,
        'enableIntegrityCheck': false
    };
    var8[1] = var9;
    var9 = {
        'enableObfuscation': true,
        'enableIntegrityCheck': true
    };
    var8[2] = var9;
    var3.variations = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.fileFinishedImporting;
    var3 = 'modules/gateway/PrivateChannelHidingExperiment.tsx';
    var3 = var6.bind(var7)(var3);
    var3 = 2;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var6 = var6.getCachedPrivateChannelObfuscation;
    var2.getCachedPrivateChannelObfuscation = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PRIVATE_CHANNEL_OBFUSCATION_KEY;
    var2.PRIVATE_CHANNEL_OBFUSCATION_KEY = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = var2.getConfig;
        var0 = {};
        var3 = arg0;
        var0.location = var3;
        var0 = var1.bind(var2)(var0);
        var0 = var0.enableObfuscation;
        return var0;
    };
    var2.isChannelMetadataObfuscationEnabled = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = var2.useConfig;
        var0 = {};
        var3 = arg0;
        var0.location = var3;
        var0 = var1.bind(var2)(var0);
        var0 = var0.enableObfuscation;
        return var0;
    };
    var2.useIsChannelMetadataObfuscationEnabled = var3;
    var1 = function arg0() {
        var2 = _closure1_slot0;
        var1 = var2.getConfig;
        var0 = {};
        var3 = arg0;
        var0.location = var3;
        var0 = var1.bind(var2)(var0);
        var0 = var0.enableIntegrityCheck;
        return var0;
    };
    var2.isChannelMetadataIntegrityCheckEnabled = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1301, 2, 12456]);