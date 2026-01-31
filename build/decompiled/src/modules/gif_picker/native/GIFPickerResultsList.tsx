// modules/gif_picker/native/GIFPickerResultsList.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var3 = global;
    var9 = var3.Object;
    var8 = var9.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var6);
    var0 = 0;
    var6 = var5[var0];
    var0 = undefined;
    var6 = var7.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var7 = var5[var6];
    var6 = metroImportAll;
    var6 = var6.bind(var0)(var7);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.jsx;
    var _closure1_slot5 = var6;
    var7 = {};
    var6 = 20;
    var7.length = var6;
    var8 = var3.Array;
    var6 = var8.from;
    var9 = var6.bind(var8)(var7);
    var8 = var9.map;
    var6 = function() { // Environment: var1
        var0 = undefined;
        return var0;
    };
    var6 = var8.bind(var9)(var6);
    var _closure1_slot6 = var6;
    var6 = var3.Array;
    var3 = var6.from;
    var7 = var3.bind(var6)(var7);
    var6 = var7.map;
    var3 = function() { // Environment: var1
        var0 = {};
        var1 = 100;
        var0.width = var1;
        var1 = global;
        var3 = var1.Math;
        var2 = var3.floor;
        var4 = var1.Math;
        var1 = var4.random;
        var4 = var1.bind(var4)();
        var1 = 91;
        var1 = var1 * var4;
        var2 = var2.bind(var3)(var1);
        var1 = 90;
        var1 = var2 + var1;
        var0.height = var1;
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/gif_picker/native/GIFPickerResultsList.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: _default, environment: var1
        _fun74134: for (var _fun74134_ip = 0;;) switch (_fun74134_ip) {
            case 0:
                var3 = arg0;
                var8 = var3.columns;
                var _closure2_slot0 = var8;
                var4 = var3.columnWidth;
                var _closure2_slot1 = var4;
                var12 = var3.resultItems;
                var2 = var3.onPressGIF;
                var _closure2_slot2 = var2;
                var1 = var3.inActionSheet;
                var7 = var3.ListFooterComponent;
                var5 = var3.loading;
                var3 = undefined;
                var _closure2_slot3 = var3;
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var6 = 3;
                var6 = var10[var6];
                var9 = var9.bind(var3)(var6);
                var6 = {};
                var10 = false;
                var6.hasCategories = var10;
                var6 = var9.bind(var3)(var6);
                var14 = var6.safeAreaBottomKeyboardAware;
                if (!var5) {
                    _fun74134_ip = 115;
                    continue _fun74134
                }
            case 111:
                var12 = _closure1_slot6;
            case 115:
                var13 = _closure1_slot4;
                var6 = var13.useCallback;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function(arg0, arg1) { // Environment: var0
                    var0 = {};
                    var2 = _closure2_slot1;
                    var0.width = var2;
                    var3 = arg0;
                    var1 = arg1;
                    var1 = var3 / var1;
                    var1 = var2 / var1;
                    var0.height = var1;
                    return var0;
                };
                var15 = var6.bind(var13)(var4, var5);
                _closure2_slot3 = var15;
                var6 = var13.useCallback;
                var5 = function(arg0, arg1) { // Environment: var0
                    _fun74136: for (var _fun74136_ip = 0;;) switch (_fun74136_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = arg1;
                            var1 = null;
                            var4 = var1 == var3;
                            var0 = undefined;
                            if (var4) {
                                _fun74136_ip = 23;
                                continue _fun74136
                            }
                        case 17:
                            var0 = var3.src;
                        case 23:
                            if (!(var1 == var0)) {
                                _fun74136_ip = 36;
                                continue _fun74136
                            }
                        case 27:
                            var1 = var2.toString;
                            var0 = var1.bind(var2)();
                        case 36:
                            return var0;
                    }
                };
                var4 = new Array(0);
                var9 = var6.bind(var13)(var5, var4);
                var4 = function() { // Original name: useViewedItemIndexes, environment: var0
                    var4 = _closure1_slot4;
                    var3 = var4.useState;
                    var2 = function() { // Environment: var1
                        var0 = global;
                        var0 = var0.Set;
                        var1 = var0.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var0
                            }
                        });
                        var2 = var1;
                        var0 = new var2[var0](var1);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    };
                    var5 = var3.bind(var4)(var2);
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var0 = 2;
                    var3 = var3.bind(var2)(var5, var0);
                    var0 = 0;
                    var2 = var3[var0];
                    var0 = 1;
                    var0 = var3[var0];
                    var _closure3_slot0 = var0;
                    var0 = {};
                    var0.viewedItemIndexes = var2;
                    var3 = var4.useCallback;
                    var2 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = var0.changed;
                        var _closure4_slot0 = var0;
                        var2 = _closure3_slot0;
                        var0 = undefined;
                        var1 = function(arg0) { // Environment: var1
                            var0 = global;
                            var3 = var0.Set;
                            var0 = var3.prototype;
                            var2 = Object.create(var0, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var4 = arg0;
                            var5 = var2;
                            var0 = new var5[var3](var4, var3);
                            var0 = var0 instanceof Object ? var0 : var2;
                            var _closure5_slot0 = var0;
                            var3 = _closure4_slot0;
                            var2 = var3.forEach;
                            var1 = function(arg0) { // Environment: var1
                                _fun74141: for (var _fun74141_ip = 0;;) switch (_fun74141_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var2 = var0.index;
                                        var1 = var0.isViewable;
                                        var0 = null;
                                        var0 = var0 !== var2;
                                        if (!var0) {
                                            _fun74141_ip = 26;
                                            continue _fun74141
                                        }
                                    case 23:
                                        var0 = var1;
                                    case 26:
                                        if (!var0) {
                                            _fun74141_ip = 46;
                                            continue _fun74141
                                        }
                                    case 29:
                                        var1 = _closure5_slot0;
                                        var0 = var1.add;
                                        var0 = var0.bind(var1)(var2);
                                    case 46:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = new Array(0);
                    var1 = var3.bind(var4)(var2, var1);
                    var0.onViewableItemsChanged = var1;
                    return var0;
                };
                var4 = var4.bind(var3)();
                var10 = var4.viewedItemIndexes;
                var6 = var4.onViewableItemsChanged;
                var5 = var13.useCallback;
                var4 = new Array(3);
                var4[0] = var8;
                var4[1] = var2;
                var4[2] = var15;
                var2 = function(arg0) { // Environment: var0
                    _fun74142: for (var _fun74142_ip = 0;;) switch (_fun74142_ip) {
                        case 0:
                            var0 = arg0;
                            var8 = var0.item;
                            var2 = var0.index;
                            var4 = var0.columnIndex;
                            var1 = var0.extraData;
                            var0 = null;
                            if (!(var0 != var8)) {
                                _fun74142_ip = 216;
                                continue _fun74142
                            }
                        case 34:
                            var5 = _closure2_slot3;
                            var3 = var8.width;
                            var0 = var8.height;
                            var6 = undefined;
                            var0 = var5.bind(var6)(var3, var0);
                            var10 = var0.width;
                            var9 = var0.height;
                            var0 = var1.has;
                            var0 = var0.bind(var1)(var2);
                            var5 = _closure1_slot5;
                            if (var0) {
                                _fun74142_ip = 147;
                                continue _fun74142
                            }
                        case 89:
                            var3 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var0 = 4;
                            var0 = var11[var0];
                            var0 = var3.bind(var6)(var0);
                            var3 = var0.GIFPickerItemPlaceholder;
                            var0 = {};
                            var0.width = var10;
                            var0.height = var9;
                            var11 = _closure2_slot0;
                            var0.columns = var11;
                            var0.columnIndex = var4;
                            var0 = var5.bind(var6)(var3, var0);
                            _fun74142_ip = 214;
                            continue _fun74142;
                        case 147:
                            var3 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var1 = 4;
                            var1 = var11[var1];
                            var3 = var3.bind(var6)(var1);
                            var1 = {};
                            var1.width = var10;
                            var1.height = var9;
                            var1.index = var2;
                            var9 = _closure2_slot0;
                            var1.columns = var9;
                            var1.columnIndex = var4;
                            var1.item = var8;
                            var7 = _closure2_slot2;
                            var1.onPressGIF = var7;
                            var0 = var5.bind(var6)(var3, var1);
                        case 214:
                            return var0;
                        case 216:
                            var1 = _closure1_slot7;
                            var1 = var1[var2];
                            var6 = var1.width;
                            var2 = var1.height;
                            var1 = _closure2_slot3;
                            var3 = undefined;
                            var1 = var1.bind(var3)(var6, var2);
                            var7 = var1.width;
                            var6 = var1.height;
                            var2 = _closure1_slot5;
                            var1 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var0 = 4;
                            var0 = var8[var0];
                            var0 = var1.bind(var3)(var0);
                            var1 = var0.GIFPickerItemPlaceholder;
                            var0 = {};
                            var0.width = var7;
                            var0.height = var6;
                            var5 = _closure2_slot0;
                            var0.columns = var5;
                            var0.columnIndex = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var4 = var5.bind(var13)(var2, var4);
                var5 = var13.useCallback;
                var2 = new Array(1);
                var2[0] = var15;
                var0 = function(arg0, arg1, arg2) { // Environment: var0
                    _fun74143: for (var _fun74143_ip = 0;;) switch (_fun74143_ip) {
                        case 0:
                            var0 = arg1;
                            var1 = null;
                            if (!(var1 != var0)) {
                                _fun74143_ip = 41;
                                continue _fun74143
                            }
                        case 9:
                            var3 = _closure2_slot3;
                            var2 = var0.width;
                            var1 = var0.height;
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2, var1);
                            var1 = var0.height;
                            _fun74143_ip = 60;
                            continue _fun74143;
                        case 41:
                            var2 = _closure1_slot7;
                            var0 = arg2;
                            var0 = var2[var0];
                            var1 = var0.height;
                        case 60:
                            var0 = arg0;
                            var0.size = var1;
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var5.bind(var13)(var0, var2);
                var2 = _closure1_slot0;
                var13 = _closure1_slot2;
                var0 = 5;
                var0 = var13[var0];
                var0 = var2.bind(var3)(var0);
                if (var1) {
                    _fun74134_ip = 285;
                    continue _fun74134
                }
            case 277:
                var2 = var0.MasonryFlashList;
                _fun74134_ip = 291;
                continue _fun74134;
            case 285:
                var2 = var0.BottomSheetMasonryFlashList;
            case 291:
                var1 = _closure1_slot5;
                var0 = {};
                var13 = {};
                var13.paddingBottom = var14;
                var0.contentContainerStyle = var13;
                var0.data = var12;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var11 = 6;
                var14 = var13[var11];
                var14 = var12.bind(var3)(var14);
                var14 = var14.GIF_PICKER_ITEM_ESIMTATED_HEIGHT;
                var0.drawDistance = var14;
                var11 = var13[var11];
                var11 = var12.bind(var3)(var11);
                var11 = var11.GIF_PICKER_ITEM_ESIMTATED_HEIGHT;
                var0.estimatedItemSize = var11;
                var0.extraData = var10;
                var0.keyExtractor = var9;
                var9 = 'always';
                var0.keyboardShouldPersistTaps = var9;
                var0.numColumns = var8;
                var0.ListFooterComponent = var7;
                var7 = true;
                var0.optimizeItemArrangement = var7;
                var0.onViewableItemsChanged = var6;
                var0.overrideItemLayout = var5;
                var0.renderItem = var4;
                var0 = var1.bind(var3)(var2, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 33, 9239, 9311, 5715, 9304, 2]);