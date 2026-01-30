// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun99460: for (var _fun99460_ip = 0;;) switch (_fun99460_ip) {
        case 0:
            var5 = require;
            var2 = exports;
            var6 = dependencyMap;
            var _closure1_slot0 = var5;
            var _closure1_slot1 = var6;
            var3 = function() { // Original name: dateTimestampInSeconds, environment: var0
                var0 = global;
                var1 = var0.Date;
                var0 = var1.now;
                var1 = var0.bind(var1)();
                var0 = 1000;
                var0 = var1 / var0;
                return var0;
            };
            var _closure1_slot2 = var3;
            var13 = global;
            var8 = var13.Object;
            var7 = var8.defineProperty;
            var4 = {};
            var1 = true;
            var4.value = var1;
            var1 = '__esModule';
            var1 = var7.bind(var8)(var2, var1, var4);
            var1 = function() { // Original name: createUnixTimestampInSecondsFunc, environment: var0
                _fun99462: for (var _fun99462_ip = 0;;) switch (_fun99462_ip) {
                    case 0:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var2 = 0;
                        var3 = var3[var2];
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var2 = var2.GLOBAL_OBJ;
                        var2 = var2.performance;
                        var _closure2_slot0 = var2;
                        if (!var2) {
                            _fun99462_ip = 53;
                            continue _fun99462
                        }
                    case 45:
                        var3 = var2.now;
                        if (var3) {
                            _fun99462_ip = 59;
                            continue _fun99462
                        }
                    case 53:
                        var1 = _closure1_slot2;
                        return var1;
                    case 59:
                        var1 = global;
                        var3 = var1.Date;
                        var1 = var3.now;
                        var3 = var1.bind(var3)();
                        var1 = var2.now;
                        var1 = var1.bind(var2)();
                        var1 = var3 - var1;
                        var4 = var2.timeOrigin;
                        var3 = null;
                        if (!(var3 != var4)) {
                            _fun99462_ip = 107;
                            continue _fun99462
                        }
                    case 101:
                        var1 = var2.timeOrigin;
                    case 107:
                        var _closure2_slot1 = var1;
                        var0 = function() { // Environment: var0
                            var1 = _closure2_slot1;
                            var2 = _closure2_slot0;
                            var0 = var2.now;
                            var0 = var0.bind(var2)();
                            var1 = var1 + var0;
                            var0 = 1000;
                            var0 = var1 / var0;
                            return var0;
                        };
                        return var0;
                }
            };
            var0 = undefined;
            var1 = var1.bind(var0)();
            var2._browserPerformanceTimeOriginMode = var0;
            var4 = 0;
            var4 = var6[var4];
            var4 = var5.bind(var0)(var4);
            var4 = var4.GLOBAL_OBJ;
            var7 = var4.performance;
            if (!var7) {
                _fun99460_ip = 115;
                continue _fun99460
            }
        case 107:
            var4 = var7.now;
            if (var4) {
                _fun99460_ip = 132;
                continue _fun99460
            }
        case 115:
            var4 = 'none';
            var2._browserPerformanceTimeOriginMode = var4;
            var4 = undefined;
            _fun99460_ip = 328;
            continue _fun99460;
        case 132:
            var5 = var7.now;
            var12 = var5.bind(var7)();
            var6 = var13.Date;
            var5 = var6.now;
            var5 = var5.bind(var6)();
            var6 = var7.timeOrigin;
            var10 = 3600000;
            var9 = var10;
            if (!var6) {
                _fun99460_ip = 205;
                continue _fun99460
            }
        case 174:
            var11 = var13.Math;
            var8 = var11.abs;
            var6 = var7.timeOrigin;
            var6 = var6 + var12;
            var6 = var6 - var5;
            var9 = var8.bind(var11)(var6);
        case 205:
            var11 = var9 < var10;
            var6 = var7.timing;
            if (!var6) {
                _fun99460_ip = 230;
                continue _fun99460
            }
        case 218:
            var8 = var7.timing;
            var6 = var8.navigationStart;
        case 230:
            var15 = 'number';
            var14 = typeof var6;
            var8 = var10;
            if (!(var15 === var14)) {
                _fun99460_ip = 269;
                continue _fun99460
            }
        case 244:
            var14 = var13.Math;
            var13 = var14.abs;
            var12 = var6 + var12;
            var12 = var12 - var5;
            var8 = var13.bind(var14)(var12);
        case 269:
            if (var11) {
                _fun99460_ip = 290;
                continue _fun99460
            }
        case 272:
            if (!(!(var8 < var10))) {
                _fun99460_ip = 290;
                continue _fun99460
            }
        case 276:
            var10 = 'dateNow';
            var2._browserPerformanceTimeOriginMode = var10;
            _fun99460_ip = 325;
            continue _fun99460;
        case 290:
            if (!(!(var9 <= var8))) {
                _fun99460_ip = 306;
                continue _fun99460
            }
        case 294:
            var8 = 'navigationStart';
            var2._browserPerformanceTimeOriginMode = var8;
            _fun99460_ip = 322;
            continue _fun99460;
        case 306:
            var8 = 'timeOrigin';
            var2._browserPerformanceTimeOriginMode = var8;
            var6 = var7.timeOrigin;
        case 322:
            var5 = var6;
        case 325:
            var4 = var5;
        case 328:
            var2.browserPerformanceTimeOrigin = var4;
            var2.dateTimestampInSeconds = var3;
            var2.timestampInSeconds = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [12893]);