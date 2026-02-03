// modules/messages/native/renderer/system_messages/useIsStickerReplyEnabled.tsx
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
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/system_messages/useIsStickerReplyEnabled.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1, arg2, arg3() {
        _fun55609: for (var _fun55609_ip = 0;;) switch (_fun55609_ip) {
            case 0:
                var6 = arg1;
                var1 = arg3;
                var3 = _closure1_slot4;
                var2 = var3.getCurrentUser;
                var4 = var2.bind(var3)();
                var2 = null;
                var3 = var2 != var4;
                if (!var3) {
                    _fun55609_ip = 73;
                    continue _fun55609
                }
            case 31:
                var8 = _closure1_slot2;
                var7 = var8.getMember;
                var5 = var4.id;
                var4 = arg0;
                var4 = var7.bind(var8)(var4, var5);
                var5 = var2 == var4;
                var2 = undefined;
                if (var5) {
                    _fun55609_ip = 70;
                    continue _fun55609
                }
            case 64:
                var2 = var4.isPending;
            case 70:
                var3 = var2;
            case 73:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 4;
                var4 = var4[var2];
                var2 = undefined;
                var4 = var5.bind(var2)(var4);
                var2 = var4.computeIsReadOnlyThread;
                var4 = var2.bind(var4)(var6);
                var5 = _closure1_slot3;
                var2 = var5.can;
                var0 = _closure1_slot5;
                var0 = var0.SEND_MESSAGES;
                var0 = var2.bind(var5)(var0, var6);
                var2 = arg2;
                var2 = var2.author;
                var2 = var2.bot;
                if (!var0) {
                    _fun55609_ip = 153;
                    continue _fun55609
                }
            case 150:
                var0 = !var4;
            case 153:
                if (!var0) {
                    _fun55609_ip = 159;
                    continue _fun55609
                }
            case 156:
                var0 = !var3;
            case 159:
                if (!var0) {
                    _fun55609_ip = 165;
                    continue _fun55609
                }
            case 162:
                var0 = !var2;
            case 165:
                if (!var0) {
                    _fun55609_ip = 171;
                    continue _fun55609
                }
            case 168:
                var0 = var1;
            case 171:
                return var0;
        }
    };
    var2.computeIsStickerReplyEnabled = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1681, 3091, 1621, 660, 6697, 2]);