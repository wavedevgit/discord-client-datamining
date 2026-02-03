// modules/multi_account/StatusUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = function arg0, arg1() {
        _fun69756: for (var _fun69756_ip = 0;;) switch (_fun69756_ip) {
            case 0:
                var2 = arg0;
                var3 = arg1;
                var0 = var2.getFullYear;
                var1 = var0.bind(var2)();
                var0 = var3.getFullYear;
                var0 = var0.bind(var3)();
                var0 = var1 === var0;
                if (!var0) {
                    _fun69756_ip = 57;
                    continue _fun69756
                }
            case 33:
                var1 = var2.getMonth;
                var4 = var1.bind(var2)();
                var1 = var3.getMonth;
                var1 = var1.bind(var3)();
                var0 = var4 === var1;
            case 57:
                if (!var0) {
                    _fun69756_ip = 84;
                    continue _fun69756
                }
            case 60:
                var1 = var2.getDate;
                var2 = var1.bind(var2)();
                var1 = var3.getDate;
                var1 = var1.bind(var3)();
                var0 = var2 === var1;
            case 84:
                return var0;
        }
    };
    var _closure1_slot2 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 1;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/multi_account/StatusUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun69757: for (var _fun69757_ip = 0;;) switch (_fun69757_ip) {
            case 0:
                var0 = global;
                var3 = var0.Date;
                var2 = var0.Number;
                var5 = undefined;
                var1 = arg0;
                var14 = var2.bind(var5)(var1);
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var15 = var2;
                var1 = new var15[var3](var14, var13);
                var8 = var1 instanceof Object ? var1 : var2;
                var1 = _closure1_slot2;
                var2 = var0.Date;
                var4 = var2.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var2
                    }
                });
                var15 = var4;
                var2 = new var15[var2](var14);
                var2 = var2 instanceof Object ? var2 : var4;
                var4 = var1.bind(var5)(var8, var2);
                var0 = var0.Date;
                var2 = var0.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var0
                    }
                });
                var15 = var2;
                var0 = new var15[var0](var14);
                var0 = var0 instanceof Object ? var0 : var2;
                var6 = var0.setDate;
                var2 = var0.getDate;
                var2 = var2.bind(var0)();
                var10 = 1;
                var2 = var2 + var10;
                var2 = var6.bind(var0)(var2);
                var0 = var1.bind(var5)(var8, var0);
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var7 = 0;
                var1 = var1[var7];
                var1 = var2.bind(var5)(var1);
                var1 = var1.intl;
                var6 = var1.data;
                var2 = var6.formatTime;
                var1 = {};
                var9 = 'short';
                var1.format = var9;
                var2 = var2.bind(var6)(var8, var1);
                var1 = {};
                if (var4) {
                    _fun69757_ip = 352;
                    continue _fun69757
                }
            case 202:
                if (var0) {
                    _fun69757_ip = 274;
                    continue _fun69757
                }
            case 205:
                var0 = 'date';
                var1.kind = var0;
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var7];
                var0 = var4.bind(var5)(var0);
                var0 = var0.intl;
                var6 = var0.data;
                var4 = var6.formatDate;
                var0 = {};
                var0.dateStyle = var9;
                var0 = var4.bind(var6)(var8, var0);
                var1.dateString = var0;
                var1.timeString = var2;
                var0 = var1;
                _fun69757_ip = 350;
                continue _fun69757;
            case 274:
                var4 = 'tomorrow';
                var1.kind = var4;
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var7];
                var4 = var6.bind(var5)(var4);
                var4 = var4.intl;
                var9 = var4.data;
                var8 = var9.formatRelativeTime;
                var6 = {};
                var4 = 'auto';
                var6.numeric = var4;
                var4 = 'day';
                var4 = var8.bind(var9)(var10, var4, var6);
                var1.dateString = var4;
                var1.timeString = var2;
                var0 = var1;
            case 350:
                _fun69757_ip = 428;
                continue _fun69757;
            case 352:
                var4 = 'today';
                var1.kind = var4;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var7];
                var3 = var4.bind(var5)(var3);
                var3 = var3.intl;
                var6 = var3.data;
                var5 = var6.formatRelativeTime;
                var4 = {};
                var3 = 'auto';
                var4.numeric = var3;
                var3 = 'day';
                var3 = var5.bind(var6)(var7, var3, var4);
                var1.dateString = var3;
                var1.timeString = var2;
                var0 = var1;
            case 428:
                return var0;
        }
    };
    var2.getStatusExpiryParts = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1234, 2]);