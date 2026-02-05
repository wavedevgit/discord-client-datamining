// modules/premium/ReferralTrialStore.tsx
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
        _fun55277: for (var _fun55277_ip = 0;;) switch (_fun55277_ip) {
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
            case 70: // try_end0
                _fun55277_ip = 74;
                continue _fun55277;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot26 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var0 = function arg0, arg1() {
        _fun55280: for (var _fun55280_ip = 0;;) switch (_fun55280_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun55280_ip = 46;
                    continue _fun55280
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun55280_ip = 55;
                    continue _fun55280
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun55280_ip = 343;
                    continue _fun55280
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun55280_ip = 323;
                    continue _fun55280
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun55280_ip = 283;
                    continue _fun55280
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun55280_ip = 270;
                    continue _fun55280
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
                    _fun55280_ip = 163;
                    continue _fun55280
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun55280_ip = 179;
                    continue _fun55280
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun55280_ip = 249;
                    continue _fun55280
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun55280_ip = 249;
                    continue _fun55280
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun55280_ip = 234;
                    continue _fun55280
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun55280_ip = 247;
                    continue _fun55280
                }
            case 234:
                var8 = _closure1_slot28;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun55280_ip = 265;
                continue _fun55280;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun55280_ip = 283;
                continue _fun55280;
            case 270:
                var6 = _closure1_slot28;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun55280_ip = 323;
                    continue _fun55280
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
                    _fun55280_ip = 330;
                    continue _fun55280
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun55281: for (var _fun55281_ip = 0;;) switch (_fun55281_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun55281_ip = 56;
                                continue _fun55281
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
                            _fun55281_ip = 67;
                            continue _fun55281;
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
    var _closure1_slot27 = var0;
    var0 = function arg0, arg1() {
        _fun55282: for (var _fun55282_ip = 0;;) switch (_fun55282_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun55282_ip = 23;
                    continue _fun55282
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun55282_ip = 33;
                    continue _fun55282
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
                    _fun55282_ip = 70;
                    continue _fun55282
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun55282_ip = 55;
                    continue _fun55282
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var0 = function arg0() {
        var2 = _closure1_slot14;
        var1 = var2.add;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot29 = var0;
    var8 = function arg0() {
        var0 = arg0;
        var2 = var0.messages;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot30;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var0 = function arg0() {
        _fun55286: for (var _fun55286_ip = 0;;) switch (_fun55286_ip) {
            case 0:
                var5 = arg0;
                var7 = var5.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 9;
                var3 = var3[var0];
                var0 = undefined;
                var3 = var4.bind(var0)(var3);
                var3 = var3.MessageTypes;
                var6 = var3.PREMIUM_REFERRAL;
                var3 = null;
                var4 = null;
                if (!(var7 === var6)) {
                    _fun55286_ip = 60;
                    continue _fun55286
                }
            case 55:
                var4 = var5.content;
            case 60:
                var _closure2_slot0 = var4;
                if (!(var3 != var4)) {
                    _fun55286_ip = 149;
                    continue _fun55286
                }
            case 68:
                var5 = _closure1_slot15;
                var3 = var5.has;
                var3 = var3.bind(var5)(var4);
                if (var3) {
                    _fun55286_ip = 99;
                    continue _fun55286
                }
            case 85:
                var6 = _closure1_slot14;
                var5 = var6.has;
                var3 = var5.bind(var6)(var4);
            case 99:
                if (var3) {
                    _fun55286_ip = 147;
                    continue _fun55286
                }
            case 102:
                var3 = _closure1_slot29;
                var3 = var3.bind(var0)(var4);
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 8;
                var2 = var4[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.wait;
                var1 = function() { // Environment: var1
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.resolveReferralTrialOffer;
                    var1 = _closure2_slot0;
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.catch;
                    var0 = _closure1_slot9;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
            case 147:
                return var0;
            case 149:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var10 = global;
    var9 = var10.Object;
    var7 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var1);
    var9 = 0;
    var1 = var5[var9];
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
    var1 = var1.NOOP_NULL;
    var _closure1_slot9 = var1;
    var1 = null;
    var _closure1_slot10 = var1;
    var7 = var10.Set;
    var11 = var7.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var7
        }
    });
    var16 = var11;
    var7 = new var16[var7](var15);
    var7 = var7 instanceof Object ? var7 : var11;
    var _closure1_slot11 = var7;
    var7 = var10.Map;
    var11 = var7.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var7
        }
    });
    var16 = var11;
    var7 = new var16[var7](var15);
    var7 = var7 instanceof Object ? var7 : var11;
    var _closure1_slot12 = var7;
    var7 = false;
    var _closure1_slot13 = var7;
    var11 = var10.Set;
    var12 = var11.prototype;
    var12 = Object.create(var12, {
        constructor: {
            value: var11
        }
    });
    var16 = var12;
    var11 = new var16[var11](var15);
    var11 = var11 instanceof Object ? var11 : var12;
    var _closure1_slot14 = var11;
    var11 = var10.Set;
    var12 = var11.prototype;
    var12 = Object.create(var12, {
        constructor: {
            value: var11
        }
    });
    var16 = var12;
    var11 = new var16[var11](var15);
    var11 = var11 instanceof Object ? var11 : var12;
    var _closure1_slot15 = var11;
    var10 = var10.Map;
    var11 = var10.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var10
        }
    });
    var16 = var11;
    var10 = new var16[var10](var15);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot16 = var10;
    var _closure1_slot17 = var9;
    var _closure1_slot18 = var1;
    var10 = new Array(0);
    var _closure1_slot19 = var10;
    var _closure1_slot20 = var7;
    var _closure1_slot21 = var9;
    var _closure1_slot22 = var7;
    var _closure1_slot23 = var7;
    var _closure1_slot24 = var1;
    var1 = function() {
        var0 = true;
        return var0;
    };
    var _closure1_slot25 = var1;
    var1 = 10;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun55290: for (var _fun55290_ip = 0;;) switch (_fun55290_ip) {
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
                    var0 = _closure1_slot26;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun55290_ip = 69;
                        continue _fun55290
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun55290_ip = 105;
                    continue _fun55290;
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
            var3 = this;
            var1 = var3.waitFor;
            var4 = _closure1_slot8;
            var1 = var1.bind(var3)(var4);
            var2 = var3.syncWith;
            var1 = new Array(1);
            var1[0] = var4;
            var0 = _closure1_slot25;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(15);
        var0[0] = var4;
        var4 = {};
        var6 = 'checkAndFetchReferralsRemaining';
        var4.key = var6;
        var6 = function() {
            _fun55292: for (var _fun55292_ip = 0;;) switch (_fun55292_ip) {
                case 0:
                    var1 = _closure1_slot10;
                    var3 = null;
                    var1 = var3 == var1;
                    if (!var1) {
                        _fun55292_ip = 23;
                        continue _fun55292
                    }
                case 16:
                    var2 = _closure1_slot13;
                    var1 = !var2;
                case 23:
                    if (!var1) {
                        _fun55292_ip = 37;
                        continue _fun55292
                    }
                case 26:
                    var4 = _closure1_slot17;
                    var2 = 5;
                    var1 = var4 < var2;
                case 37:
                    if (!var1) {
                        _fun55292_ip = 79;
                        continue _fun55292
                    }
                case 40:
                    var2 = _closure1_slot18;
                    var2 = var3 == var2;
                    if (var2) {
                        _fun55292_ip = 76;
                        continue _fun55292
                    }
                case 51:
                    var4 = _closure1_slot18;
                    var3 = global;
                    var5 = var3.Date;
                    var3 = var5.now;
                    var3 = var3.bind(var5)();
                    var2 = var4 < var3;
                case 76:
                    var1 = var2;
                case 79:
                    if (!var1) {
                        _fun55292_ip = 114;
                        continue _fun55292
                    }
                case 82:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.fetchReferralsRemaining;
                    var0 = var0.bind(var1)();
                case 114:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getReferralsRemaining';
        var4.key = var6;
        var6 = function() {
            var1 = this;
            var0 = var1.checkAndFetchReferralsRemaining;
            var0 = var0.bind(var1)();
            var0 = _closure1_slot10;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getSentUserIds';
        var4.key = var6;
        var6 = function() {
            var1 = this;
            var0 = var1.checkAndFetchReferralsRemaining;
            var0 = var0.bind(var1)();
            var0 = global;
            var2 = var0.Array;
            var1 = var2.from;
            var3 = _closure1_slot11;
            var0 = var3.values;
            var0 = var0.bind(var3)();
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'isFetchingReferralsRemaining';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot13;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getRelevantUserTrialOffer';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot16;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'isResolving';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot14;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getEligibleUsers';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot19;
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getFetchingEligibleUsers';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot20;
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getNextIndexOfEligibleUsers';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot21;
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'getIsEligibleToSendReferrals';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot22;
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'getHasEligibleFriends';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot23;
            return var0;
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'getRefreshAt';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot24;
            return var0;
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'getAllRelevantReferralTrialOffers';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Array;
            var1 = var2.from;
            var3 = _closure1_slot16;
            var0 = var3.values;
            var0 = var0.bind(var3)();
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'getRecipientStatus';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot12;
            return var0;
        };
        var4.value = var5;
        var0[14] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'ReferralTrialStore';
    var7.displayName = var1;
    var1 = 8;
    var1 = var5[var1];
    var15 = var6.bind(var0)(var1);
    var1 = {};
    var9 = function arg0() {
        _fun55306: for (var _fun55306_ip = 0;;) switch (_fun55306_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.userTrialOfferId;
                var _closure2_slot0 = var4;
                var2 = _closure1_slot13;
                if (var2) {
                    _fun55306_ip = 57;
                    continue _fun55306
                }
            case 25:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var2 = var3.fetchReferralsRemaining;
                var2 = var2.bind(var3)();
            case 57:
                var3 = _closure1_slot14;
                var2 = var3.has;
                var2 = var2.bind(var3)(var4);
                if (var2) {
                    _fun55306_ip = 121;
                    continue _fun55306
                }
            case 74:
                var2 = _closure1_slot29;
                var3 = undefined;
                var2 = var2.bind(var3)(var4);
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 8;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.wait;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.resolveReferralTrialOffer;
                    var1 = _closure2_slot0;
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.catch;
                    var0 = _closure1_slot9;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
            case 121:
                var0 = undefined;
                return var0;
        }
    };
    var1.BILLING_REFERRAL_TRIAL_OFFER_UPDATE = var9;
    var9 = function arg0() {
        _fun55308: for (var _fun55308_ip = 0;;) switch (_fun55308_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var1 != var0)) {
                    _fun55308_ip = 26;
                    continue _fun55308
                }
            case 9:
                _closure1_slot24 = var0;
                var0 = true;
                _closure1_slot13 = var0;
                var0 = undefined;
                return var0;
            case 26:
                var3 = "Cannot destructure 'undefined' or 'null'.";
                var4 = var1;
                var0 = throwTypeError(var4, var3);
                var0 = undefined;
                throw var0;
        }
    };
    var1.BILLING_REFERRALS_REMAINING_FETCH_START = var9;
    var9 = function arg0() {
        var0 = arg0;
        var3 = var0.referrals_remaining;
        var7 = var0.sent_user_ids;
        var2 = var0.refresh_at;
        var1 = var0.recipient_status;
        var4 = var0.has_eligible_friends;
        var6 = true;
        _closure1_slot22 = var6;
        _closure1_slot23 = var4;
        var4 = false;
        _closure1_slot13 = var4;
        _closure1_slot10 = var3;
        var3 = global;
        var3 = var3.Set;
        var4 = var3.prototype;
        var4 = Object.create(var4, {
            constructor: {
                value: var3
            }
        });
        var8 = var4;
        var3 = new var8[var3](var7, var6);
        var3 = var3 instanceof Object ? var3 : var4;
        _closure1_slot11 = var3;
        _closure1_slot24 = var2;
        _closure1_slot12 = var1;
        var0 = undefined;
        return var0;
    };
    var1.BILLING_REFERRALS_REMAINING_FETCH_SUCCESS = var9;
    var9 = function arg0() {
        _fun55310: for (var _fun55310_ip = 0;;) switch (_fun55310_ip) {
            case 0:
                var1 = arg0;
                var3 = null;
                if (!(var1 != var3)) {
                    _fun55310_ip = 109;
                    continue _fun55310
                }
            case 9:
                var0 = false;
                _closure1_slot22 = var0;
                _closure1_slot23 = var0;
                _closure1_slot24 = var3;
                _closure1_slot13 = var0;
                var3 = _closure1_slot17;
                var0 = 1;
                var0 = var3 + var0;
                _closure1_slot17 = var0;
                var0 = global;
                var4 = var0.Date;
                var3 = var4.now;
                var3 = var3.bind(var4)();
                var6 = var0.Math;
                var5 = var6.pow;
                var4 = _closure1_slot17;
                var0 = 2;
                var4 = var5.bind(var6)(var0, var4);
                var0 = 1000;
                var0 = var0 * var4;
                var0 = var3 + var0;
                _closure1_slot18 = var0;
                var0 = undefined;
                return var0;
            case 109:
                var7 = "Cannot destructure 'undefined' or 'null'.";
                var8 = var1;
                var0 = throwTypeError(var8, var7);
                var0 = undefined;
                throw var0;
        }
    };
    var1.BILLING_REFERRALS_REMAINING_FETCH_FAIL = var9;
    var9 = function arg0() {
        var0 = arg0;
        var1 = var0.userTrialOffer;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 7;
        var3 = var3[var0];
        var0 = undefined;
        var4 = var4.bind(var0)(var3);
        var3 = var4.fetchReferralsRemaining;
        var3 = var3.bind(var4)();
        var5 = _closure1_slot16;
        var4 = var5.set;
        var3 = var1.id;
        var3 = var4.bind(var5)(var3, var1);
        var3 = _closure1_slot11;
        var2 = var3.add;
        var1 = var1.user_id;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.BILLING_CREATE_REFERRAL_SUCCESS = var9;
    var9 = function arg0() {
        _fun55312: for (var _fun55312_ip = 0;;) switch (_fun55312_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.userTrialOffers;
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var1);
                var1 = var3.fetchReferralsRemaining;
                var1 = var1.bind(var3)();
                var1 = _closure1_slot27;
                var3 = var1.bind(var0)(var2);
                var2 = var3.bind(var0)();
                var1 = var2.done;
                if (var1) {
                    _fun55312_ip = 125;
                    continue _fun55312
                }
            case 65:
                var1 = var2.value;
                var7 = _closure1_slot16;
                var6 = var7.set;
                var5 = var1.id;
                var5 = var6.bind(var7)(var5, var1);
                var6 = _closure1_slot11;
                var5 = var6.add;
                var1 = var1.user_id;
                var1 = var5.bind(var6)(var1);
                var5 = var3.bind(var0)();
                var1 = var5.done;
                var2 = var5;
                if (!var1) {
                    _fun55312_ip = 65;
                    continue _fun55312
                }
            case 125:
                return var0;
        }
    };
    var1.CREATE_REFERRALS_SUCCESS = var9;
    var9 = function arg0() {
        _fun55313: for (var _fun55313_ip = 0;;) switch (_fun55313_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.userTrialOffer;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun55313_ip = 76;
                    continue _fun55313
                }
            case 15:
                var4 = _closure1_slot14;
                var2 = var4.delete;
                var1 = var3.id;
                var1 = var2.bind(var4)(var1);
                var4 = _closure1_slot15;
                var2 = var4.add;
                var1 = var3.id;
                var1 = var2.bind(var4)(var1);
                var2 = _closure1_slot16;
                var1 = var2.set;
                var0 = var3.id;
                var0 = var1.bind(var2)(var0, var3);
            case 76:
                var0 = undefined;
                return var0;
        }
    };
    var1.BILLING_REFERRAL_RESOLVE_SUCCESS = var9;
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.userTrialOfferId;
        var3 = _closure1_slot14;
        var1 = var3.delete;
        var1 = var1.bind(var3)(var2);
        var1 = _closure1_slot15;
        var0 = var1.add;
        var0 = var0.bind(var1)(var2);
        var0 = undefined;
        return var0;
    };
    var1.BILLING_REFERRAL_RESOLVE_FAIL = var9;
    var9 = function() {
        var0 = true;
        _closure1_slot20 = var0;
        var0 = undefined;
        return var0;
    };
    var1.REFERRALS_FETCH_ELIGIBLE_USER_START = var9;
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.users;
        var1 = var0.nextIndex;
        var3 = false;
        _closure1_slot20 = var3;
        _closure1_slot19 = var2;
        _closure1_slot21 = var1;
        var0 = undefined;
        return var0;
    };
    var1.REFERRALS_FETCH_ELIGIBLE_USER_SUCCESS = var9;
    var9 = function() {
        var0 = false;
        _closure1_slot20 = var0;
        var0 = undefined;
        return var0;
    };
    var1.REFERRALS_FETCH_ELIGIBLE_USER_FAIL = var9;
    var1.LOAD_MESSAGES_SUCCESS = var8;
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.message;
        var1 = _closure1_slot30;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var1.MESSAGE_CREATE = var9;
    var1.LOAD_MESSAGES_AROUND_SUCCESS = var8;
    var3 = function() {
        var2 = null;
        _closure1_slot10 = var2;
        var0 = global;
        var3 = var0.Set;
        var4 = var3.prototype;
        var4 = Object.create(var4, {
            constructor: {
                value: var3
            }
        });
        var6 = var4;
        var3 = new var6[var3](var5);
        var3 = var3 instanceof Object ? var3 : var4;
        _closure1_slot11 = var3;
        var3 = false;
        _closure1_slot13 = var3;
        var4 = var0.Set;
        var5 = var4.prototype;
        var5 = Object.create(var5, {
            constructor: {
                value: var4
            }
        });
        var6 = var5;
        var4 = new var6[var4](var5);
        var4 = var4 instanceof Object ? var4 : var5;
        _closure1_slot14 = var4;
        var4 = var0.Set;
        var5 = var4.prototype;
        var5 = Object.create(var5, {
            constructor: {
                value: var4
            }
        });
        var6 = var5;
        var4 = new var6[var4](var5);
        var4 = var4 instanceof Object ? var4 : var5;
        _closure1_slot15 = var4;
        var4 = var0.Map;
        var5 = var4.prototype;
        var5 = Object.create(var5, {
            constructor: {
                value: var4
            }
        });
        var6 = var5;
        var4 = new var6[var4](var5);
        var4 = var4 instanceof Object ? var4 : var5;
        _closure1_slot16 = var4;
        var4 = 0;
        _closure1_slot17 = var4;
        _closure1_slot18 = var2;
        var5 = new Array(0);
        _closure1_slot19 = var5;
        _closure1_slot20 = var3;
        _closure1_slot21 = var4;
        _closure1_slot22 = var3;
        _closure1_slot23 = var3;
        _closure1_slot24 = var2;
        var0 = var0.Map;
        var2 = var0.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var0
            }
        });
        var6 = var2;
        var0 = new var6[var0](var5);
        var0 = var0 instanceof Object ? var0 : var2;
        _closure1_slot12 = var0;
        var0 = undefined;
        return var0;
    };
    var1.LOGOUT = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var16 = var3;
    var14 = var1;
    var1 = new var16[var7](var15, var14, var13);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/ReferralTrialStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1621, 660, 6663, 806, 666, 566, 2]);