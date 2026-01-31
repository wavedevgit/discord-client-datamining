// modules/guild_member/GuildMemberUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var11 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var12 = dependencyMap;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var12;
    var9 = function(arg0, arg1, arg2) { // Original name: getGuildMemberAgeInRange, environment: var3
        _fun78945: for (var _fun78945_ip = 0;;) switch (_fun78945_ip) {
            case 0:
                var9 = arg0;
                var0 = arg1;
                var8 = arg2;
                var5 = var0.maxDaysOld;
                var3 = var0.minDaysOld;
                var2 = undefined;
                if (!(var3 === var2)) {
                    _fun78945_ip = 29;
                    continue _fun78945
                }
            case 27:
                var3 = 0;
            case 29:
                var4 = _closure1_slot4;
                var0 = var4.getGuild;
                var4 = var0.bind(var4)(var9);
                var0 = null;
                var7 = var0 == var4;
                var6 = undefined;
                if (var7) {
                    _fun78945_ip = 63;
                    continue _fun78945
                }
            case 57:
                var6 = var4.joinedAt;
            case 63:
                if (!(var0 != var8)) {
                    _fun78945_ip = 144;
                    continue _fun78945
                }
            case 67:
                var7 = _closure1_slot3;
                var4 = var7.getMember;
                var4 = var4.bind(var7)(var9, var8);
                var7 = var0 == var4;
                var2 = undefined;
                if (var7) {
                    _fun78945_ip = 98;
                    continue _fun78945
                }
            case 92:
                var2 = var4.joinedAt;
            case 98:
                var7 = var0 == var2;
                var2 = null;
                if (var7) {
                    _fun78945_ip = 141;
                    continue _fun78945
                }
            case 107:
                var7 = global;
                var8 = var7.Date;
                var11 = var4.joinedAt;
                var7 = var8.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var8
                    }
                });
                var12 = var7;
                var4 = new var12[var8](var11, var10);
                var2 = var4 instanceof Object ? var4 : var7;
            case 141:
                var6 = var2;
            case 144:
                if (!(var0 != var6)) {
                    _fun78945_ip = 215;
                    continue _fun78945
                }
            case 148:
                var2 = global;
                var4 = var2.Date;
                var2 = var4.now;
                var4 = var2.bind(var4)();
                var2 = var6.getTime;
                var2 = var2.bind(var6)();
                var2 = var4 - var2;
                var0 = var0 == var5;
                if (var0) {
                    _fun78945_ip = 198;
                    continue _fun78945
                }
            case 186:
                var4 = _closure1_slot9;
                var4 = var4 * var5;
                var0 = var2 <= var4;
            case 198:
                if (!var0) {
                    _fun78945_ip = 213;
                    continue _fun78945
                }
            case 201:
                var1 = _closure1_slot9;
                var1 = var1 * var3;
                var0 = var2 >= var1;
            case 213:
                return var0;
            case 215:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot10 = var9;
    var8 = function(arg0, arg1, arg2) { // Original name: useGuildMemberAgeInRange, environment: var3
        var5 = arg0;
        var6 = arg1;
        var1 = arg2;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var6;
        var _closure2_slot2 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 6;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var2 = new Array(3);
        var2[0] = var6;
        var2[1] = var5;
        var2[2] = var1;
        var1 = new Array(0);
        var0 = function() { // Environment: var0
            var4 = _closure1_slot10;
            var3 = _closure2_slot0;
            var2 = _closure2_slot1;
            var1 = _closure2_slot2;
            var0 = undefined;
            var0 = var4.bind(var0)(var3, var2, var1);
            return var0;
        };
        var0 = var3.bind(var4)(var1, var0, var2);
        return var0;
    };
    var _closure1_slot11 = var8;
    var7 = function(arg0, arg1) { // Original name: canKickMember, environment: var3
        _fun78948: for (var _fun78948_ip = 0;;) switch (_fun78948_ip) {
            case 0:
                var1 = arg0;
                var5 = arg1;
                var3 = arguments[2];
                var4 = undefined;
                if (!(var3 === var4)) {
                    _fun78948_ip = 33;
                    continue _fun78948
                }
            case 15:
                var2 = _closure1_slot5;
                var0 = new Array(1);
                var0[0] = var2;
                var3 = var0;
            case 33:
                var2 = var3;
                var0 = var2[Symbol.iterator];
                var2 = var0().next;
                var3 = var2().value;
                var2 = var0;
                var2 = var2 === var4;
                var6 = undefined;
                if (var2) {
                    _fun78948_ip = 58;
                    continue _fun78948
                }
            case 55:
                var6 = var3;
            case 58:
                if (var2) {
                    _fun78948_ip = 64;
                    continue _fun78948
                }
            case 61:
                var0.return();
            case 64:
                var0 = null;
                var0 = var0 != var5;
                if (!var0) {
                    _fun78948_ip = 95;
                    continue _fun78948
                }
            case 73:
                var3 = _closure1_slot13;
                var2 = new Array(1);
                var2[0] = var6;
                var0 = var3.bind(var4)(var1, var5, var2);
            case 95:
                if (!var0) {
                    _fun78948_ip = 107;
                    continue _fun78948
                }
            case 98:
                var1 = var1.isProvisional;
                var0 = !var1;
            case 107:
                return var0;
        }
    };
    var _closure1_slot12 = var7;
    var6 = function(arg0, arg1) { // Original name: hasKickMemberPerms, environment: var3
        _fun78949: for (var _fun78949_ip = 0;;) switch (_fun78949_ip) {
            case 0:
                var2 = arg0;
                var5 = arg1;
                var3 = arguments[2];
                var4 = undefined;
                if (!(var3 === var4)) {
                    _fun78949_ip = 33;
                    continue _fun78949
                }
            case 15:
                var1 = _closure1_slot5;
                var0 = new Array(1);
                var0[0] = var1;
                var3 = var0;
            case 33:
                var1 = var3;
                var0 = var1[Symbol.iterator];
                var1 = var0().next;
                var3 = var1().value;
                var1 = var0;
                var1 = var1 === var4;
                var4 = undefined;
                if (var1) {
                    _fun78949_ip = 58;
                    continue _fun78949
                }
            case 55:
                var4 = var3;
            case 58:
                if (var1) {
                    _fun78949_ip = 64;
                    continue _fun78949
                }
            case 61:
                var0.return();
            case 64:
                var0 = null;
                var0 = var0 != var5;
                if (!var0) {
                    _fun78949_ip = 99;
                    continue _fun78949
                }
            case 73:
                var3 = var4.canManageUser;
                var1 = _closure1_slot8;
                var1 = var1.KICK_MEMBERS;
                var0 = var3.bind(var4)(var1, var2, var5);
            case 99:
                if (!var0) {
                    _fun78949_ip = 115;
                    continue _fun78949
                }
            case 102:
                var1 = var2.isNonUserBot;
                var1 = var1.bind(var2)();
                var0 = !var1;
            case 115:
                return var0;
        }
    };
    var _closure1_slot13 = var6;
    var5 = function(arg0, arg1) { // Original name: canBanMember, environment: var3
        _fun78950: for (var _fun78950_ip = 0;;) switch (_fun78950_ip) {
            case 0:
                var1 = arg0;
                var5 = arg1;
                var3 = arguments[2];
                var4 = undefined;
                if (!(var3 === var4)) {
                    _fun78950_ip = 33;
                    continue _fun78950
                }
            case 15:
                var2 = _closure1_slot5;
                var0 = new Array(1);
                var0[0] = var2;
                var3 = var0;
            case 33:
                var2 = var3;
                var0 = var2[Symbol.iterator];
                var2 = var0().next;
                var3 = var2().value;
                var2 = var0;
                var2 = var2 === var4;
                var6 = undefined;
                if (var2) {
                    _fun78950_ip = 58;
                    continue _fun78950
                }
            case 55:
                var6 = var3;
            case 58:
                if (var2) {
                    _fun78950_ip = 64;
                    continue _fun78950
                }
            case 61:
                var0.return();
            case 64:
                var0 = null;
                var0 = var0 != var5;
                if (!var0) {
                    _fun78950_ip = 95;
                    continue _fun78950
                }
            case 73:
                var3 = _closure1_slot15;
                var2 = new Array(1);
                var2[0] = var6;
                var0 = var3.bind(var4)(var1, var5, var2);
            case 95:
                if (!var0) {
                    _fun78950_ip = 107;
                    continue _fun78950
                }
            case 98:
                var1 = var1.isProvisional;
                var0 = !var1;
            case 107:
                return var0;
        }
    };
    var _closure1_slot14 = var5;
    var4 = function(arg0, arg1) { // Original name: hasBanMemberPerms, environment: var3
        _fun78951: for (var _fun78951_ip = 0;;) switch (_fun78951_ip) {
            case 0:
                var1 = arg0;
                var5 = arg1;
                var3 = arguments[2];
                var4 = undefined;
                if (!(var3 === var4)) {
                    _fun78951_ip = 33;
                    continue _fun78951
                }
            case 15:
                var2 = _closure1_slot5;
                var0 = new Array(1);
                var0[0] = var2;
                var3 = var0;
            case 33:
                var2 = var3;
                var0 = var2[Symbol.iterator];
                var2 = var0().next;
                var3 = var2().value;
                var2 = var0;
                var2 = var2 === var4;
                var4 = undefined;
                if (var2) {
                    _fun78951_ip = 58;
                    continue _fun78951
                }
            case 55:
                var4 = var3;
            case 58:
                if (var2) {
                    _fun78951_ip = 64;
                    continue _fun78951
                }
            case 61:
                var0.return();
            case 64:
                var0 = null;
                var0 = var0 != var5;
                if (!var0) {
                    _fun78951_ip = 99;
                    continue _fun78951
                }
            case 73:
                var3 = var4.canManageUser;
                var2 = _closure1_slot8;
                var2 = var2.BAN_MEMBERS;
                var0 = var3.bind(var4)(var2, var1, var5);
            case 99:
                if (!var0) {
                    _fun78951_ip = 115;
                    continue _fun78951
                }
            case 102:
                var2 = var1.isNonUserBot;
                var2 = var2.bind(var1)();
                var0 = !var2;
            case 115:
                if (!var0) {
                    _fun78951_ip = 127;
                    continue _fun78951
                }
            case 118:
                var1 = var1.bot;
                var0 = !var1;
            case 127:
                return var0;
        }
    };
    var _closure1_slot15 = var4;
    var1 = function(arg0, arg1) { // Original name: canManageMessages, environment: var3
        _fun78952: for (var _fun78952_ip = 0;;) switch (_fun78952_ip) {
            case 0:
                var2 = arg0;
                var5 = arg1;
                var3 = arguments[2];
                var4 = undefined;
                if (!(var3 === var4)) {
                    _fun78952_ip = 33;
                    continue _fun78952
                }
            case 15:
                var1 = _closure1_slot5;
                var0 = new Array(1);
                var0[0] = var1;
                var3 = var0;
            case 33:
                var1 = var3;
                var0 = var1[Symbol.iterator];
                var1 = var0().next;
                var3 = var1().value;
                var1 = var0;
                var1 = var1 === var4;
                var4 = undefined;
                if (var1) {
                    _fun78952_ip = 58;
                    continue _fun78952
                }
            case 55:
                var4 = var3;
            case 58:
                if (var1) {
                    _fun78952_ip = 64;
                    continue _fun78952
                }
            case 61:
                var0.return();
            case 64:
                var1 = null;
                var0 = var1 != var2;
                if (!var0) {
                    _fun78952_ip = 77;
                    continue _fun78952
                }
            case 73:
                var0 = var1 != var5;
            case 77:
                if (!var0) {
                    _fun78952_ip = 106;
                    continue _fun78952
                }
            case 80:
                var3 = var4.canManageUser;
                var1 = _closure1_slot8;
                var1 = var1.MANAGE_MESSAGES;
                var0 = var3.bind(var4)(var1, var2, var5);
            case 106:
                if (!var0) {
                    _fun78952_ip = 122;
                    continue _fun78952
                }
            case 109:
                var1 = var2.isNonUserBot;
                var1 = var1.bind(var2)();
                var0 = !var1;
            case 122:
                return var0;
        }
    };
    var _closure1_slot16 = var1;
    var0 = global;
    var15 = var0.Object;
    var14 = var15.defineProperty;
    var10 = {};
    var0 = true;
    var10.value = var0;
    var0 = '__esModule';
    var0 = var14.bind(var15)(var2, var0, var10);
    var0 = 0;
    var10 = var12[var0];
    var0 = undefined;
    var10 = var13.bind(var0)(var10);
    var _closure1_slot3 = var10;
    var10 = 1;
    var10 = var12[var10];
    var10 = var13.bind(var0)(var10);
    var _closure1_slot4 = var10;
    var10 = 2;
    var10 = var12[var10];
    var10 = var13.bind(var0)(var10);
    var _closure1_slot5 = var10;
    var10 = 3;
    var10 = var12[var10];
    var10 = var13.bind(var0)(var10);
    var _closure1_slot6 = var10;
    var10 = 4;
    var10 = var12[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.GuildMemberFlags;
    var _closure1_slot7 = var10;
    var10 = 5;
    var10 = var12[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.Permissions;
    var _closure1_slot8 = var10;
    var10 = 86400000;
    var _closure1_slot9 = var10;
    var10 = 9;
    var10 = var12[var10];
    var12 = var11.bind(var0)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'modules/guild_member/GuildMemberUtils.tsx';
    var10 = var11.bind(var12)(var10);
    var2.getGuildMemberAgeInRange = var9;
    var2.useGuildMemberAgeInRange = var8;
    var8 = function(arg0, arg1) { // Environment: var3
        _fun78953: for (var _fun78953_ip = 0;;) switch (_fun78953_ip) {
            case 0:
                var7 = arg0;
                var6 = arg1;
                var _closure2_slot0 = var7;
                var _closure2_slot1 = var6;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 6;
                var1 = var9[var4];
                var5 = undefined;
                var11 = var8.bind(var5)(var1);
                var10 = var11.useStateFromStores;
                var1 = _closure1_slot3;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() { // Environment: var2
                    _fun78954: for (var _fun78954_ip = 0;;) switch (_fun78954_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 8;
                            var1 = var3[var1];
                            var4 = undefined;
                            var3 = var2.bind(var4)(var1);
                            var2 = var3.hasFlag;
                            var7 = _closure1_slot3;
                            var6 = var7.getMember;
                            var5 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var5 = var6.bind(var7)(var5, var1);
                            var1 = null;
                            var6 = var1 == var5;
                            if (var6) {
                                _fun78954_ip = 72;
                                continue _fun78954
                            }
                        case 67:
                            var4 = var5.flags;
                        case 72:
                            var5 = var1 != var4;
                            var1 = 0;
                            if (!var5) {
                                _fun78954_ip = 84;
                                continue _fun78954
                            }
                        case 81:
                            var1 = var4;
                        case 84:
                            var0 = _closure1_slot7;
                            var0 = var0.DID_REJOIN;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var1 = var10.bind(var11)(var3, var1);
                var3 = var9[var4];
                var12 = var8.bind(var5)(var3);
                var11 = var12.useStateFromStores;
                var3 = _closure1_slot4;
                var10 = new Array(1);
                var10[0] = var3;
                var3 = function() { // Environment: var2
                    _fun78955: for (var _fun78955_ip = 0;;) switch (_fun78955_ip) {
                        case 0:
                            var3 = _closure1_slot4;
                            var1 = var3.getGuild;
                            var0 = _closure2_slot0;
                            var1 = var1.bind(var3)(var0);
                            var0 = null;
                            var0 = var0 != var1;
                            if (!var0) {
                                _fun78955_ip = 102;
                                continue _fun78955
                            }
                        case 33:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 7;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var4.bind(var2)(var3);
                            var2 = var3.extractTimestamp;
                            var1 = var1.id;
                            var2 = var2.bind(var3)(var1);
                            var1 = global;
                            var3 = var1.Date;
                            var1 = var3.now;
                            var1 = var1.bind(var3)();
                            var2 = var1 - var2;
                            var1 = 604800000;
                            var0 = var2 < var1;
                        case 102:
                            return var0;
                    }
                };
                var3 = var11.bind(var12)(var10, var3);
                var4 = var9[var4];
                var9 = var8.bind(var5)(var4);
                var8 = var9.useStateFromStores;
                var10 = _closure1_slot6;
                var4 = new Array(1);
                var4[0] = var10;
                var2 = function() { // Environment: var2
                    _fun78956: for (var _fun78956_ip = 0;;) switch (_fun78956_ip) {
                        case 0:
                            var2 = _closure1_slot6;
                            var1 = var2.getUser;
                            var0 = _closure2_slot1;
                            var1 = var1.bind(var2)(var0);
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun78956_ip = 42;
                                continue _fun78956
                            }
                        case 36:
                            var0 = var1.bot;
                        case 42:
                            return var0;
                    }
                };
                var2 = var8.bind(var9)(var4, var2);
                var4 = _closure1_slot11;
                var0 = {};
                var8 = 7;
                var0.maxDaysOld = var8;
                var0 = var4.bind(var5)(var7, var0, var6);
                if (!var0) {
                    _fun78953_ip = 176;
                    continue _fun78953
                }
            case 173:
                var0 = !var3;
            case 176:
                if (!var0) {
                    _fun78953_ip = 182;
                    continue _fun78953
                }
            case 179:
                var0 = !var2;
            case 182:
                if (!var0) {
                    _fun78953_ip = 188;
                    continue _fun78953
                }
            case 185:
                var0 = !var1;
            case 188:
                return var0;
        }
    };
    var2.useNewMemberBadge = var8;
    var8 = function(arg0, arg1) { // Original name: useCanKickMember, environment: var3
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 6;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot5;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var4 = _closure1_slot12;
            var3 = _closure2_slot0;
            var2 = _closure2_slot1;
            var0 = _closure1_slot5;
            var1 = new Array(1);
            var1[0] = var0;
            var0 = undefined;
            var0 = var4.bind(var0)(var3, var2, var1);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useCanKickMember = var8;
    var2.canKickMember = var7;
    var2.hasKickMemberPerms = var6;
    var6 = function(arg0, arg1) { // Original name: useCanBanMember, environment: var3
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var1 = new Array(0);
        var0 = function() { // Environment: var0
            var3 = _closure1_slot14;
            var2 = _closure2_slot0;
            var1 = _closure2_slot1;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useCanBanMember = var6;
    var2.canBanMember = var5;
    var2.hasBanMemberPerms = var4;
    var3 = function(arg0, arg1) { // Original name: useCanManageMessages, environment: var3
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 6;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot5;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var4 = _closure1_slot16;
            var3 = _closure2_slot0;
            var2 = _closure2_slot1;
            var0 = _closure1_slot5;
            var1 = new Array(1);
            var1[0] = var0;
            var0 = undefined;
            var0 = var4.bind(var0)(var3, var2, var1);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useCanManageMessages = var3;
    var2.canManageMessages = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1672, 1410, 3050, 1613, 3038, 660, 566, 21, 1384, 2]);