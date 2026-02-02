// modules/stage_channels/native/components/RequestToSpeakActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun67729: for (var _fun67729_ip = 0;;) switch (_fun67729_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.channel;
                var1 = _closure1_slot12;
                var3 = undefined;
                var16 = var1.bind(var3)();
                var12 = _closure1_slot0;
                var14 = _closure1_slot2;
                var1 = 9;
                var1 = var14[var1];
                var2 = var12.bind(var3)(var1);
                var1 = var2.useRequestToSpeakPermission;
                var0 = var0.id;
                var2 = var1.bind(var2)(var0);
                var1 = _closure1_slot3;
                var0 = 2;
                var1 = var1.bind(var3)(var2, var0);
                var0 = 0;
                var11 = var1[var0];
                var0 = 1;
                var0 = var1[var0];
                var _closure2_slot0 = var0;
                var2 = _closure1_slot10;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var16.header;
                var0.style = var4;
                var6 = _closure1_slot10;
                var5 = _closure1_slot5;
                var4 = {};
                var15 = _closure1_slot9;
                var9 = 10;
                var7 = var14[var9];
                var7 = var12.bind(var3)(var7);
                var13 = var7.Text;
                var7 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var16 = var16.headerTitle;
                var7.style = var16;
                var18 = 11;
                var16 = var14[var18];
                var16 = var12.bind(var3)(var16);
                var19 = var16.intl;
                var17 = var19.string;
                var16 = var14[var18];
                var16 = var12.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16.TYZgzW;
                var16 = var17.bind(var19)(var16);
                var7.children = var16;
                var13 = var15.bind(var3)(var13, var7);
                var7 = new Array(2);
                var7[0] = var13;
                var13 = _closure1_slot9;
                var9 = var14[var9];
                var9 = var12.bind(var3)(var9);
                var12 = var9.Text;
                var9 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-default'
                };
                var15 = _closure1_slot0;
                var14 = _closure1_slot2;
                var16 = var14[var18];
                var16 = var15.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var14 = var14[var18];
                var14 = var15.bind(var3)(var14);
                var15 = var14.t;
                if (var11) {
                    _fun67729_ip = 323;
                    continue _fun67729
                }
            case 308:
                var14 = var15.laPwJQ;
                var14 = var16.bind(var17)(var14);
                _fun67729_ip = 336;
                continue _fun67729;
            case 323:
                var15 = var15["JcFI/U"];
                var14 = var16.bind(var17)(var15);
            case 336:
                var9.children = var14;
                var9 = var13.bind(var3)(var12, var9);
                var7[1] = var9;
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot9;
                var6 = _closure1_slot5;
                var5 = {};
                var9 = _closure1_slot0;
                var12 = _closure1_slot2;
                var8 = 12;
                var8 = var12[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.FormSwitch;
                var8 = {};
                var8.value = var11;
                var10 = function arg0() {
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var8.onValueChange = var10;
                var8 = var7.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function arg0() {
        _fun67731: for (var _fun67731_ip = 0;;) switch (_fun67731_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.channel;
                var _closure2_slot0 = var7;
                var14 = var0.numRequestsToSpeak;
                var3 = undefined;
                var _closure2_slot1 = var3;
                var0 = _closure1_slot12;
                var10 = var0.bind(var3)();
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var1 = 13;
                var1 = var0[var1];
                var8 = var2.bind(var3)(var1);
                var4 = var8.useStateFromStores;
                var1 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var5
                    var1 = _closure1_slot6;
                    var0 = var1.getId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var4.bind(var8)(var2, var1);
                var1 = _closure1_slot1;
                var4 = 14;
                var0 = var0[var4];
                var1 = var1.bind(var3)(var0);
                var0 = null;
                var8 = var0 == var7;
                var0 = undefined;
                if (var8) {
                    _fun67731_ip = 119;
                    continue _fun67731
                }
            case 114:
                var0 = var7.id;
            case 119:
                var1 = var1.bind(var3)(var2, var0);
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var4];
                var0 = var2.bind(var3)(var0);
                var0 = var0.RequestToSpeakStates;
                var0 = var0.ON_STAGE;
                var0 = var1 === var0;
                _closure2_slot1 = var0;
                var7 = _closure1_slot0;
                var1 = _closure1_slot2;
                var12 = 11;
                var2 = var1[var12];
                var2 = var7.bind(var3)(var2);
                var4 = var2.intl;
                var2 = var4.string;
                var1 = var1[var12];
                var1 = var7.bind(var3)(var1);
                var1 = var1.t;
                if (var0) {
                    _fun67731_ip = 222;
                    continue _fun67731
                }
            case 209:
                var7 = var1["8Joh+p"];
                var20 = var2.bind(var4)(var7);
                _fun67731_ip = 233;
                continue _fun67731;
            case 222:
                var1 = var1.ezLpY6;
                var20 = var2.bind(var4)(var1);
            case 233:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                if (var0) {
                    _fun67731_ip = 264;
                    continue _fun67731
                }
            case 244:
                var0 = 16;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var21 = var0.MicrophoneArrowRightIcon;
                _fun67731_ip = 282;
                continue _fun67731;
            case 264:
                var0 = 15;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var21 = var0.GroupArrowDownIcon;
            case 282:
                var2 = _closure1_slot10;
                var1 = _closure1_slot11;
                var0 = {};
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 17;
                var4 = var8[var4];
                var4 = var9.bind(var3)(var4);
                var7 = var4.PressableOpacity;
                var4 = {};
                var11 = 'button';
                var4.accessibilityRole = var11;
                var4.accessibilityLabel = var20;
                var5 = function() {
                    _fun67733: for (var _fun67733_ip = 0;;) switch (_fun67733_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            if (var0) {
                                _fun67733_ip = 158;
                                continue _fun67733
                            }
                        case 13:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 18;
                            var1 = var4[var1];
                            var4 = undefined;
                            var5 = var3.bind(var4)(var1);
                            var3 = var5.shouldAgeVerifyToSpeakForCurrentUser;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var1 = var3.bind(var5)(var1);
                            if (!var1) {
                                _fun67733_ip = 158;
                                continue _fun67733
                            }
                        case 61:
                            var3 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var1 = 19;
                            var1 = var5[var1];
                            var7 = var3.bind(var4)(var1);
                            var6 = var7.showAgeVerificationGetStartedModal;
                            var1 = {};
                            var9 = _closure1_slot0;
                            var8 = 20;
                            var8 = var5[var8];
                            var8 = var9.bind(var4)(var8);
                            var8 = var8.AgeVerificationModalEntryPoint;
                            var8 = var8.STAGE_CHANNEL_RAISE_HAND;
                            var1.entryPoint = var8;
                            var1 = var6.bind(var7)(var1);
                            var1 = 21;
                            var1 = var5[var1];
                            var3 = var3.bind(var4)(var1);
                            var1 = var3.hideActionSheet;
                            var0 = _closure1_slot8;
                            var0 = var1.bind(var3)(var0);
                            var0 = undefined;
                            return var0;
                        case 158:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var0 = 22;
                            var3 = var4[var0];
                            var0 = undefined;
                            var6 = var5.bind(var0)(var3);
                            var5 = var6.audienceAckRequestToSpeak;
                            var3 = _closure2_slot0;
                            var2 = _closure2_slot1;
                            var2 = var5.bind(var6)(var3, var2);
                            var3 = _closure1_slot1;
                            var2 = 21;
                            var2 = var4[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.hideActionSheet;
                            var1 = _closure1_slot8;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var4.onPress = var5;
                var5 = var10.selfSpeakerButton;
                var4.style = var5;
                var15 = _closure1_slot10;
                var13 = _closure1_slot5;
                var11 = {};
                var5 = var10.selfSpeakerCTA;
                var11.style = var5;
                var17 = _closure1_slot9;
                var16 = _closure1_slot5;
                var5 = {};
                var18 = var10.selfSpeakerIcon;
                var5.style = var18;
                var19 = _closure1_slot9;
                var18 = {};
                var18 = var19.bind(var3)(var21, var18);
                var5.children = var18;
                var5 = var17.bind(var3)(var16, var5);
                var16 = new Array(2);
                var16[0] = var5;
                var19 = _closure1_slot9;
                var5 = 10;
                var17 = var8[var5];
                var17 = var9.bind(var3)(var17);
                var18 = var17.Text;
                var17 = {
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var17.children = var20;
                var17 = var19.bind(var3)(var18, var17);
                var16[1] = var17;
                var11.children = var16;
                var13 = var15.bind(var3)(var13, var11);
                var11 = new Array(2);
                var11[0] = var13;
                var16 = _closure1_slot9;
                var18 = _closure1_slot1;
                var13 = 23;
                var13 = var8[var13];
                var15 = var18.bind(var3)(var13);
                var13 = {};
                var17 = 24;
                var17 = var8[var17];
                var17 = var18.bind(var3)(var17);
                var13.source = var17;
                var13 = var16.bind(var3)(var15, var13);
                var11[1] = var13;
                var4.children = var11;
                var7 = var2.bind(var3)(var7, var4);
                var4 = new Array(2);
                var4[0] = var7;
                var7 = _closure1_slot9;
                var5 = var8[var5];
                var5 = var9.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'eyebrow',
                    'color': 'text-default'
                };
                var10 = var10.participantTitle;
                var5.style = var10;
                var10 = var8[var12];
                var10 = var9.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.format;
                var8 = var8[var12];
                var8 = var9.bind(var3)(var8);
                var8 = var8.t;
                var9 = var8["5z7q5a"];
                var8 = {};
                var12 = global;
                var12 = var12.HermesInternal;
                var13 = var12.concat;
                var12 = '';
                var12 = var13.bind(var12)(var14);
                var8.numHands = var12;
                var8 = var10.bind(var11)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var10 = 0;
    var3 = var5[var10];
    var0 = undefined;
    var3 = var12.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var9 = 1;
    var6 = var5[var9];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.REQUEST_TO_SPEAK_SHEET_KEY;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var6 = var3.jsxs;
    var _closure1_slot10 = var6;
    var3 = var3.Fragment;
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.padding = var10;
    var10 = 8;
    var11 = var5[var10];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var11;
    var3.container = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-between',
        'padding': 12
    };
    var11 = var5[var10];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var11;
    var3.header = var8;
    var8 = {};
    var8.flex = var9;
    var3.headerTextContainer = var8;
    var8 = {
        'marginTop': 0,
        'marginBottom': 0
    };
    var3.headerTitle = var8;
    var8 = {
        'padding': 12,
        'width': '100%'
    };
    var9 = var5[var10];
    var9 = var12.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.xs;
    var8.borderRadius = var9;
    var9 = var5[var10];
    var9 = var12.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var9;
    var3.textInput = var8;
    var8 = {};
    var9 = 16;
    var8.marginTop = var9;
    var3.startButton = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'padding': 16,
        'alignItems': 'center',
        'justifyContent': 'space-between'
    };
    var3.selfSpeakerButton = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.selfSpeakerCTA = var8;
    var8 = {};
    var11 = var5[var10];
    var11 = var12.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.round;
    var8.borderRadius = var11;
    var11 = var5[var10];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var11;
    var8.padding = var10;
    var8.marginEnd = var9;
    var3.selfSpeakerIcon = var8;
    var8 = {
        'paddingHorizontal': 16,
        'marginTop': 8
    };
    var3.participantTitle = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = 32;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stage_channels/native/components/RequestToSpeakActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun67734: for (var _fun67734_ip = 0;;) switch (_fun67734_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.channelId;
                var _closure2_slot0 = var8;
                var22 = var0.analyticsLocations;
                var0 = _closure1_slot12;
                var4 = undefined;
                var13 = var0.bind(var4)();
                var7 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = 25;
                var0 = var10[var1];
                var5 = var7.bind(var4)(var0);
                var0 = new Array(1);
                var3 = 0;
                var23 = var0;
                var21 = 0;
                var6 = arraySpread(var23, var22, var21);
                var2 = 26;
                var2 = var10[var2];
                var2 = var7.bind(var4)(var2);
                var2 = var2.REQUEST_TO_SPEAK;
                var0[var6] = var2;
                var2 = 1;
                var6 = var6 + var2;
                var0 = var5.bind(var4)(var0);
                var5 = var0.analyticsLocations;
                var9 = _closure1_slot0;
                var0 = 13;
                var0 = var10[var0];
                var14 = var9.bind(var4)(var0);
                var7 = var14.useStateFromStores;
                var0 = _closure1_slot7;
                var6 = new Array(1);
                var6[0] = var0;
                var0 = function() { // Environment: var11
                    var2 = _closure1_slot7;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var16 = var7.bind(var14)(var6, var0);
                var0 = 27;
                var0 = var10[var0];
                var7 = var9.bind(var4)(var0);
                var6 = var7.useStageParticipantsCount;
                var0 = 28;
                var0 = var10[var0];
                var0 = var9.bind(var4)(var0);
                var0 = var0.StageChannelParticipantNamedIndex;
                var0 = var0.ALL_REQUESTED_TO_SPEAK;
                var19 = var6.bind(var7)(var8, var0);
                var6 = _closure1_slot4;
                var0 = var6.useState;
                var7 = var0.bind(var6)(var3);
                var6 = _closure1_slot3;
                var0 = 2;
                var0 = var6.bind(var4)(var7, var0);
                var15 = var0[var3];
                var _closure2_slot1 = var15;
                var0 = var0[var2];
                var _closure2_slot2 = var0;
                var0 = null;
                var2 = var0 == var16;
                if (var2) {
                    _fun67734_ip = 506;
                    continue _fun67734
                }
            case 258:
                var3 = _closure1_slot9;
                var9 = _closure1_slot0;
                var17 = _closure1_slot2;
                var1 = var17[var1];
                var1 = var9.bind(var4)(var1);
                var2 = var1.AnalyticsLocationProvider;
                var1 = {};
                var1.value = var5;
                var7 = _closure1_slot9;
                var5 = 29;
                var5 = var17[var5];
                var5 = var9.bind(var4)(var5);
                var6 = var5.BottomSheet;
                var5 = {};
                var8 = true;
                var5.scrollable = var8;
                var8 = 5;
                var8 = var19 >= var8;
                var5.startExpanded = var8;
                var10 = _closure1_slot10;
                var8 = 30;
                var8 = var17[var8];
                var8 = var9.bind(var4)(var8);
                var9 = var8.BottomSheetScrollView;
                var8 = {};
                var13 = var13.container;
                var8.style = var13;
                var11 = function arg0() {
                    _fun67736: for (var _fun67736_ip = 0;;) switch (_fun67736_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var0 = var0.layout;
                            var1 = var0.height;
                            var0 = null;
                            var0 = var0 != var1;
                            if (!var0) {
                                _fun67736_ip = 40;
                                continue _fun67736
                            }
                        case 29:
                            var2 = _closure2_slot1;
                            var0 = var2 !== var1;
                        case 40:
                            if (!var0) {
                                _fun67736_ip = 64;
                                continue _fun67736
                            }
                        case 43:
                            var2 = _closure2_slot2;
                            var0 = 200;
                            var1 = var1 - var0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 64:
                            var0 = undefined;
                            return var0;
                    }
                };
                var8.onLayout = var11;
                var14 = _closure1_slot9;
                var13 = _closure1_slot13;
                var11 = {};
                var11.channel = var16;
                var13 = var14.bind(var4)(var13, var11);
                var11 = new Array(3);
                var11[0] = var13;
                var18 = _closure1_slot9;
                var14 = _closure1_slot14;
                var13 = {};
                var13.channel = var16;
                var13.numRequestsToSpeak = var19;
                var13 = var18.bind(var4)(var14, var13);
                var11[1] = var13;
                var14 = _closure1_slot9;
                var13 = _closure1_slot1;
                var12 = 31;
                var12 = var17[var12];
                var13 = var13.bind(var4)(var12);
                var12 = {};
                var12.channel = var16;
                var12.height = var15;
                var12 = var14.bind(var4)(var13, var12);
                var11[2] = var12;
                var8.children = var11;
                var8 = var10.bind(var4)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 506:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1216, 1372, 4201, 33, 1297, 671, 8384, 3902, 1234, 5342, 566, 4204, 8385, 8387, 4867, 4213, 5896, 4521, 3239, 5880, 4047, 8389, 5690, 5543, 8373, 5626, 4896, 4898, 8390, 2]);