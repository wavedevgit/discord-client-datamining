// ../discord_common/js/packages/rtn-codegen/js/FastestListNativeComponent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var3 = {};
    var9 = 'FastestList';
    var3.uiViewClassName = var9;
    var0 = {};
    var1 = {};
    var4 = 'onLayout';
    var1.registrationName = var4;
    var0.topLayout = var1;
    var1 = {};
    var4 = 'onScroll';
    var1.registrationName = var4;
    var0.topScroll = var1;
    var1 = {};
    var4 = 'onScrollBeginDrag';
    var1.registrationName = var4;
    var0.topScrollBeginDrag = var1;
    var1 = {};
    var4 = 'onScrollEndDrag';
    var1.registrationName = var4;
    var0.topScrollEndDrag = var1;
    var1 = {};
    var4 = 'onVisibleItemsChanged';
    var1.registrationName = var4;
    var0.topVisibleItemsChanged = var1;
    var1 = {};
    var4 = 'onUnexpectedItemSize';
    var1.registrationName = var4;
    var0.topUnexpectedItemSize = var1;
    var3.directEventTypes = var0;
    var1 = {
        'insetStart': true,
        'insetEnd': true,
        'horizontal': true,
        'keyboardDismissOnDrag': true,
        'placeholderConfig': true,
        'renderAhead': true,
        'scrollEventThrottle': true,
        'sectionsVersioned': true,
        'showsHorizontalScrollIndicator': true,
        'showsVerticalScrollIndicator': true
    };
    var0 = 0;
    var4 = var7[var0];
    var0 = undefined;
    var10 = var6.bind(var0)(var4);
    var8 = var10.ConditionallyIgnoredEventHandlers;
    var4 = {
        'onLayout': true,
        'onScroll': true,
        'onScrollBeginDrag': true,
        'onScrollEndDrag': true,
        'onVisibleItemsChanged': true,
        'onUnexpectedItemSize': true
    };
    var12 = var8.bind(var10)(var4);
    var13 = var1;
    var4 = copyDataProperties(var13, var12);
    var3.validAttributes = var1;
    var _closure1_slot2 = var3;
    var1 = 1;
    var1 = var7[var1];
    var8 = var6.bind(var0)(var1);
    var4 = var8.get;
    var1 = function() { // Environment: var5
        var0 = _closure1_slot2;
        return var0;
    };
    var4 = var4.bind(var8)(var9, var1);
    var1 = {};
    var8 = function arg0, arg1, arg2, arg3, arg4() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var5 = var2.bind(var0)(var1);
        var4 = var5.dispatchCommand;
        var3 = new Array(4);
        var1 = arg1;
        var3[0] = var1;
        var1 = arg2;
        var3[1] = var1;
        var1 = arg3;
        var3[2] = var1;
        var1 = arg4;
        var3[3] = var1;
        var2 = arg0;
        var1 = 'scrollToLocation';
        var1 = var4.bind(var5)(var2, var1, var3);
        return var0;
    };
    var1.scrollToLocation = var8;
    var5 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var5 = var2.bind(var0)(var1);
        var4 = var5.dispatchCommand;
        var3 = new Array(1);
        var1 = arg1;
        var3[0] = var1;
        var2 = arg0;
        var1 = 'scrollToTop';
        var1 = var4.bind(var5)(var2, var1, var3);
        return var0;
    };
    var1.scrollToTop = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = '../discord_common/js/packages/rtn-codegen/js/FastestListNativeComponent.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.__INTERNAL_VIEW_CONFIG = var3;
    var2.Commands = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [110, 42, 117, 2]);