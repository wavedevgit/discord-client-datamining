// modules/guild_templates/GuildTemplateActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 0;
    var6 = var5[var0];
    var0 = undefined;
    var6 = var4.bind(var0)(var6);
    var7 = var6.Endpoints;
    var _closure1_slot3 = var7;
    var6 = var6.AnalyticEvents;
    var _closure1_slot4 = var6;
    var1 = var1.Map;
    var6 = var1.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var1
        }
    });
    var12 = var6;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var6;
    var _closure1_slot5 = var1;
    var1 = {};
    var6 = function(arg0) { // Original name: resolveGuildTemplate, environment: var3
        _fun53505: for (var _fun53505_ip = 0;;) switch (_fun53505_ip) {
            case 0:
                var5 = arg0;
                var _closure2_slot0 = var5;
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var2 = 1;
                var1 = var1[var2];
                var6 = undefined;
                var4 = var4.bind(var6)(var1);
                var1 = var4.isDispatching;
                var1 = var1.bind(var4)();
                if (var1) {
                    _fun53505_ip = 234;
                    continue _fun53505
                }
            case 50:
                var4 = _closure1_slot5;
                var1 = var4.get;
                var1 = var1.bind(var4)(var5);
                var4 = null;
                if (!(var4 == var1)) {
                    _fun53505_ip = 232;
                    continue _fun53505
                }
            case 73:
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = var7[var2];
                var8 = var4.bind(var6)(var2);
                var4 = var8.dispatch;
                var2 = {};
                var9 = 'GUILD_TEMPLATE_RESOLVE';
                var2.type = var9;
                var2.code = var5;
                var2 = var4.bind(var8)(var2);
                var4 = _closure1_slot0;
                var2 = 2;
                var2 = var7[var2];
                var2 = var4.bind(var6)(var2);
                var6 = var2.HTTP;
                var4 = var6.get;
                var2 = {
                    'url': null,
                    'oldFormErrors': true,
                    'rejectWithError': true
                };
                var8 = _closure1_slot3;
                var7 = var8.UNRESOLVED_GUILD_TEMPLATE;
                var7 = var7.bind(var8)(var5);
                var2.url = var7;
                var7 = var4.bind(var6)(var2);
                var6 = var7.then;
                var4 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var4 = var0.body;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 3;
                    var1 = var6[var1];
                    var3 = undefined;
                    var8 = var5.bind(var3)(var1);
                    var7 = var8.track;
                    var0 = _closure1_slot4;
                    var2 = var0.GUILD_TEMPLATE_RESOLVED;
                    var0 = {};
                    var1 = true;
                    var0.resolved = var1;
                    var1 = _closure2_slot0;
                    var0.guild_template_code = var1;
                    var9 = var4.name;
                    var0.guild_template_name = var9;
                    var9 = var4.description;
                    var0.guild_template_description = var9;
                    var9 = var4.source_guild_id;
                    var0.guild_template_guild_id = var9;
                    var0 = var7.bind(var8)(var2, var0);
                    var0 = 1;
                    var0 = var6[var0];
                    var7 = var5.bind(var3)(var0);
                    var2 = var7.dispatch;
                    var0 = {};
                    var8 = 'GUILD_TEMPLATE_RESOLVE_SUCCESS';
                    var0.type = var8;
                    var0.guildTemplate = var4;
                    var0.code = var1;
                    var0 = var2.bind(var7)(var0);
                    var0 = {};
                    var2 = 4;
                    var2 = var6[var2];
                    var2 = var5.bind(var3)(var2);
                    var2 = var2.bind(var3)(var4);
                    var0.guildTemplate = var2;
                    var0.code = var1;
                    return var0;
                };
                var2 = function() { // Environment: var0
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 3;
                    var1 = var4[var1];
                    var2 = undefined;
                    var7 = var3.bind(var2)(var1);
                    var6 = var7.track;
                    var0 = _closure1_slot4;
                    var5 = var0.GUILD_TEMPLATE_RESOLVED;
                    var0 = {};
                    var1 = false;
                    var0.resolved = var1;
                    var1 = _closure2_slot0;
                    var0.guild_template_code = var1;
                    var0 = var6.bind(var7)(var5, var0);
                    var0 = 1;
                    var0 = var4[var0];
                    var3 = var3.bind(var2)(var0);
                    var2 = var3.dispatch;
                    var0 = {};
                    var4 = 'GUILD_TEMPLATE_RESOLVE_FAILURE';
                    var0.type = var4;
                    var0.code = var1;
                    var0 = var2.bind(var3)(var0);
                    var0 = {};
                    var2 = null;
                    var0.guildTemplate = var2;
                    var0.code = var1;
                    return var0;
                };
                var6 = var6.bind(var7)(var4, var2);
                var4 = var6.finally;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot5;
                    var1 = var2.delete;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var2 = var4.bind(var6)(var2);
                var4 = _closure1_slot5;
                var3 = var4.set;
                var3 = var3.bind(var4)(var5, var2);
                return var2;
            case 232:
                return var1;
            case 234:
                var1 = global;
                var2 = var1.Promise;
                var1 = var2.resolve;
                var2 = var1.bind(var2)();
                var1 = var2.then;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot6;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot6 = var6;
    var1.resolveGuildTemplate = var6;
    var6 = function(arg0) { // Original name: loadTemplatesForGuild, environment: var3
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.get;
        var0 = {
            'url': null,
            'oldFormErrors': true,
            'rejectWithError': false
        };
        var5 = _closure1_slot3;
        var4 = var5.GUILD_TEMPLATES;
        var3 = arg0;
        var3 = var4.bind(var5)(var3);
        var0.url = var3;
        var2 = var1.bind(var2)(var0);
        var1 = var2.then;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS';
            var1.type = var4;
            var4 = var0.body;
            var1.guildTemplates = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.loadTemplatesForGuild = var6;
    var6 = function(arg0, arg1, arg2) { // Original name: createGuildTemplate, environment: var3
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.post;
        var0 = {};
        var5 = _closure1_slot3;
        var4 = var5.GUILD_TEMPLATES;
        var3 = arg0;
        var3 = var4.bind(var5)(var3);
        var0.url = var3;
        var3 = {};
        var4 = arg1;
        var3.name = var4;
        var4 = arg2;
        var3.description = var4;
        var0.body = var3;
        var3 = true;
        var0.oldFormErrors = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var2 = var1.bind(var2)(var0);
        var1 = var2.then;
        var0 = function(arg0) { // Environment: var0
            var4 = arg0;
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 1;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var5 = 'GUILD_TEMPLATE_CREATE_SUCCESS';
            var1.type = var5;
            var5 = var4.body;
            var1.guildTemplate = var5;
            var4 = var4.body;
            var4 = var4.code;
            var1.code = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.createGuildTemplate = var6;
    var6 = function(arg0, arg1) { // Original name: syncGuildTemplate, environment: var3
        var7 = arg1;
        var _closure2_slot0 = var7;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.put;
        var1 = {
            'url': null,
            'oldFormErrors': true,
            'rejectWithError': false
        };
        var6 = _closure1_slot3;
        var5 = var6.GUILD_TEMPLATE;
        var4 = arg0;
        var4 = var5.bind(var6)(var4, var7);
        var1.url = var4;
        var2 = var2.bind(var3)(var1);
        var1 = var2.then;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 1;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'GUILD_TEMPLATE_SYNC_SUCCESS';
            var1.type = var4;
            var4 = arg0;
            var4 = var4.body;
            var1.guildTemplate = var4;
            var4 = _closure2_slot0;
            var1.code = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.syncGuildTemplate = var6;
    var6 = function(arg0, arg1, arg2, arg3) { // Original name: updateGuildTemplate, environment: var3
        var7 = arg1;
        var _closure2_slot0 = var7;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.patch;
        var1 = {};
        var6 = _closure1_slot3;
        var5 = var6.GUILD_TEMPLATE;
        var4 = arg0;
        var4 = var5.bind(var6)(var4, var7);
        var1.url = var4;
        var4 = {};
        var5 = arg2;
        var4.name = var5;
        var5 = arg3;
        var4.description = var5;
        var1.body = var4;
        var4 = true;
        var1.oldFormErrors = var4;
        var4 = false;
        var1.rejectWithError = var4;
        var2 = var2.bind(var3)(var1);
        var1 = var2.then;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 1;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'GUILD_TEMPLATE_SYNC_SUCCESS';
            var1.type = var4;
            var4 = arg0;
            var4 = var4.body;
            var1.guildTemplate = var4;
            var4 = _closure2_slot0;
            var1.code = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.updateGuildTemplate = var6;
    var3 = function(arg0, arg1) { // Original name: deleteGuildTemplate, environment: var3
        var7 = arg0;
        var6 = arg1;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.del;
        var1 = {
            'url': null,
            'oldFormErrors': true,
            'rejectWithError': false
        };
        var5 = _closure1_slot3;
        var4 = var5.GUILD_TEMPLATE;
        var4 = var4.bind(var5)(var7, var6);
        var1.url = var4;
        var2 = var2.bind(var3)(var1);
        var1 = var2.then;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 1;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'GUILD_TEMPLATE_DELETE_SUCCESS';
            var1.type = var4;
            var5 = _closure2_slot0;
            var1.guildId = var5;
            var4 = _closure2_slot1;
            var1.code = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.deleteGuildTemplate = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_templates/GuildTemplateActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 806, 507, 795, 6447, 2]);