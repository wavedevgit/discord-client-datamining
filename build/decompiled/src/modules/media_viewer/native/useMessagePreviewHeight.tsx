// modules/media_viewer/native/useMessagePreviewHeight.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var7 = var5.bind(var0)(var3);
    var4 = var7.create;
    var3 = function() { // Environment: var1
        var0 = {
            'collapsedHeight': 0,
            'expandedHeight': 0
        };
        return var0;
    };
    var3 = var4.bind(var7)(var3);
    var _closure1_slot2 = var3;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_viewer/native/useMessagePreviewHeight.tsx';
    var4 = var5.bind(var6)(var4);
    var2.useMessagePreviewHeightStore = var3;
    var3 = function() { // Original name: useMessagePreviewCollapsedheight, environment: var1
        var1 = _closure1_slot2;
        var0 = undefined;
        var0 = var1.bind(var0)();
        var0 = var0.collapsedHeight;
        return var0;
    };
    var2.useMessagePreviewCollapsedheight = var3;
    var3 = function() { // Original name: useMessagePreviewExpandedHeight, environment: var1
        var1 = _closure1_slot2;
        var0 = undefined;
        var0 = var1.bind(var0)();
        var0 = var0.expandedHeight;
        return var0;
    };
    var2.useMessagePreviewExpandedHeight = var3;
    var3 = function(arg0) { // Original name: setMesssagePreviewHeight, environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 1;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot2;
            var1 = var2.setState;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setMesssagePreviewHeight = var3;
    var3 = function(arg0) { // Original name: setMesssagePreviewCollapsedHeight, environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 1;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot2;
            var1 = var2.setState;
            var0 = {};
            var3 = _closure2_slot0;
            var0.collapsedHeight = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setMesssagePreviewCollapsedHeight = var3;
    var1 = function(arg0) { // Original name: setMesssagePreviewExpandedHeight, environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 1;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot2;
            var1 = var2.setState;
            var0 = {};
            var3 = _closure2_slot0;
            var0.expandedHeight = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setMesssagePreviewExpandedHeight = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [629, 802, 2]);