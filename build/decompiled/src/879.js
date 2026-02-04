// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var1 = function arg0() {
        _fun9332: for (var _fun9332_ip = 0;;) switch (_fun9332_ip) {
            case 0:
                var0 = arg0;
                var2 = var0;
                var4 = undefined;
                var5 = undefined;
                var0 = typeof var0;
                var1 = 'number';
                if (!(var1 !== var0)) {
                    _fun9332_ip = 130;
                    continue _fun9332
                }
            case 21:
                var1 = 'boolean';
                if (!(var1 !== var0)) {
                    _fun9332_ip = 115;
                    continue _fun9332
                }
            case 29:
                var3 = 'string';
                if (!(var3 !== var0)) {
                    _fun9332_ip = 100;
                    continue _fun9332
                }
            case 37:
                var0 = '';
                var4 = var0;
            case 44: // try_start_0
                var6 = global;
                var8 = var6.JSON;
                var7 = var8.stringify;
                var6 = var2;
                var7 = var7.bind(var8)(var6);
                var5 = var7;
                var6 = null;
                var6 = var6 != var7;
                if (!var6) {
                    _fun9332_ip = 81;
                    continue _fun9332
                }
            case 78:
                var0 = var5;
            case 81:
                var4 = var0;
            case 84: // try_end0
                _fun9332_ip = 88;
                continue _fun9332;
            case 86: // catch_target0
                CatchBlockStart(arg_register = 0);
            case 88:
                var0 = {};
                var0.value = var4;
                var0.type = var3;
                return var0;
            case 100:
                var0 = {};
                var4 = var2;
                var0.value = var4;
                var0.type = var3;
                return var0;
            case 115:
                var0 = {};
                var3 = var2;
                var0.value = var3;
                var0.type = var1;
                return var0;
            case 130:
                var0 = global;
                var3 = var0.Number;
                var1 = var3.isInteger;
                var0 = var2;
                var0 = var1.bind(var3)(var0);
                var1 = {};
                var1.value = var2;
                if (var0) {
                    _fun9332_ip = 174;
                    continue _fun9332
                }
            case 161:
                var0 = 'double';
                var1.type = var0;
                var0 = var1;
                _fun9332_ip = 185;
                continue _fun9332;
            case 174:
                var2 = 'integer';
                var1.type = var2;
                var0 = var1;
            case 185:
                return var0;
        }
    };
    var _closure1_slot4 = var1;
    var0 = function arg0, arg1, arg2() {
        _fun9333: for (var _fun9333_ip = 0;;) switch (_fun9333_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var1 = arg2;
                var0 = undefined;
                var7 = undefined;
                var4 = !var1;
                if (var4) {
                    _fun9333_ip = 63;
                    continue _fun9333
                }
            case 19:
                var5 = arguments.length;
                var6 = 3;
                var8 = var5 > var6;
                if (!var8) {
                    _fun9333_ip = 40;
                    continue _fun9333
                }
            case 32:
                var5 = arguments[var6];
                var8 = var0 !== var5;
            case 40:
                var5 = !var8;
                if (!var8) {
                    _fun9333_ip = 50;
                    continue _fun9333
                }
            case 46:
                var5 = arguments[var6];
            case 50:
                var5 = !var5;
                if (!var5) {
                    _fun9333_ip = 60;
                    continue _fun9333
                }
            case 56:
                var5 = var2 in var3;
            case 60:
                var4 = var5;
            case 63:
                if (var4) {
                    _fun9333_ip = 70;
                    continue _fun9333
                }
            case 66:
                var3[var2] = var1;
            case 70:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var5 = function arg0, arg1() {
        _fun9334: for (var _fun9334_ip = 0;;) switch (_fun9334_ip) {
            case 0:
                var4 = arg0;
                var5 = arg1;
                var2 = _closure1_slot10;
                var0 = undefined;
                var3 = var2.bind(var0)();
                var2 = _closure1_slot9;
                var2 = var2.bind(var0)(var4);
                if (!(var0 !== var2)) {
                    _fun9334_ip = 123;
                    continue _fun9334
                }
            case 32:
                var7 = var2.length;
                var6 = 1000;
                if (!(!(var7 >= var6))) {
                    _fun9334_ip = 92;
                    continue _fun9334
                }
            case 47:
                var7 = var3.set;
                var10 = new Array(0);
                var9 = var10.concat;
                var6 = _closure1_slot3;
                var8 = var6.bind(var0)(var2);
                var6 = new Array(1);
                var6[0] = var5;
                var6 = var9.bind(var10)(var8, var6);
                var6 = var7.bind(var3)(var4, var6);
                _fun9334_ip = 142;
                continue _fun9334;
            case 92:
                var1 = _closure1_slot8;
                var1 = var1.bind(var0)(var4, var2);
                var2 = var3.set;
                var1 = new Array(1);
                var1[0] = var5;
                var1 = var2.bind(var3)(var4, var1);
                _fun9334_ip = 142;
                continue _fun9334;
            case 123:
                var2 = var3.set;
                var1 = new Array(1);
                var1[0] = var5;
                var1 = var2.bind(var3)(var4, var1);
            case 142:
                return var0;
        }
    };
    var _closure1_slot6 = var5;
    var0 = function arg0, arg1, arg2() {
        _fun9335: for (var _fun9335_ip = 0;;) switch (_fun9335_ip) {
            case 0:
                var4 = arg0;
                var8 = arg1;
                var12 = arg2;
                var0 = var8.getOptions;
                var0 = var0.bind(var8)();
                var9 = var0.release;
                var7 = var0.environment;
                var1 = global;
                var5 = var1.Object;
                var3 = var5.assign;
                var2 = var4.attributes;
                var0 = {};
                var0 = var3.bind(var5)(var0, var2);
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var13 = 5;
                var3 = var11[var13];
                var6 = undefined;
                var5 = var10.bind(var6)(var3);
                var3 = var5.getGlobalScope;
                var5 = var3.bind(var5)();
                var3 = var5.getScopeData;
                var3 = var3.bind(var5)();
                var5 = 9;
                var14 = var11[var5];
                var15 = var10.bind(var6)(var14);
                var14 = var15.mergeScopeData;
                var13 = var11[var13];
                var16 = var10.bind(var6)(var13);
                var13 = var16.getIsolationScope;
                var16 = var13.bind(var16)();
                var13 = var16.getScopeData;
                var13 = var13.bind(var16)();
                var13 = var14.bind(var15)(var3, var13);
                var5 = var11[var5];
                var11 = var10.bind(var6)(var5);
                var10 = var11.mergeScopeData;
                var5 = var12.getScopeData;
                var5 = var5.bind(var12)();
                var5 = var10.bind(var11)(var3, var5);
                var3 = var3.user;
                var18 = var3.id;
                var12 = var3.email;
                var11 = var3.username;
                var5 = _closure1_slot5;
                var19 = 'user.id';
                var21 = undefined;
                var20 = var0;
                var17 = false;
                var3 = var21[var5](var20, var19, var18, var17, var16);
                var19 = 'user.email';
                var20 = var0;
                var18 = var12;
                var3 = var21[var5](var20, var19, var18, var17, var16);
                var19 = 'user.name';
                var20 = var0;
                var18 = var11;
                var3 = var21[var5](var20, var19, var18, var17, var16);
                var3 = 'sentry.release';
                var3 = var5.bind(var6)(var0, var3, var9);
                var3 = 'sentry.environment';
                var3 = var5.bind(var6)(var0, var3, var7);
                var3 = var8.getSdkMetadata;
                var7 = var3.bind(var8)();
                var5 = null;
                var9 = var5 == var7;
                var3 = undefined;
                if (var9) {
                    _fun9335_ip = 314;
                    continue _fun9335
                }
            case 308:
                var3 = var7.sdk;
            case 314:
                if (!(var5 == var3)) {
                    _fun9335_ip = 320;
                    continue _fun9335
                }
            case 318:
                var3 = {};
            case 320:
                var10 = var3.name;
                var9 = var3.version;
                var7 = _closure1_slot5;
                var3 = 'sentry.sdk.name';
                var3 = var7.bind(var6)(var0, var3, var10);
                var3 = 'sentry.sdk.version';
                var3 = var7.bind(var6)(var0, var3, var9);
                var7 = var8.getIntegrationByName;
                var3 = 'Replay';
                var8 = var7.bind(var8)(var3);
                var7 = var5 == var8;
                var3 = undefined;
                if (var7) {
                    _fun9335_ip = 400;
                    continue _fun9335
                }
            case 387:
                var9 = var8.getReplayId;
                var7 = true;
                var3 = var9.bind(var8)(var7);
            case 400:
                var9 = _closure1_slot5;
                var7 = 'sentry.replay_id';
                var7 = var9.bind(var6)(var0, var7, var3);
                if (!var3) {
                    _fun9335_ip = 447;
                    continue _fun9335
                }
            case 420:
                var5 = var5 == var8;
                var7 = undefined;
                if (var5) {
                    _fun9335_ip = 439;
                    continue _fun9335
                }
            case 429:
                var5 = var8.getRecordingMode;
                var7 = var5.bind(var8)();
            case 439:
                var5 = 'buffer';
                var3 = var5 === var7;
            case 447:
                if (!var3) {
                    _fun9335_ip = 469;
                    continue _fun9335
                }
            case 450:
                var5 = _closure1_slot5;
                var3 = 'sentry._internal.replay_is_buffering';
                var2 = true;
                var2 = var5.bind(var6)(var0, var3, var2);
            case 469:
                var3 = var1.Object;
                var2 = var3.assign;
                var1 = {};
                var1.attributes = var0;
                var0 = {};
                var0 = var2.bind(var3)(var0, var4, var1);
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var4 = function arg0, arg1() {
        _fun9336: for (var _fun9336_ip = 0;;) switch (_fun9336_ip) {
            case 0:
                var2 = arg0;
                var8 = arg1;
                var0 = null;
                if (!(var0 == var8)) {
                    _fun9336_ip = 26;
                    continue _fun9336
                }
            case 12:
                var3 = _closure1_slot9;
                var1 = undefined;
                var8 = var3.bind(var1)(var2);
            case 26:
                if (!(var0 == var8)) {
                    _fun9336_ip = 34;
                    continue _fun9336
                }
            case 30:
                var8 = new Array(0);
            case 34:
                var1 = var8.length;
                var0 = 0;
                if (!(var0 !== var1)) {
                    _fun9336_ip = 172;
                    continue _fun9336
                }
            case 48:
                var0 = var2.getOptions;
                var1 = var0.bind(var2)();
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 8;
                var4 = var4[var3];
                var3 = undefined;
                var7 = var5.bind(var3)(var4);
                var6 = var7.createMetricEnvelope;
                var11 = var1._metadata;
                var10 = var1.tunnel;
                var1 = var2.getDsn;
                var9 = var1.bind(var2)();
                var13 = var7;
                var12 = var8;
                var1 = var13[var6](var12, var11, var10, var9, var8);
                var0 = _closure1_slot10;
                var4 = var0.bind(var3)();
                var3 = var4.set;
                var0 = new Array(0);
                var0 = var3.bind(var4)(var2, var0);
                var3 = var2.emit;
                var0 = 'flushMetrics';
                var0 = var3.bind(var2)(var0);
                var0 = var2.sendEnvelope;
                var0 = var0.bind(var2)(var1);
            case 172:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot8 = var4;
    var3 = function arg0() {
        var1 = _closure1_slot10;
        var0 = undefined;
        var2 = var1.bind(var0)();
        var1 = var2.get;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot9 = var3;
    var0 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 10;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.getGlobalSingleton;
        var1 = 'clientToMetricBufferMap';
        var0 = function() { // Environment: var0
            var0 = global;
            var0 = var0.WeakMap;
            var1 = var0.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var0
                }
            });
            var2 = var1;
            var0 = new var2[var0](var1);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot10 = var0;
    var0 = 0;
    var7 = var9[var0];
    var0 = undefined;
    var7 = var8.bind(var0)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = global;
    var10 = var7.Object;
    var9 = var10.defineProperty;
    var7 = var7.Symbol;
    var8 = var7.toStringTag;
    var7 = {};
    var11 = 'Module';
    var7.value = var11;
    var7 = var9.bind(var10)(var2, var8, var7);
    var6 = function arg0, arg1() {
        _fun9340: for (var _fun9340_ip = 0;;) switch (_fun9340_ip) {
            case 0:
                var1 = arg1;
                var8 = null;
                var2 = var8 == var1;
                var0 = undefined;
                var10 = undefined;
                if (var2) {
                    _fun9340_ip = 22;
                    continue _fun9340
                }
            case 16:
                var10 = var1.scope;
            case 22:
                if (!(var8 == var10)) {
                    _fun9340_ip = 59;
                    continue _fun9340
                }
            case 26:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 5;
                var2 = var4[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.getCurrentScope;
                var10 = var2.bind(var3)();
            case 59:
                var3 = var8 == var1;
                var2 = undefined;
                if (var3) {
                    _fun9340_ip = 74;
                    continue _fun9340
                }
            case 68:
                var2 = var1.captureSerializedMetric;
            case 74:
                if (!(var8 == var2)) {
                    _fun9340_ip = 85;
                    continue _fun9340
                }
            case 78:
                var2 = _closure1_slot6;
            case 85:
                var1 = var8 == var10;
                var4 = undefined;
                if (var1) {
                    _fun9340_ip = 104;
                    continue _fun9340
                }
            case 94:
                var1 = var10.getClient;
                var4 = var1.bind(var10)();
            case 104:
                if (!(var8 == var4)) {
                    _fun9340_ip = 141;
                    continue _fun9340
                }
            case 108:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 5;
                var1 = var5[var1];
                var3 = var3.bind(var0)(var1);
                var1 = var3.getClient;
                var4 = var1.bind(var3)();
            case 141:
                if (var4) {
                    _fun9340_ip = 226;
                    continue _fun9340
                }
            case 144:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 6;
                var3 = var6[var3];
                var3 = var5.bind(var0)(var3);
                var3 = var3.DEBUG_BUILD;
                if (!var3) {
                    _fun9340_ip = 910;
                    continue _fun9340
                }
            case 179:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 7;
                var1 = var5[var1];
                var1 = var3.bind(var0)(var1);
                var5 = var1.debug;
                var3 = var5.warn;
                var1 = 'No client available to capture metric.';
                var1 = var3.bind(var5)(var1);
                _fun9340_ip = 910;
                continue _fun9340;
            case 226:
                var1 = var4.getOptions;
                var3 = var1.bind(var4)();
                var7 = var3._experiments;
                var1 = var3.enableMetrics;
                var6 = var3.beforeSendMetric;
                if (!(var8 == var1)) {
                    _fun9340_ip = 276;
                    continue _fun9340
                }
            case 258:
                var5 = var8 == var7;
                var3 = undefined;
                if (var5) {
                    _fun9340_ip = 273;
                    continue _fun9340
                }
            case 267:
                var3 = var7.enableMetrics;
            case 273:
                var1 = var3;
            case 276:
                if (!(var8 != var1)) {
                    _fun9340_ip = 365;
                    continue _fun9340
                }
            case 280:
                if (var1) {
                    _fun9340_ip = 365;
                    continue _fun9340
                }
            case 283:
                var5 = _closure1_slot0;
                var9 = _closure1_slot1;
                var3 = 6;
                var3 = var9[var3];
                var3 = var5.bind(var0)(var3);
                var3 = var3.DEBUG_BUILD;
                if (!var3) {
                    _fun9340_ip = 910;
                    continue _fun9340
                }
            case 318:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 7;
                var1 = var5[var1];
                var1 = var3.bind(var0)(var1);
                var5 = var1.debug;
                var3 = var5.warn;
                var1 = 'metrics option not enabled, metric will not be captured.';
                var1 = var3.bind(var5)(var1);
                _fun9340_ip = 910;
                continue _fun9340;
            case 365:
                var3 = _closure1_slot7;
                var1 = arg0;
                var1 = var3.bind(var0)(var1, var4, var10);
                var9 = var4.emit;
                var3 = 'processMetric';
                var3 = var9.bind(var4)(var3, var1);
                if (var6) {
                    _fun9340_ip = 421;
                    continue _fun9340
                }
            case 403:
                var9 = var8 == var7;
                var3 = undefined;
                if (var9) {
                    _fun9340_ip = 418;
                    continue _fun9340
                }
            case 412:
                var3 = var7.beforeSendMetric;
            case 418:
                var6 = var3;
            case 421:
                var3 = var1;
                if (!var6) {
                    _fun9340_ip = 432;
                    continue _fun9340
                }
            case 427:
                var3 = var6.bind(var0)(var1);
            case 432:
                if (var3) {
                    _fun9340_ip = 514;
                    continue _fun9340
                }
            case 435:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 6;
                var1 = var7[var1];
                var1 = var6.bind(var0)(var1);
                var1 = var1.DEBUG_BUILD;
                if (!var1) {
                    _fun9340_ip = 910;
                    continue _fun9340
                }
            case 467:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 7;
                var1 = var7[var1];
                var1 = var6.bind(var0)(var1);
                var7 = var1.debug;
                var6 = var7.log;
                var1 = '`beforeSendMetric` returned `null`, will not send metric.';
                var1 = var6.bind(var7)(var1);
                _fun9340_ip = 910;
                continue _fun9340;
            case 514:
                var6 = {};
                var11 = var3.attributes;
                for (var1 in var11)
                    case 530: {
                        case 539: var14 = var1;
                        var13 = var3.attributes;
                        var13 = var13[var14];
                        if (var0 === var13) {
                            _fun9340_ip = 530;
                            continue _fun9340
                        }
                        case 556: var15 = _closure1_slot4;
                        var13 = var3.attributes;
                        var13 = var13[var14];
                        var13 = var15.bind(var0)(var13);
                        var6[var14] = var13;
                        _fun9340_ip = 530;
                        continue _fun9340;
                    }
            case 581:
                var9 = _closure1_slot0;
                var11 = _closure1_slot1;
                var12 = 2;
                var1 = var11[var12];
                var7 = var9.bind(var0)(var1);
                var1 = var7._getTraceInfoFromScope;
                var7 = var1.bind(var7)(var4, var10);
                var1 = _closure1_slot2;
                var7 = var1.bind(var0)(var7, var12);
                var1 = 1;
                var1 = var7[var1];
                var7 = 3;
                var7 = var11[var7];
                var9 = var9.bind(var0)(var7);
                var7 = var9._getSpanForScope;
                var10 = var7.bind(var9)(var10);
                if (var10) {
                    _fun9340_ip = 673;
                    continue _fun9340
                }
            case 656:
                var7 = var8 == var1;
                var9 = undefined;
                if (var7) {
                    _fun9340_ip = 671;
                    continue _fun9340
                }
            case 665:
                var9 = var1.trace_id;
            case 671:
                _fun9340_ip = 689;
                continue _fun9340;
            case 673:
                var1 = var10.spanContext;
                var1 = var1.bind(var10)();
                var9 = var1.traceId;
            case 689:
                var7 = undefined;
                if (!var10) {
                    _fun9340_ip = 710;
                    continue _fun9340
                }
            case 694:
                var1 = var10.spanContext;
                var1 = var1.bind(var10)();
                var7 = var1.spanId;
            case 710:
                var1 = {};
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var10 = 4;
                var10 = var12[var10];
                var11 = var11.bind(var0)(var10);
                var10 = var11.timestampInSeconds;
                var10 = var10.bind(var11)();
                var1.timestamp = var10;
                var10 = var8 != var9;
                var8 = '';
                if (!var10) {
                    _fun9340_ip = 761;
                    continue _fun9340
                }
            case 758:
                var8 = var9;
            case 761:
                var1.trace_id = var8;
                var1.span_id = var7;
                var7 = var3.name;
                var1.name = var7;
                var7 = var3.type;
                var1.type = var7;
                var7 = var3.unit;
                var1.unit = var7;
                var7 = var3.value;
                var1.value = var7;
                var1.attributes = var6;
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var6 = 6;
                var6 = var8[var6];
                var6 = var7.bind(var0)(var6);
                var6 = var6.DEBUG_BUILD;
                if (!var6) {
                    _fun9340_ip = 886;
                    continue _fun9340
                }
            case 843:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var5 = 7;
                var5 = var7[var5];
                var5 = var6.bind(var0)(var5);
                var7 = var5.debug;
                var6 = var7.log;
                var5 = '[Metric]';
                var5 = var6.bind(var7)(var5, var1);
            case 886:
                var1 = var2.bind(var0)(var4, var1);
                var2 = var4.emit;
                var1 = 'afterCaptureMetric';
                var1 = var2.bind(var4)(var1, var3);
            case 910:
                return var0;
        }
    };
    var2._INTERNAL_captureMetric = var6;
    var2._INTERNAL_captureSerializedMetric = var5;
    var2._INTERNAL_flushMetricsBuffer = var4;
    var2._INTERNAL_getMetricBuffer = var3;
    var2.metricAttributeToSerializedMetricAttribute = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 65, 876, 843, 837, 847, 823, 824, 880, 869, 825]);