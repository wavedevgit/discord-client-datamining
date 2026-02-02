// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var3 = function arg0, arg1() {
        _fun99263: for (var _fun99263_ip = 0;;) switch (_fun99263_ip) {
            case 0:
                var3 = arg1;
                var0 = var3.getOptions;
                var5 = var0.bind(var3)();
                var0 = var3.getDsn;
                var0 = var0.bind(var3)();
                if (var0) {
                    _fun99263_ip = 28;
                    continue _fun99263
                }
            case 26:
                var0 = {};
            case 28:
                var4 = var0.publicKey;
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 0;
                var0 = var2[var0];
                var9 = undefined;
                var2 = var1.bind(var9)(var0);
                var1 = var2.dropUndefinedKeys;
                var0 = {};
                var6 = var5.environment;
                if (var6) {
                    _fun99263_ip = 101;
                    continue _fun99263
                }
            case 75:
                var8 = _closure1_slot0;
                var10 = _closure1_slot1;
                var7 = 1;
                var7 = var10[var7];
                var7 = var8.bind(var9)(var7);
                var6 = var7.DEFAULT_ENVIRONMENT;
            case 101:
                var0.environment = var6;
                var5 = var5.release;
                var0.release = var5;
                var0.public_key = var4;
                var4 = arg0;
                var0.trace_id = var4;
                var0 = var1.bind(var2)(var0);
                var2 = var3.emit;
                var1 = 'createDsc';
                var1 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot3 = var3;
    var2 = function arg0() {
        _fun99264: for (var _fun99264_ip = 0;;) switch (_fun99264_ip) {
            case 0:
                var4 = arg0;
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 2;
                var0 = var2[var0];
                var7 = undefined;
                var1 = var1.bind(var7)(var0);
                var0 = var1.getClient;
                var6 = var0.bind(var1)();
                if (var6) {
                    _fun99264_ip = 45;
                    continue _fun99264
                }
            case 41:
                var0 = {};
                return var0;
            case 45:
                var1 = _closure1_slot3;
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var9 = 3;
                var0 = var0[var9];
                var2 = var2.bind(var7)(var0);
                var0 = var2.spanToJSON;
                var0 = var0.bind(var2)(var4);
                var0 = var0.trace_id;
                if (var0) {
                    _fun99264_ip = 93;
                    continue _fun99264
                }
            case 89:
                var0 = '';
            case 93:
                var2 = var1.bind(var7)(var0, var6);
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var9];
                var1 = var1.bind(var7)(var0);
                var0 = var1.getRootSpan;
                var5 = var0.bind(var1)(var4);
                var0 = _closure1_slot2;
                var0 = var5[var0];
                if (var0) {
                    _fun99264_ip = 448;
                    continue _fun99264
                }
            case 141:
                var1 = var5.spanContext;
                var1 = var1.bind(var5)();
                var8 = var1.traceState;
                var10 = var8;
                if (!var10) {
                    _fun99264_ip = 179;
                    continue _fun99264
                }
            case 163:
                var4 = var8.get;
                var1 = 'sentry.dsc';
                var10 = var4.bind(var8)(var1);
            case 179:
                var1 = var10;
                if (!var1) {
                    _fun99264_ip = 215;
                    continue _fun99264
                }
            case 185:
                var8 = _closure1_slot0;
                var11 = _closure1_slot1;
                var4 = 0;
                var4 = var11[var4];
                var8 = var8.bind(var7)(var4);
                var4 = var8.baggageHeaderToDynamicSamplingContext;
                var1 = var4.bind(var8)(var10);
            case 215:
                if (var1) {
                    _fun99264_ip = 446;
                    continue _fun99264
                }
            case 221:
                var8 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var9];
                var8 = var8.bind(var7)(var4);
                var4 = var8.spanToJSON;
                var4 = var4.bind(var8)(var5);
                var10 = var4.data;
                if (var10) {
                    _fun99264_ip = 259;
                    continue _fun99264
                }
            case 257:
                var10 = {};
            case 259:
                var11 = _closure1_slot0;
                var8 = _closure1_slot1;
                var12 = 4;
                var8 = var8[var12];
                var8 = var11.bind(var7)(var8);
                var8 = var8.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE;
                var13 = var10[var8];
                var8 = null;
                if (!(var8 != var13)) {
                    _fun99264_ip = 323;
                    continue _fun99264
                }
            case 295:
                var8 = global;
                var8 = var8.HermesInternal;
                var11 = var8.concat;
                var8 = '';
                var8 = var11.bind(var8)(var13);
                var2.sample_rate = var8;
            case 323:
                var11 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var12];
                var8 = var11.bind(var7)(var8);
                var8 = var8.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
                var10 = var10[var8];
                var4 = var4.description;
                var8 = 'url';
                var8 = var8 !== var10;
                if (!var8) {
                    _fun99264_ip = 369;
                    continue _fun99264
                }
            case 366:
                var8 = var4;
            case 369:
                if (!var8) {
                    _fun99264_ip = 378;
                    continue _fun99264
                }
            case 372:
                var2.transaction = var4;
            case 378:
                var4 = global;
                var4 = var4.String;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var9];
                var8 = var8.bind(var7)(var3);
                var3 = var8.spanIsSampled;
                var3 = var3.bind(var8)(var5);
                var3 = var4.bind(var7)(var3);
                var2.sampled = var3;
                var4 = var6.emit;
                var3 = 'createDsc';
                var3 = var4.bind(var6)(var3, var2, var5);
                return var2;
            case 446:
                return var1;
            case 448:
                return var0;
        }
    };
    var _closure1_slot4 = var2;
    var4 = global;
    var7 = var4.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var4 = true;
    var5.value = var4;
    var4 = '__esModule';
    var4 = var6.bind(var7)(var1, var4, var5);
    var4 = '_frozenDsc';
    var _closure1_slot2 = var4;
    var4 = function arg0, arg1() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 0;
        var2 = var2[var0];
        var0 = undefined;
        var5 = var3.bind(var0)(var2);
        var4 = var5.addNonEnumerableProperty;
        var3 = _closure1_slot2;
        var2 = arg0;
        var1 = arg1;
        var1 = var4.bind(var5)(var2, var3, var1);
        return var0;
    };
    var1.freezeDscOnSpan = var4;
    var1.getDynamicSamplingContextFromClient = var3;
    var1.getDynamicSamplingContextFromSpan = var2;
    var0 = function arg0() {
        var2 = _closure1_slot4;
        var3 = undefined;
        var1 = arg0;
        var2 = var2.bind(var3)(var1);
        var1 = _closure1_slot0;
        var4 = _closure1_slot1;
        var0 = 0;
        var0 = var4[var0];
        var1 = var1.bind(var3)(var0);
        var0 = var1.dynamicSamplingContextToSentryBaggageHeader;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1.spanToBaggageHeader = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12825, 12900, 12890, 12879, 12880]);