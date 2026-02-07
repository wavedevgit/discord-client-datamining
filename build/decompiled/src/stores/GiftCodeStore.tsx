// stores/GiftCodeStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun57083: for (var _fun57083_ip = 0;;) switch (_fun57083_ip) {
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
                _fun57083_ip = 74;
                continue _fun57083;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot21 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function arg0() {
        _fun57086: for (var _fun57086_ip = 0;;) switch (_fun57086_ip) {
            case 0:
                var3 = _closure1_slot8;
                var2 = var3.createFromServer;
                var1 = arg0;
                var5 = var2.bind(var3)(var1);
                var3 = var5.code;
                var2 = _closure1_slot12;
                var1 = var2.has;
                var4 = var1.bind(var2)(var3);
                var2 = _closure1_slot12;
                var1 = var2.set;
                if (var4) {
                    _fun57086_ip = 137;
                    continue _fun57086
                }
            case 52:
                var4 = var1.bind(var2)(var3, var5);
                var6 = var5.expiresAt;
                var4 = null;
                if (!(var4 != var6)) {
                    _fun57086_ip = 168;
                    continue _fun57086
                }
            case 70:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 7;
                var4 = var6[var4];
                var6 = undefined;
                var4 = var7.bind(var6)(var4);
                var4 = var4.Timeout;
                var7 = var4.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var4
                    }
                });
                var10 = var7;
                var4 = new var10[var4](var9);
                var7 = var4 instanceof Object ? var4 : var7;
                var4 = _closure1_slot11;
                var4[var3] = var7;
                var4 = _closure1_slot23;
                var4 = var4.bind(var6)(var3);
                _fun57086_ip = 168;
                continue _fun57086;
            case 137:
                var4 = _closure1_slot12;
                var0 = var4.get;
                var4 = var0.bind(var4)(var3);
                var0 = var4.merge;
                var0 = var0.bind(var4)(var5);
                var0 = var1.bind(var2)(var3, var0);
            case 168:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function arg0() {
        _fun57087: for (var _fun57087_ip = 0;;) switch (_fun57087_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = _closure1_slot12;
                var1 = var4.get;
                var1 = var1.bind(var4)(var2);
                var4 = null;
                if (!(var4 != var1)) {
                    _fun57087_ip = 201;
                    continue _fun57087
                }
            case 35:
                var5 = var1.expiresAt;
                if (!(var4 != var5)) {
                    _fun57087_ip = 201;
                    continue _fun57087
                }
            case 48:
                var5 = var1.expiresAt;
                var1 = var5.valueOf;
                var6 = var1.bind(var5)();
                var7 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 8;
                var5 = var5[var1];
                var1 = undefined;
                var5 = var7.bind(var1)(var5);
                var7 = var5.bind(var1)();
                var5 = var7.valueOf;
                var5 = var5.bind(var7)();
                var9 = var6 - var5;
                var5 = 0;
                if (!(!(var9 <= var5))) {
                    _fun57087_ip = 165;
                    continue _fun57087
                }
            case 108:
                var5 = _closure1_slot11;
                var6 = var5[var2];
                if (!(var4 != var6)) {
                    _fun57087_ip = 163;
                    continue _fun57087
                }
            case 120:
                var5 = var6.start;
                var4 = global;
                var8 = var4.Math;
                var7 = var8.min;
                var4 = 2147483647;
                var4 = var7.bind(var8)(var4, var9);
                var3 = function() { // Environment: var3
                    var2 = _closure1_slot23;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var3 = var5.bind(var6)(var4, var3);
                _fun57087_ip = 201;
                continue _fun57087;
            case 163:
                return var1;
            case 165:
                var3 = _closure1_slot12;
                var1 = var3.delete;
                var1 = var1.bind(var3)(var2);
                var1 = _closure1_slot11;
                var1 = delete var1[var2];
                var1 = _closure1_slot20;
                var0 = var1.emitChange;
                var0 = var0.bind(var1)();
            case 201:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function arg0() {
        _fun57089: for (var _fun57089_ip = 0;;) switch (_fun57089_ip) {
            case 0:
                var5 = arg0;
                var0 = arguments[1];
                var4 = undefined;
                if (!(var0 === var4)) {
                    _fun57089_ip = 14;
                    continue _fun57089
                }
            case 12:
                var0 = false;
            case 14:
                if (!var0) {
                    _fun57089_ip = 46;
                    continue _fun57089
                }
            case 17:
                var2 = _closure1_slot19;
                var1 = var2.has;
                var0 = var5.channel_id;
                var0 = var1.bind(var2)(var0);
                if (var0) {
                    _fun57089_ip = 46;
                    continue _fun57089
                }
            case 42:
                var0 = false;
                return var0;
            case 46:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var3 = 9;
                var0 = var0[var3];
                var2 = var2.bind(var4)(var0);
                var0 = var2.isGiftCodeEmbed;
                var0 = var0.bind(var2)(var5);
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var3];
                var3 = var2.bind(var4)(var1);
                var1 = var3.findGiftCodes;
                if (var0) {
                    _fun57089_ip = 118;
                    continue _fun57089
                }
            case 106:
                var0 = var5.content;
                var2 = var1.bind(var3)(var0);
                _fun57089_ip = 178;
                continue _fun57089;
            case 118:
                var6 = null;
                var7 = var6 == var5;
                var0 = undefined;
                if (var7) {
                    _fun57089_ip = 135;
                    continue _fun57089
                }
            case 129:
                var0 = var5.embeds;
            case 135:
                var7 = var6 != var0;
                var0 = undefined;
                if (!var7) {
                    _fun57089_ip = 173;
                    continue _fun57089
                }
            case 144:
                var6 = var6 == var5;
                var4 = undefined;
                if (var6) {
                    _fun57089_ip = 170;
                    continue _fun57089
                }
            case 153:
                var6 = var5.embeds;
                var5 = 0;
                var5 = var6[var5];
                var4 = var5.url;
            case 170:
                var0 = var4;
            case 173:
                var2 = var1.bind(var3)(var0);
            case 178:
                var1 = var2.length;
                var0 = 0;
                if (!(var0 !== var1)) {
                    _fun57089_ip = 206;
                    continue _fun57089
                }
            case 189:
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    _fun57090: for (var _fun57090_ip = 0;;) switch (_fun57090_ip) {
                        case 0:
                            var3 = arg0;
                            var _closure3_slot0 = var3;
                            var4 = _closure1_slot13;
                            var2 = var4.includes;
                            var2 = var2.bind(var4)(var3);
                            if (var2) {
                                _fun57090_ip = 43;
                                continue _fun57090
                            }
                        case 29:
                            var5 = _closure1_slot15;
                            var4 = var5.includes;
                            var2 = var4.bind(var5)(var3);
                        case 43:
                            if (var2) {
                                _fun57090_ip = 99;
                                continue _fun57090
                            }
                        case 46:
                            var4 = _closure1_slot25;
                            var2 = {};
                            var2.code = var3;
                            var3 = undefined;
                            var2 = var4.bind(var3)(var2);
                            var2 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var1 = 10;
                            var1 = var4[var1];
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.wait;
                            var0 = function() { // Environment: var0
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 11;
                                var2 = var2[var1];
                                var1 = undefined;
                                var5 = var3.bind(var1)(var2);
                                var4 = var5.resolveGiftCode;
                                var3 = _closure3_slot0;
                                var2 = false;
                                var1 = true;
                                var2 = var4.bind(var5)(var3, var2, var1);
                                var1 = var2.catch;
                                var0 = _closure1_slot10;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                        case 99:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
            case 206:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var11 = function arg0() {
        _fun57092: for (var _fun57092_ip = 0;;) switch (_fun57092_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.code;
                var3 = _closure1_slot13;
                var0 = var3.includes;
                var0 = var0.bind(var3)(var2);
                if (var0) {
                    _fun57092_ip = 61;
                    continue _fun57092
                }
            case 28:
                var6 = _closure1_slot13;
                var0 = new Array(1);
                var5 = 0;
                var7 = var0;
                var3 = arraySpread(var7, var6, var5);
                var0[var3] = var2;
                var2 = 1;
                var2 = var3 + var2;
                _closure1_slot13 = var0;
            case 61:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot25 = var11;
    var10 = function arg0() {
        var0 = arg0;
        var3 = var0.message;
        var2 = _closure1_slot24;
        var1 = undefined;
        var0 = true;
        var0 = var2.bind(var1)(var3, var0);
        var0 = false;
        return var0;
    };
    var9 = function arg0() {
        var0 = arg0;
        var3 = var0.channelId;
        var2 = var0.messages;
        var1 = _closure1_slot19;
        var0 = var1.add;
        var0 = var0.bind(var1)(var3);
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var3 = _closure1_slot24;
            var2 = undefined;
            var1 = arg0;
            var0 = true;
            var0 = var3.bind(var2)(var1, var0);
            var0 = false;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var6 = function arg0() {
        _fun57096: for (var _fun57096_ip = 0;;) switch (_fun57096_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.firstMessages;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun57096_ip = 40;
                    continue _fun57096
                }
            case 15:
                if (!(var0 != var2)) {
                    _fun57096_ip = 36;
                    continue _fun57096
                }
            case 19:
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot24;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    var0 = false;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
            case 36:
                var0 = undefined;
                return var0;
            case 40:
                var0 = false;
                return var0;
        }
    };
    var1 = global;
    var13 = var1.Object;
    var12 = var13.defineProperty;
    var8 = {};
    var0 = true;
    var8.value = var0;
    var0 = '__esModule';
    var0 = var12.bind(var13)(var2, var0, var8);
    var0 = 0;
    var8 = var5[var0];
    var0 = undefined;
    var8 = var7.bind(var0)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var5[var8];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var5[var8];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var5[var8];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var5[var8];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var5[var8];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var12 = var8.AbortCodes;
    var _closure1_slot9 = var12;
    var8 = var8.NOOP_NULL;
    var _closure1_slot10 = var8;
    var8 = {};
    var _closure1_slot11 = var8;
    var8 = var1.Map;
    var12 = var8.prototype;
    var12 = Object.create(var12, {
        constructor: {
            value: var8
        }
    });
    var17 = var12;
    var8 = new var17[var8](var16);
    var8 = var8 instanceof Object ? var8 : var12;
    var _closure1_slot12 = var8;
    var8 = new Array(0);
    var _closure1_slot13 = var8;
    var8 = new Array(0);
    var _closure1_slot14 = var8;
    var8 = new Array(0);
    var _closure1_slot15 = var8;
    var8 = var1.Set;
    var12 = var8.prototype;
    var12 = Object.create(var12, {
        constructor: {
            value: var8
        }
    });
    var17 = var12;
    var8 = new var17[var8](var16);
    var8 = var8 instanceof Object ? var8 : var12;
    var _closure1_slot16 = var8;
    var8 = {};
    var _closure1_slot17 = var8;
    var8 = {};
    var _closure1_slot18 = var8;
    var1 = var1.Set;
    var8 = var1.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var1
        }
    });
    var17 = var8;
    var1 = new var17[var1](var16);
    var1 = var1 instanceof Object ? var1 : var8;
    var _closure1_slot19 = var1;
    var1 = 12;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var8 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun57099: for (var _fun57099_ip = 0;;) switch (_fun57099_ip) {
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
                    var0 = _closure1_slot21;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun57099_ip = 69;
                        continue _fun57099
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun57099_ip = 105;
                    continue _fun57099;
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
        var0 = 'get';
        var4.key = var0;
        var0 = function arg0() {
            _fun57100: for (var _fun57100_ip = 0;;) switch (_fun57100_ip) {
                case 0:
                    var2 = _closure1_slot12;
                    var1 = var2.get;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var3 = null;
                    var2 = var3 == var1;
                    var0 = null;
                    if (var2) {
                        _fun57100_ip = 49;
                        continue _fun57100
                    }
                case 31:
                    var2 = var1.isExpired;
                    var2 = var2.bind(var1)();
                    var0 = null;
                    if (var2) {
                        _fun57100_ip = 49;
                        continue _fun57100
                    }
                case 46:
                    var0 = var1;
                case 49:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(11);
        var0[0] = var4;
        var4 = {};
        var6 = 'getError';
        var4.key = var6;
        var6 = function arg0() {
            _fun57101: for (var _fun57101_ip = 0;;) switch (_fun57101_ip) {
                case 0:
                    var2 = arg0;
                    var0 = null;
                    var1 = var0 != var2;
                    if (!var1) {
                        _fun57101_ip = 23;
                        continue _fun57101
                    }
                case 12:
                    var1 = _closure1_slot18;
                    var0 = var1[var2];
                case 23:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getForGifterSKUAndPlan';
        var4.key = var6;
        var6 = function arg0, arg1, arg2() {
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = arg1;
            var _closure3_slot1 = var1;
            var1 = arg2;
            var _closure3_slot2 = var1;
            var1 = global;
            var3 = var1.Array;
            var2 = var3.from;
            var4 = _closure1_slot12;
            var1 = var4.values;
            var1 = var1.bind(var4)();
            var2 = var2.bind(var3)(var1);
            var1 = var2.filter;
            var0 = function(arg0) { // Environment: var0
                _fun57103: for (var _fun57103_ip = 0;;) switch (_fun57103_ip) {
                    case 0:
                        var2 = arg0;
                        var1 = var2.userId;
                        var0 = _closure3_slot0;
                        var0 = var1 === var0;
                        if (!var0) {
                            _fun57103_ip = 36;
                            continue _fun57103
                        }
                    case 22:
                        var4 = var2.skuId;
                        var1 = _closure3_slot1;
                        var0 = var4 === var1;
                    case 36:
                        if (!var0) {
                            _fun57103_ip = 69;
                            continue _fun57103
                        }
                    case 39:
                        var4 = _closure3_slot2;
                        var1 = null;
                        var1 = var1 == var4;
                        if (var1) {
                            _fun57103_ip = 66;
                            continue _fun57103
                        }
                    case 52:
                        var4 = var2.subscriptionPlanId;
                        var3 = _closure3_slot2;
                        var1 = var4 === var3;
                    case 66:
                        var0 = var1;
                    case 69:
                        if (!var0) {
                            _fun57103_ip = 85;
                            continue _fun57103
                        }
                    case 72:
                        var1 = var2.isExpired;
                        var1 = var1.bind(var2)();
                        var0 = !var1;
                    case 85:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getIsResolving';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot13;
            var1 = var2.includes;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getIsResolved';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot15;
            var1 = var2.includes;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getIsAccepting';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot14;
            var1 = var2.includes;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getUserGiftCodesFetchingForSKUAndPlan';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var2 = _closure1_slot16;
            var1 = var2.has;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var0 = 9;
            var3 = var3[var0];
            var0 = undefined;
            var5 = var4.bind(var0)(var3);
            var4 = var5.makeComboId;
            var3 = arg0;
            var0 = arg1;
            var0 = var4.bind(var5)(var3, var0);
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getUserGiftCodesLoadedAtForSKUAndPlan';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var1 = _closure1_slot17;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 9;
            var2 = var2[var0];
            var0 = undefined;
            var4 = var3.bind(var0)(var2);
            var3 = var4.makeComboId;
            var2 = arg0;
            var0 = arg1;
            var0 = var3.bind(var4)(var2, var0);
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getResolvingCodes';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot13;
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getResolvedCodes';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot15;
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'getAcceptingCodes';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot14;
            return var0;
        };
        var4.value = var5;
        var0[10] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var1.bind(var0)(var8);
    var1 = 'GiftCodeStore';
    var8.displayName = var1;
    var1 = 10;
    var1 = var5[var1];
    var16 = var7.bind(var0)(var1);
    var1 = {};
    var12 = function() {
        var1 = _closure1_slot19;
        var0 = var1.clear;
        var0 = var0.bind(var1)();
        var0 = false;
        return var0;
    };
    var1.CONNECTION_OPEN = var12;
    var12 = function arg0() {
        _fun57113: for (var _fun57113_ip = 0;;) switch (_fun57113_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channelId;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun57113_ip = 31;
                    continue _fun57113
                }
            case 14:
                var1 = _closure1_slot19;
                var0 = var1.add;
                var0 = var0.bind(var1)(var2);
            case 31:
                var0 = false;
                return var0;
        }
    };
    var1.CHANNEL_SELECT = var12;
    var1.GIFT_CODE_RESOLVE = var11;
    var11 = function arg0() {
        _fun57114: for (var _fun57114_ip = 0;;) switch (_fun57114_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.giftCode;
                var _closure2_slot0 = var2;
                var4 = _closure1_slot13;
                var3 = var4.filter;
                var1 = function(arg0) { // Environment: var1
                    var0 = _closure2_slot0;
                    var1 = var0.code;
                    var0 = arg0;
                    var0 = var0 !== var1;
                    return var0;
                };
                var1 = var3.bind(var4)(var1);
                _closure1_slot13 = var1;
                var4 = _closure1_slot15;
                var3 = var4.includes;
                var1 = var2.code;
                var1 = var3.bind(var4)(var1);
                if (var1) {
                    _fun57114_ip = 101;
                    continue _fun57114
                }
            case 63:
                var6 = _closure1_slot15;
                var1 = new Array(1);
                var5 = 0;
                var7 = var1;
                var4 = arraySpread(var7, var6, var5);
                var3 = var2.code;
                var1[var4] = var3;
                var3 = 1;
                var3 = var4 + var3;
                _closure1_slot15 = var1;
            case 101:
                var1 = _closure1_slot22;
                var0 = undefined;
                var1 = var1.bind(var0)(var2);
                return var0;
        }
    };
    var1.GIFT_CODE_RESOLVE_SUCCESS = var11;
    var11 = function arg0() {
        _fun57116: for (var _fun57116_ip = 0;;) switch (_fun57116_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.code;
                var _closure2_slot0 = var2;
                var4 = _closure1_slot13;
                var3 = var4.filter;
                var0 = function(arg0) { // Environment: var0
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var0 !== var1;
                    return var0;
                };
                var0 = var3.bind(var4)(var0);
                _closure1_slot13 = var0;
                var3 = _closure1_slot15;
                var0 = var3.includes;
                var0 = var0.bind(var3)(var2);
                if (var0) {
                    _fun57116_ip = 90;
                    continue _fun57116
                }
            case 57:
                var6 = _closure1_slot15;
                var0 = new Array(1);
                var5 = 0;
                var7 = var0;
                var3 = arraySpread(var7, var6, var5);
                var0[var3] = var2;
                var2 = 1;
                var2 = var3 + var2;
                _closure1_slot15 = var0;
            case 90:
                var0 = undefined;
                return var0;
        }
    };
    var1.GIFT_CODE_RESOLVE_FAILURE = var11;
    var11 = function arg0() {
        _fun57118: for (var _fun57118_ip = 0;;) switch (_fun57118_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.code;
                var3 = _closure1_slot14;
                var0 = var3.includes;
                var0 = var0.bind(var3)(var2);
                if (var0) {
                    _fun57118_ip = 61;
                    continue _fun57118
                }
            case 28:
                var6 = _closure1_slot14;
                var0 = new Array(1);
                var5 = 0;
                var7 = var0;
                var3 = arraySpread(var7, var6, var5);
                var0[var3] = var2;
                var2 = 1;
                var2 = var3 + var2;
                _closure1_slot14 = var0;
            case 61:
                var0 = undefined;
                return var0;
        }
    };
    var1.GIFT_CODE_REDEEM = var11;
    var11 = function arg0() {
        _fun57119: for (var _fun57119_ip = 0;;) switch (_fun57119_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.code;
                var _closure2_slot0 = var3;
                var4 = _closure1_slot14;
                var2 = var4.filter;
                var1 = function(arg0) { // Environment: var1
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var0 !== var1;
                    return var0;
                };
                var1 = var2.bind(var4)(var1);
                _closure1_slot14 = var1;
                var2 = _closure1_slot12;
                var1 = var2.get;
                var5 = var1.bind(var2)(var3);
                var1 = null;
                if (!(var1 != var5)) {
                    _fun57119_ip = 113;
                    continue _fun57119
                }
            case 60:
                var2 = _closure1_slot12;
                var1 = var2.set;
                var4 = var5.merge;
                var0 = {};
                var6 = true;
                var0.redeemed = var6;
                var7 = var5.uses;
                var6 = 1;
                var6 = var7 + var6;
                var0.uses = var6;
                var0 = var4.bind(var5)(var0);
                var0 = var1.bind(var2)(var3, var0);
            case 113:
                var0 = undefined;
                return var0;
        }
    };
    var1.GIFT_CODE_REDEEM_SUCCESS = var11;
    var11 = function arg0() {
        _fun57121: for (var _fun57121_ip = 0;;) switch (_fun57121_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.code;
                var _closure2_slot0 = var3;
                var1 = var0.error;
                var5 = _closure1_slot14;
                var4 = var5.filter;
                var2 = function(arg0) { // Environment: var2
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var0 !== var1;
                    return var0;
                };
                var2 = var4.bind(var5)(var2);
                _closure1_slot14 = var2;
                var4 = _closure1_slot12;
                var2 = var4.get;
                var6 = var2.bind(var4)(var3);
                var2 = _closure1_slot18;
                var2[var3] = var1;
                var2 = null;
                if (!(var2 != var6)) {
                    _fun57121_ip = 176;
                    continue _fun57121
                }
            case 73:
                var2 = var1.code;
                var1 = _closure1_slot9;
                var1 = var1.UNKNOWN_GIFT_CODE;
                if (!(var1 !== var2)) {
                    _fun57121_ip = 144;
                    continue _fun57121
                }
            case 92:
                var1 = _closure1_slot9;
                var1 = var1.INVALID_GIFT_REDEMPTION_EXHAUSTED;
                if (!(var1 === var2)) {
                    _fun57121_ip = 176;
                    continue _fun57121
                }
            case 106:
                var4 = _closure1_slot12;
                var2 = var4.set;
                var7 = var6.set;
                var5 = var6.maxUses;
                var1 = 'uses';
                var1 = var7.bind(var6)(var1, var5);
                var1 = var2.bind(var4)(var3, var1);
                _fun57121_ip = 176;
                continue _fun57121;
            case 144:
                var2 = _closure1_slot12;
                var1 = var2.set;
                var5 = var6.set;
                var4 = 'revoked';
                var0 = true;
                var0 = var5.bind(var6)(var4, var0);
                var0 = var1.bind(var2)(var3, var0);
            case 176:
                var0 = undefined;
                return var0;
        }
    };
    var1.GIFT_CODE_REDEEM_FAILURE = var11;
    var11 = function arg0() {
        _fun57123: for (var _fun57123_ip = 0;;) switch (_fun57123_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.code;
                var3 = _closure1_slot12;
                var0 = var3.delete;
                var0 = var0.bind(var3)(var2);
                var0 = _closure1_slot11;
                var3 = var0[var2];
                var0 = null;
                if (!(var0 != var3)) {
                    _fun57123_ip = 57;
                    continue _fun57123
                }
            case 39:
                var0 = var3.stop;
                var0 = var0.bind(var3)();
                var0 = _closure1_slot11;
                var0 = delete var0[var2];
            case 57:
                var3 = _closure1_slot15;
                var0 = var3.includes;
                var0 = var0.bind(var3)(var2);
                if (var0) {
                    _fun57123_ip = 107;
                    continue _fun57123
                }
            case 74:
                var6 = _closure1_slot15;
                var0 = new Array(1);
                var5 = 0;
                var7 = var0;
                var3 = arraySpread(var7, var6, var5);
                var0[var3] = var2;
                var2 = 1;
                var2 = var3 + var2;
                _closure1_slot15 = var0;
            case 107:
                var0 = undefined;
                return var0;
        }
    };
    var1.GIFT_CODE_REVOKE_SUCCESS = var11;
    var11 = function arg0() {
        var0 = arg0;
        var2 = var0.giftCode;
        var1 = _closure1_slot22;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var1.GIFT_CODE_CREATE_SUCCESS = var11;
    var11 = function arg0() {
        var0 = arg0;
        var6 = var0.skuId;
        var5 = var0.subscriptionPlanId;
        var3 = _closure1_slot16;
        var2 = var3.add;
        var4 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 9;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var4.bind(var0)(var1);
        var1 = var4.makeComboId;
        var1 = var1.bind(var4)(var6, var5);
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.GIFT_CODES_FETCH = var11;
    var11 = function arg0() {
        var0 = arg0;
        var3 = var0.giftCodes;
        var5 = var0.skuId;
        var4 = var0.subscriptionPlanId;
        var2 = var3.forEach;
        var0 = _closure1_slot22;
        var0 = var2.bind(var3)(var0);
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 9;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.makeComboId;
        var3 = var2.bind(var3)(var5, var4);
        var4 = _closure1_slot17;
        var2 = global;
        var5 = var2.Date;
        var2 = var5.now;
        var2 = var2.bind(var5)();
        var4[var3] = var2;
        var2 = _closure1_slot16;
        var1 = var2.delete;
        var1 = var1.bind(var2)(var3);
        return var0;
    };
    var1.GIFT_CODES_FETCH_SUCCESS = var11;
    var11 = function arg0() {
        var0 = arg0;
        var6 = var0.skuId;
        var5 = var0.subscriptionPlanId;
        var3 = _closure1_slot16;
        var2 = var3.delete;
        var4 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 9;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var4.bind(var0)(var1);
        var1 = var4.makeComboId;
        var1 = var1.bind(var4)(var6, var5);
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.GIFT_CODES_FETCH_FAILURE = var11;
    var1.MESSAGE_CREATE = var10;
    var1.MESSAGE_UPDATE = var10;
    var1.LOCAL_MESSAGES_LOADED = var9;
    var1.LOAD_MESSAGES_SUCCESS = var9;
    var1.LOAD_MESSAGES_AROUND_SUCCESS = var9;
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.messages;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot24;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            var0 = false;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.LOAD_RECENT_MENTIONS_SUCCESS = var9;
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.pins;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var2 = var0.message;
            var1 = _closure1_slot24;
            var0 = undefined;
            var0 = var1.bind(var0)(var2);
            var0 = false;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.LOAD_PINNED_MESSAGES_SUCCESS = var9;
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.data;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var2 = var0.messages;
            var1 = var2.forEach;
            var0 = function(arg0) { // Environment: var0
                var2 = arg0;
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot24;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    var0 = false;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.SEARCH_MESSAGES_SUCCESS = var9;
    var9 = function arg0() {
        _fun57136: for (var _fun57136_ip = 0;;) switch (_fun57136_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.uses;
                var3 = var0.code;
                var2 = _closure1_slot12;
                var1 = var2.get;
                var6 = var1.bind(var2)(var3);
                var1 = null;
                if (!(var1 != var6)) {
                    _fun57136_ip = 92;
                    continue _fun57136
                }
            case 37:
                var2 = _closure1_slot12;
                var1 = var2.set;
                var5 = var6.set;
                var0 = global;
                var7 = var0.Math;
                var4 = var7.max;
                var0 = var6.uses;
                var4 = var4.bind(var7)(var0, var8);
                var0 = 'uses';
                var0 = var5.bind(var6)(var0, var4);
                var0 = var1.bind(var2)(var3, var0);
            case 92:
                var0 = undefined;
                return var0;
        }
    };
    var1.GIFT_CODE_UPDATE = var9;
    var1.LOAD_THREADS_SUCCESS = var6;
    var1.LOAD_ARCHIVED_THREADS_SUCCESS = var6;
    var6 = function arg0() {
        var0 = arg0;
        var2 = var0.threads;
        var0 = global;
        var1 = var0.Object;
        var0 = var1.values;
        var2 = var0.bind(var1)(var2);
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            _fun57138: for (var _fun57138_ip = 0;;) switch (_fun57138_ip) {
                case 0:
                    var0 = arg0;
                    var3 = var0.first_message;
                    var0 = null;
                    var0 = var0 != var3;
                    if (!var0) {
                        _fun57138_ip = 34;
                        continue _fun57138
                    }
                case 18:
                    var2 = _closure1_slot24;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
                    var0 = false;
                case 34:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.LOAD_FORUM_POSTS = var6;
    var6 = var8.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var8
        }
    });
    var17 = var6;
    var15 = var1;
    var1 = new var17[var8](var16, var15, var14);
    var1 = var1 instanceof Object ? var1 : var6;
    var _closure1_slot20 = var1;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/GiftCodeStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 6933, 660, 3631, 3047, 3349, 806, 6936, 566, 2]);