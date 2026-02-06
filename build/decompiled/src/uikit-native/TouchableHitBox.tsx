// uikit-native/TouchableHitBox.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun56176: for (var _fun56176_ip = 0;;) switch (_fun56176_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun56176_ip = 74;
                continue _fun56176;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = global;
    var6 = var0.Object;
    var3 = var6.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var6)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var11.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var11.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var11.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var11.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var11.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var3 = var5[var1];
    var1 = arg3;
    var1 = var1.bind(var0)(var3);
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.StyleSheet;
    var3 = var3.ActivityIndicator;
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot9 = var3;
    var8 = var9.create;
    var6 = {};
    var3 = {
        'flexGrow': 0,
        'flexShrink': 1,
        'justifyContent': 'center',
        'alignItems': 'center',
        'backgroundColor': 'transparent',
        'alignSelf': 'flex-start'
    };
    var10 = 8;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.sm;
    var3.borderRadius = var10;
    var6.button = var3;
    var10 = 10;
    var3 = {
        'lineHeight': 24,
        'margin': 10,
        'maxWidth': 60,
        'fontSize': 16
    };
    var6.buttonText = var3;
    var3 = {};
    var3.margin = var10;
    var6.buttonIcon = var3;
    var10 = {};
    var3 = 12;
    var10.margin = var3;
    var6.buttonSpinner = var10;
    var10 = {};
    var11 = 0.6;
    var10.opacity = var11;
    var6.buttonDisabled = var10;
    var6 = var8.bind(var9)(var6);
    var _closure1_slot10 = var6;
    var6 = var1.PureComponent;
    var1 = function(arg0) { // Environment: var7
        var3 = function() {
            _fun56180: for (var _fun56180_ip = 0;;) switch (_fun56180_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun56180_ip = 69;
                        continue _fun56180
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun56180_ip = 105;
                    continue _fun56180;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot4;
        var4 = {};
        var5 = 'render';
        var4.key = var5;
        var0 = function() {
            _fun56181: for (var _fun56181_ip = 0;;) switch (_fun56181_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.props;
                    var5 = var0.disabled;
                    var16 = var0.source;
                    var15 = var0.text;
                    var6 = var0.loading;
                    var9 = var0.activeOpacity;
                    var11 = var0.onPress;
                    var10 = var0.onLongPress;
                    var8 = var0.style;
                    var2 = var0.IconComponent;
                    var22 = var0.iconSize;
                    var17 = var0.iconStyle;
                    var7 = var0.color;
                    var1 = var0.disableColor;
                    var3 = undefined;
                    var21 = var3 !== var1;
                    if (!var21) {
                        _fun56181_ip = 91;
                        continue _fun56181
                    }
                case 88:
                    var21 = var1;
                case 91:
                    var13 = var0.accessibilityLabel;
                    var14 = var0.accessibilityRole;
                    var12 = var0.accessibilityState;
                    var0 = var0.children;
                    var1 = null;
                    var18 = var1 != var16;
                    var4 = undefined;
                    if (!var18) {
                        _fun56181_ip = 221;
                        continue _fun56181
                    }
                case 123:
                    var20 = _closure1_slot9;
                    var19 = _closure1_slot1;
                    var23 = _closure1_slot2;
                    var18 = 9;
                    var18 = var23[var18];
                    var19 = var19.bind(var3)(var18);
                    var18 = {};
                    var23 = _closure1_slot10;
                    var24 = var23.buttonIcon;
                    var23 = new Array(3);
                    var23[0] = var24;
                    var24 = var5;
                    if (!var5) {
                        _fun56181_ip = 186;
                        continue _fun56181
                    }
                case 176:
                    var25 = _closure1_slot10;
                    var24 = var25.buttonDisabled;
                case 186:
                    var23[1] = var24;
                    var23[2] = var17;
                    var18.style = var23;
                    var18.source = var16;
                    var18.color = var7;
                    var18.size = var22;
                    var18.disableColor = var21;
                    var4 = var20.bind(var3)(var19, var18);
                case 221:
                    if (var6) {
                        _fun56181_ip = 451;
                        continue _fun56181
                    }
                case 227:
                    if (!(var1 == var15)) {
                        _fun56181_ip = 344;
                        continue _fun56181
                    }
                case 231:
                    if (!(var1 != var2)) {
                        _fun56181_ip = 239;
                        continue _fun56181
                    }
                case 235:
                    if (!(var1 == var16)) {
                        _fun56181_ip = 266;
                        continue _fun56181
                    }
                case 239:
                    if (!(var1 == var16)) {
                        _fun56181_ip = 495;
                        continue _fun56181
                    }
                case 246:
                    var1 = var1 != var0;
                    var4 = undefined;
                    if (!var1) {
                        _fun56181_ip = 495;
                        continue _fun56181
                    }
                case 258:
                    var4 = var0;
                    _fun56181_ip = 495;
                    continue _fun56181;
                case 266:
                    var1 = _closure1_slot9;
                    var0 = {};
                    var16 = 'sm';
                    var0.size = var16;
                    var0.color = var7;
                    var16 = _closure1_slot10;
                    var18 = var16.buttonIcon;
                    var16 = new Array(3);
                    var16[0] = var18;
                    var18 = var5;
                    if (!var5) {
                        _fun56181_ip = 321;
                        continue _fun56181
                    }
                case 311:
                    var19 = _closure1_slot10;
                    var18 = var19.buttonDisabled;
                case 321:
                    var16[1] = var18;
                    var16[2] = var17;
                    var0.style = var16;
                    var4 = var1.bind(var3)(var2, var0);
                    _fun56181_ip = 495;
                    continue _fun56181;
                case 344:
                    var2 = _closure1_slot9;
                    var1 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var0 = 10;
                    var0 = var16[var0];
                    var0 = var1.bind(var3)(var0);
                    var1 = var0.LegacyText;
                    var0 = {};
                    var16 = 1;
                    var0.numberOfLines = var16;
                    var16 = _closure1_slot10;
                    var17 = var16.buttonText;
                    var16 = new Array(3);
                    var16[0] = var17;
                    var17 = var5;
                    if (!var5) {
                        _fun56181_ip = 421;
                        continue _fun56181
                    }
                case 411:
                    var18 = _closure1_slot10;
                    var17 = var18.buttonDisabled;
                case 421:
                    var16[1] = var17;
                    var17 = {};
                    var17.color = var7;
                    var16[2] = var17;
                    var0.style = var16;
                    var0.children = var15;
                    var4 = var2.bind(var3)(var1, var0);
                    _fun56181_ip = 495;
                    continue _fun56181;
                case 451:
                    var2 = _closure1_slot9;
                    var1 = _closure1_slot8;
                    var0 = {};
                    var15 = _closure1_slot10;
                    var15 = var15.buttonSpinner;
                    var0.style = var15;
                    var15 = true;
                    var0.animating = var15;
                    var0.color = var7;
                    var4 = var2.bind(var3)(var1, var0);
                case 495:
                    var2 = _closure1_slot9;
                    var1 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var0 = 11;
                    var0 = var15[var0];
                    var0 = var1.bind(var3)(var0);
                    var1 = var0.PressableOpacity;
                    var0 = {};
                    var0.accessibilityRole = var14;
                    var0.accessibilityLabel = var13;
                    var0.accessibilityState = var12;
                    var0.onPress = var11;
                    var0.onLongPress = var10;
                    var0.activeOpacity = var9;
                    var7 = _closure1_slot10;
                    var9 = var7.button;
                    var7 = new Array(2);
                    var7[0] = var9;
                    var7[1] = var8;
                    var0.style = var7;
                    if (var5) {
                        _fun56181_ip = 589;
                        continue _fun56181
                    }
                case 586:
                    var5 = var6;
                case 589:
                    var0.disabled = var5;
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var6);
    var6 = {};
    var7 = function() {
        var0 = undefined;
        return var0;
    };
    var6.onPress = var7;
    var1.defaultProps = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/TouchableHitBox.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 27, 33, 671, 4087, 4879, 4905, 2]);