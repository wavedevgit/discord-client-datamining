// modules/emojis/EmojiStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var0 = function() {
        _fun43762: for (var _fun43762_ip = 0;;) switch (_fun43762_ip) {
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
                _fun43762_ip = 74;
                continue _fun43762;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot43 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot43 = var0;
    var0 = function arg0, arg1() {
        _fun43765: for (var _fun43765_ip = 0;;) switch (_fun43765_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun43765_ip = 46;
                    continue _fun43765
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun43765_ip = 55;
                    continue _fun43765
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun43765_ip = 343;
                    continue _fun43765
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun43765_ip = 323;
                    continue _fun43765
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun43765_ip = 283;
                    continue _fun43765
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun43765_ip = 270;
                    continue _fun43765
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
                    _fun43765_ip = 163;
                    continue _fun43765
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun43765_ip = 179;
                    continue _fun43765
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun43765_ip = 249;
                    continue _fun43765
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun43765_ip = 249;
                    continue _fun43765
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun43765_ip = 234;
                    continue _fun43765
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun43765_ip = 247;
                    continue _fun43765
                }
            case 234:
                var8 = _closure1_slot45;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun43765_ip = 265;
                continue _fun43765;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun43765_ip = 283;
                continue _fun43765;
            case 270:
                var6 = _closure1_slot45;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun43765_ip = 323;
                    continue _fun43765
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
                    _fun43765_ip = 330;
                    continue _fun43765
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun43766: for (var _fun43766_ip = 0;;) switch (_fun43766_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun43766_ip = 56;
                                continue _fun43766
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
                            _fun43766_ip = 67;
                            continue _fun43766;
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
    var _closure1_slot44 = var0;
    var0 = function arg0, arg1() {
        _fun43767: for (var _fun43767_ip = 0;;) switch (_fun43767_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun43767_ip = 23;
                    continue _fun43767
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun43767_ip = 33;
                    continue _fun43767
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
                    _fun43767_ip = 70;
                    continue _fun43767
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun43767_ip = 55;
                    continue _fun43767
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot45 = var0;
    var0 = function arg0() {
        _fun43768: for (var _fun43768_ip = 0;;) switch (_fun43768_ip) {
            case 0:
                var6 = arg0;
                var0 = _closure1_slot47;
                var3 = undefined;
                var0 = var0.bind(var3)();
                var4 = var0[var6];
                var2 = null;
                var5 = var2 != var4;
                var0 = undefined;
                if (!var5) {
                    _fun43768_ip = 73;
                    continue _fun43768
                }
            case 31:
                var1 = _closure1_slot36;
                var5 = var1[var4];
                var4 = var2 == var5;
                var1 = undefined;
                if (var4) {
                    _fun43768_ip = 61;
                    continue _fun43768
                }
            case 48:
                var4 = var5.getUsableEmoji;
                var1 = var4.bind(var5)(var6);
            case 61:
                var2 = var2 != var1;
                var0 = undefined;
                if (!var2) {
                    _fun43768_ip = 73;
                    continue _fun43768
                }
            case 70:
                var0 = var1;
            case 73:
                return var0;
        }
    };
    var _closure1_slot46 = var0;
    var0 = function() {
        _fun43769: for (var _fun43769_ip = 0;;) switch (_fun43769_ip) {
            case 0:
                var1 = _closure1_slot48;
                var10 = undefined;
                var1 = var1.bind(var10)();
                var2 = _closure1_slot37;
                var1 = null;
                if (!(var1 == var2)) {
                    _fun43769_ip = 122;
                    continue _fun43769
                }
            case 23:
                var1 = {};
                _closure1_slot37 = var1;
                var8 = _closure1_slot36;
                for (var5 in var8)
                    case 41: {
                        case 50: var4 = var5;
                        var2 = _closure1_slot44;
                        var1 = _closure1_slot36;
                        var3 = var1[var4];
                        var1 = var3.emojiIds;
                        var1 = var1.bind(var3)();
                        var3 = var2.bind(var10)(var1);
                        var2 = var3.bind(var10)();
                        var1 = var2.done;
                        if (var1) {
                            _fun43769_ip = 41;
                            continue _fun43769
                        }
                        case 92: var11 = var2.value;
                        var1 = _closure1_slot37;
                        var1[var11] = var4;
                        var11 = var3.bind(var10)();
                        var1 = var11.done;
                        var2 = var11;
                        if (var1) {
                            _fun43769_ip = 41;
                            continue _fun43769
                        }
                        case 120: _fun43769_ip = 92;
                        continue _fun43769;
                    }
            case 122:
                var0 = _closure1_slot37;
                return var0;
        }
    };
    var _closure1_slot47 = var0;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot49;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot48 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun43773: for (var _fun43773_ip = 0;;) switch (_fun43773_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun43773_ip = 221;
                            continue _fun43773
                        }
                    case 12:
                        var2 = undefined;
                        var _closure4_slot0 = var2;
                        var5 = _closure1_slot34;
                        var4 = _closure1_slot33;
                        var4 = var4.Unloaded;
                        if (!(var5 === var4)) {
                            _fun43773_ip = 215;
                            continue _fun43773
                        }
                    case 42:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 28;
                        var4 = var6[var4];
                        var5 = var5.bind(var2)(var4);
                        var4 = var5.database;
                        var5 = var4.bind(var5)();
                        _closure4_slot0 = var5;
                        var4 = null;
                        if (!(var4 != var5)) {
                            _fun43773_ip = 215;
                            continue _fun43773
                        }
                    case 85:
                        var5 = _closure1_slot33;
                        var5 = var5.Loading;
                        _closure1_slot34 = var5;
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var5 = 29;
                        var5 = var7[var5];
                        var7 = var6.bind(var2)(var5);
                        var6 = var7.tryLoadOrResetCacheGatewayAsync;
                        var5 = 'EmojiStore.loadSavedEmojis';
                        var1 = function() { // Environment: var1
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 30;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.timeAsync;
                            var2 = '💾';
                            var1 = 'loadSavedEmojis';
                            var0 = function() { // Environment: var0
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 31;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.getAsync;
                                var0 = _closure4_slot0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var0 = var3.bind(var4)(var2, var1, var0);
                            return var0;
                        };
                        var1 = var6.bind(var7)(var5, var1);
                        SaveGenerator(address = 146);
                    case 144:
                        return var1;
                    case 146:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                        if (var5) {
                            _fun43773_ip = 218;
                            continue _fun43773
                        }
                    case 152:
                        var5 = _closure1_slot33;
                        var5 = var5.Loaded;
                        _closure1_slot34 = var5;
                        if (!(var4 != var1)) {
                            _fun43773_ip = 215;
                            continue _fun43773
                        }
                    case 170:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 32;
                        var3 = var5[var3];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'CACHED_EMOJIS_LOADED';
                        var3.type = var6;
                        var3.emojis = var1;
                        var3 = var4.bind(var5)(var3);
                    case 215:
                        return var2;
                    case 218:
                        return var1;
                    case 221:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot49 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot49 = var0;
    var0 = function() {
        var0 = {};
        _closure1_slot36 = var0;
        var0 = {};
        _closure1_slot37 = var0;
        var2 = _closure1_slot40;
        var0 = var2.reset;
        var0 = var0.bind(var2)();
        var2 = _closure1_slot38;
        var0 = var2.clear;
        var0 = var0.bind(var2)();
        var0 = _closure1_slot33;
        var0 = var0.Unloaded;
        _closure1_slot34 = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot50 = var0;
    var0 = function arg0() {
        _fun43777: for (var _fun43777_ip = 0;;) switch (_fun43777_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot36;
                var3 = var2[var1];
                var2 = null;
                if (!(var2 != var3)) {
                    _fun43777_ip = 28;
                    continue _fun43777
                }
            case 20:
                var0 = _closure1_slot36;
                var0 = delete var0[var1];
            case 28:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot51 = var0;
    var0 = function() {
        _fun43778: for (var _fun43778_ip = 0;;) switch (_fun43778_ip) {
            case 0:
                var1 = null;
                _closure1_slot37 = var1;
                var2 = _closure1_slot40;
                var1 = var2.reset;
                var1 = var1.bind(var2)();
                var2 = _closure1_slot34;
                var1 = _closure1_slot33;
                var1 = var1.Loaded;
                var1 = var2 !== var1;
                if (!var1) {
                    _fun43778_ip = 62;
                    continue _fun43778
                }
            case 44:
                var3 = _closure1_slot34;
                var2 = _closure1_slot33;
                var2 = var2.MaybeLoaded;
                var1 = var3 !== var2;
            case 62:
                if (var1) {
                    _fun43778_ip = 93;
                    continue _fun43778
                }
            case 65:
                var2 = _closure1_slot41;
                var1 = var2.compute;
                var1 = var1.bind(var2)();
                var1 = _closure1_slot42;
                var0 = var1.compute;
                var0 = var0.bind(var1)();
            case 93:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot52 = var0;
    var0 = function arg0() {
        _fun43779: for (var _fun43779_ip = 0;;) switch (_fun43779_ip) {
            case 0:
                var3 = arg0;
                var1 = _closure1_slot51;
                var0 = undefined;
                var1 = var1.bind(var0)(var3);
                var2 = _closure1_slot40;
                var1 = var2.clear;
                var1 = var1.bind(var2)(var3);
                var2 = _closure1_slot20;
                var1 = var2.getGuildEmojis;
                var7 = var1.bind(var2)(var3);
                var2 = null;
                if (!(var2 != var7)) {
                    _fun43779_ip = 144;
                    continue _fun43779
                }
            case 53:
                var5 = _closure1_slot19;
                var1 = var5.getCurrentUser;
                var1 = var1.bind(var5)();
                if (!(var2 != var1)) {
                    _fun43779_ip = 144;
                    continue _fun43779
                }
            case 70:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 39;
                var2 = var6[var2];
                var5 = var5.bind(var0)(var2);
                var2 = var5.canUseRoleSubscriptionIAP;
                var8 = var2.bind(var5)(var3);
                var2 = _closure1_slot36;
                var5 = _closure1_slot29;
                var10 = var1.id;
                var4 = var5.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var5
                    }
                });
                var12 = var4;
                var11 = var3;
                var9 = var7;
                var1 = new var12[var5](var11, var10, var9, var8, var7);
                var1 = var1 instanceof Object ? var1 : var4;
                var2[var3] = var1;
            case 144:
                return var0;
        }
    };
    var _closure1_slot53 = var0;
    var0 = function() {
        _fun43780: for (var _fun43780_ip = 0;;) switch (_fun43780_ip) {
            case 0:
                var0 = _closure1_slot13;
                var0 = var0.settings;
                var2 = var0.textAndImages;
                var1 = null;
                var3 = var1 == var2;
                var0 = undefined;
                var5 = undefined;
                if (var3) {
                    _fun43780_ip = 54;
                    continue _fun43780
                }
            case 34:
                var2 = var2.diversitySurrogate;
                var3 = var1 == var2;
                var5 = undefined;
                if (var3) {
                    _fun43780_ip = 54;
                    continue _fun43780
                }
            case 49:
                var5 = var2.value;
            case 54:
                if (!(var1 != var5)) {
                    _fun43780_ip = 89;
                    continue _fun43780
                }
            case 58:
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 23;
                var2 = var6[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.setDefaultDiversitySurrogate;
                var2 = var2.bind(var3)(var5);
            case 89:
                var3 = _closure1_slot40;
                var2 = var3.reset;
                var2 = var2.bind(var3)();
                var2 = _closure1_slot13;
                var2 = var2.frecencyWithoutFetchingLatest;
                var3 = var2.emojiFrecency;
                var5 = var1 == var3;
                var6 = undefined;
                if (var5) {
                    _fun43780_ip = 134;
                    continue _fun43780
                }
            case 128:
                var6 = var3.emojis;
            case 134:
                if (!(var1 == var6)) {
                    _fun43780_ip = 140;
                    continue _fun43780
                }
            case 138:
                var6 = {};
            case 140:
                var3 = var2.emojiReactionFrecency;
                var5 = var1 == var3;
                var2 = undefined;
                if (var5) {
                    _fun43780_ip = 161;
                    continue _fun43780
                }
            case 155:
                var2 = var3.emojis;
            case 161:
                if (!(var1 == var2)) {
                    _fun43780_ip = 167;
                    continue _fun43780
                }
            case 165:
                var2 = {};
            case 167:
                var11 = _closure1_slot41;
                var10 = var11.overwriteHistory;
                var5 = _closure1_slot1;
                var1 = _closure1_slot2;
                var3 = 26;
                var8 = var1[var3];
                var12 = var5.bind(var0)(var8);
                var9 = var12.mapValues;
                var8 = function(arg0) { // Environment: var7
                    var1 = arg0;
                    var0 = {};
                    var5 = var0;
                    var4 = var1;
                    var2 = copyDataProperties(var5, var4);
                    var3 = var1.recentUses;
                    var2 = var3.map;
                    var1 = global;
                    var1 = var1.Number;
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var0 = 0;
                        var0 = var1 > var0;
                        return var0;
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = 'recentUses';
                    var0[var1] = var2;
                    return var0;
                };
                var9 = var9.bind(var12)(var6, var8);
                var8 = _closure1_slot28;
                var8 = var8.pendingUsages;
                var8 = var10.bind(var11)(var9, var8);
                var10 = _closure1_slot42;
                var9 = var10.overwriteHistory;
                var8 = var1[var3];
                var11 = var5.bind(var0)(var8);
                var8 = var11.mapValues;
                var7 = function(arg0) { // Environment: var7
                    var1 = arg0;
                    var0 = {};
                    var5 = var0;
                    var4 = var1;
                    var2 = copyDataProperties(var5, var4);
                    var3 = var1.recentUses;
                    var2 = var3.map;
                    var1 = global;
                    var1 = var1.Number;
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var0 = 0;
                        var0 = var1 > var0;
                        return var0;
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = 'recentUses';
                    var0[var1] = var2;
                    return var0;
                };
                var8 = var8.bind(var11)(var2, var7);
                var7 = _closure1_slot28;
                var7 = var7.emojiReactionPendingUsages;
                var7 = var9.bind(var10)(var8, var7);
                var1 = var1[var3];
                var5 = var5.bind(var0)(var1);
                var1 = var5.isEmpty;
                var1 = var1.bind(var5)(var6);
                var5 = var2;
                if (!var1) {
                    _fun43780_ip = 434;
                    continue _fun43780
                }
            case 311:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var3];
                var6 = var2.bind(var0)(var1);
                var2 = var6.isEmpty;
                var1 = _closure1_slot28;
                var1 = var1.pendingUsages;
                var1 = var2.bind(var6)(var1);
                if (!var1) {
                    _fun43780_ip = 434;
                    continue _fun43780
                }
            case 352:
                var6 = _closure1_slot13;
                var2 = var6.hasLoaded;
                var1 = _closure1_slot26;
                var1 = var1.FRECENCY_AND_FAVORITES_SETTINGS;
                var1 = var2.bind(var6)(var1);
                if (!var1) {
                    _fun43780_ip = 434;
                    continue _fun43780
                }
            case 380:
                var6 = ['thumbsup', 'eyes', 'laughing', 'watermelon', 'fork_and_knife', 'yum', 'weary', 'tired_face', 'poop', '100'];
                var1 = var6.length;
                var2 = 0;
                var1 = var2 < var1;
                if (!var1) {
                    _fun43780_ip = 434;
                    continue _fun43780
                }
            case 404:
                var8 = var6[var2];
                var7 = _closure1_slot41;
                var1 = var7.track;
                var1 = var1.bind(var7)(var8);
                var2 = var2 + 1;
                var1 = var6.length;
                if (var2 < var1) {
                    _fun43780_ip = 404;
                    continue _fun43780
                }
            case 434:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var3];
                var2 = var2.bind(var0)(var1);
                var1 = var2.isEmpty;
                var1 = var1.bind(var2)(var5);
                if (!var1) {
                    _fun43780_ip = 591;
                    continue _fun43780
                }
            case 468:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var3];
                var3 = var2.bind(var0)(var1);
                var2 = var3.isEmpty;
                var1 = _closure1_slot28;
                var1 = var1.emojiReactionPendingUsages;
                var1 = var2.bind(var3)(var1);
                if (!var1) {
                    _fun43780_ip = 591;
                    continue _fun43780
                }
            case 509:
                var3 = _closure1_slot13;
                var2 = var3.hasLoaded;
                var1 = _closure1_slot26;
                var1 = var1.FRECENCY_AND_FAVORITES_SETTINGS;
                var1 = var2.bind(var3)(var1);
                if (!var1) {
                    _fun43780_ip = 591;
                    continue _fun43780
                }
            case 537:
                var3 = ['100', '100', 'thumbsup', 'thumbsup', 'thumbsdown', 'thumbsdown', 'heart', 'point_up', 'eyes', 'weary', 'laughing', 'white_check_mark', 'x'];
                var1 = var3.length;
                var2 = 0;
                var1 = var2 < var1;
                if (!var1) {
                    _fun43780_ip = 591;
                    continue _fun43780
                }
            case 561:
                var6 = var3[var2];
                var5 = _closure1_slot42;
                var1 = var5.track;
                var1 = var1.bind(var5)(var6);
                var2 = var2 + 1;
                var1 = var3.length;
                if (var2 < var1) {
                    _fun43780_ip = 561;
                    continue _fun43780
                }
            case 591:
                return var0;
        }
    };
    var _closure1_slot54 = var0;
    var0 = function arg0() {
        _fun43785: for (var _fun43785_ip = 0;;) switch (_fun43785_ip) {
            case 0:
                var0 = arg0;
                var7 = null;
                if (!(var7 != var0)) {
                    _fun43785_ip = 226;
                    continue _fun43785
                }
            case 12:
                var2 = _closure1_slot44;
                var6 = undefined;
                var5 = var2.bind(var6)(var0);
                var3 = var5.bind(var6)();
                var2 = var3.done;
                var4 = global;
                if (var2) {
                    _fun43785_ip = 148;
                    continue _fun43785
                }
            case 40:
                var2 = var3.value;
                var10 = var2.id;
                if (!(var7 == var10)) {
                    _fun43785_ip = 60;
                    continue _fun43785
                }
            case 54:
                var10 = var2.uniqueName;
            case 60:
                if (!(var7 == var10)) {
                    _fun43785_ip = 69;
                    continue _fun43785
                }
            case 64:
                var10 = var2.name;
            case 69:
                if (!(var7 != var10)) {
                    _fun43785_ip = 133;
                    continue _fun43785
                }
            case 73:
                var8 = _closure1_slot41;
                var2 = var8.track;
                var2 = var2.bind(var8)(var10);
                var2 = _closure1_slot28;
                var9 = var2.pendingUsages;
                var8 = var9.push;
                var2 = {};
                var2.key = var10;
                var11 = var4.Date;
                var10 = var11.now;
                var10 = var10.bind(var11)();
                var2.timestamp = var10;
                var2 = var8.bind(var9)(var2);
            case 133:
                var8 = var5.bind(var6)();
                var2 = var8.done;
                var3 = var8;
                if (!var2) {
                    _fun43785_ip = 40;
                    continue _fun43785
                }
            case 148:
                var2 = var0.length;
                var0 = 0;
                var0 = var2 > var0;
                var2 = !var0;
                if (!var0) {
                    _fun43785_ip = 207;
                    continue _fun43785
                }
            case 165:
                var4 = _closure1_slot34;
                var3 = _closure1_slot33;
                var3 = var3.Loaded;
                var3 = var4 !== var3;
                if (!var3) {
                    _fun43785_ip = 204;
                    continue _fun43785
                }
            case 186:
                var5 = _closure1_slot34;
                var4 = _closure1_slot33;
                var4 = var4.MaybeLoaded;
                var3 = var5 !== var4;
            case 204:
                var2 = var3;
            case 207:
                if (var2) {
                    _fun43785_ip = 224;
                    continue _fun43785
                }
            case 210:
                var2 = _closure1_slot41;
                var1 = var2.compute;
                var1 = var1.bind(var2)();
            case 224:
                return var0;
            case 226:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot55 = var0;
    var10 = function arg0() {
        _fun43786: for (var _fun43786_ip = 0;;) switch (_fun43786_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guildId;
                var0 = var0.role;
                var4 = var0.id;
                var2 = _closure1_slot16;
                var0 = var2.getRole;
                var5 = var0.bind(var2)(var3, var4);
                var0 = null;
                if (!(var0 != var5)) {
                    _fun43786_ip = 99;
                    continue _fun43786
                }
            case 44:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 40;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var2);
                var2 = var4.isSubscriptionRole;
                var2 = var2.bind(var4)(var5);
                if (!var2) {
                    _fun43786_ip = 99;
                    continue _fun43786
                }
            case 80:
                var2 = _closure1_slot53;
                var2 = var2.bind(var0)(var3);
                var1 = _closure1_slot52;
                var1 = var1.bind(var0)();
                return var0;
            case 99:
                var0 = false;
                return var0;
        }
    };
    var1 = global;
    var9 = var1.Object;
    var4 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var9)(var2, var0, var3);
    var11 = 0;
    var3 = var7[var11];
    var0 = undefined;
    var3 = var8.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var14 = 1;
    var3 = var7[var14];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var13 = 2;
    var3 = var7[var13];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var12 = 3;
    var3 = var7[var12];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var7[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var7[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var7[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var7[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var7[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var7[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var7[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var7[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 12;
    var3 = var7[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot15 = var3;
    var3 = 13;
    var3 = var7[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot16 = var3;
    var3 = 14;
    var3 = var7[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot17 = var3;
    var3 = 15;
    var3 = var7[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot18 = var3;
    var3 = 16;
    var3 = var7[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot19 = var3;
    var3 = 17;
    var3 = var7[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot20 = var3;
    var3 = 18;
    var3 = var7[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot21 = var3;
    var3 = 19;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var4 = var3.EmojiDisabledReasons;
    var _closure1_slot22 = var4;
    var3 = var3.EmojiIntention;
    var _closure1_slot23 = var3;
    var3 = 20;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.NULL_STRING_GUILD_ID;
    var _closure1_slot24 = var3;
    var3 = 21;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.EmojiCategories;
    var _closure1_slot25 = var3;
    var4 = 22;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var4 = var4.UserSettingsTypes;
    var _closure1_slot26 = var4;
    var9 = var3.TOP_GUILD_EMOJI;
    var4 = var9.toString;
    var4 = var4.bind(var9)();
    var9 = new Array(4);
    var9[0] = var4;
    var15 = var3.FAVORITES;
    var4 = var15.toString;
    var4 = var4.bind(var15)();
    var9[1] = var4;
    var15 = var3.RECENT;
    var4 = var15.toString;
    var4 = var4.bind(var15)();
    var9[2] = var4;
    var4 = var3.CUSTOM;
    var3 = var4.toString;
    var3 = var3.bind(var4)();
    var9[3] = var3;
    var4 = var9.concat;
    var3 = 23;
    var3 = var7[var3];
    var15 = var8.bind(var0)(var3);
    var3 = var15.getCategories;
    var3 = var3.bind(var15)();
    var9 = var4.bind(var9)(var3);
    var _closure1_slot27 = var9;
    var3 = {};
    var4 = new Array(0);
    var3.pendingUsages = var4;
    var4 = new Array(0);
    var3.emojiReactionPendingUsages = var4;
    var4 = var1.Set;
    var15 = var4.prototype;
    var15 = Object.create(var15, {
        constructor: {
            value: var4
        }
    });
    var21 = var15;
    var4 = new var21[var4](var20);
    var4 = var4 instanceof Object ? var4 : var15;
    var3.expandedSectionsByGuildIds = var4;
    var _closure1_slot28 = var3;
    var3 = function() { // Environment: var5
        var3 = _closure1_slot9;
        var2 = function arg0, arg1, arg2() {
            _fun43788: for (var _fun43788_ip = 0;;) switch (_fun43788_ip) {
                case 0:
                    var2 = arguments[3];
                    var1 = this;
                    var0 = undefined;
                    if (!(var2 === var0)) {
                        _fun43788_ip = 14;
                        continue _fun43788
                    }
                case 12:
                    var2 = false;
                case 14:
                    var4 = _closure1_slot8;
                    var3 = _closure2_slot0;
                    var3 = var4.bind(var0)(var1, var3);
                    var3 = null;
                    var1._emojis = var3;
                    var1._emoticons = var3;
                    var1._usableEmojis = var3;
                    var3 = false;
                    var1._canSeeServerSubIAP = var3;
                    var3 = arg0;
                    var1.id = var3;
                    var3 = arg1;
                    var1._userId = var3;
                    var3 = arg2;
                    var1._emojiMap = var3;
                    var1._canSeeServerSubIAP = var2;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'getEmoji';
        var0.key = var1;
        var1 = function arg0() {
            var0 = this;
            var1 = var0._emojiMap;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var0.value = var1;
        var1 = new Array(7);
        var1[0] = var0;
        var0 = {};
        var5 = 'getUsableEmoji';
        var0.key = var5;
        var5 = function arg0() {
            _fun43790: for (var _fun43790_ip = 0;;) switch (_fun43790_ip) {
                case 0:
                    var4 = this;
                    var1 = var4.getEmoji;
                    var0 = arg0;
                    var1 = var1.bind(var4)(var0);
                    var0 = null;
                    var2 = var0 != var1;
                    var0 = undefined;
                    if (!var2) {
                        _fun43790_ip = 47;
                        continue _fun43790
                    }
                case 28:
                    var2 = var4.isUsable;
                    var2 = var2.bind(var4)(var1);
                    var0 = undefined;
                    if (!var2) {
                        _fun43790_ip = 47;
                        continue _fun43790
                    }
                case 44:
                    var0 = var1;
                case 47:
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'isUsable';
        var0.key = var5;
        var5 = function arg0() {
            _fun43791: for (var _fun43791_ip = 0;;) switch (_fun43791_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var _closure3_slot0 = var4;
                    var0 = var4.roles;
                    var2 = var0.length;
                    var0 = 0;
                    if (!(var0 !== var2)) {
                        _fun43791_ip = 184;
                        continue _fun43791
                    }
                case 32:
                    var7 = _closure1_slot14;
                    var6 = var7.getMember;
                    var2 = var3.id;
                    var0 = var3._userId;
                    var2 = var6.bind(var7)(var2, var0);
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun43791_ip = 182;
                        continue _fun43791
                    }
                case 71:
                    var6 = var2.roles;
                    var2 = var6.some;
                    var1 = function(arg0) { // Environment: var1
                        var0 = _closure3_slot0;
                        var2 = var0.roles;
                        var1 = var2.includes;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1 = var2.bind(var6)(var1);
                    var2 = !var1;
                    var1 = !var2;
                    if (!var2) {
                        _fun43791_ip = 179;
                        continue _fun43791
                    }
                case 102:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 24;
                    var6 = var6[var2];
                    var2 = undefined;
                    var6 = var7.bind(var2)(var6);
                    var2 = var6.isPurchasableRoleSubscriptionEmoji;
                    var2 = var2.bind(var6)(var4);
                    var6 = !var2;
                    var2 = !var6;
                    if (var6) {
                        _fun43791_ip = 176;
                        continue _fun43791
                    }
                case 144:
                    var3 = var3._canSeeServerSubIAP;
                    if (var3) {
                        _fun43791_ip = 173;
                        continue _fun43791
                    }
                case 153:
                    var6 = _closure1_slot11;
                    var5 = var6.getUserIsAdmin;
                    var4 = var4.guildId;
                    var3 = var5.bind(var6)(var4);
                case 173:
                    var2 = var3;
                case 176:
                    var1 = var2;
                case 179:
                    var0 = var1;
                case 182:
                    return var0;
                case 184:
                    var0 = true;
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'emojiIds';
        var0.key = var5;
        var5 = function() {
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 25;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.keys;
            var0 = this;
            var0 = var0._emojiMap;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'emojis';
        var0.key = var5;
        var5 = function() {
            _fun43794: for (var _fun43794_ip = 0;;) switch (_fun43794_ip) {
                case 0:
                    var0 = this;
                    var2 = var0._emojis;
                    var1 = null;
                    if (!(var1 == var2)) {
                        _fun43794_ip = 45;
                        continue _fun43794
                    }
                case 15:
                    var1 = global;
                    var3 = var1.Object;
                    var2 = var3.values;
                    var1 = var0._emojiMap;
                    var1 = var2.bind(var3)(var1);
                    var0._emojis = var1;
                case 45:
                    var0 = var0._emojis;
                    return var0;
            }
        };
        var0.get = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'emoticons';
        var0.key = var5;
        var5 = function() {
            _fun43795: for (var _fun43795_ip = 0;;) switch (_fun43795_ip) {
                case 0:
                    var0 = this;
                    var2 = var0._emoticons;
                    var1 = null;
                    if (!(var1 == var2)) {
                        _fun43795_ip = 44;
                        continue _fun43795
                    }
                case 15:
                    var3 = var0.usableEmojis;
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = var0.require_colons;
                        var0 = !var0;
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    var0._emoticons = var1;
                case 44:
                    var0 = var0._emoticons;
                    return var0;
            }
        };
        var0.get = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'usableEmojis';
        var0.key = var5;
        var4 = function() {
            _fun43797: for (var _fun43797_ip = 0;;) switch (_fun43797_ip) {
                case 0:
                    var0 = this;
                    var _closure3_slot0 = var0;
                    var3 = var0._usableEmojis;
                    var2 = null;
                    if (!(var2 == var3)) {
                        _fun43797_ip = 90;
                        continue _fun43797
                    }
                case 21:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 26;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.sortBy;
                    var6 = var0.emojis;
                    var5 = var6.filter;
                    var2 = function(arg0) { // Environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.isUsable;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2 = var5.bind(var6)(var2);
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = var0.name;
                        return var0;
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    var0._usableEmojis = var1;
                case 90:
                    var0 = var0._usableEmojis;
                    return var0;
            }
        };
        var0.get = var4;
        var1[6] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot29 = var3;
    var3 = 25;
    var3 = var7[var3];
    var15 = var8.bind(var0)(var3);
    var4 = var15.fromTimestamp;
    var16 = var1.Date;
    var3 = var16.now;
    var16 = var3.bind(var16)();
    var3 = 27;
    var3 = var7[var3];
    var3 = var8.bind(var0)(var3);
    var3 = var3.Millis;
    var17 = var3.DAY;
    var3 = 60;
    var3 = var3 * var17;
    var3 = var16 - var3;
    var3 = var4.bind(var15)(var3);
    var _closure1_slot30 = var3;
    var3 = new Array(0);
    var _closure1_slot31 = var3;
    var3 = new Array(0);
    var _closure1_slot32 = var3;
    var3 = {};
    var3.Unloaded = var11;
    var4 = 'Unloaded';
    var3[var11] = var4;
    var3.MaybeLoaded = var14;
    var4 = 'MaybeLoaded';
    var3[var14] = var4;
    var3.Loading = var13;
    var4 = 'Loading';
    var3[var13] = var4;
    var3.Loaded = var12;
    var4 = 'Loaded';
    var3[var12] = var4;
    var _closure1_slot33 = var3;
    var4 = var3.Unloaded;
    var _closure1_slot34 = var4;
    var4 = new Array(0);
    var20 = var4;
    var19 = var9;
    var18 = 0;
    var9 = arraySpread(var20, var19, var18);
    var _closure1_slot35 = var4;
    var4 = {};
    var _closure1_slot36 = var4;
    var4 = {};
    var _closure1_slot37 = var4;
    var1 = var1.Map;
    var4 = var1.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var1
        }
    });
    var21 = var4;
    var1 = new var21[var1](var20);
    var1 = var1 instanceof Object ? var1 : var4;
    var _closure1_slot38 = var1;
    var12 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = {};
        var2 = function() {
            var0 = 100;
            return var0;
        };
        var0.computeBonus = var2;
        var2 = function arg0() {
            _fun43802: for (var _fun43802_ip = 0;;) switch (_fun43802_ip) {
                case 0:
                    var3 = arg0;
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 23;
                    var0 = var2[var0];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var0);
                    var0 = var4.getByName;
                    var0 = var0.bind(var4)(var3);
                    var4 = null;
                    if (!(var4 == var0)) {
                        _fun43802_ip = 54;
                        continue _fun43802
                    }
                case 45:
                    var1 = _closure1_slot46;
                    var0 = var1.bind(var2)(var3);
                case 54:
                    return var0;
            }
        };
        var0.lookupKey = var2;
        var1 = function() {
            _fun43803: for (var _fun43803_ip = 0;;) switch (_fun43803_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    var7 = _closure1_slot27;
                    var2 = new Array(0);
                    var6 = 0;
                    var8 = var2;
                    var3 = arraySpread(var8, var7, var6);
                    _closure1_slot35 = var2;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 26;
                    var2 = var4[var2];
                    var5 = var3.bind(var0)(var2);
                    var4 = var5.some;
                    var3 = _closure1_slot36;
                    var2 = function(arg0) { // Environment: var2
                        var0 = arg0;
                        var0 = var0.usableEmojis;
                        var1 = var0.length;
                        var0 = 0;
                        var0 = var1 > var0;
                        return var0;
                    };
                    var2 = var4.bind(var5)(var3, var2);
                    if (var2) {
                        _fun43803_ip = 127;
                        continue _fun43803
                    }
                case 83:
                    var4 = _closure1_slot35;
                    var3 = var4.splice;
                    var5 = _closure1_slot27;
                    var2 = var5.indexOf;
                    var1 = _closure1_slot25;
                    var1 = var1.CUSTOM;
                    var2 = var2.bind(var5)(var1);
                    var1 = 1;
                    var1 = var3.bind(var4)(var2, var1);
                case 127:
                    return var0;
            }
        };
        var0.afterCompute = var1;
        var1 = 42;
        var0.numFrequentlyItems = var1;
        return var0;
    };
    var _closure1_slot39 = var12;
    var1 = function() { // Environment: var5
        var4 = function arg0() {
            _fun43806: for (var _fun43806_ip = 0;;) switch (_fun43806_ip) {
                case 0:
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var5 = _closure1_slot8;
                    var4 = _closure2_slot0;
                    var0 = undefined;
                    var4 = var5.bind(var0)(var2, var4);
                    var12 = null;
                    var2.favorites = var12;
                    var2.favoriteNamesAndIds = var12;
                    var2.topEmojis = var12;
                    var4 = new Array(0);
                    var2.disambiguatedEmoji = var4;
                    var2.emoticonRegex = var12;
                    var2.frequentlyUsed = var12;
                    var2.frequentlyUsedReactionEmojis = var12;
                    var2.frequentlyUsedReactionNamesAndIds = var12;
                    var4 = {};
                    var2.unicodeAliases = var4;
                    var4 = {};
                    var2.customEmojis = var4;
                    var4 = {};
                    var2.groupedCustomEmojis = var4;
                    var4 = {};
                    var2.emoticonsByName = var4;
                    var4 = {};
                    var2.emojisByName = var4;
                    var4 = {};
                    var2.emojisById = var4;
                    var4 = {};
                    var2.newlyAddedEmoji = var4;
                    var4 = function(arg0) { // Environment: var1
                        _fun43807: for (var _fun43807_ip = 0;;) switch (_fun43807_ip) {
                            case 0:
                                var0 = arg0;
                                var4 = null;
                                if (!(var4 != var0)) {
                                    _fun43807_ip = 126;
                                    continue _fun43807
                                }
                            case 9:
                                var2 = _closure3_slot0;
                                var1 = var2.rebuildFavoriteEmojisWithoutFetchingLatest;
                                var1 = var1.bind(var2)();
                                var2 = var1.favoriteNamesAndIds;
                                var1 = var0.id;
                                if (!(var4 == var1)) {
                                    _fun43807_ip = 109;
                                    continue _fun43807
                                }
                            case 41:
                                var5 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var1 = 23;
                                var3 = var3[var1];
                                var1 = undefined;
                                var5 = var5.bind(var1)(var3);
                                var3 = var5.convertSurrogateToBase;
                                var1 = var0.surrogates;
                                var3 = var3.bind(var5)(var1);
                                var1 = var0;
                                if (!(var4 != var3)) {
                                    _fun43807_ip = 92;
                                    continue _fun43807
                                }
                            case 89:
                                var1 = var3;
                            case 92:
                                var3 = var2.has;
                                var1 = var1.name;
                                var1 = var3.bind(var2)(var1);
                                return var1;
                            case 109:
                                var1 = var2.has;
                                var0 = var0.id;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            case 126:
                                var0 = false;
                                return var0;
                        }
                    };
                    var2.isFavoriteEmojiWithoutFetchingLatest = var4;
                    var4 = arg0;
                    var2.guildId = var4;
                    var4 = {};
                    var _closure3_slot1 = var4;
                    var4 = new Array(0);
                    var _closure3_slot2 = var4;
                    var5 = function arg0() {
                        _fun43808: for (var _fun43808_ip = 0;;) switch (_fun43808_ip) {
                            case 0:
                                var7 = arg0;
                                var4 = var7.name;
                                var0 = _closure3_slot1;
                                var0 = var0[var4];
                                var5 = null;
                                var2 = var5 != var0;
                                var6 = 0;
                                var10 = 0;
                                if (!var2) {
                                    _fun43808_ip = 35;
                                    continue _fun43808
                                }
                            case 32:
                                var10 = var0;
                            case 35:
                                var2 = _closure3_slot1;
                                var0 = 1;
                                var0 = var10 + var0;
                                var2[var4] = var0;
                                var3 = var7;
                                if (!(var10 > var6)) {
                                    _fun43808_ip = 118;
                                    continue _fun43808
                                }
                            case 57:
                                var0 = {};
                                var13 = var0;
                                var12 = var7;
                                var2 = copyDataProperties(var13, var12);
                                var2 = global;
                                var2 = var2.HermesInternal;
                                var9 = var2.concat;
                                var8 = '';
                                var2 = '~';
                                var8 = var9.bind(var8)(var4, var2, var10);
                                var2 = 'name';
                                var0[var2] = var8;
                                var2 = 'originalName';
                                var0[var2] = var4;
                                var3 = var0;
                            case 118:
                                var0 = _closure3_slot0;
                                var4 = var0.emojisByName;
                                var2 = var3.name;
                                var4[var2] = var3;
                                var4 = var0.emojisById;
                                var2 = var3.id;
                                var4[var2] = var3;
                                var4 = var0.customEmojis;
                                var2 = var3.name;
                                var4[var2] = var3;
                                var4 = var7.guildId;
                                var0 = var0.groupedCustomEmojis;
                                var0 = var0[var4];
                                if (!(var5 == var0)) {
                                    _fun43808_ip = 210;
                                    continue _fun43808
                                }
                            case 186:
                                var0 = _closure3_slot0;
                                var2 = var0.groupedCustomEmojis;
                                var0 = new Array(1);
                                var0[0] = var3;
                                var2[var4] = var0;
                                _fun43808_ip = 234;
                                continue _fun43808;
                            case 210:
                                var0 = _closure3_slot0;
                                var0 = var0.groupedCustomEmojis;
                                var2 = var0[var4];
                                var0 = var2.push;
                                var0 = var0.bind(var2)(var3);
                            case 234:
                                var9 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var0 = 25;
                                var8 = var8[var0];
                                var0 = undefined;
                                var9 = var9.bind(var0)(var8);
                                var8 = var9.compare;
                                var7 = var7.id;
                                var2 = _closure1_slot30;
                                var2 = var8.bind(var9)(var7, var2);
                                if (!(var2 >= var6)) {
                                    _fun43808_ip = 350;
                                    continue _fun43808
                                }
                            case 284:
                                var2 = _closure3_slot0;
                                var2 = var2.newlyAddedEmoji;
                                var2 = var2[var4];
                                if (!(var5 == var2)) {
                                    _fun43808_ip = 326;
                                    continue _fun43808
                                }
                            case 302:
                                var2 = _closure3_slot0;
                                var5 = var2.newlyAddedEmoji;
                                var2 = new Array(1);
                                var2[0] = var3;
                                var5[var4] = var2;
                                _fun43808_ip = 350;
                                continue _fun43808;
                            case 326:
                                var2 = _closure3_slot0;
                                var2 = var2.newlyAddedEmoji;
                                var4 = var2[var4];
                                var2 = var4.push;
                                var2 = var2.bind(var4)(var3);
                            case 350:
                                var1 = _closure3_slot0;
                                var2 = var1.disambiguatedEmoji;
                                var1 = var2.push;
                                var1 = var1.bind(var2)(var3);
                                return var0;
                        }
                    };
                    var _closure3_slot3 = var5;
                    var5 = function arg0() {
                        _fun43809: for (var _fun43809_ip = 0;;) switch (_fun43809_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = global;
                                var0 = var0.Object;
                                var0 = var0.prototype;
                                var5 = var0.hasOwnProperty;
                                var4 = var5.call;
                                var1 = _closure3_slot0;
                                var3 = var1.emoticonsByName;
                                var1 = var2.name;
                                var1 = var4.bind(var5)(var3, var1);
                                if (var1) {
                                    _fun43809_ip = 128;
                                    continue _fun43809
                                }
                            case 54:
                                var4 = _closure3_slot2;
                                var3 = var4.push;
                                var6 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var1 = 35;
                                var5 = var5[var1];
                                var1 = undefined;
                                var6 = var6.bind(var1)(var5);
                                var5 = var6.escape;
                                var1 = var2.name;
                                var1 = var5.bind(var6)(var1);
                                var1 = var3.bind(var4)(var1);
                                var0 = _closure3_slot0;
                                var1 = var0.emoticonsByName;
                                var0 = var2.name;
                                var1[var0] = var2;
                            case 128:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var _closure3_slot4 = var5;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 23;
                    var5 = var7[var5];
                    var7 = var6.bind(var0)(var5);
                    var6 = var7.forEach;
                    var5 = function(arg0) { // Environment: var1
                        _fun43810: for (var _fun43810_ip = 0;;) switch (_fun43810_ip) {
                            case 0:
                                var3 = arg0;
                                var _closure4_slot0 = var3;
                                var2 = var3.names;
                                var1 = var2.slice;
                                var6 = 1;
                                var2 = var1.bind(var2)(var6);
                                var1 = var2.forEach;
                                var0 = function(arg0) { // Environment: var0
                                    var0 = _closure3_slot0;
                                    var2 = var0.unicodeAliases;
                                    var0 = _closure4_slot0;
                                    var0 = var0.name;
                                    var1 = arg0;
                                    var2[var1] = var0;
                                    return var0;
                                };
                                var0 = var1.bind(var2)(var0);
                                var2 = _closure3_slot1;
                                var0 = var3.name;
                                var0 = var2[var0];
                                var2 = null;
                                var5 = var2 != var0;
                                var4 = 0;
                                var2 = 0;
                                if (!var5) {
                                    _fun43810_ip = 74;
                                    continue _fun43810
                                }
                            case 71:
                                var2 = var0;
                            case 74:
                                var7 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var0 = 34;
                                var5 = var5[var0];
                                var0 = undefined;
                                var7 = var7.bind(var0)(var5);
                                var5 = var4 === var2;
                                var4 = 'Expected existing count to be 0';
                                var4 = var7.bind(var0)(var5, var4);
                                var5 = _closure3_slot1;
                                var4 = var3.name;
                                var2 = var2 + var6;
                                var5[var4] = var2;
                                var1 = _closure3_slot0;
                                var4 = var1.emojisByName;
                                var2 = var3.name;
                                var4[var2] = var3;
                                var2 = var1.disambiguatedEmoji;
                                var1 = var2.push;
                                var1 = var1.bind(var2)(var3);
                                return var0;
                        }
                    };
                    var5 = var6.bind(var7)(var5);
                    var6 = function arg0() {
                        _fun43812: for (var _fun43812_ip = 0;;) switch (_fun43812_ip) {
                            case 0:
                                var3 = arg0;
                                var1 = _closure1_slot36;
                                var2 = null;
                                if (!(var2 == var3)) {
                                    _fun43812_ip = 20;
                                    continue _fun43812
                                }
                            case 16:
                                var3 = _closure1_slot24;
                            case 20:
                                var1 = var1[var3];
                                if (!(var2 != var1)) {
                                    _fun43812_ip = 108;
                                    continue _fun43812
                                }
                            case 28:
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var2 = 26;
                                var0 = var5[var2];
                                var3 = undefined;
                                var9 = var4.bind(var3)(var0);
                                var8 = var9.each;
                                var7 = var1.usableEmojis;
                                var6 = _closure3_slot3;
                                var6 = var8.bind(var9)(var7, var6);
                                var2 = var5[var2];
                                var3 = var4.bind(var3)(var2);
                                var2 = var3.each;
                                var1 = var1.emoticons;
                                var0 = _closure3_slot4;
                                var0 = var2.bind(var3)(var1, var0);
                            case 108:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var _closure3_slot5 = var6;
                    var5 = var2.guildId;
                    var5 = var6.bind(var0)(var5);
                    var10 = var2.newlyAddedEmoji;
                    var6 = 0;
                    var5 = 3;
                    for (var7 in var10)
                        case 266: {
                            case 275: var15 = var7;
                            var13 = var2.newlyAddedEmoji;
                            var13 = var13[var15];
                            if (!(var12 == var13)) {
                                _fun43806_ip = 308;
                                continue _fun43806
                            }
                            case 292: var14 = var2.newlyAddedEmoji;
                            var13 = new Array(0);
                            var14[var15] = var13;
                            _fun43806_ip = 266;
                            continue _fun43806;
                            case 308: var14 = var2.newlyAddedEmoji;
                            var13 = var2.newlyAddedEmoji;
                            var17 = var13[var15];
                            var16 = var17.sort;
                            var13 = function(arg0, arg1) { // Environment: var1
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 25;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.compare;
                                var0 = arg1;
                                var1 = var0.id;
                                var0 = arg0;
                                var0 = var0.id;
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var16 = var16.bind(var17)(var13);
                            var13 = var16.slice;
                            var13 = var13.bind(var16)(var6, var5);
                            var14[var15] = var13;
                            _fun43806_ip = 266;
                            continue _fun43806;
                        }
                case 357:
                    var5 = _closure1_slot18;
                    var3 = var5.getFlattenedGuildIds;
                    var5 = var3.bind(var5)();
                    var3 = var5.forEach;
                    var1 = function(arg0) { // Environment: var1
                        _fun43814: for (var _fun43814_ip = 0;;) switch (_fun43814_ip) {
                            case 0:
                                var2 = arg0;
                                var1 = _closure3_slot0;
                                var1 = var1.guildId;
                                if (!(var2 !== var1)) {
                                    _fun43814_ip = 30;
                                    continue _fun43814
                                }
                            case 19:
                                var1 = _closure3_slot5;
                                var0 = undefined;
                                var0 = var1.bind(var0)(var2);
                            case 30:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var3.bind(var5)(var1);
                    var3 = var4.join;
                    var1 = '|';
                    var1 = var3.bind(var4)(var1);
                    var2.escapedEmoticonNames = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot9;
        var0 = {};
        var1 = 'getDisambiguatedEmoji';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var0 = var0.disambiguatedEmoji;
            return var0;
        };
        var0.value = var1;
        var2 = new Array(18);
        var2[0] = var0;
        var0 = {};
        var1 = 'getCustomEmoji';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var0 = var0.customEmojis;
            return var0;
        };
        var0.value = var1;
        var2[1] = var0;
        var0 = {};
        var1 = 'getGroupedCustomEmoji';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var0 = var0.groupedCustomEmojis;
            return var0;
        };
        var0.value = var1;
        var2[2] = var0;
        var0 = {};
        var1 = 'getByName';
        var0.key = var1;
        var1 = function arg0() {
            _fun43818: for (var _fun43818_ip = 0;;) switch (_fun43818_ip) {
                case 0:
                    var1 = arg0;
                    var0 = this;
                    var2 = global;
                    var3 = var2.Object;
                    var3 = var3.prototype;
                    var5 = var3.hasOwnProperty;
                    var4 = var5.call;
                    var3 = var0.emojisByName;
                    var3 = var4.bind(var5)(var3, var1);
                    if (var3) {
                        _fun43818_ip = 145;
                        continue _fun43818
                    }
                case 45:
                    var3 = var2.Object;
                    var3 = var3.prototype;
                    var5 = var3.hasOwnProperty;
                    var4 = var5.call;
                    var3 = var0.unicodeAliases;
                    var3 = var4.bind(var5)(var3, var1);
                    if (!var3) {
                        _fun43818_ip = 129;
                        continue _fun43818
                    }
                case 82:
                    var3 = var0.unicodeAliases;
                    var3 = var3[var1];
                    var2 = var2.Object;
                    var2 = var2.prototype;
                    var5 = var2.hasOwnProperty;
                    var4 = var5.call;
                    var2 = var0.emojisByName;
                    var2 = var4.bind(var5)(var2, var3);
                    if (var2) {
                        _fun43818_ip = 133;
                        continue _fun43818
                    }
                case 129:
                    var2 = undefined;
                    return var2;
                case 133:
                    var2 = var0.emojisByName;
                    var2 = var2[var3];
                    return var2;
                case 145:
                    var0 = var0.emojisByName;
                    var0 = var0[var1];
                    return var0;
            }
        };
        var0.value = var1;
        var2[3] = var0;
        var0 = {};
        var1 = 'getEmoticonByName';
        var0.key = var1;
        var1 = function arg0() {
            _fun43819: for (var _fun43819_ip = 0;;) switch (_fun43819_ip) {
                case 0:
                    var1 = arg0;
                    var0 = this;
                    var2 = global;
                    var2 = var2.Object;
                    var2 = var2.prototype;
                    var4 = var2.hasOwnProperty;
                    var3 = var4.call;
                    var2 = var0.emoticonsByName;
                    var2 = var3.bind(var4)(var2, var1);
                    if (var2) {
                        _fun43819_ip = 49;
                        continue _fun43819
                    }
                case 45:
                    var2 = undefined;
                    return var2;
                case 49:
                    var0 = var0.emoticonsByName;
                    var0 = var0[var1];
                    return var0;
            }
        };
        var0.value = var1;
        var2[4] = var0;
        var0 = {};
        var1 = 'getById';
        var0.key = var1;
        var1 = function arg0() {
            _fun43820: for (var _fun43820_ip = 0;;) switch (_fun43820_ip) {
                case 0:
                    var1 = arg0;
                    var0 = this;
                    var2 = global;
                    var2 = var2.Object;
                    var2 = var2.prototype;
                    var4 = var2.hasOwnProperty;
                    var3 = var4.call;
                    var2 = var0.emojisById;
                    var2 = var3.bind(var4)(var2, var1);
                    if (var2) {
                        _fun43820_ip = 49;
                        continue _fun43820
                    }
                case 45:
                    var2 = undefined;
                    return var2;
                case 49:
                    var0 = var0.emojisById;
                    var0 = var0[var1];
                    return var0;
            }
        };
        var0.value = var1;
        var2[5] = var0;
        var0 = {};
        var1 = 'getCustomEmoticonRegex';
        var0.key = var1;
        var1 = function() {
            _fun43821: for (var _fun43821_ip = 0;;) switch (_fun43821_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.emoticonRegex;
                    var3 = null;
                    var1 = var3 == var1;
                    if (!var1) {
                        _fun43821_ip = 28;
                        continue _fun43821
                    }
                case 18:
                    var2 = var0.escapedEmoticonNames;
                    var1 = var3 != var2;
                case 28:
                    if (!var1) {
                        _fun43821_ip = 45;
                        continue _fun43821
                    }
                case 31:
                    var3 = var0.escapedEmoticonNames;
                    var2 = '';
                    var1 = var2 !== var3;
                case 45:
                    if (!var1) {
                        _fun43821_ip = 117;
                        continue _fun43821
                    }
                case 48:
                    var1 = global;
                    var3 = var1.RegExp;
                    var5 = var0.escapedEmoticonNames;
                    var1 = var1.HermesInternal;
                    var4 = var1.concat;
                    var2 = '^\\b(';
                    var1 = ')\\b';
                    var7 = var4.bind(var2)(var5, var1);
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var3
                        }
                    });
                    var8 = var2;
                    var1 = new var8[var3](var7, var6);
                    var1 = var1 instanceof Object ? var1 : var2;
                    var0.emoticonRegex = var1;
                case 117:
                    var0 = var0.emoticonRegex;
                    return var0;
            }
        };
        var0.value = var1;
        var2[6] = var0;
        var0 = {};
        var1 = 'getFrequentlyUsedEmojisWithoutFetchingLatest';
        var0.key = var1;
        var1 = function() {
            _fun43822: for (var _fun43822_ip = 0;;) switch (_fun43822_ip) {
                case 0:
                    var0 = this;
                    var _closure3_slot0 = var0;
                    var3 = var0.frequentlyUsed;
                    var1 = null;
                    if (!(var1 == var3)) {
                        _fun43822_ip = 147;
                        continue _fun43822
                    }
                case 24:
                    var3 = _closure1_slot41;
                    var4 = var3.frequently;
                    var3 = var4.map;
                    var2 = function(arg0) { // Environment: var2
                        _fun43823: for (var _fun43823_ip = 0;;) switch (_fun43823_ip) {
                            case 0:
                                var1 = arg0;
                                var2 = var1.id;
                                var0 = null;
                                if (!(var0 == var2)) {
                                    _fun43823_ip = 57;
                                    continue _fun43823
                                }
                            case 14:
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 23;
                                var2 = var2[var0];
                                var0 = undefined;
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.getByName;
                                var0 = var1.name;
                                var0 = var2.bind(var3)(var0);
                                _fun43823_ip = 80;
                                continue _fun43823;
                            case 57:
                                var3 = _closure3_slot0;
                                var2 = var3.getById;
                                var1 = var1.id;
                                var0 = var2.bind(var3)(var1);
                            case 80:
                                return var0;
                        }
                    };
                    var6 = var3.bind(var4)(var2);
                    var4 = var6.filter;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 36;
                    var2 = var5[var2];
                    var3 = undefined;
                    var2 = var7.bind(var3)(var2);
                    var2 = var2.isNotNullish;
                    var2 = var4.bind(var6)(var2);
                    var4 = _closure1_slot1;
                    var1 = 37;
                    var1 = var5[var1];
                    var1 = var4.bind(var3)(var1);
                    var2 = var1.bind(var3)(var2);
                    var1 = var2.values;
                    var9 = var1.bind(var2)();
                    var1 = new Array(0);
                    var8 = 0;
                    var10 = var1;
                    var2 = arraySpread(var10, var9, var8);
                    var0.frequentlyUsed = var1;
                    var1 = var0.frequentlyUsed;
                    return var1;
                case 147:
                    var0 = var0.frequentlyUsed;
                    return var0;
            }
        };
        var0.value = var1;
        var2[7] = var0;
        var0 = {};
        var1 = 'rebuildFrequentlyUsedReactionsEmojisWithoutFetchingLatest';
        var0.key = var1;
        var1 = function() {
            _fun43824: for (var _fun43824_ip = 0;;) switch (_fun43824_ip) {
                case 0:
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var0 = var1.frequentlyUsedReactionEmojis;
                    var3 = null;
                    if (!(var3 != var0)) {
                        _fun43824_ip = 34;
                        continue _fun43824
                    }
                case 21:
                    var0 = var1.frequentlyUsedReactionNamesAndIds;
                    if (!(var3 == var0)) {
                        _fun43824_ip = 218;
                        continue _fun43824
                    }
                case 34:
                    var3 = _closure1_slot42;
                    var4 = var3.frequently;
                    var3 = var4.map;
                    var2 = function(arg0) { // Environment: var2
                        _fun43825: for (var _fun43825_ip = 0;;) switch (_fun43825_ip) {
                            case 0:
                                var1 = arg0;
                                var2 = var1.id;
                                var0 = null;
                                if (!(var0 == var2)) {
                                    _fun43825_ip = 57;
                                    continue _fun43825
                                }
                            case 14:
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 23;
                                var2 = var2[var0];
                                var0 = undefined;
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.getByName;
                                var0 = var1.name;
                                var0 = var2.bind(var3)(var0);
                                _fun43825_ip = 80;
                                continue _fun43825;
                            case 57:
                                var3 = _closure3_slot0;
                                var2 = var3.getById;
                                var1 = var1.id;
                                var0 = var2.bind(var3)(var1);
                            case 80:
                                return var0;
                        }
                    };
                    var6 = var3.bind(var4)(var2);
                    var4 = var6.filter;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 36;
                    var2 = var5[var2];
                    var3 = undefined;
                    var2 = var7.bind(var3)(var2);
                    var2 = var2.isNotNullish;
                    var2 = var4.bind(var6)(var2);
                    var4 = _closure1_slot1;
                    var0 = 37;
                    var0 = var5[var0];
                    var0 = var4.bind(var3)(var0);
                    var2 = var0.bind(var3)(var2);
                    var0 = var2.values;
                    var9 = var0.bind(var2)();
                    var0 = new Array(0);
                    var8 = 0;
                    var10 = var0;
                    var3 = arraySpread(var10, var9, var8);
                    var1.frequentlyUsedReactionEmojis = var0;
                    var0 = global;
                    var3 = var0.Set;
                    var0 = var2.keys;
                    var10 = var0.bind(var2)();
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var3
                        }
                    });
                    var11 = var2;
                    var0 = new var11[var3](var10, var9);
                    var0 = var0 instanceof Object ? var0 : var2;
                    var1.frequentlyUsedReactionNamesAndIds = var0;
                    var0 = {};
                    var2 = var1.frequentlyUsedReactionEmojis;
                    var0.frequentlyUsedReactionEmojis = var2;
                    var2 = var1.frequentlyUsedReactionNamesAndIds;
                    var0.frequentlyUsedReactionNamesAndIds = var2;
                    return var0;
                case 218:
                    var0 = {};
                    var2 = var1.frequentlyUsedReactionEmojis;
                    var0.frequentlyUsedReactionEmojis = var2;
                    var1 = var1.frequentlyUsedReactionNamesAndIds;
                    var0.frequentlyUsedReactionNamesAndIds = var1;
                    return var0;
            }
        };
        var0.value = var1;
        var2[8] = var0;
        var0 = {};
        var1 = 'getFrequentlyUsedReactionEmojisWithoutFetchingLatest';
        var0.key = var1;
        var1 = function() {
            var1 = this;
            var0 = var1.rebuildFrequentlyUsedReactionsEmojisWithoutFetchingLatest;
            var0 = var0.bind(var1)();
            var0 = var0.frequentlyUsedReactionEmojis;
            return var0;
        };
        var0.value = var1;
        var2[9] = var0;
        var0 = {};
        var1 = 'isFrequentlyUsedReactionEmojiWithoutFetchingLatest';
        var0.key = var1;
        var1 = function arg0() {
            _fun43827: for (var _fun43827_ip = 0;;) switch (_fun43827_ip) {
                case 0:
                    var0 = arg0;
                    var2 = this;
                    var1 = var2.rebuildFrequentlyUsedReactionsEmojisWithoutFetchingLatest;
                    var1 = var1.bind(var2)();
                    var2 = var1.frequentlyUsedReactionNamesAndIds;
                    var1 = var0.id;
                    var4 = null;
                    if (!(var4 == var1)) {
                        _fun43827_ip = 101;
                        continue _fun43827
                    }
                case 33:
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 23;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var3);
                    var3 = var5.convertSurrogateToBase;
                    var1 = var0.surrogates;
                    var3 = var3.bind(var5)(var1);
                    var1 = var0;
                    if (!(var4 != var3)) {
                        _fun43827_ip = 84;
                        continue _fun43827
                    }
                case 81:
                    var1 = var3;
                case 84:
                    var3 = var2.has;
                    var1 = var1.name;
                    var1 = var3.bind(var2)(var1);
                    return var1;
                case 101:
                    var1 = var2.has;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var0.value = var1;
        var2[10] = var0;
        var0 = {};
        var1 = 'rebuildFavoriteEmojisWithoutFetchingLatest';
        var0.key = var1;
        var1 = function() {
            _fun43828: for (var _fun43828_ip = 0;;) switch (_fun43828_ip) {
                case 0:
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var0 = var1.favorites;
                    var4 = null;
                    if (!(var4 != var0)) {
                        _fun43828_ip = 34;
                        continue _fun43828
                    }
                case 21:
                    var0 = var1.favoriteNamesAndIds;
                    if (!(var4 == var0)) {
                        _fun43828_ip = 247;
                        continue _fun43828
                    }
                case 34:
                    var3 = _closure1_slot13;
                    var3 = var3.frecencyWithoutFetchingLatest;
                    var6 = var3.favoriteEmojis;
                    var7 = var4 == var6;
                    var3 = undefined;
                    var5 = undefined;
                    if (var7) {
                        _fun43828_ip = 70;
                        continue _fun43828
                    }
                case 64:
                    var5 = var6.emojis;
                case 70:
                    if (!(var4 == var5)) {
                        _fun43828_ip = 78;
                        continue _fun43828
                    }
                case 74:
                    var5 = new Array(0);
                case 78:
                    var4 = var5.map;
                    var2 = function(arg0) { // Environment: var2
                        _fun43829: for (var _fun43829_ip = 0;;) switch (_fun43829_ip) {
                            case 0:
                                var3 = arg0;
                                var1 = _closure3_slot0;
                                var0 = var1.getById;
                                var0 = var0.bind(var1)(var3);
                                var1 = null;
                                if (!(var1 == var0)) {
                                    _fun43829_ip = 63;
                                    continue _fun43829
                                }
                            case 27:
                                var4 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 23;
                                var2 = var2[var1];
                                var1 = undefined;
                                var2 = var4.bind(var1)(var2);
                                var1 = var2.getByName;
                                var0 = var1.bind(var2)(var3);
                            case 63:
                                return var0;
                        }
                    };
                    var6 = var4.bind(var5)(var2);
                    var4 = var6.filter;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 36;
                    var2 = var5[var2];
                    var2 = var7.bind(var3)(var2);
                    var2 = var2.isNotNullish;
                    var2 = var4.bind(var6)(var2);
                    var4 = _closure1_slot1;
                    var0 = 37;
                    var0 = var5[var0];
                    var0 = var4.bind(var3)(var0);
                    var2 = var0.bind(var3)(var2);
                    var0 = var2.values;
                    var9 = var0.bind(var2)();
                    var0 = new Array(0);
                    var8 = 0;
                    var10 = var0;
                    var3 = arraySpread(var10, var9, var8);
                    var1.favorites = var0;
                    var0 = global;
                    var3 = var0.Set;
                    var0 = var2.keys;
                    var10 = var0.bind(var2)();
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var3
                        }
                    });
                    var11 = var2;
                    var0 = new var11[var3](var10, var9);
                    var0 = var0 instanceof Object ? var0 : var2;
                    var1.favoriteNamesAndIds = var0;
                    var0 = {};
                    var2 = var1.favorites;
                    var0.favorites = var2;
                    var2 = var1.favoriteNamesAndIds;
                    var0.favoriteNamesAndIds = var2;
                    return var0;
                case 247:
                    var0 = {};
                    var2 = var1.favorites;
                    var0.favorites = var2;
                    var1 = var1.favoriteNamesAndIds;
                    var0.favoriteNamesAndIds = var1;
                    return var0;
            }
        };
        var0.value = var1;
        var2[11] = var0;
        var0 = {};
        var1 = 'favoriteEmojisWithoutFetchingLatest';
        var0.key = var1;
        var1 = function() {
            var1 = this;
            var0 = var1.rebuildFavoriteEmojisWithoutFetchingLatest;
            var0 = var0.bind(var1)();
            var0 = var0.favorites;
            return var0;
        };
        var0.get = var1;
        var2[12] = var0;
        var0 = {};
        var1 = 'getEmojiInPriorityOrderWithoutFetchingLatest';
        var0.key = var1;
        var1 = function() {
            var1 = this;
            var2 = var1.getFrequentlyUsedReactionEmojisWithoutFetchingLatest;
            var3 = var2.bind(var1)();
            var2 = global;
            var2 = var2.Set;
            var4 = var2.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var2
                }
            });
            var6 = var4;
            var2 = new var6[var2](var5);
            var2 = var2 instanceof Object ? var2 : var4;
            var _closure3_slot0 = var2;
            var2 = var1.favoriteEmojisWithoutFetchingLatest;
            var1 = var2.concat;
            var2 = var1.bind(var2)(var3);
            var1 = var2.filter;
            var0 = function(arg0) { // Environment: var0
                _fun43832: for (var _fun43832_ip = 0;;) switch (_fun43832_ip) {
                    case 0:
                        var3 = arg0;
                        var2 = _closure3_slot0;
                        var0 = var2.has;
                        var0 = var0.bind(var2)(var3);
                        var0 = !var0;
                        if (!var0) {
                            _fun43832_ip = 42;
                            continue _fun43832
                        }
                    case 26:
                        var2 = _closure3_slot0;
                        var1 = var2.add;
                        var1 = var1.bind(var2)(var3);
                        var0 = true;
                    case 42:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var1;
        var2[13] = var0;
        var0 = {};
        var1 = 'getTopEmojiWithoutFetchingLatest';
        var0.key = var1;
        var1 = function arg0() {
            _fun43833: for (var _fun43833_ip = 0;;) switch (_fun43833_ip) {
                case 0:
                    var5 = arg0;
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var0 = var1.topEmojis;
                    var4 = null;
                    if (!(var4 == var0)) {
                        _fun43833_ip = 180;
                        continue _fun43833
                    }
                case 27:
                    var6 = _closure1_slot38;
                    var3 = var6.get;
                    var7 = var3.bind(var6)(var5);
                    var6 = _closure1_slot21;
                    var3 = var6.getTopEmojiIdsByGuildId;
                    var6 = var3.bind(var6)(var5);
                    if (!(var4 == var7)) {
                        _fun43833_ip = 69;
                        continue _fun43833
                    }
                case 65:
                    if (!(var4 != var6)) {
                        _fun43833_ip = 188;
                        continue _fun43833
                    }
                case 69:
                    var8 = var4 == var7;
                    var3 = undefined;
                    if (var8) {
                        _fun43833_ip = 84;
                        continue _fun43833
                    }
                case 78:
                    var3 = var7.emojiIds;
                case 84:
                    if (!(var4 != var3)) {
                        _fun43833_ip = 91;
                        continue _fun43833
                    }
                case 88:
                    var6 = var3;
                case 91:
                    var4 = var6.map;
                    var3 = function(arg0) { // Environment: var2
                        _fun43834: for (var _fun43834_ip = 0;;) switch (_fun43834_ip) {
                            case 0:
                                var6 = arg0;
                                var1 = _closure3_slot0;
                                var0 = var1.getById;
                                var0 = var0.bind(var1)(var6);
                                var1 = null;
                                if (!(var1 == var0)) {
                                    _fun43834_ip = 86;
                                    continue _fun43834
                                }
                            case 27:
                                var5 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var1 = 23;
                                var2 = var7[var1];
                                var4 = undefined;
                                var3 = var5.bind(var4)(var2);
                                var2 = var3.getByName;
                                var1 = var7[var1];
                                var5 = var5.bind(var4)(var1);
                                var4 = var5.convertSurrogateToName;
                                var1 = false;
                                var1 = var4.bind(var5)(var6, var1);
                                var0 = var2.bind(var3)(var1);
                            case 86:
                                return var0;
                        }
                    };
                    var7 = var4.bind(var6)(var3);
                    var4 = new Array(0);
                    var _closure3_slot1 = var4;
                    var6 = var7.forEach;
                    var3 = function(arg0) { // Environment: var2
                        _fun43835: for (var _fun43835_ip = 0;;) switch (_fun43835_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = null;
                                if (!(var0 != var2)) {
                                    _fun43835_ip = 26;
                                    continue _fun43835
                                }
                            case 9:
                                var1 = _closure3_slot1;
                                var0 = var1.push;
                                var0 = var0.bind(var1)(var2);
                            case 26:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var3 = var6.bind(var7)(var3);
                    var3 = var1.getNewlyAddedEmojiForGuild;
                    var6 = var3.bind(var1)(var5);
                    var5 = var6.map;
                    var3 = function(arg0) { // Environment: var2
                        var0 = arg0;
                        var0 = var0.id;
                        return var0;
                    };
                    var3 = var5.bind(var6)(var3);
                    var _closure3_slot2 = var3;
                    var3 = var4.filter;
                    var2 = function(arg0) { // Environment: var2
                        var2 = _closure3_slot2;
                        var1 = var2.includes;
                        var0 = arg0;
                        var0 = var0.id;
                        var0 = var1.bind(var2)(var0);
                        var0 = !var0;
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    var1.topEmojis = var2;
                case 180:
                    var1 = var1.topEmojis;
                    return var1;
                case 188:
                    var0 = _closure1_slot31;
                    return var0;
            }
        };
        var0.value = var1;
        var2[14] = var0;
        var0 = {};
        var1 = 'getNewlyAddedEmojiForGuild';
        var0.key = var1;
        var1 = function arg0() {
            _fun43838: for (var _fun43838_ip = 0;;) switch (_fun43838_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.newlyAddedEmoji;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun43838_ip = 41;
                        continue _fun43838
                    }
                case 15:
                    var2 = var0.newlyAddedEmoji;
                    var0 = arg0;
                    var0 = var2[var0];
                    if (!(var1 == var0)) {
                        _fun43838_ip = 39;
                        continue _fun43838
                    }
                case 32:
                    var0 = _closure1_slot31;
                case 39:
                    return var0;
                case 41:
                    var0 = _closure1_slot31;
                    return var0;
            }
        };
        var0.value = var1;
        var2[15] = var0;
        var0 = {};
        var1 = 'getEscapedCustomEmoticonNames';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var0 = var0.escapedEmoticonNames;
            return var0;
        };
        var0.value = var1;
        var2[16] = var0;
        var0 = {};
        var1 = 'nameMatchesChain';
        var0.key = var1;
        var1 = function arg0() {
            var4 = this;
            var1 = arg0;
            var _closure3_slot0 = var1;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 26;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = var4.getDisambiguatedEmoji;
            var1 = var1.bind(var4)();
            var2 = var2.bind(var3)(var1);
            var1 = var2.filter;
            var0 = function(arg0) { // Environment: var0
                _fun43841: for (var _fun43841_ip = 0;;) switch (_fun43841_ip) {
                    case 0:
                        var0 = arg0;
                        var5 = var0.names;
                        var7 = var0.name;
                        var1 = null;
                        var0 = var1 != var5;
                        if (!var0) {
                            _fun43841_ip = 66;
                            continue _fun43841
                        }
                    case 22:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 26;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.some;
                        var2 = _closure3_slot0;
                        var0 = var3.bind(var4)(var5, var2);
                    case 66:
                        var2 = var1 != var7;
                        if (!var2) {
                            _fun43841_ip = 87;
                            continue _fun43841
                        }
                    case 73:
                        var4 = _closure3_slot0;
                        var3 = undefined;
                        var2 = var4.bind(var3)(var7);
                    case 87:
                        var1 = var1 != var7;
                        if (!var1) {
                            _fun43841_ip = 161;
                            continue _fun43841
                        }
                    case 94:
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var3 = 26;
                        var3 = var9[var3];
                        var4 = undefined;
                        var6 = var8.bind(var4)(var3);
                        var5 = var6.some;
                        var3 = 38;
                        var3 = var9[var3];
                        var4 = var8.bind(var4)(var3);
                        var3 = var4.getTermsForEmoji;
                        var4 = var3.bind(var4)(var7);
                        var3 = _closure3_slot0;
                        var1 = var5.bind(var6)(var4, var3);
                    case 161:
                        if (var0) {
                            _fun43841_ip = 167;
                            continue _fun43841
                        }
                    case 164:
                        var0 = var2;
                    case 167:
                        if (var0) {
                            _fun43841_ip = 173;
                            continue _fun43841
                        }
                    case 170:
                        var0 = var1;
                    case 173:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var1;
        var2[17] = var0;
        var0 = {};
        var1 = 'get';
        var0.key = var1;
        var1 = function arg0() {
            _fun43842: for (var _fun43842_ip = 0;;) switch (_fun43842_ip) {
                case 0:
                    var1 = arg0;
                    var0 = undefined;
                    if (!(var0 === var1)) {
                        _fun43842_ip = 11;
                        continue _fun43842
                    }
                case 9:
                    var1 = null;
                case 11:
                    var2 = _closure2_slot0;
                    var3 = var2._lastInstance;
                    var2 = null;
                    var2 = var2 != var3;
                    if (!var2) {
                        _fun43842_ip = 52;
                        continue _fun43842
                    }
                case 33:
                    var3 = _closure2_slot0;
                    var3 = var3._lastInstance;
                    var3 = var3.guildId;
                    var2 = var3 === var1;
                case 52:
                    if (var2) {
                        _fun43842_ip = 88;
                        continue _fun43842
                    }
                case 55:
                    var2 = _closure2_slot0;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var2
                        }
                    });
                    var5 = var3;
                    var4 = var1;
                    var1 = new var5[var2](var4, var3);
                    var1 = var1 instanceof Object ? var1 : var3;
                    var2._lastInstance = var1;
                case 88:
                    var0 = _closure2_slot0;
                    var0 = var0._lastInstance;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(5);
        var1[0] = var0;
        var0 = {};
        var6 = 'reset';
        var0.key = var6;
        var6 = function() {
            var1 = _closure2_slot0;
            var0 = null;
            var1._lastInstance = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var6;
        var1[1] = var0;
        var0 = {};
        var6 = 'resetFrequentlyUsed';
        var0.key = var6;
        var6 = function() {
            _fun43844: for (var _fun43844_ip = 0;;) switch (_fun43844_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var2 = var1._lastInstance;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun43844_ip = 35;
                        continue _fun43844
                    }
                case 19:
                    var0 = _closure2_slot0;
                    var0 = var0._lastInstance;
                    var0.frequentlyUsed = var1;
                case 35:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var6;
        var1[2] = var0;
        var0 = {};
        var6 = 'resetFrequentlyUsedReactionEmojis';
        var0.key = var6;
        var6 = function() {
            _fun43845: for (var _fun43845_ip = 0;;) switch (_fun43845_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var2 = var1._lastInstance;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun43845_ip = 47;
                        continue _fun43845
                    }
                case 19:
                    var0 = _closure2_slot0;
                    var2 = var0._lastInstance;
                    var2.frequentlyUsedReactionEmojis = var1;
                    var0 = var0._lastInstance;
                    var0.frequentlyUsedReactionNamesAndIds = var1;
                case 47:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var6;
        var1[3] = var0;
        var0 = {};
        var6 = 'clear';
        var0.key = var6;
        var5 = function arg0() {
            _fun43846: for (var _fun43846_ip = 0;;) switch (_fun43846_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var2 = var1._lastInstance;
                    var1 = null;
                    var2 = var1 != var2;
                    if (!var2) {
                        _fun43846_ip = 44;
                        continue _fun43846
                    }
                case 22:
                    var3 = _closure2_slot0;
                    var3 = var3._lastInstance;
                    var4 = var3.guildId;
                    var3 = arg0;
                    var2 = var4 === var3;
                case 44:
                    if (!var2) {
                        _fun43846_ip = 57;
                        continue _fun43846
                    }
                case 47:
                    var0 = _closure2_slot0;
                    var0._lastInstance = var1;
                case 57:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var4, var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var _closure1_slot40 = var1;
    var4 = null;
    var1._lastInstance = var4;
    var9 = var1.resetFrequentlyUsed;
    var4 = 33;
    var4 = var7[var4];
    var11 = var8.bind(var0)(var4);
    var4 = {};
    var19 = var12.bind(var0)(var9);
    var20 = var4;
    var9 = copyDataProperties(var20, var19);
    var9 = var11.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var11
        }
    });
    var21 = var9;
    var20 = var4;
    var4 = new var21[var11](var20, var19);
    var4 = var4 instanceof Object ? var4 : var9;
    var _closure1_slot41 = var4;
    var9 = var1.resetFrequentlyUsedReactionEmojis;
    var4 = function arg0() {
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var0 = 33;
        var0 = var3[var0];
        var4 = undefined;
        var2 = var2.bind(var4)(var0);
        var0 = {};
        var3 = _closure1_slot39;
        var1 = arg0;
        var5 = var3.bind(var4)(var1);
        var6 = var0;
        var1 = copyDataProperties(var6, var5);
        var3 = function arg0, arg1, arg2() {
            _fun43848: for (var _fun43848_ip = 0;;) switch (_fun43848_ip) {
                case 0:
                    var0 = arg2;
                    var2 = var0.maxTotalUse;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun43848_ip = 98;
                        continue _fun43848
                    }
                case 15:
                    var1 = var0.maxTotalUse;
                    var0 = arg0;
                    var1 = var0 / var1;
                    var0 = 0.2;
                    var4 = var1 * var0;
                    var0 = arg1;
                    var3 = 1000;
                    var5 = var0 / var3;
                    var0 = global;
                    var2 = var0.Math;
                    var1 = var2.trunc;
                    var0 = 0.8;
                    var0 = var5 * var0;
                    var0 = var4 + var0;
                    var0 = var3 * var0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                case 98:
                    var0 = 0;
                    return var0;
            }
        };
        var1 = 'computeFrecency';
        var0[var1] = var3;
        var3 = true;
        var1 = 'calculateMaxTotalUse';
        var0[var1] = var3;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var7 = var1;
        var6 = var0;
        var0 = new var7[var2](var6, var5);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var4 = var4.bind(var0)(var9);
    var _closure1_slot42 = var4;
    var4 = 45;
    var4 = var7[var4];
    var4 = var8.bind(var0)(var4);
    var9 = var4.PersistedStore;
    var4 = function(arg0) { // Environment: var5
        var3 = function() {
            _fun43850: for (var _fun43850_ip = 0;;) switch (_fun43850_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot8;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot4;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot3;
                    var0 = _closure1_slot43;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun43850_ip = 69;
                        continue _fun43850
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun43850_ip = 105;
                    continue _fun43850;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot4;
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
        var4 = _closure1_slot5;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot9;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function arg0() {
            _fun43851: for (var _fun43851_ip = 0;;) switch (_fun43851_ip) {
                case 0:
                    var1 = arg0;
                    var3 = this;
                    var15 = var3.waitFor;
                    var27 = _closure1_slot10;
                    var26 = _closure1_slot14;
                    var25 = _closure1_slot15;
                    var24 = _closure1_slot16;
                    var23 = _closure1_slot17;
                    var22 = _closure1_slot12;
                    var21 = _closure1_slot20;
                    var20 = _closure1_slot18;
                    var19 = _closure1_slot11;
                    var18 = _closure1_slot21;
                    var17 = _closure1_slot13;
                    var16 = _closure1_slot19;
                    var28 = var3;
                    var2 = var28[var15](var27, var26, var25, var24, var23, var22, var21, var20, var19, var18, var17, var16, var15);
                    var4 = null;
                    if (!(var4 != var1)) {
                        _fun43851_ip = 182;
                        continue _fun43851
                    }
                case 76:
                    var2 = var1.pendingUsages;
                    if (!(var4 != var2)) {
                        _fun43851_ip = 102;
                        continue _fun43851
                    }
                case 86:
                    var5 = _closure1_slot28;
                    var2 = var1.pendingUsages;
                    var5.pendingUsages = var2;
                case 102:
                    var2 = var1.emojiReactionPendingUsages;
                    if (!(var4 != var2)) {
                        _fun43851_ip = 128;
                        continue _fun43851
                    }
                case 112:
                    var5 = _closure1_slot28;
                    var2 = var1.emojiReactionPendingUsages;
                    var5.emojiReactionPendingUsages = var2;
                case 128:
                    var2 = var1.expandedSectionsByGuildIds;
                    if (!(var4 != var2)) {
                        _fun43851_ip = 182;
                        continue _fun43851
                    }
                case 138:
                    var2 = _closure1_slot28;
                    var4 = global;
                    var5 = var4.Set;
                    var27 = var1.expandedSectionsByGuildIds;
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var5
                        }
                    });
                    var28 = var4;
                    var1 = new var28[var5](var27, var26);
                    var1 = var1 instanceof Object ? var1 : var4;
                    var2.expandedSectionsByGuildIds = var1;
                case 182:
                    var2 = var3.syncWith;
                    var4 = _closure1_slot13;
                    var1 = new Array(1);
                    var1[0] = var4;
                    var0 = _closure1_slot54;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(22);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot28;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'loadState';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot34;
            return var0;
        };
        var4.get = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'hasPendingUsage';
        var4.key = var6;
        var6 = function() {
            _fun43854: for (var _fun43854_ip = 0;;) switch (_fun43854_ip) {
                case 0:
                    var0 = _closure1_slot28;
                    var0 = var0.pendingUsages;
                    var0 = var0.length;
                    var2 = 0;
                    var0 = var0 > var2;
                    if (var0) {
                        _fun43854_ip = 46;
                        continue _fun43854
                    }
                case 27:
                    var1 = _closure1_slot28;
                    var1 = var1.emojiReactionPendingUsages;
                    var1 = var1.length;
                    var0 = var1 > var2;
                case 46:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'expandedSectionsByGuildIds';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot28;
            var0 = var0.expandedSectionsByGuildIds;
            return var0;
        };
        var4.get = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'categories';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot35;
            return var0;
        };
        var4.get = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'diversitySurrogate';
        var4.key = var6;
        var6 = function() {
            _fun43857: for (var _fun43857_ip = 0;;) switch (_fun43857_ip) {
                case 0:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 23;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.getDefaultDiversitySurrogate;
                    var1 = var0.bind(var1)();
                    var0 = null;
                    var2 = var0 != var1;
                    var0 = '';
                    if (!var2) {
                        _fun43857_ip = 51;
                        continue _fun43857
                    }
                case 48:
                    var0 = var1;
                case 51:
                    return var0;
            }
        };
        var4.get = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'emojiFrecencyWithoutFetchingLatest';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot41;
            return var0;
        };
        var4.get = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'emojiReactionFrecencyWithoutFetchingLatest';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot42;
            return var0;
        };
        var4.get = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getGuildEmoji';
        var4.key = var6;
        var6 = function arg0() {
            _fun43860: for (var _fun43860_ip = 0;;) switch (_fun43860_ip) {
                case 0:
                    var5 = arg0;
                    var2 = _closure1_slot48;
                    var0 = undefined;
                    var2 = var2.bind(var0)();
                    var2 = null;
                    var4 = var2 == var5;
                    var3 = undefined;
                    if (var4) {
                        _fun43860_ip = 35;
                        continue _fun43860
                    }
                case 27:
                    var4 = _closure1_slot36;
                    var3 = var4[var5];
                case 35:
                    var4 = var2 == var3;
                    var0 = undefined;
                    if (var4) {
                        _fun43860_ip = 50;
                        continue _fun43860
                    }
                case 44:
                    var0 = var3.emojis;
                case 50:
                    if (!(var2 == var0)) {
                        _fun43860_ip = 58;
                        continue _fun43860
                    }
                case 54:
                    var0 = _closure1_slot32;
                case 58:
                    return var0;
            }
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'getUsableGuildEmoji';
        var4.key = var6;
        var6 = function arg0() {
            _fun43861: for (var _fun43861_ip = 0;;) switch (_fun43861_ip) {
                case 0:
                    var2 = _closure1_slot48;
                    var0 = undefined;
                    var2 = var2.bind(var0)();
                    var3 = _closure1_slot36;
                    var2 = arg0;
                    var3 = var3[var2];
                    var2 = null;
                    var4 = var2 == var3;
                    if (var4) {
                        _fun43861_ip = 39;
                        continue _fun43861
                    }
                case 33:
                    var0 = var3.usableEmojis;
                case 39:
                    if (!(var2 == var0)) {
                        _fun43861_ip = 47;
                        continue _fun43861
                    }
                case 43:
                    var0 = _closure1_slot32;
                case 47:
                    return var0;
            }
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'getGuilds';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot36;
            return var0;
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'getDisambiguatedEmojiContext';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot48;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var2 = _closure1_slot40;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'getSearchResultsOrder';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3, arg4() {
            _fun43864: for (var _fun43864_ip = 0;;) switch (_fun43864_ip) {
                case 0:
                    var7 = arg0;
                    var2 = arg1;
                    var4 = arg2;
                    var1 = arg3;
                    var _closure3_slot0 = var1;
                    var1 = arg4;
                    var _closure3_slot1 = var1;
                    var1 = var2.toLowerCase;
                    var12 = var1.bind(var2)();
                    var _closure3_slot2 = var12;
                    var5 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 35;
                    var3 = var9[var2];
                    var6 = undefined;
                    var8 = var5.bind(var6)(var3);
                    var3 = var8.escape;
                    var17 = var3.bind(var8)(var12);
                    var8 = var12.slice;
                    var3 = 0;
                    var11 = 1;
                    var10 = var8.bind(var12)(var3, var11);
                    var8 = var10.toUpperCase;
                    var10 = var8.bind(var10)();
                    var8 = var12.slice;
                    var8 = var8.bind(var12)(var11);
                    var8 = var10 + var8;
                    var2 = var9[var2];
                    var5 = var5.bind(var6)(var2);
                    var2 = var5.escape;
                    var16 = var2.bind(var5)(var8);
                    var5 = var7.length;
                    var2 = var7;
                    if (!(var5 > var3)) {
                        _fun43864_ip = 578;
                        continue _fun43864
                    }
                case 150:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var5 = 42;
                    var5 = var9[var5];
                    var9 = var8.bind(var6)(var5);
                    var8 = var9.getConfig;
                    var5 = {};
                    var10 = 'getSearchResultsOrder';
                    var5.location = var10;
                    var5 = var8.bind(var9)(var5);
                    var8 = var5.boostFavorites;
                    var _closure3_slot3 = var8;
                    var8 = var5.boostCapitalizedWords;
                    var9 = var5.boostAtEnd;
                    var _closure3_slot4 = var9;
                    var5 = var5.boostsIgnoreDisambiguators;
                    var _closure3_slot5 = var5;
                    var5 = global;
                    var11 = var5.RegExp;
                    var9 = var5.HermesInternal;
                    var10 = var9.concat;
                    var9 = '^';
                    var21 = var10.bind(var9)(var17);
                    var10 = var11.prototype;
                    var10 = Object.create(var10, {
                        constructor: {
                            value: var11
                        }
                    });
                    var13 = 'i';
                    var22 = var10;
                    var20 = var13;
                    var9 = new var22[var11](var21, var20, var19);
                    var10 = var9 instanceof Object ? var9 : var10;
                    var12 = var5.RegExp;
                    var9 = var5.HermesInternal;
                    var14 = var9.concat;
                    var11 = '';
                    var9 = '$';
                    var21 = var14.bind(var11)(var17, var9);
                    var11 = var12.prototype;
                    var11 = Object.create(var11, {
                        constructor: {
                            value: var12
                        }
                    });
                    var22 = var11;
                    var20 = var13;
                    var9 = new var22[var12](var21, var20, var19);
                    var9 = var9 instanceof Object ? var9 : var11;
                    var13 = var5.RegExp;
                    var11 = var5.HermesInternal;
                    var11 = var11.concat;
                    var15 = '(^|_|[A-Z])';
                    var14 = 's?([A-Z]|_|$)';
                    var21 = var11.bind(var15)(var17, var14);
                    var12 = var13.prototype;
                    var12 = Object.create(var12, {
                        constructor: {
                            value: var13
                        }
                    });
                    var22 = var12;
                    var11 = new var22[var13](var21, var20);
                    var11 = var11 instanceof Object ? var11 : var12;
                    var13 = var5.RegExp;
                    var5 = var5.HermesInternal;
                    var12 = var5.concat;
                    var20 = 's?([A-Z]|_|$)|(^|_|[a-z])';
                    var22 = var15;
                    var21 = var17;
                    var19 = var16;
                    var18 = var14;
                    var21 = var22[var12](var21, var20, var19, var18, var17);
                    var12 = var13.prototype;
                    var12 = Object.create(var12, {
                        constructor: {
                            value: var13
                        }
                    });
                    var22 = var12;
                    var5 = new var22[var13](var21, var20);
                    var5 = var5 instanceof Object ? var5 : var12;
                    if (!var8) {
                        _fun43864_ip = 456;
                        continue _fun43864
                    }
                case 453:
                    var11 = var5;
                case 456:
                    var8 = var11.test;
                    var5 = var8.bind;
                    var5 = var5.bind(var8)(var11);
                    var _closure3_slot6 = var5;
                    var8 = var10.test;
                    var5 = var8.bind;
                    var5 = var5.bind(var8)(var10);
                    var _closure3_slot7 = var5;
                    var8 = var9.test;
                    var5 = var8.bind;
                    var5 = var5.bind(var8)(var9);
                    var _closure3_slot8 = var5;
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var1 = 26;
                    var1 = var8[var1];
                    var6 = var5.bind(var6)(var1);
                    var5 = var6.orderBy;
                    var1 = new Array(2);
                    var8 = function(arg0) { // Environment: var0
                        _fun43865: for (var _fun43865_ip = 0;;) switch (_fun43865_ip) {
                            case 0:
                                var12 = arg0;
                                var0 = var12.uniqueName;
                                var2 = null;
                                var0 = var2 != var0;
                                if (var0) {
                                    _fun43865_ip = 60;
                                    continue _fun43865
                                }
                            case 18:
                                var1 = _closure3_slot5;
                                var4 = var12.name;
                                if (var1) {
                                    _fun43865_ip = 38;
                                    continue _fun43865
                                }
                            case 33:
                                var13 = var4;
                                _fun43865_ip = 58;
                                continue _fun43865;
                            case 38:
                                var3 = var4.split;
                                var1 = '~';
                                var3 = var3.bind(var4)(var1);
                                var1 = 0;
                                var13 = var3[var1];
                            case 58:
                                _fun43865_ip = 71;
                                continue _fun43865;
                            case 60:
                                var3 = var12.names;
                                var1 = 0;
                                var13 = var3[var1];
                            case 71:
                                var6 = var13;
                                if (var0) {
                                    _fun43865_ip = 82;
                                    continue _fun43865
                                }
                            case 77:
                                var6 = var12.id;
                            case 82:
                                var1 = var2 == var13;
                                var0 = 0;
                                if (var1) {
                                    _fun43865_ip = 346;
                                    continue _fun43865
                                }
                            case 94:
                                var1 = var2 == var6;
                                var0 = 0;
                                if (var1) {
                                    _fun43865_ip = 346;
                                    continue _fun43865
                                }
                            case 106:
                                var1 = var13.toLowerCase;
                                var4 = var1.bind(var13)();
                                var3 = _closure3_slot2;
                                var8 = 0;
                                if (!(var4 === var3)) {
                                    _fun43865_ip = 132;
                                    continue _fun43865
                                }
                            case 129:
                                var8 = 4;
                            case 132:
                                var3 = _closure3_slot6;
                                var11 = undefined;
                                var3 = var3.bind(var11)(var4);
                                if (var3) {
                                    _fun43865_ip = 160;
                                    continue _fun43865
                                }
                            case 146:
                                var3 = _closure3_slot6;
                                var3 = var3.bind(var11)(var13);
                                var7 = 0;
                                if (!var3) {
                                    _fun43865_ip = 163;
                                    continue _fun43865
                                }
                            case 160:
                                var7 = 2;
                            case 163:
                                var3 = _closure3_slot7;
                                var4 = var3.bind(var11)(var13);
                                var3 = 1;
                                var5 = var3;
                                if (var4) {
                                    _fun43865_ip = 217;
                                    continue _fun43865
                                }
                            case 181:
                                var9 = _closure3_slot4;
                                var4 = 0;
                                if (!var9) {
                                    _fun43865_ip = 214;
                                    continue _fun43865
                                }
                            case 190:
                                var9 = _closure3_slot8;
                                var9 = var9.bind(var11)(var13);
                                var4 = 0;
                                if (!var9) {
                                    _fun43865_ip = 214;
                                    continue _fun43865
                                }
                            case 204:
                                var4 = 0.75;
                            case 214:
                                var5 = var4;
                            case 217:
                                var9 = _closure3_slot3;
                                var4 = 0;
                                if (!var9) {
                                    _fun43865_ip = 256;
                                    continue _fun43865
                                }
                            case 226:
                                var11 = _closure3_slot1;
                                var9 = var11.isFavoriteEmojiWithoutFetchingLatest;
                                var9 = var9.bind(var11)(var12);
                                var4 = 0;
                                if (!var9) {
                                    _fun43865_ip = 256;
                                    continue _fun43865
                                }
                            case 246:
                                var4 = 0.5;
                            case 256:
                                var3 = var3 + var8;
                                var3 = var3 + var7;
                                var3 = var3 + var5;
                                var3 = var3 + var4;
                                var5 = _closure3_slot0;
                                var4 = _closure1_slot23;
                                var4 = var4.REACTION;
                                if (!(var5 !== var4)) {
                                    _fun43865_ip = 310;
                                    continue _fun43865
                                }
                            case 293:
                                var5 = _closure1_slot41;
                                var4 = var5.getScore;
                                var4 = var4.bind(var5)(var6);
                                _fun43865_ip = 325;
                                continue _fun43865;
                            case 310:
                                var5 = _closure1_slot42;
                                var1 = var5.getScore;
                                var4 = var1.bind(var5)(var6);
                            case 325:
                                var1 = var3;
                                if (!(var2 != var4)) {
                                    _fun43865_ip = 343;
                                    continue _fun43865
                                }
                            case 332:
                                var2 = 100;
                                var2 = var4 / var2;
                                var1 = var3 * var2;
                            case 343:
                                var0 = var1;
                            case 346:
                                return var0;
                        }
                    };
                    var1[0] = var8;
                    var0 = function(arg0) { // Environment: var0
                        _fun43866: for (var _fun43866_ip = 0;;) switch (_fun43866_ip) {
                            case 0:
                                var1 = arg0;
                                var2 = var1.names;
                                var0 = null;
                                if (!(var0 == var2)) {
                                    _fun43866_ip = 21;
                                    continue _fun43866
                                }
                            case 14:
                                var0 = var1.name;
                                _fun43866_ip = 32;
                                continue _fun43866;
                            case 21:
                                var2 = var1.names;
                                var1 = 0;
                                var0 = var2[var1];
                            case 32:
                                return var0;
                        }
                    };
                    var1[1] = var0;
                    var0 = ['desc', 'asc'];
                    var2 = var5.bind(var6)(var7, var1, var0);
                case 578:
                    var0 = var2;
                    if (!(var4 > var3)) {
                        _fun43864_ip = 596;
                        continue _fun43864
                    }
                case 585:
                    var1 = var2.slice;
                    var0 = var1.bind(var2)(var3, var4);
                case 596:
                    return var0;
            }
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'searchWithoutFetchingLatest';
        var4.key = var6;
        var6 = function arg0() {
            _fun43867: for (var _fun43867_ip = 0;;) switch (_fun43867_ip) {
                case 0:
                    var1 = arg0;
                    var7 = this;
                    var9 = var1.channel;
                    var _closure3_slot0 = var9;
                    var6 = var1.query;
                    var8 = var1.count;
                    var12 = undefined;
                    if (!(var8 === var12)) {
                        _fun43867_ip = 37;
                        continue _fun43867
                    }
                case 35:
                    var8 = 0;
                case 37:
                    var5 = var1.intention;
                    var _closure3_slot1 = var5;
                    var2 = var1.includeExternalGuilds;
                    if (!(var2 === var12)) {
                        _fun43867_ip = 59;
                        continue _fun43867
                    }
                case 57:
                    var2 = true;
                case 59:
                    var _closure3_slot2 = var2;
                    var2 = var1.matchComparator;
                    var1 = var1.showOnlyUnicode;
                    var _closure3_slot3 = var1;
                    var _closure3_slot4 = var12;
                    var3 = _closure1_slot48;
                    var3 = var3.bind(var12)();
                    var3 = var6.toLowerCase;
                    var10 = var3.bind(var6)();
                    var4 = var10.replaceAll;
                    var3 = /[ _]/g;
                    var11 = '';
                    var10 = var4.bind(var10)(var3, var11);
                    var4 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var3 = 35;
                    var3 = var13[var3];
                    var4 = var4.bind(var12)(var3);
                    var3 = var4.escape;
                    var10 = var3.bind(var4)(var10);
                    var4 = null;
                    if (!(var4 == var2)) {
                        _fun43867_ip = 228;
                        continue _fun43867
                    }
                case 171:
                    var3 = global;
                    var12 = var3.RegExp;
                    var3 = var3.HermesInternal;
                    var3 = var3.concat;
                    var18 = var3.bind(var11)(var10);
                    var3 = var12.prototype;
                    var10 = Object.create(var3, {
                        constructor: {
                            value: var12
                        }
                    });
                    var17 = 'i';
                    var19 = var10;
                    var3 = new var19[var12](var18, var17, var16);
                    var3 = var3 instanceof Object ? var3 : var10;
                    _closure3_slot4 = var3;
                    var2 = function arg0() {
                        var5 = arg0;
                        var2 = _closure3_slot4;
                        var1 = var2.test;
                        var4 = var5.replaceAll;
                        var3 = '_';
                        var0 = '';
                        var0 = var4.bind(var5)(var3, var0);
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                case 228:
                    var3 = var4 != var9;
                    var4 = null;
                    if (!var3) {
                        _fun43867_ip = 247;
                        continue _fun43867
                    }
                case 237:
                    var3 = var9.getGuildId;
                    var4 = var3.bind(var9)();
                case 247:
                    var3 = _closure1_slot40;
                    var1 = var3.get;
                    var4 = var1.bind(var3)(var4);
                    var1 = var4.nameMatchesChain;
                    var3 = var1.bind(var4)(var2);
                    var2 = var3.reduce;
                    var1 = {};
                    var9 = new Array(0);
                    var1.unlocked = var9;
                    var9 = new Array(0);
                    var1.locked = var9;
                    var0 = function(arg0, arg1) { // Environment: var0
                        _fun43869: for (var _fun43869_ip = 0;;) switch (_fun43869_ip) {
                            case 0:
                                var0 = arg0;
                                var3 = arg1;
                                var2 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var1 = 43;
                                var1 = var5[var1];
                                var7 = undefined;
                                var6 = var2.bind(var7)(var1);
                                var5 = var6.getEmojiUnavailableReason;
                                var1 = {};
                                var1.emoji = var3;
                                var8 = _closure3_slot0;
                                var1.channel = var8;
                                var8 = _closure3_slot1;
                                var1.intention = var8;
                                var8 = _closure3_slot2;
                                var1.forceIncludeExternalGuilds = var8;
                                var5 = var5.bind(var6)(var1);
                                var1 = _closure1_slot22;
                                var1 = var1.PREMIUM_LOCKED;
                                if (!(var5 === var1)) {
                                    _fun43869_ip = 117;
                                    continue _fun43869
                                }
                            case 92:
                                var1 = _closure3_slot3;
                                if (var1) {
                                    _fun43869_ip = 117;
                                    continue _fun43869
                                }
                            case 99:
                                var6 = var0.locked;
                                var1 = var6.push;
                                var1 = var1.bind(var6)(var3);
                                _fun43869_ip = 196;
                                continue _fun43869;
                            case 117:
                                var1 = null;
                                var1 = var1 != var5;
                                if (var1) {
                                    _fun43869_ip = 177;
                                    continue _fun43869
                                }
                            case 126:
                                var2 = _closure3_slot3;
                                if (!var2) {
                                    _fun43869_ip = 174;
                                    continue _fun43869
                                }
                            case 133:
                                var5 = var3.type;
                                var6 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var4 = 44;
                                var4 = var8[var4];
                                var4 = var6.bind(var7)(var4);
                                var4 = var4.EmojiTypes;
                                var4 = var4.UNICODE;
                                var2 = var5 !== var4;
                            case 174:
                                var1 = var2;
                            case 177:
                                if (var1) {
                                    _fun43869_ip = 196;
                                    continue _fun43869
                                }
                            case 180:
                                var2 = var0.unlocked;
                                var1 = var2.push;
                                var1 = var1.bind(var2)(var3);
                            case 196:
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var0, var1);
                    var0 = {};
                    var3 = var7.getSearchResultsOrder;
                    var18 = var1.unlocked;
                    var19 = var7;
                    var17 = var6;
                    var16 = var8;
                    var15 = var5;
                    var14 = var4;
                    var2 = var19[var3](var18, var17, var16, var15, var14, var13);
                    var0.unlocked = var2;
                    var3 = var7.getSearchResultsOrder;
                    var18 = var1.locked;
                    var16 = 0;
                    var19 = var7;
                    var17 = var6;
                    var15 = var5;
                    var14 = var4;
                    var1 = var19[var3](var18, var17, var16, var15, var14, var13);
                    var0.locked = var1;
                    return var0;
            }
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'getUsableCustomEmojiById';
        var4.key = var6;
        var6 = function arg0() {
            var1 = _closure1_slot48;
            var2 = undefined;
            var1 = var1.bind(var2)();
            var1 = _closure1_slot46;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'getCustomEmojiById';
        var4.key = var6;
        var6 = function arg0() {
            _fun43871: for (var _fun43871_ip = 0;;) switch (_fun43871_ip) {
                case 0:
                    var6 = arg0;
                    var0 = _closure1_slot48;
                    var3 = undefined;
                    var0 = var0.bind(var3)();
                    var0 = _closure1_slot47;
                    var0 = var0.bind(var3)();
                    var4 = var0[var6];
                    var2 = null;
                    var5 = var2 != var4;
                    var0 = undefined;
                    if (!var5) {
                        _fun43871_ip = 79;
                        continue _fun43871
                    }
                case 39:
                    var1 = _closure1_slot36;
                    var5 = var1[var4];
                    var4 = var2 == var5;
                    var1 = undefined;
                    if (var4) {
                        _fun43871_ip = 67;
                        continue _fun43871
                    }
                case 56:
                    var4 = var5.getEmoji;
                    var1 = var4.bind(var5)(var6);
                case 67:
                    var2 = var2 != var1;
                    var0 = undefined;
                    if (!var2) {
                        _fun43871_ip = 79;
                        continue _fun43871
                    }
                case 76:
                    var0 = var1;
                case 79:
                    return var0;
            }
        };
        var4.value = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'getTopEmoji';
        var4.key = var6;
        var6 = function arg0() {
            _fun43872: for (var _fun43872_ip = 0;;) switch (_fun43872_ip) {
                case 0:
                    var2 = arg0;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun43872_ip = 51;
                        continue _fun43872
                    }
                case 9:
                    var3 = _closure1_slot48;
                    var1 = undefined;
                    var1 = var3.bind(var1)();
                    var1 = _closure1_slot40;
                    var0 = var1.get;
                    var1 = var0.bind(var1)(var2);
                    var0 = var1.getTopEmojiWithoutFetchingLatest;
                    var0 = var0.bind(var1)(var2);
                    _fun43872_ip = 58;
                    continue _fun43872;
                case 51:
                    var0 = _closure1_slot31;
                case 58:
                    return var0;
            }
        };
        var4.value = var6;
        var0[17] = var4;
        var4 = {};
        var6 = 'getNewlyAddedEmoji';
        var4.key = var6;
        var6 = function arg0() {
            _fun43873: for (var _fun43873_ip = 0;;) switch (_fun43873_ip) {
                case 0:
                    var2 = arg0;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun43873_ip = 49;
                        continue _fun43873
                    }
                case 9:
                    var3 = _closure1_slot48;
                    var1 = undefined;
                    var1 = var3.bind(var1)();
                    var1 = _closure1_slot40;
                    var0 = var1.get;
                    var1 = var0.bind(var1)(var2);
                    var0 = var1.getNewlyAddedEmojiForGuild;
                    var0 = var0.bind(var1)(var2);
                    _fun43873_ip = 56;
                    continue _fun43873;
                case 49:
                    var0 = _closure1_slot31;
                case 56:
                    return var0;
            }
        };
        var4.value = var6;
        var0[18] = var4;
        var4 = {};
        var6 = 'getTopEmojisMetadata';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot38;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[19] = var4;
        var4 = {};
        var6 = 'hasUsableEmojiInAnyGuild';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot48;
            var3 = undefined;
            var1 = var1.bind(var3)();
            var2 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 25;
            var1 = var4[var1];
            var2 = var2.bind(var3)(var1);
            var1 = var2.keys;
            var0 = _closure1_slot36;
            var2 = var1.bind(var2)(var0);
            var1 = var2.some;
            var0 = function(arg0) { // Environment: var0
                var1 = _closure1_slot36;
                var0 = arg0;
                var0 = var1[var0];
                var0 = var0.usableEmojis;
                var1 = var0.length;
                var0 = 0;
                var0 = var1 > var0;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[20] = var4;
        var4 = {};
        var6 = 'hasFavoriteEmojis';
        var4.key = var6;
        var5 = function arg0() {
            _fun43877: for (var _fun43877_ip = 0;;) switch (_fun43877_ip) {
                case 0:
                    var2 = _closure1_slot40;
                    var1 = var2.get;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun43877_ip = 46;
                        continue _fun43877
                    }
                case 29:
                    var1 = var1.favoriteEmojisWithoutFetchingLatest;
                    var2 = var1.length;
                    var1 = 0;
                    var0 = var2 > var1;
                case 46:
                    return var0;
            }
        };
        var4.value = var5;
        var0[21] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var9 = var4.bind(var0)(var9);
    var4 = 'EmojiStore';
    var9.displayName = var4;
    var4 = 'EmojiStoreV2';
    var9.persistKey = var4;
    var4 = new Array(1);
    var11 = function(arg0) { // Environment: var5
        var0 = {};
        var2 = arg0;
        var3 = var0;
        var1 = copyDataProperties(var3, var2);
        return var0;
    };
    var4[0] = var11;
    var9.migrations = var4;
    var4 = 32;
    var4 = var7[var4];
    var20 = var8.bind(var0)(var4);
    var4 = {};
    var11 = function() {
        var2 = _closure1_slot28;
        var1 = new Array(0);
        var2.pendingUsages = var1;
        var1 = _closure1_slot28;
        var0 = new Array(0);
        var1.emojiReactionPendingUsages = var0;
        var0 = undefined;
        return var0;
    };
    var4.LOGOUT = var11;
    var11 = function() {
        var1 = _closure1_slot50;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var4.BACKGROUND_SYNC = var11;
    var11 = function arg0() {
        _fun43881: for (var _fun43881_ip = 0;;) switch (_fun43881_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot50;
                var0 = undefined;
                var3 = var3.bind(var0)();
                var4 = _closure1_slot44;
                var3 = var2.guilds;
                var5 = var4.bind(var0)(var3);
                var4 = var5.bind(var0)();
                var3 = var4.done;
                if (var3) {
                    _fun43881_ip = 77;
                    continue _fun43881
                }
            case 43:
                var6 = _closure1_slot53;
                var3 = var4.value;
                var3 = var3.id;
                var3 = var6.bind(var0)(var3);
                var6 = var5.bind(var0)();
                var3 = var6.done;
                var4 = var6;
                if (!var3) {
                    _fun43881_ip = 43;
                    continue _fun43881
                }
            case 77:
                var4 = var2.guilds;
                var3 = var4.every;
                var2 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var0 = var0.emojis;
                    var1 = var0.items;
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var2 = var3.bind(var4)(var2);
                var3 = _closure1_slot33;
                if (var2) {
                    _fun43881_ip = 116;
                    continue _fun43881
                }
            case 108:
                var2 = var3.Unloaded;
                _fun43881_ip = 122;
                continue _fun43881;
            case 116:
                var2 = var3.MaybeLoaded;
            case 122:
                _closure1_slot34 = var2;
                var1 = _closure1_slot52;
                var1 = var1.bind(var0)();
                return var0;
        }
    };
    var4.CONNECTION_OPEN = var11;
    var11 = function arg0() {
        _fun43883: for (var _fun43883_ip = 0;;) switch (_fun43883_ip) {
            case 0:
                var2 = _closure1_slot50;
                var0 = undefined;
                var2 = var2.bind(var0)();
                var2 = arg0;
                var5 = var2.emojis;
                for (var2 in var5)
                    case 30: {
                        case 39: var8 = var2;
                        var7 = _closure1_slot53;
                        var7 = var7.bind(var0)(var8);
                        _fun43883_ip = 30;
                        continue _fun43883;
                    }
            case 53:
                var2 = _closure1_slot33;
                var2 = var2.MaybeLoaded;
                _closure1_slot34 = var2;
                var1 = _closure1_slot52;
                var1 = var1.bind(var0)();
                return var0;
        }
    };
    var4.OVERLAY_INITIALIZE = var11;
    var11 = function arg0() {
        _fun43884: for (var _fun43884_ip = 0;;) switch (_fun43884_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.emojis;
                var2 = _closure1_slot44;
                var0 = undefined;
                var7 = var2.bind(var0)(var3);
                var3 = var7.bind(var0)();
                var2 = var3.done;
                var6 = 1;
                var5 = 0;
                var4 = global;
                if (var2) {
                    _fun43884_ip = 131;
                    continue _fun43884
                }
            case 42:
                var8 = var3.value;
                var2 = _closure1_slot6;
                var2 = var2.bind(var0)(var8, var6);
                var8 = var2[var5];
                var10 = var4.Object;
                var9 = var10.hasOwn;
                var2 = _closure1_slot36;
                var2 = var9.bind(var10)(var2, var8);
                var2 = !var2;
                if (!var2) {
                    _fun43884_ip = 104;
                    continue _fun43884
                }
            case 89:
                var10 = _closure1_slot15;
                var9 = var10.isMember;
                var2 = var9.bind(var10)(var8);
            case 104:
                if (!var2) {
                    _fun43884_ip = 116;
                    continue _fun43884
                }
            case 107:
                var2 = _closure1_slot53;
                var2 = var2.bind(var0)(var8);
            case 116:
                var8 = var7.bind(var0)();
                var2 = var8.done;
                var3 = var8;
                if (!var2) {
                    _fun43884_ip = 42;
                    continue _fun43884
                }
            case 131:
                var1 = _closure1_slot52;
                var1 = var1.bind(var0)();
                return var0;
        }
    };
    var4.CACHED_EMOJIS_LOADED = var11;
    var11 = function arg0() {
        _fun43885: for (var _fun43885_ip = 0;;) switch (_fun43885_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guildId;
                var0 = var0.user;
                var4 = var0.id;
                var2 = _closure1_slot19;
                var0 = var2.getCurrentUser;
                var5 = var0.bind(var2)();
                var0 = null;
                var6 = var0 == var5;
                var0 = undefined;
                var2 = undefined;
                if (var6) {
                    _fun43885_ip = 52;
                    continue _fun43885
                }
            case 47:
                var2 = var5.id;
            case 52:
                if (!(var4 === var2)) {
                    _fun43885_ip = 73;
                    continue _fun43885
                }
            case 56:
                var2 = _closure1_slot53;
                var2 = var2.bind(var0)(var3);
                var1 = _closure1_slot52;
                var1 = var1.bind(var0)();
            case 73:
                return var0;
        }
    };
    var4.GUILD_MEMBER_UPDATE = var11;
    var11 = function arg0() {
        _fun43886: for (var _fun43886_ip = 0;;) switch (_fun43886_ip) {
            case 0:
                var0 = arg0;
                var3 = _closure1_slot34;
                var2 = _closure1_slot33;
                var2 = var2.MaybeLoaded;
                var2 = var3 === var2;
                if (!var2) {
                    _fun43886_ip = 51;
                    continue _fun43886
                }
            case 27:
                var3 = var0.guild;
                var3 = var3.emojis;
                var4 = var3.op;
                var3 = 'update';
                var2 = var3 === var4;
            case 51:
                if (!var2) {
                    _fun43886_ip = 76;
                    continue _fun43886
                }
            case 54:
                var3 = var0.guild;
                var3 = var3.emojis;
                var4 = var3.items;
                var3 = null;
                var2 = var3 == var4;
            case 76:
                if (!var2) {
                    _fun43886_ip = 93;
                    continue _fun43886
                }
            case 79:
                var2 = _closure1_slot33;
                var2 = var2.Unloaded;
                _closure1_slot34 = var2;
            case 93:
                var3 = _closure1_slot53;
                var0 = var0.guild;
                var2 = var0.id;
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var1 = _closure1_slot52;
                var1 = var1.bind(var0)();
                return var0;
        }
    };
    var4.GUILD_CREATE = var11;
    var11 = function arg0() {
        var3 = _closure1_slot53;
        var0 = arg0;
        var0 = var0.guild;
        var2 = var0.id;
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var1 = _closure1_slot52;
        var1 = var1.bind(var0)();
        return var0;
    };
    var4.GUILD_UPDATE = var11;
    var11 = function arg0() {
        var0 = arg0;
        var3 = var0.guildId;
        var2 = _closure1_slot53;
        var0 = undefined;
        var2 = var2.bind(var0)(var3);
        var1 = _closure1_slot52;
        var1 = var1.bind(var0)();
        return var0;
    };
    var4.GUILD_EMOJIS_UPDATE = var11;
    var11 = function arg0() {
        var0 = arg0;
        var2 = var0.guild;
        var4 = _closure1_slot51;
        var3 = var2.id;
        var0 = undefined;
        var3 = var4.bind(var0)(var3);
        var4 = _closure1_slot38;
        var3 = var4.delete;
        var2 = var2.id;
        var2 = var3.bind(var4)(var2);
        var1 = _closure1_slot52;
        var1 = var1.bind(var0)();
        return var0;
    };
    var4.GUILD_DELETE = var11;
    var11 = function arg0() {
        _fun43890: for (var _fun43890_ip = 0;;) switch (_fun43890_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.optimistic;
                if (var0) {
                    _fun43890_ip = 16;
                    continue _fun43890
                }
            case 12:
                var0 = false;
                return var0;
            case 16:
                var0 = var1.emoji;
                var0 = var0.id;
                var8 = null;
                if (!(var8 != var0)) {
                    _fun43890_ip = 54;
                    continue _fun43890
                }
            case 33:
                var0 = var1.emoji;
                var2 = var0.id;
                var0 = '0';
                if (!(var0 === var2)) {
                    _fun43890_ip = 126;
                    continue _fun43890
                }
            case 54:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 23;
                var2 = var6[var0];
                var4 = undefined;
                var3 = var5.bind(var4)(var2);
                var2 = var3.getByName;
                var0 = var6[var0];
                var6 = var5.bind(var4)(var0);
                var5 = var6.convertSurrogateToName;
                var0 = var1.emoji;
                var4 = var0.name;
                var0 = false;
                var0 = var5.bind(var6)(var4, var0);
                var0 = var2.bind(var3)(var0);
                _fun43890_ip = 132;
                continue _fun43890;
            case 126:
                var0 = var1.emoji;
            case 132:
                if (!(var8 != var0)) {
                    _fun43890_ip = 390;
                    continue _fun43890
                }
            case 139:
                var2 = new Array(1);
                var2[0] = var0;
                if (!(var8 != var2)) {
                    _fun43890_ip = 366;
                    continue _fun43890
                }
            case 154:
                var3 = _closure1_slot44;
                var7 = undefined;
                var6 = var3.bind(var7)(var2);
                var4 = var6.bind(var7)();
                var3 = var4.done;
                var5 = global;
                if (var3) {
                    _fun43890_ip = 290;
                    continue _fun43890
                }
            case 182:
                var3 = var4.value;
                var11 = var3.id;
                if (!(var8 == var11)) {
                    _fun43890_ip = 202;
                    continue _fun43890
                }
            case 196:
                var11 = var3.uniqueName;
            case 202:
                if (!(var8 == var11)) {
                    _fun43890_ip = 211;
                    continue _fun43890
                }
            case 206:
                var11 = var3.name;
            case 211:
                if (!(var8 != var11)) {
                    _fun43890_ip = 275;
                    continue _fun43890
                }
            case 215:
                var9 = _closure1_slot42;
                var3 = var9.track;
                var3 = var3.bind(var9)(var11);
                var3 = _closure1_slot28;
                var10 = var3.emojiReactionPendingUsages;
                var9 = var10.push;
                var3 = {};
                var3.key = var11;
                var12 = var5.Date;
                var11 = var12.now;
                var11 = var11.bind(var12)();
                var3.timestamp = var11;
                var3 = var9.bind(var10)(var3);
            case 275:
                var9 = var6.bind(var7)();
                var3 = var9.done;
                var4 = var9;
                if (!var3) {
                    _fun43890_ip = 182;
                    continue _fun43890
                }
            case 290:
                var3 = var2.length;
                var2 = 0;
                var3 = var3 > var2;
                var2 = !var3;
                if (!var3) {
                    _fun43890_ip = 349;
                    continue _fun43890
                }
            case 307:
                var4 = _closure1_slot34;
                var3 = _closure1_slot33;
                var3 = var3.Loaded;
                var3 = var4 !== var3;
                if (!var3) {
                    _fun43890_ip = 346;
                    continue _fun43890
                }
            case 328:
                var5 = _closure1_slot34;
                var4 = _closure1_slot33;
                var4 = var4.MaybeLoaded;
                var3 = var5 !== var4;
            case 346:
                var2 = var3;
            case 349:
                if (var2) {
                    _fun43890_ip = 366;
                    continue _fun43890
                }
            case 352:
                var2 = _closure1_slot42;
                var1 = var2.compute;
                var1 = var1.bind(var2)();
            case 366:
                var2 = _closure1_slot55;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
            case 390:
                var0 = false;
                return var0;
        }
    };
    var4.MESSAGE_REACTION_ADD = var11;
    var11 = function arg0() {
        var0 = arg0;
        var2 = var0.emojiUsed;
        var1 = _closure1_slot55;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var4.EMOJI_TRACK_USAGE = var11;
    var11 = function arg0() {
        _fun43892: for (var _fun43892_ip = 0;;) switch (_fun43892_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.settings;
                var4 = var1.type;
                var2 = var0.wasSaved;
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 38;
                var3 = var3[var0];
                var0 = undefined;
                var6 = var5.bind(var0)(var3);
                var5 = var6.setEmojiLocale;
                var3 = _closure1_slot12;
                var3 = var3.locale;
                var3 = var5.bind(var6)(var3);
                var3 = _closure1_slot26;
                var3 = var3.FRECENCY_AND_FAVORITES_SETTINGS;
                if (!(var4 === var3)) {
                    _fun43892_ip = 113;
                    continue _fun43892
                }
            case 80:
                if (!var2) {
                    _fun43892_ip = 113;
                    continue _fun43892
                }
            case 83:
                var3 = _closure1_slot28;
                var2 = new Array(0);
                var3.pendingUsages = var2;
                var2 = _closure1_slot28;
                var1 = new Array(0);
                var2.emojiReactionPendingUsages = var1;
                return var0;
            case 113:
                var0 = false;
                return var0;
        }
    };
    var4.USER_SETTINGS_PROTO_UPDATE = var11;
    var4.GUILD_ROLE_CREATE = var10;
    var4.GUILD_ROLE_UPDATE = var10;
    var10 = function arg0() {
        var0 = arg0;
        var4 = var0.guildId;
        var7 = var0.topEmojisMetadata;
        var3 = _closure1_slot38;
        var2 = var3.set;
        var1 = {};
        var6 = var7.map;
        var5 = function(arg0) { // Environment: var5
            var0 = arg0;
            var0 = var0.emojiId;
            return var0;
        };
        var5 = var6.bind(var7)(var5);
        var1.emojiIds = var5;
        var7 = _closure1_slot1;
        var8 = _closure1_slot2;
        var5 = 41;
        var6 = var8[var5];
        var0 = undefined;
        var6 = var7.bind(var0)(var6);
        var5 = var8[var5];
        var5 = var7.bind(var0)(var5);
        var5 = var5.bind(var0)();
        var8 = var6.bind(var0)(var5);
        var7 = var8.add;
        var6 = 1;
        var5 = 'days';
        var6 = var7.bind(var8)(var6, var5);
        var5 = var6.valueOf;
        var5 = var5.bind(var6)();
        var1.topEmojisTTL = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var0;
    };
    var4.TOP_EMOJIS_FETCH_SUCCESS = var10;
    var5 = function arg0() {
        _fun43895: for (var _fun43895_ip = 0;;) switch (_fun43895_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var0 = global;
                var4 = var0.Set;
                var0 = _closure1_slot28;
                var6 = var0.expandedSectionsByGuildIds;
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var7 = var3;
                var0 = new var7[var4](var6, var5);
                var3 = var0 instanceof Object ? var0 : var3;
                var0 = _closure1_slot28;
                var4 = var0.expandedSectionsByGuildIds;
                var0 = var4.has;
                var0 = var0.bind(var4)(var2);
                if (var0) {
                    _fun43895_ip = 84;
                    continue _fun43895
                }
            case 72:
                var0 = var3.add;
                var0 = var0.bind(var3)(var2);
                _fun43895_ip = 94;
                continue _fun43895;
            case 84:
                var0 = var3.delete;
                var0 = var0.bind(var3)(var2);
            case 94:
                var0 = {};
                var5 = _closure1_slot28;
                var6 = var0;
                var2 = copyDataProperties(var6, var5);
                var2 = 'expandedSectionsByGuildIds';
                var0[var2] = var3;
                _closure1_slot28 = var0;
                var0 = undefined;
                return var0;
        }
    };
    var4.TOGGLE_GUILD_EXPANDED_STATE = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {
        constructor: {
            value: var9
        }
    });
    var21 = var5;
    var19 = var4;
    var4 = new var21[var9](var20, var19, var18);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 46;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/emojis/EmojiStore.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.LoadState = var3;
    var2.EmojiDisambiguations = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [15, 17, 18, 57, 5, 6, 7, 1590, 4740, 1685, 1310, 1681, 1374, 1674, 1410, 4376, 1621, 4741, 4742, 1624, 660, 4743, 665, 3104, 4744, 21, 22, 667, 1646, 1665, 20, 4745, 806, 3607, 44, 3326, 1304, 4746, 4747, 4779, 3082, 3045, 4781, 3108, 3107, 566, 2]);