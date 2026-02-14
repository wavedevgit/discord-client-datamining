// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot1 = var4;
    var1 = function() { // Environment: var1
        var4 = _closure1_slot1;
        var3 = function() {
            var3 = _closure1_slot0;
            var2 = _closure2_slot0;
            var0 = undefined;
            var1 = this;
            var1 = var3.bind(var0)(var1, var2);
            return var0;
        };
        var _closure2_slot0 = var3;
        var0 = {};
        var2 = 'addMountListener';
        var0.key = var2;
        var2 = function arg0() {
            var3 = arg0;
            var1 = this;
            var _closure3_slot0 = var3;
            var _closure3_slot1 = var1;
            var2 = var1.mountListeners;
            var1 = var2.add;
            var1 = var1.bind(var2)(var3);
            var0 = function() { // Environment: var0
                var1 = _closure3_slot1;
                var2 = var1.mountListeners;
                var1 = var2.delete;
                var0 = _closure3_slot0;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            return var0;
        };
        var0.value = var2;
        var2 = new Array(6);
        var2[0] = var0;
        var0 = {};
        var5 = 'addUnmountListener';
        var0.key = var5;
        var5 = function arg0() {
            var3 = arg0;
            var1 = this;
            var _closure3_slot0 = var3;
            var _closure3_slot1 = var1;
            var2 = var1.unmountListeners;
            var1 = var2.add;
            var1 = var1.bind(var2)(var3);
            var0 = function() { // Environment: var0
                var1 = _closure3_slot1;
                var2 = var1.unmountListeners;
                var1 = var2.delete;
                var0 = _closure3_slot0;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            return var0;
        };
        var0.value = var5;
        var2[1] = var0;
        var0 = {};
        var5 = 'gestureHandlerWillMount';
        var0.key = var5;
        var5 = function arg0() {
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = this;
            var2 = var1.mountListeners;
            var1 = var2.forEach;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure3_slot0;
                var1 = arg0;
                var0 = undefined;
                var0 = var1.bind(var0)(var2);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var2[2] = var0;
        var0 = {};
        var5 = 'gestureHandlerWillUnmount';
        var0.key = var5;
        var5 = function arg0() {
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = this;
            var2 = var1.unmountListeners;
            var1 = var2.forEach;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure3_slot0;
                var1 = arg0;
                var0 = undefined;
                var0 = var1.bind(var0)(var2);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var2[3] = var0;
        var0 = {};
        var5 = 'gestureWillMount';
        var0.key = var5;
        var5 = function arg0() {
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = this;
            var2 = var1.mountListeners;
            var1 = var2.forEach;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure3_slot0;
                var1 = arg0;
                var0 = undefined;
                var0 = var1.bind(var0)(var2);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var2[4] = var0;
        var0 = {};
        var5 = 'gestureWillUnmount';
        var0.key = var5;
        var1 = function arg0() {
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = this;
            var2 = var1.unmountListeners;
            var1 = var2.forEach;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure3_slot0;
                var1 = arg0;
                var0 = undefined;
                var0 = var1.bind(var0)(var2);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var2[5] = var0;
        var1 = undefined;
        var0 = null;
        var0 = var4.bind(var1)(var3, var0, var2);
        return var0;
    };
    var1 = var1.bind(var0)();
    var4 = var3.Set;
    var5 = var4.prototype;
    var5 = Object.create(var5, {
        constructor: {
            value: var4
        }
    });
    var12 = var5;
    var4 = new var12[var4](var11);
    var4 = var4 instanceof Object ? var4 : var5;
    var1.mountListeners = var4;
    var3 = var3.Set;
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var12 = var4;
    var3 = new var12[var3](var11);
    var3 = var3 instanceof Object ? var3 : var4;
    var1.unmountListeners = var3;
    var2.MountRegistry = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7]);