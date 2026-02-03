// modules/emojis/top_emojis/TopEmojisUtils.tsx
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
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/emojis/top_emojis/TopEmojisUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun57338: for (var _fun57338_ip = 0;;) switch (_fun57338_ip) {
            case 0:
                var2 = arg0;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun57338_ip = 135;
                    continue _fun57338
                }
            case 12:
                var4 = _closure1_slot2;
                var3 = var4.getCurrentUser;
                var3 = var3.bind(var4)();
                if (!(var1 != var3)) {
                    _fun57338_ip = 135;
                    continue _fun57338
                }
            case 32:
                var4 = _closure1_slot3;
                var3 = var4.getTopEmojisMetadata;
                var3 = var3.bind(var4)(var2);
                if (!(var1 != var3)) {
                    _fun57338_ip = 84;
                    continue _fun57338
                }
            case 53:
                var3 = var3.topEmojisTTL;
                if (!(var1 != var3)) {
                    _fun57338_ip = 139;
                    continue _fun57338
                }
            case 63:
                var1 = global;
                var4 = var1.Date;
                var1 = var4.now;
                var1 = var1.bind(var4)();
                if (!(!(var1 < var3))) {
                    _fun57338_ip = 139;
                    continue _fun57338
                }
            case 84:
                var3 = _closure1_slot4;
                var1 = var3.getIsFetching;
                var1 = var1.bind(var3)(var2);
                if (var1) {
                    _fun57338_ip = 135;
                    continue _fun57338
                }
            case 102:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var0 = var1.fetchTopEmojis;
                var0 = var0.bind(var1)(var2);
            case 135:
                var0 = undefined;
                return var0;
            case 139:
                var0 = undefined;
                return var0;
        }
    };
    var2.maybeFetchTopEmojisByGuild = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1613, 4732, 4735, 6989, 2]);