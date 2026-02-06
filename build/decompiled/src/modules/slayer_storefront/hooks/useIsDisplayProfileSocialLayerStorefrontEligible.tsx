// modules/slayer_storefront/hooks/useIsDisplayProfileSocialLayerStorefrontEligible.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var0 = function arg0, arg1() {
        _fun87501: for (var _fun87501_ip = 0;;) switch (_fun87501_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun87501_ip = 46;
                    continue _fun87501
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun87501_ip = 55;
                    continue _fun87501
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun87501_ip = 345;
                    continue _fun87501
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun87501_ip = 323;
                    continue _fun87501
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun87501_ip = 283;
                    continue _fun87501
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun87501_ip = 270;
                    continue _fun87501
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
                    _fun87501_ip = 163;
                    continue _fun87501
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun87501_ip = 179;
                    continue _fun87501
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun87501_ip = 249;
                    continue _fun87501
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun87501_ip = 249;
                    continue _fun87501
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun87501_ip = 234;
                    continue _fun87501
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun87501_ip = 247;
                    continue _fun87501
                }
            case 234:
                var8 = _closure1_slot7;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun87501_ip = 265;
                continue _fun87501;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun87501_ip = 283;
                continue _fun87501;
            case 270:
                var6 = _closure1_slot7;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun87501_ip = 323;
                    continue _fun87501
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
                    _fun87501_ip = 330;
                    continue _fun87501
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun87502: for (var _fun87502_ip = 0;;) switch (_fun87502_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun87502_ip = 56;
                                continue _fun87502
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
                            _fun87502_ip = 67;
                            continue _fun87502;
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
        _fun87503: for (var _fun87503_ip = 0;;) switch (_fun87503_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun87503_ip = 23;
                    continue _fun87503
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun87503_ip = 33;
                    continue _fun87503
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
                    _fun87503_ip = 70;
                    continue _fun87503
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun87503_ip = 55;
                    continue _fun87503
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var3 = function arg0() {
        _fun87504: for (var _fun87504_ip = 0;;) switch (_fun87504_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.displayProfile;
                var _closure2_slot0 = var7;
                var5 = var0.location;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 2;
                var1 = var9[var0];
                var0 = undefined;
                var4 = var8.bind(var0)(var1);
                var3 = var4.useIsEligibleForSocialLayerStorefrontUserExperiment;
                var1 = {};
                var1.location = var5;
                var5 = var3.bind(var4)(var1);
                var10 = _closure1_slot3;
                var4 = var10.useMemo;
                var3 = new Array(1);
                var3[0] = var7;
                var1 = function() { // Environment: var2
                    _fun87505: for (var _fun87505_ip = 0;;) switch (_fun87505_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var2 = null;
                            var3 = var2 == var0;
                            var0 = undefined;
                            if (var3) {
                                _fun87505_ip = 27;
                                continue _fun87505
                            }
                        case 18:
                            var3 = _closure2_slot0;
                            var0 = var3.userId;
                        case 27:
                            if (!(var2 == var0)) {
                                _fun87505_ip = 37;
                                continue _fun87505
                            }
                        case 31:
                            var0 = new Array(0);
                            _fun87505_ip = 57;
                            continue _fun87505;
                        case 37:
                            var1 = _closure2_slot0;
                            var2 = var1.userId;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0 = var1;
                        case 57:
                            return var0;
                    }
                };
                var10 = var4.bind(var10)(var1, var3);
                var3 = 3;
                var1 = var9[var3];
                var11 = var8.bind(var0)(var1);
                var4 = var11.useAreUsersPlayingStorefrontEnabledGames;
                var1 = {};
                var12 = _closure1_slot4;
                var1.gameIds = var12;
                var1.userIds = var10;
                var1 = var4.bind(var11)(var1);
                var4 = var9[var3];
                var12 = var8.bind(var0)(var4);
                var11 = var12.useUsersHavePlayedSocialLayerStorefrontGamesInOutbox;
                var4 = {};
                var13 = _closure1_slot4;
                var4.gameIds = var13;
                var4.userIds = var10;
                var4 = var11.bind(var12)(var4);
                var3 = var9[var3];
                var9 = var8.bind(var0)(var3);
                var8 = var9.useAreUsersInSocialLayerStorefrontMutualGuilds;
                var3 = {};
                var3.userIds = var10;
                var10 = _closure1_slot5;
                var3.guildIdsWithGameStores = var10;
                var3 = var8.bind(var9)(var3);
                var10 = _closure1_slot3;
                var9 = var10.useMemo;
                var6 = null;
                var8 = var6 == var7;
                var11 = undefined;
                if (var8) {
                    _fun87504_ip = 229;
                    continue _fun87504
                }
            case 223:
                var11 = var7.widgets;
            case 229:
                var8 = new Array(1);
                var8[0] = var11;
                var2 = function() { // Environment: var2
                    _fun87506: for (var _fun87506_ip = 0;;) switch (_fun87506_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var2 = null;
                            var3 = var2 == var1;
                            var4 = undefined;
                            var1 = undefined;
                            if (var3) {
                                _fun87506_ip = 30;
                                continue _fun87506
                            }
                        case 20:
                            var3 = _closure2_slot0;
                            var1 = var3.widgets;
                        case 30:
                            if (!(var2 != var1)) {
                                _fun87506_ip = 230;
                                continue _fun87506
                            }
                        case 37:
                            var1 = _closure2_slot0;
                            var1 = var2 == var1;
                            var2 = undefined;
                            if (var1) {
                                _fun87506_ip = 128;
                                continue _fun87506
                            }
                        case 50:
                            var0 = _closure2_slot0;
                            var3 = var0.widgets;
                            var1 = var3.map;
                            var0 = function(arg0) { // Environment: var0
                                _fun87507: for (var _fun87507_ip = 0;;) switch (_fun87507_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var0 = 4;
                                        var3 = var3[var0];
                                        var0 = undefined;
                                        var3 = var4.bind(var0)(var3);
                                        var3 = var3.BaseGameWidget;
                                        var3 = var1 instanceof var3;
                                        if (var3) {
                                            _fun87507_ip = 83;
                                            continue _fun87507
                                        }
                                    case 41:
                                        var3 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        var2 = 5;
                                        var2 = var4[var2];
                                        var2 = var3.bind(var0)(var2);
                                        var2 = var2.ApplicationWidget;
                                        var2 = var1 instanceof var2;
                                        var0 = undefined;
                                        if (!var2) {
                                            _fun87507_ip = 81;
                                            continue _fun87507
                                        }
                                    case 76:
                                        var0 = var1.applicationId;
                                    case 81:
                                        _fun87507_ip = 108;
                                        continue _fun87507;
                                    case 83:
                                        var3 = var1.games;
                                        var2 = var3.map;
                                        var1 = function(arg0) { // Environment: var1
                                            var0 = arg0;
                                            var0 = var0.applicationId;
                                            return var0;
                                        };
                                        var0 = var2.bind(var3)(var1);
                                    case 108:
                                        return var0;
                                }
                            };
                            var3 = var1.bind(var3)(var0);
                            var1 = var3.filter;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 6;
                            var0 = var6[var0];
                            var0 = var5.bind(var4)(var0);
                            var0 = var0.isNotNullish;
                            var1 = var1.bind(var3)(var0);
                            var0 = var1.flat;
                            var2 = var0.bind(var1)();
                        case 128:
                            var0 = global;
                            var0 = var0.Set;
                            var1 = var0.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var0
                                }
                            });
                            var8 = var1;
                            var7 = var2;
                            var0 = new var8[var0](var7, var6);
                            var3 = var0 instanceof Object ? var0 : var1;
                            var1 = _closure1_slot6;
                            var0 = _closure1_slot4;
                            var2 = var1.bind(var4)(var0);
                            var1 = var2.bind(var4)();
                            var0 = var1.done;
                            if (var0) {
                                _fun87506_ip = 226;
                                continue _fun87506
                            }
                        case 187:
                            var5 = var1.value;
                            var0 = var3.has;
                            var0 = var0.bind(var3)(var5);
                            if (var0) {
                                _fun87506_ip = 222;
                                continue _fun87506
                            }
                        case 205:
                            var5 = var2.bind(var4)();
                            var0 = var5.done;
                            var1 = var5;
                            if (var0) {
                                _fun87506_ip = 226;
                                continue _fun87506
                            }
                        case 220:
                            _fun87506_ip = 187;
                            continue _fun87506;
                        case 222:
                            var0 = true;
                            return var0;
                        case 226:
                            var0 = false;
                            return var0;
                        case 230:
                            var0 = false;
                            return var0;
                    }
                };
                var2 = var9.bind(var10)(var2, var8);
                var8 = var6 == var7;
                var0 = undefined;
                if (var8) {
                    _fun87504_ip = 264;
                    continue _fun87504
                }
            case 259:
                var0 = var7.application;
            case 264:
                var0 = var6 == var0;
                if (!var0) {
                    _fun87504_ip = 274;
                    continue _fun87504
                }
            case 271:
                var0 = var5;
            case 274:
                if (!var0) {
                    _fun87504_ip = 298;
                    continue _fun87504
                }
            case 277:
                if (var1) {
                    _fun87504_ip = 283;
                    continue _fun87504
                }
            case 280:
                var1 = var4;
            case 283:
                if (var1) {
                    _fun87504_ip = 289;
                    continue _fun87504
                }
            case 286:
                var1 = var3;
            case 289:
                if (var1) {
                    _fun87504_ip = 295;
                    continue _fun87504
                }
            case 292:
                var1 = var2;
            case 295:
                var0 = var1;
            case 298:
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.STOREFRONT_ENABLED_MARKETING_GAME_IDS;
    var _closure1_slot4 = var7;
    var4 = var4.STOREFRONT_ENABLED_MARKETING_GUILD_IDS;
    var _closure1_slot5 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/slayer_storefront/hooks/useIsDisplayProfileSocialLayerStorefrontEligible.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var1 = function arg0() {
        var0 = arg0;
        var5 = var0.userId;
        var3 = var0.location;
        var2 = _closure1_slot8;
        var1 = {};
        var6 = _closure1_slot1;
        var4 = _closure1_slot2;
        var0 = 7;
        var4 = var4[var0];
        var0 = undefined;
        var4 = var6.bind(var0)(var4);
        var4 = var4.bind(var0)(var5);
        var1.displayProfile = var4;
        var1.location = var3;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var2.useIsUserSocialLayerStorefrontEligibleInProfile = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3497, 3498, 11324, 4663, 11325, 1304, 6981, 2]);