// components_native/common/SlideoutButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot3 = var6;
    var7 = var3.StyleSheet;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.Fonts;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var6 = var7.create;
    var3 = {};
    var8 = {
        'alignSelf': 'flex-end',
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var3.button = var8;
    var8 = {
        'color': null,
        'fontSize': 12,
        'fontFamily': null,
        'marginTop': 2,
        'marginHorizontal': 2,
        'textAlign': 'center'
    };
    var10 = 4;
    var10 = var5[var10];
    var13 = var4.bind(var0)(var10);
    var12 = var13.hexWithOpacity;
    var10 = 5;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.unsafe_rawColors;
    var11 = var10.WHITE;
    var10 = 0.6;
    var10 = var12.bind(var13)(var11, var10);
    var8.color = var10;
    var9 = var9.PRIMARY_SEMIBOLD;
    var8.fontFamily = var9;
    var3.buttonText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var1 = function arg0() {
        _fun73569: for (var _fun73569_ip = 0;;) switch (_fun73569_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.onPress;
                var16 = var0.color;
                var8 = var0.IconComponent;
                var11 = var0.title;
                var15 = var0.height;
                var3 = undefined;
                if (!(var15 === var3)) {
                    _fun73569_ip = 37;
                    continue _fun73569
                }
            case 34:
                var15 = 60;
            case 37:
                var2 = _closure1_slot4;
                var9 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 6;
                var0 = var12[var0];
                var0 = var9.bind(var3)(var0);
                var1 = var0.PressableOpacity;
                var0 = {};
                var5 = 'button';
                var0.accessibilityRole = var5;
                var0.onPress = var4;
                var6 = _closure1_slot5;
                var5 = _closure1_slot3;
                var4 = {};
                var10 = _closure1_slot6;
                var14 = var10.button;
                var7 = new Array(2);
                var7[0] = var14;
                var14 = {};
                var14.backgroundColor = var16;
                var16 = 72;
                var14.width = var16;
                var14.height = var15;
                var7[1] = var14;
                var4.style = var7;
                var7 = {};
                var14 = _closure1_slot1;
                var13 = 5;
                var13 = var12[var13];
                var13 = var14.bind(var3)(var13);
                var13 = var13.colors;
                var13 = var13.WHITE;
                var7.color = var13;
                var8 = var2.bind(var3)(var8, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var8 = 7;
                var8 = var12[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.LegacyText;
                var8 = {};
                var10 = var10.buttonText;
                var8.style = var10;
                var10 = var11.toUpperCase;
                var10 = var10.bind(var11)();
                var8.children = var10;
                var8 = var2.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = 72;
    var1.width = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/common/SlideoutButton.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 3240, 671, 4904, 4878, 2]);