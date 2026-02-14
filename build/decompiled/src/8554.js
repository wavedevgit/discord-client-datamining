// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var1 = true;
    var3.value = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var2, var1, var3);
    var3 = {};
    var7 = 'KeyboardControllerView';
    var3.uiViewClassName = var7;
    var1 = {};
    var8 = {};
    var9 = 'onKeyboardMoveStart';
    var8.registrationName = var9;
    var1.topKeyboardMoveStart = var8;
    var8 = {};
    var9 = 'onKeyboardMove';
    var8.registrationName = var9;
    var1.topKeyboardMove = var8;
    var8 = {};
    var9 = 'onKeyboardMoveEnd';
    var8.registrationName = var9;
    var1.topKeyboardMoveEnd = var8;
    var8 = {};
    var9 = 'onKeyboardMoveInteractive';
    var8.registrationName = var9;
    var1.topKeyboardMoveInteractive = var8;
    var8 = {};
    var9 = 'onFocusedInputLayoutChanged';
    var8.registrationName = var9;
    var1.topFocusedInputLayoutChanged = var8;
    var8 = {};
    var9 = 'onFocusedInputTextChanged';
    var8.registrationName = var9;
    var1.topFocusedInputTextChanged = var8;
    var8 = {};
    var9 = 'onFocusedInputSelectionChanged';
    var8.registrationName = var9;
    var1.topFocusedInputSelectionChanged = var8;
    var3.directEventTypes = var1;
    var10 = var0.Object;
    var9 = var10.assign;
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var11 = var4.bind(var0)(var1);
    var8 = var11.ConditionallyIgnoredEventHandlers;
    var1 = {
        'onKeyboardMoveStart': true,
        'onKeyboardMove': true,
        'onKeyboardMoveEnd': true,
        'onKeyboardMoveInteractive': true,
        'onFocusedInputLayoutChanged': true,
        'onFocusedInputTextChanged': true,
        'onFocusedInputSelectionChanged': true
    };
    var8 = var8.bind(var11)(var1);
    var1 = {
        'enabled': true,
        'statusBarTranslucent': true,
        'navigationBarTranslucent': true,
        'preserveEdgeToEdge': true
    };
    var1 = var9.bind(var10)(var1, var8);
    var3.validAttributes = var1;
    var _closure1_slot2 = var3;
    var1 = 1;
    var1 = var6[var1];
    var6 = var4.bind(var0)(var1);
    var4 = var6.get;
    var1 = function() { // Environment: var5
        var0 = _closure1_slot2;
        return var0;
    };
    var4 = var4.bind(var6)(var7, var1);
    var1 = {};
    var5 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var5 = var2.bind(var0)(var1);
        var4 = var5.dispatchCommand;
        var3 = arg0;
        var2 = 'synchronizeFocusedInputLayout';
        var1 = new Array(0);
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var1.synchronizeFocusedInputLayout = var5;
    var2.default = var4;
    var2.__INTERNAL_VIEW_CONFIG = var3;
    var2.Commands = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [110, 42, 117]);