// modules/stage_channels/native/components/ModeratorOverlayState.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var7 = var4.bind(var0)(var3);
    var6 = var7.createWithEqualityFn;
    var3 = function(arg0, arg1) { // Environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var0 = {};
        var2 = global;
        var2 = var2.Set;
        var3 = var2.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var2
            }
        });
        var4 = var3;
        var2 = new var4[var2](var3);
        var2 = var2 instanceof Object ? var2 : var3;
        var0.overlayDismissedChannelIds = var2;
        var1 = function arg0() {
            var2 = _closure2_slot1;
            var0 = undefined;
            var2 = var2.bind(var0)();
            var4 = var2.overlayDismissedChannelIds;
            var _closure3_slot0 = var4;
            var3 = var4.add;
            var2 = arg0;
            var2 = var3.bind(var4)(var2);
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 1;
            var2 = var4[var2];
            var3 = var3.bind(var0)(var2);
            var2 = var3.batchUpdates;
            var1 = function() { // Environment: var1
                var2 = _closure2_slot0;
                var1 = {};
                var0 = _closure3_slot0;
                var1.overlayDismissedChannelIds = var0;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.dismissOverlay = var1;
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stage_channels/native/components/ModeratorOverlayState.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var3 = arg0;
        var _closure2_slot0 = var3;
        var6 = _closure1_slot2;
        var4 = _closure1_slot0;
        var7 = _closure1_slot1;
        var0 = 2;
        var2 = var7[var0];
        var5 = undefined;
        var2 = var4.bind(var5)(var2);
        var8 = var2.shallow;
        var2 = function(arg0) { // Environment: var1
            var0 = arg0;
            var0 = var0.overlayDismissedChannelIds;
            return var0;
        };
        var2 = var6.bind(var5)(var2, var8);
        var0 = var7[var0];
        var0 = var4.bind(var5)(var0);
        var4 = var0.shallow;
        var0 = function(arg0) { // Environment: var1
            var0 = arg0;
            var0 = var0.dismissOverlay;
            return var0;
        };
        var0 = var6.bind(var5)(var0, var4);
        var _closure2_slot1 = var0;
        var0 = var2.has;
        var0 = var0.bind(var2)(var3);
        var2 = !var0;
        var0 = new Array(2);
        var0[0] = var2;
        var1 = function() { // Environment: var1
            var2 = _closure2_slot1;
            var1 = _closure2_slot0;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var0[1] = var1;
        return var0;
    };
    var2.useModeratorOverlayChannelState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [797, 802, 3037, 2]);