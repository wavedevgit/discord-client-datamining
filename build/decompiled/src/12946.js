// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var0 = function arg0, arg1() {
        _fun99307: for (var _fun99307_ip = 0;;) switch (_fun99307_ip) {
            case 0:
                var0 = arg0;
                var5 = arg1;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 0;
                var2 = var3[var2];
                var3 = undefined;
                var4 = var4.bind(var3)(var2);
                var2 = var4.hasTracingEnabled;
                var2 = var2.bind(var4)(var0);
                if (var2) {
                    _fun99307_ip = 56;
                    continue _fun99307
                }
            case 44:
                var2 = new Array(1);
                var4 = false;
                var2[0] = var4;
                return var2;
            case 56:
                var2 = var0.tracesSampler;
                var7 = 'function';
                var2 = typeof var2;
                if (!(var7 !== var2)) {
                    _fun99307_ip = 112;
                    continue _fun99307
                }
            case 73:
                var2 = var5.parentSampled;
                if (!(var3 === var2)) {
                    _fun99307_ip = 104;
                    continue _fun99307
                }
            case 83:
                var4 = var0.tracesSampleRate;
                var2 = 1;
                if (!(var3 !== var4)) {
                    _fun99307_ip = 102;
                    continue _fun99307
                }
            case 96:
                var2 = var0.tracesSampleRate;
            case 102:
                _fun99307_ip = 110;
                continue _fun99307;
            case 104:
                var2 = var5.parentSampled;
            case 110:
                _fun99307_ip = 123;
                continue _fun99307;
            case 112:
                var4 = var0.tracesSampler;
                var2 = var4.bind(var0)(var5);
            case 123:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 1;
                var4 = var6[var4];
                var5 = var5.bind(var3)(var4);
                var4 = var5.parseSampleRate;
                var5 = var4.bind(var5)(var2);
                var8 = var2;
                if (!(var3 !== var5)) {
                    _fun99307_ip = 449;
                    continue _fun99307
                }
            case 164:
                if (var5) {
                    _fun99307_ip = 286;
                    continue _fun99307
                }
            case 167:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 2;
                var2 = var6[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.DEBUG_BUILD;
                if (!var2) {
                    _fun99307_ip = 267;
                    continue _fun99307
                }
            case 196:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 3;
                var2 = var6[var2];
                var2 = var4.bind(var3)(var2);
                var4 = var2.logger;
                var2 = var4.log;
                var0 = var0.tracesSampler;
                var6 = 'a negative sampling decision was inherited or tracesSampleRate is set to 0';
                var0 = typeof var0;
                if (!(var7 === var0)) {
                    _fun99307_ip = 252;
                    continue _fun99307
                }
            case 246:
                var6 = 'tracesSampler returned 0 or false';
            case 252:
                var0 = '[Tracing] Discarding transaction because ';
                var0 = var0 + var6;
                var0 = var2.bind(var4)(var0);
            case 267:
                var0 = new Array(2);
                var2 = false;
                var0[0] = var2;
                var0[1] = var5;
                _fun99307_ip = 447;
                continue _fun99307;
            case 286:
                var2 = global;
                var6 = var2.Math;
                var4 = var6.random;
                var4 = var4.bind(var6)();
                if (!(!(var4 < var5))) {
                    _fun99307_ip = 427;
                    continue _fun99307
                }
            case 308:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 2;
                var4 = var7[var4];
                var4 = var6.bind(var3)(var4);
                var4 = var4.DEBUG_BUILD;
                if (!var4) {
                    _fun99307_ip = 411;
                    continue _fun99307
                }
            case 337:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 3;
                var4 = var7[var4];
                var4 = var6.bind(var3)(var4);
                var6 = var4.logger;
                var4 = var6.log;
                var7 = var2.Number;
                var9 = var7.bind(var3)(var8);
                var2 = var2.HermesInternal;
                var8 = var2.concat;
                var7 = "[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ";
                var2 = ')';
                var2 = var8.bind(var7)(var9, var2);
                var2 = var4.bind(var6)(var2);
            case 411:
                var2 = new Array(2);
                var4 = false;
                var2[0] = var4;
                var2[1] = var5;
                _fun99307_ip = 444;
                continue _fun99307;
            case 427:
                var4 = new Array(2);
                var6 = true;
                var4[0] = var6;
                var4[1] = var5;
                var2 = var4;
            case 444:
                var0 = var2;
            case 447:
                _fun99307_ip = 533;
                continue _fun99307;
            case 449:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 2;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.DEBUG_BUILD;
                if (!var2) {
                    _fun99307_ip = 520;
                    continue _fun99307
                }
            case 478:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 3;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var3 = var1.logger;
                var2 = var3.warn;
                var1 = '[Tracing] Discarding transaction because of invalid sample rate.';
                var1 = var2.bind(var3)(var1);
            case 520:
                var1 = new Array(1);
                var2 = false;
                var1[0] = var2;
                var0 = var1;
            case 533:
                return var0;
        }
    };
    var1.sampleSpan = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12939, 12947, 12935, 12869]);