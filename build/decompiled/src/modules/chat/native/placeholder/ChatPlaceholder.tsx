// modules/chat/native/placeholder/ChatPlaceholder.tsx
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
    var _closure1_slot2 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.StyleSheet;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useChatInputContainerHeight;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var13 = var10.absoluteFillObject;
    var14 = var9;
    var10 = copyDataProperties(var14, var13);
    var10 = 5;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var11 = var10.PX_24;
    var10 = 'paddingBottom';
    var9[var10] = var11;
    var11 = 'column-reverse';
    var10 = 'flexDirection';
    var9[var10] = var11;
    var11 = 'hidden';
    var10 = 'overflow';
    var9[var10] = var11;
    var3.placeholder = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot5 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        var0 = arg0;
        var4 = var0.screenIndex;
        var1 = _closure1_slot5;
        var3 = undefined;
        var5 = var1.bind(var3)();
        var1 = _closure1_slot3;
        var12 = var1.bind(var3)(var4);
        var _closure2_slot0 = var12;
        var1 = _closure1_slot0;
        var8 = _closure1_slot1;
        var4 = 8;
        var4 = var8[var4];
        var4 = var1.bind(var3)(var4);
        var4 = var4.bind(var3)();
        var14 = var4.height;
        var _closure2_slot1 = var14;
        var4 = 6;
        var4 = var8[var4];
        var4 = var1.bind(var3)(var4);
        var7 = var4.bind(var3)();
        var4 = 7;
        var4 = var8[var4];
        var6 = var1.bind(var3)(var4);
        var4 = {
            'isKeyboardAwareOnAndroid': false,
            'includeKeyboardHeight': true
        };
        var4 = var6.bind(var3)(var4);
        var4 = var4.insets;
        var6 = {};
        var10 = var4.bottom;
        var9 = var7.bottom;
        var9 = var10 - var9;
        var6.containerBottomInset = var9;
        var7 = var7.top;
        var4 = var4.bottom;
        var4 = var7 + var4;
        var6.windowVerticalInset = var4;
        var4 = var6.containerBottomInset;
        var _closure2_slot2 = var4;
        var13 = var6.windowVerticalInset;
        var _closure2_slot3 = var13;
        var10 = _closure1_slot2;
        var7 = var10.useMemo;
        var6 = new Array(2);
        var6[0] = var12;
        var6[1] = var4;
        var4 = function() { // Environment: var2
            var0 = {};
            var2 = _closure2_slot0;
            var1 = _closure2_slot2;
            var1 = var2 + var1;
            var0.marginBottom = var1;
            return var0;
        };
        var7 = var7.bind(var10)(var4, var6);
        var4 = function() {
            var3 = _closure1_slot2;
            var2 = var3.useRef;
            var1 = new Array(0);
            var1 = var2.bind(var3)(var1);
            var _closure3_slot0 = var1;
            var2 = var3.useCallback;
            var1 = function(arg0) { // Environment: var0
                _fun90950: for (var _fun90950_ip = 0;;) switch (_fun90950_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = _closure3_slot0;
                        var0 = var0.current;
                        var0 = var0[var3];
                        var1 = null;
                        if (!(var1 == var0)) {
                            _fun90950_ip = 90;
                            continue _fun90950
                        }
                    case 25:
                        var1 = global;
                        var5 = var1.Math;
                        var4 = var5.floor;
                        var6 = var1.Math;
                        var1 = var6.random;
                        var6 = var1.bind(var6)();
                        var1 = 3;
                        var1 = var1 * var6;
                        var4 = var4.bind(var5)(var1);
                        var1 = 1;
                        var1 = var4 + var1;
                        var2 = _closure3_slot0;
                        var2 = var2.current;
                        var2[var3] = var1;
                        var0 = var1;
                    case 90:
                        return var0;
                }
            };
            var0 = new Array(0);
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var11 = var4.bind(var3)();
        var _closure2_slot4 = var11;
        var4 = 9;
        var4 = var8[var4];
        var6 = var1.bind(var3)(var4);
        var4 = {
            'visible': true,
            'animated': true
        };
        var6 = var6.bind(var3)(var4);
        var9 = var10.useMemo;
        var4 = new Array(4);
        var4[0] = var14;
        var4[1] = var13;
        var4[2] = var12;
        var4[3] = var11;
        var2 = function() { // Environment: var2
            _fun90951: for (var _fun90951_ip = 0;;) switch (_fun90951_ip) {
                case 0:
                    var0 = new Array(0);
                    var3 = 0;
                    var7 = undefined;
                    var5 = 10;
                    var4 = 11;
                    var2 = 0;
                case 22:
                    var1 = _closure2_slot4;
                    var1 = var1.bind(var7)(var2);
                    var11 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var9 = var10[var5];
                    var9 = var11.bind(var7)(var9);
                    var9 = var9.bind(var7)(var1);
                    var3 = var3 + var9;
                    var9 = var0.push;
                    var12 = _closure1_slot4;
                    var10 = var10[var4];
                    var11 = var11.bind(var7)(var10);
                    var10 = {};
                    var10.lines = var1;
                    var1 = parseFloat(var2);
                    var2 = var1 + 1;
                    var1 = var12.bind(var7)(var11, var10, var1);
                    var1 = var9.bind(var0)(var1);
                    var9 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var9 = var9 - var1;
                    var1 = _closure2_slot3;
                    var1 = var9 - var1;
                    if (var3 < var1) {
                        _fun90951_ip = 22;
                        continue _fun90951
                    }
                case 124:
                    return var0;
            }
        };
        var4 = var9.bind(var10)(var2, var4);
        var2 = _closure1_slot4;
        var0 = 12;
        var0 = var8[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.View;
        var0 = {};
        var8 = var5.placeholder;
        var5 = new Array(3);
        var5[0] = var8;
        var5[1] = var7;
        var5[2] = var6;
        var0.style = var5;
        var5 = 'none';
        var0.pointerEvents = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/chat/native/placeholder/ChatPlaceholder.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 7856, 33, 1297, 671, 1568, 4856, 1464, 11781, 11782, 11783, 3679, 2]);