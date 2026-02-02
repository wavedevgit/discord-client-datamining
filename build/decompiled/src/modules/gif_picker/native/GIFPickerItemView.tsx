// modules/gif_picker/native/GIFPickerItemView.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var4 = var6[var0];
    var1 = metroImportAll;
    var0 = undefined;
    var7 = var1.bind(var0)(var4);
    var _closure1_slot3 = var7;
    var1 = 1;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.View;
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var6[var1];
    var8 = var5.bind(var0)(var1);
    var4 = var8.createStyles;
    var1 = function(arg0, arg1, arg2, arg3) { // Environment: var3
        _fun74149: for (var _fun74149_ip = 0;;) switch (_fun74149_ip) {
            case 0:
                var7 = arg1;
                var0 = {};
                var1 = {};
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var8 = 4;
                var2 = var2[var8];
                var5 = undefined;
                var2 = var4.bind(var5)(var2);
                var2 = var2.GIF_PICKER_GUTTER_SPACING;
                var1.paddingBottom = var2;
                var4 = 0;
                var2 = 0;
                if (!(var4 !== var7)) {
                    _fun74149_ip = 81;
                    continue _fun74149
                }
            case 51:
                var9 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var8];
                var6 = var9.bind(var5)(var6);
                var9 = var6.GIF_PICKER_GUTTER_SPACING;
                var6 = 2;
                var2 = var9 / var6;
            case 81:
                var1.paddingLeft = var2;
                var6 = arg0;
                var2 = 1;
                var6 = var6 - var2;
                var4 = 0;
                if (!(var7 !== var6)) {
                    _fun74149_ip = 132;
                    continue _fun74149
                }
            case 102:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var8];
                var6 = var7.bind(var5)(var6);
                var7 = var6.GIF_PICKER_GUTTER_SPACING;
                var6 = 2;
                var4 = var7 / var6;
            case 132:
                var1.paddingRight = var4;
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 5;
                var7 = var6[var3];
                var7 = var4.bind(var5)(var7);
                var7 = var7.radii;
                var7 = var7.xs;
                var1.borderRadius = var7;
                var7 = arg2;
                var1.width = var7;
                var7 = arg3;
                var1.height = var7;
                var1.flex = var2;
                var0.container = var1;
                var1 = {};
                var7 = var6[var3];
                var7 = var4.bind(var5)(var7);
                var7 = var7.colors;
                var7 = var7.BORDER_SUBTLE;
                var1.backgroundColor = var7;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var3 = var3.radii;
                var3 = var3.xs;
                var1.borderRadius = var3;
                var1.flex = var2;
                var0.gifImage = var1;
                return var0;
        }
    };
    var1 = var4.bind(var8)(var1);
    var _closure1_slot6 = var1;
    var4 = var7.memo;
    var1 = function(arg0) { // Environment: var3
        var0 = arg0;
        var8 = var0.width;
        var7 = var0.height;
        var10 = var0.columns;
        var9 = var0.columnIndex;
        var1 = _closure1_slot6;
        var3 = undefined;
        var11 = undefined;
        var5 = var11[var1](var10, var9, var8, var7, var6);
        var2 = _closure1_slot5;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = var5.container;
        var0.style = var4;
        var4 = {};
        var5 = var5.gifImage;
        var4.style = var5;
        var4 = var2.bind(var3)(var1, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var4.bind(var7)(var1);
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/gif_picker/native/GIFPickerItemView.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        var2 = arg0;
        var1 = var2.onPressGIF;
        var _closure2_slot0 = var1;
        var7 = var2.item;
        var _closure2_slot1 = var7;
        var10 = var2.index;
        var _closure2_slot2 = var10;
        var15 = var2.columns;
        var14 = var2.columnIndex;
        var13 = var2.width;
        var12 = var2.height;
        var2 = _closure1_slot6;
        var3 = undefined;
        var16 = undefined;
        var6 = var16[var2](var15, var14, var13, var12, var11);
        var8 = _closure1_slot3;
        var5 = var8.useCallback;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var10;
        var2[2] = var1;
        var1 = function() { // Environment: var0
            var3 = _closure2_slot0;
            var2 = _closure2_slot1;
            var1 = _closure2_slot2;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 6;
            var1 = var3[var1];
            var2 = var2.bind(var0)(var1);
            var1 = var2.dismissGlobalKeyboard;
            var1 = var1.bind(var2)();
            return var0;
        };
        var9 = var5.bind(var8)(var1, var2);
        var5 = var8.useCallback;
        var2 = new Array(1);
        var2[0] = var7;
        var1 = function() { // Environment: var0
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var0 = 7;
            var2 = var3[var0];
            var0 = undefined;
            var8 = var4.bind(var0)(var2);
            var7 = var8.openLazy;
            var2 = _closure1_slot0;
            var1 = 9;
            var1 = var3[var1];
            var5 = var2.bind(var0)(var1);
            var1 = 8;
            var4 = var3[var1];
            var1 = var3.paths;
            var12 = var5.bind(var0)(var4, var1);
            var5 = {};
            var1 = _closure2_slot1;
            var5.item = var1;
            var11 = 'GIFPickerItemActionSheet';
            var9 = 'stack';
            var13 = var8;
            var10 = var5;
            var1 = var13[var7](var12, var11, var10, var9, var8);
            var1 = 6;
            var1 = var3[var1];
            var2 = var2.bind(var0)(var1);
            var1 = var2.dismissGlobalKeyboard;
            var1 = var1.bind(var2)();
            return var0;
        };
        var5 = var5.bind(var8)(var1, var2);
        var2 = var8.useMemo;
        var1 = new Array(2);
        var1[0] = var10;
        var10 = var7.src;
        var1[1] = var10;
        var0 = function() { // Environment: var0
            _fun74154: for (var _fun74154_ip = 0;;) switch (_fun74154_ip) {
                case 0:
                    var0 = _closure2_slot1;
                    var2 = var0.src;
                    var1 = var2.split;
                    var0 = '/';
                    var1 = var1.bind(var2)(var0);
                    var0 = var1.pop;
                    var4 = var0.bind(var1)();
                    var1 = null;
                    var2 = var1 == var4;
                    var6 = undefined;
                    var0 = undefined;
                    if (var2) {
                        _fun74154_ip = 70;
                        continue _fun74154
                    }
                case 50:
                    var3 = var4.split;
                    var2 = '.';
                    var3 = var3.bind(var4)(var2);
                    var2 = 0;
                    var0 = var3[var2];
                case 70:
                    if (!(var1 == var0)) {
                        _fun74154_ip = 152;
                        continue _fun74154
                    }
                case 74:
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 10;
                    var3 = var7[var1];
                    var3 = var2.bind(var6)(var3);
                    var4 = var3.intl;
                    var3 = var4.formatToPlainString;
                    var1 = var7[var1];
                    var1 = var2.bind(var6)(var1);
                    var1 = var1.t;
                    var2 = var1["5iIGZI"];
                    var1 = {};
                    var6 = _closure2_slot2;
                    var5 = 1;
                    var5 = var6 + var5;
                    var1.index = var5;
                    var0 = var3.bind(var4)(var2, var1);
                case 152:
                    return var0;
            }
        };
        var10 = var2.bind(var8)(var0, var1);
        var2 = _closure1_slot5;
        var1 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 11;
        var0 = var8[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.PressableOpacity;
        var0 = {};
        var11 = var6.container;
        var0.style = var11;
        var11 = 'button';
        var0.accessibilityRole = var11;
        var0.accessibilityLabel = var10;
        var0.onPress = var9;
        var0.onLongPress = var5;
        var5 = _closure1_slot1;
        var4 = 12;
        var4 = var8[var4];
        var5 = var5.bind(var3)(var4);
        var4 = {};
        var6 = var6.gifImage;
        var4.style = var6;
        var6 = {};
        var7 = var7.src;
        var6.uri = var7;
        var4.source = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var3;
    var2.GIFPickerItemPlaceholder = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 9306, 671, 1582, 3239, 9314, 1307, 1234, 4867, 4669, 2]);