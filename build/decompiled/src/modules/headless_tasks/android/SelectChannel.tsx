// modules/headless_tasks/android/SelectChannel.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = require;
    var1 = dependencyMap;
    var _closure1_slot0 = var2;
    var3 = metroImportDefault;
    var _closure1_slot1 = var3;
    var _closure1_slot2 = var1;
    var3 = function(arg0) { // Environment: var0
        var1 = arg0;
        var2 = var1.channelId;
        var _closure2_slot0 = var2;
        var1 = var1.connectToVoice;
        var _closure2_slot1 = var1;
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
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 0;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.awaitStorage;
            var1 = function() { // Environment: var1
                _fun118453: for (var _fun118453_ip = 0;;) switch (_fun118453_ip) {
                    case 0:
                        var0 = _closure2_slot1;
                        if (!var0) {
                            _fun118453_ip = 50;
                            continue _fun118453
                        }
                    case 10:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 1;
                        var2 = var2[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.selectVoiceChannel;
                        var0 = _closure2_slot0;
                        var0 = var2.bind(var3)(var0);
                    case 50:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 2;
                        var2 = var2[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.transitionToChannel;
                        var1 = _closure2_slot0;
                        var1 = var2.bind(var3)(var1);
                        var2 = _closure3_slot0;
                        var1 = true;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var0 = arg4;
    var0.exports = var3;
    var0 = 3;
    var1 = var1[var0];
    var0 = undefined;
    var3 = var2.bind(var0)(var1);
    var2 = var3.fileFinishedImporting;
    var1 = 'modules/headless_tasks/android/SelectChannel.tsx';
    var1 = var2.bind(var3)(var1);
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [15120, 4231, 3943, 2]);