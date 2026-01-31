// modules/voice_panel/native/utils/useSelfHasVideo.tsx
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
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/utils/useSelfHasVideo.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useSelfHasVideo, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var5 = _closure1_slot2;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = _closure1_slot3;
        var1[1] = var5;
        var4 = _closure1_slot4;
        var1[2] = var4;
        var0 = function() { // Environment: var0
            _fun110759: for (var _fun110759_ip = 0;;) switch (_fun110759_ip) {
                case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 4;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.canRenderParticipantVideo;
                    var7 = _closure1_slot2;
                    var6 = var7.getParticipant;
                    var5 = _closure2_slot0;
                    var8 = _closure1_slot3;
                    var4 = var8.getId;
                    var4 = var4.bind(var8)();
                    var4 = var6.bind(var7)(var5, var4);
                    var5 = null;
                    var5 = var5 != var4;
                    if (!var5) {
                        _fun110759_ip = 80;
                        continue _fun110759
                    }
                case 77:
                    var1 = var4;
                case 80:
                    var0 = _closure1_slot4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3907, 1216, 3435, 566, 8007, 2]);