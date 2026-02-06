// modules/autocompleter/UserSearchManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var6;
    var0 = function arg0, arg1() {
        _fun55140: for (var _fun55140_ip = 0;;) switch (_fun55140_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun55140_ip = 46;
                    continue _fun55140
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun55140_ip = 55;
                    continue _fun55140
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun55140_ip = 343;
                    continue _fun55140
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun55140_ip = 323;
                    continue _fun55140
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun55140_ip = 283;
                    continue _fun55140
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun55140_ip = 270;
                    continue _fun55140
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
                    _fun55140_ip = 163;
                    continue _fun55140
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun55140_ip = 179;
                    continue _fun55140
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun55140_ip = 249;
                    continue _fun55140
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun55140_ip = 249;
                    continue _fun55140
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun55140_ip = 234;
                    continue _fun55140
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun55140_ip = 247;
                    continue _fun55140
                }
            case 234:
                var8 = _closure1_slot19;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun55140_ip = 265;
                continue _fun55140;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun55140_ip = 283;
                continue _fun55140;
            case 270:
                var6 = _closure1_slot19;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun55140_ip = 323;
                    continue _fun55140
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
                    _fun55140_ip = 330;
                    continue _fun55140
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun55141: for (var _fun55141_ip = 0;;) switch (_fun55141_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun55141_ip = 56;
                                continue _fun55141
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
                            _fun55141_ip = 67;
                            continue _fun55141;
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
    var _closure1_slot18 = var0;
    var0 = function arg0, arg1() {
        _fun55142: for (var _fun55142_ip = 0;;) switch (_fun55142_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun55142_ip = 23;
                    continue _fun55142
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun55142_ip = 33;
                    continue _fun55142
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
                    _fun55142_ip = 70;
                    continue _fun55142
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun55142_ip = 55;
                    continue _fun55142
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function() {
        _fun55143: for (var _fun55143_ip = 0;;) switch (_fun55143_ip) {
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
                _fun55143_ip = 74;
                continue _fun55143;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
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
    var0 = function arg0() {
        _fun55146: for (var _fun55146_ip = 0;;) switch (_fun55146_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun55146_ip = 476;
                    continue _fun55146
                }
            case 12:
                var5 = _closure1_slot13;
                var4 = var5.isBlockedOrIgnored;
                var1 = var3.id;
                var1 = var4.bind(var5)(var1);
                if (var1) {
                    _fun55146_ip = 476;
                    continue _fun55146
                }
            case 41:
                var1 = {};
                var4 = var3.id;
                var1.id = var4;
                var5 = var3.discriminator;
                var4 = '0';
                if (!(var4 === var5)) {
                    _fun55146_ip = 75;
                    continue _fun55146
                }
            case 68:
                var4 = var3.username;
                _fun55146_ip = 114;
                continue _fun55146;
            case 75:
                var9 = var3.username;
                var8 = var3.discriminator;
                var5 = global;
                var5 = var5.HermesInternal;
                var7 = var5.concat;
                var6 = '';
                var5 = '#';
                var4 = var7.bind(var6)(var9, var5, var8);
            case 114:
                var1.username = var4;
                var4 = {};
                var1.nicknames = var4;
                var5 = _closure1_slot1;
                var6 = _closure1_slot3;
                var4 = 12;
                var4 = var6[var4];
                var6 = undefined;
                var5 = var5.bind(var6)(var4);
                var4 = var5.getGlobalName;
                var4 = var4.bind(var5)(var3);
                if (!(var0 != var4)) {
                    _fun55146_ip = 174;
                    continue _fun55146
                }
            case 162:
                var4 = var3.globalName;
                var1.globalName = var4;
            case 174:
                var4 = var3.bot;
                if (!var4) {
                    _fun55146_ip = 191;
                    continue _fun55146
                }
            case 183:
                var4 = true;
                var1.isBot = var4;
            case 191:
                var4 = _closure1_slot10;
                var4 = var3 instanceof var4;
                if (var4) {
                    _fun55146_ip = 290;
                    continue _fun55146
                }
            case 202:
                var4 = 'flags';
                var4 = var4 in var3;
                if (var4) {
                    _fun55146_ip = 223;
                    continue _fun55146
                }
            case 213:
                var4 = false;
                var1.isProvisional = var4;
                _fun55146_ip = 302;
                continue _fun55146;
            case 223:
                var5 = _closure1_slot2;
                var7 = _closure1_slot3;
                var4 = 13;
                var4 = var7[var4];
                var8 = var5.bind(var6)(var4);
                var7 = var8.hasFlag;
                var4 = var3.flags;
                var9 = var0 != var4;
                var5 = 0;
                if (!var9) {
                    _fun55146_ip = 266;
                    continue _fun55146
                }
            case 263:
                var5 = var4;
            case 266:
                var4 = _closure1_slot15;
                var4 = var4.PROVISIONAL_ACCOUNT;
                var4 = var7.bind(var8)(var5, var4);
                var1.isProvisional = var4;
                _fun55146_ip = 302;
                continue _fun55146;
            case 290:
                var4 = var3.isProvisional;
                var1.isProvisional = var4;
            case 302:
                var7 = _closure1_slot13;
                var5 = var7.isFriend;
                var4 = var3.id;
                var4 = var5.bind(var7)(var4);
                if (!var4) {
                    _fun55146_ip = 359;
                    continue _fun55146
                }
            case 325:
                var4 = true;
                var1.isFriend = var4;
                var7 = _closure1_slot13;
                var5 = var7.getNickname;
                var4 = var3.id;
                var4 = var5.bind(var7)(var4);
                var1.friendNickname = var4;
            case 359:
                var4 = _closure1_slot10;
                var4 = var3 instanceof var4;
                if (var4) {
                    _fun55146_ip = 458;
                    continue _fun55146
                }
            case 370:
                var4 = 'flags';
                var4 = var4 in var3;
                if (var4) {
                    _fun55146_ip = 391;
                    continue _fun55146
                }
            case 381:
                var4 = false;
                var1.isStaff = var4;
                _fun55146_ip = 474;
                continue _fun55146;
            case 391:
                var5 = _closure1_slot2;
                var7 = _closure1_slot3;
                var4 = 13;
                var4 = var7[var4];
                var6 = var5.bind(var6)(var4);
                var5 = var6.hasFlag;
                var7 = var3.flags;
                var8 = var0 != var7;
                var4 = 0;
                if (!var8) {
                    _fun55146_ip = 434;
                    continue _fun55146
                }
            case 431:
                var4 = var7;
            case 434:
                var2 = _closure1_slot15;
                var2 = var2.STAFF;
                var2 = var5.bind(var6)(var4, var2);
                var1.isStaff = var2;
                _fun55146_ip = 474;
                continue _fun55146;
            case 458:
                var2 = var3.isStaff;
                var2 = var2.bind(var3)();
                var1.isStaff = var2;
            case 474:
                return var1;
            case 476:
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun55147: for (var _fun55147_ip = 0;;) switch (_fun55147_ip) {
            case 0:
                var1 = arg0;
                var0 = arg2;
                var4 = null;
                if (!(var4 != var1)) {
                    _fun55147_ip = 47;
                    continue _fun55147
                }
            case 12:
                var2 = var1.nicknames;
                var3 = var4 != var0;
                var1 = null;
                if (!var3) {
                    _fun55147_ip = 40;
                    continue _fun55147
                }
            case 27:
                var3 = '';
                var1 = null;
                if (!(var3 !== var0)) {
                    _fun55147_ip = 40;
                    continue _fun55147
                }
            case 37:
                var1 = var0;
            case 40:
                var0 = arg1;
                var2[var0] = var1;
            case 47:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function arg0() {
        _fun55148: for (var _fun55148_ip = 0;;) switch (_fun55148_ip) {
            case 0:
                var3 = arg0;
                var _closure2_slot0 = var3;
                var0 = new Array(0);
                var _closure2_slot1 = var0;
                var2 = null;
                if (!(var2 != var3)) {
                    _fun55148_ip = 76;
                    continue _fun55148
                }
            case 23:
                var5 = _closure1_slot9;
                var4 = var3.type;
                var2 = undefined;
                var4 = var5.bind(var2)(var4);
                if (!var4) {
                    _fun55148_ip = 76;
                    continue _fun55148
                }
            case 45:
                var3 = var3.recipients;
                if (!(var2 === var3)) {
                    _fun55148_ip = 59;
                    continue _fun55148
                }
            case 55:
                var3 = new Array(0);
            case 59:
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun55149: for (var _fun55149_ip = 0;;) switch (_fun55149_ip) {
                        case 0:
                            var3 = _closure1_slot21;
                            var4 = _closure1_slot14;
                            var1 = var4.getUser;
                            var0 = arg0;
                            var1 = var1.bind(var4)(var0);
                            var0 = undefined;
                            var3 = var3.bind(var0)(var1);
                            var5 = _closure2_slot0;
                            var4 = null;
                            if (!(var4 != var5)) {
                                _fun55149_ip = 64;
                                continue _fun55149
                            }
                        case 45:
                            var4 = _closure1_slot22;
                            var2 = _closure2_slot0;
                            var2 = var2.id;
                            var2 = var4.bind(var0)(var3, var2);
                        case 64:
                            var2 = _closure2_slot1;
                            var1 = var2.push;
                            var1 = var1.bind(var2)(var3);
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var0;
            case 76:
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function arg0, arg1() {
        var3 = arg0;
        var0 = arg1;
        var _closure2_slot0 = var0;
        var0 = new Array(0);
        var _closure2_slot1 = var0;
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var1
            _fun55151: for (var _fun55151_ip = 0;;) switch (_fun55151_ip) {
                case 0:
                    var2 = arg0;
                    var4 = _closure1_slot21;
                    var3 = var2.user;
                    var0 = undefined;
                    var3 = var4.bind(var0)(var3);
                    var4 = null;
                    if (!(var4 != var3)) {
                        _fun55151_ip = 66;
                        continue _fun55151
                    }
                case 28:
                    var5 = _closure1_slot22;
                    var4 = _closure2_slot0;
                    var2 = var2.nick;
                    var2 = var5.bind(var0)(var3, var4, var2);
                    var2 = _closure2_slot1;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3);
                case 66:
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot24 = var0;
    var0 = function arg0() {
        _fun55152: for (var _fun55152_ip = 0;;) switch (_fun55152_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.message;
                var7 = var0.nicknameContextId;
                var6 = undefined;
                var _closure2_slot0 = var6;
                var _closure2_slot1 = var6;
                var5 = _closure1_slot11;
                var2 = var5.getChannel;
                var0 = var3.channel_id;
                var8 = var2.bind(var5)(var0);
                var2 = null;
                if (!(var2 == var7)) {
                    _fun55152_ip = 120;
                    continue _fun55152
                }
            case 54:
                var0 = var2 == var8;
                var5 = undefined;
                if (var0) {
                    _fun55152_ip = 73;
                    continue _fun55152
                }
            case 63:
                var0 = var8.isPrivate;
                var5 = var0.bind(var8)();
            case 73:
                var0 = true;
                if (!(var0 !== var5)) {
                    _fun55152_ip = 100;
                    continue _fun55152
                }
            case 79:
                var5 = var2 == var8;
                var0 = undefined;
                if (var5) {
                    _fun55152_ip = 98;
                    continue _fun55152
                }
            case 88:
                var5 = var8.getGuildId;
                var0 = var5.bind(var8)();
            case 98:
                _fun55152_ip = 117;
                continue _fun55152;
            case 100:
                var9 = var2 == var8;
                var5 = undefined;
                if (var9) {
                    _fun55152_ip = 114;
                    continue _fun55152
                }
            case 109:
                var5 = var8.id;
            case 114:
                var0 = var5;
            case 117:
                var7 = var0;
            case 120:
                _closure2_slot0 = var7;
                var0 = new Array(0);
                _closure2_slot1 = var0;
                var5 = var3.author;
                if (!(var2 != var5)) {
                    _fun55152_ip = 185;
                    continue _fun55152
                }
            case 142:
                var8 = _closure1_slot21;
                var5 = var3.author;
                var5 = var8.bind(var6)(var5);
                if (!(var2 != var5)) {
                    _fun55152_ip = 185;
                    continue _fun55152
                }
            case 161:
                var8 = var0.push;
                var8 = var8.bind(var0)(var5);
                if (!(var2 != var7)) {
                    _fun55152_ip = 185;
                    continue _fun55152
                }
            case 175:
                var4 = _closure1_slot22;
                var4 = var4.bind(var6)(var5, var7);
            case 185:
                var3 = var3.mentions;
                if (!(var2 != var3)) {
                    _fun55152_ip = 210;
                    continue _fun55152
                }
            case 195:
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun55153: for (var _fun55153_ip = 0;;) switch (_fun55153_ip) {
                        case 0:
                            var3 = _closure1_slot21;
                            var0 = undefined;
                            var1 = arg0;
                            var3 = var3.bind(var0)(var1);
                            var5 = null;
                            if (!(var5 != var3)) {
                                _fun55153_ip = 62;
                                continue _fun55153
                            }
                        case 23:
                            var6 = _closure2_slot1;
                            var4 = var6.push;
                            var4 = var4.bind(var6)(var3);
                            var4 = _closure2_slot0;
                            if (!(var5 != var4)) {
                                _fun55153_ip = 62;
                                continue _fun55153
                            }
                        case 48:
                            var2 = _closure1_slot22;
                            var1 = _closure2_slot0;
                            var1 = var2.bind(var0)(var3, var1);
                        case 62:
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
            case 210:
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = global;
    var8 = var0.Object;
    var4 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.isPrivate;
    var _closure1_slot9 = var1;
    var1 = 6;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 7;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot11 = var1;
    var1 = 8;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot12 = var1;
    var1 = 9;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot13 = var1;
    var1 = 10;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot14 = var1;
    var1 = 11;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.UserFlags;
    var _closure1_slot15 = var1;
    var1 = {};
    var4 = 'UPDATE_USERS';
    var1.UPDATE_USERS = var4;
    var4 = 'USER_RESULTS';
    var1.USER_RESULTS = var4;
    var4 = 'QUERY_SET';
    var1.QUERY_SET = var4;
    var4 = 'QUERY_CLEAR';
    var1.QUERY_CLEAR = var4;
    var4 = 'REQUEST_DEBUG_STATE';
    var1.REQUEST_DEBUG_STATE = var4;
    var4 = 'DEBUG_STATE';
    var1.DEBUG_STATE = var4;
    var _closure1_slot16 = var1;
    var1 = function() { // Environment: var3
        var3 = _closure1_slot8;
        var2 = function arg0, arg1() {
            _fun55155: for (var _fun55155_ip = 0;;) switch (_fun55155_ip) {
                case 0:
                    var1 = arguments[2];
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var0 = undefined;
                    if (!(var1 === var0)) {
                        _fun55155_ip = 21;
                        continue _fun55155
                    }
                case 18:
                    var1 = 10;
                case 21:
                    var6 = _closure1_slot7;
                    var5 = _closure2_slot0;
                    var5 = var6.bind(var0)(var2, var5);
                    var4 = function(arg0) { // Environment: var4
                        _fun55156: for (var _fun55156_ip = 0;;) switch (_fun55156_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = var0.data;
                                var2 = null;
                                var0 = var2 != var1;
                                if (!var0) {
                                    _fun55156_ip = 39;
                                    continue _fun55156
                                }
                            case 17:
                                var4 = var1.type;
                                var3 = _closure1_slot16;
                                var3 = var3.USER_RESULTS;
                                var0 = var4 === var3;
                            case 39:
                                if (!var0) {
                                    _fun55156_ip = 65;
                                    continue _fun55156
                                }
                            case 42:
                                var4 = var1.uuid;
                                var3 = _closure3_slot0;
                                var3 = var3._uuid;
                                var0 = var4 === var3;
                            case 65:
                                if (!var0) {
                                    _fun55156_ip = 146;
                                    continue _fun55156
                                }
                            case 68:
                                var3 = _closure3_slot0;
                                var4 = var3._currentQuery;
                                var3 = false;
                                if (!(var3 !== var4)) {
                                    _fun55156_ip = 108;
                                    continue _fun55156
                                }
                            case 87:
                                var4 = _closure3_slot0;
                                var3 = var4._callback;
                                var1 = var1.payload;
                                var1 = var3.bind(var4)(var1);
                            case 108:
                                var1 = _closure3_slot0;
                                var1 = var1._currentQuery;
                                if (!(var2 != var1)) {
                                    _fun55156_ip = 132;
                                    continue _fun55156
                                }
                            case 122:
                                var1 = _closure3_slot0;
                                var1._currentQuery = var2;
                            case 132:
                                var1 = _closure3_slot0;
                                var0 = var1._setNextQuery;
                                var0 = var0.bind(var1)();
                            case 146:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var2.handleMessages = var4;
                    var4 = arg0;
                    var2._worker = var4;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var3 = 14;
                    var3 = var5[var3];
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.v4;
                    var3 = var3.bind(var4)();
                    var2._uuid = var3;
                    var3 = arg1;
                    var2._callback = var3;
                    var2._limit = var1;
                    var1 = null;
                    var2._currentQuery = var1;
                    var2._nextQuery = var1;
                    var1 = false;
                    var2._subscribed = var1;
                    var1 = var2.subscribe;
                    var1 = var1.bind(var2)();
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'setLimit';
        var0.key = var1;
        var1 = function arg0() {
            _fun55157: for (var _fun55157_ip = 0;;) switch (_fun55157_ip) {
                case 0:
                    var1 = arg0;
                    var0 = this;
                    var0._limit = var1;
                    var3 = var0._nextQuery;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun55157_ip = 36;
                        continue _fun55157
                    }
                case 24:
                    var0 = var0._nextQuery;
                    var0.limit = var1;
                case 36:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(7);
        var1[0] = var0;
        var0 = {};
        var5 = 'subscribe';
        var0.key = var5;
        var5 = function() {
            _fun55158: for (var _fun55158_ip = 0;;) switch (_fun55158_ip) {
                case 0:
                    var1 = this;
                    var2 = var1._worker;
                    var0 = null;
                    var0 = var0 == var2;
                    if (var0) {
                        _fun55158_ip = 24;
                        continue _fun55158
                    }
                case 18:
                    var0 = var1._subscribed;
                case 24:
                    if (var0) {
                        _fun55158_ip = 76;
                        continue _fun55158
                    }
                case 27:
                    var5 = var1._worker;
                    var4 = var5.addEventListener;
                    var3 = var1.handleMessages;
                    var2 = 'message';
                    var0 = false;
                    var0 = var4.bind(var5)(var2, var3, var0);
                    var0 = true;
                    var1._subscribed = var0;
                    var0 = var1._setNextQuery;
                    var0 = var0.bind(var1)();
                case 76:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'unsubscribe';
        var0.key = var5;
        var5 = function() {
            _fun55159: for (var _fun55159_ip = 0;;) switch (_fun55159_ip) {
                case 0:
                    var1 = this;
                    var2 = var1._worker;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun55159_ip = 24;
                        continue _fun55159
                    }
                case 18:
                    var0 = var1._subscribed;
                case 24:
                    if (!var0) {
                        _fun55159_ip = 64;
                        continue _fun55159
                    }
                case 27:
                    var5 = var1._worker;
                    var4 = var5.removeEventListener;
                    var3 = var1.handleMessages;
                    var2 = 'message';
                    var0 = false;
                    var2 = var4.bind(var5)(var2, var3, var0);
                    var1._subscribed = var0;
                case 64:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'destroy';
        var0.key = var5;
        var5 = function() {
            var1 = this;
            var0 = var1.clearQuery;
            var0 = var0.bind(var1)();
            var0 = var1.unsubscribe;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'clearQuery';
        var0.key = var5;
        var5 = function() {
            _fun55161: for (var _fun55161_ip = 0;;) switch (_fun55161_ip) {
                case 0:
                    var3 = this;
                    var0 = false;
                    var3._currentQuery = var0;
                    var1 = null;
                    var3._nextQuery = var1;
                    var0 = var3._worker;
                    var0 = var1 != var0;
                    if (!var0) {
                        _fun55161_ip = 38;
                        continue _fun55161
                    }
                case 32:
                    var0 = var3._subscribed;
                case 38:
                    if (!var0) {
                        _fun55161_ip = 88;
                        continue _fun55161
                    }
                case 41:
                    var2 = var3._worker;
                    var1 = var2.postMessage;
                    var0 = {};
                    var3 = var3._uuid;
                    var0.uuid = var3;
                    var3 = _closure1_slot16;
                    var3 = var3.QUERY_CLEAR;
                    var0.type = var3;
                    var0 = var1.bind(var2)(var0);
                case 88:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'setQuery';
        var0.key = var5;
        var5 = function arg0() {
            _fun55162: for (var _fun55162_ip = 0;;) switch (_fun55162_ip) {
                case 0:
                    var0 = arg0;
                    var1 = this;
                    var6 = var0.query;
                    var5 = var0.filters;
                    var2 = var0.blacklist;
                    var4 = var0.boosters;
                    var3 = var0.boosterFallback;
                    var0 = {};
                    var0.query = var6;
                    var0.filters = var5;
                    var0.blacklist = var2;
                    var2 = null;
                    if (!(var2 == var4)) {
                        _fun55162_ip = 61;
                        continue _fun55162
                    }
                case 59:
                    var4 = {};
                case 61:
                    var0.boosters = var4;
                    var4 = var2 != var3;
                    var2 = 1;
                    if (!var4) {
                        _fun55162_ip = 79;
                        continue _fun55162
                    }
                case 76:
                    var2 = var3;
                case 79:
                    var0.boosterFallback = var2;
                    var2 = var1._limit;
                    var0.limit = var2;
                    var1._nextQuery = var0;
                    var0 = var1._setNextQuery;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = '_setNextQuery';
        var0.key = var5;
        var4 = function() {
            _fun55163: for (var _fun55163_ip = 0;;) switch (_fun55163_ip) {
                case 0:
                    var3 = this;
                    var1 = var3._currentQuery;
                    var0 = null;
                    var1 = var0 != var1;
                    if (!var1) {
                        _fun55163_ip = 30;
                        continue _fun55163
                    }
                case 18:
                    var4 = var3._currentQuery;
                    var2 = false;
                    var1 = var2 !== var4;
                case 30:
                    if (var1) {
                        _fun55163_ip = 43;
                        continue _fun55163
                    }
                case 33:
                    var2 = var3._nextQuery;
                    var1 = var0 == var2;
                case 43:
                    if (var1) {
                        _fun55163_ip = 162;
                        continue _fun55163
                    }
                case 46:
                    var1 = var3._worker;
                    if (!(var0 != var1)) {
                        _fun55163_ip = 65;
                        continue _fun55163
                    }
                case 56:
                    var1 = var3._subscribed;
                    if (var1) {
                        _fun55163_ip = 86;
                        continue _fun55163
                    }
                case 65:
                    var1 = var3._subscribed;
                    if (var1) {
                        _fun55163_ip = 162;
                        continue _fun55163
                    }
                case 74:
                    var1 = var3.subscribe;
                    var1 = var1.bind(var3)();
                    _fun55163_ip = 162;
                    continue _fun55163;
                case 86:
                    var1 = var3._nextQuery;
                    var3._currentQuery = var1;
                    var3._nextQuery = var0;
                    var2 = var3._worker;
                    var1 = var2.postMessage;
                    var0 = {};
                    var4 = var3._uuid;
                    var0.uuid = var4;
                    var4 = _closure1_slot16;
                    var4 = var4.QUERY_SET;
                    var0.type = var4;
                    var3 = var3._currentQuery;
                    var0.payload = var3;
                    var0 = var1.bind(var2)(var0);
                case 162:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var4;
        var1[6] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var _closure1_slot17 = var1;
    var4 = 20;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var3 = function(arg0) { // Environment: var3
        var3 = function arg0() {
            _fun55165: for (var _fun55165_ip = 0;;) switch (_fun55165_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot7;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot4;
                    var0 = _closure1_slot20;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun55165_ip = 86;
                        continue _fun55165
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun55165_ip = 120;
                    continue _fun55165;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var2 = {};
                    var3 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1._handleLogout;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2.LOGOUT = var3;
                    var3 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1._handleConnectionOpen;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2.POST_CONNECTION_OPEN = var3;
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2._handleConnectionOpenSupplemental;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.CONNECTION_OPEN_SUPPLEMENTAL = var3;
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2._handleOverlayInitialize;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.OVERLAY_INITIALIZE = var3;
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2._handleCurrentUserUpdate;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.CURRENT_USER_UPDATE = var3;
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2._handleGuildCreate;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.GUILD_CREATE = var3;
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2._handleGuildMembersChunkBatch;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.GUILD_MEMBERS_CHUNK_BATCH = var3;
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2._handleGuildMemberUpdate;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.GUILD_MEMBER_ADD = var3;
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2._handleGuildMemberUpdate;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.GUILD_MEMBER_UPDATE = var3;
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2._handleRelationshipAdd;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.RELATIONSHIP_ADD = var3;
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2._handleRelationshipUpdate;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.RELATIONSHIP_UPDATE = var3;
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2._handleRelationshipRemove;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.RELATIONSHIP_REMOVE = var3;
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2._handleDMCreate;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.CHANNEL_CREATE = var3;
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2._handleDMUpdates;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.CHANNEL_UPDATES = var3;
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2._handleRecipientChanges;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.CHANNEL_RECIPIENT_ADD = var3;
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2._handlePassiveUpdateV2;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.PASSIVE_UPDATE_V2 = var3;
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2._handleThreadListSync;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.THREAD_LIST_SYNC = var3;
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2._handleLoadForumPosts;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.LOAD_FORUM_POSTS = var3;
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2._handleLoadMessagesSuccess;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.LOAD_MESSAGES_SUCCESS = var3;
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2._handleSearchMessagesSuccess;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.SEARCH_MESSAGES_SUCCESS = var3;
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2._handleLoadThreadsSuccess;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.LOAD_THREADS_SUCCESS = var3;
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2._handleLoadThreadsSuccess;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.LOAD_ARCHIVED_THREADS_SUCCESS = var3;
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2._handleLoadPinnedMessagesSuccess;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.LOAD_PINNED_MESSAGES_SUCCESS = var3;
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2._handleGuildScheduledEventUsersFetchSuccess;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS = var3;
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2._handleMessageCreateOrUpdate;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.MESSAGE_CREATE = var3;
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2._handleMessageCreateOrUpdate;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.MESSAGE_UPDATE = var3;
                    var0.actions = var2;
                    var2 = function() { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1.rebootWebworker;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var0._handleLogout = var2;
                    var2 = function() { // Environment: var1
                        var0 = global;
                        var3 = var0.setTimeout;
                        var0 = undefined;
                        var2 = function() { // Environment: var1
                            _fun55194: for (var _fun55194_ip = 0;;) switch (_fun55194_ip) {
                                case 0:
                                    var2 = _closure1_slot14;
                                    var0 = var2.getCurrentUser;
                                    var2 = var0.bind(var2)();
                                    var20 = null;
                                    if (!(var20 != var2)) {
                                        _fun55194_ip = 371;
                                        continue _fun55194
                                    }
                                case 27:
                                    var0 = _closure1_slot21;
                                    var19 = undefined;
                                    var2 = var0.bind(var19)(var2);
                                    var4 = {};
                                    var0 = var2.id;
                                    var4[var0] = var2;
                                    var _closure5_slot0 = var4;
                                    var0 = global;
                                    var5 = var0.Object;
                                    var3 = var5.values;
                                    var6 = _closure1_slot14;
                                    var2 = var6.getUsers;
                                    var2 = var2.bind(var6)();
                                    var3 = var3.bind(var5)(var2);
                                    var2 = var3.forEach;
                                    var1 = function(arg0) { // Environment: var1
                                        var4 = arg0;
                                        var3 = _closure5_slot0;
                                        var2 = var4.id;
                                        var1 = _closure1_slot21;
                                        var0 = undefined;
                                        var1 = var1.bind(var0)(var4);
                                        var3[var2] = var1;
                                        return var0;
                                    };
                                    var1 = var2.bind(var3)(var1);
                                    var2 = _closure1_slot12;
                                    var1 = var2.getMutableAllGuildsAndMembers;
                                    var18 = var1.bind(var2)();
                                    var16 = var18;
                                    var12 = 12;
                                    var25 = undefined;
                                    var24 = undefined;
                                    var23 = undefined;
                                    var22 = undefined;
                                    for (var13 in var16)
                                        case 140: {
                                            var5 = var25;
                                            var3 = var24;
                                            var2 = var23;
                                            var1 = var22;
                                            case 164: var11 = var13;
                                            var9 = var18[var11];
                                            var25 = var5;
                                            var24 = var3;
                                            var23 = var2;
                                            var22 = var1;
                                            var5 = var25;
                                            var3 = var24;
                                            var2 = var23;
                                            var1 = var22;
                                            ForInLoopInit(obj_props_register = 10, obj_register = 9, iter_index_register = 8, iter_size_register = 7);
                                            if (var10 === undefined) {
                                                _fun55194_ip = 140;
                                                continue _fun55194
                                            }
                                            case 203: var25 = var5;
                                            var24 = var3;
                                            var23 = var2;
                                            var22 = var1;
                                            ForInLoopNextIter(next_value_register = 6, obj_props_register = 10, obj_register = 9, iter_index_register = 8, iter_size_register = 7);
                                            if (var6 === undefined) {
                                                _fun55194_ip = 140;
                                                continue _fun55194
                                            }
                                            case 224: var24 = var6;
                                            var23 = var4[var24];
                                            var22 = var18[var11];
                                            var24 = var22[var24];
                                            var22 = var20 == var24;
                                            var25 = undefined;
                                            if (var22) {
                                                _fun55194_ip = 254;
                                                continue _fun55194
                                            }
                                            case 248: var25 = var24.nick;
                                            case 254: var22 = var25;
                                            if (!(var20 == var22)) {
                                                _fun55194_ip = 289;
                                                continue _fun55194
                                            }
                                            case 261: var27 = _closure1_slot1;
                                            var26 = _closure1_slot3;
                                            var26 = var26[var12];
                                            var27 = var27.bind(var19)(var26);
                                            var26 = var27.getGlobalName;
                                            var22 = var26.bind(var27)(var23);
                                            case 289: var5 = var25;
                                            var3 = var24;
                                            var2 = var23;
                                            var1 = var22;
                                            if (var20 == var23) {
                                                _fun55194_ip = 203;
                                                continue _fun55194
                                            }
                                            case 305: var26 = _closure1_slot22;
                                            var26 = var26.bind(var19)(var23, var11, var22);
                                            var5 = var25;
                                            var3 = var24;
                                            var2 = var23;
                                            var1 = var22;
                                            _fun55194_ip = 203;
                                            continue _fun55194;
                                        }
                                case 330:
                                    var3 = _closure3_slot0;
                                    var2 = var3.updateUsers;
                                    var1 = var0.Object;
                                    var0 = var1.values;
                                    var1 = var0.bind(var1)(var4);
                                    var0 = 'connection_open';
                                    var0 = var2.bind(var3)(var1, var0);
                                case 371:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var1 = 3000;
                        var1 = var3.bind(var0)(var2, var1);
                        return var0;
                    };
                    var0._handleConnectionOpen = var2;
                    var2 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = var0.guilds;
                        var _closure4_slot0 = var0;
                        var0 = global;
                        var3 = var0.setTimeout;
                        var0 = undefined;
                        var2 = function() { // Environment: var1
                            var3 = _closure1_slot1;
                            var5 = _closure1_slot3;
                            var2 = 15;
                            var4 = var5[var2];
                            var0 = undefined;
                            var8 = var3.bind(var0)(var4);
                            var7 = var8.flatMap;
                            var4 = _closure4_slot0;
                            var6 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var3 = _closure1_slot24;
                                var2 = var0.members;
                                var1 = var0.id;
                                var0 = undefined;
                                var0 = var3.bind(var0)(var2, var1);
                                return var0;
                            };
                            var6 = var7.bind(var8)(var4, var6);
                            var2 = var5[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.flatMap;
                            var1 = function(arg0) { // Environment: var1
                                _fun55199: for (var _fun55199_ip = 0;;) switch (_fun55199_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var _closure6_slot0 = var2;
                                        var0 = new Array(0);
                                        var _closure6_slot1 = var0;
                                        var3 = var2.activity_instances;
                                        var2 = null;
                                        if (!(var2 != var3)) {
                                            _fun55199_ip = 44;
                                            continue _fun55199
                                        }
                                    case 29:
                                        var2 = var3.forEach;
                                        var1 = function(arg0) { // Environment: var1
                                            var0 = arg0;
                                            var2 = var0.participants;
                                            var1 = var2.forEach;
                                            var0 = function(arg0) { // Environment: var0
                                                _fun55201: for (var _fun55201_ip = 0;;) switch (_fun55201_ip) {
                                                    case 0:
                                                        var0 = arg0;
                                                        var1 = var0.member;
                                                        var3 = null;
                                                        if (!(var3 != var1)) {
                                                            _fun55201_ip = 81;
                                                            continue _fun55201
                                                        }
                                                    case 15:
                                                        var4 = _closure1_slot21;
                                                        var2 = var1.user;
                                                        var5 = undefined;
                                                        var2 = var4.bind(var5)(var2);
                                                        if (!(var3 != var2)) {
                                                            _fun55201_ip = 81;
                                                            continue _fun55201
                                                        }
                                                    case 38:
                                                        var4 = _closure1_slot22;
                                                        var3 = _closure6_slot0;
                                                        var3 = var3.id;
                                                        var1 = var1.nick;
                                                        var1 = var4.bind(var5)(var2, var3, var1);
                                                        var1 = _closure6_slot1;
                                                        var0 = var1.push;
                                                        var0 = var0.bind(var1)(var2);
                                                    case 81:
                                                        var0 = undefined;
                                                        return var0;
                                                }
                                            };
                                            var0 = var1.bind(var2)(var0);
                                            var0 = undefined;
                                            return var0;
                                        };
                                        var1 = var2.bind(var3)(var1);
                                    case 44:
                                        return var0;
                                }
                            };
                            var5 = var2.bind(var3)(var4, var1);
                            var4 = _closure3_slot0;
                            var3 = var4.updateUsers;
                            var2 = new Array(0);
                            var9 = 0;
                            var11 = var2;
                            var10 = var6;
                            var9 = arraySpread(var11, var10, var9);
                            var11 = var2;
                            var10 = var5;
                            var1 = arraySpread(var11, var10, var9);
                            var1 = 'connection_open_supplemental';
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                        };
                        var1 = 3000;
                        var1 = var3.bind(var0)(var2, var1);
                        return var0;
                    };
                    var0._handleConnectionOpenSupplemental = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun55202: for (var _fun55202_ip = 0;;) switch (_fun55202_ip) {
                            case 0:
                                var0 = arg0;
                                var4 = var0.users;
                                var14 = var0.guildMembers;
                                var1 = global;
                                var0 = var1.Map;
                                var2 = var0.prototype;
                                var2 = Object.create(var2, {
                                    constructor: {
                                        value: var0
                                    }
                                });
                                var29 = var2;
                                var0 = new var29[var0](var28);
                                var2 = var0 instanceof Object ? var0 : var2;
                                var3 = _closure1_slot18;
                                var0 = undefined;
                                var5 = var3.bind(var0)(var4);
                                var4 = var5.bind(var0)();
                                var3 = var4.done;
                                if (var3) {
                                    _fun55202_ip = 114;
                                    continue _fun55202
                                }
                            case 69:
                                var8 = var4.value;
                                var7 = var2.set;
                                var6 = var8.id;
                                var3 = _closure1_slot21;
                                var3 = var3.bind(var0)(var8);
                                var3 = var7.bind(var2)(var6, var3);
                                var6 = var5.bind(var0)();
                                var3 = var6.done;
                                var4 = var6;
                                if (!var3) {
                                    _fun55202_ip = 69;
                                    continue _fun55202
                                }
                            case 114:
                                var4 = _closure1_slot18;
                                var5 = _closure1_slot1;
                                var3 = _closure1_slot3;
                                var12 = 16;
                                var3 = var3[var12];
                                var5 = var5.bind(var0)(var3);
                                var3 = var5.keys;
                                var3 = var3.bind(var5)(var14);
                                var11 = var4.bind(var0)(var3);
                                var4 = var11.bind(var0)();
                                var3 = var4.done;
                                var10 = null;
                                var9 = var4;
                                var8 = undefined;
                                var7 = undefined;
                                var6 = undefined;
                                var5 = undefined;
                                var4 = undefined;
                                if (var3) {
                                    _fun55202_ip = 405;
                                    continue _fun55202
                                }
                            case 183:
                                var21 = var9.value;
                                var20 = var14[var21];
                                var17 = var6;
                                var16 = var5;
                                var15 = var4;
                                if (!(var10 != var20)) {
                                    _fun55202_ip = 378;
                                    continue _fun55202
                                }
                            case 208:
                                var18 = _closure1_slot18;
                                var19 = _closure1_slot1;
                                var3 = _closure1_slot3;
                                var3 = var3[var12];
                                var19 = var19.bind(var0)(var3);
                                var3 = var19.keys;
                                var3 = var3.bind(var19)(var20);
                                var19 = var18.bind(var0)(var3);
                                var22 = var19.bind(var0)();
                                var3 = var22.done;
                                var18 = var22;
                                var8 = var18;
                                var7 = var19;
                                var17 = var6;
                                var16 = var5;
                                var15 = var4;
                                if (var3) {
                                    _fun55202_ip = 378;
                                    continue _fun55202
                                }
                            case 274:
                                var24 = var18.value;
                                var3 = var2.get;
                                var23 = var3.bind(var2)(var24);
                                var22 = var20[var24];
                                var3 = var10 != var23;
                                if (!var3) {
                                    _fun55202_ip = 304;
                                    continue _fun55202
                                }
                            case 300:
                                var3 = var10 != var22;
                            case 304:
                                if (!var3) {
                                    _fun55202_ip = 317;
                                    continue _fun55202
                                }
                            case 307:
                                var25 = var22.nick;
                                var3 = var10 != var25;
                            case 317:
                                if (!var3) {
                                    _fun55202_ip = 348;
                                    continue _fun55202
                                }
                            case 320:
                                var25 = _closure1_slot22;
                                var3 = var22.nick;
                                var3 = var25.bind(var0)(var23, var21, var3);
                                var3 = var2.set;
                                var3 = var3.bind(var2)(var24, var23);
                            case 348:
                                var25 = var19.bind(var0)();
                                var3 = var25.done;
                                var18 = var25;
                                var8 = var18;
                                var7 = var19;
                                var17 = var24;
                                var16 = var23;
                                var15 = var22;
                                if (!var3) {
                                    _fun55202_ip = 274;
                                    continue _fun55202
                                }
                            case 378:
                                var18 = var11.bind(var0)();
                                var3 = var18.done;
                                var6 = var17;
                                var5 = var16;
                                var4 = var15;
                                var9 = var18;
                                if (!var3) {
                                    _fun55202_ip = 183;
                                    continue _fun55202
                                }
                            case 405:
                                var5 = _closure3_slot0;
                                var4 = var5.updateUsers;
                                var6 = var1.Array;
                                var3 = var6.from;
                                var1 = var2.values;
                                var1 = var1.bind(var2)();
                                var3 = var3.bind(var6)(var1);
                                var1 = 'overlay_initialize';
                                var1 = var4.bind(var5)(var3, var1);
                                var1 = var2.clear;
                                var1 = var1.bind(var2)();
                                return var0;
                        }
                    };
                    var0._handleOverlayInitialize = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun55203: for (var _fun55203_ip = 0;;) switch (_fun55203_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = var0.user;
                                var1 = _closure1_slot21;
                                var0 = undefined;
                                var1 = var1.bind(var0)(var2);
                                var2 = null;
                                if (!(var2 != var1)) {
                                    _fun55203_ip = 61;
                                    continue _fun55203
                                }
                            case 28:
                                var4 = _closure3_slot0;
                                var3 = var4.updateUsers;
                                var2 = new Array(1);
                                var2[0] = var1;
                                var1 = 'current_user_update';
                                var1 = var3.bind(var4)(var2, var1);
                            case 61:
                                return var0;
                        }
                    };
                    var0._handleCurrentUserUpdate = var2;
                    var2 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = var0.guild;
                        var5 = var0.members;
                        var4 = _closure3_slot0;
                        var3 = var4.updateUsers;
                        var2 = _closure1_slot24;
                        var1 = var0.id;
                        var0 = undefined;
                        var2 = var2.bind(var0)(var5, var1);
                        var1 = 'guild_create';
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    var0._handleGuildCreate = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun55205: for (var _fun55205_ip = 0;;) switch (_fun55205_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = var0.chunks;
                                var4 = new Array(0);
                                var1 = _closure1_slot18;
                                var0 = undefined;
                                var5 = var1.bind(var0)(var2);
                                var2 = var5.bind(var0)();
                                var1 = var2.done;
                                if (var1) {
                                    _fun55205_ip = 111;
                                    continue _fun55205
                                }
                            case 39:
                                var1 = var2.value;
                                var7 = var4.push;
                                var9 = _closure1_slot24;
                                var8 = var1.members;
                                var1 = var1.guildId;
                                var11 = var9.bind(var0)(var8, var1);
                                var1 = new Array(0);
                                var12 = var1;
                                var10 = 0;
                                var8 = arraySpread(var12, var11, var10);
                                var12 = var7;
                                var11 = var1;
                                var10 = var4;
                                var1 = apply(var12, var11, var10);
                                var7 = var5.bind(var0)();
                                var1 = var7.done;
                                var2 = var7;
                                if (!var1) {
                                    _fun55205_ip = 39;
                                    continue _fun55205
                                }
                            case 111:
                                var3 = _closure3_slot0;
                                var2 = var3.updateUsers;
                                var1 = 'guild_members_chunk_batch';
                                var1 = var2.bind(var3)(var4, var1);
                                return var0;
                        }
                    };
                    var0._handleGuildMembersChunkBatch = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun55206: for (var _fun55206_ip = 0;;) switch (_fun55206_ip) {
                            case 0:
                                var0 = arg0;
                                var4 = var0.guildId;
                                var5 = var0.user;
                                var3 = var0.nick;
                                var1 = _closure1_slot21;
                                var0 = undefined;
                                var1 = var1.bind(var0)(var5);
                                var5 = null;
                                if (!(var5 != var1)) {
                                    _fun55206_ip = 83;
                                    continue _fun55206
                                }
                            case 39:
                                var2 = _closure1_slot22;
                                var2 = var2.bind(var0)(var1, var4, var3);
                                var4 = _closure3_slot0;
                                var3 = var4.updateUsers;
                                var2 = new Array(1);
                                var2[0] = var1;
                                var1 = 'guild_member_update';
                                var1 = var3.bind(var4)(var2, var1);
                            case 83:
                                return var0;
                        }
                    };
                    var0._handleGuildMemberUpdate = var2;
                    var2 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var4 = _closure3_slot0;
                        var3 = var4.updateUsers;
                        var5 = _closure1_slot24;
                        var2 = var0.members;
                        var1 = var0.guildId;
                        var0 = undefined;
                        var2 = var5.bind(var0)(var2, var1);
                        var1 = 'passive_update_v2';
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    var0._handlePassiveUpdateV2 = var2;
                    var2 = function(arg0) { // Environment: var1
                        var2 = _closure1_slot21;
                        var0 = arg0;
                        var0 = var0.relationship;
                        var1 = var0.user;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var4 = _closure3_slot0;
                        var3 = var4.updateUsers;
                        var2 = new Array(1);
                        var2[0] = var1;
                        var1 = 'relationship_add';
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    var0._handleRelationshipAdd = var2;
                    var2 = function(arg0) { // Environment: var1
                        var2 = _closure1_slot21;
                        var3 = _closure1_slot14;
                        var1 = var3.getUser;
                        var0 = arg0;
                        var0 = var0.relationship;
                        var0 = var0.id;
                        var1 = var1.bind(var3)(var0);
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var4 = _closure3_slot0;
                        var3 = var4.updateUsers;
                        var2 = new Array(1);
                        var2[0] = var1;
                        var1 = 'relationship_update';
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    var0._handleRelationshipUpdate = var2;
                    var2 = function(arg0) { // Environment: var1
                        var2 = _closure1_slot21;
                        var3 = _closure1_slot14;
                        var1 = var3.getUser;
                        var0 = arg0;
                        var0 = var0.relationship;
                        var0 = var0.id;
                        var1 = var1.bind(var3)(var0);
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var4 = _closure3_slot0;
                        var3 = var4.updateUsers;
                        var2 = new Array(1);
                        var2[0] = var1;
                        var1 = 'relationship_remove';
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    var0._handleRelationshipRemove = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun55211: for (var _fun55211_ip = 0;;) switch (_fun55211_ip) {
                            case 0:
                                var0 = arg0;
                                var0 = var0.channel;
                                var3 = var0.id;
                                var4 = _closure1_slot23;
                                var2 = _closure1_slot11;
                                var0 = var2.getChannel;
                                var2 = var0.bind(var2)(var3);
                                var0 = undefined;
                                var4 = var4.bind(var0)(var2);
                                var5 = var4.length;
                                var2 = 0;
                                if (!(var2 !== var5)) {
                                    _fun55211_ip = 119;
                                    continue _fun55211
                                }
                            case 52:
                                var5 = _closure1_slot21;
                                var6 = _closure1_slot14;
                                var2 = var6.getCurrentUser;
                                var2 = var2.bind(var6)();
                                var2 = var5.bind(var0)(var2);
                                var1 = _closure1_slot22;
                                var1 = var1.bind(var0)(var2, var3);
                                var1 = var4.push;
                                var1 = var1.bind(var4)(var2);
                                var3 = _closure3_slot0;
                                var2 = var3.updateUsers;
                                var1 = 'dm_create';
                                var1 = var2.bind(var3)(var4, var1);
                            case 119:
                                return var0;
                        }
                    };
                    var0._handleDMCreate = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun55212: for (var _fun55212_ip = 0;;) switch (_fun55212_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = var0.channels;
                                var1 = _closure1_slot18;
                                var0 = undefined;
                                var6 = var1.bind(var0)(var2);
                                var2 = var6.bind(var0)();
                                var1 = var2.done;
                                var4 = 'dm_updates';
                                var3 = 0;
                                if (var1) {
                                    _fun55212_ip = 166;
                                    continue _fun55212
                                }
                            case 46:
                                var1 = var2.value;
                                var9 = _closure1_slot23;
                                var11 = _closure1_slot11;
                                var10 = var11.getChannel;
                                var8 = var1.id;
                                var8 = var10.bind(var11)(var8);
                                var9 = var9.bind(var0)(var8);
                                var8 = var9.length;
                                if (!(var3 !== var8)) {
                                    _fun55212_ip = 151;
                                    continue _fun55212
                                }
                            case 88:
                                var10 = _closure1_slot21;
                                var11 = _closure1_slot14;
                                var8 = var11.getCurrentUser;
                                var8 = var8.bind(var11)();
                                var8 = var10.bind(var0)(var8);
                                var10 = _closure1_slot22;
                                var1 = var1.id;
                                var1 = var10.bind(var0)(var8, var1);
                                var1 = var9.push;
                                var1 = var1.bind(var9)(var8);
                                var8 = _closure3_slot0;
                                var1 = var8.updateUsers;
                                var1 = var1.bind(var8)(var9, var4);
                            case 151:
                                var8 = var6.bind(var0)();
                                var1 = var8.done;
                                var2 = var8;
                                if (!var1) {
                                    _fun55212_ip = 46;
                                    continue _fun55212
                                }
                            case 166:
                                return var0;
                        }
                    };
                    var0._handleDMUpdates = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun55213: for (var _fun55213_ip = 0;;) switch (_fun55213_ip) {
                            case 0:
                                var0 = arg0;
                                var3 = var0.channelId;
                                var4 = var0.user;
                                var0 = var0.isMember;
                                if (!var0) {
                                    _fun55213_ip = 79;
                                    continue _fun55213
                                }
                            case 22:
                                var0 = _closure1_slot21;
                                var2 = undefined;
                                var0 = var0.bind(var2)(var4);
                                var1 = _closure1_slot22;
                                var1 = var1.bind(var2)(var0, var3);
                                var3 = _closure3_slot0;
                                var2 = var3.updateUsers;
                                var1 = new Array(1);
                                var1[0] = var0;
                                var0 = 'recipient_changes';
                                var0 = var2.bind(var3)(var1, var0);
                            case 79:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0._handleRecipientChanges = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun55214: for (var _fun55214_ip = 0;;) switch (_fun55214_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = var0.guildId;
                                var _closure4_slot0 = var2;
                                var3 = var0.mostRecentMessages;
                                var0 = undefined;
                                var _closure4_slot1 = var0;
                                var2 = null;
                                if (!(var2 != var3)) {
                                    _fun55214_ip = 80;
                                    continue _fun55214
                                }
                            case 32:
                                var4 = new Array(0);
                                _closure4_slot1 = var4;
                                var2 = var3.forEach;
                                var1 = function(arg0) { // Environment: var1
                                    var2 = _closure1_slot25;
                                    var1 = {};
                                    var0 = arg0;
                                    var1.message = var0;
                                    var0 = _closure4_slot0;
                                    var1.nicknameContextId = var0;
                                    var0 = undefined;
                                    var3 = var2.bind(var0)(var1);
                                    var2 = var3.forEach;
                                    var1 = function(arg0) { // Environment: var1
                                        var2 = _closure4_slot1;
                                        var1 = var2.push;
                                        var0 = arg0;
                                        var0 = var1.bind(var2)(var0);
                                        return var0;
                                    };
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                                };
                                var1 = var2.bind(var3)(var1);
                                var3 = _closure3_slot0;
                                var2 = var3.updateUsers;
                                var1 = 'thread_list_sync';
                                var1 = var2.bind(var3)(var4, var1);
                            case 80:
                                return var0;
                        }
                    };
                    var0._handleThreadListSync = var2;
                    var2 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var2 = var1.guildId;
                        var _closure4_slot0 = var2;
                        var4 = var1.threads;
                        var3 = new Array(0);
                        var _closure4_slot1 = var3;
                        var1 = global;
                        var2 = var1.Object;
                        var1 = var2.values;
                        var2 = var1.bind(var2)(var4);
                        var1 = var2.forEach;
                        var0 = function(arg0) { // Environment: var0
                            _fun55218: for (var _fun55218_ip = 0;;) switch (_fun55218_ip) {
                                case 0:
                                    var1 = arg0;
                                    var4 = var1.first_message;
                                    var3 = var1.most_recent_message;
                                    var1 = var1.owner;
                                    var2 = null;
                                    if (!(var2 != var4)) {
                                        _fun55218_ip = 76;
                                        continue _fun55218
                                    }
                                case 29:
                                    var6 = _closure1_slot25;
                                    var5 = {};
                                    var5.message = var4;
                                    var4 = _closure4_slot0;
                                    var5.nicknameContextId = var4;
                                    var4 = undefined;
                                    var6 = var6.bind(var4)(var5);
                                    var5 = var6.forEach;
                                    var4 = function(arg0) { // Environment: var0
                                        var2 = _closure4_slot1;
                                        var1 = var2.push;
                                        var0 = arg0;
                                        var0 = var1.bind(var2)(var0);
                                        return var0;
                                    };
                                    var4 = var5.bind(var6)(var4);
                                case 76:
                                    if (!(var2 != var3)) {
                                        _fun55218_ip = 127;
                                        continue _fun55218
                                    }
                                case 80:
                                    var5 = _closure1_slot25;
                                    var4 = {};
                                    var4.message = var3;
                                    var3 = _closure4_slot0;
                                    var4.nicknameContextId = var3;
                                    var3 = undefined;
                                    var5 = var5.bind(var3)(var4);
                                    var4 = var5.forEach;
                                    var3 = function(arg0) { // Environment: var0
                                        var2 = _closure4_slot1;
                                        var1 = var2.push;
                                        var0 = arg0;
                                        var0 = var1.bind(var2)(var0);
                                        return var0;
                                    };
                                    var3 = var4.bind(var5)(var3);
                                case 127:
                                    if (!(var2 != var1)) {
                                        _fun55218_ip = 176;
                                        continue _fun55218
                                    }
                                case 131:
                                    var4 = _closure1_slot24;
                                    var3 = new Array(1);
                                    var3[0] = var1;
                                    var2 = _closure4_slot0;
                                    var1 = undefined;
                                    var2 = var4.bind(var1)(var3, var2);
                                    var1 = var2.forEach;
                                    var0 = function(arg0) { // Environment: var0
                                        var2 = _closure4_slot1;
                                        var1 = var2.push;
                                        var0 = arg0;
                                        var0 = var1.bind(var2)(var0);
                                        return var0;
                                    };
                                    var0 = var1.bind(var2)(var0);
                                case 176:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var0 = var1.bind(var2)(var0);
                        var2 = _closure3_slot0;
                        var1 = var2.updateUsers;
                        var0 = 'load_forum_posts';
                        var0 = var1.bind(var2)(var3, var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0._handleLoadForumPosts = var2;
                    var2 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var2 = var0.messages;
                        var1 = var2.flatMap;
                        var0 = function(arg0) { // Environment: var0
                            var2 = _closure1_slot25;
                            var1 = {};
                            var0 = arg0;
                            var1.message = var0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var3 = var1.bind(var2)(var0);
                        var2 = _closure3_slot0;
                        var1 = var2.updateUsers;
                        var0 = 'load_messages_success';
                        var0 = var1.bind(var2)(var3, var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0._handleLoadMessagesSuccess = var2;
                    var2 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var2 = var1.pins;
                        var3 = new Array(0);
                        var _closure4_slot0 = var3;
                        var1 = var2.forEach;
                        var0 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var0 = var0.message;
                            var2 = _closure1_slot25;
                            var1 = {};
                            var1.message = var0;
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.forEach;
                            var1 = function(arg0) { // Environment: var1
                                var2 = _closure4_slot0;
                                var1 = var2.push;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                        var2 = _closure3_slot0;
                        var1 = var2.updateUsers;
                        var0 = 'load_pinned_messages_success';
                        var0 = var1.bind(var2)(var3, var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0._handleLoadPinnedMessagesSuccess = var2;
                    var2 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var2 = var1.data;
                        var3 = new Array(0);
                        var _closure4_slot0 = var3;
                        var1 = var2.forEach;
                        var0 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var2 = var0.messages;
                            var1 = var2.forEach;
                            var0 = function(arg0) { // Environment: var0
                                var2 = arg0;
                                var1 = var2.forEach;
                                var0 = function(arg0) { // Environment: var0
                                    var2 = _closure1_slot25;
                                    var1 = {};
                                    var0 = arg0;
                                    var1.message = var0;
                                    var0 = undefined;
                                    var3 = var2.bind(var0)(var1);
                                    var2 = var3.forEach;
                                    var1 = function(arg0) { // Environment: var1
                                        var2 = _closure4_slot0;
                                        var1 = var2.push;
                                        var0 = arg0;
                                        var0 = var1.bind(var2)(var0);
                                        return var0;
                                    };
                                    var1 = var2.bind(var3)(var1);
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
                        var2 = _closure3_slot0;
                        var1 = var2.updateUsers;
                        var0 = 'search_messages_success';
                        var0 = var1.bind(var2)(var3, var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0._handleSearchMessagesSuccess = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun55232: for (var _fun55232_ip = 0;;) switch (_fun55232_ip) {
                            case 0:
                                var1 = arg0;
                                var5 = var1.guildId;
                                var _closure4_slot0 = var5;
                                var8 = var1.firstMessages;
                                var7 = var1.mostRecentMessages;
                                var4 = var1.owners;
                                var3 = new Array(0);
                                var _closure4_slot1 = var3;
                                var1 = null;
                                if (!(var1 != var8)) {
                                    _fun55232_ip = 61;
                                    continue _fun55232
                                }
                            case 46:
                                var6 = var8.forEach;
                                var2 = function(arg0) { // Environment: var0
                                    var2 = _closure1_slot25;
                                    var1 = {};
                                    var0 = arg0;
                                    var1.message = var0;
                                    var0 = _closure4_slot0;
                                    var1.nicknameContextId = var0;
                                    var0 = undefined;
                                    var3 = var2.bind(var0)(var1);
                                    var2 = var3.forEach;
                                    var1 = function(arg0) { // Environment: var1
                                        var2 = _closure4_slot1;
                                        var1 = var2.push;
                                        var0 = arg0;
                                        var0 = var1.bind(var2)(var0);
                                        return var0;
                                    };
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                                };
                                var2 = var6.bind(var8)(var2);
                            case 61:
                                if (!(var1 != var7)) {
                                    _fun55232_ip = 80;
                                    continue _fun55232
                                }
                            case 65:
                                var6 = var7.forEach;
                                var2 = function(arg0) { // Environment: var0
                                    var2 = _closure1_slot25;
                                    var1 = {};
                                    var0 = arg0;
                                    var1.message = var0;
                                    var0 = _closure4_slot0;
                                    var1.nicknameContextId = var0;
                                    var0 = undefined;
                                    var3 = var2.bind(var0)(var1);
                                    var2 = var3.forEach;
                                    var1 = function(arg0) { // Environment: var1
                                        var2 = _closure4_slot1;
                                        var1 = var2.push;
                                        var0 = arg0;
                                        var0 = var1.bind(var2)(var0);
                                        return var0;
                                    };
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                                };
                                var2 = var6.bind(var7)(var2);
                            case 80:
                                if (!(var1 != var4)) {
                                    _fun55232_ip = 114;
                                    continue _fun55232
                                }
                            case 84:
                                var2 = _closure1_slot24;
                                var1 = undefined;
                                var2 = var2.bind(var1)(var4, var5);
                                var1 = var2.forEach;
                                var0 = function(arg0) { // Environment: var0
                                    var2 = _closure4_slot1;
                                    var1 = var2.push;
                                    var0 = arg0;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var0 = var1.bind(var2)(var0);
                            case 114:
                                var2 = _closure3_slot0;
                                var1 = var2.updateUsers;
                                var0 = 'load_threads_success';
                                var0 = var1.bind(var2)(var3, var0);
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0._handleLoadThreadsSuccess = var2;
                    var2 = function(arg0) { // Environment: var1
                        var2 = _closure1_slot25;
                        var1 = {};
                        var0 = arg0;
                        var0 = var0.message;
                        var1.message = var0;
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var3 = _closure3_slot0;
                        var2 = var3.updateUsers;
                        var1 = 'message_create_or_update';
                        var1 = var2.bind(var3)(var4, var1);
                        return var0;
                    };
                    var0._handleMessageCreateOrUpdate = var2;
                    var1 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var2 = var1.guildId;
                        var _closure4_slot0 = var2;
                        var2 = var1.guildScheduledEventUsers;
                        var3 = new Array(0);
                        var _closure4_slot1 = var3;
                        var1 = var2.forEach;
                        var0 = function(arg0) { // Environment: var0
                            _fun55240: for (var _fun55240_ip = 0;;) switch (_fun55240_ip) {
                                case 0:
                                    var0 = arg0;
                                    var3 = var0.user;
                                    var6 = var0.member;
                                    var2 = _closure1_slot21;
                                    var0 = undefined;
                                    var3 = var2.bind(var0)(var3);
                                    var2 = null;
                                    if (!(var2 != var3)) {
                                        _fun55240_ip = 81;
                                        continue _fun55240
                                    }
                                case 34:
                                    var5 = _closure1_slot22;
                                    var4 = _closure4_slot0;
                                    var7 = var2 == var6;
                                    var2 = undefined;
                                    if (var7) {
                                        _fun55240_ip = 60;
                                        continue _fun55240
                                    }
                                case 54:
                                    var2 = var6.nick;
                                case 60:
                                    var2 = var5.bind(var0)(var3, var4, var2);
                                    var2 = _closure4_slot1;
                                    var1 = var2.push;
                                    var1 = var1.bind(var2)(var3);
                                case 81:
                                    return var0;
                            }
                        };
                        var0 = var1.bind(var2)(var0);
                        var2 = _closure3_slot0;
                        var1 = var2.updateUsers;
                        var0 = 'guild_scheduled_event_users_fetch_success';
                        var0 = var1.bind(var2)(var3, var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0._handleGuildScheduledEventUsersFetchSuccess = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot8;
        var4 = {};
        var0 = '_initialize';
        var4.key = var0;
        var0 = function() {
            var1 = this;
            var0 = var1.rebootWebworker;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(6);
        var0[0] = var4;
        var4 = {};
        var6 = '_terminate';
        var4.key = var6;
        var6 = function() {
            _fun55242: for (var _fun55242_ip = 0;;) switch (_fun55242_ip) {
                case 0:
                    var1 = this;
                    var2 = var1._worker;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun55242_ip = 37;
                        continue _fun55242
                    }
                case 15:
                    var3 = var1._worker;
                    var2 = var3.terminate;
                    var2 = var2.bind(var3)();
                    var1._worker = var0;
                case 37:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'rebootWebworker';
        var4.key = var6;
        var6 = function() {
            _fun55243: for (var _fun55243_ip = 0;;) switch (_fun55243_ip) {
                case 0:
                    var2 = this;
                    var1 = var2._worker;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun55243_ip = 37;
                        continue _fun55243
                    }
                case 15:
                    var3 = var2._worker;
                    var1 = var3.terminate;
                    var1 = var1.bind(var3)();
                    var2._worker = var0;
                case 37:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 17;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var3.bind(var0)(var1);
                    var2._worker = var1;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'updateUsers';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun55244: for (var _fun55244_ip = 0;;) switch (_fun55244_ip) {
                case 0:
                    var5 = arg0;
                    var9 = arg1;
                    var0 = this;
                    var2 = var0._worker;
                    var8 = null;
                    if (!(var8 != var2)) {
                        _fun55244_ip = 388;
                        continue _fun55244
                    }
                case 24:
                    var0 = _closure1_slot18;
                    var3 = var5.filter;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var1 = 18;
                    var1 = var7[var1];
                    var7 = undefined;
                    var1 = var6.bind(var7)(var1);
                    var1 = var1.isNotNullish;
                    var3 = var3.bind(var5)(var1);
                    var6 = var0.bind(var7)(var3);
                    var1 = var6.bind(var7)();
                    var0 = var1.done;
                    var5 = 19;
                    if (var0) {
                        _fun55244_ip = 356;
                        continue _fun55244
                    }
                case 92:
                    var15 = var1.value;
                    var10 = var8 == var15;
                    var0 = undefined;
                    if (var10) {
                        _fun55244_ip = 111;
                        continue _fun55244
                    }
                case 106:
                    var0 = var15.id;
                case 111:
                    if (!(var8 == var0)) {
                        _fun55244_ip = 338;
                        continue _fun55244
                    }
                case 118:
                    var10 = _closure1_slot1;
                    var0 = _closure1_slot3;
                    var0 = var0[var5];
                    var11 = var10.bind(var7)(var0);
                    var10 = var11.addBreadcrumb;
                    var0 = {
                        'category': 'debug',
                        'message': 'User missing id'
                    };
                    var12 = {};
                    var12.action = var9;
                    var13 = {};
                    var14 = var8 == var15;
                    var13.userIsNull = var14;
                    var16 = var8 == var15;
                    var14 = undefined;
                    if (var16) {
                        _fun55244_ip = 188;
                        continue _fun55244
                    }
                case 183:
                    var14 = var15.id;
                case 188:
                    var14 = var8 == var14;
                    var13.idIsNull = var14;
                    var16 = var8 == var15;
                    var14 = undefined;
                    if (var16) {
                        _fun55244_ip = 213;
                        continue _fun55244
                    }
                case 208:
                    var14 = var15.username;
                case 213:
                    var14 = var8 == var14;
                    var13.usernameIsNull = var14;
                    var16 = var8 == var15;
                    var14 = undefined;
                    if (var16) {
                        _fun55244_ip = 239;
                        continue _fun55244
                    }
                case 233:
                    var14 = var15.isBot;
                case 239:
                    var13.isBot = var14;
                    var16 = var8 == var15;
                    var14 = undefined;
                    if (var16) {
                        _fun55244_ip = 259;
                        continue _fun55244
                    }
                case 253:
                    var14 = var15.isFriend;
                case 259:
                    var13.isFriend = var14;
                    var16 = var8 == var15;
                    var14 = undefined;
                    if (var16) {
                        _fun55244_ip = 279;
                        continue _fun55244
                    }
                case 273:
                    var14 = var15.isProvisional;
                case 279:
                    var13.isProvisional = var14;
                    var16 = var8 == var15;
                    var14 = undefined;
                    if (var16) {
                        _fun55244_ip = 299;
                        continue _fun55244
                    }
                case 293:
                    var14 = var15.globalName;
                case 299:
                    var14 = var8 == var14;
                    var13.globalNameIsNull = var14;
                    var14 = var3.length;
                    var13.usersArrayLength = var14;
                    var12.userFields = var13;
                    var0.data = var12;
                    var0 = var10.bind(var11)(var0);
                case 338:
                    var10 = var6.bind(var7)();
                    var0 = var10.done;
                    var1 = var10;
                    if (!var0) {
                        _fun55244_ip = 92;
                        continue _fun55244
                    }
                case 356:
                    var1 = var2.postMessage;
                    var0 = {};
                    var4 = _closure1_slot16;
                    var4 = var4.UPDATE_USERS;
                    var0.type = var4;
                    var0.payload = var3;
                    var0 = var1.bind(var2)(var0);
                case 388:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getUserSearchContext';
        var4.key = var6;
        var6 = function arg0() {
            _fun55245: for (var _fun55245_ip = 0;;) switch (_fun55245_ip) {
                case 0:
                    var4 = arguments[1];
                    var0 = this;
                    var1 = undefined;
                    if (!(var4 === var1)) {
                        _fun55245_ip = 15;
                        continue _fun55245
                    }
                case 12:
                    var4 = 10;
                case 15:
                    var1 = var0.initialize;
                    var1 = var1.bind(var0)();
                    var3 = var0._worker;
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun55245_ip = 75;
                        continue _fun55245
                    }
                case 37:
                    var2 = _closure1_slot17;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var6 = arg0;
                    var8 = var1;
                    var7 = var3;
                    var5 = var4;
                    var0 = new var8[var2](var7, var6, var5, var4);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
                case 75:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var7 = 'SearchContextManager: No webworker initialized';
                    var8 = var1;
                    var0 = new var8[var2](var7, var6);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'requestDebugState';
        var4.key = var6;
        var5 = function() {
            var0 = global;
            var2 = var0.Promise;
            var1 = var2.resolve;
            var0 = null;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var5;
        var0[5] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var12 = var4;
    var3 = new var12[var3](var11);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/autocompleter/UserSearchManager.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.UserSearchContext = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [15, 17, 18, 6, 7, 1376, 1628, 1372, 1681, 3102, 1621, 660, 3238, 1384, 491, 22, 21, 6654, 1304, 1207, 4300, 2]);