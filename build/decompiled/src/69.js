// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = global;
    var _closure1_slot0 = var2;
    var2 = function() {
        _fun1442: for (var _fun1442_ip = 0;;) switch (_fun1442_ip) {
            case 0:
                var0 = _closure1_slot0;
                var0 = var0.nativeTraceIsTracing;
                if (var0) {
                    _fun1442_ip = 43;
                    continue _fun1442
                }
            case 16:
                var0 = global;
                var3 = var0.Boolean;
                var0 = _closure1_slot0;
                var2 = var0.__RCTProfileIsProfiling;
                var0 = undefined;
                var0 = var3.bind(var0)(var2);
                _fun1442_ip = 62;
                continue _fun1442;
            case 43:
                var3 = _closure1_slot0;
                var2 = var3.nativeTraceIsTracing;
                var1 = _closure1_slot1;
                var0 = var2.bind(var3)(var1);
            case 62:
                return var0;
        }
    };
    var _closure1_slot3 = var2;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var1, var3, var4);
    var3 = 8192;
    var _closure1_slot1 = var3;
    var3 = 0;
    var _closure1_slot2 = var3;
    var1.isEnabled = var2;
    var2 = function arg0() {
        var0 = undefined;
        return var0;
    };
    var1.setEnabled = var2;
    var2 = function arg0, arg1() {
        _fun1444: for (var _fun1444_ip = 0;;) switch (_fun1444_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot3;
                var0 = undefined;
                var3 = var3.bind(var0)();
                if (!var3) {
                    _fun1444_ip = 61;
                    continue _fun1444
                }
            case 19:
                var4 = 'function';
                var3 = typeof var2;
                var5 = var2;
                if (!(var4 === var3)) {
                    _fun1444_ip = 37;
                    continue _fun1444
                }
            case 33:
                var5 = var2.bind(var0)();
            case 37:
                var4 = _closure1_slot0;
                var3 = var4.nativeTraceBeginSection;
                var2 = _closure1_slot1;
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var5, var1);
            case 61:
                return var0;
        }
    };
    var1.beginEvent = var2;
    var2 = function arg0() {
        _fun1445: for (var _fun1445_ip = 0;;) switch (_fun1445_ip) {
            case 0:
                var2 = _closure1_slot3;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (!var2) {
                    _fun1445_ip = 39;
                    continue _fun1445
                }
            case 16:
                var4 = _closure1_slot0;
                var3 = var4.nativeTraceEndSection;
                var2 = _closure1_slot1;
                var1 = arg0;
                var1 = var3.bind(var4)(var2, var1);
            case 39:
                return var0;
        }
    };
    var1.endEvent = var2;
    var2 = function arg0, arg1() {
        _fun1446: for (var _fun1446_ip = 0;;) switch (_fun1446_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot2;
                var4 = _closure1_slot3;
                var2 = undefined;
                var4 = var4.bind(var2)();
                if (!var4) {
                    _fun1446_ip = 82;
                    continue _fun1446
                }
            case 23:
                var4 = _closure1_slot2;
                var4 = var4 + 1;
                _closure1_slot2 = var4;
                var6 = 'function';
                var4 = typeof var3;
                var5 = var3;
                if (!(var6 === var4)) {
                    _fun1446_ip = 52;
                    continue _fun1446
                }
            case 48:
                var5 = var3.bind(var2)();
            case 52:
                var4 = _closure1_slot0;
                var3 = var4.nativeTraceBeginAsyncSection;
                var10 = _closure1_slot1;
                var7 = arg1;
                var11 = var4;
                var9 = var5;
                var8 = var0;
                var1 = var11[var3](var10, var9, var8, var7, var6);
            case 82:
                return var0;
        }
    };
    var1.beginAsyncEvent = var2;
    var2 = function arg0, arg1, arg2() {
        _fun1447: for (var _fun1447_ip = 0;;) switch (_fun1447_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot3;
                var0 = undefined;
                var3 = var3.bind(var0)();
                if (!var3) {
                    _fun1447_ip = 67;
                    continue _fun1447
                }
            case 19:
                var4 = 'function';
                var3 = typeof var2;
                var6 = var2;
                if (!(var4 === var3)) {
                    _fun1447_ip = 37;
                    continue _fun1447
                }
            case 33:
                var6 = var2.bind(var0)();
            case 37:
                var5 = _closure1_slot0;
                var4 = var5.nativeTraceEndAsyncSection;
                var10 = _closure1_slot1;
                var8 = arg1;
                var7 = arg2;
                var11 = var5;
                var9 = var6;
                var1 = var11[var4](var10, var9, var8, var7, var6);
            case 67:
                return var0;
        }
    };
    var1.endAsyncEvent = var2;
    var0 = function arg0, arg1() {
        _fun1448: for (var _fun1448_ip = 0;;) switch (_fun1448_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot3;
                var0 = undefined;
                var3 = var3.bind(var0)();
                if (!var3) {
                    _fun1448_ip = 74;
                    continue _fun1448
                }
            case 19:
                var4 = 'function';
                var3 = typeof var2;
                var5 = var2;
                if (!(var4 === var3)) {
                    _fun1448_ip = 37;
                    continue _fun1448
                }
            case 33:
                var5 = var2.bind(var0)();
            case 37:
                var2 = _closure1_slot0;
                var2 = var2.nativeTraceCounter;
                if (!var2) {
                    _fun1448_ip = 74;
                    continue _fun1448
                }
            case 50:
                var4 = _closure1_slot0;
                var3 = var4.nativeTraceCounter;
                var2 = _closure1_slot1;
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var5, var1);
            case 74:
                return var0;
        }
    };
    var1.counterEvent = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);