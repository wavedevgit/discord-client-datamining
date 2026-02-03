// modules/global_discovery_apps/ApplicationDirectoryActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun107390: for (var _fun107390_ip = 0;;) switch (_fun107390_ip) {
                    case 0:
                        StartGenerator();
                        var10 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun107390_ip = 486;
                            continue _fun107390
                        }
                    case 15:
                        var5 = var10;
                        var1 = undefined;
                        var3 = undefined;
                        var9 = undefined;
                        var _closure4_slot0 = var1;
                        var8 = undefined;
                        var _closure4_slot1 = var1;
                        var2 = global;
                        var4 = var2.Date;
                        var2 = var4.now;
                        var3 = var2.bind(var4)();
                        var7 = _closure1_slot19;
                        var4 = var7.get;
                        var4 = var4.bind(var7)(var10);
                        var7 = null;
                        var7 = var7 != var4;
                        var10 = 0;
                        if (!var7) {
                            _fun107390_ip = 82;
                            continue _fun107390
                        }
                    case 79:
                        var10 = var4;
                    case 82:
                        var11 = _closure1_slot6;
                        var7 = var11.getApplicationFetchState;
                        var4 = var5;
                        var7 = var7.bind(var11)(var4);
                        var4 = _closure1_slot7;
                        var4 = var4.FETCHING;
                        if (!(var7 !== var4)) {
                            _fun107390_ip = 483;
                            continue _fun107390
                        }
                    case 117:
                        var11 = _closure1_slot6;
                        var7 = var11.isInvalidApplication;
                        var4 = var5;
                        var4 = var7.bind(var11)(var4);
                        if (var4) {
                            _fun107390_ip = 483;
                            continue _fun107390
                        }
                    case 141:
                        var7 = var3;
                        var4 = _closure1_slot18;
                        var4 = var10 + var4;
                        if (!(!(var7 < var4))) {
                            _fun107390_ip = 483;
                            continue _fun107390
                        }
                    case 159:
                        var7 = _closure1_slot19;
                        var4 = var7.set;
                        var13 = var5;
                        var3 = var4.bind(var7)(var13, var3);
                        var7 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var4 = 11;
                        var3 = var10[var4];
                        var12 = var7.bind(var1)(var3);
                        var11 = var12.dispatch;
                        var3 = {};
                        var14 = 'APPLICATION_DIRECTORY_FETCH_APPLICATION';
                        var3.type = var14;
                        var3.applicationId = var13;
                        var3 = var11.bind(var12)(var3);
                        var3 = 12;
                        var3 = var10[var3];
                        var11 = var7.bind(var1)(var3);
                        var3 = var11.prototype;
                        var7 = Object.create(var3, {
                            constructor: {
                                value: var11
                            }
                        });
                        var16 = 1000;
                        var15 = 5000;
                        var17 = var7;
                        var3 = new var17[var11](var16, var15, var14);
                        var3 = var3 instanceof Object ? var3 : var7;
                        var9 = var3;
                        _closure4_slot0 = var3;
                        var3 = function arg0, arg1() {
                            _fun107391: for (var _fun107391_ip = 0;;) switch (_fun107391_ip) {
                                case 0:
                                    var0 = arg1;
                                    var _closure5_slot0 = var0;
                                    var0 = arg0;
                                    var2 = var0.status;
                                    var0 = 429;
                                    var0 = var0 === var2;
                                    if (!var0) {
                                        _fun107391_ip = 50;
                                        continue _fun107391
                                    }
                                case 30:
                                    var2 = _closure4_slot0;
                                    var3 = var2.fails;
                                    var2 = 10;
                                    var0 = var3 < var2;
                                case 50:
                                    if (!var0) {
                                        _fun107391_ip = 80;
                                        continue _fun107391
                                    }
                                case 53:
                                    var3 = _closure4_slot0;
                                    var2 = var3.fail;
                                    var1 = function() { // Environment: var1
                                        var2 = _closure5_slot0;
                                        var1 = _closure4_slot1;
                                        var0 = undefined;
                                        var1 = var2.bind(var0)(var0, var1);
                                        return var0;
                                    };
                                    var1 = var2.bind(var3)(var1);
                                    var0 = true;
                                case 80:
                                    return var0;
                            }
                        };
                        var8 = var3;
                        _closure4_slot1 = var3;
                    case 288: // try_start_0
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var3 = 13;
                        var3 = var7[var3];
                        var3 = var6.bind(var1)(var3);
                        var7 = var3.HTTP;
                        var6 = var7.get;
                        var3 = {};
                        var12 = _closure1_slot17;
                        var11 = var12.APPLICATION_DIRECTORY_EMBED_APPLICATION;
                        var10 = var5;
                        var10 = var11.bind(var12)(var10);
                        var3.url = var10;
                        var3.backoff = var9;
                        var9 = 10;
                        var3.retries = var9;
                        var3.interceptResponse = var8;
                        var8 = false;
                        var3.rejectWithError = var8;
                        var3 = var6.bind(var7)(var3);
                        SaveGenerator(address = 375);
                    case 373:
                        return var3;
                    case 375:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 6);
                        if (var6) {
                            _fun107390_ip = 431;
                            continue _fun107390
                        }
                    case 381:
                        var9 = var3.body;
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var4];
                        var8 = var7.bind(var1)(var6);
                        var7 = var8.dispatch;
                        var6 = {};
                        var10 = 'APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS';
                        var6.type = var10;
                        var6.application = var9;
                        var6 = var7.bind(var8)(var6);
                    case 429: // try_end0
                        _fun107390_ip = 483;
                        continue _fun107390;
                    case 431:
                        return var3;
                    case 434: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var4];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {
                            'type': 'APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE',
                            'applicationId': null,
                            'isInvalidApplication': true
                        };
                        var2.applicationId = var5;
                        var2 = var3.bind(var4)(var2);
                    case 483:
                        return var1;
                    case 486:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot20 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot20 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun107395: for (var _fun107395_ip = 0;;) switch (_fun107395_ip) {
                    case 0:
                        StartGenerator();
                        var4 = arguments[1];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun107395_ip = 415;
                            continue _fun107395
                        }
                    case 13:
                        var6 = arg0;
                        var2 = undefined;
                        if (!(var4 === var2)) {
                            _fun107395_ip = 24;
                            continue _fun107395
                        }
                    case 22:
                        var4 = {};
                    case 24:
                        var10 = undefined;
                        SaveGenerator(address = 30);
                    case 28:
                        return var2;
                    case 30:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun107395_ip = 412;
                            continue _fun107395
                        }
                    case 39:
                        var3 = global;
                        var5 = var3.Date;
                        var3 = var5.now;
                        var8 = var3.bind(var5)();
                        var7 = _closure1_slot6;
                        var5 = var7.getApplicationFetchState;
                        var11 = var6;
                        var7 = var5.bind(var7)(var11);
                        var9 = _closure1_slot6;
                        var5 = var9.getApplicationLastFetchTime;
                        var9 = var5.bind(var9)(var11);
                        var5 = var4.dontRefetchMs;
                        var10 = var4.noCache;
                        var11 = null;
                        var4 = var11 != var9;
                        if (!var4) {
                            _fun107395_ip = 131;
                            continue _fun107395
                        }
                    case 115:
                        if (!(var11 == var5)) {
                            _fun107395_ip = 123;
                            continue _fun107395
                        }
                    case 119:
                        var5 = _closure1_slot18;
                    case 123:
                        var5 = var9 + var5;
                        var4 = var5 > var8;
                    case 131:
                        var5 = _closure1_slot7;
                        var5 = var5.FETCHING;
                        if (!(var7 !== var5)) {
                            _fun107395_ip = 409;
                            continue _fun107395
                        }
                    case 148:
                        if (var4) {
                            _fun107395_ip = 409;
                            continue _fun107395
                        }
                    case 154:
                        var7 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var5 = 11;
                        var4 = var4[var5];
                        var8 = var7.bind(var2)(var4);
                        var7 = var8.dispatch;
                        var4 = {};
                        var9 = 'APPLICATION_DIRECTORY_FETCH_APPLICATION';
                        var4.type = var9;
                        var9 = var6;
                        var4.applicationId = var9;
                        var4 = var7.bind(var8)(var4);
                    case 203: // try_start_0
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var4 = 13;
                        var4 = var8[var4];
                        var4 = var7.bind(var2)(var4);
                        var8 = var4.HTTP;
                        var7 = var8.get;
                        var4 = {};
                        var12 = _closure1_slot17;
                        var11 = var12.APPLICATION_DIRECTORY_APPLICATION;
                        var9 = var6;
                        var9 = var11.bind(var12)(var9);
                        var4.url = var9;
                        var9 = {};
                        var11 = _closure1_slot5;
                        var11 = var11.locale;
                        var9.locale = var11;
                        var9.nocache = var10;
                        var4.query = var9;
                        var9 = true;
                        var4.rejectWithError = var9;
                        var4 = var7.bind(var8)(var4);
                        SaveGenerator(address = 301);
                    case 299:
                        return var4;
                    case 301:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 7);
                        if (var7) {
                            _fun107395_ip = 357;
                            continue _fun107395
                        }
                    case 307:
                        var8 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var7 = var7[var5];
                        var9 = var8.bind(var2)(var7);
                        var8 = var9.dispatch;
                        var7 = {};
                        var10 = 'APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS';
                        var7.type = var10;
                        var10 = var4.body;
                        var7.application = var10;
                        var7 = var8.bind(var9)(var7);
                    case 355: // try_end0
                        _fun107395_ip = 409;
                        continue _fun107395;
                    case 357:
                        return var4;
                    case 360: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var5];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {
                            'type': 'APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE',
                            'applicationId': null,
                            'isInvalidApplication': true
                        };
                        var3.applicationId = var6;
                        var3 = var4.bind(var5)(var3);
                    case 409:
                        return var2;
                    case 412:
                        return var1;
                    case 415:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot21 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot21 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun107398: for (var _fun107398_ip = 0;;) switch (_fun107398_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun107398_ip = 218;
                            continue _fun107398
                        }
                    case 10:
                        var1 = global;
                        var2 = var1.Date;
                        var1 = var2.now;
                        var3 = var1.bind(var2)();
                        var4 = _closure1_slot8;
                        var1 = var4.getLastFetchTimeMs;
                        var4 = var1.bind(var4)();
                        var1 = null;
                        if (!(var1 != var4)) {
                            _fun107398_ip = 65;
                            continue _fun107398
                        }
                    case 50:
                        var1 = _closure1_slot18;
                        var1 = var4 + var1;
                        if (!(!(var1 > var3))) {
                            _fun107398_ip = 213;
                            continue _fun107398
                        }
                    case 65:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 13;
                        var1 = var4[var1];
                        var4 = undefined;
                        var1 = var3.bind(var4)(var1);
                        var5 = var1.HTTP;
                        var3 = var5.get;
                        var1 = {};
                        var6 = _closure1_slot17;
                        var6 = var6.APPLICATION_DIRECTORY_CATEGORIES;
                        var1.url = var6;
                        var6 = {};
                        var7 = _closure1_slot5;
                        var7 = var7.locale;
                        var6.locale = var7;
                        var1.query = var6;
                        var6 = false;
                        var1.rejectWithError = var6;
                        var1 = var3.bind(var5)(var1);
                        SaveGenerator(address = 150);
                    case 148:
                        return var1;
                    case 150:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun107398_ip = 210;
                            continue _fun107398
                        }
                    case 156:
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 11;
                        var2 = var5[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS';
                        var2.type = var5;
                        var5 = var1.body;
                        var2.categories = var5;
                        var2 = var3.bind(var4)(var2);
                        _fun107398_ip = 213;
                        continue _fun107398;
                    case 210:
                        return var1;
                    case 213:
                        var1 = undefined;
                        return var1;
                    case 218:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot22 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot22 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun107401: for (var _fun107401_ip = 0;;) switch (_fun107401_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun107401_ip = 533;
                            continue _fun107401
                        }
                    case 13:
                        var8 = var1.applicationId;
                        var7 = var1.guildId;
                        var3 = var1.options;
                        var2 = undefined;
                        var6 = undefined;
                        SaveGenerator(address = 36);
                    case 34:
                        return var2;
                    case 36:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun107401_ip = 530;
                            continue _fun107401
                        }
                    case 45:
                        var4 = null;
                        if (!(var4 == var3)) {
                            _fun107401_ip = 53;
                            continue _fun107401
                        }
                    case 51:
                        var3 = {};
                    case 53:
                        var6 = var3.page;
                        var3 = global;
                        var5 = var3.Date;
                        var3 = var5.now;
                        var5 = var3.bind(var5)();
                        var11 = _closure1_slot13;
                        var10 = var11.getFetchState;
                        var9 = {};
                        var14 = var8;
                        var9.applicationId = var14;
                        var13 = var7;
                        var9.guildId = var13;
                        var11 = var10.bind(var11)(var9);
                        var12 = _closure1_slot13;
                        var10 = var12.getSimilarApplications;
                        var9 = {};
                        var9.applicationId = var14;
                        var9.guildId = var13;
                        var9 = var10.bind(var12)(var9);
                        if (!(var4 == var9)) {
                            _fun107401_ip = 141;
                            continue _fun107401
                        }
                    case 139:
                        var9 = {};
                    case 141:
                        var9 = var9.lastFetchTimeMs;
                        var10 = _closure1_slot14;
                        var10 = var10.FETCHING;
                        if (!(var11 !== var10)) {
                            _fun107401_ip = 527;
                            continue _fun107401
                        }
                    case 164:
                        if (!(var4 != var9)) {
                            _fun107401_ip = 183;
                            continue _fun107401
                        }
                    case 168:
                        var4 = _closure1_slot18;
                        var4 = var9 + var4;
                        if (!(!(var4 > var5))) {
                            _fun107401_ip = 527;
                            continue _fun107401
                        }
                    case 183:
                        var9 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var5 = 11;
                        var4 = var4[var5];
                        var10 = var9.bind(var2)(var4);
                        var9 = var10.dispatch;
                        var4 = {};
                        var11 = 'APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS';
                        var4.type = var11;
                        var11 = var8;
                        var4.applicationId = var11;
                        var11 = var7;
                        var4.guildId = var11;
                        var11 = var6;
                        var4.page = var11;
                        var4 = var9.bind(var10)(var4);
                    case 247: // try_start_0
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var4 = 13;
                        var4 = var10[var4];
                        var4 = var9.bind(var2)(var4);
                        var10 = var4.HTTP;
                        var9 = var10.get;
                        var4 = {};
                        var13 = _closure1_slot17;
                        var12 = var13.APPLICATION_DIRECTORY_SIMILAR;
                        var11 = var8;
                        var11 = var12.bind(var13)(var11);
                        var4.url = var11;
                        var11 = {};
                        var12 = var7;
                        var11.guild_id = var12;
                        var12 = var6;
                        var11.page = var12;
                        var12 = _closure1_slot5;
                        var12 = var12.locale;
                        var11.locale = var12;
                        var4.query = var11;
                        var11 = true;
                        var4.rejectWithError = var11;
                        var4 = var9.bind(var10)(var4);
                        SaveGenerator(address = 353);
                    case 351:
                        return var4;
                    case 353:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 9);
                        if (var9) {
                            _fun107401_ip = 470;
                            continue _fun107401
                        }
                    case 359:
                        var10 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var9 = var9[var5];
                        var11 = var10.bind(var2)(var9);
                        var10 = var11.dispatch;
                        var9 = {};
                        var12 = 'APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS';
                        var9.type = var12;
                        var12 = var8;
                        var9.applicationId = var12;
                        var12 = var7;
                        var9.guildId = var12;
                        var12 = var4.body;
                        var12 = var12.applications;
                        var9.similarApplications = var12;
                        var12 = var4.body;
                        var12 = var12.load_id;
                        var9.loadId = var12;
                        var12 = var6;
                        var9.page = var12;
                        var12 = var4.body;
                        var12 = var12.num_pages;
                        var9.totalPages = var12;
                        var9 = var10.bind(var11)(var9);
                    case 468: // try_end0
                        _fun107401_ip = 527;
                        continue _fun107401;
                    case 470:
                        return var4;
                    case 473: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var5];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var9 = 'APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE';
                        var3.type = var9;
                        var3.applicationId = var8;
                        var3.guildId = var7;
                        var3.page = var6;
                        var3 = var4.bind(var5)(var3);
                    case 527:
                        return var2;
                    case 530:
                        return var1;
                    case 533:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot23 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot23 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun107404: for (var _fun107404_ip = 0;;) switch (_fun107404_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun107404_ip = 1028;
                            continue _fun107404
                        }
                    case 13:
                        var16 = var1.query;
                        var15 = var1.guildId;
                        var3 = var1.options;
                        var18 = var1.onSuccessCallback;
                        var2 = undefined;
                        var14 = undefined;
                        var13 = undefined;
                        var12 = undefined;
                        var11 = undefined;
                        var10 = undefined;
                        var9 = undefined;
                        var8 = undefined;
                        var7 = undefined;
                        var6 = undefined;
                        var17 = undefined;
                        SaveGenerator(address = 61);
                    case 59:
                        return var2;
                    case 61:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun107404_ip = 1025;
                            continue _fun107404
                        }
                    case 70:
                        var20 = null;
                        if (!(var20 == var3)) {
                            _fun107404_ip = 78;
                            continue _fun107404
                        }
                    case 76:
                        var3 = {};
                    case 78:
                        var14 = var3.page;
                        var13 = var3.pageSize;
                        var12 = var3.categoryId;
                        var11 = var3.integrationType;
                        var10 = var3.minUserInstallCommandCount;
                        var9 = var3.excludeAppsWithCustomInstallUrl;
                        var8 = var3.excludeNonEmbeddedApps;
                        var7 = var3.excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand;
                        var3 = var3.source;
                        if (!(var2 === var3)) {
                            _fun107404_ip = 170;
                            continue _fun107404
                        }
                    case 135:
                        var5 = _closure1_slot0;
                        var19 = _closure1_slot2;
                        var4 = 14;
                        var4 = var19[var4];
                        var4 = var5.bind(var2)(var4);
                        var4 = var4.SearchAppsRequestSource;
                        var3 = var4.APP_DIRECTORY;
                    case 170:
                        var6 = var3;
                        var3 = global;
                        var4 = var3.Date;
                        var3 = var4.now;
                        var5 = var3.bind(var4)();
                        var21 = _closure1_slot11;
                        var19 = var21.getFetchState;
                        var4 = {};
                        var28 = var16;
                        var4.query = var28;
                        var27 = var15;
                        var4.guildId = var27;
                        var26 = var14;
                        var4.page = var26;
                        var25 = var13;
                        var4.pageSize = var25;
                        var24 = var12;
                        var4.categoryId = var24;
                        var23 = var11;
                        var4.integrationType = var23;
                        var21 = var19.bind(var21)(var4);
                        var22 = _closure1_slot11;
                        var19 = var22.getSearchResults;
                        var4 = {};
                        var4.query = var28;
                        var4.guildId = var27;
                        var4.page = var26;
                        var4.pageSize = var25;
                        var4.categoryId = var24;
                        var4.integrationType = var23;
                        var4 = var19.bind(var22)(var4);
                        if (!(var20 == var4)) {
                            _fun107404_ip = 309;
                            continue _fun107404
                        }
                    case 307:
                        var4 = {};
                    case 309:
                        var19 = var4.lastFetchTimeMs;
                        var4 = _closure1_slot12;
                        var4 = var4.FETCHING;
                        if (!(var21 !== var4)) {
                            _fun107404_ip = 1022;
                            continue _fun107404
                        }
                    case 332:
                        if (!(var20 != var19)) {
                            _fun107404_ip = 351;
                            continue _fun107404
                        }
                    case 336:
                        var4 = _closure1_slot18;
                        var4 = var19 + var4;
                        if (!(!(var4 > var5))) {
                            _fun107404_ip = 1022;
                            continue _fun107404
                        }
                    case 351:
                        var19 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var5 = 11;
                        var4 = var4[var5];
                        var21 = var19.bind(var2)(var4);
                        var19 = var21.dispatch;
                        var4 = {};
                        var22 = 'APPLICATION_DIRECTORY_FETCH_SEARCH';
                        var4.type = var22;
                        var22 = var16;
                        var4.query = var22;
                        var22 = var15;
                        var4.guildId = var22;
                        var22 = var14;
                        var4.page = var22;
                        var22 = var13;
                        var4.pageSize = var22;
                        var22 = var12;
                        var4.categoryId = var22;
                        var22 = var11;
                        var4.integrationType = var22;
                        var22 = var10;
                        var4.minUserInstallCommandCount = var22;
                        var22 = var9;
                        var4.excludeAppsWithCustomInstallUrl = var22;
                        var22 = var8;
                        var4.excludeNonEmbeddedApps = var22;
                        var22 = var7;
                        var4.excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand = var22;
                        var22 = var6;
                        var4.source = var22;
                        var4 = var19.bind(var21)(var4);
                    case 479: // try_start_0
                        var19 = _closure1_slot0;
                        var21 = _closure1_slot2;
                        var4 = 13;
                        var4 = var21[var4];
                        var4 = var19.bind(var2)(var4);
                        var21 = var4.HTTP;
                        var19 = var21.get;
                        var4 = {};
                        var22 = _closure1_slot17;
                        var22 = var22.APPLICATION_DIRECTORY_SEARCH;
                        var4.url = var22;
                        var22 = {};
                        var23 = var16;
                        var22.query = var23;
                        var23 = var15;
                        var22.guild_id = var23;
                        var23 = var14;
                        var22.page = var23;
                        var23 = var13;
                        var22.page_size = var23;
                        var23 = var12;
                        var22.category_id = var23;
                        var23 = _closure1_slot5;
                        var23 = var23.locale;
                        var22.locale = var23;
                        var23 = var11;
                        var22.integration_type = var23;
                        var23 = var10;
                        var22.min_user_install_command_count = var23;
                        var23 = var9;
                        var22.exclude_apps_with_custom_install_url = var23;
                        var23 = var8;
                        var22.exclude_non_embedded_apps = var23;
                        var23 = var7;
                        var22.exclude_embedded_apps_without_primary_entry_point_app_command = var23;
                        var23 = var6;
                        var22.source = var23;
                        var4.query = var22;
                        var22 = true;
                        var4.rejectWithError = var22;
                        var4 = var19.bind(var21)(var4);
                        SaveGenerator(address = 658);
                    case 656:
                        return var4;
                    case 658:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 19);
                        if (var19) {
                            _fun107404_ip = 925;
                            continue _fun107404
                        }
                    case 667:
                        var17 = var4;
                        var21 = _closure1_slot1;
                        var19 = _closure1_slot2;
                        var19 = var19[var5];
                        var22 = var21.bind(var2)(var19);
                        var21 = var22.dispatch;
                        var19 = {};
                        var23 = 'APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS';
                        var19.type = var23;
                        var23 = var16;
                        var19.query = var23;
                        var23 = var15;
                        var19.guildId = var23;
                        var23 = var14;
                        var19.page = var23;
                        var23 = var13;
                        var19.pageSize = var23;
                        var23 = var12;
                        var19.categoryId = var23;
                        var23 = var11;
                        var19.integrationType = var23;
                        var23 = {};
                        var24 = var4.body;
                        var24 = var24.results;
                        var23.results = var24;
                        var24 = var4.body;
                        var24 = var24.counts_by_category;
                        var23.countsByCategory = var24;
                        var24 = var4.body;
                        var24 = var24.result_count;
                        var23.totalCount = var24;
                        var24 = var4.body;
                        var24 = var24.num_pages;
                        var23.totalPages = var24;
                        var24 = var4.body;
                        var24 = var24.type;
                        var23.type = var24;
                        var24 = var4.body;
                        var24 = var24.load_id;
                        var23.loadId = var24;
                        var19.result = var23;
                        var23 = var10;
                        var19.minUserInstallCommandCount = var23;
                        var23 = var9;
                        var19.excludeAppsWithCustomInstallUrl = var23;
                        var23 = var8;
                        var19.excludeNonEmbeddedApps = var23;
                        var23 = var7;
                        var19.excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand = var23;
                        var23 = var6;
                        var19.source = var23;
                        var19 = var21.bind(var22)(var19);
                        var19 = var18;
                        if (!(var20 != var19)) {
                            _fun107404_ip = 923;
                            continue _fun107404
                        }
                    case 907:
                        var17 = var17.body;
                        var17 = var17.result_count;
                        var17 = var18.bind(var2)(var17);
                    case 923: // try_end0
                        _fun107404_ip = 1022;
                        continue _fun107404;
                    case 925:
                        return var4;
                    case 928: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var5];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var17 = 'APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE';
                        var3.type = var17;
                        var3.query = var16;
                        var3.guildId = var15;
                        var3.page = var14;
                        var3.pageSize = var13;
                        var3.categoryId = var12;
                        var3.integrationType = var11;
                        var3.minUserInstallCommandCount = var10;
                        var3.excludeAppsWithCustomInstallUrl = var9;
                        var3.excludeNonEmbeddedApps = var8;
                        var3.excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand = var7;
                        var3.source = var6;
                        var3 = var4.bind(var5)(var3);
                    case 1022:
                        return var2;
                    case 1025:
                        return var1;
                    case 1028:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot24 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot24 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun107407: for (var _fun107407_ip = 0;;) switch (_fun107407_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arguments[0];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun107407_ip = 744;
                            continue _fun107407
                        }
                    case 13:
                        var2 = undefined;
                        if (!(var1 === var2)) {
                            _fun107407_ip = 21;
                            continue _fun107407
                        }
                    case 19:
                        var1 = {};
                    case 21:
                        var4 = var1.surface;
                        if (!(var4 === var2)) {
                            _fun107407_ip = 66;
                            continue _fun107407
                        }
                    case 31:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var5 = 17;
                        var5 = var9[var5];
                        var5 = var8.bind(var2)(var5);
                        var5 = var5.ApplicationCollectionSurface;
                        var4 = var5.APPLICATION_DIRECTORY;
                    case 66:
                        var7 = var4;
                        var1 = var1.activeState;
                        if (!(var1 === var2)) {
                            _fun107407_ip = 114;
                            continue _fun107407
                        }
                    case 79:
                        var5 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var4 = 18;
                        var4 = var8[var4];
                        var4 = var5.bind(var2)(var4);
                        var4 = var4.ApplicationCollectionActiveState;
                        var1 = var4.ACTIVE;
                    case 114:
                        var6 = var1;
                        var11 = undefined;
                        SaveGenerator(address = 123);
                    case 121:
                        return var2;
                    case 123:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun107407_ip = 741;
                            continue _fun107407
                        }
                    case 132:
                        var8 = _closure1_slot4;
                        var5 = var8.get;
                        var4 = 'disable_app_collections_cache';
                        var4 = var5.bind(var8)(var4);
                        var5 = global;
                        var8 = var5.Date;
                        var5 = var8.now;
                        var5 = var5.bind(var8)();
                        var10 = _closure1_slot9;
                        var9 = var10.getFetchState;
                        var8 = {};
                        var14 = var7;
                        var8.surface = var14;
                        var13 = var6;
                        var8.activeState = var13;
                        var10 = var9.bind(var10)(var8);
                        var12 = _closure1_slot9;
                        var9 = var12.getLastFetchTimeMs;
                        var8 = {};
                        var8.surface = var14;
                        var8.activeState = var13;
                        var8 = var9.bind(var12)(var8);
                        var9 = _closure1_slot10;
                        var9 = var9.FETCHING;
                        if (!(var10 !== var9)) {
                            _fun107407_ip = 738;
                            continue _fun107407
                        }
                    case 249:
                        var4 = !var4;
                        if (!var4) {
                            _fun107407_ip = 294;
                            continue _fun107407
                        }
                    case 255:
                        var10 = var6;
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var9 = 18;
                        var9 = var13[var9];
                        var9 = var12.bind(var2)(var9);
                        var9 = var9.ApplicationCollectionActiveState;
                        var9 = var9.ACTIVE;
                        var4 = var10 === var9;
                    case 294:
                        var11 = var4;
                        if (!var4) {
                            _fun107407_ip = 321;
                            continue _fun107407
                        }
                    case 300:
                        var4 = null;
                        if (!(var4 != var8)) {
                            _fun107407_ip = 321;
                            continue _fun107407
                        }
                    case 306:
                        var4 = _closure1_slot18;
                        var4 = var8 + var4;
                        if (!(!(var4 > var5))) {
                            _fun107407_ip = 738;
                            continue _fun107407
                        }
                    case 321:
                        var8 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var5 = 11;
                        var4 = var4[var5];
                        var9 = var8.bind(var2)(var4);
                        var8 = var9.dispatch;
                        var4 = {};
                        var10 = 'APPLICATION_DIRECTORY_FETCH_COLLECTIONS';
                        var4.type = var10;
                        var10 = var7;
                        var4.surface = var10;
                        var10 = var6;
                        var4.activeState = var10;
                        var4 = var8.bind(var9)(var4);
                    case 379: // try_start_0
                        var14 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var4 = 13;
                        var4 = var13[var4];
                        var4 = var14.bind(var2)(var4);
                        var9 = var4.HTTP;
                        var8 = var9.get;
                        var4 = {};
                        var10 = _closure1_slot17;
                        var10 = var10.APPLICATION_DIRECTORY_COLLECTIONS;
                        var4.url = var10;
                        var10 = {};
                        var12 = var7;
                        var10.surface = var12;
                        var12 = var6;
                        var10.active_state = var12;
                        var12 = 15;
                        var13 = var13[var12];
                        var14 = var14.bind(var2)(var13);
                        var13 = var14.isAndroid;
                        var13 = var13.bind(var14)();
                        var14 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        if (var13) {
                            _fun107407_ip = 542;
                            continue _fun107407
                        }
                    case 478:
                        var12 = var15[var12];
                        var13 = var14.bind(var2)(var12);
                        var12 = var13.isIOS;
                        var12 = var12.bind(var13)();
                        var16 = _closure1_slot0;
                        var17 = _closure1_slot2;
                        var13 = 16;
                        var13 = var17[var13];
                        var13 = var16.bind(var2)(var13);
                        var13 = var13.ApplicationCollectionPlatforms;
                        if (var12) {
                            _fun107407_ip = 534;
                            continue _fun107407
                        }
                    case 526:
                        var12 = var13.WEB;
                        _fun107407_ip = 540;
                        continue _fun107407;
                    case 534:
                        var12 = var13.IOS;
                    case 540:
                        _fun107407_ip = 566;
                        continue _fun107407;
                    case 542:
                        var13 = 16;
                        var13 = var15[var13];
                        var13 = var14.bind(var2)(var13);
                        var13 = var13.ApplicationCollectionPlatforms;
                        var12 = var13.ANDROID;
                    case 566:
                        var10.platform = var12;
                        var12 = _closure1_slot5;
                        var12 = var12.locale;
                        var10.locale = var12;
                        var10.cache = var11;
                        var4.query = var10;
                        var10 = true;
                        var4.rejectWithError = var10;
                        var4 = var8.bind(var9)(var4);
                        SaveGenerator(address = 611);
                    case 609:
                        return var4;
                    case 611:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 8);
                        if (var8) {
                            _fun107407_ip = 684;
                            continue _fun107407
                        }
                    case 617:
                        var9 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var8 = var8[var5];
                        var10 = var9.bind(var2)(var8);
                        var9 = var10.dispatch;
                        var8 = {};
                        var11 = 'APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS';
                        var8.type = var11;
                        var11 = var4.body;
                        var8.collections = var11;
                        var11 = var7;
                        var8.surface = var11;
                        var11 = var6;
                        var8.activeState = var11;
                        var8 = var9.bind(var10)(var8);
                    case 682: // try_end0
                        _fun107407_ip = 738;
                        continue _fun107407;
                    case 684:
                        return var4;
                    case 687: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var5];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var8 = 'APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE';
                        var3.type = var8;
                        var3.surface = var7;
                        var3.activeState = var6;
                        var3 = var4.bind(var5)(var3);
                    case 738:
                        return var2;
                    case 741:
                        return var1;
                    case 744:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot25 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot25 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun107410: for (var _fun107410_ip = 0;;) switch (_fun107410_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun107410_ip = 411;
                            continue _fun107410
                        }
                    case 10:
                        var1 = undefined;
                        var7 = undefined;
                        var2 = global;
                        var3 = var2.Date;
                        var2 = var3.now;
                        var4 = var2.bind(var3)();
                        var5 = _closure1_slot15;
                        var3 = var5.getFetchState;
                        var9 = var3.bind(var5)();
                        var5 = _closure1_slot15;
                        var3 = var5.getLastFetchTimeMs;
                        var6 = var3.bind(var5)();
                        var5 = _closure1_slot15;
                        var3 = var5.getNextFetchRetryTimeMs;
                        var3 = var3.bind(var5)();
                        var5 = _closure1_slot16;
                        var5 = var5.FETCHING;
                        if (!(var9 !== var5)) {
                            _fun107410_ip = 408;
                            continue _fun107410
                        }
                    case 95:
                        var9 = null;
                        if (!(var9 != var6)) {
                            _fun107410_ip = 118;
                            continue _fun107410
                        }
                    case 101:
                        var5 = 86400000;
                        var5 = var6 + var5;
                        if (!(!(var5 > var4))) {
                            _fun107410_ip = 408;
                            continue _fun107410
                        }
                    case 118:
                        if (!(var9 != var3)) {
                            _fun107410_ip = 129;
                            continue _fun107410
                        }
                    case 122:
                        if (!(!(var4 < var3))) {
                            _fun107410_ip = 408;
                            continue _fun107410
                        }
                    case 129:
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var4 = 11;
                        var3 = var3[var4];
                        var6 = var5.bind(var1)(var3);
                        var5 = var6.dispatch;
                        var3 = {};
                        var10 = 'FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS';
                        var3.type = var10;
                        var3 = var5.bind(var6)(var3);
                    case 171: // try_start_0
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 13;
                        var3 = var6[var3];
                        var3 = var5.bind(var1)(var3);
                        var6 = var3.HTTP;
                        var5 = var6.get;
                        var3 = {};
                        var10 = _closure1_slot17;
                        var10 = var10.INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS;
                        var3.url = var10;
                        var10 = false;
                        var3.rejectWithError = var10;
                        var3 = var5.bind(var6)(var3);
                        SaveGenerator(address = 232);
                    case 230:
                        return var3;
                    case 232:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun107410_ip = 289;
                            continue _fun107410
                        }
                    case 238:
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var5 = var5[var4];
                        var10 = var6.bind(var1)(var5);
                        var6 = var10.dispatch;
                        var5 = {};
                        var11 = 'FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS';
                        var5.type = var11;
                        var11 = var3.body;
                        var5.guildIdToApplicationIds = var11;
                        var5 = var6.bind(var10)(var5);
                    case 287: // try_end0
                        _fun107410_ip = 408;
                        continue _fun107410;
                    case 289:
                        return var3;
                    case 292: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var8 = var3;
                        var3 = var9 == var3;
                        var10 = undefined;
                        if (var3) {
                            _fun107410_ip = 314;
                            continue _fun107410
                        }
                    case 306:
                        var3 = var8;
                        var10 = var3.status;
                    case 314:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var4];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE';
                        var2.type = var5;
                        var6 = 429;
                        var5 = undefined;
                        if (!(var6 === var10)) {
                            _fun107410_ip = 398;
                            continue _fun107410
                        }
                    case 360:
                        var6 = var8;
                        var10 = var9 == var6;
                        var6 = undefined;
                        if (var10) {
                            _fun107410_ip = 395;
                            continue _fun107410
                        }
                    case 372:
                        var8 = var8.body;
                        var7 = var8;
                        var8 = var9 == var8;
                        var6 = undefined;
                        if (var8) {
                            _fun107410_ip = 395;
                            continue _fun107410
                        }
                    case 389:
                        var6 = var7.retry_after;
                    case 395:
                        var5 = var6;
                    case 398:
                        var2.retryAfterSeconds = var5;
                        var2 = var3.bind(var4)(var2);
                    case 408:
                        return var1;
                    case 411:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot26 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot26 = var0;
    var3 = global;
    var9 = var3.Object;
    var7 = var9.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var6);
    var0 = 0;
    var6 = var5[var0];
    var0 = undefined;
    var6 = var8.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var5[var6];
    var6 = var8.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var5[var6];
    var6 = var8.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var5[var6];
    var6 = var8.bind(var0)(var6);
    var6 = 4;
    var7 = var5[var6];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.FetchState;
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var5[var6];
    var6 = var8.bind(var0)(var6);
    var _closure1_slot8 = var6;
    var6 = 6;
    var7 = var5[var6];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot9 = var7;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.FetchState;
    var _closure1_slot10 = var6;
    var6 = 7;
    var7 = var5[var6];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot11 = var7;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.FetchState;
    var _closure1_slot12 = var6;
    var6 = 8;
    var7 = var5[var6];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot13 = var7;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.FetchState;
    var _closure1_slot14 = var6;
    var6 = 9;
    var7 = var5[var6];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot15 = var7;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.FetchState;
    var _closure1_slot16 = var6;
    var6 = 10;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.Endpoints;
    var _closure1_slot17 = var6;
    var6 = 600000;
    var _closure1_slot18 = var6;
    var3 = var3.Map;
    var6 = var3.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var3
        }
    });
    var13 = var6;
    var3 = new var13[var3](var12);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot19 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/global_discovery_apps/ApplicationDirectoryActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot20;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.getEmbedApplication = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot21;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.getApplication = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot22;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.getCategories = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot23;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.getSimilarApplications = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot24;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.search = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot25;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchCollections = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot26;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchIntegrationApplicationIdsForMyGuilds = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3996, 1676, 803, 5340, 13865, 13866, 13861, 13867, 13868, 660, 806, 561, 507, 13862, 478, 13869, 13870, 13871, 2]);