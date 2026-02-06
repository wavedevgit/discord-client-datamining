// modules/interactions/InteractionActionCreators.tsx
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
                _fun56263: for (var _fun56263_ip = 0;;) switch (_fun56263_ip) {
                    case 0:
                        StartGenerator();
                        var7 = arg0;
                        var6 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun56263_ip = 178;
                            continue _fun56263
                        }
                    case 16:
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 3;
                        var1 = var4[var1];
                        var5 = undefined;
                        var1 = var2.bind(var5)(var1);
                        var4 = var1.HTTP;
                        var2 = var4.get;
                        var1 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': false
                        };
                        var9 = _closure1_slot4;
                        var8 = var9.MESSAGE_INTERACTION_DATA;
                        var8 = var8.bind(var9)(var7, var6);
                        var1.url = var8;
                        var1 = var2.bind(var4)(var1);
                        SaveGenerator(address = 92);
                    case 90:
                        return var1;
                    case 92:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun56263_ip = 175;
                            continue _fun56263
                        }
                    case 98:
                        var2 = var1.ok;
                        if (var2) {
                            _fun56263_ip = 112;
                            continue _fun56263
                        }
                    case 107:
                        var2 = null;
                        return var2;
                    case 112:
                        var2 = var1.body;
                        var4 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var3 = 2;
                        var3 = var8[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var8 = 'LOAD_MESSAGE_INTERACTION_DATA_SUCCESS';
                        var3.type = var8;
                        var3.channelId = var7;
                        var3.messageId = var6;
                        var3.interactionData = var2;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 175:
                        return var1;
                    case 178:
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
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/interactions/InteractionActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1, arg2, arg3() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'QUEUE_INTERACTION_COMPONENT_STATE';
        var1.type = var4;
        var4 = arg0;
        var1.messageId = var4;
        var4 = arg1;
        var1.nonce = var4;
        var4 = arg2;
        var1.state = var4;
        var4 = arg3;
        var1.componentId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.queueInteractionComponentState = var3;
    var3 = function arg0, arg1() {
        var0 = arg1;
        var9 = var0.data;
        var8 = var0.messageId;
        var7 = var0.preflight;
        var6 = var0.onCreate;
        var5 = var0.onSuccess;
        var4 = var0.onFailure;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var10 = 'INTERACTION_QUEUE';
        var1.type = var10;
        var1.data = var9;
        var9 = arg0;
        var1.nonce = var9;
        var1.messageId = var8;
        var1.preflight = var7;
        var1.onCreate = var6;
        var1.onSuccess = var5;
        var1.onFailure = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.addQueued = var3;
    var3 = function arg0, arg1, arg2, arg3() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'INTERACTION_FAILURE';
        var1.type = var4;
        var4 = arg0;
        var1.nonce = var4;
        var4 = arg2;
        var1.errorMessage = var4;
        var4 = arg1;
        var1.errorCode = var4;
        var4 = arg3;
        var1.status = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setFailed = var3;
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
    var2.fetchMessageInteractionData = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 806, 507, 2]);