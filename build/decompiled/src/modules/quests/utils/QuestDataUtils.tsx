// modules/quests/utils/QuestDataUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var0 = function arg0, arg1() {
        _fun46754: for (var _fun46754_ip = 0;;) switch (_fun46754_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun46754_ip = 46;
                    continue _fun46754
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun46754_ip = 55;
                    continue _fun46754
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun46754_ip = 343;
                    continue _fun46754
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun46754_ip = 323;
                    continue _fun46754
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun46754_ip = 283;
                    continue _fun46754
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun46754_ip = 270;
                    continue _fun46754
                }
            case 110:
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
                    _fun46754_ip = 163;
                    continue _fun46754
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun46754_ip = 179;
                    continue _fun46754
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun46754_ip = 249;
                    continue _fun46754
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun46754_ip = 249;
                    continue _fun46754
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun46754_ip = 234;
                    continue _fun46754
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun46754_ip = 247;
                    continue _fun46754
                }
            case 234:
                var8 = _closure1_slot10;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun46754_ip = 265;
                continue _fun46754;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun46754_ip = 283;
                continue _fun46754;
            case 270:
                var6 = _closure1_slot10;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun46754_ip = 323;
                    continue _fun46754
                }
            case 289:
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
            case 323:
                if (!var3) {
                    _fun46754_ip = 330;
                    continue _fun46754
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun46755: for (var _fun46755_ip = 0;;) switch (_fun46755_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun46755_ip = 56;
                                continue _fun46755
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
                            _fun46755_ip = 67;
                            continue _fun46755;
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
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function arg0, arg1() {
        _fun46756: for (var _fun46756_ip = 0;;) switch (_fun46756_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun46756_ip = 23;
                    continue _fun46756
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun46756_ip = 33;
                    continue _fun46756
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
                    _fun46756_ip = 70;
                    continue _fun46756
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun46756_ip = 55;
                    continue _fun46756
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var5 = function arg0() {
        var0 = global;
        var3 = var0.Object;
        var2 = var3.keys;
        var1 = _closure1_slot5;
        var2 = var2.bind(var3)(var1);
        var1 = var2.includes;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 4;
        var3 = var3[var0];
        var0 = undefined;
        var0 = var4.bind(var0)(var3);
        var3 = var0.QuestContent;
        var0 = arg0;
        var0 = var3[var0];
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot11 = var5;
    var4 = function arg0() {
        var0 = global;
        var3 = var0.Date;
        var1 = arg0;
        var1 = var1.config;
        var4 = var1.expiresAt;
        var2 = var3.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var3
            }
        });
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var2 = var1 instanceof Object ? var1 : var2;
        var1 = var2.valueOf;
        var1 = var1.bind(var2)();
        var2 = var0.Date;
        var0 = var2.now;
        var0 = var0.bind(var2)();
        var0 = var1 <= var0;
        return var0;
    };
    var _closure1_slot12 = var4;
    var3 = function arg0() {
        var1 = {};
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 4;
        var2 = var5[var0];
        var3 = undefined;
        var2 = var4.bind(var3)(var2);
        var2 = var2.QuestContent;
        var6 = var2.QUEST_BAR;
        var2 = var5[var0];
        var2 = var4.bind(var3)(var2);
        var2 = var2.QuestPlacement;
        var2 = var2.DESKTOP_ACCOUNT_PANEL_AREA;
        var1[var6] = var2;
        var2 = var5[var0];
        var2 = var4.bind(var3)(var2);
        var2 = var2.QuestContent;
        var6 = var2.QUEST_BAR_V2;
        var2 = var5[var0];
        var2 = var4.bind(var3)(var2);
        var2 = var2.QuestPlacement;
        var2 = var2.DESKTOP_ACCOUNT_PANEL_AREA;
        var1[var6] = var2;
        var2 = var5[var0];
        var2 = var4.bind(var3)(var2);
        var2 = var2.QuestContent;
        var2 = var2.QUEST_BAR_MOBILE;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.QuestPlacement;
        var0 = var0.MOBILE_HOME_DOCK_AREA;
        var1[var2] = var0;
        var0 = arg0;
        var0 = var1[var0];
        return var0;
    };
    var _closure1_slot13 = var3;
    var0 = function arg0() {
        _fun46760: for (var _fun46760_ip = 0;;) switch (_fun46760_ip) {
            case 0:
                var2 = arg0;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 6;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.getConfig;
                var1 = {};
                var5 = 'getQuestDeliveryDataForPlacement';
                var1.location = var5;
                var1 = var3.bind(var4)(var1);
                var1 = var1.enableNewRequestBehavior;
                var0 = _closure1_slot4;
                if (var1) {
                    _fun46760_ip = 178;
                    continue _fun46760
                }
            case 64:
                var3 = var0.questToDeliverForPlacement;
                var1 = var3.get;
                var4 = var1.bind(var3)(var2);
                var1 = null;
                var3 = var1 == var4;
                if (var3) {
                    _fun46760_ip = 176;
                    continue _fun46760
                }
            case 89:
                var3 = {};
                var5 = var4.quest;
                var5 = var5.id;
                var3.questId = var5;
                var5 = var4.adDecisionData;
                var3.adDecisionData = var5;
                var5 = var4.adContext;
                var3.adContext = var5;
                var5 = var4.metadataRaw;
                var3.metadataRaw = var5;
                var5 = var4.metadataSealed;
                var3.metadataSealed = var5;
                var5 = var4.trafficMetadataRaw;
                var3.trafficMetadataRaw = var5;
                var4 = var4.trafficMetadataSealed;
                var3.trafficMetadataSealed = var4;
                var1 = var3;
            case 176:
                return var1;
            case 178:
                var1 = var0.questAdDecisionByPlacement;
                var0 = var1.get;
                var2 = var0.bind(var1)(var2);
                var0 = null;
                var1 = var0 == var2;
                if (var1) {
                    _fun46760_ip = 285;
                    continue _fun46760
                }
            case 203:
                var1 = {};
                var3 = var2.questId;
                var1.questId = var3;
                var3 = var2.adDecisionData;
                var1.adDecisionData = var3;
                var3 = var2.adContext;
                var1.adContext = var3;
                var3 = var2.metadataRaw;
                var1.metadataRaw = var3;
                var3 = var2.metadataSealed;
                var1.metadataSealed = var3;
                var3 = var2.trafficMetadataRaw;
                var1.trafficMetadataRaw = var3;
                var2 = var2.trafficMetadataSealed;
                var1.trafficMetadataSealed = var2;
                var0 = var1;
            case 285:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = global;
    var11 = var0.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var6);
    var0 = 0;
    var6 = var8[var0];
    var0 = undefined;
    var6 = var9.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var9 = var6.DismissibleQuestContentFlags;
    var _closure1_slot5 = var9;
    var9 = var6.BILLABLE_PLACEMENTS;
    var _closure1_slot6 = var9;
    var6 = var6.EMPTY_AD_DECISION_DATA;
    var _closure1_slot7 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var6 = var6.Routes;
    var _closure1_slot8 = var6;
    var6 = 8;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/quests/utils/QuestDataUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = 2592000000.0;
    var2.THIRTY_DAYS_MS = var6;
    var6 = function arg0, arg1, arg2() {
        _fun46761: for (var _fun46761_ip = 0;;) switch (_fun46761_ip) {
            case 0:
                var5 = arg0;
                var8 = arg1;
                var6 = arg2;
                var1 = global;
                var3 = var1.Array;
                var2 = var3.isArray;
                var2 = var2.bind(var3)(var8);
                var4 = var8;
                if (!var2) {
                    _fun46761_ip = 76;
                    continue _fun46761
                }
            case 35:
                var7 = var1.Map;
                var3 = var8.map;
                var2 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var2 = var1.id;
                    var0 = new Array(2);
                    var0[0] = var2;
                    var0[1] = var1;
                    return var0;
                };
                var9 = var3.bind(var8)(var2);
                var3 = var7.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var7
                    }
                });
                var10 = var3;
                var2 = new var10[var7](var9, var8);
                var4 = var2 instanceof Object ? var2 : var3;
            case 76:
                var3 = var1.Array;
                var2 = var3.isArray;
                var2 = var2.bind(var3)(var6);
                var3 = var6;
                if (!var2) {
                    _fun46761_ip = 139;
                    continue _fun46761
                }
            case 98:
                var2 = var1.Map;
                var1 = var6.map;
                var0 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var2 = var1.id;
                    var0 = new Array(2);
                    var0[0] = var2;
                    var0[1] = var1;
                    return var0;
                };
                var9 = var1.bind(var6)(var0);
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var10 = var1;
                var0 = new var10[var2](var9, var8);
                var3 = var0 instanceof Object ? var0 : var1;
            case 139:
                var0 = var4.get;
                var0 = var0.bind(var4)(var5);
                var2 = null;
                if (!(var2 == var0)) {
                    _fun46761_ip = 201;
                    continue _fun46761
                }
            case 155:
                var1 = var3.get;
                var5 = var1.bind(var3)(var5);
                var6 = var2 == var5;
                var3 = undefined;
                if (var6) {
                    _fun46761_ip = 180;
                    continue _fun46761
                }
            case 174:
                var3 = var5.replacementId;
            case 180:
                var2 = var2 != var3;
                var1 = undefined;
                if (!var2) {
                    _fun46761_ip = 199;
                    continue _fun46761
                }
            case 189:
                var2 = var4.get;
                var1 = var2.bind(var4)(var3);
            case 199:
                return var1;
            case 201:
                return var0;
        }
    };
    var2.findQuestOrReplacement = var6;
    var2.isDismissible = var5;
    var5 = function arg0, arg1() {
        _fun46764: for (var _fun46764_ip = 0;;) switch (_fun46764_ip) {
            case 0:
                var4 = arg1;
                var1 = _closure1_slot11;
                var3 = undefined;
                var1 = var1.bind(var3)(var4);
                if (var1) {
                    _fun46764_ip = 24;
                    continue _fun46764
                }
            case 20:
                var1 = false;
                return var1;
            case 24:
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 4;
                var1 = var5[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.QuestContent;
                var4 = var1[var4];
                var1 = 5;
                var1 = var5[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.hasFlag;
                var1 = arg0;
                var1 = var1.dismissedQuestContent;
                var0 = _closure1_slot5;
                var0 = var0[var4];
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.isDismissed = var5;
    var5 = function arg0, arg1() {
        var0 = arg0;
        var2 = var0.targetedContent;
        var1 = var2.includes;
        var0 = arg1;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.includesTarget = var5;
    var2.isQuestExpired = var4;
    var4 = function arg0() {
        _fun46766: for (var _fun46766_ip = 0;;) switch (_fun46766_ip) {
            case 0:
                var0 = arg0;
                var2 = _closure1_slot12;
                var1 = undefined;
                var1 = var2.bind(var1)(var0);
                if (var1) {
                    _fun46766_ip = 24;
                    continue _fun46766
                }
            case 20:
                var1 = false;
                return var1;
            case 24:
                var1 = global;
                var3 = var1.Date;
                var2 = var3.now;
                var3 = var2.bind(var3)();
                var2 = 2592000000.0;
                var2 = var3 - var2;
                var4 = var1.Date;
                var1 = var0.config;
                var5 = var1.expiresAt;
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var6 = var3;
                var1 = new var6[var4](var5, var4);
                var3 = var1 instanceof Object ? var1 : var3;
                var1 = var3.valueOf;
                var1 = var1.bind(var3)();
                var0 = var0.config;
                var3 = var0.expiresAt;
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun46766_ip = 128;
                    continue _fun46766
                }
            case 121:
                var1 = var1 <= var2;
                var0 = !var1;
            case 128:
                return var0;
        }
    };
    var2.getIsQuestExpiredButWithinThirtyDayLookback = var4;
    var4 = function arg0() {
        _fun46767: for (var _fun46767_ip = 0;;) switch (_fun46767_ip) {
            case 0:
                var8 = global;
                var1 = var8.Date;
                var0 = var1.now;
                var7 = var0.bind(var1)();
                var1 = _closure1_slot9;
                var6 = undefined;
                var0 = arg0;
                var5 = var1.bind(var6)(var0);
                var0 = var5.bind(var6)();
                var1 = var0.done;
                var4 = null;
                var3 = var0;
                var2 = null;
                var0 = null;
                if (var1) {
                    _fun46767_ip = 154;
                    continue _fun46767
                }
            case 55:
                var1 = var3.value;
                var10 = var8.Date;
                var1 = var1.config;
                var12 = var1.expiresAt;
                var9 = var10.prototype;
                var9 = Object.create(var9, {
                    constructor: {
                        value: var10
                    }
                });
                var13 = var9;
                var1 = new var13[var10](var12, var11);
                var9 = var1 instanceof Object ? var1 : var9;
                var1 = var9.valueOf;
                var1 = var1.bind(var9)();
                var9 = var2;
                if (!(!(var1 <= var7))) {
                    _fun46767_ip = 133;
                    continue _fun46767
                }
            case 113:
                var10 = var4 == var2;
                if (var10) {
                    _fun46767_ip = 124;
                    continue _fun46767
                }
            case 120:
                var10 = var1 < var2;
            case 124:
                if (!var10) {
                    _fun46767_ip = 130;
                    continue _fun46767
                }
            case 127:
                var2 = var1;
            case 130:
                var9 = var2;
            case 133:
                var10 = var5.bind(var6)();
                var1 = var10.done;
                var2 = var9;
                var3 = var10;
                var0 = var2;
                if (!var1) {
                    _fun46767_ip = 55;
                    continue _fun46767
                }
            case 154:
                return var0;
        }
    };
    var2.findNextUpcomingExpirationEpochMs = var4;
    var4 = function arg0() {
        _fun46768: for (var _fun46768_ip = 0;;) switch (_fun46768_ip) {
            case 0:
                var3 = arg0;
                var4 = arguments[1];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun46768_ip = 26;
                    continue _fun46768
                }
            case 12:
                var0 = {};
                var1 = 'short';
                var0.dateStyle = var1;
                var4 = var0;
            case 26:
                var0 = null;
                var1 = var0 == var3;
                var0 = '';
                if (var1) {
                    _fun46768_ip = 95;
                    continue _fun46768
                }
            case 39:
                var1 = global;
                var1 = var1.Date;
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var7 = var2;
                var6 = var3;
                var1 = new var7[var1](var6, var5);
                var3 = var1 instanceof Object ? var1 : var2;
                var2 = var3.toLocaleDateString;
                var1 = _closure1_slot3;
                var1 = var1.locale;
                var0 = var2.bind(var3)(var1, var4);
            case 95:
                return var0;
        }
    };
    var2.getQuestFormattedDate = var4;
    var4 = function arg0, arg1, arg2() {
        _fun46769: for (var _fun46769_ip = 0;;) switch (_fun46769_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var1 = var2.get;
                var0 = arg2;
                var1 = var1.bind(var2)(var0);
                var0 = null;
                if (!(var0 == var1)) {
                    _fun46769_ip = 29;
                    continue _fun46769
                }
            case 25:
                var2 = undefined;
                return var2;
            case 29:
                var2 = var3.get;
                var1 = var1.quest;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                var2 = var0 == var1;
                var3 = undefined;
                var0 = undefined;
                if (var2) {
                    _fun46769_ip = 81;
                    continue _fun46769
                }
            case 61:
                var2 = _closure1_slot12;
                var2 = var2.bind(var3)(var1);
                var0 = undefined;
                if (var2) {
                    _fun46769_ip = 81;
                    continue _fun46769
                }
            case 78:
                var0 = var1;
            case 81:
                return var0;
        }
    };
    var2.getQuestForPlacement = var4;
    var2.getQuestPlacementFromQuestContent = var3;
    var3 = function arg0() {
        _fun46770: for (var _fun46770_ip = 0;;) switch (_fun46770_ip) {
            case 0:
                var3 = _closure1_slot13;
                var2 = undefined;
                var0 = arg0;
                var3 = var3.bind(var2)(var0);
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun46770_ip = 40;
                    continue _fun46770
                }
            case 26:
                var2 = _closure1_slot6;
                var1 = var2.has;
                var0 = var1.bind(var2)(var3);
            case 40:
                return var0;
        }
    };
    var2.isBillableQuestContent = var3;
    var3 = function arg0, arg1() {
        _fun46771: for (var _fun46771_ip = 0;;) switch (_fun46771_ip) {
            case 0:
                var2 = _closure1_slot13;
                var4 = undefined;
                var1 = arg1;
                var3 = var2.bind(var4)(var1);
                var2 = null;
                if (!(var2 != var3)) {
                    _fun46771_ip = 67;
                    continue _fun46771
                }
            case 23:
                var1 = _closure1_slot14;
                var3 = var1.bind(var4)(var3);
                if (!(var2 == var3)) {
                    _fun46771_ip = 38;
                    continue _fun46771
                }
            case 36:
                var3 = {};
            case 38:
                var1 = var3.adDecisionData;
                var3 = var3.questId;
                if (!(var2 != var1)) {
                    _fun46771_ip = 61;
                    continue _fun46771
                }
            case 54:
                var2 = arg0;
                if (!(var3 !== var2)) {
                    _fun46771_ip = 65;
                    continue _fun46771
                }
            case 61:
                var1 = _closure1_slot7;
            case 65:
                return var1;
            case 67:
                var0 = _closure1_slot7;
                return var0;
        }
    };
    var2.getAdDecisionData = var3;
    var3 = function arg0() {
        _fun46772: for (var _fun46772_ip = 0;;) switch (_fun46772_ip) {
            case 0:
                var3 = _closure1_slot13;
                var0 = undefined;
                var2 = arg0;
                var3 = var3.bind(var0)(var2);
                var2 = null;
                if (!(var2 == var3)) {
                    _fun46772_ip = 25;
                    continue _fun46772
                }
            case 23:
                return var0;
            case 25:
                var1 = _closure1_slot14;
                var1 = var1.bind(var0)(var3);
                var2 = var2 == var1;
                var0 = undefined;
                if (var2) {
                    _fun46772_ip = 49;
                    continue _fun46772
                }
            case 43:
                var0 = var1.metadataRaw;
            case 49:
                return var0;
        }
    };
    var2.getAdMetadataRaw = var3;
    var3 = function arg0() {
        _fun46773: for (var _fun46773_ip = 0;;) switch (_fun46773_ip) {
            case 0:
                var3 = _closure1_slot13;
                var0 = undefined;
                var2 = arg0;
                var3 = var3.bind(var0)(var2);
                var2 = null;
                if (!(var2 == var3)) {
                    _fun46773_ip = 25;
                    continue _fun46773
                }
            case 23:
                return var0;
            case 25:
                var1 = _closure1_slot14;
                var1 = var1.bind(var0)(var3);
                var2 = var2 == var1;
                var0 = undefined;
                if (var2) {
                    _fun46773_ip = 49;
                    continue _fun46773
                }
            case 43:
                var0 = var1.metadataSealed;
            case 49:
                return var0;
        }
    };
    var2.getAdMetadataSealed = var3;
    var3 = function arg0, arg1() {
        _fun46774: for (var _fun46774_ip = 0;;) switch (_fun46774_ip) {
            case 0:
                var5 = arg1;
                var3 = _closure1_slot13;
                var1 = undefined;
                var0 = arg0;
                var4 = var3.bind(var1)(var0);
                var3 = null;
                if (!(var3 != var4)) {
                    _fun46774_ip = 65;
                    continue _fun46774
                }
            case 26:
                var0 = _closure1_slot14;
                var4 = var0.bind(var1)(var4);
                if (!(var3 == var4)) {
                    _fun46774_ip = 41;
                    continue _fun46774
                }
            case 39:
                var4 = {};
            case 41:
                var0 = var4.trafficMetadataRaw;
                var4 = var4.questId;
                if (!(var3 != var0)) {
                    _fun46774_ip = 61;
                    continue _fun46774
                }
            case 57:
                if (!(var4 !== var5)) {
                    _fun46774_ip = 99;
                    continue _fun46774
                }
            case 61:
                if (!(var3 == var5)) {
                    _fun46774_ip = 67;
                    continue _fun46774
                }
            case 65:
                return var1;
            case 67:
                var4 = _closure1_slot4;
                var2 = var4.getQuest;
                var2 = var2.bind(var4)(var5);
                var3 = var3 == var2;
                var1 = undefined;
                if (var3) {
                    _fun46774_ip = 97;
                    continue _fun46774
                }
            case 91:
                var1 = var2.trafficMetadataRaw;
            case 97:
                return var1;
            case 99:
                return var0;
        }
    };
    var2.getAdTrafficMetadataRaw = var3;
    var3 = function arg0, arg1() {
        _fun46775: for (var _fun46775_ip = 0;;) switch (_fun46775_ip) {
            case 0:
                var5 = arg1;
                var3 = _closure1_slot13;
                var1 = undefined;
                var0 = arg0;
                var4 = var3.bind(var1)(var0);
                var3 = null;
                if (!(var3 != var4)) {
                    _fun46775_ip = 65;
                    continue _fun46775
                }
            case 26:
                var0 = _closure1_slot14;
                var4 = var0.bind(var1)(var4);
                if (!(var3 == var4)) {
                    _fun46775_ip = 41;
                    continue _fun46775
                }
            case 39:
                var4 = {};
            case 41:
                var0 = var4.trafficMetadataSealed;
                var4 = var4.questId;
                if (!(var3 != var0)) {
                    _fun46775_ip = 61;
                    continue _fun46775
                }
            case 57:
                if (!(var4 !== var5)) {
                    _fun46775_ip = 99;
                    continue _fun46775
                }
            case 61:
                if (!(var3 == var5)) {
                    _fun46775_ip = 67;
                    continue _fun46775
                }
            case 65:
                return var1;
            case 67:
                var4 = _closure1_slot4;
                var2 = var4.getQuest;
                var2 = var2.bind(var4)(var5);
                var3 = var3 == var2;
                var1 = undefined;
                if (var3) {
                    _fun46775_ip = 97;
                    continue _fun46775
                }
            case 91:
                var1 = var2.trafficMetadataSealed;
            case 97:
                return var1;
            case 99:
                return var0;
        }
    };
    var2.getAdTrafficMetadataSealed = var3;
    var3 = function arg0() {
        _fun46776: for (var _fun46776_ip = 0;;) switch (_fun46776_ip) {
            case 0:
                var3 = _closure1_slot13;
                var0 = undefined;
                var2 = arg0;
                var3 = var3.bind(var0)(var2);
                var2 = null;
                if (!(var2 == var3)) {
                    _fun46776_ip = 25;
                    continue _fun46776
                }
            case 23:
                return var0;
            case 25:
                var1 = _closure1_slot14;
                var1 = var1.bind(var0)(var3);
                var2 = var2 == var1;
                var0 = undefined;
                if (var2) {
                    _fun46776_ip = 49;
                    continue _fun46776
                }
            case 43:
                var0 = var1.adContext;
            case 49:
                return var0;
        }
    };
    var2.getAdContext = var3;
    var3 = function arg0, arg1() {
        _fun46777: for (var _fun46777_ip = 0;;) switch (_fun46777_ip) {
            case 0:
                var6 = arg1;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var4 = var2.bind(var0)(var1);
                var3 = var4.captureException;
                var2 = {};
                var9 = var2;
                var8 = var6;
                var1 = copyDataProperties(var9, var8);
                var5 = {};
                var1 = null;
                var7 = var1 == var6;
                var1 = undefined;
                if (var7) {
                    _fun46777_ip = 65;
                    continue _fun46777
                }
            case 59:
                var1 = var6.tags;
            case 65:
                var9 = var5;
                var8 = var1;
                var1 = copyDataProperties(var9, var8);
                var6 = 'quests';
                var1 = 'app_context';
                var5[var1] = var6;
                var1 = 'tags';
                var2[var1] = var5;
                var1 = arg0;
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var2.captureQuestsException = var3;
    var1 = function() {
        var0 = global;
        var0 = var0.window;
        var0 = var0.location;
        var2 = var0.pathname;
        var1 = var2.startsWith;
        var0 = _closure1_slot8;
        var0 = var0.QUEST_HOME;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.isOnDiscoverQuestHomeRoute = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1685, 5226, 5228, 660, 5230, 1384, 5239, 1207, 2]);