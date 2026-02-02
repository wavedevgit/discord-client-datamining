// modules/guild_mod_dash_member_safety/MemberSafetyStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun40273: for (var _fun40273_ip = 0;;) switch (_fun40273_ip) {
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
                _fun40273_ip = 74;
                continue _fun40273;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot17 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function arg0, arg1() {
        _fun40276: for (var _fun40276_ip = 0;;) switch (_fun40276_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun40276_ip = 46;
                    continue _fun40276
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun40276_ip = 55;
                    continue _fun40276
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun40276_ip = 343;
                    continue _fun40276
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun40276_ip = 323;
                    continue _fun40276
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun40276_ip = 283;
                    continue _fun40276
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun40276_ip = 270;
                    continue _fun40276
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
                    _fun40276_ip = 163;
                    continue _fun40276
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun40276_ip = 179;
                    continue _fun40276
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun40276_ip = 249;
                    continue _fun40276
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun40276_ip = 249;
                    continue _fun40276
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun40276_ip = 234;
                    continue _fun40276
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun40276_ip = 247;
                    continue _fun40276
                }
            case 234:
                var8 = _closure1_slot19;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun40276_ip = 265;
                continue _fun40276;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun40276_ip = 283;
                continue _fun40276;
            case 270:
                var6 = _closure1_slot19;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun40276_ip = 323;
                    continue _fun40276
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
                    _fun40276_ip = 330;
                    continue _fun40276
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun40277: for (var _fun40277_ip = 0;;) switch (_fun40277_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun40277_ip = 56;
                                continue _fun40277
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
                            _fun40277_ip = 67;
                            continue _fun40277;
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
        _fun40278: for (var _fun40278_ip = 0;;) switch (_fun40278_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun40278_ip = 23;
                    continue _fun40278
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun40278_ip = 33;
                    continue _fun40278
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
                    _fun40278_ip = 70;
                    continue _fun40278
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun40278_ip = 55;
                    continue _fun40278
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function arg0() {
        _fun40279: for (var _fun40279_ip = 0;;) switch (_fun40279_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot16;
                var3 = var2[var1];
                var2 = null;
                if (!(var2 == var3)) {
                    _fun40279_ip = 55;
                    continue _fun40279
                }
            case 20:
                var3 = _closure1_slot16;
                var2 = _closure1_slot13;
                var4 = var2.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var2
                    }
                });
                var6 = var4;
                var5 = var1;
                var2 = new var6[var2](var5, var4);
                var2 = var2 instanceof Object ? var2 : var4;
                var3[var1] = var2;
            case 55:
                var0 = _closure1_slot16;
                var0 = var0[var1];
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function arg0() {
        _fun40280: for (var _fun40280_ip = 0;;) switch (_fun40280_ip) {
            case 0:
                var3 = arguments[1];
                var0 = undefined;
                if (!(var3 === var0)) {
                    _fun40280_ip = 11;
                    continue _fun40280
                }
            case 9:
                var3 = false;
            case 11:
                var2 = _closure1_slot20;
                var1 = arg0;
                var2 = var2.bind(var0)(var1);
                var1 = var2.reset;
                var1 = var1.bind(var2)(var3);
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var10 = function() {
        var0 = false;
        return var0;
    };
    var9 = function arg0() {
        _fun40282: for (var _fun40282_ip = 0;;) switch (_fun40282_ip) {
            case 0:
                var0 = arg0;
                var3 = _closure1_slot20;
                var2 = var0.guildId;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var4 = var0.type;
                var3 = 'GUILD_ROLE_DELETE';
                var1 = false;
                if (!(var3 === var4)) {
                    _fun40282_ip = 56;
                    continue _fun40282
                }
            case 37:
                var3 = var2.removeRoleFromSearchState;
                var0 = var0.roleId;
                var1 = var3.bind(var2)(var0);
            case 56:
                var0 = var2.rebuildAllMembers;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun40282_ip = 74;
                    continue _fun40282
                }
            case 71:
                var0 = var1;
            case 74:
                return var0;
        }
    };
    var8 = function arg0() {
        var0 = arg0;
        var2 = var0.guildId;
        var3 = var0.userId;
        var1 = _closure1_slot20;
        var0 = undefined;
        var2 = var1.bind(var0)(var2);
        var1 = var2.updateMembersByMemberIds;
        var0 = new Array(1);
        var0[0] = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var0 = global;
    var11 = var0.Object;
    var7 = var11.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var11)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot11 = var1;
    var1 = 9;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot12 = var1;
    var1 = 10;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.GuildMemberSafetyPageStore;
    var _closure1_slot13 = var1;
    var1 = 11;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot14 = var1;
    var1 = false;
    var _closure1_slot15 = var1;
    var1 = {};
    var _closure1_slot16 = var1;
    var1 = 17;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun40285: for (var _fun40285_ip = 0;;) switch (_fun40285_ip) {
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
                    var0 = _closure1_slot17;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun40285_ip = 69;
                        continue _fun40285
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun40285_ip = 105;
                    continue _fun40285;
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
            var5 = this;
            var4 = var5.waitFor;
            var9 = _closure1_slot9;
            var8 = _closure1_slot10;
            var7 = _closure1_slot11;
            var6 = _closure1_slot12;
            var10 = var5;
            var0 = var10[var4](var9, var8, var7, var6, var5);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(16);
        var0[0] = var4;
        var4 = {};
        var6 = 'isInitialized';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot20;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            var0 = var0.isInitialized;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getMembersByGuildId';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var2 = _closure1_slot20;
            var1 = undefined;
            var0 = arg0;
            var2 = var2.bind(var1)(var0);
            var1 = var2.getMembersByIndex;
            var0 = arg1;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getMembersCountByGuildId';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var2 = _closure1_slot20;
            var1 = undefined;
            var0 = arg0;
            var2 = var2.bind(var1)(var0);
            var1 = var2.countMembersByIndex;
            var0 = arg1;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getEstimatedMemberSearchCountByGuildId';
        var4.key = var6;
        var6 = function arg0() {
            _fun40290: for (var _fun40290_ip = 0;;) switch (_fun40290_ip) {
                case 0:
                    var2 = _closure1_slot20;
                    var1 = undefined;
                    var0 = arg0;
                    var3 = var2.bind(var1)(var0);
                    var2 = var3.searchChunkSize;
                    var1 = var3.countMembersByIndex;
                    var0 = var3.getSearchIndex;
                    var0 = var0.bind(var3)();
                    var1 = var1.bind(var3)(var0);
                    var0 = var3.getTotalResultsCount;
                    var0 = var0.bind(var3)();
                    var3 = null;
                    if (!(var3 != var0)) {
                        _fun40290_ip = 68;
                        continue _fun40290
                    }
                case 64:
                    if (!(var0 < var2)) {
                        _fun40290_ip = 71;
                        continue _fun40290
                    }
                case 68:
                    var0 = var1;
                case 71:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getKnownMemberSearchCountByGuildId';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot20;
            var1 = undefined;
            var0 = arg0;
            var2 = var2.bind(var1)(var0);
            var1 = var2.countMembersByIndex;
            var0 = var2.getSearchIndex;
            var0 = var0.bind(var2)();
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getCurrentMemberSearchResultsByGuildId';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot20;
            var1 = undefined;
            var0 = arg0;
            var2 = var2.bind(var1)(var0);
            var1 = var2.getMembersByIndex;
            var0 = var2.getSearchIndex;
            var0 = var0.bind(var2)();
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getSearchStateByGuildId';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot20;
            var1 = undefined;
            var0 = arg0;
            var1 = var2.bind(var1)(var0);
            var0 = var1.getSearchState;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'hasDefaultSearchStateByGuildId';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot20;
            var1 = undefined;
            var0 = arg0;
            var1 = var2.bind(var1)(var0);
            var0 = var1.hasDefaultSearchState;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getPagedMembersByGuildId';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot20;
            var1 = undefined;
            var0 = arg0;
            var1 = var2.bind(var1)(var0);
            var0 = var1.getPaginatedMembers;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'getPaginationStateByGuildId';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot20;
            var1 = undefined;
            var0 = arg0;
            var1 = var2.bind(var1)(var0);
            var0 = var1.getPaginationState;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'getElasticSearchPaginationByGuildId';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot20;
            var1 = undefined;
            var0 = arg0;
            var1 = var2.bind(var1)(var0);
            var0 = var1.getElasticSearchPagination;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'getEnhancedMember';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var2 = _closure1_slot20;
            var1 = undefined;
            var0 = arg0;
            var2 = var2.bind(var1)(var0);
            var1 = var2.getMember;
            var0 = arg1;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'getNewMemberTimestamp';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot20;
            var1 = undefined;
            var0 = arg0;
            var1 = var2.bind(var1)(var0);
            var0 = var1.getNewMemberTimestamp;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'getLastRefreshTimestamp';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot20;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            var0 = var0.lastRefreshTimestamp;
            return var0;
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'getLastCursorTimestamp';
        var4.key = var6;
        var5 = function arg0() {
            var2 = _closure1_slot20;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            var0 = var0.lastCursorTimestamp;
            return var0;
        };
        var4.value = var5;
        var0[15] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'MemberSafetyStore';
    var7.displayName = var1;
    var1 = 18;
    var1 = var5[var1];
    var14 = var6.bind(var0)(var1);
    var1 = {};
    var11 = function arg0() {
        _fun40302: for (var _fun40302_ip = 0;;) switch (_fun40302_ip) {
            case 0:
                var0 = _closure1_slot15;
                if (var0) {
                    _fun40302_ip = 56;
                    continue _fun40302
                }
            case 10:
                var6 = undefined;
                var7 = true;
                if (!(var7 === var6)) {
                    _fun40302_ip = 20;
                    continue _fun40302
                }
            case 18:
                var7 = false;
            case 20:
                var4 = _closure1_slot16;
                for (var0 in var4)
                    case 32: {
                        case 41: var9 = var0;
                        var8 = _closure1_slot21;
                        var8 = var8.bind(var6)(var9, var7);
                        _fun40302_ip = 32;
                        continue _fun40302;
                        case 56: var0 = false;
                        _closure1_slot15 = var0;
                    }
            case 62:
                var2 = function arg0() {
                    var1 = false;
                    var _closure3_slot0 = var1;
                    var1 = arg0;
                    var3 = var1.guilds;
                    var2 = var3.forEach;
                    var1 = function(arg0) { // Environment: var0
                        _fun40304: for (var _fun40304_ip = 0;;) switch (_fun40304_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = var0.id;
                                var3 = var0.members;
                                var1 = _closure1_slot20;
                                var0 = undefined;
                                var2 = var1.bind(var0)(var2);
                                var1 = var2.updateServerMembers;
                                var2 = var1.bind(var2)(var3);
                                if (var2) {
                                    _fun40304_ip = 49;
                                    continue _fun40304
                                }
                            case 42:
                                var2 = _closure3_slot0;
                            case 49:
                                _closure3_slot0 = var2;
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    var0 = _closure3_slot0;
                    return var0;
                };
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
        }
    };
    var1.CONNECTION_OPEN = var11;
    var11 = function arg0() {
        var2 = function arg0() {
            var1 = false;
            var _closure3_slot0 = var1;
            var1 = arg0;
            var3 = var1.guilds;
            var2 = var3.forEach;
            var1 = function(arg0) { // Environment: var0
                _fun40307: for (var _fun40307_ip = 0;;) switch (_fun40307_ip) {
                    case 0:
                        var0 = arg0;
                        var3 = var0.id;
                        var5 = var0.activity_instances;
                        var2 = _closure1_slot20;
                        var0 = undefined;
                        var3 = var2.bind(var0)(var3);
                        var2 = new Array(0);
                        var _closure4_slot0 = var2;
                        var4 = null;
                        if (!(var4 != var5)) {
                            _fun40307_ip = 59;
                            continue _fun40307
                        }
                    case 44:
                        var4 = var5.forEach;
                        var1 = function(arg0) { // Environment: var1
                            _fun40308: for (var _fun40308_ip = 0;;) switch (_fun40308_ip) {
                                case 0:
                                    var0 = arg0;
                                    var2 = var0.participants;
                                    var0 = null;
                                    if (!(var0 != var2)) {
                                        _fun40308_ip = 32;
                                        continue _fun40308
                                    }
                                case 15:
                                    var1 = var2.forEach;
                                    var0 = function(arg0) { // Environment: var0
                                        _fun40309: for (var _fun40309_ip = 0;;) switch (_fun40309_ip) {
                                            case 0:
                                                var1 = arg0;
                                                var3 = _closure1_slot0;
                                                var2 = _closure1_slot2;
                                                var0 = 12;
                                                var2 = var2[var0];
                                                var0 = undefined;
                                                var4 = var3.bind(var0)(var2);
                                                var3 = var4.isNotNullish;
                                                var2 = var1.member;
                                                var2 = var3.bind(var4)(var2);
                                                if (!var2) {
                                                    _fun40309_ip = 71;
                                                    continue _fun40309
                                                }
                                            case 48:
                                                var3 = _closure4_slot0;
                                                var2 = var3.push;
                                                var1 = var1.member;
                                                var1 = var2.bind(var3)(var1);
                                            case 71:
                                                return var0;
                                        }
                                    };
                                    var0 = var1.bind(var2)(var0);
                                case 32:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var1 = var4.bind(var5)(var1);
                    case 59:
                        var1 = var3.updateServerMembers;
                        var2 = var1.bind(var3)(var2);
                        if (var2) {
                            _fun40307_ip = 80;
                            continue _fun40307
                        }
                    case 73:
                        var2 = _closure3_slot0;
                    case 80:
                        _closure3_slot0 = var2;
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            var0 = _closure3_slot0;
            return var0;
        };
        var1 = undefined;
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var1.CONNECTION_OPEN_SUPPLEMENTAL = var11;
    var11 = function arg0() {
        _fun40310: for (var _fun40310_ip = 0;;) switch (_fun40310_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guildId;
                var1 = var0.members;
                var6 = null;
                if (!(var6 != var3)) {
                    _fun40310_ip = 163;
                    continue _fun40310
                }
            case 23:
                var4 = _closure1_slot11;
                var2 = var4.getGuild;
                var2 = var2.bind(var4)(var3);
                if (!(var6 != var2)) {
                    _fun40310_ip = 163;
                    continue _fun40310
                }
            case 44:
                var2 = true;
                _closure1_slot15 = var2;
                var2 = _closure1_slot20;
                var5 = undefined;
                var3 = var2.bind(var5)(var3);
                var2 = new Array(0);
                var0 = _closure1_slot18;
                var4 = var0.bind(var5)(var1);
                var1 = var4.bind(var5)();
                var0 = var1.done;
                if (var0) {
                    _fun40310_ip = 136;
                    continue _fun40310
                }
            case 86:
                var7 = var1.value;
                var8 = var3.getMember;
                var0 = var7.userId;
                var0 = var8.bind(var3)(var0);
                if (!(var6 == var0)) {
                    _fun40310_ip = 121;
                    continue _fun40310
                }
            case 111:
                var0 = var2.push;
                var0 = var0.bind(var2)(var7);
            case 121:
                var7 = var4.bind(var5)();
                var0 = var7.done;
                var1 = var7;
                if (!var0) {
                    _fun40310_ip = 86;
                    continue _fun40310
                }
            case 136:
                var1 = var2.length;
                var0 = 0;
                var0 = var1 > var0;
                if (!var0) {
                    _fun40310_ip = 161;
                    continue _fun40310
                }
            case 150:
                var1 = var3.updateClientMembers;
                var0 = var1.bind(var3)(var2);
            case 161:
                return var0;
            case 163:
                var0 = false;
                return var0;
        }
    };
    var1.LOCAL_MESSAGES_LOADED = var11;
    var11 = function arg0() {
        var1 = arg0;
        var3 = var1.guildMembers;
        var1 = false;
        var _closure2_slot0 = var1;
        var2 = true;
        _closure1_slot15 = var2;
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 13;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var1 = var2.entries;
        var3 = var1.bind(var2)(var3);
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var0
            _fun40312: for (var _fun40312_ip = 0;;) switch (_fun40312_ip) {
                case 0:
                    var4 = arg0;
                    var1 = var4[Symbol.iterator];
                    var4 = var1().next;
                    var5 = var4().value;
                    var2 = var1;
                    var0 = undefined;
                    var3 = var2 === var0;
                    var2 = undefined;
                    if (var3) {
                        _fun40312_ip = 27;
                        continue _fun40312
                    }
                case 24:
                    var2 = var5;
                case 27:
                    var5 = undefined;
                    if (var3) {
                        _fun40312_ip = 57;
                        continue _fun40312
                    }
                case 32:
                    var6 = var4().value;
                    var4 = var1;
                    var4 = var4 === var0;
                    var5 = undefined;
                    var3 = var4;
                    if (var4) {
                        _fun40312_ip = 57;
                        continue _fun40312
                    }
                case 51:
                    var5 = var6;
                    var3 = var4;
                case 57:
                    if (var3) {
                        _fun40312_ip = 63;
                        continue _fun40312
                    }
                case 60:
                    var1.return();
                case 63:
                    var1 = _closure1_slot20;
                    var3 = var1.bind(var0)(var2);
                    var2 = var3.updateClientMembers;
                    var1 = global;
                    var4 = var1.Object;
                    var1 = var4.values;
                    var1 = var1.bind(var4)(var5);
                    var2 = var2.bind(var3)(var1);
                    if (var2) {
                        _fun40312_ip = 114;
                        continue _fun40312
                    }
                case 107:
                    var2 = _closure2_slot0;
                case 114:
                    _closure2_slot0 = var2;
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        var0 = _closure2_slot0;
        return var0;
    };
    var1.CACHE_LOADED = var11;
    var11 = function arg0() {
        _fun40313: for (var _fun40313_ip = 0;;) switch (_fun40313_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.members;
                var4 = var0.guildId;
                var1 = var3.length;
                var0 = 0;
                var0 = var1 > var0;
                if (!var0) {
                    _fun40313_ip = 53;
                    continue _fun40313
                }
            case 28:
                var2 = _closure1_slot20;
                var1 = undefined;
                var2 = var2.bind(var1)(var4);
                var1 = var2.updateServerMembers;
                var0 = var1.bind(var2)(var3);
            case 53:
                return var0;
        }
    };
    var1.PASSIVE_UPDATE_V2 = var11;
    var11 = function arg0() {
        var0 = arg0;
        var2 = var0.guild;
        var4 = _closure1_slot20;
        var1 = var2.id;
        var0 = undefined;
        var1 = var4.bind(var0)(var1);
        var3 = _closure1_slot21;
        var2 = var2.id;
        var1 = var1.isInitialized;
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1.GUILD_CREATE = var11;
    var11 = function arg0() {
        var0 = arg0;
        var0 = var0.guild;
        var2 = var0.id;
        var1 = _closure1_slot21;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var1.GUILD_DELETE = var11;
    var11 = function arg0() {
        _fun40316: for (var _fun40316_ip = 0;;) switch (_fun40316_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.chunks;
                var0 = _closure1_slot18;
                var5 = undefined;
                var4 = var0.bind(var5)(var1);
                var2 = var4.bind(var5)();
                var1 = var2.done;
                var3 = var2;
                var2 = false;
                var0 = false;
                if (var1) {
                    _fun40316_ip = 105;
                    continue _fun40316
                }
            case 42:
                var1 = var3.value;
                var8 = _closure1_slot20;
                var7 = var1.guildId;
                var8 = var8.bind(var5)(var7);
                var7 = var8.updateServerMembers;
                var1 = var1.members;
                var7 = var7.bind(var8)(var1);
                if (var7) {
                    _fun40316_ip = 84;
                    continue _fun40316
                }
            case 81:
                var7 = var2;
            case 84:
                var8 = var4.bind(var5)();
                var1 = var8.done;
                var2 = var7;
                var3 = var8;
                var0 = var2;
                if (!var1) {
                    _fun40316_ip = 42;
                    continue _fun40316
                }
            case 105:
                return var0;
        }
    };
    var1.GUILD_MEMBERS_CHUNK_BATCH = var11;
    var1.GUILD_MEMBER_ADD = var10;
    var1.GUILD_MEMBER_UPDATE = var10;
    var10 = function arg0() {
        var0 = arg0;
        var2 = var0.guildId;
        var3 = _closure1_slot9;
        var1 = var3.getId;
        var3 = var1.bind(var3)();
        var1 = _closure1_slot20;
        var0 = undefined;
        var2 = var1.bind(var0)(var2);
        var1 = var2.updateMembersByMemberIds;
        var0 = new Array(1);
        var0[0] = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.GUILD_MEMBER_UPDATE_LOCAL = var10;
    var10 = function arg0() {
        var0 = arg0;
        var3 = var0.guildId;
        var0 = var0.user;
        var2 = _closure1_slot20;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        var1 = var2.removeMember;
        var0 = var0.id;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.GUILD_MEMBER_REMOVE = var10;
    var1.GUILD_ROLE_UPDATE = var9;
    var1.GUILD_ROLE_DELETE = var9;
    var9 = function arg0() {
        var0 = arg0;
        var3 = var0.guildId;
        var0 = var0.guildMember;
        var2 = _closure1_slot20;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        var1 = var2.updateMembersByMemberIds;
        var0 = var0.user;
        var3 = var0.id;
        var0 = new Array(1);
        var0[0] = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.GUILD_MEMBER_PROFILE_UPDATE = var9;
    var1.GUILD_ROLE_MEMBER_REMOVE = var8;
    var1.GUILD_ROLE_MEMBER_ADD = var8;
    var8 = function arg0() {
        _fun40320: for (var _fun40320_ip = 0;;) switch (_fun40320_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var4 = var0.members;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun40320_ip = 81;
                    continue _fun40320
                }
            case 20:
                var1 = var4.length;
                var0 = 0;
                if (!(var0 !== var1)) {
                    _fun40320_ip = 81;
                    continue _fun40320
                }
            case 31:
                var1 = _closure1_slot20;
                var0 = undefined;
                var2 = var1.bind(var0)(var2);
                var3 = var4.reduce;
                var1 = function(arg0, arg1) { // Environment: var0
                    _fun40321: for (var _fun40321_ip = 0;;) switch (_fun40321_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = arg1;
                            var3 = var1.member;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun40321_ip = 44;
                                continue _fun40321
                            }
                        case 18:
                            var1 = var1.member;
                            var1 = var1.user;
                            var2 = var1.id;
                            var1 = var0.push;
                            var1 = var1.bind(var0)(var2);
                        case 44:
                            return var0;
                    }
                };
                var0 = new Array(0);
                var1 = var3.bind(var4)(var1, var0);
                var0 = var2.updateMembersByMemberIds;
                var0 = var0.bind(var2)(var1);
                return var0;
            case 81:
                var0 = false;
                return var0;
        }
    };
    var1.THREAD_MEMBER_LIST_UPDATE = var8;
    var8 = function arg0() {
        _fun40322: for (var _fun40322_ip = 0;;) switch (_fun40322_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var4 = var0.addedMembers;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun40322_ip = 81;
                    continue _fun40322
                }
            case 20:
                var1 = var4.length;
                var0 = 0;
                if (!(var0 !== var1)) {
                    _fun40322_ip = 81;
                    continue _fun40322
                }
            case 31:
                var1 = _closure1_slot20;
                var0 = undefined;
                var2 = var1.bind(var0)(var2);
                var3 = var4.reduce;
                var1 = function(arg0, arg1) { // Environment: var0
                    var0 = arg0;
                    var1 = arg1;
                    var2 = var1.userId;
                    var1 = var0.push;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var0 = new Array(0);
                var1 = var3.bind(var4)(var1, var0);
                var0 = var2.updateMembersByMemberIds;
                var0 = var0.bind(var2)(var1);
                return var0;
            case 81:
                var0 = false;
                return var0;
        }
    };
    var1.THREAD_MEMBERS_UPDATE = var8;
    var8 = function arg0() {
        _fun40324: for (var _fun40324_ip = 0;;) switch (_fun40324_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var4 = var0.members;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun40324_ip = 81;
                    continue _fun40324
                }
            case 20:
                var1 = var4.length;
                var0 = 0;
                if (!(var0 !== var1)) {
                    _fun40324_ip = 81;
                    continue _fun40324
                }
            case 31:
                var1 = _closure1_slot20;
                var0 = undefined;
                var2 = var1.bind(var0)(var2);
                var3 = var4.reduce;
                var1 = function(arg0, arg1) { // Environment: var0
                    var0 = arg0;
                    var1 = arg1;
                    var2 = var1.userId;
                    var1 = var0.push;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var0 = new Array(0);
                var1 = var3.bind(var4)(var1, var0);
                var0 = var2.updateMembersByMemberIds;
                var0 = var0.bind(var2)(var1);
                return var0;
            case 81:
                var0 = false;
                return var0;
        }
    };
    var1.LOAD_ARCHIVED_THREADS_SUCCESS = var8;
    var8 = function arg0() {
        _fun40326: for (var _fun40326_ip = 0;;) switch (_fun40326_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var3 = var0.threads;
                var0 = global;
                var1 = var0.Object;
                var0 = var1.values;
                var4 = var0.bind(var1)(var3);
                var1 = var4.length;
                var0 = 0;
                if (!(var0 !== var1)) {
                    _fun40326_ip = 93;
                    continue _fun40326
                }
            case 43:
                var1 = _closure1_slot20;
                var0 = undefined;
                var2 = var1.bind(var0)(var2);
                var3 = var4.reduce;
                var1 = function(arg0, arg1) { // Environment: var0
                    _fun40327: for (var _fun40327_ip = 0;;) switch (_fun40327_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = arg1;
                            var3 = var1.owner;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun40327_ip = 44;
                                continue _fun40327
                            }
                        case 18:
                            var1 = var1.owner;
                            var1 = var1.user;
                            var2 = var1.id;
                            var1 = var0.push;
                            var1 = var1.bind(var0)(var2);
                        case 44:
                            return var0;
                    }
                };
                var0 = new Array(0);
                var1 = var3.bind(var4)(var1, var0);
                var0 = var2.updateMembersByMemberIds;
                var0 = var0.bind(var2)(var1);
                return var0;
            case 93:
                var0 = false;
                return var0;
        }
    };
    var1.LOAD_FORUM_POSTS = var8;
    var8 = function arg0() {
        var0 = arg0;
        var2 = var0.guildId;
        var1 = _closure1_slot20;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        var0 = var1.initialize;
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.INITIALIZE_MEMBER_SAFETY_STORE = var8;
    var8 = function arg0() {
        var0 = arg0;
        var2 = var0.guildId;
        var1 = _closure1_slot20;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        var0 = var1.refreshNewMembersAndSearchResults;
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH = var8;
    var8 = function arg0() {
        var0 = arg0;
        var2 = var0.guildId;
        var4 = var0.pagination;
        var1 = _closure1_slot20;
        var3 = undefined;
        var2 = var1.bind(var3)(var2);
        var1 = var2.updatePaginationState;
        var2 = var1.bind(var2)(var4);
        var1 = _closure1_slot8;
        var0 = 1;
        var1 = var1.bind(var3)(var2, var0);
        var0 = 0;
        var0 = var1[var0];
        return var0;
    };
    var1.MEMBER_SAFETY_PAGINATION_UPDATE = var8;
    var8 = function arg0() {
        var0 = arg0;
        var3 = var0.guildId;
        var2 = var0.continuationToken;
        var1 = _closure1_slot20;
        var0 = undefined;
        var1 = var1.bind(var0)(var3);
        var0 = var1.updatePaginationToken;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1.MEMBER_SAFETY_PAGINATION_TOKEN_UPDATE = var8;
    var8 = function arg0() {
        var0 = arg0;
        var3 = var0.guildId;
        var2 = var0.searchState;
        var1 = _closure1_slot20;
        var0 = undefined;
        var1 = var1.bind(var0)(var3);
        var0 = var1.updateSearchState;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1.MEMBER_SAFETY_SEARCH_STATE_UPDATE = var8;
    var8 = function arg0() {
        _fun40333: for (var _fun40333_ip = 0;;) switch (_fun40333_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guildId;
                var5 = var0.memberSupplementals;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 14;
                var0 = var2[var0];
                var2 = undefined;
                var4 = var4.bind(var2)(var0);
                var0 = var4.syncMemberSupplemental;
                var0 = var0.bind(var4)(var3, var5);
                if (!var0) {
                    _fun40333_ip = 91;
                    continue _fun40333
                }
            case 54:
                var1 = _closure1_slot20;
                var3 = var1.bind(var2)(var3);
                var2 = var3.updateMembersByMemberIds;
                var4 = var5.map;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.userId;
                    return var0;
                };
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
            case 91:
                return var0;
        }
    };
    var1.FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS = var8;
    var8 = function arg0() {
        _fun40335: for (var _fun40335_ip = 0;;) switch (_fun40335_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.guildId;
                var9 = var0.members;
                var4 = var0.total_result_count;
                var0 = _closure1_slot20;
                var6 = undefined;
                var8 = var0.bind(var6)(var7);
                var3 = var9.reduce;
                var2 = {};
                var0 = new Array(0);
                var2.memberIds = var0;
                var0 = new Array(0);
                var2.memberSupplementals = var0;
                var0 = function(arg0, arg1) { // Environment: var0
                    var0 = arg0;
                    var2 = arg1;
                    var1 = var2.member;
                    var8 = var2.source_invite_code;
                    var7 = var2.join_source_type;
                    var6 = var2.join_source_application_id;
                    var5 = var2.join_source_channel_id;
                    var4 = var2.inviter_id;
                    var9 = var1.user;
                    var3 = var0.memberIds;
                    var2 = var3.push;
                    var1 = var9.id;
                    var1 = var2.bind(var3)(var1);
                    var3 = var0.memberSupplementals;
                    var2 = var3.push;
                    var1 = {};
                    var9 = var9.id;
                    var1.userId = var9;
                    var1.sourceInviteCode = var8;
                    var1.joinSourceType = var7;
                    var1.joinSourceApplicationId = var6;
                    var1.joinSourceChannelId = var5;
                    var1.inviterId = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var3.bind(var9)(var0, var2);
                var3 = var0.memberIds;
                var11 = var0.memberSupplementals;
                var5 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 14;
                var0 = var10[var0];
                var2 = var5.bind(var6)(var0);
                var0 = var2.syncMemberSupplemental;
                var0 = var0.bind(var2)(var7, var11);
                var2 = 15;
                var2 = var10[var2];
                var5 = var5.bind(var6)(var2);
                var2 = var5.registerFetchedSupplementals;
                var2 = var2.bind(var5)(var7, var3);
                var2 = var8.updateSearchedMembersByMemberIds;
                var2 = var2.bind(var8)(var3);
                var5 = var9.length;
                var3 = 0;
                var5 = var5 > var3;
                var16 = undefined;
                var14 = undefined;
                if (!var5) {
                    _fun40335_ip = 194;
                    continue _fun40335
                }
            case 174:
                var16 = var9[var3];
                var10 = var9.length;
                var5 = 1;
                var5 = var10 - var5;
                var14 = var9[var5];
            case 194:
                var7 = var8.updatePaginationState;
                var5 = {};
                var5.totalResultsCount = var4;
                var4 = {};
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var11 = 16;
                var9 = var9[var11];
                var12 = var10.bind(var6)(var9);
                var10 = var12.createMemberSearchCursor;
                var9 = {};
                var13 = null;
                var17 = var13 == var16;
                var15 = undefined;
                if (var17) {
                    _fun40335_ip = 269;
                    continue _fun40335
                }
            case 248:
                var17 = var16.member;
                var18 = var13 == var17;
                var15 = undefined;
                if (var18) {
                    _fun40335_ip = 269;
                    continue _fun40335
                }
            case 263:
                var15 = var17.joined_at;
            case 269:
                var9.joinedAt = var15;
                var17 = var13 == var16;
                var15 = undefined;
                if (var17) {
                    _fun40335_ip = 308;
                    continue _fun40335
                }
            case 283:
                var16 = var16.member;
                var17 = var13 == var16;
                var15 = undefined;
                if (var17) {
                    _fun40335_ip = 308;
                    continue _fun40335
                }
            case 298:
                var16 = var16.user;
                var15 = var16.id;
            case 308:
                if (!(var13 == var15)) {
                    _fun40335_ip = 316;
                    continue _fun40335
                }
            case 312:
                var15 = _closure1_slot14;
            case 316:
                var9.userId = var15;
                var9 = var10.bind(var12)(var9);
                var4.before = var9;
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var11];
                var11 = var10.bind(var6)(var9);
                var10 = var11.createMemberSearchCursor;
                var9 = {};
                var15 = var13 == var14;
                var12 = undefined;
                if (var15) {
                    _fun40335_ip = 385;
                    continue _fun40335
                }
            case 364:
                var15 = var14.member;
                var16 = var13 == var15;
                var12 = undefined;
                if (var16) {
                    _fun40335_ip = 385;
                    continue _fun40335
                }
            case 379:
                var12 = var15.joined_at;
            case 385:
                var9.joinedAt = var12;
                var15 = var13 == var14;
                var12 = undefined;
                if (var15) {
                    _fun40335_ip = 424;
                    continue _fun40335
                }
            case 399:
                var14 = var14.member;
                var15 = var13 == var14;
                var12 = undefined;
                if (var15) {
                    _fun40335_ip = 424;
                    continue _fun40335
                }
            case 414:
                var14 = var14.user;
                var12 = var14.id;
            case 424:
                if (!(var13 == var12)) {
                    _fun40335_ip = 432;
                    continue _fun40335
                }
            case 428:
                var12 = _closure1_slot14;
            case 432:
                var9.userId = var12;
                var9 = var10.bind(var11)(var9);
                var4.after = var9;
                var5.elasticSearchCursor = var4;
                var4 = false;
                var5 = var7.bind(var8)(var5, var4);
                var4 = _closure1_slot8;
                var1 = 1;
                var1 = var4.bind(var6)(var5, var1);
                var1 = var1[var3];
                if (var0) {
                    _fun40335_ip = 482;
                    continue _fun40335
                }
            case 479:
                var0 = var2;
            case 482:
                if (var0) {
                    _fun40335_ip = 488;
                    continue _fun40335
                }
            case 485:
                var0 = var1;
            case 488:
                return var0;
        }
    };
    var1.MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS = var8;
    var3 = function arg0() {
        var0 = arg0;
        var3 = var0.guildId;
        var2 = var0.userIds;
        var1 = _closure1_slot20;
        var0 = undefined;
        var1 = var1.bind(var0)(var3);
        var0 = var1.updateMembersByMemberIds;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1.MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var15 = var3;
    var13 = var1;
    var1 = new var15[var7](var14, var13, var12);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_mod_dash_member_safety/MemberSafetyStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 57, 1216, 1672, 1410, 1613, 4353, 660, 1304, 21, 4359, 4360, 4355, 566, 806, 2]);