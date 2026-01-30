// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function(arg0) { // Original name: extractTraceparentData, environment: var0
        _fun8836: for (var _fun8836_ip = 0;;) switch (_fun8836_ip) {
            case 0:
                var2 = arg0;
                if (!var2) {
                    _fun8836_ip = 27;
                    continue _fun8836
                }
            case 6:
                var1 = var2.match;
                var0 = _closure1_slot2;
                var2 = var1.bind(var2)(var0);
                if (var2) {
                    _fun8836_ip = 31;
                    continue _fun8836
                }
            case 27:
                var0 = undefined;
                return var0;
            case 31:
                var0 = 3;
                var4 = var2[var0];
                var3 = '1';
                var1 = true;
                if (!(var3 !== var4)) {
                    _fun8836_ip = 68;
                    continue _fun8836
                }
            case 50:
                var3 = var2[var0];
                var1 = undefined;
                var0 = '0';
                if (!(var0 === var3)) {
                    _fun8836_ip = 68;
                    continue _fun8836
                }
            case 66:
                var1 = false;
            case 68:
                var0 = {};
                var3 = 1;
                var3 = var2[var3];
                var0.traceId = var3;
                var0.parentSampled = var1;
                var1 = 2;
                var1 = var2[var1];
                var0.parentSpanId = var1;
                return var0;
        }
    };
    var _closure1_slot3 = var2;
    var3 = global;
    var7 = var3.Object;
    var6 = var7.defineProperty;
    var4 = var3.Symbol;
    var5 = var4.toStringTag;
    var4 = {};
    var8 = 'Module';
    var4.value = var8;
    var4 = var6.bind(var7)(var1, var5, var4);
    var5 = var3.RegExp;
    var3 = var5.prototype;
    var4 = Object.create(var3, {
        constructor: {
            value: var5
        }
    });
    var11 = '^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$';
    var12 = var4;
    var3 = new var12[var5](var11, var10);
    var3 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot2 = var3;
    var1.TRACEPARENT_REGEXP = var3;
    var1.extractTraceparentData = var2;
    var2 = function() { // Original name: generateSentryTraceHeader, environment: var0
        _fun8837: for (var _fun8837_ip = 0;;) switch (_fun8837_ip) {
            case 0:
                var0 = undefined;
                var3 = undefined;
                var2 = arguments.length;
                var1 = 0;
                if (!(var2 > var1)) {
                    _fun8837_ip = 21;
                    continue _fun8837
                }
            case 13:
                var2 = arguments[var1];
                if (!(var0 === var2)) {
                    _fun8837_ip = 56;
                    continue _fun8837
                }
            case 21:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 1;
                var2 = var5[var2];
                var4 = var4.bind(var0)(var2);
                var2 = var4.generateTraceId;
                var5 = var2.bind(var4)();
                _fun8837_ip = 60;
                continue _fun8837;
            case 56:
                var5 = arguments[var1];
            case 60:
                var2 = arguments.length;
                var1 = 1;
                if (!(var2 > var1)) {
                    _fun8837_ip = 78;
                    continue _fun8837
                }
            case 70:
                var2 = arguments[var1];
                if (!(var0 === var2)) {
                    _fun8837_ip = 110;
                    continue _fun8837
                }
            case 78:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var1];
                var4 = var4.bind(var0)(var2);
                var2 = var4.generateSpanId;
                var4 = var2.bind(var4)();
                _fun8837_ip = 114;
                continue _fun8837;
            case 110:
                var4 = arguments[var1];
            case 114:
                var1 = arguments.length;
                var2 = 2;
                var6 = var1 > var2;
                var1 = undefined;
                if (!var6) {
                    _fun8837_ip = 133;
                    continue _fun8837
                }
            case 129:
                var1 = arguments[var2];
            case 133:
                var3 = '';
                var2 = var3;
                if (!(var0 !== var1)) {
                    _fun8837_ip = 160;
                    continue _fun8837
                }
            case 144:
                var0 = '-0';
                if (!var1) {
                    _fun8837_ip = 157;
                    continue _fun8837
                }
            case 153:
                var0 = '-1';
            case 157:
                var2 = var0;
            case 160:
                var0 = global;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var9 = '-';
                var11 = var3;
                var10 = var5;
                var8 = var4;
                var7 = var2;
                var0 = var11[var1](var10, var9, var8, var7, var6);
                return var0;
        }
    };
    var1.generateSentryTraceHeader = var2;
    var2 = function() { // Original name: generateTraceparentHeader, environment: var0
        _fun8838: for (var _fun8838_ip = 0;;) switch (_fun8838_ip) {
            case 0:
                var0 = undefined;
                var2 = undefined;
                var3 = arguments.length;
                var1 = 0;
                if (!(var3 > var1)) {
                    _fun8838_ip = 21;
                    continue _fun8838
                }
            case 13:
                var3 = arguments[var1];
                if (!(var0 === var3)) {
                    _fun8838_ip = 56;
                    continue _fun8838
                }
            case 21:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 1;
                var3 = var5[var3];
                var4 = var4.bind(var0)(var3);
                var3 = var4.generateTraceId;
                var5 = var3.bind(var4)();
                _fun8838_ip = 60;
                continue _fun8838;
            case 56:
                var5 = arguments[var1];
            case 60:
                var3 = arguments.length;
                var1 = 1;
                if (!(var3 > var1)) {
                    _fun8838_ip = 78;
                    continue _fun8838
                }
            case 70:
                var3 = arguments[var1];
                if (!(var0 === var3)) {
                    _fun8838_ip = 110;
                    continue _fun8838
                }
            case 78:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var1];
                var4 = var4.bind(var0)(var3);
                var3 = var4.generateSpanId;
                var4 = var3.bind(var4)();
                _fun8838_ip = 114;
                continue _fun8838;
            case 110:
                var4 = arguments[var1];
            case 114:
                var3 = arguments.length;
                var1 = 2;
                var3 = var3 > var1;
                var0 = undefined;
                if (!var3) {
                    _fun8838_ip = 133;
                    continue _fun8838
                }
            case 129:
                var0 = arguments[var1];
            case 133:
                var3 = '00';
                if (!var0) {
                    _fun8838_ip = 144;
                    continue _fun8838
                }
            case 140:
                var3 = '01';
            case 144:
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var11 = '00-';
                var0 = '-';
                var10 = var5;
                var9 = var0;
                var8 = var4;
                var7 = var0;
                var6 = var3;
                var0 = var11[var2](var10, var9, var8, var7, var6, var5);
                return var0;
        }
    };
    var1.generateTraceparentHeader = var2;
    var2 = function(arg0, arg1) { // Original name: propagationContextFromHeaders, environment: var0
        _fun8839: for (var _fun8839_ip = 0;;) switch (_fun8839_ip) {
            case 0:
                var2 = _closure1_slot3;
                var3 = undefined;
                var0 = arg0;
                var5 = var2.bind(var3)(var0);
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 0;
                var0 = var4[var0];
                var4 = var2.bind(var3)(var0);
                var2 = var4.baggageHeaderToDynamicSamplingContext;
                var0 = arg1;
                var4 = var2.bind(var4)(var0);
                var0 = null;
                if (!(var0 != var5)) {
                    _fun8839_ip = 333;
                    continue _fun8839
                }
            case 59:
                var2 = var5.traceId;
                if (!var2) {
                    _fun8839_ip = 333;
                    continue _fun8839
                }
            case 71:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var8 = 2;
                var2 = var2[var8];
                var7 = var6.bind(var3)(var2);
                var6 = var7.parseSampleRate;
                var9 = var0 == var4;
                var2 = undefined;
                if (var9) {
                    _fun8839_ip = 112;
                    continue _fun8839
                }
            case 106:
                var2 = var4.sample_rand;
            case 112:
                var2 = var6.bind(var7)(var2);
                if (!(var3 === var2)) {
                    _fun8839_ip = 263;
                    continue _fun8839
                }
            case 124:
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var8];
                var8 = var7.bind(var3)(var6);
                var7 = var8.parseSampleRate;
                var9 = var0 == var4;
                var6 = undefined;
                if (var9) {
                    _fun8839_ip = 162;
                    continue _fun8839
                }
            case 156:
                var6 = var4.sample_rate;
            case 162:
                var8 = var7.bind(var8)(var6);
                if (!var8) {
                    _fun8839_ip = 189;
                    continue _fun8839
                }
            case 170:
                var6 = var0 == var5;
                var0 = undefined;
                if (var6) {
                    _fun8839_ip = 185;
                    continue _fun8839
                }
            case 179:
                var0 = var5.parentSampled;
            case 185:
                if (!(var3 === var0)) {
                    _fun8839_ip = 209;
                    continue _fun8839
                }
            case 189:
                var0 = global;
                var6 = var0.Math;
                var0 = var6.random;
                var0 = var0.bind(var6)();
                _fun8839_ip = 260;
                continue _fun8839;
            case 209:
                var6 = var5.parentSampled;
                var7 = global;
                var9 = var7.Math;
                var7 = var9.random;
                var7 = var7.bind(var9)();
                if (var6) {
                    _fun8839_ip = 253;
                    continue _fun8839
                }
            case 236:
                var6 = 1;
                var6 = var6 - var8;
                var6 = var7 * var6;
                var6 = var8 + var6;
                _fun8839_ip = 257;
                continue _fun8839;
            case 253:
                var6 = var7 * var8;
            case 257:
                var0 = var6;
            case 260:
                var2 = var0;
            case 263:
                if (!var4) {
                    _fun8839_ip = 281;
                    continue _fun8839
                }
            case 266:
                var0 = var2.toString;
                var0 = var0.bind(var2)();
                var4.sample_rand = var0;
            case 281:
                var0 = {};
                var6 = var5.traceId;
                var0.traceId = var6;
                var6 = var5.parentSpanId;
                var0.parentSpanId = var6;
                var5 = var5.parentSampled;
                var0.sampled = var5;
                if (var4) {
                    _fun8839_ip = 321;
                    continue _fun8839
                }
            case 319:
                var4 = {};
            case 321:
                var0.dsc = var4;
                var0.sampleRand = var2;
                return var0;
            case 333:
                var0 = {};
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 1;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.generateTraceId;
                var1 = var1.bind(var2)();
                var0.traceId = var1;
                var1 = global;
                var2 = var1.Math;
                var1 = var2.random;
                var1 = var1.bind(var2)();
                var0.sampleRand = var1;
                return var0;
        }
    };
    var1.propagationContextFromHeaders = var2;
    var0 = function(arg0, arg1) { // Original name: shouldContinueTrace, environment: var0
        _fun8840: for (var _fun8840_ip = 0;;) switch (_fun8840_ip) {
            case 0:
                var2 = arg0;
                var8 = arg1;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 3;
                var0 = var3[var0];
                var3 = undefined;
                var4 = var4.bind(var3)(var0);
                var0 = var4.extractOrgIdFromClient;
                var7 = var0.bind(var4)(var2);
                if (!var8) {
                    _fun8840_ip = 55;
                    continue _fun8840
                }
            case 45:
                if (!var7) {
                    _fun8840_ip = 55;
                    continue _fun8840
                }
            case 48:
                if (!(var8 === var7)) {
                    _fun8840_ip = 191;
                    continue _fun8840
                }
            case 55:
                var0 = var2.getOptions;
                var0 = var0.bind(var2)();
                var0 = var0.strictTraceContinuation;
                if (var0) {
                    _fun8840_ip = 76;
                    continue _fun8840
                }
            case 74:
                var0 = false;
            case 76:
                var0 = !var0;
                if (var0) {
                    _fun8840_ip = 109;
                    continue _fun8840
                }
            case 82:
                var2 = var8;
                if (!var2) {
                    _fun8840_ip = 91;
                    continue _fun8840
                }
            case 88:
                var2 = !var7;
            case 91:
                if (var2) {
                    _fun8840_ip = 106;
                    continue _fun8840
                }
            case 94:
                var4 = !var8;
                if (!var4) {
                    _fun8840_ip = 103;
                    continue _fun8840
                }
            case 100:
                var4 = var7;
            case 103:
                var2 = var4;
            case 106:
                var0 = !var2;
            case 109:
                if (var0) {
                    _fun8840_ip = 189;
                    continue _fun8840
                }
            case 112:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 4;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var5 = var2.debug;
                var4 = var5.log;
                var2 = global;
                var2 = var2.HermesInternal;
                var10 = var2.concat;
                var15 = 'Starting a new trace because strict trace continuation is enabled but one org ID is missing (incoming baggage: ';
                var13 = ', Sentry client: ';
                var11 = ')';
                var14 = var8;
                var12 = var7;
                var2 = var15[var10](var14, var13, var12, var11, var10);
                var2 = var4.bind(var5)(var2);
                var0 = false;
            case 189:
                _fun8840_ip = 268;
                continue _fun8840;
            case 191:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 4;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var3 = var1.debug;
                var2 = var3.log;
                var1 = global;
                var1 = var1.HermesInternal;
                var6 = var1.concat;
                var15 = "Won't continue trace because org IDs don't match (incoming baggage: ";
                var13 = ', SDK options: ';
                var11 = ')';
                var14 = var8;
                var12 = var7;
                var1 = var15[var6](var14, var13, var12, var11, var10);
                var1 = var2.bind(var3)(var1);
                var0 = false;
            case 268:
                return var0;
        }
    };
    var1.shouldContinueTrace = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [834, 829, 835, 836, 824]);