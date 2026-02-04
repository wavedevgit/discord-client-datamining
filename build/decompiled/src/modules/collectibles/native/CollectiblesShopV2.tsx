// modules/collectibles/native/CollectiblesShopV2.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun88462: for (var _fun88462_ip = 0;;) switch (_fun88462_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun88462_ip = 46;
                    continue _fun88462
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun88462_ip = 55;
                    continue _fun88462
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun88462_ip = 345;
                    continue _fun88462
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun88462_ip = 323;
                    continue _fun88462
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun88462_ip = 283;
                    continue _fun88462
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun88462_ip = 270;
                    continue _fun88462
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
                    _fun88462_ip = 163;
                    continue _fun88462
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun88462_ip = 179;
                    continue _fun88462
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun88462_ip = 249;
                    continue _fun88462
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun88462_ip = 249;
                    continue _fun88462
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun88462_ip = 234;
                    continue _fun88462
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun88462_ip = 247;
                    continue _fun88462
                }
            case 234:
                var8 = _closure1_slot21;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun88462_ip = 265;
                continue _fun88462;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun88462_ip = 283;
                continue _fun88462;
            case 270:
                var6 = _closure1_slot21;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun88462_ip = 323;
                    continue _fun88462
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
                    _fun88462_ip = 330;
                    continue _fun88462
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun88463: for (var _fun88463_ip = 0;;) switch (_fun88463_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun88463_ip = 56;
                                continue _fun88463
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
                            _fun88463_ip = 67;
                            continue _fun88463;
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
    var _closure1_slot20 = var0;
    var0 = function arg0, arg1() {
        _fun88464: for (var _fun88464_ip = 0;;) switch (_fun88464_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun88464_ip = 23;
                    continue _fun88464
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun88464_ip = 33;
                    continue _fun88464
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
                    _fun88464_ip = 70;
                    continue _fun88464
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun88464_ip = 55;
                    continue _fun88464
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot21 = var0;
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
    var7 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ActivityIndicator;
    var _closure1_slot5 = var7;
    var7 = var3.StyleSheet;
    var _closure1_slot6 = var7;
    var3 = var3.View;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.CollectiblesMobileShopScreen;
    var _closure1_slot12 = var6;
    var3 = var3.CollectibleShopTab;
    var _closure1_slot13 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot14 = var6;
    var3 = var3.PaymentGateways;
    var _closure1_slot15 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot16 = var6;
    var3 = var3.jsxs;
    var _closure1_slot17 = var3;
    var3 = 10;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'height': '100%',
        'width': '100%'
    };
    var3.rootContainer = var8;
    var8 = {
        'position': 'absolute',
        'top': 0,
        'zIndex': 5
    };
    var3.blur = var8;
    var8 = {};
    var9 = 48;
    var8.height = var9;
    var3.header = var8;
    var8 = {
        'position': 'absolute',
        'top': '50%',
        'left': '50%',
        'marginTop': 4294967288,
        'marginLeft': 4294967288
    };
    var3.spinner = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot18 = var3;
    var3 = function arg0() {
        _fun88465: for (var _fun88465_ip = 0;;) switch (_fun88465_ip) {
            case 0:
                var0 = arg0;
                var29 = var0.analyticsSource;
                var _closure2_slot0 = var29;
                var21 = var0.onClose;
                var1 = var0.storeFront;
                var17 = var0.screen;
                var _closure2_slot1 = var17;
                var6 = undefined;
                var _closure2_slot3 = var6;
                var _closure2_slot4 = var6;
                var _closure2_slot5 = var6;
                var _closure2_slot6 = var6;
                var _closure2_slot7 = var6;
                var _closure2_slot8 = var6;
                var _closure2_slot9 = var6;
                var _closure2_slot10 = var6;
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 11;
                var0 = var7[var0];
                var5 = var4.bind(var6)(var0);
                var2 = var5.useCommonTriggerPoint;
                var0 = 12;
                var0 = var7[var0];
                var0 = var4.bind(var6)(var0);
                var0 = var0.CollectiblesShopOpenTriggerPoint;
                var0 = var2.bind(var5)(var0);
                var2 = 13;
                var0 = var7[var2];
                var8 = var4.bind(var6)(var0);
                var5 = var8.useStateFromStoresArray;
                var0 = _closure1_slot11;
                var4 = new Array(1);
                var4[0] = var0;
                var0 = function() { // Environment: var20
                    _fun88466: for (var _fun88466_ip = 0;;) switch (_fun88466_ip) {
                        case 0:
                            var0 = _closure1_slot11;
                            var0 = var0.lastSuccessfulFetch;
                            var1 = null;
                            var2 = var1 != var0;
                            var1 = 0;
                            if (!var2) {
                                _fun88466_ip = 27;
                                continue _fun88466
                            }
                        case 24:
                            var1 = var0;
                        case 27:
                            var0 = new Array(1);
                            var0[0] = var1;
                            return var0;
                    }
                };
                var5 = var5.bind(var8)(var4, var0);
                var4 = _closure1_slot3;
                var0 = 1;
                var0 = var4.bind(var6)(var5, var0);
                var9 = 0;
                var4 = var0[var9];
                var5 = _closure1_slot1;
                var0 = 14;
                var0 = var7[var0];
                var5 = var5.bind(var6)(var0);
                var0 = 'shop_include_unpublished';
                var25 = var5.bind(var6)(var0);
                var _closure2_slot2 = var25;
                var0 = _closure1_slot18;
                var7 = var0.bind(var6)();
                var0 = null;
                var5 = var0 == var1;
                var11 = undefined;
                if (var5) {
                    _fun88465_ip = 241;
                    continue _fun88465
                }
            case 235:
                var11 = var1.country;
            case 241:
                var5 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 15;
                var1 = var8[var1];
                var10 = var5.bind(var6)(var1);
                var12 = _closure1_slot0;
                var1 = 16;
                var1 = var8[var1];
                var12 = var12.bind(var6)(var1);
                var1 = var12.v4;
                var1 = var1.bind(var12)();
                var12 = var10.bind(var6)(var1);
                _closure2_slot3 = var12;
                var14 = _closure1_slot4;
                var13 = var14.useMemo;
                var10 = new Array(2);
                var10[0] = var12;
                var10[1] = var17;
                var1 = function() { // Environment: var20
                    _fun88467: for (var _fun88467_ip = 0;;) switch (_fun88467_ip) {
                        case 0:
                            var0 = {};
                            var1 = _closure2_slot3;
                            var0.sessionId = var1;
                            var3 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 == var3)) {
                                _fun88467_ip = 39;
                                continue _fun88467
                            }
                        case 24:
                            var1 = _closure1_slot12;
                            var1 = var1.FEATURED_PAGE;
                            _fun88467_ip = 43;
                            continue _fun88467;
                        case 39:
                            var1 = _closure2_slot1;
                        case 43:
                            var0.tab = var1;
                            return var0;
                    }
                };
                var15 = var13.bind(var14)(var1, var10);
                var1 = 17;
                var1 = var8[var1];
                var5 = var5.bind(var6)(var1);
                var1 = {};
                var8 = _closure1_slot15;
                var8 = var8.APPLE;
                var1.paymentGateway = var8;
                if (!(var0 == var11)) {
                    _fun88465_ip = 367;
                    continue _fun88465
                }
            case 363:
                var8 = {};
                _fun88465_ip = 377;
                continue _fun88465;
            case 367:
                var10 = {};
                var10.countryCode = var11;
                var8 = var10;
            case 377:
                var34 = var1;
                var33 = var8;
                var8 = copyDataProperties(var34, var33);
                var8 = true;
                var10 = 'logPerf';
                var1[var10] = var8;
                var1 = var5.bind(var6)(var1, var15);
                var5 = var1.categories;
                _closure2_slot4 = var5;
                var14 = var1.isFetchingCategories;
                _closure2_slot5 = var14;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 18;
                var1 = var11[var1];
                var13 = var10.bind(var6)(var1);
                var11 = var13.useMaybeFetchCollectiblesShopHome;
                var1 = _closure1_slot12;
                var1 = var1.ORBS;
                if (!(var17 !== var1)) {
                    _fun88465_ip = 476;
                    continue _fun88465
                }
            case 464:
                var1 = _closure1_slot13;
                var10 = var1.HOME;
                _fun88465_ip = 486;
                continue _fun88465;
            case 476:
                var1 = _closure1_slot13;
                var10 = var1.ORBS;
            case 486:
                var1 = {
                    'includeUnpublished': null,
                    'includeBundles': true,
                    'logPerf': true
                };
                var1.includeUnpublished = var25;
                var10 = var11.bind(var13)(var10, var1, var15);
                var23 = var10.shopBlocks;
                var1 = var10.isFetchingShopHome;
                var24 = var10.fetchShopHomeError;
                _closure2_slot6 = var24;
                var15 = _closure1_slot4;
                var13 = var15.useMemo;
                var11 = new Array(2);
                var11[0] = var5;
                var11[1] = var14;
                var10 = function() { // Environment: var20
                    _fun88468: for (var _fun88468_ip = 0;;) switch (_fun88468_ip) {
                        case 0:
                            var2 = _closure2_slot5;
                            var0 = true;
                            if (!(var0 !== var2)) {
                                _fun88468_ip = 146;
                                continue _fun88468
                            }
                        case 18:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var0 = 19;
                            var0 = var4[var0];
                            var4 = undefined;
                            var3 = var3.bind(var4)(var0);
                            var0 = var3.isAndroid;
                            var3 = var0.bind(var3)();
                            var0 = false;
                            if (!(var0 !== var3)) {
                                _fun88468_ip = 146;
                                continue _fun88468
                            }
                        case 59:
                            var0 = new Array(0);
                            var _closure3_slot0 = var0;
                            var2 = _closure1_slot20;
                            var3 = _closure2_slot4;
                            var1 = var3.values;
                            var1 = var1.bind(var3)();
                            var3 = var2.bind(var4)(var1);
                            var2 = var3.bind(var4)();
                            var1 = var2.done;
                            if (var1) {
                                _fun88468_ip = 144;
                                continue _fun88468
                            }
                        case 101:
                            var1 = var2.value;
                            var7 = var1.products;
                            var6 = var7.forEach;
                            var1 = function(arg0) { // Environment: var5
                                _fun88469: for (var _fun88469_ip = 0;;) switch (_fun88469_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var2 = var1.googleSkuIds;
                                        var0 = undefined;
                                        var2 = var0 !== var2;
                                        if (!var2) {
                                            _fun88469_ip = 30;
                                            continue _fun88469
                                        }
                                    case 18:
                                        var4 = var1.googleSkuIds;
                                        var3 = null;
                                        var2 = var3 !== var4;
                                    case 30:
                                        if (!var2) {
                                            _fun88469_ip = 95;
                                            continue _fun88469
                                        }
                                    case 33:
                                        var3 = _closure3_slot0;
                                        var2 = var3.push;
                                        var4 = global;
                                        var5 = var4.Object;
                                        var4 = var5.values;
                                        var1 = var1.googleSkuIds;
                                        var7 = var4.bind(var5)(var1);
                                        var1 = new Array(0);
                                        var6 = 0;
                                        var8 = var1;
                                        var4 = arraySpread(var8, var7, var6);
                                        var8 = var2;
                                        var7 = var1;
                                        var6 = var3;
                                        var1 = apply(var8, var7, var6);
                                    case 95:
                                        return var0;
                                }
                            };
                            var1 = var6.bind(var7)(var1);
                            var6 = var3.bind(var4)();
                            var1 = var6.done;
                            var2 = var6;
                            if (!var1) {
                                _fun88468_ip = 101;
                                continue _fun88468
                            }
                        case 144:
                            return var0;
                        case 146:
                            var0 = new Array(0);
                            return var0;
                    }
                };
                var13 = var13.bind(var15)(var10, var11);
                var18 = _closure1_slot1;
                var30 = _closure1_slot2;
                var10 = 20;
                var10 = var30[var10];
                var11 = var18.bind(var6)(var10);
                var10 = var11.useGoogleSkuIds;
                var8 = var8 === var14;
                var8 = var10.bind(var11)(var13, var8);
                var15 = var8.isFetchingGoogleSkus;
                var10 = var8.fetchError;
                var26 = _closure1_slot0;
                var8 = 21;
                var8 = var30[var8];
                var11 = var26.bind(var6)(var8);
                var8 = var11.useCurrentUserIfAvailable;
                var16 = var8.bind(var11)();
                _closure2_slot7 = var16;
                var8 = 22;
                var8 = var30[var8];
                var11 = var26.bind(var6)(var8);
                var8 = var11.usePurchasedCategoriesSort;
                var27 = var8.bind(var11)(var5);
                var8 = var30[var2];
                var19 = var26.bind(var6)(var8);
                var13 = var19.useStateFromStores;
                var8 = _closure1_slot9;
                var11 = new Array(1);
                var11[0] = var8;
                var8 = function() { // Environment: var20
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 23;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.isThemeDark;
                    var0 = _closure1_slot9;
                    var0 = var0.theme;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var13.bind(var19)(var11, var8);
                _closure2_slot8 = var8;
                var2 = var30[var2];
                var13 = var26.bind(var6)(var2);
                var11 = var13.useStateFromStores;
                var2 = _closure1_slot8;
                var8 = new Array(1);
                var8[0] = var2;
                var2 = function() { // Environment: var20
                    var2 = _closure1_slot8;
                    var1 = var2.get;
                    var0 = 'bypass_google_sku_sync';
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var22 = var11.bind(var13)(var8, var2);
                var2 = 23;
                var2 = var30[var2];
                var8 = var26.bind(var6)(var2);
                var2 = var8.useThemeContext;
                var2 = var2.bind(var8)();
                var13 = var2.theme;
                var2 = 24;
                var8 = var30[var2];
                var11 = var18.bind(var6)(var8);
                var8 = 25;
                var8 = var30[var8];
                var8 = var18.bind(var6)(var8);
                var19 = var8.COLLECTIBLES_SHOP;
                var8 = new Array(1);
                var8[0] = var19;
                var8 = var11.bind(var6)(var8);
                var8 = var8.analyticsLocations;
                _closure2_slot9 = var8;
                var11 = 26;
                var11 = var30[var11];
                var19 = var18.bind(var6)(var11);
                var11 = {};
                var11.onClose = var21;
                var11.currentScreen = var17;
                var11 = var19.bind(var6)(var11);
                var11 = 27;
                var11 = var30[var11];
                var11 = var18.bind(var6)(var11);
                var11 = var11.bind(var6)();
                var19 = var11.top;
                var28 = 28;
                var11 = var30[var28];
                var21 = var26.bind(var6)(var11);
                var18 = var21.filterHiddenCategories;
                var11 = 19;
                var11 = var30[var11];
                var26 = var26.bind(var6)(var11);
                var11 = var26.isAndroid;
                var26 = var11.bind(var26)();
                var11 = var27;
                if (!var26) {
                    _fun88465_ip = 975;
                    continue _fun88465
                }
            case 929:
                var11 = var27;
                if (var22) {
                    _fun88465_ip = 975;
                    continue _fun88465
                }
            case 935:
                var11 = var27;
                if (var15) {
                    _fun88465_ip = 975;
                    continue _fun88465
                }
            case 941:
                var11 = var27;
                if (var14) {
                    _fun88465_ip = 975;
                    continue _fun88465
                }
            case 947:
                var26 = _closure1_slot0;
                var22 = _closure1_slot2;
                var22 = var22[var28];
                var26 = var26.bind(var6)(var22);
                var22 = var26.filterGPlaySyncedCategories;
                var11 = var22.bind(var26)(var27);
            case 975:
                var22 = var18.bind(var21)(var11);
                var11 = global;
                var18 = var11.Date;
                var11 = var18.now;
                var11 = var11.bind(var18)();
                var18 = var11 - var4;
                var21 = _closure1_slot0;
                var26 = _closure1_slot2;
                var11 = 29;
                var11 = var26[var11];
                var11 = var21.bind(var6)(var11);
                var11 = var11.COLLECTIBLES_STORE_LISTING_CACHE_DURATION;
                var18 = var18 > var11;
                var11 = 30;
                var11 = var26[var11];
                var26 = var21.bind(var6)(var11);
                var21 = var26.useCollectiblesShopDeepLinkProps;
                var11 = {};
                var11.categories = var22;
                var11 = var21.bind(var26)(var11);
                var21 = var11.categoryIndex;
                var28 = _closure1_slot4;
                var27 = var28.useRef;
                var26 = {};
                var30 = _closure1_slot12;
                var31 = var30.SHOP_ALL;
                var11 = false;
                var26[var31] = var11;
                var31 = var30.FEATURED_PAGE;
                var26[var31] = var11;
                var30 = var30.ORBS;
                var26[var30] = var11;
                var26 = var27.bind(var28)(var26);
                _closure2_slot10 = var26;
                var27 = var28.useEffect;
                var26 = new Array(5);
                var26[0] = var8;
                var26[1] = var29;
                var26[2] = var12;
                var26[3] = var25;
                var26[4] = var17;
                var25 = function() { // Environment: var20
                    _fun88472: for (var _fun88472_ip = 0;;) switch (_fun88472_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var7 = null;
                            var9 = var7 == var0;
                            if (var9) {
                                _fun88472_ip = 37;
                                continue _fun88472
                            }
                        case 16:
                            var1 = _closure2_slot1;
                            var0 = _closure1_slot12;
                            var0 = var0.FEATURED_PAGE;
                            var9 = var1 === var0;
                        case 37:
                            if (var9) {
                                _fun88472_ip = 61;
                                continue _fun88472
                            }
                        case 40:
                            var1 = _closure2_slot1;
                            var0 = _closure1_slot12;
                            var0 = var0.SHOP_ALL;
                            var9 = var1 === var0;
                        case 61:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 31;
                            var1 = var1[var0];
                            var0 = undefined;
                            var6 = var2.bind(var0)(var1);
                            var3 = var6.track;
                            var1 = _closure1_slot14;
                            var2 = var1.COLLECTIBLES_SHOP_VIEWED;
                            var1 = {};
                            var8 = _closure2_slot9;
                            var1.location_stack = var8;
                            var8 = _closure2_slot3;
                            var1.page_session_id = var8;
                            var8 = _closure2_slot0;
                            var1.source = var8;
                            var8 = 'home';
                            if (var9) {
                                _fun88472_ip = 140;
                                continue _fun88472
                            }
                        case 136:
                            var8 = _closure2_slot1;
                        case 140:
                            var1.page_type = var8;
                            var1 = var3.bind(var6)(var2, var1);
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var6 = 32;
                            var1 = var9[var6];
                            var3 = var8.bind(var0)(var1);
                            var2 = var3.trackShopPerf;
                            var1 = {};
                            var10 = _closure2_slot3;
                            var1.sessionId = var10;
                            var6 = var9[var6];
                            var6 = var8.bind(var0)(var6);
                            var6 = var6.CollectiblesShopPerfCheckpoint;
                            var6 = var6.SHOP_MOUNTED;
                            var1.checkpoint = var6;
                            var6 = _closure2_slot1;
                            if (!(var7 == var6)) {
                                _fun88472_ip = 234;
                                continue _fun88472
                            }
                        case 222:
                            var5 = _closure1_slot12;
                            var5 = var5.FEATURED_PAGE;
                            _fun88472_ip = 238;
                            continue _fun88472;
                        case 234:
                            var5 = _closure2_slot1;
                        case 238:
                            var1.tab = var5;
                            var4 = _closure2_slot2;
                            var1.unpublishedCategoriesShown = var4;
                            var4 = false;
                            var1.cacheDisabled = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var25 = var27.bind(var28)(var25, var26);
                var27 = var28.useEffect;
                var26 = new Array(1);
                var26[0] = var16;
                var25 = function() { // Environment: var20
                    _fun88473: for (var _fun88473_ip = 0;;) switch (_fun88473_ip) {
                        case 0:
                            var2 = _closure2_slot7;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun88473_ip = 52;
                                continue _fun88473
                            }
                        case 13:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 33;
                            var1 = var2[var1];
                            var2 = undefined;
                            var1 = var3.bind(var2)(var1);
                            var0 = _closure2_slot7;
                            var0 = var0.id;
                            var0 = var1.bind(var2)(var0);
                        case 52:
                            var0 = undefined;
                            return var0;
                    }
                };
                var25 = var27.bind(var28)(var25, var26);
                if (!(var0 != var16)) {
                    _fun88465_ip = 1986;
                    continue _fun88465
                }
            case 1201:
                var16 = var22.length;
                var16 = var9 === var16;
                if (var16) {
                    _fun88465_ip = 1216;
                    continue _fun88465
                }
            case 1213:
                var16 = var18;
            case 1216:
                var18 = _closure1_slot12;
                var18 = var18.FEATURED_PAGE;
                if (!(var17 !== var18)) {
                    _fun88465_ip = 1248;
                    continue _fun88465
                }
            case 1230:
                var18 = _closure1_slot12;
                var18 = var18.ORBS;
                if (!(var17 !== var18)) {
                    _fun88465_ip = 1248;
                    continue _fun88465
                }
            case 1244:
                if (!(var0 == var17)) {
                    _fun88465_ip = 1290;
                    continue _fun88465
                }
            case 1248:
                if (!var1) {
                    _fun88465_ip = 1290;
                    continue _fun88465
                }
            case 1251:
                var25 = _closure1_slot16;
                var18 = _closure1_slot5;
                var1 = {};
                var26 = var7.spinner;
                var1.style = var26;
                var26 = 'large';
                var1.size = var26;
                var1 = var25.bind(var6)(var18, var1);
                _fun88465_ip = 1984;
                continue _fun88465;
            case 1290:
                if (!var16) {
                    _fun88465_ip = 1305;
                    continue _fun88465
                }
            case 1293:
                if (var14) {
                    _fun88465_ip = 1947;
                    continue _fun88465
                }
            case 1299:
                if (var15) {
                    _fun88465_ip = 1947;
                    continue _fun88465
                }
            case 1305:
                var4 = var4 > var9;
                if (!var4) {
                    _fun88465_ip = 1316;
                    continue _fun88465
                }
            case 1312:
                var4 = var11 === var14;
            case 1316:
                if (!var4) {
                    _fun88465_ip = 1328;
                    continue _fun88465
                }
            case 1319:
                var5 = var5.size;
                var4 = var9 === var5;
            case 1328:
                if (!var4) {
                    _fun88465_ip = 1368;
                    continue _fun88465
                }
            case 1331:
                var5 = _closure1_slot1;
                var9 = _closure1_slot2;
                var4 = 34;
                var4 = var9[var4];
                var9 = var5.bind(var6)(var4);
                var5 = var9.captureMessage;
                var4 = 'collectibles mobile shop loaded empty categories';
                var4 = var5.bind(var9)(var4);
            case 1368:
                if (!(var0 !== var10)) {
                    _fun88465_ip = 1413;
                    continue _fun88465
                }
            case 1372:
                var5 = _closure1_slot1;
                var9 = _closure1_slot2;
                var4 = 34;
                var4 = var9[var4];
                var9 = var5.bind(var6)(var4);
                var5 = var9.captureMessage;
                var4 = 'collectibles mobile shop failed to fetch google sku ids: ';
                var4 = var4 + var10;
                var4 = var5.bind(var9)(var4);
            case 1413:
                var5 = _closure1_slot16;
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var2 = var16[var2];
                var2 = var15.bind(var6)(var2);
                var4 = var2.AnalyticsLocationProvider;
                var2 = {};
                var2.value = var8;
                var10 = _closure1_slot17;
                var8 = 35;
                var8 = var16[var8];
                var8 = var15.bind(var6)(var8);
                var9 = var8.CollectiblesAnalyticsProvider;
                var8 = {};
                var11 = {};
                var11.sessionId = var12;
                var8.newValue = var11;
                var12 = _closure1_slot1;
                var11 = 36;
                var11 = var16[var11];
                var12 = var12.bind(var6)(var11);
                var11 = {};
                var14 = 0.5;
                var11.blurAmount = var14;
                var14 = _closure1_slot6;
                var18 = var14.absoluteFill;
                var14 = new Array(3);
                var14[0] = var18;
                var18 = var7.blur;
                var14[1] = var18;
                var18 = {};
                var25 = 48;
                var25 = var25 + var19;
                var18.height = var25;
                var14[2] = var18;
                var11.style = var14;
                var11.blurTheme = var13;
                var12 = var5.bind(var6)(var12, var11);
                var11 = new Array(3);
                var11[0] = var12;
                var13 = _closure1_slot7;
                var12 = {};
                var14 = {};
                var33 = var7.rootContainer;
                var34 = var14;
                var18 = copyDataProperties(var34, var33);
                var18 = 'paddingTop';
                var14[var18] = var19;
                var12.style = var14;
                var14 = 37;
                var14 = var16[var14];
                var14 = var15.bind(var6)(var14);
                var15 = var14.NativePaymentContextProvider;
                var14 = {};
                var16 = new Array(0);
                var14.skuIDs = var16;
                var14.activeSubscription = var0;
                var16 = _closure1_slot12;
                var16 = var16.SHOP_ALL;
                if (!(var17 !== var16)) {
                    _fun88465_ip = 1800;
                    continue _fun88465
                }
            case 1668:
                var16 = _closure1_slot12;
                var16 = var16.ORBS;
                if (!(var17 !== var16)) {
                    _fun88465_ip = 1732;
                    continue _fun88465
                }
            case 1682:
                var18 = _closure1_slot16;
                var17 = _closure1_slot1;
                var19 = _closure1_slot2;
                var16 = 38;
                var16 = var19[var16];
                var17 = var17.bind(var6)(var16);
                var16 = {};
                var16.data = var23;
                var19 = function arg0() {
                    _fun88476: for (var _fun88476_ip = 0;;) switch (_fun88476_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = var0.item;
                            var1 = var0.index;
                            var0 = 0;
                            var0 = var0 !== var1;
                            if (var0) {
                                _fun88476_ip = 51;
                                continue _fun88476
                            }
                        case 22:
                            var1 = _closure2_slot10;
                            var2 = var1.current;
                            var1 = _closure1_slot12;
                            var1 = var1.FEATURED_PAGE;
                            var0 = var2[var1];
                        case 51:
                            if (var0) {
                                _fun88476_ip = 185;
                                continue _fun88476
                            }
                        case 57:
                            var0 = _closure2_slot10;
                            var6 = var0.current;
                            var5 = _closure1_slot12;
                            var2 = var5.FEATURED_PAGE;
                            var1 = true;
                            var6[var2] = var1;
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var6 = 32;
                            var0 = var9[var6];
                            var7 = undefined;
                            var2 = var8.bind(var7)(var0);
                            var1 = var2.trackShopPerf;
                            var0 = {};
                            var10 = _closure2_slot3;
                            var0.sessionId = var10;
                            var6 = var9[var6];
                            var6 = var8.bind(var7)(var6);
                            var6 = var6.CollectiblesShopPerfCheckpoint;
                            var6 = var6.SHOP_RENDERED;
                            var0.checkpoint = var6;
                            var5 = var5.FEATURED_PAGE;
                            var0.tab = var5;
                            var3 = _closure2_slot2;
                            var0.unpublishedCategoriesShown = var3;
                            var3 = false;
                            var0.cacheDisabled = var3;
                            var0 = var1.bind(var2)(var0);
                        case 185:
                            var3 = _closure1_slot16;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 41;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var0.shopBlock = var4;
                            var6 = _closure2_slot6;
                            var4 = null;
                            var6 = var4 != var6;
                            if (!var6) {
                                _fun88476_ip = 241;
                                continue _fun88476
                            }
                        case 237:
                            var4 = _closure2_slot6;
                        case 241:
                            var0.fetchShopHomeError = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                    }
                };
                var16.renderItem = var19;
                var16 = var18.bind(var6)(var17, var16);
                _fun88465_ip = 1798;
                continue _fun88465;
            case 1732:
                var19 = _closure1_slot16;
                var18 = _closure1_slot1;
                var25 = _closure1_slot2;
                var17 = 40;
                var17 = var25[var17];
                var18 = var18.bind(var6)(var17);
                var17 = {};
                var17.shopBlocks = var23;
                var25 = var0 != var24;
                var23 = null;
                if (!var25) {
                    _fun88465_ip = 1775;
                    continue _fun88465
                }
            case 1772:
                var23 = var24;
            case 1775:
                var17.fetchShopHomeError = var23;
                var23 = function() {
                    _fun88475: for (var _fun88475_ip = 0;;) switch (_fun88475_ip) {
                        case 0:
                            var0 = _closure2_slot10;
                            var2 = var0.current;
                            var1 = _closure1_slot12;
                            var1 = var1.ORBS;
                            var1 = var2[var1];
                            if (var1) {
                                _fun88475_ip = 157;
                                continue _fun88475
                            }
                        case 35:
                            var1 = _closure2_slot10;
                            var5 = var1.current;
                            var4 = _closure1_slot12;
                            var2 = var4.ORBS;
                            var1 = true;
                            var5[var2] = var1;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var5 = 32;
                            var0 = var8[var5];
                            var6 = undefined;
                            var2 = var7.bind(var6)(var0);
                            var1 = var2.trackShopPerf;
                            var0 = {};
                            var9 = _closure2_slot3;
                            var0.sessionId = var9;
                            var5 = var8[var5];
                            var5 = var7.bind(var6)(var5);
                            var5 = var5.CollectiblesShopPerfCheckpoint;
                            var5 = var5.SHOP_RENDERED;
                            var0.checkpoint = var5;
                            var4 = var4.ORBS;
                            var0.tab = var4;
                            var3 = _closure2_slot2;
                            var0.unpublishedCategoriesShown = var3;
                            var3 = false;
                            var0.cacheDisabled = var3;
                            var0 = var1.bind(var2)(var0);
                        case 157:
                            var0 = undefined;
                            return var0;
                    }
                };
                var17.onRenderFirstOrbsItem = var23;
                var16 = var19.bind(var6)(var18, var17);
            case 1798:
                _fun88465_ip = 1865;
                continue _fun88465;
            case 1800:
                var19 = _closure1_slot16;
                var18 = _closure1_slot1;
                var23 = _closure1_slot2;
                var17 = 38;
                var17 = var23[var17];
                var18 = var18.bind(var6)(var17);
                var17 = {};
                var17.data = var22;
                var20 = function arg0() {
                    _fun88474: for (var _fun88474_ip = 0;;) switch (_fun88474_ip) {
                        case 0:
                            var0 = arg0;
                            var5 = var0.item;
                            var4 = var0.index;
                            var0 = 0;
                            var0 = var0 !== var4;
                            if (var0) {
                                _fun88474_ip = 51;
                                continue _fun88474
                            }
                        case 22:
                            var1 = _closure2_slot10;
                            var2 = var1.current;
                            var1 = _closure1_slot12;
                            var1 = var1.SHOP_ALL;
                            var0 = var2[var1];
                        case 51:
                            if (var0) {
                                _fun88474_ip = 185;
                                continue _fun88474
                            }
                        case 57:
                            var0 = _closure2_slot10;
                            var7 = var0.current;
                            var6 = _closure1_slot12;
                            var2 = var6.SHOP_ALL;
                            var1 = true;
                            var7[var2] = var1;
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var7 = 32;
                            var0 = var10[var7];
                            var8 = undefined;
                            var2 = var9.bind(var8)(var0);
                            var1 = var2.trackShopPerf;
                            var0 = {};
                            var11 = _closure2_slot3;
                            var0.sessionId = var11;
                            var7 = var10[var7];
                            var7 = var9.bind(var8)(var7);
                            var7 = var7.CollectiblesShopPerfCheckpoint;
                            var7 = var7.SHOP_RENDERED;
                            var0.checkpoint = var7;
                            var6 = var6.SHOP_ALL;
                            var0.tab = var6;
                            var3 = _closure2_slot2;
                            var0.unpublishedCategoriesShown = var3;
                            var3 = false;
                            var0.cacheDisabled = var3;
                            var0 = var1.bind(var2)(var0);
                        case 185:
                            var3 = _closure1_slot16;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 39;
                            var0 = var2[var0];
                            var2 = undefined;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.ShopCategory;
                            var0 = {};
                            var0.item = var5;
                            var5 = _closure2_slot8;
                            var0.isDarkTheme = var5;
                            var0.index = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                    }
                };
                var17.renderItem = var20;
                var22 = var0 != var21;
                var20 = undefined;
                if (!var22) {
                    _fun88465_ip = 1854;
                    continue _fun88465
                }
            case 1851:
                var20 = var21;
            case 1854:
                var17.initialScrollIndex = var20;
                var16 = var19.bind(var6)(var18, var17);
            case 1865:
                var14.children = var16;
                var14 = var5.bind(var6)(var15, var14);
                var12.children = var14;
                var12 = var5.bind(var6)(var13, var12);
                var11[1] = var12;
                var14 = _closure1_slot16;
                var13 = _closure1_slot1;
                var15 = _closure1_slot2;
                var12 = 42;
                var12 = var15[var12];
                var13 = var13.bind(var6)(var12);
                var12 = {};
                var12 = var14.bind(var6)(var13, var12);
                var11[2] = var12;
                var8.children = var11;
                var8 = var10.bind(var6)(var9, var8);
                var2.children = var8;
                var2 = var5.bind(var6)(var4, var2);
                _fun88465_ip = 1981;
                continue _fun88465;
            case 1947:
                var5 = _closure1_slot16;
                var4 = _closure1_slot5;
                var3 = {};
                var7 = var7.spinner;
                var3.style = var7;
                var7 = 'large';
                var3.size = var7;
                var2 = var5.bind(var6)(var4, var3);
            case 1981:
                var1 = var2;
            case 1984:
                return var1;
            case 1986:
                return var0;
        }
    };
    var _closure1_slot19 = var3;
    var1 = function arg0() {
        _fun88477: for (var _fun88477_ip = 0;;) switch (_fun88477_ip) {
            case 0:
                var5 = arg0;
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 20;
                var2 = var8[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = var3.useNativeIAPPayments;
                var2 = var2.bind(var3)();
                var6 = var2.nativePaymentsConnected;
                var _closure2_slot0 = var6;
                var7 = var2.storeFront;
                var2 = _closure1_slot18;
                var10 = var2.bind(var4)();
                var3 = _closure1_slot0;
                var2 = 13;
                var2 = var8[var2];
                var9 = var3.bind(var4)(var2);
                var8 = var9.useStateFromStores;
                var2 = _closure1_slot10;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    var1 = _closure1_slot10;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var9 = var8.bind(var9)(var3, var2);
                var2 = null;
                var3 = var2 == var9;
                var8 = undefined;
                if (var3) {
                    _fun88477_ip = 131;
                    continue _fun88477
                }
            case 121:
                var3 = var9.isStaff;
                var8 = var3.bind(var9)();
            case 131:
                if (var8) {
                    _fun88477_ip = 156;
                    continue _fun88477
                }
            case 134:
                var3 = var2 == var9;
                var2 = undefined;
                if (var3) {
                    _fun88477_ip = 153;
                    continue _fun88477
                }
            case 143:
                var3 = var9.isStaffPersonal;
                var2 = var3.bind(var9)();
            case 153:
                var8 = var2;
            case 156:
                var11 = _closure1_slot4;
                var3 = var11.useState;
                var2 = false;
                var9 = var3.bind(var11)(var2);
                var3 = _closure1_slot3;
                var2 = 2;
                var9 = var3.bind(var4)(var9, var2);
                var2 = 0;
                var3 = var9[var2];
                var2 = 1;
                var2 = var9[var2];
                var _closure2_slot1 = var2;
                var9 = var11.useEffect;
                var2 = new Array(1);
                var2[0] = var6;
                var0 = function() { // Environment: var0
                    _fun88479: for (var _fun88479_ip = 0;;) switch (_fun88479_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = undefined;
                            if (var2) {
                                _fun88479_ip = 54;
                                continue _fun88479
                            }
                        case 14:
                            var2 = global;
                            var4 = var2.setTimeout;
                            var3 = function() { // Environment: var1
                                _fun88480: for (var _fun88480_ip = 0;;) switch (_fun88480_ip) {
                                    case 0:
                                        var1 = _closure2_slot0;
                                        if (var1) {
                                            _fun88480_ip = 23;
                                            continue _fun88480
                                        }
                                    case 10:
                                        var2 = _closure2_slot1;
                                        var1 = undefined;
                                        var0 = true;
                                        var0 = var2.bind(var1)(var0);
                                    case 23:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var2 = 10000;
                            var2 = var4.bind(var0)(var3, var2);
                            var _closure3_slot0 = var2;
                            var1 = function() { // Environment: var1
                                var0 = global;
                                var2 = var0.clearTimeout;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            return var1;
                        case 54:
                            return var0;
                    }
                };
                var0 = var9.bind(var11)(var0, var2);
                var9 = _closure1_slot0;
                var0 = _closure1_slot2;
                var2 = 19;
                var0 = var0[var2];
                var9 = var9.bind(var4)(var0);
                var0 = var9.isIOS;
                var0 = var0.bind(var9)();
                if (!var0) {
                    _fun88477_ip = 290;
                    continue _fun88477
                }
            case 261:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var9 = 43;
                var9 = var12[var9];
                var9 = var11.bind(var4)(var9);
                var9 = var9.isStable;
                var0 = !var9;
            case 290:
                if (!var0) {
                    _fun88477_ip = 296;
                    continue _fun88477
                }
            case 293:
                var0 = var8;
            case 296:
                if (var6) {
                    _fun88477_ip = 344;
                    continue _fun88477
                }
            case 299:
                if (var0) {
                    _fun88477_ip = 344;
                    continue _fun88477
                }
            case 302:
                if (var3) {
                    _fun88477_ip = 344;
                    continue _fun88477
                }
            case 305:
                var9 = _closure1_slot16;
                var8 = _closure1_slot5;
                var0 = {};
                var10 = var10.spinner;
                var0.style = var10;
                var10 = 'large';
                var0.size = var10;
                var0 = var9.bind(var4)(var8, var0);
                _fun88477_ip = 499;
                continue _fun88477;
            case 344:
                if (!var3) {
                    _fun88477_ip = 350;
                    continue _fun88477
                }
            case 347:
                var3 = !var6;
            case 350:
                if (!var3) {
                    _fun88477_ip = 449;
                    continue _fun88477
                }
            case 353:
                var6 = _closure1_slot1;
                var10 = _closure1_slot2;
                var3 = 34;
                var3 = var10[var3];
                var6 = var6.bind(var4)(var3);
                var3 = var6.captureMessage;
                var8 = _closure1_slot0;
                var2 = var10[var2];
                var9 = var8.bind(var4)(var2);
                var2 = var9.isIOS;
                var9 = var2.bind(var9)();
                var2 = 'collectibles mobile shop failed to connect to native payments isIOS: ';
                var9 = var2 + var9;
                var2 = 43;
                var2 = var10[var2];
                var2 = var8.bind(var4)(var2);
                var8 = var2.isStable;
                var2 = ' isStable: ';
                var2 = var9 + var2;
                var2 = var2 + var8;
                var2 = var3.bind(var6)(var2);
            case 449:
                var3 = _closure1_slot16;
                var2 = _closure1_slot19;
                var1 = {};
                var14 = var1;
                var13 = var5;
                var6 = copyDataProperties(var14, var13);
                var6 = 'storeFront';
                var1[var6] = var7;
                var6 = var5.screen;
                var5 = 'screen';
                var1[var5] = var6;
                var0 = var3.bind(var4)(var2, var1);
            case 499:
                return var0;
        }
    };
    var3 = 44;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/CollectiblesShopV2.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    var2.CollectiblesShopV2 = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 4005, 3196, 1621, 4598, 3283, 660, 33, 1297, 11461, 11462, 566, 4592, 4928, 491, 5727, 11463, 478, 10817, 9500, 11465, 3206, 5726, 5579, 11466, 1568, 11263, 5732, 11469, 795, 4654, 6957, 1207, 11359, 4072, 11251, 11470, 11472, 11477, 11494, 11495, 4262, 2]);