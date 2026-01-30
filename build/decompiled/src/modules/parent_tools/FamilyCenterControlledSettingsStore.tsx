// modules/parent_tools/FamilyCenterControlledSettingsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun41809: for (var _fun41809_ip = 0;;) switch (_fun41809_ip) {
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
                _fun41809_ip = 74;
                continue _fun41809;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot10 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot10 = var0;
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
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = false;
    var _closure1_slot7 = var1;
    var1 = {};
    var _closure1_slot8 = var1;
    var1 = {};
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: FamilyCenterControlledSettingsStore, environment: var5
            _fun41813: for (var _fun41813_ip = 0;;) switch (_fun41813_ip) {
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
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun41813_ip = 69;
                        continue _fun41813
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun41813_ip = 105;
                    continue _fun41813;
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
        var0 = 'getSettings';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            var1 = _closure1_slot8;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var0;
        var0 = new Array(6);
        var0[0] = var4;
        var4 = {};
        var6 = 'getControlledSettings';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var1 = _closure1_slot8;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'hasSettingsForUser';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var1 = _closure1_slot8;
            var0 = arg0;
            var1 = var1[var0];
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getConsents';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var1 = _closure1_slot9;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'hasConsented';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun41818: for (var _fun41818_ip = 0;;) switch (_fun41818_ip) {
                case 0:
                    var1 = arg0;
                    var3 = arg1;
                    var4 = null;
                    if (!(var4 != var1)) {
                        _fun41818_ip = 56;
                        continue _fun41818
                    }
                case 12:
                    var0 = _closure1_slot9;
                    var2 = var0[var1];
                    var0 = var4 != var2;
                    if (!var0) {
                        _fun41818_ip = 54;
                        continue _fun41818
                    }
                case 30:
                    var1 = var2[var3];
                    var1 = var4 != var1;
                    if (!var1) {
                        _fun41818_ip = 51;
                        continue _fun41818
                    }
                case 41:
                    var2 = var2[var3];
                    var1 = var2.consented;
                case 51:
                    var0 = var1;
                case 54:
                    return var0;
                case 56:
                    var0 = false;
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'isLoading';
        var4.key = var6;
        var5 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot7;
            return var0;
        };
        var4.get = var5;
        var0[5] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'FamilyCenterControlledSettingsStore';
    var7.displayName = var1;
    var1 = 8;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function() { // Original name: handleTeenSettingsFetchStart, environment: var3
        var0 = true;
        _closure1_slot7 = var0;
        var0 = undefined;
        return var0;
    };
    var1.FAMILY_CENTER_TEEN_SETTINGS_FETCH_START = var8;
    var8 = function(arg0) { // Original name: handleTeenSettingsAndConsentsFetchSuccess, environment: var3
        _fun41821: for (var _fun41821_ip = 0;;) switch (_fun41821_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.userId;
                var6 = var0.settings;
                var1 = var0.consents;
                var0 = null;
                if (!(var0 != var6)) {
                    _fun41821_ip = 70;
                    continue _fun41821
                }
            case 26:
                var4 = _closure1_slot8;
                var7 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 5;
                var5 = var5[var3];
                var3 = undefined;
                var5 = var7.bind(var3)(var5);
                var3 = var5.b64ToPreloadedUserSettingsProto;
                var3 = var3.bind(var5)(var6);
                var4[var2] = var3;
            case 70:
                if (!(var0 != var1)) {
                    _fun41821_ip = 85;
                    continue _fun41821
                }
            case 74:
                var0 = _closure1_slot9;
                var0[var2] = var1;
            case 85:
                var0 = false;
                _closure1_slot7 = var0;
                var0 = undefined;
                return var0;
        }
    };
    var1.FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS_FETCH_SUCCESS = var8;
    var8 = function(arg0) { // Original name: handleTeenConsentsUpdateSuccess, environment: var3
        var0 = arg0;
        var2 = var0.userId;
        var1 = var0.consents;
        var0 = _closure1_slot9;
        var0[var2] = var1;
        var0 = undefined;
        return var0;
    };
    var1.FAMILY_CENTER_TEEN_CONSENTS_UPDATE_SUCCESS = var8;
    var8 = function(arg0) { // Original name: handleTeenUpdateSettingsSuccess, environment: var3
        var0 = arg0;
        var3 = var0.userId;
        var6 = var0.settings;
        var8 = _closure1_slot0;
        var9 = _closure1_slot1;
        var4 = 5;
        var2 = var9[var4];
        var0 = undefined;
        var5 = var8.bind(var0)(var2);
        var2 = var5.b64ToPreloadedUserSettingsProto;
        var7 = var2.bind(var5)(var6);
        var2 = _closure1_slot8;
        var4 = var9[var4];
        var6 = var8.bind(var0)(var4);
        var5 = var6.mergeTopLevelFields;
        var4 = 6;
        var4 = var9[var4];
        var4 = var8.bind(var0)(var4);
        var4 = var4.PreloadedUserSettings;
        var1 = _closure1_slot8;
        var1 = var1[var3];
        var1 = var5.bind(var6)(var4, var1, var7);
        var2[var3] = var1;
        return var0;
    };
    var1.FAMILY_CENTER_TEEN_UPDATE_SETTINGS_SUCCESS = var8;
    var3 = function() { // Original name: handleLogout, environment: var3
        var0 = {};
        _closure1_slot8 = var0;
        var0 = {};
        _closure1_slot9 = var0;
        var0 = false;
        _closure1_slot7 = var0;
        var0 = undefined;
        return var0;
    };
    var1.LOGOUT = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var7](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/parent_tools/FamilyCenterControlledSettingsStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1344, 1311, 566, 806, 2]);