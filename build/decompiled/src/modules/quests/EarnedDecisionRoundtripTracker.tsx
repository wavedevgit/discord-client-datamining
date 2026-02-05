// modules/quests/EarnedDecisionRoundtripTracker.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun47236: for (var _fun47236_ip = 0;;) switch (_fun47236_ip) {
            case 0:
                var5 = arg0;
                var0 = global;
                var1 = var0.Math;
                var0 = var1.random;
                var1 = var0.bind(var1)();
                var0 = 0.1;
                if (!(!(var1 > var0))) {
                    _fun47236_ip = 351;
                    continue _fun47236
                }
            case 38:
                var0 = var5.apiResponseTimestamp;
                var7 = null;
                var0 = var7 == var0;
                var10 = null;
                if (var0) {
                    _fun47236_ip = 71;
                    continue _fun47236
                }
            case 55:
                var1 = var5.apiResponseTimestamp;
                var0 = var5.initialSendTimestamp;
                var10 = var1 - var0;
            case 71:
                var1 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 4;
                var0 = var12[var0];
                var6 = undefined;
                var1 = var1.bind(var6)(var0);
                var0 = var1.getSignalStrength;
                var9 = var0.bind(var1)();
                var11 = _closure1_slot1;
                var0 = 5;
                var0 = var12[var0];
                var3 = var11.bind(var6)(var0);
                var2 = var3.track;
                var0 = _closure1_slot6;
                var1 = var0.EARNED_DECISION_ROUNDTRIP;
                var0 = {};
                var8 = 6;
                var8 = var12[var8];
                var8 = var11.bind(var6)(var8);
                var13 = var8.bind(var6)();
                var14 = var0;
                var8 = copyDataProperties(var14, var13);
                var11 = var5.endpoint;
                var8 = 'endpoint';
                var0[var8] = var11;
                var11 = var5.wasSuccessful;
                var8 = 'was_successful';
                var0[var8] = var11;
                var8 = 'api_latency_ms';
                var0[var8] = var10;
                var10 = _closure1_slot5;
                var8 = var10.getType;
                var10 = var8.bind(var10)();
                var8 = 'mobile_network_type';
                var0[var8] = var10;
                var7 = var7 != var9;
                if (!var7) {
                    _fun47236_ip = 245;
                    continue _fun47236
                }
            case 235:
                var8 = {};
                var8.mobile_signal_strength_level = var9;
                var7 = var8;
            case 245:
                var14 = var0;
                var13 = var7;
                var7 = copyDataProperties(var14, var13);
                var8 = var5.callerSource;
                var7 = 'caller_source';
                var0[var7] = var8;
                var8 = var5.requestId;
                var7 = 'request_id';
                var0[var7] = var8;
                var7 = var5.fetchedAt;
                var5 = 'fetched_at';
                var0[var5] = var7;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 7;
                var4 = var7[var4];
                var5 = var5.bind(var6)(var4);
                var4 = var5.isForegrounded;
                var5 = var4.bind(var5)();
                var4 = 'is_foregrounded';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
            case 351:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot6 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function() {
            var2 = this;
            var3 = _closure1_slot3;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = global;
            var1 = var1.Map;
            var3 = var1.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var1
                }
            });
            var6 = var3;
            var1 = new var6[var1](var5);
            var1 = var1 instanceof Object ? var1 : var3;
            var2.pendingRequests = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'recordEarnedRequestAttempt';
        var0.key = var1;
        var1 = function arg0, arg1() {
            var5 = arg0;
            var2 = this;
            var _closure3_slot0 = var2;
            var _closure3_slot1 = var5;
            var4 = {
                'initialSendTimestamp': null,
                'endpoint': '/quests/earned-decision',
                'apiResponseTimestamp': null,
                'wasSuccessful': false,
                'callerSource': null,
                'requestId': null,
                'fetchedAt': null
            };
            var0 = global;
            var6 = var0.Date;
            var3 = var6.now;
            var3 = var3.bind(var6)();
            var4.initialSendTimestamp = var3;
            var3 = arg1;
            var4.callerSource = var3;
            var3 = var2.pendingRequests;
            var2 = var3.set;
            var2 = var2.bind(var3)(var5, var4);
            var3 = var0.setTimeout;
            var0 = undefined;
            var2 = function() { // Environment: var1
                _fun47240: for (var _fun47240_ip = 0;;) switch (_fun47240_ip) {
                    case 0:
                        var1 = _closure3_slot0;
                        var3 = var1.pendingRequests;
                        var2 = var3.get;
                        var1 = _closure3_slot1;
                        var3 = var2.bind(var3)(var1);
                        var1 = null;
                        if (!(var1 != var3)) {
                            _fun47240_ip = 71;
                            continue _fun47240
                        }
                    case 33:
                        var2 = _closure1_slot7;
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3);
                        var1 = _closure3_slot0;
                        var2 = var1.pendingRequests;
                        var1 = var2.delete;
                        var0 = _closure3_slot1;
                        var0 = var1.bind(var2)(var0);
                    case 71:
                        var0 = undefined;
                        return var0;
                }
            };
            var1 = 30000;
            var1 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var0.value = var1;
        var1 = new Array(2);
        var1[0] = var0;
        var0 = {};
        var5 = 'recordEarnedRequestApiResponse';
        var0.key = var5;
        var4 = function arg0, arg1() {
            _fun47241: for (var _fun47241_ip = 0;;) switch (_fun47241_ip) {
                case 0:
                    var3 = arg0;
                    var2 = arg1;
                    var1 = this;
                    var8 = var2.wasSuccessful;
                    var7 = var2.requestId;
                    var0 = undefined;
                    if (!(var7 === var0)) {
                        _fun47241_ip = 29;
                        continue _fun47241
                    }
                case 27:
                    var7 = null;
                case 29:
                    var6 = var2.fetchedAt;
                    if (!(var6 === var0)) {
                        _fun47241_ip = 41;
                        continue _fun47241
                    }
                case 39:
                    var6 = null;
                case 41:
                    var4 = var1.pendingRequests;
                    var2 = var4.get;
                    var5 = var2.bind(var4)(var3);
                    var2 = null;
                    if (!(var2 != var5)) {
                        _fun47241_ip = 156;
                        continue _fun47241
                    }
                case 63:
                    var4 = _closure1_slot7;
                    var2 = {};
                    var11 = var2;
                    var10 = var5;
                    var5 = copyDataProperties(var11, var10);
                    var5 = global;
                    var9 = var5.Date;
                    var5 = var9.now;
                    var9 = var5.bind(var9)();
                    var5 = 'apiResponseTimestamp';
                    var2[var5] = var9;
                    var5 = 'wasSuccessful';
                    var2[var5] = var8;
                    var5 = 'requestId';
                    var2[var5] = var7;
                    var5 = 'fetchedAt';
                    var2[var5] = var6;
                    var2 = var4.bind(var0)(var2);
                    var2 = var1.pendingRequests;
                    var1 = var2.delete;
                    var1 = var1.bind(var2)(var3);
                case 156:
                    return var0;
            }
        };
        var0.value = var4;
        var1[1] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/EarnedDecisionRoundtripTracker.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 3626, 660, 4312, 795, 5282, 4315, 2]);