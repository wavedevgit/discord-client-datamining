// modules/custom_status/native/CustomStatusPreview.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
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
    var3 = var4.bind(var0)(var3);
    var6 = var3.PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING;
    var _closure1_slot5 = var6;
    var3 = var3.UserProfileThemeTypes;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function(arg0) { // Environment: var1
        _fun92346: for (var _fun92346_ip = 0;;) switch (_fun92346_ip) {
            case 0:
                var4 = arg0;
                var0 = {};
                var1 = {
                    'flex': 1,
                    'position': 'relative',
                    'overflow': 'hidden',
                    'width': 323,
                    'maxHeight': 301,
                    'borderWidth': null,
                    'borderColor': null,
                    'borderRadius': 16
                };
                var2 = 1;
                var3 = var2;
                if (!var4) {
                    _fun92346_ip = 30;
                    continue _fun92346
                }
            case 28:
                var3 = undefined;
            case 30:
                var1.borderWidth = var3;
                var8 = _closure1_slot1;
                var5 = _closure1_slot2;
                var6 = 5;
                var7 = var5[var6];
                var5 = undefined;
                var7 = var8.bind(var5)(var7);
                var7 = var7.colors;
                if (var4) {
                    _fun92346_ip = 77;
                    continue _fun92346
                }
            case 69:
                var4 = var7.BACKGROUND_SURFACE_HIGH;
                _fun92346_ip = 83;
                continue _fun92346;
            case 77:
                var4 = var7.BORDER_MUTED;
            case 83:
                var1.borderColor = var4;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var3 = var4.bind(var5)(var3);
                var3 = var3.shadows;
                var9 = var3.SHADOW_HIGH;
                var10 = var1;
                var3 = copyDataProperties(var10, var9);
                var0.profileContainer = var1;
                var1 = {
                    'flex': 1,
                    'marginTop': 12
                };
                var0.aboutMeCard = var1;
                var1 = {};
                var1.zIndex = var2;
                var0.profileEffect = var1;
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/custom_status/native/CustomStatusPreview.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun92347: for (var _fun92347_ip = 0;;) switch (_fun92347_ip) {
            case 0:
                var1 = arg0;
                var22 = var1.user;
                var _closure2_slot0 = var22;
                var25 = var1.pendingStatusText;
                var _closure2_slot1 = var25;
                var26 = var1.pendingStatusEmoji;
                var _closure2_slot2 = var26;
                var24 = var1.placeholderText;
                var15 = _closure1_slot1;
                var18 = _closure1_slot2;
                var1 = 6;
                var1 = var18[var1];
                var3 = undefined;
                var2 = var15.bind(var3)(var1);
                var1 = var22.id;
                var14 = var2.bind(var3)(var1);
                var1 = 7;
                var1 = var18[var1];
                var1 = var15.bind(var3)(var1);
                var21 = var1.bind(var3)(var14);
                var1 = 8;
                var1 = var18[var1];
                var2 = var15.bind(var3)(var1);
                var1 = {};
                var1.user = var22;
                var1.displayProfile = var14;
                var1 = var2.bind(var3)(var1);
                var5 = var1.theme;
                var16 = var1.primaryColor;
                var4 = var1.secondaryColor;
                var13 = null;
                var29 = var13 != var16;
                var1 = _closure1_slot9;
                var12 = var1.bind(var3)(var29);
                var1 = 9;
                var1 = var18[var1];
                var1 = var15.bind(var3)(var1);
                var28 = var1.bind(var3)();
                var1 = _closure1_slot0;
                var2 = 10;
                var2 = var18[var2];
                var7 = var1.bind(var3)(var2);
                var6 = var7.useUserProfileColors;
                var2 = {};
                var2.theme = var5;
                var2.primaryColor = var16;
                var2.secondaryColor = var4;
                var2 = var6.bind(var7)(var2);
                var17 = var2.gradientFallbackBackground;
                var23 = var2.avatarBackground;
                var20 = var2.containerBackground;
                var7 = _closure1_slot3;
                var6 = var7.useCallback;
                var2 = new Array(3);
                var2[0] = var22;
                var2[1] = var25;
                var2[2] = var26;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 11;
                    var4 = var1[var0];
                    var0 = undefined;
                    var5 = var3.bind(var0)(var4);
                    var4 = var5.dismissKeyboard;
                    var4 = var4.bind(var5)();
                    var4 = _closure1_slot1;
                    var2 = 12;
                    var2 = var1[var2];
                    var6 = var4.bind(var0)(var2);
                    var5 = var6.openLazy;
                    var2 = 14;
                    var2 = var1[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = 13;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var10 = var3.bind(var0)(var2, var1);
                    var3 = {};
                    var2 = _closure2_slot0;
                    var3.user = var2;
                    var2 = _closure2_slot1;
                    var3.previewText = var2;
                    var1 = _closure2_slot2;
                    var3.previewEmoji = var1;
                    var9 = 'UserProfileCustomStatusActionSheet';
                    var7 = 'stack';
                    var11 = var6;
                    var8 = var3;
                    var1 = var11[var5](var10, var9, var8, var7, var6);
                    return var0;
                };
                var27 = var6.bind(var7)(var0, var2);
                var2 = _closure1_slot7;
                var0 = 15;
                var0 = var18[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.ThemeContextProvider;
                var0 = {};
                var0.theme = var5;
                var0.primaryColor = var16;
                var0.secondaryColor = var4;
                var6 = _closure1_slot8;
                var5 = _closure1_slot4;
                var4 = {};
                var8 = var12.profileContainer;
                var7 = new Array(1);
                var7[0] = var8;
                var4.style = var7;
                var7 = 16;
                var7 = var18[var7];
                var8 = var15.bind(var3)(var7);
                var7 = {};
                var7.user = var22;
                var7.displayProfile = var14;
                var10 = 132;
                var7.bannerHeight = var10;
                var19 = true;
                var7.disableInteraction = var19;
                var8 = var2.bind(var3)(var8, var7);
                var7 = new Array(3);
                var7[0] = var8;
                var8 = {};
                var10 = 17;
                var10 = var18[var10];
                var11 = var15.bind(var3)(var10);
                var10 = {};
                var10.user = var22;
                var10.backgroundColor = var23;
                var10.disableStatus = var19;
                var11 = var2.bind(var3)(var11, var10);
                var10 = new Array(2);
                var10[0] = var11;
                var11 = 18;
                var11 = var18[var11];
                var15 = var15.bind(var3)(var11);
                var11 = {};
                var11.fallbackBackground = var17;
                var11.primaryColor = var16;
                var11.secondaryColor = var16;
                var17 = var28.profileContent;
                var16 = new Array(2);
                var16[0] = var17;
                var17 = '';
                var18 = var17 !== var25;
                if (var18) {
                    _fun92347_ip = 489;
                    continue _fun92347
                }
            case 485:
                var18 = var13 !== var26;
            case 489:
                if (var18) {
                    _fun92347_ip = 496;
                    continue _fun92347
                }
            case 492:
                var18 = var17 !== var24;
            case 496:
                var17 = !var18;
                if (var18) {
                    _fun92347_ip = 516;
                    continue _fun92347
                }
            case 502:
                var18 = {};
                var19 = _closure1_slot5;
                var18.paddingTop = var19;
                var17 = var18;
            case 516:
                var16[1] = var17;
                var11.containerStyle = var16;
                var19 = _closure1_slot7;
                var18 = _closure1_slot1;
                var23 = _closure1_slot2;
                var16 = 19;
                var16 = var23[var16];
                var17 = var18.bind(var3)(var16);
                var16 = {};
                var16.hasCustomProfileTheme = var29;
                var29 = var28.customStatusBubble;
                var16.style = var29;
                var28 = var28.emojiOnlyCustomStatusBubble;
                var16.emojiOnlyStyle = var28;
                var16.onPressTruncatedStatus = var27;
                var16.previewEmoji = var26;
                var16.previewText = var25;
                var16.placeholderText = var24;
                var17 = var19.bind(var3)(var17, var16);
                var16 = new Array(2);
                var16[0] = var17;
                var17 = 20;
                var17 = var23[var17];
                var18 = var18.bind(var3)(var17);
                var17 = {};
                var17.user = var22;
                var22 = _closure1_slot6;
                var22 = var22.PREVIEW;
                var17.themeType = var22;
                var23 = var13 == var14;
                var22 = undefined;
                if (var23) {
                    _fun92347_ip = 659;
                    continue _fun92347
                }
            case 653:
                var22 = var14.pronouns;
            case 659:
                var17.pronouns = var22;
                var17.badges = var21;
                var17.badgeContainerBackground = var20;
                var20 = false;
                var17.showBadgeToastOnPress = var20;
                var17 = var19.bind(var3)(var18, var17);
                var16[1] = var17;
                var11.children = var16;
                var11 = var6.bind(var3)(var15, var11);
                var10[1] = var11;
                var8.children = var10;
                var8 = var6.bind(var3)(var5, var8);
                var7[1] = var8;
                var10 = var13 == var14;
                var8 = undefined;
                if (var10) {
                    _fun92347_ip = 734;
                    continue _fun92347
                }
            case 728:
                var8 = var14.profileEffect;
            case 734:
                var8 = var13 != var8;
                if (!var8) {
                    _fun92347_ip = 809;
                    continue _fun92347
                }
            case 741:
                var11 = _closure1_slot7;
                var10 = _closure1_slot1;
                var15 = _closure1_slot2;
                var9 = 21;
                var9 = var15[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var15 = var13 == var14;
                var13 = undefined;
                if (var15) {
                    _fun92347_ip = 788;
                    continue _fun92347
                }
            case 776:
                var14 = var14.profileEffect;
                var13 = var14.skuId;
            case 788:
                var9.skuId = var13;
                var12 = var12.profileEffect;
                var9.style = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 809:
                var7[2] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 6988, 33, 1297, 671, 6981, 6993, 6989, 6991, 6992, 3720, 3280, 7773, 1307, 3161, 6994, 6997, 6998, 7000, 7393, 6931, 2]);