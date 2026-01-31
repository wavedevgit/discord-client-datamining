// modules/guild/BasicGuildActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _fetchBasicGuild, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun117476: for (var _fun117476_ip = 0;;) switch (_fun117476_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun117476_ip = 400;
                            continue _fun117476
                        }
                    case 13:
                        var2 = var5;
                        var4 = _closure1_slot4;
                        var1 = var4.getGuild;
                        var1 = var1.bind(var4)(var5);
                        var4 = null;
                        if (!(var4 == var1)) {
                            _fun117476_ip = 395;
                            continue _fun117476
                        }
                    case 42:
                        var6 = _closure1_slot5;
                        var5 = var6.getGuildOrStatus;
                        var1 = var2;
                        var1 = var5.bind(var6)(var1);
                        if (!(var4 == var1)) {
                            _fun117476_ip = 395;
                            continue _fun117476
                        }
                    case 69:
                        var5 = _closure1_slot7;
                        var4 = var5.has;
                        var1 = var2;
                        var1 = var4.bind(var5)(var1);
                        if (var1) {
                            _fun117476_ip = 395;
                            continue _fun117476
                        }
                    case 92:
                        var4 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var6 = 4;
                        var1 = var1[var6];
                        var5 = undefined;
                        var8 = var4.bind(var5)(var1);
                        var4 = var8.dispatch;
                        var1 = {};
                        var7 = 'BASIC_GUILD_FETCH';
                        var1.type = var7;
                        var7 = var2;
                        var1.guildId = var7;
                        var1 = var4.bind(var8)(var1);
                        var4 = _closure1_slot7;
                        var1 = var4.add;
                        var1 = var1.bind(var4)(var7);
                    case 157: // try_start_0 // try_start_1
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 5;
                        var1 = var7[var1];
                        var1 = var4.bind(var5)(var1);
                        var7 = var1.HTTP;
                        var4 = var7.get;
                        var1 = {};
                        var10 = _closure1_slot6;
                        var9 = var10.GUILD_BASIC;
                        var8 = var2;
                        var8 = var9.bind(var10)(var8);
                        var1.url = var8;
                        var8 = true;
                        var1.rejectWithError = var8;
                        var1 = var4.bind(var7)(var1);
                        SaveGenerator(address = 226);
                    case 224:
                        return var1;
                    case 226:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun117476_ip = 290;
                            continue _fun117476
                        }
                    case 232:
                        var9 = var1.body;
                        var7 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var4 = var4[var6];
                        var8 = var7.bind(var5)(var4);
                        var7 = var8.dispatch;
                        var4 = {};
                        var10 = 'BASIC_GUILD_FETCH_SUCCESS';
                        var4.type = var10;
                        var10 = var2;
                        var4.guildId = var10;
                        var4.guildInfo = var9;
                        var4 = var7.bind(var8)(var4);
                    case 288: // try_end0
                        _fun117476_ip = 358;
                        continue _fun117476;
                    case 290: // try_end1
                        var8 = _closure1_slot7;
                        var7 = var8.delete;
                        var4 = var2;
                        var4 = var7.bind(var8)(var4);
                        return var1;
                    case 310: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var4 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var1 = var1[var6];
                        var5 = var4.bind(var5)(var1);
                        var4 = var5.dispatch;
                        var1 = {};
                        var6 = 'BASIC_GUILD_FETCH_FAILURE';
                        var1.type = var6;
                        var6 = var2;
                        var1.guildId = var6;
                        var1 = var4.bind(var5)(var1);
                    case 358: // try_end2
                        var5 = _closure1_slot7;
                        var4 = var5.delete;
                        var1 = var2;
                        var1 = var4.bind(var5)(var1);
                        _fun117476_ip = 395;
                        continue _fun117476;
                    case 377: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register = 1);
                        var4 = _closure1_slot7;
                        var3 = var4.delete;
                        var2 = var3.bind(var4)(var2);
                        throw var1;
                    case 395:
                        var1 = undefined;
                        return var1;
                    case 400:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot8 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot8 = var0;
    var3 = global;
    var9 = var3.Object;
    var8 = var9.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var6);
    var0 = 0;
    var6 = var5[var0];
    var0 = undefined;
    var6 = var7.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.Endpoints;
    var _closure1_slot6 = var6;
    var3 = var3.Set;
    var6 = var3.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var3
        }
    });
    var13 = var6;
    var3 = new var13[var3](var12);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild/BasicGuildActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: fetchBasicGuild, environment: var1
        var0 = undefined;
        var3 = _closure1_slot8;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchBasicGuild = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1410, 6632, 660, 806, 507, 2]);