// modules/go_live/native/VoiceEngineStreamingManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun33069: for (var _fun33069_ip = 0;;) switch (_fun33069_ip) {
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
                _fun33069_ip = 74;
                continue _fun33069;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot29 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot29 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var6.bind(var0)(var3);
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.Dimensions;
    var3 = var3.Linking;
    var _closure1_slot10 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 11;
    var3 = var5[var3];
    var8 = var6.bind(var0)(var3);
    var _closure1_slot13 = var8;
    var3 = 12;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.Base64JPEGPrefix;
    var _closure1_slot14 = var9;
    var9 = var3.Endpoints;
    var _closure1_slot15 = var9;
    var9 = var3.NOOP_NULL;
    var _closure1_slot16 = var9;
    var3 = var3.IOS_BUNDLE_ID;
    var _closure1_slot17 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.getAppIntentScheme;
    var _closure1_slot18 = var3;
    var3 = 14;
    var3 = var5[var3];
    var11 = var6.bind(var0)(var3);
    var3 = var11.prototype;
    var9 = Object.create(var3, {
        constructor: {
            value: var11
        }
    });
    var14 = 'VoiceEngineStreamingManager';
    var15 = var9;
    var3 = new var15[var11](var14, var13);
    var3 = var3 instanceof Object ? var3 : var9;
    var _closure1_slot20 = var3;
    var3 = var10.get;
    var9 = 'window';
    var3 = var3.bind(var10)(var9);
    var3 = var3.width;
    var _closure1_slot21 = var3;
    var3 = var10.get;
    var3 = var3.bind(var10)(var9);
    var3 = var3.height;
    var _closure1_slot22 = var3;
    var3 = 15;
    var9 = var5[var3];
    var9 = var4.bind(var0)(var9);
    var9 = var9.Timeout;
    var10 = var9.prototype;
    var10 = Object.create(var10, {
        constructor: {
            value: var9
        }
    });
    var15 = var10;
    var9 = new var15[var9](var14);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot23 = var9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Timeout;
    var9 = var3.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var3
        }
    });
    var15 = var9;
    var3 = new var15[var3](var14);
    var3 = var3 instanceof Object ? var3 : var9;
    var _closure1_slot24 = var3;
    var3 = new Array(0);
    var _closure1_slot25 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot9;
        var2 = undefined;
        var1 = function*(arg0, arg1) { // Environment: var0
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun33074: for (var _fun33074_ip = 0;;) switch (_fun33074_ip) {
                    case 0:
                        StartGenerator();
                        var3 = arg0;
                        var1 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 5);
                        if (var5) {
                            _fun33074_ip = 331;
                            continue _fun33074
                        }
                    case 18:
                        var7 = var3;
                        var _closure4_slot0 = var3;
                        var4 = var1;
                        var _closure4_slot1 = var1;
                        var1 = undefined;
                        var8 = undefined;
                        var6 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var5 = 16;
                        var5 = var9[var5];
                        var5 = var6.bind(var1)(var5);
                        var6 = var5.DisableStreamPreviews;
                        var5 = var6.getSetting;
                        var5 = var5.bind(var6)();
                        if (var5) {
                            _fun33074_ip = 328;
                            continue _fun33074
                        }
                    case 81:
                        var6 = _closure1_slot23;
                        var5 = var6.stop;
                        var5 = var5.bind(var6)();
                        var9 = _closure1_slot14;
                        var6 = var4;
                        var4 = global;
                        var4 = var4.HermesInternal;
                        var5 = var4.concat;
                        var4 = '';
                        var9 = var5.bind(var4)(var9, var6);
                        var8 = var9;
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 17;
                        var4 = var6[var4];
                        var6 = var5.bind(var1)(var4);
                        var5 = var6.dispatch;
                        var4 = {};
                        var10 = 'STREAM_PREVIEW_FETCH_SUCCESS';
                        var4.type = var10;
                        var10 = var7;
                        var4.streamKey = var10;
                        var4.previewURL = var9;
                        var4 = var5.bind(var6)(var4);
                    case 183: // try_start_0
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 18;
                        var4 = var6[var4];
                        var4 = var5.bind(var1)(var4);
                        var6 = var4.HTTP;
                        var5 = var6.post;
                        var4 = {};
                        var10 = _closure1_slot15;
                        var9 = var10.STREAM_PREVIEW;
                        var7 = var9.bind(var10)(var7);
                        var4.url = var7;
                        var7 = {};
                        var7.thumbnail = var8;
                        var4.body = var7;
                        var7 = true;
                        var4.oldFormErrors = var7;
                        var7 = false;
                        var4.rejectWithError = var7;
                        var4 = var5.bind(var6)(var4);
                        SaveGenerator(address = 268);
                    case 266:
                        return var4;
                    case 268:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 5);
                        if (var5) {
                            _fun33074_ip = 276;
                            continue _fun33074
                        }
                    case 274: // try_end0
                        _fun33074_ip = 328;
                        continue _fun33074;
                    case 276:
                        return var4;
                    case 279: // catch_target0
                        CatchBlockStart(arg_register = 7);
                        var6 = _closure1_slot20;
                        var5 = var6.error;
                        var4 = 'Failed to post stream preview';
                        var4 = var5.bind(var6)(var4, var7);
                        var5 = _closure1_slot23;
                        var4 = var5.start;
                        var3 = 60000;
                        var2 = function() { // Environment: var2
                            var3 = _closure1_slot26;
                            var2 = _closure4_slot0;
                            var1 = _closure4_slot1;
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                        };
                        var2 = var4.bind(var5)(var3, var2);
                    case 328:
                        return var1;
                    case 331:
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
    var3 = var3.bind(var0)();
    var _closure1_slot26 = var3;
    var3 = var8.getVoiceChannelId;
    var3 = var3.bind(var8)();
    var _closure1_slot27 = var3;
    var3 = 'handleVoiceChannelSelect';
    var3 = var7.bind(var0)(var3);
    var _closure1_slot28 = var3;
    var3 = 27;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun33078: for (var _fun33078_ip = 0;;) switch (_fun33078_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var6 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var6 = var6.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot29;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun33078_ip = 84;
                        continue _fun33078
                    }
                case 71:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun33078_ip = 118;
                    continue _fun33078;
                case 84:
                    var5 = global;
                    var7 = var5.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 118:
                    var0 = var2.bind(var3)(var4, var0);
                    var2 = global;
                    var4 = var2.Object;
                    var3 = var4.defineProperty;
                    var2 = _closure1_slot28;
                    var1 = {};
                    var5 = true;
                    var1.writable = var5;
                    var5 = function arg0() {
                        _fun33079: for (var _fun33079_ip = 0;;) switch (_fun33079_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = var0.channelId;
                                var _closure4_slot0 = var1;
                                var3 = _closure1_slot27;
                                if (!(var3 !== var1)) {
                                    _fun33079_ip = 74;
                                    continue _fun33079
                                }
                            case 25:
                                var4 = _closure1_slot19;
                                var3 = null;
                                if (!(var3 != var4)) {
                                    _fun33079_ip = 45;
                                    continue _fun33079
                                }
                            case 35:
                                var3 = var4.stopBroadcast;
                                var3 = var3.bind(var4)();
                            case 45:
                                var4 = _closure1_slot11;
                                var3 = var4.getAllActiveStreams;
                                var4 = var3.bind(var4)();
                                var3 = var4.forEach;
                                var2 = function(arg0) { // Environment: var2
                                    _fun33080: for (var _fun33080_ip = 0;;) switch (_fun33080_ip) {
                                        case 0:
                                            var5 = arg0;
                                            var1 = var5.channelId;
                                            var0 = _closure4_slot0;
                                            if (!(var1 !== var0)) {
                                                _fun33080_ip = 81;
                                                continue _fun33080
                                            }
                                        case 19:
                                            var2 = _closure1_slot0;
                                            var4 = _closure1_slot2;
                                            var0 = 19;
                                            var0 = var4[var0];
                                            var1 = undefined;
                                            var3 = var2.bind(var1)(var0);
                                            var0 = var3.encodeStreamKey;
                                            var3 = var0.bind(var3)(var5);
                                            var0 = 20;
                                            var0 = var4[var0];
                                            var2 = var2.bind(var1)(var0);
                                            var1 = var2.stopStream;
                                            var0 = false;
                                            var0 = var1.bind(var2)(var3, var0);
                                        case 81:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var2 = var3.bind(var4)(var2);
                            case 74:
                                _closure1_slot27 = var1;
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1.value = var5;
                    var1 = var3.bind(var4)(var0, var2, var1);
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
        var0 = '_initialize';
        var4.key = var0;
        var0 = function() {
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var0 = 21;
            var3 = var4[var0];
            var0 = undefined;
            var5 = var5.bind(var0)(var3);
            var3 = var5.getVoiceEngine;
            var6 = var3.bind(var5)();
            var _closure1_slot19 = var6;
            var5 = var6.setBroadcastRequestCallback;
            var3 = function() { // Environment: var2
                _fun33082: for (var _fun33082_ip = 0;;) switch (_fun33082_ip) {
                    case 0:
                        var4 = _closure1_slot20;
                        var2 = var4.log;
                        var0 = 'Broadcast Requested';
                        var0 = var2.bind(var4)(var0);
                        var4 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 22;
                        var2 = var2[var0];
                        var0 = undefined;
                        var6 = var4.bind(var0)(var2);
                        var4 = _closure1_slot19;
                        var2 = null;
                        var5 = var2 != var4;
                        var4 = 'Voice Engine should be initialized in callback';
                        var4 = var6.bind(var0)(var5, var4);
                        var4 = new Array(0);
                        _closure1_slot25 = var4;
                        var5 = _closure1_slot13;
                        var4 = var5.getVoiceChannelId;
                        var6 = var4.bind(var5)();
                        var5 = _closure1_slot12;
                        var4 = var5.getChannel;
                        var5 = var4.bind(var5)(var6);
                        var6 = _closure1_slot11;
                        var4 = var6.getCurrentAppIntent;
                        var4 = var4.bind(var6)();
                        if (!(var2 == var5)) {
                            _fun33082_ip = 160;
                            continue _fun33082
                        }
                    case 125:
                        var9 = _closure1_slot19;
                        var8 = var9.stopBroadcastWithError;
                        var7 = -1;
                        var6 = 'Not currently in a voice channel';
                        var6 = var8.bind(var9)(var7, var6);
                        _fun33082_ip = 382;
                        continue _fun33082;
                    case 160:
                        var6 = var5.getGuildId;
                        var10 = var6.bind(var5)();
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var6 = 20;
                        var6 = var8[var6];
                        var9 = var7.bind(var0)(var6);
                        var8 = var9.startStream;
                        var7 = var5.id;
                        var6 = {};
                        var11 = 'screen:0';
                        var6.sourceId = var11;
                        var6 = var8.bind(var9)(var10, var7, var6);
                        var7 = _closure1_slot11;
                        var6 = var7.getCurrentUserActiveStream;
                        var10 = var6.bind(var7)();
                        var _closure4_slot0 = var10;
                        if (!(var2 != var10)) {
                            _fun33082_ip = 382;
                            continue _fun33082
                        }
                    case 246:
                        var7 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var6 = 23;
                        var6 = var11[var6];
                        var8 = var7.bind(var0)(var6);
                        var7 = var8.selectParticipant;
                        var6 = var5.id;
                        var9 = _closure1_slot0;
                        var5 = 19;
                        var5 = var11[var5];
                        var9 = var9.bind(var0)(var5);
                        var5 = var9.encodeStreamKey;
                        var5 = var5.bind(var9)(var10);
                        var5 = var7.bind(var8)(var6, var5);
                        var5 = _closure1_slot19;
                        var6 = var5.platform;
                        var5 = 'android';
                        if (!(var5 === var6)) {
                            _fun33082_ip = 354;
                            continue _fun33082
                        }
                    case 328:
                        var7 = _closure1_slot24;
                        var6 = var7.start;
                        var5 = 15000;
                        var3 = function() { // Environment: var3
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 22;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = _closure1_slot19;
                            var1 = null;
                            var2 = var1 != var2;
                            var1 = 'Voice Engine should be initialized in callback';
                            var1 = var3.bind(var0)(var2, var1);
                            var1 = global;
                            var7 = var1.Math;
                            var6 = var7.min;
                            var3 = _closure1_slot21;
                            var1 = 512;
                            var5 = var1 / var3;
                            var2 = _closure1_slot22;
                            var1 = 288;
                            var1 = var1 / var2;
                            var1 = var6.bind(var7)(var5, var1);
                            var6 = _closure1_slot19;
                            var5 = var6.setBroadcastThumbnailCallback;
                            var11 = var3 * var1;
                            var10 = var2 * var1;
                            var9 = 300;
                            var8 = function(arg0) { // Environment: var1
                                var3 = arg0;
                                var5 = _closure1_slot20;
                                var4 = var5.log;
                                var2 = var3.length;
                                var0 = 'Broadcast thumbnail of size:';
                                var0 = var4.bind(var5)(var0, var2);
                                var4 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 19;
                                var2 = var2[var0];
                                var0 = undefined;
                                var5 = var4.bind(var0)(var2);
                                var4 = var5.encodeStreamKey;
                                var2 = _closure4_slot0;
                                var2 = var4.bind(var5)(var2);
                                var1 = _closure1_slot26;
                                var1 = var1.bind(var0)(var2, var3);
                                return var0;
                            };
                            var12 = var6;
                            var1 = var12[var5](var11, var10, var9, var8, var7);
                            return var0;
                        };
                        var3 = var6.bind(var7)(var5, var3);
                    case 354:
                        if (!(var2 != var4)) {
                            _fun33082_ip = 382;
                            continue _fun33082
                        }
                    case 358:
                        var3 = _closure1_slot10;
                        var2 = var3.openURL;
                        var1 = _closure1_slot18;
                        var1 = var1.bind(var0)(var4);
                        var1 = var2.bind(var3)(var1);
                    case 382:
                        return var0;
                }
            };
            var3 = var5.bind(var6)(var3);
            var6 = _closure1_slot19;
            var5 = var6.setBroadcastFinishedCallback;
            var3 = function() { // Environment: var2
                var3 = _closure1_slot20;
                var2 = var3.log;
                var1 = 'Broadcast Finished';
                var1 = var2.bind(var3)(var1);
                var2 = _closure1_slot23;
                var1 = var2.stop;
                var1 = var1.bind(var2)();
                var2 = _closure1_slot24;
                var1 = var2.stop;
                var1 = var1.bind(var2)();
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 24;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.handleCloseScreenshare;
                var1 = var1.bind(var2)();
                return var0;
            };
            var3 = var5.bind(var6)(var3);
            var6 = _closure1_slot19;
            var5 = var6.setBroadcastAnnotatedCallback;
            var3 = function(arg0) { // Environment: var2
                _fun33086: for (var _fun33086_ip = 0;;) switch (_fun33086_ip) {
                    case 0:
                        var2 = arg0;
                        var4 = _closure1_slot20;
                        var3 = var4.log;
                        var1 = 'Broadcast Annotated:';
                        var1 = var3.bind(var4)(var1, var2);
                        var1 = _closure1_slot17;
                        if (!(var2 !== var1)) {
                            _fun33086_ip = 96;
                            continue _fun33086
                        }
                    case 35:
                        var4 = _closure1_slot25;
                        var3 = var4.indexOf;
                        var1 = 0;
                        var5 = var3.bind(var4)(var2, var1);
                        var1 = -1;
                        if (!(var5 > var1)) {
                            _fun33086_ip = 82;
                            continue _fun33086
                        }
                    case 63:
                        var4 = _closure1_slot25;
                        var3 = var4.splice;
                        var1 = 1;
                        var1 = var3.bind(var4)(var5, var1);
                    case 82:
                        var1 = _closure1_slot25;
                        var0 = var1.push;
                        var0 = var0.bind(var1)(var2);
                    case 96:
                        var0 = undefined;
                        return var0;
                }
            };
            var3 = var5.bind(var6)(var3);
            var5 = _closure1_slot19;
            var3 = var5.setBroadcastBlockedCallback;
            var2 = function() { // Environment: var2
                var2 = _closure1_slot20;
                var1 = var2.log;
                var0 = 'Broadcast Blocked';
                var0 = var1.bind(var2)(var0);
                var2 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 25;
                var1 = var8[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.presentLocalNotification;
                var1 = {};
                var7 = _closure1_slot0;
                var4 = 26;
                var5 = var8[var4];
                var5 = var7.bind(var0)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var8[var4];
                var4 = var7.bind(var0)(var4);
                var4 = var4.t;
                var4 = var4.iYQlwv;
                var4 = var5.bind(var6)(var4);
                var1.alertBody = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var2 = var3.bind(var5)(var2);
            var3 = _closure1_slot1;
            var2 = 17;
            var2 = var4[var2];
            var4 = var3.bind(var0)(var2);
            var3 = var4.subscribe;
            var5 = _closure1_slot8;
            var2 = _closure1_slot28;
            var1 = this;
            var1 = var5.bind(var0)(var1, var2);
            var2 = var1[var2];
            var1 = 'VOICE_CHANNEL_SELECT';
            var1 = var3.bind(var4)(var1, var2);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = '_terminate';
        var4.key = var6;
        var6 = function() {
            _fun33088: for (var _fun33088_ip = 0;;) switch (_fun33088_ip) {
                case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 21;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.getVoiceEngine;
                    var4 = var2.bind(var3)();
                    var2 = null;
                    if (!(var2 != var4)) {
                        _fun33088_ip = 89;
                        continue _fun33088
                    }
                case 41:
                    var2 = var4.setBroadcastRequestCallback;
                    var3 = _closure1_slot16;
                    var2 = var2.bind(var4)(var3);
                    var2 = var4.setBroadcastFinishedCallback;
                    var2 = var2.bind(var4)(var3);
                    var2 = var4.setBroadcastAnnotatedCallback;
                    var2 = var2.bind(var4)(var3);
                    var2 = var4.setBroadcastBlockedCallback;
                    var2 = var2.bind(var4)(var3);
                case 89:
                    var3 = _closure1_slot23;
                    var2 = var3.stop;
                    var2 = var2.bind(var3)();
                    var3 = _closure1_slot24;
                    var2 = var3.stop;
                    var2 = var2.bind(var3)();
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 17;
                    var2 = var4[var2];
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.unsubscribe;
                    var5 = _closure1_slot8;
                    var2 = _closure1_slot28;
                    var1 = this;
                    var1 = var5.bind(var0)(var1, var2);
                    var2 = var1[var2];
                    var1 = 'VOICE_CHANNEL_SELECT';
                    var1 = var3.bind(var4)(var1, var2);
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getApplicationNames';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot25;
            return var0;
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var15 = var3;
    var1 = new var15[var1](var14);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 28;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/go_live/native/VoiceEngineStreamingManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 99, 100, 5, 27, 3715, 1372, 1672, 660, 3458, 3, 3631, 1348, 806, 507, 3506, 8084, 3479, 44, 7949, 8527, 8696, 1234, 4017, 2]);