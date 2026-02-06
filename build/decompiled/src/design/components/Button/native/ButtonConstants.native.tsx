// design/components/Button/native/ButtonConstants.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var16 = require;
    var2 = exports;
    var15 = dependencyMap;
    var _closure1_slot0 = var16;
    var _closure1_slot1 = var15;
    var1 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.getIconSize;
        var0 = arg1;
        var1 = var1.bind(var2)(var0);
        var0 = arg0;
        var0 = var0 - var1;
        var1 = 2;
        var0 = var0 - var1;
        var0 = var0 / var1;
        return var0;
    };
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var4 = 0;
    var5 = var15[var4];
    var0 = undefined;
    var5 = var16.bind(var0)(var5);
    var5 = var5.IconSizes;
    var10 = var5.SMALL;
    var5 = var15[var4];
    var5 = var16.bind(var0)(var5);
    var5 = var5.IconSizes;
    var9 = var5.SMALL_20;
    var5 = var15[var4];
    var5 = var16.bind(var0)(var5);
    var5 = var5.IconSizes;
    var8 = var5.MEDIUM;
    var4 = var15[var4];
    var4 = var16.bind(var0)(var4);
    var4 = var4.IconSizes;
    var7 = var4.MEDIUM;
    var14 = 32;
    var6 = var1.bind(var0)(var14, var10);
    var13 = 40;
    var5 = var1.bind(var0)(var13, var9);
    var12 = 48;
    var4 = var1.bind(var0)(var12, var8);
    var11 = 1;
    var15 = var15[var11];
    var17 = var16.bind(var0)(var15);
    var16 = var17.fileFinishedImporting;
    var15 = 'design/components/Button/native/ButtonConstants.native.tsx';
    var15 = var16.bind(var17)(var15);
    var15 = 44;
    var2.MINIMUM_HIT_AREA = var15;
    var2.SMALL_BUTTON_HEIGHT = var14;
    var2.MEDIUM_BUTTON_HEIGHT = var13;
    var2.LARGE_BUTTON_HEIGHT = var12;
    var12 = 56;
    var2.FAB_BUTTON_SIZE = var12;
    var2.BUTTON_BORDER_WIDTH = var11;
    var11 = 'md';
    var2.DEFAULT_BUTTON_SIZE = var11;
    var2.SMALL_BUTTON_ICON_SIZE = var10;
    var2.MEDIUM_BUTTON_ICON_SIZE = var9;
    var2.LARGE_BUTTON_ICON_SIZE = var8;
    var2.FAB_BUTTON_ICON_SIZE = var7;
    var7 = 12;
    var2.SMALL_BUTTON_HORIZONTAL_PADDING = var7;
    var7 = 20;
    var2.MEDIUM_BUTTON_HORIZONTAL_PADDING = var7;
    var7 = 24;
    var2.LARGE_BUTTON_HORIZONTAL_PADDING = var7;
    var2.SMALL_BUTTON_PADDING = var6;
    var2.MEDIUM_BUTTON_PADDING = var5;
    var2.LARGE_BUTTON_PADDING = var4;
    var4 = 3;
    var2.BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER = var4;
    var3 = function arg0() {
        _fun37585: for (var _fun37585_ip = 0;;) switch (_fun37585_ip) {
            case 0:
                var0 = 'text-sm/semibold';
                var2 = 'lg';
                var1 = arg0;
                if (!(var2 === var1)) {
                    _fun37585_ip = 21;
                    continue _fun37585
                }
            case 17:
                var0 = 'text-md/semibold';
            case 21:
                return var0;
        }
    };
    var2.getButtonDefaultTextVariant = var3;
    var2.getButtonPadding = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4087, 2]);