// modules/collectibles/CollectiblesActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var19 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var20 = dependencyMap;
    var _closure1_slot0 = var19;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var20;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var3
        _fun41775: for (var _fun41775_ip = 0;;) switch (_fun41775_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun41775_ip = 45;
                    continue _fun41775
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun41775_ip = 54;
                    continue _fun41775
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun41775_ip = 342;
                    continue _fun41775
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun41775_ip = 322;
                    continue _fun41775
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun41775_ip = 282;
                    continue _fun41775
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun41775_ip = 269;
                    continue _fun41775
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
                    _fun41775_ip = 162;
                    continue _fun41775
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun41775_ip = 178;
                    continue _fun41775
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun41775_ip = 248;
                    continue _fun41775
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun41775_ip = 248;
                    continue _fun41775
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun41775_ip = 233;
                    continue _fun41775
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun41775_ip = 246;
                    continue _fun41775
                }
            case 233:
                var8 = _closure1_slot24;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun41775_ip = 264;
                continue _fun41775;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun41775_ip = 282;
                continue _fun41775;
            case 269:
                var6 = _closure1_slot24;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun41775_ip = 322;
                    continue _fun41775
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
                    _fun41775_ip = 329;
                    continue _fun41775
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun41776: for (var _fun41776_ip = 0;;) switch (_fun41776_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun41776_ip = 56;
                                continue _fun41776
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
                            _fun41776_ip = 67;
                            continue _fun41776;
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
    var _closure1_slot23 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var3
        _fun41777: for (var _fun41777_ip = 0;;) switch (_fun41777_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun41777_ip = 23;
                    continue _fun41777
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun41777_ip = 33;
                    continue _fun41777
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
                    _fun41777_ip = 70;
                    continue _fun41777
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun41777_ip = 55;
                    continue _fun41777
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = global;
    var6 = var0.Object;
    var4 = var6.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var6)(var2, var0, var1);
    var1 = 0;
    var4 = var20[var1];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var20[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var20[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var20[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var20[var4];
    var4 = var19.bind(var0)(var4);
    var4 = var4.addDebugLog;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var20[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var20[var4];
    var4 = var19.bind(var0)(var4);
    var4 = var4.CollectiblesCategoriesRecord;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var20[var4];
    var4 = var19.bind(var0)(var4);
    var4 = var4.CollectiblesMarketingsRecord;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var20[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var20[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var20[var4];
    var4 = var19.bind(var0)(var4);
    var4 = var4.CollectiblesShopHomeRecord;
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var20[var4];
    var4 = var19.bind(var0)(var4);
    var4 = var4.CollectiblesMobileShopScreen;
    var _closure1_slot14 = var4;
    var4 = 12;
    var4 = var20[var4];
    var4 = var19.bind(var0)(var4);
    var5 = var4.Endpoints;
    var _closure1_slot15 = var5;
    var5 = var4.Routes;
    var4 = var4.UserSettingsSections;
    var _closure1_slot16 = var4;
    var4 = 13;
    var4 = var20[var4];
    var4 = var19.bind(var0)(var4);
    var4 = 14;
    var4 = var20[var4];
    var4 = var19.bind(var0)(var4);
    var4 = 15;
    var4 = var20[var4];
    var4 = var19.bind(var0)(var4);
    var _closure1_slot17 = var1;
    var16 = function(arg0) { // Original name: openCollectiblesShop, environment: var3
        var2 = arg0;
        var0 = var2.tab;
        var0 = null;
        var1 = Object.create(var0);
        var0 = 0;
        var1.tab = var0;
        var5 = {};
        var4 = var2;
        var3 = var1;
        var2 = copyDataProperties(var5, var4, var3);
        var1 = _closure1_slot18;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var15 = function(arg0) { // Original name: openCollectiblesShopMobile, environment: var3
        _fun41779: for (var _fun41779_ip = 0;;) switch (_fun41779_ip) {
            case 0:
                var5 = arg0;
                var1 = _closure1_slot20;
                var0 = undefined;
                var1 = var1.bind(var0)(var5);
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 16;
                var1 = var3[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.getRootNavigationRef;
                var3 = var1.bind(var2)();
                var7 = null;
                if (!(var7 != var3)) {
                    _fun41779_ip = 255;
                    continue _fun41779
                }
            case 56:
                var1 = var3.isReady;
                var1 = var1.bind(var3)();
                if (!var1) {
                    _fun41779_ip = 255;
                    continue _fun41779
                }
            case 72:
                var2 = var5.screen;
                if (!(var7 == var2)) {
                    _fun41779_ip = 92;
                    continue _fun41779
                }
            case 82:
                var1 = _closure1_slot14;
                var2 = var1.FEATURED_PAGE;
            case 92:
                var1 = var3.getCurrentRoute;
                var4 = var1.bind(var3)();
                var8 = var7 == var4;
                var1 = undefined;
                if (var8) {
                    _fun41779_ip = 132;
                    continue _fun41779
                }
            case 111:
                var4 = var4.params;
                var8 = var7 == var4;
                var1 = undefined;
                if (var8) {
                    _fun41779_ip = 132;
                    continue _fun41779
                }
            case 126:
                var1 = var4.screen;
            case 132:
                if (!(var1 !== var2)) {
                    _fun41779_ip = 255;
                    continue _fun41779
                }
            case 136:
                var4 = {};
                var1 = _closure1_slot16;
                var1 = var1.COLLECTIBLES_SHOP;
                var4.screen = var1;
                var1 = {};
                var5 = var5.analyticsSource;
                var1.analyticsSource = var5;
                var1.screen = var2;
                var4.params = var1;
                var1 = _closure1_slot19;
                var8 = var1.bind(var0)(var3, var2);
                var2 = var3.navigate;
                var1 = {};
                var5 = 'settings';
                var1.name = var5;
                var9 = var7 == var8;
                var5 = undefined;
                if (var9) {
                    _fun41779_ip = 216;
                    continue _fun41779
                }
            case 211:
                var5 = var8.key;
            case 216:
                if (!(var7 == var5)) {
                    _fun41779_ip = 241;
                    continue _fun41779
                }
            case 220:
                var7 = _closure1_slot17;
                var7 = var7 + 1;
                _closure1_slot17 = var7;
                var6 = 'collectibles-shop-';
                var5 = var6 + var7;
            case 241:
                var1.key = var5;
                var1.params = var4;
                var1 = var2.bind(var3)(var1);
            case 255:
                return var0;
        }
    };
    var _closure1_slot18 = var15;
    var1 = function(arg0, arg1) { // Original name: findExistingCollectiblesShopRoute, environment: var3
        _fun41780: for (var _fun41780_ip = 0;;) switch (_fun41780_ip) {
            case 0:
                var1 = arg0;
                var0 = arg1;
                var _closure2_slot0 = var0;
                var0 = var1.getRootState;
                var1 = var0.bind(var1)();
                var0 = null;
                if (!(var0 != var1)) {
                    _fun41780_ip = 70;
                    continue _fun41780
                }
            case 28:
                var3 = var1.routes;
                if (!var3) {
                    _fun41780_ip = 70;
                    continue _fun41780
                }
            case 37:
                var3 = function(arg0) { // Original name: isCollectiblesShopRoute, environment: var2
                    _fun41781: for (var _fun41781_ip = 0;;) switch (_fun41781_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = var1.name;
                            var0 = 'settings';
                            var0 = var0 === var2;
                            if (!var0) {
                                _fun41781_ip = 59;
                                continue _fun41781
                            }
                        case 19:
                            var2 = var1.params;
                            var3 = null;
                            var4 = var3 == var2;
                            var3 = undefined;
                            if (var4) {
                                _fun41781_ip = 42;
                                continue _fun41781
                            }
                        case 36:
                            var3 = var2.screen;
                        case 42:
                            var2 = _closure1_slot16;
                            var2 = var2.COLLECTIBLES_SHOP;
                            var0 = var3 === var2;
                        case 59:
                            if (!var0) {
                                _fun41781_ip = 111;
                                continue _fun41781
                            }
                        case 62:
                            var1 = var1.params;
                            var3 = null;
                            var5 = var3 == var1;
                            var2 = undefined;
                            if (var5) {
                                _fun41781_ip = 100;
                                continue _fun41781
                            }
                        case 79:
                            var1 = var1.params;
                            var3 = var3 == var1;
                            var2 = undefined;
                            if (var3) {
                                _fun41781_ip = 100;
                                continue _fun41781
                            }
                        case 94:
                            var2 = var1.screen;
                        case 100:
                            var1 = _closure2_slot0;
                            var0 = var2 === var1;
                        case 111:
                            return var0;
                    }
                };
                var _closure2_slot1 = var3;
                var3 = function(arg0) { // Original name: searchRoutes, environment: var2
                    _fun41782: for (var _fun41782_ip = 0;;) switch (_fun41782_ip) {
                        case 0:
                            var1 = _closure1_slot23;
                            var8 = undefined;
                            var0 = arg0;
                            var7 = var1.bind(var8)(var0);
                            var2 = var7.bind(var8)();
                            var1 = var2.done;
                            var0 = null;
                            var5 = var2;
                            var4 = undefined;
                            if (var1) {
                                _fun41782_ip = 130;
                                continue _fun41782
                            }
                        case 39:
                            var1 = var5.value;
                            var2 = _closure2_slot1;
                            var2 = var2.bind(var8)(var1);
                            if (var2) {
                                _fun41782_ip = 128;
                                continue _fun41782
                            }
                        case 56:
                            var2 = var1.state;
                            var9 = var4;
                            if (!(var0 != var2)) {
                                _fun41782_ip = 106;
                                continue _fun41782
                            }
                        case 68:
                            var2 = var2.routes;
                            var9 = var4;
                            if (!var2) {
                                _fun41782_ip = 106;
                                continue _fun41782
                            }
                        case 80:
                            var3 = _closure2_slot2;
                            var2 = var1.state;
                            var2 = var2.routes;
                            var2 = var3.bind(var8)(var2);
                            var9 = var2;
                            if (var9) {
                                _fun41782_ip = 126;
                                continue _fun41782
                            }
                        case 106:
                            var10 = var7.bind(var8)();
                            var3 = var10.done;
                            var4 = var9;
                            var5 = var10;
                            if (var3) {
                                _fun41782_ip = 130;
                                continue _fun41782
                            }
                        case 124:
                            _fun41782_ip = 39;
                            continue _fun41782;
                        case 126:
                            return var2;
                        case 128:
                            return var1;
                        case 130:
                            return var0;
                    }
                };
                var _closure2_slot2 = var3;
                var2 = var1.routes;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            case 70:
                return var0;
        }
    };
    var _closure1_slot19 = var1;
    var14 = function(arg0) { // Original name: dispatchOpenCollectiblesShop, environment: var3
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 17;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'COLLECTIBLES_SHOP_OPEN';
        var1.type = var4;
        var5 = arg0;
        var6 = var1;
        var4 = copyDataProperties(var6, var5);
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot20 = var14;
    var13 = function() { // Original name: closeCollectiblesShop, environment: var3
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var0 = 17;
        var2 = var3[var0];
        var0 = undefined;
        var5 = var4.bind(var0)(var2);
        var4 = var5.dispatch;
        var2 = {};
        var6 = 'COLLECTIBLES_SHOP_CLOSE';
        var2.type = var6;
        var2 = var4.bind(var5)(var2);
        var2 = _closure1_slot0;
        var1 = 18;
        var1 = var3[var1];
        var2 = var2.bind(var0)(var1);
        var1 = var2.popLayer;
        var1 = var1.bind(var2)();
        return var0;
    };
    var1 = function(arg0, arg1) { // Original name: areOptionalBooleansEqual, environment: var3
        var0 = global;
        var2 = var0.Boolean;
        var3 = undefined;
        var1 = arg0;
        var1 = var2.bind(var3)(var1);
        var2 = var0.Boolean;
        var0 = arg1;
        var0 = var2.bind(var3)(var0);
        var0 = var1 === var0;
        return var0;
    };
    var _closure1_slot21 = var1;
    var1 = function() { // Environment: var3
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0, arg1, arg2) { // Environment: var0
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun41788: for (var _fun41788_ip = 0;;) switch (_fun41788_ip) {
                    case 0:
                        StartGenerator();
                        var12 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun41788_ip = 976;
                            continue _fun41788
                        }
                    case 13:
                        var13 = var12;
                        var10 = arg1;
                        var15 = arg2;
                        var1 = undefined;
                        var9 = undefined;
                        var4 = undefined;
                        var11 = undefined;
                        var2 = undefined;
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var7 = 17;
                        var5 = var5[var7];
                        var8 = var6.bind(var1)(var5);
                        var6 = var8.dispatch;
                        var5 = {};
                        var14 = 'COLLECTIBLES_CATEGORIES_FETCH';
                        var5.type = var14;
                        var14 = null;
                        if (!(var14 == var12)) {
                            _fun41788_ip = 82;
                            continue _fun41788
                        }
                    case 78:
                        var12 = {};
                        _fun41788_ip = 85;
                        continue _fun41788;
                    case 82:
                        var12 = var13;
                    case 85:
                        var5.options = var12;
                        var5 = var6.bind(var8)(var5);
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var5 = 19;
                        var5 = var8[var5];
                        var8 = var6.bind(var1)(var5);
                        var6 = var8.buildFetchCollectiblesOptionsQuery;
                        var5 = var13;
                        var9 = var6.bind(var8)(var5);
                        var12 = _closure1_slot4;
                        var8 = var12.get;
                        var6 = 'shop_show_debug_overlay';
                        var4 = var8.bind(var12)(var6);
                        var5 = var14 != var5;
                        if (!var5) {
                            _fun41788_ip = 164;
                            continue _fun41788
                        }
                    case 155:
                        var6 = var13;
                        var5 = var6.logPerf;
                    case 164:
                        if (!var5) {
                            _fun41788_ip = 341;
                            continue _fun41788
                        }
                    case 170:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var17 = 20;
                        var5 = var5[var17];
                        var8 = var6.bind(var1)(var5);
                        var6 = var8.trackShopPerf;
                        var5 = {};
                        var12 = var15;
                        var16 = var14 == var12;
                        var12 = undefined;
                        if (var16) {
                            _fun41788_ip = 219;
                            continue _fun41788
                        }
                    case 210:
                        var16 = var15;
                        var12 = var16.sessionId;
                    case 219:
                        var5.sessionId = var12;
                        var16 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var12 = var12[var17];
                        var12 = var16.bind(var1)(var12);
                        var12 = var12.CollectiblesShopPerfCheckpoint;
                        var12 = var12.CATEGORIES_FETCH_STARTED;
                        var5.checkpoint = var12;
                        var12 = var15;
                        var16 = var14 == var12;
                        var12 = undefined;
                        if (var16) {
                            _fun41788_ip = 279;
                            continue _fun41788
                        }
                    case 270:
                        var16 = var15;
                        var12 = var16.tab;
                    case 279:
                        var5.tab = var12;
                        var12 = var13;
                        var16 = var14 == var12;
                        var12 = undefined;
                        if (var16) {
                            _fun41788_ip = 305;
                            continue _fun41788
                        }
                    case 296:
                        var16 = var13;
                        var12 = var16.includeUnpublished;
                    case 305:
                        var5.unpublishedCategoriesShown = var12;
                        var12 = var13;
                        var16 = var14 == var12;
                        var12 = undefined;
                        if (var16) {
                            _fun41788_ip = 331;
                            continue _fun41788
                        }
                    case 322:
                        var16 = var13;
                        var12 = var16.noCache;
                    case 331:
                        var5.cacheDisabled = var12;
                        var5 = var6.bind(var8)(var5);
                    case 341:
                        var5 = var4;
                        if (!var5) {
                            _fun41788_ip = 405;
                            continue _fun41788
                        }
                    case 347:
                        var6 = _closure1_slot7;
                        var5 = global;
                        var17 = var5.JSON;
                        var16 = var17.stringify;
                        var12 = var9;
                        var8 = 2;
                        var12 = var16.bind(var17)(var12, var14, var8);
                        var5 = var5.HermesInternal;
                        var8 = var5.concat;
                        var5 = 'fetchCollectiblesCategories started: ';
                        var5 = var8.bind(var5)(var12);
                        var5 = var6.bind(var1)(var5);
                    case 405: // try_start_0
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var5 = 21;
                        var5 = var8[var5];
                        var5 = var6.bind(var1)(var5);
                        var8 = var5.HTTP;
                        var6 = var8.get;
                        var5 = {};
                        var12 = _closure1_slot15;
                        var12 = var12.COLLECTIBLES_CATEGORIES_V2;
                        var5.url = var12;
                        var5.query = var9;
                        var9 = true;
                        var5.rejectWithError = var9;
                        var5 = var6.bind(var8)(var5);
                        SaveGenerator(address = 471);
                    case 469:
                        return var5;
                    case 471:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 6);
                        if (var6) {
                            _fun41788_ip = 813;
                            continue _fun41788
                        }
                    case 480:
                        var11 = var5;
                        var8 = var13;
                        var8 = var14 != var8;
                        var6 = var8;
                        if (!var8) {
                            _fun41788_ip = 505;
                            continue _fun41788
                        }
                    case 496:
                        var8 = var13;
                        var6 = var8.logPerf;
                    case 505:
                        if (!var6) {
                            _fun41788_ip = 676;
                            continue _fun41788
                        }
                    case 511:
                        var8 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var17 = 20;
                        var6 = var6[var17];
                        var9 = var8.bind(var1)(var6);
                        var8 = var9.trackShopPerf;
                        var6 = {};
                        var12 = var15;
                        var16 = var14 == var12;
                        var12 = undefined;
                        if (var16) {
                            _fun41788_ip = 560;
                            continue _fun41788
                        }
                    case 551:
                        var16 = var15;
                        var12 = var16.sessionId;
                    case 560:
                        var6.sessionId = var12;
                        var16 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var12 = var12[var17];
                        var12 = var16.bind(var1)(var12);
                        var12 = var12.CollectiblesShopPerfCheckpoint;
                        var12 = var12.CATEGORIES_FETCH_COMPLETED;
                        var6.checkpoint = var12;
                        var12 = var15;
                        var16 = var14 == var12;
                        var12 = undefined;
                        if (var16) {
                            _fun41788_ip = 617;
                            continue _fun41788
                        }
                    case 611:
                        var12 = var15.tab;
                    case 617:
                        var6.tab = var12;
                        var12 = var13;
                        var15 = var14 == var12;
                        var12 = undefined;
                        if (var15) {
                            _fun41788_ip = 643;
                            continue _fun41788
                        }
                    case 634:
                        var15 = var13;
                        var12 = var15.includeUnpublished;
                    case 643:
                        var6.unpublishedCategoriesShown = var12;
                        var12 = var13;
                        var14 = var14 == var12;
                        var12 = undefined;
                        if (var14) {
                            _fun41788_ip = 666;
                            continue _fun41788
                        }
                    case 660:
                        var12 = var13.noCache;
                    case 666:
                        var6.cacheDisabled = var12;
                        var6 = var8.bind(var9)(var6);
                    case 676:
                        var6 = var4;
                        if (!var6) {
                            _fun41788_ip = 741;
                            continue _fun41788
                        }
                    case 682:
                        var8 = _closure1_slot7;
                        var6 = var11;
                        var6 = var6.body;
                        var6 = var6.categories;
                        var13 = var6.length;
                        var6 = global;
                        var6 = var6.HermesInternal;
                        var12 = var6.concat;
                        var9 = 'fetchCollectiblesCategories completed ';
                        var6 = ' categories';
                        var6 = var12.bind(var9)(var13, var6);
                        var6 = var8.bind(var1)(var6);
                    case 741:
                        var8 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var7];
                        var9 = var8.bind(var1)(var6);
                        var8 = var9.dispatch;
                        var6 = {};
                        var12 = 'COLLECTIBLES_CATEGORIES_FETCH_SUCCESS';
                        var6.type = var12;
                        var13 = _closure1_slot9;
                        var12 = var13.fromServer;
                        var11 = var11.body;
                        var11 = var12.bind(var13)(var11);
                        var6.categories = var11;
                        var6.noOp = var10;
                        var6 = var8.bind(var9)(var6);
                    case 808: // try_end0
                        _fun41788_ip = 973;
                        continue _fun41788;
                    case 813:
                        return var5;
                    case 816: // catch_target0
                        CatchBlockStart(arg_register = 10);
                        var9 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var6 = 22;
                        var6 = var5[var6];
                        var6 = var9.bind(var1)(var6);
                        var6 = var6.APIError;
                        var8 = var6.prototype;
                        var8 = Object.create(var8, {
                            constructor: {
                                value: var6
                            }
                        });
                        var21 = var8;
                        var20 = var10;
                        var6 = new var21[var6](var20, var19);
                        var8 = var6 instanceof Object ? var6 : var8;
                        var2 = var8;
                        var6 = 23;
                        var6 = var5[var6];
                        var9 = var9.bind(var1)(var6);
                        var6 = var9.captureOrIgnoreApiError;
                        var6 = var6.bind(var9)(var8);
                        var6 = _closure1_slot1;
                        var5 = var5[var7];
                        var7 = var6.bind(var1)(var5);
                        var6 = var7.dispatch;
                        var5 = {};
                        var9 = 'COLLECTIBLES_CATEGORIES_FETCH_FAILURE';
                        var5.type = var9;
                        var5.error = var8;
                        var5 = var6.bind(var7)(var5);
                        if (!var4) {
                            _fun41788_ip = 973;
                            continue _fun41788
                        }
                    case 935:
                        var3 = _closure1_slot7;
                        var5 = var2.message;
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var4 = var2.concat;
                        var2 = 'fetchCollectiblesCategories failed: ';
                        var2 = var4.bind(var2)(var5);
                        var2 = var3.bind(var1)(var2);
                    case 973:
                        return var1;
                    case 976:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var12 = var1.bind(var0)();
    var1 = function() { // Environment: var3
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun41792: for (var _fun41792_ip = 0;;) switch (_fun41792_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun41792_ip = 714;
                            continue _fun41792
                        }
                    case 10:
                        var7 = arg0;
                        var1 = undefined;
                        var4 = undefined;
                        var6 = undefined;
                        var10 = undefined;
                        var2 = undefined;
                        var5 = _closure1_slot8;
                        var5 = var5.isFetching;
                        if (var5) {
                            _fun41792_ip = 711;
                            continue _fun41792
                        }
                    case 42:
                        var9 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var5 = 17;
                        var8 = var8[var5];
                        var11 = var9.bind(var1)(var8);
                        var9 = var11.dispatch;
                        var8 = {};
                        var12 = 'COLLECTIBLES_PURCHASES_FETCH';
                        var8.type = var12;
                        var8 = var9.bind(var11)(var8);
                        var11 = _closure1_slot4;
                        var9 = var11.get;
                        var8 = 'shop_show_debug_overlay';
                        var8 = var9.bind(var11)(var8);
                        var4 = var8;
                        if (!var8) {
                            _fun41792_ip = 170;
                            continue _fun41792
                        }
                    case 110:
                        var9 = _closure1_slot7;
                        var8 = global;
                        var15 = var8.JSON;
                        var14 = var15.stringify;
                        var13 = var7;
                        var12 = null;
                        var11 = 2;
                        var12 = var14.bind(var15)(var13, var12, var11);
                        var8 = var8.HermesInternal;
                        var11 = var8.concat;
                        var8 = 'fetchCollectiblesPurchases started, options: ';
                        var8 = var11.bind(var8)(var12);
                        var8 = var9.bind(var1)(var8);
                    case 170: // try_start_0
                        var8 = {};
                        var9 = _closure1_slot15;
                        var9 = var9.COLLECTIBLES_PURCHASES;
                        var8.url = var9;
                        var9 = true;
                        var8.rejectWithError = var9;
                        var6 = var8;
                        var8 = var7;
                        var14 = null;
                        var9 = var14 == var8;
                        var8 = undefined;
                        if (var9) {
                            _fun41792_ip = 215;
                            continue _fun41792
                        }
                    case 209:
                        var8 = var7.variantsReturnStyle;
                    case 215:
                        var9 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var12 = 24;
                        var7 = var7[var12];
                        var7 = var9.bind(var1)(var7);
                        var7 = var7.ShopVariantsReturnStyle;
                        var7 = var7.VARIANTS_GROUP;
                        if (!(var8 === var7)) {
                            _fun41792_ip = 296;
                            continue _fun41792
                        }
                    case 251:
                        var8 = var6;
                        var7 = {};
                        var11 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var9 = var9[var12];
                        var9 = var11.bind(var1)(var9);
                        var9 = var9.ShopVariantsReturnStyle;
                        var9 = var9.VARIANTS_GROUP;
                        var7.variants_return_style = var9;
                        var8.query = var7;
                    case 296:
                        var7 = var4;
                        if (!var7) {
                            _fun41792_ip = 360;
                            continue _fun41792
                        }
                    case 302:
                        var8 = _closure1_slot7;
                        var7 = global;
                        var13 = var7.JSON;
                        var12 = var13.stringify;
                        var11 = var6;
                        var9 = 2;
                        var11 = var12.bind(var13)(var11, var14, var9);
                        var7 = var7.HermesInternal;
                        var9 = var7.concat;
                        var7 = 'fetchCollectiblesPurchases request: ';
                        var7 = var9.bind(var7)(var11);
                        var7 = var8.bind(var1)(var7);
                    case 360:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var7 = 21;
                        var7 = var9[var7];
                        var7 = var8.bind(var1)(var7);
                        var8 = var7.HTTP;
                        var7 = var8.get;
                        var6 = var7.bind(var8)(var6);
                        SaveGenerator(address = 399);
                    case 397:
                        return var6;
                    case 399:
                        ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 7);
                        if (var7) {
                            _fun41792_ip = 542;
                            continue _fun41792
                        }
                    case 408:
                        var10 = var6;
                        var7 = var4;
                        if (!var7) {
                            _fun41792_ip = 470;
                            continue _fun41792
                        }
                    case 417:
                        var8 = _closure1_slot7;
                        var7 = var10;
                        var7 = var7.body;
                        var12 = var7.length;
                        var7 = global;
                        var7 = var7.HermesInternal;
                        var11 = var7.concat;
                        var9 = 'fetchCollectiblesPurchases completed with ';
                        var7 = ' purchases';
                        var7 = var11.bind(var9)(var12, var7);
                        var7 = var8.bind(var1)(var7);
                    case 470:
                        var8 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var7 = var7[var5];
                        var9 = var8.bind(var1)(var7);
                        var8 = var9.dispatch;
                        var7 = {};
                        var11 = 'COLLECTIBLES_PURCHASES_FETCH_SUCCESS';
                        var7.type = var11;
                        var12 = var10.body;
                        var11 = var12.map;
                        var10 = _closure1_slot12;
                        var10 = var10.fromServer;
                        var10 = var11.bind(var12)(var10);
                        var7.purchases = var10;
                        var7 = var8.bind(var9)(var7);
                    case 537: // try_end0
                        _fun41792_ip = 711;
                        continue _fun41792;
                    case 542:
                        return var6;
                    case 545: // catch_target0
                        CatchBlockStart(arg_register = 10);
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var6 = 22;
                        var6 = var9[var6];
                        var6 = var7.bind(var1)(var6);
                        var6 = var6.APIError;
                        var8 = var6.prototype;
                        var8 = Object.create(var8, {
                            constructor: {
                                value: var6
                            }
                        });
                        var19 = var8;
                        var18 = var10;
                        var6 = new var19[var6](var18, var17);
                        var8 = var6 instanceof Object ? var6 : var8;
                        var2 = var8;
                        var6 = 23;
                        var6 = var9[var6];
                        var7 = var7.bind(var1)(var6);
                        var6 = var7.captureOrIgnoreApiError;
                        var6 = var6.bind(var7)(var8);
                        if (!var4) {
                            _fun41792_ip = 666;
                            continue _fun41792
                        }
                    case 625:
                        var6 = _closure1_slot7;
                        var4 = var2;
                        var8 = var4.message;
                        var4 = global;
                        var4 = var4.HermesInternal;
                        var7 = var4.concat;
                        var4 = 'fetchCollectiblesPurchases failed: ';
                        var4 = var7.bind(var4)(var8);
                        var4 = var6.bind(var1)(var4);
                    case 666:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var5];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'COLLECTIBLES_PURCHASES_FETCH_FAILURE';
                        var3.type = var6;
                        var3.error = var2;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
                    case 711:
                        return var1;
                    case 714:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var11 = var1.bind(var0)();
    var1 = function() { // Environment: var3
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0, arg1) { // Environment: var0
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun41796: for (var _fun41796_ip = 0;;) switch (_fun41796_ip) {
                    case 0:
                        StartGenerator();
                        var10 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun41796_ip = 533;
                            continue _fun41796
                        }
                    case 13:
                        var6 = var10;
                        var7 = arg1;
                        var1 = undefined;
                        var8 = undefined;
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var4 = 17;
                        var2 = var2[var4];
                        var9 = var5.bind(var1)(var2);
                        var5 = var9.dispatch;
                        var2 = {};
                        var11 = 'COLLECTIBLES_PRODUCT_FETCH';
                        var2.type = var11;
                        var2.skuId = var10;
                        var2 = var5.bind(var9)(var2);
                    case 73: // try_start_0
                        var2 = {};
                        var5 = _closure1_slot5;
                        var5 = var5.locale;
                        var2.locale = var5;
                        var8 = var2;
                        var2 = var7;
                        var9 = null;
                        var5 = var9 == var2;
                        var2 = undefined;
                        if (var5) {
                            _fun41796_ip = 116;
                            continue _fun41796
                        }
                    case 107:
                        var5 = var7;
                        var2 = var5.countryCode;
                    case 116:
                        if (!(var9 !== var2)) {
                            _fun41796_ip = 150;
                            continue _fun41796
                        }
                    case 120:
                        var5 = var8;
                        var2 = var7;
                        var10 = var9 == var2;
                        var2 = undefined;
                        if (var10) {
                            _fun41796_ip = 144;
                            continue _fun41796
                        }
                    case 135:
                        var10 = var7;
                        var2 = var10.countryCode;
                    case 144:
                        var5.country_code = var2;
                    case 150:
                        var2 = var7;
                        var5 = var9 == var2;
                        var2 = undefined;
                        if (var5) {
                            _fun41796_ip = 171;
                            continue _fun41796
                        }
                    case 162:
                        var5 = var7;
                        var2 = var5.paymentGateway;
                    case 171:
                        if (!(var9 !== var2)) {
                            _fun41796_ip = 205;
                            continue _fun41796
                        }
                    case 175:
                        var5 = var8;
                        var2 = var7;
                        var10 = var9 == var2;
                        var2 = undefined;
                        if (var10) {
                            _fun41796_ip = 199;
                            continue _fun41796
                        }
                    case 190:
                        var10 = var7;
                        var2 = var10.paymentGateway;
                    case 199:
                        var5.payment_gateway = var2;
                    case 205:
                        var2 = var7;
                        var5 = var9 == var2;
                        var2 = undefined;
                        if (var5) {
                            _fun41796_ip = 226;
                            continue _fun41796
                        }
                    case 217:
                        var5 = var7;
                        var2 = var5.includeBundles;
                    case 226:
                        if (!(var9 !== var2)) {
                            _fun41796_ip = 257;
                            continue _fun41796
                        }
                    case 230:
                        var5 = var8;
                        var2 = var7;
                        var9 = var9 == var2;
                        var2 = undefined;
                        if (var9) {
                            _fun41796_ip = 251;
                            continue _fun41796
                        }
                    case 245:
                        var2 = var7.includeBundles;
                    case 251:
                        var5.include_bundles = var2;
                    case 257:
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 21;
                        var2 = var7[var2];
                        var2 = var5.bind(var1)(var2);
                        var7 = var2.HTTP;
                        var5 = var7.get;
                        var2 = {};
                        var11 = _closure1_slot15;
                        var10 = var11.COLLECTIBLES_PRODUCTS;
                        var9 = var6;
                        var9 = var10.bind(var11)(var9);
                        var2.url = var9;
                        var9 = true;
                        var2.rejectWithError = var9;
                        var2.query = var8;
                        var2 = var5.bind(var7)(var2);
                        SaveGenerator(address = 331);
                    case 329:
                        return var2;
                    case 331:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                        if (var5) {
                            _fun41796_ip = 409;
                            continue _fun41796
                        }
                    case 337:
                        var7 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var5 = var5[var4];
                        var8 = var7.bind(var1)(var5);
                        var7 = var8.dispatch;
                        var5 = {};
                        var9 = 'COLLECTIBLES_PRODUCT_FETCH_SUCCESS';
                        var5.type = var9;
                        var9 = var6;
                        var5.skuId = var9;
                        var11 = _closure1_slot11;
                        var10 = var11.fromServer;
                        var9 = var2.body;
                        var9 = var10.bind(var11)(var9);
                        var5.product = var9;
                        var5 = var7.bind(var8)(var5);
                    case 407: // try_end0
                        _fun41796_ip = 530;
                        continue _fun41796;
                    case 409:
                        return var2;
                    case 412: // catch_target0
                        CatchBlockStart(arg_register = 9);
                        var8 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var5 = 22;
                        var5 = var2[var5];
                        var5 = var8.bind(var1)(var5);
                        var5 = var5.APIError;
                        var7 = var5.prototype;
                        var7 = Object.create(var7, {
                            constructor: {
                                value: var5
                            }
                        });
                        var13 = var7;
                        var12 = var9;
                        var5 = new var13[var5](var12, var11);
                        var5 = var5 instanceof Object ? var5 : var7;
                        var7 = 23;
                        var7 = var2[var7];
                        var8 = var8.bind(var1)(var7);
                        var7 = var8.captureOrIgnoreApiError;
                        var7 = var7.bind(var8)(var5);
                        var3 = _closure1_slot1;
                        var2 = var2[var4];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var7 = 'COLLECTIBLES_PRODUCT_FETCH_FAILURE';
                        var2.type = var7;
                        var2.skuId = var6;
                        var2.error = var5;
                        var2 = var3.bind(var4)(var2);
                    case 530:
                        return var1;
                    case 533:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var10 = var1.bind(var0)();
    var _closure1_slot22 = var10;
    var1 = function() { // Environment: var3
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0, arg1) { // Environment: var0
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun41800: for (var _fun41800_ip = 0;;) switch (_fun41800_ip) {
                    case 0:
                        StartGenerator();
                        var4 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun41800_ip = 64;
                            continue _fun41800
                        }
                    case 10:
                        var3 = _closure1_slot6;
                        var2 = var3.isFetchingProduct;
                        var2 = var2.bind(var3)(var4);
                        if (var2) {
                            _fun41800_ip = 59;
                            continue _fun41800
                        }
                    case 31:
                        var3 = _closure1_slot22;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var3.bind(var2)(var4, var1);
                        SaveGenerator(address = 50);
                    case 48:
                        return var1;
                    case 50:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (!var2) {
                            _fun41800_ip = 59;
                            continue _fun41800
                        }
                    case 56:
                        return var1;
                    case 59:
                        var1 = undefined;
                        return var1;
                    case 64:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var9 = var1.bind(var0)();
    var1 = function() { // Environment: var3
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun41804: for (var _fun41804_ip = 0;;) switch (_fun41804_ip) {
                    case 0:
                        StartGenerator();
                        var8 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun41804_ip = 345;
                            continue _fun41804
                        }
                    case 13:
                        var5 = var8;
                        var4 = undefined;
                        var10 = undefined;
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var6 = 17;
                        var1 = var1[var6];
                        var7 = var2.bind(var4)(var1);
                        var2 = var7.dispatch;
                        var1 = {};
                        var9 = 'COLLECTIBLES_CLAIM';
                        var1.type = var9;
                        var1.skuId = var8;
                        var1 = var2.bind(var7)(var1);
                    case 68: // try_start_0
                        var2 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 21;
                        var1 = var7[var1];
                        var1 = var2.bind(var4)(var1);
                        var7 = var1.HTTP;
                        var2 = var7.put;
                        var1 = {};
                        var8 = _closure1_slot15;
                        var8 = var8.COLLECTIBLES_CLAIM;
                        var1.url = var8;
                        var8 = {};
                        var9 = var5;
                        var8.sku_id = var9;
                        var1.body = var8;
                        var8 = true;
                        var1.rejectWithError = var8;
                        var1 = var2.bind(var7)(var1);
                        SaveGenerator(address = 144);
                    case 142:
                        return var1;
                    case 144:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun41804_ip = 245;
                            continue _fun41804
                        }
                    case 150:
                        var7 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var6];
                        var8 = var7.bind(var4)(var2);
                        var7 = var8.dispatch;
                        var2 = {};
                        var9 = 'COLLECTIBLES_CLAIM_SUCCESS';
                        var2.type = var9;
                        var9 = var5;
                        var2.skuId = var9;
                        var11 = var1.body;
                        var10 = var11;
                        var9 = null;
                        var11 = var9 == var11;
                        var9 = undefined;
                        if (var11) {
                            _fun41804_ip = 232;
                            continue _fun41804
                        }
                    case 209:
                        var12 = var10;
                        var11 = var12.map;
                        var10 = _closure1_slot12;
                        var10 = var10.fromServer;
                        var9 = var11.bind(var12)(var10);
                    case 232:
                        var2.purchases = var9;
                        var2 = var7.bind(var8)(var2);
                    case 242: // try_end0
                        return var4;
                    case 245:
                        return var1;
                    case 248: // catch_target0
                        CatchBlockStart(arg_register = 8);
                        var7 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 22;
                        var1 = var2[var1];
                        var1 = var7.bind(var4)(var1);
                        var1 = var1.APIError;
                        var7 = var1.prototype;
                        var7 = Object.create(var7, {
                            constructor: {
                                value: var1
                            }
                        });
                        var14 = var7;
                        var13 = var8;
                        var1 = new var14[var1](var13, var12);
                        var1 = var1 instanceof Object ? var1 : var7;
                        var3 = _closure1_slot1;
                        var2 = var2[var6];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'COLLECTIBLES_CLAIM_FAILURE';
                        var2.type = var6;
                        var2.skuId = var5;
                        var2.error = var1;
                        var2 = var3.bind(var4)(var2);
                        throw var1;
                    case 345:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var8 = var1.bind(var0)();
    var1 = function() { // Environment: var3
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0, arg1) { // Environment: var0
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun41808: for (var _fun41808_ip = 0;;) switch (_fun41808_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun41808_ip = 206;
                            continue _fun41808
                        }
                    case 10:
                        var5 = arg0;
                        var6 = arg1;
                    case 16: // try_start_0
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 21;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.get;
                        var1 = {};
                        var4 = _closure1_slot15;
                        var4 = var4.COLLECTIBLES_VALID_GIFT_RECIPIENT;
                        var1.url = var4;
                        var4 = {};
                        var4.sku_id = var6;
                        var4.recipient_id = var5;
                        var1.query = var4;
                        var4 = true;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 99);
                    case 97:
                        return var1;
                    case 99:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun41808_ip = 119;
                            continue _fun41808
                        }
                    case 105:
                        var2 = var1.body;
                        var2 = var2.valid;
                    case 116: // try_end0
                        return var2;
                    case 119:
                        return var1;
                    case 122: // catch_target0
                        CatchBlockStart(arg_register = 5);
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 23;
                        var1 = var7[var1];
                        var4 = undefined;
                        var3 = var6.bind(var4)(var1);
                        var2 = var3.captureOrIgnoreApiError;
                        var1 = 22;
                        var1 = var7[var1];
                        var1 = var6.bind(var4)(var1);
                        var1 = var1.APIError;
                        var4 = var1.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var1
                            }
                        });
                        var9 = var4;
                        var8 = var5;
                        var1 = new var9[var1](var8, var7);
                        var1 = var1 instanceof Object ? var1 : var4;
                        var1 = var2.bind(var3)(var1);
                        var1 = false;
                        return var1;
                    case 206:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var7 = var1.bind(var0)();
    var1 = function() { // Environment: var3
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0, arg1) { // Environment: var0
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun41812: for (var _fun41812_ip = 0;;) switch (_fun41812_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun41812_ip = 200;
                            continue _fun41812
                        }
                    case 10:
                        var5 = arg0;
                        var6 = arg1;
                    case 16: // try_start_0
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 21;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.get;
                        var1 = {};
                        var4 = _closure1_slot15;
                        var4 = var4.COLLECTIBLES_VALID_GIFT_RECIPIENTS_BATCH;
                        var1.url = var4;
                        var4 = {};
                        var4.sku_ids = var6;
                        var4.recipient_id = var5;
                        var1.query = var4;
                        var4 = true;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 99);
                    case 97:
                        return var1;
                    case 99:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun41812_ip = 113;
                            continue _fun41812
                        }
                    case 105:
                        var2 = var1.body;
                    case 110: // try_end0
                        return var2;
                    case 113:
                        return var1;
                    case 116: // catch_target0
                        CatchBlockStart(arg_register = 5);
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 23;
                        var1 = var7[var1];
                        var4 = undefined;
                        var3 = var6.bind(var4)(var1);
                        var2 = var3.captureOrIgnoreApiError;
                        var1 = 22;
                        var1 = var7[var1];
                        var1 = var6.bind(var4)(var1);
                        var1 = var1.APIError;
                        var4 = var1.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var1
                            }
                        });
                        var9 = var4;
                        var8 = var5;
                        var1 = new var9[var1](var8, var7);
                        var1 = var1 instanceof Object ? var1 : var4;
                        var1 = var2.bind(var3)(var1);
                        var1 = {};
                        return var1;
                    case 200:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var6 = var1.bind(var0)();
    var1 = function() { // Environment: var3
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun41816: for (var _fun41816_ip = 0;;) switch (_fun41816_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun41816_ip = 451;
                            continue _fun41816
                        }
                    case 10:
                        var1 = arg0;
                        var6 = var1.release;
                        var2 = undefined;
                        if (!(var6 === var2)) {
                            _fun41816_ip = 60;
                            continue _fun41816
                        }
                    case 25:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 25;
                        var1 = var5[var1];
                        var1 = var4.bind(var2)(var1);
                        var1 = var1.CollectiblesMarketingReleaseType;
                        var6 = var1.PROD;
                    case 60:
                        var8 = undefined;
                        SaveGenerator(address = 66);
                    case 64:
                        return var2;
                    case 66:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun41816_ip = 448;
                            continue _fun41816
                        }
                    case 75:
                        var7 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var5 = 17;
                        var3 = var9[var5];
                        var10 = var7.bind(var2)(var3);
                        var7 = var10.dispatch;
                        var3 = {};
                        var11 = 'COLLECTIBLES_MARKETING_FETCH';
                        var3.type = var11;
                        var3 = var7.bind(var10)(var3);
                        var3 = {};
                        var7 = _closure1_slot0;
                        var10 = 26;
                        var10 = var9[var10];
                        var10 = var7.bind(var2)(var10);
                        var10 = var10.CollectiblesMarketingPlatform;
                        var10 = var10.MOBILE;
                        var3.platform = var10;
                        var8 = var3;
                        var3 = 25;
                        var3 = var9[var3];
                        var3 = var7.bind(var2)(var3);
                        var3 = var3.CollectiblesMarketingReleaseType;
                        var3 = var3.PROD;
                        if (!(var6 !== var3)) {
                            _fun41816_ip = 195;
                            continue _fun41816
                        }
                    case 186:
                        var3 = var8;
                        var3.release = var6;
                    case 195: // try_start_0
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var3 = 21;
                        var3 = var7[var3];
                        var3 = var6.bind(var2)(var3);
                        var7 = var3.HTTP;
                        var6 = var7.get;
                        var3 = {};
                        var9 = _closure1_slot15;
                        var9 = var9.COLLECTIBLES_MARKETING;
                        var3.url = var9;
                        var3.query = var8;
                        var8 = true;
                        var3.rejectWithError = var8;
                        var3 = var6.bind(var7)(var3);
                        SaveGenerator(address = 261);
                    case 259:
                        return var3;
                    case 261:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 6);
                        if (var6) {
                            _fun41816_ip = 333;
                            continue _fun41816
                        }
                    case 267:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var5];
                        var8 = var7.bind(var2)(var6);
                        var7 = var8.dispatch;
                        var6 = {};
                        var9 = 'COLLECTIBLES_MARKETING_FETCH_SUCCESS';
                        var6.type = var9;
                        var11 = _closure1_slot10;
                        var10 = var11.fromServer;
                        var9 = var3.body;
                        var9 = var10.bind(var11)(var9);
                        var6.marketings = var9;
                        var6 = var7.bind(var8)(var6);
                    case 331: // try_end0
                        _fun41816_ip = 445;
                        continue _fun41816;
                    case 333:
                        return var3;
                    case 336: // catch_target0
                        CatchBlockStart(arg_register = 10);
                        var9 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var6 = 23;
                        var6 = var3[var6];
                        var8 = var9.bind(var2)(var6);
                        var7 = var8.captureOrIgnoreApiError;
                        var6 = 22;
                        var6 = var3[var6];
                        var6 = var9.bind(var2)(var6);
                        var6 = var6.APIError;
                        var9 = var6.prototype;
                        var9 = Object.create(var9, {
                            constructor: {
                                value: var6
                            }
                        });
                        var13 = var9;
                        var12 = var10;
                        var6 = new var13[var6](var12, var11);
                        var6 = var6 instanceof Object ? var6 : var9;
                        var6 = var7.bind(var8)(var6);
                        var4 = _closure1_slot1;
                        var3 = var3[var5];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'COLLECTIBLES_MARKETING_FETCH_FAILURE';
                        var3.type = var6;
                        var3 = var4.bind(var5)(var3);
                    case 445:
                        return var2;
                    case 448:
                        return var1;
                    case 451:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var5 = var1.bind(var0)();
    var1 = function() { // Environment: var3
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0, arg1, arg2) { // Environment: var0
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun41820: for (var _fun41820_ip = 0;;) switch (_fun41820_ip) {
                    case 0:
                        StartGenerator();
                        var12 = arg0;
                        var10 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun41820_ip = 796;
                            continue _fun41820
                        }
                    case 16:
                        var6 = var12;
                        var11 = var10;
                        var13 = arg2;
                        var1 = undefined;
                        var8 = undefined;
                        var9 = undefined;
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var4 = 17;
                        var2 = var2[var4];
                        var7 = var5.bind(var1)(var2);
                        var5 = var7.dispatch;
                        var2 = {};
                        var14 = 'COLLECTIBLES_SHOP_HOME_FETCH';
                        var2.type = var14;
                        var2.tab = var12;
                        var12 = null;
                        if (!(var12 == var10)) {
                            _fun41820_ip = 86;
                            continue _fun41820
                        }
                    case 82:
                        var10 = {};
                        _fun41820_ip = 89;
                        continue _fun41820;
                    case 86:
                        var10 = var11;
                    case 89:
                        var2.options = var10;
                        var2 = var5.bind(var7)(var2);
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 19;
                        var2 = var7[var2];
                        var10 = var5.bind(var1)(var2);
                        var7 = var10.buildFetchCollectiblesOptionsQuery;
                        var2 = var11;
                        var5 = var6;
                        var8 = var7.bind(var10)(var2, var5);
                        var2 = var12 != var2;
                        if (!var2) {
                            _fun41820_ip = 152;
                            continue _fun41820
                        }
                    case 143:
                        var5 = var11;
                        var2 = var5.logPerf;
                    case 152:
                        if (!var2) {
                            _fun41820_ip = 329;
                            continue _fun41820
                        }
                    case 158:
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var15 = 20;
                        var2 = var2[var15];
                        var7 = var5.bind(var1)(var2);
                        var5 = var7.trackShopPerf;
                        var2 = {};
                        var10 = var13;
                        var14 = var12 == var10;
                        var10 = undefined;
                        if (var14) {
                            _fun41820_ip = 207;
                            continue _fun41820
                        }
                    case 198:
                        var14 = var13;
                        var10 = var14.sessionId;
                    case 207:
                        var2.sessionId = var10;
                        var14 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var10 = var10[var15];
                        var10 = var14.bind(var1)(var10);
                        var10 = var10.CollectiblesShopPerfCheckpoint;
                        var10 = var10.SHOP_HOME_FETCH_STARTED;
                        var2.checkpoint = var10;
                        var10 = var13;
                        var14 = var12 == var10;
                        var10 = undefined;
                        if (var14) {
                            _fun41820_ip = 267;
                            continue _fun41820
                        }
                    case 258:
                        var14 = var13;
                        var10 = var14.tab;
                    case 267:
                        var2.tab = var10;
                        var10 = var11;
                        var14 = var12 == var10;
                        var10 = undefined;
                        if (var14) {
                            _fun41820_ip = 293;
                            continue _fun41820
                        }
                    case 284:
                        var14 = var11;
                        var10 = var14.includeUnpublished;
                    case 293:
                        var2.unpublishedCategoriesShown = var10;
                        var10 = var11;
                        var14 = var12 == var10;
                        var10 = undefined;
                        if (var14) {
                            _fun41820_ip = 319;
                            continue _fun41820
                        }
                    case 310:
                        var14 = var11;
                        var10 = var14.noCache;
                    case 319:
                        var2.cacheDisabled = var10;
                        var2 = var5.bind(var7)(var2);
                    case 329: // try_start_0
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 21;
                        var2 = var7[var2];
                        var2 = var5.bind(var1)(var2);
                        var7 = var2.HTTP;
                        var5 = var7.get;
                        var2 = {};
                        var10 = _closure1_slot15;
                        var10 = var10.COLLECTIBLES_SHOP;
                        var2.url = var10;
                        var2.query = var8;
                        var8 = true;
                        var2.rejectWithError = var8;
                        var2 = var5.bind(var7)(var2);
                        SaveGenerator(address = 395);
                    case 393:
                        return var2;
                    case 395:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                        if (var5) {
                            _fun41820_ip = 672;
                            continue _fun41820
                        }
                    case 404:
                        var9 = var2;
                        var7 = var11;
                        var7 = var12 != var7;
                        var5 = var7;
                        if (!var7) {
                            _fun41820_ip = 429;
                            continue _fun41820
                        }
                    case 420:
                        var7 = var11;
                        var5 = var7.logPerf;
                    case 429:
                        if (!var5) {
                            _fun41820_ip = 600;
                            continue _fun41820
                        }
                    case 435:
                        var7 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var15 = 20;
                        var5 = var5[var15];
                        var8 = var7.bind(var1)(var5);
                        var7 = var8.trackShopPerf;
                        var5 = {};
                        var10 = var13;
                        var14 = var12 == var10;
                        var10 = undefined;
                        if (var14) {
                            _fun41820_ip = 484;
                            continue _fun41820
                        }
                    case 475:
                        var14 = var13;
                        var10 = var14.sessionId;
                    case 484:
                        var5.sessionId = var10;
                        var14 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var10 = var10[var15];
                        var10 = var14.bind(var1)(var10);
                        var10 = var10.CollectiblesShopPerfCheckpoint;
                        var10 = var10.SHOP_HOME_FETCH_COMPLETED;
                        var5.checkpoint = var10;
                        var10 = var13;
                        var14 = var12 == var10;
                        var10 = undefined;
                        if (var14) {
                            _fun41820_ip = 541;
                            continue _fun41820
                        }
                    case 535:
                        var10 = var13.tab;
                    case 541:
                        var5.tab = var10;
                        var10 = var11;
                        var13 = var12 == var10;
                        var10 = undefined;
                        if (var13) {
                            _fun41820_ip = 567;
                            continue _fun41820
                        }
                    case 558:
                        var13 = var11;
                        var10 = var13.includeUnpublished;
                    case 567:
                        var5.unpublishedCategoriesShown = var10;
                        var10 = var11;
                        var12 = var12 == var10;
                        var10 = undefined;
                        if (var12) {
                            _fun41820_ip = 590;
                            continue _fun41820
                        }
                    case 584:
                        var10 = var11.noCache;
                    case 590:
                        var5.cacheDisabled = var10;
                        var5 = var7.bind(var8)(var5);
                    case 600:
                        var7 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var5 = var5[var4];
                        var8 = var7.bind(var1)(var5);
                        var7 = var8.dispatch;
                        var5 = {};
                        var10 = 'COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS';
                        var5.type = var10;
                        var10 = var6;
                        var5.tab = var10;
                        var11 = _closure1_slot13;
                        var10 = var11.fromServer;
                        var9 = var9.body;
                        var9 = var10.bind(var11)(var9);
                        var5.shopHome = var9;
                        var5 = var7.bind(var8)(var5);
                    case 670: // try_end0
                        _fun41820_ip = 793;
                        continue _fun41820;
                    case 672:
                        return var2;
                    case 675: // catch_target0
                        CatchBlockStart(arg_register = 9);
                        var8 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var5 = 22;
                        var5 = var2[var5];
                        var5 = var8.bind(var1)(var5);
                        var5 = var5.APIError;
                        var7 = var5.prototype;
                        var7 = Object.create(var7, {
                            constructor: {
                                value: var5
                            }
                        });
                        var18 = var7;
                        var17 = var9;
                        var5 = new var18[var5](var17, var16);
                        var5 = var5 instanceof Object ? var5 : var7;
                        var7 = 23;
                        var7 = var2[var7];
                        var8 = var8.bind(var1)(var7);
                        var7 = var8.captureOrIgnoreApiError;
                        var7 = var7.bind(var8)(var5);
                        var3 = _closure1_slot1;
                        var2 = var2[var4];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var7 = 'COLLECTIBLES_SHOP_HOME_FETCH_FAILURE';
                        var2.type = var7;
                        var2.tab = var6;
                        var2.error = var5;
                        var2 = var3.bind(var4)(var2);
                    case 793:
                        return var1;
                    case 796:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var4 = var1.bind(var0)();
    var1 = function() { // Environment: var3
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0, arg1) { // Environment: var0
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun41824: for (var _fun41824_ip = 0;;) switch (_fun41824_ip) {
                    case 0:
                        StartGenerator();
                        var8 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun41824_ip = 345;
                            continue _fun41824
                        }
                    case 13:
                        var9 = arg0;
                        var5 = var8;
                        var4 = undefined;
                        var10 = undefined;
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var6 = 17;
                        var1 = var1[var6];
                        var7 = var2.bind(var4)(var1);
                        var2 = var7.dispatch;
                        var1 = {};
                        var11 = 'COLLECTIBLES_CLAIM';
                        var1.type = var11;
                        var1.skuId = var8;
                        var1 = var2.bind(var7)(var1);
                    case 71: // try_start_0
                        var2 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 21;
                        var1 = var7[var1];
                        var1 = var2.bind(var4)(var1);
                        var7 = var1.HTTP;
                        var2 = var7.put;
                        var1 = {};
                        var8 = _closure1_slot15;
                        var8 = var8.COLLECTIBLES_CLAIM_CATEGORY_REWARD;
                        var1.url = var8;
                        var8 = {};
                        var8.category_id = var9;
                        var1.body = var8;
                        var8 = true;
                        var1.rejectWithError = var8;
                        var1 = var2.bind(var7)(var1);
                        SaveGenerator(address = 144);
                    case 142:
                        return var1;
                    case 144:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun41824_ip = 245;
                            continue _fun41824
                        }
                    case 150:
                        var7 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var6];
                        var8 = var7.bind(var4)(var2);
                        var7 = var8.dispatch;
                        var2 = {};
                        var9 = 'COLLECTIBLES_CLAIM_SUCCESS';
                        var2.type = var9;
                        var9 = var5;
                        var2.skuId = var9;
                        var11 = var1.body;
                        var10 = var11;
                        var9 = null;
                        var11 = var9 == var11;
                        var9 = undefined;
                        if (var11) {
                            _fun41824_ip = 232;
                            continue _fun41824
                        }
                    case 209:
                        var12 = var10;
                        var11 = var12.map;
                        var10 = _closure1_slot12;
                        var10 = var10.fromServer;
                        var9 = var11.bind(var12)(var10);
                    case 232:
                        var2.purchases = var9;
                        var2 = var7.bind(var8)(var2);
                    case 242: // try_end0
                        return var4;
                    case 245:
                        return var1;
                    case 248: // catch_target0
                        CatchBlockStart(arg_register = 8);
                        var7 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 22;
                        var1 = var2[var1];
                        var1 = var7.bind(var4)(var1);
                        var1 = var1.APIError;
                        var7 = var1.prototype;
                        var7 = Object.create(var7, {
                            constructor: {
                                value: var1
                            }
                        });
                        var14 = var7;
                        var13 = var8;
                        var1 = new var14[var1](var13, var12);
                        var1 = var1 instanceof Object ? var1 : var7;
                        var3 = _closure1_slot1;
                        var2 = var2[var6];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'COLLECTIBLES_CLAIM_FAILURE';
                        var2.type = var6;
                        var2.skuId = var5;
                        var2.error = var1;
                        var2 = var3.bind(var4)(var2);
                        throw var1;
                    case 345:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var1 = var1.bind(var0)();
    var17 = {};
    var17.openCollectiblesShop = var16;
    var17.closeCollectiblesShop = var13;
    var17.fetchCollectiblesPurchases = var11;
    var17.fetchCollectiblesProduct = var10;
    var17.claimPremiumCollectiblesProduct = var8;
    var18 = 27;
    var18 = var20[var18];
    var20 = var19.bind(var0)(var18);
    var19 = var20.fileFinishedImporting;
    var18 = 'modules/collectibles/CollectiblesActionCreators.tsx';
    var18 = var19.bind(var20)(var18);
    var2.default = var17;
    var2.openCollectiblesShop = var16;
    var2.openCollectiblesShopMobile = var15;
    var2.dispatchOpenCollectiblesShop = var14;
    var2.closeCollectiblesShop = var13;
    var13 = function(arg0) { // Environment: var3
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 17;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'COLLECTIBLES_PRODUCT_DETAILS_OPEN';
        var1.type = var4;
        var4 = arg0;
        var1.item = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.productDetailsOpened = var13;
    var13 = function(arg0, arg1) { // Environment: var3
        _fun41827: for (var _fun41827_ip = 0;;) switch (_fun41827_ip) {
            case 0:
                var5 = arg0;
                var3 = arg1;
                var7 = _closure1_slot21;
                var4 = null;
                var0 = var4 == var5;
                var1 = undefined;
                var6 = undefined;
                if (var0) {
                    _fun41827_ip = 32;
                    continue _fun41827
                }
            case 26:
                var6 = var5.noCache;
            case 32:
                var8 = var4 == var3;
                var0 = undefined;
                if (var8) {
                    _fun41827_ip = 47;
                    continue _fun41827
                }
            case 41:
                var0 = var3.noCache;
            case 47:
                var0 = var7.bind(var1)(var6, var0);
                if (!var0) {
                    _fun41827_ip = 96;
                    continue _fun41827
                }
            case 56:
                var8 = _closure1_slot21;
                var6 = var4 == var5;
                var7 = undefined;
                if (var6) {
                    _fun41827_ip = 75;
                    continue _fun41827
                }
            case 69:
                var7 = var5.includeUnpublished;
            case 75:
                var9 = var4 == var3;
                var6 = undefined;
                if (var9) {
                    _fun41827_ip = 90;
                    continue _fun41827
                }
            case 84:
                var6 = var3.includeUnpublished;
            case 90:
                var0 = var8.bind(var1)(var7, var6);
            case 96:
                if (!var0) {
                    _fun41827_ip = 139;
                    continue _fun41827
                }
            case 99:
                var8 = _closure1_slot21;
                var6 = var4 == var5;
                var7 = undefined;
                if (var6) {
                    _fun41827_ip = 118;
                    continue _fun41827
                }
            case 112:
                var7 = var5.includeBundles;
            case 118:
                var9 = var4 == var3;
                var6 = undefined;
                if (var9) {
                    _fun41827_ip = 133;
                    continue _fun41827
                }
            case 127:
                var6 = var3.includeBundles;
            case 133:
                var0 = var8.bind(var1)(var7, var6);
            case 139:
                if (!var0) {
                    _fun41827_ip = 182;
                    continue _fun41827
                }
            case 142:
                var7 = _closure1_slot21;
                var2 = var4 == var5;
                var6 = undefined;
                if (var2) {
                    _fun41827_ip = 161;
                    continue _fun41827
                }
            case 155:
                var6 = var5.includeDynamicBlocks;
            case 161:
                var8 = var4 == var3;
                var2 = undefined;
                if (var8) {
                    _fun41827_ip = 176;
                    continue _fun41827
                }
            case 170:
                var2 = var3.includeDynamicBlocks;
            case 176:
                var0 = var7.bind(var1)(var6, var2);
            case 182:
                if (!var0) {
                    _fun41827_ip = 219;
                    continue _fun41827
                }
            case 185:
                var2 = var4 == var5;
                var6 = undefined;
                if (var2) {
                    _fun41827_ip = 200;
                    continue _fun41827
                }
            case 194:
                var6 = var5.countryCode;
            case 200:
                var7 = var4 == var3;
                var2 = undefined;
                if (var7) {
                    _fun41827_ip = 215;
                    continue _fun41827
                }
            case 209:
                var2 = var3.countryCode;
            case 215:
                var0 = var6 === var2;
            case 219:
                if (!var0) {
                    _fun41827_ip = 256;
                    continue _fun41827
                }
            case 222:
                var2 = var4 == var5;
                var6 = undefined;
                if (var2) {
                    _fun41827_ip = 237;
                    continue _fun41827
                }
            case 231:
                var6 = var5.paymentGateway;
            case 237:
                var7 = var4 == var3;
                var2 = undefined;
                if (var7) {
                    _fun41827_ip = 252;
                    continue _fun41827
                }
            case 246:
                var2 = var3.paymentGateway;
            case 252:
                var0 = var6 === var2;
            case 256:
                if (!var0) {
                    _fun41827_ip = 293;
                    continue _fun41827
                }
            case 259:
                var2 = var4 == var5;
                var6 = undefined;
                if (var2) {
                    _fun41827_ip = 274;
                    continue _fun41827
                }
            case 268:
                var6 = var5.shopHomeConfig;
            case 274:
                var7 = var4 == var3;
                var2 = undefined;
                if (var7) {
                    _fun41827_ip = 289;
                    continue _fun41827
                }
            case 283:
                var2 = var3.shopHomeConfig;
            case 289:
                var0 = var6 === var2;
            case 293:
                if (!var0) {
                    _fun41827_ip = 330;
                    continue _fun41827
                }
            case 296:
                var6 = var4 == var5;
                var2 = undefined;
                if (var6) {
                    _fun41827_ip = 311;
                    continue _fun41827
                }
            case 305:
                var2 = var5.skipNumCategories;
            case 311:
                var4 = var4 == var3;
                var1 = undefined;
                if (var4) {
                    _fun41827_ip = 326;
                    continue _fun41827
                }
            case 320:
                var1 = var3.skipNumCategories;
            case 326:
                var0 = var2 === var1;
            case 330:
                return var0;
        }
    };
    var2.areRequestOptionsEqual = var13;
    var2.fetchCollectiblesCategories = var12;
    var2.fetchCollectiblesPurchases = var11;
    var2.fetchCollectiblesProduct = var10;
    var2.maybeFetchCollectiblesProduct = var9;
    var2.claimPremiumCollectiblesProduct = var8;
    var2.validateCollectiblesRecipient = var7;
    var2.validateCollectiblesRecipientsBatch = var6;
    var2.fetchCollectiblesMarketings = var5;
    var2.fetchCollectiblesShopHome = var4;
    var4 = function(arg0) { // Environment: var3
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 17;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE';
        var1.type = var4;
        var4 = arg0;
        var1.shopHomeConfigOverride = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setShopHomeConfigOverride = var4;
    var3 = function(arg0) { // Environment: var3
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 17;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'COLLECTIBLES_SKIP_NUM_CATEGORIES';
        var1.type = var4;
        var4 = arg0;
        var1.skipNumCategories = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setSkipNumCategories = var3;
    var2.claimCollectiblesCategoryReward = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3958, 1676, 4555, 4572, 4573, 4574, 4583, 4576, 4589, 4590, 3242, 660, 4601, 4602, 4603, 3873, 806, 4604, 4605, 4611, 507, 3309, 4612, 4606, 4613, 4614, 2]);