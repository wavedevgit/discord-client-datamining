// modules/core/native/handleAppStateChanged.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.AnalyticEvents;
    var _closure1_slot5 = var7;
    var3 = var3.AppStates;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var6.bind(var0)(var3);
    var3 = var7.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var11 = 'index.native.tsx';
    var12 = var6;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot7 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/core/native/handleAppStateChanged.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: handleAppStateChanged, environment: var1
        _fun118317: for (var _fun118317_ip = 0;;) switch (_fun118317_ip) {
            case 0:
                var5 = arg0;
                var2 = _closure1_slot4;
                var0 = var2.getState;
                var4 = var0.bind(var2)();
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 4;
                var2 = var6[var0];
                var0 = undefined;
                var10 = var3.bind(var0)(var2);
                var9 = var10.markAndLog;
                var8 = _closure1_slot7;
                var2 = global;
                var2 = var2.HermesInternal;
                var11 = var2.concat;
                var7 = 'AppState changing from ';
                var2 = ' to ';
                var7 = var11.bind(var7)(var4, var2, var5);
                var2 = '🏃';
                var2 = var9.bind(var10)(var8, var2, var7);
                var2 = 5;
                var2 = var6[var2];
                var6 = var3.bind(var0)(var2);
                var3 = var6.dispatch;
                var2 = {};
                var7 = 'APP_STATE_UPDATE';
                var2.type = var7;
                var2.state = var5;
                var2 = var3.bind(var6)(var2);
                var2 = _closure1_slot6;
                var2 = var2.BACKGROUND;
                var3 = var4 === var2;
                if (!var3) {
                    _fun118317_ip = 162;
                    continue _fun118317
                }
            case 148:
                var2 = _closure1_slot6;
                var2 = var2.ACTIVE;
                var3 = var5 === var2;
            case 162:
                var2 = _closure1_slot6;
                var2 = var2.ACTIVE;
                var2 = var4 === var2;
                if (!var2) {
                    _fun118317_ip = 193;
                    continue _fun118317
                }
            case 179:
                var4 = _closure1_slot6;
                var4 = var4.ACTIVE;
                var2 = var5 !== var4;
            case 193:
                if (!var3) {
                    _fun118317_ip = 210;
                    continue _fun118317
                }
            case 196:
                var6 = _closure1_slot3;
                var4 = var6.isAuthenticated;
                var3 = var4.bind(var6)();
            case 210:
                if (!var3) {
                    _fun118317_ip = 250;
                    continue _fun118317
                }
            case 213:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 6;
                var4 = var7[var4];
                var4 = var6.bind(var0)(var4);
                var6 = var4.default;
                var4 = var6.isDisconnected;
                var3 = var4.bind(var6)();
            case 250:
                if (!var3) {
                    _fun118317_ip = 283;
                    continue _fun118317
                }
            case 253:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 7;
                var3 = var6[var3];
                var4 = var4.bind(var0)(var3);
                var3 = var4.deferUpdate;
                var3 = var3.bind(var4)();
            case 283:
                var3 = _closure1_slot6;
                var3 = var3.ACTIVE;
                if (!(var5 === var3)) {
                    _fun118317_ip = 356;
                    continue _fun118317
                }
            case 297:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 8;
                var3 = var6[var3];
                var8 = var4.bind(var0)(var3);
                var7 = var8.trackAppOpened;
                var3 = 'launcher';
                var3 = var7.bind(var8)(var3);
                var3 = 9;
                var3 = var6[var3];
                var4 = var4.bind(var0)(var3);
                var3 = var4.setSystemThemeIfNeeded;
                var3 = var3.bind(var4)();
            case 356:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 10;
                var3 = var6[var3];
                var4 = var4.bind(var0)(var3);
                var3 = var4.appStateChanged;
                var3 = var3.bind(var4)(var5);
                if (!var2) {
                    _fun118317_ip = 433;
                    continue _fun118317
                }
            case 390:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 11;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.track;
                var1 = _closure1_slot5;
                var2 = var1.APP_BACKGROUND;
                var1 = {};
                var1 = var3.bind(var4)(var2, var1);
            case 433:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1216, 5239, 660, 3, 20, 806, 3477, 15034, 4321, 3197, 14, 795, 2]);