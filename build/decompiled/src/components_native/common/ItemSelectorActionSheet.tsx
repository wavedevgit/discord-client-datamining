// components_native/common/ItemSelectorActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
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
    var6 = var3.jsx;
    var _closure1_slot3 = var6;
    var3 = var3.jsxs;
    var _closure1_slot4 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/common/ItemSelectorActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun48028: for (var _fun48028_ip = 0;;) switch (_fun48028_ip) {
            case 0:
                var0 = arg0;
                var14 = var0.title;
                var12 = var0.body;
                var15 = var0.items;
                var1 = var0.selectedItem;
                var _closure2_slot0 = var1;
                var1 = var0.onItemSelect;
                var _closure2_slot1 = var1;
                var17 = var0.onClose;
                var3 = _closure1_slot3;
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var0 = 2;
                var0 = var8[var0];
                var2 = undefined;
                var0 = var7.bind(var2)(var0);
                var1 = var0.RedesignCompat;
                var0 = {};
                var4 = 3;
                var4 = var8[var4];
                var4 = var7.bind(var2)(var4);
                var5 = var4.BottomSheet;
                var4 = {};
                var6 = true;
                var4.scrollable = var6;
                var6 = 4;
                var6 = var8[var6];
                var6 = var7.bind(var2)(var6);
                var7 = var6.BottomSheetTitleHeader;
                var6 = {};
                var6.title = var14;
                var8 = null;
                var9 = var8 != var17;
                if (!var9) {
                    _fun48028_ip = 185;
                    continue _fun48028
                }
            case 143:
                var16 = _closure1_slot3;
                var11 = _closure1_slot0;
                var18 = _closure1_slot1;
                var9 = 5;
                var9 = var18[var9];
                var9 = var11.bind(var2)(var9);
                var11 = var9.ActionSheetCloseButton;
                var9 = {};
                var9.onPress = var17;
                var8 = var16.bind(var2)(var11, var9);
            case 185:
                var6.trailing = var8;
                var6 = var3.bind(var2)(var7, var6);
                var4.header = var6;
                var8 = _closure1_slot4;
                var11 = _closure1_slot0;
                var16 = _closure1_slot1;
                var6 = 6;
                var6 = var16[var6];
                var6 = var11.bind(var2)(var6);
                var7 = var6.BottomSheetScrollView;
                var6 = {};
                var9 = new Array(2);
                var9[0] = var12;
                var12 = _closure1_slot3;
                var10 = 7;
                var10 = var16[var10];
                var10 = var11.bind(var2)(var10);
                var11 = var10.FormRadioGroup;
                var10 = {
                    'value': '',
                    'accessibilityLabel': null,
                    'hasIcons': false
                };
                var10.accessibilityLabel = var14;
                var14 = var15.map;
                var13 = function(arg0, arg1) { // Environment: var13
                    var6 = arg0;
                    var _closure3_slot0 = var6;
                    var4 = _closure1_slot3;
                    var1 = _closure1_slot2;
                    var3 = var1.Fragment;
                    var2 = {};
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 7;
                    var0 = var1[var0];
                    var1 = undefined;
                    var0 = var5.bind(var1)(var0);
                    var5 = var0.FormRadioRow;
                    var0 = {};
                    var8 = 'left';
                    var0.align = var8;
                    var8 = var6.label;
                    var0.label = var8;
                    var7 = function() {
                        var2 = _closure2_slot1;
                        var0 = _closure3_slot0;
                        var1 = var0.value;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0.onPress = var7;
                    var7 = var6.value;
                    var6 = _closure2_slot0;
                    var6 = var7 === var6;
                    var0.selected = var6;
                    var0 = var4.bind(var1)(var5, var0);
                    var2.children = var0;
                    var0 = arg1;
                    var0 = var4.bind(var1)(var3, var2, var0);
                    return var0;
                };
                var13 = var14.bind(var15)(var13);
                var10.children = var13;
                var10 = var12.bind(var2)(var11, var10);
                var9[1] = var10;
                var6.children = var9;
                var6 = var8.bind(var2)(var7, var6);
                var4.children = var6;
                var4 = var3.bind(var2)(var5, var4);
                var0.children = var4;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 4897, 4931, 5211, 5209, 4933, 5378, 2]);