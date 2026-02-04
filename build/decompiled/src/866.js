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
    var2 = var2.Symbol;
    var3 = var2.toStringTag;
    var2 = {};
    var6 = 'Module';
    var2.value = var6;
    var2 = var4.bind(var5)(var1, var3, var2);
    var0 = function arg0, arg1, arg2() {
        _fun9142: for (var _fun9142_ip = 0;;) switch (_fun9142_ip) {
            case 0:
                var1 = arg0;
                var11 = arg1;
                var _closure2_slot0 = var11;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 0;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.hasSpansEnabled;
                var3 = var3.bind(var4)(var1);
                if (var3) {
                    _fun9142_ip = 62;
                    continue _fun9142
                }
            case 50:
                var3 = new Array(1);
                var4 = false;
                var3[0] = var4;
                return var3;
            case 62:
                var3 = var1.tracesSampler;
                var9 = 'function';
                var3 = typeof var3;
                if (!(var9 !== var3)) {
                    _fun9142_ip = 123;
                    continue _fun9142
                }
            case 79:
                var3 = var11.parentSampled;
                if (!(var2 === var3)) {
                    _fun9142_ip = 113;
                    continue _fun9142
                }
            case 89:
                var6 = var1.tracesSampleRate;
                var3 = undefined;
                var4 = undefined;
                if (!(var2 !== var6)) {
                    _fun9142_ip = 170;
                    continue _fun9142
                }
            case 103:
                var3 = var1.tracesSampleRate;
                var4 = true;
                _fun9142_ip = 170;
                continue _fun9142;
            case 113:
                var3 = var11.parentSampled;
                var4 = undefined;
                _fun9142_ip = 170;
                continue _fun9142;
            case 123:
                var6 = var1.tracesSampler;
                var7 = global;
                var10 = var7.Object;
                var8 = var10.assign;
                var7 = {};
                var5 = function arg0() {
                    _fun9143: for (var _fun9143_ip = 0;;) switch (_fun9143_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = _closure2_slot0;
                            var2 = var2.parentSampleRate;
                            var3 = 'number';
                            var2 = typeof var2;
                            if (!(var3 !== var2)) {
                                _fun9143_ip = 75;
                                continue _fun9143
                            }
                        case 27:
                            var2 = _closure2_slot0;
                            var2 = var2.parentSampled;
                            var3 = 'boolean';
                            var2 = typeof var2;
                            if (!(var3 === var2)) {
                                _fun9143_ip = 73;
                                continue _fun9143
                            }
                        case 48:
                            var2 = global;
                            var4 = var2.Number;
                            var2 = _closure2_slot0;
                            var3 = var2.parentSampled;
                            var2 = undefined;
                            var0 = var4.bind(var2)(var3);
                        case 73:
                            _fun9143_ip = 85;
                            continue _fun9143;
                        case 75:
                            var1 = _closure2_slot0;
                            var0 = var1.parentSampleRate;
                        case 85:
                            return var0;
                    }
                };
                var7.inheritOrSampleWith = var5;
                var5 = {};
                var5 = var8.bind(var10)(var5, var11, var7);
                var3 = var6.bind(var1)(var5);
                var4 = true;
            case 170:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var5 = 1;
                var5 = var7[var5];
                var6 = var6.bind(var2)(var5);
                var5 = var6.parseSampleRate;
                var5 = var5.bind(var6)(var3);
                if (!(var2 !== var5)) {
                    _fun9142_ip = 464;
                    continue _fun9142
                }
            case 208:
                if (var5) {
                    _fun9142_ip = 331;
                    continue _fun9142
                }
            case 211:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var6 = 2;
                var6 = var8[var6];
                var6 = var7.bind(var2)(var6);
                var6 = var6.DEBUG_BUILD;
                if (!var6) {
                    _fun9142_ip = 311;
                    continue _fun9142
                }
            case 240:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var6 = 3;
                var6 = var8[var6];
                var6 = var7.bind(var2)(var6);
                var7 = var6.debug;
                var6 = var7.log;
                var1 = var1.tracesSampler;
                var8 = 'a negative sampling decision was inherited or tracesSampleRate is set to 0';
                var1 = typeof var1;
                if (!(var9 === var1)) {
                    _fun9142_ip = 296;
                    continue _fun9142
                }
            case 290:
                var8 = 'tracesSampler returned 0 or false';
            case 296:
                var1 = '[Tracing] Discarding transaction because ';
                var1 = var1 + var8;
                var1 = var6.bind(var7)(var1);
            case 311:
                var1 = new Array(3);
                var6 = false;
                var1[0] = var6;
                var1[1] = var5;
                var1[2] = var4;
                return var1;
            case 331:
                var1 = arg2;
                var6 = var1 < var5;
                if (var6) {
                    _fun9142_ip = 446;
                    continue _fun9142
                }
            case 341:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var1 = 2;
                var1 = var8[var1];
                var1 = var7.bind(var2)(var1);
                var1 = var1.DEBUG_BUILD;
                if (!var1) {
                    _fun9142_ip = 446;
                    continue _fun9142
                }
            case 370:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var1 = 3;
                var1 = var8[var1];
                var1 = var7.bind(var2)(var1);
                var8 = var1.debug;
                var7 = var8.log;
                var1 = global;
                var9 = var1.Number;
                var11 = var9.bind(var2)(var3);
                var1 = var1.HermesInternal;
                var10 = var1.concat;
                var9 = "[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ";
                var1 = ')';
                var1 = var10.bind(var9)(var11, var1);
                var1 = var7.bind(var8)(var1);
            case 446:
                var1 = new Array(3);
                var1[0] = var6;
                var1[1] = var5;
                var1[2] = var4;
                return var1;
            case 464:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 2;
                var1 = var5[var1];
                var1 = var4.bind(var2)(var1);
                var1 = var1.DEBUG_BUILD;
                if (!var1) {
                    _fun9142_ip = 602;
                    continue _fun9142
                }
            case 493:
                var1 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 3;
                var0 = var4[var0];
                var0 = var1.bind(var2)(var0);
                var2 = var0.debug;
                var1 = var2.warn;
                var0 = global;
                var5 = var0.JSON;
                var4 = var5.stringify;
                var7 = var4.bind(var5)(var3);
                var5 = var0.JSON;
                var4 = var5.stringify;
                var3 = typeof var3;
                var13 = var4.bind(var5)(var3);
                var0 = var0.HermesInternal;
                var5 = var0.concat;
                var16 = '[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ';
                var14 = ' of type ';
                var12 = '.';
                var15 = var7;
                var0 = var16[var5](var15, var14, var13, var12, var11);
                var0 = var1.bind(var2)(var0);
            case 602:
                var0 = new Array(1);
                var1 = false;
                var0[0] = var1;
                return var0;
        }
    };
    var1.sampleSpan = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [853, 835, 823, 824]);