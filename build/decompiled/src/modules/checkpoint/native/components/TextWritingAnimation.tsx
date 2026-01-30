// modules/checkpoint/native/components/TextWritingAnimation.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var7 = var5[var3];
    var7 = var4.bind(var0)(var7);
    var8 = var7.useEffect;
    var _closure1_slot3 = var8;
    var8 = var7.useRef;
    var _closure1_slot4 = var8;
    var7 = var7.useState;
    var _closure1_slot5 = var7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 'relative';
    var8.position = var9;
    var3.container = var8;
    var8 = {
        'opacity': 0,
        'userSelect': 'none',
        'pointerEvents': 'none'
    };
    var3.hiddenText = var8;
    var8 = {
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'right': 0,
        'bottom': 0
    };
    var3.animatedText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/checkpoint/native/components/TextWritingAnimation.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: TextWritingAnimation, environment: var1
        var1 = arg0;
        var6 = var1.style;
        var13 = var1.textStyle;
        var16 = var1.text;
        var _closure2_slot0 = var16;
        var11 = var1.variant;
        var10 = var1.adjustsFontSizeToFit;
        var9 = var1.lineClamp;
        var5 = var1.delay;
        var _closure2_slot1 = var5;
        var2 = _closure1_slot4;
        var3 = undefined;
        var1 = 0;
        var7 = var2.bind(var3)(var1);
        var _closure2_slot2 = var7;
        var2 = var2.bind(var3)(var1);
        var _closure2_slot3 = var2;
        var7 = _closure1_slot5;
        var2 = '';
        var8 = var7.bind(var3)(var2);
        var7 = _closure1_slot2;
        var2 = 2;
        var2 = var7.bind(var3)(var8, var2);
        var8 = var2[var1];
        var1 = 1;
        var1 = var2[var1];
        var _closure2_slot4 = var1;
        var1 = _closure1_slot9;
        var12 = var1.bind(var3)();
        var2 = _closure1_slot3;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var16;
        var0 = function() { // Environment: var0
            _fun86518: for (var _fun86518_ip = 0;;) switch (_fun86518_ip) {
                case 0:
                    var4 = function() { // Original name: handleAnimationFrame, environment: var0
                        _fun86519: for (var _fun86519_ip = 0;;) switch (_fun86519_ip) {
                            case 0:
                                var1 = global;
                                var2 = var1.Date;
                                var0 = var2.now;
                                var3 = var0.bind(var2)();
                                var0 = _closure2_slot2;
                                var0 = var0.current;
                                var4 = var3 - var0;
                                var6 = var1.Math;
                                var5 = var6.max;
                                var9 = var1.Math;
                                var8 = var9.min;
                                var3 = 400;
                                var7 = var4 / var3;
                                var0 = 1;
                                var0 = var8.bind(var9)(var7, var0);
                                var8 = 0;
                                var11 = var5.bind(var6)(var0, var8);
                                var6 = _closure2_slot4;
                                var7 = _closure2_slot0;
                                var5 = var7.substring;
                                var10 = var1.Math;
                                var9 = var10.floor;
                                var0 = var7.length;
                                var0 = var11 * var0;
                                var0 = var9.bind(var10)(var0);
                                var5 = var5.bind(var7)(var8, var0);
                                var0 = undefined;
                                var5 = var6.bind(var0)(var5);
                                if (!(var4 < var3)) {
                                    _fun86519_ip = 173;
                                    continue _fun86519
                                }
                            case 139:
                                var2 = _closure2_slot3;
                                var4 = var1.window;
                                var3 = var4.requestAnimationFrame;
                                var1 = _closure3_slot0;
                                var1 = var3.bind(var4)(var1);
                                var2.current = var1;
                            case 173:
                                return var0;
                        }
                    };
                    var _closure3_slot0 = var4;
                    var5 = _closure2_slot2;
                    var1 = global;
                    var6 = var1.Date;
                    var3 = var6.now;
                    var6 = var3.bind(var6)();
                    var7 = _closure2_slot1;
                    var3 = null;
                    var7 = var3 != var7;
                    var3 = 0;
                    if (!var7) {
                        _fun86518_ip = 56;
                        continue _fun86518
                    }
                case 52:
                    var3 = _closure2_slot1;
                case 56:
                    var3 = var6 + var3;
                    var5.current = var3;
                    var2 = _closure2_slot3;
                    var3 = var1.window;
                    var1 = var3.requestAnimationFrame;
                    var1 = var1.bind(var3)(var4);
                    var2.current = var1;
                    var0 = function() { // Environment: var0
                        var0 = global;
                        var2 = var0.cancelAnimationFrame;
                        var0 = _closure2_slot3;
                        var1 = var0.current;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        var2 = _closure1_slot8;
        var1 = _closure1_slot6;
        var0 = {};
        var7 = var12.container;
        var5 = new Array(2);
        var5[0] = var7;
        var5[1] = var6;
        var0.style = var5;
        var7 = _closure1_slot7;
        var6 = _closure1_slot0;
        var14 = _closure1_slot1;
        var5 = 5;
        var4 = var14[var5];
        var15 = var6.bind(var3)(var4);
        var4 = {};
        var17 = true;
        var4['aria-hidden'] = var17;
        var18 = var12.hiddenText;
        var17 = new Array(2);
        var17[0] = var18;
        var17[1] = var13;
        var4.style = var17;
        var4.variant = var11;
        var4.adjustsFontSizeToFit = var10;
        var4.lineClamp = var9;
        var4.children = var16;
        var15 = var7.bind(var3)(var15, var4);
        var4 = new Array(2);
        var4[0] = var15;
        var5 = var14[var5];
        var6 = var6.bind(var3)(var5);
        var5 = {};
        var14 = var12.animatedText;
        var12 = new Array(2);
        var12[0] = var14;
        var12[1] = var13;
        var5.style = var12;
        var5.variant = var11;
        var5.adjustsFontSizeToFit = var10;
        var5.lineClamp = var9;
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    var1 = 400;
    var2.DURATION = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 11143, 2]);