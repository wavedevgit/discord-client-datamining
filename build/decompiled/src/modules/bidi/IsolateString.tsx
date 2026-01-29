// modules/bidi/IsolateString.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 1;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/bidi/IsolateString.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = '\u2068';
    var2.FSI = var3;
    var3 = '\u2069';
    var2.PDI = var3;
    var1 = function(arg0) { // Original name: isolate, environment: var1
        _fun49144: for (var _fun49144_ip = 0;;) switch (_fun49144_ip) {
            case 0:
                var2 = arg0;
                var0 = arguments[1];
                var3 = undefined;
                if (!(var0 === var3)) {
                    _fun49144_ip = 14;
                    continue _fun49144
                }
            case 12:
                var0 = false;
            case 14:
                if (!var0) {
                    _fun49144_ip = 80;
                    continue _fun49144
                }
            case 17:
                var1 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 0;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var3 = var0.MessageBidiHandlingExperiment;
                var1 = var3.getConfig;
                var0 = {};
                var4 = 'isolateForNotification';
                var0.location = var4;
                var0 = var1.bind(var3)(var0);
                var1 = var0.isolateMentionsInNotifications;
                var0 = var2;
                if (!var1) {
                    _fun49144_ip = 100;
                    continue _fun49144
                }
            case 80:
                var1 = '\u2068';
                var2 = var1 + var2;
                var1 = '\u2069';
                var0 = var2 + var1;
            case 100:
                return var0;
        }
    };
    var2.isolate = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5548, 2]);