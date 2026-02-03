// lib/injectMediaEngine.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = require;
    var3 = dependencyMap;
    var _closure1_slot0 = var2;
    var _closure1_slot1 = var3;
    var0 = 0;
    var1 = var3[var0];
    var0 = undefined;
    var5 = var2.bind(var0)(var1);
    var4 = var5.inject;
    var1 = {};
    var7 = function() {
        var0 = true;
        return var0;
    };
    var1.supported = var7;
    var7 = function arg0() {
        var1 = this;
        var0 = var1.getVoiceEngine;
        var2 = var0.bind(var1)();
        var1 = var2.supportsFeature;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.supportsFeature = var7;
    var7 = function() {
        var0 = undefined;
        return var0;
    };
    var1.setProcessPriority = var7;
    var7 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var0 = var0.default;
        return var0;
    };
    var1.getVoiceEngine = var7;
    var6 = function() {
        var0 = {};
        return var0;
    };
    var1.getVoiceFilters = var6;
    var1 = var4.bind(var5)(var1);
    var1 = 2;
    var1 = var3[var1];
    var3 = var2.bind(var0)(var1);
    var2 = var3.fileFinishedImporting;
    var1 = 'lib/injectMediaEngine.native.tsx';
    var1 = var2.bind(var3)(var1);
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3469, 3470, 2]);