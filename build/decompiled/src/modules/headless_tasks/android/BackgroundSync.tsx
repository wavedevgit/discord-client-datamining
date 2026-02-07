// modules/headless_tasks/android/BackgroundSync.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = require;
    var5 = metroImportDefault;
    var3 = dependencyMap;
    var _closure1_slot0 = var2;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var3;
    var0 = 0;
    var4 = var3[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var3[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var3[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var3[var4];
    var6 = var5.bind(var0)(var4);
    var4 = var6.prototype;
    var5 = Object.create(var4, {
        constructor: {
            value: var6
        }
    });
    var7 = 'BackgroundSync';
    var8 = var5;
    var4 = new var8[var6](var7, var6);
    var4 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot6 = var4;
    var4 = function(arg0) { // Environment: var1
        _fun118878: for (var _fun118878_ip = 0;;) switch (_fun118878_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var3 = _closure1_slot5;
                var2 = var3.getState;
                var3 = var2.bind(var3)();
                var2 = 'active';
                if (!(var2 !== var3)) {
                    _fun118878_ip = 154;
                    continue _fun118878
                }
            case 34:
                var3 = _closure1_slot3;
                var2 = var3.isConnected;
                var2 = var2.bind(var3)();
                if (var2) {
                    _fun118878_ip = 67;
                    continue _fun118878
                }
            case 51:
                var4 = _closure1_slot3;
                var3 = var4.isTryingToConnect;
                var2 = var3.bind(var4)();
            case 67:
                if (var2) {
                    _fun118878_ip = 117;
                    continue _fun118878
                }
            case 70:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 4;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.carefullyOpenDatabase;
                var4 = _closure1_slot4;
                var1 = var4.getId;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
            case 117:
                var1 = global;
                var2 = var1.Promise;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var5 = function(arg0) { // Environment: var0
                    var4 = _closure1_slot6;
                    var3 = var4.log;
                    var2 = _closure2_slot0;
                    var1 = 'Executing BackgroundSync with ';
                    var1 = var3.bind(var4)(var1, var2);
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 5;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.backgroundSync;
                    var1 = {};
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.then;
                    var1 = arg0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var6 = var1;
                var0 = new var6[var2](var5, var4);
                var0 = var0 instanceof Object ? var0 : var1;
                _fun118878_ip = 172;
                continue _fun118878;
            case 154:
                var1 = global;
                var2 = var1.Promise;
                var1 = var2.resolve;
                var0 = var1.bind(var2)();
            case 172:
                return var0;
        }
    };
    var1 = arg4;
    var1.exports = var4;
    var1 = 6;
    var1 = var3[var1];
    var3 = var2.bind(var0)(var1);
    var2 = var3.fileFinishedImporting;
    var1 = 'modules/headless_tasks/android/BackgroundSync.tsx';
    var1 = var2.bind(var3)(var1);
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3475, 1216, 5336, 3, 1664, 14544, 2]);