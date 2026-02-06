// modules/guild_onboarding/LandingAssetUtils.tsx
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
    var1 = 'modules/guild_onboarding/LandingAssetUtils.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = function arg0, arg1, arg2() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = var0.assets;
        var3 = 0;
        var4 = var2[var3];
        var2 = arg1;
        var4.p = var2;
        var5 = var0.layers;
        var4 = var5.findIndex;
        var2 = function(arg0) { // Environment: var1
            var0 = arg0;
            var1 = var0.nm;
            var0 = 'flag';
            var0 = var0 === var1;
            return var0;
        };
        var4 = var4.bind(var5)(var2);
        var _closure2_slot2 = var4;
        var2 = var0.layers;
        var2 = var2[var4];
        var2 = var2.shapes;
        var2 = var2[var3];
        var3 = var2.it;
        var2 = var3.forEach;
        var1 = function(arg0, arg1) { // Environment: var1
            _fun43398: for (var _fun43398_ip = 0;;) switch (_fun43398_ip) {
                case 0:
                    var3 = arg1;
                    var1 = _closure2_slot0;
                    var4 = var1.layers;
                    var1 = _closure2_slot2;
                    var1 = var4[var1];
                    var1 = var1.shapes;
                    var4 = 0;
                    var1 = var1[var4];
                    var1 = var1.it;
                    var1 = var1[var3];
                    var5 = var1.ty;
                    var1 = 'gr';
                    if (!(var1 === var5)) {
                        _fun43398_ip = 225;
                        continue _fun43398
                    }
                case 64:
                    var1 = _closure2_slot0;
                    var5 = var1.layers;
                    var1 = _closure2_slot2;
                    var1 = var5[var1];
                    var1 = var1.shapes;
                    var1 = var1[var4];
                    var1 = var1.it;
                    var1 = var1[var3];
                    var6 = var1.it;
                    var5 = var6.findIndex;
                    var1 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var1 = var0.ty;
                        var0 = 'fl';
                        var0 = var0 === var1;
                        return var0;
                    };
                    var1 = var5.bind(var6)(var1);
                    if (!(var1 >= var4)) {
                        _fun43398_ip = 225;
                        continue _fun43398
                    }
                case 125:
                    var1 = _closure2_slot0;
                    var5 = var1.layers;
                    var1 = _closure2_slot2;
                    var1 = var5[var1];
                    var1 = var1.shapes;
                    var1 = var1[var4];
                    var1 = var1.it;
                    var1 = var1[var3];
                    var1 = var1.it;
                    var3 = 1;
                    var1 = var1[var3];
                    var1 = var1.c;
                    var5 = _closure2_slot1;
                    var2 = var5.map;
                    var0 = function(arg0) { // Environment: var0
                        var1 = arg0;
                        var0 = 256;
                        var0 = var1 / var0;
                        return var0;
                    };
                    var8 = var2.bind(var5)(var0);
                    var0 = new Array(1);
                    var9 = var0;
                    var7 = 0;
                    var2 = arraySpread(var9, var8, var7);
                    var0[var2] = var3;
                    var2 = var2 + var3;
                    var1.k = var0;
                case 225:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);