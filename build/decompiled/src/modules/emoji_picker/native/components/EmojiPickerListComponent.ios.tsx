// modules/emoji_picker/native/components/EmojiPickerListComponent.ios.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ROW_HEIGHT;
    var _closure1_slot4 = var7;
    var7 = var3.LABEL_HEIGHT;
    var _closure1_slot5 = var7;
    var3 = var3.LABEL_MARGIN;
    var _closure1_slot6 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        var3 = arg0;
        var1 = var3.categoryIndexActive;
        var _closure2_slot0 = var1;
        var1 = var3.data;
        var12 = var1.data;
        var4 = var1.headerIndices;
        var _closure2_slot1 = var4;
        var1 = var3.onShowNitroUpsell;
        var9 = var3.paddingTop;
        var _closure2_slot2 = var9;
        var2 = var3.paddingBottom;
        var _closure2_slot3 = var2;
        var5 = var3.renderItem;
        var8 = _closure1_slot3;
        var6 = var8.useRef;
        var3 = null;
        var6 = var6.bind(var8)(var3);
        var _closure2_slot4 = var6;
        var7 = var8.useMemo;
        var3 = new Array(2);
        var3[0] = var9;
        var3[1] = var2;
        var2 = function() { // Environment: var0
            var0 = {};
            var2 = _closure2_slot2;
            var0.paddingTop = var2;
            var1 = _closure2_slot3;
            var0.paddingBottom = var1;
            return var0;
        };
        var13 = var7.bind(var8)(var2, var3);
        var7 = var8.useCallback;
        var3 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.type;
            return var0;
        };
        var2 = new Array(0);
        var10 = var7.bind(var8)(var3, var2);
        var7 = var8.useCallback;
        var3 = function(arg0, arg1) { // Environment: var0
            var0 = arg0;
            var4 = var0.type;
            var0 = global;
            var0 = var0.HermesInternal;
            var3 = var0.concat;
            var2 = '';
            var1 = '-';
            var0 = arg1;
            var0 = var3.bind(var2)(var4, var1, var0);
            return var0;
        };
        var2 = new Array(0);
        var9 = var7.bind(var8)(var3, var2);
        var7 = var8.useCallback;
        var3 = function(arg0, arg1) { // Environment: var0
            _fun74075: for (var _fun74075_ip = 0;;) switch (_fun74075_ip) {
                case 0:
                    var2 = arg0;
                    var0 = arg1;
                    var4 = var0.type;
                    var5 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var6 = 3;
                    var3 = var0[var6];
                    var0 = undefined;
                    var3 = var5.bind(var0)(var3);
                    var3 = var3.EmojiPickerItemType;
                    var3 = var3.PLACEHOLDER;
                    if (!(var3 !== var4)) {
                        _fun74075_ip = 256;
                        continue _fun74075
                    }
                case 55:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var6];
                    var3 = var5.bind(var0)(var3);
                    var3 = var3.EmojiPickerItemType;
                    var3 = var3.TITLE;
                    if (!(var3 !== var4)) {
                        _fun74075_ip = 236;
                        continue _fun74075
                    }
                case 91:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var6];
                    var3 = var5.bind(var0)(var3);
                    var3 = var3.EmojiPickerItemType;
                    var3 = var3.EMOJI_ROW;
                    if (!(var3 !== var4)) {
                        _fun74075_ip = 224;
                        continue _fun74075
                    }
                case 124:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var6];
                    var3 = var5.bind(var0)(var3);
                    var3 = var3.EmojiPickerItemType;
                    var3 = var3.EMOJI_ROW_NSFW;
                    if (!(var3 !== var4)) {
                        _fun74075_ip = 224;
                        continue _fun74075
                    }
                case 157:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var6];
                    var3 = var5.bind(var0)(var3);
                    var3 = var3.EmojiPickerItemType;
                    var3 = var3.FOOTER_UPSELL;
                    if (!(var3 === var4)) {
                        _fun74075_ip = 264;
                        continue _fun74075
                    }
                case 190:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 4;
                    var3 = var5[var3];
                    var3 = var4.bind(var0)(var3);
                    var3 = var3.EMOJI_PICKER_PREMIUM_UPSELL_HEIGHT;
                    var2.size = var3;
                    _fun74075_ip = 264;
                    continue _fun74075;
                case 224:
                    var3 = _closure1_slot4;
                    var2.size = var3;
                    _fun74075_ip = 264;
                    continue _fun74075;
                case 236:
                    var3 = _closure1_slot5;
                    var1 = _closure1_slot6;
                    var1 = var3 + var1;
                    var2.size = var1;
                    _fun74075_ip = 264;
                    continue _fun74075;
                case 256:
                    var1 = 0;
                    var2.size = var1;
                case 264:
                    return var0;
            }
        };
        var2 = new Array(0);
        var7 = var7.bind(var8)(var3, var2);
        var3 = var8.useImperativeHandle;
        var2 = arg1;
        var0 = function() { // Environment: var0
            var0 = {};
            var2 = function arg0() {
                _fun74077: for (var _fun74077_ip = 0;;) switch (_fun74077_ip) {
                    case 0:
                        var0 = arg0;
                        var7 = var0.index;
                        var4 = var0.animated;
                        var0 = undefined;
                        if (!(var4 === var0)) {
                            _fun74077_ip = 22;
                            continue _fun74077
                        }
                    case 20:
                        var4 = true;
                    case 22:
                        var1 = _closure2_slot4;
                        var3 = var1.current;
                        var5 = null;
                        if (!(var5 != var3)) {
                            _fun74077_ip = 82;
                            continue _fun74077
                        }
                    case 40:
                        var2 = var3.scrollToIndex;
                        var1 = {};
                        var6 = _closure2_slot1;
                        var6 = var6[var7];
                        var7 = var5 != var6;
                        var5 = 0;
                        if (!var7) {
                            _fun74077_ip = 68;
                            continue _fun74077
                        }
                    case 65:
                        var5 = var6;
                    case 68:
                        var1.index = var5;
                        var1.animated = var4;
                        var1 = var2.bind(var3)(var1);
                    case 82:
                        return var0;
                }
            };
            var0.scrollToHeaderIndex = var2;
            var2 = function() {
                _fun74078: for (var _fun74078_ip = 0;;) switch (_fun74078_ip) {
                    case 0:
                        var0 = _closure2_slot4;
                        var1 = var0.current;
                        var2 = var1.forceUpdate;
                        var0 = null;
                        if (!(var0 != var2)) {
                            _fun74078_ip = 34;
                            continue _fun74078
                        }
                    case 24:
                        var0 = var1.forceUpdate;
                        var0 = var0.bind(var1)();
                    case 34:
                        var0 = undefined;
                        return var0;
                }
            };
            var0.forceUpdate = var2;
            var1 = function arg0() {
                _fun74079: for (var _fun74079_ip = 0;;) switch (_fun74079_ip) {
                    case 0:
                        var5 = arg0;
                        var1 = _closure2_slot1;
                        var1 = var1.length;
                        var2 = 0;
                        var1 = var2 < var1;
                        var4 = 0;
                        var3 = 0;
                        if (!var1) {
                            _fun74079_ip = 62;
                            continue _fun74079
                        }
                    case 28:
                        var1 = _closure2_slot1;
                        var1 = var1[var3];
                        if (!(var5 >= var1)) {
                            _fun74079_ip = 43;
                            continue _fun74079
                        }
                    case 40:
                        var4 = var3;
                    case 43:
                        var3 = var3 + 1;
                        var1 = _closure2_slot1;
                        var1 = var1.length;
                        var2 = var4;
                        if (var3 < var1) {
                            _fun74079_ip = 28;
                            continue _fun74079
                        }
                    case 62:
                        var1 = _closure2_slot0;
                        var0 = var1.set;
                        var0 = var0.bind(var1)(var2);
                        var0 = undefined;
                        return var0;
                }
            };
            var0.onStickyHeaderRendered = var1;
            return var0;
        };
        var0 = var3.bind(var8)(var2, var0);
        var2 = _closure1_slot1;
        var14 = _closure1_slot2;
        var0 = 5;
        var0 = var14[var0];
        var3 = undefined;
        var0 = var2.bind(var3)(var0);
        var0 = var0.bind(var3)(var1);
        var8 = var0.onViewableItemsChanged;
        var2 = _closure1_slot7;
        var1 = _closure1_slot0;
        var0 = 6;
        var0 = var14[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.BottomSheetFlashList;
        var0 = {};
        var0.contentContainerStyle = var13;
        var0.data = var12;
        var11 = _closure1_slot4;
        var0.estimatedItemSize = var11;
        var0.getItemType = var10;
        var10 = 'always';
        var0.keyboardShouldPersistTaps = var10;
        var0.keyExtractor = var9;
        var0.onViewableItemsChanged = var8;
        var0.overrideItemLayout = var7;
        var0.ref = var6;
        var0.renderItem = var5;
        var0.stickyHeaderIndices = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/emoji_picker/native/components/EmojiPickerListComponent.ios.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 9276, 33, 9285, 9293, 9304, 5748, 2]);