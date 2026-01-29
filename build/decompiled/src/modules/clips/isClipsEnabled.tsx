// modules/clips/isClipsEnabled.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function() { // Original name: isClipsEnabled, environment: var1
        _fun93823: for (var _fun93823_ip = 0;;) switch (_fun93823_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 1;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var0 = var2.areClipsAvailable;
                var0 = var0.bind(var2)();
                var2 = _closure1_slot2;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                var1 = var1.clipsSettings;
                var1 = var1.clipsEnabled;
                if (!var0) {
                    _fun93823_ip = 67;
                    continue _fun93823
                }
            case 64:
                var0 = var1;
            case 67:
                return var0;
        }
    };
    var _closure1_slot3 = var4;
    var3 = function() { // Original name: useIsClipsEnabled, environment: var1
        _fun93824: for (var _fun93824_ip = 0;;) switch (_fun93824_ip) {
            case 0:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 1;
                var0 = var5[var0];
                var3 = undefined;
                var2 = var4.bind(var3)(var0);
                var0 = var2.useIsClipsAvailable;
                var0 = var0.bind(var2)();
                var2 = 2;
                var2 = var5[var2];
                var4 = var4.bind(var3)(var2);
                var3 = var4.useStateFromStores;
                var1 = _closure1_slot2;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var1
                    var1 = _closure1_slot2;
                    var0 = var1.getState;
                    var0 = var0.bind(var1)();
                    var0 = var0.clipsSettings;
                    var0 = var0.clipsEnabled;
                    return var0;
                };
                var1 = var3.bind(var4)(var2, var1);
                if (!var0) {
                    _fun93824_ip = 85;
                    continue _fun93824
                }
            case 82:
                var0 = var1;
            case 85:
                return var0;
        }
    };
    var _closure1_slot4 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var5);
    var0 = 0;
    var8 = var7[var0];
    var5 = arg2;
    var0 = undefined;
    var5 = var5.bind(var0)(var8);
    var _closure1_slot2 = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/clips/isClipsEnabled.tsx';
    var5 = var6.bind(var7)(var5);
    var2.isClipsEnabled = var4;
    var2.useIsClipsEnabled = var3;
    var3 = function() { // Original name: isDecoupledClipsEnabled, environment: var1
        _fun93826: for (var _fun93826_ip = 0;;) switch (_fun93826_ip) {
            case 0:
                var0 = _closure1_slot3;
                var4 = undefined;
                var0 = var0.bind(var4)();
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 3;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.isWindows;
                var2 = var2.bind(var3)();
                var3 = _closure1_slot2;
                var1 = var3.getState;
                var1 = var1.bind(var3)();
                var1 = var1.clipsSettings;
                var1 = var1.decoupledClipsEnabled;
                if (!var0) {
                    _fun93826_ip = 75;
                    continue _fun93826
                }
            case 72:
                var0 = var2;
            case 75:
                if (!var0) {
                    _fun93826_ip = 81;
                    continue _fun93826
                }
            case 78:
                var0 = var1;
            case 81:
                return var0;
        }
    };
    var2.isDecoupledClipsEnabled = var3;
    var1 = function() { // Original name: useIsDecoupledClipsEnabled, environment: var1
        _fun93827: for (var _fun93827_ip = 0;;) switch (_fun93827_ip) {
            case 0:
                var0 = _closure1_slot4;
                var5 = undefined;
                var0 = var0.bind(var5)();
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 3;
                var2 = var6[var2];
                var3 = var4.bind(var5)(var2);
                var2 = var3.isWindows;
                var2 = var2.bind(var3)();
                var3 = 2;
                var3 = var6[var3];
                var5 = var4.bind(var5)(var3);
                var4 = var5.useStateFromStores;
                var1 = _closure1_slot2;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() { // Environment: var1
                    var1 = _closure1_slot2;
                    var0 = var1.getState;
                    var0 = var0.bind(var1)();
                    var0 = var0.clipsSettings;
                    var0 = var0.decoupledClipsEnabled;
                    return var0;
                };
                var1 = var4.bind(var5)(var3, var1);
                if (!var0) {
                    _fun93827_ip = 93;
                    continue _fun93827
                }
            case 90:
                var0 = var2;
            case 93:
                if (!var0) {
                    _fun93827_ip = 99;
                    continue _fun93827
                }
            case 96:
                var0 = var1;
            case 99:
                return var0;
        }
    };
    var2.useIsDecoupledClipsEnabled = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3441, 3467, 566, 478, 2]);