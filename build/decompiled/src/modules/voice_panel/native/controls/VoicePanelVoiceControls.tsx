// modules/voice_panel/native/controls/VoicePanelVoiceControls.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: NOOP, environment: var1
        var0 = undefined;
        return var0;
    };
    var _closure1_slot13 = var0;
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
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var14 = 1;
    var3 = var5[var14];
    var3 = var4.bind(var0)(var3);
    var11 = var3.StyleSheet;
    var9 = var3.ScrollView;
    var3 = 2;
    var3 = var5[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.CONTROLS_DRAWER_HEADER_EXPANDED_SIZE;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.jsx;
    var _closure1_slot5 = var10;
    var10 = var3.jsxs;
    var _closure1_slot6 = var10;
    var3 = var3.Fragment;
    var _closure1_slot7 = var3;
    var10 = var11.create;
    var3 = {};
    var12 = {};
    var12.flex = var14;
    var3.wrapper = var12;
    var12 = {};
    var12.flex = var14;
    var13 = 5;
    var15 = var5[var13];
    var15 = var8.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_16;
    var12.paddingHorizontal = var15;
    var3.scrollView = var12;
    var12 = {};
    var12.flex = var14;
    var14 = var5[var13];
    var14 = var8.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var12.paddingHorizontal = var14;
    var12.marginTop = var7;
    var3.scrollViewScreenReader = var12;
    var12 = {};
    var13 = var5[var13];
    var13 = var8.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var12.marginBottom = var13;
    var3.groupSpacing = var12;
    var12 = {
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'right': 0
    };
    var3.blur = var12;
    var12 = {};
    var12.height = var7;
    var3.blurRegion = var12;
    var12 = {};
    var13 = 'relative';
    var12.position = var13;
    var12.height = var7;
    var3.blurRegionScreenReader = var12;
    var3 = var10.bind(var11)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var8 = var8.bind(var0)(var3);
    var3 = var8.createAnimatedComponent;
    var3 = var3.bind(var8)(var9);
    var _closure1_slot9 = var3;
    var8 = var6.memo;
    var3 = function(arg0) { // Environment: var1
        _fun112298: for (var _fun112298_ip = 0;;) switch (_fun112298_ip) {
            case 0:
                var0 = arg0;
                var20 = var0.channel;
                var18 = var0.openTab;
                var5 = _closure1_slot3;
                var2 = var5.useContext;
                var1 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 7;
                var0 = var4[var0];
                var3 = undefined;
                var0 = var1.bind(var3)(var0);
                var0 = var2.bind(var5)(var0);
                var23 = var0.channelId;
                var0 = 8;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var11 = var0.bind(var3)(var23);
                var1 = _closure1_slot0;
                var14 = 9;
                var0 = var4[var14];
                var2 = var1.bind(var3)(var0);
                var0 = var2.useEmbeddedActivityLaunchability;
                var8 = var0.bind(var2)(var23);
                var0 = 10;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var2 = var0.DeveloperMode;
                var0 = var2.useSetting;
                var7 = var0.bind(var2)();
                var0 = 11;
                var0 = var4[var0];
                var5 = var1.bind(var3)(var0);
                var2 = var5.useSoundboardXP4Experiment;
                var0 = 'VoicePanelVoiceControls';
                var0 = var2.bind(var5)(var0);
                var13 = var0.enabled;
                var2 = _closure1_slot6;
                var0 = 12;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Stack;
                var0 = {};
                var4 = 24;
                var0.spacing = var4;
                var5 = var11;
                if (!var11) {
                    _fun112298_ip = 395;
                    continue _fun112298
                }
            case 205:
                var10 = _closure1_slot6;
                var6 = _closure1_slot0;
                var12 = _closure1_slot2;
                var4 = 13;
                var4 = var12[var4];
                var4 = var6.bind(var3)(var4);
                var6 = var4.TableRowGroup;
                var4 = {};
                var16 = _closure1_slot5;
                var15 = _closure1_slot0;
                var12 = _closure1_slot2;
                var17 = 14;
                var12 = var12[var17];
                var12 = var15.bind(var3)(var12);
                if (var13) {
                    _fun112298_ip = 284;
                    continue _fun112298
                }
            case 264:
                var15 = var12.SoundboardButton;
                var13 = {};
                var13.channel = var20;
                var13 = var16.bind(var3)(var15, var13);
                _fun112298_ip = 303;
                continue _fun112298;
            case 284:
                var15 = var12.ActivitiesButton;
                var12 = {};
                var12.openTab = var18;
                var13 = var16.bind(var3)(var15, var12);
            case 303:
                var12 = new Array(3);
                var12[0] = var13;
                var16 = _closure1_slot5;
                var15 = _closure1_slot0;
                var13 = _closure1_slot2;
                var18 = var13[var17];
                var18 = var15.bind(var3)(var18);
                var19 = var18.ScreenshareButton;
                var18 = {};
                var18.channel = var20;
                var18 = var16.bind(var3)(var19, var18);
                var12[1] = var18;
                var13 = var13[var17];
                var13 = var15.bind(var3)(var13);
                var15 = var13.HangStatusButton;
                var13 = {};
                var13.channel = var20;
                var13 = var16.bind(var3)(var15, var13);
                var12[2] = var13;
                var4.children = var12;
                var5 = var10.bind(var3)(var6, var4);
            case 395:
                var4 = new Array(7);
                var4[0] = var5;
                var19 = _closure1_slot5;
                var18 = _closure1_slot0;
                var17 = _closure1_slot2;
                var13 = 14;
                var5 = var17[var13];
                var5 = var18.bind(var3)(var5);
                var6 = var5.GameConsoles;
                var5 = {};
                var5.channel = var20;
                var5.connected = var11;
                var5 = var19.bind(var3)(var6, var5);
                var4[1] = var5;
                var5 = var17[var13];
                var5 = var18.bind(var3)(var5);
                var6 = var5.StreamVolumeItem;
                var5 = {};
                var5 = var19.bind(var3)(var6, var5);
                var4[2] = var5;
                var15 = _closure1_slot6;
                var6 = 13;
                var5 = var17[var6];
                var5 = var18.bind(var3)(var5);
                var10 = var5.TableRowGroup;
                var5 = {};
                var12 = 15;
                var16 = var17[var12];
                var16 = var18.bind(var3)(var16);
                var22 = var16.intl;
                var21 = var22.string;
                var16 = var17[var12];
                var16 = var18.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16.NiTd0e;
                var16 = var21.bind(var22)(var16);
                var5.title = var16;
                var16 = var17[var13];
                var16 = var18.bind(var3)(var16);
                var21 = var16.DeafenSwitch;
                var16 = {};
                var21 = var19.bind(var3)(var21, var16);
                var16 = new Array(5);
                var16[0] = var21;
                var21 = var17[var13];
                var21 = var18.bind(var3)(var21);
                var22 = var21.AudioRouteButton;
                var21 = {};
                var21.channel = var20;
                var21.connected = var11;
                var21 = var19.bind(var3)(var22, var21);
                var16[1] = var21;
                var21 = var17[var13];
                var21 = var18.bind(var3)(var21);
                var22 = var21.HideNonVideoParticipants;
                var21 = {};
                var21.channelId = var23;
                var21 = var19.bind(var3)(var22, var21);
                var16[2] = var21;
                var17 = var17[var13];
                var17 = var18.bind(var3)(var17);
                var18 = var17.HideSelfVideo;
                var17 = {};
                var17 = var19.bind(var3)(var18, var17);
                var16[3] = var17;
                var17 = var11;
                if (!var17) {
                    _fun112298_ip = 731;
                    continue _fun112298
                }
            case 687:
                var21 = _closure1_slot5;
                var19 = _closure1_slot0;
                var18 = _closure1_slot2;
                var18 = var18[var13];
                var18 = var19.bind(var3)(var18);
                var19 = var18.InviteButton;
                var18 = {};
                var18.channel = var20;
                var18.connected = var11;
                var17 = var21.bind(var3)(var19, var18);
            case 731:
                var16[4] = var17;
                var5.children = var16;
                var5 = var15.bind(var3)(var10, var5);
                var4[3] = var5;
                var19 = _closure1_slot5;
                var18 = _closure1_slot0;
                var17 = _closure1_slot2;
                var5 = 16;
                var5 = var17[var5];
                var5 = var18.bind(var3)(var5);
                var10 = var5.VoiceProcessingOptions;
                var5 = {};
                var5 = var19.bind(var3)(var10, var5);
                var4[4] = var5;
                var15 = _closure1_slot6;
                var5 = var17[var6];
                var5 = var18.bind(var3)(var5);
                var10 = var5.TableRowGroup;
                var5 = {};
                var16 = var17[var13];
                var16 = var18.bind(var3)(var16);
                var21 = var16.VoiceSettingsButton;
                var16 = {};
                var22 = var20.guild_id;
                var16.guildId = var22;
                var21 = var19.bind(var3)(var21, var16);
                var16 = new Array(2);
                var16[0] = var21;
                var17 = var17[var13];
                var17 = var18.bind(var3)(var17);
                var18 = var17.ReportStreamIssueButton;
                var17 = {};
                var17.channel = var20;
                var17 = var19.bind(var3)(var18, var17);
                var16[1] = var17;
                var5.children = var16;
                var5 = var15.bind(var3)(var10, var5);
                var4[5] = var5;
                var5 = null;
                if (!var11) {
                    _fun112298_ip = 1127;
                    continue _fun112298
                }
            case 905:
                var5 = null;
                if (!var7) {
                    _fun112298_ip = 1127;
                    continue _fun112298
                }
            case 913:
                var11 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var14];
                var7 = var11.bind(var3)(var7);
                var7 = var7.EmbeddedActivityLaunchability;
                var7 = var7.CAN_LAUNCH;
                var5 = null;
                if (!(var8 === var7)) {
                    _fun112298_ip = 1127;
                    continue _fun112298
                }
            case 951:
                var8 = _closure1_slot6;
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = var10[var6];
                var6 = var11.bind(var3)(var6);
                var7 = var6.TableRowGroup;
                var6 = {};
                var14 = var10[var12];
                var14 = var11.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var12 = var10[var12];
                var12 = var11.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.J6rqB7;
                var12 = var14.bind(var15)(var12);
                var6.title = var12;
                var12 = _closure1_slot5;
                var9 = var10[var13];
                var9 = var11.bind(var3)(var9);
                var14 = var9.LeaveActivitiesButton;
                var9 = {};
                var14 = var12.bind(var3)(var14, var9);
                var9 = new Array(3);
                var9[0] = var14;
                var14 = var10[var13];
                var14 = var11.bind(var3)(var14);
                var15 = var14.ShareActivityLogsButton;
                var14 = {};
                var14 = var12.bind(var3)(var15, var14);
                var9[1] = var14;
                var10 = var10[var13];
                var10 = var11.bind(var3)(var10);
                var11 = var10.ToggleShowActivitiesDebugOverlay;
                var10 = {};
                var10 = var12.bind(var3)(var11, var10);
                var9[2] = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 1127:
                var4[6] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var8.bind(var6)(var3);
    var _closure1_slot10 = var3;
    var3 = {};
    var3.top = var7;
    var _closure1_slot11 = var3;
    var3 = {};
    var7 = 'function VoicePanelVoiceControlsTsx1({offset:offset}){const{isScrolled}=this.__closure;isScrolled.set(offset>0);}';
    var3.code = var7;
    var _closure1_slot12 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Original name: VoicePanelVoiceControls, environment: var1
        _fun112299: for (var _fun112299_ip = 0;;) switch (_fun112299_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.isVisible;
                var _closure2_slot0 = var1;
                var17 = var2.openTab;
                var4 = _closure1_slot3;
                var5 = var4.useContext;
                var6 = _closure1_slot1;
                var11 = _closure1_slot2;
                var2 = 7;
                var2 = var11[var2];
                var3 = undefined;
                var2 = var6.bind(var3)(var2);
                var2 = var5.bind(var4)(var2);
                var2 = var2.channelId;
                var _closure2_slot1 = var2;
                var6 = _closure1_slot0;
                var2 = 17;
                var2 = var11[var2];
                var8 = var6.bind(var3)(var2);
                var7 = var8.useStateFromStores;
                var2 = _closure1_slot4;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var18 = var7.bind(var8)(var5, var2);
                var2 = 6;
                var2 = var11[var2];
                var7 = var6.bind(var3)(var2);
                var5 = var7.useSharedValue;
                var2 = false;
                var10 = var5.bind(var7)(var2);
                var _closure2_slot2 = var10;
                var7 = var4.useCallback;
                var5 = function(arg0) { // Original name: l, environment: var0
                    var0 = arg0;
                    var3 = var0.offset;
                    var2 = _closure2_slot2;
                    var1 = var2.set;
                    var0 = 0;
                    var0 = var3 > var0;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var2 = {};
                var2.isScrolled = var10;
                var5.__closure = var2;
                var2 = 16758626276795.0;
                var5.__workletHash = var2;
                var2 = _closure1_slot12;
                var5.__initData = var2;
                var2 = new Array(1);
                var2[0] = var10;
                var7 = var7.bind(var4)(var5, var2);
                var5 = var4.useContext;
                var2 = 18;
                var2 = var11[var2];
                var2 = var6.bind(var3)(var2);
                var2 = var2.ControlsGestureScrollLock;
                var5 = var5.bind(var4)(var2);
                var2 = {};
                var2.onScrollHandlerWorkletized = var7;
                var2 = var5.bind(var3)(var2);
                var13 = var2.onScroll;
                var7 = var2.gestureRef;
                var _closure2_slot3 = var7;
                var14 = var2.scrollerRef;
                var _closure2_slot4 = var14;
                var12 = var2.animatedProps;
                var2 = 19;
                var2 = var11[var2];
                var5 = var6.bind(var3)(var2);
                var2 = var5.useIsScreenReaderEnabled;
                var5 = var2.bind(var5)();
                var8 = var4.useEffect;
                var2 = new Array(2);
                var2[0] = var1;
                var2[1] = var14;
                var1 = function() { // Environment: var0
                    _fun112302: for (var _fun112302_ip = 0;;) switch (_fun112302_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            if (!var1) {
                                _fun112302_ip = 20;
                                continue _fun112302
                            }
                        case 10:
                            var3 = _closure2_slot4;
                            var2 = null;
                            var1 = var2 != var3;
                        case 20:
                            if (!var1) {
                                _fun112302_ip = 59;
                                continue _fun112302
                            }
                        case 23:
                            var0 = _closure2_slot4;
                            var2 = var0.current;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun112302_ip = 59;
                                continue _fun112302
                            }
                        case 38:
                            var1 = var2.scrollTo;
                            var0 = {
                                'x': 0,
                                'y': 0,
                                'animated': false
                            };
                            var0 = var1.bind(var2)(var0);
                        case 59:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var8.bind(var4)(var1, var2);
                var2 = var4.useMemo;
                var1 = new Array(1);
                var1[0] = var7;
                var0 = function() { // Environment: var0
                    _fun112303: for (var _fun112303_ip = 0;;) switch (_fun112303_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 20;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            var1 = var0.Gesture;
                            var0 = var1.Native;
                            var3 = var0.bind(var1)();
                            var4 = _closure2_slot3;
                            var2 = null;
                            var0 = var3;
                            if (!(var2 != var4)) {
                                _fun112303_ip = 72;
                                continue _fun112303
                            }
                        case 57:
                            var2 = var3.simultaneousWithExternalGesture;
                            var1 = _closure2_slot3;
                            var0 = var2.bind(var3)(var1);
                        case 72:
                            return var0;
                    }
                };
                var8 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot6;
                var1 = _closure1_slot7;
                var0 = {};
                var7 = _closure1_slot5;
                var4 = 20;
                var4 = var11[var4];
                var4 = var6.bind(var3)(var4);
                var6 = var4.GestureDetector;
                var4 = {};
                var4.gesture = var8;
                var11 = _closure1_slot9;
                var8 = {};
                var16 = _closure1_slot8;
                if (var5) {
                    _fun112299_ip = 423;
                    continue _fun112299
                }
            case 415:
                var15 = var16.scrollView;
                _fun112299_ip = 429;
                continue _fun112299;
            case 423:
                var15 = var16.scrollViewScreenReader;
            case 429:
                var8.style = var15;
                var8.ref = var14;
                var8.onScroll = var13;
                var8.animatedProps = var12;
                var12 = _closure1_slot13;
                var8.onMomentumScrollEnd = var12;
                var12 = 8.333333333333334;
                var8.scrollEventThrottle = var12;
                var12 = _closure1_slot11;
                var8.scrollIndicatorInsets = var12;
                var13 = !var5;
                if (!var13) {
                    _fun112299_ip = 532;
                    continue _fun112299
                }
            case 486:
                var15 = _closure1_slot5;
                var14 = _closure1_slot1;
                var16 = _closure1_slot2;
                var12 = 21;
                var12 = var16[var12];
                var14 = var14.bind(var3)(var12);
                var12 = {};
                var16 = _closure1_slot8;
                var16 = var16.blurRegion;
                var12.style = var16;
                var13 = var15.bind(var3)(var14, var12);
            case 532:
                var12 = new Array(3);
                var12[0] = var13;
                var13 = null;
                var13 = var13 != var18;
                if (!var13) {
                    _fun112299_ip = 574;
                    continue _fun112299
                }
            case 549:
                var16 = _closure1_slot5;
                var15 = _closure1_slot10;
                var14 = {};
                var14.channel = var18;
                var14.openTab = var17;
                var13 = var16.bind(var3)(var15, var14);
            case 574:
                var12[1] = var13;
                var15 = _closure1_slot5;
                var14 = _closure1_slot0;
                var16 = _closure1_slot2;
                var13 = 22;
                var13 = var16[var13];
                var13 = var14.bind(var3)(var13);
                var14 = var13.SafeAreaPaddingView;
                var13 = {};
                var16 = true;
                var13.bottom = var16;
                var13 = var15.bind(var3)(var14, var13);
                var12[2] = var13;
                var8.children = var12;
                var8 = var2.bind(var3)(var11, var8);
                var4.children = var8;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var5 = !var5;
                if (!var5) {
                    _fun112299_ip = 711;
                    continue _fun112299
                }
            case 660:
                var8 = _closure1_slot5;
                var7 = _closure1_slot1;
                var11 = _closure1_slot2;
                var6 = 23;
                var6 = var11[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var6.shown = var10;
                var9 = _closure1_slot8;
                var9 = var9.blurRegion;
                var6.style = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 711:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 24;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/controls/VoicePanelVoiceControls.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1372, 11836, 33, 671, 3679, 11837, 14249, 7952, 1348, 14390, 4039, 5324, 14395, 1234, 8438, 566, 13776, 4029, 4923, 6418, 4696, 11845, 2]);