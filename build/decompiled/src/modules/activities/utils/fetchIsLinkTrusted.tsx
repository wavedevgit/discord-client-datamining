// modules/activities/utils/fetchIsLinkTrusted.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot2;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun98031: for (var _fun98031_ip = 0;;) switch (_fun98031_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun98031_ip = 167;
                            continue _fun98031
                        }
                    case 13:
                        var5 = var1;
                        var6 = arg1;
                        var4 = undefined;
                        if (!(var4 !== var1)) {
                            _fun98031_ip = 162;
                            continue _fun98031
                        }
                    case 28: // try_start_0
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var1 = 2;
                        var1 = var3[var1];
                        var1 = var2.bind(var4)(var1);
                        var3 = var1.HTTP;
                        var2 = var3.get;
                        var1 = {};
                        var8 = _closure1_slot3;
                        var7 = var8.ACTIVITIES_TRUSTED_LINKS;
                        var5 = var7.bind(var8)(var5);
                        var1.url = var5;
                        var5 = false;
                        var1.rejectWithError = var5;
                        var5 = {};
                        var5.url = var6;
                        var1.query = var5;
                        var5 = 500;
                        var1.timeout = var5;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 119);
                    case 117:
                        return var1;
                    case 119:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun98031_ip = 152;
                            continue _fun98031
                        }
                    case 125:
                        var2 = var1.body;
                        var3 = global;
                        var3 = var3.Boolean;
                        var2 = var2.trusted;
                        var2 = var3.bind(var4)(var2);
                    case 149: // try_end0
                        return var2;
                    case 152:
                        return var1;
                    case 155: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var1 = false;
                        return var1;
                    case 162:
                        var1 = false;
                        return var1;
                    case 167:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot4 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot4 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg2;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/utils/fetchIsLinkTrusted.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchIsLinkTrusted = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 507, 2]);