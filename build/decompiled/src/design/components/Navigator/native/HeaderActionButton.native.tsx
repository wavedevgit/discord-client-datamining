// design/components/Navigator/native/HeaderActionButton.native.tsx
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
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ANDROID_FOREGROUND_RIPPLE;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot4 = var7;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'flex': 1,
        'alignItems': 'center',
        'justifyContent': 'center',
        'flexDirection': 'row'
    };
    var3.button = var9;
    var9 = {};
    var10 = 4;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_BRAND;
    var9.color = var12;
    var12 = 'capitalize';
    var9.textTransform = var12;
    var3.text = var9;
    var9 = {
        'fontSize': 16,
        'maxWidth': 80
    };
    var3.buttonFont = var9;
    var9 = {};
    var12 = 0.6;
    var9.opacity = var12;
    var3.buttonDisabled = var9;
    var9 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.MOBILE_TEXT_HEADING_PRIMARY;
    var9.color = var10;
    var3.icon = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot6 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun47655: for (var _fun47655_ip = 0;;) switch (_fun47655_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.style;
                var19 = var0.textStyle;
                var22 = var0.imageStyle;
                var15 = var0.text;
                var23 = var0.source;
                var16 = var0.accessibilityLabel;
                var14 = var0.accessibilityHint;
                var13 = var0.accessibilityActions;
                var12 = var0.onAccessibilityAction;
                var5 = var0.icon;
                var2 = var0.IconComponent;
                var18 = var0.IconComponentSize;
                var7 = var0.onPress;
                var4 = var0.disabled;
                var11 = var0.foregroundRipple;
                var21 = var0.iconSize;
                var0 = _closure1_slot6;
                var3 = undefined;
                var9 = var0.bind(var3)();
                var17 = null;
                if (!(var17 == var15)) {
                    _fun47655_ip = 192;
                    continue _fun47655
                }
            case 112:
                if (!(var17 == var2)) {
                    _fun47655_ip = 174;
                    continue _fun47655
                }
            case 116:
                var0 = var17 != var23;
                var6 = undefined;
                if (!var0) {
                    _fun47655_ip = 278;
                    continue _fun47655
                }
            case 128:
                var20 = _closure1_slot4;
                var1 = _closure1_slot1;
                var24 = _closure1_slot2;
                var0 = 6;
                var0 = var24[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.source = var23;
                var0.style = var22;
                var0.size = var21;
                var6 = var20.bind(var3)(var1, var0);
                _fun47655_ip = 278;
                continue _fun47655;
            case 174:
                var1 = _closure1_slot4;
                var0 = {};
                var0.size = var18;
                var6 = var1.bind(var3)(var2, var0);
                _fun47655_ip = 278;
                continue _fun47655;
            case 192:
                var2 = _closure1_slot4;
                var1 = _closure1_slot0;
                var18 = _closure1_slot2;
                var0 = 5;
                var0 = var18[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Text;
                var0 = {
                    'style': null,
                    'variant': 'text-md/semibold',
                    'lineClamp': 1,
                    'maxFontSizeMultiplier': 1
                };
                var20 = var9.text;
                var18 = new Array(3);
                var18[0] = var20;
                var20 = var9.buttonFont;
                var18[1] = var20;
                var18[2] = var19;
                var0.style = var18;
                var0.children = var15;
                var6 = var2.bind(var3)(var1, var0);
            case 278:
                var2 = _closure1_slot5;
                var1 = _closure1_slot0;
                var18 = _closure1_slot2;
                var0 = 7;
                var0 = var18[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.PressableOpacity;
                var0 = {};
                var18 = arg1;
                var0.ref = var18;
                if (!(var17 != var16)) {
                    _fun47655_ip = 324;
                    continue _fun47655
                }
            case 321:
                var15 = var16;
            case 324:
                var0.accessibilityLabel = var15;
                var0.accessibilityHint = var14;
                var0.accessibilityActions = var13;
                var0.onAccessibilityAction = var12;
                var12 = 'button';
                var0.accessibilityRole = var12;
                var0.onPress = var7;
                var7 = 0.6;
                var0.activeOpacity = var7;
                var7 = undefined;
                if (!var11) {
                    _fun47655_ip = 379;
                    continue _fun47655
                }
            case 375:
                var7 = _closure1_slot3;
            case 379:
                var0.androidRippleConfig = var7;
                var10 = var9.button;
                var7 = new Array(3);
                var7[0] = var10;
                var7[1] = var8;
                var8 = var4;
                if (!var8) {
                    _fun47655_ip = 414;
                    continue _fun47655
                }
            case 408:
                var8 = var9.buttonDisabled;
            case 414:
                var7[2] = var8;
                var0.style = var7;
                var0.disabled = var4;
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
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
    var3 = 'design/components/Navigator/native/HeaderActionButton.native.tsx';
    var3 = var4.bind(var5)(var3);
    var2.HeaderActionButton = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4874, 33, 1297, 671, 3941, 4086, 4902, 2]);