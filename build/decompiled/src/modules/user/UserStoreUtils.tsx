// modules/user/UserStoreUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var3 = function(arg0) { // Original name: getEnv, environment: var1
        _fun18014: for (var _fun18014_ip = 0;;) switch (_fun18014_ip) {
            case 0:
                var1 = arg0;
                var0 = _closure1_slot3;
                var2 = var0.TEST;
                var3 = 'production';
                var0 = var3;
                if (!(var3 === var2)) {
                    _fun18014_ip = 42;
                    continue _fun18014
                }
            case 27:
                var2 = null;
                var2 = var2 != var1;
                var0 = var3;
                if (!var2) {
                    _fun18014_ip = 42;
                    continue _fun18014
                }
            case 39:
                var0 = var1;
            case 42:
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var4 = var4.Environments;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.PREMIUM_TYPE_NONE;
    var _closure1_slot4 = var7;
    var4 = var4.UserFlags;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user/UserStoreUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg0, arg1, arg2) { // Original name: validatePremiumType, environment: var1
        _fun18015: for (var _fun18015_ip = 0;;) switch (_fun18015_ip) {
            case 0:
                var0 = arg0;
                var1 = arg1;
                if (var0) {
                    _fun18015_ip = 15;
                    continue _fun18015
                }
            case 9:
                var2 = undefined;
                var0 = var2 === var1;
            case 15:
                if (var0) {
                    _fun18015_ip = 62;
                    continue _fun18015
                }
            case 18:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 2;
                var0 = var3[var0];
                var3 = undefined;
                var2 = var2.bind(var3)(var0);
                var0 = arg2;
                var1 = var0 === var1;
                var0 = 'Premium type should not change for non-staff users';
                var0 = var2.bind(var3)(var1, var0);
            case 62:
                var0 = undefined;
                return var0;
        }
    };
    var2.validatePremiumType = var4;
    var2.getEnv = var3;
    var3 = function(arg0) { // Original name: isStaffEnv, environment: var1
        _fun18016: for (var _fun18016_ip = 0;;) switch (_fun18016_ip) {
            case 0:
                var4 = arg0;
                var3 = arguments[1];
                var2 = undefined;
                if (!(var3 === var2)) {
                    _fun18016_ip = 14;
                    continue _fun18016
                }
            case 12:
                var3 = undefined;
            case 14:
                var0 = _closure1_slot6;
                var2 = var0.bind(var2)(var3);
                var0 = _closure1_slot3;
                var0 = var0.DEVELOPMENT;
                var0 = var2 === var0;
                if (var0) {
                    _fun18016_ip = 77;
                    continue _fun18016
                }
            case 43:
                var2 = global;
                var2 = var2.window;
                var2 = var2.GLOBAL_ENV;
                var2 = var2.RELEASE_CHANNEL;
                var1 = _closure1_slot3;
                var1 = var1.STAGING;
                var0 = var2 === var1;
            case 77:
                if (var0) {
                    _fun18016_ip = 118;
                    continue _fun18016
                }
            case 80:
                var1 = null;
                var1 = var1 != var4;
                if (!var1) {
                    _fun18016_ip = 115;
                    continue _fun18016
                }
            case 89:
                var2 = var4.isStaff;
                var2 = var2.bind(var4)();
                if (var2) {
                    _fun18016_ip = 112;
                    continue _fun18016
                }
            case 102:
                var3 = var4.isStaffPersonal;
                var2 = var3.bind(var4)();
            case 112:
                var1 = var2;
            case 115:
                var0 = var1;
            case 118:
                return var0;
        }
    };
    var2.isStaffEnv = var3;
    var3 = function(arg0) { // Original name: isStaffEnvRawData, environment: var1
        _fun18017: for (var _fun18017_ip = 0;;) switch (_fun18017_ip) {
            case 0:
                var3 = arg0;
                var1 = arguments[1];
                var8 = undefined;
                if (!(var1 === var8)) {
                    _fun18017_ip = 14;
                    continue _fun18017
                }
            case 12:
                var1 = undefined;
            case 14:
                var0 = _closure1_slot6;
                var1 = var0.bind(var8)(var1);
                var0 = _closure1_slot3;
                var0 = var0.DEVELOPMENT;
                var1 = var1 !== var0;
                if (!var1) {
                    _fun18017_ip = 77;
                    continue _fun18017
                }
            case 43:
                var0 = global;
                var0 = var0.window;
                var0 = var0.GLOBAL_ENV;
                var4 = var0.RELEASE_CHANNEL;
                var0 = _closure1_slot3;
                var0 = var0.STAGING;
                var1 = var4 !== var0;
            case 77:
                var0 = !var1;
                if (!var1) {
                    _fun18017_ip = 176;
                    continue _fun18017
                }
            case 83:
                var4 = null;
                var1 = var4 != var3;
                if (!var1) {
                    _fun18017_ip = 173;
                    continue _fun18017
                }
            case 92:
                var5 = var3.flags;
                var5 = var4 == var5;
                if (var5) {
                    _fun18017_ip = 154;
                    continue _fun18017
                }
            case 104:
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 3;
                var6 = var9[var6];
                var8 = var7.bind(var8)(var6);
                var7 = var8.hasFlag;
                var6 = var3.flags;
                var2 = _closure1_slot5;
                var2 = var2.STAFF;
                var2 = var7.bind(var8)(var6, var2);
                var5 = !var2;
            case 154:
                var2 = !var5;
                if (!var5) {
                    _fun18017_ip = 170;
                    continue _fun18017
                }
            case 160:
                var3 = var3.personal_connection_id;
                var2 = var4 != var3;
            case 170:
                var1 = var2;
            case 173:
                var0 = var1;
            case 176:
                return var0;
        }
    };
    var2.isStaffEnvRawData = var3;
    var1 = function(arg0) { // Original name: getPremiumTypeFromRawValue, environment: var1
        _fun18018: for (var _fun18018_ip = 0;;) switch (_fun18018_ip) {
            case 0:
                var1 = arg0;
                var0 = undefined;
                if (!(var0 !== var1)) {
                    _fun18018_ip = 22;
                    continue _fun18018
                }
            case 9:
                var2 = _closure1_slot4;
                var0 = null;
                if (!(var1 !== var2)) {
                    _fun18018_ip = 25;
                    continue _fun18018
                }
            case 22:
                var0 = var1;
            case 25:
                return var0;
        }
    };
    var2.getPremiumTypeFromRawValue = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1619, 660, 44, 1384, 2]);