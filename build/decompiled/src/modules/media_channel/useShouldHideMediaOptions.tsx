// modules/media_channel/useShouldHideMediaOptions.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelFlags;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_channel/useShouldHideMediaOptions.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun73302: for (var _fun73302_ip = 0;;) switch (_fun73302_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 2;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.useStateFromStores;
                var6 = _closure1_slot2;
                var3 = new Array(1);
                var3[0] = var6;
                var2 = function() { // Environment: var2
                    _fun73303: for (var _fun73303_ip = 0;;) switch (_fun73303_ip) {
                        case 0:
                            var3 = _closure1_slot2;
                            var2 = var3.getChannel;
                            var0 = _closure2_slot0;
                            var4 = var2.bind(var3)(var0);
                            var5 = null;
                            var2 = var5 == var4;
                            var0 = undefined;
                            if (var2) {
                                _fun73303_ip = 41;
                                continue _fun73303
                            }
                        case 35:
                            var0 = var4.parent_id;
                        case 41:
                            var2 = var5 != var0;
                            var0 = null;
                            if (!var2) {
                                _fun73303_ip = 94;
                                continue _fun73303
                            }
                        case 50:
                            var2 = var4.isForumPost;
                            var2 = var2.bind(var4)();
                            var0 = null;
                            if (!var2) {
                                _fun73303_ip = 94;
                                continue _fun73303
                            }
                        case 65:
                            var2 = _closure1_slot2;
                            var1 = var2.getChannel;
                            var5 = var5 == var4;
                            var3 = undefined;
                            if (var5) {
                                _fun73303_ip = 89;
                                continue _fun73303
                            }
                        case 83:
                            var3 = var4.parent_id;
                        case 89:
                            var0 = var1.bind(var2)(var3);
                        case 94:
                            return var0;
                    }
                };
                var3 = var4.bind(var5)(var3, var2);
                var2 = null;
                var2 = var2 == var3;
                if (var2) {
                    _fun73302_ip = 94;
                    continue _fun73302
                }
            case 73:
                var2 = var3.hasFlag;
                var0 = _closure1_slot3;
                var0 = var0.HIDE_MEDIA_DOWNLOAD_OPTIONS;
                var1 = var2.bind(var3)(var0);
            case 94:
                var0 = true;
                var0 = var0 === var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 1379, 632, 2]);