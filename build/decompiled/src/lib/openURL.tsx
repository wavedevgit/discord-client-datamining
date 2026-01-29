// lib/openURL.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: _openURL, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot2;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun26968: for (var _fun26968_ip = 0;;) switch (_fun26968_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun26968_ip = 121;
                            continue _fun26968
                        }
                    case 10:
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var2 = 1;
                        var3 = var1[var2];
                        var2 = undefined;
                        var3 = var4.bind(var2)(var3);
                        var3 = var3.default;
                        var3 = var3.bind(var2)(var5);
                        var3 = 3;
                        var3 = var1[var3];
                        var4 = var4.bind(var2)(var3);
                        var3 = 2;
                        var3 = var1[var3];
                        var1 = var1.paths;
                        var1 = var4.bind(var2)(var3, var1);
                        SaveGenerator(address = 79);
                    case 77:
                        return var1;
                    case 79:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun26968_ip = 118;
                            continue _fun26968
                        }
                    case 85:
                        var4 = var1.default;
                        var3 = {};
                        var6 = arg1;
                        var3.skipExtensionCheck = var6;
                        var6 = new Array(0);
                        var3.analyticsLocations = var6;
                        var3 = var4.bind(var2)(var5, var3);
                        return var2;
                    case 118:
                        return var1;
                    case 121:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot3 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot3 = var0;
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
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'lib/openURL.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: openURL, environment: var1
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3098, 5855, 1307, 2]);