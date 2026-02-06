// modules/self_mod/inappropriate_conversation/takeover_modal/showTakeoverModal.native.tsx
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
    var3 = var3.TAKEOVER_MODAL_KEY;
    var _closure1_slot3 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/self_mod/inappropriate_conversation/takeover_modal/showTakeoverModal.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun112973: for (var _fun112973_ip = 0;;) switch (_fun112973_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.warningId;
                var8 = var0.warningType;
                var7 = var0.senderId;
                var6 = var0.channelId;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 1;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var3 = var4.isEligibleForInappropriateConversationWarning;
                var2 = {};
                var5 = 'takeover-modal';
                var2.location = var5;
                var2 = var3.bind(var4)(var2);
                if (!var2) {
                    _fun112973_ip = 169;
                    continue _fun112973
                }
            case 77:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var3 = 2;
                var3 = var2[var3];
                var5 = var4.bind(var0)(var3);
                var4 = var5.pushLazy;
                var10 = _closure1_slot0;
                var3 = 4;
                var3 = var2[var3];
                var10 = var10.bind(var0)(var3);
                var3 = 3;
                var3 = var2[var3];
                var2 = var2.paths;
                var3 = var10.bind(var0)(var3, var2);
                var2 = {};
                var2.warningId = var9;
                var2.warningType = var8;
                var2.senderId = var7;
                var2.channelId = var6;
                var1 = _closure1_slot3;
                var1 = var4.bind(var5)(var3, var2, var1);
            case 169:
                return var0;
        }
    };
    var2.showTakeoverModal = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [9085, 9034, 4562, 11392, 1307, 2]);