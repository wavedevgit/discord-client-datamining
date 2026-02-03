// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun58777: for (var _fun58777_ip = 0;;) switch (_fun58777_ip) {
        case 0:
            var5 = require;
            var2 = exports;
            var6 = dependencyMap;
            var _closure1_slot0 = var5;
            var _closure1_slot1 = var6;
            var3 = function() {
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
            var1 = function() {
                _fun58779: for (var _fun58779_ip = 0;;) switch (_fun58779_ip) {
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
                            _fun58779_ip = 53;
                            continue _fun58779
                        }
                    case 45:
                        var3 = var2.now;
                        if (var3) {
                            _fun58779_ip = 59;
                            continue _fun58779
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
                            _fun58779_ip = 107;
                            continue _fun58779
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
                _fun58777_ip = 111;
                continue _fun58777
            }
        case 103:
            var4 = var7.now;
            if (var4) {
                _fun58777_ip = 128;
                continue _fun58777
            }
        case 111:
            var4 = 'none';
            var2._browserPerformanceTimeOriginMode = var4;
            var4 = undefined;
            _fun58777_ip = 324;
            continue _fun58777;
        case 128:
            var5 = var7.now;
            var12 = var5.bind(var7)();
            var6 = var13.Date;
            var5 = var6.now;
            var5 = var5.bind(var6)();
            var6 = var7.timeOrigin;
            var10 = 3600000;
            var9 = var10;
            if (!var6) {
                _fun58777_ip = 201;
                continue _fun58777
            }
        case 170:
            var11 = var13.Math;
            var8 = var11.abs;
            var6 = var7.timeOrigin;
            var6 = var6 + var12;
            var6 = var6 - var5;
            var9 = var8.bind(var11)(var6);
        case 201:
            var11 = var9 < var10;
            var6 = var7.timing;
            if (!var6) {
                _fun58777_ip = 226;
                continue _fun58777
            }
        case 214:
            var8 = var7.timing;
            var6 = var8.navigationStart;
        case 226:
            var15 = 'number';
            var14 = typeof var6;
            var8 = var10;
            if (!(var15 === var14)) {
                _fun58777_ip = 265;
                continue _fun58777
            }
        case 240:
            var14 = var13.Math;
            var13 = var14.abs;
            var12 = var6 + var12;
            var12 = var12 - var5;
            var8 = var13.bind(var14)(var12);
        case 265:
            if (var11) {
                _fun58777_ip = 286;
                continue _fun58777
            }
        case 268:
            if (!(!(var8 < var10))) {
                _fun58777_ip = 286;
                continue _fun58777
            }
        case 272:
            var10 = 'dateNow';
            var2._browserPerformanceTimeOriginMode = var10;
            _fun58777_ip = 321;
            continue _fun58777;
        case 286:
            if (!(!(var9 <= var8))) {
                _fun58777_ip = 302;
                continue _fun58777
            }
        case 290:
            var8 = 'navigationStart';
            var2._browserPerformanceTimeOriginMode = var8;
            _fun58777_ip = 318;
            continue _fun58777;
        case 302:
            var8 = 'timeOrigin';
            var2._browserPerformanceTimeOriginMode = var8;
            var6 = var7.timeOrigin;
        case 318:
            var5 = var6;
        case 321:
            var4 = var5;
        case 324:
            var2.browserPerformanceTimeOrigin = var4;
            var2.dateTimestampInSeconds = var3;
            var2.timestampInSeconds = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [7165]);