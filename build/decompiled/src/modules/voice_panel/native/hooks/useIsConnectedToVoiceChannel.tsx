// modules/voice_panel/native/hooks/useIsConnectedToVoiceChannel.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.RTCConnectionStates;
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/hooks/useIsConnectedToVoiceChannel.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var5 = _closure1_slot3;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = _closure1_slot4;
        var1[1] = var5;
        var4 = _closure1_slot2;
        var1[2] = var4;
        var0 = function() { // Environment: var0
            _fun110456: for (var _fun110456_ip = 0;;) switch (_fun110456_ip) {
                case 0:
                    var2 = _closure1_slot3;
                    var1 = var2.getChannelId;
                    var1 = var1.bind(var2)();
                    var5 = _closure2_slot0;
                    var3 = null;
                    var4 = var1;
                    if (!(var3 != var5)) {
                        _fun110456_ip = 37;
                        continue _fun110456
                    }
                case 33:
                    var4 = _closure2_slot0;
                case 37:
                    if (!(var4 === var1)) {
                        _fun110456_ip = 128;
                        continue _fun110456
                    }
                case 41:
                    var3 = _closure1_slot4;
                    var2 = var3.isInChannel;
                    var5 = _closure1_slot2;
                    var1 = var5.getId;
                    var1 = var1.bind(var5)();
                    var1 = var2.bind(var3)(var4, var1);
                    if (var1) {
                        _fun110456_ip = 124;
                        continue _fun110456
                    }
                case 74:
                    var2 = _closure1_slot3;
                    var1 = var2.getState;
                    var1 = var1.bind(var2)();
                    var2 = _closure1_slot5;
                    var2 = var2.DISCONNECTED;
                    if (!(var2 !== var1)) {
                        _fun110456_ip = 120;
                        continue _fun110456
                    }
                case 102:
                    var0 = _closure1_slot5;
                    var0 = var0.NO_ROUTE;
                    if (!(var0 !== var1)) {
                        _fun110456_ip = 120;
                        continue _fun110456
                    }
                case 116:
                    var0 = true;
                    return var0;
                case 120:
                    var0 = false;
                    return var0;
                case 124:
                    var0 = true;
                    return var0;
                case 128:
                    var0 = false;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1216, 3518, 3521, 660, 566, 2]);