// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var8 = true;
    var3.value = var8;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var12 = 0;
    var3 = var6[var12];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var4 = var3.createContext;
    var3 = var3.useContext;
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var10 = var3.Animated;
    var5 = function() { // Original name: NOOP, environment: var1
        var0 = undefined;
        return var0;
    };
    var _closure1_slot1 = var5;
    var6 = function() { // Original name: NESTED_NOOP, environment: var1
        var0 = _closure1_slot1;
        return var0;
    };
    var7 = function(arg0) { // Original name: withSharedValue, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = {};
        var0.value = var1;
        var1 = _closure1_slot1;
        var0.addListener = var1;
        var0.removeListener = var1;
        var0.modify = var1;
        var2 = function() { // Original name: get, environment: var2
            var0 = _closure2_slot0;
            return var0;
        };
        var0.get = var2;
        var0.set = var1;
        return var0;
    };
    var9 = var7.bind(var0)(var12);
    var3 = null;
    var7 = var7.bind(var0)(var3);
    var3 = {};
    var3.enabled = var8;
    var8 = {};
    var11 = var10.Value;
    var13 = var11.prototype;
    var13 = Object.create(var13, {
        constructor: {
            value: var11
        }
    });
    var17 = var13;
    var16 = 0;
    var11 = new var17[var11](var16, var15);
    var11 = var11 instanceof Object ? var11 : var13;
    var8.progress = var11;
    var10 = var10.Value;
    var11 = var10.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var10
        }
    });
    var17 = var11;
    var10 = new var17[var10](var16, var15);
    var10 = var10 instanceof Object ? var10 : var11;
    var8.height = var10;
    var3.animated = var8;
    var8 = {};
    var8.progress = var9;
    var8.height = var9;
    var3.reanimated = var8;
    var3.layout = var7;
    var3.setKeyboardHandlers = var6;
    var3.setInputHandlers = var6;
    var3.setEnabled = var5;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var2.KeyboardContext = var3;
    var1 = function() { // Original name: useKeyboardContext, environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var2.useKeyboardContext = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27]);