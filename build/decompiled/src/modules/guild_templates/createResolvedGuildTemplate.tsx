// modules/guild_templates/createResolvedGuildTemplate.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
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
    var3 = var3.GuildTemplateStates;
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_templates/createResolvedGuildTemplate.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun53778: for (var _fun53778_ip = 0;;) switch (_fun53778_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var2 = var1.code;
                var0.code = var2;
                var2 = _closure1_slot0;
                var2 = var2.RESOLVED;
                var0.state = var2;
                var2 = var1.name;
                var0.name = var2;
                var3 = var1.description;
                var2 = null;
                var4 = var2 != var3;
                var2 = '';
                if (!var4) {
                    _fun53778_ip = 61;
                    continue _fun53778
                }
            case 58:
                var2 = var3;
            case 61:
                var0.description = var2;
                var2 = var1.creator_id;
                var0.creatorId = var2;
                var2 = var1.creator;
                var0.creator = var2;
                var2 = var1.created_at;
                var0.createdAt = var2;
                var2 = var1.updated_at;
                var0.updatedAt = var2;
                var2 = var1.source_guild_id;
                var0.sourceGuildId = var2;
                var2 = var1.serialized_source_guild;
                var0.serializedSourceGuild = var2;
                var2 = var1.usage_count;
                var0.usageCount = var2;
                var1 = var1.is_dirty;
                var0.isDirty = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6510, 2]);