// modules/settings/UserSettingsManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun114936: for (var _fun114936_ip = 0;;) switch (_fun114936_ip) {
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
                _fun114936_ip = 76;
                continue _fun114936;
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
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = false;
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function(arg0) { // Original name: UserSettingsManager, environment: var5
            _fun114940: for (var _fun114940_ip = 0;;) switch (_fun114940_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var1);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var3)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun114940_ip = 86;
                        continue _fun114940
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun114940_ip = 120;
                    continue _fun114940;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var1.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var1 = {};
                    var2 = function() { // Original name: POST_CONNECTION_OPEN, environment: var2
                        var1 = _closure3_slot0;
                        var0 = var1.setVerifyTimezone;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var1.POST_CONNECTION_OPEN = var2;
                    var2 = var0.setVerifyTimezone;
                    var1.OVERLAY_INITIALIZE = var2;
                    var2 = var0.ensureTimezoneUpdated;
                    var1.USER_SETTINGS_PROTO_UPDATE = var2;
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
        var0 = 'setVerifyTimezone';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var0 = true;
            _closure1_slot7 = var0;
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'ensureTimezoneUpdated';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            _fun114943: for (var _fun114943_ip = 0;;) switch (_fun114943_ip) {
                case 0:
                    var1 = _closure1_slot7;
                    if (!var1) {
                        _fun114943_ip = 120;
                        continue _fun114943
                    }
                case 12:
                    var1 = false;
                    _closure1_slot7 = var1;
                    var1 = global;
                    var3 = var1.Date;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var3
                        }
                    });
                    var7 = var4;
                    var3 = new var7[var3](var6);
                    var4 = var3 instanceof Object ? var3 : var4;
                    var3 = var4.getTimezoneOffset;
                    var4 = var3.bind(var4)();
                    var _closure3_slot0 = var4;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var5 = var3.TimezoneOffset;
                    var3 = var5.getSetting;
                    var3 = var3.bind(var5)();
                    if (!(var3 !== var4)) {
                        _fun114943_ip = 120;
                        continue _fun114943
                    }
                case 102:
                    var1 = var1.setImmediate;
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 5;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var2 = var0.TimezoneOffset;
                        var1 = var2.updateSetting;
                        var0 = _closure3_slot0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                case 120:
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
    var4 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var4;
    var3 = new var12[var1](var11);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/settings/UserSettingsManager.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.UserSettingsManager = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1348, 4262, 2]);