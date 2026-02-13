// modules/user_settings/native/content_and_social/IgnoredUserRow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.unignoreUser;
        var2 = arg0;
        var1 = 'ignored-users-list-mobile';
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var _closure1_slot5 = var3;
    var3 = function arg0() {
        _fun81979: for (var _fun81979_ip = 0;;) switch (_fun81979_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.userRecord;
                var _closure2_slot0 = var8;
                var6 = _closure1_slot1;
                var11 = _closure1_slot2;
                var0 = 4;
                var0 = var11[var0];
                var3 = undefined;
                var0 = var6.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var0 = var0.analyticsLocations;
                var _closure2_slot1 = var0;
                var2 = _closure1_slot4;
                var10 = _closure1_slot0;
                var0 = 5;
                var0 = var11[var0];
                var0 = var10.bind(var3)(var0);
                var1 = var0.TableRow;
                var0 = {
                    'icon': null,
                    'label': null,
                    'subLabel': null,
                    'labelLineClamp': 1,
                    'subLabelLineClamp': 1,
                    'accessibilityRole': 'button'
                };
                var9 = 6;
                var5 = var11[var9];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var12 = var8.getAvatarSource;
                var12 = var12.bind(var8)(var3);
                var5.source = var12;
                var9 = var11[var9];
                var9 = var10.bind(var3)(var9);
                var9 = var9.AvatarSizes;
                var9 = var9.REFRESH_MEDIUM_32;
                var5.size = var9;
                var5 = var2.bind(var3)(var6, var5);
                var0.icon = var5;
                var6 = null;
                var5 = var6 != var8;
                if (!var5) {
                    _fun81979_ip = 188;
                    continue _fun81979
                }
            case 169:
                var9 = var8.globalName;
                if (!(var6 == var9)) {
                    _fun81979_ip = 185;
                    continue _fun81979
                }
            case 179:
                var9 = var8.username;
            case 185:
                var5 = var9;
            case 188:
                var0.label = var5;
                var9 = var6 == var8;
                var5 = undefined;
                if (var9) {
                    _fun81979_ip = 209;
                    continue _fun81979
                }
            case 203:
                var5 = var8.globalName;
            case 209:
                var9 = var6 != var5;
                var5 = undefined;
                if (!var9) {
                    _fun81979_ip = 236;
                    continue _fun81979
                }
            case 218:
                var9 = var6 == var8;
                var6 = undefined;
                if (var9) {
                    _fun81979_ip = 233;
                    continue _fun81979
                }
            case 227:
                var6 = var8.username;
            case 233:
                var5 = var6;
            case 236:
                var0.subLabel = var5;
                var6 = {};
                var5 = 'unignore';
                var6.name = var5;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var8 = 7;
                var5 = var12[var8];
                var5 = var11.bind(var3)(var5);
                var10 = var5.intl;
                var9 = var10.string;
                var5 = var12[var8];
                var5 = var11.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5["8wXU9B"];
                var5 = var9.bind(var10)(var5);
                var6.label = var5;
                var5 = new Array(1);
                var5[0] = var6;
                var0.accessibilityActions = var5;
                var5 = function arg0() {
                    _fun81980: for (var _fun81980_ip = 0;;) switch (_fun81980_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var1 = var0.actionName;
                            var0 = 'unignore';
                            if (!(var0 !== var1)) {
                                _fun81980_ip = 28;
                                continue _fun81980
                            }
                        case 24:
                            var0 = undefined;
                            return var0;
                        case 28:
                            var2 = _closure1_slot5;
                            var0 = _closure2_slot0;
                            var1 = var0.id;
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var0.onAccessibilityAction = var5;
                var5 = function() {
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 8;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    var0.userId = var4;
                    var3 = _closure2_slot1;
                    var0.sourceAnalyticsLocations = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0.onPress = var5;
                var6 = _closure1_slot4;
                var4 = 9;
                var4 = var12[var4];
                var4 = var11.bind(var3)(var4);
                var5 = var4.Button;
                var4 = {
                    'size': 'sm',
                    'variant': 'secondary'
                };
                var9 = var12[var8];
                var9 = var11.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8["3GZE6a"];
                var8 = var9.bind(var10)(var8);
                var4.text = var8;
                var7 = function() {
                    var2 = _closure1_slot5;
                    var0 = _closure2_slot0;
                    var1 = var0.id;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var4.onPress = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.trailing = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/content_and_social/IgnoredUserRow.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun81983: for (var _fun81983_ip = 0;;) switch (_fun81983_ip) {
            case 0:
                var1 = arg0;
                var1 = var1.userId;
                var _closure2_slot0 = var1;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 10;
                var2 = var4[var2];
                var4 = undefined;
                var5 = var3.bind(var4)(var2);
                var3 = var5.useStateFromStores;
                var6 = _closure1_slot3;
                var2 = new Array(1);
                var2[0] = var6;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot3;
                    var1 = var2.getUser;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var3.bind(var5)(var2, var0);
                var0 = null;
                var2 = var0 == var5;
                if (var2) {
                    _fun81983_ip = 99;
                    continue _fun81983
                }
            case 78:
                var3 = _closure1_slot4;
                var2 = _closure1_slot6;
                var1 = {};
                var1.userRecord = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 99:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1621, 33, 8079, 5785, 4905, 5512, 1235, 7410, 4090, 566, 2]);