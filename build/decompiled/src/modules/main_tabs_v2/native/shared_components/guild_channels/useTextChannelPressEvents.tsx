// modules/main_tabs_v2/native/shared_components/guild_channels/useTextChannelPressEvents.tsx
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
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/shared_components/guild_channels/useTextChannelPressEvents.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        var5 = arg0;
        var2 = arg1;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var2;
        var0 = {};
        var4 = _closure1_slot3;
        var6 = var4.useCallback;
        var7 = var5.id;
        var3 = new Array(3);
        var3[0] = var7;
        var7 = var5.guild_id;
        var3[1] = var7;
        var3[2] = var2;
        var2 = function() { // Environment: var1
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var0 = 2;
            var1 = var4[var0];
            var0 = undefined;
            var8 = var3.bind(var0)(var1);
            var7 = var8.preload;
            var1 = _closure2_slot0;
            var6 = var1.guild_id;
            var3 = var1.id;
            var3 = var7.bind(var8)(var6, var3);
            var3 = _closure1_slot0;
            var2 = 3;
            var2 = var4[var2];
            var4 = var3.bind(var0)(var2);
            var3 = var4.transitionToChannel;
            var2 = var1.id;
            var1 = {};
            var5 = _closure2_slot1;
            var1.navigationReplace = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var2 = var6.bind(var4)(var2, var3);
        var0.onPress = var2;
        var3 = var4.useCallback;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() { // Environment: var1
            _fun110101: for (var _fun110101_ip = 0;;) switch (_fun110101_ip) {
                case 0:
                    var4 = _closure1_slot4;
                    var3 = var4.getChannel;
                    var2 = _closure2_slot0;
                    var2 = var2.parent_id;
                    var3 = var3.bind(var4)(var2);
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun110101_ip = 66;
                        continue _fun110101
                    }
                case 36:
                    var2 = var3.isForumLikeChannel;
                    var2 = var2.bind(var3)();
                    if (!var2) {
                        _fun110101_ip = 66;
                        continue _fun110101
                    }
                case 49:
                    var4 = _closure2_slot0;
                    var2 = var4.isForumPost;
                    var2 = var2.bind(var4)();
                    if (var2) {
                        _fun110101_ip = 165;
                        continue _fun110101
                    }
                case 66:
                    var4 = _closure2_slot0;
                    var2 = var4.isThread;
                    var2 = var2.bind(var4)();
                    if (var2) {
                        _fun110101_ip = 127;
                        continue _fun110101
                    }
                case 83:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 6;
                    var4 = var4[var2];
                    var2 = undefined;
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.openChannelLongPressActionSheet;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var2 = var4.bind(var5)(var2);
                    _fun110101_ip = 197;
                    continue _fun110101;
                case 127:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 5;
                    var2 = var5[var2];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var2);
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var2 = var4.bind(var5)(var2);
                    _fun110101_ip = 197;
                    continue _fun110101;
                case 165:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 4;
                    var1 = var2[var1];
                    var2 = undefined;
                    var1 = var4.bind(var2)(var1);
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0, var3);
                case 197:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        var0.onLongPress = var1;
        var1 = 32;
        var0.unstable_pressDelay = var1;
        return var0;
    };
    var2.useTextChannelPressEvents = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1372, 3904, 3902, 9716, 13254, 9057, 2]);