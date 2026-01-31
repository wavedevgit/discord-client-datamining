// modules/guild_mod_dash_member_safety/GuildMemberSafetySearchUtils.tsx
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
    var3 = 'modules/guild_mod_dash_member_safety/GuildMemberSafetySearchUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var3 = arg0;
        var2 = var3.split;
        var1 = ',';
        var3 = var2.bind(var3)(var1);
        var2 = var3.map;
        var1 = function(arg0) { // Environment: var0
            var1 = arg0;
            var0 = var1.trim;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4 = var2.bind(var3)(var1);
        var1 = new Array(0);
        var _closure2_slot0 = var1;
        var2 = new Array(0);
        var _closure2_slot1 = var2;
        var3 = var4.forEach;
        var0 = function(arg0) { // Environment: var0
            _fun40800: for (var _fun40800_ip = 0;;) switch (_fun40800_ip) {
                case 0:
                    var3 = arg0;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 0;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.isSnowflake;
                    var2 = var1.bind(var2)(var3);
                    if (var2) {
                        _fun40800_ip = 60;
                        continue _fun40800
                    }
                case 44:
                    var4 = _closure2_slot1;
                    var2 = var4.push;
                    var2 = var2.bind(var4)(var3);
                    _fun40800_ip = 74;
                    continue _fun40800;
                case 60:
                    var2 = _closure2_slot0;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3);
                case 74:
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var0);
        var0 = new Array(2);
        var0[0] = var2;
        var0[1] = var1;
        return var0;
    };
    var2.splitQuery = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4508, 2]);