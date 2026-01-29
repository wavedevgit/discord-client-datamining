// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7.value = var1;
    var3 = '__esModule';
    var3 = var8.bind(var9)(var2, var3, var7);
    var3 = {};
    var7 = 'RNSSearchBar';
    var3.uiViewClassName = var7;
    var8 = {};
    var9 = {};
    var10 = 'onSearchFocus';
    var9.registrationName = var10;
    var8.topSearchFocus = var9;
    var9 = {};
    var10 = 'onSearchBlur';
    var9.registrationName = var10;
    var8.topSearchBlur = var9;
    var9 = {};
    var10 = 'onSearchButtonPress';
    var9.registrationName = var10;
    var8.topSearchButtonPress = var9;
    var9 = {};
    var10 = 'onCancelButtonPress';
    var9.registrationName = var10;
    var8.topCancelButtonPress = var9;
    var9 = {};
    var10 = 'onChangeText';
    var9.registrationName = var10;
    var8.topChangeText = var9;
    var9 = {};
    var10 = 'onClose';
    var9.registrationName = var10;
    var8.topClose = var9;
    var9 = {};
    var10 = 'onOpen';
    var9.registrationName = var10;
    var8.topOpen = var9;
    var3.directEventTypes = var8;
    var10 = var0.Object;
    var9 = var10.assign;
    var8 = {
        'hideWhenScrolling': true,
        'autoCapitalize': true,
        'placeholder': true,
        'placement': true,
        'obscureBackground': true,
        'hideNavigationBar': true,
        'cancelButtonText': true,
        'barTintColor': null,
        'tintColor': null,
        'textColor': null,
        'disableBackButtonOverride': true,
        'inputType': true
    };
    var11 = {};
    var12 = 0;
    var13 = var6[var12];
    var0 = undefined;
    var13 = var4.bind(var0)(var13);
    var13 = var13.default;
    var11.process = var13;
    var8.barTintColor = var11;
    var11 = {};
    var13 = var6[var12];
    var13 = var4.bind(var0)(var13);
    var13 = var13.default;
    var11.process = var13;
    var8.tintColor = var11;
    var11 = {};
    var13 = var6[var12];
    var13 = var4.bind(var0)(var13);
    var13 = var13.default;
    var11.process = var13;
    var8.textColor = var11;
    var11 = {};
    var13 = var6[var12];
    var13 = var4.bind(var0)(var13);
    var13 = var13.default;
    var11.process = var13;
    var8.hintTextColor = var11;
    var11 = {};
    var12 = var6[var12];
    var12 = var4.bind(var0)(var12);
    var12 = var12.default;
    var11.process = var12;
    var8.headerIconColor = var11;
    var8.shouldShowHintSearchIcon = var1;
    var1 = 1;
    var1 = var6[var1];
    var12 = var4.bind(var0)(var1);
    var11 = var12.ConditionallyIgnoredEventHandlers;
    var1 = {
        'onSearchFocus': true,
        'onSearchBlur': true,
        'onSearchButtonPress': true,
        'onCancelButtonPress': true,
        'onChangeText': true,
        'onClose': true,
        'onOpen': true
    };
    var1 = var11.bind(var12)(var1);
    var1 = var9.bind(var10)(var8, var1);
    var3.validAttributes = var1;
    var _closure1_slot2 = var3;
    var1 = 2;
    var1 = var6[var1];
    var6 = var4.bind(var0)(var1);
    var4 = var6.get;
    var1 = function() { // Environment: var5
        var0 = _closure1_slot2;
        return var0;
    };
    var4 = var4.bind(var6)(var7, var1);
    var1 = {};
    var6 = function(arg0) { // Original name: blur, environment: var5
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var5 = var2.bind(var0)(var1);
        var4 = var5.dispatchCommand;
        var3 = arg0;
        var2 = 'blur';
        var1 = new Array(0);
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var1.blur = var6;
    var6 = function(arg0) { // Original name: focus, environment: var5
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var5 = var2.bind(var0)(var1);
        var4 = var5.dispatchCommand;
        var3 = arg0;
        var2 = 'focus';
        var1 = new Array(0);
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var1.focus = var6;
    var6 = function(arg0) { // Original name: clearText, environment: var5
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var5 = var2.bind(var0)(var1);
        var4 = var5.dispatchCommand;
        var3 = arg0;
        var2 = 'clearText';
        var1 = new Array(0);
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var1.clearText = var6;
    var6 = function(arg0, arg1) { // Original name: toggleCancelButton, environment: var5
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var5 = var2.bind(var0)(var1);
        var4 = var5.dispatchCommand;
        var3 = new Array(1);
        var1 = arg1;
        var3[0] = var1;
        var2 = arg0;
        var1 = 'toggleCancelButton';
        var1 = var4.bind(var5)(var2, var1, var3);
        return var0;
    };
    var1.toggleCancelButton = var6;
    var6 = function(arg0, arg1) { // Original name: setText, environment: var5
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var5 = var2.bind(var0)(var1);
        var4 = var5.dispatchCommand;
        var3 = new Array(1);
        var1 = arg1;
        var3[0] = var1;
        var2 = arg0;
        var1 = 'setText';
        var1 = var4.bind(var5)(var2, var1, var3);
        return var0;
    };
    var1.setText = var6;
    var5 = function(arg0) { // Original name: cancelSearch, environment: var5
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var5 = var2.bind(var0)(var1);
        var4 = var5.dispatchCommand;
        var3 = arg0;
        var2 = 'cancelSearch';
        var1 = new Array(0);
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var1.cancelSearch = var5;
    var2.default = var4;
    var2.__INTERNAL_VIEW_CONFIG = var3;
    var2.Commands = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [38, 110, 42, 117]);