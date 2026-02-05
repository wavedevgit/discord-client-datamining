// modules/application_commands/ApplicationCommandIndexActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun43182: for (var _fun43182_ip = 0;;) switch (_fun43182_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun43182_ip = 283;
                            continue _fun43182
                        }
                    case 15:
                        var _closure4_slot0 = var1;
                        var2 = arg1;
                        var _closure4_slot1 = var2;
                        var2 = undefined;
                        var _closure4_slot2 = var2;
                        var _closure4_slot3 = var2;
                        var _closure4_slot4 = var2;
                        var _closure4_slot5 = var2;
                        var _closure4_slot6 = var2;
                        var _closure4_slot7 = var2;
                        var _closure4_slot8 = var2;
                        var3 = global;
                        var5 = var3.performance;
                        var3 = var5.now;
                        var3 = var3.bind(var5)();
                        _closure4_slot3 = var3;
                        var3 = 0;
                        _closure4_slot4 = var3;
                        var3 = new Array(0);
                        _closure4_slot5 = var3;
                        var5 = var1.type;
                        var3 = 'channel';
                        if (!(var3 !== var5)) {
                            _fun43182_ip = 205;
                            continue _fun43182
                        }
                    case 104:
                        var3 = 'guild';
                        if (!(var3 !== var5)) {
                            _fun43182_ip = 176;
                            continue _fun43182
                        }
                    case 112:
                        var3 = 'user';
                        if (!(var3 !== var5)) {
                            _fun43182_ip = 157;
                            continue _fun43182
                        }
                    case 120:
                        var3 = 'application';
                        if (!(var3 === var5)) {
                            _fun43182_ip = 232;
                            continue _fun43182
                        }
                    case 128:
                        var6 = _closure1_slot5;
                        var5 = var6.APPLICATION_COMMAND_INDEX_APPLICATION;
                        var3 = var1.applicationId;
                        var3 = var5.bind(var6)(var3);
                        _closure4_slot2 = var3;
                        _fun43182_ip = 232;
                        continue _fun43182;
                    case 157:
                        var3 = _closure1_slot5;
                        var3 = var3.APPLICATION_COMMAND_INDEX_USER;
                        _closure4_slot2 = var3;
                        _fun43182_ip = 232;
                        continue _fun43182;
                    case 176:
                        var6 = _closure1_slot5;
                        var5 = var6.APPLICATION_COMMAND_INDEX_GUILD;
                        var3 = var1.guildId;
                        var3 = var5.bind(var6)(var3);
                        _closure4_slot2 = var3;
                        _fun43182_ip = 232;
                        continue _fun43182;
                    case 205:
                        var5 = _closure1_slot5;
                        var3 = var5.APPLICATION_COMMAND_INDEX_CHANNEL;
                        var1 = var1.channelId;
                        var1 = var3.bind(var5)(var1);
                        _closure4_slot2 = var1;
                    case 232:
                        var1 = function() { // Environment: var4
                            var3 = _closure1_slot3;
                            var2 = undefined;
                            var1 = function*(arg0) { // Environment: var0
                                var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                    _fun43185: for (var _fun43185_ip = 0;;) switch (_fun43185_ip) {
                                        case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                                            if (var2) {
                                                _fun43185_ip = 187;
                                                continue _fun43185
                                            }
                                        case 12:
                                            var2 = arg0;
                                            var _closure7_slot0 = var2;
                                            var3 = _closure4_slot4;
                                            var2 = 3;
                                            if (!(!(var3 >= var2))) {
                                                _fun43185_ip = 91;
                                                continue _fun43185
                                            }
                                        case 33:
                                            var2 = global;
                                            var3 = var2.Promise;
                                            var2 = var3.prototype;
                                            var2 = Object.create(var2, {
                                                constructor: {
                                                    value: var3
                                                }
                                            });
                                            var7 = function(arg0) { // Environment: var1
                                                var0 = global;
                                                var3 = var0.setTimeout;
                                                var2 = _closure7_slot0;
                                                var1 = undefined;
                                                var0 = arg0;
                                                var0 = var3.bind(var1)(var0, var2);
                                                return var0;
                                            };
                                            var8 = var2;
                                            var1 = new var8[var3](var7, var6);
                                            var2 = var1 instanceof Object ? var1 : var2;
                                            SaveGenerator(address = 70);
                                        case 68:
                                            return var2;
                                        case 70:
                                            ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 1);
                                            if (var1) {
                                                _fun43185_ip = 88;
                                                continue _fun43185
                                            }
                                        case 76:
                                            var3 = _closure4_slot7;
                                            var1 = undefined;
                                            var1 = var3.bind(var1)();
                                            _fun43185_ip = 184;
                                            continue _fun43185;
                                        case 88:
                                            return var2;
                                        case 91:
                                            var4 = _closure4_slot5;
                                            var3 = var4.push;
                                            var2 = 1002;
                                            var2 = var3.bind(var4)(var2);
                                            var3 = _closure4_slot8;
                                            var2 = {};
                                            var4 = true;
                                            var2.error = var4;
                                            var4 = undefined;
                                            var2 = var3.bind(var4)(var2);
                                            var3 = _closure1_slot1;
                                            var6 = _closure1_slot2;
                                            var2 = 2;
                                            var2 = var6[var2];
                                            var4 = var3.bind(var4)(var2);
                                            var3 = var4.dispatch;
                                            var2 = {};
                                            var6 = 'APPLICATION_COMMAND_INDEX_FETCH_FAILURE';
                                            var2.type = var6;
                                            var5 = _closure4_slot0;
                                            var2.target = var5;
                                            var1 = var3.bind(var4)(var2);
                                        case 184:
                                            return var1;
                                        case 187:
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            var1 = var3.bind(var2)(var1);
                            var _closure5_slot0 = var1;
                            var0 = function() { // Environment: var0
                                var0 = undefined;
                                var3 = _closure5_slot0;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            return var0;
                        };
                        var1 = var1.bind(var2)();
                        _closure4_slot6 = var1;
                        var1 = function() {
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var6 = 3;
                            var2 = var1[var6];
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            var3 = var1.HTTP;
                            var2 = var3.get;
                            var1 = {};
                            var5 = _closure4_slot2;
                            var1.url = var5;
                            var5 = _closure4_slot4;
                            var6 = var6 - var5;
                            var5 = 1;
                            var5 = var6 - var5;
                            var1.retries = var5;
                            var4 = _closure4_slot1;
                            var4 = var4.signal;
                            var1.signal = var4;
                            var4 = function() {
                                var0 = _closure4_slot4;
                                var0 = parseFloat(var0);
                                var1 = var0 + 1;
                                _closure4_slot4 = var1;
                                return var0;
                            };
                            var1.onRequestCreated = var4;
                            var4 = false;
                            var1.rejectWithError = var4;
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.then;
                            var1 = function(arg0) { // Environment: var0
                                _fun43190: for (var _fun43190_ip = 0;;) switch (_fun43190_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var0 = var3.status;
                                        var4 = 202;
                                        if (!(var4 !== var0)) {
                                            _fun43190_ip = 102;
                                            continue _fun43190
                                        }
                                    case 15:
                                        var1 = _closure4_slot8;
                                        var0 = {};
                                        var2 = false;
                                        var0.error = var2;
                                        var2 = undefined;
                                        var0 = var1.bind(var2)(var0);
                                        var1 = _closure1_slot1;
                                        var6 = _closure1_slot2;
                                        var0 = 2;
                                        var0 = var6[var0];
                                        var2 = var1.bind(var2)(var0);
                                        var1 = var2.dispatch;
                                        var0 = {};
                                        var6 = 'APPLICATION_COMMAND_INDEX_FETCH_SUCCESS';
                                        var0.type = var6;
                                        var5 = _closure4_slot0;
                                        var0.target = var5;
                                        var3 = var3.body;
                                        var0.index = var3;
                                        var0 = var1.bind(var2)(var0);
                                        _fun43190_ip = 136;
                                        continue _fun43190;
                                    case 102:
                                        var3 = _closure4_slot5;
                                        var2 = var3.push;
                                        var2 = var2.bind(var3)(var4);
                                        var3 = _closure4_slot6;
                                        var2 = undefined;
                                        var1 = 5000;
                                        var0 = var3.bind(var2)(var1);
                                    case 136:
                                        return var0;
                                }
                            };
                            var0 = function(arg0) { // Environment: var0
                                _fun43191: for (var _fun43191_ip = 0;;) switch (_fun43191_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var0 = _closure4_slot1;
                                        var0 = var0.signal;
                                        var0 = var0.aborted;
                                        if (var0) {
                                            _fun43191_ip = 232;
                                            continue _fun43191
                                        }
                                    case 28:
                                        var0 = var2.status;
                                        var5 = 429;
                                        if (!(var5 !== var0)) {
                                            _fun43191_ip = 155;
                                            continue _fun43191
                                        }
                                    case 43:
                                        var4 = _closure4_slot5;
                                        var3 = var4.push;
                                        var6 = var2.status;
                                        var0 = null;
                                        var7 = var0 != var6;
                                        var0 = 1000;
                                        if (!var7) {
                                            _fun43191_ip = 75;
                                            continue _fun43191
                                        }
                                    case 72:
                                        var0 = var6;
                                    case 75:
                                        var0 = var3.bind(var4)(var0);
                                        var3 = _closure4_slot8;
                                        var0 = {};
                                        var4 = true;
                                        var0.error = var4;
                                        var4 = undefined;
                                        var0 = var3.bind(var4)(var0);
                                        var3 = _closure1_slot1;
                                        var6 = _closure1_slot2;
                                        var0 = 2;
                                        var0 = var6[var0];
                                        var4 = var3.bind(var4)(var0);
                                        var3 = var4.dispatch;
                                        var0 = {};
                                        var6 = 'APPLICATION_COMMAND_INDEX_FETCH_FAILURE';
                                        var0.type = var6;
                                        var6 = _closure4_slot0;
                                        var0.target = var6;
                                        var0 = var3.bind(var4)(var0);
                                        _fun43191_ip = 230;
                                        continue _fun43191;
                                    case 155:
                                        var4 = _closure4_slot5;
                                        var3 = var4.push;
                                        var3 = var3.bind(var4)(var5);
                                        var4 = _closure4_slot6;
                                        var2 = var2.body;
                                        var5 = var2.retry_after;
                                        var6 = _closure1_slot1;
                                        var3 = _closure1_slot2;
                                        var2 = 4;
                                        var2 = var3[var2];
                                        var3 = undefined;
                                        var2 = var6.bind(var3)(var2);
                                        var2 = var2.Millis;
                                        var2 = var2.SECOND;
                                        var2 = var5 * var2;
                                        var0 = var4.bind(var3)(var2);
                                    case 230:
                                        _fun43191_ip = 273;
                                        continue _fun43191;
                                    case 232:
                                        var4 = _closure4_slot5;
                                        var3 = var4.push;
                                        var2 = 1001;
                                        var2 = var3.bind(var4)(var2);
                                        var3 = _closure4_slot8;
                                        var2 = {};
                                        var1 = true;
                                        var2.error = var1;
                                        var1 = undefined;
                                        var1 = var3.bind(var1)(var2);
                                        var0 = undefined;
                                    case 273:
                                        return var0;
                                }
                            };
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                        _closure4_slot7 = var1;
                        var3 = function arg0() {
                            var0 = arg0;
                            var8 = var0.error;
                            var7 = global;
                            var1 = var7.performance;
                            var0 = var1.now;
                            var1 = var0.bind(var1)();
                            var0 = _closure4_slot3;
                            var9 = var1 - var0;
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 5;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.track;
                            var1 = _closure1_slot4;
                            var2 = var1.APPLICATION_COMMAND_PERFORMANCE;
                            var1 = {};
                            var1.duration_ms = var9;
                            var1.error = var8;
                            var8 = _closure4_slot1;
                            var8 = var8.signal;
                            var8 = var8.aborted;
                            var1.aborted = var8;
                            var8 = true;
                            var1.include_applications = var8;
                            var10 = var7.Math;
                            var9 = var10.max;
                            var8 = _closure4_slot4;
                            var7 = 1;
                            var8 = var8 - var7;
                            var7 = 0;
                            var7 = var9.bind(var10)(var8, var7);
                            var1.retries = var7;
                            var7 = null;
                            var1.kind = var7;
                            var1.command_type = var7;
                            var7 = _closure4_slot2;
                            var1.url = var7;
                            var7 = _closure4_slot0;
                            var8 = var7.type;
                            var1.target_type = var8;
                            var6 = _closure1_slot7;
                            var6 = var6.bind(var0)(var7);
                            var1.target_id = var6;
                            var5 = _closure4_slot5;
                            var1.failure_statuses = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                        };
                        _closure4_slot8 = var3;
                        var1 = var1.bind(var2)();
                        SaveGenerator(address = 271);
                    case 269:
                        return var1;
                    case 271:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun43182_ip = 280;
                            continue _fun43182
                        }
                    case 277:
                        return var2;
                    case 280:
                        return var1;
                    case 283:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot6 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot6 = var0;
    var0 = function arg0() {
        _fun43193: for (var _fun43193_ip = 0;;) switch (_fun43193_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.type;
                var1 = 'channel';
                if (!(var1 !== var2)) {
                    _fun43193_ip = 96;
                    continue _fun43193
                }
            case 16:
                var1 = 'guild';
                if (!(var1 !== var2)) {
                    _fun43193_ip = 89;
                    continue _fun43193
                }
            case 24:
                var1 = 'user';
                if (!(var1 !== var2)) {
                    _fun43193_ip = 85;
                    continue _fun43193
                }
            case 32:
                var1 = 'application';
                if (!(var1 !== var2)) {
                    _fun43193_ip = 78;
                    continue _fun43193
                }
            case 40:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.assertNever;
                var2 = var2.bind(var3)(var0);
                return var1;
            case 78:
                var1 = var0.applicationId;
                return var1;
            case 85:
                var1 = null;
                return var1;
            case 89:
                var1 = var0.guildId;
                return var1;
            case 96:
                var0 = var0.channelId;
                return var0;
        }
    };
    var _closure1_slot7 = var0;
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
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot4 = var6;
    var3 = var3.Endpoints;
    var _closure1_slot5 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/application_commands/ApplicationCommandIndexActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchApplicationCommandIndex = var3;
    var1 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'APPLICATION_COMMAND_INDEX_FETCH_REQUEST';
        var1.type = var4;
        var4 = arg0;
        var1.target = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.requestApplicationCommandIndex = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 806, 507, 667, 795, 1304, 2]);