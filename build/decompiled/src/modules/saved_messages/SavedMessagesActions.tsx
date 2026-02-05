// modules/saved_messages/SavedMessagesActions.tsx
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
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun76112: for (var _fun76112_ip = 0;;) switch (_fun76112_ip) {
                    case 0:
                        StartGenerator();
                        var7 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun76112_ip = 173;
                            continue _fun76112
                        }
                    case 13:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 3;
                        var1 = var4[var1];
                        var4 = undefined;
                        var1 = var3.bind(var4)(var1);
                        var5 = var1.HTTP;
                        var3 = var5.put;
                        var1 = {};
                        var10 = _closure1_slot5;
                        var9 = var10.PUT_SAVED_MESSAGE;
                        var8 = var7.channelId;
                        var6 = var7.messageId;
                        var6 = var9.bind(var10)(var8, var6);
                        var1.url = var6;
                        var6 = {};
                        var7 = var7.dueAt;
                        var6.due_at = var7;
                        var1.body = var6;
                        var6 = false;
                        var1.rejectWithError = var6;
                        var1 = var3.bind(var5)(var1);
                        SaveGenerator(address = 113);
                    case 111:
                        return var1;
                    case 113:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun76112_ip = 170;
                            continue _fun76112
                        }
                    case 119:
                        var3 = var1.ok;
                        if (var3) {
                            _fun76112_ip = 131;
                            continue _fun76112
                        }
                    case 128:
                        return var4;
                    case 131:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 4;
                        var2 = var5[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.savedMessageCreateObjectToClient;
                        var2 = var1.body;
                        var2 = var3.bind(var4)(var2);
                        return var2;
                    case 170:
                        return var1;
                    case 173:
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
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun76115: for (var _fun76115_ip = 0;;) switch (_fun76115_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun76115_ip = 119;
                            continue _fun76115
                        }
                    case 10:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 3;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var3.bind(var2)(var1);
                        var4 = var1.HTTP;
                        var3 = var4.del;
                        var1 = {};
                        var8 = _closure1_slot5;
                        var7 = var8.DELETE_SAVED_MESSAGE;
                        var6 = var5.channelId;
                        var5 = var5.messageId;
                        var5 = var7.bind(var8)(var6, var5);
                        var1.url = var5;
                        var5 = false;
                        var1.rejectWithError = var5;
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 93);
                    case 91:
                        return var1;
                    case 93:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun76115_ip = 116;
                            continue _fun76115
                        }
                    case 99:
                        var3 = var1.ok;
                        if (var3) {
                            _fun76115_ip = 111;
                            continue _fun76115
                        }
                    case 108:
                        return var2;
                    case 111:
                        var2 = true;
                        return var2;
                    case 116:
                        return var1;
                    case 119:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot7 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot7 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun76118: for (var _fun76118_ip = 0;;) switch (_fun76118_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun76118_ip = 201;
                            continue _fun76118
                        }
                    case 10:
                        var2 = _closure1_slot4;
                        var1 = var2.getIsStale;
                        var1 = var1.bind(var2)();
                        if (var1) {
                            _fun76118_ip = 51;
                            continue _fun76118
                        }
                    case 30:
                        var1 = global;
                        var2 = var1.Promise;
                        var1 = var2.resolve;
                        var1 = var1.bind(var2)();
                        return var1;
                    case 51:
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 3;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var4.bind(var2)(var1);
                        var5 = var1.HTTP;
                        var4 = var5.get;
                        var1 = {};
                        var6 = _closure1_slot5;
                        var6 = var6.GET_SAVED_MESSAGES;
                        var1.url = var6;
                        var6 = false;
                        var1.rejectWithError = var6;
                        var1 = var4.bind(var5)(var1);
                        SaveGenerator(address = 114);
                    case 112:
                        return var1;
                    case 114:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun76118_ip = 198;
                            continue _fun76118
                        }
                    case 120:
                        var4 = var1.body;
                        var6 = var4.results;
                        var5 = var6.map;
                        var4 = function(arg0) { // Environment: var4
                            _fun76119: for (var _fun76119_ip = 0;;) switch (_fun76119_ip) {
                                case 0:
                                    var1 = arg0;
                                    var0 = {};
                                    var3 = var1.message;
                                    var2 = null;
                                    var3 = var2 != var3;
                                    if (!var3) {
                                        _fun76119_ip = 60;
                                        continue _fun76119
                                    }
                                case 19:
                                    var5 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var3 = 5;
                                    var4 = var4[var3];
                                    var3 = undefined;
                                    var5 = var5.bind(var3)(var4);
                                    var4 = var5.createMessageRecord;
                                    var3 = var1.message;
                                    var2 = var4.bind(var5)(var3);
                                case 60:
                                    var0.message = var2;
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var2 = 4;
                                    var3 = var3[var2];
                                    var2 = undefined;
                                    var3 = var4.bind(var2)(var3);
                                    var2 = var3.savedMessageDataToClient;
                                    var1 = var1.save_data;
                                    var1 = var2.bind(var3)(var1);
                                    var0.saveData = var1;
                                    return var0;
                            }
                        };
                        var6 = var5.bind(var6)(var4);
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 6;
                        var3 = var5[var3];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var7 = 'SAVED_MESSAGES_UPDATE';
                        var3.type = var7;
                        var3.savedMessages = var6;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 198:
                        return var1;
                    case 201:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot8 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot8 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot5 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/saved_messages/SavedMessagesActions.tsx';
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
    var2.upsertSavedMessage = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.deleteSavedMessage = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot8;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchAndUpdateSavedMessages = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 9660, 660, 507, 9661, 3971, 806, 2]);