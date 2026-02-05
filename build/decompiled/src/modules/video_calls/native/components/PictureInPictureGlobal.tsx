// modules/video_calls/native/components/PictureInPictureGlobal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
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
    var3 = var12.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var7 = var3.bind(var0)(var6);
    var _closure1_slot4 = var7;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var6 = var3.StyleSheet;
    var _closure1_slot6 = var6;
    var3 = var3.TouchableOpacity;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useBestActiveChatInputContainerHeight;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PictureInPicturePositions;
    var _closure1_slot13 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ParticipantTypes;
    var _closure1_slot14 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot15 = var6;
    var3 = var3.jsxs;
    var _closure1_slot16 = var3;
    var3 = 11;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var6 = var8.createStyles;
    var3 = {};
    var9 = 12;
    var10 = {
        'flex': 1,
        'marginLeft': 12,
        'marginRight': 12
    };
    var3.container = var10;
    var10 = var5[var9];
    var11 = var4.bind(var0)(var10);
    var10 = var11.generateBoxShadowStyle;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.EIGHT_DP_ELEVATION_SHADOW_PARAMS;
    var9 = var10.bind(var11)(var9);
    var3.elevationShadow = var9;
    var9 = {};
    var11 = 13;
    var10 = var5[var11];
    var10 = var12.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.sm;
    var9.borderRadius = var10;
    var10 = 'hidden';
    var9.overflow = var10;
    var3.pip = var9;
    var9 = {};
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BLACK;
    var9.backgroundColor = var13;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var9.borderRadius = var11;
    var9.overflow = var10;
    var3.background = var9;
    var3 = var6.bind(var8)(var3);
    var _closure1_slot17 = var3;
    var6 = var7.memo;
    var3 = function(arg0) { // Environment: var1
        _fun109666: for (var _fun109666_ip = 0;;) switch (_fun109666_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.channel;
                var _closure2_slot0 = var7;
                var3 = undefined;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var0 = _closure1_slot17;
                var17 = var0.bind(var3)();
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 14;
                var0 = var5[var0];
                var1 = var4.bind(var3)(var0);
                var0 = var7.id;
                var2 = var1.bind(var3)(var0);
                var9 = _closure1_slot0;
                var0 = 15;
                var1 = var5[var0];
                var12 = var9.bind(var3)(var1);
                var11 = var12.useStateFromStores;
                var1 = _closure1_slot9;
                var10 = new Array(2);
                var10[0] = var1;
                var8 = _closure1_slot11;
                var10[1] = var8;
                var8 = function() { // Environment: var6
                    var2 = _closure1_slot9;
                    var1 = var2.getStreamParticipants;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.find;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.user;
                        var1 = var0.id;
                        var2 = _closure1_slot11;
                        var0 = var2.getId;
                        var0 = var0.bind(var2)();
                        var0 = var1 === var0;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var13 = var11.bind(var12)(var10, var8);
                var8 = var5[var0];
                var10 = var9.bind(var3)(var8);
                var9 = var10.useStateFromStores;
                var8 = new Array(2);
                var8[0] = var1;
                var1 = _closure1_slot8;
                var8[1] = var1;
                var1 = function() { // Environment: var6
                    _fun109669: for (var _fun109669_ip = 0;;) switch (_fun109669_ip) {
                        case 0:
                            var2 = _closure1_slot8;
                            var0 = var2.getCurrentEmbeddedActivity;
                            var7 = var0.bind(var2)();
                            var0 = null;
                            var2 = var0 != var7;
                            if (!var2) {
                                _fun109669_ip = 109;
                                continue _fun109669
                            }
                        case 26:
                            var4 = _closure1_slot9;
                            var3 = var4.getParticipant;
                            var2 = _closure2_slot0;
                            var2 = var2.id;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 16;
                            var5 = var5[var1];
                            var1 = undefined;
                            var6 = var6.bind(var1)(var5);
                            var5 = var6.getEmbeddedActivityParticipantId;
                            var1 = {};
                            var8 = var7.applicationId;
                            var1.applicationId = var8;
                            var7 = var7.compositeInstanceId;
                            var1.instanceId = var7;
                            var1 = var5.bind(var6)(var1);
                            var0 = var3.bind(var4)(var2, var1);
                        case 109:
                            return var0;
                    }
                };
                var12 = var9.bind(var10)(var8, var1);
                var1 = 17;
                var1 = var5[var1];
                var4 = var4.bind(var3)(var1);
                var1 = var7.id;
                var1 = var4.bind(var3)(var1);
                var11 = null;
                var4 = var12;
                if (!(var11 != var2)) {
                    _fun109666_ip = 243;
                    continue _fun109666
                }
            case 209:
                var5 = var2.user;
                var8 = var5.id;
                var9 = _closure1_slot11;
                var5 = var9.getId;
                var5 = var5.bind(var9)();
                var4 = var12;
                if (!(var8 !== var5)) {
                    _fun109666_ip = 243;
                    continue _fun109666
                }
            case 240:
                var4 = var2;
            case 243:
                if (!var1) {
                    _fun109666_ip = 249;
                    continue _fun109666
                }
            case 246:
                var4 = var12;
            case 249:
                _closure2_slot1 = var4;
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = var5[var0];
                var14 = var2.bind(var3)(var1);
                var10 = var14.useStateFromStores;
                var1 = _closure1_slot12;
                var9 = new Array(1);
                var9[0] = var1;
                var8 = new Array(1);
                var8[0] = var4;
                var1 = function() { // Environment: var6
                    _fun109670: for (var _fun109670_ip = 0;;) switch (_fun109670_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun109670_ip = 43;
                                continue _fun109670
                            }
                        case 16:
                            var3 = _closure1_slot12;
                            var2 = var3.isLocalVideoDisabled;
                            var1 = _closure2_slot1;
                            var1 = var1.id;
                            var0 = var2.bind(var3)(var1);
                        case 43:
                            return var0;
                    }
                };
                var1 = var10.bind(var14)(var9, var1, var8);
                var0 = var5[var0];
                var10 = var2.bind(var3)(var0);
                var9 = var10.useStateFromStores;
                var0 = _closure1_slot9;
                var8 = new Array(2);
                var8[0] = var0;
                var0 = _closure1_slot11;
                var8[1] = var0;
                var0 = function() { // Environment: var6
                    _fun109671: for (var _fun109671_ip = 0;;) switch (_fun109671_ip) {
                        case 0:
                            var4 = _closure1_slot9;
                            var3 = var4.getParticipant;
                            var0 = _closure2_slot0;
                            var1 = var0.id;
                            var5 = _closure1_slot11;
                            var0 = var5.getId;
                            var0 = var0.bind(var5)();
                            var1 = var3.bind(var4)(var1, var0);
                            var3 = null;
                            var4 = var3 != var1;
                            var0 = null;
                            if (!var4) {
                                _fun109671_ip = 95;
                                continue _fun109671
                            }
                        case 56:
                            var4 = var1.type;
                            var2 = _closure1_slot14;
                            var2 = var2.USER;
                            var0 = null;
                            if (!(var4 === var2)) {
                                _fun109671_ip = 95;
                                continue _fun109671
                            }
                        case 77:
                            var2 = var1.streamId;
                            var2 = var3 != var2;
                            var0 = null;
                            if (!var2) {
                                _fun109671_ip = 95;
                                continue _fun109671
                            }
                        case 92:
                            var0 = var1;
                        case 95:
                            return var0;
                    }
                };
                var9 = var9.bind(var10)(var8, var0);
                var8 = _closure1_slot4;
                var14 = var8.useCallback;
                var10 = new Array(1);
                var10[0] = var7;
                var0 = function() { // Environment: var6
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 18;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.openGuildVoiceModal;
                    var2 = _closure2_slot0;
                    var1 = 'PIP';
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var18 = var14.bind(var8)(var0, var10);
                _closure2_slot2 = var18;
                var0 = 19;
                var0 = var5[var0];
                var14 = var2.bind(var3)(var0);
                var10 = var14.useShouldForcePipOrientation;
                var0 = {};
                var0.channel = var7;
                var16 = var10.bind(var14)(var0);
                _closure2_slot3 = var16;
                var0 = 20;
                var0 = var5[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.useIsScreenLandscape;
                var14 = var0.bind(var2)();
                _closure2_slot4 = var14;
                var2 = _closure1_slot1;
                var0 = 21;
                var0 = var5[var0];
                var2 = var2.bind(var3)(var0);
                var0 = {};
                var5 = var7.id;
                var0.channelId = var5;
                var0.forcedOrientation = var16;
                var2 = var2.bind(var3)(var0);
                var0 = var2.width;
                _closure2_slot5 = var0;
                var10 = var2.height;
                _closure2_slot6 = var10;
                var5 = var8.useMemo;
                var2 = new Array(4);
                var2[0] = var16;
                var2[1] = var14;
                var2[2] = var10;
                var2[3] = var0;
                var0 = function() { // Environment: var6
                    _fun109673: for (var _fun109673_ip = 0;;) switch (_fun109673_ip) {
                        case 0:
                            var0 = {};
                            var2 = _closure2_slot6;
                            var0.height = var2;
                            var2 = _closure2_slot5;
                            var0.width = var2;
                            var2 = _closure2_slot4;
                            if (var2) {
                                _fun109673_ip = 77;
                                continue _fun109673
                            }
                        case 28:
                            var3 = _closure2_slot3;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 22;
                            var2 = var2[var1];
                            var1 = undefined;
                            var1 = var4.bind(var1)(var2);
                            var1 = var1.OrientationType;
                            var2 = var1.LANDSCAPE;
                            var1 = 'column';
                            if (!(var3 === var2)) {
                                _fun109673_ip = 81;
                                continue _fun109673
                            }
                        case 77:
                            var1 = 'row';
                        case 81:
                            var0.flexDirection = var1;
                            return var0;
                    }
                };
                var14 = var5.bind(var8)(var0, var2);
                var0 = var11 == var4;
                var2 = undefined;
                if (var0) {
                    _fun109666_ip = 556;
                    continue _fun109666
                }
            case 551:
                var2 = var4.type;
            case 556:
                var0 = _closure1_slot14;
                var0 = var0.ACTIVITY;
                var16 = var2 === var0;
                if (!var16) {
                    _fun109666_ip = 603;
                    continue _fun109666
                }
            case 573:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 23;
                var0 = var5[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var4.applicationId;
                var16 = var2.bind(var3)(var0);
            case 603:
                if (!var16) {
                    _fun109666_ip = 610;
                    continue _fun109666
                }
            case 606:
                var16 = var11 == var13;
            case 610:
                var0 = var11 == var4;
                var2 = undefined;
                if (var0) {
                    _fun109666_ip = 624;
                    continue _fun109666
                }
            case 619:
                var2 = var4.type;
            case 624:
                var0 = _closure1_slot14;
                var0 = var0.HIDDEN_STREAM;
                if (!(var0 !== var2)) {
                    _fun109666_ip = 867;
                    continue _fun109666
                }
            case 641:
                var0 = _closure1_slot14;
                var0 = var0.STREAM;
                if (!(var0 !== var2)) {
                    _fun109666_ip = 867;
                    continue _fun109666
                }
            case 658:
                var0 = _closure1_slot14;
                var0 = var0.USER;
                if (!(var0 !== var2)) {
                    _fun109666_ip = 749;
                    continue _fun109666
                }
            case 672:
                var0 = _closure1_slot14;
                var0 = var0.ACTIVITY;
                var10 = null;
                if (!(var0 === var2)) {
                    _fun109666_ip = 946;
                    continue _fun109666
                }
            case 691:
                var5 = _closure1_slot15;
                var2 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 28;
                var0 = var8[var0];
                var2 = var2.bind(var3)(var0);
                var0 = {};
                var0.participant = var4;
                var0.channel = var7;
                var6 = function() {
                    _fun109674: for (var _fun109674_ip = 0;;) switch (_fun109674_ip) {
                        case 0:
                            var2 = _closure1_slot8;
                            var0 = var2.getCurrentEmbeddedActivity;
                            var4 = var0.bind(var2)();
                            var0 = null;
                            if (!(var0 != var4)) {
                                _fun109674_ip = 77;
                                continue _fun109674
                            }
                        case 23:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 29;
                            var1 = var3[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = _closure2_slot0;
                            var1 = var1.guild_id;
                            var5 = var0 == var4;
                            var0 = undefined;
                            if (var5) {
                                _fun109674_ip = 71;
                                continue _fun109674
                            }
                        case 66:
                            var0 = var4.location;
                        case 71:
                            var0 = var2.bind(var3)(var1, var0);
                        case 77:
                            var1 = _closure2_slot2;
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            return var0;
                    }
                };
                var0.onSingleTap = var6;
                var10 = var5.bind(var3)(var2, var0);
                _fun109666_ip = 946;
                continue _fun109666;
            case 749:
                var0 = null;
                if (var1) {
                    _fun109666_ip = 862;
                    continue _fun109666
                }
            case 754:
                var5 = _closure1_slot15;
                var2 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 26;
                var1 = var8[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1.participant = var4;
                var7 = _closure1_slot0;
                var6 = 27;
                var6 = var8[var6];
                var6 = var7.bind(var3)(var6);
                var6 = var6.AvatarSizes;
                var6 = var6.PROFILE;
                var1.avatarSize = var6;
                var6 = 25;
                var6 = var8[var6];
                var6 = var7.bind(var3)(var6);
                var6 = var6.ResizeMode;
                var6 = var6.COVER;
                var1.resizeMode = var6;
                var1.onSingleTap = var18;
                var1.onDoubleTap = var18;
                var0 = var5.bind(var3)(var2, var1);
            case 862:
                var10 = var0;
                _fun109666_ip = 946;
                continue _fun109666;
            case 867:
                var2 = _closure1_slot15;
                var1 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 24;
                var0 = var7[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var6 = _closure1_slot0;
                var5 = 25;
                var5 = var7[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.ResizeMode;
                var5 = var5.CONTAIN;
                var0.resizeMode = var5;
                var0.participant = var4;
                var0.onSingleTap = var18;
                var0.onDoubleTap = var18;
                var10 = var2.bind(var3)(var1, var0);
            case 946:
                var2 = _closure1_slot15;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var17.background;
                var0.style = var4;
                var5 = _closure1_slot7;
                var4 = {};
                var6 = 0.7;
                var4.activeOpacity = var6;
                var7 = _closure1_slot16;
                var6 = {};
                var19 = var17.pip;
                var8 = new Array(3);
                var8[0] = var19;
                var17 = var17.elevationShadow;
                var8[1] = var17;
                var8[2] = var14;
                var6.style = var8;
                var14 = var11 != var9;
                if (!var14) {
                    _fun109666_ip = 1035;
                    continue _fun109666
                }
            case 1032:
                var14 = !var16;
            case 1035:
                if (!var14) {
                    _fun109666_ip = 1141;
                    continue _fun109666
                }
            case 1038:
                var19 = _closure1_slot15;
                var17 = _closure1_slot1;
                var22 = _closure1_slot2;
                var8 = 26;
                var8 = var22[var8];
                var17 = var17.bind(var3)(var8);
                var8 = {};
                var8.participant = var9;
                var21 = _closure1_slot0;
                var20 = 27;
                var20 = var22[var20];
                var20 = var21.bind(var3)(var20);
                var20 = var20.AvatarSizes;
                var20 = var20.PROFILE;
                var8.avatarSize = var20;
                var20 = 25;
                var20 = var22[var20];
                var20 = var21.bind(var3)(var20);
                var20 = var20.ResizeMode;
                var20 = var20.COVER;
                var8.resizeMode = var20;
                var8.onSingleTap = var18;
                var14 = var19.bind(var3)(var17, var8);
            case 1141:
                var8 = new Array(3);
                var8[0] = var14;
                var14 = var11 != var13;
                if (!var14) {
                    _fun109666_ip = 1159;
                    continue _fun109666
                }
            case 1156:
                var14 = !var16;
            case 1159:
                if (!var14) {
                    _fun109666_ip = 1199;
                    continue _fun109666
                }
            case 1162:
                var17 = _closure1_slot15;
                var16 = _closure1_slot1;
                var19 = _closure1_slot2;
                var15 = 30;
                var15 = var19[var15];
                var16 = var16.bind(var3)(var15);
                var15 = {};
                var15.onSingleTap = var18;
                var14 = var17.bind(var3)(var16, var15);
            case 1199:
                var8[1] = var14;
                var9 = var11 == var9;
                if (var9) {
                    _fun109666_ip = 1214;
                    continue _fun109666
                }
            case 1210:
                var9 = var11 == var13;
            case 1214:
                if (var9) {
                    _fun109666_ip = 1221;
                    continue _fun109666
                }
            case 1217:
                var9 = var11 == var12;
            case 1221:
                if (!var9) {
                    _fun109666_ip = 1227;
                    continue _fun109666
                }
            case 1224:
                var9 = var10;
            case 1227:
                var8[2] = var9;
                var6.children = var8;
                var6 = var7.bind(var3)(var1, var6);
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot18 = var3;
    var6 = var7.memo;
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var6 = var0.channel;
        var2 = _closure1_slot4;
        var1 = var2.useState;
        var0 = function() { // Environment: var0
            var0 = _closure1_slot13;
            var0 = var0.TOP_RIGHT;
            return var0;
        };
        var2 = var1.bind(var2)(var0);
        var1 = _closure1_slot3;
        var3 = undefined;
        var0 = 2;
        var1 = var1.bind(var3)(var2, var0);
        var0 = 0;
        var7 = var1[var0];
        var0 = 1;
        var5 = var1[var0];
        var2 = _closure1_slot15;
        var1 = _closure1_slot1;
        var8 = _closure1_slot2;
        var0 = 31;
        var0 = var8[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var0.channel = var6;
        var0.preferredPosition = var7;
        var0.onMove = var5;
        var5 = _closure1_slot18;
        var4 = {};
        var4.channel = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot19 = var3;
    var3 = {};
    var6 = 'function PictureInPictureGlobalTsx1(){const{withTiming,drawerState,STANDARD_EASING}=this.__closure;return withTiming(drawerState,{easing:STANDARD_EASING,duration:250});}';
    var3.code = var6;
    var _closure1_slot20 = var3;
    var3 = {};
    var6 = 'function PictureInPictureGlobalTsx2(){const{interpolate,animatedDrawerState,NAV_BAR_HEIGHT,PADDING,chatInputContainerHeight,PIP_AVOIDANCE_TAB_BAR_HEIGHT}=this.__closure;return{marginTop:interpolate(animatedDrawerState.get(),[0,1],[NAV_BAR_HEIGHT+PADDING,PADDING]),marginBottom:interpolate(animatedDrawerState.get(),[0,1],[chatInputContainerHeight+PADDING,PIP_AVOIDANCE_TAB_BAR_HEIGHT+PADDING])};}';
    var3.code = var6;
    var _closure1_slot21 = var3;
    var3 = 38;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/video_calls/native/components/PictureInPictureGlobal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun109677: for (var _fun109677_ip = 0;;) switch (_fun109677_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.channel;
                var3 = undefined;
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var1 = _closure1_slot17;
                var9 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 32;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useIsChannelFocused;
                var1 = var1.bind(var2)();
                var13 = 1;
                if (!var1) {
                    _fun109677_ip = 73;
                    continue _fun109677
                }
            case 71:
                var13 = 0;
            case 73:
                _closure2_slot0 = var13;
                var1 = _closure1_slot10;
                var7 = var1.bind(var3)();
                _closure2_slot1 = var7;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var4 = 33;
                var1 = var11[var4];
                var5 = var10.bind(var3)(var1);
                var2 = var5.useDerivedValue;
                var1 = function() {
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var0 = 34;
                    var0 = var7[var0];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var0);
                    var2 = var3.withTiming;
                    var1 = _closure2_slot0;
                    var0 = {};
                    var4 = 35;
                    var4 = var7[var4];
                    var4 = var6.bind(var5)(var4);
                    var4 = var4.STANDARD_EASING;
                    var0.easing = var4;
                    var4 = 250;
                    var0.duration = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var12 = {};
                var14 = 34;
                var14 = var11[var14];
                var14 = var10.bind(var3)(var14);
                var14 = var14.withTiming;
                var12.withTiming = var14;
                var12.drawerState = var13;
                var13 = 35;
                var13 = var11[var13];
                var13 = var10.bind(var3)(var13);
                var13 = var13.STANDARD_EASING;
                var12.STANDARD_EASING = var13;
                var1.__closure = var12;
                var12 = 5168896066356.0;
                var1.__workletHash = var12;
                var12 = _closure1_slot20;
                var1.__initData = var12;
                var12 = var2.bind(var5)(var1);
                _closure2_slot2 = var12;
                var1 = var11[var4];
                var2 = var10.bind(var3)(var1);
                var1 = var2.useAnimatedStyle;
                var0 = function() {
                    var0 = {};
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 33;
                    var1 = var9[var2];
                    var7 = undefined;
                    var11 = var8.bind(var7)(var1);
                    var10 = var11.interpolate;
                    var4 = _closure2_slot2;
                    var3 = var4.get;
                    var5 = var3.bind(var4)();
                    var3 = 36;
                    var3 = var9[var3];
                    var3 = var8.bind(var7)(var3);
                    var3 = var3.NAV_BAR_HEIGHT;
                    var6 = 12;
                    var3 = var3 + var6;
                    var4 = new Array(2);
                    var4[0] = var3;
                    var4[1] = var6;
                    var3 = [0, 1];
                    var3 = var10.bind(var11)(var5, var3, var4);
                    var0.marginTop = var3;
                    var2 = var9[var2];
                    var5 = var8.bind(var7)(var2);
                    var4 = var5.interpolate;
                    var3 = _closure2_slot2;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var1 = _closure2_slot1;
                    var1 = var1 + var6;
                    var2 = new Array(2);
                    var2[0] = var1;
                    var1 = 37;
                    var1 = var9[var1];
                    var1 = var8.bind(var7)(var1);
                    var1 = var1.PIP_AVOIDANCE_TAB_BAR_HEIGHT;
                    var1 = var1 + var6;
                    var2[1] = var1;
                    var1 = [0, 1];
                    var1 = var4.bind(var5)(var3, var1, var2);
                    var0.marginBottom = var1;
                    return var0;
                };
                var5 = {};
                var13 = var11[var4];
                var13 = var10.bind(var3)(var13);
                var13 = var13.interpolate;
                var5.interpolate = var13;
                var5.animatedDrawerState = var12;
                var12 = 36;
                var12 = var11[var12];
                var12 = var10.bind(var3)(var12);
                var12 = var12.NAV_BAR_HEIGHT;
                var5.NAV_BAR_HEIGHT = var12;
                var12 = 12;
                var5.PADDING = var12;
                var5.chatInputContainerHeight = var7;
                var7 = 37;
                var7 = var11[var7];
                var7 = var10.bind(var3)(var7);
                var7 = var7.PIP_AVOIDANCE_TAB_BAR_HEIGHT;
                var5.PIP_AVOIDANCE_TAB_BAR_HEIGHT = var7;
                var0.__closure = var5;
                var5 = 8833756900366.0;
                var0.__workletHash = var5;
                var5 = _closure1_slot21;
                var0.__initData = var5;
                var10 = var1.bind(var2)(var0);
                var2 = _closure1_slot15;
                var1 = _closure1_slot5;
                var0 = {};
                var5 = _closure1_slot6;
                var5 = var5.absoluteFill;
                var0.style = var5;
                var7 = 'box-none';
                var0.pointerEvents = var7;
                var5 = _closure1_slot1;
                var4 = var11[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.View;
                var4 = {};
                var11 = var9.container;
                var9 = new Array(2);
                var9[0] = var11;
                var9[1] = var10;
                var4.style = var9;
                var4.pointerEvents = var7;
                var7 = _closure1_slot19;
                var6 = {};
                var6.channel = var8;
                var6 = var2.bind(var3)(var7, var6);
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1371, 3948, 7916, 1216, 3476, 660, 3523, 33, 1297, 4888, 671, 7921, 566, 3953, 7911, 7898, 7920, 5366, 7923, 7839, 8019, 8024, 8050, 8068, 5456, 8073, 7987, 8020, 7919, 8760, 3720, 4097, 4886, 4703, 14129, 2]);