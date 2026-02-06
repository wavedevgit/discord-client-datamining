// design/components/TableRow/native/RowButton.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var1 = function arg0() {
        _fun48052: for (var _fun48052_ip = 0;;) switch (_fun48052_ip) {
            case 0:
                var4 = arg0;
                var9 = var4.arrow;
                var3 = undefined;
                if (!(var9 === var3)) {
                    _fun48052_ip = 17;
                    continue _fun48052
                }
            case 15:
                var9 = true;
            case 17:
                var8 = var4.disabled;
                if (!(var8 === var3)) {
                    _fun48052_ip = 28;
                    continue _fun48052
                }
            case 26:
                var8 = false;
            case 28:
                var12 = var4.variant;
                if (!(var12 === var3)) {
                    _fun48052_ip = 41;
                    continue _fun48052
                }
            case 37:
                var12 = 'secondary';
            case 41:
                var11 = var4.icon;
                var5 = var4.onPress;
                var6 = var4.experimental_withBlurBackground;
                var2 = {
                    'arrow': 0,
                    'disabled': 0,
                    'variant': 0,
                    'icon': 0,
                    'onPress': 0,
                    'experimental_withBlurBackground': 0
                };
                var0 = null;
                var15 = var2;
                var14 = null;
                var1 = silentSetPrototypeOf(var15, var14);
                var15 = {};
                var14 = var4;
                var13 = var2;
                var7 = copyDataProperties(var15, var14, var13);
                var10 = var11;
                if (!(var0 != var11)) {
                    _fun48052_ip = 197;
                    continue _fun48052
                }
            case 101:
                var2 = _closure1_slot2;
                var1 = var2.isValidElement;
                var1 = var1.bind(var2)(var11);
                var10 = var11;
                if (var1) {
                    _fun48052_ip = 197;
                    continue _fun48052
                }
            case 125:
                var4 = 'translucent';
                if (var6) {
                    _fun48052_ip = 151;
                    continue _fun48052
                }
            case 132:
                var1 = 'secondary';
                var2 = 'primary';
                if (!(var2 === var12)) {
                    _fun48052_ip = 148;
                    continue _fun48052
                }
            case 144:
                var1 = 'blurple';
            case 148:
                var4 = var1;
            case 151:
                var2 = _closure1_slot3;
                var1 = _closure1_slot0;
                var12 = _closure1_slot1;
                var0 = 3;
                var0 = var12[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.TableRowIcon;
                var0 = {};
                var0.source = var11;
                var0.variant = var4;
                var10 = var2.bind(var3)(var1, var0);
            case 197:
                var2 = _closure1_slot3;
                var1 = _closure1_slot5;
                var0 = {};
                var0.experimental_withBlurBackground = var6;
                var0.onPress = var5;
                var0.disabled = var8;
                var15 = var0;
                var14 = var7;
                var5 = copyDataProperties(var15, var14);
                var6 = _closure1_slot3;
                var5 = _closure1_slot0;
                var11 = _closure1_slot1;
                var4 = 4;
                var4 = var11[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.TableRowInner;
                var4 = {};
                var4.icon = var10;
                var4.arrow = var9;
                var4.disabled = var8;
                var15 = var4;
                var14 = var7;
                var7 = copyDataProperties(var15, var14);
                var5 = var6.bind(var3)(var5, var4);
                var4 = 'children';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var0 = function arg0() {
        _fun48053: for (var _fun48053_ip = 0;;) switch (_fun48053_ip) {
            case 0:
                var3 = arg0;
                var0 = var3.experimental_withBlurBackground;
                var12 = var3.onPress;
                var7 = var3.disabled;
                var8 = var3.children;
                var2 = {
                    'experimental_withBlurBackground': 0,
                    'onPress': 0,
                    'disabled': 0,
                    'children': 0
                };
                var17 = null;
                var18 = var2;
                var1 = silentSetPrototypeOf(var18, var17);
                var9 = 0;
                var18 = {};
                var17 = var3;
                var16 = var2;
                var6 = copyDataProperties(var18, var17, var16);
                var _closure2_slot0 = var6;
                var1 = _closure1_slot4;
                var3 = undefined;
                var11 = var1.bind(var3)();
                var4 = _closure1_slot0;
                var13 = _closure1_slot1;
                var1 = 5;
                var1 = var13[var1];
                var2 = var4.bind(var3)(var1);
                var1 = var2.useSharedValue;
                var9 = var1.bind(var2)(var9);
                var _closure2_slot1 = var9;
                var15 = _closure1_slot2;
                var14 = var15.useCallback;
                var2 = new Array(1);
                var2[0] = var9;
                var1 = function() { // Environment: var10
                    var2 = _closure2_slot1;
                    var1 = var2.set;
                    var0 = 1;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var1 = var14.bind(var15)(var1, var2);
                var _closure2_slot2 = var1;
                var15 = _closure1_slot2;
                var14 = var15.useCallback;
                var2 = new Array(1);
                var2[0] = var9;
                var1 = function() { // Environment: var10
                    var2 = _closure2_slot1;
                    var1 = var2.set;
                    var0 = 0;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var1 = var14.bind(var15)(var1, var2);
                var _closure2_slot3 = var1;
                var2 = _closure1_slot3;
                var1 = 6;
                var1 = var13[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.InternalCard;
                if (var0) {
                    _fun48053_ip = 260;
                    continue _fun48053
                }
            case 204:
                var0 = {
                    'shadow': 'low',
                    'border': 'subtle',
                    'start': true,
                    'end': true
                };
                var0.onPress = var12;
                var4 = var11.card;
                var0.style = var4;
                var0.disabled = var7;
                var18 = var0;
                var17 = var6;
                var4 = copyDataProperties(var18, var17);
                var4 = 'children';
                var0[var4] = var8;
                _fun48053_ip = 412;
                continue _fun48053;
            case 260:
                var4 = {
                    'shadow': 'none',
                    'border': 'none',
                    'start': true,
                    'end': true
                };
                var4.onPress = var12;
                var12 = function arg0() {
                    _fun48056: for (var _fun48056_ip = 0;;) switch (_fun48056_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var2 = var1.onPressIn;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun48056_ip = 37;
                                continue _fun48056
                            }
                        case 19:
                            var3 = _closure2_slot0;
                            var2 = var3.onPressIn;
                            var1 = arg0;
                            var1 = var2.bind(var3)(var1);
                        case 37:
                            var1 = _closure2_slot2;
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            return var0;
                    }
                };
                var4.onPressIn = var12;
                var10 = function arg0() {
                    _fun48057: for (var _fun48057_ip = 0;;) switch (_fun48057_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var2 = var1.onPressOut;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun48057_ip = 37;
                                continue _fun48057
                            }
                        case 19:
                            var3 = _closure2_slot0;
                            var2 = var3.onPressOut;
                            var1 = arg0;
                            var1 = var2.bind(var3)(var1);
                        case 37:
                            var1 = _closure2_slot3;
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            return var0;
                    }
                };
                var4.onPressOut = var10;
                var12 = var11.card;
                var10 = new Array(2);
                var10[0] = var12;
                var11 = var11.cardWithBlur;
                var10[1] = var11;
                var4.style = var10;
                var4.disabled = var7;
                var18 = var4;
                var17 = var6;
                var6 = copyDataProperties(var18, var17);
                var7 = 'transparent';
                var6 = 'variant';
                var4[var6] = var7;
                var7 = _closure1_slot3;
                var6 = _closure1_slot0;
                var10 = _closure1_slot1;
                var5 = 7;
                var5 = var10[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.BackgroundBlurView;
                var5 = {};
                var5.pressed = var9;
                var5.children = var8;
                var6 = var7.bind(var3)(var6, var5);
                var5 = 'children';
                var4[var5] = var6;
                var0 = var4;
            case 412:
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = function() { // Environment: var6
        var0 = {};
        var1 = {};
        var2 = 0;
        var1.padding = var2;
        var0.card = var1;
        var1 = {};
        var2 = 'hidden';
        var1.overflow = var2;
        var0.cardWithBlur = var1;
        return var0;
    };
    var3 = var7.bind(var8)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var6 = var6.TableRowIcon;
    var1.Icon = var6;
    var6 = 8;
    var6 = var5[var6];
    var8 = var4.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'design/components/TableRow/native/RowButton.native.tsx';
    var6 = var7.bind(var8)(var6);
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.TableRowIconProps;
    var2.RowButtonIconProps = var3;
    var2.RowButton = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1297, 4908, 4901, 3722, 4903, 5386, 2]);