// modules/activities/stores/RecentUserActivityStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() {
        _fun95270: for (var _fun95270_ip = 0;;) switch (_fun95270_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun95270_ip = 76;
                continue _fun95270;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot6 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var3 = function arg0() {
        _fun95273: for (var _fun95273_ip = 0;;) switch (_fun95273_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.userActivities;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun95273_ip = 69;
                    continue _fun95273
                }
            case 15:
                var0 = global;
                var2 = var0.Set;
                var1 = var3.map;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.application_id;
                    return var0;
                };
                var4 = var1.bind(var3)(var0);
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var5 = var1;
                var0 = new var5[var2](var4, var3);
                var1 = var0 instanceof Object ? var0 : var1;
                _closure1_slot5 = var1;
            case 69:
                var0 = undefined;
                return var0;
        }
    };
    var6 = global;
    var9 = var6.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var7);
    var0 = 0;
    var7 = var4[var0];
    var0 = undefined;
    var7 = var5.bind(var0)(var7);
    var _closure1_slot0 = var7;
    var7 = 1;
    var7 = var4[var7];
    var7 = var5.bind(var0)(var7);
    var _closure1_slot1 = var7;
    var7 = 2;
    var7 = var4[var7];
    var7 = var5.bind(var0)(var7);
    var _closure1_slot2 = var7;
    var7 = 3;
    var7 = var4[var7];
    var7 = var5.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 4;
    var7 = var4[var7];
    var7 = var5.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var6 = var6.Set;
    var7 = var6.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var6
        }
    });
    var13 = var7;
    var6 = new var13[var6](var12);
    var6 = var6 instanceof Object ? var6 : var7;
    var _closure1_slot5 = var6;
    var6 = 5;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var6 = var6.Store;
    var1 = function(arg0) { // Environment: var1
        var3 = function() {
            _fun95276: for (var _fun95276_ip = 0;;) switch (_fun95276_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot6;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun95276_ip = 69;
                        continue _fun95276
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun95276_ip = 105;
                    continue _fun95276;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot4;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot1;
        var4 = {};
        var5 = 'currentUserApplicationIds';
        var4.key = var5;
        var0 = function() {
            var0 = _closure1_slot5;
            return var0;
        };
        var4.get = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'RecentUserActivityStore';
    var6.displayName = var1;
    var1 = 6;
    var1 = var4[var1];
    var12 = var5.bind(var0)(var1);
    var1 = {};
    var1.CONNECTION_OPEN_SUPPLEMENTAL = var3;
    var1.CONNECTION_OPEN_STATE_UPDATE = var3;
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var13 = var3;
    var11 = var1;
    var1 = new var13[var6](var12, var11, var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 7;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/stores/RecentUserActivityStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 566, 806, 2]);