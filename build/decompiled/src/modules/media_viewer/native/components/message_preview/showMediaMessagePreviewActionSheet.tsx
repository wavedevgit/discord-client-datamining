// modules/media_viewer/native/components/message_preview/showMediaMessagePreviewActionSheet.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_viewer/native/components/message_preview/showMediaMessagePreviewActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: showMediaMessagePreviewActionSheet, environment: var1
        _fun73114: for (var _fun73114_ip = 0;;) switch (_fun73114_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.channelId;
                var0 = var1.closeMediaModal;
                var6 = var1.message;
                var3 = _closure1_slot3;
                var1 = var3.getChannel;
                var7 = var1.bind(var3)(var4);
                var1 = null;
                if (!(var1 != var7)) {
                    _fun73114_ip = 176;
                    continue _fun73114
                }
            case 45:
                if (!(var1 != var6)) {
                    _fun73114_ip = 176;
                    continue _fun73114
                }
            case 52:
                var5 = _closure1_slot4;
                var4 = var5.getUser;
                var3 = var6.author;
                var3 = var3.id;
                var5 = var4.bind(var5)(var3);
                if (!(var1 != var5)) {
                    _fun73114_ip = 176;
                    continue _fun73114
                }
            case 82:
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var3 = 2;
                var3 = var1[var3];
                var9 = undefined;
                var4 = var4.bind(var9)(var3);
                var3 = var4.openLazy;
                var8 = _closure1_slot0;
                var2 = 4;
                var2 = var1[var2];
                var8 = var8.bind(var9)(var2);
                var2 = 3;
                var2 = var1[var2];
                var1 = var1.paths;
                var2 = var8.bind(var9)(var2, var1);
                var1 = {};
                var1.channel = var7;
                var1.message = var6;
                var1.user = var5;
                var1.closeMediaModal = var0;
                var0 = 'MediaMessagePreviewActionSheet';
                var0 = var3.bind(var4)(var2, var0, var1);
            case 176:
                var0 = undefined;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 1613, 3237, 9168, 1307, 2]);