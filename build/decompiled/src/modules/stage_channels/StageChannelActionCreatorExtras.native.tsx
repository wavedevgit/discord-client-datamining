// modules/stage_channels/StageChannelActionCreatorExtras.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var3 = function arg0() {
        _fun51920: for (var _fun51920_ip = 0;;) switch (_fun51920_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.isGuildStageVoice;
                var1 = var1.bind(var0)();
                if (!var1) {
                    _fun51920_ip = 122;
                    continue _fun51920
                }
            case 16:
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 9;
                var2 = var8[var2];
                var7 = undefined;
                var4 = var3.bind(var7)(var2);
                var3 = var4.pushLazy;
                var6 = _closure1_slot0;
                var1 = 4;
                var1 = var8[var1];
                var5 = var6.bind(var7)(var1);
                var1 = 10;
                var2 = var8[var1];
                var1 = var8.paths;
                var2 = var5.bind(var7)(var2, var1);
                var1 = {};
                var1.channel = var0;
                var5 = 11;
                var5 = var8[var5];
                var6 = var6.bind(var7)(var5);
                var5 = var6.getVoiceChannelKey;
                var0 = var0.id;
                var0 = var5.bind(var6)(var0);
                var0 = var3.bind(var4)(var2, var1, var0);
            case 122:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot9 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var4 = var4.setIsOnStartStageScreen;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.STAGE_AUDIENCE_NOTICE_SHEET_KEY;
    var _closure1_slot4 = var7;
    var7 = var4.START_STAGE_CHANNEL_EVENT_SHEET_KEY;
    var _closure1_slot5 = var7;
    var7 = var4.STAGE_BLOCKED_USERS_SHEET_KEY;
    var _closure1_slot6 = var7;
    var7 = var4.STAGE_SETTINGS_SHEET_KEY;
    var _closure1_slot7 = var7;
    var4 = var4.EXPLICIT_END_STAGE_SHEET_KEY;
    var _closure1_slot8 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/StageChannelActionCreatorExtras.native.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0() {
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 2;
        var3 = var2[var0];
        var0 = undefined;
        var5 = var4.bind(var0)(var3);
        var4 = var5.openLazy;
        var6 = _closure1_slot0;
        var3 = 4;
        var3 = var2[var3];
        var6 = var6.bind(var0)(var3);
        var3 = 3;
        var3 = var2[var3];
        var2 = var2.paths;
        var3 = var6.bind(var0)(var3, var2);
        var2 = _closure1_slot5;
        var1 = {};
        var6 = arg0;
        var1.channel = var6;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var2.openStageChannelSettings = var4;
    var4 = function() {
        var0 = undefined;
        return var0;
    };
    var2.openEndGuildEventConfirmationModal = var4;
    var4 = function arg0() {
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 2;
        var3 = var2[var0];
        var0 = undefined;
        var5 = var4.bind(var0)(var3);
        var4 = var5.openLazy;
        var6 = _closure1_slot0;
        var3 = 4;
        var3 = var2[var3];
        var6 = var6.bind(var0)(var3);
        var3 = 5;
        var3 = var2[var3];
        var2 = var2.paths;
        var3 = var6.bind(var0)(var3, var2);
        var2 = _closure1_slot4;
        var1 = {};
        var6 = arg0;
        var1.channelId = var6;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var2.openStageChannelAudienceNoticeModal = var4;
    var4 = function arg0, arg1() {
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 2;
        var3 = var2[var0];
        var0 = undefined;
        var5 = var4.bind(var0)(var3);
        var4 = var5.openLazy;
        var6 = _closure1_slot0;
        var3 = 4;
        var3 = var2[var3];
        var6 = var6.bind(var0)(var3);
        var3 = 6;
        var3 = var2[var3];
        var2 = var2.paths;
        var3 = var6.bind(var0)(var3, var2);
        var2 = _closure1_slot6;
        var1 = {};
        var6 = arg0;
        var1.channel = var6;
        var6 = arg1;
        var1.onAccept = var6;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var2.openStageBlockedUsersSheet = var4;
    var4 = function arg0, arg1() {
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 2;
        var3 = var2[var0];
        var0 = undefined;
        var5 = var4.bind(var0)(var3);
        var4 = var5.openLazy;
        var6 = _closure1_slot0;
        var3 = 4;
        var3 = var2[var3];
        var6 = var6.bind(var0)(var3);
        var3 = 7;
        var3 = var2[var3];
        var2 = var2.paths;
        var3 = var6.bind(var0)(var3, var2);
        var2 = _closure1_slot7;
        var1 = {};
        var6 = arg0;
        var1.channelId = var6;
        var6 = arg1;
        var1.onOpenRTCDebugOverlay = var6;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var2.openStageSettingsSheet = var4;
    var4 = function arg0() {
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 2;
        var3 = var2[var0];
        var0 = undefined;
        var5 = var4.bind(var0)(var3);
        var4 = var5.openLazy;
        var6 = _closure1_slot0;
        var3 = 4;
        var3 = var2[var3];
        var6 = var6.bind(var0)(var3);
        var3 = 8;
        var3 = var2[var3];
        var2 = var2.paths;
        var3 = var6.bind(var0)(var3, var2);
        var2 = _closure1_slot8;
        var1 = {};
        var6 = arg0;
        var1.channel = var6;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var2.openEndStageModal = var4;
    var2.openStageChannel = var3;
    var3 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 12;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = {};
        var5 = arg0;
        var6 = var1;
        var3 = copyDataProperties(var6, var5);
        var4 = true;
        var3 = 'isVoiceContext';
        var1[var3] = var4;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var2.showPlatformUserProfile = var3;
    var3 = function arg0() {
        _fun51928: for (var _fun51928_ip = 0;;) switch (_fun51928_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 13;
                var0 = var5[var1];
                var2 = undefined;
                var6 = var4.bind(var2)(var0);
                var0 = var6.getStageBlockedUsersCount;
                var0 = var0.bind(var6)(var3);
                var1 = var5[var1];
                var2 = var4.bind(var2)(var1);
                var1 = var2.getStageIgnoredUsersCount;
                var2 = var1.bind(var2)(var3);
                var1 = 0;
                var0 = var0 > var1;
                if (var0) {
                    _fun51928_ip = 72;
                    continue _fun51928
                }
            case 68:
                var0 = var2 > var1;
            case 72:
                return var0;
        }
    };
    var2.shouldShowBlockedUsers = var3;
    var3 = function arg0, arg1() {
        _fun51929: for (var _fun51929_ip = 0;;) switch (_fun51929_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.id;
                var0 = arg1;
                if (!(var0 !== var1)) {
                    _fun51929_ip = 31;
                    continue _fun51929
                }
            case 15:
                var3 = _closure1_slot3;
                var1 = undefined;
                var0 = true;
                var0 = var3.bind(var1)(var0);
            case 31:
                var1 = _closure1_slot9;
                var0 = undefined;
                var1 = var1.bind(var0)(var2);
                return var0;
        }
    };
    var2.navigateToStage = var3;
    var1 = function() {
        var0 = false;
        return var0;
    };
    var2.showChannelChangeConfirmationAlert = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5917, 4235, 3278, 5919, 1307, 6466, 6473, 6481, 12134, 4561, 7903, 7898, 7372, 6475, 2]);