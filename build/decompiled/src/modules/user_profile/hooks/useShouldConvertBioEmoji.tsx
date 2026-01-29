// modules/user_profile/hooks/useShouldConvertBioEmoji.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 1;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/hooks/useShouldConvertBioEmoji.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() { // Original name: useShouldConvertBioEmoji, environment: var1
        _fun49078: for (var _fun49078_ip = 0;;) switch (_fun49078_ip) {
            case 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 0;
                var0 = var4[var1];
                var2 = undefined;
                var0 = var3.bind(var2)(var0);
                var5 = var0.UseLegacyChatInput;
                var0 = var5.useSetting;
                var0 = var0.bind(var5)();
                var1 = var4[var1];
                var1 = var3.bind(var2)(var1);
                var2 = var1.UseRichChatInput;
                var1 = var2.useSetting;
                var1 = var1.bind(var2)();
                if (var0) {
                    _fun49078_ip = 71;
                    continue _fun49078
                }
            case 68:
                var0 = !var1;
            case 71:
                return var0;
        }
    };
    var2.default = var3;
    var1 = function() { // Original name: getShouldConvertBioEmoji, environment: var1
        _fun49079: for (var _fun49079_ip = 0;;) switch (_fun49079_ip) {
            case 0:
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var4 = 0;
                var0 = var0[var4];
                var3 = undefined;
                var0 = var2.bind(var3)(var0);
                var2 = var0.UseLegacyChatInput;
                var0 = var2.getSetting;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun49079_ip = 79;
                    continue _fun49079
                }
            case 43:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var4];
                var1 = var2.bind(var3)(var1);
                var2 = var1.UseRichChatInput;
                var1 = var2.getSetting;
                var1 = var1.bind(var2)();
                var0 = !var1;
            case 79:
                return var0;
        }
    };
    var2.getShouldConvertBioEmoji = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1348, 2]);