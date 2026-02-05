// modules/clips/isClientClipsCapable.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportAll;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.Features;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/clips/isClientClipsCapable.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun31013: for (var _fun31013_ip = 0;;) switch (_fun31013_ip) {
            case 0:
                var4 = arg0;
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 1;
                var0 = var3[var0];
                var5 = undefined;
                var0 = var1.bind(var5)(var0);
                var6 = var0.ClipsExperiment;
                var3 = var6.getCurrentConfig;
                var1 = {};
                var0 = 'isClipsClientCapable';
                var1.location = var0;
                var0 = {};
                var7 = false;
                var0.autoTrackExposure = var7;
                var0 = var3.bind(var6)(var1, var0);
                var0 = var0.ignorePlatformRestriction;
                if (var0) {
                    _fun31013_ip = 143;
                    continue _fun31013
                }
            case 76:
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 2;
                var1 = var6[var1];
                var3 = var3.bind(var5)(var1);
                var1 = var3.isDesktop;
                var1 = var1.bind(var3)();
                if (!var1) {
                    _fun31013_ip = 140;
                    continue _fun31013
                }
            case 109:
                var3 = var4.getMediaEngine;
                var4 = var3.bind(var4)();
                var3 = var4.supports;
                var2 = _closure1_slot3;
                var2 = var2.CLIPS;
                var1 = var3.bind(var4)(var2);
            case 140:
                var0 = var1;
            case 143:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3510, 3508, 478, 2]);