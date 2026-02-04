// modules/quests/QuestDecisionRoundtripTracker.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1, arg2() {
        _fun47190: for (var _fun47190_ip = 0;;) switch (_fun47190_ip) {
            case 0:
                var5 = arg0;
                var0 = global;
                var1 = var0.Math;
                var0 = var1.random;
                var1 = var0.bind(var1)();
                var0 = 0.1;
                if (!(!(var1 > var0))) {
                    _fun47190_ip = 465;
                    continue _fun47190
                }
            case 38:
                var0 = var5.apiResponseTimestamp;
                var7 = null;
                var0 = var7 == var0;
                var9 = null;
                if (var0) {
                    _fun47190_ip = 71;
                    continue _fun47190
                }
            case 55:
                var1 = var5.apiResponseTimestamp;
                var0 = var5.initialSendTimestamp;
                var9 = var1 - var0;
            case 71:
                var1 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 5;
                var0 = var12[var0];
                var6 = undefined;
                var1 = var1.bind(var6)(var0);
                var0 = var1.getSignalStrength;
                var10 = var0.bind(var1)();
                var11 = _closure1_slot1;
                var0 = 6;
                var0 = var12[var0];
                var3 = var11.bind(var6)(var0);
                var2 = var3.track;
                var0 = _closure1_slot7;
                var1 = var0.QUEST_DECISION_ROUNDTRIP;
                var0 = {};
                var8 = 7;
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
                var0[var8] = var9;
                var9 = _closure1_slot5;
                var8 = var9.getType;
                var9 = var8.bind(var9)();
                var8 = 'mobile_network_type';
                var0[var8] = var9;
                var8 = var7 != var10;
                if (!var8) {
                    _fun47190_ip = 245;
                    continue _fun47190
                }
            case 235:
                var9 = {};
                var9.mobile_signal_strength_level = var10;
                var8 = var9;
            case 245:
                var14 = var0;
                var13 = var8;
                var8 = copyDataProperties(var14, var13);
                var9 = var5.callerSource;
                var8 = 'caller_source';
                var0[var8] = var9;
                var9 = var5.adRequestId;
                var8 = 'ad_request_id';
                var0[var8] = var9;
                var9 = arg2;
                var8 = 'fetched_at';
                var0[var8] = var9;
                var9 = var5.previousAdDecision;
                var10 = var7 == var9;
                var8 = undefined;
                if (var10) {
                    _fun47190_ip = 337;
                    continue _fun47190
                }
            case 316:
                var9 = var9.adDecisionData;
                var10 = var7 == var9;
                var8 = undefined;
                if (var10) {
                    _fun47190_ip = 337;
                    continue _fun47190
                }
            case 331:
                var8 = var9.decision_id;
            case 337:
                var10 = var7 != var8;
                var9 = null;
                if (!var10) {
                    _fun47190_ip = 349;
                    continue _fun47190
                }
            case 346:
                var9 = var8;
            case 349:
                var8 = 'previous_ad_request_id';
                var0[var8] = var9;
                var8 = var5.previousAdDecision;
                var9 = var7 == var8;
                var5 = undefined;
                if (var9) {
                    _fun47190_ip = 381;
                    continue _fun47190
                }
            case 375:
                var5 = var8.fetchedAt;
            case 381:
                var8 = var7 != var5;
                var7 = null;
                if (!var8) {
                    _fun47190_ip = 393;
                    continue _fun47190
                }
            case 390:
                var7 = var5;
            case 393:
                var5 = 'previous_fetched_at';
                var0[var5] = var7;
                var7 = arg1;
                var5 = 'transition_case';
                var0[var5] = var7;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 8;
                var4 = var7[var4];
                var5 = var5.bind(var6)(var4);
                var4 = var5.isForegrounded;
                var5 = var4.bind(var5)();
                var4 = 'is_foregrounded';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
            case 465:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot8 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot7 = var3;
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
        var1 = 'recordQuestRequestAttempt';
        var0.key = var1;
        var1 = function arg0, arg1() {
            _fun47193: for (var _fun47193_ip = 0;;) switch (_fun47193_ip) {
                case 0:
                    var6 = arg0;
                    var4 = arguments[2];
                    var3 = this;
                    var _closure3_slot0 = var3;
                    var _closure3_slot1 = var6;
                    var0 = undefined;
                    if (!(var4 === var0)) {
                        _fun47193_ip = 27;
                        continue _fun47193
                    }
                case 25:
                    var4 = null;
                case 27:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 9;
                    var5 = var8[var5];
                    var8 = var7.bind(var0)(var5);
                    var7 = var8.getConfig;
                    var5 = {};
                    var9 = 'recordQuestRequestAttempt';
                    var5.location = var9;
                    var5 = var7.bind(var8)(var5);
                    var5 = var5.enableNewRequestBehavior;
                    var8 = null;
                    var7 = null;
                    if (!var5) {
                        _fun47193_ip = 127;
                        continue _fun47193
                    }
                case 86:
                    var5 = var8 != var4;
                    var7 = null;
                    if (!var5) {
                        _fun47193_ip = 127;
                        continue _fun47193
                    }
                case 95:
                    var2 = _closure1_slot6;
                    var5 = var2.questAdDecisionByPlacement;
                    var2 = var5.get;
                    var2 = var2.bind(var5)(var4);
                    var5 = var8 != var2;
                    var7 = null;
                    if (!var5) {
                        _fun47193_ip = 127;
                        continue _fun47193
                    }
                case 124:
                    var7 = var2;
                case 127:
                    var5 = {
                        'initialSendTimestamp': null,
                        'endpoint': null,
                        'apiResponseTimestamp': null,
                        'wasSuccessful': false,
                        'callerSource': null,
                        'adRequestId': null
                    };
                    var2 = global;
                    var9 = var2.Date;
                    var8 = var9.now;
                    var8 = var8.bind(var9)();
                    var5.initialSendTimestamp = var8;
                    var5.endpoint = var6;
                    var8 = arg1;
                    var5.callerSource = var8;
                    var5.previousAdDecision = var7;
                    var5.placement = var4;
                    var4 = var3.pendingRequests;
                    var3 = var4.set;
                    var3 = var3.bind(var4)(var6, var5);
                    var3 = var2.setTimeout;
                    var2 = function() { // Environment: var1
                        _fun47194: for (var _fun47194_ip = 0;;) switch (_fun47194_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var3 = var1.pendingRequests;
                                var2 = var3.get;
                                var1 = _closure3_slot1;
                                var5 = var2.bind(var3)(var1);
                                var4 = null;
                                if (!(var4 != var5)) {
                                    _fun47194_ip = 77;
                                    continue _fun47194
                                }
                            case 33:
                                var3 = _closure1_slot8;
                                var2 = undefined;
                                var1 = 'timeout';
                                var1 = var3.bind(var2)(var5, var1, var4);
                                var1 = _closure3_slot0;
                                var2 = var1.pendingRequests;
                                var1 = var2.delete;
                                var0 = _closure3_slot1;
                                var0 = var1.bind(var2)(var0);
                            case 77:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = 30000;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(2);
        var1[0] = var0;
        var0 = {};
        var5 = 'recordQuestRequestApiResponse';
        var0.key = var5;
        var4 = function arg0, arg1() {
            _fun47195: for (var _fun47195_ip = 0;;) switch (_fun47195_ip) {
                case 0:
                    var3 = arg0;
                    var2 = arg1;
                    var1 = this;
                    var9 = var2.wasSuccessful;
                    var8 = var2.adRequestId;
                    var0 = undefined;
                    if (!(var8 === var0)) {
                        _fun47195_ip = 29;
                        continue _fun47195
                    }
                case 27:
                    var8 = null;
                case 29:
                    var13 = var2.currentQuestId;
                    if (!(var13 === var0)) {
                        _fun47195_ip = 41;
                        continue _fun47195
                    }
                case 39:
                    var13 = null;
                case 41:
                    var4 = var2.currentFetchedAt;
                    if (!(var4 === var0)) {
                        _fun47195_ip = 53;
                        continue _fun47195
                    }
                case 51:
                    var4 = null;
                case 53:
                    var5 = var1.pendingRequests;
                    var2 = var5.get;
                    var7 = var2.bind(var5)(var3);
                    var11 = null;
                    if (!(var11 != var7)) {
                        _fun47195_ip = 294;
                        continue _fun47195
                    }
                case 78:
                    var6 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var5 = 9;
                    var5 = var10[var5];
                    var10 = var6.bind(var0)(var5);
                    var6 = var10.getConfig;
                    var5 = {};
                    var12 = 'recordQuestRequestApiResponse';
                    var5.location = var12;
                    var5 = var6.bind(var10)(var5);
                    var10 = var5.enableNewRequestBehavior;
                    var6 = 'legacy';
                    var5 = null;
                    if (!var10) {
                        _fun47195_ip = 211;
                        continue _fun47195
                    }
                case 137:
                    var12 = null;
                    if (!(var11 !== var4)) {
                        _fun47195_ip = 189;
                        continue _fun47195
                    }
                case 143:
                    var10 = {};
                    var10.questId = var13;
                    var10.fetchedAt = var4;
                    var13 = 0;
                    var10.ttlMillis = var13;
                    var13 = var11 != var8;
                    var11 = undefined;
                    if (!var13) {
                        _fun47195_ip = 181;
                        continue _fun47195
                    }
                case 171:
                    var13 = {};
                    var13.decision_id = var8;
                    var11 = var13;
                case 181:
                    var10.adDecisionData = var11;
                    var12 = var10;
                case 189:
                    var11 = var7.previousAdDecision;
                    var10 = function arg0, arg1() {
                        _fun47196: for (var _fun47196_ip = 0;;) switch (_fun47196_ip) {
                            case 0:
                                var5 = arg0;
                                var1 = arg1;
                                var0 = function arg0() {
                                    _fun47197: for (var _fun47197_ip = 0;;) switch (_fun47197_ip) {
                                        case 0:
                                            var1 = arg0;
                                            var2 = null;
                                            var3 = var2 == var1;
                                            var0 = 'null';
                                            if (var3) {
                                                _fun47197_ip = 42;
                                                continue _fun47197
                                            }
                                        case 16:
                                            var1 = var1.questId;
                                            var2 = var2 == var1;
                                            var1 = 'quest';
                                            if (!var2) {
                                                _fun47197_ip = 39;
                                                continue _fun47197
                                            }
                                        case 33:
                                            var1 = 'no_serve';
                                        case 39:
                                            var0 = var1;
                                        case 42:
                                            return var0;
                                    }
                                };
                                var2 = undefined;
                                var7 = var0.bind(var2)(var5);
                                var6 = var0.bind(var2)(var1);
                                var0 = 'quest';
                                if (!(var0 === var7)) {
                                    _fun47196_ip = 37;
                                    continue _fun47196
                                }
                            case 33:
                                if (!(var0 !== var6)) {
                                    _fun47196_ip = 69;
                                    continue _fun47196
                                }
                            case 37:
                                var0 = global;
                                var0 = var0.HermesInternal;
                                var4 = var0.concat;
                                var3 = '';
                                var0 = '_to_';
                                var0 = var4.bind(var3)(var7, var0, var6);
                                _fun47196_ip = 120;
                                continue _fun47196;
                            case 69:
                                var4 = null;
                                var6 = var4 == var5;
                                var3 = undefined;
                                if (var6) {
                                    _fun47196_ip = 86;
                                    continue _fun47196
                                }
                            case 80:
                                var3 = var5.questId;
                            case 86:
                                var4 = var4 == var1;
                                var2 = undefined;
                                if (var4) {
                                    _fun47196_ip = 101;
                                    continue _fun47196
                                }
                            case 95:
                                var2 = var1.questId;
                            case 101:
                                var1 = 'different_quest';
                                if (!(var3 === var2)) {
                                    _fun47196_ip = 117;
                                    continue _fun47196
                                }
                            case 111:
                                var1 = 'same_quest';
                            case 117:
                                var0 = var1;
                            case 120:
                                return var0;
                        }
                    };
                    var6 = var10.bind(var0)(var11, var12);
                    var5 = var4;
                case 211:
                    var4 = _closure1_slot8;
                    var2 = {};
                    var17 = var2;
                    var16 = var7;
                    var7 = copyDataProperties(var17, var16);
                    var7 = global;
                    var10 = var7.Date;
                    var7 = var10.now;
                    var10 = var7.bind(var10)();
                    var7 = 'apiResponseTimestamp';
                    var2[var7] = var10;
                    var7 = 'wasSuccessful';
                    var2[var7] = var9;
                    var7 = 'adRequestId';
                    var2[var7] = var8;
                    var2 = var4.bind(var0)(var2, var6, var5);
                    var2 = var1.pendingRequests;
                    var1 = var2.delete;
                    var1 = var1.bind(var2)(var3);
                case 294:
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
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/QuestDecisionRoundtripTracker.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 3626, 5226, 660, 4312, 795, 5278, 4315, 5239, 2]);