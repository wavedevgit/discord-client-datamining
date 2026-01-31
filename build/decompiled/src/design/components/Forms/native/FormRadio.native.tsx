// design/components/Forms/native/FormRadio.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'width': 24,
        'height': 24,
        'flexGrow': 0,
        'flexShrink': 0,
        'alignItems': 'center',
        'justifyContent': 'center',
        'borderRadius': null,
        'borderWidth': 2
    };
    var9 = 3;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.round;
    var8.borderRadius = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.INTERACTIVE_TEXT_DEFAULT;
    var8.borderColor = var11;
    var3.radio = var8;
    var8 = {};
    var11 = 'transparent';
    var8.backgroundColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.INTERACTIVE_TEXT_DEFAULT;
    var8.borderColor = var11;
    var3.unselected = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.REDESIGN_INPUT_CONTROL_SELECTED;
    var8.borderColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.REDESIGN_INPUT_CONTROL_SELECTED;
    var8.backgroundColor = var11;
    var3.selected = var8;
    var8 = {
        'width': 10,
        'height': 10
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.WHITE;
    var8.backgroundColor = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.round;
    var8.borderRadius = var9;
    var3.dot = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = {};
    var6 = "function FormRadioNativeTsx1(){const{withSpring,selected,selectedStyles,unselectedStyles,SUBTLE_SPRING}=this.__closure;const defaultAnimation={borderColor:withSpring(selected?selectedStyles.borderColor:unselectedStyles.borderColor,SUBTLE_SPRING,'animate-always'),backgroundColor:withSpring(selected?selectedStyles.backgroundColor:unselectedStyles.backgroundColor,SUBTLE_SPRING,'animate-always')};return defaultAnimation;}";
    var3.code = var6;
    var _closure1_slot6 = var3;
    var3 = {};
    var6 = "function FormRadioNativeTsx2(){const{useReducedMotion,withSpring,selected,SUBTLE_SPRING}=this.__closure;const unselectedScale=useReducedMotion?1:0.5;return{opacity:withSpring(selected?1:0,SUBTLE_SPRING,'animate-always'),transform:[{scale:withSpring(selected?1:unselectedScale,SUBTLE_SPRING)}]};}";
    var3.code = var6;
    var _closure1_slot7 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Forms/native/FormRadio.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: FormRadio, environment: var1
        var0 = arg0;
        var4 = var0.selected;
        var2 = _closure1_slot5;
        var3 = undefined;
        var6 = var2.bind(var3)();
        var7 = _closure1_slot3;
        var5 = var7.useContext;
        var9 = _closure1_slot0;
        var8 = _closure1_slot2;
        var2 = 4;
        var2 = var8[var2];
        var2 = var9.bind(var3)(var2);
        var2 = var2.AccessibilityPreferencesContext;
        var2 = var5.bind(var7)(var2);
        var2 = var2.reducedMotion;
        var2 = var2.enabled;
        var5 = function(arg0) { // Original name: useRadioStyles, environment: var1
            var10 = arg0;
            var _closure3_slot0 = var10;
            var1 = _closure1_slot5;
            var7 = undefined;
            var1 = var1.bind(var7)();
            var9 = var1.selected;
            var _closure3_slot1 = var9;
            var5 = var1.unselected;
            var _closure3_slot2 = var5;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 5;
            var1 = var8[var1];
            var2 = var6.bind(var7)(var1);
            var1 = var2.useAnimatedStyle;
            var0 = function() { // Original name: S, environment: var0
                _fun48083: for (var _fun48083_ip = 0;;) switch (_fun48083_ip) {
                    case 0:
                        var0 = {};
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var4 = 6;
                        var2 = var2[var4];
                        var7 = undefined;
                        var12 = var3.bind(var7)(var2);
                        var11 = var12.withSpring;
                        var2 = _closure3_slot0;
                        if (var2) {
                            _fun48083_ip = 54;
                            continue _fun48083
                        }
                    case 42:
                        var2 = _closure3_slot2;
                        var10 = var2.borderColor;
                        _fun48083_ip = 64;
                        continue _fun48083;
                    case 54:
                        var2 = _closure3_slot1;
                        var10 = var2.borderColor;
                    case 64:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var8 = 7;
                        var5 = var2[var8];
                        var5 = var3.bind(var7)(var5);
                        var9 = var5.SUBTLE_SPRING;
                        var5 = 'animate-always';
                        var9 = var11.bind(var12)(var10, var9, var5);
                        var0.borderColor = var9;
                        var2 = var2[var4];
                        var4 = var3.bind(var7)(var2);
                        var3 = var4.withSpring;
                        var2 = _closure3_slot0;
                        if (var2) {
                            _fun48083_ip = 140;
                            continue _fun48083
                        }
                    case 129:
                        var2 = _closure3_slot2;
                        var2 = var2.backgroundColor;
                        _fun48083_ip = 149;
                        continue _fun48083;
                    case 140:
                        var6 = _closure3_slot1;
                        var2 = var6.backgroundColor;
                    case 149:
                        var6 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var1 = var1[var8];
                        var1 = var6.bind(var7)(var1);
                        var1 = var1.SUBTLE_SPRING;
                        var1 = var3.bind(var4)(var2, var1, var5);
                        var0.backgroundColor = var1;
                        return var0;
                }
            };
            var4 = {};
            var11 = 6;
            var11 = var8[var11];
            var11 = var6.bind(var7)(var11);
            var11 = var11.withSpring;
            var4.withSpring = var11;
            var4.selected = var10;
            var4.selectedStyles = var9;
            var4.unselectedStyles = var5;
            var5 = 7;
            var5 = var8[var5];
            var5 = var6.bind(var7)(var5);
            var5 = var5.SUBTLE_SPRING;
            var4.SUBTLE_SPRING = var5;
            var0.__closure = var4;
            var4 = 10943552903194.0;
            var0.__workletHash = var4;
            var3 = _closure1_slot6;
            var0.__initData = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var10 = var5.bind(var3)(var4);
        var1 = function(arg0, arg1) { // Original name: useRadioDotStyles, environment: var1
            var9 = arg0;
            var5 = arg1;
            var _closure3_slot0 = var9;
            var _closure3_slot1 = var5;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 5;
            var1 = var8[var1];
            var6 = undefined;
            var2 = var7.bind(var6)(var1);
            var1 = var2.useAnimatedStyle;
            var0 = function() { // Original name: n, environment: var0
                _fun48085: for (var _fun48085_ip = 0;;) switch (_fun48085_ip) {
                    case 0:
                        var0 = _closure3_slot0;
                        var6 = 0.5;
                        if (!var0) {
                            _fun48085_ip = 23;
                            continue _fun48085
                        }
                    case 20:
                        var6 = 1;
                    case 23:
                        var0 = {};
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var9 = 6;
                        var2 = var2[var9];
                        var7 = undefined;
                        var13 = var4.bind(var7)(var2);
                        var12 = var13.withSpring;
                        var2 = _closure3_slot1;
                        var11 = 0;
                        if (!var2) {
                            _fun48085_ip = 67;
                            continue _fun48085
                        }
                    case 64:
                        var11 = 1;
                    case 67:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var8 = 7;
                        var2 = var4[var8];
                        var2 = var5.bind(var7)(var2);
                        var10 = var2.SUBTLE_SPRING;
                        var2 = 'animate-always';
                        var2 = var12.bind(var13)(var11, var10, var2);
                        var0.opacity = var2;
                        var2 = {};
                        var4 = var4[var9];
                        var5 = var5.bind(var7)(var4);
                        var4 = var5.withSpring;
                        var9 = _closure3_slot1;
                        var3 = 1;
                        if (var9) {
                            _fun48085_ip = 139;
                            continue _fun48085
                        }
                    case 136:
                        var3 = var6;
                    case 139:
                        var6 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var1 = var1[var8];
                        var1 = var6.bind(var7)(var1);
                        var1 = var1.SUBTLE_SPRING;
                        var1 = var4.bind(var5)(var3, var1);
                        var2.scale = var1;
                        var1 = new Array(1);
                        var1[0] = var2;
                        var0.transform = var1;
                        return var0;
                }
            };
            var4 = {};
            var4.useReducedMotion = var9;
            var9 = 6;
            var9 = var8[var9];
            var9 = var7.bind(var6)(var9);
            var9 = var9.withSpring;
            var4.withSpring = var9;
            var4.selected = var5;
            var5 = 7;
            var5 = var8[var5];
            var5 = var7.bind(var6)(var5);
            var5 = var5.SUBTLE_SPRING;
            var4.SUBTLE_SPRING = var5;
            var0.__closure = var4;
            var4 = 675362542431.0;
            var0.__workletHash = var4;
            var3 = _closure1_slot7;
            var0.__initData = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var7 = var1.bind(var3)(var2, var4);
        var2 = _closure1_slot4;
        var5 = _closure1_slot1;
        var4 = 5;
        var0 = var8[var4];
        var0 = var5.bind(var3)(var0);
        var1 = var0.View;
        var0 = {};
        var11 = var6.radio;
        var9 = new Array(2);
        var9[0] = var11;
        var9[1] = var10;
        var0.style = var9;
        var4 = var8[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.View;
        var4 = {};
        var8 = var6.dot;
        var6 = new Array(2);
        var6[0] = var8;
        var6[1] = var7;
        var4.style = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.FormRadio = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1297, 671, 3124, 3679, 4040, 4046, 2]);