// modules/user_profile/native/showUserProfileActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var4 = function(arg0) { // Original name: getUserProfileActionSheetKey, environment: var1
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = 'UserProfile';
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot6 = var4;
    var3 = function(arg0) { // Original name: getUserProfileIgnoredSpeedBumpActionSheetKey, environment: var1
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = 'UserProfileIgnoredSpeedBump';
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot7 = var3;
    var5 = function(arg0) { // Original name: showUserProfileActionSheet, environment: var1
        _fun59452: for (var _fun59452_ip = 0;;) switch (_fun59452_ip) {
            case 0:
                var1 = arg0;
                var0 = global;
                var2 = var0.Date;
                var0 = var2.now;
                var7 = var0.bind(var2)();
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 5;
                var3 = var3[var0];
                var0 = undefined;
                var3 = var4.bind(var0)(var3);
                var4 = var3.IgnoreProfileSpeedbumpDisabled;
                var3 = var4.getSetting;
                var3 = var3.bind(var4)();
                var4 = var1.ignoreBlockedSpeedBump;
                if (var4) {
                    _fun59452_ip = 257;
                    continue _fun59452
                }
            case 73:
                var6 = _closure1_slot5;
                var5 = var6.isBlocked;
                var4 = var1.userId;
                var9 = var5.bind(var6)(var4);
                var6 = _closure1_slot5;
                var5 = var6.isIgnored;
                var4 = var1.userId;
                var4 = var5.bind(var6)(var4);
                if (var4) {
                    _fun59452_ip = 122;
                    continue _fun59452
                }
            case 116:
                if (!var9) {
                    _fun59452_ip = 257;
                    continue _fun59452
                }
            case 122:
                if (!var4) {
                    _fun59452_ip = 131;
                    continue _fun59452
                }
            case 125:
                if (var3) {
                    _fun59452_ip = 257;
                    continue _fun59452
                }
            case 131:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 4;
                var3 = var5[var3];
                var6 = var4.bind(var0)(var3);
                var3 = 6;
                var4 = var5[var3];
                var3 = var5.paths;
                var8 = var6.bind(var0)(var4, var3);
                var4 = _closure1_slot1;
                var3 = 7;
                var3 = var5[var3];
                var6 = var4.bind(var0)(var3);
                var5 = var6.openLazy;
                var4 = _closure1_slot7;
                var3 = var1.userId;
                var4 = var4.bind(var0)(var3);
                var3 = {};
                var14 = var3;
                var13 = var1;
                var10 = copyDataProperties(var14, var13);
                var10 = 'ignore';
                if (!var9) {
                    _fun59452_ip = 228;
                    continue _fun59452
                }
            case 224:
                var10 = 'block';
            case 228:
                var9 = 'speedBumpType';
                var3[var9] = var10;
                var9 = 'openedAt';
                var3[var9] = var7;
                var3 = var5.bind(var6)(var8, var4, var3);
                var3 = undefined;
                return var3;
            case 257:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 4;
                var3 = var5[var3];
                var6 = var4.bind(var0)(var3);
                var3 = 8;
                var4 = var5[var3];
                var3 = var5.paths;
                var6 = var6.bind(var0)(var4, var3);
                var4 = _closure1_slot1;
                var3 = 7;
                var3 = var5[var3];
                var5 = var4.bind(var0)(var3);
                var4 = var5.openLazy;
                var3 = _closure1_slot6;
                var2 = var1.userId;
                var3 = var3.bind(var0)(var2);
                var2 = {};
                var14 = var2;
                var13 = var1;
                var1 = copyDataProperties(var14, var13);
                var1 = 'openedAt';
                var2[var1] = var7;
                var11 = 'replaceAll';
                var15 = var5;
                var14 = var6;
                var13 = var3;
                var12 = var2;
                var1 = var15[var4](var14, var13, var12, var11, var10);
                return var0;
        }
    };
    var _closure1_slot8 = var5;
    var0 = global;
    var11 = var0.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var6);
    var0 = 0;
    var6 = var8[var0];
    var0 = undefined;
    var6 = var9.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var6 = var6.addPostConnectionCallback;
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 9;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/user_profile/native/showUserProfileActionSheet.tsx';
    var6 = var7.bind(var8)(var6);
    var2.default = var5;
    var2.getUserProfileActionSheetKey = var4;
    var4 = function(arg0) { // Original name: getUserProfileBlockedSpeedBumpActionSheetKey, environment: var1
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = 'UserProfileBlockedSpeedBump';
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.getUserProfileBlockedSpeedBumpActionSheetKey = var4;
    var2.getUserProfileIgnoredSpeedBumpActionSheetKey = var3;
    var1 = function(arg0) { // Original name: showUserProfileActionSheetPostConnection, environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var2 = _closure1_slot4;
        var3 = _closure1_slot3;
        var0 = undefined;
        var1 = function*() { // Environment: var1
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun59456: for (var _fun59456_ip = 0;;) switch (_fun59456_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun59456_ip = 113;
                            continue _fun59456
                        }
                    case 7:
                        var5 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var2 = 4;
                        var3 = var1[var2];
                        var2 = undefined;
                        var5 = var5.bind(var2)(var3);
                        var3 = 3;
                        var3 = var1[var3];
                        var1 = var1.paths;
                        var1 = var5.bind(var2)(var3, var1);
                        SaveGenerator(address = 54);
                    case 52:
                        return var1;
                    case 54:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun59456_ip = 110;
                            continue _fun59456
                        }
                    case 60:
                        var7 = var1.default;
                        var6 = var7.getUser;
                        var5 = _closure2_slot0;
                        var5 = var5.userId;
                        var6 = var6.bind(var7)(var5);
                        var5 = null;
                        if (!(var5 != var6)) {
                            _fun59456_ip = 107;
                            continue _fun59456
                        }
                    case 94:
                        var4 = _closure1_slot8;
                        var3 = _closure2_slot0;
                        var3 = var4.bind(var2)(var3);
                    case 107:
                        return var2;
                    case 110:
                        return var1;
                    case 113:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var0)(var1);
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var2.showUserProfileActionSheetPostConnection = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3431, 3059, 1613, 1307, 1348, 7314, 3237, 7319, 2]);