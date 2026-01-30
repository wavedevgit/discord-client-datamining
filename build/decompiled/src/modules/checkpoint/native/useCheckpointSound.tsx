// modules/checkpoint/native/useCheckpointSound.tsx
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
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.useRef;
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportDefault;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/checkpoint/native/useCheckpointSound.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useCheckpointSound, environment: var1
        _fun86509: for (var _fun86509_ip = 0;;) switch (_fun86509_ip) {
            case 0:
                var7 = arg0;
                var _closure2_slot0 = var7;
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 2;
                var1 = var6[var1];
                var3 = undefined;
                var9 = var5.bind(var3)(var1);
                var8 = var9.useStateFromStores;
                var1 = _closure1_slot3;
                var4 = new Array(1);
                var4[0] = var1;
                var1 = function() { // Environment: var0
                    var0 = _closure1_slot3;
                    var0 = var0.isMuted;
                    return var0;
                };
                var1 = var8.bind(var9)(var4, var1);
                var _closure2_slot1 = var1;
                var2 = _closure1_slot2;
                var4 = 3;
                var4 = var6[var4];
                var6 = var5.bind(var3)(var4);
                var5 = var6.createSound;
                var4 = 1;
                if (!var1) {
                    _fun86509_ip = 98;
                    continue _fun86509
                }
            case 96:
                var4 = 0;
            case 98:
                var1 = 'vibing_wumpus';
                var1 = var5.bind(var6)(var7, var1, var4);
                var1 = var2.bind(var3)(var1);
                var _closure2_slot2 = var1;
                var0 = function() { // Environment: var0
                    _fun86511: for (var _fun86511_ip = 0;;) switch (_fun86511_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var2 = var0.current;
                            var0 = var2.stop;
                            var0 = var0.bind(var2)();
                            var4 = _closure2_slot2;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var0 = 3;
                            var2 = var2[var0];
                            var0 = undefined;
                            var8 = var3.bind(var0)(var2);
                            var7 = var8.createSound;
                            var6 = _closure2_slot0;
                            var2 = _closure2_slot1;
                            var3 = 1;
                            var5 = var3;
                            if (!var2) {
                                _fun86511_ip = 76;
                                continue _fun86511
                            }
                        case 74:
                            var5 = 0;
                        case 76:
                            var2 = 'vibing_wumpus';
                            var2 = var7.bind(var8)(var6, var2, var5);
                            var4.current = var2;
                            var2 = _closure2_slot2;
                            var2 = var2.current;
                            var4 = _closure2_slot1;
                            if (!var4) {
                                _fun86511_ip = 113;
                                continue _fun86511
                            }
                        case 111:
                            var3 = 0;
                        case 113:
                            var2.volume = var3;
                            var1 = _closure2_slot2;
                            var2 = var1.current;
                            var1 = var2.play;
                            var1 = var1.bind(var2)();
                            return var0;
                    }
                };
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 11134, 566, 8366, 2]);