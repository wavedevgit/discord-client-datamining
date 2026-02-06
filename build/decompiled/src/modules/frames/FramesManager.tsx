// modules/frames/FramesManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun64309: for (var _fun64309_ip = 0;;) switch (_fun64309_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun64309_ip = 74;
                continue _fun64309;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot10 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot10 = var0;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.AnalyticEvents;
    var _closure1_slot8 = var7;
    var3 = var3.RPCCloseCodes;
    var _closure1_slot9 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var2 = function arg0() {
            _fun64313: for (var _fun64313_ip = 0;;) switch (_fun64313_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot4;
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun64313_ip = 86;
                        continue _fun64313
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun64313_ip = 120;
                    continue _fun64313;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var2 = {};
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleRPCDisconnect;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var2.RPC_APP_DISCONNECTED = var3;
                    var0.actions = var2;
                    var1 = function(arg0) { // Environment: var1
                        _fun64315: for (var _fun64315_ip = 0;;) switch (_fun64315_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = var0.reason;
                                var0 = var0.application;
                                var6 = var0.id;
                                var0 = null;
                                if (!(var0 != var6)) {
                                    _fun64315_ip = 203;
                                    continue _fun64315
                                }
                            case 28:
                                if (!(var0 != var2)) {
                                    _fun64315_ip = 203;
                                    continue _fun64315
                                }
                            case 35:
                                var4 = _closure1_slot7;
                                var3 = var4.getConnectedFrame;
                                var3 = var3.bind(var4)();
                                var4 = var0 == var3;
                                var5 = undefined;
                                var0 = undefined;
                                if (var4) {
                                    _fun64315_ip = 68;
                                    continue _fun64315
                                }
                            case 63:
                                var0 = var3.applicationId;
                            case 68:
                                if (!(var0 === var6)) {
                                    _fun64315_ip = 203;
                                    continue _fun64315
                                }
                            case 75:
                                var7 = _closure3_slot0;
                                var4 = var7.leaveFrame;
                                var3 = {};
                                var3.applicationId = var6;
                                var3 = var4.bind(var7)(var3);
                                var4 = var2.code;
                                var3 = _closure1_slot9;
                                var3 = var3.CLOSE_NORMAL;
                                if (!(var4 !== var3)) {
                                    _fun64315_ip = 203;
                                    continue _fun64315
                                }
                            case 118:
                                var4 = _closure1_slot0;
                                var7 = _closure1_slot1;
                                var3 = 7;
                                var3 = var7[var3];
                                var5 = var4.bind(var5)(var3);
                                var4 = var5.track;
                                var1 = _closure1_slot8;
                                var3 = var1.ACTIVITY_CLOSED_RPC_ERROR;
                                var1 = {};
                                var7 = var2.code;
                                var1.rpc_close_code = var7;
                                var7 = var2.message;
                                var1.rpc_message = var7;
                                var1.application_id = var6;
                                var1 = var4.bind(var5)(var3, var1);
                                var1 = _closure3_slot0;
                                var0 = var1.showRPCDisconnectErrorUI;
                                var0 = var0.bind(var1)(var2);
                            case 203:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleRPCDisconnect = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot6;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot2;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 'FramesManager';
    var1.displayName = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/frames/FramesManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 7943, 660, 795, 4300, 2]);