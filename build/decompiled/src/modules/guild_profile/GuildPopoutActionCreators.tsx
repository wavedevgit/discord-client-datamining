// modules/guild_profile/GuildPopoutActionCreators.tsx
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
                _fun86984: for (var _fun86984_ip = 0;;) switch (_fun86984_ip) {
                    case 0:
                        StartGenerator();
                        var8 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun86984_ip = 258;
                            continue _fun86984
                        }
                    case 13:
                        var5 = var8;
                        var6 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var4 = 2;
                        var3 = var1[var4];
                        var1 = undefined;
                        var7 = var6.bind(var1)(var3);
                        var6 = var7.dispatch;
                        var3 = {};
                        var9 = 'GUILD_POPOUT_FETCH_START';
                        var3.type = var9;
                        var3.guildId = var8;
                        var3 = var6.bind(var7)(var3);
                    case 67: // try_start_0
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var3 = 3;
                        var3 = var7[var3];
                        var3 = var6.bind(var1)(var3);
                        var7 = var3.HTTP;
                        var6 = var7.get;
                        var3 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': true
                        };
                        var10 = _closure1_slot4;
                        var9 = var10.GUILD_PREVIEW;
                        var8 = var5;
                        var8 = var9.bind(var10)(var8);
                        var3.url = var8;
                        var3 = var6.bind(var7)(var3);
                        SaveGenerator(address = 144);
                    case 142:
                        return var3;
                    case 144:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 6);
                        if (var6) {
                            _fun86984_ip = 207;
                            continue _fun86984
                        }
                    case 150:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var4];
                        var8 = var7.bind(var1)(var6);
                        var7 = var8.dispatch;
                        var6 = {};
                        var9 = 'GUILD_POPOUT_FETCH_SUCCESS';
                        var6.type = var9;
                        var9 = var5;
                        var6.guildId = var9;
                        var9 = var3.body;
                        var6.guild = var9;
                        var6 = var7.bind(var8)(var6);
                    case 205: // try_end0
                        _fun86984_ip = 255;
                        continue _fun86984;
                    case 207:
                        return var3;
                    case 210: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var4];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'GUILD_POPOUT_FETCH_FAILURE';
                        var2.type = var6;
                        var2.guildId = var5;
                        var2 = var3.bind(var4)(var2);
                    case 255:
                        return var1;
                    case 258:
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
    var3 = var3.Endpoints;
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_profile/GuildPopoutActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchGuildForPopout = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 806, 507, 2]);