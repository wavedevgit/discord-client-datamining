// modules/app_database/modules/Guilds.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var0 = metroImportAll;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun93113: for (var _fun93113_ip = 0;;) switch (_fun93113_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun93113_ip = 46;
                    continue _fun93113
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun93113_ip = 55;
                    continue _fun93113
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun93113_ip = 345;
                    continue _fun93113
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun93113_ip = 323;
                    continue _fun93113
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun93113_ip = 283;
                    continue _fun93113
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun93113_ip = 270;
                    continue _fun93113
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
                    _fun93113_ip = 163;
                    continue _fun93113
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun93113_ip = 179;
                    continue _fun93113
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun93113_ip = 249;
                    continue _fun93113
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun93113_ip = 249;
                    continue _fun93113
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun93113_ip = 234;
                    continue _fun93113
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun93113_ip = 247;
                    continue _fun93113
                }
            case 234:
                var8 = _closure1_slot13;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun93113_ip = 265;
                continue _fun93113;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun93113_ip = 283;
                continue _fun93113;
            case 270:
                var6 = _closure1_slot13;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun93113_ip = 323;
                    continue _fun93113
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
                    _fun93113_ip = 330;
                    continue _fun93113
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun93114: for (var _fun93114_ip = 0;;) switch (_fun93114_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun93114_ip = 56;
                                continue _fun93114
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
                            _fun93114_ip = 67;
                            continue _fun93114;
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
    var _closure1_slot12 = var0;
    var0 = function arg0, arg1() {
        _fun93115: for (var _fun93115_ip = 0;;) switch (_fun93115_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun93115_ip = 23;
                    continue _fun93115
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun93115_ip = 33;
                    continue _fun93115
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
                    _fun93115_ip = 70;
                    continue _fun93115
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun93115_ip = 55;
                    continue _fun93115
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.updateJoinedAt;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var7 = var6.bind(var0)(var3);
    var3 = var7.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var11 = 'Guilds';
    var12 = var6;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot11 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot5;
        var2 = function() {
            var2 = this;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot4;
            var1 = _closure2_slot2;
            var0 = undefined;
            var1 = var4.bind(var0)(var2, var1);
            var1 = {};
            var4 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleBackgroundSync;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.BACKGROUND_SYNC = var4;
            var4 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleConnectionOpen;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.CONNECTION_OPEN = var4;
            var4 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleGuildCreate;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.GUILD_CREATE = var4;
            var4 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleGuildDelete;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.GUILD_DELETE = var4;
            var4 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleGuildMemberAdd;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.GUILD_MEMBER_ADD = var4;
            var4 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleGuildMemberUpdate;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.GUILD_MEMBER_UPDATE = var4;
            var4 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleGuildRoleChange;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.GUILD_ROLE_CREATE = var4;
            var4 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleGuildRoleDelete;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.GUILD_ROLE_DELETE = var4;
            var4 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleGuildRoleChange;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.GUILD_ROLE_UPDATE = var4;
            var3 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleGuildUpdate;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.GUILD_UPDATE = var3;
            var2.actions = var1;
            return var0;
        };
        var _closure2_slot2 = var2;
        var4 = {};
        var1 = 'getAsync';
        var4.key = var1;
        var7 = _closure1_slot3;
        var1 = undefined;
        var0 = function*(arg0) { // Environment: var5
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun93129: for (var _fun93129_ip = 0;;) switch (_fun93129_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun93129_ip = 162;
                            continue _fun93129
                        }
                    case 10:
                        var2 = global;
                        var3 = var2.performance;
                        var1 = var3.now;
                        var6 = var1.bind(var3)();
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 9;
                        var4 = var4[var1];
                        var1 = undefined;
                        var5 = var5.bind(var1)(var4);
                        var4 = var5.guilds;
                        var1 = arg0;
                        var4 = var4.bind(var5)(var1);
                        var1 = var4.getMany;
                        var1 = var1.bind(var4)();
                        SaveGenerator(address = 80);
                    case 78:
                        return var1;
                    case 80:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun93129_ip = 159;
                            continue _fun93129
                        }
                    case 86:
                        var5 = var2.performance;
                        var4 = var5.now;
                        var5 = var4.bind(var5)();
                        var4 = _closure1_slot11;
                        var3 = var4.verbose;
                        var13 = var5 - var6;
                        var11 = var1.length;
                        var2 = var2.HermesInternal;
                        var7 = var2.concat;
                        var14 = 'loaded in ';
                        var12 = 'ms (guilds: ';
                        var10 = ')';
                        var2 = var14[var7](var13, var12, var11, var10, var9);
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    case 159:
                        return var1;
                    case 162:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var7.bind(var1)(var0);
        var _closure2_slot1 = var0;
        var0 = function() {
            var0 = undefined;
            var3 = _closure2_slot1;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(16);
        var0[0] = var4;
        var4 = {};
        var6 = 'getOneAsync';
        var4.key = var6;
        var6 = function*(arg0, arg1) { // Environment: var5
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun93132: for (var _fun93132_ip = 0;;) switch (_fun93132_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun93132_ip = 75;
                            continue _fun93132
                        }
                    case 7:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 9;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.guilds;
                        var1 = arg0;
                        var3 = var2.bind(var3)(var1);
                        var2 = var3.get;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 63);
                    case 61:
                        return var1;
                    case 63:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun93132_ip = 72;
                            continue _fun93132
                        }
                    case 69:
                        return var1;
                    case 72:
                        return var1;
                    case 75:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var1)(var6);
        var _closure2_slot0 = var6;
        var6 = function() {
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'handleBackgroundSync';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun93134: for (var _fun93134_ip = 0;;) switch (_fun93134_ip) {
                case 0:
                    var13 = arg1;
                    var12 = this;
                    var2 = _closure1_slot12;
                    var0 = arg0;
                    var1 = var0.guilds;
                    var0 = undefined;
                    var10 = var2.bind(var0)(var1);
                    var2 = var10.bind(var0)();
                    var1 = var2.done;
                    var9 = 12;
                    var8 = 11;
                    var7 = 10;
                    var6 = 'partial';
                    var5 = null;
                    var4 = 'unavailable';
                    var3 = var2;
                    var2 = undefined;
                    if (var1) {
                        _fun93134_ip = 374;
                        continue _fun93134
                    }
                case 68:
                    var14 = var3.value;
                    var1 = var14.data_mode;
                    if (!(var4 !== var1)) {
                        _fun93134_ip = 372;
                        continue _fun93134
                    }
                case 86:
                    var16 = _closure1_slot10;
                    var15 = var16.getGuild;
                    var1 = var14.id;
                    var23 = var15.bind(var16)(var1);
                    if (!(var5 != var23)) {
                        _fun93134_ip = 352;
                        continue _fun93134
                    }
                case 112:
                    var16 = _closure1_slot9;
                    var15 = var16.getUnsafeMutableRoles;
                    var1 = var14.id;
                    var1 = var15.bind(var16)(var1);
                    var15 = var14.data_mode;
                    if (!(var6 !== var15)) {
                        _fun93134_ip = 184;
                        continue _fun93134
                    }
                case 142:
                    var16 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var15 = var15[var8];
                    var18 = var16.bind(var0)(var15);
                    var17 = var18.fromServerArray;
                    var16 = var14.id;
                    var15 = var14.roles;
                    var21 = var17.bind(var18)(var16, var15);
                    _fun93134_ip = 246;
                    continue _fun93134;
                case 184:
                    var16 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var15 = var15[var7];
                    var19 = var16.bind(var0)(var15);
                    var18 = var19.filterRoleDeletes;
                    var27 = var14.id;
                    var15 = var14.partial_updates;
                    var25 = var15.roles;
                    var15 = var14.partial_updates;
                    var24 = var15.deleted_role_ids;
                    var28 = var19;
                    var26 = var1;
                    var21 = var28[var18](var27, var26, var25, var24, var23);
                case 246:
                    var15 = var12.put;
                    var20 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var17 = var16[var9];
                    var19 = var20.bind(var0)(var17);
                    var18 = var19.attachSerializedData;
                    var17 = var16[var9];
                    var22 = var20.bind(var0)(var17);
                    var17 = var22.fromBackgroundSync;
                    var17 = var17.bind(var22)(var14, var23);
                    var16 = var16[var8];
                    var20 = var20.bind(var0)(var16);
                    var16 = var20.toSerializedPartition;
                    var16 = var16.bind(var20)(var21);
                    var21 = _closure1_slot8;
                    var20 = var21.getSelfMember;
                    var14 = var14.id;
                    var14 = var20.bind(var21)(var14);
                    var14 = var18.bind(var19)(var17, var16, var14);
                    var14 = var15.bind(var12)(var14, var13);
                    var2 = var1;
                case 352:
                    var14 = var10.bind(var0)();
                    var1 = var14.done;
                    var3 = var14;
                    if (var1) {
                        _fun93134_ip = 374;
                        continue _fun93134
                    }
                case 367:
                    _fun93134_ip = 68;
                    continue _fun93134;
                case 372:
                    return var0;
                case 374:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'handleConnectionOpen';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun93135: for (var _fun93135_ip = 0;;) switch (_fun93135_ip) {
                case 0:
                    var5 = arg1;
                    var4 = this;
                    var0 = var4.clear;
                    var0 = var0.bind(var4)(var5);
                    var2 = _closure1_slot12;
                    var0 = arg0;
                    var1 = var0.guilds;
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.bind(var0)();
                    var1 = var2.done;
                    if (var1) {
                        _fun93135_ip = 84;
                        continue _fun93135
                    }
                case 52:
                    var6 = var2.value;
                    var1 = var4.putOne;
                    var1 = var1.bind(var4)(var6, var5);
                    var6 = var3.bind(var0)();
                    var1 = var6.done;
                    var2 = var6;
                    if (!var1) {
                        _fun93135_ip = 52;
                        continue _fun93135
                    }
                case 84:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'handleGuildCreate';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var3 = this;
            var2 = var3.putOne;
            var0 = arg0;
            var1 = var0.guild;
            var0 = arg1;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'handleGuildUpdate';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var1 = arg0;
            var4 = this;
            var3 = _closure1_slot10;
            var2 = var3.getGuild;
            var0 = var1.guild;
            var0 = var0.id;
            var7 = var2.bind(var3)(var0);
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 12;
            var3 = var12[var2];
            var0 = undefined;
            var6 = var11.bind(var0)(var3);
            var5 = var6.fromGuild;
            var3 = var1.guild;
            var7 = var5.bind(var6)(var3, var7);
            var3 = var4.put;
            var2 = var12[var2];
            var6 = var11.bind(var0)(var2);
            var5 = var6.attachSerializedData;
            var2 = 11;
            var9 = var12[var2];
            var10 = var11.bind(var0)(var9);
            var9 = var10.toSerializedPartition;
            var2 = var12[var2];
            var13 = var11.bind(var0)(var2);
            var12 = var13.fromServerArray;
            var2 = var1.guild;
            var11 = var2.id;
            var2 = var1.guild;
            var2 = var2.roles;
            var2 = var12.bind(var13)(var11, var2);
            var2 = var9.bind(var10)(var2);
            var9 = _closure1_slot8;
            var8 = var9.getSelfMember;
            var1 = var1.guild;
            var1 = var1.id;
            var1 = var8.bind(var9)(var1);
            var2 = var5.bind(var6)(var7, var2, var1);
            var1 = arg1;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'handleGuildDelete';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var3 = this;
            var2 = var3.delete;
            var0 = arg0;
            var0 = var0.guild;
            var1 = var0.id;
            var0 = arg1;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'handleGuildRoleChange';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun93139: for (var _fun93139_ip = 0;;) switch (_fun93139_ip) {
                case 0:
                    var0 = arg0;
                    var3 = this;
                    var4 = _closure1_slot10;
                    var2 = var4.getGuild;
                    var1 = var0.guildId;
                    var6 = var2.bind(var4)(var1);
                    var4 = _closure1_slot9;
                    var2 = var4.getUnsafeMutableRoles;
                    var1 = var0.guildId;
                    var11 = var2.bind(var4)(var1);
                    var1 = null;
                    if (!(var1 != var6)) {
                        _fun93139_ip = 210;
                        continue _fun93139
                    }
                case 57:
                    var2 = var3.put;
                    var13 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var1 = 12;
                    var1 = var14[var1];
                    var12 = undefined;
                    var5 = var13.bind(var12)(var1);
                    var4 = var5.attachSerializedData;
                    var10 = 11;
                    var1 = var14[var10];
                    var9 = var13.bind(var12)(var1);
                    var8 = var9.toSerializedPartition;
                    var1 = {};
                    var17 = var1;
                    var16 = var11;
                    var11 = copyDataProperties(var17, var16);
                    var11 = var0.role;
                    var11 = var11.id;
                    var10 = var14[var10];
                    var14 = var13.bind(var12)(var10);
                    var13 = var14.fromServer;
                    var12 = var0.guildId;
                    var10 = var0.role;
                    var10 = var13.bind(var14)(var12, var10);
                    var1[var11] = var10;
                    var1 = var8.bind(var9)(var1);
                    var8 = _closure1_slot8;
                    var7 = var8.getSelfMember;
                    var0 = var0.guildId;
                    var0 = var7.bind(var8)(var0);
                    var1 = var4.bind(var5)(var6, var1, var0);
                    var0 = arg1;
                    var0 = var2.bind(var3)(var1, var0);
                case 210:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'handleGuildRoleDelete';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun93140: for (var _fun93140_ip = 0;;) switch (_fun93140_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var _closure3_slot0 = var4;
                    var6 = _closure1_slot10;
                    var5 = var6.getGuild;
                    var1 = var4.guildId;
                    var6 = var5.bind(var6)(var1);
                    var1 = null;
                    if (!(var1 != var6)) {
                        _fun93140_ip = 229;
                        continue _fun93140
                    }
                case 43:
                    var8 = {};
                    var9 = _closure1_slot9;
                    var7 = var9.getUnsafeMutableRoles;
                    var5 = var4.guildId;
                    var12 = var7.bind(var9)(var5);
                    var13 = var8;
                    var5 = copyDataProperties(var13, var12);
                    var5 = var4.roleId;
                    var5 = delete var8[var5];
                    var7 = _closure1_slot8;
                    var5 = var7.getSelfMember;
                    var4 = var4.guildId;
                    var4 = var5.bind(var7)(var4);
                    var5 = var4;
                    if (!(var1 != var5)) {
                        _fun93140_ip = 156;
                        continue _fun93140
                    }
                case 109:
                    var1 = {};
                    var13 = var1;
                    var12 = var4;
                    var7 = copyDataProperties(var13, var12);
                    var7 = var4.roles;
                    var4 = var7.filter;
                    var2 = function(arg0) { // Environment: var2
                        var0 = _closure3_slot0;
                        var1 = var0.roleId;
                        var0 = arg0;
                        var0 = var0 !== var1;
                        return var0;
                    };
                    var4 = var4.bind(var7)(var2);
                    var2 = 'roles';
                    var1[var2] = var4;
                    var5 = var1;
                case 156:
                    var2 = var3.put;
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var0 = 12;
                    var0 = var10[var0];
                    var7 = undefined;
                    var4 = var9.bind(var7)(var0);
                    var1 = var4.attachSerializedData;
                    var0 = 11;
                    var0 = var10[var0];
                    var7 = var9.bind(var7)(var0);
                    var0 = var7.toSerializedPartition;
                    var0 = var0.bind(var7)(var8);
                    var1 = var1.bind(var4)(var6, var0, var5);
                    var0 = arg1;
                    var0 = var2.bind(var3)(var1, var0);
                case 229:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'handleGuildMemberAdd';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun93142: for (var _fun93142_ip = 0;;) switch (_fun93142_ip) {
                case 0:
                    var1 = arg0;
                    var3 = this;
                    var0 = var1.joinedAt;
                    var2 = null;
                    if (!(var2 != var0)) {
                        _fun93142_ip = 210;
                        continue _fun93142
                    }
                case 21:
                    var0 = var1.user;
                    var4 = var0.id;
                    var5 = _closure1_slot7;
                    var0 = var5.getId;
                    var0 = var0.bind(var5)();
                    if (!(var4 === var0)) {
                        _fun93142_ip = 210;
                        continue _fun93142
                    }
                case 55:
                    var5 = _closure1_slot10;
                    var4 = var5.getGuild;
                    var0 = var1.guildId;
                    var0 = var4.bind(var5)(var0);
                    if (!(var2 != var0)) {
                        _fun93142_ip = 210;
                        continue _fun93142
                    }
                case 81:
                    var2 = var3.put;
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var4 = 12;
                    var4 = var10[var4];
                    var8 = undefined;
                    var6 = var9.bind(var8)(var4);
                    var5 = var6.attachSerializedData;
                    var4 = _closure1_slot6;
                    var1 = var1.joinedAt;
                    var4 = var4.bind(var8)(var0, var1);
                    var1 = 11;
                    var1 = var10[var1];
                    var9 = var9.bind(var8)(var1);
                    var8 = var9.toSerializedPartition;
                    var11 = _closure1_slot9;
                    var10 = var11.getUnsafeMutableRoles;
                    var1 = var0.id;
                    var1 = var10.bind(var11)(var1);
                    var1 = var8.bind(var9)(var1);
                    var8 = _closure1_slot8;
                    var7 = var8.getSelfMember;
                    var0 = var0.id;
                    var0 = var7.bind(var8)(var0);
                    var1 = var5.bind(var6)(var4, var1, var0);
                    var0 = arg1;
                    var0 = var2.bind(var3)(var1, var0);
                case 210:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'handleGuildMemberUpdate';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun93143: for (var _fun93143_ip = 0;;) switch (_fun93143_ip) {
                case 0:
                    var7 = arg0;
                    var3 = this;
                    var0 = var7.user;
                    var2 = var0.id;
                    var4 = _closure1_slot7;
                    var1 = var4.getId;
                    var1 = var1.bind(var4)();
                    if (!(var2 === var1)) {
                        _fun93143_ip = 185;
                        continue _fun93143
                    }
                case 40:
                    var4 = _closure1_slot10;
                    var2 = var4.getGuild;
                    var1 = var7.guildId;
                    var6 = var2.bind(var4)(var1);
                    var1 = null;
                    if (!(var1 != var6)) {
                        _fun93143_ip = 185;
                        continue _fun93143
                    }
                case 65:
                    var2 = var3.put;
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var1 = 12;
                    var1 = var10[var1];
                    var8 = undefined;
                    var5 = var9.bind(var8)(var1);
                    var4 = var5.attachSerializedData;
                    var1 = 11;
                    var1 = var10[var1];
                    var8 = var9.bind(var8)(var1);
                    var1 = var8.toSerializedPartition;
                    var10 = _closure1_slot9;
                    var9 = var10.getUnsafeMutableRoles;
                    var0 = var6.id;
                    var0 = var9.bind(var10)(var0);
                    var1 = var1.bind(var8)(var0);
                    var0 = {};
                    var8 = var7.roles;
                    var0.roles = var8;
                    var7 = var7.user;
                    var7 = var7.id;
                    var0.userId = var7;
                    var1 = var4.bind(var5)(var6, var1, var0);
                    var0 = arg1;
                    var0 = var2.bind(var3)(var1, var0);
                case 185:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'resetInMemoryState';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'putOne';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun93145: for (var _fun93145_ip = 0;;) switch (_fun93145_ip) {
                case 0:
                    var9 = arg0;
                    var4 = this;
                    var2 = var9.members;
                    var1 = var2.find;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.user;
                        var1 = var0.id;
                        var2 = _closure1_slot7;
                        var0 = var2.getId;
                        var0 = var0.bind(var2)();
                        var0 = var1 === var0;
                        return var0;
                    };
                    var8 = var1.bind(var2)(var0);
                    var2 = _closure1_slot10;
                    var1 = var2.getGuild;
                    var0 = var9.id;
                    var11 = var1.bind(var2)(var0);
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var3 = 12;
                    var5 = var1[var3];
                    var0 = undefined;
                    var6 = var2.bind(var0)(var5);
                    var5 = var6.attachSerializedData;
                    var3 = var1[var3];
                    var7 = var2.bind(var0)(var3);
                    var3 = var7.fromServer;
                    var3 = var3.bind(var7)(var9, var11);
                    var12 = 11;
                    var1 = var1[var12];
                    var7 = var2.bind(var0)(var1);
                    var2 = var7.toSerializedPartition;
                    var11 = var9.roles;
                    var1 = global;
                    var1 = var1.Array;
                    var1 = var11 instanceof var1;
                    if (var1) {
                        _fun93145_ip = 149;
                        continue _fun93145
                    }
                case 141:
                    var1 = var9.roles;
                    _fun93145_ip = 189;
                    continue _fun93145;
                case 149:
                    var11 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var10 = var10[var12];
                    var12 = var11.bind(var0)(var10);
                    var11 = var12.fromServerArray;
                    var10 = var9.id;
                    var9 = var9.roles;
                    var1 = var11.bind(var12)(var10, var9);
                case 189:
                    var2 = var2.bind(var7)(var1);
                    var1 = null;
                    var7 = var1 != var8;
                    if (!var7) {
                        _fun93145_ip = 233;
                        continue _fun93145
                    }
                case 203:
                    var7 = {};
                    var9 = var8.user;
                    var9 = var9.id;
                    var7.userId = var9;
                    var8 = var8.roles;
                    var7.roles = var8;
                    var1 = var7;
                case 233:
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var4.put;
                    var1 = arg1;
                    var1 = var2.bind(var4)(var3, var1);
                    return var0;
            }
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'put';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 9;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.guildsTransaction;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var2 = var3.put;
            var1 = arg0;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'delete';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 9;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.guildsTransaction;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var2 = var3.delete;
            var1 = arg0;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'clear';
        var4.key = var6;
        var5 = function arg0() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 9;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.guildsTransaction;
            var1 = arg0;
            var2 = var2.bind(var3)(var1);
            var1 = var2.delete;
            var1 = var1.bind(var2)();
            return var0;
        };
        var4.value = var5;
        var0[15] = var4;
        var0 = var3.bind(var1)(var2, var0);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_database/modules/Guilds.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 1416, 1216, 1672, 1665, 1410, 3, 1637, 1667, 1669, 1598, 2]);