// modules/voice_panel/native/hooks/useChatBadge.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
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
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/hooks/useChatBadge.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 1;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot2;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun111235: for (var _fun111235_ip = 0;;) switch (_fun111235_ip) {
                case 0:
                    var4 = _closure1_slot2;
                    var3 = var4.getMentionCount;
                    var0 = _closure2_slot0;
                    var3 = var3.bind(var4)(var0);
                    var0 = 0;
                    var3 = var3 > var0;
                    var0 = 'mention';
                    if (var3) {
                        _fun111235_ip = 69;
                        continue _fun111235
                    }
                case 38:
                    var3 = _closure1_slot2;
                    var2 = var3.hasUnread;
                    var1 = _closure2_slot0;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    if (!var2) {
                        _fun111235_ip = 66;
                        continue _fun111235
                    }
                case 62:
                    var1 = 'unread';
                case 66:
                    var0 = var1;
                case 69:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3947, 566, 2]);