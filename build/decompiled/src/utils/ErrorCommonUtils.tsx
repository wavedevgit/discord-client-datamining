// utils/ErrorCommonUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 2;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/ErrorCommonUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun96846: for (var _fun96846_ip = 0;;) switch (_fun96846_ip) {
            case 0:
                var3 = arg0;
                var0 = {};
                var11 = var0;
                var10 = var3;
                var1 = copyDataProperties(var11, var10);
                var2 = {};
                var6 = null;
                var4 = var6 == var3;
                var5 = undefined;
                var1 = undefined;
                if (var4) {
                    _fun96846_ip = 36;
                    continue _fun96846
                }
            case 30:
                var1 = var3.extra;
            case 36:
                var11 = var2;
                var10 = var1;
                var1 = copyDataProperties(var11, var10);
                var1 = {};
                var7 = _closure1_slot1;
                var4 = _closure1_slot2;
                var9 = 0;
                var4 = var4[var9];
                var4 = var7.bind(var5)(var4);
                var4 = var4._currentDispatchActionType;
                if (!(var6 == var4)) {
                    _fun96846_ip = 84;
                    continue _fun96846
                }
            case 80:
                var4 = {};
                _fun96846_ip = 119;
                continue _fun96846;
            case 84:
                var6 = {};
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var7 = var7[var9];
                var7 = var8.bind(var5)(var7);
                var7 = var7._currentDispatchActionType;
                var6.currentAction = var7;
                var4 = var6;
            case 119:
                var11 = var1;
                var10 = var4;
                var4 = copyDataProperties(var11, var10);
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 1;
                var3 = var6[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.serialize;
                var4 = var3.bind(var4)();
                var3 = 'lastFewActions';
                var1[var3] = var4;
                var11 = var2;
                var10 = var1;
                var1 = copyDataProperties(var11, var10);
                var1 = 'extra';
                var0[var1] = var2;
                return var0;
        }
    };
    var2.getUpdatedOptions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [806, 571, 2]);