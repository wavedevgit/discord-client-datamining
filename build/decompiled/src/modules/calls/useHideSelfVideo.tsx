// modules/calls/useHideSelfVideo.tsx
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
    var3 = var3.VideoToggleState;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.MediaEngineContextTypes;
    var _closure1_slot6 = var6;
    var3 = var3.Features;
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/calls/useHideSelfVideo.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useHideSelfVideo, environment: var1
        _fun68517: for (var _fun68517_ip = 0;;) switch (_fun68517_ip) {
            case 0:
                var5 = arg0;
                var2 = arguments[1];
                var8 = undefined;
                if (!(var2 === var8)) {
                    _fun68517_ip = 27;
                    continue _fun68517
                }
            case 14:
                var0 = _closure1_slot6;
                var2 = var0.DEFAULT;
            case 27:
                var _closure2_slot0 = var2;
                var _closure2_slot1 = var8;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 4;
                var3 = var9[var6];
                var11 = var7.bind(var8)(var3);
                var10 = var11.useStateFromStores;
                var3 = _closure1_slot3;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = function() { // Environment: var1
                    var1 = _closure1_slot3;
                    var0 = var1.getId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var4 = var10.bind(var11)(var4, var3);
                _closure2_slot1 = var4;
                var3 = var9[var6];
                var12 = var7.bind(var8)(var3);
                var11 = var12.useStateFromStores;
                var3 = _closure1_slot4;
                var10 = new Array(1);
                var10[0] = var3;
                var0 = function() { // Environment: var1
                    var2 = _closure1_slot4;
                    var1 = var2.supports;
                    var0 = _closure1_slot7;
                    var0 = var0.DISABLE_VIDEO;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var11.bind(var12)(var10, var0);
                var6 = var9[var6];
                var8 = var7.bind(var8)(var6);
                var7 = var8.useStateFromStores;
                var6 = new Array(1);
                var6[0] = var3;
                var3 = new Array(2);
                var3[0] = var4;
                var3[1] = var2;
                var2 = function() { // Environment: var1
                    var3 = _closure1_slot4;
                    var2 = var3.isLocalVideoDisabled;
                    var1 = _closure2_slot1;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var2 = var7.bind(var8)(var6, var2, var3);
                var3 = null;
                var3 = var3 == var5;
                if (var3) {
                    _fun68517_ip = 192;
                    continue _fun68517
                }
            case 188:
                var3 = var5 === var4;
            case 192:
                if (!var3) {
                    _fun68517_ip = 198;
                    continue _fun68517
                }
            case 195:
                var3 = var0;
            case 198:
                var0 = new Array(3);
                var0[0] = var3;
                var0[1] = var2;
                var1 = function(arg0) { // Environment: var1
                    _fun68521: for (var _fun68521_ip = 0;;) switch (_fun68521_ip) {
                        case 0:
                            var1 = _closure1_slot5;
                            var2 = arg0;
                            if (var2) {
                                _fun68521_ip = 21;
                                continue _fun68521
                            }
                        case 13:
                            var5 = var1.MANUAL_ENABLED;
                            _fun68521_ip = 27;
                            continue _fun68521;
                        case 21:
                            var5 = var1.DISABLED;
                        case 27:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 5;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.setDisableLocalVideo;
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot0;
                            var1 = var3.bind(var4)(var2, var5, var1);
                            return var0;
                    }
                };
                var0[2] = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1216, 3435, 660, 3469, 566, 8167, 2]);