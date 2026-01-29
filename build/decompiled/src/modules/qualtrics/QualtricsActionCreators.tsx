// modules/qualtrics/QualtricsActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var4 = function() { // Original name: fetchSurveyDetails, environment: var6
        var0 = undefined;
        var3 = _closure1_slot11;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var0 = function() { // Original name: _fetchSurveyDetails, environment: var6
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun86992: for (var _fun86992_ip = 0;;) switch (_fun86992_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun86992_ip = 199;
                            continue _fun86992
                        }
                    case 10:
                        var6 = arg0;
                    case 13: // try_start_0
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 7;
                        var1 = var4[var1];
                        var5 = undefined;
                        var1 = var2.bind(var5)(var1);
                        var4 = var1.HTTP;
                        var2 = var4.get;
                        var1 = {};
                        var9 = _closure1_slot10;
                        var8 = var9.EMBEDDED_SURVEY;
                        var7 = var6;
                        var7 = var8.bind(var9)(var7);
                        var1.url = var7;
                        var7 = true;
                        var1.rejectWithError = var7;
                        var1 = var2.bind(var4)(var1);
                        SaveGenerator(address = 87);
                    case 85:
                        return var1;
                    case 87:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun86992_ip = 153;
                            continue _fun86992
                        }
                    case 93:
                        var2 = var1.body;
                        var4 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var3 = 8;
                        var3 = var7[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var7 = 'QUALTRICS_SURVEY_FETCH_SUCCESS';
                        var3.type = var7;
                        var3.surveyId = var6;
                        var3.surveyDetails = var2;
                        var3 = var4.bind(var5)(var3);
                    case 150: // try_end0
                        return var2;
                    case 153:
                        return var1;
                    case 156: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var4 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 9;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var4.bind(var1)(var2);
                        var1 = var2.captureException;
                        var1 = var1.bind(var2)(var3);
                        var1 = null;
                        return var1;
                    case 199:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot11 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot11 = var0;
    var3 = function() { // Original name: submitSurveyResponse, environment: var6
        var0 = undefined;
        var3 = _closure1_slot12;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var0 = function() { // Original name: _submitSurveyResponse, environment: var6
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun86996: for (var _fun86996_ip = 0;;) switch (_fun86996_ip) {
                    case 0:
                        StartGenerator();
                        var9 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun86996_ip = 277;
                            continue _fun86996
                        }
                    case 13:
                        var7 = var9;
                        var4 = undefined;
                        var8 = undefined;
                        var3 = _closure1_slot6;
                        var2 = var3.getState;
                        var3 = var2.bind(var3)();
                        var2 = var3.getDisplayedQuestions;
                        var6 = var2.bind(var3)(var9);
                        var3 = null;
                        if (!(var3 == var6)) {
                            _fun86996_ip = 58;
                            continue _fun86996
                        }
                    case 54:
                        var6 = new Array(0);
                    case 58:
                        var5 = function(arg0, arg1, arg2) { // Original name: parseSurveyResponses, environment: var2
                            _fun86997: for (var _fun86997_ip = 0;;) switch (_fun86997_ip) {
                                case 0:
                                    var6 = arg1;
                                    var4 = arg2;
                                    var3 = _closure1_slot7;
                                    var1 = var3.getSurvey;
                                    var0 = arg0;
                                    var19 = var1.bind(var3)(var0);
                                    var _closure5_slot0 = var19;
                                    var0 = null;
                                    if (!(var0 != var19)) {
                                        _fun86997_ip = 556;
                                        continue _fun86997
                                    }
                                case 44:
                                    var1 = {};
                                    var _closure5_slot1 = var1;
                                    var3 = global;
                                    var7 = var3.Object;
                                    var5 = var7.entries;
                                    var18 = var5.bind(var7)(var6);
                                    var5 = var18.length;
                                    var17 = 0;
                                    var5 = var17 < var5;
                                    var16 = '';
                                    var15 = '_DO';
                                    var14 = ',';
                                    var13 = ':TEXT:';
                                    var12 = 2;
                                    var11 = 1;
                                    var10 = undefined;
                                    var9 = '_';
                                    var8 = '_TEXT';
                                    var7 = 0;
                                    if (!var5) {
                                        _fun86997_ip = 517;
                                        continue _fun86997
                                    }
                                case 126:
                                    var21 = var18[var7];
                                    var5 = _closure1_slot3;
                                    var5 = var5.bind(var10)(var21, var12);
                                    var22 = var5[var17];
                                    var23 = var5[var11];
                                    var5 = var19.Questions;
                                    var5 = var5[var22];
                                    if (!(var0 != var5)) {
                                        _fun86997_ip = 502;
                                        continue _fun86997
                                    }
                                case 165:
                                    var24 = var5.QuestionType;
                                    var21 = _closure1_slot9;
                                    var21 = var21.MULTIPLE_CHOICE;
                                    if (!(var24 === var21)) {
                                        _fun86997_ip = 208;
                                        continue _fun86997
                                    }
                                case 185:
                                    var24 = var5.Selector;
                                    var21 = _closure1_slot8;
                                    var21 = var21.MULTIPLE_ANSWER;
                                    if (!(var24 !== var21)) {
                                        _fun86997_ip = 451;
                                        continue _fun86997
                                    }
                                case 208:
                                    var24 = var5.QuestionType;
                                    var21 = _closure1_slot9;
                                    var21 = var21.MULTIPLE_CHOICE;
                                    if (!(var24 === var21)) {
                                        _fun86997_ip = 248;
                                        continue _fun86997
                                    }
                                case 228:
                                    var24 = var5.Selector;
                                    var21 = _closure1_slot8;
                                    var21 = var21.SINGLE_ANSWER;
                                    if (!(var24 !== var21)) {
                                        _fun86997_ip = 303;
                                        continue _fun86997
                                    }
                                case 248:
                                    var24 = var5.QuestionType;
                                    var21 = _closure1_slot9;
                                    var21 = var21.TEXT_ENTRY;
                                    if (!(var24 !== var21)) {
                                        _fun86997_ip = 277;
                                        continue _fun86997
                                    }
                                case 268:
                                    var1[var22] = var23;
                                    _fun86997_ip = 502;
                                    continue _fun86997;
                                case 277:
                                    var21 = var3.HermesInternal;
                                    var21 = var21.concat;
                                    var21 = var21.bind(var16)(var22, var8);
                                    var1[var21] = var23;
                                    _fun86997_ip = 502;
                                    continue _fun86997;
                                case 303:
                                    var21 = var23.includes;
                                    var21 = var21.bind(var23)(var13);
                                    if (var21) {
                                        _fun86997_ip = 333;
                                        continue _fun86997
                                    }
                                case 316:
                                    var21 = var3.parseInt;
                                    var21 = var21.bind(var10)(var23);
                                    var1[var22] = var21;
                                    _fun86997_ip = 412;
                                    continue _fun86997;
                                case 333:
                                    var21 = var23.split;
                                    var21 = var21.bind(var23)(var13, var12);
                                    var25 = var21[var17];
                                    var21 = var23.split;
                                    var21 = var21.bind(var23)(var13, var12);
                                    var24 = var21[var11];
                                    var21 = var3.parseInt;
                                    var21 = var21.bind(var10)(var25);
                                    var1[var22] = var21;
                                    var21 = var3.HermesInternal;
                                    var21 = var21.concat;
                                    var30 = var16;
                                    var29 = var22;
                                    var28 = var9;
                                    var27 = var25;
                                    var26 = var8;
                                    var21 = var30[var21](var29, var28, var27, var26, var25);
                                    var1[var21] = var24;
                                case 412:
                                    var21 = var5.ChoiceOrder;
                                    if (!(var0 != var21)) {
                                        _fun86997_ip = 502;
                                        continue _fun86997
                                    }
                                case 422:
                                    var21 = var3.HermesInternal;
                                    var21 = var21.concat;
                                    var24 = var21.bind(var16)(var22, var15);
                                    var21 = var5.ChoiceOrder;
                                    var1[var24] = var21;
                                    _fun86997_ip = 502;
                                    continue _fun86997;
                                case 451:
                                    var21 = var23.split;
                                    var21 = var21.bind(var23)(var14);
                                    var1[var22] = var21;
                                    var21 = var5.ChoiceOrder;
                                    if (!(var0 != var21)) {
                                        _fun86997_ip = 502;
                                        continue _fun86997
                                    }
                                case 475:
                                    var21 = var3.HermesInternal;
                                    var21 = var21.concat;
                                    var21 = var21.bind(var16)(var22, var15);
                                    var5 = var5.ChoiceOrder;
                                    var1[var21] = var5;
                                case 502:
                                    var7 = var7 + 1;
                                    var5 = var18.length;
                                    if (var7 < var5) {
                                        _fun86997_ip = 126;
                                        continue _fun86997
                                    }
                                case 517:
                                    var5 = var3.Object;
                                    var3 = var5.keys;
                                    var3 = var3.bind(var5)(var6);
                                    var _closure5_slot2 = var3;
                                    var3 = var4.forEach;
                                    var2 = function(arg0) { // Environment: var2
                                        _fun86998: for (var _fun86998_ip = 0;;) switch (_fun86998_ip) {
                                            case 0:
                                                var5 = arg0;
                                                var2 = _closure5_slot2;
                                                var0 = var2.includes;
                                                var0 = var0.bind(var2)(var5);
                                                if (var0) {
                                                    _fun86998_ip = 169;
                                                    continue _fun86998
                                                }
                                            case 26:
                                                var0 = _closure5_slot0;
                                                var0 = var0.Questions;
                                                var0 = var0[var5];
                                                var3 = null;
                                                if (!(var3 != var0)) {
                                                    _fun86998_ip = 165;
                                                    continue _fun86998
                                                }
                                            case 46:
                                                var2 = var0.ChoiceOrder;
                                                var2 = var3 != var2;
                                                if (!var2) {
                                                    _fun86998_ip = 82;
                                                    continue _fun86998
                                                }
                                            case 59:
                                                var4 = var0.QuestionType;
                                                var3 = _closure1_slot9;
                                                var3 = var3.MULTIPLE_CHOICE;
                                                var2 = var4 === var3;
                                            case 82:
                                                if (!var2) {
                                                    _fun86998_ip = 169;
                                                    continue _fun86998
                                                }
                                            case 85:
                                                var3 = var0.Selector;
                                                var2 = _closure1_slot8;
                                                var2 = var2.MULTIPLE_ANSWER;
                                                if (!(var3 === var2)) {
                                                    _fun86998_ip = 120;
                                                    continue _fun86998
                                                }
                                            case 108:
                                                var3 = _closure5_slot1;
                                                var2 = new Array(0);
                                                var3[var5] = var2;
                                            case 120:
                                                var2 = _closure5_slot1;
                                                var1 = global;
                                                var1 = var1.HermesInternal;
                                                var4 = var1.concat;
                                                var3 = '';
                                                var1 = '_DO';
                                                var1 = var4.bind(var3)(var5, var1);
                                                var0 = var0.ChoiceOrder;
                                                var2[var1] = var0;
                                                _fun86998_ip = 169;
                                                continue _fun86998;
                                            case 165:
                                                var0 = undefined;
                                                return var0;
                                            case 169:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var2 = var3.bind(var4)(var2);
                                    return var1;
                                case 556:
                                    return var0;
                            }
                        };
                        var2 = arg1;
                        var2 = var5.bind(var4)(var9, var2, var6);
                        var8 = var2;
                        if (!(var3 != var2)) {
                            _fun86996_ip = 263;
                            continue _fun86996
                        }
                    case 87: // try_start_0
                        var3 = {};
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 7;
                        var2 = var6[var2];
                        var2 = var5.bind(var4)(var2);
                        var6 = var2.HTTP;
                        var5 = var6.post;
                        var2 = {};
                        var10 = _closure1_slot10;
                        var9 = var10.EMBEDDED_SURVEY_RESPONSE;
                        var7 = var9.bind(var10)(var7);
                        var2.url = var7;
                        var7 = {};
                        var9 = global;
                        var10 = var9.JSON;
                        var9 = var10.stringify;
                        var8 = var9.bind(var10)(var8);
                        var7.values_json = var8;
                        var2.body = var7;
                        var7 = true;
                        var2.rejectWithError = var7;
                        var2 = var5.bind(var6)(var2);
                        SaveGenerator(address = 188);
                    case 186:
                        return var2;
                    case 188:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                        if (var5) {
                            _fun86996_ip = 213;
                            continue _fun86996
                        }
                    case 194:
                        var5 = var2.body;
                        var5 = var5.responseId;
                        var3.responseId = var5;
                    case 210: // try_end0
                        return var3;
                    case 213:
                        return var2;
                    case 216: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var2 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var1 = 9;
                        var1 = var5[var1];
                        var2 = var2.bind(var4)(var1);
                        var1 = var2.captureException;
                        var1 = var1.bind(var2)(var3);
                        var1 = {};
                        var2 = 'null';
                        var1.responseId = var2;
                        return var1;
                    case 263:
                        var1 = {};
                        var2 = 'null';
                        var1.responseId = var2;
                        return var1;
                    case 277:
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
    var1 = function() { // Original name: fireSurveyAction, environment: var6
        var0 = undefined;
        var3 = _closure1_slot13;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var0 = function() { // Original name: _fireSurveyAction, environment: var6
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun87002: for (var _fun87002_ip = 0;;) switch (_fun87002_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg0;
                        var4 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun87002_ip = 309;
                            continue _fun87002
                        }
                    case 16:
                        var1 = undefined;
                        var6 = undefined;
                        var7 = undefined;
                        var8 = undefined;
                        var9 = _closure1_slot5;
                        var2 = var9.shouldAllowSurveyAction;
                        var2 = var2.bind(var9)();
                        var9 = !var2;
                        var2 = !var9;
                        if (var9) {
                            _fun87002_ip = 111;
                            continue _fun87002
                        }
                    case 52:
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var9 = 10;
                        var9 = var11[var9];
                        var9 = var10.bind(var1)(var9);
                        var9 = var9.SURVEY_ACTION_SAMPLE_PERCENTS;
                        var10 = var9[var5];
                        var9 = global;
                        var11 = var9.Math;
                        var9 = var11.random;
                        var11 = var9.bind(var11)();
                        var9 = 100;
                        var9 = var9 * var11;
                        var2 = var10 >= var9;
                    case 111:
                        if (!var2) {
                            _fun87002_ip = 306;
                            continue _fun87002
                        }
                    case 117:
                        var2 = {};
                        var2.action_type = var5;
                        var6 = var2;
                        var9 = null;
                        if (!(var9 != var4)) {
                            _fun87002_ip = 142;
                            continue _fun87002
                        }
                    case 133:
                        var2 = var6;
                        var2.metadata = var4;
                    case 142: // try_start_0
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 7;
                        var2 = var5[var2];
                        var2 = var4.bind(var1)(var2);
                        var5 = var2.HTTP;
                        var4 = var5.post;
                        var2 = {};
                        var10 = _closure1_slot10;
                        var10 = var10.EMBEDDED_SURVEY_ACTION;
                        var2.url = var10;
                        var2.body = var6;
                        var6 = true;
                        var2.rejectWithError = var6;
                        var2 = var4.bind(var5)(var2);
                        SaveGenerator(address = 208);
                    case 206:
                        return var2;
                    case 208:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun87002_ip = 301;
                            continue _fun87002
                        }
                    case 214:
                        var8 = var2;
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 8;
                        var3 = var5[var3];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.dispatch;
                        var3 = {
                            'type': 'SURVEY_FETCHED',
                            'survey': null,
                            'isActionTriggered': true
                        };
                        var10 = var9 == var2;
                        var6 = undefined;
                        if (var10) {
                            _fun87002_ip = 288;
                            continue _fun87002
                        }
                    case 265:
                        var8 = var8.body;
                        var7 = var8;
                        var8 = var9 == var8;
                        var6 = undefined;
                        if (var8) {
                            _fun87002_ip = 288;
                            continue _fun87002
                        }
                    case 282:
                        var6 = var7.survey;
                    case 288:
                        var3.survey = var6;
                        var3 = var4.bind(var5)(var3);
                    case 299: // try_end0
                        _fun87002_ip = 306;
                        continue _fun87002;
                    case 301:
                        return var2;
                    case 304: // catch_target0
                        CatchBlockStart(arg_register = 2);
                    case 306:
                        return var1;
                    case 309:
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
    var0 = global;
    var11 = var0.Object;
    var10 = var11.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var5);
    var0 = 0;
    var5 = var8[var0];
    var0 = undefined;
    var5 = var9.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var8[var5];
    var5 = var9.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var8[var5];
    var5 = var9.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var8[var5];
    var5 = var7.bind(var0)(var5);
    var5 = var5.useQualtricsResponseStore;
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var8[var5];
    var5 = var9.bind(var0)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var8[var5];
    var5 = var7.bind(var0)(var5);
    var9 = var5.QuestionSelectorEnum;
    var _closure1_slot8 = var9;
    var5 = var5.QuestionTypeEnum;
    var _closure1_slot9 = var5;
    var5 = 6;
    var5 = var8[var5];
    var5 = var7.bind(var0)(var5);
    var5 = var5.Endpoints;
    var _closure1_slot10 = var5;
    var5 = {};
    var5.fetchSurveyDetails = var4;
    var5.submitSurveyResponse = var3;
    var5.fireSurveyAction = var1;
    var6 = 11;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/qualtrics/QualtricsActionCreators.tsx';
    var6 = var7.bind(var8)(var6);
    var2.default = var5;
    var2.fetchSurveyDetails = var4;
    var2.submitSurveyResponse = var3;
    var2.fireSurveyAction = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 11184, 11186, 11187, 11188, 660, 507, 806, 1207, 11189, 2]);