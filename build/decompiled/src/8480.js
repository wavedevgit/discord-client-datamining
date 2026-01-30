// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var7 = dependencyMap;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4.value = var1;
    var1 = '__esModule';
    var1 = var6.bind(var8)(var2, var1, var4);
    var1 = {};
    var6 = 'KeyboardControllerView';
    var1.uiViewClassName = var6;
    var4 = {};
    var8 = {};
    var9 = 'onKeyboardMoveStart';
    var8.registrationName = var9;
    var4.topKeyboardMoveStart = var8;
    var8 = {};
    var9 = 'onKeyboardMove';
    var8.registrationName = var9;
    var4.topKeyboardMove = var8;
    var8 = {};
    var9 = 'onKeyboardMoveEnd';
    var8.registrationName = var9;
    var4.topKeyboardMoveEnd = var8;
    var8 = {};
    var9 = 'onKeyboardMoveInteractive';
    var8.registrationName = var9;
    var4.topKeyboardMoveInteractive = var8;
    var8 = {};
    var9 = 'onFocusedInputLayoutChanged';
    var8.registrationName = var9;
    var4.topFocusedInputLayoutChanged = var8;
    var8 = {};
    var9 = 'onFocusedInputTextChanged';
    var8.registrationName = var9;
    var4.topFocusedInputTextChanged = var8;
    var8 = {};
    var9 = 'onFocusedInputSelectionChanged';
    var8.registrationName = var9;
    var4.topFocusedInputSelectionChanged = var8;
    var1.directEventTypes = var4;
    var10 = var0.Object;
    var9 = var10.assign;
    var0 = 0;
    var4 = var7[var0];
    var0 = undefined;
    var11 = var5.bind(var0)(var4);
    var8 = var11.ConditionallyIgnoredEventHandlers;
    var4 = {
        'onKeyboardMoveStart': true,
        'onKeyboardMove': true,
        'onKeyboardMoveEnd': true,
        'onKeyboardMoveInteractive': true,
        'onFocusedInputLayoutChanged': true,
        'onFocusedInputTextChanged': true,
        'onFocusedInputSelectionChanged': true
    };
    var8 = var8.bind(var11)(var4);
    var4 = {
        'enabled': true,
        'statusBarTranslucent': true,
        'navigationBarTranslucent': true,
        'preserveEdgeToEdge': true
    };
    var4 = var9.bind(var10)(var4, var8);
    var1.validAttributes = var4;
    var _closure1_slot0 = var1;
    var4 = 1;
    var4 = var7[var4];
    var5 = var5.bind(var0)(var4);
    var4 = var5.get;
    var3 = function() { // Environment: var3
        var0 = _closure1_slot0;
        return var0;
    };
    var3 = var4.bind(var5)(var6, var3);
    var2.default = var3;
    var2.__INTERNAL_VIEW_CONFIG = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [110, 42]);