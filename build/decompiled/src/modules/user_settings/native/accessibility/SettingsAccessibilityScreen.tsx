// modules/user_settings/native/accessibility/SettingsAccessibilityScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun85728: for (var _fun85728_ip = 0;;) switch (_fun85728_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.navigation;
                var _closure2_slot0 = var2;
                var10 = var1.gifAutoPlayOverrideReason;
                var9 = var1.animateEmojiOverrideReason;
                var6 = var1.animateStickersOverrideReason;
                var11 = var1.enableMobileColorAccessibilitySettings;
                var8 = var1.enableMobileLinkUnderlineAccessibilitySetting;
                var1 = {};
                var2 = _closure1_slot5;
                var3 = var2.ROLE_COLORS;
                var2 = new Array(1);
                var2[0] = var3;
                var1.settings = var2;
                var13 = _closure1_slot0;
                var16 = _closure1_slot2;
                var7 = 5;
                var2 = var16[var7];
                var5 = undefined;
                var2 = var13.bind(var5)(var2);
                var17 = var2.intl;
                var14 = var17.format;
                var2 = var16[var7];
                var2 = var13.bind(var5)(var2);
                var2 = var2.t;
                var3 = var2["ksVr5/"];
                var2 = {};
                var12 = _closure1_slot1;
                var15 = 6;
                var18 = var16[var15];
                var20 = var12.bind(var5)(var18);
                var19 = var20.getArticleURL;
                var18 = _closure1_slot6;
                var18 = var18.ROLE_STYLES;
                var18 = var19.bind(var20)(var18);
                var2.learnMoreLink = var18;
                var2 = var14.bind(var17)(var3, var2);
                var1.subLabel = var2;
                var2 = new Array(10);
                var2[0] = var1;
                var1 = {};
                var3 = _closure1_slot5;
                var14 = var3.DISPLAY_NAME_STYLES_ACCESSIBILITY;
                var3 = new Array(1);
                var3[0] = var14;
                var1.settings = var3;
                var3 = var16[var7];
                var3 = var13.bind(var5)(var3);
                var14 = var3.intl;
                var13 = var14.format;
                var3 = 7;
                var3 = var16[var3];
                var3 = var12.bind(var5)(var3);
                var12 = var3.L8U56h;
                var3 = {};
                var16 = function() {
                    _fun85729: for (var _fun85729_ip = 0;;) switch (_fun85729_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 8;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.getRootNavigationRef;
                            var4 = var2.bind(var3)();
                            var _closure3_slot0 = var4;
                            var2 = null;
                            var2 = var2 != var4;
                            if (!var2) {
                                _fun85729_ip = 60;
                                continue _fun85729
                            }
                        case 50:
                            var3 = var4.isReady;
                            var2 = var3.bind(var4)();
                        case 60:
                            if (!var2) {
                                _fun85729_ip = 141;
                                continue _fun85729
                            }
                        case 63:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 9;
                            var2 = var4[var2];
                            var6 = var3.bind(var0)(var2);
                            var5 = var6.openUserSettings;
                            var2 = {};
                            var7 = _closure1_slot7;
                            var7 = var7.PROFILE_CUSTOMIZATION;
                            var2.screen = var7;
                            var2 = var5.bind(var6)(var2);
                            var2 = 10;
                            var2 = var4[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.runAfterInteractions;
                            var1 = function() { // Environment: var1
                                var3 = _closure3_slot0;
                                var2 = var3.navigate;
                                var1 = {};
                                var0 = _closure1_slot7;
                                var0 = var0.DISPLAY_NAME_STYLES;
                                var1.screen = var0;
                                var0 = 'settings';
                                var0 = var2.bind(var3)(var0, var1);
                                var0 = undefined;
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                        case 141:
                            return var0;
                    }
                };
                var3.onClickOpenModal = var16;
                var3 = var13.bind(var14)(var12, var3);
                var1.subLabel = var3;
                var2[1] = var1;
                var3 = null;
                var1 = null;
                if (!var11) {
                    _fun85728_ip = 379;
                    continue _fun85728
                }
            case 292:
                var12 = {};
                var13 = _closure1_slot5;
                var14 = var13.CONTRAST_MODE;
                var13 = new Array(1);
                var13[0] = var14;
                var12.settings = var13;
                var17 = _closure1_slot0;
                var13 = _closure1_slot2;
                var14 = var13[var7];
                var14 = var17.bind(var5)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var13 = var13[var7];
                var13 = var17.bind(var5)(var13);
                var13 = var13.t;
                var13 = var13.Ax4Pgn;
                var13 = var14.bind(var16)(var13);
                var12.subLabel = var13;
                var1 = var12;
            case 379:
                var2[2] = var1;
                var1 = null;
                if (!var11) {
                    _fun85728_ip = 475;
                    continue _fun85728
                }
            case 388:
                var11 = {};
                var12 = _closure1_slot5;
                var13 = var12.REDUCE_SATURATION;
                var12 = new Array(1);
                var12[0] = var13;
                var11.settings = var12;
                var16 = _closure1_slot0;
                var12 = _closure1_slot2;
                var13 = var12[var7];
                var13 = var16.bind(var5)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var12[var7];
                var12 = var16.bind(var5)(var12);
                var12 = var12.t;
                var12 = var12["0PbE/H"];
                var12 = var13.bind(var14)(var12);
                var11.subLabel = var12;
                var1 = var11;
            case 475:
                var2[3] = var1;
                var1 = null;
                if (!var8) {
                    _fun85728_ip = 571;
                    continue _fun85728
                }
            case 484:
                var8 = {};
                var11 = _closure1_slot5;
                var12 = var11.SHOW_LINK_DECORATIONS;
                var11 = new Array(1);
                var11[0] = var12;
                var8.settings = var11;
                var14 = _closure1_slot0;
                var11 = _closure1_slot2;
                var12 = var11[var7];
                var12 = var14.bind(var5)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var11[var7];
                var11 = var14.bind(var5)(var11);
                var11 = var11.t;
                var11 = var11["72i5GI"];
                var11 = var12.bind(var13)(var11);
                var8.subLabel = var11;
                var1 = var8;
            case 571:
                var2[4] = var1;
                var1 = {};
                var8 = _closure1_slot0;
                var13 = _closure1_slot2;
                var11 = var13[var7];
                var11 = var8.bind(var5)(var11);
                var14 = var11.intl;
                var12 = var14.string;
                var11 = var13[var7];
                var11 = var8.bind(var5)(var11);
                var11 = var11.t;
                var11 = var11.BT8Bmp;
                var11 = var12.bind(var14)(var11);
                var1.label = var11;
                var11 = _closure1_slot5;
                var12 = var11.SYNC_PROFILE_COLORS;
                var11 = new Array(1);
                var11[0] = var12;
                var1.settings = var11;
                var11 = var13[var7];
                var11 = var8.bind(var5)(var11);
                var16 = var11.intl;
                var14 = var16.format;
                var11 = var13[var7];
                var11 = var8.bind(var5)(var11);
                var11 = var11.t;
                var12 = var11.u6UjrL;
                var11 = {};
                var17 = function() {
                    var2 = _closure2_slot0;
                    var1 = var2.push;
                    var0 = _closure1_slot7;
                    var0 = var0.APPEARANCE;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var11.onThemeClick = var17;
                var11 = var14.bind(var16)(var12, var11);
                var1.subLabel = var11;
                var2[5] = var1;
                var1 = {};
                var11 = var13[var7];
                var11 = var8.bind(var5)(var11);
                var14 = var11.intl;
                var12 = var14.string;
                var11 = var13[var7];
                var11 = var8.bind(var5)(var11);
                var11 = var11.t;
                var11 = var11.e3TR1b;
                var11 = var12.bind(var14)(var11);
                var1.label = var11;
                var11 = _closure1_slot5;
                var12 = var11.ENABLE_REDUCED_MOTION;
                var11 = new Array(2);
                var11[0] = var12;
                var12 = _closure1_slot5;
                var12 = var12.SYNC_REDUCED_MOTION_WITH_DEVICE;
                var11[1] = var12;
                var1.settings = var11;
                var11 = var13[var7];
                var11 = var8.bind(var5)(var11);
                var12 = var11.intl;
                var11 = var12.format;
                var7 = var13[var7];
                var7 = var8.bind(var5)(var7);
                var7 = var7.t;
                var8 = var7["2l9U2j"];
                var7 = {};
                var14 = _closure1_slot1;
                var13 = var13[var15];
                var15 = var14.bind(var5)(var13);
                var14 = var15.getArticleURL;
                var13 = _closure1_slot6;
                var13 = var13.REDUCED_MOTION;
                var13 = var14.bind(var15)(var13);
                var7.helpdeskArticle = var13;
                var7 = var11.bind(var12)(var8, var7);
                var1.subLabel = var7;
                var2[6] = var1;
                var1 = {};
                var7 = _closure1_slot5;
                var8 = var7.AUTOPLAY_GIF;
                var7 = new Array(1);
                var7[0] = var8;
                var1.settings = var7;
                var7 = var3 != var10;
                if (!var7) {
                    _fun85728_ip = 971;
                    continue _fun85728
                }
            case 946:
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var8 = 11;
                var8 = var12[var8];
                var8 = var11.bind(var5)(var8);
                var7 = var8.bind(var5)(var10);
            case 971:
                var1.subLabel = var7;
                var2[7] = var1;
                var1 = {};
                var7 = _closure1_slot5;
                var8 = var7.ANIMATE_EMOJI;
                var7 = new Array(1);
                var7[0] = var8;
                var1.settings = var7;
                var7 = var3 != var9;
                if (!var7) {
                    _fun85728_ip = 1037;
                    continue _fun85728
                }
            case 1012:
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var8 = 11;
                var8 = var11[var8];
                var8 = var10.bind(var5)(var8);
                var7 = var8.bind(var5)(var9);
            case 1037:
                var1.subLabel = var7;
                var2[8] = var1;
                var1 = {};
                var7 = _closure1_slot5;
                var8 = var7.ANIMATE_STICKERS;
                var7 = new Array(1);
                var7[0] = var8;
                var1.settings = var7;
                var3 = var3 != var6;
                if (!var3) {
                    _fun85728_ip = 1103;
                    continue _fun85728
                }
            case 1078:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 11;
                var4 = var8[var4];
                var4 = var7.bind(var5)(var4);
                var3 = var4.bind(var5)(var6);
            case 1103:
                var1.subLabel = var3;
                var2[9] = var1;
                var1 = var2.filter;
                var0 = function(arg0) { // Environment: var0
                    var1 = null;
                    var0 = arg0;
                    var0 = var1 != var0;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MobileSetting;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.HelpdeskArticles;
    var _closure1_slot6 = var6;
    var3 = var3.UserSettingsSections;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/accessibility/SettingsAccessibilityScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 12;
        var1 = var5[var1];
        var3 = undefined;
        var6 = var4.bind(var3)(var1);
        var1 = var6.useStackNavigation;
        var9 = var1.bind(var6)();
        var _closure2_slot0 = var9;
        var1 = 13;
        var1 = var5[var1];
        var7 = var4.bind(var3)(var1);
        var6 = var7.useStateFromStoresObject;
        var1 = _closure1_slot4;
        var4 = new Array(1);
        var4[0] = var1;
        var1 = function() { // Environment: var2
            var0 = {};
            var3 = _closure1_slot4;
            var2 = var3.getAppliedOverrideReasonKey;
            var1 = 'gifAutoPlay';
            var1 = var2.bind(var3)(var1);
            var0.gifAutoPlayOverrideReason = var1;
            var2 = var3.getAppliedOverrideReasonKey;
            var1 = 'animateEmoji';
            var1 = var2.bind(var3)(var1);
            var0.animateEmojiOverrideReason = var1;
            var2 = var3.getAppliedOverrideReasonKey;
            var1 = 'animateStickers';
            var1 = var2.bind(var3)(var1);
            var0.animateStickersOverrideReason = var1;
            return var0;
        };
        var1 = var6.bind(var7)(var4, var1);
        var10 = var1.gifAutoPlayOverrideReason;
        var _closure2_slot1 = var10;
        var13 = var1.animateEmojiOverrideReason;
        var _closure2_slot2 = var13;
        var12 = var1.animateStickersOverrideReason;
        var _closure2_slot3 = var12;
        var1 = _closure1_slot1;
        var4 = 14;
        var4 = var5[var4];
        var11 = var1.bind(var3)(var4);
        var8 = var11.useExperiment;
        var7 = {};
        var4 = 'SettingsAccessibilityScreen';
        var7.location = var4;
        var6 = {};
        var14 = false;
        var6.autoTrackExposure = var14;
        var6 = var8.bind(var11)(var7, var6);
        var11 = var6.enabled;
        var _closure2_slot4 = var11;
        var6 = 15;
        var6 = var5[var6];
        var8 = var1.bind(var3)(var6);
        var7 = var8.useExperiment;
        var6 = {};
        var6.location = var4;
        var4 = {};
        var4.autoTrackExposure = var14;
        var4 = var7.bind(var8)(var6, var4);
        var8 = var4.enabled;
        var _closure2_slot5 = var8;
        var7 = _closure1_slot3;
        var6 = var7.useMemo;
        var4 = new Array(6);
        var4[0] = var13;
        var4[1] = var12;
        var4[2] = var11;
        var4[3] = var10;
        var4[4] = var9;
        var4[5] = var8;
        var2 = function() { // Environment: var2
            var1 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 16;
            var0 = var2[var0];
            var5 = undefined;
            var2 = var1.bind(var5)(var0);
            var1 = var2.createList;
            var0 = {};
            var4 = _closure1_slot9;
            var3 = {};
            var7 = _closure2_slot0;
            var3.navigation = var7;
            var7 = _closure2_slot1;
            var3.gifAutoPlayOverrideReason = var7;
            var7 = _closure2_slot2;
            var3.animateEmojiOverrideReason = var7;
            var7 = _closure2_slot3;
            var3.animateStickersOverrideReason = var7;
            var7 = _closure2_slot4;
            var3.enableMobileColorAccessibilitySettings = var7;
            var6 = _closure2_slot5;
            var3.enableMobileLinkUnderlineAccessibilitySetting = var6;
            var3 = var4.bind(var5)(var3);
            var0.sections = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4 = var6.bind(var7)(var2, var4);
        var2 = _closure1_slot8;
        var0 = 17;
        var0 = var5[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var0.node = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1349, 7077, 660, 33, 1234, 1686, 2182, 3921, 5973, 5902, 10989, 1469, 632, 10985, 10990, 9067, 10260, 2]);