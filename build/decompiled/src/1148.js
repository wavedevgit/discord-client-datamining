// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var2 = function arg0, arg1, arg2, arg3() {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var1 = arg3;
        var _closure2_slot2 = var1;
        var1 = global;
        var3 = var1.Proxy;
        var2 = {};
        var0 = function arg0, arg1, arg2() {
            var3 = arg0;
            var2 = var3.apply;
            var1 = arg1;
            var0 = arg2;
            var0 = var2.bind(var3)(var1, var0);
            var5 = _closure1_slot3;
            var8 = _closure2_slot0;
            var7 = _closure2_slot1;
            var6 = _closure2_slot2;
            var10 = undefined;
            var9 = var0;
            var1 = var10[var5](var9, var8, var7, var6, var5);
            return var0;
        };
        var2.apply = var0;
        var0 = var3.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var3
            }
        });
        var7 = arg0;
        var8 = var1;
        var6 = var2;
        var0 = new var8[var3](var7, var6, var5);
        var0 = var0 instanceof Object ? var0 : var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.addNonEnumerableProperty;
        var2 = '__sentry_proxied__';
        var1 = true;
        var1 = var3.bind(var4)(var0, var2, var1);
        return var0;
    };
    var _closure1_slot2 = var2;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun12515: for (var _fun12515_ip = 0;;) switch (_fun12515_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var2 = arg3;
                var _closure2_slot0 = var3;
                var0 = arg2;
                var _closure2_slot1 = var0;
                var _closure2_slot2 = var2;
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 0;
                var5 = var5[var0];
                var0 = undefined;
                var6 = var6.bind(var0)(var5);
                var5 = var6.isThenable;
                var5 = var5.bind(var6)(var4);
                if (var5) {
                    _fun12515_ip = 93;
                    continue _fun12515
                }
            case 64:
                var5 = global;
                var6 = var5.Array;
                var5 = var6.isArray;
                var5 = var5.bind(var6)(var4);
                if (!var5) {
                    _fun12515_ip = 124;
                    continue _fun12515
                }
            case 85:
                var2 = var2.bind(var0)(var4, var3);
                _fun12515_ip = 124;
                continue _fun12515;
            case 93:
                var3 = var4.then;
                var2 = function(arg0) { // Environment: var1
                    _fun12516: for (var _fun12516_ip = 0;;) switch (_fun12516_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = global;
                            var1 = var0.Array;
                            var0 = var1.isArray;
                            var0 = var0.bind(var1)(var3);
                            if (!var0) {
                                _fun12516_ip = 43;
                                continue _fun12516
                            }
                        case 24:
                            var2 = _closure2_slot2;
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var3, var1);
                        case 43:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.catch;
                var1 = function(arg0) { // Environment: var1
                    _fun12517: for (var _fun12517_ip = 0;;) switch (_fun12517_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var0 = 1;
                            var2 = var2[var0];
                            var0 = undefined;
                            var2 = var3.bind(var0)(var2);
                            var2 = var2.DEBUG_BUILD;
                            if (!var2) {
                                _fun12517_ip = 116;
                                continue _fun12517
                            }
                        case 34:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var1 = 0;
                            var1 = var3[var1];
                            var1 = var2.bind(var0)(var1);
                            var5 = var1.debug;
                            var4 = var5.warn;
                            var7 = _closure2_slot1;
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var6 = var2.concat;
                            var3 = "Error resolving async handler '";
                            var2 = "' for route";
                            var3 = var6.bind(var3)(var7, var2);
                            var2 = _closure2_slot0;
                            var1 = arg0;
                            var1 = var4.bind(var5)(var3, var2, var1);
                        case 116:
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
            case 124:
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var3 = global;
    var7 = var3.Object;
    var6 = var7.defineProperty;
    var3 = var3.Symbol;
    var5 = var3.toStringTag;
    var3 = {};
    var8 = 'Module';
    var3.value = var8;
    var3 = var6.bind(var7)(var1, var5, var3);
    var3 = function arg0, arg1() {
        _fun12518: for (var _fun12518_ip = 0;;) switch (_fun12518_ip) {
            case 0:
                var2 = arg0;
                var1 = var2;
                var4 = arg1;
                var0 = undefined;
                var7 = undefined;
                var8 = undefined;
                var2 = var2.handle;
                if (!var2) {
                    _fun12518_ip = 192;
                    continue _fun12518
                }
            case 27:
                var2 = var1;
                var2 = var2.handle;
                var3 = 'object';
                var2 = typeof var2;
                if (!(var3 === var2)) {
                    _fun12518_ip = 192;
                    continue _fun12518
                }
            case 50:
                var2 = global;
                var5 = var2.Object;
                var3 = var5.keys;
                var2 = var1;
                var2 = var2.handle;
                var2 = var3.bind(var5)(var2);
                var6 = var2;
                var3 = var6[Symbol.iterator];
                var6 = var3().next;
                var2 = 'function';
            case 90:
                var10 = var6().value;
                var9 = var3;
                if (!(var9 !== var0)) {
                    _fun12518_ip = 192;
                    continue _fun12518
                }
            case 101: // try_start_0
                var7 = var10;
                var9 = var1;
                var9 = var9.handle;
                var10 = var9[var10];
                var8 = var10;
                var10 = typeof var10;
                var10 = var2 !== var10;
                var9 = var10;
                if (var10) {
                    _fun12518_ip = 142;
                    continue _fun12518
                }
            case 133:
                var10 = var8;
                var9 = var10.__sentry_proxied__;
            case 142:
                if (var9) {
                    _fun12518_ip = 183;
                    continue _fun12518
                }
            case 145:
                var14 = var1;
                var11 = var14.handle;
                var10 = var7;
                var13 = _closure1_slot2;
                var18 = var8;
                var15 = var4;
                var19 = undefined;
                var17 = var14;
                var16 = var10;
                var9 = var19[var13](var18, var17, var16, var15, var14);
                var11[var10] = var9;
            case 183: // try_end0
                _fun12518_ip = 90;
                continue _fun12518;
            case 185: // catch_target0
                CatchBlockStart(arg_register = 2);
                var3.return();
                throw var2;
            case 192:
                var2 = global;
                var5 = var2.Array;
                var3 = var5.isArray;
                var2 = var1;
                var2 = var2.children;
                var2 = var3.bind(var5)(var2);
                if (!var2) {
                    _fun12518_ip = 268;
                    continue _fun12518
                }
            case 221:
                var1 = var1.children;
                var3 = var1;
                var2 = var3[Symbol.iterator];
                var3 = var2().next;
            case 235:
                var7 = var3().value;
                var5 = var2;
                if (!(var5 !== var0)) {
                    _fun12518_ip = 268;
                    continue _fun12518
                }
            case 246: // try_start_1
                var6 = _closure1_slot4;
                var5 = var4;
                var5 = var6.bind(var0)(var7, var5);
            case 259: // try_end1
                _fun12518_ip = 235;
                continue _fun12518;
            case 261: // catch_target1
                CatchBlockStart(arg_register = 1);
                var2.return();
                throw var1;
            case 268:
                return var0;
        }
    };
    var _closure1_slot4 = var3;
    var1.checkRouteForAsyncHandler = var3;
    var1.createAsyncHandlerProxy = var2;
    var1.handleAsyncHandlerResult = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [817, 1141]);