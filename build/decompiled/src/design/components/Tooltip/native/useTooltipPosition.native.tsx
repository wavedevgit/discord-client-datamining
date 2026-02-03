// design/components/Tooltip/native/useTooltipPosition.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var5 = var4[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot0 = var3;
    var3 = 1;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Tooltip/native/useTooltipPosition.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1, arg2, arg3() {
        _fun57519: for (var _fun57519_ip = 0;;) switch (_fun57519_ip) {
            case 0:
                var7 = arg0;
                var5 = arg1;
                var6 = arg2;
                var8 = arg3;
                var4 = arguments[4];
                var _closure2_slot0 = var7;
                var _closure2_slot1 = var5;
                var _closure2_slot2 = var6;
                var _closure2_slot3 = var8;
                var1 = undefined;
                if (!(var4 === var1)) {
                    _fun57519_ip = 41;
                    continue _fun57519
                }
            case 39:
                var4 = 0;
            case 41:
                var _closure2_slot4 = var4;
                var3 = _closure1_slot0;
                var2 = var3.useMemo;
                var1 = new Array(5);
                var1[0] = var8;
                var1[1] = var7;
                var1[2] = var6;
                var1[3] = var5;
                var1[4] = var4;
                var0 = function() { // Environment: var0
                    _fun57520: for (var _fun57520_ip = 0;;) switch (_fun57520_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 != var0)) {
                                _fun57520_ip = 211;
                                continue _fun57520
                            }
                        case 16:
                            var0 = _closure2_slot1;
                            if (!(var1 != var0)) {
                                _fun57520_ip = 211;
                                continue _fun57520
                            }
                        case 27:
                            var0 = _closure2_slot0;
                            var5 = var0.height;
                            var8 = var0.width;
                            var0 = _closure2_slot1;
                            var6 = var0.x;
                            var9 = var0.y;
                            var7 = var0.width;
                            var2 = _closure2_slot2;
                            var0 = var2.x;
                            var4 = var2.y;
                            var1 = var2.width;
                            var2 = var2.height;
                            var4 = var4 - var9;
                            var6 = var0 - var6;
                            var0 = 2;
                            var1 = var1 / var0;
                            var1 = var6 + var1;
                            var0 = var8 / var0;
                            var6 = var1 - var0;
                            var0 = 12;
                            if (!(!(var6 < var0))) {
                                _fun57520_ip = 146;
                                continue _fun57520
                            }
                        case 118:
                            var10 = var6 + var8;
                            var9 = var7 - var0;
                            var1 = 0;
                            if (!(var10 > var9)) {
                                _fun57520_ip = 150;
                                continue _fun57520
                            }
                        case 132:
                            var7 = var7 - var6;
                            var7 = var7 - var8;
                            var1 = var7 - var0;
                            _fun57520_ip = 150;
                            continue _fun57520;
                        case 146:
                            var1 = var0 - var6;
                        case 150:
                            var0 = {};
                            var6 = var6 + var1;
                            var0.tooltipX = var6;
                            var7 = _closure2_slot3;
                            var6 = 'top';
                            if (!(var6 !== var7)) {
                                _fun57520_ip = 187;
                                continue _fun57520
                            }
                        case 173:
                            var6 = var4 + var2;
                            var2 = _closure2_slot4;
                            var2 = var6 + var2;
                            _fun57520_ip = 199;
                            continue _fun57520;
                        case 187:
                            var4 = var4 - var5;
                            var3 = _closure2_slot4;
                            var2 = var4 - var3;
                        case 199:
                            var0.tooltipY = var2;
                            var0.adjustmentX = var1;
                            return var0;
                        case 211:
                            var0 = {
                                'tooltipX': 0,
                                'tooltipY': 0,
                                'adjustmentX': 0
                            };
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 2]);