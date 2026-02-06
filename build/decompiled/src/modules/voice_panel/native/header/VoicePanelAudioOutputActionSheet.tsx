// modules/voice_panel/native/header/VoicePanelAudioOutputActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 11;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.hideActionSheet;
        var1 = _closure1_slot9;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = function() {
        _fun66661: for (var _fun66661_ip = 0;;) switch (_fun66661_ip) {
            case 0:
                var0 = _closure1_slot13;
                var4 = undefined;
                var7 = var0.bind(var4)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 12;
                var0 = var2[var0];
                var3 = var1.bind(var4)(var0);
                var2 = var3.useStateFromStoresObject;
                var0 = _closure1_slot6;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var8
                    var0 = {};
                    var3 = _closure1_slot6;
                    var2 = var3.getActiveAudioDevice;
                    var2 = var2.bind(var3)();
                    var0.activeDevice = var2;
                    var2 = _closure1_slot6;
                    var1 = var2.getAudioDevices;
                    var1 = var1.bind(var2)();
                    var0.availableDevices = var1;
                    return var0;
                };
                var0 = var2.bind(var3)(var1, var0);
                var9 = var0.activeDevice;
                var10 = var0.availableDevices;
                var _closure2_slot0 = var10;
                var3 = _closure1_slot3;
                var2 = var3.useCallback;
                var1 = function(arg0) { // Environment: var8
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 13;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.setAudioOutputDevice;
                    var2 = arg0;
                    var2 = var3.bind(var4)(var2);
                    var1 = _closure1_slot14;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var0 = new Array(0);
                var0 = var2.bind(var3)(var1, var0);
                var _closure2_slot1 = var0;
                var1 = var10.length;
                var0 = 0;
                var1 = var1 > var0;
                var0 = null;
                if (!var1) {
                    _fun66661_ip = 310;
                    continue _fun66661
                }
            case 131:
                var3 = _closure1_slot11;
                var6 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 14;
                var1 = var11[var1];
                var1 = var6.bind(var4)(var1);
                var2 = var1.VoicePanelFormSection;
                var1 = {};
                var7 = var7.sectionContainer;
                var1.style = var7;
                var7 = 15;
                var12 = var11[var7];
                var12 = var6.bind(var4)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var7 = var11[var7];
                var7 = var6.bind(var4)(var7);
                var7 = var7.t;
                var7 = var7.CxyS15;
                var7 = var12.bind(var13)(var7);
                var1.title = var7;
                var7 = _closure1_slot11;
                var5 = 16;
                var5 = var11[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.TableRadioGroup;
                var5 = {};
                var9 = var9.deviceId;
                var5.defaultValue = var9;
                var9 = function arg0() {
                    _fun66664: for (var _fun66664_ip = 0;;) switch (_fun66664_ip) {
                        case 0:
                            var0 = arg0;
                            var _closure3_slot0 = var0;
                            var3 = _closure2_slot0;
                            var2 = var3.find;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var1 = var0.deviceId;
                                var0 = _closure3_slot0;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var2 = var2.bind(var3)(var1);
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun66664_ip = 50;
                                continue _fun66664
                            }
                        case 39:
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                        case 50:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5.onChange = var9;
                var9 = var10.map;
                var8 = function(arg0) { // Environment: var8
                    _fun66666: for (var _fun66666_ip = 0;;) switch (_fun66666_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = _closure1_slot11;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 17;
                            var1 = var7[var1];
                            var3 = undefined;
                            var1 = var6.bind(var3)(var1);
                            var2 = var1.TableRadioRow;
                            var1 = {};
                            var8 = var0.deviceId;
                            var1.value = var8;
                            var10 = _closure1_slot11;
                            var5 = 18;
                            var5 = var7[var5];
                            var5 = var6.bind(var3)(var5);
                            var9 = var5.TableRowIcon;
                            var8 = {};
                            var5 = 19;
                            var11 = var7[var5];
                            var11 = var6.bind(var3)(var11);
                            var12 = var11.audioDeviceToIconMap;
                            var11 = var0.simpleDeviceType;
                            var11 = var12[var11];
                            var8.source = var11;
                            var8 = var10.bind(var3)(var9, var8);
                            var1.icon = var8;
                            var5 = var7[var5];
                            var6 = var6.bind(var3)(var5);
                            var5 = var6.getAudioDeviceToDisplayText;
                            var5 = var5.bind(var6)(var0);
                            var1.label = var5;
                            var5 = var0.deviceName;
                            var6 = null;
                            var7 = var6 == var5;
                            var6 = undefined;
                            if (var7) {
                                _fun66666_ip = 162;
                                continue _fun66666
                            }
                        case 157:
                            var6 = var5.length;
                        case 162:
                            var5 = 0;
                            var6 = var6 > var5;
                            var5 = undefined;
                            if (!var6) {
                                _fun66666_ip = 179;
                                continue _fun66666
                            }
                        case 173:
                            var5 = var0.deviceName;
                        case 179:
                            var1.subLabel = var5;
                            var0 = var0.deviceId;
                            var0 = var4.bind(var3)(var2, var1, var0);
                            return var0;
                    }
                };
                var8 = var9.bind(var10)(var8);
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 310:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0() {
        _fun66667: for (var _fun66667_ip = 0;;) switch (_fun66667_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.channel;
                var _closure2_slot0 = var0;
                var1 = _closure1_slot13;
                var4 = undefined;
                var7 = var1.bind(var4)();
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 20;
                var1 = var6[var1];
                var1 = var2.bind(var4)(var1);
                var10 = var1.bind(var4)();
                var _closure2_slot1 = var10;
                var1 = 21;
                var1 = var6[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.bind(var4)();
                var _closure2_slot2 = var1;
                var3 = _closure1_slot0;
                var1 = 12;
                var2 = var6[var1];
                var12 = var3.bind(var4)(var2);
                var11 = var12.useStateFromStores;
                var2 = _closure1_slot5;
                var9 = new Array(1);
                var9[0] = var2;
                var2 = function() { // Environment: var8
                    var1 = _closure1_slot5;
                    var0 = var1.getAwaitingRemoteSessionInfo;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var12 = var11.bind(var12)(var9, var2);
                var _closure2_slot3 = var12;
                var1 = var6[var1];
                var11 = var3.bind(var4)(var1);
                var9 = var11.useStateFromStores;
                var1 = _closure1_slot8;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var8
                    _fun66669: for (var _fun66669_ip = 0;;) switch (_fun66669_ip) {
                        case 0:
                            var2 = _closure1_slot8;
                            var1 = var2.getSessionById;
                            var3 = _closure2_slot2;
                            var0 = null;
                            var5 = var0 == var3;
                            var3 = undefined;
                            if (var5) {
                                _fun66669_ip = 41;
                                continue _fun66669
                            }
                        case 31:
                            var4 = _closure2_slot2;
                            var3 = var4.sessionId;
                        case 41:
                            var4 = var0 != var3;
                            var0 = '';
                            if (!var4) {
                                _fun66669_ip = 55;
                                continue _fun66669
                            }
                        case 52:
                            var0 = var3;
                        case 55:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var1 = var9.bind(var11)(var2, var1);
                var _closure2_slot4 = var1;
                var11 = _closure1_slot3;
                var9 = var11.useMemo;
                var2 = new Array(2);
                var2[0] = var12;
                var2[1] = var1;
                var1 = function() { // Environment: var8
                    _fun66670: for (var _fun66670_ip = 0;;) switch (_fun66670_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var0 = null;
                            var2 = var0 == var1;
                            var1 = undefined;
                            if (var2) {
                                _fun66670_ip = 27;
                                continue _fun66670
                            }
                        case 18:
                            var2 = _closure2_slot3;
                            var1 = var2.type;
                        case 27:
                            if (!(var0 == var1)) {
                                _fun66670_ip = 72;
                                continue _fun66670
                            }
                        case 31:
                            var2 = _closure2_slot4;
                            var4 = var0 == var2;
                            var2 = undefined;
                            if (var4) {
                                _fun66670_ip = 69;
                                continue _fun66670
                            }
                        case 44:
                            var3 = _closure2_slot4;
                            var3 = var3.clientInfo;
                            var4 = var0 == var3;
                            var2 = undefined;
                            if (var4) {
                                _fun66670_ip = 69;
                                continue _fun66670
                            }
                        case 63:
                            var2 = var3.os;
                        case 69:
                            var1 = var2;
                        case 72:
                            var2 = var0 != var1;
                            var0 = '';
                            if (!var2) {
                                _fun66670_ip = 86;
                                continue _fun66670
                            }
                        case 83:
                            var0 = var1;
                        case 86:
                            return var0;
                    }
                };
                var11 = var9.bind(var11)(var1, var2);
                var9 = _closure1_slot3;
                var2 = var9.useCallback;
                var1 = new Array(2);
                var1[0] = var10;
                var1[1] = var0;
                var0 = function(arg0) { // Environment: var8
                    _fun66671: for (var _fun66671_ip = 0;;) switch (_fun66671_ip) {
                        case 0:
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var3 = _closure2_slot1;
                            var1 = var3.find;
                            var0 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var1 = var0.type;
                                var0 = _closure3_slot0;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var5 = var1.bind(var3)(var0);
                            var0 = null;
                            if (!(var0 == var5)) {
                                _fun66671_ip = 54;
                                continue _fun66671
                            }
                        case 39:
                            var1 = _closure1_slot14;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                            _fun66671_ip = 103;
                            continue _fun66671;
                        case 54:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 22;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.onConnectToConsole;
                            var2 = _closure2_slot0;
                            var2 = var3.bind(var4)(var2, var5);
                            var0 = _closure1_slot14;
                            var0 = var0.bind(var1)();
                        case 103:
                            var0 = undefined;
                            return var0;
                    }
                };
                var9 = var2.bind(var9)(var0, var1);
                var0 = 23;
                var0 = var6[var0];
                var2 = var3.bind(var4)(var0);
                var1 = var2.UNSAFE_useIsDismissibleContentDismissed;
                var0 = 24;
                var0 = var6[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.DismissibleContent;
                var0 = var0.DONUT_MOBILE_NUX;
                var0 = var1.bind(var2)(var0);
                var0 = !var0;
                var _closure2_slot5 = var0;
                var3 = _closure1_slot3;
                var2 = var3.useEffect;
                var1 = new Array(2);
                var1[0] = var10;
                var1[1] = var0;
                var0 = function() { // Environment: var8
                    _fun66673: for (var _fun66673_ip = 0;;) switch (_fun66673_ip) {
                        case 0:
                            var0 = _closure2_slot5;
                            if (!var0) {
                                _fun66673_ip = 25;
                                continue _fun66673
                            }
                        case 10:
                            var1 = _closure2_slot1;
                            var2 = var1.length;
                            var1 = 0;
                            var0 = var2 > var1;
                        case 25:
                            if (!var0) {
                                _fun66673_ip = 88;
                                continue _fun66673
                            }
                        case 28:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var0 = 23;
                            var0 = var5[var0];
                            var3 = undefined;
                            var2 = var4.bind(var3)(var0);
                            var1 = var2.UNSAFE_markDismissibleContentAsDismissed;
                            var0 = 24;
                            var0 = var5[var0];
                            var0 = var4.bind(var3)(var0);
                            var0 = var0.DismissibleContent;
                            var0 = var0.DONUT_MOBILE_NUX;
                            var0 = var1.bind(var2)(var0);
                        case 88:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                var1 = var10.length;
                var0 = 0;
                var1 = var1 > var0;
                var0 = null;
                if (!var1) {
                    _fun66667_ip = 509;
                    continue _fun66667
                }
            case 343:
                var3 = _closure1_slot11;
                var6 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 14;
                var1 = var12[var1];
                var1 = var6.bind(var4)(var1);
                var2 = var1.VoicePanelFormSection;
                var1 = {};
                var13 = 15;
                var14 = var12[var13];
                var14 = var6.bind(var4)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var12[var13];
                var13 = var6.bind(var4)(var13);
                var13 = var13.t;
                var13 = var13.q22XnQ;
                var13 = var14.bind(var15)(var13);
                var1.title = var13;
                var7 = var7.sectionContainer;
                var1.style = var7;
                var7 = _closure1_slot11;
                var5 = 16;
                var5 = var12[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.TableRadioGroup;
                var5 = {};
                var5.defaultValue = var11;
                var5.onChange = var9;
                var9 = var10.map;
                var8 = function(arg0) { // Environment: var8
                    _fun66674: for (var _fun66674_ip = 0;;) switch (_fun66674_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = var1.type;
                            var0 = _closure1_slot10;
                            var0 = var0.XBOX;
                            if (!(var0 !== var2)) {
                                _fun66674_ip = 120;
                                continue _fun66674
                            }
                        case 25:
                            var0 = _closure1_slot10;
                            var0 = var0.PLAYSTATION;
                            var6 = null;
                            if (!(var0 === var2)) {
                                _fun66674_ip = 194;
                                continue _fun66674
                            }
                        case 44:
                            var0 = {};
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var2 = 15;
                            var3 = var8[var2];
                            var5 = undefined;
                            var3 = var7.bind(var5)(var3);
                            var4 = var3.intl;
                            var3 = var4.string;
                            var2 = var8[var2];
                            var2 = var7.bind(var5)(var2);
                            var2 = var2.t;
                            var2 = var2.fFl4jo;
                            var2 = var3.bind(var4)(var2);
                            var0.label = var2;
                            var2 = 'playstation';
                            var0.variant = var2;
                            var6 = var0;
                            _fun66674_ip = 194;
                            continue _fun66674;
                        case 120:
                            var0 = {};
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var2 = 15;
                            var3 = var8[var2];
                            var5 = undefined;
                            var3 = var7.bind(var5)(var3);
                            var4 = var3.intl;
                            var3 = var4.string;
                            var2 = var8[var2];
                            var2 = var7.bind(var5)(var2);
                            var2 = var2.t;
                            var2 = var2.Nfvo72;
                            var2 = var3.bind(var4)(var2);
                            var0.label = var2;
                            var2 = 'xbox';
                            var0.variant = var2;
                            var6 = var0;
                        case 194:
                            var0 = null;
                            var0 = var0 != var6;
                            if (!var0) {
                                _fun66674_ip = 343;
                                continue _fun66674
                            }
                        case 206:
                            var5 = _closure1_slot11;
                            var8 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var2 = 17;
                            var2 = var12[var2];
                            var4 = undefined;
                            var2 = var8.bind(var4)(var2);
                            var3 = var2.TableRadioRow;
                            var2 = {};
                            var9 = _closure1_slot11;
                            var7 = 18;
                            var7 = var12[var7];
                            var7 = var8.bind(var4)(var7);
                            var8 = var7.TableRowIcon;
                            var7 = {};
                            var11 = _closure1_slot1;
                            var10 = 25;
                            var10 = var12[var10];
                            var11 = var11.bind(var4)(var10);
                            var10 = var1.type;
                            var10 = var11.bind(var4)(var10);
                            var7.source = var10;
                            var10 = var6.variant;
                            var7.variant = var10;
                            var7 = var9.bind(var4)(var8, var7);
                            var2.icon = var7;
                            var6 = var6.label;
                            var2.label = var6;
                            var6 = var1.type;
                            var2.value = var6;
                            var1 = var1.type;
                            var0 = var5.bind(var4)(var3, var2, var1);
                        case 343:
                            return var0;
                    }
                };
                var8 = var9.bind(var10)(var8);
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 509:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
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
    var3 = var3.ScrollView;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.VOICE_PANEL_AUDIO_OUTPUT_ACTION_SHEET_KEY;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PlatformTypes;
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot11 = var7;
    var3 = var3.jsxs;
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'marginTop': 0,
        'marginBottom': 24
    };
    var3.sectionContainer = var9;
    var9 = {
        'padding': 6,
        'width': 32,
        'height': 32,
        'borderRadius': null,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var10 = 10;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.round;
    var9.borderRadius = var10;
    var3.deviceIcon = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot13 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun66675: for (var _fun66675_ip = 0;;) switch (_fun66675_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.channelId;
                var _closure2_slot0 = var2;
                var13 = var1.isConnectedToVoiceChannel;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 12;
                var1 = var3[var1];
                var4 = undefined;
                var3 = var2.bind(var4)(var1);
                var2 = var3.useStateFromStores;
                var5 = _closure1_slot7;
                var1 = new Array(1);
                var1[0] = var5;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot7;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var15 = var2.bind(var3)(var1, var0);
                var0 = null;
                var1 = var0 == var15;
                if (var1) {
                    _fun66675_ip = 319;
                    continue _fun66675
                }
            case 87:
                var3 = _closure1_slot11;
                var14 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 26;
                var1 = var11[var1];
                var1 = var14.bind(var4)(var1);
                var2 = var1.BottomSheet;
                var1 = {};
                var7 = _closure1_slot11;
                var5 = 27;
                var5 = var11[var5];
                var5 = var14.bind(var4)(var5);
                var6 = var5.BottomSheetTitleHeader;
                var5 = {};
                var8 = 15;
                var9 = var11[var8];
                var9 = var14.bind(var4)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var11[var8];
                var8 = var14.bind(var4)(var8);
                var8 = var8.t;
                var8 = var8.iwxPM3;
                var8 = var9.bind(var10)(var8);
                var5.title = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.header = var5;
                var7 = _closure1_slot11;
                var6 = _closure1_slot4;
                var5 = {};
                var10 = _closure1_slot12;
                var9 = _closure1_slot1;
                var8 = 28;
                var8 = var11[var8];
                var9 = var9.bind(var4)(var8);
                var8 = {};
                if (!var13) {
                    _fun66675_ip = 257;
                    continue _fun66675
                }
            case 241:
                var16 = _closure1_slot11;
                var14 = _closure1_slot15;
                var11 = {};
                var13 = var16.bind(var4)(var14, var11);
            case 257:
                var11 = new Array(2);
                var11[0] = var13;
                var14 = _closure1_slot11;
                var13 = _closure1_slot16;
                var12 = {};
                var12.channel = var15;
                var12 = var14.bind(var4)(var13, var12);
                var11[1] = var12;
                var8.children = var11;
                var8 = var10.bind(var4)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 319:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 29;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/header/VoicePanelAudioOutputActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3521, 8231, 1372, 3522, 8255, 660, 33, 1297, 671, 3280, 632, 8257, 8258, 1234, 5427, 5426, 4908, 8230, 8318, 8319, 8320, 3214, 1358, 8336, 4934, 5214, 6481, 2]);