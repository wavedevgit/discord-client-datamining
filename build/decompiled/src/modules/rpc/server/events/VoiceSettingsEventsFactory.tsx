// modules/rpc/server/events/VoiceSettingsEventsFactory.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var6 = var3.RPC_SCOPE_CONFIG;
    var _closure1_slot3 = var6;
    var3 = var3.RPC_LOCAL_SCOPE;
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.RPCEvents;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rpc/server/events/VoiceSettingsEventsFactory.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1) { // Original name: createVoiceSettingsEventHandlers, environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var0 = {};
        var1 = _closure1_slot5;
        var5 = var1.VOICE_SETTINGS_UPDATE;
        var2 = {};
        var6 = {};
        var7 = _closure1_slot3;
        var8 = var7.ANY;
        var11 = _closure1_slot0;
        var12 = _closure1_slot2;
        var9 = 2;
        var7 = var12[var9];
        var10 = undefined;
        var7 = var11.bind(var10)(var7);
        var7 = var7.OAuth2Scopes;
        var13 = var7.RPC;
        var7 = new Array(2);
        var7[0] = var13;
        var9 = var12[var9];
        var9 = var11.bind(var10)(var9);
        var9 = var9.OAuth2Scopes;
        var9 = var9.RPC_VOICE_READ;
        var7[1] = var9;
        var6[var8] = var7;
        var2.scope = var6;
        var6 = function() { // Original name: handler, environment: var3
            var0 = function(arg0) { // Environment: var0
                _fun99000: for (var _fun99000_ip = 0;;) switch (_fun99000_ip) {
                    case 0:
                        var0 = arg0;
                        var5 = var0.prevState;
                        var2 = var0.dispatch;
                        var0 = _closure2_slot0;
                        var1 = undefined;
                        var0 = var0.bind(var1)();
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 3;
                        var3 = var6[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.isEqual;
                        var3 = var3.bind(var4)(var0, var5);
                        if (var3) {
                            _fun99000_ip = 70;
                            continue _fun99000
                        }
                    case 65:
                        var1 = var2.bind(var1)(var0);
                    case 70:
                        return var0;
                }
            };
            return var0;
        };
        var2.handler = var6;
        var0[var5] = var2;
        var2 = var1.VOICE_SETTINGS_UPDATE_2;
        var1 = {};
        var4 = _closure1_slot4;
        var1.scope = var4;
        var3 = function(arg0) { // Original name: handler, environment: var3
            var1 = arg0;
            var1 = var1.socket;
            var _closure3_slot0 = var1;
            var0 = function(arg0) { // Environment: var0
                _fun99002: for (var _fun99002_ip = 0;;) switch (_fun99002_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = var1.prevState;
                        var3 = var1.dispatch;
                        var2 = _closure3_slot0;
                        var2 = var2.application;
                        var4 = var2.id;
                        var2 = null;
                        if (!(var2 != var4)) {
                            _fun99002_ip = 110;
                            continue _fun99002
                        }
                    case 37:
                        var4 = _closure2_slot1;
                        var1 = _closure3_slot0;
                        var1 = var1.application;
                        var1 = var1.id;
                        var2 = undefined;
                        var1 = var4.bind(var2)(var1);
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 3;
                        var4 = var6[var4];
                        var5 = var5.bind(var2)(var4);
                        var4 = var5.isEqual;
                        var4 = var4.bind(var5)(var1, var0);
                        if (var4) {
                            _fun99002_ip = 108;
                            continue _fun99002
                        }
                    case 103:
                        var2 = var3.bind(var2)(var1);
                    case 108:
                        return var1;
                    case 110:
                        return var0;
                }
            };
            return var0;
        };
        var1.handler = var3;
        var0[var2] = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3315, 660, 3298, 22, 2]);