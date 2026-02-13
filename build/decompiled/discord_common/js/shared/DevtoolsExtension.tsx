// ../discord_common/js/shared/DevtoolsExtension.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = function arg0() {
        _fun13532: for (var _fun13532_ip = 0;;) switch (_fun13532_ip) {
            case 0:
                var1 = _closure1_slot1;
                var0 = undefined;
                var3 = var1.bind(var0)();
                var4 = null;
                var1 = var4 == var3;
                if (var1) {
                    _fun13532_ip = 32;
                    continue _fun13532
                }
            case 22:
                var2 = var3.reportEvent;
                var1 = var4 == var2;
            case 32:
                if (var1) {
                    _fun13532_ip = 49;
                    continue _fun13532
                }
            case 35:
                var2 = var3.reportEvent;
                var1 = arg0;
                var1 = var2.bind(var3)(var1);
            case 49:
                return var0;
        }
    };
    var _closure1_slot0 = var3;
    var0 = function() {
        _fun13533: for (var _fun13533_ip = 0;;) switch (_fun13533_ip) {
            case 0:
                var1 = global;
                var2 = var1.window;
                var3 = 'undefined';
                var2 = typeof var2;
                var0 = null;
                if (!(var3 !== var2)) {
                    _fun13533_ip = 32;
                    continue _fun13533
                }
            case 20:
                var1 = var1.window;
                var0 = var1.__DISCORD_DEVTOOLS;
            case 32:
                return var0;
        }
    };
    var _closure1_slot1 = var0;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var4 = arg6;
    var0 = 0;
    var5 = var4[var0];
    var4 = arg1;
    var0 = undefined;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/shared/DevtoolsExtension.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0, arg1() {
        var0 = arg0;
        var2 = _closure1_slot0;
        var1 = {};
        var3 = 'Flux-Dispatch';
        var1.type = var3;
        var3 = var0.type;
        var1.description = var3;
        var1.data = var0;
        var0 = arg1;
        var1.durationMs = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var2.logFluxAction = var4;
    var2.reportEvent = var3;
    var3 = function arg0() {
        _fun13535: for (var _fun13535_ip = 0;;) switch (_fun13535_ip) {
            case 0:
                var1 = _closure1_slot1;
                var0 = undefined;
                var3 = var1.bind(var0)();
                var4 = null;
                var1 = var4 == var3;
                if (var1) {
                    _fun13535_ip = 32;
                    continue _fun13535
                }
            case 22:
                var2 = var3.notifyStoreCreated;
                var1 = var4 == var2;
            case 32:
                if (var1) {
                    _fun13535_ip = 56;
                    continue _fun13535
                }
            case 35:
                var2 = var3.notifyStoreCreated;
                var1 = {};
                var4 = arg0;
                var1.storeName = var4;
                var1 = var2.bind(var3)(var1);
            case 56:
                return var0;
        }
    };
    var2.notifyStoreCreated = var3;
    var1 = function arg0() {
        _fun13536: for (var _fun13536_ip = 0;;) switch (_fun13536_ip) {
            case 0:
                var1 = _closure1_slot1;
                var0 = undefined;
                var3 = var1.bind(var0)();
                var4 = null;
                var1 = var4 == var3;
                if (var1) {
                    _fun13536_ip = 32;
                    continue _fun13536
                }
            case 22:
                var2 = var3.notifyStoreChange;
                var1 = var4 == var2;
            case 32:
                if (var1) {
                    _fun13536_ip = 56;
                    continue _fun13536
                }
            case 35:
                var2 = var3.notifyStoreChange;
                var1 = {};
                var4 = arg0;
                var1.storeName = var4;
                var1 = var2.bind(var3)(var1);
            case 56:
                return var0;
        }
    };
    var2.notifyStoreChange = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);