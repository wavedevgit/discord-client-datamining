// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var4;
    var3 = function arg0() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.toArray;
        var1 = arg0;
        var3 = var2.bind(var3)(var1);
        var2 = var3.map;
        var1 = function(arg0) { // Environment: var0
            _fun44878: for (var _fun44878_ip = 0;;) switch (_fun44878_ip) {
                case 0:
                    var2 = arg0;
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 2;
                    var0 = var1[var0];
                    var1 = undefined;
                    var0 = var3.bind(var1)(var0);
                    var0 = var0.handlerIDToTag;
                    var0 = var0[var2];
                    if (var0) {
                        _fun44878_ip = 66;
                        continue _fun44878
                    }
                case 41:
                    var2 = var2.current;
                    var3 = null;
                    var3 = var3 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun44878_ip = 63;
                        continue _fun44878
                    }
                case 57:
                    var1 = var2.handlerTag;
                case 63:
                    var0 = var1;
                case 66:
                    if (var0) {
                        _fun44878_ip = 75;
                        continue _fun44878
                    }
                case 69:
                    var0 = -1;
                case 75:
                    return var0;
            }
        };
        var2 = var2.bind(var3)(var1);
        var1 = var2.filter;
        var0 = function(arg0) { // Environment: var0
            var1 = arg0;
            var0 = 0;
            var0 = var1 > var0;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot5 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 0;
    var4 = var4[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var5 = var4.Platform;
    var4 = var4.findNodeHandle;
    var _closure1_slot3 = var4;
    var4 = false;
    var _closure1_slot4 = var4;
    var4 = function arg0, arg1() {
        _fun44880: for (var _fun44880_ip = 0;;) switch (_fun44880_ip) {
            case 0:
                var12 = undefined;
                var2 = undefined;
                var13 = arg0;
                var14 = undefined;
                var15 = undefined;
                var0 = undefined;
                var16 = undefined;
                var17 = undefined;
                var3 = arguments.length;
                var1 = 2;
                if (!(var3 > var1)) {
                    _fun44880_ip = 35;
                    continue _fun44880
                }
            case 27:
                var3 = arguments[var1];
                if (!(var12 === var3)) {
                    _fun44880_ip = 39;
                    continue _fun44880
                }
            case 35:
                var4 = {};
                _fun44880_ip = 43;
                continue _fun44880;
            case 39:
                var4 = arguments[var1];
            case 43:
                var11 = global;
                var3 = var11.Object;
                var2 = var3.assign;
                var1 = {};
                var0 = var2.bind(var3)(var1, var4);
                var10 = arg1;
                var2 = var10[Symbol.iterator];
                var10 = var2().next;
                var8 = 'object';
                var7 = 'hitSlop';
                var6 = 'waitFor';
                var5 = 'simultaneousHandlers';
                var4 = 'onGestureEvent';
                var3 = 'onHandlerStateChange';
                var1 = '__isNative';
            case 101:
                var18 = var10().value;
                var19 = var2;
                if (!(var19 !== var12)) {
                    _fun44880_ip = 317;
                    continue _fun44880
                }
            case 115: // try_start_0
                var16 = var18;
                var19 = var13;
                var21 = var19[var18];
                var17 = var21;
                var15 = var18;
                var14 = var21;
                var21 = var12 === var21;
                var20 = var21;
                if (var21) {
                    _fun44880_ip = 178;
                    continue _fun44880
                }
            case 144:
                var23 = var14;
                var22 = var11.Object;
                var22 = var22.bind(var12)(var23);
                var22 = var23 === var22;
                var21 = var22;
                if (!var22) {
                    _fun44880_ip = 175;
                    continue _fun44880
                }
            case 168:
                var22 = var14;
                var21 = var1 in var22;
            case 175:
                var20 = var21;
            case 178:
                var19 = var20;
                if (var20) {
                    _fun44880_ip = 191;
                    continue _fun44880
                }
            case 184:
                var20 = var15;
                var19 = var3 === var20;
            case 191:
                var18 = var19;
                if (var19) {
                    _fun44880_ip = 204;
                    continue _fun44880
                }
            case 197:
                var19 = var15;
                var18 = var4 === var19;
            case 204:
                if (var18) {
                    _fun44880_ip = 305;
                    continue _fun44880
                }
            case 207:
                var18 = var16;
                if (!(var5 !== var18)) {
                    _fun44880_ip = 273;
                    continue _fun44880
                }
            case 214:
                var18 = var16;
                if (!(var6 !== var18)) {
                    _fun44880_ip = 273;
                    continue _fun44880
                }
            case 221:
                var19 = var16;
                var19 = var7 === var19;
                var18 = var19;
                if (!var19) {
                    _fun44880_ip = 244;
                    continue _fun44880
                }
            case 234:
                var19 = var17;
                var19 = typeof var19;
                var18 = var8 !== var19;
            case 244:
                if (!var18) {
                    _fun44880_ip = 292;
                    continue _fun44880
                }
            case 247:
                var18 = {};
                var19 = var17;
                var18.top = var19;
                var18.left = var19;
                var18.bottom = var19;
                var18.right = var19;
                var17 = var18;
                _fun44880_ip = 292;
                continue _fun44880;
            case 273:
                var19 = _closure1_slot5;
                var20 = var13;
                var18 = var16;
                var18 = var20[var18];
                var17 = var19.bind(var12)(var18);
            case 292:
                var20 = var0;
                var19 = var16;
                var18 = var17;
                var20[var19] = var18;
            case 305: // try_end0
                _fun44880_ip = 101;
                continue _fun44880;
            case 310: // catch_target0
                CatchBlockStart(arg_register = 1);
                var2.return();
                throw var1;
            case 317:
                return var0;
        }
    };
    var2.filterConfig = var4;
    var2.transformIntoHandlerTags = var3;
    var3 = function arg0() {
        _fun44881: for (var _fun44881_ip = 0;;) switch (_fun44881_ip) {
            case 0:
                var2 = _closure1_slot3;
                var1 = undefined;
                var0 = arg0;
                var1 = var2.bind(var1)(var0);
                var0 = null;
                var2 = var0 != var1;
                if (!var2) {
                    _fun44881_ip = 29;
                    continue _fun44881
                }
            case 26:
                var0 = var1;
            case 29:
                return var0;
        }
    };
    var2.findNodeHandle = var3;
    var1 = function() {
        _fun44882: for (var _fun44882_ip = 0;;) switch (_fun44882_ip) {
            case 0:
                var1 = _closure1_slot4;
                if (var1) {
                    _fun44882_ip = 56;
                    continue _fun44882
                }
            case 10:
                var1 = true;
                _closure1_slot4 = var1;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.ghQueueMicrotask;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 4;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var1);
                    var1 = var3.flushOperations;
                    var1 = var1.bind(var3)();
                    var1 = false;
                    _closure1_slot4 = var1;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
            case 56:
                var0 = undefined;
                return var0;
        }
    };
    var2.scheduleFlushOperations = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 4965, 4964, 4985, 4970]);