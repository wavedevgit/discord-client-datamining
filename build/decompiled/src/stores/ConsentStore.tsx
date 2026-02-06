// stores/ConsentStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() {
        _fun41247: for (var _fun41247_ip = 0;;) switch (_fun41247_ip) {
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
                _fun41247_ip = 74;
                continue _fun41247;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot9 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot9 = var0;
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
    var _closure1_slot0 = var1;
    var1 = 1;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var1 = 2;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 3;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 4;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = false;
    var _closure1_slot5 = var1;
    var _closure1_slot6 = var1;
    var1 = {};
    var _closure1_slot7 = var1;
    var1 = null;
    var _closure1_slot8 = var1;
    var1 = 5;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun41251: for (var _fun41251_ip = 0;;) switch (_fun41251_ip) {
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
                    var0 = _closure1_slot9;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun41251_ip = 69;
                        continue _fun41251
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun41251_ip = 105;
                    continue _fun41251;
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
        var0 = 'hasConsented';
        var4.key = var0;
        var0 = function arg0() {
            _fun41252: for (var _fun41252_ip = 0;;) switch (_fun41252_ip) {
                case 0:
                    var2 = arg0;
                    var0 = _closure1_slot7;
                    var3 = var0[var2];
                    var0 = null;
                    var0 = var0 != var3;
                    if (!var0) {
                        _fun41252_ip = 37;
                        continue _fun41252
                    }
                case 23:
                    var1 = _closure1_slot7;
                    var1 = var1[var2];
                    var0 = var1.consented;
                case 37:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'consents';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot7;
            return var0;
        };
        var4.get = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'fetchedConsents';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot5;
            return var0;
        };
        var4.get = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'receivedConsentsInConnectionOpen';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot6;
            return var0;
        };
        var4.get = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getAuthenticationConsentRequired';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot8;
            return var0;
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'ConsentStore';
    var6.displayName = var1;
    var1 = 6;
    var1 = var4[var1];
    var10 = var5.bind(var0)(var1);
    var1 = {};
    var7 = function arg0() {
        _fun41257: for (var _fun41257_ip = 0;;) switch (_fun41257_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.consents;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun41257_ip = 51;
                    continue _fun41257
                }
            case 15:
                var0 = {};
                var4 = _closure1_slot7;
                var5 = var0;
                var3 = copyDataProperties(var5, var4);
                var5 = var0;
                var4 = var2;
                var2 = copyDataProperties(var5, var4);
                _closure1_slot7 = var0;
                var0 = true;
                _closure1_slot6 = var0;
            case 51:
                var0 = undefined;
                return var0;
        }
    };
    var1.CONNECTION_OPEN = var7;
    var7 = function arg0() {
        var0 = arg0;
        var2 = var0.consents;
        var0 = {};
        var3 = var0;
        var1 = copyDataProperties(var3, var2);
        _closure1_slot7 = var0;
        var0 = true;
        _closure1_slot5 = var0;
        var0 = undefined;
        return var0;
    };
    var1.OVERLAY_INITIALIZE = var7;
    var7 = function arg0() {
        var0 = arg0;
        var2 = var0.consents;
        var0 = {};
        var3 = var0;
        var1 = copyDataProperties(var3, var2);
        _closure1_slot7 = var0;
        var0 = true;
        _closure1_slot5 = var0;
        var0 = undefined;
        return var0;
    };
    var1.UPDATE_CONSENTS = var7;
    var7 = function arg0() {
        var0 = arg0;
        var1 = var0.consentRequired;
        _closure1_slot8 = var1;
        var0 = undefined;
        return var0;
    };
    var1.SET_CONSENT_REQUIRED = var7;
    var3 = function() {
        var0 = null;
        _closure1_slot8 = var0;
        var0 = undefined;
        return var0;
    };
    var1.LOGOUT = var3;
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
    var3 = 7;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/ConsentStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 566, 806, 2]);