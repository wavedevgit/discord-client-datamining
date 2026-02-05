// modules/go_live/MobileGoLiveEntrypointExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var1 = {};
    var0 = 0;
    var1.CONTROL = var0;
    var3 = 'CONTROL';
    var1[var0] = var3;
    var4 = 1;
    var1.SCREENSHARE_REPLACES_CHAT = var4;
    var3 = 'SCREENSHARE_REPLACES_CHAT';
    var1[var4] = var3;
    var7 = 2;
    var1.SCREENSHARE_REPLACES_SOUNDBOARD = var7;
    var3 = 'SCREENSHARE_REPLACES_SOUNDBOARD';
    var1[var7] = var3;
    var3 = var6[var0];
    var0 = undefined;
    var8 = var5.bind(var0)(var3);
    var7 = var8.createApexExperiment;
    var3 = {
        'name': '2026-01-mobile-go-live-entrypoint',
        'kind': 'user'
    };
    var9 = {};
    var10 = var1.CONTROL;
    var9.treatment = var10;
    var3.defaultConfig = var9;
    var9 = {};
    var11 = var1.SCREENSHARE_REPLACES_CHAT;
    var10 = {};
    var12 = var1.SCREENSHARE_REPLACES_CHAT;
    var10.treatment = var12;
    var9[var11] = var10;
    var11 = var1.SCREENSHARE_REPLACES_SOUNDBOARD;
    var10 = {};
    var12 = var1.SCREENSHARE_REPLACES_SOUNDBOARD;
    var10.treatment = var12;
    var9[var11] = var10;
    var3.variations = var9;
    var3 = var7.bind(var8)(var3);
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/go_live/MobileGoLiveEntrypointExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.MobileGoLiveEntrypointTreatment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1301, 2]);