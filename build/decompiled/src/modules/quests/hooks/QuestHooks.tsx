// modules/quests/hooks/QuestHooks.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var23 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var24 = dependencyMap;
    var _closure1_slot0 = var23;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var24;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun47190: for (var _fun47190_ip = 0;;) switch (_fun47190_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun47190_ip = 45;
                    continue _fun47190
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun47190_ip = 54;
                    continue _fun47190
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun47190_ip = 342;
                    continue _fun47190
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun47190_ip = 322;
                    continue _fun47190
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun47190_ip = 282;
                    continue _fun47190
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun47190_ip = 269;
                    continue _fun47190
                }
            case 109:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun47190_ip = 162;
                    continue _fun47190
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun47190_ip = 178;
                    continue _fun47190
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun47190_ip = 248;
                    continue _fun47190
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun47190_ip = 248;
                    continue _fun47190
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun47190_ip = 233;
                    continue _fun47190
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun47190_ip = 246;
                    continue _fun47190
                }
            case 233:
                var8 = _closure1_slot34;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun47190_ip = 264;
                continue _fun47190;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun47190_ip = 282;
                continue _fun47190;
            case 269:
                var6 = _closure1_slot34;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun47190_ip = 322;
                    continue _fun47190
                }
            case 288:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 322:
                if (!var3) {
                    _fun47190_ip = 329;
                    continue _fun47190
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun47191: for (var _fun47191_ip = 0;;) switch (_fun47191_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun47191_ip = 56;
                                continue _fun47191
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun47191_ip = 67;
                            continue _fun47191;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 342:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot33 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun47192: for (var _fun47192_ip = 0;;) switch (_fun47192_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun47192_ip = 23;
                    continue _fun47192
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun47192_ip = 33;
                    continue _fun47192
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun47192_ip = 70;
                    continue _fun47192
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun47192_ip = 55;
                    continue _fun47192
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot34 = var0;
    var21 = function() { // Original name: useQuests, environment: var1
        _fun47193: for (var _fun47193_ip = 0;;) switch (_fun47193_ip) {
            case 0:
                var8 = arguments[0];
                var10 = undefined;
                if (!(var8 === var10)) {
                    _fun47193_ip = 25;
                    continue _fun47193
                }
            case 11:
                var8 = {
                    'fetchPolicy': 'cache-only',
                    'callerSource': 'unknown'
                };
            case 25:
                var _closure2_slot0 = var8;
                var _closure2_slot1 = var10;
                var _closure2_slot2 = var10;
                var _closure2_slot3 = var10;
                var _closure2_slot4 = var10;
                var _closure2_slot5 = var10;
                var3 = _closure1_slot5;
                var2 = var3.useState;
                var1 = false;
                var3 = var2.bind(var3)(var1);
                var2 = _closure1_slot4;
                var1 = 2;
                var3 = var2.bind(var10)(var3, var1);
                var1 = 0;
                var1 = var3[var1];
                _closure2_slot1 = var1;
                var2 = 1;
                var2 = var3[var2];
                _closure2_slot2 = var2;
                var7 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 11;
                var3 = var11[var2];
                var9 = var7.bind(var10)(var3);
                var6 = var9.useStateFromStoresArray;
                var3 = _closure1_slot10;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = function() { // Environment: var0
                    var0 = _closure1_slot10;
                    var1 = var0.quests;
                    var0 = var1.values;
                    var4 = var0.bind(var1)();
                    var0 = new Array(0);
                    var3 = 0;
                    var5 = var0;
                    var1 = arraySpread(var5, var4, var3);
                    return var0;
                };
                var4 = var6.bind(var9)(var4, var3);
                var3 = var11[var2];
                var12 = var7.bind(var10)(var3);
                var9 = var12.useStateFromStoresArray;
                var3 = _closure1_slot10;
                var6 = new Array(1);
                var6[0] = var3;
                var3 = function() { // Environment: var0
                    var0 = _closure1_slot10;
                    var1 = var0.excludedQuests;
                    var0 = var1.values;
                    var4 = var0.bind(var1)();
                    var0 = new Array(0);
                    var3 = 0;
                    var5 = var0;
                    var1 = arraySpread(var5, var4, var3);
                    return var0;
                };
                var3 = var9.bind(var12)(var6, var3);
                var2 = var11[var2];
                var12 = var7.bind(var10)(var2);
                var9 = var12.useStateFromStoresObject;
                var2 = _closure1_slot10;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = function() { // Environment: var0
                    var0 = {};
                    var2 = _closure1_slot10;
                    var2 = var2.isFetchingCurrentQuests;
                    var0.isFetchingCurrentQuests = var2;
                    var1 = _closure1_slot10;
                    var1 = var1.lastFetchedCurrentQuests;
                    var0.lastFetchedCurrentQuests = var1;
                    return var0;
                };
                var6 = var9.bind(var12)(var6, var2);
                var2 = var6.isFetchingCurrentQuests;
                _closure2_slot3 = var2;
                var9 = var6.lastFetchedCurrentQuests;
                _closure2_slot4 = var9;
                var6 = 12;
                var6 = var11[var6];
                var10 = var7.bind(var10)(var6);
                var7 = var10.getIsEligibleForQuests;
                var6 = {};
                var11 = _closure1_slot12;
                var11 = var11.USE_QUESTS;
                var6.location = var11;
                var10 = var7.bind(var10)(var6);
                _closure2_slot5 = var10;
                var7 = _closure1_slot5;
                var6 = var7.useEffect;
                var11 = var8.fetchPolicy;
                var5 = new Array(6);
                var5[0] = var11;
                var5[1] = var10;
                var5[2] = var1;
                var5[3] = var2;
                var5[4] = var9;
                var8 = var8.callerSource;
                var5[5] = var8;
                var0 = function() { // Environment: var0
                    _fun47197: for (var _fun47197_ip = 0;;) switch (_fun47197_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var2 = var0.fetchPolicy;
                            var0 = 'cache-only';
                            if (!(var0 !== var2)) {
                                _fun47197_ip = 405;
                                continue _fun47197
                            }
                        case 26:
                            var0 = _closure2_slot0;
                            var2 = var0.fetchPolicy;
                            var0 = 'cache-and-network';
                            if (!(var0 !== var2)) {
                                _fun47197_ip = 82;
                                continue _fun47197
                            }
                        case 46:
                            var0 = _closure2_slot0;
                            var2 = var0.fetchPolicy;
                            var0 = 'cache-or-network';
                            if (!(var0 === var2)) {
                                _fun47197_ip = 405;
                                continue _fun47197
                            }
                        case 69:
                            var2 = _closure2_slot4;
                            var0 = 0;
                            if (!(var0 === var2)) {
                                _fun47197_ip = 405;
                                continue _fun47197
                            }
                        case 82:
                            var0 = _closure2_slot5;
                            if (!var0) {
                                _fun47197_ip = 405;
                                continue _fun47197
                            }
                        case 92:
                            var0 = _closure2_slot1;
                            if (var0) {
                                _fun47197_ip = 405;
                                continue _fun47197
                            }
                        case 102:
                            var0 = _closure2_slot3;
                            if (var0) {
                                _fun47197_ip = 405;
                                continue _fun47197
                            }
                        case 112:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 13;
                            var2 = var2[var0];
                            var0 = undefined;
                            var4 = var4.bind(var0)(var2);
                            var2 = var4.isMetaQuest;
                            var2 = var2.bind(var4)();
                            if (var2) {
                                _fun47197_ip = 405;
                                continue _fun47197
                            }
                        case 153:
                            var4 = _closure2_slot2;
                            var2 = true;
                            var2 = var4.bind(var0)(var2);
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 14;
                            var4 = var6[var2];
                            var7 = var5.bind(var0)(var4);
                            var4 = var7.fetchCurrentQuests;
                            var4 = var4.bind(var7)();
                            var4 = 15;
                            var4 = var6[var4];
                            var5 = var5.bind(var0)(var4);
                            var4 = var5.isMac;
                            var4 = var4.bind(var5)();
                            if (!var4) {
                                _fun47197_ip = 260;
                                continue _fun47197
                            }
                        case 219:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var4 = 16;
                            var4 = var6[var4];
                            var5 = var5.bind(var0)(var4);
                            var4 = var5.getState;
                            var5 = var4.bind(var5)();
                            var4 = 'focused';
                            if (!(var4 === var5)) {
                                _fun47197_ip = 403;
                                continue _fun47197
                            }
                        case 260:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var4 = 17;
                            var4 = var6[var4];
                            var6 = var5.bind(var0)(var4);
                            var5 = var6.getConfig;
                            var4 = {};
                            var7 = 'QuestHookUseQuests';
                            var4.location = var7;
                            var4 = var5.bind(var6)(var4);
                            var4 = var4.enableNewRequestBehavior;
                            if (var4) {
                                _fun47197_ip = 401;
                                continue _fun47197
                            }
                        case 312:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = var6[var2];
                            var4 = var5.bind(var0)(var2);
                            var3 = var4.fetchQuestToDeliver;
                            var2 = 18;
                            var2 = var6[var2];
                            var2 = var5.bind(var0)(var2);
                            var2 = var2.QuestPlacement;
                            var2 = var2.MOBILE_HOME_DOCK_AREA;
                            var1 = _closure2_slot0;
                            var6 = var1.callerSource;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var5 = var1.concat;
                            var1 = 'use_quests_';
                            var1 = var5.bind(var1)(var6);
                            var1 = var3.bind(var4)(var2, var1);
                            _fun47197_ip = 405;
                            continue _fun47197;
                        case 401:
                            return var0;
                        case 403:
                            return var0;
                        case 405:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var6.bind(var7)(var0, var5);
                var0 = {};
                var0.quests = var4;
                var0.excludedQuests = var3;
                var0.isFetchingCurrentQuests = var2;
                var0.hasFetched = var1;
                return var0;
        }
    };
    var _closure1_slot35 = var21;
    var0 = function(arg0, arg1, arg2) { // Original name: defaultSortFn, environment: var1
        _fun47198: for (var _fun47198_ip = 0;;) switch (_fun47198_ip) {
            case 0:
                var3 = arg0;
                var0 = arg1;
                var4 = var3.id;
                var2 = _closure1_slot18;
                var2 = var4 === var2;
                var5 = var0.id;
                var4 = _closure1_slot18;
                var4 = var5 === var4;
                if (!var2) {
                    _fun47198_ip = 65;
                    continue _fun47198
                }
            case 38:
                var7 = var3.userStatus;
                var6 = null;
                var8 = var6 == var7;
                var5 = undefined;
                if (var8) {
                    _fun47198_ip = 61;
                    continue _fun47198
                }
            case 55:
                var5 = var7.completedAt;
            case 61:
                var2 = var6 == var5;
            case 65:
                if (!var4) {
                    _fun47198_ip = 95;
                    continue _fun47198
                }
            case 68:
                var7 = var0.userStatus;
                var6 = null;
                var8 = var6 == var7;
                var5 = undefined;
                if (var8) {
                    _fun47198_ip = 91;
                    continue _fun47198
                }
            case 85:
                var5 = var7.completedAt;
            case 91:
                var4 = var6 == var5;
            case 95:
                if (!(var2 === var4)) {
                    _fun47198_ip = 663;
                    continue _fun47198
                }
            case 102:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 19;
                var4 = var6[var4];
                var10 = undefined;
                var5 = var5.bind(var10)(var4);
                var4 = var5.isQuestExpired;
                var4 = var4.bind(var5)(var3);
                var4 = !var4;
                var6 = var3.userStatus;
                var13 = null;
                var7 = var13 == var6;
                var5 = undefined;
                if (var7) {
                    _fun47198_ip = 161;
                    continue _fun47198
                }
            case 155:
                var5 = var6.claimedAt;
            case 161:
                var6 = var13 != var5;
                var7 = var0.userStatus;
                var8 = var13 == var7;
                var5 = undefined;
                if (var8) {
                    _fun47198_ip = 186;
                    continue _fun47198
                }
            case 180:
                var5 = var7.claimedAt;
            case 186:
                var9 = var13 != var5;
                var7 = var3.userStatus;
                var8 = var13 == var7;
                var5 = undefined;
                if (var8) {
                    _fun47198_ip = 211;
                    continue _fun47198
                }
            case 205:
                var5 = var7.enrolledAt;
            case 211:
                var7 = var13 != var5;
                var8 = var0.userStatus;
                var11 = var13 == var8;
                var5 = undefined;
                if (var11) {
                    _fun47198_ip = 236;
                    continue _fun47198
                }
            case 230:
                var5 = var8.enrolledAt;
            case 236:
                var8 = var13 != var5;
                var11 = _closure1_slot0;
                var15 = _closure1_slot2;
                var5 = 20;
                var5 = var15[var5];
                var12 = var11.bind(var10)(var5);
                var11 = var12.isQuestHomeSuggestedSortRotationExperimentEnabled;
                var5 = _closure1_slot12;
                var5 = var5.QUEST_HOME_DESKTOP;
                var5 = var11.bind(var12)(var5);
                var12 = var5.enabled;
                var11 = var5.minutes;
                var14 = _closure1_slot1;
                var5 = 21;
                var5 = var15[var5];
                var5 = var14.bind(var10)(var5);
                var5 = var5.Millis;
                var5 = var5.MINUTE;
                var14 = var5 * var11;
                var5 = _closure1_slot32;
                var5 = var5.bind(var10)(var3, var14);
                var11 = _closure1_slot32;
                var11 = var11.bind(var10)(var0, var14);
                if (var4) {
                    _fun47198_ip = 430;
                    continue _fun47198
                }
            case 347:
                if (!(var6 === var9)) {
                    _fun47198_ip = 415;
                    continue _fun47198
                }
            case 351:
                if (!(var7 === var8)) {
                    _fun47198_ip = 400;
                    continue _fun47198
                }
            case 355:
                var16 = _closure1_slot44;
                var4 = var3.config;
                var15 = var4.expiresAt;
                var4 = var0.config;
                var14 = var4.expiresAt;
                var4 = _closure1_slot26;
                var4 = var4.DESC;
                var4 = var16.bind(var10)(var15, var14, var4);
                _fun47198_ip = 413;
                continue _fun47198;
            case 400:
                var14 = 1;
                if (!var7) {
                    _fun47198_ip = 410;
                    continue _fun47198
                }
            case 406:
                var14 = _closure1_slot24;
            case 410:
                var4 = var14;
            case 413:
                _fun47198_ip = 428;
                continue _fun47198;
            case 415:
                var14 = 1;
                if (!var6) {
                    _fun47198_ip = 425;
                    continue _fun47198
                }
            case 421:
                var14 = _closure1_slot24;
            case 425:
                var4 = var14;
            case 428:
                return var4;
            case 430:
                var4 = arg2;
                var17 = var4.takeover;
                var4 = var13 != var17;
                if (!var4) {
                    _fun47198_ip = 483;
                    continue _fun47198
                }
            case 446:
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var14 = 22;
                var14 = var16[var14];
                var16 = var15.bind(var10)(var14);
                var15 = var16.isQuestFeaturedByTakeover;
                var14 = var3.id;
                var4 = var15.bind(var16)(var17, var14);
            case 483:
                var13 = var13 != var17;
                if (!var13) {
                    _fun47198_ip = 527;
                    continue _fun47198
                }
            case 490:
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var14 = 22;
                var14 = var16[var14];
                var16 = var15.bind(var10)(var14);
                var15 = var16.isQuestFeaturedByTakeover;
                var14 = var0.id;
                var13 = var15.bind(var16)(var17, var14);
            case 527:
                if (!(var4 !== var13)) {
                    _fun47198_ip = 537;
                    continue _fun47198
                }
            case 531:
                if (var4) {
                    _fun47198_ip = 648;
                    continue _fun47198
                }
            case 534:
                if (var13) {
                    _fun47198_ip = 648;
                    continue _fun47198
                }
            case 537:
                if (!var12) {
                    _fun47198_ip = 550;
                    continue _fun47198
                }
            case 540:
                if (!(var5 !== var11)) {
                    _fun47198_ip = 550;
                    continue _fun47198
                }
            case 544:
                if (var5) {
                    _fun47198_ip = 633;
                    continue _fun47198
                }
            case 547:
                if (var11) {
                    _fun47198_ip = 633;
                    continue _fun47198
                }
            case 550:
                if (!(var6 === var9)) {
                    _fun47198_ip = 618;
                    continue _fun47198
                }
            case 554:
                if (!(var7 === var8)) {
                    _fun47198_ip = 603;
                    continue _fun47198
                }
            case 558:
                var9 = _closure1_slot44;
                var3 = var3.config;
                var8 = var3.expiresAt;
                var0 = var0.config;
                var3 = var0.expiresAt;
                var0 = _closure1_slot26;
                var0 = var0.ASC;
                var0 = var9.bind(var10)(var8, var3, var0);
                _fun47198_ip = 616;
                continue _fun47198;
            case 603:
                var3 = 1;
                if (!var7) {
                    _fun47198_ip = 613;
                    continue _fun47198
                }
            case 609:
                var3 = _closure1_slot24;
            case 613:
                var0 = var3;
            case 616:
                _fun47198_ip = 631;
                continue _fun47198;
            case 618:
                var3 = 1;
                if (var6) {
                    _fun47198_ip = 628;
                    continue _fun47198
                }
            case 624:
                var3 = _closure1_slot24;
            case 628:
                var0 = var3;
            case 631:
                _fun47198_ip = 646;
                continue _fun47198;
            case 633:
                var3 = 1;
                if (var5) {
                    _fun47198_ip = 643;
                    continue _fun47198
                }
            case 639:
                var3 = _closure1_slot24;
            case 643:
                var0 = var3;
            case 646:
                _fun47198_ip = 661;
                continue _fun47198;
            case 648:
                var3 = 1;
                if (!var4) {
                    _fun47198_ip = 658;
                    continue _fun47198
                }
            case 654:
                var3 = _closure1_slot24;
            case 658:
                var0 = var3;
            case 661:
                return var0;
            case 663:
                var0 = 1;
                if (!var2) {
                    _fun47198_ip = 673;
                    continue _fun47198
                }
            case 669:
                var0 = _closure1_slot24;
            case 673:
                return var0;
        }
    };
    var _closure1_slot36 = var0;
    var0 = function(arg0, arg1) { // Original name: recentSortFn, environment: var1
        var4 = _closure1_slot44;
        var1 = arg0;
        var1 = var1.config;
        var3 = var1.startsAt;
        var1 = arg1;
        var1 = var1.config;
        var2 = var1.startsAt;
        var0 = _closure1_slot26;
        var1 = var0.DESC;
        var0 = undefined;
        var0 = var4.bind(var0)(var3, var2, var1);
        return var0;
    };
    var _closure1_slot37 = var0;
    var0 = function(arg0, arg1) { // Original name: recentlyEnrolledSortFn, environment: var1
        _fun47200: for (var _fun47200_ip = 0;;) switch (_fun47200_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var1 = var3.userStatus;
                var0 = null;
                var4 = var0 == var1;
                var5 = undefined;
                var7 = undefined;
                if (var4) {
                    _fun47200_ip = 31;
                    continue _fun47200
                }
            case 25:
                var7 = var1.enrolledAt;
            case 31:
                var1 = var2.userStatus;
                var4 = var0 == var1;
                var6 = undefined;
                if (var4) {
                    _fun47200_ip = 52;
                    continue _fun47200
                }
            case 46:
                var6 = var1.enrolledAt;
            case 52:
                if (!(var0 == var7)) {
                    _fun47200_ip = 60;
                    continue _fun47200
                }
            case 56:
                if (!(var0 != var6)) {
                    _fun47200_ip = 117;
                    continue _fun47200
                }
            case 60:
                if (!(var0 != var7)) {
                    _fun47200_ip = 68;
                    continue _fun47200
                }
            case 64:
                if (!(var0 != var6)) {
                    _fun47200_ip = 108;
                    continue _fun47200
                }
            case 68:
                if (!(var0 == var7)) {
                    _fun47200_ip = 82;
                    continue _fun47200
                }
            case 72:
                var1 = var0 != var6;
                var0 = 1;
                if (var1) {
                    _fun47200_ip = 106;
                    continue _fun47200
                }
            case 82:
                var4 = _closure1_slot44;
                var1 = _closure1_slot26;
                var1 = var1.DESC;
                var0 = var4.bind(var5)(var7, var6, var1);
            case 106:
                _fun47200_ip = 115;
                continue _fun47200;
            case 108:
                var0 = _closure1_slot24;
            case 115:
                _fun47200_ip = 163;
                continue _fun47200;
            case 117:
                var4 = _closure1_slot44;
                var3 = var3.config;
                var3 = var3.expiresAt;
                var2 = var2.config;
                var2 = var2.expiresAt;
                var1 = _closure1_slot26;
                var1 = var1.DESC;
                var0 = var4.bind(var5)(var3, var2, var1);
            case 163:
                return var0;
        }
    };
    var _closure1_slot38 = var0;
    var0 = function(arg0, arg1) { // Original name: expiringSoonSortFn, environment: var1
        var4 = _closure1_slot44;
        var1 = arg0;
        var1 = var1.config;
        var3 = var1.expiresAt;
        var1 = arg1;
        var1 = var1.config;
        var2 = var1.expiresAt;
        var0 = _closure1_slot26;
        var1 = var0.ASC;
        var0 = undefined;
        var0 = var4.bind(var0)(var3, var2, var1);
        return var0;
    };
    var _closure1_slot39 = var0;
    var0 = function(arg0, arg1) { // Original name: doesQuestPassTaskFilter, environment: var1
        _fun47202: for (var _fun47202_ip = 0;;) switch (_fun47202_ip) {
            case 0:
                var2 = arg0;
                var3 = arg1;
                var1 = _closure1_slot16;
                var1 = var1.VIDEO;
                if (!(var1 !== var3)) {
                    _fun47202_ip = 155;
                    continue _fun47202
                }
            case 26:
                var1 = _closure1_slot16;
                var1 = var1.PLAY;
                if (!(var1 !== var3)) {
                    _fun47202_ip = 44;
                    continue _fun47202
                }
            case 40:
                var1 = false;
                return var1;
            case 44:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var6 = 23;
                var1 = var1[var6];
                var5 = undefined;
                var4 = var3.bind(var5)(var1);
                var3 = var4.hasPlayOnDesktopTask;
                var1 = {};
                var1.quest = var2;
                var1 = var3.bind(var4)(var1);
                if (var1) {
                    _fun47202_ip = 122;
                    continue _fun47202
                }
            case 87:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var7 = var4.bind(var5)(var3);
                var4 = var7.hasStreamOnDesktopTask;
                var3 = {};
                var3.quest = var2;
                var1 = var4.bind(var7)(var3);
            case 122:
                if (var1) {
                    _fun47202_ip = 153;
                    continue _fun47202
                }
            case 125:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var4 = var4.bind(var5)(var3);
                var3 = var4.hasPlayActivityTask;
                var1 = var3.bind(var4)(var2);
            case 153:
                return var1;
            case 155:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 23;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var0 = var1.hasWatchVideoTasks;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot40 = var0;
    var0 = function(arg0, arg1) { // Original name: doesQuestPassRewardFilter, environment: var1
        _fun47203: for (var _fun47203_ip = 0;;) switch (_fun47203_ip) {
            case 0:
                var0 = arg0;
                var3 = arg1;
                var2 = _closure1_slot17;
                var2 = var2.VIRTUAL_CURRENCY;
                if (!(var2 !== var3)) {
                    _fun47203_ip = 174;
                    continue _fun47203
                }
            case 26:
                var2 = _closure1_slot17;
                var2 = var2.COLLECTIBLE;
                if (!(var2 !== var3)) {
                    _fun47203_ip = 134;
                    continue _fun47203
                }
            case 40:
                var2 = _closure1_slot17;
                var2 = var2.IN_GAME;
                if (!(var2 !== var3)) {
                    _fun47203_ip = 58;
                    continue _fun47203
                }
            case 54:
                var2 = false;
                return var2;
            case 58:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var6 = 24;
                var2 = var2[var6];
                var5 = undefined;
                var4 = var3.bind(var5)(var2);
                var3 = var4.hasInGameQuestReward;
                var2 = var0.config;
                var2 = var3.bind(var4)(var2);
                if (var2) {
                    _fun47203_ip = 132;
                    continue _fun47203
                }
            case 99:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var5 = var4.bind(var5)(var3);
                var4 = var5.hasQuestRewardCode;
                var3 = var0.config;
                var2 = var4.bind(var5)(var3);
            case 132:
                return var2;
            case 134:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 24;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.hasCollectiblesQuestReward;
                var2 = var0.config;
                var2 = var3.bind(var4)(var2);
                return var2;
            case 174:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 24;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.hasVirtualCurrencyReward;
                var0 = var0.config;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot41 = var0;
    var0 = function(arg0, arg1, arg2) { // Original name: doesQuestPassFilter, environment: var1
        _fun47204: for (var _fun47204_ip = 0;;) switch (_fun47204_ip) {
            case 0:
                var4 = arg1;
                var3 = arg2;
                var0 = arg0;
                var _closure2_slot0 = var0;
                var0 = 'task';
                if (!(var0 !== var4)) {
                    _fun47204_ip = 42;
                    continue _fun47204
                }
            case 23:
                var2 = 'reward';
                var0 = undefined;
                if (!(var2 === var4)) {
                    _fun47204_ip = 49;
                    continue _fun47204
                }
            case 33:
                var0 = _closure1_slot41;
                _fun47204_ip = 49;
                continue _fun47204;
            case 42:
                var0 = _closure1_slot40;
            case 49:
                var _closure2_slot1 = var0;
                var2 = var3.length;
                var0 = 0;
                var0 = var0 === var2;
                if (var0) {
                    _fun47204_ip = 83;
                    continue _fun47204
                }
            case 67:
                var2 = var3.some;
                var1 = function(arg0) { // Environment: var1
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var0 = arg0;
                    var1 = var0.filter;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var0 = var2.bind(var3)(var1);
            case 83:
                return var0;
        }
    };
    var _closure1_slot42 = var0;
    var20 = function(arg0) { // Original name: sortQuests, environment: var1
        _fun47206: for (var _fun47206_ip = 0;;) switch (_fun47206_ip) {
            case 0:
                var6 = arg0;
                var1 = arguments[1];
                var4 = undefined;
                if (!(var1 === var4)) {
                    _fun47206_ip = 21;
                    continue _fun47206
                }
            case 14:
                var1 = _closure1_slot25;
            case 21:
                var3 = var1.sortMethod;
                var5 = var1.filters;
                var1 = null;
                var2 = var6;
                if (!(var1 != var5)) {
                    _fun47206_ip = 67;
                    continue _fun47206
                }
            case 42:
                var7 = var5.length;
                var1 = 0;
                var2 = var6;
                if (!(var1 !== var7)) {
                    _fun47206_ip = 67;
                    continue _fun47206
                }
            case 56:
                var1 = function(arg0, arg1) { // Original name: filterQuests, environment: var0
                    _fun47207: for (var _fun47207_ip = 0;;) switch (_fun47207_ip) {
                        case 0:
                            var0 = arg0;
                            var5 = arg1;
                            var3 = var5.length;
                            var2 = 0;
                            if (!(var2 !== var3)) {
                                _fun47207_ip = 81;
                                continue _fun47207
                            }
                        case 19:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 25;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.groupBy;
                            var2 = 'group';
                            var2 = var3.bind(var4)(var5, var2);
                            var _closure3_slot0 = var2;
                            var2 = var0.filter;
                            var1 = function(arg0) { // Environment: var1
                                var1 = arg0;
                                var _closure4_slot0 = var1;
                                var1 = global;
                                var3 = var1.Object;
                                var2 = var3.entries;
                                var1 = _closure3_slot0;
                                var2 = var2.bind(var3)(var1);
                                var1 = var2.every;
                                var0 = function(arg0) { // Environment: var0
                                    _fun47209: for (var _fun47209_ip = 0;;) switch (_fun47209_ip) {
                                        case 0:
                                            var5 = arg0;
                                            var0 = var5[Symbol.iterator];
                                            var5 = var0().next;
                                            var2 = var5().value;
                                            var1 = var0;
                                            var4 = undefined;
                                            var1 = var1 === var4;
                                            var3 = undefined;
                                            if (var1) {
                                                _fun47209_ip = 27;
                                                continue _fun47209
                                            }
                                        case 24:
                                            var3 = var2;
                                        case 27:
                                            var2 = undefined;
                                            if (var1) {
                                                _fun47209_ip = 57;
                                                continue _fun47209
                                            }
                                        case 32:
                                            var6 = var5().value;
                                            var5 = var0;
                                            var5 = var5 === var4;
                                            var2 = undefined;
                                            var1 = var5;
                                            if (var5) {
                                                _fun47209_ip = 57;
                                                continue _fun47209
                                            }
                                        case 51:
                                            var2 = var6;
                                            var1 = var5;
                                        case 57:
                                            if (var1) {
                                                _fun47209_ip = 63;
                                                continue _fun47209
                                            }
                                        case 60:
                                            var0.return();
                                        case 63:
                                            var1 = _closure1_slot42;
                                            var0 = _closure4_slot0;
                                            var0 = var1.bind(var4)(var0, var3, var2);
                                            return var0;
                                    }
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var1 = var2.bind(var0)(var1);
                            return var1;
                        case 81:
                            return var0;
                    }
                };
                var2 = var1.bind(var4)(var6, var5);
            case 67:
                var1 = _closure1_slot14;
                var1 = var1.MOST_RECENT;
                if (!(var1 !== var3)) {
                    _fun47206_ip = 140;
                    continue _fun47206
                }
            case 84:
                var1 = _closure1_slot14;
                var1 = var1.RECENTLY_ENROLLED;
                if (!(var1 !== var3)) {
                    _fun47206_ip = 134;
                    continue _fun47206
                }
            case 98:
                var1 = _closure1_slot14;
                var1 = var1.EXPIRING_SOON;
                if (!(var1 !== var3)) {
                    _fun47206_ip = 128;
                    continue _fun47206
                }
            case 112:
                var1 = _closure1_slot14;
                var1 = var1.SUGGESTED;
                var3 = _closure1_slot36;
                _fun47206_ip = 144;
                continue _fun47206;
            case 128:
                var3 = _closure1_slot39;
                _fun47206_ip = 144;
                continue _fun47206;
            case 134:
                var3 = _closure1_slot38;
                _fun47206_ip = 144;
                continue _fun47206;
            case 140:
                var3 = _closure1_slot37;
            case 144:
                var1 = {};
                var6 = _closure1_slot10;
                var5 = var6.getQuestHomeTakeoverConfig;
                var5 = var5.bind(var6)();
                var1.takeover = var5;
                var0 = function(arg0, arg1) { // Original name: prioritizeLiveQuests, environment: var0
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var1 = arg1;
                    var _closure3_slot1 = var1;
                    var0 = function(arg0, arg1) { // Environment: var0
                        _fun47211: for (var _fun47211_ip = 0;;) switch (_fun47211_ip) {
                            case 0:
                                var6 = arg0;
                                var5 = arg1;
                                var1 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var0 = 19;
                                var3 = var7[var0];
                                var4 = undefined;
                                var8 = var1.bind(var4)(var3);
                                var3 = var8.isQuestExpired;
                                var3 = var3.bind(var8)(var6);
                                var3 = !var3;
                                var0 = var7[var0];
                                var1 = var1.bind(var4)(var0);
                                var0 = var1.isQuestExpired;
                                var0 = var0.bind(var1)(var5);
                                var0 = !var0;
                                if (!(var3 === var0)) {
                                    _fun47211_ip = 92;
                                    continue _fun47211
                                }
                            case 72:
                                var1 = _closure3_slot0;
                                var0 = _closure3_slot1;
                                var0 = var1.bind(var4)(var6, var5, var0);
                                _fun47211_ip = 105;
                                continue _fun47211;
                            case 92:
                                var1 = 1;
                                if (!var3) {
                                    _fun47211_ip = 102;
                                    continue _fun47211
                                }
                            case 98:
                                var1 = _closure1_slot24;
                            case 102:
                                var0 = var1;
                            case 105:
                                return var0;
                        }
                    };
                    return var0;
                };
                var1 = var0.bind(var4)(var3, var1);
                var0 = var2.sort;
                var0 = var0.bind(var2)(var1);
                return var0;
        }
    };
    var _closure1_slot43 = var20;
    var0 = function(arg0, arg1, arg2) { // Original name: sortByDate, environment: var1
        _fun47212: for (var _fun47212_ip = 0;;) switch (_fun47212_ip) {
            case 0:
                var3 = arg0;
                var1 = _closure1_slot26;
                var4 = var1.DESC;
                var1 = 1;
                var2 = arg2;
                if (!(var2 === var4)) {
                    _fun47212_ip = 30;
                    continue _fun47212
                }
            case 26:
                var1 = _closure1_slot24;
            case 30:
                var2 = var3.localeCompare;
                var0 = arg1;
                var0 = var2.bind(var3)(var0);
                var0 = var0 * var1;
                return var0;
        }
    };
    var _closure1_slot44 = var0;
    var17 = function() { // Original name: useExpiredQuestsMap, environment: var1
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var0 = _closure1_slot10;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var0
            var1 = _closure1_slot10;
            var0 = var1.getExpiredQuestsMap;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot45 = var17;
    var16 = function(arg0) { // Original name: useIsQuestExpired, environment: var1
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 11;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot10;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            _fun47216: for (var _fun47216_ip = 0;;) switch (_fun47216_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun47216_ip = 43;
                        continue _fun47216
                    }
                case 16:
                    var3 = _closure1_slot10;
                    var2 = var3.isQuestExpired;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var0 = var2.bind(var3)(var1);
                case 43:
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var _closure1_slot46 = var16;
    var15 = function(arg0) { // Original name: useIsQuestProgressingOnDesktop, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 11;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot10;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot10;
            var1 = var2.isProgressingOnDesktop;
            var0 = _closure2_slot0;
            var0 = var0.id;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot47 = var15;
    var14 = function(arg0) { // Original name: useIsQuestProgressingOnConsole, environment: var1
        var4 = arg0;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot5;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 23;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.isQuestProgressingOnConsole;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot48 = var14;
    var13 = function(arg0) { // Original name: useIsQuestProgressingVideoQuest, environment: var1
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 11;
        var3 = var3[var2];
        var2 = undefined;
        var6 = var4.bind(var2)(var3);
        var4 = var6.useStateFromStores;
        var2 = _closure1_slot10;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() { // Environment: var0
            var3 = _closure1_slot10;
            var2 = var3.getOptimisticProgress;
            var1 = _closure2_slot0;
            var1 = var1.id;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var0 = 26;
            var4 = var4[var0];
            var0 = undefined;
            var0 = var5.bind(var0)(var4);
            var0 = var0.FirstPartyQuestTaskTypes;
            var0 = var0.WATCH_VIDEO;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var4 = var4.bind(var6)(var3, var2);
        var3 = _closure1_slot5;
        var2 = var3.useMemo;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 27;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.isVideoQuestProgressing;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot49 = var13;
    var12 = function(arg0) { // Original name: useIsQuestProgressing, environment: var1
        _fun47224: for (var _fun47224_ip = 0;;) switch (_fun47224_ip) {
            case 0:
                var4 = arg0;
                var0 = _closure1_slot47;
                var3 = undefined;
                var0 = var0.bind(var3)(var4);
                var2 = _closure1_slot48;
                var2 = var2.bind(var3)(var4);
                var1 = _closure1_slot49;
                var1 = var1.bind(var3)(var4);
                if (var0) {
                    _fun47224_ip = 41;
                    continue _fun47224
                }
            case 38:
                var0 = var2;
            case 41:
                if (var0) {
                    _fun47224_ip = 47;
                    continue _fun47224
                }
            case 44:
                var0 = var1;
            case 47:
                return var0;
        }
    };
    var _closure1_slot50 = var12;
    var10 = function(arg0) { // Original name: useThirdPartyTaskDetails, environment: var1
        var4 = arg0;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot5;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 23;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.getThirdPartyTaskDetails;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot51 = var10;
    var9 = function(arg0) { // Original name: useGetOrFetchApplicationForConsoleQuests, environment: var1
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot5;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() { // Environment: var1
            _fun47228: for (var _fun47228_ip = 0;;) switch (_fun47228_ip) {
                case 0:
                    var0 = global;
                    var1 = var0.Set;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var1
                        }
                    });
                    var12 = var2;
                    var1 = new var12[var1](var11);
                    var2 = var1 instanceof Object ? var1 : var2;
                    var3 = _closure1_slot33;
                    var1 = _closure2_slot0;
                    var7 = undefined;
                    var6 = var3.bind(var7)(var1);
                    var3 = var6.bind(var7)();
                    var1 = var3.done;
                    var5 = 23;
                    var4 = null;
                    if (var1) {
                        _fun47228_ip = 128;
                        continue _fun47228
                    }
                case 66:
                    var10 = var3.value;
                    var9 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var5];
                    var9 = var9.bind(var7)(var1);
                    var1 = var9.getConsoleApplicationId;
                    var9 = var1.bind(var9)(var10);
                    if (!(var4 != var9)) {
                        _fun47228_ip = 113;
                        continue _fun47228
                    }
                case 103:
                    var1 = var2.add;
                    var1 = var1.bind(var2)(var9);
                case 113:
                    var9 = var6.bind(var7)();
                    var1 = var9.done;
                    var3 = var9;
                    if (!var1) {
                        _fun47228_ip = 66;
                        continue _fun47228
                    }
                case 128:
                    var1 = var0.Array;
                    var0 = var1.from;
                    var0 = var0.bind(var1)(var2);
                    return var0;
            }
        };
        var2 = var3.bind(var4)(var1, var2);
        var3 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 31;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var3.bind(var1)(var0);
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var _closure1_slot52 = var9;
    var8 = function() { // Original name: useConnectedAccounts, environment: var1
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 11;
        var3 = var3[var2];
        var2 = undefined;
        var5 = var4.bind(var2)(var3);
        var4 = var5.useStateFromStoresObject;
        var2 = _closure1_slot8;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() { // Environment: var0
            var0 = {};
            var3 = _closure1_slot8;
            var2 = var3.isFetching;
            var2 = var2.bind(var3)();
            var0.fetching = var2;
            var2 = _closure1_slot8;
            var1 = var2.getAccounts;
            var1 = var1.bind(var2)();
            var0.accounts = var1;
            return var0;
        };
        var3 = var4.bind(var5)(var3, var2);
        var2 = var3.fetching;
        var5 = var3.accounts;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot5;
        var3 = var4.useMemo;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            var3 = _closure2_slot0;
            var2 = var3.filter;
            var1 = function(arg0) { // Environment: var0
                var0 = arg0;
                var1 = var0.revoked;
                var0 = false;
                var0 = var0 === var1;
                return var0;
            };
            var2 = var2.bind(var3)(var1);
            var3 = var2.filter;
            var1 = function(arg0) { // Environment: var0
                var0 = arg0;
                var1 = var0.type;
                var0 = _closure1_slot20;
                var0 = var0.XBOX;
                var0 = var1 === var0;
                return var0;
            };
            var3 = var3.bind(var2)(var1);
            var1 = var2.filter;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var1 = var0.type;
                var0 = _closure1_slot20;
                var0 = var0.PLAYSTATION;
                var0 = var1 === var0;
                return var0;
            };
            var2 = var1.bind(var2)(var0);
            var0 = var3.concat;
            var1 = var0.bind(var3)(var2);
            var0 = {};
            var0.xboxAccounts = var3;
            var0.playstationAccounts = var2;
            var0.xboxAndPlaystationAccounts = var1;
            return var0;
        };
        var1 = var3.bind(var4)(var0, var1);
        var0 = {};
        var0.fetching = var2;
        var2 = var1.xboxAccounts;
        var0.xboxAccounts = var2;
        var2 = var1.playstationAccounts;
        var0.playstationAccounts = var2;
        var1 = var1.xboxAndPlaystationAccounts;
        var0.xboxAndPlaystationAccounts = var1;
        return var0;
    };
    var _closure1_slot53 = var8;
    var5 = function(arg0) { // Original name: useSelectedTaskPlatform, environment: var1
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 11;
        var3 = var3[var0];
        var0 = undefined;
        var6 = var4.bind(var0)(var3);
        var4 = var6.useStateFromStores;
        var0 = _closure1_slot10;
        var3 = new Array(1);
        var3[0] = var0;
        var0 = function() { // Environment: var1
            var2 = _closure1_slot10;
            var1 = var2.selectedTaskPlatform;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var3 = var4.bind(var6)(var3, var0);
        var0 = new Array(2);
        var0[0] = var3;
        var4 = _closure1_slot5;
        var3 = var4.useCallback;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function(arg0) { // Environment: var1
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 14;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.selectTaskPlatform;
            var1 = _closure2_slot0;
            var0 = arg0;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var1 = var3.bind(var4)(var1, var2);
        var0[1] = var1;
        return var0;
    };
    var _closure1_slot54 = var5;
    var4 = function(arg0, arg1) { // Original name: useTaskPlatformScreen, environment: var1
        _fun47238: for (var _fun47238_ip = 0;;) switch (_fun47238_ip) {
            case 0:
                var11 = arg0;
                var7 = arg1;
                var _closure2_slot0 = var11;
                var _closure2_slot1 = var7;
                var2 = _closure1_slot54;
                var1 = var11.id;
                var8 = undefined;
                var4 = var2.bind(var8)(var1);
                var2 = _closure1_slot4;
                var1 = 2;
                var2 = var2.bind(var8)(var4, var1);
                var1 = 0;
                var6 = var2[var1];
                var _closure2_slot2 = var6;
                var1 = 1;
                var1 = var2[var1];
                var9 = _closure1_slot5;
                var5 = var9.useMemo;
                var4 = new Array(1);
                var4[0] = var11;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 29;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.supportedTaskPlatforms;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var5.bind(var9)(var2, var4);
                var5 = var2.includes;
                var4 = _closure1_slot11;
                var4 = var4.DESKTOP;
                var9 = var5.bind(var2)(var4);
                var _closure2_slot3 = var9;
                var5 = var2.includes;
                var4 = _closure1_slot11;
                var4 = var4.CONSOLE;
                var10 = var5.bind(var2)(var4);
                var _closure2_slot4 = var10;
                var4 = _closure1_slot47;
                var5 = var4.bind(var8)(var11);
                var4 = _closure1_slot48;
                var4 = var4.bind(var8)(var11);
                var12 = _closure1_slot5;
                var11 = var12.useMemo;
                var8 = new Array(1);
                var8[0] = var7;
                var7 = function() { // Environment: var0
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 39;
                    var1 = var7[var1];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var1);
                    var2 = var3.match;
                    var1 = _closure2_slot1;
                    var4 = var2.bind(var3)(var1);
                    var3 = var4.with;
                    var2 = {};
                    var1 = 0;
                    var2.percentComplete = var1;
                    var1 = function() { // Environment: var0
                        var0 = null;
                        return var0;
                    };
                    var8 = var3.bind(var4)(var2, var1);
                    var3 = var8.with;
                    var2 = {};
                    var4 = 26;
                    var1 = var7[var4];
                    var1 = var6.bind(var5)(var1);
                    var1 = var1.FirstPartyQuestTaskTypes;
                    var1 = var1.PLAY_ON_DESKTOP;
                    var2.taskType = var1;
                    var1 = function() { // Environment: var0
                        var0 = _closure1_slot11;
                        var0 = var0.DESKTOP;
                        return var0;
                    };
                    var8 = var3.bind(var8)(var2, var1);
                    var3 = var8.with;
                    var2 = {};
                    var1 = var7[var4];
                    var1 = var6.bind(var5)(var1);
                    var1 = var1.FirstPartyQuestTaskTypes;
                    var1 = var1.PLAY_ON_DESKTOP_V2;
                    var2.taskType = var1;
                    var1 = function() { // Environment: var0
                        var0 = _closure1_slot11;
                        var0 = var0.DESKTOP;
                        return var0;
                    };
                    var8 = var3.bind(var8)(var2, var1);
                    var3 = var8.with;
                    var2 = {};
                    var1 = var7[var4];
                    var1 = var6.bind(var5)(var1);
                    var1 = var1.FirstPartyQuestTaskTypes;
                    var1 = var1.PLAY_ACTIVITY;
                    var2.taskType = var1;
                    var1 = function() { // Environment: var0
                        var0 = _closure1_slot11;
                        var0 = var0.DESKTOP;
                        return var0;
                    };
                    var8 = var3.bind(var8)(var2, var1);
                    var3 = var8.with;
                    var2 = {};
                    var1 = var7[var4];
                    var1 = var6.bind(var5)(var1);
                    var1 = var1.FirstPartyQuestTaskTypes;
                    var1 = var1.WATCH_VIDEO;
                    var2.taskType = var1;
                    var1 = function() { // Environment: var0
                        var0 = _closure1_slot11;
                        var0 = var0.DESKTOP;
                        return var0;
                    };
                    var8 = var3.bind(var8)(var2, var1);
                    var3 = var8.with;
                    var2 = {};
                    var1 = var7[var4];
                    var1 = var6.bind(var5)(var1);
                    var1 = var1.FirstPartyQuestTaskTypes;
                    var1 = var1.WATCH_VIDEO_ON_MOBILE;
                    var2.taskType = var1;
                    var1 = function() { // Environment: var0
                        var0 = _closure1_slot11;
                        var0 = var0.DESKTOP;
                        return var0;
                    };
                    var8 = var3.bind(var8)(var2, var1);
                    var3 = var8.with;
                    var2 = {};
                    var1 = var7[var4];
                    var1 = var6.bind(var5)(var1);
                    var1 = var1.FirstPartyQuestTaskTypes;
                    var1 = var1.STREAM_ON_DESKTOP;
                    var2.taskType = var1;
                    var1 = function() { // Environment: var0
                        var0 = _closure1_slot11;
                        var0 = var0.DESKTOP;
                        return var0;
                    };
                    var8 = var3.bind(var8)(var2, var1);
                    var3 = var8.with;
                    var2 = {};
                    var1 = var7[var4];
                    var1 = var6.bind(var5)(var1);
                    var1 = var1.FirstPartyQuestTaskTypes;
                    var1 = var1.PLAY_ON_XBOX;
                    var2.taskType = var1;
                    var1 = function() { // Environment: var0
                        var0 = _closure1_slot11;
                        var0 = var0.CONSOLE;
                        return var0;
                    };
                    var8 = var3.bind(var8)(var2, var1);
                    var3 = var8.with;
                    var2 = {};
                    var1 = var7[var4];
                    var1 = var6.bind(var5)(var1);
                    var1 = var1.FirstPartyQuestTaskTypes;
                    var1 = var1.PLAY_ON_PLAYSTATION;
                    var2.taskType = var1;
                    var1 = function() { // Environment: var0
                        var0 = _closure1_slot11;
                        var0 = var0.CONSOLE;
                        return var0;
                    };
                    var8 = var3.bind(var8)(var2, var1);
                    var3 = var8.with;
                    var2 = {};
                    var1 = var7[var4];
                    var1 = var6.bind(var5)(var1);
                    var1 = var1.FirstPartyQuestTaskTypes;
                    var1 = var1.ACHIEVEMENT_IN_GAME;
                    var2.taskType = var1;
                    var1 = function() { // Environment: var0
                        var0 = _closure1_slot11;
                        var0 = var0.DESKTOP;
                        return var0;
                    };
                    var3 = var3.bind(var8)(var2, var1);
                    var2 = var3.with;
                    var1 = {};
                    var4 = var7[var4];
                    var4 = var6.bind(var5)(var4);
                    var4 = var4.FirstPartyQuestTaskTypes;
                    var4 = var4.ACHIEVEMENT_IN_ACTIVITY;
                    var1.taskType = var4;
                    var0 = function() { // Environment: var0
                        var0 = _closure1_slot11;
                        var0 = var0.DESKTOP;
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1, var0);
                    var0 = var1.exhaustive;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var8 = var11.bind(var12)(var7, var8);
                var _closure2_slot5 = var8;
                if (var5) {
                    _fun47238_ip = 211;
                    continue _fun47238
                }
            case 194:
                var7 = null;
                if (!var4) {
                    _fun47238_ip = 209;
                    continue _fun47238
                }
            case 199:
                var4 = _closure1_slot11;
                var7 = var4.CONSOLE;
            case 209:
                _fun47238_ip = 221;
                continue _fun47238;
            case 211:
                var4 = _closure1_slot11;
                var7 = var4.DESKTOP;
            case 221:
                var _closure2_slot6 = var7;
                var5 = _closure1_slot5;
                var4 = var5.useMemo;
                var3 = new Array(5);
                var3[0] = var10;
                var3[1] = var9;
                var3[2] = var8;
                var3[3] = var7;
                var3[4] = var6;
                var0 = function() { // Environment: var0
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 39;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.match;
                    var2 = {};
                    var6 = _closure2_slot5;
                    var2.lastPlatformProgress = var6;
                    var6 = _closure2_slot6;
                    var2.currentProgressingPlatform = var6;
                    var5 = _closure2_slot2;
                    var2.selectedPlatform = var5;
                    var5 = var3.bind(var4)(var2);
                    var4 = var5.with;
                    var3 = {};
                    var2 = _closure1_slot11;
                    var2 = var2.CONSOLE;
                    var3.currentProgressingPlatform = var2;
                    var2 = function() { // Environment: var0
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 18;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var0 = var0.TaskPlatformScreen;
                        var0 = var0.CONSOLE;
                        return var0;
                    };
                    var5 = var4.bind(var5)(var3, var2);
                    var4 = var5.with;
                    var3 = {};
                    var2 = _closure1_slot11;
                    var2 = var2.DESKTOP;
                    var3.currentProgressingPlatform = var2;
                    var2 = function() { // Environment: var0
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 18;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var0 = var0.TaskPlatformScreen;
                        var0 = var0.DESKTOP;
                        return var0;
                    };
                    var6 = var4.bind(var5)(var3, var2);
                    var5 = var6.with;
                    var4 = {};
                    var2 = null;
                    var4.currentProgressingPlatform = var2;
                    var3 = _closure1_slot11;
                    var3 = var3.CONSOLE;
                    var4.lastPlatformProgress = var3;
                    var3 = function() { // Environment: var0
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 18;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var0 = var0.TaskPlatformScreen;
                        var0 = var0.CONSOLE;
                        return var0;
                    };
                    var5 = var5.bind(var6)(var4, var3);
                    var4 = var5.with;
                    var3 = {};
                    var3.currentProgressingPlatform = var2;
                    var2 = _closure1_slot11;
                    var2 = var2.DESKTOP;
                    var3.lastPlatformProgress = var2;
                    var2 = function() { // Environment: var0
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 18;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var0 = var0.TaskPlatformScreen;
                        var0 = var0.DESKTOP;
                        return var0;
                    };
                    var5 = var4.bind(var5)(var3, var2);
                    var4 = var5.with;
                    var3 = {
                        'currentProgressingPlatform': null,
                        'lastPlatformProgress': null
                    };
                    var2 = _closure1_slot11;
                    var2 = var2.CONSOLE;
                    var3.selectedPlatform = var2;
                    var2 = function() { // Environment: var0
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 18;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var0 = var0.TaskPlatformScreen;
                        var0 = var0.CONSOLE;
                        return var0;
                    };
                    var4 = var4.bind(var5)(var3, var2);
                    var3 = var4.with;
                    var2 = {
                        'currentProgressingPlatform': null,
                        'lastPlatformProgress': null
                    };
                    var1 = _closure1_slot11;
                    var1 = var1.DESKTOP;
                    var2.selectedPlatform = var1;
                    var1 = function() { // Environment: var0
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 18;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var0 = var0.TaskPlatformScreen;
                        var0 = var0.DESKTOP;
                        return var0;
                    };
                    var3 = var3.bind(var4)(var2, var1);
                    var2 = var3.with;
                    var1 = {
                        'currentProgressingPlatform': null,
                        'lastPlatformProgress': null,
                        'selectedPlatform': null
                    };
                    var0 = function() { // Environment: var0
                        _fun47259: for (var _fun47259_ip = 0;;) switch (_fun47259_ip) {
                            case 0:
                                var1 = _closure2_slot4;
                                if (!var1) {
                                    _fun47259_ip = 17;
                                    continue _fun47259
                                }
                            case 10:
                                var1 = _closure2_slot3;
                                if (var1) {
                                    _fun47259_ip = 71;
                                    continue _fun47259
                                }
                            case 17:
                                var0 = _closure2_slot4;
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 18;
                                var2 = var2[var1];
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                var1 = var1.TaskPlatformScreen;
                                if (var0) {
                                    _fun47259_ip = 63;
                                    continue _fun47259
                                }
                            case 55:
                                var0 = var1.DESKTOP;
                                _fun47259_ip = 69;
                                continue _fun47259;
                            case 63:
                                var0 = var1.CONSOLE;
                            case 69:
                                _fun47259_ip = 108;
                                continue _fun47259;
                            case 71:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 18;
                                var2 = var2[var1];
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                var1 = var1.TaskPlatformScreen;
                                var0 = var1.SELECT;
                            case 108:
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1, var0);
                    var0 = var1.exhaustive;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var3 = var4.bind(var5)(var0, var3);
                var0 = new Array(3);
                var0[0] = var3;
                var0[1] = var2;
                var0[2] = var1;
                return var0;
        }
    };
    var _closure1_slot55 = var4;
    var0 = global;
    var11 = var0.Object;
    var7 = var11.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var11)(var2, var0, var3);
    var28 = 0;
    var3 = var24[var28];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var27 = 1;
    var3 = var24[var27];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var26 = 2;
    var7 = var24[var26];
    var3 = arg3;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot5 = var3;
    var25 = 3;
    var3 = var24[var25];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var22 = 4;
    var3 = var24[var22];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var24[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var24[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var24[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var24[var3];
    var3 = var23.bind(var0)(var3);
    var6 = var3.QuestTaskPlatform;
    var _closure1_slot11 = var6;
    var6 = var3.QuestsExperimentLocations;
    var _closure1_slot12 = var6;
    var6 = var3.MEMBER_LIST_SOCIAL_ENTRY_POINT_ALLOWED_TASK_TYPES;
    var _closure1_slot13 = var6;
    var6 = var3.QuestHomeSortMethods;
    var _closure1_slot14 = var6;
    var6 = var3.SORTED_QUEST_HOME_FILTER_GROUPS;
    var _closure1_slot15 = var6;
    var6 = var3.TaskFilterTypes;
    var _closure1_slot16 = var6;
    var6 = var3.RewardFilterTypes;
    var _closure1_slot17 = var6;
    var3 = var3.MOBILE_ORBS_INTRO_QUEST_ID;
    var _closure1_slot18 = var3;
    var3 = 9;
    var3 = var24[var3];
    var3 = var23.bind(var0)(var3);
    var6 = var3.HelpdeskArticles;
    var _closure1_slot19 = var6;
    var6 = var3.PlatformTypes;
    var _closure1_slot20 = var6;
    var6 = var3.ThemeTypes;
    var _closure1_slot21 = var6;
    var3 = var3.AnalyticEvents;
    var _closure1_slot22 = var3;
    var3 = 10;
    var3 = var24[var3];
    var3 = var23.bind(var0)(var3);
    var3 = var3.PremiumTypes;
    var _closure1_slot23 = var3;
    var3 = -1;
    var _closure1_slot24 = var3;
    var3 = {};
    var _closure1_slot25 = var3;
    var3 = {};
    var3.DESC = var28;
    var6 = 'DESC';
    var3[var28] = var6;
    var3.ASC = var27;
    var6 = 'ASC';
    var3[var27] = var6;
    var _closure1_slot26 = var3;
    var19 = {};
    var3 = 'all';
    var19.ALL = var3;
    var3 = 'claimed';
    var19.CLAIMED = var3;
    var3 = 'preview_tool';
    var19.PREVIEW_TOOL = var3;
    var _closure1_slot27 = var19;
    var18 = {};
    var3 = 'tab';
    var18.TAB = var3;
    var3 = 'quest_id';
    var18.QUEST_ID = var3;
    var3 = 'sort';
    var18.SORT = var3;
    var3 = 'filter';
    var18.FILTER = var3;
    var11 = function(arg0) { // Original name: useQuestTaskDetails, environment: var1
        var7 = arg0;
        var _closure2_slot0 = var7;
        var5 = _closure1_slot5;
        var4 = var5.useCallback;
        var3 = new Array(1);
        var3[0] = var7;
        var0 = function() { // Environment: var1
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 23;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.getQuestTaskDetails;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var3 = var4.bind(var5)(var0, var3);
        var _closure2_slot1 = var3;
        var6 = _closure1_slot5;
        var5 = var6.useState;
        var4 = undefined;
        var0 = var3.bind(var4)();
        var6 = var5.bind(var6)(var0);
        var5 = _closure1_slot4;
        var0 = 2;
        var6 = var5.bind(var4)(var6, var0);
        var0 = 0;
        var0 = var6[var0];
        var5 = 1;
        var5 = var6[var5];
        var _closure2_slot2 = var5;
        var8 = _closure1_slot5;
        var6 = var8.useCallback;
        var5 = new Array(1);
        var5[0] = var3;
        var3 = function() { // Environment: var1
            var2 = _closure2_slot2;
            var0 = _closure2_slot1;
            var1 = undefined;
            var0 = var0.bind(var1)();
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var5 = var6.bind(var8)(var3, var5);
        var _closure2_slot3 = var5;
        var3 = _closure1_slot50;
        var6 = var3.bind(var4)(var7);
        var _closure2_slot4 = var6;
        var4 = _closure1_slot5;
        var3 = var4.useEffect;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() { // Environment: var1
            _fun47263: for (var _fun47263_ip = 0;;) switch (_fun47263_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var4 = var2.userStatus;
                    var3 = null;
                    var6 = var3 == var4;
                    var5 = undefined;
                    var2 = undefined;
                    if (var6) {
                        _fun47263_ip = 34;
                        continue _fun47263
                    }
                case 28:
                    var2 = var4.enrolledAt;
                case 34:
                    if (!(var3 != var2)) {
                        _fun47263_ip = 103;
                        continue _fun47263
                    }
                case 38:
                    var2 = _closure2_slot0;
                    var4 = var2.userStatus;
                    var6 = var3 == var4;
                    var2 = undefined;
                    if (var6) {
                        _fun47263_ip = 63;
                        continue _fun47263
                    }
                case 57:
                    var2 = var4.completedAt;
                case 63:
                    if (!(var3 == var2)) {
                        _fun47263_ip = 103;
                        continue _fun47263
                    }
                case 67:
                    var2 = _closure2_slot0;
                    var4 = var2.userStatus;
                    var6 = var3 == var4;
                    var2 = undefined;
                    if (var6) {
                        _fun47263_ip = 92;
                        continue _fun47263
                    }
                case 86:
                    var2 = var4.claimedAt;
                case 92:
                    if (!(var3 == var2)) {
                        _fun47263_ip = 103;
                        continue _fun47263
                    }
                case 96:
                    var2 = _closure2_slot4;
                    if (var2) {
                        _fun47263_ip = 113;
                        continue _fun47263
                    }
                case 103:
                    var1 = _closure2_slot3;
                    var1 = var1.bind(var5)();
                    return var5;
                case 113:
                    var1 = global;
                    var4 = var1.window;
                    var3 = var4.setInterval;
                    var2 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 21;
                    var1 = var6[var1];
                    var1 = var2.bind(var5)(var1);
                    var1 = var1.Millis;
                    var2 = var1.SECOND;
                    var1 = 1;
                    var2 = var1 * var2;
                    var1 = function() { // Environment: var0
                        var1 = _closure2_slot3;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var1 = var3.bind(var4)(var1, var2);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = global;
                        var2 = var0.clearInterval;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var1 = _closure2_slot3;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var _closure1_slot28 = var11;
    var7 = function(arg0) { // Original name: useWaitingForConsoleConnection, environment: var1
        _fun47266: for (var _fun47266_ip = 0;;) switch (_fun47266_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.quest;
                var1 = _closure1_slot53;
                var5 = undefined;
                var1 = var1.bind(var5)();
                var2 = var1.xboxAndPlaystationAccounts;
                var1 = _closure1_slot50;
                var1 = var1.bind(var5)(var4);
                var3 = var2.length;
                var2 = 0;
                var2 = var2 === var3;
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 23;
                var0 = var6[var0];
                var3 = var3.bind(var5)(var0);
                var0 = var3.isConsoleQuest;
                var0 = var0.bind(var3)(var4);
                if (!var0) {
                    _fun47266_ip = 85;
                    continue _fun47266
                }
            case 82:
                var0 = var2;
            case 85:
                if (!var0) {
                    _fun47266_ip = 91;
                    continue _fun47266
                }
            case 88:
                var0 = !var1;
            case 91:
                return var0;
        }
    };
    var _closure1_slot29 = var7;
    var6 = {};
    var6.UNACCEPTED = var28;
    var3 = 'UNACCEPTED';
    var6[var28] = var3;
    var6.ACCEPTED = var27;
    var3 = 'ACCEPTED';
    var6[var27] = var3;
    var6.IN_PROGRESS = var26;
    var3 = 'IN_PROGRESS';
    var6[var26] = var3;
    var6.COMPLETED = var25;
    var3 = 'COMPLETED';
    var6[var25] = var3;
    var6.CLAIMED = var22;
    var3 = 'CLAIMED';
    var6[var22] = var3;
    var _closure1_slot30 = var6;
    var3 = function() { // Original name: useIsPreviewerOnAnyQuest, environment: var1
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 11;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStoresArray;
        var1 = _closure1_slot10;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var0
            var0 = _closure1_slot10;
            var1 = var0.quests;
            var0 = var1.values;
            var4 = var0.bind(var1)();
            var0 = new Array(0);
            var3 = 0;
            var5 = var0;
            var1 = arraySpread(var5, var4, var3);
            return var0;
        };
        var2 = var3.bind(var4)(var2, var1);
        var1 = var2.some;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.preview;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot31 = var3;
    var22 = function(arg0, arg1) { // Original name: hasEnrolledTimeLapsed, environment: var1
        _fun47270: for (var _fun47270_ip = 0;;) switch (_fun47270_ip) {
            case 0:
                var3 = arg0;
                var1 = var3.userStatus;
                var5 = null;
                var2 = var5 == var1;
                var0 = undefined;
                if (var2) {
                    _fun47270_ip = 26;
                    continue _fun47270
                }
            case 20:
                var0 = var1.completedAt;
            case 26:
                var1 = var5 != var0;
                var2 = var3.userStatus;
                var6 = var5 == var2;
                var0 = undefined;
                if (var6) {
                    _fun47270_ip = 51;
                    continue _fun47270
                }
            case 45:
                var0 = var2.enrolledAt;
            case 51:
                var0 = var5 != var0;
                if (!var0) {
                    _fun47270_ip = 61;
                    continue _fun47270
                }
            case 58:
                var0 = !var1;
            case 61:
                if (!var0) {
                    _fun47270_ip = 152;
                    continue _fun47270
                }
            case 64:
                var1 = global;
                var6 = var1.Date;
                var2 = var6.now;
                var2 = var2.bind(var6)();
                var1 = var1.Date;
                var3 = var3.userStatus;
                var5 = var5 == var3;
                var4 = undefined;
                if (var5) {
                    _fun47270_ip = 108;
                    continue _fun47270
                }
            case 102:
                var4 = var3.enrolledAt;
            case 108:
                var3 = var1.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var1
                    }
                });
                var8 = var3;
                var7 = var4;
                var1 = new var8[var1](var7, var6);
                var3 = var1 instanceof Object ? var1 : var3;
                var1 = var3.getTime;
                var1 = var1.bind(var3)();
                var2 = var2 - var1;
                var1 = arg1;
                var0 = var2 > var1;
            case 152:
                return var0;
        }
    };
    var _closure1_slot32 = var22;
    var22 = 50;
    var22 = var24[var22];
    var24 = var23.bind(var0)(var22);
    var23 = var24.fileFinishedImporting;
    var22 = 'modules/quests/hooks/QuestHooks.tsx';
    var22 = var23.bind(var24)(var22);
    var2.useQuests = var21;
    var2.sortQuests = var20;
    var2.QuestTabs = var19;
    var2.QuestQueryParams = var18;
    var18 = function(arg0) { // Original name: useFilteredQuests, environment: var1
        _fun47271: for (var _fun47271_ip = 0;;) switch (_fun47271_ip) {
            case 0:
                var6 = arguments[1];
                var9 = undefined;
                if (!(var6 === var9)) {
                    _fun47271_ip = 18;
                    continue _fun47271
                }
            case 11:
                var6 = _closure1_slot25;
            case 18:
                var2 = _closure1_slot35;
                var1 = {
                    'fetchPolicy': 'cache-and-network',
                    'callerSource': 'use_filtered_quests'
                };
                var1 = var2.bind(var9)(var1);
                var4 = var1.quests;
                var3 = var1.excludedQuests;
                var2 = var1.isFetchingCurrentQuests;
                var1 = var1.hasFetched;
                var5 = global;
                var10 = var5.Map;
                var8 = var4.map;
                var5 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var2 = var1.id;
                    var0 = new Array(2);
                    var0[0] = var2;
                    var0[1] = var1;
                    return var0;
                };
                var12 = var8.bind(var4)(var5);
                var8 = var10.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var10
                    }
                });
                var13 = var8;
                var5 = new var13[var10](var12, var11);
                var8 = var5 instanceof Object ? var5 : var8;
                var5 = function(arg0, arg1) { // Original name: useAllQuests, environment: var0
                    var5 = arg0;
                    var4 = arg1;
                    var _closure3_slot0 = var5;
                    var _closure3_slot1 = var4;
                    var6 = _closure1_slot5;
                    var3 = var6.useRef;
                    var2 = new Array(0);
                    var2 = var3.bind(var6)(var2);
                    var _closure3_slot2 = var2;
                    var6 = _closure1_slot5;
                    var3 = var6.useRef;
                    var2 = var4.sortMethod;
                    var2 = var3.bind(var6)(var2);
                    var _closure3_slot3 = var2;
                    var6 = _closure1_slot5;
                    var3 = var6.useRef;
                    var2 = var4.filters;
                    var2 = var3.bind(var6)(var2);
                    var _closure3_slot4 = var2;
                    var6 = _closure1_slot5;
                    var3 = var6.useRef;
                    var2 = 0;
                    var2 = var3.bind(var6)(var2);
                    var _closure3_slot5 = var2;
                    var3 = _closure1_slot5;
                    var2 = var3.useMemo;
                    var1 = new Array(2);
                    var1[0] = var5;
                    var1[1] = var4;
                    var0 = function() { // Environment: var0
                        _fun47274: for (var _fun47274_ip = 0;;) switch (_fun47274_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var1 = var1.length;
                                var2 = 0;
                                if (!(var2 !== var1)) {
                                    _fun47274_ip = 217;
                                    continue _fun47274
                                }
                            case 21:
                                var1 = _closure3_slot2;
                                var1 = var1.current;
                                var1 = var1.length;
                                if (!(var1 > var2)) {
                                    _fun47274_ip = 107;
                                    continue _fun47274
                                }
                            case 39:
                                var1 = _closure3_slot5;
                                var2 = var1.current;
                                var1 = _closure3_slot0;
                                var1 = var1.length;
                                if (!(var2 === var1)) {
                                    _fun47274_ip = 107;
                                    continue _fun47274
                                }
                            case 61:
                                var1 = _closure3_slot3;
                                var2 = var1.current;
                                var1 = _closure3_slot1;
                                var1 = var1.sortMethod;
                                if (!(var2 === var1)) {
                                    _fun47274_ip = 107;
                                    continue _fun47274
                                }
                            case 84:
                                var1 = _closure3_slot4;
                                var2 = var1.current;
                                var1 = _closure3_slot1;
                                var1 = var1.filters;
                                if (!(var2 !== var1)) {
                                    _fun47274_ip = 206;
                                    continue _fun47274
                                }
                            case 107:
                                var4 = _closure1_slot43;
                                var2 = _closure3_slot0;
                                var3 = _closure3_slot1;
                                var1 = undefined;
                                var5 = var4.bind(var1)(var2, var3);
                                var4 = var5.map;
                                var1 = function(arg0) { // Environment: var1
                                    var0 = arg0;
                                    var0 = var0.id;
                                    return var0;
                                };
                                var1 = var4.bind(var5)(var1);
                                var4 = _closure3_slot2;
                                var4.current = var1;
                                var5 = _closure3_slot3;
                                var4 = var3.sortMethod;
                                var5.current = var4;
                                var4 = _closure3_slot4;
                                var3 = var3.filters;
                                var4.current = var3;
                                var3 = _closure3_slot5;
                                var2 = var2.length;
                                var3.current = var2;
                                return var1;
                            case 206:
                                var0 = _closure3_slot2;
                                var0 = var0.current;
                                return var0;
                            case 217:
                                var0 = new Array(0);
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var6 = var5.bind(var9)(var4, var6);
                var0 = function(arg0) { // Original name: useCompletedAndClaimedQuests, environment: var0
                    var2 = arg0;
                    var _closure3_slot0 = var2;
                    var5 = _closure1_slot5;
                    var4 = var5.useMemo;
                    var3 = new Array(1);
                    var3[0] = var2;
                    var2 = function() { // Environment: var0
                        var2 = _closure3_slot0;
                        var1 = var2.filter;
                        var0 = function(arg0) { // Environment: var0
                            _fun47278: for (var _fun47278_ip = 0;;) switch (_fun47278_ip) {
                                case 0:
                                    var3 = arg0;
                                    var4 = var3.userStatus;
                                    var2 = null;
                                    var5 = var2 == var4;
                                    var0 = undefined;
                                    if (var5) {
                                        _fun47278_ip = 26;
                                        continue _fun47278
                                    }
                                case 20:
                                    var0 = var4.completedAt;
                                case 26:
                                    var0 = var2 != var0;
                                    var3 = var3.userStatus;
                                    var4 = var2 == var3;
                                    var1 = undefined;
                                    if (var4) {
                                        _fun47278_ip = 51;
                                        continue _fun47278
                                    }
                                case 45:
                                    var1 = var3.claimedAt;
                                case 51:
                                    var1 = var2 != var1;
                                    if (!var0) {
                                        _fun47278_ip = 61;
                                        continue _fun47278
                                    }
                                case 58:
                                    var0 = var1;
                                case 61:
                                    return var0;
                            }
                        };
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var4 = var4.bind(var5)(var2, var3);
                    var _closure3_slot1 = var4;
                    var5 = _closure1_slot5;
                    var3 = var5.useRef;
                    var2 = new Array(0);
                    var2 = var3.bind(var5)(var2);
                    var _closure3_slot2 = var2;
                    var3 = _closure1_slot5;
                    var2 = var3.useMemo;
                    var1 = new Array(1);
                    var1[0] = var4;
                    var0 = function() { // Environment: var0
                        _fun47279: for (var _fun47279_ip = 0;;) switch (_fun47279_ip) {
                            case 0:
                                var2 = _closure3_slot1;
                                var2 = var2.length;
                                var3 = 0;
                                if (!(var3 !== var2)) {
                                    _fun47279_ip = 123;
                                    continue _fun47279
                                }
                            case 20:
                                var2 = _closure3_slot2;
                                var2 = var2.current;
                                var2 = var2.length;
                                if (!(var2 > var3)) {
                                    _fun47279_ip = 65;
                                    continue _fun47279
                                }
                            case 38:
                                var2 = _closure3_slot2;
                                var2 = var2.current;
                                var3 = var2.length;
                                var2 = _closure3_slot1;
                                var2 = var2.length;
                                if (!(var3 !== var2)) {
                                    _fun47279_ip = 112;
                                    continue _fun47279
                                }
                            case 65:
                                var4 = _closure3_slot1;
                                var3 = var4.sort;
                                var2 = function(arg0, arg1) { // Environment: var1
                                    _fun47280: for (var _fun47280_ip = 0;;) switch (_fun47280_ip) {
                                        case 0:
                                            var3 = arg0;
                                            var1 = arg1;
                                            var2 = var3.userStatus;
                                            var4 = null;
                                            var6 = var4 == var2;
                                            var5 = undefined;
                                            var0 = undefined;
                                            if (var6) {
                                                _fun47280_ip = 31;
                                                continue _fun47280
                                            }
                                        case 25:
                                            var0 = var2.claimedAt;
                                        case 31:
                                            var2 = var4 == var0;
                                            var6 = var1.userStatus;
                                            var7 = var4 == var6;
                                            var0 = undefined;
                                            if (var7) {
                                                _fun47280_ip = 56;
                                                continue _fun47280
                                            }
                                        case 50:
                                            var0 = var6.claimedAt;
                                        case 56:
                                            var0 = var4 == var0;
                                            if (!(var2 === var0)) {
                                                _fun47280_ip = 124;
                                                continue _fun47280
                                            }
                                        case 64:
                                            var4 = _closure1_slot44;
                                            var3 = var3.config;
                                            var3 = var3.rewardsConfig;
                                            var3 = var3.rewardsExpireAt;
                                            var1 = var1.config;
                                            var1 = var1.rewardsConfig;
                                            var1 = var1.rewardsExpireAt;
                                            var0 = _closure1_slot26;
                                            var0 = var0.DESC;
                                            var0 = var4.bind(var5)(var3, var1, var0);
                                            _fun47280_ip = 140;
                                            continue _fun47280;
                                        case 124:
                                            var1 = 1;
                                            if (!var2) {
                                                _fun47280_ip = 137;
                                                continue _fun47280
                                            }
                                        case 130:
                                            var1 = _closure1_slot24;
                                        case 137:
                                            var0 = var1;
                                        case 140:
                                            return var0;
                                    }
                                };
                                var3 = var3.bind(var4)(var2);
                                var2 = var3.map;
                                var1 = function(arg0) { // Environment: var1
                                    var0 = arg0;
                                    var0 = var0.id;
                                    return var0;
                                };
                                var1 = var2.bind(var3)(var1);
                                var2 = _closure3_slot2;
                                var2.current = var1;
                                return var1;
                            case 112:
                                var0 = _closure3_slot2;
                                var0 = var0.current;
                                return var0;
                            case 123:
                                var0 = new Array(0);
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var0 = var0.bind(var9)(var4);
                var4 = new Array(0);
                var5 = _closure1_slot33;
                var7 = _closure1_slot27;
                var10 = var7.ALL;
                var7 = arg0;
                if (!(var7 === var10)) {
                    _fun47271_ip = 160;
                    continue _fun47271
                }
            case 157:
                var0 = var6;
            case 160:
                var7 = var5.bind(var9)(var0);
                var5 = var7.bind(var9)();
                var0 = var5.done;
                var6 = null;
                if (var0) {
                    _fun47271_ip = 223;
                    continue _fun47271
                }
            case 179:
                var10 = var5.value;
                var0 = var8.get;
                var10 = var0.bind(var8)(var10);
                if (!(var6 != var10)) {
                    _fun47271_ip = 208;
                    continue _fun47271
                }
            case 198:
                var0 = var4.push;
                var0 = var0.bind(var4)(var10);
            case 208:
                var10 = var7.bind(var9)();
                var0 = var10.done;
                var5 = var10;
                if (!var0) {
                    _fun47271_ip = 179;
                    continue _fun47271
                }
            case 223:
                var0 = {};
                var0.quests = var4;
                var0.excludedQuests = var3;
                var0.isFetchingCurrentQuests = var2;
                var0.hasFetched = var1;
                return var0;
        }
    };
    var2.useFilteredQuests = var18;
    var18 = function() { // Original name: useClaimedQuests, environment: var1
        var4 = _closure1_slot5;
        var2 = var4.useRef;
        var1 = false;
        var1 = var2.bind(var4)(var1);
        var _closure2_slot0 = var1;
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 11;
        var2 = var6[var1];
        var4 = undefined;
        var9 = var5.bind(var4)(var2);
        var8 = var9.useStateFromStoresArray;
        var2 = _closure1_slot10;
        var7 = new Array(1);
        var7[0] = var2;
        var2 = function() { // Environment: var0
            var0 = global;
            var2 = var0.Array;
            var1 = var2.from;
            var0 = _closure1_slot10;
            var3 = var0.claimedQuests;
            var0 = var3.values;
            var0 = var0.bind(var3)();
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var2 = var8.bind(var9)(var7, var2);
        var1 = var6[var1];
        var6 = var5.bind(var4)(var1);
        var5 = var6.useStateFromStores;
        var1 = _closure1_slot10;
        var4 = new Array(1);
        var4[0] = var1;
        var1 = function() { // Environment: var0
            var0 = _closure1_slot10;
            var0 = var0.isFetchingClaimedQuests;
            return var0;
        };
        var1 = var5.bind(var6)(var4, var1);
        var _closure2_slot1 = var1;
        var5 = _closure1_slot5;
        var4 = var5.useEffect;
        var3 = new Array(1);
        var3[0] = var1;
        var0 = function() { // Environment: var0
            _fun47285: for (var _fun47285_ip = 0;;) switch (_fun47285_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    if (var1) {
                        _fun47285_ip = 19;
                        continue _fun47285
                    }
                case 10:
                    var2 = _closure2_slot0;
                    var1 = var2.current;
                case 19:
                    if (var1) {
                        _fun47285_ip = 69;
                        continue _fun47285
                    }
                case 22:
                    var1 = _closure2_slot0;
                    var0 = true;
                    var1.current = var0;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 14;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.fetchClaimedQuests;
                    var0 = var0.bind(var1)();
                case 69:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var4.bind(var5)(var0, var3);
        var0 = {};
        var0.claimedQuests = var2;
        var0.isFetchingClaimedQuests = var1;
        return var0;
    };
    var2.useClaimedQuests = var18;
    var2.useExpiredQuestsMap = var17;
    var2.useIsQuestExpired = var16;
    var16 = function(arg0, arg1, arg2) { // Original name: useIsQuestEligibleForMembersListPopout, environment: var1
        _fun47286: for (var _fun47286_ip = 0;;) switch (_fun47286_ip) {
            case 0:
                var0 = arg0;
                var4 = arg1;
                var _closure2_slot0 = var0;
                var _closure2_slot1 = var4;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 11;
                var3 = var10[var6];
                var5 = undefined;
                var11 = var9.bind(var5)(var3);
                var8 = var11.useStateFromStores;
                var3 = _closure1_slot7;
                var7 = new Array(1);
                var7[0] = var3;
                var3 = function() { // Environment: var2
                    _fun47287: for (var _fun47287_ip = 0;;) switch (_fun47287_ip) {
                        case 0:
                            var3 = _closure1_slot7;
                            var2 = var3.getChannel;
                            var1 = _closure2_slot1;
                            var0 = null;
                            var5 = var0 == var1;
                            var1 = undefined;
                            if (var5) {
                                _fun47287_ip = 39;
                                continue _fun47287
                            }
                        case 30:
                            var4 = _closure2_slot1;
                            var1 = var4.channelId;
                        case 39:
                            var1 = var2.bind(var3)(var1);
                            var2 = var0 != var1;
                            var0 = null;
                            if (!var2) {
                                _fun47287_ip = 56;
                                continue _fun47287
                            }
                        case 53:
                            var0 = var1;
                        case 56:
                            return var0;
                    }
                };
                var3 = var8.bind(var11)(var7, var3);
                var7 = var10[var6];
                var13 = var9.bind(var5)(var7);
                var12 = var13.useStateFromStores;
                var7 = _closure1_slot10;
                var11 = new Array(1);
                var11[0] = var7;
                var8 = function() { // Environment: var2
                    var0 = _closure1_slot10;
                    var1 = var0.questEnrollmentBlockedUntil;
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var7 = new Array(0);
                var8 = var12.bind(var13)(var11, var8, var7);
                var7 = var10[var6];
                var13 = var9.bind(var5)(var7);
                var12 = var13.useStateFromStores;
                var7 = _closure1_slot9;
                var11 = new Array(1);
                var11[0] = var7;
                var7 = function() { // Environment: var2
                    _fun47289: for (var _fun47289_ip = 0;;) switch (_fun47289_ip) {
                        case 0:
                            var1 = _closure1_slot9;
                            var0 = var1.getCurrentUser;
                            var1 = var0.bind(var1)();
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun47289_ip = 32;
                                continue _fun47289
                            }
                        case 27:
                            var0 = var1.id;
                        case 32:
                            return var0;
                    }
                };
                var7 = var12.bind(var13)(var11, var7);
                var6 = var10[var6];
                var11 = var9.bind(var5)(var6);
                var10 = var11.useStateFromStores;
                var6 = _closure1_slot10;
                var9 = new Array(1);
                var9[0] = var6;
                var6 = new Array(1);
                var6[0] = var0;
                var2 = function() { // Environment: var2
                    _fun47290: for (var _fun47290_ip = 0;;) switch (_fun47290_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun47290_ip = 43;
                                continue _fun47290
                            }
                        case 16:
                            var3 = _closure1_slot10;
                            var2 = var3.isQuestExpired;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var0 = var2.bind(var3)(var1);
                        case 43:
                            return var0;
                    }
                };
                var6 = var10.bind(var11)(var9, var2, var6);
                var2 = null;
                if (!(var2 != var0)) {
                    _fun47286_ip = 281;
                    continue _fun47286
                }
            case 200:
                if (var8) {
                    _fun47286_ip = 281;
                    continue _fun47286
                }
            case 203:
                if (var6) {
                    _fun47286_ip = 281;
                    continue _fun47286
                }
            case 206:
                var6 = arg2;
                if (!(var7 !== var6)) {
                    _fun47286_ip = 281;
                    continue _fun47286
                }
            case 213:
                var6 = var0.userStatus;
                var7 = var2 == var6;
                var0 = undefined;
                if (var7) {
                    _fun47286_ip = 234;
                    continue _fun47286
                }
            case 228:
                var0 = var6.claimedAt;
            case 234:
                var0 = var2 != var0;
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 22;
                var1 = var6[var1];
                var2 = var2.bind(var5)(var1);
                var1 = var2.isStreamingAndCanWatch;
                var1 = var1.bind(var2)(var4, var3);
                if (!var0) {
                    _fun47286_ip = 276;
                    continue _fun47286
                }
            case 273:
                var0 = !var1;
            case 276:
                var0 = !var0;
                return var0;
            case 281:
                var0 = false;
                return var0;
        }
    };
    var2.useIsQuestEligibleForMembersListPopout = var16;
    var16 = function(arg0) { // Original name: useQuestFormattedDate, environment: var1
        _fun47291: for (var _fun47291_ip = 0;;) switch (_fun47291_ip) {
            case 0:
                var6 = arg0;
                var5 = arguments[1];
                var _closure2_slot0 = var6;
                var4 = undefined;
                if (!(var5 === var4)) {
                    _fun47291_ip = 32;
                    continue _fun47291
                }
            case 18:
                var1 = {};
                var2 = 'short';
                var1.dateStyle = var2;
                var5 = var1;
            case 32:
                var _closure2_slot1 = var5;
                var _closure2_slot2 = var4;
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 11;
                var2 = var7[var2];
                var7 = var3.bind(var4)(var2);
                var4 = var7.useStateFromStores;
                var2 = _closure1_slot6;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    var0 = _closure1_slot6;
                    var0 = var0.locale;
                    return var0;
                };
                var4 = var4.bind(var7)(var3, var2);
                _closure2_slot2 = var4;
                var3 = _closure1_slot5;
                var2 = var3.useMemo;
                var1 = new Array(3);
                var1[0] = var6;
                var1[1] = var5;
                var1[2] = var4;
                var0 = function() { // Environment: var0
                    _fun47293: for (var _fun47293_ip = 0;;) switch (_fun47293_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var2 = var0 == var2;
                            var0 = '';
                            if (var2) {
                                _fun47293_ip = 72;
                                continue _fun47293
                            }
                        case 20:
                            var2 = global;
                            var4 = var2.Date;
                            var6 = _closure2_slot0;
                            var3 = var4.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var7 = var3;
                            var2 = new var7[var4](var6, var5);
                            var4 = var2 instanceof Object ? var2 : var3;
                            var3 = var4.toLocaleDateString;
                            var2 = _closure2_slot2;
                            var1 = _closure2_slot1;
                            var0 = var3.bind(var4)(var2, var1);
                        case 72:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.useQuestFormattedDate = var16;
    var2.useIsQuestProgressingOnDesktop = var15;
    var2.useIsQuestProgressingOnConsole = var14;
    var2.useIsQuestProgressingVideoQuest = var13;
    var2.useIsQuestProgressing = var12;
    var2.useQuestTaskDetails = var11;
    var2.useThirdPartyTaskDetails = var10;
    var10 = function(arg0) { // Environment: var1
        var1 = arg0;
        var3 = var1.quest;
        var _closure2_slot0 = var3;
        var2 = var1.questContent;
        var _closure2_slot1 = var2;
        var1 = var1.sourceQuestContent;
        var _closure2_slot2 = var1;
        var4 = _closure1_slot29;
        var2 = {};
        var2.quest = var3;
        var3 = undefined;
        var2 = var4.bind(var3)(var2);
        var _closure2_slot3 = var2;
        var2 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 28;
        var1 = var4[var1];
        var2 = var2.bind(var3)(var1);
        var1 = var2.useQuestImpression;
        var1 = var1.bind(var2)();
        var _closure2_slot4 = var1;
        var0 = function() { // Environment: var0
            _fun47295: for (var _fun47295_ip = 0;;) switch (_fun47295_ip) {
                case 0:
                    var1 = _closure2_slot3;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var0 = 29;
                    var2 = var8[var0];
                    var0 = undefined;
                    var4 = var7.bind(var0)(var2);
                    if (var1) {
                        _fun47295_ip = 142;
                        continue _fun47295
                    }
                case 35:
                    var3 = var4.openConsoleConnectionSettings;
                    var2 = {};
                    var1 = _closure2_slot0;
                    var2.quest = var1;
                    var1 = {};
                    var6 = _closure2_slot1;
                    var1.content = var6;
                    var6 = 30;
                    var6 = var8[var6];
                    var6 = var7.bind(var0)(var6);
                    var6 = var6.QuestContentCTA;
                    var6 = var6.VIEW_CONSOLE_CONNECTIONS_LINK;
                    var1.ctaContent = var6;
                    var9 = _closure2_slot4;
                    var6 = null;
                    var9 = var6 == var9;
                    var6 = undefined;
                    if (var9) {
                        _fun47295_ip = 120;
                        continue _fun47295
                    }
                case 106:
                    var10 = _closure2_slot4;
                    var9 = var10.getId;
                    var6 = var9.bind(var10)();
                case 120:
                    var1.impressionId = var6;
                    var6 = _closure2_slot2;
                    var1.sourceQuestContent = var6;
                    var1 = var3.bind(var4)(var2, var1);
                    _fun47295_ip = 247;
                    continue _fun47295;
                case 142:
                    var3 = var4.openAddConsoleConnectionModal;
                    var2 = {};
                    var1 = _closure2_slot0;
                    var2.quest = var1;
                    var1 = {};
                    var6 = _closure2_slot1;
                    var1.content = var6;
                    var6 = 30;
                    var6 = var8[var6];
                    var6 = var7.bind(var0)(var6);
                    var6 = var6.QuestContentCTA;
                    var6 = var6.CONNECT_CONSOLE_LINK;
                    var1.ctaContent = var6;
                    var7 = _closure2_slot4;
                    var6 = null;
                    var7 = var6 == var7;
                    var6 = undefined;
                    if (var7) {
                        _fun47295_ip = 227;
                        continue _fun47295
                    }
                case 213:
                    var8 = _closure2_slot4;
                    var7 = var8.getId;
                    var6 = var7.bind(var8)();
                case 227:
                    var1.impressionId = var6;
                    var5 = _closure2_slot2;
                    var1.sourceQuestContent = var5;
                    var1 = var3.bind(var4)(var2, var1);
                case 247:
                    return var0;
            }
        };
        return var0;
    };
    var2.useConnectedConsoleLinkOnClick = var10;
    var10 = function() { // Original name: useQuestsForSettingsBadge, environment: var1
        var4 = _closure1_slot35;
        var3 = undefined;
        var2 = {
            'fetchPolicy': 'cache-or-network',
            'callerSource': 'settings_badge'
        };
        var2 = var4.bind(var3)(var2);
        var6 = var2.quests;
        var _closure2_slot0 = var6;
        var4 = var2.isFetchingCurrentQuests;
        var _closure2_slot1 = var4;
        var2 = _closure1_slot45;
        var5 = var2.bind(var3)();
        var _closure2_slot2 = var5;
        var3 = _closure1_slot5;
        var2 = var3.useMemo;
        var1 = new Array(3);
        var1[0] = var6;
        var1[1] = var5;
        var1[2] = var4;
        var0 = function() { // Environment: var0
            _fun47297: for (var _fun47297_ip = 0;;) switch (_fun47297_ip) {
                case 0:
                    var0 = new Array(0);
                    var1 = _closure2_slot1;
                    if (var1) {
                        _fun47297_ip = 345;
                        continue _fun47297
                    }
                case 17:
                    var1 = _closure2_slot0;
                    var2 = var1.length;
                    var1 = 0;
                    if (!(var1 !== var2)) {
                        _fun47297_ip = 345;
                        continue _fun47297
                    }
                case 35:
                    var2 = _closure1_slot33;
                    var1 = _closure2_slot0;
                    var9 = undefined;
                    var8 = var2.bind(var9)(var1);
                    var2 = var8.bind(var9)();
                    var1 = var2.done;
                    var7 = null;
                    var6 = 19;
                    var5 = 18;
                    var4 = var2;
                    var3 = undefined;
                    var2 = undefined;
                    if (var1) {
                        _fun47297_ip = 343;
                        continue _fun47297
                    }
                case 83:
                    var15 = var4.value;
                    var14 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var12 = var1[var6];
                    var13 = var14.bind(var9)(var12);
                    var12 = var13.includesTarget;
                    var1 = var1[var5];
                    var1 = var14.bind(var9)(var1);
                    var1 = var1.QuestContent;
                    var1 = var1.GIFT_INVENTORY_SETTINGS_BADGE;
                    var1 = var12.bind(var13)(var15, var1);
                    var12 = var2;
                    if (!var1) {
                        _fun47297_ip = 322;
                        continue _fun47297
                    }
                case 147:
                    var14 = _closure2_slot2;
                    var13 = var14.get;
                    var1 = var15.id;
                    var13 = var13.bind(var14)(var1);
                    if (!(var7 != var13)) {
                        _fun47297_ip = 182;
                        continue _fun47297
                    }
                case 170:
                    var3 = var13;
                    var12 = var2;
                    if (var13) {
                        _fun47297_ip = 322;
                        continue _fun47297
                    }
                case 182:
                    var14 = var7 == var15;
                    var1 = undefined;
                    if (var14) {
                        _fun47297_ip = 197;
                        continue _fun47297
                    }
                case 191:
                    var1 = var15.userStatus;
                case 197:
                    if (!(var7 == var1)) {
                        _fun47297_ip = 219;
                        continue _fun47297
                    }
                case 201:
                    var1 = var0.push;
                    var1 = var1.bind(var0)(var15);
                    var3 = var13;
                    var12 = var2;
                    _fun47297_ip = 322;
                    continue _fun47297;
                case 219:
                    var1 = var15.userStatus;
                    var1 = var1.claimedAt;
                    var14 = var7 != var1;
                    var19 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var16 = var1[var6];
                    var18 = var19.bind(var9)(var16);
                    var17 = var18.isDismissed;
                    var16 = var15.userStatus;
                    var1 = var1[var5];
                    var1 = var19.bind(var9)(var1);
                    var1 = var1.QuestContent;
                    var1 = var1.GIFT_INVENTORY_SETTINGS_BADGE;
                    var1 = var17.bind(var18)(var16, var1);
                    if (var14) {
                        _fun47297_ip = 297;
                        continue _fun47297
                    }
                case 294:
                    var14 = var1;
                case 297:
                    var3 = var13;
                    var12 = var1;
                    if (var14) {
                        _fun47297_ip = 322;
                        continue _fun47297
                    }
                case 306:
                    var14 = var0.push;
                    var14 = var14.bind(var0)(var15);
                    var3 = var13;
                    var12 = var1;
                case 322:
                    var13 = var8.bind(var9)();
                    var1 = var13.done;
                    var2 = var12;
                    var4 = var13;
                    if (!var1) {
                        _fun47297_ip = 83;
                        continue _fun47297
                    }
                case 343:
                    return var0;
                case 345:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useQuestsForSettingsBadge = var10;
    var2.useGetOrFetchApplicationForConsoleQuests = var9;
    var9 = function(arg0) { // Original name: useQuestForMemberListSocialEntryPoint, environment: var1
        _fun47298: for (var _fun47298_ip = 0;;) switch (_fun47298_ip) {
            case 0:
                var8 = arg0;
                var _closure2_slot0 = var8;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 11;
                var3 = var3[var2];
                var2 = undefined;
                var6 = var4.bind(var2)(var3);
                var5 = var6.useStateFromStores;
                var3 = _closure1_slot10;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = function() { // Environment: var1
                    var0 = _closure1_slot10;
                    var0 = var0.quests;
                    return var0;
                };
                var7 = var5.bind(var6)(var4, var3);
                var _closure2_slot1 = var7;
                var4 = _closure1_slot52;
                var3 = global;
                var6 = var3.Array;
                var5 = var6.from;
                var3 = var7.values;
                var3 = var3.bind(var7)();
                var3 = var5.bind(var6)(var3);
                var6 = var4.bind(var2)(var3);
                var5 = _closure1_slot5;
                var4 = var5.useMemo;
                var3 = new Array(3);
                var3[0] = var8;
                var3[1] = var7;
                var3[2] = var6;
                var1 = function() { // Environment: var1
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 22;
                    var0 = var5[var0];
                    var2 = undefined;
                    var7 = var4.bind(var2)(var0);
                    var6 = var7.filterQuestsForSocialEntrypoints;
                    var3 = _closure2_slot1;
                    var1 = _closure1_slot13;
                    var3 = var6.bind(var7)(var3, var1);
                    var1 = 32;
                    var1 = var5[var1];
                    var2 = var4.bind(var2)(var1);
                    var1 = var2.getQuestsFromActivities;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
                };
                var1 = var4.bind(var5)(var1, var3);
                var0 = _closure1_slot46;
                var2 = var0.bind(var2)(var1);
                var0 = null;
                if (var2) {
                    _fun47298_ip = 155;
                    continue _fun47298
                }
            case 152:
                var0 = var1;
            case 155:
                return var0;
        }
    };
    var2.useQuestForMemberListSocialEntryPoint = var9;
    var9 = function(arg0) { // Original name: useQuestCollectibles, environment: var1
        _fun47301: for (var _fun47301_ip = 0;;) switch (_fun47301_ip) {
            case 0:
                var6 = arg0;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 24;
                var0 = var4[var0];
                var5 = undefined;
                var1 = var3.bind(var5)(var0);
                var0 = var1.hasCollectiblesQuestReward;
                var2 = var0.bind(var1)(var6);
                var0 = 33;
                var0 = var4[var0];
                var1 = var3.bind(var5)(var0);
                var0 = var1.getDefaultReward;
                var0 = var0.bind(var1)(var6);
                var1 = 34;
                var1 = var4[var1];
                var3 = var3.bind(var5)(var1);
                var1 = var3.useFetchCollectiblesProduct;
                var0 = var0.skuId;
                var0 = var1.bind(var3)(var0);
                var4 = var0.product;
                var1 = var0.isFetching;
                var0 = {};
                var0.hasQuestCollectibles = var2;
                var3 = null;
                var6 = var3 == var4;
                var2 = undefined;
                if (var6) {
                    _fun47301_ip = 144;
                    continue _fun47301
                }
            case 123:
                var4 = var4.items;
                var3 = var3 == var4;
                var2 = undefined;
                if (var3) {
                    _fun47301_ip = 144;
                    continue _fun47301
                }
            case 138:
                var3 = 0;
                var2 = var4[var3];
            case 144:
                var0.avatarDecoration = var2;
                var0.isFetching = var1;
                return var0;
        }
    };
    var2.useQuestCollectibles = var9;
    var9 = function(arg0) { // Original name: useQuestPreviewActions, environment: var1
        var4 = arg0;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot5;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var0 = {};
            var2 = function() { // Original name: handleComplete, environment: var1
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 14;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.completeQuestPreview;
                var0 = _closure2_slot0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var0.handleComplete = var2;
            var2 = function(arg0) { // Original name: handleProgress, environment: var1
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 14;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.completeQuestPreview;
                var1 = _closure2_slot0;
                var0 = arg0;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var0.handleProgress = var2;
            var2 = function() { // Original name: handleResetStatusClick, environment: var1
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 14;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.resetQuestPreviewStatus;
                var0 = _closure2_slot0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var0.handleResetStatusClick = var2;
            var2 = function() { // Original name: handleResetDismissibilityClick, environment: var1
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 14;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.resetQuestDismissibilityStatus;
                var0 = _closure2_slot0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var0.handleResetDismissibilityClick = var2;
            var1 = function() { // Original name: handleOverrideDeliveryClick, environment: var1
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 14;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.overrideQuestDelivery;
                var0 = _closure2_slot0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var0.handleOverrideDeliveryClick = var1;
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useQuestPreviewActions = var9;
    var2.useConnectedAccounts = var8;
    var8 = function(arg0) { // Environment: var1
        var0 = arg0;
        var7 = var0.questId;
        var _closure2_slot0 = var7;
        var8 = var0.preview;
        var _closure2_slot1 = var8;
        var10 = var0.beforeRequest;
        var _closure2_slot2 = var10;
        var9 = var0.afterRequest;
        var _closure2_slot3 = var9;
        var2 = _closure1_slot5;
        var1 = var2.useState;
        var0 = new Array(0);
        var1 = var1.bind(var2)(var0);
        var0 = _closure1_slot4;
        var11 = undefined;
        var12 = 2;
        var0 = var0.bind(var11)(var1, var12);
        var2 = 0;
        var1 = var0[var2];
        var5 = 1;
        var0 = var0[var5];
        var _closure2_slot4 = var0;
        var13 = _closure1_slot5;
        var6 = var13.useState;
        var0 = false;
        var6 = var6.bind(var13)(var0);
        var0 = _closure1_slot4;
        var0 = var0.bind(var11)(var6, var12);
        var2 = var0[var2];
        var _closure2_slot5 = var2;
        var0 = var0[var5];
        var _closure2_slot6 = var0;
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 11;
        var0 = var6[var0];
        var12 = var5.bind(var11)(var0);
        var6 = var12.useStateFromStores;
        var0 = _closure1_slot8;
        var5 = new Array(1);
        var5[0] = var0;
        var0 = function() { // Environment: var3
            var1 = _closure1_slot8;
            var0 = var1.getAccounts;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0 = var6.bind(var12)(var5, var0);
        var12 = _closure1_slot5;
        var6 = var12.useEffect;
        var5 = new Array(1);
        var5[0] = var0;
        var0 = function() { // Environment: var3
            var2 = _closure2_slot4;
            var0 = undefined;
            var1 = function(arg0) { // Environment: var1
                var2 = arg0;
                var1 = var2.filter;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.type;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 35;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var0 = var0.QuestConsoleStartError;
                    var0 = var0.EXPIRED_CREDENTIAL;
                    var0 = var1 !== var0;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var6.bind(var12)(var0, var5);
        var0 = {};
        var6 = _closure1_slot5;
        var5 = var6.useCallback;
        var4 = _closure1_slot3;
        var3 = function*() { // Environment: var3
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun47315: for (var _fun47315_ip = 0;;) switch (_fun47315_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun47315_ip = 349;
                            continue _fun47315
                        }
                    case 10:
                        var1 = undefined;
                        var3 = undefined;
                        var5 = undefined;
                        var7 = undefined;
                        var2 = _closure2_slot5;
                        if (var2) {
                            _fun47315_ip = 346;
                            continue _fun47315
                        }
                    case 31:
                        var2 = _closure2_slot2;
                        var6 = null;
                        if (!(var6 != var2)) {
                            _fun47315_ip = 49;
                            continue _fun47315
                        }
                    case 41:
                        var2 = _closure2_slot2;
                        var2 = var2.bind(var1)();
                    case 49:
                        var8 = _closure2_slot6;
                        var2 = true;
                        var2 = var8.bind(var1)(var2);
                        var3 = null;
                    case 62: // try_start_0
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var2 = 14;
                        var2 = var9[var2];
                        var10 = var8.bind(var1)(var2);
                        var9 = var10.manuallyStartConsoleQuest;
                        var8 = _closure2_slot0;
                        var2 = _closure2_slot1;
                        var2 = var9.bind(var10)(var8, var2);
                        SaveGenerator(address = 109);
                    case 107:
                        return var2;
                    case 109:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 8);
                        if (var8) {
                            _fun47315_ip = 209;
                            continue _fun47315
                        }
                    case 115:
                        var3 = var2;
                        var9 = _closure2_slot4;
                        var8 = var2.errorHints;
                        var8 = var9.bind(var1)(var8);
                    case 133: // try_end0
                        var9 = _closure2_slot6;
                        var8 = false;
                        var8 = var9.bind(var1)(var8);
                        var8 = _closure2_slot3;
                        if (!(var6 != var8)) {
                            _fun47315_ip = 346;
                            continue _fun47315
                        }
                    case 155:
                        var9 = _closure2_slot3;
                        var8 = var3;
                        var7 = var8;
                        var10 = var6 == var8;
                        var8 = undefined;
                        if (var10) {
                            _fun47315_ip = 183;
                            continue _fun47315
                        }
                    case 174:
                        var10 = var7;
                        var8 = var10.errorHints;
                    case 183:
                        var5 = var8;
                        if (!(var6 == var8)) {
                            _fun47315_ip = 196;
                            continue _fun47315
                        }
                    case 190:
                        var8 = new Array(0);
                        _fun47315_ip = 199;
                        continue _fun47315;
                    case 196:
                        var8 = var5;
                    case 199:
                        var8 = var9.bind(var1)(var8);
                        _fun47315_ip = 346;
                        continue _fun47315;
                    case 209:
                        var9 = _closure2_slot6;
                        var8 = false;
                        var8 = var9.bind(var1)(var8);
                        var8 = _closure2_slot3;
                        if (!(var6 != var8)) {
                            _fun47315_ip = 277;
                            continue _fun47315
                        }
                    case 228:
                        var9 = _closure2_slot3;
                        var8 = var3;
                        var7 = var8;
                        var10 = var6 == var8;
                        var8 = undefined;
                        if (var10) {
                            _fun47315_ip = 256;
                            continue _fun47315
                        }
                    case 247:
                        var10 = var7;
                        var8 = var10.errorHints;
                    case 256:
                        var5 = var8;
                        if (!(var6 == var8)) {
                            _fun47315_ip = 269;
                            continue _fun47315
                        }
                    case 263:
                        var8 = new Array(0);
                        _fun47315_ip = 272;
                        continue _fun47315;
                    case 269:
                        var8 = var5;
                    case 272:
                        var8 = var9.bind(var1)(var8);
                    case 277:
                        return var2;
                    case 280: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        var9 = _closure2_slot6;
                        var8 = false;
                        var8 = var9.bind(var1)(var8);
                        var8 = _closure2_slot3;
                        if (!(var6 != var8)) {
                            _fun47315_ip = 344;
                            continue _fun47315
                        }
                    case 301:
                        var4 = _closure2_slot3;
                        var7 = var3;
                        var8 = var6 == var3;
                        var3 = undefined;
                        if (var8) {
                            _fun47315_ip = 323;
                            continue _fun47315
                        }
                    case 317:
                        var3 = var7.errorHints;
                    case 323:
                        var5 = var3;
                        if (!(var6 == var3)) {
                            _fun47315_ip = 336;
                            continue _fun47315
                        }
                    case 330:
                        var3 = new Array(0);
                        _fun47315_ip = 339;
                        continue _fun47315;
                    case 336:
                        var3 = var5;
                    case 339:
                        var3 = var4.bind(var1)(var3);
                    case 344:
                        throw var2;
                    case 346:
                        return var1;
                    case 349:
                        return var0;
                }
            };
            return var0;
        };
        var4 = var4.bind(var11)(var3);
        var3 = new Array(5);
        var3[0] = var2;
        var3[1] = var10;
        var3[2] = var9;
        var3[3] = var8;
        var3[4] = var7;
        var3 = var5.bind(var6)(var4, var3);
        var0.startConsoleQuest = var3;
        var0.startingConsoleQuest = var2;
        var0.errorHints = var1;
        return var0;
    };
    var2.useManuallyStartConsoleQuest = var8;
    var2.useWaitingForConsoleConnection = var7;
    var7 = function() { // Environment: var1
        _fun47316: for (var _fun47316_ip = 0;;) switch (_fun47316_ip) {
            case 0:
                var1 = _closure1_slot53;
                var9 = undefined;
                var1 = var1.bind(var9)();
                var2 = var1.xboxAccounts;
                var1 = var1.playstationAccounts;
                var3 = var2.length;
                var2 = 0;
                var7 = var3 > var2;
                var1 = var1.length;
                var5 = var1 > var2;
                var4 = _closure1_slot1;
                var10 = _closure1_slot2;
                var3 = 36;
                var1 = var10[var3];
                var8 = var4.bind(var9)(var1);
                var6 = var8.getArticleURL;
                var2 = _closure1_slot19;
                var1 = var2.QUEST_HOW_TO_PLAYSTATION;
                var1 = var6.bind(var8)(var1);
                var3 = var10[var3];
                var4 = var4.bind(var9)(var3);
                var3 = var4.getArticleURL;
                var2 = var2.QUEST_HOW_TO_XBOX;
                var2 = var3.bind(var4)(var2);
                var3 = _closure1_slot0;
                var0 = 37;
                var4 = var10[var0];
                var4 = var3.bind(var9)(var4);
                var11 = var4.intl;
                var8 = var11.format;
                var4 = var10[var0];
                var4 = var3.bind(var9)(var4);
                var4 = var4.t;
                var6 = var4.beN4DG;
                var4 = {};
                var4.psHelpdeskArticle = var1;
                var4.xboxHelpdeskArticle = var2;
                var6 = var8.bind(var11)(var6, var4);
                var4 = var10[var0];
                var4 = var3.bind(var9)(var4);
                var8 = var4.intl;
                var4 = var8.format;
                var0 = var10[var0];
                var0 = var3.bind(var9)(var0);
                var0 = var0.t;
                var3 = var0.HVS7nh;
                var0 = {};
                var9 = var2;
                if (!var5) {
                    _fun47316_ip = 234;
                    continue _fun47316
                }
            case 231:
                var9 = var1;
            case 234:
                var0.helpdeskArticle = var9;
                var4 = var4.bind(var8)(var3, var0);
                var0 = {};
                if (!var7) {
                    _fun47316_ip = 253;
                    continue _fun47316
                }
            case 250:
                if (!var5) {
                    _fun47316_ip = 265;
                    continue _fun47316
                }
            case 253:
                var3 = var6;
                if (var7) {
                    _fun47316_ip = 268;
                    continue _fun47316
                }
            case 259:
                var3 = var6;
                if (!var5) {
                    _fun47316_ip = 268;
                    continue _fun47316
                }
            case 265:
                var3 = var4;
            case 268:
                var0.message = var3;
                var0.xboxURL = var2;
                var0.playstationURL = var1;
                return var0;
        }
    };
    var2.useQuestHowToHelpArticle = var7;
    var2.QuestProgressState = var6;
    var6 = function(arg0) { // Original name: useProgressState, environment: var1
        _fun47317: for (var _fun47317_ip = 0;;) switch (_fun47317_ip) {
            case 0:
                var6 = arg0;
                var1 = var6.userStatus;
                var2 = null;
                var3 = var2 == var1;
                var5 = undefined;
                var0 = undefined;
                if (var3) {
                    _fun47317_ip = 28;
                    continue _fun47317
                }
            case 22:
                var0 = var1.enrolledAt;
            case 28:
                var0 = var2 != var0;
                var3 = var6.userStatus;
                var4 = var2 == var3;
                var1 = undefined;
                if (var4) {
                    _fun47317_ip = 53;
                    continue _fun47317
                }
            case 47:
                var1 = var3.completedAt;
            case 53:
                var3 = var2 != var1;
                var4 = var6.userStatus;
                var7 = var2 == var4;
                var1 = undefined;
                if (var7) {
                    _fun47317_ip = 78;
                    continue _fun47317
                }
            case 72:
                var1 = var4.claimedAt;
            case 78:
                var4 = var2 != var1;
                var2 = _closure1_slot28;
                var2 = var2.bind(var5)(var6);
                var5 = var2.percentComplete;
                var2 = 0;
                var2 = var5 > var2;
                if (var4) {
                    _fun47317_ip = 165;
                    continue _fun47317
                }
            case 109:
                if (var3) {
                    _fun47317_ip = 153;
                    continue _fun47317
                }
            case 112:
                if (!var2) {
                    _fun47317_ip = 118;
                    continue _fun47317
                }
            case 115:
                if (var0) {
                    _fun47317_ip = 141;
                    continue _fun47317
                }
            case 118:
                var2 = _closure1_slot30;
                if (var0) {
                    _fun47317_ip = 133;
                    continue _fun47317
                }
            case 125:
                var0 = var2.UNACCEPTED;
                _fun47317_ip = 139;
                continue _fun47317;
            case 133:
                var0 = var2.ACCEPTED;
            case 139:
                _fun47317_ip = 151;
                continue _fun47317;
            case 141:
                var2 = _closure1_slot30;
                var0 = var2.IN_PROGRESS;
            case 151:
                _fun47317_ip = 163;
                continue _fun47317;
            case 153:
                var2 = _closure1_slot30;
                var0 = var2.COMPLETED;
            case 163:
                _fun47317_ip = 175;
                continue _fun47317;
            case 165:
                var1 = _closure1_slot30;
                var0 = var1.CLAIMED;
            case 175:
                return var0;
        }
    };
    var2.useProgressState = var6;
    var6 = function(arg0) { // Original name: useQuestCompletionDetails, environment: var1
        _fun47318: for (var _fun47318_ip = 0;;) switch (_fun47318_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 11;
                var0 = var4[var0];
                var4 = undefined;
                var6 = var3.bind(var4)(var0);
                var5 = var6.useStateFromStores;
                var0 = _closure1_slot6;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var0
                    var0 = _closure1_slot6;
                    var0 = var0.locale;
                    return var0;
                };
                var8 = var5.bind(var6)(var3, var0);
                var0 = _closure1_slot28;
                var0 = var0.bind(var4)(var2);
                var7 = var0.percentComplete;
                var0 = _closure1_slot51;
                var2 = var0.bind(var4)(var2);
                var3 = null;
                if (!(var3 != var2)) {
                    _fun47318_ip = 94;
                    continue _fun47318
                }
            case 88:
                var7 = var2.percentComplete;
            case 94:
                var0 = {};
                var0.completedRatio = var7;
                var5 = 100;
                var5 = var5 * var7;
                var0.percentComplete = var5;
                if (!(var3 == var2)) {
                    _fun47318_ip = 163;
                    continue _fun47318
                }
            case 117:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 38;
                var1 = var6[var1];
                var6 = var5.bind(var4)(var1);
                var5 = var6.formatPercent;
                var1 = {};
                var9 = 'floor';
                var1.roundingMode = var9;
                var1 = var5.bind(var6)(var8, var7, var1);
                _fun47318_ip = 221;
                continue _fun47318;
            case 163:
                var5 = var3 == var2;
                var6 = undefined;
                if (var5) {
                    _fun47318_ip = 178;
                    continue _fun47318
                }
            case 172:
                var6 = var2.progress;
            case 178:
                var3 = var3 == var2;
                var5 = undefined;
                if (var3) {
                    _fun47318_ip = 193;
                    continue _fun47318
                }
            case 187:
                var5 = var2.target;
            case 193:
                var2 = global;
                var2 = var2.HermesInternal;
                var4 = var2.concat;
                var3 = '';
                var2 = '/';
                var1 = var4.bind(var3)(var6, var2, var5);
            case 221:
                var0.completedRatioDisplay = var1;
                return var0;
        }
    };
    var2.useQuestCompletionDetails = var6;
    var2.useSelectedTaskPlatform = var5;
    var2.useTaskPlatformScreen = var4;
    var4 = function(arg0) { // Original name: useQuestWarningTips, environment: var1
        _fun47320: for (var _fun47320_ip = 0;;) switch (_fun47320_ip) {
            case 0:
                var7 = arg0;
                var0 = _closure1_slot51;
                var6 = undefined;
                var10 = var0.bind(var6)(var7);
                var0 = _closure1_slot28;
                var5 = var0.bind(var6)(var7);
                var0 = _closure1_slot55;
                var3 = var0.bind(var6)(var7, var5);
                var2 = _closure1_slot4;
                var0 = 1;
                var0 = var2.bind(var6)(var3, var0);
                var13 = 0;
                var8 = var0[var13];
                var0 = _closure1_slot46;
                var11 = var0.bind(var6)(var7);
                var2 = var7.userStatus;
                var3 = null;
                var4 = var3 == var2;
                var0 = undefined;
                if (var4) {
                    _fun47320_ip = 87;
                    continue _fun47320
                }
            case 81:
                var0 = var2.enrolledAt;
            case 87:
                var4 = var3 != var0;
                var2 = var7.userStatus;
                var9 = var3 == var2;
                var0 = undefined;
                if (var9) {
                    _fun47320_ip = 112;
                    continue _fun47320
                }
            case 106:
                var0 = var2.completedAt;
            case 112:
                var12 = var3 != var0;
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var9 = 26;
                var0 = var0[var9];
                var0 = var2.bind(var6)(var0);
                var0 = var0.FirstPartyQuestTaskTypesSets;
                var14 = var0.DESKTOP;
                var2 = var14.has;
                var0 = var5.taskType;
                var0 = var2.bind(var14)(var0);
                if (!var0) {
                    _fun47320_ip = 177;
                    continue _fun47320
                }
            case 167:
                var2 = var5.percentComplete;
                var0 = var2 > var13;
            case 177:
                var2 = var5.percentComplete;
                var2 = var13 === var2;
                if (!var4) {
                    _fun47320_ip = 193;
                    continue _fun47320
                }
            case 190:
                var4 = !var12;
            case 193:
                if (!var4) {
                    _fun47320_ip = 199;
                    continue _fun47320
                }
            case 196:
                var4 = !var11;
            case 199:
                if (!var4) {
                    _fun47320_ip = 206;
                    continue _fun47320
                }
            case 202:
                var4 = var3 == var10;
            case 206:
                if (!var4) {
                    _fun47320_ip = 257;
                    continue _fun47320
                }
            case 209:
                if (var0) {
                    _fun47320_ip = 254;
                    continue _fun47320
                }
            case 212:
                if (!var2) {
                    _fun47320_ip = 251;
                    continue _fun47320
                }
            case 215:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var3 = 18;
                var3 = var11[var3];
                var3 = var10.bind(var6)(var3);
                var3 = var3.TaskPlatformScreen;
                var3 = var3.DESKTOP;
                var2 = var8 === var3;
            case 251:
                var0 = var2;
            case 254:
                var4 = var0;
            case 257:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var8 = 15;
                var0 = var0[var8];
                var2 = var2.bind(var6)(var0);
                var0 = var2.isWeb;
                var2 = var0.bind(var2)();
                if (!var2) {
                    _fun47320_ip = 293;
                    continue _fun47320
                }
            case 290:
                var2 = var4;
            case 293:
                if (!var2) {
                    _fun47320_ip = 330;
                    continue _fun47320
                }
            case 296:
                var3 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 29;
                var0 = var10[var0];
                var3 = var3.bind(var6)(var0);
                var0 = var3.isQuestSupportedOnWeb;
                var0 = var0.bind(var3)(var7);
                var2 = !var0;
            case 330:
                var0 = new Array(0);
                var7 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var8];
                var7 = var7.bind(var6)(var3);
                var3 = var7.isMac;
                var3 = var3.bind(var7)();
                if (!var3) {
                    _fun47320_ip = 403;
                    continue _fun47320
                }
            case 364:
                var7 = var5.taskType;
                var8 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var9];
                var5 = var8.bind(var6)(var5);
                var5 = var5.FirstPartyQuestTaskTypes;
                var5 = var5.STREAM_ON_DESKTOP;
                var3 = var7 === var5;
            case 403:
                if (!var3) {
                    _fun47320_ip = 409;
                    continue _fun47320
                }
            case 406:
                var3 = var4;
            case 409:
                if (!var3) {
                    _fun47320_ip = 479;
                    continue _fun47320
                }
            case 412:
                var4 = var0.push;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 37;
                var5 = var9[var3];
                var5 = var8.bind(var6)(var5);
                var7 = var5.intl;
                var5 = var7.string;
                var3 = var9[var3];
                var3 = var8.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.MFGxFM;
                var3 = var5.bind(var7)(var3);
                var3 = var4.bind(var0)(var3);
            case 479:
                if (!var2) {
                    _fun47320_ip = 549;
                    continue _fun47320
                }
            case 482:
                var2 = var0.push;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 37;
                var3 = var7[var1];
                var3 = var5.bind(var6)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var1 = var7[var1];
                var1 = var5.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1.BV6xDm;
                var1 = var3.bind(var4)(var1);
                var1 = var2.bind(var0)(var1);
            case 549:
                return var0;
        }
    };
    var2.useQuestWarningTips = var4;
    var4 = function(arg0) { // Original name: useQuest, environment: var1
        _fun47321: for (var _fun47321_ip = 0;;) switch (_fun47321_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 11;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.useStateFromStores;
                var0 = _closure1_slot10;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var0
                    var0 = _closure1_slot10;
                    var0 = var0.quests;
                    return var0;
                };
                var2 = var2.bind(var3)(var1, var0);
                var1 = var2.get;
                var0 = arg0;
                var1 = var1.bind(var2)(var0);
                var0 = null;
                var2 = var0 != var1;
                if (!var2) {
                    _fun47321_ip = 80;
                    continue _fun47321
                }
            case 77:
                var0 = var1;
            case 80:
                return var0;
        }
    };
    var2.useQuest = var4;
    var4 = function(arg0) { // Original name: useNonNullableQuest, environment: var1
        var6 = arg0;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 11;
        var2 = var3[var2];
        var4 = undefined;
        var8 = var5.bind(var4)(var2);
        var7 = var8.useStateFromStores;
        var2 = _closure1_slot10;
        var5 = new Array(1);
        var5[0] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot10;
            var1 = var2.getQuest;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var7.bind(var8)(var5, var0, var2);
        var2 = _closure1_slot1;
        var1 = 40;
        var1 = var3[var1];
        var3 = var2.bind(var4)(var1);
        var1 = null;
        var2 = var1 != var0;
        var1 = global;
        var1 = var1.HermesInternal;
        var5 = var1.concat;
        var1 = 'Unknown quest ID ';
        var1 = var5.bind(var1)(var6);
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.useNonNullableQuest = var4;
    var4 = function(arg0) { // Original name: useQuestBarOrDockModeChangeTracking, environment: var1
        var1 = arg0;
        var2 = var1.mode;
        var _closure2_slot0 = var2;
        var5 = var1.questContent;
        var _closure2_slot1 = var5;
        var4 = var1.sourceQuestContent;
        var _closure2_slot2 = var4;
        var6 = var1.questId;
        var _closure2_slot3 = var6;
        var8 = _closure1_slot5;
        var7 = var8.useRef;
        var3 = null;
        var3 = var7.bind(var8)(var3);
        var _closure2_slot4 = var3;
        var8 = _closure1_slot5;
        var7 = var8.useEffect;
        var3 = new Array(4);
        var3[0] = var6;
        var3[1] = var5;
        var3[2] = var2;
        var3[3] = var4;
        var2 = function() { // Environment: var0
            _fun47326: for (var _fun47326_ip = 0;;) switch (_fun47326_ip) {
                case 0:
                    var1 = _closure2_slot3;
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun47326_ip = 33;
                        continue _fun47326
                    }
                case 16:
                    var1 = _closure2_slot4;
                    var2 = var1.current;
                    var1 = _closure2_slot0;
                    var0 = var2 !== var1;
                case 33:
                    if (!var0) {
                        _fun47326_ip = 129;
                        continue _fun47326
                    }
                case 36:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 41;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.trackQuestBarOrDockModeChange;
                    var2 = {};
                    var1 = _closure2_slot0;
                    var2.mode = var1;
                    var0 = _closure2_slot4;
                    var6 = var0.current;
                    var2.prevMode = var6;
                    var6 = _closure2_slot1;
                    var2.questContent = var6;
                    var6 = _closure2_slot3;
                    var2.questId = var6;
                    var5 = _closure2_slot2;
                    var2.sourceQuestContent = var5;
                    var2 = var3.bind(var4)(var2);
                    var0.current = var1;
                case 129:
                    var0 = undefined;
                    return var0;
            }
        };
        var2 = var7.bind(var8)(var2, var3);
        var3 = _closure1_slot5;
        var2 = var3.useEffect;
        var1 = new Array(3);
        var1[0] = var6;
        var1[1] = var5;
        var1[2] = var4;
        var0 = function() { // Environment: var0
            _fun47327: for (var _fun47327_ip = 0;;) switch (_fun47327_ip) {
                case 0:
                    var1 = _closure2_slot3;
                    var0 = null;
                    if (!(var0 == var1)) {
                        _fun47327_ip = 17;
                        continue _fun47327
                    }
                case 13:
                    var0 = undefined;
                    return var0;
                case 17:
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 41;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.trackQuestBarOrDockModeChange;
                        var1 = {};
                        var4 = null;
                        var1.mode = var4;
                        var5 = _closure2_slot4;
                        var5 = var5.current;
                        var1.prevMode = var5;
                        var5 = _closure2_slot1;
                        var1.questContent = var5;
                        var5 = _closure2_slot3;
                        var1.questId = var5;
                        var4 = _closure2_slot2;
                        var1.sourceQuestContent = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        var0 = undefined;
        return var0;
    };
    var2.useQuestBarOrDockModeChangeTracking = var4;
    var4 = function(arg0, arg1) { // Original name: useCosponsoredLogotypeAsset, environment: var1
        var2 = arg0;
        var5 = arg1;
        var _closure2_slot0 = var2;
        var _closure2_slot1 = var5;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var3 = 11;
        var4 = var7[var3];
        var3 = undefined;
        var9 = var6.bind(var3)(var4);
        var8 = var9.useStateFromStores;
        var4 = _closure1_slot10;
        var6 = new Array(1);
        var6[0] = var4;
        var4 = new Array(1);
        var4[0] = var2;
        var2 = function() { // Environment: var0
            var2 = _closure1_slot10;
            var1 = var2.getQuest;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4 = var8.bind(var9)(var6, var2, var4);
        var _closure2_slot2 = var4;
        var6 = _closure1_slot1;
        var2 = 42;
        var2 = var7[var2];
        var2 = var6.bind(var3)(var2);
        var6 = var2.bind(var3)();
        var _closure2_slot3 = var6;
        var3 = _closure1_slot5;
        var2 = var3.useMemo;
        var1 = new Array(3);
        var1[0] = var6;
        var1[1] = var5;
        var1[2] = var4;
        var0 = function() { // Environment: var0
            _fun47331: for (var _fun47331_ip = 0;;) switch (_fun47331_ip) {
                case 0:
                    var1 = _closure2_slot2;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun47331_ip = 156;
                        continue _fun47331
                    }
                case 16:
                    var1 = _closure2_slot1;
                    if (!(var0 == var1)) {
                        _fun47331_ip = 87;
                        continue _fun47331
                    }
                case 24:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 43;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.isThemeDark;
                    var3 = _closure2_slot3;
                    var3 = var4.bind(var5)(var3);
                    var1 = _closure1_slot21;
                    if (var3) {
                        _fun47331_ip = 79;
                        continue _fun47331
                    }
                case 71:
                    var5 = var1.LIGHT;
                    _fun47331_ip = 85;
                    continue _fun47331;
                case 79:
                    var5 = var1.DARK;
                case 85:
                    _fun47331_ip = 91;
                    continue _fun47331;
                case 87:
                    var5 = _closure2_slot1;
                case 91:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 44;
                    var3 = var8[var1];
                    var6 = undefined;
                    var4 = var7.bind(var6)(var3);
                    var3 = var4.getQuestAsset;
                    var2 = _closure2_slot2;
                    var1 = var8[var1];
                    var1 = var7.bind(var6)(var1);
                    var1 = var1.QuestAssetType;
                    var1 = var1.COSPONSOR_LOGO_TYPE;
                    var1 = var3.bind(var4)(var2, var1, var5);
                    return var1;
                case 156:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useCosponsoredLogotypeAsset = var4;
    var4 = function(arg0) { // Original name: useClaimedCollectibleRewardMessage, environment: var1
        _fun47332: for (var _fun47332_ip = 0;;) switch (_fun47332_ip) {
            case 0:
                var7 = arg0;
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 24;
                var2 = var6[var1];
                var5 = undefined;
                var4 = var3.bind(var5)(var2);
                var2 = var4.getDefaultRewardName;
                var4 = var2.bind(var4)(var7);
                var2 = var6[var1];
                var8 = var3.bind(var5)(var2);
                var2 = var8.getCollectibleQuestRewardDuration;
                var13 = var2.bind(var8)(var7);
                var2 = var6[var1];
                var8 = var3.bind(var5)(var2);
                var2 = var8.getCollectibleQuestRewardExtendableExpirationDate;
                var15 = var2.bind(var8)(var7);
                var2 = var6[var1];
                var8 = var3.bind(var5)(var2);
                var2 = var8.isCollectibleQuestRewardPermanentWithPremiumSubscription;
                var9 = var2.bind(var8)(var7);
                var1 = var6[var1];
                var2 = var3.bind(var5)(var1);
                var1 = var2.isCollectibleQuestRewardPremiumExtendable;
                var1 = var1.bind(var2)(var7);
                var2 = 11;
                var2 = var6[var2];
                var10 = var3.bind(var5)(var2);
                var8 = var10.useStateFromStores;
                var2 = _closure1_slot9;
                var7 = new Array(1);
                var7[0] = var2;
                var2 = function() { // Environment: var2
                    var1 = _closure1_slot9;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var7 = var8.bind(var10)(var7, var2);
                var2 = 45;
                var2 = var6[var2];
                var6 = var3.bind(var5)(var2);
                var3 = var6.isPremium;
                var2 = _closure1_slot23;
                var2 = var2.TIER_2;
                var7 = var3.bind(var6)(var7, var2);
                var2 = null;
                if (!(var2 != var13)) {
                    _fun47332_ip = 540;
                    continue _fun47332
                }
            case 204:
                var10 = _closure1_slot0;
                var2 = _closure1_slot2;
                var14 = 37;
                var3 = var2[var14];
                var3 = var10.bind(var5)(var3);
                var11 = var3.intl;
                var8 = var11.formatToPlainString;
                var3 = var2[var14];
                var3 = var10.bind(var5)(var3);
                var3 = var3.t;
                var6 = var3.o97tNn;
                var3 = {};
                var3.rewardName = var4;
                var6 = var8.bind(var11)(var6, var3);
                var3 = var2[var14];
                var3 = var10.bind(var5)(var3);
                var12 = var3.intl;
                var11 = var12.formatToPlainString;
                var3 = var2[var14];
                var3 = var10.bind(var5)(var3);
                var3 = var3.t;
                var8 = var3.PkyRZo;
                var3 = {};
                var3.rewardName = var4;
                var3.expirationDate = var15;
                var8 = var11.bind(var12)(var8, var3);
                var3 = var2[var14];
                var3 = var10.bind(var5)(var3);
                var15 = var3.intl;
                var12 = var15.formatToPlainString;
                var3 = var2[var14];
                var3 = var10.bind(var5)(var3);
                var3 = var3.t;
                var11 = var3.ie4YK0;
                var3 = {};
                var3.rewardName = var4;
                var3.duration = var13;
                var3 = var12.bind(var15)(var11, var3);
                var11 = var2[var14];
                var11 = var10.bind(var5)(var11);
                var12 = var11.intl;
                var11 = var12.formatToPlainString;
                var2 = var2[var14];
                var2 = var10.bind(var5)(var2);
                var2 = var2.t;
                var10 = var2.yCpc0U;
                var2 = {};
                var2.duration = var13;
                var2.rewardName = var4;
                var2 = var11.bind(var12)(var10, var2);
                if (var1) {
                    _fun47332_ip = 515;
                    continue _fun47332
                }
            case 447:
                var10 = _closure1_slot0;
                var1 = _closure1_slot2;
                var11 = var1[var14];
                var11 = var10.bind(var5)(var11);
                var12 = var11.intl;
                var11 = var12.formatToPlainString;
                var1 = var1[var14];
                var1 = var10.bind(var5)(var1);
                var1 = var1.t;
                var10 = var1.tTlItm;
                var1 = {};
                var1.duration = var13;
                var1.decorationName = var4;
                var1 = var11.bind(var12)(var10, var1);
                _fun47332_ip = 538;
                continue _fun47332;
            case 515:
                if (var9) {
                    _fun47332_ip = 526;
                    continue _fun47332
                }
            case 518:
                if (!var7) {
                    _fun47332_ip = 524;
                    continue _fun47332
                }
            case 521:
                var2 = var8;
            case 524:
                _fun47332_ip = 535;
                continue _fun47332;
            case 526:
                if (!var7) {
                    _fun47332_ip = 532;
                    continue _fun47332
                }
            case 529:
                var3 = var6;
            case 532:
                var2 = var3;
            case 535:
                var1 = var2;
            case 538:
                return var1;
            case 540:
                var1 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 37;
                var2 = var6[var0];
                var2 = var1.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.formatToPlainString;
                var0 = var6[var0];
                var0 = var1.bind(var5)(var0);
                var0 = var0.t;
                var1 = var0.l9uXL8;
                var0 = {};
                var0.decorationName = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.useClaimedCollectibleRewardMessage = var4;
    var4 = function(arg0) { // Original name: useLaunchInGameActivityQuest, environment: var1
        var2 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 23;
        var0 = var5[var0];
        var3 = undefined;
        var4 = var2.bind(var3)(var0);
        var2 = var4.getActivityApplicationId;
        var0 = arg0;
        var4 = var2.bind(var4)(var0);
        var0 = {};
        var2 = _closure1_slot1;
        var1 = 46;
        var1 = var5[var1];
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var1.applicationId = var4;
        var1 = var2.bind(var3)(var1);
        var0.launchInGameActivity = var1;
        return var0;
    };
    var2.useLaunchInGameActivityQuest = var4;
    var2.useIsPreviewerOnAnyQuest = var3;
    var3 = function() { // Environment: var1
        _fun47335: for (var _fun47335_ip = 0;;) switch (_fun47335_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 47;
                var0 = var2[var0];
                var2 = undefined;
                var4 = var3.bind(var2)(var0);
                var3 = var4.isQuestPreviewTool2Enabled;
                var0 = {};
                var5 = _closure1_slot12;
                var5 = var5.QUEST_PREVIEW_TOOL_2;
                var0.location = var5;
                var0 = var3.bind(var4)(var0);
                var1 = _closure1_slot31;
                var1 = var1.bind(var2)();
                if (!var0) {
                    _fun47335_ip = 66;
                    continue _fun47335
                }
            case 63:
                var0 = var1;
            case 66:
                return var0;
        }
    };
    var2.useShouldShowPreviewToolTab = var3;
    var3 = function(arg0) { // Environment: var1
        _fun47336: for (var _fun47336_ip = 0;;) switch (_fun47336_ip) {
            case 0:
                var5 = arg0;
                var4 = null;
                var1 = var4 == var5;
                var6 = undefined;
                var0 = undefined;
                if (var1) {
                    _fun47336_ip = 22;
                    continue _fun47336
                }
            case 16:
                var0 = var5.userStatus;
            case 22:
                var0 = var4 != var0;
                if (!var0) {
                    _fun47336_ip = 94;
                    continue _fun47336
                }
            case 29:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 19;
                var1 = var9[var1];
                var7 = var8.bind(var6)(var1);
                var3 = var7.isDismissed;
                var2 = var5.userStatus;
                var1 = 18;
                var1 = var9[var1];
                var1 = var8.bind(var6)(var1);
                var1 = var1.QuestContent;
                var1 = var1.ACTIVITY_PANEL;
                var0 = var3.bind(var7)(var2, var1);
            case 94:
                var3 = _closure1_slot46;
                var7 = var4 != var5;
                var2 = null;
                if (!var7) {
                    _fun47336_ip = 113;
                    continue _fun47336
                }
            case 110:
                var2 = var5;
            case 113:
                var3 = var3.bind(var6)(var2);
                var7 = var4 == var5;
                var2 = undefined;
                if (var7) {
                    _fun47336_ip = 148;
                    continue _fun47336
                }
            case 127:
                var5 = var5.userStatus;
                var7 = var4 == var5;
                var2 = undefined;
                if (var7) {
                    _fun47336_ip = 148;
                    continue _fun47336
                }
            case 142:
                var2 = var5.claimedAt;
            case 148:
                var2 = var4 != var2;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 11;
                var4 = var7[var4];
                var7 = var5.bind(var6)(var4);
                var6 = var7.useStateFromStores;
                var1 = _closure1_slot10;
                var5 = new Array(1);
                var5[0] = var1;
                var4 = function() { // Environment: var1
                    var0 = _closure1_slot10;
                    var1 = var0.questEnrollmentBlockedUntil;
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var1 = new Array(0);
                var1 = var6.bind(var7)(var5, var4, var1);
                if (var0) {
                    _fun47336_ip = 213;
                    continue _fun47336
                }
            case 210:
                var0 = var3;
            case 213:
                if (var0) {
                    _fun47336_ip = 219;
                    continue _fun47336
                }
            case 216:
                var0 = var2;
            case 219:
                if (var0) {
                    _fun47336_ip = 225;
                    continue _fun47336
                }
            case 222:
                var0 = var1;
            case 225:
                var0 = !var0;
                return var0;
        }
    };
    var2.useShouldShowQuestsActivityPanelItem = var3;
    var3 = function() { // Environment: var1
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 11;
        var3 = var3[var2];
        var2 = undefined;
        var5 = var4.bind(var2)(var3);
        var4 = var5.useStateFromStoresArray;
        var2 = _closure1_slot10;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() { // Environment: var0
            var0 = _closure1_slot10;
            var1 = var0.quests;
            var0 = var1.values;
            var4 = var0.bind(var1)();
            var0 = new Array(0);
            var3 = 0;
            var5 = var0;
            var1 = arraySpread(var5, var4, var3);
            return var0;
        };
        var4 = var4.bind(var5)(var3, var2);
        var _closure2_slot0 = var4;
        var3 = _closure1_slot5;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure2_slot0;
            var1 = var2.filter;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.preview;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useQuestsWithPreviewAccess = var3;
    var3 = function() { // Original name: useQuestHomeFilterOptions, environment: var1
        var3 = _closure1_slot5;
        var2 = var3.useMemo;
        var1 = function() { // Environment: var0
            var2 = _closure1_slot15;
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                _fun47344: for (var _fun47344_ip = 0;;) switch (_fun47344_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = var3[Symbol.iterator];
                        var3 = var0().next;
                        var1 = var3().value;
                        var2 = var0;
                        var5 = undefined;
                        var2 = var2 === var5;
                        var4 = undefined;
                        if (var2) {
                            _fun47344_ip = 27;
                            continue _fun47344
                        }
                    case 24:
                        var4 = var1;
                    case 27:
                        var1 = undefined;
                        if (var2) {
                            _fun47344_ip = 57;
                            continue _fun47344
                        }
                    case 32:
                        var6 = var3().value;
                        var3 = var0;
                        var3 = var3 === var5;
                        var1 = undefined;
                        var2 = var3;
                        if (var3) {
                            _fun47344_ip = 57;
                            continue _fun47344
                        }
                    case 51:
                        var1 = var6;
                        var2 = var3;
                    case 57:
                        if (var2) {
                            _fun47344_ip = 63;
                            continue _fun47344
                        }
                    case 60:
                        var0.return();
                    case 63:
                        var0 = {};
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 33;
                        var2 = var6[var2];
                        var3 = var3.bind(var5)(var2);
                        var2 = var3.getFilterGroupHeadingText;
                        var2 = var2.bind(var3)(var4);
                        var0.heading = var2;
                        var0.options = var1;
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = new Array(0);
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useQuestHomeFilterOptions = var3;
    var3 = function() { // Original name: useQuestHomeSortOptions, environment: var1
        var3 = _closure1_slot5;
        var2 = var3.useMemo;
        var1 = function() { // Environment: var0
            var0 = global;
            var2 = var0.Object;
            var1 = var2.keys;
            var0 = _closure1_slot14;
            var2 = var1.bind(var2)(var0);
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                var2 = arg0;
                var0 = {};
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 33;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.getSortMethodText;
                var3 = _closure1_slot14;
                var3 = var3[var2];
                var3 = var4.bind(var5)(var3);
                var0.label = var3;
                var1 = _closure1_slot14;
                var1 = var1[var2];
                var0.value = var1;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = new Array(0);
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useQuestHomeSortOptions = var3;
    var3 = function(arg0) { // Original name: useQuestHomeSortingFilteringAnalytics, environment: var1
        var1 = arg0;
        var2 = var1.selectedSortMethod;
        var _closure2_slot0 = var2;
        var5 = var1.selectedFilters;
        var _closure2_slot1 = var5;
        var4 = var1.numQuestsVisible;
        var _closure2_slot2 = var4;
        var6 = _closure1_slot5;
        var3 = var6.useRef;
        var7 = null;
        var3 = var3.bind(var6)(var7);
        var _closure2_slot3 = var3;
        var6 = _closure1_slot5;
        var3 = var6.useRef;
        var3 = var3.bind(var6)(var7);
        var _closure2_slot4 = var3;
        var7 = _closure1_slot5;
        var6 = var7.useEffect;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() { // Environment: var0
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 48;
            var2 = var2[var0];
            var0 = undefined;
            var6 = var3.bind(var0)(var2);
            var5 = var6.track;
            var1 = _closure1_slot22;
            var4 = var1.QUEST_HOME_SORT_METHOD_CHANGED;
            var3 = {};
            var2 = _closure2_slot0;
            var3.sort_method = var2;
            var1 = _closure2_slot3;
            var7 = var1.current;
            var3.previous_sort_method = var7;
            var3 = var5.bind(var6)(var4, var3);
            var1.current = var2;
            return var0;
        };
        var2 = var6.bind(var7)(var2, var3);
        var3 = _closure1_slot5;
        var2 = var3.useEffect;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun47350: for (var _fun47350_ip = 0;;) switch (_fun47350_ip) {
                case 0:
                    var3 = _closure2_slot1;
                    var2 = var3.map;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.filter;
                        return var0;
                    };
                    var2 = var2.bind(var3)(var0);
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var0 = 48;
                    var4 = var4[var0];
                    var0 = undefined;
                    var6 = var5.bind(var0)(var4);
                    var5 = var6.track;
                    var3 = _closure1_slot22;
                    var4 = var3.QUEST_HOME_FILTERS_CHANGED;
                    var3 = {};
                    var3.filters = var2;
                    var7 = _closure2_slot4;
                    var7 = var7.current;
                    var8 = null;
                    if (!(var8 == var7)) {
                        _fun47350_ip = 90;
                        continue _fun47350
                    }
                case 86:
                    var7 = new Array(0);
                case 90:
                    var3.previous_filters = var7;
                    var7 = _closure2_slot2;
                    var3.num_quests_visible = var7;
                    var3 = var5.bind(var6)(var4, var3);
                    var1 = _closure2_slot4;
                    var1.current = var2;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        var0 = undefined;
        return var0;
    };
    var2.useQuestHomeSortingFilteringAnalytics = var3;
    var3 = function(arg0) { // Environment: var1
        _fun47352: for (var _fun47352_ip = 0;;) switch (_fun47352_ip) {
            case 0:
                var3 = _closure1_slot5;
                var2 = var3.useMemo;
                var1 = function() { // Environment: var0
                    _fun47353: for (var _fun47353_ip = 0;;) switch (_fun47353_ip) {
                        case 0:
                            var1 = _closure1_slot9;
                            var0 = var1.getCurrentUser;
                            var2 = var0.bind(var1)();
                            var0 = null;
                            var0 = var0 == var2;
                            var1 = undefined;
                            if (var0) {
                                _fun47353_ip = 37;
                                continue _fun47353
                            }
                        case 27:
                            var0 = var2.isStaff;
                            var1 = var0.bind(var2)();
                        case 37:
                            var0 = true;
                            var0 = var0 === var1;
                            return var0;
                    }
                };
                var0 = new Array(0);
                var0 = var2.bind(var3)(var1, var0);
                if (var0) {
                    _fun47352_ip = 41;
                    continue _fun47352
                }
            case 32:
                var1 = arg0;
                var0 = var1.preview;
            case 41:
                return var0;
        }
    };
    var2.useShouldShowQuestBarOverride = var3;
    var1 = function() { // Original name: useFetchQuestHomeTakeoverConfig, environment: var1
        _fun47354: for (var _fun47354_ip = 0;;) switch (_fun47354_ip) {
            case 0:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 20;
                var1 = var10[var1];
                var5 = undefined;
                var1 = var9.bind(var5)(var1);
                var3 = var1.QuestHomeTakeoverRolloutExperiment;
                var2 = var3.useConfig;
                var1 = {};
                var6 = _closure1_slot12;
                var6 = var6.QUEST_HOME_DESKTOP;
                var1.location = var6;
                var1 = var2.bind(var3)(var1);
                var7 = var1.enabled;
                var _closure2_slot0 = var7;
                var2 = _closure1_slot5;
                var1 = var2.useState;
                var2 = var1.bind(var2)(var7);
                var1 = _closure1_slot4;
                var13 = 2;
                var2 = var1.bind(var5)(var2, var13);
                var6 = 0;
                var1 = var2[var6];
                var11 = 1;
                var2 = var2[var11];
                var _closure2_slot1 = var2;
                var3 = _closure1_slot5;
                var2 = var3.useState;
                var3 = var2.bind(var3)(var7);
                var2 = _closure1_slot4;
                var3 = var2.bind(var5)(var3, var13);
                var2 = var3[var6];
                var3 = var3[var11];
                var _closure2_slot2 = var3;
                var8 = _closure1_slot5;
                var3 = var8.useState;
                var14 = false;
                var8 = var3.bind(var8)(var14);
                var3 = _closure1_slot4;
                var3 = var3.bind(var5)(var8, var13);
                var8 = var3[var6];
                var3 = var3[var11];
                var _closure2_slot3 = var3;
                var12 = _closure1_slot5;
                var3 = var12.useState;
                var12 = var3.bind(var12)(var14);
                var3 = _closure1_slot4;
                var3 = var3.bind(var5)(var12, var13);
                var6 = var3[var6];
                var3 = var3[var11];
                var _closure2_slot4 = var3;
                var3 = 11;
                var3 = var10[var3];
                var10 = var9.bind(var5)(var3);
                var9 = var10.useStateFromStoresObject;
                var3 = _closure1_slot10;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = function() { // Environment: var0
                    var0 = {};
                    var3 = _closure1_slot10;
                    var2 = var3.isFetchingQuestHomeTakeover;
                    var2 = var2.bind(var3)();
                    var0.isFetching = var2;
                    var2 = _closure1_slot10;
                    var1 = var2.getQuestHomeTakeoverConfig;
                    var1 = var1.bind(var2)();
                    var0.takeoverConfig = var1;
                    return var0;
                };
                var5 = var9.bind(var10)(var5, var3);
                var3 = var5.isFetching;
                var10 = var5.takeoverConfig;
                var _closure2_slot5 = var10;
                var12 = _closure1_slot5;
                var11 = var12.useMemo;
                var9 = new Array(2);
                var9[0] = var7;
                var9[1] = var10;
                var5 = function() { // Environment: var0
                    _fun47356: for (var _fun47356_ip = 0;;) switch (_fun47356_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            if (!var0) {
                                _fun47356_ip = 143;
                                continue _fun47356
                            }
                        case 13:
                            var0 = _closure2_slot5;
                            var3 = null;
                            if (!(var3 != var0)) {
                                _fun47356_ip = 143;
                                continue _fun47356
                            }
                        case 23:
                            var5 = global;
                            var0 = var5.Date;
                            var2 = var0.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var0
                                }
                            });
                            var9 = var2;
                            var0 = new var9[var0](var8);
                            var4 = var0 instanceof Object ? var0 : var2;
                            var7 = var5.Date;
                            var2 = _closure2_slot5;
                            var8 = var2.startsAt;
                            var6 = var7.prototype;
                            var6 = Object.create(var6, {
                                constructor: {
                                    value: var7
                                }
                            });
                            var9 = var6;
                            var0 = new var9[var7](var8, var7);
                            var0 = var0 instanceof Object ? var0 : var6;
                            var6 = var5.Date;
                            var8 = var2.expiresAt;
                            var5 = var6.prototype;
                            var5 = Object.create(var5, {
                                constructor: {
                                    value: var6
                                }
                            });
                            var9 = var5;
                            var2 = new var9[var6](var8, var7);
                            var2 = var2 instanceof Object ? var2 : var5;
                            var5 = var4 < var0;
                            var0 = null;
                            if (var5) {
                                _fun47356_ip = 141;
                                continue _fun47356
                            }
                        case 128:
                            var2 = var4 > var2;
                            var0 = null;
                            if (var2) {
                                _fun47356_ip = 141;
                                continue _fun47356
                            }
                        case 137:
                            var0 = _closure2_slot5;
                        case 141:
                            return var0;
                        case 143:
                            var0 = null;
                            return var0;
                    }
                };
                var5 = var11.bind(var12)(var5, var9);
                var12 = _closure1_slot5;
                var11 = var12.useEffect;
                var9 = new Array(1);
                var9[0] = var7;
                var7 = function() { // Environment: var0
                    _fun47357: for (var _fun47357_ip = 0;;) switch (_fun47357_ip) {
                        case 0:
                            var1 = function() { // Original name: _fetchTakeover, environment: var0
                                var3 = undefined;
                                var0 = undefined;
                                var2 = _closure1_slot3;
                                var1 = function*() { // Environment: var1
                                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                                        _fun47360: for (var _fun47360_ip = 0;;) switch (_fun47360_ip) {
                                            case 0:
                                                StartGenerator();
                                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                if (var1) {
                                                    _fun47360_ip = 142;
                                                    continue _fun47360
                                                }
                                            case 10: // try_start_0 // try_start_1
                                                var2 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var1 = 14;
                                                var1 = var3[var1];
                                                var4 = undefined;
                                                var2 = var2.bind(var4)(var1);
                                                var1 = var2.fetchQuestHomeTakeover;
                                                var1 = var1.bind(var2)();
                                                SaveGenerator(address = 49);
                                            case 47:
                                                return var1;
                                            case 49:
                                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                                if (var2) {
                                                    _fun47360_ip = 57;
                                                    continue _fun47360
                                                }
                                            case 55: // try_end0
                                                _fun47360_ip = 103;
                                                continue _fun47360;
                                            case 57: // try_end1
                                                var3 = _closure2_slot1;
                                                var2 = false;
                                                var2 = var3.bind(var4)(var2);
                                                return var1;
                                            case 74: // try_start_2 // catch_target0
                                                CatchBlockStart(arg_register = 1);
                                                var4 = _closure2_slot2;
                                                var3 = undefined;
                                                var2 = false;
                                                var2 = var4.bind(var3)(var2);
                                                var2 = _closure2_slot3;
                                                var1 = true;
                                                var1 = var2.bind(var3)(var1);
                                            case 103: // try_end2
                                                var3 = _closure2_slot1;
                                                var1 = undefined;
                                                var2 = false;
                                                var2 = var3.bind(var1)(var2);
                                                return var1;
                                            case 122: // catch_target1 // catch_target2
                                                CatchBlockStart(arg_register = 1);
                                                var4 = _closure2_slot1;
                                                var3 = undefined;
                                                var2 = false;
                                                var2 = var4.bind(var3)(var2);
                                                throw var1;
                                            case 142:
                                                return var0;
                                        }
                                    };
                                    return var0;
                                };
                                var3 = var2.bind(var3)(var1);
                                _closure3_slot0 = var3;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            var _closure3_slot0 = var1;
                            var1 = _closure2_slot0;
                            if (!var1) {
                                _fun47357_ip = 32;
                                continue _fun47357
                            }
                        case 21:
                            var1 = function() { // Original name: fetchTakeover, environment: var0
                                var0 = undefined;
                                var3 = _closure3_slot0;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 32:
                            var0 = undefined;
                            return var0;
                    }
                };
                var7 = var11.bind(var12)(var7, var9);
                var9 = _closure1_slot5;
                var7 = var9.useEffect;
                var4 = new Array(1);
                var4[0] = var10;
                var0 = function() { // Environment: var0
                    var1 = function() { // Original name: _loadImages, environment: var0
                        var3 = undefined;
                        var0 = undefined;
                        var2 = _closure1_slot3;
                        var1 = function*() { // Environment: var1
                            var0 = function*() { // Original name: ?anon_0_, environment: var0
                                _fun47365: for (var _fun47365_ip = 0;;) switch (_fun47365_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun47365_ip = 238;
                                            continue _fun47365
                                        }
                                    case 10: // try_start_0 // try_start_1
                                        var3 = _closure2_slot5;
                                        var2 = null;
                                        if (!(var2 != var3)) {
                                            _fun47365_ip = 165;
                                            continue _fun47365
                                        }
                                    case 26:
                                        var2 = global;
                                        var4 = var2.Promise;
                                        var3 = var4.all;
                                        var8 = _closure1_slot0;
                                        var9 = _closure1_slot2;
                                        var7 = 49;
                                        var2 = var9[var7];
                                        var5 = undefined;
                                        var11 = var8.bind(var5)(var2);
                                        var10 = var11.preloadImage;
                                        var6 = _closure2_slot5;
                                        var2 = var6.assetHeroImage;
                                        var2 = var2.url;
                                        var10 = var10.bind(var11)(var2);
                                        var2 = new Array(2);
                                        var2[0] = var10;
                                        var7 = var9[var7];
                                        var8 = var8.bind(var5)(var7);
                                        var7 = var8.preloadImage;
                                        var6 = var6.assetSponsorImage;
                                        var6 = var6.url;
                                        var6 = var7.bind(var8)(var6);
                                        var2[1] = var6;
                                        var2 = var3.bind(var4)(var2);
                                        SaveGenerator(address = 143);
                                    case 141:
                                        return var2;
                                    case 143:
                                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                                        if (var3) {
                                            _fun47365_ip = 151;
                                            continue _fun47365
                                        }
                                    case 149: // try_end0
                                        _fun47365_ip = 199;
                                        continue _fun47365;
                                    case 151: // try_end1
                                        var4 = _closure2_slot2;
                                        var3 = false;
                                        var3 = var4.bind(var5)(var3);
                                        return var2;
                                    case 165:
                                        var3 = _closure2_slot2;
                                        var1 = undefined;
                                        var2 = false;
                                        var2 = var3.bind(var1)(var2);
                                        return var1;
                                    case 181: // try_start_2 // catch_target0
                                        CatchBlockStart(arg_register = 1);
                                        var3 = _closure2_slot4;
                                        var2 = undefined;
                                        var1 = true;
                                        var1 = var3.bind(var2)(var1);
                                    case 199: // try_end2
                                        var3 = _closure2_slot2;
                                        var1 = undefined;
                                        var2 = false;
                                        var2 = var3.bind(var1)(var2);
                                        return var1;
                                    case 218: // catch_target1 // catch_target2
                                        CatchBlockStart(arg_register = 1);
                                        var4 = _closure2_slot2;
                                        var3 = undefined;
                                        var2 = false;
                                        var2 = var4.bind(var3)(var2);
                                        throw var1;
                                    case 238:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var3 = var2.bind(var3)(var1);
                        _closure3_slot0 = var3;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    var _closure3_slot0 = var1;
                    var1 = function() { // Original name: loadImages, environment: var0
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    var1 = !var1;
                    return var0;
                };
                var0 = var7.bind(var9)(var0, var4);
                var0 = {};
                var4 = null;
                if (var8) {
                    _fun47354_ip = 383;
                    continue _fun47354
                }
            case 375:
                var4 = null;
                if (var6) {
                    _fun47354_ip = 383;
                    continue _fun47354
                }
            case 380:
                var4 = var5;
            case 383:
                var0.takeover = var4;
                if (var1) {
                    _fun47354_ip = 394;
                    continue _fun47354
                }
            case 391:
                var1 = var3;
            case 394:
                if (var1) {
                    _fun47354_ip = 400;
                    continue _fun47354
                }
            case 397:
                var1 = var2;
            case 400:
                var0.isLoading = var1;
                return var0;
        }
    };
    var2.useFetchQuestHomeTakeoverConfig = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 1676, 1372, 4476, 1613, 5182, 5184, 660, 1615, 566, 5269, 5270, 5214, 478, 5238, 5195, 5186, 5194, 5272, 667, 5221, 5222, 5242, 22, 5190, 5273, 5259, 5274, 5232, 6839, 12135, 5245, 6840, 12136, 1675, 1234, 1604, 3418, 44, 5217, 3205, 3165, 5241, 3068, 12137, 5226, 795, 1461, 2]);