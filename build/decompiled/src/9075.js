// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AccessibilityInfo;
    var _closure1_slot5 = var3;
    var1 = function() {
        var3 = _closure1_slot0;
        var4 = _closure1_slot1;
        var1 = 4;
        var1 = var4[var1];
        var7 = undefined;
        var3 = var3.bind(var7)(var1);
        var1 = var3.useNavigation;
        var5 = var1.bind(var3)();
        var _closure2_slot0 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useState;
        var1 = 0;
        var6 = var3.bind(var4)(var1);
        var3 = _closure1_slot3;
        var2 = 2;
        var3 = var3.bind(var7)(var6, var2);
        var2 = var3[var1];
        var1 = 1;
        var1 = var3[var1];
        var _closure2_slot1 = var1;
        var3 = var4.useEffect;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            var3 = _closure2_slot0;
            var2 = var3.addListener;
            var4 = _closure1_slot2;
            var1 = undefined;
            var0 = function*() { // Environment: var0
                var0 = function*() { // Original name: ?anon_0_, environment: var0
                    _fun72708: for (var _fun72708_ip = 0;;) switch (_fun72708_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                            if (var1) {
                                _fun72708_ip = 68;
                                continue _fun72708
                            }
                        case 7:
                            var2 = _closure1_slot5;
                            var1 = var2.isScreenReaderEnabled;
                            var1 = var1.bind(var2)();
                            SaveGenerator(address = 28);
                        case 26:
                            return var1;
                        case 28:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                            if (var2) {
                                _fun72708_ip = 65;
                                continue _fun72708
                            }
                        case 34:
                            if (!var1) {
                                _fun72708_ip = 60;
                                continue _fun72708
                            }
                        case 37:
                            var4 = _closure2_slot1;
                            var3 = undefined;
                            var2 = function(arg0) { // Environment: var2
                                var1 = arg0;
                                var0 = 1;
                                var0 = var1 + var0;
                                return var0;
                            };
                            var2 = var4.bind(var3)(var2);
                        case 60:
                            var2 = undefined;
                            return var2;
                        case 65:
                            return var1;
                        case 68:
                            return var0;
                    }
                };
                return var0;
            };
            var1 = var4.bind(var1)(var0);
            var0 = 'focus';
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var0 = var3.bind(var4)(var0, var1);
        var0 = global;
        var0 = var0.HermesInternal;
        var1 = var0.concat;
        var0 = 'key-';
        var0 = var1.bind(var0)(var2);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 1470]);