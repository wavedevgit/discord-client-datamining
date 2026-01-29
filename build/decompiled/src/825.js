// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = function(arg0) { // Original name: getSentryCarrier, environment: var2
        _fun8768: for (var _fun8768_ip = 0;;) switch (_fun8768_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.__SENTRY__;
                if (var2) {
                    _fun8768_ip = 14;
                    continue _fun8768
                }
            case 12:
                var2 = {};
            case 14:
                var0.__SENTRY__ = var2;
                var0 = var2.version;
                if (var0) {
                    _fun8768_ip = 60;
                    continue _fun8768
                }
            case 29:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 1;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var0 = var1.SDK_VERSION;
            case 60:
                var2.version = var0;
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 1;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var1 = var1.SDK_VERSION;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.SDK_VERSION;
                var0 = var2[var0];
                if (var0) {
                    _fun8768_ip = 121;
                    continue _fun8768
                }
            case 119:
                var0 = {};
            case 121:
                var2[var1] = var0;
                return var0;
        }
    };
    var _closure1_slot2 = var0;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var3 = var3.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var7 = 'Module';
    var3.value = var7;
    var3 = var5.bind(var6)(var1, var4, var3);
    var3 = function(arg0, arg1) { // Original name: getGlobalSingleton, environment: var2
        _fun8769: for (var _fun8769_ip = 0;;) switch (_fun8769_ip) {
            case 0:
                var3 = arg0;
                var4 = undefined;
                var2 = undefined;
                var0 = arguments.length;
                var1 = 2;
                if (!(var0 > var1)) {
                    _fun8769_ip = 25;
                    continue _fun8769
                }
            case 17:
                var0 = arguments[var1];
                if (!(var4 === var0)) {
                    _fun8769_ip = 55;
                    continue _fun8769
                }
            case 25:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 0;
                var0 = var6[var0];
                var0 = var5.bind(var4)(var0);
                var0 = var0.GLOBAL_OBJ;
                _fun8769_ip = 59;
                continue _fun8769;
            case 55:
                var0 = arguments[var1];
            case 59:
                var1 = var0.__SENTRY__;
                if (var1) {
                    _fun8769_ip = 70;
                    continue _fun8769
                }
            case 68:
                var1 = {};
            case 70:
                var0.__SENTRY__ = var1;
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 1;
                var0 = var6[var2];
                var0 = var5.bind(var4)(var0);
                var0 = var0.SDK_VERSION;
                var2 = var6[var2];
                var2 = var5.bind(var4)(var2);
                var2 = var2.SDK_VERSION;
                var2 = var1[var2];
                if (var2) {
                    _fun8769_ip = 129;
                    continue _fun8769
                }
            case 127:
                var2 = {};
            case 129:
                var1[var0] = var2;
                var0 = var2[var3];
                if (var0) {
                    _fun8769_ip = 154;
                    continue _fun8769
                }
            case 140:
                var1 = arg1;
                var1 = var1.bind(var4)();
                var2[var3] = var1;
                var0 = var1;
            case 154:
                return var0;
        }
    };
    var1.getGlobalSingleton = var3;
    var2 = function() { // Original name: getMainCarrier, environment: var2
        var5 = _closure1_slot2;
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var0 = 0;
        var4 = var3[var0];
        var1 = undefined;
        var4 = var2.bind(var1)(var4);
        var4 = var4.GLOBAL_OBJ;
        var4 = var5.bind(var1)(var4);
        var0 = var3[var0];
        var0 = var2.bind(var1)(var0);
        var0 = var0.GLOBAL_OBJ;
        return var0;
    };
    var1.getMainCarrier = var2;
    var1.getSentryCarrier = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [821, 826]);