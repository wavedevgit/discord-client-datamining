// stores/MediaEngineStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var6;
    var0 = function() {
        _fun30136: for (var _fun30136_ip = 0;;) switch (_fun30136_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun30136_ip = 74;
                continue _fun30136;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot139 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot139 = var0;
    var0 = function arg0, arg1() {
        _fun30139: for (var _fun30139_ip = 0;;) switch (_fun30139_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun30139_ip = 46;
                    continue _fun30139
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun30139_ip = 55;
                    continue _fun30139
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun30139_ip = 343;
                    continue _fun30139
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun30139_ip = 323;
                    continue _fun30139
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun30139_ip = 283;
                    continue _fun30139
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun30139_ip = 270;
                    continue _fun30139
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun30139_ip = 163;
                    continue _fun30139
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun30139_ip = 179;
                    continue _fun30139
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun30139_ip = 249;
                    continue _fun30139
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun30139_ip = 249;
                    continue _fun30139
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun30139_ip = 234;
                    continue _fun30139
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun30139_ip = 247;
                    continue _fun30139
                }
            case 234:
                var8 = _closure1_slot141;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun30139_ip = 265;
                continue _fun30139;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun30139_ip = 283;
                continue _fun30139;
            case 270:
                var6 = _closure1_slot141;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun30139_ip = 323;
                    continue _fun30139
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun30139_ip = 330;
                    continue _fun30139
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun30140: for (var _fun30140_ip = 0;;) switch (_fun30140_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun30140_ip = 56;
                                continue _fun30140
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun30140_ip = 67;
                            continue _fun30140;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot140 = var0;
    var0 = function arg0, arg1() {
        _fun30141: for (var _fun30141_ip = 0;;) switch (_fun30141_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun30141_ip = 23;
                    continue _fun30141
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun30141_ip = 33;
                    continue _fun30141
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun30141_ip = 70;
                    continue _fun30141
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun30141_ip = 55;
                    continue _fun30141
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot141 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot10;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun30144: for (var _fun30144_ip = 0;;) switch (_fun30144_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun30144_ip = 376;
                            continue _fun30144
                        }
                    case 10:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 30;
                        var1 = var2[var1];
                        var2 = undefined;
                        var3 = var3.bind(var2)(var1);
                        var1 = var3.isMac;
                        var1 = var1.bind(var3)();
                        if (!var1) {
                            _fun30144_ip = 189;
                            continue _fun30144
                        }
                    case 51:
                        var3 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var6 = 32;
                        var1 = var1[var6];
                        var1 = var3.bind(var2)(var1);
                        var3 = null;
                        var1 = var3 == var1;
                        var5 = undefined;
                        if (var1) {
                            _fun30144_ip = 111;
                            continue _fun30144
                        }
                    case 82:
                        var7 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var1 = var1[var6];
                        var1 = var7.bind(var2)(var1);
                        var1 = var1.os;
                        var5 = var1.arch;
                    case 111:
                        var1 = 'arm64';
                        if (!(var1 === var5)) {
                            _fun30144_ip = 189;
                            continue _fun30144
                        }
                    case 121:
                        var5 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var1 = var1[var6];
                        var1 = var5.bind(var2)(var1);
                        var5 = var3 == var1;
                        var1 = undefined;
                        if (var5) {
                            _fun30144_ip = 185;
                            continue _fun30144
                        }
                    case 147:
                        var7 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var5 = var5[var6];
                        var5 = var7.bind(var2)(var5);
                        var5 = var5.processUtils;
                        var7 = var3 == var5;
                        var1 = undefined;
                        if (var7) {
                            _fun30144_ip = 185;
                            continue _fun30144
                        }
                    case 179:
                        var1 = var5.getSystemInfo;
                    case 185:
                        if (!(var3 == var1)) {
                            _fun30144_ip = 200;
                            continue _fun30144
                        }
                    case 189:
                        var1 = false;
                        _closure1_slot70 = var1;
                        _fun30144_ip = 370;
                        continue _fun30144;
                    case 200:
                        var5 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var1 = var1[var6];
                        var1 = var5.bind(var2)(var1);
                        var5 = var1.processUtils;
                        var1 = var5.getSystemInfo;
                        var1 = var1.bind(var5)();
                        SaveGenerator(address = 237);
                    case 235:
                        return var1;
                    case 237:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                        if (var5) {
                            _fun30144_ip = 373;
                            continue _fun30144
                        }
                    case 246:
                        var7 = var1.cpus;
                        var6 = var3 == var7;
                        var5 = undefined;
                        if (var6) {
                            _fun30144_ip = 284;
                            continue _fun30144
                        }
                    case 263:
                        var6 = 0;
                        var6 = var7[var6];
                        var7 = var3 == var6;
                        var5 = undefined;
                        if (var7) {
                            _fun30144_ip = 284;
                            continue _fun30144
                        }
                    case 278:
                        var5 = var6.model;
                    case 284:
                        var6 = var3 != var5;
                        var7 = '';
                        if (!var6) {
                            _fun30144_ip = 298;
                            continue _fun30144
                        }
                    case 295:
                        var7 = var5;
                    case 298:
                        var6 = var7.match;
                        var5 = /Apple M(\d+)/;
                        var5 = var6.bind(var7)(var5);
                        if (!(var3 == var5)) {
                            _fun30144_ip = 335;
                            continue _fun30144
                        }
                    case 327:
                        var3 = true;
                        _closure1_slot70 = var3;
                        _fun30144_ip = 370;
                        continue _fun30144;
                    case 335:
                        var3 = global;
                        var6 = var3.parseInt;
                        var3 = 1;
                        var5 = var5[var3];
                        var3 = 10;
                        var5 = var6.bind(var2)(var5, var3);
                        var3 = 3;
                        var3 = var5 >= var3;
                        _closure1_slot70 = var3;
                    case 370:
                        return var2;
                    case 373:
                        return var1;
                    case 376:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot142 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot142 = var0;
    var0 = function() {
        _fun30145: for (var _fun30145_ip = 0;;) switch (_fun30145_ip) {
            case 0:
                var0 = {
                    'mode': null,
                    'modeOptions': null,
                    'vadUseKrispSettingVersion': 0,
                    'ncUseKrispSettingVersion': 0,
                    'ncUseKrispjsSettingVersion': 0,
                    'mute': false,
                    'deaf': false,
                    'echoCancellation': true,
                    'noiseSuppression': false,
                    'automaticGainControl': true,
                    'noiseCancellation': true,
                    'bypassSystemInputProcessing': true,
                    'mostRecentlyRequestedVoiceFilter': null,
                    'voiceFilterPlaybackEnabled': true,
                    'hardwareEnabledVersion': 0,
                    'silenceWarning': true,
                    'attenuation': 0,
                    'attenuateWhileSpeakingSelf': false,
                    'attenuateWhileSpeakingOthers': true
                };
                var1 = _closure1_slot27;
                var1 = var1.VOICE_ACTIVITY;
                var0.mode = var1;
                var1 = {
                    'threshold': 4294967236,
                    'autoThreshold': null,
                    'vadUseKrisp': true,
                    'vadKrispActivationThreshold': 0.5,
                    'vadLeading': 5,
                    'vadTrailing': 25,
                    'delay': 20
                };
                var5 = _closure1_slot0;
                var3 = _closure1_slot3;
                var2 = 30;
                var2 = var3[var2];
                var3 = undefined;
                var2 = var5.bind(var3)(var2);
                var2 = var2.isPlatformEmbedded;
                if (var2) {
                    _fun30145_ip = 80;
                    continue _fun30145
                }
            case 78:
                var2 = false;
            case 80:
                var1.autoThreshold = var2;
                var2 = true;
                var5 = new Array(0);
                var1.shortcut = var5;
                var1.updatedAt = var3;
                var0.modeOptions = var1;
                var3 = false;
                var1 = null;
                var5 = {};
                var0.localMutes = var5;
                var5 = {};
                var0.disabledLocalVideos = var5;
                var5 = {};
                var0.videoToggleStateMap = var5;
                var5 = {};
                var0.localVolumes = var5;
                var5 = {};
                var0.localPans = var5;
                var5 = _closure1_slot48;
                var0.inputVolume = var5;
                var5 = _closure1_slot48;
                var0.outputVolume = var5;
                var5 = _closure1_slot50;
                var0.inputDeviceId = var5;
                var5 = _closure1_slot50;
                var0.outputDeviceId = var5;
                var5 = _closure1_slot50;
                var0.videoDeviceId = var5;
                var0.qos = var3;
                var0.qosMigrated = var3;
                var6 = _closure1_slot73;
                var5 = var6.supports;
                var4 = _closure1_slot47;
                var4 = var4.VIDEO_HOOK;
                var4 = var5.bind(var6)(var4);
                var0.videoHook = var4;
                var0.experimentalSoundshare2 = var1;
                var0.useSystemScreensharePicker = var1;
                var0.h265Enabled = var2;
                var0.vadThrehsoldMigrated = var3;
                var0.aecDumpEnabled = var3;
                var0.sidechainCompression = var2;
                var3 = 1;
                var0.sidechainCompressionSettingVersion = var3;
                var3 = 50;
                var0.sidechainCompressionStrength = var3;
                var0.automaticAudioSubsystem = var2;
                var0.activeInputProfile = var1;
                return var0;
        }
    };
    var _closure1_slot143 = var0;
    var0 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot3;
        var0 = 36;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.getGoLiveHdrConfig;
        var0 = {};
        var3 = arg0;
        var0.location = var3;
        var0 = var1.bind(var2)(var0);
        var0 = var0.hdrCaptureMode;
        return var0;
    };
    var _closure1_slot144 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot10;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun30149: for (var _fun30149_ip = 0;;) switch (_fun30149_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun30149_ip = 187;
                            continue _fun30149
                        }
                    case 10:
                        var3 = undefined;
                        var1 = global;
                        var2 = var1.window;
                        var4 = 'undefined';
                        var2 = typeof var2;
                        if (!(var4 !== var2)) {
                            _fun30149_ip = 182;
                            continue _fun30149
                        }
                    case 33:
                        var2 = var1.navigator;
                        var2 = typeof var2;
                        if (!(var4 !== var2)) {
                            _fun30149_ip = 182;
                            continue _fun30149
                        }
                    case 49:
                        var4 = var1.navigator;
                        var2 = 'mediaCapabilities';
                        var2 = var2 in var4;
                        if (!var2) {
                            _fun30149_ip = 182;
                            continue _fun30149
                        }
                    case 66:
                        var2 = var1.navigator;
                        var4 = var2.mediaCapabilities;
                        var2 = null;
                        if (!(var2 != var4)) {
                            _fun30149_ip = 182;
                            continue _fun30149
                        }
                    case 84: // try_start_0
                        var1 = var1.navigator;
                        var4 = var1.mediaCapabilities;
                        var2 = var4.decodingInfo;
                        var1 = {};
                        var5 = 'file';
                        var1.type = var5;
                        var5 = {
                            'contentType': 'video/mp4; codecs="hev1.1.6.L153.B0"',
                            'width': 1920,
                            'height': 1080,
                            'bitrate': 2000000,
                            'framerate': 30
                        };
                        var1.video = var5;
                        var1 = var2.bind(var4)(var1);
                        SaveGenerator(address = 140);
                    case 138:
                        return var1;
                    case 140:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun30149_ip = 172;
                            continue _fun30149
                        }
                    case 146:
                        var3 = var1;
                        var4 = var1.supported;
                        var2 = var4;
                        if (!var4) {
                            _fun30149_ip = 169;
                            continue _fun30149
                        }
                    case 161:
                        var2 = var3.powerEfficient;
                    case 169: // try_end0
                        return var2;
                    case 172:
                        return var1;
                    case 175: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var1 = false;
                        return var1;
                    case 182:
                        var1 = false;
                        return var1;
                    case 187:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot145 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot145 = var0;
    var0 = function() {
        _fun30150: for (var _fun30150_ip = 0;;) switch (_fun30150_ip) {
            case 0:
                var3 = _closure1_slot123;
                var0 = null;
                if (!(var0 == var3)) {
                    _fun30150_ip = 89;
                    continue _fun30150
                }
            case 15:
                var0 = global;
                var3 = var0.window;
                var4 = 'undefined';
                var3 = typeof var3;
                if (!(var4 === var3)) {
                    _fun30150_ip = 54;
                    continue _fun30150
                }
            case 33:
                var4 = var0.Promise;
                var3 = var4.resolve;
                var0 = false;
                var0 = var3.bind(var4)(var0);
                _fun30150_ip = 87;
                continue _fun30150;
            case 54:
                var4 = function() {
                    var0 = undefined;
                    var3 = _closure1_slot145;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var3 = undefined;
                var4 = var4.bind(var3)();
                var3 = var4.then;
                var2 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    _closure1_slot122 = var0;
                    return var0;
                };
                var2 = var3.bind(var4)(var2);
                _closure1_slot123 = var2;
                var0 = var2;
            case 87:
                _fun30150_ip = 93;
                continue _fun30150;
            case 89:
                var0 = _closure1_slot123;
            case 93:
                return var0;
        }
    };
    var _closure1_slot146 = var0;
    var0 = function() {
        _fun30153: for (var _fun30153_ip = 0;;) switch (_fun30153_ip) {
            case 0:
                var3 = arguments[0];
                var4 = undefined;
                if (!(var3 === var4)) {
                    _fun30153_ip = 22;
                    continue _fun30153
                }
            case 9:
                var0 = _closure1_slot53;
                var3 = var0.DEFAULT;
            case 22:
                var0 = _closure1_slot77;
                var0 = var0[var3];
                var1 = null;
                if (!(var1 == var0)) {
                    _fun30153_ip = 58;
                    continue _fun30153
                }
            case 39:
                var1 = _closure1_slot143;
                var1 = var1.bind(var4)();
                var2 = _closure1_slot77;
                var2[var3] = var1;
                var0 = var1;
            case 58:
                return var0;
        }
    };
    var _closure1_slot147 = var0;
    var0 = function() {
        _fun30154: for (var _fun30154_ip = 0;;) switch (_fun30154_ip) {
            case 0:
                var2 = arguments[0];
                var6 = undefined;
                if (!(var2 === var6)) {
                    _fun30154_ip = 22;
                    continue _fun30154
                }
            case 9:
                var0 = _closure1_slot53;
                var2 = var0.DEFAULT;
            case 22:
                var1 = _closure1_slot147;
                var3 = var1.bind(var6)(var2);
                var2 = _closure1_slot72;
                var1 = var3.activeInputProfile;
                var5 = null;
                if (!(var5 == var1)) {
                    _fun30154_ip = 60;
                    continue _fun30154
                }
            case 50:
                var4 = _closure1_slot45;
                var1 = var4.CUSTOM;
            case 60:
                var1 = var2[var1];
                var2 = {};
                var4 = var3.modeOptions;
                if (!(var5 == var4)) {
                    _fun30154_ip = 78;
                    continue _fun30154
                }
            case 76:
                var4 = {};
            case 78:
                var11 = var2;
                var10 = var4;
                var4 = copyDataProperties(var11, var10);
                var4 = var1.modeOptions;
                if (!(var5 == var4)) {
                    _fun30154_ip = 100;
                    continue _fun30154
                }
            case 98:
                var4 = {};
            case 100:
                var11 = var2;
                var10 = var4;
                var4 = copyDataProperties(var11, var10);
                var4 = var2.vadDuringPreProcess;
                if (!(var5 == var4)) {
                    _fun30154_ip = 172;
                    continue _fun30154
                }
            case 120:
                var7 = _closure1_slot0;
                var8 = _closure1_slot3;
                var4 = 37;
                var4 = var8[var4];
                var8 = var7.bind(var6)(var4);
                var7 = var8.getVADBeforeProcessingExperimentConfig;
                var4 = {};
                var9 = 'getSettings';
                var4.location = var9;
                var4 = var7.bind(var8)(var4);
                var4 = var4.enabled;
                var2.vadDuringPreProcess = var4;
            case 172:
                var4 = var2.vadKrispActivationThreshold;
                if (!(var5 == var4)) {
                    _fun30154_ip = 194;
                    continue _fun30154
                }
            case 182:
                var7 = var1.automaticGainControl;
                var4 = true;
                if (!(var4 !== var7)) {
                    _fun30154_ip = 206;
                    continue _fun30154
                }
            case 194:
                var7 = var3.automaticGainControl;
                var4 = true;
                if (!(var4 === var7)) {
                    _fun30154_ip = 269;
                    continue _fun30154
                }
            case 206:
                var4 = _closure1_slot0;
                var7 = _closure1_slot3;
                var0 = 38;
                var0 = var7[var0];
                var6 = var4.bind(var6)(var0);
                var4 = var6.getAGC2ExperimentConfig;
                var0 = {};
                var7 = 'getSettings';
                var0.location = var7;
                var0 = var4.bind(var6)(var0);
                var4 = var0.vadKrispActivationThreshold;
                if (!(var5 != var4)) {
                    _fun30154_ip = 269;
                    continue _fun30154
                }
            case 257:
                var0 = var0.vadKrispActivationThreshold;
                var2.vadKrispActivationThreshold = var0;
            case 269:
                var0 = {};
                var11 = var0;
                var10 = var3;
                var3 = copyDataProperties(var11, var10);
                var11 = var0;
                var10 = var1;
                var1 = copyDataProperties(var11, var10);
                var1 = 'modeOptions';
                var0[var1] = var2;
                return var0;
        }
    };
    var _closure1_slot148 = var0;
    var0 = function arg0() {
        _fun30155: for (var _fun30155_ip = 0;;) switch (_fun30155_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot148;
                var1 = var4.context;
                var0 = undefined;
                var5 = var2.bind(var0)(var1);
                var6 = var5.mode;
                var2 = var4.context;
                var1 = _closure1_slot53;
                var1 = var1.DEFAULT;
                var3 = var6;
                if (!(var2 === var1)) {
                    _fun30155_ip = 192;
                    continue _fun30155
                }
            case 52:
                var2 = _closure1_slot0;
                var8 = _closure1_slot3;
                var1 = 39;
                var1 = var8[var1];
                var9 = var2.bind(var0)(var1);
                var2 = var9.getPushToTalkLatchingExperimentConfig;
                var8 = false;
                var1 = {
                    'location': 'setInputMode',
                    'autoTrackExposure': false
                };
                var1 = var2.bind(var9)(var1);
                var2 = var1.enableLatching;
                var1 = var6;
                if (!var2) {
                    _fun30155_ip = 156;
                    continue _fun30155
                }
            case 111:
                var2 = _closure1_slot27;
                var2 = var2.PUSH_TO_TALK;
                var2 = var6 === var2;
                if (!var2) {
                    _fun30155_ip = 140;
                    continue _fun30155
                }
            case 128:
                var9 = var5.modeOptions;
                var2 = var9.pttLatchingEnabled;
            case 140:
                var1 = var6;
                if (!var2) {
                    _fun30155_ip = 156;
                    continue _fun30155
                }
            case 146:
                var2 = _closure1_slot27;
                var1 = var2.VOICE_ACTIVITY;
            case 156:
                var6 = _closure1_slot0;
                var9 = _closure1_slot3;
                var2 = 40;
                var2 = var9[var2];
                var6 = var6.bind(var0)(var2);
                var2 = var6.setPushToTalkState;
                var2 = var2.bind(var6)(var8, var8, var8);
                var3 = var1;
            case 192:
                var2 = _closure1_slot1;
                var6 = _closure1_slot3;
                var1 = 41;
                var1 = var6[var1];
                var6 = var2.bind(var0)(var1);
                var2 = var6.getConfig;
                var1 = {};
                var8 = 'setInputMode';
                var1.location = var8;
                var1 = var2.bind(var6)(var1);
                var6 = var1.showPTTSpeakingIndicator;
                if (!var6) {
                    _fun30155_ip = 256;
                    continue _fun30155
                }
            case 242:
                var1 = _closure1_slot27;
                var1 = var1.PUSH_TO_TALK;
                var6 = var3 === var1;
            case 256:
                var2 = var4.setInputMode;
                var1 = {};
                var8 = var5.modeOptions;
                var8 = var8.threshold;
                var1.vadThreshold = var8;
                var9 = !var6;
                var8 = !var9;
                if (!var9) {
                    _fun30155_ip = 302;
                    continue _fun30155
                }
            case 290:
                var9 = var5.modeOptions;
                var8 = var9.autoThreshold;
            case 302:
                var1.vadAutoThreshold = var8;
                var8 = !var6;
                var6 = !var8;
                if (!var8) {
                    _fun30155_ip = 328;
                    continue _fun30155
                }
            case 316:
                var8 = var5.modeOptions;
                var6 = var8.vadUseKrisp;
            case 328:
                if (!var6) {
                    _fun30155_ip = 339;
                    continue _fun30155
                }
            case 331:
                var7 = _closure1_slot182;
                var6 = var7.bind(var0)();
            case 339:
                var1.vadUseKrisp = var6;
                var6 = var5.modeOptions;
                var8 = var6.vadKrispActivationThreshold;
                var6 = null;
                var9 = var6 != var8;
                var7 = 0.5;
                if (!var9) {
                    _fun30155_ip = 378;
                    continue _fun30155
                }
            case 375:
                var7 = var8;
            case 378:
                var1.vadKrispActivationThreshold = var7;
                var7 = var5.modeOptions;
                var7 = var7.vadLeading;
                var1.vadLeading = var7;
                var7 = var5.modeOptions;
                var7 = var7.vadTrailing;
                var1.vadTrailing = var7;
                var7 = var5.modeOptions;
                var7 = var7.vadDuringPreProcess;
                var6 = var6 != var7;
                if (!var6) {
                    _fun30155_ip = 439;
                    continue _fun30155
                }
            case 436:
                var6 = var7;
            case 439:
                var1.vadDuringPreProcess = var6;
                var6 = global;
                var7 = var6.Math;
                var6 = var7.round;
                var5 = var5.modeOptions;
                var5 = var5.delay;
                var5 = var6.bind(var7)(var5);
                var1.pttReleaseDelay = var5;
                var1 = var2.bind(var4)(var3, var1);
                return var0;
        }
    };
    var _closure1_slot149 = var0;
    var0 = function arg0() {
        _fun30156: for (var _fun30156_ip = 0;;) switch (_fun30156_ip) {
            case 0:
                var2 = undefined;
                var4 = undefined;
                if (!(var4 === var4)) {
                    _fun30156_ip = 15;
                    continue _fun30156
                }
            case 8:
                var4 = _closure1_slot48;
            case 15:
                var1 = _closure1_slot1;
                var3 = _closure1_slot3;
                var0 = 42;
                var0 = var3[var0];
                var3 = var1.bind(var2)(var0);
                var2 = var3.clamp;
                var1 = arg0;
                var0 = 0;
                var0 = var2.bind(var3)(var1, var0, var4);
                return var0;
        }
    };
    var _closure1_slot150 = var0;
    var0 = function arg0() {
        _fun30157: for (var _fun30157_ip = 0;;) switch (_fun30157_ip) {
            case 0:
                var2 = arg0;
                var4 = _closure1_slot148;
                var3 = var2.context;
                var0 = undefined;
                var3 = var4.bind(var0)(var3);
                var4 = _closure1_slot79;
                var6 = !var4;
                if (var6) {
                    _fun30157_ip = 38;
                    continue _fun30157
                }
            case 32:
                var6 = var3.mute;
            case 38:
                if (var6) {
                    _fun30157_ip = 47;
                    continue _fun30157
                }
            case 41:
                var6 = var3.deaf;
            case 47:
                var5 = var2.context;
                var4 = _closure1_slot53;
                var4 = var4.DEFAULT;
                if (!(var5 !== var4)) {
                    _fun30157_ip = 92;
                    continue _fun30157
                }
            case 66:
                var7 = var2.context;
                var4 = _closure1_slot53;
                var4 = var4.STREAM;
                var5 = var6;
                if (!(var7 === var4)) {
                    _fun30157_ip = 166;
                    continue _fun30157
                }
            case 88:
                var5 = true;
                _fun30157_ip = 166;
                continue _fun30157;
            case 92:
                var4 = var6;
                if (var6) {
                    _fun30157_ip = 102;
                    continue _fun30157
                }
            case 98:
                var4 = _closure1_slot88;
            case 102:
                if (var4) {
                    _fun30157_ip = 109;
                    continue _fun30157
                }
            case 105:
                var4 = _closure1_slot89;
            case 109:
                if (var4) {
                    _fun30157_ip = 116;
                    continue _fun30157
                }
            case 112:
                var4 = _closure1_slot90;
            case 116:
                if (var4) {
                    _fun30157_ip = 163;
                    continue _fun30157
                }
            case 119:
                var7 = _closure1_slot1;
                var8 = _closure1_slot3;
                var6 = 35;
                var6 = var8[var6];
                var8 = var7.bind(var0)(var6);
                var7 = var8.didHavePermission;
                var6 = _closure1_slot42;
                var6 = var6.AUDIO;
                var6 = var7.bind(var8)(var6);
                var4 = !var6;
            case 163:
                var5 = var4;
            case 166:
                var4 = var2.setSelfMute;
                var4 = var4.bind(var2)(var5);
                var4 = var2.setSelfDeaf;
                var3 = var3.deaf;
                var3 = var4.bind(var2)(var3);
                var3 = var2.context;
                var2 = _closure1_slot53;
                var2 = var2.DEFAULT;
                if (!(var3 === var2)) {
                    _fun30157_ip = 245;
                    continue _fun30157
                }
            case 215:
                var2 = _closure1_slot1;
                var3 = _closure1_slot3;
                var1 = 43;
                var1 = var3[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.updateNativeMute;
                var1 = var1.bind(var2)();
            case 245:
                return var0;
        }
    };
    var _closure1_slot151 = var0;
    var0 = function() {
        _fun30158: for (var _fun30158_ip = 0;;) switch (_fun30158_ip) {
            case 0:
                var2 = arguments[0];
                var7 = arguments[1];
                var0 = undefined;
                if (!(var2 === var0)) {
                    _fun30158_ip = 19;
                    continue _fun30158
                }
            case 12:
                var2 = _closure1_slot92;
            case 19:
                if (!(var7 === var0)) {
                    _fun30158_ip = 30;
                    continue _fun30158
                }
            case 23:
                var7 = _closure1_slot75;
            case 30:
                var6 = _closure1_slot75;
                var3 = null;
                var5 = var3 == var6;
                var4 = undefined;
                if (var5) {
                    _fun30158_ip = 54;
                    continue _fun30158
                }
            case 48:
                var4 = var6.desktopSource;
            case 54:
                var4 = var3 != var4;
                if (!var4) {
                    _fun30158_ip = 105;
                    continue _fun30158
                }
            case 61:
                var5 = var6.desktopSource;
                var8 = var5.id;
                var9 = var3 == var7;
                var5 = undefined;
                if (var9) {
                    _fun30158_ip = 101;
                    continue _fun30158
                }
            case 81:
                var9 = var7.desktopSource;
                var10 = var3 == var9;
                var5 = undefined;
                if (var10) {
                    _fun30158_ip = 101;
                    continue _fun30158
                }
            case 96:
                var5 = var9.id;
            case 101:
                var4 = var8 !== var5;
            case 105:
                if (!var4) {
                    _fun30158_ip = 223;
                    continue _fun30158
                }
            case 108:
                var4 = var6.desktopSource;
                var4 = var4.soundshareId;
                var4 = var3 != var4;
                if (!var4) {
                    _fun30158_ip = 157;
                    continue _fun30158
                }
            case 127:
                var8 = _closure1_slot0;
                var9 = _closure1_slot3;
                var5 = 30;
                var5 = var9[var5];
                var8 = var8.bind(var0)(var5);
                var5 = var8.isWindows;
                var4 = var5.bind(var8)();
            case 157:
                if (!var4) {
                    _fun30158_ip = 203;
                    continue _fun30158
                }
            case 160:
                var5 = _closure1_slot2;
                var8 = _closure1_slot3;
                var4 = 44;
                var4 = var8[var4];
                var8 = var5.bind(var0)(var4);
                var5 = var8.cancelAttachToProcess;
                var4 = var6.desktopSource;
                var4 = var4.soundshareId;
                var4 = var5.bind(var8)(var4);
            case 203:
                var8 = _closure1_slot73;
                var5 = var8.setGoLiveSource;
                var4 = _closure1_slot81;
                var4 = var5.bind(var8)(var3, var4);
            case 223:
                var5 = var3 == var6;
                var4 = undefined;
                if (var5) {
                    _fun30158_ip = 238;
                    continue _fun30158
                }
            case 232:
                var4 = var6.cameraSource;
            case 238:
                var4 = var3 == var4;
                if (var4) {
                    _fun30158_ip = 343;
                    continue _fun30158
                }
            case 245:
                var5 = var6.cameraSource;
                var8 = var5.videoDeviceGuid;
                var9 = var3 == var7;
                var5 = undefined;
                if (var9) {
                    _fun30158_ip = 287;
                    continue _fun30158
                }
            case 266:
                var9 = var7.cameraSource;
                var10 = var3 == var9;
                var5 = undefined;
                if (var10) {
                    _fun30158_ip = 287;
                    continue _fun30158
                }
            case 281:
                var5 = var9.videoDeviceGuid;
            case 287:
                var5 = var8 === var5;
                if (!var5) {
                    _fun30158_ip = 340;
                    continue _fun30158
                }
            case 294:
                var6 = var6.cameraSource;
                var8 = var6.audioDeviceGuid;
                var9 = var3 == var7;
                var6 = undefined;
                if (var9) {
                    _fun30158_ip = 336;
                    continue _fun30158
                }
            case 315:
                var9 = var7.cameraSource;
                var10 = var3 == var9;
                var6 = undefined;
                if (var10) {
                    _fun30158_ip = 336;
                    continue _fun30158
                }
            case 330:
                var6 = var9.audioDeviceGuid;
            case 336:
                var5 = var8 === var6;
            case 340:
                var4 = var5;
            case 343:
                if (var4) {
                    _fun30158_ip = 366;
                    continue _fun30158
                }
            case 346:
                var6 = _closure1_slot73;
                var5 = var6.setGoLiveSource;
                var4 = _closure1_slot81;
                var4 = var5.bind(var6)(var3, var4);
            case 366:
                var4 = _closure1_slot92;
                if (var4) {
                    _fun30158_ip = 376;
                    continue _fun30158
                }
            case 373:
                if (!var2) {
                    _fun30158_ip = 489;
                    continue _fun30158
                }
            case 376:
                var4 = _closure1_slot148;
                var4 = var4.bind(var0)();
                var6 = var4.videoDeviceId;
                var4 = _closure1_slot92;
                if (!var4) {
                    _fun30158_ip = 429;
                    continue _fun30158
                }
            case 397:
                var4 = _closure1_slot50;
                if (!(var6 === var4)) {
                    _fun30158_ip = 429;
                    continue _fun30158
                }
            case 405:
                var5 = _closure1_slot94;
                var4 = _closure1_slot50;
                if (!(var5 === var4)) {
                    _fun30158_ip = 429;
                    continue _fun30158
                }
            case 417:
                var5 = _closure1_slot93;
                var4 = _closure1_slot51;
                if (!(var5 === var4)) {
                    _fun30158_ip = 435;
                    continue _fun30158
                }
            case 429:
                _closure1_slot94 = var6;
                _fun30158_ip = 439;
                continue _fun30158;
            case 435:
                var6 = _closure1_slot93;
            case 439:
                _closure1_slot92 = var2;
                if (var2) {
                    _fun30158_ip = 452;
                    continue _fun30158
                }
            case 446:
                var2 = _closure1_slot51;
                _fun30158_ip = 466;
                continue _fun30158;
            case 452:
                var5 = _closure1_slot169;
                var4 = _closure1_slot86;
                var2 = var5.bind(var0)(var4, var6);
            case 466:
                _closure1_slot93 = var2;
                var5 = _closure1_slot73;
                var4 = var5.setVideoInputDevice;
                var2 = _closure1_slot93;
                var2 = var4.bind(var5)(var2);
            case 489:
                var _closure1_slot75 = var7;
                if (!(var3 != var7)) {
                    _fun30158_ip = 1183;
                    continue _fun30158
                }
            case 500:
                var5 = {};
                var2 = var7.quality;
                var2 = var2.resolution;
                var5.resolution = var2;
                var2 = var7.quality;
                var2 = var2.frameRate;
                var5.frameRate = var2;
                var2 = var7.desktopSource;
                if (!(var3 != var2)) {
                    _fun30158_ip = 1105;
                    continue _fun30158
                }
            case 549:
                var4 = _closure1_slot144;
                var2 = 'MediaEngineStore go live';
                var10 = var4.bind(var0)(var2);
                var2 = _closure1_slot148;
                var2 = var2.bind(var0)();
                var14 = var2.videoHook;
                var2 = _closure1_slot159;
                var13 = var2.bind(var0)();
                var12 = 0;
                if (!var13) {
                    _fun30158_ip = 729;
                    continue _fun30158
                }
            case 594:
                var4 = _closure1_slot0;
                var6 = _closure1_slot3;
                var2 = 30;
                var2 = var6[var2];
                var4 = var4.bind(var0)(var2);
                var2 = var4.isWindows;
                var2 = var2.bind(var4)();
                if (!var2) {
                    _fun30158_ip = 713;
                    continue _fun30158
                }
            case 627:
                var6 = _closure1_slot1;
                var4 = _closure1_slot3;
                var8 = 71;
                var8 = var4[var8];
                var9 = var6.bind(var0)(var8);
                var8 = var9.satisfies;
                var15 = 32;
                var4 = var4[var15];
                var4 = var6.bind(var0)(var4);
                var4 = var3 == var4;
                var6 = undefined;
                if (var4) {
                    _fun30158_ip = 703;
                    continue _fun30158
                }
            case 674:
                var11 = _closure1_slot1;
                var4 = _closure1_slot3;
                var4 = var4[var15];
                var4 = var11.bind(var0)(var4);
                var4 = var4.os;
                var6 = var4.release;
            case 703:
                var4 = _closure1_slot35;
                var2 = var8.bind(var9)(var6, var4);
            case 713:
                if (var2) {
                    _fun30158_ip = 722;
                    continue _fun30158
                }
            case 716:
                var2 = _closure1_slot36;
                _fun30158_ip = 726;
                continue _fun30158;
            case 722:
                var2 = _closure1_slot34;
            case 726:
                var12 = var2;
            case 729:
                var4 = _closure1_slot0;
                var2 = _closure1_slot3;
                var6 = 30;
                var2 = var2[var6];
                var4 = var4.bind(var0)(var2);
                var2 = var4.isWindows;
                var11 = var2.bind(var4)();
                if (!var11) {
                    _fun30158_ip = 804;
                    continue _fun30158
                }
            case 762:
                var4 = _closure1_slot0;
                var8 = _closure1_slot3;
                var2 = 45;
                var2 = var8[var2];
                var8 = var4.bind(var0)(var2);
                var4 = var8.getVideoCaptureDeviceForEncodeConfig;
                var2 = 'updateVideo';
                var2 = var4.bind(var8)(var2);
                var11 = var2.enabled;
            case 804:
                var4 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var6];
                var4 = var4.bind(var0)(var2);
                var2 = var4.isWindows;
                var2 = var2.bind(var4)();
                if (!var2) {
                    _fun30158_ip = 838;
                    continue _fun30158
                }
            case 834:
                var2 = _closure1_slot132;
            case 838:
                var9 = false;
                if (!var2) {
                    _fun30158_ip = 897;
                    continue _fun30158
                }
            case 843:
                var4 = _closure1_slot0;
                var6 = _closure1_slot3;
                var2 = 46;
                var2 = var6[var2];
                var2 = var4.bind(var0)(var2);
                var6 = var2.WGCDirtyRegionsExperiment;
                var4 = var6.getConfig;
                var2 = {};
                var8 = 'updateVideo';
                var2.location = var8;
                var2 = var4.bind(var6)(var2);
                var9 = var2.enabled;
            case 897:
                var8 = _closure1_slot73;
                var6 = var8.setGoLiveSource;
                var4 = {};
                var2 = {};
                var15 = var7.desktopSource;
                var15 = var15.id;
                var2.id = var15;
                var15 = var7.desktopSource;
                var15 = var15.soundshareId;
                var2.soundshareId = var15;
                var2.useVideoHook = var14;
                var2.useGraphicsCapture = var13;
                var2.useGraphicsCaptureApiLevel = var12;
                var2.useCaptureDeviceForEncode = var11;
                var12 = _closure1_slot71;
                var11 = var12.getExperimentalSoundshare;
                var11 = var11.bind(var12)();
                var2.useLoopback = var11;
                var11 = true;
                var2.useQuartzCapturer = var11;
                var11 = _closure1_slot160;
                var11 = var11.bind(var0)();
                var2.allowScreenCaptureKit = var11;
                var11 = 500;
                var2.videoHookStaleFrameTimeoutMs = var11;
                var11 = _closure1_slot64;
                var2.graphicsCaptureStaleFrameTimeoutMs = var11;
                var2.hdrCaptureMode = var10;
                var11 = _closure1_slot0;
                var12 = _closure1_slot3;
                var10 = 47;
                var10 = var12[var10];
                var12 = var11.bind(var0)(var10);
                var11 = var12.getGlobalFramePoolLockExperimentConfig;
                var10 = {};
                var13 = 'updateVideo';
                var10.location = var13;
                var10 = var11.bind(var12)(var10);
                var10 = var10.enabled;
                var2.enableGlobalFramePoolLock = var10;
                var2.useGraphicsCaptureDirtyRegions = var9;
                var4.desktopDescription = var2;
                var4.quality = var5;
                var2 = _closure1_slot81;
                var2 = var6.bind(var8)(var4, var2);
            case 1105:
                var2 = var7.cameraSource;
                if (!(var3 != var2)) {
                    _fun30158_ip = 1183;
                    continue _fun30158
                }
            case 1115:
                var4 = _closure1_slot73;
                var3 = var4.setGoLiveSource;
                var2 = {};
                var6 = {};
                var8 = var7.cameraSource;
                var8 = var8.videoDeviceGuid;
                var6.videoDeviceGuid = var8;
                var7 = var7.cameraSource;
                var7 = var7.audioDeviceGuid;
                var6.audioDeviceGuid = var7;
                var2.cameraDescription = var6;
                var2.quality = var5;
                var1 = _closure1_slot81;
                var1 = var3.bind(var4)(var2, var1);
            case 1183:
                return var0;
        }
    };
    var _closure1_slot152 = var0;
    var0 = function arg0() {
        _fun30159: for (var _fun30159_ip = 0;;) switch (_fun30159_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot54;
                var1 = var1.CPU_OVERUSE;
                if (!(var1 !== var2)) {
                    _fun30159_ip = 124;
                    continue _fun30159
                }
            case 20:
                var1 = _closure1_slot54;
                var1 = var1.FAILED;
                if (!(var1 !== var2)) {
                    _fun30159_ip = 88;
                    continue _fun30159
                }
            case 34:
                var1 = _closure1_slot54;
                var1 = var1.VAD_CPU_OVERUSE;
                if (!(var1 !== var2)) {
                    _fun30159_ip = 52;
                    continue _fun30159
                }
            case 48:
                var1 = undefined;
                return var1;
            case 52:
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 48;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.AVUnderlyingError;
                var1 = var1.NoiseCancellerVadCpuOveruse;
                return var1;
            case 88:
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 48;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.AVUnderlyingError;
                var1 = var1.NoiseCancellerFailed;
                return var1;
            case 124:
                var2 = _closure1_slot0;
                var1 = _closure1_slot3;
                var0 = 48;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.AVUnderlyingError;
                var0 = var0.NoiseCancellerCpuOveruse;
                return var0;
        }
    };
    var _closure1_slot153 = var0;
    var0 = function arg0() {
        var4 = arg0;
        var0 = {};
        var0.enabled = var4;
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var1 = 38;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.getAGC2ExperimentConfig;
        var1 = {};
        var5 = 'getAutomaticGainControlConfig';
        var1.location = var5;
        var4 = !var4;
        var1.disable = var4;
        var1 = var2.bind(var3)(var1);
        var6 = var1.noiseCancellationConfig;
        var7 = var0;
        var1 = copyDataProperties(var7, var6);
        return var0;
    };
    var _closure1_slot154 = var0;
    var0 = function arg0, arg1() {
        var3 = arg0;
        var2 = var3.setAutomaticGainControl;
        var4 = _closure1_slot154;
        var0 = undefined;
        var1 = arg1;
        var1 = var4.bind(var0)(var1);
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot155 = var0;
    var0 = function arg0, arg1() {
        _fun30162: for (var _fun30162_ip = 0;;) switch (_fun30162_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var5 = _closure1_slot1;
                var4 = _closure1_slot3;
                var0 = 50;
                var4 = var4[var0];
                var0 = undefined;
                var7 = var5.bind(var0)(var4);
                var5 = _closure1_slot71;
                var4 = var5.getSystemMicrophoneMode;
                var6 = var4.bind(var5)();
                var4 = {};
                var5 = 'setNoiseCancellation';
                var4.location = var5;
                var8 = var7.bind(var0)(var2, var6, var4);
                if (!(var8 !== var2)) {
                    _fun30162_ip = 87;
                    continue _fun30162
                }
            case 66:
                var6 = _closure1_slot61;
                var4 = var6.info;
                var2 = 'Falling back to system noise suppression.';
                var2 = var4.bind(var6)(var2);
            case 87:
                var2 = var3.setNoiseCancellation;
                var2 = var2.bind(var3)(var8);
                var2 = _closure1_slot0;
                var4 = _closure1_slot3;
                var1 = 38;
                var1 = var4[var1];
                var7 = var2.bind(var0)(var1);
                var6 = var7.getAGC2ExperimentConfig;
                var1 = {};
                var1.location = var5;
                var8 = !var8;
                var1.disable = var8;
                var1 = var6.bind(var7)(var1);
                var6 = var1.noiseCancellationDuringProcessing;
                var1 = var3.setNoiseCancellationDuringProcessing;
                var1 = var1.bind(var3)(var6);
                var1 = 51;
                var1 = var4[var1];
                var4 = var2.bind(var0)(var1);
                var2 = var4.getKrispAtEndExperimentConfig;
                var1 = {};
                var1.location = var5;
                var1 = var2.bind(var4)(var1);
                var4 = var1.noiseCancellationAfterProcessing;
                var2 = var1.vadAfterWebrtc;
                var1 = var3.setNoiseCancellationAfterProcessing;
                var1 = var1.bind(var3)(var4);
                var1 = var3.setVADAfterWebrtc;
                var1 = var1.bind(var3)(var2);
                return var0;
        }
    };
    var _closure1_slot156 = var0;
    var0 = function arg0() {
        _fun30163: for (var _fun30163_ip = 0;;) switch (_fun30163_ip) {
            case 0:
                var3 = arg0;
                var1 = _closure1_slot148;
                var0 = undefined;
                var1 = var1.bind(var0)();
                var7 = var1.inputDeviceId;
                var5 = var3.setEchoCancellation;
                var6 = _closure1_slot19;
                var4 = var6.hasEchoCancellation;
                var4 = var4.bind(var6)(var7);
                if (var4) {
                    _fun30163_ip = 52;
                    continue _fun30163
                }
            case 46:
                var4 = var1.echoCancellation;
            case 52:
                var4 = var5.bind(var3)(var4);
                var5 = var3.setNoiseSuppression;
                var6 = _closure1_slot19;
                var4 = var6.hasNoiseSuppression;
                var4 = var4.bind(var6)(var7);
                if (var4) {
                    _fun30163_ip = 87;
                    continue _fun30163
                }
            case 81:
                var4 = var1.noiseSuppression;
            case 87:
                var4 = var5.bind(var3)(var4);
                var5 = _closure1_slot155;
                var6 = _closure1_slot19;
                var4 = var6.hasAutomaticGainControl;
                var4 = var4.bind(var6)(var7);
                if (var4) {
                    _fun30163_ip = 120;
                    continue _fun30163
                }
            case 114:
                var4 = var1.automaticGainControl;
            case 120:
                var4 = var5.bind(var0)(var3, var4);
                var5 = _closure1_slot156;
                var4 = var1.noiseCancellation;
                var4 = var5.bind(var0)(var3, var4);
                var5 = var3.setVoiceFilterId;
                var4 = _closure1_slot114;
                var4 = var5.bind(var3)(var4);
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var2 = 30;
                var2 = var5[var2];
                var4 = var4.bind(var0)(var2);
                var2 = var4.isWeb;
                var2 = var2.bind(var4)();
                if (!var2) {
                    _fun30163_ip = 224;
                    continue _fun30163
                }
            case 190:
                var1 = var1.noiseCancellation;
                var2 = -100;
                if (!var1) {
                    _fun30163_ip = 211;
                    continue _fun30163
                }
            case 205:
                var2 = -150;
            case 211:
                var1 = var3.setSilenceThreshold;
                var1 = var1.bind(var3)(var2);
            case 224:
                return var0;
        }
    };
    var _closure1_slot157 = var0;
    var0 = function() {
        _fun30164: for (var _fun30164_ip = 0;;) switch (_fun30164_ip) {
            case 0:
                var5 = _closure1_slot87;
                var4 = var5.start;
                var3 = _closure1_slot66;
                var0 = function() { // Environment: var1
                    var3 = _closure1_slot61;
                    var2 = var3.error;
                    var0 = 'Device enumeration timed out';
                    var0 = var2.bind(var3)(var0);
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var0 = 52;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.track;
                    var1 = _closure1_slot25;
                    var2 = var1.DEVICE_ENUMERATION_TIMEOUT;
                    var1 = {};
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var0 = var4.bind(var5)(var3, var0);
                var9 = _closure1_slot73;
                var8 = var9.on;
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var6 = 33;
                var5 = var3[var6];
                var0 = undefined;
                var5 = var4.bind(var0)(var5);
                var5 = var5.MediaEngineEvent;
                var7 = var5.Connection;
                var5 = function(arg0) { // Environment: var1
                    _fun30166: for (var _fun30166_ip = 0;;) switch (_fun30166_ip) {
                        case 0:
                            var8 = arg0;
                            var _closure3_slot0 = var8;
                            var2 = _closure1_slot149;
                            var0 = undefined;
                            var2 = var2.bind(var0)(var8);
                            var2 = _closure1_slot151;
                            var2 = var2.bind(var0)(var8);
                            var2 = _closure1_slot157;
                            var2 = var2.bind(var0)(var8);
                            var2 = _closure1_slot148;
                            var2 = var2.bind(var0)();
                            var7 = var8.setAttenuation;
                            var5 = var2.attenuation;
                            var4 = var2.attenuateWhileSpeakingSelf;
                            var3 = var2.attenuateWhileSpeakingOthers;
                            var3 = var7.bind(var8)(var5, var4, var3);
                            var3 = var8.setQoS;
                            var2 = var2.qos;
                            var2 = var3.bind(var8)(var2);
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var7 = 53;
                            var3 = var2[var7];
                            var10 = var4.bind(var0)(var3);
                            var9 = var10.getH265NoSoftwareDecodeConfig;
                            var3 = {};
                            var5 = 'setupMediaEngine';
                            var3.location = var5;
                            var3 = var9.bind(var10)(var3);
                            var3 = var3.treatment;
                            var9 = var2[var7];
                            var9 = var4.bind(var0)(var9);
                            var9 = var9.H265Treatment;
                            var9 = var9.NoSoftwareDecodeWithFallback;
                            var9 = var3 === var9;
                            _closure1_slot124 = var9;
                            var2 = var2[var7];
                            var2 = var4.bind(var0)(var2);
                            var2 = var2.H265Treatment;
                            var2 = var2.NoSoftwareDecode;
                            if (!(var3 !== var2)) {
                                _fun30166_ip = 325;
                                continue _fun30166
                            }
                        case 203:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var2 = var2[var7];
                            var2 = var4.bind(var0)(var2);
                            var2 = var2.H265Treatment;
                            var2 = var2.NoSoftwareDecodeWithFallback;
                            if (!(var3 !== var2)) {
                                _fun30166_ip = 325;
                                continue _fun30166
                            }
                        case 236:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var2 = var2[var7];
                            var2 = var4.bind(var0)(var2);
                            var2 = var2.H265Treatment;
                            var2 = var2.Disabled;
                            if (!(var3 === var2)) {
                                _fun30166_ip = 459;
                                continue _fun30166
                            }
                        case 272:
                            var4 = var8.setExperimentFlag;
                            var2 = _closure1_slot52;
                            var3 = var2.H265_HARDWARE_ONLY;
                            var2 = true;
                            var2 = var4.bind(var8)(var3, var2);
                            var4 = var8.setExperimentFlag;
                            var2 = _closure1_slot52;
                            var3 = var2.H265_HARDWARE_DECODE_AVAILABLE;
                            var2 = false;
                            var2 = var4.bind(var8)(var3, var2);
                            _fun30166_ip = 459;
                            continue _fun30166;
                        case 325:
                            var3 = var8.setExperimentFlag;
                            var2 = _closure1_slot52;
                            var2 = var2.H265_HARDWARE_ONLY;
                            var4 = true;
                            var2 = var3.bind(var8)(var2, var4);
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var7 = 30;
                            var2 = var2[var7];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.isWindows;
                            var2 = var2.bind(var3)();
                            if (var2) {
                                _fun30166_ip = 436;
                                continue _fun30166
                            }
                        case 382:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var2 = var2[var7];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.isMac;
                            var2 = var2.bind(var3)();
                            if (!var2) {
                                _fun30166_ip = 459;
                                continue _fun30166
                            }
                        case 412:
                            var3 = var8.setExperimentFlag;
                            var2 = _closure1_slot52;
                            var2 = var2.H265_HARDWARE_DECODE_AVAILABLE;
                            var2 = var3.bind(var8)(var2, var4);
                            _fun30166_ip = 459;
                            continue _fun30166;
                        case 436:
                            var2 = _closure1_slot146;
                            var4 = var2.bind(var0)();
                            var3 = var4.then;
                            var2 = function(arg0) { // Environment: var6
                                var3 = _closure3_slot0;
                                var2 = var3.setExperimentFlag;
                                var0 = _closure1_slot52;
                                var1 = var0.H265_HARDWARE_DECODE_AVAILABLE;
                                var0 = arg0;
                                var0 = var2.bind(var3)(var1, var0);
                                var0 = undefined;
                                return var0;
                            };
                            var2 = var3.bind(var4)(var2);
                        case 459:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var4 = 30;
                            var2 = var2[var4];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.isWindows;
                            var2 = var2.bind(var3)();
                            if (!var2) {
                                _fun30166_ip = 534;
                                continue _fun30166
                            }
                        case 492:
                            var7 = _closure1_slot0;
                            var9 = _closure1_slot3;
                            var3 = 54;
                            var3 = var9[var3];
                            var9 = var7.bind(var0)(var3);
                            var7 = var9.getH264MFVoiceExperimentConfig;
                            var3 = {};
                            var3.location = var5;
                            var3 = var7.bind(var9)(var3);
                            var2 = var3.enabled;
                        case 534:
                            if (!var2) {
                                _fun30166_ip = 561;
                                continue _fun30166
                            }
                        case 537:
                            var7 = var8.setExperimentFlag;
                            var2 = _closure1_slot52;
                            var3 = var2.USE_H264_MF_DECODER;
                            var2 = true;
                            var2 = var7.bind(var8)(var3, var2);
                        case 561:
                            var3 = _closure1_slot21;
                            var2 = var3.getGuildId;
                            var7 = var2.bind(var3)();
                            var3 = _closure1_slot1;
                            var9 = null;
                            if (!(var9 == var7)) {
                                _fun30166_ip = 598;
                                continue _fun30166
                            }
                        case 585:
                            var10 = _closure1_slot3;
                            var2 = 56;
                            var2 = var10[var2];
                            _fun30166_ip = 609;
                            continue _fun30166;
                        case 598:
                            var11 = _closure1_slot3;
                            var10 = 55;
                            var2 = var11[var10];
                        case 609:
                            var11 = var3.bind(var0)(var2);
                            var10 = var11.getCurrentConfig;
                            var3 = {};
                            var3.location = var5;
                            var12 = var9 != var7;
                            var2 = undefined;
                            if (!var12) {
                                _fun30166_ip = 638;
                                continue _fun30166
                            }
                        case 635:
                            var2 = var7;
                        case 638:
                            var3.guildId = var2;
                            var2 = {};
                            var7 = true;
                            var2.autoTrackExposure = var7;
                            var2 = var10.bind(var11)(var3, var2);
                            var10 = var2.muteBeforeProcessing;
                            var3 = var2.pttBeforeProcessing;
                            var2 = var2.skipEncode;
                            if (!var10) {
                                _fun30166_ip = 700;
                                continue _fun30166
                            }
                        case 678:
                            var11 = var8.setExperimentFlag;
                            var10 = _closure1_slot52;
                            var10 = var10.MUTE_BEFORE_PROCESSING;
                            var10 = var11.bind(var8)(var10, var7);
                        case 700:
                            if (!var3) {
                                _fun30166_ip = 725;
                                continue _fun30166
                            }
                        case 703:
                            var10 = var8.setExperimentFlag;
                            var3 = _closure1_slot52;
                            var3 = var3.PTT_BEFORE_PROCESSING;
                            var3 = var10.bind(var8)(var3, var7);
                        case 725:
                            if (!var2) {
                                _fun30166_ip = 750;
                                continue _fun30166
                            }
                        case 728:
                            var3 = var8.setExperimentFlag;
                            var2 = _closure1_slot52;
                            var2 = var2.SKIP_ENCODE;
                            var2 = var3.bind(var8)(var2, var7);
                        case 750:
                            var3 = _closure1_slot0;
                            var10 = _closure1_slot3;
                            var2 = 57;
                            var2 = var10[var2];
                            var10 = var3.bind(var0)(var2);
                            var3 = var10.getLowLatencyRateControlExperimentConfig;
                            var2 = {};
                            var2.location = var5;
                            var2 = var3.bind(var10)(var2);
                            var2 = var2.enabled;
                            if (!var2) {
                                _fun30166_ip = 817;
                                continue _fun30166
                            }
                        case 795:
                            var3 = var8.setExperimentFlag;
                            var2 = _closure1_slot52;
                            var2 = var2.LOW_LATENCY_RATE_CONTROL;
                            var2 = var3.bind(var8)(var2, var7);
                        case 817:
                            var3 = var8.setExperimentFlag;
                            var2 = _closure1_slot52;
                            var2 = var2.RESET_DECODER_ON_ERRORS;
                            var2 = var3.bind(var8)(var2, var7);
                            var3 = var8.setExperimentFlag;
                            var2 = _closure1_slot52;
                            var2 = var2.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS;
                            var2 = var3.bind(var8)(var2, var7);
                            var3 = var8.setMinimumJitterBufferLevel;
                            var2 = 80;
                            var2 = var3.bind(var8)(var2);
                            var3 = var8.context;
                            var2 = _closure1_slot53;
                            var2 = var2.STREAM;
                            if (!(var3 === var2)) {
                                _fun30166_ip = 976;
                                continue _fun30166
                            }
                        case 896:
                            var3 = _closure1_slot171;
                            var2 = _closure1_slot85;
                            var3 = var3.bind(var0)(var2);
                            var2 = var8.setSoundshareDiscardRearChannels;
                            var2 = var2.bind(var8)(var3);
                            var3 = _closure1_slot1;
                            var10 = _closure1_slot3;
                            var2 = 58;
                            var2 = var10[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.getConfig;
                            var2 = var2.bind(var3)();
                            var10 = var2.simulcastEnabled;
                            var3 = var2.lqStreamBitrate;
                            var2 = var8.configureGoLiveSimulcast;
                            var2 = var2.bind(var8)(var10, var3);
                        case 976:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var2 = var2[var4];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.isWindows;
                            var2 = var2.bind(var3)();
                            if (var2) {
                                _fun30166_ip = 1558;
                                continue _fun30166
                            }
                        case 1009:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var2 = var2[var4];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.isMac;
                            var2 = var2.bind(var3)();
                            if (var2) {
                                _fun30166_ip = 1459;
                                continue _fun30166
                            }
                        case 1042:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var2 = var2[var4];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.isLinux;
                            var2 = var2.bind(var3)();
                            if (var2) {
                                _fun30166_ip = 1432;
                                continue _fun30166
                            }
                        case 1075:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var2 = var2[var4];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.isIOS;
                            var2 = var2.bind(var3)();
                            if (!var2) {
                                _fun30166_ip = 1602;
                                continue _fun30166
                            }
                        case 1108:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var2 = var2[var4];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.isIOS;
                            var3 = var2.bind(var3)();
                            var2 = false;
                            if (!var3) {
                                _fun30166_ip = 1329;
                                continue _fun30166
                            }
                        case 1143:
                            var11 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var12 = 31;
                            var3 = var3[var12];
                            var3 = var11.bind(var0)(var3);
                            var3 = var3.getSocName;
                            var3 = var9 == var3;
                            var2 = false;
                            if (var3) {
                                _fun30166_ip = 1329;
                                continue _fun30166
                            }
                        case 1181:
                            var11 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var3 = var3[var12];
                            var11 = var11.bind(var0)(var3);
                            var3 = var11.getSocName;
                            var11 = var3.bind(var11)();
                            var3 = var9 == var11;
                            var2 = false;
                            if (var3) {
                                _fun30166_ip = 1329;
                                continue _fun30166
                            }
                        case 1217:
                            var12 = var11.startsWith;
                            var3 = 'ARM64_';
                            var3 = var12.bind(var11)(var3);
                            var2 = false;
                            if (!var3) {
                                _fun30166_ip = 1329;
                                continue _fun30166
                            }
                        case 1239:
                            var10 = var11.substring;
                            var3 = 6;
                            var13 = var10.bind(var11)(var3);
                            var10 = 0;
                            var11 = var13[var10];
                            var3 = 'T';
                            var3 = var3 === var11;
                            if (var3) {
                                _fun30166_ip = 1282;
                                continue _fun30166
                            }
                        case 1270:
                            var11 = var13[var10];
                            var10 = 'S';
                            var3 = var10 === var11;
                        case 1282:
                            if (!var3) {
                                _fun30166_ip = 1326;
                                continue _fun30166
                            }
                        case 1285:
                            var10 = global;
                            var12 = var10.parseInt;
                            var11 = var13.substring;
                            var10 = 1;
                            var11 = var11.bind(var13)(var10);
                            var10 = 10;
                            var11 = var12.bind(var0)(var11, var10);
                            var10 = 8122;
                            var3 = var11 >= var10;
                        case 1326:
                            var2 = var3;
                        case 1329:
                            if (!var2) {
                                _fun30166_ip = 1602;
                                continue _fun30166
                            }
                        case 1335:
                            var3 = _closure1_slot0;
                            var10 = _closure1_slot3;
                            var2 = 60;
                            var2 = var10[var2];
                            var10 = var3.bind(var0)(var2);
                            var3 = var10.getAV1DecodeExperimentIOSConfig;
                            var2 = 'MediaEngineStore';
                            var2 = var3.bind(var10)(var2);
                            var2 = var2.enabled;
                            if (!var2) {
                                _fun30166_ip = 1602;
                                continue _fun30166
                            }
                        case 1383:
                            var3 = var8.setExperimentFlag;
                            var2 = _closure1_slot52;
                            var2 = var2.SIGNAL_AV1_DECODE;
                            var2 = var3.bind(var8)(var2, var7);
                            var3 = var8.setExperimentFlag;
                            var2 = _closure1_slot52;
                            var2 = var2.SIGNAL_AV1_HARDWARE_DECODE;
                            var2 = var3.bind(var8)(var2, var7);
                            _fun30166_ip = 1602;
                            continue _fun30166;
                        case 1432:
                            var3 = var8.setExperimentFlag;
                            var2 = _closure1_slot52;
                            var2 = var2.SIGNAL_AV1_DECODE;
                            var2 = var3.bind(var8)(var2, var7);
                            _fun30166_ip = 1602;
                            continue _fun30166;
                        case 1459:
                            var3 = var8.setExperimentFlag;
                            var2 = _closure1_slot52;
                            var2 = var2.SIGNAL_AV1_DECODE;
                            var2 = var3.bind(var8)(var2, var7);
                            var2 = _closure1_slot70;
                            if (!(var7 === var2)) {
                                _fun30166_ip = 1602;
                                continue _fun30166
                            }
                        case 1489:
                            var3 = _closure1_slot0;
                            var10 = _closure1_slot3;
                            var2 = 59;
                            var2 = var10[var2];
                            var10 = var3.bind(var0)(var2);
                            var3 = var10.getAV1DecodeExperimentMacConfig;
                            var2 = 'MediaEngineStore';
                            var2 = var3.bind(var10)(var2);
                            var2 = var2.enabled;
                            if (!var2) {
                                _fun30166_ip = 1602;
                                continue _fun30166
                            }
                        case 1534:
                            var3 = var8.setExperimentFlag;
                            var2 = _closure1_slot52;
                            var2 = var2.SIGNAL_AV1_HARDWARE_DECODE;
                            var2 = var3.bind(var8)(var2, var7);
                            _fun30166_ip = 1602;
                            continue _fun30166;
                        case 1558:
                            var3 = var8.setExperimentFlag;
                            var2 = _closure1_slot52;
                            var2 = var2.SIGNAL_AV1;
                            var2 = var3.bind(var8)(var2, var7);
                            var3 = var8.setExperimentFlag;
                            var2 = _closure1_slot52;
                            var2 = var2.SIGNAL_AV1_HARDWARE_DECODE;
                            var2 = var3.bind(var8)(var2, var7);
                        case 1602:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var2 = var2[var4];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.isWeb;
                            var2 = var2.bind(var3)();
                            if (!var2) {
                                _fun30166_ip = 1696;
                                continue _fun30166
                            }
                        case 1632:
                            var3 = _closure1_slot0;
                            var10 = _closure1_slot3;
                            var2 = 61;
                            var2 = var10[var2];
                            var10 = var3.bind(var0)(var2);
                            var3 = var10.getBrowserHevcExperimentConfig;
                            var2 = 'MediaEngineStore';
                            var2 = var3.bind(var10)(var2);
                            var10 = var2.enabled;
                            var3 = var8.setExperimentFlag;
                            var2 = _closure1_slot52;
                            var2 = var2.BROWSER_HEVC;
                            var2 = var3.bind(var8)(var2, var10);
                        case 1696:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var2 = var2[var4];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.isWindows;
                            var2 = var2.bind(var3)();
                            var11 = undefined;
                            if (!var2) {
                                _fun30166_ip = 1739;
                                continue _fun30166
                            }
                        case 1728:
                            var3 = _closure1_slot131;
                            var2 = var9 != var3;
                            var11 = var3;
                        case 1739:
                            if (!var2) {
                                _fun30166_ip = 1757;
                                continue _fun30166
                            }
                        case 1742:
                            var10 = var11.startsWith;
                            var3 = 'AMD';
                            var2 = var10.bind(var11)(var3);
                        case 1757:
                            if (!var2) {
                                _fun30166_ip = 1802;
                                continue _fun30166
                            }
                        case 1760:
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot3;
                            var3 = 62;
                            var3 = var11[var3];
                            var11 = var10.bind(var0)(var3);
                            var10 = var11.getWmfGpuEncode;
                            var3 = 'MediaEngineStore';
                            var3 = var10.bind(var11)(var3);
                            var2 = var3.enabled;
                        case 1802:
                            if (!var2) {
                                _fun30166_ip = 1827;
                                continue _fun30166
                            }
                        case 1805:
                            var3 = var8.setExperimentFlag;
                            var2 = _closure1_slot52;
                            var2 = var2.WMF_GPU_ENCODE;
                            var2 = var3.bind(var8)(var2, var7);
                        case 1827:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var2 = var2[var4];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.isWindows;
                            var2 = var2.bind(var3)();
                            var11 = undefined;
                            if (!var2) {
                                _fun30166_ip = 1870;
                                continue _fun30166
                            }
                        case 1859:
                            var3 = _closure1_slot131;
                            var2 = var9 != var3;
                            var11 = var3;
                        case 1870:
                            if (!var2) {
                                _fun30166_ip = 1890;
                                continue _fun30166
                            }
                        case 1873:
                            var10 = var11.startsWith;
                            var3 = 'Intel';
                            var2 = var10.bind(var11)(var3);
                        case 1890:
                            if (!var2) {
                                _fun30166_ip = 1935;
                                continue _fun30166
                            }
                        case 1893:
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot3;
                            var3 = 63;
                            var3 = var11[var3];
                            var11 = var10.bind(var0)(var3);
                            var10 = var11.getWmfGpuEncodeIntel;
                            var3 = 'MediaEngineStore';
                            var3 = var10.bind(var11)(var3);
                            var2 = var3.enabled;
                        case 1935:
                            if (!var2) {
                                _fun30166_ip = 1960;
                                continue _fun30166
                            }
                        case 1938:
                            var3 = var8.setExperimentFlag;
                            var2 = _closure1_slot52;
                            var2 = var2.WMF_GPU_ENCODE;
                            var2 = var3.bind(var8)(var2, var7);
                        case 1960:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var2 = var2[var4];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.isWindows;
                            var2 = var2.bind(var3)();
                            var10 = undefined;
                            if (!var2) {
                                _fun30166_ip = 2003;
                                continue _fun30166
                            }
                        case 1992:
                            var3 = _closure1_slot131;
                            var2 = var9 != var3;
                            var10 = var3;
                        case 2003:
                            if (!var2) {
                                _fun30166_ip = 2023;
                                continue _fun30166
                            }
                        case 2006:
                            var9 = var10.startsWith;
                            var3 = 'Qualcomm';
                            var2 = var9.bind(var10)(var3);
                        case 2023:
                            if (!var2) {
                                _fun30166_ip = 2068;
                                continue _fun30166
                            }
                        case 2026:
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot3;
                            var3 = 62;
                            var3 = var10[var3];
                            var10 = var9.bind(var0)(var3);
                            var9 = var10.getWmfGpuEncode;
                            var3 = 'MediaEngineStore';
                            var3 = var9.bind(var10)(var3);
                            var2 = var3.enabled;
                        case 2068:
                            if (!var2) {
                                _fun30166_ip = 2093;
                                continue _fun30166
                            }
                        case 2071:
                            var3 = var8.setExperimentFlag;
                            var2 = _closure1_slot52;
                            var2 = var2.WMF_GPU_ENCODE;
                            var2 = var3.bind(var8)(var2, var7);
                        case 2093:
                            var10 = _closure1_slot73;
                            var9 = var10.setHasFullbandPerformance;
                            var3 = _closure1_slot1;
                            var7 = _closure1_slot3;
                            var2 = 64;
                            var2 = var7[var2];
                            var2 = var3.bind(var0)(var2);
                            var2 = var2.bind(var0)();
                            var2 = var9.bind(var10)(var2);
                            var9 = var8.setRemoteAudioHistory;
                            var2 = 1000;
                            var2 = var9.bind(var8)(var2);
                            var2 = 65;
                            var2 = var7[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = _closure1_slot71;
                            var2 = var3.bind(var0)(var2);
                            if (!var2) {
                                _fun30166_ip = 2264;
                                continue _fun30166
                            }
                        case 2175:
                            var3 = _closure1_slot1;
                            var7 = _closure1_slot3;
                            var2 = 66;
                            var2 = var7[var2];
                            var9 = var3.bind(var0)(var2);
                            var7 = var9.getCurrentConfig;
                            var3 = {};
                            var2 = 'f627ab_15';
                            var3.location = var2;
                            var2 = {};
                            var10 = false;
                            var2.autoTrackExposure = var10;
                            var2 = var7.bind(var9)(var3, var2);
                            var3 = var2.enableViewerClipping;
                            var2 = var8.setViewerSideClip;
                            var2 = var2.bind(var8)(var3);
                            var3 = var8.setClipsKeyFrameInterval;
                            var2 = _closure1_slot58;
                            var2 = var3.bind(var8)(var2);
                        case 2264:
                            var3 = _closure1_slot148;
                            var2 = var8.context;
                            var9 = var3.bind(var0)(var2);
                            var3 = var8.setPostponeDecodeLevel;
                            var2 = 100;
                            var2 = var3.bind(var8)(var2);
                            var2 = global;
                            var10 = var2.Object;
                            var7 = var10.keys;
                            var3 = var9.localMutes;
                            var11 = var7.bind(var10)(var3);
                            var3 = var11.length;
                            var7 = 0;
                            var3 = var7 < var3;
                            var10 = 0;
                            if (!var3) {
                                _fun30166_ip = 2390;
                                continue _fun30166
                            }
                        case 2334:
                            var13 = var11[var10];
                            var12 = _closure1_slot17;
                            var3 = var12.getId;
                            var3 = var3.bind(var12)();
                            if (!(var13 !== var3)) {
                                _fun30166_ip = 2378;
                                continue _fun30166
                            }
                        case 2356:
                            var12 = var8.setLocalMute;
                            var3 = var9.localMutes;
                            var3 = var3[var13];
                            var3 = var12.bind(var8)(var13, var3);
                        case 2378:
                            var10 = var10 + 1;
                            var3 = var11.length;
                            if (var10 < var3) {
                                _fun30166_ip = 2334;
                                continue _fun30166
                            }
                        case 2390:
                            var11 = var2.Object;
                            var10 = var11.keys;
                            var3 = var9.localVolumes;
                            var11 = var10.bind(var11)(var3);
                            var3 = var11.length;
                            var3 = var7 < var3;
                            var10 = 0;
                            if (!var3) {
                                _fun30166_ip = 2482;
                                continue _fun30166
                            }
                        case 2426:
                            var13 = var11[var10];
                            var12 = _closure1_slot17;
                            var3 = var12.getId;
                            var3 = var3.bind(var12)();
                            if (!(var13 !== var3)) {
                                _fun30166_ip = 2470;
                                continue _fun30166
                            }
                        case 2448:
                            var12 = var8.setLocalVolume;
                            var3 = var9.localVolumes;
                            var3 = var3[var13];
                            var3 = var12.bind(var8)(var13, var3);
                        case 2470:
                            var10 = var10 + 1;
                            var3 = var11.length;
                            if (var10 < var3) {
                                _fun30166_ip = 2426;
                                continue _fun30166
                            }
                        case 2482:
                            var11 = var2.Object;
                            var10 = var11.keys;
                            var3 = var9.localPans;
                            var11 = var10.bind(var11)(var3);
                            var3 = var11.length;
                            var3 = var7 < var3;
                            var10 = 0;
                            if (!var3) {
                                _fun30166_ip = 2567;
                                continue _fun30166
                            }
                        case 2518:
                            var14 = var11[var10];
                            var3 = var9.localPans;
                            var3 = var3[var14];
                            var13 = var8.setLocalPan;
                            var12 = var3.left;
                            var3 = var3.right;
                            var3 = var13.bind(var8)(var14, var12, var3);
                            var10 = var10 + 1;
                            var3 = var11.length;
                            if (var10 < var3) {
                                _fun30166_ip = 2518;
                                continue _fun30166
                            }
                        case 2567:
                            var10 = var2.Object;
                            var3 = var10.keys;
                            var2 = var9.disabledLocalVideos;
                            var3 = var3.bind(var10)(var2);
                            var2 = var3.length;
                            var2 = var7 < var2;
                            var7 = 0;
                            if (!var2) {
                                _fun30166_ip = 2641;
                                continue _fun30166
                            }
                        case 2603:
                            var11 = var3[var7];
                            var10 = var8.setLocalVideoDisabled;
                            var2 = var9.disabledLocalVideos;
                            var2 = var2[var11];
                            var2 = var10.bind(var8)(var11, var2);
                            var7 = var7 + 1;
                            var2 = var3.length;
                            if (var7 < var2) {
                                _fun30166_ip = 2603;
                                continue _fun30166
                            }
                        case 2641:
                            var9 = var8.on;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var7 = 33;
                            var2 = var2[var7];
                            var2 = var3.bind(var0)(var2);
                            var2 = var2.BaseConnectionEvent;
                            var3 = var2.Speaking;
                            var2 = function(arg0, arg1, arg2, arg3) { // Environment: var6
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot3;
                                var0 = 49;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.dispatch;
                                var1 = {};
                                var4 = 'SPEAKING';
                                var1.type = var4;
                                var4 = _closure3_slot0;
                                var4 = var4.context;
                                var1.context = var4;
                                var4 = arg0;
                                var1.userId = var4;
                                var4 = arg1;
                                var1.speakingFlags = var4;
                                var4 = arg3;
                                var1.voiceDb = var4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var2 = var9.bind(var8)(var3, var2);
                            var3 = var8.context;
                            var2 = _closure1_slot53;
                            var2 = var2.DEFAULT;
                            if (!(var3 === var2)) {
                                _fun30166_ip = 2765;
                                continue _fun30166
                            }
                        case 2709:
                            var2 = false;
                            _closure1_slot96 = var2;
                            _closure1_slot97 = var2;
                            var9 = var8.on;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var2 = var2[var7];
                            var2 = var3.bind(var0)(var2);
                            var2 = var2.BaseConnectionEvent;
                            var3 = var2.SpeakingWhileMuted;
                            var2 = function() { // Environment: var6
                                var1 = true;
                                _closure1_slot96 = var1;
                                _closure1_slot97 = var1;
                                var2 = _closure1_slot71;
                                var1 = var2.emitChange;
                                var1 = var1.bind(var2)();
                                var2 = _closure1_slot98;
                                var1 = var2.stop;
                                var1 = var1.bind(var2)();
                                var3 = _closure1_slot98;
                                var2 = var3.start;
                                var1 = _closure1_slot65;
                                var0 = function() { // Environment: var0
                                    var1 = false;
                                    _closure1_slot97 = var1;
                                    var1 = _closure1_slot71;
                                    var0 = var1.emitChange;
                                    var0 = var0.bind(var1)();
                                    var0 = undefined;
                                    return var0;
                                };
                                var0 = var2.bind(var3)(var1, var0);
                                var0 = undefined;
                                return var0;
                            };
                            var2 = var9.bind(var8)(var3, var2);
                        case 2765:
                            var11 = var8.on;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var9 = var2[var7];
                            var9 = var3.bind(var0)(var9);
                            var9 = var9.BaseConnectionEvent;
                            var10 = var9.DesktopSourceEnd;
                            var9 = function(arg0, arg1) { // Environment: var6
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot3;
                                var0 = 49;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.dispatch;
                                var1 = {};
                                var4 = 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE';
                                var1.type = var4;
                                var4 = {};
                                var5 = _closure3_slot0;
                                var5 = var5.context;
                                var4.context = var5;
                                var1.settings = var4;
                                var4 = arg0;
                                var1.endReason = var4;
                                var4 = arg1;
                                var1.errorCode = var4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var9 = var11.bind(var8)(var10, var9);
                            var11 = var8.on;
                            var9 = var2[var7];
                            var9 = var3.bind(var0)(var9);
                            var9 = var9.BaseConnectionEvent;
                            var10 = var9.InteractionRequired;
                            var9 = function(arg0) { // Environment: var6
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot3;
                                var0 = 49;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.dispatch;
                                var1 = {};
                                var4 = 'MEDIA_ENGINE_INTERACTION_REQUIRED';
                                var1.type = var4;
                                var4 = arg0;
                                var1.required = var4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var9 = var11.bind(var8)(var10, var9);
                            var11 = var8.on;
                            var9 = var2[var7];
                            var9 = var3.bind(var0)(var9);
                            var9 = var9.BaseConnectionEvent;
                            var10 = var9.VideoHookInitialize;
                            var9 = function(arg0, arg1, arg2, arg3, arg4, arg5) { // Environment: var6
                                _fun30173: for (var _fun30173_ip = 0;;) switch (_fun30173_ip) {
                                    case 0:
                                        var2 = _closure1_slot75;
                                        var5 = null;
                                        var3 = var5 == var2;
                                        var0 = undefined;
                                        var1 = undefined;
                                        if (var3) {
                                            _fun30173_ip = 26;
                                            continue _fun30173
                                        }
                                    case 20:
                                        var1 = var2.desktopSource;
                                    case 26:
                                        if (!(var5 != var1)) {
                                            _fun30173_ip = 168;
                                            continue _fun30173
                                        }
                                    case 33:
                                        var8 = _closure1_slot1;
                                        var9 = _closure1_slot3;
                                        var1 = 52;
                                        var1 = var9[var1];
                                        var4 = var8.bind(var0)(var1);
                                        var3 = var4.track;
                                        var1 = _closure1_slot25;
                                        var2 = var1.VIDEOHOOK_INITIALIZED;
                                        var1 = {};
                                        var6 = arg0;
                                        var1.backend = var6;
                                        var6 = arg1;
                                        var1.format = var6;
                                        var6 = arg2;
                                        var1.framebuffer_format = var6;
                                        var6 = arg3;
                                        var1.sample_count = var6;
                                        var6 = arg4;
                                        var1.success = var6;
                                        var6 = arg5;
                                        var1.reinitialization = var6;
                                        var6 = 67;
                                        var6 = var9[var6];
                                        var6 = var8.bind(var0)(var6);
                                        var7 = _closure1_slot75;
                                        var8 = var5 == var7;
                                        var5 = undefined;
                                        if (var8) {
                                            _fun30173_ip = 150;
                                            continue _fun30173
                                        }
                                    case 144:
                                        var5 = var7.desktopSource;
                                    case 150:
                                        var10 = var6.bind(var0)(var5);
                                        var11 = var1;
                                        var5 = copyDataProperties(var11, var10);
                                        var1 = var3.bind(var4)(var2, var1);
                                    case 168:
                                        return var0;
                                }
                            };
                            var9 = var11.bind(var8)(var10, var9);
                            var11 = var8.on;
                            var9 = var2[var7];
                            var9 = var3.bind(var0)(var9);
                            var9 = var9.BaseConnectionEvent;
                            var10 = var9.NoiseCancellationError;
                            var9 = function(arg0) { // Environment: var6
                                var4 = arg0;
                                var3 = _closure1_slot61;
                                var2 = var3.warn;
                                var0 = global;
                                var0 = var0.HermesInternal;
                                var5 = var0.concat;
                                var0 = 'noisecancellererror event: ';
                                var0 = var5.bind(var0)(var4);
                                var0 = var2.bind(var3)(var0);
                                var8 = _closure1_slot0;
                                var3 = _closure1_slot3;
                                var7 = 48;
                                var2 = var3[var7];
                                var0 = undefined;
                                var6 = var8.bind(var0)(var2);
                                var5 = var6.reportAVError;
                                var2 = {};
                                var7 = var3[var7];
                                var7 = var8.bind(var0)(var7);
                                var7 = var7.AVError;
                                var7 = var7.NOISE_CANCELLER_ERROR;
                                var2.type = var7;
                                var7 = _closure1_slot153;
                                var7 = var7.bind(var0)(var4);
                                var2.underlyingError = var7;
                                var2 = var5.bind(var6)(var2);
                                var2 = true;
                                _closure1_slot119 = var2;
                                var2 = _closure1_slot1;
                                var5 = 52;
                                var5 = var3[var5];
                                var7 = var2.bind(var0)(var5);
                                var6 = var7.track;
                                var1 = _closure1_slot25;
                                var5 = var1.VOICE_PROCESSING;
                                var1 = {};
                                var1.noise_canceller_error = var4;
                                var1 = var6.bind(var7)(var5, var1);
                                var1 = 49;
                                var5 = var3[var1];
                                var7 = var2.bind(var0)(var5);
                                var6 = var7.dispatch;
                                var5 = {
                                    'type': 'AUDIO_SET_NOISE_SUPPRESSION',
                                    'enabled': true
                                };
                                var5 = var6.bind(var7)(var5);
                                var5 = var3[var1];
                                var7 = var2.bind(var0)(var5);
                                var6 = var7.dispatch;
                                var5 = {
                                    'type': 'AUDIO_SET_NOISE_CANCELLATION',
                                    'enabled': false
                                };
                                var5 = var6.bind(var7)(var5);
                                var1 = var3[var1];
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.dispatch;
                                var1 = {};
                                var5 = 'MEDIA_ENGINE_NOISE_CANCELLATION_ERROR';
                                var1.type = var5;
                                var1.code = var4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var9 = var11.bind(var8)(var10, var9);
                            var11 = var8.on;
                            var9 = var2[var7];
                            var9 = var3.bind(var0)(var9);
                            var9 = var9.BaseConnectionEvent;
                            var10 = var9.VoiceActivityDetectorError;
                            var9 = function(arg0) { // Environment: var6
                                var4 = arg0;
                                var2 = _closure1_slot61;
                                var1 = var2.warn;
                                var0 = global;
                                var0 = var0.HermesInternal;
                                var3 = var0.concat;
                                var0 = 'voiceactivitydetectorerror event: ';
                                var0 = var3.bind(var0)(var4);
                                var0 = var1.bind(var2)(var0);
                                var7 = _closure1_slot0;
                                var3 = _closure1_slot3;
                                var6 = 48;
                                var1 = var3[var6];
                                var0 = undefined;
                                var5 = var7.bind(var0)(var1);
                                var2 = var5.reportAVError;
                                var1 = {};
                                var6 = var3[var6];
                                var6 = var7.bind(var0)(var6);
                                var6 = var6.AVError;
                                var6 = var6.NOISE_CANCELLER_ERROR;
                                var1.type = var6;
                                var6 = _closure1_slot153;
                                var6 = var6.bind(var0)(var4);
                                var1.underlyingError = var6;
                                var1 = var2.bind(var5)(var1);
                                var2 = _closure1_slot1;
                                var1 = 52;
                                var1 = var3[var1];
                                var7 = var2.bind(var0)(var1);
                                var6 = var7.track;
                                var1 = _closure1_slot25;
                                var5 = var1.VOICE_PROCESSING;
                                var1 = {};
                                var1.noise_canceller_error = var4;
                                var1 = var6.bind(var7)(var5, var1);
                                var1 = 49;
                                var5 = var3[var1];
                                var7 = var2.bind(var0)(var5);
                                var6 = var7.dispatch;
                                var5 = {};
                                var8 = 'AUDIO_SET_MODE';
                                var5.type = var8;
                                var8 = _closure1_slot53;
                                var8 = var8.DEFAULT;
                                var5.context = var8;
                                var8 = _closure1_slot27;
                                var8 = var8.VOICE_ACTIVITY;
                                var5.mode = var8;
                                var8 = {};
                                var10 = _closure1_slot148;
                                var9 = _closure1_slot53;
                                var9 = var9.DEFAULT;
                                var9 = var10.bind(var0)(var9);
                                var11 = var9.modeOptions;
                                var12 = var8;
                                var9 = copyDataProperties(var12, var11);
                                var10 = false;
                                var9 = 'vadUseKrisp';
                                var8[var9] = var10;
                                var5.options = var8;
                                var5 = var6.bind(var7)(var5);
                                var1 = var3[var1];
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.dispatch;
                                var1 = {};
                                var5 = 'MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR';
                                var1.type = var5;
                                var1.code = var4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var9 = var11.bind(var8)(var10, var9);
                            var11 = var8.on;
                            var9 = var2[var7];
                            var9 = var3.bind(var0)(var9);
                            var9 = var9.BaseConnectionEvent;
                            var10 = var9.SdpError;
                            var9 = function(arg0, arg1, arg2, arg3) { // Environment: var6
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot3;
                                var0 = 52;
                                var2 = var2[var0];
                                var0 = undefined;
                                var4 = var3.bind(var0)(var2);
                                var3 = var4.track;
                                var1 = _closure1_slot25;
                                var2 = var1.SDP_ERROR;
                                var1 = {};
                                var5 = arg0;
                                var1.operation = var5;
                                var5 = arg1;
                                var1.error = var5;
                                var5 = arg2;
                                var1.type = var5;
                                var5 = arg3;
                                var1.sdp = var5;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            var9 = var11.bind(var8)(var10, var9);
                            var9 = var8.on;
                            var7 = var2[var7];
                            var7 = var3.bind(var0)(var7);
                            var7 = var7.BaseConnectionEvent;
                            var7 = var7.VideoState;
                            var6 = function(arg0) { // Environment: var6
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot3;
                                var0 = 49;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.dispatch;
                                var1 = {};
                                var4 = 'MEDIA_ENGINE_VIDEO_STATE_CHANGED';
                                var1.type = var4;
                                var4 = arg0;
                                var1.videoState = var4;
                                var4 = _closure3_slot0;
                                var4 = var4.context;
                                var1.context = var4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var6 = var9.bind(var8)(var7, var6);
                            var7 = var8.setBitRate;
                            var6 = _closure1_slot18;
                            var6 = var6.bitrate;
                            var6 = var7.bind(var8)(var6);
                            var7 = var8.applyVideoQualityMode;
                            var6 = _closure1_slot24;
                            var6 = var6.mode;
                            var6 = var7.bind(var8)(var6);
                            var2 = var2[var4];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.isWindows;
                            var2 = var2.bind(var3)();
                            if (!var2) {
                                _fun30166_ip = 3127;
                                continue _fun30166
                            }
                        case 3102:
                            var6 = _closure1_slot73;
                            var4 = var6.supports;
                            var3 = _closure1_slot47;
                            var3 = var3.ASYNC_VIDEO_INPUT_DEVICE_INIT;
                            var2 = var4.bind(var6)(var3);
                        case 3127:
                            if (!var2) {
                                _fun30166_ip = 3181;
                                continue _fun30166
                            }
                        case 3130:
                            var3 = _closure1_slot73;
                            var2 = var3.setAsyncVideoInputDeviceInit;
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var1 = 68;
                            var1 = var6[var1];
                            var4 = var4.bind(var0)(var1);
                            var1 = var4.getAsyncCameraInitExperimentConfig;
                            var1 = var1.bind(var4)(var5);
                            var1 = var1.enabled;
                            var1 = var2.bind(var3)(var1);
                        case 3181:
                            return var0;
                    }
                };
                var5 = var8.bind(var9)(var7, var5);
                var9 = _closure1_slot73;
                var8 = var9.on;
                var5 = var3[var6];
                var5 = var4.bind(var0)(var5);
                var5 = var5.MediaEngineEvent;
                var7 = var5.DeviceChange;
                var5 = function(arg0, arg1, arg2) { // Environment: var1
                    var2 = _closure1_slot87;
                    var1 = var2.stop;
                    var1 = var1.bind(var2)();
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 49;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'MEDIA_ENGINE_DEVICES';
                    var1.type = var4;
                    var4 = arg0;
                    var1.inputDevices = var4;
                    var4 = arg1;
                    var1.outputDevices = var4;
                    var4 = arg2;
                    var1.videoDevices = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var5 = var8.bind(var9)(var7, var5);
                var9 = _closure1_slot73;
                var8 = var9.on;
                var5 = var3[var6];
                var5 = var4.bind(var0)(var5);
                var5 = var5.MediaEngineEvent;
                var7 = var5.VolumeChange;
                var5 = function(arg0, arg1) { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 49;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'AUDIO_VOLUME_CHANGE';
                    var1.type = var4;
                    var4 = arg0;
                    var1.inputVolume = var4;
                    var4 = arg1;
                    var1.outputVolume = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var5 = var8.bind(var9)(var7, var5);
                var9 = _closure1_slot73;
                var8 = var9.on;
                var5 = var3[var6];
                var5 = var4.bind(var0)(var5);
                var5 = var5.MediaEngineEvent;
                var7 = var5.DesktopSourceEnd;
                var5 = function(arg0, arg1) { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 49;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {
                        'type': 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                        'settings': null
                    };
                    var4 = arg0;
                    var1.endReason = var4;
                    var4 = arg1;
                    var1.errorCode = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var5 = var8.bind(var9)(var7, var5);
                var9 = _closure1_slot73;
                var8 = var9.on;
                var5 = var3[var6];
                var5 = var4.bind(var0)(var5);
                var5 = var5.MediaEngineEvent;
                var7 = var5.AudioPermission;
                var5 = function(arg0) { // Environment: var1
                    var1 = true;
                    _closure1_slot125 = var1;
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 49;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {
                        'type': 'MEDIA_ENGINE_PERMISSION',
                        'kind': 'audio'
                    };
                    var4 = arg0;
                    var1.granted = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var5 = var8.bind(var9)(var7, var5);
                var9 = _closure1_slot73;
                var8 = var9.on;
                var5 = var3[var6];
                var5 = var4.bind(var0)(var5);
                var5 = var5.MediaEngineEvent;
                var7 = var5.VideoPermission;
                var5 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 49;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {
                        'type': 'MEDIA_ENGINE_PERMISSION',
                        'kind': 'video'
                    };
                    var4 = arg0;
                    var1.granted = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var5 = var8.bind(var9)(var7, var5);
                var9 = _closure1_slot73;
                var8 = var9.on;
                var5 = var3[var6];
                var5 = var4.bind(var0)(var5);
                var5 = var5.MediaEngineEvent;
                var7 = var5.WatchdogTimeout;
                var10 = _closure1_slot10;
                var5 = function*() { // Environment: var1
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun30184: for (var _fun30184_ip = 0;;) switch (_fun30184_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun30184_ip = 219;
                                    continue _fun30184
                                }
                            case 10:
                                var1 = undefined;
                                var6 = undefined;
                            case 14: // try_start_0
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot3;
                                var3 = 69;
                                var3 = var5[var3];
                                var5 = var4.bind(var1)(var3);
                                var4 = var5.submitLiveCrashReport;
                                var3 = {};
                                var7 = {};
                                var8 = 'Voice Watchdog Timeout';
                                var7.message = var8;
                                var3.message = var7;
                                var3 = var4.bind(var5)(var3);
                                SaveGenerator(address = 70);
                            case 68:
                                return var3;
                            case 70:
                                ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                                if (var4) {
                                    _fun30184_ip = 78;
                                    continue _fun30184
                                }
                            case 76: // try_end0
                                _fun30184_ip = 107;
                                continue _fun30184;
                            case 78:
                                return var3;
                            case 81: // catch_target0
                                CatchBlockStart(arg_register = 3);
                                var2 = var3;
                                var3 = var3.status;
                                var4 = 'number';
                                var3 = typeof var3;
                                if (!(var4 === var3)) {
                                    _fun30184_ip = 107;
                                    continue _fun30184
                                }
                            case 102:
                                var6 = var2.status;
                            case 107:
                                var5 = _closure1_slot61;
                                var4 = var5.warn;
                                var7 = var6;
                                var3 = null;
                                var3 = var3 != var7;
                                var8 = 200;
                                if (!var3) {
                                    _fun30184_ip = 137;
                                    continue _fun30184
                                }
                            case 134:
                                var8 = var6;
                            case 137:
                                var3 = global;
                                var3 = var3.HermesInternal;
                                var7 = var3.concat;
                                var3 = 'Watchdog timeout, report submission status: ';
                                var3 = var7.bind(var3)(var8);
                                var3 = var4.bind(var5)(var3);
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot3;
                                var3 = 52;
                                var3 = var5[var3];
                                var5 = var4.bind(var1)(var3);
                                var4 = var5.track;
                                var2 = _closure1_slot25;
                                var3 = var2.VOICE_WATCHDOG_TIMEOUT;
                                var2 = {};
                                var2.minidump_submission_error = var6;
                                var2 = var4.bind(var5)(var3, var2);
                                return var1;
                            case 219:
                                return var0;
                        }
                    };
                    return var0;
                };
                var5 = var10.bind(var0)(var5);
                var5 = var8.bind(var9)(var7, var5);
                var9 = _closure1_slot73;
                var8 = var9.on;
                var5 = var3[var6];
                var5 = var4.bind(var0)(var5);
                var5 = var5.MediaEngineEvent;
                var7 = var5.VideoInputInitialized;
                var5 = function(arg0) { // Environment: var1
                    _fun30185: for (var _fun30185_ip = 0;;) switch (_fun30185_ip) {
                        case 0:
                            var6 = arg0;
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 52;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.track;
                            var1 = _closure1_slot25;
                            var2 = var1.VIDEO_INPUT_INITIALIZED;
                            var1 = {};
                            var7 = var6.description;
                            var7 = var7.name;
                            var1.device_name = var7;
                            var8 = var6.initializationTimerExpired;
                            var7 = null;
                            if (var8) {
                                _fun30185_ip = 131;
                                continue _fun30185
                            }
                        case 71:
                            var8 = global;
                            var10 = var8.Math;
                            var9 = var10.round;
                            var11 = var6.timeToFirstFrame;
                            var12 = _closure1_slot1;
                            var13 = _closure1_slot3;
                            var8 = 29;
                            var8 = var13[var8];
                            var8 = var12.bind(var0)(var8);
                            var8 = var8.Millis;
                            var8 = var8.SECOND;
                            var8 = var11 * var8;
                            var7 = var9.bind(var10)(var8);
                        case 131:
                            var1.time_to_first_frame_ms = var7;
                            var7 = var6.initializationTimerExpired;
                            var1.timed_out = var7;
                            var6 = var6.entropy;
                            var1.activity = var6;
                            var7 = _closure1_slot21;
                            var6 = var7.getMediaSessionId;
                            var6 = var6.bind(var7)();
                            var1.media_session_id = var6;
                            var6 = _closure1_slot21;
                            var5 = var6.getRTCConnectionId;
                            var5 = var5.bind(var6)();
                            var1.rtc_connection_id = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                    }
                };
                var5 = var8.bind(var9)(var7, var5);
                var9 = _closure1_slot73;
                var8 = var9.on;
                var5 = var3[var6];
                var5 = var4.bind(var0)(var5);
                var5 = var5.MediaEngineEvent;
                var7 = var5.AudioInputInitialized;
                var5 = function(arg0) { // Environment: var1
                    var6 = arg0;
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var0 = 52;
                    var1 = var11[var0];
                    var0 = undefined;
                    var4 = var10.bind(var0)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot25;
                    var2 = var1.AUDIO_INPUT_INITIALIZED;
                    var1 = {};
                    var7 = var6.description;
                    var7 = var7.name;
                    var1.device_name = var7;
                    var7 = global;
                    var8 = var7.Math;
                    var7 = var8.round;
                    var9 = var6.timeToInitialized;
                    var6 = 29;
                    var6 = var11[var6];
                    var6 = var10.bind(var0)(var6);
                    var6 = var6.Millis;
                    var6 = var6.SECOND;
                    var6 = var9 * var6;
                    var6 = var7.bind(var8)(var6);
                    var1.time_to_initialized_ms = var6;
                    var6 = _closure1_slot21;
                    var5 = var6.getRTCConnectionId;
                    var5 = var5.bind(var6)();
                    var1.rtc_connection_id = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var5 = var8.bind(var9)(var7, var5);
                var9 = _closure1_slot73;
                var8 = var9.on;
                var5 = var3[var6];
                var5 = var4.bind(var0)(var5);
                var5 = var5.MediaEngineEvent;
                var7 = var5.ClipsRecordingRestartNeeded;
                var5 = function() { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 49;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'CLIPS_RESTART';
                    var1.type = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var5 = var8.bind(var9)(var7, var5);
                var9 = _closure1_slot73;
                var8 = var9.on;
                var5 = var3[var6];
                var5 = var4.bind(var0)(var5);
                var5 = var5.MediaEngineEvent;
                var7 = var5.ClipsInitFailure;
                var5 = function(arg0, arg1) { // Environment: var1
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var0 = arg1;
                    var _closure3_slot1 = var0;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var0 = 49;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.wait;
                    var1 = function() { // Environment: var1
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var0 = 49;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.dispatch;
                        var1 = {};
                        var4 = 'CLIPS_INIT_FAILURE';
                        var1.type = var4;
                        var5 = _closure3_slot0;
                        var1.errMsg = var5;
                        var4 = _closure3_slot1;
                        var1.applicationName = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var5 = var8.bind(var9)(var7, var5);
                var9 = _closure1_slot73;
                var8 = var9.on;
                var5 = var3[var6];
                var5 = var4.bind(var0)(var5);
                var5 = var5.MediaEngineEvent;
                var7 = var5.ClipsRecordingEnded;
                var5 = function(arg0, arg1) { // Environment: var1
                    _fun30190: for (var _fun30190_ip = 0;;) switch (_fun30190_ip) {
                        case 0:
                            var5 = arg1;
                            var3 = _closure1_slot76;
                            var1 = null;
                            var6 = var1 == var3;
                            var0 = undefined;
                            var4 = undefined;
                            if (var6) {
                                _fun30190_ip = 43;
                                continue _fun30190
                            }
                        case 23:
                            var3 = var3.desktopSource;
                            var6 = var1 == var3;
                            var4 = undefined;
                            if (var6) {
                                _fun30190_ip = 43;
                                continue _fun30190
                            }
                        case 38:
                            var4 = var3.id;
                        case 43:
                            var3 = arg0;
                            if (!(var4 === var3)) {
                                _fun30190_ip = 133;
                                continue _fun30190
                            }
                        case 50:
                            var3 = var1 != var5;
                            if (!var3) {
                                _fun30190_ip = 95;
                                continue _fun30190
                            }
                        case 57:
                            var6 = _closure1_slot75;
                            var7 = var1 == var6;
                            var4 = undefined;
                            if (var7) {
                                _fun30190_ip = 91;
                                continue _fun30190
                            }
                        case 70:
                            var6 = var6.desktopSource;
                            var7 = var1 == var6;
                            var4 = undefined;
                            if (var7) {
                                _fun30190_ip = 91;
                                continue _fun30190
                            }
                        case 85:
                            var4 = var6.soundshareId;
                        case 91:
                            var3 = var4 !== var5;
                        case 95:
                            if (!var3) {
                                _fun30190_ip = 129;
                                continue _fun30190
                            }
                        case 98:
                            var4 = _closure1_slot2;
                            var6 = _closure1_slot3;
                            var3 = 44;
                            var3 = var6[var3];
                            var4 = var4.bind(var0)(var3);
                            var3 = var4.cancelAttachToProcess;
                            var3 = var3.bind(var4)(var5);
                        case 129:
                            var _closure1_slot76 = var1;
                        case 133:
                            return var0;
                    }
                };
                var5 = var8.bind(var9)(var7, var5);
                var9 = _closure1_slot73;
                var8 = var9.on;
                var5 = var3[var6];
                var5 = var4.bind(var0)(var5);
                var5 = var5.MediaEngineEvent;
                var7 = var5.NativeScreenSharePickerUpdate;
                var5 = function(arg0, arg1) { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 49;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'NATIVE_SCREEN_SHARE_PICKER_UPDATE';
                    var1.type = var4;
                    var4 = arg0;
                    var1.existing = var4;
                    var4 = arg1;
                    var1.content = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var5 = var8.bind(var9)(var7, var5);
                var9 = _closure1_slot73;
                var8 = var9.on;
                var5 = var3[var6];
                var5 = var4.bind(var0)(var5);
                var5 = var5.MediaEngineEvent;
                var7 = var5.NativeScreenSharePickerCancel;
                var5 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 49;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'NATIVE_SCREEN_SHARE_PICKER_CANCEL';
                    var1.type = var4;
                    var4 = arg0;
                    var1.existing = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var5 = var8.bind(var9)(var7, var5);
                var9 = _closure1_slot73;
                var8 = var9.on;
                var5 = var3[var6];
                var5 = var4.bind(var0)(var5);
                var5 = var5.MediaEngineEvent;
                var7 = var5.NativeScreenSharePickerError;
                var5 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 49;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'NATIVE_SCREEN_SHARE_PICKER_ERROR';
                    var1.type = var4;
                    var4 = arg0;
                    var1.error = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var5 = var8.bind(var9)(var7, var5);
                var9 = _closure1_slot73;
                var8 = var9.on;
                var5 = var3[var6];
                var5 = var4.bind(var0)(var5);
                var5 = var5.MediaEngineEvent;
                var7 = var5.AudioDeviceModuleError;
                var5 = function(arg0, arg1, arg2) { // Environment: var1
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var0 = 52;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.track;
                    var1 = _closure1_slot25;
                    var2 = var1.AUDIO_DEVICE_MODULE_ERROR;
                    var1 = {};
                    var5 = arg0;
                    var1.audio_device_module = var5;
                    var5 = arg1;
                    var1.code = var5;
                    var5 = arg2;
                    var1.device_name = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var5 = var8.bind(var9)(var7, var5);
                var9 = _closure1_slot73;
                var8 = var9.on;
                var5 = var3[var6];
                var5 = var4.bind(var0)(var5);
                var5 = var5.MediaEngineEvent;
                var7 = var5.VideoCodecError;
                var5 = function(arg0) { // Environment: var1
                    _fun30195: for (var _fun30195_ip = 0;;) switch (_fun30195_ip) {
                        case 0:
                            var5 = arg0;
                            var1 = var5.mode;
                            var0 = 'encode';
                            if (!(var0 !== var1)) {
                                _fun30195_ip = 55;
                                continue _fun30195
                            }
                        case 16:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var0 = 48;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            var0 = var0.AVError;
                            var7 = var0.VIDEO_DECODE_ERROR;
                            _fun30195_ip = 92;
                            continue _fun30195;
                        case 55:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var0 = 48;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            var0 = var0.AVError;
                            var7 = var0.VIDEO_ENCODE_ERROR;
                        case 92:
                            var6 = {};
                            var0 = var5.codecStandard;
                            var6.videoCodec = var0;
                            var0 = var5.message;
                            var6.errorMessage = var0;
                            var4 = _closure1_slot0;
                            var8 = _closure1_slot3;
                            var1 = 48;
                            var2 = var8[var1];
                            var0 = undefined;
                            var3 = var4.bind(var0)(var2);
                            var2 = var3.reportAVError;
                            var1 = var8[var1];
                            var1 = var4.bind(var0)(var1);
                            var1 = var1.AVError;
                            var1 = var1.VIDEO_ENCODE_ERROR;
                            if (!(var7 !== var1)) {
                                _fun30195_ip = 208;
                                continue _fun30195
                            }
                        case 173:
                            var1 = {};
                            var1.type = var7;
                            var10 = var1;
                            var9 = var6;
                            var4 = copyDataProperties(var10, var9);
                            var8 = var5.implName;
                            var4 = 'videoDecoder';
                            var1[var4] = var8;
                            _fun30195_ip = 242;
                            continue _fun30195;
                        case 208:
                            var4 = {};
                            var4.type = var7;
                            var10 = var4;
                            var9 = var6;
                            var6 = copyDataProperties(var10, var9);
                            var6 = var5.implName;
                            var5 = 'videoEncoder';
                            var4[var5] = var6;
                            var1 = var4;
                        case 242:
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var5 = var8.bind(var9)(var7, var5);
                var9 = _closure1_slot73;
                var8 = var9.on;
                var5 = var3[var6];
                var5 = var4.bind(var0)(var5);
                var5 = var5.MediaEngineEvent;
                var7 = var5.ConnectionStats;
                var5 = function(arg0) { // Environment: var1
                    var6 = arg0;
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 49;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'MEDIA_ENGINE_CONNECTION_STATS';
                    var1.type = var4;
                    var5 = var6.map;
                    var4 = function(arg0) { // Environment: var4
                        var0 = arg0;
                        var2 = var0.stats;
                        var1 = var0.connection;
                        var0 = {};
                        var0.stats = var2;
                        var2 = var1.mediaEngineConnectionId;
                        var0.mediaEngineConnectionId = var2;
                        var2 = _closure1_slot69;
                        var2 = parseFloat(var2);
                        var3 = var2 + 1;
                        _closure1_slot69 = var3;
                        var0.version = var2;
                        var1 = var1.context;
                        var0.context = var1;
                        return var0;
                    };
                    var4 = var5.bind(var6)(var4);
                    var1.connectionStats = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var5 = var8.bind(var9)(var7, var5);
                var7 = _closure1_slot73;
                var5 = var7.on;
                var3 = var3[var6];
                var3 = var4.bind(var0)(var3);
                var3 = var3.MediaEngineEvent;
                var4 = var3.VoiceQueueMetrics;
                var3 = function(arg0) { // Environment: var1
                    _fun30198: for (var _fun30198_ip = 0;;) switch (_fun30198_ip) {
                        case 0:
                            var3 = _closure1_slot187;
                            var0 = undefined;
                            var2 = arg0;
                            var4 = var3.bind(var0)(var2);
                            var2 = null;
                            if (!(var2 !== var4)) {
                                _fun30198_ip = 64;
                                continue _fun30198
                            }
                        case 23:
                            var3 = _closure1_slot1;
                            var5 = _closure1_slot3;
                            var2 = 52;
                            var2 = var5[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.track;
                            var1 = _closure1_slot25;
                            var1 = var1.VOICE_QUEUE_METRICS;
                            var1 = var2.bind(var3)(var1, var4);
                        case 64:
                            return var0;
                    }
                };
                var3 = var5.bind(var7)(var4, var3);
                var5 = _closure1_slot73;
                var4 = var5.setOnVideoContainerResized;
                var3 = function(arg0, arg1, arg2) { // Environment: var1
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var0 = arg1;
                    var _closure3_slot1 = var0;
                    var0 = arg2;
                    var _closure3_slot2 = var0;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var0 = 49;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.wait;
                    var1 = function() { // Environment: var1
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var0 = 49;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.dispatch;
                        var0 = {};
                        var3 = 'VIDEO_SIZE_UPDATE';
                        var0.type = var3;
                        var3 = _closure3_slot0;
                        var0.streamId = var3;
                        var3 = {};
                        var5 = _closure3_slot1;
                        var3.width = var5;
                        var4 = _closure3_slot2;
                        var3.height = var4;
                        var0.dimensions = var3;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var3 = var4.bind(var5)(var3);
                var3 = function() {
                    var0 = undefined;
                    var3 = _closure1_slot142;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var3 = var3.bind(var0)();
                var3 = _closure1_slot179;
                var3 = var3.bind(var0)();
                var3 = function() {
                    var0 = undefined;
                    var3 = _closure1_slot181;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var3 = var3.bind(var0)();
                var5 = _closure1_slot73;
                var4 = var5.supports;
                var3 = _closure1_slot47;
                var3 = var3.ASYNC_CLIPS_SOURCE_DEINIT;
                var3 = var4.bind(var5)(var3);
                if (!var3) {
                    _fun30164_ip = 982;
                    continue _fun30164
                }
            case 925:
                var5 = _closure1_slot73;
                var4 = var5.setAsyncClipsSourceDeinit;
                var7 = _closure1_slot0;
                var8 = _closure1_slot3;
                var3 = 70;
                var3 = var8[var3];
                var8 = var7.bind(var0)(var3);
                var7 = var8.getAsyncClipsSourceDeinitExperimentConfig;
                var3 = 'setupMediaEngine';
                var3 = var7.bind(var8)(var3);
                var3 = var3.enabled;
                var3 = var4.bind(var5)(var3);
            case 982:
                var4 = _closure1_slot138;
                var3 = var4.reset;
                var3 = var3.bind(var4)();
                var3 = _closure1_slot22;
                var5 = var3.bind(var0)();
                var4 = var5.then;
                var3 = function(arg0) { // Environment: var1
                    _fun30203: for (var _fun30203_ip = 0;;) switch (_fun30203_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = null;
                            if (!(var1 != var0)) {
                                _fun30203_ip = 34;
                                continue _fun30203
                            }
                        case 9:
                            var2 = var0.gpu_brand;
                            _closure1_slot131 = var2;
                            var0 = var0.has_intel_hybrid_igpu;
                            _closure1_slot132 = var0;
                        case 34:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3 = var4.bind(var5)(var3);
                var4 = _closure1_slot73;
                var3 = var4.on;
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var6];
                var2 = var5.bind(var0)(var2);
                var2 = var2.MediaEngineEvent;
                var2 = var2.SystemMicrophoneModeChange;
                var1 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    _closure1_slot129 = var1;
                    var2 = _closure1_slot73;
                    var1 = var2.eachConnection;
                    var0 = _closure1_slot157;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var _closure1_slot158 = var0;
    var0 = function() {
        _fun30205: for (var _fun30205_ip = 0;;) switch (_fun30205_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot3;
                var0 = 30;
                var0 = var3[var0];
                var7 = undefined;
                var2 = var2.bind(var7)(var0);
                var0 = var2.isWindows;
                var0 = var0.bind(var2)();
                if (!var0) {
                    _fun30205_ip = 126;
                    continue _fun30205
                }
            case 38:
                var5 = _closure1_slot1;
                var2 = _closure1_slot3;
                var3 = 71;
                var3 = var2[var3];
                var4 = var5.bind(var7)(var3);
                var3 = var4.satisfies;
                var8 = 32;
                var2 = var2[var8];
                var5 = var5.bind(var7)(var2);
                var2 = null;
                var5 = var2 == var5;
                var2 = undefined;
                if (var5) {
                    _fun30205_ip = 116;
                    continue _fun30205
                }
            case 87:
                var6 = _closure1_slot1;
                var5 = _closure1_slot3;
                var5 = var5[var8];
                var5 = var6.bind(var7)(var5);
                var5 = var5.os;
                var2 = var5.release;
            case 116:
                var1 = _closure1_slot37;
                var0 = var3.bind(var4)(var2, var1);
            case 126:
                return var0;
        }
    };
    var _closure1_slot159 = var0;
    var0 = function() {
        _fun30206: for (var _fun30206_ip = 0;;) switch (_fun30206_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot3;
                var0 = 30;
                var0 = var3[var0];
                var7 = undefined;
                var2 = var2.bind(var7)(var0);
                var0 = var2.isMac;
                var0 = var0.bind(var2)();
                if (!var0) {
                    _fun30206_ip = 63;
                    continue _fun30206
                }
            case 38:
                var4 = _closure1_slot73;
                var3 = var4.supports;
                var2 = _closure1_slot47;
                var2 = var2.SCREEN_CAPTURE_KIT;
                var0 = var3.bind(var4)(var2);
            case 63:
                if (!var0) {
                    _fun30206_ip = 154;
                    continue _fun30206
                }
            case 66:
                var5 = _closure1_slot1;
                var2 = _closure1_slot3;
                var3 = 71;
                var3 = var2[var3];
                var4 = var5.bind(var7)(var3);
                var3 = var4.satisfies;
                var8 = 32;
                var2 = var2[var8];
                var5 = var5.bind(var7)(var2);
                var2 = null;
                var5 = var2 == var5;
                var2 = undefined;
                if (var5) {
                    _fun30206_ip = 144;
                    continue _fun30206
                }
            case 115:
                var6 = _closure1_slot1;
                var5 = _closure1_slot3;
                var5 = var5[var8];
                var5 = var6.bind(var7)(var5);
                var5 = var5.os;
                var2 = var5.release;
            case 144:
                var1 = _closure1_slot32;
                var0 = var3.bind(var4)(var2, var1);
            case 154:
                return var0;
        }
    };
    var _closure1_slot160 = var0;
    var0 = function() {
        _fun30207: for (var _fun30207_ip = 0;;) switch (_fun30207_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var0 = 30;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var0 = var2.isWindows;
                var0 = var0.bind(var2)();
                if (!var0) {
                    _fun30207_ip = 63;
                    continue _fun30207
                }
            case 38:
                var4 = _closure1_slot73;
                var3 = var4.supports;
                var2 = _closure1_slot47;
                var2 = var2.AUTOMATIC_AUDIO_SUBSYSTEM;
                var0 = var3.bind(var4)(var2);
            case 63:
                if (!var0) {
                    _fun30207_ip = 91;
                    continue _fun30207
                }
            case 66:
                var3 = _closure1_slot73;
                var2 = var3.supports;
                var1 = _closure1_slot47;
                var1 = var1.AUDIO_SUBSYSTEM_DEFERRED_SWITCH;
                var0 = var2.bind(var3)(var1);
            case 91:
                return var0;
        }
    };
    var _closure1_slot161 = var0;
    var0 = function() {
        var2 = _closure1_slot73;
        var1 = var2.supports;
        var0 = _closure1_slot47;
        var0 = var0.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot162 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot10;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun30211: for (var _fun30211_ip = 0;;) switch (_fun30211_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun30211_ip = 480;
                            continue _fun30211
                        }
                    case 10:
                        var1 = undefined;
                        var5 = undefined;
                        var8 = undefined;
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var3 = 72;
                        var3 = var7[var3];
                        var9 = var6.bind(var1)(var3);
                        var4 = var9.getWindowsMuteDetectionExperimentConfig;
                        var3 = {};
                        var10 = 'MediaEngineStore.fetchInputDeviceOSConfig';
                        var3.location = var10;
                        var3 = var4.bind(var9)(var3);
                        var3 = var3.windowsMuteAndZeroVolumeDetectionEnabled;
                        var4 = 30;
                        var4 = var7[var4];
                        var6 = var6.bind(var1)(var4);
                        var4 = var6.isWindows;
                        var4 = var4.bind(var6)();
                        if (!var4) {
                            _fun30211_ip = 477;
                            continue _fun30211
                        }
                    case 96:
                        var6 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var7 = 71;
                        var7 = var4[var7];
                        var10 = var6.bind(var1)(var7);
                        var9 = var10.satisfies;
                        var12 = 32;
                        var4 = var4[var12];
                        var6 = var6.bind(var1)(var4);
                        var4 = null;
                        var6 = var4 == var6;
                        var7 = undefined;
                        if (var6) {
                            _fun30211_ip = 174;
                            continue _fun30211
                        }
                    case 145:
                        var11 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var6 = var6[var12];
                        var6 = var11.bind(var1)(var6);
                        var6 = var6.os;
                        var7 = var6.release;
                    case 174:
                        var6 = _closure1_slot38;
                        var6 = var9.bind(var10)(var7, var6);
                        if (!var6) {
                            _fun30211_ip = 477;
                            continue _fun30211
                        }
                    case 190:
                        if (!var3) {
                            _fun30211_ip = 477;
                            continue _fun30211
                        }
                    case 196: // try_start_0
                        var7 = _closure1_slot169;
                        var6 = _closure1_slot84;
                        var3 = _closure1_slot148;
                        var3 = var3.bind(var1)();
                        var3 = var3.inputDeviceId;
                        var6 = var7.bind(var1)(var6, var3);
                        var3 = _closure1_slot84;
                        var3 = var3[var6];
                        var5 = var3;
                        var6 = var4 == var3;
                        var3 = undefined;
                        if (var6) {
                            _fun30211_ip = 250;
                            continue _fun30211
                        }
                    case 244:
                        var3 = var5.guid;
                    case 250:
                        var8 = var3;
                        if (!(var4 != var3)) {
                            _fun30211_ip = 429;
                            continue _fun30211
                        }
                    case 260:
                        var4 = var8;
                        var3 = '';
                        if (!(var3 !== var4)) {
                            _fun30211_ip = 429;
                            continue _fun30211
                        }
                    case 274:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var3 = 73;
                        var3 = var5[var3];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.ensureModule;
                        var3 = 'discord_voice';
                        var3 = var4.bind(var5)(var3);
                        SaveGenerator(address = 315);
                    case 313:
                        return var3;
                    case 315:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun30211_ip = 434;
                            continue _fun30211
                        }
                    case 321:
                        var4 = global;
                        var6 = var4.Promise;
                        var5 = var6.all;
                        var7 = _closure1_slot73;
                        var4 = var7.getDeviceOSVolume;
                        var9 = var8;
                        var7 = var4.bind(var7)(var9);
                        var4 = new Array(2);
                        var4[0] = var7;
                        var8 = _closure1_slot73;
                        var7 = var8.getDeviceOSMuted;
                        var7 = var7.bind(var8)(var9);
                        var4[1] = var7;
                        var4 = var5.bind(var6)(var4);
                        SaveGenerator(address = 389);
                    case 387:
                        return var4;
                    case 389:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 5);
                        if (var5) {
                            _fun30211_ip = 431;
                            continue _fun30211
                        }
                    case 395:
                        var6 = _closure1_slot7;
                        var5 = 2;
                        var7 = var6.bind(var1)(var4, var5);
                        var5 = 0;
                        var6 = var7[var5];
                        var5 = 1;
                        var5 = var7[var5];
                        _closure1_slot105 = var6;
                        _closure1_slot104 = var5;
                    case 429: // try_end0
                        _fun30211_ip = 477;
                        continue _fun30211;
                    case 431:
                        return var4;
                    case 434:
                        return var3;
                    case 437: // catch_target0
                        CatchBlockStart(arg_register = 6);
                        var4 = _closure1_slot61;
                        var3 = var4.warn;
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var5 = var2.concat;
                        var2 = 'Failed to get device OS volume and/or mute state: ';
                        var2 = var5.bind(var2)(var6);
                        var2 = var3.bind(var4)(var2);
                    case 477:
                        return var1;
                    case 480:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot163 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot163 = var0;
    var0 = function arg0() {
        _fun30212: for (var _fun30212_ip = 0;;) switch (_fun30212_ip) {
            case 0:
                var3 = arguments[1];
                var2 = arguments[2];
                var4 = undefined;
                if (!(var3 === var4)) {
                    _fun30212_ip = 25;
                    continue _fun30212
                }
            case 12:
                var0 = _closure1_slot53;
                var3 = var0.DEFAULT;
            case 25:
                if (!(var2 === var4)) {
                    _fun30212_ip = 31;
                    continue _fun30212
                }
            case 29:
                var2 = true;
            case 31:
                var0 = _closure1_slot147;
                var0 = var0.bind(var4)(var3);
                var3 = global;
                var6 = var3.Object;
                var5 = var6.assign;
                var3 = arg0;
                var3 = var5.bind(var6)(var0, var3);
                if (!var2) {
                    _fun30212_ip = 113;
                    continue _fun30212
                }
            case 68:
                var3 = _closure1_slot0;
                var5 = _closure1_slot3;
                var2 = 74;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var4 = var2.Storage;
                var3 = var4.set;
                var2 = _closure1_slot62;
                var1 = _closure1_slot77;
                var1 = var3.bind(var4)(var2, var1);
            case 113:
                return var0;
        }
    };
    var _closure1_slot164 = var0;
    var0 = function() {
        var1 = _closure1_slot148;
        var0 = undefined;
        var1 = var1.bind(var0)();
        var5 = _closure1_slot73;
        var4 = var5.setAudioInputDevice;
        var3 = var1.inputDeviceId;
        var3 = var4.bind(var5)(var3);
        var5 = _closure1_slot73;
        var4 = var5.setAudioOutputDevice;
        var3 = var1.outputDeviceId;
        var3 = var4.bind(var5)(var3);
        var3 = _closure1_slot152;
        var3 = var3.bind(var0)();
        var5 = _closure1_slot73;
        var4 = var5.setInputVolume;
        var3 = var1.inputVolume;
        var3 = var4.bind(var5)(var3);
        var5 = _closure1_slot73;
        var4 = var5.setOutputVolume;
        var3 = var1.outputVolume;
        var3 = var4.bind(var5)(var3);
        var5 = _closure1_slot73;
        var4 = var5.setAecDump;
        var3 = var1.aecDumpEnabled;
        var3 = var4.bind(var5)(var3);
        var5 = _closure1_slot73;
        var4 = var5.setSidechainCompression;
        var3 = var1.sidechainCompression;
        var3 = var4.bind(var5)(var3);
        var5 = _closure1_slot73;
        var4 = var5.setSidechainCompressionStrength;
        var3 = var1.sidechainCompressionStrength;
        var3 = var4.bind(var5)(var3);
        var3 = _closure1_slot73;
        var2 = var3.setAudioInputBypassSystemProcessing;
        var1 = var1.bypassSystemInputProcessing;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot165 = var0;
    var0 = function() {
        _fun30214: for (var _fun30214_ip = 0;;) switch (_fun30214_ip) {
            case 0:
                var1 = _closure1_slot79;
                if (var1) {
                    _fun30214_ip = 41;
                    continue _fun30214
                }
            case 10:
                var1 = _closure1_slot73;
                var0 = var1.enable;
                var2 = var0.bind(var1)();
                var1 = var2.then;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 49;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.dispatch;
                    var0 = {
                        'type': 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
                        'enabled': true,
                        'unmute': false
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
            case 41:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot166 = var0;
    var19 = function arg0() {
        var0 = {};
        var1 = _closure1_slot50;
        var0.id = var1;
        var1 = 0;
        var0.index = var1;
        var1 = arg0;
        var0.name = var1;
        var1 = true;
        var0.disabled = var1;
        var1 = undefined;
        var0.guid = var1;
        var0.hardwareId = var1;
        var0.containerId = var1;
        return var0;
    };
    var _closure1_slot167 = var19;
    var0 = function arg0, arg1() {
        _fun30217: for (var _fun30217_ip = 0;;) switch (_fun30217_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.length;
                var0 = 0;
                if (!(var0 !== var1)) {
                    _fun30217_ip = 87;
                    continue _fun30217
                }
            case 14:
                var3 = _closure1_slot1;
                var1 = _closure1_slot3;
                var0 = 42;
                var0 = var1[var0];
                var1 = undefined;
                var0 = var3.bind(var1)(var0);
                var2 = var0.bind(var1)(var2);
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var0 = {};
                    var2 = var1.id;
                    var0.id = var2;
                    var2 = var1.index;
                    var0.index = var2;
                    var2 = var1.name;
                    var0.name = var2;
                    var2 = false;
                    var0.disabled = var2;
                    var2 = var1.facing;
                    var0.facing = var2;
                    var2 = var1.originalId;
                    var0.guid = var2;
                    var2 = var1.hardwareId;
                    var0.hardwareId = var2;
                    var2 = var1.containerId;
                    var0.containerId = var2;
                    var1 = var1.effects;
                    var0.effects = var1;
                    return var0;
                };
                var2 = var1.bind(var2)(var0);
                var1 = var2.keyBy;
                var0 = 'id';
                var1 = var1.bind(var2)(var0);
                var0 = var1.value;
                var0 = var0.bind(var1)();
                return var0;
            case 87:
                var2 = _closure1_slot167;
                var1 = undefined;
                var0 = arg1;
                var2 = var2.bind(var1)(var0);
                var0 = {};
                var1 = var2.id;
                var0[var1] = var2;
                return var0;
        }
    };
    var _closure1_slot168 = var0;
    var0 = function arg0, arg1() {
        _fun30219: for (var _fun30219_ip = 0;;) switch (_fun30219_ip) {
            case 0:
                var5 = arg0;
                var0 = arg1;
                var1 = var5[var0];
                var2 = null;
                if (!(var2 == var1)) {
                    _fun30219_ip = 27;
                    continue _fun30219
                }
            case 16:
                var3 = _closure1_slot50;
                var1 = var5[var3];
            case 27:
                if (!(var2 == var1)) {
                    _fun30219_ip = 80;
                    continue _fun30219
                }
            case 31:
                var6 = _closure1_slot1;
                var4 = _closure1_slot3;
                var3 = 42;
                var3 = var4[var3];
                var4 = undefined;
                var3 = var6.bind(var4)(var3);
                var4 = var3.bind(var4)(var5);
                var3 = var4.values;
                var4 = var3.bind(var4)();
                var3 = var4.first;
                var1 = var3.bind(var4)();
            case 80:
                if (!(var2 != var1)) {
                    _fun30219_ip = 89;
                    continue _fun30219
                }
            case 84:
                var0 = var1.id;
            case 89:
                return var0;
        }
    };
    var _closure1_slot169 = var0;
    var0 = function arg0() {
        _fun30220: for (var _fun30220_ip = 0;;) switch (_fun30220_ip) {
            case 0:
                var5 = _closure1_slot84;
                var6 = _closure1_slot168;
                var8 = _closure1_slot0;
                var4 = _closure1_slot3;
                var2 = 76;
                var3 = var4[var2];
                var0 = undefined;
                var3 = var8.bind(var0)(var3);
                var7 = var3.intl;
                var3 = var7.string;
                var2 = var4[var2];
                var2 = var8.bind(var0)(var2);
                var2 = var2.t;
                var2 = var2["/QIjDA"];
                var3 = var3.bind(var7)(var2);
                var2 = arg0;
                var2 = var6.bind(var0)(var2, var3);
                _closure1_slot84 = var2;
                var3 = _closure1_slot1;
                var2 = 42;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.isEqual;
                var2 = _closure1_slot84;
                var2 = var3.bind(var4)(var2, var5);
                if (var2) {
                    _fun30220_ip = 180;
                    continue _fun30220
                }
            case 118:
                var2 = _closure1_slot148;
                var2 = var2.bind(var0)();
                var4 = _closure1_slot169;
                var3 = _closure1_slot84;
                var2 = var2.inputDeviceId;
                var4 = var4.bind(var0)(var3, var2);
                var3 = _closure1_slot73;
                var2 = var3.setAudioInputDevice;
                var2 = var2.bind(var3)(var4);
                var3 = _closure1_slot73;
                var2 = var3.eachConnection;
                var1 = _closure1_slot157;
                var1 = var2.bind(var3)(var1);
            case 180:
                return var0;
        }
    };
    var _closure1_slot170 = var0;
    var0 = function arg0() {
        var0 = global;
        var2 = var0.Object;
        var1 = var2.values;
        var0 = arg0;
        var2 = var1.bind(var2)(var0);
        var1 = var2.some;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var1 = var0.name;
            var0 = var1.toLowerCase;
            var2 = var0.bind(var1)();
            var1 = var2.includes;
            var0 = 'dualsense';
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot171 = var0;
    var0 = function arg0() {
        _fun30223: for (var _fun30223_ip = 0;;) switch (_fun30223_ip) {
            case 0:
                var1 = _closure1_slot85;
                var6 = _closure1_slot168;
                var8 = _closure1_slot0;
                var5 = _closure1_slot3;
                var3 = 76;
                var4 = var5[var3];
                var0 = undefined;
                var4 = var8.bind(var0)(var4);
                var7 = var4.intl;
                var4 = var7.string;
                var3 = var5[var3];
                var3 = var8.bind(var0)(var3);
                var3 = var3.t;
                var3 = var3.xlUg0v;
                var4 = var4.bind(var7)(var3);
                var3 = arg0;
                var3 = var6.bind(var0)(var3, var4);
                _closure1_slot85 = var3;
                var4 = _closure1_slot1;
                var3 = 42;
                var3 = var5[var3];
                var5 = var4.bind(var0)(var3);
                var4 = var5.isEqual;
                var3 = _closure1_slot85;
                var3 = var4.bind(var5)(var3, var1);
                if (var3) {
                    _fun30223_ip = 195;
                    continue _fun30223
                }
            case 118:
                var3 = _closure1_slot148;
                var3 = var3.bind(var0)();
                var5 = _closure1_slot169;
                var4 = _closure1_slot85;
                var3 = var3.outputDeviceId;
                var5 = var5.bind(var0)(var4, var3);
                var4 = _closure1_slot73;
                var3 = var4.setAudioOutputDevice;
                var3 = var3.bind(var4)(var5);
                var3 = _closure1_slot171;
                var1 = var3.bind(var0)(var1);
                var2 = _closure1_slot85;
                var2 = var3.bind(var0)(var2);
                if (!(var1 !== var2)) {
                    _fun30223_ip = 195;
                    continue _fun30223
                }
            case 183:
                var1 = function arg0() {
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var2 = _closure1_slot73;
                    var1 = var2.eachConnection;
                    var0 = function(arg0) { // Environment: var0
                        _fun30225: for (var _fun30225_ip = 0;;) switch (_fun30225_ip) {
                            case 0:
                                var2 = arg0;
                                var1 = var2.context;
                                var0 = _closure1_slot53;
                                var0 = var0.STREAM;
                                if (!(var1 === var0)) {
                                    _fun30225_ip = 43;
                                    continue _fun30225
                                }
                            case 25:
                                var1 = var2.setSoundshareDiscardRearChannels;
                                var0 = _closure3_slot0;
                                var0 = var1.bind(var2)(var0);
                            case 43:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var1 = var1.bind(var0)(var2);
            case 195:
                return var0;
        }
    };
    var _closure1_slot172 = var0;
    var0 = function arg0() {
        _fun30226: for (var _fun30226_ip = 0;;) switch (_fun30226_ip) {
            case 0:
                var4 = arg0;
                var1 = var4.length;
                var0 = 0;
                var0 = var1 > var0;
                _closure1_slot100 = var0;
                var5 = _closure1_slot86;
                var3 = _closure1_slot168;
                var8 = _closure1_slot0;
                var9 = _closure1_slot3;
                var2 = 76;
                var6 = var9[var2];
                var0 = undefined;
                var6 = var8.bind(var0)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var2 = var9[var2];
                var2 = var8.bind(var0)(var2);
                var2 = var2.t;
                var2 = var2.WKWARY;
                var2 = var6.bind(var7)(var2);
                var2 = var3.bind(var0)(var4, var2);
                _closure1_slot86 = var2;
                var2 = _closure1_slot92;
                if (!var2) {
                    _fun30226_ip = 217;
                    continue _fun30226
                }
            case 105:
                var3 = _closure1_slot1;
                var4 = _closure1_slot3;
                var2 = 42;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.isEqual;
                var2 = _closure1_slot86;
                var2 = var3.bind(var4)(var2, var5);
                if (var2) {
                    _fun30226_ip = 217;
                    continue _fun30226
                }
            case 144:
                var3 = _closure1_slot86;
                var2 = _closure1_slot93;
                var2 = var3[var2];
                var2 = var0 !== var2;
                var4 = _closure1_slot93;
                var3 = _closure1_slot50;
                var3 = var4 === var3;
                if (!var3) {
                    _fun30226_ip = 202;
                    continue _fun30226
                }
            case 175:
                var4 = _closure1_slot50;
                var5 = var5[var4];
                var4 = null;
                var6 = var4 == var5;
                var4 = undefined;
                if (var6) {
                    _fun30226_ip = 199;
                    continue _fun30226
                }
            case 194:
                var4 = var5.disabled;
            case 199:
                var3 = var4;
            case 202:
                var1 = _closure1_slot152;
                if (var2) {
                    _fun30226_ip = 212;
                    continue _fun30226
                }
            case 209:
                var2 = var3;
            case 212:
                var1 = var1.bind(var0)(var2);
            case 217:
                return var0;
        }
    };
    var _closure1_slot173 = var0;
    var0 = function() {
        _fun30227: for (var _fun30227_ip = 0;;) switch (_fun30227_ip) {
            case 0:
                var1 = arguments[0];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun30227_ip = 13;
                    continue _fun30227
                }
            case 11:
                var1 = false;
            case 13:
                var _closure2_slot0 = var1;
                var _closure2_slot1 = var0;
                var _closure2_slot2 = var0;
                var1 = _closure1_slot15;
                var1 = var1.settings;
                var3 = var1.audioContextSettings;
                var1 = null;
                if (!(var1 == var3)) {
                    _fun30227_ip = 68;
                    continue _fun30227
                }
            case 50:
                var1 = {};
                var2 = {};
                var1.user = var2;
                var2 = {};
                var1.stream = var2;
                var3 = var1;
            case 68:
                _closure2_slot1 = var3;
                var4 = function() {
                    _fun30228: for (var _fun30228_ip = 0;;) switch (_fun30228_ip) {
                        case 0:
                            var3 = _closure2_slot2;
                            var0 = _closure1_slot43;
                            var0 = var0.USER;
                            if (!(var3 !== var0)) {
                                _fun30228_ip = 38;
                                continue _fun30228
                            }
                        case 26:
                            var0 = _closure1_slot53;
                            var3 = var0.STREAM;
                            _fun30228_ip = 48;
                            continue _fun30228;
                        case 38:
                            var0 = _closure1_slot53;
                            var3 = var0.DEFAULT;
                        case 48:
                            var _closure3_slot0 = var3;
                            var0 = _closure1_slot53;
                            var0 = var0.STREAM;
                            if (!(var3 !== var0)) {
                                _fun30228_ip = 72;
                                continue _fun30228
                            }
                        case 66:
                            var0 = _closure1_slot48;
                            _fun30228_ip = 76;
                            continue _fun30228;
                        case 72:
                            var0 = _closure1_slot49;
                        case 76:
                            var _closure3_slot1 = var0;
                            var4 = _closure2_slot1;
                            var0 = _closure2_slot2;
                            var10 = var4[var0];
                            var0 = null;
                            if (!(var0 == var10)) {
                                _fun30228_ip = 100;
                                continue _fun30228
                            }
                        case 98:
                            var10 = {};
                        case 100:
                            var _closure3_slot2 = var10;
                            var4 = _closure1_slot148;
                            var0 = undefined;
                            var4 = var4.bind(var0)(var3);
                            var5 = var4.localMutes;
                            var _closure3_slot3 = var5;
                            var4 = var4.localVolumes;
                            var _closure3_slot4 = var4;
                            var14 = function arg0, arg1() {
                                _fun30229: for (var _fun30229_ip = 0;;) switch (_fun30229_ip) {
                                    case 0:
                                        var6 = arg0;
                                        var4 = arg1;
                                        var _closure4_slot0 = var6;
                                        var _closure4_slot1 = var4;
                                        var5 = _closure1_slot0;
                                        var2 = _closure1_slot3;
                                        var0 = 77;
                                        var2 = var2[var0];
                                        var0 = undefined;
                                        var8 = var5.bind(var0)(var2);
                                        var7 = var8.getPendingAudioSettings;
                                        var5 = _closure3_slot0;
                                        var7 = var7.bind(var8)(var5, var6);
                                        var5 = null;
                                        if (!(var5 == var7)) {
                                            _fun30229_ip = 156;
                                            continue _fun30229
                                        }
                                    case 66:
                                        var5 = var4.muted;
                                        var7 = _closure3_slot3;
                                        if (var5) {
                                            _fun30229_ip = 85;
                                            continue _fun30229
                                        }
                                    case 79:
                                        var5 = delete var7[var6];
                                        _fun30229_ip = 91;
                                        continue _fun30229;
                                    case 85:
                                        var5 = true;
                                        var7[var6] = var5;
                                    case 91:
                                        var7 = var4.volume;
                                        var5 = _closure3_slot1;
                                        if (!(var7 === var5)) {
                                            _fun30229_ip = 115;
                                            continue _fun30229
                                        }
                                    case 105:
                                        var5 = _closure3_slot4;
                                        var5 = delete var5[var6];
                                        _fun30229_ip = 129;
                                        continue _fun30229;
                                    case 115:
                                        var5 = _closure3_slot4;
                                        var4 = var4.volume;
                                        var5[var6] = var4;
                                    case 129:
                                        var4 = _closure1_slot73;
                                        var3 = var4.eachConnection;
                                        var2 = _closure3_slot0;
                                        var1 = function(arg0) { // Environment: var1
                                            var3 = arg0;
                                            var4 = var3.setLocalVolume;
                                            var2 = _closure4_slot0;
                                            var0 = _closure4_slot1;
                                            var1 = var0.volume;
                                            var1 = var4.bind(var3)(var2, var1);
                                            var1 = var3.setLocalMute;
                                            var0 = var0.muted;
                                            var0 = var1.bind(var3)(var2, var0);
                                            var0 = undefined;
                                            return var0;
                                        };
                                        var1 = var3.bind(var4)(var1, var2);
                                        return var0;
                                    case 156:
                                        var0 = 1;
                                        return var0;
                                }
                            };
                            var7 = global;
                            var9 = var7.Object;
                            var8 = var9.entries;
                            var13 = var8.bind(var9)(var10);
                            var8 = var13.length;
                            var11 = 0;
                            var8 = var11 < var8;
                            var12 = 2;
                            var10 = 1;
                            var9 = 0;
                            if (!var8) {
                                _fun30228_ip = 221;
                                continue _fun30228
                            }
                        case 181:
                            var15 = var13[var9];
                            var8 = _closure1_slot7;
                            var8 = var8.bind(var0)(var15, var12);
                            var15 = var8[var11];
                            var8 = var8[var10];
                            var8 = var14.bind(var0)(var15, var8);
                            var9 = var9 + 1;
                            var8 = var13.length;
                            if (var9 < var8) {
                                _fun30228_ip = 181;
                                continue _fun30228
                            }
                        case 221:
                            var6 = _closure2_slot0;
                            if (!var6) {
                                _fun30228_ip = 363;
                                continue _fun30228
                            }
                        case 231:
                            var8 = function arg0() {
                                _fun30231: for (var _fun30231_ip = 0;;) switch (_fun30231_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var _closure4_slot0 = var3;
                                        var2 = _closure3_slot2;
                                        var4 = var2[var3];
                                        var2 = null;
                                        if (!(var2 == var4)) {
                                            _fun30231_ip = 74;
                                            continue _fun30231
                                        }
                                    case 26:
                                        var2 = _closure3_slot3;
                                        var2 = delete var2[var3];
                                        var2 = _closure3_slot4;
                                        var2 = delete var2[var3];
                                        var3 = _closure1_slot73;
                                        var2 = var3.eachConnection;
                                        var1 = _closure3_slot0;
                                        var0 = function(arg0) { // Environment: var0
                                            var3 = arg0;
                                            var1 = var3.setLocalVolume;
                                            var2 = _closure4_slot0;
                                            var0 = _closure3_slot1;
                                            var0 = var1.bind(var3)(var2, var0);
                                            var1 = var3.setLocalMute;
                                            var0 = false;
                                            var0 = var1.bind(var3)(var2, var0);
                                            var0 = undefined;
                                            return var0;
                                        };
                                        var0 = var2.bind(var3)(var0, var1);
                                        var0 = undefined;
                                        return var0;
                                    case 74:
                                        var0 = 1;
                                        return var0;
                                }
                            };
                            var6 = _closure1_slot140;
                            var9 = var7.Set;
                            var10 = var7.Object;
                            var2 = var10.keys;
                            var17 = var2.bind(var10)(var5);
                            var2 = new Array(0);
                            var18 = var2;
                            var16 = 0;
                            var16 = arraySpread(var18, var17, var16);
                            var11 = var7.Object;
                            var7 = var11.keys;
                            var17 = var7.bind(var11)(var4);
                            var18 = var2;
                            var7 = arraySpread(var18, var17, var16);
                            var7 = var9.prototype;
                            var7 = Object.create(var7, {
                                constructor: {
                                    value: var9
                                }
                            });
                            var19 = var7;
                            var18 = var2;
                            var2 = new var19[var9](var18, var17);
                            var2 = var2 instanceof Object ? var2 : var7;
                            var7 = var6.bind(var0)(var2);
                            var6 = var7.bind(var0)();
                            var2 = var6.done;
                            if (var2) {
                                _fun30228_ip = 363;
                                continue _fun30228
                            }
                        case 338:
                            var2 = var6.value;
                            var2 = var8.bind(var0)(var2);
                            var9 = var7.bind(var0)();
                            var2 = var9.done;
                            var6 = var9;
                            if (!var2) {
                                _fun30228_ip = 338;
                                continue _fun30228
                            }
                        case 363:
                            var2 = _closure1_slot164;
                            var1 = {};
                            var1.localMutes = var5;
                            var1.localVolumes = var4;
                            var1 = var2.bind(var0)(var1, var3);
                            return var0;
                    }
                };
                var1 = global;
                var2 = var1.Object;
                var1 = var2.keys;
                var3 = var1.bind(var2)(var3);
                var1 = var3.length;
                var2 = 0;
                var1 = var2 < var1;
                if (!var1) {
                    _fun30227_ip = 133;
                    continue _fun30227
                }
            case 109:
                var1 = var3[var2];
                _closure2_slot2 = var1;
                var1 = var4.bind(var0)();
                var2 = var2 + 1;
                var1 = var3.length;
                if (var2 < var1) {
                    _fun30227_ip = 109;
                    continue _fun30227
                }
            case 133:
                return var0;
        }
    };
    var _closure1_slot174 = var0;
    var0 = function arg0() {
        _fun30233: for (var _fun30233_ip = 0;;) switch (_fun30233_ip) {
            case 0:
                var5 = arg0;
                var2 = _closure1_slot71;
                var1 = null;
                if (!(var1 == var2)) {
                    _fun30233_ip = 53;
                    continue _fun30233
                }
            case 16:
                var4 = _closure1_slot61;
                var3 = var4.info;
                var2 = 'Error: trying to get soundshare id before MediaEngineStore is instantiated.';
                var2 = var3.bind(var4)(var2);
                var2 = {
                    'soundshareId': null,
                    'soundshareSession': ''
                };
                return var2;
            case 53:
                var3 = _closure1_slot71;
                var2 = var3.getExperimentalSoundshare;
                var3 = var2.bind(var3)();
                var2 = var5;
                if (var3) {
                    _fun30233_ip = 106;
                    continue _fun30233
                }
            case 73:
                var6 = _closure1_slot1;
                var4 = _closure1_slot3;
                var3 = 69;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var6.bind(var3)(var4);
                var3 = var4.getAudioPid;
                var2 = var3.bind(var4)(var5);
            case 106:
                var3 = var1 != var2;
                var1 = '';
                if (!var3) {
                    _fun30233_ip = 150;
                    continue _fun30233
                }
            case 117:
                var4 = _closure1_slot1;
                var3 = _closure1_slot3;
                var0 = 69;
                var3 = var3[var0];
                var0 = undefined;
                var3 = var4.bind(var0)(var3);
                var0 = var3.generateSessionFromPid;
                var1 = var0.bind(var3)(var2);
            case 150:
                var0 = {};
                var0.soundshareId = var2;
                var0.soundshareSession = var1;
                return var0;
        }
    };
    var _closure1_slot175 = var0;
    var0 = function arg0, arg1() {
        _fun30234: for (var _fun30234_ip = 0;;) switch (_fun30234_ip) {
            case 0:
                var5 = arg0;
                var _closure2_slot0 = var5;
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var0 = 30;
                var3 = var3[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var3);
                var3 = var4.isWindows;
                var3 = var3.bind(var4)();
                if (!var3) {
                    _fun30234_ip = 54;
                    continue _fun30234
                }
            case 47:
                var4 = 1;
                var3 = var5 > var4;
            case 54:
                if (!var3) {
                    _fun30234_ip = 114;
                    continue _fun30234
                }
            case 57:
                var3 = _closure1_slot2;
                var4 = _closure1_slot3;
                var2 = 44;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.attachToProcess;
                var2 = {};
                var6 = arg1;
                var2.soundshare_session = var6;
                var3 = var3.bind(var4)(var5, var2);
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var1
                    _fun30235: for (var _fun30235_ip = 0;;) switch (_fun30235_ip) {
                        case 0:
                            var2 = arg0;
                            var _closure3_slot0 = var2;
                            var1 = null;
                            var1 = var1 == var2;
                            if (var1) {
                                _fun30235_ip = 45;
                                continue _fun30235
                            }
                        case 18:
                            var4 = _closure1_slot13;
                            var3 = var4.shouldContinueWithoutElevatedProcessForPID;
                            var2 = _closure2_slot0;
                            var1 = var3.bind(var4)(var2);
                        case 45:
                            if (var1) {
                                _fun30235_ip = 89;
                                continue _fun30235
                            }
                        case 48:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var1 = 49;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.wait;
                            var0 = function() { // Environment: var0
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot3;
                                var0 = 49;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.dispatch;
                                var1 = {};
                                var4 = 'MEDIA_ENGINE_SOUNDSHARE_FAILED';
                                var1.type = var4;
                                var4 = _closure3_slot0;
                                var1.errorMessage = var4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                        case 89:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
            case 114:
                return var0;
        }
    };
    var _closure1_slot176 = var0;
    var0 = function() {
        _fun30237: for (var _fun30237_ip = 0;;) switch (_fun30237_ip) {
            case 0:
                var0 = _closure1_slot53;
                var4 = var0.DEFAULT;
                var1 = _closure1_slot148;
                var0 = undefined;
                var1 = var1.bind(var0)(var4);
                var1 = var1.videoToggleStateMap;
                var3 = global;
                var5 = var3.Object;
                var3 = var5.entries;
                var9 = var3.bind(var5)(var1);
                var3 = var9.length;
                var8 = 0;
                var3 = var8 < var3;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                if (!var3) {
                    _fun30237_ip = 123;
                    continue _fun30237
                }
            case 71:
                var10 = var9[var5];
                var3 = _closure1_slot7;
                var10 = var3.bind(var0)(var10, var7);
                var3 = var10[var8];
                var11 = var10[var6];
                var10 = _closure1_slot30;
                var10 = var10.AUTO_PROBING;
                if (!(var11 === var10)) {
                    _fun30237_ip = 111;
                    continue _fun30237
                }
            case 107:
                var3 = delete var1[var3];
            case 111:
                var5 = var5 + 1;
                var3 = var9.length;
                if (var5 < var3) {
                    _fun30237_ip = 71;
                    continue _fun30237
                }
            case 123:
                var3 = _closure1_slot164;
                var2 = {};
                var2.videoToggleStateMap = var1;
                var1 = false;
                var1 = var3.bind(var0)(var2, var4, var1);
                return var0;
        }
    };
    var _closure1_slot177 = var0;
    var0 = function arg0() {
        _fun30238: for (var _fun30238_ip = 0;;) switch (_fun30238_ip) {
            case 0:
                var2 = _closure1_slot148;
                var0 = undefined;
                var9 = var2.bind(var0)();
                var3 = _closure1_slot73;
                var2 = var3.getAudioSubsystem;
                var8 = var2.bind(var3)();
                var3 = _closure1_slot73;
                var2 = var3.getAudioLayer;
                var7 = var2.bind(var3)();
                var4 = _closure1_slot169;
                var3 = _closure1_slot84;
                var2 = var9.inputDeviceId;
                var3 = var4.bind(var0)(var3, var2);
                var2 = _closure1_slot84;
                var2 = var2[var3];
                var3 = null;
                var3 = var3 == var2;
                var6 = undefined;
                if (var3) {
                    _fun30238_ip = 85;
                    continue _fun30238
                }
            case 80:
                var6 = var2.name;
            case 85:
                var3 = _closure1_slot1;
                var4 = _closure1_slot3;
                var2 = 50;
                var2 = var4[var2];
                var11 = var3.bind(var0)(var2);
                var10 = var9.noiseCancellation;
                var5 = _closure1_slot71;
                var2 = var5.getSystemMicrophoneMode;
                var5 = var2.bind(var5)();
                var2 = {};
                var12 = 'trackVoiceProcessing';
                var2.location = var12;
                var5 = var11.bind(var0)(var10, var5, var2);
                var2 = 52;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.track;
                var1 = _closure1_slot25;
                var2 = var1.VOICE_PROCESSING;
                var1 = {};
                var10 = var9.echoCancellation;
                var1.echo_cancellation = var10;
                var10 = var9.noiseCancellation;
                var1.noise_cancellation = var10;
                var10 = var9.noiseSuppression;
                var1.noise_suppression = var10;
                var10 = var9.automaticGainControl;
                var1.automatic_gain_control = var10;
                var10 = arg0;
                var1.location = var10;
                var9 = var9.bypassSystemInputProcessing;
                var1.bypass_system_input_processing = var9;
                var1.audio_subsystem = var8;
                var1.audio_layer = var7;
                var1.input_device = var6;
                var1.effective_noise_cancellation = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var _closure1_slot178 = var0;
    var0 = function() {
        _fun30239: for (var _fun30239_ip = 0;;) switch (_fun30239_ip) {
            case 0:
                var3 = _closure1_slot128;
                var2 = var3.has;
                var1 = 'voice_filter_preview';
                var1 = var2.bind(var3)(var1);
                var2 = !var1;
                if (!var2) {
                    _fun30239_ip = 52;
                    continue _fun30239
                }
            case 29:
                var4 = _closure1_slot128;
                var3 = var4.has;
                var1 = 'mic_test';
                var1 = var3.bind(var4)(var1);
                var2 = !var1;
            case 52:
                var1 = _closure1_slot73;
                var0 = var1.setMaybePreprocessMute;
                var0 = var0.bind(var1)(var2);
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot179 = var0;
    var0 = function() {
        _fun30240: for (var _fun30240_ip = 0;;) switch (_fun30240_ip) {
            case 0:
                var2 = _closure1_slot148;
                var0 = undefined;
                var2 = var2.bind(var0)();
                var3 = _closure1_slot128;
                var4 = var3.size;
                var3 = 0;
                var4 = var4 > var3;
                var7 = var2.inputDeviceId;
                var5 = _closure1_slot19;
                var3 = var5.hasEchoCancellation;
                var10 = var3.bind(var5)(var7);
                if (var10) {
                    _fun30240_ip = 58;
                    continue _fun30240
                }
            case 52:
                var10 = var2.echoCancellation;
            case 58:
                var5 = _closure1_slot19;
                var3 = var5.hasNoiseSuppression;
                var9 = var3.bind(var5)(var7);
                if (var9) {
                    _fun30240_ip = 82;
                    continue _fun30240
                }
            case 76:
                var9 = var2.noiseSuppression;
            case 82:
                var5 = _closure1_slot154;
                var6 = _closure1_slot19;
                var3 = var6.hasAutomaticGainControl;
                var3 = var3.bind(var6)(var7);
                if (var3) {
                    _fun30240_ip = 110;
                    continue _fun30240
                }
            case 104:
                var3 = var2.automaticGainControl;
            case 110:
                var8 = var5.bind(var0)(var3);
                var6 = var2.noiseCancellation;
                var7 = _closure1_slot114;
                var5 = _closure1_slot128;
                var3 = var5.has;
                var2 = 'voice_filter';
                var5 = var3.bind(var5)(var2);
                if (!var5) {
                    _fun30240_ip = 164;
                    continue _fun30240
                }
            case 148:
                var2 = _closure1_slot128;
                var3 = var2.size;
                var2 = 1;
                var5 = var2 === var3;
            case 164:
                var3 = _closure1_slot73;
                var2 = var3.setLoopback;
                var1 = {};
                var1.echoCancellation = var10;
                var10 = !var4;
                var1.echoCancellationPreEcho = var10;
                var1.noiseSuppression = var9;
                var1.automaticGainControlConfig = var8;
                var1.noiseCancellation = var6;
                var6 = null;
                var6 = var6 !== var7;
                var1.voiceFilters = var6;
                var1.loopbackUseAudioMode = var5;
                var1 = var2.bind(var3)(var4, var1);
                return var0;
        }
    };
    var _closure1_slot180 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot10;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun30243: for (var _fun30243_ip = 0;;) switch (_fun30243_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun30243_ip = 232;
                            continue _fun30243
                        }
                    case 10:
                        var4 = _closure1_slot73;
                        var2 = var4.supports;
                        var1 = _closure1_slot47;
                        var1 = var1.VAAPI;
                        var1 = var2.bind(var4)(var1);
                        if (!var1) {
                            _fun30243_ip = 224;
                            continue _fun30243
                        }
                    case 44:
                        var1 = global;
                        var2 = var1.window;
                        var6 = var2.DiscordNative;
                        var2 = null;
                        var7 = var2 == var6;
                        var4 = undefined;
                        if (var7) {
                            _fun30243_ip = 90;
                            continue _fun30243
                        }
                    case 69:
                        var6 = var6.processUtils;
                        var7 = var2 == var6;
                        var4 = undefined;
                        if (var7) {
                            _fun30243_ip = 90;
                            continue _fun30243
                        }
                    case 84:
                        var4 = var6.getSystemInfo;
                    case 90:
                        if (!(var2 != var4)) {
                            _fun30243_ip = 224;
                            continue _fun30243
                        }
                    case 97:
                        var1 = var1.window;
                        var1 = var1.DiscordNative;
                        var4 = var1.processUtils;
                        var1 = var4.getSystemInfo;
                        var1 = var1.bind(var4)();
                        SaveGenerator(address = 129);
                    case 127:
                        return var1;
                    case 129:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun30243_ip = 229;
                            continue _fun30243
                        }
                    case 135:
                        var4 = var1.electronGPUInfo;
                        var6 = var2 == var4;
                        var5 = undefined;
                        if (var6) {
                            _fun30243_ip = 160;
                            continue _fun30243
                        }
                    case 152:
                        var5 = var4.gpuDevice;
                    case 160:
                        if (!(var2 == var5)) {
                            _fun30243_ip = 168;
                            continue _fun30243
                        }
                    case 164:
                        var5 = new Array(0);
                    case 168:
                        var4 = var5.some;
                        var2 = function(arg0) { // Environment: var2
                            var0 = arg0;
                            var1 = var0.vendorId;
                            var0 = 4098;
                            var0 = var0 === var1;
                            return var0;
                        };
                        var2 = var4.bind(var5)(var2);
                        if (!var2) {
                            _fun30243_ip = 224;
                            continue _fun30243
                        }
                    case 189:
                        var2 = true;
                        _closure1_slot136 = var2;
                        var5 = _closure1_slot73;
                        var4 = var5.supports;
                        var2 = _closure1_slot47;
                        var2 = var2.GAMESCOPE_CAPTURE;
                        var2 = var4.bind(var5)(var2);
                        _closure1_slot135 = var2;
                    case 224:
                        var2 = undefined;
                        return var2;
                    case 229:
                        return var1;
                    case 232:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot181 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot181 = var0;
    var0 = function() {
        _fun30245: for (var _fun30245_ip = 0;;) switch (_fun30245_ip) {
            case 0:
                var0 = _closure1_slot108;
                if (var0) {
                    _fun30245_ip = 12;
                    continue _fun30245
                }
            case 10:
                var0 = true;
            case 12:
                return var0;
        }
    };
    var _closure1_slot182 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot10;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun30248: for (var _fun30248_ip = 0;;) switch (_fun30248_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun30248_ip = 564;
                            continue _fun30248
                        }
                    case 10:
                        var1 = undefined;
                        var10 = undefined;
                        var4 = undefined;
                        var7 = undefined;
                        var3 = undefined;
                    case 20: // try_start_0 // try_start_1
                        var8 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var12 = 73;
                        var2 = var2[var12];
                        var8 = var8.bind(var1)(var2);
                        var2 = var8.ensureModule;
                        var11 = 'discord_krisp';
                        var2 = var2.bind(var8)(var11);
                        SaveGenerator(address = 64);
                    case 62:
                        return var2;
                    case 64:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 8);
                        if (var8) {
                            _fun30248_ip = 257;
                            continue _fun30248
                        }
                    case 73:
                        var9 = _closure1_slot1;
                        var8 = _closure1_slot3;
                        var8 = var8[var12];
                        var9 = var9.bind(var1)(var8);
                        var8 = var9.requireModule;
                        var8 = var8.bind(var9)(var11);
                        var4 = var8;
                        var9 = true;
                        _closure1_slot108 = var9;
                        var8 = var8.getSdkVersion;
                        var9 = null;
                        var11 = var9 == var8;
                        var8 = undefined;
                        if (var11) {
                            _fun30248_ip = 140;
                            continue _fun30248
                        }
                    case 127:
                        var12 = var4;
                        var11 = var12.getSdkVersion;
                        var8 = var11.bind(var12)();
                    case 140:
                        _closure1_slot109 = var8;
                        var8 = var4;
                        var8 = var8.getSuppressionLevel;
                        var11 = var9 == var8;
                        var8 = undefined;
                        if (var11) {
                            _fun30248_ip = 175;
                            continue _fun30248
                        }
                    case 162:
                        var12 = var4;
                        var11 = var12.getSuppressionLevel;
                        var8 = var11.bind(var12)();
                    case 175:
                        var10 = var8;
                        var11 = var9 != var8;
                        var8 = 100;
                        if (!var11) {
                            _fun30248_ip = 191;
                            continue _fun30248
                        }
                    case 188:
                        var8 = var10;
                    case 191:
                        _closure1_slot110 = var8;
                        var8 = var4;
                        var8 = var8.getNcModels;
                        if (!(var9 != var8)) {
                            _fun30248_ip = 238;
                            continue _fun30248
                        }
                    case 208:
                        var8 = var4;
                        var4 = var8.getNcModels;
                        var9 = var4.bind(var8)();
                        var8 = var9.then;
                        var4 = function(arg0) { // Environment: var4
                            var1 = arg0;
                            _closure1_slot112 = var1;
                            var1 = _closure1_slot71;
                            var0 = var1.emitChange;
                            var0 = var0.bind(var1)();
                            var0 = undefined;
                            return var0;
                        };
                        var4 = var8.bind(var9)(var4);
                    case 238:
                        var8 = _closure1_slot71;
                        var4 = var8.emitChange;
                        var4 = var4.bind(var8)();
                    case 252: // try_end0
                        _fun30248_ip = 539;
                        continue _fun30248;
                    case 257: // try_end1
                        var4 = false;
                        _closure1_slot107 = var4;
                        return var2;
                    case 266: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register = 6);
                        var5 = var6;
                        var10 = _closure1_slot61;
                        var9 = var10.warn;
                        var12 = var6.message;
                        var4 = global;
                        var8 = var4.HermesInternal;
                        var11 = var8.concat;
                        var8 = 'Failed to load Krisp module: ';
                        var8 = var11.bind(var8)(var12);
                        var8 = var9.bind(var10)(var8);
                        var9 = _closure1_slot1;
                        var10 = _closure1_slot3;
                        var8 = 86;
                        var8 = var10[var8];
                        var9 = var9.bind(var1)(var8);
                        var8 = var9.captureException;
                        var8 = var8.bind(var9)(var6);
                        var8 = _closure1_slot54;
                        var7 = var8.INITIALIZED;
                        var8 = var6.message;
                        var6 = var8.includes;
                        var11 = ': ';
                        var6 = var6.bind(var8)(var11);
                        if (!var6) {
                            _fun30248_ip = 473;
                            continue _fun30248
                        }
                    case 382:
                        var6 = var4.parseInt;
                        var9 = var5.message;
                        var8 = var9.substring;
                        var10 = var5.message;
                        var5 = var10.indexOf;
                        var10 = var5.bind(var10)(var11);
                        var5 = 1;
                        var5 = var10 + var5;
                        var5 = var8.bind(var9)(var5);
                        var5 = var6.bind(var1)(var5);
                        var3 = var5;
                        var4 = var4.isNaN;
                        var4 = var4.bind(var1)(var5);
                        if (var4) {
                            _fun30248_ip = 460;
                            continue _fun30248
                        }
                    case 449:
                        var5 = var3;
                        var4 = 0;
                        if (!(var4 !== var5)) {
                            _fun30248_ip = 460;
                            continue _fun30248
                        }
                    case 458:
                        _fun30248_ip = 470;
                        continue _fun30248;
                    case 460:
                        var4 = _closure1_slot54;
                        var3 = var4.INITIALIZED;
                    case 470:
                        var7 = var3;
                    case 473:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var3 = 52;
                        var3 = var5[var3];
                        var6 = var4.bind(var1)(var3);
                        var5 = var6.track;
                        var3 = _closure1_slot25;
                        var4 = var3.VOICE_PROCESSING;
                        var3 = {};
                        var3.noise_canceller_error = var7;
                        var3 = var5.bind(var6)(var4, var3);
                        var3 = _closure1_slot164;
                        var2 = {};
                        var4 = false;
                        var2.noiseCancellation = var4;
                        var2 = var3.bind(var1)(var2);
                    case 539: // try_end2
                        var2 = false;
                        _closure1_slot107 = var2;
                        return var1;
                    case 551: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register = 1);
                        var2 = false;
                        _closure1_slot107 = var2;
                        throw var1;
                    case 564:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot183 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot183 = var0;
    var0 = function() {
        _fun30250: for (var _fun30250_ip = 0;;) switch (_fun30250_ip) {
            case 0:
                var3 = _closure1_slot0;
                var0 = _closure1_slot3;
                var4 = 30;
                var2 = var0[var4];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.isWindows;
                var2 = var2.bind(var3)();
                if (var2) {
                    _fun30250_ip = 65;
                    continue _fun30250
                }
            case 38:
                var5 = _closure1_slot0;
                var3 = _closure1_slot3;
                var3 = var3[var4];
                var5 = var5.bind(var0)(var3);
                var3 = var5.isLinux;
                var2 = var3.bind(var5)();
            case 65:
                if (var2) {
                    _fun30250_ip = 95;
                    continue _fun30250
                }
            case 68:
                var5 = _closure1_slot0;
                var3 = _closure1_slot3;
                var3 = var3[var4];
                var5 = var5.bind(var0)(var3);
                var3 = var5.isMac;
                var2 = var3.bind(var5)();
            case 95:
                if (!var2) {
                    _fun30250_ip = 134;
                    continue _fun30250
                }
            case 98:
                var2 = _closure1_slot107;
                if (var2) {
                    _fun30250_ip = 134;
                    continue _fun30250
                }
            case 105:
                var2 = _closure1_slot108;
                if (var2) {
                    _fun30250_ip = 134;
                    continue _fun30250
                }
            case 112:
                var2 = true;
                _closure1_slot107 = var2;
                var2 = function() {
                    var0 = undefined;
                    var3 = _closure1_slot183;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var2 = var2.bind(var0)();
                _fun30250_ip = 262;
                continue _fun30250;
            case 134:
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var4];
                var3 = var3.bind(var0)(var2);
                var2 = var3.isWeb;
                var2 = var2.bind(var3)();
                if (!var2) {
                    _fun30250_ip = 192;
                    continue _fun30250
                }
            case 164:
                var5 = _closure1_slot73;
                var3 = var5.supports;
                var2 = _closure1_slot47;
                var2 = var2.NOISE_CANCELLATION;
                var2 = var3.bind(var5)(var2);
                if (var2) {
                    _fun30250_ip = 242;
                    continue _fun30250
                }
            case 192:
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var4];
                var3 = var3.bind(var0)(var2);
                var2 = var3.isWeb;
                var2 = var2.bind(var3)();
                if (!var2) {
                    _fun30250_ip = 262;
                    continue _fun30250
                }
            case 222:
                var3 = _closure1_slot164;
                var2 = {};
                var4 = false;
                var2.noiseCancellation = var4;
                var2 = var3.bind(var0)(var2);
                _fun30250_ip = 262;
                continue _fun30250;
            case 242:
                var2 = true;
                _closure1_slot108 = var2;
                var2 = _closure1_slot71;
                var1 = var2.emitChange;
                var1 = var1.bind(var2)();
            case 262:
                return var0;
        }
    };
    var _closure1_slot184 = var0;
    var7 = function() {
        var2 = _closure1_slot164;
        var1 = {};
        var0 = null;
        var1.mostRecentlyRequestedVoiceFilter = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var0 = function arg0() {
        _fun30253: for (var _fun30253_ip = 0;;) switch (_fun30253_ip) {
            case 0:
                var3 = arg0;
                var1 = _closure1_slot46;
                var1 = var1.AUTOMATIC;
                if (!(var3 !== var1)) {
                    _fun30253_ip = 57;
                    continue _fun30253
                }
            case 20:
                var4 = _closure1_slot164;
                var2 = {};
                var1 = false;
                var2.automaticAudioSubsystem = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var2);
                var2 = _closure1_slot73;
                var1 = var2.setAudioSubsystem;
                var1 = var1.bind(var2)(var3);
                _fun30253_ip = 85;
                continue _fun30253;
            case 57:
                var3 = _closure1_slot164;
                var2 = {};
                var1 = true;
                var2.automaticAudioSubsystem = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var0 = _closure1_slot186;
                var0 = var0.bind(var1)();
            case 85:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot185 = var0;
    var0 = function() {
        var2 = _closure1_slot73;
        var1 = var2.queueAudioSubsystem;
        var0 = _closure1_slot46;
        var0 = var0.EXPERIMENTAL;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot186 = var0;
    var10 = function arg0() {
        _fun30255: for (var _fun30255_ip = 0;;) switch (_fun30255_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.section;
                var1 = _closure1_slot29;
                var1 = var1.VOICE;
                if (!(var2 === var1)) {
                    _fun30255_ip = 35;
                    continue _fun30255
                }
            case 25:
                var1 = _closure1_slot166;
                var0 = undefined;
                var0 = var1.bind(var0)();
            case 35:
                var0 = false;
                return var0;
        }
    };
    var0 = function arg0() {
        _fun30256: for (var _fun30256_ip = 0;;) switch (_fun30256_ip) {
            case 0:
                var3 = arg0;
                var1 = var3.taskMetrics;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun30256_ip = 440;
                    continue _fun30256
                }
            case 20:
                var1 = var3.taskMetrics;
                var1 = var1.length;
                var13 = 0;
                if (!(var13 !== var1)) {
                    _fun30256_ip = 440;
                    continue _fun30256
                }
            case 40:
                var1 = var3.taskMetrics;
                var4 = var1.length;
                var1 = 1;
                if (!(var1 !== var4)) {
                    _fun30256_ip = 438;
                    continue _fun30256
                }
            case 61:
                var1 = {
                    'metrics_period_ms': null,
                    'total_tasks': 0,
                    'total_exec_time_ns': 0
                };
                var4 = var3.periodMs;
                var1.metrics_period_ms = var4;
                var4 = var3.queueName;
                var1.queue_name = var4;
                var6 = var3.taskMetrics;
                var5 = var6.reduce;
                var4 = function(arg0, arg1) { // Environment: var2
                    var0 = arg1;
                    var1 = var0.count;
                    var0 = arg0;
                    var0 = var0 + var1;
                    return var0;
                };
                var4 = var5.bind(var6)(var4, var13);
                var1.total_tasks = var4;
                var6 = var3.taskMetrics;
                var5 = var6.reduce;
                var4 = function(arg0, arg1) { // Environment: var2
                    var0 = arg1;
                    var1 = var0.totalExecTimeNs;
                    var0 = arg0;
                    var0 = var0 + var1;
                    return var0;
                };
                var4 = var5.bind(var6)(var4, var13);
                var1.total_exec_time_ns = var4;
                var17 = var3.taskMetrics;
                var6 = new Array(0);
                var18 = var6;
                var16 = 0;
                var4 = arraySpread(var18, var17, var16);
                var5 = var6.sort;
                var4 = function(arg0, arg1) { // Environment: var2
                    var0 = arg1;
                    var1 = var0.longestExecTimeNs;
                    var0 = arg0;
                    var0 = var0.longestExecTimeNs;
                    var0 = var1 - var0;
                    return var0;
                };
                var4 = var5.bind(var6)(var4);
                var17 = var3.taskMetrics;
                var5 = new Array(0);
                var18 = var5;
                var3 = arraySpread(var18, var17, var16);
                var3 = var5.sort;
                var2 = function(arg0, arg1) { // Environment: var2
                    var0 = arg1;
                    var1 = var0.longestQueueTimeNs;
                    var0 = arg0;
                    var0 = var0.longestQueueTimeNs;
                    var0 = var1 - var0;
                    return var0;
                };
                var9 = var3.bind(var5)(var2);
                var8 = 3;
                var2 = global;
                var7 = 'delayed_task_';
                var6 = '_name';
                var5 = '_longest_queue_time_ns';
                var12 = 'slow_task_';
                var11 = '_longest_exec_time_ns';
                var10 = 0;
            case 263:
                var3 = var4.length;
                if (!(var10 < var3)) {
                    _fun30256_ip = 329;
                    continue _fun30256
                }
            case 272:
                var3 = var4[var10];
                var14 = var2.HermesInternal;
                var14 = var14.concat;
                var15 = var14.bind(var12)(var10, var6);
                var14 = var3.name;
                var1[var15] = var14;
                var14 = var2.HermesInternal;
                var14 = var14.concat;
                var14 = var14.bind(var12)(var10, var11);
                var3 = var3.longestExecTimeNs;
                var1[var14] = var3;
            case 329:
                var10 = var10 + 1;
                var3 = 0;
                if (var10 < var8) {
                    _fun30256_ip = 263;
                    continue _fun30256
                }
            case 338:
                var10 = var9.length;
                if (!(var3 < var10)) {
                    _fun30256_ip = 404;
                    continue _fun30256
                }
            case 347:
                var10 = var9[var3];
                var11 = var2.HermesInternal;
                var11 = var11.concat;
                var12 = var11.bind(var7)(var3, var6);
                var11 = var10.name;
                var1[var12] = var11;
                var11 = var2.HermesInternal;
                var11 = var11.concat;
                var11 = var11.bind(var7)(var3, var5);
                var10 = var10.longestQueueTimeNs;
                var1[var11] = var10;
            case 404:
                var3 = var3 + 1;
                if (var3 < var8) {
                    _fun30256_ip = 338;
                    continue _fun30256
                }
            case 411:
                var3 = var2.JSON;
                var2 = var3.stringify;
                var2 = var2.bind(var3)(var4);
                var1.full_task_report = var2;
                return var1;
            case 438:
                return var0;
            case 440:
                return var0;
        }
    };
    var _closure1_slot187 = var0;
    var13 = global;
    var9 = var13.Object;
    var3 = var9.defineProperty;
    var1 = {};
    var11 = true;
    var1.value = var11;
    var0 = '__esModule';
    var0 = var3.bind(var9)(var2, var0, var1);
    var9 = 0;
    var1 = var6[var9];
    var0 = undefined;
    var1 = var8.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var20 = 2;
    var1 = var6[var20];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var23 = 5;
    var1 = var6[var23];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 6;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 7;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = 8;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot11 = var1;
    var1 = 9;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot12 = var1;
    var1 = 10;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot13 = var1;
    var1 = 11;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot14 = var1;
    var1 = 12;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot15 = var1;
    var1 = 13;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot16 = var1;
    var1 = 14;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot17 = var1;
    var1 = 15;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot18 = var1;
    var1 = 16;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot19 = var1;
    var1 = 17;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot20 = var1;
    var1 = 18;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot21 = var1;
    var1 = 19;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.getSystemAnalyticsInfo;
    var _closure1_slot22 = var1;
    var1 = 20;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot23 = var1;
    var1 = 21;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot24 = var1;
    var1 = 22;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var3 = var1.AnalyticEvents;
    var _closure1_slot25 = var3;
    var3 = var1.AppStates;
    var _closure1_slot26 = var3;
    var24 = var1.InputModes;
    var _closure1_slot27 = var24;
    var3 = var1.RTCConnectionStates;
    var _closure1_slot28 = var3;
    var3 = var1.UserSettingsSections;
    var _closure1_slot29 = var3;
    var3 = var1.VideoToggleState;
    var _closure1_slot30 = var3;
    var1 = var1.ChannelTypes;
    var _closure1_slot31 = var1;
    var1 = 23;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var3 = var1.DARWIN_SCKIT_VERSION;
    var _closure1_slot32 = var3;
    var3 = var1.DARWIN_SCKIT_AUDIO_VERSION;
    var _closure1_slot33 = var3;
    var3 = var1.WINDOWS_GRAPHICS_CAPTURE_NEW_APIS_BUILD;
    var _closure1_slot34 = var3;
    var3 = var1.WINDOWS_GRAPHICS_CAPTURE_NEW_APIS_SEMVER;
    var _closure1_slot35 = var3;
    var3 = var1.WINDOWS_GRAPHICS_CAPTURE_BUILD;
    var _closure1_slot36 = var3;
    var3 = var1.WINDOWS_GRAPHICS_CAPTURE_SEMVER;
    var _closure1_slot37 = var3;
    var3 = var1.WINDOWS_SETTINGS_SOUND_DEVICE_DEEPLINK_SEMVER;
    var _closure1_slot38 = var3;
    var3 = var1.WINDOWS_SOUNDSHARE_HOOK_VERSION;
    var _closure1_slot39 = var3;
    var1 = var1.WINDOWS_SOUNDSHARE_NONHOOK_VERSION;
    var _closure1_slot40 = var1;
    var1 = 24;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var3 = var1.NativePermissionStates;
    var _closure1_slot41 = var3;
    var14 = var1.NativePermissionTypes;
    var _closure1_slot42 = var14;
    var1 = 25;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var3 = var1.ProtoAudioSettingsContextTypes;
    var _closure1_slot43 = var3;
    var1 = var1.UserSettingsTypes;
    var _closure1_slot44 = var1;
    var1 = 26;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var21 = var1.InputProfile;
    var _closure1_slot45 = var21;
    var1 = 27;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var3 = var1.AudioSubsystems;
    var _closure1_slot46 = var3;
    var17 = var1.Features;
    var _closure1_slot47 = var17;
    var3 = var1.DEFAULT_VOLUME;
    var _closure1_slot48 = var3;
    var3 = var1.DEFAULT_STREAM_VOLUME;
    var _closure1_slot49 = var3;
    var18 = var1.DEFAULT_DEVICE_ID;
    var _closure1_slot50 = var18;
    var16 = var1.DISABLED_DEVICE_ID;
    var _closure1_slot51 = var16;
    var3 = var1.ExperimentFlags;
    var _closure1_slot52 = var3;
    var15 = var1.MediaEngineContextTypes;
    var _closure1_slot53 = var15;
    var3 = var1.NoiseCancellerError;
    var _closure1_slot54 = var3;
    var3 = var1.MediaTypes;
    var _closure1_slot55 = var3;
    var3 = var1.QUEUE_METRICS_INTERVAL_MS;
    var _closure1_slot56 = var3;
    var3 = var1.VideoToggleReason;
    var _closure1_slot57 = var3;
    var3 = var1.VIEWERSIDE_CLIP_KFI_MS;
    var _closure1_slot58 = var3;
    var3 = var1.SIMULCAST_HQ_QUALITY;
    var _closure1_slot59 = var3;
    var1 = var1.SIMULCAST_LQ_QUALITY;
    var _closure1_slot60 = var1;
    var1 = 28;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var3 = var1.prototype;
    var12 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var3 = 'MediaEngineStore';
    var29 = var12;
    var28 = var3;
    var1 = new var29[var1](var28, var27);
    var22 = var1 instanceof Object ? var1 : var12;
    var _closure1_slot61 = var22;
    var _closure1_slot62 = var3;
    var1 = {
        'left': 1,
        'right': 1
    };
    var _closure1_slot63 = var1;
    var1 = 29;
    var12 = var6[var1];
    var12 = var8.bind(var0)(var12);
    var12 = var12.Millis;
    var12 = var12.SECOND;
    var12 = var23 * var12;
    var _closure1_slot64 = var12;
    var12 = var6[var1];
    var12 = var8.bind(var0)(var12);
    var12 = var12.Millis;
    var12 = var12.SECOND;
    var12 = var20 * var12;
    var _closure1_slot65 = var12;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var1 = var1.Millis;
    var12 = var1.SECOND;
    var1 = 30;
    var1 = var1 * var12;
    var _closure1_slot66 = var1;
    var _closure1_slot67 = var11;
    var1 = 'deep_noise_suppression';
    var _closure1_slot68 = var1;
    var _closure1_slot69 = var9;
    var12 = null;
    var _closure1_slot70 = var12;
    var20 = {};
    var23 = var21.CUSTOM;
    var9 = {};
    var20[var23] = var9;
    var25 = var21.VOICE_ISOLATION;
    var23 = {
        'modeOptions': null,
        'echoCancellation': true,
        'noiseSuppression': false,
        'automaticGainControl': true,
        'noiseCancellation': true,
        'bypassSystemInputProcessing': true
    };
    var9 = {
        'autoThreshold': true,
        'vadUseKrisp': true
    };
    var23.modeOptions = var9;
    var9 = false;
    var20[var25] = var23;
    var23 = var21.STUDIO;
    var21 = {
        'mode': null,
        'modeOptions': null,
        'echoCancellation': false,
        'noiseSuppression': false,
        'automaticGainControl': false,
        'noiseCancellation': false,
        'bypassSystemInputProcessing': true
    };
    var24 = var24.VOICE_ACTIVITY;
    var21.mode = var24;
    var24 = {
        'threshold': 4294967212,
        'autoThreshold': false,
        'vadUseKrisp': false
    };
    var21.modeOptions = var24;
    var20[var23] = var21;
    var _closure1_slot72 = var20;
    var20 = 33;
    var21 = var6[var20];
    var23 = var5.bind(var0)(var21);
    var21 = var23.initializeMediaEngine;
    var20 = var6[var20];
    var24 = var5.bind(var0)(var20);
    var20 = var24.determineMediaEngine;
    var20 = var20.bind(var24)();
    var21 = var21.bind(var23)(var20);
    var _closure1_slot73 = var21;
    var20 = var22.enableNativeLogger;
    var20 = var20.bind(var22)(var11);
    var20 = {};
    var _closure1_slot77 = var20;
    var23 = var13.Set;
    var22 = var15.DEFAULT;
    var20 = new Array(1);
    var20[0] = var22;
    var22 = var23.prototype;
    var22 = Object.create(var22, {
        constructor: {
            value: var23
        }
    });
    var29 = var22;
    var28 = var20;
    var20 = new var29[var23](var28, var27);
    var20 = var20 instanceof Object ? var20 : var22;
    var _closure1_slot78 = var20;
    var20 = var21.supports;
    var17 = var17.AUTO_ENABLE;
    var17 = var20.bind(var21)(var17);
    var _closure1_slot79 = var17;
    var _closure1_slot80 = var9;
    var15 = var15.STREAM;
    var _closure1_slot81 = var15;
    var17 = var13.performance;
    var15 = var17.now;
    var15 = var15.bind(var17)();
    var _closure1_slot82 = var15;
    var _closure1_slot83 = var12;
    var15 = {};
    var17 = 'No Input Devices';
    var17 = var19.bind(var0)(var17);
    var15[var18] = var17;
    var _closure1_slot84 = var15;
    var15 = {};
    var17 = 'No Output Devices';
    var17 = var19.bind(var0)(var17);
    var15[var18] = var17;
    var _closure1_slot85 = var15;
    var15 = {};
    var17 = 'No Video Devices';
    var17 = var19.bind(var0)(var17);
    var15[var18] = var17;
    var _closure1_slot86 = var15;
    var15 = 34;
    var17 = var6[var15];
    var17 = var5.bind(var0)(var17);
    var17 = var17.Timeout;
    var18 = var17.prototype;
    var18 = Object.create(var18, {
        constructor: {
            value: var17
        }
    });
    var29 = var18;
    var17 = new var29[var17](var28);
    var17 = var17 instanceof Object ? var17 : var18;
    var _closure1_slot87 = var17;
    var _closure1_slot88 = var9;
    var _closure1_slot89 = var9;
    var _closure1_slot90 = var9;
    var _closure1_slot91 = var9;
    var _closure1_slot92 = var9;
    var _closure1_slot93 = var16;
    var _closure1_slot94 = var16;
    var _closure1_slot95 = var9;
    var _closure1_slot96 = var9;
    var _closure1_slot97 = var9;
    var15 = var6[var15];
    var15 = var5.bind(var0)(var15);
    var15 = var15.Timeout;
    var16 = var15.prototype;
    var16 = Object.create(var16, {
        constructor: {
            value: var15
        }
    });
    var29 = var16;
    var15 = new var29[var15](var28);
    var15 = var15 instanceof Object ? var15 : var16;
    var _closure1_slot98 = var15;
    var _closure1_slot99 = var9;
    var _closure1_slot100 = var9;
    var _closure1_slot101 = var12;
    var _closure1_slot102 = var9;
    var _closure1_slot103 = var9;
    var _closure1_slot104 = var0;
    var _closure1_slot105 = var0;
    var _closure1_slot106 = var9;
    var _closure1_slot107 = var9;
    var _closure1_slot108 = var9;
    var _closure1_slot109 = var0;
    var _closure1_slot110 = var0;
    var _closure1_slot111 = var0;
    var15 = new Array(0);
    var _closure1_slot112 = var15;
    var _closure1_slot113 = var9;
    var _closure1_slot114 = var12;
    var _closure1_slot115 = var12;
    var _closure1_slot116 = var12;
    var _closure1_slot117 = var12;
    var _closure1_slot118 = var12;
    var _closure1_slot119 = var9;
    var _closure1_slot120 = var9;
    var _closure1_slot121 = var9;
    var _closure1_slot122 = var12;
    var _closure1_slot123 = var12;
    var _closure1_slot124 = var9;
    var _closure1_slot125 = var9;
    var15 = 35;
    var16 = var6[var15];
    var19 = var8.bind(var0)(var16);
    var18 = var19.hasPermission;
    var17 = var14.AUDIO;
    var16 = {};
    var16.showAuthorizationError = var9;
    var16 = var18.bind(var19)(var17, var16);
    var15 = var6[var15];
    var17 = var8.bind(var0)(var15);
    var16 = var17.hasPermission;
    var15 = var14.CAMERA;
    var14 = {};
    var14.showAuthorizationError = var9;
    var14 = var16.bind(var17)(var15, var14);
    var14 = var13.Set;
    var15 = var14.prototype;
    var15 = Object.create(var15, {
        constructor: {
            value: var14
        }
    });
    var29 = var15;
    var14 = new var29[var14](var28);
    var14 = var14 instanceof Object ? var14 : var15;
    var _closure1_slot126 = var14;
    var _closure1_slot127 = var11;
    var13 = var13.Set;
    var14 = var13.prototype;
    var14 = Object.create(var14, {
        constructor: {
            value: var13
        }
    });
    var29 = var14;
    var13 = new var29[var13](var28);
    var13 = var13 instanceof Object ? var13 : var14;
    var _closure1_slot128 = var13;
    var _closure1_slot129 = var0;
    var13 = {};
    var _closure1_slot130 = var13;
    var _closure1_slot131 = var12;
    var _closure1_slot132 = var12;
    var _closure1_slot133 = var11;
    var _closure1_slot134 = var9;
    var _closure1_slot135 = var9;
    var _closure1_slot136 = var9;
    var _closure1_slot137 = var9;
    var9 = function() { // Environment: var4
        var3 = _closure1_slot9;
        var2 = function() {
            var2 = this;
            var _closure3_slot0 = var2;
            var _closure3_slot1 = var2;
            var4 = _closure1_slot8;
            var3 = _closure2_slot0;
            var0 = undefined;
            var3 = var4.bind(var0)(var2, var3);
            var3 = 5000;
            var2.noVoiceTimeout = var3;
            var3 = 1500;
            var2.voiceTimeout = var3;
            var3 = false;
            var2.started = var3;
            var1 = function(arg0) { // Environment: var1
                _fun30263: for (var _fun30263_ip = 0;;) switch (_fun30263_ip) {
                    case 0:
                        var0 = arg0;
                        var _closure4_slot0 = var0;
                        var1 = !var0;
                        var _closure4_slot1 = var1;
                        var0 = _closure3_slot0;
                        var2 = var0.stateChangeTimeout;
                        var0 = null;
                        if (!(var0 != var2)) {
                            _fun30263_ip = 60;
                            continue _fun30263
                        }
                    case 35:
                        var0 = global;
                        var4 = var0.clearTimeout;
                        var0 = _closure3_slot0;
                        var2 = var0.stateChangeTimeout;
                        var0 = undefined;
                        var0 = var4.bind(var0)(var2);
                    case 60:
                        var2 = _closure3_slot0;
                        var0 = global;
                        var4 = var0.setTimeout;
                        var6 = _closure1_slot10;
                        var0 = undefined;
                        var3 = function*() { // Environment: var3
                            var0 = function*() { // Original name: ?anon_0_, environment: var0
                                _fun30265: for (var _fun30265_ip = 0;;) switch (_fun30265_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun30265_ip = 159;
                                            continue _fun30265
                                        }
                                    case 10:
                                        var2 = _closure3_slot1;
                                        var1 = null;
                                        var2.stateChangeTimeout = var1;
                                        var1 = _closure4_slot0;
                                        if (!var1) {
                                            _fun30265_ip = 45;
                                            continue _fun30265
                                        }
                                    case 35:
                                        var4 = _closure3_slot1;
                                        var1 = var4.started;
                                    case 45:
                                        if (!var1) {
                                            _fun30265_ip = 71;
                                            continue _fun30265
                                        }
                                    case 48:
                                        var4 = function() {
                                            var0 = undefined;
                                            var3 = _closure1_slot163;
                                            var2 = var3.apply;
                                            var0 = arguments;
                                            var1 = var0;
                                            var0 = this;
                                            var0 = var2.bind(var3)(var0, var1);
                                            return var0;
                                        };
                                        var1 = undefined;
                                        var1 = var4.bind(var1)();
                                        SaveGenerator(address = 65);
                                    case 63:
                                        return var1;
                                    case 65:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                        if (var4) {
                                            _fun30265_ip = 156;
                                            continue _fun30265
                                        }
                                    case 71:
                                        var3 = _closure3_slot1;
                                        var3 = var3.started;
                                        if (!var3) {
                                            _fun30265_ip = 151;
                                            continue _fun30265
                                        }
                                    case 84:
                                        var6 = _closure1_slot1;
                                        var5 = _closure1_slot3;
                                        var4 = 49;
                                        var5 = var5[var4];
                                        var4 = undefined;
                                        var6 = var6.bind(var4)(var5);
                                        var5 = var6.dispatch;
                                        var4 = {};
                                        var7 = 'AUDIO_INPUT_DETECTED';
                                        var4.type = var7;
                                        var7 = _closure4_slot1;
                                        var4.inputDetected = var7;
                                        var4 = var5.bind(var6)(var4);
                                        var2 = _closure4_slot0;
                                        if (!var2) {
                                            _fun30265_ip = 151;
                                            continue _fun30265
                                        }
                                    case 145:
                                        var2 = true;
                                        _closure1_slot103 = var2;
                                    case 151:
                                        var2 = undefined;
                                        return var2;
                                    case 156:
                                        return var1;
                                    case 159:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var3 = var6.bind(var0)(var3);
                        var5 = _closure3_slot0;
                        if (var1) {
                            _fun30263_ip = 106;
                            continue _fun30263
                        }
                    case 98:
                        var1 = var5.noVoiceTimeout;
                        _fun30263_ip = 112;
                        continue _fun30263;
                    case 106:
                        var1 = var5.voiceTimeout;
                    case 112:
                        var1 = var4.bind(var0)(var3, var1);
                        var2.stateChangeTimeout = var1;
                        return var0;
                }
            };
            var2.handleSilence = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'start';
        var0.key = var1;
        var1 = function() {
            _fun30267: for (var _fun30267_ip = 0;;) switch (_fun30267_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.started;
                    if (var1) {
                        _fun30267_ip = 79;
                        continue _fun30267
                    }
                case 12:
                    var1 = true;
                    var0.started = var1;
                    var3 = _closure1_slot73;
                    var2 = var3.on;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 33;
                    var4 = var4[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4);
                    var1 = var1.MediaEngineEvent;
                    var1 = var1.Silence;
                    var0 = var0.handleSilence;
                    var0 = var2.bind(var3)(var1, var0);
                case 79:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(4);
        var1[0] = var0;
        var0 = {};
        var5 = 'stop';
        var0.key = var5;
        var5 = function() {
            _fun30268: for (var _fun30268_ip = 0;;) switch (_fun30268_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.started;
                    if (!var0) {
                        _fun30268_ip = 161;
                        continue _fun30268
                    }
                case 15:
                    var0 = false;
                    var1.started = var0;
                    var2 = var1.stateChangeTimeout;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun30268_ip = 62;
                        continue _fun30268
                    }
                case 35:
                    var2 = global;
                    var4 = var2.clearTimeout;
                    var3 = var1.stateChangeTimeout;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var1.stateChangeTimeout = var0;
                case 62:
                    var6 = _closure1_slot73;
                    var5 = var6.removeListener;
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 33;
                    var4 = var3[var2];
                    var2 = undefined;
                    var4 = var7.bind(var2)(var4);
                    var4 = var4.MediaEngineEvent;
                    var4 = var4.Silence;
                    var1 = var1.handleSilence;
                    var1 = var5.bind(var6)(var4, var1);
                    var1 = _closure1_slot1;
                    var0 = 49;
                    var0 = var3[var0];
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.dispatch;
                    var0 = {
                        'type': 'AUDIO_INPUT_DETECTED',
                        'inputDetected': null
                    };
                    var0 = var1.bind(var2)(var0);
                case 161:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'update';
        var0.key = var5;
        var5 = function() {
            _fun30269: for (var _fun30269_ip = 0;;) switch (_fun30269_ip) {
                case 0:
                    var2 = this;
                    var1 = _closure1_slot148;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    var4 = _closure1_slot102;
                    if (var4) {
                        _fun30269_ip = 90;
                        continue _fun30269
                    }
                case 23:
                    var5 = _closure1_slot21;
                    var4 = var5.getState;
                    var5 = var4.bind(var5)();
                    var4 = _closure1_slot28;
                    var4 = var4.RTC_CONNECTED;
                    if (!(var5 === var4)) {
                        _fun30269_ip = 90;
                        continue _fun30269
                    }
                case 51:
                    var4 = var1.mode;
                    var3 = _closure1_slot27;
                    var3 = var3.VOICE_ACTIVITY;
                    if (!(var4 === var3)) {
                        _fun30269_ip = 90;
                        continue _fun30269
                    }
                case 70:
                    var1 = var1.silenceWarning;
                    if (!var1) {
                        _fun30269_ip = 90;
                        continue _fun30269
                    }
                case 79:
                    var1 = var2.start;
                    var1 = var1.bind(var2)();
                    _fun30269_ip = 100;
                    continue _fun30269;
                case 90:
                    var1 = var2.stop;
                    var1 = var1.bind(var2)();
                case 100:
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'reset';
        var0.key = var5;
        var4 = function() {
            var1 = this;
            var0 = var1.stop;
            var0 = var0.bind(var1)();
            var0 = var1.update;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var4;
        var1[3] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var9 = var9.bind(var0)();
    var11 = var9.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var9
        }
    });
    var29 = var11;
    var9 = new var29[var9](var28);
    var9 = var9 instanceof Object ? var9 : var11;
    var _closure1_slot138 = var9;
    var9 = 89;
    var9 = var6[var9];
    var9 = var8.bind(var0)(var9);
    var11 = var9.Store;
    var9 = function(arg0) { // Environment: var4
        var3 = function() {
            _fun30272: for (var _fun30272_ip = 0;;) switch (_fun30272_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot8;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot139;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun30272_ip = 69;
                        continue _fun30272
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun30272_ip = 105;
                    continue _fun30272;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot9;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            _fun30273: for (var _fun30273_ip = 0;;) switch (_fun30273_ip) {
                case 0:
                    var15 = this;
                    var3 = _closure1_slot158;
                    var0 = undefined;
                    var3 = var3.bind(var0)();
                    var3 = function() {
                        _fun30274: for (var _fun30274_ip = 0;;) switch (_fun30274_ip) {
                            case 0:
                                var3 = _closure1_slot0;
                                var0 = _closure1_slot3;
                                var5 = 74;
                                var2 = var0[var5];
                                var0 = undefined;
                                var2 = var3.bind(var0)(var2);
                                var3 = var2.Storage;
                                var2 = var3.get;
                                var6 = 'audio';
                                var12 = var2.bind(var3)(var6);
                                var3 = null;
                                if (!(var3 != var12)) {
                                    _fun30274_ip = 132;
                                    continue _fun30274
                                }
                            case 51:
                                var4 = _closure1_slot0;
                                var2 = _closure1_slot3;
                                var7 = var2[var5];
                                var7 = var4.bind(var0)(var7);
                                var10 = var7.Storage;
                                var9 = var10.set;
                                var8 = _closure1_slot62;
                                var7 = {};
                                var11 = _closure1_slot53;
                                var11 = var11.DEFAULT;
                                var7[var11] = var12;
                                var7 = var9.bind(var10)(var8, var7);
                                var2 = var2[var5];
                                var2 = var4.bind(var0)(var2);
                                var4 = var2.Storage;
                                var2 = var4.remove;
                                var2 = var2.bind(var4)(var6);
                            case 132:
                                var4 = _closure1_slot0;
                                var2 = _closure1_slot3;
                                var2 = var2[var5];
                                var2 = var4.bind(var0)(var2);
                                var5 = var2.Storage;
                                var4 = var5.get;
                                var2 = _closure1_slot62;
                                var2 = var4.bind(var5)(var2);
                                if (!(var3 == var2)) {
                                    _fun30274_ip = 175;
                                    continue _fun30274
                                }
                            case 173:
                                var2 = {};
                            case 175:
                                _closure1_slot77 = var2;
                                var3 = _closure1_slot1;
                                var4 = _closure1_slot3;
                                var2 = 42;
                                var2 = var4[var2];
                                var5 = var3.bind(var0)(var2);
                                var4 = var5.each;
                                var3 = _closure1_slot77;
                                var2 = function(arg0) { // Environment: var2
                                    _fun30275: for (var _fun30275_ip = 0;;) switch (_fun30275_ip) {
                                        case 0:
                                            var2 = arg0;
                                            var4 = _closure1_slot1;
                                            var3 = _closure1_slot3;
                                            var0 = 42;
                                            var3 = var3[var0];
                                            var0 = undefined;
                                            var5 = var4.bind(var0)(var3);
                                            var4 = var5.defaultsDeep;
                                            var3 = _closure1_slot143;
                                            var3 = var3.bind(var0)();
                                            var3 = var4.bind(var5)(var2, var3);
                                            var3 = var2.modeOptions;
                                            var4 = null;
                                            var3 = var4 != var3;
                                            if (!var3) {
                                                _fun30275_ip = 86;
                                                continue _fun30275
                                            }
                                        case 63:
                                            var5 = var2.modeOptions;
                                            var5 = var5.shortcut;
                                            var6 = 'string';
                                            var5 = typeof var5;
                                            var3 = var6 === var5;
                                        case 86:
                                            if (!var3) {
                                                _fun30275_ip = 144;
                                                continue _fun30275
                                            }
                                        case 89:
                                            var5 = var2.modeOptions;
                                            var6 = _closure1_slot0;
                                            var7 = _closure1_slot3;
                                            var3 = 75;
                                            var3 = var7[var3];
                                            var7 = var6.bind(var0)(var3);
                                            var6 = var7.toCombo;
                                            var3 = var2.modeOptions;
                                            var3 = var3.shortcut;
                                            var3 = var6.bind(var7)(var3);
                                            var5.shortcut = var3;
                                        case 144:
                                            var3 = var2.modeOptions;
                                            var3 = var4 != var3;
                                            if (!var3) {
                                                _fun30275_ip = 170;
                                                continue _fun30275
                                            }
                                        case 157:
                                            var6 = var2.vadUseKrispSettingVersion;
                                            var5 = 4;
                                            var3 = var5 !== var6;
                                        case 170:
                                            if (!var3) {
                                                _fun30275_ip = 196;
                                                continue _fun30275
                                            }
                                        case 173:
                                            var3 = 4;
                                            var2.vadUseKrispSettingVersion = var3;
                                            var5 = var2.modeOptions;
                                            var3 = true;
                                            var5.vadUseKrisp = var3;
                                        case 196:
                                            var3 = var2.qosMigrated;
                                            if (var3) {
                                                _fun30275_ip = 221;
                                                continue _fun30275
                                            }
                                        case 205:
                                            var3 = true;
                                            var2.qosMigrated = var3;
                                            var3 = false;
                                            var2.qos = var3;
                                        case 221:
                                            var3 = var2.vadThrehsoldMigrated;
                                            if (var3) {
                                                _fun30275_ip = 287;
                                                continue _fun30275
                                            }
                                        case 230:
                                            var3 = true;
                                            var2.vadThrehsoldMigrated = var3;
                                            var3 = var2.modeOptions;
                                            var5 = var4 == var3;
                                            var4 = undefined;
                                            if (var5) {
                                                _fun30275_ip = 259;
                                                continue _fun30275
                                            }
                                        case 253:
                                            var4 = var3.threshold;
                                        case 259:
                                            var3 = -40;
                                            if (!(var3 === var4)) {
                                                _fun30275_ip = 287;
                                                continue _fun30275
                                            }
                                        case 269:
                                            var4 = var2.modeOptions;
                                            var3 = -60;
                                            var4.threshold = var3;
                                        case 287:
                                            var5 = _closure1_slot73;
                                            var4 = var5.supports;
                                            var3 = _closure1_slot47;
                                            var3 = var3.SIDECHAIN_COMPRESSION;
                                            var3 = var4.bind(var5)(var3);
                                            if (!var3) {
                                                _fun30275_ip = 328;
                                                continue _fun30275
                                            }
                                        case 315:
                                            var5 = var2.sidechainCompressionSettingVersion;
                                            var4 = 1;
                                            var3 = var5 < var4;
                                        case 328:
                                            if (!var3) {
                                                _fun30275_ip = 348;
                                                continue _fun30275
                                            }
                                        case 331:
                                            var3 = 1;
                                            var2.sidechainCompressionSettingVersion = var3;
                                            var3 = true;
                                            var2.sidechainCompression = var3;
                                        case 348:
                                            var3 = _closure1_slot0;
                                            var4 = _closure1_slot3;
                                            var1 = 30;
                                            var1 = var4[var1];
                                            var3 = var3.bind(var0)(var1);
                                            var1 = var3.isWeb;
                                            var1 = var1.bind(var3)();
                                            if (var1) {
                                                _fun30275_ip = 418;
                                                continue _fun30275
                                            }
                                        case 381:
                                            var3 = var2.ncUseKrispSettingVersion;
                                            var1 = 1;
                                            if (!(var1 !== var3)) {
                                                _fun30275_ip = 453;
                                                continue _fun30275
                                            }
                                        case 394:
                                            var2.ncUseKrispSettingVersion = var1;
                                            var1 = false;
                                            var2.noiseSuppression = var1;
                                            var1 = true;
                                            var2.noiseCancellation = var1;
                                            _fun30275_ip = 453;
                                            continue _fun30275;
                                        case 418:
                                            var3 = var2.ncUseKrispjsSettingVersion;
                                            var1 = 1;
                                            if (!(var1 !== var3)) {
                                                _fun30275_ip = 453;
                                                continue _fun30275
                                            }
                                        case 431:
                                            var2.ncUseKrispjsSettingVersion = var1;
                                            var1 = false;
                                            var2.noiseSuppression = var1;
                                            var1 = true;
                                            var2.noiseCancellation = var1;
                                        case 453:
                                            return var0;
                                    }
                                };
                                var2 = var4.bind(var5)(var3, var2);
                                var1 = _closure1_slot165;
                                var1 = var1.bind(var0)();
                                return var0;
                        }
                    };
                    var3 = var3.bind(var0)();
                    var3 = _closure1_slot184;
                    var3 = var3.bind(var0)();
                    var3 = _closure1_slot177;
                    var3 = var3.bind(var0)();
                    var3 = function() {
                        _fun30276: for (var _fun30276_ip = 0;;) switch (_fun30276_ip) {
                            case 0:
                                var4 = _closure1_slot0;
                                var0 = _closure1_slot3;
                                var5 = 30;
                                var3 = var0[var5];
                                var0 = undefined;
                                var4 = var4.bind(var0)(var3);
                                var3 = var4.isDesktop;
                                var3 = var3.bind(var4)();
                                if (!var3) {
                                    _fun30276_ip = 110;
                                    continue _fun30276
                                }
                            case 40:
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot3;
                                var3 = var3[var5];
                                var3 = var4.bind(var0)(var3);
                                var3 = var3.isPlatformEmbedded;
                                if (!var3) {
                                    _fun30276_ip = 110;
                                    continue _fun30276
                                }
                            case 66:
                                var3 = _closure1_slot137;
                                if (var3) {
                                    _fun30276_ip = 110;
                                    continue _fun30276
                                }
                            case 73:
                                var3 = true;
                                _closure1_slot137 = var3;
                                var3 = function() { // Environment: var2
                                    var3 = _closure1_slot10;
                                    var2 = undefined;
                                    var1 = function*() { // Environment: var0
                                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                                            _fun30279: for (var _fun30279_ip = 0;;) switch (_fun30279_ip) {
                                                case 0:
                                                    StartGenerator();
                                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                    if (var1) {
                                                        _fun30279_ip = 155;
                                                        continue _fun30279
                                                    }
                                                case 10:
                                                    var4 = global;
                                                    var3 = var4.Promise;
                                                    var1 = var3.prototype;
                                                    var2 = Object.create(var1, {
                                                        constructor: {
                                                            value: var3
                                                        }
                                                    });
                                                    var10 = function(arg0) { // Environment: var1
                                                        var0 = arg0;
                                                        var _closure8_slot0 = var0;
                                                        var3 = _closure1_slot1;
                                                        var2 = _closure1_slot3;
                                                        var0 = 73;
                                                        var2 = var2[var0];
                                                        var0 = undefined;
                                                        var3 = var3.bind(var0)(var2);
                                                        var2 = var3.pollQueueMetrics;
                                                        var1 = function(arg0) { // Environment: var1
                                                            var2 = _closure8_slot0;
                                                            var0 = undefined;
                                                            var1 = arg0;
                                                            var1 = var2.bind(var0)(var1);
                                                            return var0;
                                                        };
                                                        var1 = var2.bind(var3)(var1);
                                                        return var0;
                                                    };
                                                    var11 = var2;
                                                    var1 = new var11[var3](var10, var9);
                                                    var1 = var1 instanceof Object ? var1 : var2;
                                                    SaveGenerator(address = 49);
                                                case 47:
                                                    return var1;
                                                case 49:
                                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                                    if (var2) {
                                                        _fun30279_ip = 152;
                                                        continue _fun30279
                                                    }
                                                case 55:
                                                    var2 = _closure1_slot56;
                                                    var1.periodMs = var2;
                                                    var5 = _closure1_slot187;
                                                    var2 = undefined;
                                                    var8 = var5.bind(var2)(var1);
                                                    var5 = null;
                                                    if (!(var5 !== var8)) {
                                                        _fun30279_ip = 126;
                                                        continue _fun30279
                                                    }
                                                case 85:
                                                    var6 = _closure1_slot1;
                                                    var7 = _closure1_slot3;
                                                    var5 = 52;
                                                    var5 = var7[var5];
                                                    var7 = var6.bind(var2)(var5);
                                                    var6 = var7.track;
                                                    var5 = _closure1_slot25;
                                                    var5 = var5.VOICE_QUEUE_METRICS;
                                                    var5 = var6.bind(var7)(var5, var8);
                                                case 126:
                                                    var5 = var4.setTimeout;
                                                    var4 = _closure4_slot0;
                                                    var3 = _closure1_slot56;
                                                    var3 = var5.bind(var2)(var4, var3);
                                                    return var2;
                                                case 152:
                                                    return var1;
                                                case 155:
                                                    return var0;
                                            }
                                        };
                                        return var0;
                                    };
                                    var1 = var3.bind(var2)(var1);
                                    var _closure5_slot0 = var1;
                                    var0 = function() {
                                        var0 = undefined;
                                        var3 = _closure5_slot0;
                                        var2 = var3.apply;
                                        var0 = arguments;
                                        var1 = var0;
                                        var0 = this;
                                        var0 = var2.bind(var3)(var0, var1);
                                        return var0;
                                    };
                                    return var0;
                                };
                                var3 = var3.bind(var0)();
                                var _closure4_slot0 = var3;
                                var2 = global;
                                var2 = var2.setTimeout;
                                var1 = _closure1_slot56;
                                var1 = var2.bind(var0)(var3, var1);
                            case 110:
                                return var0;
                        }
                    };
                    var3 = var3.bind(var0)();
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var6 = 30;
                    var3 = var3[var6];
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.isWindows;
                    var3 = var3.bind(var4)();
                    if (!var3) {
                        _fun30273_ip = 108;
                        continue _fun30273
                    }
                case 85:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var4 = var4[var6];
                    var4 = var5.bind(var0)(var4);
                    var3 = var4.isPlatformEmbedded;
                case 108:
                    if (!var3) {
                        _fun30273_ip = 120;
                        continue _fun30273
                    }
                case 111:
                    var2 = function() {
                        _fun30283: for (var _fun30283_ip = 0;;) switch (_fun30283_ip) {
                            case 0:
                                var3 = _closure1_slot83;
                                var2 = null;
                                if (!(var2 === var3)) {
                                    _fun30283_ip = 76;
                                    continue _fun30283
                                }
                            case 15:
                                var2 = _closure1_slot73;
                                var1 = var2.getCodecSurvey;
                                var3 = var1.bind(var2)();
                                var2 = var3.then;
                                var1 = function(arg0) { // Environment: var0
                                    _fun30284: for (var _fun30284_ip = 0;;) switch (_fun30284_ip) {
                                        case 0:
                                            var3 = arg0;
                                            var0 = undefined;
                                            var2 = undefined;
                                        case 7: // try_start_0
                                            var1 = global;
                                            var5 = var1.JSON;
                                            var4 = var5.parse;
                                            var3 = var4.bind(var5)(var3);
                                            var2 = var3;
                                            var4 = null;
                                            if (!(var4 != var3)) {
                                                _fun30284_ip = 81;
                                                continue _fun30284
                                            }
                                        case 35:
                                            var3 = var2;
                                            var3 = var3.available_video_decoders;
                                            if (!(var4 != var3)) {
                                                _fun30284_ip = 81;
                                                continue _fun30284
                                            }
                                        case 48:
                                            var4 = var2.available_video_decoders;
                                            var3 = var4.some;
                                            var2 = function(arg0) { // Environment: var2
                                                var1 = 'MediaFoundation H.264';
                                                var0 = arg0;
                                                var0 = var1 === var0;
                                                return var0;
                                            };
                                            var3 = var3.bind(var4)(var2);
                                            _closure1_slot83 = var3;
                                        case 79: // try_end0
                                            _fun30284_ip = 147;
                                            continue _fun30284;
                                        case 81: // try_start_1
                                            var3 = var1.Error;
                                            var1 = var3.prototype;
                                            var2 = Object.create(var1, {
                                                constructor: {
                                                    value: var3
                                                }
                                            });
                                            var7 = 'decoder survey is not available';
                                            var8 = var2;
                                            var1 = new var8[var3](var7, var6);
                                            var1 = var1 instanceof Object ? var1 : var2;
                                            throw var1;
                                        case 115: // try_end1 // catch_target0 // catch_target1
                                            CatchBlockStart(arg_register = 5);
                                            var4 = _closure1_slot61;
                                            var3 = var4.error;
                                            var1 = 'Failed to parse codec survey';
                                            var1 = var3.bind(var4)(var1, var5);
                                            var1 = false;
                                            _closure1_slot83 = var1;
                                        case 147:
                                            return var0;
                                    }
                                };
                                var3 = var2.bind(var3)(var1);
                                var2 = var3.catch;
                                var1 = function(arg0) { // Environment: var0
                                    var4 = _closure1_slot61;
                                    var3 = var4.error;
                                    var2 = 'Failed to get codec survey';
                                    var0 = arg0;
                                    var0 = var3.bind(var4)(var2, var0);
                                    var0 = false;
                                    _closure1_slot83 = var0;
                                    var0 = undefined;
                                    return var0;
                                };
                                var2 = var2.bind(var3)(var1);
                                var1 = var2.finally;
                                var0 = function() { // Environment: var0
                                    var2 = _closure1_slot1;
                                    var1 = _closure1_slot3;
                                    var0 = 49;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var3 = var2.bind(var0)(var1);
                                    var2 = var3.dispatch;
                                    var1 = {};
                                    var4 = 'MEDIA_ENGINE_MF_AVAILABILITY_CHECKED';
                                    var1.type = var4;
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                                };
                                var0 = var1.bind(var2)(var0);
                            case 76:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var2 = var2.bind(var0)();
                case 120:
                    var2 = {};
                    var3 = _closure1_slot47;
                    var4 = var3.VIDEO;
                    var6 = _closure1_slot73;
                    var5 = var6.supports;
                    var3 = _closure1_slot47;
                    var3 = var3.VIDEO;
                    var3 = var5.bind(var6)(var3);
                    var2[var4] = var3;
                    var3 = _closure1_slot47;
                    var4 = var3.DESKTOP_CAPTURE;
                    var6 = _closure1_slot73;
                    var5 = var6.supports;
                    var3 = _closure1_slot47;
                    var3 = var3.DESKTOP_CAPTURE;
                    var3 = var5.bind(var6)(var3);
                    var2[var4] = var3;
                    var3 = _closure1_slot47;
                    var4 = var3.HYBRID_VIDEO;
                    var6 = _closure1_slot73;
                    var5 = var6.supports;
                    var3 = _closure1_slot47;
                    var3 = var3.HYBRID_VIDEO;
                    var3 = var5.bind(var6)(var3);
                    var2[var4] = var3;
                    _closure1_slot130 = var2;
                    var14 = var15.waitFor;
                    var28 = _closure1_slot17;
                    var27 = _closure1_slot18;
                    var26 = _closure1_slot19;
                    var25 = _closure1_slot20;
                    var24 = _closure1_slot11;
                    var23 = _closure1_slot12;
                    var22 = _closure1_slot21;
                    var21 = _closure1_slot13;
                    var20 = _closure1_slot14;
                    var19 = _closure1_slot15;
                    var18 = _closure1_slot23;
                    var17 = _closure1_slot24;
                    var16 = _closure1_slot16;
                    var29 = var15;
                    var1 = var29[var14](var28, var27, var26, var25, var24, var23, var22, var21, var20, var19, var18, var17, var16, var15);
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(122);
        var0[0] = var4;
        var4 = {};
        var6 = 'supports';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot73;
            var1 = var2.supports;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'supportsInApp';
        var4.key = var6;
        var6 = function arg0() {
            _fun30289: for (var _fun30289_ip = 0;;) switch (_fun30289_ip) {
                case 0:
                    var3 = arg0;
                    var0 = _closure1_slot130;
                    var0 = var0[var3];
                    if (var0) {
                        _fun30289_ip = 32;
                        continue _fun30289
                    }
                case 17:
                    var2 = _closure1_slot73;
                    var1 = var2.supports;
                    var0 = var1.bind(var2)(var3);
                case 32:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'isSupported';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot73;
            var0 = var1.supported;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'isNoiseSuppressionSupported';
        var4.key = var6;
        var6 = function() {
            var2 = _closure1_slot73;
            var1 = var2.supports;
            var0 = _closure1_slot47;
            var0 = var0.NOISE_SUPPRESSION;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'isNoiseCancellationSupported';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot182;
            var0 = undefined;
            var0 = var1.bind(var0)();
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'isNoiseCancellationError';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot119;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'isAutomaticGainControlSupported';
        var4.key = var6;
        var6 = function() {
            var2 = _closure1_slot73;
            var1 = var2.supports;
            var0 = _closure1_slot47;
            var0 = var0.AUTOMATIC_GAIN_CONTROL;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'shouldOfferManualSubsystemSelection';
        var4.key = var6;
        var6 = function() {
            _fun30295: for (var _fun30295_ip = 0;;) switch (_fun30295_ip) {
                case 0:
                    var1 = _closure1_slot162;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    var0 = !var0;
                    if (!var0) {
                        _fun30295_ip = 75;
                        continue _fun30295
                    }
                case 19:
                    var4 = _closure1_slot73;
                    var3 = var4.supports;
                    var1 = _closure1_slot47;
                    var1 = var1.LEGACY_AUDIO_SUBSYSTEM;
                    var1 = var3.bind(var4)(var1);
                    if (var1) {
                        _fun30295_ip = 72;
                        continue _fun30295
                    }
                case 47:
                    var4 = _closure1_slot73;
                    var3 = var4.supports;
                    var2 = _closure1_slot47;
                    var2 = var2.EXPERIMENTAL_AUDIO_SUBSYSTEM;
                    var1 = var3.bind(var4)(var2);
                case 72:
                    var0 = var1;
                case 75:
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'showBypassSystemInputProcessing';
        var4.key = var6;
        var6 = function() {
            _fun30296: for (var _fun30296_ip = 0;;) switch (_fun30296_ip) {
                case 0:
                    var3 = _closure1_slot73;
                    var2 = var3.supports;
                    var0 = _closure1_slot47;
                    var0 = var0.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING;
                    var0 = var2.bind(var3)(var0);
                    if (!var0) {
                        _fun30296_ip = 53;
                        continue _fun30296
                    }
                case 31:
                    var2 = _closure1_slot73;
                    var1 = var2.getAudioSubsystem;
                    var2 = var1.bind(var2)();
                    var1 = 'experimental';
                    var0 = var1 === var2;
                case 53:
                    return var0;
            }
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'isAdvancedVoiceActivitySupported';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot182;
            var0 = undefined;
            var0 = var1.bind(var0)();
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'isAecDumpSupported';
        var4.key = var6;
        var6 = function() {
            var2 = _closure1_slot73;
            var1 = var2.supports;
            var0 = _closure1_slot47;
            var0 = var0.AEC_DUMP;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'isSimulcastSupported';
        var4.key = var6;
        var6 = function() {
            _fun30299: for (var _fun30299_ip = 0;;) switch (_fun30299_ip) {
                case 0:
                    var3 = _closure1_slot73;
                    var2 = var3.supports;
                    var0 = _closure1_slot47;
                    var0 = var0.VIDEO;
                    var0 = var2.bind(var3)(var0);
                    if (!var0) {
                        _fun30299_ip = 56;
                        continue _fun30299
                    }
                case 31:
                    var3 = _closure1_slot73;
                    var2 = var3.supports;
                    var1 = _closure1_slot47;
                    var1 = var1.SIMULCAST;
                    var0 = var2.bind(var3)(var1);
                case 56:
                    return var0;
            }
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'goLiveSimulcastEnabled';
        var4.key = var6;
        var6 = function() {
            _fun30300: for (var _fun30300_ip = 0;;) switch (_fun30300_ip) {
                case 0:
                    var3 = _closure1_slot20;
                    var2 = var3.getChannel;
                    var0 = _closure1_slot118;
                    var0 = var2.bind(var3)(var0);
                    var2 = null;
                    var4 = var2 == var0;
                    var3 = undefined;
                    var2 = undefined;
                    if (var4) {
                        _fun30300_ip = 39;
                        continue _fun30300
                    }
                case 34:
                    var2 = var0.type;
                case 39:
                    var0 = _closure1_slot31;
                    var0 = var0.GUILD_STAGE_VOICE;
                    var2 = var2 === var0;
                    var0 = !var2;
                    if (var2) {
                        _fun30300_ip = 89;
                        continue _fun30300
                    }
                case 59:
                    var2 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var1 = 58;
                    var1 = var4[var1];
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.simulcastEnabled;
                    var0 = var1.bind(var2)();
                case 89:
                    return var0;
            }
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'isVideoDecoderFallbackEnabled';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot124;
            return var0;
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'getAecDump';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot148;
            var0 = undefined;
            var0 = var1.bind(var0)();
            var0 = var0.aecDumpEnabled;
            return var0;
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'getMediaEngine';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot73;
            return var0;
        };
        var4.value = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'getVideoComponent';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot73;
            var0 = var0.Video;
            return var0;
        };
        var4.value = var6;
        var0[17] = var4;
        var4 = {};
        var6 = 'getCameraComponent';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot73;
            var0 = var0.Camera;
            return var0;
        };
        var4.value = var6;
        var0[18] = var4;
        var4 = {};
        var6 = 'getKrispSuppressionLevel';
        var4.key = var6;
        var6 = function() {
            _fun30306: for (var _fun30306_ip = 0;;) switch (_fun30306_ip) {
                case 0:
                    var2 = _closure1_slot110;
                    var0 = null;
                    var2 = var0 != var2;
                    var0 = 100;
                    if (!var2) {
                        _fun30306_ip = 23;
                        continue _fun30306
                    }
                case 19:
                    var0 = _closure1_slot110;
                case 23:
                    return var0;
            }
        };
        var4.value = var6;
        var0[19] = var4;
        var4 = {};
        var6 = 'getKrispEnableStats';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot113;
            return var0;
        };
        var4.value = var6;
        var0[20] = var4;
        var4 = {};
        var6 = 'isEnabled';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot79;
            return var0;
        };
        var4.value = var6;
        var0[21] = var4;
        var4 = {};
        var6 = 'isMute';
        var4.key = var6;
        var6 = function() {
            _fun30309: for (var _fun30309_ip = 0;;) switch (_fun30309_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.isSelfMute;
                    var0 = var0.bind(var1)();
                    if (var0) {
                        _fun30309_ip = 23;
                        continue _fun30309
                    }
                case 16:
                    var0 = _closure1_slot88;
                case 23:
                    return var0;
            }
        };
        var4.value = var6;
        var0[22] = var4;
        var4 = {};
        var6 = 'isDeaf';
        var4.key = var6;
        var6 = function() {
            _fun30310: for (var _fun30310_ip = 0;;) switch (_fun30310_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.isSelfDeaf;
                    var0 = var0.bind(var1)();
                    if (var0) {
                        _fun30310_ip = 23;
                        continue _fun30310
                    }
                case 16:
                    var0 = _closure1_slot91;
                case 23:
                    return var0;
            }
        };
        var4.value = var6;
        var0[23] = var4;
        var4 = {};
        var6 = 'hasContext';
        var4.key = var6;
        var6 = function arg0() {
            var1 = _closure1_slot77;
            var0 = arg0;
            var1 = var1[var0];
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var4.value = var6;
        var0[24] = var4;
        var4 = {};
        var6 = 'isSelfMutedTemporarily';
        var4.key = var6;
        var6 = function() {
            _fun30312: for (var _fun30312_ip = 0;;) switch (_fun30312_ip) {
                case 0:
                    var2 = arguments[0];
                    var0 = undefined;
                    if (!(var2 === var0)) {
                        _fun30312_ip = 22;
                        continue _fun30312
                    }
                case 9:
                    var0 = _closure1_slot53;
                    var2 = var0.DEFAULT;
                case 22:
                    var0 = _closure1_slot53;
                    var0 = var0.DEFAULT;
                    var0 = var2 === var0;
                    if (!var0) {
                        _fun30312_ip = 46;
                        continue _fun30312
                    }
                case 42:
                    var0 = _closure1_slot89;
                case 46:
                    return var0;
            }
        };
        var4.value = var6;
        var0[25] = var4;
        var4 = {};
        var6 = 'isSelfMute';
        var4.key = var6;
        var6 = function() {
            _fun30313: for (var _fun30313_ip = 0;;) switch (_fun30313_ip) {
                case 0:
                    var3 = arguments[0];
                    var2 = this;
                    var6 = undefined;
                    if (!(var3 === var6)) {
                        _fun30313_ip = 25;
                        continue _fun30313
                    }
                case 12:
                    var0 = _closure1_slot53;
                    var3 = var0.DEFAULT;
                case 25:
                    var0 = var2.isEnabled;
                    var0 = var0.bind(var2)();
                    var0 = !var0;
                    if (var0) {
                        _fun30313_ip = 59;
                        continue _fun30313
                    }
                case 41:
                    var1 = _closure1_slot148;
                    var1 = var1.bind(var6)(var3);
                    var0 = var1.mute;
                case 59:
                    if (var0) {
                        _fun30313_ip = 109;
                        continue _fun30313
                    }
                case 62:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var4 = 35;
                    var4 = var7[var4];
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.didHavePermission;
                    var1 = _closure1_slot42;
                    var1 = var1.AUDIO;
                    var1 = var4.bind(var5)(var1);
                    var0 = !var1;
                case 109:
                    if (var0) {
                        _fun30313_ip = 123;
                        continue _fun30313
                    }
                case 112:
                    var1 = var2.isSelfDeaf;
                    var0 = var1.bind(var2)(var3);
                case 123:
                    if (var0) {
                        _fun30313_ip = 153;
                        continue _fun30313
                    }
                case 126:
                    var1 = _closure1_slot53;
                    var1 = var1.DEFAULT;
                    var1 = var3 === var1;
                    if (!var1) {
                        _fun30313_ip = 150;
                        continue _fun30313
                    }
                case 146:
                    var1 = _closure1_slot90;
                case 150:
                    var0 = var1;
                case 153:
                    return var0;
            }
        };
        var4.value = var6;
        var0[26] = var4;
        var4 = {};
        var6 = 'shouldSkipMuteUnmuteSound';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot95;
            return var0;
        };
        var4.value = var6;
        var0[27] = var4;
        var4 = {};
        var6 = 'notifyMuteUnmuteSoundWasSkipped';
        var4.key = var6;
        var6 = function() {
            var0 = false;
            _closure1_slot95 = var0;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[28] = var4;
        var4 = {};
        var6 = 'isHardwareMute';
        var4.key = var6;
        var6 = function() {
            _fun30316: for (var _fun30316_ip = 0;;) switch (_fun30316_ip) {
                case 0:
                    var2 = arguments[0];
                    var4 = this;
                    var0 = undefined;
                    if (!(var2 === var0)) {
                        _fun30316_ip = 25;
                        continue _fun30316
                    }
                case 12:
                    var0 = _closure1_slot53;
                    var2 = var0.DEFAULT;
                case 25:
                    var0 = var4.isMute;
                    var0 = var0.bind(var4)();
                    var0 = !var0;
                    if (!var0) {
                        _fun30316_ip = 55;
                        continue _fun30316
                    }
                case 41:
                    var1 = var4.isSelfMutedTemporarily;
                    var1 = var1.bind(var4)(var2);
                    var0 = !var1;
                case 55:
                    if (!var0) {
                        _fun30316_ip = 88;
                        continue _fun30316
                    }
                case 58:
                    var3 = _closure1_slot19;
                    var2 = var3.isHardwareMute;
                    var1 = var4.getInputDeviceId;
                    var1 = var1.bind(var4)();
                    var0 = var2.bind(var3)(var1);
                case 88:
                    return var0;
            }
        };
        var4.value = var6;
        var0[29] = var4;
        var4 = {};
        var6 = 'isEnableHardwareMuteNotice';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot133;
            return var0;
        };
        var4.value = var6;
        var0[30] = var4;
        var4 = {};
        var6 = 'isSelfDeaf';
        var4.key = var6;
        var6 = function() {
            _fun30318: for (var _fun30318_ip = 0;;) switch (_fun30318_ip) {
                case 0:
                    var3 = arguments[0];
                    var1 = this;
                    var2 = undefined;
                    if (!(var3 === var2)) {
                        _fun30318_ip = 25;
                        continue _fun30318
                    }
                case 12:
                    var0 = _closure1_slot53;
                    var3 = var0.DEFAULT;
                case 25:
                    var0 = var1.isSupported;
                    var0 = var0.bind(var1)();
                    var0 = !var0;
                    if (var0) {
                        _fun30318_ip = 59;
                        continue _fun30318
                    }
                case 41:
                    var1 = _closure1_slot148;
                    var1 = var1.bind(var2)(var3);
                    var0 = var1.deaf;
                case 59:
                    return var0;
            }
        };
        var4.value = var6;
        var0[31] = var4;
        var4 = {};
        var6 = 'isVideoEnabled';
        var4.key = var6;
        var6 = function() {
            _fun30319: for (var _fun30319_ip = 0;;) switch (_fun30319_ip) {
                case 0:
                    var0 = _closure1_slot92;
                    if (!var0) {
                        _fun30319_ip = 14;
                        continue _fun30319
                    }
                case 10:
                    var0 = _closure1_slot100;
                case 14:
                    return var0;
            }
        };
        var4.value = var6;
        var0[32] = var4;
        var4 = {};
        var6 = 'isVideoAvailable';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Object;
            var1 = var2.values;
            var0 = _closure1_slot86;
            var2 = var1.bind(var2)(var0);
            var1 = var2.some;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.disabled;
                var0 = !var0;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[33] = var4;
        var4 = {};
        var6 = 'isScreenSharing';
        var4.key = var6;
        var6 = function() {
            _fun30322: for (var _fun30322_ip = 0;;) switch (_fun30322_ip) {
                case 0:
                    var2 = arguments[0];
                    var0 = undefined;
                    if (!(var2 === var0)) {
                        _fun30322_ip = 22;
                        continue _fun30322
                    }
                case 9:
                    var0 = _closure1_slot53;
                    var2 = var0.STREAM;
                case 22:
                    var0 = _closure1_slot81;
                    var0 = var0 === var2;
                    if (!var0) {
                        _fun30322_ip = 46;
                        continue _fun30322
                    }
                case 36:
                    var2 = _closure1_slot75;
                    var1 = null;
                    var0 = var1 != var2;
                case 46:
                    return var0;
            }
        };
        var4.value = var6;
        var0[34] = var4;
        var4 = {};
        var6 = 'isSoundSharing';
        var4.key = var6;
        var6 = function() {
            _fun30323: for (var _fun30323_ip = 0;;) switch (_fun30323_ip) {
                case 0:
                    var3 = arguments[0];
                    var2 = undefined;
                    if (!(var3 === var2)) {
                        _fun30323_ip = 22;
                        continue _fun30323
                    }
                case 9:
                    var0 = _closure1_slot53;
                    var3 = var0.STREAM;
                case 22:
                    var0 = _closure1_slot81;
                    var0 = var0 === var3;
                    if (!var0) {
                        _fun30323_ip = 46;
                        continue _fun30323
                    }
                case 36:
                    var4 = _closure1_slot75;
                    var3 = null;
                    var0 = var3 != var4;
                case 46:
                    if (!var0) {
                        _fun30323_ip = 80;
                        continue _fun30323
                    }
                case 49:
                    var1 = _closure1_slot75;
                    var3 = var1.desktopSource;
                    var1 = null;
                    var4 = var1 == var3;
                    var2 = undefined;
                    if (var4) {
                        _fun30323_ip = 76;
                        continue _fun30323
                    }
                case 70:
                    var2 = var3.soundshareId;
                case 76:
                    var0 = var1 != var2;
                case 80:
                    return var0;
            }
        };
        var4.value = var6;
        var0[35] = var4;
        var4 = {};
        var6 = 'isLocalMute';
        var4.key = var6;
        var6 = function arg0() {
            _fun30324: for (var _fun30324_ip = 0;;) switch (_fun30324_ip) {
                case 0:
                    var2 = arg0;
                    var4 = arguments[1];
                    var3 = undefined;
                    if (!(var4 === var3)) {
                        _fun30324_ip = 25;
                        continue _fun30324
                    }
                case 12:
                    var0 = _closure1_slot53;
                    var4 = var0.DEFAULT;
                case 25:
                    var5 = _closure1_slot17;
                    var0 = var5.getId;
                    var0 = var0.bind(var5)();
                    var0 = var2 !== var0;
                    if (!var0) {
                        _fun30324_ip = 76;
                        continue _fun30324
                    }
                case 49:
                    var1 = _closure1_slot148;
                    var1 = var1.bind(var3)(var4);
                    var1 = var1.localMutes;
                    var1 = var1[var2];
                    if (var1) {
                        _fun30324_ip = 73;
                        continue _fun30324
                    }
                case 71:
                    var1 = false;
                case 73:
                    var0 = var1;
                case 76:
                    return var0;
            }
        };
        var4.value = var6;
        var0[36] = var4;
        var4 = {};
        var6 = 'supportsDisableLocalVideo';
        var4.key = var6;
        var6 = function() {
            var2 = _closure1_slot73;
            var1 = var2.supports;
            var0 = _closure1_slot47;
            var0 = var0.DISABLE_VIDEO;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[37] = var4;
        var4 = {};
        var6 = 'isLocalVideoDisabled';
        var4.key = var6;
        var6 = function arg0() {
            _fun30326: for (var _fun30326_ip = 0;;) switch (_fun30326_ip) {
                case 0:
                    var2 = arguments[1];
                    var1 = undefined;
                    if (!(var2 === var1)) {
                        _fun30326_ip = 22;
                        continue _fun30326
                    }
                case 9:
                    var0 = _closure1_slot53;
                    var2 = var0.DEFAULT;
                case 22:
                    var0 = _closure1_slot148;
                    var0 = var0.bind(var1)(var2);
                    var1 = var0.disabledLocalVideos;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun30326_ip = 59;
                        continue _fun30326
                    }
                case 56:
                    var0 = var1;
                case 59:
                    return var0;
            }
        };
        var4.value = var6;
        var0[38] = var4;
        var4 = {};
        var6 = 'getVideoToggleState';
        var4.key = var6;
        var6 = function arg0() {
            _fun30327: for (var _fun30327_ip = 0;;) switch (_fun30327_ip) {
                case 0:
                    var3 = arguments[1];
                    var2 = undefined;
                    if (!(var3 === var2)) {
                        _fun30327_ip = 22;
                        continue _fun30327
                    }
                case 9:
                    var0 = _closure1_slot53;
                    var3 = var0.DEFAULT;
                case 22:
                    var0 = _closure1_slot148;
                    var0 = var0.bind(var2)(var3);
                    var2 = var0.videoToggleStateMap;
                    var0 = arg0;
                    var0 = var2[var0];
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun30327_ip = 63;
                        continue _fun30327
                    }
                case 53:
                    var1 = _closure1_slot30;
                    var0 = var1.NONE;
                case 63:
                    return var0;
            }
        };
        var4.value = var6;
        var0[39] = var4;
        var4 = {};
        var6 = 'isLocalVideoAutoDisabled';
        var4.key = var6;
        var6 = function arg0() {
            _fun30328: for (var _fun30328_ip = 0;;) switch (_fun30328_ip) {
                case 0:
                    var2 = arguments[1];
                    var0 = undefined;
                    if (!(var2 === var0)) {
                        _fun30328_ip = 22;
                        continue _fun30328
                    }
                case 9:
                    var0 = _closure1_slot53;
                    var2 = var0.DEFAULT;
                case 22:
                    var0 = _closure1_slot53;
                    var0 = var0.DEFAULT;
                    var0 = var2 === var0;
                    if (!var0) {
                        _fun30328_ip = 59;
                        continue _fun30328
                    }
                case 42:
                    var3 = _closure1_slot126;
                    var2 = var3.has;
                    var1 = arg0;
                    var0 = var2.bind(var3)(var1);
                case 59:
                    return var0;
            }
        };
        var4.value = var6;
        var0[40] = var4;
        var4 = {};
        var6 = 'isAnyLocalVideoAutoDisabled';
        var4.key = var6;
        var6 = function() {
            _fun30329: for (var _fun30329_ip = 0;;) switch (_fun30329_ip) {
                case 0:
                    var2 = arguments[0];
                    var0 = undefined;
                    if (!(var2 === var0)) {
                        _fun30329_ip = 22;
                        continue _fun30329
                    }
                case 9:
                    var0 = _closure1_slot53;
                    var2 = var0.DEFAULT;
                case 22:
                    var0 = _closure1_slot53;
                    var0 = var0.DEFAULT;
                    var0 = var2 === var0;
                    if (!var0) {
                        _fun30329_ip = 57;
                        continue _fun30329
                    }
                case 42:
                    var1 = _closure1_slot126;
                    var2 = var1.size;
                    var1 = 0;
                    var0 = var2 > var1;
                case 57:
                    return var0;
            }
        };
        var4.value = var6;
        var0[41] = var4;
        var4 = {};
        var6 = 'isMediaFilterSettingLoading';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot120;
            return var0;
        };
        var4.value = var6;
        var0[42] = var4;
        var4 = {};
        var6 = 'isNativeAudioPermissionReady';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot125;
            return var0;
        };
        var4.value = var6;
        var0[43] = var4;
        var4 = {};
        var6 = 'getGoLiveSource';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot75;
            return var0;
        };
        var4.value = var6;
        var0[44] = var4;
        var4 = {};
        var6 = 'getGoLiveContext';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot81;
            return var0;
        };
        var4.value = var6;
        var0[45] = var4;
        var4 = {};
        var6 = 'getLastAudioInputDeviceChangeTimestamp';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot82;
            return var0;
        };
        var4.value = var6;
        var0[46] = var4;
        var4 = {};
        var6 = 'isH264MfDecodeAvailable';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot83;
            return var0;
        };
        var4.value = var6;
        var0[47] = var4;
        var4 = {};
        var6 = 'getLocalPan';
        var4.key = var6;
        var6 = function arg0() {
            _fun30336: for (var _fun30336_ip = 0;;) switch (_fun30336_ip) {
                case 0:
                    var3 = arguments[1];
                    var2 = undefined;
                    if (!(var3 === var2)) {
                        _fun30336_ip = 22;
                        continue _fun30336
                    }
                case 9:
                    var0 = _closure1_slot53;
                    var3 = var0.DEFAULT;
                case 22:
                    var0 = _closure1_slot148;
                    var0 = var0.bind(var2)(var3);
                    var2 = var0.localPans;
                    var0 = arg0;
                    var0 = var2[var0];
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun30336_ip = 57;
                        continue _fun30336
                    }
                case 53:
                    var0 = _closure1_slot63;
                case 57:
                    return var0;
            }
        };
        var4.value = var6;
        var0[48] = var4;
        var4 = {};
        var6 = 'getLocalVolume';
        var4.key = var6;
        var6 = function arg0() {
            _fun30337: for (var _fun30337_ip = 0;;) switch (_fun30337_ip) {
                case 0:
                    var3 = arguments[1];
                    var2 = undefined;
                    if (!(var3 === var2)) {
                        _fun30337_ip = 22;
                        continue _fun30337
                    }
                case 9:
                    var0 = _closure1_slot53;
                    var3 = var0.DEFAULT;
                case 22:
                    var0 = _closure1_slot53;
                    var0 = var0.STREAM;
                    if (!(var3 !== var0)) {
                        _fun30337_ip = 45;
                        continue _fun30337
                    }
                case 39:
                    var0 = _closure1_slot48;
                    _fun30337_ip = 49;
                    continue _fun30337;
                case 45:
                    var0 = _closure1_slot49;
                case 49:
                    var1 = _closure1_slot148;
                    var1 = var1.bind(var2)(var3);
                    var2 = var1.localVolumes;
                    var1 = arg0;
                    var1 = var2[var1];
                    var2 = null;
                    if (!(var2 != var1)) {
                        _fun30337_ip = 80;
                        continue _fun30337
                    }
                case 77:
                    var0 = var1;
                case 80:
                    return var0;
            }
        };
        var4.value = var6;
        var0[49] = var4;
        var4 = {};
        var6 = 'getInputVolume';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot148;
            var0 = undefined;
            var0 = var1.bind(var0)();
            var0 = var0.inputVolume;
            return var0;
        };
        var4.value = var6;
        var0[50] = var4;
        var4 = {};
        var6 = 'getOutputVolume';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot148;
            var0 = undefined;
            var0 = var1.bind(var0)();
            var0 = var0.outputVolume;
            return var0;
        };
        var4.value = var6;
        var0[51] = var4;
        var4 = {};
        var6 = 'getMode';
        var4.key = var6;
        var6 = function() {
            _fun30340: for (var _fun30340_ip = 0;;) switch (_fun30340_ip) {
                case 0:
                    var2 = arguments[0];
                    var1 = undefined;
                    if (!(var2 === var1)) {
                        _fun30340_ip = 22;
                        continue _fun30340
                    }
                case 9:
                    var0 = _closure1_slot53;
                    var2 = var0.DEFAULT;
                case 22:
                    var0 = _closure1_slot148;
                    var0 = var0.bind(var1)(var2);
                    var0 = var0.mode;
                    return var0;
            }
        };
        var4.value = var6;
        var0[52] = var4;
        var4 = {};
        var6 = 'getModeOptions';
        var4.key = var6;
        var6 = function() {
            _fun30341: for (var _fun30341_ip = 0;;) switch (_fun30341_ip) {
                case 0:
                    var2 = arguments[0];
                    var1 = undefined;
                    if (!(var2 === var1)) {
                        _fun30341_ip = 22;
                        continue _fun30341
                    }
                case 9:
                    var0 = _closure1_slot53;
                    var2 = var0.DEFAULT;
                case 22:
                    var0 = _closure1_slot148;
                    var0 = var0.bind(var1)(var2);
                    var0 = var0.modeOptions;
                    return var0;
            }
        };
        var4.value = var6;
        var0[53] = var4;
        var4 = {};
        var6 = 'getActiveVoiceFilter';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot114;
            return var0;
        };
        var4.value = var6;
        var0[54] = var4;
        var4 = {};
        var6 = 'getActiveVoiceFilterAppliedAt';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot115;
            return var0;
        };
        var4.value = var6;
        var0[55] = var4;
        var4 = {};
        var6 = 'getPreviousVoiceFilter';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot116;
            return var0;
        };
        var4.value = var6;
        var0[56] = var4;
        var4 = {};
        var6 = 'getPreviousVoiceFilterAppliedAt';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot117;
            return var0;
        };
        var4.value = var6;
        var0[57] = var4;
        var4 = {};
        var6 = 'getMostRecentlyRequestedVoiceFilter';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot148;
            var0 = undefined;
            var0 = var1.bind(var0)();
            var0 = var0.mostRecentlyRequestedVoiceFilter;
            return var0;
        };
        var4.value = var6;
        var0[58] = var4;
        var4 = {};
        var6 = 'getVoiceFilterPlaybackEnabled';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot148;
            var0 = undefined;
            var0 = var1.bind(var0)();
            var0 = var0.voiceFilterPlaybackEnabled;
            return var0;
        };
        var4.value = var6;
        var0[59] = var4;
        var4 = {};
        var6 = 'getShortcuts';
        var4.key = var6;
        var6 = function() {
            var0 = {};
            var _closure3_slot0 = var0;
            var5 = _closure1_slot1;
            var4 = _closure1_slot3;
            var3 = 42;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var5.bind(var3)(var4);
            var3 = var4.each;
            var2 = _closure1_slot77;
            var1 = function(arg0, arg1) { // Environment: var1
                _fun30349: for (var _fun30349_ip = 0;;) switch (_fun30349_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = arg1;
                        var4 = var0.mode;
                        var0 = var0.modeOptions;
                        var1 = var0.shortcut;
                        var0 = _closure1_slot27;
                        var0 = var0.PUSH_TO_TALK;
                        var0 = var4 === var0;
                        if (!var0) {
                            _fun30349_ip = 57;
                            continue _fun30349
                        }
                    case 43:
                        var4 = _closure1_slot78;
                        var3 = var4.has;
                        var0 = var3.bind(var4)(var2);
                    case 57:
                        if (!var0) {
                            _fun30349_ip = 71;
                            continue _fun30349
                        }
                    case 60:
                        var0 = _closure3_slot0;
                        var0[var2] = var1;
                    case 71:
                        var0 = undefined;
                        return var0;
                }
            };
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var4.value = var6;
        var0[60] = var4;
        var4 = {};
        var6 = 'getInputDeviceId';
        var4.key = var6;
        var6 = function() {
            var3 = _closure1_slot169;
            var2 = _closure1_slot84;
            var0 = _closure1_slot148;
            var1 = undefined;
            var0 = var0.bind(var1)();
            var0 = var0.inputDeviceId;
            var0 = var3.bind(var1)(var2, var0);
            return var0;
        };
        var4.value = var6;
        var0[61] = var4;
        var4 = {};
        var6 = 'getOutputDeviceId';
        var4.key = var6;
        var6 = function() {
            var3 = _closure1_slot169;
            var2 = _closure1_slot85;
            var0 = _closure1_slot148;
            var1 = undefined;
            var0 = var0.bind(var1)();
            var0 = var0.outputDeviceId;
            var0 = var3.bind(var1)(var2, var0);
            return var0;
        };
        var4.value = var6;
        var0[62] = var4;
        var4 = {};
        var6 = 'getVideoDeviceId';
        var4.key = var6;
        var6 = function() {
            var3 = _closure1_slot169;
            var2 = _closure1_slot86;
            var0 = _closure1_slot148;
            var1 = undefined;
            var0 = var0.bind(var1)();
            var0 = var0.videoDeviceId;
            var0 = var3.bind(var1)(var2, var0);
            return var0;
        };
        var4.value = var6;
        var0[63] = var4;
        var4 = {};
        var6 = 'getInputDevices';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot84;
            return var0;
        };
        var4.value = var6;
        var0[64] = var4;
        var4 = {};
        var6 = 'getOutputDevices';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot85;
            return var0;
        };
        var4.value = var6;
        var0[65] = var4;
        var4 = {};
        var6 = 'getVideoDevices';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot86;
            return var0;
        };
        var4.value = var6;
        var0[66] = var4;
        var4 = {};
        var6 = 'getEchoCancellation';
        var4.key = var6;
        var6 = function() {
            _fun30356: for (var _fun30356_ip = 0;;) switch (_fun30356_ip) {
                case 0:
                    var2 = _closure1_slot148;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    var3 = _closure1_slot19;
                    var2 = var3.hasEchoCancellation;
                    var0 = var1.inputDeviceId;
                    var0 = var2.bind(var3)(var0);
                    if (var0) {
                        _fun30356_ip = 43;
                        continue _fun30356
                    }
                case 37:
                    var0 = var1.echoCancellation;
                case 43:
                    return var0;
            }
        };
        var4.value = var6;
        var0[67] = var4;
        var4 = {};
        var6 = 'getSidechainCompression';
        var4.key = var6;
        var6 = function() {
            _fun30357: for (var _fun30357_ip = 0;;) switch (_fun30357_ip) {
                case 0:
                    var3 = _closure1_slot73;
                    var2 = var3.supports;
                    var0 = _closure1_slot47;
                    var0 = var0.SIDECHAIN_COMPRESSION;
                    var0 = var2.bind(var3)(var0);
                    if (!var0) {
                        _fun30357_ip = 47;
                        continue _fun30357
                    }
                case 31:
                    var2 = _closure1_slot148;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    var0 = var1.sidechainCompression;
                case 47:
                    return var0;
            }
        };
        var4.value = var6;
        var0[68] = var4;
        var4 = {};
        var6 = 'getSidechainCompressionStrength';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot148;
            var0 = undefined;
            var0 = var1.bind(var0)();
            var0 = var0.sidechainCompressionStrength;
            return var0;
        };
        var4.value = var6;
        var0[69] = var4;
        var4 = {};
        var6 = 'getH265Enabled';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot148;
            var0 = undefined;
            var0 = var1.bind(var0)();
            var0 = var0.h265Enabled;
            return var0;
        };
        var4.value = var6;
        var0[70] = var4;
        var4 = {};
        var6 = 'hasH265HardwareDecode';
        var4.key = var6;
        var6 = function() {
            _fun30360: for (var _fun30360_ip = 0;;) switch (_fun30360_ip) {
                case 0:
                    var2 = _closure1_slot122;
                    var0 = null;
                    var0 = var0 !== var2;
                    if (!var0) {
                        _fun30360_ip = 20;
                        continue _fun30360
                    }
                case 16:
                    var0 = _closure1_slot122;
                case 20:
                    return var0;
            }
        };
        var4.value = var6;
        var0[71] = var4;
        var4 = {};
        var6 = 'getLoopback';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot128;
            var1 = var0.size;
            var0 = 0;
            var0 = var1 > var0;
            return var0;
        };
        var4.value = var6;
        var0[72] = var4;
        var4 = {};
        var6 = 'getLoopbackReasons';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot128;
            return var0;
        };
        var4.value = var6;
        var0[73] = var4;
        var4 = {};
        var6 = 'getNoiseSuppression';
        var4.key = var6;
        var6 = function() {
            _fun30363: for (var _fun30363_ip = 0;;) switch (_fun30363_ip) {
                case 0:
                    var2 = _closure1_slot148;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    var3 = _closure1_slot19;
                    var2 = var3.hasNoiseSuppression;
                    var0 = var1.inputDeviceId;
                    var0 = var2.bind(var3)(var0);
                    if (var0) {
                        _fun30363_ip = 43;
                        continue _fun30363
                    }
                case 37:
                    var0 = var1.noiseSuppression;
                case 43:
                    return var0;
            }
        };
        var4.value = var6;
        var0[74] = var4;
        var4 = {};
        var6 = 'getAutomaticGainControl';
        var4.key = var6;
        var6 = function() {
            _fun30364: for (var _fun30364_ip = 0;;) switch (_fun30364_ip) {
                case 0:
                    var2 = _closure1_slot148;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    var3 = _closure1_slot19;
                    var2 = var3.hasAutomaticGainControl;
                    var0 = var1.inputDeviceId;
                    var0 = var2.bind(var3)(var0);
                    if (var0) {
                        _fun30364_ip = 43;
                        continue _fun30364
                    }
                case 37:
                    var0 = var1.automaticGainControl;
                case 43:
                    return var0;
            }
        };
        var4.value = var6;
        var0[75] = var4;
        var4 = {};
        var6 = 'getBypassSystemInputProcessing';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot148;
            var0 = undefined;
            var0 = var1.bind(var0)();
            var0 = var0.bypassSystemInputProcessing;
            return var0;
        };
        var4.value = var6;
        var0[76] = var4;
        var4 = {};
        var6 = 'getNoiseCancellation';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot148;
            var0 = undefined;
            var0 = var1.bind(var0)();
            var0 = var0.noiseCancellation;
            return var0;
        };
        var4.value = var6;
        var0[77] = var4;
        var4 = {};
        var6 = 'getHardwareEncoding';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot67;
            return var0;
        };
        var4.value = var6;
        var0[78] = var4;
        var4 = {};
        var6 = 'getEnableSilenceWarning';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot148;
            var0 = undefined;
            var0 = var1.bind(var0)();
            var0 = var0.silenceWarning;
            return var0;
        };
        var4.value = var6;
        var0[79] = var4;
        var4 = {};
        var6 = 'getDebugLogging';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot73;
            var0 = var1.getDebugLogging;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[80] = var4;
        var4 = {};
        var6 = 'getQoS';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot148;
            var0 = undefined;
            var0 = var1.bind(var0)();
            var0 = var0.qos;
            return var0;
        };
        var4.value = var6;
        var0[81] = var4;
        var4 = {};
        var6 = 'getAttenuation';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot148;
            var0 = undefined;
            var0 = var1.bind(var0)();
            var0 = var0.attenuation;
            return var0;
        };
        var4.value = var6;
        var0[82] = var4;
        var4 = {};
        var6 = 'getAttenuateWhileSpeakingSelf';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot148;
            var0 = undefined;
            var0 = var1.bind(var0)();
            var0 = var0.attenuateWhileSpeakingSelf;
            return var0;
        };
        var4.value = var6;
        var0[83] = var4;
        var4 = {};
        var6 = 'getAttenuateWhileSpeakingOthers';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot148;
            var0 = undefined;
            var0 = var1.bind(var0)();
            var0 = var0.attenuateWhileSpeakingOthers;
            return var0;
        };
        var4.value = var6;
        var0[84] = var4;
        var4 = {};
        var6 = 'getAudioSubsystem';
        var4.key = var6;
        var6 = function() {
            _fun30374: for (var _fun30374_ip = 0;;) switch (_fun30374_ip) {
                case 0:
                    var0 = _closure1_slot161;
                    var2 = undefined;
                    var0 = var0.bind(var2)();
                    if (!var0) {
                        _fun30374_ip = 33;
                        continue _fun30374
                    }
                case 16:
                    var0 = _closure1_slot148;
                    var0 = var0.bind(var2)();
                    var0 = var0.automaticAudioSubsystem;
                    if (var0) {
                        _fun30374_ip = 49;
                        continue _fun30374
                    }
                case 33:
                    var2 = _closure1_slot73;
                    var0 = var2.getAudioSubsystem;
                    var0 = var0.bind(var2)();
                    _fun30374_ip = 59;
                    continue _fun30374;
                case 49:
                    var1 = _closure1_slot46;
                    var0 = var1.AUTOMATIC;
                case 59:
                    return var0;
            }
        };
        var4.value = var6;
        var0[85] = var4;
        var4 = {};
        var6 = 'getMLSSigningKey';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var3 = _closure1_slot73;
            var2 = var3.getMLSSigningKey;
            var1 = arg0;
            var0 = arg1;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[86] = var4;
        var4 = {};
        var6 = 'getActiveInputProfile';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot148;
            var0 = undefined;
            var0 = var1.bind(var0)();
            var0 = var0.activeInputProfile;
            return var0;
        };
        var4.value = var6;
        var0[87] = var4;
        var4 = {};
        var6 = 'isInputProfileCustom';
        var4.key = var6;
        var6 = function() {
            _fun30377: for (var _fun30377_ip = 0;;) switch (_fun30377_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.getActiveInputProfile;
                    var2 = var0.bind(var1)();
                    var0 = null;
                    var0 = var0 == var2;
                    if (var0) {
                        _fun30377_ip = 39;
                        continue _fun30377
                    }
                case 22:
                    var1 = _closure1_slot45;
                    var1 = var1.CUSTOM;
                    var0 = var2 === var1;
                case 39:
                    return var0;
            }
        };
        var4.value = var6;
        var0[88] = var4;
        var4 = {};
        var6 = 'getSettings';
        var4.key = var6;
        var6 = function() {
            _fun30378: for (var _fun30378_ip = 0;;) switch (_fun30378_ip) {
                case 0:
                    var2 = arguments[0];
                    var1 = undefined;
                    if (!(var2 === var1)) {
                        _fun30378_ip = 22;
                        continue _fun30378
                    }
                case 9:
                    var0 = _closure1_slot53;
                    var2 = var0.DEFAULT;
                case 22:
                    var0 = _closure1_slot148;
                    var0 = var0.bind(var1)(var2);
                    return var0;
            }
        };
        var4.value = var6;
        var0[89] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() {
            var0 = {};
            var2 = _closure1_slot77;
            var0.settingsByContext = var2;
            var2 = _closure1_slot84;
            var0.inputDevices = var2;
            var2 = _closure1_slot85;
            var0.outputDevices = var2;
            var2 = _closure1_slot130;
            var0.appSupported = var2;
            var2 = _closure1_slot108;
            var0.krispModuleLoaded = var2;
            var2 = _closure1_slot109;
            var0.krispVersion = var2;
            var2 = _closure1_slot110;
            var0.krispSuppressionLevel = var2;
            var2 = _closure1_slot75;
            var0.goLiveSource = var2;
            var1 = _closure1_slot81;
            var0.goLiveContext = var1;
            return var0;
        };
        var4.value = var6;
        var0[90] = var4;
        var4 = {};
        var6 = 'getInputDetected';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot101;
            return var0;
        };
        var4.value = var6;
        var0[91] = var4;
        var4 = {};
        var6 = 'getNoInputDetectedNotice';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot103;
            return var0;
        };
        var4.value = var6;
        var0[92] = var4;
        var4 = {};
        var6 = 'getInputDeviceOSMuted';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot104;
            return var0;
        };
        var4.value = var6;
        var0[93] = var4;
        var4 = {};
        var6 = 'getInputDeviceOSVolume';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot105;
            return var0;
        };
        var4.value = var6;
        var0[94] = var4;
        var4 = {};
        var6 = 'getPacketDelay';
        var4.key = var6;
        var6 = function() {
            _fun30384: for (var _fun30384_ip = 0;;) switch (_fun30384_ip) {
                case 0:
                    var2 = this;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var0 = 30;
                    var3 = var3[var0];
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3);
                    var3 = var0.isPlatformEmbedded;
                    var0 = 0;
                    if (var3) {
                        _fun30384_ip = 81;
                        continue _fun30384
                    }
                case 39:
                    var3 = var2.getMode;
                    var3 = var3.bind(var2)();
                    var1 = _closure1_slot27;
                    var1 = var1.VOICE_ACTIVITY;
                    var0 = 0;
                    if (!(var3 === var1)) {
                        _fun30384_ip = 81;
                        continue _fun30384
                    }
                case 65:
                    var1 = var2.getModeOptions;
                    var1 = var1.bind(var2)();
                    var0 = var1.vadLeading;
                case 81:
                    return var0;
            }
        };
        var4.value = var6;
        var0[95] = var4;
        var4 = {};
        var6 = 'setCanHavePriority';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = arg1;
            var _closure3_slot1 = var1;
            var2 = _closure1_slot73;
            var1 = var2.eachConnection;
            var0 = function(arg0) { // Environment: var0
                var3 = arg0;
                var2 = var3.setCanHavePriority;
                var1 = _closure3_slot0;
                var0 = _closure3_slot1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[96] = var4;
        var4 = {};
        var6 = 'isInteractionRequired';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot80;
            return var0;
        };
        var4.value = var6;
        var0[97] = var4;
        var4 = {};
        var6 = 'getVideoHook';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot148;
            var0 = undefined;
            var0 = var1.bind(var0)();
            var0 = var0.videoHook;
            return var0;
        };
        var4.value = var6;
        var0[98] = var4;
        var4 = {};
        var6 = 'supportsVideoHook';
        var4.key = var6;
        var6 = function() {
            var2 = _closure1_slot73;
            var1 = var2.supports;
            var0 = _closure1_slot47;
            var0 = var0.VIDEO_HOOK;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[99] = var4;
        var4 = {};
        var6 = 'getExperimentalSoundshare';
        var4.key = var6;
        var6 = function() {
            _fun30390: for (var _fun30390_ip = 0;;) switch (_fun30390_ip) {
                case 0:
                    var3 = this;
                    var1 = _closure1_slot148;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    var2 = var0.experimentalSoundshare2;
                    var0 = var3.supportsExperimentalSoundshare;
                    var0 = var0.bind(var3)();
                    if (!var0) {
                        _fun30390_ip = 70;
                        continue _fun30390
                    }
                case 37:
                    var1 = null;
                    var1 = var1 == var2;
                    if (var1) {
                        _fun30390_ip = 49;
                        continue _fun30390
                    }
                case 46:
                    var1 = var2;
                case 49:
                    if (var1) {
                        _fun30390_ip = 67;
                        continue _fun30390
                    }
                case 52:
                    var2 = var3.supportsHookSoundshare;
                    var2 = var2.bind(var3)();
                    var1 = !var2;
                case 67:
                    var0 = var1;
                case 70:
                    return var0;
            }
        };
        var4.value = var6;
        var0[100] = var4;
        var4 = {};
        var6 = 'supportsExperimentalSoundshare';
        var4.key = var6;
        var6 = function() {
            _fun30391: for (var _fun30391_ip = 0;;) switch (_fun30391_ip) {
                case 0:
                    var3 = _closure1_slot73;
                    var2 = var3.supports;
                    var0 = _closure1_slot47;
                    var0 = var0.EXPERIMENTAL_SOUNDSHARE;
                    var0 = var2.bind(var3)(var0);
                    if (!var0) {
                        _fun30391_ip = 121;
                        continue _fun30391
                    }
                case 31:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var3 = 71;
                    var3 = var2[var3];
                    var7 = undefined;
                    var4 = var5.bind(var7)(var3);
                    var3 = var4.satisfies;
                    var8 = 32;
                    var2 = var2[var8];
                    var5 = var5.bind(var7)(var2);
                    var2 = null;
                    var5 = var2 == var5;
                    var2 = undefined;
                    if (var5) {
                        _fun30391_ip = 111;
                        continue _fun30391
                    }
                case 82:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var5 = var5[var8];
                    var5 = var6.bind(var7)(var5);
                    var5 = var5.os;
                    var2 = var5.release;
                case 111:
                    var1 = _closure1_slot40;
                    var0 = var3.bind(var4)(var2, var1);
                case 121:
                    return var0;
            }
        };
        var4.value = var6;
        var0[101] = var4;
        var4 = {};
        var6 = 'supportsHookSoundshare';
        var4.key = var6;
        var6 = function() {
            _fun30392: for (var _fun30392_ip = 0;;) switch (_fun30392_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var0 = 30;
                    var0 = var3[var0];
                    var7 = undefined;
                    var2 = var2.bind(var7)(var0);
                    var0 = var2.isWindows;
                    var0 = var0.bind(var2)();
                    if (!var0) {
                        _fun30392_ip = 63;
                        continue _fun30392
                    }
                case 38:
                    var4 = _closure1_slot73;
                    var3 = var4.supports;
                    var2 = _closure1_slot47;
                    var2 = var2.SOUNDSHARE;
                    var0 = var3.bind(var4)(var2);
                case 63:
                    if (!var0) {
                        _fun30392_ip = 154;
                        continue _fun30392
                    }
                case 66:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var3 = 71;
                    var3 = var2[var3];
                    var4 = var5.bind(var7)(var3);
                    var3 = var4.satisfies;
                    var8 = 32;
                    var2 = var2[var8];
                    var5 = var5.bind(var7)(var2);
                    var2 = null;
                    var5 = var2 == var5;
                    var2 = undefined;
                    if (var5) {
                        _fun30392_ip = 144;
                        continue _fun30392
                    }
                case 115:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var5 = var5[var8];
                    var5 = var6.bind(var7)(var5);
                    var5 = var5.os;
                    var2 = var5.release;
                case 144:
                    var1 = _closure1_slot39;
                    var0 = var3.bind(var4)(var2, var1);
                case 154:
                    return var0;
            }
        };
        var4.value = var6;
        var0[102] = var4;
        var4 = {};
        var6 = 'getUseSystemScreensharePicker';
        var4.key = var6;
        var6 = function() {
            _fun30393: for (var _fun30393_ip = 0;;) switch (_fun30393_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.supportsSystemScreensharePicker;
                    var0 = var0.bind(var1)();
                    var2 = _closure1_slot148;
                    var4 = undefined;
                    var2 = var2.bind(var4)();
                    var2 = var2.useSystemScreensharePicker;
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var1 = 30;
                    var1 = var5[var1];
                    var3 = var3.bind(var4)(var1);
                    var1 = var3.isLinux;
                    var1 = var1.bind(var3)();
                    if (!var0) {
                        _fun30393_ip = 79;
                        continue _fun30393
                    }
                case 67:
                    var3 = null;
                    if (!(var3 != var2)) {
                        _fun30393_ip = 76;
                        continue _fun30393
                    }
                case 73:
                    var1 = var2;
                case 76:
                    var0 = var1;
                case 79:
                    return var0;
            }
        };
        var4.value = var6;
        var0[103] = var4;
        var4 = {};
        var6 = 'supportsSystemScreensharePicker';
        var4.key = var6;
        var6 = function() {
            var2 = _closure1_slot73;
            var1 = var2.supports;
            var0 = _closure1_slot47;
            var0 = var0.NATIVE_SCREENSHARE_PICKER;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[104] = var4;
        var4 = {};
        var6 = 'getUseVaapiEncoder';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot136;
            return var0;
        };
        var4.value = var6;
        var0[105] = var4;
        var4 = {};
        var6 = 'getUseGamescopeCapture';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot135;
            return var0;
        };
        var4.value = var6;
        var0[106] = var4;
        var4 = {};
        var6 = 'getEverSpeakingWhileMuted';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot96;
            return var0;
        };
        var4.value = var6;
        var0[107] = var4;
        var4 = {};
        var6 = 'getSpeakingWhileMuted';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot97;
            return var0;
        };
        var4.value = var6;
        var0[108] = var4;
        var4 = {};
        var6 = 'getKrispModelOverride';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot111;
            return var0;
        };
        var4.value = var6;
        var0[109] = var4;
        var4 = {};
        var6 = 'getKrispModels';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot112;
            return var0;
        };
        var4.value = var6;
        var0[110] = var4;
        var4 = {};
        var6 = 'getKrispVadActivationThreshold';
        var4.key = var6;
        var6 = function() {
            _fun30401: for (var _fun30401_ip = 0;;) switch (_fun30401_ip) {
                case 0:
                    var1 = _closure1_slot148;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    var0 = var0.modeOptions;
                    var1 = var0.vadKrispActivationThreshold;
                    var0 = null;
                    var2 = var0 != var1;
                    var0 = 0.5;
                    if (!var2) {
                        _fun30401_ip = 47;
                        continue _fun30401
                    }
                case 44:
                    var0 = var1;
                case 47:
                    return var0;
            }
        };
        var4.value = var6;
        var0[111] = var4;
        var4 = {};
        var6 = 'hasActiveCallKitCall';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot134;
            return var0;
        };
        var4.value = var6;
        var0[112] = var4;
        var4 = {};
        var6 = 'setHasActiveCallKitCall';
        var4.key = var6;
        var6 = function arg0() {
            var0 = arg0;
            _closure1_slot134 = var0;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[113] = var4;
        var4 = {};
        var6 = 'supportsScreenSoundshare';
        var4.key = var6;
        var6 = function() {
            _fun30404: for (var _fun30404_ip = 0;;) switch (_fun30404_ip) {
                case 0:
                    var5 = this;
                    var1 = _closure1_slot0;
                    var0 = _closure1_slot3;
                    var4 = 30;
                    var0 = var0[var4];
                    var3 = undefined;
                    var1 = var1.bind(var3)(var0);
                    var0 = var1.isMac;
                    var0 = var0.bind(var1)();
                    if (var0) {
                        _fun30404_ip = 183;
                        continue _fun30404
                    }
                case 44:
                    var1 = _closure1_slot0;
                    var0 = _closure1_slot3;
                    var0 = var0[var4];
                    var1 = var1.bind(var3)(var0);
                    var0 = var1.isWindows;
                    var0 = var0.bind(var1)();
                    if (var0) {
                        _fun30404_ip = 137;
                        continue _fun30404
                    }
                case 74:
                    var1 = _closure1_slot0;
                    var0 = _closure1_slot3;
                    var0 = var0[var4];
                    var1 = var1.bind(var3)(var0);
                    var0 = var1.isLinux;
                    var0 = var0.bind(var1)();
                    var1 = !var0;
                    var0 = !var1;
                    if (var1) {
                        _fun30404_ip = 135;
                        continue _fun30404
                    }
                case 110:
                    var6 = _closure1_slot73;
                    var4 = var6.supports;
                    var1 = _closure1_slot47;
                    var1 = var1.SCREEN_SOUNDSHARE;
                    var0 = var4.bind(var6)(var1);
                case 135:
                    _fun30404_ip = 178;
                    continue _fun30404;
                case 137:
                    var6 = _closure1_slot73;
                    var4 = var6.supports;
                    var1 = _closure1_slot47;
                    var1 = var1.SCREEN_SOUNDSHARE;
                    var1 = var4.bind(var6)(var1);
                    if (!var1) {
                        _fun30404_ip = 175;
                        continue _fun30404
                    }
                case 165:
                    var4 = var5.getExperimentalSoundshare;
                    var1 = var4.bind(var5)();
                case 175:
                    var0 = var1;
                case 178:
                    _fun30404_ip = 313;
                    continue _fun30404;
                case 183:
                    var5 = _closure1_slot73;
                    var4 = var5.supports;
                    var1 = _closure1_slot47;
                    var1 = var1.SOUNDSHARE;
                    var1 = var4.bind(var5)(var1);
                    if (!var1) {
                        _fun30404_ip = 299;
                        continue _fun30404
                    }
                case 211:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var6 = 71;
                    var6 = var4[var6];
                    var7 = var5.bind(var3)(var6);
                    var6 = var7.satisfies;
                    var9 = 32;
                    var4 = var4[var9];
                    var5 = var5.bind(var3)(var4);
                    var4 = null;
                    var4 = var4 == var5;
                    var5 = undefined;
                    if (var4) {
                        _fun30404_ip = 289;
                        continue _fun30404
                    }
                case 260:
                    var8 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var4 = var4[var9];
                    var4 = var8.bind(var3)(var4);
                    var4 = var4.os;
                    var5 = var4.release;
                case 289:
                    var4 = _closure1_slot33;
                    var1 = var6.bind(var7)(var5, var4);
                case 299:
                    if (!var1) {
                        _fun30404_ip = 310;
                        continue _fun30404
                    }
                case 302:
                    var2 = _closure1_slot160;
                    var1 = var2.bind(var3)();
                case 310:
                    var0 = var1;
                case 313:
                    return var0;
            }
        };
        var4.value = var6;
        var0[114] = var4;
        var4 = {};
        var6 = 'getSystemMicrophoneMode';
        var4.key = var6;
        var6 = function() {
            _fun30405: for (var _fun30405_ip = 0;;) switch (_fun30405_ip) {
                case 0:
                    var4 = this;
                    var2 = _closure1_slot0;
                    var0 = _closure1_slot3;
                    var5 = 30;
                    var0 = var0[var5];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var0);
                    var0 = var2.isWindows;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun30405_ip = 109;
                        continue _fun30405
                    }
                case 41:
                    var2 = _closure1_slot0;
                    var0 = _closure1_slot3;
                    var0 = var0[var5];
                    var2 = var2.bind(var3)(var0);
                    var0 = var2.isMac;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun30405_ip = 103;
                        continue _fun30405
                    }
                case 71:
                    var2 = _closure1_slot0;
                    var0 = _closure1_slot3;
                    var0 = var0[var5];
                    var2 = var2.bind(var3)(var0);
                    var0 = var2.isIOS;
                    var2 = var0.bind(var2)();
                    var0 = undefined;
                    if (!var2) {
                        _fun30405_ip = 107;
                        continue _fun30405
                    }
                case 103:
                    var0 = _closure1_slot129;
                case 107:
                    _fun30405_ip = 179;
                    continue _fun30405;
                case 109:
                    var1 = var4.getInputDevices;
                    var2 = var1.bind(var4)();
                    var1 = var4.getInputDeviceId;
                    var1 = var1.bind(var4)();
                    var4 = var2[var1];
                    var2 = null;
                    var5 = var2 == var4;
                    var1 = undefined;
                    if (var5) {
                        _fun30405_ip = 176;
                        continue _fun30405
                    }
                case 144:
                    var4 = var4.effects;
                    var2 = var2 == var4;
                    var1 = undefined;
                    if (var2) {
                        _fun30405_ip = 176;
                        continue _fun30405
                    }
                case 159:
                    var3 = var4.find;
                    var2 = function(arg0) { // Environment: var2
                        var1 = _closure1_slot68;
                        var0 = arg0;
                        var0 = var0 === var1;
                        return var0;
                    };
                    var1 = var3.bind(var4)(var2);
                case 176:
                    var0 = var1;
                case 179:
                    return var0;
            }
        };
        var4.value = var6;
        var0[115] = var4;
        var4 = {};
        var6 = 'getVideoStreamParameters';
        var4.key = var6;
        var6 = function() {
            _fun30407: for (var _fun30407_ip = 0;;) switch (_fun30407_ip) {
                case 0:
                    var5 = arguments[0];
                    var6 = this;
                    var0 = undefined;
                    if (!(var5 === var0)) {
                        _fun30407_ip = 25;
                        continue _fun30407
                    }
                case 12:
                    var0 = _closure1_slot53;
                    var5 = var0.DEFAULT;
                case 25:
                    var1 = var6.supports;
                    var0 = _closure1_slot47;
                    var0 = var0.VIDEO;
                    var0 = var1.bind(var6)(var0);
                    if (var0) {
                        _fun30407_ip = 58;
                        continue _fun30407
                    }
                case 52:
                    var0 = new Array(0);
                    _fun30407_ip = 131;
                    continue _fun30407;
                case 58:
                    var2 = {};
                    var1 = '100';
                    var2.rid = var1;
                    var1 = _closure1_slot53;
                    var1 = var1.DEFAULT;
                    if (!(var5 !== var1)) {
                        _fun30407_ip = 97;
                        continue _fun30407
                    }
                case 85:
                    var1 = _closure1_slot55;
                    var1 = var1.SCREEN;
                    _fun30407_ip = 107;
                    continue _fun30407;
                case 97:
                    var4 = _closure1_slot55;
                    var1 = var4.VIDEO;
                case 107:
                    var2.type = var1;
                    var1 = _closure1_slot59;
                    var2.quality = var1;
                    var1 = new Array(1);
                    var1[0] = var2;
                    var0 = var1;
                case 131:
                    var1 = var6.isSimulcastSupported;
                    var1 = var1.bind(var6)();
                    if (!var1) {
                        _fun30407_ip = 178;
                        continue _fun30407
                    }
                case 146:
                    var2 = _closure1_slot53;
                    var2 = var2.DEFAULT;
                    var2 = var5 === var2;
                    if (var2) {
                        _fun30407_ip = 175;
                        continue _fun30407
                    }
                case 163:
                    var4 = var6.goLiveSimulcastEnabled;
                    var2 = var4.bind(var6)();
                case 175:
                    var1 = var2;
                case 178:
                    if (!var1) {
                        _fun30407_ip = 253;
                        continue _fun30407
                    }
                case 181:
                    var2 = var0.push;
                    var1 = {};
                    var4 = '50';
                    var1.rid = var4;
                    var4 = _closure1_slot53;
                    var4 = var4.DEFAULT;
                    if (!(var5 !== var4)) {
                        _fun30407_ip = 225;
                        continue _fun30407
                    }
                case 213:
                    var4 = _closure1_slot55;
                    var4 = var4.SCREEN;
                    _fun30407_ip = 235;
                    continue _fun30407;
                case 225:
                    var5 = _closure1_slot55;
                    var4 = var5.VIDEO;
                case 235:
                    var1.type = var4;
                    var3 = _closure1_slot60;
                    var1.quality = var3;
                    var1 = var2.bind(var0)(var1);
                case 253:
                    return var0;
            }
        };
        var4.value = var6;
        var0[116] = var4;
        var4 = {};
        var6 = 'fetchAsyncResources';
        var4.key = var6;
        var6 = function() {
            _fun30408: for (var _fun30408_ip = 0;;) switch (_fun30408_ip) {
                case 0:
                    var2 = {};
                    var0 = false;
                    var2.fetchDave = var0;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 30;
                    var1 = var4[var1];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var1);
                    var1 = var3.isWeb;
                    var1 = var1.bind(var3)();
                    if (!var1) {
                        _fun30408_ip = 108;
                        continue _fun30408
                    }
                case 47:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var1 = 82;
                    var1 = var5[var1];
                    var1 = var3.bind(var4)(var1);
                    var4 = var1.DaveForBrowserExperiment;
                    var3 = var4.getCurrentConfig;
                    var1 = {};
                    var5 = 'MediaEngineStore fetchAsyncResources';
                    var1.location = var5;
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.loadWasmModule;
                    var2.fetchDave = var1;
                case 108:
                    var1 = _closure1_slot73;
                    var0 = var1.fetchAsyncResources;
                    var0 = var0.bind(var1)(var2);
                    return var0;
            }
        };
        var4.value = var6;
        var0[117] = var4;
        var4 = {};
        var6 = 'startDavePreload';
        var4.key = var6;
        var6 = function() {
            _fun30409: for (var _fun30409_ip = 0;;) switch (_fun30409_ip) {
                case 0:
                    var1 = _closure1_slot121;
                    if (var1) {
                        _fun30409_ip = 91;
                        continue _fun30409
                    }
                case 10:
                    var3 = true;
                    _closure1_slot121 = var3;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 30;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var1 = var2.isWeb;
                    var1 = var1.bind(var2)();
                    if (!var1) {
                        _fun30409_ip = 91;
                        continue _fun30409
                    }
                case 51:
                    var2 = _closure1_slot73;
                    var1 = var2.fetchAsyncResources;
                    var0 = {};
                    var0.fetchDave = var3;
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.catch;
                    var0 = function(arg0) { // Environment: var0
                        var3 = arg0;
                        var4 = _closure1_slot61;
                        var2 = var4.warn;
                        var1 = 'DAVE preload failed:';
                        var1 = var2.bind(var4)(var1, var3);
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var0 = 86;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.captureException;
                        var1 = var1.bind(var2)(var3);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                case 91:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[118] = var4;
        var4 = {};
        var6 = 'getSupportedSecureFramesProtocolVersion';
        var4.key = var6;
        var6 = function() {
            _fun30411: for (var _fun30411_ip = 0;;) switch (_fun30411_ip) {
                case 0:
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var0 = 30;
                    var0 = var2[var0];
                    var5 = undefined;
                    var1 = var1.bind(var5)(var0);
                    var0 = var1.isWeb;
                    var0 = var0.bind(var1)();
                    if (!var0) {
                        _fun30411_ip = 100;
                        continue _fun30411
                    }
                case 38:
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var0 = 82;
                    var0 = var2[var0];
                    var0 = var1.bind(var5)(var0);
                    var2 = var0.DaveForBrowserExperiment;
                    var1 = var2.getCurrentConfig;
                    var0 = {};
                    var4 = 'MediaEngineStore getSupportedSecureFramesProtocolVersion';
                    var0.location = var4;
                    var0 = var1.bind(var2)(var0);
                    var0 = var0.useWasmModule;
                    if (var0) {
                        _fun30411_ip = 100;
                        continue _fun30411
                    }
                case 96:
                    var0 = 0;
                    return var0;
                case 100:
                    var1 = _closure1_slot73;
                    var0 = var1.getSupportedSecureFramesProtocolVersion;
                    var1 = var0.bind(var1)();
                    var0 = 114;
                    if (!(var0 === var1)) {
                        _fun30411_ip = 124;
                        continue _fun30411
                    }
                case 121:
                    var1 = 1;
                case 124:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var0 = 82;
                    var2 = var7[var0];
                    var2 = var4.bind(var5)(var2);
                    var9 = var2.SecureFramesUserExperiment;
                    var8 = var9.getCurrentConfig;
                    var2 = {};
                    var6 = 'MediaEngineStore';
                    var2.location = var6;
                    var2 = var8.bind(var9)(var2);
                    var0 = var7[var0];
                    var0 = var4.bind(var5)(var0);
                    var5 = var0.DaveOptInExperiment;
                    var4 = var5.getConfig;
                    var0 = {};
                    var0.location = var6;
                    var0 = var4.bind(var5)(var0);
                    var4 = var2.canSupportDaveProtocol;
                    if (var4) {
                        _fun30411_ip = 244;
                        continue _fun30411
                    }
                case 214:
                    var5 = var0.allowOptIn;
                    var0 = 0;
                    if (!var5) {
                        _fun30411_ip = 262;
                        continue _fun30411
                    }
                case 225:
                    var5 = _closure1_slot14;
                    var3 = var5.getPersistentCodesEnabled;
                    var3 = var3.bind(var5)();
                    var0 = 0;
                    if (!var3) {
                        _fun30411_ip = 262;
                        continue _fun30411
                    }
                case 244:
                    var2 = var2.protocolVersionFloor;
                    var2 = var1 >= var2;
                    var0 = 0;
                    if (!var2) {
                        _fun30411_ip = 262;
                        continue _fun30411
                    }
                case 259:
                    var0 = var1;
                case 262:
                    return var0;
            }
        };
        var4.value = var6;
        var0[119] = var4;
        var4 = {};
        var6 = 'hasClipsSource';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot76;
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var4.value = var6;
        var0[120] = var4;
        var4 = {};
        var6 = 'getGpuBrand';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot131;
            return var0;
        };
        var4.value = var5;
        var0[121] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var9 = var9.bind(var0)(var11);
    var9.displayName = var3;
    var3 = 49;
    var3 = var6[var3];
    var28 = var8.bind(var0)(var3);
    var3 = {};
    var11 = function arg0() {
        _fun30414: for (var _fun30414_ip = 0;;) switch (_fun30414_ip) {
            case 0:
                var3 = arg0;
                var2 = var3.guildId;
                var1 = var3.channelId;
                var0 = var3.currentVoiceChannelId;
                var5 = var3.video;
                if (!(var0 !== var1)) {
                    _fun30414_ip = 46;
                    continue _fun30414
                }
            case 29:
                var4 = _closure1_slot152;
                var3 = undefined;
                var0 = null;
                var0 = var4.bind(var3)(var5, var0);
            case 46:
                var0 = null;
                if (!(var0 == var2)) {
                    _fun30414_ip = 56;
                    continue _fun30414
                }
            case 52:
                if (!(var0 == var1)) {
                    _fun30414_ip = 67;
                    continue _fun30414
                }
            case 56:
                var0 = false;
                _closure1_slot106 = var0;
                _fun30414_ip = 153;
                continue _fun30414;
            case 67:
                var1 = _closure1_slot106;
                if (var1) {
                    _fun30414_ip = 153;
                    continue _fun30414
                }
            case 77:
                var1 = true;
                _closure1_slot106 = var1;
                var1 = _closure1_slot148;
                var3 = undefined;
                var2 = var1.bind(var3)();
                var1 = var2.mute;
                if (var1) {
                    _fun30414_ip = 108;
                    continue _fun30414
                }
            case 102:
                var1 = var2.deaf;
            case 108:
                if (!var1) {
                    _fun30414_ip = 153;
                    continue _fun30414
                }
            case 111:
                var2 = _closure1_slot164;
                var1 = {
                    'deaf': false,
                    'mute': false
                };
                var1 = var2.bind(var3)(var1);
                var2 = _closure1_slot73;
                var1 = var2.eachConnection;
                var0 = _closure1_slot151;
                var0 = var1.bind(var2)(var0);
            case 153:
                var0 = undefined;
                return var0;
        }
    };
    var3.VOICE_CHANNEL_SELECT = var11;
    var11 = function arg0() {
        var0 = arg0;
        var3 = var0.voiceStates;
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun30416: for (var _fun30416_ip = 0;;) switch (_fun30416_ip) {
                case 0:
                    var0 = arg1;
                    var3 = _closure1_slot74;
                    var2 = var0.sessionId;
                    if (!(var3 !== var2)) {
                        _fun30416_ip = 90;
                        continue _fun30416
                    }
                case 20:
                    var3 = var0.userId;
                    var4 = _closure1_slot17;
                    var2 = var4.getId;
                    var2 = var2.bind(var4)();
                    var2 = var3 === var2;
                    if (!var2) {
                        _fun30416_ip = 66;
                        continue _fun30416
                    }
                case 46:
                    var4 = _closure1_slot21;
                    var3 = var4.getChannelId;
                    var4 = var3.bind(var4)();
                    var3 = null;
                    var2 = var3 == var4;
                case 66:
                    if (!var2) {
                        _fun30416_ip = 85;
                        continue _fun30416
                    }
                case 69:
                    var5 = _closure1_slot152;
                    var4 = undefined;
                    var3 = false;
                    var2 = null;
                    var2 = var5.bind(var4)(var3, var2);
                case 85:
                    var2 = arg0;
                    return var2;
                case 90:
                    var2 = var0.mute;
                    if (var2) {
                        _fun30416_ip = 105;
                        continue _fun30416
                    }
                case 99:
                    var2 = var0.suppress;
                case 105:
                    _closure1_slot88 = var2;
                    var2 = var0.deaf;
                    _closure1_slot91 = var2;
                    var4 = _closure1_slot73;
                    var3 = var4.eachConnection;
                    var2 = _closure1_slot151;
                    var2 = var3.bind(var4)(var2);
                    var2 = var0.guildId;
                    var4 = null;
                    var5 = var4 != var2;
                    if (!var5) {
                        _fun30416_ip = 161;
                        continue _fun30416
                    }
                case 152:
                    var2 = var0.channelId;
                    var5 = var4 != var2;
                case 161:
                    if (!var5) {
                        _fun30416_ip = 172;
                        continue _fun30416
                    }
                case 164:
                    var2 = _closure1_slot118;
                    var5 = var4 != var2;
                case 172:
                    if (!var5) {
                        _fun30416_ip = 188;
                        continue _fun30416
                    }
                case 175:
                    var3 = _closure1_slot118;
                    var2 = var0.channelId;
                    var5 = var3 !== var2;
                case 188:
                    var3 = _closure1_slot106;
                    var2 = !var3;
                    if (var3) {
                        _fun30416_ip = 207;
                        continue _fun30416
                    }
                case 198:
                    var3 = var0.channelId;
                    var2 = var4 == var3;
                case 207:
                    var4 = _closure1_slot152;
                    var3 = !var5;
                    if (var5) {
                        _fun30416_ip = 220;
                        continue _fun30416
                    }
                case 217:
                    var3 = !var2;
                case 220:
                    if (!var3) {
                        _fun30416_ip = 227;
                        continue _fun30416
                    }
                case 223:
                    var3 = _closure1_slot92;
                case 227:
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var0 = var0.channelId;
                    _closure1_slot118 = var0;
                    var0 = true;
                    return var0;
            }
        };
        var0 = false;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3.VOICE_STATE_UPDATES = var11;
    var11 = function arg0() {
        _fun30417: for (var _fun30417_ip = 0;;) switch (_fun30417_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.sessionId;
                var _closure1_slot74 = var0;
                var5 = false;
                _closure1_slot88 = var5;
                _closure1_slot91 = var5;
                var2 = _closure1_slot148;
                var0 = undefined;
                var3 = var2.bind(var0)();
                var2 = _closure1_slot161;
                var2 = var2.bind(var0)();
                if (!var2) {
                    _fun30417_ip = 96;
                    continue _fun30417
                }
            case 47:
                var2 = _closure1_slot162;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun30417_ip = 77;
                    continue _fun30417
                }
            case 58:
                var2 = var3.automaticAudioSubsystem;
                if (!var2) {
                    _fun30417_ip = 96;
                    continue _fun30417
                }
            case 67:
                var2 = _closure1_slot186;
                var2 = var2.bind(var0)();
                _fun30417_ip = 96;
                continue _fun30417;
            case 77:
                var4 = _closure1_slot185;
                var2 = _closure1_slot46;
                var2 = var2.AUTOMATIC;
                var2 = var4.bind(var0)(var2);
            case 96:
                var6 = _closure1_slot73;
                var4 = var6.supports;
                var2 = _closure1_slot47;
                var2 = var2.OFFLOAD_ADM_CONTROLS;
                var2 = var4.bind(var6)(var2);
                if (!var2) {
                    _fun30417_ip = 323;
                    continue _fun30417
                }
            case 127:
                var4 = _closure1_slot0;
                var2 = _closure1_slot3;
                var9 = 30;
                var2 = var2[var9];
                var4 = var4.bind(var0)(var2);
                var2 = var4.isDesktop;
                var2 = var2.bind(var4)();
                var4 = _closure1_slot0;
                var6 = _closure1_slot3;
                if (var2) {
                    _fun30417_ip = 270;
                    continue _fun30417
                }
            case 168:
                var2 = var6[var9];
                var7 = var4.bind(var0)(var2);
                var2 = var7.isIOS;
                var2 = var2.bind(var7)();
                if (var2) {
                    _fun30417_ip = 217;
                    continue _fun30417
                }
            case 190:
                var8 = _closure1_slot0;
                var7 = _closure1_slot3;
                var7 = var7[var9];
                var8 = var8.bind(var0)(var7);
                var7 = var8.isAndroid;
                var2 = var7.bind(var8)();
            case 217:
                var5 = false;
                if (!var2) {
                    _fun30417_ip = 308;
                    continue _fun30417
                }
            case 222:
                var7 = _closure1_slot0;
                var8 = _closure1_slot3;
                var2 = 79;
                var2 = var8[var2];
                var8 = var7.bind(var0)(var2);
                var7 = var8.getAsyncAudioDeviceMobileExperimentConfig;
                var2 = {};
                var9 = 'handleConnectionOpen';
                var2.location = var9;
                var2 = var7.bind(var8)(var2);
                var5 = var2.enabled;
                _fun30417_ip = 308;
                continue _fun30417;
            case 270:
                var2 = 78;
                var2 = var6[var2];
                var6 = var4.bind(var0)(var2);
                var4 = var6.getAsyncAudioDeviceExperimentConfig;
                var2 = {};
                var7 = 'handleConnectionOpen';
                var2.location = var7;
                var2 = var4.bind(var6)(var2);
                var5 = var2.enabled;
            case 308:
                var4 = _closure1_slot73;
                var2 = var4.setOffloadAdmControls;
                var2 = var2.bind(var4)(var5);
            case 323:
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var2 = 80;
                var2 = var5[var2];
                var5 = var4.bind(var0)(var2);
                var4 = var5.isVoiceFiltersEnabled;
                var2 = {
                    'location': 'MediaEngineStore',
                    'autoTrackExposure': false
                };
                var2 = var4.bind(var5)(var2);
                if (!var2) {
                    _fun30417_ip = 383;
                    continue _fun30417
                }
            case 371:
                var4 = var3.mostRecentlyRequestedVoiceFilter;
                var3 = null;
                var2 = var3 !== var4;
            case 383:
                if (!var2) {
                    _fun30417_ip = 416;
                    continue _fun30417
                }
            case 386:
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var3 = 30;
                var3 = var5[var3];
                var4 = var4.bind(var0)(var3);
                var3 = var4.isDesktop;
                var2 = var3.bind(var4)();
            case 416:
                if (!var2) {
                    _fun30417_ip = 551;
                    continue _fun30417
                }
            case 422:
                var3 = _closure1_slot16;
                var2 = var3.getLastInitAttemptMayHaveCrashed;
                var2 = var2.bind(var3)();
                if (var2) {
                    _fun30417_ip = 473;
                    continue _fun30417
                }
            case 441:
                var3 = _closure1_slot0;
                var4 = _closure1_slot3;
                var2 = 81;
                var2 = var4[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.maybeSetupVoiceFiltersNativeModule;
                var2 = var2.bind(var3)();
                _fun30417_ip = 551;
                continue _fun30417;
            case 473:
                var3 = _closure1_slot1;
                var4 = _closure1_slot3;
                var2 = 49;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.dispatch;
                var2 = {
                    'type': 'AUDIO_SET_SELF_MUTE',
                    'mute': true,
                    'context': null,
                    'playSoundEffect': true
                };
                var5 = _closure1_slot53;
                var5 = var5.DEFAULT;
                var2.context = var5;
                var2 = var3.bind(var4)(var2);
                var3 = _closure1_slot164;
                var2 = {};
                var4 = null;
                var2.mostRecentlyRequestedVoiceFilter = var4;
                var2 = var3.bind(var0)(var2);
            case 551:
                var1 = _closure1_slot174;
                var1 = var1.bind(var0)();
                return var0;
        }
    };
    var3.CONNECTION_OPEN = var11;
    var11 = function() {
        var0 = null;
        _closure1_slot74 = var0;
        var0 = undefined;
        return var0;
    };
    var3.CONNECTION_CLOSED = var11;
    var11 = function() {
        _fun30419: for (var _fun30419_ip = 0;;) switch (_fun30419_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 30;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = var2.isWeb;
                var1 = var1.bind(var2)();
                if (!var1) {
                    _fun30419_ip = 121;
                    continue _fun30419
                }
            case 38:
                var2 = _closure1_slot0;
                var4 = _closure1_slot3;
                var1 = 82;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var3 = var1.DaveForBrowserExperiment;
                var2 = var3.getCurrentConfig;
                var1 = {};
                var4 = 'MediaEngineStore handlePostConnectionOpen';
                var1.location = var4;
                var2 = var2.bind(var3)(var1);
                var1 = var2.loadWasmModule;
                if (!var1) {
                    _fun30419_ip = 102;
                    continue _fun30419
                }
            case 96:
                var1 = var2.preload;
            case 102:
                if (!var1) {
                    _fun30419_ip = 121;
                    continue _fun30419
                }
            case 105:
                var1 = _closure1_slot71;
                var0 = var1.startDavePreload;
                var0 = var0.bind(var1)();
            case 121:
                var0 = false;
                return var0;
        }
    };
    var3.POST_CONNECTION_OPEN = var11;
    var11 = function arg0() {
        _fun30420: for (var _fun30420_ip = 0;;) switch (_fun30420_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.state;
                var1 = _closure1_slot28;
                var1 = var1.CONNECTING;
                if (!(var1 !== var2)) {
                    _fun30420_ip = 124;
                    continue _fun30420
                }
            case 25:
                var1 = _closure1_slot28;
                var1 = var1.RTC_CONNECTING;
                if (!(var1 !== var2)) {
                    _fun30420_ip = 102;
                    continue _fun30420
                }
            case 39:
                var1 = _closure1_slot28;
                var1 = var1.RTC_CONNECTED;
                if (!(var1 !== var2)) {
                    _fun30420_ip = 90;
                    continue _fun30420
                }
            case 53:
                var1 = _closure1_slot28;
                var1 = var1.DISCONNECTED;
                if (!(var1 === var2)) {
                    _fun30420_ip = 134;
                    continue _fun30420
                }
            case 67:
                var1 = function() {
                    _fun30421: for (var _fun30421_ip = 0;;) switch (_fun30421_ip) {
                        case 0:
                            var0 = _closure1_slot126;
                            var1 = var0.size;
                            var0 = 0;
                            if (!(var0 !== var1)) {
                                _fun30421_ip = 110;
                                continue _fun30421
                            }
                        case 20:
                            var0 = _closure1_slot53;
                            var4 = var0.DEFAULT;
                            var _closure3_slot0 = var4;
                            var1 = _closure1_slot148;
                            var0 = undefined;
                            var1 = var1.bind(var0)(var4);
                            var1 = var1.disabledLocalVideos;
                            var _closure3_slot1 = var1;
                            var6 = _closure1_slot126;
                            var5 = var6.forEach;
                            var3 = function(arg0) { // Environment: var3
                                var5 = arg0;
                                var _closure4_slot0 = var5;
                                var4 = _closure1_slot1;
                                var2 = _closure1_slot3;
                                var0 = 83;
                                var2 = var2[var0];
                                var0 = undefined;
                                var7 = var4.bind(var0)(var2);
                                var4 = _closure3_slot1;
                                var6 = var4[var5];
                                var4 = 'If you are auto-disabled, then you are also disabled.';
                                var4 = var7.bind(var0)(var6, var4);
                                var4 = _closure3_slot1;
                                var4 = delete var4[var5];
                                var4 = _closure1_slot73;
                                var3 = var4.eachConnection;
                                var2 = _closure3_slot0;
                                var1 = function(arg0) { // Environment: var1
                                    var3 = arg0;
                                    var2 = var3.setLocalVideoDisabled;
                                    var1 = _closure4_slot0;
                                    var0 = false;
                                    var0 = var2.bind(var3)(var1, var0);
                                    return var0;
                                };
                                var1 = var3.bind(var4)(var1, var2);
                                return var0;
                            };
                            var3 = var5.bind(var6)(var3);
                            var5 = _closure1_slot126;
                            var3 = var5.clear;
                            var3 = var3.bind(var5)();
                            var3 = _closure1_slot164;
                            var2 = {};
                            var2.disabledLocalVideos = var1;
                            var1 = false;
                            var1 = var3.bind(var0)(var2, var4, var1);
                            return var0;
                        case 110:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = undefined;
                var1 = var1.bind(var2)();
                var1 = _closure1_slot177;
                var1 = var1.bind(var2)();
                _fun30420_ip = 134;
                continue _fun30420;
            case 90:
                var2 = _closure1_slot152;
                var1 = undefined;
                var1 = var2.bind(var1)();
                _fun30420_ip = 134;
                continue _fun30420;
            case 102:
                var1 = false;
                _closure1_slot102 = var1;
                _closure1_slot103 = var1;
                var1 = undefined;
                _closure1_slot104 = var1;
                _closure1_slot105 = var1;
                _fun30420_ip = 134;
                continue _fun30420;
            case 124:
                var2 = _closure1_slot166;
                var1 = undefined;
                var1 = var2.bind(var1)();
            case 134:
                var1 = _closure1_slot138;
                var0 = var1.update;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
        }
    };
    var3.RTC_CONNECTION_STATE = var11;
    var11 = function arg0() {
        var0 = arg0;
        var1 = var0.mute;
        _closure1_slot89 = var1;
        var2 = _closure1_slot73;
        var1 = var2.eachConnection;
        var0 = _closure1_slot151;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var3.AUDIO_SET_TEMPORARY_SELF_MUTE = var11;
    var11 = function arg0() {
        _fun30425: for (var _fun30425_ip = 0;;) switch (_fun30425_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.context;
                var2 = var0.playSoundEffect;
                var3 = _closure1_slot148;
                var0 = undefined;
                var5 = var3.bind(var0)(var4);
                var3 = var5.mute;
                var5 = var5.deaf;
                var6 = _closure1_slot53;
                var6 = var6.DEFAULT;
                if (!(var4 === var6)) {
                    _fun30425_ip = 102;
                    continue _fun30425
                }
            case 54:
                var7 = _closure1_slot1;
                var8 = _closure1_slot3;
                var6 = 35;
                var6 = var8[var6];
                var8 = var7.bind(var0)(var6);
                var7 = var8.requestPermission;
                var6 = _closure1_slot42;
                var6 = var6.AUDIO;
                var6 = var7.bind(var8)(var6);
                var6 = _closure1_slot90;
                if (var6) {
                    _fun30425_ip = 168;
                    continue _fun30425
                }
            case 102:
                var6 = !var5;
                if (!var6) {
                    _fun30425_ip = 111;
                    continue _fun30425
                }
            case 108:
                var6 = !var3;
            case 111:
                if (var6) {
                    _fun30425_ip = 116;
                    continue _fun30425
                }
            case 114:
                var5 = false;
            case 116:
                if (var2) {
                    _fun30425_ip = 125;
                    continue _fun30425
                }
            case 119:
                var2 = true;
                _closure1_slot95 = var2;
            case 125:
                var3 = _closure1_slot164;
                var2 = {};
                var2.mute = var6;
                var2.deaf = var5;
                var2 = var3.bind(var0)(var2, var4);
                var3 = _closure1_slot73;
                var2 = var3.eachConnection;
                var1 = _closure1_slot151;
                var1 = var2.bind(var3)(var1);
                return var0;
            case 168:
                var0 = false;
                return var0;
        }
    };
    var3.AUDIO_TOGGLE_SELF_MUTE = var11;
    var11 = function arg0() {
        _fun30426: for (var _fun30426_ip = 0;;) switch (_fun30426_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.context;
                var0 = var1.mute;
                var2 = var1.playSoundEffect;
                var4 = _closure1_slot164;
                var3 = {};
                var3.mute = var0;
                var0 = undefined;
                var3 = var4.bind(var0)(var3, var5);
                if (var2) {
                    _fun30426_ip = 51;
                    continue _fun30426
                }
            case 45:
                var2 = true;
                _closure1_slot95 = var2;
            case 51:
                var3 = _closure1_slot73;
                var2 = var3.eachConnection;
                var1 = _closure1_slot151;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var3.AUDIO_SET_SELF_MUTE = var11;
    var11 = function arg0() {
        var0 = arg0;
        var4 = var0.context;
        var3 = _closure1_slot164;
        var2 = {};
        var5 = _closure1_slot148;
        var0 = undefined;
        var5 = var5.bind(var0)(var4);
        var5 = var5.deaf;
        var5 = !var5;
        var2.deaf = var5;
        var2 = var3.bind(var0)(var2, var4);
        var3 = _closure1_slot73;
        var2 = var3.eachConnection;
        var1 = _closure1_slot151;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.AUDIO_TOGGLE_SELF_DEAF = var11;
    var11 = function arg0() {
        _fun30428: for (var _fun30428_ip = 0;;) switch (_fun30428_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.context;
                var3 = var0.userId;
                var _closure2_slot0 = var3;
                var0 = undefined;
                var _closure2_slot1 = var0;
                var6 = _closure1_slot17;
                var5 = var6.getId;
                var5 = var5.bind(var6)();
                if (!(var3 !== var5)) {
                    _fun30428_ip = 122;
                    continue _fun30428
                }
            case 46:
                var5 = _closure1_slot148;
                var5 = var5.bind(var0)(var4);
                var6 = var5.localMutes;
                _closure2_slot1 = var6;
                var5 = var6[var3];
                if (var5) {
                    _fun30428_ip = 80;
                    continue _fun30428
                }
            case 72:
                var5 = true;
                var6[var3] = var5;
                _fun30428_ip = 84;
                continue _fun30428;
            case 80:
                var3 = delete var6[var3];
            case 84:
                var5 = _closure1_slot164;
                var3 = {};
                var3.localMutes = var6;
                var3 = var5.bind(var0)(var3, var4);
                var3 = _closure1_slot73;
                var2 = var3.eachConnection;
                var1 = function(arg0) { // Environment: var1
                    _fun30429: for (var _fun30429_ip = 0;;) switch (_fun30429_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = var3.setLocalMute;
                            var1 = _closure2_slot0;
                            var0 = _closure2_slot1;
                            var0 = var0[var1];
                            if (var0) {
                                _fun30429_ip = 29;
                                continue _fun30429
                            }
                        case 27:
                            var0 = false;
                        case 29:
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1, var4);
            case 122:
                return var0;
        }
    };
    var3.AUDIO_TOGGLE_LOCAL_MUTE = var11;
    var11 = function arg0() {
        _fun30430: for (var _fun30430_ip = 0;;) switch (_fun30430_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.context;
                var5 = var0.userId;
                var _closure2_slot0 = var5;
                var16 = var0.videoToggleState;
                var6 = var0.persist;
                var12 = var0.isAutomatic;
                var0 = undefined;
                var _closure2_slot1 = var0;
                var7 = _closure1_slot1;
                var3 = _closure1_slot3;
                var17 = 83;
                var3 = var3[var17];
                var8 = var7.bind(var0)(var3);
                var3 = var6;
                if (!var6) {
                    _fun30430_ip = 75;
                    continue _fun30430
                }
            case 72:
                var3 = var12;
            case 75:
                var7 = !var3;
                var3 = 'These are not allowed to both be true.';
                var3 = var8.bind(var0)(var7, var3);
                var3 = _closure1_slot30;
                var3 = var3.DISABLED;
                var3 = var16 === var3;
                var7 = _closure1_slot148;
                var7 = var7.bind(var0)(var4);
                var7 = var7.disabledLocalVideos;
                _closure2_slot1 = var7;
                var9 = var7[var5];
                var14 = null;
                var8 = var14 != var9;
                if (!var8) {
                    _fun30430_ip = 139;
                    continue _fun30430
                }
            case 136:
                var8 = var9;
            case 139:
                var10 = _closure1_slot126;
                var9 = var10.has;
                var9 = var9.bind(var10)(var5);
                var10 = _closure1_slot30;
                var10 = var10.AUTO_ENABLED;
                var10 = var16 === var10;
                if (var10) {
                    _fun30430_ip = 184;
                    continue _fun30430
                }
            case 170:
                var11 = _closure1_slot30;
                var11 = var11.MANUAL_ENABLED;
                var10 = var16 === var11;
            case 184:
                var18 = _closure1_slot61;
                var15 = var18.info;
                var13 = global;
                var11 = var13.HermesInternal;
                var22 = var11.concat;
                var31 = 'disableVideo=';
                var29 = ' currentlyDisabled=';
                var27 = ' currentlyAutoDisabled=';
                var25 = ', isVideoShown=';
                var30 = var3;
                var28 = var8;
                var26 = var9;
                var24 = var10;
                var11 = var31[var22](var30, var29, var28, var27, var26, var25, var24, var23);
                var11 = var15.bind(var18)(var11);
                var15 = _closure1_slot1;
                var11 = _closure1_slot3;
                var11 = var11[var17];
                var17 = var15.bind(var0)(var11);
                var11 = var10;
                var10 = var9;
                if (!var10) {
                    _fun30430_ip = 281;
                    continue _fun30430
                }
            case 278:
                var10 = !var8;
            case 281:
                var15 = !var10;
                var10 = 'If you are auto-disabled, then you are also disabled.';
                var10 = var17.bind(var0)(var15, var10);
                var23 = var3 !== var8;
                var8 = _closure1_slot53;
                var8 = var8.DEFAULT;
                var8 = var4 === var8;
                if (!var12) {
                    _fun30430_ip = 320;
                    continue _fun30430
                }
            case 317:
                var12 = var23;
            case 320:
                if (!var12) {
                    _fun30430_ip = 326;
                    continue _fun30430
                }
            case 323:
                var12 = var8;
            case 326:
                var10 = var6;
                if (!var10) {
                    _fun30430_ip = 335;
                    continue _fun30430
                }
            case 332:
                var10 = var23;
            case 335:
                if (!var10) {
                    _fun30430_ip = 341;
                    continue _fun30430
                }
            case 338:
                var10 = var8;
            case 341:
                var18 = _closure1_slot61;
                var17 = var18.info;
                var15 = var13.HermesInternal;
                var22 = var15.concat;
                var31 = 'changed=';
                var29 = ' isDefaultContext=';
                var27 = ' isUpdateCausedByVideoHealthManager=';
                var25 = ' isManualToggleByUser=';
                var30 = var23;
                var28 = var8;
                var26 = var12;
                var24 = var10;
                var15 = var31[var22](var30, var29, var28, var27, var26, var25, var24, var23);
                var15 = var17.bind(var18)(var15);
                var15 = _closure1_slot148;
                var15 = var15.bind(var0)(var4);
                var18 = var15.videoToggleStateMap;
                var17 = var18[var5];
                var15 = _closure1_slot30;
                var15 = var15.AUTO_PROBING;
                var15 = var17 === var15;
                if (!var15) {
                    _fun30430_ip = 457;
                    continue _fun30430
                }
            case 443:
                var17 = _closure1_slot30;
                var17 = var17.AUTO_ENABLED;
                var15 = var16 === var17;
            case 457:
                if (!var15) {
                    _fun30430_ip = 508;
                    continue _fun30430
                }
            case 460:
                var17 = _closure1_slot1;
                var19 = _closure1_slot3;
                var15 = 84;
                var15 = var19[var15];
                var17 = var17.bind(var0)(var15);
                var19 = _closure1_slot57;
                if (var3) {
                    _fun30430_ip = 495;
                    continue _fun30430
                }
            case 487:
                var15 = var19.AUTO_ENABLE;
                _fun30430_ip = 501;
                continue _fun30430;
            case 495:
                var15 = var19.AUTO_DISABLE;
            case 501:
                var15 = var17.bind(var0)(var5, var15, var11);
            case 508:
                var18[var5] = var16;
                var17 = _closure1_slot164;
                var15 = {};
                var15.videoToggleStateMap = var18;
                var15 = var17.bind(var0)(var15, var4, var6);
                var15 = _closure1_slot30;
                var15 = var15.AUTO_PROBING;
                if (!(var16 !== var15)) {
                    _fun30430_ip = 578;
                    continue _fun30430
                }
            case 544:
                var16 = _closure1_slot21;
                var15 = var16.getRTCConnection;
                var17 = var15.bind(var16)();
                if (!(var14 != var17)) {
                    _fun30430_ip = 610;
                    continue _fun30430
                }
            case 562:
                var16 = var17.pauseStatsCollectionForUser;
                var15 = false;
                var15 = var16.bind(var17)(var5, var15);
                _fun30430_ip = 610;
                continue _fun30430;
            case 578:
                var16 = _closure1_slot21;
                var15 = var16.getRTCConnection;
                var17 = var15.bind(var16)();
                if (!(var14 != var17)) {
                    _fun30430_ip = 610;
                    continue _fun30430
                }
            case 596:
                var16 = var17.pauseStatsCollectionForUser;
                var15 = true;
                var15 = var16.bind(var17)(var5, var15);
            case 610:
                var15 = _closure1_slot127;
                if (var15) {
                    _fun30430_ip = 719;
                    continue _fun30430
                }
            case 617:
                var16 = _closure1_slot61;
                var15 = var16.info;
                var19 = _closure1_slot127;
                var13 = var13.HermesInternal;
                var18 = var13.concat;
                var17 = 'isAutoDisableAllowed=';
                var13 = ' - disabling VideoHealthManager';
                var13 = var18.bind(var17)(var19, var13);
                var13 = var15.bind(var16)(var13);
                var15 = _closure1_slot21;
                var13 = var15.getRTCConnection;
                var17 = var13.bind(var15)();
                var13 = var14 == var17;
                var15 = var17;
                if (var13) {
                    _fun30430_ip = 706;
                    continue _fun30430
                }
            case 689:
                var16 = var17.getVideoHealthManager;
                var16 = var16.bind(var17)();
                var13 = var14 == var16;
                var15 = var16;
            case 706:
                if (var13) {
                    _fun30430_ip = 719;
                    continue _fun30430
                }
            case 709:
                var13 = var15.disable;
                var13 = var13.bind(var15)();
            case 719:
                if (var12) {
                    _fun30430_ip = 916;
                    continue _fun30430
                }
            case 725:
                if (!var10) {
                    _fun30430_ip = 1013;
                    continue _fun30430
                }
            case 731:
                if (!var9) {
                    _fun30430_ip = 866;
                    continue _fun30430
                }
            case 737:
                if (var3) {
                    _fun30430_ip = 866;
                    continue _fun30430
                }
            case 743:
                var13 = _closure1_slot61;
                var12 = var13.info;
                var10 = 'disallowing auto-disable for this session because of manual override by user';
                var10 = var12.bind(var13)(var10);
                var10 = false;
                _closure1_slot127 = var10;
                var12 = _closure1_slot21;
                var10 = var12.getRTCConnection;
                var15 = var10.bind(var12)();
                var10 = var14 == var15;
                var12 = var15;
                if (var10) {
                    _fun30430_ip = 811;
                    continue _fun30430
                }
            case 794:
                var13 = var15.getVideoHealthManager;
                var13 = var13.bind(var15)();
                var10 = var14 == var13;
                var12 = var13;
            case 811:
                if (var10) {
                    _fun30430_ip = 824;
                    continue _fun30430
                }
            case 814:
                var10 = var12.disable;
                var10 = var10.bind(var12)();
            case 824:
                var12 = _closure1_slot1;
                var13 = _closure1_slot3;
                var10 = 84;
                var10 = var13[var10];
                var12 = var12.bind(var0)(var10);
                var10 = _closure1_slot57;
                var10 = var10.MANUAL_REENABLE;
                var10 = var12.bind(var0)(var5, var10, var11);
                _fun30430_ip = 1013;
                continue _fun30430;
            case 866:
                var12 = _closure1_slot1;
                var13 = _closure1_slot3;
                var10 = 84;
                var10 = var13[var10];
                var12 = var12.bind(var0)(var10);
                var13 = _closure1_slot57;
                if (var3) {
                    _fun30430_ip = 901;
                    continue _fun30430
                }
            case 893:
                var10 = var13.MANUAL_ENABLE;
                _fun30430_ip = 907;
                continue _fun30430;
            case 901:
                var10 = var13.MANUAL_DISABLE;
            case 907:
                var10 = var12.bind(var0)(var5, var10, var11);
                _fun30430_ip = 1013;
                continue _fun30430;
            case 916:
                if (var3) {
                    _fun30430_ip = 924;
                    continue _fun30430
                }
            case 919:
                if (var9) {
                    _fun30430_ip = 924;
                    continue _fun30430
                }
            case 922:
                return var0;
            case 924:
                if (!var3) {
                    _fun30430_ip = 936;
                    continue _fun30430
                }
            case 927:
                var9 = _closure1_slot127;
                if (var9) {
                    _fun30430_ip = 936;
                    continue _fun30430
                }
            case 934:
                return var0;
            case 936:
                var10 = _closure1_slot1;
                var12 = _closure1_slot3;
                var9 = 84;
                var9 = var12[var9];
                var10 = var10.bind(var0)(var9);
                var12 = _closure1_slot57;
                if (var3) {
                    _fun30430_ip = 971;
                    continue _fun30430
                }
            case 963:
                var9 = var12.AUTO_ENABLE;
                _fun30430_ip = 977;
                continue _fun30430;
            case 971:
                var9 = var12.AUTO_DISABLE;
            case 977:
                var9 = var10.bind(var0)(var5, var9, var11);
                var10 = _closure1_slot126;
                if (var3) {
                    _fun30430_ip = 1003;
                    continue _fun30430
                }
            case 991:
                var9 = var10.delete;
                var9 = var9.bind(var10)(var5);
                _fun30430_ip = 1013;
                continue _fun30430;
            case 1003:
                var9 = var10.add;
                var9 = var9.bind(var10)(var5);
            case 1013:
                if (!var8) {
                    _fun30430_ip = 1019;
                    continue _fun30430
                }
            case 1016:
                var8 = !var3;
            case 1019:
                if (!var8) {
                    _fun30430_ip = 1036;
                    continue _fun30430
                }
            case 1022:
                var9 = _closure1_slot126;
                var8 = var9.delete;
                var8 = var8.bind(var9)(var5);
            case 1036:
                if (var3) {
                    _fun30430_ip = 1045;
                    continue _fun30430
                }
            case 1039:
                var3 = delete var7[var5];
                _fun30430_ip = 1051;
                continue _fun30430;
            case 1045:
                var3 = true;
                var7[var5] = var3;
            case 1051:
                var5 = _closure1_slot164;
                var3 = {};
                var3.disabledLocalVideos = var7;
                var3 = var5.bind(var0)(var3, var4, var6);
                var3 = _closure1_slot73;
                var2 = var3.eachConnection;
                var1 = function(arg0) { // Environment: var1
                    _fun30431: for (var _fun30431_ip = 0;;) switch (_fun30431_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = var3.setLocalVideoDisabled;
                            var1 = _closure2_slot0;
                            var0 = _closure2_slot1;
                            var4 = var0[var1];
                            var0 = null;
                            var0 = var0 != var4;
                            if (!var0) {
                                _fun30431_ip = 36;
                                continue _fun30431
                            }
                        case 33:
                            var0 = var4;
                        case 36:
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1, var4);
                return var0;
        }
    };
    var3.AUDIO_SET_LOCAL_VIDEO_DISABLED = var11;
    var11 = function arg0() {
        _fun30432: for (var _fun30432_ip = 0;;) switch (_fun30432_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.context;
                var2 = var1.userId;
                var _closure2_slot0 = var2;
                var4 = var1.volume;
                var _closure2_slot1 = var4;
                var6 = _closure1_slot17;
                var5 = var6.getId;
                var5 = var5.bind(var6)();
                if (!(var2 !== var5)) {
                    _fun30432_ip = 143;
                    continue _fun30432
                }
            case 50:
                var5 = _closure1_slot53;
                var5 = var5.STREAM;
                if (!(var3 !== var5)) {
                    _fun30432_ip = 70;
                    continue _fun30432
                }
            case 64:
                var7 = _closure1_slot48;
                _fun30432_ip = 74;
                continue _fun30432;
            case 70:
                var7 = _closure1_slot49;
            case 74:
                var6 = _closure1_slot148;
                var5 = undefined;
                var6 = var6.bind(var5)(var3);
                var6 = var6.localVolumes;
                if (!(var4 !== var7)) {
                    _fun30432_ip = 101;
                    continue _fun30432
                }
            case 95:
                var6[var2] = var4;
                _fun30432_ip = 105;
                continue _fun30432;
            case 101:
                var2 = delete var6[var2];
            case 105:
                var4 = _closure1_slot164;
                var2 = {};
                var2.localVolumes = var6;
                var2 = var4.bind(var5)(var2, var3);
                var2 = _closure1_slot73;
                var1 = var2.eachConnection;
                var0 = function(arg0) { // Environment: var0
                    var3 = arg0;
                    var2 = var3.setLocalVolume;
                    var1 = _closure2_slot0;
                    var0 = _closure2_slot1;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0 = var1.bind(var2)(var0, var3);
            case 143:
                var0 = undefined;
                return var0;
        }
    };
    var3.AUDIO_SET_LOCAL_VOLUME = var11;
    var11 = function arg0() {
        var0 = arg0;
        var4 = var0.context;
        var5 = var0.userId;
        var _closure2_slot0 = var5;
        var8 = var0.left;
        var _closure2_slot1 = var8;
        var7 = var0.right;
        var _closure2_slot2 = var7;
        var3 = _closure1_slot148;
        var0 = undefined;
        var3 = var3.bind(var0)(var4);
        var6 = var3.localPans;
        var3 = {};
        var3.left = var8;
        var3.right = var7;
        var6[var5] = var3;
        var5 = _closure1_slot164;
        var3 = {};
        var3.localPans = var6;
        var3 = var5.bind(var0)(var3, var4);
        var3 = _closure1_slot73;
        var2 = var3.eachConnection;
        var1 = function(arg0) { // Environment: var1
            var4 = arg0;
            var3 = var4.setLocalPan;
            var2 = _closure2_slot0;
            var1 = _closure2_slot1;
            var0 = _closure2_slot2;
            var0 = var3.bind(var4)(var2, var1, var0);
            return var0;
        };
        var1 = var2.bind(var3)(var1, var4);
        return var0;
    };
    var3.AUDIO_SET_LOCAL_PAN = var11;
    var11 = function arg0() {
        var1 = arg0;
        var4 = var1.context;
        var0 = var1.mode;
        var7 = var1.options;
        var3 = _closure1_slot164;
        var2 = {};
        var2.mode = var0;
        var0 = {};
        var8 = var0;
        var5 = copyDataProperties(var8, var7);
        var5 = global;
        var6 = var5.Date;
        var5 = var6.now;
        var6 = var5.bind(var6)();
        var5 = 'updatedAt';
        var0[var5] = var6;
        var2.modeOptions = var0;
        var0 = undefined;
        var2 = var3.bind(var0)(var2, var4);
        var4 = _closure1_slot73;
        var3 = var4.eachConnection;
        var2 = _closure1_slot149;
        var2 = var3.bind(var4)(var2);
        var2 = _closure1_slot138;
        var1 = var2.update;
        var1 = var1.bind(var2)();
        return var0;
    };
    var3.AUDIO_SET_MODE = var11;
    var11 = function arg0() {
        var0 = arg0;
        var3 = var0.volume;
        var4 = _closure1_slot164;
        var2 = {};
        var5 = _closure1_slot150;
        var0 = undefined;
        var5 = var5.bind(var0)(var3);
        var2.inputVolume = var5;
        var2 = var4.bind(var0)(var2);
        var2 = _closure1_slot73;
        var1 = var2.setInputVolume;
        var1 = var1.bind(var2)(var3);
        return var0;
    };
    var3.AUDIO_SET_INPUT_VOLUME = var11;
    var11 = function arg0() {
        var0 = arg0;
        var3 = var0.volume;
        var4 = _closure1_slot164;
        var2 = {};
        var2.outputVolume = var3;
        var0 = undefined;
        var2 = var4.bind(var0)(var2);
        var2 = _closure1_slot73;
        var1 = var2.setOutputVolume;
        var1 = var1.bind(var2)(var3);
        return var0;
    };
    var3.AUDIO_SET_OUTPUT_VOLUME = var11;
    var11 = function arg0() {
        var0 = arg0;
        var4 = var0.id;
        var3 = _closure1_slot169;
        var2 = _closure1_slot84;
        var0 = undefined;
        var4 = var3.bind(var0)(var2, var4);
        var2 = global;
        var3 = var2.performance;
        var2 = var3.now;
        var2 = var2.bind(var3)();
        _closure1_slot82 = var2;
        var3 = _closure1_slot164;
        var2 = {};
        var2.inputDeviceId = var4;
        var2 = var3.bind(var0)(var2);
        var3 = _closure1_slot73;
        var2 = var3.setAudioInputDevice;
        var2 = var2.bind(var3)(var4);
        var4 = _closure1_slot73;
        var3 = var4.eachConnection;
        var2 = _closure1_slot157;
        var2 = var3.bind(var4)(var2);
        _closure1_slot104 = var0;
        _closure1_slot105 = var0;
        return var0;
    };
    var3.AUDIO_SET_INPUT_DEVICE = var11;
    var11 = function arg0() {
        var0 = arg0;
        var6 = var0.id;
        var4 = _closure1_slot164;
        var2 = {};
        var5 = _closure1_slot169;
        var3 = _closure1_slot85;
        var0 = undefined;
        var3 = var5.bind(var0)(var3, var6);
        var2.outputDeviceId = var3;
        var2 = var4.bind(var0)(var2);
        var2 = _closure1_slot73;
        var1 = var2.setAudioOutputDevice;
        var1 = var1.bind(var2)(var3);
        return var0;
    };
    var3.AUDIO_SET_OUTPUT_DEVICE = var11;
    var11 = function arg0() {
        var0 = arg0;
        var0 = var0.inputProfile;
        var3 = _closure1_slot164;
        var2 = {};
        var2.activeInputProfile = var0;
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var2 = _closure1_slot148;
        var2 = var2.bind(var0)();
        var5 = _closure1_slot73;
        var4 = var5.eachConnection;
        var3 = function(arg0) { // Environment: var3
            var2 = arg0;
            var3 = _closure1_slot149;
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var1 = _closure1_slot157;
            var1 = var1.bind(var0)(var2);
            return var0;
        };
        var3 = var4.bind(var5)(var3);
        var4 = _closure1_slot73;
        var3 = var4.setAudioInputBypassSystemProcessing;
        var2 = var2.bypassSystemInputProcessing;
        var2 = var3.bind(var4)(var2);
        var3 = _closure1_slot138;
        var2 = var3.update;
        var2 = var2.bind(var3)();
        var1 = _closure1_slot180;
        var1 = var1.bind(var0)();
        return var0;
    };
    var3.AUDIO_SET_ACTIVE_INPUT_PROFILE = var11;
    var11 = function arg0() {
        var1 = arg0;
        var5 = _closure1_slot164;
        var4 = {};
        var0 = var1.enabled;
        var4.echoCancellation = var0;
        var0 = undefined;
        var4 = var5.bind(var0)(var4);
        var _closure2_slot0 = var4;
        var5 = _closure1_slot73;
        var4 = var5.eachConnection;
        var3 = function(arg0) { // Environment: var3
            var2 = arg0;
            var1 = var2.setEchoCancellation;
            var0 = _closure2_slot0;
            var0 = var0.echoCancellation;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var3 = var4.bind(var5)(var3);
        var3 = _closure1_slot180;
        var3 = var3.bind(var0)();
        var2 = _closure1_slot178;
        var1 = var1.location;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3.AUDIO_SET_ECHO_CANCELLATION = var11;
    var11 = function arg0() {
        var0 = arg0;
        var0 = var0.enabled;
        var3 = _closure1_slot164;
        var1 = {};
        var1.sidechainCompression = var0;
        var0 = undefined;
        var1 = var3.bind(var0)(var1);
        var3 = _closure1_slot73;
        var2 = var3.setSidechainCompression;
        var1 = var1.sidechainCompression;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.AUDIO_SET_SIDECHAIN_COMPRESSION = var11;
    var11 = function arg0() {
        var3 = _closure1_slot164;
        var1 = {};
        var0 = arg0;
        var0 = var0.strength;
        var1.sidechainCompressionStrength = var0;
        var0 = undefined;
        var1 = var3.bind(var0)(var1);
        var3 = _closure1_slot73;
        var2 = var3.setSidechainCompressionStrength;
        var1 = var1.sidechainCompressionStrength;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH = var11;
    var11 = function arg0() {
        _fun30447: for (var _fun30447_ip = 0;;) switch (_fun30447_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.enabled;
                var3 = var1.loopbackReason;
                var2 = _closure1_slot128;
                if (var0) {
                    _fun30447_ip = 36;
                    continue _fun30447
                }
            case 24:
                var0 = var2.delete;
                var0 = var0.bind(var2)(var3);
                _fun30447_ip = 46;
                continue _fun30447;
            case 36:
                var0 = var2.add;
                var0 = var0.bind(var2)(var3);
            case 46:
                var2 = _closure1_slot179;
                var0 = undefined;
                var2 = var2.bind(var0)();
                var1 = _closure1_slot180;
                var1 = var1.bind(var0)();
                return var0;
        }
    };
    var3.AUDIO_SET_LOOPBACK = var11;
    var11 = function arg0() {
        var1 = arg0;
        var5 = _closure1_slot164;
        var4 = {};
        var0 = var1.enabled;
        var4.noiseSuppression = var0;
        var0 = undefined;
        var4 = var5.bind(var0)(var4);
        var _closure2_slot0 = var4;
        var5 = _closure1_slot73;
        var4 = var5.eachConnection;
        var3 = function(arg0) { // Environment: var3
            var2 = arg0;
            var1 = var2.setNoiseSuppression;
            var0 = _closure2_slot0;
            var0 = var0.noiseSuppression;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var3 = var4.bind(var5)(var3);
        var3 = _closure1_slot180;
        var3 = var3.bind(var0)();
        var2 = _closure1_slot178;
        var1 = var1.location;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3.AUDIO_SET_NOISE_SUPPRESSION = var11;
    var11 = function arg0() {
        var1 = arg0;
        var5 = _closure1_slot164;
        var4 = {};
        var0 = var1.enabled;
        var4.automaticGainControl = var0;
        var0 = undefined;
        var4 = var5.bind(var0)(var4);
        var _closure2_slot0 = var4;
        var5 = _closure1_slot73;
        var4 = var5.eachConnection;
        var3 = function(arg0) { // Environment: var3
            var3 = _closure1_slot155;
            var0 = _closure2_slot0;
            var2 = var0.automaticGainControl;
            var0 = undefined;
            var1 = arg0;
            var1 = var3.bind(var0)(var1, var2);
            return var0;
        };
        var3 = var4.bind(var5)(var3);
        var3 = _closure1_slot180;
        var3 = var3.bind(var0)();
        var2 = _closure1_slot178;
        var1 = var1.location;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3.AUDIO_SET_AUTOMATIC_GAIN_CONTROL = var11;
    var11 = function arg0() {
        var1 = arg0;
        var5 = _closure1_slot164;
        var4 = {};
        var0 = var1.enabled;
        var4.noiseCancellation = var0;
        var0 = undefined;
        var4 = var5.bind(var0)(var4);
        var _closure2_slot0 = var4;
        var5 = _closure1_slot73;
        var4 = var5.eachConnection;
        var3 = function(arg0) { // Environment: var3
            var3 = _closure1_slot156;
            var0 = _closure2_slot0;
            var2 = var0.noiseCancellation;
            var0 = undefined;
            var1 = arg0;
            var1 = var3.bind(var0)(var1, var2);
            return var0;
        };
        var3 = var4.bind(var5)(var3);
        var3 = _closure1_slot180;
        var3 = var3.bind(var0)();
        var2 = _closure1_slot178;
        var1 = var1.location;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3.AUDIO_SET_NOISE_CANCELLATION = var11;
    var11 = function arg0() {
        var2 = arg0;
        var4 = _closure1_slot1;
        var3 = _closure1_slot3;
        var0 = 85;
        var3 = var3[var0];
        var0 = undefined;
        var5 = var4.bind(var0)(var3);
        var4 = var5.setKrispModelOverride;
        var3 = var2.model;
        var3 = var4.bind(var5)(var3);
        var2 = var2.model;
        _closure1_slot111 = var2;
        var1 = _closure1_slot180;
        var1 = var1.bind(var0)();
        return var0;
    };
    var3.AUDIO_SET_KRISP_MODEL_OVERRIDE = var11;
    var11 = function arg0() {
        var3 = _closure1_slot164;
        var2 = {};
        var0 = arg0;
        var0 = var0.enabled;
        var2.silenceWarning = var0;
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var2 = _closure1_slot138;
        var1 = var2.update;
        var1 = var1.bind(var2)();
        return var0;
    };
    var3.AUDIO_SET_DISPLAY_SILENCE_WARNING = var11;
    var11 = function arg0() {
        var2 = _closure1_slot73;
        var1 = var2.setDebugLogging;
        var0 = arg0;
        var0 = var0.enabled;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var3.AUDIO_SET_DEBUG_LOGGING = var11;
    var11 = function arg0() {
        var0 = arg0;
        var3 = var0.level;
        _closure1_slot110 = var3;
        var2 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 85;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.setKrispSuppressionLevel;
        var1 = var1.bind(var2)(var3);
        return var0;
    };
    var3.AUDIO_SET_KRISP_SUPPRESSION_LEVEL = var11;
    var11 = function arg0() {
        _fun30458: for (var _fun30458_ip = 0;;) switch (_fun30458_ip) {
            case 0:
                var1 = arg0;
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var0 = 30;
                var3 = var3[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var3);
                var3 = var4.isWeb;
                var3 = var3.bind(var4)();
                if (var3) {
                    _fun30458_ip = 86;
                    continue _fun30458
                }
            case 41:
                var3 = var1.enabled;
                _closure1_slot113 = var3;
                var3 = _closure1_slot73;
                var4 = var3.setNoiseCancellationEnableStats;
                var3 = null;
                if (!(var3 != var4)) {
                    _fun30458_ip = 86;
                    continue _fun30458
                }
            case 66:
                var3 = _closure1_slot73;
                var2 = var3.setNoiseCancellationEnableStats;
                var1 = var1.enabled;
                var1 = var2.bind(var3)(var1);
            case 86:
                return var0;
        }
    };
    var3.AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS = var11;
    var11 = function arg0() {
        var2 = _closure1_slot164;
        var1 = {};
        var0 = arg0;
        var0 = var0.enabled;
        var1.videoHook = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3.MEDIA_ENGINE_SET_VIDEO_HOOK = var11;
    var11 = function arg0() {
        var2 = _closure1_slot164;
        var1 = {};
        var0 = arg0;
        var0 = var0.enabled;
        var1.experimentalSoundshare2 = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3.MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE = var11;
    var11 = function arg0() {
        var0 = arg0;
        var0 = var0.enabled;
        var2 = _closure1_slot164;
        var1 = {};
        var1.useSystemScreensharePicker = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3.MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER = var11;
    var11 = function arg0() {
        var0 = arg0;
        var6 = var0.attenuation;
        var5 = var0.attenuateWhileSpeakingSelf;
        var0 = var0.attenuateWhileSpeakingOthers;
        var4 = _closure1_slot164;
        var3 = {};
        var3.attenuation = var6;
        var3.attenuateWhileSpeakingSelf = var5;
        var3.attenuateWhileSpeakingOthers = var0;
        var0 = undefined;
        var3 = var4.bind(var0)(var3);
        var _closure2_slot0 = var3;
        var3 = _closure1_slot73;
        var2 = var3.eachConnection;
        var1 = function(arg0) { // Environment: var1
            var4 = arg0;
            var3 = var4.setAttenuation;
            var0 = _closure2_slot0;
            var2 = var0.attenuation;
            var1 = var0.attenuateWhileSpeakingSelf;
            var0 = var0.attenuateWhileSpeakingOthers;
            var0 = var3.bind(var4)(var2, var1, var0);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.AUDIO_SET_ATTENUATION = var11;
    var11 = function arg0() {
        var0 = arg0;
        var0 = var0.enabled;
        var _closure2_slot0 = var0;
        var4 = _closure1_slot164;
        var3 = {};
        var3.qos = var0;
        var0 = undefined;
        var3 = var4.bind(var0)(var3);
        var3 = _closure1_slot73;
        var2 = var3.eachConnection;
        var1 = function(arg0) { // Environment: var1
            var2 = arg0;
            var1 = var2.setQoS;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.AUDIO_SET_QOS = var11;
    var11 = function arg0() {
        var0 = arg0;
        var5 = var0.inputDevices;
        var4 = var0.outputDevices;
        var2 = var0.videoDevices;
        var3 = _closure1_slot170;
        var0 = undefined;
        var3 = var3.bind(var0)(var5);
        var3 = _closure1_slot172;
        var3 = var3.bind(var0)(var4);
        var1 = _closure1_slot173;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var3.MEDIA_ENGINE_DEVICES = var11;
    var11 = function arg0() {
        var0 = arg0;
        var5 = var0.inputVolume;
        var3 = var0.outputVolume;
        var2 = _closure1_slot164;
        var1 = {};
        var4 = _closure1_slot150;
        var0 = undefined;
        var4 = var4.bind(var0)(var5);
        var1.inputVolume = var4;
        var1.outputVolume = var3;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3.AUDIO_VOLUME_CHANGE = var11;
    var11 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var0 = 74;
        var2 = var2[var0];
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var3 = var2.Storage;
        var2 = var3.remove;
        var1 = _closure1_slot62;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.AUDIO_RESET = var11;
    var11 = function arg0() {
        _fun30469: for (var _fun30469_ip = 0;;) switch (_fun30469_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.inputDetected;
                _closure1_slot101 = var1;
                var2 = _closure1_slot102;
                var1 = !var2;
                if (var2) {
                    _fun30469_ip = 30;
                    continue _fun30469
                }
            case 26:
                var1 = _closure1_slot101;
            case 30:
                if (!var1) {
                    _fun30469_ip = 53;
                    continue _fun30469
                }
            case 33:
                var1 = true;
                _closure1_slot102 = var1;
                var1 = _closure1_slot138;
                var0 = var1.update;
                var0 = var0.bind(var1)();
            case 53:
                var0 = undefined;
                return var0;
        }
    };
    var3.AUDIO_INPUT_DETECTED = var11;
    var11 = function arg0() {
        var2 = _closure1_slot185;
        var0 = arg0;
        var1 = var0.subsystem;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3.AUDIO_SET_SUBSYSTEM = var11;
    var11 = function arg0() {
        var1 = arg0;
        var5 = var1.bypassEnabled;
        var4 = _closure1_slot164;
        var3 = {};
        var3.bypassSystemInputProcessing = var5;
        var0 = undefined;
        var3 = var4.bind(var0)(var3);
        var4 = _closure1_slot73;
        var3 = var4.setAudioInputBypassSystemProcessing;
        var3 = var3.bind(var4)(var5);
        var2 = _closure1_slot178;
        var1 = var1.location;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3.AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING = var11;
    var11 = function arg0() {
        _fun30472: for (var _fun30472_ip = 0;;) switch (_fun30472_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.enabled;
                _closure1_slot79 = var2;
                var1 = var1.unmute;
                if (!var1) {
                    _fun30472_ip = 49;
                    continue _fun30472
                }
            case 24:
                var3 = _closure1_slot164;
                var2 = undefined;
                var1 = {
                    'mute': false,
                    'deaf': false
                };
                var1 = var3.bind(var2)(var1);
            case 49:
                var2 = _closure1_slot73;
                var1 = var2.eachConnection;
                var0 = _closure1_slot151;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
        }
    };
    var3.MEDIA_ENGINE_SET_AUDIO_ENABLED = var11;
    var11 = function arg0() {
        var0 = arg0;
        var2 = var0.enabled;
        var4 = _closure1_slot1;
        var3 = _closure1_slot3;
        var0 = 35;
        var3 = var3[var0];
        var0 = undefined;
        var5 = var4.bind(var0)(var3);
        var4 = var5.requestPermission;
        var3 = _closure1_slot42;
        var3 = var3.CAMERA;
        var3 = var4.bind(var5)(var3);
        var1 = _closure1_slot152;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var3.MEDIA_ENGINE_SET_VIDEO_ENABLED = var11;
    var11 = function arg0() {
        _fun30474: for (var _fun30474_ip = 0;;) switch (_fun30474_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.kind;
                var0 = var0.granted;
                if (var0) {
                    _fun30474_ip = 79;
                    continue _fun30474
                }
            case 17:
                var0 = 'audio';
                if (!(var0 !== var1)) {
                    _fun30474_ip = 51;
                    continue _fun30474
                }
            case 25:
                var0 = 'video';
                if (!(var0 === var1)) {
                    _fun30474_ip = 79;
                    continue _fun30474
                }
            case 33:
                var2 = _closure1_slot152;
                var1 = undefined;
                var0 = false;
                var0 = var2.bind(var1)(var0);
                _fun30474_ip = 79;
                continue _fun30474;
            case 51:
                var1 = false;
                _closure1_slot79 = var1;
                var2 = _closure1_slot73;
                var1 = var2.eachConnection;
                var0 = _closure1_slot151;
                var0 = var1.bind(var2)(var0);
            case 79:
                var0 = undefined;
                return var0;
        }
    };
    var3.MEDIA_ENGINE_PERMISSION = var11;
    var11 = function arg0() {
        _fun30475: for (var _fun30475_ip = 0;;) switch (_fun30475_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.settings;
                var11 = null;
                var3 = var11 == var1;
                var0 = undefined;
                var2 = undefined;
                if (var3) {
                    _fun30475_ip = 28;
                    continue _fun30475
                }
            case 22:
                var2 = var1.desktopSettings;
            case 28:
                if (!(var11 == var2)) {
                    _fun30475_ip = 227;
                    continue _fun30475
                }
            case 35:
                var3 = var11 == var1;
                var2 = undefined;
                if (var3) {
                    _fun30475_ip = 50;
                    continue _fun30475
                }
            case 44:
                var2 = var1.cameraSettings;
            case 50:
                if (!(var11 == var2)) {
                    _fun30475_ip = 76;
                    continue _fun30475
                }
            case 54:
                var3 = _closure1_slot152;
                var2 = _closure1_slot92;
                var2 = var3.bind(var0)(var2, var11);
                _fun30475_ip = 554;
                continue _fun30475;
            case 76:
                var4 = var1.context;
                if (!(var11 == var4)) {
                    _fun30475_ip = 98;
                    continue _fun30475
                }
            case 85:
                var2 = _closure1_slot53;
                var4 = var2.DEFAULT;
            case 98:
                var2 = var1.cameraSettings;
                var8 = var2.videoDeviceGuid;
                var7 = var2.audioDeviceGuid;
                var3 = _closure1_slot53;
                var3 = var3.STREAM;
                var4 = var4 === var3;
                if (!var4) {
                    _fun30475_ip = 140;
                    continue _fun30475
                }
            case 136:
                var4 = _closure1_slot92;
            case 140:
                var6 = var1.qualityOptions;
                if (!(var11 == var6)) {
                    _fun30475_ip = 164;
                    continue _fun30475
                }
            case 150:
                var6 = {
                    'resolution': 720,
                    'frameRate': 30
                };
            case 164:
                var3 = _closure1_slot152;
                var2 = {};
                var5 = {};
                var5.videoDeviceGuid = var8;
                var5.audioDeviceGuid = var7;
                var2.cameraSource = var5;
                var5 = {};
                var7 = var6.resolution;
                var5.resolution = var7;
                var6 = var6.frameRate;
                var5.frameRate = var6;
                var2.quality = var5;
                var2 = var3.bind(var0)(var4, var2);
                _fun30475_ip = 554;
                continue _fun30475;
            case 227:
                var2 = var1.desktopSettings;
                var9 = var2.sourceId;
                var3 = var2.sound;
                var4 = var1.context;
                if (!(var11 == var4)) {
                    _fun30475_ip = 267;
                    continue _fun30475
                }
            case 254:
                var2 = _closure1_slot53;
                var4 = var2.DEFAULT;
            case 267:
                var5 = var1.qualityOptions;
                if (!(var11 == var5)) {
                    _fun30475_ip = 291;
                    continue _fun30475
                }
            case 277:
                var5 = {
                    'resolution': 720,
                    'frameRate': 30
                };
            case 291:
                var1 = false;
                var8 = null;
                if (!(var1 !== var3)) {
                    _fun30475_ip = 333;
                    continue _fun30475
                }
            case 299:
                var2 = _closure1_slot1;
                var6 = _closure1_slot3;
                var1 = 69;
                var1 = var6[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.getPidFromDesktopSource;
                var8 = var1.bind(var2)(var9);
            case 333:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 30;
                var2 = var7[var2];
                var2 = var6.bind(var0)(var2);
                var2 = var2.isPlatformEmbedded;
                var7 = null;
                var6 = null;
                if (!var2) {
                    _fun30475_ip = 426;
                    continue _fun30475
                }
            case 369:
                var2 = true;
                var7 = null;
                var6 = null;
                if (!(var2 === var3)) {
                    _fun30475_ip = 426;
                    continue _fun30475
                }
            case 379:
                var2 = _closure1_slot175;
                var2 = var2.bind(var0)(var8);
                var3 = var2.soundshareId;
                var2 = var2.soundshareSession;
                var6 = var2;
                var7 = var3;
                if (!(var11 != var7)) {
                    _fun30475_ip = 426;
                    continue _fun30475
                }
            case 410:
                var10 = _closure1_slot176;
                var10 = var10.bind(var0)(var3, var2);
                var7 = var3;
                var6 = var2;
            case 426:
                var2 = _closure1_slot81;
                if (!(var4 !== var2)) {
                    _fun30475_ip = 466;
                    continue _fun30475
                }
            case 434:
                var2 = _closure1_slot75;
                if (!(var11 != var2)) {
                    _fun30475_ip = 462;
                    continue _fun30475
                }
            case 442:
                var10 = _closure1_slot73;
                var3 = var10.setGoLiveSource;
                var2 = _closure1_slot81;
                var2 = var3.bind(var10)(var11, var2);
            case 462:
                _closure1_slot81 = var4;
            case 466:
                var3 = _closure1_slot152;
                var2 = _closure1_slot53;
                var2 = var2.STREAM;
                var2 = var4 === var2;
                if (!var2) {
                    _fun30475_ip = 491;
                    continue _fun30475
                }
            case 487:
                var2 = _closure1_slot92;
            case 491:
                var1 = {};
                var4 = {};
                var4.id = var9;
                var4.sourcePid = var8;
                var4.soundshareId = var7;
                var4.soundshareSession = var6;
                var1.desktopSource = var4;
                var4 = {};
                var6 = var5.resolution;
                var4.resolution = var6;
                var5 = var5.frameRate;
                var4.frameRate = var5;
                var1.quality = var4;
                var1 = var3.bind(var0)(var2, var1);
            case 554:
                return var0;
        }
    };
    var3.MEDIA_ENGINE_SET_GO_LIVE_SOURCE = var11;
    var11 = function arg0() {
        var0 = arg0;
        var6 = var0.id;
        var3 = _closure1_slot164;
        var2 = {};
        var5 = _closure1_slot169;
        var4 = _closure1_slot86;
        var0 = undefined;
        var4 = var5.bind(var0)(var4, var6);
        var2.videoDeviceId = var4;
        var2 = var3.bind(var0)(var2);
        var1 = _closure1_slot152;
        var1 = var1.bind(var0)();
        return var0;
    };
    var3.MEDIA_ENGINE_SET_VIDEO_DEVICE = var11;
    var11 = function arg0() {
        _fun30477: for (var _fun30477_ip = 0;;) switch (_fun30477_ip) {
            case 0:
                var1 = arg0;
                var3 = _closure1_slot80;
                var0 = var1.required;
                var0 = var3 !== var0;
                if (!var0) {
                    _fun30477_ip = 60;
                    continue _fun30477
                }
            case 23:
                var3 = var1.required;
                _closure1_slot80 = var3;
                var3 = var1.required;
                var0 = true;
                if (var3) {
                    _fun30477_ip = 60;
                    continue _fun30477
                }
            case 44:
                var3 = _closure1_slot73;
                var2 = var3.interact;
                var2 = var2.bind(var3)();
                var0 = true;
            case 60:
                return var0;
        }
    };
    var3.MEDIA_ENGINE_INTERACTION_REQUIRED = var11;
    var3.USER_SETTINGS_MODAL_INIT = var10;
    var3.USER_SETTINGS_MODAL_SET_SECTION = var10;
    var10 = function() {
        var2 = _closure1_slot73;
        var1 = var2.eachConnection;
        var0 = _closure1_slot157;
        var0 = var1.bind(var2)(var0);
        var0 = false;
        return var0;
    };
    var3.CERTIFIED_DEVICES_SET = var10;
    var10 = function arg0() {
        var0 = arg0;
        var0 = var0.application;
        var2 = _closure1_slot78;
        var1 = var2.add;
        var0 = var0.id;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var3.RPC_APP_CONNECTED = var10;
    var10 = function arg0() {
        var0 = arg0;
        var0 = var0.application;
        var2 = _closure1_slot78;
        var1 = var2.delete;
        var0 = var0.id;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var3.RPC_APP_DISCONNECTED = var10;
    var10 = function arg0() {
        var0 = arg0;
        var0 = var0.mediaEngineState;
        var2 = var0.settingsByContext;
        _closure1_slot77 = var2;
        var2 = var0.inputDevices;
        _closure1_slot84 = var2;
        var2 = var0.outputDevices;
        _closure1_slot85 = var2;
        var2 = var0.appSupported;
        _closure1_slot130 = var2;
        var2 = var0.krispModuleLoaded;
        _closure1_slot108 = var2;
        var2 = var0.krispVersion;
        _closure1_slot109 = var2;
        var0 = var0.goLiveContext;
        _closure1_slot81 = var0;
        var0 = undefined;
        return var0;
    };
    var3.OVERLAY_INITIALIZE = var10;
    var10 = function arg0() {
        _fun30482: for (var _fun30482_ip = 0;;) switch (_fun30482_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.state;
                var4 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 88;
                var1 = var2[var1];
                var2 = undefined;
                var4 = var4.bind(var2)(var1);
                var1 = var4.isEnabled;
                var1 = var1.bind(var4)();
                var4 = _closure1_slot26;
                var4 = var4.BACKGROUND;
                if (!(var3 === var4)) {
                    _fun30482_ip = 86;
                    continue _fun30482
                }
            case 57:
                var4 = _closure1_slot92;
                if (!var4) {
                    _fun30482_ip = 86;
                    continue _fun30482
                }
            case 64:
                if (var1) {
                    _fun30482_ip = 86;
                    continue _fun30482
                }
            case 67:
                var1 = true;
                _closure1_slot99 = var1;
                var4 = _closure1_slot152;
                var1 = false;
                var1 = var4.bind(var2)(var1);
                _fun30482_ip = 124;
                continue _fun30482;
            case 86:
                var1 = _closure1_slot26;
                var1 = var1.ACTIVE;
                if (!(var3 === var1)) {
                    _fun30482_ip = 128;
                    continue _fun30482
                }
            case 100:
                var1 = _closure1_slot99;
                if (!var1) {
                    _fun30482_ip = 128;
                    continue _fun30482
                }
            case 107:
                var1 = false;
                _closure1_slot99 = var1;
                var1 = _closure1_slot152;
                var0 = true;
                var0 = var1.bind(var2)(var0);
            case 124:
                var0 = true;
                return var0;
            case 128:
                var0 = false;
                return var0;
        }
    };
    var3.APP_STATE_UPDATE = var10;
    var10 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot73;
        var1 = var2.eachConnection;
        var0 = function(arg0) { // Environment: var0
            var2 = arg0;
            var1 = var2.setBitRate;
            var0 = _closure2_slot0;
            var0 = var0.bitrate;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var3.SET_CHANNEL_BITRATE = var10;
    var10 = function arg0() {
        _fun30485: for (var _fun30485_ip = 0;;) switch (_fun30485_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.hasPermission;
                var1 = !var0;
                var2 = _closure1_slot90;
                if (!(var1 !== var2)) {
                    _fun30485_ip = 50;
                    continue _fun30485
                }
            case 23:
                _closure1_slot90 = var1;
                var2 = _closure1_slot73;
                var1 = var2.eachConnection;
                var0 = _closure1_slot151;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            case 50:
                var0 = false;
                return var0;
        }
    };
    var3.SET_VAD_PERMISSION = var10;
    var10 = function arg0() {
        _fun30486: for (var _fun30486_ip = 0;;) switch (_fun30486_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.state;
                var3 = var0.permissionType;
                var1 = _closure1_slot41;
                var1 = var1.ACCEPTED;
                var2 = var2 === var1;
                var1 = _closure1_slot42;
                var1 = var1.AUDIO;
                if (!(var1 !== var3)) {
                    _fun30486_ip = 91;
                    continue _fun30486
                }
            case 45:
                var1 = _closure1_slot42;
                var1 = var1.CAMERA;
                if (!(var1 !== var3)) {
                    _fun30486_ip = 63;
                    continue _fun30486
                }
            case 59:
                var1 = false;
                return var1;
            case 63:
                var1 = !var2;
                if (var2) {
                    _fun30486_ip = 73;
                    continue _fun30486
                }
            case 69:
                var1 = _closure1_slot92;
            case 73:
                if (!var1) {
                    _fun30486_ip = 116;
                    continue _fun30486
                }
            case 76:
                var3 = _closure1_slot152;
                var2 = undefined;
                var1 = false;
                var1 = var3.bind(var2)(var1);
                _fun30486_ip = 116;
                continue _fun30486;
            case 91:
                var1 = true;
                _closure1_slot125 = var1;
                var2 = _closure1_slot73;
                var1 = var2.eachConnection;
                var0 = _closure1_slot151;
                var0 = var1.bind(var2)(var0);
            case 116:
                var0 = undefined;
                return var0;
        }
    };
    var3.SET_NATIVE_PERMISSION = var10;
    var10 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot73;
        var1 = var2.eachConnection;
        var0 = function(arg0) { // Environment: var0
            var2 = arg0;
            var1 = var2.applyVideoQualityMode;
            var0 = _closure2_slot0;
            var0 = var0.mode;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var3.SET_CHANNEL_VIDEO_QUALITY_MODE = var10;
    var10 = function arg0() {
        var0 = arg0;
        var0 = var0.enabled;
        var3 = _closure1_slot164;
        var1 = {};
        var1.aecDumpEnabled = var0;
        var0 = undefined;
        var1 = var3.bind(var0)(var1);
        var3 = _closure1_slot73;
        var2 = var3.setAecDump;
        var1 = var1.aecDumpEnabled;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.MEDIA_ENGINE_SET_AEC_DUMP = var10;
    var10 = function arg0() {
        var1 = arg0;
        var1 = var1.overrides;
        var _closure2_slot0 = var1;
        var1 = global;
        var4 = var1.Object;
        var3 = var4.values;
        var2 = _closure1_slot53;
        var4 = var3.bind(var4)(var2);
        var3 = var4.reduce;
        var2 = function(arg0, arg1) { // Environment: var0
            var0 = arg0;
            var2 = arg1;
            var3 = _closure1_slot143;
            var4 = undefined;
            var5 = var3.bind(var4)();
            var3 = _closure1_slot1;
            var6 = _closure1_slot3;
            var1 = 42;
            var1 = var6[var1];
            var4 = var3.bind(var4)(var1);
            var3 = var4.merge;
            var1 = _closure2_slot0;
            var1 = var1[var2];
            var1 = var3.bind(var4)(var5, var1);
            var0[var2] = var1;
            return var0;
        };
        var0 = {};
        var0 = var3.bind(var4)(var2, var0);
        _closure1_slot77 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var0 = 74;
        var2 = var2[var0];
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var5 = var2.Storage;
        var4 = var5.set;
        var3 = _closure1_slot62;
        var2 = _closure1_slot77;
        var2 = var4.bind(var5)(var3, var2);
        var1 = _closure1_slot165;
        var1 = var1.bind(var0)();
        return var0;
    };
    var3.MEDIA_ENGINE_RESET_SETTINGS = var10;
    var10 = function() {
        _fun30492: for (var _fun30492_ip = 0;;) switch (_fun30492_ip) {
            case 0:
                var1 = _closure1_slot92;
                if (var1) {
                    _fun30492_ip = 20;
                    continue _fun30492
                }
            case 10:
                var2 = _closure1_slot75;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun30492_ip = 56;
                    continue _fun30492
                }
            case 20:
                var2 = _closure1_slot21;
                var1 = var2.getRTCConnectionId;
                var1 = var1.bind(var2)();
                var3 = null;
                if (!(var3 == var1)) {
                    _fun30492_ip = 56;
                    continue _fun30492
                }
            case 40:
                var2 = _closure1_slot152;
                var0 = undefined;
                var1 = false;
                var1 = var2.bind(var0)(var1, var3);
                return var0;
            case 56:
                var0 = false;
                return var0;
        }
    };
    var3.CHANNEL_DELETE = var10;
    var10 = function() {
        _fun30493: for (var _fun30493_ip = 0;;) switch (_fun30493_ip) {
            case 0:
                var1 = _closure1_slot119;
                var0 = !var1;
                var0 = !var0;
                if (!var1) {
                    _fun30493_ip = 24;
                    continue _fun30493
                }
            case 16:
                var1 = false;
                _closure1_slot119 = var1;
                var0 = true;
            case 24:
                return var0;
        }
    };
    var3.MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET = var10;
    var10 = function arg0() {
        var0 = arg0;
        var2 = var0.settings;
        var1 = _closure1_slot73;
        var0 = var1.applyMediaFilterSettings;
        var2 = var0.bind(var1)(var2);
        var1 = var2.finally;
        var0 = function() { // Environment: var0
            var1 = false;
            _closure1_slot120 = var1;
            var1 = _closure1_slot71;
            var0 = var1.emitChange;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var3.MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS = var10;
    var10 = function() {
        var0 = true;
        _closure1_slot120 = var0;
        var0 = undefined;
        return var0;
    };
    var3.MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START = var10;
    var10 = function() {
        var0 = false;
        _closure1_slot120 = var0;
        var0 = undefined;
        return var0;
    };
    var3.MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR = var10;
    var10 = function arg0() {
        _fun30498: for (var _fun30498_ip = 0;;) switch (_fun30498_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.settings;
                var4 = var1.type;
                var1 = var0.local;
                var2 = var0.wasSaved;
                var3 = _closure1_slot44;
                var3 = var3.PRELOADED_USER_SETTINGS;
                if (!(var4 === var3)) {
                    _fun30498_ip = 67;
                    continue _fun30498
                }
            case 43:
                if (var1) {
                    _fun30498_ip = 67;
                    continue _fun30498
                }
            case 46:
                var1 = null;
                if (!(var1 == var2)) {
                    _fun30498_ip = 67;
                    continue _fun30498
                }
            case 52:
                var2 = _closure1_slot174;
                var0 = undefined;
                var1 = true;
                var1 = var2.bind(var0)(var1);
                return var0;
            case 67:
                var0 = false;
                return var0;
        }
    };
    var3.USER_SETTINGS_PROTO_UPDATE = var10;
    var10 = function arg0() {
        _fun30499: for (var _fun30499_ip = 0;;) switch (_fun30499_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.sourceId;
                var4 = var0.applicationName;
                var5 = var0.quality;
                var2 = _closure1_slot0;
                var1 = _closure1_slot3;
                var0 = 87;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.isDecoupledClipsEnabled;
                var1 = var1.bind(var2)();
                if (!var1) {
                    _fun30499_ip = 514;
                    continue _fun30499
                }
            case 62:
                var2 = _closure1_slot1;
                var3 = _closure1_slot3;
                var1 = 32;
                var1 = var3[var1];
                var1 = var2.bind(var0)(var1);
                var2 = null;
                if (!(var2 != var1)) {
                    _fun30499_ip = 514;
                    continue _fun30499
                }
            case 91:
                var3 = _closure1_slot1;
                var6 = _closure1_slot3;
                var1 = 69;
                var1 = var6[var1];
                var3 = var3.bind(var0)(var1);
                var1 = var3.getPidFromDesktopSource;
                var6 = var1.bind(var3)(var9);
                var1 = _closure1_slot175;
                var3 = var1.bind(var0)(var6);
                var1 = {};
                var7 = {};
                var7.id = var9;
                var7.sourcePid = var6;
                var6 = var3.soundshareId;
                var7.soundshareId = var6;
                var3 = var3.soundshareSession;
                var7.soundshareSession = var3;
                var1.desktopSource = var7;
                var1.quality = var5;
                var7 = _closure1_slot76;
                if (!(var2 != var7)) {
                    _fun30499_ip = 302;
                    continue _fun30499
                }
            case 184:
                var9 = _closure1_slot73;
                var7 = var9.setClipsSource;
                var7 = var7.bind(var9)(var2);
                var9 = _closure1_slot0;
                var10 = _closure1_slot3;
                var7 = 30;
                var7 = var10[var7];
                var9 = var9.bind(var0)(var7);
                var7 = var9.isWindows;
                var7 = var7.bind(var9)();
                if (!var7) {
                    _fun30499_ip = 252;
                    continue _fun30499
                }
            case 232:
                var9 = _closure1_slot76;
                var9 = var9.desktopSource;
                var9 = var9.soundshareId;
                var7 = var2 != var9;
            case 252:
                if (!var7) {
                    _fun30499_ip = 302;
                    continue _fun30499
                }
            case 255:
                var9 = _closure1_slot2;
                var10 = _closure1_slot3;
                var7 = 44;
                var7 = var10[var7];
                var10 = var9.bind(var0)(var7);
                var9 = var10.cancelAttachToProcess;
                var7 = _closure1_slot76;
                var7 = var7.desktopSource;
                var7 = var7.soundshareId;
                var7 = var9.bind(var10)(var7);
            case 302:
                if (!(var2 != var6)) {
                    _fun30499_ip = 316;
                    continue _fun30499
                }
            case 306:
                var2 = _closure1_slot176;
                var2 = var2.bind(var0)(var6, var3);
            case 316:
                _closure1_slot76 = var1;
                var2 = _closure1_slot144;
                var1 = 'MediaEngineStore clips';
                var7 = var2.bind(var0)(var1);
                var1 = _closure1_slot148;
                var1 = var1.bind(var0)();
                var9 = var1.videoHook;
                var3 = _closure1_slot73;
                var2 = var3.setClipsSource;
                var1 = {};
                var6 = {};
                var10 = _closure1_slot76;
                var10 = var10.desktopSource;
                var10 = var10.id;
                var6.id = var10;
                var10 = _closure1_slot76;
                var10 = var10.desktopSource;
                var10 = var10.soundshareId;
                var6.soundshareId = var10;
                var6.useVideoHook = var9;
                var9 = _closure1_slot159;
                var9 = var9.bind(var0)();
                var6.useGraphicsCapture = var9;
                var9 = false;
                var6.useCaptureDeviceForEncode = var9;
                var10 = _closure1_slot71;
                var9 = var10.getExperimentalSoundshare;
                var9 = var9.bind(var10)();
                var6.useLoopback = var9;
                var9 = true;
                var6.useQuartzCapturer = var9;
                var9 = _closure1_slot160;
                var9 = var9.bind(var0)();
                var6.allowScreenCaptureKit = var9;
                var9 = 500;
                var6.videoHookStaleFrameTimeoutMs = var9;
                var8 = _closure1_slot64;
                var6.graphicsCaptureStaleFrameTimeoutMs = var8;
                var6.hdrCaptureMode = var7;
                var1.desktopDescription = var6;
                var1.quality = var5;
                var1.applicationName = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
            case 514:
                var0 = false;
                return var0;
        }
    };
    var3.CLIPS_INIT = var10;
    var10 = function arg0() {
        _fun30500: for (var _fun30500_ip = 0;;) switch (_fun30500_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.settings;
                var1 = var0.decoupledClipsEnabled;
                var0 = false;
                if (!(var0 === var1)) {
                    _fun30500_ip = 45;
                    continue _fun30500
                }
            case 21:
                var2 = null;
                _closure1_slot76 = var2;
                var1 = _closure1_slot73;
                var0 = var1.setClipsSource;
                var0 = var0.bind(var1)(var2);
            case 45:
                var0 = undefined;
                return var0;
        }
    };
    var3.CLIPS_SETTINGS_UPDATE = var10;
    var10 = function arg0() {
        var0 = arg0;
        var1 = var0.enabled;
        _closure1_slot133 = var1;
        var0 = undefined;
        return var0;
    };
    var3.MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE = var10;
    var10 = function arg0() {
        var0 = arg0;
        var0 = var0.newVoiceFilterId;
        var _closure2_slot0 = var0;
        var4 = _closure1_slot164;
        var3 = {};
        var3.mostRecentlyRequestedVoiceFilter = var0;
        var0 = undefined;
        var3 = var4.bind(var0)(var3);
        var3 = _closure1_slot73;
        var2 = var3.eachConnection;
        var1 = function(arg0) { // Environment: var1
            var2 = arg0;
            var1 = var2.setVoiceFilterId;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.VOICE_FILTER_REQUEST_SWITCH = var10;
    var10 = function arg0() {
        _fun30504: for (var _fun30504_ip = 0;;) switch (_fun30504_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.enabled;
                var4 = _closure1_slot1;
                var2 = _closure1_slot3;
                var0 = 52;
                var2 = var2[var0];
                var0 = undefined;
                var6 = var4.bind(var0)(var2);
                var5 = var6.track;
                var2 = _closure1_slot25;
                var4 = var2.VOICE_FILTER_PLAYBACK_TOGGLED;
                var2 = {};
                var8 = _closure1_slot114;
                var7 = null;
                var8 = var7 != var8;
                if (!var8) {
                    _fun30504_ip = 67;
                    continue _fun30504
                }
            case 63:
                var7 = _closure1_slot114;
            case 67:
                var2.active_voice_filter_id = var7;
                var2.enabled = var3;
                var2 = var5.bind(var6)(var4, var2);
                var2 = _closure1_slot164;
                var1 = {};
                var1.voiceFilterPlaybackEnabled = var3;
                var1 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var3.VOICE_FILTER_LOOPBACK_TOGGLE = var10;
    var10 = function arg0() {
        _fun30505: for (var _fun30505_ip = 0;;) switch (_fun30505_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.voiceFilterId;
                var0 = _closure1_slot114;
                _closure1_slot116 = var0;
                var0 = _closure1_slot115;
                _closure1_slot117 = var0;
                _closure1_slot114 = var2;
                var0 = null;
                if (!(var0 !== var2)) {
                    _fun30505_ip = 55;
                    continue _fun30505
                }
            case 38:
                var2 = global;
                var3 = var2.Date;
                var2 = var3.now;
                var0 = var2.bind(var3)();
            case 55:
                _closure1_slot115 = var0;
                var0 = undefined;
                return var0;
        }
    };
    var3.VOICE_FILTER_APPLIED = var10;
    var3.VOICE_FILTER_DOWNLOAD_FAILED = var7;
    var3.VOICE_FILTER_APPLY_FAILED = var7;
    var7 = var9.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var9
        }
    });
    var29 = var7;
    var27 = var3;
    var3 = new var29[var9](var28, var27, var26);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot71 = var3;
    var4 = 90;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/MediaEngineStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.WINDOWS_NOISE_SUPPRESSION_EFFECT = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [15, 17, 18, 57, 6, 7, 5, 3479, 3484, 1590, 3485, 3515, 1310, 3516, 1216, 3518, 3519, 1372, 3520, 3630, 1621, 12297, 660, 3508, 4014, 665, 12298, 3512, 3, 667, 478, 1309, 3076, 3635, 3632, 4015, 12299, 12300, 12301, 8663, 8662, 12302, 22, 12275, 12303, 12274, 12304, 12305, 8032, 806, 12306, 12309, 795, 12310, 8245, 12311, 12312, 12313, 12267, 12314, 12315, 12316, 12317, 12318, 12319, 3511, 3514, 3713, 12320, 1347, 12321, 12322, 12367, 7468, 587, 12368, 1234, 12410, 12411, 12412, 12413, 12414, 12417, 44, 12296, 12272, 1207, 12259, 8062, 566, 2]);