// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Alert;
    var _closure1_slot3 = var3;
    var3 = function() { // Original name: isModalSupported, environment: var1
        _fun12999: for (var _fun12999_ip = 0;;) switch (_fun12999_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 2;
                var1 = var3[var1];
                var4 = undefined;
                var1 = var2.bind(var4)(var1);
                var1 = var1.ReactNativeLibraries;
                var2 = var1.ReactNativeVersion;
                var3 = null;
                var1 = undefined;
                if (!(var3 !== var2)) {
                    _fun12999_ip = 57;
                    continue _fun12999
                }
            case 45:
                var1 = undefined;
                if (!(var1 !== var2)) {
                    _fun12999_ip = 57;
                    continue _fun12999
                }
            case 51:
                var1 = var2.version;
            case 57:
                if (var1) {
                    _fun12999_ip = 62;
                    continue _fun12999
                }
            case 60:
                var1 = {};
            case 62:
                var3 = var1.major;
                var2 = var1.minor;
                var1 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 3;
                var0 = var5[var0];
                var1 = var1.bind(var4)(var0);
                var0 = var1.isFabricEnabled;
                var0 = var0.bind(var1)();
                if (!var0) {
                    _fun12999_ip = 113;
                    continue _fun12999
                }
            case 107:
                var1 = 0;
                var0 = var1 === var3;
            case 113:
                if (!var0) {
                    _fun12999_ip = 119;
                    continue _fun12999
                }
            case 116:
                var0 = var2;
            case 119:
                if (!var0) {
                    _fun12999_ip = 129;
                    continue _fun12999
                }
            case 122:
                var1 = 71;
                var0 = var2 < var1;
            case 129:
                var0 = !var0;
                return var0;
        }
    };
    var2.isModalSupported = var3;
    var3 = function() { // Original name: isNativeDriverSupportedForColorAnimations, environment: var1
        _fun13000: for (var _fun13000_ip = 0;;) switch (_fun13000_ip) {
            case 0:
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 2;
                var0 = var2[var0];
                var2 = undefined;
                var0 = var1.bind(var2)(var0);
                var0 = var0.ReactNativeLibraries;
                var1 = var0.ReactNativeVersion;
                var3 = null;
                var0 = undefined;
                if (!(var3 !== var1)) {
                    _fun13000_ip = 57;
                    continue _fun13000
                }
            case 45:
                var0 = undefined;
                if (!(var0 !== var1)) {
                    _fun13000_ip = 57;
                    continue _fun13000
                }
            case 51:
                var0 = var1.version;
            case 57:
                if (var0) {
                    _fun13000_ip = 62;
                    continue _fun13000
                }
            case 60:
                var0 = {};
            case 62:
                var2 = var0.major;
                var3 = var0.minor;
                var0 = var2;
                if (!var0) {
                    _fun13000_ip = 86;
                    continue _fun13000
                }
            case 80:
                var1 = 0;
                var0 = var2 > var1;
            case 86:
                if (var0) {
                    _fun13000_ip = 105;
                    continue _fun13000
                }
            case 89:
                var1 = var3;
                if (!var1) {
                    _fun13000_ip = 102;
                    continue _fun13000
                }
            case 95:
                var2 = 69;
                var1 = var3 >= var2;
            case 102:
                var0 = var1;
            case 105:
                if (var0) {
                    _fun13000_ip = 110;
                    continue _fun13000
                }
            case 108:
                var0 = false;
            case 110:
                return var0;
        }
    };
    var2.isNativeDriverSupportedForColorAnimations = var3;
    var3 = function(arg0) { // Original name: isValidEmail, environment: var1
        var2 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        var1 = var2.test;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.isValidEmail = var3;
    var3 = function(arg0) { // Original name: base64ToUint8Array, environment: var1
        _fun13002: for (var _fun13002_ip = 0;;) switch (_fun13002_ip) {
            case 0:
                var0 = global;
                var1 = var0.atob;
                var2 = 'function';
                var1 = typeof var1;
                if (!(var2 === var1)) {
                    _fun13002_ip = 125;
                    continue _fun13002
                }
            case 19:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 3;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = var3.isWeb;
                var2 = var2.bind(var3)();
                if (!var2) {
                    _fun13002_ip = 125;
                    continue _fun13002
                }
            case 57:
                var3 = var0.atob;
                var2 = arg0;
                var2 = var3.bind(var4)(var2);
                var3 = var0.Uint8Array;
                var1 = _closure1_slot2;
                var4 = var1.bind(var4)(var2);
                var2 = var4.map;
                var1 = function(arg0) { // Environment: var1
                    var2 = arg0;
                    var1 = var2.charCodeAt;
                    var0 = 0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var2.bind(var4)(var1);
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var6 = var2;
                var1 = new var6[var3](var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            case 125:
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var5 = 'atob is not available in this environment.';
                var6 = var1;
                var0 = new var6[var2](var5, var4);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var2.base64ToUint8Array = var3;
    var1 = function(arg0, arg1) { // Original name: feedbackAlertDialog, environment: var1
        _fun13004: for (var _fun13004_ip = 0;;) switch (_fun13004_ip) {
            case 0:
                var7 = arg0;
                var6 = arg1;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 3;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.isWeb;
                var2 = var2.bind(var3)();
                if (!var2) {
                    _fun13004_ip = 80;
                    continue _fun13004
                }
            case 44:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var3 = 4;
                var2 = var2[var3];
                var2 = var4.bind(var0)(var2);
                var2 = var2.RN_GLOBAL_OBJ;
                var2 = var2.alert;
                if (!(var0 === var2)) {
                    _fun13004_ip = 98;
                    continue _fun13004
                }
            case 80:
                var4 = _closure1_slot3;
                var2 = var4.alert;
                var2 = var2.bind(var4)(var7, var6);
                _fun13004_ip = 160;
                continue _fun13004;
            case 98:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var3];
                var1 = var2.bind(var0)(var1);
                var3 = var1.RN_GLOBAL_OBJ;
                var2 = var3.alert;
                var1 = global;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var4 = '';
                var1 = '\n';
                var1 = var5.bind(var4)(var7, var1, var6);
                var1 = var2.bind(var3)(var1);
            case 160:
                return var0;
        }
    };
    var2.feedbackAlertDialog = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 27, 994, 999, 816]);