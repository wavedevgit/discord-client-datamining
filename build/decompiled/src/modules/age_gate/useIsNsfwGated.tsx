// modules/age_gate/useIsNsfwGated.tsx
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
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/age_gate/useIsNsfwGated.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun71004: for (var _fun71004_ip = 0;;) switch (_fun71004_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var0 = var0.nsfw;
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 2;
                var2 = var7[var4];
                var5 = undefined;
                var10 = var6.bind(var5)(var2);
                var9 = var10.useStateFromStores;
                var2 = _closure1_slot3;
                var8 = new Array(1);
                var8[0] = var2;
                var2 = function() { // Environment: var1
                    _fun71005: for (var _fun71005_ip = 0;;) switch (_fun71005_ip) {
                        case 0:
                            var1 = _closure1_slot3;
                            var0 = var1.getCurrentUser;
                            var1 = var0.bind(var1)();
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun71005_ip = 33;
                                continue _fun71005
                            }
                        case 27:
                            var0 = var1.nsfwAllowed;
                        case 33:
                            return var0;
                    }
                };
                var8 = var9.bind(var10)(var8, var2);
                var2 = false;
                var2 = var2 === var8;
                var4 = var7[var4];
                var5 = var6.bind(var5)(var4);
                var4 = var5.useStateFromStores;
                var6 = _closure1_slot2;
                var3 = new Array(1);
                var3[0] = var6;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot2;
                    var1 = var2.didAgree;
                    var0 = _closure2_slot0;
                    var0 = var0.guild_id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var4.bind(var5)(var3, var1);
                var1 = !var1;
                if (!var0) {
                    _fun71004_ip = 130;
                    continue _fun71004
                }
            case 121:
                if (var1) {
                    _fun71004_ip = 127;
                    continue _fun71004
                }
            case 124:
                var1 = var2;
            case 127:
                var0 = var1;
            case 130:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4516, 1613, 566, 2]);