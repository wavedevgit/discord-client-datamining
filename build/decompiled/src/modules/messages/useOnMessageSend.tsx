// modules/messages/useOnMessageSend.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MessageStates;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/useOnMessageSend.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun107210: for (var _fun107210_ip = 0;;) switch (_fun107210_ip) {
            case 0:
                var6 = arg0;
                var5 = arguments[1];
                var _closure2_slot0 = var6;
                var0 = undefined;
                if (!(var5 === var0)) {
                    _fun107210_ip = 20;
                    continue _fun107210
                }
            case 18:
                var5 = undefined;
            case 20:
                var _closure2_slot1 = var5;
                var4 = _closure1_slot2;
                var3 = var4.useEffect;
                var2 = new Array(2);
                var2[0] = var6;
                var2[1] = var5;
                var1 = function() { // Environment: var1
                    var4 = function arg0() {
                        _fun107212: for (var _fun107212_ip = 0;;) switch (_fun107212_ip) {
                            case 0:
                                var2 = _closure2_slot1;
                                var0 = undefined;
                                var2 = var0 !== var2;
                                if (!var2) {
                                    _fun107212_ip = 32;
                                    continue _fun107212
                                }
                            case 16:
                                var3 = arg0;
                                var4 = var3.channelId;
                                var3 = _closure2_slot1;
                                var2 = var4 !== var3;
                            case 32:
                                if (var2) {
                                    _fun107212_ip = 43;
                                    continue _fun107212
                                }
                            case 35:
                                var1 = _closure2_slot0;
                                var1 = var1.bind(var0)();
                            case 43:
                                return var0;
                        }
                    };
                    var _closure3_slot0 = var4;
                    var9 = function arg0() {
                        _fun107213: for (var _fun107213_ip = 0;;) switch (_fun107213_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = var2.optimistic;
                                if (var0) {
                                    _fun107213_ip = 39;
                                    continue _fun107213
                                }
                            case 12:
                                var1 = var2.message;
                                var3 = var1.state;
                                var1 = _closure1_slot3;
                                var1 = var1.SENDING;
                                var0 = var3 === var1;
                            case 39:
                                if (!var0) {
                                    _fun107213_ip = 56;
                                    continue _fun107213
                                }
                            case 42:
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var1.bind(var0)(var2);
                            case 56:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var _closure3_slot1 = var9;
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 2;
                    var6 = var5[var1];
                    var2 = undefined;
                    var8 = var3.bind(var2)(var6);
                    var7 = var8.subscribe;
                    var6 = 'MESSAGE_CREATE';
                    var6 = var7.bind(var8)(var6, var9);
                    var6 = var5[var1];
                    var8 = var3.bind(var2)(var6);
                    var7 = var8.subscribe;
                    var6 = 'UPLOAD_START';
                    var6 = var7.bind(var8)(var6, var4);
                    var1 = var5[var1];
                    var3 = var3.bind(var2)(var1);
                    var2 = var3.subscribe;
                    var1 = 'CALL_CREATE';
                    var1 = var2.bind(var3)(var1, var4);
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var1 = 2;
                        var4 = var3[var1];
                        var0 = undefined;
                        var8 = var2.bind(var0)(var4);
                        var7 = var8.unsubscribe;
                        var6 = _closure3_slot1;
                        var5 = 'MESSAGE_CREATE';
                        var5 = var7.bind(var8)(var5, var6);
                        var5 = var3[var1];
                        var7 = var2.bind(var0)(var5);
                        var6 = var7.unsubscribe;
                        var4 = _closure3_slot0;
                        var5 = 'UPLOAD_START';
                        var5 = var6.bind(var7)(var5, var4);
                        var1 = var3[var1];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.unsubscribe;
                        var1 = 'CALL_CREATE';
                        var1 = var2.bind(var3)(var1, var4);
                        return var0;
                    };
                    return var0;
                };
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 660, 806, 2]);