// modules/slayer_storefront/hooks/SocialLayerStorefrontEligibilityHooks.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0, arg1() {
        _fun87463: for (var _fun87463_ip = 0;;) switch (_fun87463_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun87463_ip = 46;
                    continue _fun87463
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun87463_ip = 55;
                    continue _fun87463
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun87463_ip = 345;
                    continue _fun87463
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun87463_ip = 323;
                    continue _fun87463
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun87463_ip = 283;
                    continue _fun87463
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun87463_ip = 270;
                    continue _fun87463
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
                    _fun87463_ip = 163;
                    continue _fun87463
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun87463_ip = 179;
                    continue _fun87463
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun87463_ip = 249;
                    continue _fun87463
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun87463_ip = 249;
                    continue _fun87463
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun87463_ip = 234;
                    continue _fun87463
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun87463_ip = 247;
                    continue _fun87463
                }
            case 234:
                var8 = _closure1_slot7;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun87463_ip = 265;
                continue _fun87463;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun87463_ip = 283;
                continue _fun87463;
            case 270:
                var6 = _closure1_slot7;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun87463_ip = 323;
                    continue _fun87463
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
                    _fun87463_ip = 330;
                    continue _fun87463
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun87464: for (var _fun87464_ip = 0;;) switch (_fun87464_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun87464_ip = 56;
                                continue _fun87464
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
                            _fun87464_ip = 67;
                            continue _fun87464;
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
    var _closure1_slot6 = var0;
    var0 = function arg0, arg1() {
        _fun87465: for (var _fun87465_ip = 0;;) switch (_fun87465_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun87465_ip = 23;
                    continue _fun87465
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun87465_ip = 33;
                    continue _fun87465
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
                    _fun87465_ip = 70;
                    continue _fun87465
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun87465_ip = 55;
                    continue _fun87465
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
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
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/slayer_storefront/hooks/SocialLayerStorefrontEligibilityHooks.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var1 = arg0;
        var5 = var1.userIds;
        var _closure2_slot0 = var5;
        var6 = var1.gameIds;
        var _closure2_slot1 = var6;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 4;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = new Array(2);
        var1[0] = var6;
        var1[1] = var5;
        var0 = function() { // Environment: var0
            var2 = _closure2_slot0;
            var1 = var2.some;
            var0 = function(arg0) { // Environment: var0
                _fun87468: for (var _fun87468_ip = 0;;) switch (_fun87468_ip) {
                    case 0:
                        var2 = _closure1_slot2;
                        var1 = var2.getUserOutbox;
                        var0 = arg0;
                        var1 = var1.bind(var2)(var0);
                        var0 = null;
                        var2 = var0 == var1;
                        var0 = undefined;
                        if (var2) {
                            _fun87468_ip = 58;
                            continue _fun87468
                        }
                    case 32:
                        var3 = var1.entries;
                        var2 = var3.some;
                        var1 = function(arg0) { // Environment: var1
                            _fun87469: for (var _fun87469_ip = 0;;) switch (_fun87469_ip) {
                                case 0:
                                    var1 = arg0;
                                    var0 = null;
                                    var0 = var0 != var1;
                                    if (!var0) {
                                        _fun87469_ip = 48;
                                        continue _fun87469
                                    }
                                case 12:
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot1;
                                    var2 = 5;
                                    var3 = var3[var2];
                                    var2 = undefined;
                                    var3 = var4.bind(var2)(var3);
                                    var2 = var3.isGamingLikeEntry;
                                    var0 = var2.bind(var3)(var1);
                                case 48:
                                    if (!var0) {
                                        _fun87469_ip = 80;
                                        continue _fun87469
                                    }
                                case 51:
                                    var3 = _closure2_slot1;
                                    var2 = var3.has;
                                    var1 = var1.extra;
                                    var1 = var1.application_id;
                                    var0 = var2.bind(var3)(var1);
                                case 80:
                                    return var0;
                            }
                        };
                        var0 = var2.bind(var3)(var1);
                    case 58:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useUsersHavePlayedSocialLayerStorefrontGamesInOutbox = var3;
    var3 = function arg0() {
        var1 = arg0;
        var5 = var1.userIds;
        var _closure2_slot0 = var5;
        var6 = var1.guildIdsWithGameStores;
        var _closure2_slot1 = var6;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 4;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot4;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = new Array(2);
        var1[0] = var6;
        var1[1] = var5;
        var0 = function() { // Environment: var0
            _fun87471: for (var _fun87471_ip = 0;;) switch (_fun87471_ip) {
                case 0:
                    var1 = _closure1_slot6;
                    var0 = _closure2_slot0;
                    var6 = undefined;
                    var5 = var1.bind(var6)(var0);
                    var1 = var5.bind(var6)();
                    var0 = var1.done;
                    var4 = null;
                    var3 = var1;
                    var2 = undefined;
                    var1 = undefined;
                    if (var0) {
                        _fun87471_ip = 173;
                        continue _fun87471
                    }
                case 45:
                    var10 = var3.value;
                    var9 = _closure1_slot4;
                    var0 = var9.getMutualGuilds;
                    var9 = var0.bind(var9)(var10);
                    if (!(var4 != var9)) {
                        _fun87471_ip = 158;
                        continue _fun87471
                    }
                case 69:
                    var0 = _closure1_slot6;
                    var10 = var0.bind(var6)(var9);
                    var11 = var10.bind(var6)();
                    var0 = var11.done;
                    var9 = var11;
                    var2 = var9;
                    var1 = var10;
                    if (var0) {
                        _fun87471_ip = 158;
                        continue _fun87471
                    }
                case 99:
                    var0 = var9.value;
                    var12 = _closure2_slot1;
                    var11 = var12.has;
                    var0 = var0.guild;
                    var0 = var0.id;
                    var0 = var11.bind(var12)(var0);
                    if (var0) {
                        _fun87471_ip = 154;
                        continue _fun87471
                    }
                case 131:
                    var11 = var10.bind(var6)();
                    var0 = var11.done;
                    var9 = var11;
                    var2 = var9;
                    var1 = var10;
                    if (var0) {
                        _fun87471_ip = 158;
                        continue _fun87471
                    }
                case 152:
                    _fun87471_ip = 99;
                    continue _fun87471;
                case 154:
                    var0 = true;
                    return var0;
                case 158:
                    var9 = var5.bind(var6)();
                    var0 = var9.done;
                    var3 = var9;
                    if (!var0) {
                        _fun87471_ip = 45;
                        continue _fun87471
                    }
                case 173:
                    var0 = false;
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useAreUsersInSocialLayerStorefrontMutualGuilds = var3;
    var3 = function arg0() {
        var1 = arg0;
        var5 = var1.userIds;
        var _closure2_slot0 = var5;
        var6 = var1.gameIds;
        var _closure2_slot1 = var6;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 4;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot5;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = new Array(2);
        var1[0] = var6;
        var1[1] = var5;
        var0 = function() { // Environment: var0
            _fun87473: for (var _fun87473_ip = 0;;) switch (_fun87473_ip) {
                case 0:
                    var1 = _closure1_slot6;
                    var0 = _closure2_slot0;
                    var5 = undefined;
                    var4 = var1.bind(var5)(var0);
                    var1 = var4.bind(var5)();
                    var0 = var1.done;
                    var3 = null;
                    var2 = var1;
                    var1 = undefined;
                    if (var0) {
                        _fun87473_ip = 158;
                        continue _fun87473
                    }
                case 40:
                    var10 = var2.value;
                    var8 = _closure1_slot6;
                    var9 = _closure1_slot5;
                    var0 = var9.getActivities;
                    var0 = var0.bind(var9)(var10);
                    var9 = var8.bind(var5)(var0);
                    var8 = var9.bind(var5)();
                    var0 = var8.done;
                    if (var0) {
                        _fun87473_ip = 143;
                        continue _fun87473
                    }
                case 81:
                    var10 = var8.value;
                    var0 = var10.application_id;
                    if (!(var3 != var0)) {
                        _fun87473_ip = 119;
                        continue _fun87473
                    }
                case 96:
                    var12 = _closure2_slot1;
                    var11 = var12.has;
                    var0 = var10.application_id;
                    var0 = var11.bind(var12)(var0);
                    if (var0) {
                        _fun87473_ip = 139;
                        continue _fun87473
                    }
                case 119:
                    var11 = var9.bind(var5)();
                    var0 = var11.done;
                    var8 = var11;
                    var1 = var10;
                    if (var0) {
                        _fun87473_ip = 143;
                        continue _fun87473
                    }
                case 137:
                    _fun87473_ip = 81;
                    continue _fun87473;
                case 139:
                    var0 = true;
                    return var0;
                case 143:
                    var8 = var4.bind(var5)();
                    var0 = var8.done;
                    var2 = var8;
                    if (!var0) {
                        _fun87473_ip = 40;
                        continue _fun87473
                    }
                case 158:
                    var0 = false;
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useAreUsersPlayingStorefrontEnabledGames = var3;
    var3 = function arg0() {
        var1 = arg0;
        var5 = var1.gameIds;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 4;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot3;
            var1 = var2.getGamesSeen;
            var0 = false;
            var2 = var1.bind(var2)(var0, var0);
            var1 = var2.some;
            var0 = function(arg0) { // Environment: var0
                _fun87476: for (var _fun87476_ip = 0;;) switch (_fun87476_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = var1.id;
                        var0 = null;
                        var0 = var0 != var2;
                        if (!var0) {
                            _fun87476_ip = 39;
                            continue _fun87476
                        }
                    case 17:
                        var3 = _closure2_slot0;
                        var2 = var3.has;
                        var1 = var1.id;
                        var0 = var2.bind(var3)(var1);
                    case 39:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useHasCurrentUserPlayedSocialLayerStorefrontGames = var3;
    var1 = function arg0() {
        var1 = arg0;
        var5 = var1.gameIds;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 4;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            var1 = _closure1_slot3;
            var0 = var1.getRunningGames;
            var2 = var0.bind(var1)();
            var1 = var2.some;
            var0 = function(arg0) { // Environment: var0
                _fun87479: for (var _fun87479_ip = 0;;) switch (_fun87479_ip) {
                    case 0:
                        var3 = arg0;
                        var1 = var3.id;
                        var0 = null;
                        var0 = var0 != var1;
                        if (!var0) {
                            _fun87479_ip = 39;
                            continue _fun87479
                        }
                    case 17:
                        var4 = _closure2_slot0;
                        var2 = var4.has;
                        var1 = var3.id;
                        var0 = var2.bind(var4)(var1);
                    case 39:
                        if (!var0) {
                            _fun87479_ip = 60;
                            continue _fun87479
                        }
                    case 42:
                        var2 = _closure1_slot3;
                        var1 = var2.isDetectionEnabled;
                        var0 = var1.bind(var2)(var3);
                    case 60:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useIsCurrentUserPlayingSocialLayerStorefrontGames = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7869, 3483, 4660, 3610, 566, 7829, 2]);