// modules/icymi/native/NativeICYMIActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var3 = function arg0() {
        var1 = arg0;
        var2 = var1.guildId;
        var _closure2_slot0 = var2;
        var2 = var1.channelScores;
        var _closure2_slot1 = var2;
        var1 = var1.guildScore;
        var _closure2_slot2 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun103544: for (var _fun103544_ip = 0;;) switch (_fun103544_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun103544_ip = 468;
                            continue _fun103544
                        }
                    case 10:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 2;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.icymiEnabled;
                        var2 = 'customScores';
                        var2 = var3.bind(var4)(var2);
                        if (!var2) {
                            _fun103544_ip = 465;
                            continue _fun103544
                        }
                    case 58: // try_start_0
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 3;
                        var2 = var4[var2];
                        var2 = var3.bind(var1)(var2);
                        var4 = var2.HTTP;
                        var3 = var4.put;
                        var2 = {};
                        var6 = _closure1_slot4;
                        var6 = var6.GRAVITY_CUSTOM_GUILD_SCORES;
                        var2.url = var6;
                        var6 = {};
                        var7 = _closure2_slot0;
                        var6.guild_id = var7;
                        var9 = _closure2_slot1;
                        var7 = null;
                        var9 = var7 == var9;
                        var7 = undefined;
                        if (var9) {
                            _fun103544_ip = 156;
                            continue _fun103544
                        }
                    case 133:
                        var11 = _closure2_slot1;
                        var10 = var11.map;
                        var9 = function(arg0) { // Environment: var9
                            var0 = arg0;
                            var2 = var0.channelId;
                            var1 = var0.score;
                            var0 = {};
                            var0.channel_id = var2;
                            var0.score = var1;
                            return var0;
                        };
                        var7 = var10.bind(var11)(var9);
                    case 156:
                        var6.channel_scores = var7;
                        var7 = _closure2_slot2;
                        var6.guild_score = var7;
                        var2.body = var6;
                        var6 = true;
                        var2.rejectWithError = var6;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address = 191);
                    case 189:
                        return var2;
                    case 191:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun103544_ip = 362;
                            continue _fun103544
                        }
                    case 200:
                        var4 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var3 = 4;
                        var3 = var11[var3];
                        var7 = var4.bind(var1)(var3);
                        var6 = var7.dispatch;
                        var3 = {};
                        var9 = 'ICYMI_CUSTOM_SCORES_UPDATED';
                        var3.type = var9;
                        var9 = _closure2_slot0;
                        var3.guildId = var9;
                        var9 = _closure2_slot1;
                        var3.channelScores = var9;
                        var8 = _closure2_slot2;
                        var3.guildScore = var8;
                        var3 = var6.bind(var7)(var3);
                        var3 = 5;
                        var3 = var11[var3];
                        var6 = var4.bind(var1)(var3);
                        var4 = var6.open;
                        var3 = {};
                        var7 = 'GravityGuildScore';
                        var3.key = var7;
                        var10 = _closure1_slot0;
                        var7 = 6;
                        var8 = var11[var7];
                        var8 = var10.bind(var1)(var8);
                        var9 = var8.intl;
                        var8 = var9.string;
                        var7 = var11[var7];
                        var7 = var10.bind(var1)(var7);
                        var7 = var7.t;
                        var7 = var7.OMdbs1;
                        var7 = var8.bind(var9)(var7);
                        var3.content = var7;
                        var3 = var4.bind(var6)(var3);
                    case 360: // try_end0
                        _fun103544_ip = 465;
                        continue _fun103544;
                    case 362:
                        return var2;
                    case 365: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        var3 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var2 = 5;
                        var2 = var9[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.open;
                        var2 = {};
                        var6 = 'GravityGuildScore';
                        var2.key = var6;
                        var8 = _closure1_slot0;
                        var5 = 6;
                        var6 = var9[var5];
                        var6 = var8.bind(var1)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var9[var5];
                        var5 = var8.bind(var1)(var5);
                        var5 = var5.t;
                        var5 = var5.CG4Hks;
                        var5 = var6.bind(var7)(var5);
                        var2.content = var5;
                        var2 = var3.bind(var4)(var2);
                    case 465:
                        return var1;
                    case 468:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.customScoreGuild = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/icymi/native/NativeICYMIActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 8865, 507, 806, 3139, 1234, 2]);