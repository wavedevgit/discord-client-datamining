// modules/media_engine/H265NoSoftwareDecode.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var3 = {};
    var0 = 'control';
    var3.Control = var0;
    var0 = 'no_software_decode';
    var3.NoSoftwareDecode = var0;
    var0 = 'disabled';
    var3.Disabled = var0;
    var0 = 'no_software_decode_with_fallback';
    var3.NoSoftwareDecodeWithFallback = var0;
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var8 = var5.bind(var0)(var4);
    var7 = var8.createApexExperiment;
    var4 = {
        'name': '2025-11-h265-no-software',
        'kind': 'user'
    };
    var9 = {};
    var10 = var3.Control;
    var9.treatment = var10;
    var4.defaultConfig = var9;
    var9 = {};
    var10 = {};
    var11 = var3.NoSoftwareDecode;
    var10.treatment = var11;
    var9[1] = var10;
    var10 = {};
    var11 = var3.Disabled;
    var10.treatment = var11;
    var9[2] = var10;
    var10 = {};
    var11 = var3.NoSoftwareDecodeWithFallback;
    var10.treatment = var11;
    var9[3] = var10;
    var4.variations = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_engine/H265NoSoftwareDecode.tsx';
    var4 = var5.bind(var6)(var4);
    var2.H265Treatment = var3;
    var1 = function arg0() {
        var0 = arg0;
        var3 = var0.location;
        var2 = _closure1_slot0;
        var1 = var2.getConfig;
        var0 = {};
        var0.location = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.getH265NoSoftwareDecodeConfig = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1301, 2]);