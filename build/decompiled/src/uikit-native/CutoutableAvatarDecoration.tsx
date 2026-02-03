// uikit-native/CutoutableAvatarDecoration.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/CutoutableAvatarDecoration.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun50994: for (var _fun50994_ip = 0;;) switch (_fun50994_ip) {
            case 0:
                var2 = arg0;
                var10 = var2.size;
                var _closure2_slot0 = var10;
                var0 = var2.avatarDecoration;
                var _closure2_slot1 = var0;
                var9 = var2.decorationStyle;
                var _closure2_slot2 = var9;
                var11 = var2.animate;
                var _closure2_slot3 = var11;
                var7 = var2.cutout;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 4;
                var2 = var5[var2];
                var6 = undefined;
                var8 = var4.bind(var6)(var2);
                var5 = var8.useStateFromStores;
                var2 = _closure1_slot5;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var1
                    var0 = _closure1_slot5;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var8 = var5.bind(var8)(var4, var2);
                var _closure2_slot4 = var8;
                var5 = _closure1_slot3;
                var4 = var5.useMemo;
                var2 = new Array(5);
                var2[0] = var11;
                var2[1] = var10;
                var2[2] = var0;
                var2[3] = var9;
                var2[4] = var8;
                var1 = function() { // Environment: var1
                    _fun50996: for (var _fun50996_ip = 0;;) switch (_fun50996_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            if (!var1) {
                                _fun50996_ip = 17;
                                continue _fun50996
                            }
                        case 10:
                            var0 = _closure2_slot4;
                            var1 = !var0;
                        case 17:
                            if (!var1) {
                                _fun50996_ip = 30;
                                continue _fun50996
                            }
                        case 20:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var1 = var0 != var2;
                        case 30:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 5;
                            var2 = var2[var0];
                            var0 = undefined;
                            var5 = var3.bind(var0)(var2);
                            var2 = var5.getAvatarDecorationURL;
                            var0 = {};
                            var3 = _closure2_slot1;
                            var0.avatarDecoration = var3;
                            var0.canAnimate = var1;
                            var3 = _closure2_slot0;
                            var0.size = var3;
                            var2 = var2.bind(var5)(var0);
                            var0 = {};
                            var0.avatarDecorationUrl = var2;
                            var5 = {};
                            var5.width = var3;
                            var5.height = var3;
                            var0.sizeStyle = var5;
                            var5 = {};
                            var5.width = var3;
                            var5.height = var3;
                            var3 = new Array(2);
                            var3[0] = var5;
                            var4 = _closure2_slot2;
                            var3[1] = var4;
                            var0.style = var3;
                            var0.shouldAnimate = var1;
                            var1 = {};
                            var1.uri = var2;
                            var0.source = var1;
                            return var0;
                    }
                };
                var2 = var4.bind(var5)(var1, var2);
                var1 = var2.shouldAnimate;
                var10 = var2.avatarDecorationUrl;
                var12 = var2.style;
                var9 = var2.sizeStyle;
                var14 = var2.source;
                var2 = null;
                var4 = var2 == var0;
                var0 = null;
                if (var4) {
                    _fun50994_ip = 534;
                    continue _fun50994
                }
            case 193:
                var4 = var2 == var10;
                var0 = null;
                if (var4) {
                    _fun50994_ip = 534;
                    continue _fun50994
                }
            case 205:
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 6;
                var4 = var8[var4];
                var5 = var5.bind(var6)(var4);
                var4 = var5.isAndroid;
                var4 = var4.bind(var5)();
                if (!var4) {
                    _fun50994_ip = 244;
                    continue _fun50994
                }
            case 238:
                if (var1) {
                    _fun50994_ip = 374;
                    continue _fun50994
                }
            case 244:
                if (!(var2 == var7)) {
                    _fun50994_ip = 290;
                    continue _fun50994
                }
            case 248:
                var5 = _closure1_slot6;
                var4 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 9;
                var1 = var8[var1];
                var4 = var4.bind(var6)(var1);
                var1 = {};
                var1.source = var14;
                var1.style = var12;
                var1 = var5.bind(var6)(var4, var1);
                _fun50994_ip = 369;
                continue _fun50994;
            case 290:
                var8 = _closure1_slot6;
                var13 = _closure1_slot1;
                var15 = _closure1_slot2;
                var4 = 7;
                var4 = var15[var4];
                var5 = var13.bind(var6)(var4);
                var4 = {};
                var4.style = var12;
                var11 = var7.nativeCutouts;
                var4.cutouts = var11;
                var11 = 9;
                var11 = var15[var11];
                var13 = var13.bind(var6)(var11);
                var11 = {};
                var11.source = var14;
                var11.style = var9;
                var11 = var8.bind(var6)(var13, var11);
                var4.children = var11;
                var1 = var8.bind(var6)(var5, var4);
            case 369:
                _fun50994_ip = 531;
                continue _fun50994;
            case 374:
                if (!(var2 == var7)) {
                    _fun50994_ip = 449;
                    continue _fun50994
                }
            case 378:
                var5 = _closure1_slot6;
                var4 = _closure1_slot4;
                var2 = {};
                var2.style = var12;
                var8 = 'none';
                var2.pointerEvents = var8;
                var11 = _closure1_slot1;
                var13 = _closure1_slot2;
                var8 = 8;
                var8 = var13[var8];
                var11 = var11.bind(var6)(var8);
                var8 = {};
                var8.url = var10;
                var8.style = var9;
                var8 = var5.bind(var6)(var11, var8);
                var2.children = var8;
                var2 = var5.bind(var6)(var4, var2);
                _fun50994_ip = 528;
                continue _fun50994;
            case 449:
                var5 = _closure1_slot6;
                var8 = _closure1_slot1;
                var11 = _closure1_slot2;
                var3 = 7;
                var3 = var11[var3];
                var4 = var8.bind(var6)(var3);
                var3 = {};
                var3.style = var12;
                var7 = var7.nativeCutouts;
                var3.cutouts = var7;
                var7 = 8;
                var7 = var11[var7];
                var8 = var8.bind(var6)(var7);
                var7 = {};
                var7.url = var10;
                var7.style = var9;
                var7 = var5.bind(var6)(var8, var7);
                var3.children = var7;
                var2 = var5.bind(var6)(var4, var3);
            case 528:
                var1 = var2;
            case 531:
                var0 = var1;
            case 534:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 33, 632, 1417, 478, 5452, 5747, 4699, 2]);