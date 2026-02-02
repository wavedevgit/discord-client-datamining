// modules/safety_hub/SafetyHubActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun79408: for (var _fun79408_ip = 0;;) switch (_fun79408_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun79408_ip = 264;
                            continue _fun79408
                        }
                    case 12:
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 5;
                        var4 = var4[var2];
                        var2 = undefined;
                        var6 = var5.bind(var2)(var4);
                        var5 = var6.dispatch;
                        var4 = {};
                        var7 = 'SAFETY_HUB_FETCH_START';
                        var4.type = var7;
                        var4 = var5.bind(var6)(var4);
                        var5 = _closure1_slot4;
                        var4 = var5.getSuspendedUserToken;
                        var8 = var4.bind(var5)();
                        var4 = null;
                        if (!(var4 == var8)) {
                            _fun79408_ip = 91;
                            continue _fun79408
                        }
                    case 79:
                        var5 = _closure1_slot8;
                        var7 = var5.SAFETY_HUB;
                        _fun79408_ip = 101;
                        continue _fun79408;
                    case 91:
                        var5 = _closure1_slot8;
                        var7 = var5.SAFETY_HUB_SUSPENDED;
                    case 101:
                        if (!(var4 == var8)) {
                            _fun79408_ip = 154;
                            continue _fun79408
                        }
                    case 105:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 6;
                        var4 = var6[var4];
                        var4 = var5.bind(var2)(var4);
                        var6 = var4.HTTP;
                        var5 = var6.get;
                        var4 = {};
                        var4.url = var7;
                        var9 = false;
                        var4.rejectWithError = var9;
                        var5 = var5.bind(var6)(var4);
                        _fun79408_ip = 213;
                        continue _fun79408;
                    case 154:
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 6;
                        var3 = var6[var3];
                        var3 = var4.bind(var2)(var3);
                        var6 = var3.HTTP;
                        var4 = var6.post;
                        var3 = {};
                        var3.url = var7;
                        var7 = {};
                        var7.token = var8;
                        var3.body = var7;
                        var7 = false;
                        var3.rejectWithError = var7;
                        var5 = var4.bind(var6)(var3);
                    case 213:
                        var4 = var5.then;
                        var3 = function(arg0) { // Environment: var1
                            _fun79409: for (var _fun79409_ip = 0;;) switch (_fun79409_ip) {
                                case 0:
                                    var0 = arg0;
                                    var0 = var0.body;
                                    var2 = var0.classifications;
                                    var12 = var0.guild_classifications;
                                    var9 = var0.account_standing;
                                    var8 = var0.is_dsa_eligible;
                                    var7 = var0.username;
                                    var6 = var0.is_appeal_eligible;
                                    var4 = var0.appeal_eligibility;
                                    var1 = var2.map;
                                    var0 = function(arg0) { // Environment: var0
                                        var0 = arg0;
                                        var2 = _closure1_slot11;
                                        var1 = undefined;
                                        var1 = var2.bind(var1)(var0);
                                        return var0;
                                    };
                                    var11 = var1.bind(var2)(var0);
                                    var2 = _closure1_slot1;
                                    var1 = _closure1_slot2;
                                    var0 = 5;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var3 = var2.bind(var0)(var1);
                                    var2 = var3.dispatch;
                                    var1 = {};
                                    var5 = 'SAFETY_HUB_FETCH_SUCCESS';
                                    var1.type = var5;
                                    var10 = var11.concat;
                                    var5 = null;
                                    if (!(var5 == var12)) {
                                        _fun79409_ip = 129;
                                        continue _fun79409
                                    }
                                case 125:
                                    var12 = new Array(0);
                                case 129:
                                    var10 = var10.bind(var11)(var12);
                                    var1.classifications = var10;
                                    var1.accountStanding = var9;
                                    var1.isDsaEligible = var8;
                                    var1.username = var7;
                                    var1.isAppealEligible = var6;
                                    if (!(var5 == var4)) {
                                        _fun79409_ip = 166;
                                        continue _fun79409
                                    }
                                case 162:
                                    var4 = new Array(0);
                                case 166:
                                    var1.appealEligibility = var4;
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                            }
                        };
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.catch;
                        var1 = function(arg0) { // Environment: var1
                            _fun79411: for (var _fun79411_ip = 0;;) switch (_fun79411_ip) {
                                case 0:
                                    var6 = arg0;
                                    var2 = _closure1_slot1;
                                    var1 = _closure1_slot2;
                                    var0 = 5;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var3 = var2.bind(var0)(var1);
                                    var2 = var3.dispatch;
                                    var1 = {};
                                    var4 = 'SAFETY_HUB_FETCH_FAILURE';
                                    var1.type = var4;
                                    var4 = null;
                                    var7 = var4 == var6;
                                    var5 = undefined;
                                    if (var7) {
                                        _fun79411_ip = 75;
                                        continue _fun79411
                                    }
                                case 56:
                                    var6 = var6.body;
                                    var7 = var4 == var6;
                                    var5 = undefined;
                                    if (var7) {
                                        _fun79411_ip = 75;
                                        continue _fun79411
                                    }
                                case 70:
                                    var5 = var6.message;
                                case 75:
                                    var6 = var4 != var5;
                                    var4 = 'Unknown error';
                                    if (!var6) {
                                        _fun79411_ip = 91;
                                        continue _fun79411
                                    }
                                case 88:
                                    var4 = var5;
                                case 91:
                                    var1.error = var4;
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                            }
                        };
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 252);
                    case 250:
                        return var1;
                    case 252:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun79408_ip = 261;
                            continue _fun79408
                        }
                    case 258:
                        return var2;
                    case 261:
                        return var1;
                    case 264:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot9 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot9 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun79414: for (var _fun79414_ip = 0;;) switch (_fun79414_ip) {
                    case 0:
                        StartGenerator();
                        var7 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun79414_ip = 276;
                            continue _fun79414
                        }
                    case 15:
                        var _closure4_slot0 = var7;
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 5;
                        var4 = var4[var2];
                        var2 = undefined;
                        var6 = var5.bind(var2)(var4);
                        var5 = var6.dispatch;
                        var4 = {};
                        var8 = 'SAFETY_HUB_FETCH_CLASSIFICATION_START';
                        var4.type = var8;
                        var4.classificationId = var7;
                        var4 = var5.bind(var6)(var4);
                        var5 = _closure1_slot4;
                        var4 = var5.getSuspendedUserToken;
                        var8 = var4.bind(var5)();
                        var4 = null;
                        if (!(var4 == var8)) {
                            _fun79414_ip = 103;
                            continue _fun79414
                        }
                    case 91:
                        var5 = _closure1_slot8;
                        var7 = var5.SAFETY_HUB;
                        _fun79414_ip = 113;
                        continue _fun79414;
                    case 103:
                        var5 = _closure1_slot8;
                        var7 = var5.SAFETY_HUB_SUSPENDED;
                    case 113:
                        if (!(var4 == var8)) {
                            _fun79414_ip = 166;
                            continue _fun79414
                        }
                    case 117:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 6;
                        var4 = var6[var4];
                        var4 = var5.bind(var2)(var4);
                        var6 = var4.HTTP;
                        var5 = var6.get;
                        var4 = {};
                        var4.url = var7;
                        var9 = false;
                        var4.rejectWithError = var9;
                        var5 = var5.bind(var6)(var4);
                        _fun79414_ip = 225;
                        continue _fun79414;
                    case 166:
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 6;
                        var3 = var6[var3];
                        var3 = var4.bind(var2)(var3);
                        var6 = var3.HTTP;
                        var4 = var6.post;
                        var3 = {};
                        var3.url = var7;
                        var7 = {};
                        var7.token = var8;
                        var3.body = var7;
                        var7 = false;
                        var3.rejectWithError = var7;
                        var5 = var4.bind(var6)(var3);
                    case 225:
                        var4 = var5.then;
                        var3 = function(arg0) { // Environment: var1
                            _fun79415: for (var _fun79415_ip = 0;;) switch (_fun79415_ip) {
                                case 0:
                                    var0 = arg0;
                                    var0 = var0.body;
                                    var2 = var0.classifications;
                                    var6 = var0.account_standing;
                                    var5 = var0.is_dsa_eligible;
                                    var4 = var0.username;
                                    var3 = var0.is_appeal_eligible;
                                    var1 = var2.find;
                                    var0 = function(arg0) { // Environment: var0
                                        var0 = arg0;
                                        var1 = var0.id;
                                        var0 = _closure4_slot0;
                                        var0 = var1 === var0;
                                        return var0;
                                    };
                                    var7 = var1.bind(var2)(var0);
                                    var0 = null;
                                    if (!(var0 == var7)) {
                                        _fun79415_ip = 125;
                                        continue _fun79415
                                    }
                                case 62:
                                    var2 = _closure1_slot1;
                                    var1 = _closure1_slot2;
                                    var0 = 5;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var2 = var2.bind(var0)(var1);
                                    var1 = var2.dispatch;
                                    var0 = {
                                        'type': 'SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE',
                                        'error': 'Classification not found.'
                                    };
                                    var8 = _closure4_slot0;
                                    var0.classificationId = var8;
                                    var0 = var1.bind(var2)(var0);
                                    _fun79415_ip = 205;
                                    continue _fun79415;
                                case 125:
                                    var1 = _closure1_slot11;
                                    var2 = undefined;
                                    var1 = var1.bind(var2)(var7);
                                    var1 = _closure1_slot1;
                                    var8 = _closure1_slot2;
                                    var0 = 5;
                                    var0 = var8[var0];
                                    var2 = var1.bind(var2)(var0);
                                    var1 = var2.dispatch;
                                    var0 = {};
                                    var8 = 'SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS';
                                    var0.type = var8;
                                    var0.classification = var7;
                                    var0.accountStanding = var6;
                                    var0.isDsaEligible = var5;
                                    var0.username = var4;
                                    var0.isAppealEligible = var3;
                                    var0 = var1.bind(var2)(var0);
                                case 205:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.catch;
                        var1 = function(arg0) { // Environment: var1
                            _fun79417: for (var _fun79417_ip = 0;;) switch (_fun79417_ip) {
                                case 0:
                                    var6 = arg0;
                                    var2 = _closure1_slot1;
                                    var1 = _closure1_slot2;
                                    var0 = 5;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var3 = var2.bind(var0)(var1);
                                    var2 = var3.dispatch;
                                    var1 = {};
                                    var4 = 'SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE';
                                    var1.type = var4;
                                    var4 = null;
                                    var7 = var4 == var6;
                                    var5 = undefined;
                                    if (var7) {
                                        _fun79417_ip = 75;
                                        continue _fun79417
                                    }
                                case 56:
                                    var6 = var6.body;
                                    var7 = var4 == var6;
                                    var5 = undefined;
                                    if (var7) {
                                        _fun79417_ip = 75;
                                        continue _fun79417
                                    }
                                case 70:
                                    var5 = var6.message;
                                case 75:
                                    var6 = var4 != var5;
                                    var4 = 'Unknown error';
                                    if (!var6) {
                                        _fun79417_ip = 91;
                                        continue _fun79417
                                    }
                                case 88:
                                    var4 = var5;
                                case 91:
                                    var1.error = var4;
                                    var4 = _closure4_slot0;
                                    var1.classificationId = var4;
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                            }
                        };
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 264);
                    case 262:
                        return var1;
                    case 264:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun79414_ip = 273;
                            continue _fun79414
                        }
                    case 270:
                        return var2;
                    case 273:
                        return var1;
                    case 276:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot10 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot10 = var0;
    var0 = function arg0() {
        _fun79418: for (var _fun79418_ip = 0;;) switch (_fun79418_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.flagged_content;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun79418_ip = 132;
                    continue _fun79418
                }
            case 15:
                var0 = var1.flagged_content;
                var0 = var0.length;
                var2 = 0;
                if (!(var0 > var2)) {
                    _fun79418_ip = 132;
                    continue _fun79418
                }
            case 32:
                var0 = var1.flagged_content;
                var2 = var0[var2];
                var4 = var2.attachments;
                var3 = var4.filter;
                var0 = function(arg0) { // Environment: var0
                    _fun79419: for (var _fun79419_ip = 0;;) switch (_fun79419_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = var0.filename;
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var5 = 7;
                            var0 = var0[var5];
                            var4 = undefined;
                            var2 = var2.bind(var4)(var0);
                            var0 = var2.isImageFile;
                            var0 = var0.bind(var2)(var3);
                            if (var0) {
                                _fun79419_ip = 76;
                                continue _fun79419
                            }
                        case 48:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var5];
                            var2 = var2.bind(var4)(var1);
                            var1 = var2.isVideoFile;
                            var0 = var1.bind(var2)(var3);
                        case 76:
                            return var0;
                    }
                };
                var0 = var3.bind(var4)(var0);
                var2.attachments = var0;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 8;
                var3 = var3[var0];
                var0 = undefined;
                var3 = var4.bind(var0)(var3);
                var0 = var3.isFlaggedContentEmpty;
                var0 = var0.bind(var3)(var2);
                if (var0) {
                    _fun79418_ip = 122;
                    continue _fun79418
                }
            case 112:
                var0 = new Array(1);
                var0[0] = var2;
                _fun79418_ip = 126;
                continue _fun79418;
            case 122:
                var0 = new Array(0);
            case 126:
                var1.flagged_content = var0;
            case 132:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun79422: for (var _fun79422_ip = 0;;) switch (_fun79422_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arg0;
                        var10 = arg1;
                        var9 = arg2;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun79422_ip = 318;
                            continue _fun79422
                        }
                    case 21:
                        var _closure4_slot0 = var6;
                        var4 = _closure1_slot4;
                        var3 = var4.getSuspendedUserToken;
                        var8 = var3.bind(var4)();
                        var3 = null;
                        if (!(var3 == var8)) {
                            _fun79422_ip = 65;
                            continue _fun79422
                        }
                    case 48:
                        var5 = _closure1_slot8;
                        var4 = var5.SAFETY_HUB_REQUEST_REVIEW;
                        var7 = var4.bind(var5)(var6);
                        _fun79422_ip = 80;
                        continue _fun79422;
                    case 65:
                        var5 = _closure1_slot8;
                        var4 = var5.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW;
                        var7 = var4.bind(var5)(var6);
                    case 80:
                        if (!(var3 == var8)) {
                            _fun79422_ip = 152;
                            continue _fun79422
                        }
                    case 84:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var3 = 6;
                        var4 = var4[var3];
                        var3 = undefined;
                        var3 = var5.bind(var3)(var4);
                        var5 = var3.HTTP;
                        var4 = var5.put;
                        var3 = {};
                        var3.url = var7;
                        var6 = {};
                        var6.signal = var10;
                        var6.user_input = var9;
                        var3.body = var6;
                        var6 = false;
                        var3.rejectWithError = var6;
                        var5 = var4.bind(var5)(var3);
                        _fun79422_ip = 223;
                        continue _fun79422;
                    case 152:
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var3 = 6;
                        var4 = var4[var3];
                        var3 = undefined;
                        var3 = var6.bind(var3)(var4);
                        var6 = var3.HTTP;
                        var4 = var6.put;
                        var3 = {};
                        var3.url = var7;
                        var7 = {};
                        var7.signal = var10;
                        var7.user_input = var9;
                        var7.token = var8;
                        var3.body = var7;
                        var7 = false;
                        var3.rejectWithError = var7;
                        var5 = var4.bind(var6)(var3);
                    case 223:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 5;
                        var3 = var3[var2];
                        var2 = undefined;
                        var6 = var4.bind(var2)(var3);
                        var4 = var6.dispatch;
                        var3 = {};
                        var7 = 'SAFETY_HUB_REQUEST_REVIEW_START';
                        var3.type = var7;
                        var3 = var4.bind(var6)(var3);
                        var4 = var5.then;
                        var3 = function() { // Environment: var1
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 5;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var4 = 'SAFETY_HUB_REQUEST_REVIEW_SUCCESS';
                            var1.type = var4;
                            var4 = _closure4_slot0;
                            var1.classificationId = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.catch;
                        var1 = function(arg0) { // Environment: var1
                            _fun79424: for (var _fun79424_ip = 0;;) switch (_fun79424_ip) {
                                case 0:
                                    var0 = arg0;
                                    var2 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var1 = 5;
                                    var1 = var3[var1];
                                    var8 = undefined;
                                    var3 = var2.bind(var8)(var1);
                                    var2 = var3.dispatch;
                                    var1 = {};
                                    var4 = 'SAFETY_HUB_REQUEST_REVIEW_FAILURE';
                                    var1.type = var4;
                                    var4 = null;
                                    var6 = var4 == var0;
                                    var5 = undefined;
                                    if (var6) {
                                        _fun79424_ip = 75;
                                        continue _fun79424
                                    }
                                case 56:
                                    var6 = var0.body;
                                    var7 = var4 == var6;
                                    var5 = undefined;
                                    if (var7) {
                                        _fun79424_ip = 75;
                                        continue _fun79424
                                    }
                                case 70:
                                    var5 = var6.message;
                                case 75:
                                    var6 = var4 != var5;
                                    var4 = 'Unknown error';
                                    if (!var6) {
                                        _fun79424_ip = 91;
                                        continue _fun79424
                                    }
                                case 88:
                                    var4 = var5;
                                case 91:
                                    var1.error = var4;
                                    var1 = var2.bind(var3)(var1);
                                    throw var0;
                            }
                        };
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 306);
                    case 304:
                        return var1;
                    case 306:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun79422_ip = 315;
                            continue _fun79422
                        }
                    case 312:
                        return var2;
                    case 315:
                        return var1;
                    case 318:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot12 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot12 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun79427: for (var _fun79427_ip = 0;;) switch (_fun79427_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun79427_ip = 197;
                            continue _fun79427
                        }
                    case 12:
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 5;
                        var4 = var5[var2];
                        var2 = undefined;
                        var7 = var6.bind(var2)(var4);
                        var6 = var7.dispatch;
                        var4 = {};
                        var8 = 'SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START';
                        var4.type = var8;
                        var4 = var6.bind(var7)(var4);
                        var6 = _closure1_slot4;
                        var4 = var6.getSuspendedUserToken;
                        var7 = var4.bind(var6)();
                        var4 = _closure1_slot8;
                        var6 = var4.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION;
                        var4 = _closure1_slot0;
                        var3 = 6;
                        var3 = var5[var3];
                        var3 = var4.bind(var2)(var3);
                        var5 = var3.HTTP;
                        var4 = var5.post;
                        var3 = {};
                        var3.url = var6;
                        var6 = {};
                        var6.token = var7;
                        var7 = arg0;
                        var6.from_classification_id = var7;
                        var3.body = var6;
                        var6 = false;
                        var3.rejectWithError = var6;
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.then;
                        var3 = function(arg0) { // Environment: var1
                            var0 = arg0;
                            var0 = var0.body;
                            var5 = var0.verification_request_id;
                            var4 = var0.verification_webview_url;
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 5;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var6 = 'SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS';
                            var1.type = var6;
                            var1.verificationRequestId = var5;
                            var1.verificationWebviewUrl = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.catch;
                        var1 = function(arg0) { // Environment: var1
                            _fun79429: for (var _fun79429_ip = 0;;) switch (_fun79429_ip) {
                                case 0:
                                    var6 = arg0;
                                    var2 = _closure1_slot1;
                                    var1 = _closure1_slot2;
                                    var0 = 5;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var3 = var2.bind(var0)(var1);
                                    var2 = var3.dispatch;
                                    var1 = {};
                                    var4 = 'SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE';
                                    var1.type = var4;
                                    var4 = null;
                                    var7 = var4 == var6;
                                    var5 = undefined;
                                    if (var7) {
                                        _fun79429_ip = 75;
                                        continue _fun79429
                                    }
                                case 56:
                                    var6 = var6.body;
                                    var7 = var4 == var6;
                                    var5 = undefined;
                                    if (var7) {
                                        _fun79429_ip = 75;
                                        continue _fun79429
                                    }
                                case 70:
                                    var5 = var6.message;
                                case 75:
                                    var6 = var4 != var5;
                                    var4 = 'Unknown error';
                                    if (!var6) {
                                        _fun79429_ip = 91;
                                        continue _fun79429
                                    }
                                case 88:
                                    var4 = var5;
                                case 91:
                                    var1.error = var4;
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                            }
                        };
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 185);
                    case 183:
                        return var1;
                    case 185:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun79427_ip = 194;
                            continue _fun79427
                        }
                    case 191:
                        return var2;
                    case 194:
                        return var1;
                    case 197:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot13 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot13 = var0;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot15;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot14 = var1;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun79433: for (var _fun79433_ip = 0;;) switch (_fun79433_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun79433_ip = 213;
                            continue _fun79433
                        }
                    case 12:
                        var2 = undefined;
                        var _closure4_slot0 = var2;
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var4 = 5;
                        var4 = var5[var4];
                        var7 = var6.bind(var2)(var4);
                        var6 = var7.dispatch;
                        var4 = {};
                        var8 = 'SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START';
                        var4.type = var8;
                        var4 = var6.bind(var7)(var4);
                        var6 = _closure1_slot4;
                        var4 = var6.getSuspendedUserToken;
                        var7 = var4.bind(var6)();
                        var6 = _closure1_slot5;
                        var4 = var6.getAgeCheckAttempts;
                        var4 = var4.bind(var6)();
                        _closure4_slot0 = var4;
                        var4 = _closure1_slot8;
                        var6 = var4.SAFETY_HUB_CHECK_SUSPENDED_AGE_VERIFICATION;
                        var4 = _closure1_slot0;
                        var3 = 6;
                        var3 = var5[var3];
                        var3 = var4.bind(var2)(var3);
                        var5 = var3.HTTP;
                        var4 = var5.post;
                        var3 = {};
                        var3.url = var6;
                        var6 = {};
                        var6.token = var7;
                        var3.body = var6;
                        var6 = false;
                        var3.rejectWithError = var6;
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.then;
                        var3 = function(arg0) { // Environment: var1
                            _fun79434: for (var _fun79434_ip = 0;;) switch (_fun79434_ip) {
                                case 0:
                                    var0 = arg0;
                                    var0 = var0.body;
                                    var4 = var0.success;
                                    var0 = !var4;
                                    if (!var0) {
                                        _fun79434_ip = 38;
                                        continue _fun79434
                                    }
                                case 20:
                                    var2 = _closure4_slot0;
                                    var1 = _closure1_slot7;
                                    var0 = var2 < var1;
                                case 38:
                                    if (!var0) {
                                        _fun79434_ip = 73;
                                        continue _fun79434
                                    }
                                case 41:
                                    var0 = global;
                                    var3 = var0.setTimeout;
                                    var2 = _closure1_slot6;
                                    var1 = undefined;
                                    var0 = function() { // Environment: var0
                                        var1 = _closure1_slot14;
                                        var0 = undefined;
                                        var0 = var1.bind(var0)();
                                        return var0;
                                    };
                                    var0 = var3.bind(var1)(var0, var2);
                                case 73:
                                    var2 = _closure1_slot1;
                                    var1 = _closure1_slot2;
                                    var0 = 5;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var3 = var2.bind(var0)(var1);
                                    var2 = var3.dispatch;
                                    var1 = {};
                                    var5 = 'SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS';
                                    var1.type = var5;
                                    var1.success = var4;
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                            }
                        };
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.catch;
                        var1 = function(arg0) { // Environment: var1
                            _fun79436: for (var _fun79436_ip = 0;;) switch (_fun79436_ip) {
                                case 0:
                                    var6 = arg0;
                                    var2 = _closure1_slot1;
                                    var1 = _closure1_slot2;
                                    var0 = 5;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var3 = var2.bind(var0)(var1);
                                    var2 = var3.dispatch;
                                    var1 = {};
                                    var4 = 'SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE';
                                    var1.type = var4;
                                    var4 = null;
                                    var7 = var4 == var6;
                                    var5 = undefined;
                                    if (var7) {
                                        _fun79436_ip = 75;
                                        continue _fun79436
                                    }
                                case 56:
                                    var6 = var6.body;
                                    var7 = var4 == var6;
                                    var5 = undefined;
                                    if (var7) {
                                        _fun79436_ip = 75;
                                        continue _fun79436
                                    }
                                case 70:
                                    var5 = var6.message;
                                case 75:
                                    var6 = var4 != var5;
                                    var4 = 'Unknown error';
                                    if (!var6) {
                                        _fun79436_ip = 91;
                                        continue _fun79436
                                    }
                                case 88:
                                    var4 = var5;
                                case 91:
                                    var1.error = var4;
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                            }
                        };
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 201);
                    case 199:
                        return var1;
                    case 201:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun79433_ip = 210;
                            continue _fun79433
                        }
                    case 207:
                        return var2;
                    case 210:
                        return var1;
                    case 213:
                        return var0;
                }
            };
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
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.AGE_CHECK_POLL_INTERVAL_MS;
    var _closure1_slot6 = var7;
    var4 = var4.AGE_CHECK_MAX_POLL_ATTEMPTS;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot8 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/safety_hub/SafetyHubActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function() {
        var0 = undefined;
        var3 = _closure1_slot9;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.getSafetyHubData = var4;
    var4 = function() {
        var0 = undefined;
        var3 = _closure1_slot10;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.getSafetyHubDataForClassification = var4;
    var4 = function() {
        var0 = undefined;
        var3 = _closure1_slot12;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.requestReview = var4;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot13;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.requestSuspendedUserAgeVerification = var3;
    var2.checkSuspendedUserAgeVerification = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1216, 10056, 5905, 660, 806, 507, 3941, 5904, 2]);