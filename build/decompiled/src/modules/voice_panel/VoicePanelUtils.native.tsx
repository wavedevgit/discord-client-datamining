// modules/voice_panel/VoicePanelUtils.native.tsx
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
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/VoicePanelUtils.native.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun62767: for (var _fun62767_ip = 0;;) switch (_fun62767_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = var0 == var3;
                var1 = undefined;
                if (var2) {
                    _fun62767_ip = 24;
                    continue _fun62767
                }
            case 14:
                var2 = var3.isGuildStageVoice;
                var1 = var2.bind(var3)();
            case 24:
                var0 = var0 == var1;
                if (var0) {
                    _fun62767_ip = 34;
                    continue _fun62767
                }
            case 31:
                var0 = !var1;
            case 34:
                return var0;
        }
    };
    var2.isVoicePanelEnabled = var3;
    var3 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot2;
        var1 = new Array(2);
        var1[0] = var4;
        var0 = _closure1_slot3;
        var1[1] = var0;
        var0 = function() { // Environment: var0
            _fun62769: for (var _fun62769_ip = 0;;) switch (_fun62769_ip) {
                case 0:
                    var2 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var1 = undefined;
                    if (!(var2 === var1)) {
                        _fun62769_ip = 21;
                        continue _fun62769
                    }
                case 17:
                    var2 = _closure1_slot2;
                case 21:
                    if (!(var3 === var1)) {
                        _fun62769_ip = 29;
                        continue _fun62769
                    }
                case 25:
                    var3 = _closure1_slot3;
                case 29:
                    var1 = var2.getChannel;
                    var0 = var3.getChannelId;
                    var0 = var0.bind(var3)();
                    var2 = var1.bind(var2)(var0);
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun62769_ip = 71;
                        continue _fun62769
                    }
                case 58:
                    var1 = var2.isGuildStageVoice;
                    var1 = var1.bind(var2)();
                    var0 = !var1;
                case 71:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useIsVoicePanelShowing = var3;
    var3 = function() {
        var2 = _closure1_slot4;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            var1 = arg0;
            var0 = var1.isVoicePanelFullscreen;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.useIsVoicePanelFullscreen = var3;
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot4;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            var2 = arg0;
            var1 = var2.isChannelOpen;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.useIsVoicePanelOpen = var3;
    var3 = function() {
        var2 = _closure1_slot4;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            var1 = arg0;
            var0 = var1.isAnyVoicePanelOpen;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.useIsAnyVoicePanelOpen = var3;
    var1 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot4;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            var2 = arg0;
            var1 = var2.isMounted;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.useIsVoicePanelMounted = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 3518, 7877, 632, 2]);