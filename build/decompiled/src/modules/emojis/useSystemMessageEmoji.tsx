// modules/emojis/useSystemMessageEmoji.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var4 = var6[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot2 = var3;
    var3 = 1;
    var4 = var6[var3];
    var3 = metroImportDefault;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot3 = var3;
    var3 = /^<(a?):(\w+):(\d+)>/;
    var _closure1_slot4 = var3;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/emojis/useSystemMessageEmoji.tsx';
    var4 = var5.bind(var6)(var4);
    var2.CUSTOM_EMOJI_REGEX = var3;
    var3 = function(arg0) { // Original name: getSystemMessageEmoji, environment: var1
        _fun55746: for (var _fun55746_ip = 0;;) switch (_fun55746_ip) {
            case 0:
                var3 = _closure1_slot4;
                var2 = var3.exec;
                var0 = arg0;
                var4 = var2.bind(var3)(var0);
                var0 = null;
                var2 = var0 == var4;
                var3 = undefined;
                if (var2) {
                    _fun55746_ip = 39;
                    continue _fun55746
                }
            case 32:
                var2 = 3;
                var3 = var4[var2];
            case 39:
                var2 = var0 == var3;
                var0 = null;
                if (var2) {
                    _fun55746_ip = 63;
                    continue _fun55746
                }
            case 48:
                var2 = _closure1_slot3;
                var1 = var2.getCustomEmojiById;
                var0 = var1.bind(var2)(var3);
            case 63:
                return var0;
        }
    };
    var2.getSystemMessageEmoji = var3;
    var1 = function(arg0) { // Original name: useSystemMessageEmoji, environment: var1
        var2 = arg0;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot2;
        var4 = var5.useMemo;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() { // Environment: var0
            _fun55748: for (var _fun55748_ip = 0;;) switch (_fun55748_ip) {
                case 0:
                    var2 = _closure1_slot4;
                    var1 = var2.exec;
                    var0 = _closure2_slot0;
                    var2 = var1.bind(var2)(var0);
                    var0 = null;
                    var1 = var0 == var2;
                    var0 = undefined;
                    if (var1) {
                        _fun55748_ip = 43;
                        continue _fun55748
                    }
                case 36:
                    var1 = 3;
                    var0 = var2[var1];
                case 43:
                    return var0;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        var _closure2_slot1 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot3;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun55749: for (var _fun55749_ip = 0;;) switch (_fun55749_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var0 = null;
                    var2 = var0 == var2;
                    if (var2) {
                        _fun55749_ip = 38;
                        continue _fun55749
                    }
                case 16:
                    var3 = _closure1_slot3;
                    var2 = var3.getCustomEmojiById;
                    var1 = _closure2_slot1;
                    var0 = var2.bind(var3)(var1);
                case 38:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useSystemMessageEmoji = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4693, 566, 2]);