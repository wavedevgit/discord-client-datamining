// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var7 = global;
    var8 = var7.Object;
    var4 = var8.defineProperty;
    var3 = {};
    var9 = true;
    var3.value = var9;
    var0 = '__esModule';
    var0 = var4.bind(var8)(var2, var0, var3);
    var13 = 0;
    var3 = var6[var13];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var4 = var3.createContext;
    var3 = var3.useContext;
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var11 = var3.Animated;
    var5 = function() {
        var0 = undefined;
        return var0;
    };
    var _closure1_slot1 = var5;
    var6 = function() {
        var0 = _closure1_slot1;
        return var0;
    };
    var8 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = {};
        var0.value = var1;
        var1 = _closure1_slot1;
        var0.addListener = var1;
        var0.removeListener = var1;
        var0.modify = var1;
        var2 = function() {
            var0 = _closure2_slot0;
            return var0;
        };
        var0.get = var2;
        var0.set = var1;
        return var0;
    };
    var10 = var8.bind(var0)(var13);
    var3 = null;
    var8 = var8.bind(var0)(var3);
    var3 = {};
    var3.enabled = var9;
    var9 = {};
    var12 = var11.Value;
    var14 = var12.prototype;
    var14 = Object.create(var14, {
        constructor: {
            value: var12
        }
    });
    var18 = var14;
    var17 = 0;
    var12 = new var18[var12](var17, var16);
    var12 = var12 instanceof Object ? var12 : var14;
    var9.progress = var12;
    var11 = var11.Value;
    var12 = var11.prototype;
    var12 = Object.create(var12, {
        constructor: {
            value: var11
        }
    });
    var18 = var12;
    var11 = new var18[var11](var17, var16);
    var11 = var11 instanceof Object ? var11 : var12;
    var9.height = var11;
    var3.animated = var9;
    var9 = {};
    var9.progress = var10;
    var9.height = var10;
    var3.reanimated = var9;
    var3.layout = var8;
    var7 = var7.Promise;
    var7 = var7.resolve;
    var3.update = var7;
    var3.setKeyboardHandlers = var6;
    var3.setInputHandlers = var6;
    var3.setEnabled = var5;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var2.KeyboardContext = var3;
    var1 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var2.useKeyboardContext = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27]);