// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = metroImportDefault;
    var _closure1_slot1 = var2;
    var2 = dependencyMap;
    var _closure1_slot2 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var0 = function(arg0) { // Original name: dropHandlers, environment: var0
        _fun44784: for (var _fun44784_ip = 0;;) switch (_fun44784_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.attachedGestures;
                var6 = var0;
                var3 = var6[Symbol.iterator];
                var6 = var3().next;
                var5 = 0;
                var0 = undefined;
                var4 = 1;
                var2 = 2;
            case 28:
                var9 = var6().value;
                var7 = var3;
                if (!(var7 !== var0)) {
                    _fun44784_ip = 152;
                    continue _fun44784
                }
            case 39: // try_start_0
                var10 = _closure1_slot1;
                var7 = _closure1_slot2;
                var8 = var7[var5];
                var11 = var10.bind(var0)(var8);
                var10 = var11.dropGestureHandler;
                var8 = var9.handlerTag;
                var8 = var10.bind(var11)(var8);
                var8 = _closure1_slot0;
                var10 = var7[var4];
                var13 = var8.bind(var0)(var10);
                var12 = var13.unregisterHandler;
                var11 = var9.handlerTag;
                var10 = var9.config;
                var10 = var10.testId;
                var10 = var12.bind(var13)(var11, var10);
                var7 = var7[var2];
                var7 = var8.bind(var0)(var7);
                var8 = var7.MountRegistry;
                var7 = var8.gestureWillUnmount;
                var7 = var7.bind(var8)(var9);
            case 143: // try_end0
                _fun44784_ip = 28;
                continue _fun44784;
            case 145: // catch_target0
                CatchBlockStart(arg_register = 2);
                var3.return();
                throw var2;
            case 152:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 3;
                var1 = var3[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.scheduleFlushOperations;
                var1 = var1.bind(var2)();
                return var0;
        }
    };
    var1.dropHandlers = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4926, 4920, 4942, 4940]);