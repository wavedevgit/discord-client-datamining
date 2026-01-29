// modules/premium/native/components/LinkButton.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot2 = var6;
    var3 = var3.jsxs;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var3.defaultContainerStyle = var8;
    var8 = {};
    var9 = 0.5;
    var8.opacity = var9;
    var3.disabledContainerStyle = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/native/components/LinkButton.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        _fun59264: for (var _fun59264_ip = 0;;) switch (_fun59264_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.onPress;
                var8 = var0.text;
                var13 = var0.containerStyle;
                var7 = var0.disabled;
                var11 = var0.textStyle;
                var10 = var0.variant;
                var3 = undefined;
                if (!(var10 === var3)) {
                    _fun59264_ip = 47;
                    continue _fun59264
                }
            case 41:
                var10 = 'text-xs/medium';
            case 47:
                var9 = var0.textColor;
                if (!(var9 === var3)) {
                    _fun59264_ip = 63;
                    continue _fun59264
                }
            case 57:
                var9 = 'text-link';
            case 63:
                var5 = var0.iconRight;
                var0 = _closure1_slot4;
                var15 = var0.bind(var3)();
                var2 = _closure1_slot3;
                var1 = _closure1_slot0;
                var12 = _closure1_slot1;
                var0 = 3;
                var0 = var12[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.PressableOpacity;
                var0 = {};
                var14 = var15.defaultContainerStyle;
                var12 = new Array(3);
                var12[0] = var14;
                var14 = var7;
                if (!var14) {
                    _fun59264_ip = 138;
                    continue _fun59264
                }
            case 132:
                var14 = var15.disabledContainerStyle;
            case 138:
                var12[1] = var14;
                var12[2] = var13;
                var0.style = var12;
                var12 = {
                    'top': 8,
                    'right': 8,
                    'bottom': 8
                };
                var0.hitSlop = var12;
                var12 = 'button';
                var0.accessibilityRole = var12;
                var12 = 0.2;
                var0.activeOpacity = var12;
                var0.disabled = var7;
                var0.onPress = var6;
                var7 = _closure1_slot2;
                var6 = _closure1_slot0;
                var12 = _closure1_slot1;
                var4 = 4;
                var4 = var12[var4];
                var4 = var6.bind(var3)(var4);
                var6 = var4.Text;
                var4 = {};
                var4.style = var11;
                var4.variant = var10;
                var4.color = var9;
                var4.children = var8;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.LinkButton = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1297, 4858, 3895, 2]);