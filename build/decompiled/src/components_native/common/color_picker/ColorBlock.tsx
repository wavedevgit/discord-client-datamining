// components_native/common/color_picker/ColorBlock.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var1 = 1;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.View;
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var6[var1];
    var8 = var5.bind(var0)(var1);
    var4 = var8.createStyles;
    var1 = {};
    var9 = {
        'minWidth': 44,
        'height': 44,
        'borderRadius': null,
        'marginHorizontal': 12,
        'marginVertical': 8,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var10 = 4;
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.xl;
    var9.borderRadius = var10;
    var1.colorBlock = var9;
    var1 = var4.bind(var8)(var1);
    var _closure1_slot5 = var1;
    var4 = var7.memo;
    var3 = function(arg0) { // Environment: var3
        _fun80725: for (var _fun80725_ip = 0;;) switch (_fun80725_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.color;
                var _closure2_slot0 = var13;
                var8 = var0.style;
                var6 = var0.selected;
                var4 = undefined;
                if (!(var6 === var4)) {
                    _fun80725_ip = 33;
                    continue _fun80725
                }
            case 31:
                var6 = false;
            case 33:
                var0 = var0.onSelect;
                var _closure2_slot1 = var0;
                var1 = _closure1_slot5;
                var7 = var1.bind(var4)();
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var14 = 5;
                var1 = var1[var14];
                var2 = var2.bind(var4)(var1);
                var1 = var2.int2hsv;
                var1 = var1.bind(var2)(var13);
                var11 = var1.v;
                var5 = null;
                if (!(var5 == var0)) {
                    _fun80725_ip = 322;
                    continue _fun80725
                }
            case 99:
                var2 = _closure1_slot4;
                var1 = _closure1_slot3;
                var0 = {};
                var9 = var7.colorBlock;
                var3 = new Array(3);
                var3[0] = var9;
                var3[1] = var8;
                var9 = {};
                var16 = _closure1_slot0;
                var12 = _closure1_slot2;
                var12 = var12[var14];
                var16 = var16.bind(var4)(var12);
                var12 = var16.int2hex;
                var12 = var12.bind(var16)(var13);
                var9.backgroundColor = var12;
                var3[2] = var9;
                var0.style = var3;
                var3 = null;
                if (!var6) {
                    _fun80725_ip = 307;
                    continue _fun80725
                }
            case 177:
                var16 = _closure1_slot4;
                var18 = _closure1_slot1;
                var19 = _closure1_slot2;
                var9 = 8;
                var9 = var19[var9];
                var12 = var18.bind(var4)(var9);
                var9 = {};
                var17 = 9;
                var17 = var19[var17];
                var17 = var18.bind(var4)(var17);
                var9.source = var17;
                var17 = 0.5;
                if (!(!(var11 < var17))) {
                    _fun80725_ip = 266;
                    continue _fun80725
                }
            case 233:
                var18 = _closure1_slot1;
                var19 = _closure1_slot2;
                var17 = 4;
                var17 = var19[var17];
                var17 = var18.bind(var4)(var17);
                var17 = var17.unsafe_rawColors;
                var17 = var17.BLACK;
                _fun80725_ip = 297;
                continue _fun80725;
            case 266:
                var19 = _closure1_slot1;
                var20 = _closure1_slot2;
                var18 = 4;
                var18 = var20[var18];
                var18 = var19.bind(var4)(var18);
                var18 = var18.unsafe_rawColors;
                var17 = var18.WHITE;
            case 297:
                var9.color = var17;
                var3 = var16.bind(var4)(var12, var9);
            case 307:
                var0.children = var3;
                var0 = var2.bind(var4)(var1, var0);
                _fun80725_ip = 635;
                continue _fun80725;
            case 322:
                var3 = _closure1_slot4;
                var12 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 6;
                var1 = var9[var1];
                var1 = var12.bind(var4)(var1);
                var2 = var1.PressableOpacity;
                var1 = {};
                var16 = 'button';
                var1.accessibilityRole = var16;
                var16 = 7;
                var16 = var9[var16];
                var19 = var12.bind(var4)(var16);
                var18 = var19.hexToColorName;
                var16 = var9[var14];
                var17 = var12.bind(var4)(var16);
                var16 = var17.int2hex;
                var17 = var16.bind(var17)(var13);
                var16 = true;
                var16 = var18.bind(var19)(var17, var16);
                var1.accessibilityLabel = var16;
                var16 = {};
                var16.selected = var6;
                var1.accessibilityState = var16;
                var15 = function() {
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var1.onPress = var15;
                var15 = var7.colorBlock;
                var7 = new Array(3);
                var7[0] = var15;
                var7[1] = var8;
                var8 = {};
                var9 = var9[var14];
                var12 = var12.bind(var4)(var9);
                var9 = var12.int2hex;
                var9 = var9.bind(var12)(var13);
                var8.backgroundColor = var9;
                var7[2] = var8;
                var1.style = var7;
                var5 = null;
                if (!var6) {
                    _fun80725_ip = 625;
                    continue _fun80725
                }
            case 495:
                var8 = _closure1_slot4;
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var6 = 8;
                var6 = var13[var6];
                var7 = var12.bind(var4)(var6);
                var6 = {};
                var9 = 9;
                var9 = var13[var9];
                var9 = var12.bind(var4)(var9);
                var6.source = var9;
                var9 = 0.5;
                if (!(!(var11 < var9))) {
                    _fun80725_ip = 584;
                    continue _fun80725
                }
            case 551:
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var9 = 4;
                var9 = var12[var9];
                var9 = var11.bind(var4)(var9);
                var9 = var9.unsafe_rawColors;
                var9 = var9.BLACK;
                _fun80725_ip = 615;
                continue _fun80725;
            case 584:
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var10 = 4;
                var10 = var12[var10];
                var10 = var11.bind(var4)(var10);
                var10 = var10.unsafe_rawColors;
                var9 = var10.WHITE;
            case 615:
                var6.color = var9;
                var5 = var8.bind(var4)(var7, var6);
            case 625:
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 635:
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/common/color_picker/ColorBlock.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.useStyles = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 668, 4909, 3244, 4092, 7524, 2]);