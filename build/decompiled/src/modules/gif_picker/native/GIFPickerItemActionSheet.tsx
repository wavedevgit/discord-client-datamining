// modules/gif_picker/native/GIFPickerItemActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun74393: for (var _fun74393_ip = 0;;) switch (_fun74393_ip) {
        case 0:
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
            var11 = 0;
            var6 = var5[var11];
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
            var9 = 4;
            var12 = var5[var9];
            var12 = var10.bind(var0)(var12);
            var12 = var12.spacing;
            var12 = var12.PX_16;
            var8.paddingHorizontal = var12;
            var12 = 5;
            var12 = var5[var12];
            var13 = var4.bind(var0)(var12);
            var12 = var13.isAndroid;
            var12 = var12.bind(var13)();
            if (!var12) {
                _fun74393_ip = 220;
                continue _fun74393
            }
        case 201:
            var12 = var5[var9];
            var12 = var10.bind(var0)(var12);
            var12 = var12.spacing;
            var11 = var12.PX_16;
        case 220:
            var8.paddingBottom = var11;
            var3.contentWrapper = var8;
            var8 = {
                'flexDirection': 'column',
                'alignItems': 'center'
            };
            var11 = var5[var9];
            var11 = var10.bind(var0)(var11);
            var11 = var11.spacing;
            var11 = var11.PX_8;
            var8.marginTop = var11;
            var3.gifContainer = var8;
            var8 = {};
            var11 = var5[var9];
            var11 = var10.bind(var0)(var11);
            var11 = var11.radii;
            var11 = var11.xs;
            var8.borderRadius = var11;
            var11 = var5[var9];
            var11 = var10.bind(var0)(var11);
            var11 = var11.colors;
            var11 = var11.BORDER_SUBTLE;
            var8.backgroundColor = var11;
            var3.gifImage = var8;
            var8 = {
                'flex': 1,
                'flexDirection': 'row',
                'alignItems': 'stretch',
                'width': '100%'
            };
            var9 = var5[var9];
            var9 = var10.bind(var0)(var9);
            var9 = var9.spacing;
            var9 = var9.PX_16;
            var8.marginTop = var9;
            var3.favoriteButtonContainer = var8;
            var3 = var6.bind(var7)(var3);
            var _closure1_slot7 = var3;
            var3 = 16;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/gif_picker/native/GIFPickerItemActionSheet.tsx';
            var3 = var4.bind(var5)(var3);
            var1 = function arg0() {
                var1 = arg0;
                var13 = var1.item;
                var _closure2_slot0 = var13;
                var1 = _closure1_slot7;
                var3 = undefined;
                var11 = var1.bind(var3)();
                var1 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 6;
                var2 = var12[var2];
                var5 = var1.bind(var3)(var2);
                var4 = var5.useIsFavoriteGIF;
                var2 = 7;
                var2 = var12[var2];
                var8 = var1.bind(var3)(var2);
                var7 = var8.gifUrlKey;
                var2 = var13.url;
                var2 = var7.bind(var8)(var2);
                var7 = var4.bind(var5)(var2);
                var _closure2_slot1 = var7;
                var9 = _closure1_slot1;
                var2 = 8;
                var2 = var12[var2];
                var2 = var9.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var10 = var2.width;
                var _closure2_slot2 = var10;
                var2 = var2.height;
                var _closure2_slot3 = var2;
                var5 = _closure1_slot3;
                var8 = var5.useMemo;
                var14 = var13.width;
                var4 = new Array(4);
                var4[0] = var14;
                var14 = var13.height;
                var4[1] = var14;
                var4[2] = var10;
                var4[3] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure2_slot2;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 4;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3);
                    var1 = var1.spacing;
                    var3 = var1.PX_16;
                    var1 = 2;
                    var1 = var1 * var3;
                    var3 = var2 - var1;
                    var1 = _closure2_slot0;
                    var2 = var1.width;
                    var4 = var3 / var2;
                    var2 = _closure2_slot3;
                    var0 = 0.5;
                    var2 = var0 * var2;
                    var0 = var1.height;
                    var3 = var2 / var0;
                    var0 = global;
                    var2 = var0.Math;
                    var0 = var2.min;
                    var2 = var0.bind(var2)(var4, var3);
                    var0 = {};
                    var3 = var1.width;
                    var3 = var3 * var2;
                    var0.width = var3;
                    var1 = var1.height;
                    var1 = var1 * var2;
                    var0.height = var1;
                    return var0;
                };
                var14 = var8.bind(var5)(var2, var4);
                var8 = var5.useCallback;
                var4 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var2 = new Array(0);
                var2 = var8.bind(var5)(var4, var2);
                var _closure2_slot4 = var2;
                var8 = var5.useCallback;
                var4 = new Array(3);
                var4[0] = var2;
                var4[1] = var7;
                var4[2] = var13;
                var2 = function() { // Environment: var0
                    _fun74397: for (var _fun74397_ip = 0;;) switch (_fun74397_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            var3 = _closure2_slot1;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var4 = 7;
                            var4 = var6[var4];
                            var4 = var5.bind(var0)(var4);
                            if (var3) {
                                _fun74397_ip = 178;
                                continue _fun74397
                            }
                        case 46:
                            var7 = var4.addFavoriteGIF;
                            var3 = _closure2_slot0;
                            var3 = var7.bind(var4)(var3);
                            var7 = _closure1_slot1;
                            var3 = 10;
                            var3 = var6[var3];
                            var8 = var7.bind(var0)(var3);
                            var7 = var8.open;
                            var3 = {};
                            var9 = 'ADDED_TO_FAVORITES';
                            var3.key = var9;
                            var9 = 11;
                            var10 = var6[var9];
                            var10 = var5.bind(var0)(var10);
                            var11 = var10.intl;
                            var10 = var11.string;
                            var9 = var6[var9];
                            var9 = var5.bind(var0)(var9);
                            var9 = var9.t;
                            var9 = var9.okQonm;
                            var9 = var10.bind(var11)(var9);
                            var3.content = var9;
                            var9 = 12;
                            var9 = var6[var9];
                            var9 = var5.bind(var0)(var9);
                            var9 = var9.GifIcon;
                            var3.IconComponent = var9;
                            var3 = var7.bind(var8)(var3);
                            _fun74397_ip = 310;
                            continue _fun74397;
                        case 178:
                            var3 = var4.removeFavoriteGIF;
                            var2 = _closure2_slot0;
                            var2 = var2.url;
                            var2 = var3.bind(var4)(var2);
                            var2 = _closure1_slot1;
                            var1 = 10;
                            var1 = var6[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.open;
                            var1 = {};
                            var4 = 'REMOVED_FROM_FAVORITES';
                            var1.key = var4;
                            var4 = 11;
                            var7 = var6[var4];
                            var7 = var5.bind(var0)(var7);
                            var8 = var7.intl;
                            var7 = var8.string;
                            var4 = var6[var4];
                            var4 = var5.bind(var0)(var4);
                            var4 = var4.t;
                            var4 = var4.in1rga;
                            var4 = var7.bind(var8)(var4);
                            var1.content = var4;
                            var4 = 12;
                            var4 = var6[var4];
                            var4 = var5.bind(var0)(var4);
                            var4 = var4.GifIcon;
                            var1.IconComponent = var4;
                            var1 = var2.bind(var3)(var1);
                        case 310:
                            return var0;
                    }
                };
                var8 = var8.bind(var5)(var2, var4);
                var _closure2_slot5 = var8;
                var4 = var5.useCallback;
                var2 = new Array(2);
                var2[0] = var8;
                var2[1] = var7;
                var0 = function() { // Environment: var0
                    _fun74398: for (var _fun74398_ip = 0;;) switch (_fun74398_ip) {
                        case 0:
                            var3 = _closure1_slot5;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 13;
                            var0 = var2[var0];
                            var2 = undefined;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.Button;
                            var0 = {};
                            var7 = _closure2_slot1;
                            var6 = 'primary';
                            if (!var7) {
                                _fun74398_ip = 57;
                                continue _fun74398
                            }
                        case 51:
                            var6 = 'destructive';
                        case 57:
                            var0.variant = var6;
                            var6 = _closure2_slot5;
                            var0.onPress = var6;
                            var4 = _closure2_slot1;
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var5 = 11;
                            var6 = var9[var5];
                            var6 = var8.bind(var2)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var5 = var9[var5];
                            var5 = var8.bind(var2)(var5);
                            var5 = var5.t;
                            if (var4) {
                                _fun74398_ip = 133;
                                continue _fun74398
                            }
                        case 120:
                            var4 = var5.nIH0v8;
                            var4 = var6.bind(var7)(var4);
                            _fun74398_ip = 144;
                            continue _fun74398;
                        case 133:
                            var5 = var5["5/NS74"];
                            var4 = var6.bind(var7)(var5);
                        case 144:
                            var0.text = var4;
                            var4 = true;
                            var0.grow = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                    }
                };
                var10 = var4.bind(var5)(var0, var2);
                var2 = _closure1_slot5;
                var0 = 14;
                var0 = var12[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {};
                var4 = true;
                var0.startExpanded = var4;
                var5 = _closure1_slot4;
                var4 = {};
                var7 = var11.contentWrapper;
                var4.style = var7;
                var7 = _closure1_slot6;
                var6 = {};
                var8 = var11.gifContainer;
                var6.style = var8;
                var8 = 15;
                var8 = var12[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var15 = var11.gifImage;
                var12 = new Array(2);
                var12[0] = var15;
                var12[1] = var14;
                var8.style = var12;
                var12 = {};
                var13 = var13.src;
                var12.uri = var13;
                var8.source = var12;
                var9 = var2.bind(var3)(var9, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var9 = {};
                var11 = var11.favoriteButtonContainer;
                var9.style = var11;
                var10 = var10.bind(var3)();
                var9.children = var10;
                var9 = var2.bind(var3)(var5, var9);
                var8[1] = var9;
                var6.children = var8;
                var6 = var7.bind(var3)(var5, var6);
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 478, 9209, 9210, 1464, 3278, 3148, 1234, 9216, 4084, 4931, 4704, 2]);