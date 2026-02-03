// actions/StreamActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var9;
    var0 = function arg0, arg1() {
        _fun64479: for (var _fun64479_ip = 0;;) switch (_fun64479_ip) {
            case 0:
                var3 = arg1;
                var2 = _closure1_slot9;
                var0 = var2.getChannel;
                var5 = var0.bind(var2)(var3);
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 14;
                var0 = var4[var0];
                var4 = undefined;
                var6 = var2.bind(var4)(var0);
                var0 = null;
                var2 = var0 != var5;
                var0 = 'Cannot join a null voice channel';
                var0 = var6.bind(var4)(var2, var0);
                var2 = _closure1_slot12;
                var0 = var2.isInChannel;
                var0 = var0.bind(var2)(var3);
                var0 = !var0;
                if (!var0) {
                    _fun64479_ip = 122;
                    continue _fun64479
                }
            case 81:
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 15;
                var2 = var6[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.isChannelFull;
                var2 = _closure1_slot12;
                var1 = _closure1_slot10;
                var0 = var3.bind(var4)(var5, var2, var1);
            case 122:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var6 = function arg0, arg1() {
        _fun64480: for (var _fun64480_ip = 0;;) switch (_fun64480_ip) {
            case 0:
                var1 = arg0;
                var7 = arg1;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 16;
                var3 = var3[var0];
                var0 = undefined;
                var5 = var4.bind(var0)(var3);
                var4 = var5.getGoLiveDefaultMultiwatchExperimentConfig;
                var3 = {};
                var6 = 'StreamActionCreators.watchStream';
                var3.location = var6;
                var3 = var4.bind(var5)(var3);
                var11 = var3.defaultWatchMultipleStreams;
                var4 = _closure1_slot4;
                var3 = var4.getRemoteSessionId;
                var3 = var3.bind(var4)();
                var6 = null;
                if (!(var6 == var3)) {
                    _fun64480_ip = 354;
                    continue _fun64480
                }
            case 83:
                var3 = var1.guildId;
                var9 = var1.channelId;
                if (!(var6 != var3)) {
                    _fun64480_ip = 113;
                    continue _fun64480
                }
            case 97:
                var3 = _closure1_slot18;
                var3 = var3.bind(var0)(var0, var9);
                if (var3) {
                    _fun64480_ip = 354;
                    continue _fun64480
                }
            case 113:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 13;
                var3 = var5[var3];
                var4 = var4.bind(var0)(var3);
                var3 = var4.encodeStreamKey;
                var4 = var3.bind(var4)(var1);
                var3 = var6 == var7;
                var5 = undefined;
                if (var3) {
                    _fun64480_ip = 159;
                    continue _fun64480
                }
            case 153:
                var5 = var7.forceMultiple;
            case 159:
                if (var5) {
                    _fun64480_ip = 207;
                    continue _fun64480
                }
            case 162:
                var8 = _closure1_slot7;
                var3 = var8.getAllActiveStreamsForChannel;
                var9 = var3.bind(var8)(var9);
                var8 = var9.filter;
                var3 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var1 = var0.ownerId;
                    var2 = _closure1_slot8;
                    var0 = var2.getId;
                    var0 = var0.bind(var2)();
                    var0 = var1 !== var0;
                    return var0;
                };
                var3 = var8.bind(var9)(var3);
                var8 = var3.length;
                var3 = _closure1_slot17;
                var5 = var8 >= var3;
            case 207:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var3 = 12;
                var3 = var9[var3];
                var9 = var8.bind(var0)(var3);
                var8 = var9.dispatch;
                var3 = {};
                var10 = 'STREAM_WATCH';
                var3.type = var10;
                var3.streamKey = var4;
                var10 = var5;
                if (var5) {
                    _fun64480_ip = 256;
                    continue _fun64480
                }
            case 253:
                var10 = var11;
            case 256:
                var3.allowMultiple = var10;
                var3 = var8.bind(var9)(var3);
                var3 = var6 == var7;
                var8 = undefined;
                if (var3) {
                    _fun64480_ip = 283;
                    continue _fun64480
                }
            case 275:
                var8 = var7.forceFocus;
            case 283:
                var3 = true;
                var3 = var3 !== var8;
                if (!var3) {
                    _fun64480_ip = 314;
                    continue _fun64480
                }
            case 292:
                if (var5) {
                    _fun64480_ip = 311;
                    continue _fun64480
                }
            case 295:
                var6 = var6 != var7;
                if (!var6) {
                    _fun64480_ip = 308;
                    continue _fun64480
                }
            case 302:
                var6 = var7.noFocus;
            case 308:
                var5 = var6;
            case 311:
                var3 = var5;
            case 314:
                if (var3) {
                    _fun64480_ip = 354;
                    continue _fun64480
                }
            case 317:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 17;
                var2 = var5[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.selectParticipant;
                var1 = var1.channelId;
                var1 = var2.bind(var3)(var1, var4);
            case 354:
                return var0;
        }
    };
    var _closure1_slot19 = var6;
    var5 = function arg0, arg1() {
        _fun64482: for (var _fun64482_ip = 0;;) switch (_fun64482_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.guildId;
                var5 = var2.channelId;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun64482_ip = 37;
                    continue _fun64482
                }
            case 19:
                var1 = _closure1_slot18;
                var0 = undefined;
                var0 = var1.bind(var0)(var0, var5);
                if (var0) {
                    _fun64482_ip = 129;
                    continue _fun64482
                }
            case 37:
                var4 = _closure1_slot19;
                var1 = undefined;
                var3 = arg1;
                var3 = var4.bind(var1)(var2, var3);
                var6 = _closure1_slot5;
                var4 = var6.getWindowOpen;
                var3 = _closure1_slot15;
                var3 = var3.CHANNEL_CALL_POPOUT;
                var3 = var4.bind(var6)(var3);
                var6 = _closure1_slot11;
                var4 = var6.getVoiceChannelId;
                var4 = var4.bind(var6)();
                if (!var3) {
                    _fun64482_ip = 101;
                    continue _fun64482
                }
            case 97:
                var3 = var4 === var5;
            case 101:
                if (var3) {
                    _fun64482_ip = 129;
                    continue _fun64482
                }
            case 104:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 18;
                var0 = var4[var0];
                var0 = var3.bind(var1)(var0);
                var0 = var0.bind(var1)(var2);
            case 129:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot20 = var5;
    var4 = function arg0() {
        _fun64483: for (var _fun64483_ip = 0;;) switch (_fun64483_ip) {
            case 0:
                var5 = arg0;
                var2 = arguments[1];
                var1 = arguments[2];
                var0 = undefined;
                if (!(var2 === var0)) {
                    _fun64483_ip = 17;
                    continue _fun64483
                }
            case 15:
                var2 = true;
            case 17:
                if (!(var1 === var0)) {
                    _fun64483_ip = 23;
                    continue _fun64483
                }
            case 21:
                var1 = true;
            case 23:
                if (!var1) {
                    _fun64483_ip = 39;
                    continue _fun64483
                }
            case 26:
                var1 = _closure1_slot22;
                var1 = var1.bind(var0)(var5, var2);
            case 39:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 12;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var6 = 'STREAM_STOP';
                var1.type = var6;
                var1.streamKey = var5;
                var4 = _closure1_slot14;
                var4 = var4.APP;
                var1.appContext = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var _closure1_slot21 = var4;
    var3 = function arg0() {
        _fun64484: for (var _fun64484_ip = 0;;) switch (_fun64484_ip) {
            case 0:
                var4 = arguments[1];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun64484_ip = 11;
                    continue _fun64484
                }
            case 9:
                var4 = true;
            case 11:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 12;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'STREAM_CLOSE';
                var1.type = var5;
                var5 = arg0;
                var1.streamKey = var5;
                var1.canShowFeedback = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var _closure1_slot22 = var3;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun64487: for (var _fun64487_ip = 0;;) switch (_fun64487_ip) {
                    case 0:
                        StartGenerator();
                        var13 = arg0;
                        var12 = arg1;
                        var8 = arg2;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun64487_ip = 489;
                            continue _fun64487
                        }
                    case 19:
                        var11 = var13;
                        var10 = var12;
                        var9 = var8;
                        var1 = undefined;
                        var6 = undefined;
                        var5 = undefined;
                        var7 = _closure1_slot6;
                        var4 = var7.shouldFetchPreview;
                        var4 = var4.bind(var7)(var13, var12, var8);
                        if (!var4) {
                            _fun64487_ip = 486;
                            continue _fun64487
                        }
                    case 60:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var4 = 13;
                        var4 = var8[var4];
                        var8 = var7.bind(var1)(var4);
                        var7 = var8.encodeStreamKey;
                        var4 = {};
                        var13 = var11;
                        var12 = null;
                        if (!(var12 == var13)) {
                            _fun64487_ip = 109;
                            continue _fun64487
                        }
                    case 97:
                        var12 = _closure1_slot16;
                        var12 = var12.CALL;
                        _fun64487_ip = 119;
                        continue _fun64487;
                    case 109:
                        var13 = _closure1_slot16;
                        var12 = var13.GUILD;
                    case 119:
                        var4.streamType = var12;
                        var4.guildId = var11;
                        var4.channelId = var10;
                        var4.ownerId = var9;
                        var10 = var7.bind(var8)(var4);
                        var6 = var10;
                        var8 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var4 = 12;
                        var7 = var7[var4];
                        var9 = var8.bind(var1)(var7);
                        var8 = var9.dispatch;
                        var7 = {};
                        var11 = 'STREAM_PREVIEW_FETCH_START';
                        var7.type = var11;
                        var7.streamKey = var10;
                        var7 = var8.bind(var9)(var7);
                    case 192: // try_start_0
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var7 = 19;
                        var7 = var9[var7];
                        var7 = var8.bind(var1)(var7);
                        var9 = var7.HTTP;
                        var8 = var9.get;
                        var7 = {};
                        var12 = _closure1_slot13;
                        var11 = var12.STREAM_PREVIEW;
                        var10 = var6;
                        var10 = var11.bind(var12)(var10);
                        var7.url = var10;
                        var10 = {};
                        var11 = global;
                        var12 = var11.Date;
                        var11 = var12.now;
                        var11 = var11.bind(var12)();
                        var10.version = var11;
                        var7.query = var10;
                        var10 = true;
                        var7.oldFormErrors = var10;
                        var10 = false;
                        var7.rejectWithError = var10;
                        var7 = var8.bind(var9)(var7);
                        SaveGenerator(address = 297);
                    case 295:
                        return var7;
                    case 297:
                        ResumeGenerator(result_out_reg = 7, return_bool_out_reg = 8);
                        if (var8) {
                            _fun64487_ip = 367;
                            continue _fun64487
                        }
                    case 303:
                        var9 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var8 = var8[var4];
                        var10 = var9.bind(var1)(var8);
                        var9 = var10.dispatch;
                        var8 = {};
                        var11 = 'STREAM_PREVIEW_FETCH_SUCCESS';
                        var8.type = var11;
                        var11 = var6;
                        var8.streamKey = var11;
                        var11 = var7.body;
                        var11 = var11.url;
                        var8.previewURL = var11;
                        var8 = var9.bind(var10)(var8);
                    case 365: // try_end0
                        _fun64487_ip = 486;
                        continue _fun64487;
                    case 367:
                        return var7;
                    case 370: // catch_target0
                        CatchBlockStart(arg_register = 7);
                        var3 = var7;
                        var8 = var7.status;
                        var7 = 429;
                        if (!(var7 === var8)) {
                            _fun64487_ip = 437;
                            continue _fun64487
                        }
                    case 390:
                        var3 = var3.body;
                        var7 = var3.retry_after;
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var3 = 20;
                        var3 = var9[var3];
                        var3 = var8.bind(var1)(var3);
                        var3 = var3.Millis;
                        var3 = var3.SECOND;
                        var5 = var7 * var3;
                    case 437:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var4];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var7 = 'STREAM_PREVIEW_FETCH_FAIL';
                        var2.type = var7;
                        var2.streamKey = var6;
                        var2.retryAfter = var5;
                        var2 = var3.bind(var4)(var2);
                    case 486:
                        return var1;
                    case 489:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot23 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot23 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun64490: for (var _fun64490_ip = 0;;) switch (_fun64490_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun64490_ip = 143;
                            continue _fun64490
                        }
                    case 10:
                        var4 = arg0;
                    case 13: // try_start_0
                        var2 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var1 = 21;
                        var1 = var9[var1];
                        var8 = undefined;
                        var3 = var2.bind(var8)(var1);
                        var2 = var3.post;
                        var1 = {};
                        var7 = _closure1_slot13;
                        var5 = var7.STREAM_NOTIFY;
                        var4 = var5.bind(var7)(var4);
                        var1.url = var4;
                        var4 = true;
                        var1.oldFormErrors = var4;
                        var5 = {};
                        var7 = _closure1_slot0;
                        var6 = 22;
                        var6 = var9[var6];
                        var6 = var7.bind(var8)(var6);
                        var6 = var6.NetworkActionNames;
                        var6 = var6.STREAM_NOTIFY;
                        var5.event = var6;
                        var1.trackedActionData = var5;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 125);
                    case 123:
                        return var1;
                    case 125:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun64490_ip = 133;
                            continue _fun64490
                        }
                    case 131: // try_end0
                        _fun64490_ip = 138;
                        continue _fun64490;
                    case 133:
                        return var1;
                    case 136: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 138:
                        var1 = undefined;
                        return var1;
                    case 143:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot24 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot24 = var0;
    var7 = global;
    var13 = var7.Object;
    var12 = var13.defineProperty;
    var10 = {};
    var0 = true;
    var10.value = var0;
    var0 = '__esModule';
    var0 = var12.bind(var13)(var2, var0, var10);
    var0 = 0;
    var10 = var9[var0];
    var0 = undefined;
    var10 = var11.bind(var0)(var10);
    var _closure1_slot3 = var10;
    var10 = 1;
    var10 = var9[var10];
    var10 = var11.bind(var0)(var10);
    var _closure1_slot4 = var10;
    var10 = 2;
    var10 = var9[var10];
    var10 = var11.bind(var0)(var10);
    var _closure1_slot5 = var10;
    var10 = 3;
    var10 = var9[var10];
    var10 = var11.bind(var0)(var10);
    var _closure1_slot6 = var10;
    var10 = 4;
    var10 = var9[var10];
    var10 = var11.bind(var0)(var10);
    var _closure1_slot7 = var10;
    var10 = 5;
    var10 = var9[var10];
    var10 = var11.bind(var0)(var10);
    var _closure1_slot8 = var10;
    var10 = 6;
    var10 = var9[var10];
    var10 = var11.bind(var0)(var10);
    var _closure1_slot9 = var10;
    var10 = 7;
    var10 = var9[var10];
    var10 = var11.bind(var0)(var10);
    var _closure1_slot10 = var10;
    var10 = 8;
    var10 = var9[var10];
    var10 = var11.bind(var0)(var10);
    var _closure1_slot11 = var10;
    var10 = 9;
    var10 = var9[var10];
    var10 = var11.bind(var0)(var10);
    var _closure1_slot12 = var10;
    var10 = 10;
    var10 = var9[var10];
    var10 = var8.bind(var0)(var10);
    var11 = var10.Endpoints;
    var _closure1_slot13 = var11;
    var11 = var10.AppContext;
    var _closure1_slot14 = var11;
    var10 = var10.PopoutWindowKeys;
    var _closure1_slot15 = var10;
    var10 = 11;
    var10 = var9[var10];
    var10 = var8.bind(var0)(var10);
    var10 = var10.StreamTypes;
    var _closure1_slot16 = var10;
    var7 = var7.Number;
    var7 = var7.MAX_VALUE;
    var _closure1_slot17 = var7;
    var7 = 27;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'actions/StreamActionCreators.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = function arg0, arg1, arg2() {
        _fun64491: for (var _fun64491_ip = 0;;) switch (_fun64491_ip) {
            case 0:
                var5 = arg0;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 12;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var6 = 'STREAM_START';
                var1.type = var6;
                var6 = null;
                if (!(var6 == var5)) {
                    _fun64491_ip = 61;
                    continue _fun64491
                }
            case 49:
                var6 = _closure1_slot16;
                var6 = var6.CALL;
                _fun64491_ip = 71;
                continue _fun64491;
            case 61:
                var7 = _closure1_slot16;
                var6 = var7.GUILD;
            case 71:
                var1.streamType = var6;
                var1.guildId = var5;
                var5 = arg1;
                var1.channelId = var5;
                var4 = _closure1_slot14;
                var4 = var4.APP;
                var1.appContext = var4;
                var8 = arg2;
                var9 = var1;
                var4 = copyDataProperties(var9, var8);
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.startStream = var7;
    var7 = function arg0, arg1() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 13;
        var2 = var3[var0];
        var0 = undefined;
        var5 = var4.bind(var0)(var2);
        var4 = var5.encodeStreamKey;
        var2 = arg0;
        var4 = var4.bind(var5)(var2);
        var2 = _closure1_slot1;
        var1 = 12;
        var1 = var3[var1];
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var5 = 'STREAM_SET_PAUSED';
        var1.type = var5;
        var1.streamKey = var4;
        var4 = arg1;
        var1.paused = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setStreamPaused = var7;
    var2.watchStream = var6;
    var6 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 12;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'STREAM_UPDATE_SELF_HIDDEN';
        var1.type = var4;
        var4 = arg0;
        var1.channelId = var4;
        var4 = arg1;
        var1.selfStreamHidden = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.toggleSelfStreamHidden = var6;
    var2.watchStreamAndTransitionToStream = var5;
    var2.stopStream = var4;
    var2.closeStream = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot23;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchStreamPreview = var3;
    var3 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 12;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'STREAM_LAYOUT_UPDATE';
        var1.type = var4;
        var4 = arg0;
        var1.layout = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setLayout = var3;
    var3 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 12;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'STREAM_SET_HACKY_MAC_MODE';
        var1.type = var4;
        var4 = arg0;
        var1.enabled = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setHackyMacMode = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot24;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.notifyStreamStart = var3;
    var3 = function arg0() {
        _fun64498: for (var _fun64498_ip = 0;;) switch (_fun64498_ip) {
            case 0:
                var4 = arg0;
                var1 = var4.noTrack;
                var0 = true;
                if (!(var0 !== var1)) {
                    _fun64498_ip = 73;
                    continue _fun64498
                }
            case 17:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 23;
                var1 = var1[var0];
                var0 = undefined;
                var5 = var2.bind(var0)(var1);
                var3 = var5.trackStreamSettingsUpdate;
                var2 = var4.preset;
                var1 = var4.resolution;
                var0 = var4.frameRate;
                var0 = var3.bind(var5)(var2, var1, var0);
            case 73:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 12;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'STREAM_UPDATE_SETTINGS';
                var1.type = var5;
                var8 = var1;
                var7 = var4;
                var4 = copyDataProperties(var8, var7);
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.updateStreamSettings = var3;
    var3 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 19;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var3 = var1.HTTP;
        var2 = var3.patch;
        var1 = {};
        var6 = _closure1_slot13;
        var5 = var6.STREAM;
        var4 = arg0;
        var4 = var5.bind(var6)(var4);
        var1.url = var4;
        var4 = {};
        var5 = arg1;
        var4.region = var5;
        var1.body = var4;
        var4 = true;
        var1.oldFormErrors = var4;
        var1.rejectWithError = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.changeStreamRegion = var3;
    var3 = function() {
        _fun64500: for (var _fun64500_ip = 0;;) switch (_fun64500_ip) {
            case 0:
                var3 = arguments[0];
                var0 = undefined;
                if (!(var3 === var0)) {
                    _fun64500_ip = 11;
                    continue _fun64500
                }
            case 9:
                var3 = true;
            case 11:
                var4 = _closure1_slot7;
                var2 = var4.getCurrentUserActiveStream;
                var5 = var2.bind(var4)();
                var2 = null;
                if (!(var2 != var5)) {
                    _fun64500_ip = 75;
                    continue _fun64500
                }
            case 34:
                var2 = _closure1_slot21;
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 13;
                var1 = var6[var1];
                var4 = var4.bind(var0)(var1);
                var1 = var4.encodeStreamKey;
                var1 = var1.bind(var4)(var5);
                var1 = var2.bind(var0)(var1, var3);
            case 75:
                return var0;
        }
    };
    var2.stopOwnStream = var3;
    var1 = function arg0, arg1() {
        _fun64501: for (var _fun64501_ip = 0;;) switch (_fun64501_ip) {
            case 0:
                var5 = arg0;
                var _closure2_slot0 = var5;
                var3 = _closure1_slot8;
                var0 = var3.getId;
                var4 = var0.bind(var3)();
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 13;
                var3 = var3[var0];
                var0 = undefined;
                var7 = var6.bind(var0)(var3);
                var6 = var7.decodeStreamKey;
                var3 = arg1;
                var3 = var6.bind(var7)(var3);
                var _closure2_slot1 = var3;
                var6 = _closure1_slot11;
                var3 = var6.getVoiceChannelId;
                var6 = var3.bind(var6)();
                var3 = null;
                var3 = var3 != var6;
                if (!var3) {
                    _fun64501_ip = 93;
                    continue _fun64501
                }
            case 89:
                var3 = var6 !== var5;
            case 93:
                if (!var3) {
                    _fun64501_ip = 126;
                    continue _fun64501
                }
            case 96:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 24;
                var3 = var7[var3];
                var6 = var6.bind(var0)(var3);
                var3 = var6.disconnect;
                var3 = var3.bind(var6)();
            case 126:
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 25;
                var2 = var6[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.addRecipient;
                var8 = function() { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 26;
                    var1 = var1[var0];
                    var0 = undefined;
                    var6 = var2.bind(var0)(var1);
                    var5 = var6.call;
                    var11 = _closure2_slot0;
                    var8 = null;
                    var7 = function() { // Environment: var1
                        var2 = _closure1_slot20;
                        var1 = _closure2_slot1;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var12 = var6;
                    var10 = false;
                    var9 = false;
                    var1 = var12[var5](var11, var10, var9, var8, var7, var6);
                    return var0;
                };
                var12 = var3;
                var11 = var5;
                var10 = var4;
                var9 = undefined;
                var1 = var12[var2](var11, var10, var9, var8, var7);
                return var0;
        }
    };
    var2.joinPrivateChannelAndWatchStream = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3519, 7913, 8014, 3714, 1216, 1372, 1410, 1670, 3521, 660, 3506, 806, 3505, 44, 4236, 8015, 7878, 8016, 507, 667, 4525, 481, 8017, 4231, 3945, 8018, 2]);