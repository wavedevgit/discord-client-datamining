// modules/create_guild/CreateGuildActionCreators.tsx
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
        var2 = function*(arg0, arg1, arg2, arg3, arg4) { // Environment: var2
            var0 = function*(arg0, arg1, arg2, arg3, arg4) { // Original name: ?anon_0_, environment: var0
                _fun71429: for (var _fun71429_ip = 0;;) switch (_fun71429_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun71429_ip = 308;
                            continue _fun71429
                        }
                    case 10:
                        var11 = arg0;
                        var8 = arg1;
                        var7 = arg2;
                        var6 = arg3;
                        var10 = arg4;
                    case 25: // try_start_0
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 2;
                        var1 = var3[var1];
                        var9 = undefined;
                        var3 = var2.bind(var9)(var1);
                        var2 = var3.post;
                        var1 = {};
                        var4 = _closure1_slot4;
                        var4 = var4.GUILDS;
                        var1.url = var4;
                        var4 = {};
                        var4.name = var11;
                        var4.icon = var8;
                        var8 = var7;
                        var11 = var8.channels;
                        var4.channels = var11;
                        var11 = var8.system_channel_id;
                        var4.system_channel_id = var11;
                        var11 = var8.roles;
                        var4.roles = var11;
                        var8 = var8.code;
                        var4.guild_template_code = var8;
                        var10 = !var10;
                        var8 = !var10;
                        if (!var10) {
                            _fun71429_ip = 139;
                            continue _fun71429
                        }
                    case 137:
                        var8 = undefined;
                    case 139:
                        var4.staff_only = var8;
                        var1.body = var4;
                        var4 = {};
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var5 = 3;
                        var5 = var10[var5];
                        var5 = var8.bind(var9)(var5);
                        var5 = var5.NetworkActionNames;
                        var5 = var5.GUILD_CREATE;
                        var4.event = var5;
                        var5 = {};
                        var7 = var7.id;
                        var5.template_name = var7;
                        var5.is_community_intent = var6;
                        var4.properties = var5;
                        var1.trackedActionData = var4;
                        var4 = false;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 233);
                    case 231:
                        return var1;
                    case 233:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun71429_ip = 247;
                            continue _fun71429
                        }
                    case 239:
                        var2 = var1.body;
                    case 244: // try_end0
                        return var2;
                    case 247:
                        return var1;
                    case 250: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var2);
                        var1 = var1.APIError;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var13 = var2;
                        var12 = var3;
                        var1 = new var13[var1](var12, var11);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 308:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot5 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot5 = var0;
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
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.Endpoints;
    var _closure1_slot4 = var1;
    var1 = {};
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var1.createGuildFromTemplate = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/create_guild/CreateGuildActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 4491, 481, 3311, 2]);