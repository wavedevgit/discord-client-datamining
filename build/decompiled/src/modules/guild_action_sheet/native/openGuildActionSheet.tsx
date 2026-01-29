// modules/guild_action_sheet/native/openGuildActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot3 = var6;
    var3 = var3.GuildFeatures;
    var _closure1_slot4 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_action_sheet/native/openGuildActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: openGuildActionSheet, environment: var1
        _fun96817: for (var _fun96817_ip = 0;;) switch (_fun96817_ip) {
            case 0:
                var1 = arg0;
                var8 = arguments[1];
                var0 = undefined;
                if (!(var8 === var0)) {
                    _fun96817_ip = 14;
                    continue _fun96817
                }
            case 12:
                var8 = true;
            case 14:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 1;
                var2 = var5[var2];
                var7 = var4.bind(var0)(var2);
                var6 = var7.track;
                var2 = _closure1_slot3;
                var4 = var2.OPEN_POPOUT;
                var2 = {};
                var9 = 'Guild Profile';
                var2.type = var9;
                var9 = var1.id;
                var2.guild_id = var9;
                var2 = var6.bind(var7)(var4, var2);
                var4 = _closure1_slot0;
                var2 = 2;
                var2 = var5[var2];
                var5 = var4.bind(var0)(var2);
                var4 = var5.shouldNSFWGateGuild;
                var2 = var1.id;
                var2 = var4.bind(var5)(var2);
                if (var2) {
                    _fun96817_ip = 325;
                    continue _fun96817
                }
            case 117:
                var5 = var1.features;
                var4 = var5.has;
                var2 = _closure1_slot4;
                var2 = var2.HUB;
                var4 = var4.bind(var5)(var2);
                var6 = _closure1_slot1;
                var2 = _closure1_slot2;
                var5 = 3;
                var5 = var2[var5];
                var7 = var6.bind(var0)(var5);
                var6 = var7.openLazy;
                var9 = _closure1_slot0;
                var5 = 5;
                var5 = var2[var5];
                var5 = var9.bind(var0)(var5);
                if (var4) {
                    _fun96817_ip = 258;
                    continue _fun96817
                }
            case 188:
                var4 = 7;
                var9 = var2[var4];
                var4 = var2.paths;
                var10 = var5.bind(var0)(var9, var4);
                var11 = var1.id;
                var4 = global;
                var4 = var4.HermesInternal;
                var9 = var4.concat;
                var4 = 'GuildActionSheet:';
                var9 = var9.bind(var4)(var11);
                var4 = {};
                var4.guild = var1;
                var4.expanded = var8;
                var4 = var6.bind(var7)(var10, var9, var4);
                _fun96817_ip = 404;
                continue _fun96817;
            case 258:
                var4 = 6;
                var4 = var2[var4];
                var2 = var2.paths;
                var5 = var5.bind(var0)(var4, var2);
                var9 = var1.id;
                var2 = global;
                var2 = var2.HermesInternal;
                var4 = var2.concat;
                var2 = 'GuildActionSheet:';
                var4 = var4.bind(var2)(var9);
                var2 = {};
                var2.guild = var1;
                var2.expanded = var8;
                var2 = var6.bind(var7)(var5, var4, var2);
                _fun96817_ip = 404;
                continue _fun96817;
            case 325:
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var4 = 3;
                var4 = var2[var4];
                var5 = var5.bind(var0)(var4);
                var4 = var5.openLazy;
                var6 = _closure1_slot0;
                var3 = 5;
                var3 = var2[var3];
                var6 = var6.bind(var0)(var3);
                var3 = 4;
                var3 = var2[var3];
                var2 = var2.paths;
                var3 = var6.bind(var0)(var3, var2);
                var2 = {};
                var2.guild = var1;
                var1 = 'NsfwGateGuildSettingsActionSheet';
                var1 = var4.bind(var5)(var3, var1, var2);
            case 404:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 795, 8988, 3237, 12566, 1307, 12574, 12581, 2]);