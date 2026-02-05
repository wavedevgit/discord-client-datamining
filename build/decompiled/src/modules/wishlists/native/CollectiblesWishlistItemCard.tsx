// modules/wishlists/native/CollectiblesWishlistItemCard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.StyleSheet;
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.transformSKUToCollectiblesItem;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VerticalGradient;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var6 = var3.Fragment;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var6 = var7.create;
    var3 = {};
    var8 = {};
    var12 = var7.absoluteFillObject;
    var13 = var8;
    var9 = copyDataProperties(var13, var12);
    var10 = '60%';
    var9 = 'top';
    var8[var9] = var10;
    var3.gradient = var8;
    var8 = {};
    var9 = 20;
    var8.marginTop = var9;
    var3.bundleOffset = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/wishlists/native/CollectiblesWishlistItemCard.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun103238: for (var _fun103238_ip = 0;;) switch (_fun103238_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.item;
                var _closure2_slot0 = var2;
                var6 = var0.onPress;
                var4 = var0.backgroundColor;
                var _closure2_slot1 = var4;
                var0 = var2.sku;
                var5 = null;
                var0 = var5 == var0;
                var8 = false;
                if (var0) {
                    _fun103238_ip = 85;
                    continue _fun103238
                }
            case 45:
                var7 = _closure1_slot4;
                var0 = var2.sku;
                var3 = undefined;
                var0 = var7.bind(var3)(var0);
                var5 = var5 == var0;
                if (var5) {
                    _fun103238_ip = 77;
                    continue _fun103238
                }
            case 72:
                var3 = var0.type;
            case 77:
                var0 = 'bundle';
                var8 = var0 === var3;
            case 85:
                var _closure2_slot2 = var8;
                var5 = _closure1_slot2;
                var9 = var5.useMemo;
                var7 = new Array(1);
                var7[0] = var4;
                var3 = function() { // Environment: var1
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 5;
                    var0 = var5[var2];
                    var3 = undefined;
                    var0 = var4.bind(var3)(var0);
                    var1 = _closure2_slot1;
                    var7 = var0.bind(var3)(var1);
                    var6 = var7.alpha;
                    var0 = 0;
                    var6 = var6.bind(var7)(var0);
                    var0 = var6.css;
                    var6 = var0.bind(var6)();
                    var0 = new Array(3);
                    var0[0] = var6;
                    var2 = var5[var2];
                    var2 = var4.bind(var3)(var2);
                    var4 = var2.bind(var3)(var1);
                    var3 = var4.alpha;
                    var2 = 0.6;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.css;
                    var2 = var2.bind(var3)();
                    var0[1] = var2;
                    var0[2] = var1;
                    return var0;
                };
                var7 = var9.bind(var5)(var3, var7);
                var _closure2_slot3 = var7;
                var3 = var5.useCallback;
                var9 = var2.sku;
                var2 = new Array(3);
                var2[0] = var9;
                var2[1] = var8;
                var2[2] = var7;
                var1 = function() { // Environment: var1
                    _fun103240: for (var _fun103240_ip = 0;;) switch (_fun103240_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var1 = var0.sku;
                            var0 = null;
                            var1 = var0 == var1;
                            if (var1) {
                                _fun103240_ip = 253;
                                continue _fun103240
                            }
                        case 25:
                            var4 = _closure1_slot8;
                            var3 = _closure1_slot7;
                            var2 = {};
                            var7 = _closure1_slot6;
                            var6 = _closure1_slot3;
                            var5 = {};
                            var9 = _closure2_slot2;
                            var1 = undefined;
                            var8 = undefined;
                            if (!var9) {
                                _fun103240_ip = 69;
                                continue _fun103240
                            }
                        case 59:
                            var9 = _closure1_slot9;
                            var8 = var9.bundleOffset;
                        case 69:
                            var5.style = var8;
                            var12 = _closure1_slot6;
                            var9 = _closure1_slot0;
                            var13 = _closure1_slot1;
                            var8 = 6;
                            var8 = var13[var8];
                            var9 = var9.bind(var1)(var8);
                            var8 = {};
                            var13 = _closure2_slot0;
                            var13 = var13.sku;
                            var8.sku = var13;
                            var13 = false;
                            var8.showGradient = var13;
                            var8 = var12.bind(var1)(var9, var8);
                            var5.children = var8;
                            var6 = var7.bind(var1)(var6, var5);
                            var5 = new Array(2);
                            var5[0] = var6;
                            var6 = _closure2_slot2;
                            if (!var6) {
                                _fun103240_ip = 239;
                                continue _fun103240
                            }
                        case 152:
                            var9 = _closure1_slot6;
                            var8 = _closure1_slot0;
                            var12 = _closure1_slot1;
                            var7 = 7;
                            var7 = var12[var7];
                            var8 = var8.bind(var1)(var7);
                            var7 = {};
                            var12 = _closure1_slot9;
                            var12 = var12.gradient;
                            var7.style = var12;
                            var11 = _closure1_slot5;
                            var12 = var11.START;
                            var7.start = var12;
                            var11 = var11.END;
                            var7.end = var11;
                            var10 = _closure2_slot3;
                            var7.colors = var10;
                            var10 = 'none';
                            var7.pointerEvents = var10;
                            var6 = var9.bind(var1)(var8, var7);
                        case 239:
                            var5[1] = var6;
                            var2.children = var5;
                            var0 = var4.bind(var1)(var3, var2);
                        case 253:
                            return var0;
                    }
                };
                var5 = var3.bind(var5)(var1, var2);
                var3 = _closure1_slot6;
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 8;
                var0 = var2[var0];
                var2 = undefined;
                var1 = var1.bind(var2)(var0);
                var0 = {};
                var0.onPress = var6;
                var0.renderPreview = var5;
                var0.backgroundColor = var4;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4622, 660, 33, 669, 13501, 4098, 13502, 2]);