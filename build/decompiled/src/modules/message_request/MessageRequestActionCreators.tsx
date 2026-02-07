// modules/message_request/MessageRequestActionCreators.tsx
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
                _fun73044: for (var _fun73044_ip = 0;;) switch (_fun73044_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun73044_ip = 176;
                            continue _fun73044
                        }
                    case 13:
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var1 = 2;
                        var1 = var10[var1];
                        var2 = undefined;
                        var1 = var9.bind(var2)(var1);
                        var5 = var1.HTTP;
                        var4 = var5.put;
                        var1 = {};
                        var8 = _closure1_slot4;
                        var7 = var8.CHANNEL_RECIPIENT_ME;
                        var7 = var7.bind(var8)(var6);
                        var1.url = var7;
                        var7 = {};
                        var8 = 3;
                        var8 = var10[var8];
                        var8 = var9.bind(var2)(var8);
                        var8 = var8.MessageRequestConsentStatusTypes;
                        var8 = var8.ACCEPTED;
                        var7.consent_status = var8;
                        var1.body = var7;
                        var7 = false;
                        var1.rejectWithError = var7;
                        var1 = var4.bind(var5)(var1);
                        SaveGenerator(address = 120);
                    case 118:
                        return var1;
                    case 120:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun73044_ip = 173;
                            continue _fun73044
                        }
                    case 126:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 4;
                        var3 = var5[var3];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var7 = 'MESSAGE_REQUEST_ACCEPT_OPTIMISTIC';
                        var3.type = var7;
                        var3.channelId = var6;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 173:
                        return var1;
                    case 176:
                        return var0;
                }
            };
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
    var3 = var3.Endpoints;
    var _closure1_slot4 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/message_request/MessageRequestActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.acceptMessageRequest = var3;
    var3 = function arg0() {
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var0 = 2;
        var0 = var7[var0];
        var5 = undefined;
        var0 = var6.bind(var5)(var0);
        var2 = var0.HTTP;
        var1 = var2.put;
        var0 = {};
        var8 = _closure1_slot4;
        var4 = var8.CHANNEL_RECIPIENT_ME;
        var3 = arg0;
        var3 = var4.bind(var8)(var3);
        var0.url = var3;
        var3 = {};
        var4 = 3;
        var4 = var7[var4];
        var4 = var6.bind(var5)(var4);
        var4 = var4.MessageRequestConsentStatusTypes;
        var4 = var4.UNSPECIFIED;
        var3.consent_status = var4;
        var0.body = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.clearMessageRequestState = var3;
    var3 = function arg0() {
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var0 = 2;
        var0 = var7[var0];
        var5 = undefined;
        var0 = var6.bind(var5)(var0);
        var2 = var0.HTTP;
        var1 = var2.put;
        var0 = {};
        var8 = _closure1_slot4;
        var4 = var8.CHANNEL_RECIPIENT_ME;
        var3 = arg0;
        var3 = var4.bind(var8)(var3);
        var0.url = var3;
        var3 = {};
        var4 = 3;
        var4 = var7[var4];
        var4 = var6.bind(var5)(var4);
        var4 = var4.MessageRequestConsentStatusTypes;
        var4 = var4.PENDING;
        var3.consent_status = var4;
        var0.body = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.markAsMessageRequest = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.del;
        var0 = {};
        var5 = _closure1_slot4;
        var4 = var5.CHANNEL_RECIPIENT_ME;
        var3 = arg0;
        var3 = var4.bind(var5)(var3);
        var0.url = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.rejectMessageRequest = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.put;
        var0 = {};
        var4 = _closure1_slot4;
        var3 = var4.CHANNEL_RECIPIENT_REJECT_BATCH;
        var3 = var3.bind(var4)();
        var0.url = var3;
        var3 = {};
        var4 = arg0;
        var3.channel_ids = var4;
        var0.body = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.rejectMessageRequestBatch = var3;
    var1 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.getLocationMetadata;
        var1 = var1.bind(var2)();
        return var0;
    };
    var2.fetchUserCountryCode = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 507, 9134, 806, 4557, 2]);