// modules/game_update/GameUpdateActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _fetchGameUpdate, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun118669: for (var _fun118669_ip = 0;;) switch (_fun118669_ip) {
                    case 0:
                        StartGenerator();
                        var9 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun118669_ip = 374;
                            continue _fun118669
                        }
                    case 13:
                        var8 = arg0;
                        var6 = var9;
                        var5 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var4 = 2;
                        var3 = var1[var4];
                        var1 = undefined;
                        var7 = var5.bind(var1)(var3);
                        var5 = var7.dispatch;
                        var3 = {};
                        var10 = 'GAME_UPDATE_FETCH_START';
                        var3.type = var10;
                        var3.id = var9;
                        var3 = var5.bind(var7)(var3);
                    case 70: // try_start_0
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var3 = 3;
                        var3 = var7[var3];
                        var3 = var5.bind(var1)(var3);
                        var7 = var3.HTTP;
                        var5 = var7.get;
                        var3 = {};
                        var11 = _closure1_slot4;
                        var10 = var11.GAME_UPDATE;
                        var9 = var8;
                        var8 = var6;
                        var8 = var10.bind(var11)(var9, var8);
                        var3.url = var8;
                        var8 = true;
                        var3.rejectWithError = var8;
                        var3 = var5.bind(var7)(var3);
                        SaveGenerator(address = 143);
                    case 141:
                        return var3;
                    case 143:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun118669_ip = 319;
                            continue _fun118669
                        }
                    case 152:
                        var7 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var5 = var5[var4];
                        var8 = var7.bind(var1)(var5);
                        var7 = var8.dispatch;
                        var5 = {};
                        var9 = 'GAME_UPDATE_FETCH_SUCCESS';
                        var5.type = var9;
                        var9 = var6;
                        var5.id = var9;
                        var9 = {};
                        var10 = var3.body;
                        var10 = var10.id;
                        var9.id = var10;
                        var10 = var3.body;
                        var10 = var10.update_title;
                        var9.updateTitle = var10;
                        var10 = var3.body;
                        var10 = var10.update_description;
                        var9.updateDescription = var10;
                        var10 = var3.body;
                        var10 = var10.images;
                        var9.images = var10;
                        var10 = var3.body;
                        var10 = var10.tags;
                        var9.tags = var10;
                        var10 = var3.body;
                        var10 = var10.platforms;
                        var9.platforms = var10;
                        var10 = var3.body;
                        var10 = var10.start_date;
                        var9.startDate = var10;
                        var5.update = var9;
                        var5 = var7.bind(var8)(var5);
                    case 317: // try_end0
                        _fun118669_ip = 371;
                        continue _fun118669;
                    case 319:
                        return var3;
                    case 322: // catch_target0
                        CatchBlockStart(arg_register = 5);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var4];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var7 = 'GAME_UPDATE_FETCH_FAILURE';
                        var2.type = var7;
                        var2.id = var6;
                        var2.error = var5;
                        var2 = var3.bind(var4)(var2);
                    case 371:
                        return var1;
                    case 374:
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
    var3 = 'modules/game_update/GameUpdateActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: fetchGameUpdate, environment: var1
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchGameUpdate = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 806, 507, 2]);