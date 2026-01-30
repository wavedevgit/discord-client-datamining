// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var4 = var0.Map;
    var2 = new Array(4);
    var3 = ['onStart', 'onKeyboardMoveStart'];
    var2[0] = var3;
    var3 = ['onMove', 'onKeyboardMove'];
    var2[1] = var3;
    var3 = ['onEnd', 'onKeyboardMoveEnd'];
    var2[2] = var3;
    var3 = ['onInteractive', 'onKeyboardMoveInteractive'];
    var2[3] = var3;
    var3 = var4.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var4
        }
    });
    var9 = var3;
    var8 = var2;
    var2 = new var9[var4](var8, var7);
    var2 = var2 instanceof Object ? var2 : var3;
    var4 = var0.Map;
    var0 = new Array(2);
    var3 = ['onChangeText', 'onFocusedInputTextChanged'];
    var0[0] = var3;
    var3 = ['onSelectionChange', 'onFocusedInputSelectionChanged'];
    var0[1] = var3;
    var3 = var4.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var4
        }
    });
    var9 = var3;
    var8 = var0;
    var0 = new var9[var4](var8, var7);
    var0 = var0 instanceof Object ? var0 : var3;
    var1.keyboardEventsMap = var2;
    var1.focusedInputEventsMap = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);