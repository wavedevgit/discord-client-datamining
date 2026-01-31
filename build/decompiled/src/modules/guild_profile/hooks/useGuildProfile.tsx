// modules/guild_profile/hooks/useGuildProfile.tsx
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
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_profile/hooks/useGuildProfile.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var6 = arg0;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var8 = _closure1_slot1;
        var1 = 3;
        var0 = var8[var1];
        var7 = undefined;
        var11 = var5.bind(var7)(var0);
        var10 = var11.useStateFromStores;
        var0 = _closure1_slot4;
        var9 = new Array(1);
        var9[0] = var0;
        var4 = function() { // Environment: var2
            var2 = _closure1_slot4;
            var1 = var2.getProfile;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4 = var10.bind(var11)(var9, var4);
        var1 = var8[var1];
        var8 = var5.bind(var7)(var1);
        var5 = var8.useStateFromStores;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var2
            var2 = _closure1_slot4;
            var1 = var2.getFetchStatus;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var5.bind(var8)(var1, var0);
        var0 = {};
        var0.guildProfile = var4;
        var5 = _closure1_slot3;
        var4 = var5.useCallback;
        var3 = _closure1_slot2;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun59638: for (var _fun59638_ip = 0;;) switch (_fun59638_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arguments[0];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun59638_ip = 89;
                            continue _fun59638
                        }
                    case 10:
                        var4 = undefined;
                        if (!(var5 === var4)) {
                            _fun59638_ip = 18;
                            continue _fun59638
                        }
                    case 16:
                        var5 = false;
                    case 18:
                        SaveGenerator(address = 22);
                    case 20:
                        return var4;
                    case 22:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun59638_ip = 86;
                            continue _fun59638
                        }
                    case 28:
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var2 = 4;
                        var2 = var6[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.getGuildProfile;
                        var2 = _closure2_slot0;
                        var2 = var3.bind(var4)(var2, var5);
                        SaveGenerator(address = 74);
                    case 72:
                        return var2;
                    case 74:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun59638_ip = 83;
                            continue _fun59638
                        }
                    case 80:
                        return var2;
                    case 83:
                        return var2;
                    case 86:
                        return var1;
                    case 89:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var7)(var2);
        var2 = new Array(1);
        var2[0] = var6;
        var2 = var4.bind(var5)(var3, var2);
        var0.fetchGuildProfile = var2;
        var0.fetchStatus = var1;
        return var0;
    };
    var2.useGuildProfile = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 7340, 566, 7346, 2]);