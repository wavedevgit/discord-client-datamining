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
        _fun56869: for (var _fun56869_ip = 0;;) switch (_fun56869_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.item;
                var6 = var0.isPurchased;
                var9 = var0.isDarkTheme;
                var11 = var0.bundle;
                var0 = _closure1_slot7;
                var3 = undefined;
                var12 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 4;
                var0 = var7[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.useToken;
                var4 = _closure1_slot1;
                var0 = 3;
                var0 = var7[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.colors;
                var0 = var0.BACKGROUND_BASE_LOW;
                var17 = var1.bind(var2)(var0);
                var2 = _closure1_slot6;
                var1 = _closure1_slot3;
                var0 = {};
                var7 = var12.profileEffectContainer;
                var4 = new Array(2);
                var4[0] = var7;
                if (!var6) {
                    _fun56869_ip = 130;
                    continue _fun56869
                }
            case 124:
                var6 = var12.purchasedProfileEffect;
            case 130:
                var4[1] = var6;
                var0.style = var4;
                var7 = _closure1_slot5;
                var6 = _closure1_slot4;
                var4 = {};
                if (var11) {
                    _fun56869_ip = 159;
                    continue _fun56869
                }
            case 151:
                var13 = var12.profileSkeletonBackground;
                _fun56869_ip = 165;
                continue _fun56869;
            case 159:
                var13 = var12.profileSkeletonBackgroundBundle;
            case 165:
                var10 = new Array(1);
                var10[0] = var13;
                var4.style = var10;
                var10 = _closure1_slot1;
                var14 = _closure1_slot2;
                if (var9) {
                    _fun56869_ip = 197;
                    continue _fun56869
                }
            case 188:
                var9 = 6;
                var9 = var14[var9];
                _fun56869_ip = 204;
                continue _fun56869;
            case 197:
                var13 = 5;
                var9 = var14[var13];
            case 204:
                var9 = var10.bind(var3)(var9);
                var4.source = var9;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(3);
                var4[0] = var6;
                var9 = _closure1_slot5;
                var7 = _closure1_slot1;
                var10 = _closure1_slot2;
                var6 = 7;
                var6 = var10[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var12 = var12.gradientOverlay;
                var6.style = var12;
                var14 = _closure1_slot0;
                var16 = 8;
                var12 = var10[var16];
                var13 = var14.bind(var3)(var12);
                var12 = var13.hexToRgbaString;
                var10 = var10[var16];
                var15 = var14.bind(var3)(var10);
                var14 = var15.hexWithOpacity;
                var10 = 0;
                var10 = var14.bind(var15)(var17, var10);
                var12 = var12.bind(var13)(var10);
                var10 = new Array(3);
                var10[0] = var12;
                var13 = _closure1_slot0;
                var12 = _closure1_slot2;
                var14 = var12[var16];
                var15 = var13.bind(var3)(var14);
                var14 = var15.hexToRgbaString;
                var12 = var12[var16];
                var19 = var13.bind(var3)(var12);
                var18 = var19.hexWithOpacity;
                if (var11) {
                    _fun56869_ip = 385;
                    continue _fun56869
                }
            case 362:
                var12 = 0.35;
                var12 = var18.bind(var19)(var17, var12);
                var12 = var14.bind(var15)(var12);
                _fun56869_ip = 406;
                continue _fun56869;
            case 385:
                var13 = 0.75;
                var13 = var18.bind(var19)(var17, var13);
                var12 = var14.bind(var15)(var13);
            case 406:
                var10[1] = var12;
                var15 = _closure1_slot0;
                var12 = _closure1_slot2;
                var13 = var12[var16];
                var14 = var15.bind(var3)(var13);
                var13 = var14.hexToRgbaString;
                var12 = var12[var16];
                var16 = var15.bind(var3)(var12);
                var15 = var16.hexWithOpacity;
                if (var11) {
                    _fun56869_ip = 474;
                    continue _fun56869
                }
            case 451:
                var11 = 0.7;
                var11 = var15.bind(var16)(var17, var11);
                var11 = var13.bind(var14)(var11);
                _fun56869_ip = 488;
                continue _fun56869;
            case 474:
                var12 = 1;
                var12 = var15.bind(var16)(var17, var12);
                var11 = var13.bind(var14)(var12);
            case 488:
                var10[2] = var11;
                var6.colors = var10;
                var10 = [0, 0.3, 0.6, 0.85, 1];
                var6.locations = var10;
                var10 = {
                    'x': 0,
                    'y': 0
                };
                var6.start = var10;
                var10 = {
                    'x': 0,
                    'y': 1
                };
                var6.end = var10;
                var6 = var9.bind(var3)(var7, var6);
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 33, 1297, 671, 3151, 6904, 6905, 4098, 3240, 6906, 2]);