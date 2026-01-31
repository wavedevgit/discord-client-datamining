// modules/user_settings/native/managers/UserSettingsNativeBridgeManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun117459: for (var _fun117459_ip = 0;;) switch (_fun117459_ip) {
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
                _fun117459_ip = 76;
                continue _fun117459;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
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
    var3 = var3.NativeModules;
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var2 = function(arg0) { // Original name: UserSettingsNativeBridgeManager, environment: var0
            _fun117463: for (var _fun117463_ip = 0;;) switch (_fun117463_ip) {
                case 0:
                    var5 = this;
                    var13 = 0;
                    var0 = copyRestArgs(var13);
                    var7 = _closure1_slot3;
                    var3 = _closure2_slot0;
                    var4 = undefined;
                    var7 = var7.bind(var4)(var5, var3);
                    var10 = new Array(0);
                    var13 = var10;
                    var12 = var0;
                    var11 = 0;
                    var0 = arraySpread(var13, var12, var11);
                    var0 = _closure1_slot5;
                    var9 = var0.bind(var4)(var3);
                    var3 = _closure1_slot4;
                    var0 = _closure1_slot9;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun117463_ip = 86;
                        continue _fun117463
                    }
                case 73:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var5, var10);
                    _fun117463_ip = 120;
                    continue _fun117463;
                case 86:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot5;
                    var6 = var6.bind(var4)(var5);
                    var6 = var6.constructor;
                    var0 = var7.bind(var8)(var9, var10, var6);
                case 120:
                    var0 = var3.bind(var4)(var5, var0);
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 7;
                    var1 = var5[var1];
                    var3 = var3.bind(var4)(var1);
                    var1 = var3.isIOS;
                    var1 = var1.bind(var3)();
                    if (var1) {
                        _fun117463_ip = 168;
                        continue _fun117463
                    }
                case 159:
                    var1 = function() { // Environment: var2
                        var0 = undefined;
                        return var0;
                    };
                    _fun117463_ip = 175;
                    continue _fun117463;
                case 168:
                    var1 = function() { // Environment: var2
                        _fun117464: for (var _fun117464_ip = 0;;) switch (_fun117464_ip) {
                            case 0:
                                var0 = _closure1_slot8;
                                var3 = var0.settings;
                                var1 = null;
                                var4 = var1 == var3;
                                var0 = undefined;
                                var5 = undefined;
                                if (var4) {
                                    _fun117464_ip = 47;
                                    continue _fun117464
                                }
                            case 26:
                                var3 = var3.textAndImages;
                                var4 = var1 == var3;
                                var5 = undefined;
                                if (var4) {
                                    _fun117464_ip = 47;
                                    continue _fun117464
                                }
                            case 41:
                                var5 = var3.explicitContentSettings;
                            case 47:
                                var2 = _closure1_slot7;
                                var3 = var2.NSUserDefaultsBridge;
                                if (!(var1 != var3)) {
                                    _fun117464_ip = 93;
                                    continue _fun117464
                                }
                            case 61:
                                var2 = var3.setExplicitContentSettingsJSONString;
                                var1 = global;
                                var4 = var1.JSON;
                                var1 = var4.stringify;
                                var1 = var1.bind(var4)(var5);
                                var1 = var2.bind(var3)(var1);
                            case 93:
                                return var0;
                        }
                    };
                case 175:
                    var0.saveExplicitContentSettingsToDisk = var1;
                    var1 = {};
                    var2 = var0.saveExplicitContentSettingsToDisk;
                    var1.POST_CONNECTION_OPEN = var2;
                    var2 = var0.saveExplicitContentSettingsToDisk;
                    var1.USER_SETTINGS_PROTO_UPDATE = var2;
                    var0.actions = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot6;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot2;
        var0 = var0.bind(var1)(var2);
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
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/managers/UserSettingsNativeBridgeManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 27, 1310, 478, 4263, 2]);