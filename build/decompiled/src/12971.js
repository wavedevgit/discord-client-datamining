// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 1;
    var3 = var3[var0];
    var0 = undefined;
    var4 = var4.bind(var0)(var3);
    var3 = var4.defineIntegration;
    var1 = function() { // Original name: _debugIntegration, environment: var1
        _fun99968: for (var _fun99968_ip = 0;;) switch (_fun99968_ip) {
            case 0:
                var4 = undefined;
                var2 = undefined;
                var3 = arguments.length;
                var0 = 0;
                if (!(var3 > var0)) {
                    _fun99968_ip = 23;
                    continue _fun99968
                }
            case 15:
                var3 = arguments[var0];
                if (!(var4 === var3)) {
                    _fun99968_ip = 27;
                    continue _fun99968
                }
            case 23:
                var4 = {};
                _fun99968_ip = 31;
                continue _fun99968;
            case 27:
                var4 = arguments[var0];
            case 31:
                var0 = global;
                var3 = var0.Object;
                var2 = var3.assign;
                var0 = {
                    'debugger': false,
                    'stringify': false
                };
                var0 = var2.bind(var3)(var0, var4);
                var _closure2_slot0 = var0;
                var0 = {};
                var2 = 'Debug';
                var0.name = var2;
                var1 = function(arg0) { // Original name: setup, environment: var1
                    var3 = arg0;
                    var2 = var3.on;
                    var1 = 'beforeSendEvent';
                    var0 = function(arg0, arg1) { // Environment: var0
                        var0 = arg0;
                        var _closure4_slot0 = var0;
                        var0 = arg1;
                        var _closure4_slot1 = var0;
                        var0 = _closure2_slot0;
                        var0 = var0.debugger;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var0 = 0;
                        var2 = var2[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.consoleSandbox;
                        var1 = function() { // Environment: var1
                            _fun99971: for (var _fun99971_ip = 0;;) switch (_fun99971_ip) {
                                case 0:
                                    var0 = _closure2_slot0;
                                    var1 = var0.stringify;
                                    var3 = global;
                                    var4 = var3.console;
                                    var2 = var4.log;
                                    if (var1) {
                                        _fun99971_ip = 101;
                                        continue _fun99971
                                    }
                                case 32:
                                    var1 = _closure4_slot0;
                                    var1 = var2.bind(var4)(var1);
                                    var1 = _closure4_slot1;
                                    if (!var1) {
                                        _fun99971_ip = 73;
                                        continue _fun99971
                                    }
                                case 48:
                                    var7 = var3.Object;
                                    var6 = var7.keys;
                                    var5 = _closure4_slot1;
                                    var5 = var6.bind(var7)(var5);
                                    var1 = var5.length;
                                case 73:
                                    if (!var1) {
                                        _fun99971_ip = 208;
                                        continue _fun99971
                                    }
                                case 79:
                                    var6 = var3.console;
                                    var5 = var6.log;
                                    var1 = _closure4_slot1;
                                    var1 = var5.bind(var6)(var1);
                                    _fun99971_ip = 208;
                                    continue _fun99971;
                                case 101:
                                    var8 = var3.JSON;
                                    var7 = var8.stringify;
                                    var1 = _closure4_slot0;
                                    var6 = null;
                                    var5 = 2;
                                    var1 = var7.bind(var8)(var1, var6, var5);
                                    var1 = var2.bind(var4)(var1);
                                    var1 = _closure4_slot1;
                                    if (!var1) {
                                        _fun99971_ip = 166;
                                        continue _fun99971
                                    }
                                case 141:
                                    var7 = var3.Object;
                                    var4 = var7.keys;
                                    var2 = _closure4_slot1;
                                    var2 = var4.bind(var7)(var2);
                                    var1 = var2.length;
                                case 166:
                                    if (!var1) {
                                        _fun99971_ip = 208;
                                        continue _fun99971
                                    }
                                case 169:
                                    var2 = var3.console;
                                    var1 = var2.log;
                                    var4 = var3.JSON;
                                    var3 = var4.stringify;
                                    var0 = _closure4_slot1;
                                    var0 = var3.bind(var4)(var0, var6, var5);
                                    var0 = var1.bind(var2)(var0);
                                case 208:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
                };
                var0.setup = var1;
                return var0;
        }
    };
    var1 = var3.bind(var4)(var1);
    var2.debugIntegration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12862, 12951]);