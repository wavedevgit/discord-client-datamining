// modules/external_pip/ExternalPipView.android.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var1 = _closure1_slot5;
        var0 = var1.getState;
        var2 = var0.bind(var1)();
        var1 = var2.requestFreezeLock;
        var0 = {};
        var3 = arg0;
        var0.lockEnabled = var3;
        var3 = 'external-pip';
        var0.key = var3;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot7 = var0;
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
    var7 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/external_pip/ExternalPipView.android.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun110282: for (var _fun110282_ip = 0;;) switch (_fun110282_ip) {
            case 0:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 5;
                var2 = var7[var2];
                var4 = undefined;
                var3 = var6.bind(var4)(var2);
                var2 = {};
                var5 = 6;
                var5 = var7[var5];
                var6 = var6.bind(var4)(var5);
                var5 = var6.isSupported;
                var5 = var5.bind(var6)();
                var5 = !var5;
                var2.disabled = var5;
                var2 = var3.bind(var4)(var2);
                var3 = var2.externalPipEnabled;
                var _closure2_slot0 = var3;
                var2 = function() {
                    var5 = _closure1_slot4;
                    var3 = var5.useState;
                    var2 = false;
                    var4 = var3.bind(var5)(var2);
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = 2;
                    var3 = var3.bind(var2)(var4, var1);
                    var1 = 0;
                    var2 = var3[var1];
                    var1 = 1;
                    var1 = var3[var1];
                    var _closure3_slot0 = var1;
                    var4 = var5.useCallback;
                    var3 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var _closure4_slot0 = var0;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 4;
                        var2 = var2[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.batchUpdates;
                        var1 = function() { // Environment: var1
                            var1 = _closure3_slot0;
                            var2 = _closure4_slot0;
                            var0 = undefined;
                            var1 = var1.bind(var0)(var2);
                            var1 = _closure1_slot7;
                            var1 = var1.bind(var0)(var2);
                            return var0;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var1 = new Array(0);
                    var1 = var4.bind(var5)(var3, var1);
                    var4 = var5.useEffect;
                    var3 = function() { // Environment: var0
                        var0 = function() { // Environment: var0
                            var2 = _closure1_slot7;
                            var0 = undefined;
                            var1 = false;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        return var0;
                    };
                    var0 = new Array(0);
                    var0 = var4.bind(var5)(var3, var0);
                    var0 = {};
                    var0.externalPipActive = var2;
                    var0.setExternalPipActive = var1;
                    return var0;
                };
                var5 = var2.bind(var4)();
                var2 = var5.externalPipActive;
                var7 = var5.setExternalPipActive;
                var _closure2_slot1 = var7;
                var6 = _closure1_slot4;
                var8 = var6.useEffect;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 6;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.setEnabled;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var3 = var8.bind(var6)(var3, var5);
                var8 = var6.useEffect;
                var5 = new Array(1);
                var5[0] = var7;
                var3 = function() { // Environment: var0
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.addOnPipModeChangedListener;
                    var1 = function(arg0) { // Environment: var0
                        var2 = _closure2_slot1;
                        var0 = undefined;
                        var1 = arg0;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        _fun110291: for (var _fun110291_ip = 0;;) switch (_fun110291_ip) {
                            case 0:
                                var2 = _closure3_slot0;
                                var0 = null;
                                var2 = var0 == var2;
                                var0 = undefined;
                                if (var2) {
                                    _fun110291_ip = 32;
                                    continue _fun110291
                                }
                            case 18:
                                var2 = _closure3_slot0;
                                var1 = var2.remove;
                                var0 = var1.bind(var2)();
                            case 32:
                                return var0;
                        }
                    };
                    return var0;
                };
                var3 = var8.bind(var6)(var3, var5);
                var5 = var6.useEffect;
                var3 = new Array(1);
                var3[0] = var7;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.addOnPipModeWillChangeListener;
                    var1 = function() { // Environment: var0
                        var2 = _closure2_slot1;
                        var0 = undefined;
                        var1 = true;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        _fun110294: for (var _fun110294_ip = 0;;) switch (_fun110294_ip) {
                            case 0:
                                var2 = _closure3_slot0;
                                var0 = null;
                                var2 = var0 == var2;
                                var0 = undefined;
                                if (var2) {
                                    _fun110294_ip = 32;
                                    continue _fun110294
                                }
                            case 18:
                                var2 = _closure3_slot0;
                                var1 = var2.remove;
                                var0 = var1.bind(var2)();
                            case 32:
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var5.bind(var6)(var0, var3);
                var0 = null;
                if (!var2) {
                    _fun110282_ip = 219;
                    continue _fun110282
                }
            case 187:
                var3 = _closure1_slot6;
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 7;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var0 = var3.bind(var4)(var2, var1);
            case 219:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 13628, 33, 802, 14214, 8056, 14216, 2]);