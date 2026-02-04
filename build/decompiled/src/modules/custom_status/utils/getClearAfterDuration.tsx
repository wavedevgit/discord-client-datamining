// modules/custom_status/utils/getClearAfterDuration.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.ClearAfterValues;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/custom_status/utils/getClearAfterDuration.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun57342: for (var _fun57342_ip = 0;;) switch (_fun57342_ip) {
            case 0:
                var0 = arg0;
                var2 = _closure1_slot2;
                var2 = var2.TODAY;
                if (!(var0 !== var2)) {
                    _fun57342_ip = 67;
                    continue _fun57342
                }
            case 20:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 1;
                var1 = var3[var1];
                var4 = undefined;
                var3 = var2.bind(var4)(var1);
                var2 = 'number';
                var1 = typeof var0;
                var2 = var2 === var1;
                var1 = 'Invalid custom status clear timeout';
                var1 = var3.bind(var4)(var2, var1);
                return var0;
            case 67:
                var0 = global;
                var1 = var0.Date;
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var9 = var2;
                var1 = new var9[var1](var8);
                var2 = var1 instanceof Object ? var1 : var2;
                var5 = var0.Date;
                var0 = var2.getFullYear;
                var8 = var0.bind(var2)();
                var0 = var2.getMonth;
                var7 = var0.bind(var2)();
                var0 = var2.getDate;
                var1 = var0.bind(var2)();
                var0 = 1;
                var6 = var1 + var0;
                var1 = var5.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var9 = var1;
                var0 = new var9[var5](var8, var7, var6, var5);
                var1 = var0 instanceof Object ? var0 : var1;
                var0 = var1.getTime;
                var1 = var0.bind(var1)();
                var0 = var2.getTime;
                var0 = var0.bind(var2)();
                var0 = var1 - var0;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6984, 44, 2]);