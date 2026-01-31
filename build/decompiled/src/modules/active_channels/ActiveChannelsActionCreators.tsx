// modules/active_channels/ActiveChannelsActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _fetchActiveChannels, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun101544: for (var _fun101544_ip = 0;;) switch (_fun101544_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arguments[1];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun101544_ip = 378;
                            continue _fun101544
                        }
                    case 13:
                        var6 = arg0;
                        var8 = undefined;
                        if (!(var1 === var8)) {
                            _fun101544_ip = 25;
                            continue _fun101544
                        }
                    case 22:
                        var1 = 10;
                    case 25:
                        var13 = var1;
                        var7 = undefined;
                        var11 = undefined;
                        var5 = undefined;
                        SaveGenerator(address = 38);
                    case 36:
                        return var8;
                    case 38:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun101544_ip = 375;
                            continue _fun101544
                        }
                    case 47:
                        var9 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var3 = 2;
                        var2 = var2[var3];
                        var10 = var9.bind(var8)(var2);
                        var9 = var10.dispatch;
                        var2 = {};
                        var12 = 'ACTIVE_CHANNELS_FETCH_START';
                        var2.type = var12;
                        var12 = var6;
                        var2.guildId = var12;
                        var2 = var9.bind(var10)(var2);
                    case 99: // try_start_0
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var2 = 3;
                        var2 = var10[var2];
                        var2 = var9.bind(var8)(var2);
                        var10 = var2.HTTP;
                        var9 = var10.get;
                        var2 = {};
                        var15 = _closure1_slot4;
                        var14 = var15.ACTIVE_CHANNELS;
                        var12 = var6;
                        var12 = var14.bind(var15)(var12);
                        var2.url = var12;
                        var12 = {};
                        var12.channel_limit = var13;
                        var2.query = var12;
                        var12 = true;
                        var2.rejectWithError = var12;
                        var2 = var9.bind(var10)(var2);
                        SaveGenerator(address = 182);
                    case 180:
                        return var2;
                    case 182:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 9);
                        if (var9) {
                            _fun101544_ip = 286;
                            continue _fun101544
                        }
                    case 188:
                        var5 = var2;
                        var9 = var2.body;
                        var11 = var9;
                        var10 = null;
                        var12 = var10 == var9;
                        var9 = undefined;
                        if (var12) {
                            _fun101544_ip = 216;
                            continue _fun101544
                        }
                    case 210:
                        var9 = var11.channels;
                    case 216:
                        var7 = var9;
                        if (!(var10 == var9)) {
                            _fun101544_ip = 229;
                            continue _fun101544
                        }
                    case 223:
                        var11 = new Array(0);
                        _fun101544_ip = 232;
                        continue _fun101544;
                    case 229:
                        var11 = var7;
                    case 232:
                        var9 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var7 = var7[var3];
                        var10 = var9.bind(var8)(var7);
                        var9 = var10.dispatch;
                        var7 = {};
                        var12 = 'ACTIVE_CHANNELS_FETCH_SUCCESS';
                        var7.type = var12;
                        var12 = var6;
                        var7.guildId = var12;
                        var7.channels = var11;
                        var7 = var9.bind(var10)(var7);
                    case 283: // try_end0
                        return var5;
                    case 286:
                        return var2;
                    case 289: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        var7 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var3 = var9[var3];
                        var5 = var7.bind(var8)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var10 = 'ACTIVE_CHANNELS_FETCH_FAILURE';
                        var3.type = var10;
                        var3.guildId = var6;
                        var6 = 4;
                        var6 = var9[var6];
                        var6 = var7.bind(var8)(var6);
                        var7 = var6.prototype;
                        var7 = Object.create(var7, {
                            constructor: {
                                value: var6
                            }
                        });
                        var17 = var7;
                        var16 = var2;
                        var6 = new var17[var6](var16, var15);
                        var6 = var6 instanceof Object ? var6 : var7;
                        var3.error = var6;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
                    case 375:
                        return var1;
                    case 378:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
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
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/active_channels/ActiveChannelsActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: fetchActiveChannels, environment: var1
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchActiveChannels = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 806, 507, 3311, 2]);