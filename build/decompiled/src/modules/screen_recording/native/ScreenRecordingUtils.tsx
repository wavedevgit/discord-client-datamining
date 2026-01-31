// modules/screen_recording/native/ScreenRecordingUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _getLatestVideo, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun100039: for (var _fun100039_ip = 0;;) switch (_fun100039_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun100039_ip = 213;
                            continue _fun100039
                        }
                    case 10:
                        var3 = undefined;
                        var4 = undefined;
                    case 14: // try_start_0
                        var5 = _closure1_slot5;
                        var2 = var5.getPhotos;
                        var1 = {
                            'first': 1,
                            'groupTypes': 'Recents',
                            'assetType': 'Videos'
                        };
                        var6 = ['filename', 'fileSize', 'playableDuration', 'imageSize'];
                        var1.include = var6;
                        var1 = var2.bind(var5)(var1);
                        SaveGenerator(address = 65);
                    case 63:
                        return var1;
                    case 65:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun100039_ip = 131;
                            continue _fun100039
                        }
                    case 71:
                        var4 = var1;
                        var2 = null;
                        if (!var1) {
                            _fun100039_ip = 128;
                            continue _fun100039
                        }
                    case 79:
                        var5 = var4;
                        var5 = var5.edges;
                        var2 = null;
                        if (!var5) {
                            _fun100039_ip = 128;
                            continue _fun100039
                        }
                    case 93:
                        var5 = var4;
                        var5 = var5.edges;
                        var6 = var5.length;
                        var5 = 0;
                        var6 = var6 > var5;
                        var2 = null;
                        if (!var6) {
                            _fun100039_ip = 128;
                            continue _fun100039
                        }
                    case 118:
                        var4 = var4.edges;
                        var2 = var4[var5];
                    case 128: // try_end0
                        return var2;
                    case 131:
                        return var1;
                    case 134: // catch_target0
                        CatchBlockStart(arg_register = 6);
                        var2 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 3;
                        var1 = var4[var1];
                        var3 = var2.bind(var3)(var1);
                        var2 = var3.show;
                        var1 = {};
                        var4 = 'Error';
                        var1.title = var4;
                        var4 = global;
                        var4 = var4.HermesInternal;
                        var5 = var4.concat;
                        var4 = 'Failed to get latest video from photo gallery, error: ';
                        var4 = var5.bind(var4)(var6);
                        var1.body = var4;
                        var1 = var2.bind(var3)(var1);
                        var1 = null;
                        return var1;
                    case 213:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot7 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot7 = var0;
    var0 = function() { // Original name: _checkAndRequestPermissions, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun100042: for (var _fun100042_ip = 0;;) switch (_fun100042_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun100042_ip = 275;
                            continue _fun100042
                        }
                    case 10:
                        var3 = undefined;
                        var6 = undefined;
                    case 14: // try_start_0
                        var2 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 4;
                        var1 = var4[var1];
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.requestPermissions;
                        var1 = var1.bind(var2)();
                        SaveGenerator(address = 51);
                    case 49:
                        return var1;
                    case 51:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun100042_ip = 193;
                            continue _fun100042
                        }
                    case 60:
                        var6 = var1;
                        var2 = var1.photosGranted;
                        if (var2) {
                            _fun100042_ip = 123;
                            continue _fun100042
                        }
                    case 74:
                        var4 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var2 = 3;
                        var2 = var7[var2];
                        var7 = var4.bind(var3)(var2);
                        var4 = var7.show;
                        var2 = {
                            'title': 'Error',
                            'body': 'Photos permission is required to save recordings'
                        };
                        var2 = var4.bind(var7)(var2);
                        var2 = false;
                        _fun100042_ip = 190;
                        continue _fun100042;
                    case 123:
                        var6 = var6.microphoneGranted;
                        var6 = !var6;
                        var4 = !var6;
                        if (!var6) {
                            _fun100042_ip = 187;
                            continue _fun100042
                        }
                    case 140:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var5 = 3;
                        var5 = var7[var5];
                        var7 = var6.bind(var3)(var5);
                        var6 = var7.show;
                        var5 = {
                            'title': 'Error',
                            'body': 'Microphone permission is required to record audio'
                        };
                        var5 = var6.bind(var7)(var5);
                        var4 = false;
                    case 187:
                        var2 = var4;
                    case 190: // try_end0
                        return var2;
                    case 193:
                        return var1;
                    case 196: // catch_target0
                        CatchBlockStart(arg_register = 6);
                        var2 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 3;
                        var1 = var4[var1];
                        var3 = var2.bind(var3)(var1);
                        var2 = var3.show;
                        var1 = {};
                        var4 = 'Error';
                        var1.title = var4;
                        var4 = global;
                        var4 = var4.HermesInternal;
                        var5 = var4.concat;
                        var4 = 'Failed to check permissions, error: ';
                        var4 = var5.bind(var4)(var6);
                        var1.body = var4;
                        var1 = var2.bind(var3)(var1);
                        var1 = false;
                        return var1;
                    case 275:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot8 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot8 = var0;
    var0 = function() { // Original name: _startRecordingProcess, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun100045: for (var _fun100045_ip = 0;;) switch (_fun100045_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun100045_ip = 440;
                            continue _fun100045
                        }
                    case 10:
                        var2 = arg0;
                        var4 = undefined;
                        var3 = undefined;
                    case 17: // try_start_0
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var1 = 4;
                        var1 = var7[var1];
                        var6 = var6.bind(var4)(var1);
                        var1 = var6.startRecording;
                        var1 = var1.bind(var6)();
                        SaveGenerator(address = 54);
                    case 52:
                        return var1;
                    case 54:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 6);
                        if (var6) {
                            _fun100045_ip = 327;
                            continue _fun100045
                        }
                    case 63:
                        var3 = var1;
                        var6 = var1.success;
                        if (var6) {
                            _fun100045_ip = 132;
                            continue _fun100045
                        }
                    case 75:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var6 = 3;
                        var6 = var8[var6];
                        var8 = var7.bind(var4)(var6);
                        var7 = var8.show;
                        var6 = {
                            'title': 'Error',
                            'body': 'Failed to start screen recording'
                        };
                        var6 = var7.bind(var8)(var6);
                        var6 = {};
                        var7 = false;
                        var6.success = var7;
                    case 129: // try_end0
                        return var6;
                    case 132: // try_start_1
                        var6 = var2;
                        var9 = null;
                        if (!(var4 !== var6)) {
                            _fun100045_ip = 175;
                            continue _fun100045
                        }
                    case 141:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var6 = 5;
                        var6 = var8[var6];
                        var8 = var7.bind(var4)(var6);
                        var7 = var8.getSurveyConfig;
                        var6 = var2;
                        var9 = var7.bind(var8)(var6);
                    case 175:
                        var7 = _closure1_slot4;
                        var6 = var7.getState;
                        var8 = var6.bind(var7)();
                        var7 = var8.startRecording;
                        var6 = var3.microphoneEnabled;
                        var2 = var7.bind(var8)(var6, var2, var9);
                        var6 = _closure1_slot4;
                        var2 = var6.getState;
                        var6 = var2.bind(var6)();
                        var2 = var6.resetActionSheet;
                        var2 = var2.bind(var6)();
                        var7 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var6 = 6;
                        var6 = var2[var6];
                        var7 = var7.bind(var4)(var6);
                        var6 = var7.openLazy;
                        var8 = _closure1_slot0;
                        var5 = 8;
                        var5 = var2[var5];
                        var8 = var8.bind(var4)(var5);
                        var5 = 7;
                        var5 = var2[var5];
                        var2 = var2.paths;
                        var5 = var8.bind(var4)(var5, var2);
                        var2 = 'ScreenRecordingActionSheet';
                        var2 = var6.bind(var7)(var5, var2);
                        var2 = {};
                        var5 = true;
                        var2.success = var5;
                        var3 = var3.microphoneEnabled;
                        var2.microphoneEnabled = var3;
                    case 324: // try_end1
                        return var2;
                    case 327:
                        return var1;
                    case 330: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 7);
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 3;
                        var2 = var5[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.show;
                        var2 = {};
                        var5 = 'Error';
                        var2.title = var5;
                        var5 = global;
                        var5 = var5.HermesInternal;
                        var6 = var5.concat;
                        var5 = 'Failed to start screen recording, error: ';
                        var5 = var6.bind(var5)(var7);
                        var2.body = var5;
                        var2 = var3.bind(var4)(var2);
                        var2 = _closure1_slot4;
                        var1 = var2.getState;
                        var2 = var1.bind(var2)();
                        var1 = var2.stopRecording;
                        var1 = var1.bind(var2)();
                        var1 = {};
                        var2 = false;
                        var1.success = var2;
                        return var1;
                    case 440:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot9 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot9 = var0;
    var0 = function() { // Original name: _stopRecordingProcess, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun100048: for (var _fun100048_ip = 0;;) switch (_fun100048_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun100048_ip = 228;
                            continue _fun100048
                        }
                    case 10: // try_start_0
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var1 = 4;
                        var1 = var5[var1];
                        var5 = undefined;
                        var4 = var4.bind(var5)(var1);
                        var1 = var4.stopRecording;
                        var1 = var1.bind(var4)();
                        SaveGenerator(address = 49);
                    case 47:
                        return var1;
                    case 49:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun100048_ip = 120;
                            continue _fun100048
                        }
                    case 55:
                        var4 = var1.success;
                        var4 = !var4;
                        var2 = !var4;
                        if (!var4) {
                            _fun100048_ip = 117;
                            continue _fun100048
                        }
                    case 70:
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 3;
                        var3 = var6[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.show;
                        var3 = {
                            'title': 'Error',
                            'body': 'Failed to stop screen recording, but not error'
                        };
                        var3 = var4.bind(var5)(var3);
                        var2 = false;
                    case 117: // try_end0
                        return var2;
                    case 120:
                        return var1;
                    case 123: // catch_target0
                        CatchBlockStart(arg_register = 7);
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 3;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.show;
                        var2 = {};
                        var5 = 'Error';
                        var2.title = var5;
                        var5 = global;
                        var5 = var5.HermesInternal;
                        var6 = var5.concat;
                        var5 = 'Failed to stop screen recording, error: ';
                        var5 = var6.bind(var5)(var7);
                        var2.body = var5;
                        var2 = var3.bind(var4)(var2);
                        var2 = _closure1_slot4;
                        var1 = var2.getState;
                        var2 = var1.bind(var2)();
                        var1 = var2.stopRecording;
                        var1 = var1.bind(var2)();
                        var1 = false;
                        return var1;
                    case 228:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot10 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot10 = var0;
    var0 = function() { // Original name: _submitBugReportWithScreenRecording, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun100051: for (var _fun100051_ip = 0;;) switch (_fun100051_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun100051_ip = 1700;
                            continue _fun100051
                        }
                    case 12:
                        var9 = arg0;
                        var22 = arg1;
                        var1 = undefined;
                        var3 = undefined;
                        var11 = undefined;
                        var _closure4_slot0 = var1;
                        var13 = undefined;
                        var6 = undefined;
                        var17 = undefined;
                        var23 = undefined;
                        var12 = undefined;
                        var16 = undefined;
                        var18 = undefined;
                        var7 = undefined;
                    case 44: // try_start_0
                        var8 = _closure1_slot4;
                        var4 = var8.getState;
                        var4 = var4.bind(var8)();
                        var4 = var4.currentSurveyId;
                        var3 = var4;
                        var14 = null;
                        if (!(var14 != var4)) {
                            _fun100051_ip = 1597;
                            continue _fun100051
                        }
                    case 79:
                        var4 = var3;
                        var8 = '';
                        if (!(var8 !== var4)) {
                            _fun100051_ip = 1597;
                            continue _fun100051
                        }
                    case 93:
                        var10 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var4 = 5;
                        var4 = var15[var4];
                        var10 = var10.bind(var1)(var4);
                        var4 = var10.getSurveyConfig;
                        var3 = var4.bind(var10)(var3);
                        var11 = var3;
                        _closure4_slot0 = var3;
                        if (!(var14 != var3)) {
                            _fun100051_ip = 1547;
                            continue _fun100051
                        }
                    case 138:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var10 = 9;
                        var3 = var3[var10];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.fetchBugReportConfig;
                        var3 = var3.bind(var4)();
                        SaveGenerator(address = 172);
                    case 170:
                        return var3;
                    case 172:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun100051_ip = 1544;
                            continue _fun100051
                        }
                    case 181:
                        var19 = var3.features;
                        var15 = var19.find;
                        var4 = function(arg0) { // Environment: var5
                            _fun100052: for (var _fun100052_ip = 0;;) switch (_fun100052_ip) {
                                case 0:
                                    var3 = arg0;
                                    var5 = var3.name;
                                    var2 = null;
                                    var4 = var2 == var5;
                                    var0 = undefined;
                                    if (var4) {
                                        _fun100052_ip = 68;
                                        continue _fun100052
                                    }
                                case 19:
                                    var4 = var5.toLowerCase;
                                    var6 = var4.bind(var5)();
                                    var5 = var6.includes;
                                    var4 = _closure4_slot0;
                                    var4 = var4.uploadConfig;
                                    var7 = var4.featureName;
                                    var4 = var7.toLowerCase;
                                    var4 = var4.bind(var7)();
                                    var0 = var5.bind(var6)(var4);
                                case 68:
                                    if (var0) {
                                        _fun100052_ip = 138;
                                        continue _fun100052
                                    }
                                case 71:
                                    var3 = var3.squad;
                                    var2 = var2 == var3;
                                    var1 = undefined;
                                    if (var2) {
                                        _fun100052_ip = 135;
                                        continue _fun100052
                                    }
                                case 86:
                                    var2 = var3.toLowerCase;
                                    var4 = var2.bind(var3)();
                                    var3 = var4.includes;
                                    var2 = _closure4_slot0;
                                    var2 = var2.uploadConfig;
                                    var5 = var2.squadName;
                                    var2 = var5.toLowerCase;
                                    var2 = var2.bind(var5)();
                                    var1 = var3.bind(var4)(var2);
                                case 135:
                                    var0 = var1;
                                case 138:
                                    return var0;
                            }
                        };
                        var13 = var15.bind(var19)(var4);
                        var6 = new Array(0);
                        var4 = function() { // Original name: getLatestVideo, environment: var5
                            var0 = undefined;
                            var3 = _closure1_slot7;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var4 = var4.bind(var1)();
                        SaveGenerator(address = 223);
                    case 221:
                        return var4;
                    case 223:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 15);
                        if (var15) {
                            _fun100051_ip = 1541;
                            continue _fun100051
                        }
                    case 232:
                        var17 = var4;
                        if (!(var14 != var4)) {
                            _fun100051_ip = 538;
                            continue _fun100051
                        }
                    case 242:
                        var19 = _closure1_slot1;
                        var15 = _closure1_slot2;
                        var21 = 10;
                        var15 = var15[var21];
                        var19 = var19.bind(var1)(var15);
                        var15 = {};
                        var20 = var17;
                        var20 = var20.node;
                        var20 = var20.id;
                        var23 = var20;
                        if (!(var14 == var20)) {
                            _fun100051_ip = 307;
                            continue _fun100051
                        }
                    case 285:
                        var20 = var17;
                        var20 = var20.node;
                        var20 = var20.image;
                        var20 = var20.uri;
                        _fun100051_ip = 310;
                        continue _fun100051;
                    case 307:
                        var20 = var23;
                    case 310:
                        var15.id = var20;
                        var20 = var17.node;
                        var20 = var20.image;
                        var20 = var20.uri;
                        var15.uri = var20;
                        var20 = var17.node;
                        var20 = var20.image;
                        var20 = var20.uri;
                        var15.originalUri = var20;
                        var20 = var17.node;
                        var20 = var20.image;
                        var20 = var20.mimeType;
                        var15.mimeType = var20;
                        var20 = var17.node;
                        var20 = var20.image;
                        var20 = var20.width;
                        var15.width = var20;
                        var20 = var17.node;
                        var20 = var20.image;
                        var20 = var20.height;
                        var15.height = var20;
                        var20 = var17.node;
                        var20 = var20.image;
                        var20 = var20.filename;
                        var15.filename = var20;
                        var17 = var17.node;
                        var17 = var17.image;
                        var17 = var17.playableDuration;
                        var15.playableDuration = var17;
                        var20 = _closure1_slot0;
                        var17 = _closure1_slot2;
                        var17 = var17[var21];
                        var17 = var20.bind(var1)(var17);
                        var17 = var17.UploadPlatform;
                        var17 = var17.REACT_NATIVE;
                        var15.platform = var17;
                        var17 = var19.prototype;
                        var17 = Object.create(var17, {
                            constructor: {
                                value: var19
                            }
                        });
                        var30 = var17;
                        var29 = var15;
                        var15 = new var30[var19](var29, var28);
                        var19 = var15 instanceof Object ? var15 : var17;
                        var17 = var6;
                        var15 = var17.push;
                        var15 = var15.bind(var17)(var19);
                    case 538:
                        var15 = var22;
                        if (!(var14 != var15)) {
                            _fun100051_ip = 840;
                            continue _fun100051
                        }
                    case 548:
                        var15 = var22;
                        if (!(var8 !== var15)) {
                            _fun100051_ip = 840;
                            continue _fun100051
                        }
                    case 558:
                        var19 = var22;
                        var17 = var19.split;
                        var15 = '/';
                        var17 = var17.bind(var19)(var15);
                        var15 = var17.pop;
                        var15 = var15.bind(var17)();
                        var12 = var15;
                        if (!(var14 == var15)) {
                            _fun100051_ip = 640;
                            continue _fun100051
                        }
                    case 592:
                        var15 = global;
                        var19 = var15.Date;
                        var17 = var19.now;
                        var20 = var17.bind(var19)();
                        var15 = var15.HermesInternal;
                        var19 = var15.concat;
                        var17 = 'audio_';
                        var15 = '.wav';
                        var19 = var19.bind(var17)(var20, var15);
                        _fun100051_ip = 643;
                        continue _fun100051;
                    case 640:
                        var19 = var12;
                    case 643:
                        var17 = _closure1_slot1;
                        var20 = _closure1_slot2;
                        var15 = 10;
                        var12 = var20[var15];
                        var17 = var17.bind(var1)(var12);
                        var12 = {};
                        var21 = global;
                        var24 = var21.Date;
                        var23 = var24.now;
                        var25 = var23.bind(var24)();
                        var23 = var21.HermesInternal;
                        var24 = var23.concat;
                        var23 = 'audio_';
                        var23 = var24.bind(var23)(var25);
                        var12.id = var23;
                        var23 = var22;
                        var22 = var21.HermesInternal;
                        var24 = var22.concat;
                        var22 = 'file://';
                        var24 = var24.bind(var22)(var23);
                        var12.uri = var24;
                        var21 = var21.HermesInternal;
                        var21 = var21.concat;
                        var21 = var21.bind(var22)(var23);
                        var12.originalUri = var21;
                        var21 = 'audio/wav';
                        var12.mimeType = var21;
                        var12.filename = var19;
                        var19 = _closure1_slot0;
                        var15 = var20[var15];
                        var15 = var19.bind(var1)(var15);
                        var15 = var15.UploadPlatform;
                        var15 = var15.REACT_NATIVE;
                        var12.platform = var15;
                        var15 = var17.prototype;
                        var15 = Object.create(var15, {
                            constructor: {
                                value: var17
                            }
                        });
                        var30 = var15;
                        var29 = var12;
                        var12 = new var30[var17](var29, var28);
                        var17 = var12 instanceof Object ? var12 : var15;
                        var15 = var6;
                        var12 = var15.push;
                        var12 = var12.bind(var15)(var17);
                    case 840:
                        var12 = var9;
                        if (!(var1 !== var12)) {
                            _fun100051_ip = 1153;
                            continue _fun100051
                        }
                    case 850:
                        var12 = var9;
                        var15 = var12.length;
                        var12 = 0;
                        if (!(var15 > var12)) {
                            _fun100051_ip = 1153;
                            continue _fun100051
                        }
                    case 867:
                        var5 = function(arg0) { // Original name: formatTranscription, environment: var5
                            var3 = arg0;
                            var4 = {};
                            var0 = global;
                            var1 = var0.Date;
                            var2 = var1.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var1
                                }
                            });
                            var8 = var2;
                            var1 = new var8[var1](var7);
                            var2 = var1 instanceof Object ? var1 : var2;
                            var1 = var2.toISOString;
                            var1 = var1.bind(var2)();
                            var4.generated = var1;
                            var1 = var3.length;
                            var4.totalSegments = var1;
                            var2 = var3.map;
                            var1 = function(arg0) { // Environment: var1
                                var1 = arg0;
                                var0 = {};
                                var2 = var1.text;
                                var0.text = var2;
                                var2 = var1.startTime;
                                var0.startTime = var2;
                                var1 = var1.duration;
                                var0.duration = var1;
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                            var4.segments = var1;
                            var3 = var0.JSON;
                            var2 = var3.stringify;
                            var1 = null;
                            var0 = 2;
                            var0 = var2.bind(var3)(var4, var1, var0);
                            return var0;
                        };
                        var27 = var5.bind(var1)(var9);
                        var19 = global;
                        var9 = var19.Date;
                        var5 = var9.now;
                        var12 = var5.bind(var9)();
                        var5 = var19.HermesInternal;
                        var9 = var5.concat;
                        var21 = 'transcription_';
                        var5 = '.json';
                        var17 = var9.bind(var21)(var12, var5);
                        var16 = var17;
                        var9 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var5 = 11;
                        var5 = var12[var5];
                        var15 = var9.bind(var1)(var5);
                        var12 = var15.writeFile;
                        var29 = 'cache';
                        var26 = 'utf8';
                        var30 = var15;
                        var28 = var17;
                        var5 = var30[var12](var29, var28, var27, var26, var25);
                        SaveGenerator(address = 978);
                    case 976:
                        return var5;
                    case 978:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 9);
                        if (var9) {
                            _fun100051_ip = 1538;
                            continue _fun100051
                        }
                    case 987:
                        var18 = var5;
                        if (!(var14 != var5)) {
                            _fun100051_ip = 1153;
                            continue _fun100051
                        }
                    case 997:
                        var9 = var18;
                        if (!(var8 !== var9)) {
                            _fun100051_ip = 1153;
                            continue _fun100051
                        }
                    case 1007:
                        var15 = _closure1_slot1;
                        var17 = _closure1_slot2;
                        var12 = 10;
                        var9 = var17[var12];
                        var15 = var15.bind(var1)(var9);
                        var9 = {};
                        var22 = var19.Date;
                        var20 = var22.now;
                        var20 = var20.bind(var22)();
                        var19 = var19.HermesInternal;
                        var19 = var19.concat;
                        var19 = var19.bind(var21)(var20);
                        var9.id = var19;
                        var9.uri = var18;
                        var9.originalUri = var18;
                        var18 = 'application/json';
                        var9.mimeType = var18;
                        var9.filename = var16;
                        var16 = _closure1_slot0;
                        var12 = var17[var12];
                        var12 = var16.bind(var1)(var12);
                        var12 = var12.UploadPlatform;
                        var12 = var12.REACT_NATIVE;
                        var9.platform = var12;
                        var12 = var15.prototype;
                        var12 = Object.create(var12, {
                            constructor: {
                                value: var15
                            }
                        });
                        var30 = var12;
                        var29 = var9;
                        var9 = new var30[var15](var29, var28);
                        var15 = var9 instanceof Object ? var9 : var12;
                        var12 = var6;
                        var9 = var12.push;
                        var9 = var9.bind(var12)(var15);
                    case 1153:
                        var12 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var9 = 12;
                        var9 = var15[var9];
                        var12 = var12.bind(var1)(var9);
                        var9 = var12.getAttachments;
                        var6 = var9.bind(var12)(var6);
                        SaveGenerator(address = 1188);
                    case 1186:
                        return var6;
                    case 1188:
                        ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 9);
                        if (var9) {
                            _fun100051_ip = 1535;
                            continue _fun100051
                        }
                    case 1197:
                        var7 = var6;
                        if (!(var14 != var6)) {
                            _fun100051_ip = 1485;
                            continue _fun100051
                        }
                    case 1207:
                        var12 = {};
                        var9 = var11;
                        var15 = var9.uploadConfig;
                        var15 = var15.reportTitle;
                        var12.name = var15;
                        var15 = var9.uploadConfig;
                        var15 = var15.reportDescription;
                        var12.description = var15;
                        var9 = var9.uploadConfig;
                        var9 = var9.priority;
                        var12.priority = var9;
                        var9 = var13;
                        if (!(var14 == var9)) {
                            _fun100051_ip = 1317;
                            continue _fun100051
                        }
                    case 1272:
                        var9 = {};
                        var14 = var11;
                        var15 = var14.uploadConfig;
                        var15 = var15.featureName;
                        var9.name = var15;
                        var14 = var14.uploadConfig;
                        var14 = var14.squadName;
                        var9.squad = var14;
                        var9.asana_inbox_id = var1;
                        _fun100051_ip = 1320;
                        continue _fun100051;
                    case 1317:
                        var9 = var13;
                    case 1320:
                        var12.feature = var9;
                        var12.url = var8;
                        var9 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var8 = var8[var10];
                        var10 = var9.bind(var1)(var8);
                        var9 = var10.submitReport;
                        var8 = {};
                        var13 = false;
                        var8.overridePlatformInformation = var13;
                        var7 = var9.bind(var10)(var12, var8, var7);
                        SaveGenerator(address = 1372);
                    case 1370:
                        return var7;
                    case 1372:
                        ResumeGenerator(result_out_reg = 7, return_bool_out_reg = 8);
                        if (var8) {
                            _fun100051_ip = 1482;
                            continue _fun100051
                        }
                    case 1378:
                        var8 = var7.ok;
                        var10 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var9 = 3;
                        var9 = var12[var9];
                        var10 = var10.bind(var1)(var9);
                        var9 = var10.show;
                        if (var8) {
                            _fun100051_ip = 1434;
                            continue _fun100051
                        }
                    case 1413:
                        var8 = {
                            'title': 'Submission Failed',
                            'body': "Something went wrong and there's no way to fix it. Thanks anyway!"
                        };
                        var8 = var9.bind(var10)(var8);
                        _fun100051_ip = 1477;
                        continue _fun100051;
                    case 1434:
                        var8 = {};
                        var12 = var11.uploadConfig;
                        var12 = var12.successTitle;
                        var8.title = var12;
                        var11 = var11.uploadConfig;
                        var11 = var11.successMessage;
                        var8.body = var11;
                        var8 = var9.bind(var10)(var8);
                    case 1477: // try_end0
                        _fun100051_ip = 1697;
                        continue _fun100051;
                    case 1482:
                        return var7;
                    case 1485: // try_start_1
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var7 = 3;
                        var7 = var9[var7];
                        var9 = var8.bind(var1)(var7);
                        var8 = var9.show;
                        var7 = {
                            'title': 'Submission Failed',
                            'body': "Something went wrong and there's no way to fix it. Thanks anyway!"
                        };
                        var7 = var8.bind(var9)(var7);
                    case 1530: // try_end1
                        var7 = undefined;
                        return var7;
                    case 1535:
                        return var6;
                    case 1538:
                        return var5;
                    case 1541:
                        return var4;
                    case 1544:
                        return var3;
                    case 1547: // try_start_2
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 3;
                        var3 = var5[var3];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.show;
                        var3 = {
                            'title': 'Submission Failed',
                            'body': 'Survey configuration not found'
                        };
                        var3 = var4.bind(var5)(var3);
                    case 1592: // try_end2
                        var3 = undefined;
                        return var3;
                    case 1597: // try_start_3
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 3;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.show;
                        var2 = {
                            'title': 'Submission Failed',
                            'body': 'No survey selected'
                        };
                        var2 = var3.bind(var4)(var2);
                    case 1642: // try_end3
                        var2 = undefined;
                        return var2;
                    case 1647: // catch_target0 // catch_target1 // catch_target2 // catch_target3
                        CatchBlockStart(arg_register = 2);
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 3;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.show;
                        var2 = {
                            'title': 'Submission Failed',
                            'body': "Something went wrong and there's no way to fix it. Thanks anyway!"
                        };
                        var2 = var3.bind(var4)(var2);
                    case 1697:
                        return var1;
                    case 1700:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot11 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = function() { // Original name: _handleStopAndSend, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun100058: for (var _fun100058_ip = 0;;) switch (_fun100058_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun100058_ip = 112;
                            continue _fun100058
                        }
                    case 9:
                        var2 = arg0;
                        var _closure4_slot0 = var2;
                        var2 = undefined;
                        var _closure4_slot1 = var2;
                        var7 = _closure1_slot6;
                        var6 = var7.addListener;
                        var5 = 'ScreenRecordingPreviewFinished';
                        var4 = function(arg0) { // Environment: var1
                            _fun100059: for (var _fun100059_ip = 0;;) switch (_fun100059_ip) {
                                case 0:
                                    var5 = arg0;
                                    var _closure5_slot0 = var5;
                                    var2 = _closure4_slot1;
                                    var1 = var2.remove;
                                    var1 = var1.bind(var2)();
                                    var2 = var5.saved;
                                    if (var2) {
                                        _fun100059_ip = 116;
                                        continue _fun100059
                                    }
                                case 40:
                                    var4 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var2 = 3;
                                    var3 = var3[var2];
                                    var2 = undefined;
                                    var4 = var4.bind(var2)(var3);
                                    var3 = var4.show;
                                    var2 = {};
                                    var6 = 'Recording Not Sent';
                                    var2.title = var6;
                                    var7 = var5.action;
                                    var5 = 'Recording was shared but not saved to Photos, so it cannot be sent.';
                                    var6 = 'cancelled';
                                    if (!(var6 === var7)) {
                                        _fun100059_ip = 105;
                                        continue _fun100059
                                    }
                                case 99:
                                    var5 = 'Recording was cancelled and not saved.';
                                case 105:
                                    var2.body = var5;
                                    var2 = var3.bind(var4)(var2);
                                    _fun100059_ip = 154;
                                    continue _fun100059;
                                case 116:
                                    var2 = global;
                                    var3 = var2.setTimeout;
                                    var1 = _closure1_slot3;
                                    var2 = undefined;
                                    var0 = function*() { // Environment: var0
                                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                                            _fun100061: for (var _fun100061_ip = 0;;) switch (_fun100061_ip) {
                                                case 0:
                                                    StartGenerator();
                                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                    if (var1) {
                                                        _fun100061_ip = 143;
                                                        continue _fun100061
                                                    }
                                                case 10:
                                                    var3 = _closure4_slot0;
                                                    var2 = null;
                                                    if (!(var2 != var3)) {
                                                        _fun100061_ip = 33;
                                                        continue _fun100061
                                                    }
                                                case 23:
                                                    var2 = _closure4_slot0;
                                                    var1 = undefined;
                                                    var1 = var2.bind(var1)();
                                                case 33:
                                                    var1 = _closure5_slot0;
                                                    var4 = var1.timestampedTranscription;
                                                    var3 = var1.audioFilePath;
                                                    var1 = function() { // Original name: submitBugReportWithScreenRecording, environment: var1
                                                        var0 = undefined;
                                                        var3 = _closure1_slot11;
                                                        var2 = var3.apply;
                                                        var0 = arguments;
                                                        var1 = var0;
                                                        var0 = this;
                                                        var0 = var2.bind(var3)(var0, var1);
                                                        return var0;
                                                    };
                                                    var2 = undefined;
                                                    var1 = var1.bind(var2)(var4, var3);
                                                    SaveGenerator(address = 77);
                                                case 75:
                                                    return var1;
                                                case 77:
                                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                                    if (var3) {
                                                        _fun100061_ip = 140;
                                                        continue _fun100061
                                                    }
                                                case 83:
                                                    var5 = _closure1_slot4;
                                                    var4 = var5.getState;
                                                    var6 = var4.bind(var5)();
                                                    var5 = var6.setIsUploading;
                                                    var4 = false;
                                                    var4 = var5.bind(var6)(var4);
                                                    var4 = _closure1_slot4;
                                                    var3 = var4.getState;
                                                    var4 = var3.bind(var4)();
                                                    var3 = var4.stopRecording;
                                                    var3 = var3.bind(var4)();
                                                    return var2;
                                                case 140:
                                                    return var1;
                                                case 143:
                                                    return var0;
                                            }
                                        };
                                        return var0;
                                    };
                                    var1 = var1.bind(var2)(var0);
                                    var0 = 1000;
                                    var0 = var3.bind(var2)(var1, var0);
                                case 154:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var4 = var6.bind(var7)(var5, var4);
                        _closure4_slot1 = var4;
                        var4 = _closure1_slot4;
                        var3 = var4.getState;
                        var5 = var3.bind(var4)();
                        var4 = var5.setIsUploading;
                        var3 = true;
                        var3 = var4.bind(var5)(var3);
                        var1 = function() { // Original name: stopRecordingProcess, environment: var1
                            var0 = undefined;
                            var3 = _closure1_slot10;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var1 = var1.bind(var2)();
                        SaveGenerator(address = 100);
                    case 98:
                        return var1;
                    case 100:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun100058_ip = 109;
                            continue _fun100058
                        }
                    case 106:
                        return var2;
                    case 109:
                        return var1;
                    case 112:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot12 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot12 = var0;
    var0 = function() { // Original name: _handleRecordingPhase, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun100066: for (var _fun100066_ip = 0;;) switch (_fun100066_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun100066_ip = 196;
                            continue _fun100066
                        }
                    case 12:
                        var1 = function() { // Original name: checkAndRequestPermissions, environment: var3
                            var0 = undefined;
                            var3 = _closure1_slot8;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var4 = undefined;
                        var1 = var1.bind(var4)();
                        SaveGenerator(address = 29);
                    case 27:
                        return var1;
                    case 29:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun100066_ip = 193;
                            continue _fun100066
                        }
                    case 38:
                        if (!var1) {
                            _fun100066_ip = 184;
                            continue _fun100066
                        }
                    case 44:
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var5 = 13;
                        var5 = var6[var5];
                        var7 = var7.bind(var4)(var5);
                        var5 = var7.getWindowDimensions;
                        var5 = var5.bind(var7)();
                        var8 = var5.width;
                        var7 = var5.height;
                        var5 = _closure1_slot1;
                        var2 = 4;
                        var2 = var6[var2];
                        var6 = var5.bind(var4)(var2);
                        var5 = var6.setRecordingQuality;
                        var2 = {};
                        var2.width = var8;
                        var2.height = var7;
                        var7 = 50000;
                        var2.bitrate = var7;
                        var7 = 15;
                        var2.frameRate = var7;
                        var2 = var5.bind(var6)(var2);
                        SaveGenerator(address = 147);
                    case 145:
                        return var2;
                    case 147:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                        if (var5) {
                            _fun100066_ip = 190;
                            continue _fun100066
                        }
                    case 153:
                        var5 = function() { // Original name: startRecordingProcess, environment: var3
                            var0 = undefined;
                            var3 = _closure1_slot9;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var3 = arg0;
                        var3 = var5.bind(var4)(var3);
                        SaveGenerator(address = 172);
                    case 170:
                        return var3;
                    case 172:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun100066_ip = 187;
                            continue _fun100066
                        }
                    case 178:
                        var5 = var3.success;
                    case 184:
                        return var4;
                    case 187:
                        return var3;
                    case 190:
                        return var2;
                    case 193:
                        return var1;
                    case 196:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot13 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var6 = var4.bind(var0)(var3);
    var3 = var6.NativeModules;
    var7 = var6.NativeEventEmitter;
    var6 = 2;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.useScreenRecordingStore;
    var _closure1_slot4 = var6;
    var6 = var3.DCDPhotos;
    var _closure1_slot5 = var6;
    var11 = var3.DCDScreenRecordingManager;
    var6 = var7.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var7
        }
    });
    var12 = var6;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot6 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/screen_recording/native/ScreenRecordingUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() { // Original name: handleStopAndSend, environment: var1
        var0 = undefined;
        var3 = _closure1_slot12;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.handleStopAndSend = var3;
    var1 = function() { // Original name: handleRecordingPhase, environment: var1
        var0 = undefined;
        var3 = _closure1_slot13;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.handleRecordingPhase = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 27, 12990, 3962, 12992, 12993, 3237, 12994, 1307, 8772, 3965, 12995, 8771, 1464, 2]);