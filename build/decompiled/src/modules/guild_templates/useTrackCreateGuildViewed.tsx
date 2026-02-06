// modules/guild_templates/useTrackCreateGuildViewed.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildTemplateStates;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_templates/useTrackCreateGuildViewed.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot2;
        var3 = var2.useRef;
        var1 = new Array(0);
        var1 = var3.bind(var2)(var1);
        var _closure2_slot1 = var1;
        var1 = var2.useEffect;
        var0 = function() { // Environment: var0
            _fun79177: for (var _fun79177_ip = 0;;) switch (_fun79177_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var2;
                    if (!var1) {
                        _fun79177_ip = 42;
                        continue _fun79177
                    }
                case 16:
                    var2 = _closure2_slot0;
                    var3 = var2.state;
                    var2 = _closure1_slot3;
                    var2 = var2.RESOLVING;
                    var1 = var3 !== var2;
                case 42:
                    if (!var1) {
                        _fun79177_ip = 196;
                        continue _fun79177
                    }
                case 48:
                    var1 = _closure2_slot1;
                    var3 = var1.current;
                    var2 = var3.includes;
                    var1 = _closure2_slot0;
                    var1 = var1.code;
                    var1 = var2.bind(var3)(var1);
                    if (var1) {
                        _fun79177_ip = 196;
                        continue _fun79177
                    }
                case 79:
                    var1 = _closure2_slot1;
                    var2 = var1.current;
                    var1 = var2.push;
                    var4 = _closure2_slot0;
                    var0 = var4.code;
                    var0 = var1.bind(var2)(var0);
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.track;
                    var0 = _closure1_slot4;
                    var1 = var0.CREATE_GUILD_VIEWED;
                    var0 = {};
                    var5 = var4.code;
                    var0.guild_template_code = var5;
                    var5 = var4.name;
                    var0.guild_template_name = var5;
                    var5 = var4.description;
                    var0.guild_template_description = var5;
                    var4 = var4.sourceGuildId;
                    var0.guild_template_guild_id = var4;
                    var0 = var2.bind(var3)(var1, var0);
                case 196:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 6514, 660, 795, 2]);