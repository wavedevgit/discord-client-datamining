// modules/voice_panel/native/hooks/useConsoleConnectingInfo.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/hooks/useConsoleConnectingInfo.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun111502: for (var _fun111502_ip = 0;;) switch (_fun111502_ip) {
            case 0:
                var6 = arg0;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 2;
                var1 = var4[var1];
                var4 = undefined;
                var1 = var3.bind(var4)(var1);
                var3 = var1.bind(var4)();
                var _closure2_slot0 = var3;
                var5 = null;
                var7 = var5 == var3;
                var1 = undefined;
                if (var7) {
                    _fun111502_ip = 54;
                    continue _fun111502
                }
            case 49:
                var1 = var3.channelId;
            case 54:
                var10 = var1 === var6;
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 3;
                var8 = var7[var1];
                var12 = var3.bind(var4)(var8);
                var11 = var12.useStateFromStores;
                var8 = _closure1_slot3;
                var9 = new Array(1);
                var9[0] = var8;
                var8 = function() { // Environment: var0
                    var1 = _closure1_slot3;
                    var0 = var1.getAwaitingRemoteSessionInfo;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var9 = var11.bind(var12)(var9, var8);
                var1 = var7[var1];
                var7 = var3.bind(var4)(var1);
                var3 = var7.useStateFromStores;
                var8 = _closure1_slot4;
                var1 = new Array(1);
                var1[0] = var8;
                var0 = function() { // Environment: var0
                    _fun111504: for (var _fun111504_ip = 0;;) switch (_fun111504_ip) {
                        case 0:
                            var2 = _closure1_slot4;
                            var1 = var2.getSessionById;
                            var3 = _closure2_slot0;
                            var0 = null;
                            var5 = var0 == var3;
                            var3 = undefined;
                            if (var5) {
                                _fun111504_ip = 41;
                                continue _fun111504
                            }
                        case 31:
                            var4 = _closure2_slot0;
                            var3 = var4.sessionId;
                        case 41:
                            var4 = var0 != var3;
                            var0 = '';
                            if (!var4) {
                                _fun111504_ip = 55;
                                continue _fun111504
                            }
                        case 52:
                            var0 = var3;
                        case 55:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var8 = var3.bind(var7)(var1, var0);
                var1 = var5 == var9;
                var0 = undefined;
                if (var1) {
                    _fun111502_ip = 161;
                    continue _fun111502
                }
            case 156:
                var0 = var9.type;
            case 161:
                if (!(var5 == var0)) {
                    _fun111502_ip = 189;
                    continue _fun111502
                }
            case 165:
                var3 = var5 == var8;
                var1 = undefined;
                if (var3) {
                    _fun111502_ip = 186;
                    continue _fun111502
                }
            case 174:
                var3 = var8.clientInfo;
                var1 = var3.os;
            case 186:
                var0 = var1;
            case 189:
                var1 = var5 != var0;
                var3 = '';
                if (!var1) {
                    _fun111502_ip = 203;
                    continue _fun111502
                }
            case 200:
                var3 = var0;
            case 203:
                var1 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 4;
                var0 = var7[var0];
                var0 = var1.bind(var4)(var0);
                var1 = var0.bind(var4)(var9);
                var0 = {};
                var11 = var5 == var9;
                var7 = undefined;
                if (var11) {
                    _fun111502_ip = 244;
                    continue _fun111502
                }
            case 239:
                var7 = var9.channelId;
            case 244:
                var7 = var7 === var6;
                var0.isConnectingToConsole = var7;
                var7 = var5 == var9;
                var5 = undefined;
                if (var7) {
                    _fun111502_ip = 267;
                    continue _fun111502
                }
            case 262:
                var5 = var9.channelId;
            case 267:
                var5 = var5 === var6;
                if (var5) {
                    _fun111502_ip = 277;
                    continue _fun111502
                }
            case 274:
                var5 = var10;
            case 277:
                var0.isConnectingOrConnectedToConsole = var5;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var7 = 5;
                var7 = var6[var7];
                var7 = var5.bind(var4)(var7);
                var7 = var7.bind(var4)(var3);
                var0.icon = var7;
                var7 = _closure1_slot0;
                var2 = 6;
                var2 = var6[var2];
                var7 = var7.bind(var4)(var2);
                var2 = var7.getConsoleConnectingText;
                var2 = var2.bind(var7)(var8, var9, var10);
                var0.text = var2;
                var2 = 7;
                var2 = var6[var2];
                var2 = var5.bind(var4)(var2);
                var2 = var2.bind(var4)(var3);
                var0.color = var2;
                var0.displayCancel = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3519, 3520, 8294, 632, 8710, 8311, 8712, 14337, 2]);