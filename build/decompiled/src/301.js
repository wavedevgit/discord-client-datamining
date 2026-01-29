// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var6[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var3 = {};
    var7 = 'AndroidDrawerLayout';
    var3.uiViewClassName = var7;
    var8 = {};
    var9 = {};
    var10 = 'onDrawerSlide';
    var9.registrationName = var10;
    var8.topDrawerSlide = var9;
    var9 = {};
    var10 = 'onDrawerStateChanged';
    var9.registrationName = var10;
    var8.topDrawerStateChanged = var9;
    var9 = {};
    var10 = 'onDrawerOpen';
    var9.registrationName = var10;
    var8.topDrawerOpen = var9;
    var9 = {};
    var10 = 'onDrawerClose';
    var9.registrationName = var10;
    var8.topDrawerClose = var9;
    var3.directEventTypes = var8;
    var10 = var1.Object;
    var9 = var10.assign;
    var8 = {
        'keyboardDismissMode': true,
        'drawerBackgroundColor': null,
        'drawerPosition': true,
        'drawerWidth': true,
        'drawerLockMode': true
    };
    var1 = {};
    var11 = 1;
    var12 = var6[var11];
    var12 = var4.bind(var0)(var12);
    var12 = var12.default;
    var1.process = var12;
    var8.drawerBackgroundColor = var1;
    var1 = {};
    var11 = var6[var11];
    var11 = var4.bind(var0)(var11);
    var11 = var11.default;
    var1.process = var11;
    var8.statusBarBackgroundColor = var1;
    var1 = 2;
    var1 = var6[var1];
    var12 = var4.bind(var0)(var1);
    var11 = var12.ConditionallyIgnoredEventHandlers;
    var1 = {
        'onDrawerSlide': true,
        'onDrawerStateChanged': true,
        'onDrawerOpen': true,
        'onDrawerClose': true
    };
    var1 = var11.bind(var12)(var1);
    var1 = var9.bind(var10)(var8, var1);
    var3.validAttributes = var1;
    var _closure1_slot2 = var3;
    var1 = 3;
    var1 = var6[var1];
    var6 = var4.bind(var0)(var1);
    var4 = var6.get;
    var1 = function() { // Environment: var5
        var0 = _closure1_slot2;
        return var0;
    };
    var4 = var4.bind(var6)(var7, var1);
    var1 = {};
    var6 = function(arg0) { // Original name: openDrawer, environment: var5
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var5 = var2.bind(var0)(var1);
        var4 = var5.dispatchCommand;
        var3 = arg0;
        var2 = 'openDrawer';
        var1 = new Array(0);
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var1.openDrawer = var6;
    var5 = function(arg0) { // Original name: closeDrawer, environment: var5
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var5 = var2.bind(var0)(var1);
        var4 = var5.dispatchCommand;
        var3 = arg0;
        var2 = 'closeDrawer';
        var1 = new Array(0);
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var1.closeDrawer = var5;
    var2.default = var4;
    var2.__INTERNAL_VIEW_CONFIG = var3;
    var2.Commands = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 38, 110, 42, 117]);