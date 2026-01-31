// modules/guild_antiraid/GuildIncidentsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun69554: for (var _fun69554_ip = 0;;) switch (_fun69554_ip) {
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
                _fun69554_ip = 76;
                continue _fun69554;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot13 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function arg0, arg1() {
        _fun69557: for (var _fun69557_ip = 0;;) switch (_fun69557_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun69557_ip = 46;
                    continue _fun69557
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun69557_ip = 55;
                    continue _fun69557
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun69557_ip = 345;
                    continue _fun69557
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun69557_ip = 323;
                    continue _fun69557
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun69557_ip = 283;
                    continue _fun69557
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun69557_ip = 270;
                    continue _fun69557
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
                    _fun69557_ip = 163;
                    continue _fun69557
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun69557_ip = 179;
                    continue _fun69557
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun69557_ip = 249;
                    continue _fun69557
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun69557_ip = 249;
                    continue _fun69557
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun69557_ip = 234;
                    continue _fun69557
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun69557_ip = 247;
                    continue _fun69557
                }
            case 234:
                var8 = _closure1_slot15;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun69557_ip = 265;
                continue _fun69557;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun69557_ip = 283;
                continue _fun69557;
            case 270:
                var6 = _closure1_slot15;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun69557_ip = 323;
                    continue _fun69557
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
                    _fun69557_ip = 330;
                    continue _fun69557
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun69558: for (var _fun69558_ip = 0;;) switch (_fun69558_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun69558_ip = 56;
                                continue _fun69558
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
                            _fun69558_ip = 67;
                            continue _fun69558;
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
    var _closure1_slot14 = var0;
    var0 = function arg0, arg1() {
        _fun69559: for (var _fun69559_ip = 0;;) switch (_fun69559_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun69559_ip = 23;
                    continue _fun69559
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun69559_ip = 33;
                    continue _fun69559
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
                    _fun69559_ip = 70;
                    continue _fun69559
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun69559_ip = 55;
                    continue _fun69559
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function() {
        _fun69560: for (var _fun69560_ip = 0;;) switch (_fun69560_ip) {
            case 0:
                var1 = _closure1_slot8;
                var0 = var1.getGuildsProto;
                var4 = var0.bind(var1)();
                var0 = null;
                if (!(var0 == var4)) {
                    _fun69560_ip = 25;
                    continue _fun69560
                }
            case 23:
                var4 = {};
            case 25:
                var1 = _closure1_slot9;
                var0 = var1.getGuildsArray;
                var2 = var0.bind(var1)();
                var0 = {};
                _closure1_slot12 = var0;
                var1 = _closure1_slot14;
                var0 = undefined;
                var3 = var1.bind(var0)(var2);
                var2 = var3.bind(var0)();
                var1 = var2.done;
                if (var1) {
                    _fun69560_ip = 138;
                    continue _fun69560
                }
            case 68:
                var8 = var2.value;
                var7 = _closure1_slot12;
                var6 = var8.id;
                var1 = {};
                var9 = var8.id;
                var1.guildId = var9;
                var9 = var8.name;
                var1.guildName = var9;
                var8 = var8.id;
                var10 = var4[var8];
                var11 = var1;
                var8 = copyDataProperties(var11, var10);
                var7[var6] = var1;
                var6 = var3.bind(var0)();
                var1 = var6.done;
                var2 = var6;
                if (!var1) {
                    _fun69560_ip = 68;
                    continue _fun69560
                }
            case 138:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function arg0() {
        _fun69561: for (var _fun69561_ip = 0;;) switch (_fun69561_ip) {
            case 0:
                var2 = arg0;
                var3 = null;
                var1 = var3 != var2;
                var0 = null;
                if (!var1) {
                    _fun69561_ip = 101;
                    continue _fun69561
                }
            case 14:
                var1 = global;
                var4 = var1.Object;
                var1 = var4.keys;
                var1 = var1.bind(var4)(var2);
                var4 = var1.length;
                var1 = 0;
                var1 = var4 > var1;
                var0 = null;
                if (!var1) {
                    _fun69561_ip = 101;
                    continue _fun69561
                }
            case 48:
                var1 = {};
                var3 = var2.raid_detected_at;
                var1.raidDetectedAt = var3;
                var3 = var2.dm_spam_detected_at;
                var1.dmSpamDetectedAt = var3;
                var3 = var2.dms_disabled_until;
                var1.dmsDisabledUntil = var3;
                var2 = var2.invites_disabled_until;
                var1.invitesDisabledUntil = var2;
                var0 = var1;
            case 101:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = {};
    var _closure1_slot11 = var1;
    var1 = {};
    var _closure1_slot12 = var1;
    var1 = 10;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun69563: for (var _fun69563_ip = 0;;) switch (_fun69563_ip) {
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
                    var0 = _closure1_slot13;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun69563_ip = 69;
                        continue _fun69563
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun69563_ip = 105;
                    continue _fun69563;
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
            var3 = this;
            var6 = var3.waitFor;
            var10 = _closure1_slot8;
            var9 = _closure1_slot9;
            var5 = _closure1_slot10;
            var4 = _closure1_slot7;
            var11 = var3;
            var8 = var5;
            var7 = var4;
            var1 = var11[var6](var10, var9, var8, var7, var6);
            var2 = var3.syncWith;
            var6 = _closure1_slot8;
            var1 = new Array(4);
            var1[0] = var6;
            var6 = _closure1_slot9;
            var1[1] = var6;
            var1[2] = var5;
            var1[3] = var4;
            var0 = _closure1_slot16;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'getGuildIncident';
        var4.key = var6;
        var6 = function arg0() {
            var1 = _closure1_slot11;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getIncidentsByGuild';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot11;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getGuildAlertSettings';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot12;
            return var0;
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'GuildIncidentsStore';
    var7.displayName = var1;
    var1 = 11;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function arg0() {
        _fun69568: for (var _fun69568_ip = 0;;) switch (_fun69568_ip) {
            case 0:
                var0 = {};
                _closure1_slot11 = var0;
                var2 = _closure1_slot14;
                var0 = arg0;
                var1 = var0.guilds;
                var0 = undefined;
                var5 = var2.bind(var0)(var1);
                var2 = var5.bind(var0)();
                var1 = var2.done;
                var4 = 9;
                var3 = null;
                if (var1) {
                    _fun69568_ip = 187;
                    continue _fun69568
                }
            case 49:
                var1 = var2.value;
                var8 = _closure1_slot17;
                var9 = var1.properties;
                var10 = var3 == var9;
                var7 = undefined;
                if (var10) {
                    _fun69568_ip = 79;
                    continue _fun69568
                }
            case 73:
                var7 = var9.incidents_data;
            case 79:
                var8 = var8.bind(var0)(var7);
                var7 = var3 != var8;
                if (!var7) {
                    _fun69568_ip = 153;
                    continue _fun69568
                }
            case 91:
                var10 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var4];
                var10 = var10.bind(var0)(var9);
                var9 = var10.hasDetectedActivity;
                var9 = var9.bind(var10)(var8);
                if (var9) {
                    _fun69568_ip = 150;
                    continue _fun69568
                }
            case 122:
                var11 = _closure1_slot0;
                var10 = _closure1_slot1;
                var10 = var10[var4];
                var11 = var11.bind(var0)(var10);
                var10 = var11.isUnderLockdown;
                var9 = var10.bind(var11)(var8);
            case 150:
                var7 = var9;
            case 153:
                if (!var7) {
                    _fun69568_ip = 169;
                    continue _fun69568
                }
            case 156:
                var7 = _closure1_slot11;
                var1 = var1.id;
                var7[var1] = var8;
            case 169:
                var7 = var5.bind(var0)();
                var1 = var7.done;
                var2 = var7;
                if (!var1) {
                    _fun69568_ip = 49;
                    continue _fun69568
                }
            case 187:
                return var0;
        }
    };
    var1.CONNECTION_OPEN = var8;
    var8 = function arg0() {
        _fun69569: for (var _fun69569_ip = 0;;) switch (_fun69569_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guild;
                var5 = _closure1_slot17;
                var6 = var1.properties;
                var4 = null;
                var7 = var4 == var6;
                var0 = undefined;
                var3 = undefined;
                if (var7) {
                    _fun69569_ip = 40;
                    continue _fun69569
                }
            case 34:
                var3 = var6.incidents_data;
            case 40:
                var3 = var5.bind(var0)(var3);
                var4 = var4 != var3;
                if (!var4) {
                    _fun69569_ip = 117;
                    continue _fun69569
                }
            case 52:
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var8 = 9;
                var5 = var5[var8];
                var6 = var6.bind(var0)(var5);
                var5 = var6.hasDetectedActivity;
                var5 = var5.bind(var6)(var3);
                if (var5) {
                    _fun69569_ip = 114;
                    continue _fun69569
                }
            case 86:
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var8];
                var7 = var7.bind(var0)(var6);
                var6 = var7.isUnderLockdown;
                var5 = var6.bind(var7)(var3);
            case 114:
                var4 = var5;
            case 117:
                if (!var4) {
                    _fun69569_ip = 133;
                    continue _fun69569
                }
            case 120:
                var2 = _closure1_slot11;
                var1 = var1.id;
                var2[var1] = var3;
            case 133:
                return var0;
        }
    };
    var1.GUILD_CREATE = var8;
    var8 = function arg0() {
        _fun69570: for (var _fun69570_ip = 0;;) switch (_fun69570_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guild;
                var4 = _closure1_slot17;
                var3 = var1.incidents_data;
                var0 = undefined;
                var3 = var4.bind(var0)(var3);
                var4 = null;
                if (!(var4 != var3)) {
                    _fun69570_ip = 99;
                    continue _fun69570
                }
            case 34:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var6 = 9;
                var4 = var4[var6];
                var5 = var5.bind(var0)(var4);
                var4 = var5.hasDetectedActivity;
                var4 = var4.bind(var5)(var3);
                if (var4) {
                    _fun69570_ip = 114;
                    continue _fun69570
                }
            case 68:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var6];
                var5 = var5.bind(var0)(var4);
                var4 = var5.isUnderLockdown;
                var4 = var4.bind(var5)(var3);
                if (var4) {
                    _fun69570_ip = 114;
                    continue _fun69570
                }
            case 99:
                var5 = _closure1_slot11;
                var4 = var1.id;
                var4 = delete var5[var4];
                _fun69570_ip = 127;
                continue _fun69570;
            case 114:
                var2 = _closure1_slot11;
                var1 = var1.id;
                var2[var1] = var3;
            case 127:
                return var0;
        }
    };
    var1.GUILD_UPDATE = var8;
    var8 = function arg0() {
        var0 = arg0;
        var0 = var0.guild;
        var1 = _closure1_slot11;
        var0 = var0.id;
        var0 = delete var1[var0];
        var0 = undefined;
        return var0;
    };
    var1.GUILD_DELETE = var8;
    var3 = function() {
        var0 = {};
        _closure1_slot11 = var0;
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
    var12 = var3;
    var10 = var1;
    var1 = new var12[var7](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_antiraid/GuildIncidentsStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1590, 1310, 1410, 3050, 6691, 566, 806, 2]);