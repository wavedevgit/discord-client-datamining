// actions/SurveyActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var3 = 0;
    var6 = var5[var3];
    var0 = undefined;
    var6 = var7.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SURVEY_REFETCH_INTERVAL;
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot5 = var6;
    var6 = var3.NoticeTypes;
    var _closure1_slot6 = var6;
    var3 = var3.Endpoints;
    var _closure1_slot7 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'actions/SurveyActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: overrideSurvey, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'SURVEY_OVERRIDE';
        var1.type = var4;
        var4 = arg0;
        var1.id = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.overrideSurvey = var3;
    var3 = function(arg0, arg1) { // Original name: surveyHide, environment: var1
        _fun86740: for (var _fun86740_ip = 0;;) switch (_fun86740_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 2;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var4 = 'SURVEY_HIDE';
                var1.type = var4;
                var1.key = var6;
                var1 = var2.bind(var3)(var1);
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 3;
                var1 = var3[var1];
                var4 = var2.bind(var0)(var1);
                var3 = var4.track;
                var1 = _closure1_slot5;
                if (var5) {
                    _fun86740_ip = 120;
                    continue _fun86740
                }
            case 89:
                var8 = var1.APP_NOTICE_PRIMARY_CTA_OPENED;
                var2 = {};
                var9 = _closure1_slot6;
                var9 = var9.SURVEY;
                var2.notice_type = var9;
                var2 = var3.bind(var4)(var8, var2);
                _fun86740_ip = 161;
                continue _fun86740;
            case 120:
                var2 = var1.APP_NOTICE_CLOSED;
                var1 = {};
                var7 = _closure1_slot6;
                var7 = var7.SURVEY;
                var1.notice_type = var7;
                var1.survey_id = var6;
                var1.dismissed = var5;
                var1 = var3.bind(var4)(var2, var1);
            case 161:
                return var0;
        }
    };
    var2.surveyHide = var3;
    var3 = function(arg0, arg1) { // Original name: surveyFetch, environment: var1
        _fun86741: for (var _fun86741_ip = 0;;) switch (_fun86741_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                var4 = {};
                var2 = null;
                if (!(var2 != var3)) {
                    _fun86741_ip = 24;
                    continue _fun86741
                }
            case 16:
                var4.survey_override = var3;
            case 24:
                if (!(var2 != var1)) {
                    _fun86741_ip = 36;
                    continue _fun86741
                }
            case 28:
                var4.disable_auto_seen = var1;
            case 36:
                var2 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 4;
                var1 = var8[var1];
                var7 = undefined;
                var3 = var2.bind(var7)(var1);
                var2 = var3.get;
                var1 = {};
                var6 = _closure1_slot7;
                var6 = var6.USER_SURVEY;
                var1.url = var6;
                var1.query = var4;
                var4 = {};
                var6 = _closure1_slot0;
                var5 = 5;
                var5 = var8[var5];
                var5 = var6.bind(var7)(var5);
                var5 = var5.NetworkActionNames;
                var5 = var5.USER_SURVEY_FETCH;
                var4.event = var5;
                var5 = function(arg0) { // Original name: properties, environment: var0
                    _fun86742: for (var _fun86742_ip = 0;;) switch (_fun86742_ip) {
                        case 0:
                            var0 = arg0;
                            var5 = null;
                            var1 = var5 == var0;
                            var3 = undefined;
                            var4 = undefined;
                            if (var1) {
                                _fun86742_ip = 36;
                                continue _fun86742
                            }
                        case 16:
                            var0 = var0.body;
                            var1 = var5 == var0;
                            var4 = undefined;
                            if (var1) {
                                _fun86742_ip = 36;
                                continue _fun86742
                            }
                        case 30:
                            var4 = var0.survey;
                        case 36:
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 6;
                            var0 = var2[var0];
                            var2 = var1.bind(var3)(var0);
                            var1 = var2.exact;
                            var0 = {};
                            var5 = var5 == var4;
                            var3 = undefined;
                            if (var5) {
                                _fun86742_ip = 81;
                                continue _fun86742
                            }
                        case 76:
                            var3 = var4.key;
                        case 81:
                            var0.key = var3;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var4.properties = var5;
                var1.trackedActionData = var4;
                var4 = false;
                var1.rejectWithError = var4;
                var3 = var2.bind(var3)(var1);
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var0
                    _fun86743: for (var _fun86743_ip = 0;;) switch (_fun86743_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var0 = 2;
                            var0 = var3[var0];
                            var3 = undefined;
                            var5 = var2.bind(var3)(var0);
                            var4 = var5.dispatch;
                            var0 = {};
                            var2 = 'SURVEY_FETCHED';
                            var0.type = var2;
                            var2 = null;
                            var7 = var2 == var1;
                            var6 = undefined;
                            if (var7) {
                                _fun86743_ip = 76;
                                continue _fun86743
                            }
                        case 56:
                            var7 = var1.body;
                            var8 = var2 == var7;
                            var6 = undefined;
                            if (var8) {
                                _fun86743_ip = 76;
                                continue _fun86743
                            }
                        case 70:
                            var6 = var7.survey;
                        case 76:
                            var0.survey = var6;
                            var0 = var4.bind(var5)(var0);
                            var4 = var2 == var1;
                            var0 = undefined;
                            if (var4) {
                                _fun86743_ip = 115;
                                continue _fun86743
                            }
                        case 95:
                            var1 = var1.body;
                            var2 = var2 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun86743_ip = 115;
                                continue _fun86743
                            }
                        case 109:
                            var0 = var1.survey;
                        case 115:
                            return var0;
                    }
                };
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 2;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {
                        'type': 'SURVEY_FETCHED',
                        'survey': null
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.surveyFetch = var3;
    var1 = function(arg0) { // Original name: surveySeen, environment: var1
        _fun86745: for (var _fun86745_ip = 0;;) switch (_fun86745_ip) {
            case 0:
                var9 = arg0;
                var _closure2_slot0 = var9;
                var1 = _closure1_slot3;
                var0 = var1.getLastSeenTimestamp;
                var1 = var0.bind(var1)();
                var0 = null;
                if (!(var0 !== var1)) {
                    _fun86745_ip = 71;
                    continue _fun86745
                }
            case 34:
                if (!(var0 != var1)) {
                    _fun86745_ip = 67;
                    continue _fun86745
                }
            case 38:
                var0 = global;
                var2 = var0.Date;
                var0 = var2.now;
                var0 = var0.bind(var2)();
                var1 = var0 - var1;
                var0 = _closure1_slot4;
                if (!(!(var1 >= var0))) {
                    _fun86745_ip = 71;
                    continue _fun86745
                }
            case 67:
                var0 = undefined;
                return var0;
            case 71:
                var1 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 2;
                var0 = var8[var0];
                var7 = undefined;
                var3 = var1.bind(var7)(var0);
                var2 = var3.dispatch;
                var0 = {};
                var6 = 'SURVEY_SEEN';
                var0.type = var6;
                var0.key = var9;
                var0 = var2.bind(var3)(var0);
                var0 = 4;
                var0 = var8[var0];
                var2 = var1.bind(var7)(var0);
                var1 = var2.post;
                var0 = {};
                var6 = _closure1_slot7;
                var3 = var6.USER_SURVEY_SEEN;
                var3 = var3.bind(var6)(var9);
                var0.url = var3;
                var3 = {};
                var6 = _closure1_slot0;
                var5 = 5;
                var5 = var8[var5];
                var5 = var6.bind(var7)(var5);
                var5 = var5.NetworkActionNames;
                var5 = var5.USER_SURVEY_SEEN;
                var3.event = var5;
                var4 = function() { // Original name: properties, environment: var4
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 6;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.exact;
                    var0 = {};
                    var3 = _closure2_slot0;
                    var0.key = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3.properties = var4;
                var0.trackedActionData = var3;
                var3 = false;
                var0.rejectWithError = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.surveySeen = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [11177, 660, 806, 795, 4489, 481, 1385, 2]);