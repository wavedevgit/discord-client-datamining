// modules/voice_panel/native/controls/activities/ActivityShelfItem.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun111346: for (var _fun111346_ip = 0;;) switch (_fun111346_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.action;
                var8 = var0.applicationId;
                var12 = var0.context;
                var1 = var0.activityItem;
                var7 = var0.launchingComponentId;
                var4 = _closure1_slot1;
                var0 = _closure1_slot2;
                var2 = 9;
                var2 = var0[var2];
                var3 = undefined;
                var4 = var4.bind(var3)(var2);
                var2 = {};
                var2.applicationId = var8;
                var2.context = var12;
                var2.launchingComponentId = var7;
                var2 = var4.bind(var3)(var2);
                var8 = var2.submitting;
                var2 = _closure1_slot10;
                var13 = var2.bind(var3)();
                var1 = var1.application;
                var10 = var1.id;
                var9 = var1.name;
                var1 = _closure1_slot0;
                var11 = 10;
                var0 = var0[var11];
                var0 = var1.bind(var3)(var0);
                var0 = var0.ActivityAction;
                var0 = var0.JOIN;
                if (!(var0 !== var6)) {
                    _fun111346_ip = 173;
                    continue _fun111346
                }
            case 136:
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var11];
                var0 = var1.bind(var3)(var0);
                var0 = var0.ActivityAction;
                var0 = var0.LEAVE;
                if (!(var0 !== var6)) {
                    _fun111346_ip = 173;
                    continue _fun111346
                }
            case 169:
                var0 = null;
                return var0;
            case 173:
                var2 = _closure1_slot9;
                var1 = _closure1_slot8;
                var0 = {};
                var7 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var11];
                var4 = var7.bind(var3)(var4);
                var4 = var4.ActivityAction;
                var4 = var4.LEAVE;
                var6 = var6 === var4;
                if (!var6) {
                    _fun111346_ip = 261;
                    continue _fun111346
                }
            case 219:
                var11 = _closure1_slot7;
                var7 = _closure1_slot1;
                var14 = _closure1_slot2;
                var4 = 11;
                var4 = var14[var4];
                var7 = var7.bind(var3)(var4);
                var4 = {};
                var13 = var13.ongoingActivityJoinedContainer;
                var4.style = var13;
                var6 = var11.bind(var3)(var7, var4);
            case 261:
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot7;
                var6 = _closure1_slot1;
                var11 = _closure1_slot2;
                var5 = 12;
                var5 = var11[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var14 = var12.type;
                var13 = 'channel';
                var11 = undefined;
                if (!(var13 === var14)) {
                    _fun111346_ip = 320;
                    continue _fun111346
                }
            case 310:
                var12 = var12.channel;
                var11 = var12.id;
            case 320:
                var5.channelId = var11;
                var5.applicationId = var10;
                var5.applicationName = var9;
                var5.submitting = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function arg0() {
        _fun111347: for (var _fun111347_ip = 0;;) switch (_fun111347_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.action;
                var12 = var0.activityItem;
                var5 = var0.channelId;
                var4 = var0.guildId;
                var0 = _closure1_slot10;
                var3 = undefined;
                var8 = var0.bind(var3)();
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 24;
                var0 = var2[var0];
                var6 = var1.bind(var3)(var0);
                var0 = var12.application;
                var0 = var0.id;
                var17 = var6.bind(var3)(var0, var5);
                var0 = 25;
                var0 = var2[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.getName;
                var9 = null;
                var6 = var9 == var17;
                var0 = undefined;
                if (var6) {
                    _fun111347_ip = 108;
                    continue _fun111347
                }
            case 102:
                var6 = 0;
                var0 = var17[var6];
            case 108:
                var16 = var1.bind(var2)(var4, var5, var0);
                var2 = _closure1_slot9;
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                var0 = 11;
                var0 = var14[var0];
                var1 = var13.bind(var3)(var0);
                var0 = {};
                var5 = var8.participantsContainer;
                var4 = new Array(2);
                var4[0] = var5;
                var5 = var8.overlayBubble;
                var4[1] = var5;
                var0.style = var4;
                var6 = _closure1_slot7;
                var7 = 22;
                var4 = var14[var7];
                var5 = var13.bind(var3)(var4);
                var4 = {};
                var15 = 26;
                var15 = var14[var15];
                var15 = var13.bind(var3)(var15);
                var4.source = var15;
                var7 = var14[var7];
                var7 = var13.bind(var3)(var7);
                var7 = var7.Sizes;
                var7 = var7.EXTRA_SMALL;
                var4.size = var7;
                var7 = 'white';
                var4.color = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot7;
                var13 = _closure1_slot0;
                var5 = 27;
                var5 = var14[var5];
                var5 = var13.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'lineClamp': 1,
                    'style': null,
                    'variant': 'text-xxs/medium',
                    'color': 'always-white'
                };
                var18 = 1;
                var8 = var8.participantsText;
                var5.style = var8;
                var8 = 10;
                var8 = var14[var8];
                var8 = var13.bind(var3)(var8);
                var8 = var8.ActivityAction;
                var8 = var8.START;
                if (!(var11 !== var8)) {
                    _fun111347_ip = 422;
                    continue _fun111347
                }
            case 332:
                var11 = var17.length;
                var8 = var16;
                if (!(!(var11 <= var18))) {
                    _fun111347_ip = 420;
                    continue _fun111347
                }
            case 344:
                var13 = _closure1_slot0;
                var19 = _closure1_slot2;
                var11 = 29;
                var14 = var19[var11];
                var14 = var13.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.formatToPlainString;
                var11 = var19[var11];
                var11 = var13.bind(var3)(var11);
                var11 = var11.t;
                var13 = var11.cpe6CK;
                var11 = {};
                var17 = var17.length;
                var17 = var17 - var18;
                var11.count = var17;
                var11.username = var16;
                var8 = var14.bind(var15)(var13, var11);
            case 420:
                _fun111347_ip = 476;
                continue _fun111347;
            case 422:
                var11 = _closure1_slot0;
                var13 = _closure1_slot2;
                var10 = 28;
                var10 = var13[var10];
                var11 = var11.bind(var3)(var10);
                var10 = var11.getItemSubtitleForMaxPlayersShort;
                var12 = var12.application;
                var12 = var12.maxParticipants;
                var13 = var9 != var12;
                var9 = 0;
                if (!var13) {
                    _fun111347_ip = 471;
                    continue _fun111347
                }
            case 468:
                var9 = var12;
            case 471:
                var8 = var10.bind(var11)(var9);
            case 476:
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ANDROID_FOREGROUND_RIPPLE;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var6 = var3.Fragment;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var11 = 5;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AvatarSizes;
    var12 = var3.SIZE_16;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'borderRadius': null,
        'overflow': 'hidden',
        'height': 120,
        'position': 'relative',
        'backgroundColor': 'black',
        'justifyContent': 'center'
    };
    var9 = 7;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.md;
    var8.borderRadius = var13;
    var3.container = var8;
    var8 = {
        'alignItems': 'center',
        'justifyContent': 'center',
        'backgroundColor': 'black'
    };
    var3.imageInnerContainer = var8;
    var8 = {
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var3.imageOuterContainer = var8;
    var8 = {
        'position': 'absolute',
        'width': '100%',
        'height': '100%',
        'backgroundColor': 'rgba(255,255,255,0.5)',
        'zIndex': 1
    };
    var3.ongoingActivityJoinedContainer = var8;
    var8 = {};
    var13 = 8;
    var13 = var5[var13];
    var16 = var4.bind(var0)(var13);
    var15 = var16.hexWithOpacity;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.unsafe_rawColors;
    var14 = var13.BLACK;
    var13 = 0.5;
    var13 = var15.bind(var16)(var14, var13);
    var8.backgroundColor = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var8.borderRadius = var13;
    var3.overlayBubble = var8;
    var13 = 20;
    var8 = {
        'paddingHorizontal': 8,
        'position': 'absolute',
        'left': 8,
        'bottom': 8,
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'center',
        'height': 20
    };
    var3.participantsContainer = var8;
    var8 = {
        'marginLeft': 4,
        'lineHeight': 20
    };
    var3.participantsText = var8;
    var8 = {};
    var8.height = var13;
    var3.participants = var8;
    var8 = {};
    var11 = var5[var11];
    var11 = var4.bind(var0)(var11);
    var11 = var11.AVATAR_SIZE_MAP;
    var11 = var11[var12];
    var8.height = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MOD_NORMAL;
    var8.backgroundColor = var11;
    var3.overflow = var8;
    var8 = {
        'paddingVertical': 2,
        'paddingHorizontal': 4,
        'position': 'absolute',
        'top': 8,
        'right': 8
    };
    var3.premiumLockedActivityIndicator = var8;
    var8 = {
        'position': 'absolute',
        'top': 4,
        'right': 4,
        'width': 22,
        'height': 22,
        'borderRadius': null,
        'backgroundColor': null,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.md;
    var8.borderRadius = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MOD_STRONG;
    var8.backgroundColor = var11;
    var3.developerIconContainer = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.WHITE;
    var8.color = var9;
    var3.developerIconColor = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 30;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/controls/activities/ActivityShelfItem.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun111348: for (var _fun111348_ip = 0;;) switch (_fun111348_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.itemDimensions;
                var9 = var1.activityItem;
                var _closure2_slot0 = var9;
                var26 = var1.context;
                var15 = var1.guildId;
                var14 = var1.locationObject;
                var11 = var1.onActivityItemSelected;
                var1 = var1.disableBadges;
                var3 = undefined;
                if (!(var1 === var3)) {
                    _fun111348_ip = 57;
                    continue _fun111348
                }
            case 55:
                var1 = false;
            case 57:
                var _closure2_slot1 = var3;
                var4 = _closure1_slot10;
                var21 = var4.bind(var3)();
                var5 = var26.type;
                var10 = null;
                var4 = 'channel';
                var13 = null;
                if (!(var4 === var5)) {
                    _fun111348_ip = 94;
                    continue _fun111348
                }
            case 89:
                var13 = var26.channel;
            case 94:
                var27 = var2.width;
                var24 = var2.height;
                var5 = _closure1_slot1;
                var12 = _closure1_slot2;
                var2 = 13;
                var2 = var12[var2];
                var2 = var5.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var7 = var27 * var2;
                var4 = _closure1_slot3;
                var2 = var4.useId;
                var25 = var2.bind(var4)();
                var8 = 10;
                var2 = var12[var8];
                var4 = var5.bind(var3)(var2);
                var2 = {};
                var2.activityItem = var9;
                var2.context = var26;
                var2.guildId = var15;
                var2.locationObject = var14;
                var2.onActivityItemSelected = var11;
                var11 = 14;
                var11 = var12[var11];
                var11 = var5.bind(var3)(var11);
                var2.embeddedActivitiesManager = var11;
                var2.backgroundResolution = var7;
                var11 = ['embedded_cover'];
                var2.assetNames = var11;
                var2.launchingComponentId = var25;
                var14 = _closure1_slot0;
                var11 = 15;
                var11 = var12[var11];
                var11 = var14.bind(var3)(var11);
                var11 = var11.CommandOrigin;
                var11 = var11.VOICE_UI;
                var2.commandOrigin = var11;
                var2 = var4.bind(var3)(var2);
                var29 = var2.imageBackground;
                var11 = var2.activityAction;
                var4 = var2.onActivityItemSelected;
                var20 = var2.labelType;
                var2 = 16;
                var2 = var12[var2];
                var5 = var5.bind(var3)(var2);
                var2 = {};
                var12 = var9.application;
                var12 = var12.id;
                var2.applicationId = var12;
                var2.size = var7;
                var7 = ['embedded_background'];
                var2.names = var7;
                var28 = var5.bind(var3)(var2);
                var17 = !var1;
                if (!var17) {
                    _fun111348_ip = 419;
                    continue _fun111348
                }
            case 344:
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var2 = var1[var8];
                var2 = var5.bind(var3)(var2);
                var2 = var2.ActivityAction;
                var7 = var2.LEAVE;
                var2 = new Array(2);
                var2[0] = var7;
                var1 = var1[var8];
                var1 = var5.bind(var3)(var1);
                var1 = var1.ActivityAction;
                var1 = var1.JOIN;
                var2[1] = var1;
                var1 = var2.includes;
                var1 = var1.bind(var2)(var11);
                var17 = !var1;
            case 419:
                _closure2_slot1 = var17;
                var31 = _closure1_slot0;
                var30 = _closure1_slot2;
                var1 = 17;
                var1 = var30[var1];
                var7 = var31.bind(var3)(var1);
                var5 = var7.useStateFromStores;
                var1 = _closure1_slot4;
                var2 = new Array(2);
                var2[0] = var1;
                var1 = _closure1_slot5;
                var2[1] = var1;
                var1 = var9.application;
                var12 = var1.id;
                var1 = new Array(2);
                var1[0] = var12;
                var1[1] = var17;
                var0 = function() { // Environment: var0
                    _fun111349: for (var _fun111349_ip = 0;;) switch (_fun111349_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            if (!var0) {
                                _fun111349_ip = 77;
                                continue _fun111349
                            }
                        case 10:
                            var5 = _closure1_slot4;
                            var4 = var5.inDevModeForApplication;
                            var1 = _closure2_slot0;
                            var1 = var1.application;
                            var1 = var1.id;
                            var1 = var4.bind(var5)(var1);
                            if (var1) {
                                _fun111349_ip = 74;
                                continue _fun111349
                            }
                        case 45:
                            var4 = _closure1_slot5;
                            var3 = var4.inTestModeForApplication;
                            var2 = _closure2_slot0;
                            var2 = var2.application;
                            var2 = var2.id;
                            var1 = var3.bind(var4)(var2);
                        case 74:
                            var0 = var1;
                        case 77:
                            return var0;
                    }
                };
                var16 = var5.bind(var7)(var2, var0, var1);
                var2 = _closure1_slot9;
                var0 = 18;
                var0 = var30[var0];
                var0 = var31.bind(var3)(var0);
                var1 = var0.PressableOpacity;
                var0 = {};
                var5 = 0.7;
                var0.activeOpacity = var5;
                var0.onPress = var4;
                var4 = var30[var8];
                var4 = var31.bind(var3)(var4);
                var4 = var4.ActivityAction;
                var4 = var4.LEAVE;
                var4 = var11 === var4;
                var0.disabled = var4;
                var4 = _closure1_slot6;
                var0.androidRippleConfig = var4;
                var5 = var21.container;
                var4 = new Array(2);
                var4[0] = var5;
                var5 = {};
                var5.width = var27;
                var5.height = var24;
                var4[1] = var5;
                var0.style = var4;
                var7 = _closure1_slot9;
                var4 = 19;
                var4 = var30[var4];
                var4 = var31.bind(var3)(var4);
                var5 = var4.ThemeContextProvider;
                var4 = {};
                var12 = 'dark';
                var4.theme = var12;
                var18 = _closure1_slot9;
                var22 = _closure1_slot1;
                var15 = 11;
                var12 = var30[var15];
                var14 = var22.bind(var3)(var12);
                var12 = {};
                var19 = var21.imageOuterContainer;
                var12.style = var19;
                var23 = _closure1_slot7;
                var19 = 20;
                var19 = var30[var19];
                var22 = var22.bind(var3)(var19);
                var19 = {};
                var32 = var9.application;
                var32 = var32.name;
                var19.accessibilityLabel = var32;
                var30 = var30[var8];
                var30 = var31.bind(var3)(var30);
                var30 = var30.ActivityAction;
                var30 = var30.START;
                if (!(var11 === var30)) {
                    _fun111348_ip = 741;
                    continue _fun111348
                }
            case 738:
                var28 = var29;
            case 741:
                var19.imageBackground = var28;
                var24 = var27 / var24;
                var19.aspectRatio = var24;
                var22 = var23.bind(var3)(var22, var19);
                var19 = new Array(2);
                var19[0] = var22;
                var24 = _closure1_slot7;
                var23 = _closure1_slot11;
                var22 = {};
                var22.action = var11;
                var27 = var9.application;
                var27 = var27.id;
                var22.applicationId = var27;
                var22.context = var26;
                var22.activityItem = var9;
                var22.launchingComponentId = var25;
                var22 = var24.bind(var3)(var23, var22);
                var19[1] = var22;
                var12.children = var19;
                var14 = var18.bind(var3)(var14, var12);
                var12 = new Array(3);
                var12[0] = var14;
                var14 = null;
                if (!var17) {
                    _fun111348_ip = 881;
                    continue _fun111348
                }
            case 844:
                var19 = _closure1_slot7;
                var18 = _closure1_slot1;
                var22 = _closure1_slot2;
                var17 = 21;
                var17 = var22[var17];
                var18 = var18.bind(var3)(var17);
                var17 = {};
                var17.labelType = var20;
                var14 = var19.bind(var3)(var18, var17);
            case 881:
                var12[1] = var14;
                var14 = null;
                if (!var16) {
                    _fun111348_ip = 1016;
                    continue _fun111348
                }
            case 893:
                var17 = _closure1_slot7;
                var23 = _closure1_slot1;
                var24 = _closure1_slot2;
                var15 = var24[var15];
                var16 = var23.bind(var3)(var15);
                var15 = {};
                var18 = var21.developerIconContainer;
                var15.style = var18;
                var20 = _closure1_slot7;
                var22 = 22;
                var18 = var24[var22];
                var19 = var23.bind(var3)(var18);
                var18 = {};
                var22 = var24[var22];
                var22 = var23.bind(var3)(var22);
                var22 = var22.Sizes;
                var22 = var22.REFRESH_SMALL_16;
                var18.size = var22;
                var22 = 23;
                var22 = var24[var22];
                var22 = var23.bind(var3)(var22);
                var18.source = var22;
                var21 = var21.developerIconColor;
                var21 = var21.color;
                var18.color = var21;
                var18 = var20.bind(var3)(var19, var18);
                var15.children = var18;
                var14 = var17.bind(var3)(var16, var15);
            case 1016:
                var12[2] = var14;
                var4.children = var12;
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var8];
                var5 = var7.bind(var3)(var5);
                var5 = var5.ActivityAction;
                var5 = var5.START;
                var5 = var11 === var5;
                if (!var5) {
                    _fun111348_ip = 1152;
                    continue _fun111348
                }
            case 1074:
                var8 = _closure1_slot7;
                var7 = _closure1_slot12;
                var6 = {};
                var6.action = var11;
                var12 = var10 == var13;
                var11 = undefined;
                if (var12) {
                    _fun111348_ip = 1102;
                    continue _fun111348
                }
            case 1097:
                var11 = var13.id;
            case 1102:
                var6.channelId = var11;
                var12 = var10 == var13;
                var11 = undefined;
                if (var12) {
                    _fun111348_ip = 1125;
                    continue _fun111348
                }
            case 1115:
                var12 = var13.getGuildId;
                var11 = var12.bind(var13)();
            case 1125:
                var12 = var10 != var11;
                var10 = undefined;
                if (!var12) {
                    _fun111348_ip = 1137;
                    continue _fun111348
                }
            case 1134:
                var10 = var11;
            case 1137:
                var6.guildId = var10;
                var6.activityItem = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 1152:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 7185, 7186, 4839, 33, 5418, 1297, 671, 3201, 13900, 13823, 6421, 14278, 1586, 7907, 4513, 8032, 566, 4867, 3120, 14277, 13849, 4047, 14281, 14279, 3922, 11839, 3902, 13904, 1234, 2]);