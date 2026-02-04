// modules/emoji_picker/native/components/useNativeAndroidEmojiPickerEnabled.tsx
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
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/emoji_picker/native/components/useNativeAndroidEmojiPickerEnabled.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun74093: for (var _fun74093_ip = 0;;) switch (_fun74093_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 1;
                var0 = var3[var0];
                var4 = undefined;
                var2 = var2.bind(var4)(var0);
                var0 = var2.isAndroid;
                var0 = var0.bind(var2)();
                if (!var0) {
                    _fun74093_ip = 89;
                    continue _fun74093
                }
            case 38:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 2;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.database;
                var4 = _closure1_slot3;
                var1 = var4.getId;
                var1 = var1.bind(var4)();
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var0 = var1 != var2;
            case 89:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1216, 478, 1662, 2]);