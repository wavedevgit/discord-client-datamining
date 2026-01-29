// modules/app_dms/native/AppDMOptionsBottomSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserSettingsSections;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var3 = {};
    var9 = 6;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOWEST;
    var3.backgroundColor = var9;
    var6.sheet = var3;
    var3 = 16;
    var9 = {
        'paddingLeft': 16,
        'paddingRight': 16,
        'paddingBottom': 24
    };
    var6.content = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot9 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_dms/native/AppDMOptionsBottomSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: AppDMOptionsBottomSheet, environment: var1
        var1 = arg0;
        var2 = var1.userId;
        var _closure2_slot0 = var2;
        var5 = var1.channel;
        var _closure2_slot1 = var5;
        var1 = var1.application;
        var _closure2_slot2 = var1;
        var4 = _closure1_slot9;
        var3 = undefined;
        var7 = var4.bind(var3)();
        var17 = _closure1_slot0;
        var18 = _closure1_slot2;
        var4 = 7;
        var4 = var18[var4];
        var10 = var17.bind(var3)(var4);
        var9 = var10.useStateFromStores;
        var4 = _closure1_slot5;
        var8 = new Array(1);
        var8[0] = var4;
        var4 = function() { // Environment: var0
            _fun72153: for (var _fun72153_ip = 0;;) switch (_fun72153_ip) {
                case 0:
                    var2 = _closure1_slot5;
                    var1 = var2.getNewestTokenForApplication;
                    var4 = _closure2_slot2;
                    var0 = null;
                    var4 = var0 == var4;
                    var0 = undefined;
                    if (var4) {
                        _fun72153_ip = 40;
                        continue _fun72153
                    }
                case 31:
                    var3 = _closure2_slot2;
                    var0 = var3.id;
                case 40:
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var13 = var9.bind(var10)(var8, var4);
        var _closure2_slot3 = var13;
        var4 = _closure1_slot3;
        var8 = var4.useCallback;
        var9 = var5.id;
        var5 = new Array(2);
        var5[0] = var9;
        var5[1] = var2;
        var2 = function() { // Environment: var0
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var0 = 8;
            var1 = var3[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var1);
            var1 = {};
            var6 = _closure2_slot0;
            var1.userId = var6;
            var5 = _closure2_slot1;
            var5 = var5.id;
            var1.channelId = var5;
            var1 = var4.bind(var0)(var1);
            var1 = 9;
            var1 = var3[var1];
            var2 = var2.bind(var0)(var1);
            var1 = var2.hideActionSheet;
            var1 = var1.bind(var2)();
            return var0;
        };
        var15 = var8.bind(var4)(var2, var5);
        var5 = var4.useCallback;
        var2 = new Array(2);
        var2[0] = var1;
        var2[1] = var13;
        var1 = function() { // Environment: var0
            _fun72155: for (var _fun72155_ip = 0;;) switch (_fun72155_ip) {
                case 0:
                    var0 = _closure2_slot2;
                    var2 = null;
                    var0 = var2 != var0;
                    if (!var0) {
                        _fun72155_ip = 24;
                        continue _fun72155
                    }
                case 16:
                    var1 = _closure2_slot3;
                    var0 = var2 != var1;
                case 24:
                    if (!var0) {
                        _fun72155_ip = 122;
                        continue _fun72155
                    }
                case 27:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 10;
                    var1 = var3[var1];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var1);
                    var4 = var5.openUserSettings;
                    var1 = {};
                    var6 = _closure1_slot6;
                    var6 = var6.AUTHORIZED_APP;
                    var1.screen = var6;
                    var6 = {};
                    var7 = _closure2_slot3;
                    var6.oauth2Token = var7;
                    var1.params = var6;
                    var1 = var4.bind(var5)(var1);
                    var1 = _closure1_slot1;
                    var0 = 9;
                    var0 = var3[var0];
                    var1 = var1.bind(var2)(var0);
                    var0 = var1.hideActionSheet;
                    var0 = var0.bind(var1)();
                case 122:
                    var0 = undefined;
                    return var0;
            }
        };
        var12 = var5.bind(var4)(var1, var2);
        var2 = var4.useEffect;
        var1 = function() { // Environment: var0
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 11;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.fetch;
            var1 = var1.bind(var2)();
            return var0;
        };
        var0 = new Array(0);
        var0 = var2.bind(var4)(var1, var0);
        var2 = _closure1_slot7;
        var0 = 12;
        var0 = var18[var0];
        var0 = var17.bind(var3)(var0);
        var1 = var0.BottomSheet;
        var0 = {};
        var4 = true;
        var0.startExpanded = var4;
        var4 = var7.sheet;
        var0.backgroundStyles = var4;
        var5 = _closure1_slot4;
        var4 = {};
        var7 = var7.content;
        var4.style = var7;
        var8 = _closure1_slot8;
        var6 = 13;
        var6 = var18[var6];
        var6 = var17.bind(var3)(var6);
        var7 = var6.TableRowGroup;
        var6 = {};
        var10 = 14;
        var9 = var18[var10];
        var9 = var17.bind(var3)(var9);
        var11 = var9.TableRow;
        var9 = {};
        var14 = 15;
        var16 = var18[var14];
        var16 = var17.bind(var3)(var16);
        var20 = var16.intl;
        var19 = var20.string;
        var16 = var18[var14];
        var16 = var17.bind(var3)(var16);
        var16 = var16.t;
        var16 = var16.iXAna6;
        var16 = var19.bind(var20)(var16);
        var9.label = var16;
        var9.onPress = var15;
        var11 = var2.bind(var3)(var11, var9);
        var9 = new Array(2);
        var9[0] = var11;
        var10 = var18[var10];
        var10 = var17.bind(var3)(var10);
        var11 = var10.TableRow;
        var10 = {};
        var15 = var18[var14];
        var15 = var17.bind(var3)(var15);
        var16 = var15.intl;
        var15 = var16.string;
        var14 = var18[var14];
        var14 = var17.bind(var3)(var14);
        var14 = var14.t;
        var14 = var14.KUsDNI;
        var14 = var15.bind(var16)(var14);
        var10.label = var14;
        var10.onPress = var12;
        var12 = null;
        var12 = var12 == var13;
        var10.disabled = var12;
        var10 = var2.bind(var3)(var11, var10);
        var9[1] = var10;
        var6.children = var9;
        var6 = var8.bind(var3)(var7, var6);
        var4.children = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4543, 660, 33, 1297, 671, 566, 7310, 3237, 5880, 5308, 4887, 5320, 4854, 1234, 2]);