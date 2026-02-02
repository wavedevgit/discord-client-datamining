// modules/global_discovery_servers/GlobalDiscoveryServersUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun117499: for (var _fun117499_ip = 0;;) switch (_fun117499_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun117499_ip = 203;
                            continue _fun117499
                        }
                    case 13:
                        var11 = var1.loadId;
                        var12 = var1.guildId;
                        var10 = var1.index;
                        var9 = var1.categoryId;
                        var8 = var1.analyticsLocation;
                        var2 = var1.options;
                        var3 = undefined;
                        SaveGenerator(address = 52);
                    case 50:
                        return var3;
                    case 52:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun117499_ip = 200;
                            continue _fun117499
                        }
                    case 61:
                        var6 = {};
                        var15 = var6;
                        var14 = var2;
                        var2 = copyDataProperties(var15, var14);
                        var2 = 'loadId';
                        var6[var2] = var11;
                        var5 = _closure1_slot2;
                        var7 = _closure1_slot3;
                        var2 = 7;
                        var2 = var7[var2];
                        var5 = var5.bind(var3)(var2);
                        var2 = var5.startLurking;
                        var2 = var2.bind(var5)(var12, var8, var6);
                        SaveGenerator(address = 122);
                    case 120:
                        return var2;
                    case 122:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                        if (var5) {
                            _fun117499_ip = 197;
                            continue _fun117499
                        }
                    case 128:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var5 = 8;
                        var5 = var7[var5];
                        var7 = var6.bind(var3)(var5);
                        var6 = var7.track;
                        var4 = _closure1_slot14;
                        var5 = var4.GUILD_DISCOVERY_GUILD_SELECTED;
                        var4 = {};
                        var4.guild_id = var12;
                        var4.load_id = var11;
                        var4.card_index = var10;
                        var4.category_id = var9;
                        var4.location = var8;
                        var4 = var6.bind(var7)(var5, var4);
                        return var3;
                    case 197:
                        return var2;
                    case 200:
                        return var1;
                    case 203:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot15 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot15 = var0;
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
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.GlobalDiscoveryServerTab;
    var _closure1_slot7 = var6;
    var6 = var3.FEATURED_GUILDS_CACHE_DURATION;
    var _closure1_slot8 = var6;
    var6 = var3.FEATURED_GUILDS_SEARCH_OPTIONS;
    var _closure1_slot9 = var6;
    var6 = var3.CategoryId;
    var _closure1_slot10 = var6;
    var6 = var3.DISCOVERY_ALL_CATEGORIES_ID;
    var _closure1_slot11 = var6;
    var6 = var3.getLanguageOptions;
    var _closure1_slot12 = var6;
    var3 = var3.HUBS_CATEGORY_ID;
    var _closure1_slot13 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot14 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/global_discovery_servers/GlobalDiscoveryServersUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun117500: for (var _fun117500_ip = 0;;) switch (_fun117500_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot7;
                var1 = var1.FEATURED;
                if (!(var1 !== var2)) {
                    _fun117500_ip = 479;
                    continue _fun117500
                }
            case 23:
                var1 = _closure1_slot7;
                var1 = var1.GAMING;
                if (!(var1 !== var2)) {
                    _fun117500_ip = 420;
                    continue _fun117500
                }
            case 40:
                var1 = _closure1_slot7;
                var1 = var1.MUSIC;
                if (!(var1 !== var2)) {
                    _fun117500_ip = 361;
                    continue _fun117500
                }
            case 57:
                var1 = _closure1_slot7;
                var1 = var1.ENTERTAINMENT;
                if (!(var1 !== var2)) {
                    _fun117500_ip = 302;
                    continue _fun117500
                }
            case 74:
                var1 = _closure1_slot7;
                var1 = var1.TECH;
                if (!(var1 !== var2)) {
                    _fun117500_ip = 243;
                    continue _fun117500
                }
            case 91:
                var1 = _closure1_slot7;
                var1 = var1.EDUCATION;
                if (!(var1 !== var2)) {
                    _fun117500_ip = 184;
                    continue _fun117500
                }
            case 105:
                var1 = _closure1_slot7;
                var1 = var1.HUBS;
                if (!(var1 !== var2)) {
                    _fun117500_ip = 123;
                    continue _fun117500
                }
            case 119:
                var1 = undefined;
                return var1;
            case 123:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 5;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["q469/Z"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 184:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 5;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.Gy9woq;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 243:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 5;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["0A0By5"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 302:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 5;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.gSbmdt;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 361:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 5;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["nt9PL+"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 420:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 5;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["CD/USA"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 479:
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var0 = 5;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["RU+DCe"];
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getGlobalDiscoveryServersTabTitle = var3;
    var3 = function arg0() {
        _fun117501: for (var _fun117501_ip = 0;;) switch (_fun117501_ip) {
            case 0:
                var4 = arg0;
                var1 = _closure1_slot7;
                var1 = var1.FEATURED;
                if (!(var1 !== var4)) {
                    _fun117501_ip = 530;
                    continue _fun117501
                }
            case 23:
                var1 = _closure1_slot7;
                var1 = var1.GAMING;
                if (!(var1 !== var4)) {
                    _fun117501_ip = 471;
                    continue _fun117501
                }
            case 40:
                var1 = _closure1_slot7;
                var1 = var1.MUSIC;
                if (!(var1 !== var4)) {
                    _fun117501_ip = 412;
                    continue _fun117501
                }
            case 57:
                var1 = _closure1_slot7;
                var1 = var1.ENTERTAINMENT;
                if (!(var1 !== var4)) {
                    _fun117501_ip = 353;
                    continue _fun117501
                }
            case 74:
                var1 = _closure1_slot7;
                var1 = var1.TECH;
                if (!(var1 !== var4)) {
                    _fun117501_ip = 294;
                    continue _fun117501
                }
            case 91:
                var1 = _closure1_slot7;
                var1 = var1.EDUCATION;
                if (!(var1 !== var4)) {
                    _fun117501_ip = 235;
                    continue _fun117501
                }
            case 108:
                var1 = _closure1_slot7;
                var1 = var1.HUBS;
                if (!(var1 !== var4)) {
                    _fun117501_ip = 174;
                    continue _fun117501
                }
            case 122:
                var1 = global;
                var3 = var1.Error;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = '[getGlobalDiscoveryServerTabTitle] Unsupported tab: ';
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
            case 174:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 5;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.X5xPlb;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 235:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 5;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.Gy9woq;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 294:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 5;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["0A0By5"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 353:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 5;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.gSbmdt;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 412:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 5;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["nt9PL+"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 471:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 5;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["CD/USA"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 530:
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var0 = 5;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.OlDfzP;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getGlobalDiscoveryServersBannerTitle = var3;
    var3 = function arg0() {
        _fun117502: for (var _fun117502_ip = 0;;) switch (_fun117502_ip) {
            case 0:
                var4 = arg0;
                var1 = _closure1_slot7;
                var1 = var1.FEATURED;
                if (!(var1 !== var4)) {
                    _fun117502_ip = 540;
                    continue _fun117502
                }
            case 23:
                var1 = _closure1_slot7;
                var1 = var1.GAMING;
                if (!(var1 !== var4)) {
                    _fun117502_ip = 479;
                    continue _fun117502
                }
            case 40:
                var1 = _closure1_slot7;
                var1 = var1.MUSIC;
                if (!(var1 !== var4)) {
                    _fun117502_ip = 418;
                    continue _fun117502
                }
            case 57:
                var1 = _closure1_slot7;
                var1 = var1.ENTERTAINMENT;
                if (!(var1 !== var4)) {
                    _fun117502_ip = 357;
                    continue _fun117502
                }
            case 74:
                var1 = _closure1_slot7;
                var1 = var1.TECH;
                if (!(var1 !== var4)) {
                    _fun117502_ip = 296;
                    continue _fun117502
                }
            case 91:
                var1 = _closure1_slot7;
                var1 = var1.EDUCATION;
                if (!(var1 !== var4)) {
                    _fun117502_ip = 235;
                    continue _fun117502
                }
            case 108:
                var1 = _closure1_slot7;
                var1 = var1.HUBS;
                if (!(var1 !== var4)) {
                    _fun117502_ip = 174;
                    continue _fun117502
                }
            case 122:
                var1 = global;
                var3 = var1.Error;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = '[getGlobalDiscoveryServerTabTitle] Unsupported tab: ';
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
            case 174:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 5;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["F/IQCI"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 235:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 5;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.sasIWU;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 296:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 5;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.Ew4d56;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 357:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 5;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.R09vf0;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 418:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 5;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["SOio+D"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 479:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 5;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.AAJ5ov;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 540:
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var0 = 5;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.SdMhrk;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getGlobalDiscoveryServersBannerDescription = var3;
    var3 = function arg0() {
        _fun117503: for (var _fun117503_ip = 0;;) switch (_fun117503_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot7;
                var1 = var1.FEATURED;
                if (!(var1 !== var2)) {
                    _fun117503_ip = 411;
                    continue _fun117503
                }
            case 23:
                var1 = _closure1_slot7;
                var1 = var1.GAMING;
                if (!(var1 !== var2)) {
                    _fun117503_ip = 350;
                    continue _fun117503
                }
            case 40:
                var1 = _closure1_slot7;
                var1 = var1.MUSIC;
                if (!(var1 !== var2)) {
                    _fun117503_ip = 289;
                    continue _fun117503
                }
            case 57:
                var1 = _closure1_slot7;
                var1 = var1.ENTERTAINMENT;
                if (!(var1 !== var2)) {
                    _fun117503_ip = 228;
                    continue _fun117503
                }
            case 74:
                var1 = _closure1_slot7;
                var1 = var1.TECH;
                if (!(var1 !== var2)) {
                    _fun117503_ip = 167;
                    continue _fun117503
                }
            case 88:
                var1 = _closure1_slot7;
                var1 = var1.EDUCATION;
                if (!(var1 !== var2)) {
                    _fun117503_ip = 106;
                    continue _fun117503
                }
            case 102:
                var1 = null;
                return var1;
            case 106:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 5;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.uexPgT;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 167:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 5;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["4dawps"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 228:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 5;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.k1CYxv;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 289:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 5;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.nfgDzz;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 350:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 5;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.fWbIpf;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 411:
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var0 = 5;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.crt84X;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getGlobalDiscoveryServersTabSectionTitle = var3;
    var3 = function arg0() {
        _fun117504: for (var _fun117504_ip = 0;;) switch (_fun117504_ip) {
            case 0:
                var4 = arg0;
                var1 = _closure1_slot7;
                var1 = var1.FEATURED;
                if (!(var1 !== var4)) {
                    _fun117504_ip = 214;
                    continue _fun117504
                }
            case 23:
                var1 = _closure1_slot7;
                var1 = var1.GAMING;
                if (!(var1 !== var4)) {
                    _fun117504_ip = 202;
                    continue _fun117504
                }
            case 40:
                var1 = _closure1_slot7;
                var1 = var1.MUSIC;
                if (!(var1 !== var4)) {
                    _fun117504_ip = 190;
                    continue _fun117504
                }
            case 57:
                var1 = _closure1_slot7;
                var1 = var1.ENTERTAINMENT;
                if (!(var1 !== var4)) {
                    _fun117504_ip = 178;
                    continue _fun117504
                }
            case 71:
                var1 = _closure1_slot7;
                var1 = var1.TECH;
                if (!(var1 !== var4)) {
                    _fun117504_ip = 166;
                    continue _fun117504
                }
            case 85:
                var1 = _closure1_slot7;
                var1 = var1.EDUCATION;
                if (!(var1 !== var4)) {
                    _fun117504_ip = 154;
                    continue _fun117504
                }
            case 99:
                var1 = _closure1_slot7;
                var1 = var1.HUBS;
                if (!(var1 !== var4)) {
                    _fun117504_ip = 148;
                    continue _fun117504
                }
            case 113:
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.assertNever;
                var2 = var2.bind(var3)(var4);
                return var1;
            case 148:
                var1 = _closure1_slot13;
                return var1;
            case 154:
                var1 = _closure1_slot10;
                var1 = var1.Education;
                return var1;
            case 166:
                var1 = _closure1_slot10;
                var1 = var1.Science;
                return var1;
            case 178:
                var1 = _closure1_slot10;
                var1 = var1.Television;
                return var1;
            case 190:
                var1 = _closure1_slot10;
                var1 = var1.Music;
                return var1;
            case 202:
                var1 = _closure1_slot10;
                var1 = var1.Activity;
                return var1;
            case 214:
                var0 = _closure1_slot11;
                return var0;
        }
    };
    var2.getCategoryIdFromServerTab = var3;
    var3 = function arg0() {
        _fun117505: for (var _fun117505_ip = 0;;) switch (_fun117505_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                var0 = var0 == var2;
                if (var0) {
                    _fun117505_ip = 44;
                    continue _fun117505
                }
            case 12:
                var1 = global;
                var3 = var1.Date;
                var1 = var3.now;
                var1 = var1.bind(var3)();
                var2 = var1 - var2;
                var1 = _closure1_slot8;
                var0 = var2 > var1;
            case 44:
                return var0;
        }
    };
    var2.isStaleFeaturedGuilds = var3;
    var3 = function arg0() {
        var1 = arg0;
        var0 = {};
        var2 = var1.id;
        var0.id = var2;
        var2 = var1.name;
        var0.name = var2;
        var2 = var1.description;
        var0.description = var2;
        var2 = var1.splash;
        var0.splash = var2;
        var2 = var1.banner;
        var0.banner = var2;
        var2 = var1.icon;
        var0.icon = var2;
        var2 = global;
        var4 = var2.Set;
        var5 = var1.features;
        var3 = var4.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var4
            }
        });
        var6 = var3;
        var2 = new var6[var4](var5, var4);
        var2 = var2 instanceof Object ? var2 : var3;
        var0.features = var2;
        var2 = var1.approximate_presence_count;
        var0.presenceCount = var2;
        var2 = var1.approximate_member_count;
        var0.memberCount = var2;
        var2 = var1.premium_subscription_count;
        var0.premiumSubscriptionCount = var2;
        var2 = var1.preferred_locale;
        var0.preferredLocale = var2;
        var2 = var1.discovery_splash;
        var0.discoverySplash = var2;
        var2 = var1.emojis;
        var0.emojis = var2;
        var1 = var1.emoji_count;
        var0.emojiCount = var1;
        return var0;
    };
    var2.fromDiscoverableGuildServer = var3;
    var3 = function arg0() {
        var1 = arg0;
        var0 = {};
        var2 = var1.id;
        var0.id = var2;
        var2 = var1.name;
        var0.name = var2;
        var2 = var1.description;
        var0.description = var2;
        var2 = var1.splash;
        var0.splash = var2;
        var2 = var1.banner;
        var0.banner = var2;
        var2 = var1.icon;
        var0.icon = var2;
        var2 = global;
        var4 = var2.Set;
        var5 = var1.features;
        var3 = var4.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var4
            }
        });
        var6 = var3;
        var2 = new var6[var4](var5, var4);
        var2 = var2 instanceof Object ? var2 : var3;
        var0.features = var2;
        var2 = var1.approximate_presence_count;
        var0.presenceCount = var2;
        var2 = var1.approximate_member_count;
        var0.memberCount = var2;
        var2 = undefined;
        var0.premiumSubscriptionCount = var2;
        var0.preferredLocale = var2;
        var1 = var1.discovery_splash;
        var0.discoverySplash = var1;
        var1 = new Array(0);
        var0.emojis = var1;
        return var0;
    };
    var2.fromDiscoverableGuildSearchResult = var3;
    var3 = function() {
        _fun117508: for (var _fun117508_ip = 0;;) switch (_fun117508_ip) {
            case 0:
                var4 = arguments[0];
                var3 = undefined;
                if (!(var4 === var3)) {
                    _fun117508_ip = 29;
                    continue _fun117508
                }
            case 11:
                var2 = _closure1_slot5;
                var1 = new Array(1);
                var1[0] = var2;
                var4 = var1;
            case 29:
                var1 = var4;
                var2 = var1[Symbol.iterator];
                var1 = var2().next;
                var5 = var1().value;
                var1 = var2;
                var4 = var1 === var3;
                var1 = undefined;
                if (var4) {
                    _fun117508_ip = 54;
                    continue _fun117508
                }
            case 51:
                var1 = var5;
            case 54:
                if (var4) {
                    _fun117508_ip = 60;
                    continue _fun117508
                }
            case 57:
                var2.return();
            case 60:
                var _closure2_slot0 = var3;
                var2 = _closure1_slot12;
                var2 = var2.bind(var3)();
                var1 = var1.locale;
                _closure2_slot0 = var1;
                var1 = var2.find;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.code;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                var1 = null;
                if (!(var1 == var0)) {
                    _fun117508_ip = 114;
                    continue _fun117508
                }
            case 108:
                var1 = 0;
                var0 = var2[var1];
            case 114:
                var0 = var0.code;
                return var0;
        }
    };
    var2.getLanguageCodeFallback = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot15;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.navigateToGuild = var3;
    var3 = function() {
        _fun117511: for (var _fun117511_ip = 0;;) switch (_fun117511_ip) {
            case 0:
                var5 = _closure1_slot6;
                var1 = var5.getError;
                var4 = _closure1_slot9;
                var3 = var1.bind(var5)(var4);
                var1 = var5.getIsFetching;
                var2 = var1.bind(var5)(var4);
                var1 = var5.getIsInitialFetchComplete;
                var1 = var1.bind(var5)(var4);
                if (var1) {
                    _fun117511_ip = 84;
                    continue _fun117511
                }
            case 47:
                if (var2) {
                    _fun117511_ip = 84;
                    continue _fun117511
                }
            case 50:
                var6 = _closure1_slot1;
                var5 = _closure1_slot3;
                var4 = 9;
                var5 = var5[var4];
                var4 = undefined;
                var5 = var6.bind(var4)(var5);
                var4 = var5.fetchFeaturedGuilds;
                var4 = var4.bind(var5)();
                _fun117511_ip = 144;
                continue _fun117511;
            case 84:
                if (!var1) {
                    _fun117511_ip = 90;
                    continue _fun117511
                }
            case 87:
                var1 = !var2;
            case 90:
                if (!var1) {
                    _fun117511_ip = 99;
                    continue _fun117511
                }
            case 93:
                var2 = null;
                var1 = var2 != var3;
            case 99:
                if (!var1) {
                    _fun117511_ip = 144;
                    continue _fun117511
                }
            case 102:
                var2 = _closure1_slot1;
                var1 = _closure1_slot3;
                var0 = 9;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.fetchFeaturedGuilds;
                var0 = {};
                var3 = true;
                var0.forceRefresh = var3;
                var0 = var1.bind(var2)(var0);
            case 144:
                var0 = undefined;
                return var0;
        }
    };
    var2.handleTabPressPrefetch = var3;
    var1 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot3;
        var0 = 10;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var0 = var1.v4;
        var3 = var0.bind(var1)();
        var2 = var3.replace;
        var1 = /-/g;
        var0 = '';
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.makeAnalyticsID = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1676, 12428, 8118, 660, 1234, 1304, 5578, 795, 14932, 491, 2]);