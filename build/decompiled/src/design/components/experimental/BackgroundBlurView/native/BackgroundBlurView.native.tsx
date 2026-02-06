// design/components/experimental/BackgroundBlurView/native/BackgroundBlurView.native.tsx
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
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot3 = var7;
    var3 = var3.jsxs;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'position': 'relative',
        'overflow': 'hidden'
    };
    var3.container = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot5 = var3;
    var3 = var6.forwardRef;
    var1 = function arg0, arg1() {
        _fun48060: for (var _fun48060_ip = 0;;) switch (_fun48060_ip) {
            case 0:
                var2 = arg0;
                var4 = var2.children;
                var7 = var2.style;
                var11 = var2.blurTheme;
                var10 = var2.pressed;
                var9 = var2.android_blurTargetViewNativeId;
                var1 = {
                    'children': 0,
                    'style': 0,
                    'blurTheme': 0,
                    'pressed': 0,
                    'android_blurTargetViewNativeId': 0
                };
                var6 = null;
                var15 = var1;
                var14 = null;
                var0 = silentSetPrototypeOf(var15, var14);
                var15 = {};
                var14 = var2;
                var13 = var1;
                var14 = copyDataProperties(var15, var14, var13);
                var0 = _closure1_slot5;
                var3 = undefined;
                var8 = var0.bind(var3)();
                var2 = _closure1_slot4;
                var1 = _closure1_slot2;
                var0 = {};
                var15 = var0;
                var12 = copyDataProperties(var15, var14);
                var12 = var8.container;
                var8 = new Array(2);
                var8[0] = var12;
                var8[1] = var7;
                var7 = 'style';
                var0[var7] = var8;
                var8 = arg1;
                var7 = 'ref';
                var0[var7] = var8;
                if (!(var6 == var10)) {
                    _fun48060_ip = 190;
                    continue _fun48060
                }
            case 140:
                var8 = _closure1_slot3;
                var7 = _closure1_slot0;
                var12 = _closure1_slot1;
                var6 = 4;
                var6 = var12[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.BackgroundBlurFill;
                var6 = {};
                var6.blurTheme = var11;
                var6.android_blurTargetViewNativeId = var9;
                var6 = var8.bind(var3)(var7, var6);
                _fun48060_ip = 243;
                continue _fun48060;
            case 190:
                var8 = _closure1_slot3;
                var7 = _closure1_slot0;
                var12 = _closure1_slot1;
                var5 = 4;
                var5 = var12[var5];
                var5 = var7.bind(var3)(var5);
                var7 = var5.BackgroundBlurFillWithPress;
                var5 = {};
                var5.blurTheme = var11;
                var5.pressed = var10;
                var5.android_blurTargetViewNativeId = var9;
                var6 = var8.bind(var3)(var7, var5);
            case 243:
                var5 = new Array(2);
                var5[0] = var6;
                var5[1] = var4;
                var4 = 'children';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/experimental/BackgroundBlurView/native/BackgroundBlurView.native.tsx';
    var3 = var4.bind(var5)(var3);
    var2.BackgroundBlurView = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 5387, 2]);