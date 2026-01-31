// modules/user_profile/native/UserProfileEditTheme.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: ColorSwatch, environment: var1
        var0 = arg0;
        var11 = var0.color;
        var8 = var0.label;
        var13 = var0.accessibilityLabel;
        var12 = var0.onPress;
        var14 = var0.style;
        var0 = _closure1_slot6;
        var3 = undefined;
        var15 = var0.bind(var3)();
        var6 = _closure1_slot0;
        var9 = _closure1_slot2;
        var0 = 5;
        var0 = var9[var0];
        var1 = var6.bind(var3)(var0);
        var0 = var1.int2hex;
        var18 = var0.bind(var1)(var11);
        var0 = 6;
        var0 = var9[var0];
        var2 = var6.bind(var3)(var0);
        var1 = var2.getHigherContrastColor;
        var0 = {};
        var0.backgroundColor = var18;
        var7 = _closure1_slot7;
        var4 = new Array(2);
        var4[0] = var7;
        var7 = _closure1_slot8;
        var4[1] = var7;
        var0.colors = var4;
        var16 = var1.bind(var2)(var0);
        var2 = _closure1_slot5;
        var1 = _closure1_slot3;
        var0 = {};
        var4 = var15.colorSwatchContainer;
        var0.style = var4;
        var10 = _closure1_slot4;
        var4 = 7;
        var4 = var9[var4];
        var4 = var6.bind(var3)(var4);
        var7 = var4.PressableOpacity;
        var4 = {};
        var17 = 'button';
        var4.accessibilityRole = var17;
        var4.accessibilityLabel = var13;
        var13 = 8;
        var17 = var9[var13];
        var17 = var6.bind(var3)(var17);
        var19 = var17.intl;
        var17 = var19.string;
        var13 = var9[var13];
        var13 = var6.bind(var3)(var13);
        var13 = var13.t;
        var13 = var13.Qp04hK;
        var13 = var17.bind(var19)(var13);
        var4.accessibilityHint = var13;
        var17 = var15.colorSwatch;
        var13 = new Array(3);
        var13[0] = var17;
        var17 = {};
        var17.backgroundColor = var18;
        var13[1] = var17;
        var13[2] = var14;
        var4.style = var13;
        var4.onPress = var12;
        var14 = _closure1_slot4;
        var12 = 9;
        var12 = var9[var12];
        var12 = var6.bind(var3)(var12);
        var13 = var12.PencilIcon;
        var12 = {};
        var17 = 'xs';
        var12.size = var17;
        var12.color = var16;
        var15 = var15.dropperIcon;
        var12.style = var15;
        var12 = var14.bind(var3)(var13, var12);
        var4.children = var12;
        var7 = var10.bind(var3)(var7, var4, var11);
        var4 = new Array(2);
        var4[0] = var7;
        var7 = _closure1_slot4;
        var5 = 10;
        var5 = var9[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {
            'variant': 'text-sm/normal',
            'color': 'text-default'
        };
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot9 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot4 = var7;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var9 = var4.bind(var0)(var3);
    var8 = var9.createStyles;
    var7 = {};
    var3 = {};
    var10 = 6;
    var3.gap = var10;
    var7.container = var3;
    var3 = {
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'alignItems': 'center'
    };
    var7.sectionHeader = var3;
    var3 = {
        'flexDirection': 'row',
        'gap': 12,
        'justifyContent': 'center'
    };
    var7.themeColorContainer = var3;
    var3 = 4;
    var10 = {
        'position': 'relative',
        'flex': 1,
        'flexDirection': 'column',
        'alignItems': 'center',
        'gap': 4
    };
    var7.colorSwatchContainer = var10;
    var10 = {
        'height': 50,
        'width': '100%'
    };
    var11 = var5[var3];
    var11 = var6.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var10.borderRadius = var11;
    var7.colorSwatch = var10;
    var10 = {
        'position': 'absolute',
        'top': 10,
        'right': 10
    };
    var7.dropperIcon = var10;
    var10 = {};
    var11 = var5[var3];
    var11 = var6.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_SUBTLE;
    var10.tintColor = var11;
    var7.overflowMenu = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot6 = var7;
    var7 = var5[var3];
    var7 = var6.bind(var0)(var7);
    var7 = var7.unsafe_rawColors;
    var7 = var7.WHITE;
    var _closure1_slot7 = var7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.unsafe_rawColors;
    var3 = var3.PRIMARY_530;
    var _closure1_slot8 = var3;
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/UserProfileEditTheme.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: UserProfileEditTheme, environment: var1
        _fun79879: for (var _fun79879_ip = 0;;) switch (_fun79879_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.user;
                var1 = var0.onProfileThemeColorsChanged;
                var _closure2_slot0 = var1;
                var7 = var0.pendingThemeColors;
                var3 = var0.guildId;
                var6 = var0.pendingAvatarSrc;
                var11 = var0.showResetMenu;
                var4 = undefined;
                if (!(var11 === var4)) {
                    _fun79879_ip = 51;
                    continue _fun79879
                }
            case 49:
                var11 = false;
            case 51:
                var2 = var0.isTryItOut;
                if (!(var2 === var4)) {
                    _fun79879_ip = 63;
                    continue _fun79879
                }
            case 61:
                var2 = false;
            case 63:
                var _closure2_slot1 = var4;
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var0 = _closure1_slot6;
                var9 = var0.bind(var4)();
                var1 = _closure1_slot1;
                var12 = _closure1_slot2;
                var0 = 11;
                var0 = var12[var0];
                var8 = var1.bind(var4)(var0);
                var0 = var5.id;
                var8 = var8.bind(var4)(var0, var3);
                _closure2_slot1 = var8;
                var0 = 12;
                var0 = var12[var0];
                var1 = var1.bind(var4)(var0);
                var0 = {};
                var0.user = var5;
                var0.displayProfile = var8;
                var0.pendingThemeColors = var7;
                var0.isPreview = var2;
                var0 = var1.bind(var4)(var0);
                var26 = var0.primaryColor;
                _closure2_slot2 = var26;
                var19 = var0.secondaryColor;
                _closure2_slot3 = var19;
                var0 = null;
                if (!(var0 == var6)) {
                    _fun79879_ip = 208;
                    continue _fun79879
                }
            case 193:
                var2 = var5.getAvatarURL;
                var1 = 80;
                var6 = var2.bind(var5)(var3, var1);
            case 208:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 13;
                var1 = var7[var1];
                var5 = var2.bind(var4)(var1);
                var3 = var5.useAvatarColors;
                var2 = _closure1_slot1;
                var1 = 4;
                var1 = var7[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.unsafe_rawColors;
                var2 = var1.PRIMARY_530;
                var1 = false;
                var1 = var3.bind(var5)(var6, var2, var1);
                _closure2_slot4 = var1;
                if (!(var0 != var26)) {
                    _fun79879_ip = 1031;
                    continue _fun79879
                }
            case 281:
                if (!(var0 != var19)) {
                    _fun79879_ip = 1031;
                    continue _fun79879
                }
            case 288:
                var1 = function(arg0) { // Original name: handleProfileThemeColorsChanged, environment: var14
                    _fun79880: for (var _fun79880_ip = 0;;) switch (_fun79880_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 14;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var5 = _closure2_slot1;
                            var2 = null;
                            var5 = var2 == var5;
                            var2 = undefined;
                            if (var5) {
                                _fun79880_ip = 56;
                                continue _fun79880
                            }
                        case 46:
                            var5 = _closure2_slot1;
                            var2 = var5.themeColors;
                        case 56:
                            var4 = var4.bind(var0)(var3, var2);
                            var2 = _closure2_slot0;
                            var1 = undefined;
                            if (var4) {
                                _fun79880_ip = 74;
                                continue _fun79880
                            }
                        case 71:
                            var1 = var3;
                        case 74:
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                _closure2_slot5 = var1;
                var15 = function(arg0, arg1) { // Original name: makeOnPress, environment: var14
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var1 = arg1;
                    var _closure3_slot1 = var1;
                    var0 = function() { // Environment: var0
                        var6 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 15;
                        var2 = var3[var0];
                        var0 = undefined;
                        var5 = var6.bind(var0)(var2);
                        var4 = var5.UNSAFE_markDismissibleContentAsDismissed;
                        var2 = 16;
                        var2 = var3[var2];
                        var2 = var6.bind(var0)(var2);
                        var2 = var2.DismissibleContent;
                        var2 = var2.PROFILE_THEMES_SETTINGS_VIEWED_V2;
                        var2 = var4.bind(var5)(var2);
                        var2 = _closure1_slot1;
                        var1 = 17;
                        var1 = var3[var1];
                        var2 = var2.bind(var0)(var1);
                        var1 = {};
                        var4 = _closure3_slot0;
                        var1.color = var4;
                        var3 = _closure3_slot1;
                        var1.onSelect = var3;
                        var3 = _closure2_slot4;
                        var1.suggestedColors = var3;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    return var0;
                };
                var3 = _closure1_slot5;
                var2 = _closure1_slot3;
                var1 = {};
                var5 = var9.container;
                var1.style = var5;
                var7 = _closure1_slot5;
                var6 = _closure1_slot3;
                var5 = {};
                var8 = var9.sectionHeader;
                var5.style = var8;
                var16 = _closure1_slot4;
                var21 = _closure1_slot0;
                var17 = _closure1_slot2;
                var8 = 10;
                var8 = var17[var8];
                var8 = var21.bind(var4)(var8);
                var12 = var8.Text;
                var8 = {
                    'variant': 'text-sm/semibold',
                    'color': 'text-subtle'
                };
                var13 = 8;
                var18 = var17[var13];
                var18 = var21.bind(var4)(var18);
                var20 = var18.intl;
                var18 = var20.string;
                var17 = var17[var13];
                var17 = var21.bind(var4)(var17);
                var17 = var17.t;
                var17 = var17.DMeO2X;
                var17 = var18.bind(var20)(var17);
                var8.children = var17;
                var12 = var16.bind(var4)(var12, var8);
                var8 = new Array(2);
                var8[0] = var12;
                if (!var11) {
                    _fun79879_ip = 614;
                    continue _fun79879
                }
            case 459:
                var17 = _closure1_slot4;
                var20 = _closure1_slot0;
                var22 = _closure1_slot2;
                var12 = 7;
                var12 = var22[var12];
                var12 = var20.bind(var4)(var12);
                var16 = var12.PressableOpacity;
                var12 = {};
                var18 = 'button';
                var12.accessibilityRole = var18;
                var18 = var22[var13];
                var18 = var20.bind(var4)(var18);
                var23 = var18.intl;
                var21 = var23.string;
                var18 = var22[var13];
                var18 = var20.bind(var4)(var18);
                var18 = var18.t;
                var18 = var18["+1H47t"];
                var18 = var21.bind(var23)(var18);
                var12.accessibilityLabel = var18;
                var18 = function() { // Original name: onPress, environment: var14
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 18;
                    var3 = var1[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 20;
                    var2 = var1[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = 19;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var3 = var3.bind(var0)(var2, var1);
                    var2 = {};
                    var1 = function() { // Original name: onResetTheme, environment: var1
                        var2 = _closure2_slot5;
                        var1 = undefined;
                        var0 = [null, null];
                        var0 = var2.bind(var1)(var0);
                        return var0;
                    };
                    var2.onResetTheme = var1;
                    var1 = 'Profile Theme';
                    var1 = var4.bind(var5)(var3, var1, var2);
                    return var0;
                };
                var12.onPress = var18;
                var21 = _closure1_slot4;
                var18 = 21;
                var18 = var22[var18];
                var18 = var20.bind(var4)(var18);
                var20 = var18.MoreHorizontalIcon;
                var18 = {};
                var22 = var9.overflowMenu;
                var22 = var22.tintColor;
                var18.color = var22;
                var18 = var21.bind(var4)(var20, var18);
                var12.children = var18;
                var11 = var17.bind(var4)(var16, var12);
            case 614:
                var8[1] = var11;
                var5.children = var8;
                var6 = var7.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot5;
                var7 = _closure1_slot3;
                var6 = {};
                var9 = var9.themeColorContainer;
                var6.style = var9;
                var11 = _closure1_slot4;
                var12 = _closure1_slot9;
                var9 = {};
                var16 = function(arg0) { // Environment: var14
                    _fun79885: for (var _fun79885_ip = 0;;) switch (_fun79885_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = _closure2_slot2;
                            if (!(var3 !== var1)) {
                                _fun79885_ip = 41;
                                continue _fun79885
                            }
                        case 14:
                            var2 = _closure2_slot5;
                            var1 = new Array(2);
                            var1[0] = var3;
                            var0 = _closure2_slot3;
                            var1[1] = var0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 41:
                            var0 = undefined;
                            return var0;
                    }
                };
                var16 = var15.bind(var4)(var26, var16);
                var9.onPress = var16;
                var9.color = var26;
                var18 = _closure1_slot0;
                var20 = _closure1_slot2;
                var16 = var20[var13];
                var16 = var18.bind(var4)(var16);
                var21 = var16.intl;
                var17 = var21.string;
                var16 = var20[var13];
                var16 = var18.bind(var4)(var16);
                var16 = var16.t;
                var16 = var16.C3KTQk;
                var16 = var17.bind(var21)(var16);
                var9.label = var16;
                var16 = var20[var13];
                var16 = var18.bind(var4)(var16);
                var23 = var16.intl;
                var22 = var23.formatToPlainString;
                var16 = var20[var13];
                var16 = var18.bind(var4)(var16);
                var16 = var16.t;
                var21 = var16.v4X2kc;
                var16 = {};
                var17 = 5;
                var24 = var20[var17];
                var25 = var18.bind(var4)(var24);
                var24 = var25.int2hex;
                var24 = var24.bind(var25)(var26);
                var16.colorHex = var24;
                var16 = var22.bind(var23)(var21, var16);
                var9.accessibilityLabel = var16;
                var11 = var11.bind(var4)(var12, var9);
                var9 = new Array(2);
                var9[0] = var11;
                var11 = _closure1_slot4;
                var10 = {};
                var10.color = var19;
                var14 = function(arg0) { // Environment: var14
                    _fun79886: for (var _fun79886_ip = 0;;) switch (_fun79886_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = _closure2_slot3;
                            if (!(var0 !== var2)) {
                                _fun79886_ip = 41;
                                continue _fun79886
                            }
                        case 14:
                            var2 = _closure2_slot5;
                            var3 = _closure2_slot2;
                            var1 = new Array(2);
                            var1[0] = var3;
                            var1[1] = var0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 41:
                            var0 = undefined;
                            return var0;
                    }
                };
                var14 = var15.bind(var4)(var19, var14);
                var10.onPress = var14;
                var14 = var20[var13];
                var14 = var18.bind(var4)(var14);
                var16 = var14.intl;
                var15 = var16.string;
                var14 = var20[var13];
                var14 = var18.bind(var4)(var14);
                var14 = var14.t;
                var14 = var14["8elvy6"];
                var14 = var15.bind(var16)(var14);
                var10.label = var14;
                var14 = var20[var13];
                var14 = var18.bind(var4)(var14);
                var16 = var14.intl;
                var15 = var16.formatToPlainString;
                var13 = var20[var13];
                var13 = var18.bind(var4)(var13);
                var13 = var13.t;
                var14 = var13.I0tmru;
                var13 = {};
                var17 = var20[var17];
                var18 = var18.bind(var4)(var17);
                var17 = var18.int2hex;
                var17 = var17.bind(var18)(var19);
                var13.colorHex = var17;
                var13 = var15.bind(var16)(var14, var13);
                var10.accessibilityLabel = var13;
                var10 = var11.bind(var4)(var12, var10);
                var9[1] = var10;
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 1031:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 668, 9100, 4865, 1234, 7475, 3900, 6913, 6921, 6799, 4505, 3171, 1358, 10108, 3237, 10127, 1307, 8893, 2]);