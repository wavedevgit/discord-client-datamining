// modules/guild_tag/GuildTagActionCreators.tsx
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
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun56860: for (var _fun56860_ip = 0;;) switch (_fun56860_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun56860_ip = 211;
                            continue _fun56860
                        }
                    case 10:
                        var9 = arg0;
                        var8 = arg1;
                        var5 = undefined;
                        var2 = undefined;
                    case 20: // try_start_0
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 3;
                        var1 = var4[var1];
                        var1 = var3.bind(var5)(var1);
                        var4 = var1.HTTP;
                        var3 = var4.put;
                        var1 = {};
                        var6 = _closure1_slot5;
                        var6 = var6.USER_SET_GUILD_IDENTITY;
                        var1.url = var6;
                        var6 = {};
                        var6.identity_guild_id = var9;
                        var6.identity_enabled = var8;
                        var1.body = var6;
                        var6 = false;
                        var1.rejectWithError = var6;
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 101);
                    case 99:
                        return var1;
                    case 101:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun56860_ip = 203;
                            continue _fun56860
                        }
                    case 107:
                        var2 = var1;
                        var3 = var1.ok;
                        if (!var3) {
                            _fun56860_ip = 200;
                            continue _fun56860
                        }
                    case 119:
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 4;
                        var3 = var6[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'CURRENT_USER_UPDATE';
                        var3.type = var6;
                        var6 = {};
                        var8 = _closure1_slot4;
                        var7 = var8.getCurrentUser;
                        var10 = var7.bind(var8)();
                        var11 = var6;
                        var7 = copyDataProperties(var11, var10);
                        var7 = var2;
                        var10 = var7.body;
                        var11 = var6;
                        var7 = copyDataProperties(var11, var10);
                        var3.user = var6;
                        var3 = var4.bind(var5)(var3);
                    case 200: // try_end0
                        return var2;
                    case 203:
                        return var1;
                    case 206: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        return var1;
                    case 211:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot6 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot6 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_tag/GuildTagActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.adoptGuildIdentity = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1613, 660, 507, 806, 2]);