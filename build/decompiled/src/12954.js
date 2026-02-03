// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var1, var0, var3);
    var0 = function arg0, arg1, arg2() {
        _fun99403: for (var _fun99403_ip = 0;;) switch (_fun99403_ip) {
            case 0:
                var3 = undefined;
                var5 = undefined;
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var1 = arg2;
                var _closure2_slot2 = var1;
                var1 = arguments.length;
                var2 = 3;
                var6 = var1 > var2;
                var4 = 0;
                var1 = 0;
                if (!var6) {
                    _fun99403_ip = 58;
                    continue _fun99403
                }
            case 44:
                var6 = arguments[var2];
                var1 = 0;
                if (!(var3 !== var6)) {
                    _fun99403_ip = 58;
                    continue _fun99403
                }
            case 54:
                var1 = arguments[var2];
            case 58:
                var _closure2_slot3 = var1;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var4];
                var1 = var2.bind(var3)(var1);
                var2 = var1.SyncPromise;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var7 = function(arg0, arg1) { // Environment: var0
                    _fun99404: for (var _fun99404_ip = 0;;) switch (_fun99404_ip) {
                        case 0:
                            var2 = arg0;
                            var5 = arg1;
                            var _closure3_slot0 = var2;
                            var4 = _closure2_slot0;
                            var3 = _closure2_slot3;
                            var12 = var4[var3];
                            var3 = _closure2_slot1;
                            var4 = null;
                            if (!(var4 !== var3)) {
                                _fun99404_ip = 322;
                                continue _fun99404
                            }
                        case 40:
                            var6 = 'function';
                            var3 = typeof var12;
                            if (!(var6 === var3)) {
                                _fun99404_ip = 322;
                                continue _fun99404
                            }
                        case 54:
                            var7 = global;
                            var9 = var7.Object;
                            var8 = var9.assign;
                            var6 = _closure2_slot1;
                            var3 = {};
                            var6 = var8.bind(var9)(var3, var6);
                            var3 = _closure2_slot2;
                            var10 = undefined;
                            var6 = var12.bind(var10)(var6, var3);
                            var9 = _closure1_slot0;
                            var8 = _closure1_slot1;
                            var11 = 1;
                            var8 = var8[var11];
                            var8 = var9.bind(var10)(var8);
                            var8 = var8.DEBUG_BUILD;
                            if (!var8) {
                                _fun99404_ip = 128;
                                continue _fun99404
                            }
                        case 123:
                            var8 = var12.id;
                        case 128:
                            if (!var8) {
                                _fun99404_ip = 135;
                                continue _fun99404
                            }
                        case 131:
                            var8 = var4 === var6;
                        case 135:
                            if (!var8) {
                                _fun99404_ip = 207;
                                continue _fun99404
                            }
                        case 138:
                            var9 = _closure1_slot0;
                            var13 = _closure1_slot1;
                            var8 = 0;
                            var8 = var13[var8];
                            var8 = var9.bind(var10)(var8);
                            var9 = var8.logger;
                            var8 = var9.log;
                            var14 = var12.id;
                            var7 = var7.HermesInternal;
                            var13 = var7.concat;
                            var12 = 'Event processor "';
                            var7 = '" dropped event';
                            var7 = var13.bind(var12)(var14, var7);
                            var7 = var8.bind(var9)(var7);
                        case 207:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot1;
                            var7 = 0;
                            var7 = var9[var7];
                            var8 = var8.bind(var10)(var7);
                            var7 = var8.isThenable;
                            var7 = var7.bind(var8)(var6);
                            if (var7) {
                                _fun99404_ip = 292;
                                continue _fun99404
                            }
                        case 240:
                            var9 = _closure1_slot2;
                            var18 = _closure2_slot0;
                            var16 = _closure2_slot2;
                            var3 = _closure2_slot3;
                            var15 = var3 + var11;
                            var19 = undefined;
                            var17 = var6;
                            var7 = var19[var9](var18, var17, var16, var15, var14);
                            var3 = var7.then;
                            var7 = var3.bind(var7)(var2);
                            var3 = var7.then;
                            var3 = var3.bind(var7)(var4, var5);
                            _fun99404_ip = 333;
                            continue _fun99404;
                        case 292:
                            var3 = var6.then;
                            var1 = function(arg0) { // Environment: var1
                                var5 = _closure1_slot2;
                                var9 = _closure2_slot0;
                                var7 = _closure2_slot2;
                                var1 = _closure2_slot3;
                                var0 = 1;
                                var6 = var1 + var0;
                                var10 = undefined;
                                var8 = arg0;
                                var2 = var10[var5](var9, var8, var7, var6, var5);
                                var1 = var2.then;
                                var0 = _closure3_slot0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var3 = var3.bind(var6)(var1);
                            var1 = var3.then;
                            var1 = var1.bind(var3)(var4, var5);
                            _fun99404_ip = 333;
                            continue _fun99404;
                        case 322:
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 333:
                            var0 = undefined;
                            return var0;
                    }
                };
                var8 = var1;
                var0 = new var8[var2](var7, var6);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
    };
    var _closure1_slot2 = var0;
    var1.notifyEventProcessors = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12869, 12935]);