// modules/activities/native/EmbeddedActivityView.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var8;
    var5 = function arg0() {
        _fun64845: for (var _fun64845_ip = 0;;) switch (_fun64845_ip) {
            case 0:
                var1 = arg0;
                var10 = var1.orientationLockState;
                var _closure2_slot0 = var10;
                var7 = var1.showLoadingIndicator;
                var _closure2_slot1 = var7;
                var5 = var1.setShowLoadingStateForLockingOrientation;
                var _closure2_slot2 = var5;
                var13 = var1.application;
                var _closure2_slot3 = var13;
                var6 = var1.setOrientationLockState;
                var _closure2_slot4 = var6;
                var9 = undefined;
                var _closure2_slot7 = var9;
                var _closure2_slot8 = var9;
                var _closure2_slot9 = var9;
                var2 = _closure1_slot4;
                var1 = var2.useState;
                var17 = false;
                var2 = var1.bind(var2)(var17);
                var1 = _closure1_slot3;
                var16 = 2;
                var1 = var1.bind(var9)(var2, var16);
                var12 = 0;
                var3 = var1[var12];
                var _closure2_slot5 = var3;
                var11 = 1;
                var2 = var1[var11];
                var8 = _closure1_slot0;
                var14 = _closure1_slot2;
                var1 = 8;
                var1 = var14[var1];
                var8 = var8.bind(var9)(var1);
                var1 = var8.getDefaultOrientationLockState;
                var14 = var1.bind(var8)(var13);
                var _closure2_slot6 = var14;
                var1 = null;
                var1 = var1 == var13;
                var8 = undefined;
                if (var1) {
                    _fun64845_ip = 168;
                    continue _fun64845
                }
            case 163:
                var8 = var13.id;
            case 168:
                var15 = _closure1_slot4;
                var1 = var15.useState;
                var15 = var1.bind(var15)(var17);
                var1 = _closure1_slot3;
                var1 = var1.bind(var9)(var15, var16);
                var12 = var1[var12];
                _closure2_slot7 = var12;
                var1 = var1[var11];
                _closure2_slot8 = var1;
                var11 = _closure1_slot1;
                var15 = _closure1_slot2;
                var1 = 9;
                var1 = var15[var1];
                var1 = var11.bind(var9)(var1);
                var1 = var1.bind(var9)();
                var9 = var1.width;
                var1 = var1.height;
                var1 = var9 > var1;
                _closure2_slot9 = var1;
                var16 = _closure1_slot4;
                var15 = var16.useLayoutEffect;
                var11 = new Array(1);
                var11[0] = var1;
                var9 = function() { // Environment: var0
                    _fun64846: for (var _fun64846_ip = 0;;) switch (_fun64846_ip) {
                        case 0:
                            var2 = _closure2_slot9;
                            var1 = _closure1_slot9;
                            if (var2) {
                                _fun64846_ip = 25;
                                continue _fun64846
                            }
                        case 17:
                            var4 = var1.PORTRAIT;
                            _fun64846_ip = 31;
                            continue _fun64846;
                        case 25:
                            var4 = var1.LANDSCAPE;
                        case 31:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 10;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var5 = 'ACTIVITY_SCREEN_ORIENTATION_UPDATE';
                            var1.type = var5;
                            var1.screenOrientation = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var9 = var15.bind(var16)(var9, var11);
                var15 = _closure1_slot4;
                var11 = var15.useLayoutEffect;
                var9 = new Array(1);
                var9[0] = var8;
                var8 = function() { // Environment: var0
                    var2 = _closure2_slot8;
                    var0 = undefined;
                    var1 = false;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var8 = var11.bind(var15)(var8, var9);
                var11 = _closure1_slot4;
                var9 = var11.useLayoutEffect;
                var8 = new Array(7);
                var8[0] = var14;
                var8[1] = var13;
                var8[2] = var10;
                var8[3] = var1;
                var8[4] = var12;
                var8[5] = var5;
                var8[6] = var6;
                var6 = function() { // Environment: var0
                    _fun64848: for (var _fun64848_ip = 0;;) switch (_fun64848_ip) {
                        case 0:
                            var1 = _closure2_slot7;
                            if (var1) {
                                _fun64848_ip = 75;
                                continue _fun64848
                            }
                        case 10:
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 == var2)) {
                                _fun64848_ip = 75;
                                continue _fun64848
                            }
                        case 20:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 11;
                            var1 = var3[var1];
                            var3 = undefined;
                            var4 = var2.bind(var3)(var1);
                            var2 = _closure2_slot9;
                            var1 = _closure2_slot6;
                            var1 = var4.bind(var3)(var2, var1);
                            if (var1) {
                                _fun64848_ip = 75;
                                continue _fun64848
                            }
                        case 62:
                            var2 = _closure2_slot2;
                            var1 = true;
                            var1 = var2.bind(var3)(var1);
                            _fun64848_ip = 88;
                            continue _fun64848;
                        case 75:
                            var3 = _closure2_slot2;
                            var2 = undefined;
                            var1 = false;
                            var1 = var3.bind(var2)(var1);
                        case 88:
                            var2 = _closure2_slot3;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun64848_ip = 118;
                                continue _fun64848
                            }
                        case 98:
                            var3 = _closure2_slot4;
                            var2 = _closure2_slot3;
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2, var1);
                        case 118:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var9.bind(var11)(var6, var8);
                var9 = _closure1_slot4;
                var8 = var9.useLayoutEffect;
                var6 = new Array(3);
                var6[0] = var10;
                var6[1] = var1;
                var6[2] = var5;
                var5 = function() { // Environment: var0
                    _fun64849: for (var _fun64849_ip = 0;;) switch (_fun64849_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 11;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var3 = _closure2_slot9;
                            var2 = _closure2_slot0;
                            var2 = var4.bind(var0)(var3, var2);
                            if (!var2) {
                                _fun64849_ip = 56;
                                continue _fun64849
                            }
                        case 45:
                            var2 = _closure2_slot2;
                            var1 = false;
                            var1 = var2.bind(var0)(var1);
                        case 56:
                            return var0;
                    }
                };
                var5 = var8.bind(var9)(var5, var6);
                var6 = _closure1_slot4;
                var5 = var6.useLayoutEffect;
                var4 = new Array(2);
                var4[0] = var7;
                var4[1] = var3;
                var0 = function() { // Environment: var0
                    _fun64850: for (var _fun64850_ip = 0;;) switch (_fun64850_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            if (var1) {
                                _fun64850_ip = 14;
                                continue _fun64850
                            }
                        case 10:
                            var1 = _closure2_slot5;
                        case 14:
                            if (var1) {
                                _fun64850_ip = 30;
                                continue _fun64850
                            }
                        case 17:
                            var2 = _closure2_slot8;
                            var1 = undefined;
                            var0 = true;
                            var0 = var2.bind(var1)(var0);
                        case 30:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var5.bind(var6)(var0, var4);
                var0 = {};
                var0.isResetting = var3;
                var0.setIsResetting = var2;
                var0.isLandscape = var1;
                return var0;
        }
    };
    var _closure1_slot15 = var5;
    var4 = function() {
        var0 = _closure1_slot14;
        var3 = undefined;
        var5 = var0.bind(var3)();
        var2 = _closure1_slot11;
        var1 = _closure1_slot6;
        var0 = {};
        var5 = var5.loadingContainer;
        var0.style = var5;
        var6 = _closure1_slot11;
        var5 = _closure1_slot5;
        var4 = {};
        var7 = 'large';
        var4.size = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot16 = var4;
    var3 = function arg0() {
        _fun64852: for (var _fun64852_ip = 0;;) switch (_fun64852_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.children;
                var9 = var1.wakeLockKey;
                var0 = var1.showLoadingIndicator;
                var1 = var1.isResetting;
                if (var0) {
                    _fun64852_ip = 110;
                    continue _fun64852
                }
            case 29:
                var0 = null;
                if (var1) {
                    _fun64852_ip = 108;
                    continue _fun64852
                }
            case 34:
                var4 = _closure1_slot13;
                var3 = _closure1_slot12;
                var2 = {};
                var8 = _closure1_slot11;
                var7 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 12;
                var5 = var5[var1];
                var1 = undefined;
                var7 = var7.bind(var1)(var5);
                var5 = {};
                var5.wakeLockKey = var9;
                var7 = var8.bind(var1)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var5[1] = var6;
                var2.children = var5;
                var0 = var4.bind(var1)(var3, var2);
            case 108:
                _fun64852_ip = 131;
                continue _fun64852;
            case 110:
                var4 = _closure1_slot11;
                var3 = _closure1_slot16;
                var2 = undefined;
                var1 = {};
                var0 = var4.bind(var2)(var3, var1);
            case 131:
                return var0;
        }
    };
    var _closure1_slot17 = var3;
    var0 = global;
    var11 = var0.Object;
    var9 = var11.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var11)(var2, var0, var6);
    var0 = 0;
    var6 = var8[var0];
    var0 = undefined;
    var6 = var10.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var9 = var8[var6];
    var6 = arg3;
    var9 = var6.bind(var0)(var9);
    var _closure1_slot4 = var9;
    var6 = 2;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var11 = var6.ActivityIndicator;
    var _closure1_slot5 = var11;
    var6 = var6.View;
    var _closure1_slot6 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var10 = var6.ActivityLayoutMode;
    var _closure1_slot8 = var10;
    var6 = var6.ActivityScreenOrientation;
    var _closure1_slot9 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var6 = var6.OBEY_SILENT_HARDWARE_SWITCH_APP_IDS;
    var _closure1_slot10 = var6;
    var6 = 6;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var10 = var6.jsx;
    var _closure1_slot11 = var10;
    var10 = var6.Fragment;
    var _closure1_slot12 = var10;
    var6 = var6.jsxs;
    var _closure1_slot13 = var6;
    var6 = 7;
    var6 = var8[var6];
    var11 = var7.bind(var0)(var6);
    var10 = var11.createStyles;
    var6 = {};
    var12 = {
        'flex': 1,
        'justifyContent': 'center'
    };
    var6.loadingContainer = var12;
    var6 = var10.bind(var11)(var6);
    var _closure1_slot14 = var6;
    var6 = var9.memo;
    var1 = function arg0() {
        _fun64853: for (var _fun64853_ip = 0;;) switch (_fun64853_ip) {
            case 0:
                var0 = arg0;
                var20 = var0.channel;
                var15 = var0.layoutMode;
                var _closure2_slot0 = var15;
                var9 = var0.portraitSafeAreasConfig;
                var11 = var0.landscapeSafeAreasConfig;
                var4 = undefined;
                var _closure2_slot3 = var4;
                var0 = _closure1_slot7;
                var1 = var0.getCurrentEmbeddedActivity;
                var18 = var1.bind(var0)();
                var _closure2_slot1 = var18;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 13;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var16 = var1.bind(var4)();
                var _closure2_slot2 = var16;
                var2 = _closure1_slot0;
                var1 = 14;
                var1 = var6[var1];
                var7 = var2.bind(var4)(var1);
                var3 = var7.useStateFromStores;
                var2 = new Array(1);
                var2[0] = var0;
                var1 = new Array(1);
                var1[0] = var16;
                var0 = function() { // Environment: var19
                    _fun64854: for (var _fun64854_ip = 0;;) switch (_fun64854_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var0 = null;
                            var2 = var0 != var2;
                            var0 = undefined;
                            if (!var2) {
                                _fun64854_ip = 45;
                                continue _fun64854
                            }
                        case 18:
                            var3 = _closure1_slot7;
                            var2 = var3.getOrientationLockStateForApp;
                            var1 = _closure2_slot2;
                            var1 = var1.id;
                            var0 = var2.bind(var3)(var1);
                        case 45:
                            return var0;
                    }
                };
                var3 = var3.bind(var7)(var2, var0, var1);
                var2 = _closure1_slot4;
                var1 = var2.useState;
                var0 = true;
                var2 = var1.bind(var2)(var0);
                var1 = _closure1_slot3;
                var0 = 2;
                var2 = var1.bind(var4)(var2, var0);
                var0 = 0;
                var0 = var2[var0];
                var1 = 1;
                var2 = var2[var1];
                var1 = {};
                var1.currentEmbeddedActivity = var18;
                var1.channel = var20;
                var7 = var1.currentEmbeddedActivity;
                var10 = var1.channel;
                var17 = null;
                if (!(var17 != var7)) {
                    _fun64853_ip = 411;
                    continue _fun64853
                }
            case 209:
                var1 = {};
                var12 = var7.compositeInstanceId;
                if (!(var17 == var12)) {
                    _fun64853_ip = 227;
                    continue _fun64853
                }
            case 221:
                var12 = var7.launchId;
            case 227:
                var1.instance_id = var12;
                var13 = var7.location;
                var14 = var17 == var13;
                var12 = undefined;
                if (var14) {
                    _fun64853_ip = 251;
                    continue _fun64853
                }
            case 246:
                var12 = var13.id;
            case 251:
                var1.location_id = var12;
                var12 = var7.launchId;
                var1.launch_id = var12;
                var12 = var7.proxyTicket;
                if (!(var17 != var12)) {
                    _fun64853_ip = 291;
                    continue _fun64853
                }
            case 279:
                var7 = var7.proxyTicket;
                var1.discord_proxy_ticket = var7;
            case 291:
                var7 = var17 != var10;
                if (!var7) {
                    _fun64853_ip = 307;
                    continue _fun64853
                }
            case 298:
                var12 = var10.id;
                var7 = var17 != var12;
            case 307:
                if (!var7) {
                    _fun64853_ip = 323;
                    continue _fun64853
                }
            case 310:
                var13 = var10.id;
                var12 = '';
                var7 = var12 !== var13;
            case 323:
                if (!var7) {
                    _fun64853_ip = 337;
                    continue _fun64853
                }
            case 326:
                var7 = var10.id;
                var1.channel_id = var7;
            case 337:
                var12 = var17 == var10;
                var7 = undefined;
                if (var12) {
                    _fun64853_ip = 351;
                    continue _fun64853
                }
            case 346:
                var7 = var10.guild_id;
            case 351:
                var7 = var17 != var7;
                if (!var7) {
                    _fun64853_ip = 380;
                    continue _fun64853
                }
            case 358:
                var12 = var17 == var10;
                var13 = undefined;
                if (var12) {
                    _fun64853_ip = 372;
                    continue _fun64853
                }
            case 367:
                var13 = var10.guild_id;
            case 372:
                var12 = '';
                var7 = var12 !== var13;
            case 380:
                var14 = var1;
                if (!var7) {
                    _fun64853_ip = 425;
                    continue _fun64853
                }
            case 386:
                var12 = var17 == var10;
                var7 = undefined;
                if (var12) {
                    _fun64853_ip = 400;
                    continue _fun64853
                }
            case 395:
                var7 = var10.guild_id;
            case 400:
                var1.guild_id = var7;
                var14 = var1;
                _fun64853_ip = 425;
                continue _fun64853;
            case 411:
                var1 = {};
                var7 = '';
                var1.instance_id = var7;
                var14 = var1;
            case 425:
                var1 = 15;
                var1 = var6[var1];
                var5 = var5.bind(var4)(var1);
                var1 = {};
                var1.connectedEmbeddedActivity = var18;
                var1 = var5.bind(var4)(var1);
                var7 = _closure1_slot4;
                var6 = var7.useLayoutEffect;
                var5 = new Array(2);
                var5[0] = var15;
                var5[1] = var18;
                var1 = function() { // Environment: var19
                    _fun64855: for (var _fun64855_ip = 0;;) switch (_fun64855_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun64855_ip = 80;
                                continue _fun64855
                            }
                        case 13:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 10;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.dispatch;
                            var0 = {};
                            var4 = 'ACTIVITY_LAYOUT_MODE_UPDATE';
                            var0.type = var4;
                            var4 = _closure2_slot0;
                            var0.layoutMode = var4;
                            var3 = _closure2_slot1;
                            var3 = var3.applicationId;
                            var0.applicationId = var3;
                            var0 = var1.bind(var2)(var0);
                        case 80:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var6.bind(var7)(var1, var5);
                var7 = _closure1_slot4;
                var6 = var7.useCallback;
                var5 = new Array(2);
                var5[0] = var16;
                var5[1] = var18;
                var1 = function() { // Environment: var19
                    _fun64856: for (var _fun64856_ip = 0;;) switch (_fun64856_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 16;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.leaveActivity;
                            var1 = {};
                            var4 = _closure2_slot1;
                            var6 = null;
                            var7 = var6 == var4;
                            var4 = undefined;
                            if (var7) {
                                _fun64856_ip = 60;
                                continue _fun64856
                            }
                        case 51:
                            var7 = _closure2_slot1;
                            var4 = var7.location;
                        case 60:
                            var1.location = var4;
                            var4 = _closure2_slot2;
                            var6 = var6 == var4;
                            var4 = undefined;
                            if (var6) {
                                _fun64856_ip = 86;
                                continue _fun64856
                            }
                        case 77:
                            var5 = _closure2_slot2;
                            var4 = var5.id;
                        case 86:
                            var1.applicationId = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var13 = var6.bind(var7)(var1, var5);
                var1 = var17 == var16;
                var10 = undefined;
                if (var1) {
                    _fun64853_ip = 528;
                    continue _fun64853
                }
            case 523:
                var10 = var16.id;
            case 528:
                var6 = var17 == var18;
                if (var6) {
                    _fun64853_ip = 554;
                    continue _fun64853
                }
            case 535:
                var5 = var17 == var18;
                var1 = undefined;
                if (var5) {
                    _fun64853_ip = 550;
                    continue _fun64853
                }
            case 544:
                var1 = var18.launchId;
            case 550:
                var6 = var17 == var1;
            case 554:
                if (var6) {
                    _fun64853_ip = 560;
                    continue _fun64853
                }
            case 557:
                var6 = var0;
            case 560:
                if (var6) {
                    _fun64853_ip = 567;
                    continue _fun64853
                }
            case 563:
                var6 = var17 == var10;
            case 567:
                if (var6) {
                    _fun64853_ip = 574;
                    continue _fun64853
                }
            case 570:
                var6 = var17 == var16;
            case 574:
                var1 = _closure1_slot15;
                var0 = {};
                var0.orientationLockState = var3;
                var0.showLoadingIndicator = var6;
                var0.setShowLoadingStateForLockingOrientation = var2;
                var0.application = var16;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 8;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.setOrientationLockState;
                var0.setOrientationLockState = var2;
                var0 = var1.bind(var4)(var0);
                var5 = var0.isResetting;
                var1 = var0.setIsResetting;
                _closure2_slot3 = var1;
                var12 = var0.isLandscape;
                var1 = var17 == var18;
                var0 = null;
                if (var1) {
                    _fun64853_ip = 994;
                    continue _fun64853
                }
            case 669:
                var1 = var17 == var10;
                var0 = null;
                if (var1) {
                    _fun64853_ip = 994;
                    continue _fun64853
                }
            case 681:
                var3 = _closure1_slot11;
                var2 = _closure1_slot17;
                var1 = {};
                var7 = 'EmbeddedActivities';
                var1.wakeLockKey = var7;
                var1.showLoadingIndicator = var6;
                var1.isResetting = var5;
                var7 = _closure1_slot11;
                var6 = _closure1_slot1;
                var21 = _closure1_slot2;
                var5 = 17;
                var5 = var21[var5];
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
                var5.applicationId = var10;
                var21 = var17 == var20;
                var19 = undefined;
                if (var21) {
                    _fun64853_ip = 766;
                    continue _fun64853
                }
            case 761:
                var19 = var20.id;
            case 766:
                var5.channelId = var19;
                var21 = var17 == var20;
                var19 = undefined;
                if (var21) {
                    _fun64853_ip = 784;
                    continue _fun64853
                }
            case 779:
                var19 = var20.guild_id;
            case 784:
                var5.guildId = var19;
                var19 = var18.url;
                var5.activityUrl = var19;
                var5.currentEmbeddedActivity = var18;
                var19 = var17 == var18;
                var17 = undefined;
                if (var19) {
                    _fun64853_ip = 818;
                    continue _fun64853
                }
            case 812:
                var17 = var18.compositeInstanceId;
            case 818:
                var5.activitySessionId = var17;
                var5.queryParams = var14;
                var5.onLoadError = var13;
                var14 = _closure1_slot0;
                var17 = _closure1_slot2;
                var13 = 18;
                var13 = var17[var13];
                var14 = var14.bind(var4)(var13);
                var13 = var14.allowPopups;
                var13 = var13.bind(var14)(var16);
                var5.allowPopups = var13;
                var13 = 'origin';
                var5.referrerPolicy = var13;
                var13 = _closure1_slot8;
                var13 = var13.PIP;
                var13 = var15 === var13;
                if (var13) {
                    _fun64853_ip = 909;
                    continue _fun64853
                }
            case 895:
                var14 = _closure1_slot8;
                var14 = var14.GRID;
                var13 = var15 === var14;
            case 909:
                var5.isPipOrGridMode = var13;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var13 = 16;
                var13 = var15[var13];
                var13 = var14.bind(var4)(var13);
                var13 = var13.EMBEDDED_ACTIVITY_WEB_VIEW_KEY;
                var5.webViewKey = var13;
                if (!var12) {
                    _fun64853_ip = 951;
                    continue _fun64853
                }
            case 948:
                var9 = var11;
            case 951:
                var5.safeAreasConfig = var9;
                var9 = _closure1_slot10;
                var8 = var9.has;
                var8 = var8.bind(var9)(var10);
                var8 = !var8;
                var5.ignoreSilentHardwareSwitch = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 994:
                return var0;
        }
    };
    var1 = var6.bind(var9)(var1);
    var6 = 19;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/activities/native/EmbeddedActivityView.tsx';
    var6 = var7.bind(var8)(var6);
    var2.default = var1;
    var2.useBaseActivityView = var5;
    var2.ActivityViewLoadingIndicator = var4;
    var2.BaseActivityView = var3;
    var2.EmbeddedActivityView = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1371, 3459, 3487, 33, 1297, 8082, 1464, 806, 8084, 8085, 8080, 566, 8087, 7970, 8088, 8094, 2]);