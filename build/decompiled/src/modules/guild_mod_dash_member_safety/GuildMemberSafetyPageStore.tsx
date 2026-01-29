// modules/guild_mod_dash_member_safety/GuildMemberSafetyPageStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun40268: for (var _fun40268_ip = 0;;) switch (_fun40268_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun40268_ip = 45;
                    continue _fun40268
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun40268_ip = 54;
                    continue _fun40268
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun40268_ip = 342;
                    continue _fun40268
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun40268_ip = 322;
                    continue _fun40268
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun40268_ip = 282;
                    continue _fun40268
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun40268_ip = 269;
                    continue _fun40268
                }
            case 109:
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
                    _fun40268_ip = 162;
                    continue _fun40268
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun40268_ip = 178;
                    continue _fun40268
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun40268_ip = 248;
                    continue _fun40268
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun40268_ip = 248;
                    continue _fun40268
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun40268_ip = 233;
                    continue _fun40268
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun40268_ip = 246;
                    continue _fun40268
                }
            case 233:
                var8 = _closure1_slot9;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun40268_ip = 264;
                continue _fun40268;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun40268_ip = 282;
                continue _fun40268;
            case 269:
                var6 = _closure1_slot9;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun40268_ip = 322;
                    continue _fun40268
                }
            case 288:
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
            case 322:
                if (!var3) {
                    _fun40268_ip = 329;
                    continue _fun40268
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun40269: for (var _fun40269_ip = 0;;) switch (_fun40269_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun40269_ip = 56;
                                continue _fun40269
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
                            _fun40269_ip = 67;
                            continue _fun40269;
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
            case 342:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun40270: for (var _fun40270_ip = 0;;) switch (_fun40270_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun40270_ip = 23;
                    continue _fun40270
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun40270_ip = 33;
                    continue _fun40270
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
                    _fun40270_ip = 70;
                    continue _fun40270
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun40270_ip = 55;
                    continue _fun40270
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var6 = 3;
    var3 = var5[var6];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var3 = var3.Millis;
    var3 = var3.SECOND;
    var3 = var6 * var3;
    var _closure1_slot7 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function(arg0) { // Original name: GuildMemberSafetyPageStore, environment: var4
            var2 = this;
            var3 = _closure1_slot3;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = 0;
            var2.lastRefreshTimestamp = var1;
            var1 = global;
            var3 = var1.Date;
            var1 = var3.now;
            var1 = var1.bind(var3)();
            var2.lastCursorTimestamp = var1;
            var1 = null;
            var2._lastRefreshTimer = var1;
            var3 = arg0;
            var2.guildId = var3;
            var3 = false;
            var2._initialized = var3;
            var2._members = var1;
            var2._pagination = var1;
            var2._search = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'getSearchIndex';
        var0.key = var1;
        var1 = function() { // Original name: value, environment: var4
            _fun40273: for (var _fun40273_ip = 0;;) switch (_fun40273_ip) {
                case 0:
                    var0 = this;
                    var2 = var0._search;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun40273_ip = 69;
                        continue _fun40273
                    }
                case 15:
                    var0 = var0._search;
                    var0 = var0.hasDefaultQuery;
                    if (var0) {
                        _fun40273_ip = 69;
                        continue _fun40273
                    }
                case 30:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 6;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var0 = var0.MemberSafetySecondaryIndex;
                    var0 = var0.INCLUDED_IN_SEARCH_RESULTS;
                    _fun40273_ip = 106;
                    continue _fun40273;
                case 69:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.MemberSafetySecondaryIndex;
                    var0 = var1.CURRENT_GUILD_MEMBER;
                case 106:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(38);
        var1[0] = var0;
        var0 = {};
        var5 = 'initialize';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun40274: for (var _fun40274_ip = 0;;) switch (_fun40274_ip) {
                case 0:
                    var1 = this;
                    var0 = var1._initialized;
                    if (var0) {
                        _fun40274_ip = 214;
                        continue _fun40274
                    }
                case 15:
                    var0 = true;
                    var1._initialized = var0;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var0 = 7;
                    var0 = var4[var0];
                    var2 = undefined;
                    var0 = var3.bind(var2)(var0);
                    var6 = var0.GuildMemberSafetySearch;
                    var8 = var1.guildId;
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var6
                        }
                    });
                    var9 = var5;
                    var0 = new var9[var6](var8, var7);
                    var0 = var0 instanceof Object ? var0 : var5;
                    var1._search = var0;
                    var0 = 6;
                    var0 = var4[var0];
                    var0 = var3.bind(var2)(var0);
                    var6 = var0.GuildMemberSafetyMembers;
                    var8 = var1.guildId;
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var6
                        }
                    });
                    var9 = var5;
                    var0 = new var9[var6](var8, var7);
                    var0 = var0 instanceof Object ? var0 : var5;
                    var1._members = var0;
                    var0 = 8;
                    var0 = var4[var0];
                    var0 = var3.bind(var2)(var0);
                    var4 = var0.GuildMemberSafetyPagination;
                    var3 = var1.guildId;
                    var5 = var1._members;
                    var2 = var5.values;
                    var0 = var1.getSearchIndex;
                    var0 = var0.bind(var1)();
                    var7 = var2.bind(var5)(var0);
                    var2 = var4.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var4
                        }
                    });
                    var9 = var2;
                    var8 = var3;
                    var0 = new var9[var4](var8, var7, var6);
                    var0 = var0 instanceof Object ? var0 : var2;
                    var1._pagination = var0;
                    _fun40274_ip = 237;
                    continue _fun40274;
                case 214:
                    var0 = global;
                    var2 = var0.Date;
                    var0 = var2.now;
                    var0 = var0.bind(var2)();
                    var1.lastCursorTimestamp = var0;
                case 237:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'isInitialized';
        var0.key = var5;
        var5 = function() { // Original name: get, environment: var4
            var0 = this;
            var0 = var0._initialized;
            return var0;
        };
        var0.get = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'reset';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun40276: for (var _fun40276_ip = 0;;) switch (_fun40276_ip) {
                case 0:
                    var1 = arguments[0];
                    var2 = this;
                    var0 = undefined;
                    if (!(var1 === var0)) {
                        _fun40276_ip = 14;
                        continue _fun40276
                    }
                case 12:
                    var1 = false;
                case 14:
                    var3 = var2._initialized;
                    if (!var3) {
                        _fun40276_ip = 98;
                        continue _fun40276
                    }
                case 23:
                    var5 = var2._members;
                    var3 = null;
                    if (!(var3 != var5)) {
                        _fun40276_ip = 45;
                        continue _fun40276
                    }
                case 35:
                    var4 = var5.reset;
                    var4 = var4.bind(var5)();
                case 45:
                    var5 = var2._pagination;
                    if (!(var3 != var5)) {
                        _fun40276_ip = 65;
                        continue _fun40276
                    }
                case 55:
                    var4 = var5.reset;
                    var4 = var4.bind(var5)();
                case 65:
                    var4 = var2._search;
                    if (!(var3 != var4)) {
                        _fun40276_ip = 85;
                        continue _fun40276
                    }
                case 75:
                    var3 = var4.reset;
                    var3 = var3.bind(var4)();
                case 85:
                    if (!var1) {
                        _fun40276_ip = 98;
                        continue _fun40276
                    }
                case 88:
                    var1 = var2.initialize;
                    var1 = var1.bind(var2)();
                case 98:
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'searchChunkSize';
        var0.key = var5;
        var5 = function() { // Original name: get, environment: var4
            _fun40277: for (var _fun40277_ip = 0;;) switch (_fun40277_ip) {
                case 0:
                    var1 = this;
                    var2 = var1._pagination;
                    var0 = null;
                    var2 = var0 != var2;
                    var0 = 0;
                    if (!var2) {
                        _fun40277_ip = 83;
                        continue _fun40277
                    }
                case 20:
                    var2 = var1._initialized;
                    var0 = 0;
                    if (!var2) {
                        _fun40277_ip = 83;
                        continue _fun40277
                    }
                case 31:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 8;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.getSearchChunkLimit;
                    var4 = var1._pagination;
                    var1 = var4.getPaginationState;
                    var1 = var1.bind(var4)();
                    var0 = var2.bind(var3)(var1);
                case 83:
                    return var0;
            }
        };
        var0.get = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'getMember';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun40278: for (var _fun40278_ip = 0;;) switch (_fun40278_ip) {
                case 0:
                    var1 = this;
                    var0 = var1._members;
                    var3 = null;
                    var2 = var3 != var0;
                    var0 = null;
                    if (!var2) {
                        _fun40278_ip = 63;
                        continue _fun40278
                    }
                case 20:
                    var2 = var1._initialized;
                    var0 = null;
                    if (!var2) {
                        _fun40278_ip = 63;
                        continue _fun40278
                    }
                case 31:
                    var4 = var1._members;
                    var2 = var4.getMemberByUserId;
                    var1 = arg0;
                    var1 = var2.bind(var4)(var1);
                    var2 = var3 != var1;
                    var0 = null;
                    if (!var2) {
                        _fun40278_ip = 63;
                        continue _fun40278
                    }
                case 60:
                    var0 = var1;
                case 63:
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'getMembersByIndex';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun40279: for (var _fun40279_ip = 0;;) switch (_fun40279_ip) {
                case 0:
                    var2 = this;
                    var1 = var2._members;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun40279_ip = 24;
                        continue _fun40279
                    }
                case 15:
                    var0 = var2._initialized;
                    if (var0) {
                        _fun40279_ip = 44;
                        continue _fun40279
                    }
                case 24:
                    var0 = new Array(2);
                    var1 = new Array(0);
                    var0[0] = var1;
                    var1 = 0;
                    var0[1] = var1;
                    _fun40279_ip = 90;
                    continue _fun40279;
                case 44:
                    var4 = var2._members;
                    var3 = var4.values;
                    var1 = arg0;
                    var3 = var3.bind(var4)(var1);
                    var1 = new Array(2);
                    var1[0] = var3;
                    var2 = var2._members;
                    var2 = var2.version;
                    var1[1] = var2;
                    var0 = var1;
                case 90:
                    return var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'countMembersByIndex';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun40280: for (var _fun40280_ip = 0;;) switch (_fun40280_ip) {
                case 0:
                    var1 = this;
                    var2 = var1._members;
                    var0 = null;
                    var2 = var0 != var2;
                    var0 = 0;
                    if (!var2) {
                        _fun40280_ip = 51;
                        continue _fun40280
                    }
                case 20:
                    var2 = var1._initialized;
                    var0 = 0;
                    if (!var2) {
                        _fun40280_ip = 51;
                        continue _fun40280
                    }
                case 31:
                    var3 = var1._members;
                    var2 = var3.count;
                    var1 = arg0;
                    var0 = var2.bind(var3)(var1);
                case 51:
                    return var0;
            }
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = '_checkUpdatesForPaginationUpdate';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var4
            _fun40281: for (var _fun40281_ip = 0;;) switch (_fun40281_ip) {
                case 0:
                    var2 = arg0;
                    var3 = arg1;
                    var0 = var3.isIncludedInSearchResults;
                    var4 = null;
                    var0 = var4 != var0;
                    if (!var0) {
                        _fun40281_ip = 37;
                        continue _fun40281
                    }
                case 21:
                    var5 = var3.isIncludedInSearchResults;
                    var1 = var2.isIncludedInSearchResults;
                    var0 = var5 !== var1;
                case 37:
                    if (var0) {
                        _fun40281_ip = 72;
                        continue _fun40281
                    }
                case 40:
                    var1 = var3.isCurrentGuildMemberByTimestamp;
                    var1 = var4 != var1;
                    if (!var1) {
                        _fun40281_ip = 69;
                        continue _fun40281
                    }
                case 53:
                    var3 = var3.isCurrentGuildMemberByTimestamp;
                    var2 = var2.isCurrentGuildMemberByTimestamp;
                    var1 = var3 !== var2;
                case 69:
                    var0 = var1;
                case 72:
                    return var0;
            }
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = '_getIsIncludedInSearch';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var4
            _fun40282: for (var _fun40282_ip = 0;;) switch (_fun40282_ip) {
                case 0:
                    var1 = arg0;
                    var0 = this;
                    var3 = var0._search;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun40282_ip = 112;
                        continue _fun40282
                    }
                case 18:
                    var2 = var0._search;
                    var2 = var2.hasDefaultQuery;
                    if (var2) {
                        _fun40282_ip = 96;
                        continue _fun40282
                    }
                case 33:
                    var3 = {};
                    var5 = var3;
                    var4 = var1;
                    var2 = copyDataProperties(var5, var4);
                    var4 = arg1;
                    var5 = var3;
                    var2 = copyDataProperties(var5, var4);
                    var2 = var0._search;
                    var0 = var2.isMemberIncludedInSearchResults;
                    var2 = var0.bind(var2)(var3);
                    var0 = new Array(2);
                    var0[0] = var2;
                    var1 = var1.isIncludedInSearchResults;
                    var1 = var2 !== var1;
                    var0[1] = var1;
                    return var0;
                case 96:
                    var0 = new Array(2);
                    var1 = false;
                    var0[0] = var1;
                    var0[1] = var1;
                    return var0;
                case 112:
                    var0 = new Array(2);
                    var1 = false;
                    var0[0] = var1;
                    var0[1] = var1;
                    return var0;
            }
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'updatePaginationChunks';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun40283: for (var _fun40283_ip = 0;;) switch (_fun40283_ip) {
                case 0:
                    var0 = this;
                    var1 = var0._pagination;
                    var2 = null;
                    if (!(var2 != var1)) {
                        _fun40283_ip = 81;
                        continue _fun40283
                    }
                case 15:
                    var1 = var0._members;
                    if (!(var2 != var1)) {
                        _fun40283_ip = 81;
                        continue _fun40283
                    }
                case 25:
                    var1 = var0._initialized;
                    if (!var1) {
                        _fun40283_ip = 81;
                        continue _fun40283
                    }
                case 34:
                    var3 = var0._members;
                    var2 = var3.values;
                    var1 = var0.getSearchIndex;
                    var1 = var1.bind(var0)();
                    var2 = var2.bind(var3)(var1);
                    var1 = var0._pagination;
                    var0 = var1.updateSortedMembers;
                    var0 = var0.bind(var1)(var2);
                    return var0;
                case 81:
                    var0 = false;
                    return var0;
            }
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'removeMember';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun40284: for (var _fun40284_ip = 0;;) switch (_fun40284_ip) {
                case 0:
                    var3 = arg0;
                    var2 = this;
                    var0 = var2._members;
                    var1 = null;
                    if (!(var1 != var0)) {
                        _fun40284_ip = 84;
                        continue _fun40284
                    }
                case 18:
                    var0 = var2._initialized;
                    if (!var0) {
                        _fun40284_ip = 84;
                        continue _fun40284
                    }
                case 27:
                    var4 = var2._members;
                    var0 = var4.getMemberByUserId;
                    var0 = var0.bind(var4)(var3);
                    if (!(var1 != var0)) {
                        _fun40284_ip = 80;
                        continue _fun40284
                    }
                case 48:
                    var1 = var2._members;
                    var0 = var1.removeMember;
                    var0 = var0.bind(var1)(var3);
                    if (!var0) {
                        _fun40284_ip = 78;
                        continue _fun40284
                    }
                case 68:
                    var1 = var2.updatePaginationChunks;
                    var0 = var1.bind(var2)();
                case 78:
                    return var0;
                case 80:
                    var0 = false;
                    return var0;
                case 84:
                    var0 = false;
                    return var0;
            }
        };
        var0.value = var5;
        var1[11] = var0;
        var0 = {};
        var5 = '_rawUpdateMember';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var4
            _fun40285: for (var _fun40285_ip = 0;;) switch (_fun40285_ip) {
                case 0:
                    var9 = arg0;
                    var6 = arg1;
                    var5 = this;
                    var0 = var5._members;
                    var2 = null;
                    if (!(var2 != var0)) {
                        _fun40285_ip = 272;
                        continue _fun40285
                    }
                case 24:
                    var1 = var5._members;
                    var0 = var1.getMemberByUserId;
                    var3 = var0.bind(var1)(var9);
                    var0 = var2 == var3;
                    var1 = false;
                    var7 = false;
                    var4 = var3;
                    if (!var0) {
                        _fun40285_ip = 117;
                        continue _fun40285
                    }
                case 55:
                    var8 = _closure1_slot5;
                    var3 = var8.getTrueMember;
                    var0 = var5.guildId;
                    var9 = var3.bind(var8)(var0, var9);
                    if (!(var2 != var9)) {
                        _fun40285_ip = 258;
                        continue _fun40285
                    }
                case 86:
                    var8 = var5._members;
                    var3 = var8.enhanceNewMember;
                    var0 = var5.getSearchState;
                    var0 = var0.bind(var5)();
                    var4 = var3.bind(var8)(var9, var0, var6);
                    var7 = true;
                case 117:
                    var0 = var6.isIncludedInSearchResults;
                    if (!(var2 != var0)) {
                        _fun40285_ip = 150;
                        continue _fun40285
                    }
                case 127:
                    var2 = var6.isIncludedInSearchResults;
                    var0 = var4.isIncludedInSearchResults;
                    var3 = var7;
                    if (!(var2 !== var0)) {
                        _fun40285_ip = 209;
                        continue _fun40285
                    }
                case 146:
                    var3 = true;
                    _fun40285_ip = 209;
                    continue _fun40285;
                case 150:
                    var0 = var5._getIsIncludedInSearch;
                    var9 = var0.bind(var5)(var4, var6);
                    var8 = _closure1_slot2;
                    var2 = undefined;
                    var0 = 2;
                    var8 = var8.bind(var2)(var9, var0);
                    var0 = 0;
                    var0 = var8[var0];
                    var2 = 1;
                    var2 = var8[var2];
                    var3 = var7;
                    if (!var2) {
                        _fun40285_ip = 209;
                        continue _fun40285
                    }
                case 201:
                    var6.isIncludedInSearchResults = var0;
                    var3 = true;
                case 209:
                    var2 = var5._members;
                    var0 = var2.updateMember;
                    var2 = var0.bind(var2)(var4, var6);
                    if (var3) {
                        _fun40285_ip = 244;
                        continue _fun40285
                    }
                case 230:
                    var0 = var5._checkUpdatesForPaginationUpdate;
                    var3 = var0.bind(var5)(var4, var6);
                case 244:
                    var0 = new Array(2);
                    var0[0] = var3;
                    var0[1] = var2;
                    return var0;
                case 258:
                    var0 = new Array(2);
                    var0[0] = var1;
                    var0[1] = var1;
                    return var0;
                case 272:
                    var0 = new Array(2);
                    var1 = false;
                    var0[0] = var1;
                    var0[1] = var1;
                    return var0;
            }
        };
        var0.value = var5;
        var1[12] = var0;
        var0 = {};
        var5 = 'isMemberInIndex';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun40286: for (var _fun40286_ip = 0;;) switch (_fun40286_ip) {
                case 0:
                    var1 = this;
                    var2 = var1._members;
                    var0 = null;
                    var2 = var0 == var2;
                    if (var2) {
                        _fun40286_ip = 27;
                        continue _fun40286
                    }
                case 18:
                    var0 = var1._initialized;
                    var2 = !var0;
                case 27:
                    var0 = !var2;
                    if (var2) {
                        _fun40286_ip = 58;
                        continue _fun40286
                    }
                case 33:
                    var1 = var1._members;
                    var3 = var1._membersMap;
                    var2 = var3.has;
                    var1 = arg0;
                    var0 = var2.bind(var3)(var1);
                case 58:
                    return var0;
            }
        };
        var0.value = var5;
        var1[13] = var0;
        var0 = {};
        var5 = 'isMemberIncludedInSearchResults';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun40287: for (var _fun40287_ip = 0;;) switch (_fun40287_ip) {
                case 0:
                    var2 = arg0;
                    var0 = this;
                    var3 = var0._members;
                    var1 = null;
                    if (!(var1 != var3)) {
                        _fun40287_ip = 208;
                        continue _fun40287
                    }
                case 21:
                    var3 = var0._search;
                    if (!(var1 != var3)) {
                        _fun40287_ip = 208;
                        continue _fun40287
                    }
                case 34:
                    var3 = var0._pagination;
                    if (!(var1 != var3)) {
                        _fun40287_ip = 208;
                        continue _fun40287
                    }
                case 47:
                    var3 = var0._initialized;
                    if (!var3) {
                        _fun40287_ip = 208;
                        continue _fun40287
                    }
                case 59:
                    var3 = var0._search;
                    var3 = var3.hasDefaultQuery;
                    if (var3) {
                        _fun40287_ip = 187;
                        continue _fun40287
                    }
                case 74:
                    var4 = var0._members;
                    var3 = var4.getMemberByUserId;
                    var4 = var3.bind(var4)(var2);
                    if (!(var1 != var4)) {
                        _fun40287_ip = 108;
                        continue _fun40287
                    }
                case 95:
                    var3 = var4.isIncludedInSearchResults;
                    if (!var3) {
                        _fun40287_ip = 164;
                        continue _fun40287
                    }
                case 104:
                    var3 = true;
                    return var3;
                case 108:
                    var6 = _closure1_slot5;
                    var5 = var6.getTrueMember;
                    var3 = var0.guildId;
                    var6 = var5.bind(var6)(var3, var2);
                    if (!(var1 != var6)) {
                        _fun40287_ip = 183;
                        continue _fun40287
                    }
                case 136:
                    var5 = var0._members;
                    var3 = var5.enhanceNewMember;
                    var1 = var0.getSearchState;
                    var1 = var1.bind(var0)();
                    var4 = var3.bind(var5)(var6, var1);
                case 164:
                    var3 = var0._search;
                    var1 = var3.isMemberIncludedInSearchResults;
                    var1 = var1.bind(var3)(var4);
                    return var1;
                case 183:
                    var1 = false;
                    return var1;
                case 187:
                    var1 = var0._pagination;
                    var0 = var1.isMemberInAnyChunk;
                    var0 = var0.bind(var1)(var2);
                    return var0;
                case 208:
                    var0 = false;
                    return var0;
            }
        };
        var0.value = var5;
        var1[14] = var0;
        var0 = {};
        var5 = 'updateMember';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var4
            _fun40288: for (var _fun40288_ip = 0;;) switch (_fun40288_ip) {
                case 0:
                    var2 = this;
                    var1 = var2._members;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun40288_ip = 88;
                        continue _fun40288
                    }
                case 15:
                    var0 = var2._initialized;
                    if (!var0) {
                        _fun40288_ip = 88;
                        continue _fun40288
                    }
                case 24:
                    var3 = var2._rawUpdateMember;
                    var1 = arg0;
                    var0 = arg1;
                    var4 = var3.bind(var2)(var1, var0);
                    var3 = _closure1_slot2;
                    var1 = undefined;
                    var0 = 2;
                    var3 = var3.bind(var1)(var4, var0);
                    var0 = 0;
                    var1 = var3[var0];
                    var0 = 1;
                    var0 = var3[var0];
                    if (!var1) {
                        _fun40288_ip = 86;
                        continue _fun40288
                    }
                case 76:
                    var1 = var2.updatePaginationChunks;
                    var0 = var1.bind(var2)();
                case 86:
                    return var0;
                case 88:
                    var0 = false;
                    return var0;
            }
        };
        var0.value = var5;
        var1[15] = var0;
        var0 = {};
        var5 = 'updateClientMembers';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun40289: for (var _fun40289_ip = 0;;) switch (_fun40289_ip) {
                case 0:
                    var22 = arguments[1];
                    var21 = arguments[2];
                    var2 = this;
                    var20 = undefined;
                    if (!(var22 === var20)) {
                        _fun40289_ip = 17;
                        continue _fun40289
                    }
                case 15:
                    var22 = false;
                case 17:
                    if (!(var21 === var20)) {
                        _fun40289_ip = 23;
                        continue _fun40289
                    }
                case 21:
                    var21 = false;
                case 23:
                    var0 = var2._members;
                    var19 = null;
                    if (!(var19 != var0)) {
                        _fun40289_ip = 363;
                        continue _fun40289
                    }
                case 38:
                    var0 = var2._initialized;
                    if (!var0) {
                        _fun40289_ip = 363;
                        continue _fun40289
                    }
                case 50:
                    var1 = _closure1_slot8;
                    var0 = arg0;
                    var17 = var1.bind(var20)(var0);
                    var1 = var17.bind(var20)();
                    var3 = var1.done;
                    var7 = false;
                    var16 = 1;
                    var15 = 2;
                    var14 = 0;
                    var13 = 9;
                    var12 = 'isCurrentGuildMemberByTimestamp';
                    var11 = 'refreshTimestamp';
                    var10 = true;
                    var9 = 'isIncludedInSearchResults';
                    var8 = var1;
                    var6 = false;
                    var5 = undefined;
                    var4 = undefined;
                    var1 = false;
                    var0 = false;
                    if (var3) {
                        _fun40289_ip = 348;
                        continue _fun40289
                    }
                case 122:
                    var3 = var8.value;
                    var25 = var3.joinedAt;
                    var24 = var7;
                    var23 = var6;
                    if (!(var19 != var25)) {
                        _fun40289_ip = 318;
                        continue _fun40289
                    }
                case 146:
                    var27 = var3;
                    if (!var22) {
                        _fun40289_ip = 172;
                        continue _fun40289
                    }
                case 152:
                    var25 = {};
                    var31 = var25;
                    var30 = var3;
                    var26 = copyDataProperties(var31, var30);
                    var25[var9] = var10;
                    var27 = var25;
                case 172:
                    var25 = var27;
                    if (!var21) {
                        _fun40289_ip = 259;
                        continue _fun40289
                    }
                case 178:
                    var28 = _closure1_slot0;
                    var26 = _closure1_slot1;
                    var26 = var26[var13];
                    var29 = var28.bind(var20)(var26);
                    var28 = var29.getJoinedAtTimestamp;
                    var26 = var3.joinedAt;
                    var28 = var28.bind(var29)(var26);
                    var26 = {};
                    var31 = var26;
                    var30 = var27;
                    var27 = copyDataProperties(var31, var30);
                    var27 = var2._members;
                    var27 = var27.newMemberTimestamp;
                    var27 = var28 <= var27;
                    var26[var12] = var27;
                    var27 = var2.lastRefreshTimestamp;
                    var26[var11] = var27;
                    var25 = var26;
                case 259:
                    var26 = var2._rawUpdateMember;
                    var3 = var3.userId;
                    var26 = var26.bind(var2)(var3, var25);
                    var3 = _closure1_slot2;
                    var3 = var3.bind(var20)(var26, var15);
                    var27 = var3[var14];
                    if (var27) {
                        _fun40289_ip = 296;
                        continue _fun40289
                    }
                case 293:
                    var27 = var7;
                case 296:
                    var26 = var3[var16];
                    if (var26) {
                        _fun40289_ip = 306;
                        continue _fun40289
                    }
                case 303:
                    var26 = var6;
                case 306:
                    var23 = var26;
                    var24 = var27;
                    var5 = var25;
                    var4 = var3;
                case 318:
                    var25 = var17.bind(var20)();
                    var3 = var25.done;
                    var7 = var24;
                    var6 = var23;
                    var8 = var25;
                    var1 = var7;
                    var0 = var6;
                    if (!var3) {
                        _fun40289_ip = 122;
                        continue _fun40289
                    }
                case 348:
                    if (!var1) {
                        _fun40289_ip = 361;
                        continue _fun40289
                    }
                case 351:
                    var1 = var2.updatePaginationChunks;
                    var0 = var1.bind(var2)();
                case 361:
                    return var0;
                case 363:
                    var0 = false;
                    return var0;
            }
        };
        var0.value = var5;
        var1[16] = var0;
        var0 = {};
        var5 = 'updateServerMembers';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun40290: for (var _fun40290_ip = 0;;) switch (_fun40290_ip) {
                case 0:
                    var2 = this;
                    var0 = var2._members;
                    var14 = null;
                    if (!(var14 != var0)) {
                        _fun40290_ip = 235;
                        continue _fun40290
                    }
                case 18:
                    var0 = var2._initialized;
                    if (!var0) {
                        _fun40290_ip = 235;
                        continue _fun40290
                    }
                case 30:
                    var1 = _closure1_slot8;
                    var12 = undefined;
                    var0 = arg0;
                    var11 = var1.bind(var12)(var0);
                    var1 = var11.bind(var12)();
                    var3 = var1.done;
                    var6 = false;
                    var10 = 1;
                    var9 = 2;
                    var8 = 0;
                    var7 = var1;
                    var5 = false;
                    var4 = undefined;
                    var1 = false;
                    var0 = false;
                    if (var3) {
                        _fun40290_ip = 220;
                        continue _fun40290
                    }
                case 83:
                    var3 = var7.value;
                    var18 = _closure1_slot5;
                    var17 = var18.getTrueMember;
                    var16 = var2.guildId;
                    var15 = var3.user;
                    var15 = var15.id;
                    var18 = var17.bind(var18)(var16, var15);
                    var16 = var6;
                    var15 = var5;
                    if (!(var14 != var18)) {
                        _fun40290_ip = 190;
                        continue _fun40290
                    }
                case 129:
                    var17 = var2._rawUpdateMember;
                    var3 = var3.user;
                    var3 = var3.id;
                    var17 = var17.bind(var2)(var3, var18);
                    var3 = _closure1_slot2;
                    var3 = var3.bind(var12)(var17, var9);
                    var18 = var3[var8];
                    if (var18) {
                        _fun40290_ip = 171;
                        continue _fun40290
                    }
                case 168:
                    var18 = var6;
                case 171:
                    var17 = var3[var10];
                    if (var17) {
                        _fun40290_ip = 181;
                        continue _fun40290
                    }
                case 178:
                    var17 = var5;
                case 181:
                    var15 = var17;
                    var16 = var18;
                    var4 = var3;
                case 190:
                    var17 = var11.bind(var12)();
                    var3 = var17.done;
                    var6 = var16;
                    var5 = var15;
                    var7 = var17;
                    var1 = var6;
                    var0 = var5;
                    if (!var3) {
                        _fun40290_ip = 83;
                        continue _fun40290
                    }
                case 220:
                    if (!var1) {
                        _fun40290_ip = 233;
                        continue _fun40290
                    }
                case 223:
                    var1 = var2.updatePaginationChunks;
                    var0 = var1.bind(var2)();
                case 233:
                    return var0;
                case 235:
                    var0 = false;
                    return var0;
            }
        };
        var0.value = var5;
        var1[17] = var0;
        var0 = {};
        var5 = 'updateMembersByMemberIds';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun40291: for (var _fun40291_ip = 0;;) switch (_fun40291_ip) {
                case 0:
                    var4 = arg0;
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var3 = var2._members;
                    var1 = null;
                    if (!(var1 != var3)) {
                        _fun40291_ip = 67;
                        continue _fun40291
                    }
                case 24:
                    var1 = var2._initialized;
                    if (!var1) {
                        _fun40291_ip = 67;
                        continue _fun40291
                    }
                case 33:
                    var3 = var4.reduce;
                    var1 = function(arg0, arg1) { // Environment: var0
                        _fun40292: for (var _fun40292_ip = 0;;) switch (_fun40292_ip) {
                            case 0:
                                var0 = arg0;
                                var4 = _closure1_slot5;
                                var3 = var4.getTrueMember;
                                var1 = _closure3_slot0;
                                var2 = var1.guildId;
                                var1 = arg1;
                                var2 = var3.bind(var4)(var2, var1);
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun40292_ip = 53;
                                    continue _fun40292
                                }
                            case 43:
                                var1 = var0.push;
                                var1 = var1.bind(var0)(var2);
                            case 53:
                                return var0;
                        }
                    };
                    var0 = new Array(0);
                    var1 = var3.bind(var4)(var1, var0);
                    var0 = var2.updateClientMembers;
                    var0 = var0.bind(var2)(var1);
                    return var0;
                case 67:
                    var0 = false;
                    return var0;
            }
        };
        var0.value = var5;
        var1[18] = var0;
        var0 = {};
        var5 = 'updateMembersSort';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            var1 = this;
            var _closure3_slot0 = var1;
            var1 = arg0;
            var _closure3_slot1 = var1;
            var1 = global;
            var2 = var1.Promise;
            var1 = var2.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var2
                }
            });
            var3 = function(arg0) { // Environment: var0
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var4 = 10;
                var1 = var10[var4];
                var0 = undefined;
                var5 = var9.bind(var0)(var1);
                var3 = var5.cloneDeep;
                var8 = _closure3_slot0;
                var6 = var8.getMembersByIndex;
                var1 = 6;
                var2 = var10[var1];
                var2 = var9.bind(var0)(var2);
                var2 = var2.MemberSafetySecondaryIndex;
                var2 = var2.CURRENT_GUILD_MEMBER;
                var2 = var6.bind(var8)(var2);
                var6 = 0;
                var2 = var2[var6];
                var12 = var3.bind(var5)(var2);
                var3 = new Array(0);
                var13 = var3;
                var11 = 0;
                var11 = arraySpread(var13, var12, var11);
                var4 = var10[var4];
                var5 = var9.bind(var0)(var4);
                var4 = var5.cloneDeep;
                var7 = var8.getMembersByIndex;
                var1 = var10[var1];
                var1 = var9.bind(var0)(var1);
                var1 = var1.MemberSafetySecondaryIndex;
                var1 = var1.NEW_GUILD_MEMBER;
                var1 = var7.bind(var8)(var1);
                var1 = var1[var6];
                var12 = var4.bind(var5)(var1);
                var13 = var3;
                var1 = arraySpread(var13, var12, var11);
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun40295: for (var _fun40295_ip = 0;;) switch (_fun40295_ip) {
                        case 0:
                            var4 = arg0;
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var0 = 11;
                            var1 = var1[var0];
                            var0 = undefined;
                            var5 = var2.bind(var0)(var1);
                            var3 = var5.getSortValueForMember;
                            var1 = _closure3_slot1;
                            var6 = var3.bind(var5)(var4, var1);
                            var1 = _closure3_slot0;
                            var7 = var1._search;
                            var1 = null;
                            var5 = var1 == var7;
                            var3 = undefined;
                            if (var5) {
                                _fun40295_ip = 79;
                                continue _fun40295
                            }
                        case 68:
                            var5 = var7.isMemberIncludedInSearchResults;
                            var3 = var5.bind(var7)(var4);
                        case 79:
                            var5 = var1 != var3;
                            if (!var5) {
                                _fun40295_ip = 89;
                                continue _fun40295
                            }
                        case 86:
                            var5 = var3;
                        case 89:
                            var2 = _closure3_slot0;
                            var3 = var2._members;
                            if (!(var1 != var3)) {
                                _fun40295_ip = 127;
                                continue _fun40295
                            }
                        case 103:
                            var2 = var3.updateMember;
                            var1 = {};
                            var1.sort = var6;
                            var1.isIncludedInSearchResults = var5;
                            var1 = var2.bind(var3)(var4, var1);
                        case 127:
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                var1 = arg0;
                var1 = var1.bind(var0)();
                return var0;
            };
            var4 = var1;
            var0 = new var4[var2](var3, var2);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var0.value = var5;
        var1[19] = var0;
        var0 = {};
        var5 = 'sortMembersBySelectedSort';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun40296: for (var _fun40296_ip = 0;;) switch (_fun40296_ip) {
                case 0:
                    var3 = arg0;
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var1 = var2._search;
                    var4 = null;
                    var1 = var4 != var1;
                    if (!var1) {
                        _fun40296_ip = 37;
                        continue _fun40296
                    }
                case 27:
                    var5 = var2._members;
                    var1 = var4 != var5;
                case 37:
                    if (!var1) {
                        _fun40296_ip = 46;
                        continue _fun40296
                    }
                case 40:
                    var1 = var2._initialized;
                case 46:
                    if (!var1) {
                        _fun40296_ip = 53;
                        continue _fun40296
                    }
                case 49:
                    var1 = var4 != var3;
                case 53:
                    if (!var1) {
                        _fun40296_ip = 105;
                        continue _fun40296
                    }
                case 56:
                    var5 = var2.updatePaginationState;
                    var4 = {};
                    var4.sort = var3;
                    var1 = true;
                    var1 = var5.bind(var2)(var4, var1);
                    var1 = var2.updateMembersSort;
                    var2 = var1.bind(var2)(var3);
                    var1 = var2.then;
                    var0 = function() { // Environment: var0
                        var1 = _closure3_slot0;
                        var0 = var1.updatePaginationChunks;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                case 105:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[20] = var0;
        var0 = {};
        var5 = 'updateSearchedMembersByMemberIds';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun40298: for (var _fun40298_ip = 0;;) switch (_fun40298_ip) {
                case 0:
                    var3 = arg0;
                    var4 = this;
                    var _closure3_slot0 = var4;
                    var1 = var4._search;
                    var2 = null;
                    if (!(var2 != var1)) {
                        _fun40298_ip = 105;
                        continue _fun40298
                    }
                case 24:
                    var1 = var4._members;
                    if (!(var2 != var1)) {
                        _fun40298_ip = 105;
                        continue _fun40298
                    }
                case 34:
                    var1 = var4._initialized;
                    if (!var1) {
                        _fun40298_ip = 105;
                        continue _fun40298
                    }
                case 43:
                    var2 = var3.reduce;
                    var1 = function(arg0, arg1) { // Environment: var0
                        _fun40299: for (var _fun40299_ip = 0;;) switch (_fun40299_ip) {
                            case 0:
                                var0 = arg0;
                                var4 = _closure1_slot5;
                                var3 = var4.getTrueMember;
                                var1 = _closure3_slot0;
                                var2 = var1.guildId;
                                var1 = arg1;
                                var2 = var3.bind(var4)(var2, var1);
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun40299_ip = 53;
                                    continue _fun40299
                                }
                            case 43:
                                var1 = var0.push;
                                var1 = var1.bind(var0)(var2);
                            case 53:
                                return var0;
                        }
                    };
                    var0 = new Array(0);
                    var3 = var2.bind(var3)(var1, var0);
                    var2 = var4.updateClientMembers;
                    var0 = var4._search;
                    var1 = var0.requiresUsernameMatch;
                    var5 = var4.lastRefreshTimestamp;
                    var0 = 0;
                    var0 = var0 !== var5;
                    var0 = var2.bind(var4)(var3, var1, var0);
                    return var0;
                case 105:
                    var0 = false;
                    return var0;
            }
        };
        var0.value = var5;
        var1[21] = var0;
        var0 = {};
        var5 = 'rebuildAllMembers';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun40300: for (var _fun40300_ip = 0;;) switch (_fun40300_ip) {
                case 0:
                    var2 = this;
                    var1 = var2._members;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun40300_ip = 60;
                        continue _fun40300
                    }
                case 15:
                    var0 = var2._initialized;
                    if (!var0) {
                        _fun40300_ip = 60;
                        continue _fun40300
                    }
                case 24:
                    var3 = _closure1_slot5;
                    var1 = var3.getMembers;
                    var0 = var2.guildId;
                    var1 = var1.bind(var3)(var0);
                    var0 = var2.updateClientMembers;
                    var0 = var0.bind(var2)(var1);
                    return var0;
                case 60:
                    var0 = false;
                    return var0;
            }
        };
        var0.value = var5;
        var1[22] = var0;
        var0 = {};
        var5 = '_scheduleRefresh';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun40301: for (var _fun40301_ip = 0;;) switch (_fun40301_ip) {
                case 0:
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var0 = arg0;
                    var2.lastRefreshTimestamp = var0;
                    var0 = global;
                    var4 = var0.Date;
                    var3 = var4.now;
                    var3 = var3.bind(var4)();
                    var2.lastCursorTimestamp = var3;
                    var4 = var2._lastRefreshTimer;
                    var3 = null;
                    if (!(var3 != var4)) {
                        _fun40301_ip = 72;
                        continue _fun40301
                    }
                case 53:
                    var5 = var0.clearTimeout;
                    var4 = var2._lastRefreshTimer;
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                case 72:
                    var4 = var0.setTimeout;
                    var3 = _closure1_slot7;
                    var0 = undefined;
                    var1 = function() { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = null;
                        var1._lastRefreshTimer = var0;
                        var0 = 0;
                        var1.lastRefreshTimestamp = var0;
                        var0 = undefined;
                        return var0;
                    };
                    var1 = var4.bind(var0)(var1, var3);
                    var2._lastRefreshTimer = var1;
                    return var0;
            }
        };
        var0.value = var5;
        var1[23] = var0;
        var0 = {};
        var5 = 'refreshNewMembersAndSearchResults';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun40303: for (var _fun40303_ip = 0;;) switch (_fun40303_ip) {
                case 0:
                    var2 = this;
                    var0 = var2._search;
                    var1 = null;
                    if (!(var1 != var0)) {
                        _fun40303_ip = 376;
                        continue _fun40303
                    }
                case 18:
                    var0 = var2._members;
                    if (!(var1 != var0)) {
                        _fun40303_ip = 376;
                        continue _fun40303
                    }
                case 31:
                    var0 = var2._initialized;
                    if (!var0) {
                        _fun40303_ip = 376;
                        continue _fun40303
                    }
                case 43:
                    var0 = global;
                    var1 = var0.Number;
                    var3 = var0.Date;
                    var0 = var3.now;
                    var0 = var0.bind(var3)();
                    var8 = undefined;
                    var10 = var1.bind(var8)(var0);
                    var0 = var2._scheduleRefresh;
                    var0 = var0.bind(var2)(var10);
                    var1 = _closure1_slot8;
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var0 = 10;
                    var0 = var11[var0];
                    var5 = var9.bind(var8)(var0);
                    var3 = var5.cloneDeep;
                    var7 = var2._members;
                    var6 = var7.values;
                    var0 = 6;
                    var0 = var11[var0];
                    var0 = var9.bind(var8)(var0);
                    var0 = var0.MemberSafetySecondaryIndex;
                    var0 = var0.NEW_GUILD_MEMBER;
                    var0 = var6.bind(var7)(var0);
                    var0 = var3.bind(var5)(var0);
                    var9 = var1.bind(var8)(var0);
                    var1 = var9.bind(var8)();
                    var5 = var1.done;
                    var3 = false;
                    var0 = true;
                    var7 = var1;
                    var6 = false;
                    var1 = false;
                    if (var5) {
                        _fun40303_ip = 280;
                        continue _fun40303
                    }
                case 192:
                    var13 = var7.value;
                    var12 = var2._members;
                    var11 = var12.updateMember;
                    var5 = {};
                    var5.isCurrentGuildMemberByTimestamp = var0;
                    var5.refreshTimestamp = var10;
                    var16 = _closure1_slot6;
                    var15 = var16.getUser;
                    var14 = var13.userId;
                    var14 = var15.bind(var16)(var14);
                    var5.user = var14;
                    var11 = var11.bind(var12)(var13, var5);
                    if (var11) {
                        _fun40303_ip = 259;
                        continue _fun40303
                    }
                case 256:
                    var11 = var6;
                case 259:
                    var12 = var9.bind(var8)();
                    var5 = var12.done;
                    var6 = var11;
                    var7 = var12;
                    var1 = var6;
                    if (!var5) {
                        _fun40303_ip = 192;
                        continue _fun40303
                    }
                case 280:
                    var6 = var2._members;
                    var5 = var6.resetNewMemberTimestamp;
                    var5 = var5.bind(var6)();
                    var5 = var2.resetSearchState;
                    var5 = var5.bind(var2)();
                    if (!var5) {
                        _fun40303_ip = 311;
                        continue _fun40303
                    }
                case 309:
                    var1 = false;
                case 311:
                    var7 = var2.updatePaginationState;
                    var6 = {};
                    var5 = 1;
                    var6.currentPage = var5;
                    var7 = var7.bind(var2)(var6, var3);
                    var6 = _closure1_slot2;
                    var4 = 2;
                    var4 = var6.bind(var8)(var7, var4);
                    var6 = 0;
                    var6 = var4[var6];
                    var4 = var4[var5];
                    if (!var4) {
                        _fun40303_ip = 361;
                        continue _fun40303
                    }
                case 359:
                    var1 = false;
                case 361:
                    if (!var1) {
                        _fun40303_ip = 374;
                        continue _fun40303
                    }
                case 364:
                    var1 = var2.updatePaginationChunks;
                    var1 = var1.bind(var2)();
                case 374:
                    return var0;
                case 376:
                    var0 = false;
                    return var0;
            }
        };
        var0.value = var5;
        var1[24] = var0;
        var0 = {};
        var5 = 'getNewMemberTimestamp';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun40304: for (var _fun40304_ip = 0;;) switch (_fun40304_ip) {
                case 0:
                    var1 = this;
                    var2 = var1._members;
                    var0 = null;
                    var2 = var0 != var2;
                    var0 = 0;
                    if (!var2) {
                        _fun40304_ip = 43;
                        continue _fun40304
                    }
                case 20:
                    var2 = var1._initialized;
                    var0 = 0;
                    if (!var2) {
                        _fun40304_ip = 43;
                        continue _fun40304
                    }
                case 31:
                    var1 = var1._members;
                    var0 = var1.newMemberTimestamp;
                case 43:
                    return var0;
            }
        };
        var0.value = var5;
        var1[25] = var0;
        var0 = {};
        var5 = 'updateSearchState';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun40305: for (var _fun40305_ip = 0;;) switch (_fun40305_ip) {
                case 0:
                    var3 = arg0;
                    var1 = this;
                    var0 = var1._members;
                    var2 = null;
                    if (!(var2 != var0)) {
                        _fun40305_ip = 468;
                        continue _fun40305
                    }
                case 21:
                    var0 = var1._search;
                    if (!(var2 != var0)) {
                        _fun40305_ip = 468;
                        continue _fun40305
                    }
                case 34:
                    var0 = var1._initialized;
                    if (!var0) {
                        _fun40305_ip = 468;
                        continue _fun40305
                    }
                case 46:
                    var0 = global;
                    var4 = var0.Boolean;
                    var0 = var1._search;
                    var0 = var0.hasDefaultQuery;
                    var10 = undefined;
                    var5 = var4.bind(var10)(var0);
                    var0 = var3.selectedSort;
                    var0 = var2 != var0;
                    if (!var0) {
                        _fun40305_ip = 118;
                        continue _fun40305
                    }
                case 86:
                    var4 = var3.selectedSort;
                    var6 = var1._search;
                    var2 = var6.getSearchState;
                    var2 = var2.bind(var6)();
                    var2 = var2.selectedSort;
                    var0 = var4 !== var2;
                case 118:
                    if (!var0) {
                        _fun40305_ip = 140;
                        continue _fun40305
                    }
                case 121:
                    var2 = var1.sortMembersBySelectedSort;
                    var0 = var3.selectedSort;
                    var0 = var2.bind(var1)(var0);
                case 140:
                    var2 = var1._search;
                    var0 = var2.updateSearchState;
                    var0 = var0.bind(var2)(var3);
                    var2 = var1._search;
                    var2 = var2.hasDefaultQuery;
                    if (!var2) {
                        _fun40305_ip = 178;
                        continue _fun40305
                    }
                case 172:
                    if (var5) {
                        _fun40305_ip = 456;
                        continue _fun40305
                    }
                case 178:
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var3 = 10;
                    var3 = var11[var3];
                    var6 = var9.bind(var10)(var3);
                    var4 = var6.cloneDeep;
                    var8 = var1._members;
                    var7 = var8.values;
                    var3 = 6;
                    var3 = var11[var3];
                    var3 = var9.bind(var10)(var3);
                    var3 = var3.MemberSafetySecondaryIndex;
                    var3 = var3.CURRENT_GUILD_MEMBER;
                    var3 = var7.bind(var8)(var3);
                    var4 = var4.bind(var6)(var3);
                    var3 = var1._search;
                    var3 = var3.hasDefaultQuery;
                    var6 = var5 !== var3;
                    var2 = _closure1_slot8;
                    var9 = var2.bind(var10)(var4);
                    var5 = var9.bind(var10)();
                    var4 = var5.done;
                    var8 = var0;
                    var7 = var5;
                    var5 = undefined;
                    var0 = var8;
                    var3 = var6;
                    if (var4) {
                        _fun40305_ip = 418;
                        continue _fun40305
                    }
                case 303:
                    var16 = var7.value;
                    var4 = var16.isCurrentGuildMemberByTimestamp;
                    var12 = var8;
                    var11 = var6;
                    if (!var4) {
                        _fun40305_ip = 391;
                        continue _fun40305
                    }
                case 323:
                    var13 = var1._search;
                    var4 = var13.isMemberIncludedInSearchResults;
                    var4 = var4.bind(var13)(var16);
                    var13 = var16.isIncludedInSearchResults;
                    var12 = var8;
                    var11 = var6;
                    var5 = var4;
                    if (!(var4 !== var13)) {
                        _fun40305_ip = 391;
                        continue _fun40305
                    }
                case 359:
                    var15 = var1._members;
                    var14 = var15.updateMember;
                    var13 = {};
                    var13.isIncludedInSearchResults = var4;
                    var13 = var14.bind(var15)(var16, var13);
                    var12 = true;
                    var11 = true;
                    var5 = var4;
                case 391:
                    var13 = var9.bind(var10)();
                    var4 = var13.done;
                    var8 = var12;
                    var6 = var11;
                    var7 = var13;
                    var0 = var8;
                    var3 = var6;
                    if (!var4) {
                        _fun40305_ip = 303;
                        continue _fun40305
                    }
                case 418:
                    if (!var3) {
                        _fun40305_ip = 454;
                        continue _fun40305
                    }
                case 421:
                    var3 = var1.updatePaginationChunks;
                    var3 = var3.bind(var1)();
                    var4 = var1.updatePaginationState;
                    var3 = {};
                    var5 = 1;
                    var3.currentPage = var5;
                    var3 = var4.bind(var1)(var3);
                    var0 = true;
                case 454:
                    return var0;
                case 456:
                    var0 = var1.updatePaginationChunks;
                    var0 = var0.bind(var1)();
                    return var0;
                case 468:
                    var0 = false;
                    return var0;
            }
        };
        var0.value = var5;
        var1[26] = var0;
        var0 = {};
        var5 = 'getSearchState';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun40306: for (var _fun40306_ip = 0;;) switch (_fun40306_ip) {
                case 0:
                    var1 = this;
                    var2 = var1._search;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun40306_ip = 24;
                        continue _fun40306
                    }
                case 15:
                    var0 = var1._initialized;
                    if (var0) {
                        _fun40306_ip = 61;
                        continue _fun40306
                    }
                case 24:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 7;
                    var2 = var2[var0];
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var0 = var2.getDefaultSearchState;
                    var0 = var0.bind(var2)();
                    _fun40306_ip = 77;
                    continue _fun40306;
                case 61:
                    var2 = var1._search;
                    var1 = var2.getSearchState;
                    var0 = var1.bind(var2)();
                case 77:
                    return var0;
            }
        };
        var0.value = var5;
        var1[27] = var0;
        var0 = {};
        var5 = 'hasDefaultSearchState';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun40307: for (var _fun40307_ip = 0;;) switch (_fun40307_ip) {
                case 0:
                    var1 = this;
                    var2 = var1._search;
                    var0 = null;
                    var0 = var0 == var2;
                    if (var0) {
                        _fun40307_ip = 27;
                        continue _fun40307
                    }
                case 18:
                    var2 = var1._initialized;
                    var0 = !var2;
                case 27:
                    if (var0) {
                        _fun40307_ip = 42;
                        continue _fun40307
                    }
                case 30:
                    var1 = var1._search;
                    var0 = var1.hasDefaultQuery;
                case 42:
                    return var0;
            }
        };
        var0.value = var5;
        var1[28] = var0;
        var0 = {};
        var5 = 'resetSearchState';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun40308: for (var _fun40308_ip = 0;;) switch (_fun40308_ip) {
                case 0:
                    var3 = this;
                    var1 = var3._search;
                    var0 = null;
                    var1 = var0 == var1;
                    if (var1) {
                        _fun40308_ip = 27;
                        continue _fun40308
                    }
                case 18:
                    var0 = var3._initialized;
                    var1 = !var0;
                case 27:
                    var0 = !var1;
                    if (var1) {
                        _fun40308_ip = 71;
                        continue _fun40308
                    }
                case 33:
                    var2 = var3._search;
                    var1 = var2.resetSearchState;
                    var1 = var1.bind(var2)();
                    var2 = !var1;
                    var1 = !var2;
                    if (var2) {
                        _fun40308_ip = 68;
                        continue _fun40308
                    }
                case 58:
                    var2 = var3.updatePaginationChunks;
                    var1 = var2.bind(var3)();
                case 68:
                    var0 = var1;
                case 71:
                    return var0;
            }
        };
        var0.value = var5;
        var1[29] = var0;
        var0 = {};
        var5 = 'getTotalResultsCount';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun40309: for (var _fun40309_ip = 0;;) switch (_fun40309_ip) {
                case 0:
                    var2 = this;
                    var0 = var2._search;
                    var3 = null;
                    var1 = var3 != var0;
                    var0 = 0;
                    if (!var1) {
                        _fun40309_ip = 104;
                        continue _fun40309
                    }
                case 20:
                    var1 = var2._pagination;
                    var1 = var3 != var1;
                    var0 = 0;
                    if (!var1) {
                        _fun40309_ip = 104;
                        continue _fun40309
                    }
                case 35:
                    var1 = var2._initialized;
                    var0 = 0;
                    if (!var1) {
                        _fun40309_ip = 104;
                        continue _fun40309
                    }
                case 46:
                    var1 = var2._search;
                    var1 = var1.hasDefaultQuery;
                    if (!var1) {
                        _fun40309_ip = 71;
                        continue _fun40309
                    }
                case 61:
                    var1 = var2._defaultSearchTotalResultsCount;
                    if (!(var3 == var1)) {
                        _fun40309_ip = 95;
                        continue _fun40309
                    }
                case 71:
                    var3 = var2._pagination;
                    var1 = var3.getPaginationState;
                    var1 = var1.bind(var3)();
                    var1 = var1.totalResultsCount;
                    _fun40309_ip = 101;
                    continue _fun40309;
                case 95:
                    var1 = var2._defaultSearchTotalResultsCount;
                case 101:
                    var0 = var1;
                case 104:
                    return var0;
            }
        };
        var0.value = var5;
        var1[30] = var0;
        var0 = {};
        var5 = 'updatePaginationState';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun40310: for (var _fun40310_ip = 0;;) switch (_fun40310_ip) {
                case 0:
                    var3 = arg0;
                    var2 = arguments[1];
                    var1 = this;
                    var0 = undefined;
                    if (!(var2 === var0)) {
                        _fun40310_ip = 17;
                        continue _fun40310
                    }
                case 15:
                    var2 = true;
                case 17:
                    var0 = var1._search;
                    var5 = null;
                    if (!(var5 != var0)) {
                        _fun40310_ip = 48;
                        continue _fun40310
                    }
                case 29:
                    var0 = var1._pagination;
                    if (!(var5 != var0)) {
                        _fun40310_ip = 48;
                        continue _fun40310
                    }
                case 39:
                    var0 = var1._initialized;
                    if (var0) {
                        _fun40310_ip = 64;
                        continue _fun40310
                    }
                case 48:
                    var0 = new Array(2);
                    var4 = false;
                    var0[0] = var4;
                    var0[1] = var4;
                    _fun40310_ip = 132;
                    continue _fun40310;
                case 64:
                    if (!var2) {
                        _fun40310_ip = 75;
                        continue _fun40310
                    }
                case 67:
                    var2 = 0;
                    var1.lastRefreshTimestamp = var2;
                case 75:
                    var2 = var1._search;
                    var2 = var2.hasDefaultQuery;
                    if (!var2) {
                        _fun40310_ip = 100;
                        continue _fun40310
                    }
                case 90:
                    var4 = var3.totalResultsCount;
                    var2 = var5 != var4;
                case 100:
                    if (!var2) {
                        _fun40310_ip = 115;
                        continue _fun40310
                    }
                case 103:
                    var2 = var3.totalResultsCount;
                    var1._defaultSearchTotalResultsCount = var2;
                case 115:
                    var2 = var1._pagination;
                    var1 = var2.updatePaginationState;
                    var0 = var1.bind(var2)(var3);
                case 132:
                    return var0;
            }
        };
        var0.value = var5;
        var1[31] = var0;
        var0 = {};
        var5 = 'clearPaginationState';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun40311: for (var _fun40311_ip = 0;;) switch (_fun40311_ip) {
                case 0:
                    var0 = this;
                    var1 = var0._pagination;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun40311_ip = 25;
                        continue _fun40311
                    }
                case 15:
                    var0 = var1.reset;
                    var0 = var0.bind(var1)();
                case 25:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[32] = var0;
        var0 = {};
        var5 = 'getPaginationState';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun40312: for (var _fun40312_ip = 0;;) switch (_fun40312_ip) {
                case 0:
                    var1 = this;
                    var2 = var1._pagination;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun40312_ip = 24;
                        continue _fun40312
                    }
                case 15:
                    var0 = var1._initialized;
                    if (var0) {
                        _fun40312_ip = 61;
                        continue _fun40312
                    }
                case 24:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 8;
                    var2 = var2[var0];
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var0 = var2.createDefaultMemberSafetyPaginationState;
                    var0 = var0.bind(var2)();
                    _fun40312_ip = 77;
                    continue _fun40312;
                case 61:
                    var2 = var1._pagination;
                    var1 = var2.getPaginationState;
                    var0 = var1.bind(var2)();
                case 77:
                    return var0;
            }
        };
        var0.value = var5;
        var1[33] = var0;
        var0 = {};
        var5 = 'getPaginatedMembers';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun40313: for (var _fun40313_ip = 0;;) switch (_fun40313_ip) {
                case 0:
                    var2 = this;
                    var1 = var2._pagination;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun40313_ip = 24;
                        continue _fun40313
                    }
                case 15:
                    var0 = var2._initialized;
                    if (var0) {
                        _fun40313_ip = 42;
                        continue _fun40313
                    }
                case 24:
                    var0 = new Array(2);
                    var1 = {};
                    var0[0] = var1;
                    var1 = 0;
                    var0[1] = var1;
                    _fun40313_ip = 83;
                    continue _fun40313;
                case 42:
                    var1 = var2._pagination;
                    var3 = var1.paginatedMembers;
                    var1 = new Array(2);
                    var1[0] = var3;
                    var2 = var2._pagination;
                    var2 = var2.version;
                    var1[1] = var2;
                    var0 = var1;
                case 83:
                    return var0;
            }
        };
        var0.value = var5;
        var1[34] = var0;
        var0 = {};
        var5 = 'updatePaginationToken';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun40314: for (var _fun40314_ip = 0;;) switch (_fun40314_ip) {
                case 0:
                    var1 = this;
                    var2 = var1._pagination;
                    var0 = null;
                    var2 = var0 == var2;
                    if (var2) {
                        _fun40314_ip = 27;
                        continue _fun40314
                    }
                case 18:
                    var0 = var1._initialized;
                    var2 = !var0;
                case 27:
                    var0 = !var2;
                    if (var2) {
                        _fun40314_ip = 53;
                        continue _fun40314
                    }
                case 33:
                    var3 = var1._pagination;
                    var2 = var3.updatePaginationToken;
                    var1 = arg0;
                    var0 = var2.bind(var3)(var1);
                case 53:
                    return var0;
            }
        };
        var0.value = var5;
        var1[35] = var0;
        var0 = {};
        var5 = 'getElasticSearchPagination';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun40315: for (var _fun40315_ip = 0;;) switch (_fun40315_ip) {
                case 0:
                    var1 = this;
                    var0 = var1._pagination;
                    var3 = null;
                    var2 = var3 != var0;
                    var0 = null;
                    if (!var2) {
                        _fun40315_ip = 47;
                        continue _fun40315
                    }
                case 20:
                    var2 = var1._initialized;
                    var0 = null;
                    if (!var2) {
                        _fun40315_ip = 47;
                        continue _fun40315
                    }
                case 31:
                    var2 = var1._pagination;
                    var1 = var2.getElasticSearchPagination;
                    var0 = var1.bind(var2)();
                case 47:
                    return var0;
            }
        };
        var0.value = var5;
        var1[36] = var0;
        var0 = {};
        var5 = 'removeRoleFromSearchState';
        var0.key = var5;
        var4 = function(arg0) { // Original name: value, environment: var4
            var2 = this;
            var0 = global;
            var3 = var0.Set;
            var0 = var2.getSearchState;
            var0 = var0.bind(var2)();
            var4 = var0.selectedRoleIds;
            var1 = var3.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var3
                }
            });
            var5 = var1;
            var0 = new var5[var3](var4, var3);
            var3 = var0 instanceof Object ? var0 : var1;
            var1 = var3.delete;
            var0 = arg0;
            var0 = var1.bind(var3)(var0);
            var1 = var2.updateSearchState;
            var0 = {};
            var0.selectedRoleIds = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var4;
        var1[37] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_mod_dash_member_safety/GuildMemberSafetyPageStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.GuildMemberSafetyPageStore = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 1672, 1613, 667, 4345, 4499, 4505, 4347, 22, 4349, 2]);