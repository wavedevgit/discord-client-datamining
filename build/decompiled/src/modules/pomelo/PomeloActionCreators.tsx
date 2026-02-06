// modules/pomelo/PomeloActionCreators.tsx
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
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var6 = var1.AnalyticEvents;
    var _closure1_slot4 = var6;
    var1 = var1.Endpoints;
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = {};
    var6 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.dispatch;
        var0 = {};
        var3 = 'POMELO_SUGGESTIONS_RESET';
        var0.type = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.resetSuggestions = var6;
    var6 = function arg0() {
        _fun81418: for (var _fun81418_ip = 0;;) switch (_fun81418_ip) {
            case 0:
                var2 = arguments[1];
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = undefined;
                if (!(var2 === var1)) {
                    _fun81418_ip = 24;
                    continue _fun81418
                }
            case 18:
                var2 = 1500;
            case 24:
                var _closure2_slot1 = var2;
                var2 = _closure1_slot3;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun81420: for (var _fun81420_ip = 0;;) switch (_fun81420_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun81420_ip = 290;
                                    continue _fun81420
                                }
                            case 10:
                                var1 = undefined;
                                var9 = undefined;
                                var7 = undefined;
                                var4 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var5 = 4;
                                var2 = var2[var5];
                                var6 = var4.bind(var1)(var2);
                                var4 = var6.dispatch;
                                var2 = {};
                                var8 = 'POMELO_SUGGESTIONS_RESET';
                                var2.type = var8;
                                var2 = var4.bind(var6)(var2);
                            case 61: // try_start_0
                                var4 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var2 = 5;
                                var2 = var6[var2];
                                var2 = var4.bind(var1)(var2);
                                var10 = var2.HTTP;
                                var4 = var10.get;
                                var2 = {};
                                var6 = _closure1_slot5;
                                var6 = var6.POMELO_SUGGESTIONS_UNAUTHED;
                                var2.url = var6;
                                var11 = _closure2_slot0;
                                var8 = null;
                                var12 = var8 == var11;
                                var11 = undefined;
                                if (var12) {
                                    _fun81420_ip = 139;
                                    continue _fun81420
                                }
                            case 125:
                                var12 = {};
                                var13 = _closure2_slot0;
                                var12.global_name = var13;
                                var11 = var12;
                            case 139:
                                var2.query = var11;
                                var11 = _closure2_slot1;
                                var2.timeout = var11;
                                var11 = true;
                                var2.rejectWithError = var11;
                                var2.failImmediatelyWhenRateLimited = var11;
                                var2 = var4.bind(var10)(var2);
                                SaveGenerator(address = 173);
                            case 171:
                                return var2;
                            case 173:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                                if (var4) {
                                    _fun81420_ip = 282;
                                    continue _fun81420
                                }
                            case 179:
                                var7 = var2;
                                var4 = var2.ok;
                                if (!var4) {
                                    _fun81420_ip = 220;
                                    continue _fun81420
                                }
                            case 191:
                                var4 = var7;
                                var4 = var4.body;
                                var9 = var4;
                                var10 = var8 == var4;
                                var4 = undefined;
                                if (var10) {
                                    _fun81420_ip = 216;
                                    continue _fun81420
                                }
                            case 211:
                                var4 = var9.username;
                            case 216:
                                if (!(var8 == var4)) {
                                    _fun81420_ip = 222;
                                    continue _fun81420
                                }
                            case 220: // try_end0
                                _fun81420_ip = 287;
                                continue _fun81420;
                            case 222: // try_start_1
                                var4 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var3 = var3[var5];
                                var5 = var4.bind(var1)(var3);
                                var4 = var5.dispatch;
                                var3 = {};
                                var8 = 'POMELO_REGISTRATION_SUGGESTIONS_SUCCESS';
                                var3.type = var8;
                                var7 = var7.body;
                                var3.suggestion = var7;
                                var6 = _closure2_slot0;
                                var3.source = var6;
                                var3 = var4.bind(var5)(var3);
                            case 279: // try_end1
                                return var3;
                            case 282:
                                return var2;
                            case 285: // catch_target0 // catch_target1
                                CatchBlockStart(arg_register = 2);
                            case 287:
                                return var1;
                            case 290:
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var1.fetchSuggestionsRegistration = var6;
    var6 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun81423: for (var _fun81423_ip = 0;;) switch (_fun81423_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun81423_ip = 279;
                            continue _fun81423
                        }
                    case 10:
                        var1 = undefined;
                        var8 = undefined;
                        var6 = undefined;
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 6;
                        var2 = var5[var2];
                        var4 = var4.bind(var1)(var2);
                        var2 = var4.isInPomeloSuggestionsExperiment;
                        var2 = var2.bind(var4)();
                        if (!var2) {
                            _fun81423_ip = 276;
                            continue _fun81423
                        }
                    case 55: // try_start_0
                        var4 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var5 = 4;
                        var2 = var7[var5];
                        var10 = var4.bind(var1)(var2);
                        var4 = var10.dispatch;
                        var9 = true;
                        var2 = {
                            'type': 'POMELO_SUGGESTIONS_FETCH',
                            'usernameSuggestionLoading': true
                        };
                        var2 = var4.bind(var10)(var2);
                        var4 = _closure1_slot0;
                        var2 = 5;
                        var2 = var7[var2];
                        var2 = var4.bind(var1)(var2);
                        var7 = var2.HTTP;
                        var4 = var7.get;
                        var2 = {};
                        var10 = _closure1_slot5;
                        var10 = var10.POMELO_SUGGESTIONS;
                        var2.url = var10;
                        var10 = _closure2_slot0;
                        var2.timeout = var10;
                        var2.rejectWithError = var9;
                        var2 = var4.bind(var7)(var2);
                        SaveGenerator(address = 168);
                    case 166:
                        return var2;
                    case 168:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun81423_ip = 271;
                            continue _fun81423
                        }
                    case 174:
                        var6 = var2;
                        var4 = var2.ok;
                        if (!var4) {
                            _fun81423_ip = 217;
                            continue _fun81423
                        }
                    case 186:
                        var4 = var6;
                        var4 = var4.body;
                        var8 = var4;
                        var7 = null;
                        var9 = var7 == var4;
                        var4 = undefined;
                        if (var9) {
                            _fun81423_ip = 213;
                            continue _fun81423
                        }
                    case 208:
                        var4 = var8.username;
                    case 213:
                        if (!(var7 == var4)) {
                            _fun81423_ip = 219;
                            continue _fun81423
                        }
                    case 217: // try_end0
                        _fun81423_ip = 276;
                        continue _fun81423;
                    case 219: // try_start_1
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var5];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var7 = 'POMELO_SUGGESTIONS_SUCCESS';
                        var3.type = var7;
                        var6 = var6.body;
                        var3.suggestion = var6;
                        var3 = var4.bind(var5)(var3);
                    case 268: // try_end1
                        return var3;
                    case 271:
                        return var2;
                    case 274: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 2);
                    case 276:
                        return var1;
                    case 279:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.fetchSuggestions = var6;
    var6 = function arg0() {
        _fun81424: for (var _fun81424_ip = 0;;) switch (_fun81424_ip) {
            case 0:
                var4 = arguments[1];
                var3 = arguments[2];
                var2 = arguments[3];
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = undefined;
                if (!(var4 === var1)) {
                    _fun81424_ip = 28;
                    continue _fun81424
                }
            case 24:
                var4 = 'modal';
            case 28:
                var _closure2_slot1 = var4;
                if (!(var3 === var1)) {
                    _fun81424_ip = 38;
                    continue _fun81424
                }
            case 36:
                var3 = false;
            case 38:
                var _closure2_slot2 = var3;
                if (!(var2 === var1)) {
                    _fun81424_ip = 48;
                    continue _fun81424
                }
            case 46:
                var2 = false;
            case 48:
                var _closure2_slot3 = var2;
                var2 = _closure1_slot3;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun81426: for (var _fun81426_ip = 0;;) switch (_fun81426_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun81426_ip = 1043;
                                    continue _fun81426
                                }
                            case 10:
                                var3 = undefined;
                                var12 = undefined;
                                var2 = undefined;
                                var7 = undefined;
                                var9 = undefined;
                                var1 = _closure2_slot0;
                                var6 = /^[A-Za-z0-9_.]*$/;
                                var4 = var6.test;
                                var4 = var4.bind(var6)(var1);
                                var13 = false;
                                if (!(var13 !== var4)) {
                                    _fun81426_ip = 245;
                                    continue _fun81426
                                }
                            case 60:
                                var6 = var1.includes;
                                var4 = '..';
                                var4 = var6.bind(var1)(var4);
                                if (var4) {
                                    _fun81426_ip = 183;
                                    continue _fun81426
                                }
                            case 79:
                                var6 = var1.length;
                                var4 = 2;
                                if (!(!(var6 < var4))) {
                                    _fun81426_ip = 108;
                                    continue _fun81426
                                }
                            case 91:
                                var4 = var1.length;
                                var1 = 32;
                                var1 = var4 > var1;
                                var4 = undefined;
                                if (!var1) {
                                    _fun81426_ip = 181;
                                    continue _fun81426
                                }
                            case 108:
                                var6 = _closure1_slot0;
                                var11 = _closure1_slot2;
                                var1 = 3;
                                var8 = var11[var1];
                                var8 = var6.bind(var3)(var8);
                                var10 = var8.intl;
                                var8 = var10.formatToPlainString;
                                var1 = var11[var1];
                                var1 = var6.bind(var3)(var1);
                                var1 = var1.t;
                                var6 = var1.IpijXA;
                                var1 = {
                                    'maxNum': 32,
                                    'minNum': 2
                                };
                                var4 = var8.bind(var10)(var6, var1);
                            case 181:
                                _fun81426_ip = 243;
                                continue _fun81426;
                            case 183:
                                var10 = _closure1_slot0;
                                var11 = _closure1_slot2;
                                var1 = 3;
                                var6 = var11[var1];
                                var6 = var10.bind(var3)(var6);
                                var8 = var6.intl;
                                var6 = var8.string;
                                var1 = var11[var1];
                                var1 = var10.bind(var3)(var1);
                                var1 = var1.t;
                                var1 = var1["C7G+gr"];
                                var4 = var6.bind(var8)(var1);
                            case 243:
                                _fun81426_ip = 303;
                                continue _fun81426;
                            case 245:
                                var10 = _closure1_slot0;
                                var11 = _closure1_slot2;
                                var1 = 3;
                                var6 = var11[var1];
                                var6 = var10.bind(var3)(var6);
                                var8 = var6.intl;
                                var6 = var8.string;
                                var1 = var11[var1];
                                var1 = var10.bind(var3)(var1);
                                var1 = var1.t;
                                var1 = var1.z7c4bP;
                                var4 = var6.bind(var8)(var1);
                            case 303:
                                var10 = null;
                                if (!(var10 == var4)) {
                                    _fun81426_ip = 919;
                                    continue _fun81426
                                }
                            case 312: // try_start_0
                                var8 = _closure1_slot1;
                                var11 = _closure1_slot2;
                                var1 = 8;
                                var1 = var11[var1];
                                var11 = var8.bind(var3)(var1);
                                var8 = var11.post;
                                var1 = {};
                                var14 = _closure2_slot2;
                                var15 = _closure1_slot5;
                                if (var14) {
                                    _fun81426_ip = 362;
                                    continue _fun81426
                                }
                            case 354:
                                var14 = var15.POMELO_ATTEMPT;
                                _fun81426_ip = 368;
                                continue _fun81426;
                            case 362:
                                var14 = var15.POMELO_ATTEMPT_UNAUTHED;
                            case 368:
                                var1.url = var14;
                                var14 = {};
                                var16 = _closure2_slot0;
                                var14.username = var16;
                                var1.body = var14;
                                var14 = {};
                                var17 = _closure1_slot0;
                                var18 = _closure1_slot2;
                                var15 = 9;
                                var15 = var18[var15];
                                var15 = var17.bind(var3)(var15);
                                var15 = var15.NetworkActionNames;
                                var15 = var15.POMELO_ATTEMPT;
                                var14.event = var15;
                                var15 = {};
                                var15.requested_username = var16;
                                var14.properties = var15;
                                var1.trackedActionData = var14;
                                var1.rejectWithError = var13;
                                var1 = var8.bind(var11)(var1);
                                SaveGenerator(address = 457);
                            case 455:
                                return var1;
                            case 457:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 8);
                                if (var8) {
                                    _fun81426_ip = 626;
                                    continue _fun81426
                                }
                            case 466:
                                var12 = var1;
                                var8 = var1.body;
                                var8 = var8.taken;
                                if (!var8) {
                                    _fun81426_ip = 555;
                                    continue _fun81426
                                }
                            case 483:
                                var11 = _closure1_slot1;
                                var13 = _closure1_slot2;
                                var8 = 7;
                                var8 = var13[var8];
                                var14 = var11.bind(var3)(var8);
                                var13 = var14.track;
                                var8 = _closure1_slot4;
                                var11 = var8.POMELO_ERRORS;
                                var8 = {
                                    'reason': 'already_taken',
                                    'username_error': true
                                };
                                var15 = _closure2_slot1;
                                var8.location = var15;
                                var15 = _closure2_slot3;
                                var8.one_click_flow = var15;
                                var8 = var13.bind(var14)(var11, var8);
                            case 555:
                                var8 = _closure1_slot1;
                                var11 = _closure1_slot2;
                                var6 = 4;
                                var6 = var11[var6];
                                var11 = var8.bind(var3)(var6);
                                var8 = var11.dispatch;
                                var6 = {};
                                var13 = 'POMELO_ATTEMPT_SUCCESS';
                                var6.type = var13;
                                var13 = _closure2_slot0;
                                var6.username = var13;
                                var12 = var12.body;
                                var12 = var12.taken;
                                var6.taken = var12;
                                var6 = var8.bind(var11)(var6);
                            case 621: // try_end0
                                _fun81426_ip = 916;
                                continue _fun81426;
                            case 626:
                                return var1;
                            case 629: // catch_target0
                                CatchBlockStart(arg_register = 11);
                                var8 = _closure1_slot0;
                                var12 = _closure1_slot2;
                                var6 = 10;
                                var6 = var12[var6];
                                var6 = var8.bind(var3)(var6);
                                var6 = var6.APIError;
                                var8 = var6.prototype;
                                var8 = Object.create(var8, {
                                    constructor: {
                                        value: var6
                                    }
                                });
                                var21 = var8;
                                var20 = var11;
                                var6 = new var21[var6](var20, var19);
                                var8 = var6 instanceof Object ? var6 : var8;
                                var7 = var8;
                                var6 = var8.getAnyErrorMessage;
                                var6 = var6.bind(var8)();
                                var2 = var6;
                                var6 = var10 != var6;
                                var13 = undefined;
                                if (!var6) {
                                    _fun81426_ip = 711;
                                    continue _fun81426
                                }
                            case 708:
                                var13 = var2;
                            case 711:
                                var9 = var13;
                                var2 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var8 = 7;
                                var8 = var6[var8];
                                var12 = var2.bind(var3)(var8);
                                var11 = var12.track;
                                var1 = _closure1_slot4;
                                var8 = var1.POMELO_ERRORS;
                                var1 = {};
                                var1.reason = var13;
                                var13 = true;
                                var1.username_error = var13;
                                var13 = _closure2_slot1;
                                var1.location = var13;
                                var13 = _closure2_slot3;
                                var1.one_click_flow = var13;
                                var1 = var11.bind(var12)(var8, var1);
                                var1 = 4;
                                var1 = var6[var1];
                                var6 = var2.bind(var3)(var1);
                                var2 = var6.dispatch;
                                var1 = {};
                                var8 = _closure2_slot0;
                                var1.username = var8;
                                var8 = 'POMELO_ATTEMPT_FAILURE';
                                var1.type = var8;
                                var8 = var7;
                                var8 = var8.status;
                                var10 = var10 != var8;
                                var8 = undefined;
                                if (!var10) {
                                    _fun81426_ip = 886;
                                    continue _fun81426
                                }
                            case 840:
                                var10 = var7;
                                var11 = var10.status;
                                var10 = 500;
                                var10 = var11 < var10;
                                var8 = undefined;
                                if (!var10) {
                                    _fun81426_ip = 886;
                                    continue _fun81426
                                }
                            case 863:
                                var10 = var7;
                                var11 = var10.status;
                                var10 = 401;
                                var8 = undefined;
                                if (!(var10 !== var11)) {
                                    _fun81426_ip = 886;
                                    continue _fun81426
                                }
                            case 883:
                                var8 = var9;
                            case 886:
                                var1.error = var8;
                                var8 = var7.status;
                                var1.statusCode = var8;
                                var7 = var7.retryAfter;
                                var1.retryAfter = var7;
                                var1 = var2.bind(var6)(var1);
                            case 916:
                                return var3;
                            case 919:
                                var2 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var7 = 7;
                                var7 = var6[var7];
                                var9 = var2.bind(var3)(var7);
                                var8 = var9.track;
                                var1 = _closure1_slot4;
                                var7 = var1.POMELO_ERRORS;
                                var1 = {};
                                var1.reason = var4;
                                var10 = true;
                                var1.username_error = var10;
                                var10 = _closure2_slot1;
                                var1.location = var10;
                                var10 = _closure2_slot3;
                                var1.one_click_flow = var10;
                                var1 = var8.bind(var9)(var7, var1);
                                var1 = 4;
                                var1 = var6[var1];
                                var3 = var2.bind(var3)(var1);
                                var2 = var3.dispatch;
                                var1 = {};
                                var6 = 'POMELO_ATTEMPT_FAILURE';
                                var1.type = var6;
                                var5 = _closure2_slot0;
                                var1.username = var5;
                                var1.error = var4;
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            case 1043:
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var1.attemptPomelo = var6;
    var3 = function arg0() {
        _fun81427: for (var _fun81427_ip = 0;;) switch (_fun81427_ip) {
            case 0:
                var2 = arguments[1];
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = undefined;
                if (!(var2 === var1)) {
                    _fun81427_ip = 20;
                    continue _fun81427
                }
            case 18:
                var2 = false;
            case 20:
                var _closure2_slot1 = var2;
                var2 = _closure1_slot3;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun81429: for (var _fun81429_ip = 0;;) switch (_fun81429_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun81429_ip = 205;
                                    continue _fun81429
                                }
                            case 10:
                                var3 = _closure1_slot1;
                                var10 = _closure1_slot2;
                                var1 = 8;
                                var1 = var10[var1];
                                var4 = undefined;
                                var5 = var3.bind(var4)(var1);
                                var3 = var5.post;
                                var1 = {};
                                var6 = _closure2_slot0;
                                var1.body = var6;
                                var6 = _closure1_slot5;
                                var6 = var6.POMELO_CREATE;
                                var1.url = var6;
                                var6 = {};
                                var9 = _closure1_slot0;
                                var7 = 9;
                                var7 = var10[var7];
                                var7 = var9.bind(var4)(var7);
                                var7 = var7.NetworkActionNames;
                                var7 = var7.POMELO_CREATE;
                                var6.event = var7;
                                var7 = {};
                                var8 = _closure2_slot1;
                                var7.one_click_flow = var8;
                                var6.properties = var7;
                                var1.trackedActionData = var6;
                                var6 = false;
                                var1.rejectWithError = var6;
                                var1 = var3.bind(var5)(var1);
                                SaveGenerator(address = 139);
                            case 137:
                                return var1;
                            case 139:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun81429_ip = 202;
                                    continue _fun81429
                                }
                            case 145:
                                var3 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var2 = 4;
                                var2 = var5[var2];
                                var4 = var3.bind(var4)(var2);
                                var3 = var4.dispatch;
                                var2 = {};
                                var5 = 'CURRENT_USER_UPDATE';
                                var2.type = var5;
                                var5 = var1.body;
                                var2.user = var5;
                                var2 = var3.bind(var4)(var2);
                                var2 = var1.body;
                                return var2;
                            case 202:
                                return var1;
                            case 205:
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var1.createPomelo = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/pomelo/PomeloActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 10378, 1234, 806, 507, 10384, 795, 4526, 481, 3352, 2]);