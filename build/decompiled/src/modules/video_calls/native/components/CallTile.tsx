// modules/video_calls/native/components/CallTile.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var7;
    var0 = function arg0() {
        _fun69458: for (var _fun69458_ip = 0;;) switch (_fun69458_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.participant;
                var2 = _closure1_slot16;
                var4 = undefined;
                var5 = var2.bind(var4)();
                var3 = var0.type;
                var2 = _closure1_slot10;
                var2 = var2.STREAM;
                if (!(var3 !== var2)) {
                    _fun69458_ip = 220;
                    continue _fun69458
                }
            case 44:
                var3 = var0.type;
                var2 = _closure1_slot10;
                var2 = var2.USER;
                var9 = undefined;
                if (!(var3 === var2)) {
                    _fun69458_ip = 240;
                    continue _fun69458
                }
            case 68:
                var2 = var0.voicePlatform;
                var0 = _closure1_slot12;
                var0 = var0.MOBILE;
                if (!(var0 !== var2)) {
                    _fun69458_ip = 198;
                    continue _fun69458
                }
            case 88:
                var0 = _closure1_slot12;
                var0 = var0.XBOX;
                if (!(var0 !== var2)) {
                    _fun69458_ip = 176;
                    continue _fun69458
                }
            case 102:
                var0 = _closure1_slot12;
                var0 = var0.PLAYSTATION;
                if (!(var0 !== var2)) {
                    _fun69458_ip = 154;
                    continue _fun69458
                }
            case 116:
                var0 = _closure1_slot12;
                var0 = var0.QUEST;
                var9 = undefined;
                if (!(var0 === var2)) {
                    _fun69458_ip = 240;
                    continue _fun69458
                }
            case 132:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 24;
                var0 = var3[var0];
                var9 = var2.bind(var4)(var0);
                _fun69458_ip = 240;
                continue _fun69458;
            case 154:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 23;
                var0 = var3[var0];
                var9 = var2.bind(var4)(var0);
                _fun69458_ip = 240;
                continue _fun69458;
            case 176:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 22;
                var0 = var3[var0];
                var9 = var2.bind(var4)(var0);
                _fun69458_ip = 240;
                continue _fun69458;
            case 198:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 21;
                var0 = var3[var0];
                var9 = var2.bind(var4)(var0);
                _fun69458_ip = 240;
                continue _fun69458;
            case 220:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 20;
                var0 = var3[var0];
                var9 = var2.bind(var4)(var0);
            case 240:
                var0 = null;
                var2 = var0 == var9;
                if (var2) {
                    _fun69458_ip = 347;
                    continue _fun69458
                }
            case 249:
                var3 = _closure1_slot13;
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 25;
                var1 = var8[var6];
                var2 = var7.bind(var4)(var1);
                var1 = {};
                var1.source = var9;
                var6 = var8[var6];
                var6 = var7.bind(var4)(var6);
                var6 = var6.Sizes;
                var6 = var6.REFRESH_SMALL_16;
                var1.size = var6;
                var6 = 9;
                var6 = var8[var6];
                var6 = var7.bind(var4)(var6);
                var6 = var6.unsafe_rawColors;
                var6 = var6.WHITE;
                var1.color = var6;
                var5 = var5.titleIcon;
                var1.style = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 347:
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var0 = 0;
    var3 = var7[var0];
    var1 = arg3;
    var0 = undefined;
    var4 = var1.bind(var0)(var3);
    var _closure1_slot3 = var4;
    var1 = 1;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var3 = var1.StyleSheet;
    var _closure1_slot4 = var3;
    var1 = var1.View;
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var7[var1];
    var1 = var11.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var7[var1];
    var1 = var11.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 4;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var3 = var1.resetFocus;
    var _closure1_slot8 = var3;
    var1 = var1.toggleFocus;
    var _closure1_slot9 = var1;
    var1 = 5;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var3 = var1.ParticipantTypes;
    var _closure1_slot10 = var3;
    var3 = var1.isStreamParticipant;
    var _closure1_slot11 = var3;
    var1 = var1.VoicePlatforms;
    var _closure1_slot12 = var1;
    var12 = 6;
    var1 = var7[var12];
    var1 = var6.bind(var0)(var1);
    var3 = var1.jsx;
    var _closure1_slot13 = var3;
    var3 = var1.Fragment;
    var _closure1_slot14 = var3;
    var1 = var1.jsxs;
    var _closure1_slot15 = var1;
    var1 = 7;
    var1 = var7[var1];
    var8 = var6.bind(var0)(var1);
    var3 = var8.createStyles;
    var1 = {};
    var10 = 8;
    var9 = {
        'position': 'absolute',
        'top': 8,
        'right': 8
    };
    var1.liveContainer = var9;
    var9 = {};
    var9.marginRight = var12;
    var1.titleIcon = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'alignSelf': 'flex-start',
        'backgroundColor': null,
        'borderRadius': null,
        'paddingHorizontal': 8,
        'paddingVertical': 4
    };
    var10 = var7[var10];
    var15 = var6.bind(var0)(var10);
    var14 = var15.hexOpacityToRgba;
    var10 = 9;
    var12 = var7[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var13 = var12.PRIMARY_700;
    var12 = 0.5;
    var12 = var14.bind(var15)(var13, var12);
    var9.backgroundColor = var12;
    var12 = var7[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var9.borderRadius = var12;
    var1.usernameContainer = var9;
    var9 = {
        'overflow': 'hidden',
        'position': 'absolute',
        'bottom': 8,
        'left': 8,
        'right': 40
    };
    var12 = var7[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var9.borderRadius = var12;
    var1.usernamePosition = var9;
    var9 = {
        'flex': 1,
        'width': '100%'
    };
    var12 = var7[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.PRIMARY_600;
    var9.backgroundColor = var12;
    var1.streamPreview = var9;
    var9 = {
        'flex': 1,
        'alignItems': 'center',
        'justifyContent': 'center',
        'overflow': 'hidden',
        'width': '100%'
    };
    var12 = var7[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BLACK;
    var9.backgroundColor = var12;
    var1.screenshareContainer = var9;
    var9 = {};
    var10 = var7[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BLACK;
    var9.backgroundColor = var10;
    var1.stageStreamContainer = var9;
    var1 = var3.bind(var8)(var1);
    var _closure1_slot16 = var1;
    var3 = var4.memo;
    var1 = function(arg0) { // Environment: var5
        _fun69459: for (var _fun69459_ip = 0;;) switch (_fun69459_ip) {
            case 0:
                var0 = arg0;
                var14 = var0.participant;
                var _closure2_slot0 = var14;
                var23 = var0.avatarSize;
                var11 = var0.channel;
                var _closure2_slot1 = var11;
                var10 = var0.hasTopSafeArea;
                var9 = var0.hasLeftSafeArea;
                var8 = var0.hasRightSafeArea;
                var _closure2_slot2 = var8;
                var7 = var0.hasBottomSafeArea;
                var _closure2_slot3 = var7;
                var17 = var0.shrinkStreamEmptyState;
                var5 = var0.contentStyle;
                var20 = var0.hasNotch;
                var3 = undefined;
                if (!(var20 === var3)) {
                    _fun69459_ip = 88;
                    continue _fun69459
                }
            case 86:
                var20 = false;
            case 88:
                var19 = var0.resizeMode;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var2 = _closure1_slot16;
                var21 = var2.bind(var3)();
                var4 = _closure1_slot1;
                var12 = _closure1_slot2;
                var2 = 10;
                var2 = var12[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var18 = var2.analyticsLocations;
                _closure2_slot4 = var18;
                var2 = 11;
                var2 = var12[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var26 = var2.bottom;
                _closure2_slot5 = var26;
                var15 = var2.right;
                _closure2_slot6 = var15;
                var6 = _closure1_slot0;
                var4 = 12;
                var2 = var12[var4];
                var22 = var6.bind(var3)(var2);
                var16 = var22.useStateFromStoresObject;
                var2 = _closure1_slot6;
                var13 = new Array(1);
                var13[0] = var2;
                var2 = function() { // Environment: var1
                    _fun69460: for (var _fun69460_ip = 0;;) switch (_fun69460_ip) {
                        case 0:
                            var0 = {};
                            var4 = _closure1_slot11;
                            var1 = _closure2_slot0;
                            var6 = undefined;
                            var5 = var4.bind(var6)(var1);
                            var4 = null;
                            if (!var5) {
                                _fun69460_ip = 69;
                                continue _fun69460
                            }
                        case 28:
                            var9 = _closure1_slot6;
                            var8 = var9.getStreamForUser;
                            var5 = _closure2_slot0;
                            var7 = var5.user;
                            var7 = var7.id;
                            var5 = var5.stream;
                            var5 = var5.guildId;
                            var4 = var8.bind(var9)(var7, var5);
                        case 69:
                            var0.stream = var4;
                            var5 = _closure1_slot11;
                            var4 = _closure2_slot0;
                            var4 = var5.bind(var6)(var4);
                            var1 = null;
                            if (!var4) {
                                _fun69460_ip = 133;
                                continue _fun69460
                            }
                        case 92:
                            var5 = _closure1_slot6;
                            var4 = var5.getActiveStreamForUser;
                            var2 = _closure2_slot0;
                            var3 = var2.user;
                            var3 = var3.id;
                            var2 = var2.stream;
                            var2 = var2.guildId;
                            var1 = var4.bind(var5)(var3, var2);
                        case 133:
                            var0.activeStream = var1;
                            return var0;
                    }
                };
                var13 = var16.bind(var22)(var13, var2);
                var2 = var13.stream;
                var13 = var13.activeStream;
                var25 = _closure1_slot3;
                var24 = var25.useCallback;
                var16 = var11.id;
                var22 = new Array(2);
                var22[0] = var16;
                var16 = var14.id;
                var22[1] = var16;
                var16 = function() { // Environment: var1
                    var2 = _closure1_slot8;
                    var0 = undefined;
                    var2 = var2.bind(var0)();
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 13;
                    var1 = var3[var1];
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.selectParticipant;
                    var2 = _closure2_slot1;
                    var2 = var2.id;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var16 = var24.bind(var25)(var16, var22);
                var24 = var25.useCallback;
                var27 = var11.id;
                var22 = new Array(2);
                var22[0] = var27;
                var22[1] = var18;
                var18 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 14;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = {};
                    var3 = arg0;
                    var3 = var3.user;
                    var3 = var3.id;
                    var1.userId = var3;
                    var4 = _closure2_slot1;
                    var4 = var4.id;
                    var1.channelId = var4;
                    var4 = true;
                    var1.isVoiceContext = var4;
                    var3 = _closure2_slot4;
                    var1.sourceAnalyticsLocations = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var22 = var24.bind(var25)(var18, var22);
                var24 = var25.useMemo;
                var18 = new Array(4);
                var18[0] = var7;
                var18[1] = var8;
                var18[2] = var26;
                var18[3] = var15;
                var15 = function() { // Environment: var1
                    _fun69463: for (var _fun69463_ip = 0;;) switch (_fun69463_ip) {
                        case 0:
                            var0 = {};
                            var4 = _closure2_slot3;
                            var3 = 8;
                            var1 = var3;
                            if (!var4) {
                                _fun69463_ip = 26;
                                continue _fun69463
                            }
                        case 18:
                            var4 = _closure2_slot5;
                            var1 = var3 + var4;
                        case 26:
                            var0.bottom = var1;
                            var4 = _closure2_slot2;
                            var1 = var3;
                            if (!var4) {
                                _fun69463_ip = 48;
                                continue _fun69463
                            }
                        case 40:
                            var2 = _closure2_slot6;
                            var1 = var3 + var2;
                        case 48:
                            var0.right = var1;
                            return var0;
                    }
                };
                var15 = var24.bind(var25)(var15, var18);
                var4 = var12[var4];
                var12 = var6.bind(var3)(var4);
                var6 = var12.useStateFromStores;
                var18 = _closure1_slot7;
                var4 = new Array(1);
                var4[0] = var18;
                var1 = function() { // Environment: var1
                    var1 = _closure1_slot7;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var4 = var6.bind(var12)(var4, var1);
                var12 = var14.type;
                var1 = _closure1_slot10;
                var1 = var1.HIDDEN_STREAM;
                if (!(var1 !== var12)) {
                    _fun69459_ip = 870;
                    continue _fun69459
                }
            case 421:
                var1 = _closure1_slot10;
                var1 = var1.STREAM;
                if (!(var1 !== var12)) {
                    _fun69459_ip = 614;
                    continue _fun69459
                }
            case 438:
                var1 = _closure1_slot10;
                var1 = var1.USER;
                if (!(var1 !== var12)) {
                    _fun69459_ip = 530;
                    continue _fun69459
                }
            case 452:
                var1 = _closure1_slot10;
                var1 = var1.ACTIVITY;
                var6 = null;
                if (!(var1 === var12)) {
                    _fun69459_ip = 895;
                    continue _fun69459
                }
            case 471:
                var18 = _closure1_slot13;
                var12 = _closure1_slot1;
                var24 = _closure1_slot2;
                var1 = 18;
                var1 = var24[var1];
                var12 = var12.bind(var3)(var1);
                var1 = {};
                var1.participant = var14;
                var1.style = var5;
                var1.channel = var11;
                var24 = _closure1_slot9;
                var1.onSingleTap = var24;
                var6 = var18.bind(var3)(var12, var1);
                _fun69459_ip = 895;
                continue _fun69459;
            case 530:
                var18 = _closure1_slot13;
                var12 = _closure1_slot1;
                var24 = _closure1_slot2;
                var1 = 17;
                var1 = var24[var1];
                var12 = var12.bind(var3)(var1);
                var1 = {};
                var1.participant = var14;
                var1.avatarSize = var23;
                var23 = _closure1_slot9;
                var1.onSingleTap = var23;
                var1.onDoubleTap = var16;
                var1.onLongPress = var22;
                var1.statusStyle = var15;
                var1.hasNotch = var20;
                var1.resizeMode = var19;
                var1.style = var5;
                var6 = var18.bind(var3)(var12, var1);
                _fun69459_ip = 895;
                continue _fun69459;
            case 614:
                var1 = null;
                if (!(var1 == var13)) {
                    _fun69459_ip = 662;
                    continue _fun69459
                }
            case 620:
                var2 = var1 != var2;
                var6 = null;
                if (!var2) {
                    _fun69459_ip = 895;
                    continue _fun69459
                }
            case 632:
                var18 = _closure1_slot13;
                var12 = _closure1_slot17;
                var2 = {};
                var2.participant = var14;
                var2.style = var5;
                var6 = var18.bind(var3)(var12, var2);
                _fun69459_ip = 895;
                continue _fun69459;
            case 662:
                var2 = var13.ownerId;
                var12 = var1 == var4;
                var1 = undefined;
                if (var12) {
                    _fun69459_ip = 682;
                    continue _fun69459
                }
            case 677:
                var1 = var4.id;
            case 682:
                if (!(var2 === var1)) {
                    _fun69459_ip = 795;
                    continue _fun69459
                }
            case 686:
                var4 = _closure1_slot13;
                var2 = _closure1_slot5;
                var1 = {};
                var12 = var21.screenshareContainer;
                var1.style = var12;
                var19 = _closure1_slot13;
                var18 = _closure1_slot1;
                var20 = _closure1_slot2;
                var12 = 16;
                var12 = var20[var12];
                var18 = var18.bind(var3)(var12);
                var12 = {};
                var12.participant = var14;
                var20 = _closure1_slot9;
                var12.onSingleTap = var20;
                var12.onDoubleTap = var16;
                var20 = var11.isGuildStageVoice;
                var22 = var20.bind(var11)();
                var20 = undefined;
                if (!var22) {
                    _fun69459_ip = 772;
                    continue _fun69459
                }
            case 766:
                var20 = var21.stageStreamContainer;
            case 772:
                var12.containerStyle = var20;
                var12 = var19.bind(var3)(var18, var12);
                var1.children = var12;
                var1 = var4.bind(var3)(var2, var1);
                _fun69459_ip = 865;
                continue _fun69459;
            case 795:
                var12 = _closure1_slot13;
                var4 = _closure1_slot1;
                var18 = _closure1_slot2;
                var2 = 15;
                var2 = var18[var2];
                var4 = var4.bind(var3)(var2);
                var2 = {};
                var2.participant = var14;
                var18 = _closure1_slot9;
                var2.onSingleTap = var18;
                var2.onDoubleTap = var16;
                var2.removeEmptyStateImage = var17;
                var2.onFullScreen = var16;
                var2.fullscreenIconStyle = var15;
                var2.style = var5;
                var1 = var12.bind(var3)(var4, var2);
            case 865:
                var6 = var1;
                _fun69459_ip = 895;
                continue _fun69459;
            case 870:
                var4 = _closure1_slot13;
                var2 = _closure1_slot17;
                var1 = {};
                var1.participant = var14;
                var1.style = var5;
                var6 = var4.bind(var3)(var2, var1);
            case 895:
                var2 = var14.type;
                var1 = _closure1_slot10;
                var1 = var1.ACTIVITY;
                var12 = null;
                var5 = null;
                if (!(var2 !== var1)) {
                    _fun69459_ip = 972;
                    continue _fun69459
                }
            case 918:
                var4 = _closure1_slot13;
                var2 = _closure1_slot19;
                var1 = {};
                var1.participant = var14;
                var12 = var12 != var13;
                var1.isActiveStream = var12;
                var1.channel = var11;
                var1.hasTopSafeArea = var10;
                var1.hasLeftSafeArea = var9;
                var1.hasRightSafeArea = var8;
                var1.hasBottomSafeArea = var7;
                var5 = var4.bind(var3)(var2, var1);
            case 972:
                var2 = _closure1_slot15;
                var1 = _closure1_slot14;
                var0 = {};
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var4 = var3.bind(var4)(var1);
    var3 = function arg0() {
        var0 = arg0;
        var8 = var0.participant;
        var6 = var0.style;
        var0 = _closure1_slot16;
        var3 = undefined;
        var5 = var0.bind(var3)();
        var0 = var8.user;
        var7 = var0.id;
        var2 = _closure1_slot13;
        var1 = _closure1_slot5;
        var0 = {};
        var9 = var5.streamPreview;
        var5 = new Array(2);
        var5[0] = var9;
        var5[1] = var6;
        var0.style = var5;
        var6 = _closure1_slot13;
        var5 = _closure1_slot1;
        var9 = _closure1_slot2;
        var4 = 19;
        var4 = var9[var4];
        var5 = var5.bind(var3)(var4);
        var4 = {};
        var8 = var8.stream;
        var8 = var8.guildId;
        var4.guildId = var8;
        var4.userId = var7;
        var7 = {};
        var7.aspectRatio = var3;
        var8 = 0;
        var7.borderRadius = var8;
        var4.style = var7;
        var7 = true;
        var4.disableTransition = var7;
        var7 = function() {
            var1 = _closure1_slot8;
            var0 = undefined;
            var0 = var1.bind(var0)();
            return var0;
        };
        var4.onPress = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot17 = var3;
    var1 = {};
    var8 = 'function CallTileTsx1(){const{withTiming,reveal,STANDARD_EASING}=this.__closure;return{opacity:withTiming(reveal?1:0,{easing:STANDARD_EASING,duration:250})};}';
    var1.code = var8;
    var _closure1_slot18 = var1;
    var1 = function arg0() {
        _fun69467: for (var _fun69467_ip = 0;;) switch (_fun69467_ip) {
            case 0:
                var1 = arg0;
                var14 = var1.participant;
                var5 = var1.isActiveStream;
                var15 = var1.channel;
                var12 = var1.hasLeftSafeArea;
                var16 = var1.hasRightSafeArea;
                var18 = var1.hasBottomSafeArea;
                var2 = var1.hasTopSafeArea;
                var1 = _closure1_slot16;
                var3 = undefined;
                var10 = var1.bind(var3)();
                var4 = _closure1_slot1;
                var21 = _closure1_slot2;
                var1 = 11;
                var1 = var21[var1];
                var1 = var4.bind(var3)(var1);
                var4 = var1.bind(var3)();
                var17 = var4.bottom;
                var9 = var4.left;
                var1 = var4.top;
                var13 = var4.right;
                var7 = _closure1_slot3;
                var6 = var7.useContext;
                var20 = _closure1_slot0;
                var4 = 26;
                var4 = var21[var4];
                var4 = var20.bind(var3)(var4);
                var4 = var4.RevealContext;
                var4 = var6.bind(var7)(var4);
                var19 = var4.reveal;
                var _closure2_slot0 = var19;
                var4 = 27;
                var6 = var21[var4];
                var7 = var20.bind(var3)(var6);
                var6 = var7.useAnimatedStyle;
                var0 = function() {
                    _fun69468: for (var _fun69468_ip = 0;;) switch (_fun69468_ip) {
                        case 0:
                            var0 = {};
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 28;
                            var1 = var3[var1];
                            var7 = undefined;
                            var4 = var2.bind(var7)(var1);
                            var3 = var4.withTiming;
                            var1 = _closure2_slot0;
                            var2 = 0;
                            if (!var1) {
                                _fun69468_ip = 47;
                                continue _fun69468
                            }
                        case 44:
                            var2 = 1;
                        case 47:
                            var1 = {};
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var5 = 29;
                            var5 = var8[var5];
                            var5 = var6.bind(var7)(var5);
                            var5 = var5.STANDARD_EASING;
                            var1.easing = var5;
                            var5 = 250;
                            var1.duration = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            var0.opacity = var1;
                            return var0;
                    }
                };
                var8 = {};
                var22 = 28;
                var22 = var21[var22];
                var22 = var20.bind(var3)(var22);
                var22 = var22.withTiming;
                var8.withTiming = var22;
                var8.reveal = var19;
                var19 = 29;
                var19 = var21[var19];
                var19 = var20.bind(var3)(var19);
                var19 = var19.STANDARD_EASING;
                var8.STANDARD_EASING = var19;
                var0.__closure = var8;
                var8 = 15640123774063.0;
                var0.__workletHash = var8;
                var8 = _closure1_slot18;
                var0.__initData = var8;
                var6 = var6.bind(var7)(var0);
                var7 = {};
                var8 = 0;
                if (!var18) {
                    _fun69467_ip = 273;
                    continue _fun69467
                }
            case 270:
                var8 = var17;
            case 273:
                var7.bottom = var8;
                var8 = 0;
                if (!var16) {
                    _fun69467_ip = 285;
                    continue _fun69467
                }
            case 282:
                var8 = var13;
            case 285:
                var7.right = var8;
                var8 = 0;
                if (!var12) {
                    _fun69467_ip = 297;
                    continue _fun69467
                }
            case 294:
                var8 = var9;
            case 297:
                var7.left = var8;
                var0 = 0;
                if (!var2) {
                    _fun69467_ip = 309;
                    continue _fun69467
                }
            case 306:
                var0 = var1;
            case 309:
                var7.top = var0;
                var2 = _closure1_slot15;
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var4];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var4 = 'none';
                var0.pointerEvents = var4;
                var4 = _closure1_slot4;
                var8 = var4.absoluteFill;
                var4 = new Array(3);
                var4[0] = var8;
                var4[1] = var7;
                var4[2] = var6;
                var0.style = var4;
                if (!var5) {
                    _fun69467_ip = 445;
                    continue _fun69467
                }
            case 383:
                var7 = _closure1_slot13;
                var6 = _closure1_slot5;
                var4 = {};
                var8 = var10.liveContainer;
                var4.style = var8;
                var12 = _closure1_slot13;
                var9 = _closure1_slot1;
                var13 = _closure1_slot2;
                var8 = 30;
                var8 = var13[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var8 = var12.bind(var3)(var9, var8);
                var4.children = var8;
                var5 = var7.bind(var3)(var6, var4);
            case 445:
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot13;
                var6 = _closure1_slot5;
                var5 = {};
                var8 = var10.usernamePosition;
                var5.style = var8;
                var9 = _closure1_slot15;
                var8 = {};
                var10 = var10.usernameContainer;
                var8.style = var10;
                var13 = _closure1_slot13;
                var12 = _closure1_slot20;
                var10 = {};
                var10.participant = var14;
                var12 = var13.bind(var3)(var12, var10);
                var10 = new Array(2);
                var10[0] = var12;
                var13 = _closure1_slot13;
                var12 = _closure1_slot1;
                var16 = _closure1_slot2;
                var11 = 31;
                var11 = var16[var11];
                var12 = var12.bind(var3)(var11);
                var11 = {};
                var11.channel = var15;
                var11.participant = var14;
                var11 = var13.bind(var3)(var12, var11);
                var10[1] = var11;
                var8.children = var10;
                var8 = var9.bind(var3)(var6, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot19 = var1;
    var5 = 32;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/video_calls/native/components/CallTile.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.StreamPreviewTile = var3;
    var2.TileOverlay = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3714, 1621, 7882, 3523, 33, 1297, 3240, 671, 5726, 1568, 566, 7878, 7350, 8002, 8613, 8046, 8051, 8678, 8683, 8684, 5776, 8309, 8685, 4086, 7888, 3720, 4097, 4884, 8000, 8686, 2]);