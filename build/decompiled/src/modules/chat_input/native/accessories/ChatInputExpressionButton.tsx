// modules/chat_input/native/accessories/ChatInputExpressionButton.tsx
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
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'borderRadius': null,
        'paddingHorizontal': 6,
        'paddingVertical': 6,
        'height': 36,
        'width': 36
    };
    var10 = 3;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var9.borderRadius = var12;
    var3.expressionButton = var9;
    var9 = {
        'tintColor': null,
        'position': 'absolute',
        'left': 6,
        'top': 6
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.INTERACTIVE_TEXT_DEFAULT;
    var9.tintColor = var10;
    var3.expressionButtonIcon = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot5 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun90417: for (var _fun90417_ip = 0;;) switch (_fun90417_ip) {
            case 0:
                var1 = arg0;
                var10 = var1.style;
                var6 = var1.active;
                var3 = undefined;
                if (!(var6 === var3)) {
                    _fun90417_ip = 24;
                    continue _fun90417
                }
            case 22:
                var6 = false;
            case 24:
                var5 = var1.onPress;
                var _closure2_slot0 = var5;
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)();
                var2 = _closure1_slot3;
                var4 = var2.useCallback;
                var1 = new Array(1);
                var1[0] = var5;
                var0 = function() { // Environment: var0
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var0);
                    return var0;
                };
                var4 = var4.bind(var2)(var0, var1);
                var1 = var2.useRef;
                var0 = null;
                var7 = var1.bind(var2)(var0);
                var2 = _closure1_slot4;
                var12 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 4;
                var0 = var5[var0];
                var0 = var12.bind(var3)(var0);
                var1 = var0.PressableOpacity;
                var0 = {};
                var0.ref = var7;
                var11 = var9.expressionButton;
                var7 = new Array(2);
                var7[0] = var11;
                var7[1] = var10;
                var0.style = var7;
                var7 = 'button';
                var0.accessibilityRole = var7;
                var7 = 5;
                var10 = var5[var7];
                var10 = var12.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var7 = var5[var7];
                var7 = var12.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.iZ7Mz9;
                var7 = var10.bind(var11)(var7);
                var0.accessibilityLabel = var7;
                var7 = {};
                var7.expanded = var6;
                var0.accessibilityState = var7;
                var0.onPress = var4;
                var7 = _closure1_slot1;
                var4 = 6;
                var4 = var5[var4];
                var5 = var7.bind(var3)(var4);
                var4 = {};
                var9 = var9.expressionButtonIcon;
                var4.style = var9;
                var9 = _closure1_slot2;
                if (var6) {
                    _fun90417_ip = 263;
                    continue _fun90417
                }
            case 254:
                var6 = 8;
                var6 = var9[var6];
                _fun90417_ip = 270;
                continue _fun90417;
            case 263:
                var8 = 7;
                var6 = var9[var8];
            case 270:
                var6 = var7.bind(var3)(var6);
                var4.source = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/chat_input/native/accessories/ChatInputExpressionButton.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1297, 671, 4865, 1234, 4045, 9567, 7639, 2]);