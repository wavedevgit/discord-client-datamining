// modules/collectibles/native/ProfileEffectSampleV2.tsx
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
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot3 = var6;
    var3 = var3.Image;
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 2;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = '100%';
    var8.width = var9;
    var3.profileSkeletonBackground = var8;
    var8 = {
        'width': '100%',
        'height': '100%',
        'resizeMode': 'cover'
    };
    var9 = 3;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var8.borderRadius = var11;
    var3.profileSkeletonBackgroundBundle = var8;
    var8 = {
        'position': 'absolute',
        'width': '100%',
        'height': '100%',
        'overflow': 'hidden'
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.sm;
    var8.borderRadius = var9;
    var3.profileEffectContainer = var8;
    var8 = {
        'position': 'absolute',
        'bottom': 0,
        'height': '50%',
        'width': '100%',
        'zIndex': 1
    };
    var3.gradientOverlay = var8;
    var8 = {};
    var9 = 0.5;
    var8.opacity = var9;
    var3.purchasedProfileEffect = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/ProfileEffectSampleV2.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun56893: for (var _fun56893_ip = 0;;) switch (_fun56893_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.item;
                var7 = var0.isPurchased;
                var10 = var0.isDarkTheme;
                var12 = var0.bundle;
                var6 = var0.showGradient;
                var3 = undefined;
                if (!(var6 === var3)) {
                    _fun56893_ip = 40;
                    continue _fun56893
                }
            case 38:
                var6 = true;
            case 40:
                var0 = _closure1_slot7;
                var13 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 4;
                var0 = var9[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.useToken;
                var4 = _closure1_slot1;
                var0 = 3;
                var0 = var9[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.colors;
                var0 = var0.BACKGROUND_BASE_LOW;
                var18 = var1.bind(var2)(var0);
                var2 = _closure1_slot6;
                var1 = _closure1_slot3;
                var0 = {};
                var9 = var13.profileEffectContainer;
                var4 = new Array(2);
                var4[0] = var9;
                if (!var7) {
                    _fun56893_ip = 142;
                    continue _fun56893
                }
            case 136:
                var7 = var13.purchasedProfileEffect;
            case 142:
                var4[1] = var7;
                var0.style = var4;
                var9 = _closure1_slot5;
                var7 = _closure1_slot4;
                var4 = {};
                if (var12) {
                    _fun56893_ip = 171;
                    continue _fun56893
                }
            case 163:
                var14 = var13.profileSkeletonBackground;
                _fun56893_ip = 177;
                continue _fun56893;
            case 171:
                var14 = var13.profileSkeletonBackgroundBundle;
            case 177:
                var11 = new Array(1);
                var11[0] = var14;
                var4.style = var11;
                var11 = _closure1_slot1;
                var15 = _closure1_slot2;
                if (var10) {
                    _fun56893_ip = 209;
                    continue _fun56893
                }
            case 200:
                var10 = 6;
                var10 = var15[var10];
                _fun56893_ip = 216;
                continue _fun56893;
            case 209:
                var14 = 5;
                var10 = var15[var14];
            case 216:
                var10 = var11.bind(var3)(var10);
                var4.source = var10;
                var7 = var9.bind(var3)(var7, var4);
                var4 = new Array(3);
                var4[0] = var7;
                if (!var6) {
                    _fun56893_ip = 563;
                    continue _fun56893
                }
            case 245:
                var10 = _closure1_slot5;
                var9 = _closure1_slot1;
                var11 = _closure1_slot2;
                var7 = 7;
                var7 = var11[var7];
                var9 = var9.bind(var3)(var7);
                var7 = {};
                var13 = var13.gradientOverlay;
                var7.style = var13;
                var15 = _closure1_slot0;
                var17 = 8;
                var13 = var11[var17];
                var14 = var15.bind(var3)(var13);
                var13 = var14.hexToRgbaString;
                var11 = var11[var17];
                var16 = var15.bind(var3)(var11);
                var15 = var16.hexWithOpacity;
                var11 = 0;
                var11 = var15.bind(var16)(var18, var11);
                var13 = var13.bind(var14)(var11);
                var11 = new Array(3);
                var11[0] = var13;
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var15 = var13[var17];
                var16 = var14.bind(var3)(var15);
                var15 = var16.hexToRgbaString;
                var13 = var13[var17];
                var20 = var14.bind(var3)(var13);
                var19 = var20.hexWithOpacity;
                if (var12) {
                    _fun56893_ip = 403;
                    continue _fun56893
                }
            case 380:
                var13 = 0.35;
                var13 = var19.bind(var20)(var18, var13);
                var13 = var15.bind(var16)(var13);
                _fun56893_ip = 424;
                continue _fun56893;
            case 403:
                var14 = 0.75;
                var14 = var19.bind(var20)(var18, var14);
                var13 = var15.bind(var16)(var14);
            case 424:
                var11[1] = var13;
                var16 = _closure1_slot0;
                var13 = _closure1_slot2;
                var14 = var13[var17];
                var15 = var16.bind(var3)(var14);
                var14 = var15.hexToRgbaString;
                var13 = var13[var17];
                var17 = var16.bind(var3)(var13);
                var16 = var17.hexWithOpacity;
                if (var12) {
                    _fun56893_ip = 492;
                    continue _fun56893
                }
            case 469:
                var12 = 0.7;
                var12 = var16.bind(var17)(var18, var12);
                var12 = var14.bind(var15)(var12);
                _fun56893_ip = 506;
                continue _fun56893;
            case 492:
                var13 = 1;
                var13 = var16.bind(var17)(var18, var13);
                var12 = var14.bind(var15)(var13);
            case 506:
                var11[2] = var12;
                var7.colors = var11;
                var11 = [0, 0.3, 0.6, 0.85, 1];
                var7.locations = var11;
                var11 = {
                    'x': 0,
                    'y': 0
                };
                var7.start = var11;
                var11 = {
                    'x': 0,
                    'y': 1
                };
                var7.end = var11;
                var6 = var10.bind(var3)(var9, var7);
            case 563:
                var4[1] = var6;
                var7 = _closure1_slot5;
                var6 = _closure1_slot1;
                var9 = _closure1_slot2;
                var5 = 9;
                var5 = var9[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {
                    'skuId': null,
                    'bannerAdjustment': 0,
                    'useThumbnail': true
                };
                var8 = var8.skuId;
                var5.skuId = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 33, 1297, 671, 3151, 6924, 6925, 4098, 3240, 6926, 2]);