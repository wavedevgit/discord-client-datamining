// modules/media_channel/useIsFirstMessageInMediaPost.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var3 = function arg0() {
        _fun55236: for (var _fun55236_ip = 0;;) switch (_fun55236_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun55236_ip = 37;
                    continue _fun55236
                }
            case 12:
                var4 = _closure1_slot5;
                var3 = var1.id;
                var2 = var1.channel_id;
                var1 = undefined;
                var0 = var4.bind(var1)(var3, var2);
            case 37:
                return var0;
        }
    };
    var _closure1_slot4 = var3;
    var1 = function arg0, arg1() {
        _fun55237: for (var _fun55237_ip = 0;;) switch (_fun55237_ip) {
            case 0:
                var4 = arg1;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 2;
                var0 = var1[var0];
                var1 = undefined;
                var2 = var2.bind(var1)(var0);
                var0 = var2.castChannelIdAsMessageId;
                var2 = var0.bind(var2)(var4);
                var0 = arg0;
                if (!(var0 === var2)) {
                    _fun55237_ip = 130;
                    continue _fun55237
                }
            case 46:
                var2 = _closure1_slot3;
                var0 = var2.getChannel;
                var2 = var0.bind(var2)(var4);
                var0 = null;
                if (!(var0 != var2)) {
                    _fun55237_ip = 126;
                    continue _fun55237
                }
            case 66:
                var4 = var2.isForumPost;
                var4 = var4.bind(var2)();
                if (!var4) {
                    _fun55237_ip = 126;
                    continue _fun55237
                }
            case 79:
                var4 = _closure1_slot3;
                var3 = var4.getChannel;
                var2 = var2.parent_id;
                var2 = var3.bind(var4)(var2);
                var0 = var0 == var2;
                var1 = undefined;
                if (var0) {
                    _fun55237_ip = 118;
                    continue _fun55237
                }
            case 108:
                var0 = var2.isMediaChannel;
                var1 = var0.bind(var2)();
            case 118:
                var0 = true;
                var0 = var0 === var1;
                return var0;
            case 126:
                var0 = false;
                return var0;
            case 130:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot5 = var1;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var8.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/media_channel/useIsFirstMessageInMediaPost.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 1;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = new Array(0);
        var0 = function() { // Environment: var0
            var2 = _closure1_slot4;
            var1 = _closure2_slot0;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var3.bind(var4)(var1, var0, var2);
        return var0;
    };
    var2.useIsFirstMessageInMediaPost = var4;
    var2.isFirstMessageInMediaPost = var3;
    var2.isFirstMessageIdInMediaPost = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 632, 21, 2]);