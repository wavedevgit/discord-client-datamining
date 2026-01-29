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
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var4
        _fun96025: for (var _fun96025_ip = 0;;) switch (_fun96025_ip) {
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
                _fun96025_ip = 76;
                continue _fun96025;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
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
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var4
        _fun96028: for (var _fun96028_ip = 0;;) switch (_fun96028_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun96028_ip = 45;
                    continue _fun96028
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun96028_ip = 54;
                    continue _fun96028
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun96028_ip = 344;
                    continue _fun96028
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun96028_ip = 322;
                    continue _fun96028
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun96028_ip = 282;
                    continue _fun96028
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun96028_ip = 269;
                    continue _fun96028
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
                    _fun96028_ip = 162;
                    continue _fun96028
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun96028_ip = 178;
                    continue _fun96028
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun96028_ip = 248;
                    continue _fun96028
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun96028_ip = 248;
                    continue _fun96028
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun96028_ip = 233;
                    continue _fun96028
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun96028_ip = 246;
                    continue _fun96028
                }
            case 233:
                var8 = _closure1_slot22;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun96028_ip = 264;
                continue _fun96028;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun96028_ip = 282;
                continue _fun96028;
            case 269:
                var6 = _closure1_slot22;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun96028_ip = 322;
                    continue _fun96028
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
                    _fun96028_ip = 329;
                    continue _fun96028
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun96029: for (var _fun96029_ip = 0;;) switch (_fun96029_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun96029_ip = 56;
                                continue _fun96029
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
                            _fun96029_ip = 67;
                            continue _fun96029;
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
            case 344:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var4
        _fun96030: for (var _fun96030_ip = 0;;) switch (_fun96030_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun96030_ip = 23;
                    continue _fun96030
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun96030_ip = 33;
                    continue _fun96030
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
                    _fun96030_ip = 70;
                    continue _fun96030
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun96030_ip = 55;
                    continue _fun96030
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function() { // Original name: getCurrentTime, environment: var4
        _fun96031: for (var _fun96031_ip = 0;;) switch (_fun96031_ip) {
            case 0:
                var2 = _closure1_slot19;
                var0 = null;
                if (!(var0 == var2)) {
                    _fun96031_ip = 32;
                    continue _fun96031
                }
            case 13:
                var0 = global;
                var2 = var0.Date;
                var0 = var2.now;
                var0 = var0.bind(var2)();
                _fun96031_ip = 36;
                continue _fun96031;
            case 32:
                var0 = _closure1_slot19;
            case 36:
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function(arg0, arg1) { // Original name: isFriendAnniversaryForYear, environment: var4
        _fun96032: for (var _fun96032_ip = 0;;) switch (_fun96032_ip) {
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
                    _fun96032_ip = 217;
                    continue _fun96032
                }
            case 213:
                var0 = var2 < var1;
            case 217:
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function(arg0) { // Original name: isFriendAnniversary, environment: var4
        _fun96033: for (var _fun96033_ip = 0;;) switch (_fun96033_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot24;
                var0 = var4.getFullYear;
                var0 = var0.bind(var4)();
                var3 = undefined;
                var2 = var2.bind(var3)(var4, var0);
                var0 = !var2;
                if (var2) {
                    _fun96033_ip = 82;
                    continue _fun96033
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
    var0 = function() { // Original name: categorizeTopAffinityFriendAnniversaries, environment: var4
        _fun96034: for (var _fun96034_ip = 0;;) switch (_fun96034_ip) {
            case 0:
                var3 = arguments[0];
                var0 = undefined;
                if (!(var3 === var0)) {
                    _fun96034_ip = 13;
                    continue _fun96034
                }
            case 11:
                var3 = false;
            case 13:
                if (var3) {
                    _fun96034_ip = 177;
                    continue _fun96034
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
                    _fun96034_ip = 267;
                    continue _fun96034
                }
            case 72:
                var10 = var4.value;
                var9 = _closure1_slot9;
                var3 = var9.getUserAffinity;
                var9 = var3.bind(var9)(var10);
                var3 = var6 != var9;
                if (!var3) {
                    _fun96034_ip = 109;
                    continue _fun96034
                }
            case 99:
                var11 = var9.dmProbability;
                var3 = var11 > var5;
            case 109:
                if (!var3) {
                    _fun96034_ip = 126;
                    continue _fun96034
                }
            case 112:
                var11 = _closure1_slot15;
                var3 = var11.add;
                var3 = var3.bind(var11)(var10);
            case 126:
                var3 = var6 != var9;
                if (!var3) {
                    _fun96034_ip = 143;
                    continue _fun96034
                }
            case 133:
                var9 = var9.dmProbability;
                var3 = var9 > var7;
            case 143:
                if (!var3) {
                    _fun96034_ip = 160;
                    continue _fun96034
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
                    _fun96034_ip = 267;
                    continue _fun96034
                }
            case 175:
                _fun96034_ip = 72;
                continue _fun96034;
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
    var0 = function() { // Original name: updateFriendAnniversaries, environment: var4
        _fun96037: for (var _fun96037_ip = 0;;) switch (_fun96037_ip) {
            case 0:
                var1 = _closure1_slot18;
                var8 = null;
                if (!(var8 != var1)) {
                    _fun96037_ip = 33;
                    continue _fun96037
                }
            case 13:
                var3 = _closure1_slot31;
                var2 = _closure1_slot18;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                _fun96037_ip = 393;
                continue _fun96037;
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
                    _fun96037_ip = 393;
                    continue _fun96037
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
                    _fun96037_ip = 393;
                    continue _fun96037
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
                    _fun96037_ip = 361;
                    continue _fun96037
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
                    _fun96037_ip = 340;
                    continue _fun96037
                }
            case 237:
                var9 = var3;
                if (!(var8 != var2)) {
                    _fun96037_ip = 340;
                    continue _fun96037
                }
            case 244:
                var2 = var2.dmProbability;
                var9 = var3;
                if (!(var2 > var5)) {
                    _fun96037_ip = 340;
                    continue _fun96037
                }
            case 257:
                var9 = var3;
                if (!(var8 != var11)) {
                    _fun96037_ip = 340;
                    continue _fun96037
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
                    _fun96037_ip = 340;
                    continue _fun96037
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
                    _fun96037_ip = 181;
                    continue _fun96037
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
    var0 = function() { // Original name: resetFriendAnniversaries, environment: var4
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
    var0 = function() { // Original name: cleanGiftUnreadNotificationLastDismissedTimes, environment: var4
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
    var0 = function(arg0) { // Original name: maybeUpdateMessageGiftIntentLastShownMap, environment: var4
        _fun96042: for (var _fun96042_ip = 0;;) switch (_fun96042_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot13;
                var1 = var1.messageGiftIntentLastShownMap;
                var3 = var1[var2];
                var1 = null;
                if (!(var1 == var3)) {
                    _fun96042_ip = 50;
                    continue _fun96042
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
    var0 = function(arg0) { // Original name: generateFriendAnniversaries, environment: var4
        _fun96043: for (var _fun96043_ip = 0;;) switch (_fun96043_ip) {
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
                    _fun96043_ip = 192;
                    continue _fun96043
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
                    _fun96045: for (var _fun96045_ip = 0;;) switch (_fun96045_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure1_slot11;
                            var1 = var3.getSince;
                            var4 = var1.bind(var3)(var2);
                            var1 = null;
                            if (!(var1 != var4)) {
                                _fun96045_ip = 87;
                                continue _fun96045
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
        var3 = function() { // Original name: PremiumGiftingIntentStore, environment: var5
            _fun96048: for (var _fun96048_ip = 0;;) switch (_fun96048_ip) {
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
                        _fun96048_ip = 69;
                        continue _fun96048
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun96048_ip = 105;
                    continue _fun96048;
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
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun96049: for (var _fun96049_ip = 0;;) switch (_fun96049_ip) {
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
                        _fun96049_ip = 201;
                        continue _fun96049
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
                        _fun96049_ip = 165;
                        continue _fun96049
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
                                _fun96049_ip = 287;
                                continue _fun96049
                            }
                            case 321: var9 = _closure1_slot13;
                            var9 = var9.messageGiftIntentLastShownMap;
                            var9 = delete var9[var10];
                            _fun96049_ip = 287;
                            continue _fun96049;
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
                                _fun96049_ip = 371;
                                continue _fun96049
                            }
                            case 405: var9 = _closure1_slot13;
                            var9 = var9.profilePopoutGiftIntentsDismissMap;
                            var9 = delete var9[var10];
                            _fun96049_ip = 371;
                            continue _fun96049;
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
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot13;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getFriendAnniversaries';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot14;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getNextRecipientUserIDForNotification';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun96052: for (var _fun96052_ip = 0;;) switch (_fun96052_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.isNotificationCooldownActive;
                    var0 = var0.bind(var1)();
                    if (var0) {
                        _fun96052_ip = 64;
                        continue _fun96052
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
        var6 = function() { // Original name: value, environment: var5
            _fun96054: for (var _fun96054_ip = 0;;) switch (_fun96054_ip) {
                case 0:
                    var2 = _closure1_slot29;
                    var3 = undefined;
                    var2 = var2.bind(var3)();
                    var2 = _closure1_slot13;
                    var2 = var2.giftUnreadNotificationLastDismissedTimes;
                    var5 = var2.length;
                    var4 = 0;
                    if (!(var4 !== var5)) {
                        _fun96054_ip = 95;
                        continue _fun96054
                    }
                case 36:
                    var5 = var2.length;
                    var4 = 5;
                    if (!(!(var5 >= var4))) {
                        _fun96054_ip = 91;
                        continue _fun96054
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
        var6 = function() { // Original name: value, environment: var5
            var1 = function() { // Original name: hasNewHighAffinityFriendAnniversaries, environment: var0
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
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun96059: for (var _fun96059_ip = 0;;) switch (_fun96059_ip) {
                case 0:
                    var2 = _closure1_slot17;
                    var0 = arg0;
                    var2 = var2[var0];
                    var0 = null;
                    var3 = var0 == var2;
                    var0 = 0;
                    if (var3) {
                        _fun96059_ip = 94;
                        continue _fun96059
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
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun96060: for (var _fun96060_ip = 0;;) switch (_fun96060_ip) {
                case 0:
                    var3 = arg0;
                    var0 = _closure1_slot13;
                    var0 = var0.profilePopoutGiftIntentsDismissMap;
                    var0 = var0[var3];
                    var2 = null;
                    var0 = var2 == var0;
                    if (!var0) {
                        _fun96060_ip = 41;
                        continue _fun96060
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
        var6 = function(arg0) { // Original name: value, environment: var5
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
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot18;
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'getDevToolCurrentDate';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot19;
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'getHighestAffinityFriendAnniversaries';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
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
        var6 = function() { // Original name: value, environment: var5
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
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot13;
            var0 = var0.giftUnreadNotificationLastDismissedTimes;
            return var0;
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'getMessageGiftIntentLastShownMap';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot13;
            var0 = var0.messageGiftIntentLastShownMap;
            return var0;
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'getProfilePopoutGiftIntentsDismissMap';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
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
        _fun96069: for (var _fun96069_ip = 0;;) switch (_fun96069_ip) {
            case 0:
                var2 = arg0;
                var3 = null;
                var0 = var2;
                if (!(var3 != var0)) {
                    _fun96069_ip = 66;
                    continue _fun96069
                }
            case 12:
                var1 = {};
                var5 = var2.friendsTabBadgeLastDismissedTime;
                var6 = var3 != var5;
                var4 = null;
                if (!var6) {
                    _fun96069_ip = 32;
                    continue _fun96069
                }
            case 29:
                var4 = var5;
            case 32:
                var1.friendsTabBadgeLastDismissedTime = var4;
                var2 = var2.lastShownFriendsListGiftIntents;
                if (!(var3 == var2)) {
                    _fun96069_ip = 51;
                    continue _fun96069
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
        _fun96070: for (var _fun96070_ip = 0;;) switch (_fun96070_ip) {
            case 0:
                var2 = arg0;
                var3 = null;
                var0 = var2;
                if (!(var3 != var0)) {
                    _fun96070_ip = 67;
                    continue _fun96070
                }
            case 12:
                var1 = {};
                var1.friendsTabBadgeLastDismissedTime = var3;
                var4 = var2.lastShownFriendsListGiftIntents;
                if (!(var3 == var4)) {
                    _fun96070_ip = 33;
                    continue _fun96070
                }
            case 29:
                var4 = new Array(0);
            case 33:
                var1.lastShownFriendsListGiftIntents = var4;
                var2 = var2.messageGiftIntentLastShownMap;
                if (!(var3 == var2)) {
                    _fun96070_ip = 50;
                    continue _fun96070
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
        _fun96071: for (var _fun96071_ip = 0;;) switch (_fun96071_ip) {
            case 0:
                var2 = arg0;
                var3 = null;
                var0 = var2;
                if (!(var3 != var0)) {
                    _fun96071_ip = 84;
                    continue _fun96071
                }
            case 12:
                var1 = {};
                var1.friendsTabBadgeLastDismissedTime = var3;
                var4 = var2.lastShownFriendsListGiftIntents;
                if (!(var3 == var4)) {
                    _fun96071_ip = 33;
                    continue _fun96071
                }
            case 29:
                var4 = new Array(0);
            case 33:
                var1.lastShownFriendsListGiftIntents = var4;
                var4 = var2.messageGiftIntentLastShownMap;
                if (!(var3 == var4)) {
                    _fun96071_ip = 50;
                    continue _fun96071
                }
            case 48:
                var4 = {};
            case 50:
                var1.messageGiftIntentLastShownMap = var4;
                var2 = var2.giftUnreadNotificationLastDismissedTimes;
                if (!(var3 == var2)) {
                    _fun96071_ip = 69;
                    continue _fun96071
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
    var9 = function() { // Original name: handleConnectionOpen, environment: var4
        var1 = _closure1_slot28;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var3.CONNECTION_OPEN = var9;
    var9 = function() { // Original name: handleLogout, environment: var4
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
    var9 = function(arg0) { // Original name: handleMessageGiftIntentShown, environment: var4
        var0 = arg0;
        var2 = var0.recipientUserId;
        var1 = _closure1_slot30;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var3.MESSAGE_GIFT_INTENT_SHOWN = var9;
    var9 = function() { // Original name: handleFriendsListGiftIntentsShown, environment: var4
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
    var9 = function() { // Original name: handleGiftUnreadNotificationDismiss, environment: var4
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
    var9 = function(arg0) { // Original name: handleGiftIntentFlowPurchasedGift, environment: var4
        var0 = arg0;
        var2 = var0.recipientUserId;
        var1 = _closure1_slot30;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var3.GIFT_INTENT_FLOW_PURCHASED_GIFT = var9;
    var9 = function(arg0) { // Original name: handleProfilePopoutGiftIntentsDismiss, environment: var4
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
    var9 = function() { // Original name: handleDevToolResetFriendsListGiftIntentsShown, environment: var4
        var1 = _closure1_slot13;
        var0 = new Array(0);
        var1.lastShownFriendsListGiftIntents = var0;
        var0 = undefined;
        return var0;
    };
    var3.DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET = var9;
    var9 = function() { // Original name: handleDevToolResetGiftMessageCooldown, environment: var4
        var1 = _closure1_slot13;
        var0 = {};
        var1.messageGiftIntentLastShownMap = var0;
        var0 = undefined;
        return var0;
    };
    var3.DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET = var9;
    var9 = function() { // Original name: handleDevToolResetGiftUnreadNotificationCooldown, environment: var4
        var1 = _closure1_slot13;
        var0 = new Array(0);
        var1.giftUnreadNotificationLastDismissedTimes = var0;
        var0 = undefined;
        return var0;
    };
    var3.DEV_TOOLS_GIFT_UNREAD_NOTIFICATION_COOLDOWN_RESET = var9;
    var9 = function(arg0) { // Original name: handleDevToolSetFriendAnniversaryCount, environment: var4
        _fun96082: for (var _fun96082_ip = 0;;) switch (_fun96082_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.total;
                var1 = null;
                if (!(var1 != var3)) {
                    _fun96082_ip = 31;
                    continue _fun96082
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
    var9 = function(arg0) { // Original name: handleDevToolSetCurrentDate, environment: var4
        var0 = arg0;
        var1 = var0.date;
        _closure1_slot19 = var1;
        var0 = undefined;
        return var0;
    };
    var3.DEV_TOOLS_SET_CURRENT_DATE = var9;
    var9 = function() { // Original name: handleDevToolResetCurrentDate, environment: var4
        var0 = null;
        _closure1_slot19 = var0;
        var0 = undefined;
        return var0;
    };
    var3.DEV_TOOLS_RESET_CURRENT_DATE = var9;
    var4 = function() { // Original name: handleDevToolResetProfilePopoutGiftIntentsDismiss, environment: var4
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1590, 6933, 4516, 3059, 660, 12479, 3004, 22, 566, 806, 2]);