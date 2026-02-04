// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var5[var0];
    var0 = undefined;
    var4 = var6.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var5 = var5[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var0)(var5);
    var _closure1_slot3 = var4;
    var4 = var1.Symbol;
    var1 = 'VISITED_ROUTE_KEYS';
    var1 = var4.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = function arg0, arg1, arg2, arg3, arg4() {
        _fun17389: for (var _fun17389_ip = 0;;) switch (_fun17389_ip) {
            case 0:
                var2 = arg2;
                var4 = arg3;
                var13 = arg4;
                var6 = arg0;
                var7 = arg1;
                var5 = undefined;
                var8 = undefined;
                var9 = undefined;
                var10 = undefined;
                var11 = undefined;
                var3 = var4.map;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.key;
                    return var0;
                };
                var1 = var3.bind(var4)(var1);
                var _closure2_slot0 = var1;
                var1 = var2.filter;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot0;
                    var1 = var2.includes;
                    var0 = arg0;
                    var0 = var0.key;
                    var0 = var1.bind(var2)(var0);
                    var0 = !var0;
                    return var0;
                };
                var1 = var1.bind(var2)(var0);
                var0 = var1.reverse;
                var0 = var0.bind(var1)();
                var2 = _closure1_slot4;
                var15 = var13[var2];
                var4 = null;
                if (!(var4 == var15)) {
                    _fun17389_ip = 116;
                    continue _fun17389
                }
            case 88:
                var2 = global;
                var2 = var2.Set;
                var3 = var2.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var2
                    }
                });
                var20 = var3;
                var2 = new var20[var2](var19);
                var15 = var2 instanceof Object ? var2 : var3;
            case 116:
                var8 = var15;
                var2 = global;
                var12 = var2.Object;
                var3 = var12.assign;
                var14 = _closure1_slot2;
                var2 = _closure1_slot4;
                var1 = {};
                var2 = var14.bind(var5)(var1, var2, var15);
                var1 = {};
                var9 = var3.bind(var12)(var1, var13, var2);
                var3 = var0;
                var1 = var3[Symbol.iterator];
                var3 = var1().next;
                var2 = 'beforeRemove';
                var0 = true;
            case 170:
                var12 = var3().value;
                var13 = var1;
                if (!(var13 !== var5)) {
                    _fun17389_ip = 361;
                    continue _fun17389
                }
            case 184: // try_start_0
                var10 = var12;
                var14 = var8;
                var13 = var14.has;
                var12 = var12.key;
                var12 = var13.bind(var14)(var12);
                if (var12) {
                    _fun17389_ip = 349;
                    continue _fun17389
                }
            case 211:
                var13 = var7;
                var12 = var10;
                var12 = var12.key;
                var12 = var13[var12];
                var11 = var12;
                var13 = var4 == var12;
                var12 = undefined;
                if (var13) {
                    _fun17389_ip = 258;
                    continue _fun17389
                }
            case 238:
                var16 = var11;
                var15 = var16.call;
                var14 = var7;
                var13 = var9;
                var12 = var15.bind(var16)(var14, var13);
            case 258:
                if (var12) {
                    _fun17389_ip = 344;
                    continue _fun17389
                }
            case 261:
                var14 = var8;
                var13 = var14.add;
                var15 = var10;
                var12 = var15.key;
                var12 = var13.bind(var14)(var12);
                var14 = var6;
                var13 = var14.emit;
                var12 = {};
                var12.type = var2;
                var15 = var15.key;
                var12.target = var15;
                var15 = {};
                var16 = var9;
                var15.action = var16;
                var12.data = var15;
                var12.canPreventDefault = var0;
                var12 = var13.bind(var14)(var12);
                var12 = var12.defaultPrevented;
                if (!var12) {
                    _fun17389_ip = 349;
                    continue _fun17389
                }
            case 339: // try_end0
                var1.return();
                return var0;
            case 344:
                var1.return();
                return var0;
            case 349:
                _fun17389_ip = 170;
                continue _fun17389;
            case 354: // catch_target0
                CatchBlockStart(arg_register = 0);
                var1.return();
                throw var0;
            case 361:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot5 = var1;
    var3 = function arg0() {
        _fun17392: for (var _fun17392_ip = 0;;) switch (_fun17392_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.getState;
                var _closure2_slot0 = var6;
                var7 = var0.emitter;
                var _closure2_slot1 = var7;
                var8 = var0.beforeRemoveListeners;
                var _closure2_slot2 = var8;
                var5 = _closure1_slot3;
                var4 = var5.useContext;
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var0 = 2;
                var3 = var11[var0];
                var0 = undefined;
                var3 = var10.bind(var0)(var3);
                var3 = var4.bind(var5)(var3);
                var9 = var3.addKeyedListener;
                var _closure2_slot3 = var9;
                var4 = var5.useContext;
                var3 = 3;
                var3 = var11[var3];
                var3 = var10.bind(var0)(var3);
                var3 = var4.bind(var5)(var3);
                var4 = null;
                var4 = var4 == var3;
                var5 = undefined;
                if (var4) {
                    _fun17392_ip = 124;
                    continue _fun17392
                }
            case 119:
                var5 = var3.key;
            case 124:
                var _closure2_slot4 = var5;
                var4 = _closure1_slot3;
                var3 = var4.useEffect;
                var2 = new Array(5);
                var2[0] = var9;
                var2[1] = var8;
                var2[2] = var7;
                var2[3] = var6;
                var2[4] = var5;
                var1 = function() { // Environment: var1
                    _fun17393: for (var _fun17393_ip = 0;;) switch (_fun17393_ip) {
                        case 0:
                            var0 = _closure2_slot4;
                            var5 = undefined;
                            if (var0) {
                                _fun17393_ip = 14;
                                continue _fun17393
                            }
                        case 12:
                            return var5;
                        case 14:
                            var2 = _closure2_slot3;
                            var0 = null;
                            var2 = var0 == var2;
                            var0 = undefined;
                            if (var2) {
                                _fun17393_ip = 55;
                                continue _fun17393
                            }
                        case 29:
                            var4 = _closure2_slot3;
                            var3 = _closure2_slot4;
                            var2 = 'beforeRemove';
                            var1 = function(arg0) { // Environment: var1
                                var0 = _closure2_slot0;
                                var6 = undefined;
                                var0 = var0.bind(var6)();
                                var5 = _closure1_slot5;
                                var11 = _closure2_slot1;
                                var10 = _closure2_slot2;
                                var9 = var0.routes;
                                var8 = new Array(0);
                                var7 = arg0;
                                var12 = undefined;
                                var0 = var12[var5](var11, var10, var9, var8, var7, var6);
                                return var0;
                            };
                            var0 = var4.bind(var5)(var2, var3, var1);
                        case 55:
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var2.default = var3;
    var2.shouldPreventRemove = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 31, 1491, 1496]);