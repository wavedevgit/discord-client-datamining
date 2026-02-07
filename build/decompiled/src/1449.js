// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun16758: for (var _fun16758_ip = 0;;) switch (_fun16758_ip) {
        case 0:
            var3 = metroImportDefault;
            var2 = exports;
            var7 = dependencyMap;
            var _closure1_slot0 = var3;
            var _closure1_slot1 = var7;
            var4 = global;
            var8 = var4.Object;
            var5 = var8.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var5.bind(var8)(var2, var0, var1);
            var0 = 0;
            var5 = var7[var0];
            var1 = require;
            var0 = undefined;
            var1 = var1.bind(var0)(var5);
            var1 = var1.NativeEventEmitter;
            var _closure1_slot2 = var1;
            var1 = 1;
            var5 = var7[var1];
            var5 = var3.bind(var0)(var5);
            if (var5) {
                _fun16758_ip = 126;
                continue _fun16758
            }
        case 92:
            var9 = var4.Error;
            var5 = var9.prototype;
            var8 = Object.create(var5, {
                constructor: {
                    value: var9
                }
            });
            var12 = '@react-native-community/netinfo: NativeModule.RNCNetInfo is null. To fix this issue try these steps:\n\n• Run `react-native link @react-native-community/netinfo` in the project root.\n• Rebuild and re-run the app.\n• If you are using CocoaPods on iOS, run `pod install` in the `ios` directory and then rebuild and re-run the app. You may also need to re-open Xcode to get the new pods.\n• Check that the library was linked correctly when you used the link command by running through the manual installation instructions in the README.\n* If you are getting this error while unit testing you need to mock the native module. Follow the guide in the README.\n\nIf none of these fix the issue, please open an issue on the Github repository: https://github.com/react-native-community/react-native-netinfo';
            var13 = var8;
            var5 = new var13[var9](var12, var11);
            var5 = var5 instanceof Object ? var5 : var8;
            throw var5;
        case 126:
            var5 = null;
            var _closure1_slot3 = var5;
            var5 = var4.Object;
            var4 = var5.assign;
            var1 = var7[var1];
            var3 = var3.bind(var0)(var1);
            var1 = {};
            var7 = function() {
                _fun16759: for (var _fun16759_ip = 0;;) switch (_fun16759_ip) {
                    case 0:
                        var1 = _closure1_slot3;
                        if (var1) {
                            _fun16759_ip = 60;
                            continue _fun16759
                        }
                    case 10:
                        var3 = _closure1_slot2;
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 1;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var4.bind(var1)(var2);
                        var2 = var3.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var3
                            }
                        });
                        var6 = var2;
                        var1 = new var6[var3](var5, var4);
                        var1 = var1 instanceof Object ? var1 : var2;
                        _closure1_slot3 = var1;
                    case 60:
                        var0 = _closure1_slot3;
                        return var0;
                }
            };
            var6 = 'eventEmitter';
            Object.defineProperty(var1, var6, {
                get: var7,
                set: var0,
                enumerable: true
            });
            var1 = var4.bind(var5)(var3, var1);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 1450]);