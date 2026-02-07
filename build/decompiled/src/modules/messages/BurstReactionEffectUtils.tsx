// modules/messages/BurstReactionEffectUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var1);
    var4 = {};
    var0 = 'out of burst reactions modal';
    var4.OUT_OF_BURSTS = var0;
    var0 = 1;
    var1 = var7[var0];
    var0 = undefined;
    var8 = var6.bind(var0)(var1);
    var5 = var8.memoize;
    var1 = function(arg0) { // Environment: var3
        _fun55138: for (var _fun55138_ip = 0;;) switch (_fun55138_ip) {
            case 0:
                var5 = arg0;
                var0 = var5.length;
                var2 = 0;
                var0 = var2 < var0;
                var4 = 5;
                var3 = 0;
                var1 = 0;
                if (!var0) {
                    _fun55138_ip = 62;
                    continue _fun55138
                }
            case 24:
                var0 = var5.charCodeAt;
                var6 = var0.bind(var5)(var1);
                var0 = var3 << var4;
                var0 = var0 - var3;
                var3 = var0 + var6;
                var1 = var1 + 1;
                var0 = var5.length;
                var2 = var3;
                if (var1 < var0) {
                    _fun55138_ip = 24;
                    continue _fun55138
                }
            case 62:
                var0 = global;
                var1 = var0.Math;
                var0 = var1.abs;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var1 = var5.bind(var8)(var1);
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/messages/BurstReactionEffectUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.BurstAnalyticTypes = var4;
    var3 = function(arg0, arg1) { // Environment: var3
        var11 = arg0;
        var3 = arg1;
        var2 = _closure1_slot0;
        var0 = _closure1_slot1;
        var5 = 0;
        var1 = var0[var5];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.getComplimentaryPaletteForColor;
        var4 = var3.r;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = var3.g;
        var0[1] = var4;
        var3 = var3.b;
        var0[2] = var3;
        var9 = 2;
        var10 = var1.bind(var2)(var0, var9);
        var4 = var11.replace;
        var0 = var10[var5];
        var0 = var0[var5];
        var8 = 255;
        var19 = var0 / var8;
        var0 = var10[var5];
        var1 = 1;
        var0 = var0[var1];
        var17 = var0 / var8;
        var0 = var10[var5];
        var0 = var0[var9];
        var15 = var0 / var8;
        var0 = global;
        var2 = var0.HermesInternal;
        var2 = var2.concat;
        var7 = '[';
        var6 = ',';
        var20 = var7;
        var18 = var6;
        var16 = var6;
        var14 = var6;
        var3 = var20[var2](var19, var18, var17, var16, var15, var14, var13);
        var2 = /(\[1,0,0,)/g;
        var3 = var4.bind(var11)(var2, var3);
        var2 = var3.replace;
        var4 = var10[var1];
        var4 = var4[var5];
        var19 = var4 / var8;
        var4 = var10[var1];
        var4 = var4[var1];
        var17 = var4 / var8;
        var1 = var10[var1];
        var1 = var1[var9];
        var15 = var1 / var8;
        var0 = var0.HermesInternal;
        var0 = var0.concat;
        var20 = var7;
        var18 = var6;
        var1 = var20[var0](var19, var18, var17, var16, var15, var14, var13);
        var0 = /\[0,0,1,/g;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.replaceAnimationColors = var3;
    var2.getBurstAnimationHash = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3241, 22, 2]);