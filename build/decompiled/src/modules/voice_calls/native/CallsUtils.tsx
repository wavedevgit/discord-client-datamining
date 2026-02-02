// modules/voice_calls/native/CallsUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun66191: for (var _fun66191_ip = 0;;) switch (_fun66191_ip) {
        case 0:
            var7 = require;
            var9 = metroImportDefault;
            var4 = metroImportAll;
            var2 = exports;
            var8 = dependencyMap;
            var _closure1_slot0 = var7;
            var _closure1_slot1 = var9;
            var _closure1_slot2 = var4;
            var _closure1_slot3 = var8;
            var0 = global;
            var6 = var0.Object;
            var5 = var6.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var5.bind(var6)(var2, var0, var3);
            var24 = 0;
            var3 = var8[var24];
            var0 = undefined;
            var3 = var9.bind(var0)(var3);
            var _closure1_slot4 = var3;
            var23 = 1;
            var3 = var8[var23];
            var3 = var9.bind(var0)(var3);
            var _closure1_slot5 = var3;
            var22 = 2;
            var3 = var8[var22];
            var3 = var4.bind(var0)(var3);
            var _closure1_slot6 = var3;
            var21 = 3;
            var3 = var8[var21];
            var3 = var7.bind(var0)(var3);
            var3 = var3.NativeModules;
            var _closure1_slot7 = var3;
            var20 = 4;
            var3 = var8[var20];
            var3 = var9.bind(var0)(var3);
            var _closure1_slot8 = var3;
            var19 = 5;
            var3 = var8[var19];
            var3 = var9.bind(var0)(var3);
            var _closure1_slot9 = var3;
            var18 = 6;
            var3 = var8[var18];
            var3 = var9.bind(var0)(var3);
            var _closure1_slot10 = var3;
            var17 = 7;
            var3 = var8[var17];
            var3 = var9.bind(var0)(var3);
            var _closure1_slot11 = var3;
            var16 = 8;
            var3 = var8[var16];
            var3 = var9.bind(var0)(var3);
            var _closure1_slot12 = var3;
            var15 = 9;
            var3 = var8[var15];
            var3 = var9.bind(var0)(var3);
            var _closure1_slot13 = var3;
            var14 = 10;
            var3 = var8[var14];
            var3 = var9.bind(var0)(var3);
            var _closure1_slot14 = var3;
            var3 = var8[var14];
            var3 = var7.bind(var0)(var3);
            var3 = var3.RouteTypes;
            var _closure1_slot15 = var3;
            var13 = 11;
            var3 = var8[var13];
            var3 = var7.bind(var0)(var3);
            var3 = var3.NativePermissionTypes;
            var _closure1_slot16 = var3;
            var3 = function() { // Environment: var1
                var3 = _closure1_slot5;
                var2 = undefined;
                var1 = function*(arg0) { // Environment: var0
                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                        _fun66194: for (var _fun66194_ip = 0;;) switch (_fun66194_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun66194_ip = 362;
                                    continue _fun66194
                                }
                            case 10:
                                var2 = _closure1_slot10;
                                var1 = var2.isVideoEnabled;
                                var2 = var1.bind(var2)();
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot3;
                                var1 = 12;
                                var3 = var3[var1];
                                var1 = undefined;
                                var6 = var4.bind(var1)(var3);
                                var4 = var6.getChannelVideoLimit;
                                var3 = arg0;
                                var3 = var4.bind(var6)(var3);
                                var4 = var3.reachedLimit;
                                var10 = var3.limit;
                                var3 = _closure1_slot1;
                                var9 = _closure1_slot3;
                                if (var4) {
                                    _fun66194_ip = 211;
                                    continue _fun66194
                                }
                            case 88:
                                if (var2) {
                                    _fun66194_ip = 181;
                                    continue _fun66194
                                }
                            case 91:
                                var2 = 15;
                                var2 = var9[var2];
                                var6 = var3.bind(var1)(var2);
                                var4 = var6.requestPermission;
                                var2 = _closure1_slot16;
                                var2 = var2.CAMERA;
                                var2 = var4.bind(var6)(var2);
                                SaveGenerator(address = 128);
                            case 126:
                                return var2;
                            case 128:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                                if (var4) {
                                    _fun66194_ip = 178;
                                    continue _fun66194
                                }
                            case 134:
                                if (!var2) {
                                    _fun66194_ip = 359;
                                    continue _fun66194
                                }
                            case 140:
                                var6 = _closure1_slot1;
                                var7 = _closure1_slot3;
                                var4 = 16;
                                var4 = var7[var4];
                                var7 = var6.bind(var1)(var4);
                                var6 = var7.setVideoEnabled;
                                var4 = true;
                                var4 = var6.bind(var7)(var4);
                                _fun66194_ip = 359;
                                continue _fun66194;
                            case 178:
                                return var2;
                            case 181:
                                var2 = 16;
                                var2 = var9[var2];
                                var6 = var3.bind(var1)(var2);
                                var4 = var6.setVideoEnabled;
                                var2 = false;
                                var2 = var4.bind(var6)(var2);
                                _fun66194_ip = 359;
                                continue _fun66194;
                            case 211:
                                var2 = 13;
                                var2 = var9[var2];
                                var4 = var3.bind(var1)(var2);
                                var3 = var4.show;
                                var2 = {};
                                var6 = _closure1_slot0;
                                var5 = 14;
                                var7 = var9[var5];
                                var7 = var6.bind(var1)(var7);
                                var11 = var7.intl;
                                var8 = var11.string;
                                var7 = var9[var5];
                                var7 = var6.bind(var1)(var7);
                                var7 = var7.t;
                                var7 = var7["3ffmE+"];
                                var7 = var8.bind(var11)(var7);
                                var2.title = var7;
                                var7 = var9[var5];
                                var7 = var6.bind(var1)(var7);
                                var8 = var7.intl;
                                var7 = var8.formatToPlainString;
                                var5 = var9[var5];
                                var5 = var6.bind(var1)(var5);
                                var5 = var5.t;
                                var6 = var5.x9mtl4;
                                var5 = {};
                                var9 = var10.toString;
                                var9 = var9.bind(var10)();
                                var5.limit = var9;
                                var5 = var7.bind(var8)(var6, var5);
                                var2.body = var5;
                                var2 = var3.bind(var4)(var2);
                            case 359:
                                return var1;
                            case 362:
                                return var0;
                        }
                    };
                    return var0;
                };
                var1 = var3.bind(var2)(var1);
                var _closure2_slot0 = var1;
                var0 = function() { // Environment: var0
                    var0 = undefined;
                    var3 = _closure2_slot0;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                return var0;
            };
            var5 = var3.bind(var0)();
            var12 = 21;
            var3 = var8[var12];
            var10 = var9.bind(var0)(var3);
            var6 = var10.debounce;
            var4 = function(arg0) { // Environment: var1
                _fun66196: for (var _fun66196_ip = 0;;) switch (_fun66196_ip) {
                    case 0:
                        var0 = _closure1_slot7;
                        var2 = var0.AudioRoutePicker;
                        var0 = null;
                        if (!(var0 != var2)) {
                            _fun66196_ip = 35;
                            continue _fun66196
                        }
                    case 19:
                        var1 = var2.handleAudioRoute;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                    case 35:
                        var0 = undefined;
                        return var0;
                }
            };
            var3 = 250;
            var3 = var6.bind(var10)(var4, var3);
            var _closure1_slot17 = var3;
            var3 = var8[var12];
            var6 = var9.bind(var0)(var3);
            var4 = var6.debounce;
            var3 = function(arg0) { // Environment: var1
                var1 = arg0;
                var0 = undefined;
                var1 = var1.bind(var0)();
                return var0;
            };
            var3 = var4.bind(var6)(var3, var23);
            var _closure1_slot18 = var3;
            var4 = {};
            var11 = 22;
            var3 = var8[var11];
            var3 = var9.bind(var0)(var3);
            var4.EARPIECE = var3;
            var10 = 23;
            var3 = var8[var10];
            var3 = var9.bind(var0)(var3);
            var4.BLUETOOTH_HEADSET = var3;
            var6 = 24;
            var3 = var8[var6];
            var3 = var9.bind(var0)(var3);
            var4.WIRED_HEADSET = var3;
            var3 = var8[var6];
            var3 = var9.bind(var0)(var3);
            var4.SPEAKERPHONE = var3;
            var3 = var8[var6];
            var3 = var9.bind(var0)(var3);
            var4.INVALID = var3;
            var _closure1_slot19 = var4;
            var9 = {};
            var9.TYPE_UNKNOWN = var24;
            var3 = 'TYPE_UNKNOWN';
            var9[var24] = var3;
            var9.TYPE_BUILTIN_EARPIECE = var23;
            var3 = 'TYPE_BUILTIN_EARPIECE';
            var9[var23] = var3;
            var9.TYPE_BUILTIN_SPEAKER = var22;
            var3 = 'TYPE_BUILTIN_SPEAKER';
            var9[var22] = var3;
            var9.TYPE_WIRED_HEADSET = var21;
            var3 = 'TYPE_WIRED_HEADSET';
            var9[var21] = var3;
            var9.TYPE_WIRED_HEADPHONES = var20;
            var3 = 'TYPE_WIRED_HEADPHONES';
            var9[var20] = var3;
            var9.TYPE_LINE_ANALOG = var19;
            var3 = 'TYPE_LINE_ANALOG';
            var9[var19] = var3;
            var9.TYPE_LINE_DIGITAL = var18;
            var3 = 'TYPE_LINE_DIGITAL';
            var9[var18] = var3;
            var9.TYPE_BLUETOOTH_SCO = var17;
            var3 = 'TYPE_BLUETOOTH_SCO';
            var9[var17] = var3;
            var9.TYPE_BLUETOOTH_A2DP = var16;
            var3 = 'TYPE_BLUETOOTH_A2DP';
            var9[var16] = var3;
            var9.TYPE_HDMI = var15;
            var3 = 'TYPE_HDMI';
            var9[var15] = var3;
            var9.TYPE_HDMI_ARC = var14;
            var3 = 'TYPE_HDMI_ARC';
            var9[var14] = var3;
            var9.TYPE_USB_DEVICE = var13;
            var3 = 'TYPE_USB_DEVICE';
            var9[var13] = var3;
            var13 = 12;
            var9.TYPE_USB_ACCESSORY = var13;
            var3 = 'TYPE_USB_ACCESSORY';
            var9[var13] = var3;
            var13 = 13;
            var9.TYPE_DOCK = var13;
            var3 = 'TYPE_DOCK';
            var9[var13] = var3;
            var13 = 14;
            var9.TYPE_FM = var13;
            var3 = 'TYPE_FM';
            var9[var13] = var3;
            var13 = 15;
            var9.TYPE_BUILTIN_MIC = var13;
            var3 = 'TYPE_BUILTIN_MIC';
            var9[var13] = var3;
            var13 = 16;
            var9.TYPE_FM_TUNER = var13;
            var3 = 'TYPE_FM_TUNER';
            var9[var13] = var3;
            var13 = 17;
            var9.TYPE_TV_TUNER = var13;
            var3 = 'TYPE_TV_TUNER';
            var9[var13] = var3;
            var13 = 18;
            var9.TYPE_TELEPHONY = var13;
            var3 = 'TYPE_TELEPHONY';
            var9[var13] = var3;
            var13 = 19;
            var9.TYPE_AUX_LINE = var13;
            var3 = 'TYPE_AUX_LINE';
            var9[var13] = var3;
            var13 = 20;
            var9.TYPE_IP = var13;
            var3 = 'TYPE_IP';
            var9[var13] = var3;
            var9.TYPE_BUS = var12;
            var3 = 'TYPE_BUS';
            var9[var12] = var3;
            var9.TYPE_USB_HEADSET = var11;
            var3 = 'TYPE_USB_HEADSET';
            var9[var11] = var3;
            var9.TYPE_HEARING_AID = var10;
            var3 = 'TYPE_HEARING_AID';
            var9[var10] = var3;
            var9.TYPE_BUILTIN_SPEAKER_SAFE = var6;
            var3 = 'TYPE_BUILTIN_SPEAKER_SAFE';
            var9[var6] = var3;
            var3 = 25;
            var9.TYPE_REMOTE_SUBMIX = var3;
            var6 = 'TYPE_REMOTE_SUBMIX';
            var9[var3] = var6;
            var10 = 26;
            var9.TYPE_BLE_HEADSET = var10;
            var6 = 'TYPE_BLE_HEADSET';
            var9[var10] = var6;
            var10 = 27;
            var9.TYPE_BLE_SPEAKER = var10;
            var6 = 'TYPE_BLE_SPEAKER';
            var9[var10] = var6;
            var10 = 28;
            var9.TYPE_ECHO_REFERENCE = var10;
            var6 = 'TYPE_ECHO_REFERENCE';
            var9[var10] = var6;
            var10 = 29;
            var9.TYPE_HDMI_EARC = var10;
            var6 = 'TYPE_HDMI_EARC';
            var9[var10] = var6;
            var6 = 30;
            var9.TYPE_BLE_BROADCAST = var6;
            var10 = 'TYPE_BLE_BROADCAST';
            var9[var6] = var10;
            var11 = 31;
            var9.TYPE_DOCK_ANALOG = var11;
            var10 = 'TYPE_DOCK_ANALOG';
            var9[var11] = var10;
            var _closure1_slot20 = var9;
            var3 = var8[var3];
            var9 = var7.bind(var0)(var3);
            var3 = var9.isAndroid;
            var3 = var3.bind(var9)();
            if (var3) {
                _fun66191_ip = 1112;
                continue _fun66191
            }
        case 1103:
            var3 = function() { // Environment: var1
                _fun66200: for (var _fun66200_ip = 0;;) switch (_fun66200_ip) {
                    case 0:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var0 = 26;
                        var0 = var3[var0];
                        var4 = undefined;
                        var6 = var2.bind(var4)(var0);
                        var3 = var6.useStateFromStoresObject;
                        var0 = _closure1_slot9;
                        var2 = new Array(6);
                        var2[0] = var0;
                        var0 = _closure1_slot11;
                        var2[1] = var0;
                        var0 = _closure1_slot8;
                        var2[2] = var0;
                        var0 = _closure1_slot12;
                        var2[3] = var0;
                        var0 = _closure1_slot10;
                        var2[4] = var0;
                        var0 = _closure1_slot14;
                        var2[5] = var0;
                        var0 = function() { // Environment: var1
                            _fun66201: for (var _fun66201_ip = 0;;) switch (_fun66201_ip) {
                                case 0:
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot3;
                                    var1 = 29;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var7 = var3.bind(var1)(var2);
                                    var6 = var7.isVideoMode;
                                    var12 = _closure1_slot9;
                                    var11 = _closure1_slot11;
                                    var10 = _closure1_slot8;
                                    var9 = _closure1_slot12;
                                    var8 = _closure1_slot10;
                                    var13 = var7;
                                    var2 = var13[var6](var12, var11, var10, var9, var8, var7);
                                    var3 = _closure1_slot14;
                                    var1 = var3.getCurrentRouteType;
                                    var1 = var1.bind(var3)();
                                    var0 = _closure1_slot15;
                                    var3 = var0.SPEAKER;
                                    var3 = var1 === var3;
                                    var0 = var0.BLUETOOTH;
                                    var1 = var1 === var0;
                                    var0 = {};
                                    if (var3) {
                                        _fun66201_ip = 104;
                                        continue _fun66201
                                    }
                                case 101:
                                    var3 = var1;
                                case 104:
                                    if (var3) {
                                        _fun66201_ip = 110;
                                        continue _fun66201
                                    }
                                case 107:
                                    var3 = var2;
                                case 110:
                                    var0.isEnabled = var3;
                                    var0.isVideoMode = var2;
                                    var0.isBluetoothRoute = var1;
                                    return var0;
                            }
                        };
                        var0 = var3.bind(var6)(var2, var0);
                        var10 = var0.isEnabled;
                        var _closure2_slot0 = var10;
                        var9 = var0.isVideoMode;
                        var _closure2_slot1 = var9;
                        var0 = var0.isBluetoothRoute;
                        var8 = _closure1_slot6;
                        var2 = var8.useState;
                        var6 = var2.bind(var8)(var10);
                        var3 = _closure1_slot4;
                        var2 = 2;
                        var6 = var3.bind(var4)(var6, var2);
                        var2 = 0;
                        var3 = var6[var2];
                        var _closure2_slot2 = var3;
                        var2 = 1;
                        var2 = var6[var2];
                        var _closure2_slot3 = var2;
                        var7 = var8.useCallback;
                        var6 = new Array(2);
                        var6[0] = var3;
                        var6[1] = var9;
                        var2 = function() { // Environment: var1
                            _fun66202: for (var _fun66202_ip = 0;;) switch (_fun66202_ip) {
                                case 0:
                                    var2 = _closure1_slot14;
                                    var1 = var2.getMultipleRoutesAvailable;
                                    var1 = var1.bind(var2)();
                                    if (var1) {
                                        _fun66202_ip = 62;
                                        continue _fun66202
                                    }
                                case 20:
                                    var2 = _closure1_slot18;
                                    var1 = var2.cancel;
                                    var1 = var1.bind(var2)();
                                    var2 = _closure2_slot1;
                                    if (var2) {
                                        _fun66202_ip = 62;
                                        continue _fun66202
                                    }
                                case 44:
                                    var3 = _closure2_slot3;
                                    var1 = _closure2_slot2;
                                    var2 = !var1;
                                    var1 = undefined;
                                    var1 = var3.bind(var1)(var2);
                                case 62:
                                    var2 = _closure1_slot17;
                                    var0 = _closure2_slot2;
                                    var1 = !var0;
                                    var0 = undefined;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                            }
                        };
                        var2 = var7.bind(var8)(var2, var6);
                        var7 = var8.useEffect;
                        var6 = new Array(2);
                        var6[0] = var10;
                        var6[1] = var9;
                        var1 = function() { // Environment: var1
                            _fun66203: for (var _fun66203_ip = 0;;) switch (_fun66203_ip) {
                                case 0:
                                    var2 = _closure1_slot14;
                                    var1 = var2.getMultipleRoutesAvailable;
                                    var1 = var1.bind(var2)();
                                    if (var1) {
                                        _fun66203_ip = 52;
                                        continue _fun66203
                                    }
                                case 20:
                                    var1 = _closure2_slot1;
                                    if (var1) {
                                        _fun66203_ip = 52;
                                        continue _fun66203
                                    }
                                case 30:
                                    var2 = _closure1_slot18;
                                    var1 = undefined;
                                    var0 = function() { // Environment: var0
                                        var2 = _closure2_slot3;
                                        var1 = _closure2_slot0;
                                        var0 = undefined;
                                        var0 = var2.bind(var0)(var1);
                                        return var0;
                                    };
                                    var0 = var2.bind(var1)(var0);
                                    _fun66203_ip = 70;
                                    continue _fun66203;
                                case 52:
                                    var2 = _closure2_slot3;
                                    var1 = _closure2_slot0;
                                    var0 = undefined;
                                    var0 = var2.bind(var0)(var1);
                                case 70:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var1 = var7.bind(var8)(var1, var6);
                        var1 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        if (var0) {
                            _fun66200_ip = 252;
                            continue _fun66200
                        }
                    case 243:
                        var0 = 24;
                        var0 = var6[var0];
                        _fun66200_ip = 259;
                        continue _fun66200;
                    case 252:
                        var5 = 23;
                        var0 = var6[var5];
                    case 259:
                        var1 = var1.bind(var4)(var0);
                        var0 = {};
                        var0.isAudioRouteEnabled = var3;
                        var0.toggleAudio = var2;
                        var0.routeSource = var1;
                        return var0;
                }
            };
            _fun66191_ip = 1119;
            continue _fun66191;
        case 1112:
            var3 = function() { // Environment: var1
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 26;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.useStateFromStoresObject;
                var0 = _closure1_slot13;
                var2 = new Array(1);
                var2[0] = var0;
                var1 = function() { // Environment: var0
                    _fun66199: for (var _fun66199_ip = 0;;) switch (_fun66199_ip) {
                        case 0:
                            var1 = _closure1_slot13;
                            var0 = var1.getActiveAudioDevice;
                            var6 = var0.bind(var1)();
                            var0 = {};
                            var1 = true;
                            var0.isAudioRouteEnabled = var1;
                            var2 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var1 = 27;
                            var1 = var4[var1];
                            var5 = undefined;
                            var1 = var2.bind(var5)(var1);
                            var1 = var1.showAudioOutputSelector;
                            var0.toggleAudio = var1;
                            var2 = _closure1_slot19;
                            var4 = null;
                            var7 = var4 == var6;
                            var1 = undefined;
                            if (var7) {
                                _fun66199_ip = 80;
                                continue _fun66199
                            }
                        case 74:
                            var1 = var6.simpleDeviceType;
                        case 80:
                            if (!(var4 == var1)) {
                                _fun66199_ip = 116;
                                continue _fun66199
                            }
                        case 84:
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var3 = 28;
                            var3 = var6[var3];
                            var3 = var4.bind(var5)(var3);
                            var3 = var3.AudioDeviceType;
                            var1 = var3.INVALID;
                        case 116:
                            var1 = var2[var1];
                            var0.routeSource = var1;
                            return var0;
                    }
                };
                var0 = new Array(0);
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
            };
        case 1119:
            var6 = var8[var6];
            var8 = var7.bind(var0)(var6);
            var7 = var8.fileFinishedImporting;
            var6 = 'modules/voice_calls/native/CallsUtils.tsx';
            var6 = var7.bind(var8)(var6);
            var2.handleToggleVideo = var5;
            var5 = function() { // Environment: var1
                var2 = _closure1_slot1;
                var1 = _closure1_slot3;
                var0 = 16;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.toggleSelfDeaf;
                var1 = var1.bind(var2)();
                return var0;
            };
            var2.handleToggleSelfDeaf = var5;
            var5 = function() { // Environment: var1
                var2 = _closure1_slot1;
                var3 = _closure1_slot3;
                var0 = 15;
                var4 = var3[var0];
                var0 = undefined;
                var6 = var2.bind(var0)(var4);
                var5 = var6.requestPermission;
                var1 = _closure1_slot16;
                var4 = var1.AUDIO;
                var1 = {};
                var7 = true;
                var1.showAuthorizationError = var7;
                var1 = var5.bind(var6)(var4, var1);
                var1 = 16;
                var1 = var3[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.toggleSelfMute;
                var1 = var1.bind(var2)();
                return var0;
            };
            var2.handleToggleSelfMute = var5;
            var5 = function() { // Environment: var1
                var2 = _closure1_slot1;
                var8 = _closure1_slot3;
                var0 = 13;
                var1 = var8[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.show;
                var1 = {};
                var7 = _closure1_slot0;
                var4 = 14;
                var5 = var8[var4];
                var5 = var7.bind(var0)(var5);
                var9 = var5.intl;
                var6 = var9.string;
                var5 = var8[var4];
                var5 = var7.bind(var0)(var5);
                var5 = var5.t;
                var5 = var5.FJSZVM;
                var5 = var6.bind(var9)(var5);
                var1.title = var5;
                var5 = var8[var4];
                var5 = var7.bind(var0)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var8[var4];
                var4 = var7.bind(var0)(var4);
                var4 = var4.t;
                var4 = var4.etJjgW;
                var4 = var5.bind(var6)(var4);
                var1.body = var4;
                var4 = false;
                var1.hideActionSheet = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var2.showSuppressedAlert = var5;
            var5 = function() { // Environment: var1
                var2 = _closure1_slot1;
                var8 = _closure1_slot3;
                var0 = 13;
                var1 = var8[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.show;
                var1 = {};
                var7 = _closure1_slot0;
                var4 = 14;
                var5 = var8[var4];
                var5 = var7.bind(var0)(var5);
                var9 = var5.intl;
                var6 = var9.string;
                var5 = var8[var4];
                var5 = var7.bind(var0)(var5);
                var5 = var5.t;
                var5 = var5["+JQCa/"];
                var5 = var6.bind(var9)(var5);
                var1.title = var5;
                var5 = var8[var4];
                var5 = var7.bind(var0)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var8[var4];
                var4 = var7.bind(var0)(var4);
                var4 = var4.t;
                var4 = var4.hsNm7d;
                var4 = var5.bind(var6)(var4);
                var1.body = var4;
                var4 = false;
                var1.hideActionSheet = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var2.showServerMuteAlert = var5;
            var5 = function() { // Environment: var1
                var2 = _closure1_slot1;
                var8 = _closure1_slot3;
                var0 = 13;
                var1 = var8[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.show;
                var1 = {};
                var7 = _closure1_slot0;
                var4 = 14;
                var5 = var8[var4];
                var5 = var7.bind(var0)(var5);
                var9 = var5.intl;
                var6 = var9.string;
                var5 = var8[var4];
                var5 = var7.bind(var0)(var5);
                var5 = var5.t;
                var5 = var5.QZ7WSS;
                var5 = var6.bind(var9)(var5);
                var1.title = var5;
                var5 = var8[var4];
                var5 = var7.bind(var0)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var8[var4];
                var4 = var7.bind(var0)(var4);
                var4 = var4.t;
                var4 = var4.Tl9JpL;
                var4 = var5.bind(var6)(var4);
                var1.body = var4;
                var4 = false;
                var1.hideActionSheet = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var2.showServerDeafenAlert = var5;
            var5 = function() { // Environment: var1
                var2 = _closure1_slot1;
                var8 = _closure1_slot3;
                var0 = 13;
                var1 = var8[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.show;
                var1 = {};
                var7 = _closure1_slot0;
                var4 = 14;
                var5 = var8[var4];
                var5 = var7.bind(var0)(var5);
                var9 = var5.intl;
                var6 = var9.string;
                var5 = var8[var4];
                var5 = var7.bind(var0)(var5);
                var5 = var5.t;
                var5 = var5.OYzPcW;
                var5 = var6.bind(var9)(var5);
                var1.title = var5;
                var5 = var8[var4];
                var5 = var7.bind(var0)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var8[var4];
                var4 = var7.bind(var0)(var4);
                var4 = var4.t;
                var4 = var4.oBH7Y2;
                var4 = var5.bind(var6)(var4);
                var1.body = var4;
                var4 = false;
                var1.hideActionSheet = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var2.showCameraDisabledAlert = var5;
            var5 = function() { // Environment: var1
                var2 = _closure1_slot1;
                var8 = _closure1_slot3;
                var0 = 13;
                var1 = var8[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.show;
                var1 = {};
                var7 = _closure1_slot0;
                var4 = 14;
                var5 = var8[var4];
                var5 = var7.bind(var0)(var5);
                var9 = var5.intl;
                var6 = var9.string;
                var5 = var8[var4];
                var5 = var7.bind(var0)(var5);
                var5 = var5.t;
                var5 = var5["/x4knx"];
                var5 = var6.bind(var9)(var5);
                var1.title = var5;
                var5 = var8[var4];
                var5 = var7.bind(var0)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var8[var4];
                var4 = var7.bind(var0)(var4);
                var4 = var4.t;
                var4 = var4.PpfzUE;
                var4 = var5.bind(var6)(var4);
                var1.body = var4;
                var4 = false;
                var1.hideActionSheet = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var2.showScreenshareDisabledAlert = var5;
            var5 = function() { // Environment: var1
                _fun66212: for (var _fun66212_ip = 0;;) switch (_fun66212_ip) {
                    case 0:
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot3;
                        var9 = 14;
                        var1 = var11[var9];
                        var0 = undefined;
                        var1 = var10.bind(var0)(var1);
                        var4 = var1.intl;
                        var3 = var4.formatToPlainString;
                        var1 = var11[var9];
                        var1 = var10.bind(var0)(var1);
                        var1 = var1.t;
                        var2 = var1.ejOT95;
                        var1 = {};
                        var6 = 17;
                        var7 = var11[var6];
                        var8 = var10.bind(var0)(var7);
                        var7 = var8.getErrorInfo;
                        var6 = var11[var6];
                        var6 = var10.bind(var0)(var6);
                        var6 = var6.AVError;
                        var6 = var6.SCREENSHARE_OS_NOT_SUPPORTED;
                        var7 = var7.bind(var8)(var6);
                        var6 = null;
                        var8 = var6 == var7;
                        var6 = undefined;
                        if (var8) {
                            _fun66212_ip = 118;
                            continue _fun66212
                        }
                    case 112:
                        var6 = var7.errorCode;
                    case 118:
                        var1.errorCode = var6;
                        var8 = var3.bind(var4)(var2, var1);
                        var2 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var1 = 13;
                        var1 = var4[var1];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.show;
                        var1 = {};
                        var7 = _closure1_slot0;
                        var5 = var4[var9];
                        var5 = var7.bind(var0)(var5);
                        var10 = var5.intl;
                        var6 = var10.string;
                        var5 = var4[var9];
                        var5 = var7.bind(var0)(var5);
                        var5 = var5.t;
                        var5 = var5.oblMYa;
                        var5 = var6.bind(var10)(var5);
                        var1.title = var5;
                        var5 = var4[var9];
                        var5 = var7.bind(var0)(var5);
                        var6 = var5.intl;
                        var5 = var6.string;
                        var4 = var4[var9];
                        var4 = var7.bind(var0)(var4);
                        var4 = var4.t;
                        var4 = var4.Wnhd3q;
                        var7 = var5.bind(var6)(var4);
                        var4 = global;
                        var4 = var4.HermesInternal;
                        var6 = var4.concat;
                        var5 = '';
                        var4 = '\n\n';
                        var4 = var6.bind(var5)(var7, var4, var8);
                        var1.body = var4;
                        var4 = false;
                        var1.hideActionSheet = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                }
            };
            var2.showMinOSScreenshareRequirementAlert = var5;
            var5 = function() { // Environment: var1
                var2 = _closure1_slot1;
                var8 = _closure1_slot3;
                var0 = 13;
                var1 = var8[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.show;
                var1 = {};
                var7 = _closure1_slot0;
                var4 = 14;
                var5 = var8[var4];
                var5 = var7.bind(var0)(var5);
                var9 = var5.intl;
                var6 = var9.string;
                var5 = var8[var4];
                var5 = var7.bind(var0)(var5);
                var5 = var5.t;
                var5 = var5["1N0dxa"];
                var5 = var6.bind(var9)(var5);
                var1.title = var5;
                var5 = var8[var4];
                var5 = var7.bind(var0)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var8[var4];
                var4 = var7.bind(var0)(var4);
                var4 = var4.t;
                var4 = var4.qqDFVb;
                var4 = var5.bind(var6)(var4);
                var1.body = var4;
                var4 = false;
                var1.hideActionSheet = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var2.showTabletRequirementAlert = var5;
            var5 = function(arg0) { // Environment: var1
                var4 = _closure1_slot2;
                var3 = _closure1_slot3;
                var0 = 18;
                var2 = var3[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var2);
                var2 = var4.dismissGlobalKeyboard;
                var2 = var2.bind(var4)();
                var2 = _closure1_slot0;
                var1 = 19;
                var1 = var3[var1];
                var4 = var2.bind(var0)(var1);
                var3 = var4.dismissVoiceChannelScreens;
                var2 = arg0;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 20;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.selectVoiceChannel;
                    var1 = null;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = var3.bind(var4)(var2, var1);
                return var0;
            };
            var2.handleDisconnect = var5;
            var2.audioDeviceToIconMap = var4;
            var4 = function arg0() {
                _fun66216: for (var _fun66216_ip = 0;;) switch (_fun66216_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = {};
                        var8 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var6 = 14;
                        var4 = var3[var6];
                        var5 = undefined;
                        var4 = var8.bind(var5)(var4);
                        var9 = var4.intl;
                        var7 = var9.string;
                        var4 = var3[var6];
                        var4 = var8.bind(var5)(var4);
                        var4 = var4.t;
                        var4 = var4.Ouoi6E;
                        var4 = var7.bind(var9)(var4);
                        var2.EARPIECE = var4;
                        var4 = var3[var6];
                        var4 = var8.bind(var5)(var4);
                        var9 = var4.intl;
                        var7 = var9.string;
                        var4 = var3[var6];
                        var4 = var8.bind(var5)(var4);
                        var4 = var4.t;
                        var4 = var4.i6eV3z;
                        var4 = var7.bind(var9)(var4);
                        var2.BLUETOOTH_HEADSET = var4;
                        var4 = var3[var6];
                        var4 = var8.bind(var5)(var4);
                        var9 = var4.intl;
                        var7 = var9.string;
                        var4 = var3[var6];
                        var4 = var8.bind(var5)(var4);
                        var4 = var4.t;
                        var4 = var4.Dluojr;
                        var4 = var7.bind(var9)(var4);
                        var2.WIRED_HEADSET = var4;
                        var4 = var3[var6];
                        var4 = var8.bind(var5)(var4);
                        var9 = var4.intl;
                        var7 = var9.string;
                        var4 = var3[var6];
                        var4 = var8.bind(var5)(var4);
                        var4 = var4.t;
                        var4 = var4.snEhlu;
                        var4 = var7.bind(var9)(var4);
                        var2.SPEAKERPHONE = var4;
                        var4 = var3[var6];
                        var4 = var8.bind(var5)(var4);
                        var7 = var4.intl;
                        var4 = var7.string;
                        var3 = var3[var6];
                        var3 = var8.bind(var5)(var3);
                        var3 = var3.t;
                        var3 = var3.kCBL6t;
                        var3 = var4.bind(var7)(var3);
                        var2.INVALID = var3;
                        var4 = var0.deviceType;
                        var3 = _closure1_slot20;
                        var3 = var3.TYPE_BLE_HEADSET;
                        if (!(var4 !== var3)) {
                            _fun66216_ip = 308;
                            continue _fun66216
                        }
                    case 296:
                        var0 = var0.simpleDeviceType;
                        var0 = var2[var0];
                        _fun66216_ip = 362;
                        continue _fun66216;
                    case 308:
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var2 = var1[var6];
                        var2 = var4.bind(var5)(var2);
                        var3 = var2.intl;
                        var2 = var3.string;
                        var1 = var1[var6];
                        var1 = var4.bind(var5)(var1);
                        var1 = var1.t;
                        var1 = var1.BtXSp9;
                        var0 = var2.bind(var3)(var1);
                    case 362:
                        return var0;
                }
            };
            var2.getAudioDeviceToDisplayText = var4;
            var2.useMaskedSpeakerStates = var3;
            var1 = function() { // Environment: var1
                _fun66217: for (var _fun66217_ip = 0;;) switch (_fun66217_ip) {
                    case 0:
                        var2 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var0 = 26;
                        var0 = var6[var0];
                        var4 = undefined;
                        var7 = var2.bind(var4)(var0);
                        var3 = var7.useStateFromStores;
                        var0 = _closure1_slot14;
                        var2 = new Array(1);
                        var2[0] = var0;
                        var0 = function() { // Environment: var1
                            var1 = _closure1_slot14;
                            var0 = var1.getCurrentRouteType;
                            var0 = var0.bind(var1)();
                            return var0;
                        };
                        var2 = var3.bind(var7)(var2, var0);
                        var3 = _closure1_slot1;
                        var0 = 29;
                        var0 = var6[var0];
                        var0 = var3.bind(var4)(var0);
                        var9 = var0.bind(var4)();
                        var _closure2_slot0 = var9;
                        var0 = _closure1_slot15;
                        var3 = var0.SPEAKER;
                        var10 = var2 === var3;
                        var0 = var0.BLUETOOTH;
                        var0 = var2 === var0;
                        if (var10) {
                            _fun66217_ip = 111;
                            continue _fun66217
                        }
                    case 108:
                        var10 = var0;
                    case 111:
                        if (var10) {
                            _fun66217_ip = 117;
                            continue _fun66217
                        }
                    case 114:
                        var10 = var9;
                    case 117:
                        var _closure2_slot1 = var10;
                        var8 = _closure1_slot6;
                        var2 = var8.useState;
                        var6 = var2.bind(var8)(var10);
                        var3 = _closure1_slot4;
                        var2 = 2;
                        var6 = var3.bind(var4)(var6, var2);
                        var2 = 0;
                        var3 = var6[var2];
                        var _closure2_slot2 = var3;
                        var2 = 1;
                        var2 = var6[var2];
                        var _closure2_slot3 = var2;
                        var7 = var8.useCallback;
                        var6 = new Array(2);
                        var6[0] = var3;
                        var6[1] = var9;
                        var2 = function() { // Environment: var1
                            _fun66219: for (var _fun66219_ip = 0;;) switch (_fun66219_ip) {
                                case 0:
                                    var2 = _closure1_slot14;
                                    var1 = var2.getMultipleRoutesAvailable;
                                    var1 = var1.bind(var2)();
                                    if (var1) {
                                        _fun66219_ip = 62;
                                        continue _fun66219
                                    }
                                case 20:
                                    var2 = _closure1_slot18;
                                    var1 = var2.cancel;
                                    var1 = var1.bind(var2)();
                                    var2 = _closure2_slot0;
                                    if (var2) {
                                        _fun66219_ip = 62;
                                        continue _fun66219
                                    }
                                case 44:
                                    var3 = _closure2_slot3;
                                    var1 = _closure2_slot2;
                                    var2 = !var1;
                                    var1 = undefined;
                                    var1 = var3.bind(var1)(var2);
                                case 62:
                                    var2 = _closure1_slot17;
                                    var0 = _closure2_slot2;
                                    var1 = !var0;
                                    var0 = undefined;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                            }
                        };
                        var2 = var7.bind(var8)(var2, var6);
                        var7 = var8.useEffect;
                        var6 = new Array(2);
                        var6[0] = var10;
                        var6[1] = var9;
                        var1 = function() { // Environment: var1
                            var2 = _closure2_slot3;
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var1 = var7.bind(var8)(var1, var6);
                        var1 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        if (var0) {
                            _fun66217_ip = 249;
                            continue _fun66217
                        }
                    case 240:
                        var0 = 24;
                        var0 = var6[var0];
                        _fun66217_ip = 256;
                        continue _fun66217;
                    case 249:
                        var5 = 23;
                        var0 = var6[var5];
                    case 256:
                        var1 = var1.bind(var4)(var0);
                        var0 = {};
                        var0.isAudioRouteEnabled = var3;
                        var0.toggleAudio = var2;
                        var0.routeSource = var1;
                        return var0;
                }
            };
            var2.useImmediateMaskedSpeakerStates = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 31, 27, 3675, 1372, 3437, 1661, 3482, 8166, 8168, 3975, 8170, 3897, 1234, 3976, 8171, 7969, 1582, 7840, 4197, 22, 8186, 8187, 8188, 478, 566, 8189, 8167, 8273, 2]);