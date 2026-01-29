// modules/clips/ClipsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun30386: for (var _fun30386_ip = 0;;) switch (_fun30386_ip) {
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
                _fun30386_ip = 74;
                continue _fun30386;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot33 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot33 = var0;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var3
        _fun30389: for (var _fun30389_ip = 0;;) switch (_fun30389_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun30389_ip = 45;
                    continue _fun30389
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun30389_ip = 54;
                    continue _fun30389
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun30389_ip = 342;
                    continue _fun30389
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun30389_ip = 322;
                    continue _fun30389
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun30389_ip = 282;
                    continue _fun30389
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun30389_ip = 269;
                    continue _fun30389
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
                    _fun30389_ip = 162;
                    continue _fun30389
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun30389_ip = 178;
                    continue _fun30389
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun30389_ip = 248;
                    continue _fun30389
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun30389_ip = 248;
                    continue _fun30389
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun30389_ip = 233;
                    continue _fun30389
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun30389_ip = 246;
                    continue _fun30389
                }
            case 233:
                var8 = _closure1_slot35;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun30389_ip = 264;
                continue _fun30389;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun30389_ip = 282;
                continue _fun30389;
            case 269:
                var6 = _closure1_slot35;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun30389_ip = 322;
                    continue _fun30389
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
                    _fun30389_ip = 329;
                    continue _fun30389
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun30390: for (var _fun30390_ip = 0;;) switch (_fun30390_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun30390_ip = 56;
                                continue _fun30390
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
                            _fun30390_ip = 67;
                            continue _fun30390;
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
    var _closure1_slot34 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var3
        _fun30391: for (var _fun30391_ip = 0;;) switch (_fun30391_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun30391_ip = 23;
                    continue _fun30391
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun30391_ip = 33;
                    continue _fun30391
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
                    _fun30391_ip = 70;
                    continue _fun30391
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun30391_ip = 55;
                    continue _fun30391
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot35 = var0;
    var0 = function() { // Original name: _migrateDefaultStorage, environment: var3
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot9;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun30394: for (var _fun30394_ip = 0;;) switch (_fun30394_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun30394_ip = 183;
                            continue _fun30394
                        }
                    case 10:
                        var1 = _closure1_slot31;
                        var1 = var1.clipsSettings;
                        var3 = var1.storageLocation;
                        var1 = _closure1_slot17;
                        if (!(var3 === var1)) {
                            _fun30394_ip = 175;
                            continue _fun30394
                        }
                    case 40:
                        var3 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var5 = 12;
                        var1 = var1[var5];
                        var4 = undefined;
                        var1 = var3.bind(var4)(var1);
                        var3 = null;
                        if (!(var3 != var1)) {
                            _fun30394_ip = 175;
                            continue _fun30394
                        }
                    case 68:
                        var6 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var1 = var1[var5];
                        var1 = var6.bind(var4)(var1);
                        var1 = var1.remoteApp;
                        if (!(var3 != var1)) {
                            _fun30394_ip = 175;
                            continue _fun30394
                        }
                    case 95:
                        var3 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var1 = var1[var5];
                        var1 = var3.bind(var4)(var1);
                        var4 = var1.remoteApp;
                        var3 = var4.getPath;
                        var1 = 'documents';
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 139);
                    case 137:
                        return var1;
                    case 139:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun30394_ip = 180;
                            continue _fun30394
                        }
                    case 145:
                        var3 = _closure1_slot31;
                        var3 = var3.clipsSettings;
                        var3.storageLocation = var1;
                        var3 = _closure1_slot32;
                        var2 = var3.emitChange;
                        var2 = var2.bind(var3)();
                    case 175:
                        var2 = undefined;
                        return var2;
                    case 180:
                        return var1;
                    case 183:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot36 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot36 = var0;
    var0 = function(arg0, arg1, arg2) { // Original name: parseAndTrackClipMetadata, environment: var3
        _fun30395: for (var _fun30395_ip = 0;;) switch (_fun30395_ip) {
            case 0:
                var2 = arg0;
                var4 = arg1;
                var9 = undefined;
                var5 = undefined;
                var0 = undefined;
                var1 = undefined;
                var8 = _closure1_slot0;
                var6 = _closure1_slot2;
                var7 = 17;
                var6 = var6[var7];
                var8 = var8.bind(var9)(var6);
                var6 = var8.areAdvancedSignalsEnabled;
                var6 = var6.bind(var8)();
                if (var6) {
                    _fun30395_ip = 54;
                    continue _fun30395
                }
            case 50:
                var6 = false;
                return var6;
            case 54:
                var8 = _closure1_slot11;
                var6 = var8.getId;
                var8 = var6.bind(var8)();
                var6 = arg2;
                if (!(var6 === var8)) {
                    _fun30395_ip = 283;
                    continue _fun30395
                }
            case 78:
                var8 = var4;
                var6 = null;
                if (!(var6 != var8)) {
                    _fun30395_ip = 279;
                    continue _fun30395
                }
            case 90:
                var10 = var4;
                var9 = var10.indexOf;
                var8 = '__CLIP_METADATA__';
                var9 = var9.bind(var10)(var8);
                var5 = var9;
                var8 = -1;
                if (!(var8 !== var9)) {
                    _fun30395_ip = 275;
                    continue _fun30395
                }
            case 126: // try_start_0
                var7 = var5 + var7;
                var5 = var4;
                var4 = var5.substring;
                var8 = var4.bind(var5)(var7);
                var4 = global;
                var7 = var4.JSON;
                var5 = var7.parse;
                var5 = var5.bind(var7)(var8);
                var0 = var5;
                var5 = var5.id;
                if (!(var6 != var5)) {
                    _fun30395_ip = 265;
                    continue _fun30395
                }
            case 175:
                var8 = _closure1_slot29;
                var7 = var8.get;
                var5 = var2;
                var5 = var7.bind(var8)(var5);
                var1 = var5;
                if (!(var6 == var5)) {
                    _fun30395_ip = 243;
                    continue _fun30395
                }
            case 199:
                var4 = var4.Set;
                var5 = var4.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var4
                    }
                });
                var13 = var5;
                var4 = new var13[var4](var12);
                var5 = var4 instanceof Object ? var4 : var5;
                var1 = var5;
                var4 = _closure1_slot29;
                var3 = var4.set;
                var2 = var3.bind(var4)(var2, var5);
            case 243:
                var2 = var1;
                var1 = var2.add;
                var0 = var0.id;
                var0 = var1.bind(var2)(var0);
            case 261: // try_end0
                var0 = true;
                return var0;
            case 265:
                var0 = false;
                return var0;
            case 269: // catch_target0
                CatchBlockStart(arg_register = 0);
                var0 = false;
                return var0;
            case 275:
                var0 = false;
                return var0;
            case 279:
                var0 = false;
                return var0;
            case 283:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot37 = var0;
    var7 = global;
    var9 = var7.Object;
    var8 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var1);
    var10 = 0;
    var1 = var5[var10];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot11 = var1;
    var1 = 9;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var8 = var1.CLIPS_HARDWARE_CLASSIFICATION_VERSION;
    var _closure1_slot12 = var8;
    var8 = var1.ClipSaveTypes;
    var _closure1_slot13 = var8;
    var9 = var1.ClipsLengthSettings;
    var8 = var1.ClipsViewerConnectivitySettings;
    var11 = var1.ClipsUserEducationType;
    var _closure1_slot14 = var11;
    var11 = var1.MAX_SIMULTANEOUS_SAVE_CLIP_OPERATIONS;
    var _closure1_slot15 = var11;
    var1 = var1.DEFAULT_MAX_AUTO_CLIPS;
    var11 = 10;
    var11 = var5[var11];
    var11 = var4.bind(var0)(var11);
    var11 = var11.VoiceFlags;
    var _closure1_slot16 = var11;
    var11 = 11;
    var11 = var5[var11];
    var12 = var4.bind(var0)(var11);
    var11 = var12.ApplicationStreamFPS;
    var12 = var12.ApplicationStreamResolutions;
    var13 = 'default';
    var _closure1_slot17 = var13;
    var13 = new Array(0);
    var _closure1_slot18 = var13;
    var13 = new Array(0);
    var _closure1_slot19 = var13;
    var13 = new Array(0);
    var _closure1_slot20 = var13;
    var _closure1_slot21 = var10;
    var10 = null;
    var _closure1_slot22 = var10;
    var _closure1_slot23 = var10;
    var13 = {};
    var _closure1_slot24 = var13;
    var _closure1_slot25 = var10;
    var13 = new Array(0);
    var _closure1_slot26 = var13;
    var _closure1_slot27 = var10;
    var10 = {};
    var _closure1_slot28 = var10;
    var7 = var7.Map;
    var10 = var7.prototype;
    var10 = Object.create(var10, {
        constructor: {
            value: var7
        }
    });
    var17 = var10;
    var7 = new var17[var7](var16);
    var7 = var7 instanceof Object ? var7 : var10;
    var _closure1_slot29 = var7;
    var7 = {
        'clipsEnabled': false,
        'storageLocation': 'default',
        'clipsQuality': null,
        'clipsLength': null,
        'remindersEnabled': true,
        'decoupledClipsEnabled': false,
        'viewerClipsEnabled': true
    };
    var10 = {};
    var12 = var12.RESOLUTION_1080;
    var10.resolution = var12;
    var11 = var11.FPS_30;
    var10.frameRate = var11;
    var7.clipsQuality = var10;
    var9 = var9.SECONDS_30;
    var7.clipsLength = var9;
    var8 = var8.ALL;
    var7.viewerConnectivity = var8;
    var7.maxAutoClips = var1;
    var1 = {
        'enableDistributedSignals': true,
        'enablePhraseSignals': true,
        'enableGameSignals': true
    };
    var7.clipSignals = var1;
    var1 = {
        'emotionClassifier': true,
        'wakeWordDetector': false,
        'yellDetector': true,
        'whisperTranscription': true
    };
    var7.mlPipelinesEnabled = var1;
    var1 = ['clip that', 'clip it', 'clip clip'];
    var7.autoClipPhrases = var1;
    var _closure1_slot30 = var7;
    var1 = {
        'clipsSettings': null,
        'hardwareClassification': null,
        'hardwareClassificationForDecoupled': null,
        'hardwareClassificationVersion': 0,
        'newClipIds': null,
        'hasClips': false,
        'hasTakenDecoupledClip': false
    };
    var1.clipsSettings = var7;
    var7 = new Array(0);
    var1.newClipIds = var7;
    var7 = {
        'dismissedAt': null,
        'numberOfGamesLaunchedSinceDismissal': 0,
        'numberOfTimesDismissed': 0
    };
    var1.clipsEducationState = var7;
    var _closure1_slot31 = var1;
    var1 = 18;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.DeviceSettingsStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: ClipsStoreClass, environment: var5
            _fun30397: for (var _fun30397_ip = 0;;) switch (_fun30397_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot33;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun30397_ip = 69;
                        continue _fun30397
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun30397_ip = 105;
                    continue _fun30397;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
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
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun30398: for (var _fun30398_ip = 0;;) switch (_fun30398_ip) {
                case 0:
                    var1 = arg0;
                    var3 = this;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun30398_ip = 19;
                        continue _fun30398
                    }
                case 12:
                    _closure1_slot31 = var1;
                case 19:
                    var1 = function() { // Original name: migrateDefaultStorage, environment: var0
                        var0 = undefined;
                        var3 = _closure1_slot36;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    var2 = var3.waitFor;
                    var1 = _closure1_slot10;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(25);
        var0[0] = var4;
        var4 = {};
        var6 = 'getClips';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot19;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getPendingClips';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot20;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getUserAgnosticState';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot31;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getSettings';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot31;
            var0 = var0.clipsSettings;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getLastClipsSession';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot23;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getClipsWarningShown';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var1 = _closure1_slot22;
            var0 = arg0;
            var0 = var1 === var0;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getActiveAnimation';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot27;
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getStreamClipAnimations';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun30407: for (var _fun30407_ip = 0;;) switch (_fun30407_ip) {
                case 0:
                    var2 = _closure1_slot28;
                    var0 = arg0;
                    var0 = var2[var0];
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun30407_ip = 24;
                        continue _fun30407
                    }
                case 20:
                    var0 = _closure1_slot18;
                case 24:
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'hasAnyClipAnimations';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = global;
            var2 = var0.Object;
            var1 = var2.values;
            var0 = _closure1_slot28;
            var2 = var1.bind(var2)(var0);
            var1 = var2.some;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var1 = var0.length;
                var0 = 0;
                var0 = var1 > var0;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'getHardwareClassification';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot31;
            var0 = var0.hardwareClassification;
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'getHardwareClassificationForDecoupled';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot31;
            var0 = var0.hardwareClassificationForDecoupled;
            return var0;
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'getHardwareClassificationVersion';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot31;
            var0 = var0.hardwareClassificationVersion;
            return var0;
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'getIsAtMaxSaveClipOperations';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var1 = _closure1_slot21;
            var0 = _closure1_slot15;
            var0 = var1 >= var0;
            return var0;
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'getLastClipsError';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot25;
            return var0;
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'isClipsEnabledForUser';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun30415: for (var _fun30415_ip = 0;;) switch (_fun30415_ip) {
                case 0:
                    var1 = _closure1_slot24;
                    var0 = arg0;
                    var2 = var1[var0];
                    var0 = null;
                    var3 = var0 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun30415_ip = 31;
                        continue _fun30415
                    }
                case 25:
                    var1 = var2.clipsEnabled;
                case 31:
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun30415_ip = 41;
                        continue _fun30415
                    }
                case 38:
                    var0 = var1;
                case 41:
                    return var0;
            }
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'isVoiceRecordingAllowedForUser';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun30416: for (var _fun30416_ip = 0;;) switch (_fun30416_ip) {
                case 0:
                    var1 = _closure1_slot24;
                    var0 = arg0;
                    var2 = var1[var0];
                    var0 = null;
                    var3 = var0 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun30416_ip = 31;
                        continue _fun30416
                    }
                case 25:
                    var1 = var2.allowVoiceRecording;
                case 31:
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun30416_ip = 41;
                        continue _fun30416
                    }
                case 38:
                    var0 = var1;
                case 41:
                    return var0;
            }
        };
        var4.value = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'isViewerClippingAllowedForUser';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun30417: for (var _fun30417_ip = 0;;) switch (_fun30417_ip) {
                case 0:
                    var1 = _closure1_slot24;
                    var0 = arg0;
                    var2 = var1[var0];
                    var0 = null;
                    var3 = var0 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun30417_ip = 31;
                        continue _fun30417
                    }
                case 25:
                    var1 = var2.allowAnyViewerClips;
                case 31:
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun30417_ip = 41;
                        continue _fun30417
                    }
                case 38:
                    var0 = var1;
                case 41:
                    return var0;
            }
        };
        var4.value = var6;
        var0[17] = var4;
        var4 = {};
        var6 = 'hasClips';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot31;
            var0 = var0.hasClips;
            return var0;
        };
        var4.value = var6;
        var0[18] = var4;
        var4 = {};
        var6 = 'hasTakenDecoupledClip';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot31;
            var0 = var0.hasTakenDecoupledClip;
            return var0;
        };
        var4.value = var6;
        var0[19] = var4;
        var4 = {};
        var6 = 'getNewClipIds';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot31;
            var0 = var0.newClipIds;
            return var0;
        };
        var4.value = var6;
        var0[20] = var4;
        var4 = {};
        var6 = 'isClipExporting';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var2 = _closure1_slot26;
            var1 = var2.includes;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[21] = var4;
        var4 = {};
        var6 = 'getExportingClipIds';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot26;
            return var0;
        };
        var4.value = var6;
        var0[22] = var4;
        var4 = {};
        var6 = 'getMatchingGroupClip';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun30423: for (var _fun30423_ip = 0;;) switch (_fun30423_ip) {
                case 0:
                    var11 = arg0;
                    var10 = arg1;
                    var0 = null;
                    if (!(var0 == var11)) {
                        _fun30423_ip = 19;
                        continue _fun30423
                    }
                case 12:
                    if (!(var0 != var10)) {
                        _fun30423_ip = 260;
                        continue _fun30423
                    }
                case 19:
                    var2 = _closure1_slot34;
                    var1 = _closure1_slot19;
                    var8 = undefined;
                    var7 = var2.bind(var8)(var1);
                    var2 = var7.bind(var8)();
                    var1 = var2.done;
                    var6 = 14;
                    var5 = var2;
                    var4 = undefined;
                    var3 = undefined;
                    if (var1) {
                        _fun30423_ip = 258;
                        continue _fun30423
                    }
                case 62:
                    var1 = var5.value;
                    if (!(var0 != var10)) {
                        _fun30423_ip = 83;
                        continue _fun30423
                    }
                case 71:
                    var2 = var1.id;
                    if (!(var2 !== var10)) {
                        _fun30423_ip = 256;
                        continue _fun30423
                    }
                case 83:
                    var12 = var3;
                    if (!(var0 != var11)) {
                        _fun30423_ip = 231;
                        continue _fun30423
                    }
                case 93:
                    var2 = var1.decision;
                    var15 = var0 == var2;
                    var14 = var2;
                    var13 = undefined;
                    if (var15) {
                        _fun30423_ip = 137;
                        continue _fun30423
                    }
                case 111:
                    var15 = var2.signal;
                    var2 = var0 == var15;
                    var14 = var15;
                    var13 = undefined;
                    if (var2) {
                        _fun30423_ip = 137;
                        continue _fun30423
                    }
                case 129:
                    var13 = var15.type;
                    var14 = var15;
                case 137:
                    var15 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var15.bind(var8)(var2);
                    var2 = var2.ClipSignalTypes;
                    var2 = var2.DISTRIBUTED;
                    var4 = var14;
                    var12 = var3;
                    if (!(var13 === var2)) {
                        _fun30423_ip = 231;
                        continue _fun30423
                    }
                case 176:
                    var15 = var1.decision;
                    var16 = var0 == var15;
                    var13 = var15;
                    var2 = undefined;
                    if (var16) {
                        _fun30423_ip = 221;
                        continue _fun30423
                    }
                case 194:
                    var16 = var15.signal;
                    var15 = var0 == var16;
                    var13 = var16;
                    var2 = undefined;
                    if (var15) {
                        _fun30423_ip = 221;
                        continue _fun30423
                    }
                case 212:
                    var2 = var16.remoteTriggerClipId;
                    var13 = var16;
                case 221:
                    var12 = var13;
                    var4 = var14;
                    if (!(var2 !== var11)) {
                        _fun30423_ip = 254;
                        continue _fun30423
                    }
                case 231:
                    var13 = var7.bind(var8)();
                    var2 = var13.done;
                    var3 = var12;
                    var5 = var13;
                    if (var2) {
                        _fun30423_ip = 258;
                        continue _fun30423
                    }
                case 249:
                    _fun30423_ip = 62;
                    continue _fun30423;
                case 254:
                    return var1;
                case 256:
                    return var1;
                case 258:
                    return var0;
                case 260:
                    return var0;
            }
        };
        var4.value = var6;
        var0[23] = var4;
        var4 = {};
        var6 = 'wasClipSharedInChannel';
        var4.key = var6;
        var5 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun30424: for (var _fun30424_ip = 0;;) switch (_fun30424_ip) {
                case 0:
                    var2 = _closure1_slot29;
                    var1 = var2.get;
                    var0 = arg1;
                    var4 = var1.bind(var2)(var0);
                    var0 = null;
                    var2 = var0 == var4;
                    var1 = undefined;
                    if (var2) {
                        _fun30424_ip = 44;
                        continue _fun30424
                    }
                case 31:
                    var3 = var4.has;
                    var2 = arg0;
                    var1 = var3.bind(var4)(var2);
                case 44:
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun30424_ip = 54;
                        continue _fun30424
                    }
                case 51:
                    var0 = var1;
                case 54:
                    return var0;
            }
        };
        var4.value = var5;
        var0[24] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var1.bind(var0)(var7);
    var1 = 'ClipsStore';
    var8.displayName = var1;
    var8.persistKey = var1;
    var1 = new Array(14);
    var7 = function(arg0) { // Environment: var3
        _fun30425: for (var _fun30425_ip = 0;;) switch (_fun30425_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var2 = null;
                if (!(var2 == var1)) {
                    _fun30425_ip = 18;
                    continue _fun30425
                }
            case 11:
                var1 = _closure1_slot30;
            case 18:
                var0.clipsSettings = var1;
                var1 = 0;
                var0.newClipsCount = var1;
                return var0;
        }
    };
    var1[0] = var7;
    var7 = function(arg0) { // Environment: var3
        var1 = arg0;
        var2 = {};
        var3 = _closure1_slot30;
        var4 = var2;
        var0 = copyDataProperties(var4, var3);
        var3 = var1.clipsSettings;
        var4 = var2;
        var0 = copyDataProperties(var4, var3);
        var0 = {};
        var4 = var0;
        var3 = var1;
        var1 = copyDataProperties(var4, var3);
        var1 = 'clipsSettings';
        var0[var1] = var2;
        return var0;
    };
    var1[1] = var7;
    var7 = function(arg0) { // Environment: var3
        _fun30427: for (var _fun30427_ip = 0;;) switch (_fun30427_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var4 = var0;
                var3 = var1;
                var2 = copyDataProperties(var4, var3);
                var2 = var1.newClipIds;
                var1 = null;
                if (!(var1 == var2)) {
                    _fun30427_ip = 31;
                    continue _fun30427
                }
            case 27:
                var2 = new Array(0);
            case 31:
                var1 = 'newClipIds';
                var0[var1] = var2;
                return var0;
        }
    };
    var1[2] = var7;
    var7 = function(arg0) { // Environment: var3
        _fun30428: for (var _fun30428_ip = 0;;) switch (_fun30428_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var7 = var0;
                var6 = var1;
                var2 = copyDataProperties(var7, var6);
                var3 = var1.hardwareClassification;
                var2 = null;
                var5 = var2 != var3;
                var4 = null;
                if (!var5) {
                    _fun30428_ip = 35;
                    continue _fun30428
                }
            case 32:
                var4 = var3;
            case 35:
                var3 = 'hardwareClassification';
                var0[var3] = var4;
                var1 = var1.hardwareClassificationVersion;
                var3 = var2 != var1;
                var2 = 0;
                if (!var3) {
                    _fun30428_ip = 62;
                    continue _fun30428
                }
            case 59:
                var2 = var1;
            case 62:
                var1 = 'hardwareClassificationVersion';
                var0[var1] = var2;
                return var0;
        }
    };
    var1[3] = var7;
    var7 = function(arg0) { // Environment: var3
        _fun30429: for (var _fun30429_ip = 0;;) switch (_fun30429_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var5 = var0;
                var4 = var1;
                var2 = copyDataProperties(var5, var4);
                var1 = var1.hasClips;
                var2 = null;
                var2 = var2 != var1;
                if (!var2) {
                    _fun30429_ip = 33;
                    continue _fun30429
                }
            case 30:
                var2 = var1;
            case 33:
                var1 = 'hasClips';
                var0[var1] = var2;
                return var0;
        }
    };
    var1[4] = var7;
    var7 = function(arg0) { // Environment: var3
        var1 = arg0;
        var0 = {};
        var5 = var0;
        var4 = var1;
        var2 = copyDataProperties(var5, var4);
        var2 = {};
        var4 = var1.clipsSettings;
        var5 = var2;
        var1 = copyDataProperties(var5, var4);
        var1 = _closure1_slot30;
        var3 = var1.decoupledClipsEnabled;
        var1 = 'decoupledClipsEnabled';
        var2[var1] = var3;
        var1 = 'clipsSettings';
        var0[var1] = var2;
        return var0;
    };
    var1[5] = var7;
    var7 = function(arg0) { // Environment: var3
        _fun30431: for (var _fun30431_ip = 0;;) switch (_fun30431_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var5 = var0;
                var4 = var1;
                var2 = copyDataProperties(var5, var4);
                var1 = var1.hardwareClassificationForDecoupled;
                var2 = null;
                var3 = var2 != var1;
                if (!var3) {
                    _fun30431_ip = 33;
                    continue _fun30431
                }
            case 30:
                var2 = var1;
            case 33:
                var1 = 'hardwareClassificationForDecoupled';
                var0[var1] = var2;
                return var0;
        }
    };
    var1[6] = var7;
    var7 = function(arg0) { // Environment: var3
        _fun30432: for (var _fun30432_ip = 0;;) switch (_fun30432_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 19;
                var0 = var3[var0];
                var3 = undefined;
                var0 = var2.bind(var3)(var0);
                var2 = var0.default;
                var0 = null;
                var0 = var0 == var2;
                if (var0) {
                    _fun30432_ip = 52;
                    continue _fun30432
                }
            case 42:
                var0 = var2.getHardwareEncoding;
                var3 = var0.bind(var2)();
            case 52:
                var0 = {};
                var7 = var0;
                var6 = var1;
                var2 = copyDataProperties(var7, var6);
                var2 = {};
                var6 = var1.clipsSettings;
                var7 = var2;
                var4 = copyDataProperties(var7, var6);
                var4 = !var3;
                var5 = !var4;
                if (var4) {
                    _fun30432_ip = 100;
                    continue _fun30432
                }
            case 88:
                var4 = var1.clipsSettings;
                var5 = var4.clipsEnabled;
            case 100:
                var4 = 'clipsEnabled';
                var2[var4] = var5;
                var4 = !var3;
                var3 = !var4;
                if (var4) {
                    _fun30432_ip = 130;
                    continue _fun30432
                }
            case 118:
                var1 = var1.clipsSettings;
                var3 = var1.decoupledClipsEnabled;
            case 130:
                var1 = 'decoupledClipsEnabled';
                var2[var1] = var3;
                var1 = 'clipsSettings';
                var0[var1] = var2;
                return var0;
        }
    };
    var1[7] = var7;
    var7 = function(arg0) { // Environment: var3
        _fun30433: for (var _fun30433_ip = 0;;) switch (_fun30433_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var4 = var0;
                var3 = var1;
                var2 = copyDataProperties(var4, var3);
                var2 = var1.newClipIds;
                var1 = null;
                if (!(var1 == var2)) {
                    _fun30433_ip = 31;
                    continue _fun30433
                }
            case 27:
                var2 = new Array(0);
            case 31:
                var1 = 'newClipIds';
                var0[var1] = var2;
                var2 = undefined;
                var1 = 'newClipIDs';
                var0[var1] = var2;
                return var0;
        }
    };
    var1[8] = var7;
    var7 = function(arg0) { // Environment: var3
        _fun30434: for (var _fun30434_ip = 0;;) switch (_fun30434_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var6 = var0;
                var5 = var1;
                var2 = copyDataProperties(var6, var5);
                var2 = {};
                var5 = var1.clipsSettings;
                var6 = var2;
                var3 = copyDataProperties(var6, var5);
                var3 = var1.clipsSettings;
                var3 = var3.clipsQuality;
                var4 = 'number';
                var3 = typeof var3;
                if (!(var4 !== var3)) {
                    _fun30434_ip = 85;
                    continue _fun30434
                }
            case 53:
                var3 = var1.clipsSettings;
                var4 = var3.clipsQuality;
                var3 = null;
                if (!(var3 != var4)) {
                    _fun30434_ip = 85;
                    continue _fun30434
                }
            case 71:
                var1 = var1.clipsSettings;
                var3 = var1.clipsQuality;
                _fun30434_ip = 98;
                continue _fun30434;
            case 85:
                var1 = _closure1_slot30;
                var3 = var1.clipsQuality;
            case 98:
                var1 = 'clipsQuality';
                var2[var1] = var3;
                var1 = 'clipsSettings';
                var0[var1] = var2;
                return var0;
        }
    };
    var1[9] = var7;
    var7 = function(arg0) { // Environment: var3
        _fun30435: for (var _fun30435_ip = 0;;) switch (_fun30435_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var5 = var0;
                var4 = var1;
                var2 = copyDataProperties(var5, var4);
                var2 = {};
                var4 = var1.clipsSettings;
                var5 = var2;
                var3 = copyDataProperties(var5, var4);
                var1 = var1.clipsSettings;
                var3 = var1.remindersEnabled;
                var1 = null;
                if (!(var1 == var3)) {
                    _fun30435_ip = 61;
                    continue _fun30435
                }
            case 48:
                var1 = _closure1_slot30;
                var3 = var1.remindersEnabled;
            case 61:
                var1 = 'remindersEnabled';
                var2[var1] = var3;
                var1 = 'clipsSettings';
                var0[var1] = var2;
                return var0;
        }
    };
    var1[10] = var7;
    var7 = function(arg0) { // Environment: var3
        var0 = {};
        var3 = arg0;
        var4 = var0;
        var1 = copyDataProperties(var4, var3);
        var2 = false;
        var1 = 'hasTakenDecoupledClip';
        var0[var1] = var2;
        var2 = {
            'dismissedAt': null,
            'numberOfGamesLaunchedSinceDismissal': 0,
            'numberOfTimesDismissed': 0
        };
        var1 = 'clipsEducationState';
        var0[var1] = var2;
        return var0;
    };
    var1[11] = var7;
    var7 = function(arg0) { // Environment: var3
        _fun30437: for (var _fun30437_ip = 0;;) switch (_fun30437_ip) {
            case 0:
                var3 = arg0;
                var0 = {};
                var7 = var0;
                var6 = var3;
                var1 = copyDataProperties(var7, var6);
                var2 = {};
                var6 = var3.clipsSettings;
                var7 = var2;
                var1 = copyDataProperties(var7, var6);
                var1 = var3.clipsSettings;
                var5 = var1.maxAutoClips;
                var1 = null;
                if (!(var1 == var5)) {
                    _fun30437_ip = 61;
                    continue _fun30437
                }
            case 48:
                var4 = _closure1_slot30;
                var5 = var4.maxAutoClips;
            case 61:
                var4 = 'maxAutoClips';
                var2[var4] = var5;
                var4 = var3.clipsSettings;
                var5 = var4.clipSignals;
                if (!(var1 == var5)) {
                    _fun30437_ip = 99;
                    continue _fun30437
                }
            case 86:
                var4 = _closure1_slot30;
                var5 = var4.clipSignals;
            case 99:
                var4 = 'clipSignals';
                var2[var4] = var5;
                var4 = var3.clipsSettings;
                var5 = var4.mlPipelinesEnabled;
                if (!(var1 == var5)) {
                    _fun30437_ip = 137;
                    continue _fun30437
                }
            case 124:
                var4 = _closure1_slot30;
                var5 = var4.mlPipelinesEnabled;
            case 137:
                var4 = 'mlPipelinesEnabled';
                var2[var4] = var5;
                var3 = var3.clipsSettings;
                var3 = var3.autoClipPhrases;
                if (!(var1 == var3)) {
                    _fun30437_ip = 175;
                    continue _fun30437
                }
            case 162:
                var1 = _closure1_slot30;
                var3 = var1.autoClipPhrases;
            case 175:
                var1 = 'autoClipPhrases';
                var2[var1] = var3;
                var1 = 'clipsSettings';
                var0[var1] = var2;
                return var0;
        }
    };
    var1[12] = var7;
    var7 = function(arg0) { // Environment: var3
        _fun30438: for (var _fun30438_ip = 0;;) switch (_fun30438_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var6 = var0;
                var5 = var1;
                var2 = copyDataProperties(var6, var5);
                var2 = {};
                var5 = var1.clipsSettings;
                var6 = var2;
                var3 = copyDataProperties(var6, var5);
                var3 = var1.clipsSettings;
                var3 = var3.autoClipPhrases;
                var4 = var3.length;
                var3 = 0;
                if (!(var3 !== var4)) {
                    _fun30438_ip = 67;
                    continue _fun30438
                }
            case 53:
                var1 = var1.clipsSettings;
                var3 = var1.autoClipPhrases;
                _fun30438_ip = 80;
                continue _fun30438;
            case 67:
                var1 = _closure1_slot30;
                var3 = var1.autoClipPhrases;
            case 80:
                var1 = 'autoClipPhrases';
                var2[var1] = var3;
                var1 = 'clipsSettings';
                var0[var1] = var2;
                return var0;
        }
    };
    var1[13] = var7;
    var8.migrations = var1;
    var1 = 20;
    var1 = var5[var1];
    var16 = var6.bind(var0)(var1);
    var1 = {};
    var6 = function(arg0) { // Original name: handleSettingsUpdate, environment: var3
        var0 = arg0;
        var2 = var0.settings;
        var1 = {};
        var5 = _closure1_slot31;
        var6 = var1;
        var3 = copyDataProperties(var6, var5);
        var3 = {};
        var4 = _closure1_slot31;
        var5 = var4.clipsSettings;
        var6 = var3;
        var4 = copyDataProperties(var6, var5);
        var6 = var3;
        var5 = var2;
        var2 = copyDataProperties(var6, var5);
        var2 = 'clipsSettings';
        var1[var2] = var3;
        _closure1_slot31 = var1;
        var0 = undefined;
        return var0;
    };
    var1.CLIPS_SETTINGS_UPDATE = var6;
    var6 = function(arg0) { // Original name: handleSaveClip, environment: var3
        _fun30440: for (var _fun30440_ip = 0;;) switch (_fun30440_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.clip;
                var _closure2_slot0 = var3;
                var0 = global;
                var6 = var0.Math;
                var5 = var6.max;
                var0 = _closure1_slot21;
                var4 = 1;
                var0 = var0 - var4;
                var9 = 0;
                var0 = var5.bind(var6)(var0, var9);
                _closure1_slot21 = var0;
                var5 = {};
                var0 = var3.applicationName;
                var5.applicationName = var0;
                var0 = false;
                var5.ended = var0;
                var12 = _closure1_slot23;
                var13 = var5;
                var0 = copyDataProperties(var13, var12);
                var8 = _closure1_slot23;
                var6 = null;
                var10 = var6 == var8;
                var0 = undefined;
                var7 = undefined;
                if (var10) {
                    _fun30440_ip = 108;
                    continue _fun30440
                }
            case 102:
                var7 = var8.newClipIds;
            case 108:
                if (!(var6 == var7)) {
                    _fun30440_ip = 116;
                    continue _fun30440
                }
            case 112:
                var7 = new Array(0);
            case 116:
                var8 = new Array(1);
                var13 = var8;
                var12 = var7;
                var11 = 0;
                var7 = arraySpread(var13, var12, var11);
                var10 = var3.id;
                var8[var7] = var10;
                var7 = var7 + var4;
                var7 = 'newClipIds';
                var5[var7] = var8;
                _closure1_slot23 = var5;
                var5 = {};
                var12 = _closure1_slot31;
                var13 = var5;
                var8 = copyDataProperties(var13, var12);
                var8 = _closure1_slot31;
                var8 = var8.newClipIds;
                if (!(var6 == var8)) {
                    _fun30440_ip = 190;
                    continue _fun30440
                }
            case 186:
                var8 = new Array(0);
            case 190:
                var6 = new Array(1);
                var13 = var6;
                var12 = var8;
                var11 = 0;
                var8 = arraySpread(var13, var12, var11);
                var9 = var3.id;
                var6[var8] = var9;
                var8 = var8 + var4;
                var5[var7] = var6;
                _closure1_slot31 = var5;
                var6 = _closure1_slot20;
                var5 = var6.filter;
                var2 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1 !== var0;
                    return var0;
                };
                var2 = var5.bind(var6)(var2);
                _closure1_slot20 = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var12 = _closure1_slot19;
                var13 = var2;
                var11 = var4;
                var3 = arraySpread(var13, var12, var11);
                _closure1_slot19 = var2;
                var2 = _closure1_slot31;
                var1 = true;
                var2.hasClips = var1;
                return var0;
        }
    };
    var1.CLIPS_SAVE_CLIP = var6;
    var6 = function(arg0) { // Original name: handleSaveClipPlaceholder, environment: var3
        var0 = arg0;
        var0 = var0.clip;
        var1 = new Array(1);
        var1[0] = var0;
        var5 = _closure1_slot20;
        var4 = 1;
        var6 = var1;
        var2 = arraySpread(var6, var5, var4);
        _closure1_slot20 = var1;
        var0 = undefined;
        return var0;
    };
    var1.CLIPS_SAVE_CLIP_PLACEHOLDER = var6;
    var6 = function(arg0) { // Original name: handleSaveClipPlaceholderError, environment: var3
        var1 = arg0;
        var1 = var1.clipId;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot20;
        var2 = var3.filter;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var1 = var0.id;
            var0 = _closure2_slot0;
            var0 = var1 !== var0;
            return var0;
        };
        var0 = var2.bind(var3)(var0);
        _closure1_slot20 = var0;
        var0 = undefined;
        return var0;
    };
    var1.CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR = var6;
    var6 = function(arg0) { // Original name: handleSaveClipStart, environment: var3
        _fun30445: for (var _fun30445_ip = 0;;) switch (_fun30445_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.clipType;
                var2 = var0.streamKey;
                var6 = var0.thumbnail;
                var0 = _closure1_slot21;
                var4 = 1;
                var0 = var0 + var4;
                _closure1_slot21 = var0;
                var3 = _closure1_slot31;
                var0 = var3.hasTakenDecoupledClip;
                if (var0) {
                    _fun30445_ip = 68;
                    continue _fun30445
                }
            case 54:
                var5 = _closure1_slot13;
                var5 = var5.DECOUPLED;
                var0 = var7 === var5;
            case 68:
                var3.hasTakenDecoupledClip = var0;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun30445_ip = 177;
                    continue _fun30445
                }
            case 80:
                if (!(var0 != var6)) {
                    _fun30445_ip = 177;
                    continue _fun30445
                }
            case 84:
                var3 = global;
                var5 = var3.Date;
                var3 = var5.now;
                var7 = var3.bind(var5)();
                var5 = _closure1_slot27;
                var3 = var7;
                if (!(var0 != var5)) {
                    _fun30445_ip = 116;
                    continue _fun30445
                }
            case 112:
                var3 = _closure1_slot27;
            case 116:
                _closure1_slot27 = var3;
                var1 = _closure1_slot28;
                var5 = var1[var2];
                if (!(var0 == var5)) {
                    _fun30445_ip = 136;
                    continue _fun30445
                }
            case 132:
                var5 = new Array(0);
            case 136:
                var0 = new Array(1);
                var8 = 0;
                var10 = var0;
                var9 = var5;
                var3 = arraySpread(var10, var9, var8);
                var5 = {};
                var5.timestamp = var7;
                var5.thumbnail = var6;
                var0[var3] = var5;
                var3 = var3 + var4;
                var1[var2] = var0;
            case 177:
                var0 = undefined;
                return var0;
        }
    };
    var1.CLIPS_SAVE_CLIP_START = var6;
    var6 = function() { // Original name: handleSaveClipError, environment: var3
        var0 = global;
        var4 = var0.Math;
        var3 = var4.max;
        var2 = _closure1_slot21;
        var0 = 1;
        var2 = var2 - var0;
        var0 = 0;
        var0 = var3.bind(var4)(var2, var0);
        _closure1_slot21 = var0;
        var0 = undefined;
        return var0;
    };
    var1.CLIPS_SAVE_CLIP_ERROR = var6;
    var6 = function(arg0) { // Original name: handleStreamClipAnimationEnd, environment: var3
        _fun30447: for (var _fun30447_ip = 0;;) switch (_fun30447_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.streamKey;
                var5 = var1.timestamp;
                var _closure2_slot0 = var5;
                var1 = _closure1_slot27;
                if (!(var1 === var5)) {
                    _fun30447_ip = 38;
                    continue _fun30447
                }
            case 32:
                var1 = null;
                _closure1_slot27 = var1;
            case 38:
                var1 = _closure1_slot28;
                var4 = null;
                if (!(var4 != var5)) {
                    _fun30447_ip = 73;
                    continue _fun30447
                }
            case 48:
                var3 = _closure1_slot28;
                var4 = var3[var2];
                var3 = var4.filter;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.timestamp;
                    var0 = _closure2_slot0;
                    var0 = var1 !== var0;
                    return var0;
                };
                var0 = var3.bind(var4)(var0);
                _fun30447_ip = 77;
                continue _fun30447;
            case 73:
                var0 = new Array(0);
            case 77:
                var1[var2] = var0;
                var0 = undefined;
                return var0;
        }
    };
    var1.CLIPS_SAVE_ANIMATION_END = var6;
    var6 = function(arg0) { // Original name: handleStreamStart, environment: var3
        _fun30449: for (var _fun30449_ip = 0;;) switch (_fun30449_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.sourceName;
                var6 = var0.pid;
                var0 = _closure1_slot31;
                var0 = var0.clipsSettings;
                var0 = var0.clipsEnabled;
                if (var0) {
                    _fun30449_ip = 41;
                    continue _fun30449
                }
            case 37:
                var0 = false;
                return var0;
            case 41:
                var0 = null;
                var2 = var3;
                if (!(var0 != var6)) {
                    _fun30449_ip = 89;
                    continue _fun30449
                }
            case 50:
                var5 = _closure1_slot10;
                var4 = var5.getGameForPID;
                var5 = var4.bind(var5)(var6);
                var6 = var0 == var5;
                var4 = undefined;
                if (var6) {
                    _fun30449_ip = 79;
                    continue _fun30449
                }
            case 74:
                var4 = var5.name;
            case 79:
                if (!(var0 != var4)) {
                    _fun30449_ip = 86;
                    continue _fun30449
                }
            case 83:
                var3 = var4;
            case 86:
                var2 = var3;
            case 89:
                if (!(var0 != var2)) {
                    _fun30449_ip = 132;
                    continue _fun30449
                }
            case 93:
                var0 = '';
                if (!(var0 !== var2)) {
                    _fun30449_ip = 132;
                    continue _fun30449
                }
            case 101:
                var0 = {};
                var0.applicationName = var2;
                var2 = new Array(0);
                var0.newClipIds = var2;
                var2 = false;
                var0.ended = var2;
                _closure1_slot23 = var0;
                var0 = undefined;
                return var0;
            case 132:
                var0 = false;
                return var0;
        }
    };
    var1.STREAM_START = var6;
    var6 = function(arg0) { // Original name: handleStreamStop, environment: var3
        _fun30450: for (var _fun30450_ip = 0;;) switch (_fun30450_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.streamKey;
                var2 = null;
                _closure1_slot27 = var2;
                var1 = _closure1_slot28;
                var0 = new Array(0);
                var1[var5] = var0;
                var0 = _closure1_slot23;
                var0 = var2 != var0;
                if (!var0) {
                    _fun30450_ip = 160;
                    continue _fun30450
                }
            case 41:
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 15;
                var4 = var4[var1];
                var1 = undefined;
                var4 = var6.bind(var1)(var4);
                var1 = var4.decodeStreamKey;
                var1 = var1.bind(var4)(var5);
                var4 = var1.ownerId;
                var5 = _closure1_slot11;
                var1 = var5.getId;
                var1 = var1.bind(var5)();
                var1 = var4 === var1;
                if (!var1) {
                    _fun30450_ip = 157;
                    continue _fun30450
                }
            case 101:
                var4 = _closure1_slot23;
                var4 = var4.newClipIds;
                var5 = var4.length;
                var4 = 0;
                var2 = null;
                if (!(var4 !== var5)) {
                    _fun30450_ip = 151;
                    continue _fun30450
                }
            case 124:
                var4 = {};
                var7 = _closure1_slot23;
                var8 = var4;
                var5 = copyDataProperties(var8, var7);
                var6 = true;
                var5 = 'ended';
                var4[var5] = var6;
                var2 = var4;
            case 151:
                _closure1_slot23 = var2;
                var1 = undefined;
            case 157:
                var0 = var1;
            case 160:
                return var0;
        }
    };
    var1.STREAM_STOP = var6;
    var6 = function() { // Original name: handleClearClipsSession, environment: var3
        _fun30451: for (var _fun30451_ip = 0;;) switch (_fun30451_ip) {
            case 0:
                var2 = _closure1_slot23;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun30451_ip = 21;
                    continue _fun30451
                }
            case 13:
                _closure1_slot23 = var0;
                var0 = undefined;
                return var0;
            case 21:
                var0 = false;
                return var0;
        }
    };
    var1.CLIPS_CLEAR_CLIPS_SESSION = var6;
    var6 = function() { // Original name: clearNewClipIds, environment: var3
        var1 = _closure1_slot31;
        var0 = new Array(0);
        var1.newClipIds = var0;
        var0 = undefined;
        return var0;
    };
    var1.CLIPS_CLEAR_NEW_CLIP_IDS = var6;
    var6 = function(arg0) { // Original name: handleClipsDirectoryLoaded, environment: var3
        var0 = arg0;
        var3 = _closure1_slot31;
        var2 = var0.clips;
        var4 = var2.length;
        var2 = 0;
        var2 = var4 > var2;
        var3.hasClips = var2;
        var0 = var0.clips;
        _closure1_slot19 = var0;
        var0 = undefined;
        return var0;
    };
    var1.CLIPS_LOAD_DIRECTORY_SUCCESS = var6;
    var6 = function(arg0) { // Original name: handleClipsDelete, environment: var3
        _fun30454: for (var _fun30454_ip = 0;;) switch (_fun30454_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var3 = _closure1_slot19;
                var2 = var3.filter;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.filepath;
                    var0 = _closure2_slot0;
                    var0 = var0.filepath;
                    var0 = var1 !== var0;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                _closure1_slot19 = var1;
                var2 = var1.length;
                var1 = 0;
                if (!(var1 === var2)) {
                    _fun30454_ip = 58;
                    continue _fun30454
                }
            case 46:
                var1 = _closure1_slot31;
                var0 = false;
                var1.hasClips = var0;
            case 58:
                var0 = undefined;
                return var0;
        }
    };
    var1.CLIPS_DELETE_CLIP = var6;
    var6 = function(arg0) { // Original name: handleClipMetadataUpdate, environment: var3
        _fun30456: for (var _fun30456_ip = 0;;) switch (_fun30456_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.clip;
                var3 = _closure1_slot34;
                var1 = _closure1_slot19;
                var0 = var1.entries;
                var1 = var0.bind(var1)();
                var0 = undefined;
                var9 = var3.bind(var0)(var1);
                var3 = var9.bind(var0)();
                var1 = var3.done;
                var8 = 2;
                var4 = 0;
                var7 = 1;
                var6 = var3;
                if (var1) {
                    _fun30456_ip = 147;
                    continue _fun30456
                }
            case 60:
                var3 = var6.value;
                var1 = _closure1_slot8;
                var1 = var1.bind(var0)(var3, var8);
                var3 = var1[var4];
                var1 = var1[var7];
                var10 = var1.id;
                var1 = var5.id;
                if (!(var10 !== var1)) {
                    _fun30456_ip = 114;
                    continue _fun30456
                }
            case 97:
                var10 = var9.bind(var0)();
                var1 = var10.done;
                var6 = var10;
                if (var1) {
                    _fun30456_ip = 147;
                    continue _fun30456
                }
            case 112:
                _fun30456_ip = 60;
                continue _fun30456;
            case 114:
                var1 = _closure1_slot19;
                var1[var3] = var5;
                var12 = _closure1_slot19;
                var1 = new Array(0);
                var13 = var1;
                var11 = 0;
                var3 = arraySpread(var13, var12, var11);
                _closure1_slot19 = var1;
                var1 = undefined;
                return var1;
            case 147:
                return var0;
        }
    };
    var1.CLIPS_UPDATE_METADATA = var6;
    var6 = function(arg0) { // Original name: handleRTCConnectionFlagsUpdate, environment: var3
        var5 = arg0;
        var3 = _closure1_slot24;
        var2 = var5.userId;
        var1 = {};
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var6 = 16;
        var9 = var8[var6];
        var0 = undefined;
        var12 = var7.bind(var0)(var9);
        var11 = var12.hasFlag;
        var10 = var5.flags;
        var4 = _closure1_slot16;
        var9 = var4.CLIPS_ENABLED;
        var9 = var11.bind(var12)(var10, var9);
        var1.clipsEnabled = var9;
        var9 = var8[var6];
        var12 = var7.bind(var0)(var9);
        var11 = var12.hasFlag;
        var10 = var5.flags;
        var9 = var4.ALLOW_VOICE_RECORDING;
        var9 = var11.bind(var12)(var10, var9);
        var1.allowVoiceRecording = var9;
        var6 = var8[var6];
        var7 = var7.bind(var0)(var6);
        var6 = var7.hasFlag;
        var5 = var5.flags;
        var4 = var4.ALLOW_ANY_VIEWER_CLIPS;
        var4 = var6.bind(var7)(var5, var4);
        var1.allowAnyViewerClips = var4;
        var3[var2] = var1;
        return var0;
    };
    var1.RTC_CONNECTION_FLAGS = var6;
    var6 = function(arg0) { // Original name: handleShowCallWarning, environment: var3
        var0 = arg0;
        var1 = var0.channelId;
        _closure1_slot22 = var1;
        var0 = undefined;
        return var0;
    };
    var1.CLIPS_SHOW_CALL_WARNING = var6;
    var6 = function(arg0) { // Original name: handleVoiceChannelSelect, environment: var3
        _fun30459: for (var _fun30459_ip = 0;;) switch (_fun30459_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channelId;
                var0 = _closure1_slot22;
                if (!(var2 !== var0)) {
                    _fun30459_ip = 25;
                    continue _fun30459
                }
            case 19:
                var0 = null;
                _closure1_slot22 = var0;
            case 25:
                var0 = undefined;
                return var0;
        }
    };
    var1.VOICE_CHANNEL_SELECT = var6;
    var6 = function(arg0) { // Original name: handleClassifyHardware, environment: var3
        _fun30460: for (var _fun30460_ip = 0;;) switch (_fun30460_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.classification;
                var0 = _closure1_slot31;
                var5 = var0.hardwareClassification;
                var2 = _closure1_slot31;
                var0 = _closure1_slot12;
                var2.hardwareClassificationVersion = var0;
                var0 = _closure1_slot31;
                var0.hardwareClassification = var3;
                var0 = _closure1_slot31;
                var4 = var0.hardwareClassification;
                var7 = _closure1_slot0;
                var0 = _closure1_slot2;
                var6 = 14;
                var2 = var0[var6];
                var0 = undefined;
                var2 = var7.bind(var0)(var2);
                var2 = var2.ClipsHardwareClassification;
                var2 = var2.MEETS_AUTO_ENABLE;
                var2 = var4 === var2;
                if (!var2) {
                    _fun30460_ip = 130;
                    continue _fun30460
                }
            case 97:
                var7 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var6];
                var4 = var7.bind(var0)(var4);
                var4 = var4.ClipsHardwareClassification;
                var4 = var4.MEETS_AUTO_ENABLE;
                var2 = var5 !== var4;
            case 130:
                if (!var2) {
                    _fun30460_ip = 151;
                    continue _fun30460
                }
            case 133:
                var2 = _closure1_slot31;
                var4 = var2.clipsSettings;
                var2 = true;
                var4.clipsEnabled = var2;
            case 151:
                var2 = _closure1_slot31;
                var4 = var2.hardwareClassificationForDecoupled;
                var2 = _closure1_slot31;
                var2.hardwareClassificationForDecoupled = var3;
                var2 = _closure1_slot31;
                var3 = var2.hardwareClassificationForDecoupled;
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var5.bind(var0)(var2);
                var2 = var2.ClipsHardwareClassification;
                var2 = var2.MEETS_AUTO_ENABLE;
                var2 = var3 === var2;
                if (!var2) {
                    _fun30460_ip = 250;
                    continue _fun30460
                }
            case 217:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var3 = var5.bind(var0)(var3);
                var3 = var3.ClipsHardwareClassification;
                var3 = var3.MEETS_AUTO_ENABLE;
                var2 = var4 !== var3;
            case 250:
                if (!var2) {
                    _fun30460_ip = 269;
                    continue _fun30460
                }
            case 253:
                var3 = _closure1_slot31;
                var3 = var3.clipsSettings;
                var2 = var3.clipsEnabled;
            case 269:
                if (!var2) {
                    _fun30460_ip = 290;
                    continue _fun30460
                }
            case 272:
                var1 = _closure1_slot31;
                var2 = var1.clipsSettings;
                var1 = true;
                var2.decoupledClipsEnabled = var1;
            case 290:
                return var0;
        }
    };
    var1.CLIPS_CLASSIFY_HARDWARE = var6;
    var6 = function(arg0) { // Original name: handleClipsInit, environment: var3
        _fun30461: for (var _fun30461_ip = 0;;) switch (_fun30461_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.applicationName;
                var0 = null;
                _closure1_slot25 = var0;
                var0 = _closure1_slot31;
                var0 = var0.clipsSettings;
                var0 = var0.clipsEnabled;
                var2 = false;
                if (var0) {
                    _fun30461_ip = 41;
                    continue _fun30461
                }
            case 39:
                return var2;
            case 41:
                var0 = {};
                var0.applicationName = var3;
                var3 = new Array(0);
                var0.newClipIds = var3;
                var0.ended = var2;
                _closure1_slot23 = var0;
                var0 = undefined;
                return var0;
        }
    };
    var1.CLIPS_INIT = var6;
    var6 = function(arg0) { // Original name: handleClipsInitFailure, environment: var3
        var0 = arg0;
        var1 = var0.errMsg;
        _closure1_slot25 = var1;
        var0 = undefined;
        return var0;
    };
    var1.CLIPS_INIT_FAILURE = var6;
    var6 = function(arg0) { // Original name: handleDismissClipsEducation, environment: var3
        _fun30463: for (var _fun30463_ip = 0;;) switch (_fun30463_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.educationType;
                var0 = _closure1_slot14;
                var0 = var0.Error;
                if (!(var0 !== var2)) {
                    _fun30463_ip = 137;
                    continue _fun30463
                }
            case 27:
                var0 = _closure1_slot14;
                var0 = var0.Disabled;
                if (!(var0 !== var2)) {
                    _fun30463_ip = 55;
                    continue _fun30463
                }
            case 41:
                var0 = _closure1_slot14;
                var0 = var0.Enabled;
                if (!(var0 === var2)) {
                    _fun30463_ip = 143;
                    continue _fun30463
                }
            case 55:
                var0 = _closure1_slot31;
                var2 = var0.clipsEducationState;
                var0 = global;
                var3 = var0.Date;
                var0 = var3.now;
                var0 = var0.bind(var3)();
                var2.dismissedAt = var0;
                var0 = _closure1_slot31;
                var2 = var0.clipsEducationState;
                var0 = 0;
                var2.numberOfGamesLaunchedSinceDismissal = var0;
                var0 = _closure1_slot31;
                var2 = var0.clipsEducationState;
                var3 = var2.numberOfTimesDismissed;
                var0 = 1;
                var0 = var3 + var0;
                var2.numberOfTimesDismissed = var0;
                _fun30463_ip = 143;
                continue _fun30463;
            case 137:
                var0 = null;
                _closure1_slot25 = var0;
            case 143:
                var0 = undefined;
                return var0;
        }
    };
    var1.CLIPS_DISMISS_EDUCATION = var6;
    var6 = function(arg0) { // Original name: handleRunningGamesChange, environment: var3
        _fun30464: for (var _fun30464_ip = 0;;) switch (_fun30464_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.added;
                var1 = var0.length;
                var0 = 0;
                if (!(var1 > var0)) {
                    _fun30464_ip = 52;
                    continue _fun30464
                }
            case 20:
                var0 = _closure1_slot31;
                var1 = var0.clipsEducationState;
                var2 = var1.numberOfGamesLaunchedSinceDismissal;
                var0 = 1;
                var0 = var2 + var0;
                var1.numberOfGamesLaunchedSinceDismissal = var0;
            case 52:
                var0 = undefined;
                return var0;
        }
    };
    var1.RUNNING_GAMES_CHANGE = var6;
    var6 = function(arg0) { // Original name: handleSetExporting, environment: var3
        _fun30465: for (var _fun30465_ip = 0;;) switch (_fun30465_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.clipIds;
                var0 = null;
                if (!(var0 == var1)) {
                    _fun30465_ip = 21;
                    continue _fun30465
                }
            case 17:
                var1 = new Array(0);
            case 21:
                _closure1_slot26 = var1;
                var0 = undefined;
                return var0;
        }
    };
    var1.CLIPS_SET_EXPORTING = var6;
    var6 = function(arg0) { // Original name: handleMessageCreate, environment: var3
        _fun30466: for (var _fun30466_ip = 0;;) switch (_fun30466_ip) {
            case 0:
                var0 = arg0;
                var4 = _closure1_slot37;
                var3 = var0.channelId;
                var1 = var0.message;
                var2 = var1.content;
                var0 = var0.message;
                var5 = var0.author;
                var0 = null;
                var6 = var0 == var5;
                var1 = undefined;
                var0 = undefined;
                if (var6) {
                    _fun30466_ip = 54;
                    continue _fun30466
                }
            case 49:
                var0 = var5.id;
            case 54:
                var0 = var4.bind(var1)(var3, var2, var0);
                return var0;
        }
    };
    var1.MESSAGE_CREATE = var6;
    var6 = function(arg0) { // Original name: handleLoadMessagesSuccess, environment: var3
        _fun30467: for (var _fun30467_ip = 0;;) switch (_fun30467_ip) {
            case 0:
                var9 = arg0;
                var1 = _closure1_slot34;
                var0 = var9.messages;
                var7 = undefined;
                var6 = var1.bind(var7)(var0);
                var2 = var6.bind(var7)();
                var1 = var2.done;
                var3 = false;
                var5 = null;
                var4 = var2;
                var2 = undefined;
                var0 = false;
                if (var1) {
                    _fun30467_ip = 116;
                    continue _fun30467
                }
            case 46:
                var1 = var4.value;
                if (var3) {
                    _fun30467_ip = 98;
                    continue _fun30467
                }
            case 54:
                var13 = _closure1_slot37;
                var12 = var9.channelId;
                var11 = var1.content;
                var1 = var1.author;
                var14 = var5 == var1;
                var10 = undefined;
                if (var14) {
                    _fun30467_ip = 88;
                    continue _fun30467
                }
            case 83:
                var10 = var1.id;
            case 88:
                var3 = var13.bind(var7)(var12, var11, var10);
                var2 = var1;
            case 98:
                var11 = var6.bind(var7)();
                var1 = var11.done;
                var4 = var11;
                var0 = var3;
                if (!var1) {
                    _fun30467_ip = 46;
                    continue _fun30467
                }
            case 116:
                return var0;
        }
    };
    var1.LOAD_MESSAGES_SUCCESS = var6;
    var6 = var8.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var8
        }
    });
    var17 = var6;
    var15 = var1;
    var1 = new var17[var8](var16, var15, var14);
    var1 = var1 instanceof Object ? var1 : var6;
    var _closure1_slot32 = var1;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/clips/ClipsStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 57, 5, 3442, 1216, 3460, 660, 3461, 3033, 3462, 3463, 3464, 1384, 3467, 566, 3435, 806, 2]);