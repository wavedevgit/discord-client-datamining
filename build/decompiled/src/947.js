// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: captureLog, environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4._INTERNAL_captureLog;
        var2 = {};
        var1 = arg0;
        var2.level = var1;
        var1 = arg1;
        var2.message = var1;
        var1 = arg2;
        var2.attributes = var1;
        var2.severityNumber = var0;
        var1 = arg3;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var _closure1_slot2 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var0 = var0.Symbol;
    var5 = var0.toStringTag;
    var0 = {};
    var8 = 'Module';
    var0.value = var8;
    var0 = var6.bind(var7)(var2, var5, var0);
    var0 = 1;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.fmt;
    var2.fmt = var3;
    var3 = function(arg0, arg1) { // Original name: debug, environment: var1
        _fun9807: for (var _fun9807_ip = 0;;) switch (_fun9807_ip) {
            case 0:
                var0 = undefined;
                var3 = undefined;
                var5 = _closure1_slot2;
                var1 = arguments.length;
                var2 = 2;
                if (!(var1 > var2)) {
                    _fun9807_ip = 29;
                    continue _fun9807
                }
            case 21:
                var1 = arguments[var2];
                if (!(var0 === var1)) {
                    _fun9807_ip = 33;
                    continue _fun9807
                }
            case 29:
                var1 = {};
                _fun9807_ip = 37;
                continue _fun9807;
            case 33:
                var1 = arguments[var2];
            case 37:
                var6 = var1.scope;
                var9 = 'debug';
                var8 = arg0;
                var7 = arg1;
                var10 = undefined;
                var1 = var10[var5](var9, var8, var7, var6, var5);
                return var0;
        }
    };
    var2.debug = var3;
    var3 = function(arg0, arg1) { // Original name: error, environment: var1
        _fun9808: for (var _fun9808_ip = 0;;) switch (_fun9808_ip) {
            case 0:
                var0 = undefined;
                var3 = undefined;
                var5 = _closure1_slot2;
                var1 = arguments.length;
                var2 = 2;
                if (!(var1 > var2)) {
                    _fun9808_ip = 29;
                    continue _fun9808
                }
            case 21:
                var1 = arguments[var2];
                if (!(var0 === var1)) {
                    _fun9808_ip = 33;
                    continue _fun9808
                }
            case 29:
                var1 = {};
                _fun9808_ip = 37;
                continue _fun9808;
            case 33:
                var1 = arguments[var2];
            case 37:
                var6 = var1.scope;
                var9 = 'error';
                var8 = arg0;
                var7 = arg1;
                var10 = undefined;
                var1 = var10[var5](var9, var8, var7, var6, var5);
                return var0;
        }
    };
    var2.error = var3;
    var3 = function(arg0, arg1) { // Original name: fatal, environment: var1
        _fun9809: for (var _fun9809_ip = 0;;) switch (_fun9809_ip) {
            case 0:
                var0 = undefined;
                var3 = undefined;
                var5 = _closure1_slot2;
                var1 = arguments.length;
                var2 = 2;
                if (!(var1 > var2)) {
                    _fun9809_ip = 29;
                    continue _fun9809
                }
            case 21:
                var1 = arguments[var2];
                if (!(var0 === var1)) {
                    _fun9809_ip = 33;
                    continue _fun9809
                }
            case 29:
                var1 = {};
                _fun9809_ip = 37;
                continue _fun9809;
            case 33:
                var1 = arguments[var2];
            case 37:
                var6 = var1.scope;
                var9 = 'fatal';
                var8 = arg0;
                var7 = arg1;
                var10 = undefined;
                var1 = var10[var5](var9, var8, var7, var6, var5);
                return var0;
        }
    };
    var2.fatal = var3;
    var3 = function(arg0, arg1) { // Original name: info, environment: var1
        _fun9810: for (var _fun9810_ip = 0;;) switch (_fun9810_ip) {
            case 0:
                var0 = undefined;
                var3 = undefined;
                var5 = _closure1_slot2;
                var1 = arguments.length;
                var2 = 2;
                if (!(var1 > var2)) {
                    _fun9810_ip = 29;
                    continue _fun9810
                }
            case 21:
                var1 = arguments[var2];
                if (!(var0 === var1)) {
                    _fun9810_ip = 33;
                    continue _fun9810
                }
            case 29:
                var1 = {};
                _fun9810_ip = 37;
                continue _fun9810;
            case 33:
                var1 = arguments[var2];
            case 37:
                var6 = var1.scope;
                var9 = 'info';
                var8 = arg0;
                var7 = arg1;
                var10 = undefined;
                var1 = var10[var5](var9, var8, var7, var6, var5);
                return var0;
        }
    };
    var2.info = var3;
    var3 = function(arg0, arg1) { // Original name: trace, environment: var1
        _fun9811: for (var _fun9811_ip = 0;;) switch (_fun9811_ip) {
            case 0:
                var0 = undefined;
                var3 = undefined;
                var5 = _closure1_slot2;
                var1 = arguments.length;
                var2 = 2;
                if (!(var1 > var2)) {
                    _fun9811_ip = 29;
                    continue _fun9811
                }
            case 21:
                var1 = arguments[var2];
                if (!(var0 === var1)) {
                    _fun9811_ip = 33;
                    continue _fun9811
                }
            case 29:
                var1 = {};
                _fun9811_ip = 37;
                continue _fun9811;
            case 33:
                var1 = arguments[var2];
            case 37:
                var6 = var1.scope;
                var9 = 'trace';
                var8 = arg0;
                var7 = arg1;
                var10 = undefined;
                var1 = var10[var5](var9, var8, var7, var6, var5);
                return var0;
        }
    };
    var2.trace = var3;
    var1 = function(arg0, arg1) { // Original name: warn, environment: var1
        _fun9812: for (var _fun9812_ip = 0;;) switch (_fun9812_ip) {
            case 0:
                var0 = undefined;
                var3 = undefined;
                var5 = _closure1_slot2;
                var1 = arguments.length;
                var2 = 2;
                if (!(var1 > var2)) {
                    _fun9812_ip = 29;
                    continue _fun9812
                }
            case 21:
                var1 = arguments[var2];
                if (!(var0 === var1)) {
                    _fun9812_ip = 33;
                    continue _fun9812
                }
            case 29:
                var1 = {};
                _fun9812_ip = 37;
                continue _fun9812;
            case 33:
                var1 = arguments[var2];
            case 37:
                var6 = var1.scope;
                var9 = 'warn';
                var8 = arg0;
                var7 = arg1;
                var10 = undefined;
                var1 = var10[var5](var9, var8, var7, var6, var5);
                return var0;
        }
    };
    var2.warn = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [875, 898]);