// design/components/Navigator/native/NavScrim.android.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var11;
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
    var10 = var3.StyleSheet;
    var3 = var3.View;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var13 = var10.absoluteFillObject;
    var14 = var9;
    var10 = copyDataProperties(var14, var13);
    var10 = 4;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var11 = var10.ANDROID_NAVIGATION_SCRIM_BACKGROUND;
    var10 = 'backgroundColor';
    var9[var10] = var11;
    var10 = 'top';
    var9[var10] = var0;
    var3.androidNavScrim = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot4 = var3;
    var3 = var6.memo;
    var1 = function() { // Environment: var1
        _fun46280: for (var _fun46280_ip = 0;;) switch (_fun46280_ip) {
            case 0:
                var0 = _closure1_slot4;
                var4 = undefined;
                var5 = var0.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 5;
                var0 = var3[var0];
                var2 = var2.bind(var4)(var0);
                var0 = {};
                var3 = false;
                var0.includeCustomKeyboardHeight = var3;
                var0 = var2.bind(var4)(var0);
                var7 = var0.insets;
                var3 = var7.bottom;
                var2 = 0;
                var0 = null;
                if (!(var2 !== var3)) {
                    _fun46280_ip = 124;
                    continue _fun46280
                }
            case 66:
                var3 = _closure1_slot3;
                var2 = _closure1_slot2;
                var1 = {};
                var6 = var5.androidNavScrim;
                var5 = new Array(2);
                var5[0] = var6;
                var6 = {};
                var7 = var7.bottom;
                var6.height = var7;
                var5[1] = var6;
                var1.style = var5;
                var5 = 'none';
                var1.pointerEvents = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 124:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Navigator/native/NavScrim.android.tsx';
    var3 = var4.bind(var5)(var3);
    var2.NavScrim = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 4856, 2]);