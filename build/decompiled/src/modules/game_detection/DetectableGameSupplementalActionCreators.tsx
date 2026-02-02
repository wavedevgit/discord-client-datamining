// modules/game_detection/DetectableGameSupplementalActionCreators.tsx
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
    var3 = 'modules/game_detection/DetectableGameSupplementalActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun42827: for (var _fun42827_ip = 0;;) switch (_fun42827_ip) {
            case 0:
                var3 = arg0;
                var1 = arguments[1];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun42827_ip = 24;
                    continue _fun42827
                }
            case 12:
                var2 = {};
                var4 = false;
                var2.forceFetch = var4;
                var1 = var2;
            case 24:
                var1 = var1.forceFetch;
                var5 = var3;
                if (var1) {
                    _fun42827_ip = 61;
                    continue _fun42827
                }
            case 36:
                var2 = var3.filter;
                var1 = _closure1_slot4;
                var1 = var1.canFetch;
                var5 = var2.bind(var3)(var1);
            case 61:
                var1 = var5.length;
                var4 = 0;
                if (!(var4 !== var1)) {
                    _fun42827_ip = 171;
                    continue _fun42827
                }
            case 72:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 3;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var6 = 'DETECTABLE_GAME_SUPPLEMENTAL_FETCH';
                var1.type = var6;
                var1.applicationIds = var5;
                var1 = var2.bind(var3)(var1);
                var1 = function() { // Environment: var1
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*(arg0) { // Environment: var0
                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                            _fun42830: for (var _fun42830_ip = 0;;) switch (_fun42830_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun42830_ip = 232;
                                        continue _fun42830
                                    }
                                case 10:
                                    var4 = arg0;
                                case 13: // try_start_0
                                    var3 = _closure1_slot0;
                                    var5 = _closure1_slot2;
                                    var1 = 4;
                                    var1 = var5[var1];
                                    var5 = undefined;
                                    var1 = var3.bind(var5)(var1);
                                    var6 = var1.HTTP;
                                    var3 = var6.get;
                                    var1 = {};
                                    var7 = _closure1_slot5;
                                    var7 = var7.APPLICATIONS_GAMES_SUPPLEMENTAL;
                                    var1.url = var7;
                                    var7 = {};
                                    var8 = var4;
                                    var7.application_ids = var8;
                                    var1.query = var7;
                                    var7 = true;
                                    var1.rejectWithError = var7;
                                    var1 = var3.bind(var6)(var1);
                                    SaveGenerator(address = 94);
                                case 92:
                                    return var1;
                                case 94:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun42830_ip = 170;
                                        continue _fun42830
                                    }
                                case 100:
                                    var3 = _closure1_slot1;
                                    var6 = _closure1_slot2;
                                    var2 = 3;
                                    var2 = var6[var2];
                                    var5 = var3.bind(var5)(var2);
                                    var3 = var5.dispatch;
                                    var2 = {};
                                    var6 = 'DETECTABLE_GAME_SUPPLEMENTAL_FETCH_SUCCESS';
                                    var2.type = var6;
                                    var6 = var4;
                                    var2.applicationIds = var6;
                                    var6 = var1.body;
                                    var6 = var6.supplemental_game_data;
                                    var2.supplementalGameData = var6;
                                    var2 = var3.bind(var5)(var2);
                                case 168: // try_end0
                                    _fun42830_ip = 227;
                                    continue _fun42830;
                                case 170:
                                    return var1;
                                case 173: // catch_target0
                                    CatchBlockStart(arg_register = 1);
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var1 = 3;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var3 = var3.bind(var1)(var2);
                                    var2 = var3.dispatch;
                                    var1 = {};
                                    var5 = 'DETECTABLE_GAME_SUPPLEMENTAL_FETCH_FAILURE';
                                    var1.type = var5;
                                    var1.applicationIds = var4;
                                    var1 = var2.bind(var3)(var1);
                                case 227:
                                    var1 = undefined;
                                    return var1;
                                case 232:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    return var0;
                };
                var3 = var1.bind(var0)();
                var1 = var5.length;
                var2 = 20;
                if (!(var1 > var4)) {
                    _fun42827_ip = 171;
                    continue _fun42827
                }
            case 145:
                var1 = var5.splice;
                var1 = var1.bind(var5)(var4, var2);
                var1 = var3.bind(var0)(var1);
                var1 = var5.length;
                if (var1 > var4) {
                    _fun42827_ip = 145;
                    continue _fun42827
                }
            case 171:
                return var0;
        }
    };
    var2.fetchDetectableGamesSupplemental = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 4636, 660, 806, 507, 2]);