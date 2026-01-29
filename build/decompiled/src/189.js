// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun2645: for (var _fun2645_ip = 0;;) switch (_fun2645_ip) {
        case 0:
            var5 = require;
            var0 = dependencyMap;
            var6 = global;
            var _closure1_slot0 = var6;
            var3 = var5;
            var _closure1_slot1 = var5;
            var2 = var0;
            var _closure1_slot2 = var0;
            var0 = undefined;
            var4 = undefined;
        case 33: // try_start_0
            var6 = var3;
            var7 = var2;
            var5 = 0;
            var5 = var7[var5];
            var8 = var6.bind(var0)(var5);
            var7 = var8.hasNativeConstructor;
            var6 = function*() { // Environment: var1
                var0 = function*() { // Original name: ?anon_0_, environment: var0
                    _fun2647: for (var _fun2647_ip = 0;;) switch (_fun2647_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                            if (var1) {
                                _fun2647_ip = 12;
                                continue _fun2647
                            }
                        case 7:
                            var1 = undefined;
                            return var1;
                        case 12:
                            return var0;
                    }
                };
                return var0;
            };
            var5 = 'GeneratorFunction';
            var4 = var7.bind(var8)(var6, var5);
        case 73: // try_end0
            _fun2645_ip = 79;
            continue _fun2645;
        case 75: // catch_target0
            CatchBlockStart(arg_register = 5);
            var4 = false;
        case 79:
            if (var4) {
                _fun2645_ip = 118;
                continue _fun2645
            }
        case 82:
            var4 = var2;
            var2 = 1;
            var2 = var4[var2];
            var4 = var3.bind(var0)(var2);
            var3 = var4.polyfillGlobal;
            var2 = 'regeneratorRuntime';
            var1 = function() { // Environment: var1
                var1 = _closure1_slot0;
                var1 = delete var1.regeneratorRuntime;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 2;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            };
            var1 = var3.bind(var4)(var2, var1);
        case 118:
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [190, 126, 191]);