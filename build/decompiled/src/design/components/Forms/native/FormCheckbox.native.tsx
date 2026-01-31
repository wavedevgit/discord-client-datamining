// design/components/Forms/native/FormCheckbox.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var8;
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
    var9 = {
        'width': 24,
        'height': 24,
        'flexGrow': 0,
        'flexShrink': 0,
        'alignItems': 'center',
        'justifyContent': 'center',
        'borderRadius': null,
        'borderWidth': 2
    };
    var10 = 3;
    var11 = var5[var10];
    var11 = var8.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var9.borderRadius = var11;
    var11 = var5[var10];
    var11 = var8.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.INTERACTIVE_TEXT_DEFAULT;
    var9.borderColor = var11;
    var3.checkbox = var9;
    var9 = {};
    var11 = 'transparent';
    var9.backgroundColor = var11;
    var11 = var5[var10];
    var11 = var8.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.INTERACTIVE_TEXT_DEFAULT;
    var9.borderColor = var11;
    var3.unselected = var9;
    var9 = {};
    var11 = var5[var10];
    var11 = var8.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.REDESIGN_INPUT_CONTROL_SELECTED;
    var9.borderColor = var11;
    var11 = var5[var10];
    var11 = var8.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.REDESIGN_INPUT_CONTROL_SELECTED;
    var9.backgroundColor = var11;
    var3.selected = var9;
    var9 = {};
    var10 = var5[var10];
    var10 = var8.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.WHITE;
    var9.tintColor = var10;
    var3.checkmark = var9;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var8.bind(var0)(var3);
    var6 = var7.createAnimatedComponent;
    var3 = 5;
    var3 = var5[var3];
    var3 = var8.bind(var0)(var3);
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = {};
    var6 = "function FormCheckboxNativeTsx1(){const{withSpring,checked,selected,unselected,SUBTLE_SPRING}=this.__closure;const defaultAnimation={borderColor:withSpring(checked?selected.borderColor:unselected.borderColor,SUBTLE_SPRING,'animate-always'),backgroundColor:withSpring(checked?selected.backgroundColor:unselected.backgroundColor,SUBTLE_SPRING,'animate-always')};return defaultAnimation;}";
    var3.code = var6;
    var _closure1_slot7 = var3;
    var3 = {};
    var6 = "function FormCheckboxNativeTsx2(){const{useReducedMotion,withSpring,checked,SUBTLE_SPRING}=this.__closure;const uncheckedScale=useReducedMotion?1:0.5;return{opacity:withSpring(checked?1:0,SUBTLE_SPRING,'animate-always'),transform:[{scale:withSpring(checked?1:uncheckedScale,SUBTLE_SPRING)}]};}";
    var3.code = var6;
    var _closure1_slot8 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Forms/native/FormCheckbox.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: FormCheckbox, environment: var1
        var1 = arg0;
        var2 = var1.checked;
        var1 = _closure1_slot5;
        var3 = undefined;
        var6 = var1.bind(var3)();
        var7 = _closure1_slot3;
        var5 = var7.useContext;
        var8 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 6;
        var1 = var10[var1];
        var1 = var8.bind(var3)(var1);
        var1 = var1.AccessibilityPreferencesContext;
        var1 = var5.bind(var7)(var1);
        var1 = var1.reducedMotion;
        var1 = var1.enabled;
        var5 = function(arg0) { // Original name: useCheckboxStyles, environment: var0
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
            var1 = 4;
            var1 = var8[var1];
            var2 = var6.bind(var7)(var1);
            var1 = var2.useAnimatedStyle;
            var0 = function() { // Original name: S, environment: var0
                _fun48154: for (var _fun48154_ip = 0;;) switch (_fun48154_ip) {
                    case 0:
                        var0 = {};
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var4 = 8;
                        var2 = var2[var4];
                        var7 = undefined;
                        var12 = var3.bind(var7)(var2);
                        var11 = var12.withSpring;
                        var2 = _closure3_slot0;
                        if (var2) {
                            _fun48154_ip = 54;
                            continue _fun48154
                        }
                    case 42:
                        var2 = _closure3_slot2;
                        var10 = var2.borderColor;
                        _fun48154_ip = 64;
                        continue _fun48154;
                    case 54:
                        var2 = _closure3_slot1;
                        var10 = var2.borderColor;
                    case 64:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var8 = 9;
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
                            _fun48154_ip = 140;
                            continue _fun48154
                        }
                    case 129:
                        var2 = _closure3_slot2;
                        var2 = var2.backgroundColor;
                        _fun48154_ip = 149;
                        continue _fun48154;
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
            var11 = 8;
            var11 = var8[var11];
            var11 = var6.bind(var7)(var11);
            var11 = var11.withSpring;
            var4.withSpring = var11;
            var4.checked = var10;
            var4.selected = var9;
            var4.unselected = var5;
            var5 = 9;
            var5 = var8[var5];
            var5 = var6.bind(var7)(var5);
            var5 = var5.SUBTLE_SPRING;
            var4.SUBTLE_SPRING = var5;
            var0.__closure = var4;
            var4 = 11278373524374.0;
            var0.__workletHash = var4;
            var3 = _closure1_slot7;
            var0.__initData = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var8 = var5.bind(var3)(var2);
        var0 = function(arg0, arg1) { // Original name: useCheckmarkStyles, environment: var0
            var9 = arg0;
            var5 = arg1;
            var _closure3_slot0 = var9;
            var _closure3_slot1 = var5;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 4;
            var1 = var8[var1];
            var6 = undefined;
            var2 = var7.bind(var6)(var1);
            var1 = var2.useAnimatedStyle;
            var0 = function() { // Original name: c, environment: var0
                _fun48156: for (var _fun48156_ip = 0;;) switch (_fun48156_ip) {
                    case 0:
                        var0 = _closure3_slot0;
                        var6 = 0.5;
                        if (!var0) {
                            _fun48156_ip = 23;
                            continue _fun48156
                        }
                    case 20:
                        var6 = 1;
                    case 23:
                        var0 = {};
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var9 = 8;
                        var2 = var2[var9];
                        var7 = undefined;
                        var13 = var4.bind(var7)(var2);
                        var12 = var13.withSpring;
                        var2 = _closure3_slot1;
                        var11 = 0;
                        if (!var2) {
                            _fun48156_ip = 67;
                            continue _fun48156
                        }
                    case 64:
                        var11 = 1;
                    case 67:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var8 = 9;
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
                            _fun48156_ip = 139;
                            continue _fun48156
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
            var9 = 8;
            var9 = var8[var9];
            var9 = var7.bind(var6)(var9);
            var9 = var9.withSpring;
            var4.withSpring = var9;
            var4.checked = var5;
            var5 = 9;
            var5 = var8[var5];
            var5 = var7.bind(var6)(var5);
            var5 = var5.SUBTLE_SPRING;
            var4.SUBTLE_SPRING = var5;
            var0.__closure = var4;
            var4 = 13939484082835.0;
            var0.__workletHash = var4;
            var3 = _closure1_slot8;
            var0.__initData = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var7 = var0.bind(var3)(var1, var2);
        var2 = _closure1_slot4;
        var9 = _closure1_slot1;
        var0 = 4;
        var0 = var10[var0];
        var0 = var9.bind(var3)(var0);
        var1 = var0.View;
        var0 = {};
        var11 = var6.checkbox;
        var5 = new Array(2);
        var5[0] = var11;
        var5[1] = var8;
        var0.style = var5;
        var5 = _closure1_slot6;
        var4 = {};
        var8 = 7;
        var8 = var10[var8];
        var8 = var9.bind(var3)(var8);
        var4.source = var8;
        var8 = 5;
        var8 = var10[var8];
        var8 = var9.bind(var3)(var8);
        var8 = var8.Sizes;
        var8 = var8.SMALL;
        var4.size = var8;
        var8 = var6.checkmark;
        var6 = new Array(2);
        var6[0] = var8;
        var6[1] = var7;
        var4.style = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.FormCheckbox = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1297, 671, 3679, 4045, 3124, 5380, 4040, 4046, 2]);