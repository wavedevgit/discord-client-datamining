// modules/user_settings/native/account/SettingsAccountHeader.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function() {
        var3 = _closure1_slot9;
        var1 = _closure1_slot1;
        var7 = _closure1_slot2;
        var0 = 9;
        var0 = var7[var0];
        var2 = undefined;
        var1 = var1.bind(var2)(var0);
        var0 = {};
        var6 = _closure1_slot0;
        var5 = 10;
        var5 = var7[var5];
        var5 = var6.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5.zqv4nV;
        var0.label = var5;
        var5 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 11;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.openUserSettings;
            var1 = {};
            var4 = _closure1_slot7;
            var4 = var4.SETTINGS_CONTENT_AND_SOCIAL;
            var1.screen = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.labelHook = var5;
        var4 = _closure1_slot8;
        var4 = var4.RESTRICTED_ACCOUNTS_SETTING_NOTICE;
        var0.noticeType = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot12 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticsSections;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SafetySettingsNoticeType;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot9 = var7;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 8;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_24;
    var9.paddingTop = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_24;
    var9.gap = var10;
    var3.header = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot11 = var3;
    var3 = var6.memo;
    var1 = function() { // Environment: var1
        _fun80168: for (var _fun80168_ip = 0;;) switch (_fun80168_ip) {
            case 0:
                var1 = _closure1_slot11;
                var4 = undefined;
                var7 = var1.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 12;
                var5 = var3[var1];
                var9 = var2.bind(var4)(var5);
                var8 = var9.useStateFromStores;
                var5 = _closure1_slot6;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = function() { // Environment: var0
                    var1 = _closure1_slot6;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var8 = var8.bind(var9)(var6, var5);
                var5 = 13;
                var5 = var3[var5];
                var6 = var2.bind(var4)(var5);
                var5 = var6.getBannerText;
                var14 = var5.bind(var6)(var8);
                var1 = var3[var1];
                var5 = var2.bind(var4)(var1);
                var3 = var5.useStateFromStores;
                var1 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot5;
                    var0 = var1.getBlockedOrIgnoredIDs;
                    var0 = var0.bind(var1)();
                    var1 = var0.length;
                    var0 = 0;
                    var0 = var1 > var0;
                    return var0;
                };
                var5 = var3.bind(var5)(var2, var1);
                var3 = _closure1_slot3;
                var2 = var3.useCallback;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 14;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.open;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var0 = new Array(0);
                var13 = var2.bind(var3)(var1, var0);
                var6 = null;
                if (!(var6 == var14)) {
                    _fun80168_ip = 167;
                    continue _fun80168
                }
            case 159:
                var0 = null;
                if (!var5) {
                    _fun80168_ip = 378;
                    continue _fun80168
                }
            case 167:
                var3 = _closure1_slot10;
                var2 = _closure1_slot4;
                var1 = {};
                var7 = var7.header;
                var1.style = var7;
                var7 = null;
                if (!var5) {
                    _fun80168_ip = 207;
                    continue _fun80168
                }
            case 191:
                var9 = _closure1_slot9;
                var8 = _closure1_slot12;
                var5 = {};
                var7 = var9.bind(var4)(var8, var5);
            case 207:
                var5 = new Array(2);
                var5[0] = var7;
                var7 = var6 != var14;
                var6 = null;
                if (!var7) {
                    _fun80168_ip = 364;
                    continue _fun80168
                }
            case 227:
                var9 = _closure1_slot9;
                var11 = _closure1_slot0;
                var15 = _closure1_slot2;
                var7 = 15;
                var7 = var15[var7];
                var7 = var11.bind(var4)(var7);
                var8 = var7.TableRow;
                var7 = {};
                var7.onPress = var13;
                var12 = 'danger';
                var7.variant = var12;
                var12 = var14.title;
                var7.label = var12;
                var12 = var14.title;
                var7.accessibilityLabel = var12;
                var12 = _closure1_slot9;
                var10 = 16;
                var10 = var15[var10];
                var10 = var11.bind(var4)(var10);
                var11 = var10.Button;
                var10 = {};
                var15 = var14.button;
                var10.text = var15;
                var14 = var14.button;
                var10.accessibilityLabel = var14;
                var10.onPress = var13;
                var10 = var12.bind(var4)(var11, var10);
                var7.trailing = var10;
                var10 = true;
                var7.start = var10;
                var7.end = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 364:
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 378:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/account/SettingsAccountHeader.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3102, 1621, 660, 5925, 33, 1297, 671, 10213, 1234, 5930, 566, 7577, 7490, 4901, 4085, 2]);