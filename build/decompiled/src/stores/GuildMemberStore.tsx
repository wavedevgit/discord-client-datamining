// stores/GuildMemberStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var0 = function() {
        _fun19103: for (var _fun19103_ip = 0;;) switch (_fun19103_ip) {
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
                _fun19103_ip = 74;
                continue _fun19103;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot28 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var0 = function arg0, arg1() {
        _fun19106: for (var _fun19106_ip = 0;;) switch (_fun19106_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun19106_ip = 46;
                    continue _fun19106
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun19106_ip = 55;
                    continue _fun19106
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun19106_ip = 343;
                    continue _fun19106
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun19106_ip = 323;
                    continue _fun19106
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun19106_ip = 283;
                    continue _fun19106
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun19106_ip = 270;
                    continue _fun19106
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
                    _fun19106_ip = 163;
                    continue _fun19106
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun19106_ip = 179;
                    continue _fun19106
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun19106_ip = 249;
                    continue _fun19106
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun19106_ip = 249;
                    continue _fun19106
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun19106_ip = 234;
                    continue _fun19106
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun19106_ip = 247;
                    continue _fun19106
                }
            case 234:
                var8 = _closure1_slot30;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun19106_ip = 265;
                continue _fun19106;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun19106_ip = 283;
                continue _fun19106;
            case 270:
                var6 = _closure1_slot30;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun19106_ip = 323;
                    continue _fun19106
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
                    _fun19106_ip = 330;
                    continue _fun19106
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun19107: for (var _fun19107_ip = 0;;) switch (_fun19107_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun19107_ip = 56;
                                continue _fun19107
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
                            _fun19107_ip = 67;
                            continue _fun19107;
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
    var _closure1_slot29 = var0;
    var0 = function arg0, arg1() {
        _fun19108: for (var _fun19108_ip = 0;;) switch (_fun19108_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun19108_ip = 23;
                    continue _fun19108
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun19108_ip = 33;
                    continue _fun19108
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
                    _fun19108_ip = 70;
                    continue _fun19108
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun19108_ip = 55;
                    continue _fun19108
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var0 = function arg0, arg1() {
        _fun19109: for (var _fun19109_ip = 0;;) switch (_fun19109_ip) {
            case 0:
                var3 = arg0;
                var0 = arg1;
                var2 = var0.communicationDisabledUntil;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun19109_ip = 152;
                    continue _fun19109
                }
            case 21:
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var8 = 13;
                var4 = var1[var8];
                var1 = undefined;
                var5 = var5.bind(var1)(var4);
                var4 = var5.isMemberCommunicationDisabled;
                var4 = var4.bind(var5)(var0);
                if (!var4) {
                    _fun19109_ip = 152;
                    continue _fun19109
                }
            case 60:
                var5 = _closure1_slot35;
                var4 = var0.userId;
                var4 = var5.bind(var1)(var3, var4);
                var5 = _closure1_slot20;
                var6 = var5[var4];
                var5 = var0.communicationDisabledUntil;
                var5 = var6 !== var5;
                if (!var5) {
                    _fun19109_ip = 124;
                    continue _fun19109
                }
            case 96:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var8];
                var7 = var7.bind(var1)(var6);
                var6 = var7.isMemberCommunicationDisabled;
                var5 = var6.bind(var7)(var0);
            case 124:
                if (!var5) {
                    _fun19109_ip = 150;
                    continue _fun19109
                }
            case 127:
                var6 = _closure1_slot20;
                var5 = var0.communicationDisabledUntil;
                var6[var4] = var5;
                var2 = _closure1_slot33;
                var2 = var2.bind(var1)(var4);
            case 150:
                return var1;
            case 152:
                var2 = _closure1_slot32;
                var1 = var0.userId;
                var0 = undefined;
                var1 = var2.bind(var0)(var3, var1);
                return var0;
        }
    };
    var _closure1_slot31 = var0;
    var0 = function arg0, arg1() {
        _fun19110: for (var _fun19110_ip = 0;;) switch (_fun19110_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var6 = null;
                if (!(var6 == var3)) {
                    _fun19110_ip = 74;
                    continue _fun19110
                }
            case 12:
                var8 = _closure1_slot20;
                var0 = undefined;
                for (var1 in var8)
                    case 29: {
                        case 38: var11 = var1;
                        var10 = _closure1_slot37;
                        var10 = var10.bind(var0)(var11);
                        if (var10 !== var4) {
                            _fun19110_ip = 29;
                            continue _fun19110
                        }
                        case 54: var10 = _closure1_slot33;
                        var10 = var10.bind(var0)(var11);
                        var10 = _closure1_slot34;
                        var10 = var10.bind(var0)(var11);
                        _fun19110_ip = 29;
                        continue _fun19110;
                        case 74: var1 = _closure1_slot35;
                        var2 = undefined;
                        var5 = var1.bind(var2)(var4, var3);
                        var1 = _closure1_slot20;
                        var1 = var1[var5];
                        if (!(var6 != var1)) {
                            _fun19110_ip = 110;
                            continue _fun19110
                        }
                        case 101: var1 = _closure1_slot33;
                        var1 = var1.bind(var2)(var5);
                        case 110: var1 = _closure1_slot34;
                        var0 = _closure1_slot35;
                        var0 = var0.bind(var2)(var4, var3);
                        var0 = var1.bind(var2)(var0);
                    }
            case 129:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot32 = var0;
    var0 = function arg0() {
        var2 = _closure1_slot22;
        var1 = 1;
        var2 = var2 + var1;
        _closure1_slot22 = var2;
        var1 = _closure1_slot24;
        var0 = arg0;
        var1[var0] = var2;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot33 = var0;
    var0 = function arg0() {
        _fun19112: for (var _fun19112_ip = 0;;) switch (_fun19112_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot36;
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var5 = _closure1_slot10;
                var3 = var5.getId;
                var3 = var3.bind(var5)();
                if (!(var4 === var3)) {
                    _fun19112_ip = 53;
                    continue _fun19112
                }
            case 35:
                var4 = _closure1_slot8;
                var3 = _closure1_slot37;
                var3 = var3.bind(var0)(var2);
                var3 = var4.bind(var0)(var3);
            case 53:
                var1 = _closure1_slot20;
                var1 = delete var1[var2];
                return var0;
        }
    };
    var _closure1_slot34 = var0;
    var4 = function arg0, arg1() {
        var2 = new Array(0);
        var1 = _closure1_slot27;
        var3 = var1.GUILD;
        var1 = arg0;
        var2[var3] = var1;
        var0 = _closure1_slot27;
        var1 = var0.USER;
        var0 = arg1;
        var2[var1] = var0;
        var1 = var2.join;
        var0 = '-';
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot35 = var4;
    var3 = function arg0() {
        var2 = arg0;
        var1 = var2.split;
        var0 = '-';
        var1 = var1.bind(var2)(var0);
        var0 = _closure1_slot27;
        var0 = var0.USER;
        var0 = var1[var0];
        return var0;
    };
    var _closure1_slot36 = var3;
    var1 = function arg0() {
        var2 = arg0;
        var1 = var2.split;
        var0 = '-';
        var1 = var1.bind(var2)(var0);
        var0 = _closure1_slot27;
        var0 = var0.GUILD;
        var0 = var1[var0];
        return var0;
    };
    var _closure1_slot37 = var1;
    var0 = function arg0, arg1() {
        _fun19116: for (var _fun19116_ip = 0;;) switch (_fun19116_ip) {
            case 0:
                var16 = arg0;
                var2 = arg1;
                var0 = var2.length;
                var15 = 0;
                if (!(var15 !== var0)) {
                    _fun19116_ip = 540;
                    continue _fun19116
                }
            case 20:
                var0 = _closure1_slot29;
                var1 = undefined;
                var13 = var0.bind(var1)(var2);
                var2 = var13.bind(var1)();
                var0 = var2.done;
                var12 = 14;
                var3 = null;
                var11 = undefined;
                var10 = undefined;
                var9 = undefined;
                var8 = undefined;
                var4 = var2;
                var7 = undefined;
                var5 = undefined;
                var6 = undefined;
                var2 = undefined;
                if (var0) {
                    _fun19116_ip = 396;
                    continue _fun19116
                }
            case 73:
                var0 = var4.value;
                var21 = var16[var0];
                var20 = var11;
                var19 = var10;
                var18 = var9;
                var17 = var8;
                if (!(var3 != var21)) {
                    _fun19116_ip = 354;
                    continue _fun19116
                }
            case 101:
                var22 = var3 == var8;
                if (var22) {
                    _fun19116_ip = 137;
                    continue _fun19116
                }
            case 108:
                var23 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var12];
                var23 = var23.bind(var1)(var0);
                var0 = var23.doesRoleSortHigher;
                var22 = var0.bind(var23)(var21, var8);
            case 137:
                var0 = var8;
                if (!var22) {
                    _fun19116_ip = 146;
                    continue _fun19116
                }
            case 143:
                var0 = var21;
            case 146:
                var22 = var21.color;
                var22 = var22 > var15;
                if (!var22) {
                    _fun19116_ip = 197;
                    continue _fun19116
                }
            case 158:
                var23 = var3 == var11;
                if (var23) {
                    _fun19116_ip = 194;
                    continue _fun19116
                }
            case 165:
                var25 = _closure1_slot0;
                var24 = _closure1_slot2;
                var24 = var24[var12];
                var25 = var25.bind(var1)(var24);
                var24 = var25.doesRoleSortHigher;
                var23 = var24.bind(var25)(var21, var11);
            case 194:
                var22 = var23;
            case 197:
                var23 = var11;
                if (!var22) {
                    _fun19116_ip = 206;
                    continue _fun19116
                }
            case 203:
                var23 = var21;
            case 206:
                var24 = var21.hoist;
                if (!var24) {
                    _fun19116_ip = 254;
                    continue _fun19116
                }
            case 215:
                var22 = var3 == var10;
                if (var22) {
                    _fun19116_ip = 251;
                    continue _fun19116
                }
            case 222:
                var26 = _closure1_slot0;
                var25 = _closure1_slot2;
                var25 = var25[var12];
                var26 = var26.bind(var1)(var25);
                var25 = var26.doesRoleSortHigher;
                var22 = var25.bind(var26)(var21, var10);
            case 251:
                var24 = var22;
            case 254:
                var22 = var10;
                if (!var24) {
                    _fun19116_ip = 263;
                    continue _fun19116
                }
            case 260:
                var22 = var21;
            case 263:
                var24 = var21.icon;
                var24 = var3 != var24;
                if (var24) {
                    _fun19116_ip = 285;
                    continue _fun19116
                }
            case 275:
                var25 = var21.unicodeEmoji;
                var24 = var3 != var25;
            case 285:
                if (!var24) {
                    _fun19116_ip = 327;
                    continue _fun19116
                }
            case 288:
                var25 = var3 == var9;
                if (var25) {
                    _fun19116_ip = 324;
                    continue _fun19116
                }
            case 295:
                var27 = _closure1_slot0;
                var26 = _closure1_slot2;
                var26 = var26[var12];
                var27 = var27.bind(var1)(var26);
                var26 = var27.doesRoleSortHigher;
                var25 = var26.bind(var27)(var21, var9);
            case 324:
                var24 = var25;
            case 327:
                var20 = var23;
                var19 = var22;
                var18 = var9;
                var17 = var0;
                if (!var24) {
                    _fun19116_ip = 354;
                    continue _fun19116
                }
            case 342:
                var20 = var23;
                var19 = var22;
                var18 = var21;
                var17 = var0;
            case 354:
                var21 = var13.bind(var1)();
                var0 = var21.done;
                var11 = var20;
                var10 = var19;
                var9 = var18;
                var8 = var17;
                var4 = var21;
                var7 = var11;
                var5 = var10;
                var6 = var9;
                var2 = var8;
                if (!var0) {
                    _fun19116_ip = 73;
                    continue _fun19116
                }
            case 396:
                var0 = {};
                var4 = var3 == var7;
                var8 = undefined;
                if (var4) {
                    _fun19116_ip = 413;
                    continue _fun19116
                }
            case 407:
                var8 = var7.colorString;
            case 413:
                var9 = var3 != var8;
                var4 = null;
                if (!var9) {
                    _fun19116_ip = 425;
                    continue _fun19116
                }
            case 422:
                var4 = var8;
            case 425:
                var0.colorString = var4;
                var4 = var3 == var7;
                var8 = undefined;
                if (var4) {
                    _fun19116_ip = 445;
                    continue _fun19116
                }
            case 439:
                var8 = var7.colorStrings;
            case 445:
                var9 = var3 != var8;
                var4 = null;
                if (!var9) {
                    _fun19116_ip = 457;
                    continue _fun19116
                }
            case 454:
                var4 = var8;
            case 457:
                var0.colorStrings = var4;
                var8 = var3 == var7;
                var4 = undefined;
                if (var8) {
                    _fun19116_ip = 476;
                    continue _fun19116
                }
            case 471:
                var4 = var7.id;
            case 476:
                var0.colorRoleId = var4;
                var7 = var3 == var6;
                var4 = undefined;
                if (var7) {
                    _fun19116_ip = 495;
                    continue _fun19116
                }
            case 490:
                var4 = var6.id;
            case 495:
                var0.iconRoleId = var4;
                var6 = var3 == var5;
                var4 = undefined;
                if (var6) {
                    _fun19116_ip = 514;
                    continue _fun19116
                }
            case 509:
                var4 = var5.id;
            case 514:
                var0.hoistRoleId = var4;
                var3 = var3 == var2;
                var1 = undefined;
                if (var3) {
                    _fun19116_ip = 533;
                    continue _fun19116
                }
            case 528:
                var1 = var2.id;
            case 533:
                var0.highestRoleId = var1;
                return var0;
            case 540:
                var0 = {
                    'colorString': null,
                    'colorStrings': null
                };
                var1 = undefined;
                var0.colorRoleId = var1;
                var0.hoistRoleId = var1;
                var0.iconRoleId = var1;
                var0.highestRoleId = var1;
                return var0;
        }
    };
    var _closure1_slot38 = var0;
    var0 = function arg0() {
        _fun19117: for (var _fun19117_ip = 0;;) switch (_fun19117_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.userId;
                var18 = var0.nick;
                var3 = var0.guildId;
                var17 = var0.avatar;
                var16 = var0.avatarDecoration;
                var14 = var0.guildRoles;
                var15 = var0.roles;
                var13 = var0.premiumSince;
                var12 = var0.isPending;
                var11 = var0.joinedAt;
                var10 = var0.communicationDisabledUntil;
                var9 = var0.unusualDMActivityUntil;
                var7 = var0.fullProfileLoadedTimestamp;
                var6 = var0.flags;
                var5 = var0.collectibles;
                var1 = var0.displayNameStyles;
                var0 = _closure1_slot38;
                var8 = undefined;
                var14 = var0.bind(var8)(var14, var15);
                var0 = {};
                var0.userId = var2;
                var0.nick = var18;
                var0.guildId = var3;
                var0.avatar = var17;
                var0.avatarDecoration = var16;
                var0.roles = var15;
                var15 = var14.colorString;
                var0.colorString = var15;
                var15 = var14.colorStrings;
                var0.colorStrings = var15;
                var15 = var14.colorRoleId;
                var0.colorRoleId = var15;
                var15 = var14.iconRoleId;
                var0.iconRoleId = var15;
                var15 = var14.hoistRoleId;
                var0.hoistRoleId = var15;
                var14 = var14.highestRoleId;
                var0.highestRoleId = var14;
                var0.premiumSince = var13;
                var0.isPending = var12;
                var0.joinedAt = var11;
                var0.communicationDisabledUntil = var10;
                var0.unusualDMActivityUntil = var9;
                var0.fullProfileLoadedTimestamp = var7;
                var0.flags = var6;
                var0.collectibles = var5;
                var0.displayNameStyles = var1;
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var7 = 15;
                var1 = var1[var7];
                var11 = var5.bind(var8)(var1);
                var10 = var11.hasFlag;
                var1 = var0.flags;
                var5 = null;
                var12 = var5 != var1;
                var6 = 0;
                if (!var12) {
                    _fun19117_ip = 296;
                    continue _fun19117
                }
            case 293:
                var6 = var1;
            case 296:
                var1 = _closure1_slot14;
                var1 = var1.IS_GUEST;
                var1 = var10.bind(var11)(var6, var1);
                if (!var1) {
                    _fun19117_ip = 377;
                    continue _fun19117
                }
            case 315:
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var7 = var6.bind(var8)(var1);
                var6 = var7.addFlag;
                var1 = var0.flags;
                var10 = var5 != var1;
                var9 = 0;
                if (!var10) {
                    _fun19117_ip = 355;
                    continue _fun19117
                }
            case 352:
                var9 = var1;
            case 355:
                var1 = _closure1_slot14;
                var1 = var1.BYPASSES_VERIFICATION;
                var1 = var6.bind(var7)(var9, var1);
                var0.flags = var1;
            case 377:
                var1 = _closure1_slot16;
                var1 = var1[var3];
                if (!(var5 != var1)) {
                    _fun19117_ip = 583;
                    continue _fun19117
                }
            case 392:
                var6 = _closure1_slot10;
                var1 = var6.getId;
                var1 = var1.bind(var6)();
                if (!(var2 === var1)) {
                    _fun19117_ip = 581;
                    continue _fun19117
                }
            case 413:
                var2 = _closure1_slot9;
                var1 = var2.isViewingRoles;
                var1 = var1.bind(var2)(var3);
                if (var1) {
                    _fun19117_ip = 471;
                    continue _fun19117
                }
            case 431:
                var2 = _closure1_slot9;
                var1 = var2.isFullServerPreview;
                var1 = var1.bind(var2)(var3);
                if (var1) {
                    _fun19117_ip = 471;
                    continue _fun19117
                }
            case 449:
                var1 = _closure1_slot18;
                var1 = var1[var3];
                if (!(var5 != var1)) {
                    _fun19117_ip = 581;
                    continue _fun19117
                }
            case 461:
                var1 = _closure1_slot18;
                var1 = delete var1[var3];
                _fun19117_ip = 581;
                continue _fun19117;
            case 471:
                var2 = _closure1_slot9;
                var1 = var2.getViewingRoles;
                var7 = var1.bind(var2)(var3);
                var2 = _closure1_slot18;
                var1 = {};
                var21 = var1;
                var20 = var0;
                var6 = copyDataProperties(var21, var20);
                var9 = _closure1_slot9;
                var6 = var9.getMemberOptions;
                var20 = var6.bind(var9)(var3);
                var21 = var1;
                var6 = copyDataProperties(var21, var20);
                if (!(var5 == var7)) {
                    _fun19117_ip = 538;
                    continue _fun19117
                }
            case 532:
                var5 = new Array(0);
                _fun19117_ip = 568;
                continue _fun19117;
            case 538:
                var6 = _closure1_slot1;
                var9 = _closure1_slot2;
                var4 = 16;
                var4 = var9[var4];
                var6 = var6.bind(var8)(var4);
                var4 = var6.keys;
                var5 = var4.bind(var6)(var7);
            case 568:
                var4 = 'roles';
                var1[var4] = var5;
                var2[var3] = var1;
            case 581:
                return var0;
            case 583:
                return var0;
        }
    };
    var _closure1_slot39 = var0;
    var0 = function arg0() {
        _fun19118: for (var _fun19118_ip = 0;;) switch (_fun19118_ip) {
            case 0:
                var2 = _closure1_slot29;
                var0 = undefined;
                var1 = arg0;
                var6 = var2.bind(var0)(var1);
                var2 = var6.bind(var0)();
                var1 = var2.done;
                var5 = 'roles';
                var4 = null;
                var3 = var2;
                var2 = undefined;
                if (var1) {
                    _fun19118_ip = 269;
                    continue _fun19118
                }
            case 43:
                var11 = var3.value;
                var1 = var11.member;
                var8 = var2;
                if (!(var4 != var1)) {
                    _fun19118_ip = 248;
                    continue _fun19118
                }
            case 64:
                var9 = _closure1_slot19;
                var1 = var11.id;
                var1 = var9[var1];
                var10 = _closure1_slot19;
                var9 = var11.id;
                if (!(var4 != var1)) {
                    _fun19118_ip = 124;
                    continue _fun19118
                }
            case 90:
                var1 = {};
                var13 = var11.member;
                var14 = var1;
                var12 = copyDataProperties(var14, var13);
                var12 = var11.member;
                var12 = var12.roles;
                var1[var5] = var12;
                _fun19118_ip = 130;
                continue _fun19118;
            case 124:
                var1 = var11.member;
            case 130:
                var10[var9] = var1;
                var9 = _closure1_slot16;
                var1 = var11.id;
                var1 = var9[var1];
                var8 = var2;
                if (!(var4 != var1)) {
                    _fun19118_ip = 248;
                    continue _fun19118
                }
            case 154:
                var9 = _closure1_slot16;
                var1 = var11.id;
                var1 = var9[var1];
                var9 = var11.member;
                var9 = var9.userId;
                var9 = var1[var9];
                var8 = var1;
                if (!(var4 != var9)) {
                    _fun19118_ip = 248;
                    continue _fun19118
                }
            case 189:
                var9 = var11.member;
                var10 = var9.userId;
                var9 = {};
                var12 = var11.member;
                var12 = var12.userId;
                var13 = var1[var12];
                var14 = var9;
                var12 = copyDataProperties(var14, var13);
                var11 = var11.member;
                var11 = var11.roles;
                var9[var5] = var11;
                var1[var10] = var9;
                var8 = var1;
            case 248:
                var9 = var6.bind(var0)();
                var1 = var9.done;
                var2 = var8;
                var3 = var9;
                if (!var1) {
                    _fun19118_ip = 43;
                    continue _fun19118
                }
            case 269:
                return var0;
        }
    };
    var _closure1_slot40 = var0;
    var16 = function arg0() {
        _fun19119: for (var _fun19119_ip = 0;;) switch (_fun19119_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.guildId;
                var2 = var0.user;
                var19 = var0.nick;
                var1 = var0.avatar;
                var21 = var0.avatarDecoration;
                var17 = var0.roles;
                var16 = var0.premiumSince;
                var15 = var0.isPending;
                var14 = var0.joinedAt;
                var13 = var0.communicationDisabledUntil;
                var12 = var0.unusualDMActivityUntil;
                var10 = var0.flags;
                var9 = var0.collectibles;
                var8 = var0.displayNameStyles;
                var3 = _closure1_slot16;
                var4 = var3[var5];
                var11 = null;
                if (!(var11 != var4)) {
                    _fun19119_ip = 374;
                    continue _fun19119
                }
            case 104:
                var6 = _closure1_slot13;
                var3 = var6.getGuild;
                var18 = var3.bind(var6)(var5);
                if (!(var11 != var18)) {
                    _fun19119_ip = 325;
                    continue _fun19119
                }
            case 125:
                var6 = var2.id;
                var7 = _closure1_slot39;
                var3 = {};
                var20 = var2.id;
                var3.userId = var20;
                var3.nick = var19;
                var3.guildId = var5;
                var3.avatar = var1;
                var20 = _closure1_slot0;
                var19 = _closure1_slot2;
                var1 = 17;
                var19 = var19[var1];
                var1 = undefined;
                var20 = var20.bind(var1)(var19);
                var19 = var20.parseAvatarDecorationData;
                var19 = var19.bind(var20)(var21);
                var3.avatarDecoration = var19;
                var20 = _closure1_slot12;
                var19 = var20.getUnsafeMutableRoles;
                var18 = var18.id;
                var18 = var19.bind(var20)(var18);
                var3.guildRoles = var18;
                var3.roles = var17;
                var3.premiumSince = var16;
                var3.isPending = var15;
                var3.joinedAt = var14;
                var3.communicationDisabledUntil = var13;
                var3.unusualDMActivityUntil = var12;
                var12 = var2.id;
                var12 = var4[var12];
                var13 = var11 == var12;
                var11 = undefined;
                if (var13) {
                    _fun19119_ip = 276;
                    continue _fun19119
                }
            case 270:
                var11 = var12.fullProfileLoadedTimestamp;
            case 276:
                var3.fullProfileLoadedTimestamp = var11;
                var3.flags = var10;
                var3.collectibles = var9;
                var3.displayNameStyles = var8;
                var3 = var7.bind(var1)(var3);
                var4[var6] = var3;
                var3 = _closure1_slot31;
                var2 = var2.id;
                var2 = var4[var2];
                var2 = var3.bind(var1)(var5, var2);
                return var1;
            case 325:
                var2 = _closure1_slot15;
                var1 = var2.warn;
                var0 = global;
                var0 = var0.HermesInternal;
                var4 = var0.concat;
                var3 = 'Guild ';
                var0 = ' not found during GUILD_MEMBER_UPDATE.';
                var0 = var4.bind(var3)(var5, var0);
                var0 = var1.bind(var2)(var0);
                var0 = false;
                return var0;
            case 374:
                var0 = false;
                return var0;
        }
    };
    var0 = function arg0, arg1() {
        _fun19120: for (var _fun19120_ip = 0;;) switch (_fun19120_ip) {
            case 0:
                var6 = arg0;
                var3 = arg1;
                var _closure2_slot0 = var6;
                var2 = _closure1_slot16;
                var2 = var2[var6];
                var _closure2_slot1 = var2;
                var4 = null;
                if (!(var4 != var2)) {
                    _fun19120_ip = 134;
                    continue _fun19120
                }
            case 33:
                var5 = _closure1_slot13;
                var2 = var5.getGuild;
                var2 = var2.bind(var5)(var6);
                var _closure2_slot2 = var2;
                if (!(var4 != var2)) {
                    _fun19120_ip = 85;
                    continue _fun19120
                }
            case 55:
                var2 = var3.forEach;
                var0 = function(arg0) { // Environment: var0
                    _fun19121: for (var _fun19121_ip = 0;;) switch (_fun19121_ip) {
                        case 0:
                            var1 = arg0;
                            var6 = _closure2_slot1;
                            var0 = var1.user;
                            var0 = var0.id;
                            var10 = var6[var0];
                            var0 = var1.user;
                            var5 = var0.id;
                            var7 = _closure1_slot39;
                            var3 = {};
                            var0 = var1.user;
                            var0 = var0.id;
                            var3.userId = var0;
                            var0 = var1.nick;
                            var3.nick = var0;
                            var0 = _closure2_slot0;
                            var3.guildId = var0;
                            var0 = var1.avatar;
                            var3.avatar = var0;
                            var8 = _closure1_slot42;
                            var0 = undefined;
                            var8 = var8.bind(var0)(var1);
                            var3.avatarDecoration = var8;
                            var11 = _closure1_slot12;
                            var9 = var11.getUnsafeMutableRoles;
                            var8 = _closure2_slot2;
                            var8 = var8.id;
                            var8 = var9.bind(var11)(var8);
                            var3.guildRoles = var8;
                            var8 = var1.roles;
                            var3.roles = var8;
                            var8 = var1.premium_since;
                            var3.premiumSince = var8;
                            var8 = var1.pending;
                            var3.isPending = var8;
                            var8 = var1.joined_at;
                            var3.joinedAt = var8;
                            var8 = var1.communication_disabled_until;
                            var3.communicationDisabledUntil = var8;
                            var8 = var1.flags;
                            var3.flags = var8;
                            var9 = null;
                            var11 = var9 == var10;
                            var8 = undefined;
                            if (var11) {
                                _fun19121_ip = 213;
                                continue _fun19121
                            }
                        case 207:
                            var8 = var10.fullProfileLoadedTimestamp;
                        case 213:
                            var3.fullProfileLoadedTimestamp = var8;
                            var8 = var1.unusual_dm_activity_until;
                            if (!(var9 == var8)) {
                                _fun19121_ip = 246;
                                continue _fun19121
                            }
                        case 228:
                            var11 = var9 == var10;
                            var9 = undefined;
                            if (var11) {
                                _fun19121_ip = 243;
                                continue _fun19121
                            }
                        case 237:
                            var9 = var10.unusualDMActivityUntil;
                        case 243:
                            var8 = var9;
                        case 246:
                            var3.unusualDMActivityUntil = var8;
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var8 = 18;
                            var8 = var10[var8];
                            var12 = var9.bind(var0)(var8);
                            var11 = var12.parseServerUserCollectibles;
                            var8 = var1.collectibles;
                            var8 = var11.bind(var12)(var8);
                            var3.collectibles = var8;
                            var8 = 19;
                            var8 = var10[var8];
                            var10 = var9.bind(var0)(var8);
                            var9 = var10.parseServerDisplayNameStyles;
                            var8 = var1.display_name_styles;
                            var8 = var9.bind(var10)(var8);
                            var3.displayNameStyles = var8;
                            var3 = var7.bind(var0)(var3);
                            var6[var5] = var3;
                            var3 = _closure1_slot31;
                            var2 = _closure2_slot0;
                            var4 = _closure2_slot1;
                            var1 = var1.user;
                            var1 = var1.id;
                            var1 = var4[var1];
                            var1 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0);
                var0 = _closure1_slot23;
                var0 = var0 + 1;
                _closure1_slot23 = var0;
                var0 = true;
                _fun19120_ip = 132;
                continue _fun19120;
            case 85:
                var3 = _closure1_slot15;
                var2 = var3.warn;
                var1 = global;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var4 = 'Guild ';
                var1 = ' not found during batchUpdateGuildMembers.';
                var1 = var5.bind(var4)(var6, var1);
                var1 = var2.bind(var3)(var1);
                var0 = false;
            case 132:
                return var0;
            case 134:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot41 = var0;
    var0 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 17;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.parseAvatarDecorationData;
        var0 = arg0;
        var0 = var0.avatar_decoration_data;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot42 = var0;
    var0 = function arg0, arg1() {
        _fun19123: for (var _fun19123_ip = 0;;) switch (_fun19123_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var0 = _closure1_slot16;
                var0 = var0[var4];
                var5 = null;
                if (!(var5 != var0)) {
                    _fun19123_ip = 60;
                    continue _fun19123
                }
            case 23:
                var1 = var0[var3];
                if (!(var5 != var1)) {
                    _fun19123_ip = 60;
                    continue _fun19123
                }
            case 31:
                var0 = delete var0[var3];
                var1 = _closure1_slot32;
                var0 = undefined;
                var1 = var1.bind(var0)(var4, var3);
                var1 = _closure1_slot23;
                var1 = var1 + 1;
                _closure1_slot23 = var1;
                return var0;
            case 60:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot43 = var0;
    var0 = function arg0, arg1() {
        var5 = arg1;
        var2 = _closure1_slot45;
        var1 = {};
        var3 = arg0;
        var1.id = var3;
        var4 = var5.filter;
        var6 = _closure1_slot1;
        var3 = _closure1_slot2;
        var0 = 21;
        var3 = var3[var0];
        var0 = undefined;
        var3 = var6.bind(var0)(var3);
        var5 = var4.bind(var5)(var3);
        var4 = var5.map;
        var3 = function(arg0) { // Environment: var3
            var0 = arg0;
            var0 = var0.member;
            return var0;
        };
        var3 = var4.bind(var5)(var3);
        var1.members = var3;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot44 = var0;
    var0 = function arg0() {
        _fun19126: for (var _fun19126_ip = 0;;) switch (_fun19126_ip) {
            case 0:
                var11 = arg0;
                var10 = var11.id;
                var0 = _closure1_slot16;
                var0 = var10 in var0;
                if (var0) {
                    _fun19126_ip = 37;
                    continue _fun19126
                }
            case 22:
                var2 = _closure1_slot16;
                var1 = var11.id;
                var0 = {};
                var2[var1] = var0;
            case 37:
                var1 = _closure1_slot13;
                var0 = var1.getGuild;
                var8 = var0.bind(var1)(var10);
                var7 = null;
                if (!(var7 != var8)) {
                    _fun19126_ip = 433;
                    continue _fun19126
                }
            case 60:
                var0 = _closure1_slot16;
                var6 = var0[var10];
                var1 = _closure1_slot29;
                var0 = var11.members;
                var5 = undefined;
                var4 = var1.bind(var5)(var0);
                var1 = var4.bind(var5)();
                var0 = var1.done;
                var3 = 18;
                var2 = 19;
                if (var0) {
                    _fun19126_ip = 429;
                    continue _fun19126
                }
            case 106:
                var14 = var1.value;
                var0 = var14.user;
                var0 = var0.id;
                var17 = var6[var0];
                var13 = _closure1_slot39;
                var12 = {};
                var12.userId = var0;
                var15 = var14.nick;
                var12.nick = var15;
                var15 = var11.id;
                var12.guildId = var15;
                var15 = var14.avatar;
                var12.avatar = var15;
                var15 = _closure1_slot42;
                var15 = var15.bind(var5)(var14);
                var12.avatarDecoration = var15;
                var18 = _closure1_slot12;
                var16 = var18.getUnsafeMutableRoles;
                var15 = var8.id;
                var15 = var16.bind(var18)(var15);
                var12.guildRoles = var15;
                var15 = var14.roles;
                var12.roles = var15;
                var15 = var14.premium_since;
                var12.premiumSince = var15;
                var15 = var14.pending;
                var12.isPending = var15;
                var15 = var14.joined_at;
                var12.joinedAt = var15;
                var15 = var14.communication_disabled_until;
                var12.communicationDisabledUntil = var15;
                var16 = var7 == var17;
                var15 = undefined;
                if (var16) {
                    _fun19126_ip = 275;
                    continue _fun19126
                }
            case 269:
                var15 = var17.fullProfileLoadedTimestamp;
            case 275:
                var12.fullProfileLoadedTimestamp = var15;
                var15 = var14.flags;
                var12.flags = var15;
                var15 = var14.unusual_dm_activity_until;
                if (!(var7 == var15)) {
                    _fun19126_ip = 317;
                    continue _fun19126
                }
            case 299:
                var18 = var7 == var17;
                var16 = undefined;
                if (var18) {
                    _fun19126_ip = 314;
                    continue _fun19126
                }
            case 308:
                var16 = var17.unusualDMActivityUntil;
            case 314:
                var15 = var16;
            case 317:
                var12.unusualDMActivityUntil = var15;
                var16 = _closure1_slot0;
                var15 = _closure1_slot2;
                var17 = var15[var3];
                var19 = var16.bind(var5)(var17);
                var18 = var19.parseServerUserCollectibles;
                var17 = var14.collectibles;
                var17 = var18.bind(var19)(var17);
                var12.collectibles = var17;
                var15 = var15[var2];
                var16 = var16.bind(var5)(var15);
                var15 = var16.parseServerDisplayNameStyles;
                var14 = var14.display_name_styles;
                var14 = var15.bind(var16)(var14);
                var12.displayNameStyles = var14;
                var12 = var13.bind(var5)(var12);
                var6[var0] = var12;
                var0 = _closure1_slot31;
                var0 = var0.bind(var5)(var10, var12);
                var12 = var4.bind(var5)();
                var0 = var12.done;
                var1 = var12;
                if (!var0) {
                    _fun19126_ip = 106;
                    continue _fun19126
                }
            case 429:
                var0 = true;
                return var0;
            case 433:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot45 = var0;
    var15 = function arg0() {
        _fun19127: for (var _fun19127_ip = 0;;) switch (_fun19127_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var3 = _closure1_slot16;
                var2 = var0.guildId;
                var11 = var3[var2];
                var10 = null;
                if (!(var10 != var11)) {
                    _fun19127_ip = 510;
                    continue _fun19127
                }
            case 34:
                var4 = _closure1_slot13;
                var3 = var4.getGuild;
                var2 = var0.guildId;
                var9 = var3.bind(var4)(var2);
                if (!(var10 != var9)) {
                    _fun19127_ip = 449;
                    continue _fun19127
                }
            case 60:
                var3 = _closure1_slot10;
                var2 = var3.getId;
                var8 = var2.bind(var3)();
                var4 = _closure1_slot29;
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 16;
                var3 = var3[var2];
                var2 = undefined;
                var5 = var5.bind(var2)(var3);
                var3 = var5.keys;
                var3 = var3.bind(var5)(var11);
                var7 = var4.bind(var2)(var3);
                var4 = var7.bind(var2)();
                var3 = var4.done;
                var6 = 'GUILD_ROLE_DELETE';
                var5 = 0;
                if (var3) {
                    _fun19127_ip = 447;
                    continue _fun19127
                }
            case 136:
                var3 = var4.value;
                var15 = var11[var3];
                var13 = var15.roles;
                if (!(var10 != var13)) {
                    _fun19127_ip = 170;
                    continue _fun19127
                }
            case 155:
                var13 = var15.roles;
                var13 = var13.length;
                if (!(!(var13 > var5))) {
                    _fun19127_ip = 193;
                    continue _fun19127
                }
            case 170:
                var13 = var15.colorString;
                if (!(var10 == var13)) {
                    _fun19127_ip = 193;
                    continue _fun19127
                }
            case 180:
                var13 = var15.hoistRoleId;
                if (!(var10 != var13)) {
                    _fun19127_ip = 429;
                    continue _fun19127
                }
            case 193:
                if (!(var3 === var8)) {
                    _fun19127_ip = 206;
                    continue _fun19127
                }
            case 197:
                var13 = var0.type;
                if (!(var6 !== var13)) {
                    _fun19127_ip = 214;
                    continue _fun19127
                }
            case 206:
                var16 = var15.roles;
                _fun19127_ip = 235;
                continue _fun19127;
            case 214:
                var17 = var15.roles;
                var14 = var17.filter;
                var13 = function(arg0) { // Environment: var12
                    var0 = _closure2_slot0;
                    var1 = var0.roleId;
                    var0 = arg0;
                    var0 = var0 !== var1;
                    return var0;
                };
                var16 = var14.bind(var17)(var13);
            case 235:
                var14 = _closure1_slot39;
                var13 = {};
                var13.userId = var3;
                var17 = var15.nick;
                var13.nick = var17;
                var17 = var0.guildId;
                var13.guildId = var17;
                var17 = var15.avatar;
                var13.avatar = var17;
                var17 = var15.avatarDecoration;
                var13.avatarDecoration = var17;
                var19 = _closure1_slot12;
                var18 = var19.getUnsafeMutableRoles;
                var17 = var9.id;
                var17 = var18.bind(var19)(var17);
                var13.guildRoles = var17;
                var13.roles = var16;
                var16 = var15.premiumSince;
                var13.premiumSince = var16;
                var16 = var15.isPending;
                var13.isPending = var16;
                var16 = var15.joinedAt;
                var13.joinedAt = var16;
                var16 = var15.flags;
                var13.flags = var16;
                var17 = var10 == var15;
                var16 = undefined;
                if (var17) {
                    _fun19127_ip = 374;
                    continue _fun19127
                }
            case 368:
                var16 = var15.fullProfileLoadedTimestamp;
            case 374:
                var13.fullProfileLoadedTimestamp = var16;
                var16 = var15.collectibles;
                var13.collectibles = var16;
                var15 = var15.displayNameStyles;
                var13.displayNameStyles = var15;
                var13 = var14.bind(var2)(var13);
                var11[var3] = var13;
                var14 = _closure1_slot31;
                var13 = var0.guildId;
                var3 = var11[var3];
                var3 = var14.bind(var2)(var13, var3);
            case 429:
                var13 = var7.bind(var2)();
                var3 = var13.done;
                var4 = var13;
                if (!var3) {
                    _fun19127_ip = 136;
                    continue _fun19127
                }
            case 447:
                return var2;
            case 449:
                var2 = _closure1_slot15;
                var1 = var2.warn;
                var23 = var0.guildId;
                var21 = var0.type;
                var0 = global;
                var0 = var0.HermesInternal;
                var5 = var0.concat;
                var24 = 'Guild ';
                var22 = ' not found during ';
                var20 = '.';
                var0 = var24[var5](var23, var22, var21, var20, var19);
                var0 = var1.bind(var2)(var0);
                var0 = false;
                return var0;
            case 510:
                var0 = false;
                return var0;
        }
    };
    var14 = function arg0() {
        _fun19129: for (var _fun19129_ip = 0;;) switch (_fun19129_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.guildId;
                var1 = _closure1_slot16;
                var4 = var1[var5];
                var1 = null;
                if (!(var1 != var4)) {
                    _fun19129_ip = 298;
                    continue _fun19129
                }
            case 28:
                var3 = _closure1_slot13;
                var2 = var3.getGuild;
                var7 = var2.bind(var3)(var5);
                if (!(var1 != var7)) {
                    _fun19129_ip = 249;
                    continue _fun19129
                }
            case 49:
                var2 = _closure1_slot10;
                var1 = var2.getId;
                var3 = var1.bind(var2)();
                var1 = var4[var3];
                var6 = _closure1_slot39;
                var2 = {};
                var2.userId = var3;
                var8 = var1.nick;
                var2.nick = var8;
                var2.guildId = var5;
                var8 = var1.avatar;
                var2.avatar = var8;
                var8 = var1.avatarDecoration;
                var2.avatarDecoration = var8;
                var9 = _closure1_slot12;
                var8 = var9.getUnsafeMutableRoles;
                var7 = var7.id;
                var7 = var8.bind(var9)(var7);
                var2.guildRoles = var7;
                var7 = var1.roles;
                var2.roles = var7;
                var7 = var1.premiumSince;
                var2.premiumSince = var7;
                var7 = var1.isPending;
                var2.isPending = var7;
                var7 = var1.joinedAt;
                var2.joinedAt = var7;
                var7 = var1.communicationDisabledUntil;
                var2.communicationDisabledUntil = var7;
                var7 = var1.fullProfileLoadedTimestamp;
                var2.fullProfileLoadedTimestamp = var7;
                var7 = var1.flags;
                var2.flags = var7;
                var7 = var1.collectibles;
                var2.collectibles = var7;
                var1 = var1.displayNameStyles;
                var2.displayNameStyles = var1;
                var1 = undefined;
                var2 = var6.bind(var1)(var2);
                var4[var3] = var2;
                return var1;
            case 249:
                var2 = _closure1_slot15;
                var1 = var2.warn;
                var0 = global;
                var0 = var0.HermesInternal;
                var4 = var0.concat;
                var3 = 'Guild ';
                var0 = ' not found during IMPERSONATE_UPDATE.';
                var0 = var4.bind(var3)(var5, var0);
                var0 = var1.bind(var2)(var0);
                var0 = false;
                return var0;
            case 298:
                var0 = false;
                return var0;
        }
    };
    var0 = function arg0, arg1() {
        _fun19130: for (var _fun19130_ip = 0;;) switch (_fun19130_ip) {
            case 0:
                var4 = arg0;
                var5 = arg1;
                var _closure2_slot0 = var4;
                var1 = null;
                var6 = var1 == var4;
                var0 = undefined;
                var2 = undefined;
                if (var6) {
                    _fun19130_ip = 31;
                    continue _fun19130
                }
            case 25:
                var2 = var4.members;
            case 31:
                if (!(var1 != var2)) {
                    _fun19130_ip = 119;
                    continue _fun19130
                }
            case 35:
                if (!(var1 != var5)) {
                    _fun19130_ip = 119;
                    continue _fun19130
                }
            case 39:
                var2 = _closure1_slot45;
                var1 = {};
                var1.id = var5;
                var5 = global;
                var6 = var5.Object;
                var5 = var6.entries;
                var4 = var4.members;
                var6 = var5.bind(var6)(var4);
                var5 = var6.map;
                var4 = function(arg0) { // Environment: var3
                    _fun19131: for (var _fun19131_ip = 0;;) switch (_fun19131_ip) {
                        case 0:
                            var4 = arg0;
                            var2 = var4[Symbol.iterator];
                            var4 = var2().next;
                            var1 = var4().value;
                            var3 = var2;
                            var0 = undefined;
                            var3 = var3 === var0;
                            var5 = undefined;
                            if (var3) {
                                _fun19131_ip = 27;
                                continue _fun19131
                            }
                        case 24:
                            var5 = var1;
                        case 27:
                            var1 = undefined;
                            if (var3) {
                                _fun19131_ip = 57;
                                continue _fun19131
                            }
                        case 32:
                            var6 = var4().value;
                            var4 = var2;
                            var4 = var4 === var0;
                            var1 = undefined;
                            var3 = var4;
                            if (var4) {
                                _fun19131_ip = 57;
                                continue _fun19131
                            }
                        case 51:
                            var1 = var6;
                            var3 = var4;
                        case 57:
                            if (var3) {
                                _fun19131_ip = 63;
                                continue _fun19131
                            }
                        case 60:
                            var2.return();
                        case 63:
                            var2 = _closure2_slot0;
                            var3 = null;
                            var6 = var3 == var2;
                            var2 = undefined;
                            if (var6) {
                                _fun19131_ip = 104;
                                continue _fun19131
                            }
                        case 81:
                            var4 = _closure2_slot0;
                            var4 = var4.users;
                            var6 = var3 == var4;
                            var2 = undefined;
                            if (var6) {
                                _fun19131_ip = 104;
                                continue _fun19131
                            }
                        case 100:
                            var2 = var4[var5];
                        case 104:
                            if (!(var3 == var2)) {
                                _fun19131_ip = 110;
                                continue _fun19131
                            }
                        case 108:
                            return var0;
                        case 110:
                            var0 = {};
                            var9 = var0;
                            var8 = var1;
                            var1 = copyDataProperties(var9, var8);
                            var1 = 'user';
                            var0[var1] = var2;
                            return var0;
                    }
                };
                var5 = var5.bind(var6)(var4);
                var4 = var5.filter;
                var3 = function(arg0) { // Environment: var3
                    var1 = null;
                    var0 = arg0;
                    var0 = var1 != var0;
                    return var0;
                };
                var3 = var4.bind(var5)(var3);
                var1.members = var3;
                var1 = var2.bind(var0)(var1);
                return var0;
            case 119:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot46 = var0;
    var0 = function arg0, arg1() {
        _fun19133: for (var _fun19133_ip = 0;;) switch (_fun19133_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var2 = false;
                var _closure2_slot1 = var2;
                var4 = var0.message_snapshots;
                var2 = null;
                if (!(var2 != var4)) {
                    _fun19133_ip = 42;
                    continue _fun19133
                }
            case 27:
                var3 = var4.forEach;
                var2 = function(arg0) { // Environment: var1
                    _fun19134: for (var _fun19134_ip = 0;;) switch (_fun19134_ip) {
                        case 0:
                            var4 = _closure1_slot46;
                            var0 = arg0;
                            var2 = var0.message;
                            var1 = null;
                            var5 = var1 == var2;
                            var0 = undefined;
                            var3 = undefined;
                            if (var5) {
                                _fun19134_ip = 34;
                                continue _fun19134
                            }
                        case 28:
                            var3 = var2.resolved;
                        case 34:
                            var5 = _closure2_slot0;
                            var5 = var5.message_reference;
                            var6 = var1 == var5;
                            var1 = undefined;
                            if (var6) {
                                _fun19134_ip = 61;
                                continue _fun19134
                            }
                        case 56:
                            var1 = var5.guild_id;
                        case 61:
                            var1 = var4.bind(var0)(var3, var1);
                            if (!var1) {
                                _fun19134_ip = 76;
                                continue _fun19134
                            }
                        case 70:
                            var1 = true;
                            _closure2_slot1 = var1;
                        case 76:
                            return var0;
                    }
                };
                var2 = var3.bind(var4)(var2);
            case 42:
                var4 = _closure1_slot46;
                var3 = var0.resolved;
                var2 = undefined;
                var0 = arg1;
                var0 = var4.bind(var2)(var3, var0);
                if (var0) {
                    _fun19133_ip = 73;
                    continue _fun19133
                }
            case 69:
                var0 = _closure2_slot1;
            case 73:
                return var0;
        }
    };
    var _closure1_slot47 = var0;
    var13 = function arg0() {
        var0 = arg0;
        var3 = var0.message;
        var2 = var0.guildId;
        var1 = _closure1_slot47;
        var0 = undefined;
        var0 = var1.bind(var0)(var3, var2);
        return var0;
    };
    var0 = function arg0() {
        _fun19136: for (var _fun19136_ip = 0;;) switch (_fun19136_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot11;
                var2 = var4.getChannel;
                var1 = var3.channel_id;
                var4 = var2.bind(var4)(var1);
                var2 = _closure1_slot47;
                var0 = null;
                var5 = var0 == var4;
                var0 = undefined;
                var1 = undefined;
                if (var5) {
                    _fun19136_ip = 47;
                    continue _fun19136
                }
            case 42:
                var1 = var4.guild_id;
            case 47:
                var1 = var2.bind(var0)(var3, var1);
                return var0;
        }
    };
    var _closure1_slot48 = var0;
    var12 = function arg0() {
        var0 = arg0;
        var2 = var0.messages;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot48;
            var0 = undefined;
            var1 = arg0;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot49 = var12;
    var7 = function arg0() {
        var0 = arg0;
        var3 = var0.data;
        var0 = new Array(0);
        var _closure2_slot0 = var0;
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var1
            var0 = arg0;
            var2 = var0.messages;
            var1 = var2.forEach;
            var0 = function(arg0) { // Environment: var0
                var2 = arg0;
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot0;
                    var1 = var2.push;
                    var0 = arg0;
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
        var1 = var2.bind(var3)(var1);
        var2 = _closure1_slot49;
        var1 = {};
        var1.messages = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var0 = global;
    var17 = var0.Object;
    var11 = var17.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var11.bind(var17)(var2, var0, var6);
    var19 = 0;
    var6 = var9[var19];
    var0 = undefined;
    var6 = var10.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var18 = 1;
    var6 = var9[var18];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var9[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var9[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var9[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var9[var6];
    var6 = var8.bind(var0)(var6);
    var6 = var6.clearCommunicationDisabledNotice;
    var _closure1_slot8 = var6;
    var6 = 6;
    var6 = var9[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot9 = var6;
    var6 = 7;
    var6 = var9[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot10 = var6;
    var6 = 8;
    var6 = var9[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot11 = var6;
    var6 = 9;
    var6 = var9[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot12 = var6;
    var6 = 10;
    var6 = var9[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot13 = var6;
    var6 = 11;
    var6 = var9[var6];
    var6 = var8.bind(var0)(var6);
    var6 = var6.GuildMemberFlags;
    var _closure1_slot14 = var6;
    var6 = 12;
    var6 = var9[var6];
    var11 = var10.bind(var0)(var6);
    var6 = var11.prototype;
    var17 = Object.create(var6, {
        constructor: {
            value: var11
        }
    });
    var6 = 'GuildMemberStore';
    var23 = var17;
    var22 = var6;
    var11 = new var23[var11](var22, var21);
    var11 = var11 instanceof Object ? var11 : var17;
    var _closure1_slot15 = var11;
    var11 = {};
    var _closure1_slot16 = var11;
    var11 = {};
    var _closure1_slot17 = var11;
    var11 = {};
    var _closure1_slot18 = var11;
    var11 = {};
    var _closure1_slot19 = var11;
    var11 = {};
    var _closure1_slot20 = var11;
    var11 = false;
    var _closure1_slot21 = var11;
    var _closure1_slot22 = var19;
    var _closure1_slot23 = var19;
    var11 = {};
    var _closure1_slot24 = var11;
    var11 = {};
    var _closure1_slot25 = var11;
    var11 = {};
    var17 = new Array(0);
    var11.added = var17;
    var17 = new Array(0);
    var11.removed = var17;
    var _closure1_slot26 = var11;
    var11 = {};
    var11.GUILD = var19;
    var17 = 'GUILD';
    var11[var19] = var17;
    var11.USER = var18;
    var17 = 'USER';
    var11[var18] = var17;
    var _closure1_slot27 = var11;
    var11 = 24;
    var11 = var9[var11];
    var11 = var10.bind(var0)(var11);
    var17 = var11.Store;
    var11 = function(arg0) { // Environment: var5
        var3 = function() {
            _fun19144: for (var _fun19144_ip = 0;;) switch (_fun19144_ip) {
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
                    var0 = _closure1_slot28;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun19144_ip = 69;
                        continue _fun19144
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun19144_ip = 105;
                    continue _fun19144;
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
            var6 = this;
            var5 = var6.waitFor;
            var11 = _closure1_slot10;
            var10 = _closure1_slot11;
            var9 = _closure1_slot12;
            var8 = _closure1_slot13;
            var7 = _closure1_slot9;
            var12 = var6;
            var0 = var12[var5](var11, var10, var9, var8, var7, var6);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(21);
        var0[0] = var4;
        var4 = {};
        var6 = 'getMutableAllGuildsAndMembers';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot16;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'memberOf';
        var4.key = var6;
        var6 = function arg0() {
            var1 = arg0;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 22;
            var2 = var3[var2];
            var3 = undefined;
            var2 = var4.bind(var3)(var2);
            var1 = _closure1_slot16;
            var2 = var2.bind(var3)(var1);
            var1 = var2.toPairs;
            var3 = var1.bind(var2)();
            var2 = var3.filter;
            var1 = function(arg0) { // Environment: var0
                _fun19148: for (var _fun19148_ip = 0;;) switch (_fun19148_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = var3[Symbol.iterator];
                        var3 = var0().next;
                        var1 = var3().value;
                        var1 = var0;
                        var5 = undefined;
                        var2 = var1 === var5;
                        var1 = undefined;
                        if (var2) {
                            _fun19148_ip = 49;
                            continue _fun19148
                        }
                    case 24:
                        var4 = var3().value;
                        var3 = var0;
                        var3 = var3 === var5;
                        var1 = undefined;
                        var2 = var3;
                        if (var3) {
                            _fun19148_ip = 49;
                            continue _fun19148
                        }
                    case 43:
                        var1 = var4;
                        var2 = var3;
                    case 49:
                        if (var2) {
                            _fun19148_ip = 55;
                            continue _fun19148
                        }
                    case 52:
                        var0.return();
                    case 55:
                        var0 = _closure3_slot0;
                        var1 = var1[var0];
                        var0 = null;
                        var0 = var0 != var1;
                        return var0;
                }
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                _fun19149: for (var _fun19149_ip = 0;;) switch (_fun19149_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = var0[Symbol.iterator];
                        var0 = var1().next;
                        var3 = var0().value;
                        var2 = var1;
                        var0 = undefined;
                        var2 = var2 === var0;
                        if (var2) {
                            _fun19149_ip = 25;
                            continue _fun19149
                        }
                    case 22:
                        var0 = var3;
                    case 25:
                        if (var2) {
                            _fun19149_ip = 31;
                            continue _fun19149
                        }
                    case 28:
                        var1.return();
                    case 31:
                        return var0;
                }
            };
            var1 = var1.bind(var2)(var0);
            var0 = var1.value;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getNicknameGuildsMapping';
        var4.key = var6;
        var6 = function arg0() {
            _fun19150: for (var _fun19150_ip = 0;;) switch (_fun19150_ip) {
                case 0:
                    var10 = arg0;
                    var0 = {};
                    var8 = _closure1_slot16;
                    var3 = global;
                    var2 = null;
                    for (var4 in var8)
                        case 24: {
                            case 33: var13 = var4;
                            var11 = _closure1_slot16;
                            var11 = var11[var13];
                            var12 = var11[var10];
                            var14 = var2 == var12;
                            var11 = undefined;
                            if (var14) {
                                _fun19150_ip = 63;
                                continue _fun19150
                            }
                            case 57: var11 = var12.nick;
                            case 63: if (var2 == var11) {
                                _fun19150_ip = 24;
                                continue _fun19150
                            }
                            case 67: var12 = var3.Object;
                            var12 = var12.prototype;
                            var14 = var12.hasOwnProperty;
                            var12 = var14.call;
                            var12 = var12.bind(var14)(var0, var11);
                            if (var12) {
                                _fun19150_ip = 106;
                                continue _fun19150
                            }
                            case 98: var12 = new Array(0);
                            var0[var11] = var12;
                            case 106: var12 = var0[var11];
                            var11 = var12.push;
                            var11 = var11.bind(var12)(var13);
                            _fun19150_ip = 24;
                            continue _fun19150;
                        }
                case 122:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getNicknames';
        var4.key = var6;
        var6 = function arg0() {
            var4 = this;
            var0 = global;
            var2 = var0.Object;
            var1 = var2.keys;
            var3 = var4.getNicknameGuildsMapping;
            var0 = arg0;
            var0 = var3.bind(var4)(var0);
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'isMember';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun19152: for (var _fun19152_ip = 0;;) switch (_fun19152_ip) {
                case 0:
                    var1 = arg0;
                    var3 = arg1;
                    var2 = null;
                    if (!(var2 != var1)) {
                        _fun19152_ip = 44;
                        continue _fun19152
                    }
                case 12:
                    if (!(var2 != var3)) {
                        _fun19152_ip = 44;
                        continue _fun19152
                    }
                case 16:
                    var0 = _closure1_slot16;
                    var1 = var0[var1];
                    var0 = var2 != var1;
                    if (!var0) {
                        _fun19152_ip = 42;
                        continue _fun19152
                    }
                case 34:
                    var1 = var1[var3];
                    var0 = var2 != var1;
                case 42:
                    return var0;
                case 44:
                    var0 = false;
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'isGuestOrLurker';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun19153: for (var _fun19153_ip = 0;;) switch (_fun19153_ip) {
                case 0:
                    var1 = arg0;
                    var3 = arg1;
                    var2 = null;
                    if (!(var2 != var1)) {
                        _fun19153_ip = 59;
                        continue _fun19153
                    }
                case 12:
                    if (!(var2 != var3)) {
                        _fun19153_ip = 59;
                        continue _fun19153
                    }
                case 16:
                    var0 = _closure1_slot16;
                    var1 = var0[var1];
                    var0 = var2 != var1;
                    if (!var0) {
                        _fun19153_ip = 57;
                        continue _fun19153
                    }
                case 34:
                    var3 = var1[var3];
                    var4 = var2 == var3;
                    var1 = undefined;
                    if (var4) {
                        _fun19153_ip = 53;
                        continue _fun19153
                    }
                case 47:
                    var1 = var3.joinedAt;
                case 53:
                    var0 = var2 == var1;
                case 57:
                    return var0;
                case 59:
                    var0 = false;
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'isCurrentUserGuest';
        var4.key = var6;
        var6 = function arg0() {
            _fun19154: for (var _fun19154_ip = 0;;) switch (_fun19154_ip) {
                case 0:
                    var4 = arg0;
                    var0 = null;
                    if (!(var0 != var4)) {
                        _fun19154_ip = 112;
                        continue _fun19154
                    }
                case 9:
                    var3 = _closure1_slot10;
                    var2 = var3.getId;
                    var3 = var2.bind(var3)();
                    var2 = _closure1_slot16;
                    var2 = var2[var4];
                    if (!(var0 != var2)) {
                        _fun19154_ip = 108;
                        continue _fun19154
                    }
                case 38:
                    var4 = var2[var3];
                    if (!(var0 != var4)) {
                        _fun19154_ip = 108;
                        continue _fun19154
                    }
                case 46:
                    var2 = var2[var3];
                    var4 = var2.flags;
                    var0 = var0 != var4;
                    if (!var0) {
                        _fun19154_ip = 106;
                        continue _fun19154
                    }
                case 62:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 15;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.hasFlag;
                    var1 = _closure1_slot14;
                    var1 = var1.IS_GUEST;
                    var0 = var2.bind(var3)(var4, var1);
                case 106:
                    return var0;
                case 108:
                    var0 = false;
                    return var0;
                case 112:
                    var0 = false;
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getMemberIds';
        var4.key = var6;
        var6 = function arg0() {
            _fun19155: for (var _fun19155_ip = 0;;) switch (_fun19155_ip) {
                case 0:
                    var3 = arg0;
                    var1 = null;
                    if (!(var1 != var3)) {
                        _fun19155_ip = 64;
                        continue _fun19155
                    }
                case 9:
                    var2 = _closure1_slot16;
                    var2 = var2[var3];
                    if (!(var1 != var2)) {
                        _fun19155_ip = 58;
                        continue _fun19155
                    }
                case 24:
                    var3 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 16;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var3.bind(var0)(var1);
                    var0 = var1.keys;
                    var0 = var0.bind(var1)(var2);
                    _fun19155_ip = 62;
                    continue _fun19155;
                case 58:
                    var0 = new Array(0);
                case 62:
                    return var0;
                case 64:
                    var0 = new Array(0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getMembers';
        var4.key = var6;
        var6 = function arg0() {
            _fun19156: for (var _fun19156_ip = 0;;) switch (_fun19156_ip) {
                case 0:
                    var2 = arg0;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun19156_ip = 50;
                        continue _fun19156
                    }
                case 9:
                    var1 = _closure1_slot16;
                    var2 = var1[var2];
                    if (!(var0 != var2)) {
                        _fun19156_ip = 44;
                        continue _fun19156
                    }
                case 24:
                    var0 = global;
                    var1 = var0.Object;
                    var0 = var1.values;
                    var0 = var0.bind(var1)(var2);
                    _fun19156_ip = 48;
                    continue _fun19156;
                case 44:
                    var0 = new Array(0);
                case 48:
                    return var0;
                case 50:
                    var0 = new Array(0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'getTrueMember';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun19157: for (var _fun19157_ip = 0;;) switch (_fun19157_ip) {
                case 0:
                    var1 = _closure1_slot16;
                    var0 = arg0;
                    var2 = var1[var0];
                    var0 = null;
                    var1 = var0 != var2;
                    if (!var1) {
                        _fun19157_ip = 30;
                        continue _fun19157
                    }
                case 23:
                    var1 = arg1;
                    var0 = var2[var1];
                case 30:
                    return var0;
            }
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'getMember';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun19158: for (var _fun19158_ip = 0;;) switch (_fun19158_ip) {
                case 0:
                    var4 = arg0;
                    var6 = arg1;
                    var1 = this;
                    var0 = var1.getTrueMember;
                    var3 = var0.bind(var1)(var4, var6);
                    var2 = null;
                    var0 = var3;
                    if (!(var2 != var3)) {
                        _fun19158_ip = 111;
                        continue _fun19158
                    }
                case 30:
                    var7 = _closure1_slot10;
                    var5 = var7.getId;
                    var5 = var5.bind(var7)();
                    var0 = var3;
                    if (!(var6 === var5)) {
                        _fun19158_ip = 111;
                        continue _fun19158
                    }
                case 54:
                    var6 = _closure1_slot9;
                    var5 = var6.isViewingRoles;
                    var5 = var5.bind(var6)(var4);
                    if (var5) {
                        _fun19158_ip = 93;
                        continue _fun19158
                    }
                case 72:
                    var6 = _closure1_slot9;
                    var5 = var6.isFullServerPreview;
                    var5 = var5.bind(var6)(var4);
                    var0 = var3;
                    if (!var5) {
                        _fun19158_ip = 111;
                        continue _fun19158
                    }
                case 93:
                    var1 = _closure1_slot18;
                    var1 = var1[var4];
                    var0 = var3;
                    if (!(var2 != var1)) {
                        _fun19158_ip = 111;
                        continue _fun19158
                    }
                case 108:
                    var0 = var1;
                case 111:
                    return var0;
            }
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'getSelfMember';
        var4.key = var6;
        var6 = function arg0() {
            var3 = this;
            var2 = var3.getMember;
            var1 = _closure1_slot10;
            var0 = var1.getId;
            var1 = var0.bind(var1)();
            var0 = arg0;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'getSelfMemberJoinedAt';
        var4.key = var6;
        var6 = function arg0() {
            _fun19160: for (var _fun19160_ip = 0;;) switch (_fun19160_ip) {
                case 0:
                    var4 = arg0;
                    var5 = this;
                    var0 = _closure1_slot17;
                    var0 = var0[var4];
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun19160_ip = 94;
                        continue _fun19160
                    }
                case 23:
                    var2 = var5.getSelfMember;
                    var2 = var2.bind(var5)(var4);
                    if (!(var1 != var2)) {
                        _fun19160_ip = 92;
                        continue _fun19160
                    }
                case 38:
                    var5 = var2.joinedAt;
                    if (!(var1 != var5)) {
                        _fun19160_ip = 92;
                        continue _fun19160
                    }
                case 48:
                    var5 = global;
                    var6 = var5.Date;
                    var7 = var2.joinedAt;
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var6
                        }
                    });
                    var8 = var5;
                    var2 = new var8[var6](var7, var6);
                    var2 = var2 instanceof Object ? var2 : var5;
                    var3 = _closure1_slot17;
                    var3[var4] = var2;
                    return var2;
                case 92:
                    return var1;
                case 94:
                    return var0;
            }
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'getCachedSelfMember';
        var4.key = var6;
        var6 = function arg0() {
            _fun19161: for (var _fun19161_ip = 0;;) switch (_fun19161_ip) {
                case 0:
                    var1 = _closure1_slot19;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var2 = var0 != var1;
                    if (!var2) {
                        _fun19161_ip = 26;
                        continue _fun19161
                    }
                case 23:
                    var0 = var1;
                case 26:
                    return var0;
            }
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'getNick';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun19162: for (var _fun19162_ip = 0;;) switch (_fun19162_ip) {
                case 0:
                    var4 = arg0;
                    var3 = arg1;
                    var2 = this;
                    var0 = null;
                    if (!(var0 != var4)) {
                        _fun19162_ip = 48;
                        continue _fun19162
                    }
                case 15:
                    if (!(var0 != var3)) {
                        _fun19162_ip = 48;
                        continue _fun19162
                    }
                case 19:
                    var1 = var2.getMember;
                    var2 = var1.bind(var2)(var4, var3);
                    var3 = var0 != var2;
                    var1 = null;
                    if (!var3) {
                        _fun19162_ip = 46;
                        continue _fun19162
                    }
                case 40:
                    var1 = var2.nick;
                case 46:
                    return var1;
                case 48:
                    return var0;
            }
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'getCommunicationDisabledUserMap';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot20;
            return var0;
        };
        var4.value = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'getCommunicationDisabledVersion';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot22;
            return var0;
        };
        var4.value = var6;
        var0[17] = var4;
        var4 = {};
        var6 = 'getPendingRoleUpdates';
        var4.key = var6;
        var6 = function arg0() {
            _fun19165: for (var _fun19165_ip = 0;;) switch (_fun19165_ip) {
                case 0:
                    var2 = _closure1_slot25;
                    var0 = arg0;
                    var0 = var2[var0];
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun19165_ip = 24;
                        continue _fun19165
                    }
                case 20:
                    var0 = _closure1_slot26;
                case 24:
                    return var0;
            }
        };
        var4.value = var6;
        var0[18] = var4;
        var4 = {};
        var6 = 'getMemberRoleWithPendingUpdates';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun19166: for (var _fun19166_ip = 0;;) switch (_fun19166_ip) {
                case 0:
                    var1 = arg0;
                    var3 = this;
                    var2 = var3.getMember;
                    var0 = arg1;
                    var0 = var2.bind(var3)(var1, var0);
                    var3 = null;
                    var2 = var3 == var0;
                    var6 = undefined;
                    var7 = undefined;
                    if (var2) {
                        _fun19166_ip = 40;
                        continue _fun19166
                    }
                case 34:
                    var7 = var0.roles;
                case 40:
                    if (!(var3 == var7)) {
                        _fun19166_ip = 48;
                        continue _fun19166
                    }
                case 44:
                    var7 = new Array(0);
                case 48:
                    var0 = _closure1_slot25;
                    var1 = var0[var1];
                    var0 = var7;
                    if (!(var3 != var1)) {
                        _fun19166_ip = 131;
                        continue _fun19166
                    }
                case 66:
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 22;
                    var3 = var8[var2];
                    var4 = var5.bind(var6)(var3);
                    var3 = var4.difference;
                    var2 = var8[var2];
                    var6 = var5.bind(var6)(var2);
                    var5 = var6.union;
                    var2 = var1.added;
                    var2 = var5.bind(var6)(var7, var2);
                    var1 = var1.removed;
                    var0 = var3.bind(var4)(var2, var1);
                case 131:
                    return var0;
            }
        };
        var4.value = var6;
        var0[19] = var4;
        var4 = {};
        var6 = 'getMemberVersion';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot23;
            return var0;
        };
        var4.value = var5;
        var0[20] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var11 = var11.bind(var0)(var17);
    var11.displayName = var6;
    var6 = 25;
    var6 = var9[var6];
    var22 = var10.bind(var0)(var6);
    var6 = {};
    var17 = function arg0() {
        _fun19168: for (var _fun19168_ip = 0;;) switch (_fun19168_ip) {
            case 0:
                var0 = _closure1_slot21;
                if (var0) {
                    _fun19168_ip = 24;
                    continue _fun19168
                }
            case 10:
                var0 = {};
                _closure1_slot16 = var0;
                var0 = {};
                _closure1_slot17 = var0;
                _fun19168_ip = 30;
                continue _fun19168;
            case 24:
                var0 = false;
                _closure1_slot21 = var0;
            case 30:
                var0 = {};
                _closure1_slot20 = var0;
                var2 = function arg0() {
                    var0 = arg0;
                    var2 = var0.guilds;
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure1_slot45;
                        var0 = undefined;
                        var1 = arg0;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var0 = undefined;
                var1 = arg0;
                var1 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var6.CONNECTION_OPEN = var17;
    var17 = function arg0() {
        var0 = arg0;
        var2 = var0.guilds;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            _fun19172: for (var _fun19172_ip = 0;;) switch (_fun19172_ip) {
                case 0:
                    var2 = arg0;
                    var5 = var2.id;
                    var _closure3_slot0 = var5;
                    var0 = var2.members;
                    var4 = _closure1_slot45;
                    var3 = {};
                    var3.id = var5;
                    var3.members = var0;
                    var0 = undefined;
                    var3 = var4.bind(var0)(var3);
                    var3 = var2.activity_instances;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun19172_ip = 72;
                        continue _fun19172
                    }
                case 57:
                    var2 = var3.forEach;
                    var1 = function(arg0) { // Environment: var1
                        var3 = _closure1_slot44;
                        var2 = _closure3_slot0;
                        var0 = arg0;
                        var1 = var0.participants;
                        var0 = undefined;
                        var1 = var3.bind(var0)(var2, var1);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                case 72:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var6.CONNECTION_OPEN_SUPPLEMENTAL = var17;
    var17 = function arg0() {
        var0 = arg0;
        var2 = var0.guildMembers;
        var0 = {};
        var3 = var0;
        var1 = copyDataProperties(var3, var2);
        _closure1_slot16 = var0;
        var0 = {};
        _closure1_slot17 = var0;
        var0 = undefined;
        return var0;
    };
    var6.OVERLAY_INITIALIZE = var17;
    var17 = function arg0() {
        var0 = arg0;
        var4 = var0.guildMembers;
        var2 = var0.guilds;
        var1 = true;
        _closure1_slot21 = var1;
        var1 = {};
        var5 = var1;
        var3 = copyDataProperties(var5, var4);
        _closure1_slot16 = var1;
        var1 = {};
        _closure1_slot17 = var1;
        var1 = {};
        _closure1_slot19 = var1;
        var1 = _closure1_slot40;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var6.CACHE_LOADED = var17;
    var17 = function arg0() {
        var0 = arg0;
        var2 = var0.guilds;
        var1 = _closure1_slot40;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var6.CACHE_LOADED_LAZY = var17;
    var17 = function arg0() {
        var0 = arg0;
        var2 = var0.guild;
        var1 = _closure1_slot45;
        var0 = undefined;
        var0 = var1.bind(var0)(var2);
        return var0;
    };
    var6.GUILD_CREATE = var17;
    var17 = function arg0() {
        var0 = arg0;
        var0 = var0.guild;
        var3 = _closure1_slot16;
        var2 = var0.id;
        var2 = delete var3[var2];
        var3 = _closure1_slot17;
        var2 = var0.id;
        var2 = delete var3[var2];
        var2 = _closure1_slot32;
        var1 = var0.id;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var6.GUILD_DELETE = var17;
    var6.GUILD_MEMBER_ADD = var16;
    var6.GUILD_MEMBER_UPDATE = var16;
    var16 = function arg0() {
        _fun19179: for (var _fun19179_ip = 0;;) switch (_fun19179_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.guildId;
                var8 = var0.roles;
                var12 = var0.addedRoleIds;
                var18 = var0.removedRoleIds;
                var6 = var0.flags;
                var1 = _closure1_slot10;
                var0 = var1.getId;
                var3 = var0.bind(var1)();
                var0 = _closure1_slot16;
                var2 = var0[var11];
                var7 = null;
                var0 = var7 != var2;
                var5 = null;
                if (!var0) {
                    _fun19179_ip = 71;
                    continue _fun19179
                }
            case 67:
                var5 = var2[var3];
            case 71:
                if (!(var7 != var5)) {
                    _fun19179_ip = 466;
                    continue _fun19179
                }
            case 78:
                var1 = _closure1_slot13;
                var0 = var1.getGuild;
                var9 = var0.bind(var1)(var11);
                if (!(var7 != var9)) {
                    _fun19179_ip = 462;
                    continue _fun19179
                }
            case 99:
                var0 = _closure1_slot25;
                var13 = var0[var11];
                if (!(var7 == var13)) {
                    _fun19179_ip = 113;
                    continue _fun19179
                }
            case 111:
                var13 = {};
            case 113:
                var4 = _closure1_slot25;
                var1 = {};
                var15 = _closure1_slot1;
                var14 = _closure1_slot2;
                var19 = 22;
                var16 = var14[var19];
                var0 = undefined;
                var17 = var15.bind(var0)(var16);
                var16 = var17.difference;
                var14 = var14[var19];
                var20 = var15.bind(var0)(var14);
                var15 = var20.union;
                var14 = var13.added;
                if (!(var7 == var14)) {
                    _fun19179_ip = 176;
                    continue _fun19179
                }
            case 172:
                var14 = new Array(0);
            case 176:
                var15 = var15.bind(var20)(var14, var12);
                var14 = var18;
                if (!(var7 == var14)) {
                    _fun19179_ip = 193;
                    continue _fun19179
                }
            case 189:
                var14 = new Array(0);
            case 193:
                var14 = var16.bind(var17)(var15, var14);
                var1.added = var14;
                var17 = _closure1_slot1;
                var16 = _closure1_slot2;
                var14 = var16[var19];
                var15 = var17.bind(var0)(var14);
                var14 = var15.difference;
                var16 = var16[var19];
                var17 = var17.bind(var0)(var16);
                var16 = var17.union;
                var13 = var13.removed;
                if (!(var7 == var13)) {
                    _fun19179_ip = 256;
                    continue _fun19179
                }
            case 252:
                var13 = new Array(0);
            case 256:
                var13 = var16.bind(var17)(var13, var18);
                if (!(var7 == var12)) {
                    _fun19179_ip = 270;
                    continue _fun19179
                }
            case 266:
                var12 = new Array(0);
            case 270:
                var12 = var14.bind(var15)(var13, var12);
                var1.removed = var12;
                var4[var11] = var1;
                var4 = _closure1_slot39;
                var1 = {};
                var1.userId = var3;
                var1.guildId = var11;
                var11 = var5.nick;
                var1.nick = var11;
                var11 = var5.avatar;
                var1.avatar = var11;
                var11 = var5.avatarDecoration;
                var1.avatarDecoration = var11;
                var11 = _closure1_slot12;
                var10 = var11.getUnsafeMutableRoles;
                var9 = var9.id;
                var9 = var10.bind(var11)(var9);
                var1.guildRoles = var9;
                if (!(var7 == var8)) {
                    _fun19179_ip = 367;
                    continue _fun19179
                }
            case 361:
                var8 = var5.roles;
            case 367:
                var1.roles = var8;
                var8 = var5.premiumSince;
                var1.premiumSince = var8;
                var8 = var5.isPending;
                var1.isPending = var8;
                var8 = var5.joinedAt;
                var1.joinedAt = var8;
                if (!(var7 == var6)) {
                    _fun19179_ip = 414;
                    continue _fun19179
                }
            case 409:
                var6 = var5.flags;
            case 414:
                var1.flags = var6;
                var6 = var5.fullProfileLoadedTimestamp;
                var1.fullProfileLoadedTimestamp = var6;
                var6 = var5.collectibles;
                var1.collectibles = var6;
                var5 = var5.displayNameStyles;
                var1.displayNameStyles = var5;
                var1 = var4.bind(var0)(var1);
                var2[var3] = var1;
                return var0;
            case 462:
                var0 = false;
                return var0;
            case 466:
                var0 = false;
                return var0;
        }
    };
    var6.GUILD_MEMBER_UPDATE_LOCAL = var16;
    var16 = function arg0() {
        _fun19180: for (var _fun19180_ip = 0;;) switch (_fun19180_ip) {
            case 0:
                var1 = _closure1_slot29;
                var0 = arg0;
                var0 = var0.chunks;
                var5 = undefined;
                var4 = var1.bind(var5)(var0);
                var2 = var4.bind(var5)();
                var1 = var2.done;
                var3 = var2;
                var2 = false;
                var0 = false;
                if (var1) {
                    _fun19180_ip = 95;
                    continue _fun19180
                }
            case 42:
                var1 = var3.value;
                var8 = _closure1_slot41;
                var7 = var1.guildId;
                var1 = var1.members;
                var7 = var8.bind(var5)(var7, var1);
                if (var7) {
                    _fun19180_ip = 74;
                    continue _fun19180
                }
            case 71:
                var7 = var2;
            case 74:
                var8 = var4.bind(var5)();
                var1 = var8.done;
                var2 = var7;
                var3 = var8;
                var0 = var2;
                if (!var1) {
                    _fun19180_ip = 42;
                    continue _fun19180
                }
            case 95:
                return var0;
        }
    };
    var6.GUILD_MEMBERS_CHUNK_BATCH = var16;
    var16 = function arg0() {
        var0 = arg0;
        var3 = var0.guildId;
        var0 = var0.user;
        var2 = _closure1_slot43;
        var1 = var0.id;
        var0 = undefined;
        var1 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var6.GUILD_MEMBER_REMOVE = var16;
    var16 = function arg0() {
        var0 = arg0;
        var3 = var0.guildId;
        var2 = var0.userId;
        var1 = _closure1_slot43;
        var0 = undefined;
        var1 = var1.bind(var0)(var3, var2);
        return var0;
    };
    var6.GUILD_MEMBER_REMOVE_LOCAL = var16;
    var16 = function arg0() {
        var0 = arg0;
        var3 = var0.guildId;
        var5 = var0.members;
        var2 = _closure1_slot41;
        var4 = var5.map;
        var1 = function(arg0) { // Environment: var1
            var0 = arg0;
            var0 = var0.member;
            return var0;
        };
        var5 = var4.bind(var5)(var1);
        var4 = var5.filter;
        var6 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 20;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var6.bind(var1)(var0);
        var0 = var0.isNotNullish;
        var0 = var4.bind(var5)(var0);
        var0 = var2.bind(var1)(var3, var0);
        return var0;
    };
    var6.THREAD_MEMBER_LIST_UPDATE = var16;
    var16 = function arg0() {
        _fun19185: for (var _fun19185_ip = 0;;) switch (_fun19185_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.guildId;
                var6 = var0.addedMembers;
                var0 = null;
                var0 = var0 != var6;
                if (!var0) {
                    _fun19185_ip = 91;
                    continue _fun19185
                }
            case 23:
                var3 = _closure1_slot41;
                var5 = var6.map;
                var2 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var0 = var0.member;
                    return var0;
                };
                var6 = var5.bind(var6)(var2);
                var5 = var6.filter;
                var7 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 20;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var7.bind(var2)(var1);
                var1 = var1.isNotNullish;
                var1 = var5.bind(var6)(var1);
                var0 = var3.bind(var2)(var4, var1);
            case 91:
                return var0;
        }
    };
    var6.THREAD_MEMBERS_UPDATE = var16;
    var16 = function arg0() {
        var0 = arg0;
        var3 = var0.guildId;
        var2 = var0.owners;
        var1 = _closure1_slot41;
        var0 = undefined;
        var0 = var1.bind(var0)(var3, var2);
        return var0;
    };
    var6.LOAD_ARCHIVED_THREADS_SUCCESS = var16;
    var16 = function arg0() {
        var0 = arg0;
        var3 = var0.guildId;
        var4 = var0.threads;
        var2 = _closure1_slot41;
        var0 = global;
        var1 = var0.Object;
        var0 = var1.values;
        var5 = var0.bind(var1)(var4);
        var4 = var5.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun19189: for (var _fun19189_ip = 0;;) switch (_fun19189_ip) {
                case 0:
                    var0 = arg0;
                    var1 = arg1;
                    var2 = var1.owner;
                    var3 = null;
                    if (!(var3 != var2)) {
                        _fun19189_ip = 34;
                        continue _fun19189
                    }
                case 18:
                    var4 = var0.push;
                    var2 = var1.owner;
                    var2 = var4.bind(var0)(var2);
                case 34:
                    var5 = var3 == var1;
                    var4 = undefined;
                    if (var5) {
                        _fun19189_ip = 64;
                        continue _fun19189
                    }
                case 43:
                    var5 = var1.first_message;
                    var6 = var3 == var5;
                    var4 = undefined;
                    if (var6) {
                        _fun19189_ip = 64;
                        continue _fun19189
                    }
                case 58:
                    var4 = var5.message_snapshots;
                case 64:
                    if (!(var3 != var4)) {
                        _fun19189_ip = 180;
                        continue _fun19189
                    }
                case 68:
                    var1 = var1.first_message;
                    var4 = var1.message_snapshots;
                    var1 = 0;
                    var1 = var4[var1];
                    var5 = var1.moderator_report;
                    var6 = var3 == var5;
                    var4 = undefined;
                    if (var6) {
                        _fun19189_ip = 107;
                        continue _fun19189
                    }
                case 101:
                    var4 = var5.reported_member;
                case 107:
                    if (!(var3 != var4)) {
                        _fun19189_ip = 133;
                        continue _fun19189
                    }
                case 111:
                    var5 = var0.push;
                    var4 = var1.moderator_report;
                    var4 = var4.reported_member;
                    var4 = var5.bind(var0)(var4);
                case 133:
                    var4 = var1.moderator_report;
                    var5 = var3 == var4;
                    var2 = undefined;
                    if (var5) {
                        _fun19189_ip = 154;
                        continue _fun19189
                    }
                case 148:
                    var2 = var4.reporting_member;
                case 154:
                    if (!(var3 != var2)) {
                        _fun19189_ip = 180;
                        continue _fun19189
                    }
                case 158:
                    var2 = var0.push;
                    var1 = var1.moderator_report;
                    var1 = var1.reporting_member;
                    var1 = var2.bind(var0)(var1);
                case 180:
                    return var0;
            }
        };
        var0 = new Array(0);
        var1 = var4.bind(var5)(var1, var0);
        var0 = undefined;
        var0 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var6.LOAD_FORUM_POSTS = var16;
    var6.GUILD_ROLE_UPDATE = var15;
    var6.GUILD_ROLE_DELETE = var15;
    var15 = function arg0() {
        _fun19190: for (var _fun19190_ip = 0;;) switch (_fun19190_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.guildId;
                var3 = var0.userId;
                var9 = var0.roleId;
                var _closure2_slot0 = var9;
                var1 = _closure1_slot16;
                var2 = var1[var5];
                var7 = null;
                if (!(var7 != var2)) {
                    _fun19190_ip = 245;
                    continue _fun19190
                }
            case 45:
                var6 = _closure1_slot13;
                var1 = var6.getGuild;
                var1 = var1.bind(var6)(var5);
                if (!(var7 != var1)) {
                    _fun19190_ip = 196;
                    continue _fun19190
                }
            case 66:
                var6 = var2[var3];
                if (!(var7 != var6)) {
                    _fun19190_ip = 192;
                    continue _fun19190
                }
            case 74:
                var8 = var6.roles;
                var7 = var8.includes;
                var7 = var7.bind(var8)(var9);
                if (var7) {
                    _fun19190_ip = 97;
                    continue _fun19190
                }
            case 93:
                var7 = false;
                return var7;
            case 97:
                var8 = var6.roles;
                var7 = var8.filter;
                var4 = function(arg0) { // Environment: var4
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var0 !== var1;
                    return var0;
                };
                var4 = var7.bind(var8)(var4);
                var6.roles = var4;
                var8 = _closure1_slot38;
                var7 = _closure1_slot12;
                var4 = var7.getUnsafeMutableRoles;
                var1 = var1.id;
                var7 = var4.bind(var7)(var1);
                var4 = var6.roles;
                var1 = undefined;
                var4 = var8.bind(var1)(var7, var4);
                var1 = {};
                var11 = var1;
                var10 = var6;
                var6 = copyDataProperties(var11, var10);
                var11 = var1;
                var10 = var4;
                var4 = copyDataProperties(var11, var10);
                var2[var3] = var1;
                var1 = true;
                return var1;
            case 192:
                var1 = false;
                return var1;
            case 196:
                var2 = _closure1_slot15;
                var1 = var2.warn;
                var0 = global;
                var0 = var0.HermesInternal;
                var4 = var0.concat;
                var3 = 'Guild ';
                var0 = ' not found during GUILD_MEMBER_UPDATE.';
                var0 = var4.bind(var3)(var5, var0);
                var0 = var1.bind(var2)(var0);
                var0 = false;
                return var0;
            case 245:
                var0 = false;
                return var0;
        }
    };
    var6.GUILD_ROLE_MEMBER_REMOVE = var15;
    var15 = function arg0() {
        _fun19192: for (var _fun19192_ip = 0;;) switch (_fun19192_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.guildId;
                var3 = var0.userId;
                var7 = var0.roleId;
                var1 = _closure1_slot16;
                var2 = var1[var5];
                var4 = null;
                if (!(var4 != var2)) {
                    _fun19192_ip = 252;
                    continue _fun19192
                }
            case 39:
                var6 = _closure1_slot13;
                var1 = var6.getGuild;
                var1 = var1.bind(var6)(var5);
                if (!(var4 != var1)) {
                    _fun19192_ip = 203;
                    continue _fun19192
                }
            case 60:
                var6 = var2[var3];
                if (!(var4 != var6)) {
                    _fun19192_ip = 199;
                    continue _fun19192
                }
            case 71:
                var8 = var6.roles;
                var4 = var8.includes;
                var4 = var4.bind(var8)(var7);
                if (var4) {
                    _fun19192_ip = 195;
                    continue _fun19192
                }
            case 90:
                var11 = var6.roles;
                var4 = new Array(1);
                var10 = 0;
                var12 = var4;
                var8 = arraySpread(var12, var11, var10);
                var4[var8] = var7;
                var7 = 1;
                var7 = var8 + var7;
                var6.roles = var4;
                var8 = _closure1_slot38;
                var7 = _closure1_slot12;
                var4 = var7.getUnsafeMutableRoles;
                var1 = var1.id;
                var7 = var4.bind(var7)(var1);
                var4 = var6.roles;
                var1 = undefined;
                var4 = var8.bind(var1)(var7, var4);
                var1 = {};
                var12 = var1;
                var11 = var6;
                var6 = copyDataProperties(var12, var11);
                var12 = var1;
                var11 = var4;
                var4 = copyDataProperties(var12, var11);
                var2[var3] = var1;
                var1 = true;
                return var1;
            case 195:
                var1 = false;
                return var1;
            case 199:
                var1 = false;
                return var1;
            case 203:
                var2 = _closure1_slot15;
                var1 = var2.warn;
                var0 = global;
                var0 = var0.HermesInternal;
                var4 = var0.concat;
                var3 = 'Guild ';
                var0 = ' not found during GUILD_MEMBER_UPDATE.';
                var0 = var4.bind(var3)(var5, var0);
                var0 = var1.bind(var2)(var0);
                var0 = false;
                return var0;
            case 252:
                var0 = false;
                return var0;
        }
    };
    var6.GUILD_ROLE_MEMBER_ADD = var15;
    var15 = function arg0() {
        _fun19193: for (var _fun19193_ip = 0;;) switch (_fun19193_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildMember;
                var5 = var0.guildId;
                var1 = _closure1_slot16;
                var4 = var1[var5];
                var1 = null;
                if (!(var1 != var4)) {
                    _fun19193_ip = 409;
                    continue _fun19193
                }
            case 34:
                var6 = _closure1_slot13;
                var3 = var6.getGuild;
                var8 = var3.bind(var6)(var5);
                if (!(var1 != var8)) {
                    _fun19193_ip = 360;
                    continue _fun19193
                }
            case 55:
                var1 = var2.user;
                var6 = var1.id;
                var7 = _closure1_slot39;
                var3 = {};
                var1 = var2.user;
                var1 = var1.id;
                var3.userId = var1;
                var1 = var2.nick;
                var3.nick = var1;
                var3.guildId = var5;
                var1 = var2.avatar;
                var3.avatar = var1;
                var9 = _closure1_slot42;
                var1 = undefined;
                var9 = var9.bind(var1)(var2);
                var3.avatarDecoration = var9;
                var10 = _closure1_slot12;
                var9 = var10.getUnsafeMutableRoles;
                var8 = var8.id;
                var8 = var9.bind(var10)(var8);
                var3.guildRoles = var8;
                var8 = var2.roles;
                var3.roles = var8;
                var8 = var2.premium_since;
                var3.premiumSince = var8;
                var8 = var2.pending;
                var3.isPending = var8;
                var8 = var2.joined_at;
                var3.joinedAt = var8;
                var8 = var2.communication_disabled_until;
                var3.communicationDisabledUntil = var8;
                var8 = var2.unusual_dm_activity_until;
                var3.unusualDMActivityUntil = var8;
                var8 = var2.flags;
                var3.flags = var8;
                var8 = global;
                var9 = var8.Date;
                var8 = var9.now;
                var8 = var8.bind(var9)();
                var3.fullProfileLoadedTimestamp = var8;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 18;
                var8 = var10[var8];
                var12 = var9.bind(var1)(var8);
                var11 = var12.parseServerUserCollectibles;
                var8 = var2.collectibles;
                var8 = var11.bind(var12)(var8);
                var3.collectibles = var8;
                var8 = 19;
                var8 = var10[var8];
                var10 = var9.bind(var1)(var8);
                var9 = var10.parseServerDisplayNameStyles;
                var8 = var2.display_name_styles;
                var8 = var9.bind(var10)(var8);
                var3.displayNameStyles = var8;
                var3 = var7.bind(var1)(var3);
                var4[var6] = var3;
                var3 = _closure1_slot31;
                var2 = var2.user;
                var2 = var2.id;
                var2 = var4[var2];
                var2 = var3.bind(var1)(var5, var2);
                return var1;
            case 360:
                var2 = _closure1_slot15;
                var1 = var2.warn;
                var0 = global;
                var0 = var0.HermesInternal;
                var4 = var0.concat;
                var3 = 'Guild ';
                var0 = ' not found during GUILD_MEMBER_UPDATE.';
                var0 = var4.bind(var3)(var5, var0);
                var0 = var1.bind(var2)(var0);
                var0 = false;
                return var0;
            case 409:
                var0 = false;
                return var0;
        }
    };
    var6.GUILD_MEMBER_PROFILE_UPDATE = var15;
    var6.IMPERSONATE_UPDATE = var14;
    var6.IMPERSONATE_STOP = var14;
    var14 = function arg0() {
        _fun19194: for (var _fun19194_ip = 0;;) switch (_fun19194_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.members;
                var2 = var0.length;
                var0 = 0;
                var0 = var2 > var0;
                if (!var0) {
                    _fun19194_ip = 49;
                    continue _fun19194
                }
            case 23:
                var4 = _closure1_slot41;
                var3 = var1.guildId;
                var2 = var1.members;
                var1 = undefined;
                var0 = var4.bind(var1)(var3, var2);
            case 49:
                return var0;
        }
    };
    var6.PASSIVE_UPDATE_V2 = var14;
    var14 = function arg0() {
        _fun19195: for (var _fun19195_ip = 0;;) switch (_fun19195_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildId;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun19195_ip = 29;
                    continue _fun19195
                }
            case 14:
                var0 = _closure1_slot25;
                var0 = delete var0[var1];
                var0 = undefined;
                return var0;
            case 29:
                var0 = false;
                return var0;
        }
    };
    var6.CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES = var14;
    var14 = function arg0() {
        _fun19196: for (var _fun19196_ip = 0;;) switch (_fun19196_ip) {
            case 0:
                var9 = arg0;
                var0 = var9.guildId;
                var8 = null;
                if (!(var8 != var0)) {
                    _fun19196_ip = 228;
                    continue _fun19196
                }
            case 17:
                var2 = _closure1_slot13;
                var1 = var2.getGuild;
                var0 = var9.guildId;
                var0 = var1.bind(var2)(var0);
                if (!(var8 != var0)) {
                    _fun19196_ip = 228;
                    continue _fun19196
                }
            case 46:
                var6 = true;
                _closure1_slot21 = var6;
                var2 = _closure1_slot16;
                var1 = var9.guildId;
                var3 = _closure1_slot16;
                var0 = var9.guildId;
                var0 = var3[var0];
                if (!(var8 == var0)) {
                    _fun19196_ip = 80;
                    continue _fun19196
                }
            case 78:
                var0 = {};
            case 80:
                var2[var1] = var0;
                _closure1_slot21 = var6;
                var2 = _closure1_slot16;
                var1 = var9.guildId;
                var3 = _closure1_slot16;
                var0 = var9.guildId;
                var0 = var3[var0];
                if (!(var8 == var0)) {
                    _fun19196_ip = 116;
                    continue _fun19196
                }
            case 114:
                var0 = {};
            case 116:
                var2[var1] = var0;
                var1 = _closure1_slot29;
                var0 = var9.members;
                var5 = undefined;
                var4 = var1.bind(var5)(var0);
                var2 = var4.bind(var5)();
                var1 = var2.done;
                var3 = false;
                var0 = false;
                if (var1) {
                    _fun19196_ip = 226;
                    continue _fun19196
                }
            case 153:
                var11 = var2.value;
                var10 = _closure1_slot16;
                var1 = var9.guildId;
                var10 = var10[var1];
                var1 = var11.userId;
                var1 = var10[var1];
                if (!(var8 == var1)) {
                    _fun19196_ip = 208;
                    continue _fun19196
                }
            case 184:
                var10 = _closure1_slot16;
                var1 = var9.guildId;
                var10 = var10[var1];
                var1 = var11.userId;
                var10[var1] = var11;
                var3 = true;
            case 208:
                var11 = var4.bind(var5)();
                var1 = var11.done;
                var2 = var11;
                var0 = var3;
                if (!var1) {
                    _fun19196_ip = 153;
                    continue _fun19196
                }
            case 226:
                return var0;
            case 228:
                var0 = false;
                return var0;
        }
    };
    var6.LOCAL_MESSAGES_LOADED = var14;
    var6.MESSAGE_CREATE = var13;
    var6.MESSAGE_UPDATE = var13;
    var6.LOAD_MESSAGES_SUCCESS = var12;
    var6.LOAD_MESSAGES_AROUND_SUCCESS = var12;
    var6.LOAD_RECENT_MENTIONS_SUCCESS = var12;
    var12 = function arg0() {
        var0 = arg0;
        var2 = var0.pins;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var2 = var0.message;
            var1 = _closure1_slot48;
            var0 = undefined;
            var1 = var1.bind(var0)(var2);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var6.LOAD_PINNED_MESSAGES_SUCCESS = var12;
    var6.SEARCH_MESSAGES_SUCCESS = var7;
    var6.MOD_VIEW_SEARCH_MESSAGES_SUCCESS = var7;
    var7 = function arg0() {
        var0 = arg0;
        var3 = var0.guildId;
        var4 = var0.members;
        var2 = _closure1_slot41;
        var1 = var4.map;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.member;
            return var0;
        };
        var1 = var1.bind(var4)(var0);
        var0 = undefined;
        var0 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var6.MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS = var7;
    var7 = function arg0() {
        _fun19201: for (var _fun19201_ip = 0;;) switch (_fun19201_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.location;
                var4 = var0.participants;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 23;
                var0 = var3[var0];
                var3 = undefined;
                var2 = var2.bind(var3)(var0);
                var0 = var2.getEmbeddedActivityLocationGuildId;
                var2 = var0.bind(var2)(var5);
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun19201_ip = 69;
                    continue _fun19201
                }
            case 59:
                var1 = _closure1_slot44;
                var0 = var1.bind(var3)(var2, var4);
            case 69:
                return var0;
        }
    };
    var6.EMBEDDED_ACTIVITY_UPDATE_V2 = var7;
    var7 = function arg0() {
        _fun19202: for (var _fun19202_ip = 0;;) switch (_fun19202_ip) {
            case 0:
                var0 = arg0;
                var4 = _closure1_slot11;
                var3 = var4.getChannel;
                var2 = var0.channelId;
                var4 = var3.bind(var4)(var2);
                var3 = _closure1_slot46;
                var2 = var0.resolved;
                var0 = null;
                var5 = var0 == var4;
                var1 = undefined;
                var0 = undefined;
                if (var5) {
                    _fun19202_ip = 53;
                    continue _fun19202
                }
            case 48:
                var0 = var4.guild_id;
            case 53:
                var0 = var3.bind(var1)(var2, var0);
                return var0;
        }
    };
    var6.INTERACTION_MODAL_CREATE = var7;
    var7 = var11.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var11
        }
    });
    var23 = var7;
    var21 = var6;
    var6 = new var23[var11](var22, var21, var20);
    var6 = var6 instanceof Object ? var6 : var7;
    var7 = 26;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'stores/GuildMemberStore.tsx';
    var7 = var8.bind(var9)(var7);
    var2.default = var6;
    var5 = function arg0, arg1() {
        _fun19203: for (var _fun19203_ip = 0;;) switch (_fun19203_ip) {
            case 0:
                var4 = _closure1_slot35;
                var3 = undefined;
                var2 = arg0;
                var0 = arg1;
                var2 = var4.bind(var3)(var2, var0);
                var0 = _closure1_slot24;
                var3 = var2 in var0;
                var0 = -1;
                if (!var3) {
                    _fun19203_ip = 46;
                    continue _fun19203
                }
            case 38:
                var1 = _closure1_slot24;
                var0 = var1[var2];
            case 46:
                return var0;
        }
    };
    var2.getUserCommunicationDisabledVersion = var5;
    var2.getCommunicationDisabledUserKey = var4;
    var2.getUserIdFromCommunicationDisabledUserKey = var3;
    var2.getGuildIdFromCommunicationDisabledUserKey = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1682, 1673, 1216, 1372, 1674, 1410, 3081, 3, 3082, 1676, 1384, 21, 1605, 1643, 1631, 1304, 1644, 22, 3083, 566, 806, 2]);