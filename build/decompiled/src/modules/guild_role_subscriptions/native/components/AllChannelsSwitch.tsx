// modules/guild_role_subscriptions/native/components/AllChannelsSwitch.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun116877: for (var _fun116877_ip = 0;;) switch (_fun116877_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.icon;
                var11 = var0.label;
                var4 = var0.onPress;
                var8 = var0.selected;
                var7 = var0.disabled;
                var3 = undefined;
                if (!(var7 === var3)) {
                    _fun116877_ip = 37;
                    continue _fun116877
                }
            case 35:
                var7 = false;
            case 37:
                var0 = _closure1_slot7;
                var9 = var0.bind(var3)();
                var2 = _closure1_slot6;
                var1 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 8;
                var0 = var6[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var6 = var9.row;
                var0.style = var6;
                var6 = 'radio';
                var0.accessibilityRole = var6;
                var6 = {};
                var6.disabled = var7;
                var6.selected = var8;
                var0.accessibilityState = var6;
                var6 = var8;
                if (var8) {
                    _fun116877_ip = 117;
                    continue _fun116877
                }
            case 114:
                var6 = var7;
            case 117:
                var0.disabled = var6;
                var0.onPress = var4;
                var7 = _closure1_slot5;
                var14 = _closure1_slot1;
                var12 = _closure1_slot2;
                var13 = 9;
                var4 = var12[var13];
                var6 = var14.bind(var3)(var4);
                var4 = {};
                var13 = var12[var13];
                var13 = var14.bind(var3)(var13);
                var13 = var13.Sizes;
                var13 = var13.MEDIUM;
                var4.size = var13;
                var4.source = var10;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(3);
                var4[0] = var6;
                var10 = _closure1_slot5;
                var7 = _closure1_slot0;
                var6 = 10;
                var6 = var12[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.LegacyText;
                var6 = {
                    'style': null,
                    'numberOfLines': 1,
                    'ellipsizeMode': 'tail'
                };
                var13 = var9.rowLabel;
                var12 = new Array(2);
                var12[0] = var13;
                var13 = var8;
                if (!var13) {
                    _fun116877_ip = 260;
                    continue _fun116877
                }
            case 254:
                var13 = var9.rowLabelSelected;
            case 260:
                var12[1] = var13;
                var6.style = var12;
                var6.children = var11;
                var6 = var10.bind(var3)(var7, var6);
                var4[1] = var6;
                var7 = _closure1_slot5;
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 11;
                var5 = var10[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.RadioIndicator;
                var5 = {};
                var9 = var9.rowIndicator;
                var5.style = var9;
                var5.active = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot8 = var0;
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
    var3 = var3.bind(var0)(var6);
    var15 = 1;
    var3 = var5[var15];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AllChannelAccessOptions;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var11 = var3.Fonts;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 6;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var8.borderRadius = var12;
    var3.container = var8;
    var14 = 16;
    var8 = {
        'alignSelf': 'stretch',
        'alignItems': 'center',
        'flexDirection': 'row',
        'justifyContent': 'flex-start',
        'padding': 16
    };
    var3.row = var8;
    var8 = {};
    var12 = 7;
    var13 = var5[var12];
    var17 = var10.bind(var0)(var13);
    var16 = var11.PRIMARY_MEDIUM;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_SUBTLE;
    var19 = var17.bind(var0)(var16, var13, var14);
    var20 = var8;
    var13 = copyDataProperties(var20, var19);
    var13 = 'flexShrink';
    var8[var13] = var15;
    var13 = 'marginHorizontal';
    var8[var13] = var14;
    var3.rowLabel = var8;
    var8 = {};
    var12 = var5[var12];
    var13 = var10.bind(var0)(var12);
    var12 = var11.PRIMARY_SEMIBOLD;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.MOBILE_TEXT_HEADING_PRIMARY;
    var19 = var13.bind(var0)(var12, var11, var14);
    var20 = var8;
    var11 = copyDataProperties(var20, var19);
    var3.rowLabelSelected = var8;
    var8 = {};
    var11 = 'auto';
    var8.marginStart = var11;
    var3.rowIndicator = var8;
    var8 = {
        'backgroundColor': null,
        'height': 1,
        'marginStart': 56
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BORDER_SUBTLE;
    var8.backgroundColor = var9;
    var3.separator = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/components/AllChannelsSwitch.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun116878: for (var _fun116878_ip = 0;;) switch (_fun116878_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.channelAccessFormat;
                var1 = var0.setChannelAccessFormat;
                var _closure2_slot0 = var1;
                var6 = var0.style;
                var8 = var0.disabled;
                var3 = undefined;
                if (!(var8 === var3)) {
                    _fun116878_ip = 39;
                    continue _fun116878
                }
            case 37:
                var8 = false;
            case 39:
                var0 = _closure1_slot7;
                var17 = var0.bind(var3)();
                var2 = _closure1_slot6;
                var1 = _closure1_slot3;
                var0 = {};
                var7 = var17.container;
                var4 = new Array(2);
                var4[0] = var7;
                var4[1] = var6;
                var0.style = var4;
                var4 = 'radiogroup';
                var0.accessibilityRole = var4;
                var4 = {};
                var4.disabled = var8;
                var0.accessibilityState = var4;
                var6 = _closure1_slot5;
                var7 = _closure1_slot8;
                var4 = {};
                var14 = _closure1_slot1;
                var16 = _closure1_slot2;
                var10 = 12;
                var10 = var16[var10];
                var10 = var14.bind(var3)(var10);
                var4.icon = var10;
                var15 = _closure1_slot0;
                var12 = 13;
                var10 = var16[var12];
                var10 = var15.bind(var3)(var10);
                var18 = var10.intl;
                var13 = var18.string;
                var10 = var16[var12];
                var10 = var15.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10["vs2T+B"];
                var10 = var13.bind(var18)(var10);
                var4.label = var10;
                var10 = _closure1_slot4;
                var13 = var10.SOME_CHANNELS_ACCESS;
                var13 = var11 === var13;
                var4.selected = var13;
                var13 = function() {
                    var2 = _closure2_slot0;
                    var0 = _closure1_slot4;
                    var1 = var0.SOME_CHANNELS_ACCESS;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var4.onPress = var13;
                var4.disabled = var8;
                var6 = var6.bind(var3)(var7, var4);
                var4 = new Array(3);
                var4[0] = var6;
                var13 = _closure1_slot5;
                var6 = {};
                var17 = var17.separator;
                var6.style = var17;
                var6 = var13.bind(var3)(var1, var6);
                var4[1] = var6;
                var6 = _closure1_slot5;
                var5 = {};
                var13 = 14;
                var13 = var16[var13];
                var13 = var14.bind(var3)(var13);
                var5.icon = var13;
                var13 = var16[var12];
                var13 = var15.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.l4Tr7X;
                var12 = var13.bind(var14)(var12);
                var5.label = var12;
                var10 = var10.ALL_CHANNELS_ACCESS;
                var10 = var11 === var10;
                var5.selected = var10;
                var9 = function() {
                    var2 = _closure2_slot0;
                    var0 = _closure1_slot4;
                    var1 = var0.ALL_CHANNELS_ACCESS;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var5.onPress = var9;
                var5.disabled = var8;
                var5 = var6.bind(var3)(var7, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 10728, 660, 33, 1297, 671, 4647, 6743, 4047, 4841, 7103, 14870, 1234, 14871, 2]);