// modules/launchpad/native/isGuildSelectable.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/launchpad/native/isGuildSelectable.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun110068: for (var _fun110068_ip = 0;;) switch (_fun110068_ip) {
            case 0:
                var8 = arg0;
                var _closure2_slot0 = var8;
                var1 = _closure1_slot3;
                var0 = var1.isMuted;
                var0 = var0.bind(var1)(var8);
                var0 = !var0;
                if (!var0) {
                    _fun110068_ip = 148;
                    continue _fun110068
                }
            case 33:
                var2 = _closure1_slot2;
                var1 = var2.hasUnread;
                var1 = var1.bind(var2)(var8);
                var2 = !var1;
                var1 = !var2;
                if (!var2) {
                    _fun110068_ip = 145;
                    continue _fun110068
                }
            case 57:
                var2 = global;
                var6 = var2.Object;
                var5 = var6.keys;
                var7 = _closure1_slot0;
                var2 = var7.getStageInstancesByGuild;
                var2 = var2.bind(var7)(var8);
                var2 = var5.bind(var6)(var2);
                var5 = var2.length;
                var2 = 0;
                var2 = var5 > var2;
                if (var2) {
                    _fun110068_ip = 142;
                    continue _fun110068
                }
            case 104:
                var5 = _closure1_slot1;
                var4 = var5.getAllApplicationStreams;
                var5 = var4.bind(var5)();
                var4 = var5.some;
                var3 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var1 = var0.guildId;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var3 = var4.bind(var5)(var3);
                var3 = !var3;
                var2 = !var3;
            case 142:
                var1 = var2;
            case 145:
                var0 = var1;
            case 148:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1377, 3714, 8641, 4303, 2]);