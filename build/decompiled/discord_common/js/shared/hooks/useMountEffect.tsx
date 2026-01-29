// ../discord_common/js/shared/hooks/useMountEffect.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var5 = var4[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot0 = var3;
    var3 = 1;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/shared/hooks/useMountEffect.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: useMountEffect, environment: var1
        var3 = _closure1_slot0;
        var2 = var3.useRef;
        var1 = arg0;
        var1 = var2.bind(var3)(var1);
        var _closure2_slot0 = var1;
        var2 = var3.useEffect;
        var1 = function() { // Environment: var0
            var1 = _closure2_slot0;
            var0 = var1.current;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0 = new Array(0);
        var0 = var2.bind(var3)(var1, var0);
        var0 = undefined;
        return var0;
    };
    var2.default = var3;
    var3 = function(arg0) { // Original name: useMountLayoutEffect, environment: var1
        var3 = _closure1_slot0;
        var2 = var3.useRef;
        var1 = arg0;
        var1 = var2.bind(var3)(var1);
        var _closure2_slot0 = var1;
        var2 = var3.useLayoutEffect;
        var1 = function() { // Environment: var0
            var1 = _closure2_slot0;
            var0 = var1.current;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0 = new Array(0);
        var0 = var2.bind(var3)(var1, var0);
        var0 = undefined;
        return var0;
    };
    var2.useMountLayoutEffect = var3;
    var1 = function(arg0) { // Original name: useUnmountEffect, environment: var1
        var2 = arg0;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot0;
        var1 = var3.useRef;
        var1 = var1.bind(var3)(var2);
        var _closure2_slot1 = var1;
        var2 = var3.useEffect;
        var1 = function() { // Environment: var0
            var1 = _closure2_slot1;
            var0 = _closure2_slot0;
            var1.current = var0;
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        var2 = var3.useEffect;
        var1 = function() { // Environment: var0
            var0 = function() { // Environment: var0
                var1 = _closure2_slot1;
                var0 = var1.current;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
            };
            return var0;
        };
        var0 = new Array(0);
        var0 = var2.bind(var3)(var1, var0);
        var0 = undefined;
        return var0;
    };
    var2.useUnmountEffect = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 2]);