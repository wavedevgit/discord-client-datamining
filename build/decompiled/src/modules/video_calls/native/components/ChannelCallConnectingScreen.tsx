// modules/video_calls/native/components/ChannelCallConnectingScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: VoiceSettingsActionSheet, environment: var1
        var3 = _closure1_slot16;
        var5 = _closure1_slot0;
        var11 = _closure1_slot2;
        var0 = 17;
        var0 = var11[var0];
        var2 = undefined;
        var0 = var5.bind(var2)(var0);
        var1 = var0.BottomSheet;
        var0 = {};
        var10 = true;
        var0.scrollable = var10;
        var6 = _closure1_slot16;
        var4 = 18;
        var4 = var11[var4];
        var4 = var5.bind(var2)(var4);
        var5 = var4.BottomSheetScrollView;
        var4 = {};
        var9 = _closure1_slot16;
        var8 = _closure1_slot1;
        var7 = 19;
        var7 = var11[var7];
        var8 = var8.bind(var2)(var7);
        var7 = {};
        var7.disableForm = var10;
        var7 = var9.bind(var2)(var8, var7);
        var4.children = var7;
        var4 = var6.bind(var2)(var5, var4);
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot20 = var0;
    var0 = function() { // Original name: EmptyState, environment: var1
        var0 = _closure1_slot19;
        var3 = undefined;
        var10 = var0.bind(var3)();
        var2 = _closure1_slot18;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = var10.emptyState;
        var0.style = var4;
        var7 = _closure1_slot16;
        var11 = _closure1_slot0;
        var12 = _closure1_slot2;
        var4 = 25;
        var4 = var12[var4];
        var4 = var11.bind(var3)(var4);
        var6 = var4.TextInVoiceEmptyState;
        var4 = {};
        var8 = var10.emptyStateImage;
        var4.style = var8;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(3);
        var4[0] = var6;
        var13 = _closure1_slot16;
        var6 = 26;
        var6 = var12[var6];
        var6 = var11.bind(var3)(var6);
        var7 = var6.Text;
        var6 = {
            'style': null,
            'maxFontSizeMultiplier': 2,
            'variant': 'heading-xl/extrabold',
            'color': 'mobile-text-heading-primary'
        };
        var8 = var10.emptyStateTitle;
        var6.style = var8;
        var9 = 2;
        var8 = 24;
        var14 = var12[var8];
        var14 = var11.bind(var3)(var14);
        var16 = var14.intl;
        var15 = var16.string;
        var14 = var12[var8];
        var14 = var11.bind(var3)(var14);
        var14 = var14.t;
        var14 = var14.GNeL2r;
        var14 = var15.bind(var16)(var14);
        var6.children = var14;
        var6 = var13.bind(var3)(var7, var6);
        var4[1] = var6;
        var7 = _closure1_slot16;
        var5 = 27;
        var5 = var12[var5];
        var5 = var11.bind(var3)(var5);
        var6 = var5.LegacyText;
        var5 = {};
        var10 = var10.emptyStateSubtitle;
        var5.style = var10;
        var5.maxFontSizeMultiplier = var9;
        var9 = var12[var8];
        var9 = var11.bind(var3)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var8 = var12[var8];
        var8 = var11.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8.jkg8Zu;
        var8 = var9.bind(var10)(var8);
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[2] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot21 = var0;
    var0 = function(arg0) { // Original name: MemberList, environment: var1
        _fun67850: for (var _fun67850_ip = 0;;) switch (_fun67850_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var1 != var0)) {
                    _fun67850_ip = 46;
                    continue _fun67850
                }
            case 9:
                var0 = global;
                var3 = var0.Error;
                var5 = _closure1_slot11;
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var6 = var2;
                var0 = new var6[var3](var5, var4);
                var0 = var0 instanceof Object ? var0 : var2;
                throw var0;
            case 46:
                var4 = "Cannot destructure 'undefined' or 'null'.";
                var5 = var1;
                var0 = throwTypeError(var5, var4);
                var0 = undefined;
                throw var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function(arg0) { // Original name: JoinMutedButton, environment: var1
        var0 = arg0;
        var4 = var0.channel;
        var2 = _closure1_slot1;
        var6 = _closure1_slot2;
        var1 = 30;
        var1 = var6[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var5 = var1.bind(var3)();
        var2 = _closure1_slot16;
        var1 = _closure1_slot0;
        var0 = 31;
        var0 = var6[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.ChannelCallMicButton;
        var0 = {};
        var0.channel = var4;
        var4 = 'light';
        var4 = var4 === var5;
        var0.disableTint = var4;
        var4 = false;
        var0.isSmallSize = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot23 = var0;
    var0 = function(arg0) { // Original name: JoinVoiceButton, environment: var1
        _fun67852: for (var _fun67852_ip = 0;;) switch (_fun67852_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.channel;
                var _closure2_slot0 = var8;
                var3 = undefined;
                var _closure2_slot4 = var3;
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 32;
                var1 = var5[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var _closure2_slot1 = var1;
                var6 = _closure1_slot0;
                var1 = 33;
                var7 = var5[var1];
                var11 = var6.bind(var3)(var7);
                var10 = var11.useStateFromStores;
                var7 = _closure1_slot5;
                var9 = new Array(1);
                var9[0] = var7;
                var7 = function() { // Environment: var0
                    var1 = _closure1_slot5;
                    var0 = var1.getAwaitingRemoteSessionInfo;
                    var1 = var0.bind(var1)();
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var9 = var10.bind(var11)(var9, var7);
                var1 = var5[var1];
                var10 = var6.bind(var3)(var1);
                var7 = var10.useStateFromStores;
                var1 = _closure1_slot8;
                var6 = new Array(1);
                var6[0] = var1;
                var1 = function() { // Environment: var0
                    _fun67854: for (var _fun67854_ip = 0;;) switch (_fun67854_ip) {
                        case 0:
                            var4 = _closure1_slot8;
                            var3 = var4.getSessionById;
                            var0 = _closure2_slot1;
                            var2 = null;
                            var6 = var2 == var0;
                            var5 = undefined;
                            if (var6) {
                                _fun67854_ip = 41;
                                continue _fun67854
                            }
                        case 31:
                            var1 = _closure2_slot1;
                            var5 = var1.sessionId;
                        case 41:
                            var6 = var2 != var5;
                            var1 = '';
                            if (!var6) {
                                _fun67854_ip = 55;
                                continue _fun67854
                            }
                        case 52:
                            var1 = var5;
                        case 55:
                            var1 = var3.bind(var4)(var1);
                            var2 = var2 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun67854_ip = 81;
                                continue _fun67854
                            }
                        case 69:
                            var1 = var1.clientInfo;
                            var0 = var1.os;
                        case 81:
                            return var0;
                    }
                };
                var10 = var7.bind(var10)(var6, var1);
                var _closure2_slot2 = var10;
                var1 = 34;
                var1 = var5[var1];
                var1 = var2.bind(var3)(var1);
                var7 = var1.bind(var3)();
                var _closure2_slot3 = var7;
                var1 = 35;
                var1 = var5[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.bind(var3)(var8);
                var5 = var1.selfMute;
                if (var5) {
                    _fun67852_ip = 192;
                    continue _fun67852
                }
            case 186:
                var5 = var1.mute;
            case 192:
                if (var5) {
                    _fun67852_ip = 201;
                    continue _fun67852
                }
            case 195:
                var5 = var1.suppress;
            case 201:
                _closure2_slot4 = var5;
                var6 = _closure1_slot3;
                var2 = var6.useCallback;
                var1 = new Array(4);
                var1[0] = var8;
                var1[1] = var10;
                var1[2] = var7;
                var1[3] = var5;
                var0 = function() { // Environment: var0
                    _fun67855: for (var _fun67855_ip = 0;;) switch (_fun67855_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var11 = null;
                            if (!(var11 != var1)) {
                                _fun67855_ip = 65;
                                continue _fun67855
                            }
                        case 13:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 36;
                            var2 = var4[var2];
                            var4 = undefined;
                            var6 = var3.bind(var4)(var2);
                            var5 = var6.coerceConsoleTypeToPlatformType;
                            var3 = _closure2_slot2;
                            var2 = _closure2_slot3;
                            var3 = var5.bind(var6)(var3, var2);
                            if (!(var11 == var3)) {
                                _fun67855_ip = 272;
                                continue _fun67855
                            }
                        case 65:
                            var2 = _closure2_slot0;
                            var8 = var2.id;
                            var6 = _closure2_slot4;
                            var7 = _closure1_slot10;
                            var2 = undefined;
                            var7 = var7.bind(var2)();
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var7 = 1;
                            var7 = var10[var7];
                            var9 = var9.bind(var2)(var7);
                            var7 = var11 == var9;
                            var10 = var9;
                            if (var7) {
                                _fun67855_ip = 134;
                                continue _fun67855
                            }
                        case 121:
                            var9 = var9.NativeModules;
                            var7 = var11 == var9;
                            var10 = var9;
                        case 134:
                            var9 = var10;
                            if (var7) {
                                _fun67855_ip = 153;
                                continue _fun67855
                            }
                        case 140:
                            var10 = var10.KeyboardManager;
                            var7 = var11 == var10;
                            var9 = var10;
                        case 153:
                            if (var7) {
                                _fun67855_ip = 166;
                                continue _fun67855
                            }
                        case 156:
                            var10 = var9.dismissGlobalKeyboard;
                            var7 = var11 == var10;
                        case 166:
                            if (var7) {
                                _fun67855_ip = 179;
                                continue _fun67855
                            }
                        case 169:
                            var7 = var9.dismissGlobalKeyboard;
                            var7 = var7.bind(var9)();
                        case 179:
                            if (!var6) {
                                _fun67855_ip = 235;
                                continue _fun67855
                            }
                        case 182:
                            var7 = _closure1_slot6;
                            var6 = var7.getSettings;
                            var6 = var6.bind(var7)();
                            var6 = var6.mute;
                            if (var6) {
                                _fun67855_ip = 235;
                                continue _fun67855
                            }
                        case 205:
                            var7 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var6 = 28;
                            var6 = var9[var6];
                            var7 = var7.bind(var2)(var6);
                            var6 = var7.toggleSelfMute;
                            var6 = var6.bind(var7)();
                        case 235:
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var5 = 29;
                            var5 = var7[var5];
                            var7 = var6.bind(var2)(var5);
                            var6 = var7.selectVoiceChannel;
                            var5 = false;
                            var5 = var6.bind(var7)(var8, var5, var5);
                            return var2;
                        case 272:
                            var2 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 37;
                            var1 = var5[var1];
                            var2 = var2.bind(var4)(var1);
                            var1 = var2.beginConsoleTransfer;
                            var0 = _closure2_slot0;
                            var0 = var1.bind(var2)(var0, var3);
                            return var0;
                    }
                };
                var7 = var2.bind(var6)(var0, var1);
                var6 = _closure1_slot1;
                var0 = _closure1_slot2;
                var2 = 20;
                var1 = var0[var2];
                var1 = var6.bind(var3)(var1);
                var10 = var1.bind(var3)(var8);
                var1 = _closure1_slot0;
                var2 = var0[var2];
                var6 = var1.bind(var3)(var2);
                var2 = var6.useIsVoiceChannelLocked;
                var11 = var2.bind(var6)(var8);
                var2 = _closure1_slot16;
                var6 = 38;
                var0 = var0[var6];
                var0 = var1.bind(var3)(var0);
                var1 = var0.LabeledActionButton;
                var0 = {};
                var8 = var10;
                if (var8) {
                    _fun67852_ip = 329;
                    continue _fun67852
                }
            case 326:
                var8 = var11;
            case 329:
                if (var8) {
                    _fun67852_ip = 335;
                    continue _fun67852
                }
            case 332:
                var8 = var9;
            case 335:
                var0.disabled = var8;
                var9 = _closure1_slot1;
                var8 = _closure1_slot2;
                var13 = 14;
                var12 = var8[var13];
                var12 = var9.bind(var3)(var12);
                var12 = var12.unsafe_rawColors;
                var12 = var12.GREEN_360;
                var0.backgroundColor = var12;
                var12 = {};
                var13 = var8[var13];
                var13 = var9.bind(var3)(var13);
                var13 = var13.unsafe_rawColors;
                var13 = var13.WHITE;
                var12.tintColor = var13;
                var0.imageStyle = var12;
                var15 = _closure1_slot0;
                var13 = 24;
                var12 = var8[var13];
                var12 = var15.bind(var3)(var12);
                var14 = var12.intl;
                var12 = var14.string;
                var8 = var8[var13];
                var8 = var15.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8["96ANUN"];
                var8 = var12.bind(var14)(var8);
                var0.accessibilityLabel = var8;
                var14 = _closure1_slot2;
                if (var5) {
                    _fun67852_ip = 477;
                    continue _fun67852
                }
            case 468:
                var8 = 40;
                var8 = var14[var8];
                _fun67852_ip = 484;
                continue _fun67852;
            case 477:
                var12 = 39;
                var8 = var14[var12];
            case 484:
                var8 = var9.bind(var3)(var8);
                var0.source = var8;
                var0.onPress = var7;
                var12 = _closure1_slot0;
                var7 = _closure1_slot2;
                var8 = var7[var13];
                var8 = var12.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var7[var13];
                var7 = var12.bind(var3)(var7);
                var7 = var7.t;
                if (var11) {
                    _fun67852_ip = 588;
                    continue _fun67852
                }
            case 541:
                if (var10) {
                    _fun67852_ip = 575;
                    continue _fun67852
                }
            case 544:
                if (var5) {
                    _fun67852_ip = 560;
                    continue _fun67852
                }
            case 547:
                var5 = var7["96ANUN"];
                var5 = var8.bind(var9)(var5);
                _fun67852_ip = 573;
                continue _fun67852;
            case 560:
                var10 = var7["Bd/Liz"];
                var5 = var8.bind(var9)(var10);
            case 573:
                _fun67852_ip = 586;
                continue _fun67852;
            case 575:
                var10 = var7.rZfiNq;
                var5 = var8.bind(var9)(var10);
            case 586:
                _fun67852_ip = 599;
                continue _fun67852;
            case 588:
                var7 = var7.TVBCKZ;
                var5 = var8.bind(var9)(var7);
            case 599:
                var0.label = var5;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var6];
                var4 = var5.bind(var3)(var4);
                var4 = var4.IconPosition;
                var4 = var4.RIGHT;
                var0.iconPosition = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot24 = var0;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.resetFocus;
    var _closure1_slot10 = var3;
    var14 = 8;
    var3 = var5[var14];
    var3 = var4.bind(var0)(var3);
    var3 = var3.OLD_VOICE_UI_ERROR_STRING;
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot12 = var6;
    var3 = var3.InstantInviteSources;
    var _closure1_slot13 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NativePermissionTypes;
    var _closure1_slot14 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var11 = var3.Fonts;
    var3 = var3.Permissions;
    var _closure1_slot15 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot16 = var6;
    var6 = var3.Fragment;
    var _closure1_slot17 = var6;
    var3 = var3.jsxs;
    var _closure1_slot18 = var3;
    var3 = 13;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'alignSelf': 'stretch',
        'paddingBottom': 8,
        'paddingTop': 44
    };
    var12 = 14;
    var9 = var5[var12];
    var9 = var13.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var9;
    var3.container = var8;
    var8 = {
        'flex': 1,
        'alignSelf': 'stretch',
        'alignItems': 'center',
        'justifyContent': 'center',
        'marginHorizontal': 16
    };
    var10 = 'center';
    var9 = 15;
    var15 = var5[var9];
    var15 = var4.bind(var0)(var15);
    var15 = var15.CALL_ACTION_BAR_HEIGHT;
    var8.marginBottom = var15;
    var3.emptyState = var8;
    var8 = {};
    var8.width = var14;
    var3.spacer = var8;
    var8 = {
        'width': 120,
        'height': 80,
        'marginBottom': 24
    };
    var3.emptyStateImage = var8;
    var8 = {
        'textAlign': 'center',
        'marginBottom': 8
    };
    var3.emptyStateTitle = var8;
    var8 = {};
    var8.fontSize = var12;
    var12 = var5[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_SUBTLE;
    var8.color = var12;
    var11 = var11.DISPLAY_MEDIUM;
    var8.fontFamily = var11;
    var8.textAlign = var10;
    var3.emptyStateSubtitle = var8;
    var8 = {
        'paddingHorizontal': 12,
        'paddingTop': 16,
        'justifyContent': 'center',
        'alignItems': 'flex-start',
        'flexDirection': 'row'
    };
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.CALL_ACTION_BAR_HEIGHT;
    var8.height = var9;
    var3.actionBarContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot19 = var3;
    var3 = 49;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/video_calls/native/components/ChannelCallConnectingScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: ChannelCallConnectingScreen, environment: var1
        _fun67856: for (var _fun67856_ip = 0;;) switch (_fun67856_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.channel;
                var _closure2_slot0 = var11;
                var0 = _closure1_slot19;
                var3 = undefined;
                var9 = var0.bind(var3)();
                var5 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 33;
                var0 = var10[var0];
                var6 = var5.bind(var3)(var0);
                var4 = var6.useStateFromStores;
                var0 = _closure1_slot9;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var1
                    var2 = _closure1_slot9;
                    var1 = var2.countVoiceStatesForChannel;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var1 = var1.bind(var2)(var0);
                    var0 = 0;
                    var0 = var0 === var1;
                    return var0;
                };
                var7 = var4.bind(var6)(var2, var0);
                var6 = _closure1_slot1;
                var0 = 41;
                var2 = var10[var0];
                var4 = var6.bind(var3)(var2);
                var2 = 42;
                var2 = var10[var2];
                var2 = var6.bind(var3)(var2);
                var2 = var2.CHANNEL_CALL_CONNECTING_SCREEN;
                var2 = var4.bind(var3)(var2);
                var4 = var2.analyticsLocations;
                var _closure2_slot1 = var4;
                var13 = _closure1_slot3;
                var12 = var13.useEffect;
                var6 = new Array(2);
                var6[0] = var11;
                var6[1] = var4;
                var2 = function() { // Environment: var1
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var0 = 43;
                    var1 = var4[var0];
                    var0 = undefined;
                    var8 = var3.bind(var0)(var1);
                    var7 = var8.track;
                    var1 = _closure1_slot12;
                    var6 = var1.VIEW_VOICE_CHANNEL;
                    var3 = {};
                    var5 = _closure2_slot0;
                    var10 = var5.id;
                    var3.channel_id = var10;
                    var10 = var5.guild_id;
                    var3.guild_id = var10;
                    var9 = _closure2_slot1;
                    var3.location_stack = var9;
                    var3 = var7.bind(var8)(var6, var3);
                    var3 = _closure1_slot0;
                    var9 = 44;
                    var2 = var4[var9];
                    var8 = var3.bind(var0)(var2);
                    var7 = var8.trackWithMetadata;
                    var6 = var1.CHANNEL_OPENED;
                    var2 = {};
                    var9 = var4[var9];
                    var11 = var3.bind(var0)(var9);
                    var10 = var11.getChannelOpenedMetadata;
                    var9 = var5.id;
                    var12 = var10.bind(var11)(var9);
                    var13 = var2;
                    var9 = copyDataProperties(var13, var12);
                    var2 = var7.bind(var8)(var6, var2);
                    var2 = 45;
                    var2 = var4[var2];
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.trackClickstream;
                    var2 = var1.CHANNEL_OPENED_CLICKSTREAM;
                    var1 = {};
                    var5 = var5.id;
                    var1.channelId = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var2 = var12.bind(var13)(var2, var6);
                var12 = _closure1_slot3;
                var6 = var12.useLayoutEffect;
                var2 = function() { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 46;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.runAfterInteractions;
                    var0 = function() { // Environment: var0
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 47;
                        var2 = var2[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.requestPermission;
                        var1 = _closure1_slot14;
                        var1 = var1.AUDIO;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = var0.cancel;
                    return var0;
                };
                var1 = new Array(0);
                var1 = var6.bind(var12)(var2, var1);
                var2 = _closure1_slot16;
                var0 = var10[var0];
                var0 = var5.bind(var3)(var0);
                var1 = var0.AnalyticsLocationProvider;
                var0 = {};
                var0.value = var4;
                var6 = _closure1_slot16;
                var4 = 48;
                var4 = var10[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.SafeAreaPaddingView;
                var4 = {
                    'bottom': true,
                    'top': true
                };
                var9 = var9.container;
                var4.style = var9;
                var10 = _closure1_slot16;
                if (var7) {
                    _fun67856_ip = 282;
                    continue _fun67856
                }
            case 264:
                var9 = _closure1_slot22;
                var7 = {};
                var7.channel = var11;
                var7 = var10.bind(var3)(var9, var7);
                _fun67856_ip = 294;
                continue _fun67856;
            case 282:
                var9 = _closure1_slot21;
                var8 = {};
                var7 = var10.bind(var3)(var9, var8);
            case 294:
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var3 = function(arg0) { // Original name: showVoiceSettingsActionSheet, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 16;
        var1 = var1[var0];
        var0 = undefined;
        var5 = var2.bind(var0)(var1);
        var4 = var5.openLazy;
        var3 = {};
        var1 = arg0;
        var3.guildId = var1;
        var2 = function() { // Environment: var1
            var0 = global;
            var2 = var0.Promise;
            var1 = var2.resolve;
            var0 = _closure1_slot20;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = 'voice settings';
        var1 = var4.bind(var5)(var2, var1, var3);
        return var0;
    };
    var2.showVoiceSettingsActionSheet = var3;
    var3 = function(arg0) { // Original name: ChannelCallConnectingHeader, environment: var1
        _fun67863: for (var _fun67863_ip = 0;;) switch (_fun67863_ip) {
            case 0:
                var1 = arg0;
                var16 = var1.channel;
                var _closure2_slot0 = var16;
                var1 = _closure1_slot19;
                var3 = undefined;
                var10 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 20;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useIsVoiceChannelLocked;
                var1 = var1.bind(var2)(var16);
                var6 = _closure1_slot7;
                var4 = var6.can;
                var2 = _closure1_slot15;
                var2 = var2.CREATE_INSTANT_INVITE;
                var2 = var4.bind(var6)(var2, var16);
                var6 = null;
                var12 = null;
                if (!var2) {
                    _fun67863_ip = 103;
                    continue _fun67863
                }
            case 91:
                var12 = null;
                if (var1) {
                    _fun67863_ip = 103;
                    continue _fun67863
                }
            case 96:
                var12 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 21;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.showInstantInviteActionSheet;
                    var1 = _closure2_slot0;
                    var0 = {};
                    var4 = _closure1_slot13;
                    var4 = var4.VOICE_CHANNEL;
                    var0.source = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
            case 103:
                var2 = _closure1_slot18;
                var1 = _closure1_slot17;
                var0 = {};
                var8 = _closure1_slot16;
                var7 = _closure1_slot4;
                var4 = {};
                var11 = {};
                var9 = 4;
                var11.width = var9;
                var4.style = var11;
                var7 = var8.bind(var3)(var7, var4);
                var4 = new Array(4);
                var4[0] = var7;
                var7 = var6 != var12;
                var6 = null;
                if (!var7) {
                    _fun67863_ip = 279;
                    continue _fun67863
                }
            case 159:
                var11 = _closure1_slot16;
                var14 = _closure1_slot1;
                var17 = _closure1_slot2;
                var7 = 22;
                var7 = var17[var7];
                var8 = var14.bind(var3)(var7);
                var7 = {};
                var13 = 23;
                var13 = var17[var13];
                var13 = var14.bind(var3)(var13);
                var7.source = var13;
                var7.onPress = var12;
                var13 = _closure1_slot0;
                var12 = 24;
                var14 = var17[var12];
                var14 = var13.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.formatToPlainString;
                var12 = var17[var12];
                var12 = var13.bind(var3)(var12);
                var12 = var12.t;
                var13 = var12["dHHb/2"];
                var12 = {};
                var16 = var16.name;
                var12.channelName = var16;
                var12 = var14.bind(var15)(var13, var12);
                var7.accessibilityLabel = var12;
                var6 = var11.bind(var3)(var8, var7);
            case 279:
                var4[1] = var6;
                var8 = _closure1_slot16;
                var7 = _closure1_slot4;
                var6 = {};
                var10 = var10.spacer;
                var6.style = var10;
                var6 = var8.bind(var3)(var7, var6);
                var4[2] = var6;
                var7 = _closure1_slot16;
                var6 = _closure1_slot4;
                var5 = {};
                var8 = {};
                var8.width = var9;
                var5.style = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.ChannelCallConnectingHeader = var3;
    var1 = function(arg0) { // Original name: CallConnectingActionBar, environment: var1
        var0 = arg0;
        var8 = var0.channel;
        var0 = _closure1_slot19;
        var3 = undefined;
        var4 = var0.bind(var3)();
        var2 = _closure1_slot18;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = var4.actionBarContainer;
        var0.style = var4;
        var7 = _closure1_slot16;
        var6 = _closure1_slot23;
        var4 = {};
        var4.channel = var8;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var7 = _closure1_slot16;
        var6 = _closure1_slot24;
        var5 = {};
        var5.channel = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.CallConnectingActionBar = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3478, 3435, 3050, 3479, 3483, 7842, 7847, 660, 3967, 483, 33, 1297, 671, 7864, 3237, 4887, 4889, 8422, 8400, 8287, 8439, 8440, 1234, 8441, 3895, 4832, 8167, 4189, 3205, 8445, 8250, 566, 8249, 5648, 8453, 8252, 8454, 5724, 8455, 5684, 5536, 795, 4259, 4273, 5809, 3968, 4690, 2]);