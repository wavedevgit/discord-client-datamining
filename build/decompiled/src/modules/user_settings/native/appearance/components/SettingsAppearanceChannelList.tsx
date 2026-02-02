// modules/user_settings/native/appearance/components/SettingsAppearanceChannelList.tsx
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
    var12 = 1;
    var3 = var5[var12];
    var3 = var4.bind(var0)(var3);
    var11 = var3.StyleSheet;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var16 = var11.absoluteFillObject;
    var17 = var8;
    var9 = copyDataProperties(var17, var16);
    var9 = 4;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.radii;
    var14 = var13.xl;
    var13 = 'borderRadius';
    var8[var13] = var14;
    var14 = 'hidden';
    var13 = 'overflow';
    var8[var13] = var14;
    var3.channelPreviewGradient = var8;
    var8 = {};
    var8.flex = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var8.marginTop = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xl;
    var8.borderRadius = var12;
    var12 = '100%';
    var8.width = var12;
    var11 = var11.hairlineWidth;
    var8.borderWidth = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.shadows;
    var16 = var9.SHADOW_HIGH;
    var17 = var8;
    var9 = copyDataProperties(var17, var16);
    var10 = '#000000';
    var9 = 'shadowColor';
    var8[var9] = var10;
    var3.channelPreviewCardContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/appearance/components/SettingsAppearanceChannelList.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun84563: for (var _fun84563_ip = 0;;) switch (_fun84563_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.themes;
                var8 = var0.themeIndex;
                var11 = var0.animatedStyles;
                var _closure2_slot0 = var11;
                var15 = var0.data;
                var4 = var0.useGradientBackground;
                var10 = var0.isNitroLocked;
                var0 = _closure1_slot7;
                var3 = undefined;
                var12 = var0.bind(var3)();
                var5 = _closure1_slot3;
                var2 = var5.useCallback;
                var1 = new Array(1);
                var1[0] = var11;
                var0 = function(arg0) { // Environment: var13
                    _fun84564: for (var _fun84564_ip = 0;;) switch (_fun84564_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = var0.item;
                            var1 = var4.kind;
                            var0 = 'channel-row';
                            if (!(var0 !== var1)) {
                                _fun84564_ip = 180;
                                continue _fun84564
                            }
                        case 26:
                            var0 = 'messages-header';
                            if (!(var0 !== var1)) {
                                _fun84564_ip = 115;
                                continue _fun84564
                            }
                        case 36:
                            var0 = 'activity-cards';
                            if (!(var0 !== var1)) {
                                _fun84564_ip = 50;
                                continue _fun84564
                            }
                        case 46:
                            var0 = null;
                            return var0;
                        case 50:
                            var3 = _closure1_slot5;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 7;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var8 = var0;
                            var7 = var4;
                            var5 = copyDataProperties(var8, var7);
                            var6 = _closure2_slot0;
                            var5 = 'animatedStyles';
                            var0[var5] = var6;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        case 115:
                            var3 = _closure1_slot5;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 6;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var8 = var0;
                            var7 = var4;
                            var5 = copyDataProperties(var8, var7);
                            var6 = _closure2_slot0;
                            var5 = 'animatedStyles';
                            var0[var5] = var6;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        case 180:
                            var3 = _closure1_slot5;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 5;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var8 = var0;
                            var7 = var4;
                            var4 = copyDataProperties(var8, var7);
                            var5 = _closure2_slot0;
                            var4 = 'animatedStyles';
                            var0[var4] = var5;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                    }
                };
                var14 = var2.bind(var5)(var0, var1);
                var2 = _closure1_slot6;
                var1 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 8;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {
                    'style': null,
                    'accessible': true,
                    'accessibilityRole': 'image'
                };
                var7 = var12.channelPreviewCardContainer;
                var5 = new Array(3);
                var5[0] = var7;
                var7 = var11.borderStrong;
                var5[1] = var7;
                var7 = !var4;
                if (!var7) {
                    _fun84563_ip = 166;
                    continue _fun84563
                }
            case 160:
                var7 = var11.bgBasePrimary;
            case 166:
                var5[2] = var7;
                var0.style = var5;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var5 = 9;
                var7 = var17[var5];
                var7 = var16.bind(var3)(var7);
                var11 = var7.intl;
                var7 = var11.string;
                var5 = var17[var5];
                var5 = var16.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.iGxm3x;
                var5 = var7.bind(var11)(var5);
                var0.accessibilityLabel = var5;
                var5 = null;
                if (!var4) {
                    _fun84563_ip = 317;
                    continue _fun84563
                }
            case 242:
                var11 = _closure1_slot5;
                var7 = _closure1_slot4;
                var4 = {};
                var12 = var12.channelPreviewGradient;
                var4.style = var12;
                var16 = _closure1_slot1;
                var17 = _closure1_slot2;
                var12 = 10;
                var12 = var17[var12];
                var16 = var16.bind(var3)(var12);
                var12 = {};
                var12.themes = var9;
                var12.themeIndex = var8;
                var17 = false;
                var12.isDimmed = var17;
                var12 = var11.bind(var3)(var16, var12);
                var4.children = var12;
                var5 = var11.bind(var3)(var7, var4);
            case 317:
                var4 = new Array(3);
                var4[0] = var5;
                var7 = _closure1_slot5;
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 11;
                var5 = var11[var5];
                var5 = var12.bind(var3)(var5);
                var12 = var5.FlashList;
                var5 = {};
                var16 = {};
                var6 = _closure1_slot1;
                var17 = 4;
                var17 = var11[var17];
                var17 = var6.bind(var3)(var17);
                var17 = var17.spacing;
                var17 = var17.PX_16;
                var16.paddingVertical = var17;
                var5.contentContainerStyle = var16;
                var5.data = var15;
                var5.renderItem = var14;
                var13 = function arg0() {
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var5.keyExtractor = var13;
                var13 = 64;
                var5.estimatedItemSize = var13;
                var13 = false;
                var5.showsVerticalScrollIndicator = var13;
                var13 = 'no-hide-descendants';
                var5.importantForAccessibility = var13;
                var5 = var7.bind(var3)(var12, var5);
                var4[1] = var5;
                var5 = 12;
                var5 = var11[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var5.visible = var10;
                var8 = var9[var8];
                var5.theme = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 10800, 10801, 10802, 3681, 1234, 10796, 5717, 10808, 2]);