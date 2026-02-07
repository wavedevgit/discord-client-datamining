// modules/rpc/native/server/NativeRPCHelpers.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.TransportTypes;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.RPCCloseCodes;
    var _closure1_slot5 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0, arg1, arg2) { // Environment: var0
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun64389: for (var _fun64389_ip = 0;;) switch (_fun64389_ip) {
                    case 0:
                        StartGenerator();
                        var8 = arg0;
                        var7 = arg1;
                        var5 = arg2;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun64389_ip = 258;
                            continue _fun64389
                        }
                    case 19:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var9 = 3;
                        var2 = var2[var9];
                        var6 = undefined;
                        var3 = var3.bind(var6)(var2);
                        var2 = var3.validateOriginAndUpdateSocket;
                        var2 = var2.bind(var3)(var8, var7);
                        var2 = null;
                        if (!(var2 != var5)) {
                            _fun64389_ip = 170;
                            continue _fun64389
                        }
                    case 62:
                        var11 = var8.transport;
                        var2 = _closure1_slot4;
                        var2 = var2.POST_MESSAGE;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var3 = var3[var9];
                        var10 = var4.bind(var6)(var3);
                        var4 = var10.processSocketThrottlers;
                        var3 = var8.abortController;
                        var3 = var3.signal;
                        var2 = var11 !== var2;
                        var2 = var4.bind(var10)(var5, var2, var3);
                        SaveGenerator(address = 128);
                    case 126:
                        return var2;
                    case 128:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun64389_ip = 167;
                            continue _fun64389
                        }
                    case 134:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var3 = var3[var9];
                        var4 = var4.bind(var6)(var3);
                        var3 = var4.validateSocketApplication;
                        var3 = var3.bind(var4)(var8, var5, var7);
                        return var3;
                    case 167:
                        return var2;
                    case 170:
                        var2 = global;
                        var3 = var2.Promise;
                        var2 = var3.reject;
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var4 = 4;
                        var4 = var7[var4];
                        var6 = var5.bind(var6)(var4);
                        var5 = {};
                        var1 = _closure1_slot5;
                        var1 = var1.INVALID_CLIENTID;
                        var5.closeCode = var1;
                        var1 = var6.prototype;
                        var4 = Object.create(var1, {
                            constructor: {
                                value: var6
                            }
                        });
                        var13 = 'No Client ID Specified';
                        var15 = var4;
                        var14 = var5;
                        var1 = new var15[var6](var14, var13, var12);
                        var1 = var1 instanceof Object ? var1 : var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    case 258:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var3 = var3.bind(var0)();
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rpc/native/server/NativeRPCHelpers.tsx';
    var4 = var5.bind(var6)(var4);
    var2.validateSocketClient = var3;
    var3 = function() { // Environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.getDeprecatedVoiceSettingsWithShortcut;
        var0 = function() { // Environment: var0
            var0 = new Array(0);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.getDeprecatedVoiceSettings = var3;
    var1 = function(arg0) { // Environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.getVoiceSettingsWithShortcut;
        var1 = arg0;
        var0 = function() { // Environment: var0
            var0 = '';
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.getVoiceSettings = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3357, 660, 8003, 7998, 2]);