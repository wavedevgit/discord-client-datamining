// modules/quests/useQuestForPlacement.tsx
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
        _fun92910: for (var _fun92910_ip = 0;;) switch (_fun92910_ip) {
            case 0:
                var2 = arg0;
                var4 = arg1;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 3;
                var3 = var3[var0];
                var0 = undefined;
                var5 = var5.bind(var0)(var3);
                var3 = var5.isMetaQuest;
                var3 = var3.bind(var5)();
                if (var3) {
                    _fun92910_ip = 93;
                    continue _fun92910
                }
            case 44:
                var5 = null;
                var5 = var5 != var2;
                if (!var5) {
                    _fun92910_ip = 90;
                    continue _fun92910
                }
            case 53:
                var7 = var2.fetchedAt;
                var6 = var2.ttlMillis;
                var7 = var7 + var6;
                var6 = global;
                var8 = var6.Date;
                var6 = var8.now;
                var6 = var6.bind(var8)();
                var5 = var7 >= var6;
            case 90:
                var3 = var5;
            case 93:
                if (var3) {
                    _fun92910_ip = 315;
                    continue _fun92910
                }
            case 99:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 4;
                var3 = var6[var3];
                var5 = var5.bind(var0)(var3);
                var3 = var5.getState;
                var5 = var3.bind(var5)();
                var3 = 'active';
                if (!(var3 !== var5)) {
                    _fun92910_ip = 189;
                    continue _fun92910
                }
            case 137:
                var3 = null;
                if (!(var3 != var2)) {
                    _fun92910_ip = 315;
                    continue _fun92910
                }
            case 146:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 5;
                var3 = var6[var3];
                var5 = var5.bind(var0)(var3);
                var3 = var5.clearQuestAdDecision;
                var2 = var2.ttlMillis;
                var2 = var3.bind(var5)(var4, var2);
                _fun92910_ip = 315;
                continue _fun92910;
            case 189:
                var3 = _closure1_slot5;
                var2 = var3.isFetchingQuestToDeliverByPlacement;
                var2 = var2.bind(var3)(var4);
                if (var2) {
                    _fun92910_ip = 315;
                    continue _fun92910
                }
            case 209:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 6;
                var2 = var5[var2];
                var5 = var3.bind(var0)(var2);
                var3 = var5.getConfig;
                var2 = {};
                var6 = 'maybeRefreshAd';
                var2.location = var6;
                var2 = var3.bind(var5)(var2);
                var2 = var2.enableNewRequestBehavior;
                if (!var2) {
                    _fun92910_ip = 315;
                    continue _fun92910
                }
            case 261:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 5;
                var5 = var3[var1];
                var6 = var2.bind(var0)(var5);
                var5 = var6.fetchCurrentQuests;
                var5 = var5.bind(var6)();
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.fetchQuestToDeliver;
                var1 = arg2;
                var1 = var2.bind(var3)(var4, var1);
            case 315:
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
    var3 = var4.bind(var0)(var3);
    var7 = var3.useEffect;
    var _closure1_slot3 = var7;
    var3 = var3.useRef;
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.Millis;
    var6 = var3.MINUTE;
    var3 = 10;
    var3 = var3 * var6;
    var _closure1_slot6 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/useQuestForPlacement.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun92911: for (var _fun92911_ip = 0;;) switch (_fun92911_ip) {
            case 0:
                var8 = arg0;
                var _closure2_slot0 = var8;
                var0 = _closure1_slot4;
                var6 = undefined;
                var4 = null;
                var0 = var0.bind(var6)(var4);
                var _closure2_slot1 = var0;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 7;
                var0 = var7[var2];
                var11 = var5.bind(var6)(var0);
                var10 = var11.useStateFromStores;
                var0 = _closure1_slot5;
                var9 = new Array(1);
                var9[0] = var0;
                var0 = function() { // Environment: var1
                    var0 = _closure1_slot5;
                    var0 = var0.questDeliveryOverride;
                    return var0;
                };
                var0 = var10.bind(var11)(var9, var0);
                var _closure2_slot2 = var0;
                var9 = var7[var2];
                var12 = var5.bind(var6)(var9);
                var11 = var12.useStateFromStores;
                var9 = _closure1_slot5;
                var10 = new Array(1);
                var10[0] = var9;
                var9 = function() { // Environment: var1
                    _fun92913: for (var _fun92913_ip = 0;;) switch (_fun92913_ip) {
                        case 0:
                            var0 = _closure1_slot5;
                            var2 = var0.questAdDecisionByPlacement;
                            var1 = var2.get;
                            var0 = _closure2_slot0;
                            var1 = var1.bind(var2)(var0);
                            var0 = null;
                            var2 = var0 != var1;
                            if (!var2) {
                                _fun92913_ip = 42;
                                continue _fun92913
                            }
                        case 39:
                            var0 = var1;
                        case 42:
                            return var0;
                    }
                };
                var9 = var11.bind(var12)(var10, var9);
                var _closure2_slot3 = var9;
                var2 = var7[var2];
                var10 = var5.bind(var6)(var2);
                var7 = var10.useStateFromStores;
                var2 = _closure1_slot5;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var1
                    _fun92914: for (var _fun92914_ip = 0;;) switch (_fun92914_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            var3 = null;
                            var2 = var3 == var0;
                            var0 = undefined;
                            if (var2) {
                                _fun92914_ip = 28;
                                continue _fun92914
                            }
                        case 18:
                            var2 = _closure2_slot3;
                            var0 = var2.questId;
                        case 28:
                            var2 = var3 != var0;
                            var0 = null;
                            if (!var2) {
                                _fun92914_ip = 82;
                                continue _fun92914
                            }
                        case 37:
                            var2 = _closure1_slot5;
                            var4 = var2.quests;
                            var2 = var4.get;
                            var1 = _closure2_slot3;
                            var1 = var1.questId;
                            var1 = var2.bind(var4)(var1);
                            var2 = var3 != var1;
                            var0 = null;
                            if (!var2) {
                                _fun92914_ip = 82;
                                continue _fun92914
                            }
                        case 79:
                            var0 = var1;
                        case 82:
                            return var0;
                    }
                };
                var2 = var7.bind(var10)(var5, var2);
                var7 = _closure1_slot3;
                var5 = new Array(3);
                var5[0] = var9;
                var5[1] = var8;
                var5[2] = var0;
                var1 = function() { // Environment: var1
                    _fun92915: for (var _fun92915_ip = 0;;) switch (_fun92915_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var2 = var2.current;
                            var3 = null;
                            if (!(var3 != var2)) {
                                _fun92915_ip = 44;
                                continue _fun92915
                            }
                        case 20:
                            var2 = global;
                            var5 = var2.clearInterval;
                            var2 = _closure2_slot1;
                            var4 = var2.current;
                            var2 = undefined;
                            var2 = var5.bind(var2)(var4);
                        case 44:
                            var2 = _closure2_slot2;
                            if (!(var3 != var2)) {
                                _fun92915_ip = 56;
                                continue _fun92915
                            }
                        case 52:
                            var2 = undefined;
                            return var2;
                        case 56:
                            var7 = _closure1_slot7;
                            var6 = _closure2_slot3;
                            var4 = _closure2_slot0;
                            var5 = undefined;
                            var3 = 'questBar-open';
                            var3 = var7.bind(var5)(var6, var4, var3);
                            var1 = _closure2_slot1;
                            var3 = global;
                            var4 = var3.setInterval;
                            var3 = _closure1_slot6;
                            var2 = function() { // Environment: var0
                                _fun92916: for (var _fun92916_ip = 0;;) switch (_fun92916_ip) {
                                    case 0:
                                        var4 = _closure1_slot7;
                                        var0 = _closure1_slot5;
                                        var3 = var0.questAdDecisionByPlacement;
                                        var2 = var3.get;
                                        var1 = _closure2_slot0;
                                        var1 = var2.bind(var3)(var1);
                                        var3 = null;
                                        var2 = var3 != var1;
                                        if (!var2) {
                                            _fun92916_ip = 46;
                                            continue _fun92916
                                        }
                                    case 43:
                                        var3 = var1;
                                    case 46:
                                        var2 = _closure2_slot0;
                                        var0 = undefined;
                                        var1 = 'questBar-interval';
                                        var1 = var4.bind(var0)(var3, var2, var1);
                                        return var0;
                                }
                            };
                            var2 = var4.bind(var5)(var2, var3);
                            var1.current = var2;
                            var1 = var1.current;
                            var _closure3_slot0 = var1;
                            var0 = function() { // Environment: var0
                                _fun92917: for (var _fun92917_ip = 0;;) switch (_fun92917_ip) {
                                    case 0:
                                        var2 = _closure3_slot0;
                                        var1 = null;
                                        if (!(var1 != var2)) {
                                            _fun92917_ip = 32;
                                            continue _fun92917
                                        }
                                    case 13:
                                        var1 = global;
                                        var2 = var1.clearInterval;
                                        var1 = _closure3_slot0;
                                        var0 = undefined;
                                        var0 = var2.bind(var0)(var1);
                                    case 32:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            return var0;
                    }
                };
                var1 = var7.bind(var6)(var1, var5);
                if (!(var4 == var0)) {
                    _fun92911_ip = 253;
                    continue _fun92911
                }
            case 202:
                var5 = var4 == var2;
                var1 = null;
                if (var5) {
                    _fun92911_ip = 250;
                    continue _fun92911
                }
            case 211:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 8;
                var3 = var7[var3];
                var5 = var5.bind(var6)(var3);
                var3 = var5.isQuestExpired;
                var3 = var3.bind(var5)(var2);
                var1 = null;
                if (var3) {
                    _fun92911_ip = 250;
                    continue _fun92911
                }
            case 247:
                var1 = var2;
            case 250:
                var0 = var1;
            case 253:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 5230, 667, 3524, 5287, 5262, 5243, 566, 5242, 2]);