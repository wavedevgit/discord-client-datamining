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
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var4
        _fun29948: for (var _fun29948_ip = 0;;) switch (_fun29948_ip) {
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
                _fun29948_ip = 74;
                continue _fun29948;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot133 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot133 = var0;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var4
        _fun29951: for (var _fun29951_ip = 0;;) switch (_fun29951_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun29951_ip = 45;
                    continue _fun29951
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun29951_ip = 54;
                    continue _fun29951
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun29951_ip = 342;
                    continue _fun29951
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun29951_ip = 322;
                    continue _fun29951
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun29951_ip = 282;
                    continue _fun29951
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun29951_ip = 269;
                    continue _fun29951
                }
            case 109:
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
                    _fun29951_ip = 162;
                    continue _fun29951
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun29951_ip = 178;
                    continue _fun29951
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun29951_ip = 248;
                    continue _fun29951
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun29951_ip = 248;
                    continue _fun29951
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun29951_ip = 233;
                    continue _fun29951
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun29951_ip = 246;
                    continue _fun29951
                }
            case 233:
                var8 = _closure1_slot135;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun29951_ip = 264;
                continue _fun29951;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun29951_ip = 282;
                continue _fun29951;
            case 269:
                var6 = _closure1_slot135;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun29951_ip = 322;
                    continue _fun29951
                }
            case 288:
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
            case 322:
                if (!var3) {
                    _fun29951_ip = 329;
                    continue _fun29951
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun29952: for (var _fun29952_ip = 0;;) switch (_fun29952_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun29952_ip = 56;
                                continue _fun29952
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
                            _fun29952_ip = 67;
                            continue _fun29952;
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
            case 342:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot134 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var4
        _fun29953: for (var _fun29953_ip = 0;;) switch (_fun29953_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun29953_ip = 23;
                    continue _fun29953
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun29953_ip = 33;
                    continue _fun29953
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
                    _fun29953_ip = 70;
                    continue _fun29953
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun29953_ip = 55;
                    continue _fun29953
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot135 = var0;
    var0 = function() { // Original name: getDefaultSettings, environment: var4
        _fun29954: for (var _fun29954_ip = 0;;) switch (_fun29954_ip) {
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
                var3 = var3[var2];
                var2 = undefined;
                var2 = var5.bind(var2)(var3);
                var2 = var2.isPlatformEmbedded;
                if (var2) {
                    _fun29954_ip = 80;
                    continue _fun29954
                }
            case 78:
                var2 = false;
            case 80:
                var1.autoThreshold = var2;
                var2 = true;
                var3 = new Array(0);
                var1.shortcut = var3;
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
                var5 = _closure1_slot47;
                var0.inputVolume = var5;
                var5 = _closure1_slot47;
                var0.outputVolume = var5;
                var5 = _closure1_slot49;
                var0.inputDeviceId = var5;
                var5 = _closure1_slot49;
                var0.outputDeviceId = var5;
                var5 = _closure1_slot49;
                var0.videoDeviceId = var5;
                var0.qos = var3;
                var0.qosMigrated = var3;
                var6 = _closure1_slot71;
                var5 = var6.supports;
                var4 = _closure1_slot46;
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
    var _closure1_slot136 = var0;
    var0 = function() { // Original name: getHdrCaptureMode, environment: var4
        _fun29955: for (var _fun29955_ip = 0;;) switch (_fun29955_ip) {
            case 0:
                var2 = _closure1_slot23;
                var0 = var2.getCurrentUser;
                var5 = var0.bind(var2)();
                var0 = null;
                var3 = var0 == var5;
                var4 = undefined;
                var2 = undefined;
                if (var3) {
                    _fun29955_ip = 39;
                    continue _fun29955
                }
            case 29:
                var3 = var5.isStaff;
                var2 = var3.bind(var5)();
            case 39:
                if (!(var0 != var2)) {
                    _fun29955_ip = 50;
                    continue _fun29955
                }
            case 43:
                var0 = 'always';
                if (var2) {
                    _fun29955_ip = 119;
                    continue _fun29955
                }
            case 50:
                var2 = _closure1_slot0;
                var5 = _closure1_slot3;
                var1 = 34;
                var1 = var5[var1];
                var1 = var2.bind(var4)(var1);
                var3 = var1.CurrentReleaseChannel;
                var1 = 35;
                var1 = var5[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.ReleaseChannels;
                var2 = var1.CANARY;
                var1 = 'never';
                if (!(var3 === var2)) {
                    _fun29955_ip = 116;
                    continue _fun29955
                }
            case 110:
                var1 = 'permittedDevicesOnly';
            case 116:
                var0 = var1;
            case 119:
                return var0;
        }
    };
    var _closure1_slot137 = var0;
    var0 = function() { // Original name: _detectH265HardwareDecode, environment: var4
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot10;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun29958: for (var _fun29958_ip = 0;;) switch (_fun29958_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun29958_ip = 187;
                            continue _fun29958
                        }
                    case 10:
                        var3 = undefined;
                        var1 = global;
                        var2 = var1.window;
                        var4 = 'undefined';
                        var2 = typeof var2;
                        if (!(var4 !== var2)) {
                            _fun29958_ip = 182;
                            continue _fun29958
                        }
                    case 33:
                        var2 = var1.navigator;
                        var2 = typeof var2;
                        if (!(var4 !== var2)) {
                            _fun29958_ip = 182;
                            continue _fun29958
                        }
                    case 49:
                        var4 = var1.navigator;
                        var2 = 'mediaCapabilities';
                        var2 = var2 in var4;
                        if (!var2) {
                            _fun29958_ip = 182;
                            continue _fun29958
                        }
                    case 66:
                        var2 = var1.navigator;
                        var4 = var2.mediaCapabilities;
                        var2 = null;
                        if (!(var2 != var4)) {
                            _fun29958_ip = 182;
                            continue _fun29958
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
                            _fun29958_ip = 172;
                            continue _fun29958
                        }
                    case 146:
                        var3 = var1;
                        var4 = var1.supported;
                        var2 = var4;
                        if (!var4) {
                            _fun29958_ip = 169;
                            continue _fun29958
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
        _closure1_slot138 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot138 = var0;
    var0 = function() { // Original name: startH265HardwareDetection, environment: var4
        _fun29959: for (var _fun29959_ip = 0;;) switch (_fun29959_ip) {
            case 0:
                var3 = _closure1_slot118;
                var0 = null;
                if (!(var0 == var3)) {
                    _fun29959_ip = 89;
                    continue _fun29959
                }
            case 15:
                var0 = global;
                var3 = var0.window;
                var4 = 'undefined';
                var3 = typeof var3;
                if (!(var4 === var3)) {
                    _fun29959_ip = 54;
                    continue _fun29959
                }
            case 33:
                var4 = var0.Promise;
                var3 = var4.resolve;
                var0 = false;
                var0 = var3.bind(var4)(var0);
                _fun29959_ip = 87;
                continue _fun29959;
            case 54:
                var4 = function() { // Original name: detectH265HardwareDecode, environment: var2
                    var0 = undefined;
                    var3 = _closure1_slot138;
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
                    _closure1_slot117 = var0;
                    return var0;
                };
                var2 = var3.bind(var4)(var2);
                _closure1_slot118 = var2;
                var0 = var2;
            case 87:
                _fun29959_ip = 93;
                continue _fun29959;
            case 89:
                var0 = _closure1_slot118;
            case 93:
                return var0;
        }
    };
    var _closure1_slot139 = var0;
    var0 = function() { // Original name: getStoredSettings, environment: var4
        _fun29962: for (var _fun29962_ip = 0;;) switch (_fun29962_ip) {
            case 0:
                var3 = arguments[0];
                var4 = undefined;
                if (!(var3 === var4)) {
                    _fun29962_ip = 22;
                    continue _fun29962
                }
            case 9:
                var0 = _closure1_slot52;
                var3 = var0.DEFAULT;
            case 22:
                var0 = _closure1_slot75;
                var0 = var0[var3];
                var1 = null;
                if (!(var1 == var0)) {
                    _fun29962_ip = 58;
                    continue _fun29962
                }
            case 39:
                var1 = _closure1_slot136;
                var1 = var1.bind(var4)();
                var2 = _closure1_slot75;
                var2[var3] = var1;
                var0 = var1;
            case 58:
                return var0;
        }
    };
    var _closure1_slot140 = var0;
    var0 = function() { // Original name: _getSettings10, environment: var4
        _fun29963: for (var _fun29963_ip = 0;;) switch (_fun29963_ip) {
            case 0:
                var2 = arguments[0];
                var6 = undefined;
                if (!(var2 === var6)) {
                    _fun29963_ip = 22;
                    continue _fun29963
                }
            case 9:
                var0 = _closure1_slot52;
                var2 = var0.DEFAULT;
            case 22:
                var1 = _closure1_slot140;
                var3 = var1.bind(var6)(var2);
                var2 = _closure1_slot70;
                var1 = var3.activeInputProfile;
                var5 = null;
                if (!(var5 == var1)) {
                    _fun29963_ip = 60;
                    continue _fun29963
                }
            case 50:
                var4 = _closure1_slot44;
                var1 = var4.CUSTOM;
            case 60:
                var1 = var2[var1];
                var2 = {};
                var4 = var3.modeOptions;
                if (!(var5 == var4)) {
                    _fun29963_ip = 78;
                    continue _fun29963
                }
            case 76:
                var4 = {};
            case 78:
                var11 = var2;
                var10 = var4;
                var4 = copyDataProperties(var11, var10);
                var4 = var1.modeOptions;
                if (!(var5 == var4)) {
                    _fun29963_ip = 100;
                    continue _fun29963
                }
            case 98:
                var4 = {};
            case 100:
                var11 = var2;
                var10 = var4;
                var4 = copyDataProperties(var11, var10);
                var4 = var2.vadDuringPreProcess;
                if (!(var5 == var4)) {
                    _fun29963_ip = 172;
                    continue _fun29963
                }
            case 120:
                var7 = _closure1_slot0;
                var8 = _closure1_slot3;
                var4 = 36;
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
                    _fun29963_ip = 194;
                    continue _fun29963
                }
            case 182:
                var7 = var1.automaticGainControl;
                var4 = true;
                if (!(var4 !== var7)) {
                    _fun29963_ip = 206;
                    continue _fun29963
                }
            case 194:
                var7 = var3.automaticGainControl;
                var4 = true;
                if (!(var4 === var7)) {
                    _fun29963_ip = 269;
                    continue _fun29963
                }
            case 206:
                var4 = _closure1_slot0;
                var7 = _closure1_slot3;
                var0 = 37;
                var0 = var7[var0];
                var6 = var4.bind(var6)(var0);
                var4 = var6.getAGC2ExperimentConfig;
                var0 = {};
                var7 = 'getSettings';
                var0.location = var7;
                var0 = var4.bind(var6)(var0);
                var4 = var0.vadKrispActivationThreshold;
                if (!(var5 != var4)) {
                    _fun29963_ip = 269;
                    continue _fun29963
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
    var _closure1_slot141 = var0;
    var0 = function(arg0) { // Original name: setInputMode, environment: var4
        _fun29964: for (var _fun29964_ip = 0;;) switch (_fun29964_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot141;
                var1 = var4.context;
                var0 = undefined;
                var5 = var2.bind(var0)(var1);
                var6 = var5.mode;
                var2 = var4.context;
                var1 = _closure1_slot52;
                var1 = var1.DEFAULT;
                var3 = var6;
                if (!(var2 === var1)) {
                    _fun29964_ip = 192;
                    continue _fun29964
                }
            case 52:
                var2 = _closure1_slot0;
                var8 = _closure1_slot3;
                var1 = 38;
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
                    _fun29964_ip = 156;
                    continue _fun29964
                }
            case 111:
                var2 = _closure1_slot27;
                var2 = var2.PUSH_TO_TALK;
                var2 = var6 === var2;
                if (!var2) {
                    _fun29964_ip = 140;
                    continue _fun29964
                }
            case 128:
                var9 = var5.modeOptions;
                var2 = var9.pttLatchingEnabled;
            case 140:
                var1 = var6;
                if (!var2) {
                    _fun29964_ip = 156;
                    continue _fun29964
                }
            case 146:
                var2 = _closure1_slot27;
                var1 = var2.VOICE_ACTIVITY;
            case 156:
                var6 = _closure1_slot0;
                var9 = _closure1_slot3;
                var2 = 39;
                var2 = var9[var2];
                var6 = var6.bind(var0)(var2);
                var2 = var6.setPushToTalkState;
                var2 = var2.bind(var6)(var8, var8, var8);
                var3 = var1;
            case 192:
                var2 = var4.setInputMode;
                var1 = {};
                var6 = var5.modeOptions;
                var6 = var6.threshold;
                var1.vadThreshold = var6;
                var6 = var5.modeOptions;
                var6 = var6.autoThreshold;
                var1.vadAutoThreshold = var6;
                var6 = var5.modeOptions;
                var6 = var6.vadUseKrisp;
                if (!var6) {
                    _fun29964_ip = 257;
                    continue _fun29964
                }
            case 249:
                var7 = _closure1_slot174;
                var6 = var7.bind(var0)();
            case 257:
                var1.vadUseKrisp = var6;
                var6 = var5.modeOptions;
                var8 = var6.vadKrispActivationThreshold;
                var6 = null;
                var9 = var6 != var8;
                var7 = 0.5;
                if (!var9) {
                    _fun29964_ip = 296;
                    continue _fun29964
                }
            case 293:
                var7 = var8;
            case 296:
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
                    _fun29964_ip = 357;
                    continue _fun29964
                }
            case 354:
                var6 = var7;
            case 357:
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
    var _closure1_slot142 = var0;
    var0 = function(arg0) { // Original name: clampVolume, environment: var4
        _fun29965: for (var _fun29965_ip = 0;;) switch (_fun29965_ip) {
            case 0:
                var2 = undefined;
                var4 = undefined;
                if (!(var4 === var4)) {
                    _fun29965_ip = 15;
                    continue _fun29965
                }
            case 8:
                var4 = _closure1_slot47;
            case 15:
                var1 = _closure1_slot1;
                var3 = _closure1_slot3;
                var0 = 40;
                var0 = var3[var0];
                var3 = var1.bind(var2)(var0);
                var2 = var3.clamp;
                var1 = arg0;
                var0 = 0;
                var0 = var2.bind(var3)(var1, var0, var4);
                return var0;
        }
    };
    var _closure1_slot143 = var0;
    var0 = function(arg0) { // Original name: updateConnectionMuteDeaf, environment: var4
        _fun29966: for (var _fun29966_ip = 0;;) switch (_fun29966_ip) {
            case 0:
                var2 = arg0;
                var4 = _closure1_slot141;
                var3 = var2.context;
                var0 = undefined;
                var3 = var4.bind(var0)(var3);
                var4 = _closure1_slot77;
                var6 = !var4;
                if (var6) {
                    _fun29966_ip = 38;
                    continue _fun29966
                }
            case 32:
                var6 = var3.mute;
            case 38:
                if (var6) {
                    _fun29966_ip = 47;
                    continue _fun29966
                }
            case 41:
                var6 = var3.deaf;
            case 47:
                var5 = var2.context;
                var4 = _closure1_slot52;
                var4 = var4.DEFAULT;
                if (!(var5 !== var4)) {
                    _fun29966_ip = 92;
                    continue _fun29966
                }
            case 66:
                var7 = var2.context;
                var4 = _closure1_slot52;
                var4 = var4.STREAM;
                var5 = var6;
                if (!(var7 === var4)) {
                    _fun29966_ip = 166;
                    continue _fun29966
                }
            case 88:
                var5 = true;
                _fun29966_ip = 166;
                continue _fun29966;
            case 92:
                var4 = var6;
                if (var6) {
                    _fun29966_ip = 102;
                    continue _fun29966
                }
            case 98:
                var4 = _closure1_slot85;
            case 102:
                if (var4) {
                    _fun29966_ip = 109;
                    continue _fun29966
                }
            case 105:
                var4 = _closure1_slot86;
            case 109:
                if (var4) {
                    _fun29966_ip = 116;
                    continue _fun29966
                }
            case 112:
                var4 = _closure1_slot87;
            case 116:
                if (var4) {
                    _fun29966_ip = 163;
                    continue _fun29966
                }
            case 119:
                var7 = _closure1_slot1;
                var8 = _closure1_slot3;
                var6 = 33;
                var6 = var8[var6];
                var8 = var7.bind(var0)(var6);
                var7 = var8.didHavePermission;
                var6 = _closure1_slot41;
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
                var2 = _closure1_slot52;
                var2 = var2.DEFAULT;
                if (!(var3 === var2)) {
                    _fun29966_ip = 245;
                    continue _fun29966
                }
            case 215:
                var2 = _closure1_slot1;
                var3 = _closure1_slot3;
                var1 = 41;
                var1 = var3[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.updateNativeMute;
                var1 = var1.bind(var2)();
            case 245:
                return var0;
        }
    };
    var _closure1_slot144 = var0;
    var0 = function() { // Original name: updateVideo, environment: var4
        _fun29967: for (var _fun29967_ip = 0;;) switch (_fun29967_ip) {
            case 0:
                var2 = arguments[0];
                var7 = arguments[1];
                var0 = undefined;
                if (!(var2 === var0)) {
                    _fun29967_ip = 19;
                    continue _fun29967
                }
            case 12:
                var2 = _closure1_slot89;
            case 19:
                if (!(var7 === var0)) {
                    _fun29967_ip = 30;
                    continue _fun29967
                }
            case 23:
                var7 = _closure1_slot73;
            case 30:
                var6 = _closure1_slot73;
                var3 = null;
                var5 = var3 == var6;
                var4 = undefined;
                if (var5) {
                    _fun29967_ip = 54;
                    continue _fun29967
                }
            case 48:
                var4 = var6.desktopSource;
            case 54:
                var4 = var3 != var4;
                if (!var4) {
                    _fun29967_ip = 105;
                    continue _fun29967
                }
            case 61:
                var5 = var6.desktopSource;
                var8 = var5.id;
                var9 = var3 == var7;
                var5 = undefined;
                if (var9) {
                    _fun29967_ip = 101;
                    continue _fun29967
                }
            case 81:
                var9 = var7.desktopSource;
                var10 = var3 == var9;
                var5 = undefined;
                if (var10) {
                    _fun29967_ip = 101;
                    continue _fun29967
                }
            case 96:
                var5 = var9.id;
            case 101:
                var4 = var8 !== var5;
            case 105:
                if (!var4) {
                    _fun29967_ip = 223;
                    continue _fun29967
                }
            case 108:
                var4 = var6.desktopSource;
                var4 = var4.soundshareId;
                var4 = var3 != var4;
                if (!var4) {
                    _fun29967_ip = 157;
                    continue _fun29967
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
                    _fun29967_ip = 203;
                    continue _fun29967
                }
            case 160:
                var5 = _closure1_slot2;
                var8 = _closure1_slot3;
                var4 = 42;
                var4 = var8[var4];
                var8 = var5.bind(var0)(var4);
                var5 = var8.cancelAttachToProcess;
                var4 = var6.desktopSource;
                var4 = var4.soundshareId;
                var4 = var5.bind(var8)(var4);
            case 203:
                var8 = _closure1_slot71;
                var5 = var8.setGoLiveSource;
                var4 = _closure1_slot79;
                var4 = var5.bind(var8)(var3, var4);
            case 223:
                var5 = var3 == var6;
                var4 = undefined;
                if (var5) {
                    _fun29967_ip = 238;
                    continue _fun29967
                }
            case 232:
                var4 = var6.cameraSource;
            case 238:
                var4 = var3 == var4;
                if (var4) {
                    _fun29967_ip = 343;
                    continue _fun29967
                }
            case 245:
                var5 = var6.cameraSource;
                var8 = var5.videoDeviceGuid;
                var9 = var3 == var7;
                var5 = undefined;
                if (var9) {
                    _fun29967_ip = 287;
                    continue _fun29967
                }
            case 266:
                var9 = var7.cameraSource;
                var10 = var3 == var9;
                var5 = undefined;
                if (var10) {
                    _fun29967_ip = 287;
                    continue _fun29967
                }
            case 281:
                var5 = var9.videoDeviceGuid;
            case 287:
                var5 = var8 === var5;
                if (!var5) {
                    _fun29967_ip = 340;
                    continue _fun29967
                }
            case 294:
                var6 = var6.cameraSource;
                var8 = var6.audioDeviceGuid;
                var9 = var3 == var7;
                var6 = undefined;
                if (var9) {
                    _fun29967_ip = 336;
                    continue _fun29967
                }
            case 315:
                var9 = var7.cameraSource;
                var10 = var3 == var9;
                var6 = undefined;
                if (var10) {
                    _fun29967_ip = 336;
                    continue _fun29967
                }
            case 330:
                var6 = var9.audioDeviceGuid;
            case 336:
                var5 = var8 === var6;
            case 340:
                var4 = var5;
            case 343:
                if (var4) {
                    _fun29967_ip = 366;
                    continue _fun29967
                }
            case 346:
                var6 = _closure1_slot71;
                var5 = var6.setGoLiveSource;
                var4 = _closure1_slot79;
                var4 = var5.bind(var6)(var3, var4);
            case 366:
                var4 = _closure1_slot89;
                if (var4) {
                    _fun29967_ip = 376;
                    continue _fun29967
                }
            case 373:
                if (!var2) {
                    _fun29967_ip = 489;
                    continue _fun29967
                }
            case 376:
                var4 = _closure1_slot141;
                var4 = var4.bind(var0)();
                var6 = var4.videoDeviceId;
                var4 = _closure1_slot89;
                if (!var4) {
                    _fun29967_ip = 429;
                    continue _fun29967
                }
            case 397:
                var4 = _closure1_slot49;
                if (!(var6 === var4)) {
                    _fun29967_ip = 429;
                    continue _fun29967
                }
            case 405:
                var5 = _closure1_slot91;
                var4 = _closure1_slot49;
                if (!(var5 === var4)) {
                    _fun29967_ip = 429;
                    continue _fun29967
                }
            case 417:
                var5 = _closure1_slot90;
                var4 = _closure1_slot50;
                if (!(var5 === var4)) {
                    _fun29967_ip = 435;
                    continue _fun29967
                }
            case 429:
                _closure1_slot91 = var6;
                _fun29967_ip = 439;
                continue _fun29967;
            case 435:
                var6 = _closure1_slot90;
            case 439:
                _closure1_slot89 = var2;
                if (var2) {
                    _fun29967_ip = 452;
                    continue _fun29967
                }
            case 446:
                var2 = _closure1_slot50;
                _fun29967_ip = 466;
                continue _fun29967;
            case 452:
                var5 = _closure1_slot161;
                var4 = _closure1_slot83;
                var2 = var5.bind(var0)(var4, var6);
            case 466:
                _closure1_slot90 = var2;
                var5 = _closure1_slot71;
                var4 = var5.setVideoInputDevice;
                var2 = _closure1_slot90;
                var2 = var4.bind(var5)(var2);
            case 489:
                var _closure1_slot73 = var7;
                if (!(var3 != var7)) {
                    _fun29967_ip = 1078;
                    continue _fun29967
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
                    _fun29967_ip = 1000;
                    continue _fun29967
                }
            case 549:
                var2 = _closure1_slot137;
                var9 = var2.bind(var0)();
                var2 = _closure1_slot141;
                var2 = var2.bind(var0)();
                var13 = var2.videoHook;
                var2 = _closure1_slot152;
                var12 = var2.bind(var0)();
                var11 = 0;
                if (!var12) {
                    _fun29967_ip = 722;
                    continue _fun29967
                }
            case 587:
                var4 = _closure1_slot0;
                var6 = _closure1_slot3;
                var2 = 30;
                var2 = var6[var2];
                var4 = var4.bind(var0)(var2);
                var2 = var4.isWindows;
                var2 = var2.bind(var4)();
                if (!var2) {
                    _fun29967_ip = 706;
                    continue _fun29967
                }
            case 620:
                var6 = _closure1_slot1;
                var4 = _closure1_slot3;
                var8 = 68;
                var8 = var4[var8];
                var10 = var6.bind(var0)(var8);
                var8 = var10.satisfies;
                var15 = 69;
                var4 = var4[var15];
                var4 = var6.bind(var0)(var4);
                var4 = var3 == var4;
                var6 = undefined;
                if (var4) {
                    _fun29967_ip = 696;
                    continue _fun29967
                }
            case 667:
                var14 = _closure1_slot1;
                var4 = _closure1_slot3;
                var4 = var4[var15];
                var4 = var14.bind(var0)(var4);
                var4 = var4.os;
                var6 = var4.release;
            case 696:
                var4 = _closure1_slot35;
                var2 = var8.bind(var10)(var6, var4);
            case 706:
                if (var2) {
                    _fun29967_ip = 715;
                    continue _fun29967
                }
            case 709:
                var2 = _closure1_slot36;
                _fun29967_ip = 719;
                continue _fun29967;
            case 715:
                var2 = _closure1_slot34;
            case 719:
                var11 = var2;
            case 722:
                var4 = _closure1_slot0;
                var6 = _closure1_slot3;
                var2 = 30;
                var2 = var6[var2];
                var4 = var4.bind(var0)(var2);
                var2 = var4.isWindows;
                var10 = var2.bind(var4)();
                if (!var10) {
                    _fun29967_ip = 797;
                    continue _fun29967
                }
            case 755:
                var4 = _closure1_slot0;
                var6 = _closure1_slot3;
                var2 = 43;
                var2 = var6[var2];
                var6 = var4.bind(var0)(var2);
                var4 = var6.getVideoCaptureDeviceForEncodeConfig;
                var2 = 'updateVideo';
                var2 = var4.bind(var6)(var2);
                var10 = var2.enabled;
            case 797:
                var8 = _closure1_slot71;
                var6 = var8.setGoLiveSource;
                var4 = {};
                var2 = {};
                var14 = var7.desktopSource;
                var14 = var14.id;
                var2.id = var14;
                var14 = var7.desktopSource;
                var14 = var14.soundshareId;
                var2.soundshareId = var14;
                var2.useVideoHook = var13;
                var2.useGraphicsCapture = var12;
                var2.useGraphicsCaptureApiLevel = var11;
                var2.useCaptureDeviceForEncode = var10;
                var11 = _closure1_slot69;
                var10 = var11.getExperimentalSoundshare;
                var10 = var10.bind(var11)();
                var2.useLoopback = var10;
                var10 = true;
                var2.useQuartzCapturer = var10;
                var10 = _closure1_slot153;
                var10 = var10.bind(var0)();
                var2.allowScreenCaptureKit = var10;
                var10 = 500;
                var2.videoHookStaleFrameTimeoutMs = var10;
                var10 = _closure1_slot63;
                var2.graphicsCaptureStaleFrameTimeoutMs = var10;
                var2.hdrCaptureMode = var9;
                var10 = _closure1_slot0;
                var11 = _closure1_slot3;
                var9 = 44;
                var9 = var11[var9];
                var11 = var10.bind(var0)(var9);
                var10 = var11.getGlobalFramePoolLockExperimentConfig;
                var9 = {};
                var12 = 'updateVideo';
                var9.location = var12;
                var9 = var10.bind(var11)(var9);
                var9 = var9.enabled;
                var2.enableGlobalFramePoolLock = var9;
                var4.desktopDescription = var2;
                var4.quality = var5;
                var2 = _closure1_slot79;
                var2 = var6.bind(var8)(var4, var2);
            case 1000:
                var2 = var7.cameraSource;
                if (!(var3 != var2)) {
                    _fun29967_ip = 1078;
                    continue _fun29967
                }
            case 1010:
                var4 = _closure1_slot71;
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
                var1 = _closure1_slot79;
                var1 = var3.bind(var4)(var2, var1);
            case 1078:
                return var0;
        }
    };
    var _closure1_slot145 = var0;
    var0 = function(arg0) { // Original name: noiseCancellerErrorToAVUnderlyingError, environment: var4
        _fun29968: for (var _fun29968_ip = 0;;) switch (_fun29968_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot53;
                var1 = var1.CPU_OVERUSE;
                if (!(var1 !== var2)) {
                    _fun29968_ip = 124;
                    continue _fun29968
                }
            case 20:
                var1 = _closure1_slot53;
                var1 = var1.FAILED;
                if (!(var1 !== var2)) {
                    _fun29968_ip = 88;
                    continue _fun29968
                }
            case 34:
                var1 = _closure1_slot53;
                var1 = var1.VAD_CPU_OVERUSE;
                if (!(var1 !== var2)) {
                    _fun29968_ip = 52;
                    continue _fun29968
                }
            case 48:
                var1 = undefined;
                return var1;
            case 52:
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 45;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.AVUnderlyingError;
                var1 = var1.NoiseCancellerVadCpuOveruse;
                return var1;
            case 88:
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 45;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.AVUnderlyingError;
                var1 = var1.NoiseCancellerFailed;
                return var1;
            case 124:
                var2 = _closure1_slot0;
                var1 = _closure1_slot3;
                var0 = 45;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.AVUnderlyingError;
                var0 = var0.NoiseCancellerCpuOveruse;
                return var0;
        }
    };
    var _closure1_slot146 = var0;
    var0 = function(arg0) { // Original name: getAutomaticGainControlConfig, environment: var4
        var4 = arg0;
        var0 = {};
        var0.enabled = var4;
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var1 = 37;
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
    var _closure1_slot147 = var0;
    var0 = function(arg0, arg1) { // Original name: setAutomaticGainControl, environment: var4
        var3 = arg0;
        var2 = var3.setAutomaticGainControl;
        var4 = _closure1_slot147;
        var0 = undefined;
        var1 = arg1;
        var1 = var4.bind(var0)(var1);
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot148 = var0;
    var0 = function(arg0, arg1) { // Original name: setNoiseCancellation, environment: var4
        _fun29971: for (var _fun29971_ip = 0;;) switch (_fun29971_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var5 = _closure1_slot1;
                var4 = _closure1_slot3;
                var0 = 46;
                var4 = var4[var0];
                var0 = undefined;
                var7 = var5.bind(var0)(var4);
                var5 = _closure1_slot69;
                var4 = var5.getSystemMicrophoneMode;
                var6 = var4.bind(var5)();
                var4 = {};
                var5 = 'setNoiseCancellation';
                var4.location = var5;
                var8 = var7.bind(var0)(var2, var6, var4);
                if (!(var8 !== var2)) {
                    _fun29971_ip = 87;
                    continue _fun29971
                }
            case 66:
                var6 = _closure1_slot60;
                var4 = var6.info;
                var2 = 'Falling back to system noise suppression.';
                var2 = var4.bind(var6)(var2);
            case 87:
                var2 = var3.setNoiseCancellation;
                var2 = var2.bind(var3)(var8);
                var2 = _closure1_slot0;
                var4 = _closure1_slot3;
                var1 = 37;
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
                var1 = 47;
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
    var _closure1_slot149 = var0;
    var0 = function(arg0) { // Original name: updateConnectionVoiceProcessing, environment: var4
        _fun29972: for (var _fun29972_ip = 0;;) switch (_fun29972_ip) {
            case 0:
                var3 = arg0;
                var1 = _closure1_slot141;
                var0 = undefined;
                var1 = var1.bind(var0)();
                var7 = var1.inputDeviceId;
                var5 = var3.setEchoCancellation;
                var6 = _closure1_slot19;
                var4 = var6.hasEchoCancellation;
                var4 = var4.bind(var6)(var7);
                if (var4) {
                    _fun29972_ip = 52;
                    continue _fun29972
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
                    _fun29972_ip = 87;
                    continue _fun29972
                }
            case 81:
                var4 = var1.noiseSuppression;
            case 87:
                var4 = var5.bind(var3)(var4);
                var5 = _closure1_slot148;
                var6 = _closure1_slot19;
                var4 = var6.hasAutomaticGainControl;
                var4 = var4.bind(var6)(var7);
                if (var4) {
                    _fun29972_ip = 120;
                    continue _fun29972
                }
            case 114:
                var4 = var1.automaticGainControl;
            case 120:
                var4 = var5.bind(var0)(var3, var4);
                var5 = _closure1_slot149;
                var4 = var1.noiseCancellation;
                var4 = var5.bind(var0)(var3, var4);
                var5 = var3.setVoiceFilterId;
                var4 = _closure1_slot109;
                var4 = var5.bind(var3)(var4);
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var2 = 30;
                var2 = var5[var2];
                var4 = var4.bind(var0)(var2);
                var2 = var4.isWeb;
                var2 = var2.bind(var4)();
                if (!var2) {
                    _fun29972_ip = 224;
                    continue _fun29972
                }
            case 190:
                var1 = var1.noiseCancellation;
                var2 = -100;
                if (!var1) {
                    _fun29972_ip = 211;
                    continue _fun29972
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
    var _closure1_slot150 = var0;
    var0 = function() { // Original name: setupMediaEngine, environment: var4
        _fun29973: for (var _fun29973_ip = 0;;) switch (_fun29973_ip) {
            case 0:
                var5 = _closure1_slot84;
                var4 = var5.start;
                var3 = _closure1_slot65;
                var0 = function() { // Environment: var1
                    var3 = _closure1_slot60;
                    var2 = var3.error;
                    var0 = 'Device enumeration timed out';
                    var0 = var2.bind(var3)(var0);
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var0 = 48;
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
                var9 = _closure1_slot71;
                var8 = var9.on;
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var6 = 31;
                var5 = var3[var6];
                var0 = undefined;
                var5 = var4.bind(var0)(var5);
                var5 = var5.MediaEngineEvent;
                var7 = var5.Connection;
                var5 = function(arg0) { // Environment: var1
                    _fun29975: for (var _fun29975_ip = 0;;) switch (_fun29975_ip) {
                        case 0:
                            var4 = arg0;
                            var _closure3_slot0 = var4;
                            var3 = _closure1_slot142;
                            var0 = undefined;
                            var3 = var3.bind(var0)(var4);
                            var3 = _closure1_slot144;
                            var3 = var3.bind(var0)(var4);
                            var3 = _closure1_slot150;
                            var3 = var3.bind(var0)(var4);
                            var3 = _closure1_slot141;
                            var3 = var3.bind(var0)();
                            var8 = var4.setAttenuation;
                            var7 = var3.attenuation;
                            var6 = var3.attenuateWhileSpeakingSelf;
                            var5 = var3.attenuateWhileSpeakingOthers;
                            var5 = var8.bind(var4)(var7, var6, var5);
                            var5 = var4.setQoS;
                            var3 = var3.qos;
                            var3 = var5.bind(var4)(var3);
                            var7 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var8 = 49;
                            var5 = var3[var8];
                            var10 = var7.bind(var0)(var5);
                            var9 = var10.getH265NoSoftwareDecodeConfig;
                            var6 = {};
                            var5 = 'setupMediaEngine';
                            var6.location = var5;
                            var6 = var9.bind(var10)(var6);
                            var6 = var6.treatment;
                            var9 = var3[var8];
                            var9 = var7.bind(var0)(var9);
                            var9 = var9.H265Treatment;
                            var9 = var9.NoSoftwareDecodeWithFallback;
                            var9 = var6 === var9;
                            _closure1_slot119 = var9;
                            var3 = var3[var8];
                            var3 = var7.bind(var0)(var3);
                            var3 = var3.H265Treatment;
                            var3 = var3.NoSoftwareDecode;
                            if (!(var6 !== var3)) {
                                _fun29975_ip = 325;
                                continue _fun29975
                            }
                        case 203:
                            var7 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var3 = var3[var8];
                            var3 = var7.bind(var0)(var3);
                            var3 = var3.H265Treatment;
                            var3 = var3.NoSoftwareDecodeWithFallback;
                            if (!(var6 !== var3)) {
                                _fun29975_ip = 325;
                                continue _fun29975
                            }
                        case 236:
                            var7 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var3 = var3[var8];
                            var3 = var7.bind(var0)(var3);
                            var3 = var3.H265Treatment;
                            var3 = var3.Disabled;
                            if (!(var6 === var3)) {
                                _fun29975_ip = 459;
                                continue _fun29975
                            }
                        case 272:
                            var7 = var4.setExperimentFlag;
                            var3 = _closure1_slot51;
                            var6 = var3.H265_HARDWARE_ONLY;
                            var3 = true;
                            var3 = var7.bind(var4)(var6, var3);
                            var7 = var4.setExperimentFlag;
                            var3 = _closure1_slot51;
                            var6 = var3.H265_HARDWARE_DECODE_AVAILABLE;
                            var3 = false;
                            var3 = var7.bind(var4)(var6, var3);
                            _fun29975_ip = 459;
                            continue _fun29975;
                        case 325:
                            var6 = var4.setExperimentFlag;
                            var3 = _closure1_slot51;
                            var3 = var3.H265_HARDWARE_ONLY;
                            var7 = true;
                            var3 = var6.bind(var4)(var3, var7);
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var8 = 30;
                            var3 = var3[var8];
                            var6 = var6.bind(var0)(var3);
                            var3 = var6.isWindows;
                            var3 = var3.bind(var6)();
                            if (var3) {
                                _fun29975_ip = 436;
                                continue _fun29975
                            }
                        case 382:
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var3 = var3[var8];
                            var6 = var6.bind(var0)(var3);
                            var3 = var6.isMac;
                            var3 = var3.bind(var6)();
                            if (!var3) {
                                _fun29975_ip = 459;
                                continue _fun29975
                            }
                        case 412:
                            var6 = var4.setExperimentFlag;
                            var3 = _closure1_slot51;
                            var3 = var3.H265_HARDWARE_DECODE_AVAILABLE;
                            var3 = var6.bind(var4)(var3, var7);
                            _fun29975_ip = 459;
                            continue _fun29975;
                        case 436:
                            var3 = _closure1_slot139;
                            var7 = var3.bind(var0)();
                            var6 = var7.then;
                            var3 = function(arg0) { // Environment: var2
                                var3 = _closure3_slot0;
                                var2 = var3.setExperimentFlag;
                                var0 = _closure1_slot51;
                                var1 = var0.H265_HARDWARE_DECODE_AVAILABLE;
                                var0 = arg0;
                                var0 = var2.bind(var3)(var1, var0);
                                var0 = undefined;
                                return var0;
                            };
                            var3 = var6.bind(var7)(var3);
                        case 459:
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var9 = 30;
                            var3 = var3[var9];
                            var6 = var6.bind(var0)(var3);
                            var3 = var6.isWindows;
                            var3 = var3.bind(var6)();
                            if (!var3) {
                                _fun29975_ip = 534;
                                continue _fun29975
                            }
                        case 492:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot3;
                            var6 = 50;
                            var6 = var8[var6];
                            var8 = var7.bind(var0)(var6);
                            var7 = var8.getH264MFVoiceExperimentConfig;
                            var6 = {};
                            var6.location = var5;
                            var6 = var7.bind(var8)(var6);
                            var3 = var6.enabled;
                        case 534:
                            if (!var3) {
                                _fun29975_ip = 561;
                                continue _fun29975
                            }
                        case 537:
                            var7 = var4.setExperimentFlag;
                            var3 = _closure1_slot51;
                            var6 = var3.USE_H264_MF_DECODER;
                            var3 = true;
                            var3 = var7.bind(var4)(var6, var3);
                        case 561:
                            var6 = _closure1_slot21;
                            var3 = var6.getGuildId;
                            var7 = var3.bind(var6)();
                            var6 = _closure1_slot1;
                            var8 = null;
                            if (!(var8 == var7)) {
                                _fun29975_ip = 598;
                                continue _fun29975
                            }
                        case 585:
                            var10 = _closure1_slot3;
                            var3 = 52;
                            var3 = var10[var3];
                            _fun29975_ip = 609;
                            continue _fun29975;
                        case 598:
                            var11 = _closure1_slot3;
                            var10 = 51;
                            var3 = var11[var10];
                        case 609:
                            var11 = var6.bind(var0)(var3);
                            var10 = var11.getCurrentConfig;
                            var6 = {};
                            var6.location = var5;
                            var12 = var8 != var7;
                            var3 = undefined;
                            if (!var12) {
                                _fun29975_ip = 638;
                                continue _fun29975
                            }
                        case 635:
                            var3 = var7;
                        case 638:
                            var6.guildId = var3;
                            var3 = {};
                            var7 = true;
                            var3.autoTrackExposure = var7;
                            var3 = var10.bind(var11)(var6, var3);
                            var10 = var3.muteBeforeProcessing;
                            var6 = var3.pttBeforeProcessing;
                            var3 = var3.skipEncode;
                            if (!var10) {
                                _fun29975_ip = 700;
                                continue _fun29975
                            }
                        case 678:
                            var11 = var4.setExperimentFlag;
                            var10 = _closure1_slot51;
                            var10 = var10.MUTE_BEFORE_PROCESSING;
                            var10 = var11.bind(var4)(var10, var7);
                        case 700:
                            if (!var6) {
                                _fun29975_ip = 725;
                                continue _fun29975
                            }
                        case 703:
                            var10 = var4.setExperimentFlag;
                            var6 = _closure1_slot51;
                            var6 = var6.PTT_BEFORE_PROCESSING;
                            var6 = var10.bind(var4)(var6, var7);
                        case 725:
                            if (!var3) {
                                _fun29975_ip = 750;
                                continue _fun29975
                            }
                        case 728:
                            var6 = var4.setExperimentFlag;
                            var3 = _closure1_slot51;
                            var3 = var3.SKIP_ENCODE;
                            var3 = var6.bind(var4)(var3, var7);
                        case 750:
                            var6 = _closure1_slot0;
                            var10 = _closure1_slot3;
                            var3 = 53;
                            var3 = var10[var3];
                            var10 = var6.bind(var0)(var3);
                            var6 = var10.getLowLatencyRateControlExperimentConfig;
                            var3 = {};
                            var3.location = var5;
                            var3 = var6.bind(var10)(var3);
                            var3 = var3.enabled;
                            if (!var3) {
                                _fun29975_ip = 817;
                                continue _fun29975
                            }
                        case 795:
                            var6 = var4.setExperimentFlag;
                            var3 = _closure1_slot51;
                            var3 = var3.LOW_LATENCY_RATE_CONTROL;
                            var3 = var6.bind(var4)(var3, var7);
                        case 817:
                            var6 = var4.setExperimentFlag;
                            var3 = _closure1_slot51;
                            var3 = var3.RESET_DECODER_ON_ERRORS;
                            var3 = var6.bind(var4)(var3, var7);
                            var6 = var4.setExperimentFlag;
                            var3 = _closure1_slot51;
                            var3 = var3.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS;
                            var3 = var6.bind(var4)(var3, var7);
                            var6 = var4.setMinimumJitterBufferLevel;
                            var3 = 80;
                            var3 = var6.bind(var4)(var3);
                            var6 = var4.context;
                            var3 = _closure1_slot52;
                            var3 = var3.STREAM;
                            if (!(var6 === var3)) {
                                _fun29975_ip = 976;
                                continue _fun29975
                            }
                        case 896:
                            var6 = _closure1_slot163;
                            var3 = _closure1_slot82;
                            var6 = var6.bind(var0)(var3);
                            var3 = var4.setSoundshareDiscardRearChannels;
                            var3 = var3.bind(var4)(var6);
                            var6 = _closure1_slot1;
                            var10 = _closure1_slot3;
                            var3 = 54;
                            var3 = var10[var3];
                            var6 = var6.bind(var0)(var3);
                            var3 = var6.getConfig;
                            var3 = var3.bind(var6)();
                            var10 = var3.simulcastEnabled;
                            var6 = var3.lqStreamBitrate;
                            var3 = var4.configureGoLiveSimulcast;
                            var3 = var3.bind(var4)(var10, var6);
                        case 976:
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var3 = var3[var9];
                            var6 = var6.bind(var0)(var3);
                            var3 = var6.isWindows;
                            var3 = var3.bind(var6)();
                            if (var3) {
                                _fun29975_ip = 1323;
                                continue _fun29975
                            }
                        case 1009:
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var3 = var3[var9];
                            var6 = var6.bind(var0)(var3);
                            var3 = var6.isMac;
                            var3 = var3.bind(var6)();
                            if (var3) {
                                _fun29975_ip = 1232;
                                continue _fun29975
                            }
                        case 1042:
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var3 = var3[var9];
                            var6 = var6.bind(var0)(var3);
                            var3 = var6.isLinux;
                            var3 = var3.bind(var6)();
                            if (var3) {
                                _fun29975_ip = 1205;
                                continue _fun29975
                            }
                        case 1075:
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var3 = var3[var9];
                            var6 = var6.bind(var0)(var3);
                            var3 = var6.isIOS;
                            var3 = var3.bind(var6)();
                            if (!var3) {
                                _fun29975_ip = 1367;
                                continue _fun29975
                            }
                        case 1108:
                            var6 = _closure1_slot0;
                            var10 = _closure1_slot3;
                            var3 = 56;
                            var3 = var10[var3];
                            var10 = var6.bind(var0)(var3);
                            var6 = var10.getAV1DecodeExperimentIOSConfig;
                            var3 = 'MediaEngineStore';
                            var3 = var6.bind(var10)(var3);
                            var3 = var3.enabled;
                            if (!var3) {
                                _fun29975_ip = 1367;
                                continue _fun29975
                            }
                        case 1156:
                            var6 = var4.setExperimentFlag;
                            var3 = _closure1_slot51;
                            var3 = var3.SIGNAL_AV1_DECODE;
                            var3 = var6.bind(var4)(var3, var7);
                            var6 = var4.setExperimentFlag;
                            var3 = _closure1_slot51;
                            var3 = var3.SIGNAL_AV1_HARDWARE_DECODE;
                            var3 = var6.bind(var4)(var3, var7);
                            _fun29975_ip = 1367;
                            continue _fun29975;
                        case 1205:
                            var6 = var4.setExperimentFlag;
                            var3 = _closure1_slot51;
                            var3 = var3.SIGNAL_AV1_DECODE;
                            var3 = var6.bind(var4)(var3, var7);
                            _fun29975_ip = 1367;
                            continue _fun29975;
                        case 1232:
                            var6 = var4.setExperimentFlag;
                            var3 = _closure1_slot51;
                            var3 = var3.SIGNAL_AV1_DECODE;
                            var3 = var6.bind(var4)(var3, var7);
                            var6 = _closure1_slot0;
                            var10 = _closure1_slot3;
                            var3 = 55;
                            var3 = var10[var3];
                            var10 = var6.bind(var0)(var3);
                            var6 = var10.getAV1DecodeExperimentMacConfig;
                            var3 = 'MediaEngineStore';
                            var3 = var6.bind(var10)(var3);
                            var3 = var3.enabled;
                            if (!var3) {
                                _fun29975_ip = 1367;
                                continue _fun29975
                            }
                        case 1299:
                            var6 = var4.setExperimentFlag;
                            var3 = _closure1_slot51;
                            var3 = var3.SIGNAL_AV1_HARDWARE_DECODE;
                            var3 = var6.bind(var4)(var3, var7);
                            _fun29975_ip = 1367;
                            continue _fun29975;
                        case 1323:
                            var6 = var4.setExperimentFlag;
                            var3 = _closure1_slot51;
                            var3 = var3.SIGNAL_AV1;
                            var3 = var6.bind(var4)(var3, var7);
                            var6 = var4.setExperimentFlag;
                            var3 = _closure1_slot51;
                            var3 = var3.SIGNAL_AV1_HARDWARE_DECODE;
                            var3 = var6.bind(var4)(var3, var7);
                        case 1367:
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var3 = var3[var9];
                            var6 = var6.bind(var0)(var3);
                            var3 = var6.isWeb;
                            var3 = var3.bind(var6)();
                            if (!var3) {
                                _fun29975_ip = 1461;
                                continue _fun29975
                            }
                        case 1397:
                            var6 = _closure1_slot0;
                            var10 = _closure1_slot3;
                            var3 = 57;
                            var3 = var10[var3];
                            var10 = var6.bind(var0)(var3);
                            var6 = var10.getBrowserHevcExperimentConfig;
                            var3 = 'MediaEngineStore';
                            var3 = var6.bind(var10)(var3);
                            var10 = var3.enabled;
                            var6 = var4.setExperimentFlag;
                            var3 = _closure1_slot51;
                            var3 = var3.BROWSER_HEVC;
                            var3 = var6.bind(var4)(var3, var10);
                        case 1461:
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var3 = var3[var9];
                            var6 = var6.bind(var0)(var3);
                            var3 = var6.isWindows;
                            var3 = var3.bind(var6)();
                            var11 = undefined;
                            if (!var3) {
                                _fun29975_ip = 1504;
                                continue _fun29975
                            }
                        case 1493:
                            var6 = _closure1_slot126;
                            var3 = var8 != var6;
                            var11 = var6;
                        case 1504:
                            if (!var3) {
                                _fun29975_ip = 1522;
                                continue _fun29975
                            }
                        case 1507:
                            var10 = var11.startsWith;
                            var6 = 'AMD';
                            var3 = var10.bind(var11)(var6);
                        case 1522:
                            if (!var3) {
                                _fun29975_ip = 1567;
                                continue _fun29975
                            }
                        case 1525:
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot3;
                            var6 = 58;
                            var6 = var11[var6];
                            var11 = var10.bind(var0)(var6);
                            var10 = var11.getWmfGpuEncode;
                            var6 = 'MediaEngineStore';
                            var6 = var10.bind(var11)(var6);
                            var3 = var6.enabled;
                        case 1567:
                            if (!var3) {
                                _fun29975_ip = 1592;
                                continue _fun29975
                            }
                        case 1570:
                            var6 = var4.setExperimentFlag;
                            var3 = _closure1_slot51;
                            var3 = var3.WMF_GPU_ENCODE;
                            var3 = var6.bind(var4)(var3, var7);
                        case 1592:
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var3 = var3[var9];
                            var6 = var6.bind(var0)(var3);
                            var3 = var6.isWindows;
                            var3 = var3.bind(var6)();
                            var11 = undefined;
                            if (!var3) {
                                _fun29975_ip = 1635;
                                continue _fun29975
                            }
                        case 1624:
                            var6 = _closure1_slot126;
                            var3 = var8 != var6;
                            var11 = var6;
                        case 1635:
                            if (!var3) {
                                _fun29975_ip = 1655;
                                continue _fun29975
                            }
                        case 1638:
                            var10 = var11.startsWith;
                            var6 = 'Intel';
                            var3 = var10.bind(var11)(var6);
                        case 1655:
                            if (!var3) {
                                _fun29975_ip = 1700;
                                continue _fun29975
                            }
                        case 1658:
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot3;
                            var6 = 59;
                            var6 = var11[var6];
                            var11 = var10.bind(var0)(var6);
                            var10 = var11.getWmfGpuEncodeIntel;
                            var6 = 'MediaEngineStore';
                            var6 = var10.bind(var11)(var6);
                            var3 = var6.enabled;
                        case 1700:
                            if (!var3) {
                                _fun29975_ip = 1725;
                                continue _fun29975
                            }
                        case 1703:
                            var6 = var4.setExperimentFlag;
                            var3 = _closure1_slot51;
                            var3 = var3.WMF_GPU_ENCODE;
                            var3 = var6.bind(var4)(var3, var7);
                        case 1725:
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var3 = var3[var9];
                            var6 = var6.bind(var0)(var3);
                            var3 = var6.isWindows;
                            var3 = var3.bind(var6)();
                            var9 = undefined;
                            if (!var3) {
                                _fun29975_ip = 1768;
                                continue _fun29975
                            }
                        case 1757:
                            var6 = _closure1_slot126;
                            var3 = var8 != var6;
                            var9 = var6;
                        case 1768:
                            if (!var3) {
                                _fun29975_ip = 1788;
                                continue _fun29975
                            }
                        case 1771:
                            var8 = var9.startsWith;
                            var6 = 'Qualcomm';
                            var3 = var8.bind(var9)(var6);
                        case 1788:
                            if (!var3) {
                                _fun29975_ip = 1833;
                                continue _fun29975
                            }
                        case 1791:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot3;
                            var6 = 58;
                            var6 = var9[var6];
                            var9 = var8.bind(var0)(var6);
                            var8 = var9.getWmfGpuEncode;
                            var6 = 'MediaEngineStore';
                            var6 = var8.bind(var9)(var6);
                            var3 = var6.enabled;
                        case 1833:
                            if (!var3) {
                                _fun29975_ip = 1858;
                                continue _fun29975
                            }
                        case 1836:
                            var6 = var4.setExperimentFlag;
                            var3 = _closure1_slot51;
                            var3 = var3.WMF_GPU_ENCODE;
                            var3 = var6.bind(var4)(var3, var7);
                        case 1858:
                            var9 = _closure1_slot71;
                            var8 = var9.setHasFullbandPerformance;
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot3;
                            var3 = 60;
                            var3 = var7[var3];
                            var3 = var6.bind(var0)(var3);
                            var3 = var3.bind(var0)();
                            var3 = var8.bind(var9)(var3);
                            var8 = var4.setRemoteAudioHistory;
                            var3 = 1000;
                            var3 = var8.bind(var4)(var3);
                            var3 = 61;
                            var3 = var7[var3];
                            var6 = var6.bind(var0)(var3);
                            var3 = _closure1_slot69;
                            var3 = var6.bind(var0)(var3);
                            if (!var3) {
                                _fun29975_ip = 2029;
                                continue _fun29975
                            }
                        case 1940:
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot3;
                            var3 = 62;
                            var3 = var7[var3];
                            var8 = var6.bind(var0)(var3);
                            var7 = var8.getCurrentConfig;
                            var6 = {};
                            var3 = 'f627ab_15';
                            var6.location = var3;
                            var3 = {};
                            var9 = false;
                            var3.autoTrackExposure = var9;
                            var3 = var7.bind(var8)(var6, var3);
                            var6 = var3.enableViewerClipping;
                            var3 = var4.setViewerSideClip;
                            var3 = var3.bind(var4)(var6);
                            var6 = var4.setClipsKeyFrameInterval;
                            var3 = _closure1_slot57;
                            var3 = var6.bind(var4)(var3);
                        case 2029:
                            var6 = _closure1_slot141;
                            var3 = var4.context;
                            var8 = var6.bind(var0)(var3);
                            var6 = var4.setPostponeDecodeLevel;
                            var3 = 100;
                            var3 = var6.bind(var4)(var3);
                            var3 = global;
                            var9 = var3.Object;
                            var7 = var9.keys;
                            var6 = var8.localMutes;
                            var10 = var7.bind(var9)(var6);
                            var6 = var10.length;
                            var7 = 0;
                            var6 = var7 < var6;
                            var9 = 0;
                            if (!var6) {
                                _fun29975_ip = 2155;
                                continue _fun29975
                            }
                        case 2099:
                            var12 = var10[var9];
                            var11 = _closure1_slot17;
                            var6 = var11.getId;
                            var6 = var6.bind(var11)();
                            if (!(var12 !== var6)) {
                                _fun29975_ip = 2143;
                                continue _fun29975
                            }
                        case 2121:
                            var11 = var4.setLocalMute;
                            var6 = var8.localMutes;
                            var6 = var6[var12];
                            var6 = var11.bind(var4)(var12, var6);
                        case 2143:
                            var9 = var9 + 1;
                            var6 = var10.length;
                            if (var9 < var6) {
                                _fun29975_ip = 2099;
                                continue _fun29975
                            }
                        case 2155:
                            var10 = var3.Object;
                            var9 = var10.keys;
                            var6 = var8.localVolumes;
                            var10 = var9.bind(var10)(var6);
                            var6 = var10.length;
                            var6 = var7 < var6;
                            var9 = 0;
                            if (!var6) {
                                _fun29975_ip = 2247;
                                continue _fun29975
                            }
                        case 2191:
                            var12 = var10[var9];
                            var11 = _closure1_slot17;
                            var6 = var11.getId;
                            var6 = var6.bind(var11)();
                            if (!(var12 !== var6)) {
                                _fun29975_ip = 2235;
                                continue _fun29975
                            }
                        case 2213:
                            var11 = var4.setLocalVolume;
                            var6 = var8.localVolumes;
                            var6 = var6[var12];
                            var6 = var11.bind(var4)(var12, var6);
                        case 2235:
                            var9 = var9 + 1;
                            var6 = var10.length;
                            if (var9 < var6) {
                                _fun29975_ip = 2191;
                                continue _fun29975
                            }
                        case 2247:
                            var10 = var3.Object;
                            var9 = var10.keys;
                            var6 = var8.localPans;
                            var10 = var9.bind(var10)(var6);
                            var6 = var10.length;
                            var6 = var7 < var6;
                            var9 = 0;
                            if (!var6) {
                                _fun29975_ip = 2332;
                                continue _fun29975
                            }
                        case 2283:
                            var13 = var10[var9];
                            var6 = var8.localPans;
                            var6 = var6[var13];
                            var12 = var4.setLocalPan;
                            var11 = var6.left;
                            var6 = var6.right;
                            var6 = var12.bind(var4)(var13, var11, var6);
                            var9 = var9 + 1;
                            var6 = var10.length;
                            if (var9 < var6) {
                                _fun29975_ip = 2283;
                                continue _fun29975
                            }
                        case 2332:
                            var9 = var3.Object;
                            var6 = var9.keys;
                            var3 = var8.disabledLocalVideos;
                            var6 = var6.bind(var9)(var3);
                            var3 = var6.length;
                            var3 = var7 < var3;
                            var7 = 0;
                            if (!var3) {
                                _fun29975_ip = 2406;
                                continue _fun29975
                            }
                        case 2368:
                            var10 = var6[var7];
                            var9 = var4.setLocalVideoDisabled;
                            var3 = var8.disabledLocalVideos;
                            var3 = var3[var10];
                            var3 = var9.bind(var4)(var10, var3);
                            var7 = var7 + 1;
                            var3 = var6.length;
                            if (var7 < var3) {
                                _fun29975_ip = 2368;
                                continue _fun29975
                            }
                        case 2406:
                            var7 = var4.on;
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var8 = 31;
                            var3 = var3[var8];
                            var3 = var6.bind(var0)(var3);
                            var3 = var3.BaseConnectionEvent;
                            var6 = var3.Speaking;
                            var3 = function(arg0, arg1, arg2, arg3) { // Environment: var2
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot3;
                                var0 = 63;
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
                            var3 = var7.bind(var4)(var6, var3);
                            var6 = var4.context;
                            var3 = _closure1_slot52;
                            var3 = var3.DEFAULT;
                            if (!(var6 === var3)) {
                                _fun29975_ip = 2530;
                                continue _fun29975
                            }
                        case 2474:
                            var3 = false;
                            _closure1_slot93 = var3;
                            _closure1_slot94 = var3;
                            var7 = var4.on;
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var3 = var3[var8];
                            var3 = var6.bind(var0)(var3);
                            var3 = var3.BaseConnectionEvent;
                            var6 = var3.SpeakingWhileMuted;
                            var3 = function() { // Environment: var2
                                var1 = true;
                                _closure1_slot93 = var1;
                                _closure1_slot94 = var1;
                                var2 = _closure1_slot69;
                                var1 = var2.emitChange;
                                var1 = var1.bind(var2)();
                                var2 = _closure1_slot95;
                                var1 = var2.stop;
                                var1 = var1.bind(var2)();
                                var3 = _closure1_slot95;
                                var2 = var3.start;
                                var1 = _closure1_slot64;
                                var0 = function() { // Environment: var0
                                    var1 = false;
                                    _closure1_slot94 = var1;
                                    var1 = _closure1_slot69;
                                    var0 = var1.emitChange;
                                    var0 = var0.bind(var1)();
                                    var0 = undefined;
                                    return var0;
                                };
                                var0 = var2.bind(var3)(var1, var0);
                                var0 = undefined;
                                return var0;
                            };
                            var3 = var7.bind(var4)(var6, var3);
                        case 2530:
                            var10 = var4.on;
                            var7 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var6 = var3[var8];
                            var6 = var7.bind(var0)(var6);
                            var6 = var6.BaseConnectionEvent;
                            var9 = var6.DesktopSourceEnd;
                            var6 = function(arg0, arg1) { // Environment: var2
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot3;
                                var0 = 63;
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
                            var6 = var10.bind(var4)(var9, var6);
                            var10 = var4.on;
                            var6 = var3[var8];
                            var6 = var7.bind(var0)(var6);
                            var6 = var6.BaseConnectionEvent;
                            var9 = var6.InteractionRequired;
                            var6 = function(arg0) { // Environment: var2
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot3;
                                var0 = 63;
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
                            var6 = var10.bind(var4)(var9, var6);
                            var10 = var4.on;
                            var6 = var3[var8];
                            var6 = var7.bind(var0)(var6);
                            var6 = var6.BaseConnectionEvent;
                            var9 = var6.VideoHookInitialize;
                            var6 = function(arg0, arg1, arg2, arg3, arg4, arg5) { // Environment: var2
                                _fun29982: for (var _fun29982_ip = 0;;) switch (_fun29982_ip) {
                                    case 0:
                                        var2 = _closure1_slot73;
                                        var5 = null;
                                        var3 = var5 == var2;
                                        var0 = undefined;
                                        var1 = undefined;
                                        if (var3) {
                                            _fun29982_ip = 26;
                                            continue _fun29982
                                        }
                                    case 20:
                                        var1 = var2.desktopSource;
                                    case 26:
                                        if (!(var5 != var1)) {
                                            _fun29982_ip = 168;
                                            continue _fun29982
                                        }
                                    case 33:
                                        var8 = _closure1_slot1;
                                        var9 = _closure1_slot3;
                                        var1 = 48;
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
                                        var6 = 64;
                                        var6 = var9[var6];
                                        var6 = var8.bind(var0)(var6);
                                        var7 = _closure1_slot73;
                                        var8 = var5 == var7;
                                        var5 = undefined;
                                        if (var8) {
                                            _fun29982_ip = 150;
                                            continue _fun29982
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
                            var6 = var10.bind(var4)(var9, var6);
                            var10 = var4.on;
                            var6 = var3[var8];
                            var6 = var7.bind(var0)(var6);
                            var6 = var6.BaseConnectionEvent;
                            var9 = var6.NoiseCancellationError;
                            var6 = function(arg0) { // Environment: var2
                                var4 = arg0;
                                var3 = _closure1_slot60;
                                var2 = var3.warn;
                                var0 = global;
                                var0 = var0.HermesInternal;
                                var5 = var0.concat;
                                var0 = 'noisecancellererror event: ';
                                var0 = var5.bind(var0)(var4);
                                var0 = var2.bind(var3)(var0);
                                var8 = _closure1_slot0;
                                var3 = _closure1_slot3;
                                var7 = 45;
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
                                var7 = _closure1_slot146;
                                var7 = var7.bind(var0)(var4);
                                var2.underlyingError = var7;
                                var2 = var5.bind(var6)(var2);
                                var2 = true;
                                _closure1_slot114 = var2;
                                var2 = _closure1_slot1;
                                var5 = 48;
                                var5 = var3[var5];
                                var7 = var2.bind(var0)(var5);
                                var6 = var7.track;
                                var1 = _closure1_slot25;
                                var5 = var1.VOICE_PROCESSING;
                                var1 = {};
                                var1.noise_canceller_error = var4;
                                var1 = var6.bind(var7)(var5, var1);
                                var1 = 63;
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
                            var6 = var10.bind(var4)(var9, var6);
                            var10 = var4.on;
                            var6 = var3[var8];
                            var6 = var7.bind(var0)(var6);
                            var6 = var6.BaseConnectionEvent;
                            var9 = var6.VoiceActivityDetectorError;
                            var6 = function(arg0) { // Environment: var2
                                var4 = arg0;
                                var2 = _closure1_slot60;
                                var1 = var2.warn;
                                var0 = global;
                                var0 = var0.HermesInternal;
                                var3 = var0.concat;
                                var0 = 'voiceactivitydetectorerror event: ';
                                var0 = var3.bind(var0)(var4);
                                var0 = var1.bind(var2)(var0);
                                var7 = _closure1_slot0;
                                var3 = _closure1_slot3;
                                var6 = 45;
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
                                var6 = _closure1_slot146;
                                var6 = var6.bind(var0)(var4);
                                var1.underlyingError = var6;
                                var1 = var2.bind(var5)(var1);
                                var2 = _closure1_slot1;
                                var1 = 48;
                                var1 = var3[var1];
                                var7 = var2.bind(var0)(var1);
                                var6 = var7.track;
                                var1 = _closure1_slot25;
                                var5 = var1.VOICE_PROCESSING;
                                var1 = {};
                                var1.noise_canceller_error = var4;
                                var1 = var6.bind(var7)(var5, var1);
                                var1 = 63;
                                var5 = var3[var1];
                                var7 = var2.bind(var0)(var5);
                                var6 = var7.dispatch;
                                var5 = {};
                                var8 = 'AUDIO_SET_MODE';
                                var5.type = var8;
                                var8 = _closure1_slot52;
                                var8 = var8.DEFAULT;
                                var5.context = var8;
                                var8 = _closure1_slot27;
                                var8 = var8.VOICE_ACTIVITY;
                                var5.mode = var8;
                                var8 = {};
                                var10 = _closure1_slot141;
                                var9 = _closure1_slot52;
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
                            var6 = var10.bind(var4)(var9, var6);
                            var10 = var4.on;
                            var6 = var3[var8];
                            var6 = var7.bind(var0)(var6);
                            var6 = var6.BaseConnectionEvent;
                            var9 = var6.SdpError;
                            var6 = function(arg0, arg1, arg2, arg3) { // Environment: var2
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot3;
                                var0 = 48;
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
                            var6 = var10.bind(var4)(var9, var6);
                            var6 = var4.on;
                            var3 = var3[var8];
                            var3 = var7.bind(var0)(var3);
                            var3 = var3.BaseConnectionEvent;
                            var3 = var3.VideoState;
                            var2 = function(arg0) { // Environment: var2
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot3;
                                var0 = 63;
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
                            var2 = var6.bind(var4)(var3, var2);
                            var3 = var4.setBitRate;
                            var2 = _closure1_slot18;
                            var2 = var2.bitrate;
                            var2 = var3.bind(var4)(var2);
                            var3 = var4.applyVideoQualityMode;
                            var2 = _closure1_slot24;
                            var2 = var2.mode;
                            var2 = var3.bind(var4)(var2);
                            var4 = _closure1_slot71;
                            var3 = var4.supports;
                            var2 = _closure1_slot46;
                            var2 = var2.ASYNC_VIDEO_INPUT_DEVICE_INIT;
                            var2 = var3.bind(var4)(var2);
                            if (!var2) {
                                _fun29975_ip = 2924;
                                continue _fun29975
                            }
                        case 2873:
                            var3 = _closure1_slot71;
                            var2 = var3.setAsyncVideoInputDeviceInit;
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var1 = 65;
                            var1 = var6[var1];
                            var4 = var4.bind(var0)(var1);
                            var1 = var4.getAsyncCameraInitExperimentConfig;
                            var1 = var1.bind(var4)(var5);
                            var1 = var1.enabled;
                            var1 = var2.bind(var3)(var1);
                        case 2924:
                            return var0;
                    }
                };
                var5 = var8.bind(var9)(var7, var5);
                var9 = _closure1_slot71;
                var8 = var9.on;
                var5 = var3[var6];
                var5 = var4.bind(var0)(var5);
                var5 = var5.MediaEngineEvent;
                var7 = var5.DeviceChange;
                var5 = function(arg0, arg1, arg2) { // Environment: var1
                    var2 = _closure1_slot84;
                    var1 = var2.stop;
                    var1 = var1.bind(var2)();
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 63;
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
                var9 = _closure1_slot71;
                var8 = var9.on;
                var5 = var3[var6];
                var5 = var4.bind(var0)(var5);
                var5 = var5.MediaEngineEvent;
                var7 = var5.VolumeChange;
                var5 = function(arg0, arg1) { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 63;
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
                var9 = _closure1_slot71;
                var8 = var9.on;
                var5 = var3[var6];
                var5 = var4.bind(var0)(var5);
                var5 = var5.MediaEngineEvent;
                var7 = var5.DesktopSourceEnd;
                var5 = function(arg0, arg1) { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 63;
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
                var9 = _closure1_slot71;
                var8 = var9.on;
                var5 = var3[var6];
                var5 = var4.bind(var0)(var5);
                var5 = var5.MediaEngineEvent;
                var7 = var5.AudioPermission;
                var5 = function(arg0) { // Environment: var1
                    var1 = true;
                    _closure1_slot120 = var1;
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 63;
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
                var9 = _closure1_slot71;
                var8 = var9.on;
                var5 = var3[var6];
                var5 = var4.bind(var0)(var5);
                var5 = var5.MediaEngineEvent;
                var7 = var5.VideoPermission;
                var5 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 63;
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
                var9 = _closure1_slot71;
                var8 = var9.on;
                var5 = var3[var6];
                var5 = var4.bind(var0)(var5);
                var5 = var5.MediaEngineEvent;
                var7 = var5.WatchdogTimeout;
                var10 = _closure1_slot10;
                var5 = function*() { // Environment: var1
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun29993: for (var _fun29993_ip = 0;;) switch (_fun29993_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun29993_ip = 219;
                                    continue _fun29993
                                }
                            case 10:
                                var1 = undefined;
                                var6 = undefined;
                            case 14: // try_start_0
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot3;
                                var3 = 66;
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
                                    _fun29993_ip = 78;
                                    continue _fun29993
                                }
                            case 76: // try_end0
                                _fun29993_ip = 107;
                                continue _fun29993;
                            case 78:
                                return var3;
                            case 81: // catch_target0
                                CatchBlockStart(arg_register = 3);
                                var2 = var3;
                                var3 = var3.status;
                                var4 = 'number';
                                var3 = typeof var3;
                                if (!(var4 === var3)) {
                                    _fun29993_ip = 107;
                                    continue _fun29993
                                }
                            case 102:
                                var6 = var2.status;
                            case 107:
                                var5 = _closure1_slot60;
                                var4 = var5.warn;
                                var7 = var6;
                                var3 = null;
                                var3 = var3 != var7;
                                var8 = 200;
                                if (!var3) {
                                    _fun29993_ip = 137;
                                    continue _fun29993
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
                                var3 = 48;
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
                var9 = _closure1_slot71;
                var8 = var9.on;
                var5 = var3[var6];
                var5 = var4.bind(var0)(var5);
                var5 = var5.MediaEngineEvent;
                var7 = var5.VideoInputInitialized;
                var5 = function(arg0) { // Environment: var1
                    _fun29994: for (var _fun29994_ip = 0;;) switch (_fun29994_ip) {
                        case 0:
                            var6 = arg0;
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 48;
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
                                _fun29994_ip = 131;
                                continue _fun29994
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
                var9 = _closure1_slot71;
                var8 = var9.on;
                var5 = var3[var6];
                var5 = var4.bind(var0)(var5);
                var5 = var5.MediaEngineEvent;
                var7 = var5.AudioInputInitialized;
                var5 = function(arg0) { // Environment: var1
                    var6 = arg0;
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var0 = 48;
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
                var9 = _closure1_slot71;
                var8 = var9.on;
                var5 = var3[var6];
                var5 = var4.bind(var0)(var5);
                var5 = var5.MediaEngineEvent;
                var7 = var5.ClipsRecordingRestartNeeded;
                var5 = function() { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 63;
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
                var9 = _closure1_slot71;
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
                    var0 = 63;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.wait;
                    var1 = function() { // Environment: var1
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var0 = 63;
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
                var9 = _closure1_slot71;
                var8 = var9.on;
                var5 = var3[var6];
                var5 = var4.bind(var0)(var5);
                var5 = var5.MediaEngineEvent;
                var7 = var5.ClipsRecordingEnded;
                var5 = function(arg0, arg1) { // Environment: var1
                    _fun29999: for (var _fun29999_ip = 0;;) switch (_fun29999_ip) {
                        case 0:
                            var5 = arg1;
                            var3 = _closure1_slot74;
                            var1 = null;
                            var6 = var1 == var3;
                            var0 = undefined;
                            var4 = undefined;
                            if (var6) {
                                _fun29999_ip = 43;
                                continue _fun29999
                            }
                        case 23:
                            var3 = var3.desktopSource;
                            var6 = var1 == var3;
                            var4 = undefined;
                            if (var6) {
                                _fun29999_ip = 43;
                                continue _fun29999
                            }
                        case 38:
                            var4 = var3.id;
                        case 43:
                            var3 = arg0;
                            if (!(var4 === var3)) {
                                _fun29999_ip = 133;
                                continue _fun29999
                            }
                        case 50:
                            var3 = var1 != var5;
                            if (!var3) {
                                _fun29999_ip = 95;
                                continue _fun29999
                            }
                        case 57:
                            var6 = _closure1_slot73;
                            var7 = var1 == var6;
                            var4 = undefined;
                            if (var7) {
                                _fun29999_ip = 91;
                                continue _fun29999
                            }
                        case 70:
                            var6 = var6.desktopSource;
                            var7 = var1 == var6;
                            var4 = undefined;
                            if (var7) {
                                _fun29999_ip = 91;
                                continue _fun29999
                            }
                        case 85:
                            var4 = var6.soundshareId;
                        case 91:
                            var3 = var4 !== var5;
                        case 95:
                            if (!var3) {
                                _fun29999_ip = 129;
                                continue _fun29999
                            }
                        case 98:
                            var4 = _closure1_slot2;
                            var6 = _closure1_slot3;
                            var3 = 42;
                            var3 = var6[var3];
                            var4 = var4.bind(var0)(var3);
                            var3 = var4.cancelAttachToProcess;
                            var3 = var3.bind(var4)(var5);
                        case 129:
                            var _closure1_slot74 = var1;
                        case 133:
                            return var0;
                    }
                };
                var5 = var8.bind(var9)(var7, var5);
                var9 = _closure1_slot71;
                var8 = var9.on;
                var5 = var3[var6];
                var5 = var4.bind(var0)(var5);
                var5 = var5.MediaEngineEvent;
                var7 = var5.NativeScreenSharePickerUpdate;
                var5 = function(arg0, arg1) { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 63;
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
                var9 = _closure1_slot71;
                var8 = var9.on;
                var5 = var3[var6];
                var5 = var4.bind(var0)(var5);
                var5 = var5.MediaEngineEvent;
                var7 = var5.NativeScreenSharePickerCancel;
                var5 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 63;
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
                var9 = _closure1_slot71;
                var8 = var9.on;
                var5 = var3[var6];
                var5 = var4.bind(var0)(var5);
                var5 = var5.MediaEngineEvent;
                var7 = var5.NativeScreenSharePickerError;
                var5 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 63;
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
                var9 = _closure1_slot71;
                var8 = var9.on;
                var5 = var3[var6];
                var5 = var4.bind(var0)(var5);
                var5 = var5.MediaEngineEvent;
                var7 = var5.AudioDeviceModuleError;
                var5 = function(arg0, arg1, arg2) { // Environment: var1
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var0 = 48;
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
                var9 = _closure1_slot71;
                var8 = var9.on;
                var5 = var3[var6];
                var5 = var4.bind(var0)(var5);
                var5 = var5.MediaEngineEvent;
                var7 = var5.VideoCodecError;
                var5 = function(arg0) { // Environment: var1
                    _fun30004: for (var _fun30004_ip = 0;;) switch (_fun30004_ip) {
                        case 0:
                            var5 = arg0;
                            var1 = var5.mode;
                            var0 = 'encode';
                            if (!(var0 !== var1)) {
                                _fun30004_ip = 55;
                                continue _fun30004
                            }
                        case 16:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var0 = 45;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            var0 = var0.AVError;
                            var7 = var0.VIDEO_DECODE_ERROR;
                            _fun30004_ip = 92;
                            continue _fun30004;
                        case 55:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var0 = 45;
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
                            var1 = 45;
                            var2 = var8[var1];
                            var0 = undefined;
                            var3 = var4.bind(var0)(var2);
                            var2 = var3.reportAVError;
                            var1 = var8[var1];
                            var1 = var4.bind(var0)(var1);
                            var1 = var1.AVError;
                            var1 = var1.VIDEO_ENCODE_ERROR;
                            if (!(var7 !== var1)) {
                                _fun30004_ip = 208;
                                continue _fun30004
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
                            _fun30004_ip = 242;
                            continue _fun30004;
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
                var9 = _closure1_slot71;
                var8 = var9.on;
                var5 = var3[var6];
                var5 = var4.bind(var0)(var5);
                var5 = var5.MediaEngineEvent;
                var7 = var5.ConnectionStats;
                var5 = function(arg0) { // Environment: var1
                    var6 = arg0;
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 63;
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
                        var2 = _closure1_slot68;
                        var2 = parseFloat(var2);
                        var3 = var2 + 1;
                        _closure1_slot68 = var3;
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
                var7 = _closure1_slot71;
                var5 = var7.on;
                var3 = var3[var6];
                var3 = var4.bind(var0)(var3);
                var3 = var3.MediaEngineEvent;
                var4 = var3.VoiceQueueMetrics;
                var3 = function(arg0) { // Environment: var1
                    _fun30007: for (var _fun30007_ip = 0;;) switch (_fun30007_ip) {
                        case 0:
                            var3 = _closure1_slot179;
                            var0 = undefined;
                            var2 = arg0;
                            var4 = var3.bind(var0)(var2);
                            var2 = null;
                            if (!(var2 !== var4)) {
                                _fun30007_ip = 64;
                                continue _fun30007
                            }
                        case 23:
                            var3 = _closure1_slot1;
                            var5 = _closure1_slot3;
                            var2 = 48;
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
                var5 = _closure1_slot71;
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
                    var0 = 63;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.wait;
                    var1 = function() { // Environment: var1
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var0 = 63;
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
                var3 = _closure1_slot171;
                var3 = var3.bind(var0)();
                var3 = function() { // Original name: setGamescopeVaapiEnabled, environment: var1
                    var0 = undefined;
                    var3 = _closure1_slot173;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var3 = var3.bind(var0)();
                var5 = _closure1_slot71;
                var4 = var5.supports;
                var3 = _closure1_slot46;
                var3 = var3.ASYNC_CLIPS_SOURCE_DEINIT;
                var3 = var4.bind(var5)(var3);
                if (!var3) {
                    _fun29973_ip = 973;
                    continue _fun29973
                }
            case 916:
                var5 = _closure1_slot71;
                var4 = var5.setAsyncClipsSourceDeinit;
                var7 = _closure1_slot0;
                var8 = _closure1_slot3;
                var3 = 67;
                var3 = var8[var3];
                var8 = var7.bind(var0)(var3);
                var7 = var8.getAsyncClipsSourceDeinitExperimentConfig;
                var3 = 'setupMediaEngine';
                var3 = var7.bind(var8)(var3);
                var3 = var3.enabled;
                var3 = var4.bind(var5)(var3);
            case 973:
                var4 = _closure1_slot132;
                var3 = var4.reset;
                var3 = var3.bind(var4)();
                var3 = _closure1_slot22;
                var5 = var3.bind(var0)();
                var4 = var5.then;
                var3 = function(arg0) { // Environment: var1
                    _fun30011: for (var _fun30011_ip = 0;;) switch (_fun30011_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = null;
                            if (!(var1 != var0)) {
                                _fun30011_ip = 22;
                                continue _fun30011
                            }
                        case 9:
                            var1 = var0.gpu_brand;
                            _closure1_slot126 = var1;
                        case 22:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3 = var4.bind(var5)(var3);
                var4 = _closure1_slot71;
                var3 = var4.on;
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var6];
                var2 = var5.bind(var0)(var2);
                var2 = var2.MediaEngineEvent;
                var2 = var2.SystemMicrophoneModeChange;
                var1 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    _closure1_slot124 = var1;
                    var2 = _closure1_slot71;
                    var1 = var2.eachConnection;
                    var0 = _closure1_slot150;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var _closure1_slot151 = var0;
    var0 = function() { // Original name: supportsWindowsGraphicsCapture, environment: var4
        _fun30013: for (var _fun30013_ip = 0;;) switch (_fun30013_ip) {
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
                    _fun30013_ip = 126;
                    continue _fun30013
                }
            case 38:
                var5 = _closure1_slot1;
                var2 = _closure1_slot3;
                var3 = 68;
                var3 = var2[var3];
                var4 = var5.bind(var7)(var3);
                var3 = var4.satisfies;
                var8 = 69;
                var2 = var2[var8];
                var5 = var5.bind(var7)(var2);
                var2 = null;
                var5 = var2 == var5;
                var2 = undefined;
                if (var5) {
                    _fun30013_ip = 116;
                    continue _fun30013
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
    var _closure1_slot152 = var0;
    var0 = function() { // Original name: supportsScreenCaptureKit, environment: var4
        _fun30014: for (var _fun30014_ip = 0;;) switch (_fun30014_ip) {
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
                    _fun30014_ip = 63;
                    continue _fun30014
                }
            case 38:
                var4 = _closure1_slot71;
                var3 = var4.supports;
                var2 = _closure1_slot46;
                var2 = var2.SCREEN_CAPTURE_KIT;
                var0 = var3.bind(var4)(var2);
            case 63:
                if (!var0) {
                    _fun30014_ip = 154;
                    continue _fun30014
                }
            case 66:
                var5 = _closure1_slot1;
                var2 = _closure1_slot3;
                var3 = 68;
                var3 = var2[var3];
                var4 = var5.bind(var7)(var3);
                var3 = var4.satisfies;
                var8 = 69;
                var2 = var2[var8];
                var5 = var5.bind(var7)(var2);
                var2 = null;
                var5 = var2 == var5;
                var2 = undefined;
                if (var5) {
                    _fun30014_ip = 144;
                    continue _fun30014
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
    var _closure1_slot153 = var0;
    var0 = function() { // Original name: supportsAutomaticAudioSubsystem, environment: var4
        _fun30015: for (var _fun30015_ip = 0;;) switch (_fun30015_ip) {
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
                    _fun30015_ip = 63;
                    continue _fun30015
                }
            case 38:
                var4 = _closure1_slot71;
                var3 = var4.supports;
                var2 = _closure1_slot46;
                var2 = var2.AUTOMATIC_AUDIO_SUBSYSTEM;
                var0 = var3.bind(var4)(var2);
            case 63:
                if (!var0) {
                    _fun30015_ip = 91;
                    continue _fun30015
                }
            case 66:
                var3 = _closure1_slot71;
                var2 = var3.supports;
                var1 = _closure1_slot46;
                var1 = var1.AUDIO_SUBSYSTEM_DEFERRED_SWITCH;
                var0 = var2.bind(var3)(var1);
            case 91:
                return var0;
        }
    };
    var _closure1_slot154 = var0;
    var0 = function() { // Original name: isReadyToMigrateToSingleAdmOffering, environment: var4
        var2 = _closure1_slot71;
        var1 = var2.supports;
        var0 = _closure1_slot46;
        var0 = var0.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot155 = var0;
    var0 = function(arg0) { // Original name: mergeSettings, environment: var4
        _fun30017: for (var _fun30017_ip = 0;;) switch (_fun30017_ip) {
            case 0:
                var3 = arguments[1];
                var2 = arguments[2];
                var4 = undefined;
                if (!(var3 === var4)) {
                    _fun30017_ip = 25;
                    continue _fun30017
                }
            case 12:
                var0 = _closure1_slot52;
                var3 = var0.DEFAULT;
            case 25:
                if (!(var2 === var4)) {
                    _fun30017_ip = 31;
                    continue _fun30017
                }
            case 29:
                var2 = true;
            case 31:
                var0 = _closure1_slot140;
                var0 = var0.bind(var4)(var3);
                var3 = global;
                var6 = var3.Object;
                var5 = var6.assign;
                var3 = arg0;
                var3 = var5.bind(var6)(var0, var3);
                if (!var2) {
                    _fun30017_ip = 113;
                    continue _fun30017
                }
            case 68:
                var3 = _closure1_slot0;
                var5 = _closure1_slot3;
                var2 = 70;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var4 = var2.Storage;
                var3 = var4.set;
                var2 = _closure1_slot61;
                var1 = _closure1_slot75;
                var1 = var3.bind(var4)(var2, var1);
            case 113:
                return var0;
        }
    };
    var _closure1_slot156 = var0;
    var0 = function() { // Original name: applySettings, environment: var4
        var1 = _closure1_slot141;
        var0 = undefined;
        var1 = var1.bind(var0)();
        var5 = _closure1_slot71;
        var4 = var5.setAudioInputDevice;
        var3 = var1.inputDeviceId;
        var3 = var4.bind(var5)(var3);
        var5 = _closure1_slot71;
        var4 = var5.setAudioOutputDevice;
        var3 = var1.outputDeviceId;
        var3 = var4.bind(var5)(var3);
        var3 = _closure1_slot145;
        var3 = var3.bind(var0)();
        var5 = _closure1_slot71;
        var4 = var5.setInputVolume;
        var3 = var1.inputVolume;
        var3 = var4.bind(var5)(var3);
        var5 = _closure1_slot71;
        var4 = var5.setOutputVolume;
        var3 = var1.outputVolume;
        var3 = var4.bind(var5)(var3);
        var5 = _closure1_slot71;
        var4 = var5.setAecDump;
        var3 = var1.aecDumpEnabled;
        var3 = var4.bind(var5)(var3);
        var5 = _closure1_slot71;
        var4 = var5.setSidechainCompression;
        var3 = var1.sidechainCompression;
        var3 = var4.bind(var5)(var3);
        var5 = _closure1_slot71;
        var4 = var5.setSidechainCompressionStrength;
        var3 = var1.sidechainCompressionStrength;
        var3 = var4.bind(var5)(var3);
        var3 = _closure1_slot71;
        var2 = var3.setAudioInputBypassSystemProcessing;
        var1 = var1.bypassSystemInputProcessing;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot157 = var0;
    var0 = function() { // Original name: tryEnable, environment: var4
        _fun30019: for (var _fun30019_ip = 0;;) switch (_fun30019_ip) {
            case 0:
                var1 = _closure1_slot77;
                if (var1) {
                    _fun30019_ip = 41;
                    continue _fun30019
                }
            case 10:
                var1 = _closure1_slot71;
                var0 = var1.enable;
                var2 = var0.bind(var1)();
                var1 = var2.then;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 63;
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
    var _closure1_slot158 = var0;
    var18 = function(arg0) { // Original name: makeDisabledDevice, environment: var4
        var0 = {};
        var1 = _closure1_slot49;
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
    var _closure1_slot159 = var18;
    var0 = function(arg0, arg1) { // Original name: convertDevices, environment: var4
        _fun30022: for (var _fun30022_ip = 0;;) switch (_fun30022_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.length;
                var0 = 0;
                if (!(var0 !== var1)) {
                    _fun30022_ip = 87;
                    continue _fun30022
                }
            case 14:
                var3 = _closure1_slot1;
                var1 = _closure1_slot3;
                var0 = 40;
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
                var2 = _closure1_slot159;
                var1 = undefined;
                var0 = arg1;
                var2 = var2.bind(var1)(var0);
                var0 = {};
                var1 = var2.id;
                var0[var1] = var2;
                return var0;
        }
    };
    var _closure1_slot160 = var0;
    var0 = function(arg0, arg1) { // Original name: getDeviceId, environment: var4
        _fun30024: for (var _fun30024_ip = 0;;) switch (_fun30024_ip) {
            case 0:
                var5 = arg0;
                var0 = arg1;
                var1 = var5[var0];
                var2 = null;
                if (!(var2 == var1)) {
                    _fun30024_ip = 27;
                    continue _fun30024
                }
            case 16:
                var3 = _closure1_slot49;
                var1 = var5[var3];
            case 27:
                if (!(var2 == var1)) {
                    _fun30024_ip = 80;
                    continue _fun30024
                }
            case 31:
                var6 = _closure1_slot1;
                var4 = _closure1_slot3;
                var3 = 40;
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
                    _fun30024_ip = 89;
                    continue _fun30024
                }
            case 84:
                var0 = var1.id;
            case 89:
                return var0;
        }
    };
    var _closure1_slot161 = var0;
    var0 = function(arg0) { // Original name: setInputDevices, environment: var4
        _fun30025: for (var _fun30025_ip = 0;;) switch (_fun30025_ip) {
            case 0:
                var5 = _closure1_slot81;
                var6 = _closure1_slot160;
                var8 = _closure1_slot0;
                var4 = _closure1_slot3;
                var2 = 72;
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
                _closure1_slot81 = var2;
                var3 = _closure1_slot1;
                var2 = 40;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.isEqual;
                var2 = _closure1_slot81;
                var2 = var3.bind(var4)(var2, var5);
                if (var2) {
                    _fun30025_ip = 180;
                    continue _fun30025
                }
            case 118:
                var2 = _closure1_slot141;
                var2 = var2.bind(var0)();
                var4 = _closure1_slot161;
                var3 = _closure1_slot81;
                var2 = var2.inputDeviceId;
                var4 = var4.bind(var0)(var3, var2);
                var3 = _closure1_slot71;
                var2 = var3.setAudioInputDevice;
                var2 = var2.bind(var3)(var4);
                var3 = _closure1_slot71;
                var2 = var3.eachConnection;
                var1 = _closure1_slot150;
                var1 = var2.bind(var3)(var1);
            case 180:
                return var0;
        }
    };
    var _closure1_slot162 = var0;
    var0 = function(arg0) { // Original name: hasHapticsOverAudioOutputDevices, environment: var4
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
    var _closure1_slot163 = var0;
    var0 = function(arg0) { // Original name: setOutputDevices, environment: var4
        _fun30028: for (var _fun30028_ip = 0;;) switch (_fun30028_ip) {
            case 0:
                var1 = _closure1_slot82;
                var6 = _closure1_slot160;
                var8 = _closure1_slot0;
                var5 = _closure1_slot3;
                var3 = 72;
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
                _closure1_slot82 = var3;
                var4 = _closure1_slot1;
                var3 = 40;
                var3 = var5[var3];
                var5 = var4.bind(var0)(var3);
                var4 = var5.isEqual;
                var3 = _closure1_slot82;
                var3 = var4.bind(var5)(var3, var1);
                if (var3) {
                    _fun30028_ip = 195;
                    continue _fun30028
                }
            case 118:
                var3 = _closure1_slot141;
                var3 = var3.bind(var0)();
                var5 = _closure1_slot161;
                var4 = _closure1_slot82;
                var3 = var3.outputDeviceId;
                var5 = var5.bind(var0)(var4, var3);
                var4 = _closure1_slot71;
                var3 = var4.setAudioOutputDevice;
                var3 = var3.bind(var4)(var5);
                var3 = _closure1_slot163;
                var1 = var3.bind(var0)(var1);
                var2 = _closure1_slot82;
                var2 = var3.bind(var0)(var2);
                if (!(var1 !== var2)) {
                    _fun30028_ip = 195;
                    continue _fun30028
                }
            case 183:
                var1 = function(arg0) { // Original name: updateConnectionsDiscardRearChannels, environment: var1
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var2 = _closure1_slot71;
                    var1 = var2.eachConnection;
                    var0 = function(arg0) { // Environment: var0
                        _fun30030: for (var _fun30030_ip = 0;;) switch (_fun30030_ip) {
                            case 0:
                                var2 = arg0;
                                var1 = var2.context;
                                var0 = _closure1_slot52;
                                var0 = var0.STREAM;
                                if (!(var1 === var0)) {
                                    _fun30030_ip = 43;
                                    continue _fun30030
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
    var _closure1_slot164 = var0;
    var0 = function(arg0) { // Original name: setVideoDevices, environment: var4
        _fun30031: for (var _fun30031_ip = 0;;) switch (_fun30031_ip) {
            case 0:
                var4 = arg0;
                var1 = var4.length;
                var0 = 0;
                var0 = var1 > var0;
                _closure1_slot97 = var0;
                var5 = _closure1_slot83;
                var3 = _closure1_slot160;
                var8 = _closure1_slot0;
                var9 = _closure1_slot3;
                var2 = 72;
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
                _closure1_slot83 = var2;
                var2 = _closure1_slot89;
                if (!var2) {
                    _fun30031_ip = 217;
                    continue _fun30031
                }
            case 105:
                var3 = _closure1_slot1;
                var4 = _closure1_slot3;
                var2 = 40;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.isEqual;
                var2 = _closure1_slot83;
                var2 = var3.bind(var4)(var2, var5);
                if (var2) {
                    _fun30031_ip = 217;
                    continue _fun30031
                }
            case 144:
                var3 = _closure1_slot83;
                var2 = _closure1_slot90;
                var2 = var3[var2];
                var2 = var0 !== var2;
                var4 = _closure1_slot90;
                var3 = _closure1_slot49;
                var3 = var4 === var3;
                if (!var3) {
                    _fun30031_ip = 202;
                    continue _fun30031
                }
            case 175:
                var4 = _closure1_slot49;
                var5 = var5[var4];
                var4 = null;
                var6 = var4 == var5;
                var4 = undefined;
                if (var6) {
                    _fun30031_ip = 199;
                    continue _fun30031
                }
            case 194:
                var4 = var5.disabled;
            case 199:
                var3 = var4;
            case 202:
                var1 = _closure1_slot145;
                if (var2) {
                    _fun30031_ip = 212;
                    continue _fun30031
                }
            case 209:
                var2 = var3;
            case 212:
                var1 = var1.bind(var0)(var2);
            case 217:
                return var0;
        }
    };
    var _closure1_slot165 = var0;
    var0 = function() { // Original name: applyRemoteSettings, environment: var4
        _fun30032: for (var _fun30032_ip = 0;;) switch (_fun30032_ip) {
            case 0:
                var1 = arguments[0];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun30032_ip = 13;
                    continue _fun30032
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
                    _fun30032_ip = 68;
                    continue _fun30032
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
                var4 = function() { // Original name: _loop, environment: var5
                    _fun30033: for (var _fun30033_ip = 0;;) switch (_fun30033_ip) {
                        case 0:
                            var3 = _closure2_slot2;
                            var0 = _closure1_slot42;
                            var0 = var0.USER;
                            if (!(var3 !== var0)) {
                                _fun30033_ip = 38;
                                continue _fun30033
                            }
                        case 26:
                            var0 = _closure1_slot52;
                            var3 = var0.STREAM;
                            _fun30033_ip = 48;
                            continue _fun30033;
                        case 38:
                            var0 = _closure1_slot52;
                            var3 = var0.DEFAULT;
                        case 48:
                            var _closure3_slot0 = var3;
                            var0 = _closure1_slot52;
                            var0 = var0.STREAM;
                            if (!(var3 !== var0)) {
                                _fun30033_ip = 72;
                                continue _fun30033
                            }
                        case 66:
                            var0 = _closure1_slot47;
                            _fun30033_ip = 76;
                            continue _fun30033;
                        case 72:
                            var0 = _closure1_slot48;
                        case 76:
                            var _closure3_slot1 = var0;
                            var4 = _closure2_slot1;
                            var0 = _closure2_slot2;
                            var10 = var4[var0];
                            var0 = null;
                            if (!(var0 == var10)) {
                                _fun30033_ip = 100;
                                continue _fun30033
                            }
                        case 98:
                            var10 = {};
                        case 100:
                            var _closure3_slot2 = var10;
                            var4 = _closure1_slot141;
                            var0 = undefined;
                            var4 = var4.bind(var0)(var3);
                            var5 = var4.localMutes;
                            var _closure3_slot3 = var5;
                            var4 = var4.localVolumes;
                            var _closure3_slot4 = var4;
                            var14 = function(arg0, arg1) { // Original name: _loop2, environment: var2
                                _fun30034: for (var _fun30034_ip = 0;;) switch (_fun30034_ip) {
                                    case 0:
                                        var6 = arg0;
                                        var4 = arg1;
                                        var _closure4_slot0 = var6;
                                        var _closure4_slot1 = var4;
                                        var5 = _closure1_slot0;
                                        var2 = _closure1_slot3;
                                        var0 = 73;
                                        var2 = var2[var0];
                                        var0 = undefined;
                                        var8 = var5.bind(var0)(var2);
                                        var7 = var8.getPendingAudioSettings;
                                        var5 = _closure3_slot0;
                                        var7 = var7.bind(var8)(var5, var6);
                                        var5 = null;
                                        if (!(var5 == var7)) {
                                            _fun30034_ip = 156;
                                            continue _fun30034
                                        }
                                    case 66:
                                        var5 = var4.muted;
                                        var7 = _closure3_slot3;
                                        if (var5) {
                                            _fun30034_ip = 85;
                                            continue _fun30034
                                        }
                                    case 79:
                                        var5 = delete var7[var6];
                                        _fun30034_ip = 91;
                                        continue _fun30034;
                                    case 85:
                                        var5 = true;
                                        var7[var6] = var5;
                                    case 91:
                                        var7 = var4.volume;
                                        var5 = _closure3_slot1;
                                        if (!(var7 === var5)) {
                                            _fun30034_ip = 115;
                                            continue _fun30034
                                        }
                                    case 105:
                                        var5 = _closure3_slot4;
                                        var5 = delete var5[var6];
                                        _fun30034_ip = 129;
                                        continue _fun30034;
                                    case 115:
                                        var5 = _closure3_slot4;
                                        var4 = var4.volume;
                                        var5[var6] = var4;
                                    case 129:
                                        var4 = _closure1_slot71;
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
                                _fun30033_ip = 221;
                                continue _fun30033
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
                                _fun30033_ip = 181;
                                continue _fun30033
                            }
                        case 221:
                            var6 = _closure2_slot0;
                            if (!var6) {
                                _fun30033_ip = 363;
                                continue _fun30033
                            }
                        case 231:
                            var8 = function(arg0) { // Original name: _loop3, environment: var2
                                _fun30036: for (var _fun30036_ip = 0;;) switch (_fun30036_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var _closure4_slot0 = var3;
                                        var2 = _closure3_slot2;
                                        var4 = var2[var3];
                                        var2 = null;
                                        if (!(var2 == var4)) {
                                            _fun30036_ip = 74;
                                            continue _fun30036
                                        }
                                    case 26:
                                        var2 = _closure3_slot3;
                                        var2 = delete var2[var3];
                                        var2 = _closure3_slot4;
                                        var2 = delete var2[var3];
                                        var3 = _closure1_slot71;
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
                            var6 = _closure1_slot134;
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
                                _fun30033_ip = 363;
                                continue _fun30033
                            }
                        case 338:
                            var2 = var6.value;
                            var2 = var8.bind(var0)(var2);
                            var9 = var7.bind(var0)();
                            var2 = var9.done;
                            var6 = var9;
                            if (!var2) {
                                _fun30033_ip = 338;
                                continue _fun30033
                            }
                        case 363:
                            var2 = _closure1_slot156;
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
                    _fun30032_ip = 133;
                    continue _fun30032
                }
            case 109:
                var1 = var3[var2];
                _closure2_slot2 = var1;
                var1 = var4.bind(var0)();
                var2 = var2 + 1;
                var1 = var3.length;
                if (var2 < var1) {
                    _fun30032_ip = 109;
                    continue _fun30032
                }
            case 133:
                return var0;
        }
    };
    var _closure1_slot166 = var0;
    var0 = function(arg0) { // Original name: getSoundshareId, environment: var4
        _fun30038: for (var _fun30038_ip = 0;;) switch (_fun30038_ip) {
            case 0:
                var5 = arg0;
                var2 = _closure1_slot69;
                var1 = null;
                if (!(var1 == var2)) {
                    _fun30038_ip = 53;
                    continue _fun30038
                }
            case 16:
                var4 = _closure1_slot60;
                var3 = var4.info;
                var2 = 'Error: trying to get soundshare id before MediaEngineStore is instantiated.';
                var2 = var3.bind(var4)(var2);
                var2 = {
                    'soundshareId': null,
                    'soundshareSession': ''
                };
                return var2;
            case 53:
                var3 = _closure1_slot69;
                var2 = var3.getExperimentalSoundshare;
                var3 = var2.bind(var3)();
                var2 = var5;
                if (var3) {
                    _fun30038_ip = 106;
                    continue _fun30038
                }
            case 73:
                var6 = _closure1_slot1;
                var4 = _closure1_slot3;
                var3 = 66;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var6.bind(var3)(var4);
                var3 = var4.getAudioPid;
                var2 = var3.bind(var4)(var5);
            case 106:
                var3 = var1 != var2;
                var1 = '';
                if (!var3) {
                    _fun30038_ip = 150;
                    continue _fun30038
                }
            case 117:
                var4 = _closure1_slot1;
                var3 = _closure1_slot3;
                var0 = 66;
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
    var _closure1_slot167 = var0;
    var0 = function(arg0, arg1) { // Original name: tryHookSoundshare, environment: var4
        _fun30039: for (var _fun30039_ip = 0;;) switch (_fun30039_ip) {
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
                    _fun30039_ip = 54;
                    continue _fun30039
                }
            case 47:
                var4 = 1;
                var3 = var5 > var4;
            case 54:
                if (!var3) {
                    _fun30039_ip = 114;
                    continue _fun30039
                }
            case 57:
                var3 = _closure1_slot2;
                var4 = _closure1_slot3;
                var2 = 42;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.attachToProcess;
                var2 = {};
                var6 = arg1;
                var2.soundshare_session = var6;
                var3 = var3.bind(var4)(var5, var2);
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var1
                    _fun30040: for (var _fun30040_ip = 0;;) switch (_fun30040_ip) {
                        case 0:
                            var2 = arg0;
                            var _closure3_slot0 = var2;
                            var1 = null;
                            var1 = var1 == var2;
                            if (var1) {
                                _fun30040_ip = 45;
                                continue _fun30040
                            }
                        case 18:
                            var4 = _closure1_slot13;
                            var3 = var4.shouldContinueWithoutElevatedProcessForPID;
                            var2 = _closure2_slot0;
                            var1 = var3.bind(var4)(var2);
                        case 45:
                            if (var1) {
                                _fun30040_ip = 89;
                                continue _fun30040
                            }
                        case 48:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var1 = 63;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.wait;
                            var0 = function() { // Environment: var0
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot3;
                                var0 = 63;
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
    var _closure1_slot168 = var0;
    var0 = function() { // Original name: resetProbingState, environment: var4
        _fun30042: for (var _fun30042_ip = 0;;) switch (_fun30042_ip) {
            case 0:
                var0 = _closure1_slot52;
                var4 = var0.DEFAULT;
                var1 = _closure1_slot141;
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
                    _fun30042_ip = 123;
                    continue _fun30042
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
                    _fun30042_ip = 111;
                    continue _fun30042
                }
            case 107:
                var3 = delete var1[var3];
            case 111:
                var5 = var5 + 1;
                var3 = var9.length;
                if (var5 < var3) {
                    _fun30042_ip = 71;
                    continue _fun30042
                }
            case 123:
                var3 = _closure1_slot156;
                var2 = {};
                var2.videoToggleStateMap = var1;
                var1 = false;
                var1 = var3.bind(var0)(var2, var4, var1);
                return var0;
        }
    };
    var _closure1_slot169 = var0;
    var0 = function(arg0) { // Original name: trackVoiceProcessing, environment: var4
        _fun30043: for (var _fun30043_ip = 0;;) switch (_fun30043_ip) {
            case 0:
                var2 = _closure1_slot141;
                var0 = undefined;
                var9 = var2.bind(var0)();
                var3 = _closure1_slot71;
                var2 = var3.getAudioSubsystem;
                var8 = var2.bind(var3)();
                var3 = _closure1_slot71;
                var2 = var3.getAudioLayer;
                var7 = var2.bind(var3)();
                var4 = _closure1_slot161;
                var3 = _closure1_slot81;
                var2 = var9.inputDeviceId;
                var3 = var4.bind(var0)(var3, var2);
                var2 = _closure1_slot81;
                var2 = var2[var3];
                var3 = null;
                var3 = var3 == var2;
                var6 = undefined;
                if (var3) {
                    _fun30043_ip = 85;
                    continue _fun30043
                }
            case 80:
                var6 = var2.name;
            case 85:
                var3 = _closure1_slot1;
                var4 = _closure1_slot3;
                var2 = 46;
                var2 = var4[var2];
                var11 = var3.bind(var0)(var2);
                var10 = var9.noiseCancellation;
                var5 = _closure1_slot69;
                var2 = var5.getSystemMicrophoneMode;
                var5 = var2.bind(var5)();
                var2 = {};
                var12 = 'trackVoiceProcessing';
                var2.location = var12;
                var5 = var11.bind(var0)(var10, var5, var2);
                var2 = 48;
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
    var _closure1_slot170 = var0;
    var0 = function() { // Original name: setMaybePreprocessMute, environment: var4
        _fun30044: for (var _fun30044_ip = 0;;) switch (_fun30044_ip) {
            case 0:
                var3 = _closure1_slot123;
                var2 = var3.has;
                var1 = 'voice_filter_preview';
                var1 = var2.bind(var3)(var1);
                var2 = !var1;
                if (!var2) {
                    _fun30044_ip = 52;
                    continue _fun30044
                }
            case 29:
                var4 = _closure1_slot123;
                var3 = var4.has;
                var1 = 'mic_test';
                var1 = var3.bind(var4)(var1);
                var2 = !var1;
            case 52:
                var1 = _closure1_slot71;
                var0 = var1.setMaybePreprocessMute;
                var0 = var0.bind(var1)(var2);
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot171 = var0;
    var0 = function() { // Original name: setLoopback, environment: var4
        _fun30045: for (var _fun30045_ip = 0;;) switch (_fun30045_ip) {
            case 0:
                var2 = _closure1_slot141;
                var0 = undefined;
                var2 = var2.bind(var0)();
                var3 = _closure1_slot123;
                var4 = var3.size;
                var3 = 0;
                var4 = var4 > var3;
                var7 = var2.inputDeviceId;
                var5 = _closure1_slot19;
                var3 = var5.hasEchoCancellation;
                var10 = var3.bind(var5)(var7);
                if (var10) {
                    _fun30045_ip = 58;
                    continue _fun30045
                }
            case 52:
                var10 = var2.echoCancellation;
            case 58:
                var5 = _closure1_slot19;
                var3 = var5.hasNoiseSuppression;
                var9 = var3.bind(var5)(var7);
                if (var9) {
                    _fun30045_ip = 82;
                    continue _fun30045
                }
            case 76:
                var9 = var2.noiseSuppression;
            case 82:
                var5 = _closure1_slot147;
                var6 = _closure1_slot19;
                var3 = var6.hasAutomaticGainControl;
                var3 = var3.bind(var6)(var7);
                if (var3) {
                    _fun30045_ip = 110;
                    continue _fun30045
                }
            case 104:
                var3 = var2.automaticGainControl;
            case 110:
                var8 = var5.bind(var0)(var3);
                var6 = var2.noiseCancellation;
                var7 = _closure1_slot109;
                var5 = _closure1_slot123;
                var3 = var5.has;
                var2 = 'voice_filter';
                var5 = var3.bind(var5)(var2);
                if (!var5) {
                    _fun30045_ip = 164;
                    continue _fun30045
                }
            case 148:
                var2 = _closure1_slot123;
                var3 = var2.size;
                var2 = 1;
                var5 = var2 === var3;
            case 164:
                var3 = _closure1_slot71;
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
    var _closure1_slot172 = var0;
    var0 = function() { // Original name: _setGamescopeVaapiEnabled, environment: var4
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot10;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun30048: for (var _fun30048_ip = 0;;) switch (_fun30048_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun30048_ip = 232;
                            continue _fun30048
                        }
                    case 10:
                        var4 = _closure1_slot71;
                        var2 = var4.supports;
                        var1 = _closure1_slot46;
                        var1 = var1.VAAPI;
                        var1 = var2.bind(var4)(var1);
                        if (!var1) {
                            _fun30048_ip = 224;
                            continue _fun30048
                        }
                    case 44:
                        var1 = global;
                        var2 = var1.window;
                        var6 = var2.DiscordNative;
                        var2 = null;
                        var7 = var2 == var6;
                        var4 = undefined;
                        if (var7) {
                            _fun30048_ip = 90;
                            continue _fun30048
                        }
                    case 69:
                        var6 = var6.processUtils;
                        var7 = var2 == var6;
                        var4 = undefined;
                        if (var7) {
                            _fun30048_ip = 90;
                            continue _fun30048
                        }
                    case 84:
                        var4 = var6.getSystemInfo;
                    case 90:
                        if (!(var2 != var4)) {
                            _fun30048_ip = 224;
                            continue _fun30048
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
                            _fun30048_ip = 229;
                            continue _fun30048
                        }
                    case 135:
                        var4 = var1.electronGPUInfo;
                        var6 = var2 == var4;
                        var5 = undefined;
                        if (var6) {
                            _fun30048_ip = 160;
                            continue _fun30048
                        }
                    case 152:
                        var5 = var4.gpuDevice;
                    case 160:
                        if (!(var2 == var5)) {
                            _fun30048_ip = 168;
                            continue _fun30048
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
                            _fun30048_ip = 224;
                            continue _fun30048
                        }
                    case 189:
                        var2 = true;
                        _closure1_slot130 = var2;
                        var5 = _closure1_slot71;
                        var4 = var5.supports;
                        var2 = _closure1_slot46;
                        var2 = var2.GAMESCOPE_CAPTURE;
                        var2 = var4.bind(var5)(var2);
                        _closure1_slot129 = var2;
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
        _closure1_slot173 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot173 = var0;
    var0 = function() { // Original name: hasAdvancedVoiceActivity, environment: var4
        _fun30050: for (var _fun30050_ip = 0;;) switch (_fun30050_ip) {
            case 0:
                var0 = _closure1_slot103;
                if (var0) {
                    _fun30050_ip = 12;
                    continue _fun30050
                }
            case 10:
                var0 = true;
            case 12:
                return var0;
        }
    };
    var _closure1_slot174 = var0;
    var0 = function() { // Original name: _setupKrispNativeModule, environment: var4
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot10;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun30053: for (var _fun30053_ip = 0;;) switch (_fun30053_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun30053_ip = 564;
                            continue _fun30053
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
                        var12 = 82;
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
                            _fun30053_ip = 257;
                            continue _fun30053
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
                        _closure1_slot103 = var9;
                        var8 = var8.getSdkVersion;
                        var9 = null;
                        var11 = var9 == var8;
                        var8 = undefined;
                        if (var11) {
                            _fun30053_ip = 140;
                            continue _fun30053
                        }
                    case 127:
                        var12 = var4;
                        var11 = var12.getSdkVersion;
                        var8 = var11.bind(var12)();
                    case 140:
                        _closure1_slot104 = var8;
                        var8 = var4;
                        var8 = var8.getSuppressionLevel;
                        var11 = var9 == var8;
                        var8 = undefined;
                        if (var11) {
                            _fun30053_ip = 175;
                            continue _fun30053
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
                            _fun30053_ip = 191;
                            continue _fun30053
                        }
                    case 188:
                        var8 = var10;
                    case 191:
                        _closure1_slot105 = var8;
                        var8 = var4;
                        var8 = var8.getNcModels;
                        if (!(var9 != var8)) {
                            _fun30053_ip = 238;
                            continue _fun30053
                        }
                    case 208:
                        var8 = var4;
                        var4 = var8.getNcModels;
                        var9 = var4.bind(var8)();
                        var8 = var9.then;
                        var4 = function(arg0) { // Environment: var4
                            var1 = arg0;
                            _closure1_slot107 = var1;
                            var1 = _closure1_slot69;
                            var0 = var1.emitChange;
                            var0 = var0.bind(var1)();
                            var0 = undefined;
                            return var0;
                        };
                        var4 = var8.bind(var9)(var4);
                    case 238:
                        var8 = _closure1_slot69;
                        var4 = var8.emitChange;
                        var4 = var4.bind(var8)();
                    case 252: // try_end0
                        _fun30053_ip = 539;
                        continue _fun30053;
                    case 257: // try_end1
                        var4 = false;
                        _closure1_slot102 = var4;
                        return var2;
                    case 266: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register = 6);
                        var5 = var6;
                        var10 = _closure1_slot60;
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
                        var8 = 83;
                        var8 = var10[var8];
                        var9 = var9.bind(var1)(var8);
                        var8 = var9.captureException;
                        var8 = var8.bind(var9)(var6);
                        var8 = _closure1_slot53;
                        var7 = var8.INITIALIZED;
                        var8 = var6.message;
                        var6 = var8.includes;
                        var11 = ': ';
                        var6 = var6.bind(var8)(var11);
                        if (!var6) {
                            _fun30053_ip = 473;
                            continue _fun30053
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
                            _fun30053_ip = 460;
                            continue _fun30053
                        }
                    case 449:
                        var5 = var3;
                        var4 = 0;
                        if (!(var4 !== var5)) {
                            _fun30053_ip = 460;
                            continue _fun30053
                        }
                    case 458:
                        _fun30053_ip = 470;
                        continue _fun30053;
                    case 460:
                        var4 = _closure1_slot53;
                        var3 = var4.INITIALIZED;
                    case 470:
                        var7 = var3;
                    case 473:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var3 = 48;
                        var3 = var5[var3];
                        var6 = var4.bind(var1)(var3);
                        var5 = var6.track;
                        var3 = _closure1_slot25;
                        var4 = var3.VOICE_PROCESSING;
                        var3 = {};
                        var3.noise_canceller_error = var7;
                        var3 = var5.bind(var6)(var4, var3);
                        var3 = _closure1_slot156;
                        var2 = {};
                        var4 = false;
                        var2.noiseCancellation = var4;
                        var2 = var3.bind(var1)(var2);
                    case 539: // try_end2
                        var2 = false;
                        _closure1_slot102 = var2;
                        return var1;
                    case 551: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register = 1);
                        var2 = false;
                        _closure1_slot102 = var2;
                        throw var1;
                    case 564:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot175 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot175 = var0;
    var0 = function() { // Original name: maybeSetupKrispModule, environment: var4
        _fun30055: for (var _fun30055_ip = 0;;) switch (_fun30055_ip) {
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
                    _fun30055_ip = 65;
                    continue _fun30055
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
                    _fun30055_ip = 95;
                    continue _fun30055
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
                    _fun30055_ip = 134;
                    continue _fun30055
                }
            case 98:
                var2 = _closure1_slot102;
                if (var2) {
                    _fun30055_ip = 134;
                    continue _fun30055
                }
            case 105:
                var2 = _closure1_slot103;
                if (var2) {
                    _fun30055_ip = 134;
                    continue _fun30055
                }
            case 112:
                var2 = true;
                _closure1_slot102 = var2;
                var2 = function() { // Original name: setupKrispNativeModule, environment: var2
                    var0 = undefined;
                    var3 = _closure1_slot175;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var2 = var2.bind(var0)();
                _fun30055_ip = 262;
                continue _fun30055;
            case 134:
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var4];
                var3 = var3.bind(var0)(var2);
                var2 = var3.isWeb;
                var2 = var2.bind(var3)();
                if (!var2) {
                    _fun30055_ip = 192;
                    continue _fun30055
                }
            case 164:
                var5 = _closure1_slot71;
                var3 = var5.supports;
                var2 = _closure1_slot46;
                var2 = var2.NOISE_CANCELLATION;
                var2 = var3.bind(var5)(var2);
                if (var2) {
                    _fun30055_ip = 242;
                    continue _fun30055
                }
            case 192:
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var4];
                var3 = var3.bind(var0)(var2);
                var2 = var3.isWeb;
                var2 = var2.bind(var3)();
                if (!var2) {
                    _fun30055_ip = 262;
                    continue _fun30055
                }
            case 222:
                var3 = _closure1_slot156;
                var2 = {};
                var4 = false;
                var2.noiseCancellation = var4;
                var2 = var3.bind(var0)(var2);
                _fun30055_ip = 262;
                continue _fun30055;
            case 242:
                var2 = true;
                _closure1_slot103 = var2;
                var2 = _closure1_slot69;
                var1 = var2.emitChange;
                var1 = var1.bind(var2)();
            case 262:
                return var0;
        }
    };
    var _closure1_slot176 = var0;
    var7 = function() { // Original name: handleVoiceFilterFailed, environment: var4
        var2 = _closure1_slot156;
        var1 = {};
        var0 = null;
        var1.mostRecentlyRequestedVoiceFilter = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var0 = function(arg0) { // Original name: setAudioSubsystem, environment: var4
        _fun30058: for (var _fun30058_ip = 0;;) switch (_fun30058_ip) {
            case 0:
                var3 = arg0;
                var1 = _closure1_slot45;
                var1 = var1.AUTOMATIC;
                if (!(var3 !== var1)) {
                    _fun30058_ip = 57;
                    continue _fun30058
                }
            case 20:
                var4 = _closure1_slot156;
                var2 = {};
                var1 = false;
                var2.automaticAudioSubsystem = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var2);
                var2 = _closure1_slot71;
                var1 = var2.setAudioSubsystem;
                var1 = var1.bind(var2)(var3);
                _fun30058_ip = 85;
                continue _fun30058;
            case 57:
                var3 = _closure1_slot156;
                var2 = {};
                var1 = true;
                var2.automaticAudioSubsystem = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var0 = _closure1_slot178;
                var0 = var0.bind(var1)();
            case 85:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot177 = var0;
    var0 = function() { // Original name: interpretAutomaticAudioSubsystem, environment: var4
        var2 = _closure1_slot71;
        var1 = var2.queueAudioSubsystem;
        var0 = _closure1_slot45;
        var0 = var0.EXPERIMENTAL;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot178 = var0;
    var10 = function(arg0) { // Original name: handleUserSettingsModal, environment: var4
        _fun30060: for (var _fun30060_ip = 0;;) switch (_fun30060_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.section;
                var1 = _closure1_slot29;
                var1 = var1.VOICE;
                if (!(var2 === var1)) {
                    _fun30060_ip = 35;
                    continue _fun30060
                }
            case 25:
                var1 = _closure1_slot158;
                var0 = undefined;
                var0 = var1.bind(var0)();
            case 35:
                var0 = false;
                return var0;
        }
    };
    var0 = function(arg0) { // Original name: processQueueMetricsForAnalytics, environment: var4
        _fun30061: for (var _fun30061_ip = 0;;) switch (_fun30061_ip) {
            case 0:
                var3 = arg0;
                var1 = var3.taskMetrics;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun30061_ip = 436;
                    continue _fun30061
                }
            case 20:
                var1 = var3.taskMetrics;
                var1 = var1.length;
                var13 = 0;
                if (!(var13 !== var1)) {
                    _fun30061_ip = 436;
                    continue _fun30061
                }
            case 40:
                var1 = var3.taskMetrics;
                var4 = var1.length;
                var1 = 1;
                if (!(var1 !== var4)) {
                    _fun30061_ip = 434;
                    continue _fun30061
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
            case 259:
                var3 = var4.length;
                if (!(var10 < var3)) {
                    _fun30061_ip = 325;
                    continue _fun30061
                }
            case 268:
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
            case 325:
                var10 = var10 + 1;
                var3 = 0;
                if (var10 < var8) {
                    _fun30061_ip = 259;
                    continue _fun30061
                }
            case 334:
                var10 = var9.length;
                if (!(var3 < var10)) {
                    _fun30061_ip = 400;
                    continue _fun30061
                }
            case 343:
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
            case 400:
                var3 = var3 + 1;
                if (var3 < var8) {
                    _fun30061_ip = 334;
                    continue _fun30061
                }
            case 407:
                var3 = var2.JSON;
                var2 = var3.stringify;
                var2 = var2.bind(var3)(var4);
                var1.full_task_report = var2;
                return var1;
            case 434:
                return var0;
            case 436:
                return var0;
        }
    };
    var _closure1_slot179 = var0;
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
    var22 = 2;
    var1 = var6[var22];
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
    var24 = 5;
    var1 = var6[var24];
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
    var23 = var1.InputModes;
    var _closure1_slot27 = var23;
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
    var3 = var1.WINDOWS_SOUNDSHARE_HOOK_VERSION;
    var _closure1_slot38 = var3;
    var1 = var1.WINDOWS_SOUNDSHARE_NONHOOK_VERSION;
    var _closure1_slot39 = var1;
    var1 = 24;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var3 = var1.NativePermissionStates;
    var _closure1_slot40 = var3;
    var14 = var1.NativePermissionTypes;
    var _closure1_slot41 = var14;
    var1 = 25;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var3 = var1.ProtoAudioSettingsContextTypes;
    var _closure1_slot42 = var3;
    var1 = var1.UserSettingsTypes;
    var _closure1_slot43 = var1;
    var1 = 26;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var20 = var1.InputProfile;
    var _closure1_slot44 = var20;
    var1 = 27;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var3 = var1.AudioSubsystems;
    var _closure1_slot45 = var3;
    var16 = var1.Features;
    var _closure1_slot46 = var16;
    var3 = var1.DEFAULT_VOLUME;
    var _closure1_slot47 = var3;
    var3 = var1.DEFAULT_STREAM_VOLUME;
    var _closure1_slot48 = var3;
    var17 = var1.DEFAULT_DEVICE_ID;
    var _closure1_slot49 = var17;
    var15 = var1.DISABLED_DEVICE_ID;
    var _closure1_slot50 = var15;
    var3 = var1.ExperimentFlags;
    var _closure1_slot51 = var3;
    var12 = var1.MediaEngineContextTypes;
    var _closure1_slot52 = var12;
    var3 = var1.NoiseCancellerError;
    var _closure1_slot53 = var3;
    var3 = var1.MediaTypes;
    var _closure1_slot54 = var3;
    var3 = var1.QUEUE_METRICS_INTERVAL_MS;
    var _closure1_slot55 = var3;
    var3 = var1.VideoToggleReason;
    var _closure1_slot56 = var3;
    var3 = var1.VIEWERSIDE_CLIP_KFI_MS;
    var _closure1_slot57 = var3;
    var3 = var1.SIMULCAST_HQ_QUALITY;
    var _closure1_slot58 = var3;
    var1 = var1.SIMULCAST_LQ_QUALITY;
    var _closure1_slot59 = var1;
    var1 = 28;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var3 = var1.prototype;
    var19 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var3 = 'MediaEngineStore';
    var28 = var19;
    var27 = var3;
    var1 = new var28[var1](var27, var26);
    var21 = var1 instanceof Object ? var1 : var19;
    var _closure1_slot60 = var21;
    var _closure1_slot61 = var3;
    var1 = {
        'left': 1,
        'right': 1
    };
    var _closure1_slot62 = var1;
    var1 = 29;
    var19 = var6[var1];
    var19 = var8.bind(var0)(var19);
    var19 = var19.Millis;
    var19 = var19.SECOND;
    var19 = var24 * var19;
    var _closure1_slot63 = var19;
    var19 = var6[var1];
    var19 = var8.bind(var0)(var19);
    var19 = var19.Millis;
    var19 = var19.SECOND;
    var19 = var22 * var19;
    var _closure1_slot64 = var19;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var1 = var1.Millis;
    var19 = var1.SECOND;
    var1 = 30;
    var1 = var1 * var19;
    var _closure1_slot65 = var1;
    var _closure1_slot66 = var11;
    var1 = 'deep_noise_suppression';
    var _closure1_slot67 = var1;
    var _closure1_slot68 = var9;
    var19 = {};
    var22 = var20.CUSTOM;
    var9 = {};
    var19[var22] = var9;
    var24 = var20.VOICE_ISOLATION;
    var22 = {
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
    var22.modeOptions = var9;
    var9 = false;
    var19[var24] = var22;
    var22 = var20.STUDIO;
    var20 = {
        'mode': null,
        'modeOptions': null,
        'echoCancellation': false,
        'noiseSuppression': false,
        'automaticGainControl': false,
        'noiseCancellation': false,
        'bypassSystemInputProcessing': true
    };
    var23 = var23.VOICE_ACTIVITY;
    var20.mode = var23;
    var23 = {
        'threshold': 4294967212,
        'autoThreshold': false,
        'vadUseKrisp': false
    };
    var20.modeOptions = var23;
    var19[var22] = var20;
    var _closure1_slot70 = var19;
    var19 = 31;
    var20 = var6[var19];
    var22 = var5.bind(var0)(var20);
    var20 = var22.initializeMediaEngine;
    var19 = var6[var19];
    var23 = var5.bind(var0)(var19);
    var19 = var23.determineMediaEngine;
    var19 = var19.bind(var23)();
    var20 = var20.bind(var22)(var19);
    var _closure1_slot71 = var20;
    var19 = var21.enableNativeLogger;
    var19 = var19.bind(var21)(var11);
    var19 = {};
    var _closure1_slot75 = var19;
    var22 = var13.Set;
    var21 = var12.DEFAULT;
    var19 = new Array(1);
    var19[0] = var21;
    var21 = var22.prototype;
    var21 = Object.create(var21, {
        constructor: {
            value: var22
        }
    });
    var28 = var21;
    var27 = var19;
    var19 = new var28[var22](var27, var26);
    var19 = var19 instanceof Object ? var19 : var21;
    var _closure1_slot76 = var19;
    var19 = var20.supports;
    var16 = var16.AUTO_ENABLE;
    var16 = var19.bind(var20)(var16);
    var _closure1_slot77 = var16;
    var _closure1_slot78 = var9;
    var12 = var12.STREAM;
    var _closure1_slot79 = var12;
    var16 = var13.performance;
    var12 = var16.now;
    var12 = var12.bind(var16)();
    var _closure1_slot80 = var12;
    var12 = {};
    var16 = 'No Input Devices';
    var16 = var18.bind(var0)(var16);
    var12[var17] = var16;
    var _closure1_slot81 = var12;
    var12 = {};
    var16 = 'No Output Devices';
    var16 = var18.bind(var0)(var16);
    var12[var17] = var16;
    var _closure1_slot82 = var12;
    var12 = {};
    var16 = 'No Video Devices';
    var16 = var18.bind(var0)(var16);
    var12[var17] = var16;
    var _closure1_slot83 = var12;
    var12 = 32;
    var16 = var6[var12];
    var16 = var5.bind(var0)(var16);
    var16 = var16.Timeout;
    var17 = var16.prototype;
    var17 = Object.create(var17, {
        constructor: {
            value: var16
        }
    });
    var28 = var17;
    var16 = new var28[var16](var27);
    var16 = var16 instanceof Object ? var16 : var17;
    var _closure1_slot84 = var16;
    var _closure1_slot85 = var9;
    var _closure1_slot86 = var9;
    var _closure1_slot87 = var9;
    var _closure1_slot88 = var9;
    var _closure1_slot89 = var9;
    var _closure1_slot90 = var15;
    var _closure1_slot91 = var15;
    var _closure1_slot92 = var9;
    var _closure1_slot93 = var9;
    var _closure1_slot94 = var9;
    var12 = var6[var12];
    var12 = var5.bind(var0)(var12);
    var12 = var12.Timeout;
    var15 = var12.prototype;
    var15 = Object.create(var15, {
        constructor: {
            value: var12
        }
    });
    var28 = var15;
    var12 = new var28[var12](var27);
    var12 = var12 instanceof Object ? var12 : var15;
    var _closure1_slot95 = var12;
    var _closure1_slot96 = var9;
    var _closure1_slot97 = var9;
    var12 = null;
    var _closure1_slot98 = var12;
    var _closure1_slot99 = var9;
    var _closure1_slot100 = var9;
    var _closure1_slot101 = var9;
    var _closure1_slot102 = var9;
    var _closure1_slot103 = var9;
    var _closure1_slot104 = var0;
    var _closure1_slot105 = var0;
    var _closure1_slot106 = var0;
    var15 = new Array(0);
    var _closure1_slot107 = var15;
    var _closure1_slot108 = var9;
    var _closure1_slot109 = var12;
    var _closure1_slot110 = var12;
    var _closure1_slot111 = var12;
    var _closure1_slot112 = var12;
    var _closure1_slot113 = var12;
    var _closure1_slot114 = var9;
    var _closure1_slot115 = var9;
    var _closure1_slot116 = var9;
    var _closure1_slot117 = var12;
    var _closure1_slot118 = var12;
    var _closure1_slot119 = var9;
    var _closure1_slot120 = var9;
    var15 = 33;
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
    var28 = var15;
    var14 = new var28[var14](var27);
    var14 = var14 instanceof Object ? var14 : var15;
    var _closure1_slot121 = var14;
    var _closure1_slot122 = var11;
    var13 = var13.Set;
    var14 = var13.prototype;
    var14 = Object.create(var14, {
        constructor: {
            value: var13
        }
    });
    var28 = var14;
    var13 = new var28[var13](var27);
    var13 = var13 instanceof Object ? var13 : var14;
    var _closure1_slot123 = var13;
    var _closure1_slot124 = var0;
    var13 = {};
    var _closure1_slot125 = var13;
    var _closure1_slot126 = var12;
    var _closure1_slot127 = var11;
    var _closure1_slot128 = var9;
    var _closure1_slot129 = var9;
    var _closure1_slot130 = var9;
    var _closure1_slot131 = var9;
    var9 = function() { // Environment: var4
        var3 = _closure1_slot9;
        var2 = function() { // Original name: _class, environment: var4
            var2 = this;
            var _closure3_slot0 = var2;
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
                _fun30068: for (var _fun30068_ip = 0;;) switch (_fun30068_ip) {
                    case 0:
                        var0 = arg0;
                        var _closure4_slot0 = var0;
                        var3 = !var0;
                        var _closure4_slot1 = var3;
                        var2 = _closure3_slot0;
                        var4 = var2.stateChangeTimeout;
                        var2 = null;
                        if (!(var2 != var4)) {
                            _fun30068_ip = 60;
                            continue _fun30068
                        }
                    case 35:
                        var2 = global;
                        var5 = var2.clearTimeout;
                        var2 = _closure3_slot0;
                        var4 = var2.stateChangeTimeout;
                        var2 = undefined;
                        var2 = var5.bind(var2)(var4);
                    case 60:
                        var2 = _closure3_slot0;
                        var4 = global;
                        var4 = var4.setTimeout;
                        var0 = _closure3_slot0;
                        if (var3) {
                            _fun30068_ip = 87;
                            continue _fun30068
                        }
                    case 79:
                        var3 = var0.noVoiceTimeout;
                        _fun30068_ip = 93;
                        continue _fun30068;
                    case 87:
                        var3 = var0.voiceTimeout;
                    case 93:
                        var0 = undefined;
                        var1 = function() { // Environment: var1
                            _fun30069: for (var _fun30069_ip = 0;;) switch (_fun30069_ip) {
                                case 0:
                                    var0 = _closure3_slot0;
                                    var1 = null;
                                    var0.stateChangeTimeout = var1;
                                    var0 = var0.started;
                                    if (!var0) {
                                        _fun30069_ip = 94;
                                        continue _fun30069
                                    }
                                case 24:
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot3;
                                    var0 = 63;
                                    var2 = var2[var0];
                                    var0 = undefined;
                                    var4 = var3.bind(var0)(var2);
                                    var3 = var4.dispatch;
                                    var2 = {};
                                    var0 = 'AUDIO_INPUT_DETECTED';
                                    var2.type = var0;
                                    var5 = _closure4_slot1;
                                    var2.inputDetected = var5;
                                    var2 = var3.bind(var4)(var2);
                                    var0 = _closure4_slot0;
                                    if (!var0) {
                                        _fun30069_ip = 94;
                                        continue _fun30069
                                    }
                                case 88:
                                    var0 = true;
                                    _closure1_slot100 = var0;
                                case 94:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var1 = var4.bind(var0)(var1, var3);
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
        var1 = function() { // Original name: value, environment: var4
            _fun30070: for (var _fun30070_ip = 0;;) switch (_fun30070_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.started;
                    if (var1) {
                        _fun30070_ip = 79;
                        continue _fun30070
                    }
                case 12:
                    var1 = true;
                    var0.started = var1;
                    var3 = _closure1_slot71;
                    var2 = var3.on;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 31;
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
        var5 = function() { // Original name: value, environment: var4
            _fun30071: for (var _fun30071_ip = 0;;) switch (_fun30071_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.started;
                    if (!var0) {
                        _fun30071_ip = 161;
                        continue _fun30071
                    }
                case 15:
                    var0 = false;
                    var1.started = var0;
                    var2 = var1.stateChangeTimeout;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun30071_ip = 62;
                        continue _fun30071
                    }
                case 35:
                    var2 = global;
                    var4 = var2.clearTimeout;
                    var3 = var1.stateChangeTimeout;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var1.stateChangeTimeout = var0;
                case 62:
                    var6 = _closure1_slot71;
                    var5 = var6.removeListener;
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 31;
                    var4 = var3[var2];
                    var2 = undefined;
                    var4 = var7.bind(var2)(var4);
                    var4 = var4.MediaEngineEvent;
                    var4 = var4.Silence;
                    var1 = var1.handleSilence;
                    var1 = var5.bind(var6)(var4, var1);
                    var1 = _closure1_slot1;
                    var0 = 63;
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
        var5 = function() { // Original name: value, environment: var4
            _fun30072: for (var _fun30072_ip = 0;;) switch (_fun30072_ip) {
                case 0:
                    var2 = this;
                    var1 = _closure1_slot141;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    var4 = _closure1_slot99;
                    if (var4) {
                        _fun30072_ip = 90;
                        continue _fun30072
                    }
                case 23:
                    var5 = _closure1_slot21;
                    var4 = var5.getState;
                    var5 = var4.bind(var5)();
                    var4 = _closure1_slot28;
                    var4 = var4.RTC_CONNECTED;
                    if (!(var5 === var4)) {
                        _fun30072_ip = 90;
                        continue _fun30072
                    }
                case 51:
                    var4 = var1.mode;
                    var3 = _closure1_slot27;
                    var3 = var3.VOICE_ACTIVITY;
                    if (!(var4 === var3)) {
                        _fun30072_ip = 90;
                        continue _fun30072
                    }
                case 70:
                    var1 = var1.silenceWarning;
                    if (!var1) {
                        _fun30072_ip = 90;
                        continue _fun30072
                    }
                case 79:
                    var1 = var2.start;
                    var1 = var1.bind(var2)();
                    _fun30072_ip = 100;
                    continue _fun30072;
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
        var4 = function() { // Original name: value, environment: var4
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
    var28 = var11;
    var9 = new var28[var9](var27);
    var9 = var9 instanceof Object ? var9 : var11;
    var _closure1_slot132 = var9;
    var9 = 86;
    var9 = var6[var9];
    var9 = var8.bind(var0)(var9);
    var11 = var9.Store;
    var9 = function(arg0) { // Environment: var4
        var3 = function() { // Original name: MediaEngineStore, environment: var5
            _fun30075: for (var _fun30075_ip = 0;;) switch (_fun30075_ip) {
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
                    var0 = _closure1_slot133;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun30075_ip = 69;
                        continue _fun30075
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun30075_ip = 105;
                    continue _fun30075;
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
        var0 = function() { // Original name: initialize, environment: var5
            var15 = this;
            var3 = _closure1_slot151;
            var0 = undefined;
            var3 = var3.bind(var0)();
            var3 = function() { // Original name: loadSettings, environment: var2
                _fun30077: for (var _fun30077_ip = 0;;) switch (_fun30077_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var0 = _closure1_slot3;
                        var5 = 70;
                        var2 = var0[var5];
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var3 = var2.Storage;
                        var2 = var3.get;
                        var6 = 'audio';
                        var12 = var2.bind(var3)(var6);
                        var3 = null;
                        if (!(var3 != var12)) {
                            _fun30077_ip = 132;
                            continue _fun30077
                        }
                    case 51:
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var7 = var2[var5];
                        var7 = var4.bind(var0)(var7);
                        var10 = var7.Storage;
                        var9 = var10.set;
                        var8 = _closure1_slot61;
                        var7 = {};
                        var11 = _closure1_slot52;
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
                        var2 = _closure1_slot61;
                        var2 = var4.bind(var5)(var2);
                        if (!(var3 == var2)) {
                            _fun30077_ip = 175;
                            continue _fun30077
                        }
                    case 173:
                        var2 = {};
                    case 175:
                        _closure1_slot75 = var2;
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var2 = 40;
                        var2 = var4[var2];
                        var5 = var3.bind(var0)(var2);
                        var4 = var5.each;
                        var3 = _closure1_slot75;
                        var2 = function(arg0) { // Environment: var2
                            _fun30078: for (var _fun30078_ip = 0;;) switch (_fun30078_ip) {
                                case 0:
                                    var2 = arg0;
                                    var4 = _closure1_slot1;
                                    var3 = _closure1_slot3;
                                    var0 = 40;
                                    var3 = var3[var0];
                                    var0 = undefined;
                                    var5 = var4.bind(var0)(var3);
                                    var4 = var5.defaultsDeep;
                                    var3 = _closure1_slot136;
                                    var3 = var3.bind(var0)();
                                    var3 = var4.bind(var5)(var2, var3);
                                    var3 = var2.modeOptions;
                                    var4 = null;
                                    var3 = var4 != var3;
                                    if (!var3) {
                                        _fun30078_ip = 86;
                                        continue _fun30078
                                    }
                                case 63:
                                    var5 = var2.modeOptions;
                                    var5 = var5.shortcut;
                                    var6 = 'string';
                                    var5 = typeof var5;
                                    var3 = var6 === var5;
                                case 86:
                                    if (!var3) {
                                        _fun30078_ip = 144;
                                        continue _fun30078
                                    }
                                case 89:
                                    var5 = var2.modeOptions;
                                    var6 = _closure1_slot0;
                                    var7 = _closure1_slot3;
                                    var3 = 71;
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
                                        _fun30078_ip = 170;
                                        continue _fun30078
                                    }
                                case 157:
                                    var6 = var2.vadUseKrispSettingVersion;
                                    var5 = 4;
                                    var3 = var5 !== var6;
                                case 170:
                                    if (!var3) {
                                        _fun30078_ip = 196;
                                        continue _fun30078
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
                                        _fun30078_ip = 221;
                                        continue _fun30078
                                    }
                                case 205:
                                    var3 = true;
                                    var2.qosMigrated = var3;
                                    var3 = false;
                                    var2.qos = var3;
                                case 221:
                                    var3 = var2.vadThrehsoldMigrated;
                                    if (var3) {
                                        _fun30078_ip = 287;
                                        continue _fun30078
                                    }
                                case 230:
                                    var3 = true;
                                    var2.vadThrehsoldMigrated = var3;
                                    var3 = var2.modeOptions;
                                    var5 = var4 == var3;
                                    var4 = undefined;
                                    if (var5) {
                                        _fun30078_ip = 259;
                                        continue _fun30078
                                    }
                                case 253:
                                    var4 = var3.threshold;
                                case 259:
                                    var3 = -40;
                                    if (!(var3 === var4)) {
                                        _fun30078_ip = 287;
                                        continue _fun30078
                                    }
                                case 269:
                                    var4 = var2.modeOptions;
                                    var3 = -60;
                                    var4.threshold = var3;
                                case 287:
                                    var5 = _closure1_slot71;
                                    var4 = var5.supports;
                                    var3 = _closure1_slot46;
                                    var3 = var3.SIDECHAIN_COMPRESSION;
                                    var3 = var4.bind(var5)(var3);
                                    if (!var3) {
                                        _fun30078_ip = 328;
                                        continue _fun30078
                                    }
                                case 315:
                                    var5 = var2.sidechainCompressionSettingVersion;
                                    var4 = 1;
                                    var3 = var5 < var4;
                                case 328:
                                    if (!var3) {
                                        _fun30078_ip = 348;
                                        continue _fun30078
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
                                        _fun30078_ip = 418;
                                        continue _fun30078
                                    }
                                case 381:
                                    var3 = var2.ncUseKrispSettingVersion;
                                    var1 = 1;
                                    if (!(var1 !== var3)) {
                                        _fun30078_ip = 453;
                                        continue _fun30078
                                    }
                                case 394:
                                    var2.ncUseKrispSettingVersion = var1;
                                    var1 = false;
                                    var2.noiseSuppression = var1;
                                    var1 = true;
                                    var2.noiseCancellation = var1;
                                    _fun30078_ip = 453;
                                    continue _fun30078;
                                case 418:
                                    var3 = var2.ncUseKrispjsSettingVersion;
                                    var1 = 1;
                                    if (!(var1 !== var3)) {
                                        _fun30078_ip = 453;
                                        continue _fun30078
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
                        var1 = _closure1_slot157;
                        var1 = var1.bind(var0)();
                        return var0;
                }
            };
            var3 = var3.bind(var0)();
            var3 = _closure1_slot176;
            var3 = var3.bind(var0)();
            var3 = _closure1_slot169;
            var3 = var3.bind(var0)();
            var2 = function() { // Original name: maybeStartPollQueueMetrics, environment: var2
                _fun30079: for (var _fun30079_ip = 0;;) switch (_fun30079_ip) {
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
                            _fun30079_ip = 110;
                            continue _fun30079
                        }
                    case 40:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var3 = var3[var5];
                        var3 = var4.bind(var0)(var3);
                        var3 = var3.isPlatformEmbedded;
                        if (!var3) {
                            _fun30079_ip = 110;
                            continue _fun30079
                        }
                    case 66:
                        var3 = _closure1_slot131;
                        if (var3) {
                            _fun30079_ip = 110;
                            continue _fun30079
                        }
                    case 73:
                        var3 = true;
                        _closure1_slot131 = var3;
                        var3 = function() { // Environment: var2
                            var3 = _closure1_slot10;
                            var2 = undefined;
                            var1 = function*() { // Environment: var0
                                var0 = function*() { // Original name: ?anon_0_, environment: var0
                                    _fun30082: for (var _fun30082_ip = 0;;) switch (_fun30082_ip) {
                                        case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                            if (var1) {
                                                _fun30082_ip = 155;
                                                continue _fun30082
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
                                                var0 = 82;
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
                                                _fun30082_ip = 152;
                                                continue _fun30082
                                            }
                                        case 55:
                                            var2 = _closure1_slot55;
                                            var1.periodMs = var2;
                                            var5 = _closure1_slot179;
                                            var2 = undefined;
                                            var8 = var5.bind(var2)(var1);
                                            var5 = null;
                                            if (!(var5 !== var8)) {
                                                _fun30082_ip = 126;
                                                continue _fun30082
                                            }
                                        case 85:
                                            var6 = _closure1_slot1;
                                            var7 = _closure1_slot3;
                                            var5 = 48;
                                            var5 = var7[var5];
                                            var7 = var6.bind(var2)(var5);
                                            var6 = var7.track;
                                            var5 = _closure1_slot25;
                                            var5 = var5.VOICE_QUEUE_METRICS;
                                            var5 = var6.bind(var7)(var5, var8);
                                        case 126:
                                            var5 = var4.setTimeout;
                                            var4 = _closure4_slot0;
                                            var3 = _closure1_slot55;
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
                            var0 = function() { // Original name: pollMetrics, environment: var0
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
                        var1 = _closure1_slot55;
                        var1 = var2.bind(var0)(var3, var1);
                    case 110:
                        return var0;
                }
            };
            var2 = var2.bind(var0)();
            var2 = {};
            var3 = _closure1_slot46;
            var4 = var3.VIDEO;
            var6 = _closure1_slot71;
            var5 = var6.supports;
            var3 = _closure1_slot46;
            var3 = var3.VIDEO;
            var3 = var5.bind(var6)(var3);
            var2[var4] = var3;
            var3 = _closure1_slot46;
            var4 = var3.DESKTOP_CAPTURE;
            var6 = _closure1_slot71;
            var5 = var6.supports;
            var3 = _closure1_slot46;
            var3 = var3.DESKTOP_CAPTURE;
            var3 = var5.bind(var6)(var3);
            var2[var4] = var3;
            var3 = _closure1_slot46;
            var4 = var3.HYBRID_VIDEO;
            var6 = _closure1_slot71;
            var5 = var6.supports;
            var3 = _closure1_slot46;
            var3 = var3.HYBRID_VIDEO;
            var3 = var5.bind(var6)(var3);
            var2[var4] = var3;
            _closure1_slot125 = var2;
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
        };
        var4.value = var0;
        var0 = new Array(119);
        var0[0] = var4;
        var4 = {};
        var6 = 'supports';
        var4.key = var6;
        var6 = function(arg0) { // Original name: supports, environment: var5
            var2 = _closure1_slot71;
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
        var6 = function(arg0) { // Original name: supportsInApp, environment: var5
            _fun30087: for (var _fun30087_ip = 0;;) switch (_fun30087_ip) {
                case 0:
                    var3 = arg0;
                    var0 = _closure1_slot125;
                    var0 = var0[var3];
                    if (var0) {
                        _fun30087_ip = 32;
                        continue _fun30087
                    }
                case 17:
                    var2 = _closure1_slot71;
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
        var6 = function() { // Original name: isSupported, environment: var5
            var1 = _closure1_slot71;
            var0 = var1.supported;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'isNoiseSuppressionSupported';
        var4.key = var6;
        var6 = function() { // Original name: isNoiseSuppressionSupported, environment: var5
            var2 = _closure1_slot71;
            var1 = var2.supports;
            var0 = _closure1_slot46;
            var0 = var0.NOISE_SUPPRESSION;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'isNoiseCancellationSupported';
        var4.key = var6;
        var6 = function() { // Original name: isNoiseCancellationSupported, environment: var5
            var1 = _closure1_slot174;
            var0 = undefined;
            var0 = var1.bind(var0)();
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'isNoiseCancellationError';
        var4.key = var6;
        var6 = function() { // Original name: isNoiseCancellationError, environment: var5
            var0 = _closure1_slot114;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'isAutomaticGainControlSupported';
        var4.key = var6;
        var6 = function() { // Original name: isAutomaticGainControlSupported, environment: var5
            var2 = _closure1_slot71;
            var1 = var2.supports;
            var0 = _closure1_slot46;
            var0 = var0.AUTOMATIC_GAIN_CONTROL;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'shouldOfferManualSubsystemSelection';
        var4.key = var6;
        var6 = function() { // Original name: shouldOfferManualSubsystemSelection, environment: var5
            _fun30093: for (var _fun30093_ip = 0;;) switch (_fun30093_ip) {
                case 0:
                    var1 = _closure1_slot155;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    var0 = !var0;
                    if (!var0) {
                        _fun30093_ip = 75;
                        continue _fun30093
                    }
                case 19:
                    var4 = _closure1_slot71;
                    var3 = var4.supports;
                    var1 = _closure1_slot46;
                    var1 = var1.LEGACY_AUDIO_SUBSYSTEM;
                    var1 = var3.bind(var4)(var1);
                    if (var1) {
                        _fun30093_ip = 72;
                        continue _fun30093
                    }
                case 47:
                    var4 = _closure1_slot71;
                    var3 = var4.supports;
                    var2 = _closure1_slot46;
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
        var6 = function() { // Original name: showBypassSystemInputProcessing, environment: var5
            _fun30094: for (var _fun30094_ip = 0;;) switch (_fun30094_ip) {
                case 0:
                    var3 = _closure1_slot71;
                    var2 = var3.supports;
                    var0 = _closure1_slot46;
                    var0 = var0.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING;
                    var0 = var2.bind(var3)(var0);
                    if (!var0) {
                        _fun30094_ip = 53;
                        continue _fun30094
                    }
                case 31:
                    var2 = _closure1_slot71;
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
        var6 = function() { // Original name: isAdvancedVoiceActivitySupported, environment: var5
            var1 = _closure1_slot174;
            var0 = undefined;
            var0 = var1.bind(var0)();
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'isAecDumpSupported';
        var4.key = var6;
        var6 = function() { // Original name: isAecDumpSupported, environment: var5
            var2 = _closure1_slot71;
            var1 = var2.supports;
            var0 = _closure1_slot46;
            var0 = var0.AEC_DUMP;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'isSimulcastSupported';
        var4.key = var6;
        var6 = function() { // Original name: isSimulcastSupported, environment: var5
            _fun30097: for (var _fun30097_ip = 0;;) switch (_fun30097_ip) {
                case 0:
                    var3 = _closure1_slot71;
                    var2 = var3.supports;
                    var0 = _closure1_slot46;
                    var0 = var0.VIDEO;
                    var0 = var2.bind(var3)(var0);
                    if (!var0) {
                        _fun30097_ip = 56;
                        continue _fun30097
                    }
                case 31:
                    var3 = _closure1_slot71;
                    var2 = var3.supports;
                    var1 = _closure1_slot46;
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
        var6 = function() { // Original name: goLiveSimulcastEnabled, environment: var5
            _fun30098: for (var _fun30098_ip = 0;;) switch (_fun30098_ip) {
                case 0:
                    var3 = _closure1_slot20;
                    var2 = var3.getChannel;
                    var0 = _closure1_slot113;
                    var0 = var2.bind(var3)(var0);
                    var2 = null;
                    var4 = var2 == var0;
                    var3 = undefined;
                    var2 = undefined;
                    if (var4) {
                        _fun30098_ip = 39;
                        continue _fun30098
                    }
                case 34:
                    var2 = var0.type;
                case 39:
                    var0 = _closure1_slot31;
                    var0 = var0.GUILD_STAGE_VOICE;
                    var2 = var2 === var0;
                    var0 = !var2;
                    if (var2) {
                        _fun30098_ip = 89;
                        continue _fun30098
                    }
                case 59:
                    var2 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var1 = 54;
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
        var6 = function() { // Original name: isVideoDecoderFallbackEnabled, environment: var5
            var0 = _closure1_slot119;
            return var0;
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'getAecDump';
        var4.key = var6;
        var6 = function() { // Original name: getAecDump, environment: var5
            var1 = _closure1_slot141;
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
        var6 = function() { // Original name: getMediaEngine, environment: var5
            var0 = _closure1_slot71;
            return var0;
        };
        var4.value = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'getVideoComponent';
        var4.key = var6;
        var6 = function() { // Original name: getVideoComponent, environment: var5
            var0 = _closure1_slot71;
            var0 = var0.Video;
            return var0;
        };
        var4.value = var6;
        var0[17] = var4;
        var4 = {};
        var6 = 'getCameraComponent';
        var4.key = var6;
        var6 = function() { // Original name: getCameraComponent, environment: var5
            var0 = _closure1_slot71;
            var0 = var0.Camera;
            return var0;
        };
        var4.value = var6;
        var0[18] = var4;
        var4 = {};
        var6 = 'getKrispSuppressionLevel';
        var4.key = var6;
        var6 = function() { // Original name: getKrispSuppressionLevel, environment: var5
            _fun30104: for (var _fun30104_ip = 0;;) switch (_fun30104_ip) {
                case 0:
                    var2 = _closure1_slot105;
                    var0 = null;
                    var2 = var0 != var2;
                    var0 = 100;
                    if (!var2) {
                        _fun30104_ip = 23;
                        continue _fun30104
                    }
                case 19:
                    var0 = _closure1_slot105;
                case 23:
                    return var0;
            }
        };
        var4.value = var6;
        var0[19] = var4;
        var4 = {};
        var6 = 'getKrispEnableStats';
        var4.key = var6;
        var6 = function() { // Original name: getKrispEnableStats, environment: var5
            var0 = _closure1_slot108;
            return var0;
        };
        var4.value = var6;
        var0[20] = var4;
        var4 = {};
        var6 = 'isEnabled';
        var4.key = var6;
        var6 = function() { // Original name: isEnabled, environment: var5
            var0 = _closure1_slot77;
            return var0;
        };
        var4.value = var6;
        var0[21] = var4;
        var4 = {};
        var6 = 'isMute';
        var4.key = var6;
        var6 = function() { // Original name: isMute, environment: var5
            _fun30107: for (var _fun30107_ip = 0;;) switch (_fun30107_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.isSelfMute;
                    var0 = var0.bind(var1)();
                    if (var0) {
                        _fun30107_ip = 23;
                        continue _fun30107
                    }
                case 16:
                    var0 = _closure1_slot85;
                case 23:
                    return var0;
            }
        };
        var4.value = var6;
        var0[22] = var4;
        var4 = {};
        var6 = 'isDeaf';
        var4.key = var6;
        var6 = function() { // Original name: isDeaf, environment: var5
            _fun30108: for (var _fun30108_ip = 0;;) switch (_fun30108_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.isSelfDeaf;
                    var0 = var0.bind(var1)();
                    if (var0) {
                        _fun30108_ip = 23;
                        continue _fun30108
                    }
                case 16:
                    var0 = _closure1_slot88;
                case 23:
                    return var0;
            }
        };
        var4.value = var6;
        var0[23] = var4;
        var4 = {};
        var6 = 'hasContext';
        var4.key = var6;
        var6 = function(arg0) { // Original name: hasContext, environment: var5
            var1 = _closure1_slot75;
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
        var6 = function() { // Original name: isSelfMutedTemporarily, environment: var5
            _fun30110: for (var _fun30110_ip = 0;;) switch (_fun30110_ip) {
                case 0:
                    var2 = arguments[0];
                    var0 = undefined;
                    if (!(var2 === var0)) {
                        _fun30110_ip = 22;
                        continue _fun30110
                    }
                case 9:
                    var0 = _closure1_slot52;
                    var2 = var0.DEFAULT;
                case 22:
                    var0 = _closure1_slot52;
                    var0 = var0.DEFAULT;
                    var0 = var2 === var0;
                    if (!var0) {
                        _fun30110_ip = 46;
                        continue _fun30110
                    }
                case 42:
                    var0 = _closure1_slot86;
                case 46:
                    return var0;
            }
        };
        var4.value = var6;
        var0[25] = var4;
        var4 = {};
        var6 = 'isSelfMute';
        var4.key = var6;
        var6 = function() { // Original name: isSelfMute, environment: var5
            _fun30111: for (var _fun30111_ip = 0;;) switch (_fun30111_ip) {
                case 0:
                    var3 = arguments[0];
                    var2 = this;
                    var6 = undefined;
                    if (!(var3 === var6)) {
                        _fun30111_ip = 25;
                        continue _fun30111
                    }
                case 12:
                    var0 = _closure1_slot52;
                    var3 = var0.DEFAULT;
                case 25:
                    var0 = var2.isEnabled;
                    var0 = var0.bind(var2)();
                    var0 = !var0;
                    if (var0) {
                        _fun30111_ip = 59;
                        continue _fun30111
                    }
                case 41:
                    var1 = _closure1_slot141;
                    var1 = var1.bind(var6)(var3);
                    var0 = var1.mute;
                case 59:
                    if (var0) {
                        _fun30111_ip = 109;
                        continue _fun30111
                    }
                case 62:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var4 = 33;
                    var4 = var7[var4];
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.didHavePermission;
                    var1 = _closure1_slot41;
                    var1 = var1.AUDIO;
                    var1 = var4.bind(var5)(var1);
                    var0 = !var1;
                case 109:
                    if (var0) {
                        _fun30111_ip = 123;
                        continue _fun30111
                    }
                case 112:
                    var1 = var2.isSelfDeaf;
                    var0 = var1.bind(var2)(var3);
                case 123:
                    if (var0) {
                        _fun30111_ip = 153;
                        continue _fun30111
                    }
                case 126:
                    var1 = _closure1_slot52;
                    var1 = var1.DEFAULT;
                    var1 = var3 === var1;
                    if (!var1) {
                        _fun30111_ip = 150;
                        continue _fun30111
                    }
                case 146:
                    var1 = _closure1_slot87;
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
        var6 = function() { // Original name: shouldSkipMuteUnmuteSound, environment: var5
            var0 = _closure1_slot92;
            return var0;
        };
        var4.value = var6;
        var0[27] = var4;
        var4 = {};
        var6 = 'notifyMuteUnmuteSoundWasSkipped';
        var4.key = var6;
        var6 = function() { // Original name: notifyMuteUnmuteSoundWasSkipped, environment: var5
            var0 = false;
            _closure1_slot92 = var0;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[28] = var4;
        var4 = {};
        var6 = 'isHardwareMute';
        var4.key = var6;
        var6 = function() { // Original name: isHardwareMute, environment: var5
            _fun30114: for (var _fun30114_ip = 0;;) switch (_fun30114_ip) {
                case 0:
                    var2 = arguments[0];
                    var4 = this;
                    var0 = undefined;
                    if (!(var2 === var0)) {
                        _fun30114_ip = 25;
                        continue _fun30114
                    }
                case 12:
                    var0 = _closure1_slot52;
                    var2 = var0.DEFAULT;
                case 25:
                    var0 = var4.isMute;
                    var0 = var0.bind(var4)();
                    var0 = !var0;
                    if (!var0) {
                        _fun30114_ip = 55;
                        continue _fun30114
                    }
                case 41:
                    var1 = var4.isSelfMutedTemporarily;
                    var1 = var1.bind(var4)(var2);
                    var0 = !var1;
                case 55:
                    if (!var0) {
                        _fun30114_ip = 88;
                        continue _fun30114
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
        var6 = function() { // Original name: isEnableHardwareMuteNotice, environment: var5
            var0 = _closure1_slot127;
            return var0;
        };
        var4.value = var6;
        var0[30] = var4;
        var4 = {};
        var6 = 'isSelfDeaf';
        var4.key = var6;
        var6 = function() { // Original name: isSelfDeaf, environment: var5
            _fun30116: for (var _fun30116_ip = 0;;) switch (_fun30116_ip) {
                case 0:
                    var3 = arguments[0];
                    var1 = this;
                    var2 = undefined;
                    if (!(var3 === var2)) {
                        _fun30116_ip = 25;
                        continue _fun30116
                    }
                case 12:
                    var0 = _closure1_slot52;
                    var3 = var0.DEFAULT;
                case 25:
                    var0 = var1.isSupported;
                    var0 = var0.bind(var1)();
                    var0 = !var0;
                    if (var0) {
                        _fun30116_ip = 59;
                        continue _fun30116
                    }
                case 41:
                    var1 = _closure1_slot141;
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
        var6 = function() { // Original name: isVideoEnabled, environment: var5
            _fun30117: for (var _fun30117_ip = 0;;) switch (_fun30117_ip) {
                case 0:
                    var0 = _closure1_slot89;
                    if (!var0) {
                        _fun30117_ip = 14;
                        continue _fun30117
                    }
                case 10:
                    var0 = _closure1_slot97;
                case 14:
                    return var0;
            }
        };
        var4.value = var6;
        var0[32] = var4;
        var4 = {};
        var6 = 'isVideoAvailable';
        var4.key = var6;
        var6 = function() { // Original name: isVideoAvailable, environment: var5
            var0 = global;
            var2 = var0.Object;
            var1 = var2.values;
            var0 = _closure1_slot83;
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
        var6 = function() { // Original name: isScreenSharing, environment: var5
            _fun30120: for (var _fun30120_ip = 0;;) switch (_fun30120_ip) {
                case 0:
                    var2 = arguments[0];
                    var0 = undefined;
                    if (!(var2 === var0)) {
                        _fun30120_ip = 22;
                        continue _fun30120
                    }
                case 9:
                    var0 = _closure1_slot52;
                    var2 = var0.STREAM;
                case 22:
                    var0 = _closure1_slot79;
                    var0 = var0 === var2;
                    if (!var0) {
                        _fun30120_ip = 46;
                        continue _fun30120
                    }
                case 36:
                    var2 = _closure1_slot73;
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
        var6 = function() { // Original name: isSoundSharing, environment: var5
            _fun30121: for (var _fun30121_ip = 0;;) switch (_fun30121_ip) {
                case 0:
                    var3 = arguments[0];
                    var2 = undefined;
                    if (!(var3 === var2)) {
                        _fun30121_ip = 22;
                        continue _fun30121
                    }
                case 9:
                    var0 = _closure1_slot52;
                    var3 = var0.STREAM;
                case 22:
                    var0 = _closure1_slot79;
                    var0 = var0 === var3;
                    if (!var0) {
                        _fun30121_ip = 46;
                        continue _fun30121
                    }
                case 36:
                    var4 = _closure1_slot73;
                    var3 = null;
                    var0 = var3 != var4;
                case 46:
                    if (!var0) {
                        _fun30121_ip = 80;
                        continue _fun30121
                    }
                case 49:
                    var1 = _closure1_slot73;
                    var3 = var1.desktopSource;
                    var1 = null;
                    var4 = var1 == var3;
                    var2 = undefined;
                    if (var4) {
                        _fun30121_ip = 76;
                        continue _fun30121
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
        var6 = function(arg0) { // Original name: isLocalMute, environment: var5
            _fun30122: for (var _fun30122_ip = 0;;) switch (_fun30122_ip) {
                case 0:
                    var2 = arg0;
                    var4 = arguments[1];
                    var3 = undefined;
                    if (!(var4 === var3)) {
                        _fun30122_ip = 25;
                        continue _fun30122
                    }
                case 12:
                    var0 = _closure1_slot52;
                    var4 = var0.DEFAULT;
                case 25:
                    var5 = _closure1_slot17;
                    var0 = var5.getId;
                    var0 = var0.bind(var5)();
                    var0 = var2 !== var0;
                    if (!var0) {
                        _fun30122_ip = 76;
                        continue _fun30122
                    }
                case 49:
                    var1 = _closure1_slot141;
                    var1 = var1.bind(var3)(var4);
                    var1 = var1.localMutes;
                    var1 = var1[var2];
                    if (var1) {
                        _fun30122_ip = 73;
                        continue _fun30122
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
        var6 = function() { // Original name: supportsDisableLocalVideo, environment: var5
            var2 = _closure1_slot71;
            var1 = var2.supports;
            var0 = _closure1_slot46;
            var0 = var0.DISABLE_VIDEO;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[37] = var4;
        var4 = {};
        var6 = 'isLocalVideoDisabled';
        var4.key = var6;
        var6 = function(arg0) { // Original name: isLocalVideoDisabled, environment: var5
            _fun30124: for (var _fun30124_ip = 0;;) switch (_fun30124_ip) {
                case 0:
                    var2 = arguments[1];
                    var1 = undefined;
                    if (!(var2 === var1)) {
                        _fun30124_ip = 22;
                        continue _fun30124
                    }
                case 9:
                    var0 = _closure1_slot52;
                    var2 = var0.DEFAULT;
                case 22:
                    var0 = _closure1_slot141;
                    var0 = var0.bind(var1)(var2);
                    var1 = var0.disabledLocalVideos;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun30124_ip = 59;
                        continue _fun30124
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
        var6 = function(arg0) { // Original name: getVideoToggleState, environment: var5
            _fun30125: for (var _fun30125_ip = 0;;) switch (_fun30125_ip) {
                case 0:
                    var3 = arguments[1];
                    var2 = undefined;
                    if (!(var3 === var2)) {
                        _fun30125_ip = 22;
                        continue _fun30125
                    }
                case 9:
                    var0 = _closure1_slot52;
                    var3 = var0.DEFAULT;
                case 22:
                    var0 = _closure1_slot141;
                    var0 = var0.bind(var2)(var3);
                    var2 = var0.videoToggleStateMap;
                    var0 = arg0;
                    var0 = var2[var0];
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun30125_ip = 63;
                        continue _fun30125
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
        var6 = function(arg0) { // Original name: isLocalVideoAutoDisabled, environment: var5
            _fun30126: for (var _fun30126_ip = 0;;) switch (_fun30126_ip) {
                case 0:
                    var2 = arguments[1];
                    var0 = undefined;
                    if (!(var2 === var0)) {
                        _fun30126_ip = 22;
                        continue _fun30126
                    }
                case 9:
                    var0 = _closure1_slot52;
                    var2 = var0.DEFAULT;
                case 22:
                    var0 = _closure1_slot52;
                    var0 = var0.DEFAULT;
                    var0 = var2 === var0;
                    if (!var0) {
                        _fun30126_ip = 59;
                        continue _fun30126
                    }
                case 42:
                    var3 = _closure1_slot121;
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
        var6 = function() { // Original name: isAnyLocalVideoAutoDisabled, environment: var5
            _fun30127: for (var _fun30127_ip = 0;;) switch (_fun30127_ip) {
                case 0:
                    var2 = arguments[0];
                    var0 = undefined;
                    if (!(var2 === var0)) {
                        _fun30127_ip = 22;
                        continue _fun30127
                    }
                case 9:
                    var0 = _closure1_slot52;
                    var2 = var0.DEFAULT;
                case 22:
                    var0 = _closure1_slot52;
                    var0 = var0.DEFAULT;
                    var0 = var2 === var0;
                    if (!var0) {
                        _fun30127_ip = 57;
                        continue _fun30127
                    }
                case 42:
                    var1 = _closure1_slot121;
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
        var6 = function() { // Original name: isMediaFilterSettingLoading, environment: var5
            var0 = _closure1_slot115;
            return var0;
        };
        var4.value = var6;
        var0[42] = var4;
        var4 = {};
        var6 = 'isNativeAudioPermissionReady';
        var4.key = var6;
        var6 = function() { // Original name: isNativeAudioPermissionReady, environment: var5
            var0 = _closure1_slot120;
            return var0;
        };
        var4.value = var6;
        var0[43] = var4;
        var4 = {};
        var6 = 'getGoLiveSource';
        var4.key = var6;
        var6 = function() { // Original name: getGoLiveSource, environment: var5
            var0 = _closure1_slot73;
            return var0;
        };
        var4.value = var6;
        var0[44] = var4;
        var4 = {};
        var6 = 'getGoLiveContext';
        var4.key = var6;
        var6 = function() { // Original name: getGoLiveContext, environment: var5
            var0 = _closure1_slot79;
            return var0;
        };
        var4.value = var6;
        var0[45] = var4;
        var4 = {};
        var6 = 'getLastAudioInputDeviceChangeTimestamp';
        var4.key = var6;
        var6 = function() { // Original name: getLastAudioInputDeviceChangeTimestamp, environment: var5
            var0 = _closure1_slot80;
            return var0;
        };
        var4.value = var6;
        var0[46] = var4;
        var4 = {};
        var6 = 'getLocalPan';
        var4.key = var6;
        var6 = function(arg0) { // Original name: getLocalPan, environment: var5
            _fun30133: for (var _fun30133_ip = 0;;) switch (_fun30133_ip) {
                case 0:
                    var3 = arguments[1];
                    var2 = undefined;
                    if (!(var3 === var2)) {
                        _fun30133_ip = 22;
                        continue _fun30133
                    }
                case 9:
                    var0 = _closure1_slot52;
                    var3 = var0.DEFAULT;
                case 22:
                    var0 = _closure1_slot141;
                    var0 = var0.bind(var2)(var3);
                    var2 = var0.localPans;
                    var0 = arg0;
                    var0 = var2[var0];
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun30133_ip = 57;
                        continue _fun30133
                    }
                case 53:
                    var0 = _closure1_slot62;
                case 57:
                    return var0;
            }
        };
        var4.value = var6;
        var0[47] = var4;
        var4 = {};
        var6 = 'getLocalVolume';
        var4.key = var6;
        var6 = function(arg0) { // Original name: getLocalVolume, environment: var5
            _fun30134: for (var _fun30134_ip = 0;;) switch (_fun30134_ip) {
                case 0:
                    var3 = arguments[1];
                    var2 = undefined;
                    if (!(var3 === var2)) {
                        _fun30134_ip = 22;
                        continue _fun30134
                    }
                case 9:
                    var0 = _closure1_slot52;
                    var3 = var0.DEFAULT;
                case 22:
                    var0 = _closure1_slot52;
                    var0 = var0.STREAM;
                    if (!(var3 !== var0)) {
                        _fun30134_ip = 45;
                        continue _fun30134
                    }
                case 39:
                    var0 = _closure1_slot47;
                    _fun30134_ip = 49;
                    continue _fun30134;
                case 45:
                    var0 = _closure1_slot48;
                case 49:
                    var1 = _closure1_slot141;
                    var1 = var1.bind(var2)(var3);
                    var2 = var1.localVolumes;
                    var1 = arg0;
                    var1 = var2[var1];
                    var2 = null;
                    if (!(var2 != var1)) {
                        _fun30134_ip = 80;
                        continue _fun30134
                    }
                case 77:
                    var0 = var1;
                case 80:
                    return var0;
            }
        };
        var4.value = var6;
        var0[48] = var4;
        var4 = {};
        var6 = 'getInputVolume';
        var4.key = var6;
        var6 = function() { // Original name: getInputVolume, environment: var5
            var1 = _closure1_slot141;
            var0 = undefined;
            var0 = var1.bind(var0)();
            var0 = var0.inputVolume;
            return var0;
        };
        var4.value = var6;
        var0[49] = var4;
        var4 = {};
        var6 = 'getOutputVolume';
        var4.key = var6;
        var6 = function() { // Original name: getOutputVolume, environment: var5
            var1 = _closure1_slot141;
            var0 = undefined;
            var0 = var1.bind(var0)();
            var0 = var0.outputVolume;
            return var0;
        };
        var4.value = var6;
        var0[50] = var4;
        var4 = {};
        var6 = 'getMode';
        var4.key = var6;
        var6 = function() { // Original name: getMode, environment: var5
            _fun30137: for (var _fun30137_ip = 0;;) switch (_fun30137_ip) {
                case 0:
                    var2 = arguments[0];
                    var1 = undefined;
                    if (!(var2 === var1)) {
                        _fun30137_ip = 22;
                        continue _fun30137
                    }
                case 9:
                    var0 = _closure1_slot52;
                    var2 = var0.DEFAULT;
                case 22:
                    var0 = _closure1_slot141;
                    var0 = var0.bind(var1)(var2);
                    var0 = var0.mode;
                    return var0;
            }
        };
        var4.value = var6;
        var0[51] = var4;
        var4 = {};
        var6 = 'getModeOptions';
        var4.key = var6;
        var6 = function() { // Original name: getModeOptions, environment: var5
            _fun30138: for (var _fun30138_ip = 0;;) switch (_fun30138_ip) {
                case 0:
                    var2 = arguments[0];
                    var1 = undefined;
                    if (!(var2 === var1)) {
                        _fun30138_ip = 22;
                        continue _fun30138
                    }
                case 9:
                    var0 = _closure1_slot52;
                    var2 = var0.DEFAULT;
                case 22:
                    var0 = _closure1_slot141;
                    var0 = var0.bind(var1)(var2);
                    var0 = var0.modeOptions;
                    return var0;
            }
        };
        var4.value = var6;
        var0[52] = var4;
        var4 = {};
        var6 = 'getActiveVoiceFilter';
        var4.key = var6;
        var6 = function() { // Original name: getActiveVoiceFilter, environment: var5
            var0 = _closure1_slot109;
            return var0;
        };
        var4.value = var6;
        var0[53] = var4;
        var4 = {};
        var6 = 'getActiveVoiceFilterAppliedAt';
        var4.key = var6;
        var6 = function() { // Original name: getActiveVoiceFilterAppliedAt, environment: var5
            var0 = _closure1_slot110;
            return var0;
        };
        var4.value = var6;
        var0[54] = var4;
        var4 = {};
        var6 = 'getPreviousVoiceFilter';
        var4.key = var6;
        var6 = function() { // Original name: getPreviousVoiceFilter, environment: var5
            var0 = _closure1_slot111;
            return var0;
        };
        var4.value = var6;
        var0[55] = var4;
        var4 = {};
        var6 = 'getPreviousVoiceFilterAppliedAt';
        var4.key = var6;
        var6 = function() { // Original name: getPreviousVoiceFilterAppliedAt, environment: var5
            var0 = _closure1_slot112;
            return var0;
        };
        var4.value = var6;
        var0[56] = var4;
        var4 = {};
        var6 = 'getMostRecentlyRequestedVoiceFilter';
        var4.key = var6;
        var6 = function() { // Original name: getMostRecentlyRequestedVoiceFilter, environment: var5
            var1 = _closure1_slot141;
            var0 = undefined;
            var0 = var1.bind(var0)();
            var0 = var0.mostRecentlyRequestedVoiceFilter;
            return var0;
        };
        var4.value = var6;
        var0[57] = var4;
        var4 = {};
        var6 = 'getVoiceFilterPlaybackEnabled';
        var4.key = var6;
        var6 = function() { // Original name: getVoiceFilterPlaybackEnabled, environment: var5
            var1 = _closure1_slot141;
            var0 = undefined;
            var0 = var1.bind(var0)();
            var0 = var0.voiceFilterPlaybackEnabled;
            return var0;
        };
        var4.value = var6;
        var0[58] = var4;
        var4 = {};
        var6 = 'getShortcuts';
        var4.key = var6;
        var6 = function() { // Original name: getShortcuts, environment: var5
            var0 = {};
            var _closure3_slot0 = var0;
            var5 = _closure1_slot1;
            var4 = _closure1_slot3;
            var3 = 40;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var5.bind(var3)(var4);
            var3 = var4.each;
            var2 = _closure1_slot75;
            var1 = function(arg0, arg1) { // Environment: var1
                _fun30146: for (var _fun30146_ip = 0;;) switch (_fun30146_ip) {
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
                            _fun30146_ip = 57;
                            continue _fun30146
                        }
                    case 43:
                        var4 = _closure1_slot76;
                        var3 = var4.has;
                        var0 = var3.bind(var4)(var2);
                    case 57:
                        if (!var0) {
                            _fun30146_ip = 71;
                            continue _fun30146
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
        var0[59] = var4;
        var4 = {};
        var6 = 'getInputDeviceId';
        var4.key = var6;
        var6 = function() { // Original name: getInputDeviceId, environment: var5
            var3 = _closure1_slot161;
            var2 = _closure1_slot81;
            var0 = _closure1_slot141;
            var1 = undefined;
            var0 = var0.bind(var1)();
            var0 = var0.inputDeviceId;
            var0 = var3.bind(var1)(var2, var0);
            return var0;
        };
        var4.value = var6;
        var0[60] = var4;
        var4 = {};
        var6 = 'getOutputDeviceId';
        var4.key = var6;
        var6 = function() { // Original name: getOutputDeviceId, environment: var5
            var3 = _closure1_slot161;
            var2 = _closure1_slot82;
            var0 = _closure1_slot141;
            var1 = undefined;
            var0 = var0.bind(var1)();
            var0 = var0.outputDeviceId;
            var0 = var3.bind(var1)(var2, var0);
            return var0;
        };
        var4.value = var6;
        var0[61] = var4;
        var4 = {};
        var6 = 'getVideoDeviceId';
        var4.key = var6;
        var6 = function() { // Original name: getVideoDeviceId, environment: var5
            var3 = _closure1_slot161;
            var2 = _closure1_slot83;
            var0 = _closure1_slot141;
            var1 = undefined;
            var0 = var0.bind(var1)();
            var0 = var0.videoDeviceId;
            var0 = var3.bind(var1)(var2, var0);
            return var0;
        };
        var4.value = var6;
        var0[62] = var4;
        var4 = {};
        var6 = 'getInputDevices';
        var4.key = var6;
        var6 = function() { // Original name: getInputDevices, environment: var5
            var0 = _closure1_slot81;
            return var0;
        };
        var4.value = var6;
        var0[63] = var4;
        var4 = {};
        var6 = 'getOutputDevices';
        var4.key = var6;
        var6 = function() { // Original name: getOutputDevices, environment: var5
            var0 = _closure1_slot82;
            return var0;
        };
        var4.value = var6;
        var0[64] = var4;
        var4 = {};
        var6 = 'getVideoDevices';
        var4.key = var6;
        var6 = function() { // Original name: getVideoDevices, environment: var5
            var0 = _closure1_slot83;
            return var0;
        };
        var4.value = var6;
        var0[65] = var4;
        var4 = {};
        var6 = 'getEchoCancellation';
        var4.key = var6;
        var6 = function() { // Original name: getEchoCancellation, environment: var5
            _fun30153: for (var _fun30153_ip = 0;;) switch (_fun30153_ip) {
                case 0:
                    var2 = _closure1_slot141;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    var3 = _closure1_slot19;
                    var2 = var3.hasEchoCancellation;
                    var0 = var1.inputDeviceId;
                    var0 = var2.bind(var3)(var0);
                    if (var0) {
                        _fun30153_ip = 43;
                        continue _fun30153
                    }
                case 37:
                    var0 = var1.echoCancellation;
                case 43:
                    return var0;
            }
        };
        var4.value = var6;
        var0[66] = var4;
        var4 = {};
        var6 = 'getSidechainCompression';
        var4.key = var6;
        var6 = function() { // Original name: getSidechainCompression, environment: var5
            _fun30154: for (var _fun30154_ip = 0;;) switch (_fun30154_ip) {
                case 0:
                    var3 = _closure1_slot71;
                    var2 = var3.supports;
                    var0 = _closure1_slot46;
                    var0 = var0.SIDECHAIN_COMPRESSION;
                    var0 = var2.bind(var3)(var0);
                    if (!var0) {
                        _fun30154_ip = 47;
                        continue _fun30154
                    }
                case 31:
                    var2 = _closure1_slot141;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    var0 = var1.sidechainCompression;
                case 47:
                    return var0;
            }
        };
        var4.value = var6;
        var0[67] = var4;
        var4 = {};
        var6 = 'getSidechainCompressionStrength';
        var4.key = var6;
        var6 = function() { // Original name: getSidechainCompressionStrength, environment: var5
            var1 = _closure1_slot141;
            var0 = undefined;
            var0 = var1.bind(var0)();
            var0 = var0.sidechainCompressionStrength;
            return var0;
        };
        var4.value = var6;
        var0[68] = var4;
        var4 = {};
        var6 = 'getH265Enabled';
        var4.key = var6;
        var6 = function() { // Original name: getH265Enabled, environment: var5
            var1 = _closure1_slot141;
            var0 = undefined;
            var0 = var1.bind(var0)();
            var0 = var0.h265Enabled;
            return var0;
        };
        var4.value = var6;
        var0[69] = var4;
        var4 = {};
        var6 = 'hasH265HardwareDecode';
        var4.key = var6;
        var6 = function() { // Original name: hasH265HardwareDecode, environment: var5
            _fun30157: for (var _fun30157_ip = 0;;) switch (_fun30157_ip) {
                case 0:
                    var2 = _closure1_slot117;
                    var0 = null;
                    var0 = var0 !== var2;
                    if (!var0) {
                        _fun30157_ip = 20;
                        continue _fun30157
                    }
                case 16:
                    var0 = _closure1_slot117;
                case 20:
                    return var0;
            }
        };
        var4.value = var6;
        var0[70] = var4;
        var4 = {};
        var6 = 'getLoopback';
        var4.key = var6;
        var6 = function() { // Original name: getLoopback, environment: var5
            var0 = _closure1_slot123;
            var1 = var0.size;
            var0 = 0;
            var0 = var1 > var0;
            return var0;
        };
        var4.value = var6;
        var0[71] = var4;
        var4 = {};
        var6 = 'getLoopbackReasons';
        var4.key = var6;
        var6 = function() { // Original name: getLoopbackReasons, environment: var5
            var0 = _closure1_slot123;
            return var0;
        };
        var4.value = var6;
        var0[72] = var4;
        var4 = {};
        var6 = 'getNoiseSuppression';
        var4.key = var6;
        var6 = function() { // Original name: getNoiseSuppression, environment: var5
            _fun30160: for (var _fun30160_ip = 0;;) switch (_fun30160_ip) {
                case 0:
                    var2 = _closure1_slot141;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    var3 = _closure1_slot19;
                    var2 = var3.hasNoiseSuppression;
                    var0 = var1.inputDeviceId;
                    var0 = var2.bind(var3)(var0);
                    if (var0) {
                        _fun30160_ip = 43;
                        continue _fun30160
                    }
                case 37:
                    var0 = var1.noiseSuppression;
                case 43:
                    return var0;
            }
        };
        var4.value = var6;
        var0[73] = var4;
        var4 = {};
        var6 = 'getAutomaticGainControl';
        var4.key = var6;
        var6 = function() { // Original name: getAutomaticGainControl, environment: var5
            _fun30161: for (var _fun30161_ip = 0;;) switch (_fun30161_ip) {
                case 0:
                    var2 = _closure1_slot141;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    var3 = _closure1_slot19;
                    var2 = var3.hasAutomaticGainControl;
                    var0 = var1.inputDeviceId;
                    var0 = var2.bind(var3)(var0);
                    if (var0) {
                        _fun30161_ip = 43;
                        continue _fun30161
                    }
                case 37:
                    var0 = var1.automaticGainControl;
                case 43:
                    return var0;
            }
        };
        var4.value = var6;
        var0[74] = var4;
        var4 = {};
        var6 = 'getBypassSystemInputProcessing';
        var4.key = var6;
        var6 = function() { // Original name: getBypassSystemInputProcessing, environment: var5
            var1 = _closure1_slot141;
            var0 = undefined;
            var0 = var1.bind(var0)();
            var0 = var0.bypassSystemInputProcessing;
            return var0;
        };
        var4.value = var6;
        var0[75] = var4;
        var4 = {};
        var6 = 'getNoiseCancellation';
        var4.key = var6;
        var6 = function() { // Original name: getNoiseCancellation, environment: var5
            var1 = _closure1_slot141;
            var0 = undefined;
            var0 = var1.bind(var0)();
            var0 = var0.noiseCancellation;
            return var0;
        };
        var4.value = var6;
        var0[76] = var4;
        var4 = {};
        var6 = 'getHardwareEncoding';
        var4.key = var6;
        var6 = function() { // Original name: getHardwareEncoding, environment: var5
            var0 = _closure1_slot66;
            return var0;
        };
        var4.value = var6;
        var0[77] = var4;
        var4 = {};
        var6 = 'getEnableSilenceWarning';
        var4.key = var6;
        var6 = function() { // Original name: getEnableSilenceWarning, environment: var5
            var1 = _closure1_slot141;
            var0 = undefined;
            var0 = var1.bind(var0)();
            var0 = var0.silenceWarning;
            return var0;
        };
        var4.value = var6;
        var0[78] = var4;
        var4 = {};
        var6 = 'getDebugLogging';
        var4.key = var6;
        var6 = function() { // Original name: getDebugLogging, environment: var5
            var1 = _closure1_slot71;
            var0 = var1.getDebugLogging;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[79] = var4;
        var4 = {};
        var6 = 'getQoS';
        var4.key = var6;
        var6 = function() { // Original name: getQoS, environment: var5
            var1 = _closure1_slot141;
            var0 = undefined;
            var0 = var1.bind(var0)();
            var0 = var0.qos;
            return var0;
        };
        var4.value = var6;
        var0[80] = var4;
        var4 = {};
        var6 = 'getAttenuation';
        var4.key = var6;
        var6 = function() { // Original name: getAttenuation, environment: var5
            var1 = _closure1_slot141;
            var0 = undefined;
            var0 = var1.bind(var0)();
            var0 = var0.attenuation;
            return var0;
        };
        var4.value = var6;
        var0[81] = var4;
        var4 = {};
        var6 = 'getAttenuateWhileSpeakingSelf';
        var4.key = var6;
        var6 = function() { // Original name: getAttenuateWhileSpeakingSelf, environment: var5
            var1 = _closure1_slot141;
            var0 = undefined;
            var0 = var1.bind(var0)();
            var0 = var0.attenuateWhileSpeakingSelf;
            return var0;
        };
        var4.value = var6;
        var0[82] = var4;
        var4 = {};
        var6 = 'getAttenuateWhileSpeakingOthers';
        var4.key = var6;
        var6 = function() { // Original name: getAttenuateWhileSpeakingOthers, environment: var5
            var1 = _closure1_slot141;
            var0 = undefined;
            var0 = var1.bind(var0)();
            var0 = var0.attenuateWhileSpeakingOthers;
            return var0;
        };
        var4.value = var6;
        var0[83] = var4;
        var4 = {};
        var6 = 'getAudioSubsystem';
        var4.key = var6;
        var6 = function() { // Original name: getAudioSubsystem, environment: var5
            _fun30171: for (var _fun30171_ip = 0;;) switch (_fun30171_ip) {
                case 0:
                    var0 = _closure1_slot154;
                    var2 = undefined;
                    var0 = var0.bind(var2)();
                    if (!var0) {
                        _fun30171_ip = 33;
                        continue _fun30171
                    }
                case 16:
                    var0 = _closure1_slot141;
                    var0 = var0.bind(var2)();
                    var0 = var0.automaticAudioSubsystem;
                    if (var0) {
                        _fun30171_ip = 49;
                        continue _fun30171
                    }
                case 33:
                    var2 = _closure1_slot71;
                    var0 = var2.getAudioSubsystem;
                    var0 = var0.bind(var2)();
                    _fun30171_ip = 59;
                    continue _fun30171;
                case 49:
                    var1 = _closure1_slot45;
                    var0 = var1.AUTOMATIC;
                case 59:
                    return var0;
            }
        };
        var4.value = var6;
        var0[84] = var4;
        var4 = {};
        var6 = 'getMLSSigningKey';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: getMLSSigningKey, environment: var5
            var3 = _closure1_slot71;
            var2 = var3.getMLSSigningKey;
            var1 = arg0;
            var0 = arg1;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[85] = var4;
        var4 = {};
        var6 = 'getActiveInputProfile';
        var4.key = var6;
        var6 = function() { // Original name: getActiveInputProfile, environment: var5
            var1 = _closure1_slot141;
            var0 = undefined;
            var0 = var1.bind(var0)();
            var0 = var0.activeInputProfile;
            return var0;
        };
        var4.value = var6;
        var0[86] = var4;
        var4 = {};
        var6 = 'isInputProfileCustom';
        var4.key = var6;
        var6 = function() { // Original name: isInputProfileCustom, environment: var5
            _fun30174: for (var _fun30174_ip = 0;;) switch (_fun30174_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.getActiveInputProfile;
                    var2 = var0.bind(var1)();
                    var0 = null;
                    var0 = var0 == var2;
                    if (var0) {
                        _fun30174_ip = 39;
                        continue _fun30174
                    }
                case 22:
                    var1 = _closure1_slot44;
                    var1 = var1.CUSTOM;
                    var0 = var2 === var1;
                case 39:
                    return var0;
            }
        };
        var4.value = var6;
        var0[87] = var4;
        var4 = {};
        var6 = 'getSettings';
        var4.key = var6;
        var6 = function() { // Original name: getSettings, environment: var5
            _fun30175: for (var _fun30175_ip = 0;;) switch (_fun30175_ip) {
                case 0:
                    var2 = arguments[0];
                    var1 = undefined;
                    if (!(var2 === var1)) {
                        _fun30175_ip = 22;
                        continue _fun30175
                    }
                case 9:
                    var0 = _closure1_slot52;
                    var2 = var0.DEFAULT;
                case 22:
                    var0 = _closure1_slot141;
                    var0 = var0.bind(var1)(var2);
                    return var0;
            }
        };
        var4.value = var6;
        var0[88] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() { // Original name: getState, environment: var5
            var0 = {};
            var2 = _closure1_slot75;
            var0.settingsByContext = var2;
            var2 = _closure1_slot81;
            var0.inputDevices = var2;
            var2 = _closure1_slot82;
            var0.outputDevices = var2;
            var2 = _closure1_slot125;
            var0.appSupported = var2;
            var2 = _closure1_slot103;
            var0.krispModuleLoaded = var2;
            var2 = _closure1_slot104;
            var0.krispVersion = var2;
            var2 = _closure1_slot105;
            var0.krispSuppressionLevel = var2;
            var2 = _closure1_slot73;
            var0.goLiveSource = var2;
            var1 = _closure1_slot79;
            var0.goLiveContext = var1;
            return var0;
        };
        var4.value = var6;
        var0[89] = var4;
        var4 = {};
        var6 = 'getInputDetected';
        var4.key = var6;
        var6 = function() { // Original name: getInputDetected, environment: var5
            var0 = _closure1_slot98;
            return var0;
        };
        var4.value = var6;
        var0[90] = var4;
        var4 = {};
        var6 = 'getNoInputDetectedNotice';
        var4.key = var6;
        var6 = function() { // Original name: getNoInputDetectedNotice, environment: var5
            var0 = _closure1_slot100;
            return var0;
        };
        var4.value = var6;
        var0[91] = var4;
        var4 = {};
        var6 = 'getPacketDelay';
        var4.key = var6;
        var6 = function() { // Original name: getPacketDelay, environment: var5
            _fun30179: for (var _fun30179_ip = 0;;) switch (_fun30179_ip) {
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
                        _fun30179_ip = 81;
                        continue _fun30179
                    }
                case 39:
                    var3 = var2.getMode;
                    var3 = var3.bind(var2)();
                    var1 = _closure1_slot27;
                    var1 = var1.VOICE_ACTIVITY;
                    var0 = 0;
                    if (!(var3 === var1)) {
                        _fun30179_ip = 81;
                        continue _fun30179
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
        var0[92] = var4;
        var4 = {};
        var6 = 'setCanHavePriority';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: setCanHavePriority, environment: var5
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = arg1;
            var _closure3_slot1 = var1;
            var2 = _closure1_slot71;
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
        var0[93] = var4;
        var4 = {};
        var6 = 'isInteractionRequired';
        var4.key = var6;
        var6 = function() { // Original name: isInteractionRequired, environment: var5
            var0 = _closure1_slot78;
            return var0;
        };
        var4.value = var6;
        var0[94] = var4;
        var4 = {};
        var6 = 'getVideoHook';
        var4.key = var6;
        var6 = function() { // Original name: getVideoHook, environment: var5
            var1 = _closure1_slot141;
            var0 = undefined;
            var0 = var1.bind(var0)();
            var0 = var0.videoHook;
            return var0;
        };
        var4.value = var6;
        var0[95] = var4;
        var4 = {};
        var6 = 'supportsVideoHook';
        var4.key = var6;
        var6 = function() { // Original name: supportsVideoHook, environment: var5
            var2 = _closure1_slot71;
            var1 = var2.supports;
            var0 = _closure1_slot46;
            var0 = var0.VIDEO_HOOK;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[96] = var4;
        var4 = {};
        var6 = 'getExperimentalSoundshare';
        var4.key = var6;
        var6 = function() { // Original name: getExperimentalSoundshare, environment: var5
            _fun30185: for (var _fun30185_ip = 0;;) switch (_fun30185_ip) {
                case 0:
                    var3 = this;
                    var1 = _closure1_slot141;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    var2 = var0.experimentalSoundshare2;
                    var0 = var3.supportsExperimentalSoundshare;
                    var0 = var0.bind(var3)();
                    if (!var0) {
                        _fun30185_ip = 70;
                        continue _fun30185
                    }
                case 37:
                    var1 = null;
                    var1 = var1 == var2;
                    if (var1) {
                        _fun30185_ip = 49;
                        continue _fun30185
                    }
                case 46:
                    var1 = var2;
                case 49:
                    if (var1) {
                        _fun30185_ip = 67;
                        continue _fun30185
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
        var0[97] = var4;
        var4 = {};
        var6 = 'supportsExperimentalSoundshare';
        var4.key = var6;
        var6 = function() { // Original name: supportsExperimentalSoundshare, environment: var5
            _fun30186: for (var _fun30186_ip = 0;;) switch (_fun30186_ip) {
                case 0:
                    var3 = _closure1_slot71;
                    var2 = var3.supports;
                    var0 = _closure1_slot46;
                    var0 = var0.EXPERIMENTAL_SOUNDSHARE;
                    var0 = var2.bind(var3)(var0);
                    if (!var0) {
                        _fun30186_ip = 121;
                        continue _fun30186
                    }
                case 31:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var3 = 68;
                    var3 = var2[var3];
                    var7 = undefined;
                    var4 = var5.bind(var7)(var3);
                    var3 = var4.satisfies;
                    var8 = 69;
                    var2 = var2[var8];
                    var5 = var5.bind(var7)(var2);
                    var2 = null;
                    var5 = var2 == var5;
                    var2 = undefined;
                    if (var5) {
                        _fun30186_ip = 111;
                        continue _fun30186
                    }
                case 82:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var5 = var5[var8];
                    var5 = var6.bind(var7)(var5);
                    var5 = var5.os;
                    var2 = var5.release;
                case 111:
                    var1 = _closure1_slot39;
                    var0 = var3.bind(var4)(var2, var1);
                case 121:
                    return var0;
            }
        };
        var4.value = var6;
        var0[98] = var4;
        var4 = {};
        var6 = 'supportsHookSoundshare';
        var4.key = var6;
        var6 = function() { // Original name: supportsHookSoundshare, environment: var5
            _fun30187: for (var _fun30187_ip = 0;;) switch (_fun30187_ip) {
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
                        _fun30187_ip = 63;
                        continue _fun30187
                    }
                case 38:
                    var4 = _closure1_slot71;
                    var3 = var4.supports;
                    var2 = _closure1_slot46;
                    var2 = var2.SOUNDSHARE;
                    var0 = var3.bind(var4)(var2);
                case 63:
                    if (!var0) {
                        _fun30187_ip = 154;
                        continue _fun30187
                    }
                case 66:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var3 = 68;
                    var3 = var2[var3];
                    var4 = var5.bind(var7)(var3);
                    var3 = var4.satisfies;
                    var8 = 69;
                    var2 = var2[var8];
                    var5 = var5.bind(var7)(var2);
                    var2 = null;
                    var5 = var2 == var5;
                    var2 = undefined;
                    if (var5) {
                        _fun30187_ip = 144;
                        continue _fun30187
                    }
                case 115:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var5 = var5[var8];
                    var5 = var6.bind(var7)(var5);
                    var5 = var5.os;
                    var2 = var5.release;
                case 144:
                    var1 = _closure1_slot38;
                    var0 = var3.bind(var4)(var2, var1);
                case 154:
                    return var0;
            }
        };
        var4.value = var6;
        var0[99] = var4;
        var4 = {};
        var6 = 'getUseSystemScreensharePicker';
        var4.key = var6;
        var6 = function() { // Original name: getUseSystemScreensharePicker, environment: var5
            _fun30188: for (var _fun30188_ip = 0;;) switch (_fun30188_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.supportsSystemScreensharePicker;
                    var0 = var0.bind(var1)();
                    var2 = _closure1_slot141;
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
                        _fun30188_ip = 79;
                        continue _fun30188
                    }
                case 67:
                    var3 = null;
                    if (!(var3 != var2)) {
                        _fun30188_ip = 76;
                        continue _fun30188
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
        var0[100] = var4;
        var4 = {};
        var6 = 'supportsSystemScreensharePicker';
        var4.key = var6;
        var6 = function() { // Original name: supportsSystemScreensharePicker, environment: var5
            var2 = _closure1_slot71;
            var1 = var2.supports;
            var0 = _closure1_slot46;
            var0 = var0.NATIVE_SCREENSHARE_PICKER;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[101] = var4;
        var4 = {};
        var6 = 'getUseVaapiEncoder';
        var4.key = var6;
        var6 = function() { // Original name: getUseVaapiEncoder, environment: var5
            var0 = _closure1_slot130;
            return var0;
        };
        var4.value = var6;
        var0[102] = var4;
        var4 = {};
        var6 = 'getUseGamescopeCapture';
        var4.key = var6;
        var6 = function() { // Original name: getUseGamescopeCapture, environment: var5
            var0 = _closure1_slot129;
            return var0;
        };
        var4.value = var6;
        var0[103] = var4;
        var4 = {};
        var6 = 'getEverSpeakingWhileMuted';
        var4.key = var6;
        var6 = function() { // Original name: getEverSpeakingWhileMuted, environment: var5
            var0 = _closure1_slot93;
            return var0;
        };
        var4.value = var6;
        var0[104] = var4;
        var4 = {};
        var6 = 'getSpeakingWhileMuted';
        var4.key = var6;
        var6 = function() { // Original name: getSpeakingWhileMuted, environment: var5
            var0 = _closure1_slot94;
            return var0;
        };
        var4.value = var6;
        var0[105] = var4;
        var4 = {};
        var6 = 'getKrispModelOverride';
        var4.key = var6;
        var6 = function() { // Original name: getKrispModelOverride, environment: var5
            var0 = _closure1_slot106;
            return var0;
        };
        var4.value = var6;
        var0[106] = var4;
        var4 = {};
        var6 = 'getKrispModels';
        var4.key = var6;
        var6 = function() { // Original name: getKrispModels, environment: var5
            var0 = _closure1_slot107;
            return var0;
        };
        var4.value = var6;
        var0[107] = var4;
        var4 = {};
        var6 = 'getKrispVadActivationThreshold';
        var4.key = var6;
        var6 = function() { // Original name: getKrispVadActivationThreshold, environment: var5
            _fun30196: for (var _fun30196_ip = 0;;) switch (_fun30196_ip) {
                case 0:
                    var1 = _closure1_slot141;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    var0 = var0.modeOptions;
                    var1 = var0.vadKrispActivationThreshold;
                    var0 = null;
                    var2 = var0 != var1;
                    var0 = 0.5;
                    if (!var2) {
                        _fun30196_ip = 47;
                        continue _fun30196
                    }
                case 44:
                    var0 = var1;
                case 47:
                    return var0;
            }
        };
        var4.value = var6;
        var0[108] = var4;
        var4 = {};
        var6 = 'hasActiveCallKitCall';
        var4.key = var6;
        var6 = function() { // Original name: hasActiveCallKitCall, environment: var5
            var0 = _closure1_slot128;
            return var0;
        };
        var4.value = var6;
        var0[109] = var4;
        var4 = {};
        var6 = 'setHasActiveCallKitCall';
        var4.key = var6;
        var6 = function(arg0) { // Original name: setHasActiveCallKitCall, environment: var5
            var0 = arg0;
            _closure1_slot128 = var0;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[110] = var4;
        var4 = {};
        var6 = 'supportsScreenSoundshare';
        var4.key = var6;
        var6 = function() { // Original name: supportsScreenSoundshare, environment: var5
            _fun30199: for (var _fun30199_ip = 0;;) switch (_fun30199_ip) {
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
                        _fun30199_ip = 183;
                        continue _fun30199
                    }
                case 44:
                    var1 = _closure1_slot0;
                    var0 = _closure1_slot3;
                    var0 = var0[var4];
                    var1 = var1.bind(var3)(var0);
                    var0 = var1.isWindows;
                    var0 = var0.bind(var1)();
                    if (var0) {
                        _fun30199_ip = 137;
                        continue _fun30199
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
                        _fun30199_ip = 135;
                        continue _fun30199
                    }
                case 110:
                    var6 = _closure1_slot71;
                    var4 = var6.supports;
                    var1 = _closure1_slot46;
                    var1 = var1.SCREEN_SOUNDSHARE;
                    var0 = var4.bind(var6)(var1);
                case 135:
                    _fun30199_ip = 178;
                    continue _fun30199;
                case 137:
                    var6 = _closure1_slot71;
                    var4 = var6.supports;
                    var1 = _closure1_slot46;
                    var1 = var1.SCREEN_SOUNDSHARE;
                    var1 = var4.bind(var6)(var1);
                    if (!var1) {
                        _fun30199_ip = 175;
                        continue _fun30199
                    }
                case 165:
                    var4 = var5.getExperimentalSoundshare;
                    var1 = var4.bind(var5)();
                case 175:
                    var0 = var1;
                case 178:
                    _fun30199_ip = 313;
                    continue _fun30199;
                case 183:
                    var5 = _closure1_slot71;
                    var4 = var5.supports;
                    var1 = _closure1_slot46;
                    var1 = var1.SOUNDSHARE;
                    var1 = var4.bind(var5)(var1);
                    if (!var1) {
                        _fun30199_ip = 299;
                        continue _fun30199
                    }
                case 211:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var6 = 68;
                    var6 = var4[var6];
                    var7 = var5.bind(var3)(var6);
                    var6 = var7.satisfies;
                    var9 = 69;
                    var4 = var4[var9];
                    var5 = var5.bind(var3)(var4);
                    var4 = null;
                    var4 = var4 == var5;
                    var5 = undefined;
                    if (var4) {
                        _fun30199_ip = 289;
                        continue _fun30199
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
                        _fun30199_ip = 310;
                        continue _fun30199
                    }
                case 302:
                    var2 = _closure1_slot153;
                    var1 = var2.bind(var3)();
                case 310:
                    var0 = var1;
                case 313:
                    return var0;
            }
        };
        var4.value = var6;
        var0[111] = var4;
        var4 = {};
        var6 = 'getSystemMicrophoneMode';
        var4.key = var6;
        var6 = function() { // Original name: getSystemMicrophoneMode, environment: var5
            _fun30200: for (var _fun30200_ip = 0;;) switch (_fun30200_ip) {
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
                        _fun30200_ip = 109;
                        continue _fun30200
                    }
                case 41:
                    var2 = _closure1_slot0;
                    var0 = _closure1_slot3;
                    var0 = var0[var5];
                    var2 = var2.bind(var3)(var0);
                    var0 = var2.isMac;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun30200_ip = 103;
                        continue _fun30200
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
                        _fun30200_ip = 107;
                        continue _fun30200
                    }
                case 103:
                    var0 = _closure1_slot124;
                case 107:
                    _fun30200_ip = 179;
                    continue _fun30200;
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
                        _fun30200_ip = 176;
                        continue _fun30200
                    }
                case 144:
                    var4 = var4.effects;
                    var2 = var2 == var4;
                    var1 = undefined;
                    if (var2) {
                        _fun30200_ip = 176;
                        continue _fun30200
                    }
                case 159:
                    var3 = var4.find;
                    var2 = function(arg0) { // Environment: var2
                        var1 = _closure1_slot67;
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
        var0[112] = var4;
        var4 = {};
        var6 = 'getVideoStreamParameters';
        var4.key = var6;
        var6 = function() { // Original name: getVideoStreamParameters, environment: var5
            _fun30202: for (var _fun30202_ip = 0;;) switch (_fun30202_ip) {
                case 0:
                    var5 = arguments[0];
                    var6 = this;
                    var0 = undefined;
                    if (!(var5 === var0)) {
                        _fun30202_ip = 25;
                        continue _fun30202
                    }
                case 12:
                    var0 = _closure1_slot52;
                    var5 = var0.DEFAULT;
                case 25:
                    var1 = var6.supports;
                    var0 = _closure1_slot46;
                    var0 = var0.VIDEO;
                    var0 = var1.bind(var6)(var0);
                    if (var0) {
                        _fun30202_ip = 58;
                        continue _fun30202
                    }
                case 52:
                    var0 = new Array(0);
                    _fun30202_ip = 131;
                    continue _fun30202;
                case 58:
                    var2 = {};
                    var1 = '100';
                    var2.rid = var1;
                    var1 = _closure1_slot52;
                    var1 = var1.DEFAULT;
                    if (!(var5 !== var1)) {
                        _fun30202_ip = 97;
                        continue _fun30202
                    }
                case 85:
                    var1 = _closure1_slot54;
                    var1 = var1.SCREEN;
                    _fun30202_ip = 107;
                    continue _fun30202;
                case 97:
                    var4 = _closure1_slot54;
                    var1 = var4.VIDEO;
                case 107:
                    var2.type = var1;
                    var1 = _closure1_slot58;
                    var2.quality = var1;
                    var1 = new Array(1);
                    var1[0] = var2;
                    var0 = var1;
                case 131:
                    var1 = var6.isSimulcastSupported;
                    var1 = var1.bind(var6)();
                    if (!var1) {
                        _fun30202_ip = 178;
                        continue _fun30202
                    }
                case 146:
                    var2 = _closure1_slot52;
                    var2 = var2.DEFAULT;
                    var2 = var5 === var2;
                    if (var2) {
                        _fun30202_ip = 175;
                        continue _fun30202
                    }
                case 163:
                    var4 = var6.goLiveSimulcastEnabled;
                    var2 = var4.bind(var6)();
                case 175:
                    var1 = var2;
                case 178:
                    if (!var1) {
                        _fun30202_ip = 253;
                        continue _fun30202
                    }
                case 181:
                    var2 = var0.push;
                    var1 = {};
                    var4 = '50';
                    var1.rid = var4;
                    var4 = _closure1_slot52;
                    var4 = var4.DEFAULT;
                    if (!(var5 !== var4)) {
                        _fun30202_ip = 225;
                        continue _fun30202
                    }
                case 213:
                    var4 = _closure1_slot54;
                    var4 = var4.SCREEN;
                    _fun30202_ip = 235;
                    continue _fun30202;
                case 225:
                    var5 = _closure1_slot54;
                    var4 = var5.VIDEO;
                case 235:
                    var1.type = var4;
                    var3 = _closure1_slot59;
                    var1.quality = var3;
                    var1 = var2.bind(var0)(var1);
                case 253:
                    return var0;
            }
        };
        var4.value = var6;
        var0[113] = var4;
        var4 = {};
        var6 = 'fetchAsyncResources';
        var4.key = var6;
        var6 = function() { // Original name: fetchAsyncResources, environment: var5
            _fun30203: for (var _fun30203_ip = 0;;) switch (_fun30203_ip) {
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
                        _fun30203_ip = 108;
                        continue _fun30203
                    }
                case 47:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var1 = 78;
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
                    var1 = _closure1_slot71;
                    var0 = var1.fetchAsyncResources;
                    var0 = var0.bind(var1)(var2);
                    return var0;
            }
        };
        var4.value = var6;
        var0[114] = var4;
        var4 = {};
        var6 = 'startDavePreload';
        var4.key = var6;
        var6 = function() { // Original name: startDavePreload, environment: var5
            _fun30204: for (var _fun30204_ip = 0;;) switch (_fun30204_ip) {
                case 0:
                    var1 = _closure1_slot116;
                    if (var1) {
                        _fun30204_ip = 91;
                        continue _fun30204
                    }
                case 10:
                    var3 = true;
                    _closure1_slot116 = var3;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 30;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var1 = var2.isWeb;
                    var1 = var1.bind(var2)();
                    if (!var1) {
                        _fun30204_ip = 91;
                        continue _fun30204
                    }
                case 51:
                    var2 = _closure1_slot71;
                    var1 = var2.fetchAsyncResources;
                    var0 = {};
                    var0.fetchDave = var3;
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.catch;
                    var0 = function(arg0) { // Environment: var0
                        var3 = arg0;
                        var4 = _closure1_slot60;
                        var2 = var4.warn;
                        var1 = 'DAVE preload failed:';
                        var1 = var2.bind(var4)(var1, var3);
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var0 = 83;
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
        var0[115] = var4;
        var4 = {};
        var6 = 'getSupportedSecureFramesProtocolVersion';
        var4.key = var6;
        var6 = function() { // Original name: getSupportedSecureFramesProtocolVersion, environment: var5
            _fun30206: for (var _fun30206_ip = 0;;) switch (_fun30206_ip) {
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
                        _fun30206_ip = 100;
                        continue _fun30206
                    }
                case 38:
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var0 = 78;
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
                        _fun30206_ip = 100;
                        continue _fun30206
                    }
                case 96:
                    var0 = 0;
                    return var0;
                case 100:
                    var1 = _closure1_slot71;
                    var0 = var1.getSupportedSecureFramesProtocolVersion;
                    var1 = var0.bind(var1)();
                    var0 = 114;
                    if (!(var0 === var1)) {
                        _fun30206_ip = 124;
                        continue _fun30206
                    }
                case 121:
                    var1 = 1;
                case 124:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var0 = 78;
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
                        _fun30206_ip = 244;
                        continue _fun30206
                    }
                case 214:
                    var5 = var0.allowOptIn;
                    var0 = 0;
                    if (!var5) {
                        _fun30206_ip = 262;
                        continue _fun30206
                    }
                case 225:
                    var5 = _closure1_slot14;
                    var3 = var5.getPersistentCodesEnabled;
                    var3 = var3.bind(var5)();
                    var0 = 0;
                    if (!var3) {
                        _fun30206_ip = 262;
                        continue _fun30206
                    }
                case 244:
                    var2 = var2.protocolVersionFloor;
                    var2 = var1 >= var2;
                    var0 = 0;
                    if (!var2) {
                        _fun30206_ip = 262;
                        continue _fun30206
                    }
                case 259:
                    var0 = var1;
                case 262:
                    return var0;
            }
        };
        var4.value = var6;
        var0[116] = var4;
        var4 = {};
        var6 = 'hasClipsSource';
        var4.key = var6;
        var6 = function() { // Original name: hasClipsSource, environment: var5
            var1 = _closure1_slot74;
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var4.value = var6;
        var0[117] = var4;
        var4 = {};
        var6 = 'getGpuBrand';
        var4.key = var6;
        var5 = function() { // Original name: getGpuBrand, environment: var5
            var0 = _closure1_slot126;
            return var0;
        };
        var4.value = var5;
        var0[118] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var9 = var9.bind(var0)(var11);
    var9.displayName = var3;
    var3 = 63;
    var3 = var6[var3];
    var27 = var8.bind(var0)(var3);
    var3 = {};
    var11 = function(arg0) { // Original name: handleVoiceChannelSelect, environment: var4
        _fun30209: for (var _fun30209_ip = 0;;) switch (_fun30209_ip) {
            case 0:
                var3 = arg0;
                var2 = var3.guildId;
                var1 = var3.channelId;
                var0 = var3.currentVoiceChannelId;
                var5 = var3.video;
                if (!(var0 !== var1)) {
                    _fun30209_ip = 46;
                    continue _fun30209
                }
            case 29:
                var4 = _closure1_slot145;
                var3 = undefined;
                var0 = null;
                var0 = var4.bind(var3)(var5, var0);
            case 46:
                var0 = null;
                if (!(var0 == var2)) {
                    _fun30209_ip = 56;
                    continue _fun30209
                }
            case 52:
                if (!(var0 == var1)) {
                    _fun30209_ip = 67;
                    continue _fun30209
                }
            case 56:
                var0 = false;
                _closure1_slot101 = var0;
                _fun30209_ip = 153;
                continue _fun30209;
            case 67:
                var1 = _closure1_slot101;
                if (var1) {
                    _fun30209_ip = 153;
                    continue _fun30209
                }
            case 77:
                var1 = true;
                _closure1_slot101 = var1;
                var1 = _closure1_slot141;
                var3 = undefined;
                var2 = var1.bind(var3)();
                var1 = var2.mute;
                if (var1) {
                    _fun30209_ip = 108;
                    continue _fun30209
                }
            case 102:
                var1 = var2.deaf;
            case 108:
                if (!var1) {
                    _fun30209_ip = 153;
                    continue _fun30209
                }
            case 111:
                var2 = _closure1_slot156;
                var1 = {
                    'deaf': false,
                    'mute': false
                };
                var1 = var2.bind(var3)(var1);
                var2 = _closure1_slot71;
                var1 = var2.eachConnection;
                var0 = _closure1_slot144;
                var0 = var1.bind(var2)(var0);
            case 153:
                var0 = undefined;
                return var0;
        }
    };
    var3.VOICE_CHANNEL_SELECT = var11;
    var11 = function(arg0) { // Original name: handleVoiceStateUpdates, environment: var4
        var0 = arg0;
        var3 = var0.voiceStates;
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun30211: for (var _fun30211_ip = 0;;) switch (_fun30211_ip) {
                case 0:
                    var0 = arg1;
                    var3 = _closure1_slot72;
                    var2 = var0.sessionId;
                    if (!(var3 !== var2)) {
                        _fun30211_ip = 90;
                        continue _fun30211
                    }
                case 20:
                    var3 = var0.userId;
                    var4 = _closure1_slot17;
                    var2 = var4.getId;
                    var2 = var2.bind(var4)();
                    var2 = var3 === var2;
                    if (!var2) {
                        _fun30211_ip = 66;
                        continue _fun30211
                    }
                case 46:
                    var4 = _closure1_slot21;
                    var3 = var4.getChannelId;
                    var4 = var3.bind(var4)();
                    var3 = null;
                    var2 = var3 == var4;
                case 66:
                    if (!var2) {
                        _fun30211_ip = 85;
                        continue _fun30211
                    }
                case 69:
                    var5 = _closure1_slot145;
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
                        _fun30211_ip = 105;
                        continue _fun30211
                    }
                case 99:
                    var2 = var0.suppress;
                case 105:
                    _closure1_slot85 = var2;
                    var2 = var0.deaf;
                    _closure1_slot88 = var2;
                    var4 = _closure1_slot71;
                    var3 = var4.eachConnection;
                    var2 = _closure1_slot144;
                    var2 = var3.bind(var4)(var2);
                    var2 = var0.guildId;
                    var4 = null;
                    var5 = var4 != var2;
                    if (!var5) {
                        _fun30211_ip = 161;
                        continue _fun30211
                    }
                case 152:
                    var2 = var0.channelId;
                    var5 = var4 != var2;
                case 161:
                    if (!var5) {
                        _fun30211_ip = 172;
                        continue _fun30211
                    }
                case 164:
                    var2 = _closure1_slot113;
                    var5 = var4 != var2;
                case 172:
                    if (!var5) {
                        _fun30211_ip = 188;
                        continue _fun30211
                    }
                case 175:
                    var3 = _closure1_slot113;
                    var2 = var0.channelId;
                    var5 = var3 !== var2;
                case 188:
                    var3 = _closure1_slot101;
                    var2 = !var3;
                    if (var3) {
                        _fun30211_ip = 207;
                        continue _fun30211
                    }
                case 198:
                    var3 = var0.channelId;
                    var2 = var4 == var3;
                case 207:
                    var4 = _closure1_slot145;
                    var3 = !var5;
                    if (var5) {
                        _fun30211_ip = 220;
                        continue _fun30211
                    }
                case 217:
                    var3 = !var2;
                case 220:
                    if (!var3) {
                        _fun30211_ip = 227;
                        continue _fun30211
                    }
                case 223:
                    var3 = _closure1_slot89;
                case 227:
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var0 = var0.channelId;
                    _closure1_slot113 = var0;
                    var0 = true;
                    return var0;
            }
        };
        var0 = false;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3.VOICE_STATE_UPDATES = var11;
    var11 = function(arg0) { // Original name: handleConnectionOpen, environment: var4
        _fun30212: for (var _fun30212_ip = 0;;) switch (_fun30212_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.sessionId;
                var _closure1_slot72 = var0;
                var5 = false;
                _closure1_slot85 = var5;
                _closure1_slot88 = var5;
                var2 = _closure1_slot141;
                var0 = undefined;
                var3 = var2.bind(var0)();
                var2 = _closure1_slot154;
                var2 = var2.bind(var0)();
                if (!var2) {
                    _fun30212_ip = 96;
                    continue _fun30212
                }
            case 47:
                var2 = _closure1_slot155;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun30212_ip = 77;
                    continue _fun30212
                }
            case 58:
                var2 = var3.automaticAudioSubsystem;
                if (!var2) {
                    _fun30212_ip = 96;
                    continue _fun30212
                }
            case 67:
                var2 = _closure1_slot178;
                var2 = var2.bind(var0)();
                _fun30212_ip = 96;
                continue _fun30212;
            case 77:
                var4 = _closure1_slot177;
                var2 = _closure1_slot45;
                var2 = var2.AUTOMATIC;
                var2 = var4.bind(var0)(var2);
            case 96:
                var6 = _closure1_slot71;
                var4 = var6.supports;
                var2 = _closure1_slot46;
                var2 = var2.OFFLOAD_ADM_CONTROLS;
                var2 = var4.bind(var6)(var2);
                if (!var2) {
                    _fun30212_ip = 323;
                    continue _fun30212
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
                    _fun30212_ip = 270;
                    continue _fun30212
                }
            case 168:
                var2 = var6[var9];
                var7 = var4.bind(var0)(var2);
                var2 = var7.isIOS;
                var2 = var2.bind(var7)();
                if (var2) {
                    _fun30212_ip = 217;
                    continue _fun30212
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
                    _fun30212_ip = 308;
                    continue _fun30212
                }
            case 222:
                var7 = _closure1_slot0;
                var8 = _closure1_slot3;
                var2 = 75;
                var2 = var8[var2];
                var8 = var7.bind(var0)(var2);
                var7 = var8.getAsyncAudioDeviceMobileExperimentConfig;
                var2 = {};
                var9 = 'handleConnectionOpen';
                var2.location = var9;
                var2 = var7.bind(var8)(var2);
                var5 = var2.enabled;
                _fun30212_ip = 308;
                continue _fun30212;
            case 270:
                var2 = 74;
                var2 = var6[var2];
                var6 = var4.bind(var0)(var2);
                var4 = var6.getAsyncAudioDeviceExperimentConfig;
                var2 = {};
                var7 = 'handleConnectionOpen';
                var2.location = var7;
                var2 = var4.bind(var6)(var2);
                var5 = var2.enabled;
            case 308:
                var4 = _closure1_slot71;
                var2 = var4.setOffloadAdmControls;
                var2 = var2.bind(var4)(var5);
            case 323:
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var2 = 76;
                var2 = var5[var2];
                var5 = var4.bind(var0)(var2);
                var4 = var5.isVoiceFiltersEnabled;
                var2 = {
                    'location': 'MediaEngineStore',
                    'autoTrackExposure': false
                };
                var2 = var4.bind(var5)(var2);
                if (!var2) {
                    _fun30212_ip = 383;
                    continue _fun30212
                }
            case 371:
                var4 = var3.mostRecentlyRequestedVoiceFilter;
                var3 = null;
                var2 = var3 !== var4;
            case 383:
                if (!var2) {
                    _fun30212_ip = 416;
                    continue _fun30212
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
                    _fun30212_ip = 551;
                    continue _fun30212
                }
            case 422:
                var3 = _closure1_slot16;
                var2 = var3.getLastInitAttemptMayHaveCrashed;
                var2 = var2.bind(var3)();
                if (var2) {
                    _fun30212_ip = 473;
                    continue _fun30212
                }
            case 441:
                var3 = _closure1_slot0;
                var4 = _closure1_slot3;
                var2 = 77;
                var2 = var4[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.maybeSetupVoiceFiltersNativeModule;
                var2 = var2.bind(var3)();
                _fun30212_ip = 551;
                continue _fun30212;
            case 473:
                var3 = _closure1_slot1;
                var4 = _closure1_slot3;
                var2 = 63;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.dispatch;
                var2 = {
                    'type': 'AUDIO_SET_SELF_MUTE',
                    'mute': true,
                    'context': null,
                    'playSoundEffect': true
                };
                var5 = _closure1_slot52;
                var5 = var5.DEFAULT;
                var2.context = var5;
                var2 = var3.bind(var4)(var2);
                var3 = _closure1_slot156;
                var2 = {};
                var4 = null;
                var2.mostRecentlyRequestedVoiceFilter = var4;
                var2 = var3.bind(var0)(var2);
            case 551:
                var1 = _closure1_slot166;
                var1 = var1.bind(var0)();
                return var0;
        }
    };
    var3.CONNECTION_OPEN = var11;
    var11 = function() { // Original name: handleConnectionClosed, environment: var4
        var0 = null;
        _closure1_slot72 = var0;
        var0 = undefined;
        return var0;
    };
    var3.CONNECTION_CLOSED = var11;
    var11 = function() { // Original name: handlePostConnectionOpen, environment: var4
        _fun30214: for (var _fun30214_ip = 0;;) switch (_fun30214_ip) {
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
                    _fun30214_ip = 121;
                    continue _fun30214
                }
            case 38:
                var2 = _closure1_slot0;
                var4 = _closure1_slot3;
                var1 = 78;
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
                    _fun30214_ip = 102;
                    continue _fun30214
                }
            case 96:
                var1 = var2.preload;
            case 102:
                if (!var1) {
                    _fun30214_ip = 121;
                    continue _fun30214
                }
            case 105:
                var1 = _closure1_slot69;
                var0 = var1.startDavePreload;
                var0 = var0.bind(var1)();
            case 121:
                var0 = false;
                return var0;
        }
    };
    var3.POST_CONNECTION_OPEN = var11;
    var11 = function(arg0) { // Original name: handleRTCConnectionStateUpdate, environment: var4
        _fun30215: for (var _fun30215_ip = 0;;) switch (_fun30215_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.state;
                var1 = _closure1_slot28;
                var1 = var1.CONNECTING;
                if (!(var1 !== var2)) {
                    _fun30215_ip = 114;
                    continue _fun30215
                }
            case 25:
                var1 = _closure1_slot28;
                var1 = var1.RTC_CONNECTING;
                if (!(var1 !== var2)) {
                    _fun30215_ip = 102;
                    continue _fun30215
                }
            case 39:
                var1 = _closure1_slot28;
                var1 = var1.RTC_CONNECTED;
                if (!(var1 !== var2)) {
                    _fun30215_ip = 90;
                    continue _fun30215
                }
            case 53:
                var1 = _closure1_slot28;
                var1 = var1.DISCONNECTED;
                if (!(var1 === var2)) {
                    _fun30215_ip = 124;
                    continue _fun30215
                }
            case 67:
                var1 = function() { // Original name: resetAutoDisabledVideoState, environment: var1
                    _fun30216: for (var _fun30216_ip = 0;;) switch (_fun30216_ip) {
                        case 0:
                            var0 = _closure1_slot121;
                            var1 = var0.size;
                            var0 = 0;
                            if (!(var0 !== var1)) {
                                _fun30216_ip = 110;
                                continue _fun30216
                            }
                        case 20:
                            var0 = _closure1_slot52;
                            var4 = var0.DEFAULT;
                            var _closure3_slot0 = var4;
                            var1 = _closure1_slot141;
                            var0 = undefined;
                            var1 = var1.bind(var0)(var4);
                            var1 = var1.disabledLocalVideos;
                            var _closure3_slot1 = var1;
                            var6 = _closure1_slot121;
                            var5 = var6.forEach;
                            var3 = function(arg0) { // Environment: var3
                                var5 = arg0;
                                var _closure4_slot0 = var5;
                                var4 = _closure1_slot1;
                                var2 = _closure1_slot3;
                                var0 = 79;
                                var2 = var2[var0];
                                var0 = undefined;
                                var7 = var4.bind(var0)(var2);
                                var4 = _closure3_slot1;
                                var6 = var4[var5];
                                var4 = 'If you are auto-disabled, then you are also disabled.';
                                var4 = var7.bind(var0)(var6, var4);
                                var4 = _closure3_slot1;
                                var4 = delete var4[var5];
                                var4 = _closure1_slot71;
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
                            var5 = _closure1_slot121;
                            var3 = var5.clear;
                            var3 = var3.bind(var5)();
                            var3 = _closure1_slot156;
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
                var1 = _closure1_slot169;
                var1 = var1.bind(var2)();
                _fun30215_ip = 124;
                continue _fun30215;
            case 90:
                var2 = _closure1_slot145;
                var1 = undefined;
                var1 = var2.bind(var1)();
                _fun30215_ip = 124;
                continue _fun30215;
            case 102:
                var1 = false;
                _closure1_slot99 = var1;
                _closure1_slot100 = var1;
                _fun30215_ip = 124;
                continue _fun30215;
            case 114:
                var2 = _closure1_slot158;
                var1 = undefined;
                var1 = var2.bind(var1)();
            case 124:
                var1 = _closure1_slot132;
                var0 = var1.update;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
        }
    };
    var3.RTC_CONNECTION_STATE = var11;
    var11 = function(arg0) { // Original name: handleSetTemporarySelfMute, environment: var4
        var0 = arg0;
        var1 = var0.mute;
        _closure1_slot86 = var1;
        var2 = _closure1_slot71;
        var1 = var2.eachConnection;
        var0 = _closure1_slot144;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var3.AUDIO_SET_TEMPORARY_SELF_MUTE = var11;
    var11 = function(arg0) { // Original name: handleToggleSelfMute, environment: var4
        _fun30220: for (var _fun30220_ip = 0;;) switch (_fun30220_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.context;
                var2 = var0.playSoundEffect;
                var3 = _closure1_slot141;
                var0 = undefined;
                var5 = var3.bind(var0)(var4);
                var3 = var5.mute;
                var5 = var5.deaf;
                var6 = _closure1_slot52;
                var6 = var6.DEFAULT;
                if (!(var4 === var6)) {
                    _fun30220_ip = 102;
                    continue _fun30220
                }
            case 54:
                var7 = _closure1_slot1;
                var8 = _closure1_slot3;
                var6 = 33;
                var6 = var8[var6];
                var8 = var7.bind(var0)(var6);
                var7 = var8.requestPermission;
                var6 = _closure1_slot41;
                var6 = var6.AUDIO;
                var6 = var7.bind(var8)(var6);
                var6 = _closure1_slot87;
                if (var6) {
                    _fun30220_ip = 168;
                    continue _fun30220
                }
            case 102:
                var6 = !var5;
                if (!var6) {
                    _fun30220_ip = 111;
                    continue _fun30220
                }
            case 108:
                var6 = !var3;
            case 111:
                if (var6) {
                    _fun30220_ip = 116;
                    continue _fun30220
                }
            case 114:
                var5 = false;
            case 116:
                if (var2) {
                    _fun30220_ip = 125;
                    continue _fun30220
                }
            case 119:
                var2 = true;
                _closure1_slot92 = var2;
            case 125:
                var3 = _closure1_slot156;
                var2 = {};
                var2.mute = var6;
                var2.deaf = var5;
                var2 = var3.bind(var0)(var2, var4);
                var3 = _closure1_slot71;
                var2 = var3.eachConnection;
                var1 = _closure1_slot144;
                var1 = var2.bind(var3)(var1);
                return var0;
            case 168:
                var0 = false;
                return var0;
        }
    };
    var3.AUDIO_TOGGLE_SELF_MUTE = var11;
    var11 = function(arg0) { // Original name: handleSetSelfMute, environment: var4
        _fun30221: for (var _fun30221_ip = 0;;) switch (_fun30221_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.context;
                var0 = var1.mute;
                var2 = var1.playSoundEffect;
                var4 = _closure1_slot156;
                var3 = {};
                var3.mute = var0;
                var0 = undefined;
                var3 = var4.bind(var0)(var3, var5);
                if (var2) {
                    _fun30221_ip = 51;
                    continue _fun30221
                }
            case 45:
                var2 = true;
                _closure1_slot92 = var2;
            case 51:
                var3 = _closure1_slot71;
                var2 = var3.eachConnection;
                var1 = _closure1_slot144;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var3.AUDIO_SET_SELF_MUTE = var11;
    var11 = function(arg0) { // Original name: handleToggleSelfDeafen, environment: var4
        var0 = arg0;
        var4 = var0.context;
        var3 = _closure1_slot156;
        var2 = {};
        var5 = _closure1_slot141;
        var0 = undefined;
        var5 = var5.bind(var0)(var4);
        var5 = var5.deaf;
        var5 = !var5;
        var2.deaf = var5;
        var2 = var3.bind(var0)(var2, var4);
        var3 = _closure1_slot71;
        var2 = var3.eachConnection;
        var1 = _closure1_slot144;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.AUDIO_TOGGLE_SELF_DEAF = var11;
    var11 = function(arg0) { // Original name: handleToggleLocalMute, environment: var4
        _fun30223: for (var _fun30223_ip = 0;;) switch (_fun30223_ip) {
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
                    _fun30223_ip = 122;
                    continue _fun30223
                }
            case 46:
                var5 = _closure1_slot141;
                var5 = var5.bind(var0)(var4);
                var6 = var5.localMutes;
                _closure2_slot1 = var6;
                var5 = var6[var3];
                if (var5) {
                    _fun30223_ip = 80;
                    continue _fun30223
                }
            case 72:
                var5 = true;
                var6[var3] = var5;
                _fun30223_ip = 84;
                continue _fun30223;
            case 80:
                var3 = delete var6[var3];
            case 84:
                var5 = _closure1_slot156;
                var3 = {};
                var3.localMutes = var6;
                var3 = var5.bind(var0)(var3, var4);
                var3 = _closure1_slot71;
                var2 = var3.eachConnection;
                var1 = function(arg0) { // Environment: var1
                    _fun30224: for (var _fun30224_ip = 0;;) switch (_fun30224_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = var3.setLocalMute;
                            var1 = _closure2_slot0;
                            var0 = _closure2_slot1;
                            var0 = var0[var1];
                            if (var0) {
                                _fun30224_ip = 29;
                                continue _fun30224
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
    var11 = function(arg0) { // Original name: handleSetLocalVideoDisabled, environment: var4
        _fun30225: for (var _fun30225_ip = 0;;) switch (_fun30225_ip) {
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
                var17 = 79;
                var3 = var3[var17];
                var8 = var7.bind(var0)(var3);
                var3 = var6;
                if (!var6) {
                    _fun30225_ip = 75;
                    continue _fun30225
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
                var7 = _closure1_slot141;
                var7 = var7.bind(var0)(var4);
                var7 = var7.disabledLocalVideos;
                _closure2_slot1 = var7;
                var9 = var7[var5];
                var14 = null;
                var8 = var14 != var9;
                if (!var8) {
                    _fun30225_ip = 139;
                    continue _fun30225
                }
            case 136:
                var8 = var9;
            case 139:
                var10 = _closure1_slot121;
                var9 = var10.has;
                var9 = var9.bind(var10)(var5);
                var10 = _closure1_slot30;
                var10 = var10.AUTO_ENABLED;
                var10 = var16 === var10;
                if (var10) {
                    _fun30225_ip = 184;
                    continue _fun30225
                }
            case 170:
                var11 = _closure1_slot30;
                var11 = var11.MANUAL_ENABLED;
                var10 = var16 === var11;
            case 184:
                var18 = _closure1_slot60;
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
                    _fun30225_ip = 281;
                    continue _fun30225
                }
            case 278:
                var10 = !var8;
            case 281:
                var15 = !var10;
                var10 = 'If you are auto-disabled, then you are also disabled.';
                var10 = var17.bind(var0)(var15, var10);
                var23 = var3 !== var8;
                var8 = _closure1_slot52;
                var8 = var8.DEFAULT;
                var8 = var4 === var8;
                if (!var12) {
                    _fun30225_ip = 320;
                    continue _fun30225
                }
            case 317:
                var12 = var23;
            case 320:
                if (!var12) {
                    _fun30225_ip = 326;
                    continue _fun30225
                }
            case 323:
                var12 = var8;
            case 326:
                var10 = var6;
                if (!var10) {
                    _fun30225_ip = 335;
                    continue _fun30225
                }
            case 332:
                var10 = var23;
            case 335:
                if (!var10) {
                    _fun30225_ip = 341;
                    continue _fun30225
                }
            case 338:
                var10 = var8;
            case 341:
                var18 = _closure1_slot60;
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
                var15 = _closure1_slot141;
                var15 = var15.bind(var0)(var4);
                var18 = var15.videoToggleStateMap;
                var17 = var18[var5];
                var15 = _closure1_slot30;
                var15 = var15.AUTO_PROBING;
                var15 = var17 === var15;
                if (!var15) {
                    _fun30225_ip = 457;
                    continue _fun30225
                }
            case 443:
                var17 = _closure1_slot30;
                var17 = var17.AUTO_ENABLED;
                var15 = var16 === var17;
            case 457:
                if (!var15) {
                    _fun30225_ip = 508;
                    continue _fun30225
                }
            case 460:
                var17 = _closure1_slot1;
                var19 = _closure1_slot3;
                var15 = 80;
                var15 = var19[var15];
                var17 = var17.bind(var0)(var15);
                var19 = _closure1_slot56;
                if (var3) {
                    _fun30225_ip = 495;
                    continue _fun30225
                }
            case 487:
                var15 = var19.AUTO_ENABLE;
                _fun30225_ip = 501;
                continue _fun30225;
            case 495:
                var15 = var19.AUTO_DISABLE;
            case 501:
                var15 = var17.bind(var0)(var5, var15, var11);
            case 508:
                var18[var5] = var16;
                var17 = _closure1_slot156;
                var15 = {};
                var15.videoToggleStateMap = var18;
                var15 = var17.bind(var0)(var15, var4, var6);
                var15 = _closure1_slot30;
                var15 = var15.AUTO_PROBING;
                if (!(var16 !== var15)) {
                    _fun30225_ip = 578;
                    continue _fun30225
                }
            case 544:
                var16 = _closure1_slot21;
                var15 = var16.getRTCConnection;
                var17 = var15.bind(var16)();
                if (!(var14 != var17)) {
                    _fun30225_ip = 610;
                    continue _fun30225
                }
            case 562:
                var16 = var17.pauseStatsCollectionForUser;
                var15 = false;
                var15 = var16.bind(var17)(var5, var15);
                _fun30225_ip = 610;
                continue _fun30225;
            case 578:
                var16 = _closure1_slot21;
                var15 = var16.getRTCConnection;
                var17 = var15.bind(var16)();
                if (!(var14 != var17)) {
                    _fun30225_ip = 610;
                    continue _fun30225
                }
            case 596:
                var16 = var17.pauseStatsCollectionForUser;
                var15 = true;
                var15 = var16.bind(var17)(var5, var15);
            case 610:
                var15 = _closure1_slot122;
                if (var15) {
                    _fun30225_ip = 719;
                    continue _fun30225
                }
            case 617:
                var16 = _closure1_slot60;
                var15 = var16.info;
                var19 = _closure1_slot122;
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
                    _fun30225_ip = 706;
                    continue _fun30225
                }
            case 689:
                var16 = var17.getVideoHealthManager;
                var16 = var16.bind(var17)();
                var13 = var14 == var16;
                var15 = var16;
            case 706:
                if (var13) {
                    _fun30225_ip = 719;
                    continue _fun30225
                }
            case 709:
                var13 = var15.disable;
                var13 = var13.bind(var15)();
            case 719:
                if (var12) {
                    _fun30225_ip = 916;
                    continue _fun30225
                }
            case 725:
                if (!var10) {
                    _fun30225_ip = 1013;
                    continue _fun30225
                }
            case 731:
                if (!var9) {
                    _fun30225_ip = 866;
                    continue _fun30225
                }
            case 737:
                if (var3) {
                    _fun30225_ip = 866;
                    continue _fun30225
                }
            case 743:
                var13 = _closure1_slot60;
                var12 = var13.info;
                var10 = 'disallowing auto-disable for this session because of manual override by user';
                var10 = var12.bind(var13)(var10);
                var10 = false;
                _closure1_slot122 = var10;
                var12 = _closure1_slot21;
                var10 = var12.getRTCConnection;
                var15 = var10.bind(var12)();
                var10 = var14 == var15;
                var12 = var15;
                if (var10) {
                    _fun30225_ip = 811;
                    continue _fun30225
                }
            case 794:
                var13 = var15.getVideoHealthManager;
                var13 = var13.bind(var15)();
                var10 = var14 == var13;
                var12 = var13;
            case 811:
                if (var10) {
                    _fun30225_ip = 824;
                    continue _fun30225
                }
            case 814:
                var10 = var12.disable;
                var10 = var10.bind(var12)();
            case 824:
                var12 = _closure1_slot1;
                var13 = _closure1_slot3;
                var10 = 80;
                var10 = var13[var10];
                var12 = var12.bind(var0)(var10);
                var10 = _closure1_slot56;
                var10 = var10.MANUAL_REENABLE;
                var10 = var12.bind(var0)(var5, var10, var11);
                _fun30225_ip = 1013;
                continue _fun30225;
            case 866:
                var12 = _closure1_slot1;
                var13 = _closure1_slot3;
                var10 = 80;
                var10 = var13[var10];
                var12 = var12.bind(var0)(var10);
                var13 = _closure1_slot56;
                if (var3) {
                    _fun30225_ip = 901;
                    continue _fun30225
                }
            case 893:
                var10 = var13.MANUAL_ENABLE;
                _fun30225_ip = 907;
                continue _fun30225;
            case 901:
                var10 = var13.MANUAL_DISABLE;
            case 907:
                var10 = var12.bind(var0)(var5, var10, var11);
                _fun30225_ip = 1013;
                continue _fun30225;
            case 916:
                if (var3) {
                    _fun30225_ip = 924;
                    continue _fun30225
                }
            case 919:
                if (var9) {
                    _fun30225_ip = 924;
                    continue _fun30225
                }
            case 922:
                return var0;
            case 924:
                if (!var3) {
                    _fun30225_ip = 936;
                    continue _fun30225
                }
            case 927:
                var9 = _closure1_slot122;
                if (var9) {
                    _fun30225_ip = 936;
                    continue _fun30225
                }
            case 934:
                return var0;
            case 936:
                var10 = _closure1_slot1;
                var12 = _closure1_slot3;
                var9 = 80;
                var9 = var12[var9];
                var10 = var10.bind(var0)(var9);
                var12 = _closure1_slot56;
                if (var3) {
                    _fun30225_ip = 971;
                    continue _fun30225
                }
            case 963:
                var9 = var12.AUTO_ENABLE;
                _fun30225_ip = 977;
                continue _fun30225;
            case 971:
                var9 = var12.AUTO_DISABLE;
            case 977:
                var9 = var10.bind(var0)(var5, var9, var11);
                var10 = _closure1_slot121;
                if (var3) {
                    _fun30225_ip = 1003;
                    continue _fun30225
                }
            case 991:
                var9 = var10.delete;
                var9 = var9.bind(var10)(var5);
                _fun30225_ip = 1013;
                continue _fun30225;
            case 1003:
                var9 = var10.add;
                var9 = var9.bind(var10)(var5);
            case 1013:
                if (!var8) {
                    _fun30225_ip = 1019;
                    continue _fun30225
                }
            case 1016:
                var8 = !var3;
            case 1019:
                if (!var8) {
                    _fun30225_ip = 1036;
                    continue _fun30225
                }
            case 1022:
                var9 = _closure1_slot121;
                var8 = var9.delete;
                var8 = var8.bind(var9)(var5);
            case 1036:
                if (var3) {
                    _fun30225_ip = 1045;
                    continue _fun30225
                }
            case 1039:
                var3 = delete var7[var5];
                _fun30225_ip = 1051;
                continue _fun30225;
            case 1045:
                var3 = true;
                var7[var5] = var3;
            case 1051:
                var5 = _closure1_slot156;
                var3 = {};
                var3.disabledLocalVideos = var7;
                var3 = var5.bind(var0)(var3, var4, var6);
                var3 = _closure1_slot71;
                var2 = var3.eachConnection;
                var1 = function(arg0) { // Environment: var1
                    _fun30226: for (var _fun30226_ip = 0;;) switch (_fun30226_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = var3.setLocalVideoDisabled;
                            var1 = _closure2_slot0;
                            var0 = _closure2_slot1;
                            var4 = var0[var1];
                            var0 = null;
                            var0 = var0 != var4;
                            if (!var0) {
                                _fun30226_ip = 36;
                                continue _fun30226
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
    var11 = function(arg0) { // Original name: handleSetLocalVolume, environment: var4
        _fun30227: for (var _fun30227_ip = 0;;) switch (_fun30227_ip) {
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
                    _fun30227_ip = 143;
                    continue _fun30227
                }
            case 50:
                var5 = _closure1_slot52;
                var5 = var5.STREAM;
                if (!(var3 !== var5)) {
                    _fun30227_ip = 70;
                    continue _fun30227
                }
            case 64:
                var7 = _closure1_slot47;
                _fun30227_ip = 74;
                continue _fun30227;
            case 70:
                var7 = _closure1_slot48;
            case 74:
                var6 = _closure1_slot141;
                var5 = undefined;
                var6 = var6.bind(var5)(var3);
                var6 = var6.localVolumes;
                if (!(var4 !== var7)) {
                    _fun30227_ip = 101;
                    continue _fun30227
                }
            case 95:
                var6[var2] = var4;
                _fun30227_ip = 105;
                continue _fun30227;
            case 101:
                var2 = delete var6[var2];
            case 105:
                var4 = _closure1_slot156;
                var2 = {};
                var2.localVolumes = var6;
                var2 = var4.bind(var5)(var2, var3);
                var2 = _closure1_slot71;
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
    var11 = function(arg0) { // Original name: handleSetLocalPan, environment: var4
        var0 = arg0;
        var4 = var0.context;
        var5 = var0.userId;
        var _closure2_slot0 = var5;
        var8 = var0.left;
        var _closure2_slot1 = var8;
        var7 = var0.right;
        var _closure2_slot2 = var7;
        var3 = _closure1_slot141;
        var0 = undefined;
        var3 = var3.bind(var0)(var4);
        var6 = var3.localPans;
        var3 = {};
        var3.left = var8;
        var3.right = var7;
        var6[var5] = var3;
        var5 = _closure1_slot156;
        var3 = {};
        var3.localPans = var6;
        var3 = var5.bind(var0)(var3, var4);
        var3 = _closure1_slot71;
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
    var11 = function(arg0) { // Original name: handleAudioSetMode, environment: var4
        var0 = arg0;
        var4 = var0.context;
        var5 = var0.mode;
        var0 = var0.options;
        var3 = _closure1_slot156;
        var2 = {};
        var2.mode = var5;
        var2.modeOptions = var0;
        var0 = undefined;
        var2 = var3.bind(var0)(var2, var4);
        var4 = _closure1_slot71;
        var3 = var4.eachConnection;
        var2 = _closure1_slot142;
        var2 = var3.bind(var4)(var2);
        var2 = _closure1_slot132;
        var1 = var2.update;
        var1 = var1.bind(var2)();
        return var0;
    };
    var3.AUDIO_SET_MODE = var11;
    var11 = function(arg0) { // Original name: handleAudioSetInputVolume, environment: var4
        var0 = arg0;
        var3 = var0.volume;
        var4 = _closure1_slot156;
        var2 = {};
        var5 = _closure1_slot143;
        var0 = undefined;
        var5 = var5.bind(var0)(var3);
        var2.inputVolume = var5;
        var2 = var4.bind(var0)(var2);
        var2 = _closure1_slot71;
        var1 = var2.setInputVolume;
        var1 = var1.bind(var2)(var3);
        return var0;
    };
    var3.AUDIO_SET_INPUT_VOLUME = var11;
    var11 = function(arg0) { // Original name: handleAudioSetOutputVolume, environment: var4
        var0 = arg0;
        var3 = var0.volume;
        var4 = _closure1_slot156;
        var2 = {};
        var2.outputVolume = var3;
        var0 = undefined;
        var2 = var4.bind(var0)(var2);
        var2 = _closure1_slot71;
        var1 = var2.setOutputVolume;
        var1 = var1.bind(var2)(var3);
        return var0;
    };
    var3.AUDIO_SET_OUTPUT_VOLUME = var11;
    var11 = function(arg0) { // Original name: handleSetInputDevice, environment: var4
        var0 = arg0;
        var4 = var0.id;
        var3 = _closure1_slot161;
        var2 = _closure1_slot81;
        var0 = undefined;
        var4 = var3.bind(var0)(var2, var4);
        var2 = global;
        var3 = var2.performance;
        var2 = var3.now;
        var2 = var2.bind(var3)();
        _closure1_slot80 = var2;
        var3 = _closure1_slot156;
        var2 = {};
        var2.inputDeviceId = var4;
        var2 = var3.bind(var0)(var2);
        var3 = _closure1_slot71;
        var2 = var3.setAudioInputDevice;
        var2 = var2.bind(var3)(var4);
        var3 = _closure1_slot71;
        var2 = var3.eachConnection;
        var1 = _closure1_slot150;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.AUDIO_SET_INPUT_DEVICE = var11;
    var11 = function(arg0) { // Original name: handleSetOutputDevice, environment: var4
        var0 = arg0;
        var6 = var0.id;
        var4 = _closure1_slot156;
        var2 = {};
        var5 = _closure1_slot161;
        var3 = _closure1_slot82;
        var0 = undefined;
        var3 = var5.bind(var0)(var3, var6);
        var2.outputDeviceId = var3;
        var2 = var4.bind(var0)(var2);
        var2 = _closure1_slot71;
        var1 = var2.setAudioOutputDevice;
        var1 = var1.bind(var2)(var3);
        return var0;
    };
    var3.AUDIO_SET_OUTPUT_DEVICE = var11;
    var11 = function(arg0) { // Original name: handleSetActiveInputProfile, environment: var4
        var0 = arg0;
        var0 = var0.inputProfile;
        var3 = _closure1_slot156;
        var2 = {};
        var2.activeInputProfile = var0;
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var2 = _closure1_slot141;
        var2 = var2.bind(var0)();
        var5 = _closure1_slot71;
        var4 = var5.eachConnection;
        var3 = function(arg0) { // Environment: var3
            var2 = arg0;
            var3 = _closure1_slot142;
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var1 = _closure1_slot150;
            var1 = var1.bind(var0)(var2);
            return var0;
        };
        var3 = var4.bind(var5)(var3);
        var4 = _closure1_slot71;
        var3 = var4.setAudioInputBypassSystemProcessing;
        var2 = var2.bypassSystemInputProcessing;
        var2 = var3.bind(var4)(var2);
        var3 = _closure1_slot132;
        var2 = var3.update;
        var2 = var2.bind(var3)();
        var1 = _closure1_slot172;
        var1 = var1.bind(var0)();
        return var0;
    };
    var3.AUDIO_SET_ACTIVE_INPUT_PROFILE = var11;
    var11 = function(arg0) { // Original name: handleSetEchoCancellation, environment: var4
        var1 = arg0;
        var5 = _closure1_slot156;
        var4 = {};
        var0 = var1.enabled;
        var4.echoCancellation = var0;
        var0 = undefined;
        var4 = var5.bind(var0)(var4);
        var _closure2_slot0 = var4;
        var5 = _closure1_slot71;
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
        var3 = _closure1_slot172;
        var3 = var3.bind(var0)();
        var2 = _closure1_slot170;
        var1 = var1.location;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3.AUDIO_SET_ECHO_CANCELLATION = var11;
    var11 = function(arg0) { // Original name: handleSetSidechainCompression, environment: var4
        var0 = arg0;
        var0 = var0.enabled;
        var3 = _closure1_slot156;
        var1 = {};
        var1.sidechainCompression = var0;
        var0 = undefined;
        var1 = var3.bind(var0)(var1);
        var3 = _closure1_slot71;
        var2 = var3.setSidechainCompression;
        var1 = var1.sidechainCompression;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.AUDIO_SET_SIDECHAIN_COMPRESSION = var11;
    var11 = function(arg0) { // Original name: handleSetSidechainCompressionStrength, environment: var4
        var3 = _closure1_slot156;
        var1 = {};
        var0 = arg0;
        var0 = var0.strength;
        var1.sidechainCompressionStrength = var0;
        var0 = undefined;
        var1 = var3.bind(var0)(var1);
        var3 = _closure1_slot71;
        var2 = var3.setSidechainCompressionStrength;
        var1 = var1.sidechainCompressionStrength;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH = var11;
    var11 = function(arg0) { // Original name: handleSetLoopback, environment: var4
        _fun30242: for (var _fun30242_ip = 0;;) switch (_fun30242_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.enabled;
                var3 = var1.loopbackReason;
                var2 = _closure1_slot123;
                if (var0) {
                    _fun30242_ip = 36;
                    continue _fun30242
                }
            case 24:
                var0 = var2.delete;
                var0 = var0.bind(var2)(var3);
                _fun30242_ip = 46;
                continue _fun30242;
            case 36:
                var0 = var2.add;
                var0 = var0.bind(var2)(var3);
            case 46:
                var2 = _closure1_slot171;
                var0 = undefined;
                var2 = var2.bind(var0)();
                var1 = _closure1_slot172;
                var1 = var1.bind(var0)();
                return var0;
        }
    };
    var3.AUDIO_SET_LOOPBACK = var11;
    var11 = function(arg0) { // Original name: handleSetNoiseSuppression, environment: var4
        var1 = arg0;
        var5 = _closure1_slot156;
        var4 = {};
        var0 = var1.enabled;
        var4.noiseSuppression = var0;
        var0 = undefined;
        var4 = var5.bind(var0)(var4);
        var _closure2_slot0 = var4;
        var5 = _closure1_slot71;
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
        var3 = _closure1_slot172;
        var3 = var3.bind(var0)();
        var2 = _closure1_slot170;
        var1 = var1.location;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3.AUDIO_SET_NOISE_SUPPRESSION = var11;
    var11 = function(arg0) { // Original name: handleSetAutomaticGainControl, environment: var4
        var1 = arg0;
        var5 = _closure1_slot156;
        var4 = {};
        var0 = var1.enabled;
        var4.automaticGainControl = var0;
        var0 = undefined;
        var4 = var5.bind(var0)(var4);
        var _closure2_slot0 = var4;
        var5 = _closure1_slot71;
        var4 = var5.eachConnection;
        var3 = function(arg0) { // Environment: var3
            var3 = _closure1_slot148;
            var0 = _closure2_slot0;
            var2 = var0.automaticGainControl;
            var0 = undefined;
            var1 = arg0;
            var1 = var3.bind(var0)(var1, var2);
            return var0;
        };
        var3 = var4.bind(var5)(var3);
        var3 = _closure1_slot172;
        var3 = var3.bind(var0)();
        var2 = _closure1_slot170;
        var1 = var1.location;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3.AUDIO_SET_AUTOMATIC_GAIN_CONTROL = var11;
    var11 = function(arg0) { // Original name: handleSetNoiseCancellation, environment: var4
        var1 = arg0;
        var5 = _closure1_slot156;
        var4 = {};
        var0 = var1.enabled;
        var4.noiseCancellation = var0;
        var0 = undefined;
        var4 = var5.bind(var0)(var4);
        var _closure2_slot0 = var4;
        var5 = _closure1_slot71;
        var4 = var5.eachConnection;
        var3 = function(arg0) { // Environment: var3
            var3 = _closure1_slot149;
            var0 = _closure2_slot0;
            var2 = var0.noiseCancellation;
            var0 = undefined;
            var1 = arg0;
            var1 = var3.bind(var0)(var1, var2);
            return var0;
        };
        var3 = var4.bind(var5)(var3);
        var3 = _closure1_slot172;
        var3 = var3.bind(var0)();
        var2 = _closure1_slot170;
        var1 = var1.location;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3.AUDIO_SET_NOISE_CANCELLATION = var11;
    var11 = function(arg0) { // Original name: handleSetKrispModelOverride, environment: var4
        var2 = arg0;
        var4 = _closure1_slot1;
        var3 = _closure1_slot3;
        var0 = 81;
        var3 = var3[var0];
        var0 = undefined;
        var5 = var4.bind(var0)(var3);
        var4 = var5.setKrispModelOverride;
        var3 = var2.model;
        var3 = var4.bind(var5)(var3);
        var2 = var2.model;
        _closure1_slot106 = var2;
        var1 = _closure1_slot172;
        var1 = var1.bind(var0)();
        return var0;
    };
    var3.AUDIO_SET_KRISP_MODEL_OVERRIDE = var11;
    var11 = function(arg0) { // Original name: handleSetSilenceWarning, environment: var4
        var3 = _closure1_slot156;
        var2 = {};
        var0 = arg0;
        var0 = var0.enabled;
        var2.silenceWarning = var0;
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var2 = _closure1_slot132;
        var1 = var2.update;
        var1 = var1.bind(var2)();
        return var0;
    };
    var3.AUDIO_SET_DISPLAY_SILENCE_WARNING = var11;
    var11 = function(arg0) { // Original name: handleSetDebugLogging, environment: var4
        var2 = _closure1_slot71;
        var1 = var2.setDebugLogging;
        var0 = arg0;
        var0 = var0.enabled;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var3.AUDIO_SET_DEBUG_LOGGING = var11;
    var11 = function(arg0) { // Original name: handleSetKrispSuppressionLevel, environment: var4
        var0 = arg0;
        var3 = var0.level;
        _closure1_slot105 = var3;
        var2 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 81;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.setKrispSuppressionLevel;
        var1 = var1.bind(var2)(var3);
        return var0;
    };
    var3.AUDIO_SET_KRISP_SUPPRESSION_LEVEL = var11;
    var11 = function(arg0) { // Original name: handleSetNoiseCancellationEnableStats, environment: var4
        _fun30253: for (var _fun30253_ip = 0;;) switch (_fun30253_ip) {
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
                    _fun30253_ip = 86;
                    continue _fun30253
                }
            case 41:
                var3 = var1.enabled;
                _closure1_slot108 = var3;
                var3 = _closure1_slot71;
                var4 = var3.setNoiseCancellationEnableStats;
                var3 = null;
                if (!(var3 != var4)) {
                    _fun30253_ip = 86;
                    continue _fun30253
                }
            case 66:
                var3 = _closure1_slot71;
                var2 = var3.setNoiseCancellationEnableStats;
                var1 = var1.enabled;
                var1 = var2.bind(var3)(var1);
            case 86:
                return var0;
        }
    };
    var3.AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS = var11;
    var11 = function(arg0) { // Original name: handleSetVideoHook, environment: var4
        var2 = _closure1_slot156;
        var1 = {};
        var0 = arg0;
        var0 = var0.enabled;
        var1.videoHook = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3.MEDIA_ENGINE_SET_VIDEO_HOOK = var11;
    var11 = function(arg0) { // Original name: handleSetExperimentalSoundshare, environment: var4
        var2 = _closure1_slot156;
        var1 = {};
        var0 = arg0;
        var0 = var0.enabled;
        var1.experimentalSoundshare2 = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3.MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE = var11;
    var11 = function(arg0) { // Original name: handleSetUseSystemScreensharePicker, environment: var4
        var0 = arg0;
        var0 = var0.enabled;
        var2 = _closure1_slot156;
        var1 = {};
        var1.useSystemScreensharePicker = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3.MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER = var11;
    var11 = function(arg0) { // Original name: handleSetAttenuation, environment: var4
        var0 = arg0;
        var6 = var0.attenuation;
        var5 = var0.attenuateWhileSpeakingSelf;
        var0 = var0.attenuateWhileSpeakingOthers;
        var4 = _closure1_slot156;
        var3 = {};
        var3.attenuation = var6;
        var3.attenuateWhileSpeakingSelf = var5;
        var3.attenuateWhileSpeakingOthers = var0;
        var0 = undefined;
        var3 = var4.bind(var0)(var3);
        var _closure2_slot0 = var3;
        var3 = _closure1_slot71;
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
    var11 = function(arg0) { // Original name: handleSetQoS, environment: var4
        var0 = arg0;
        var0 = var0.enabled;
        var _closure2_slot0 = var0;
        var4 = _closure1_slot156;
        var3 = {};
        var3.qos = var0;
        var0 = undefined;
        var3 = var4.bind(var0)(var3);
        var3 = _closure1_slot71;
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
    var11 = function(arg0) { // Original name: handleDevices, environment: var4
        var0 = arg0;
        var5 = var0.inputDevices;
        var4 = var0.outputDevices;
        var2 = var0.videoDevices;
        var3 = _closure1_slot162;
        var0 = undefined;
        var3 = var3.bind(var0)(var5);
        var3 = _closure1_slot164;
        var3 = var3.bind(var0)(var4);
        var1 = _closure1_slot165;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var3.MEDIA_ENGINE_DEVICES = var11;
    var11 = function(arg0) { // Original name: handleVolumeChange, environment: var4
        var0 = arg0;
        var5 = var0.inputVolume;
        var3 = var0.outputVolume;
        var2 = _closure1_slot156;
        var1 = {};
        var4 = _closure1_slot143;
        var0 = undefined;
        var4 = var4.bind(var0)(var5);
        var1.inputVolume = var4;
        var1.outputVolume = var3;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3.AUDIO_VOLUME_CHANGE = var11;
    var11 = function() { // Original name: handleReset, environment: var4
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var0 = 70;
        var2 = var2[var0];
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var3 = var2.Storage;
        var2 = var3.remove;
        var1 = _closure1_slot61;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.AUDIO_RESET = var11;
    var11 = function(arg0) { // Original name: handleInputDetected, environment: var4
        _fun30264: for (var _fun30264_ip = 0;;) switch (_fun30264_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.inputDetected;
                _closure1_slot98 = var1;
                var2 = _closure1_slot99;
                var1 = !var2;
                if (var2) {
                    _fun30264_ip = 30;
                    continue _fun30264
                }
            case 26:
                var1 = _closure1_slot98;
            case 30:
                if (!var1) {
                    _fun30264_ip = 53;
                    continue _fun30264
                }
            case 33:
                var1 = true;
                _closure1_slot99 = var1;
                var1 = _closure1_slot132;
                var0 = var1.update;
                var0 = var0.bind(var1)();
            case 53:
                var0 = undefined;
                return var0;
        }
    };
    var3.AUDIO_INPUT_DETECTED = var11;
    var11 = function(arg0) { // Original name: handleSetAudioSubsystem, environment: var4
        var2 = _closure1_slot177;
        var0 = arg0;
        var1 = var0.subsystem;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3.AUDIO_SET_SUBSYSTEM = var11;
    var11 = function(arg0) { // Original name: handleBypassSystemInputProcessing, environment: var4
        var1 = arg0;
        var5 = var1.bypassEnabled;
        var4 = _closure1_slot156;
        var3 = {};
        var3.bypassSystemInputProcessing = var5;
        var0 = undefined;
        var3 = var4.bind(var0)(var3);
        var4 = _closure1_slot71;
        var3 = var4.setAudioInputBypassSystemProcessing;
        var3 = var3.bind(var4)(var5);
        var2 = _closure1_slot170;
        var1 = var1.location;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3.AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING = var11;
    var11 = function(arg0) { // Original name: handleSetAudioEnabled, environment: var4
        _fun30267: for (var _fun30267_ip = 0;;) switch (_fun30267_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.enabled;
                _closure1_slot77 = var2;
                var1 = var1.unmute;
                if (!var1) {
                    _fun30267_ip = 49;
                    continue _fun30267
                }
            case 24:
                var3 = _closure1_slot156;
                var2 = undefined;
                var1 = {
                    'mute': false,
                    'deaf': false
                };
                var1 = var3.bind(var2)(var1);
            case 49:
                var2 = _closure1_slot71;
                var1 = var2.eachConnection;
                var0 = _closure1_slot144;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
        }
    };
    var3.MEDIA_ENGINE_SET_AUDIO_ENABLED = var11;
    var11 = function(arg0) { // Original name: handleSetVideoEnabled, environment: var4
        var0 = arg0;
        var2 = var0.enabled;
        var4 = _closure1_slot1;
        var3 = _closure1_slot3;
        var0 = 33;
        var3 = var3[var0];
        var0 = undefined;
        var5 = var4.bind(var0)(var3);
        var4 = var5.requestPermission;
        var3 = _closure1_slot41;
        var3 = var3.CAMERA;
        var3 = var4.bind(var5)(var3);
        var1 = _closure1_slot145;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var3.MEDIA_ENGINE_SET_VIDEO_ENABLED = var11;
    var11 = function(arg0) { // Original name: handlePermission, environment: var4
        _fun30269: for (var _fun30269_ip = 0;;) switch (_fun30269_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.kind;
                var0 = var0.granted;
                if (var0) {
                    _fun30269_ip = 79;
                    continue _fun30269
                }
            case 17:
                var0 = 'audio';
                if (!(var0 !== var1)) {
                    _fun30269_ip = 51;
                    continue _fun30269
                }
            case 25:
                var0 = 'video';
                if (!(var0 === var1)) {
                    _fun30269_ip = 79;
                    continue _fun30269
                }
            case 33:
                var2 = _closure1_slot145;
                var1 = undefined;
                var0 = false;
                var0 = var2.bind(var1)(var0);
                _fun30269_ip = 79;
                continue _fun30269;
            case 51:
                var1 = false;
                _closure1_slot77 = var1;
                var2 = _closure1_slot71;
                var1 = var2.eachConnection;
                var0 = _closure1_slot144;
                var0 = var1.bind(var2)(var0);
            case 79:
                var0 = undefined;
                return var0;
        }
    };
    var3.MEDIA_ENGINE_PERMISSION = var11;
    var11 = function(arg0) { // Original name: handleSetGoLiveSource, environment: var4
        _fun30270: for (var _fun30270_ip = 0;;) switch (_fun30270_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.settings;
                var11 = null;
                var3 = var11 == var1;
                var0 = undefined;
                var2 = undefined;
                if (var3) {
                    _fun30270_ip = 28;
                    continue _fun30270
                }
            case 22:
                var2 = var1.desktopSettings;
            case 28:
                if (!(var11 == var2)) {
                    _fun30270_ip = 227;
                    continue _fun30270
                }
            case 35:
                var3 = var11 == var1;
                var2 = undefined;
                if (var3) {
                    _fun30270_ip = 50;
                    continue _fun30270
                }
            case 44:
                var2 = var1.cameraSettings;
            case 50:
                if (!(var11 == var2)) {
                    _fun30270_ip = 76;
                    continue _fun30270
                }
            case 54:
                var3 = _closure1_slot145;
                var2 = _closure1_slot89;
                var2 = var3.bind(var0)(var2, var11);
                _fun30270_ip = 554;
                continue _fun30270;
            case 76:
                var4 = var1.context;
                if (!(var11 == var4)) {
                    _fun30270_ip = 98;
                    continue _fun30270
                }
            case 85:
                var2 = _closure1_slot52;
                var4 = var2.DEFAULT;
            case 98:
                var2 = var1.cameraSettings;
                var8 = var2.videoDeviceGuid;
                var7 = var2.audioDeviceGuid;
                var3 = _closure1_slot52;
                var3 = var3.STREAM;
                var4 = var4 === var3;
                if (!var4) {
                    _fun30270_ip = 140;
                    continue _fun30270
                }
            case 136:
                var4 = _closure1_slot89;
            case 140:
                var6 = var1.qualityOptions;
                if (!(var11 == var6)) {
                    _fun30270_ip = 164;
                    continue _fun30270
                }
            case 150:
                var6 = {
                    'resolution': 720,
                    'frameRate': 30
                };
            case 164:
                var3 = _closure1_slot145;
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
                _fun30270_ip = 554;
                continue _fun30270;
            case 227:
                var2 = var1.desktopSettings;
                var9 = var2.sourceId;
                var3 = var2.sound;
                var4 = var1.context;
                if (!(var11 == var4)) {
                    _fun30270_ip = 267;
                    continue _fun30270
                }
            case 254:
                var2 = _closure1_slot52;
                var4 = var2.DEFAULT;
            case 267:
                var5 = var1.qualityOptions;
                if (!(var11 == var5)) {
                    _fun30270_ip = 291;
                    continue _fun30270
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
                    _fun30270_ip = 333;
                    continue _fun30270
                }
            case 299:
                var2 = _closure1_slot1;
                var6 = _closure1_slot3;
                var1 = 66;
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
                    _fun30270_ip = 426;
                    continue _fun30270
                }
            case 369:
                var2 = true;
                var7 = null;
                var6 = null;
                if (!(var2 === var3)) {
                    _fun30270_ip = 426;
                    continue _fun30270
                }
            case 379:
                var2 = _closure1_slot167;
                var2 = var2.bind(var0)(var8);
                var3 = var2.soundshareId;
                var2 = var2.soundshareSession;
                var6 = var2;
                var7 = var3;
                if (!(var11 != var7)) {
                    _fun30270_ip = 426;
                    continue _fun30270
                }
            case 410:
                var10 = _closure1_slot168;
                var10 = var10.bind(var0)(var3, var2);
                var7 = var3;
                var6 = var2;
            case 426:
                var2 = _closure1_slot79;
                if (!(var4 !== var2)) {
                    _fun30270_ip = 466;
                    continue _fun30270
                }
            case 434:
                var2 = _closure1_slot73;
                if (!(var11 != var2)) {
                    _fun30270_ip = 462;
                    continue _fun30270
                }
            case 442:
                var10 = _closure1_slot71;
                var3 = var10.setGoLiveSource;
                var2 = _closure1_slot79;
                var2 = var3.bind(var10)(var11, var2);
            case 462:
                _closure1_slot79 = var4;
            case 466:
                var3 = _closure1_slot145;
                var2 = _closure1_slot52;
                var2 = var2.STREAM;
                var2 = var4 === var2;
                if (!var2) {
                    _fun30270_ip = 491;
                    continue _fun30270
                }
            case 487:
                var2 = _closure1_slot89;
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
    var11 = function(arg0) { // Original name: handleSetVideoDevice, environment: var4
        var0 = arg0;
        var6 = var0.id;
        var3 = _closure1_slot156;
        var2 = {};
        var5 = _closure1_slot161;
        var4 = _closure1_slot83;
        var0 = undefined;
        var4 = var5.bind(var0)(var4, var6);
        var2.videoDeviceId = var4;
        var2 = var3.bind(var0)(var2);
        var1 = _closure1_slot145;
        var1 = var1.bind(var0)();
        return var0;
    };
    var3.MEDIA_ENGINE_SET_VIDEO_DEVICE = var11;
    var11 = function(arg0) { // Original name: handleInteractionRequired, environment: var4
        _fun30272: for (var _fun30272_ip = 0;;) switch (_fun30272_ip) {
            case 0:
                var1 = arg0;
                var3 = _closure1_slot78;
                var0 = var1.required;
                var0 = var3 !== var0;
                if (!var0) {
                    _fun30272_ip = 60;
                    continue _fun30272
                }
            case 23:
                var3 = var1.required;
                _closure1_slot78 = var3;
                var3 = var1.required;
                var0 = true;
                if (var3) {
                    _fun30272_ip = 60;
                    continue _fun30272
                }
            case 44:
                var3 = _closure1_slot71;
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
    var10 = function() { // Original name: handleSetCertifiedDevices, environment: var4
        var2 = _closure1_slot71;
        var1 = var2.eachConnection;
        var0 = _closure1_slot150;
        var0 = var1.bind(var2)(var0);
        var0 = false;
        return var0;
    };
    var3.CERTIFIED_DEVICES_SET = var10;
    var10 = function(arg0) { // Original name: handleAppConnected, environment: var4
        var0 = arg0;
        var0 = var0.application;
        var2 = _closure1_slot76;
        var1 = var2.add;
        var0 = var0.id;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var3.RPC_APP_CONNECTED = var10;
    var10 = function(arg0) { // Original name: handleAppDisconnected, environment: var4
        var0 = arg0;
        var0 = var0.application;
        var2 = _closure1_slot76;
        var1 = var2.delete;
        var0 = var0.id;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var3.RPC_APP_DISCONNECTED = var10;
    var10 = function(arg0) { // Original name: handleOverlayInitialize, environment: var4
        var0 = arg0;
        var0 = var0.mediaEngineState;
        var2 = var0.settingsByContext;
        _closure1_slot75 = var2;
        var2 = var0.inputDevices;
        _closure1_slot81 = var2;
        var2 = var0.outputDevices;
        _closure1_slot82 = var2;
        var2 = var0.appSupported;
        _closure1_slot125 = var2;
        var2 = var0.krispModuleLoaded;
        _closure1_slot103 = var2;
        var2 = var0.krispVersion;
        _closure1_slot104 = var2;
        var0 = var0.goLiveContext;
        _closure1_slot79 = var0;
        var0 = undefined;
        return var0;
    };
    var3.OVERLAY_INITIALIZE = var10;
    var10 = function(arg0) { // Original name: handleFocus, environment: var4
        _fun30277: for (var _fun30277_ip = 0;;) switch (_fun30277_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.state;
                var4 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 85;
                var1 = var2[var1];
                var2 = undefined;
                var4 = var4.bind(var2)(var1);
                var1 = var4.isEnabled;
                var1 = var1.bind(var4)();
                var4 = _closure1_slot26;
                var4 = var4.BACKGROUND;
                if (!(var3 === var4)) {
                    _fun30277_ip = 86;
                    continue _fun30277
                }
            case 57:
                var4 = _closure1_slot89;
                if (!var4) {
                    _fun30277_ip = 86;
                    continue _fun30277
                }
            case 64:
                if (var1) {
                    _fun30277_ip = 86;
                    continue _fun30277
                }
            case 67:
                var1 = true;
                _closure1_slot96 = var1;
                var4 = _closure1_slot145;
                var1 = false;
                var1 = var4.bind(var2)(var1);
                _fun30277_ip = 124;
                continue _fun30277;
            case 86:
                var1 = _closure1_slot26;
                var1 = var1.ACTIVE;
                if (!(var3 === var1)) {
                    _fun30277_ip = 128;
                    continue _fun30277
                }
            case 100:
                var1 = _closure1_slot96;
                if (!var1) {
                    _fun30277_ip = 128;
                    continue _fun30277
                }
            case 107:
                var1 = false;
                _closure1_slot96 = var1;
                var1 = _closure1_slot145;
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
    var10 = function(arg0) { // Original name: handleSetChannelBitrate, environment: var4
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot71;
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
    var10 = function(arg0) { // Original name: handleVADPermissionChange, environment: var4
        _fun30280: for (var _fun30280_ip = 0;;) switch (_fun30280_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.hasPermission;
                var1 = !var0;
                var2 = _closure1_slot87;
                if (!(var1 !== var2)) {
                    _fun30280_ip = 50;
                    continue _fun30280
                }
            case 23:
                _closure1_slot87 = var1;
                var2 = _closure1_slot71;
                var1 = var2.eachConnection;
                var0 = _closure1_slot144;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            case 50:
                var0 = false;
                return var0;
        }
    };
    var3.SET_VAD_PERMISSION = var10;
    var10 = function(arg0) { // Original name: handleNativePermissionChange, environment: var4
        _fun30281: for (var _fun30281_ip = 0;;) switch (_fun30281_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.state;
                var3 = var0.permissionType;
                var1 = _closure1_slot40;
                var1 = var1.ACCEPTED;
                var2 = var2 === var1;
                var1 = _closure1_slot41;
                var1 = var1.AUDIO;
                if (!(var1 !== var3)) {
                    _fun30281_ip = 91;
                    continue _fun30281
                }
            case 45:
                var1 = _closure1_slot41;
                var1 = var1.CAMERA;
                if (!(var1 !== var3)) {
                    _fun30281_ip = 63;
                    continue _fun30281
                }
            case 59:
                var1 = false;
                return var1;
            case 63:
                var1 = !var2;
                if (var2) {
                    _fun30281_ip = 73;
                    continue _fun30281
                }
            case 69:
                var1 = _closure1_slot89;
            case 73:
                if (!var1) {
                    _fun30281_ip = 116;
                    continue _fun30281
                }
            case 76:
                var3 = _closure1_slot145;
                var2 = undefined;
                var1 = false;
                var1 = var3.bind(var2)(var1);
                _fun30281_ip = 116;
                continue _fun30281;
            case 91:
                var1 = true;
                _closure1_slot120 = var1;
                var2 = _closure1_slot71;
                var1 = var2.eachConnection;
                var0 = _closure1_slot144;
                var0 = var1.bind(var2)(var0);
            case 116:
                var0 = undefined;
                return var0;
        }
    };
    var3.SET_NATIVE_PERMISSION = var10;
    var10 = function(arg0) { // Original name: handleSetChannelVideoQualityMode, environment: var4
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot71;
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
    var10 = function(arg0) { // Original name: handleSetAecDump, environment: var4
        var0 = arg0;
        var0 = var0.enabled;
        var3 = _closure1_slot156;
        var1 = {};
        var1.aecDumpEnabled = var0;
        var0 = undefined;
        var1 = var3.bind(var0)(var1);
        var3 = _closure1_slot71;
        var2 = var3.setAecDump;
        var1 = var1.aecDumpEnabled;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.MEDIA_ENGINE_SET_AEC_DUMP = var10;
    var10 = function(arg0) { // Original name: handleResetSettings, environment: var4
        var1 = arg0;
        var1 = var1.overrides;
        var _closure2_slot0 = var1;
        var1 = global;
        var4 = var1.Object;
        var3 = var4.values;
        var2 = _closure1_slot52;
        var4 = var3.bind(var4)(var2);
        var3 = var4.reduce;
        var2 = function(arg0, arg1) { // Environment: var0
            var0 = arg0;
            var2 = arg1;
            var3 = _closure1_slot136;
            var4 = undefined;
            var5 = var3.bind(var4)();
            var3 = _closure1_slot1;
            var6 = _closure1_slot3;
            var1 = 40;
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
        _closure1_slot75 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var0 = 70;
        var2 = var2[var0];
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var5 = var2.Storage;
        var4 = var5.set;
        var3 = _closure1_slot61;
        var2 = _closure1_slot75;
        var2 = var4.bind(var5)(var3, var2);
        var1 = _closure1_slot157;
        var1 = var1.bind(var0)();
        return var0;
    };
    var3.MEDIA_ENGINE_RESET_SETTINGS = var10;
    var10 = function() { // Original name: handleChannelDelete, environment: var4
        _fun30287: for (var _fun30287_ip = 0;;) switch (_fun30287_ip) {
            case 0:
                var1 = _closure1_slot89;
                if (var1) {
                    _fun30287_ip = 20;
                    continue _fun30287
                }
            case 10:
                var2 = _closure1_slot73;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun30287_ip = 56;
                    continue _fun30287
                }
            case 20:
                var2 = _closure1_slot21;
                var1 = var2.getRTCConnectionId;
                var1 = var1.bind(var2)();
                var3 = null;
                if (!(var3 == var1)) {
                    _fun30287_ip = 56;
                    continue _fun30287
                }
            case 40:
                var2 = _closure1_slot145;
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
    var10 = function() { // Original name: handleNoiseCancellationErrorReset, environment: var4
        _fun30288: for (var _fun30288_ip = 0;;) switch (_fun30288_ip) {
            case 0:
                var1 = _closure1_slot114;
                var0 = !var1;
                var0 = !var0;
                if (!var1) {
                    _fun30288_ip = 24;
                    continue _fun30288
                }
            case 16:
                var1 = false;
                _closure1_slot114 = var1;
                var0 = true;
            case 24:
                return var0;
        }
    };
    var3.MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET = var10;
    var10 = function(arg0) { // Original name: handleApplyMediaFilterSettings, environment: var4
        var0 = arg0;
        var2 = var0.settings;
        var1 = _closure1_slot71;
        var0 = var1.applyMediaFilterSettings;
        var2 = var0.bind(var1)(var2);
        var1 = var2.finally;
        var0 = function() { // Environment: var0
            var1 = false;
            _closure1_slot115 = var1;
            var1 = _closure1_slot69;
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
    var10 = function() { // Original name: handleApplyMediaFilterSettingsStart, environment: var4
        var0 = true;
        _closure1_slot115 = var0;
        var0 = undefined;
        return var0;
    };
    var3.MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START = var10;
    var10 = function() { // Original name: handleApplyMediaFilterSettingsError, environment: var4
        var0 = false;
        _closure1_slot115 = var0;
        var0 = undefined;
        return var0;
    };
    var3.MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR = var10;
    var10 = function(arg0) { // Original name: handleUserSettingsProtoUpdate, environment: var4
        _fun30293: for (var _fun30293_ip = 0;;) switch (_fun30293_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.settings;
                var4 = var1.type;
                var1 = var0.local;
                var2 = var0.wasSaved;
                var3 = _closure1_slot43;
                var3 = var3.PRELOADED_USER_SETTINGS;
                if (!(var4 === var3)) {
                    _fun30293_ip = 67;
                    continue _fun30293
                }
            case 43:
                if (var1) {
                    _fun30293_ip = 67;
                    continue _fun30293
                }
            case 46:
                var1 = null;
                if (!(var1 == var2)) {
                    _fun30293_ip = 67;
                    continue _fun30293
                }
            case 52:
                var2 = _closure1_slot166;
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
    var10 = function(arg0) { // Original name: handleClipsInit, environment: var4
        _fun30294: for (var _fun30294_ip = 0;;) switch (_fun30294_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.sourceId;
                var4 = var0.applicationName;
                var5 = var0.quality;
                var2 = _closure1_slot0;
                var1 = _closure1_slot3;
                var0 = 84;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.isDecoupledClipsEnabled;
                var1 = var1.bind(var2)();
                if (!var1) {
                    _fun30294_ip = 507;
                    continue _fun30294
                }
            case 62:
                var2 = _closure1_slot1;
                var3 = _closure1_slot3;
                var1 = 69;
                var1 = var3[var1];
                var1 = var2.bind(var0)(var1);
                var2 = null;
                if (!(var2 != var1)) {
                    _fun30294_ip = 507;
                    continue _fun30294
                }
            case 91:
                var3 = _closure1_slot1;
                var6 = _closure1_slot3;
                var1 = 66;
                var1 = var6[var1];
                var3 = var3.bind(var0)(var1);
                var1 = var3.getPidFromDesktopSource;
                var6 = var1.bind(var3)(var9);
                var1 = _closure1_slot167;
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
                var7 = _closure1_slot74;
                if (!(var2 != var7)) {
                    _fun30294_ip = 302;
                    continue _fun30294
                }
            case 184:
                var9 = _closure1_slot71;
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
                    _fun30294_ip = 252;
                    continue _fun30294
                }
            case 232:
                var9 = _closure1_slot74;
                var9 = var9.desktopSource;
                var9 = var9.soundshareId;
                var7 = var2 != var9;
            case 252:
                if (!var7) {
                    _fun30294_ip = 302;
                    continue _fun30294
                }
            case 255:
                var9 = _closure1_slot2;
                var10 = _closure1_slot3;
                var7 = 42;
                var7 = var10[var7];
                var10 = var9.bind(var0)(var7);
                var9 = var10.cancelAttachToProcess;
                var7 = _closure1_slot74;
                var7 = var7.desktopSource;
                var7 = var7.soundshareId;
                var7 = var9.bind(var10)(var7);
            case 302:
                if (!(var2 != var6)) {
                    _fun30294_ip = 316;
                    continue _fun30294
                }
            case 306:
                var2 = _closure1_slot168;
                var2 = var2.bind(var0)(var6, var3);
            case 316:
                _closure1_slot74 = var1;
                var1 = _closure1_slot137;
                var7 = var1.bind(var0)();
                var1 = _closure1_slot141;
                var1 = var1.bind(var0)();
                var9 = var1.videoHook;
                var3 = _closure1_slot71;
                var2 = var3.setClipsSource;
                var1 = {};
                var6 = {};
                var10 = _closure1_slot74;
                var10 = var10.desktopSource;
                var10 = var10.id;
                var6.id = var10;
                var10 = _closure1_slot74;
                var10 = var10.desktopSource;
                var10 = var10.soundshareId;
                var6.soundshareId = var10;
                var6.useVideoHook = var9;
                var9 = _closure1_slot152;
                var9 = var9.bind(var0)();
                var6.useGraphicsCapture = var9;
                var9 = false;
                var6.useCaptureDeviceForEncode = var9;
                var10 = _closure1_slot69;
                var9 = var10.getExperimentalSoundshare;
                var9 = var9.bind(var10)();
                var6.useLoopback = var9;
                var9 = true;
                var6.useQuartzCapturer = var9;
                var9 = _closure1_slot153;
                var9 = var9.bind(var0)();
                var6.allowScreenCaptureKit = var9;
                var9 = 500;
                var6.videoHookStaleFrameTimeoutMs = var9;
                var8 = _closure1_slot63;
                var6.graphicsCaptureStaleFrameTimeoutMs = var8;
                var6.hdrCaptureMode = var7;
                var1.desktopDescription = var6;
                var1.quality = var5;
                var1.applicationName = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
            case 507:
                var0 = false;
                return var0;
        }
    };
    var3.CLIPS_INIT = var10;
    var10 = function(arg0) { // Original name: handleClipsSettingsUpdate, environment: var4
        _fun30295: for (var _fun30295_ip = 0;;) switch (_fun30295_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.settings;
                var1 = var0.decoupledClipsEnabled;
                var0 = false;
                if (!(var0 === var1)) {
                    _fun30295_ip = 45;
                    continue _fun30295
                }
            case 21:
                var2 = null;
                _closure1_slot74 = var2;
                var1 = _closure1_slot71;
                var0 = var1.setClipsSource;
                var0 = var0.bind(var1)(var2);
            case 45:
                var0 = undefined;
                return var0;
        }
    };
    var3.CLIPS_SETTINGS_UPDATE = var10;
    var10 = function(arg0) { // Original name: handleSetEnableHardwareMuteNotice, environment: var4
        var0 = arg0;
        var1 = var0.enabled;
        _closure1_slot127 = var1;
        var0 = undefined;
        return var0;
    };
    var3.MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE = var10;
    var10 = function(arg0) { // Original name: handleVoiceFilterRequestSwitch, environment: var4
        var0 = arg0;
        var0 = var0.newVoiceFilterId;
        var _closure2_slot0 = var0;
        var4 = _closure1_slot156;
        var3 = {};
        var3.mostRecentlyRequestedVoiceFilter = var0;
        var0 = undefined;
        var3 = var4.bind(var0)(var3);
        var3 = _closure1_slot71;
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
    var10 = function(arg0) { // Original name: handleVoiceFilterLoopbackToggle, environment: var4
        _fun30299: for (var _fun30299_ip = 0;;) switch (_fun30299_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.enabled;
                var4 = _closure1_slot1;
                var2 = _closure1_slot3;
                var0 = 48;
                var2 = var2[var0];
                var0 = undefined;
                var6 = var4.bind(var0)(var2);
                var5 = var6.track;
                var2 = _closure1_slot25;
                var4 = var2.VOICE_FILTER_PLAYBACK_TOGGLED;
                var2 = {};
                var8 = _closure1_slot109;
                var7 = null;
                var8 = var7 != var8;
                if (!var8) {
                    _fun30299_ip = 67;
                    continue _fun30299
                }
            case 63:
                var7 = _closure1_slot109;
            case 67:
                var2.active_voice_filter_id = var7;
                var2.enabled = var3;
                var2 = var5.bind(var6)(var4, var2);
                var2 = _closure1_slot156;
                var1 = {};
                var1.voiceFilterPlaybackEnabled = var3;
                var1 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var3.VOICE_FILTER_LOOPBACK_TOGGLE = var10;
    var10 = function(arg0) { // Original name: handleVoiceFilterApplied, environment: var4
        _fun30300: for (var _fun30300_ip = 0;;) switch (_fun30300_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.voiceFilterId;
                var0 = _closure1_slot109;
                _closure1_slot111 = var0;
                var0 = _closure1_slot110;
                _closure1_slot112 = var0;
                _closure1_slot109 = var2;
                var0 = null;
                if (!(var0 !== var2)) {
                    _fun30300_ip = 55;
                    continue _fun30300
                }
            case 38:
                var2 = global;
                var3 = var2.Date;
                var2 = var3.now;
                var0 = var2.bind(var3)();
            case 55:
                _closure1_slot110 = var0;
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
    var28 = var7;
    var26 = var3;
    var3 = new var28[var9](var27, var26, var25);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot69 = var3;
    var4 = 87;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/MediaEngineStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.WINDOWS_NOISE_SUPPRESSION_EFFECT = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [15, 17, 18, 57, 6, 7, 5, 3436, 3441, 1590, 3442, 3472, 1310, 3473, 1216, 3475, 3476, 1372, 3477, 3587, 1613, 12295, 660, 3465, 3973, 665, 12296, 3469, 3, 667, 478, 3592, 3589, 3974, 4225, 4226, 12297, 12298, 8583, 8582, 22, 12273, 12299, 12272, 12300, 7968, 12301, 12304, 795, 12305, 8179, 12306, 12307, 12308, 12264, 12309, 12310, 12311, 12312, 12313, 12314, 3468, 3471, 806, 3670, 12315, 1347, 12316, 12317, 3033, 587, 12362, 1234, 12404, 12405, 12406, 12407, 12408, 12411, 44, 12294, 12269, 7404, 1207, 12256, 7997, 566, 2]);