// modules/polls/PollsHttpApi.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot2;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun76072: for (var _fun76072_ip = 0;;) switch (_fun76072_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun76072_ip = 199;
                            continue _fun76072
                        }
                    case 13:
                        var8 = var1.channelId;
                        var6 = var1.messageId;
                        var7 = var1.answerIds;
                        var5 = undefined;
                        SaveGenerator(address = 35);
                    case 33:
                        return var5;
                    case 35:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun76072_ip = 196;
                            continue _fun76072
                        }
                    case 44: // try_start_0
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var2 = 2;
                        var2 = var4[var2];
                        var2 = var3.bind(var5)(var2);
                        var4 = var2.HTTP;
                        var3 = var4.put;
                        var2 = {};
                        var10 = _closure1_slot3;
                        var9 = var10.POLL_ANSWERS;
                        var6 = var9.bind(var10)(var8, var6);
                        var2.url = var6;
                        var6 = {};
                        var6.answer_ids = var7;
                        var2.body = var6;
                        var6 = false;
                        var2.rejectWithError = var6;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address = 128);
                    case 126:
                        return var2;
                    case 128:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun76072_ip = 137;
                            continue _fun76072
                        }
                    case 134: // try_end0
                        return var5;
                    case 137:
                        return var2;
                    case 140: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var2 = 3;
                        var2 = var6[var2];
                        var2 = var3.bind(var5)(var2);
                        var2 = var2.APIError;
                        var3 = var2.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var2
                            }
                        });
                        var13 = var3;
                        var12 = var4;
                        var2 = new var13[var2](var12, var11);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
                    case 196:
                        return var1;
                    case 199:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot4 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot4 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot2;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun76075: for (var _fun76075_ip = 0;;) switch (_fun76075_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun76075_ip = 180;
                            continue _fun76075
                        }
                    case 13:
                        var7 = var1.channelId;
                        var6 = var1.messageId;
                        var5 = undefined;
                        SaveGenerator(address = 29);
                    case 27:
                        return var5;
                    case 29:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun76075_ip = 177;
                            continue _fun76075
                        }
                    case 38: // try_start_0
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var2 = 2;
                        var2 = var4[var2];
                        var2 = var3.bind(var5)(var2);
                        var4 = var2.HTTP;
                        var3 = var4.post;
                        var2 = {};
                        var9 = _closure1_slot3;
                        var8 = var9.POLL_EXPIRE;
                        var6 = var8.bind(var9)(var7, var6);
                        var2.url = var6;
                        var6 = false;
                        var2.rejectWithError = var6;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address = 109);
                    case 107:
                        return var2;
                    case 109:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun76075_ip = 118;
                            continue _fun76075
                        }
                    case 115: // try_end0
                        return var5;
                    case 118:
                        return var2;
                    case 121: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var2 = 3;
                        var2 = var6[var2];
                        var2 = var3.bind(var5)(var2);
                        var2 = var2.APIError;
                        var3 = var2.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var2
                            }
                        });
                        var12 = var3;
                        var11 = var4;
                        var2 = new var12[var2](var11, var10);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
                    case 177:
                        return var1;
                    case 180:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot5 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot5 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg2;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/polls/PollsHttpApi.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.submitPollVote = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.endPollEarly = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 507, 3309, 2]);