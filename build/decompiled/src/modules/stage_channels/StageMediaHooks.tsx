// modules/stage_channels/StageMediaHooks.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot4;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot4;
            var2 = var3.getMutableParticipants;
            var1 = _closure2_slot0;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var0 = 4;
            var4 = var4[var0];
            var0 = undefined;
            var0 = var5.bind(var0)(var4);
            var0 = var0.StageChannelParticipantNamedIndex;
            var0 = var0.SPEAKER;
            var2 = var2.bind(var3)(var1, var0);
            var1 = var2.find;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var1 = var0.type;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 4;
                var2 = var2[var0];
                var0 = undefined;
                var0 = var3.bind(var0)(var2);
                var0 = var0.StageChannelParticipantTypes;
                var0 = var0.STREAM;
                var0 = var1 === var0;
                return var0;
            };
            var1 = var1.bind(var2)(var0);
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var _closure1_slot5 = var4;
    var3 = function arg0() {
        var3 = _closure1_slot4;
        var2 = var3.getMutableParticipants;
        var4 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var4.bind(var0)(var1);
        var0 = var0.StageChannelParticipantNamedIndex;
        var1 = var0.SPEAKER;
        var0 = arg0;
        var2 = var2.bind(var3)(var0, var1);
        var1 = var2.find;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var1 = var0.type;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var0 = 4;
            var2 = var2[var0];
            var0 = undefined;
            var0 = var3.bind(var0)(var2);
            var0 = var0.StageChannelParticipantTypes;
            var0 = var0.STREAM;
            var0 = var1 === var0;
            return var0;
        };
        var1 = var1.bind(var2)(var0);
        var0 = null;
        var0 = var0 != var1;
        return var0;
    };
    var _closure1_slot6 = var3;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var8.bind(var0)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/stage_channels/StageMediaHooks.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function arg0() {
        _fun38686: for (var _fun38686_ip = 0;;) switch (_fun38686_ip) {
            case 0:
                var6 = arg0;
                var _closure2_slot0 = var6;
                var1 = _closure1_slot5;
                var5 = undefined;
                var1 = var1.bind(var5)(var6);
                var4 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 3;
                var3 = var7[var3];
                var5 = var4.bind(var5)(var3);
                var4 = var5.useStateFromStores;
                var2 = _closure1_slot3;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = new Array(1);
                var2[0] = var6;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot3;
                    var1 = var2.hasVideo;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var4.bind(var5)(var3, var0, var2);
                if (var0) {
                    _fun38686_ip = 86;
                    continue _fun38686
                }
            case 83:
                var0 = var1;
            case 86:
                return var0;
        }
    };
    var2.useStageHasMedia = var5;
    var2.useStageHasStream = var4;
    var4 = function arg0() {
        _fun38688: for (var _fun38688_ip = 0;;) switch (_fun38688_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot6;
                var0 = undefined;
                var0 = var2.bind(var0)(var3);
                if (var0) {
                    _fun38688_ip = 35;
                    continue _fun38688
                }
            case 20:
                var2 = _closure1_slot3;
                var1 = var2.hasVideo;
                var0 = var1.bind(var2)(var3);
            case 35:
                return var0;
        }
    };
    var2.getStageHasMedia = var4;
    var2.getStageHasStream = var3;
    var3 = function arg0() {
        _fun38689: for (var _fun38689_ip = 0;;) switch (_fun38689_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 3;
                var2 = var3[var2];
                var3 = undefined;
                var4 = var4.bind(var3)(var2);
                var2 = var4.useStateFromStores;
                var5 = _closure1_slot2;
                var1 = new Array(1);
                var1[0] = var5;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot2;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var2.bind(var4)(var1, var0);
                var1 = null;
                var0 = var1 != var2;
                if (!var0) {
                    _fun38689_ip = 104;
                    continue _fun38689
                }
            case 71:
                var4 = var1 == var2;
                var3 = undefined;
                if (var4) {
                    _fun38689_ip = 86;
                    continue _fun38689
                }
            case 80:
                var3 = var2.maxStageVideoChannelUsers;
            case 86:
                var4 = var1 != var3;
                var2 = 0;
                var1 = 0;
                if (!var4) {
                    _fun38689_ip = 100;
                    continue _fun38689
                }
            case 97:
                var1 = var3;
            case 100:
                var0 = var1 > var2;
            case 104:
                return var0;
        }
    };
    var2.useIsStageVideoEnabled = var3;
    var1 = function arg0() {
        _fun38691: for (var _fun38691_ip = 0;;) switch (_fun38691_ip) {
            case 0:
                var2 = _closure1_slot2;
                var1 = var2.getGuild;
                var0 = arg0;
                var2 = var1.bind(var2)(var0);
                var1 = null;
                var0 = var1 != var2;
                if (!var0) {
                    _fun38691_ip = 62;
                    continue _fun38691
                }
            case 29:
                var4 = var1 == var2;
                var3 = undefined;
                if (var4) {
                    _fun38691_ip = 44;
                    continue _fun38691
                }
            case 38:
                var3 = var2.maxStageVideoChannelUsers;
            case 44:
                var4 = var1 != var3;
                var2 = 0;
                var1 = 0;
                if (!var4) {
                    _fun38691_ip = 58;
                    continue _fun38691
                }
            case 55:
                var1 = var3;
            case 58:
                var0 = var1 > var2;
            case 62:
                return var0;
        }
    };
    var2.isStageVideoEnabled = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1410, 3482, 4211, 566, 5626, 2]);