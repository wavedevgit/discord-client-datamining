// modules/quests/utils/VideoQuestUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var5 = function arg0, arg1() {
        _fun47609: for (var _fun47609_ip = 0;;) switch (_fun47609_ip) {
            case 0:
                var1 = arg0;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 4;
                var3 = var3[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var3);
                var3 = var4.isQuestExpired;
                var3 = var3.bind(var4)(var1);
                if (var3) {
                    _fun47609_ip = 69;
                    continue _fun47609
                }
            case 42:
                var6 = var1.userStatus;
                var5 = null;
                var7 = var5 == var6;
                var4 = undefined;
                if (var7) {
                    _fun47609_ip = 65;
                    continue _fun47609
                }
            case 59:
                var4 = var6.enrolledAt;
            case 65:
                var3 = var5 == var4;
            case 69:
                if (var3) {
                    _fun47609_ip = 99;
                    continue _fun47609
                }
            case 72:
                var6 = var1.userStatus;
                var5 = null;
                var7 = var5 == var6;
                var4 = undefined;
                if (var7) {
                    _fun47609_ip = 95;
                    continue _fun47609
                }
            case 89:
                var4 = var6.completedAt;
            case 95:
                var3 = var5 != var4;
            case 99:
                if (var3) {
                    _fun47609_ip = 142;
                    continue _fun47609
                }
            case 102:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 5;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.updateVideoProgress;
                var2 = var1.id;
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var1);
            case 142:
                return var0;
        }
    };
    var _closure1_slot6 = var5;
    var4 = function arg0, arg1() {
        _fun47610: for (var _fun47610_ip = 0;;) switch (_fun47610_ip) {
            case 0:
                var6 = arg0;
                var2 = arg1;
                var3 = 0;
                var1 = var6 <= var3;
                var0 = 0;
                if (var1) {
                    _fun47610_ip = 92;
                    continue _fun47610
                }
            case 17:
                var1 = var2 <= var3;
                var0 = 0;
                if (var1) {
                    _fun47610_ip = 92;
                    continue _fun47610
                }
            case 26:
                var3 = var6 >= var2;
                var5 = 1;
                var1 = var5;
                if (var3) {
                    _fun47610_ip = 89;
                    continue _fun47610
                }
            case 39:
                var7 = global;
                var4 = var7.Math;
                var3 = var4.min;
                var8 = var7.Math;
                var7 = var8.round;
                var2 = var6 / var2;
                var6 = 100;
                var2 = var2 * var6;
                var2 = var7.bind(var8)(var2);
                var2 = var2 / var6;
                var1 = var3.bind(var4)(var5, var2);
            case 89:
                var0 = var1;
            case 92:
                return var0;
        }
    };
    var _closure1_slot7 = var4;
    var3 = function arg0() {
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = 'VIDEO-QUEST-';
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot8 = var3;
    var0 = global;
    var11 = var0.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var6);
    var0 = 0;
    var6 = var8[var0];
    var0 = undefined;
    var6 = var9.bind(var0)(var6);
    var _closure1_slot2 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var6 = var6.AnalyticEvents;
    var _closure1_slot5 = var6;
    var6 = 10;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/quests/utils/VideoQuestUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var2.sendVideoProgress = var5;
    var5 = function arg0() {
        _fun47612: for (var _fun47612_ip = 0;;) switch (_fun47612_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.assets;
                var2 = var0.video;
                var4 = null;
                var3 = var4 == var2;
                var1 = 'portrait';
                var0 = var1;
                if (var3) {
                    _fun47612_ip = 87;
                    continue _fun47612
                }
            case 33:
                var3 = var2.width;
                var3 = var4 == var3;
                var0 = var1;
                if (var3) {
                    _fun47612_ip = 87;
                    continue _fun47612
                }
            case 48:
                var3 = var2.height;
                var3 = var4 == var3;
                var0 = var1;
                if (var3) {
                    _fun47612_ip = 87;
                    continue _fun47612
                }
            case 63:
                var3 = var2.width;
                var2 = var2.height;
                var2 = var3 > var2;
                if (!var2) {
                    _fun47612_ip = 84;
                    continue _fun47612
                }
            case 80:
                var1 = 'landscape';
            case 84:
                var0 = var1;
            case 87:
                return var0;
        }
    };
    var2.getVideoOrientation = var5;
    var5 = function(arg0) { // Environment: var1
        _fun47613: for (var _fun47613_ip = 0;;) switch (_fun47613_ip) {
            case 0:
                var7 = arg0;
                var1 = var7.percentComplete;
                var0 = 0;
                if (!(!(var1 > var0))) {
                    _fun47613_ip = 108;
                    continue _fun47613
                }
            case 15:
                var6 = _closure1_slot0;
                var8 = _closure1_slot1;
                var0 = 6;
                var1 = var8[var0];
                var5 = undefined;
                var1 = var6.bind(var5)(var1);
                var3 = var1.intl;
                var2 = var3.formatToPlainString;
                var0 = var8[var0];
                var0 = var6.bind(var5)(var0);
                var0 = var0.t;
                var1 = var0.GNsKiW;
                var0 = {};
                var4 = 7;
                var4 = var8[var4];
                var5 = var6.bind(var5)(var4);
                var4 = var5.formatWatchTaskRemainingTime;
                var4 = var4.bind(var5)(var7);
                var0.remainTime = var4;
                var0 = var2.bind(var3)(var1, var0);
                _fun47613_ip = 201;
                continue _fun47613;
            case 108:
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var1 = 6;
                var2 = var9[var1];
                var6 = undefined;
                var2 = var8.bind(var6)(var2);
                var4 = var2.intl;
                var3 = var4.formatToPlainString;
                var1 = var9[var1];
                var1 = var8.bind(var6)(var1);
                var1 = var1.t;
                var2 = var1["c59/Tp"];
                var1 = {};
                var5 = 7;
                var5 = var9[var5];
                var6 = var8.bind(var6)(var5);
                var5 = var6.formatWatchTaskRemainingTime;
                var5 = var5.bind(var6)(var7);
                var1.remainTime = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 201:
                return var0;
        }
    };
    var2.getVideoQuestWatchCtaText = var5;
    var2.formatVideoProgressRatio = var4;
    var4 = function arg0() {
        _fun47614: for (var _fun47614_ip = 0;;) switch (_fun47614_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.ctaConfig;
                var0 = var0.buttonLabel;
                var1 = null;
                if (!(var1 == var0)) {
                    _fun47614_ip = 83;
                    continue _fun47614
                }
            case 21:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 6;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.iiTtpJ;
                var0 = var2.bind(var3)(var1);
            case 83:
                return var0;
        }
    };
    var2.getVideoQuestEndCardCtaText = var4;
    var4 = function arg0() {
        _fun47615: for (var _fun47615_ip = 0;;) switch (_fun47615_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.questId;
                var3 = var0.sourceQuestContent;
                var6 = var0.videoSessionId;
                var1 = _closure1_slot4;
                var0 = var1.getState;
                var1 = var0.bind(var1)();
                var0 = var1.getVideoProgress;
                var14 = var0.bind(var1)(var8);
                var2 = null;
                if (!(var2 != var14)) {
                    _fun47615_ip = 342;
                    continue _fun47615
                }
            case 58:
                var1 = _closure1_slot3;
                var0 = var1.getQuest;
                var4 = var0.bind(var1)(var8);
                var0 = var2 != var4;
                if (!var0) {
                    _fun47615_ip = 105;
                    continue _fun47615
                }
            case 80:
                var7 = var4.userStatus;
                var9 = var2 == var7;
                var1 = undefined;
                if (var9) {
                    _fun47615_ip = 101;
                    continue _fun47615
                }
            case 95:
                var1 = var7.enrolledAt;
            case 101:
                var0 = var2 != var1;
            case 105:
                if (!var0) {
                    _fun47615_ip = 133;
                    continue _fun47615
                }
            case 108:
                var7 = var4.userStatus;
                var9 = var2 == var7;
                var1 = undefined;
                if (var9) {
                    _fun47615_ip = 129;
                    continue _fun47615
                }
            case 123:
                var1 = var7.completedAt;
            case 129:
                var0 = var2 == var1;
            case 133:
                if (!var0) {
                    _fun47615_ip = 154;
                    continue _fun47615
                }
            case 136:
                var2 = _closure1_slot6;
                var1 = var14.maxTimestampSec;
                var0 = undefined;
                var0 = var2.bind(var0)(var4, var1);
            case 154:
                var4 = _closure1_slot7;
                var1 = var14.maxTimestampSec;
                var0 = var14.duration;
                var2 = undefined;
                var7 = var4.bind(var2)(var1, var0);
                var1 = _closure1_slot0;
                var9 = _closure1_slot1;
                var0 = 8;
                var4 = var9[var0];
                var12 = var1.bind(var2)(var4);
                var11 = var12.trackQuestEvent;
                var10 = {};
                var10.questId = var8;
                var4 = _closure1_slot5;
                var13 = var4.QUEST_VIDEO_PROGRESSED;
                var10.event = var13;
                var13 = {};
                var13.progress = var7;
                var14 = var14.maxTimestampSec;
                var13.video_timestamp_seconds = var14;
                var13.video_session_id = var6;
                var10.properties = var13;
                var10.sourceQuestContent = var3;
                var10 = var11.bind(var12)(var10);
                var0 = var9[var0];
                var2 = var1.bind(var2)(var0);
                var1 = var2.trackQuestEvent;
                var0 = {};
                var0.questId = var8;
                var4 = var4.QUEST_VIDEO_MODAL_CLOSED;
                var0.event = var4;
                var4 = {};
                var4.video_progress = var7;
                var4.video_session_id = var6;
                var6 = _closure1_slot2;
                var5 = var6.getEffectiveConnectionSpeed;
                var5 = var5.bind(var6)();
                var4.network_connection_speed = var5;
                var0.properties = var4;
                var0.sourceQuestContent = var3;
                var0 = var1.bind(var2)(var0);
            case 342:
                var0 = undefined;
                return var0;
        }
    };
    var2.handleVideoQuestModalClose = var4;
    var2.getVideoQuestModalKey = var3;
    var1 = function arg0() {
        _fun47616: for (var _fun47616_ip = 0;;) switch (_fun47616_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 7;
                var0 = var3[var0];
                var3 = undefined;
                var2 = var2.bind(var3)(var0);
                var0 = var2.hasWatchVideoTasks;
                var0 = var0.bind(var2)(var1);
                var2 = !var0;
                var0 = !var2;
                if (var2) {
                    _fun47616_ip = 93;
                    continue _fun47616
                }
            case 48:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 9;
                var2 = var6[var2];
                var2 = var5.bind(var3)(var2);
                var2 = var2.isModalOpen;
                var4 = _closure1_slot8;
                var1 = var1.id;
                var1 = var4.bind(var3)(var1);
                var0 = var2.bind(var3)(var1);
            case 93:
                return var0;
        }
    };
    var2.isVideoQuestProgressing = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3626, 5226, 5227, 660, 5238, 5258, 1234, 5267, 5261, 3919, 2]);