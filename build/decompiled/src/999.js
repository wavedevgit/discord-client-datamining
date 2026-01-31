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
    var3 = var3.Platform;
    var3 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var0 = var0.RN_GLOBAL_OBJ;
        var0 = var0.HermesInternal;
        var0 = !var0;
        var0 = !var0;
        return var0;
    };
    var2.isHermesEnabled = var3;
    var3 = function() {
        _fun10308: for (var _fun10308_ip = 0;;) switch (_fun10308_ip) {
            case 0:
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var4 = 2;
                var0 = var0[var4];
                var3 = undefined;
                var0 = var2.bind(var3)(var0);
                var0 = var0.RN_GLOBAL_OBJ;
                var2 = var0.RN$Bridgeless;
                var0 = true;
                var0 = var0 === var2;
                if (var0) {
                    _fun10308_ip = 81;
                    continue _fun10308
                }
            case 46:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var4];
                var1 = var2.bind(var3)(var1);
                var1 = var1.RN_GLOBAL_OBJ;
                var2 = var1.__turboModuleProxy;
                var1 = null;
                var0 = var1 != var2;
            case 81:
                return var0;
        }
    };
    var2.isTurboModuleEnabled = var3;
    var3 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var0 = var0.RN_GLOBAL_OBJ;
        var1 = var0.nativeFabricUIManager;
        var0 = null;
        var0 = var0 != var1;
        return var0;
    };
    var2.isFabricEnabled = var3;
    var3 = function() {
        _fun10310: for (var _fun10310_ip = 0;;) switch (_fun10310_ip) {
            case 0:
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var3 = 3;
                var1 = var1[var3];
                var2 = undefined;
                var1 = var4.bind(var2)(var1);
                var1 = var1.ReactNativeLibraries;
                var1 = var1.ReactNativeVersion;
                if (var1) {
                    _fun10310_ip = 42;
                    continue _fun10310
                }
            case 40:
                return var2;
            case 42:
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var3];
                var0 = var1.bind(var2)(var0);
                var0 = var0.ReactNativeLibraries;
                var0 = var0.ReactNativeVersion;
                var0 = var0.version;
                var6 = var0.major;
                var5 = var0.minor;
                var4 = var0.patch;
                var2 = var0.prerelease;
                var1 = null;
                var1 = var1 != var2;
                var3 = '';
                var2 = var3;
                if (!var1) {
                    _fun10310_ip = 145;
                    continue _fun10310
                }
            case 117:
                var7 = var0.prerelease;
                var0 = global;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = '-';
                var2 = var1.bind(var0)(var7);
            case 145:
                var0 = global;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = '.';
                var14 = var3;
                var13 = var6;
                var12 = var0;
                var11 = var5;
                var10 = var0;
                var9 = var4;
                var8 = var2;
                var0 = var14[var1](var13, var12, var11, var10, var9, var8, var7);
                return var0;
        }
    };
    var2.getReactNativeVersion = var3;
    var3 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var0 = var0.RN_GLOBAL_OBJ;
        var1 = var0.expo;
        var0 = null;
        var0 = var0 != var1;
        return var0;
    };
    var2.isExpo = var3;
    var3 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var0 = var1.getExpoGo;
        var0 = var0.bind(var1)();
        var0 = !var0;
        var0 = !var0;
        return var0;
    };
    var2.isExpoGo = var3;
    var3 = function() {
        _fun10313: for (var _fun10313_ip = 0;;) switch (_fun10313_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.getExpoConstants;
                var1 = var1.bind(var2)();
                var2 = null;
                var3 = var2 == var1;
                var2 = undefined;
                if (var3) {
                    _fun10313_ip = 52;
                    continue _fun10313
                }
            case 46:
                var2 = var1.expoVersion;
            case 52:
                var3 = 'string';
                var2 = typeof var2;
                var0 = undefined;
                if (!(var3 === var2)) {
                    _fun10313_ip = 71;
                    continue _fun10313
                }
            case 65:
                var0 = var1.expoVersion;
            case 71:
                return var0;
        }
    };
    var2.getExpoGoVersion = var3;
    var3 = function() {
        _fun10314: for (var _fun10314_ip = 0;;) switch (_fun10314_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 4;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = var2.getExpoConstants;
                var1 = var1.bind(var2)();
                var5 = null;
                var2 = var5 == var1;
                var4 = undefined;
                if (var2) {
                    _fun10314_ip = 52;
                    continue _fun10314
                }
            case 46:
                var4 = var1.manifest;
            case 52:
                var2 = undefined;
                if (!(var5 !== var4)) {
                    _fun10314_ip = 70;
                    continue _fun10314
                }
            case 58:
                var2 = undefined;
                if (!(var2 !== var4)) {
                    _fun10314_ip = 70;
                    continue _fun10314
                }
            case 64:
                var2 = var4.runtimeVersion;
            case 70:
                var4 = 'string';
                var2 = typeof var2;
                if (!(var4 !== var2)) {
                    _fun10314_ip = 87;
                    continue _fun10314
                }
            case 81:
                var2 = new Array(0);
                _fun10314_ip = 113;
                continue _fun10314;
            case 87:
                var1 = var1.manifest;
                var5 = var1.runtimeVersion;
                var4 = var5.split;
                var1 = ':';
                var2 = var4.bind(var5)(var1);
            case 113:
                var1 = _closure1_slot2;
                var0 = 2;
                var1 = var1.bind(var3)(var2, var0);
                var0 = 1;
                var0 = var1[var0];
                return var0;
        }
    };
    var2.getExpoSdkVersion = var3;
    var3 = function() {
        var0 = false;
        return var0;
    };
    var2.isWeb = var3;
    var3 = function() {
        var0 = true;
        return var0;
    };
    var2.notWeb = var3;
    var3 = function() {
        var0 = true;
        return var0;
    };
    var2.isMobileOs = var3;
    var3 = function() {
        var0 = false;
        return var0;
    };
    var2.notMobileOs = var3;
    var3 = function() {
        _fun10318: for (var _fun10318_ip = 0;;) switch (_fun10318_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 2;
                var0 = var1[var0];
                var1 = undefined;
                var0 = var2.bind(var1)(var0);
                var0 = var0.RN_GLOBAL_OBJ;
                var3 = var0.HermesInternal;
                var4 = null;
                var2 = undefined;
                if (!(var4 !== var3)) {
                    _fun10318_ip = 56;
                    continue _fun10318
                }
            case 44:
                var2 = undefined;
                if (!(var1 !== var3)) {
                    _fun10318_ip = 56;
                    continue _fun10318
                }
            case 50:
                var2 = var3.getRuntimeProperties;
            case 56:
                var0 = undefined;
                if (!(var4 !== var2)) {
                    _fun10318_ip = 84;
                    continue _fun10318
                }
            case 62:
                var0 = undefined;
                if (!(var0 !== var2)) {
                    _fun10318_ip = 84;
                    continue _fun10318
                }
            case 68:
                var1 = var2.call;
                var1 = var1.bind(var2)(var3);
                var0 = var1["OSS Release Version"];
            case 84:
                return var0;
        }
    };
    var2.getHermesVersion = var3;
    var3 = function() {
        var0 = 'production';
        return var0;
    };
    var2.getDefaultEnvironment = var3;
    var1 = function() {
        _fun10320: for (var _fun10320_ip = 0;;) switch (_fun10320_ip) {
            case 0:
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var4 = 2;
                var0 = var0[var4];
                var3 = undefined;
                var0 = var2.bind(var3)(var0);
                var0 = var0.RN_GLOBAL_OBJ;
                var0 = var0.process;
                var0 = var3 !== var0;
                if (!var0) {
                    _fun10320_ip = 107;
                    continue _fun10320
                }
            case 44:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var4];
                var1 = var2.bind(var3)(var1);
                var1 = var1.RN_GLOBAL_OBJ;
                var1 = var1.process;
                var1 = var1.env;
                var4 = null;
                var2 = undefined;
                if (!(var4 !== var1)) {
                    _fun10320_ip = 99;
                    continue _fun10320
                }
            case 87:
                var2 = undefined;
                if (!(var2 !== var1)) {
                    _fun10320_ip = 99;
                    continue _fun10320
                }
            case 93:
                var2 = var1.___SENTRY_METRO_DEV_SERVER___;
            case 99:
                var1 = 'true';
                var0 = var1 === var2;
            case 107:
                return var0;
        }
    };
    var2.isRunningInMetroDevServer = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 27, 816, 994, 1000]);