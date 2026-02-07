// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var0 = function arg0, arg1, arg2() {
        _fun114677: for (var _fun114677_ip = 0;;) switch (_fun114677_ip) {
            case 0:
                var3 = arg0;
                var5 = arg2;
                var1 = _closure1_slot3;
                var2 = undefined;
                var0 = arg1;
                var8 = var1.bind(var2)(var0);
                var1 = _closure1_slot2;
                var0 = _closure1_slot7;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun114677_ip = 51;
                    continue _fun114677
                }
            case 38:
                var0 = var8.apply;
                var0 = var0.bind(var8)(var3, var5);
                _fun114677_ip = 92;
                continue _fun114677;
            case 51:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                if (var5) {
                    _fun114677_ip = 71;
                    continue _fun114677
                }
            case 67:
                var5 = new Array(0);
            case 71:
                var4 = _closure1_slot3;
                var4 = var4.bind(var2)(var3);
                var4 = var4.constructor;
                var0 = var6.bind(var7)(var8, var5, var4);
            case 92:
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function() {
        _fun114678: for (var _fun114678_ip = 0;;) switch (_fun114678_ip) {
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
                _fun114678_ip = 76;
                continue _fun114678;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot7 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var5 = 6;
    var6 = var6[var5];
    var5 = arg1;
    var5 = var5.bind(var0)(var6);
    var6 = var5.NativeModules;
    var _closure1_slot5 = var6;
    var5 = var5.Platform;
    var3 = var3.Error;
    var3 = var4.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var2 = function arg0() {
            _fun114682: for (var _fun114682_ip = 0;;) switch (_fun114682_ip) {
                case 0:
                    var5 = this;
                    var4 = _closure1_slot1;
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var3 = var4.bind(var2)(var5, var3);
                    var3 = _closure1_slot5;
                    var6 = var3.NativeUnimoduleProxy;
                    var4 = null;
                    var7 = var4 == var6;
                    var3 = undefined;
                    if (var7) {
                        _fun114682_ip = 71;
                        continue _fun114682
                    }
                case 48:
                    var6 = var6.modulesConstants;
                    var7 = var4 == var6;
                    var3 = undefined;
                    if (var7) {
                        _fun114682_ip = 71;
                        continue _fun114682
                    }
                case 65:
                    var3 = var6.ExponentConstants;
                case 71:
                    var6 = var4 != var3;
                    var4 = 'react-native';
                    if (!var6) {
                        _fun114682_ip = 107;
                        continue _fun114682
                    }
                case 82:
                    var6 = var3.appOwnership;
                    var3 = 'expo';
                    if (!(var3 === var6)) {
                        _fun114682_ip = 104;
                        continue _fun114682
                    }
                case 98:
                    var3 = 'expo-go';
                case 104:
                    var4 = var3;
                case 107:
                    var3 = 'expo-go';
                    if (!(var3 !== var4)) {
                        _fun114682_ip = 293;
                        continue _fun114682
                    }
                case 120:
                    var6 = new Array(0);
                    var7 = var6.push;
                    var3 = 'Make sure react-native-nitro-modules/NitroModules is correctly autolinked (run `npx react-native config` to verify)';
                    var3 = var7.bind(var6)(var3);
                    var7 = var6.push;
                    var3 = 'Make sure you enabled the new architecture (TurboModules) and CodeGen properly generated the "NativeNitroModules"/NitroModules specs. See https://github.com/reactwg/react-native-new-architecture/blob/main/docs/enable-apps.md';
                    var3 = var7.bind(var6)(var3);
                    var7 = var6.push;
                    var3 = 'Make sure you are using react-native 0.75.0 or higher.';
                    var3 = var7.bind(var6)(var3);
                    var7 = var6.push;
                    var3 = 'Make sure you rebuilt the app.';
                    var3 = var7.bind(var6)(var3);
                    var3 = 'expo';
                    if (!(var3 === var4)) {
                        _fun114682_ip = 212;
                        continue _fun114682
                    }
                case 196:
                    var4 = var6.push;
                    var3 = 'Make sure you ran `expo prebuild`.';
                    var3 = var4.bind(var6)(var3);
                case 212:
                    var4 = var6.push;
                    var3 = 'Make sure gradle is synced.';
                    var3 = var4.bind(var6)(var3);
                    var4 = var6.join;
                    var3 = '\n* ';
                    var4 = var4.bind(var6)(var3);
                    var3 = 'Failed to get NitroModules: The native "NitroModules" Turbo/Native-Module could not be found.\n* ';
                    var7 = var3 + var4;
                    var6 = _closure1_slot6;
                    var4 = _closure2_slot0;
                    var3 = new Array(2);
                    var3[0] = var7;
                    var7 = {};
                    var8 = arg0;
                    var7.cause = var8;
                    var3[1] = var7;
                    var3 = var6.bind(var2)(var5, var4, var3);
                    return var3;
                case 293:
                    var4 = _closure1_slot6;
                    var3 = _closure2_slot0;
                    var1 = ['NitroModules are not supported in Expo Go! Use EAS (`expo prebuild`) or eject to a bare workflow instead.'];
                    var1 = var4.bind(var2)(var5, var3, var1);
                    var0 = _closure1_slot2;
                    var0 = var0.bind(var2)(var1);
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot4;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot0;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var2.ModuleNotFoundError = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 162, 27]);