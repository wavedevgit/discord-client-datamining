// modules/video_calls/native/components/FocusedExpandedControls.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var0 = function arg0() {
        _fun68260: for (var _fun68260_ip = 0;;) switch (_fun68260_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.iconSource;
                var2 = var0.showIconSparkle;
                var0 = _closure1_slot23;
                var5 = undefined;
                var10 = var0.bind(var5)();
                var0 = null;
                if (!(var0 != var6)) {
                    _fun68260_ip = 254;
                    continue _fun68260
                }
            case 37:
                var4 = _closure1_slot20;
                var9 = _closure1_slot1;
                var11 = _closure1_slot2;
                var8 = 17;
                var1 = var11[var8];
                var3 = var9.bind(var5)(var1);
                var1 = {};
                var8 = var11[var8];
                var8 = var9.bind(var5)(var8);
                var8 = var8.Sizes;
                var8 = var8.MEDIUM;
                var1.size = var8;
                var1.source = var6;
                var6 = var10.formTintColor;
                var1.style = var6;
                var6 = true;
                var1.disableColor = var6;
                var8 = var4.bind(var5)(var3, var1);
                var1 = var8;
                if (!var2) {
                    _fun68260_ip = 252;
                    continue _fun68260
                }
            case 124:
                var4 = _closure1_slot21;
                var3 = _closure1_slot5;
                var2 = {};
                var6 = new Array(3);
                var6[0] = var8;
                var13 = _closure1_slot20;
                var9 = _closure1_slot7;
                var8 = {};
                var11 = var10.sparkle2;
                var8.style = var11;
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var14 = 18;
                var14 = var12[var14];
                var14 = var11.bind(var5)(var14);
                var8.source = var14;
                var8 = var13.bind(var5)(var9, var8);
                var6[1] = var8;
                var9 = _closure1_slot20;
                var8 = _closure1_slot7;
                var7 = {};
                var10 = var10.sparkle;
                var7.style = var10;
                var10 = 19;
                var10 = var12[var10];
                var10 = var11.bind(var5)(var10);
                var7.source = var10;
                var7 = var9.bind(var5)(var8, var7);
                var6[2] = var7;
                var2.children = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 252:
                return var1;
            case 254:
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var3 = function arg0() {
        _fun68261: for (var _fun68261_ip = 0;;) switch (_fun68261_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.disabled;
                var16 = var0.iconSource;
                var15 = var0.showIconSparkle;
                var3 = undefined;
                if (!(var15 === var3)) {
                    _fun68261_ip = 28;
                    continue _fun68261
                }
            case 26:
                var15 = false;
            case 28:
                var10 = var0.label;
                var5 = var0.onPress;
                var6 = var0.onSwitchValueChange;
                var7 = var0.switchValue;
                var4 = var0.trailing;
                var0 = _closure1_slot23;
                var9 = var0.bind(var3)();
                var1 = null;
                var0 = var1 == var4;
                if (!var0) {
                    _fun68261_ip = 80;
                    continue _fun68261
                }
            case 76:
                var0 = var1 != var7;
            case 80:
                if (!var0) {
                    _fun68261_ip = 173;
                    continue _fun68261
                }
            case 83:
                var2 = _closure1_slot20;
                var1 = _closure1_slot0;
                var14 = _closure1_slot2;
                var0 = 20;
                var0 = var14[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.FormSwitch;
                var0 = {};
                var13 = _closure1_slot1;
                var11 = 16;
                var11 = var14[var11];
                var11 = var13.bind(var3)(var11);
                var11 = var11.unsafe_rawColors;
                var11 = var11.BRAND_500;
                var0.tintColor = var11;
                var11 = true;
                var0.renderIosBackground = var11;
                var0.value = var7;
                var0.disabled = var12;
                var0.onValueChange = var6;
                var4 = var2.bind(var3)(var1, var0);
            case 173:
                var2 = _closure1_slot20;
                var7 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = 20;
                var0 = var11[var6];
                var0 = var7.bind(var3)(var0);
                var1 = var0.FormRow;
                var0 = {};
                var0.disabled = var12;
                var14 = _closure1_slot20;
                var13 = _closure1_slot24;
                var12 = {};
                var12.iconSource = var16;
                var12.showIconSparkle = var15;
                var12 = var14.bind(var3)(var13, var12);
                var0.leading = var12;
                var8 = _closure1_slot20;
                var6 = var11[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.FormLabel;
                var6 = {};
                var6.text = var10;
                var9 = var9.formColor;
                var6.style = var9;
                var6 = var8.bind(var3)(var7, var6);
                var0.label = var6;
                var0.onPress = var5;
                var0.trailing = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot25 = var3;
    var0 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot1;
        var7 = _closure1_slot2;
        var3 = 60;
        var3 = var7[var3];
        var6 = undefined;
        var3 = var4.bind(var6)(var3);
        var5 = var3.bind(var6)(var1);
        var _closure2_slot1 = var5;
        var4 = _closure1_slot0;
        var3 = 21;
        var3 = var7[var3];
        var4 = var4.bind(var6)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot9;
        var2 = new Array(1);
        var2[0] = var6;
        var6 = var1.id;
        var1 = new Array(2);
        var1[0] = var6;
        var1[1] = var5;
        var0 = function() { // Environment: var0
            _fun68263: for (var _fun68263_ip = 0;;) switch (_fun68263_ip) {
                case 0:
                    var0 = _closure2_slot1;
                    var0 = !var0;
                    if (!var0) {
                        _fun68263_ip = 46;
                        continue _fun68263
                    }
                case 13:
                    var3 = _closure1_slot9;
                    var2 = var3.getSelectedParticipantId;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var0 = var1 == var2;
                case 46:
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var _closure1_slot26 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var11.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var7 = var4.Pressable;
    var _closure1_slot6 = var7;
    var4 = var4.Image;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot15 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.AnalyticsSections;
    var _closure1_slot16 = var7;
    var4 = var4.PlatformTypes;
    var _closure1_slot17 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.SelfStreamAndVideoAlertType;
    var _closure1_slot18 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.MediaEngineContextTypes;
    var _closure1_slot19 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.jsx;
    var _closure1_slot20 = var7;
    var7 = var4.jsxs;
    var _closure1_slot21 = var7;
    var4 = var4.Fragment;
    var _closure1_slot22 = var4;
    var4 = 15;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 16;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.ICON_STRONG;
    var9.tintColor = var12;
    var4.formTintColor = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.MOBILE_TEXT_HEADING_PRIMARY;
    var9.color = var12;
    var4.formColor = var9;
    var9 = {
        'position': 'absolute',
        'bottom': 4294967292,
        'right': '70%'
    };
    var4.sparkle = var9;
    var9 = {
        'position': 'absolute',
        'right': 4294967291,
        'height': 10,
        'width': 10
    };
    var4.sparkle2 = var9;
    var9 = {
        'paddingLeft': 8,
        'paddingRight': 8,
        'paddingTop': 4,
        'paddingBottom': 4
    };
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var9.borderRadius = var12;
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT;
    var9.backgroundColor = var10;
    var4.newBadge = var9;
    var9 = {};
    var10 = 'uppercase';
    var9.textTransform = var10;
    var4.newBadgeText = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot23 = var4;
    var4 = 71;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/native/components/FocusedExpandedControls.tsx';
    var4 = var5.bind(var6)(var4);
    var2.ExpandedControlItem = var3;
    var3 = function() {
        _fun68264: for (var _fun68264_ip = 0;;) switch (_fun68264_ip) {
            case 0:
                var0 = _closure1_slot23;
                var4 = undefined;
                var10 = var0.bind(var4)();
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var0 = 21;
                var2 = var17[var0];
                var6 = var16.bind(var4)(var2);
                var5 = var6.useStateFromStores;
                var2 = _closure1_slot11;
                var3 = new Array(2);
                var3[0] = var2;
                var2 = _closure1_slot12;
                var3[1] = var2;
                var2 = function() { // Environment: var15
                    _fun68265: for (var _fun68265_ip = 0;;) switch (_fun68265_ip) {
                        case 0:
                            var1 = _closure1_slot11;
                            var0 = var1.getLastActiveStream;
                            var1 = var0.bind(var1)();
                            var4 = null;
                            var3 = var4 != var1;
                            var0 = null;
                            if (!var3) {
                                _fun68265_ip = 57;
                                continue _fun68265
                            }
                        case 28:
                            var3 = var1.ownerId;
                            var5 = _closure1_slot12;
                            var2 = var5.getId;
                            var2 = var2.bind(var5)();
                            var0 = null;
                            if (!(var3 !== var2)) {
                                _fun68265_ip = 57;
                                continue _fun68265
                            }
                        case 54:
                            var0 = var1;
                        case 57:
                            return var0;
                    }
                };
                var2 = var5.bind(var6)(var3, var2);
                var _closure2_slot0 = var2;
                var0 = var17[var0];
                var6 = var16.bind(var4)(var0);
                var5 = var6.useStateFromStores;
                var0 = _closure1_slot13;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var15
                    _fun68266: for (var _fun68266_ip = 0;;) switch (_fun68266_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = null;
                            var1 = var0 != var1;
                            var0 = 0;
                            if (!var1) {
                                _fun68266_ip = 57;
                                continue _fun68266
                            }
                        case 18:
                            var4 = _closure1_slot13;
                            var3 = var4.getLocalVolume;
                            var2 = _closure2_slot0;
                            var2 = var2.ownerId;
                            var1 = _closure1_slot19;
                            var1 = var1.STREAM;
                            var0 = var3.bind(var4)(var2, var1);
                        case 57:
                            return var0;
                    }
                };
                var12 = var5.bind(var6)(var3, var0);
                var6 = _closure1_slot4;
                var5 = var6.useCallback;
                var3 = new Array(1);
                var3[0] = var2;
                var0 = function(arg0) { // Environment: var15
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var0 = 22;
                    var2 = var5[var0];
                    var0 = undefined;
                    var7 = var4.bind(var0)(var2);
                    var2 = _closure2_slot0;
                    var3 = null;
                    var6 = var3 != var2;
                    var3 = 'Can not set stream volume without active stream';
                    var3 = var7.bind(var0)(var6, var3);
                    var3 = 23;
                    var3 = var5[var3];
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.setLocalVolume;
                    var3 = var2.ownerId;
                    var1 = _closure1_slot19;
                    var2 = var1.STREAM;
                    var1 = arg0;
                    var1 = var4.bind(var5)(var3, var1, var2);
                    return var0;
                };
                var11 = var5.bind(var6)(var0, var3);
                var5 = _closure1_slot21;
                var3 = _closure1_slot22;
                var0 = {};
                var9 = _closure1_slot20;
                var6 = 20;
                var7 = var17[var6];
                var7 = var16.bind(var4)(var7);
                var8 = var7.FormLabel;
                var7 = {};
                var13 = 24;
                var14 = var17[var13];
                var14 = var16.bind(var4)(var14);
                var18 = var14.intl;
                var14 = var18.string;
                var13 = var17[var13];
                var13 = var16.bind(var4)(var13);
                var13 = var13.t;
                var13 = var13.pEAl4b;
                var13 = var14.bind(var18)(var13);
                var7.text = var13;
                var13 = var10.formColor;
                var10 = new Array(2);
                var10[0] = var13;
                var14 = {};
                var13 = 16;
                var14.marginBottom = var13;
                var10[1] = var14;
                var7.style = var10;
                var8 = var9.bind(var4)(var8, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var10 = _closure1_slot20;
                var9 = _closure1_slot1;
                var8 = 25;
                var8 = var17[var8];
                var9 = var9.bind(var4)(var8);
                var8 = {};
                var14 = 26;
                var14 = var17[var14];
                var16 = var16.bind(var4)(var14);
                var14 = var16.isAndroid;
                var16 = var14.bind(var16)();
                var14 = undefined;
                if (!var16) {
                    _fun68264_ip = 332;
                    continue _fun68264
                }
            case 325:
                var14 = function() { // Environment: var15
                    var0 = true;
                    return var0;
                };
            case 332:
                var8.onResponderGrant = var14;
                var8.value = var12;
                var8.onValueChange = var11;
                var12 = _closure1_slot1;
                var11 = _closure1_slot2;
                var14 = var11[var13];
                var14 = var12.bind(var4)(var14);
                var14 = var14.unsafe_rawColors;
                var14 = var14.WHITE;
                var8.color = var14;
                var11 = var11[var13];
                var11 = var12.bind(var4)(var11);
                var11 = var11.unsafe_rawColors;
                var11 = var11.PRIMARY_300;
                var8.maxTrackTintColor = var11;
                var8 = var10.bind(var4)(var9, var8);
                var7[1] = var8;
                var0.children = var7;
                var5 = var5.bind(var4)(var3, var0);
                var0 = null;
                var2 = var0 != var2;
                if (!var2) {
                    _fun68264_ip = 471;
                    continue _fun68264
                }
            case 432:
                var3 = _closure1_slot20;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var1 = var2.bind(var4)(var1);
                var2 = var1.FormRow;
                var1 = {};
                var1.label = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 471:
                return var0;
        }
    };
    var2.StreamVolumeItem = var3;
    var3 = function arg0() {
        var1 = arg0;
        var1 = var1.channel;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot20;
        var2 = _closure1_slot25;
        var1 = {};
        var0 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 27;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.handleDisconnect;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1.onPress = var0;
        var6 = _closure1_slot1;
        var8 = _closure1_slot2;
        var0 = 28;
        var5 = var8[var0];
        var0 = undefined;
        var5 = var6.bind(var0)(var5);
        var1.iconSource = var5;
        var7 = _closure1_slot0;
        var4 = 24;
        var5 = var8[var4];
        var5 = var7.bind(var0)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var0)(var4);
        var4 = var4.t;
        var4 = var4["4ry6yi"];
        var4 = var5.bind(var6)(var4);
        var1.label = var4;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2.DisconnectCallButton = var3;
    var3 = function arg0() {
        var0 = arg0;
        var1 = var0.channelId;
        var _closure2_slot0 = var1;
        var0 = var0.isConnectedToVoiceChannel;
        var _closure2_slot1 = var0;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 27;
        var1 = var8[var1];
        var3 = undefined;
        var2 = var7.bind(var3)(var1);
        var1 = var2.useMaskedSpeakerStates;
        var1 = var1.bind(var2)();
        var4 = var1.routeSource;
        var2 = _closure1_slot20;
        var1 = _closure1_slot25;
        var0 = {};
        var5 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 29;
            var1 = var1[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var1);
            var3 = var4.showAudioOutputSelector;
            var2 = _closure2_slot0;
            var1 = _closure2_slot1;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var0.onPress = var5;
        var0.iconSource = var4;
        var4 = 24;
        var5 = var8[var4];
        var5 = var7.bind(var3)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4["A/Ly/2"];
        var4 = var5.bind(var6)(var4);
        var0.label = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.AudioRouteButton = var3;
    var3 = function(arg0) { // Environment: var1
        _fun68273: for (var _fun68273_ip = 0;;) switch (_fun68273_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.channel;
                var8 = var0.disabled;
                var5 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 30;
                var2 = var9[var1];
                var3 = undefined;
                var2 = var5.bind(var3)(var2);
                var2 = var2.bind(var3)(var4);
                var6 = var2.onPress;
                var5 = var2.imgSource;
                var4 = var2.text;
                var7 = var2.isFeatureEnabled;
                var2 = _closure1_slot0;
                var1 = var9[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.handleOnPressWithOnboard;
                var6 = var1.bind(var2)(var6);
                var2 = _closure1_slot20;
                var1 = _closure1_slot25;
                var0 = {};
                var7 = !var7;
                if (var7) {
                    _fun68273_ip = 108;
                    continue _fun68273
                }
            case 105:
                var7 = var8;
            case 108:
                var0.disabled = var7;
                var0.onPress = var6;
                var0.iconSource = var5;
                var0.label = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.ScreenshareButton = var3;
    var3 = function arg0() {
        _fun68274: for (var _fun68274_ip = 0;;) switch (_fun68274_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.channel;
                var _closure2_slot0 = var11;
                var0 = _closure1_slot23;
                var3 = undefined;
                var13 = var0.bind(var3)();
                var8 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 31;
                var0 = var5[var0];
                var2 = var8.bind(var3)(var0);
                var1 = var2.UNSAFE_useIsDismissibleContentDismissed;
                var0 = 32;
                var0 = var5[var0];
                var0 = var8.bind(var3)(var0);
                var0 = var0.DismissibleContent;
                var0 = var0.SOUNDBOARD_MOBILE_NEW_BADGE;
                var0 = var1.bind(var2)(var0);
                var4 = !var0;
                var7 = _closure1_slot4;
                var2 = var7.useEffect;
                var1 = function() { // Environment: var6
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 33;
                    var1 = var3[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var1 = var4.maybeFetchSoundboardSounds;
                    var1 = var1.bind(var4)();
                    var1 = 34;
                    var1 = var3[var1];
                    var1 = var2.bind(var0)(var1);
                    var2 = var1.FrecencyUserSettingsActionCreators;
                    var1 = var2.loadIfNecessary;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var0 = new Array(0);
                var0 = var2.bind(var7)(var1, var0);
                var2 = _closure1_slot20;
                var1 = _closure1_slot25;
                var0 = {};
                var7 = _closure1_slot1;
                var10 = 35;
                var10 = var5[var10];
                var10 = var7.bind(var3)(var10);
                var10 = var10.bind(var3)(var11);
                var10 = !var10;
                var0.disabled = var10;
                var6 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 36;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.showSoundboardSoundPickerActionSheet;
                    var1 = {};
                    var4 = _closure2_slot0;
                    var1.channel = var4;
                    var4 = 'call control drawer';
                    var1.analyticsSource = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0.onPress = var6;
                var6 = 37;
                var6 = var5[var6];
                var6 = var7.bind(var3)(var6);
                var0.iconSource = var6;
                var16 = 24;
                var6 = var5[var16];
                var6 = var8.bind(var3)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var5[var16];
                var5 = var8.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.ABjMWI;
                var5 = var6.bind(var7)(var5);
                var0.label = var5;
                var5 = undefined;
                if (!var4) {
                    _fun68274_ip = 375;
                    continue _fun68274
                }
            case 236:
                var8 = _closure1_slot20;
                var7 = _closure1_slot5;
                var6 = {};
                var10 = var13.newBadge;
                var6.style = var10;
                var11 = _closure1_slot20;
                var15 = _closure1_slot0;
                var12 = _closure1_slot2;
                var9 = 38;
                var9 = var12[var9];
                var9 = var15.bind(var3)(var9);
                var10 = var9.Text;
                var9 = {
                    'style': null,
                    'variant': 'text-xs/semibold',
                    'color': 'always-white'
                };
                var13 = var13.newBadgeText;
                var9.style = var13;
                var13 = var12[var16];
                var13 = var15.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var12[var16];
                var12 = var15.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.y2b7CA;
                var12 = var13.bind(var14)(var12);
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 375:
                var0.trailing = var5;
                var0.showIconSparkle = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.SoundboardButton = var3;
    var3 = function(arg0) { // Environment: var1
        _fun68277: for (var _fun68277_ip = 0;;) switch (_fun68277_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channel;
                var7 = var0.disabled;
                var3 = undefined;
                if (!(var7 === var3)) {
                    _fun68277_ip = 21;
                    continue _fun68277
                }
            case 19:
                var7 = false;
            case 21:
                var1 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 39;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var5 = var0.bind(var3)(var2);
                var2 = _closure1_slot0;
                var0 = 40;
                var0 = var6[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.createDeafHandler;
                var2 = var0.bind(var2)(var5);
                var0 = var2.deaf;
                var6 = var2.onPress;
                var5 = _closure1_slot2;
                if (var0) {
                    _fun68277_ip = 103;
                    continue _fun68277
                }
            case 94:
                var0 = 42;
                var0 = var5[var0];
                _fun68277_ip = 110;
                continue _fun68277;
            case 103:
                var2 = 41;
                var0 = var5[var2];
            case 110:
                var5 = var1.bind(var3)(var0);
                var2 = _closure1_slot20;
                var1 = _closure1_slot25;
                var0 = {};
                var0.disabled = var7;
                var0.onPress = var6;
                var0.iconSource = var5;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 24;
                var5 = var8[var4];
                var5 = var7.bind(var3)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var8[var4];
                var4 = var7.bind(var3)(var4);
                var4 = var4.t;
                var4 = var4.wjcRFX;
                var4 = var5.bind(var6)(var4);
                var0.label = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.DeafenButton = var3;
    var3 = function(arg0) { // Environment: var1
        _fun68278: for (var _fun68278_ip = 0;;) switch (_fun68278_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.channel;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 43;
                var0 = var2[var0];
                var3 = undefined;
                var0 = var1.bind(var3)(var0);
                var4 = var0.bind(var3)(var6);
                var1 = _closure1_slot0;
                var0 = 21;
                var0 = var2[var0];
                var10 = var1.bind(var3)(var0);
                var9 = var10.useStateFromStores;
                var0 = _closure1_slot8;
                var8 = new Array(1);
                var8[0] = var0;
                var7 = function() { // Environment: var0
                    var1 = _closure1_slot8;
                    var0 = var1.getCurrentEmbeddedActivity;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = new Array(0);
                var7 = var9.bind(var10)(var8, var7, var0);
                var0 = 44;
                var0 = var2[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.invite;
                var0 = null;
                var8 = var0 == var7;
                var0 = undefined;
                if (var8) {
                    _fun68278_ip = 125;
                    continue _fun68278
                }
            case 120:
                var0 = var7.applicationId;
            case 125:
                var0 = var1.bind(var2)(var6, var4, var0);
                var4 = var0.label;
                var6 = var0.onPress;
                var2 = _closure1_slot20;
                var1 = _closure1_slot25;
                var0 = {};
                var0.onPress = var6;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 45;
                var5 = var7[var5];
                var5 = var6.bind(var3)(var5);
                var0.iconSource = var5;
                var0.label = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.InviteButton = var3;
    var3 = function() { // Environment: var1
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 44;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = var2.shareActivityLogs;
        var1 = var1.bind(var2)();
        var4 = var1.label;
        var5 = var1.icon;
        var6 = var1.onPress;
        var2 = _closure1_slot20;
        var1 = _closure1_slot25;
        var0 = {};
        var0.onPress = var6;
        var0.iconSource = var5;
        var0.label = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.ShareActivityLogsButton = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot20;
        var2 = _closure1_slot25;
        var1 = {};
        var0 = function() {
            _fun68282: for (var _fun68282_ip = 0;;) switch (_fun68282_ip) {
                case 0:
                    var2 = _closure1_slot8;
                    var1 = var2.getCurrentEmbeddedActivity;
                    var5 = var1.bind(var2)();
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 46;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.leaveActivity;
                    var1 = {};
                    var4 = null;
                    var7 = var4 == var5;
                    var6 = undefined;
                    if (var7) {
                        _fun68282_ip = 63;
                        continue _fun68282
                    }
                case 58:
                    var6 = var5.location;
                case 63:
                    var1.location = var6;
                    var6 = var4 == var5;
                    var4 = undefined;
                    if (var6) {
                        _fun68282_ip = 81;
                        continue _fun68282
                    }
                case 76:
                    var4 = var5.applicationId;
                case 81:
                    var1.applicationId = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var1.onPress = var0;
        var6 = _closure1_slot1;
        var8 = _closure1_slot2;
        var0 = 47;
        var5 = var8[var0];
        var0 = undefined;
        var5 = var6.bind(var0)(var5);
        var1.iconSource = var5;
        var7 = _closure1_slot0;
        var4 = 24;
        var5 = var8[var4];
        var5 = var7.bind(var0)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var0)(var4);
        var4 = var4.t;
        var4 = var4["R/FK4A"];
        var4 = var5.bind(var6)(var4);
        var1.label = var4;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2.LeaveActivitiesButton = var3;
    var3 = function arg0() {
        _fun68283: for (var _fun68283_ip = 0;;) switch (_fun68283_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.onPress;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 44;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = var2.voiceSettings;
                var1 = var1.bind(var2)();
                var4 = var1.label;
                var5 = var1.icon;
                var6 = var1.onPress;
                var2 = _closure1_slot20;
                var1 = _closure1_slot25;
                var0 = {};
                var8 = null;
                if (!(var8 != var7)) {
                    _fun68283_ip = 77;
                    continue _fun68283
                }
            case 74:
                var6 = var7;
            case 77:
                var0.onPress = var6;
                var0.iconSource = var5;
                var0.label = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.VoiceSettingsButton = var3;
    var3 = function() {
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var0 = 21;
        var0 = var10[var0];
        var3 = undefined;
        var5 = var9.bind(var3)(var0);
        var2 = var5.useStateFromStores;
        var0 = _closure1_slot15;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var4
            var1 = _closure1_slot15;
            var0 = var1.isPipEnabledWhileFocusedOnActivityOrStream;
            var0 = var0.bind(var1)();
            return var0;
        };
        var5 = var2.bind(var5)(var1, var0);
        var2 = _closure1_slot20;
        var1 = _closure1_slot25;
        var0 = {};
        var7 = _closure1_slot1;
        var6 = 48;
        var6 = var10[var6];
        var6 = var7.bind(var3)(var6);
        var0.iconSource = var6;
        var6 = 24;
        var7 = var10[var6];
        var7 = var9.bind(var3)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var6 = var10[var6];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6["l/ku7d"];
        var6 = var7.bind(var8)(var6);
        var0.label = var6;
        var0.switchValue = var5;
        var4 = function arg0() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 49;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.setPipEnabledWhileFocusedOnActivityOrStream;
            var1 = arg0;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.onSwitchValueChange = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.ToggleShowPip = var3;
    var3 = function() {
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var0 = 21;
        var0 = var10[var0];
        var3 = undefined;
        var5 = var9.bind(var3)(var0);
        var2 = var5.useStateFromStores;
        var0 = _closure1_slot15;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var4
            var1 = _closure1_slot15;
            var0 = var1.getShowActivitiesDebugOverlay;
            var0 = var0.bind(var1)();
            return var0;
        };
        var5 = var2.bind(var5)(var1, var0);
        var2 = _closure1_slot20;
        var1 = _closure1_slot25;
        var0 = {};
        var7 = _closure1_slot1;
        var6 = 50;
        var6 = var10[var6];
        var6 = var7.bind(var3)(var6);
        var0.iconSource = var6;
        var6 = 24;
        var7 = var10[var6];
        var7 = var9.bind(var3)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var6 = var10[var6];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6["qv5/SP"];
        var6 = var7.bind(var8)(var6);
        var0.label = var6;
        var0.switchValue = var5;
        var4 = function arg0() {
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 51;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'EMBEDDED_ACTIVITY_SET_DEBUG_OVERLAY_VISIBILITY';
            var1.type = var4;
            var4 = arg0;
            var1.visible = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.onSwitchValueChange = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.ToggleShowActivitiesDebugOverlay = var3;
    var3 = function() {
        _fun68290: for (var _fun68290_ip = 0;;) switch (_fun68290_ip) {
            case 0:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 21;
                var1 = var6[var3];
                var4 = undefined;
                var10 = var5.bind(var4)(var1);
                var9 = var10.useStateFromStores;
                var2 = _closure1_slot13;
                var8 = new Array(1);
                var8[0] = var2;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot13;
                    var0 = var1.isNoiseCancellationSupported;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var9.bind(var10)(var8, var1);
                var3 = var6[var3];
                var6 = var5.bind(var4)(var3);
                var5 = var6.useStateFromStores;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    var1 = _closure1_slot13;
                    var0 = var1.getNoiseCancellation;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var6 = var5.bind(var6)(var3, var2);
                var _closure2_slot0 = var6;
                var5 = undefined;
                if (!var1) {
                    _fun68290_ip = 108;
                    continue _fun68290
                }
            case 101:
                var5 = function() { // Environment: var0
                    _fun68293: for (var _fun68293_ip = 0;;) switch (_fun68293_ip) {
                        case 0:
                            var7 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var3 = 52;
                            var1 = var2[var3];
                            var0 = undefined;
                            var1 = var7.bind(var0)(var1);
                            var6 = var1.Storage;
                            var4 = var6.get;
                            var1 = 53;
                            var2 = var2[var1];
                            var2 = var7.bind(var0)(var2);
                            var2 = var2.StorageKeys;
                            var2 = var2.KRISP_ONBOARD;
                            var2 = var4.bind(var6)(var2);
                            if (var2) {
                                _fun68293_ip = 223;
                                continue _fun68293
                            }
                        case 71:
                            var2 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = var7[var3];
                            var3 = var2.bind(var0)(var3);
                            var6 = var3.Storage;
                            var4 = var6.set;
                            var1 = var7[var1];
                            var1 = var2.bind(var0)(var1);
                            var1 = var1.StorageKeys;
                            var3 = var1.KRISP_ONBOARD;
                            var1 = true;
                            var1 = var4.bind(var6)(var3, var1);
                            var3 = _closure1_slot1;
                            var1 = 54;
                            var1 = var7[var1];
                            var6 = var3.bind(var0)(var1);
                            var4 = var6.openLazy;
                            var1 = 56;
                            var1 = var7[var1];
                            var8 = var2.bind(var0)(var1);
                            var1 = 55;
                            var3 = var7[var1];
                            var1 = var7.paths;
                            var3 = var8.bind(var0)(var3, var1);
                            var1 = 57;
                            var1 = var7[var1];
                            var1 = var2.bind(var0)(var1);
                            var2 = var1.NUF_KRISP_ACTIONSHEET_KEY;
                            var1 = {};
                            var7 = function() {
                                var2 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var1 = 54;
                                var1 = var5[var1];
                                var4 = undefined;
                                var2 = var2.bind(var4)(var1);
                                var1 = var2.hideActionSheet;
                                var3 = _closure1_slot0;
                                var0 = 57;
                                var0 = var5[var0];
                                var0 = var3.bind(var4)(var0);
                                var0 = var0.NUF_KRISP_ACTIONSHEET_KEY;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var1.callback = var7;
                            var1 = var4.bind(var6)(var3, var2, var1);
                            _fun68293_ip = 281;
                            continue _fun68293;
                        case 223:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 23;
                            var1 = var3[var1];
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.setNoiseCancellation;
                            var1 = _closure2_slot0;
                            var2 = !var1;
                            var1 = {};
                            var5 = _closure1_slot16;
                            var5 = var5.NOISE_CANCELLATION_POPOUT;
                            var1.section = var5;
                            var1 = var3.bind(var4)(var2, var1);
                        case 281:
                            return var0;
                    }
                };
            case 108:
                var0 = null;
                var1 = var0 == var5;
                if (var1) {
                    _fun68290_ip = 246;
                    continue _fun68290
                }
            case 120:
                var3 = _closure1_slot20;
                var2 = _closure1_slot25;
                var1 = {};
                var1.onPress = var5;
                var9 = _closure1_slot1;
                var11 = _closure1_slot2;
                if (var6) {
                    _fun68290_ip = 154;
                    continue _fun68290
                }
            case 145:
                var8 = 59;
                var8 = var11[var8];
                _fun68290_ip = 161;
                continue _fun68290;
            case 154:
                var10 = 58;
                var8 = var11[var10];
            case 161:
                var8 = var9.bind(var4)(var8);
                var1.iconSource = var8;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 24;
                var8 = var11[var7];
                var8 = var10.bind(var4)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var4)(var7);
                var7 = var7.t;
                var7 = var7.t8Qhib;
                var7 = var8.bind(var9)(var7);
                var1.label = var7;
                var1.switchValue = var6;
                var1.onSwitchValueChange = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 246:
                return var0;
        }
    };
    var2.ToggleNoiseCancellation = var3;
    var3 = function arg0() {
        var0 = arg0;
        var4 = var0.onOpenRTCDebugOverlay;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 44;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = var2.rtcDebugPanel;
        var1 = var1.bind(var2)(var4);
        var5 = var1.label;
        var6 = var1.onPress;
        var4 = var1.icon;
        var2 = _closure1_slot20;
        var1 = _closure1_slot25;
        var0 = {};
        var0.onPress = var6;
        var0.label = var5;
        var0.iconSource = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.RtcDebugPanelButton = var3;
    var3 = function arg0() {
        _fun68296: for (var _fun68296_ip = 0;;) switch (_fun68296_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.channel;
                var _closure2_slot0 = var6;
                var2 = _closure1_slot26;
                var4 = undefined;
                var2 = var2.bind(var4)(var6);
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 21;
                var5 = var7[var5];
                var9 = var3.bind(var4)(var5);
                var8 = var9.useStateFromStores;
                var10 = _closure1_slot9;
                var5 = new Array(1);
                var5[0] = var10;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot9;
                    var1 = var2.getVoiceParticipantsHidden;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var8.bind(var9)(var5, var0);
                var0 = 44;
                var0 = var7[var0];
                var3 = var3.bind(var4)(var0);
                var0 = var3.videoParticipantsHidden;
                var0 = var0.bind(var3)(var6, var5);
                var7 = var0.label;
                var5 = var0.onPress;
                var6 = var0.switchValue;
                var0 = null;
                if (!var2) {
                    _fun68296_ip = 153;
                    continue _fun68296
                }
            case 123:
                var3 = _closure1_slot20;
                var2 = _closure1_slot25;
                var1 = {};
                var1.label = var7;
                var1.switchValue = var6;
                var1.onSwitchValueChange = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 153:
                return var0;
        }
    };
    var2.HideNonVideoParticipants = var3;
    var3 = function arg0() {
        _fun68298: for (var _fun68298_ip = 0;;) switch (_fun68298_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channel;
                var3 = var0.mediaEngineContext;
                var4 = undefined;
                if (!(var3 === var4)) {
                    _fun68298_ip = 35;
                    continue _fun68298
                }
            case 22:
                var2 = _closure1_slot19;
                var3 = var2.STREAM;
            case 35:
                var2 = var0.userId;
                var _closure2_slot0 = var4;
                var _closure2_slot1 = var4;
                var _closure2_slot2 = var4;
                var0 = _closure1_slot26;
                var1 = var0.bind(var4)(var1);
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 63;
                var0 = var8[var0];
                var0 = var6.bind(var4)(var0);
                var3 = var0.bind(var4)(var2, var3);
                var2 = _closure1_slot3;
                var0 = 3;
                var2 = var2.bind(var4)(var3, var0);
                var0 = 0;
                var3 = var2[var0];
                var0 = 1;
                var6 = var2[var0];
                _closure2_slot0 = var6;
                var0 = 2;
                var0 = var2[var0];
                _closure2_slot1 = var0;
                var2 = _closure1_slot0;
                var0 = 21;
                var0 = var8[var0];
                var9 = var2.bind(var4)(var0);
                var8 = var9.useStateFromStores;
                var0 = _closure1_slot10;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var5
                    var0 = _closure1_slot10;
                    var0 = var0.disableHideSelfStreamAndVideoConfirmationAlert;
                    return var0;
                };
                var0 = var8.bind(var9)(var2, var0);
                _closure2_slot2 = var0;
                var0 = null;
                if (!var3) {
                    _fun68298_ip = 286;
                    continue _fun68298
                }
            case 186:
                var0 = null;
                if (!var1) {
                    _fun68298_ip = 286;
                    continue _fun68298
                }
            case 191:
                var3 = _closure1_slot20;
                var2 = _closure1_slot25;
                var1 = {};
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 24;
                var8 = var11[var7];
                var8 = var10.bind(var4)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var4)(var7);
                var7 = var7.t;
                var7 = var7.MH8ESU;
                var7 = var8.bind(var9)(var7);
                var1.label = var7;
                var6 = !var6;
                var1.switchValue = var6;
                var5 = function() {
                    _fun68300: for (var _fun68300_ip = 0;;) switch (_fun68300_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            if (var1) {
                                _fun68300_ip = 56;
                                continue _fun68300
                            }
                        case 12:
                            var1 = _closure2_slot0;
                            if (var1) {
                                _fun68300_ip = 56;
                                continue _fun68300
                            }
                        case 19:
                            var1 = _closure1_slot18;
                            var4 = var1.VIDEO;
                            var3 = function arg0, arg1() {
                                var0 = arg0;
                                var _closure4_slot0 = var0;
                                var0 = arg1;
                                var _closure4_slot1 = var0;
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 61;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.openLazy;
                                var1 = {};
                                var4 = function() {
                                    var2 = _closure1_slot0;
                                    var0 = _closure1_slot2;
                                    var1 = 56;
                                    var1 = var0[var1];
                                    var3 = undefined;
                                    var2 = var2.bind(var3)(var1);
                                    var1 = 62;
                                    var1 = var0[var1];
                                    var0 = var0.paths;
                                    var2 = var2.bind(var3)(var1, var0);
                                    var1 = var2.then;
                                    var0 = function(arg0) { // Environment: var0
                                        var1 = arg0;
                                        var1 = var1.default;
                                        var _closure6_slot0 = var1;
                                        var0 = function(arg0) { // Environment: var0
                                            var3 = _closure1_slot20;
                                            var2 = _closure6_slot0;
                                            var1 = {};
                                            var6 = arg0;
                                            var7 = var1;
                                            var0 = copyDataProperties(var7, var6);
                                            var5 = _closure4_slot0;
                                            var4 = 'type';
                                            var1[var4] = var5;
                                            var4 = _closure4_slot1;
                                            var0 = 'onConfirm';
                                            var1[var0] = var4;
                                            var0 = undefined;
                                            var0 = var3.bind(var0)(var2, var1);
                                            return var0;
                                        };
                                        return var0;
                                    };
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var1.importer = var4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var1 = undefined;
                            var2 = function() { // Environment: var2
                                var2 = _closure2_slot1;
                                var0 = _closure2_slot0;
                                var1 = !var0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var2 = var3.bind(var1)(var4, var2);
                            return var1;
                        case 56:
                            var2 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var1 = !var0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var1.onSwitchValueChange = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 286:
                return var0;
        }
    };
    var2.HideSelfVideo = var3;
    var3 = function arg0() {
        var0 = arg0;
        var4 = var0.stream;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 44;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = var2.reportStreamIssue;
        var1 = var1.bind(var2)(var4);
        var5 = var1.label;
        var6 = var1.icon;
        var4 = var1.onPress;
        var2 = _closure1_slot20;
        var1 = _closure1_slot25;
        var0 = {};
        var0.iconSource = var6;
        var0.label = var5;
        var0.onPress = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.ReportStreamIssueButton = var3;
    var3 = function arg0() {
        _fun68307: for (var _fun68307_ip = 0;;) switch (_fun68307_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.channel;
                var _closure2_slot0 = var9;
                var11 = var0.account;
                var7 = var0.onPress;
                var _closure2_slot1 = var7;
                var0 = var0.connected;
                var4 = undefined;
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var3 = 64;
                var2 = var2[var3];
                var5 = var5.bind(var4)(var2);
                var2 = var5.useIsVoiceChannelLocked;
                var2 = var2.bind(var5)(var9);
                if (!var2) {
                    _fun68307_ip = 95;
                    continue _fun68307
                }
            case 82:
                var5 = var9.isPrivate;
                var5 = var5.bind(var9)();
                var2 = !var5;
            case 95:
                _closure2_slot2 = var2;
                var5 = _closure1_slot1;
                var8 = _closure1_slot2;
                var3 = var8[var3];
                var3 = var5.bind(var4)(var3);
                var3 = var3.bind(var4)(var9);
                var6 = _closure1_slot0;
                var5 = 21;
                var5 = var8[var5];
                var10 = var6.bind(var4)(var5);
                var8 = var10.useStateFromStores;
                var5 = _closure1_slot14;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = function() { // Environment: var1
                    var2 = _closure1_slot14;
                    var1 = var2.isInChannel;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var8.bind(var10)(var6, var5);
                var8 = !var5;
                if (!var8) {
                    _fun68307_ip = 176;
                    continue _fun68307
                }
            case 173:
                var8 = var3;
            case 176:
                if (var8) {
                    _fun68307_ip = 182;
                    continue _fun68307
                }
            case 179:
                var8 = var2;
            case 182:
                var5 = _closure1_slot4;
                var6 = var5.useCallback;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var1
                    _fun68309: for (var _fun68309_ip = 0;;) switch (_fun68309_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 65;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.open;
                            var1 = {};
                            var6 = _closure2_slot2;
                            var11 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var9 = 24;
                            var8 = var7[var9];
                            var8 = var11.bind(var0)(var8);
                            var10 = var8.intl;
                            var8 = var10.string;
                            var7 = var7[var9];
                            var7 = var11.bind(var0)(var7);
                            var7 = var7.t;
                            if (var6) {
                                _fun68309_ip = 100;
                                continue _fun68309
                            }
                        case 87:
                            var6 = var7.rZfiNq;
                            var6 = var8.bind(var10)(var6);
                            _fun68309_ip = 111;
                            continue _fun68309;
                        case 100:
                            var7 = var7.rimHDW;
                            var6 = var8.bind(var10)(var7);
                        case 111:
                            var1.key = var6;
                            var4 = _closure2_slot2;
                            var8 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var6 = var5[var9];
                            var6 = var8.bind(var0)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var5 = var5[var9];
                            var5 = var8.bind(var0)(var5);
                            var5 = var5.t;
                            if (var4) {
                                _fun68309_ip = 176;
                                continue _fun68309
                            }
                        case 163:
                            var4 = var5.rZfiNq;
                            var4 = var6.bind(var7)(var4);
                            _fun68309_ip = 187;
                            continue _fun68309;
                        case 176:
                            var5 = var5.rimHDW;
                            var4 = var6.bind(var7)(var5);
                        case 187:
                            var1.content = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var6 = var6.bind(var5)(var2, var3);
                var3 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 66;
                var2 = var10[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.useOnConnectToConsole;
                var9 = var2.bind(var3)(var9, var11);
                _closure2_slot3 = var9;
                var3 = var5.useCallback;
                var2 = new Array(2);
                var2[0] = var9;
                var2[1] = var7;
                var1 = function() { // Environment: var1
                    _fun68310: for (var _fun68310_ip = 0;;) switch (_fun68310_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var0 = undefined;
                            var2 = var2.bind(var0)();
                            var3 = _closure2_slot1;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun68310_ip = 31;
                                continue _fun68310
                            }
                        case 23:
                            var1 = _closure2_slot1;
                            var1 = var1.bind(var0)();
                        case 31:
                            return var0;
                    }
                };
                var9 = var3.bind(var5)(var1, var2);
                var2 = var11.type;
                var1 = _closure1_slot17;
                var1 = var1.XBOX;
                if (!(var2 !== var1)) {
                    _fun68307_ip = 482;
                    continue _fun68307
                }
            case 300:
                var1 = _closure1_slot17;
                var1 = var1.PLAYSTATION;
                if (!(var2 !== var1)) {
                    _fun68307_ip = 406;
                    continue _fun68307
                }
            case 314:
                var1 = _closure1_slot17;
                var1 = var1.PLAYSTATION_STAGING;
                var10 = undefined;
                if (!(var2 === var1)) {
                    _fun68307_ip = 404;
                    continue _fun68307
                }
            case 330:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 24;
                var3 = var7[var1];
                var3 = var2.bind(var4)(var3);
                var5 = var3.intl;
                var3 = var5.string;
                var1 = var7[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.t;
                if (var0) {
                    _fun68307_ip = 390;
                    continue _fun68307
                }
            case 377:
                var1 = var2["bhdB9+"];
                var1 = var3.bind(var5)(var1);
                _fun68307_ip = 401;
                continue _fun68307;
            case 390:
                var2 = var2.BDiXtV;
                var1 = var3.bind(var5)(var2);
            case 401:
                var10 = var1;
            case 404:
                _fun68307_ip = 480;
                continue _fun68307;
            case 406:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 24;
                var3 = var7[var1];
                var3 = var2.bind(var4)(var3);
                var5 = var3.intl;
                var3 = var5.string;
                var1 = var7[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.t;
                if (var0) {
                    _fun68307_ip = 466;
                    continue _fun68307
                }
            case 453:
                var1 = var2.QxEYDj;
                var1 = var3.bind(var5)(var1);
                _fun68307_ip = 477;
                continue _fun68307;
            case 466:
                var2 = var2.vzfxmY;
                var1 = var3.bind(var5)(var2);
            case 477:
                var10 = var1;
            case 480:
                _fun68307_ip = 556;
                continue _fun68307;
            case 482:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 24;
                var2 = var7[var1];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var7[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                if (var0) {
                    _fun68307_ip = 542;
                    continue _fun68307
                }
            case 529:
                var0 = var1.E8euSk;
                var0 = var2.bind(var3)(var0);
                _fun68307_ip = 553;
                continue _fun68307;
            case 542:
                var1 = var1["qVE/VF"];
                var0 = var2.bind(var3)(var1);
            case 553:
                var10 = var0;
            case 556:
                var0 = null;
                var1 = var0 == var10;
                if (var1) {
                    _fun68307_ip = 660;
                    continue _fun68307
                }
            case 565:
                var3 = _closure1_slot20;
                var2 = _closure1_slot6;
                var1 = {};
                var5 = undefined;
                if (!var8) {
                    _fun68307_ip = 583;
                    continue _fun68307
                }
            case 580:
                var5 = var6;
            case 583:
                var1.onPress = var5;
                var7 = _closure1_slot20;
                var6 = _closure1_slot25;
                var5 = {};
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                var12 = 67;
                var12 = var14[var12];
                var12 = var13.bind(var4)(var12);
                var11 = var11.type;
                var11 = var12.bind(var4)(var11);
                var5.iconSource = var11;
                var5.label = var10;
                var5.onPress = var9;
                var5.disabled = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 660:
                return var0;
        }
    };
    var2.GameConsoleAccountItem = var3;
    var1 = function arg0() {
        _fun68311: for (var _fun68311_ip = 0;;) switch (_fun68311_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.disabled;
                var3 = undefined;
                if (!(var6 === var3)) {
                    _fun68311_ip = 18;
                    continue _fun68311
                }
            case 16:
                var6 = false;
            case 18:
                var0 = var0.channelId;
                var _closure2_slot0 = var0;
                var _closure2_slot1 = var3;
                var7 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 68;
                var0 = var9[var0];
                var0 = var7.bind(var3)(var0);
                var0 = var0.bind(var3)();
                _closure2_slot1 = var0;
                var2 = _closure1_slot20;
                var1 = _closure1_slot25;
                var0 = {};
                var0.disabled = var6;
                var6 = 69;
                var6 = var9[var6];
                var6 = var7.bind(var3)(var6);
                var0.iconSource = var6;
                var8 = _closure1_slot0;
                var5 = 24;
                var6 = var9[var5];
                var6 = var8.bind(var3)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.PlwgdU;
                var5 = var6.bind(var7)(var5);
                var0.label = var5;
                var4 = function() {
                    _fun68312: for (var _fun68312_ip = 0;;) switch (_fun68312_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun68312_ip = 58;
                                continue _fun68312
                            }
                        case 13:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 70;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.handoffRemote;
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var2.bind(var3)(var1, var0);
                        case 58:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.onPress = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.TransferCallButton = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1371, 3948, 3197, 3714, 1216, 3476, 3521, 7898, 660, 8505, 3510, 33, 1297, 671, 4086, 8506, 8507, 5378, 566, 44, 8211, 1234, 8474, 478, 8205, 8463, 8229, 8458, 3212, 1358, 5612, 1355, 5720, 8508, 8592, 3941, 8593, 8492, 8594, 8595, 8596, 8597, 8485, 7946, 8604, 8605, 7994, 6491, 806, 587, 670, 3278, 8606, 1307, 8606, 8608, 8609, 7887, 3936, 8599, 8610, 8445, 3148, 8295, 8311, 8294, 8611, 8612, 2]);