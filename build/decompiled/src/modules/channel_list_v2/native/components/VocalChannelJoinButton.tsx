// modules/channel_list_v2/native/components/VocalChannelJoinButton.tsx
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.View;
    var _closure1_slot4 = var8;
    var3 = var3.Pressable;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.NOOP;
    var _closure1_slot8 = var7;
    var3 = var3.Permissions;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = function(arg0, arg1) { // Environment: var1
        _fun90330: for (var _fun90330_ip = 0;;) switch (_fun90330_ip) {
            case 0:
                var8 = arg1;
                var0 = {};
                var1 = {};
                var6 = _closure1_slot1;
                var3 = _closure1_slot2;
                var5 = 7;
                var7 = var3[var5];
                var4 = undefined;
                var7 = var6.bind(var4)(var7);
                var7 = var7.radii;
                var7 = var7.xxl;
                var1.borderRadius = var7;
                var7 = var3[var5];
                var7 = var6.bind(var4)(var7);
                var7 = var7.spacing;
                var7 = var7.PX_8;
                var1.paddingHorizontal = var7;
                var7 = var3[var5];
                var7 = var6.bind(var4)(var7);
                var7 = var7.spacing;
                var7 = var7.PX_4;
                var1.paddingVertical = var7;
                var7 = var3[var5];
                var7 = var6.bind(var4)(var7);
                var7 = var7.spacing;
                var7 = var7.PX_4;
                var7 = -var7;
                var1.marginVertical = var7;
                var3 = var3[var5];
                var3 = var6.bind(var4)(var3);
                var3 = var3.colors;
                var3 = var3.CONTROL_SECONDARY_BACKGROUND_DEFAULT;
                var1.backgroundColor = var3;
                var3 = 28;
                var1.minHeight = var3;
                var3 = 'center';
                var1.justifyContent = var3;
                var6 = 1;
                var7 = arg0;
                var3 = var6;
                if (!var7) {
                    _fun90330_ip = 178;
                    continue _fun90330
                }
            case 176:
                var3 = 0;
            case 178:
                var1.elevation = var3;
                var3 = 4;
                var1.shadowRadius = var3;
                var7 = {
                    'width': 0,
                    'height': 1
                };
                var1.shadowOffset = var7;
                var9 = _closure1_slot1;
                var7 = _closure1_slot2;
                var7 = var7[var5];
                var7 = var9.bind(var4)(var7);
                var7 = var7.colors;
                var7 = var7.BLACK;
                var1.shadowColor = var7;
                var7 = 0.14;
                if (!var8) {
                    _fun90330_ip = 262;
                    continue _fun90330
                }
            case 252:
                var7 = 0.08;
            case 262:
                var1.shadowOpacity = var7;
                var7 = 'rgba(255, 255, 255, 0.14)';
                if (!var8) {
                    _fun90330_ip = 282;
                    continue _fun90330
                }
            case 276:
                var7 = 'rgba(0, 0, 0, 0.08)';
            case 282:
                var1.borderColor = var7;
                var1.borderWidth = var6;
                var0.joinButton = var1;
                var1 = {
                    'width': 'auto',
                    'alignItems': 'center'
                };
                var0.joinButtonContent = var1;
                var1 = {};
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = var8[var5];
                var6 = var7.bind(var4)(var6);
                var6 = var6.colors;
                var6 = var6.BACKGROUND_FEEDBACK_NOTIFICATION;
                var1.backgroundColor = var6;
                var0.joinButtonLive = var1;
                var1 = {};
                var6 = 'uppercase';
                var1.textTransform = var6;
                var0.joinButtonLiveText = var1;
                var1 = {};
                var6 = var8[var5];
                var6 = var7.bind(var4)(var6);
                var6 = var6.colors;
                var6 = var6.STATUS_POSITIVE;
                var1.backgroundColor = var6;
                var0.joinButtonActive = var1;
                var1 = {
                    'marginRight': 2,
                    'flex': 1,
                    'alignItems': 'center',
                    'justifyContent': 'center'
                };
                var0.joinButtonIconWrapper = var1;
                var1 = {};
                var6 = var8[var5];
                var6 = var7.bind(var4)(var6);
                var6 = var6.colors;
                var6 = var6.WHITE;
                var1.tintColor = var6;
                var0.joinButtonIconActive = var1;
                var1 = {};
                var6 = var8[var5];
                var6 = var7.bind(var4)(var6);
                var6 = var6.colors;
                var6 = var6.INTERACTIVE_TEXT_DEFAULT;
                var1.tintColor = var6;
                var0.joinButtonIconInactive = var1;
                var1 = {
                    'marginTop': null,
                    'alignSelf': 'center',
                    'maxWidth': 64
                };
                var7 = _closure1_slot0;
                var6 = 8;
                var6 = var8[var6];
                var7 = var7.bind(var4)(var6);
                var6 = var7.isAndroid;
                var6 = var6.bind(var7)();
                var3 = 0;
                if (!var6) {
                    _fun90330_ip = 536;
                    continue _fun90330
                }
            case 530:
                var3 = -2;
            case 536:
                var1.marginTop = var3;
                var0.joinButtonText = var1;
                var1 = {
                    'backgroundColor': null,
                    'width': 8,
                    'height': 8
                };
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var6 = var2[var5];
                var6 = var3.bind(var4)(var6);
                var6 = var6.colors;
                var6 = var6.WHITE;
                var1.backgroundColor = var6;
                var2 = var2[var5];
                var2 = var3.bind(var4)(var2);
                var2 = var2.radii;
                var2 = var2.round;
                var1.borderRadius = var2;
                var0.liveIcon = var1;
                return var0;
        }
    };
    var3 = var7.bind(var8)(var3);
    var _closure1_slot11 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun90331: for (var _fun90331_ip = 0;;) switch (_fun90331_ip) {
            case 0:
                var0 = arg0;
                var17 = var0.channel;
                var _closure2_slot0 = var17;
                var18 = var0.voiceStates;
                var5 = undefined;
                if (!(var18 === var5)) {
                    _fun90331_ip = 30;
                    continue _fun90331
                }
            case 26:
                var18 = new Array(0);
            case 30:
                var _closure2_slot1 = var18;
                var8 = var0.noIcon;
                var1 = var0.small;
                if (!(var1 === var5)) {
                    _fun90331_ip = 54;
                    continue _fun90331
                }
            case 52:
                var1 = false;
            case 54:
                var2 = _closure1_slot1;
                var10 = _closure1_slot2;
                var0 = 9;
                var0 = var10[var0];
                var0 = var2.bind(var5)(var0);
                var4 = var0.bind(var5)();
                var0 = 10;
                var0 = var10[var0];
                var0 = var2.bind(var5)(var0);
                var9 = var0.bind(var5)();
                var2 = _closure1_slot11;
                var3 = _closure1_slot0;
                var0 = 11;
                var0 = var10[var0];
                var7 = var3.bind(var5)(var0);
                var0 = var7.isThemeLight;
                var0 = var0.bind(var7)(var9);
                var13 = var2.bind(var5)(var4, var0);
                var0 = 12;
                var0 = var10[var0];
                var2 = var3.bind(var5)(var0);
                var0 = var2.useIsConnectedToVoiceChannel;
                var7 = var0.bind(var2)(var17);
                var12 = 13;
                var0 = var10[var12];
                var9 = var3.bind(var5)(var0);
                var4 = var9.useStateFromStores;
                var0 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var6
                    var3 = _closure1_slot6;
                    var2 = var3.can;
                    var0 = _closure1_slot9;
                    var1 = var0.CONNECT;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = !var0;
                    return var0;
                };
                var4 = var4.bind(var9)(var2, var0);
                var0 = 14;
                var0 = var10[var0];
                var14 = var3.bind(var5)(var0);
                var9 = var14.useStageParticipantsCount;
                var2 = var17.id;
                var0 = 15;
                var0 = var10[var0];
                var0 = var3.bind(var5)(var0);
                var0 = var0.StageChannelParticipantNamedIndex;
                var0 = var0.AUDIENCE;
                var2 = var9.bind(var14)(var2, var0);
                var0 = var17.isGuildStageVoice;
                var9 = var0.bind(var17)();
                var0 = 16;
                var0 = var10[var0];
                var10 = var3.bind(var5)(var0);
                var3 = var10.useStageHasMedia;
                var0 = var17.id;
                var3 = var3.bind(var10)(var0);
                if (!var3) {
                    _fun90331_ip = 296;
                    continue _fun90331
                }
            case 293:
                var3 = var9;
            case 296:
                var10 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var12];
                var14 = var10.bind(var5)(var0);
                var12 = var14.useStateFromStores;
                var0 = _closure1_slot7;
                var10 = new Array(1);
                var10[0] = var0;
                var0 = function() { // Environment: var6
                    var2 = _closure1_slot7;
                    var1 = var2.hasVideo;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var10 = var12.bind(var14)(var10, var0);
                var0 = var18.length;
                var14 = var2 + var0;
                var0 = 0;
                var12 = null;
                var2 = 0;
                if (!(var12 != var14)) {
                    _fun90331_ip = 365;
                    continue _fun90331
                }
            case 362:
                var2 = var14;
            case 365:
                var16 = _closure1_slot3;
                var15 = var16.useMemo;
                var14 = new Array(1);
                var14[0] = var18;
                var6 = function() { // Environment: var6
                    _fun90334: for (var _fun90334_ip = 0;;) switch (_fun90334_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var1 = null;
                            var3 = var1 == var0;
                            var0 = undefined;
                            if (var3) {
                                _fun90334_ip = 41;
                                continue _fun90334
                            }
                        case 18:
                            var4 = _closure2_slot1;
                            var3 = var4.find;
                            var2 = function(arg0) { // Environment: var2
                                var0 = arg0;
                                var0 = var0.voiceState;
                                var0 = var0.selfStream;
                                return var0;
                            };
                            var0 = var3.bind(var4)(var2);
                        case 41:
                            var0 = var1 != var0;
                            return var0;
                    }
                };
                var6 = var15.bind(var16)(var6, var14);
                var16 = var10;
                if (var16) {
                    _fun90331_ip = 404;
                    continue _fun90331
                }
            case 401:
                var16 = var3;
            case 404:
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var10 = 17;
                var3 = var15[var10];
                var19 = var14.bind(var5)(var3);
                var18 = var19.useConnectedUserLimit;
                var3 = {};
                var3.channel = var17;
                var3.video = var16;
                var3 = var18.bind(var19)(var3);
                var10 = var15[var10];
                var15 = var14.bind(var5)(var10);
                var14 = var15.useConnectedUserLimitFormatted;
                var10 = {};
                var10.channel = var17;
                var10.video = var16;
                var10.userCount = var2;
                var10 = var14.bind(var15)(var10);
                var14 = !var4;
                if (!var14) {
                    _fun90331_ip = 491;
                    continue _fun90331
                }
            case 488:
                var14 = !var7;
            case 491:
                if (!var14) {
                    _fun90331_ip = 498;
                    continue _fun90331
                }
            case 494:
                var14 = var12 != var10;
            case 498:
                if (!var14) {
                    _fun90331_ip = 505;
                    continue _fun90331
                }
            case 501:
                var14 = var2 > var0;
            case 505:
                if (!var14) {
                    _fun90331_ip = 526;
                    continue _fun90331
                }
            case 508:
                var0 = 2;
                var3 = var3 / var0;
                var0 = 1;
                var0 = var3 + var0;
                var14 = var2 >= var0;
            case 526:
                var0 = null;
                if (var7) {
                    _fun90331_ip = 1090;
                    continue _fun90331
                }
            case 534:
                var4 = _closure1_slot10;
                if (var1) {
                    _fun90331_ip = 893;
                    continue _fun90331
                }
            case 544:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 20;
                var1 = var3[var1];
                var1 = var2.bind(var5)(var1);
                var2 = var1.Button;
                var1 = {};
                var3 = var10;
                if (var14) {
                    _fun90331_ip = 662;
                    continue _fun90331
                }
            case 578:
                var16 = _closure1_slot0;
                var19 = _closure1_slot2;
                var15 = 19;
                var17 = var19[var15];
                var17 = var16.bind(var5)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var15 = var19[var15];
                var15 = var16.bind(var5)(var15);
                var16 = var15.t;
                if (var6) {
                    _fun90331_ip = 638;
                    continue _fun90331
                }
            case 625:
                var15 = var16.VJlc0S;
                var15 = var17.bind(var18)(var15);
                _fun90331_ip = 659;
                continue _fun90331;
            case 638:
                var16 = var16.dI3q4h;
                var17 = var17.bind(var18)(var16);
                var16 = var17.toUpperCase;
                var15 = var16.bind(var17)();
            case 659:
                var3 = var15;
            case 662:
                var1.text = var3;
                var3 = undefined;
                if (var8) {
                    _fun90331_ip = 804;
                    continue _fun90331
                }
            case 674:
                if (var7) {
                    _fun90331_ip = 688;
                    continue _fun90331
                }
            case 677:
                if (var6) {
                    _fun90331_ip = 688;
                    continue _fun90331
                }
            case 680:
                var8 = var13.joinButtonIconInactive;
                _fun90331_ip = 694;
                continue _fun90331;
            case 688:
                var8 = var13.joinButtonIconActive;
            case 694:
                var16 = new Array(2);
                var16[0] = var8;
                var8 = {
                    'marginRight': 3,
                    'marginLeft': 4294967295
                };
                var16[1] = var8;
                if (!var6) {
                    _fun90331_ip = 728;
                    continue _fun90331
                }
            case 723:
                var8 = undefined;
                if (!var14) {
                    _fun90331_ip = 801;
                    continue _fun90331
                }
            case 728:
                var14 = _closure1_slot0;
                var17 = _closure1_slot2;
                if (var9) {
                    _fun90331_ip = 759;
                    continue _fun90331
                }
            case 739:
                var9 = 22;
                var9 = var17[var9];
                var9 = var14.bind(var5)(var9);
                var15 = var9.VoiceNormalIcon;
                _fun90331_ip = 777;
                continue _fun90331;
            case 759:
                var9 = 21;
                var9 = var17[var9];
                var9 = var14.bind(var5)(var9);
                var15 = var9.StageIcon;
            case 777:
                var14 = _closure1_slot10;
                var9 = {};
                var17 = 'xs';
                var9.size = var17;
                var9.style = var16;
                var8 = var14.bind(var5)(var15, var9);
            case 801:
                var3 = var8;
            case 804:
                var1.icon = var3;
                var3 = 'sm';
                var1.size = var3;
                var3 = 'destructive';
                if (var6) {
                    _fun90331_ip = 839;
                    continue _fun90331
                }
            case 825:
                var6 = 'tertiary';
                if (!var7) {
                    _fun90331_ip = 836;
                    continue _fun90331
                }
            case 832:
                var6 = 'active';
            case 836:
                var3 = var6;
            case 839:
                var1.variant = var3;
                var3 = _closure1_slot8;
                var1.onPress = var3;
                var3 = 'none';
                var1.pointerEvents = var3;
                var3 = false;
                var1.accessible = var3;
                var3 = true;
                var1.accessibilityElementsHidden = var3;
                var3 = 'no';
                var1.importantForAccessibility = var3;
                var1 = var4.bind(var5)(var2, var1);
                _fun90331_ip = 1087;
                continue _fun90331;
            case 893:
                var3 = _closure1_slot5;
                var2 = {
                    'accessibilityRole': 'none',
                    'pointerEvents': 'none',
                    'onPress': null,
                    'accessible': false,
                    'accessibilityElementsHidden': true,
                    'importantForAccessibility': 'no'
                };
                var6 = _closure1_slot8;
                var2.onPress = var6;
                var6 = var13.joinButton;
                var2.style = var6;
                var7 = _closure1_slot4;
                var6 = {};
                var8 = var13.joinButtonContent;
                var6.style = var8;
                var9 = _closure1_slot0;
                var14 = _closure1_slot2;
                var8 = 18;
                var8 = var14[var8];
                var8 = var9.bind(var5)(var8);
                var9 = var8.Text;
                var8 = {
                    'style': null,
                    'color': 'interactive-text-default',
                    'variant': 'text-xs/semibold',
                    'lineClamp': 1
                };
                var13 = var13.joinButtonText;
                var8.style = var13;
                if (!(var12 == var10)) {
                    _fun90331_ip = 1057;
                    continue _fun90331
                }
            case 1002:
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var11 = 19;
                var12 = var15[var11];
                var12 = var14.bind(var5)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var15[var11];
                var11 = var14.bind(var5)(var11);
                var11 = var11.t;
                var11 = var11.VJlc0S;
                var10 = var12.bind(var13)(var11);
            case 1057:
                var8.children = var10;
                var8 = var4.bind(var5)(var9, var8);
                var6.children = var8;
                var6 = var4.bind(var5)(var7, var6);
                var2.children = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 1087:
                var0 = var1;
            case 1090:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 23;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel_list_v2/native/components/VocalChannelJoinButton.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3093, 3522, 660, 33, 1297, 671, 478, 8796, 3247, 3207, 7957, 632, 8482, 5713, 4244, 11738, 3942, 1234, 4084, 4862, 4865, 2]);