// stores/PremiumPromoStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = function() {
        _fun96087: for (var _fun96087_ip = 0;;) switch (_fun96087_ip) {
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
                _fun96087_ip = 76;
                continue _fun96087;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var4[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 6;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 7;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.Millis;
    var6 = var1.DAY;
    var1 = 180;
    var1 = var1 * var6;
    var _closure1_slot9 = var1;
    var1 = false;
    var _closure1_slot10 = var1;
    var1 = 9;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun96091: for (var _fun96091_ip = 0;;) switch (_fun96091_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun96091_ip = 69;
                        continue _fun96091
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun96091_ip = 105;
                    continue _fun96091;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
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
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var3 = this;
            var2 = var3.waitFor;
            var1 = _closure1_slot8;
            var0 = _closure1_slot7;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'isEligible';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot10;
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'PremiumPromoStore';
    var6.displayName = var1;
    var1 = 10;
    var1 = var4[var1];
    var10 = var5.bind(var0)(var1);
    var1 = {};
    var3 = function() {
        _fun96094: for (var _fun96094_ip = 0;;) switch (_fun96094_ip) {
            case 0:
                var1 = _closure1_slot10;
                var3 = _closure1_slot8;
                var0 = var3.getFriendIDs;
                var0 = var0.bind(var3)();
                var3 = var0.length;
                var0 = 10;
                var0 = var3 >= var0;
                if (!var0) {
                    _fun96094_ip = 112;
                    continue _fun96094
                }
            case 36:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 8;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.extractTimestamp;
                var6 = _closure1_slot7;
                var3 = var6.getId;
                var3 = var3.bind(var6)();
                var4 = var4.bind(var5)(var3);
                var3 = global;
                var5 = var3.Date;
                var3 = var5.now;
                var5 = var3.bind(var5)();
                var3 = _closure1_slot9;
                var3 = var5 - var3;
                var0 = var4 < var3;
            case 112:
                _closure1_slot10 = var0;
                var0 = var1 !== var0;
                return var0;
        }
    };
    var1.CONNECTION_OPEN = var3;
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var11 = var3;
    var9 = var1;
    var1 = new var11[var6](var10, var9, var8);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 11;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/PremiumPromoStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1216, 3100, 667, 21, 566, 806, 2]);