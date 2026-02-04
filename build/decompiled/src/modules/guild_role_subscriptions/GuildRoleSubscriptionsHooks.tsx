// modules/guild_role_subscriptions/GuildRoleSubscriptionsHooks.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var5 = metroImportDefault;
    var4 = metroImportAll;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var4;
    var _closure1_slot3 = var8;
    var0 = function arg0, arg1() {
        _fun84429: for (var _fun84429_ip = 0;;) switch (_fun84429_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun84429_ip = 46;
                    continue _fun84429
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun84429_ip = 55;
                    continue _fun84429
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun84429_ip = 345;
                    continue _fun84429
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun84429_ip = 323;
                    continue _fun84429
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun84429_ip = 283;
                    continue _fun84429
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun84429_ip = 270;
                    continue _fun84429
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
                    _fun84429_ip = 163;
                    continue _fun84429
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun84429_ip = 179;
                    continue _fun84429
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun84429_ip = 249;
                    continue _fun84429
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun84429_ip = 249;
                    continue _fun84429
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun84429_ip = 234;
                    continue _fun84429
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun84429_ip = 247;
                    continue _fun84429
                }
            case 234:
                var8 = _closure1_slot15;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun84429_ip = 265;
                continue _fun84429;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun84429_ip = 283;
                continue _fun84429;
            case 270:
                var6 = _closure1_slot15;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun84429_ip = 323;
                    continue _fun84429
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
                    _fun84429_ip = 330;
                    continue _fun84429
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun84430: for (var _fun84430_ip = 0;;) switch (_fun84430_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun84430_ip = 56;
                                continue _fun84430
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
                            _fun84430_ip = 67;
                            continue _fun84430;
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
        _fun84431: for (var _fun84431_ip = 0;;) switch (_fun84431_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun84431_ip = 23;
                    continue _fun84431
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun84431_ip = 33;
                    continue _fun84431
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
                    _fun84431_ip = 70;
                    continue _fun84431
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun84431_ip = 55;
                    continue _fun84431
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = global;
    var9 = var0.Object;
    var6 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var8[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var8[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var8[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var8[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var4 = var8[var3];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var3 = var8[var3];
    var3 = var7.bind(var0)(var3);
    var3 = var3.FetchState;
    var _closure1_slot9 = var3;
    var3 = new Array(0);
    var _closure1_slot10 = var3;
    var5 = function arg0() {
        _fun84432: for (var _fun84432_ip = 0;;) switch (_fun84432_ip) {
            case 0:
                var13 = arg0;
                var1 = arguments[1];
                var _closure2_slot0 = var13;
                var4 = undefined;
                if (!(var1 === var4)) {
                    _fun84432_ip = 20;
                    continue _fun84432
                }
            case 18:
                var1 = {};
            case 20:
                var11 = var1.refetchOnMount;
                if (!(var11 === var4)) {
                    _fun84432_ip = 32;
                    continue _fun84432
                }
            case 30:
                var11 = false;
            case 32:
                var _closure2_slot1 = var11;
                var12 = var1.includeSoftDeleted;
                if (!(var12 === var4)) {
                    _fun84432_ip = 48;
                    continue _fun84432
                }
            case 46:
                var12 = true;
            case 48:
                var _closure2_slot2 = var12;
                var10 = var1.countryCode;
                var _closure2_slot3 = var10;
                var9 = var1.dontFetchWhileTrue;
                var _closure2_slot4 = var9;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var3 = _closure1_slot0;
                var6 = _closure1_slot3;
                var2 = 5;
                var5 = var6[var2];
                var14 = var3.bind(var4)(var5);
                var8 = var14.useStateFromStores;
                var5 = _closure1_slot7;
                var7 = new Array(1);
                var7[0] = var5;
                var5 = function() { // Environment: var0
                    var1 = _closure1_slot7;
                    var0 = var1.isConnected;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var14 = var8.bind(var14)(var7, var5);
                _closure2_slot5 = var14;
                var2 = var6[var2];
                var7 = var3.bind(var4)(var2);
                var5 = var7.useStateFromStores;
                var2 = _closure1_slot8;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    _fun84434: for (var _fun84434_ip = 0;;) switch (_fun84434_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun84434_ip = 28;
                                continue _fun84434
                            }
                        case 13:
                            var0 = _closure1_slot9;
                            var0 = var0.FETCHED;
                            _fun84434_ip = 50;
                            continue _fun84434;
                        case 28:
                            var3 = _closure1_slot8;
                            var2 = var3.getSubscriptionGroupListingsForGuildFetchState;
                            var1 = _closure2_slot0;
                            var0 = var2.bind(var3)(var1);
                        case 50:
                            return var0;
                    }
                };
                var2 = var5.bind(var7)(var3, var2);
                var8 = _closure1_slot6;
                var3 = var8.useRef;
                var3 = var3.bind(var8)(var11);
                _closure2_slot6 = var3;
                var7 = var8.useEffect;
                var5 = new Array(6);
                var5[0] = var14;
                var5[1] = var13;
                var5[2] = var12;
                var5[3] = var11;
                var5[4] = var10;
                var5[5] = var9;
                var0 = function() { // Environment: var0
                    _fun84435: for (var _fun84435_ip = 0;;) switch (_fun84435_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun84435_ip = 152;
                                continue _fun84435
                            }
                        case 16:
                            var0 = _closure2_slot5;
                            if (!var0) {
                                _fun84435_ip = 152;
                                continue _fun84435
                            }
                        case 26:
                            var1 = _closure2_slot4;
                            var0 = true;
                            if (!(var0 !== var1)) {
                                _fun84435_ip = 152;
                                continue _fun84435
                            }
                        case 36:
                            var3 = _closure1_slot8;
                            var2 = var3.getSubscriptionGroupListingsForGuildFetchState;
                            var1 = _closure2_slot0;
                            var3 = var2.bind(var3)(var1);
                            var1 = _closure2_slot1;
                            if (var1) {
                                _fun84435_ip = 79;
                                continue _fun84435
                            }
                        case 65:
                            var2 = _closure1_slot9;
                            var2 = var2.NOT_FETCHED;
                            var1 = var3 === var2;
                        case 79:
                            if (!var1) {
                                _fun84435_ip = 152;
                                continue _fun84435
                            }
                        case 82:
                            var2 = _closure2_slot6;
                            var1 = false;
                            var2.current = var1;
                            var2 = _closure1_slot2;
                            var1 = _closure1_slot3;
                            var0 = 6;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.fetchAllSubscriptionListingsDataForGuild;
                            var1 = _closure2_slot0;
                            var0 = {};
                            var5 = _closure2_slot2;
                            var0.includeSoftDeleted = var5;
                            var4 = _closure2_slot3;
                            var0.countryCode = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 152:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var7.bind(var8)(var0, var5);
                var5 = _closure1_slot1;
                var0 = 7;
                var0 = var6[var0];
                var0 = var5.bind(var4)(var0);
                var3 = var0.bind(var4)(var3);
                var0 = {};
                var1 = _closure1_slot9;
                var1 = var1.FETCHED;
                var1 = var2 === var1;
                if (!var1) {
                    _fun84432_ip = 286;
                    continue _fun84432
                }
            case 280:
                var2 = true;
                var1 = var2 !== var3;
            case 286:
                var0.listingsLoaded = var1;
                return var0;
        }
    };
    var _closure1_slot11 = var5;
    var4 = function arg0() {
        _fun84436: for (var _fun84436_ip = 0;;) switch (_fun84436_ip) {
            case 0:
                var7 = arg0;
                var1 = arguments[1];
                var _closure2_slot0 = var7;
                var4 = undefined;
                if (!(var1 === var4)) {
                    _fun84436_ip = 20;
                    continue _fun84436
                }
            case 18:
                var1 = {};
            case 20:
                var6 = var1.includeSoftDeleted;
                if (!(var6 === var4)) {
                    _fun84436_ip = 32;
                    continue _fun84436
                }
            case 30:
                var6 = false;
            case 32:
                var _closure2_slot1 = var6;
                var5 = var1.includeUnpublished;
                if (!(var5 === var4)) {
                    _fun84436_ip = 48;
                    continue _fun84436
                }
            case 46:
                var5 = true;
            case 48:
                var _closure2_slot2 = var5;
                var3 = _closure1_slot0;
                var8 = _closure1_slot3;
                var2 = 5;
                var2 = var8[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.useStateFromStoresArray;
                var1 = _closure1_slot8;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = new Array(3);
                var1[0] = var7;
                var1[1] = var6;
                var1[2] = var5;
                var0 = function() { // Environment: var0
                    _fun84437: for (var _fun84437_ip = 0;;) switch (_fun84437_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var6 = null;
                            if (!(var6 != var0)) {
                                _fun84437_ip = 167;
                                continue _fun84437
                            }
                        case 16:
                            var2 = _closure1_slot8;
                            var1 = var2.getSubscriptionGroupListing;
                            var0 = _closure2_slot0;
                            var1 = var1.bind(var2)(var0);
                            if (!(var6 != var1)) {
                                _fun84437_ip = 161;
                                continue _fun84437
                            }
                        case 42:
                            var0 = new Array(0);
                            var2 = _closure1_slot14;
                            var1 = var1.subscription_listings_ids;
                            var4 = undefined;
                            var3 = var2.bind(var4)(var1);
                            var2 = var3.bind(var4)();
                            var1 = var2.done;
                            if (var1) {
                                _fun84437_ip = 159;
                                continue _fun84437
                            }
                        case 75:
                            var9 = var2.value;
                            var8 = _closure1_slot8;
                            var1 = var8.getSubscriptionListing;
                            var8 = var1.bind(var8)(var9);
                            if (!(var6 != var8)) {
                                _fun84437_ip = 144;
                                continue _fun84437
                            }
                        case 99:
                            var1 = var8.soft_deleted;
                            if (!var1) {
                                _fun84437_ip = 115;
                                continue _fun84437
                            }
                        case 108:
                            var9 = _closure2_slot1;
                            var1 = !var9;
                        case 115:
                            if (var1) {
                                _fun84437_ip = 144;
                                continue _fun84437
                            }
                        case 118:
                            var1 = var8.published;
                            if (var1) {
                                _fun84437_ip = 131;
                                continue _fun84437
                            }
                        case 127:
                            var1 = _closure2_slot2;
                        case 131:
                            if (!var1) {
                                _fun84437_ip = 144;
                                continue _fun84437
                            }
                        case 134:
                            var1 = var0.push;
                            var1 = var1.bind(var0)(var8);
                        case 144:
                            var8 = var3.bind(var4)();
                            var1 = var8.done;
                            var2 = var8;
                            if (!var1) {
                                _fun84437_ip = 75;
                                continue _fun84437
                            }
                        case 159:
                            return var0;
                        case 161:
                            var0 = new Array(0);
                            return var0;
                        case 167:
                            var0 = new Array(0);
                            return var0;
                    }
                };
                var0 = var3.bind(var4)(var2, var0, var1);
                return var0;
        }
    };
    var _closure1_slot12 = var4;
    var3 = function arg0() {
        _fun84438: for (var _fun84438_ip = 0;;) switch (_fun84438_ip) {
            case 0:
                var3 = arg0;
                var1 = arguments[1];
                var _closure2_slot0 = var3;
                var4 = undefined;
                if (!(var1 === var4)) {
                    _fun84438_ip = 32;
                    continue _fun84438
                }
            case 18:
                var1 = {
                    'includeSoftDeleted': false,
                    'sortDeletedListingsLast': false
                };
            case 32:
                var _closure2_slot1 = var1;
                var2 = _closure1_slot11;
                var2 = var2.bind(var4)(var3);
                var3 = _closure1_slot0;
                var5 = _closure1_slot3;
                var2 = 5;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.useStateFromStoresArray;
                var4 = _closure1_slot8;
                var1 = new Array(1);
                var1[0] = var4;
                var0 = function() { // Environment: var0
                    _fun84439: for (var _fun84439_ip = 0;;) switch (_fun84439_ip) {
                        case 0:
                            var5 = new Array(0);
                            var3 = _closure1_slot14;
                            var0 = _closure2_slot0;
                            var8 = null;
                            if (!(var8 == var0)) {
                                _fun84439_ip = 32;
                                continue _fun84439
                            }
                        case 26:
                            var0 = _closure1_slot10;
                            _fun84439_ip = 51;
                            continue _fun84439;
                        case 32:
                            var7 = _closure1_slot8;
                            var6 = var7.getSubscriptionGroupListingsForGuild;
                            var4 = _closure2_slot0;
                            var0 = var6.bind(var7)(var4);
                        case 51:
                            var7 = undefined;
                            var6 = var3.bind(var7)(var0);
                            var3 = var6.bind(var7)();
                            var0 = var3.done;
                            var4 = var3;
                            var3 = undefined;
                            if (var0) {
                                _fun84439_ip = 208;
                                continue _fun84439
                            }
                        case 78:
                            var10 = _closure1_slot14;
                            var0 = var4.value;
                            var0 = var0.subscription_listings_ids;
                            var11 = var10.bind(var7)(var0);
                            var10 = var11.bind(var7)();
                            var0 = var10.done;
                            if (var0) {
                                _fun84439_ip = 193;
                                continue _fun84439
                            }
                        case 110:
                            var13 = var10.value;
                            var12 = _closure1_slot8;
                            var0 = var12.getSubscriptionListing;
                            var12 = var0.bind(var12)(var13);
                            var0 = var8 == var12;
                            if (var0) {
                                _fun84439_ip = 162;
                                continue _fun84439
                            }
                        case 137:
                            var13 = _closure2_slot1;
                            var13 = var13.includeSoftDeleted;
                            var13 = !var13;
                            if (!var13) {
                                _fun84439_ip = 159;
                                continue _fun84439
                            }
                        case 153:
                            var13 = var12.soft_deleted;
                        case 159:
                            var0 = var13;
                        case 162:
                            if (var0) {
                                _fun84439_ip = 175;
                                continue _fun84439
                            }
                        case 165:
                            var0 = var5.push;
                            var0 = var0.bind(var5)(var12);
                        case 175:
                            var13 = var11.bind(var7)();
                            var0 = var13.done;
                            var10 = var13;
                            var3 = var12;
                            if (!var0) {
                                _fun84439_ip = 110;
                                continue _fun84439
                            }
                        case 193:
                            var10 = var6.bind(var7)();
                            var0 = var10.done;
                            var4 = var10;
                            if (!var0) {
                                _fun84439_ip = 78;
                                continue _fun84439
                            }
                        case 208:
                            var0 = _closure2_slot1;
                            var3 = var0.includeSoftDeleted;
                            var0 = var5;
                            if (!var3) {
                                _fun84439_ip = 297;
                                continue _fun84439
                            }
                        case 224:
                            var1 = _closure2_slot1;
                            var1 = var1.sortDeletedListingsLast;
                            var0 = var5;
                            if (!var1) {
                                _fun84439_ip = 297;
                                continue _fun84439
                            }
                        case 240:
                            var3 = var5.filter;
                            var1 = function(arg0) { // Environment: var2
                                var0 = arg0;
                                var0 = var0.soft_deleted;
                                var0 = !var0;
                                return var0;
                            };
                            var16 = var3.bind(var5)(var1);
                            var1 = new Array(0);
                            var15 = 0;
                            var17 = var1;
                            var15 = arraySpread(var17, var16, var15);
                            var4 = var5.filter;
                            var2 = function(arg0) { // Environment: var2
                                var0 = arg0;
                                var0 = var0.soft_deleted;
                                return var0;
                            };
                            var16 = var4.bind(var5)(var2);
                            var17 = var1;
                            var2 = arraySpread(var17, var16, var15);
                            var0 = var1;
                        case 297:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot13 = var3;
    var6 = 12;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/guild_role_subscriptions/GuildRoleSubscriptionsHooks.tsx';
    var6 = var7.bind(var8)(var6);
    var2.useFetchListingsForGuild = var5;
    var5 = function() { // Environment: var1
        var9 = _closure1_slot6;
        var3 = var9.useState;
        var1 = false;
        var1 = var3.bind(var9)(var1);
        var7 = _closure1_slot5;
        var2 = undefined;
        var6 = 2;
        var4 = var7.bind(var2)(var1, var6);
        var1 = 0;
        var3 = var4[var1];
        var5 = 1;
        var4 = var4[var5];
        var _closure2_slot0 = var4;
        var8 = var9.useState;
        var4 = null;
        var4 = var8.bind(var9)(var4);
        var4 = var7.bind(var2)(var4, var6);
        var1 = var4[var1];
        var4 = var4[var5];
        var _closure2_slot1 = var4;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function*(arg0, arg1) { // Environment: var0
                var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                    _fun84445: for (var _fun84445_ip = 0;;) switch (_fun84445_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                            if (var2) {
                                _fun84445_ip = 156;
                                continue _fun84445
                            }
                        case 10:
                            var3 = arg0;
                            var1 = arg1;
                            var6 = _closure2_slot0;
                            var4 = undefined;
                            var5 = true;
                            var5 = var6.bind(var4)(var5);
                            var6 = _closure2_slot1;
                            var5 = null;
                            var5 = var6.bind(var4)(var5);
                        case 43: // try_start_0 // try_start_1
                            var6 = _closure1_slot2;
                            var7 = _closure1_slot3;
                            var5 = 6;
                            var5 = var7[var5];
                            var6 = var6.bind(var4)(var5);
                            var5 = var6.createSubscriptionGroupListing;
                            var1 = var5.bind(var6)(var3, var1);
                            SaveGenerator(address = 82);
                        case 80:
                            return var1;
                        case 82:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                            if (var3) {
                                _fun84445_ip = 102;
                                continue _fun84445
                            }
                        case 88: // try_end0 // try_end1
                            var5 = _closure2_slot0;
                            var3 = false;
                            var3 = var5.bind(var4)(var3);
                            return var1;
                        case 102:
                            var5 = _closure2_slot0;
                            var3 = false;
                            var3 = var5.bind(var4)(var3);
                            return var1;
                        case 116: // try_start_2 // catch_target0
                            CatchBlockStart(arg_register = 3);
                            var1 = _closure2_slot1;
                            var1 = var1.bind(var4)(var3);
                        case 127: // try_end2
                            var3 = _closure2_slot0;
                            var1 = false;
                            var1 = var3.bind(var4)(var1);
                            return var4;
                        case 141: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register = 1);
                            var3 = _closure2_slot0;
                            var2 = false;
                            var2 = var3.bind(var4)(var2);
                            throw var1;
                        case 156:
                            return var0;
                    }
                };
                return var0;
            };
            var1 = var3.bind(var2)(var1);
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                var0 = undefined;
                var3 = _closure3_slot0;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            return var0;
        };
        var2 = var0.bind(var2)();
        var0 = {};
        var0.loading = var3;
        var0.createSubscriptionGroupListing = var2;
        var0.error = var1;
        return var0;
    };
    var2.useCreateSubscriptionGroupListing = var5;
    var5 = function() { // Environment: var1
        var5 = _closure1_slot6;
        var3 = var5.useState;
        var1 = false;
        var1 = var3.bind(var5)(var1);
        var8 = _closure1_slot5;
        var2 = undefined;
        var7 = 2;
        var4 = var8.bind(var2)(var1, var7);
        var1 = 0;
        var3 = var4[var1];
        var6 = 1;
        var4 = var4[var6];
        var _closure2_slot0 = var4;
        var9 = var5.useState;
        var4 = null;
        var4 = var9.bind(var5)(var4);
        var4 = var8.bind(var2)(var4, var7);
        var1 = var4[var1];
        var4 = var4[var6];
        var _closure2_slot1 = var4;
        var4 = var5.useCallback;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function*(arg0, arg1, arg2) { // Environment: var0
                var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                    _fun84450: for (var _fun84450_ip = 0;;) switch (_fun84450_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                            if (var2) {
                                _fun84450_ip = 160;
                                continue _fun84450
                            }
                        case 10:
                            var5 = arg0;
                            var3 = arg1;
                            var1 = arg2;
                            var7 = _closure2_slot0;
                            var4 = undefined;
                            var6 = true;
                            var6 = var7.bind(var4)(var6);
                            var7 = _closure2_slot1;
                            var6 = null;
                            var6 = var7.bind(var4)(var6);
                        case 46: // try_start_0 // try_start_1
                            var7 = _closure1_slot2;
                            var8 = _closure1_slot3;
                            var6 = 6;
                            var6 = var8[var6];
                            var7 = var7.bind(var4)(var6);
                            var6 = var7.updateSubscriptionGroupListing;
                            var1 = var6.bind(var7)(var5, var3, var1);
                            SaveGenerator(address = 86);
                        case 84:
                            return var1;
                        case 86:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                            if (var3) {
                                _fun84450_ip = 106;
                                continue _fun84450
                            }
                        case 92: // try_end0 // try_end1
                            var5 = _closure2_slot0;
                            var3 = false;
                            var3 = var5.bind(var4)(var3);
                            return var1;
                        case 106:
                            var5 = _closure2_slot0;
                            var3 = false;
                            var3 = var5.bind(var4)(var3);
                            return var1;
                        case 120: // try_start_2 // catch_target0
                            CatchBlockStart(arg_register = 3);
                            var1 = _closure2_slot1;
                            var1 = var1.bind(var4)(var3);
                        case 131: // try_end2
                            var3 = _closure2_slot0;
                            var1 = false;
                            var1 = var3.bind(var4)(var1);
                            return var4;
                        case 145: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register = 1);
                            var3 = _closure2_slot0;
                            var2 = false;
                            var2 = var3.bind(var4)(var2);
                            throw var1;
                        case 160:
                            return var0;
                    }
                };
                return var0;
            };
            var1 = var3.bind(var2)(var1);
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                var0 = undefined;
                var3 = _closure3_slot0;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            return var0;
        };
        var2 = var0.bind(var2)();
        var0 = new Array(0);
        var2 = var4.bind(var5)(var2, var0);
        var0 = {};
        var0.loading = var3;
        var0.updateSubscriptionGroupListing = var2;
        var0.error = var1;
        return var0;
    };
    var2.useUpdateSubscriptionGroupListing = var5;
    var2.useSubscriptionListingsForGroup = var4;
    var4 = function(arg0) { // Environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot3;
        var2 = 5;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot8;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun84453: for (var _fun84453_ip = 0;;) switch (_fun84453_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = null;
                    var2 = var0 != var2;
                    if (!var2) {
                        _fun84453_ip = 38;
                        continue _fun84453
                    }
                case 16:
                    var3 = _closure1_slot8;
                    var2 = var3.getSubscriptionListing;
                    var1 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1);
                case 38:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useSubscriptionListing = var4;
    var4 = function(arg0) { // Environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot3;
        var2 = 5;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot8;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun84455: for (var _fun84455_ip = 0;;) switch (_fun84455_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = null;
                    var2 = var0 != var2;
                    if (!var2) {
                        _fun84455_ip = 38;
                        continue _fun84455
                    }
                case 16:
                    var3 = _closure1_slot8;
                    var2 = var3.getSubscriptionGroupListing;
                    var1 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1);
                case 38:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useSubscriptionGroupListing = var4;
    var4 = function(arg0) { // Environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var5 = _closure1_slot3;
        var2 = 8;
        var2 = var5[var2];
        var3 = undefined;
        var7 = var4.bind(var3)(var2);
        var6 = var7.useGroupListingsFetchContext;
        var2 = 'useGroupListingsForGuild';
        var2 = var6.bind(var7)(var2);
        var _closure2_slot1 = var2;
        var2 = 5;
        var2 = var5[var2];
        var3 = var4.bind(var3)(var2);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot8;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun84457: for (var _fun84457_ip = 0;;) switch (_fun84457_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun84457_ip = 20;
                        continue _fun84457
                    }
                case 13:
                    var0 = _closure2_slot1;
                    if (var0) {
                        _fun84457_ip = 29;
                        continue _fun84457
                    }
                case 20:
                    var0 = _closure1_slot10;
                    _fun84457_ip = 51;
                    continue _fun84457;
                case 29:
                    var3 = _closure1_slot8;
                    var2 = var3.getSubscriptionGroupListingsForGuild;
                    var1 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1);
                case 51:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useGroupListingsForGuild = var4;
    var2.useSubscriptionListingsForGuild = var3;
    var3 = function(arg0) { // Environment: var1
        var2 = arg0;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot6;
        var5 = var4.useState;
        var1 = false;
        var6 = var5.bind(var4)(var1);
        var5 = _closure1_slot5;
        var7 = undefined;
        var1 = 2;
        var6 = var5.bind(var7)(var6, var1);
        var1 = 0;
        var1 = var6[var1];
        var _closure2_slot1 = var1;
        var5 = 1;
        var5 = var6[var5];
        var _closure2_slot2 = var5;
        var6 = var4.useMemo;
        var5 = new Array(1);
        var5[0] = var2;
        var2 = function() { // Environment: var0
            var2 = _closure2_slot0;
            var1 = var2.map;
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var0 = 9;
            var3 = var3[var0];
            var0 = undefined;
            var0 = var4.bind(var0)(var3);
            var0 = var0.getRoleSubscriptionPlanId;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var2 = var6.bind(var4)(var2, var5);
        var _closure2_slot3 = var2;
        var6 = _closure1_slot0;
        var8 = _closure1_slot3;
        var5 = 5;
        var5 = var8[var5];
        var7 = var6.bind(var7)(var5);
        var6 = var7.useStateFromStoresArray;
        var3 = _closure1_slot8;
        var5 = new Array(1);
        var5[0] = var3;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() { // Environment: var0
            var2 = _closure2_slot3;
            var1 = var2.filter;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure1_slot8;
                var1 = var2.getDidFetchListingForSubscriptionPlanId;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                var0 = !var0;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5 = var6.bind(var7)(var5, var2, var3);
        var _closure2_slot4 = var5;
        var3 = var4.useEffect;
        var2 = new Array(2);
        var2[0] = var1;
        var2[1] = var5;
        var0 = function() { // Environment: var0
            _fun84462: for (var _fun84462_ip = 0;;) switch (_fun84462_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var2 = !var2;
                    if (!var2) {
                        _fun84462_ip = 30;
                        continue _fun84462
                    }
                case 15:
                    var3 = _closure2_slot4;
                    var4 = var3.length;
                    var3 = 0;
                    var2 = var4 > var3;
                case 30:
                    if (!var2) {
                        _fun84462_ip = 121;
                        continue _fun84462
                    }
                case 33:
                    var4 = _closure2_slot2;
                    var3 = undefined;
                    var2 = true;
                    var2 = var4.bind(var3)(var2);
                    var2 = global;
                    var3 = var2.Promise;
                    var2 = var3.all;
                    var5 = _closure2_slot4;
                    var4 = var5.map;
                    var1 = function(arg0) { // Environment: var0
                        var2 = _closure1_slot2;
                        var1 = _closure1_slot3;
                        var0 = 6;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.fetchSubscriptionListingForPlan;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1 = var4.bind(var5)(var1);
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.catch;
                    var1 = function() { // Environment: var0
                        var0 = undefined;
                        return var0;
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.then;
                    var0 = function() { // Environment: var0
                        var2 = _closure2_slot2;
                        var0 = undefined;
                        var1 = false;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                case 121:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var0, var2);
        var0 = {};
        var0.loading = var1;
        return var0;
    };
    var2.useFetchListingsForSubscriptions = var3;
    var3 = function() { // Environment: var1
        var9 = _closure1_slot6;
        var3 = var9.useState;
        var2 = false;
        var2 = var3.bind(var9)(var2);
        var7 = _closure1_slot5;
        var1 = undefined;
        var6 = 2;
        var4 = var7.bind(var1)(var2, var6);
        var3 = 0;
        var2 = var4[var3];
        var5 = 1;
        var4 = var4[var5];
        var _closure2_slot0 = var4;
        var8 = var9.useState;
        var4 = null;
        var4 = var8.bind(var9)(var4);
        var4 = var7.bind(var1)(var4, var6);
        var3 = var4[var3];
        var4 = var4[var5];
        var _closure2_slot1 = var4;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function*(arg0, arg1, arg2) { // Environment: var0
                var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                    _fun84469: for (var _fun84469_ip = 0;;) switch (_fun84469_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                            if (var2) {
                                _fun84469_ip = 170;
                                continue _fun84469
                            }
                        case 10:
                            var6 = arg0;
                            var5 = arg1;
                            var1 = arg2;
                        case 19: // try_start_0 // try_start_1
                            var7 = _closure2_slot0;
                            var4 = undefined;
                            var3 = true;
                            var7 = var7.bind(var4)(var3);
                            var8 = _closure2_slot1;
                            var7 = null;
                            var7 = var8.bind(var4)(var7);
                            var8 = _closure1_slot2;
                            var9 = _closure1_slot3;
                            var7 = 6;
                            var7 = var9[var7];
                            var8 = var8.bind(var4)(var7);
                            var7 = var8.deleteSubscriptionListing;
                            var1 = var7.bind(var8)(var6, var5, var1);
                            SaveGenerator(address = 86);
                        case 84:
                            return var1;
                        case 86:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                            if (var5) {
                                _fun84469_ip = 106;
                                continue _fun84469
                            }
                        case 92: // try_end0 // try_end1
                            var6 = _closure2_slot0;
                            var5 = false;
                            var5 = var6.bind(var4)(var5);
                            return var3;
                        case 106:
                            var3 = _closure2_slot0;
                            var2 = false;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        case 120: // try_start_2 // catch_target0
                            CatchBlockStart(arg_register = 4);
                            var3 = _closure2_slot1;
                            var1 = undefined;
                            var3 = var3.bind(var1)(var4);
                        case 136: // try_end2
                            var3 = _closure2_slot0;
                            var2 = false;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        case 150: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register = 1);
                            var4 = _closure2_slot0;
                            var3 = undefined;
                            var2 = false;
                            var2 = var4.bind(var3)(var2);
                            throw var1;
                        case 170:
                            return var0;
                    }
                };
                return var0;
            };
            var1 = var3.bind(var2)(var1);
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                var0 = undefined;
                var3 = _closure3_slot0;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            return var0;
        };
        var1 = var0.bind(var1)();
        var0 = {};
        var0.error = var3;
        var0.submitting = var2;
        var0.deleteSubscriptionListing = var1;
        return var0;
    };
    var2.useDeleteSubscriptionListing = var3;
    var3 = function() { // Environment: var1
        var2 = _closure1_slot1;
        var5 = _closure1_slot3;
        var1 = 10;
        var1 = var5[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var4 = _closure1_slot2;
        var1 = 6;
        var1 = var5[var1];
        var1 = var4.bind(var3)(var1);
        var1 = var1.archiveSubscriptionListing;
        var2 = var2.bind(var3)(var1);
        var1 = _closure1_slot5;
        var0 = 2;
        var2 = var1.bind(var3)(var2, var0);
        var0 = 0;
        var1 = var2[var0];
        var0 = 1;
        var3 = var2[var0];
        var2 = var3.loading;
        var0 = {};
        var3 = var3.error;
        var0.error = var3;
        var0.submitting = var2;
        var0.archiveSubscriptionListing = var1;
        return var0;
    };
    var2.useArchiveSubscriptionListing = var3;
    var3 = function() { // Environment: var1
        var9 = _closure1_slot6;
        var3 = var9.useState;
        var0 = false;
        var0 = var3.bind(var9)(var0);
        var7 = _closure1_slot5;
        var2 = undefined;
        var6 = 2;
        var0 = var7.bind(var2)(var0, var6);
        var4 = 0;
        var3 = var0[var4];
        var5 = 1;
        var0 = var0[var5];
        var _closure2_slot0 = var0;
        var8 = var9.useState;
        var0 = null;
        var0 = var8.bind(var9)(var0);
        var0 = var7.bind(var2)(var0, var6);
        var4 = var0[var4];
        var0 = var0[var5];
        var _closure2_slot1 = var0;
        var0 = function() { // Environment: var1
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function*(arg0) { // Environment: var0
                var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                    _fun84475: for (var _fun84475_ip = 0;;) switch (_fun84475_ip) {
                        case 0:
                            StartGenerator();
                            var1 = arg0;
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                            if (var2) {
                                _fun84475_ip = 218;
                                continue _fun84475
                            }
                        case 13:
                            var10 = var1.guildId;
                            var9 = var1.groupListingId;
                            var8 = var1.listingId;
                            var5 = undefined;
                            SaveGenerator(address = 36);
                        case 34:
                            return var5;
                        case 36:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                            if (var2) {
                                _fun84475_ip = 215;
                                continue _fun84475
                            }
                        case 45: // try_start_0 // try_start_1
                            var2 = _closure2_slot0;
                            var4 = true;
                            var2 = var2.bind(var5)(var4);
                            var6 = _closure2_slot1;
                            var2 = null;
                            var2 = var6.bind(var5)(var2);
                            var6 = _closure1_slot2;
                            var7 = _closure1_slot3;
                            var2 = 6;
                            var2 = var7[var2];
                            var7 = var6.bind(var5)(var2);
                            var6 = var7.updateSubscriptionListing;
                            var2 = {};
                            var2.guildId = var10;
                            var2.groupListingId = var9;
                            var2.listingId = var8;
                            var8 = {};
                            var8.published = var4;
                            var2.data = var8;
                            var2 = var6.bind(var7)(var2);
                            SaveGenerator(address = 135);
                        case 133:
                            return var2;
                        case 135:
                            ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                            if (var6) {
                                _fun84475_ip = 155;
                                continue _fun84475
                            }
                        case 141: // try_end0 // try_end1
                            var7 = _closure2_slot0;
                            var6 = false;
                            var6 = var7.bind(var5)(var6);
                            return var4;
                        case 155:
                            var4 = _closure2_slot0;
                            var3 = false;
                            var3 = var4.bind(var5)(var3);
                            return var2;
                        case 169: // try_start_2 // catch_target0
                            CatchBlockStart(arg_register = 4);
                            var3 = _closure2_slot1;
                            var3 = var3.bind(var5)(var4);
                        case 183: // try_end2
                            var3 = _closure2_slot0;
                            var2 = false;
                            var2 = var3.bind(var5)(var2);
                            return var5;
                        case 197: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register = 2);
                            var4 = _closure2_slot0;
                            var3 = false;
                            var3 = var4.bind(var5)(var3);
                            throw var2;
                        case 215:
                            return var1;
                        case 218:
                            return var0;
                    }
                };
                var1 = var0.next;
                var1 = var1.bind(var0)();
                return var0;
            };
            var1 = var3.bind(var2)(var1);
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                var0 = undefined;
                var3 = _closure3_slot0;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            return var0;
        };
        var2 = var0.bind(var2)();
        var0 = {};
        var0.error = var4;
        var0.submitting = var3;
        var0.publishSubscriptionListing = var2;
        var1 = function() {
            var2 = _closure2_slot1;
            var1 = undefined;
            var0 = null;
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var0.clearError = var1;
        return var0;
    };
    var2.usePublishSubscriptionListing = var3;
    var3 = function(arg0) { // Environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot3;
        var2 = 5;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot8;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun84479: for (var _fun84479_ip = 0;;) switch (_fun84479_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = null;
                    var2 = var0 != var2;
                    var0 = undefined;
                    if (!var2) {
                        _fun84479_ip = 40;
                        continue _fun84479
                    }
                case 18:
                    var3 = _closure1_slot8;
                    var2 = var3.getSubscriptionSettings;
                    var1 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1);
                case 40:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useSubscriptionsSettings = var3;
    var3 = function() { // Environment: var1
        var5 = _closure1_slot6;
        var3 = var5.useState;
        var1 = false;
        var1 = var3.bind(var5)(var1);
        var8 = _closure1_slot5;
        var2 = undefined;
        var7 = 2;
        var4 = var8.bind(var2)(var1, var7);
        var1 = 0;
        var3 = var4[var1];
        var6 = 1;
        var4 = var4[var6];
        var _closure2_slot0 = var4;
        var9 = var5.useState;
        var4 = null;
        var4 = var9.bind(var5)(var4);
        var4 = var8.bind(var2)(var4, var7);
        var1 = var4[var1];
        var4 = var4[var6];
        var _closure2_slot1 = var4;
        var4 = var5.useCallback;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function*(arg0, arg1) { // Environment: var0
                var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                    _fun84483: for (var _fun84483_ip = 0;;) switch (_fun84483_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                            if (var2) {
                                _fun84483_ip = 144;
                                continue _fun84483
                            }
                        case 10:
                            var3 = arg0;
                            var1 = arg1;
                            var6 = _closure2_slot0;
                            var4 = undefined;
                            var5 = true;
                            var5 = var6.bind(var4)(var5);
                            var6 = _closure2_slot1;
                            var5 = null;
                            var5 = var6.bind(var4)(var5);
                        case 43: // try_start_0 // try_start_1
                            var6 = _closure1_slot2;
                            var7 = _closure1_slot3;
                            var5 = 6;
                            var5 = var7[var5];
                            var6 = var6.bind(var4)(var5);
                            var5 = var6.updateSubscriptionsSettings;
                            var1 = var5.bind(var6)(var3, var1);
                            SaveGenerator(address = 82);
                        case 80:
                            return var1;
                        case 82:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                            if (var3) {
                                _fun84483_ip = 90;
                                continue _fun84483
                            }
                        case 88: // try_end0
                            _fun84483_ip = 115;
                            continue _fun84483;
                        case 90: // try_end1
                            var5 = _closure2_slot0;
                            var3 = false;
                            var3 = var5.bind(var4)(var3);
                            return var1;
                        case 104: // try_start_2 // catch_target0
                            CatchBlockStart(arg_register = 3);
                            var1 = _closure2_slot1;
                            var1 = var1.bind(var4)(var3);
                        case 115: // try_end2
                            var3 = _closure2_slot0;
                            var1 = false;
                            var1 = var3.bind(var4)(var1);
                            return var4;
                        case 129: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register = 1);
                            var3 = _closure2_slot0;
                            var2 = false;
                            var2 = var3.bind(var4)(var2);
                            throw var1;
                        case 144:
                            return var0;
                    }
                };
                return var0;
            };
            var1 = var3.bind(var2)(var1);
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                var0 = undefined;
                var3 = _closure3_slot0;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            return var0;
        };
        var2 = var0.bind(var2)();
        var0 = new Array(0);
        var2 = var4.bind(var5)(var2, var0);
        var0 = {};
        var0.loading = var3;
        var0.updateSubscriptionsSettings = var2;
        var0.error = var1;
        return var0;
    };
    var2.useUpdateSubscriptionsSettings = var3;
    var3 = function() { // Environment: var1
        var9 = _closure1_slot6;
        var3 = var9.useState;
        var2 = false;
        var2 = var3.bind(var9)(var2);
        var7 = _closure1_slot5;
        var1 = undefined;
        var6 = 2;
        var4 = var7.bind(var1)(var2, var6);
        var3 = 0;
        var2 = var4[var3];
        var5 = 1;
        var4 = var4[var5];
        var _closure2_slot0 = var4;
        var8 = var9.useState;
        var4 = null;
        var4 = var8.bind(var9)(var4);
        var4 = var7.bind(var1)(var4, var6);
        var3 = var4[var3];
        var4 = var4[var5];
        var _closure2_slot1 = var4;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function*(arg0, arg1) { // Environment: var0
                var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                    _fun84488: for (var _fun84488_ip = 0;;) switch (_fun84488_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                            if (var2) {
                                _fun84488_ip = 166;
                                continue _fun84488
                            }
                        case 10:
                            var3 = arg0;
                            var1 = arg1;
                        case 16: // try_start_0 // try_start_1
                            var6 = _closure2_slot0;
                            var4 = undefined;
                            var5 = true;
                            var5 = var6.bind(var4)(var5);
                            var6 = _closure2_slot1;
                            var5 = null;
                            var5 = var6.bind(var4)(var5);
                            var6 = _closure1_slot2;
                            var7 = _closure1_slot3;
                            var5 = 6;
                            var5 = var7[var5];
                            var6 = var6.bind(var4)(var5);
                            var5 = var6.deleteSubscriptionGroupListing;
                            var1 = var5.bind(var6)(var3, var1);
                            SaveGenerator(address = 82);
                        case 80:
                            return var1;
                        case 82:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                            if (var3) {
                                _fun84488_ip = 102;
                                continue _fun84488
                            }
                        case 88: // try_end0 // try_end1
                            var5 = _closure2_slot0;
                            var3 = false;
                            var3 = var5.bind(var4)(var3);
                            return var1;
                        case 102:
                            var3 = _closure2_slot0;
                            var2 = false;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        case 116: // try_start_2 // catch_target0
                            CatchBlockStart(arg_register = 4);
                            var3 = _closure2_slot1;
                            var1 = undefined;
                            var3 = var3.bind(var1)(var4);
                        case 132: // try_end2
                            var3 = _closure2_slot0;
                            var2 = false;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        case 146: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register = 1);
                            var4 = _closure2_slot0;
                            var3 = undefined;
                            var2 = false;
                            var2 = var4.bind(var3)(var2);
                            throw var1;
                        case 166:
                            return var0;
                    }
                };
                return var0;
            };
            var1 = var3.bind(var2)(var1);
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                var0 = undefined;
                var3 = _closure3_slot0;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            return var0;
        };
        var1 = var0.bind(var1)();
        var0 = {};
        var0.error = var3;
        var0.submitting = var2;
        var0.deleteSubscriptionGroupListing = var1;
        return var0;
    };
    var2.useDeleteSubscriptionGroupListing = var3;
    var3 = function() { // Environment: var1
        var5 = _closure1_slot6;
        var3 = var5.useState;
        var1 = false;
        var1 = var3.bind(var5)(var1);
        var8 = _closure1_slot5;
        var2 = undefined;
        var7 = 2;
        var4 = var8.bind(var2)(var1, var7);
        var1 = 0;
        var3 = var4[var1];
        var6 = 1;
        var4 = var4[var6];
        var _closure2_slot0 = var4;
        var9 = var5.useState;
        var4 = null;
        var4 = var9.bind(var5)(var4);
        var4 = var8.bind(var2)(var4, var7);
        var1 = var4[var1];
        var4 = var4[var6];
        var _closure2_slot1 = var4;
        var4 = var5.useCallback;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function*(arg0) { // Environment: var0
                var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                    _fun84493: for (var _fun84493_ip = 0;;) switch (_fun84493_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                            if (var2) {
                                _fun84493_ip = 140;
                                continue _fun84493
                            }
                        case 10:
                            var1 = arg0;
                            var5 = _closure2_slot0;
                            var4 = undefined;
                            var3 = true;
                            var3 = var5.bind(var4)(var3);
                            var5 = _closure2_slot1;
                            var3 = null;
                            var3 = var5.bind(var4)(var3);
                        case 40: // try_start_0 // try_start_1
                            var5 = _closure1_slot2;
                            var6 = _closure1_slot3;
                            var3 = 6;
                            var3 = var6[var3];
                            var5 = var5.bind(var4)(var3);
                            var3 = var5.fetchSubscriptionsSettings;
                            var1 = var3.bind(var5)(var1);
                            SaveGenerator(address = 78);
                        case 76:
                            return var1;
                        case 78:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                            if (var3) {
                                _fun84493_ip = 86;
                                continue _fun84493
                            }
                        case 84: // try_end0
                            _fun84493_ip = 111;
                            continue _fun84493;
                        case 86: // try_end1
                            var5 = _closure2_slot0;
                            var3 = false;
                            var3 = var5.bind(var4)(var3);
                            return var1;
                        case 100: // try_start_2 // catch_target0
                            CatchBlockStart(arg_register = 3);
                            var1 = _closure2_slot1;
                            var1 = var1.bind(var4)(var3);
                        case 111: // try_end2
                            var3 = _closure2_slot0;
                            var1 = false;
                            var1 = var3.bind(var4)(var1);
                            return var4;
                        case 125: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register = 1);
                            var3 = _closure2_slot0;
                            var2 = false;
                            var2 = var3.bind(var4)(var2);
                            throw var1;
                        case 140:
                            return var0;
                    }
                };
                return var0;
            };
            var1 = var3.bind(var2)(var1);
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                var0 = undefined;
                var3 = _closure3_slot0;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            return var0;
        };
        var2 = var0.bind(var2)();
        var0 = new Array(0);
        var2 = var4.bind(var5)(var2, var0);
        var0 = {};
        var0.loading = var3;
        var0.fetchSubscriptionsSettings = var2;
        var0.error = var1;
        return var0;
    };
    var2.useFetchSubscriptionsSettings = var3;
    var3 = function() { // Environment: var1
        var5 = _closure1_slot6;
        var3 = var5.useState;
        var1 = false;
        var1 = var3.bind(var5)(var1);
        var8 = _closure1_slot5;
        var2 = undefined;
        var7 = 2;
        var4 = var8.bind(var2)(var1, var7);
        var1 = 0;
        var3 = var4[var1];
        var6 = 1;
        var4 = var4[var6];
        var _closure2_slot0 = var4;
        var9 = var5.useState;
        var4 = null;
        var4 = var9.bind(var5)(var4);
        var4 = var8.bind(var2)(var4, var7);
        var1 = var4[var1];
        var4 = var4[var6];
        var _closure2_slot1 = var4;
        var4 = var5.useCallback;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function*(arg0, arg1, arg2) { // Environment: var0
                var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                    _fun84498: for (var _fun84498_ip = 0;;) switch (_fun84498_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                            if (var2) {
                                _fun84498_ip = 148;
                                continue _fun84498
                            }
                        case 10:
                            var5 = arg0;
                            var3 = arg1;
                            var1 = arg2;
                            var7 = _closure2_slot0;
                            var4 = undefined;
                            var6 = true;
                            var6 = var7.bind(var4)(var6);
                            var7 = _closure2_slot1;
                            var6 = null;
                            var6 = var7.bind(var4)(var6);
                        case 46: // try_start_0 // try_start_1
                            var7 = _closure1_slot2;
                            var8 = _closure1_slot3;
                            var6 = 6;
                            var6 = var8[var6];
                            var7 = var7.bind(var4)(var6);
                            var6 = var7.updateSubscriptionTrial;
                            var1 = var6.bind(var7)(var5, var3, var1);
                            SaveGenerator(address = 86);
                        case 84:
                            return var1;
                        case 86:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                            if (var3) {
                                _fun84498_ip = 94;
                                continue _fun84498
                            }
                        case 92: // try_end0
                            _fun84498_ip = 119;
                            continue _fun84498;
                        case 94: // try_end1
                            var5 = _closure2_slot0;
                            var3 = false;
                            var3 = var5.bind(var4)(var3);
                            return var1;
                        case 108: // try_start_2 // catch_target0
                            CatchBlockStart(arg_register = 3);
                            var1 = _closure2_slot1;
                            var1 = var1.bind(var4)(var3);
                        case 119: // try_end2
                            var3 = _closure2_slot0;
                            var1 = false;
                            var1 = var3.bind(var4)(var1);
                            return var4;
                        case 133: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register = 1);
                            var3 = _closure2_slot0;
                            var2 = false;
                            var2 = var3.bind(var4)(var2);
                            throw var1;
                        case 148:
                            return var0;
                    }
                };
                return var0;
            };
            var1 = var3.bind(var2)(var1);
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                var0 = undefined;
                var3 = _closure3_slot0;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            return var0;
        };
        var2 = var0.bind(var2)();
        var0 = new Array(0);
        var2 = var4.bind(var5)(var2, var0);
        var0 = {};
        var0.loading = var3;
        var0.updateSubscriptionTrial = var2;
        var0.error = var1;
        return var0;
    };
    var2.useUpdateSubscriptionsTrial = var3;
    var3 = function(arg0) { // Environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot3;
        var2 = 5;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot8;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun84501: for (var _fun84501_ip = 0;;) switch (_fun84501_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = null;
                    var2 = var0 != var2;
                    if (!var2) {
                        _fun84501_ip = 38;
                        continue _fun84501
                    }
                case 16:
                    var3 = _closure1_slot8;
                    var2 = var3.getSubscriptionTrial;
                    var1 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1);
                case 38:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useSubscriptionTrial = var3;
    var3 = function(arg0) { // Environment: var1
        var3 = _closure1_slot12;
        var4 = undefined;
        var2 = arg0;
        var5 = var3.bind(var4)(var2);
        var _closure2_slot0 = var5;
        var3 = _closure1_slot0;
        var6 = _closure1_slot3;
        var2 = 5;
        var2 = var6[var2];
        var4 = var3.bind(var4)(var2);
        var3 = var4.useStateFromStoresArray;
        var1 = _closure1_slot8;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            var2 = _closure2_slot0;
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure1_slot8;
                var1 = var2.getSubscriptionTrial;
                var0 = arg0;
                var0 = var0.id;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var2 = var1.bind(var2)(var0);
            var1 = var2.filter;
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var0 = 11;
            var3 = var3[var0];
            var0 = undefined;
            var0 = var4.bind(var0)(var3);
            var0 = var0.isNotNullish;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useSubscriptionTrialsForGroup = var3;
    var1 = function(arg0) { // Environment: var1
        var3 = _closure1_slot13;
        var4 = undefined;
        var2 = arg0;
        var5 = var3.bind(var4)(var2);
        var _closure2_slot0 = var5;
        var3 = _closure1_slot0;
        var6 = _closure1_slot3;
        var2 = 5;
        var2 = var6[var2];
        var4 = var3.bind(var4)(var2);
        var3 = var4.useStateFromStoresArray;
        var1 = _closure1_slot8;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            var2 = _closure2_slot0;
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure1_slot8;
                var1 = var2.getSubscriptionTrial;
                var0 = arg0;
                var0 = var0.id;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var2 = var1.bind(var2)(var0);
            var1 = var2.filter;
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var0 = 11;
            var3 = var3[var0];
            var0 = undefined;
            var0 = var4.bind(var0)(var3);
            var0 = var0.isNotNullish;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useSubscriptionTrialsForGuild = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 3474, 3085, 566, 5624, 4735, 10809, 10810, 10811, 1304, 2]);