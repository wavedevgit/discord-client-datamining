// modules/guild_tag/useUserAvailableGuildsWithTags.tsx
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
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_tag/useUserAvailableGuildsWithTags.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStoresArray;
        var4 = _closure1_slot3;
        var1 = new Array(2);
        var1[0] = var4;
        var0 = _closure1_slot2;
        var1[1] = var0;
        var0 = function() { // Environment: var0
            var1 = _closure1_slot3;
            var0 = var1.getGuildsArray;
            var2 = var0.bind(var1)();
            var1 = var2.filter;
            var0 = function(arg0) { // Environment: var0
                _fun80341: for (var _fun80341_ip = 0;;) switch (_fun80341_ip) {
                    case 0:
                        var2 = arg0;
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 3;
                        var0 = var1[var0];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var0);
                        var0 = var4.guildSupportsTags;
                        var0 = var0.bind(var4)(var2);
                        if (!var0) {
                            _fun80341_ip = 83;
                            continue _fun80341
                        }
                    case 42:
                        var5 = _closure1_slot2;
                        var4 = var5.getSelfMember;
                        var3 = var2.id;
                        var5 = var4.bind(var5)(var3);
                        var4 = null;
                        var6 = var4 == var5;
                        var3 = undefined;
                        if (var6) {
                            _fun80341_ip = 79;
                            continue _fun80341
                        }
                    case 73:
                        var3 = var5.joinedAt;
                    case 79:
                        var0 = var4 != var3;
                    case 83:
                        if (!var0) {
                            _fun80341_ip = 112;
                            continue _fun80341
                        }
                    case 86:
                        var3 = var2.profile;
                        var2 = null;
                        var4 = var2 == var3;
                        var1 = undefined;
                        if (var4) {
                            _fun80341_ip = 108;
                            continue _fun80341
                        }
                    case 103:
                        var1 = var3.tag;
                    case 108:
                        var0 = var2 != var1;
                    case 112:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useUserAvailableGuildsWithTags = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1672, 1410, 566, 6804, 2]);