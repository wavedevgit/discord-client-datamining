// uikit-native/LiveTag.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun64419: for (var _fun64419_ip = 0;;) switch (_fun64419_ip) {
        case 0:
            var4 = require;
            var11 = metroImportDefault;
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
            var9 = 0;
            var6 = var5[var9];
            var3 = metroImportAll;
            var0 = undefined;
            var3 = var3.bind(var0)(var6);
            var3 = 1;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var7 = var3.StyleSheet;
            var3 = var3.View;
            var _closure1_slot2 = var3;
            var3 = 2;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.jsx;
            var _closure1_slot3 = var3;
            var6 = var7.create;
            var3 = {};
            var8 = {
                'paddingHorizontal': 6,
                'paddingVertical': 2,
                'borderRadius': null,
                'overflow': 'hidden',
                'justifyContent': 'center',
                'alignItems': 'center'
            };
            var10 = 3;
            var12 = var5[var10];
            var12 = var11.bind(var0)(var12);
            var12 = var12.radii;
            var12 = var12.round;
            var8.borderRadius = var12;
            var12 = 'center';
            var13 = var5[var10];
            var13 = var11.bind(var0)(var13);
            var13 = var13.unsafe_rawColors;
            var13 = var13.RED_400;
            var8.backgroundColor = var13;
            var3.tag = var8;
            var8 = {};
            var8.textAlign = var12;
            var10 = var5[var10];
            var10 = var11.bind(var0)(var10);
            var10 = var10.unsafe_rawColors;
            var10 = var10.WHITE;
            var8.color = var10;
            var10 = 4;
            var10 = var5[var10];
            var11 = var4.bind(var0)(var10);
            var10 = var11.isAndroid;
            var10 = var10.bind(var11)();
            if (!var10) {
                _fun64419_ip = 260;
                continue _fun64419
            }
        case 254:
            var9 = -2;
        case 260:
            var8.marginTop = var9;
            var3.tagText = var8;
            var3 = var6.bind(var7)(var3);
            var _closure1_slot4 = var3;
            var3 = 7;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'uikit-native/LiveTag.tsx';
            var3 = var4.bind(var5)(var3);
            var1 = function arg0() {
                var0 = arg0;
                var4 = var0.style;
                var8 = var0.textStyle;
                var6 = var0.allowFontScaling;
                var3 = _closure1_slot3;
                var2 = _closure1_slot2;
                var1 = {};
                var0 = _closure1_slot4;
                var5 = var0.tag;
                var0 = new Array(2);
                var0[0] = var5;
                var0[1] = var4;
                var1.style = var0;
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var0 = 5;
                var4 = var10[var0];
                var0 = undefined;
                var4 = var9.bind(var0)(var4);
                var5 = var4.Text;
                var4 = {
                    'variant': 'text-xs/bold',
                    'style': null,
                    'lineClamp': 1
                };
                var7 = _closure1_slot4;
                var11 = var7.tagText;
                var7 = new Array(2);
                var7[0] = var11;
                var7[1] = var8;
                var4.style = var7;
                var4.allowFontScaling = var6;
                var6 = 6;
                var7 = var10[var6];
                var7 = var9.bind(var0)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var10[var6];
                var6 = var9.bind(var0)(var6);
                var6 = var6.t;
                var6 = var6.dI3q4h;
                var7 = var7.bind(var8)(var6);
                var6 = var7.toUpperCase;
                var6 = var6.bind(var7)();
                var4.children = var6;
                var4 = var3.bind(var0)(var5, var4);
                var1.children = var4;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 671, 478, 3941, 1234, 2]);