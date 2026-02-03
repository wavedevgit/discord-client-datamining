// hooks/useCountdown.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.useCallback;
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'hooks/useCountdown.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun57790: for (var _fun57790_ip = 0;;) switch (_fun57790_ip) {
            case 0:
                var11 = arg0;
                var5 = arguments[1];
                var9 = arguments[2];
                var6 = arguments[3];
                var _closure2_slot0 = var11;
                var4 = undefined;
                if (!(var5 === var4)) {
                    _fun57790_ip = 30;
                    continue _fun57790
                }
            case 24:
                var5 = 1000;
            case 30:
                var _closure2_slot1 = var9;
                if (!(var6 === var4)) {
                    _fun57790_ip = 40;
                    continue _fun57790
                }
            case 38:
                var6 = false;
            case 40:
                var _closure2_slot2 = var6;
                var _closure2_slot3 = var4;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 1;
                var0 = var7[var0];
                var10 = var8.bind(var4)(var0);
                var3 = var10.diffAsUnits;
                var0 = global;
                var12 = var0.Date;
                var0 = var12.now;
                var0 = var0.bind(var12)();
                var0 = var3.bind(var10)(var0, var11);
                var3 = 2;
                var3 = var7[var3];
                var8 = var8.bind(var4)(var3);
                var3 = var8.useForceUpdate;
                var10 = var3.bind(var8)();
                _closure2_slot3 = var10;
                var8 = _closure1_slot3;
                var3 = new Array(4);
                var3[0] = var11;
                var3[1] = var6;
                var3[2] = var10;
                var3[3] = var9;
                var2 = function() { // Environment: var2
                    _fun57791: for (var _fun57791_ip = 0;;) switch (_fun57791_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 1;
                            var1 = var1[var0];
                            var0 = undefined;
                            var5 = var2.bind(var0)(var1);
                            var4 = var5.diffAsUnits;
                            var1 = global;
                            var2 = var1.Date;
                            var1 = var2.now;
                            var3 = var1.bind(var2)();
                            var2 = _closure2_slot0;
                            var3 = var4.bind(var5)(var3, var2);
                            var2 = var3.days;
                            var4 = 0;
                            var2 = var4 === var2;
                            if (!var2) {
                                _fun57791_ip = 86;
                                continue _fun57791
                            }
                        case 76:
                            var5 = var3.hours;
                            var2 = var4 === var5;
                        case 86:
                            if (!var2) {
                                _fun57791_ip = 99;
                                continue _fun57791
                            }
                        case 89:
                            var5 = var3.minutes;
                            var2 = var4 === var5;
                        case 99:
                            if (!var2) {
                                _fun57791_ip = 112;
                                continue _fun57791
                            }
                        case 102:
                            var3 = var3.seconds;
                            var2 = var4 === var3;
                        case 112:
                            if (var2) {
                                _fun57791_ip = 119;
                                continue _fun57791
                            }
                        case 115:
                            var2 = _closure2_slot2;
                        case 119:
                            if (var2) {
                                _fun57791_ip = 148;
                                continue _fun57791
                            }
                        case 122:
                            var2 = _closure2_slot3;
                            var2 = var2.bind(var0)();
                            var3 = _closure2_slot1;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun57791_ip = 148;
                                continue _fun57791
                            }
                        case 140:
                            var1 = _closure2_slot1;
                            var1 = var1.bind(var0)();
                        case 148:
                            return var0;
                    }
                };
                var3 = var8.bind(var4)(var2, var3);
                var2 = _closure1_slot1;
                var1 = 3;
                var1 = var7[var1];
                var2 = var2.bind(var4)(var1);
                var1 = null;
                if (var6) {
                    _fun57790_ip = 185;
                    continue _fun57790
                }
            case 182:
                var1 = var5;
            case 185:
                var1 = var2.bind(var4)(var3, var1);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3132, 7060, 7065, 2]);