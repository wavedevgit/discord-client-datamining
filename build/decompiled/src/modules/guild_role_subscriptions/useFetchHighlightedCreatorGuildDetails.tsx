// modules/guild_role_subscriptions/useFetchHighlightedCreatorGuildDetails.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var5 = metroImportAll;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 4;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/useFetchHighlightedCreatorGuildDetails.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useFetchHighlightedCreatorGuildDetails, environment: var1
        var8 = arg0;
        var _closure2_slot0 = var8;
        var6 = _closure1_slot4;
        var3 = var6.useState;
        var1 = true;
        var1 = var3.bind(var6)(var1);
        var10 = _closure1_slot3;
        var5 = undefined;
        var9 = 2;
        var2 = var10.bind(var5)(var1, var9);
        var1 = 0;
        var3 = var2[var1];
        var7 = 1;
        var2 = var2[var7];
        var _closure2_slot1 = var2;
        var2 = var6.useState;
        var2 = var2.bind(var6)();
        var4 = var10.bind(var5)(var2, var9);
        var2 = var4[var1];
        var4 = var4[var7];
        var _closure2_slot2 = var4;
        var4 = var6.useState;
        var4 = var4.bind(var6)();
        var4 = var10.bind(var5)(var4, var9);
        var1 = var4[var1];
        var4 = var4[var7];
        var _closure2_slot3 = var4;
        var7 = var6.useCallback;
        var4 = function() { // Environment: var0
            var3 = _closure1_slot2;
            var2 = undefined;
            var1 = function*(arg0) { // Environment: var0
                var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                    _fun116477: for (var _fun116477_ip = 0;;) switch (_fun116477_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                            if (var2) {
                                _fun116477_ip = 147;
                                continue _fun116477
                            }
                        case 10:
                            var1 = arg0;
                            var5 = _closure2_slot1;
                            var4 = undefined;
                            var3 = true;
                            var3 = var5.bind(var4)(var3);
                            var3 = _closure2_slot2;
                            var3 = var3.bind(var4)(var4);
                        case 38: // try_start_0 // try_start_1
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var3 = 3;
                            var3 = var6[var3];
                            var5 = var5.bind(var4)(var3);
                            var3 = var5.fetchHighlightedCreatorGuildDetails;
                            var1 = var3.bind(var5)(var1);
                            SaveGenerator(address = 76);
                        case 74:
                            return var1;
                        case 76:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                            if (var3) {
                                _fun116477_ip = 93;
                                continue _fun116477
                            }
                        case 82:
                            var3 = _closure2_slot3;
                            var3 = var3.bind(var4)(var1);
                        case 91: // try_end0
                            _fun116477_ip = 118;
                            continue _fun116477;
                        case 93: // try_end1
                            var5 = _closure2_slot1;
                            var3 = false;
                            var3 = var5.bind(var4)(var3);
                            return var1;
                        case 107: // try_start_2 // catch_target0
                            CatchBlockStart(arg_register = 3);
                            var1 = _closure2_slot2;
                            var1 = var1.bind(var4)(var3);
                        case 118: // try_end2
                            var3 = _closure2_slot1;
                            var1 = false;
                            var1 = var3.bind(var4)(var1);
                            return var4;
                        case 132: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register = 1);
                            var3 = _closure2_slot1;
                            var2 = false;
                            var2 = var3.bind(var4)(var2);
                            throw var1;
                        case 147:
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
        var5 = var4.bind(var5)();
        var4 = new Array(0);
        var7 = var7.bind(var6)(var5, var4);
        var _closure2_slot4 = var7;
        var5 = var6.useEffect;
        var4 = new Array(2);
        var4[0] = var8;
        var4[1] = var7;
        var0 = function() { // Environment: var0
            var2 = _closure2_slot4;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var5.bind(var6)(var0, var4);
        var0 = {};
        var0.isLoading = var3;
        var0.error = var2;
        var0.highlightedCreatorDetails = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 5587, 2]);