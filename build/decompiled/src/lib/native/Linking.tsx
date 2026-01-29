// lib/native/Linking.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var1 = var1.Linking;
    var _closure1_slot2 = var1;
    var1 = {};
    var6 = function(arg0, arg1) { // Original name: openURL, environment: var3
        _fun27026: for (var _fun27026_ip = 0;;) switch (_fun27026_ip) {
            case 0:
                var1 = arguments[2];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun27026_ip = 11;
                    continue _fun27026
                }
            case 9:
                var1 = true;
            case 11:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 1;
                var2 = var4[var2];
                var2 = var3.bind(var0)(var2);
                var4 = var2.default;
                var3 = {};
                var3.allowExternal = var1;
                var2 = arg0;
                var1 = arg1;
                var1 = var4.bind(var0)(var2, var1, var3);
                return var0;
        }
    };
    var1.openURL = var6;
    var6 = function(arg0, arg1) { // Original name: openURLExternally, environment: var3
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var4 = var1.default;
        var3 = {};
        var1 = true;
        var3.forceExternalBrowser = var1;
        var2 = arg0;
        var1 = arg1;
        var1 = var4.bind(var0)(var2, var1, var3);
        return var0;
    };
    var1.openURLExternally = var6;
    var3 = function(arg0) { // Original name: performURLNavigation, environment: var3
        var2 = _closure1_slot2;
        var1 = var2.openURL;
        var0 = arg0;
        var2 = var1.bind(var2)(var0);
        var1 = var2.catch;
        var0 = function() { // Environment: var0
            var0 = undefined;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.performURLNavigation = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'lib/native/Linking.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 3098, 2]);