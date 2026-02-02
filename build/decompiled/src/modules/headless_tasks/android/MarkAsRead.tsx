// modules/headless_tasks/android/MarkAsRead.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = require;
    var3 = dependencyMap;
    var _closure1_slot0 = var2;
    var _closure1_slot1 = var3;
    var0 = 0;
    var4 = var3[var0];
    var0 = undefined;
    var4 = var2.bind(var0)(var4);
    var5 = var4.AnalyticsObjectTypes;
    var _closure1_slot2 = var5;
    var4 = var4.AnalyticsObjects;
    var _closure1_slot3 = var4;
    var4 = function(arg0) { // Environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = global;
        var2 = var1.Promise;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0) { // Environment: var0
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 1;
            var1 = var1[var0];
            var0 = undefined;
            var6 = var3.bind(var0)(var1);
            var5 = var6.ack;
            var1 = _closure2_slot0;
            var12 = var1.channelId;
            var3 = {};
            var7 = _closure1_slot3;
            var7 = var7.MARK_CHANNEL_AS_READ_FROM_NOTIFICATION;
            var3.object = var7;
            var2 = _closure1_slot2;
            var2 = var2.ACK_MANUAL;
            var3.objectType = var2;
            var8 = var1.messageId;
            var2 = true;
            var13 = var6;
            var11 = var3;
            var10 = true;
            var9 = true;
            var1 = var13[var5](var12, var11, var10, var9, var8, var7);
            var1 = arg0;
            var1 = var1.bind(var0)(var2);
            return var0;
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var1 = arg4;
    var1.exports = var4;
    var1 = 2;
    var1 = var3[var1];
    var3 = var2.bind(var0)(var1);
    var2 = var3.fileFinishedImporting;
    var1 = 'modules/headless_tasks/android/MarkAsRead.tsx';
    var1 = var2.bind(var3)(var1);
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 4540, 2]);