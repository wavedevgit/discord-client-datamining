// modules/premium/native/useStoreConnectionErrorAlert.tsx
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
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/native/useStoreConnectionErrorAlert.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 2;
        var3 = var3[var0];
        var0 = undefined;
        var6 = var4.bind(var0)(var3);
        var5 = var6.useStateFromStores;
        var3 = _closure1_slot4;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() { // Environment: var1
            var1 = _closure1_slot4;
            var0 = var1.hasConnectionError;
            var0 = var0.bind(var1)();
            return var0;
        };
        var5 = var5.bind(var6)(var4, var3);
        var _closure2_slot0 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useEffect;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() { // Environment: var1
            _fun57619: for (var _fun57619_ip = 0;;) switch (_fun57619_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    if (!var0) {
                        _fun57619_ip = 156;
                        continue _fun57619
                    }
                case 13:
                    var1 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var0 = 3;
                    var0 = var8[var0];
                    var7 = undefined;
                    var2 = var1.bind(var7)(var0);
                    var1 = var2.show;
                    var0 = {};
                    var6 = _closure1_slot0;
                    var3 = 4;
                    var4 = var8[var3];
                    var4 = var6.bind(var7)(var4);
                    var9 = var4.intl;
                    var5 = var9.string;
                    var4 = var8[var3];
                    var4 = var6.bind(var7)(var4);
                    var4 = var4.t;
                    var4 = var4["U+H+kd"];
                    var4 = var5.bind(var9)(var4);
                    var0.title = var4;
                    var4 = var8[var3];
                    var4 = var6.bind(var7)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var3 = var8[var3];
                    var3 = var6.bind(var7)(var3);
                    var3 = var3.t;
                    var3 = var3.Q9OYlM;
                    var3 = var4.bind(var5)(var3);
                    var0.body = var3;
                    var0 = var1.bind(var2)(var0);
                case 156:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4611, 566, 4003, 1234, 2]);