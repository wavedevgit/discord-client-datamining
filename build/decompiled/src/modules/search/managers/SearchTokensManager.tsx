// modules/search/managers/SearchTokensManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun114787: for (var _fun114787_ip = 0;;) switch (_fun114787_ip) {
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
                _fun114787_ip = 76;
                continue _fun114787;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
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
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.subscribeToIntlLoadingSuccess;
    var _closure1_slot7 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function(arg0) { // Original name: SearchTokensManager, environment: var5
            _fun114791: for (var _fun114791_ip = 0;;) switch (_fun114791_ip) {
                case 0:
                    var3 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var6 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var4 = undefined;
                    var6 = var6.bind(var4)(var3, var1);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var4)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun114791_ip = 84;
                        continue _fun114791
                    }
                case 71:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var3, var9);
                    _fun114791_ip = 118;
                    continue _fun114791;
                case 84:
                    var5 = global;
                    var7 = var5.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var4)(var3);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 118:
                    var0 = var1.bind(var4)(var3, var0);
                    var1 = {};
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 6;
                    var6 = var5[var2];
                    var6 = var3.bind(var4)(var6);
                    var6 = var6.refreshSearchTokens;
                    var1.USER_SETTINGS_PROTO_UPDATE = var6;
                    var2 = var5[var2];
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.refreshSearchTokens;
                    var1.POST_CONNECTION_OPEN = var2;
                    var0.actions = var1;
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
        var0 = '_initialize';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var2 = _closure1_slot7;
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 6;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var3.bind(var0)(var1);
            var1 = var1.refreshSearchTokens;
            var2 = var2.bind(var0)(var1);
            var1 = this;
            var1._unsubscribeIntlLoadingStore = var2;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = '_terminate';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            _fun114793: for (var _fun114793_ip = 0;;) switch (_fun114793_ip) {
                case 0:
                    var2 = this;
                    var1 = var2._unsubscribeIntlLoadingStore;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun114793_ip = 25;
                        continue _fun114793
                    }
                case 15:
                    var0 = var1.call;
                    var0 = var0.bind(var1)(var2);
                case 25:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/managers/SearchTokensManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1677, 8927, 4262, 2]);