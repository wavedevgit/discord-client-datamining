// modules/guild_templates/GuildTemplateTooltipActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.Permissions;
    var _closure1_slot4 = var1;
    var1 = {};
    var6 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot2;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun54229: for (var _fun54229_ip = 0;;) switch (_fun54229_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun54229_ip = 107;
                            continue _fun54229
                        }
                    case 7:
                        var6 = _closure1_slot3;
                        var5 = var6.canWithPartialContext;
                        var1 = _closure1_slot4;
                        var4 = var1.MANAGE_GUILD;
                        var3 = {};
                        var7 = _closure2_slot0;
                        var3.guildId = var7;
                        var3 = var5.bind(var6)(var4, var3);
                        if (!var3) {
                            _fun54229_ip = 99;
                            continue _fun54229
                        }
                    case 52:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var2 = 3;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var4.bind(var2)(var3);
                        var2 = var3.loadTemplatesForGuild;
                        var1 = _closure2_slot0;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 93);
                    case 91:
                        return var1;
                    case 93:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun54229_ip = 104;
                            continue _fun54229
                        }
                    case 99:
                        var2 = undefined;
                        return var2;
                    case 104:
                        return var1;
                    case 107:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.checkGuildTemplateDirty = var6;
    var6 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE';
        var1.type = var4;
        var4 = arg0;
        var1.guildId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.hideGuildTemplateDirtyTooltip = var6;
    var3 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.hideGuildTemplatePromotionTooltip = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_templates/GuildTemplateTooltipActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3093, 660, 6555, 806, 2]);