// modules/unique_usernames/UniqueUsernamesActionCreators.tsx
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
    var1 = {};
    var6 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.dispatch;
        var0 = {};
        var3 = 'UNIQUE_USERNAME_SUGGESTIONS_RESET';
        var0.type = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.resetSuggestions = var6;
    var6 = function arg0() {
        _fun81731: for (var _fun81731_ip = 0;;) switch (_fun81731_ip) {
            case 0:
                var2 = arguments[1];
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = undefined;
                if (!(var2 === var1)) {
                    _fun81731_ip = 24;
                    continue _fun81731
                }
            case 18:
                var2 = 1500;
            case 24:
                var _closure2_slot1 = var2;
                var2 = _closure1_slot3;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun81733: for (var _fun81733_ip = 0;;) switch (_fun81733_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun81733_ip = 291;
                                    continue _fun81733
                                }
                            case 10:
                                var1 = undefined;
                                var9 = undefined;
                                var7 = undefined;
                                var4 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var5 = 3;
                                var2 = var2[var5];
                                var6 = var4.bind(var1)(var2);
                                var4 = var6.dispatch;
                                var2 = {};
                                var8 = 'UNIQUE_USERNAME_SUGGESTIONS_RESET';
                                var2.type = var8;
                                var2 = var4.bind(var6)(var2);
                            case 61: // try_start_0
                                var4 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var2 = 4;
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
                                    _fun81733_ip = 139;
                                    continue _fun81733
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
                                    _fun81733_ip = 283;
                                    continue _fun81733
                                }
                            case 179:
                                var7 = var2;
                                var4 = var2.ok;
                                if (!var4) {
                                    _fun81733_ip = 221;
                                    continue _fun81733
                                }
                            case 191:
                                var4 = var7;
                                var4 = var4.body;
                                var9 = var4;
                                var10 = var8 == var4;
                                var4 = undefined;
                                if (var10) {
                                    _fun81733_ip = 217;
                                    continue _fun81733
                                }
                            case 211:
                                var4 = var9.username;
                            case 217:
                                if (!(var8 == var4)) {
                                    _fun81733_ip = 223;
                                    continue _fun81733
                                }
                            case 221: // try_end0
                                _fun81733_ip = 288;
                                continue _fun81733;
                            case 223: // try_start_1
                                var4 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var3 = var3[var5];
                                var5 = var4.bind(var1)(var3);
                                var4 = var5.dispatch;
                                var3 = {};
                                var8 = 'UNIQUE_USERNAME_REGISTRATION_SUGGESTIONS_SUCCESS';
                                var3.type = var8;
                                var7 = var7.body;
                                var3.suggestion = var7;
                                var6 = _closure2_slot0;
                                var3.source = var6;
                                var3 = var4.bind(var5)(var3);
                            case 280: // try_end1
                                return var3;
                            case 283:
                                return var2;
                            case 286: // catch_target0 // catch_target1
                                CatchBlockStart(arg_register = 2);
                            case 288:
                                return var1;
                            case 291:
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
    var3 = function arg0() {
        _fun81734: for (var _fun81734_ip = 0;;) switch (_fun81734_ip) {
            case 0:
                var4 = arguments[1];
                var3 = arguments[2];
                var2 = arguments[3];
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = undefined;
                if (!(var4 === var1)) {
                    _fun81734_ip = 28;
                    continue _fun81734
                }
            case 24:
                var4 = 'modal';
            case 28:
                var _closure2_slot1 = var4;
                if (!(var3 === var1)) {
                    _fun81734_ip = 38;
                    continue _fun81734
                }
            case 36:
                var3 = false;
            case 38:
                var _closure2_slot2 = var3;
                if (!(var2 === var1)) {
                    _fun81734_ip = 48;
                    continue _fun81734
                }
            case 46:
                var2 = false;
            case 48:
                var _closure2_slot3 = var2;
                var2 = _closure1_slot3;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun81736: for (var _fun81736_ip = 0;;) switch (_fun81736_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun81736_ip = 1046;
                                    continue _fun81736
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
                                    _fun81736_ip = 244;
                                    continue _fun81736
                                }
                            case 60:
                                var6 = var1.includes;
                                var4 = '..';
                                var4 = var6.bind(var1)(var4);
                                if (var4) {
                                    _fun81736_ip = 182;
                                    continue _fun81736
                                }
                            case 79:
                                var4 = var1.length;
                                var11 = 2;
                                if (!(!(var4 < var11))) {
                                    _fun81736_ip = 108;
                                    continue _fun81736
                                }
                            case 91:
                                var4 = var1.length;
                                var1 = 32;
                                var1 = var4 > var1;
                                var4 = undefined;
                                if (!var1) {
                                    _fun81736_ip = 180;
                                    continue _fun81736
                                }
                            case 108:
                                var6 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var8 = var1[var11];
                                var8 = var6.bind(var3)(var8);
                                var10 = var8.intl;
                                var8 = var10.formatToPlainString;
                                var1 = var1[var11];
                                var1 = var6.bind(var3)(var1);
                                var1 = var1.t;
                                var6 = var1.IpijXA;
                                var1 = {
                                    'maxNum': 32,
                                    'minNum': 2
                                };
                                var4 = var8.bind(var10)(var6, var1);
                            case 180:
                                _fun81736_ip = 242;
                                continue _fun81736;
                            case 182:
                                var10 = _closure1_slot0;
                                var11 = _closure1_slot2;
                                var1 = 2;
                                var6 = var11[var1];
                                var6 = var10.bind(var3)(var6);
                                var8 = var6.intl;
                                var6 = var8.string;
                                var1 = var11[var1];
                                var1 = var10.bind(var3)(var1);
                                var1 = var1.t;
                                var1 = var1["C7G+gr"];
                                var4 = var6.bind(var8)(var1);
                            case 242:
                                _fun81736_ip = 302;
                                continue _fun81736;
                            case 244:
                                var10 = _closure1_slot0;
                                var11 = _closure1_slot2;
                                var1 = 2;
                                var6 = var11[var1];
                                var6 = var10.bind(var3)(var6);
                                var8 = var6.intl;
                                var6 = var8.string;
                                var1 = var11[var1];
                                var1 = var10.bind(var3)(var1);
                                var1 = var1.t;
                                var1 = var1.z7c4bP;
                                var4 = var6.bind(var8)(var1);
                            case 302:
                                var10 = null;
                                if (!(var10 == var4)) {
                                    _fun81736_ip = 921;
                                    continue _fun81736
                                }
                            case 311: // try_start_0
                                var8 = _closure1_slot1;
                                var11 = _closure1_slot2;
                                var1 = 6;
                                var1 = var11[var1];
                                var11 = var8.bind(var3)(var1);
                                var8 = var11.post;
                                var1 = {};
                                var14 = _closure2_slot2;
                                var15 = _closure1_slot5;
                                if (var14) {
                                    _fun81736_ip = 361;
                                    continue _fun81736
                                }
                            case 353:
                                var14 = var15.POMELO_ATTEMPT;
                                _fun81736_ip = 367;
                                continue _fun81736;
                            case 361:
                                var14 = var15.POMELO_ATTEMPT_UNAUTHED;
                            case 367:
                                var1.url = var14;
                                var14 = {};
                                var16 = _closure2_slot0;
                                var14.username = var16;
                                var1.body = var14;
                                var14 = {};
                                var17 = _closure1_slot0;
                                var18 = _closure1_slot2;
                                var15 = 7;
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
                                    _fun81736_ip = 627;
                                    continue _fun81736
                                }
                            case 466:
                                var12 = var1;
                                var8 = var1.body;
                                var8 = var8.taken;
                                if (!var8) {
                                    _fun81736_ip = 555;
                                    continue _fun81736
                                }
                            case 483:
                                var11 = _closure1_slot1;
                                var13 = _closure1_slot2;
                                var8 = 5;
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
                                var6 = 3;
                                var6 = var11[var6];
                                var11 = var8.bind(var3)(var6);
                                var8 = var11.dispatch;
                                var6 = {};
                                var13 = 'UNIQUE_USERNAME_ATTEMPT_SUCCESS';
                                var6.type = var13;
                                var13 = _closure2_slot0;
                                var6.username = var13;
                                var12 = var12.body;
                                var12 = var12.taken;
                                var6.taken = var12;
                                var6 = var8.bind(var11)(var6);
                            case 622: // try_end0
                                _fun81736_ip = 918;
                                continue _fun81736;
                            case 627:
                                return var1;
                            case 630: // catch_target0
                                CatchBlockStart(arg_register = 11);
                                var8 = _closure1_slot0;
                                var12 = _closure1_slot2;
                                var6 = 8;
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
                                    _fun81736_ip = 712;
                                    continue _fun81736
                                }
                            case 709:
                                var13 = var2;
                            case 712:
                                var9 = var13;
                                var2 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var8 = 5;
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
                                var1 = 3;
                                var1 = var6[var1];
                                var6 = var2.bind(var3)(var1);
                                var2 = var6.dispatch;
                                var1 = {};
                                var8 = _closure2_slot0;
                                var1.username = var8;
                                var8 = 'UNIQUE_USERNAME_ATTEMPT_FAILURE';
                                var1.type = var8;
                                var8 = var7;
                                var8 = var8.status;
                                var10 = var10 != var8;
                                var8 = undefined;
                                if (!var10) {
                                    _fun81736_ip = 888;
                                    continue _fun81736
                                }
                            case 842:
                                var10 = var7;
                                var11 = var10.status;
                                var10 = 500;
                                var10 = var11 < var10;
                                var8 = undefined;
                                if (!var10) {
                                    _fun81736_ip = 888;
                                    continue _fun81736
                                }
                            case 865:
                                var10 = var7;
                                var11 = var10.status;
                                var10 = 401;
                                var8 = undefined;
                                if (!(var10 !== var11)) {
                                    _fun81736_ip = 888;
                                    continue _fun81736
                                }
                            case 885:
                                var8 = var9;
                            case 888:
                                var1.error = var8;
                                var8 = var7.status;
                                var1.statusCode = var8;
                                var7 = var7.retryAfter;
                                var1.retryAfter = var7;
                                var1 = var2.bind(var6)(var1);
                            case 918:
                                return var3;
                            case 921:
                                var2 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var7 = 5;
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
                                var1 = 3;
                                var1 = var6[var1];
                                var3 = var2.bind(var3)(var1);
                                var2 = var3.dispatch;
                                var1 = {};
                                var6 = 'UNIQUE_USERNAME_ATTEMPT_FAILURE';
                                var1.type = var6;
                                var5 = _closure2_slot0;
                                var1.username = var5;
                                var1.error = var4;
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            case 1046:
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
    var1.attemptUsername = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/unique_usernames/UniqueUsernamesActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 1235, 807, 507, 796, 4531, 481, 3350, 2]);