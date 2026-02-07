// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function() {
        var0 = global;
        var1 = var0.Date;
        var0 = var1.now;
        var1 = var0.bind(var1)();
        var0 = 1000;
        var0 = var1 / var0;
        return var0;
    };
    var _closure1_slot4 = var2;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var3 = var3.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var7 = 'Module';
    var3.value = var7;
    var3 = var5.bind(var6)(var1, var4, var3);
    var3 = function() {
        _fun8875: for (var _fun8875_ip = 0;;) switch (_fun8875_ip) {
            case 0:
                var1 = _closure1_slot3;
                if (var1) {
                    _fun8875_ip = 307;
                    continue _fun8875
                }
            case 13:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 0;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var1 = var1.GLOBAL_OBJ;
                var4 = var1.performance;
                var5 = null;
                if (!(var5 != var4)) {
                    _fun8875_ip = 284;
                    continue _fun8875
                }
            case 55:
                var1 = var4.now;
                if (!var1) {
                    _fun8875_ip = 284;
                    continue _fun8875
                }
            case 66:
                var1 = var4.now;
                var9 = var1.bind(var4)();
                var10 = global;
                var2 = var10.Date;
                var1 = var2.now;
                var7 = var1.bind(var2)();
                var2 = var4.timeOrigin;
                var1 = 3600000;
                var6 = var1;
                if (!var2) {
                    _fun8875_ip = 141;
                    continue _fun8875
                }
            case 110:
                var11 = var10.Math;
                var8 = var11.abs;
                var2 = var4.timeOrigin;
                var2 = var2 + var9;
                var2 = var2 - var7;
                var6 = var8.bind(var11)(var2);
            case 141:
                var8 = var6 < var1;
                var2 = var4.timing;
                var11 = var5 == var2;
                var5 = undefined;
                if (var11) {
                    _fun8875_ip = 166;
                    continue _fun8875
                }
            case 160:
                var5 = var2.navigationStart;
            case 166:
                var12 = 'number';
                var11 = typeof var5;
                var2 = var1;
                if (!(var12 === var11)) {
                    _fun8875_ip = 205;
                    continue _fun8875
                }
            case 180:
                var11 = var10.Math;
                var10 = var11.abs;
                var9 = var5 + var9;
                var9 = var9 - var7;
                var2 = var10.bind(var11)(var9);
            case 205:
                if (var8) {
                    _fun8875_ip = 232;
                    continue _fun8875
                }
            case 208:
                if (!(!(var2 < var1))) {
                    _fun8875_ip = 232;
                    continue _fun8875
                }
            case 212:
                var1 = new Array(2);
                var1[0] = var7;
                var7 = 'dateNow';
                var1[1] = var7;
                _fun8875_ip = 282;
                continue _fun8875;
            case 232:
                if (!(!(var6 <= var2))) {
                    _fun8875_ip = 254;
                    continue _fun8875
                }
            case 236:
                var2 = new Array(2);
                var2[0] = var5;
                var5 = 'navigationStart';
                var2[1] = var5;
                _fun8875_ip = 279;
                continue _fun8875;
            case 254:
                var5 = var4.timeOrigin;
                var4 = new Array(2);
                var4[0] = var5;
                var5 = 'timeOrigin';
                var4[1] = var5;
                var2 = var4;
            case 279:
                var1 = var2;
            case 282:
                _fun8875_ip = 303;
                continue _fun8875;
            case 284:
                var2 = new Array(2);
                var2[0] = var3;
                var3 = 'none';
                var2[1] = var3;
                var1 = var2;
            case 303:
                var _closure1_slot3 = var1;
            case 307:
                var1 = _closure1_slot3;
                var0 = 0;
                var0 = var1[var0];
                return var0;
        }
    };
    var1.browserPerformanceTimeOrigin = var3;
    var1.dateTimestampInSeconds = var2;
    var0 = function() {
        _fun8876: for (var _fun8876_ip = 0;;) switch (_fun8876_ip) {
            case 0:
                var2 = _closure1_slot2;
                var1 = null;
                if (!(var1 == var2)) {
                    _fun8876_ip = 32;
                    continue _fun8876
                }
            case 13:
                var2 = function() {
                    _fun8877: for (var _fun8877_ip = 0;;) switch (_fun8877_ip) {
                        case 0:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var2 = 0;
                            var3 = var3[var2];
                            var2 = undefined;
                            var2 = var4.bind(var2)(var3);
                            var2 = var2.GLOBAL_OBJ;
                            var2 = var2.performance;
                            var _closure3_slot0 = var2;
                            var3 = null;
                            if (!(var3 != var2)) {
                                _fun8877_ip = 82;
                                continue _fun8877
                            }
                        case 48:
                            var3 = var2.now;
                            if (!var3) {
                                _fun8877_ip = 82;
                                continue _fun8877
                            }
                        case 56:
                            var3 = var2.timeOrigin;
                            if (!var3) {
                                _fun8877_ip = 82;
                                continue _fun8877
                            }
                        case 65:
                            var2 = var2.timeOrigin;
                            var _closure3_slot1 = var2;
                            var1 = function() { // Environment: var1
                                var1 = _closure3_slot1;
                                var2 = _closure3_slot0;
                                var0 = var2.now;
                                var0 = var0.bind(var2)();
                                var1 = var1 + var0;
                                var0 = 1000;
                                var0 = var1 / var0;
                                return var0;
                            };
                            return var1;
                        case 82:
                            var0 = _closure1_slot4;
                            return var0;
                    }
                };
                var1 = undefined;
                var1 = var2.bind(var1)();
                var _closure1_slot2 = var1;
                _fun8876_ip = 36;
                continue _fun8876;
            case 32:
                var1 = _closure1_slot2;
            case 36:
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var1.timestampInSeconds = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [821]);