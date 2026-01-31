// modules/voice_chat/VoiceChatHooks.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function(arg0) { // Original name: useIsConnectedToVoiceChannelForId, environment: var3
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var5 = _closure1_slot3;
        var1 = new Array(2);
        var1[0] = var5;
        var4 = _closure1_slot2;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot3;
            var2 = var3.isInChannel;
            var1 = _closure2_slot0;
            var4 = _closure1_slot2;
            var0 = var4.getId;
            var0 = var0.bind(var4)();
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot4 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_chat/VoiceChatHooks.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function(arg0) { // Original name: useIsConnectedToVoiceChannel, environment: var3
        _fun62674: for (var _fun62674_ip = 0;;) switch (_fun62674_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot4;
                var0 = null;
                var4 = var0 == var3;
                var1 = undefined;
                var0 = undefined;
                if (var4) {
                    _fun62674_ip = 28;
                    continue _fun62674
                }
            case 23:
                var0 = var3.id;
            case 28:
                var0 = var2.bind(var1)(var0);
                return var0;
        }
    };
    var2.useIsConnectedToVoiceChannel = var3;
    var2.useIsConnectedToVoiceChannelForId = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1216, 3480, 566, 2]);