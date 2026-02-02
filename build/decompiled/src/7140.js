// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function() {
        _fun58594: for (var _fun58594_ip = 0;;) switch (_fun58594_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 1;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var3 = var2.GLOBAL_OBJ;
                var2 = 'console';
                var2 = var2 in var3;
                if (!var2) {
                    _fun58594_ip = 85;
                    continue _fun58594
                }
            case 42:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 2;
                var1 = var3[var1];
                var1 = var2.bind(var0)(var1);
                var3 = var1.CONSOLE_LEVELS;
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun58595: for (var _fun58595_ip = 0;;) switch (_fun58595_ip) {
                        case 0:
                            var5 = arg0;
                            var _closure3_slot0 = var5;
                            var4 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var7 = 1;
                            var3 = var0[var7];
                            var0 = undefined;
                            var3 = var4.bind(var0)(var3);
                            var3 = var3.GLOBAL_OBJ;
                            var3 = var3.console;
                            var3 = var5 in var3;
                            if (!var3) {
                                _fun58595_ip = 112;
                                continue _fun58595
                            }
                        case 53:
                            var6 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var3 = 3;
                            var3 = var2[var3];
                            var4 = var6.bind(var0)(var3);
                            var3 = var4.fill;
                            var2 = var2[var7];
                            var2 = var6.bind(var0)(var2);
                            var2 = var2.GLOBAL_OBJ;
                            var2 = var2.console;
                            var1 = function(arg0) { // Environment: var1
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var0 = 2;
                                var1 = var1[var0];
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                var2 = var0.originalConsoleMethods;
                                var1 = _closure3_slot0;
                                var0 = arg0;
                                var2[var1] = var0;
                                var0 = function() { // Environment: var0
                                    _fun58597: for (var _fun58597_ip = 0;;) switch (_fun58597_ip) {
                                        case 0:
                                            var0 = undefined;
                                            var5 = undefined;
                                            var3 = arguments.length;
                                            var1 = global;
                                            var1 = var1.Array;
                                            var2 = var1.prototype;
                                            var2 = Object.create(var2, {
                                                constructor: {
                                                    value: var1
                                                }
                                            });
                                            var12 = var2;
                                            var11 = var3;
                                            var1 = new var12[var1](var11, var10);
                                            var4 = var1 instanceof Object ? var1 : var2;
                                            var2 = 0;
                                            var6 = var2 < var3;
                                            var1 = 0;
                                            if (!var6) {
                                                _fun58597_ip = 64;
                                                continue _fun58597
                                            }
                                        case 49:
                                            var6 = arguments[var1];
                                            var4[var1] = var6;
                                            var1 = var1 + 1;
                                            if (var1 < var3) {
                                                _fun58597_ip = 49;
                                                continue _fun58597
                                            }
                                        case 64:
                                            var9 = {};
                                            var9.args = var4;
                                            var3 = _closure3_slot0;
                                            var9.level = var3;
                                            var5 = _closure1_slot0;
                                            var6 = _closure1_slot1;
                                            var2 = var6[var2];
                                            var8 = var5.bind(var0)(var2);
                                            var7 = var8.triggerHandlers;
                                            var2 = 'console';
                                            var2 = var7.bind(var8)(var2, var9);
                                            var2 = 2;
                                            var2 = var6[var2];
                                            var2 = var5.bind(var0)(var2);
                                            var2 = var2.originalConsoleMethods;
                                            var3 = var2[var3];
                                            if (!var3) {
                                                _fun58597_ip = 187;
                                                continue _fun58597
                                            }
                                        case 144:
                                            var2 = var3.apply;
                                            var5 = _closure1_slot0;
                                            var6 = _closure1_slot1;
                                            var1 = 1;
                                            var1 = var6[var1];
                                            var1 = var5.bind(var0)(var1);
                                            var1 = var1.GLOBAL_OBJ;
                                            var1 = var1.console;
                                            var1 = var2.bind(var3)(var1, var4);
                                        case 187:
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            var1 = var3.bind(var4)(var2, var5, var1);
                        case 112:
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
            case 85:
                return var0;
        }
    };
    var _closure1_slot2 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var0 = function arg0() {
        var3 = _closure1_slot0;
        var5 = _closure1_slot1;
        var2 = 0;
        var4 = var5[var2];
        var0 = undefined;
        var8 = var3.bind(var0)(var4);
        var7 = var8.addHandler;
        var4 = 'console';
        var6 = arg0;
        var6 = var7.bind(var8)(var4, var6);
        var2 = var5[var2];
        var3 = var3.bind(var0)(var2);
        var2 = var3.maybeInstrument;
        var1 = _closure1_slot2;
        var1 = var2.bind(var3)(var4, var1);
        return var0;
    };
    var1.addConsoleInstrumentationHandler = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7141, 7134, 7137, 7143]);