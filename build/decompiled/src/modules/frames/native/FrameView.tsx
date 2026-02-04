// modules/frames/native/FrameView.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FrameLayoutModes;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ActivityPlatform;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun110491: for (var _fun110491_ip = 0;;) switch (_fun110491_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.layoutMode;
                var _closure2_slot0 = var13;
                var7 = var0.portraitSafeAreasConfig;
                var8 = var0.landscapeSafeAreasConfig;
                var4 = undefined;
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var3 = 6;
                var0 = var2[var3];
                var9 = var1.bind(var4)(var0);
                var6 = var9.useStateFromStores;
                var0 = _closure1_slot5;
                var5 = new Array(1);
                var5[0] = var0;
                var0 = function() { // Environment: var19
                    var1 = _closure1_slot5;
                    var0 = var1.getConnectedFrame;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var17 = var6.bind(var9)(var5, var0);
                var _closure2_slot1 = var17;
                var0 = 7;
                var0 = var2[var0];
                var5 = var1.bind(var4)(var0);
                var2 = var5.useApplication;
                var0 = null;
                var6 = var0 == var17;
                var1 = undefined;
                if (var6) {
                    _fun110491_ip = 128;
                    continue _fun110491
                }
            case 123:
                var1 = var17.applicationId;
            case 128:
                var1 = var2.bind(var5)(var1);
                var16 = var1.data;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var3];
                var6 = var2.bind(var4)(var1);
                var5 = var6.useStateFromStores;
                var1 = _closure1_slot5;
                var3 = new Array(1);
                var3[0] = var1;
                var2 = new Array(1);
                var2[0] = var17;
                var1 = function() { // Environment: var19
                    _fun110493: for (var _fun110493_ip = 0;;) switch (_fun110493_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var2 = var0 != var2;
                            var0 = undefined;
                            if (!var2) {
                                _fun110493_ip = 45;
                                continue _fun110493
                            }
                        case 18:
                            var3 = _closure1_slot5;
                            var2 = var3.getOrientationLockStateForApp;
                            var1 = _closure2_slot1;
                            var1 = var1.applicationId;
                            var0 = var2.bind(var3)(var1);
                        case 45:
                            return var0;
                    }
                };
                var15 = var5.bind(var6)(var3, var1, var2);
                var6 = _closure1_slot4;
                var2 = var6.useState;
                var1 = true;
                var3 = var2.bind(var6)(var1);
                var2 = _closure1_slot3;
                var1 = 2;
                var3 = var2.bind(var4)(var3, var1);
                var1 = 0;
                var1 = var3[var1];
                var2 = 1;
                var9 = var3[var2];
                var5 = var6.useLayoutEffect;
                var3 = new Array(1);
                var3[0] = var13;
                var2 = function() { // Environment: var19
                    _fun110494: for (var _fun110494_ip = 0;;) switch (_fun110494_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun110494_ip = 82;
                                continue _fun110494
                            }
                        case 13:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 8;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.dispatch;
                            var0 = {};
                            var4 = 'FRAME_UPDATE_LAYOUT_MODE';
                            var0.type = var4;
                            var4 = _closure2_slot0;
                            var0.layoutMode = var4;
                            var3 = _closure2_slot1;
                            var3 = var3.applicationId;
                            var0.applicationId = var3;
                            var0 = var1.bind(var2)(var0);
                        case 82:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var5.bind(var6)(var2, var3);
                var2 = var0 == var17;
                var18 = undefined;
                if (var2) {
                    _fun110491_ip = 277;
                    continue _fun110491
                }
            case 272:
                var18 = var17.applicationId;
            case 277:
                _closure2_slot2 = var18;
                var6 = _closure1_slot4;
                var5 = var6.useCallback;
                var3 = new Array(1);
                var3[0] = var18;
                var2 = function() { // Environment: var19
                    _fun110495: for (var _fun110495_ip = 0;;) switch (_fun110495_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun110495_ip = 59;
                                continue _fun110495
                            }
                        case 13:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 9;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.leaveFrame;
                            var0 = {};
                            var3 = _closure2_slot2;
                            var0.applicationId = var3;
                            var0 = var1.bind(var2)(var0);
                        case 59:
                            var0 = undefined;
                            return var0;
                    }
                };
                var14 = var5.bind(var6)(var2, var3);
                var6 = var0 == var17;
                if (var6) {
                    _fun110491_ip = 321;
                    continue _fun110491
                }
            case 318:
                var6 = var1;
            case 321:
                if (var6) {
                    _fun110491_ip = 328;
                    continue _fun110491
                }
            case 324:
                var6 = var0 == var18;
            case 328:
                if (var6) {
                    _fun110491_ip = 335;
                    continue _fun110491
                }
            case 331:
                var6 = var0 == var16;
            case 335:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 10;
                var2 = var12[var1];
                var5 = var11.bind(var4)(var2);
                var3 = var5.useBaseActivityView;
                var2 = {};
                var2.orientationLockState = var15;
                var2.showLoadingIndicator = var6;
                var2.setShowLoadingStateForLockingOrientation = var9;
                var2.application = var16;
                var9 = 11;
                var9 = var12[var9];
                var9 = var11.bind(var4)(var9);
                var9 = var9.setOrientationLockState;
                var2.setOrientationLockState = var9;
                var2 = var3.bind(var5)(var2);
                var5 = var2.isResetting;
                var3 = var2.setIsResetting;
                _closure2_slot3 = var3;
                var9 = var2.isLandscape;
                if (!(var0 != var17)) {
                    _fun110491_ip = 701;
                    continue _fun110491
                }
            case 439:
                var15 = {};
                var2 = 'example-cl-instance';
                var15.instance_id = var2;
                var2 = _closure1_slot7;
                var2 = var2.MOBILE;
                var15.platform = var2;
                var2 = var17.proxyTicket;
                if (!(var0 != var2)) {
                    _fun110491_ip = 489;
                    continue _fun110491
                }
            case 477:
                var2 = var17.proxyTicket;
                var15.discord_proxy_ticket = var2;
            case 489:
                var3 = _closure1_slot8;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = var12[var1];
                var1 = var11.bind(var4)(var1);
                var2 = var1.BaseActivityView;
                var1 = {};
                var20 = 'FrameActivities';
                var1.wakeLockKey = var20;
                var1.showLoadingIndicator = var6;
                var1.isResetting = var5;
                var6 = _closure1_slot1;
                var5 = 12;
                var5 = var12[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var19 = function() {
                    var2 = _closure2_slot3;
                    var0 = undefined;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    var1 = global;
                    var3 = var1.setTimeout;
                    var2 = function() { // Environment: var1
                        var2 = _closure2_slot3;
                        var1 = undefined;
                        var0 = false;
                        var0 = var2.bind(var1)(var0);
                        return var0;
                    };
                    var1 = 0;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var5.onActivityCrash = var19;
                var5.applicationId = var18;
                var17 = var17.url;
                var5.activityUrl = var17;
                var5.queryParams = var15;
                var5.onLoadError = var14;
                var14 = 13;
                var14 = var12[var14];
                var15 = var11.bind(var4)(var14);
                var14 = var15.allowPopups;
                var14 = var14.bind(var15)(var16);
                var5.allowPopups = var14;
                var14 = 'origin';
                var5.referrerPolicy = var14;
                var10 = _closure1_slot6;
                var10 = var10.PIP;
                var10 = var13 === var10;
                var5.isPipOrGridMode = var10;
                var10 = 9;
                var10 = var12[var10];
                var10 = var11.bind(var4)(var10);
                var10 = var10.FRAME_WEB_VIEW_KEY;
                var5.webViewKey = var10;
                if (!var9) {
                    _fun110491_ip = 678;
                    continue _fun110491
                }
            case 675:
                var7 = var8;
            case 678:
                var5.safeAreasConfig = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 701:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/frames/native/FrameView.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    var2.FrameView = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 7919, 7920, 3457, 33, 566, 5344, 806, 7923, 8058, 14230, 14231, 8069, 2]);