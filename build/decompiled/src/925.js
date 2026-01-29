// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function(arg0, arg1) { // Original name: addConsoleBreadcrumb, environment: var1
        _fun9663: for (var _fun9663_ip = 0;;) switch (_fun9663_ip) {
            case 0:
                var5 = arg0;
                var6 = arg1;
                var4 = {};
                var1 = 'console';
                var4.category = var1;
                var0 = {};
                var0.arguments = var6;
                var0.logger = var1;
                var4.data = var0;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 5;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.severityLevelFromString;
                var2 = var2.bind(var3)(var5);
                var4.level = var2;
                var2 = _closure1_slot4;
                var2 = var2.bind(var0)(var6);
                var4.message = var2;
                var2 = 'assert';
                if (!(var2 === var5)) {
                    _fun9663_ip = 191;
                    continue _fun9663
                }
            case 95:
                var7 = 0;
                var3 = var6[var7];
                var2 = false;
                if (!(var2 === var3)) {
                    _fun9663_ip = 237;
                    continue _fun9663
                }
            case 110:
                var3 = var6.slice;
                var2 = 1;
                var3 = var3.bind(var6)(var2);
                var2 = var3.length;
                var7 = var2 > var7;
                var2 = 'Assertion failed';
                if (!var7) {
                    _fun9663_ip = 174;
                    continue _fun9663
                }
            case 141:
                var7 = _closure1_slot4;
                var9 = var7.bind(var0)(var3);
                var7 = global;
                var7 = var7.HermesInternal;
                var8 = var7.concat;
                var7 = 'Assertion failed: ';
                var2 = var8.bind(var7)(var9);
            case 174:
                var4.message = var2;
                var2 = var4.data;
                var2.arguments = var3;
            case 191:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 6;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.addBreadcrumb;
                var1 = {};
                var1.input = var6;
                var1.level = var5;
                var1 = var2.bind(var3)(var4, var1);
                return var0;
            case 237:
                return var0;
        }
    };
    var _closure1_slot3 = var3;
    var0 = function(arg0) { // Original name: formatConsoleArgs, environment: var1
        _fun9664: for (var _fun9664_ip = 0;;) switch (_fun9664_ip) {
            case 0:
                var6 = arg0;
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var4 = 7;
                var0 = var0[var4];
                var5 = undefined;
                var0 = var2.bind(var5)(var0);
                var2 = var0.GLOBAL_OBJ;
                var0 = 'util';
                var0 = var0 in var2;
                if (!var0) {
                    _fun9664_ip = 90;
                    continue _fun9664
                }
            case 45:
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var4];
                var0 = var2.bind(var5)(var0);
                var0 = var0.GLOBAL_OBJ;
                var0 = var0.util;
                var0 = var0.format;
                var2 = 'function';
                var0 = typeof var0;
                if (!(var2 !== var0)) {
                    _fun9664_ip = 130;
                    continue _fun9664
                }
            case 90:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 8;
                var0 = var3[var0];
                var3 = var2.bind(var5)(var0);
                var2 = var3.safeJoin;
                var0 = ' ';
                var0 = var2.bind(var3)(var6, var0);
                _fun9664_ip = 184;
                continue _fun9664;
            case 130:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var4];
                var2 = var3.bind(var5)(var2);
                var2 = var2.GLOBAL_OBJ;
                var4 = var2.util;
                var3 = var4.format;
                var2 = var3.apply;
                var1 = _closure1_slot2;
                var1 = var1.bind(var5)(var6);
                var0 = var2.bind(var3)(var4, var1);
            case 184:
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var4 = var4.Symbol;
    var7 = var4.toStringTag;
    var4 = {};
    var10 = 'Module';
    var4.value = var10;
    var4 = var8.bind(var9)(var2, var7, var4);
    var4 = 1;
    var4 = var6[var4];
    var5 = var5.bind(var0)(var4);
    var4 = var5.defineIntegration;
    var1 = function() { // Environment: var1
        _fun9665: for (var _fun9665_ip = 0;;) switch (_fun9665_ip) {
            case 0:
                var5 = undefined;
                var4 = undefined;
                var0 = global;
                var3 = var0.Set;
                var0 = arguments.length;
                var2 = 0;
                if (!(var0 > var2)) {
                    _fun9665_ip = 31;
                    continue _fun9665
                }
            case 23:
                var0 = arguments[var2];
                if (!(var5 === var0)) {
                    _fun9665_ip = 35;
                    continue _fun9665
                }
            case 31:
                var0 = {};
                _fun9665_ip = 39;
                continue _fun9665;
            case 35:
                var0 = arguments[var2];
            case 39:
                var0 = var0.levels;
                if (var0) {
                    _fun9665_ip = 77;
                    continue _fun9665
                }
            case 48:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 2;
                var2 = var6[var2];
                var2 = var4.bind(var5)(var2);
                var0 = var2.CONSOLE_LEVELS;
            case 77:
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var8 = var2;
                var7 = var0;
                var0 = new var8[var3](var7, var6);
                var0 = var0 instanceof Object ? var0 : var2;
                var _closure2_slot0 = var0;
                var0 = {};
                var2 = 'Console';
                var0.name = var2;
                var1 = function(arg0) { // Original name: setup, environment: var1
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 3;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.addConsoleInstrumentationHandler;
                    var1 = function(arg0) { // Environment: var1
                        _fun9667: for (var _fun9667_ip = 0;;) switch (_fun9667_ip) {
                            case 0:
                                var0 = arg0;
                                var3 = var0.args;
                                var2 = var0.level;
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot1;
                                var0 = 4;
                                var4 = var4[var0];
                                var0 = undefined;
                                var5 = var5.bind(var0)(var4);
                                var4 = var5.getClient;
                                var5 = var4.bind(var5)();
                                var4 = _closure3_slot0;
                                var4 = var5 === var4;
                                if (!var4) {
                                    _fun9667_ip = 81;
                                    continue _fun9667
                                }
                            case 64:
                                var6 = _closure2_slot0;
                                var5 = var6.has;
                                var4 = var5.bind(var6)(var2);
                            case 81:
                                if (!var4) {
                                    _fun9667_ip = 94;
                                    continue _fun9667
                                }
                            case 84:
                                var1 = _closure1_slot3;
                                var1 = var1.bind(var0)(var2, var3);
                            case 94:
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0.setup = var1;
                return var0;
        }
    };
    var1 = var4.bind(var5)(var1);
    var2.addConsoleBreadcrumb = var3;
    var2.consoleIntegration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 881, 824, 916, 847, 917, 905, 821, 831]);