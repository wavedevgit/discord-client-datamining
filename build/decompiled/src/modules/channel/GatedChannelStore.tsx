// modules/channel/GatedChannelStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun18978: for (var _fun18978_ip = 0;;) switch (_fun18978_ip) {
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
                _fun18978_ip = 74;
                continue _fun18978;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot19 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function arg0, arg1() {
        _fun18981: for (var _fun18981_ip = 0;;) switch (_fun18981_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun18981_ip = 46;
                    continue _fun18981
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun18981_ip = 55;
                    continue _fun18981
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun18981_ip = 343;
                    continue _fun18981
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun18981_ip = 323;
                    continue _fun18981
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun18981_ip = 283;
                    continue _fun18981
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun18981_ip = 270;
                    continue _fun18981
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
                    _fun18981_ip = 163;
                    continue _fun18981
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun18981_ip = 179;
                    continue _fun18981
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun18981_ip = 249;
                    continue _fun18981
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun18981_ip = 249;
                    continue _fun18981
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun18981_ip = 234;
                    continue _fun18981
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun18981_ip = 247;
                    continue _fun18981
                }
            case 234:
                var8 = _closure1_slot21;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun18981_ip = 265;
                continue _fun18981;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun18981_ip = 283;
                continue _fun18981;
            case 270:
                var6 = _closure1_slot21;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun18981_ip = 323;
                    continue _fun18981
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
                    _fun18981_ip = 330;
                    continue _fun18981
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun18982: for (var _fun18982_ip = 0;;) switch (_fun18982_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun18982_ip = 56;
                                continue _fun18982
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
                            _fun18982_ip = 67;
                            continue _fun18982;
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
    var _closure1_slot20 = var0;
    var0 = function arg0, arg1() {
        _fun18983: for (var _fun18983_ip = 0;;) switch (_fun18983_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun18983_ip = 23;
                    continue _fun18983
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun18983_ip = 33;
                    continue _fun18983
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
                    _fun18983_ip = 70;
                    continue _fun18983
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun18983_ip = 55;
                    continue _fun18983
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function arg0() {
        _fun18984: for (var _fun18984_ip = 0;;) switch (_fun18984_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.guildId;
                var5 = var0.role;
                var1 = var0.isPreviewingRoles;
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                var6 = 14;
                var0 = var0[var6];
                var2 = undefined;
                var3 = var3.bind(var2)(var0);
                var0 = var3.isSubscriptionRole;
                var0 = var0.bind(var3)(var5);
                var3 = !var0;
                var0 = !var3;
                if (var3) {
                    _fun18984_ip = 226;
                    continue _fun18984
                }
            case 68:
                var3 = !var1;
                var1 = !var3;
                if (!var3) {
                    _fun18984_ip = 223;
                    continue _fun18984
                }
            case 80:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var6];
                var6 = var4.bind(var2)(var3);
                var3 = var6.isSubscriptionRoleAvailableForPurchase;
                var4 = null;
                var8 = var4 != var5;
                var2 = undefined;
                if (!var8) {
                    _fun18984_ip = 117;
                    continue _fun18984
                }
            case 114:
                var2 = var5;
            case 117:
                var2 = var3.bind(var6)(var2);
                var3 = !var2;
                var2 = !var3;
                if (!var3) {
                    _fun18984_ip = 220;
                    continue _fun18984
                }
            case 131:
                var6 = var4 == var5;
                var3 = false;
                if (var6) {
                    _fun18984_ip = 214;
                    continue _fun18984
                }
            case 140:
                var8 = _closure1_slot14;
                var6 = var8.getCurrentUser;
                var6 = var6.bind(var8)();
                var8 = var4 == var6;
                var3 = false;
                if (var8) {
                    _fun18984_ip = 214;
                    continue _fun18984
                }
            case 162:
                var8 = _closure1_slot11;
                var7 = var8.getMember;
                var6 = var6.id;
                var6 = var7.bind(var8)(var9, var6);
                var4 = var4 != var6;
                if (!var4) {
                    _fun18984_ip = 211;
                    continue _fun18984
                }
            case 190:
                var7 = var6.roles;
                var6 = var7.includes;
                var5 = var5.id;
                var4 = var6.bind(var7)(var5);
            case 211:
                var3 = var4;
            case 214:
                var3 = !var3;
                var2 = !var3;
            case 220:
                var1 = var2;
            case 223:
                var0 = var1;
            case 226:
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function arg0, arg1() {
        _fun18985: for (var _fun18985_ip = 0;;) switch (_fun18985_ip) {
            case 0:
                var9 = arg0;
                var7 = arg1;
                var2 = var7.features;
                var1 = var2.has;
                var0 = _closure1_slot16;
                var0 = var0.CREATOR_MONETIZABLE;
                var0 = var1.bind(var2)(var0);
                if (var0) {
                    _fun18985_ip = 71;
                    continue _fun18985
                }
            case 38:
                var2 = var7.features;
                var1 = var2.has;
                var0 = _closure1_slot16;
                var0 = var0.CREATOR_MONETIZABLE_PROVISIONAL;
                var0 = var1.bind(var2)(var0);
                if (var0) {
                    _fun18985_ip = 71;
                    continue _fun18985
                }
            case 67:
                var0 = false;
                return var0;
            case 71:
                var2 = _closure1_slot7;
                var1 = var2.isViewingServerShop;
                var0 = var7.id;
                var5 = var1.bind(var2)(var0);
                var0 = global;
                var2 = var0.Object;
                var1 = var2.keys;
                var0 = var9.permissionOverwrites;
                var2 = var1.bind(var2)(var0);
                var0 = var2.length;
                var1 = 0;
                var0 = var1 < var0;
                var4 = 15;
                var3 = undefined;
                if (!var0) {
                    _fun18985_ip = 249;
                    continue _fun18985
                }
            case 134:
                var8 = var2[var1];
                var11 = _closure1_slot12;
                var10 = var11.getRole;
                var0 = var7.id;
                var11 = var10.bind(var11)(var0, var8);
                var10 = _closure1_slot22;
                var0 = {};
                var12 = var7.id;
                var0.guildId = var12;
                var0.role = var11;
                var0.isPreviewingRoles = var5;
                var0 = var10.bind(var3)(var0);
                if (!var0) {
                    _fun18985_ip = 237;
                    continue _fun18985
                }
            case 192:
                var0 = var9.permissionOverwrites;
                var10 = var0[var8];
                var8 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var4];
                var8 = var8.bind(var3)(var0);
                var0 = var8.isChannelAccessGrantedBy;
                var0 = var0.bind(var8)(var9, var10);
                if (var0) {
                    _fun18985_ip = 478;
                    continue _fun18985
                }
            case 237:
                var1 = var1 + 1;
                var0 = var2.length;
                if (var1 < var0) {
                    _fun18985_ip = 134;
                    continue _fun18985
                }
            case 249:
                var1 = _closure1_slot12;
                var0 = var1.getEveryoneRole;
                var2 = var0.bind(var1)(var7);
                var1 = _closure1_slot9;
                var0 = _closure1_slot15;
                var0 = var0.VIEW_CHANNEL;
                var0 = var1.bind(var3)(var2, var0);
                var1 = !var0;
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var4];
                var8 = var2.bind(var3)(var0);
                var2 = var8.isChannelAccessDeniedBy;
                var10 = var9.permissionOverwrites;
                var0 = var7.id;
                var0 = var10[var0];
                var0 = var2.bind(var8)(var9, var0);
                if (!var1) {
                    _fun18985_ip = 474;
                    continue _fun18985
                }
            case 337:
                if (var0) {
                    _fun18985_ip = 474;
                    continue _fun18985
                }
            case 343:
                var1 = _closure1_slot20;
                var8 = _closure1_slot12;
                var2 = var8.getSortedRoles;
                var0 = var7.id;
                var0 = var2.bind(var8)(var0);
                var2 = var1.bind(var3)(var0);
                var1 = var2.bind(var3)();
                var0 = var1.done;
                if (var0) {
                    _fun18985_ip = 474;
                    continue _fun18985
                }
            case 384:
                var9 = var1.value;
                var8 = _closure1_slot22;
                var0 = {};
                var10 = var7.id;
                var0.guildId = var10;
                var0.role = var9;
                var0.isPreviewingRoles = var5;
                var0 = var8.bind(var3)(var0);
                if (!var0) {
                    _fun18985_ip = 453;
                    continue _fun18985
                }
            case 422:
                var8 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var4];
                var8 = var8.bind(var3)(var0);
                var0 = var8.hasViewChannelPermission;
                var0 = var0.bind(var8)(var9);
                if (var0) {
                    _fun18985_ip = 470;
                    continue _fun18985
                }
            case 453:
                var8 = var2.bind(var3)();
                var0 = var8.done;
                var1 = var8;
                if (var0) {
                    _fun18985_ip = 474;
                    continue _fun18985
                }
            case 468:
                _fun18985_ip = 384;
                continue _fun18985;
            case 470:
                var0 = true;
                return var0;
            case 474:
                var0 = false;
                return var0;
            case 478:
                var0 = true;
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function arg0, arg1() {
        _fun18986: for (var _fun18986_ip = 0;;) switch (_fun18986_ip) {
            case 0:
                var3 = arg1;
                var2 = _closure1_slot17;
                var0 = arg0;
                var2 = var2[var0];
                var0 = null;
                if (!(var0 != var2)) {
                    _fun18986_ip = 137;
                    continue _fun18986
                }
            case 23:
                var5 = _closure1_slot10;
                var4 = var5.getChannel;
                var6 = var4.bind(var5)(var3);
                if (!(var0 != var6)) {
                    _fun18986_ip = 133;
                    continue _fun18986
                }
            case 41:
                var7 = _closure1_slot13;
                var5 = var7.getGuild;
                var4 = var6.getGuildId;
                var4 = var4.bind(var6)();
                var5 = var5.bind(var7)(var4);
                if (!(var0 != var5)) {
                    _fun18986_ip = 129;
                    continue _fun18986
                }
            case 69:
                var0 = var2.has;
                var0 = var0.bind(var2)(var3);
                var4 = _closure1_slot23;
                var1 = undefined;
                var1 = var4.bind(var1)(var6, var5);
                var0 = var0 !== var1;
                if (!var0) {
                    _fun18986_ip = 127;
                    continue _fun18986
                }
            case 98:
                if (var1) {
                    _fun18986_ip = 115;
                    continue _fun18986
                }
            case 101:
                var1 = var2.delete;
                var1 = var1.bind(var2)(var3);
                var0 = true;
                _fun18986_ip = 127;
                continue _fun18986;
            case 115:
                var1 = var2.add;
                var1 = var1.bind(var2)(var3);
                var0 = true;
            case 127:
                return var0;
            case 129:
                var0 = false;
                return var0;
            case 133:
                var0 = false;
                return var0;
            case 137:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var11 = function() {
        var1 = {};
        _closure1_slot17 = var1;
        var1 = _closure1_slot18;
        var0 = var1.clear;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var10 = function arg0() {
        var0 = arg0;
        var0 = var0.guild;
        var1 = _closure1_slot17;
        var0 = var0.id;
        var0 = delete var1[var0];
        var0 = undefined;
        return var0;
    };
    var9 = function arg0() {
        var0 = arg0;
        var1 = var0.guildId;
        var0 = _closure1_slot17;
        var0 = delete var0[var1];
        var0 = undefined;
        return var0;
    };
    var8 = function arg0() {
        _fun18990: for (var _fun18990_ip = 0;;) switch (_fun18990_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channel;
                var2 = var1.guild_id;
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun18990_ip = 47;
                    continue _fun18990
                }
            case 22:
                var4 = _closure1_slot24;
                var3 = var1.guild_id;
                var2 = var1.id;
                var1 = undefined;
                var0 = var4.bind(var1)(var3, var2);
            case 47:
                return var0;
        }
    };
    var1 = global;
    var13 = var1.Object;
    var12 = var13.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var12.bind(var13)(var2, var0, var7);
    var0 = 0;
    var7 = var5[var0];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.THREAD_CHANNEL_TYPES;
    var _closure1_slot8 = var7;
    var7 = 7;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.hasPermission;
    var _closure1_slot9 = var7;
    var7 = 8;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot10 = var7;
    var7 = 9;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot11 = var7;
    var7 = 10;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot12 = var7;
    var7 = 11;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot13 = var7;
    var7 = 12;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot14 = var7;
    var7 = 13;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var12 = var7.Permissions;
    var _closure1_slot15 = var12;
    var7 = var7.GuildFeatures;
    var _closure1_slot16 = var7;
    var7 = {};
    var _closure1_slot17 = var7;
    var1 = var1.Set;
    var7 = var1.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var1
        }
    });
    var17 = var7;
    var1 = new var17[var1](var16);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot18 = var1;
    var1 = 17;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun18992: for (var _fun18992_ip = 0;;) switch (_fun18992_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot19;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun18992_ip = 69;
                        continue _fun18992
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun18992_ip = 105;
                    continue _fun18992;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
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
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var7 = this;
            var6 = var7.waitFor;
            var13 = _closure1_slot10;
            var12 = _closure1_slot11;
            var11 = _closure1_slot12;
            var10 = _closure1_slot13;
            var9 = _closure1_slot7;
            var8 = _closure1_slot14;
            var14 = var7;
            var0 = var14[var6](var13, var12, var11, var10, var9, var8, var7);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'isChannelGated';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun18994: for (var _fun18994_ip = 0;;) switch (_fun18994_ip) {
                case 0:
                    var2 = arg0;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun18994_ip = 220;
                        continue _fun18994
                    }
                case 12:
                    var3 = _closure1_slot17;
                    var3 = var3[var2];
                    if (!(var0 == var3)) {
                        _fun18994_ip = 198;
                        continue _fun18994
                    }
                case 30:
                    var5 = _closure1_slot13;
                    var4 = var5.getGuild;
                    var12 = var4.bind(var5)(var2);
                    if (!(var0 != var12)) {
                        _fun18994_ip = 190;
                        continue _fun18994
                    }
                case 51:
                    var4 = _closure1_slot17;
                    var5 = global;
                    var5 = var5.Set;
                    var6 = var5.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var5
                        }
                    });
                    var17 = var6;
                    var5 = new var17[var5](var16);
                    var11 = var5 instanceof Object ? var5 : var6;
                    var4[var2] = var11;
                    var6 = var12.features;
                    var5 = var6.has;
                    var4 = _closure1_slot16;
                    var4 = var4.ROLE_SUBSCRIPTIONS_ENABLED;
                    var4 = var5.bind(var6)(var4);
                    if (!var4) {
                        _fun18994_ip = 190;
                        continue _fun18994
                    }
                case 116:
                    var5 = _closure1_slot10;
                    var4 = var5.getMutableGuildChannelsForGuild;
                    var10 = var4.bind(var5)(var2);
                    var8 = var10;
                    var4 = undefined;
                    for (var5 in var8)
                        case 144: {
                            case 153: var13 = var5;
                            var13 = var10[var13];
                            var14 = _closure1_slot23;
                            var14 = var14.bind(var4)(var13, var12);
                            if (!var14) {
                                _fun18994_ip = 144;
                                continue _fun18994
                            }
                            case 173: var14 = var11.add;
                            var13 = var13.id;
                            var13 = var14.bind(var11)(var13);
                            _fun18994_ip = 144;
                            continue _fun18994;
                        }
                case 190:
                    var1 = _closure1_slot17;
                    var3 = var1[var2];
                case 198:
                    var0 = var0 != var3;
                    if (!var0) {
                        _fun18994_ip = 218;
                        continue _fun18994
                    }
                case 205:
                    var2 = var3.has;
                    var1 = arg1;
                    var0 = var2.bind(var3)(var1);
                case 218:
                    return var0;
                case 220:
                    var0 = false;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'isChannelGatedAndVisible';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun18995: for (var _fun18995_ip = 0;;) switch (_fun18995_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = null;
                    var0 = var0 != var4;
                    if (!var0) {
                        _fun18995_ip = 56;
                        continue _fun18995
                    }
                case 15:
                    var2 = var3.isChannelGated;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var4, var1);
                    if (!var1) {
                        _fun18995_ip = 53;
                        continue _fun18995
                    }
                case 33:
                    var3 = _closure1_slot18;
                    var2 = var3.has;
                    var2 = var2.bind(var3)(var4);
                    var1 = !var2;
                case 53:
                    var0 = var1;
                case 56:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'isChannelOrThreadParentGated';
        var4.key = var6;
        var5 = function arg0, arg1() {
            _fun18996: for (var _fun18996_ip = 0;;) switch (_fun18996_ip) {
                case 0:
                    var4 = arg0;
                    var6 = arg1;
                    var3 = this;
                    var0 = null;
                    if (!(var0 != var4)) {
                        _fun18996_ip = 128;
                        continue _fun18996
                    }
                case 15:
                    var1 = var3.isChannelGated;
                    var1 = var1.bind(var3)(var4, var6);
                    if (var1) {
                        _fun18996_ip = 124;
                        continue _fun18996
                    }
                case 30:
                    var2 = _closure1_slot10;
                    var1 = var2.getChannel;
                    var1 = var1.bind(var2)(var6);
                    var2 = var0 == var1;
                    if (var2) {
                        _fun18996_ip = 64;
                        continue _fun18996
                    }
                case 54:
                    var6 = var1.parent_id;
                    var2 = var0 == var6;
                case 64:
                    if (var2) {
                        _fun18996_ip = 98;
                        continue _fun18996
                    }
                case 67:
                    var6 = _closure1_slot8;
                    var5 = var6.has;
                    var7 = var0 == var1;
                    var0 = undefined;
                    if (var7) {
                        _fun18996_ip = 90;
                        continue _fun18996
                    }
                case 85:
                    var0 = var1.type;
                case 90:
                    var0 = var5.bind(var6)(var0);
                    var2 = !var0;
                case 98:
                    var0 = !var2;
                    if (var2) {
                        _fun18996_ip = 122;
                        continue _fun18996
                    }
                case 104:
                    var2 = var3.isChannelOrThreadParentGated;
                    var1 = var1.parent_id;
                    var0 = var2.bind(var3)(var4, var1);
                case 122:
                    return var0;
                case 124:
                    var0 = true;
                    return var0;
                case 128:
                    var0 = false;
                    return var0;
            }
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'GatedChannelStore';
    var7.displayName = var1;
    var1 = 18;
    var1 = var5[var1];
    var16 = var6.bind(var0)(var1);
    var1 = {};
    var1.CONNECTION_OPEN = var11;
    var1.OVERLAY_INITIALIZE = var11;
    var1.CACHE_LOADED_LAZY = var11;
    var1.GUILD_CREATE = var10;
    var1.GUILD_UPDATE = var10;
    var1.GUILD_DELETE = var10;
    var1.GUILD_ROLE_CREATE = var9;
    var1.GUILD_ROLE_UPDATE = var9;
    var1.GUILD_ROLE_DELETE = var9;
    var1.IMPERSONATE_UPDATE = var9;
    var1.IMPERSONATE_STOP = var9;
    var1.CHANNEL_CREATE = var8;
    var1.CHANNEL_DELETE = var8;
    var8 = function arg0() {
        _fun18997: for (var _fun18997_ip = 0;;) switch (_fun18997_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channels;
                var0 = _closure1_slot20;
                var7 = undefined;
                var6 = var0.bind(var7)(var1);
                var2 = var6.bind(var7)();
                var1 = var2.done;
                var4 = null;
                var3 = var2;
                var2 = false;
                var0 = false;
                if (var1) {
                    _fun18997_ip = 110;
                    continue _fun18997
                }
            case 44:
                var1 = var3.value;
                var10 = var1.guild_id;
                var9 = var2;
                if (!(var4 != var10)) {
                    _fun18997_ip = 89;
                    continue _fun18997
                }
            case 61:
                var11 = _closure1_slot24;
                var10 = var1.guild_id;
                var1 = var1.id;
                var1 = var11.bind(var7)(var10, var1);
                if (!var1) {
                    _fun18997_ip = 86;
                    continue _fun18997
                }
            case 84:
                var2 = true;
            case 86:
                var9 = var2;
            case 89:
                var10 = var6.bind(var7)();
                var1 = var10.done;
                var2 = var9;
                var3 = var10;
                var0 = var2;
                if (!var1) {
                    _fun18997_ip = 44;
                    continue _fun18997
                }
            case 110:
                return var0;
        }
    };
    var1.CHANNEL_UPDATES = var8;
    var8 = function arg0() {
        _fun18998: for (var _fun18998_ip = 0;;) switch (_fun18998_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guildId;
                var5 = var0.restrictions;
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 16;
                var1 = var1[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var1);
                var1 = var4.isRestrictedFromShowingGuildPurchaseEntryPoints;
                var1 = var1.bind(var4)(var5);
                var2 = _closure1_slot18;
                if (var1) {
                    _fun18998_ip = 69;
                    continue _fun18998
                }
            case 57:
                var1 = var2.delete;
                var1 = var1.bind(var2)(var3);
                _fun18998_ip = 79;
                continue _fun18998;
            case 69:
                var1 = var2.add;
                var1 = var1.bind(var2)(var3);
            case 79:
                return var0;
        }
    };
    var1.GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS = var8;
    var3 = function arg0() {
        var0 = arg0;
        var2 = var0.guildId;
        var1 = _closure1_slot18;
        var0 = var1.add;
        var0 = var0.bind(var1)(var2);
        var0 = undefined;
        return var0;
    };
    var1.GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var17 = var3;
    var15 = var1;
    var1 = new var17[var7](var16, var15, var14);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel/GatedChannelStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1673, 1376, 1675, 1372, 1681, 1674, 1410, 1621, 660, 3082, 3083, 3084, 566, 806, 2]);