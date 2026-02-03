// modules/voice_panel/native/card/VoicePanelAnimatedActivityCard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var14 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun111303: for (var _fun111303_ip = 0;;) switch (_fun111303_ip) {
            case 0:
                var0 = arg0;
                var22 = var0.applicationId;
                var _closure2_slot0 = var22;
                var26 = var0.sharedVisible;
                var _closure2_slot1 = var26;
                var13 = var0.layout;
                var4 = undefined;
                var _closure2_slot12 = var4;
                var _closure2_slot13 = var4;
                var _closure2_slot14 = var4;
                var _closure2_slot15 = var4;
                var _closure2_slot16 = var4;
                var _closure2_slot17 = var4;
                var _closure2_slot18 = var4;
                var _closure2_slot19 = var4;
                var _closure2_slot20 = var4;
                var _closure2_slot21 = var4;
                var _closure2_slot22 = var4;
                var _closure2_slot23 = var4;
                var _closure2_slot24 = var4;
                var _closure2_slot25 = var4;
                var0 = _closure1_slot17;
                var18 = var0.bind(var4)();
                var5 = _closure1_slot4;
                var2 = var5.useState;
                var0 = -1;
                var2 = var2.bind(var5)(var0);
                var0 = _closure1_slot3;
                var28 = 2;
                var0 = var0.bind(var4)(var2, var28);
                var16 = 0;
                var17 = var0[var16];
                var27 = 1;
                var0 = var0[var27];
                var _closure2_slot2 = var0;
                var7 = _closure1_slot4;
                var6 = var7.useContext;
                var5 = _closure1_slot1;
                var0 = _closure1_slot2;
                var2 = 15;
                var2 = var0[var2];
                var2 = var5.bind(var4)(var2);
                var2 = var6.bind(var7)(var2);
                var6 = var2.channelId;
                var _closure2_slot3 = var6;
                var38 = var2.focused;
                var _closure2_slot4 = var38;
                var33 = var2.layoutManager;
                var _closure2_slot5 = var33;
                var36 = var2.mode;
                var _closure2_slot6 = var36;
                var31 = var2.windowDimensions;
                var _closure2_slot7 = var31;
                var20 = var2.hideControls;
                var _closure2_slot8 = var20;
                var21 = var2.controlsSpecs;
                var _closure2_slot9 = var21;
                var2 = 16;
                var2 = var0[var2];
                var2 = var5.bind(var4)(var2);
                var32 = var2.bind(var4)();
                var _closure2_slot10 = var32;
                var2 = _closure1_slot0;
                var14 = 17;
                var0 = var0[var14];
                var6 = var2.bind(var4)(var0);
                var5 = var6.useStateFromStores;
                var0 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var3
                    var2 = _closure1_slot7;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var19 = var5.bind(var6)(var2, var0);
                var _closure2_slot11 = var19;
                var6 = _closure1_slot4;
                var5 = var6.useMemo;
                var2 = new Array(1);
                var2[0] = var19;
                var0 = function() { // Environment: var3
                    var0 = {};
                    var1 = _closure2_slot11;
                    var0.channel = var1;
                    var1 = 'channel';
                    var0.type = var1;
                    return var0;
                };
                var25 = var5.bind(var6)(var0, var2);
                var0 = null;
                var5 = var0 == var19;
                var2 = undefined;
                if (var5) {
                    _fun111303_ip = 368;
                    continue _fun111303
                }
            case 363:
                var2 = var19.guild_id;
            case 368:
                _closure2_slot12 = var2;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 18;
                var5 = var7[var5];
                var7 = var6.bind(var4)(var5);
                var6 = var7.useActivityShelfItemData;
                var5 = var0 == var19;
                var8 = undefined;
                if (var5) {
                    _fun111303_ip = 412;
                    continue _fun111303
                }
            case 407:
                var8 = var19.guild_id;
            case 412:
                var9 = var0 != var8;
                var5 = null;
                if (!var9) {
                    _fun111303_ip = 424;
                    continue _fun111303
                }
            case 421:
                var5 = var8;
            case 424:
                var24 = var6.bind(var7)(var5, var22);
                var7 = _closure1_slot4;
                var6 = var7.useEffect;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var3
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 19;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.fetchShelf;
                    var1 = {};
                    var4 = _closure2_slot12;
                    var1.guildId = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var2 = var6.bind(var7)(var2, var5);
                var12 = _closure1_slot1;
                var9 = _closure1_slot2;
                var2 = 20;
                var2 = var9[var2];
                var5 = var12.bind(var4)(var2);
                var2 = new Array(1);
                var2[0] = var22;
                var5 = var5.bind(var4)(var2);
                var2 = _closure1_slot3;
                var2 = var2.bind(var4)(var5, var27);
                var10 = var2[var16];
                _closure2_slot13 = var10;
                var8 = _closure1_slot0;
                var2 = var9[var14];
                var11 = var8.bind(var4)(var2);
                var7 = var11.useStateFromStoresObject;
                var2 = _closure1_slot5;
                var6 = new Array(1);
                var6[0] = var2;
                var5 = new Array(1);
                var5[0] = var22;
                var2 = function() { // Environment: var3
                    var0 = {};
                    var4 = _closure1_slot5;
                    var2 = var4.getGridOrientationLockStateForApp;
                    var3 = _closure2_slot0;
                    var2 = var2.bind(var4)(var3);
                    var0.gridOrientationLockState = var2;
                    var2 = _closure1_slot5;
                    var1 = var2.getOrientationLockStateForApp;
                    var1 = var1.bind(var2)(var3);
                    var0.focusedOrientationLockState = var1;
                    return var0;
                };
                var2 = var7.bind(var11)(var6, var2, var5);
                var35 = var2.gridOrientationLockState;
                _closure2_slot14 = var35;
                var29 = var2.focusedOrientationLockState;
                _closure2_slot15 = var29;
                var2 = 21;
                var2 = var9[var2];
                var2 = var12.bind(var4)(var2);
                var5 = var2.bind(var4)();
                var2 = var9[var14];
                var11 = var8.bind(var4)(var2);
                var7 = var11.useStateFromStores;
                var2 = _closure1_slot5;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = function() { // Environment: var3
                    _fun111308: for (var _fun111308_ip = 0;;) switch (_fun111308_ip) {
                        case 0:
                            var5 = _closure1_slot5;
                            var4 = var5.getEmbeddedActivitiesForChannel;
                            var0 = _closure2_slot3;
                            var5 = var4.bind(var5)(var0);
                            var4 = var5.find;
                            var0 = function(arg0) { // Environment: var1
                                _fun111309: for (var _fun111309_ip = 0;;) switch (_fun111309_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var1 = var0.applicationId;
                                        var3 = _closure2_slot13;
                                        var0 = null;
                                        var3 = var0 == var3;
                                        var0 = undefined;
                                        if (var3) {
                                            _fun111309_ip = 35;
                                            continue _fun111309
                                        }
                                    case 26:
                                        var2 = _closure2_slot13;
                                        var0 = var2.id;
                                    case 35:
                                        var0 = var1 === var0;
                                        return var0;
                                }
                            };
                            var0 = var4.bind(var5)(var0);
                            var4 = null;
                            if (!(var4 == var0)) {
                                _fun111308_ip = 86;
                                continue _fun111308
                            }
                        case 50:
                            var4 = _closure1_slot5;
                            var3 = var4.getEmbeddedActivitiesForStartingChannel;
                            var2 = _closure2_slot3;
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.find;
                            var1 = function(arg0) { // Environment: var1
                                _fun111310: for (var _fun111310_ip = 0;;) switch (_fun111310_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var1 = var0.applicationId;
                                        var3 = _closure2_slot13;
                                        var0 = null;
                                        var3 = var0 == var3;
                                        var0 = undefined;
                                        if (var3) {
                                            _fun111310_ip = 35;
                                            continue _fun111310
                                        }
                                    case 26:
                                        var2 = _closure2_slot13;
                                        var0 = var2.id;
                                    case 35:
                                        var0 = var1 === var0;
                                        return var0;
                                }
                            };
                            var0 = var2.bind(var3)(var1);
                        case 86:
                            return var0;
                    }
                };
                var11 = var7.bind(var11)(var6, var2);
                var7 = 22;
                var2 = var9[var7];
                var6 = var12.bind(var4)(var2);
                var2 = 23;
                var2 = var9[var2];
                var2 = var12.bind(var4)(var2);
                var2 = var2.ACTIVITY_TILE;
                var2 = var6.bind(var4)(var2);
                var6 = var2.analyticsLocations;
                var2 = 24;
                var2 = var9[var2];
                var8 = var8.bind(var4)(var2);
                var2 = var8.useAnalyticsContext;
                var23 = var2.bind(var8)();
                var2 = var0 != var5;
                if (!var2) {
                    _fun111303_ip = 732;
                    continue _fun111303
                }
            case 709:
                var8 = var5.id;
                var9 = var0 == var10;
                var5 = undefined;
                if (var9) {
                    _fun111303_ip = 728;
                    continue _fun111303
                }
            case 723:
                var5 = var10.id;
            case 728:
                var2 = var8 === var5;
            case 732:
                if (var2) {
                    _fun111303_ip = 780;
                    continue _fun111303
                }
            case 735:
                var8 = var0 == var11;
                var5 = undefined;
                if (var8) {
                    _fun111303_ip = 776;
                    continue _fun111303
                }
            case 744:
                var12 = var11.participants;
                var8 = var0 == var12;
                var5 = undefined;
                if (var8) {
                    _fun111303_ip = 776;
                    continue _fun111303
                }
            case 759:
                var9 = var12.find;
                var8 = function(arg0) { // Environment: var3
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 25;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.isActivityParticipantCurrentUserCurrentSession;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var9.bind(var12)(var8);
            case 776:
                var2 = var0 != var5;
            case 780:
                _closure2_slot16 = var2;
                var12 = _closure1_slot4;
                var9 = var12.useCallback;
                var8 = new Array(1);
                var8[0] = var2;
                var5 = function() { // Environment: var3
                    _fun111312: for (var _fun111312_ip = 0;;) switch (_fun111312_ip) {
                        case 0:
                            var1 = _closure2_slot16;
                            if (!var1) {
                                _fun111312_ip = 30;
                                continue _fun111312
                            }
                        case 10:
                            var2 = _closure2_slot2;
                            var1 = undefined;
                            var0 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var0 = var0 + 1;
                                return var0;
                            };
                            var0 = var2.bind(var1)(var0);
                        case 30:
                            var0 = undefined;
                            return var0;
                    }
                };
                var30 = var9.bind(var12)(var5, var8);
                _closure2_slot17 = var30;
                var37 = _closure1_slot0;
                var34 = _closure1_slot2;
                var12 = 26;
                var5 = var34[var12];
                var15 = var37.bind(var4)(var5);
                var9 = var15.useAnimatedReaction;
                var8 = function() {
                    var0 = {};
                    var3 = _closure2_slot1;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var0.visible = var2;
                    var2 = _closure2_slot6;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var0.mode = var1;
                    return var0;
                };
                var5 = {};
                var5.sharedVisible = var26;
                var5.mode = var36;
                var8.__closure = var5;
                var5 = 2072430391020.0;
                var8.__workletHash = var5;
                var5 = _closure1_slot18;
                var8.__initData = var5;
                var5 = function arg0, arg1() {
                    _fun111315: for (var _fun111315_ip = 0;;) switch (_fun111315_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = arg1;
                            var1 = var0.visible;
                            var3 = var0.mode;
                            var0 = 1;
                            var0 = var0 === var1;
                            if (!var0) {
                                _fun111315_ip = 33;
                                continue _fun111315
                            }
                        case 27:
                            var1 = null;
                            var0 = var1 != var4;
                        case 33:
                            if (!var0) {
                                _fun111315_ip = 48;
                                continue _fun111315
                            }
                        case 36:
                            var2 = var4.visible;
                            var1 = 0;
                            var0 = var1 === var2;
                        case 48:
                            if (var0) {
                                _fun111315_ip = 104;
                                continue _fun111315
                            }
                        case 51:
                            var1 = _closure1_slot9;
                            var1 = var1.PIP;
                            var1 = var3 !== var1;
                            if (!var1) {
                                _fun111315_ip = 101;
                                continue _fun111315
                            }
                        case 71:
                            var3 = null;
                            var5 = var3 == var4;
                            var3 = undefined;
                            if (var5) {
                                _fun111315_ip = 87;
                                continue _fun111315
                            }
                        case 82:
                            var3 = var4.mode;
                        case 87:
                            var2 = _closure1_slot9;
                            var2 = var2.PIP;
                            var1 = var3 === var2;
                        case 101:
                            var0 = var1;
                        case 104:
                            if (!var0) {
                                _fun111315_ip = 153;
                                continue _fun111315
                            }
                        case 107:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 26;
                            var0 = var1[var0];
                            var1 = undefined;
                            var3 = var2.bind(var1)(var0);
                            var2 = var3.runOnJS;
                            var0 = _closure2_slot17;
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.bind(var1)();
                        case 153:
                            var0 = undefined;
                            return var0;
                    }
                };
                var26 = {};
                var39 = _closure1_slot9;
                var26.VoicePanelModes = var39;
                var34 = var34[var12];
                var34 = var37.bind(var4)(var34);
                var34 = var34.runOnJS;
                var26.runOnJS = var34;
                var26.incrementActivityKey = var30;
                var5.__closure = var26;
                var26 = 9732208421749.0;
                var5.__workletHash = var26;
                var26 = _closure1_slot19;
                var5.__initData = var26;
                var5 = var9.bind(var15)(var8, var5);
                var9 = _closure1_slot4;
                var8 = var9.useState;
                var5 = false;
                var8 = var8.bind(var9)(var5);
                var5 = _closure1_slot3;
                var5 = var5.bind(var4)(var8, var28);
                var15 = var5[var16];
                _closure2_slot18 = var15;
                var37 = var5[var27];
                _closure2_slot19 = var37;
                var5 = var0 != var11;
                var39 = null;
                if (!var5) {
                    _fun111303_ip = 1079;
                    continue _fun111303
                }
            case 1026:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 27;
                var5 = var9[var5];
                var9 = var8.bind(var4)(var5);
                var8 = var9.getEmbeddedActivityParticipantId;
                var5 = {};
                var26 = var11.applicationId;
                var5.applicationId = var26;
                var26 = var11.compositeInstanceId;
                var5.instanceId = var26;
                var39 = var8.bind(var9)(var5);
            case 1079:
                _closure2_slot20 = var39;
                var9 = _closure1_slot0;
                var5 = _closure1_slot2;
                var8 = var5[var12];
                var34 = var9.bind(var4)(var8);
                var30 = var34.useAnimatedReaction;
                var26 = function() {
                    _fun111316: for (var _fun111316_ip = 0;;) switch (_fun111316_ip) {
                        case 0:
                            var0 = _closure2_slot20;
                            var3 = null;
                            var0 = var3 != var0;
                            if (!var0) {
                                _fun111316_ip = 51;
                                continue _fun111316
                            }
                        case 16:
                            var4 = _closure2_slot4;
                            var2 = var4.get;
                            var2 = var2.bind(var4)();
                            var4 = var3 == var2;
                            var3 = undefined;
                            if (var4) {
                                _fun111316_ip = 43;
                                continue _fun111316
                            }
                        case 38:
                            var3 = var2.id;
                        case 43:
                            var2 = _closure2_slot20;
                            var0 = var3 === var2;
                        case 51:
                            if (!var0) {
                                _fun111316_ip = 84;
                                continue _fun111316
                            }
                        case 54:
                            var2 = _closure2_slot6;
                            var1 = var2.get;
                            var2 = var1.bind(var2)();
                            var1 = _closure1_slot9;
                            var1 = var1.PANEL;
                            var0 = var2 === var1;
                        case 84:
                            return var0;
                    }
                };
                var8 = {};
                var8.activityParticipantId = var39;
                var8.focused = var38;
                var8.mode = var36;
                var36 = _closure1_slot9;
                var8.VoicePanelModes = var36;
                var26.__closure = var8;
                var8 = 2833167890519.0;
                var26.__workletHash = var8;
                var8 = _closure1_slot20;
                var26.__initData = var8;
                var8 = function arg0, arg1() {
                    _fun111317: for (var _fun111317_ip = 0;;) switch (_fun111317_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = arg1;
                            if (!(var2 !== var0)) {
                                _fun111317_ip = 57;
                                continue _fun111317
                            }
                        case 10:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 26;
                            var0 = var1[var0];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var0);
                            var3 = var4.runOnJS;
                            var0 = _closure2_slot19;
                            var0 = var3.bind(var4)(var0);
                            var0 = var0.bind(var1)(var2);
                        case 57:
                            var0 = undefined;
                            return var0;
                    }
                };
                var36 = {};
                var38 = var5[var12];
                var38 = var9.bind(var4)(var38);
                var38 = var38.runOnJS;
                var36.runOnJS = var38;
                var36.setIsActivityFocused = var37;
                var8.__closure = var36;
                var36 = 12291590020155.0;
                var8.__workletHash = var36;
                var36 = _closure1_slot21;
                var8.__initData = var36;
                var8 = var30.bind(var34)(var26, var8);
                var34 = _closure1_slot4;
                var30 = var34.useMemo;
                var26 = function() { // Environment: var3
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 28;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var1 = var0.Gesture;
                    var0 = var1.Tap;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var8 = new Array(0);
                var8 = var30.bind(var34)(var26, var8);
                var34 = _closure1_slot4;
                var30 = var34.useCallback;
                var26 = new Array(2);
                var26[0] = var33;
                var26[1] = var22;
                var22 = function(arg0, arg1, arg2) { // Environment: var3
                    _fun111319: for (var _fun111319_ip = 0;;) switch (_fun111319_ip) {
                        case 0:
                            var1 = arg1;
                            var0 = arg2;
                            if (var0) {
                                _fun111319_ip = 41;
                                continue _fun111319
                            }
                        case 9:
                            var4 = _closure2_slot5;
                            var3 = var4.setTargetAspectRatio;
                            var2 = _closure2_slot0;
                            var0 = 'square';
                            var0 = var3.bind(var4)(var2, var0);
                            _fun111319_ip = 191;
                            continue _fun111319;
                        case 41:
                            var2 = _closure1_slot14;
                            var2 = var2.LANDSCAPE;
                            if (!(var2 !== var1)) {
                                _fun111319_ip = 164;
                                continue _fun111319
                            }
                        case 58:
                            var2 = _closure1_slot14;
                            var2 = var2.PORTRAIT;
                            if (!(var2 !== var1)) {
                                _fun111319_ip = 133;
                                continue _fun111319
                            }
                        case 72:
                            var0 = _closure1_slot14;
                            var0 = var0.UNLOCKED;
                            if (!(var0 !== var1)) {
                                _fun111319_ip = 92;
                                continue _fun111319
                            }
                        case 86:
                            var0 = null;
                            if (!(var0 === var1)) {
                                _fun111319_ip = 191;
                                continue _fun111319
                            }
                        case 92:
                            var3 = _closure2_slot5;
                            var2 = var3.setTargetAspectRatio;
                            var1 = _closure2_slot0;
                            var0 = 'portrait';
                            var4 = arg0;
                            if (!var4) {
                                _fun111319_ip = 125;
                                continue _fun111319
                            }
                        case 121:
                            var0 = 'landscape';
                        case 125:
                            var0 = var2.bind(var3)(var1, var0);
                            _fun111319_ip = 191;
                            continue _fun111319;
                        case 133:
                            var3 = _closure2_slot5;
                            var2 = var3.setTargetAspectRatio;
                            var1 = _closure2_slot0;
                            var0 = 'portrait';
                            var0 = var2.bind(var3)(var1, var0);
                            _fun111319_ip = 191;
                            continue _fun111319;
                        case 164:
                            var3 = _closure2_slot5;
                            var2 = var3.setTargetAspectRatio;
                            var1 = _closure2_slot0;
                            var0 = 'landscape';
                            var0 = var2.bind(var3)(var1, var0);
                        case 191:
                            var0 = undefined;
                            return var0;
                    }
                };
                var36 = var30.bind(var34)(var22, var26);
                _closure2_slot21 = var36;
                var34 = _closure1_slot4;
                var30 = var34.useLayoutEffect;
                var26 = new Array(4);
                var26[0] = var36;
                var26[1] = var31;
                var26[2] = var35;
                var26[3] = var2;
                var22 = function() { // Environment: var3
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 29;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getWindowDimensions;
                    var1 = var1.bind(var2)();
                    var2 = var1.width;
                    var1 = var1.height;
                    var4 = var2 > var1;
                    var3 = _closure2_slot21;
                    var2 = _closure2_slot14;
                    var1 = _closure2_slot16;
                    var1 = var3.bind(var0)(var4, var2, var1);
                    return var0;
                };
                var22 = var30.bind(var34)(var22, var26);
                var30 = _closure1_slot4;
                var26 = var30.useState;
                var22 = var33.getDefaultTargetDimensions;
                var22 = var22.bind(var33)();
                var26 = var26.bind(var30)(var22);
                var22 = _closure1_slot3;
                var26 = var22.bind(var4)(var26, var28);
                var22 = var26[var16];
                var26 = var26[var27];
                _closure2_slot22 = var26;
                var30 = _closure1_slot4;
                var28 = var30.useCallback;
                var27 = new Array(2);
                var27[0] = var33;
                var27[1] = var26;
                var26 = function() { // Environment: var3
                    var2 = _closure2_slot22;
                    var1 = _closure2_slot5;
                    var0 = var1.getDefaultTargetDimensions;
                    var1 = var0.bind(var1)();
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var34 = var28.bind(var30)(var26, var27);
                _closure2_slot23 = var34;
                var26 = var5[var12];
                var30 = var9.bind(var4)(var26);
                var28 = var30.useAnimatedReaction;
                var27 = function() {
                    var1 = _closure2_slot7;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var26 = {};
                var26.windowDimensions = var31;
                var27.__closure = var26;
                var26 = 12220613662042.0;
                var27.__workletHash = var26;
                var26 = _closure1_slot22;
                var27.__initData = var26;
                var26 = function arg0, arg1() {
                    _fun111323: for (var _fun111323_ip = 0;;) switch (_fun111323_ip) {
                        case 0:
                            var2 = arg0;
                            var4 = arg1;
                            var3 = var2.landscape;
                            var0 = null;
                            var5 = var0 == var4;
                            var0 = undefined;
                            var1 = undefined;
                            if (var5) {
                                _fun111323_ip = 31;
                                continue _fun111323
                            }
                        case 25:
                            var1 = var4.landscape;
                        case 31:
                            if (!(var3 !== var1)) {
                                _fun111323_ip = 96;
                                continue _fun111323
                            }
                        case 35:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 26;
                            var1 = var4[var1];
                            var5 = var3.bind(var0)(var1);
                            var4 = var5.runOnJS;
                            var3 = _closure2_slot21;
                            var4 = var4.bind(var5)(var3);
                            var3 = var2.landscape;
                            var2 = _closure2_slot14;
                            var1 = _closure2_slot16;
                            var1 = var4.bind(var0)(var3, var2, var1);
                        case 96:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 26;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.runOnJS;
                            var1 = _closure2_slot23;
                            var1 = var2.bind(var3)(var1);
                            var1 = var1.bind(var0)();
                            return var0;
                    }
                };
                var33 = {};
                var37 = var5[var12];
                var37 = var9.bind(var4)(var37);
                var37 = var37.runOnJS;
                var33.runOnJS = var37;
                var33.handleTargetAspectRatioParams = var36;
                var33.gridOrientationLockState = var35;
                var33.hasJoined = var2;
                var33.updateNotJoinedActivityDimensions = var34;
                var26.__closure = var33;
                var33 = 13125606009235.0;
                var26.__workletHash = var33;
                var33 = _closure1_slot23;
                var26.__initData = var33;
                var26 = var28.bind(var30)(var27, var26);
                var26 = 30;
                var26 = var5[var26];
                var27 = var9.bind(var4)(var26);
                var26 = var27.isIpadOS;
                var30 = var26.bind(var27)();
                _closure2_slot24 = var30;
                var18 = var18.activityContainerBackground;
                var28 = var18.backgroundColor;
                _closure2_slot25 = var28;
                var12 = var5[var12];
                var26 = var9.bind(var4)(var12);
                var18 = var26.useAnimatedStyle;
                var12 = function() {
                    _fun111324: for (var _fun111324_ip = 0;;) switch (_fun111324_ip) {
                        case 0:
                            var1 = _closure1_slot8;
                            var3 = 0;
                            if (!var1) {
                                _fun111324_ip = 28;
                                continue _fun111324
                            }
                        case 12:
                            var2 = _closure2_slot10;
                            var1 = var2.get;
                            var3 = var1.bind(var2)();
                        case 28:
                            var2 = _closure2_slot7;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            var5 = var1.landscape;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            var6 = var1.width;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            var2 = var1.height;
                            var1 = _closure2_slot24;
                            if (!var1) {
                                _fun111324_ip = 103;
                                continue _fun111324
                            }
                        case 85:
                            var9 = _closure2_slot15;
                            var7 = _closure1_slot14;
                            var7 = var7.LANDSCAPE;
                            var1 = var9 === var7;
                        case 103:
                            if (!var1) {
                                _fun111324_ip = 109;
                                continue _fun111324
                            }
                        case 106:
                            var1 = !var5;
                        case 109:
                            var7 = _closure2_slot24;
                            if (!var7) {
                                _fun111324_ip = 134;
                                continue _fun111324
                            }
                        case 116:
                            var10 = _closure2_slot15;
                            var9 = _closure1_slot14;
                            var9 = var9.PORTRAIT;
                            var7 = var10 === var9;
                        case 134:
                            if (!var7) {
                                _fun111324_ip = 140;
                                continue _fun111324
                            }
                        case 137:
                            var7 = var5;
                        case 140:
                            if (var1) {
                                _fun111324_ip = 173;
                                continue _fun111324
                            }
                        case 143:
                            var5 = 0;
                            var1 = 0;
                            if (!var7) {
                                _fun111324_ip = 194;
                                continue _fun111324
                            }
                        case 150:
                            var7 = _closure1_slot12;
                            var7 = var2 * var7;
                            var9 = var6 - var7;
                            var7 = 2;
                            var1 = var9 / var7;
                            var5 = 0;
                            _fun111324_ip = 194;
                            continue _fun111324;
                        case 173:
                            var0 = _closure1_slot12;
                            var0 = var6 * var0;
                            var7 = var2 - var0;
                            var0 = 2;
                            var5 = var7 / var0;
                            var1 = 0;
                        case 194:
                            var0 = {};
                            var9 = _closure2_slot18;
                            var7 = 1;
                            if (!var9) {
                                _fun111324_ip = 208;
                                continue _fun111324
                            }
                        case 206:
                            var7 = 0;
                        case 208:
                            var0.flex = var7;
                            var7 = _closure2_slot25;
                            var0.backgroundColor = var7;
                            var0.paddingVertical = var5;
                            var0.paddingHorizontal = var1;
                            var7 = _closure2_slot18;
                            var1 = 'auto';
                            var5 = var1;
                            if (!var7) {
                                _fun111324_ip = 246;
                                continue _fun111324
                            }
                        case 243:
                            var5 = var6;
                        case 246:
                            var0.width = var5;
                            var4 = _closure2_slot18;
                            if (!var4) {
                                _fun111324_ip = 261;
                                continue _fun111324
                            }
                        case 257:
                            var1 = var2 - var3;
                        case 261:
                            var0.height = var1;
                            return var0;
                    }
                };
                var27 = {};
                var33 = _closure1_slot8;
                var27.IS_IOS = var33;
                var27.animatedKeyboardHeight = var32;
                var27.windowDimensions = var31;
                var27.isDeviceTablet = var30;
                var27.focusedOrientationLockState = var29;
                var29 = _closure1_slot14;
                var27.OrientationLockState = var29;
                var29 = _closure1_slot12;
                var27.ACTIVITY_PORTRAIT_ASPECT_RATIO = var29;
                var27.isActivityFocused = var15;
                var27.backgroundColor = var28;
                var12.__closure = var27;
                var27 = 12336978466960.0;
                var12.__workletHash = var27;
                var27 = _closure1_slot24;
                var12.__initData = var27;
                var12 = var18.bind(var26)(var12);
                var5 = var5[var14];
                var18 = var9.bind(var4)(var5);
                var14 = var18.useStateFromStores;
                var5 = _closure1_slot6;
                var9 = new Array(1);
                var9[0] = var5;
                var5 = function() { // Environment: var3
                    var1 = _closure1_slot6;
                    var0 = var1.getShowActivitiesDebugOverlay;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var14 = var14.bind(var18)(var9, var5);
                var18 = _closure1_slot4;
                var9 = var18.useMemo;
                var5 = new Array(3);
                var5[0] = var21;
                var5[1] = var15;
                var5[2] = var20;
                var3 = function() { // Environment: var3
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var0 = 28;
                    var0 = var9[var0];
                    var7 = undefined;
                    var0 = var8.bind(var7)(var0);
                    var1 = var0.Gesture;
                    var0 = var1.Manual;
                    var2 = var0.bind(var1)();
                    var1 = var2.enabled;
                    var0 = _closure2_slot18;
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.onTouchesDown;
                    var0 = function arg0, arg1() {
                        _fun111327: for (var _fun111327_ip = 0;;) switch (_fun111327_ip) {
                            case 0:
                                var1 = arg1;
                                var0 = var1.fail;
                                var0 = var0.bind(var1)();
                                var2 = _closure2_slot9;
                                var1 = var2.get;
                                var1 = var1.bind(var2)();
                                var3 = var1.mode;
                                var2 = _closure1_slot10;
                                var2 = var2.HIDDEN;
                                if (!(var3 !== var2)) {
                                    _fun111327_ip = 101;
                                    continue _fun111327
                                }
                            case 51:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 26;
                                var1 = var2[var1];
                                var2 = undefined;
                                var3 = var3.bind(var2)(var1);
                                var1 = var3.runOnJS;
                                var0 = _closure2_slot8;
                                var1 = var1.bind(var3)(var0);
                                var0 = {};
                                var3 = true;
                                var0.debounce = var3;
                                var0 = var1.bind(var2)(var0);
                            case 101:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var4 = {};
                    var6 = _closure2_slot9;
                    var4.controlsSpecs = var6;
                    var6 = _closure1_slot10;
                    var4.VoicePanelControlsModes = var6;
                    var6 = 26;
                    var6 = var9[var6];
                    var6 = var8.bind(var7)(var6);
                    var6 = var6.runOnJS;
                    var4.runOnJS = var6;
                    var5 = _closure2_slot8;
                    var4.hideControls = var5;
                    var0.__closure = var4;
                    var4 = 14924492513532.0;
                    var0.__workletHash = var4;
                    var3 = _closure1_slot25;
                    var0.__initData = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var9 = var9.bind(var18)(var3, var5);
                if (!(var0 != var19)) {
                    _fun111303_ip = 2271;
                    continue _fun111303
                }
            case 1825:
                var3 = _closure1_slot13;
                if (var15) {
                    _fun111303_ip = 1840;
                    continue _fun111303
                }
            case 1832:
                var18 = var3.GRID;
                _fun111303_ip = 1846;
                continue _fun111303;
            case 1840:
                var18 = var3.FOCUSED;
            case 1846:
                if (var2) {
                    _fun111303_ip = 2019;
                    continue _fun111303
                }
            case 1852:
                if (!(var0 != var24)) {
                    _fun111303_ip = 1973;
                    continue _fun111303
                }
            case 1856:
                var5 = _closure1_slot15;
                var3 = _closure1_slot0;
                var26 = _closure1_slot2;
                var2 = 28;
                var2 = var26[var2];
                var2 = var3.bind(var4)(var2);
                var3 = var2.GestureDetector;
                var2 = {};
                var2.gesture = var8;
                var21 = _closure1_slot15;
                var20 = _closure1_slot1;
                var8 = 35;
                var8 = var26[var8];
                var20 = var20.bind(var4)(var8);
                var8 = {};
                var8.context = var25;
                var25 = var19.guild_id;
                var8.guildId = var25;
                var8.activityItem = var24;
                var23 = var23.location;
                var8.locationObject = var23;
                var8.itemDimensions = var22;
                var22 = true;
                var8.disableBadges = var22;
                var8 = var21.bind(var4)(var20, var8);
                var2.children = var8;
                var5 = var5.bind(var4)(var3, var2);
                _fun111303_ip = 2014;
                continue _fun111303;
            case 1973:
                var8 = _closure1_slot15;
                var3 = _closure1_slot1;
                var20 = _closure1_slot2;
                var2 = 34;
                var2 = var20[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2.activity = var11;
                var2.application = var10;
                var5 = var8.bind(var4)(var3, var2);
            case 2014:
                _fun111303_ip = 2226;
                continue _fun111303;
            case 2019:
                var8 = _closure1_slot15;
                var3 = _closure1_slot0;
                var20 = _closure1_slot2;
                var2 = 28;
                var2 = var20[var2];
                var2 = var3.bind(var4)(var2);
                var3 = var2.GestureDetector;
                var2 = {};
                var2.gesture = var9;
                var11 = _closure1_slot16;
                var10 = _closure1_slot1;
                var9 = 31;
                var9 = var20[var9];
                var10 = var10.bind(var4)(var9);
                var9 = {};
                var9.layout = var13;
                var13 = 'none';
                if (!var15) {
                    _fun111303_ip = 2094;
                    continue _fun111303
                }
            case 2090:
                var13 = 'auto';
            case 2094:
                var9.pointerEvents = var13;
                var9.style = var12;
                var15 = _closure1_slot15;
                var13 = _closure1_slot1;
                var20 = _closure1_slot2;
                var12 = 32;
                var12 = var20[var12];
                var13 = var13.bind(var4)(var12);
                var12 = {};
                var12.channel = var19;
                var12.layoutMode = var18;
                var18 = var17 > var16;
                var16 = 0;
                if (!var18) {
                    _fun111303_ip = 2150;
                    continue _fun111303
                }
            case 2147:
                var16 = var17;
            case 2150:
                var13 = var15.bind(var4)(var13, var12, var16);
                var12 = new Array(2);
                var12[0] = var13;
                var13 = null;
                if (!var14) {
                    _fun111303_ip = 2202;
                    continue _fun111303
                }
            case 2170:
                var16 = _closure1_slot15;
                var15 = _closure1_slot1;
                var17 = _closure1_slot2;
                var14 = 33;
                var14 = var17[var14];
                var15 = var15.bind(var4)(var14);
                var14 = {};
                var13 = var16.bind(var4)(var15, var14);
            case 2202:
                var12[1] = var13;
                var9.children = var12;
                var9 = var11.bind(var4)(var10, var9);
                var2.children = var9;
                var5 = var8.bind(var4)(var3, var2);
            case 2226:
                var3 = _closure1_slot15;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var2.bind(var4)(var1);
                var2 = var1.AnalyticsLocationProvider;
                var1 = {};
                var1.value = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 2271:
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var14.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var10 = 1;
    var6 = var5[var10];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var14.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var14.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var14.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.IS_IOS;
    var _closure1_slot8 = var7;
    var3 = var3.VoicePanelModes;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VoicePanelControlsModes;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var11 = var3.VOICE_PANEL_CARD_INNER_PADDING;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var12 = var3.Fonts;
    var3 = var3.ThemeTypes;
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ACTIVITY_PORTRAIT_ASPECT_RATIO;
    var _closure1_slot12 = var7;
    var7 = var3.ActivityLayoutMode;
    var _closure1_slot13 = var7;
    var3 = var3.OrientationLockState;
    var _closure1_slot14 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot15 = var7;
    var3 = var3.jsxs;
    var _closure1_slot16 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AvatarSizes;
    var16 = var3.XSMALL;
    var3 = 12;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var13 = 13;
    var15 = var5[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_SURFACE_HIGH;
    var9.backgroundColor = var15;
    var3.activityContainerBackground = var9;
    var9 = {};
    var15 = 14;
    var15 = var5[var15];
    var15 = var4.bind(var0)(var15);
    var15 = var15.AVATAR_SIZE_MAP;
    var15 = var15[var16];
    var9.height = var15;
    var15 = var5[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_MOD_NORMAL;
    var9.backgroundColor = var15;
    var3.overflow = var9;
    var9 = {
        'fontSize': 16,
        'lineHeight': 24,
        'color': null,
        'fontFamily': null,
        'textAlign': 'center',
        'marginLeft': 16,
        'marginRight': 16
    };
    var13 = var5[var13];
    var13 = var14.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_DEFAULT;
    var9.color = var13;
    var12 = var12.DISPLAY_EXTRABOLD;
    var9.fontFamily = var12;
    var3.titleText = var9;
    var9 = {};
    var12 = 'absolute';
    var9.position = var12;
    var9.top = var11;
    var9.left = var11;
    var9.zIndex = var10;
    var3.closeButton = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot17 = var3;
    var3 = {};
    var7 = 'function VoicePanelAnimatedActivityCardTsx1(){const{sharedVisible,mode}=this.__closure;return{visible:sharedVisible.get(),mode:mode.get()};}';
    var3.code = var7;
    var _closure1_slot18 = var3;
    var3 = {};
    var7 = 'function VoicePanelAnimatedActivityCardTsx2({visible:visible,mode:mode},prev){const{VoicePanelModes,runOnJS,incrementActivityKey}=this.__closure;if(visible===1&&prev!=null&&prev.visible===0||mode!==VoicePanelModes.PIP&&(prev===null||prev===void 0?void 0:prev.mode)===VoicePanelModes.PIP){runOnJS(incrementActivityKey)();}}';
    var3.code = var7;
    var _closure1_slot19 = var3;
    var3 = {};
    var7 = 'function VoicePanelAnimatedActivityCardTsx3(){const{activityParticipantId,focused,mode,VoicePanelModes}=this.__closure;var _focused$get;return activityParticipantId!=null&&((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===activityParticipantId&&mode.get()===VoicePanelModes.PANEL;}';
    var3.code = var7;
    var _closure1_slot20 = var3;
    var3 = {};
    var7 = 'function VoicePanelAnimatedActivityCardTsx4(isActivityFocused,wasActivityFocused){const{runOnJS,setIsActivityFocused}=this.__closure;if(isActivityFocused!==wasActivityFocused){runOnJS(setIsActivityFocused)(isActivityFocused);}}';
    var3.code = var7;
    var _closure1_slot21 = var3;
    var3 = {};
    var7 = 'function VoicePanelAnimatedActivityCardTsx5(){const{windowDimensions}=this.__closure;return windowDimensions.get();}';
    var3.code = var7;
    var _closure1_slot22 = var3;
    var3 = {};
    var7 = 'function VoicePanelAnimatedActivityCardTsx6(windowDimensionsValue,prevWindowDimensionsValue){const{runOnJS,handleTargetAspectRatioParams,gridOrientationLockState,hasJoined,updateNotJoinedActivityDimensions}=this.__closure;if(windowDimensionsValue.landscape!==(prevWindowDimensionsValue===null||prevWindowDimensionsValue===void 0?void 0:prevWindowDimensionsValue.landscape)){runOnJS(handleTargetAspectRatioParams)(windowDimensionsValue.landscape,gridOrientationLockState,hasJoined);}runOnJS(updateNotJoinedActivityDimensions)();}';
    var3.code = var7;
    var _closure1_slot23 = var3;
    var3 = {};
    var7 = "function VoicePanelAnimatedActivityCardTsx7(){const{IS_IOS,animatedKeyboardHeight,windowDimensions,isDeviceTablet,focusedOrientationLockState,OrientationLockState,ACTIVITY_PORTRAIT_ASPECT_RATIO,isActivityFocused,backgroundColor}=this.__closure;const keyboardHeight=IS_IOS?animatedKeyboardHeight.get():0;const isScreenLandscape=windowDimensions.get().landscape;const screenWidth=windowDimensions.get().width;const screenHeight=windowDimensions.get().height;const shouldLetterBox=isDeviceTablet&&focusedOrientationLockState===OrientationLockState.LANDSCAPE&&!isScreenLandscape;const shouldPillarBox=isDeviceTablet&&focusedOrientationLockState===OrientationLockState.PORTRAIT&&isScreenLandscape;let containerPaddingVertical=0;let containerPaddingHorizontal=0;if(shouldLetterBox){containerPaddingVertical=(screenHeight-screenWidth*ACTIVITY_PORTRAIT_ASPECT_RATIO)/2;}else if(shouldPillarBox){containerPaddingHorizontal=(screenWidth-screenHeight*ACTIVITY_PORTRAIT_ASPECT_RATIO)/2;}return{flex:isActivityFocused?0:1,backgroundColor:backgroundColor,paddingVertical:containerPaddingVertical,paddingHorizontal:containerPaddingHorizontal,width:isActivityFocused?screenWidth:'auto',height:isActivityFocused?screenHeight-keyboardHeight:'auto'};}";
    var3.code = var7;
    var _closure1_slot24 = var3;
    var3 = {};
    var7 = 'function VoicePanelAnimatedActivityCardTsx8(event,manager){const{controlsSpecs,VoicePanelControlsModes,runOnJS,hideControls}=this.__closure;manager.fail();if(controlsSpecs.get().mode!==VoicePanelControlsModes.HIDDEN){runOnJS(hideControls)({debounce:true});}}';
    var3.code = var7;
    var _closure1_slot25 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        var3 = _closure1_slot15;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 36;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.ThemeContextProvider;
        var0 = {};
        var5 = _closure1_slot11;
        var5 = var5.DARK;
        var0.theme = var5;
        var6 = _closure1_slot15;
        var5 = _closure1_slot26;
        var4 = {};
        var8 = arg0;
        var9 = var4;
        var7 = copyDataProperties(var9, var8);
        var4 = var6.bind(var2)(var5, var4);
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 37;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/card/VoicePanelAnimatedActivityCard.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1371, 7895, 1372, 11816, 11814, 11819, 660, 3457, 33, 5452, 1297, 671, 5454, 11815, 14152, 566, 14316, 7912, 6879, 8052, 5726, 5579, 8042, 12605, 3720, 3953, 4961, 1464, 1309, 6458, 8055, 8722, 14317, 14321, 3159, 2]);