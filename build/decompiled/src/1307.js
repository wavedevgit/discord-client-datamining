// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var0 = global;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var4;
    var0 = function arg0, arg1() {
        _fun14186: for (var _fun14186_ip = 0;;) switch (_fun14186_ip) {
            case 0:
                var4 = arg1;
                var2 = _closure1_slot0;
                var0 = global;
                var6 = var0.__METRO_GLOBAL_PREFIX__;
                var1 = var0.HermesInternal;
                var5 = var1.concat;
                var3 = '';
                var1 = '__loadBundleAsync';
                var1 = var5.bind(var3)(var6, var1);
                var2 = var2[var1];
                var3 = null;
                if (!(var3 != var2)) {
                    _fun14186_ip = 83;
                    continue _fun14186
                }
            case 55:
                var5 = var0.String;
                var1 = undefined;
                var0 = arg0;
                var0 = var5.bind(var1)(var0);
                if (!(var3 != var4)) {
                    _fun14186_ip = 83;
                    continue _fun14186
                }
            case 75:
                var0 = var4[var0];
                if (!(var3 == var0)) {
                    _fun14186_ip = 87;
                    continue _fun14186
                }
            case 83:
                var3 = undefined;
                return var3;
            case 87:
                var0 = var2.bind(var1)(var0);
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var0 = function arg0, arg1() {
        _fun14187: for (var _fun14187_ip = 0;;) switch (_fun14187_ip) {
            case 0:
                var4 = arg0;
                var _closure2_slot0 = var4;
                var3 = _closure1_slot3;
                var0 = undefined;
                var2 = arg1;
                var3 = var3.bind(var0)(var4, var2);
                var2 = function() {
                    var2 = _closure1_slot1;
                    var1 = var2.importAll;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = null;
                if (!(var1 == var3)) {
                    _fun14187_ip = 44;
                    continue _fun14187
                }
            case 38:
                var0 = var2.bind(var0)();
                _fun14187_ip = 54;
                continue _fun14187;
            case 44:
                var1 = var3.then;
                var0 = var1.bind(var3)(var2);
            case 54:
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var2 = function arg0, arg1, arg2() {
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot2;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun14192: for (var _fun14192_ip = 0;;) switch (_fun14192_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun14192_ip = 31;
                            continue _fun14192
                        }
                    case 7:
                        var4 = _closure1_slot4;
                        var3 = undefined;
                        var2 = arg0;
                        var1 = arg1;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    case 31:
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
    var3 = arg6;
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = function arg0, arg1() {
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var0 = arg1;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.unstable_importMaybeSync = var3;
    var1 = function(arg0, arg1, arg2) { // Environment: var1
        _fun14194: for (var _fun14194_ip = 0;;) switch (_fun14194_ip) {
            case 0:
                var4 = _closure1_slot3;
                var0 = undefined;
                var3 = arg0;
                var2 = arg1;
                var4 = var4.bind(var0)(var3, var2);
                var2 = null;
                if (!(var2 != var4)) {
                    _fun14194_ip = 50;
                    continue _fun14194
                }
            case 29:
                var3 = var4.then;
                var2 = function() { // Environment: var1
                    var0 = undefined;
                    return var0;
                };
                var1 = function() { // Environment: var1
                    var0 = undefined;
                    return var0;
                };
                var1 = var3.bind(var4)(var2, var1);
            case 50:
                return var0;
        }
    };
    var2.prefetch = var1;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1308]);