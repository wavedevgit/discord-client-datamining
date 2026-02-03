// modules/messages/native/renderer/row_data/embeds/PostPreviewEmbeds.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.MessageEmbedTypes;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/row_data/embeds/PostPreviewEmbeds.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun92506: for (var _fun92506_ip = 0;;) switch (_fun92506_ip) {
            case 0:
                var0 = arguments[1];
                var3 = undefined;
                if (!(var0 === var3)) {
                    _fun92506_ip = 13;
                    continue _fun92506
                }
            case 11:
                var0 = false;
            case 13:
                var _closure2_slot0 = var0;
                var0 = new Array(0);
                var _closure2_slot1 = var0;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 1;
                var2 = var5[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var4.isEligibleForGuildMediaChannelPostPreviewEmbed;
                var4 = var2.bind(var4)();
                var2 = false;
                var2 = var2 === var4;
                var3 = undefined;
                if (var2) {
                    _fun92506_ip = 87;
                    continue _fun92506
                }
            case 69:
                var4 = arg0;
                var4 = var4.embeds;
                var5 = null;
                var2 = var5 == var4;
                var3 = var4;
            case 87:
                if (var2) {
                    _fun92506_ip = 107;
                    continue _fun92506
                }
            case 90:
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun92507: for (var _fun92507_ip = 0;;) switch (_fun92507_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = var1.type;
                            var2 = _closure1_slot3;
                            var2 = var2.POST_PREVIEW;
                            if (!(var3 === var2)) {
                                _fun92507_ip = 85;
                                continue _fun92507
                            }
                        case 25:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 2;
                            var2 = var2[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var2);
                            var3 = var1.url;
                            var2 = _closure2_slot0;
                            var3 = var4.bind(var0)(var3, var2);
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun92507_ip = 89;
                                continue _fun92507
                            }
                        case 71:
                            var2 = _closure2_slot1;
                            var1 = var2.push;
                            var1 = var1.bind(var2)(var3);
                        case 85:
                            var1 = undefined;
                            return var1;
                        case 89:
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
            case 107:
                return var0;
        }
    };
    var2.createPostPreviewEmbeds = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 8124, 12078, 2]);