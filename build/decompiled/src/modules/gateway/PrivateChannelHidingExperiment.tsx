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
    var9 = var4.bind(var0)(var3);
    var8 = var9.createExperiment;
    var7 = {
        'kind': 'user',
        'id': '2024-08_private_channel_hiding',
        'label': 'Private Channel Hiding'
    };
    var3 = {
        'enableObfuscation': false,
        'enableIntegrityCheck': false
    };
    var7.defaultConfig = var3;
    var3 = {
        'id': 1,
        'label': 'Obfuscation Enabled'
    };
    var6 = 1;
    var10 = {
        'enableObfuscation': true,
        'enableIntegrityCheck': false
    };
    var3.config = var10;
    var10 = new Array(2);
    var10[0] = var3;
    var11 = {
        'id': 2,
        'label': 'Obfuscation + Integrity Check Enabled'
    };
    var3 = 2;
    var12 = {
        'enableObfuscation': true,
        'enableIntegrityCheck': true
    };
    var11.config = var12;
    var10[1] = var11;
    var7.treatments = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot0 = var7;
    var6 = var5[var6];
    var8 = var4.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/gateway/PrivateChannelHidingExperiment.tsx';
    var6 = var7.bind(var8)(var6);
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
        var1 = var2.getCurrentConfig;
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
        var1 = var2.useExperiment;
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
        var1 = var2.getCurrentConfig;
        var0 = {};
        var3 = arg0;
        var0.location = var3;
        var0 = var1.bind(var2)(var0);
        var0 = var0.enableIntegrityCheck;
        return var0;
    };
    var2.isChannelMetadataIntegrityCheckEnabled = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3076, 2, 12388]);