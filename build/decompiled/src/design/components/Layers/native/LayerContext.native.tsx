// design/components/Layers/native/LayerContext.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
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
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var4 = var5[var3];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var4);
    var1 = function() { // Environment: var1
        var3 = _closure1_slot1;
        var2 = function() {
            var2 = this;
            var3 = _closure1_slot0;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = {};
            var3 = null;
            var1.current = var3;
            var2.surfaceRef = var1;
            var1 = new Array(0);
            var2.items = var1;
            var1 = function() { // Environment: var1
                var0 = null;
                return var0;
            };
            var2.invalidate = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'add';
        var0.key = var1;
        var1 = function arg0, arg1() {
            var4 = arg0;
            var1 = this;
            var _closure3_slot0 = var4;
            var3 = var1.items;
            var2 = var3.filter;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var1 = var0.key;
                var0 = _closure3_slot0;
                var0 = var1 !== var0;
                return var0;
            };
            var0 = var2.bind(var3)(var0);
            var1.items = var0;
            var3 = var1.items;
            var2 = var3.push;
            var0 = {};
            var0.key = var4;
            var4 = arg1;
            var0.component = var4;
            var0 = var2.bind(var3)(var0);
            var0 = var1.invalidate;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(3);
        var1[0] = var0;
        var0 = {};
        var5 = 'remove';
        var0.key = var5;
        var5 = function arg0() {
            var1 = this;
            var2 = arg0;
            var _closure3_slot0 = var2;
            var3 = var1.items;
            var2 = var3.filter;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var1 = var0.key;
                var0 = _closure3_slot0;
                var0 = var1 !== var0;
                return var0;
            };
            var0 = var2.bind(var3)(var0);
            var1.items = var0;
            var0 = var1.invalidate;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'setSurfaceRef';
        var0.key = var5;
        var4 = function arg0() {
            var0 = this;
            var1 = var0.surfaceRef;
            var0 = arg0;
            var1.current = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var4;
        var1[2] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var1.bind(var0)();
    var1 = var3.prototype;
    var4 = Object.create(var1, {
        constructor: {
            value: var3
        }
    });
    var11 = var4;
    var1 = new var11[var3](var10);
    var4 = var1 instanceof Object ? var1 : var4;
    var1 = var6.createContext;
    var1 = var1.bind(var6)(var4);
    var4 = 3;
    var5 = var5[var4];
    var4 = arg1;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Layers/native/LayerContext.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2.LayerContextManager = var3;
    var2.LayerContext = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 31, 2]);