// modules/relationships/GuildFriendshipStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = function() {
        _fun95756: for (var _fun95756_ip = 0;;) switch (_fun95756_ip) {
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
                _fun95756_ip = 76;
                continue _fun95756;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot10 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function arg0() {
        _fun95759: for (var _fun95759_ip = 0;;) switch (_fun95759_ip) {
            case 0:
                var2 = _closure1_slot8;
                var0 = arg0;
                var3 = var2[var0];
                var2 = null;
                var4 = var2 == var3;
                var0 = undefined;
                if (var4) {
                    _fun95759_ip = 31;
                    continue _fun95759
                }
            case 25:
                var0 = var3.fetchState;
            case 31:
                if (!(var2 == var0)) {
                    _fun95759_ip = 45;
                    continue _fun95759
                }
            case 35:
                var1 = _closure1_slot7;
                var0 = var1.NOT_FETCHED;
            case 45:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var7 = function() {
        var0 = {};
        _closure1_slot8 = var0;
        var0 = undefined;
        return var0;
    };
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var1);
    var1 = 0;
    var6 = var4[var1];
    var0 = undefined;
    var6 = var5.bind(var0)(var6);
    var _closure1_slot2 = var6;
    var10 = 1;
    var6 = var4[var10];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var9 = 2;
    var6 = var4[var9];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 3;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 4;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = {};
    var6.NOT_FETCHED = var1;
    var8 = 'NOT_FETCHED';
    var6[var1] = var8;
    var6.FETCHING = var10;
    var8 = 'FETCHING';
    var6[var10] = var8;
    var6.FETCHED = var9;
    var8 = 'FETCHED';
    var6[var9] = var8;
    var _closure1_slot7 = var6;
    var6 = {};
    var _closure1_slot8 = var6;
    var _closure1_slot9 = var1;
    var1 = 6;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun95762: for (var _fun95762_ip = 0;;) switch (_fun95762_ip) {
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
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun95762_ip = 69;
                        continue _fun95762
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun95762_ip = 105;
                    continue _fun95762;
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
        var0 = 'isFetchingFriendsForGuild';
        var4.key = var0;
        var0 = function arg0() {
            var3 = _closure1_slot11;
            var2 = undefined;
            var1 = arg0;
            var1 = var3.bind(var2)(var1);
            var0 = _closure1_slot7;
            var0 = var0.FETCHING;
            var0 = var1 === var0;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'fetchFriendMembersIfNotFetched';
        var4.key = var6;
        var5 = function arg0, arg1() {
            _fun95764: for (var _fun95764_ip = 0;;) switch (_fun95764_ip) {
                case 0:
                    var5 = arg0;
                    var4 = arg1;
                    var2 = _closure1_slot11;
                    var0 = undefined;
                    var3 = var2.bind(var0)(var5);
                    var2 = _closure1_slot7;
                    var2 = var2.NOT_FETCHED;
                    if (!(var3 === var2)) {
                        _fun95764_ip = 116;
                        continue _fun95764
                    }
                case 34:
                    var3 = _closure1_slot8;
                    var2 = {
                        'fetchState': null,
                        'foundMembers': 0,
                        'notFoundMembers': 0
                    };
                    var6 = _closure1_slot7;
                    var6 = var6.FETCHING;
                    var2.fetchState = var6;
                    var3[var5] = var2;
                    var2 = var4.length;
                    _closure1_slot9 = var2;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 5;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.requestMembersById;
                    var1 = false;
                    var1 = var2.bind(var3)(var5, var4, var1);
                case 116:
                    return var0;
            }
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 7;
    var1 = var4[var1];
    var13 = var5.bind(var0)(var1);
    var1 = {};
    var1.CONNECTION_OPEN = var7;
    var1.LOGOUT = var7;
    var1.RELATIONSHIP_ADD = var7;
    var1.RELATIONSHIP_REMOVE = var7;
    var3 = function arg0() {
        _fun95765: for (var _fun95765_ip = 0;;) switch (_fun95765_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.chunks;
                var5 = 0;
                var6 = var0[var5];
                var3 = var6.guildId;
                var2 = _closure1_slot11;
                var0 = undefined;
                var4 = var2.bind(var0)(var3);
                var2 = _closure1_slot7;
                var2 = var2.FETCHING;
                if (!(var4 === var2)) {
                    _fun95765_ip = 208;
                    continue _fun95765
                }
            case 51:
                var2 = _closure1_slot8;
                var4 = var2[var3];
                var7 = var4.foundMembers;
                var2 = var6.members;
                var2 = var2.length;
                var2 = var7 + var2;
                var4.foundMembers = var2;
                var2 = _closure1_slot8;
                var4 = var2[var3];
                var2 = var4.notFoundMembers;
                var8 = var6.notFound;
                var7 = null;
                var9 = var7 == var8;
                var6 = undefined;
                if (var9) {
                    _fun95765_ip = 122;
                    continue _fun95765
                }
            case 117:
                var6 = var8.length;
            case 122:
                var7 = var7 != var6;
                var5 = 0;
                if (!var7) {
                    _fun95765_ip = 134;
                    continue _fun95765
                }
            case 131:
                var5 = var6;
            case 134:
                var2 = var2 + var5;
                var4.notFoundMembers = var2;
                var2 = _closure1_slot8;
                var2 = var2[var3];
                var4 = var2.foundMembers;
                var2 = _closure1_slot8;
                var2 = var2[var3];
                var2 = var2.notFoundMembers;
                var4 = var4 + var2;
                var2 = _closure1_slot9;
                if (!(var4 >= var2)) {
                    _fun95765_ip = 208;
                    continue _fun95765
                }
            case 184:
                var2 = _closure1_slot8;
                var2 = var2[var3];
                var1 = _closure1_slot7;
                var1 = var1.FETCHED;
                var2.fetchState = var1;
            case 208:
                return var0;
        }
    };
    var1.GUILD_MEMBERS_CHUNK_BATCH = var3;
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var14 = var3;
    var12 = var1;
    var1 = new var14[var6](var13, var12, var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 8;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/relationships/GuildFriendshipStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 4679, 566, 806, 2]);