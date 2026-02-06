// modules/stage_channels/useStageBlockedUsersCount.tsx
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
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stage_channels/useStageBlockedUsersCount.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 1;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            _fun53210: for (var _fun53210_ip = 0;;) switch (_fun53210_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var0 = null;
                    var1 = var0 != var1;
                    var0 = 0;
                    if (!var1) {
                        _fun53210_ip = 75;
                        continue _fun53210
                    }
                case 18:
                    var4 = _closure1_slot2;
                    var3 = var4.getParticipantCount;
                    var2 = _closure2_slot0;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 2;
                    var5 = var5[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var5);
                    var1 = var1.StageChannelParticipantNamedIndex;
                    var1 = var1.BLOCKED;
                    var0 = var3.bind(var4)(var2, var1);
                case 75:
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useStageBlockedUsersCount = var3;
    var3 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 1;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            _fun53212: for (var _fun53212_ip = 0;;) switch (_fun53212_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var0 = null;
                    var1 = var0 != var1;
                    var0 = 0;
                    if (!var1) {
                        _fun53212_ip = 75;
                        continue _fun53212
                    }
                case 18:
                    var4 = _closure1_slot2;
                    var3 = var4.getParticipantCount;
                    var2 = _closure2_slot0;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 2;
                    var5 = var5[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var5);
                    var1 = var1.StageChannelParticipantNamedIndex;
                    var1 = var1.IGNORED;
                    var0 = var3.bind(var4)(var2, var1);
                case 75:
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useStageIgnoredUsersCount = var3;
    var3 = function arg0() {
        _fun53213: for (var _fun53213_ip = 0;;) switch (_fun53213_ip) {
            case 0:
                var3 = _closure1_slot2;
                var2 = var3.getParticipantCount;
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 2;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var4.bind(var0)(var1);
                var0 = var0.StageChannelParticipantNamedIndex;
                var1 = var0.BLOCKED;
                var0 = arg0;
                var1 = var2.bind(var3)(var0, var1);
                var0 = null;
                var2 = var0 != var1;
                var0 = 0;
                if (!var2) {
                    _fun53213_ip = 70;
                    continue _fun53213
                }
            case 67:
                var0 = var1;
            case 70:
                return var0;
        }
    };
    var2.getStageBlockedUsersCount = var3;
    var3 = function arg0() {
        _fun53214: for (var _fun53214_ip = 0;;) switch (_fun53214_ip) {
            case 0:
                var3 = _closure1_slot2;
                var2 = var3.getParticipantCount;
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 2;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var4.bind(var0)(var1);
                var0 = var0.StageChannelParticipantNamedIndex;
                var1 = var0.IGNORED;
                var0 = arg0;
                var1 = var2.bind(var3)(var0, var1);
                var0 = null;
                var2 = var0 != var1;
                var0 = 0;
                if (!var2) {
                    _fun53214_ip = 70;
                    continue _fun53214
                }
            case 67:
                var0 = var1;
            case 70:
                return var0;
        }
    };
    var2.getStageIgnoredUsersCount = var3;
    var3 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 1;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot2;
            var2 = var3.getMutableParticipants;
            var1 = _closure2_slot0;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var0 = 2;
            var4 = var4[var0];
            var0 = undefined;
            var0 = var5.bind(var0)(var4);
            var0 = var0.StageChannelParticipantNamedIndex;
            var0 = var0.BLOCKED;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useStageBlockedUsers = var3;
    var1 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 1;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot2;
            var2 = var3.getMutableParticipants;
            var1 = _closure2_slot0;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var0 = 2;
            var4 = var4[var0];
            var0 = undefined;
            var0 = var5.bind(var0)(var4);
            var0 = var0.StageChannelParticipantNamedIndex;
            var0 = var0.IGNORED;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useStageIgnoredUsers = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4246, 566, 5666, 2]);