// modules/guild_role_subscriptions/useActiveSubscriptionListingForGroup.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0, arg1() {
        _fun104703: for (var _fun104703_ip = 0;;) switch (_fun104703_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun104703_ip = 46;
                    continue _fun104703
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun104703_ip = 55;
                    continue _fun104703
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun104703_ip = 345;
                    continue _fun104703
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun104703_ip = 323;
                    continue _fun104703
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun104703_ip = 283;
                    continue _fun104703
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun104703_ip = 270;
                    continue _fun104703
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
                    _fun104703_ip = 163;
                    continue _fun104703
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun104703_ip = 179;
                    continue _fun104703
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun104703_ip = 249;
                    continue _fun104703
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun104703_ip = 249;
                    continue _fun104703
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun104703_ip = 234;
                    continue _fun104703
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun104703_ip = 247;
                    continue _fun104703
                }
            case 234:
                var8 = _closure1_slot8;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun104703_ip = 265;
                continue _fun104703;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun104703_ip = 283;
                continue _fun104703;
            case 270:
                var6 = _closure1_slot8;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun104703_ip = 323;
                    continue _fun104703
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
                    _fun104703_ip = 330;
                    continue _fun104703
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun104704: for (var _fun104704_ip = 0;;) switch (_fun104704_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun104704_ip = 56;
                                continue _fun104704
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
                            _fun104704_ip = 67;
                            continue _fun104704;
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
    var _closure1_slot7 = var0;
    var0 = function arg0, arg1() {
        _fun104705: for (var _fun104705_ip = 0;;) switch (_fun104705_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun104705_ip = 23;
                    continue _fun104705
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun104705_ip = 33;
                    continue _fun104705
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
                    _fun104705_ip = 70;
                    continue _fun104705
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun104705_ip = 55;
                    continue _fun104705
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.SubscriptionTypes;
    var _closure1_slot6 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/useActiveSubscriptionListingForGroup.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun104706: for (var _fun104706_ip = 0;;) switch (_fun104706_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var9 = 5;
                var3 = var1[var9];
                var6 = undefined;
                var8 = var2.bind(var6)(var3);
                var7 = var8.useStateFromStores;
                var3 = _closure1_slot4;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = function() { // Environment: var0
                    var1 = _closure1_slot4;
                    var0 = var1.getSubscriptions;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var3 = var7.bind(var8)(var5, var3);
                var _closure2_slot1 = var3;
                var8 = _closure1_slot2;
                var7 = var8.useMemo;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = function() { // Environment: var0
                    _fun104708: for (var _fun104708_ip = 0;;) switch (_fun104708_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun104708_ip = 128;
                                continue _fun104708
                            }
                        case 13:
                            var0 = {};
                            var2 = global;
                            var3 = var2.Object;
                            var2 = var3.values;
                            var1 = _closure2_slot1;
                            var6 = var2.bind(var3)(var1);
                            var1 = var6.length;
                            var5 = 0;
                            var1 = var5 < var1;
                            var3 = 6;
                            var2 = undefined;
                            if (!var1) {
                                _fun104708_ip = 126;
                                continue _fun104708
                            }
                        case 59:
                            var7 = var6[var5];
                            var8 = var7.type;
                            var1 = _closure1_slot6;
                            var1 = var1.GUILD;
                            if (!(var8 === var1)) {
                                _fun104708_ip = 114;
                                continue _fun104708
                            }
                        case 82:
                            var8 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var1 = var1[var3];
                            var8 = var8.bind(var2)(var1);
                            var1 = var8.getRoleSubscriptionPlanId;
                            var1 = var1.bind(var8)(var7);
                            var0[var1] = var7;
                        case 114:
                            var5 = var5 + 1;
                            var1 = var6.length;
                            if (var5 < var1) {
                                _fun104708_ip = 59;
                                continue _fun104708
                            }
                        case 126:
                            return var0;
                        case 128:
                            var0 = {};
                            return var0;
                    }
                };
                var3 = var7.bind(var8)(var3, var5);
                var _closure2_slot2 = var3;
                var1 = var1[var9];
                var5 = var2.bind(var6)(var1);
                var3 = var5.useStateFromStoresObject;
                var1 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    _fun104709: for (var _fun104709_ip = 0;;) switch (_fun104709_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var9 = null;
                            var0 = var9 != var0;
                            var2 = null;
                            if (!var0) {
                                _fun104709_ip = 40;
                                continue _fun104709
                            }
                        case 18:
                            var3 = _closure1_slot5;
                            var1 = var3.getSubscriptionGroupListing;
                            var0 = _closure2_slot0;
                            var2 = var1.bind(var3)(var0);
                        case 40:
                            var1 = _closure1_slot7;
                            var3 = var9 == var2;
                            var7 = undefined;
                            var0 = undefined;
                            if (var3) {
                                _fun104709_ip = 64;
                                continue _fun104709
                            }
                        case 58:
                            var0 = var2.subscription_listings_ids;
                        case 64:
                            if (!(var9 == var0)) {
                                _fun104709_ip = 72;
                                continue _fun104709
                            }
                        case 68:
                            var0 = new Array(0);
                        case 72:
                            var6 = var1.bind(var7)(var0);
                            var1 = var6.bind(var7)();
                            var0 = var1.done;
                            var5 = 0;
                            var4 = var1;
                            var3 = undefined;
                            var1 = undefined;
                            var2 = null;
                            if (var0) {
                                _fun104709_ip = 185;
                                continue _fun104709
                            }
                        case 100:
                            var12 = var4.value;
                            var11 = _closure1_slot5;
                            var0 = var11.getSubscriptionListing;
                            var11 = var0.bind(var11)(var12);
                            var0 = var9 == var11;
                            var12 = undefined;
                            if (var0) {
                                _fun104709_ip = 144;
                                continue _fun104709
                            }
                        case 129:
                            var0 = var11.subscription_plans;
                            var0 = var0[var5];
                            var12 = var0.id;
                        case 144:
                            if (!(var9 != var12)) {
                                _fun104709_ip = 166;
                                continue _fun104709
                            }
                        case 148:
                            var0 = _closure2_slot2;
                            var3 = var0[var12];
                            var1 = var11;
                            var2 = var3;
                            if (!(var9 == var2)) {
                                _fun104709_ip = 185;
                                continue _fun104709
                            }
                        case 166:
                            var11 = var6.bind(var7)();
                            var0 = var11.done;
                            var4 = var11;
                            var1 = undefined;
                            var2 = null;
                            if (!var0) {
                                _fun104709_ip = 100;
                                continue _fun104709
                            }
                        case 185:
                            var0 = {};
                            var0.activeSubscription = var2;
                            var0.activeSubscriptionListing = var1;
                            return var0;
                    }
                };
                var1 = var3.bind(var5)(var2, var1);
                var3 = var1.activeSubscription;
                var2 = var1.activeSubscriptionListing;
                var5 = null;
                var7 = var5 == var2;
                var1 = undefined;
                if (var7) {
                    _fun104706_ip = 177;
                    continue _fun104706
                }
            case 165:
                var8 = var2.subscription_plans;
                var7 = 0;
                var1 = var8[var7];
            case 177:
                var8 = var5 == var1;
                var7 = undefined;
                if (var8) {
                    _fun104706_ip = 191;
                    continue _fun104706
                }
            case 186:
                var7 = var1.id;
            case 191:
                var _closure2_slot3 = var7;
                var7 = var5 == var1;
                var8 = undefined;
                if (var7) {
                    _fun104706_ip = 210;
                    continue _fun104706
                }
            case 204:
                var8 = var1.sku_id;
            case 210:
                var _closure2_slot4 = var8;
                var7 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var9];
                var10 = var7.bind(var6)(var1);
                var9 = var10.useStateFromStores;
                var1 = _closure1_slot3;
                var7 = new Array(1);
                var7[0] = var1;
                var1 = function() { // Environment: var0
                    _fun104710: for (var _fun104710_ip = 0;;) switch (_fun104710_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun104710_ip = 37;
                                continue _fun104710
                            }
                        case 16:
                            var3 = _closure1_slot3;
                            var2 = var3.get;
                            var1 = _closure2_slot3;
                            var0 = var2.bind(var3)(var1);
                        case 37:
                            return var0;
                    }
                };
                var1 = var9.bind(var10)(var7, var1);
                var _closure2_slot5 = var1;
                var5 = var5 == var2;
                var7 = undefined;
                if (var5) {
                    _fun104706_ip = 280;
                    continue _fun104706
                }
            case 274:
                var7 = var2.soft_deleted;
            case 280:
                var _closure2_slot6 = var7;
                var6 = _closure1_slot2;
                var5 = var6.useEffect;
                var4 = new Array(3);
                var4[0] = var1;
                var4[1] = var8;
                var4[2] = var7;
                var0 = function() { // Environment: var0
                    _fun104711: for (var _fun104711_ip = 0;;) switch (_fun104711_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            var3 = null;
                            var1 = var3 != var1;
                            if (var1) {
                                _fun104711_ip = 24;
                                continue _fun104711
                            }
                        case 16:
                            var2 = _closure2_slot4;
                            var1 = var3 == var2;
                        case 24:
                            if (var1) {
                                _fun104711_ip = 49;
                                continue _fun104711
                            }
                        case 27:
                            var4 = _closure1_slot3;
                            var3 = var4.isFetchingForSKU;
                            var2 = _closure2_slot4;
                            var1 = var3.bind(var4)(var2);
                        case 49:
                            if (var1) {
                                _fun104711_ip = 102;
                                continue _fun104711
                            }
                        case 52:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var1 = 7;
                            var1 = var3[var1];
                            var4 = undefined;
                            var3 = var2.bind(var4)(var1);
                            var2 = var3.fetchSubscriptionPlansForSKU;
                            var8 = _closure2_slot4;
                            var5 = _closure2_slot6;
                            var9 = var3;
                            var7 = undefined;
                            var6 = undefined;
                            var0 = var9[var2](var8, var7, var6, var5, var4);
                        case 102:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var5.bind(var6)(var0, var4);
                var0 = {};
                var0.activeSubscription = var3;
                var0.activeSubscriptionListing = var2;
                var0.activeSubscriptionPlanFromStore = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3077, 3078, 3046, 660, 566, 10712, 5590, 2]);