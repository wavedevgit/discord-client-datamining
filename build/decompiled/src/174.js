// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun2559: for (var _fun2559_ip = 0;;) switch (_fun2559_ip) {
        case 0:
            var2 = global;
            var3 = require;
            var4 = dependencyMap;
            var _closure1_slot0 = var3;
            var _closure1_slot1 = var4;
            var5 = var2.RN$Bridgeless;
            var1 = true;
            if (!(var1 !== var5)) {
                _fun2559_ip = 210;
                continue _fun2559
            }
        case 34:
            var7 = function(arg0) { // Original name: defineLazyTimer, environment: var0
                var4 = arg0;
                var _closure2_slot0 = var4;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 0;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.polyfillGlobal;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 4;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var1 = var0.default;
                    var0 = _closure2_slot0;
                    var0 = var1[var0];
                    return var0;
                };
                var1 = var2.bind(var3)(var4, var1);
                return var0;
            };
            var6 = undefined;
            var5 = 'setTimeout';
            var5 = var7.bind(var6)(var5);
            var5 = 'clearTimeout';
            var5 = var7.bind(var6)(var5);
            var5 = 'setInterval';
            var5 = var7.bind(var6)(var5);
            var5 = 'clearInterval';
            var5 = var7.bind(var6)(var5);
            var5 = 'requestAnimationFrame';
            var5 = var7.bind(var6)(var5);
            var5 = 'cancelAnimationFrame';
            var5 = var7.bind(var6)(var5);
            var5 = 'requestIdleCallback';
            var5 = var7.bind(var6)(var5);
            var5 = 'cancelIdleCallback';
            var5 = var7.bind(var6)(var5);
            var5 = 0;
            var7 = var4[var5];
            var10 = var3.bind(var6)(var7);
            var9 = var10.polyfillGlobal;
            var8 = 'queueMicrotask';
            var7 = function() { // Environment: var0
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.default;
                return var0;
            };
            var7 = var9.bind(var10)(var8, var7);
            var7 = var4[var5];
            var10 = var3.bind(var6)(var7);
            var9 = var10.polyfillGlobal;
            var8 = 'setImmediate';
            var7 = function() { // Environment: var0
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.default;
                var0 = var0.queueReactNativeMicrotask;
                return var0;
            };
            var7 = var9.bind(var10)(var8, var7);
            var5 = var4[var5];
            var8 = var3.bind(var6)(var5);
            var7 = var8.polyfillGlobal;
            var6 = 'clearImmediate';
            var5 = function() { // Environment: var0
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.default;
                var0 = var0.clearReactNativeMicrotask;
                return var0;
            };
            var5 = var7.bind(var8)(var6, var5);
            _fun2559_ip = 370;
            continue _fun2559;
        case 210:
            var2.RN$enableMicrotasksInReact = var1;
            var1 = 0;
            var5 = var4[var1];
            var2 = undefined;
            var8 = var3.bind(var2)(var5);
            var7 = var8.polyfillGlobal;
            var6 = 'queueMicrotask';
            var5 = function() { // Environment: var0
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.default;
                var0 = var0.queueMicrotask;
                return var0;
            };
            var5 = var7.bind(var8)(var6, var5);
            var5 = var4[var1];
            var8 = var3.bind(var2)(var5);
            var7 = var8.polyfillGlobal;
            var6 = 'setImmediate';
            var5 = function() { // Environment: var0
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 2;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.setImmediate;
                return var0;
            };
            var5 = var7.bind(var8)(var6, var5);
            var5 = var4[var1];
            var8 = var3.bind(var2)(var5);
            var7 = var8.polyfillGlobal;
            var6 = 'clearImmediate';
            var5 = function() { // Environment: var0
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 2;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.clearImmediate;
                return var0;
            };
            var5 = var7.bind(var8)(var6, var5);
            var5 = var4[var1];
            var8 = var3.bind(var2)(var5);
            var7 = var8.polyfillGlobal;
            var6 = 'requestIdleCallback';
            var5 = function() { // Environment: var0
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.default;
                var0 = var0.requestIdleCallback;
                return var0;
            };
            var5 = var7.bind(var8)(var6, var5);
            var1 = var4[var1];
            var3 = var3.bind(var2)(var1);
            var2 = var3.polyfillGlobal;
            var1 = 'cancelIdleCallback';
            var0 = function() { // Environment: var0
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.default;
                var0 = var0.cancelIdleCallback;
                return var0;
            };
            var0 = var2.bind(var3)(var1, var0);
        case 370:
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [126, 175, 176, 177, 178, 181]);