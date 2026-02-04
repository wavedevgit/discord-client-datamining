// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var3 = function arg0, arg1() {
        _fun9065: for (var _fun9065_ip = 0;;) switch (_fun9065_ip) {
            case 0:
                var0 = arg0;
                var6 = arg1;
                if (var6) {
                    _fun9065_ip = 11;
                    continue _fun9065
                }
            case 9:
                return var0;
            case 11:
                var5 = var0.sdk;
                if (var5) {
                    _fun9065_ip = 22;
                    continue _fun9065
                }
            case 20:
                var5 = {};
            case 22:
                var7 = global;
                var4 = var7.Object;
                var3 = var4.assign;
                var2 = {};
                var1 = var5.name;
                if (var1) {
                    _fun9065_ip = 50;
                    continue _fun9065
                }
            case 45:
                var1 = var6.name;
            case 50:
                var2.name = var1;
                var1 = var5.version;
                if (var1) {
                    _fun9065_ip = 69;
                    continue _fun9065
                }
            case 63:
                var1 = var6.version;
            case 69:
                var2.version = var1;
                var13 = new Array(0);
                var12 = var13.concat;
                var10 = _closure1_slot2;
                var14 = var0.sdk;
                var11 = null;
                var15 = var11 == var14;
                var8 = undefined;
                var9 = undefined;
                if (var15) {
                    _fun9065_ip = 115;
                    continue _fun9065
                }
            case 109:
                var9 = var14.integrations;
            case 115:
                if (var9) {
                    _fun9065_ip = 122;
                    continue _fun9065
                }
            case 118:
                var9 = new Array(0);
            case 122:
                var10 = var10.bind(var8)(var9);
                var14 = _closure1_slot2;
                var9 = var6.integrations;
                if (var9) {
                    _fun9065_ip = 144;
                    continue _fun9065
                }
            case 140:
                var9 = new Array(0);
            case 144:
                var9 = var14.bind(var8)(var9);
                var9 = var12.bind(var13)(var10, var9);
                var2.integrations = var9;
                var12 = new Array(0);
                var10 = var12.concat;
                var13 = _closure1_slot2;
                var14 = var0.sdk;
                var15 = var11 == var14;
                var9 = undefined;
                if (var15) {
                    _fun9065_ip = 194;
                    continue _fun9065
                }
            case 188:
                var9 = var14.packages;
            case 194:
                if (var9) {
                    _fun9065_ip = 201;
                    continue _fun9065
                }
            case 197:
                var9 = new Array(0);
            case 201:
                var9 = var13.bind(var8)(var9);
                var13 = _closure1_slot2;
                var1 = var6.packages;
                if (var1) {
                    _fun9065_ip = 223;
                    continue _fun9065
                }
            case 219:
                var1 = new Array(0);
            case 223:
                var1 = var13.bind(var8)(var1);
                var1 = var10.bind(var12)(var9, var1);
                var2.packages = var1;
                var1 = var0.sdk;
                if (!(var11 != var1)) {
                    _fun9065_ip = 258;
                    continue _fun9065
                }
            case 249:
                var1 = var1.settings;
                if (var1) {
                    _fun9065_ip = 269;
                    continue _fun9065
                }
            case 258:
                var9 = var6.settings;
                var1 = undefined;
                if (!var9) {
                    _fun9065_ip = 316;
                    continue _fun9065
                }
            case 269:
                var10 = var7.Object;
                var9 = var10.assign;
                var7 = var0.sdk;
                var11 = var11 == var7;
                var8 = undefined;
                if (var11) {
                    _fun9065_ip = 301;
                    continue _fun9065
                }
            case 295:
                var8 = var7.settings;
            case 301:
                var7 = var6.settings;
                var6 = {};
                var1 = var9.bind(var10)(var6, var8, var7);
            case 316:
                var2.settings = var1;
                var1 = {};
                var1 = var3.bind(var4)(var1, var5, var2);
                var0.sdk = var1;
                return var0;
        }
    };
    var _closure1_slot3 = var3;
    var0 = 0;
    var4 = var4[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = global;
    var7 = var4.Object;
    var6 = var7.defineProperty;
    var4 = var4.Symbol;
    var5 = var4.toStringTag;
    var4 = {};
    var8 = 'Module';
    var4.value = var8;
    var4 = var6.bind(var7)(var2, var5, var4);
    var2._enhanceEventWithSdkInfo = var3;
    var3 = function arg0, arg1, arg2, arg3() {
        _fun9066: for (var _fun9066_ip = 0;;) switch (_fun9066_ip) {
            case 0:
                var6 = arg0;
                var7 = arg2;
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var5 = 1;
                var1 = var1[var5];
                var2 = undefined;
                var3 = var3.bind(var2)(var1);
                var1 = var3.getSdkMetadataForEnvelopeHeader;
                var10 = var1.bind(var3)(var7);
                var1 = var6.type;
                var8 = 'event';
                var4 = var8;
                if (!var1) {
                    _fun9066_ip = 78;
                    continue _fun9066
                }
            case 57:
                var3 = var6.type;
                var1 = 'replay_event';
                var4 = var8;
                if (!(var1 !== var3)) {
                    _fun9066_ip = 78;
                    continue _fun9066
                }
            case 73:
                var4 = var6.type;
            case 78:
                var3 = _closure1_slot3;
                var1 = null;
                var8 = var1 == var7;
                var1 = undefined;
                if (var8) {
                    _fun9066_ip = 99;
                    continue _fun9066
                }
            case 93:
                var1 = var7.sdk;
            case 99:
                var1 = var3.bind(var2)(var6, var1);
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var3 = var0[var5];
                var9 = var1.bind(var2)(var3);
                var8 = var9.createEventEnvelopeHeaders;
                var12 = arg3;
                var11 = arg1;
                var15 = var9;
                var14 = var6;
                var13 = var10;
                var3 = var15[var8](var14, var13, var12, var11, var10);
                var7 = delete var6.sdkProcessingMetadata;
                var7 = {};
                var7.type = var4;
                var4 = new Array(2);
                var4[0] = var7;
                var4[1] = var6;
                var0 = var0[var5];
                var2 = var1.bind(var2)(var0);
                var1 = var2.createEnvelope;
                var0 = new Array(1);
                var0[0] = var4;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var2.createEventEnvelope = var3;
    var3 = function arg0, arg1, arg2, arg3() {
        _fun9067: for (var _fun9067_ip = 0;;) switch (_fun9067_ip) {
            case 0:
                var6 = arg0;
                var12 = arg1;
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var5 = 1;
                var1 = var1[var5];
                var2 = undefined;
                var4 = var3.bind(var2)(var1);
                var3 = var4.getSdkMetadataForEnvelopeHeader;
                var1 = arg2;
                var9 = var3.bind(var4)(var1);
                var1 = global;
                var8 = var1.Object;
                var7 = var8.assign;
                var4 = {};
                var1 = var1.Date;
                var3 = var1.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var1
                    }
                });
                var17 = var3;
                var1 = new var17[var1](var16);
                var3 = var1 instanceof Object ? var1 : var3;
                var1 = var3.toISOString;
                var1 = var1.bind(var3)();
                var4.sent_at = var1;
                var3 = var9;
                if (!var3) {
                    _fun9067_ip = 117;
                    continue _fun9067
                }
            case 107:
                var1 = {};
                var1.sdk = var9;
                var3 = var1;
            case 117:
                var1 = arg3;
                var9 = !var1;
                var1 = !var9;
                if (var9) {
                    _fun9067_ip = 132;
                    continue _fun9067
                }
            case 129:
                var1 = var12;
            case 132:
                if (!var1) {
                    _fun9067_ip = 176;
                    continue _fun9067
                }
            case 135:
                var9 = {};
                var11 = _closure1_slot0;
                var13 = _closure1_slot1;
                var10 = 2;
                var10 = var13[var10];
                var11 = var11.bind(var2)(var10);
                var10 = var11.dsnToString;
                var10 = var10.bind(var11)(var12);
                var9.dsn = var10;
                var1 = var9;
            case 176:
                var3 = var7.bind(var8)(var4, var3, var1);
                var1 = 'aggregates';
                var1 = var1 in var6;
                var7 = {};
                if (var1) {
                    _fun9067_ip = 228;
                    continue _fun9067
                }
            case 196:
                var1 = 'session';
                var7.type = var1;
                var4 = new Array(2);
                var4[0] = var7;
                var1 = var6.toJSON;
                var1 = var1.bind(var6)();
                var4[1] = var1;
                _fun9067_ip = 251;
                continue _fun9067;
            case 228:
                var1 = 'sessions';
                var7.type = var1;
                var1 = new Array(2);
                var1[0] = var7;
                var1[1] = var6;
                var4 = var1;
            case 251:
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var5];
                var2 = var1.bind(var2)(var0);
                var1 = var2.createEnvelope;
                var0 = new Array(1);
                var0[0] = var4;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var2.createSessionEnvelope = var3;
    var1 = function arg0, arg1() {
        _fun9068: for (var _fun9068_ip = 0;;) switch (_fun9068_ip) {
            case 0:
                var10 = arg0;
                var13 = arg1;
                var4 = undefined;
                var7 = undefined;
                var0 = undefined;
                var8 = undefined;
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 3;
                var2 = var5[var2];
                var5 = var3.bind(var4)(var2);
                var3 = var5.getDynamicSamplingContextFromSpan;
                var2 = 0;
                var2 = var10[var2];
                var15 = var3.bind(var5)(var2);
                var9 = null;
                var2 = var9 == var13;
                var17 = undefined;
                if (var2) {
                    _fun9068_ip = 77;
                    continue _fun9068
                }
            case 67:
                var2 = var13.getDsn;
                var17 = var2.bind(var13)();
            case 77:
                var3 = var9 == var13;
                var2 = undefined;
                if (var3) {
                    _fun9068_ip = 102;
                    continue _fun9068
                }
            case 86:
                var3 = var13.getOptions;
                var3 = var3.bind(var13)();
                var2 = var3.tunnel;
            case 102:
                var3 = global;
                var12 = var3.Object;
                var11 = var12.assign;
                var5 = {};
                var3 = var3.Date;
                var14 = var3.prototype;
                var14 = Object.create(var14, {
                    constructor: {
                        value: var3
                    }
                });
                var22 = var14;
                var3 = new var22[var3](var21);
                var14 = var3 instanceof Object ? var3 : var14;
                var3 = var14.toISOString;
                var3 = var3.bind(var14)();
                var5.sent_at = var3;
                var3 = var15.trace_id;
                var14 = !var3;
                var3 = !var14;
                if (var14) {
                    _fun9068_ip = 185;
                    continue _fun9068
                }
            case 173:
                var14 = var15.public_key;
                var14 = !var14;
                var3 = !var14;
            case 185:
                if (!var3) {
                    _fun9068_ip = 198;
                    continue _fun9068
                }
            case 188:
                var14 = {};
                var14.trace = var15;
                var3 = var14;
            case 198:
                var14 = !var2;
                var2 = !var14;
                if (var14) {
                    _fun9068_ip = 210;
                    continue _fun9068
                }
            case 207:
                var2 = var17;
            case 210:
                if (!var2) {
                    _fun9068_ip = 254;
                    continue _fun9068
                }
            case 213:
                var14 = {};
                var16 = _closure1_slot0;
                var18 = _closure1_slot1;
                var15 = 2;
                var15 = var18[var15];
                var16 = var16.bind(var4)(var15);
                var15 = var16.dsnToString;
                var15 = var15.bind(var16)(var17);
                var14.dsn = var15;
                var2 = var14;
            case 254:
                var3 = var11.bind(var12)(var5, var3, var2);
                var2 = var9 == var13;
                var5 = undefined;
                if (var2) {
                    _fun9068_ip = 280;
                    continue _fun9068
                }
            case 270:
                var2 = var13.getOptions;
                var5 = var2.bind(var13)();
            case 280:
                if (var5) {
                    _fun9068_ip = 285;
                    continue _fun9068
                }
            case 283:
                var5 = {};
            case 285:
                var2 = var5.beforeSendSpan;
                var _closure2_slot0 = var2;
                var11 = var5.ignoreSpans;
                var _closure2_slot1 = var11;
                var5 = var10;
                if (!(var9 != var11)) {
                    _fun9068_ip = 338;
                    continue _fun9068
                }
            case 312:
                var11 = var11.length;
                var5 = var10;
                if (!var11) {
                    _fun9068_ip = 338;
                    continue _fun9068
                }
            case 323:
                var12 = var10.filter;
                var11 = function(arg0) { // Environment: var6
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var0 = 4;
                    var0 = var5[var0];
                    var1 = undefined;
                    var3 = var4.bind(var1)(var0);
                    var2 = var3.shouldIgnoreSpan;
                    var0 = 5;
                    var0 = var5[var0];
                    var4 = var4.bind(var1)(var0);
                    var1 = var4.spanToJSON;
                    var0 = arg0;
                    var1 = var1.bind(var4)(var0);
                    var0 = _closure2_slot1;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = !var0;
                    return var0;
                };
                var5 = var12.bind(var10)(var11);
            case 338:
                var11 = var10.length;
                var10 = var5.length;
                var12 = var11 - var10;
                if (!var12) {
                    _fun9068_ip = 382;
                    continue _fun9068
                }
            case 355:
                if (!(var9 != var13)) {
                    _fun9068_ip = 382;
                    continue _fun9068
                }
            case 359:
                var11 = var13.recordDroppedEvent;
                var10 = 'before_send';
                var9 = 'span';
                var9 = var11.bind(var13)(var10, var9, var12);
            case 382:
                if (var2) {
                    _fun9068_ip = 413;
                    continue _fun9068
                }
            case 385:
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var2 = 5;
                var2 = var10[var2];
                var2 = var9.bind(var4)(var2);
                var2 = var2.spanToJSON;
                _fun9068_ip = 418;
                continue _fun9068;
            case 413:
                var2 = function(arg0) { // Environment: var6
                    _fun9070: for (var _fun9070_ip = 0;;) switch (_fun9070_ip) {
                        case 0:
                            var1 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var5 = 5;
                            var0 = var0[var5];
                            var4 = undefined;
                            var3 = var1.bind(var4)(var0);
                            var1 = var3.spanToJSON;
                            var0 = arg0;
                            var1 = var1.bind(var3)(var0);
                            var0 = _closure2_slot0;
                            var0 = var0.bind(var4)(var1);
                            if (var0) {
                                _fun9070_ip = 84;
                                continue _fun9070
                            }
                        case 54:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var2 = var2[var5];
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.showSpanDropWarning;
                            var2 = var2.bind(var3)();
                            var0 = var1;
                        case 84:
                            return var0;
                    }
                };
            case 418:
                var7 = var2;
                var0 = new Array(0);
                var2 = var5;
                var6 = var2[Symbol.iterator];
                var2 = var6().next;
                var5 = 1;
            case 434:
                var10 = var2().value;
                var9 = var6;
                if (!(var9 !== var4)) {
                    _fun9068_ip = 512;
                    continue _fun9068
                }
            case 445: // try_start_0
                var9 = var7;
                var9 = var9.bind(var4)(var10);
                var8 = var9;
                if (!var9) {
                    _fun9068_ip = 503;
                    continue _fun9068
                }
            case 459:
                var11 = var0;
                var10 = var11.push;
                var12 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var5];
                var13 = var12.bind(var4)(var9);
                var12 = var13.createSpanEnvelopeItem;
                var9 = var8;
                var9 = var12.bind(var13)(var9);
                var9 = var10.bind(var11)(var9);
            case 503: // try_end0
                _fun9068_ip = 434;
                continue _fun9068;
            case 505: // catch_target0
                CatchBlockStart(arg_register = 2);
                var6.return();
                throw var2;
            case 512:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var2 = var2.bind(var4)(var1);
                var1 = var2.createEnvelope;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var2.createSpanEnvelope = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 862, 836, 855, 857, 819]);