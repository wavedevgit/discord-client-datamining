// modules/stage_channels/native/StageChannelListStore.tsx
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
    var6 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createWithEqualityFn;
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = {
            'showActiveSpeakerPill': false,
            'setShowActiveSpeakerPill': null,
            'listRef': null
        };
        var2 = function arg0() {
            var1 = arg0;
            var _closure3_slot0 = var1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.batchUpdates;
            var0 = function() { // Environment: var0
                var2 = _closure2_slot0;
                var1 = {};
                var0 = _closure3_slot0;
                var1.showActiveSpeakerPill = var0;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.setShowActiveSpeakerPill = var2;
        var1 = function arg0() {
            var1 = arg0;
            var _closure3_slot0 = var1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.batchUpdates;
            var0 = function() { // Environment: var0
                var2 = _closure2_slot0;
                var1 = {};
                var0 = _closure3_slot0;
                var1.listRef = var0;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.setListRef = var1;
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stage_channels/native/StageChannelListStore.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        var4 = _closure1_slot4;
        var3 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 4;
        var0 = var5[var0];
        var5 = undefined;
        var0 = var3.bind(var5)(var0);
        var3 = var0.shallow;
        var0 = function(arg0) { // Environment: var1
            var1 = arg0;
            var2 = var1.listRef;
            var0 = new Array(2);
            var0[0] = var2;
            var1 = var1.setListRef;
            var0[1] = var1;
            return var0;
        };
        var4 = var4.bind(var5)(var0, var3);
        var3 = _closure1_slot2;
        var0 = 2;
        var3 = var3.bind(var5)(var4, var0);
        var0 = 0;
        var5 = var3[var0];
        var _closure2_slot0 = var5;
        var0 = 1;
        var0 = var3[var0];
        var _closure2_slot1 = var0;
        var4 = _closure1_slot3;
        var3 = var4.useCallback;
        var2 = new Array(1);
        var2[0] = var0;
        var0 = function(arg0) { // Environment: var1
            var2 = _closure2_slot1;
            var0 = undefined;
            var1 = arg0;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var2 = var3.bind(var4)(var0, var2);
        var0 = new Array(2);
        var0[0] = var2;
        var3 = var4.useCallback;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() { // Environment: var1
            _fun69201: for (var _fun69201_ip = 0;;) switch (_fun69201_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun69201_ip = 42;
                        continue _fun69201
                    }
                case 13:
                    var2 = _closure2_slot0;
                    var1 = var2.scrollToLocation;
                    var0 = {
                        'section': 0,
                        'item': 0,
                        'animated': true
                    };
                    var0 = var1.bind(var2)(var0);
                case 42:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        var0[1] = var1;
        return var0;
    };
    var2.useActiveSpeakerPillScrollHandler = var3;
    var1 = function() {
        var3 = _closure1_slot4;
        var1 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 4;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.shallow;
        var0 = function(arg0) { // Environment: var0
            var1 = arg0;
            var2 = var1.showActiveSpeakerPill;
            var0 = new Array(2);
            var0[0] = var2;
            var1 = var1.setShowActiveSpeakerPill;
            var0[1] = var1;
            return var0;
        };
        var0 = var3.bind(var2)(var0, var1);
        return var0;
    };
    var2.useActiveSpeakerPillState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 797, 802, 3037, 2]);