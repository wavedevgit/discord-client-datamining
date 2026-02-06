// modules/user_profile/native/UserProfileEditBannerButton.tsx
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
        _fun80312: for (var _fun80312_ip = 0;;) switch (_fun80312_ip) {
            case 0:
                var1 = arg0;
                var1 = var1.userId;
                var _closure2_slot0 = var1;
                var2 = _closure1_slot7;
                var4 = undefined;
                var7 = var2.bind(var4)();
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 5;
                var2 = var6[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.bind(var4)();
                var8 = var2.analyticsLocations;
                var _closure2_slot1 = var8;
                var3 = _closure1_slot0;
                var2 = 6;
                var2 = var6[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.useUserProfileAnalyticsContext;
                var2 = var2.bind(var3)();
                var9 = var2.context;
                var _closure2_slot2 = var9;
                var6 = _closure1_slot3;
                var3 = var6.useCallback;
                var2 = new Array(3);
                var2[0] = var1;
                var2[1] = var9;
                var2[2] = var8;
                var0 = function() { // Environment: var0
                    _fun80313: for (var _fun80313_ip = 0;;) switch (_fun80313_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun80313_ip = 93;
                                continue _fun80313
                            }
                        case 13:
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 7;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var6 = _closure2_slot2;
                            var7 = var0;
                            var4 = copyDataProperties(var7, var6);
                            var5 = _closure2_slot0;
                            var4 = 'userId';
                            var0[var4] = var5;
                            var5 = true;
                            var4 = 'isPreviewingChanges';
                            var0[var4] = var5;
                            var4 = _closure2_slot1;
                            var3 = 'sourceAnalyticsLocations';
                            var0[var3] = var4;
                            var0 = var1.bind(var2)(var0);
                        case 93:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var3.bind(var6)(var0, var2);
                var0 = null;
                var1 = var0 == var1;
                if (var1) {
                    _fun80312_ip = 350;
                    continue _fun80312
                }
            case 146:
                var3 = _closure1_slot5;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 8;
                var1 = var12[var1];
                var1 = var11.bind(var4)(var1);
                var2 = var1.PressableOpacity;
                var1 = {};
                var7 = var7.previewButton;
                var1.style = var7;
                var1.onPress = var6;
                var6 = 'button';
                var1.accessibilityRole = var6;
                var8 = 9;
                var6 = var12[var8];
                var6 = var11.bind(var4)(var6);
                var9 = var6.intl;
                var7 = var9.string;
                var6 = var12[var8];
                var6 = var11.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6["3Qcx6K"];
                var6 = var7.bind(var9)(var6);
                var1.accessibilityLabel = var6;
                var7 = _closure1_slot5;
                var5 = 10;
                var5 = var12[var5];
                var5 = var11.bind(var4)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'text-sm/semibold',
                    'color': 'text-default'
                };
                var9 = var12[var8];
                var9 = var11.bind(var4)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var4)(var8);
                var8 = var8.t;
                var8 = var8["3Qcx6K"];
                var8 = var9.bind(var10)(var8);
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 350:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function arg0() {
        _fun80314: for (var _fun80314_ip = 0;;) switch (_fun80314_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.onPress;
                var10 = var0.accessibilityLabel;
                var8 = var0.disabled;
                var3 = undefined;
                if (!(var8 === var3)) {
                    _fun80314_ip = 26;
                    continue _fun80314
                }
            case 24:
                var8 = false;
            case 26:
                var0 = _closure1_slot7;
                var6 = var0.bind(var3)();
                var2 = _closure1_slot5;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 8;
                var0 = var7[var0];
                var0 = var5.bind(var3)(var0);
                var1 = var0.PressableOpacity;
                var0 = {};
                var11 = 'button';
                var0.accessibilityRole = var11;
                var0.accessibilityLabel = var10;
                var0.onPress = var9;
                var0.disabled = var8;
                var6 = var6.editButton;
                var0.style = var6;
                var6 = _closure1_slot5;
                var4 = 11;
                var4 = var7[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.PencilIcon;
                var4 = {};
                var7 = 'xs';
                var4.size = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot9 = var0;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
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
    var9 = 'relative';
    var8.position = var9;
    var3.container = var8;
    var8 = {
        'position': 'absolute',
        'top': 12,
        'right': 12,
        'width': 28,
        'height': 28,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.round;
    var8.borderRadius = var11;
    var3.editButton = var8;
    var8 = {
        'width': 28,
        'height': 28
    };
    var3.editIcon = var8;
    var8 = {
        'position': 'absolute',
        'justifyContent': 'center',
        'minHeight': 28,
        'top': 12,
        'right': 48,
        'paddingVertical': 4,
        'paddingHorizontal': 12,
        'borderRadius': null,
        'backgroundColor': null,
        'zIndex': 1
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.round;
    var8.borderRadius = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var9;
    var3.previewButton = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/UserProfileEditBannerButton.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun80315: for (var _fun80315_ip = 0;;) switch (_fun80315_ip) {
            case 0:
                var0 = arg0;
                var14 = var0.user;
                var20 = var0.displayProfile;
                var19 = var0.pendingBanner;
                var18 = var0.pendingAvatarSrc;
                var17 = var0.pendingThemeColors;
                var16 = var0.pendingAccentColor;
                var13 = var0.bannerSafeArea;
                var7 = var0.showProfilePreviewButton;
                var5 = var0.showEditButton;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun80315_ip = 64;
                    continue _fun80315
                }
            case 62:
                var5 = true;
            case 64:
                var11 = var0.onPressEdit;
                var10 = var0.editButtonAccessibilityLabel;
                var9 = var0.editDisabled;
                if (!(var9 === var3)) {
                    _fun80315_ip = 88;
                    continue _fun80315
                }
            case 86:
                var9 = false;
            case 88:
                var0 = _closure1_slot7;
                var4 = var0.bind(var3)();
                var8 = _closure1_slot1;
                var21 = _closure1_slot2;
                var0 = 12;
                var0 = var21[var0];
                var0 = var8.bind(var3)(var0);
                var15 = var0.bind(var3)();
                var2 = _closure1_slot6;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var4.container;
                var0.style = var4;
                var12 = _closure1_slot5;
                var4 = 13;
                var4 = var21[var4];
                var8 = var8.bind(var3)(var4);
                var4 = {};
                var4.user = var14;
                var4.displayProfile = var20;
                var4.pendingBanner = var19;
                var4.pendingAvatarSrc = var18;
                var4.pendingThemeColors = var17;
                var4.pendingAccentColor = var16;
                var4.bannerHeight = var15;
                var4.bannerSafeArea = var13;
                var8 = var12.bind(var3)(var8, var4);
                var4 = new Array(3);
                var4[0] = var8;
                if (!var7) {
                    _fun80315_ip = 241;
                    continue _fun80315
                }
            case 216:
                var13 = _closure1_slot5;
                var12 = _closure1_slot8;
                var8 = {};
                var14 = var14.id;
                var8.userId = var14;
                var7 = var13.bind(var3)(var12, var8);
            case 241:
                var4[1] = var7;
                if (!var5) {
                    _fun80315_ip = 276;
                    continue _fun80315
                }
            case 248:
                var8 = _closure1_slot5;
                var7 = _closure1_slot9;
                var6 = {};
                var6.onPress = var11;
                var6.accessibilityLabel = var10;
                var6.disabled = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 276:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 5734, 7001, 7377, 4905, 1234, 3943, 7540, 7392, 6994, 2]);