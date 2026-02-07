// uikit-native/GradientBorder.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var1 = function arg0() {
        _fun59939: for (var _fun59939_ip = 0;;) switch (_fun59939_ip) {
            case 0:
                var5 = arg0;
                var9 = var5.children;
                var1 = var5.direction;
                var8 = var5.style;
                var12 = var5.borderWidth;
                var4 = undefined;
                if (!(var12 === var4)) {
                    _fun59939_ip = 34;
                    continue _fun59939
                }
            case 31:
                var12 = 1;
            case 34:
                var11 = var5.borderRadius;
                if (!(var11 === var4)) {
                    _fun59939_ip = 84;
                    continue _fun59939
                }
            case 43:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 5;
                var0 = var3[var0];
                var0 = var2.bind(var4)(var0);
                var0 = var0.radii;
                var2 = var0.sm;
                var0 = 1;
                var11 = var2 + var0;
            case 84:
                var3 = {
                    'children': 0,
                    'direction': 0,
                    'style': 0,
                    'borderWidth': 0,
                    'borderRadius': 0
                };
                var2 = null;
                var18 = var3;
                var17 = null;
                var0 = silentSetPrototypeOf(var18, var17);
                var18 = {};
                var17 = var5;
                var16 = var3;
                var6 = copyDataProperties(var18, var17, var16);
                var0 = function arg0() {
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.match;
                    var2 = arg0;
                    var5 = var3.bind(var4)(var2);
                    var4 = var5.with;
                    var2 = _closure1_slot8;
                    var3 = var2.HORIZONTAL;
                    var2 = function() { // Environment: var0
                        var0 = _closure1_slot5;
                        return var0;
                    };
                    var5 = var4.bind(var5)(var3, var2);
                    var4 = var5.with;
                    var2 = _closure1_slot8;
                    var3 = var2.VERTICAL;
                    var2 = function() { // Environment: var0
                        var0 = _closure1_slot6;
                        return var0;
                    };
                    var5 = var4.bind(var5)(var3, var2);
                    var4 = var5.with;
                    var2 = _closure1_slot8;
                    var3 = var2.DIAGONAL;
                    var2 = function() { // Environment: var0
                        var0 = {};
                        var1 = {
                            'x': 0,
                            'y': 0
                        };
                        var0.START = var1;
                        var1 = {
                            'x': 1,
                            'y': 1
                        };
                        var0.END = var1;
                        return var0;
                    };
                    var3 = var4.bind(var5)(var3, var2);
                    var2 = var3.with;
                    var1 = _closure1_slot8;
                    var1 = var1.ANTI_DIAGONAL;
                    var0 = function() { // Environment: var0
                        var0 = {};
                        var1 = {
                            'x': 0,
                            'y': 1
                        };
                        var0.START = var1;
                        var1 = {
                            'x': 1,
                            'y': 0
                        };
                        var0.END = var1;
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1, var0);
                    var0 = var1.exhaustive;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var0.bind(var4)(var1);
                var10 = var0.START;
                var7 = var0.END;
                var1 = var2 != var9;
                var0 = null;
                if (!var1) {
                    _fun59939_ip = 422;
                    continue _fun59939
                }
            case 157:
                var3 = _closure1_slot3;
                var1 = var3.isValidElement;
                var1 = var1.bind(var3)(var9);
                var0 = null;
                if (!var1) {
                    _fun59939_ip = 422;
                    continue _fun59939
                }
            case 183:
                var3 = _closure1_slot7;
                var2 = _closure1_slot1;
                var13 = _closure1_slot2;
                var1 = 6;
                var1 = var13[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.start = var10;
                var1.end = var7;
                var7 = new Array(2);
                var7[0] = var8;
                var8 = {};
                var8.borderRadius = var11;
                var8.padding = var12;
                var7[1] = var8;
                var1.style = var7;
                var18 = var1;
                var17 = var6;
                var6 = copyDataProperties(var18, var17);
                var7 = var9.type;
                var6 = _closure1_slot4;
                if (!(var7 === var6)) {
                    _fun59939_ip = 373;
                    continue _fun59939
                }
            case 266:
                var6 = _closure1_slot3;
                var7 = var6.Children;
                var6 = var7.only;
                var10 = var6.bind(var7)(var9);
                var8 = _closure1_slot3;
                var7 = var8.cloneElement;
                var6 = {};
                var17 = var10.props;
                var18 = var6;
                var13 = copyDataProperties(var18, var17);
                var14 = {};
                var13 = var10.props;
                var17 = var13.style;
                var18 = var14;
                var13 = copyDataProperties(var18, var17);
                var15 = var11 - var12;
                var13 = 'borderRadius';
                var14[var13] = var15;
                var15 = 'hidden';
                var13 = 'overflow';
                var14[var13] = var15;
                var13 = 'style';
                var6[var13] = var14;
                var6 = var7.bind(var8)(var10, var6);
                _fun59939_ip = 407;
                continue _fun59939;
            case 373:
                var8 = _closure1_slot7;
                var7 = _closure1_slot4;
                var5 = {};
                var10 = {};
                var11 = var11 - var12;
                var10.borderRadius = var11;
                var5.style = var10;
                var5.children = var9;
                var6 = var8.bind(var4)(var7, var5);
            case 407:
                var5 = 'children';
                var1[var5] = var6;
                var0 = var3.bind(var4)(var2, var1);
            case 422:
                return var0;
        }
    };
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.HorizontalGradient;
    var _closure1_slot5 = var7;
    var3 = var3.VerticalGradient;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = {};
    var7 = 'horizontal';
    var3.HORIZONTAL = var7;
    var7 = 'vertical';
    var3.VERTICAL = var7;
    var7 = 'diagonal';
    var3.DIAGONAL = var7;
    var7 = 'anti-diagonal';
    var3.ANTI_DIAGONAL = var7;
    var _closure1_slot8 = var3;
    var1.Direction = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/GradientBorder.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 3460, 671, 4098, 2]);