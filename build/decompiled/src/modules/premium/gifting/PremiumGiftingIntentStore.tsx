// modules/premium/gifting/PremiumGiftingIntentStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function() {
        _fun95638: for (var _fun95638_ip = 0;;) switch (_fun95638_ip) {
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
                _fun95638_ip = 76;
                continue _fun95638;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot20 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function arg0, arg1() {
        _fun95641: for (var _fun95641_ip = 0;;) switch (_fun95641_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun95641_ip = 46;
                    continue _fun95641
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun95641_ip = 55;
                    continue _fun95641
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun95641_ip = 345;
                    continue _fun95641
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun95641_ip = 323;
                    continue _fun95641
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun95641_ip = 283;
                    continue _fun95641
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun95641_ip = 270;
                    continue _fun95641
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
                    _fun95641_ip = 163;
                    continue _fun95641
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun95641_ip = 179;
                    continue _fun95641
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun95641_ip = 249;
                    continue _fun95641
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun95641_ip = 249;
                    continue _fun95641
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun95641_ip = 234;
                    continue _fun95641
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun95641_ip = 247;
                    continue _fun95641
                }
            case 234:
                var8 = _closure1_slot22;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun95641_ip = 265;
                continue _fun95641;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun95641_ip = 283;
                continue _fun95641;
            case 270:
                var6 = _closure1_slot22;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun95641_ip = 323;
                    continue _fun95641
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
                    _fun95641_ip = 330;
                    continue _fun95641
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun95642: for (var _fun95642_ip = 0;;) switch (_fun95642_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun95642_ip = 56;
                                continue _fun95642
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
                            _fun95642_ip = 67;
                            continue _fun95642;
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
    var _closure1_slot21 = var0;
    var0 = function arg0, arg1() {
        _fun95643: for (var _fun95643_ip = 0;;) switch (_fun95643_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun95643_ip = 23;
                    continue _fun95643
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun95643_ip = 33;
                    continue _fun95643
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
                    _fun95643_ip = 70;
                    continue _fun95643
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun95643_ip = 55;
                    continue _fun95643
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function() {
        _fun95644: for (var _fun95644_ip = 0;;) switch (_fun95644_ip) {
            case 0:
                var2 = _closure1_slot19;
                var0 = null;
                if (!(var0 == var2)) {
                    _fun95644_ip = 32;
                    continue _fun95644
                }
            case 13:
                var0 = global;
                var2 = var0.Date;
                var0 = var2.now;
                var0 = var0.bind(var2)();
                _fun95644_ip = 36;
                continue _fun95644;
            case 32:
                var0 = _closure1_slot19;
            case 36:
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function arg0, arg1() {
        _fun95645: for (var _fun95645_ip = 0;;) switch (_fun95645_ip) {
            case 0:
                var3 = arg0;
                var1 = global;
                var0 = var1.Date;
                var2 = var0.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var0
                    }
                });
                var8 = var2;
                var0 = new var8[var0](var7);
                var2 = var0 instanceof Object ? var0 : var2;
                var4 = var1.Date;
                var0 = var3.getTime;
                var7 = var0.bind(var3)();
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var8 = var3;
                var0 = new var8[var4](var7, var6);
                var6 = var0 instanceof Object ? var0 : var3;
                var3 = var6.setFullYear;
                var0 = arg1;
                var0 = var3.bind(var6)(var0);
                var4 = var1.Date;
                var0 = var6.getTime;
                var7 = var0.bind(var6)();
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var8 = var3;
                var0 = new var8[var4](var7, var6);
                var0 = var0 instanceof Object ? var0 : var3;
                var4 = var0.setDate;
                var3 = var6.getDate;
                var3 = var3.bind(var6)();
                var5 = 7;
                var3 = var3 - var5;
                var3 = var4.bind(var0)(var3);
                var4 = var1.Date;
                var1 = var6.getTime;
                var7 = var1.bind(var6)();
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var8 = var3;
                var1 = new var8[var4](var7, var6);
                var1 = var1 instanceof Object ? var1 : var3;
                var4 = var1.setDate;
                var3 = var6.getDate;
                var3 = var3.bind(var6)();
                var3 = var3 + var5;
                var3 = var4.bind(var1)(var3);
                var0 = var2 > var0;
                if (!var0) {
                    _fun95645_ip = 217;
                    continue _fun95645
                }
            case 213:
                var0 = var2 < var1;
            case 217:
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function arg0() {
        _fun95646: for (var _fun95646_ip = 0;;) switch (_fun95646_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot24;
                var0 = var4.getFullYear;
                var0 = var0.bind(var4)();
                var3 = undefined;
                var2 = var2.bind(var3)(var4, var0);
                var0 = !var2;
                if (var2) {
                    _fun95646_ip = 82;
                    continue _fun95646
                }
            case 34:
                var2 = _closure1_slot24;
                var1 = global;
                var1 = var1.Date;
                var5 = var1.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var1
                    }
                });
                var8 = var5;
                var1 = new var8[var1](var7);
                var5 = var1 instanceof Object ? var1 : var5;
                var1 = var5.getFullYear;
                var1 = var1.bind(var5)();
                var0 = var2.bind(var3)(var4, var1);
            case 82:
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = function() {
        _fun95647: for (var _fun95647_ip = 0;;) switch (_fun95647_ip) {
            case 0:
                var3 = arguments[0];
                var0 = undefined;
                if (!(var3 === var0)) {
                    _fun95647_ip = 13;
                    continue _fun95647
                }
            case 11:
                var3 = false;
            case 13:
                if (var3) {
                    _fun95647_ip = 177;
                    continue _fun95647
                }
            case 22:
                var4 = _closure1_slot21;
                var3 = _closure1_slot14;
                var8 = var4.bind(var0)(var3);
                var4 = var8.bind(var0)();
                var3 = var4.done;
                var7 = 0.5;
                var6 = null;
                var5 = 0.7;
                if (var3) {
                    _fun95647_ip = 267;
                    continue _fun95647
                }
            case 72:
                var10 = var4.value;
                var9 = _closure1_slot9;
                var3 = var9.getUserAffinity;
                var9 = var3.bind(var9)(var10);
                var3 = var6 != var9;
                if (!var3) {
                    _fun95647_ip = 109;
                    continue _fun95647
                }
            case 99:
                var11 = var9.dmProbability;
                var3 = var11 > var5;
            case 109:
                if (!var3) {
                    _fun95647_ip = 126;
                    continue _fun95647
                }
            case 112:
                var11 = _closure1_slot15;
                var3 = var11.add;
                var3 = var3.bind(var11)(var10);
            case 126:
                var3 = var6 != var9;
                if (!var3) {
                    _fun95647_ip = 143;
                    continue _fun95647
                }
            case 133:
                var9 = var9.dmProbability;
                var3 = var9 > var7;
            case 143:
                if (!var3) {
                    _fun95647_ip = 160;
                    continue _fun95647
                }
            case 146:
                var9 = _closure1_slot16;
                var3 = var9.add;
                var3 = var3.bind(var9)(var10);
            case 160:
                var9 = var8.bind(var0)();
                var3 = var9.done;
                var4 = var9;
                if (var3) {
                    _fun95647_ip = 267;
                    continue _fun95647
                }
            case 175:
                _fun95647_ip = 72;
                continue _fun95647;
            case 177:
                var3 = global;
                var5 = var3.Math;
                var4 = var5.ceil;
                var3 = _closure1_slot14;
                var6 = var3.length;
                var3 = 2;
                var3 = var6 / var3;
                var6 = var4.bind(var5)(var3);
                var5 = _closure1_slot14;
                var4 = var5.slice;
                var3 = 0;
                var5 = var4.bind(var5)(var3, var6);
                var4 = var5.forEach;
                var3 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot15;
                    var1 = var2.add;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var3 = var4.bind(var5)(var3);
                var3 = _closure1_slot14;
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot16;
                    var1 = var2.add;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
            case 267:
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var0 = function() {
        _fun95650: for (var _fun95650_ip = 0;;) switch (_fun95650_ip) {
            case 0:
                var1 = _closure1_slot18;
                var8 = null;
                if (!(var8 != var1)) {
                    _fun95650_ip = 33;
                    continue _fun95650
                }
            case 13:
                var3 = _closure1_slot31;
                var2 = _closure1_slot18;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                _fun95650_ip = 393;
                continue _fun95650;
            case 33:
                var2 = _closure1_slot28;
                var1 = undefined;
                var2 = var2.bind(var1)();
                var4 = _closure1_slot10;
                var3 = var4.hasConsented;
                var2 = _closure1_slot12;
                var2 = var2.PERSONALIZATION;
                var2 = var3.bind(var4)(var2);
                if (!var2) {
                    _fun95650_ip = 393;
                    continue _fun95650
                }
            case 74:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 10;
                var2 = var4[var2];
                var2 = var3.bind(var1)(var2);
                var4 = var2.FriendAnniversariesExperiment;
                var3 = var4.getConfig;
                var2 = {};
                var5 = 'PremiumGiftingIntentStore updateFriendAnniversaries';
                var2.location = var5;
                var2 = var3.bind(var4)(var2);
                var2 = var2.enabled;
                if (!var2) {
                    _fun95650_ip = 393;
                    continue _fun95650
                }
            case 134:
                var3 = _closure1_slot21;
                var4 = _closure1_slot11;
                var2 = var4.getFriendIDs;
                var2 = var2.bind(var4)();
                var7 = var3.bind(var1)(var2);
                var3 = var7.bind(var1)();
                var2 = var3.done;
                var6 = global;
                var5 = 0;
                var4 = var3;
                var3 = undefined;
                if (var2) {
                    _fun95650_ip = 361;
                    continue _fun95650
                }
            case 181:
                var12 = var4.value;
                var9 = _closure1_slot11;
                var2 = var9.getSince;
                var11 = var2.bind(var9)(var12);
                var9 = _closure1_slot9;
                var2 = var9.getUserAffinity;
                var2 = var2.bind(var9)(var12);
                var10 = _closure1_slot11;
                var9 = var10.isFriend;
                var10 = var9.bind(var10)(var12);
                var9 = var3;
                if (!var10) {
                    _fun95650_ip = 340;
                    continue _fun95650
                }
            case 237:
                var9 = var3;
                if (!(var8 != var2)) {
                    _fun95650_ip = 340;
                    continue _fun95650
                }
            case 244:
                var2 = var2.dmProbability;
                var9 = var3;
                if (!(var2 > var5)) {
                    _fun95650_ip = 340;
                    continue _fun95650
                }
            case 257:
                var9 = var3;
                if (!(var8 != var11)) {
                    _fun95650_ip = 340;
                    continue _fun95650
                }
            case 264:
                var2 = var6.Date;
                var10 = var2.prototype;
                var10 = Object.create(var10, {
                    constructor: {
                        value: var2
                    }
                });
                var15 = var10;
                var14 = var11;
                var2 = new var15[var2](var14, var13);
                var2 = var2 instanceof Object ? var2 : var10;
                var10 = _closure1_slot25;
                var10 = var10.bind(var1)(var2);
                var9 = var2;
                if (!var10) {
                    _fun95650_ip = 340;
                    continue _fun95650
                }
            case 308:
                var11 = _closure1_slot14;
                var10 = var11.push;
                var10 = var10.bind(var11)(var12);
                var11 = _closure1_slot17;
                var10 = {};
                var10.friendsSince = var2;
                var11[var12] = var10;
                var9 = var2;
            case 340:
                var10 = var7.bind(var1)();
                var2 = var10.done;
                var3 = var9;
                var4 = var10;
                if (!var2) {
                    _fun95650_ip = 181;
                    continue _fun95650
                }
            case 361:
                var4 = _closure1_slot14;
                var3 = var4.sort;
                var2 = function(arg0, arg1) { // Environment: var2
                    var3 = _closure1_slot9;
                    var2 = var3.compareByDmProbability;
                    var1 = arg0;
                    var0 = arg1;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var2 = var3.bind(var4)(var2);
                var0 = _closure1_slot26;
                var0 = var0.bind(var1)();
            case 393:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function() {
        var2 = _closure1_slot14;
        var0 = 0;
        var2.length = var0;
        var2 = _closure1_slot15;
        var0 = var2.clear;
        var0 = var0.bind(var2)();
        var2 = _closure1_slot16;
        var0 = var2.clear;
        var0 = var0.bind(var2)();
        var0 = {};
        _closure1_slot17 = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot28 = var0;
    var0 = function() {
        var3 = _closure1_slot23;
        var0 = undefined;
        var3 = var3.bind(var0)();
        var _closure2_slot0 = var3;
        var2 = _closure1_slot13;
        var4 = var2.giftUnreadNotificationLastDismissedTimes;
        var3 = var4.filter;
        var1 = function(arg0) { // Environment: var1
            var1 = _closure2_slot0;
            var0 = arg0;
            var1 = var1 - var0;
            var0 = 604800000;
            var0 = var1 <= var0;
            return var0;
        };
        var1 = var3.bind(var4)(var1);
        var2.giftUnreadNotificationLastDismissedTimes = var1;
        return var0;
    };
    var _closure1_slot29 = var0;
    var0 = function arg0() {
        _fun95655: for (var _fun95655_ip = 0;;) switch (_fun95655_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot13;
                var1 = var1.messageGiftIntentLastShownMap;
                var3 = var1[var2];
                var1 = null;
                if (!(var1 == var3)) {
                    _fun95655_ip = 50;
                    continue _fun95655
                }
            case 26:
                var1 = _closure1_slot13;
                var1 = var1.messageGiftIntentLastShownMap;
                var3 = _closure1_slot23;
                var0 = undefined;
                var0 = var3.bind(var0)();
                var1[var2] = var0;
            case 50:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var0 = function arg0() {
        _fun95656: for (var _fun95656_ip = 0;;) switch (_fun95656_ip) {
            case 0:
                var6 = arg0;
                var3 = _closure1_slot28;
                var0 = undefined;
                var3 = var3.bind(var0)();
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 10;
                var3 = var5[var3];
                var3 = var4.bind(var0)(var3);
                var5 = var3.FriendAnniversariesExperiment;
                var4 = var5.getConfig;
                var3 = {};
                var7 = 'PremiumGiftingIntentStore generateFriendAnniversaries';
                var3.location = var7;
                var3 = var4.bind(var5)(var3);
                var3 = var3.enabled;
                if (!var3) {
                    _fun95656_ip = 192;
                    continue _fun95656
                }
            case 75:
                _closure1_slot18 = var6;
                var4 = _closure1_slot11;
                var3 = var4.getFriendIDs;
                var5 = var3.bind(var4)();
                var4 = var5.filter;
                var3 = function(arg0) { // Environment: var2
                    var2 = _closure1_slot11;
                    var1 = var2.isIgnored;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var0 = !var0;
                    return var0;
                };
                var5 = var4.bind(var5)(var3);
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 12;
                var3 = var7[var3];
                var4 = var4.bind(var0)(var3);
                var3 = var4.sampleSize;
                var5 = var3.bind(var4)(var5, var6);
                var4 = var5.forEach;
                var3 = function(arg0) { // Environment: var2
                    _fun95658: for (var _fun95658_ip = 0;;) switch (_fun95658_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure1_slot11;
                            var1 = var3.getSince;
                            var4 = var1.bind(var3)(var2);
                            var1 = null;
                            if (!(var1 != var4)) {
                                _fun95658_ip = 87;
                                continue _fun95658
                            }
                        case 27:
                            var1 = global;
                            var1 = var1.Date;
                            var3 = var1.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var1
                                }
                            });
                            var6 = var3;
                            var5 = var4;
                            var1 = new var6[var1](var5, var4);
                            var3 = var1 instanceof Object ? var1 : var3;
                            var4 = _closure1_slot14;
                            var1 = var4.push;
                            var1 = var1.bind(var4)(var2);
                            var1 = _closure1_slot17;
                            var0 = {};
                            var0.friendsSince = var3;
                            var1[var2] = var0;
                        case 87:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3 = var4.bind(var5)(var3);
                var4 = _closure1_slot14;
                var3 = var4.sort;
                var2 = function(arg0, arg1) { // Environment: var2
                    var3 = _closure1_slot9;
                    var2 = var3.compareByDmProbability;
                    var1 = arg0;
                    var0 = arg1;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var2 = var3.bind(var4)(var2);
                var2 = _closure1_slot26;
                var1 = true;
                var1 = var2.bind(var0)(var1);
            case 192:
                return var0;
        }
    };
    var _closure1_slot31 = var0;
    var8 = global;
    var9 = var8.Object;
    var3 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var9)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var3 = var6[var1];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.Consents;
    var _closure1_slot12 = var3;
    var9 = {};
    var3 = {};
    var9.messageGiftIntentLastShownMap = var3;
    var3 = new Array(0);
    var9.lastShownFriendsListGiftIntents = var3;
    var3 = null;
    var9.friendsTabBadgeLastDismissedTime = var3;
    var10 = new Array(0);
    var9.giftUnreadNotificationLastDismissedTimes = var10;
    var10 = {};
    var9.profilePopoutGiftIntentsDismissMap = var10;
    var _closure1_slot13 = var9;
    var9 = new Array(0);
    var _closure1_slot14 = var9;
    var9 = var8.Set;
    var10 = var9.prototype;
    var10 = Object.create(var10, {
        constructor: {
            value: var9
        }
    });
    var14 = var10;
    var9 = new var14[var9](var13);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot15 = var9;
    var8 = var8.Set;
    var9 = var8.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var8
        }
    });
    var14 = var9;
    var8 = new var14[var8](var13);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot16 = var8;
    var8 = {};
    var _closure1_slot17 = var8;
    var _closure1_slot18 = var3;
    var _closure1_slot19 = var3;
    var3 = 13;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var8 = var3.PersistedStore;
    var3 = function(arg0) { // Environment: var4
        var3 = function() {
            _fun95661: for (var _fun95661_ip = 0;;) switch (_fun95661_ip) {
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
                    var0 = _closure1_slot20;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun95661_ip = 69;
                        continue _fun95661
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun95661_ip = 105;
                    continue _fun95661;
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
        var0 = function arg0() {
            _fun95662: for (var _fun95662_ip = 0;;) switch (_fun95662_ip) {
                case 0:
                    var2 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = {};
                    var0.messageGiftIntentLastShownMap = var1;
                    var1 = new Array(0);
                    var0.lastShownFriendsListGiftIntents = var1;
                    var6 = null;
                    var0.friendsTabBadgeLastDismissedTime = var6;
                    var1 = new Array(0);
                    var0.giftUnreadNotificationLastDismissedTimes = var1;
                    var1 = {};
                    var0.profilePopoutGiftIntentsDismissMap = var1;
                    _closure1_slot13 = var0;
                    if (!(var6 != var2)) {
                        _fun95662_ip = 201;
                        continue _fun95662
                    }
                case 61:
                    var1 = _closure1_slot13;
                    var0 = var2.friendsTabBadgeLastDismissedTime;
                    var1.friendsTabBadgeLastDismissedTime = var0;
                    var4 = _closure1_slot13;
                    var0 = global;
                    var7 = var0.Array;
                    var5 = var7.from;
                    var1 = var2.lastShownFriendsListGiftIntents;
                    var1 = var5.bind(var7)(var1);
                    var4.lastShownFriendsListGiftIntents = var1;
                    var4 = _closure1_slot13;
                    var1 = {};
                    var11 = var2.messageGiftIntentLastShownMap;
                    var12 = var1;
                    var5 = copyDataProperties(var12, var11);
                    var4.messageGiftIntentLastShownMap = var1;
                    var1 = _closure1_slot13;
                    var5 = var0.Array;
                    var4 = var5.from;
                    var0 = var2.giftUnreadNotificationLastDismissedTimes;
                    if (!(var6 == var0)) {
                        _fun95662_ip = 165;
                        continue _fun95662
                    }
                case 161:
                    var0 = new Array(0);
                case 165:
                    var0 = var4.bind(var5)(var0);
                    var1.giftUnreadNotificationLastDismissedTimes = var0;
                    var1 = _closure1_slot13;
                    var0 = {};
                    var11 = var2.profilePopoutGiftIntentsDismissMap;
                    var12 = var0;
                    var2 = copyDataProperties(var12, var11);
                    var1.profilePopoutGiftIntentsDismissMap = var0;
                case 201:
                    var2 = var3.syncWith;
                    var0 = _closure1_slot11;
                    var1 = new Array(4);
                    var1[0] = var0;
                    var0 = _closure1_slot9;
                    var1[1] = var0;
                    var0 = _closure1_slot10;
                    var1[2] = var0;
                    var0 = _closure1_slot8;
                    var1[3] = var0;
                    var0 = _closure1_slot27;
                    var0 = var2.bind(var3)(var1, var0);
                    var1 = _closure1_slot23;
                    var0 = undefined;
                    var6 = var1.bind(var0)();
                    var1 = _closure1_slot13;
                    var4 = var1.messageGiftIntentLastShownMap;
                    var7 = 1209600000;
                    for (var1 in var4)
                        case 287: {
                            case 296: var10 = var1;
                            var9 = _closure1_slot13;
                            var9 = var9.messageGiftIntentLastShownMap;
                            var9 = var9[var10];
                            var9 = var6 - var9;
                            if (!(var9 > var7)) {
                                _fun95662_ip = 287;
                                continue _fun95662
                            }
                            case 321: var9 = _closure1_slot13;
                            var9 = var9.messageGiftIntentLastShownMap;
                            var9 = delete var9[var10];
                            _fun95662_ip = 287;
                            continue _fun95662;
                        }
                case 337:
                    var1 = _closure1_slot29;
                    var1 = var1.bind(var0)();
                    var1 = _closure1_slot23;
                    var6 = var1.bind(var0)();
                    var1 = _closure1_slot13;
                    var4 = var1.profilePopoutGiftIntentsDismissMap;
                    for (var1 in var4)
                        case 371: {
                            case 380: var10 = var1;
                            var9 = _closure1_slot13;
                            var9 = var9.profilePopoutGiftIntentsDismissMap;
                            var9 = var9[var10];
                            var9 = var6 - var9;
                            if (!(var9 > var7)) {
                                _fun95662_ip = 371;
                                continue _fun95662
                            }
                            case 405: var9 = _closure1_slot13;
                            var9 = var9.profilePopoutGiftIntentsDismissMap;
                            var9 = delete var9[var10];
                            _fun95662_ip = 371;
                            continue _fun95662;
                        }
                case 421:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(16);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot13;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getFriendAnniversaries';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot14;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getNextRecipientUserIDForNotification';
        var4.key = var6;
        var6 = function() {
            _fun95665: for (var _fun95665_ip = 0;;) switch (_fun95665_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.isNotificationCooldownActive;
                    var0 = var0.bind(var1)();
                    if (var0) {
                        _fun95665_ip = 64;
                        continue _fun95665
                    }
                case 18:
                    var0 = global;
                    var2 = var0.Array;
                    var1 = var2.from;
                    var0 = _closure1_slot15;
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.find;
                    var0 = function(arg0) { // Environment: var0
                        var0 = _closure1_slot13;
                        var1 = var0.messageGiftIntentLastShownMap;
                        var0 = arg0;
                        var1 = var1[var0];
                        var0 = null;
                        var0 = var0 == var1;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                case 64:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'isNotificationCooldownActive';
        var4.key = var6;
        var6 = function() {
            _fun95667: for (var _fun95667_ip = 0;;) switch (_fun95667_ip) {
                case 0:
                    var2 = _closure1_slot29;
                    var3 = undefined;
                    var2 = var2.bind(var3)();
                    var2 = _closure1_slot13;
                    var2 = var2.giftUnreadNotificationLastDismissedTimes;
                    var5 = var2.length;
                    var4 = 0;
                    if (!(var4 !== var5)) {
                        _fun95667_ip = 95;
                        continue _fun95667
                    }
                case 36:
                    var5 = var2.length;
                    var4 = 5;
                    if (!(!(var5 >= var4))) {
                        _fun95667_ip = 91;
                        continue _fun95667
                    }
                case 48:
                    var1 = _closure1_slot23;
                    var1 = var1.bind(var3)();
                    var _closure3_slot0 = var1;
                    var1 = var2.filter;
                    var0 = function(arg0) { // Environment: var0
                        var1 = _closure3_slot0;
                        var0 = arg0;
                        var1 = var1 - var0;
                        var0 = 86400000;
                        var0 = var1 <= var0;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.length;
                    var0 = 1;
                    var0 = var1 >= var0;
                    return var0;
                case 91:
                    var0 = true;
                    return var0;
                case 95:
                    var0 = false;
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'canShowFriendsTabBadge';
        var4.key = var6;
        var6 = function() {
            var1 = function() {
                var0 = global;
                var2 = var0.Array;
                var1 = var2.from;
                var0 = _closure1_slot16;
                var2 = var1.bind(var2)(var0);
                var1 = var2.some;
                var0 = function(arg0) { // Environment: var0
                    var0 = _closure1_slot13;
                    var2 = var0.lastShownFriendsListGiftIntents;
                    var1 = var2.includes;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var0 = !var0;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var0 = undefined;
            var0 = var1.bind(var0)();
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getFriendAnniversaryYears';
        var4.key = var6;
        var6 = function arg0() {
            _fun95672: for (var _fun95672_ip = 0;;) switch (_fun95672_ip) {
                case 0:
                    var2 = _closure1_slot17;
                    var0 = arg0;
                    var2 = var2[var0];
                    var0 = null;
                    var3 = var0 == var2;
                    var0 = 0;
                    if (var3) {
                        _fun95672_ip = 94;
                        continue _fun95672
                    }
                case 25:
                    var7 = var2.friendsSince;
                    var2 = global;
                    var3 = var2.Math;
                    var2 = var3.round;
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 11;
                    var1 = var4[var1];
                    var4 = undefined;
                    var1 = var5.bind(var4)(var1);
                    var6 = var1.bind(var4)();
                    var5 = var6.diff;
                    var4 = 'years';
                    var1 = true;
                    var1 = var5.bind(var6)(var7, var4, var1);
                    var0 = var2.bind(var3)(var1);
                case 94:
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'canShowProfilePopoutGiftIntents';
        var4.key = var6;
        var6 = function arg0() {
            _fun95673: for (var _fun95673_ip = 0;;) switch (_fun95673_ip) {
                case 0:
                    var3 = arg0;
                    var0 = _closure1_slot13;
                    var0 = var0.profilePopoutGiftIntentsDismissMap;
                    var0 = var0[var3];
                    var2 = null;
                    var0 = var2 == var0;
                    if (!var0) {
                        _fun95673_ip = 41;
                        continue _fun95673
                    }
                case 29:
                    var1 = _closure1_slot17;
                    var1 = var1[var3];
                    var0 = var2 != var1;
                case 41:
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'isGiftIntentMessageInCooldown';
        var4.key = var6;
        var6 = function arg0() {
            var0 = _closure1_slot13;
            var1 = var0.messageGiftIntentLastShownMap;
            var0 = arg0;
            var1 = var1[var0];
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getDevToolTotalFriendAnniversaries';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot18;
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'getDevToolCurrentDate';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot19;
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'getHighestAffinityFriendAnniversaries';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Array;
            var1 = var2.from;
            var0 = _closure1_slot15;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'getHighAffinityFriendAnniversaries';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Array;
            var1 = var2.from;
            var0 = _closure1_slot16;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'getGiftUnreadNotificationLastDismissedTimes';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot13;
            var0 = var0.giftUnreadNotificationLastDismissedTimes;
            return var0;
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'getMessageGiftIntentLastShownMap';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot13;
            var0 = var0.messageGiftIntentLastShownMap;
            return var0;
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'getProfilePopoutGiftIntentsDismissMap';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot13;
            var0 = var0.profilePopoutGiftIntentsDismissMap;
            return var0;
        };
        var4.value = var5;
        var0[15] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var3.bind(var0)(var8);
    var3 = 'PremiumGiftingIntentStore';
    var8.displayName = var3;
    var8.persistKey = var3;
    var3 = new Array(3);
    var9 = function(arg0) { // Environment: var4
        _fun95682: for (var _fun95682_ip = 0;;) switch (_fun95682_ip) {
            case 0:
                var2 = arg0;
                var3 = null;
                var0 = var2;
                if (!(var3 != var0)) {
                    _fun95682_ip = 66;
                    continue _fun95682
                }
            case 12:
                var1 = {};
                var5 = var2.friendsTabBadgeLastDismissedTime;
                var6 = var3 != var5;
                var4 = null;
                if (!var6) {
                    _fun95682_ip = 32;
                    continue _fun95682
                }
            case 29:
                var4 = var5;
            case 32:
                var1.friendsTabBadgeLastDismissedTime = var4;
                var2 = var2.lastShownFriendsListGiftIntents;
                if (!(var3 == var2)) {
                    _fun95682_ip = 51;
                    continue _fun95682
                }
            case 47:
                var2 = new Array(0);
            case 51:
                var1.lastShownFriendsListGiftIntents = var2;
                var2 = {};
                var1.messageGiftIntentLastShownMap = var2;
                var0 = var1;
            case 66:
                return var0;
        }
    };
    var3[0] = var9;
    var9 = function(arg0) { // Environment: var4
        _fun95683: for (var _fun95683_ip = 0;;) switch (_fun95683_ip) {
            case 0:
                var2 = arg0;
                var3 = null;
                var0 = var2;
                if (!(var3 != var0)) {
                    _fun95683_ip = 67;
                    continue _fun95683
                }
            case 12:
                var1 = {};
                var1.friendsTabBadgeLastDismissedTime = var3;
                var4 = var2.lastShownFriendsListGiftIntents;
                if (!(var3 == var4)) {
                    _fun95683_ip = 33;
                    continue _fun95683
                }
            case 29:
                var4 = new Array(0);
            case 33:
                var1.lastShownFriendsListGiftIntents = var4;
                var2 = var2.messageGiftIntentLastShownMap;
                if (!(var3 == var2)) {
                    _fun95683_ip = 50;
                    continue _fun95683
                }
            case 48:
                var2 = {};
            case 50:
                var1.messageGiftIntentLastShownMap = var2;
                var2 = new Array(0);
                var1.giftUnreadNotificationLastDismissedTimes = var2;
                var0 = var1;
            case 67:
                return var0;
        }
    };
    var3[1] = var9;
    var9 = function(arg0) { // Environment: var4
        _fun95684: for (var _fun95684_ip = 0;;) switch (_fun95684_ip) {
            case 0:
                var2 = arg0;
                var3 = null;
                var0 = var2;
                if (!(var3 != var0)) {
                    _fun95684_ip = 84;
                    continue _fun95684
                }
            case 12:
                var1 = {};
                var1.friendsTabBadgeLastDismissedTime = var3;
                var4 = var2.lastShownFriendsListGiftIntents;
                if (!(var3 == var4)) {
                    _fun95684_ip = 33;
                    continue _fun95684
                }
            case 29:
                var4 = new Array(0);
            case 33:
                var1.lastShownFriendsListGiftIntents = var4;
                var4 = var2.messageGiftIntentLastShownMap;
                if (!(var3 == var4)) {
                    _fun95684_ip = 50;
                    continue _fun95684
                }
            case 48:
                var4 = {};
            case 50:
                var1.messageGiftIntentLastShownMap = var4;
                var2 = var2.giftUnreadNotificationLastDismissedTimes;
                if (!(var3 == var2)) {
                    _fun95684_ip = 69;
                    continue _fun95684
                }
            case 65:
                var2 = new Array(0);
            case 69:
                var1.giftUnreadNotificationLastDismissedTimes = var2;
                var2 = {};
                var1.profilePopoutGiftIntentsDismissMap = var2;
                var0 = var1;
            case 84:
                return var0;
        }
    };
    var3[2] = var9;
    var8.migrations = var3;
    var3 = 14;
    var3 = var6[var3];
    var13 = var7.bind(var0)(var3);
    var3 = {};
    var9 = function() {
        var1 = _closure1_slot28;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var3.CONNECTION_OPEN = var9;
    var9 = function() {
        var1 = {};
        var0 = {};
        var1.messageGiftIntentLastShownMap = var0;
        var0 = new Array(0);
        var1.lastShownFriendsListGiftIntents = var0;
        var0 = null;
        var1.friendsTabBadgeLastDismissedTime = var0;
        var0 = new Array(0);
        var1.giftUnreadNotificationLastDismissedTimes = var0;
        var0 = {};
        var1.profilePopoutGiftIntentsDismissMap = var0;
        _closure1_slot13 = var1;
        var1 = _closure1_slot28;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var3.LOGOUT = var9;
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.recipientUserId;
        var1 = _closure1_slot30;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var3.MESSAGE_GIFT_INTENT_SHOWN = var9;
    var9 = function() {
        var1 = _closure1_slot13;
        var2 = global;
        var3 = var2.Array;
        var2 = var3.from;
        var0 = _closure1_slot14;
        var0 = var2.bind(var3)(var0);
        var1.lastShownFriendsListGiftIntents = var0;
        var0 = undefined;
        return var0;
    };
    var3.FRIENDS_LIST_GIFT_INTENTS_SHOWN = var9;
    var9 = function() {
        var1 = _closure1_slot13;
        var3 = var1.giftUnreadNotificationLastDismissedTimes;
        var2 = var3.push;
        var1 = _closure1_slot23;
        var0 = undefined;
        var1 = var1.bind(var0)();
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.GIFT_UNREAD_NOTIFICATION_DISMISS = var9;
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.recipientUserId;
        var1 = _closure1_slot30;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var3.GIFT_INTENT_FLOW_PURCHASED_GIFT = var9;
    var9 = function arg0() {
        var0 = arg0;
        var3 = var0.recipientUserId;
        var1 = _closure1_slot13;
        var2 = var1.profilePopoutGiftIntentsDismissMap;
        var1 = _closure1_slot23;
        var0 = undefined;
        var1 = var1.bind(var0)();
        var2[var3] = var1;
        return var0;
    };
    var3.PROFILE_POPOUT_GIFT_INTENTS_DISMISS = var9;
    var9 = function() {
        var1 = _closure1_slot13;
        var0 = new Array(0);
        var1.lastShownFriendsListGiftIntents = var0;
        var0 = undefined;
        return var0;
    };
    var3.DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET = var9;
    var9 = function() {
        var1 = _closure1_slot13;
        var0 = {};
        var1.messageGiftIntentLastShownMap = var0;
        var0 = undefined;
        return var0;
    };
    var3.DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET = var9;
    var9 = function() {
        var1 = _closure1_slot13;
        var0 = new Array(0);
        var1.giftUnreadNotificationLastDismissedTimes = var0;
        var0 = undefined;
        return var0;
    };
    var3.DEV_TOOLS_GIFT_UNREAD_NOTIFICATION_COOLDOWN_RESET = var9;
    var9 = function arg0() {
        _fun95695: for (var _fun95695_ip = 0;;) switch (_fun95695_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.total;
                var1 = null;
                if (!(var1 != var3)) {
                    _fun95695_ip = 31;
                    continue _fun95695
                }
            case 15:
                var2 = _closure1_slot31;
                var0 = undefined;
                var2 = var2.bind(var0)(var3);
                return var0;
            case 31:
                _closure1_slot18 = var1;
                var1 = _closure1_slot27;
                var0 = undefined;
                var1 = var1.bind(var0)();
                return var0;
        }
    };
    var3.DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT = var9;
    var9 = function arg0() {
        var0 = arg0;
        var1 = var0.date;
        _closure1_slot19 = var1;
        var0 = undefined;
        return var0;
    };
    var3.DEV_TOOLS_SET_CURRENT_DATE = var9;
    var9 = function() {
        var0 = null;
        _closure1_slot19 = var0;
        var0 = undefined;
        return var0;
    };
    var3.DEV_TOOLS_RESET_CURRENT_DATE = var9;
    var4 = function() {
        var1 = _closure1_slot13;
        var0 = {};
        var1.profilePopoutGiftIntentsDismissMap = var0;
        var0 = undefined;
        return var0;
    };
    var3.DEV_TOOLS_PROFILE_POPOUT_GIFT_INTENTS_DISMISS_RESET = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var14 = var4;
    var12 = var3;
    var3 = new var14[var8](var13, var12, var11);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/gifting/PremiumGiftingIntentStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.FRIENDS_LIST_ANNIVERSARY_DISPLAY_LIMIT = var1;
    var1 = 604800000;
    var2.FRIENDS_TAB_BADGE_COOLDOWN_MS = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1590, 6937, 4525, 3061, 660, 12440, 3006, 22, 566, 806, 2]);