// modules/threads/native/components/ThreadNotificationSettingsBottomSheet.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.getThreadNotificationOptions;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'backgroundColor': null,
        'paddingTop': 8,
        'paddingBottom': 64
    };
    var9 = 5;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var11;
    var3.container = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var8.borderRadius = var11;
    var3.cardBody = var8;
    var8 = {
        'width': 22,
        'height': 22
    };
    var3.checkbox = var8;
    var8 = {
        'height': 1,
        'alignSelf': 'stretch',
        'backgroundColor': null,
        'marginLeft': 16
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BORDER_SUBTLE;
    var8.backgroundColor = var9;
    var3.divider = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/threads/native/components/ThreadNotificationSettingsBottomSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var2 = var0.channel;
        var _closure2_slot0 = var2;
        var0 = _closure1_slot7;
        var3 = undefined;
        var11 = var0.bind(var3)();
        var _closure2_slot1 = var11;
        var13 = _closure1_slot0;
        var14 = _closure1_slot2;
        var0 = 6;
        var0 = var14[var0];
        var1 = var13.bind(var3)(var0);
        var0 = var1.useThreadNotificationSetting;
        var0 = var0.bind(var1)(var2);
        var _closure2_slot2 = var0;
        var2 = _closure1_slot6;
        var0 = 7;
        var0 = var14[var0];
        var0 = var13.bind(var3)(var0);
        var1 = var0.BottomSheet;
        var0 = {};
        var7 = _closure1_slot5;
        var4 = 8;
        var4 = var14[var4];
        var4 = var13.bind(var3)(var4);
        var5 = var4.BottomSheetTitleHeader;
        var4 = {};
        var10 = 9;
        var6 = var14[var10];
        var6 = var13.bind(var3)(var6);
        var15 = var6.intl;
        var12 = var15.string;
        var6 = var14[var10];
        var6 = var13.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.h850Ss;
        var6 = var12.bind(var15)(var6);
        var4.title = var6;
        var5 = var7.bind(var3)(var5, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var5 = 10;
        var5 = var14[var5];
        var5 = var13.bind(var3)(var5);
        var6 = var5.FormCardSection;
        var5 = {};
        var11 = var11.cardBody;
        var5.cardStyle = var11;
        var11 = var14[var10];
        var11 = var13.bind(var3)(var11);
        var12 = var11.intl;
        var11 = var12.string;
        var10 = var14[var10];
        var10 = var13.bind(var3)(var10);
        var10 = var10.t;
        var10 = var10.h850Ss;
        var10 = var11.bind(var12)(var10);
        var5.accessibilityLabel = var10;
        var10 = 'radiogroup';
        var5.accessibilityRole = var10;
        var9 = _closure1_slot4;
        var10 = var9.bind(var3)();
        var9 = var10.map;
        var8 = function(arg0, arg1, arg2) { // Environment: var8
            _fun71499: for (var _fun71499_ip = 0;;) switch (_fun71499_ip) {
                case 0:
                    var0 = arg0;
                    var6 = var0.setting;
                    var _closure3_slot0 = var6;
                    var10 = var0.label;
                    var4 = _closure1_slot6;
                    var3 = _closure1_slot3;
                    var2 = {};
                    var8 = _closure1_slot5;
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var0 = var1[var0];
                    var1 = undefined;
                    var0 = var5.bind(var1)(var0);
                    var5 = var0.FormRadioRow;
                    var0 = {};
                    var11 = 'right';
                    var0.align = var11;
                    var0.label = var10;
                    var9 = function() {
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 11;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.setNotificationSettings;
                        var1 = _closure2_slot0;
                        var0 = {};
                        var4 = _closure3_slot0;
                        var0.flags = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var0.onPress = var9;
                    var9 = _closure2_slot2;
                    var9 = var9 === var6;
                    var0.selected = var9;
                    var5 = var8.bind(var1)(var5, var0);
                    var0 = new Array(2);
                    var0[0] = var5;
                    var5 = arg2;
                    var8 = var5.length;
                    var5 = 1;
                    var9 = var8 - var5;
                    var8 = arg1;
                    var5 = null;
                    if (!(var8 !== var9)) {
                        _fun71499_ip = 175;
                        continue _fun71499
                    }
                case 145:
                    var9 = _closure1_slot5;
                    var8 = _closure1_slot3;
                    var7 = {};
                    var10 = _closure2_slot1;
                    var10 = var10.divider;
                    var7.style = var10;
                    var5 = var9.bind(var1)(var8, var7);
                case 175:
                    var0[1] = var5;
                    var2.children = var0;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var5 = var0.concat;
                    var0 = '';
                    var0 = var5.bind(var0)(var6);
                    var0 = var4.bind(var1)(var3, var2, var0);
                    return var0;
            }
        };
        var8 = var9.bind(var10)(var8);
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1233, 33, 1297, 671, 8684, 4896, 5176, 1234, 5342, 6431, 2]);