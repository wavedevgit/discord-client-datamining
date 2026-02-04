// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var2, var3, var4);
    var3 = function arg0() {
        _fun99138: for (var _fun99138_ip = 0;;) switch (_fun99138_ip) {
            case 0:
                var7 = undefined;
                var0 = undefined;
                var8 = undefined;
                var9 = undefined;
                var1 = arg0;
                var1 = var1._sentryMetrics;
                if (var1) {
                    _fun99138_ip = 22;
                    continue _fun99138
                }
            case 20:
                return var7;
            case 22:
                var0 = {};
                var6 = var1;
                var2 = var6[Symbol.iterator];
                var6 = var2().next;
                var4 = 1;
                var3 = 2;
                var1 = 0;
            case 41:
                var10 = var6().value;
                var11 = var2;
                if (!(var11 !== var7)) {
                    _fun99138_ip = 166;
                    continue _fun99138
                }
            case 52: // try_start_0
                var11 = _closure1_slot2;
                var10 = var11.bind(var7)(var10, var3);
                var10 = var10[var4];
                var10 = var11.bind(var7)(var10, var3);
                var12 = var10[var1];
                var8 = var12;
                var9 = var10[var4];
                var11 = var0;
                var11 = var11[var12];
                var10 = var11;
                if (var11) {
                    _fun99138_ip = 113;
                    continue _fun99138
                }
            case 96:
                var13 = var0;
                var12 = var8;
                var11 = new Array(0);
                var13[var12] = var11;
                var10 = var11;
            case 113:
                var12 = var10;
                var11 = var12.push;
                var13 = _closure1_slot0;
                var10 = _closure1_slot1;
                var10 = var10[var4];
                var14 = var13.bind(var7)(var10);
                var13 = var14.dropUndefinedKeys;
                var10 = var9;
                var10 = var13.bind(var14)(var10);
                var10 = var11.bind(var12)(var10);
            case 157: // try_end0
                _fun99138_ip = 41;
                continue _fun99138;
            case 159: // catch_target0
                CatchBlockStart(arg_register = 1);
                var2.return();
                throw var1;
            case 166:
                return var0;
        }
    };
    var2.getMetricSummaryJsonForSpan = var3;
    var1 = function arg0, arg1, arg2, arg3, arg4, arg5, arg6() {
        _fun99139: for (var _fun99139_ip = 0;;) switch (_fun99139_ip) {
            case 0:
                var2 = arg0;
                var7 = arg3;
                var3 = arg6;
                var0 = var2._sentryMetrics;
                if (var0) {
                    _fun99139_ip = 55;
                    continue _fun99139
                }
            case 18:
                var1 = global;
                var1 = var1.Map;
                var4 = var1.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var1
                    }
                });
                var17 = var4;
                var1 = new var17[var1](var16);
                var1 = var1 instanceof Object ? var1 : var4;
                var2._sentryMetrics = var1;
                var0 = var1;
            case 55:
                var6 = global;
                var1 = var6.HermesInternal;
                var10 = var1.concat;
                var17 = '';
                var16 = arg1;
                var15 = ':';
                var14 = arg2;
                var13 = '@';
                var12 = arg4;
                var4 = var17[var10](var16, var15, var14, var13, var12, var11);
                var1 = var0.get;
                var8 = var1.bind(var0)(var3);
                var2 = var0;
                if (var8) {
                    _fun99139_ip = 168;
                    continue _fun99139
                }
            case 109:
                var1 = var2.set;
                var0 = new Array(2);
                var0[0] = var4;
                var5 = {};
                var5.min = var7;
                var5.max = var7;
                var9 = 1;
                var5.count = var9;
                var5.sum = var7;
                var9 = arg5;
                var5.tags = var9;
                var0[1] = var5;
                var0 = var1.bind(var2)(var3, var0);
                _fun99139_ip = 323;
                continue _fun99139;
            case 168:
                var5 = _closure1_slot2;
                var1 = undefined;
                var0 = 2;
                var0 = var5.bind(var1)(var8, var0);
                var8 = 1;
                var5 = var0[var8];
                var1 = var2.set;
                var0 = new Array(2);
                var0[0] = var4;
                var4 = {};
                var11 = var6.Math;
                var10 = var11.min;
                var9 = var5.min;
                var9 = var10.bind(var11)(var9, var7);
                var4.min = var9;
                var10 = var6.Math;
                var9 = var10.max;
                var6 = var5.max;
                var6 = var9.bind(var10)(var6, var7);
                var4.max = var6;
                var6 = var5.count;
                var6 = var6 + var8;
                var5.count = var6;
                var4.count = var6;
                var6 = var5.sum;
                var6 = var6 + var7;
                var5.sum = var6;
                var4.sum = var6;
                var5 = var5.tags;
                var4.tags = var5;
                var0[1] = var4;
                var0 = var1.bind(var2)(var3, var0);
            case 323:
                var0 = undefined;
                return var0;
        }
    };
    var2.updateMetricSummaryOnSpan = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 12871]);