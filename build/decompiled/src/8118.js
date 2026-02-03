// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Platform;
    var6 = function arg0() {
        var3 = ['react-native-date-picker is not installed correctly. Make sure you: ', ''];
        var2 = var3.concat;
        var4 = _closure1_slot2;
        var1 = undefined;
        var0 = arg0;
        var1 = var4.bind(var1)(var0);
        var0 = ['', 'Please reply in this thread if this solved your issue or not: ', 'https://github.com/henninghall/react-native-date-picker/issues/404', '', "To ignore this warning, add 'global.ignoreDatePickerWarning = true' to the top of your index file."];
        var2 = var2.bind(var3)(var1, var0);
        var1 = var2.join;
        var0 = '\n';
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3 = {};
    var4 = {};
    var5 = ["1. Have rebuilt your app (with for instance 'npx expo run:ios')", '2. Are not using Expo Go (Expo Go is unsupported). See README for more info: ', 'https://github.com/henninghall/react-native-date-picker'];
    var5 = var6.bind(var0)(var5);
    var4.expo = var5;
    var5 = ["1. Installed pods (by for instance running 'cd ios && pod install')", "2. Rebuilt the app (by for instance 'npx react-native run-ios')"];
    var5 = var6.bind(var0)(var5);
    var4.nonExpo = var5;
    var3.ios = var4;
    var4 = {};
    var5 = ["1. Have rebuilt your app (with for instance 'npx expo run:android')", '2. Are not using Expo Go (Expo Go is unsupported). See README for more info: ', 'https://github.com/henninghall/react-native-date-picker'];
    var5 = var6.bind(var0)(var5);
    var4.expo = var5;
    var5 = ["1. Rebuilt the app (by for instance 'npx react-native run-ios')"];
    var5 = var6.bind(var0)(var5);
    var4.nonExpo = var5;
    var3.android = var4;
    var _closure1_slot3 = var3;
    var1 = function() {
        _fun65559: for (var _fun65559_ip = 0;;) switch (_fun65559_ip) {
            case 0: // try_start_0
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.default;
                var0 = _closure1_slot3;
                var0 = var0.android;
                var0 = var0.expo;
            case 46: // try_end0
                return var0;
            case 48: // catch_target0
                CatchBlockStart(arg_register = 0);
                var0 = _closure1_slot3;
                var0 = var0.android;
                var0 = var0.nonExpo;
                return var0;
        }
    };
    var2.getInstallationErrorMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 27, null]);