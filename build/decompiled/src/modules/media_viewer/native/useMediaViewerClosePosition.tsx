// modules/media_viewer/native/useMediaViewerClosePosition.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function(arg0, arg1, arg2) { // Original name: computeClosePosition, environment: var1
        _fun76416: for (var _fun76416_ip = 0;;) switch (_fun76416_ip) {
            case 0:
                var1 = arg1;
                var5 = arg2;
                var0 = null;
                if (!(var0 == var5)) {
                    _fun76416_ip = 20;
                    continue _fun76416
                }
            case 12:
                var0 = {};
                var0.height = var1;
                _fun76416_ip = 55;
                continue _fun76416;
            case 20:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 3;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = arg0;
                var0 = var3.bind(var4)(var2, var1, var5);
            case 55:
                var0 = var0.height;
                var1 = var1 + var0;
                var0 = 2;
                var0 = var1 / var0;
                return var0;
        }
    };
    var _closure1_slot8 = var0;
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
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NOOP;
    var _closure1_slot5 = var3;
    var3 = {};
    var6 = 'function useMediaViewerClosePositionTsx1(){const{index}=this.__closure;return index.get();}';
    var3.code = var6;
    var _closure1_slot6 = var3;
    var3 = {};
    var6 = 'function useMediaViewerClosePositionTsx2(index){const{runOnJS,setClosePosition}=this.__closure;runOnJS(setClosePosition)(index);}';
    var3.code = var6;
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_viewer/native/useMediaViewerClosePosition.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useMediaViewerClosePosition, environment: var1
        _fun76417: for (var _fun76417_ip = 0;;) switch (_fun76417_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.index;
                var _closure2_slot0 = var5;
                var8 = var0.sources;
                var _closure2_slot1 = var8;
                var3 = var0.onClose;
                var13 = undefined;
                if (!(var3 === var13)) {
                    _fun76417_ip = 43;
                    continue _fun76417
                }
            case 36:
                var3 = _closure1_slot5;
            case 43:
                var7 = var0.windowHeight;
                var _closure2_slot2 = var7;
                var2 = var0.windowWidth;
                var _closure2_slot3 = var2;
                var _closure2_slot4 = var13;
                var _closure2_slot5 = var13;
                var _closure2_slot6 = var13;
                var4 = _closure1_slot1;
                var14 = _closure1_slot2;
                var0 = 4;
                var0 = var14[var0];
                var0 = var4.bind(var13)(var0);
                var10 = var0.bind(var13)(var3);
                _closure2_slot4 = var10;
                var4 = _closure1_slot4;
                var3 = var4.useState;
                var0 = function() { // Environment: var1
                    var4 = _closure1_slot8;
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot2;
                    var1 = _closure2_slot1;
                    var5 = _closure2_slot0;
                    var0 = var5.get;
                    var0 = var0.bind(var5)();
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var6 = var3.bind(var4)(var0);
                var3 = _closure1_slot3;
                var0 = 2;
                var6 = var3.bind(var13)(var6, var0);
                var0 = 0;
                var0 = var6[var0];
                var3 = 1;
                var3 = var6[var3];
                _closure2_slot5 = var3;
                var6 = var4.useCallback;
                var3 = new Array(4);
                var3[0] = var10;
                var3[1] = var8;
                var3[2] = var7;
                var3[3] = var2;
                var2 = function(arg0) { // Environment: var1
                    _fun76419: for (var _fun76419_ip = 0;;) switch (_fun76419_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = arg0;
                            var5 = var2[var1];
                            var1 = null;
                            if (!(var1 == var5)) {
                                _fun76419_ip = 30;
                                continue _fun76419
                            }
                        case 20:
                            var2 = _closure2_slot4;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                        case 30:
                            var2 = _closure2_slot5;
                            var4 = _closure1_slot8;
                            var3 = _closure2_slot3;
                            var1 = _closure2_slot2;
                            var0 = undefined;
                            var1 = var4.bind(var0)(var3, var1, var5);
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var6 = var6.bind(var4)(var2, var3);
                _closure2_slot6 = var6;
                var12 = _closure1_slot0;
                var11 = 5;
                var2 = var14[var11];
                var8 = var12.bind(var13)(var2);
                var7 = var8.useAnimatedReaction;
                var3 = function() { // Original name: h, environment: var1
                    var1 = _closure2_slot0;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = {};
                var2.index = var5;
                var3.__closure = var2;
                var2 = 5031282724746.0;
                var3.__workletHash = var2;
                var2 = _closure1_slot6;
                var3.__initData = var2;
                var2 = function(arg0) { // Original name: f, environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 5;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.runOnJS;
                    var1 = _closure2_slot6;
                    var2 = var2.bind(var3)(var1);
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var10 = {};
                var11 = var14[var11];
                var11 = var12.bind(var13)(var11);
                var11 = var11.runOnJS;
                var10.runOnJS = var11;
                var10.setClosePosition = var6;
                var2.__closure = var10;
                var10 = 2709880768438.0;
                var2.__workletHash = var10;
                var9 = _closure1_slot7;
                var2.__initData = var9;
                var2 = var7.bind(var8)(var3, var2);
                var3 = var4.useEffect;
                var2 = new Array(2);
                var2[0] = var6;
                var2[1] = var5;
                var1 = function() { // Environment: var1
                    var2 = _closure2_slot6;
                    var1 = _closure2_slot0;
                    var0 = var1.get;
                    var1 = var0.bind(var1)();
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 660, 9702, 7497, 3679, 2]);