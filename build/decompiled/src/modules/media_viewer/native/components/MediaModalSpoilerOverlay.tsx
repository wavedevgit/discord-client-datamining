// modules/media_viewer/native/components/MediaModalSpoilerOverlay.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun76821: for (var _fun76821_ip = 0;;) switch (_fun76821_ip) {
        case 0:
            var4 = require;
            var14 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var14;
            var _closure1_slot2 = var5;
            var0 = global;
            var7 = var0.Object;
            var6 = var7.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var2, var0, var3);
            var11 = 0;
            var3 = var5[var11];
            var0 = undefined;
            var3 = var14.bind(var0)(var3);
            var _closure1_slot3 = var3;
            var3 = 1;
            var6 = var5[var3];
            var3 = metroImportAll;
            var6 = var3.bind(var0)(var6);
            var3 = 2;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var7 = var3.StyleSheet;
            var _closure1_slot4 = var7;
            var3 = var3.View;
            var _closure1_slot5 = var3;
            var3 = 3;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var7 = var3.jsx;
            var _closure1_slot6 = var7;
            var3 = var3.jsxs;
            var _closure1_slot7 = var3;
            var3 = 4;
            var3 = var5[var3];
            var8 = var4.bind(var0)(var3);
            var7 = var8.createStyles;
            var3 = {};
            var10 = 'center';
            var9 = {
                'justifyContent': 'center',
                'alignContent': 'center',
                'flex': 1
            };
            var3.spoilerOverlayContainer = var9;
            var9 = {
                'gap': null,
                'justifyContent': 'center',
                'alignItems': 'center',
                'alignSelf': 'center'
            };
            var13 = 5;
            var12 = var5[var13];
            var12 = var14.bind(var0)(var12);
            var12 = var12.spacing;
            var12 = var12.PX_4;
            var9.gap = var12;
            var3.obscureContentContainer = var9;
            var9 = {};
            var12 = var5[var13];
            var12 = var14.bind(var0)(var12);
            var12 = var12.spacing;
            var12 = var12.PX_16;
            var9.paddingHorizontal = var12;
            var12 = var5[var13];
            var12 = var14.bind(var0)(var12);
            var12 = var12.radii;
            var12 = var12.lg;
            var9.borderRadius = var12;
            var12 = var5[var13];
            var12 = var14.bind(var0)(var12);
            var12 = var12.spacing;
            var12 = var12.PX_32;
            var9.height = var12;
            var12 = 6;
            var12 = var5[var12];
            var15 = var4.bind(var0)(var12);
            var12 = var15.isAndroid;
            var12 = var12.bind(var15)();
            var13 = var5[var13];
            var13 = var14.bind(var0)(var13);
            var13 = var13.unsafe_rawColors;
            if (var12) {
                _fun76821_ip = 361;
                continue _fun76821
            }
        case 353:
            var12 = var13.PRIMARY_600;
            _fun76821_ip = 367;
            continue _fun76821;
        case 361:
            var12 = var13.PRIMARY_800;
        case 367:
            var9.backgroundColor = var12;
            var9.flexGrow = var11;
            var9.justifyContent = var10;
            var9.alignItems = var10;
            var9.alignSelf = var10;
            var3.spoilerOverlayBackground = var9;
            var3 = var7.bind(var8)(var3);
            var _closure1_slot8 = var3;
            var3 = var6.memo;
            var1 = function arg0() {
                _fun76822: for (var _fun76822_ip = 0;;) switch (_fun76822_ip) {
                    case 0:
                        var0 = arg0;
                        var11 = var0.style;
                        var2 = var0.index;
                        var9 = var0.source;
                        var0 = _closure1_slot8;
                        var4 = undefined;
                        var14 = var0.bind(var4)();
                        var1 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 7;
                        var0 = var3[var0];
                        var6 = var1.bind(var4)(var0);
                        var5 = var6.useToken;
                        var7 = _closure1_slot1;
                        var0 = 5;
                        var0 = var3[var0];
                        var0 = var7.bind(var4)(var0);
                        var0 = var0.colors;
                        var0 = var0.SPOILER_HIDDEN_BACKGROUND;
                        var8 = var5.bind(var6)(var0);
                        var0 = 8;
                        var0 = var3[var0];
                        var1 = var1.bind(var4)(var0);
                        var0 = var1.useMediaItemSpoilerState;
                        var2 = var0.bind(var1)(var2);
                        var1 = _closure1_slot3;
                        var0 = 2;
                        var2 = var1.bind(var4)(var2, var0);
                        var0 = 0;
                        var1 = var2[var0];
                        var0 = 1;
                        var7 = var2[var0];
                        var0 = null;
                        if (!var1) {
                            _fun76822_ip = 690;
                            continue _fun76822
                        }
                    case 146:
                        var3 = _closure1_slot7;
                        var6 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var1 = 9;
                        var1 = var10[var1];
                        var1 = var6.bind(var4)(var1);
                        var2 = var1.View;
                        var1 = {};
                        var5 = new Array(3);
                        var5[0] = var11;
                        var11 = _closure1_slot4;
                        var11 = var11.absoluteFill;
                        var5[1] = var11;
                        var5[2] = var7;
                        var1.style = var5;
                        var7 = _closure1_slot6;
                        var5 = 10;
                        var5 = var10[var5];
                        var6 = var6.bind(var4)(var5);
                        var5 = {};
                        var10 = var9.obscure;
                        if (var10) {
                            _fun76822_ip = 271;
                            continue _fun76822
                        }
                    case 234:
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var10 = 6;
                        var10 = var12[var10];
                        var11 = var11.bind(var4)(var10);
                        var10 = var11.isAndroid;
                        var11 = var10.bind(var11)();
                        var10 = 'light';
                        if (!var11) {
                            _fun76822_ip = 275;
                            continue _fun76822
                        }
                    case 271:
                        var10 = 'dark';
                    case 275:
                        var5.blurTheme = var10;
                        var5.android_fallbackColor = var8;
                        var8 = _closure1_slot4;
                        var8 = var8.absoluteFill;
                        var5.style = var8;
                        var6 = var7.bind(var4)(var6, var5);
                        var5 = new Array(2);
                        var5[0] = var6;
                        var8 = _closure1_slot6;
                        var7 = _closure1_slot5;
                        var6 = {};
                        var10 = var14.spoilerOverlayContainer;
                        var6.style = var10;
                        var9 = var9.obscure;
                        if (var9) {
                            _fun76822_ip = 486;
                            continue _fun76822
                        }
                    case 345:
                        var11 = _closure1_slot6;
                        var10 = _closure1_slot5;
                        var9 = {};
                        var12 = var14.spoilerOverlayBackground;
                        var9.style = var12;
                        var19 = _closure1_slot0;
                        var20 = _closure1_slot2;
                        var12 = 12;
                        var12 = var20[var12];
                        var12 = var19.bind(var4)(var12);
                        var15 = var12.Text;
                        var12 = {
                            'accessibilityRole': 'text',
                            'variant': 'heading-md/medium',
                            'color': 'always-white'
                        };
                        var16 = 13;
                        var17 = var20[var16];
                        var17 = var19.bind(var4)(var17);
                        var18 = var17.intl;
                        var17 = var18.string;
                        var16 = var20[var16];
                        var16 = var19.bind(var4)(var16);
                        var16 = var16.t;
                        var16 = var16["F+x38C"];
                        var17 = var17.bind(var18)(var16);
                        var16 = var17.toUpperCase;
                        var16 = var16.bind(var17)();
                        var12.children = var16;
                        var12 = var11.bind(var4)(var15, var12);
                        var9.children = var12;
                        var9 = var11.bind(var4)(var10, var9);
                        _fun76822_ip = 666;
                        continue _fun76822;
                    case 486:
                        var12 = _closure1_slot7;
                        var11 = _closure1_slot5;
                        var10 = {};
                        var14 = var14.obscureContentContainer;
                        var10.style = var14;
                        var16 = _closure1_slot6;
                        var20 = _closure1_slot0;
                        var21 = _closure1_slot2;
                        var13 = 11;
                        var13 = var21[var13];
                        var13 = var20.bind(var4)(var13);
                        var14 = var13.ImageWarningIcon;
                        var13 = {
                            'size': 'lg',
                            'color': 'white'
                        };
                        var14 = var16.bind(var4)(var14, var13);
                        var13 = new Array(2);
                        var13[0] = var14;
                        var14 = 12;
                        var14 = var21[var14];
                        var14 = var20.bind(var4)(var14);
                        var15 = var14.Text;
                        var14 = {
                            'accessibilityRole': 'text',
                            'variant': 'heading-md/medium',
                            'color': 'always-white'
                        };
                        var17 = 13;
                        var18 = var21[var17];
                        var18 = var20.bind(var4)(var18);
                        var19 = var18.intl;
                        var18 = var19.string;
                        var17 = var21[var17];
                        var17 = var20.bind(var4)(var17);
                        var17 = var17.t;
                        var17 = var17.SpxcUR;
                        var17 = var18.bind(var19)(var17);
                        var14.children = var17;
                        var14 = var16.bind(var4)(var15, var14);
                        var13[1] = var14;
                        var10.children = var13;
                        var9 = var12.bind(var4)(var11, var10);
                    case 666:
                        var6.children = var9;
                        var6 = var8.bind(var4)(var7, var6);
                        var5[1] = var6;
                        var1.children = var5;
                        var0 = var3.bind(var4)(var2, var1);
                    case 690:
                        return var0;
                }
            };
            var1 = var3.bind(var6)(var1);
            var3 = 14;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/media_viewer/native/components/MediaModalSpoilerOverlay.tsx';
            var3 = var4.bind(var5)(var3);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 671, 478, 3158, 9238, 3719, 4081, 4856, 3940, 1235, 2]);