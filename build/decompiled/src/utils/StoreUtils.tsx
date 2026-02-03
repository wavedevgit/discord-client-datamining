// utils/StoreUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun29013: for (var _fun29013_ip = 0;;) switch (_fun29013_ip) {
        case 0:
            var8 = require;
            var7 = metroImportDefault;
            var2 = exports;
            var9 = dependencyMap;
            var _closure1_slot0 = var8;
            var _closure1_slot1 = var7;
            var _closure1_slot2 = var9;
            var0 = function() {
                var4 = undefined;
                var0 = undefined;
                var3 = _closure1_slot3;
                var2 = function*(arg0) { // Environment: var2
                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                        _fun29016: for (var _fun29016_ip = 0;;) switch (_fun29016_ip) {
                            case 0:
                                StartGenerator();
                                var10 = arg0;
                                var4 = arguments[1];
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun29016_ip = 625;
                                    continue _fun29016
                                }
                            case 18:
                                var6 = undefined;
                                if (!(var4 === var6)) {
                                    _fun29016_ip = 26;
                                    continue _fun29016
                                }
                            case 24:
                                var4 = true;
                            case 26:
                                SaveGenerator(address = 30);
                            case 28:
                                return var6;
                            case 30:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun29016_ip = 622;
                                    continue _fun29016
                                }
                            case 39:
                                var5 = _closure1_slot4;
                                var2 = var5.isAuthenticated;
                                var2 = var2.bind(var5)();
                                if (!var4) {
                                    _fun29016_ip = 309;
                                    continue _fun29016
                                }
                            case 62:
                                if (!var2) {
                                    _fun29016_ip = 309;
                                    continue _fun29016
                                }
                            case 68:
                                var11 = new Array(0);
                                var2 = _closure1_slot6;
                                var2 = var2.hasFetchedPaymentSources;
                                if (var2) {
                                    _fun29016_ip = 145;
                                    continue _fun29016
                                }
                            case 87:
                                var4 = var11.push;
                                var2 = _closure1_slot5;
                                var2 = var2.paymentSourcesFetchRequest;
                                var5 = null;
                                if (!(var5 == var2)) {
                                    _fun29016_ip = 140;
                                    continue _fun29016
                                }
                            case 110:
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var5 = 10;
                                var5 = var9[var5];
                                var8 = var8.bind(var6)(var5);
                                var5 = var8.fetchPaymentSources;
                                var2 = var5.bind(var8)();
                            case 140:
                                var2 = var4.bind(var11)(var2);
                            case 145:
                                var2 = _closure1_slot5;
                                var2 = var2.ipCountryCodeLoaded;
                                if (var2) {
                                    _fun29016_ip = 198;
                                    continue _fun29016
                                }
                            case 158:
                                var4 = var11.push;
                                var5 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var2 = 10;
                                var2 = var8[var2];
                                var5 = var5.bind(var6)(var2);
                                var2 = var5.fetchIpCountryCode;
                                var2 = var2.bind(var5)();
                                var2 = var4.bind(var11)(var2);
                            case 198:
                                var4 = var11.push;
                                var2 = function() {
                                    var0 = global;
                                    var2 = var0.Promise;
                                    var1 = function() { // Environment: var0
                                        var3 = _closure1_slot3;
                                        var2 = undefined;
                                        var1 = function*(arg0) { // Environment: var0
                                            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                                _fun29020: for (var _fun29020_ip = 0;;) switch (_fun29020_ip) {
                                                    case 0:
                                                        StartGenerator();
                                                        var2 = arg0;
                                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                        if (var1) {
                                                            _fun29020_ip = 126;
                                                            continue _fun29020
                                                        }
                                                    case 12:
                                                        var _closure8_slot0 = var2;
                                                        var1 = undefined;
                                                        var _closure8_slot1 = var1;
                                                        var6 = _closure1_slot7;
                                                        var5 = var6.hasFetchedSubscriptions;
                                                        var5 = var5.bind(var6)();
                                                        if (var5) {
                                                            _fun29020_ip = 119;
                                                            continue _fun29020
                                                        }
                                                    case 42:
                                                        var5 = _closure1_slot5;
                                                        var5 = var5.isSubscriptionFetching;
                                                        if (var5) {
                                                            _fun29020_ip = 104;
                                                            continue _fun29020
                                                        }
                                                    case 55:
                                                        var5 = _closure1_slot0;
                                                        var6 = _closure1_slot2;
                                                        var3 = 10;
                                                        var3 = var6[var3];
                                                        var5 = var5.bind(var1)(var3);
                                                        var3 = var5.fetchSubscriptions;
                                                        var3 = var3.bind(var5)();
                                                        SaveGenerator(address = 89);
                                                    case 87:
                                                        return var3;
                                                    case 89:
                                                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                                                        if (var5) {
                                                            _fun29020_ip = 101;
                                                            continue _fun29020
                                                        }
                                                    case 95:
                                                        var5 = var2.bind(var1)();
                                                        _fun29020_ip = 123;
                                                        continue _fun29020;
                                                    case 101:
                                                        return var3;
                                                    case 104:
                                                        var3 = function() {
                                                            _fun29021: for (var _fun29021_ip = 0;;) switch (_fun29021_ip) {
                                                                case 0:
                                                                    var0 = _closure1_slot5;
                                                                    var1 = var0.isSubscriptionFetching;
                                                                    if (var1) {
                                                                        _fun29021_ip = 31;
                                                                        continue _fun29021
                                                                    }
                                                                case 19:
                                                                    var2 = _closure8_slot0;
                                                                    var1 = undefined;
                                                                    var1 = var2.bind(var1)();
                                                                    _fun29021_ip = 54;
                                                                    continue _fun29021;
                                                                case 31:
                                                                    var1 = global;
                                                                    var3 = var1.setTimeout;
                                                                    var2 = _closure8_slot1;
                                                                    var1 = undefined;
                                                                    var0 = 50;
                                                                    var0 = var3.bind(var1)(var2, var0);
                                                                case 54:
                                                                    var0 = undefined;
                                                                    return var0;
                                                            }
                                                        };
                                                        _closure8_slot1 = var3;
                                                        var3 = var3.bind(var1)();
                                                        _fun29020_ip = 123;
                                                        continue _fun29020;
                                                    case 119:
                                                        var2 = var2.bind(var1)();
                                                    case 123:
                                                        return var1;
                                                    case 126:
                                                        return var0;
                                                }
                                            };
                                            return var0;
                                        };
                                        var1 = var3.bind(var2)(var1);
                                        var _closure6_slot0 = var1;
                                        var0 = function() { // Environment: var0
                                            var0 = undefined;
                                            var3 = _closure6_slot0;
                                            var2 = var3.apply;
                                            var0 = arguments;
                                            var1 = var0;
                                            var0 = this;
                                            var0 = var2.bind(var3)(var0, var1);
                                            return var0;
                                        };
                                        return var0;
                                    };
                                    var0 = undefined;
                                    var3 = var1.bind(var0)();
                                    var1 = var2.prototype;
                                    var1 = Object.create(var1, {
                                        constructor: {
                                            value: var2
                                        }
                                    });
                                    var4 = var1;
                                    var0 = new var4[var2](var3, var2);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    return var0;
                                };
                                var2 = var2.bind(var6)();
                                var2 = var4.bind(var11)(var2);
                                var8 = global;
                                var5 = var8.Promise;
                                var4 = var5.race;
                                var9 = var8.Promise;
                                var2 = var9.allSettled;
                                var9 = var2.bind(var9)(var11);
                                var2 = new Array(2);
                                var2[0] = var9;
                                var9 = var8.Promise;
                                var8 = var9.prototype;
                                var8 = Object.create(var8, {
                                    constructor: {
                                        value: var9
                                    }
                                });
                                var13 = function(arg0) { // Environment: var7
                                    var0 = global;
                                    var3 = var0.setTimeout;
                                    var2 = undefined;
                                    var1 = arg0;
                                    var0 = 10000;
                                    var0 = var3.bind(var2)(var1, var0);
                                    return var0;
                                };
                                var14 = var8;
                                var7 = new var14[var9](var13, var12);
                                var7 = var7 instanceof Object ? var7 : var8;
                                var2[1] = var7;
                                var2 = var4.bind(var5)(var2);
                                SaveGenerator(address = 300);
                            case 298:
                                return var2;
                            case 300:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                                if (var4) {
                                    _fun29016_ip = 619;
                                    continue _fun29016
                                }
                            case 309:
                                var5 = _closure1_slot6;
                                var4 = var5.getDefaultBillingCountryCode;
                                var5 = var4.bind(var5)();
                                var4 = _closure1_slot6;
                                var4 = var4.defaultPaymentSource;
                                var7 = null;
                                var9 = var7 == var4;
                                var8 = undefined;
                                if (var9) {
                                    _fun29016_ip = 351;
                                    continue _fun29016
                                }
                            case 346:
                                var8 = var4.id;
                            case 351:
                                var9 = var7 != var8;
                                var4 = null;
                                if (!var9) {
                                    _fun29016_ip = 363;
                                    continue _fun29016
                                }
                            case 360:
                                var4 = var8;
                            case 363:
                                var9 = _closure1_slot7;
                                var8 = var9.getPremiumTypeSubscription;
                                var8 = var8.bind(var9)();
                                var9 = var7 != var8;
                                if (!var9) {
                                    _fun29016_ip = 394;
                                    continue _fun29016
                                }
                            case 384:
                                var11 = var8.paymentSourceId;
                                var9 = var7 != var11;
                            case 394:
                                if (!var9) {
                                    _fun29016_ip = 403;
                                    continue _fun29016
                                }
                            case 397:
                                var4 = var8.paymentSourceId;
                            case 403:
                                if (!(var7 === var5)) {
                                    _fun29016_ip = 432;
                                    continue _fun29016
                                }
                            case 407:
                                var8 = _closure1_slot5;
                                var9 = var8.ipCountryCode;
                                var11 = var7 != var9;
                                var8 = null;
                                if (!var11) {
                                    _fun29016_ip = 429;
                                    continue _fun29016
                                }
                            case 426:
                                var8 = var9;
                            case 429:
                                var5 = var8;
                            case 432:
                                var8 = {};
                                if (!(var7 != var5)) {
                                    _fun29016_ip = 444;
                                    continue _fun29016
                                }
                            case 438:
                                var8.country_code = var5;
                            case 444:
                                if (!(var7 != var4)) {
                                    _fun29016_ip = 454;
                                    continue _fun29016
                                }
                            case 448:
                                var8.payment_source_id = var4;
                            case 454:
                                if (!(var7 == var5)) {
                                    _fun29016_ip = 465;
                                    continue _fun29016
                                }
                            case 458:
                                var5 = var10;
                                if (!(var7 != var4)) {
                                    _fun29016_ip = 545;
                                    continue _fun29016
                                }
                            case 465:
                                var9 = 'string';
                                var7 = typeof var10;
                                var4 = var10;
                                if (!(var9 === var7)) {
                                    _fun29016_ip = 498;
                                    continue _fun29016
                                }
                            case 479:
                                var7 = {
                                    'url': null,
                                    'oldFormErrors': true,
                                    'rejectWithError': false
                                };
                                var7.url = var10;
                                var4 = var7;
                            case 498:
                                var7 = var4.query;
                                var7 = typeof var7;
                                if (!(var9 !== var7)) {
                                    _fun29016_ip = 583;
                                    continue _fun29016
                                }
                            case 511:
                                var7 = {};
                                var13 = var7;
                                var12 = var8;
                                var8 = copyDataProperties(var13, var12);
                                var12 = var4.query;
                                var13 = var7;
                                var8 = copyDataProperties(var13, var12);
                                var4.query = var7;
                                var5 = var4;
                            case 545:
                                var4 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var3 = 11;
                                var3 = var7[var3];
                                var3 = var4.bind(var6)(var3);
                                var4 = var3.HTTP;
                                var3 = var4.get;
                                var3 = var3.bind(var4)(var5);
                                return var3;
                            case 583:
                                var3 = global;
                                var5 = var3.Error;
                                var3 = var5.prototype;
                                var4 = Object.create(var3, {
                                    constructor: {
                                        value: var5
                                    }
                                });
                                var13 = 'string query not supported';
                                var14 = var4;
                                var3 = new var14[var5](var13, var12);
                                var3 = var3 instanceof Object ? var3 : var4;
                                throw var3;
                            case 619:
                                return var2;
                            case 622:
                                return var1;
                            case 625:
                                return var0;
                        }
                    };
                    var1 = var0.next;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                _closure1_slot17 = var3;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure1_slot17 = var0;
            var4 = function arg0, arg1, arg2() {
                _fun29024: for (var _fun29024_ip = 0;;) switch (_fun29024_ip) {
                    case 0:
                        var3 = arg2;
                        var0 = arg1;
                        var _closure2_slot0 = var0;
                        var2 = var3.getNowPlaying;
                        var0 = arg0;
                        var5 = var2.bind(var3)(var0);
                        var0 = null;
                        if (!(var0 == var5)) {
                            _fun29024_ip = 36;
                            continue _fun29024
                        }
                    case 34:
                        var5 = {};
                    case 36:
                        var _closure2_slot1 = var5;
                        var4 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var2 = 14;
                        var2 = var8[var2];
                        var7 = undefined;
                        var4 = var4.bind(var7)(var2);
                        var2 = var4.keys;
                        var5 = var2.bind(var4)(var5);
                        var4 = var5.map;
                        var2 = function(arg0) { // Environment: var1
                            _fun29025: for (var _fun29025_ip = 0;;) switch (_fun29025_ip) {
                                case 0:
                                    var2 = _closure2_slot0;
                                    var1 = var2.getUser;
                                    var0 = arg0;
                                    var2 = var1.bind(var2)(var0);
                                    var0 = null;
                                    var1 = var0 == var2;
                                    if (var1) {
                                        _fun29025_ip = 63;
                                        continue _fun29025
                                    }
                                case 30:
                                    var1 = {};
                                    var1.user = var2;
                                    var3 = _closure2_slot1;
                                    var2 = var2.id;
                                    var2 = var3[var2];
                                    var2 = var2.startedPlaying;
                                    var1.startTime = var2;
                                    var0 = var1;
                                case 63:
                                    return var0;
                            }
                        };
                        var5 = var4.bind(var5)(var2);
                        var4 = var5.filter;
                        var6 = _closure1_slot0;
                        var2 = 15;
                        var2 = var8[var2];
                        var2 = var6.bind(var7)(var2);
                        var2 = var2.isNotNullish;
                        var4 = var4.bind(var5)(var2);
                        var2 = var4.sort;
                        var1 = function(arg0, arg1) { // Environment: var1
                            var0 = arg1;
                            var1 = var0.startTime;
                            var0 = arg0;
                            var0 = var0.startTime;
                            var0 = var1 - var0;
                            return var0;
                        };
                        var2 = var2.bind(var4)(var1);
                        var4 = var2.length;
                        var1 = 0;
                        var0 = null;
                        if (!(var1 !== var4)) {
                            _fun29024_ip = 175;
                            continue _fun29024
                        }
                    case 151:
                        var1 = {};
                        var3 = _closure1_slot10;
                        var3 = var3.NOW_PLAYING;
                        var1.type = var3;
                        var1.userInfo = var2;
                        var0 = var1;
                    case 175:
                        return var0;
                }
            };
            var _closure1_slot18 = var4;
            var3 = function arg0, arg1, arg2() {
                _fun29027: for (var _fun29027_ip = 0;;) switch (_fun29027_ip) {
                    case 0:
                        var3 = arg2;
                        var0 = arg1;
                        var _closure2_slot0 = var0;
                        var2 = var3.getStatisticsForApplication;
                        var0 = arg0;
                        var4 = var2.bind(var3)(var0);
                        var0 = null;
                        if (!(var0 != var4)) {
                            _fun29027_ip = 143;
                            continue _fun29027
                        }
                    case 32:
                        var3 = var4.map;
                        var2 = function(arg0) { // Environment: var1
                            _fun29028: for (var _fun29028_ip = 0;;) switch (_fun29028_ip) {
                                case 0:
                                    var2 = arg0;
                                    var3 = _closure2_slot0;
                                    var1 = var3.getUser;
                                    var0 = var2.user_id;
                                    var3 = var1.bind(var3)(var0);
                                    var0 = null;
                                    var1 = var0 == var3;
                                    if (var1) {
                                        _fun29028_ip = 75;
                                        continue _fun29028
                                    }
                                case 36:
                                    var1 = {};
                                    var1.user = var3;
                                    var3 = global;
                                    var4 = var3.Date;
                                    var3 = var4.parse;
                                    var2 = var2.last_played_at;
                                    var2 = var3.bind(var4)(var2);
                                    var1.endTime = var2;
                                    var0 = var1;
                                case 75:
                                    return var0;
                            }
                        };
                        var5 = var3.bind(var4)(var2);
                        var3 = var5.filter;
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 15;
                        var6 = var6[var2];
                        var2 = undefined;
                        var2 = var7.bind(var2)(var6);
                        var2 = var2.isNotNullish;
                        var3 = var3.bind(var5)(var2);
                        var2 = var3.sort;
                        var1 = function(arg0, arg1) { // Environment: var1
                            var0 = arg1;
                            var1 = var0.endTime;
                            var0 = arg0;
                            var0 = var0.endTime;
                            var0 = var1 - var0;
                            return var0;
                        };
                        var3 = var2.bind(var3)(var1);
                        var5 = var3.length;
                        var2 = 0;
                        var1 = null;
                        if (!(var2 !== var5)) {
                            _fun29027_ip = 141;
                            continue _fun29027
                        }
                    case 117:
                        var2 = {};
                        var4 = _closure1_slot10;
                        var4 = var4.EVER_PLAYED;
                        var2.type = var4;
                        var2.userInfo = var3;
                        var1 = var2;
                    case 141:
                        return var1;
                    case 143:
                        return var0;
                }
            };
            var _closure1_slot19 = var3;
            var0 = global;
            var10 = var0.Object;
            var6 = var10.defineProperty;
            var5 = {};
            var0 = true;
            var5.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var10)(var2, var0, var5);
            var0 = 0;
            var5 = var9[var0];
            var0 = undefined;
            var5 = var7.bind(var0)(var5);
            var _closure1_slot3 = var5;
            var5 = 1;
            var5 = var9[var5];
            var5 = var7.bind(var0)(var5);
            var _closure1_slot4 = var5;
            var5 = 2;
            var5 = var9[var5];
            var5 = var7.bind(var0)(var5);
            var _closure1_slot5 = var5;
            var5 = 3;
            var6 = var9[var5];
            var6 = var7.bind(var0)(var6);
            var _closure1_slot6 = var6;
            var6 = 4;
            var6 = var9[var6];
            var6 = var7.bind(var0)(var6);
            var _closure1_slot7 = var6;
            var6 = 5;
            var6 = var9[var6];
            var6 = var8.bind(var0)(var6);
            var10 = var6.Endpoints;
            var _closure1_slot8 = var10;
            var10 = var6.OperatingSystems;
            var _closure1_slot9 = var10;
            var10 = var6.StoreRecommendationTypes;
            var _closure1_slot10 = var10;
            var10 = var6.Routes;
            var _closure1_slot11 = var10;
            var10 = var6.SKUAccessTypes;
            var _closure1_slot12 = var10;
            var6 = var6.SKUFlags;
            var _closure1_slot13 = var6;
            var6 = 6;
            var6 = var9[var6];
            var7 = var7.bind(var0)(var6);
            var6 = var7.shim;
            var6 = var6.bind(var7)();
            var7 = 7;
            var6 = var9[var7];
            var6 = var8.bind(var0)(var6);
            var6 = var6.isMobile;
            var6 = !var6;
            if (!var6) {
                _fun29013_ip = 302;
                continue _fun29013
            }
        case 284:
            var7 = var9[var7];
            var7 = var8.bind(var0)(var7);
            var7 = var7.isTablet;
            var6 = !var7;
        case 302:
            if (!var6) {
                _fun29013_ip = 337;
                continue _fun29013
            }
        case 305:
            var7 = 8;
            var7 = var9[var7];
            var10 = var8.bind(var0)(var7);
            var7 = var10.getChromeVersion;
            var10 = var7.bind(var10)();
            var7 = -1;
            var6 = var7 !== var10;
        case 337:
            var _closure1_slot14 = var6;
            var7 = new Array(0);
            var _closure1_slot15 = var7;
            var7 = new Array(0);
            var _closure1_slot16 = var7;
            var7 = 19;
            var7 = var9[var7];
            var9 = var8.bind(var0)(var7);
            var8 = var9.fileFinishedImporting;
            var7 = 'utils/StoreUtils.tsx';
            var7 = var8.bind(var9)(var7);
            var2.SUPPORTS_WEBP = var6;
            var2.RECENTLY_RELEASED_MONTHS_THRESHOLD = var5;
            var5 = function arg0, arg1() {
                _fun29030: for (var _fun29030_ip = 0;;) switch (_fun29030_ip) {
                    case 0:
                        var7 = arg0;
                        var0 = arg1;
                        var3 = var0.analyticsSource;
                        var2 = var0.analyticsProperties;
                        var9 = var0.storeListingId;
                        var4 = var0.slug;
                        var6 = var0.channelId;
                        var5 = var0.guildId;
                        var1 = {};
                        var0 = {};
                        var0.analyticsSource = var3;
                        var0.analyticsProperties = var2;
                        var1.state = var0;
                        var2 = null;
                        var3 = var2 != var9;
                        var0 = '';
                        if (!var3) {
                            _fun29030_ip = 95;
                            continue _fun29030
                        }
                    case 71:
                        var3 = global;
                        var3 = var3.HermesInternal;
                        var8 = var3.concat;
                        var3 = '?store_listing_id=';
                        var0 = var8.bind(var3)(var9);
                    case 95:
                        var1.search = var0;
                        var0 = {};
                        if (!(var2 != var6)) {
                            _fun29030_ip = 110;
                            continue _fun29030
                        }
                    case 106:
                        if (!(var2 == var5)) {
                            _fun29030_ip = 131;
                            continue _fun29030
                        }
                    case 110:
                        var3 = _closure1_slot11;
                        var2 = var3.APPLICATION_STORE_LISTING_SKU;
                        var2 = var2.bind(var3)(var7, var4);
                        _fun29030_ip = 151;
                        continue _fun29030;
                    case 131:
                        var4 = _closure1_slot11;
                        var3 = var4.CHANNEL;
                        var2 = var3.bind(var4)(var5, var6, var7);
                    case 151:
                        var0.pathname = var2;
                        var12 = var0;
                        var11 = var1;
                        var1 = copyDataProperties(var12, var11);
                        return var0;
                }
            };
            var2.getStoreListingLocation = var5;
            var5 = function arg0, arg1() {
                var0 = arg1;
                var3 = var0.analyticsSource;
                var2 = var0.analyticsProperties;
                var6 = var0.slug;
                var0 = {};
                var5 = _closure1_slot11;
                var4 = var5.APPLICATION_STORE_LISTING_APPLICATION;
                var1 = arg0;
                var1 = var4.bind(var5)(var1, var6);
                var0.pathname = var1;
                var1 = {};
                var1.analyticsSource = var3;
                var1.analyticsProperties = var2;
                var0.state = var1;
                return var0;
            };
            var2.getApplicationStoreListingLocation = var5;
            var5 = function arg0, arg1, arg2, arg3() {
                _fun29032: for (var _fun29032_ip = 0;;) switch (_fun29032_ip) {
                    case 0:
                        var14 = arg0;
                        var0 = arg1;
                        var6 = arg2;
                        var13 = arg3;
                        var1 = global;
                        var2 = var1.window;
                        var2 = var2.GLOBAL_ENV;
                        var12 = var2.CDN_HOST;
                        var3 = null;
                        if (!(var3 == var13)) {
                            _fun29032_ip = 107;
                            continue _fun29032
                        }
                    case 38:
                        var4 = var0.mimeType;
                        if (var4) {
                            _fun29032_ip = 53;
                            continue _fun29032
                        }
                    case 47:
                        var4 = var0.mime_type;
                    case 53:
                        var5 = 'mp4';
                        var2 = 'video/quicktime';
                        var13 = var5;
                        if (!(var2 !== var4)) {
                            _fun29032_ip = 107;
                            continue _fun29032
                        }
                    case 72:
                        var2 = 'video/mp4';
                        var13 = var5;
                        if (!(var2 !== var4)) {
                            _fun29032_ip = 107;
                            continue _fun29032
                        }
                    case 85:
                        var2 = 'image/gif';
                        if (!(var2 !== var4)) {
                            _fun29032_ip = 103;
                            continue _fun29032
                        }
                    case 95:
                        var13 = 'webp';
                        _fun29032_ip = 107;
                        continue _fun29032;
                    case 103:
                        var13 = 'gif';
                    case 107:
                        var2 = 'webp';
                        var2 = var2 !== var13;
                        if (var2) {
                            _fun29032_ip = 127;
                            continue _fun29032
                        }
                    case 120:
                        var2 = _closure1_slot14;
                    case 127:
                        if (var2) {
                            _fun29032_ip = 134;
                            continue _fun29032
                        }
                    case 130:
                        var13 = 'png';
                    case 134:
                        var4 = 'string';
                        var2 = typeof var0;
                        var11 = var0;
                        if (!(var4 !== var2)) {
                            _fun29032_ip = 153;
                            continue _fun29032
                        }
                    case 148:
                        var11 = var0.id;
                    case 153:
                        if (!(var3 == var12)) {
                            _fun29032_ip = 223;
                            continue _fun29032
                        }
                    case 157:
                        var0 = var1.window;
                        var0 = var0.GLOBAL_ENV;
                        var7 = var0.API_ENDPOINT;
                        var2 = _closure1_slot8;
                        var0 = var2.STORE_ASSET;
                        var5 = var0.bind(var2)(var14, var11, var13);
                        var0 = var1.HermesInternal;
                        var4 = var0.concat;
                        var2 = '';
                        var0 = 'https:';
                        var2 = var4.bind(var2)(var0, var7, var5);
                        _fun29032_ip = 280;
                        continue _fun29032;
                    case 223:
                        var0 = var1.HermesInternal;
                        var10 = var0.concat;
                        var24 = '';
                        var23 = 'https:';
                        var22 = '//';
                        var20 = '/app-assets/';
                        var18 = '/store/';
                        var16 = '.';
                        var21 = var12;
                        var19 = var14;
                        var17 = var11;
                        var15 = var13;
                        var2 = var24[var10](var23, var22, var21, var20, var19, var18, var17, var16, var15, var14);
                    case 280:
                        var0 = var2;
                        if (!(var3 != var6)) {
                            _fun29032_ip = 372;
                            continue _fun29032
                        }
                    case 287:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var3 = 9;
                        var4 = var9[var3];
                        var7 = undefined;
                        var5 = var8.bind(var7)(var4);
                        var4 = var5.getBestMediaProxySize;
                        var3 = var9[var3];
                        var7 = var8.bind(var7)(var3);
                        var3 = var7.getDevicePixelRatio;
                        var3 = var3.bind(var7)();
                        var3 = var6 * var3;
                        var4 = var4.bind(var5)(var3);
                        var1 = var1.HermesInternal;
                        var3 = var1.concat;
                        var1 = '?size=';
                        var1 = var3.bind(var1)(var4);
                        var0 = var2 + var1;
                    case 372:
                        return var0;
                }
            };
            var2.getAssetURL = var5;
            var5 = function() {
                var0 = undefined;
                var3 = _closure1_slot17;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var2.httpGetWithCountryCodeQuery = var5;
            var5 = function arg0() {
                _fun29034: for (var _fun29034_ip = 0;;) switch (_fun29034_ip) {
                    case 0:
                        var2 = arg0;
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var5 = 12;
                        var1 = var1[var5];
                        var4 = undefined;
                        var1 = var3.bind(var4)(var1);
                        var1 = var1.PlatformTypes;
                        var1 = var1.WINDOWS;
                        if (!(var1 !== var2)) {
                            _fun29034_ip = 138;
                            continue _fun29034
                        }
                    case 44:
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var1 = var1[var5];
                        var1 = var3.bind(var4)(var1);
                        var1 = var1.PlatformTypes;
                        var1 = var1.OSX;
                        if (!(var1 !== var2)) {
                            _fun29034_ip = 126;
                            continue _fun29034
                        }
                    case 77:
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var1 = var1[var5];
                        var1 = var3.bind(var4)(var1);
                        var1 = var1.PlatformTypes;
                        var1 = var1.LINUX;
                        if (!(var1 !== var2)) {
                            _fun29034_ip = 114;
                            continue _fun29034
                        }
                    case 110:
                        var1 = null;
                        return var1;
                    case 114:
                        var1 = _closure1_slot9;
                        var1 = var1.LINUX;
                        return var1;
                    case 126:
                        var1 = _closure1_slot9;
                        var1 = var1.MACOS;
                        return var1;
                    case 138:
                        var0 = _closure1_slot9;
                        var0 = var0.WINDOWS;
                        return var0;
                }
            };
            var2.nativePlatformTypeToSKUOperatingSystem = var5;
            var5 = function arg0() {
                _fun29035: for (var _fun29035_ip = 0;;) switch (_fun29035_ip) {
                    case 0:
                        var4 = arg0;
                        var1 = _closure1_slot9;
                        var1 = var1.WINDOWS;
                        if (!(var1 !== var4)) {
                            _fun29035_ip = 228;
                            continue _fun29035
                        }
                    case 23:
                        var1 = _closure1_slot9;
                        var1 = var1.MACOS;
                        if (!(var1 !== var4)) {
                            _fun29035_ip = 167;
                            continue _fun29035
                        }
                    case 40:
                        var1 = _closure1_slot9;
                        var1 = var1.LINUX;
                        if (!(var1 !== var4)) {
                            _fun29035_ip = 106;
                            continue _fun29035
                        }
                    case 54:
                        var1 = global;
                        var3 = var1.Error;
                        var1 = var1.HermesInternal;
                        var2 = var1.concat;
                        var1 = 'Unknown operating system value: ';
                        var7 = var2.bind(var1)(var4);
                        var2 = var3.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var3
                            }
                        });
                        var8 = var2;
                        var1 = new var8[var3](var7, var6);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 106:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 13;
                        var2 = var6[var1];
                        var4 = undefined;
                        var2 = var5.bind(var4)(var2);
                        var3 = var2.intl;
                        var2 = var3.string;
                        var1 = var6[var1];
                        var1 = var5.bind(var4)(var1);
                        var1 = var1.t;
                        var1 = var1.tcawo3;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    case 167:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 13;
                        var2 = var6[var1];
                        var4 = undefined;
                        var2 = var5.bind(var4)(var2);
                        var3 = var2.intl;
                        var2 = var3.string;
                        var1 = var6[var1];
                        var1 = var5.bind(var4)(var1);
                        var1 = var1.t;
                        var1 = var1.E4u4n5;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    case 228:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var0 = 13;
                        var1 = var5[var0];
                        var3 = undefined;
                        var1 = var4.bind(var3)(var1);
                        var2 = var1.intl;
                        var1 = var2.string;
                        var0 = var5[var0];
                        var0 = var4.bind(var3)(var0);
                        var0 = var0.t;
                        var0 = var0["0/xHFO"];
                        var0 = var1.bind(var2)(var0);
                        return var0;
                }
            };
            var2.skuOperatingSystemToText = var5;
            var5 = function arg0, arg1, arg2() {
                _fun29036: for (var _fun29036_ip = 0;;) switch (_fun29036_ip) {
                    case 0:
                        var2 = arg1;
                        var3 = arg2;
                        var1 = var2.getApplication;
                        var0 = arg0;
                        var1 = var1.bind(var2)(var0);
                        var4 = null;
                        var2 = var4 == var1;
                        var0 = null;
                        if (var2) {
                            _fun29036_ip = 62;
                            continue _fun29036
                        }
                    case 31:
                        var2 = var1.primarySkuId;
                        var2 = var4 == var2;
                        var0 = null;
                        if (var2) {
                            _fun29036_ip = 62;
                            continue _fun29036
                        }
                    case 46:
                        var2 = var3.get;
                        var1 = var1.primarySkuId;
                        var0 = var2.bind(var3)(var1);
                    case 62:
                        return var0;
                }
            };
            var2.getPrimarySKUForApplication = var5;
            var2.getNowPlayingReason = var4;
            var2.getEverPlayedReason = var3;
            var3 = function arg0, arg1, arg2, arg3, arg4() {
                _fun29037: for (var _fun29037_ip = 0;;) switch (_fun29037_ip) {
                    case 0:
                        var2 = arg1;
                        var6 = arg2;
                        var5 = arg4;
                        var1 = var2.get;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        var1 = null;
                        if (!(var1 != var0)) {
                            _fun29037_ip = 200;
                            continue _fun29037
                        }
                    case 33:
                        var4 = var0.applicationId;
                        var0 = new Array(0);
                        var10 = new Array(0);
                        var9 = _closure1_slot18;
                        var3 = undefined;
                        var8 = arg3;
                        var8 = var9.bind(var3)(var4, var6, var8);
                        if (!(var1 != var8)) {
                            _fun29037_ip = 100;
                            continue _fun29037
                        }
                    case 69:
                        var9 = var0.push;
                        var9 = var9.bind(var0)(var8);
                        var11 = var8.userInfo;
                        var9 = var11.map;
                        var8 = function(arg0) { // Environment: var7
                            var0 = arg0;
                            var0 = var0.user;
                            var0 = var0.id;
                            return var0;
                        };
                        var10 = var9.bind(var11)(var8);
                    case 100:
                        var8 = var5.getStatisticsForApplication;
                        var9 = var8.bind(var5)(var4);
                        if (!(var1 != var9)) {
                            _fun29037_ip = 198;
                            continue _fun29037
                        }
                    case 115:
                        var8 = var9.map;
                        var7 = function(arg0) { // Environment: var7
                            var0 = arg0;
                            var0 = var0.user_id;
                            return var0;
                        };
                        var9 = var8.bind(var9)(var7);
                        var8 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var7 = 16;
                        var7 = var11[var7];
                        var8 = var8.bind(var3)(var7);
                        var7 = var8.difference;
                        var7 = var7.bind(var8)(var9, var10);
                        var8 = var7.length;
                        var7 = 0;
                        if (!(var8 > var7)) {
                            _fun29037_ip = 198;
                            continue _fun29037
                        }
                    case 173:
                        var2 = _closure1_slot19;
                        var2 = var2.bind(var3)(var4, var6, var5);
                        if (!(var1 != var2)) {
                            _fun29037_ip = 198;
                            continue _fun29037
                        }
                    case 188:
                        var1 = var0.push;
                        var1 = var1.bind(var0)(var2);
                    case 198:
                        return var0;
                    case 200:
                        var0 = _closure1_slot15;
                        return var0;
                }
            };
            var2.getSocialRecommendationReasons = var3;
            var1 = function arg0, arg1, arg2() {
                _fun29040: for (var _fun29040_ip = 0;;) switch (_fun29040_ip) {
                    case 0:
                        var3 = arg0;
                        var1 = arg1;
                        var2 = arg2;
                        var0 = var1.get;
                        var1 = var0.bind(var1)(var3);
                        var0 = var2.getForSKU;
                        var3 = var0.bind(var2)(var3);
                        var2 = null;
                        if (!(var2 != var1)) {
                            _fun29040_ip = 327;
                            continue _fun29040
                        }
                    case 39:
                        if (!(var2 != var3)) {
                            _fun29040_ip = 327;
                            continue _fun29040
                        }
                    case 46:
                        var0 = new Array(0);
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var5 = 17;
                        var5 = var7[var5];
                        var8 = undefined;
                        var9 = var6.bind(var8)(var5);
                        var7 = var9.hasFlag;
                        var6 = var1.flags;
                        var5 = _closure1_slot13;
                        var5 = var5.HAS_FREE_PREMIUM_CONTENT;
                        var5 = var7.bind(var9)(var6, var5);
                        if (!var5) {
                            _fun29040_ip = 131;
                            continue _fun29040
                        }
                    case 105:
                        var6 = var0.push;
                        var5 = {};
                        var7 = _closure1_slot10;
                        var7 = var7.HAS_FREE_PREMIUM_CONTENT;
                        var5.type = var7;
                        var5 = var6.bind(var0)(var5);
                    case 131:
                        var6 = var1.releaseDate;
                        var5 = var2 != var6;
                        if (!var5) {
                            _fun29040_ip = 191;
                            continue _fun29040
                        }
                    case 144:
                        var9 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var7 = 18;
                        var7 = var10[var7];
                        var7 = var9.bind(var8)(var7);
                        var9 = var7.bind(var8)();
                        var8 = var9.diff;
                        var7 = 'months';
                        var8 = var8.bind(var9)(var6, var7);
                        var7 = 3;
                        var5 = var8 < var7;
                    case 191:
                        if (!var5) {
                            _fun29040_ip = 278;
                            continue _fun29040
                        }
                    case 194:
                        var5 = var1.accessType;
                        var1 = _closure1_slot12;
                        var1 = var1.EARLY_ACCESS;
                        if (!(var5 !== var1)) {
                            _fun29040_ip = 247;
                            continue _fun29040
                        }
                    case 214:
                        var5 = var0.push;
                        var1 = {};
                        var7 = _closure1_slot10;
                        var7 = var7.RECENT_RELEASE_DATE;
                        var1.type = var7;
                        var1.releaseDate = var6;
                        var1 = var5.bind(var0)(var1);
                        _fun29040_ip = 278;
                        continue _fun29040;
                    case 247:
                        var5 = var0.push;
                        var1 = {};
                        var7 = _closure1_slot10;
                        var7 = var7.EARLY_ACCESS;
                        var1.type = var7;
                        var1.releaseDate = var6;
                        var1 = var5.bind(var0)(var1);
                    case 278:
                        var1 = var3.flavorText;
                        if (!(var2 != var1)) {
                            _fun29040_ip = 325;
                            continue _fun29040
                        }
                    case 288:
                        var2 = var0.push;
                        var1 = {};
                        var4 = _closure1_slot10;
                        var4 = var4.FLAVOR_TEXT;
                        var1.type = var4;
                        var3 = var3.flavorText;
                        var1.flavorText = var3;
                        var1 = var2.bind(var0)(var1);
                    case 325:
                        return var0;
                    case 327:
                        var0 = _closure1_slot16;
                        return var0;
                }
            };
            var2.getNonSocialRecommendationReasons = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1216, 3111, 3112, 3117, 660, 3362, 3360, 3441, 1443, 3443, 507, 478, 1234, 21, 1304, 22, 1384, 3045, 2]);