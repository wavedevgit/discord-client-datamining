// modules/explicit_media_redaction/SensitiveMediaRedactionSettingUtils.tsx
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
    var0 = 2;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/explicit_media_redaction/SensitiveMediaRedactionSettingUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun39337: for (var _fun39337_ip = 0;;) switch (_fun39337_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = 0;
                var0 = var0[var5];
                var4 = undefined;
                var0 = var3.bind(var4)(var0);
                var0 = var0.ExplicitContentRedaction;
                var0 = var0.BLUR;
                var0 = var2 === var0;
                if (var0) {
                    _fun39337_ip = 79;
                    continue _fun39337
                }
            case 46:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.ExplicitContentRedaction;
                var1 = var1.BLOCK;
                var0 = var2 === var1;
            case 79:
                return var0;
        }
    };
    var2.getShouldObscureForSetting = var3;
    var1 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.isEqual;
        var1 = arg0;
        var0 = arg1;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.areSettingsEqual = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1311, 22, 2]);