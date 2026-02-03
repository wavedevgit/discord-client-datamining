// design/components/experimental/ActionSheetDragHandle/native/ActionSheetDragHandle.native.tsx
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
    var7 = var3.TouchableWithoutFeedback;
    var _closure1_slot3 = var7;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.DRAG_HANDLE_BAR_HEIGHT;
    var11 = var3.DRAG_HANDLE_PADDING;
    var13 = var3.DRAG_HANDLE_HEIGHT;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var9.height = var13;
    var3.container = var9;
    var9 = {
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'right': 0
    };
    var3.containerOverlay = var9;
    var9 = {};
    var13 = 'center';
    var9.alignItems = var13;
    var9.paddingVertical = var11;
    var3.handle = var9;
    var9 = {};
    var11 = 5;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_MUTED;
    var9.backgroundColor = var13;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.xs;
    var9.borderRadius = var11;
    var9.height = var10;
    var10 = 31;
    var9.width = var10;
    var3.bar = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot6 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun57576: for (var _fun57576_ip = 0;;) switch (_fun57576_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.onPress;
                var10 = var0.overlay;
                var6 = var0.accessibilityLabel;
                var3 = undefined;
                if (!(var6 === var3)) {
                    _fun57576_ip = 83;
                    continue _fun57576
                }
            case 25:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 6;
                var2 = var8[var1];
                var2 = var7.bind(var3)(var2);
                var5 = var2.intl;
                var2 = var5.string;
                var1 = var8[var1];
                var1 = var7.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1.WAI6xu;
                var6 = var2.bind(var5)(var1);
            case 83:
                var12 = var0.animatedBarStyles;
                var5 = var0["aria-hidden"];
                var0 = _closure1_slot6;
                var11 = var0.bind(var3)();
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var7 = var11.container;
                var9 = new Array(2);
                var9[0] = var7;
                var7 = null;
                var13 = var7 != var10;
                var10 = null;
                if (!var13) {
                    _fun57576_ip = 148;
                    continue _fun57576
                }
            case 142:
                var10 = var11.containerOverlay;
            case 148:
                var9[1] = var10;
                var0.style = var9;
                var0.accessibilityLabel = var6;
                var6 = 'button';
                var0.accessibilityRole = var6;
                var0['aria-hidden'] = var5;
                var0.onPress = var4;
                var6 = _closure1_slot5;
                var5 = _closure1_slot4;
                var4 = {};
                var9 = var11.handle;
                var4.style = var9;
                if (!(var7 == var12)) {
                    _fun57576_ip = 229;
                    continue _fun57576
                }
            case 201:
                var10 = _closure1_slot5;
                var9 = _closure1_slot4;
                var7 = {};
                var13 = var11.bar;
                var7.style = var13;
                var7 = var10.bind(var3)(var9, var7);
                _fun57576_ip = 288;
                continue _fun57576;
            case 229:
                var10 = _closure1_slot5;
                var9 = _closure1_slot1;
                var13 = _closure1_slot2;
                var8 = 7;
                var8 = var13[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.View;
                var8 = {};
                var13 = var11.bar;
                var11 = new Array(2);
                var11[0] = var13;
                var11[1] = var12;
                var8.style = var11;
                var7 = var10.bind(var3)(var9, var8);
            case 288:
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/experimental/ActionSheetDragHandle/native/ActionSheetDragHandle.native.tsx';
    var3 = var4.bind(var5)(var3);
    var2.ActionSheetDragHandle = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 7026, 33, 1297, 671, 1234, 3720, 2]);