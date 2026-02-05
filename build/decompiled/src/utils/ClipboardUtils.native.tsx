// utils/ClipboardUtils.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot2;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun47305: for (var _fun47305_ip = 0;;) switch (_fun47305_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun47305_ip = 93;
                            continue _fun47305
                        }
                    case 10:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var2 = 1;
                        var3 = var3[var2];
                        var2 = undefined;
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.setString;
                        var3 = arg0;
                        var3 = var4.bind(var5)(var3);
                        var3 = null;
                        if (!(var3 != var1)) {
                            _fun47305_ip = 59;
                            continue _fun47305
                        }
                    case 55:
                        var1 = var1.bind(var2)();
                    case 59:
                        var1 = global;
                        var3 = var1.Promise;
                        var1 = var3.resolve;
                        var1 = var1.bind(var3)();
                        SaveGenerator(address = 81);
                    case 79:
                        return var1;
                    case 81:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun47305_ip = 90;
                            continue _fun47305
                        }
                    case 87:
                        return var2;
                    case 90:
                        return var1;
                    case 93:
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
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var5[var0];
    var0 = undefined;
    var4 = var6.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 2;
    var5 = var5[var4];
    var4 = arg1;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/ClipboardUtils.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2.SUPPORTS_COPY = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.copy = var3;
    var1 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var0 = var1.getString;
        var0 = var0.bind(var1)();
        return var0;
    };
    var2.getString = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 5296, 2]);