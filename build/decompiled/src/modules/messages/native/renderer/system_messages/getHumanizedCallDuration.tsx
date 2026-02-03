// modules/messages/native/renderer/system_messages/getHumanizedCallDuration.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var1 = dependencyMap;
    var0 = 0;
    var3 = var1[var0];
    var1 = require;
    var0 = undefined;
    var4 = var1.bind(var0)(var3);
    var3 = var4.fileFinishedImporting;
    var1 = 'modules/messages/native/renderer/system_messages/getHumanizedCallDuration.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = function arg0() {
        _fun55556: for (var _fun55556_ip = 0;;) switch (_fun55556_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.call;
                var0 = null;
                var3 = var0 != var2;
                var2 = null;
                if (!var3) {
                    _fun55556_ip = 29;
                    continue _fun55556
                }
            case 19:
                var1 = var1.call;
                var2 = var1.duration;
            case 29:
                var1 = var0 != var2;
                var0 = null;
                if (!var1) {
                    _fun55556_ip = 48;
                    continue _fun55556
                }
            case 38:
                var1 = var2.humanize;
                var0 = var1.bind(var2)();
            case 48:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);