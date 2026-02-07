// modules/activities/native/VoiceControlsToggleNuxActionSheet.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ContentDismissActionType;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = {};
    var6 = 'https://cdn.discordapp.com/assets/activities/platform/activities_pipfab_tutorial_redesign.mp4';
    var3.videoURI = var6;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 7;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.sm;
    var8.borderRadius = var9;
    var9 = 'hidden';
    var8.overflow = var9;
    var3.videoContainer = var8;
    var8 = {};
    var9 = 24;
    var8.paddingHorizontal = var9;
    var3.bottomSheetWrapper = var8;
    var8 = {
        'flex': 1,
        'alignItems': 'center',
        'paddingTop': 24,
        'paddingBottom': 16
    };
    var3.contentContainer = var8;
    var8 = {
        'marginTop': 16,
        'textAlign': 'center'
    };
    var3.title = var8;
    var8 = {
        'marginTop': 8,
        'marginBottom': 24,
        'textAlign': 'center'
    };
    var3.body = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/native/VoiceControlsToggleNuxActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun111497: for (var _fun111497_ip = 0;;) switch (_fun111497_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.markAsDismissed;
                var _closure2_slot0 = var0;
                var0 = _closure1_slot11;
                var3 = undefined;
                var16 = var0.bind(var3)();
                var2 = _closure1_slot4;
                var1 = var2.useState;
                var0 = 0;
                var4 = var1.bind(var2)(var0);
                var2 = _closure1_slot3;
                var1 = 2;
                var1 = var2.bind(var3)(var4, var1);
                var18 = var1[var0];
                var0 = 1;
                var0 = var1[var0];
                var _closure2_slot1 = var0;
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 8;
                var0 = var4[var0];
                var1 = var2.bind(var3)(var0);
                var0 = var1.useIsScreenLandscape;
                var0 = var0.bind(var1)();
                var _closure2_slot2 = var0;
                var1 = 9;
                var1 = var4[var1];
                var5 = var2.bind(var3)(var1);
                var4 = var5.useStateFromStores;
                var1 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var12
                    var0 = _closure1_slot6;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var11 = var4.bind(var5)(var2, var1);
                var17 = 1.5;
                if (!var0) {
                    _fun111497_ip = 171;
                    continue _fun111497
                }
            case 161:
                var17 = 2.0875;
            case 171:
                var2 = _closure1_slot8;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var0 = 10;
                var0 = var15[var0];
                var0 = var14.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {};
                var13 = true;
                var0.startExpanded = var13;
                var4 = function() {
                    var2 = _closure2_slot0;
                    var0 = _closure1_slot7;
                    var1 = var0.UNKNOWN;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var0.onDismiss = var4;
                var5 = _closure1_slot5;
                var4 = {};
                var6 = var16.bottomSheetWrapper;
                var4.style = var6;
                var7 = _closure1_slot9;
                var6 = {};
                var8 = var16.contentContainer;
                var6.style = var8;
                var8 = function arg0() {
                    _fun111500: for (var _fun111500_ip = 0;;) switch (_fun111500_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var0 = var0.layout;
                            var3 = var0.width;
                            var2 = _closure2_slot1;
                            var0 = _closure2_slot2;
                            var1 = var3;
                            if (!var0) {
                                _fun111500_ip = 44;
                                continue _fun111500
                            }
                        case 37:
                            var0 = 2;
                            var1 = var3 / var0;
                        case 44:
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            var0 = undefined;
                            return var0;
                    }
                };
                var6.onLayout = var8;
                var10 = _closure1_slot1;
                var8 = 11;
                var8 = var15[var8];
                var9 = var10.bind(var3)(var8);
                var8 = {};
                var20 = var16.videoContainer;
                var8.style = var20;
                var19 = _closure1_slot10;
                var8.src = var19;
                var19 = 'https://cdn.discordapp.com/assets/activities/platform/activities_pipfab_tutorial_redesign.png';
                var8.poster = var19;
                var8.width = var18;
                var17 = var18 / var17;
                var8.height = var17;
                var8.muted = var13;
                var8.paused = var11;
                var9 = var2.bind(var3)(var9, var8);
                var8 = new Array(4);
                var8[0] = var9;
                var9 = 12;
                var11 = var15[var9];
                var11 = var14.bind(var3)(var11);
                var17 = var11.Text;
                var13 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'heading-xl/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var11 = var16.title;
                var13.style = var11;
                var11 = 13;
                var18 = var15[var11];
                var18 = var14.bind(var3)(var18);
                var20 = var18.intl;
                var19 = var20.string;
                var18 = var15[var11];
                var18 = var14.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18.pT6hue;
                var18 = var19.bind(var20)(var18);
                var13.children = var18;
                var13 = var2.bind(var3)(var17, var13);
                var8[1] = var13;
                var9 = var15[var9];
                var9 = var14.bind(var3)(var9);
                var13 = var9.Text;
                var9 = {};
                var16 = var16.body;
                var9.style = var16;
                var16 = 'text-sm/normal';
                var9.variant = var16;
                var16 = var15[var11];
                var16 = var14.bind(var3)(var16);
                var18 = var16.intl;
                var17 = var18.string;
                var16 = var15[var11];
                var16 = var14.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16.tNm8AZ;
                var16 = var17.bind(var18)(var16);
                var9.children = var16;
                var9 = var2.bind(var3)(var13, var9);
                var8[2] = var9;
                var9 = 14;
                var9 = var15[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var12 = function() {
                    var2 = _closure2_slot0;
                    var0 = _closure1_slot7;
                    var1 = var0.UNKNOWN;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var9.onPress = var12;
                var12 = var15[var11];
                var12 = var14.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var15[var11];
                var11 = var14.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11["NX+WJN"];
                var11 = var12.bind(var13)(var11);
                var9.text = var11;
                var9 = var2.bind(var3)(var10, var9);
                var8[3] = var9;
                var6.children = var8;
                var6 = var7.bind(var3)(var5, var6);
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1298, 1369, 33, 1297, 671, 5414, 566, 4933, 8924, 3942, 1234, 4875, 2]);