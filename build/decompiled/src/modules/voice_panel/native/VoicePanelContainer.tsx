// modules/voice_panel/native/VoicePanelContainer.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: VoicePanel, environment: var1
        var6 = arg0;
        var _closure2_slot0 = var6;
        var1 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 4;
        var0 = var8[var0];
        var3 = undefined;
        var7 = var1.bind(var3)(var0);
        var2 = var7.useStateFromStores;
        var0 = _closure1_slot4;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var4
            _fun110505: for (var _fun110505_ip = 0;;) switch (_fun110505_ip) {
                case 0:
                    var2 = _closure1_slot4;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var0.channelId;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun110505_ip = 45;
                        continue _fun110505
                    }
                case 40:
                    var0 = var1.guild_id;
                case 45:
                    return var0;
            }
        };
        var7 = var2.bind(var7)(var1, var0);
        var2 = _closure1_slot6;
        var1 = _closure1_slot1;
        var0 = 5;
        var0 = var8[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var10 = var0;
        var9 = var6;
        var6 = copyDataProperties(var10, var9);
        var6 = 'guildId';
        var0[var6] = var7;
        var7 = _closure1_slot3;
        var6 = var7.useMemo;
        var5 = function() { // Environment: var4
            var3 = _closure1_slot6;
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 6;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var4 = new Array(0);
        var5 = var6.bind(var7)(var5, var4);
        var4 = 'children';
        var0[var4] = var5;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot7 = var0;
    var0 = function(arg0) { // Original name: getChannelKey, environment: var1
        var0 = arg0;
        return var0;
    };
    var _closure1_slot8 = var0;
    var0 = function(arg0, arg1, arg2, arg3) { // Original name: renderVoicePanel, environment: var1
        var4 = arg1;
        var3 = _closure1_slot6;
        var2 = _closure1_slot7;
        var1 = {};
        var1.channelId = var4;
        var0 = arg2;
        var1.transitionState = var0;
        var0 = arg3;
        var1.transitionCleanUp = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1, var4);
        return var0;
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = var6.memo;
    var1 = function() { // Original name: VoicePanelContainer, environment: var1
        var5 = _closure1_slot5;
        var1 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 7;
        var0 = var6[var0];
        var3 = undefined;
        var0 = var1.bind(var3)(var0);
        var2 = var0.shallow;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var2 = var0.channels;
            var0 = global;
            var1 = var0.Array;
            var0 = var1.from;
            var0 = var0.bind(var1)(var2);
            return var0;
        };
        var5 = var5.bind(var3)(var0, var2);
        var2 = _closure1_slot6;
        var0 = 8;
        var0 = var6[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.TransitionGroup;
        var0 = {};
        var0.items = var5;
        var5 = _closure1_slot8;
        var0.getItemKey = var5;
        var4 = _closure1_slot9;
        var0.renderItem = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/VoicePanelContainer.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1372, 7839, 33, 566, 14194, 14218, 3035, 3987, 2]);