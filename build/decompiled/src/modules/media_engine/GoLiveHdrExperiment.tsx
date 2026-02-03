// modules/media_engine/GoLiveHdrExperiment.tsx
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
    var0 = 'never';
    var3.Never = var0;
    var0 = 'always';
    var3.Always = var0;
    var0 = 'permittedDevicesOnly';
    var3.PermittedDevicesOnly = var0;
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var8 = var5.bind(var0)(var4);
    var7 = var8.createApexExperiment;
    var4 = {
        'name': '2026-02-go-live-hdr',
        'kind': 'user'
    };
    var9 = {};
    var10 = var3.Never;
    var9.hdrCaptureMode = var10;
    var4.defaultConfig = var9;
    var9 = {};
    var10 = {};
    var11 = var3.Always;
    var10.hdrCaptureMode = var11;
    var9[1] = var10;
    var10 = {};
    var11 = var3.PermittedDevicesOnly;
    var10.hdrCaptureMode = var11;
    var9[2] = var10;
    var4.variations = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_engine/GoLiveHdrExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2.HdrCaptureMode = var3;
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
    var2.getGoLiveHdrConfig = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1301, 2]);