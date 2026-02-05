// modules/calls/useCanSetVoiceChannelStatus.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportAll;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var3 = function arg0, arg1, arg2, arg3() {
        _fun111113: for (var _fun111113_ip = 0;;) switch (_fun111113_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var1 = arg3;
                var _closure2_slot2 = var1;
                var2 = arg2;
                if (var2) {
                    _fun111113_ip = 38;
                    continue _fun111113
                }
            case 32:
                var2 = _closure1_slot4;
                _fun111113_ip = 42;
                continue _fun111113;
            case 38:
                var2 = _closure1_slot5;
            case 42:
                var1 = var2.every;
                var0 = function(arg0) { // Environment: var0
                    _fun111114: for (var _fun111114_ip = 0;;) switch (_fun111114_ip) {
                        case 0:
                            var4 = arg0;
                            var2 = _closure2_slot2;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun111114_ip = 77;
                                continue _fun111114
                            }
                        case 16:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 2;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.can;
                            var0 = {};
                            var0.permission = var4;
                            var5 = _closure2_slot2;
                            var0.user = var5;
                            var5 = _closure2_slot0;
                            var0.context = var5;
                            var0 = var2.bind(var3)(var0);
                            _fun111114_ip = 97;
                            continue _fun111114;
                        case 77:
                            var3 = _closure2_slot1;
                            var2 = var3.can;
                            var1 = _closure2_slot0;
                            var0 = var2.bind(var3)(var4, var1);
                        case 97:
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg2;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.Permissions;
    var8 = var4.SET_VOICE_CHANNEL_STATUS;
    var7 = new Array(3);
    var7[0] = var8;
    var8 = var4.CONNECT;
    var7[1] = var8;
    var8 = var4.VIEW_CHANNEL;
    var7[2] = var8;
    var _closure1_slot4 = var7;
    var7 = var4.SET_VOICE_CHANNEL_STATUS;
    var4 = new Array(1);
    var4[0] = var7;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/calls/useCanSetVoiceChannelStatus.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0() {
        _fun111115: for (var _fun111115_ip = 0;;) switch (_fun111115_ip) {
            case 0:
                var7 = arg0;
                var6 = arguments[1];
                var5 = arguments[2];
                var _closure2_slot0 = var7;
                var4 = undefined;
                if (!(var6 === var4)) {
                    _fun111115_ip = 23;
                    continue _fun111115
                }
            case 21:
                var6 = false;
            case 23:
                var _closure2_slot1 = var6;
                var _closure2_slot2 = var5;
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 3;
                var2 = var8[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.useStateFromStores;
                var1 = _closure1_slot3;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = new Array(3);
                var1[0] = var7;
                var1[1] = var6;
                var1[2] = var5;
                var0 = function() { // Environment: var0
                    var5 = _closure1_slot6;
                    var9 = _closure2_slot0;
                    var8 = _closure1_slot3;
                    var7 = _closure2_slot1;
                    var6 = _closure2_slot2;
                    var10 = undefined;
                    var0 = var10[var5](var9, var8, var7, var6, var5);
                    return var0;
                };
                var0 = var3.bind(var4)(var2, var0, var1);
                return var0;
        }
    };
    var2.default = var4;
    var2._canSetVoiceChannelStatus = var3;
    var1 = function arg0() {
        _fun111117: for (var _fun111117_ip = 0;;) switch (_fun111117_ip) {
            case 0:
                var5 = arguments[1];
                var4 = undefined;
                if (!(var5 === var4)) {
                    _fun111117_ip = 11;
                    continue _fun111117
                }
            case 9:
                var5 = false;
            case 11:
                var3 = _closure1_slot6;
                var8 = _closure1_slot3;
                var9 = arg0;
                var6 = arguments[2];
                var10 = undefined;
                var7 = var5;
                var0 = var10[var3](var9, var8, var7, var6, var5);
                return var0;
        }
    };
    var2.canSetVoiceChannelStatus = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3091, 483, 3096, 566, 2]);