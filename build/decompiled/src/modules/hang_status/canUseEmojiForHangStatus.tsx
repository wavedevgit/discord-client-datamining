// modules/hang_status/canUseEmojiForHangStatus.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.EmojiIntention;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/hang_status/canUseEmojiForHangStatus.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun111085: for (var _fun111085_ip = 0;;) switch (_fun111085_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.id;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun111085_ip = 111;
                    continue _fun111085
                }
            case 14:
                var3 = _closure1_slot2;
                var2 = var3.getCustomEmojiById;
                var1 = var1.id;
                var5 = var2.bind(var3)(var1);
                var0 = var0 != var5;
                if (!var0) {
                    _fun111085_ip = 109;
                    continue _fun111085
                }
            case 44:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.isEmojiDisabled;
                var1 = {};
                var1.emoji = var5;
                var5 = arg1;
                var1.channel = var5;
                var4 = _closure1_slot3;
                var4 = var4.STATUS;
                var1.intention = var4;
                var1 = var2.bind(var3)(var1);
                var0 = !var1;
            case 109:
                return var0;
            case 111:
                var0 = true;
                return var0;
        }
    };
    var2.canUseEmojiForHangStatus = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4737, 1624, 3108, 2]);