// modules/roblox_subgame_detection/RobloxSubgamePlatformUtils.native.tsx
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
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var6 = var5[var0];
    var1 = metroImportDefault;
    var0 = undefined;
    var1 = var1.bind(var0)(var6);
    var _closure1_slot2 = var1;
    var1 = {};
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot2;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun32065: for (var _fun32065_ip = 0;;) switch (_fun32065_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun32065_ip = 126;
                            continue _fun32065
                        }
                    case 7:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var1 = 1;
                        var1 = var4[var1];
                        var4 = undefined;
                        var5 = var3.bind(var4)(var1);
                        var3 = var5.canOpenUrlScheme;
                        var1 = 'roblox';
                        var1 = var3.bind(var5)(var1);
                        SaveGenerator(address = 53);
                    case 51:
                        return var1;
                    case 53:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun32065_ip = 123;
                            continue _fun32065
                        }
                    case 59:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var2 = 2;
                        var2 = var5[var2];
                        var5 = var3.bind(var4)(var2);
                        if (var1) {
                            _fun32065_ip = 102;
                            continue _fun32065
                        }
                    case 82:
                        var3 = var5.ROBLOX_DEFERRED_WEB_URL;
                        var2 = _closure2_slot0;
                        var2 = var3.bind(var5)(var2);
                        _fun32065_ip = 120;
                        continue _fun32065;
                    case 102:
                        var4 = var5.ROBLOX_PROTOCOL_URL;
                        var3 = _closure2_slot0;
                        var2 = var4.bind(var5)(var3);
                    case 120:
                        return var2;
                    case 123:
                        return var1;
                    case 126:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.getRobloxSubgameURL = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/roblox_subgame_detection/RobloxSubgamePlatformUtils.native.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3620, 3618, 2]);