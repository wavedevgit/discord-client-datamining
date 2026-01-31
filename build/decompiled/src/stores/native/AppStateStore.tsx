// stores/native/AppStateStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() {
        _fun47044: for (var _fun47044_ip = 0;;) switch (_fun47044_ip) {
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
            case 70: // try_end0
                _fun47044_ip = 74;
                continue _fun47044;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot8 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.AppState;
    var7 = 6;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.AppStates;
    var _closure1_slot5 = var7;
    var1 = var1.currentState;
    var _closure1_slot6 = var1;
    var1 = null;
    var _closure1_slot7 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun47048: for (var _fun47048_ip = 0;;) switch (_fun47048_ip) {
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
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun47048_ip = 69;
                        continue _fun47048
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun47048_ip = 105;
                    continue _fun47048;
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
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'getState';
        var4.key = var0;
        var0 = function() {
            var0 = _closure1_slot6;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'getLastActiveTime';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot7;
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'AppStateStore';
    var7.displayName = var1;
    var1 = 9;
    var1 = var5[var1];
    var9 = var4.bind(var0)(var1);
    var1 = 8;
    var8 = var5[var1];
    var1 = var5.paths;
    var9 = var9.bind(var0)(var8, var1);
    var8 = var9.then;
    var1 = function(arg0) { // Environment: var3
        var0 = arg0;
        var2 = var0.addExtraAnalyticsDecorator;
        var0 = undefined;
        var1 = function(arg0) { // Environment: var1
            var1 = _closure1_slot6;
            var0 = arg0;
            var0.client_app_state = var1;
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var1 = var8.bind(var9)(var1);
    var1 = 10;
    var1 = var5[var1];
    var12 = var6.bind(var0)(var1);
    var1 = {};
    var3 = function arg0() {
        _fun47053: for (var _fun47053_ip = 0;;) switch (_fun47053_ip) {
            case 0:
                var0 = arg0;
                var3 = _closure1_slot6;
                var2 = var0.state;
                if (!(var3 !== var2)) {
                    _fun47053_ip = 67;
                    continue _fun47053
                }
            case 19:
                var2 = var0.state;
                _closure1_slot6 = var2;
                var0 = _closure1_slot5;
                var0 = var0.ACTIVE;
                if (!(var2 === var0)) {
                    _fun47053_ip = 63;
                    continue _fun47053
                }
            case 42:
                var0 = global;
                var2 = var0.Date;
                var0 = var2.now;
                var0 = var0.bind(var2)();
                _closure1_slot7 = var0;
            case 63:
                var0 = undefined;
                return var0;
            case 67:
                var0 = false;
                return var0;
        }
    };
    var1.APP_STATE_UPDATE = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var13 = var3;
    var11 = var1;
    var1 = new var13[var7](var12, var11, var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/native/AppStateStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 27, 660, 566, 795, 1307, 806, 2]);