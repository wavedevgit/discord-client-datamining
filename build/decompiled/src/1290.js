// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var2;
    var _closure1_slot2 = var5;
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var2, var3, var4);
    var2.DEFAULT_LOCALE = var0;
    var2.IntlManager = var0;
    var3 = 'en-US';
    var2.DEFAULT_LOCALE = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot5;
        var2 = function(arg0) { // Original name: IntlManager, environment: var4
            _fun13961: for (var _fun13961_ip = 0;;) switch (_fun13961_ip) {
                case 0:
                    var1 = arg0;
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var6 = var1.initialLocale;
                    var0 = undefined;
                    if (!(var0 === var6)) {
                        _fun13961_ip = 37;
                        continue _fun13961
                    }
                case 24:
                    var3 = _closure1_slot1;
                    var6 = var3.DEFAULT_LOCALE;
                case 37:
                    var5 = var1.defaultLocale;
                    if (!(var0 === var5)) {
                        _fun13961_ip = 60;
                        continue _fun13961
                    }
                case 47:
                    var3 = _closure1_slot1;
                    var5 = var3.DEFAULT_LOCALE;
                case 60:
                    var4 = var1.formatConfig;
                    if (!(var0 === var4)) {
                        _fun13961_ip = 99;
                        continue _fun13961
                    }
                case 70:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 3;
                    var3 = var9[var3];
                    var3 = var8.bind(var0)(var3);
                    var4 = var3.DEFAULT_FORMAT_CONFIG;
                case 99:
                    var1 = var1.forceLookupMatcher;
                    var3 = var0 !== var1;
                    if (!var3) {
                        _fun13961_ip = 115;
                        continue _fun13961
                    }
                case 112:
                    var3 = var1;
                case 115:
                    var9 = _closure1_slot4;
                    var8 = _closure2_slot0;
                    var8 = var9.bind(var0)(var2, var8);
                    var7 = function(arg0) { // Environment: var7
                        var3 = arg0;
                        var _closure4_slot0 = var3;
                        var1 = _closure3_slot0;
                        var2 = var1._localeSubscriptions;
                        var1 = var2.add;
                        var1 = var1.bind(var2)(var3);
                        var0 = function() { // Environment: var0
                            var0 = _closure3_slot0;
                            var2 = var0._localeSubscriptions;
                            var1 = var2.delete;
                            var0 = _closure4_slot0;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        return var0;
                    };
                    var2.onLocaleChange = var7;
                    var2.currentLocale = var6;
                    var2.defaultLocale = var5;
                    var2.formatConfig = var4;
                    var2._forceLookupMatcher = var3;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 4;
                    var1 = var4[var1];
                    var1 = var3.bind(var0)(var1);
                    var5 = var1.makeDataFormatters;
                    var1 = var2.currentLocale;
                    var4 = new Array(2);
                    var4[0] = var1;
                    var1 = var2.defaultLocale;
                    var4[1] = var1;
                    var3 = var2.formatConfig;
                    var1 = var2._forceLookupMatcher;
                    var1 = var5.bind(var0)(var4, var3, var1);
                    var2.data = var1;
                    var1 = global;
                    var1 = var1.Set;
                    var3 = var1.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var1
                        }
                    });
                    var13 = var3;
                    var1 = new var13[var1](var12);
                    var1 = var1 instanceof Object ? var1 : var3;
                    var2._localeSubscriptions = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'withFormatters';
        var0.key = var1;
        var1 = function(arg0) { // Original name: withFormatters, environment: var4
            _fun13964: for (var _fun13964_ip = 0;;) switch (_fun13964_ip) {
                case 0:
                    var0 = this;
                    var1 = global;
                    var3 = var1.Object;
                    var2 = var3.entries;
                    var1 = arg0;
                    var1 = var2.bind(var3)(var1);
                    var7 = var1;
                    var2 = var7[Symbol.iterator];
                    var7 = var2().next;
                    var5 = undefined;
                    var4 = 2;
                    var3 = 0;
                    var1 = 1;
                case 44:
                    var9 = var7().value;
                    var8 = var2;
                    if (!(var8 !== var5)) {
                        _fun13964_ip = 97;
                        continue _fun13964
                    }
                case 55: // try_start_0
                    var8 = _closure1_slot3;
                    var8 = var8.bind(var5)(var9, var4);
                    var9 = var8[var3];
                    var10 = var8[var1];
                    var8 = var0.makeFormatFunction;
                    var8 = var8.bind(var0)(var10);
                    var0[var9] = var8;
                case 88: // try_end0
                    _fun13964_ip = 44;
                    continue _fun13964;
                case 90: // catch_target0
                    CatchBlockStart(arg_register = 1);
                    var2.return();
                    throw var1;
                case 97:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(7);
        var1[0] = var0;
        var0 = {};
        var5 = 'makeFormatFunction';
        var0.key = var5;
        var5 = function(arg0) { // Original name: makeFormatFunction, environment: var4
            var1 = arg0;
            var3 = this;
            var _closure3_slot0 = var3;
            var2 = var1.format;
            var1 = var1.builder;
            var _closure3_slot1 = var1;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            var _closure3_slot2 = var1;
            var0 = function(arg0, arg1) { // Environment: var0
                _fun13966: for (var _fun13966_ip = 0;;) switch (_fun13966_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = null;
                        var1 = var0 == var3;
                        if (var1) {
                            _fun13966_ip = 50;
                            continue _fun13966
                        }
                    case 12:
                        var5 = _closure3_slot2;
                        var2 = _closure3_slot0;
                        var2 = var2.currentLocale;
                        var4 = undefined;
                        var3 = var3.bind(var4)(var2);
                        var2 = _closure3_slot1;
                        var1 = arg1;
                        var0 = var5.bind(var4)(var3, var1, var2);
                    case 50:
                        return var0;
                }
            };
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'setLocale';
        var0.key = var5;
        var5 = function(arg0) { // Original name: setLocale, environment: var4
            var3 = arg0;
            var2 = this;
            var2.currentLocale = var3;
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 4;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var4.bind(var0)(var1);
            var6 = var1.makeDataFormatters;
            var1 = var2.currentLocale;
            var5 = new Array(2);
            var5[0] = var1;
            var1 = var2.defaultLocale;
            var5[1] = var1;
            var4 = var2.formatConfig;
            var1 = var2._forceLookupMatcher;
            var1 = var6.bind(var0)(var5, var4, var1);
            var2.data = var1;
            var1 = var2.emitLocaleChange;
            var1 = var1.bind(var2)(var3);
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'emitLocaleChange';
        var0.key = var5;
        var5 = function(arg0) { // Original name: emitLocaleChange, environment: var4
            _fun13968: for (var _fun13968_ip = 0;;) switch (_fun13968_ip) {
                case 0:
                    var3 = arg0;
                    var0 = this;
                    var0 = var0._localeSubscriptions;
                    var1 = var0;
                    var2 = var1[Symbol.iterator];
                    var1 = var2().next;
                    var0 = undefined;
                case 20:
                    var5 = var1().value;
                    var4 = var2;
                    if (!(var4 !== var0)) {
                        _fun13968_ip = 48;
                        continue _fun13968
                    }
                case 31: // try_start_0
                    var4 = var3;
                    var4 = var5.bind(var0)(var4);
                case 39: // try_end0
                    _fun13968_ip = 20;
                    continue _fun13968;
                case 41: // catch_target0
                    CatchBlockStart(arg_register = 1);
                    var2.return();
                    throw var1;
                case 48:
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'string';
        var0.key = var5;
        var5 = function(arg0) { // Original name: string, environment: var4
            _fun13969: for (var _fun13969_ip = 0;;) switch (_fun13969_ip) {
                case 0:
                    var3 = arg0;
                    var0 = null;
                    var1 = var0 == var3;
                    var0 = '';
                    if (var1) {
                        _fun13969_ip = 42;
                        continue _fun13969
                    }
                case 16:
                    var1 = this;
                    var2 = var1.currentLocale;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.reserialize;
                    var0 = var1.bind(var2)();
                case 42:
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'reserialize';
        var0.key = var5;
        var5 = function(arg0) { // Original name: reserialize, environment: var4
            _fun13970: for (var _fun13970_ip = 0;;) switch (_fun13970_ip) {
                case 0:
                    var2 = arg0;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun13970_ip = 51;
                        continue _fun13970
                    }
                case 9:
                    var0 = this;
                    var1 = var0.currentLocale;
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var3 = 'string';
                    var1 = typeof var2;
                    var0 = var2;
                    if (!(var3 !== var1)) {
                        _fun13970_ip = 49;
                        continue _fun13970
                    }
                case 39:
                    var1 = var2.reserialize;
                    var0 = var1.bind(var2)();
                case 49:
                    return var0;
                case 51:
                    var0 = '';
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'bindFormatValues';
        var0.key = var5;
        var4 = function(arg0, arg1, arg2) { // Original name: bindFormatValues, environment: var4
            var3 = this;
            var1 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 5;
            var0 = var2[var0];
            var2 = undefined;
            var0 = var1.bind(var2)(var0);
            var1 = var0.bindFormatValues;
            var0 = {};
            var4 = arg0;
            var0.Builder = var4;
            var4 = arg1;
            var4 = var4.ast;
            var0.nodes = var4;
            var5 = var3.currentLocale;
            var4 = new Array(2);
            var4[0] = var5;
            var5 = var3.defaultLocale;
            var4[1] = var5;
            var0.locales = var4;
            var4 = var3.data;
            var0.dataFormatters = var4;
            var3 = var3.formatConfig;
            var0.formatConfig = var3;
            var3 = arg2;
            var0.values = var3;
            var3 = '';
            var0.keyPrefix = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var4;
        var1[6] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.IntlManager = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 1274, 1273, 1276]);