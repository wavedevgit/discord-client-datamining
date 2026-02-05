// lib/rateLimit.tsx
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
    var1 = 'lib/rateLimit.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = function arg0, arg1, arg2() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var0 = arg2;
        var _closure2_slot2 = var0;
        var0 = new Array(0);
        var _closure2_slot4 = var0;
        var0 = function arg0() {
            _fun94955: for (var _fun94955_ip = 0;;) switch (_fun94955_ip) {
                case 0:
                    var3 = 0;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var _closure3_slot0 = var0;
                    var4 = global;
                    var5 = var4.Date;
                    var1 = var5.now;
                    var6 = var1.bind(var5)();
                    var7 = _closure2_slot3;
                    var5 = null;
                    if (!(var5 != var7)) {
                        _fun94955_ip = 65;
                        continue _fun94955
                    }
                case 44:
                    var9 = var4.clearTimeout;
                    var8 = _closure2_slot3;
                    var7 = undefined;
                    var7 = var9.bind(var7)(var8);
                    var _closure2_slot3 = var5;
                case 65:
                    var5 = _closure2_slot4;
                    var5 = var5.length;
                    if (!(var5 > var3)) {
                        _fun94955_ip = 125;
                        continue _fun94955
                    }
                case 78:
                    var5 = _closure2_slot4;
                    var5 = var5[var3];
                    if (!(var5 <= var6)) {
                        _fun94955_ip = 125;
                        continue _fun94955
                    }
                case 90:
                    var5 = _closure2_slot4;
                    var7 = var5.shift;
                    var7 = var7.bind(var5)();
                    var5 = var5.length;
                    if (!(var5 > var3)) {
                        _fun94955_ip = 125;
                        continue _fun94955
                    }
                case 113:
                    var5 = _closure2_slot4;
                    var5 = var5[var3];
                    if (var5 <= var6) {
                        _fun94955_ip = 90;
                        continue _fun94955
                    }
                case 125:
                    var5 = _closure2_slot4;
                    var7 = var5.length;
                    var5 = _closure2_slot0;
                    if (!(!(var7 < var5))) {
                        _fun94955_ip = 181;
                        continue _fun94955
                    }
                case 142:
                    var7 = var4.setTimeout;
                    var4 = _closure2_slot4;
                    var4 = var4[var3];
                    var5 = var4 - var6;
                    var4 = undefined;
                    var2 = function() { // Environment: var2
                        var2 = _closure2_slot5;
                        var5 = _closure3_slot0;
                        var1 = new Array(0);
                        var4 = 0;
                        var6 = var1;
                        var0 = arraySpread(var6, var5, var4);
                        var4 = undefined;
                        var6 = var2;
                        var5 = var1;
                        var0 = apply(var6, var5, var4);
                        return var0;
                    };
                    var2 = var7.bind(var4)(var2, var5);
                    _closure2_slot3 = var2;
                    _fun94955_ip = 235;
                    continue _fun94955;
                case 181:
                    var5 = _closure2_slot4;
                    var4 = var5.push;
                    var2 = _closure2_slot1;
                    var2 = var6 + var2;
                    var2 = var4.bind(var5)(var2);
                    var2 = _closure2_slot2;
                    var1 = new Array(0);
                    var12 = var1;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var10 = undefined;
                    var12 = var2;
                    var11 = var1;
                    var0 = apply(var12, var11, var10);
                case 235:
                    var0 = undefined;
                    return var0;
            }
        };
        var _closure2_slot5 = var0;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);