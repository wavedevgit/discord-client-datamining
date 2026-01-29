// modules/go_live/useStreamError.tsx
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
    var8 = 0;
    var6 = var5[var8];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var6 = {};
    var3 = 1;
    var7 = var5[var3];
    var7 = var4.bind(var0)(var7);
    var7 = var7.AVError;
    var7 = var7.STREAM_SOUNDSHARE_FAILED;
    var6[var7] = var8;
    var7 = var5[var3];
    var7 = var4.bind(var0)(var7);
    var7 = var7.AVError;
    var7 = var7.STREAM_SEND_HIGH_PACKET_LOSS;
    var6[var7] = var3;
    var7 = var5[var3];
    var7 = var4.bind(var0)(var7);
    var7 = var7.AVError;
    var7 = var7.STREAM_VIEW_HIGH_PACKET_LOSS;
    var6[var7] = var3;
    var7 = var5[var3];
    var7 = var4.bind(var0)(var7);
    var7 = var7.AVError;
    var7 = var7.STREAM_SEND_LOW_FPS;
    var8 = 2;
    var6[var7] = var8;
    var7 = var5[var3];
    var7 = var4.bind(var0)(var7);
    var7 = var7.AVError;
    var7 = var7.STREAM_VIEW_LOW_FPS;
    var6[var7] = var8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AVError;
    var7 = var3.STREAM_BAD_NETWORK_QUALITY;
    var3 = 3;
    var6[var7] = var3;
    var _closure1_slot3 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/go_live/useStreamError.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useStreamError, environment: var1
        var1 = arg0;
        var5 = var1.id;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            _fun64478: for (var _fun64478_ip = 0;;) switch (_fun64478_ip) {
                case 0:
                    var2 = _closure1_slot2;
                    var1 = var2.getActiveErrors;
                    var4 = var1.bind(var2)();
                    var1 = global;
                    var3 = var1.Array;
                    var2 = var3.from;
                    var1 = var4.values;
                    var1 = var1.bind(var4)();
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var0
                        _fun64479: for (var _fun64479_ip = 0;;) switch (_fun64479_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = 'streamKey';
                                var0 = var0 in var1;
                                if (!var0) {
                                    _fun64479_ip = 31;
                                    continue _fun64479
                                }
                            case 14:
                                var3 = var1.streamKey;
                                var2 = _closure2_slot0;
                                var0 = var3 === var2;
                            case 31:
                                if (!var0) {
                                    _fun64479_ip = 56;
                                    continue _fun64479
                                }
                            case 34:
                                var2 = _closure1_slot3;
                                var1 = var1.type;
                                var2 = var2[var1];
                                var1 = null;
                                var0 = var1 != var2;
                            case 56:
                                return var0;
                        }
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.sort;
                    var0 = function(arg0, arg1) { // Environment: var0
                        _fun64480: for (var _fun64480_ip = 0;;) switch (_fun64480_ip) {
                            case 0:
                                var1 = _closure1_slot3;
                                var0 = arg0;
                                var0 = var0.type;
                                var4 = var1[var0];
                                var3 = null;
                                var5 = var3 != var4;
                                var0 = 0;
                                if (!var5) {
                                    _fun64480_ip = 33;
                                    continue _fun64480
                                }
                            case 30:
                                var0 = var4;
                            case 33:
                                var4 = _closure1_slot3;
                                var2 = arg1;
                                var2 = var2.type;
                                var2 = var4[var2];
                                var3 = var3 != var2;
                                var1 = 0;
                                if (!var3) {
                                    _fun64480_ip = 61;
                                    continue _fun64480
                                }
                            case 58:
                                var1 = var2;
                            case 61:
                                var0 = var0 - var1;
                                return var0;
                        }
                    };
                    var1 = var1.bind(var2)(var0);
                    var0 = 0;
                    var1 = var1[var0];
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun64478_ip = 99;
                        continue _fun64478
                    }
                case 94:
                    var0 = var1.type;
                case 99:
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7964, 7965, 566, 2]);