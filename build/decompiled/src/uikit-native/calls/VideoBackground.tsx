// uikit-native/calls/VideoBackground.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var3 = function arg0, arg1() {
        _fun50990: for (var _fun50990_ip = 0;;) switch (_fun50990_ip) {
            case 0:
                var6 = arg0;
                var2 = arg1;
                var _closure2_slot0 = var6;
                var _closure2_slot1 = var2;
                var0 = global;
                var3 = var0.Array;
                var0 = var3.isArray;
                var0 = var0.bind(var3)(var2);
                var7 = var2;
                if (!var0) {
                    _fun50990_ip = 53;
                    continue _fun50990
                }
            case 40:
                var0 = 0;
                var0 = var2[var0];
                _closure2_slot1 = var0;
                var7 = var0;
            case 53:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 7;
                var0 = var4[var0];
                var8 = undefined;
                var0 = var3.bind(var8)(var0);
                var5 = var0.bind(var8)();
                var _closure2_slot2 = var5;
                var4 = _closure1_slot4;
                var3 = var4.useState;
                var9 = null;
                var10 = var9 != var6;
                var0 = undefined;
                if (!var10) {
                    _fun50990_ip = 136;
                    continue _fun50990
                }
            case 106:
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var10 = 8;
                var10 = var12[var10];
                var10 = var11.bind(var8)(var10);
                var10 = var10.cachedDominantColors;
                var0 = var10[var6];
            case 136:
                if (!(var9 == var0)) {
                    _fun50990_ip = 198;
                    continue _fun50990
                }
            case 140:
                var10 = _closure1_slot0;
                var13 = _closure1_slot2;
                var9 = 9;
                var9 = var13[var9];
                var11 = var10.bind(var8)(var9);
                var10 = var11.hexToRgb;
                var12 = _closure1_slot1;
                var9 = 10;
                var9 = var13[var9];
                var9 = var12.bind(var8)(var9);
                var9 = var9.unsafe_rawColors;
                var9 = var9.PRIMARY_800;
                var0 = var10.bind(var11)(var9);
            case 198:
                var4 = var3.bind(var4)(var0);
                var3 = _closure1_slot3;
                var0 = 2;
                var4 = var3.bind(var8)(var4, var0);
                var0 = 0;
                var0 = var4[var0];
                var3 = 1;
                var3 = var4[var3];
                var _closure2_slot3 = var3;
                var4 = _closure1_slot4;
                var3 = var4.useEffect;
                var2 = new Array(3);
                var2[0] = var7;
                var2[1] = var6;
                var2[2] = var5;
                var1 = function() { // Environment: var1
                    _fun50991: for (var _fun50991_ip = 0;;) switch (_fun50991_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var3 = null;
                            var0 = var3 != var0;
                            if (!var0) {
                                _fun50991_ip = 24;
                                continue _fun50991
                            }
                        case 16:
                            var2 = _closure2_slot0;
                            var0 = var3 != var2;
                        case 24:
                            if (!var0) {
                                _fun50991_ip = 247;
                                continue _fun50991
                            }
                        case 30:
                            var5 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var6 = 8;
                            var2 = var2[var6];
                            var4 = undefined;
                            var2 = var5.bind(var4)(var2);
                            var5 = var2.cachedDominantColors;
                            var2 = _closure2_slot0;
                            var2 = var5[var2];
                            if (!(var3 != var2)) {
                                _fun50991_ip = 118;
                                continue _fun50991
                            }
                        case 73:
                            var3 = _closure2_slot3;
                            var5 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var2 = var2[var6];
                            var2 = var5.bind(var4)(var2);
                            var5 = var2.cachedDominantColors;
                            var2 = _closure2_slot0;
                            var2 = var5[var2];
                            var2 = var3.bind(var4)(var2);
                            _fun50991_ip = 247;
                            continue _fun50991;
                        case 118:
                            var2 = _closure2_slot1;
                            var3 = 'number';
                            var2 = typeof var2;
                            if (!(var3 !== var2)) {
                                _fun50991_ip = 175;
                                continue _fun50991
                            }
                        case 133:
                            var2 = _closure1_slot6;
                            var4 = var2.ImageManager;
                            var3 = var4.getDominantColors;
                            var6 = _closure1_slot7;
                            var5 = var6.resolveAssetSource;
                            var2 = _closure2_slot1;
                            var2 = var5.bind(var6)(var2);
                            var3 = var3.bind(var4)(var2);
                            _fun50991_ip = 215;
                            continue _fun50991;
                        case 175:
                            var2 = _closure1_slot6;
                            var4 = var2.ImageManager;
                            var2 = var4.getDominantColorsLocalAsset;
                            var6 = _closure1_slot7;
                            var5 = var6.resolveAssetSource;
                            var1 = _closure2_slot1;
                            var1 = var5.bind(var6)(var1);
                            var3 = var2.bind(var4)(var1);
                        case 215:
                            var2 = var3.then;
                            var1 = function(arg0) { // Environment: var1
                                _fun50992: for (var _fun50992_ip = 0;;) switch (_fun50992_ip) {
                                    case 0:
                                        var2 = _closure2_slot2;
                                        var0 = undefined;
                                        var2 = var2.bind(var0)();
                                        if (!var2) {
                                            _fun50992_ip = 117;
                                            continue _fun50992
                                        }
                                    case 16:
                                        var6 = _closure1_slot3;
                                        var3 = arg0;
                                        var4 = 0;
                                        var5 = var3[var4];
                                        var3 = 3;
                                        var5 = var6.bind(var0)(var5, var3);
                                        var3 = {};
                                        var4 = var5[var4];
                                        var3.r = var4;
                                        var4 = 1;
                                        var4 = var5[var4];
                                        var3.g = var4;
                                        var4 = 2;
                                        var4 = var5[var4];
                                        var3.b = var4;
                                        var4 = _closure2_slot3;
                                        var4 = var4.bind(var0)(var3);
                                        var4 = _closure1_slot1;
                                        var5 = _closure1_slot2;
                                        var2 = 8;
                                        var2 = var5[var2];
                                        var2 = var4.bind(var0)(var2);
                                        var2 = var2.cachedDominantColors;
                                        var1 = _closure2_slot0;
                                        var2[var1] = var3;
                                    case 117:
                                        return var0;
                                }
                            };
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.catch;
                            var0 = _closure1_slot8;
                            var0 = var1.bind(var2)(var0);
                        case 247:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var _closure1_slot13 = var3;
    var1 = function arg0, arg1() {
        var3 = _closure1_slot13;
        var2 = undefined;
        var1 = arg0;
        var0 = arg1;
        var0 = var3.bind(var2)(var1, var0);
        var12 = var0.r;
        var10 = var0.g;
        var8 = var0.b;
        var0 = global;
        var0 = var0.HermesInternal;
        var3 = var0.concat;
        var13 = 'rgb(';
        var1 = ', ';
        var7 = ')';
        var11 = var1;
        var9 = var1;
        var0 = var13[var3](var12, var11, var10, var9, var8, var7, var6);
        return var0;
    };
    var _closure1_slot14 = var1;
    var11 = function arg0() {
        _fun50994: for (var _fun50994_ip = 0;;) switch (_fun50994_ip) {
            case 0:
                var6 = arg0;
                var8 = var6.style;
                var3 = var6.url;
                var10 = var6.isStageCall;
                var4 = undefined;
                if (!(var10 === var4)) {
                    _fun50994_ip = 27;
                    continue _fun50994
                }
            case 25:
                var10 = false;
            case 27:
                var9 = var6.avatarStyle;
                var0 = var6.user;
                var0 = var6.guildId;
                var2 = var6.renderVideoDetails;
                var5 = {
                    'style': 0,
                    'url': 0,
                    'isStageCall': 0,
                    'avatarStyle': 0,
                    'user': 0,
                    'guildId': 0,
                    'renderVideoDetails': 0
                };
                var0 = null;
                var18 = var5;
                var17 = null;
                var1 = silentSetPrototypeOf(var18, var17);
                var18 = {};
                var17 = var6;
                var16 = var5;
                var11 = copyDataProperties(var18, var17, var16);
                var1 = _closure1_slot11;
                var14 = var1.bind(var4)();
                var1 = _closure1_slot12;
                var12 = var1.bind(var4)(var3);
                var1 = _closure1_slot14;
                var13 = var1.bind(var4)(var3, var12);
                if (!(var0 != var12)) {
                    _fun50994_ip = 323;
                    continue _fun50994
                }
            case 123:
                var3 = var0 == var2;
                var1 = undefined;
                if (var3) {
                    _fun50994_ip = 136;
                    continue _fun50994
                }
            case 132:
                var1 = var2.bind(var4)();
            case 136:
                var2 = var0 != var1;
                var6 = null;
                if (!var2) {
                    _fun50994_ip = 148;
                    continue _fun50994
                }
            case 145:
                var6 = var1;
            case 148:
                var3 = _closure1_slot10;
                var2 = _closure1_slot5;
                var1 = {};
                var7 = new Array(4);
                var7[0] = var8;
                var8 = var14.videoBackground;
                var7[1] = var8;
                var8 = {};
                var8.backgroundColor = var13;
                var7[2] = var8;
                var15 = var0 != var6;
                var8 = null;
                if (!var15) {
                    _fun50994_ip = 201;
                    continue _fun50994
                }
            case 195:
                var8 = var14.videoDetailsSpacer;
            case 201:
                var7[3] = var8;
                var1.style = var7;
                var8 = _closure1_slot9;
                var7 = _closure1_slot1;
                var14 = _closure1_slot2;
                var5 = 11;
                var5 = var14[var5];
                var7 = var7.bind(var4)(var5);
                var5 = {};
                var5.source = var12;
                var18 = var5;
                var17 = var11;
                var11 = copyDataProperties(var18, var17);
                var11 = new Array(2);
                var11[0] = var9;
                var9 = null;
                if (!var10) {
                    _fun50994_ip = 271;
                    continue _fun50994
                }
            case 262:
                var12 = {};
                var12.backgroundColor = var13;
                var9 = var12;
            case 271:
                var11[1] = var9;
                var9 = 'avatarStyle';
                var5[var9] = var11;
                var9 = 'isStageCall';
                var5[var9] = var10;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var5[1] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 323:
                return var0;
        }
    };
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var4);
    var0 = 0;
    var4 = var7[var0];
    var0 = undefined;
    var4 = var8.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var9 = var7[var4];
    var4 = arg3;
    var10 = var4.bind(var0)(var9);
    var _closure1_slot4 = var10;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var9 = var4.View;
    var _closure1_slot5 = var9;
    var9 = var4.NativeModules;
    var _closure1_slot6 = var9;
    var4 = var4.Image;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var4 = var4.NOOP;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var9 = var4.jsx;
    var _closure1_slot9 = var9;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var7[var4];
    var13 = var6.bind(var0)(var4);
    var12 = var13.createStyles;
    var4 = {};
    var9 = {};
    var14 = 'center';
    var9.alignItems = var14;
    var4.videoBackground = var9;
    var14 = {};
    var9 = 12;
    var14.paddingTop = var9;
    var4.videoDetailsSpacer = var14;
    var4 = var12.bind(var13)(var4);
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var7[var4];
    var12 = var8.bind(var0)(var4);
    var8 = var12.memoize;
    var4 = function(arg0) { // Environment: var5
        _fun50995: for (var _fun50995_ip = 0;;) switch (_fun50995_ip) {
            case 0:
                var3 = arg0;
                var2 = null;
                var1 = var2 == var3;
                var0 = null;
                if (var1) {
                    _fun50995_ip = 50;
                    continue _fun50995
                }
            case 14:
                var1 = '';
                var0 = null;
                if (!(var1 !== var3)) {
                    _fun50995_ip = 50;
                    continue _fun50995
                }
            case 24:
                var4 = 'number';
                var2 = typeof var3;
                var1 = var3;
                if (!(var4 !== var2)) {
                    _fun50995_ip = 47;
                    continue _fun50995
                }
            case 38:
                var2 = {};
                var2.uri = var3;
                var1 = var2;
            case 47:
                var0 = var1;
            case 50:
                return var0;
        }
    };
    var4 = var8.bind(var12)(var4);
    var _closure1_slot12 = var4;
    var5 = 11;
    var8 = var7[var5];
    var8 = var6.bind(var0)(var8);
    var8 = var8.AvatarSizes;
    var11.AvatarSizes = var8;
    var8 = var10.memo;
    var8 = var8.bind(var10)(var11);
    var9 = var7[var9];
    var11 = var6.bind(var0)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'uikit-native/calls/VideoBackground.tsx';
    var9 = var10.bind(var11)(var9);
    var2.default = var8;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.AvatarSizes;
    var2.AvatarSizes = var5;
    var2.memoizedImageSource = var4;
    var2.useDominantRGBFromImage = var3;
    var2.useDominantColorFromImage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 660, 33, 1297, 22, 5739, 5740, 3240, 671, 5452, 2]);