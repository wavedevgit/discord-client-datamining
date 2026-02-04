// modules/parent_tools/useIsInRestrictedHours.tsx
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
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/parent_tools/useIsInRestrictedHours.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var0 = _closure1_slot2;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var0
            _fun117945: for (var _fun117945_ip = 0;;) switch (_fun117945_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var0 = 2;
                    var0 = var3[var0];
                    var5 = undefined;
                    var3 = var2.bind(var5)(var0);
                    var2 = var3.getIsFamilyCenterV3Enabled;
                    var0 = {};
                    var4 = 'useIsInRestrictedHours';
                    var0.location = var4;
                    var0 = var2.bind(var3)(var0);
                    var2 = !var0;
                    var0 = !var2;
                    if (var2) {
                        _fun117945_ip = 119;
                        continue _fun117945
                    }
                case 57:
                    var2 = _closure1_slot2;
                    var1 = var2.getCurrentUser;
                    var3 = var1.bind(var2)();
                    var1 = null;
                    var4 = var1 == var3;
                    var2 = undefined;
                    if (var4) {
                        _fun117945_ip = 106;
                        continue _fun117945
                    }
                case 81:
                    var4 = var3.restrictedSchedule;
                    var3 = var1 == var4;
                    var2 = undefined;
                    if (var3) {
                        _fun117945_ip = 106;
                        continue _fun117945
                    }
                case 96:
                    var3 = var4.isInRestrictedHours;
                    var2 = var3.bind(var4)();
                case 106:
                    var1 = var1 != var2;
                    if (!var1) {
                        _fun117945_ip = 116;
                        continue _fun117945
                    }
                case 113:
                    var1 = var2;
                case 116:
                    var0 = var1;
                case 119:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1621, 566, 4659, 2]);