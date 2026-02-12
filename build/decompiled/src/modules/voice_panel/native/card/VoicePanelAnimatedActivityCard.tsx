// modules/voice_panel/native/card/VoicePanelAnimatedActivityCard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun111957: for (var _fun111957_ip = 0;;) switch (_fun111957_ip) {
            case 0:
                var0 = arg0;
                var21 = var0.applicationId;
                var _closure2_slot0 = var21;
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
                var14 = var0.bind(var4)();
                var5 = _closure1_slot4;
                var3 = var5.useState;
                var0 = -1;
                var3 = var3.bind(var5)(var0);
                var0 = _closure1_slot3;
                var28 = 2;
                var0 = var0.bind(var4)(var3, var28);
                var16 = 0;
                var17 = var0[var16];
                var27 = 1;
                var0 = var0[var27];
                var _closure2_slot2 = var0;
                var7 = _closure1_slot4;
                var6 = var7.useContext;
                var5 = _closure1_slot1;
                var0 = _closure1_slot2;
                var3 = 13;
                var3 = var0[var3];
                var3 = var5.bind(var4)(var3);
                var3 = var6.bind(var7)(var3);
                var6 = var3.channelId;
                var _closure2_slot3 = var6;
                var38 = var3.focused;
                var _closure2_slot4 = var38;
                var33 = var3.layoutManager;
                var _closure2_slot5 = var33;
                var36 = var3.mode;
                var _closure2_slot6 = var36;
                var31 = var3.windowDimensions;
                var _closure2_slot7 = var31;
                var18 = var3.hideControls;
                var _closure2_slot8 = var18;
                var25 = var3.controlsSpecs;
                var _closure2_slot9 = var25;
                var3 = 14;
                var3 = var0[var3];
                var3 = var5.bind(var4)(var3);
                var32 = var3.bind(var4)();
                var _closure2_slot10 = var32;
                var3 = _closure1_slot0;
                var9 = 15;
                var0 = var0[var9];
                var6 = var3.bind(var4)(var0);
                var5 = var6.useStateFromStores;
                var0 = _closure1_slot7;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var2
                    var2 = _closure1_slot7;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var19 = var5.bind(var6)(var3, var0);
                var _closure2_slot11 = var19;
                var6 = _closure1_slot4;
                var5 = var6.useMemo;
                var3 = new Array(1);
                var3[0] = var19;
                var0 = function() { // Environment: var2
                    var0 = {};
                    var1 = _closure2_slot11;
                    var0.channel = var1;
                    var1 = 'channel';
                    var0.type = var1;
                    return var0;
                };
                var24 = var5.bind(var6)(var0, var3);
                var0 = null;
                var5 = var0 == var19;
                var3 = undefined;
                if (var5) {
                    _fun111957_ip = 368;
                    continue _fun111957
                }
            case 363:
                var3 = var19.guild_id;
            case 368:
                _closure2_slot12 = var3;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 16;
                var5 = var7[var5];
                var7 = var6.bind(var4)(var5);
                var6 = var7.useActivityShelfItemData;
                var5 = var0 == var19;
                var8 = undefined;
                if (var5) {
                    _fun111957_ip = 412;
                    continue _fun111957
                }
            case 407:
                var8 = var19.guild_id;
            case 412:
                var10 = var0 != var8;
                var5 = null;
                if (!var10) {
                    _fun111957_ip = 424;
                    continue _fun111957
                }
            case 421:
                var5 = var8;
            case 424:
                var23 = var6.bind(var7)(var5, var21);
                var7 = _closure1_slot4;
                var6 = var7.useEffect;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = function() { // Environment: var2
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 17;
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
                var3 = var6.bind(var7)(var3, var5);
                var12 = _closure1_slot1;
                var10 = _closure1_slot2;
                var3 = 18;
                var3 = var10[var3];
                var5 = var12.bind(var4)(var3);
                var3 = new Array(1);
                var3[0] = var21;
                var5 = var5.bind(var4)(var3);
                var3 = _closure1_slot3;
                var3 = var3.bind(var4)(var5, var27);
                var11 = var3[var16];
                _closure2_slot13 = var11;
                var8 = _closure1_slot0;
                var3 = var10[var9];
                var15 = var8.bind(var4)(var3);
                var7 = var15.useStateFromStoresObject;
                var3 = _closure1_slot5;
                var6 = new Array(1);
                var6[0] = var3;
                var5 = new Array(1);
                var5[0] = var21;
                var3 = function() { // Environment: var2
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
                var3 = var7.bind(var15)(var6, var3, var5);
                var35 = var3.gridOrientationLockState;
                _closure2_slot14 = var35;
                var29 = var3.focusedOrientationLockState;
                _closure2_slot15 = var29;
                var3 = 19;
                var3 = var10[var3];
                var3 = var12.bind(var4)(var3);
                var5 = var3.bind(var4)();
                var3 = var10[var9];
                var15 = var8.bind(var4)(var3);
                var7 = var15.useStateFromStores;
                var3 = _closure1_slot5;
                var6 = new Array(1);
                var6[0] = var3;
                var3 = function() { // Environment: var2
                    _fun111962: for (var _fun111962_ip = 0;;) switch (_fun111962_ip) {
                        case 0:
                            var5 = _closure1_slot5;
                            var4 = var5.getEmbeddedActivitiesForChannel;
                            var0 = _closure2_slot3;
                            var5 = var4.bind(var5)(var0);
                            var4 = var5.find;
                            var0 = function(arg0) { // Environment: var1
                                _fun111963: for (var _fun111963_ip = 0;;) switch (_fun111963_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var1 = var0.applicationId;
                                        var3 = _closure2_slot13;
                                        var0 = null;
                                        var3 = var0 == var3;
                                        var0 = undefined;
                                        if (var3) {
                                            _fun111963_ip = 35;
                                            continue _fun111963
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
                                _fun111962_ip = 86;
                                continue _fun111962
                            }
                        case 50:
                            var4 = _closure1_slot5;
                            var3 = var4.getEmbeddedActivitiesForStartingChannel;
                            var2 = _closure2_slot3;
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.find;
                            var1 = function(arg0) { // Environment: var1
                                _fun111964: for (var _fun111964_ip = 0;;) switch (_fun111964_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var1 = var0.applicationId;
                                        var3 = _closure2_slot13;
                                        var0 = null;
                                        var3 = var0 == var3;
                                        var0 = undefined;
                                        if (var3) {
                                            _fun111964_ip = 35;
                                            continue _fun111964
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
                var20 = var7.bind(var15)(var6, var3);
                var7 = 20;
                var3 = var10[var7];
                var6 = var12.bind(var4)(var3);
                var3 = 21;
                var3 = var10[var3];
                var3 = var12.bind(var4)(var3);
                var3 = var3.ACTIVITY_TILE;
                var3 = var6.bind(var4)(var3);
                var6 = var3.analyticsLocations;
                var3 = 22;
                var3 = var10[var3];
                var8 = var8.bind(var4)(var3);
                var3 = var8.useAnalyticsContext;
                var22 = var3.bind(var8)();
                var3 = var0 != var5;
                if (!var3) {
                    _fun111957_ip = 732;
                    continue _fun111957
                }
            case 709:
                var8 = var5.id;
                var10 = var0 == var11;
                var5 = undefined;
                if (var10) {
                    _fun111957_ip = 728;
                    continue _fun111957
                }
            case 723:
                var5 = var11.id;
            case 728:
                var3 = var8 === var5;
            case 732:
                if (var3) {
                    _fun111957_ip = 780;
                    continue _fun111957
                }
            case 735:
                var8 = var0 == var20;
                var5 = undefined;
                if (var8) {
                    _fun111957_ip = 776;
                    continue _fun111957
                }
            case 744:
                var12 = var20.participants;
                var8 = var0 == var12;
                var5 = undefined;
                if (var8) {
                    _fun111957_ip = 776;
                    continue _fun111957
                }
            case 759:
                var10 = var12.find;
                var8 = function(arg0) { // Environment: var2
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 23;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.isActivityParticipantCurrentUserCurrentSession;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var10.bind(var12)(var8);
            case 776:
                var3 = var0 != var5;
            case 780:
                _closure2_slot16 = var3;
                var12 = _closure1_slot4;
                var10 = var12.useCallback;
                var8 = new Array(1);
                var8[0] = var3;
                var5 = function() { // Environment: var2
                    _fun111966: for (var _fun111966_ip = 0;;) switch (_fun111966_ip) {
                        case 0:
                            var1 = _closure2_slot16;
                            if (!var1) {
                                _fun111966_ip = 30;
                                continue _fun111966
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
                var30 = var10.bind(var12)(var5, var8);
                _closure2_slot17 = var30;
                var37 = _closure1_slot0;
                var34 = _closure1_slot2;
                var12 = 24;
                var5 = var34[var12];
                var15 = var37.bind(var4)(var5);
                var10 = var15.useAnimatedReaction;
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
                    _fun111969: for (var _fun111969_ip = 0;;) switch (_fun111969_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = arg1;
                            var1 = var0.visible;
                            var3 = var0.mode;
                            var0 = 1;
                            var0 = var0 === var1;
                            if (!var0) {
                                _fun111969_ip = 33;
                                continue _fun111969
                            }
                        case 27:
                            var1 = null;
                            var0 = var1 != var4;
                        case 33:
                            if (!var0) {
                                _fun111969_ip = 48;
                                continue _fun111969
                            }
                        case 36:
                            var2 = var4.visible;
                            var1 = 0;
                            var0 = var1 === var2;
                        case 48:
                            if (var0) {
                                _fun111969_ip = 104;
                                continue _fun111969
                            }
                        case 51:
                            var1 = _closure1_slot9;
                            var1 = var1.PIP;
                            var1 = var3 !== var1;
                            if (!var1) {
                                _fun111969_ip = 101;
                                continue _fun111969
                            }
                        case 71:
                            var3 = null;
                            var5 = var3 == var4;
                            var3 = undefined;
                            if (var5) {
                                _fun111969_ip = 87;
                                continue _fun111969
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
                                _fun111969_ip = 153;
                                continue _fun111969
                            }
                        case 107:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 24;
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
                var5 = var10.bind(var15)(var8, var5);
                var10 = _closure1_slot4;
                var8 = var10.useState;
                var5 = false;
                var8 = var8.bind(var10)(var5);
                var5 = _closure1_slot3;
                var5 = var5.bind(var4)(var8, var28);
                var15 = var5[var16];
                _closure2_slot18 = var15;
                var37 = var5[var27];
                _closure2_slot19 = var37;
                var5 = var0 != var20;
                var39 = null;
                if (!var5) {
                    _fun111957_ip = 1079;
                    continue _fun111957
                }
            case 1026:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 25;
                var5 = var10[var5];
                var10 = var8.bind(var4)(var5);
                var8 = var10.getEmbeddedActivityParticipantId;
                var5 = {};
                var26 = var20.applicationId;
                var5.applicationId = var26;
                var26 = var20.compositeInstanceId;
                var5.instanceId = var26;
                var39 = var8.bind(var10)(var5);
            case 1079:
                _closure2_slot20 = var39;
                var8 = _closure1_slot0;
                var5 = _closure1_slot2;
                var10 = var5[var12];
                var34 = var8.bind(var4)(var10);
                var30 = var34.useAnimatedReaction;
                var26 = function() {
                    _fun111970: for (var _fun111970_ip = 0;;) switch (_fun111970_ip) {
                        case 0:
                            var0 = _closure2_slot20;
                            var3 = null;
                            var0 = var3 != var0;
                            if (!var0) {
                                _fun111970_ip = 51;
                                continue _fun111970
                            }
                        case 16:
                            var4 = _closure2_slot4;
                            var2 = var4.get;
                            var2 = var2.bind(var4)();
                            var4 = var3 == var2;
                            var3 = undefined;
                            if (var4) {
                                _fun111970_ip = 43;
                                continue _fun111970
                            }
                        case 38:
                            var3 = var2.id;
                        case 43:
                            var2 = _closure2_slot20;
                            var0 = var3 === var2;
                        case 51:
                            if (!var0) {
                                _fun111970_ip = 84;
                                continue _fun111970
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
                var10 = {};
                var10.activityParticipantId = var39;
                var10.focused = var38;
                var10.mode = var36;
                var36 = _closure1_slot9;
                var10.VoicePanelModes = var36;
                var26.__closure = var10;
                var10 = 2833167890519.0;
                var26.__workletHash = var10;
                var10 = _closure1_slot20;
                var26.__initData = var10;
                var10 = function arg0, arg1() {
                    _fun111971: for (var _fun111971_ip = 0;;) switch (_fun111971_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = arg1;
                            if (!(var2 !== var0)) {
                                _fun111971_ip = 57;
                                continue _fun111971
                            }
                        case 10:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 24;
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
                var38 = var8.bind(var4)(var38);
                var38 = var38.runOnJS;
                var36.runOnJS = var38;
                var36.setIsActivityFocused = var37;
                var10.__closure = var36;
                var36 = 12291590020155.0;
                var10.__workletHash = var36;
                var36 = _closure1_slot21;
                var10.__initData = var36;
                var10 = var30.bind(var34)(var26, var10);
                var34 = _closure1_slot4;
                var30 = var34.useMemo;
                var26 = function() { // Environment: var2
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 26;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var1 = var0.Gesture;
                    var0 = var1.Tap;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var10 = new Array(0);
                var10 = var30.bind(var34)(var26, var10);
                var34 = _closure1_slot4;
                var30 = var34.useCallback;
                var26 = new Array(2);
                var26[0] = var33;
                var26[1] = var21;
                var21 = function(arg0, arg1, arg2) { // Environment: var2
                    _fun111973: for (var _fun111973_ip = 0;;) switch (_fun111973_ip) {
                        case 0:
                            var1 = arg1;
                            var0 = arg2;
                            if (var0) {
                                _fun111973_ip = 41;
                                continue _fun111973
                            }
                        case 9:
                            var4 = _closure2_slot5;
                            var3 = var4.setTargetAspectRatio;
                            var2 = _closure2_slot0;
                            var0 = 'square';
                            var0 = var3.bind(var4)(var2, var0);
                            _fun111973_ip = 191;
                            continue _fun111973;
                        case 41:
                            var2 = _closure1_slot14;
                            var2 = var2.LANDSCAPE;
                            if (!(var2 !== var1)) {
                                _fun111973_ip = 164;
                                continue _fun111973
                            }
                        case 58:
                            var2 = _closure1_slot14;
                            var2 = var2.PORTRAIT;
                            if (!(var2 !== var1)) {
                                _fun111973_ip = 133;
                                continue _fun111973
                            }
                        case 72:
                            var0 = _closure1_slot14;
                            var0 = var0.UNLOCKED;
                            if (!(var0 !== var1)) {
                                _fun111973_ip = 92;
                                continue _fun111973
                            }
                        case 86:
                            var0 = null;
                            if (!(var0 === var1)) {
                                _fun111973_ip = 191;
                                continue _fun111973
                            }
                        case 92:
                            var3 = _closure2_slot5;
                            var2 = var3.setTargetAspectRatio;
                            var1 = _closure2_slot0;
                            var0 = 'portrait';
                            var4 = arg0;
                            if (!var4) {
                                _fun111973_ip = 125;
                                continue _fun111973
                            }
                        case 121:
                            var0 = 'landscape';
                        case 125:
                            var0 = var2.bind(var3)(var1, var0);
                            _fun111973_ip = 191;
                            continue _fun111973;
                        case 133:
                            var3 = _closure2_slot5;
                            var2 = var3.setTargetAspectRatio;
                            var1 = _closure2_slot0;
                            var0 = 'portrait';
                            var0 = var2.bind(var3)(var1, var0);
                            _fun111973_ip = 191;
                            continue _fun111973;
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
                var36 = var30.bind(var34)(var21, var26);
                _closure2_slot21 = var36;
                var34 = _closure1_slot4;
                var30 = var34.useLayoutEffect;
                var26 = new Array(4);
                var26[0] = var36;
                var26[1] = var31;
                var26[2] = var35;
                var26[3] = var3;
                var21 = function() { // Environment: var2
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 27;
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
                var21 = var30.bind(var34)(var21, var26);
                var30 = _closure1_slot4;
                var26 = var30.useState;
                var21 = var33.getDefaultTargetDimensions;
                var21 = var21.bind(var33)();
                var26 = var26.bind(var30)(var21);
                var21 = _closure1_slot3;
                var26 = var21.bind(var4)(var26, var28);
                var21 = var26[var16];
                var26 = var26[var27];
                _closure2_slot22 = var26;
                var30 = _closure1_slot4;
                var28 = var30.useCallback;
                var27 = new Array(2);
                var27[0] = var33;
                var27[1] = var26;
                var26 = function() { // Environment: var2
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
                var30 = var8.bind(var4)(var26);
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
                    _fun111977: for (var _fun111977_ip = 0;;) switch (_fun111977_ip) {
                        case 0:
                            var2 = arg0;
                            var4 = arg1;
                            var3 = var2.landscape;
                            var0 = null;
                            var5 = var0 == var4;
                            var0 = undefined;
                            var1 = undefined;
                            if (var5) {
                                _fun111977_ip = 31;
                                continue _fun111977
                            }
                        case 25:
                            var1 = var4.landscape;
                        case 31:
                            if (!(var3 !== var1)) {
                                _fun111977_ip = 96;
                                continue _fun111977
                            }
                        case 35:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 24;
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
                            var1 = 24;
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
                var37 = var8.bind(var4)(var37);
                var37 = var37.runOnJS;
                var33.runOnJS = var37;
                var33.handleTargetAspectRatioParams = var36;
                var33.gridOrientationLockState = var35;
                var33.hasJoined = var3;
                var33.updateNotJoinedActivityDimensions = var34;
                var26.__closure = var33;
                var33 = 13125606009235.0;
                var26.__workletHash = var33;
                var33 = _closure1_slot23;
                var26.__initData = var33;
                var26 = var28.bind(var30)(var27, var26);
                var26 = 28;
                var26 = var5[var26];
                var27 = var8.bind(var4)(var26);
                var26 = var27.isIpadOS;
                var30 = var26.bind(var27)();
                _closure2_slot24 = var30;
                var14 = var14.activityContainerBackground;
                var28 = var14.backgroundColor;
                _closure2_slot25 = var28;
                var12 = var5[var12];
                var26 = var8.bind(var4)(var12);
                var14 = var26.useAnimatedStyle;
                var12 = function() {
                    _fun111978: for (var _fun111978_ip = 0;;) switch (_fun111978_ip) {
                        case 0:
                            var1 = _closure1_slot8;
                            var3 = 0;
                            if (!var1) {
                                _fun111978_ip = 28;
                                continue _fun111978
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
                                _fun111978_ip = 103;
                                continue _fun111978
                            }
                        case 85:
                            var9 = _closure2_slot15;
                            var7 = _closure1_slot14;
                            var7 = var7.LANDSCAPE;
                            var1 = var9 === var7;
                        case 103:
                            if (!var1) {
                                _fun111978_ip = 109;
                                continue _fun111978
                            }
                        case 106:
                            var1 = !var5;
                        case 109:
                            var7 = _closure2_slot24;
                            if (!var7) {
                                _fun111978_ip = 134;
                                continue _fun111978
                            }
                        case 116:
                            var10 = _closure2_slot15;
                            var9 = _closure1_slot14;
                            var9 = var9.PORTRAIT;
                            var7 = var10 === var9;
                        case 134:
                            if (!var7) {
                                _fun111978_ip = 140;
                                continue _fun111978
                            }
                        case 137:
                            var7 = var5;
                        case 140:
                            if (var1) {
                                _fun111978_ip = 173;
                                continue _fun111978
                            }
                        case 143:
                            var5 = 0;
                            var1 = 0;
                            if (!var7) {
                                _fun111978_ip = 194;
                                continue _fun111978
                            }
                        case 150:
                            var7 = _closure1_slot12;
                            var7 = var2 * var7;
                            var9 = var6 - var7;
                            var7 = 2;
                            var1 = var9 / var7;
                            var5 = 0;
                            _fun111978_ip = 194;
                            continue _fun111978;
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
                                _fun111978_ip = 208;
                                continue _fun111978
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
                                _fun111978_ip = 246;
                                continue _fun111978
                            }
                        case 243:
                            var5 = var6;
                        case 246:
                            var0.width = var5;
                            var4 = _closure2_slot18;
                            if (!var4) {
                                _fun111978_ip = 261;
                                continue _fun111978
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
                var12 = var14.bind(var26)(var12);
                var5 = var5[var9];
                var14 = var8.bind(var4)(var5);
                var9 = var14.useStateFromStores;
                var5 = _closure1_slot6;
                var8 = new Array(1);
                var8[0] = var5;
                var5 = function() { // Environment: var2
                    var1 = _closure1_slot6;
                    var0 = var1.getShowActivitiesDebugOverlay;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var14 = var9.bind(var14)(var8, var5);
                var9 = _closure1_slot4;
                var8 = var9.useMemo;
                var5 = new Array(3);
                var5[0] = var25;
                var5[1] = var15;
                var5[2] = var18;
                var2 = function() { // Environment: var2
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var0 = 26;
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
                        _fun111981: for (var _fun111981_ip = 0;;) switch (_fun111981_ip) {
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
                                    _fun111981_ip = 101;
                                    continue _fun111981
                                }
                            case 51:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 24;
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
                    var6 = 24;
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
                var9 = var8.bind(var9)(var2, var5);
                if (!(var0 != var19)) {
                    _fun111957_ip = 2244;
                    continue _fun111957
                }
            case 1825:
                var2 = _closure1_slot13;
                if (var15) {
                    _fun111957_ip = 1840;
                    continue _fun111957
                }
            case 1832:
                var18 = var2.GRID;
                _fun111957_ip = 1846;
                continue _fun111957;
            case 1840:
                var18 = var2.FOCUSED;
            case 1846:
                var8 = _closure1_slot15;
                var5 = _closure1_slot1;
                var25 = _closure1_slot2;
                var2 = 29;
                var2 = var25[var2];
                var5 = var5.bind(var4)(var2);
                var2 = {};
                var2.activity = var20;
                var2.application = var11;
                var2 = var8.bind(var4)(var5, var2);
                if (var3) {
                    _fun111957_ip = 2020;
                    continue _fun111957
                }
            case 1893:
                var5 = var2;
                if (!(var0 != var23)) {
                    _fun111957_ip = 2015;
                    continue _fun111957
                }
            case 1900:
                var8 = _closure1_slot15;
                var3 = _closure1_slot0;
                var25 = _closure1_slot2;
                var2 = 26;
                var2 = var25[var2];
                var2 = var3.bind(var4)(var2);
                var3 = var2.GestureDetector;
                var2 = {};
                var2.gesture = var10;
                var20 = _closure1_slot15;
                var11 = _closure1_slot1;
                var10 = 32;
                var10 = var25[var10];
                var11 = var11.bind(var4)(var10);
                var10 = {};
                var10.context = var24;
                var24 = var19.guild_id;
                var10.guildId = var24;
                var10.activityItem = var23;
                var22 = var22.location;
                var10.locationObject = var22;
                var10.itemDimensions = var21;
                var21 = true;
                var10.disableBadges = var21;
                var10 = var20.bind(var4)(var11, var10);
                var2.children = var10;
                var5 = var8.bind(var4)(var3, var2);
            case 2015:
                _fun111957_ip = 2199;
                continue _fun111957;
            case 2020:
                var8 = _closure1_slot15;
                var3 = _closure1_slot0;
                var20 = _closure1_slot2;
                var2 = 26;
                var2 = var20[var2];
                var2 = var3.bind(var4)(var2);
                var3 = var2.GestureDetector;
                var2 = {};
                var2.gesture = var9;
                var11 = _closure1_slot16;
                var10 = _closure1_slot1;
                var9 = 30;
                var9 = var20[var9];
                var10 = var10.bind(var4)(var9);
                var9 = {};
                var9.layout = var13;
                var13 = 'none';
                if (!var15) {
                    _fun111957_ip = 2095;
                    continue _fun111957
                }
            case 2091:
                var13 = 'auto';
            case 2095:
                var9.pointerEvents = var13;
                var9.style = var12;
                var15 = _closure1_slot15;
                var13 = _closure1_slot1;
                var20 = _closure1_slot2;
                var12 = 31;
                var12 = var20[var12];
                var13 = var13.bind(var4)(var12);
                var12 = {};
                var12.channel = var19;
                var12.layoutMode = var18;
                var18 = var17 > var16;
                var16 = 0;
                if (!var18) {
                    _fun111957_ip = 2151;
                    continue _fun111957
                }
            case 2148:
                var16 = var17;
            case 2151:
                var13 = var15.bind(var4)(var13, var12, var16);
                var12 = new Array(2);
                var12[0] = var13;
                var13 = null;
                if (!var14) {
                    _fun111957_ip = 2175;
                    continue _fun111957
                }
            case 2171:
                var13 = _closure1_slot26;
            case 2175:
                var12[1] = var13;
                var9.children = var12;
                var9 = var11.bind(var4)(var10, var9);
                var2.children = var9;
                var5 = var8.bind(var4)(var3, var2);
            case 2199:
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
            case 2244:
                return var0;
        }
    };
    var _closure1_slot27 = var0;
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
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.IS_IOS;
    var _closure1_slot8 = var8;
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
    var3 = var3.ThemeTypes;
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.ACTIVITY_PORTRAIT_ASPECT_RATIO;
    var _closure1_slot12 = var8;
    var8 = var3.ActivityLayoutMode;
    var _closure1_slot13 = var8;
    var3 = var3.OrientationLockState;
    var _closure1_slot14 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.jsx;
    var _closure1_slot15 = var8;
    var3 = var3.jsxs;
    var _closure1_slot16 = var3;
    var3 = 10;
    var3 = var5[var3];
    var10 = var4.bind(var0)(var3);
    var9 = var10.createStyles;
    var3 = {};
    var11 = {};
    var12 = 11;
    var12 = var5[var12];
    var12 = var7.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SURFACE_HIGH;
    var11.backgroundColor = var12;
    var3.activityContainerBackground = var11;
    var3 = var9.bind(var10)(var3);
    var _closure1_slot17 = var3;
    var3 = {};
    var9 = 'function VoicePanelAnimatedActivityCardTsx1(){const{sharedVisible,mode}=this.__closure;return{visible:sharedVisible.get(),mode:mode.get()};}';
    var3.code = var9;
    var _closure1_slot18 = var3;
    var3 = {};
    var9 = 'function VoicePanelAnimatedActivityCardTsx2({visible:visible,mode:mode},prev){const{VoicePanelModes,runOnJS,incrementActivityKey}=this.__closure;if(visible===1&&prev!=null&&prev.visible===0||mode!==VoicePanelModes.PIP&&(prev===null||prev===void 0?void 0:prev.mode)===VoicePanelModes.PIP){runOnJS(incrementActivityKey)();}}';
    var3.code = var9;
    var _closure1_slot19 = var3;
    var3 = {};
    var9 = 'function VoicePanelAnimatedActivityCardTsx3(){const{activityParticipantId,focused,mode,VoicePanelModes}=this.__closure;var _focused$get;return activityParticipantId!=null&&((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===activityParticipantId&&mode.get()===VoicePanelModes.PANEL;}';
    var3.code = var9;
    var _closure1_slot20 = var3;
    var3 = {};
    var9 = 'function VoicePanelAnimatedActivityCardTsx4(isActivityFocused,wasActivityFocused){const{runOnJS,setIsActivityFocused}=this.__closure;if(isActivityFocused!==wasActivityFocused){runOnJS(setIsActivityFocused)(isActivityFocused);}}';
    var3.code = var9;
    var _closure1_slot21 = var3;
    var3 = {};
    var9 = 'function VoicePanelAnimatedActivityCardTsx5(){const{windowDimensions}=this.__closure;return windowDimensions.get();}';
    var3.code = var9;
    var _closure1_slot22 = var3;
    var3 = {};
    var9 = 'function VoicePanelAnimatedActivityCardTsx6(windowDimensionsValue,prevWindowDimensionsValue){const{runOnJS,handleTargetAspectRatioParams,gridOrientationLockState,hasJoined,updateNotJoinedActivityDimensions}=this.__closure;if(windowDimensionsValue.landscape!==(prevWindowDimensionsValue===null||prevWindowDimensionsValue===void 0?void 0:prevWindowDimensionsValue.landscape)){runOnJS(handleTargetAspectRatioParams)(windowDimensionsValue.landscape,gridOrientationLockState,hasJoined);}runOnJS(updateNotJoinedActivityDimensions)();}';
    var3.code = var9;
    var _closure1_slot23 = var3;
    var3 = {};
    var9 = "function VoicePanelAnimatedActivityCardTsx7(){const{IS_IOS,animatedKeyboardHeight,windowDimensions,isDeviceTablet,focusedOrientationLockState,OrientationLockState,ACTIVITY_PORTRAIT_ASPECT_RATIO,isActivityFocused,backgroundColor}=this.__closure;const keyboardHeight=IS_IOS?animatedKeyboardHeight.get():0;const isScreenLandscape=windowDimensions.get().landscape;const screenWidth=windowDimensions.get().width;const screenHeight=windowDimensions.get().height;const shouldLetterBox=isDeviceTablet&&focusedOrientationLockState===OrientationLockState.LANDSCAPE&&!isScreenLandscape;const shouldPillarBox=isDeviceTablet&&focusedOrientationLockState===OrientationLockState.PORTRAIT&&isScreenLandscape;let containerPaddingVertical=0;let containerPaddingHorizontal=0;if(shouldLetterBox){containerPaddingVertical=(screenHeight-screenWidth*ACTIVITY_PORTRAIT_ASPECT_RATIO)/2;}else if(shouldPillarBox){containerPaddingHorizontal=(screenWidth-screenHeight*ACTIVITY_PORTRAIT_ASPECT_RATIO)/2;}return{flex:isActivityFocused?0:1,backgroundColor:backgroundColor,paddingVertical:containerPaddingVertical,paddingHorizontal:containerPaddingHorizontal,width:isActivityFocused?screenWidth:'auto',height:isActivityFocused?screenHeight-keyboardHeight:'auto'};}";
    var3.code = var9;
    var _closure1_slot24 = var3;
    var3 = {};
    var9 = 'function VoicePanelAnimatedActivityCardTsx8(event,manager){const{controlsSpecs,VoicePanelControlsModes,runOnJS,hideControls}=this.__closure;manager.fail();if(controlsSpecs.get().mode!==VoicePanelControlsModes.HIDDEN){runOnJS(hideControls)({debounce:true});}}';
    var3.code = var9;
    var _closure1_slot25 = var3;
    var3 = 12;
    var3 = var5[var3];
    var7 = var7.bind(var0)(var3);
    var3 = {};
    var3 = var8.bind(var0)(var7, var3);
    var _closure1_slot26 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        var3 = _closure1_slot15;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 33;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.ThemeContextProvider;
        var0 = {};
        var5 = _closure1_slot11;
        var5 = var5.DARK;
        var0.theme = var5;
        var6 = _closure1_slot15;
        var5 = _closure1_slot27;
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
    var3 = 34;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/card/VoicePanelAnimatedActivityCard.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1371, 7933, 1372, 9719, 9717, 660, 3454, 33, 1297, 671, 11903, 9718, 14213, 566, 14379, 7950, 6979, 8181, 5785, 5639, 8171, 12666, 3717, 3949, 4937, 1464, 1309, 14380, 6551, 8184, 14382, 3161, 2]);