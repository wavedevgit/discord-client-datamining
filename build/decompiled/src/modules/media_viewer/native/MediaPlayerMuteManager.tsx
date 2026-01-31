// modules/media_viewer/native/MediaPlayerMuteManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var8 = var1.NativeEventEmitter;
    var4 = var1.NativeModules;
    var1 = 3;
    var1 = var6[var1];
    var9 = var5.bind(var0)(var1);
    var7 = var9.create;
    var1 = function() { // Environment: var3
        var0 = {};
        var1 = false;
        var0.isMuted = var1;
        return var0;
    };
    var1 = var7.bind(var9)(var1);
    var _closure1_slot4 = var1;
    var12 = var4.MediaPlayerManager;
    var7 = var8.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var8
        }
    });
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot5 = var4;
    var3 = function() { // Environment: var3
        var3 = _closure1_slot3;
        var2 = function() { // Original name: MediaPlayerMuteManager, environment: var4
            var1 = this;
            var3 = _closure1_slot2;
            var2 = _closure2_slot0;
            var0 = undefined;
            var2 = var3.bind(var0)(var1, var2);
            var1.muteSubscription = var0;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'initialize';
        var0.key = var1;
        var1 = function() { // Original name: value, environment: var4
            var3 = _closure1_slot5;
            var2 = var3.addListener;
            var1 = 'MediaPlayerMuteStateChanged';
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.isMuted;
                var _closure4_slot0 = var0;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 4;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.batchUpdates;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot4;
                    var1 = var2.setState;
                    var0 = {};
                    var3 = _closure4_slot0;
                    var0.isMuted = var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var1 = var2.bind(var3)(var1, var0);
            var0 = this;
            var0.muteSubscription = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(2);
        var1[0] = var0;
        var0 = {};
        var5 = 'terminate';
        var0.key = var5;
        var4 = function() { // Original name: value, environment: var4
            _fun70357: for (var _fun70357_ip = 0;;) switch (_fun70357_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.muteSubscription;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun70357_ip = 25;
                        continue _fun70357
                    }
                case 15:
                    var0 = var1.remove;
                    var0 = var0.bind(var1)();
                case 25:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var4;
        var1[1] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var13 = var4;
    var3 = new var13[var3](var12);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_viewer/native/MediaPlayerMuteManager.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.useMediaPlayerMutedStore = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 27, 629, 802, 2]);