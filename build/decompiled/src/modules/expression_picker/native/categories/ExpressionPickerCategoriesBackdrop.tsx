// modules/expression_picker/native/categories/ExpressionPickerCategoriesBackdrop.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var11 = var3.StyleSheet;
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.EXPRESSION_FOOTER_HEIGHT;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var16 = var11.absoluteFillObject;
    var17 = var9;
    var13 = copyDataProperties(var17, var16);
    var13 = var11.hairlineWidth;
    var11 = 'borderTopWidth';
    var9[var11] = var13;
    var11 = 5;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var14 = var13.BACKGROUND_BASE_LOWEST;
    var13 = 'borderTopColor';
    var9[var13] = var14;
    var3.backdrop = var9;
    var9 = {};
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.PROFILE_GRADIENT_NOTE_BACKGROUND;
    var9.backgroundColor = var11;
    var9.height = var10;
    var9.bottom = var0;
    var3.backdropAndroid = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot5 = var3;
    var3 = var6.memo;
    var1 = function() {
        _fun74372: for (var _fun74372_ip = 0;;) switch (_fun74372_ip) {
            case 0:
                var0 = _closure1_slot5;
                var4 = undefined;
                var6 = var0.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 6;
                var0 = var3[var0];
                var2 = var2.bind(var4)(var0);
                var0 = var2.isAndroid;
                var0 = var0.bind(var2)();
                var3 = _closure1_slot4;
                var2 = _closure1_slot3;
                if (var0) {
                    _fun74372_ip = 116;
                    continue _fun74372
                }
            case 54:
                var0 = {};
                var5 = var6.backdrop;
                var0.style = var5;
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 7;
                var1 = var7[var1];
                var5 = var5.bind(var4)(var1);
                var1 = {};
                var7 = var6.backdrop;
                var1.style = var7;
                var1 = var3.bind(var4)(var5, var1);
                var0.children = var1;
                var0 = var3.bind(var4)(var2, var0);
                _fun74372_ip = 152;
                continue _fun74372;
            case 116:
                var1 = {};
                var7 = var6.backdrop;
                var5 = new Array(2);
                var5[0] = var7;
                var6 = var6.backdropAndroid;
                var5[1] = var6;
                var1.style = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 152:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/expression_picker/native/categories/ExpressionPickerCategoriesBackdrop.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 671, 478, 8408, 2]);