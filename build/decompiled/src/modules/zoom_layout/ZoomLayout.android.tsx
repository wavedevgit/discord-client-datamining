// modules/zoom_layout/ZoomLayout.android.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
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
    var3 = var3.PixelRatio;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        var4 = _closure1_slot3;
        var3 = var4.useRef;
        var2 = null;
        var5 = var3.bind(var4)(var2);
        var _closure2_slot0 = var5;
        var3 = var4.useImperativeHandle;
        var2 = arg1;
        var1 = function() { // Environment: var1
            var0 = {};
            var2 = function arg0() {
                _fun65202: for (var _fun65202_ip = 0;;) switch (_fun65202_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = var1.x;
                        var5 = var1.y;
                        var7 = var1.scale;
                        var0 = undefined;
                        if (!(var7 === var0)) {
                            _fun65202_ip = 28;
                            continue _fun65202
                        }
                    case 25:
                        var7 = 2;
                    case 28:
                        var6 = var1.animated;
                        if (!(var6 === var0)) {
                            _fun65202_ip = 40;
                            continue _fun65202
                        }
                    case 38:
                        var6 = true;
                    case 40:
                        var3 = _closure2_slot0;
                        var4 = var3.current;
                        var3 = null;
                        if (!(var3 != var4)) {
                            _fun65202_ip = 152;
                            continue _fun65202
                        }
                    case 58:
                        var8 = _closure1_slot4;
                        var4 = var8.get;
                        var4 = var4.bind(var8)();
                        var2 = var2 * var4;
                        var8 = var5 * var4;
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 3;
                        var3 = var5[var3];
                        var3 = var4.bind(var0)(var3);
                        var5 = var3.Commands;
                        var4 = var5.zoomTo;
                        var1 = _closure2_slot0;
                        var13 = var1.current;
                        var1 = var2 / var7;
                        var12 = var1 - var2;
                        var1 = var8 / var7;
                        var11 = var1 - var8;
                        var14 = var5;
                        var10 = var7;
                        var9 = var6;
                        var1 = var14[var4](var13, var12, var11, var10, var9, var8);
                    case 152:
                        return var0;
                }
            };
            var0.zoomTo = var2;
            var1 = function() {
                _fun65203: for (var _fun65203_ip = 0;;) switch (_fun65203_ip) {
                    case 0:
                        var1 = arguments[0];
                        var0 = undefined;
                        if (!(var1 === var0)) {
                            _fun65203_ip = 11;
                            continue _fun65203
                        }
                    case 9:
                        var1 = {};
                    case 11:
                        var4 = var1.animated;
                        if (!(var4 === var0)) {
                            _fun65203_ip = 23;
                            continue _fun65203
                        }
                    case 21:
                        var4 = true;
                    case 23:
                        var2 = _closure2_slot0;
                        var3 = var2.current;
                        var2 = null;
                        if (!(var2 != var3)) {
                            _fun65203_ip = 91;
                            continue _fun65203
                        }
                    case 41:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 3;
                        var2 = var5[var2];
                        var2 = var3.bind(var0)(var2);
                        var3 = var2.Commands;
                        var2 = var3.unzoom;
                        var1 = _closure2_slot0;
                        var1 = var1.current;
                        var1 = var2.bind(var3)(var1, var4);
                    case 91:
                        return var0;
                }
            };
            var0.unzoom = var1;
            return var0;
        };
        var1 = var3.bind(var4)(var2, var1);
        var3 = _closure1_slot5;
        var1 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 3;
        var0 = var2[var0];
        var2 = undefined;
        var1 = var1.bind(var2)(var0);
        var0 = {};
        var6 = arg0;
        var7 = var0;
        var4 = copyDataProperties(var7, var6);
        var4 = 'ref';
        var0[var4] = var5;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/zoom_layout/ZoomLayout.android.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 8110, 2]);