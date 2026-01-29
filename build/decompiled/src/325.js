// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var4;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var3 = 0;
    var6 = var4[var3];
    var5 = metroImportAll;
    var0 = undefined;
    var5 = var5.bind(var0)(var6);
    var4 = var4[var3];
    var3 = require;
    var3 = var3.bind(var0)(var4);
    var3 = var3.useCallback;
    var _closure1_slot2 = var3;
    var1 = function() { // Original name: useMergeRefs, environment: var1
        _fun4890: for (var _fun4890_ip = 0;;) switch (_fun4890_ip) {
            case 0:
                var2 = undefined;
                var4 = undefined;
                var3 = arguments.length;
                var0 = global;
                var0 = var0.Array;
                var5 = var0.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var0
                    }
                });
                var9 = var5;
                var8 = var3;
                var0 = new var9[var0](var8, var7);
                var6 = var0 instanceof Object ? var0 : var5;
                var _closure2_slot0 = var6;
                var0 = 0;
                var5 = var0 < var3;
                if (!var5) {
                    _fun4890_ip = 68;
                    continue _fun4890
                }
            case 53:
                var5 = arguments[var0];
                var6[var0] = var5;
                var0 = var0 + 1;
                if (var0 < var3) {
                    _fun4890_ip = 53;
                    continue _fun4890
                }
            case 68:
                var4 = _closure1_slot2;
                var5 = new Array(0);
                var3 = var5.concat;
                var3 = var3.bind(var5)(var6);
                var1 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var3 = _closure2_slot0;
                    var2 = var3.map;
                    var1 = function(arg0) { // Environment: var0
                        _fun4892: for (var _fun4892_ip = 0;;) switch (_fun4892_ip) {
                            case 0:
                                var4 = arg0;
                                var _closure4_slot0 = var4;
                                var0 = null;
                                if (!(var0 == var4)) {
                                    _fun4892_ip = 19;
                                    continue _fun4892
                                }
                            case 15:
                                var0 = undefined;
                                return var0;
                            case 19:
                                var3 = 'function';
                                var0 = typeof var4;
                                if (!(var3 !== var0)) {
                                    _fun4892_ip = 50;
                                    continue _fun4892
                                }
                            case 30:
                                var0 = _closure3_slot0;
                                var4.current = var0;
                                var0 = function() { // Environment: var1
                                    var1 = _closure4_slot0;
                                    var0 = null;
                                    var1.current = var0;
                                    var0 = undefined;
                                    return var0;
                                };
                                return var0;
                            case 50:
                                var2 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var4.bind(var0)(var2);
                                var2 = typeof var0;
                                if (!(var3 !== var2)) {
                                    _fun4892_ip = 76;
                                    continue _fun4892
                                }
                            case 71:
                                var0 = function() { // Environment: var1
                                    var2 = _closure4_slot0;
                                    var0 = undefined;
                                    var1 = null;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                                };
                            case 76:
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    var _closure3_slot1 = var1;
                    var0 = function() { // Environment: var0
                        _fun4895: for (var _fun4895_ip = 0;;) switch (_fun4895_ip) {
                            case 0:
                                var0 = undefined;
                                var4 = undefined;
                                var1 = _closure3_slot1;
                                var3 = var1;
                                var2 = var3[Symbol.iterator];
                                var3 = var2().next;
                                var1 = null;
                            case 19:
                                var5 = var3().value;
                                var6 = var2;
                                if (!(var6 !== var0)) {
                                    _fun4895_ip = 53;
                                    continue _fun4895
                                }
                            case 30: // try_start_0
                                var4 = var5;
                                if (!(var1 != var5)) {
                                    _fun4895_ip = 44;
                                    continue _fun4895
                                }
                            case 37:
                                var5 = var4;
                                var5 = var5.bind(var0)();
                            case 44: // try_end0
                                _fun4895_ip = 19;
                                continue _fun4895;
                            case 46: // catch_target0
                                CatchBlockStart(arg_register = 1);
                                var2.return();
                                throw var1;
                            case 53:
                                return var0;
                        }
                    };
                    return var0;
                };
                var1 = var4.bind(var2)(var1, var3);
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 1;
                var0 = var4[var0];
                var0 = var3.bind(var2)(var0);
                var0 = var0.bind(var2)(var1);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 326]);