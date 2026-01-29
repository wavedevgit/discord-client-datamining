// modules/guild_mod_dash_member_safety/GuildMemberSafetyPagination.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
    var4 = function() { // Original name: createDefaultMemberSafetyPaginationState, environment: var3
        var0 = {
            'pageSize': null,
            'currentPage': 1,
            'continuationToken': null,
            'sort': null,
            'elasticSearchCursor': null
        };
        var3 = _closure1_slot6;
        var2 = 0;
        var2 = var3[var2];
        var0.pageSize = var2;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var1 = var1.OrderBy;
        var1 = var1.ORDER_BY_UNSPECIFIED;
        var0.sort = var1;
        return var0;
    };
    var _closure1_slot8 = var4;
    var0 = global;
    var9 = var0.Object;
    var6 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var9)(var2, var0, var1);
    var0 = 0;
    var1 = var7[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var9 = 1;
    var1 = var7[var9];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var7[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var7[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var6 = [12, 25, 50, 100];
    var _closure1_slot6 = var6;
    var1 = {};
    var1.FORWARD = var9;
    var5 = 'FORWARD';
    var1[var9] = var5;
    var9 = -1;
    var1.BACKWARD = var9;
    var5 = 'BACKWARD';
    var1[var9] = var5;
    var _closure1_slot7 = var1;
    var1 = function() { // Environment: var3
        var3 = _closure1_slot4;
        var2 = function(arg0, arg1) { // Original name: GuildMemberSafetyPagination, environment: var4
            var2 = this;
            var _closure3_slot0 = var2;
            var5 = _closure1_slot3;
            var4 = _closure2_slot0;
            var0 = undefined;
            var4 = var5.bind(var0)(var2, var4);
            var3 = function(arg0, arg1, arg2) { // Environment: var3
                _fun40784: for (var _fun40784_ip = 0;;) switch (_fun40784_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = global;
                        var3 = var1.Math;
                        var2 = var3.floor;
                        var1 = _closure3_slot0;
                        var1 = var1._paginationState;
                        var4 = var1.pageSize;
                        var1 = arg2;
                        var1 = var1 / var4;
                        var2 = var2.bind(var3)(var1);
                        var1 = 1;
                        var1 = var2 + var1;
                        var3 = var0[var1];
                        var2 = null;
                        if (!(var2 == var3)) {
                            _fun40784_ip = 73;
                            continue _fun40784
                        }
                    case 65:
                        var2 = new Array(0);
                        var0[var1] = var2;
                    case 73:
                        var3 = var0[var1];
                        var2 = var3.push;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                }
            };
            var2._reduceMemberIdsToPaginationChunks = var3;
            var3 = arg0;
            var2.guildId = var3;
            var3 = _closure1_slot8;
            var3 = var3.bind(var0)();
            var2._paginationState = var3;
            var3 = 0;
            var2._version = var3;
            var5 = var2._initPaginationFromRawMembers;
            var4 = arg1;
            var5 = var5.bind(var2)(var4);
            var4 = _closure1_slot2;
            var1 = 2;
            var1 = var4.bind(var0)(var5, var1);
            var4 = var1[var3];
            var3 = 1;
            var1 = var1[var3];
            var2._sortedMemberIds = var4;
            var2._cachedPaginationChunks = var1;
            var1 = var2._version;
            var1 = var1 + var3;
            var2._version = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'reset';
        var0.key = var1;
        var1 = function() { // Original name: value, environment: var4
            var2 = this;
            var1 = _closure1_slot8;
            var0 = undefined;
            var1 = var1.bind(var0)();
            var2._paginationState = var1;
            var1 = new Array(0);
            var2._sortedMemberIds = var1;
            var1 = {};
            var2._cachedPaginationChunks = var1;
            var3 = var2._version;
            var1 = 1;
            var1 = var3 + var1;
            var2._version = var1;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(16);
        var1[0] = var0;
        var0 = {};
        var5 = 'isMemberOnCurrentPage';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun40786: for (var _fun40786_ip = 0;;) switch (_fun40786_ip) {
                case 0:
                    var0 = this;
                    var1 = var0._cachedPaginationChunks;
                    var0 = var0._paginationState;
                    var0 = var0.currentPage;
                    var2 = var1[var0];
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun40786_ip = 35;
                        continue _fun40786
                    }
                case 31:
                    var2 = new Array(0);
                case 35:
                    var1 = var2.includes;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'isMemberInAnyChunk';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            var0 = this;
            var2 = var0._sortedMemberIds;
            var1 = var2.includes;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = '_initPaginationFromRawMembers';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            var4 = arg0;
            var1 = this;
            var _closure3_slot0 = var1;
            var2 = new Array(0);
            var _closure3_slot1 = var2;
            var3 = var4.reduce;
            var1 = function(arg0, arg1, arg2) { // Environment: var0
                var1 = arg1;
                var6 = _closure3_slot0;
                var5 = var6._reduceMemberIdsToPaginationChunks;
                var4 = var1.userId;
                var3 = arg0;
                var0 = arg2;
                var0 = var5.bind(var6)(var3, var4, var0);
                var3 = _closure3_slot1;
                var2 = var3.push;
                var1 = var1.userId;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var0 = {};
            var1 = var3.bind(var4)(var1, var0);
            var0 = new Array(2);
            var0[0] = var2;
            var0[1] = var1;
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = '_buildPaginationFromMemberIds';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            var3 = arg0;
            var2 = var3.reduce;
            var0 = this;
            var1 = var0._reduceMemberIdsToPaginationChunks;
            var0 = {};
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = '_rebuildPaginationChunksFromStoredMembers';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var1 = this;
            var2 = var1._buildPaginationFromMemberIds;
            var0 = var1._sortedMemberIds;
            var0 = var2.bind(var1)(var0);
            var1._cachedPaginationChunks = var0;
            var2 = var1._version;
            var0 = 1;
            var0 = var2 + var0;
            var1._version = var0;
            var0 = true;
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'getPaginationState';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var0 = this;
            var0 = var0._paginationState;
            return var0;
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'updatePaginationToken';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun40793: for (var _fun40793_ip = 0;;) switch (_fun40793_ip) {
                case 0:
                    var4 = arg0;
                    var2 = this;
                    var0 = var2._paginationState;
                    var0 = var0.continuationToken;
                    var0 = var4 !== var0;
                    if (!var0) {
                        _fun40793_ip = 57;
                        continue _fun40793
                    }
                case 25:
                    var1 = {};
                    var5 = var2._paginationState;
                    var6 = var1;
                    var3 = copyDataProperties(var6, var5);
                    var3 = 'continuationToken';
                    var1[var3] = var4;
                    var2._paginationState = var1;
                    var0 = true;
                case 57:
                    return var0;
            }
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = '_calculateNewPageFromPageSizeChange';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var4
            _fun40794: for (var _fun40794_ip = 0;;) switch (_fun40794_ip) {
                case 0:
                    var6 = arg0;
                    var1 = arg1;
                    var2 = this;
                    var0 = var2._paginationState;
                    var5 = var0.currentPage;
                    var0 = var0.pageSize;
                    var3 = var6 * var0;
                    var2 = var2._sortedMemberIds;
                    var2 = var2.length;
                    if (!(!(var3 <= var2))) {
                        _fun40794_ip = 51;
                        continue _fun40794
                    }
                case 46:
                    var2 = 1;
                    return var2;
                case 51:
                    var2 = null;
                    if (!(var2 != var1)) {
                        _fun40794_ip = 60;
                        continue _fun40794
                    }
                case 57:
                    var5 = var1;
                case 60:
                    var1 = global;
                    var3 = var1.Math;
                    var2 = var3.max;
                    var4 = var1.Math;
                    var1 = var4.ceil;
                    var0 = var0 / var6;
                    var0 = var0 * var5;
                    var1 = var1.bind(var4)(var0);
                    var0 = 1;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'updatePaginationState';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun40795: for (var _fun40795_ip = 0;;) switch (_fun40795_ip) {
                case 0:
                    var3 = arg0;
                    var2 = this;
                    var1 = var3.pageSize;
                    var0 = null;
                    var4 = var0 != var1;
                    if (!var4) {
                        _fun40795_ip = 43;
                        continue _fun40795
                    }
                case 21:
                    var5 = var3.pageSize;
                    var1 = var2._paginationState;
                    var1 = var1.pageSize;
                    var4 = var5 !== var1;
                case 43:
                    var1 = false;
                    if (!var4) {
                        _fun40795_ip = 98;
                        continue _fun40795
                    }
                case 48:
                    var5 = var2._calculateNewPageFromPageSizeChange;
                    var4 = var3.pageSize;
                    if (!(var0 == var4)) {
                        _fun40795_ip = 78;
                        continue _fun40795
                    }
                case 66:
                    var0 = var2._paginationState;
                    var4 = var0.pageSize;
                case 78:
                    var0 = var3.currentPage;
                    var0 = var5.bind(var2)(var4, var0);
                    var3.currentPage = var0;
                    var1 = true;
                case 98:
                    var0 = {};
                    var6 = var2._paginationState;
                    var7 = var0;
                    var4 = copyDataProperties(var7, var6);
                    var7 = var0;
                    var6 = var3;
                    var3 = copyDataProperties(var7, var6);
                    var2._paginationState = var0;
                    if (!var1) {
                        _fun40795_ip = 142;
                        continue _fun40795
                    }
                case 132:
                    var0 = var2._rebuildPaginationChunksFromStoredMembers;
                    var0 = var0.bind(var2)();
                case 142:
                    var0 = new Array(2);
                    var2 = true;
                    var0[0] = var2;
                    var0[1] = var1;
                    return var0;
            }
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'updateSortedMembers';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            var1 = this;
            var2 = var1._initPaginationFromRawMembers;
            var0 = arg0;
            var4 = var2.bind(var1)(var0);
            var3 = _closure1_slot2;
            var2 = undefined;
            var0 = 2;
            var0 = var3.bind(var2)(var4, var0);
            var2 = 0;
            var3 = var0[var2];
            var2 = 1;
            var0 = var0[var2];
            var1._sortedMemberIds = var3;
            var1._cachedPaginationChunks = var0;
            var0 = var1._version;
            var0 = var0 + var2;
            var1._version = var0;
            var0 = true;
            return var0;
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'updateSortedMembersByUserIds';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            var1 = this;
            var0 = arg0;
            var1._sortedMemberIds = var0;
            var0 = var1._rebuildPaginationChunksFromStoredMembers;
            var0 = var0.bind(var1)();
            var0 = true;
            return var0;
        };
        var0.value = var5;
        var1[11] = var0;
        var0 = {};
        var5 = '_findMember';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun40798: for (var _fun40798_ip = 0;;) switch (_fun40798_ip) {
                case 0:
                    var8 = arg0;
                    var7 = arguments[1];
                    var6 = this;
                    var5 = undefined;
                    if (!(var7 === var5)) {
                        _fun40798_ip = 28;
                        continue _fun40798
                    }
                case 15:
                    var0 = _closure1_slot7;
                    var7 = var0.BACKWARD;
                case 28:
                    var0 = var6._sortedMemberIds;
                    var1 = var0.length;
                    var0 = var8;
                    if (!(var8 < var1)) {
                        _fun40798_ip = 64;
                        continue _fun40798
                    }
                case 46:
                    var1 = var6._sortedMemberIds;
                    var2 = var1.length;
                    var1 = 1;
                    var0 = var2 - var1;
                case 64:
                    var4 = 0;
                    var0 = var0 < var4;
                    var0 = var6._sortedMemberIds;
                    var9 = var0[var8];
                    var2 = _closure1_slot5;
                    var1 = var2.getMember;
                    var0 = var6.guildId;
                    var1 = var1.bind(var2)(var0, var9);
                    var2 = null;
                    var0 = var1;
                    if (!(var2 == var0)) {
                        _fun40798_ip = 204;
                        continue _fun40798
                    }
                case 113:
                    var8 = var8 + var7;
                    var0 = var1;
                    if (!(!(var8 < var4))) {
                        _fun40798_ip = 204;
                        continue _fun40798
                    }
                case 124:
                    var9 = var6._sortedMemberIds;
                    var9 = var9.length;
                    var0 = var1;
                    if (!(!(var8 >= var9))) {
                        _fun40798_ip = 204;
                        continue _fun40798
                    }
                case 142:
                    var9 = var6._sortedMemberIds;
                    var12 = var9[var8];
                    var11 = _closure1_slot5;
                    var10 = var11.getMember;
                    var9 = var6.guildId;
                    var9 = var10.bind(var11)(var9, var12);
                    var11 = var2 == var9;
                    var10 = undefined;
                    if (var11) {
                        _fun40798_ip = 188;
                        continue _fun40798
                    }
                case 182:
                    var10 = var9.joinedAt;
                case 188:
                    if (!(var2 == var10)) {
                        _fun40798_ip = 194;
                        continue _fun40798
                    }
                case 192:
                    var9 = null;
                case 194:
                    var1 = var9;
                    var0 = var1;
                    if (var2 == var0) {
                        _fun40798_ip = 113;
                        continue _fun40798
                    }
                case 204:
                    return var0;
            }
        };
        var0.value = var5;
        var1[12] = var0;
        var0 = {};
        var5 = 'getElasticSearchPagination';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var1 = this;
            var0 = var1.getPaginationState;
            var0 = var0.bind(var1)();
            var0 = var0.elasticSearchCursor;
            return var0;
        };
        var0.value = var5;
        var1[13] = var0;
        var0 = {};
        var5 = 'paginatedMembers';
        var0.key = var5;
        var5 = function() { // Original name: get, environment: var4
            var0 = this;
            var0 = var0._cachedPaginationChunks;
            return var0;
        };
        var0.get = var5;
        var1[14] = var0;
        var0 = {};
        var5 = 'version';
        var0.key = var5;
        var4 = function() { // Original name: get, environment: var4
            var0 = this;
            var0 = var0._version;
            return var0;
        };
        var0.get = var4;
        var1[15] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var5 = 5;
    var7 = var7[var5];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/guild_mod_dash_member_safety/GuildMemberSafetyPagination.tsx';
    var7 = var8.bind(var9)(var7);
    var2.PAGINATION_PAGE_SIZE_OPTIONS = var6;
    var6 = 7;
    var2.MAX_VISIBLE_PAGES = var6;
    var2.MAX_FORWARD_PAGE_SKIP = var5;
    var5 = 250;
    var2.DEFAULT_SEARCH_CHUNK_LIMIT = var5;
    var2.createDefaultMemberSafetyPaginationState = var4;
    var3 = function(arg0) { // Original name: getSearchChunkLimit, environment: var3
        var0 = global;
        var3 = var0.Math;
        var2 = var3.max;
        var0 = arg0;
        var1 = var0.pageSize;
        var0 = 5;
        var1 = var0 * var1;
        var0 = 250;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.getSearchChunkLimit = var3;
    var2.GuildMemberSafetyPagination = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 1672, 4346, 2]);