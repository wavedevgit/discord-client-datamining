// modules/premium/native/NoticeStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun95738: for (var _fun95738_ip = 0;;) switch (_fun95738_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun95738_ip = 76;
                continue _fun95738;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot14 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function arg0, arg1() {
        _fun95741: for (var _fun95741_ip = 0;;) switch (_fun95741_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun95741_ip = 46;
                    continue _fun95741
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun95741_ip = 55;
                    continue _fun95741
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun95741_ip = 345;
                    continue _fun95741
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun95741_ip = 323;
                    continue _fun95741
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun95741_ip = 283;
                    continue _fun95741
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun95741_ip = 270;
                    continue _fun95741
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
                    _fun95741_ip = 163;
                    continue _fun95741
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun95741_ip = 179;
                    continue _fun95741
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun95741_ip = 249;
                    continue _fun95741
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun95741_ip = 249;
                    continue _fun95741
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun95741_ip = 234;
                    continue _fun95741
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun95741_ip = 247;
                    continue _fun95741
                }
            case 234:
                var8 = _closure1_slot16;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun95741_ip = 265;
                continue _fun95741;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun95741_ip = 283;
                continue _fun95741;
            case 270:
                var6 = _closure1_slot16;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun95741_ip = 323;
                    continue _fun95741
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
                    _fun95741_ip = 330;
                    continue _fun95741
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun95742: for (var _fun95742_ip = 0;;) switch (_fun95742_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun95742_ip = 56;
                                continue _fun95742
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
                            _fun95742_ip = 67;
                            continue _fun95742;
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
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0, arg1() {
        _fun95743: for (var _fun95743_ip = 0;;) switch (_fun95743_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun95743_ip = 23;
                    continue _fun95743
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun95743_ip = 33;
                    continue _fun95743
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
                    _fun95743_ip = 70;
                    continue _fun95743
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun95743_ip = 55;
                    continue _fun95743
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function arg0() {
        var1 = _closure1_slot13;
        var0 = arg0;
        var1 = var1[var0];
        var0 = '-untilAtLeast';
        var0 = var1 + var0;
        return var0;
    };
    var _closure1_slot17 = var0;
    var0 = function arg0() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 8;
        var2 = var2[var0];
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var3 = var2.Storage;
        var2 = var3.remove;
        var4 = _closure1_slot17;
        var1 = arg0;
        var1 = var4.bind(var0)(var1);
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot18 = var0;
    var0 = function arg0, arg1() {
        _fun95746: for (var _fun95746_ip = 0;;) switch (_fun95746_ip) {
            case 0:
                var4 = arg0;
                var5 = arg1;
                var2 = null;
                if (!(var2 != var4)) {
                    _fun95746_ip = 156;
                    continue _fun95746
                }
            case 15:
                var1 = _closure1_slot13;
                var1 = var1[var4];
                if (!(var2 != var1)) {
                    _fun95746_ip = 71;
                    continue _fun95746
                }
            case 30:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 8;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var6);
                var7 = var3.Storage;
                var6 = var7.set;
                var3 = true;
                var3 = var6.bind(var7)(var1, var3);
            case 71:
                if (!(var2 != var5)) {
                    _fun95746_ip = 79;
                    continue _fun95746
                }
            case 75:
                if (!(var2 == var1)) {
                    _fun95746_ip = 92;
                    continue _fun95746
                }
            case 79:
                var2 = _closure1_slot18;
                var1 = undefined;
                var1 = var2.bind(var1)(var4);
                _fun95746_ip = 156;
                continue _fun95746;
            case 92:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var3 = var2.Storage;
                var2 = var3.set;
                var0 = _closure1_slot17;
                var1 = var0.bind(var1)(var4);
                var4 = var5.format;
                var0 = 'YYYY-MM-DDTHH:mm:ss.SSSZ';
                var0 = var4.bind(var5)(var0);
                var0 = var2.bind(var3)(var1, var0);
            case 156:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function arg0() {
        _fun95747: for (var _fun95747_ip = 0;;) switch (_fun95747_ip) {
            case 0:
                var6 = arg0;
                var4 = null;
                if (!(var4 != var6)) {
                    _fun95747_ip = 220;
                    continue _fun95747
                }
            case 12:
                var1 = _closure1_slot13;
                var7 = var1[var6];
                if (!(var4 != var7)) {
                    _fun95747_ip = 112;
                    continue _fun95747
                }
            case 27:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 8;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var5 = var1.Storage;
                var2 = var5.get;
                var1 = _closure1_slot17;
                var1 = var1.bind(var3)(var6);
                var5 = var2.bind(var5)(var1);
                var1 = var4 != var5;
                var2 = null;
                if (!var1) {
                    _fun95747_ip = 108;
                    continue _fun95747
                }
            case 83:
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 9;
                var1 = var8[var1];
                var1 = var6.bind(var3)(var1);
                var2 = var1.bind(var3)(var5);
            case 108:
                if (!(var4 == var2)) {
                    _fun95747_ip = 183;
                    continue _fun95747
                }
            case 112:
                var1 = var4 != var7;
                if (!var1) {
                    _fun95747_ip = 127;
                    continue _fun95747
                }
            case 119:
                var5 = '';
                var1 = var5 !== var7;
            case 127:
                if (!var1) {
                    _fun95747_ip = 181;
                    continue _fun95747
                }
            case 130:
                var8 = _closure1_slot0;
                var6 = _closure1_slot2;
                var5 = 8;
                var6 = var6[var5];
                var5 = undefined;
                var5 = var8.bind(var5)(var6);
                var6 = var5.Storage;
                var5 = var6.get;
                var5 = var5.bind(var6)(var7);
                var4 = var4 != var5;
                if (!var4) {
                    _fun95747_ip = 178;
                    continue _fun95747
                }
            case 175:
                var4 = var5;
            case 178:
                var1 = var4;
            case 181:
                return var1;
            case 183:
                var1 = var2.isAfter;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 9;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var0 = var1.bind(var2)(var0);
                return var0;
            case 220:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var8 = function() {
        _fun95748: for (var _fun95748_ip = 0;;) switch (_fun95748_ip) {
            case 0:
                var0 = null;
                _closure1_slot11 = var0;
                var2 = _closure1_slot15;
                var1 = _closure1_slot12;
                var0 = undefined;
                var4 = var2.bind(var0)(var1);
                var2 = var4.bind(var0)();
                var1 = var2.done;
                var3 = 0;
                if (var1) {
                    _fun95748_ip = 235;
                    continue _fun95748
                }
            case 41:
                var1 = var2.value;
                var6 = _closure1_slot10;
                var6 = var6.PREMIUM_TIER_2_TRIAL_ENDING;
                if (!(var1 !== var6)) {
                    _fun95748_ip = 147;
                    continue _fun95748
                }
            case 60:
                var6 = _closure1_slot10;
                var6 = var6.PREMIUM_TIER_0_TRIAL_ENDING;
                if (!(var1 === var6)) {
                    _fun95748_ip = 217;
                    continue _fun95748
                }
            case 77:
                var8 = _closure1_slot8;
                var7 = var8.getAlmostExpiringTrialOffers;
                var6 = _closure1_slot9;
                var9 = var6.TIER_0;
                var6 = new Array(1);
                var6[0] = var9;
                var6 = var7.bind(var8)(var6);
                var6 = var6.length;
                if (!(var6 > var3)) {
                    _fun95748_ip = 217;
                    continue _fun95748
                }
            case 119:
                var7 = _closure1_slot20;
                var6 = _closure1_slot10;
                var6 = var6.PREMIUM_TIER_0_TRIAL_ENDING;
                var6 = var7.bind(var0)(var6);
                if (var6) {
                    _fun95748_ip = 217;
                    continue _fun95748
                }
            case 141:
                _closure1_slot11 = var1;
                _fun95748_ip = 235;
                continue _fun95748;
            case 147:
                var8 = _closure1_slot8;
                var7 = var8.getAlmostExpiringTrialOffers;
                var6 = _closure1_slot9;
                var9 = var6.TIER_2;
                var6 = new Array(1);
                var6[0] = var9;
                var6 = var7.bind(var8)(var6);
                var6 = var6.length;
                if (!(var6 > var3)) {
                    _fun95748_ip = 217;
                    continue _fun95748
                }
            case 189:
                var7 = _closure1_slot20;
                var6 = _closure1_slot10;
                var6 = var6.PREMIUM_TIER_2_TRIAL_ENDING;
                var6 = var7.bind(var0)(var6);
                if (var6) {
                    _fun95748_ip = 217;
                    continue _fun95748
                }
            case 211:
                _closure1_slot11 = var1;
                _fun95748_ip = 235;
                continue _fun95748;
            case 217:
                var6 = var4.bind(var0)();
                var1 = var6.done;
                var2 = var6;
                if (!var1) {
                    _fun95748_ip = 41;
                    continue _fun95748
                }
            case 235:
                return var0;
        }
    };
    var _closure1_slot21 = var8;
    var0 = global;
    var9 = var0.Object;
    var7 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.PremiumSubscriptionSKUs;
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var7 = var1.NoticeTypes;
    var _closure1_slot10 = var7;
    var1 = null;
    var _closure1_slot11 = var1;
    var9 = var7.PREMIUM_TIER_2_TRIAL_ENDING;
    var1 = new Array(2);
    var1[0] = var9;
    var9 = var7.PREMIUM_TIER_0_TRIAL_ENDING;
    var1[1] = var9;
    var _closure1_slot12 = var1;
    var1 = {};
    var10 = var7.PREMIUM_TIER_0_TRIAL_ENDING;
    var9 = 'hidePremiumTier0TrialEndingReminder';
    var1[var10] = var9;
    var9 = var7.PREMIUM_TIER_2_TRIAL_ENDING;
    var7 = 'hidePremiumTier2TrialEndingReminder';
    var1[var9] = var7;
    var _closure1_slot13 = var1;
    var1 = 10;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun95750: for (var _fun95750_ip = 0;;) switch (_fun95750_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot14;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun95750_ip = 69;
                        continue _fun95750
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun95750_ip = 105;
                    continue _fun95750;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var2 = this;
            var4 = var2.syncWith;
            var1 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = _closure1_slot21;
            var1 = var4.bind(var2)(var3, var1);
            var1 = var2.waitFor;
            var0 = _closure1_slot8;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'getNoticeType';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot11;
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'NoticeStore';
    var7.displayName = var1;
    var1 = 11;
    var1 = var5[var1];
    var13 = var6.bind(var0)(var1);
    var1 = {};
    var1.CONNECTION_OPEN = var8;
    var1.CURRENT_USER_UPDATE = var8;
    var1.PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS = var8;
    var1.BILLING_SUBSCRIPTION_UPDATE_SUCCESS = var8;
    var1.BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS = var8;
    var1.BILLING_SUBSCRIPTION_FETCH_SUCCESS = var8;
    var8 = function() {
        _fun95753: for (var _fun95753_ip = 0;;) switch (_fun95753_ip) {
            case 0:
                var3 = _closure1_slot15;
                var1 = _closure1_slot12;
                var0 = undefined;
                var6 = var3.bind(var0)(var1);
                var4 = var6.bind(var0)();
                var3 = var4.done;
                var5 = 8;
                var1 = null;
                if (var3) {
                    _fun95753_ip = 110;
                    continue _fun95753
                }
            case 35:
                var7 = var4.value;
                var3 = _closure1_slot13;
                var9 = var3[var7];
                if (!(var1 != var9)) {
                    _fun95753_ip = 86;
                    continue _fun95753
                }
            case 52:
                var8 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var5];
                var3 = var8.bind(var0)(var3);
                var8 = var3.Storage;
                var3 = var8.remove;
                var3 = var3.bind(var8)(var9);
            case 86:
                var3 = _closure1_slot18;
                var3 = var3.bind(var0)(var7);
                var7 = var6.bind(var0)();
                var3 = var7.done;
                var4 = var7;
                if (!var3) {
                    _fun95753_ip = 35;
                    continue _fun95753
                }
            case 110:
                _closure1_slot11 = var1;
                return var0;
        }
    };
    var1.LOGOUT = var8;
    var3 = function arg0() {
        _fun95754: for (var _fun95754_ip = 0;;) switch (_fun95754_ip) {
            case 0:
                var2 = _closure1_slot11;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun95754_ip = 46;
                    continue _fun95754
                }
            case 13:
                var4 = _closure1_slot19;
                var3 = _closure1_slot11;
                var1 = arg0;
                var2 = var1.untilAtLeast;
                var1 = undefined;
                var2 = var4.bind(var1)(var3, var2);
                var0 = _closure1_slot21;
                var0 = var0.bind(var1)();
            case 46:
                var0 = undefined;
                return var0;
        }
    };
    var1.NOTICE_DISMISS = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var14 = var3;
    var12 = var1;
    var1 = new var14[var7](var13, var12, var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/native/NoticeStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 6644, 1623, 660, 587, 3045, 566, 806, 2]);