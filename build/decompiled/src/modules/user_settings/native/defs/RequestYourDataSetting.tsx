// modules/user_settings/native/defs/RequestYourDataSetting.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = function() {
        _fun82202: for (var _fun82202_ip = 0;;) switch (_fun82202_ip) {
            case 0:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 8;
                var1 = var8[var1];
                var6 = undefined;
                var5 = var7.bind(var6)(var1);
                var4 = var5.useStateFromStores;
                var1 = _closure1_slot4;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot4;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var5 = var4.bind(var5)(var3, var1);
                var9 = _closure1_slot7;
                var1 = 9;
                var3 = var8[var1];
                var3 = var7.bind(var6)(var3);
                var4 = var3.shallow;
                var3 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.harvestRequest;
                    return var0;
                };
                var4 = var9.bind(var6)(var3, var4);
                var3 = _closure1_slot7;
                var1 = var8[var1];
                var1 = var7.bind(var6)(var1);
                var1 = var1.shallow;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.isRequesting;
                    return var0;
                };
                var1 = var3.bind(var6)(var0, var1);
                var0 = null;
                var0 = var0 == var5;
                if (var0) {
                    _fun82202_ip = 171;
                    continue _fun82202
                }
            case 133:
                if (var1) {
                    _fun82202_ip = 168;
                    continue _fun82202
                }
            case 136:
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 10;
                var2 = var7[var2];
                var3 = var3.bind(var6)(var2);
                var2 = var3.harvestDisabled;
                var1 = var2.bind(var3)(var4, var5);
            case 168:
                var0 = var1;
            case 171:
                return var0;
        }
    };
    var _closure1_slot8 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var7[var0];
    var0 = undefined;
    var4 = var6.bind(var0)(var4);
    var4 = var4.ActivityIndicator;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var9 = var4.MobileSetting;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var5 = var4.REQUEST_DATA_LIMIT_DAYS;
    var _closure1_slot5 = var5;
    var10 = var4.UserSettingsSections;
    var4 = 4;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var7[var4];
    var8 = var6.bind(var0)(var4);
    var5 = var8.createWithEqualityFn;
    var4 = function() { // Environment: var3
        var0 = {
            'isRequesting': false,
            'harvestRequest': null
        };
        return var0;
    };
    var4 = var5.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 13;
    var4 = var7[var4];
    var8 = var6.bind(var0)(var4);
    var5 = var8.createRoute;
    var4 = {};
    var11 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 11;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.XAHCgJ;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var4.title = var11;
    var9 = var9.DATA_AND_PRIVACY;
    var4.parent = var9;
    var9 = function() {
        _fun82208: for (var _fun82208_ip = 0;;) switch (_fun82208_ip) {
            case 0:
                var0 = function() {
                    var3 = _closure1_slot7;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 9;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.shallow;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.isRequesting;
                        return var0;
                    };
                    var0 = var3.bind(var2)(var0, var1);
                    return var0;
                };
                var4 = undefined;
                var1 = var0.bind(var4)();
                var0 = null;
                if (!var1) {
                    _fun82208_ip = 39;
                    continue _fun82208
                }
            case 20:
                var3 = _closure1_slot6;
                var2 = _closure1_slot3;
                var1 = {};
                var0 = var3.bind(var4)(var2, var1);
            case 39:
                return var0;
        }
    };
    var4.useTrailing = var9;
    var9 = function() {
        _fun82211: for (var _fun82211_ip = 0;;) switch (_fun82211_ip) {
            case 0:
                var0 = function() {
                    var3 = _closure1_slot7;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 9;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.shallow;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.harvestRequest;
                        return var0;
                    };
                    var0 = var3.bind(var2)(var0, var1);
                    return var0;
                };
                var5 = undefined;
                var3 = var0.bind(var5)();
                var2 = _closure1_slot4;
                var0 = var2.getCurrentUser;
                var4 = var0.bind(var2)();
                var0 = null;
                if (!(var0 != var4)) {
                    _fun82211_ip = 286;
                    continue _fun82211
                }
            case 40:
                var2 = var4.isStaff;
                var2 = var2.bind(var4)();
                if (var2) {
                    _fun82211_ip = 227;
                    continue _fun82211
                }
            case 56:
                if (!(var0 != var3)) {
                    _fun82211_ip = 225;
                    continue _fun82211
                }
            case 63:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 12;
                var7 = var6[var2];
                var7 = var4.bind(var5)(var7);
                var3 = var3.created_at;
                var9 = var7.bind(var5)(var3);
                var8 = var9.add;
                var7 = _closure1_slot5;
                var3 = 'days';
                var10 = var8.bind(var9)(var7, var3);
                var3 = var10.isBefore;
                var2 = var6[var2];
                var2 = var4.bind(var5)(var2);
                var2 = var2.bind(var5)();
                var3 = var3.bind(var10)(var2);
                var2 = null;
                if (var3) {
                    _fun82211_ip = 223;
                    continue _fun82211
                }
            case 142:
                var4 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 11;
                var6 = var8[var3];
                var6 = var4.bind(var5)(var6);
                var7 = var6.intl;
                var6 = var7.formatToPlainString;
                var3 = var8[var3];
                var3 = var4.bind(var5)(var3);
                var3 = var3.t;
                var4 = var3.RNDlV9;
                var3 = {};
                var9 = var10.format;
                var8 = 'MMMM Do YYYY';
                var8 = var9.bind(var10)(var8);
                var3.date = var8;
                var2 = var6.bind(var7)(var4, var3);
            case 223:
                return var2;
            case 225:
                return var0;
            case 227:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 11;
                var2 = var6[var1];
                var2 = var4.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var4.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1.ZPQLH2;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 286:
                return var0;
        }
    };
    var4.useDescription = var9;
    var4.useIsDisabled = var1;
    var9 = function() {
        var2 = _closure1_slot8;
        var1 = undefined;
        var1 = var2.bind(var1)();
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun82215: for (var _fun82215_ip = 0;;) switch (_fun82215_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    if (!var0) {
                        _fun82215_ip = 24;
                        continue _fun82215
                    }
                case 13:
                    var2 = arg0;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    var0 = true;
                case 24:
                    return var0;
            }
        };
        return var0;
    };
    var4.usePreNavigationAction = var9;
    var9 = {};
    var10 = var10.REQUEST_DATA;
    var9.route = var10;
    var10 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 14;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var0 = var0.default;
        return var0;
    };
    var9.getComponent = var10;
    var4.screen = var9;
    var4 = var5.bind(var8)(var4);
    var5 = 15;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_settings/native/defs/RequestYourDataSetting.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var3 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 6;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.getHarvestStatus;
        var4 = var2.bind(var3)();
        var3 = var4.then;
        var2 = function(arg0) { // Environment: var1
            var0 = arg0;
            var _closure3_slot0 = var0;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 7;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.batchUpdates;
            var1 = function() { // Environment: var1
                var2 = _closure1_slot7;
                var1 = var2.setState;
                var0 = {};
                var3 = false;
                var0.isRequesting = var3;
                var3 = _closure3_slot0;
                var3 = var3.body;
                var0.harvestRequest = var3;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1 = function() { // Environment: var1
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 7;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.batchUpdates;
            var1 = function() { // Environment: var1
                var2 = _closure1_slot7;
                var1 = var2.setState;
                var0 = {};
                var3 = false;
                var0.isRequesting = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.fetchHarvestStatus = var3;
    var2.useIsHarvestRequestDisabled = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 1621, 7033, 660, 33, 797, 5729, 802, 566, 3078, 7252, 1234, 3047, 9023, 10503, 2]);