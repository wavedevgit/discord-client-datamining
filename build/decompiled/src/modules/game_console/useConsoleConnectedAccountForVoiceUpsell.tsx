// modules/game_console/useConsoleConnectedAccountForVoiceUpsell.tsx
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
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CONSOLE_VOICE_PLATFORMS;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ActivityTypes;
    var _closure1_slot7 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/game_console/useConsoleConnectedAccountForVoiceUpsell.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun70182: for (var _fun70182_ip = 0;;) switch (_fun70182_ip) {
            case 0:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 5;
                var0 = var7[var4];
                var5 = undefined;
                var9 = var6.bind(var5)(var0);
                var8 = var9.useStateFromStores;
                var0 = _closure1_slot4;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var1
                    var2 = _closure1_slot4;
                    var1 = var2.getActivities;
                    var0 = true;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var8.bind(var9)(var2, var0);
                var2 = var8.filter;
                var0 = function(arg0) { // Environment: var1
                    _fun70184: for (var _fun70184_ip = 0;;) switch (_fun70184_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.type;
                            var3 = var0.platform;
                            var0 = _closure1_slot7;
                            var0 = var0.PLAYING;
                            var0 = var2 === var0;
                            if (!var0) {
                                _fun70184_ip = 40;
                                continue _fun70184
                            }
                        case 34:
                            var2 = null;
                            var0 = var2 != var3;
                        case 40:
                            if (!var0) {
                                _fun70184_ip = 57;
                                continue _fun70184
                            }
                        case 43:
                            var2 = _closure1_slot6;
                            var1 = var2.has;
                            var0 = var1.bind(var2)(var3);
                        case 57:
                            return var0;
                    }
                };
                var0 = var2.bind(var8)(var0);
                var _closure2_slot0 = var0;
                var2 = var7[var4];
                var10 = var6.bind(var5)(var2);
                var9 = var10.useStateFromStores;
                var2 = _closure1_slot5;
                var8 = new Array(1);
                var8[0] = var2;
                var2 = function() { // Environment: var1
                    _fun70185: for (var _fun70185_ip = 0;;) switch (_fun70185_ip) {
                        case 0:
                            var2 = _closure1_slot5;
                            var0 = var2.getAwaitingRemoteSessionInfo;
                            var0 = var0.bind(var2)();
                            var2 = null;
                            var0 = var2 != var0;
                            if (var0) {
                                _fun70185_ip = 44;
                                continue _fun70185
                            }
                        case 26:
                            var3 = _closure1_slot5;
                            var1 = var3.getRemoteSessionId;
                            var1 = var1.bind(var3)();
                            var0 = var2 != var1;
                        case 44:
                            return var0;
                    }
                };
                var2 = var9.bind(var10)(var8, var2);
                var4 = var7[var4];
                var5 = var6.bind(var5)(var4);
                var4 = var5.useStateFromStores;
                var6 = _closure1_slot3;
                var3 = new Array(1);
                var3[0] = var6;
                var1 = function() { // Environment: var1
                    var3 = _closure2_slot0;
                    var2 = var3.map;
                    var1 = function(arg0) { // Environment: var0
                        _fun70187: for (var _fun70187_ip = 0;;) switch (_fun70187_ip) {
                            case 0:
                                var0 = arg0;
                                var4 = var0.platform;
                                var0 = null;
                                if (!(var0 != var4)) {
                                    _fun70187_ip = 72;
                                    continue _fun70187
                                }
                            case 15:
                                var5 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var1 = 6;
                                var1 = var3[var1];
                                var3 = undefined;
                                var1 = var5.bind(var3)(var1);
                                var4 = var1.bind(var3)(var4);
                                var3 = var0 == var4;
                                var1 = null;
                                if (var3) {
                                    _fun70187_ip = 70;
                                    continue _fun70187
                                }
                            case 54:
                                var3 = _closure1_slot3;
                                var2 = var3.getAccount;
                                var1 = var2.bind(var3)(var0, var4);
                            case 70:
                                return var1;
                            case 72:
                                return var0;
                        }
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.find;
                    var0 = function(arg0) { // Environment: var0
                        var1 = null;
                        var0 = arg0;
                        var0 = var1 != var0;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var4.bind(var5)(var3, var1);
                var3 = var0.length;
                var0 = 0;
                var4 = var3 > var0;
                var3 = null;
                var0 = null;
                if (!var4) {
                    _fun70182_ip = 191;
                    continue _fun70182
                }
            case 174:
                var4 = var3 != var1;
                var0 = null;
                if (!var4) {
                    _fun70182_ip = 191;
                    continue _fun70182
                }
            case 183:
                var0 = null;
                if (var2) {
                    _fun70182_ip = 191;
                    continue _fun70182
                }
            case 188:
                var0 = var1;
            case 191:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4519, 5708, 3520, 5391, 660, 566, 8785, 2]);