// modules/premium/powerups/hooks/useHasEnhancedRoleColors.tsx
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
    var6 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildFeatures;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/hooks/useHasEnhancedRoleColors.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot2;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun44167: for (var _fun44167_ip = 0;;) switch (_fun44167_ip) {
                case 0:
                    var3 = _closure1_slot2;
                    var2 = var3.getGuild;
                    var0 = _closure2_slot0;
                    var2 = var2.bind(var3)(var0);
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun44167_ip = 59;
                        continue _fun44167
                    }
                case 33:
                    var3 = var2.features;
                    var2 = var3.has;
                    var1 = _closure1_slot3;
                    var1 = var1.ENHANCED_ROLE_COLORS;
                    var0 = var2.bind(var3)(var1);
                case 59:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var3;
    var3 = function arg0() {
        _fun44168: for (var _fun44168_ip = 0;;) switch (_fun44168_ip) {
            case 0:
                var4 = arg0;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun44168_ip = 61;
                    continue _fun44168
                }
            case 9:
                var3 = _closure1_slot2;
                var2 = var3.getGuild;
                var2 = var2.bind(var3)(var4);
                var0 = var0 != var2;
                if (!var0) {
                    _fun44168_ip = 59;
                    continue _fun44168
                }
            case 33:
                var3 = var2.features;
                var2 = var3.has;
                var1 = _closure1_slot3;
                var1 = var1.ENHANCED_ROLE_COLORS;
                var0 = var2.bind(var3)(var1);
            case 59:
                return var0;
            case 61:
                var0 = false;
                return var0;
        }
    };
    var2.getHasEnhancedRoleColors = var3;
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot2;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun44170: for (var _fun44170_ip = 0;;) switch (_fun44170_ip) {
                case 0:
                    var3 = _closure1_slot2;
                    var2 = var3.getGuild;
                    var0 = _closure2_slot0;
                    var2 = var2.bind(var3)(var0);
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun44170_ip = 59;
                        continue _fun44170
                    }
                case 33:
                    var3 = var2.features;
                    var2 = var3.has;
                    var1 = _closure1_slot3;
                    var1 = var1.ENHANCED_ROLE_COLORS;
                    var0 = var2.bind(var3)(var1);
                case 59:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useHasEnhancedRoleColorsForRole = var3;
    var1 = function arg0() {
        _fun44171: for (var _fun44171_ip = 0;;) switch (_fun44171_ip) {
            case 0:
                var3 = _closure1_slot2;
                var2 = var3.getGuild;
                var0 = arg0;
                var2 = var2.bind(var3)(var0);
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun44171_ip = 55;
                    continue _fun44171
                }
            case 29:
                var3 = var2.features;
                var2 = var3.has;
                var1 = _closure1_slot3;
                var1 = var1.ENHANCED_ROLE_COLORS;
                var0 = var2.bind(var3)(var1);
            case 55:
                return var0;
        }
    };
    var2.getHasEnhancedRoleColorsForRole = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1410, 660, 566, 2]);