// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var3 = function(arg0, arg1) { // Original name: getDynamicSamplingContextFromClient, environment: var0
        _fun9015: for (var _fun9015_ip = 0;;) switch (_fun9015_ip) {
            case 0:
                var3 = arg1;
                var0 = var3.getOptions;
                var2 = var0.bind(var3)();
                var0 = var3.getDsn;
                var0 = var0.bind(var3)();
                if (var0) {
                    _fun9015_ip = 28;
                    continue _fun9015
                }
            case 26:
                var0 = {};
            case 28:
                var1 = var0.publicKey;
                var0 = {};
                var4 = var2.environment;
                if (var4) {
                    _fun9015_ip = 76;
                    continue _fun9015
                }
            case 45:
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var5 = 1;
                var6 = var6[var5];
                var5 = undefined;
                var5 = var7.bind(var5)(var6);
                var4 = var5.DEFAULT_ENVIRONMENT;
            case 76:
                var0.environment = var4;
                var2 = var2.release;
                var0.release = var2;
                var0.public_key = var1;
                var1 = arg0;
                var0.trace_id = var1;
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.extractOrgIdFromClient;
                var1 = var1.bind(var2)(var3);
                var0.org_id = var1;
                var2 = var3.emit;
                var1 = 'createDsc';
                var1 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot3 = var3;
    var2 = function(arg0) { // Original name: getDynamicSamplingContextFromSpan, environment: var0
        _fun9016: for (var _fun9016_ip = 0;;) switch (_fun9016_ip) {
            case 0:
                var14 = arg0;
                var2 = function(arg0) { // Original name: applyLocalSampleRateToDsc, environment: var3
                    _fun9017: for (var _fun9017_ip = 0;;) switch (_fun9017_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = _closure2_slot0;
                            var3 = 'number';
                            var2 = typeof var2;
                            var2 = var3 !== var2;
                            if (!var2) {
                                _fun9017_ip = 39;
                                continue _fun9017
                            }
                        case 24:
                            var3 = _closure2_slot0;
                            var4 = 'string';
                            var3 = typeof var3;
                            var2 = var4 !== var3;
                        case 39:
                            if (var2) {
                                _fun9017_ip = 74;
                                continue _fun9017
                            }
                        case 42:
                            var3 = _closure2_slot0;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var2 = var1.concat;
                            var1 = '';
                            var1 = var2.bind(var1)(var3);
                            var0.sample_rate = var1;
                        case 74:
                            return var0;
                    }
                };
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 3;
                var0 = var1[var0];
                var1 = undefined;
                var4 = var4.bind(var1)(var0);
                var0 = var4.getClient;
                var8 = var0.bind(var4)();
                if (var8) {
                    _fun9016_ip = 52;
                    continue _fun9016
                }
            case 48:
                var0 = {};
                return var0;
            case 52:
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var13 = 4;
                var5 = var0[var13];
                var6 = var4.bind(var1)(var5);
                var5 = var6.getRootSpan;
                var7 = var5.bind(var6)(var14);
                var0 = var0[var13];
                var4 = var4.bind(var1)(var0);
                var0 = var4.spanToJSON;
                var5 = var0.bind(var4)(var7);
                var11 = var5.data;
                var0 = var7.spanContext;
                var0 = var0.bind(var7)();
                var12 = var0.traceState;
                var6 = null;
                var4 = var6 == var12;
                var0 = undefined;
                if (var4) {
                    _fun9016_ip = 151;
                    continue _fun9016
                }
            case 135:
                var10 = var12.get;
                var4 = 'sentry.sample_rate';
                var0 = var10.bind(var12)(var4);
            case 151:
                if (!(var6 == var0)) {
                    _fun9016_ip = 185;
                    continue _fun9016
                }
            case 155:
                var10 = _closure1_slot0;
                var15 = _closure1_slot1;
                var4 = 5;
                var4 = var15[var4];
                var4 = var10.bind(var1)(var4);
                var4 = var4.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE;
                var0 = var11[var4];
            case 185:
                if (!(var6 == var0)) {
                    _fun9016_ip = 219;
                    continue _fun9016
                }
            case 189:
                var10 = _closure1_slot0;
                var15 = _closure1_slot1;
                var4 = 5;
                var4 = var15[var4];
                var4 = var10.bind(var1)(var4);
                var4 = var4.SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE;
                var0 = var11[var4];
            case 219:
                var _closure2_slot0 = var0;
                var0 = _closure1_slot2;
                var0 = var7[var0];
                if (var0) {
                    _fun9016_ip = 614;
                    continue _fun9016
                }
            case 237:
                var3 = var6 == var12;
                var15 = undefined;
                if (var3) {
                    _fun9016_ip = 262;
                    continue _fun9016
                }
            case 246:
                var4 = var12.get;
                var3 = 'sentry.dsc';
                var15 = var4.bind(var12)(var3);
            case 262:
                var3 = var15;
                if (!var3) {
                    _fun9016_ip = 299;
                    continue _fun9016
                }
            case 268:
                var10 = _closure1_slot0;
                var16 = _closure1_slot1;
                var4 = 6;
                var4 = var16[var4];
                var10 = var10.bind(var1)(var4);
                var4 = var10.baggageHeaderToDynamicSamplingContext;
                var3 = var4.bind(var10)(var15);
            case 299:
                if (var3) {
                    _fun9016_ip = 607;
                    continue _fun9016
                }
            case 305:
                var10 = _closure1_slot3;
                var4 = var14.spanContext;
                var4 = var4.bind(var14)();
                var4 = var4.traceId;
                var4 = var10.bind(var1)(var4, var8);
                var14 = _closure1_slot0;
                var15 = _closure1_slot1;
                var10 = 5;
                var10 = var15[var10];
                var10 = var14.bind(var1)(var10);
                var10 = var10.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
                var11 = var11[var10];
                var5 = var5.description;
                var10 = 'url';
                var10 = var10 !== var11;
                if (!var10) {
                    _fun9016_ip = 380;
                    continue _fun9016
                }
            case 377:
                var10 = var5;
            case 380:
                if (!var10) {
                    _fun9016_ip = 389;
                    continue _fun9016
                }
            case 383:
                var4.transaction = var5;
            case 389:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var5 = 7;
                var5 = var11[var5];
                var10 = var10.bind(var1)(var5);
                var5 = var10.hasSpansEnabled;
                var5 = var5.bind(var10)();
                if (!var5) {
                    _fun9016_ip = 581;
                    continue _fun9016
                }
            case 425:
                var5 = global;
                var10 = var5.String;
                var11 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var13];
                var11 = var11.bind(var1)(var5);
                var5 = var11.spanIsSampled;
                var5 = var5.bind(var11)(var7);
                var5 = var10.bind(var1)(var5);
                var4.sampled = var5;
                var10 = var6 == var12;
                var5 = undefined;
                if (var10) {
                    _fun9016_ip = 497;
                    continue _fun9016
                }
            case 481:
                var11 = var12.get;
                var10 = 'sentry.sample_rand';
                var5 = var11.bind(var12)(var10);
            case 497:
                if (!(var6 == var5)) {
                    _fun9016_ip = 575;
                    continue _fun9016
                }
            case 501:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var9 = 8;
                var9 = var11[var9];
                var10 = var10.bind(var1)(var9);
                var9 = var10.getCapturedScopesOnSpan;
                var9 = var9.bind(var10)(var7);
                var10 = var9.scope;
                var9 = var6 == var10;
                var6 = undefined;
                if (var9) {
                    _fun9016_ip = 572;
                    continue _fun9016
                }
            case 547:
                var9 = var10.getPropagationContext;
                var9 = var9.bind(var10)();
                var10 = var9.sampleRand;
                var9 = var10.toString;
                var6 = var9.bind(var10)();
            case 572:
                var5 = var6;
            case 575:
                var4.sample_rand = var5;
            case 581:
                var5 = var2.bind(var1)(var4);
                var6 = var8.emit;
                var5 = 'createDsc';
                var5 = var6.bind(var8)(var5, var4, var7);
                return var4;
            case 607:
                var4 = var2.bind(var1)(var3);
                return var3;
            case 614:
                var1 = var2.bind(var1)(var0);
                return var0;
        }
    };
    var _closure1_slot4 = var2;
    var4 = global;
    var7 = var4.Object;
    var6 = var7.defineProperty;
    var4 = var4.Symbol;
    var5 = var4.toStringTag;
    var4 = {};
    var8 = 'Module';
    var4.value = var8;
    var4 = var6.bind(var7)(var1, var5, var4);
    var4 = '_frozenDsc';
    var _closure1_slot2 = var4;
    var4 = function(arg0, arg1) { // Original name: freezeDscOnSpan, environment: var0
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
    var3 = function(arg0, arg1) { // Original name: getDynamicSamplingContextFromScope, environment: var0
        _fun9019: for (var _fun9019_ip = 0;;) switch (_fun9019_ip) {
            case 0:
                var1 = arg1;
                var0 = var1.getPropagationContext;
                var1 = var0.bind(var1)();
                var0 = var1.dsc;
                if (var0) {
                    _fun9019_ip = 46;
                    continue _fun9019
                }
            case 22:
                var4 = _closure1_slot3;
                var3 = var1.traceId;
                var2 = undefined;
                var1 = arg0;
                var0 = var4.bind(var2)(var3, var1);
            case 46:
                return var0;
        }
    };
    var1.getDynamicSamplingContextFromScope = var3;
    var1.getDynamicSamplingContextFromSpan = var2;
    var0 = function(arg0) { // Original name: spanToBaggageHeader, environment: var0
        var2 = _closure1_slot4;
        var3 = undefined;
        var1 = arg0;
        var2 = var2.bind(var3)(var1);
        var1 = _closure1_slot0;
        var4 = _closure1_slot1;
        var0 = 6;
        var0 = var4[var0];
        var1 = var1.bind(var3)(var0);
        var0 = var1.dynamicSamplingContextToSentryBaggageHeader;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1.spanToBaggageHeader = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [822, 856, 836, 847, 819, 838, 834, 853, 820]);