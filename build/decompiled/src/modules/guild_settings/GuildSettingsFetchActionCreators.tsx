// modules/guild_settings/GuildSettingsFetchActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun66112: for (var _fun66112_ip = 0;;) switch (_fun66112_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun66112_ip = 197;
                            continue _fun66112
                        }
                    case 13:
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 4;
                        var1 = var4[var1];
                        var5 = undefined;
                        var1 = var2.bind(var5)(var1);
                        var4 = var1.HTTP;
                        var2 = var4.get;
                        var1 = {};
                        var8 = _closure1_slot6;
                        var7 = var8.GUILD_INTEGRATIONS;
                        var7 = var7.bind(var8)(var6);
                        var1.url = var7;
                        var7 = true;
                        var8 = {
                            'include_applications': true,
                            'include_role_connections_metadata': true
                        };
                        var1.query = var8;
                        var1.oldFormErrors = var7;
                        var7 = false;
                        var1.rejectWithError = var7;
                        var1 = var2.bind(var4)(var1);
                        SaveGenerator(address = 110);
                    case 108:
                        return var1;
                    case 110:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun66112_ip = 194;
                            continue _fun66112
                        }
                    case 116:
                        var7 = var1.body;
                        var4 = var7.map;
                        var2 = function(arg0) { // Environment: var2
                            _fun66113: for (var _fun66113_ip = 0;;) switch (_fun66113_ip) {
                                case 0:
                                    var3 = arg0;
                                    var0 = {};
                                    var9 = var0;
                                    var8 = var3;
                                    var1 = copyDataProperties(var9, var8);
                                    var2 = 'application';
                                    var4 = var2 in var3;
                                    var1 = undefined;
                                    if (!var4) {
                                        _fun66113_ip = 67;
                                        continue _fun66113
                                    }
                                case 28:
                                    var6 = var3.application;
                                    var4 = null;
                                    var4 = var4 != var6;
                                    var1 = undefined;
                                    if (!var4) {
                                        _fun66113_ip = 67;
                                        continue _fun66113
                                    }
                                case 44:
                                    var7 = _closure1_slot4;
                                    var6 = var7.createFromServer;
                                    var4 = var3.application;
                                    var1 = var6.bind(var7)(var4);
                                case 67:
                                    var0[var2] = var1;
                                    var2 = 'user';
                                    var4 = var2 in var3;
                                    var1 = undefined;
                                    if (!var4) {
                                        _fun66113_ip = 133;
                                        continue _fun66113
                                    }
                                case 85:
                                    var6 = var3.user;
                                    var4 = null;
                                    var4 = var4 != var6;
                                    var1 = undefined;
                                    if (!var4) {
                                        _fun66113_ip = 133;
                                        continue _fun66113
                                    }
                                case 101:
                                    var5 = _closure1_slot5;
                                    var9 = var3.user;
                                    var4 = var5.prototype;
                                    var4 = Object.create(var4, {
                                        constructor: {
                                            value: var5
                                        }
                                    });
                                    var10 = var4;
                                    var3 = new var10[var5](var9, var8);
                                    var1 = var3 instanceof Object ? var3 : var4;
                                case 133:
                                    var0[var2] = var1;
                                    return var0;
                            }
                        };
                        var2 = var4.bind(var7)(var2);
                        var4 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var3 = 5;
                        var3 = var7[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var7 = 'GUILD_SETTINGS_LOADED_INTEGRATIONS';
                        var3.type = var7;
                        var3.guildId = var6;
                        var3.integrations = var2;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 194:
                        return var1;
                    case 197:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot7 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot7 = var0;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.BasicApplicationRecord;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/GuildSettingsFetchActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchGuildIntegrationsApplications = var3;
    var1 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.get;
        var0 = {
            'url': null,
            'oldFormErrors': true,
            'rejectWithError': true
        };
        var5 = _closure1_slot6;
        var4 = var5.GUILD_WIDGET;
        var3 = arg0;
        var3 = var4.bind(var5)(var3);
        var0.url = var3;
        var2 = var1.bind(var2)(var0);
        var1 = var2.then;
        var0 = function(arg0) { // Environment: var0
            var4 = arg0;
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 5;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var5 = 'GUILD_SETTINGS_SET_WIDGET';
            var1.type = var5;
            var5 = var4.body;
            var5 = var5.enabled;
            var1.enabled = var5;
            var4 = var4.body;
            var4 = var4.channel_id;
            var1.channelId = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.fetchGuildEmbed = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3457, 1628, 660, 507, 806, 2]);