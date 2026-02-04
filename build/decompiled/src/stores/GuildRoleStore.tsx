// stores/GuildRoleStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportAll;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var0 = function arg0, arg1() {
        _fun19034: for (var _fun19034_ip = 0;;) switch (_fun19034_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun19034_ip = 46;
                    continue _fun19034
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun19034_ip = 55;
                    continue _fun19034
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun19034_ip = 343;
                    continue _fun19034
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun19034_ip = 323;
                    continue _fun19034
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun19034_ip = 283;
                    continue _fun19034
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun19034_ip = 270;
                    continue _fun19034
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
                    _fun19034_ip = 163;
                    continue _fun19034
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun19034_ip = 179;
                    continue _fun19034
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun19034_ip = 249;
                    continue _fun19034
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun19034_ip = 249;
                    continue _fun19034
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun19034_ip = 234;
                    continue _fun19034
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun19034_ip = 247;
                    continue _fun19034
                }
            case 234:
                var8 = _closure1_slot11;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun19034_ip = 265;
                continue _fun19034;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun19034_ip = 283;
                continue _fun19034;
            case 270:
                var6 = _closure1_slot11;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun19034_ip = 323;
                    continue _fun19034
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
                    _fun19034_ip = 330;
                    continue _fun19034
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun19035: for (var _fun19035_ip = 0;;) switch (_fun19035_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun19035_ip = 56;
                                continue _fun19035
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
                            _fun19035_ip = 67;
                            continue _fun19035;
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
    var _closure1_slot10 = var0;
    var0 = function arg0, arg1() {
        _fun19036: for (var _fun19036_ip = 0;;) switch (_fun19036_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun19036_ip = 23;
                    continue _fun19036
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun19036_ip = 33;
                    continue _fun19036
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
                    _fun19036_ip = 70;
                    continue _fun19036
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun19036_ip = 55;
                    continue _fun19036
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function() {
        _fun19037: for (var _fun19037_ip = 0;;) switch (_fun19037_ip) {
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
                _fun19037_ip = 74;
                continue _fun19037;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot12 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function arg0() {
        var4 = arg0;
        var3 = _closure1_slot7;
        var2 = _closure1_slot9;
        var1 = {};
        var8 = var1;
        var7 = var4;
        var5 = copyDataProperties(var8, var7);
        var6 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 9;
        var5 = var5[var0];
        var0 = undefined;
        var6 = var6.bind(var0)(var5);
        var5 = var6.deserialize;
        var4 = var4.permissions;
        var5 = var5.bind(var6)(var4);
        var4 = 'permissions';
        var1[var4] = var5;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.constructInPlace;
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.LibdiscoreStore;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.getGuildEveryoneRoleId;
    var _closure1_slot8 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildRoleRecordTypeTag;
    var _closure1_slot9 = var3;
    var3 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun19042: for (var _fun19042_ip = 0;;) switch (_fun19042_ip) {
                case 0:
                    var5 = this;
                    var13 = 0;
                    var0 = copyRestArgs(var13);
                    var7 = _closure1_slot2;
                    var3 = _closure2_slot0;
                    var4 = undefined;
                    var7 = var7.bind(var4)(var5, var3);
                    var10 = new Array(0);
                    var13 = var10;
                    var12 = var0;
                    var11 = 0;
                    var0 = arraySpread(var13, var12, var11);
                    var0 = _closure1_slot5;
                    var9 = var0.bind(var4)(var3);
                    var3 = _closure1_slot4;
                    var0 = _closure1_slot12;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun19042_ip = 86;
                        continue _fun19042
                    }
                case 73:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var5, var10);
                    _fun19042_ip = 120;
                    continue _fun19042;
                case 86:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot5;
                    var6 = var6.bind(var4)(var5);
                    var6 = var6.constructor;
                    var0 = var7.bind(var8)(var9, var10, var6);
                case 120:
                    var0 = var3.bind(var4)(var5, var0);
                    var4 = var0.addKKVDatabase;
                    var3 = _closure1_slot13;
                    var2 = 'guild_roles';
                    var2 = var4.bind(var0)(var2, var3);
                    var0.database = var2;
                    var4 = var0.database;
                    var3 = var4.memoizedPartition;
                    var2 = function(arg0, arg1) { // Environment: var1
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 10;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.sortGuildRoleRecords;
                        var0 = global;
                        var4 = var0.Object;
                        var3 = var4.values;
                        var0 = arg1;
                        var0 = var3.bind(var4)(var0);
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    var0.getSortedRoles = var2;
                    var3 = var0.database;
                    var2 = var3.memoizedPartition;
                    var1 = function(arg0, arg1) { // Environment: var1
                        var0 = {};
                        var2 = arg1;
                        var3 = var0;
                        var1 = copyDataProperties(var3, var2);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    var0.getRolesSnapshot = var1;
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
        var0 = 'stateWrapper';
        var4.key = var0;
        var0 = function() {
            var0 = this;
            var0 = var0.database;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(8);
        var0[0] = var4;
        var4 = {};
        var6 = 'serializeAllGuildRoles';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var2 = var0.database;
            var1 = var2.mapPartitions;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var0 = 11;
            var3 = var3[var0];
            var0 = undefined;
            var0 = var4.bind(var0)(var3);
            var0 = var0.toSerializedPartition;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getUnsafeMutableRoles';
        var4.key = var6;
        var6 = function arg0() {
            var0 = this;
            var2 = var0.database;
            var1 = var2.getPartition;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getManyRoles';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var0 = this;
            var3 = var0.database;
            var2 = var3.getManyRecords;
            var1 = arg0;
            var0 = arg1;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getRole';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var0 = this;
            var3 = var0.database;
            var2 = var3.getRecord;
            var1 = arg0;
            var0 = arg1;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getNumRoles';
        var4.key = var6;
        var6 = function arg0() {
            var0 = this;
            var2 = var0.database;
            var1 = var2.partitionLength;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getEveryoneRole';
        var4.key = var6;
        var6 = function arg0() {
            _fun19051: for (var _fun19051_ip = 0;;) switch (_fun19051_ip) {
                case 0:
                    var1 = arg0;
                    var2 = _closure1_slot8;
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var0 = this;
                    var3 = var0.database;
                    var2 = var3.getRecord;
                    var0 = var1.id;
                    var0 = var2.bind(var3)(var0, var4);
                    var2 = null;
                    if (!(var2 != var0)) {
                        _fun19051_ip = 51;
                        continue _fun19051
                    }
                case 49:
                    return var0;
                case 51:
                    var0 = global;
                    var2 = var0.Error;
                    var4 = var1.id;
                    var0 = var0.HermesInternal;
                    var3 = var0.concat;
                    var1 = 'Guild ';
                    var0 = ' does not have an @everyone role';
                    var6 = var3.bind(var1)(var4, var0);
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var7 = var1;
                    var0 = new var7[var2](var6, var5);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'partitionVersion';
        var4.key = var6;
        var5 = function arg0() {
            var0 = this;
            var2 = var0.database;
            var1 = var2.partitionVersion;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var5;
        var0[7] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var3.bind(var0)(var6);
    var3 = 'GuildRoleStore';
    var7.displayName = var3;
    var6 = {};
    var3 = function arg0, arg1() {
        _fun19053: for (var _fun19053_ip = 0;;) switch (_fun19053_ip) {
            case 0:
                var10 = arg1;
                var0 = arg0;
                var2 = var0.guilds;
                var1 = _closure1_slot10;
                var0 = undefined;
                var8 = var1.bind(var0)(var2);
                var2 = var8.bind(var0)();
                var1 = var2.done;
                var7 = 10;
                var6 = 11;
                var5 = 'partial';
                var4 = 'unavailable';
                var3 = null;
                if (var1) {
                    _fun19053_ip = 250;
                    continue _fun19053
                }
            case 57:
                var13 = var2.value;
                var11 = var10.getNullablePartition;
                var1 = var13.id;
                var18 = var11.bind(var10)(var1);
                var1 = var3 != var18;
                if (!var1) {
                    _fun19053_ip = 95;
                    continue _fun19053
                }
            case 85:
                var11 = var13.data_mode;
                var1 = var4 !== var11;
            case 95:
                if (!var1) {
                    _fun19053_ip = 232;
                    continue _fun19053
                }
            case 101:
                var12 = var10.setPartition;
                var11 = var13.id;
                var1 = var13.data_mode;
                if (!(var5 !== var1)) {
                    _fun19053_ip = 164;
                    continue _fun19053
                }
            case 122:
                var14 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var16 = var14.bind(var0)(var1);
                var15 = var16.fromServerArray;
                var14 = var13.id;
                var1 = var13.roles;
                var1 = var15.bind(var16)(var14, var1);
                _fun19053_ip = 226;
                continue _fun19053;
            case 164:
                var15 = _closure1_slot0;
                var14 = _closure1_slot1;
                var14 = var14[var7];
                var17 = var15.bind(var0)(var14);
                var16 = var17.filterRoleDeletes;
                var22 = var13.id;
                var14 = var13.partial_updates;
                var20 = var14.roles;
                var13 = var13.partial_updates;
                var19 = var13.deleted_role_ids;
                var23 = var17;
                var21 = var18;
                var1 = var23[var16](var22, var21, var20, var19, var18);
            case 226:
                var1 = var12.bind(var10)(var11, var1);
            case 232:
                var11 = var8.bind(var0)();
                var1 = var11.done;
                var2 = var11;
                if (!var1) {
                    _fun19053_ip = 57;
                    continue _fun19053
                }
            case 250:
                return var0;
        }
    };
    var6.BACKGROUND_SYNC = var3;
    var3 = function arg0, arg1() {
        _fun19054: for (var _fun19054_ip = 0;;) switch (_fun19054_ip) {
            case 0:
                var6 = arg1;
                var0 = var6.clear;
                var0 = var0.bind(var6)();
                var2 = _closure1_slot10;
                var0 = arg0;
                var1 = var0.serializedGuildRoles;
                var0 = undefined;
                var4 = var2.bind(var0)(var1);
                var2 = var4.bind(var0)();
                var1 = var2.done;
                var3 = 11;
                if (var1) {
                    _fun19054_ip = 125;
                    continue _fun19054
                }
            case 53:
                var1 = var2.value;
                var8 = var1.partitionKey;
                var10 = var1.values;
                var7 = var6.setPartition;
                var9 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var3];
                var9 = var9.bind(var0)(var1);
                var1 = var9.fromSerializedPartition;
                var1 = var1.bind(var9)(var8, var10);
                var1 = var7.bind(var6)(var8, var1);
                var7 = var4.bind(var0)();
                var1 = var7.done;
                var2 = var7;
                if (!var1) {
                    _fun19054_ip = 53;
                    continue _fun19054
                }
            case 125:
                return var0;
        }
    };
    var6.OVERLAY_INITIALIZE = var3;
    var3 = function arg0, arg1() {
        _fun19055: for (var _fun19055_ip = 0;;) switch (_fun19055_ip) {
            case 0:
                var7 = arg1;
                var0 = arg0;
                var2 = var0.guilds;
                var0 = var7.clear;
                var0 = var0.bind(var7)();
                var1 = _closure1_slot10;
                var0 = undefined;
                var5 = var1.bind(var0)(var2);
                var2 = var5.bind(var0)();
                var1 = var2.done;
                var4 = 11;
                var3 = global;
                if (var1) {
                    _fun19055_ip = 147;
                    continue _fun19055
                }
            case 53:
                var1 = var2.value;
                var9 = var1.id;
                var12 = var1.roles;
                var8 = var7.setPartition;
                var10 = var3.Array;
                var1 = var10.isArray;
                var10 = var1.bind(var10)(var12);
                var1 = var12;
                if (!var10) {
                    _fun19055_ip = 126;
                    continue _fun19055
                }
            case 97:
                var11 = _closure1_slot0;
                var10 = _closure1_slot1;
                var10 = var10[var4];
                var11 = var11.bind(var0)(var10);
                var10 = var11.fromServerArray;
                var1 = var10.bind(var11)(var9, var12);
            case 126:
                var1 = var8.bind(var7)(var9, var1);
                var8 = var5.bind(var0)();
                var1 = var8.done;
                var2 = var8;
                if (!var1) {
                    _fun19055_ip = 53;
                    continue _fun19055
                }
            case 147:
                return var0;
        }
    };
    var6.CONNECTION_OPEN = var3;
    var3 = function arg0, arg1() {
        _fun19056: for (var _fun19056_ip = 0;;) switch (_fun19056_ip) {
            case 0:
                var6 = arg1;
                var0 = arg0;
                var2 = var0.guilds;
                var0 = var6.clear;
                var0 = var0.bind(var6)();
                var1 = _closure1_slot10;
                var0 = undefined;
                var4 = var1.bind(var0)(var2);
                var2 = var4.bind(var0)();
                var1 = var2.done;
                var3 = 11;
                if (var1) {
                    _fun19056_ip = 123;
                    continue _fun19056
                }
            case 51:
                var1 = var2.value;
                var8 = var1.id;
                var10 = var1.roles;
                var7 = var6.setPartition;
                var9 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var3];
                var9 = var9.bind(var0)(var1);
                var1 = var9.fromSerializedPartition;
                var1 = var1.bind(var9)(var8, var10);
                var1 = var7.bind(var6)(var8, var1);
                var7 = var4.bind(var0)();
                var1 = var7.done;
                var2 = var7;
                if (!var1) {
                    _fun19056_ip = 51;
                    continue _fun19056
                }
            case 123:
                return var0;
        }
    };
    var6.CACHE_LOADED = var3;
    var3 = function arg0, arg1() {
        _fun19057: for (var _fun19057_ip = 0;;) switch (_fun19057_ip) {
            case 0:
                var0 = arg0;
                var6 = arg1;
                var1 = var0.guilds;
                var2 = var1.length;
                var1 = 0;
                if (!(var1 !== var2)) {
                    _fun19057_ip = 140;
                    continue _fun19057
                }
            case 23:
                var1 = var6.clear;
                var1 = var1.bind(var6)();
                var1 = _closure1_slot10;
                var0 = var0.guilds;
                var4 = undefined;
                var3 = var1.bind(var4)(var0);
                var1 = var3.bind(var4)();
                var0 = var1.done;
                var2 = 11;
                if (var0) {
                    _fun19057_ip = 140;
                    continue _fun19057
                }
            case 68:
                var0 = var1.value;
                var8 = var0.id;
                var10 = var0.roles;
                var7 = var6.setPartition;
                var9 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var2];
                var9 = var9.bind(var4)(var0);
                var0 = var9.fromSerializedPartition;
                var0 = var0.bind(var9)(var8, var10);
                var0 = var7.bind(var6)(var8, var0);
                var7 = var3.bind(var4)();
                var0 = var7.done;
                var1 = var7;
                if (!var0) {
                    _fun19057_ip = 68;
                    continue _fun19057
                }
            case 140:
                var0 = undefined;
                return var0;
        }
    };
    var6.CACHE_LOADED_LAZY = var3;
    var3 = function arg0, arg1() {
        _fun19058: for (var _fun19058_ip = 0;;) switch (_fun19058_ip) {
            case 0:
                var3 = arg1;
                var0 = arg0;
                var0 = var0.guild;
                var2 = var0.id;
                var6 = var0.roles;
                var1 = var3.setPartition;
                var0 = global;
                var4 = var0.Array;
                var0 = var4.isArray;
                var4 = var0.bind(var4)(var6);
                var0 = var6;
                if (!var4) {
                    _fun19058_ip = 89;
                    continue _fun19058
                }
            case 52:
                var7 = _closure1_slot0;
                var5 = _closure1_slot1;
                var4 = 11;
                var5 = var5[var4];
                var4 = undefined;
                var5 = var7.bind(var4)(var5);
                var4 = var5.fromServerArray;
                var0 = var4.bind(var5)(var2, var6);
            case 89:
                var0 = var1.bind(var3)(var2, var0);
                var0 = undefined;
                return var0;
        }
    };
    var6.GUILD_CREATE = var3;
    var3 = function arg0, arg1() {
        var4 = arg1;
        var0 = arg0;
        var0 = var0.guild;
        var3 = var0.id;
        var6 = var0.roles;
        var2 = var4.setPartition;
        var5 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 11;
        var1 = var1[var0];
        var0 = undefined;
        var5 = var5.bind(var0)(var1);
        var1 = var5.fromServerArray;
        var1 = var1.bind(var5)(var3, var6);
        var1 = var2.bind(var4)(var3, var1);
        return var0;
    };
    var6.GUILD_UPDATE = var3;
    var3 = function arg0, arg1() {
        _fun19060: for (var _fun19060_ip = 0;;) switch (_fun19060_ip) {
            case 0:
                var2 = arg1;
                var0 = arg0;
                var0 = var0.guild;
                var1 = var0.id;
                var0 = var0.unavailable;
                if (var0) {
                    _fun19060_ip = 36;
                    continue _fun19060
                }
            case 25:
                var0 = var2.removePartition;
                var0 = var0.bind(var2)(var1);
            case 36:
                var0 = undefined;
                return var0;
        }
    };
    var6.GUILD_DELETE = var3;
    var3 = function arg0, arg1() {
        var1 = arg0;
        var5 = arg1;
        var4 = var5.setRecord;
        var3 = var1.guildId;
        var0 = var1.role;
        var2 = var0.id;
        var7 = _closure1_slot0;
        var6 = _closure1_slot1;
        var0 = 11;
        var6 = var6[var0];
        var0 = undefined;
        var8 = var7.bind(var0)(var6);
        var7 = var8.fromServer;
        var6 = var1.guildId;
        var1 = var1.role;
        var1 = var7.bind(var8)(var6, var1);
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var6.GUILD_ROLE_CREATE = var3;
    var3 = function arg0, arg1() {
        var1 = arg0;
        var5 = arg1;
        var4 = var5.setRecord;
        var3 = var1.guildId;
        var0 = var1.role;
        var2 = var0.id;
        var7 = _closure1_slot0;
        var6 = _closure1_slot1;
        var0 = 11;
        var6 = var6[var0];
        var0 = undefined;
        var8 = var7.bind(var0)(var6);
        var7 = var8.fromServer;
        var6 = var1.guildId;
        var1 = var1.role;
        var1 = var7.bind(var8)(var6, var1);
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var6.GUILD_ROLE_UPDATE = var3;
    var1 = function arg0, arg1() {
        var0 = arg0;
        var3 = arg1;
        var2 = var0.guildId;
        var1 = var0.roleId;
        var0 = var3.removeRecord;
        var0 = var0.bind(var3)(var2, var1);
        var0 = undefined;
        return var0;
    };
    var6.GUILD_ROLE_DELETE = var1;
    var1 = 12;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var3 = var1.LibdiscoreBatchStoreRefactorExperiment;
    var1 = var3.getCachedBridgedStoreMode;
    var10 = var1.bind(var3)();
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = var3;
    var11 = var6;
    var1 = new var12[var7](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/GuildRoleStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1411, 1414, 1416, 1675, 484, 1676, 1678, 1613, 2]);