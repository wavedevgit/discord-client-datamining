// modules/voice_panel/native/card/VoicePanelCardFloatingControls.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun111738: for (var _fun111738_ip = 0;;) switch (_fun111738_ip) {
        case 0:
            var4 = require;
            var11 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var11;
            var _closure1_slot2 = var5;
            var0 = function(arg0) { // Original name: StreamIcon, environment: var1
                _fun111739: for (var _fun111739_ip = 0;;) switch (_fun111739_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = var0.voicePlatform;
                        var4 = _closure1_slot21;
                        var3 = undefined;
                        var4 = var4.bind(var3)();
                        var9 = _closure1_slot3;
                        var8 = var9.useContext;
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var5 = 18;
                        var5 = var7[var5];
                        var5 = var6.bind(var3)(var5);
                        var5 = var8.bind(var9)(var5);
                        var10 = var5.controlsSpecs;
                        var _closure2_slot0 = var10;
                        var8 = _closure1_slot0;
                        var5 = 13;
                        var5 = var7[var5];
                        var8 = var8.bind(var3)(var5);
                        var5 = var8.useAnimatedStyle;
                        var1 = function() { // Original name: o, environment: var1
                            _fun111740: for (var _fun111740_ip = 0;;) switch (_fun111740_ip) {
                                case 0:
                                    var1 = _closure2_slot0;
                                    var0 = var1.get;
                                    var0 = var0.bind(var1)();
                                    var1 = var0.mode;
                                    var0 = _closure1_slot12;
                                    var0 = var0.HIDDEN;
                                    var2 = var1 === var0;
                                    var0 = {};
                                    var1 = 4;
                                    if (!var2) {
                                        _fun111740_ip = 49;
                                        continue _fun111740
                                    }
                                case 46:
                                    var1 = 2;
                                case 49:
                                    var0.marginLeft = var1;
                                    var1 = 0;
                                    if (!var2) {
                                        _fun111740_ip = 62;
                                        continue _fun111740
                                    }
                                case 59:
                                    var1 = 2;
                                case 62:
                                    var0.marginRight = var1;
                                    return var0;
                            }
                        };
                        var9 = {};
                        var9.controlsSpecs = var10;
                        var10 = _closure1_slot12;
                        var9.VoicePanelControlsModes = var10;
                        var10 = 4;
                        var9.GAP = var10;
                        var1.__closure = var9;
                        var9 = 15914667672663.0;
                        var1.__workletHash = var9;
                        var9 = _closure1_slot24;
                        var1.__initData = var9;
                        var5 = var5.bind(var8)(var1);
                        var1 = 29;
                        var1 = var7[var1];
                        var6 = var6.bind(var3)(var1);
                        var1 = _closure1_slot16;
                        var1 = var1.XBOX;
                        if (!(var2 !== var1)) {
                            _fun111739_ip = 221;
                            continue _fun111739
                        }
                    case 185:
                        var1 = _closure1_slot16;
                        var1 = var1.MOBILE;
                        if (!(var2 === var1)) {
                            _fun111739_ip = 241;
                            continue _fun111739
                        }
                    case 199:
                        var2 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var1 = 31;
                        var1 = var7[var1];
                        var6 = var2.bind(var3)(var1);
                        _fun111739_ip = 241;
                        continue _fun111739;
                    case 221:
                        var2 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var1 = 30;
                        var1 = var7[var1];
                        var6 = var2.bind(var3)(var1);
                    case 241:
                        var2 = _closure1_slot17;
                        var1 = _closure1_slot20;
                        var0 = {};
                        var0.source = var6;
                        var6 = var4.iconWithoutBackground;
                        var4 = new Array(2);
                        var4[0] = var6;
                        var4[1] = var5;
                        var0.style = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var _closure1_slot43 = var0;
            var0 = function(arg0) { // Original name: AnimatedLabelIcon, environment: var1
                _fun111741: for (var _fun111741_ip = 0;;) switch (_fun111741_ip) {
                    case 0:
                        var0 = arg0;
                        var4 = var0.icon;
                        var1 = _closure1_slot21;
                        var3 = undefined;
                        var9 = var1.bind(var3)();
                        var2 = var4.type;
                        var5 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var6 = 32;
                        var1 = var1[var6];
                        var1 = var5.bind(var3)(var1);
                        var1 = var1.VoicePanelCardUserStateIconType;
                        var1 = var1.STREAM_ICON;
                        if (!(var1 !== var2)) {
                            _fun111741_ip = 533;
                            continue _fun111741
                        }
                    case 65:
                        var5 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var1 = var1[var6];
                        var1 = var5.bind(var3)(var1);
                        var1 = var1.VoicePanelCardUserStateIconType;
                        var1 = var1.USER_VIDEO_ICON;
                        if (!(var1 !== var2)) {
                            _fun111741_ip = 435;
                            continue _fun111741
                        }
                    case 101:
                        var5 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var1 = var1[var6];
                        var1 = var5.bind(var3)(var1);
                        var1 = var1.VoicePanelCardUserStateIconType;
                        var1 = var1.MUTE_DEAFEN_ICON;
                        if (!(var1 !== var2)) {
                            _fun111741_ip = 290;
                            continue _fun111741
                        }
                    case 137:
                        var5 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var1 = var1[var6];
                        var1 = var5.bind(var3)(var1);
                        var1 = var1.VoicePanelCardUserStateIconType;
                        var1 = var1.USER_DISCONNECTED_ICON;
                        if (!(var1 !== var2)) {
                            _fun111741_ip = 172;
                            continue _fun111741
                        }
                    case 170:
                        return var3;
                    case 172:
                        var5 = _closure1_slot17;
                        var2 = _closure1_slot4;
                        var1 = {};
                        var6 = var9.iconContainer;
                        var1.style = var6;
                        var6 = var4.onPress;
                        var1.onPress = var6;
                        var8 = _closure1_slot17;
                        var7 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var6 = 35;
                        var6 = var12[var6];
                        var6 = var7.bind(var3)(var6);
                        var7 = var6.CircleErrorIcon;
                        var6 = {};
                        var10 = 'xs';
                        var6.size = var10;
                        var11 = _closure1_slot1;
                        var10 = 16;
                        var10 = var12[var10];
                        var10 = var11.bind(var3)(var10);
                        var10 = var10.colors;
                        var10 = var10.TEXT_FEEDBACK_WARNING;
                        var6.color = var10;
                        var6 = var8.bind(var3)(var7, var6);
                        var1.children = var6;
                        var1 = var5.bind(var3)(var2, var1);
                        return var1;
                    case 290:
                        var5 = _closure1_slot17;
                        var2 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var1 = 34;
                        var1 = var13[var1];
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var6 = var9.iconContainer;
                        var1.style = var6;
                        var8 = _closure1_slot17;
                        var7 = _closure1_slot4;
                        var6 = {};
                        var10 = var4.onPress;
                        var6.onPress = var10;
                        var10 = 12;
                        var6.hitSlop = var10;
                        var12 = _closure1_slot17;
                        var11 = _closure1_slot0;
                        var10 = 33;
                        var10 = var13[var10];
                        var10 = var11.bind(var3)(var10);
                        var11 = var10.MuteDeafenIcon;
                        var10 = {};
                        var13 = var9.icon;
                        var10.style = var13;
                        var13 = var4.muteDeafenIconState;
                        var10.state = var13;
                        var13 = true;
                        var10.alwaysWhite = var13;
                        var10 = var12.bind(var3)(var11, var10);
                        var6.children = var10;
                        var6 = var8.bind(var3)(var7, var6);
                        var1.children = var6;
                        var1 = var5.bind(var3)(var2, var1);
                        return var1;
                    case 435:
                        var5 = _closure1_slot17;
                        var2 = _closure1_slot4;
                        var1 = {};
                        var6 = var9.iconContainer;
                        var1.style = var6;
                        var6 = var4.onPress;
                        var1.onPress = var6;
                        var8 = _closure1_slot17;
                        var7 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var6 = 33;
                        var6 = var10[var6];
                        var6 = var7.bind(var3)(var6);
                        var7 = var6.VideoIcon;
                        var6 = {};
                        var9 = var9.icon;
                        var6.style = var9;
                        var9 = var4.videoIconState;
                        var6.state = var9;
                        var6 = var8.bind(var3)(var7, var6);
                        var1.children = var6;
                        var1 = var5.bind(var3)(var2, var1);
                        return var1;
                    case 533:
                        var2 = _closure1_slot17;
                        var1 = _closure1_slot43;
                        var0 = {};
                        var4 = var4.voicePlatform;
                        var0.voicePlatform = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var _closure1_slot44 = var0;
            var0 = function(arg0, arg1) { // Original name: getAccessibilityLabel, environment: var1
                _fun111742: for (var _fun111742_ip = 0;;) switch (_fun111742_ip) {
                    case 0:
                        var3 = arg0;
                        var4 = arg1;
                        var2 = var3.find;
                        var1 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var1 = var0.type;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 32;
                            var2 = var2[var0];
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2);
                            var0 = var0.VoicePanelCardUserStateIconType;
                            var0 = var0.STREAM_ICON;
                            var0 = var1 === var0;
                            return var0;
                        };
                        var2 = var2.bind(var3)(var1);
                        var1 = null;
                        if (!(var1 == var2)) {
                            _fun111742_ip = 269;
                            continue _fun111742
                        }
                    case 34:
                        var2 = var3.find;
                        var0 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var1 = var0.type;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 32;
                            var2 = var2[var0];
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2);
                            var0 = var0.VoicePanelCardUserStateIconType;
                            var0 = var0.MUTE_DEAFEN_ICON;
                            var0 = var1 === var0;
                            return var0;
                        };
                        var0 = var2.bind(var3)(var0);
                        if (!(var1 == var0)) {
                            _fun111742_ip = 57;
                            continue _fun111742
                        }
                    case 55:
                        return var4;
                    case 57:
                        var2 = var0.muteDeafenIconState;
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var6 = 36;
                        var1 = var1[var6];
                        var5 = undefined;
                        var1 = var3.bind(var5)(var1);
                        var1 = var1.MuteDeafenIconState;
                        var1 = var1.DEAFENED;
                        if (!(var1 !== var2)) {
                            _fun111742_ip = 203;
                            continue _fun111742
                        }
                    case 104:
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var1 = var1[var6];
                        var1 = var3.bind(var5)(var1);
                        var1 = var1.MuteDeafenIconState;
                        var1 = var1.DEAFENED_SERVER;
                        if (!(var1 !== var2)) {
                            _fun111742_ip = 203;
                            continue _fun111742
                        }
                    case 137:
                        var2 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 23;
                        var3 = var7[var1];
                        var3 = var2.bind(var5)(var3);
                        var6 = var3.intl;
                        var3 = var6.formatToPlainString;
                        var1 = var7[var1];
                        var1 = var2.bind(var5)(var1);
                        var1 = var1.t;
                        var2 = var1.Hd1oVG;
                        var1 = {};
                        var1.username = var4;
                        var1 = var3.bind(var6)(var2, var1);
                        return var1;
                    case 203:
                        var1 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var0 = 23;
                        var2 = var6[var0];
                        var2 = var1.bind(var5)(var2);
                        var3 = var2.intl;
                        var2 = var3.formatToPlainString;
                        var0 = var6[var0];
                        var0 = var1.bind(var5)(var0);
                        var0 = var0.t;
                        var1 = var0["9hDjai"];
                        var0 = {};
                        var0.username = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    case 269:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var0 = 23;
                        var2 = var6[var0];
                        var1 = undefined;
                        var2 = var5.bind(var1)(var2);
                        var3 = var2.intl;
                        var2 = var3.formatToPlainString;
                        var0 = var6[var0];
                        var0 = var5.bind(var1)(var0);
                        var0 = var0.t;
                        var1 = var0.I0mOAs;
                        var0 = {};
                        var0.username = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var _closure1_slot45 = var0;
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
            var3 = 1;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var7 = var3.Platform;
            var3 = var3.Pressable;
            var _closure1_slot4 = var3;
            var3 = 2;
            var3 = var5[var3];
            var3 = var11.bind(var0)(var3);
            var _closure1_slot5 = var3;
            var3 = 3;
            var3 = var5[var3];
            var3 = var11.bind(var0)(var3);
            var _closure1_slot6 = var3;
            var3 = 4;
            var3 = var5[var3];
            var3 = var11.bind(var0)(var3);
            var _closure1_slot7 = var3;
            var3 = 5;
            var3 = var5[var3];
            var3 = var11.bind(var0)(var3);
            var _closure1_slot8 = var3;
            var3 = 6;
            var3 = var5[var3];
            var3 = var11.bind(var0)(var3);
            var _closure1_slot9 = var3;
            var3 = 7;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var7 = var3.MODE_CHANGE_PHYSICS;
            var _closure1_slot10 = var7;
            var3 = var3.VoicePanelModes;
            var _closure1_slot11 = var3;
            var3 = 8;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.VoicePanelControlsModes;
            var _closure1_slot12 = var3;
            var3 = 9;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var13 = var3.VOICE_PANEL_CARD_INNER_PADDING;
            var _closure1_slot13 = var13;
            var3 = 10;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.ThemeTypes;
            var _closure1_slot14 = var3;
            var3 = 11;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var7 = var3.ParticipantTypes;
            var _closure1_slot15 = var7;
            var3 = var3.VoicePlatforms;
            var _closure1_slot16 = var3;
            var3 = 12;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var7 = var3.jsx;
            var _closure1_slot17 = var7;
            var7 = var3.jsxs;
            var _closure1_slot18 = var7;
            var3 = var3.Fragment;
            var _closure1_slot19 = var3;
            var3 = 13;
            var3 = var5[var3];
            var8 = var11.bind(var0)(var3);
            var7 = var8.createAnimatedComponent;
            var16 = 14;
            var3 = var5[var16];
            var3 = var11.bind(var0)(var3);
            var3 = var7.bind(var8)(var3);
            var _closure1_slot20 = var3;
            var3 = 15;
            var3 = var5[var3];
            var8 = var4.bind(var0)(var3);
            var7 = var8.createStyles;
            var3 = {};
            var12 = 'center';
            var9 = {
                'position': 'absolute',
                'left': 8,
                'right': 8,
                'bottom': 8,
                'justifyContent': 'center',
                'alignItems': 'center',
                'marginHorizontal': 8
            };
            var3.labelPositionContainer = var9;
            var9 = {
                'alignItems': 'center',
                'position': 'relative',
                'flexShrink': 1
            };
            var9.paddingStart = var13;
            var9.paddingEnd = var13;
            var3.leftAlignedLabelPositionContainer = var9;
            var9 = {
                'position': 'absolute',
                'bottom': null,
                'width': '100%',
                'display': 'flex',
                'justifyContent': 'space-between',
                'alignItems': 'center',
                'flexDirection': 'row',
                'gap': 4
            };
            var9.bottom = var13;
            var3.bottomLabel = var9;
            var9 = {
                'display': 'flex',
                'flexDirection': 'row',
                'justifyContent': 'flex-start',
                'alignItems': 'center',
                'borderRadius': null,
                'overflow': 'hidden',
                'paddingHorizontal': 8,
                'backgroundColor': null,
                'height': 28,
                'gap': 4
            };
            var10 = 16;
            var14 = var5[var10];
            var14 = var11.bind(var0)(var14);
            var14 = var14.radii;
            var14 = var14.round;
            var9.borderRadius = var14;
            var14 = var5[var10];
            var14 = var11.bind(var0)(var14);
            var14 = var14.colors;
            var14 = var14.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
            var9.backgroundColor = var14;
            var3.labelOuterContainer = var9;
            var9 = {
                'display': 'flex',
                'flexDirection': 'row',
                'marginStart': 4294967292,
                'marginEnd': 4294967292
            };
            var3.initialIcons = var9;
            var9 = {
                'width': 12,
                'height': 12
            };
            var14 = var5[var10];
            var14 = var11.bind(var0)(var14);
            var14 = var14.colors;
            var14 = var14.WHITE;
            var9.tintColor = var14;
            var3.icon = var9;
            var9 = {
                'width': 16,
                'height': 16
            };
            var14 = var5[var10];
            var14 = var11.bind(var0)(var14);
            var14 = var14.colors;
            var14 = var14.WHITE;
            var9.tintColor = var14;
            var3.iconWithoutBackground = var9;
            var9 = {
                'width': 20,
                'height': 20,
                'borderRadius': null,
                'alignItems': 'center',
                'justifyContent': 'center'
            };
            var14 = 20;
            var15 = var5[var10];
            var15 = var11.bind(var0)(var15);
            var15 = var15.radii;
            var15 = var15.round;
            var9.borderRadius = var15;
            var3.iconContainer = var9;
            var9 = {
                'flexDirection': 'row',
                'alignItems': 'center',
                'gap': 4,
                'overflow': 'hidden',
                'flexShrink': 1
            };
            var3.floatingContainer = var9;
            var9 = {
                'flexDirection': 'row',
                'alignItems': 'center',
                'overflow': 'hidden',
                'flexShrink': 1
            };
            var3.floatingTextContainer = var9;
            var9 = {
                'overflow': 'hidden',
                'paddingStart': 4,
                'paddingEnd': 4,
                'flexShrink': 1,
                'lineHeight': 14
            };
            var3.floatingText = var9;
            var9 = {
                'position': 'absolute',
                'top': 8,
                'right': 8,
                'padding': 6
            };
            var15 = var5[var10];
            var15 = var11.bind(var0)(var15);
            var15 = var15.radii;
            var15 = var15.round;
            var9.borderRadius = var15;
            var15 = var5[var10];
            var15 = var11.bind(var0)(var15);
            var15 = var15.colors;
            var15 = var15.BACKGROUND_SURFACE_HIGH;
            var9.backgroundColor = var15;
            var3.ringingIconContainer = var9;
            var9 = {};
            var15 = var5[var10];
            var15 = var11.bind(var0)(var15);
            var15 = var15.colors;
            var15 = var15.STATUS_POSITIVE;
            var9.tintColor = var15;
            var3.ringingIcon = var9;
            var9 = {};
            var15 = -2;
            var9.marginEnd = var15;
            var3.secureFramesIcon = var9;
            var9 = {
                'display': 'flex',
                'alignItems': 'center',
                'justifyContent': 'center',
                'position': 'relative',
                'flexShrink': 0
            };
            var9.marginEnd = var13;
            var3.hangStatusContainer = var9;
            var9 = {
                'width': 16,
                'height': 16
            };
            var3.hangStatus = var9;
            var9 = {};
            var13 = 17;
            var15 = var5[var13];
            var17 = var4.bind(var0)(var15);
            var15 = var17.isIOS;
            var17 = var15.bind(var17)();
            var15 = var10;
            if (!var17) {
                _fun111738_ip = 993;
                continue _fun111738
            }
        case 990:
            var15 = var16;
        case 993:
            var9.fontSize = var15;
            var13 = var5[var13];
            var15 = var4.bind(var0)(var13);
            var13 = var15.isIOS;
            var15 = var13.bind(var15)();
            var13 = undefined;
            if (!var15) {
                _fun111738_ip = 1025;
                continue _fun111738
            }
        case 1022:
            var13 = var14;
        case 1025:
            var9.lineHeight = var13;
            var9.textAlign = var12;
            var3.textEmojiHangStatus = var9;
            var9 = {};
            var10 = var5[var10];
            var10 = var11.bind(var0)(var10);
            var10 = var10.colors;
            var10 = var10.WHITE;
            var9.tintColor = var10;
            var3.hangStatusAdd = var9;
            var3 = var7.bind(var8)(var3);
            var _closure1_slot21 = var3;
            var3 = {};
            var7 = 'function VoicePanelCardFloatingControlsTsx1(){const{isSelf,selfHangStatus,controlsHidden,mode,VoicePanelModes,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const hidden=(isSelf&&selfHangStatus==null?controlsHidden.get():false)||mode.get()===VoicePanelModes.PIP;return{opacity:withSpring(hidden?0:1,MODE_CHANGE_PHYSICS),zIndex:1};}';
            var3.code = var7;
            var _closure1_slot22 = var3;
            var7 = var6.memo;
            var3 = function(arg0) { // Original name: HangStatusButton, environment: var1
                _fun111745: for (var _fun111745_ip = 0;;) switch (_fun111745_ip) {
                    case 0:
                        var1 = arg0;
                        var15 = var1.userId;
                        var _closure2_slot0 = var15;
                        var14 = var1.isSelf;
                        var _closure2_slot1 = var14;
                        var18 = var1.controlsHidden;
                        var _closure2_slot2 = var18;
                        var9 = var1.speaking;
                        var8 = var1.layout;
                        var1 = _closure1_slot21;
                        var4 = undefined;
                        var10 = var1.bind(var4)();
                        var3 = _closure1_slot3;
                        var2 = var3.useContext;
                        var6 = _closure1_slot1;
                        var17 = _closure1_slot2;
                        var1 = 18;
                        var1 = var17[var1];
                        var1 = var6.bind(var4)(var1);
                        var1 = var2.bind(var3)(var1);
                        var6 = var1.channelId;
                        var _closure2_slot3 = var6;
                        var11 = var1.mode;
                        var _closure2_slot4 = var11;
                        var16 = _closure1_slot0;
                        var1 = 19;
                        var1 = var17[var1];
                        var2 = var16.bind(var4)(var1);
                        var1 = var2.useHangStatusActivity;
                        var12 = var1.bind(var2)(var15);
                        var _closure2_slot5 = var12;
                        var1 = 20;
                        var1 = var17[var1];
                        var7 = var16.bind(var4)(var1);
                        var3 = var7.useStateFromStores;
                        var1 = _closure1_slot7;
                        var2 = new Array(1);
                        var2[0] = var1;
                        var1 = function() { // Environment: var0
                            var1 = _closure1_slot7;
                            var0 = var1.getHangStatusActivity;
                            var0 = var0.bind(var1)();
                            return var0;
                        };
                        var13 = var3.bind(var7)(var2, var1);
                        var _closure2_slot6 = var13;
                        var1 = 13;
                        var1 = var17[var1];
                        var3 = var16.bind(var4)(var1);
                        var2 = var3.useAnimatedStyle;
                        var1 = function() { // Original name: _, environment: var0
                            _fun111747: for (var _fun111747_ip = 0;;) switch (_fun111747_ip) {
                                case 0:
                                    var1 = _closure2_slot1;
                                    var1 = !var1;
                                    if (var1) {
                                        _fun111747_ip = 23;
                                        continue _fun111747
                                    }
                                case 13:
                                    var3 = _closure2_slot6;
                                    var2 = null;
                                    var1 = var2 != var3;
                                case 23:
                                    var6 = !var1;
                                    if (var1) {
                                        _fun111747_ip = 42;
                                        continue _fun111747
                                    }
                                case 29:
                                    var2 = _closure2_slot2;
                                    var1 = var2.get;
                                    var6 = var1.bind(var2)();
                                case 42:
                                    if (var6) {
                                        _fun111747_ip = 75;
                                        continue _fun111747
                                    }
                                case 45:
                                    var1 = _closure2_slot4;
                                    var0 = var1.get;
                                    var1 = var0.bind(var1)();
                                    var0 = _closure1_slot11;
                                    var0 = var0.PIP;
                                    var6 = var1 === var0;
                                case 75:
                                    var0 = {};
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var1 = 21;
                                    var3 = var3[var1];
                                    var1 = undefined;
                                    var5 = var4.bind(var1)(var3);
                                    var4 = var5.withSpring;
                                    var1 = 1;
                                    var3 = var1;
                                    if (!var6) {
                                        _fun111747_ip = 118;
                                        continue _fun111747
                                    }
                                case 116:
                                    var3 = 0;
                                case 118:
                                    var2 = _closure1_slot10;
                                    var2 = var4.bind(var5)(var3, var2);
                                    var0.opacity = var2;
                                    var0.zIndex = var1;
                                    return var0;
                            }
                        };
                        var7 = {};
                        var7.isSelf = var14;
                        var7.selfHangStatus = var13;
                        var7.controlsHidden = var18;
                        var7.mode = var11;
                        var11 = _closure1_slot11;
                        var7.VoicePanelModes = var11;
                        var11 = 21;
                        var11 = var17[var11];
                        var11 = var16.bind(var4)(var11);
                        var11 = var11.withSpring;
                        var7.withSpring = var11;
                        var11 = _closure1_slot10;
                        var7.MODE_CHANGE_PHYSICS = var11;
                        var1.__closure = var7;
                        var7 = 12650844133733.0;
                        var1.__workletHash = var7;
                        var7 = _closure1_slot22;
                        var1.__initData = var7;
                        var11 = var2.bind(var3)(var1);
                        var3 = _closure1_slot3;
                        var2 = var3.useCallback;
                        var1 = new Array(5);
                        var1[0] = var12;
                        var1[1] = var14;
                        var1[2] = var13;
                        var1[3] = var6;
                        var1[4] = var15;
                        var0 = function() { // Environment: var0
                            _fun111748: for (var _fun111748_ip = 0;;) switch (_fun111748_ip) {
                                case 0:
                                    var3 = _closure2_slot1;
                                    var5 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var0 = 22;
                                    var4 = var4[var0];
                                    var0 = undefined;
                                    var7 = var5.bind(var0)(var4);
                                    var5 = var7.getHangStatusText;
                                    var4 = _closure2_slot0;
                                    if (var3) {
                                        _fun111748_ip = 57;
                                        continue _fun111748
                                    }
                                case 45:
                                    var3 = _closure2_slot5;
                                    var6 = var5.bind(var7)(var4, var3);
                                    _fun111748_ip = 67;
                                    continue _fun111748;
                                case 57:
                                    var3 = _closure2_slot6;
                                    var6 = var5.bind(var7)(var4, var3);
                                case 67:
                                    var3 = null;
                                    if (!(var3 == var6)) {
                                        _fun111748_ip = 128;
                                        continue _fun111748
                                    }
                                case 73:
                                    var7 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var3 = 23;
                                    var4 = var8[var3];
                                    var4 = var7.bind(var0)(var4);
                                    var5 = var4.intl;
                                    var4 = var5.string;
                                    var3 = var8[var3];
                                    var3 = var7.bind(var0)(var3);
                                    var3 = var3.t;
                                    var3 = var3.d8R2VC;
                                    var6 = var4.bind(var5)(var3);
                                case 128:
                                    var3 = _closure2_slot1;
                                    if (var3) {
                                        _fun111748_ip = 178;
                                        continue _fun111748
                                    }
                                case 135:
                                    var4 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var3 = 25;
                                    var3 = var5[var3];
                                    var5 = var4.bind(var0)(var3);
                                    var4 = var5.open;
                                    var3 = {};
                                    var3.key = var6;
                                    var3.content = var6;
                                    var3 = var4.bind(var5)(var3);
                                    _fun111748_ip = 222;
                                    continue _fun111748;
                                case 178:
                                    var3 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var2 = 24;
                                    var2 = var4[var2];
                                    var4 = var3.bind(var0)(var2);
                                    var3 = var4.showHangStatusPickerActionSheet;
                                    var2 = {};
                                    var1 = _closure2_slot3;
                                    var2.channelId = var1;
                                    var1 = true;
                                    var1 = var3.bind(var4)(var2, var1);
                                case 222:
                                    return var0;
                            }
                        };
                        var6 = var2.bind(var3)(var0, var1);
                        var0 = null;
                        var7 = null;
                        if (!var14) {
                            _fun111745_ip = 440;
                            continue _fun111745
                        }
                    case 366:
                        var3 = _closure1_slot17;
                        var2 = _closure1_slot0;
                        var16 = _closure1_slot2;
                        var1 = 26;
                        var1 = var16[var1];
                        var1 = var2.bind(var4)(var1);
                        var2 = var1.ReactionIcon;
                        var1 = {};
                        var16 = 'xs';
                        var1.size = var16;
                        var17 = var10.hangStatus;
                        var16 = new Array(2);
                        var16[0] = var17;
                        var17 = var10.hangStatusAdd;
                        var16[1] = var17;
                        var1.style = var16;
                        var7 = var3.bind(var4)(var2, var1);
                    case 440:
                        var1 = var14;
                        if (!var1) {
                            _fun111745_ip = 450;
                            continue _fun111745
                        }
                    case 446:
                        var1 = var0 != var13;
                    case 450:
                        if (var1) {
                            _fun111745_ip = 457;
                            continue _fun111745
                        }
                    case 453:
                        var1 = var0 != var12;
                    case 457:
                        if (!var1) {
                            _fun111745_ip = 541;
                            continue _fun111745
                        }
                    case 460:
                        var3 = _closure1_slot17;
                        var2 = _closure1_slot1;
                        var16 = _closure1_slot2;
                        var1 = 27;
                        var1 = var16[var1];
                        var2 = var2.bind(var4)(var1);
                        var1 = {};
                        var1.userId = var15;
                        var15 = 16;
                        var1.size = var15;
                        var15 = var10.textEmojiHangStatus;
                        var1.textEmojiStyle = var15;
                        var15 = var10.hangStatus;
                        var1.emojiStyle = var15;
                        if (!var14) {
                            _fun111745_ip = 525;
                            continue _fun111745
                        }
                    case 522:
                        var12 = var13;
                    case 525:
                        var1.hangStatusActivity = var12;
                        var1.speaking = var9;
                        var7 = var3.bind(var4)(var2, var1);
                    case 541:
                        var1 = var0 == var7;
                        var0 = null;
                        if (var1) {
                            _fun111745_ip = 675;
                            continue _fun111745
                        }
                    case 553:
                        var3 = _closure1_slot17;
                        var2 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var1 = 28;
                        var1 = var9[var1];
                        var2 = var2.bind(var4)(var1);
                        var1 = {};
                        var12 = var10.hangStatusContainer;
                        var10 = new Array(2);
                        var10[0] = var12;
                        var10[1] = var11;
                        var1.style = var10;
                        var1.layout = var8;
                        var1.icon = var7;
                        var1.onPress = var6;
                        var8 = _closure1_slot0;
                        var5 = 23;
                        var6 = var9[var5];
                        var6 = var8.bind(var4)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var9[var5];
                        var5 = var8.bind(var4)(var5);
                        var5 = var5.t;
                        var5 = var5.d8R2VC;
                        var5 = var6.bind(var7)(var5);
                        var1.accessibilityLabel = var5;
                        var0 = var3.bind(var4)(var2, var1);
                    case 675:
                        return var0;
                }
            };
            var3 = var7.bind(var6)(var3);
            var _closure1_slot23 = var3;
            var3 = {};
            var7 = 'function VoicePanelCardFloatingControlsTsx2(){const{controlsSpecs,VoicePanelControlsModes,GAP}=this.__closure;const hidden=controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN;return{marginLeft:hidden?2:GAP,marginRight:hidden?2:0};}';
            var3.code = var7;
            var _closure1_slot24 = var3;
            var3 = {};
            var7 = "function VoicePanelCardFloatingControlsTsx3(){const{controlsHidden,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const hidden=controlsHidden.get();return{position:'absolute',top:hidden?-(FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING*2):VOICE_PANEL_CARD_INNER_PADDING,left:VOICE_PANEL_CARD_INNER_PADDING,opacity:withSpring(hidden?0:1,MODE_CHANGE_PHYSICS),zIndex:1};}";
            var3.code = var7;
            var _closure1_slot25 = var3;
            var7 = var6.memo;
            var3 = function(arg0) { // Environment: var1
                _fun111749: for (var _fun111749_ip = 0;;) switch (_fun111749_ip) {
                    case 0:
                        var1 = arg0;
                        var8 = var1.participant;
                        var _closure2_slot0 = var8;
                        var2 = var1.controlsHidden;
                        var4 = var1.isSelf;
                        var6 = var1.layout;
                        var10 = _closure1_slot3;
                        var7 = var10.useContext;
                        var12 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var1 = 18;
                        var1 = var9[var1];
                        var3 = undefined;
                        var1 = var12.bind(var3)(var1);
                        var1 = var7.bind(var10)(var1);
                        var11 = var1.guildId;
                        var _closure2_slot1 = var11;
                        var1 = function(arg0) { // Original name: useTopLeftButtonStyles, environment: var0
                            var5 = arg0;
                            var _closure3_slot0 = var5;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var1 = 13;
                            var1 = var8[var1];
                            var6 = undefined;
                            var2 = var7.bind(var6)(var1);
                            var1 = var2.useAnimatedStyle;
                            var0 = function() { // Original name: n, environment: var0
                                _fun111751: for (var _fun111751_ip = 0;;) switch (_fun111751_ip) {
                                    case 0:
                                        var1 = _closure3_slot0;
                                        var0 = var1.get;
                                        var6 = var0.bind(var1)();
                                        var0 = {};
                                        var1 = 'absolute';
                                        var0.position = var1;
                                        var4 = _closure1_slot13;
                                        if (var6) {
                                            _fun111751_ip = 41;
                                            continue _fun111751
                                        }
                                    case 36:
                                        var1 = var4;
                                        _fun111751_ip = 58;
                                        continue _fun111751;
                                    case 41:
                                        var3 = 2;
                                        var4 = var3 * var4;
                                        var3 = 28;
                                        var3 = var3 + var4;
                                        var1 = -var3;
                                    case 58:
                                        var0.top = var1;
                                        var1 = _closure1_slot13;
                                        var0.left = var1;
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var1 = 21;
                                        var3 = var3[var1];
                                        var1 = undefined;
                                        var5 = var4.bind(var1)(var3);
                                        var4 = var5.withSpring;
                                        var1 = 1;
                                        var3 = var1;
                                        if (!var6) {
                                            _fun111751_ip = 108;
                                            continue _fun111751
                                        }
                                    case 106:
                                        var3 = 0;
                                    case 108:
                                        var2 = _closure1_slot10;
                                        var2 = var4.bind(var5)(var3, var2);
                                        var0.opacity = var2;
                                        var0.zIndex = var1;
                                        return var0;
                                }
                            };
                            var4 = {};
                            var4.controlsHidden = var5;
                            var5 = 28;
                            var4.FLOATING_BAR_HEIGHT = var5;
                            var5 = _closure1_slot13;
                            var4.VOICE_PANEL_CARD_INNER_PADDING = var5;
                            var5 = 21;
                            var5 = var8[var5];
                            var5 = var7.bind(var6)(var5);
                            var5 = var5.withSpring;
                            var4.withSpring = var5;
                            var5 = _closure1_slot10;
                            var4.MODE_CHANGE_PHYSICS = var5;
                            var0.__closure = var4;
                            var4 = 14060283277726.0;
                            var0.__workletHash = var4;
                            var3 = _closure1_slot25;
                            var0.__initData = var3;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var7 = var1.bind(var3)(var2);
                        var10 = _closure1_slot3;
                        var2 = var10.useCallback;
                        var1 = new Array(2);
                        var1[0] = var11;
                        var1[1] = var8;
                        var0 = function() { // Environment: var0
                            _fun111752: for (var _fun111752_ip = 0;;) switch (_fun111752_ip) {
                                case 0:
                                    var3 = _closure1_slot0;
                                    var0 = _closure1_slot2;
                                    var5 = 37;
                                    var2 = var0[var5];
                                    var0 = undefined;
                                    var6 = var3.bind(var0)(var2);
                                    var3 = var6.isStableStreamParticipant;
                                    var2 = _closure2_slot0;
                                    var2 = var3.bind(var6)(var2);
                                    if (!var2) {
                                        _fun111752_ip = 143;
                                        continue _fun111752
                                    }
                                case 46:
                                    var7 = _closure1_slot8;
                                    var6 = var7.getStreamForUser;
                                    var2 = _closure2_slot0;
                                    var2 = var2.user;
                                    var3 = var2.id;
                                    var2 = _closure2_slot1;
                                    var8 = var6.bind(var7)(var3, var2);
                                    var2 = null;
                                    if (!(var2 != var8)) {
                                        _fun111752_ip = 260;
                                        continue _fun111752
                                    }
                                case 89:
                                    var7 = _closure1_slot0;
                                    var9 = _closure1_slot2;
                                    var2 = 38;
                                    var2 = var9[var2];
                                    var6 = var7.bind(var0)(var2);
                                    var3 = var6.stopStream;
                                    var2 = 39;
                                    var2 = var9[var2];
                                    var7 = var7.bind(var0)(var2);
                                    var2 = var7.encodeStreamKey;
                                    var2 = var2.bind(var7)(var8);
                                    var2 = var3.bind(var6)(var2);
                                case 143:
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var2 = var2[var5];
                                    var5 = var3.bind(var0)(var2);
                                    var3 = var5.isStableActivityParticipant;
                                    var2 = _closure2_slot0;
                                    var2 = var3.bind(var5)(var2);
                                    if (!var2) {
                                        _fun111752_ip = 258;
                                        continue _fun111752
                                    }
                                case 178:
                                    var3 = _closure1_slot6;
                                    var2 = var3.getCurrentEmbeddedActivity;
                                    var6 = var2.bind(var3)();
                                    var2 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var1 = 40;
                                    var1 = var3[var1];
                                    var3 = var2.bind(var0)(var1);
                                    var2 = var3.leaveActivity;
                                    var1 = {};
                                    var5 = null;
                                    var7 = var5 == var6;
                                    var5 = undefined;
                                    if (var7) {
                                        _fun111752_ip = 236;
                                        continue _fun111752
                                    }
                                case 231:
                                    var5 = var6.location;
                                case 236:
                                    var1.location = var5;
                                    var4 = _closure2_slot0;
                                    var4 = var4.applicationId;
                                    var1.applicationId = var4;
                                    var1 = var2.bind(var3)(var1);
                                case 258:
                                    return var0;
                                case 260:
                                    return var0;
                            }
                        };
                        var10 = var2.bind(var10)(var0, var1);
                        var2 = _closure1_slot17;
                        var0 = 28;
                        var0 = var9[var0];
                        var1 = var12.bind(var3)(var0);
                        var0 = {};
                        var11 = 41;
                        var11 = var9[var11];
                        var11 = var12.bind(var3)(var11);
                        var0.icon = var11;
                        var0.onPress = var10;
                        var0.style = var7;
                        var0.layout = var6;
                        var7 = _closure1_slot0;
                        var6 = 37;
                        var6 = var9[var6];
                        var7 = var7.bind(var3)(var6);
                        var6 = var7.isStableActivityParticipant;
                        var8 = var6.bind(var7)(var8);
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var5 = 23;
                        var6 = var10[var5];
                        var6 = var9.bind(var3)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var10[var5];
                        var5 = var9.bind(var3)(var5);
                        var5 = var5.t;
                        if (var8) {
                            _fun111749_ip = 280;
                            continue _fun111749
                        }
                    case 249:
                        if (var4) {
                            _fun111749_ip = 265;
                            continue _fun111749
                        }
                    case 252:
                        var4 = var5.q3O3J8;
                        var4 = var6.bind(var7)(var4);
                        _fun111749_ip = 278;
                        continue _fun111749;
                    case 265:
                        var8 = var5.S5anIc;
                        var4 = var6.bind(var7)(var8);
                    case 278:
                        _fun111749_ip = 291;
                        continue _fun111749;
                    case 280:
                        var5 = var5["R/FK4A"];
                        var4 = var6.bind(var7)(var5);
                    case 291:
                        var0.accessibilityLabel = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var3 = var7.bind(var6)(var3);
            var _closure1_slot26 = var3;
            var3 = {};
            var7 = "function VoicePanelCardFloatingControlsTsx4(){const{controlsHidden,mode,VoicePanelModes,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const hidden=controlsHidden.get()||mode.get()===VoicePanelModes.PIP;return{position:'absolute',top:hidden?-(FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING*2):VOICE_PANEL_CARD_INNER_PADDING,right:VOICE_PANEL_CARD_INNER_PADDING,opacity:withSpring(hidden?0:1,MODE_CHANGE_PHYSICS),zIndex:1};}";
            var3.code = var7;
            var _closure1_slot27 = var3;
            var7 = var6.memo;
            var3 = function(arg0) { // Environment: var1
                _fun111753: for (var _fun111753_ip = 0;;) switch (_fun111753_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = var0.participantId;
                        var _closure2_slot0 = var2;
                        var12 = var0.controlsHidden;
                        var _closure2_slot1 = var12;
                        var9 = var0.targetName;
                        var4 = var0.layout;
                        var7 = _closure1_slot3;
                        var6 = var7.useContext;
                        var10 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var0 = 18;
                        var0 = var11[var0];
                        var3 = undefined;
                        var0 = var10.bind(var3)(var0);
                        var0 = var6.bind(var7)(var0);
                        var13 = var0.setFocused;
                        var _closure2_slot2 = var13;
                        var0 = var0.mode;
                        var _closure2_slot3 = var0;
                        var8 = _closure1_slot3;
                        var7 = var8.useCallback;
                        var6 = new Array(2);
                        var6[0] = var13;
                        var6[1] = var2;
                        var2 = function() { // Environment: var1
                            var2 = _closure2_slot2;
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var7 = var7.bind(var8)(var2, var6);
                        var13 = _closure1_slot0;
                        var2 = 13;
                        var2 = var11[var2];
                        var6 = var13.bind(var3)(var2);
                        var2 = var6.useAnimatedStyle;
                        var1 = function() { // Original name: c, environment: var1
                            _fun111755: for (var _fun111755_ip = 0;;) switch (_fun111755_ip) {
                                case 0:
                                    var2 = _closure2_slot1;
                                    var1 = var2.get;
                                    var6 = var1.bind(var2)();
                                    if (var6) {
                                        _fun111755_ip = 49;
                                        continue _fun111755
                                    }
                                case 19:
                                    var1 = _closure2_slot3;
                                    var0 = var1.get;
                                    var1 = var0.bind(var1)();
                                    var0 = _closure1_slot11;
                                    var0 = var0.PIP;
                                    var6 = var1 === var0;
                                case 49:
                                    var0 = {};
                                    var1 = 'absolute';
                                    var0.position = var1;
                                    var4 = _closure1_slot13;
                                    if (var6) {
                                        _fun111755_ip = 74;
                                        continue _fun111755
                                    }
                                case 69:
                                    var1 = var4;
                                    _fun111755_ip = 91;
                                    continue _fun111755;
                                case 74:
                                    var3 = 2;
                                    var4 = var3 * var4;
                                    var3 = 28;
                                    var3 = var3 + var4;
                                    var1 = -var3;
                                case 91:
                                    var0.top = var1;
                                    var1 = _closure1_slot13;
                                    var0.right = var1;
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var1 = 21;
                                    var3 = var3[var1];
                                    var1 = undefined;
                                    var5 = var4.bind(var1)(var3);
                                    var4 = var5.withSpring;
                                    var1 = 1;
                                    var3 = var1;
                                    if (!var6) {
                                        _fun111755_ip = 141;
                                        continue _fun111755
                                    }
                                case 139:
                                    var3 = 0;
                                case 141:
                                    var2 = _closure1_slot10;
                                    var2 = var4.bind(var5)(var3, var2);
                                    var0.opacity = var2;
                                    var0.zIndex = var1;
                                    return var0;
                            }
                        };
                        var8 = {};
                        var8.controlsHidden = var12;
                        var8.mode = var0;
                        var0 = _closure1_slot11;
                        var8.VoicePanelModes = var0;
                        var0 = 28;
                        var8.FLOATING_BAR_HEIGHT = var0;
                        var12 = _closure1_slot13;
                        var8.VOICE_PANEL_CARD_INNER_PADDING = var12;
                        var12 = 21;
                        var12 = var11[var12];
                        var12 = var13.bind(var3)(var12);
                        var12 = var12.withSpring;
                        var8.withSpring = var12;
                        var12 = _closure1_slot10;
                        var8.MODE_CHANGE_PHYSICS = var12;
                        var1.__closure = var8;
                        var8 = 4955785289185.0;
                        var1.__workletHash = var8;
                        var8 = _closure1_slot27;
                        var1.__initData = var8;
                        var6 = var2.bind(var6)(var1);
                        var2 = _closure1_slot17;
                        var0 = var11[var0];
                        var1 = var10.bind(var3)(var0);
                        var0 = {};
                        var8 = 42;
                        var8 = var11[var8];
                        var8 = var10.bind(var3)(var8);
                        var0.icon = var8;
                        var0.onPress = var7;
                        var0.style = var6;
                        var0.layout = var4;
                        var4 = null;
                        if (!(var4 == var9)) {
                            _fun111753_ip = 372;
                            continue _fun111753
                        }
                    case 313:
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var4 = 23;
                        var6 = var10[var4];
                        var6 = var8.bind(var3)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var4 = var10[var4];
                        var4 = var8.bind(var3)(var4);
                        var4 = var4.t;
                        var4 = var4["77cRN4"];
                        var4 = var6.bind(var7)(var4);
                        _fun111753_ip = 437;
                        continue _fun111753;
                    case 372:
                        var6 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var5 = 23;
                        var7 = var10[var5];
                        var7 = var6.bind(var3)(var7);
                        var8 = var7.intl;
                        var7 = var8.formatToPlainString;
                        var5 = var10[var5];
                        var5 = var6.bind(var3)(var5);
                        var5 = var5.t;
                        var6 = var5.OervdV;
                        var5 = {};
                        var5.targetName = var9;
                        var4 = var7.bind(var8)(var6, var5);
                    case 437:
                        var0.accessibilityLabel = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var3 = var7.bind(var6)(var3);
            var _closure1_slot28 = var3;
            var3 = {
                'mass': 0.1,
                'stiffness': 400,
                'overshootClamping': true
            };
            var _closure1_slot29 = var3;
            var3 = {};
            var7 = 'function VoicePanelCardFloatingControlsTsx5(){const{flip}=this.__closure;return flip.get();}';
            var3.code = var7;
            var _closure1_slot30 = var3;
            var3 = {};
            var7 = "function VoicePanelCardFloatingControlsTsx6(flipped){const{angle,withSpring,getRandomNumberInRange,RING_PHYSICS,flip}=this.__closure;if(flipped){angle.set(withSpring(getRandomNumberInRange(45-10,45+10),RING_PHYSICS,'respect-motion-settings',function(finished){if(!finished)return;flip.set(!flip.get());}));}else{angle.set(withSpring(getRandomNumberInRange(0-10,0+10),RING_PHYSICS,'respect-motion-settings',function(finished){if(!finished)return;flip.set(!flip.get());}));}}";
            var3.code = var7;
            var _closure1_slot31 = var3;
            var3 = {};
            var7 = 'function VoicePanelCardFloatingControlsTsx7(finished){const{flip}=this.__closure;if(!finished)return;flip.set(!flip.get());}';
            var3.code = var7;
            var _closure1_slot32 = var3;
            var3 = {};
            var7 = 'function VoicePanelCardFloatingControlsTsx8(finished){const{flip}=this.__closure;if(!finished)return;flip.set(!flip.get());}';
            var3.code = var7;
            var _closure1_slot33 = var3;
            var3 = {};
            var7 = 'function VoicePanelCardFloatingControlsTsx9(){const{controlsHidden,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING}=this.__closure;return{top:controlsHidden.get()?-(FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING*2):0};}';
            var3.code = var7;
            var _closure1_slot34 = var3;
            var3 = {};
            var7 = 'function VoicePanelCardFloatingControlsTsx10(){const{angle}=this.__closure;return{transform:[{rotate:angle.get()+"deg"}]};}';
            var3.code = var7;
            var _closure1_slot35 = var3;
            var7 = var6.memo;
            var3 = function(arg0) { // Environment: var1
                _fun111756: for (var _fun111756_ip = 0;;) switch (_fun111756_ip) {
                    case 0:
                        var1 = arg0;
                        var14 = var1.controlsHidden;
                        var _closure2_slot0 = var14;
                        var1 = _closure1_slot21;
                        var3 = undefined;
                        var10 = var1.bind(var3)();
                        var2 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var1 = 13;
                        var4 = var9[var1];
                        var6 = var2.bind(var3)(var4);
                        var5 = var6.useSharedValue;
                        var4 = true;
                        var16 = var5.bind(var6)(var4);
                        var _closure2_slot1 = var16;
                        var4 = var9[var1];
                        var6 = var2.bind(var3)(var4);
                        var5 = var6.useSharedValue;
                        var4 = 0;
                        var6 = var5.bind(var6)(var4);
                        var _closure2_slot2 = var6;
                        var4 = 20;
                        var4 = var9[var4];
                        var8 = var2.bind(var3)(var4);
                        var7 = var8.useStateFromStores;
                        var4 = _closure1_slot5;
                        var5 = new Array(1);
                        var5[0] = var4;
                        var4 = function() { // Environment: var0
                            var0 = _closure1_slot5;
                            var0 = var0.useReducedMotion;
                            return var0;
                        };
                        var7 = var7.bind(var8)(var5, var4);
                        var4 = var9[var1];
                        var13 = var2.bind(var3)(var4);
                        var11 = var13.useAnimatedReaction;
                        var8 = function() { // Original name: o, environment: var0
                            var1 = _closure2_slot1;
                            var0 = var1.get;
                            var0 = var0.bind(var1)();
                            return var0;
                        };
                        var4 = {};
                        var4.flip = var16;
                        var8.__closure = var4;
                        var4 = 3692264004972.0;
                        var8.__workletHash = var4;
                        var4 = _closure1_slot30;
                        var8.__initData = var4;
                        var4 = function(arg0) { // Original name: n, environment: var0
                            _fun111759: for (var _fun111759_ip = 0;;) switch (_fun111759_ip) {
                                case 0:
                                    var3 = _closure2_slot2;
                                    var2 = var3.set;
                                    var6 = _closure1_slot0;
                                    var9 = _closure1_slot2;
                                    var0 = 21;
                                    var5 = var9[var0];
                                    var0 = undefined;
                                    var8 = var6.bind(var0)(var5);
                                    var7 = var8.withSpring;
                                    var6 = _closure1_slot1;
                                    var5 = 43;
                                    var5 = var9[var5];
                                    var9 = var6.bind(var0)(var5);
                                    var5 = arg0;
                                    if (var5) {
                                        _fun111759_ip = 158;
                                        continue _fun111759
                                    }
                                case 66:
                                    var6 = -10;
                                    var5 = 10;
                                    var17 = var9.bind(var0)(var6, var5);
                                    var16 = _closure1_slot29;
                                    var6 = function(arg0) { // Original name: n, environment: var4
                                        _fun111761: for (var _fun111761_ip = 0;;) switch (_fun111761_ip) {
                                            case 0:
                                                var0 = arg0;
                                                if (!var0) {
                                                    _fun111761_ip = 35;
                                                    continue _fun111761
                                                }
                                            case 6:
                                                var2 = _closure2_slot1;
                                                var1 = var2.set;
                                                var0 = var2.get;
                                                var0 = var0.bind(var2)();
                                                var0 = !var0;
                                                var0 = var1.bind(var2)(var0);
                                            case 35:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var5 = {};
                                    var13 = _closure2_slot1;
                                    var5.flip = var13;
                                    var6.__closure = var5;
                                    var5 = 3012732268426.0;
                                    var6.__workletHash = var5;
                                    var5 = _closure1_slot33;
                                    var6.__initData = var5;
                                    var15 = 'respect-motion-settings';
                                    var18 = var8;
                                    var14 = var6;
                                    var5 = var18[var7](var17, var16, var15, var14, var13);
                                    var5 = var2.bind(var3)(var5);
                                    _fun111759_ip = 245;
                                    continue _fun111759;
                                case 158:
                                    var6 = 35;
                                    var5 = 55;
                                    var17 = var9.bind(var0)(var6, var5);
                                    var16 = _closure1_slot29;
                                    var4 = function(arg0) { // Original name: o, environment: var4
                                        _fun111760: for (var _fun111760_ip = 0;;) switch (_fun111760_ip) {
                                            case 0:
                                                var0 = arg0;
                                                if (!var0) {
                                                    _fun111760_ip = 35;
                                                    continue _fun111760
                                                }
                                            case 6:
                                                var2 = _closure2_slot1;
                                                var1 = var2.set;
                                                var0 = var2.get;
                                                var0 = var0.bind(var2)();
                                                var0 = !var0;
                                                var0 = var1.bind(var2)(var0);
                                            case 35:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var9 = {};
                                    var10 = _closure2_slot1;
                                    var9.flip = var10;
                                    var4.__closure = var9;
                                    var9 = 1799436949573.0;
                                    var4.__workletHash = var9;
                                    var1 = _closure1_slot32;
                                    var4.__initData = var1;
                                    var15 = 'respect-motion-settings';
                                    var18 = var8;
                                    var14 = var4;
                                    var1 = var18[var7](var17, var16, var15, var14, var13);
                                    var1 = var2.bind(var3)(var1);
                                case 245:
                                    return var0;
                            }
                        };
                        var15 = {};
                        var15.angle = var6;
                        var5 = 21;
                        var5 = var9[var5];
                        var5 = var2.bind(var3)(var5);
                        var5 = var5.withSpring;
                        var15.withSpring = var5;
                        var5 = _closure1_slot1;
                        var17 = 43;
                        var17 = var9[var17];
                        var17 = var5.bind(var3)(var17);
                        var15.getRandomNumberInRange = var17;
                        var17 = _closure1_slot29;
                        var15.RING_PHYSICS = var17;
                        var15.flip = var16;
                        var4.__closure = var15;
                        var15 = 1062406987047.0;
                        var4.__workletHash = var15;
                        var15 = _closure1_slot31;
                        var4.__initData = var15;
                        var4 = var11.bind(var13)(var8, var4);
                        var4 = var9[var1];
                        var11 = var2.bind(var3)(var4);
                        var8 = var11.useAnimatedStyle;
                        var4 = function() { // Original name: I, environment: var0
                            _fun111762: for (var _fun111762_ip = 0;;) switch (_fun111762_ip) {
                                case 0:
                                    var0 = {};
                                    var2 = _closure2_slot0;
                                    var1 = var2.get;
                                    var2 = var1.bind(var2)();
                                    var1 = 0;
                                    if (!var2) {
                                        _fun111762_ip = 47;
                                        continue _fun111762
                                    }
                                case 23:
                                    var3 = _closure1_slot13;
                                    var2 = 2;
                                    var3 = var2 * var3;
                                    var2 = 28;
                                    var2 = var2 + var3;
                                    var1 = -var2;
                                case 47:
                                    var0.top = var1;
                                    return var0;
                            }
                        };
                        var13 = {};
                        var13.controlsHidden = var14;
                        var14 = 28;
                        var13.FLOATING_BAR_HEIGHT = var14;
                        var14 = _closure1_slot13;
                        var13.VOICE_PANEL_CARD_INNER_PADDING = var14;
                        var4.__closure = var13;
                        var13 = 2849048501597.0;
                        var4.__workletHash = var13;
                        var13 = _closure1_slot34;
                        var4.__initData = var13;
                        var11 = var8.bind(var11)(var4);
                        var1 = var9[var1];
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.useAnimatedStyle;
                        var0 = function() { // Original name: S, environment: var0
                            var0 = {};
                            var2 = {};
                            var3 = _closure2_slot2;
                            var1 = var3.get;
                            var5 = var1.bind(var3)();
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var4 = var1.concat;
                            var3 = '';
                            var1 = 'deg';
                            var1 = var4.bind(var3)(var5, var1);
                            var2.rotate = var1;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.transform = var1;
                            return var0;
                        };
                        var4 = {};
                        var4.angle = var6;
                        var0.__closure = var4;
                        var4 = 15798418788614.0;
                        var0.__workletHash = var4;
                        var4 = _closure1_slot35;
                        var0.__initData = var4;
                        var8 = var1.bind(var2)(var0);
                        var2 = _closure1_slot17;
                        var4 = 44;
                        var0 = var9[var4];
                        var1 = var5.bind(var3)(var0);
                        var0 = {};
                        var6 = new Array(2);
                        var6[0] = var11;
                        var11 = var10.ringingIconContainer;
                        var6[1] = var11;
                        var0.style = var6;
                        var6 = _closure1_slot17;
                        var4 = var9[var4];
                        var5 = var5.bind(var3)(var4);
                        var4 = {};
                        var7 = !var7;
                        if (!var7) {
                            _fun111756_ip = 519;
                            continue _fun111756
                        }
                    case 516:
                        var7 = var8;
                    case 519:
                        var4.style = var7;
                        var7 = 'none';
                        var4.pointerEvents = var7;
                        var9 = _closure1_slot17;
                        var15 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var11 = 14;
                        var7 = var13[var11];
                        var8 = var15.bind(var3)(var7);
                        var7 = {};
                        var14 = 45;
                        var14 = var13[var14];
                        var14 = var15.bind(var3)(var14);
                        var7.source = var14;
                        var12 = _closure1_slot0;
                        var11 = var13[var11];
                        var11 = var12.bind(var3)(var11);
                        var11 = var11.IconSizes;
                        var11 = var11.SMALL_20;
                        var7.size = var11;
                        var10 = var10.ringingIcon;
                        var7.style = var10;
                        var7 = var9.bind(var3)(var8, var7);
                        var4.children = var7;
                        var4 = var6.bind(var3)(var5, var4);
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var3 = var7.bind(var6)(var3);
            var _closure1_slot36 = var3;
            var7 = var6.memo;
            var3 = function(arg0) { // Environment: var1
                var0 = arg0;
                var7 = var0.controlsHidden;
                var3 = _closure1_slot17;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 46;
                var0 = var2[var0];
                var2 = undefined;
                var0 = var1.bind(var2)(var0);
                var1 = var0.ThemeContextProvider;
                var0 = {};
                var5 = _closure1_slot14;
                var5 = var5.LIGHT;
                var0.theme = var5;
                var6 = _closure1_slot17;
                var5 = _closure1_slot36;
                var4 = {};
                var4.controlsHidden = var7;
                var4 = var6.bind(var2)(var5, var4);
                var0.children = var4;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var3 = var7.bind(var6)(var3);
            var _closure1_slot37 = var3;
            var3 = {};
            var7 = 'function VoicePanelCardFloatingControlsTsx11(){const{hasHiddenVisibleIcon,focused,connected,mode,VoicePanelModes,controlsHidden,withSpring,MODE_CHANGE_PHYSICS,enableHangStatus,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING,LEFT_ALIGNED_FLOATING_BAR_HEIGHT}=this.__closure;const showIcon=hasHiddenVisibleIcon&&focused.get()==null;const hidden=!connected.get()||mode.get()===VoicePanelModes.PIP||!showIcon&&controlsHidden.get();return{opacity:withSpring(hidden?0:1,MODE_CHANGE_PHYSICS),top:hidden&&!enableHangStatus?FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING:0,height:enableHangStatus?LEFT_ALIGNED_FLOATING_BAR_HEIGHT:FLOATING_BAR_HEIGHT};}';
            var3.code = var7;
            var _closure1_slot38 = var3;
            var3 = {};
            var7 = "function VoicePanelCardFloatingControlsTsx12(){const{connected,isScreenReaderEnabled,controlsSpecs,VoicePanelControlsModes,hasIcon,GAP}=this.__closure;const hidden=!connected.get()||!isScreenReaderEnabled&&controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN&&hasIcon;const shouldCollapseWidth=hidden&&hasIcon;return{width:shouldCollapseWidth?0:'auto',marginRight:hidden?-GAP:0};}";
            var3.code = var7;
            var _closure1_slot39 = var3;
            var3 = {};
            var7 = 'function VoicePanelCardFloatingControlsTsx13(){const{connected,isScreenReaderEnabled,controlsSpecs,VoicePanelControlsModes,hasIcon,enableHangStatus,VOICE_PANEL_CARD_INNER_PADDING}=this.__closure;const hidden=!connected.get()||!isScreenReaderEnabled&&controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN&&hasIcon;return{marginStart:hidden||enableHangStatus?0:VOICE_PANEL_CARD_INNER_PADDING};}';
            var3.code = var7;
            var _closure1_slot40 = var3;
            var7 = var6.memo;
            var3 = function(arg0) { // Environment: var1
                _fun111765: for (var _fun111765_ip = 0;;) switch (_fun111765_ip) {
                    case 0:
                        var0 = arg0;
                        var6 = var0.controlsHidden;
                        var _closure2_slot0 = var6;
                        var17 = var0.label;
                        var11 = var0.layout;
                        var20 = var0.participant;
                        var3 = undefined;
                        var _closure2_slot6 = var3;
                        var _closure2_slot7 = var3;
                        var _closure2_slot8 = var3;
                        var4 = _closure1_slot3;
                        var2 = var4.useContext;
                        var5 = _closure1_slot1;
                        var0 = _closure1_slot2;
                        var1 = 18;
                        var1 = var0[var1];
                        var1 = var5.bind(var3)(var1);
                        var1 = var2.bind(var4)(var1);
                        var7 = var1.guildId;
                        var4 = var1.channelId;
                        var8 = var1.controlsSpecs;
                        var _closure2_slot1 = var8;
                        var23 = var1.focused;
                        var _closure2_slot2 = var23;
                        var14 = var1.connected;
                        var _closure2_slot3 = var14;
                        var22 = var1.mode;
                        var _closure2_slot4 = var22;
                        var1 = _closure1_slot0;
                        var2 = 47;
                        var2 = var0[var2];
                        var5 = var1.bind(var3)(var2);
                        var2 = var5.useIsScreenReaderEnabled;
                        var9 = var2.bind(var5)();
                        var _closure2_slot5 = var9;
                        var2 = _closure1_slot21;
                        var16 = var2.bind(var3)();
                        var15 = 37;
                        var0 = var0[var15];
                        var1 = var1.bind(var3)(var0);
                        var0 = var1.isStableParticipantWithUser;
                        var0 = var0.bind(var1)(var20);
                        var10 = undefined;
                        if (!var0) {
                            _fun111765_ip = 209;
                            continue _fun111765
                        }
                    case 199:
                        var0 = var20.user;
                        var10 = var0.id;
                    case 209:
                        var5 = _closure1_slot0;
                        var0 = _closure1_slot2;
                        var1 = 48;
                        var1 = var0[var1];
                        var12 = var5.bind(var3)(var1);
                        var2 = var12.useIsUserSecureFramesVerified;
                        var1 = {};
                        var1.userId = var10;
                        var1.channelId = var4;
                        var12 = var2.bind(var12)(var1);
                        var2 = _closure1_slot1;
                        var1 = 32;
                        var1 = var0[var1];
                        var2 = var2.bind(var3)(var1);
                        var1 = var20.type;
                        var0 = var0[var15];
                        var5 = var5.bind(var3)(var0);
                        var0 = var5.isStableParticipantWithUser;
                        var5 = var0.bind(var5)(var20);
                        var0 = undefined;
                        if (!var5) {
                            _fun111765_ip = 306;
                            continue _fun111765
                        }
                    case 296:
                        var5 = var20.user;
                        var0 = var5.id;
                    case 306:
                        var30 = undefined;
                        var29 = var1;
                        var28 = var0;
                        var27 = var7;
                        var26 = var4;
                        var21 = var30[var2](var29, var28, var27, var26, var25);
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var0 = 49;
                        var0 = var4[var0];
                        var5 = var2.bind(var3)(var0);
                        var1 = var5.useHangStatusExperiment;
                        var0 = {};
                        var0.guildId = var7;
                        var15 = 'FloatingParticipantLabel';
                        var0.location = var15;
                        var0 = var1.bind(var5)(var0);
                        var0 = var0.enableHangStatus;
                        _closure2_slot6 = var0;
                        var5 = _closure1_slot1;
                        var1 = 50;
                        var1 = var4[var1];
                        var5 = var5.bind(var3)(var1);
                        var1 = {};
                        var1.userId = var10;
                        var1.guildId = var7;
                        var10 = var5.bind(var3)(var1);
                        var1 = 51;
                        var1 = var4[var1];
                        var7 = var2.bind(var3)(var1);
                        var5 = var7.useDisplayNameStylesFont;
                        var1 = {};
                        var1.displayNameStyles = var10;
                        var24 = var5.bind(var7)(var1);
                        var1 = var21.length;
                        var5 = 1;
                        var7 = var1 >= var5;
                        _closure2_slot7 = var7;
                        var10 = var21.filter;
                        var1 = function(arg0) { // Environment: var18
                            var0 = arg0;
                            var1 = var0.type;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 32;
                            var2 = var2[var0];
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2);
                            var0 = var0.VoicePanelCardUserStateIconType;
                            var0 = var0.STREAM_ICON;
                            var0 = var1 !== var0;
                            return var0;
                        };
                        var1 = var10.bind(var21)(var1);
                        var1 = var1.length;
                        var25 = var1 >= var5;
                        _closure2_slot8 = var25;
                        var1 = 13;
                        var5 = var4[var1];
                        var15 = var2.bind(var3)(var5);
                        var10 = var15.useAnimatedStyle;
                        var5 = function() { // Original name: c, environment: var18
                            _fun111767: for (var _fun111767_ip = 0;;) switch (_fun111767_ip) {
                                case 0:
                                    var2 = _closure2_slot8;
                                    if (!var2) {
                                        _fun111767_ip = 29;
                                        continue _fun111767
                                    }
                                case 10:
                                    var3 = _closure2_slot2;
                                    var0 = var3.get;
                                    var3 = var0.bind(var3)();
                                    var0 = null;
                                    var2 = var0 == var3;
                                case 29:
                                    var3 = _closure2_slot3;
                                    var0 = var3.get;
                                    var0 = var0.bind(var3)();
                                    var4 = !var0;
                                    if (var4) {
                                        _fun111767_ip = 78;
                                        continue _fun111767
                                    }
                                case 48:
                                    var3 = _closure2_slot4;
                                    var0 = var3.get;
                                    var3 = var0.bind(var3)();
                                    var0 = _closure1_slot11;
                                    var0 = var0.PIP;
                                    var4 = var3 === var0;
                                case 78:
                                    if (var4) {
                                        _fun111767_ip = 103;
                                        continue _fun111767
                                    }
                                case 81:
                                    var0 = !var2;
                                    if (var2) {
                                        _fun111767_ip = 100;
                                        continue _fun111767
                                    }
                                case 87:
                                    var3 = _closure2_slot0;
                                    var2 = var3.get;
                                    var0 = var2.bind(var3)();
                                case 100:
                                    var4 = var0;
                                case 103:
                                    var0 = {};
                                    var6 = _closure1_slot0;
                                    var5 = _closure1_slot2;
                                    var2 = 21;
                                    var5 = var5[var2];
                                    var2 = undefined;
                                    var7 = var6.bind(var2)(var5);
                                    var6 = var7.withSpring;
                                    var5 = 1;
                                    if (!var4) {
                                        _fun111767_ip = 143;
                                        continue _fun111767
                                    }
                                case 141:
                                    var5 = 0;
                                case 143:
                                    var2 = _closure1_slot10;
                                    var2 = var6.bind(var7)(var5, var2);
                                    var0.opacity = var2;
                                    var2 = 0;
                                    if (!var4) {
                                        _fun111767_ip = 182;
                                        continue _fun111767
                                    }
                                case 162:
                                    var4 = _closure2_slot6;
                                    var2 = 0;
                                    if (var4) {
                                        _fun111767_ip = 182;
                                        continue _fun111767
                                    }
                                case 171:
                                    var4 = _closure1_slot13;
                                    var3 = 28;
                                    var2 = var3 + var4;
                                case 182:
                                    var0.top = var2;
                                    var2 = _closure2_slot6;
                                    var1 = 30;
                                    if (var2) {
                                        _fun111767_ip = 199;
                                        continue _fun111767
                                    }
                                case 196:
                                    var1 = 28;
                                case 199:
                                    var0.height = var1;
                                    return var0;
                            }
                        };
                        var19 = {};
                        var19.hasHiddenVisibleIcon = var25;
                        var19.focused = var23;
                        var19.connected = var14;
                        var19.mode = var22;
                        var22 = _closure1_slot11;
                        var19.VoicePanelModes = var22;
                        var19.controlsHidden = var6;
                        var6 = 21;
                        var6 = var4[var6];
                        var6 = var2.bind(var3)(var6);
                        var6 = var6.withSpring;
                        var19.withSpring = var6;
                        var6 = _closure1_slot10;
                        var19.MODE_CHANGE_PHYSICS = var6;
                        var19.enableHangStatus = var0;
                        var6 = 28;
                        var19.FLOATING_BAR_HEIGHT = var6;
                        var6 = _closure1_slot13;
                        var19.VOICE_PANEL_CARD_INNER_PADDING = var6;
                        var22 = 30;
                        var19.LEFT_ALIGNED_FLOATING_BAR_HEIGHT = var22;
                        var5.__closure = var19;
                        var19 = 5051036071982.0;
                        var5.__workletHash = var19;
                        var19 = _closure1_slot38;
                        var5.__initData = var19;
                        var10 = var10.bind(var15)(var5);
                        var5 = var4[var1];
                        var19 = var2.bind(var3)(var5);
                        var15 = var19.useAnimatedStyle;
                        var5 = function() { // Original name: u, environment: var18
                            _fun111768: for (var _fun111768_ip = 0;;) switch (_fun111768_ip) {
                                case 0:
                                    var1 = _closure2_slot3;
                                    var0 = var1.get;
                                    var0 = var0.bind(var1)();
                                    var2 = !var0;
                                    if (var2) {
                                        _fun111768_ip = 77;
                                        continue _fun111768
                                    }
                                case 22:
                                    var0 = _closure2_slot5;
                                    var0 = !var0;
                                    if (!var0) {
                                        _fun111768_ip = 67;
                                        continue _fun111768
                                    }
                                case 32:
                                    var4 = _closure2_slot1;
                                    var1 = var4.get;
                                    var1 = var1.bind(var4)();
                                    var4 = var1.mode;
                                    var1 = _closure1_slot12;
                                    var1 = var1.HIDDEN;
                                    var0 = var4 === var1;
                                case 67:
                                    if (!var0) {
                                        _fun111768_ip = 74;
                                        continue _fun111768
                                    }
                                case 70:
                                    var0 = _closure2_slot7;
                                case 74:
                                    var2 = var0;
                                case 77:
                                    var0 = {};
                                    var4 = 'auto';
                                    var1 = var4;
                                    if (!var2) {
                                        _fun111768_ip = 101;
                                        continue _fun111768
                                    }
                                case 89:
                                    var3 = _closure2_slot7;
                                    var1 = var4;
                                    if (!var3) {
                                        _fun111768_ip = 101;
                                        continue _fun111768
                                    }
                                case 99:
                                    var1 = 0;
                                case 101:
                                    var0.width = var1;
                                    var1 = 0;
                                    if (!var2) {
                                        _fun111768_ip = 116;
                                        continue _fun111768
                                    }
                                case 110:
                                    var1 = -4;
                                case 116:
                                    var0.marginRight = var1;
                                    return var0;
                            }
                        };
                        var22 = {};
                        var22.connected = var14;
                        var22.isScreenReaderEnabled = var9;
                        var22.controlsSpecs = var8;
                        var23 = _closure1_slot12;
                        var22.VoicePanelControlsModes = var23;
                        var22.hasIcon = var7;
                        var23 = 4;
                        var22.GAP = var23;
                        var5.__closure = var22;
                        var22 = 2980616778992.0;
                        var5.__workletHash = var22;
                        var22 = _closure1_slot39;
                        var5.__initData = var22;
                        var15 = var15.bind(var19)(var5);
                        var1 = var4[var1];
                        var4 = var2.bind(var3)(var1);
                        var2 = var4.useAnimatedStyle;
                        var1 = function() { // Original name: _, environment: var18
                            _fun111769: for (var _fun111769_ip = 0;;) switch (_fun111769_ip) {
                                case 0:
                                    var0 = {};
                                    var3 = _closure2_slot3;
                                    var1 = var3.get;
                                    var4 = var1.bind(var3)();
                                    var1 = 0;
                                    if (!var4) {
                                        _fun111769_ip = 90;
                                        continue _fun111769
                                    }
                                case 23:
                                    var4 = _closure2_slot5;
                                    if (var4) {
                                        _fun111769_ip = 74;
                                        continue _fun111769
                                    }
                                case 30:
                                    var5 = _closure2_slot1;
                                    var4 = var5.get;
                                    var4 = var4.bind(var5)();
                                    var5 = var4.mode;
                                    var4 = _closure1_slot12;
                                    var4 = var4.HIDDEN;
                                    if (!(var5 === var4)) {
                                        _fun111769_ip = 74;
                                        continue _fun111769
                                    }
                                case 65:
                                    var4 = _closure2_slot7;
                                    var1 = 0;
                                    if (var4) {
                                        _fun111769_ip = 90;
                                        continue _fun111769
                                    }
                                case 74:
                                    var2 = _closure2_slot6;
                                    var1 = 0;
                                    if (var2) {
                                        _fun111769_ip = 90;
                                        continue _fun111769
                                    }
                                case 83:
                                    var1 = _closure1_slot13;
                                case 90:
                                    var0.marginStart = var1;
                                    return var0;
                            }
                        };
                        var5 = {};
                        var5.connected = var14;
                        var5.isScreenReaderEnabled = var9;
                        var5.controlsSpecs = var8;
                        var8 = _closure1_slot12;
                        var5.VoicePanelControlsModes = var8;
                        var5.hasIcon = var7;
                        var5.enableHangStatus = var0;
                        var5.VOICE_PANEL_CARD_INNER_PADDING = var6;
                        var1.__closure = var5;
                        var5 = 7636285079170.0;
                        var1.__workletHash = var5;
                        var5 = _closure1_slot40;
                        var1.__initData = var5;
                        var1 = var2.bind(var4)(var1);
                        if (var0) {
                            _fun111765_ip = 858;
                            continue _fun111765
                        }
                    case 850:
                        var2 = var16.labelPositionContainer;
                        _fun111765_ip = 864;
                        continue _fun111765;
                    case 858:
                        var2 = var16.leftAlignedLabelPositionContainer;
                    case 864:
                        var6 = new Array(1);
                        var6[0] = var2;
                        if (!var0) {
                            _fun111765_ip = 885;
                            continue _fun111765
                        }
                    case 875:
                        var0 = var6.push;
                        var0 = var0.bind(var6)(var1);
                    case 885:
                        var2 = _closure1_slot17;
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var8 = 44;
                        var0 = var4[var8];
                        var1 = var5.bind(var3)(var0);
                        var0 = {};
                        var0.style = var6;
                        var0.layout = var11;
                        var7 = 'box-none';
                        var0.pointerEvents = var7;
                        var6 = _closure1_slot18;
                        var4 = var4[var8];
                        var5 = var5.bind(var3)(var4);
                        var4 = {};
                        var14 = var16.labelOuterContainer;
                        var9 = new Array(2);
                        var9[0] = var14;
                        var9[1] = var10;
                        var4.style = var9;
                        var4.pointerEvents = var7;
                        var4.layout = var11;
                        var9 = var21.length;
                        var7 = 0;
                        var9 = var9 > var7;
                        if (!var9) {
                            _fun111765_ip = 1055;
                            continue _fun111765
                        }
                    case 992:
                        var14 = _closure1_slot17;
                        var10 = _closure1_slot1;
                        var19 = _closure1_slot2;
                        var7 = 34;
                        var7 = var19[var7];
                        var10 = var10.bind(var3)(var7);
                        var7 = {};
                        var19 = var16.initialIcons;
                        var7.style = var19;
                        var19 = var21.map;
                        var18 = function(arg0) { // Environment: var18
                            var0 = arg0;
                            var4 = _closure1_slot17;
                            var3 = _closure1_slot44;
                            var2 = {};
                            var2.icon = var0;
                            var1 = var0.type;
                            var0 = undefined;
                            var0 = var4.bind(var0)(var3, var2, var1);
                            return var0;
                        };
                        var18 = var19.bind(var21)(var18);
                        var7.children = var18;
                        var9 = var14.bind(var3)(var10, var7);
                    case 1055:
                        var7 = new Array(2);
                        var7[0] = var9;
                        var10 = _closure1_slot18;
                        var9 = _closure1_slot1;
                        var18 = _closure1_slot2;
                        var8 = var18[var8];
                        var9 = var9.bind(var3)(var8);
                        var8 = {};
                        var19 = var16.floatingContainer;
                        var14 = new Array(2);
                        var14[0] = var19;
                        var14[1] = var15;
                        var8.style = var14;
                        var8.layout = var11;
                        var15 = _closure1_slot17;
                        var14 = _closure1_slot0;
                        var11 = 52;
                        var11 = var18[var11];
                        var11 = var14.bind(var3)(var11);
                        var14 = var11.Text;
                        var11 = {
                            'variant': 'heading-sm/semibold',
                            'color': 'always-white',
                            'lineClamp': 1,
                            'style': null,
                            'ellipsizeMode': 'tail'
                        };
                        var19 = 'always-white';
                        var22 = var16.floatingText;
                        var18 = new Array(2);
                        var18[0] = var22;
                        var22 = null;
                        var22 = var22 != var24;
                        if (!var22) {
                            _fun111765_ip = 1191;
                            continue _fun111765
                        }
                    case 1181:
                        var23 = {};
                        var23.fontFamily = var24;
                        var22 = var23;
                    case 1191:
                        var18[1] = var22;
                        var11.style = var18;
                        var18 = _closure1_slot45;
                        var18 = var18.bind(var3)(var21, var17);
                        var11.accessibilityLabel = var18;
                        var11.children = var17;
                        var14 = var15.bind(var3)(var14, var11);
                        var11 = new Array(3);
                        var11[0] = var14;
                        var15 = var20.type;
                        var14 = _closure1_slot15;
                        var14 = var14.USER;
                        var14 = var15 === var14;
                        if (!var14) {
                            _fun111765_ip = 1306;
                            continue _fun111765
                        }
                    case 1255:
                        var18 = _closure1_slot17;
                        var17 = _closure1_slot1;
                        var21 = _closure1_slot2;
                        var15 = 53;
                        var15 = var21[var15];
                        var17 = var17.bind(var3)(var15);
                        var15 = {};
                        var20 = var20.user;
                        var20 = var20.id;
                        var15.userId = var20;
                        var15.textColor = var19;
                        var14 = var18.bind(var3)(var17, var15);
                    case 1306:
                        var11[1] = var14;
                        if (!var12) {
                            _fun111765_ip = 1420;
                            continue _fun111765
                        }
                    case 1313:
                        var15 = _closure1_slot17;
                        var19 = _closure1_slot0;
                        var20 = _closure1_slot2;
                        var13 = 54;
                        var13 = var20[var13];
                        var13 = var19.bind(var3)(var13);
                        var14 = var13.ShieldLockIcon;
                        var13 = {};
                        var16 = var16.secureFramesIcon;
                        var13.style = var16;
                        var16 = 'xs';
                        var13.size = var16;
                        var16 = 23;
                        var17 = var20[var16];
                        var17 = var19.bind(var3)(var17);
                        var18 = var17.intl;
                        var17 = var18.string;
                        var16 = var20[var16];
                        var16 = var19.bind(var3)(var16);
                        var16 = var16.t;
                        var16 = var16.mR9cf3;
                        var16 = var17.bind(var18)(var16);
                        var13.accessibilityLabel = var16;
                        var12 = var15.bind(var3)(var14, var13);
                    case 1420:
                        var11[2] = var12;
                        var8.children = var11;
                        var8 = var10.bind(var3)(var9, var8);
                        var7[1] = var8;
                        var4.children = var7;
                        var4 = var6.bind(var3)(var5, var4);
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var3 = var7.bind(var6)(var3);
            var _closure1_slot41 = var3;
            var3 = {};
            var7 = 'function VoicePanelCardFloatingControlsTsx14(){const{controlsSpecs,VoicePanelControlsModes,focused,mode,VoicePanelModes}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN||focused.get()!=null||mode.get()===VoicePanelModes.PIP;}';
            var3.code = var7;
            var _closure1_slot42 = var3;
            var3 = var6.memo;
            var1 = function(arg0) { // Original name: FloatingControls, environment: var1
                _fun111771: for (var _fun111771_ip = 0;;) switch (_fun111771_ip) {
                    case 0:
                        var1 = arg0;
                        var20 = var1.label;
                        var18 = var1.participant;
                        var _closure2_slot0 = var18;
                        var8 = var1.isRinging;
                        var12 = var1.showHangStatus;
                        var15 = var1.speaking;
                        var14 = var1.layout;
                        var1 = _closure1_slot21;
                        var3 = undefined;
                        var9 = var1.bind(var3)();
                        var5 = _closure1_slot3;
                        var4 = var5.useContext;
                        var6 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var2 = 18;
                        var2 = var1[var2];
                        var2 = var6.bind(var3)(var2);
                        var2 = var4.bind(var5)(var2);
                        var4 = var2.guildId;
                        var _closure2_slot1 = var4;
                        var13 = var2.channelId;
                        var23 = var2.controlsSpecs;
                        var _closure2_slot2 = var23;
                        var22 = var2.focused;
                        var _closure2_slot3 = var22;
                        var21 = var2.mode;
                        var _closure2_slot4 = var21;
                        var2 = _closure1_slot0;
                        var6 = 20;
                        var5 = var1[var6];
                        var16 = var2.bind(var3)(var5);
                        var10 = var16.useStateFromStores;
                        var5 = _closure1_slot9;
                        var7 = new Array(1);
                        var7[0] = var5;
                        var5 = function() { // Environment: var0
                            var1 = _closure1_slot9;
                            var0 = var1.isConnected;
                            var0 = var0.bind(var1)();
                            return var0;
                        };
                        var5 = var10.bind(var16)(var7, var5);
                        var19 = 37;
                        var1 = var1[var19];
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.isStableParticipantWithUser;
                        var1 = var1.bind(var2)(var18);
                        var1 = !var1;
                        var17 = !var1;
                        if (var1) {
                            _fun111771_ip = 219;
                            continue _fun111771
                        }
                    case 213:
                        var17 = var18.isSelf;
                    case 219:
                        var1 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var6 = var2[var6];
                        var16 = var1.bind(var3)(var6);
                        var10 = var16.useStateFromStores;
                        var6 = _closure1_slot6;
                        var7 = new Array(2);
                        var7[0] = var6;
                        var6 = _closure1_slot8;
                        var7[1] = var6;
                        var6 = function() { // Environment: var0
                            _fun111773: for (var _fun111773_ip = 0;;) switch (_fun111773_ip) {
                                case 0:
                                    var3 = _closure1_slot0;
                                    var0 = _closure1_slot2;
                                    var5 = 37;
                                    var1 = var0[var5];
                                    var0 = undefined;
                                    var6 = var3.bind(var0)(var1);
                                    var4 = var6.isStableActivityParticipant;
                                    var3 = _closure2_slot0;
                                    var3 = var4.bind(var6)(var3);
                                    if (var3) {
                                        _fun111773_ip = 129;
                                        continue _fun111773
                                    }
                                case 46:
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var3 = var3[var5];
                                    var5 = var4.bind(var0)(var3);
                                    var4 = var5.isStableStreamParticipant;
                                    var3 = _closure2_slot0;
                                    var3 = var4.bind(var5)(var3);
                                    var4 = !var3;
                                    var3 = !var4;
                                    if (var4) {
                                        _fun111773_ip = 127;
                                        continue _fun111773
                                    }
                                case 87:
                                    var7 = _closure1_slot8;
                                    var6 = var7.getActiveStreamForUser;
                                    var4 = _closure2_slot0;
                                    var4 = var4.user;
                                    var5 = var4.id;
                                    var4 = _closure2_slot1;
                                    var5 = var6.bind(var7)(var5, var4);
                                    var4 = null;
                                    var3 = var4 != var5;
                                case 127:
                                    return var3;
                                case 129:
                                    var3 = _closure1_slot6;
                                    var2 = var3.getCurrentEmbeddedActivity;
                                    var2 = var2.bind(var3)();
                                    var1 = _closure2_slot0;
                                    var1 = var1.applicationId;
                                    var3 = null;
                                    var3 = var3 == var2;
                                    var0 = undefined;
                                    if (var3) {
                                        _fun111773_ip = 168;
                                        continue _fun111773
                                    }
                                case 163:
                                    var0 = var2.applicationId;
                                case 168:
                                    var0 = var1 === var0;
                                    return var0;
                            }
                        };
                        var10 = var10.bind(var16)(var7, var6);
                        var7 = _closure1_slot1;
                        var6 = 55;
                        var6 = var2[var6];
                        var7 = var7.bind(var3)(var6);
                        var6 = var18.id;
                        var7 = var7.bind(var3)(var4, var13, var6);
                        var6 = 13;
                        var6 = var2[var6];
                        var13 = var1.bind(var3)(var6);
                        var6 = var13.useDerivedValue;
                        var0 = function() { // Original name: p, environment: var0
                            _fun111774: for (var _fun111774_ip = 0;;) switch (_fun111774_ip) {
                                case 0:
                                    var1 = _closure2_slot2;
                                    var0 = var1.get;
                                    var0 = var0.bind(var1)();
                                    var3 = var0.mode;
                                    var0 = _closure1_slot12;
                                    var0 = var0.HIDDEN;
                                    var0 = var3 === var0;
                                    if (var0) {
                                        _fun111774_ip = 60;
                                        continue _fun111774
                                    }
                                case 41:
                                    var4 = _closure2_slot3;
                                    var3 = var4.get;
                                    var4 = var3.bind(var4)();
                                    var3 = null;
                                    var0 = var3 != var4;
                                case 60:
                                    if (var0) {
                                        _fun111774_ip = 90;
                                        continue _fun111774
                                    }
                                case 63:
                                    var3 = _closure2_slot4;
                                    var2 = var3.get;
                                    var2 = var2.bind(var3)();
                                    var1 = _closure1_slot11;
                                    var1 = var1.PIP;
                                    var0 = var2 === var1;
                                case 90:
                                    return var0;
                            }
                        };
                        var16 = {};
                        var16.controlsSpecs = var23;
                        var23 = _closure1_slot12;
                        var16.VoicePanelControlsModes = var23;
                        var16.focused = var22;
                        var16.mode = var21;
                        var21 = _closure1_slot11;
                        var16.VoicePanelModes = var21;
                        var0.__closure = var16;
                        var16 = 971409264757.0;
                        var0.__workletHash = var16;
                        var16 = _closure1_slot42;
                        var0.__initData = var16;
                        var16 = var6.bind(var13)(var0);
                        var0 = 49;
                        var0 = var2[var0];
                        var2 = var1.bind(var3)(var0);
                        var1 = var2.useHangStatusExperiment;
                        var0 = {};
                        var0.guildId = var4;
                        var4 = 'FloatingParticipantLabel';
                        var0.location = var4;
                        var0 = var1.bind(var2)(var0);
                        var6 = var0.enableHangStatus;
                        var0 = null;
                        var13 = var0 != var20;
                        if (!var13) {
                            _fun111771_ip = 487;
                            continue _fun111771
                        }
                    case 452:
                        var2 = _closure1_slot17;
                        var1 = _closure1_slot41;
                        var0 = {};
                        var0.controlsHidden = var16;
                        var0.label = var20;
                        var0.layout = var14;
                        var0.participant = var18;
                        var13 = var2.bind(var3)(var1, var0);
                    case 487:
                        var2 = _closure1_slot18;
                        var1 = _closure1_slot19;
                        var0 = {};
                        if (!var8) {
                            _fun111771_ip = 521;
                            continue _fun111771
                        }
                    case 500:
                        var22 = _closure1_slot17;
                        var21 = _closure1_slot37;
                        var4 = {};
                        var4.controlsHidden = var16;
                        var8 = var22.bind(var3)(var21, var4);
                    case 521:
                        var4 = new Array(4);
                        var4[0] = var8;
                        var8 = var5;
                        if (!var5) {
                            _fun111771_ip = 538;
                            continue _fun111771
                        }
                    case 535:
                        var8 = var10;
                    case 538:
                        if (!var8) {
                            _fun111771_ip = 577;
                            continue _fun111771
                        }
                    case 541:
                        var22 = _closure1_slot17;
                        var21 = _closure1_slot26;
                        var10 = {};
                        var10.controlsHidden = var16;
                        var10.participant = var18;
                        var10.isSelf = var17;
                        var10.layout = var14;
                        var8 = var22.bind(var3)(var21, var10);
                    case 577:
                        var4[1] = var8;
                        if (!var5) {
                            _fun111771_ip = 587;
                            continue _fun111771
                        }
                    case 584:
                        var5 = var7;
                    case 587:
                        if (!var5) {
                            _fun111771_ip = 631;
                            continue _fun111771
                        }
                    case 590:
                        var10 = _closure1_slot17;
                        var8 = _closure1_slot28;
                        var7 = {};
                        var7.controlsHidden = var16;
                        var21 = var18.id;
                        var7.participantId = var21;
                        var7.targetName = var20;
                        var7.layout = var14;
                        var5 = var10.bind(var3)(var8, var7);
                    case 631:
                        var4[2] = var5;
                        var5 = var13;
                        if (!var6) {
                            _fun111771_ip = 785;
                            continue _fun111771
                        }
                    case 644:
                        var8 = _closure1_slot18;
                        var7 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var6 = 34;
                        var6 = var10[var6];
                        var7 = var7.bind(var3)(var6);
                        var6 = {};
                        var9 = var9.bottomLabel;
                        var6.style = var9;
                        var9 = new Array(2);
                        var9[0] = var13;
                        var13 = _closure1_slot0;
                        var10 = var10[var19];
                        var13 = var13.bind(var3)(var10);
                        var10 = var13.isStableParticipantWithUser;
                        var10 = var10.bind(var13)(var18);
                        if (!var10) {
                            _fun111771_ip = 718;
                            continue _fun111771
                        }
                    case 715:
                        var10 = var12;
                    case 718:
                        if (!var10) {
                            _fun111771_ip = 771;
                            continue _fun111771
                        }
                    case 721:
                        var13 = _closure1_slot17;
                        var12 = _closure1_slot23;
                        var11 = {};
                        var18 = var18.user;
                        var18 = var18.id;
                        var11.userId = var18;
                        var11.isSelf = var17;
                        var11.controlsHidden = var16;
                        var11.speaking = var15;
                        var11.layout = var14;
                        var10 = var13.bind(var3)(var12, var11);
                    case 771:
                        var9[1] = var10;
                        var6.children = var9;
                        var5 = var8.bind(var3)(var7, var6);
                    case 785:
                        var4[3] = var5;
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var1 = var3.bind(var6)(var1);
            var3 = 56;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/voice_panel/native/card/VoicePanelCardFloatingControls.tsx';
            var3 = var4.bind(var5)(var3);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 1371, 3568, 3671, 3477, 11816, 11814, 11819, 660, 3482, 33, 3677, 4039, 1297, 671, 478, 11815, 11930, 566, 4034, 7745, 1234, 14287, 3107, 7636, 7747, 14275, 14277, 14326, 8628, 14274, 8190, 6415, 5348, 8191, 14272, 7973, 3464, 7903, 14327, 14328, 14313, 6416, 14329, 3118, 4023, 8202, 3571, 3937, 6880, 3895, 7336, 8247, 14250, 2]);