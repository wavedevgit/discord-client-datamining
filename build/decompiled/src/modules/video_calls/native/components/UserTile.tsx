// modules/video_calls/native/components/UserTile.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var7 = var3.bind(var0)(var6);
    var _closure1_slot4 = var7;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var6 = var5[var3];
    var6 = var11.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.clearVoiceChannelEffectForUser;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VideoToggleState;
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ParticipantTypes;
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MediaEngineContextTypes;
    var _closure1_slot13 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot14 = var6;
    var6 = var3.jsxs;
    var _closure1_slot15 = var6;
    var3 = var3.Fragment;
    var _closure1_slot16 = var3;
    var3 = 11;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var6 = var8.createStyles;
    var3 = {};
    var9 = {
        'flex': 1,
        'width': '100%',
        'alignItems': 'center',
        'justifyContent': 'center',
        'overflow': 'hidden'
    };
    var10 = 12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BLACK;
    var9.backgroundColor = var12;
    var3.container = var9;
    var9 = {
        'flex': 1,
        'justifyContent': 'center',
        'alignItems': 'center',
        'alignSelf': 'stretch'
    };
    var3.imageBackground = var9;
    var9 = {
        'width': '100%',
        'flexDirection': 'row',
        'justifyContent': 'center'
    };
    var3.autoDisabledVideoWrapper = var9;
    var9 = {
        'backgroundColor': null,
        'alignItems': 'center',
        'height': 24
    };
    var12 = 13;
    var13 = var5[var12];
    var16 = var4.bind(var0)(var13);
    var14 = var16.hexWithOpacity;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.PRIMARY_700;
    var15 = 0.5;
    var13 = var14.bind(var16)(var13, var15);
    var9.backgroundColor = var13;
    var3.autoDisabledVideo = var9;
    var9 = {
        'borderRadius': null,
        'width': 24,
        'justifyContent': 'center'
    };
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.md;
    var9.borderRadius = var13;
    var3.autoDisabledVideoIconWrapper = var9;
    var9 = {
        'borderRadius': null,
        'flexDirection': 'row',
        'justifyContent': 'space-evenly',
        'paddingHorizontal': 8,
        'paddingVertical': 4,
        'alignItems': 'center'
    };
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var9.borderRadius = var13;
    var3.autoDisabledVideoTextWrapper = var9;
    var9 = {
        'position': 'absolute',
        'bottom': 8,
        'right': 8,
        'backgroundColor': null,
        'borderRadius': null,
        'width': 24,
        'height': 24,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var12 = var5[var12];
    var14 = var4.bind(var0)(var12);
    var13 = var14.hexWithOpacity;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.PRIMARY_700;
    var12 = var13.bind(var14)(var12, var15);
    var9.backgroundColor = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.md;
    var9.borderRadius = var10;
    var3.statusWrapper = var9;
    var9 = {
        'marginLeft': 8,
        'height': 20,
        'alignItems': 'center'
    };
    var3.labelText = var9;
    var3 = var6.bind(var8)(var3);
    var _closure1_slot17 = var3;
    var6 = var7.memo;
    var3 = function(arg0) { // Environment: var1
        _fun64711: for (var _fun64711_ip = 0;;) switch (_fun64711_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.streamId;
                var11 = var0.user;
                var14 = var0.resizeMode;
                var3 = var0.ringing;
                var6 = var0.avatarSize;
                var7 = var0.speaking;
                var12 = var0.gestureEnabled;
                var2 = var0.hasVideo;
                var _closure2_slot0 = var2;
                var10 = var0.guildId;
                var0 = _closure1_slot17;
                var4 = undefined;
                var8 = var0.bind(var4)();
                var _closure2_slot1 = var8;
                var0 = var11.id;
                var _closure2_slot2 = var0;
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var16 = 14;
                var9 = var18[var16];
                var21 = var17.bind(var4)(var9);
                var20 = var21.useStateFromStores;
                var9 = _closure1_slot8;
                var19 = new Array(1);
                var19[0] = var9;
                var15 = new Array(2);
                var15[0] = var2;
                var15[1] = var0;
                var9 = function() { // Environment: var5
                    _fun64712: for (var _fun64712_ip = 0;;) switch (_fun64712_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            if (!var0) {
                                _fun64712_ip = 35;
                                continue _fun64712
                            }
                        case 10:
                            var2 = _closure2_slot2;
                            var3 = _closure1_slot8;
                            var1 = var3.getId;
                            var1 = var1.bind(var3)();
                            var0 = var2 === var1;
                        case 35:
                            return var0;
                    }
                };
                var9 = var20.bind(var21)(var19, var9, var15);
                var15 = var18[var16];
                var23 = var17.bind(var4)(var15);
                var22 = var23.useStateFromStoresArray;
                var15 = _closure1_slot10;
                var21 = new Array(1);
                var21[0] = var15;
                var20 = new Array(1);
                var20[0] = var0;
                var19 = function() { // Environment: var5
                    var2 = _closure1_slot10;
                    var1 = var2.isLocalVideoAutoDisabled;
                    var0 = _closure2_slot2;
                    var1 = var1.bind(var2)(var0);
                    var0 = new Array(1);
                    var0[0] = var1;
                    return var0;
                };
                var21 = var22.bind(var23)(var21, var19, var20);
                var20 = _closure1_slot3;
                var19 = 1;
                var20 = var20.bind(var4)(var21, var19);
                var19 = 0;
                var19 = var20[var19];
                var _closure2_slot3 = var19;
                var16 = var18[var16];
                var18 = var17.bind(var4)(var16);
                var17 = var18.useStateFromStores;
                var16 = new Array(1);
                var16[0] = var15;
                var15 = new Array(1);
                var15[0] = var0;
                var0 = function() { // Environment: var5
                    _fun64714: for (var _fun64714_ip = 0;;) switch (_fun64714_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var0 = null;
                            if (!(var0 == var1)) {
                                _fun64714_ip = 28;
                                continue _fun64714
                            }
                        case 13:
                            var0 = _closure1_slot11;
                            var0 = var0.NONE;
                            _fun64714_ip = 63;
                            continue _fun64714;
                        case 28:
                            var4 = _closure1_slot10;
                            var3 = var4.getVideoToggleState;
                            var2 = _closure2_slot2;
                            var1 = _closure1_slot13;
                            var1 = var1.DEFAULT;
                            var0 = var3.bind(var4)(var2, var1);
                        case 63:
                            return var0;
                    }
                };
                var15 = var17.bind(var18)(var16, var0, var15);
                var0 = _closure1_slot11;
                var0 = var0.AUTO_PROBING;
                var0 = var15 === var0;
                var _closure2_slot4 = var0;
                if (var3) {
                    _fun64711_ip = 391;
                    continue _fun64711
                }
            case 280:
                if (!var2) {
                    _fun64711_ip = 391;
                    continue _fun64711
                }
            case 283:
                if (var0) {
                    _fun64711_ip = 391;
                    continue _fun64711
                }
            case 286:
                var3 = _closure1_slot14;
                var2 = _closure1_slot1;
                var15 = _closure1_slot2;
                var0 = 20;
                var0 = var15[var0];
                var2 = var2.bind(var4)(var0);
                var0 = {};
                var0.resizeMode = var14;
                var0.streamId = var13;
                var0.gestureEnabled = var12;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var12 = 21;
                var12 = var14[var12];
                var12 = var13.bind(var4)(var12);
                var12 = var12.VideoSpinnerContext;
                if (var9) {
                    _fun64711_ip = 363;
                    continue _fun64711
                }
            case 355:
                var9 = var12.REMOTE_VIDEO;
                _fun64711_ip = 369;
                continue _fun64711;
            case 363:
                var9 = var12.SELF_VIDEO;
            case 369:
                var0.videoSpinnerContext = var9;
                var9 = var11.id;
                var0.userId = var9;
                var0 = var3.bind(var4)(var2, var0);
                _fun64711_ip = 471;
                continue _fun64711;
            case 391:
                var3 = _closure1_slot14;
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 15;
                var1 = var9[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var8 = var8.imageBackground;
                var1.style = var8;
                var9 = var11.getAvatarURL;
                var8 = 128;
                var8 = var9.bind(var11)(var10, var8);
                var1.url = var8;
                var1.speaking = var7;
                var1.size = var6;
                var5 = function() {
                    _fun64715: for (var _fun64715_ip = 0;;) switch (_fun64715_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            if (var0) {
                                _fun64715_ip = 22;
                                continue _fun64715
                            }
                        case 10:
                            var2 = _closure2_slot4;
                            var0 = null;
                            if (!var2) {
                                _fun64715_ip = 295;
                                continue _fun64715
                            }
                        case 22:
                            var4 = _closure1_slot14;
                            var3 = _closure1_slot5;
                            var2 = {};
                            var10 = _closure2_slot1;
                            var1 = var10.autoDisabledVideoWrapper;
                            var2.style = var1;
                            var6 = _closure1_slot15;
                            var5 = {};
                            var7 = var10.autoDisabledVideo;
                            var1 = new Array(2);
                            var1[0] = var7;
                            var7 = var10.autoDisabledVideoTextWrapper;
                            var1[1] = var7;
                            var5.style = var1;
                            var12 = _closure1_slot1;
                            var14 = _closure1_slot2;
                            var11 = 16;
                            var7 = var14[var11];
                            var1 = undefined;
                            var9 = var12.bind(var1)(var7);
                            var7 = {};
                            var13 = 17;
                            var13 = var14[var13];
                            var13 = var12.bind(var1)(var13);
                            var7.source = var13;
                            var11 = var14[var11];
                            var11 = var12.bind(var1)(var11);
                            var11 = var11.Sizes;
                            var11 = var11.SMALL;
                            var7.size = var11;
                            var11 = true;
                            var7.disableColor = var11;
                            var9 = var4.bind(var1)(var9, var7);
                            var7 = new Array(2);
                            var7[0] = var9;
                            var13 = _closure1_slot0;
                            var8 = 18;
                            var8 = var14[var8];
                            var8 = var13.bind(var1)(var8);
                            var9 = var8.Text;
                            var8 = {
                                'variant': 'text-sm/normal',
                                'color': 'text-default'
                            };
                            var10 = var10.labelText;
                            var8.style = var10;
                            var10 = 19;
                            var11 = var14[var10];
                            var11 = var13.bind(var1)(var11);
                            var12 = var11.intl;
                            var11 = var12.string;
                            var10 = var14[var10];
                            var10 = var13.bind(var1)(var10);
                            var10 = var10.t;
                            var10 = var10.m2Hyj0;
                            var10 = var11.bind(var12)(var10);
                            var8.children = var10;
                            var8 = var4.bind(var1)(var9, var8);
                            var7[1] = var8;
                            var5.children = var7;
                            var5 = var6.bind(var1)(var3, var5);
                            var2.children = var5;
                            var0 = var4.bind(var1)(var3, var2);
                        case 295:
                            return var0;
                    }
                };
                var1.renderVideoDetails = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 471:
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot18 = var3;
    var6 = var7.memo;
    var3 = function(arg0) { // Environment: var1
        _fun64716: for (var _fun64716_ip = 0;;) switch (_fun64716_ip) {
            case 0:
                var3 = arg0;
                var1 = var3.muted;
                var2 = var3.deafened;
                var8 = var3.userId;
                var _closure2_slot0 = var8;
                var15 = var3.style;
                var3 = _closure1_slot17;
                var4 = undefined;
                var11 = var3.bind(var4)();
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 14;
                var3 = var6[var3];
                var7 = var5.bind(var4)(var3);
                var6 = var7.useStateFromStoresArray;
                var3 = _closure1_slot10;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = new Array(1);
                var3[0] = var8;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot10;
                    var0 = var3.isLocalMute;
                    var2 = _closure2_slot0;
                    var1 = var0.bind(var3)(var2);
                    var0 = new Array(3);
                    var0[0] = var1;
                    var1 = var3.isLocalVideoDisabled;
                    var1 = var1.bind(var3)(var2);
                    var0[1] = var1;
                    var1 = var3.isLocalVideoAutoDisabled;
                    var1 = var1.bind(var3)(var2);
                    var0[2] = var1;
                    return var0;
                };
                var5 = var6.bind(var7)(var5, var0, var3);
                var3 = _closure1_slot3;
                var0 = 3;
                var5 = var3.bind(var4)(var5, var0);
                var0 = 0;
                var3 = var5[var0];
                var0 = 1;
                var13 = var5[var0];
                var0 = 2;
                var0 = var5[var0];
                if (var3) {
                    _fun64716_ip = 190;
                    continue _fun64716
                }
            case 138:
                if (var2) {
                    _fun64716_ip = 168;
                    continue _fun64716
                }
            case 141:
                var14 = undefined;
                if (!var1) {
                    _fun64716_ip = 210;
                    continue _fun64716
                }
            case 146:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 24;
                var1 = var3[var1];
                var14 = var2.bind(var4)(var1);
                _fun64716_ip = 210;
                continue _fun64716;
            case 168:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 23;
                var1 = var3[var1];
                var14 = var2.bind(var4)(var1);
                _fun64716_ip = 210;
                continue _fun64716;
            case 190:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 22;
                var1 = var3[var1];
                var14 = var2.bind(var4)(var1);
            case 210:
                if (!var13) {
                    _fun64716_ip = 216;
                    continue _fun64716
                }
            case 213:
                var13 = !var0;
            case 216:
                if (var13) {
                    _fun64716_ip = 231;
                    continue _fun64716
                }
            case 219:
                var0 = null;
                var1 = var0 != var14;
                if (!var1) {
                    _fun64716_ip = 572;
                    continue _fun64716
                }
            case 231:
                var3 = _closure1_slot15;
                var2 = _closure1_slot16;
                var1 = {};
                var12 = null;
                var6 = null;
                if (!var13) {
                    _fun64716_ip = 366;
                    continue _fun64716
                }
            case 248:
                var8 = _closure1_slot14;
                var7 = _closure1_slot5;
                var5 = {};
                var16 = var11.statusWrapper;
                var9 = new Array(2);
                var9[0] = var16;
                var9[1] = var15;
                var5.style = var9;
                var18 = _closure1_slot1;
                var19 = _closure1_slot2;
                var17 = 16;
                var9 = var19[var17];
                var16 = var18.bind(var4)(var9);
                var9 = {};
                var20 = 25;
                var20 = var19[var20];
                var20 = var18.bind(var4)(var20);
                var9.source = var20;
                var17 = var19[var17];
                var17 = var18.bind(var4)(var17);
                var17 = var17.Sizes;
                var17 = var17.SMALL;
                var9.size = var17;
                var17 = true;
                var9.disableColor = var17;
                var9 = var8.bind(var4)(var16, var9);
                var5.children = var9;
                var6 = var8.bind(var4)(var7, var5);
            case 366:
                var5 = new Array(2);
                var5[0] = var6;
                var7 = var12 != var14;
                var6 = null;
                if (!var7) {
                    _fun64716_ip = 558;
                    continue _fun64716
                }
            case 386:
                var9 = _closure1_slot14;
                var8 = _closure1_slot5;
                var7 = {};
                var16 = var11.statusWrapper;
                var11 = new Array(3);
                var11[0] = var16;
                var11[1] = var15;
                var12 = null;
                if (!var13) {
                    _fun64716_ip = 431;
                    continue _fun64716
                }
            case 419:
                var13 = {};
                var15 = 38;
                var13.right = var15;
                var12 = var13;
            case 431:
                var11[2] = var12;
                var7.style = var11;
                var12 = _closure1_slot14;
                var15 = _closure1_slot1;
                var16 = _closure1_slot2;
                var13 = 16;
                var10 = var16[var13];
                var11 = var15.bind(var4)(var10);
                var10 = {};
                var10.source = var14;
                var13 = var16[var13];
                var13 = var15.bind(var4)(var13);
                var13 = var13.Sizes;
                var13 = var13.SMALL;
                var10.size = var13;
                var13 = 12;
                var13 = var16[var13];
                var13 = var15.bind(var4)(var13);
                var13 = var13.unsafe_rawColors;
                var13 = var13.WHITE;
                var10.color = var13;
                var13 = 22;
                var13 = var16[var13];
                var13 = var15.bind(var4)(var13);
                var13 = var14 === var13;
                var10.disableColor = var13;
                var10 = var12.bind(var4)(var11, var10);
                var7.children = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 558:
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 572:
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot19 = var3;
    var3 = 33;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/video_calls/native/components/UserTile.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun64718: for (var _fun64718_ip = 0;;) switch (_fun64718_ip) {
            case 0:
                var5 = arg0;
                var0 = var5.participant;
                var _closure2_slot0 = var0;
                var4 = var5.onSingleTap;
                var _closure2_slot1 = var4;
                var2 = var5.onDoubleTap;
                var _closure2_slot2 = var2;
                var1 = var5.onLongPress;
                var _closure2_slot3 = var1;
                var21 = var5.avatarSize;
                var24 = var5.resizeMode;
                var3 = undefined;
                if (!(var24 === var3)) {
                    _fun64718_ip = 97;
                    continue _fun64718
                }
            case 62:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 20;
                var6 = var8[var6];
                var6 = var7.bind(var3)(var6);
                var6 = var6.ResizeMode;
                var24 = var6.COVER;
            case 97:
                var11 = var5.statusStyle;
                var16 = var5.gestureEnabled;
                var17 = var5.hasNotch;
                var15 = var5.style;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var5 = _closure1_slot17;
                var7 = var5.bind(var3)();
                var5 = _closure1_slot4;
                var9 = var5.useCallback;
                var6 = new Array(2);
                var6[0] = var4;
                var6[1] = var0;
                var4 = function() { // Environment: var19
                    _fun64719: for (var _fun64719_ip = 0;;) switch (_fun64719_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var2 = var0 == var2;
                            var3 = undefined;
                            var0 = undefined;
                            if (var2) {
                                _fun64719_ip = 33;
                                continue _fun64719
                            }
                        case 20:
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot0;
                            var0 = var2.bind(var3)(var1);
                        case 33:
                            return var0;
                    }
                };
                var6 = var9.bind(var5)(var4, var6);
                var9 = var5.useCallback;
                var4 = new Array(2);
                var4[0] = var2;
                var4[1] = var0;
                var2 = function() { // Environment: var19
                    _fun64720: for (var _fun64720_ip = 0;;) switch (_fun64720_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var0 = null;
                            var2 = var0 == var2;
                            var3 = undefined;
                            var0 = undefined;
                            if (var2) {
                                _fun64720_ip = 33;
                                continue _fun64720
                            }
                        case 20:
                            var2 = _closure2_slot2;
                            var1 = _closure2_slot0;
                            var0 = var2.bind(var3)(var1);
                        case 33:
                            return var0;
                    }
                };
                var29 = var9.bind(var5)(var2, var4);
                var4 = var5.useCallback;
                var2 = new Array(2);
                var2[0] = var0;
                var2[1] = var1;
                var1 = function() { // Environment: var19
                    _fun64721: for (var _fun64721_ip = 0;;) switch (_fun64721_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var0 = null;
                            var2 = var0 == var2;
                            var3 = undefined;
                            var0 = undefined;
                            if (var2) {
                                _fun64721_ip = 33;
                                continue _fun64721
                            }
                        case 20:
                            var2 = _closure2_slot3;
                            var1 = _closure2_slot0;
                            var0 = var2.bind(var3)(var1);
                        case 33:
                            return var0;
                    }
                };
                var4 = var4.bind(var5)(var1, var2);
                var25 = var0.streamId;
                var23 = var0.ringing;
                var12 = var0.user;
                _closure2_slot4 = var12;
                var5 = var0.voiceState;
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 26;
                var1 = var9[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var9 = var0.id;
                var1.userId = var9;
                var22 = var2.bind(var3)(var1);
                var10 = _closure1_slot9;
                var2 = var10.getChannel;
                var9 = null;
                var13 = var9 == var5;
                var1 = undefined;
                if (var13) {
                    _fun64718_ip = 315;
                    continue _fun64718
                }
            case 310:
                var1 = var5.channelId;
            case 315:
                var2 = var2.bind(var10)(var1);
                var10 = var9 == var2;
                var1 = undefined;
                if (var10) {
                    _fun64718_ip = 334;
                    continue _fun64718
                }
            case 329:
                var1 = var2.guild_id;
            case 334:
                var2 = var9 != var1;
                var28 = undefined;
                if (!var2) {
                    _fun64718_ip = 346;
                    continue _fun64718
                }
            case 343:
                var28 = var1;
            case 346:
                var2 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = 27;
                var1 = var10[var1];
                var1 = var2.bind(var3)(var1);
                var26 = var1.bind(var3)(var0);
                var2 = var9 == var5;
                var1 = undefined;
                if (var2) {
                    _fun64718_ip = 390;
                    continue _fun64718
                }
            case 380:
                var2 = var5.isVoiceMuted;
                var1 = var2.bind(var5)();
            case 390:
                var14 = var9 != var1;
                if (!var14) {
                    _fun64718_ip = 400;
                    continue _fun64718
                }
            case 397:
                var14 = var1;
            case 400:
                var2 = var9 == var5;
                var1 = undefined;
                if (var2) {
                    _fun64718_ip = 419;
                    continue _fun64718
                }
            case 409:
                var2 = var5.isVoiceDeafened;
                var1 = var2.bind(var5)();
            case 419:
                var13 = var9 != var1;
                if (!var13) {
                    _fun64718_ip = 429;
                    continue _fun64718
                }
            case 426:
                var13 = var1;
            case 429:
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var10 = 14;
                var1 = var5[var10];
                var30 = var2.bind(var3)(var1);
                var27 = var30.useStateFromStores;
                var1 = _closure1_slot10;
                var20 = new Array(1);
                var20[0] = var1;
                var1 = var12.id;
                var18 = new Array(2);
                var18[0] = var1;
                var1 = var0.type;
                var18[1] = var1;
                var1 = function() { // Environment: var19
                    _fun64722: for (var _fun64722_ip = 0;;) switch (_fun64722_ip) {
                        case 0:
                            var0 = _closure2_slot4;
                            var2 = var0.id;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun64722_ip = 85;
                                continue _fun64722
                            }
                        case 21:
                            var4 = _closure1_slot10;
                            var3 = var4.isLocalVideoDisabled;
                            var2 = _closure2_slot4;
                            var2 = var2.id;
                            var7 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var5 = 28;
                            var5 = var6[var5];
                            var6 = undefined;
                            var5 = var7.bind(var6)(var5);
                            var1 = _closure2_slot0;
                            var1 = var1.type;
                            var1 = var5.bind(var6)(var1);
                            var0 = var3.bind(var4)(var2, var1);
                        case 85:
                            return var0;
                    }
                };
                var27 = var27.bind(var30)(var20, var1, var18);
                var1 = 29;
                var1 = var5[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useVoiceChatNavigationContext;
                var1 = var1.bind(var2)();
                var5 = var9 == var1;
                var2 = undefined;
                if (var5) {
                    _fun64718_ip = 537;
                    continue _fun64718
                }
            case 531:
                var2 = var1.swipeDismissRef;
            case 537:
                var1 = var0.user;
                var5 = var9 == var1;
                var18 = undefined;
                if (var5) {
                    _fun64718_ip = 556;
                    continue _fun64718
                }
            case 551:
                var18 = var1.id;
            case 556:
                _closure2_slot5 = var18;
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var10];
                var20 = var5.bind(var3)(var1);
                var10 = var20.useStateFromStores;
                var1 = _closure1_slot6;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function() { // Environment: var19
                    _fun64723: for (var _fun64723_ip = 0;;) switch (_fun64723_ip) {
                        case 0:
                            var2 = _closure2_slot5;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun64723_ip = 40;
                                continue _fun64723
                            }
                        case 16:
                            var3 = _closure1_slot6;
                            var2 = var3.getEffectForUserId;
                            var1 = _closure2_slot5;
                            var0 = var2.bind(var3)(var1);
                        case 40:
                            return var0;
                    }
                };
                var20 = var10.bind(var20)(var5, var1);
                var1 = var0.type;
                var0 = _closure1_slot12;
                var0 = var0.USER;
                var10 = var1 === var0;
                if (!var10) {
                    _fun64718_ip = 631;
                    continue _fun64718
                }
            case 627:
                var10 = var9 != var18;
            case 631:
                if (!var10) {
                    _fun64718_ip = 638;
                    continue _fun64718
                }
            case 634:
                var10 = var9 != var20;
            case 638:
                var5 = _closure1_slot1;
                var0 = _closure1_slot2;
                var1 = 30;
                var1 = var0[var1];
                var5 = var5.bind(var3)(var1);
                var1 = {};
                var1.onDoubleTapStart = var29;
                var1.onSingleTapStart = var6;
                var29 = var5.bind(var3)(var1);
                var1 = _closure1_slot0;
                var30 = 31;
                var0 = var0[var30];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Gesture;
                var0 = var1.LongPress;
                var1 = var0.bind(var1)();
                var0 = var1.onStart;
                var4 = var0.bind(var1)(var4);
                var1 = var4.minDuration;
                var0 = 800;
                var1 = var1.bind(var4)(var0);
                var6 = var1;
                if (!(var9 != var2)) {
                    _fun64718_ip = 753;
                    continue _fun64718
                }
            case 742:
                var0 = var1.requireExternalGestureToFail;
                var6 = var0.bind(var1)(var2);
            case 753:
                var2 = _closure1_slot14;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = var4[var30];
                var0 = var5.bind(var3)(var0);
                var1 = var0.GestureDetector;
                var0 = {};
                var4 = var4[var30];
                var4 = var5.bind(var3)(var4);
                var5 = var4.Gesture;
                var4 = var5.Simultaneous;
                var4 = var4.bind(var5)(var6, var29);
                var0.gesture = var4;
                var6 = _closure1_slot15;
                var5 = _closure1_slot5;
                var4 = {};
                var29 = var7.container;
                var7 = new Array(2);
                var7[0] = var29;
                var7[1] = var15;
                var4.style = var7;
                var15 = _closure1_slot18;
                var7 = {};
                var7.guildId = var28;
                if (!var26) {
                    _fun64718_ip = 861;
                    continue _fun64718
                }
            case 858:
                var26 = !var27;
            case 861:
                var7.hasVideo = var26;
                var7.streamId = var25;
                var7.user = var12;
                var7.resizeMode = var24;
                var7.ringing = var23;
                var7.speaking = var22;
                var7.avatarSize = var21;
                var7.gestureEnabled = var16;
                var15 = var2.bind(var3)(var15, var7);
                var7 = new Array(3);
                var7[0] = var15;
                var9 = null;
                if (!var10) {
                    _fun64718_ip = 974;
                    continue _fun64718
                }
            case 918:
                var16 = _closure1_slot14;
                var15 = _closure1_slot1;
                var21 = _closure1_slot2;
                var10 = 32;
                var10 = var21[var10];
                var15 = var15.bind(var3)(var10);
                var10 = {};
                var10.voiceChannelEffect = var20;
                var19 = function() {
                    var2 = _closure1_slot7;
                    var1 = _closure2_slot5;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var10.onComplete = var19;
                var10.userId = var18;
                var10.hasNotch = var17;
                var9 = var16.bind(var3)(var15, var10);
            case 974:
                var7[1] = var9;
                var10 = _closure1_slot14;
                var9 = _closure1_slot19;
                var8 = {};
                var8.muted = var14;
                var8.deafened = var13;
                var12 = var12.id;
                var8.userId = var12;
                var8.style = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[2] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 8047, 1216, 1372, 3476, 660, 3523, 3510, 33, 1297, 671, 3240, 566, 5738, 4086, 7512, 3941, 1234, 8028, 8030, 6449, 5765, 5766, 8048, 3955, 8045, 8049, 7996, 7999, 4961, 8050, 2]);