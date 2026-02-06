// modules/headless_tasks/android/GenerateInvite.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = require;
    var3 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var3;
    var0 = 0;
    var4 = var3[var0];
    var0 = undefined;
    var4 = var2.bind(var0)(var4);
    var4 = var4.NativeModules;
    var _closure1_slot2 = var4;
    var4 = function(arg0) { // Environment: var1
        var1 = arg0;
        var1 = var1.channelId;
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
            var0 = arg0;
            var _closure3_slot0 = var0;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var0 = 1;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.awaitStorage;
            var1 = function() { // Environment: var1
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 2;
                var1 = var1[var0];
                var0 = undefined;
                var5 = var2.bind(var0)(var1);
                var4 = var5.createInvite;
                var3 = _closure2_slot0;
                var2 = {};
                var1 = 'Mobile Voice Overlay';
                var3 = var4.bind(var5)(var3, var2, var1);
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var1
                    var1 = _closure1_slot2;
                    var3 = var1.RNCClipboard;
                    var2 = var3.setString;
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var4.bind(var0)(var1);
                    var1 = arg0;
                    var1 = var1.code;
                    var1 = var4.bind(var0)(var1);
                    var1 = var2.bind(var3)(var1);
                    var2 = _closure3_slot0;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var1 = arg4;
    var1.exports = var4;
    var1 = 4;
    var1 = var3[var1];
    var3 = var2.bind(var0)(var1);
    var2 = var3.fileFinishedImporting;
    var1 = 'modules/headless_tasks/android/GenerateInvite.tsx';
    var1 = var2.bind(var3)(var1);
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 15126, 5906, 6573, 2]);