// modules/rpc/server/events/subscriptionHelpers.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.RPCEvents;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ActivityLayoutMode;
    var _closure1_slot6 = var6;
    var3 = var3.ActivityScreenOrientation;
    var _closure1_slot7 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rpc/server/events/subscriptionHelpers.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1, arg2) { // Original name: getInitialSubscriptionPayload, environment: var1
        _fun98885: for (var _fun98885_ip = 0;;) switch (_fun98885_ip) {
            case 0:
                var0 = arg0;
                var3 = arg1;
                var1 = _closure1_slot5;
                var1 = var1.ACTIVITY_PIP_MODE_UPDATE;
                if (!(var1 !== var3)) {
                    _fun98885_ip = 634;
                    continue _fun98885
                }
            case 26:
                var1 = _closure1_slot5;
                var1 = var1.ACTIVITY_LAYOUT_MODE_UPDATE;
                if (!(var1 !== var3)) {
                    _fun98885_ip = 568;
                    continue _fun98885
                }
            case 43:
                var1 = _closure1_slot5;
                var1 = var1.FRAME_LAYOUT_MODE_UPDATE;
                if (!(var1 !== var3)) {
                    _fun98885_ip = 485;
                    continue _fun98885
                }
            case 60:
                var1 = _closure1_slot5;
                var1 = var1.THERMAL_STATE_UPDATE;
                if (!(var1 !== var3)) {
                    _fun98885_ip = 414;
                    continue _fun98885
                }
            case 77:
                var1 = _closure1_slot5;
                var1 = var1.ORIENTATION_UPDATE;
                if (!(var1 !== var3)) {
                    _fun98885_ip = 352;
                    continue _fun98885
                }
            case 94:
                var1 = _closure1_slot5;
                var1 = var1.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE;
                if (!(var1 !== var3)) {
                    _fun98885_ip = 318;
                    continue _fun98885
                }
            case 111:
                var1 = _closure1_slot5;
                var1 = var1.QUEST_ENROLLMENT_STATUS_UPDATE;
                if (!(var1 !== var3)) {
                    _fun98885_ip = 129;
                    continue _fun98885
                }
            case 125:
                var1 = null;
                return var1;
            case 129:
                var1 = arg2;
                var7 = var1.quest_id;
                if (var7) {
                    _fun98885_ip = 145;
                    continue _fun98885
                }
            case 141:
                var1 = null;
                return var1;
            case 145:
                var3 = _closure1_slot4;
                var1 = var3.getQuest;
                var6 = var1.bind(var3)(var7);
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 8;
                var1 = var4[var1];
                var5 = undefined;
                var3 = var3.bind(var5)(var1);
                var1 = var3.getActivityApplicationId;
                var8 = var1.bind(var3)(var6);
                var4 = null;
                var3 = var4 == var6;
                var1 = null;
                if (var3) {
                    _fun98885_ip = 316;
                    continue _fun98885
                }
            case 204:
                var3 = var4 == var8;
                var1 = null;
                if (var3) {
                    _fun98885_ip = 316;
                    continue _fun98885
                }
            case 213:
                var9 = var0.application;
                var10 = var4 == var9;
                var3 = undefined;
                if (var10) {
                    _fun98885_ip = 232;
                    continue _fun98885
                }
            case 227:
                var3 = var9.id;
            case 232:
                var1 = null;
                if (!(var8 === var3)) {
                    _fun98885_ip = 316;
                    continue _fun98885
                }
            case 238:
                var3 = {};
                var3.quest_id = var7;
                var8 = var6.userStatus;
                var9 = var4 == var8;
                var7 = undefined;
                if (var9) {
                    _fun98885_ip = 266;
                    continue _fun98885
                }
            case 260:
                var7 = var8.enrolledAt;
            case 266:
                var7 = var4 != var7;
                var3.is_enrolled = var7;
                var6 = var6.userStatus;
                var7 = var4 == var6;
                var5 = undefined;
                if (var7) {
                    _fun98885_ip = 296;
                    continue _fun98885
                }
            case 290:
                var5 = var6.enrolledAt;
            case 296:
                var6 = var4 != var5;
                var4 = null;
                if (!var6) {
                    _fun98885_ip = 308;
                    continue _fun98885
                }
            case 305:
                var4 = var5;
            case 308:
                var3.enrolled_at = var4;
                var1 = var3;
            case 316:
                return var1;
            case 318:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 7;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.activityInstanceConnectedParticipants;
                var1 = var1.bind(var3)();
                return var1;
            case 352:
                var1 = {};
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 6;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var3 = var4.getIsScreenLandscape;
                var3 = var3.bind(var4)();
                var4 = _closure1_slot7;
                if (var3) {
                    _fun98885_ip = 401;
                    continue _fun98885
                }
            case 393:
                var3 = var4.PORTRAIT;
                _fun98885_ip = 407;
                continue _fun98885;
            case 401:
                var3 = var4.LANDSCAPE;
            case 407:
                var1.screen_orientation = var3;
                return var1;
            case 414:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 5;
                var4 = var6[var1];
                var3 = undefined;
                var7 = var5.bind(var3)(var4);
                var4 = var7.getThermalState;
                var4 = var4.bind(var7)();
                var1 = var6[var1];
                var1 = var5.bind(var3)(var1);
                var1 = var1.ThermalStates;
                var3 = var1.UNHANDLED;
                var1 = null;
                if (!(var4 !== var3)) {
                    _fun98885_ip = 483;
                    continue _fun98885
                }
            case 473:
                var3 = {};
                var3.thermal_state = var4;
                var1 = var3;
            case 483:
                return var1;
            case 485:
                var5 = var0.application;
                var1 = null;
                var6 = var1 == var5;
                var4 = undefined;
                if (var6) {
                    _fun98885_ip = 506;
                    continue _fun98885
                }
            case 501:
                var4 = var5.id;
            case 506:
                var5 = var1 != var4;
                var4 = null;
                if (!var5) {
                    _fun98885_ip = 547;
                    continue _fun98885
                }
            case 515:
                var6 = _closure1_slot3;
                var5 = var6.getConnectedFrame;
                var5 = var5.bind(var6)();
                var6 = var1 == var5;
                var3 = undefined;
                if (var6) {
                    _fun98885_ip = 544;
                    continue _fun98885
                }
            case 538:
                var3 = var5.layoutMode;
            case 544:
                var4 = var3;
            case 547:
                var3 = var1 != var4;
                var1 = null;
                if (!var3) {
                    _fun98885_ip = 566;
                    continue _fun98885
                }
            case 556:
                var3 = {};
                var3.layout_mode = var4;
                var1 = var3;
            case 566:
                return var1;
            case 568:
                var3 = var0.application;
                var1 = null;
                var4 = var1 == var3;
                var6 = undefined;
                if (var4) {
                    _fun98885_ip = 589;
                    continue _fun98885
                }
            case 584:
                var6 = var3.id;
            case 589:
                var3 = var1 != var6;
                var4 = null;
                if (!var3) {
                    _fun98885_ip = 613;
                    continue _fun98885
                }
            case 598:
                var5 = _closure1_slot2;
                var3 = var5.getLayoutModeForApp;
                var4 = var3.bind(var5)(var6);
            case 613:
                var3 = var1 != var4;
                var1 = null;
                if (!var3) {
                    _fun98885_ip = 632;
                    continue _fun98885
                }
            case 622:
                var3 = {};
                var3.layout_mode = var4;
                var1 = var3;
            case 632:
                return var1;
            case 634:
                var1 = var0.application;
                var0 = null;
                var3 = var0 == var1;
                var5 = undefined;
                if (var3) {
                    _fun98885_ip = 655;
                    continue _fun98885
                }
            case 650:
                var5 = var1.id;
            case 655:
                var1 = var0 != var5;
                var3 = null;
                if (!var1) {
                    _fun98885_ip = 679;
                    continue _fun98885
                }
            case 664:
                var4 = _closure1_slot2;
                var1 = var4.getLayoutModeForApp;
                var3 = var1.bind(var4)(var5);
            case 679:
                var1 = var0 != var3;
                var0 = null;
                if (!var1) {
                    _fun98885_ip = 712;
                    continue _fun98885
                }
            case 688:
                var1 = {};
                var2 = _closure1_slot6;
                var2 = var2.FOCUSED;
                var2 = var3 !== var2;
                var1.is_pip_mode = var2;
                var0 = var1;
            case 712:
                return var0;
        }
    };
    var2.getInitialSubscriptionPayload = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1371, 7879, 5188, 660, 3416, 7909, 5323, 12803, 5228, 2]);