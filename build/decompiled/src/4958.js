// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.useCallback;
    var _closure1_slot3 = var3;
    var1 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: useDetectorUpdater, environment: var1
        var5 = arg0;
        var6 = arg1;
        var7 = arg2;
        var8 = arg3;
        var4 = arg4;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var6;
        var _closure2_slot2 = var7;
        var _closure2_slot3 = var8;
        var _closure2_slot4 = var4;
        var9 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 1;
        var2 = var3[var2];
        var3 = undefined;
        var9 = var9.bind(var3)(var2);
        var2 = var9.useForceRender;
        var9 = var2.bind(var9)();
        var _closure2_slot5 = var9;
        var2 = _closure1_slot3;
        var1 = new Array(6);
        var1[0] = var9;
        var1[1] = var8;
        var1[2] = var7;
        var1[3] = var6;
        var1[4] = var5;
        var1[5] = var4;
        var0 = function(arg0) { // Environment: var0
            _fun44780: for (var _fun44780_ip = 0;;) switch (_fun44780_ip) {
                case 0:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 2;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var3 = _closure2_slot0;
                    var2 = var3.viewRef;
                    var2 = var5.bind(var0)(var2);
                    var3 = var3.previousViewTag;
                    var3 = var2 !== var3;
                    if (var3) {
                        _fun44780_ip = 158;
                        continue _fun44780
                    }
                case 56:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 3;
                    var5 = var7[var5];
                    var8 = var6.bind(var0)(var5);
                    var7 = var8.needsToReattach;
                    var6 = _closure2_slot1;
                    var5 = _closure2_slot2;
                    var5 = var7.bind(var8)(var6, var5);
                    if (var5) {
                        _fun44780_ip = 158;
                        continue _fun44780
                    }
                case 99:
                    var5 = arg0;
                    if (var5) {
                        _fun44780_ip = 317;
                        continue _fun44780
                    }
                case 108:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 6;
                    var5 = var7[var5];
                    var9 = var6.bind(var0)(var5);
                    var8 = var9.updateHandlers;
                    var7 = _closure2_slot1;
                    var6 = _closure2_slot3;
                    var5 = _closure2_slot2;
                    var5 = var8.bind(var9)(var7, var6, var5);
                    _fun44780_ip = 317;
                    continue _fun44780;
                case 158:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 1;
                    var4 = var6[var4];
                    var8 = var5.bind(var0)(var4);
                    var7 = var8.validateDetectorChildren;
                    var4 = _closure2_slot0;
                    var4 = var4.viewRef;
                    var4 = var7.bind(var8)(var4);
                    var4 = 4;
                    var4 = var6[var4];
                    var8 = var5.bind(var0)(var4);
                    var4 = var8.dropHandlers;
                    var7 = _closure2_slot1;
                    var4 = var4.bind(var8)(var7);
                    var4 = 5;
                    var4 = var6[var4];
                    var6 = var5.bind(var0)(var4);
                    var5 = var6.attachHandlers;
                    var4 = {};
                    var4.preparedGesture = var7;
                    var7 = _closure2_slot3;
                    var4.gestureConfig = var7;
                    var7 = _closure2_slot2;
                    var4.gesturesToAttach = var7;
                    var7 = _closure2_slot4;
                    var4.webEventHandlersRef = var7;
                    var4.viewTag = var2;
                    var4 = var5.bind(var6)(var4);
                    if (!var3) {
                        _fun44780_ip = 317;
                        continue _fun44780
                    }
                case 291:
                    var3 = _closure2_slot0;
                    var3.previousViewTag = var2;
                    var2 = true;
                    var3.forceRebuildReanimatedEvent = var2;
                    var1 = _closure2_slot5;
                    var1 = var1.bind(var0)();
                case 317:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useDetectorUpdater = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4954, 4943, 4959, 4960, 4961, 4962]);