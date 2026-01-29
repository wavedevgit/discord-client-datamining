// modules/action_sheet/native/components/EmojiRowUtils.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var6 = var3.MessageFlags;
    var _closure1_slot2 = var6;
    var6 = var3.MessageStates;
    var _closure1_slot3 = var6;
    var3 = var3.MessageTypes;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/action_sheet/native/components/EmojiRowUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1, arg2) { // Environment: var1
        _fun77810: for (var _fun77810_ip = 0;;) switch (_fun77810_ip) {
            case 0:
                var0 = arg0;
                var2 = arg1;
                var1 = arg2;
                if (!var0) {
                    _fun77810_ip = 15;
                    continue _fun77810
                }
            case 12:
                var0 = var1;
            case 15:
                if (!var0) {
                    _fun77810_ip = 40;
                    continue _fun77810
                }
            case 18:
                var3 = var2.state;
                var1 = _closure1_slot3;
                var1 = var1.SEND_FAILED;
                var0 = var3 !== var1;
            case 40:
                if (!var0) {
                    _fun77810_ip = 65;
                    continue _fun77810
                }
            case 43:
                var3 = var2.type;
                var1 = _closure1_slot4;
                var1 = var1.THREAD_STARTER_MESSAGE;
                var0 = var3 !== var1;
            case 65:
                if (!var0) {
                    _fun77810_ip = 123;
                    continue _fun77810
                }
            case 68:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 1;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var3 = var4.hasFlag;
                var2 = var2.flags;
                var1 = _closure1_slot2;
                var1 = var1.EPHEMERAL;
                var1 = var3.bind(var4)(var2, var1);
                var0 = !var1;
            case 123:
                return var0;
        }
    };
    var2.shouldShowEmojiRow = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 1384, 2]);