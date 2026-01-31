// actions/PruneGuildModalActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var6 = var5[var0];
    var1 = metroImportDefault;
    var0 = undefined;
    var1 = var1.bind(var0)(var6);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.Endpoints;
    var _closure1_slot3 = var1;
    var1 = {};
    var6 = function arg0() {
        _fun104916: for (var _fun104916_ip = 0;;) switch (_fun104916_ip) {
            case 0:
                var2 = arguments[1];
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = undefined;
                if (!(var2 === var1)) {
                    _fun104916_ip = 21;
                    continue _fun104916
                }
            case 18:
                var2 = 7;
            case 21:
                var _closure2_slot1 = var2;
                var2 = arguments[2];
                var _closure2_slot2 = var2;
                var2 = _closure1_slot2;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun104918: for (var _fun104918_ip = 0;;) switch (_fun104918_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun104918_ip = 145;
                                    continue _fun104918
                                }
                            case 10:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var1 = 2;
                                var2 = var2[var1];
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                var3 = var1.HTTP;
                                var2 = var3.get;
                                var1 = {};
                                var7 = _closure1_slot3;
                                var6 = var7.GUILD_PRUNE;
                                var4 = _closure2_slot0;
                                var4 = var6.bind(var7)(var4);
                                var1.url = var4;
                                var4 = {};
                                var6 = _closure2_slot1;
                                var4.days = var6;
                                var5 = _closure2_slot2;
                                var4.include_roles = var5;
                                var1.query = var4;
                                var4 = true;
                                var1.oldFormErrors = var4;
                                var4 = false;
                                var1.rejectWithError = var4;
                                var1 = var2.bind(var3)(var1);
                                SaveGenerator(address = 120);
                            case 118:
                                return var1;
                            case 120:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun104918_ip = 142;
                                    continue _fun104918
                                }
                            case 126:
                                var2 = var1.body;
                                var2 = var2.pruned;
                                return var2;
                            case 142:
                                return var1;
                            case 145:
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var1.updateEstimate = var6;
    var6 = function arg0() {
        _fun104919: for (var _fun104919_ip = 0;;) switch (_fun104919_ip) {
            case 0:
                var2 = arguments[1];
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = undefined;
                if (!(var2 === var1)) {
                    _fun104919_ip = 21;
                    continue _fun104919
                }
            case 18:
                var2 = 7;
            case 21:
                var _closure2_slot1 = var2;
                var2 = arguments[2];
                var _closure2_slot2 = var2;
                var2 = _closure1_slot2;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun104921: for (var _fun104921_ip = 0;;) switch (_fun104921_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun104921_ip = 132;
                                    continue _fun104921
                                }
                            case 10:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var1 = 2;
                                var1 = var2[var1];
                                var2 = undefined;
                                var1 = var3.bind(var2)(var1);
                                var4 = var1.HTTP;
                                var3 = var4.get;
                                var1 = {};
                                var8 = _closure1_slot3;
                                var7 = var8.GUILD_PRUNE_V2;
                                var5 = _closure2_slot0;
                                var5 = var7.bind(var8)(var5);
                                var1.url = var5;
                                var5 = {};
                                var7 = _closure2_slot1;
                                var5.days = var7;
                                var6 = _closure2_slot2;
                                var5.include_roles = var6;
                                var1.query = var5;
                                var5 = true;
                                var1.oldFormErrors = var5;
                                var5 = false;
                                var1.rejectWithError = var5;
                                var1 = var3.bind(var4)(var1);
                                SaveGenerator(address = 120);
                            case 118:
                                return var1;
                            case 120:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun104921_ip = 129;
                                    continue _fun104921
                                }
                            case 126:
                                return var2;
                            case 129:
                                return var1;
                            case 132:
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var1.updateEstimateV2 = var6;
    var3 = function arg0, arg1, arg2() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.post;
        var0 = {};
        var5 = _closure1_slot3;
        var4 = var5.GUILD_PRUNE;
        var3 = arg0;
        var3 = var4.bind(var5)(var3);
        var0.url = var3;
        var4 = {};
        var3 = arg1;
        var4.days = var3;
        var3 = false;
        var4.compute_prune_count = var3;
        var5 = arg2;
        var4.include_roles = var5;
        var0.body = var4;
        var4 = true;
        var0.oldFormErrors = var4;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.prune = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'actions/PruneGuildModalActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 507, 2]);