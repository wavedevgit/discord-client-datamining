// modules/user_profile/hooks/useUserProfileMutuals.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.useMemo;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/hooks/useUserProfileMutuals.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun62533: for (var _fun62533_ip = 0;;) switch (_fun62533_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 5;
                var1 = var10[var6];
                var3 = undefined;
                var8 = var7.bind(var3)(var1);
                var5 = var8.useStateFromStoresArray;
                var1 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var4
                    var3 = _closure1_slot7;
                    var2 = var3.getMutualFriendsCount;
                    var1 = _closure2_slot0;
                    var0 = var1.id;
                    var2 = var2.bind(var3)(var0);
                    var0 = new Array(5);
                    var0[0] = var2;
                    var4 = var3.getMutualFriends;
                    var2 = var1.id;
                    var2 = var4.bind(var3)(var2);
                    var0[1] = var2;
                    var4 = var3.getMutualGuilds;
                    var2 = var1.id;
                    var2 = var4.bind(var3)(var2);
                    var0[2] = var2;
                    var4 = var3.isFetchingProfile;
                    var2 = var1.id;
                    var2 = var4.bind(var3)(var2);
                    var0[3] = var2;
                    var2 = var3.isFetchingFriends;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var0[4] = var1;
                    return var0;
                };
                var2 = var5.bind(var8)(var2, var1);
                var1 = _closure1_slot3;
                var5 = var1.bind(var3)(var2, var6);
                var1 = 0;
                var9 = var5[var1];
                var1 = 1;
                var12 = var5[var1];
                var _closure2_slot1 = var12;
                var1 = 2;
                var11 = var5[var1];
                var _closure2_slot2 = var11;
                var1 = 3;
                var2 = var5[var1];
                var1 = 4;
                var1 = var5[var1];
                var5 = var10[var6];
                var14 = var7.bind(var3)(var5);
                var13 = var14.useStateFromStores;
                var5 = _closure1_slot5;
                var8 = new Array(1);
                var8[0] = var5;
                var5 = function() { // Environment: var4
                    var1 = _closure1_slot5;
                    var0 = var1.getUserAffinitiesMap;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var5 = var13.bind(var14)(var8, var5);
                var _closure2_slot3 = var5;
                var6 = var10[var6];
                var13 = var7.bind(var3)(var6);
                var8 = var13.useStateFromStores;
                var6 = _closure1_slot6;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var4
                    var1 = _closure1_slot6;
                    var0 = var1.getFlattenedGuildIds;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var8 = var8.bind(var13)(var7, var6);
                var _closure2_slot4 = var8;
                var6 = _closure1_slot4;
                var7 = new Array(2);
                var7[0] = var12;
                var7[1] = var5;
                var5 = function() { // Environment: var4
                    _fun62537: for (var _fun62537_ip = 0;;) switch (_fun62537_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun62537_ip = 79;
                                continue _fun62537
                            }
                        case 13:
                            var0 = _closure2_slot1;
                            var2 = var0.length;
                            var0 = 2;
                            if (!(!(var2 < var0))) {
                                _fun62537_ip = 79;
                                continue _fun62537
                            }
                        case 29:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 6;
                            var2 = var2[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.sortBy;
                            var2 = _closure2_slot1;
                            var0 = function(arg0) { // Environment: var0
                                _fun62538: for (var _fun62538_ip = 0;;) switch (_fun62538_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var0 = var0.user;
                                        var2 = _closure2_slot3;
                                        var1 = var2.get;
                                        var0 = var0.id;
                                        var1 = var1.bind(var2)(var0);
                                        var0 = null;
                                        var3 = var0 == var1;
                                        var2 = undefined;
                                        if (var3) {
                                            _fun62538_ip = 47;
                                            continue _fun62538
                                        }
                                    case 41:
                                        var2 = var1.communicationProbability;
                                    case 47:
                                        var3 = var0 != var2;
                                        var1 = -1;
                                        var0 = var1;
                                        if (!var3) {
                                            _fun62538_ip = 66;
                                            continue _fun62538
                                        }
                                    case 63:
                                        var0 = var2;
                                    case 66:
                                        var0 = var1 * var0;
                                        return var0;
                                }
                            };
                            var0 = var3.bind(var4)(var2, var0);
                            _fun62537_ip = 83;
                            continue _fun62537;
                        case 79:
                            var0 = _closure2_slot1;
                        case 83:
                            return var0;
                    }
                };
                var7 = var6.bind(var3)(var5, var7);
                var5 = new Array(2);
                var5[0] = var11;
                var5[1] = var8;
                var4 = function() { // Environment: var4
                    _fun62539: for (var _fun62539_ip = 0;;) switch (_fun62539_ip) {
                        case 0:
                            var3 = _closure2_slot2;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun62539_ip = 121;
                                continue _fun62539
                            }
                        case 15:
                            var2 = _closure2_slot2;
                            var3 = var2.length;
                            var2 = 2;
                            if (!(!(var3 < var2))) {
                                _fun62539_ip = 121;
                                continue _fun62539
                            }
                        case 31:
                            var2 = global;
                            var4 = var2.Object;
                            var3 = var4.fromEntries;
                            var6 = _closure2_slot4;
                            var5 = var6.map;
                            var2 = function(arg0, arg1) { // Environment: var1
                                var0 = new Array(2);
                                var1 = arg0;
                                var0[0] = var1;
                                var1 = arg1;
                                var0[1] = var1;
                                return var0;
                            };
                            var2 = var5.bind(var6)(var2);
                            var2 = var3.bind(var4)(var2);
                            var _closure3_slot0 = var2;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 6;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.sortBy;
                            var2 = _closure2_slot2;
                            var1 = function(arg0) { // Environment: var1
                                _fun62541: for (var _fun62541_ip = 0;;) switch (_fun62541_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var0 = var0.guild;
                                        var1 = _closure3_slot0;
                                        var0 = var0.id;
                                        var0 = var1[var0];
                                        var1 = null;
                                        if (!(var1 == var0)) {
                                            _fun62541_ip = 42;
                                            continue _fun62541
                                        }
                                    case 30:
                                        var1 = _closure2_slot4;
                                        var0 = var1.length;
                                    case 42:
                                        return var0;
                                }
                            };
                            var1 = var3.bind(var4)(var2, var1);
                            return var1;
                        case 121:
                            var0 = _closure2_slot2;
                            return var0;
                    }
                };
                var4 = var6.bind(var3)(var4, var5);
                var5 = _closure1_slot1;
                var0 = 7;
                var6 = var10[var0];
                var6 = var5.bind(var3)(var6);
                var8 = var6.bind(var3)(var9);
                var6 = var10[var0];
                var6 = var5.bind(var3)(var6);
                var6 = var6.bind(var3)(var7);
                var0 = var10[var0];
                var0 = var5.bind(var3)(var0);
                var3 = var0.bind(var3)(var4);
                var0 = {};
                var5 = null;
                if (!(var5 != var9)) {
                    _fun62533_ip = 307;
                    continue _fun62533
                }
            case 304:
                var8 = var9;
            case 307:
                var0.mutualFriendsCount = var8;
                if (!(var5 != var7)) {
                    _fun62533_ip = 319;
                    continue _fun62533
                }
            case 316:
                var6 = var7;
            case 319:
                var0.mutualFriends = var6;
                if (!(var5 != var4)) {
                    _fun62533_ip = 331;
                    continue _fun62533
                }
            case 328:
                var3 = var4;
            case 331:
                var0.mutualGuilds = var3;
                var0.isFetching = var2;
                var0.isFetchingFriends = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 6841, 4376, 4660, 566, 22, 7821, 2]);