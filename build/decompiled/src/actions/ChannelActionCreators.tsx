// actions/ChannelActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
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
    var1 = var4.bind(var0)(var1);
    var1 = var1.createChannelRecordFromServer;
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
    var1 = var4.bind(var0)(var1);
    var6 = var1.AnalyticEvents;
    var _closure1_slot9 = var6;
    var6 = var1.AbortCodes;
    var _closure1_slot10 = var6;
    var6 = var1.Endpoints;
    var _closure1_slot11 = var6;
    var6 = var1.Routes;
    var _closure1_slot12 = var6;
    var6 = var1.ME;
    var _closure1_slot13 = var6;
    var6 = var1.CURRENT_APP_CONTEXT;
    var _closure1_slot14 = var6;
    var1 = var1.ChannelTypes;
    var _closure1_slot15 = var1;
    var1 = {};
    var6 = function(arg0) { // Original name: openPrivateChannel, environment: var3
        _fun35411: for (var _fun35411_ip = 0;;) switch (_fun35411_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.recipientIds;
                var _closure2_slot0 = var1;
                var3 = var2.joinCall;
                var1 = undefined;
                if (!(var3 === var1)) {
                    _fun35411_ip = 31;
                    continue _fun35411
                }
            case 29:
                var3 = false;
            case 31:
                var _closure2_slot1 = var3;
                var3 = var2.joinCallVideo;
                if (!(var3 === var1)) {
                    _fun35411_ip = 49;
                    continue _fun35411
                }
            case 47:
                var3 = false;
            case 49:
                var _closure2_slot2 = var3;
                var3 = var2.location;
                var _closure2_slot3 = var3;
                var3 = var2.onBeforeTransition;
                var _closure2_slot4 = var3;
                var2 = var2.navigateToChannel;
                if (!(var2 === var1)) {
                    _fun35411_ip = 84;
                    continue _fun35411
                }
            case 82:
                var2 = true;
            case 84:
                var _closure2_slot5 = var2;
                var2 = this;
                var _closure2_slot6 = var2;
                var2 = _closure1_slot4;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun35413: for (var _fun35413_ip = 0;;) switch (_fun35413_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun35413_ip = 421;
                                    continue _fun35413
                                }
                            case 10:
                                var3 = undefined;
                                var12 = undefined;
                                var2 = undefined;
                                var7 = undefined;
                                var5 = undefined;
                                var9 = _closure2_slot6;
                                var6 = var9._getRecipients;
                                var1 = _closure2_slot0;
                                var1 = var6.bind(var9)(var1);
                                var12 = var1;
                                var2 = function(arg0) { // Original name: joinCallIfRequested, environment: var6
                                    _fun35414: for (var _fun35414_ip = 0;;) switch (_fun35414_ip) {
                                        case 0:
                                            var6 = arg0;
                                            var1 = _closure2_slot1;
                                            if (!var1) {
                                                _fun35414_ip = 95;
                                                continue _fun35414
                                            }
                                        case 13:
                                            var3 = _closure1_slot1;
                                            var2 = _closure1_slot2;
                                            var1 = 7;
                                            var2 = var2[var1];
                                            var1 = undefined;
                                            var5 = var3.bind(var1)(var2);
                                            var4 = var5.call;
                                            var3 = var6.id;
                                            var2 = _closure2_slot2;
                                            var0 = var6.isDM;
                                            var0 = var0.bind(var6)();
                                            var1 = null;
                                            if (!var0) {
                                                _fun35414_ip = 77;
                                                continue _fun35414
                                            }
                                        case 67:
                                            var0 = var6.getRecipientId;
                                            var1 = var0.bind(var6)();
                                        case 77:
                                            var8 = true;
                                            var11 = var5;
                                            var10 = var3;
                                            var9 = var2;
                                            var7 = var1;
                                            var0 = var11[var4](var10, var9, var8, var7, var6);
                                        case 95:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var1 = var1.length;
                                var9 = 1;
                                if (!(var9 !== var1)) {
                                    _fun35413_ip = 66;
                                    continue _fun35413
                                }
                            case 64:
                                _fun35413_ip = 122;
                                continue _fun35413;
                            case 66:
                                var6 = _closure1_slot3;
                                var1 = var12;
                                var6 = var6.bind(var3)(var1, var9);
                                var1 = 0;
                                var11 = var6[var1];
                                var10 = _closure2_slot6;
                                var9 = var10._openCachedDMChannel;
                                var6 = _closure2_slot4;
                                var1 = _closure2_slot5;
                                var1 = var9.bind(var10)(var11, var6, var1);
                                var6 = null;
                                if (!(var6 == var1)) {
                                    _fun35413_ip = 389;
                                    continue _fun35413
                                }
                            case 122: // try_start_0
                                var9 = _closure1_slot0;
                                var10 = _closure1_slot2;
                                var6 = 8;
                                var6 = var10[var6];
                                var6 = var9.bind(var3)(var6);
                                var10 = var6.HTTP;
                                var9 = var10.post;
                                var6 = {
                                    'url': null,
                                    'body': null,
                                    'context': null,
                                    'oldFormErrors': true,
                                    'retries': 3,
                                    'rejectWithError': false
                                };
                                var11 = _closure1_slot11;
                                var11 = var11.USER_CHANNELS;
                                var6.url = var11;
                                var11 = {};
                                var11.recipients = var12;
                                var6.body = var11;
                                var11 = {};
                                var12 = _closure2_slot3;
                                var11.location = var12;
                                var6.context = var11;
                                var6 = var9.bind(var10)(var6);
                                SaveGenerator(address = 224);
                            case 222:
                                return var6;
                            case 224:
                                ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 9);
                                if (var9) {
                                    _fun35413_ip = 302;
                                    continue _fun35413
                                }
                            case 230:
                                var7 = var6;
                                var9 = _closure2_slot5;
                                if (!var9) {
                                    _fun35413_ip = 289;
                                    continue _fun35413
                                }
                            case 240:
                                var10 = _closure2_slot4;
                                var9 = null;
                                if (!(var9 != var10)) {
                                    _fun35413_ip = 258;
                                    continue _fun35413
                                }
                            case 250:
                                var9 = _closure2_slot4;
                                var9 = var9.bind(var3)();
                            case 258:
                                var9 = var2;
                                var11 = _closure2_slot6;
                                var10 = var11._openPrivateChannel;
                                var8 = var7;
                                var8 = var8.body;
                                var8 = var10.bind(var11)(var8);
                                var8 = var9.bind(var3)(var8);
                            case 289:
                                var7 = var7.body;
                                var7 = var7.id;
                            case 299: // try_end0
                                return var7;
                            case 302:
                                return var6;
                            case 305: // catch_target0
                                CatchBlockStart(arg_register = 6);
                                var4 = var6;
                                var8 = null;
                                var6 = var8 == var6;
                                var7 = undefined;
                                if (var6) {
                                    _fun35413_ip = 346;
                                    continue _fun35413
                                }
                            case 321:
                                var6 = var4;
                                var6 = var6.body;
                                var5 = var6;
                                var6 = var8 == var6;
                                var7 = undefined;
                                if (var6) {
                                    _fun35413_ip = 346;
                                    continue _fun35413
                                }
                            case 341:
                                var7 = var5.code;
                            case 346:
                                var6 = _closure1_slot10;
                                var6 = var6.QUARANTINED;
                                if (!(var7 === var6)) {
                                    _fun35413_ip = 387;
                                    continue _fun35413
                                }
                            case 363:
                                var6 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var5 = 9;
                                var5 = var7[var5];
                                var5 = var6.bind(var3)(var5);
                                var5 = var5.bind(var3)();
                            case 387:
                                throw var4;
                            case 389:
                                var2 = var2.bind(var3)(var1);
                                var2 = global;
                                var3 = var2.Promise;
                                var2 = var3.resolve;
                                var1 = var1.id;
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            case 421:
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var1.openPrivateChannel = var6;
    var6 = function(arg0, arg1) { // Original name: _openCachedDMChannel, environment: var3
        _fun35415: for (var _fun35415_ip = 0;;) switch (_fun35415_ip) {
            case 0:
                var3 = arg1;
                var6 = arguments[2];
                var4 = undefined;
                if (!(var6 === var4)) {
                    _fun35415_ip = 14;
                    continue _fun35415
                }
            case 12:
                var6 = true;
            case 14:
                var5 = _closure1_slot7;
                var1 = var5.getDMFromUserId;
                var0 = arg0;
                var8 = var1.bind(var5)(var0);
                var5 = null;
                var0 = var5 != var8;
                var1 = null;
                if (!var0) {
                    _fun35415_ip = 60;
                    continue _fun35415
                }
            case 46:
                var7 = _closure1_slot7;
                var0 = var7.getChannel;
                var1 = var0.bind(var7)(var8);
            case 60:
                var7 = var5 == var1;
                var0 = null;
                if (var7) {
                    _fun35415_ip = 213;
                    continue _fun35415
                }
            case 72:
                var0 = var1;
                if (!var6) {
                    _fun35415_ip = 213;
                    continue _fun35415
                }
            case 81:
                if (!(var5 != var3)) {
                    _fun35415_ip = 89;
                    continue _fun35415
                }
            case 85:
                var3 = var3.bind(var4)();
            case 89:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 10;
                var3 = var7[var3];
                var6 = var6.bind(var4)(var3);
                var3 = var6.getRootNavigationRef;
                var3 = var3.bind(var6)();
                if (!(var5 == var3)) {
                    _fun35415_ip = 164;
                    continue _fun35415
                }
            case 123:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 12;
                var3 = var6[var3];
                var6 = var5.bind(var4)(var3);
                var5 = var6.selectPrivateChannel;
                var3 = var1.id;
                var3 = var5.bind(var6)(var3);
                var0 = var1;
                _fun35415_ip = 213;
                continue _fun35415;
            case 164:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 11;
                var2 = var5[var2];
                var5 = var3.bind(var4)(var2);
                var4 = var5.transitionToChannel;
                var3 = var1.id;
                var2 = {};
                var6 = true;
                var2.navigationReplace = var6;
                var2 = var4.bind(var5)(var3, var2);
                var0 = var1;
            case 213:
                return var0;
        }
    };
    var1._openCachedDMChannel = var6;
    var6 = function(arg0) { // Original name: ensurePrivateChannel, environment: var3
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = this;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot4;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun35418: for (var _fun35418_ip = 0;;) switch (_fun35418_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun35418_ip = 192;
                            continue _fun35418
                        }
                    case 10:
                        var3 = _closure2_slot1;
                        var2 = var3._getRecipients;
                        var1 = _closure2_slot0;
                        var7 = var2.bind(var3)(var1);
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 8;
                        var1 = var4[var1];
                        var5 = undefined;
                        var1 = var2.bind(var5)(var1);
                        var4 = var1.HTTP;
                        var2 = var4.post;
                        var1 = {};
                        var6 = _closure1_slot11;
                        var6 = var6.USER_CHANNELS;
                        var1.url = var6;
                        var6 = {};
                        var6.recipients = var7;
                        var1.body = var6;
                        var6 = true;
                        var1.oldFormErrors = var6;
                        var6 = false;
                        var1.rejectWithError = var6;
                        var1 = var2.bind(var4)(var1);
                        SaveGenerator(address = 117);
                    case 115:
                        return var1;
                    case 117:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun35418_ip = 189;
                            continue _fun35418
                        }
                    case 123:
                        var4 = _closure1_slot6;
                        var2 = var1.body;
                        var2 = var4.bind(var5)(var2);
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 13;
                        var3 = var6[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'CHANNEL_CREATE';
                        var3.type = var6;
                        var3.channel = var2;
                        var3 = var4.bind(var5)(var3);
                        var2 = var2.id;
                        return var2;
                    case 189:
                        return var1;
                    case 192:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.ensurePrivateChannel = var6;
    var6 = function(arg0) { // Original name: getOrEnsurePrivateChannel, environment: var3
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = this;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot4;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun35421: for (var _fun35421_ip = 0;;) switch (_fun35421_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun35421_ip = 76;
                            continue _fun35421
                        }
                    case 7:
                        var4 = _closure1_slot7;
                        var3 = var4.getDMFromUserId;
                        var1 = _closure2_slot0;
                        var1 = var3.bind(var4)(var1);
                        var3 = null;
                        if (!(var3 == var1)) {
                            _fun35421_ip = 73;
                            continue _fun35421
                        }
                    case 38:
                        var4 = _closure2_slot1;
                        var3 = var4.ensurePrivateChannel;
                        var2 = _closure2_slot0;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address = 61);
                    case 59:
                        return var2;
                    case 61:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        var1 = var2;
                        if (!var3) {
                            _fun35421_ip = 73;
                            continue _fun35421
                        }
                    case 70:
                        return var2;
                    case 73:
                        return var1;
                    case 76:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.getOrEnsurePrivateChannel = var6;
    var6 = function(arg0) { // Original name: getDMChannel, environment: var3
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot4;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun35424: for (var _fun35424_ip = 0;;) switch (_fun35424_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun35424_ip = 163;
                            continue _fun35424
                        }
                    case 10:
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 8;
                        var1 = var4[var1];
                        var5 = undefined;
                        var1 = var2.bind(var5)(var1);
                        var4 = var1.HTTP;
                        var2 = var4.get;
                        var1 = {};
                        var8 = _closure1_slot11;
                        var7 = var8.DM_CHANNEL;
                        var6 = _closure2_slot0;
                        var6 = var7.bind(var8)(var6);
                        var1.url = var6;
                        var6 = true;
                        var1.rejectWithError = var6;
                        var1 = var2.bind(var4)(var1);
                        SaveGenerator(address = 88);
                    case 86:
                        return var1;
                    case 88:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun35424_ip = 160;
                            continue _fun35424
                        }
                    case 94:
                        var4 = _closure1_slot6;
                        var2 = var1.body;
                        var2 = var4.bind(var5)(var2);
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 13;
                        var3 = var6[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'CHANNEL_CREATE';
                        var3.type = var6;
                        var3.channel = var2;
                        var3 = var4.bind(var5)(var3);
                        var2 = var2.id;
                        return var2;
                    case 160:
                        return var1;
                    case 163:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.getDMChannel = var6;
    var6 = function(arg0) { // Original name: _getRecipients, environment: var3
        _fun35425: for (var _fun35425_ip = 0;;) switch (_fun35425_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                if (!(var0 == var3)) {
                    _fun35425_ip = 15;
                    continue _fun35425
                }
            case 9:
                var0 = new Array(0);
                _fun35425_ip = 53;
                continue _fun35425;
            case 15:
                var1 = global;
                var2 = var1.Array;
                var1 = var2.isArray;
                var2 = var1.bind(var2)(var3);
                var1 = var3;
                if (var2) {
                    _fun35425_ip = 50;
                    continue _fun35425
                }
            case 39:
                var2 = new Array(1);
                var2[0] = var3;
                var1 = var2;
            case 50:
                var0 = var1;
            case 53:
                return var0;
        }
    };
    var1._getRecipients = var6;
    var6 = function(arg0) { // Original name: _openPrivateChannel, environment: var3
        _fun35426: for (var _fun35426_ip = 0;;) switch (_fun35426_ip) {
            case 0:
                var2 = _closure1_slot6;
                var3 = undefined;
                var0 = arg0;
                var0 = var2.bind(var3)(var0);
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 13;
                var2 = var5[var2];
                var6 = var4.bind(var3)(var2);
                var4 = var6.dispatch;
                var2 = {};
                var7 = 'CHANNEL_CREATE';
                var2.type = var7;
                var2.channel = var0;
                var2 = var4.bind(var6)(var2);
                var4 = _closure1_slot0;
                var2 = 10;
                var2 = var5[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var4.getRootNavigationRef;
                var4 = var2.bind(var4)();
                var2 = null;
                if (!(var2 == var4)) {
                    _fun35426_ip = 131;
                    continue _fun35426
                }
            case 93:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 12;
                var2 = var5[var2];
                var5 = var4.bind(var3)(var2);
                var4 = var5.selectPrivateChannel;
                var2 = var0.id;
                var2 = var4.bind(var5)(var2);
                _fun35426_ip = 177;
                continue _fun35426;
            case 131:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 11;
                var1 = var4[var1];
                var4 = var2.bind(var3)(var1);
                var3 = var4.transitionToChannel;
                var2 = var0.id;
                var1 = {};
                var5 = true;
                var1.navigationReplace = var5;
                var1 = var3.bind(var4)(var2, var1);
            case 177:
                return var0;
        }
    };
    var1._openPrivateChannel = var6;
    var6 = function(arg0) { // Original name: closePrivateChannel, environment: var3
        _fun35427: for (var _fun35427_ip = 0;;) switch (_fun35427_ip) {
            case 0:
                var7 = arg0;
                var1 = arguments[1];
                var5 = arguments[2];
                var3 = undefined;
                if (!(var1 === var3)) {
                    _fun35427_ip = 19;
                    continue _fun35427
                }
            case 17:
                var1 = false;
            case 19:
                if (!(var5 === var3)) {
                    _fun35427_ip = 25;
                    continue _fun35427
                }
            case 23:
                var5 = false;
            case 25:
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 14;
                var2 = var8[var2];
                var2 = var6.bind(var3)(var2);
                var2 = var2.bind(var3)(var7);
                if (!var2) {
                    _fun35427_ip = 140;
                    continue _fun35427
                }
            case 56:
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 15;
                var2 = var8[var2];
                var9 = var6.bind(var3)(var2);
                var8 = var9.track;
                var2 = _closure1_slot9;
                var6 = var2.CHANGE_LOG_DM_REMOVED;
                var2 = {};
                var11 = _closure1_slot5;
                var10 = var11.latestChangelogId;
                var10 = var10.bind(var11)();
                var2.last_changelog_id = var10;
                var11 = _closure1_slot8;
                var10 = var11.getUnreadCount;
                var10 = var10.bind(var11)(var7);
                var2.unread_count = var10;
                var2 = var8.bind(var9)(var6, var2);
            case 140:
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 13;
                var2 = var8[var2];
                var8 = var6.bind(var3)(var2);
                var6 = var8.dispatch;
                var2 = {};
                var9 = 'CHANNEL_DELETE';
                var2.type = var9;
                var9 = {};
                var9.id = var7;
                var9.guild_id = var3;
                var9.parent_id = var3;
                var2.channel = var9;
                var2.silent = var5;
                var2 = var6.bind(var8)(var2);
                if (!var1) {
                    _fun35427_ip = 248;
                    continue _fun35427
                }
            case 207:
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 16;
                var1 = var6[var1];
                var6 = var2.bind(var3)(var1);
                var2 = var6.transitionTo;
                var1 = _closure1_slot12;
                var1 = var1.FRIENDS;
                var1 = var2.bind(var6)(var1);
            case 248:
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 8;
                var1 = var6[var1];
                var1 = var2.bind(var3)(var1);
                var3 = var1.HTTP;
                var2 = var3.del;
                var1 = {};
                var6 = _closure1_slot11;
                var4 = var6.CHANNEL;
                var4 = var4.bind(var6)(var7);
                var1.url = var4;
                var4 = {};
                var4.silent = var5;
                var1.query = var4;
                var4 = true;
                var1.oldFormErrors = var4;
                var4 = false;
                var1.rejectWithError = var4;
                var3 = var2.bind(var3)(var1);
                var2 = var3.then;
                var1 = function() { // Environment: var0
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var0 = 17;
                    var1 = var7[var0];
                    var0 = undefined;
                    var1 = var6.bind(var0)(var1);
                    var3 = var1.AccessibilityAnnouncer;
                    var2 = var3.announce;
                    var1 = 18;
                    var4 = var7[var1];
                    var4 = var6.bind(var0)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var1 = var7[var1];
                    var1 = var6.bind(var0)(var1);
                    var1 = var1.t;
                    var1 = var1.nRbucl;
                    var1 = var4.bind(var5)(var1);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var2 = var2.bind(var3)(var1);
                var1 = var2.catch;
                var0 = function() { // Environment: var0
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var0 = 17;
                    var1 = var7[var0];
                    var0 = undefined;
                    var1 = var6.bind(var0)(var1);
                    var3 = var1.AccessibilityAnnouncer;
                    var2 = var3.announce;
                    var1 = 18;
                    var4 = var7[var1];
                    var4 = var6.bind(var0)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var1 = var7[var1];
                    var1 = var6.bind(var0)(var1);
                    var1 = var1.t;
                    var1 = var1.ndXVI5;
                    var1 = var4.bind(var5)(var1);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var1.closePrivateChannel = var6;
    var6 = function(arg0, arg1) { // Original name: updatePermissionOverwrite, environment: var3
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot4;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun35432: for (var _fun35432_ip = 0;;) switch (_fun35432_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun35432_ip = 179;
                            continue _fun35432
                        }
                    case 10:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 8;
                        var1 = var4[var1];
                        var4 = undefined;
                        var1 = var3.bind(var4)(var1);
                        var6 = var1.HTTP;
                        var3 = var6.put;
                        var1 = {};
                        var11 = _closure1_slot11;
                        var10 = var11.CHANNEL_PERMISSIONS_OVERWRITE;
                        var9 = _closure2_slot0;
                        var7 = _closure2_slot1;
                        var8 = var7.id;
                        var8 = var10.bind(var11)(var9, var8);
                        var1.url = var8;
                        var1.body = var7;
                        var7 = true;
                        var1.oldFormErrors = var7;
                        var7 = false;
                        var1.rejectWithError = var7;
                        var1 = var3.bind(var6)(var1);
                        SaveGenerator(address = 110);
                    case 108:
                        return var1;
                    case 110:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun35432_ip = 176;
                            continue _fun35432
                        }
                    case 116:
                        var3 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 13;
                        var2 = var6[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS';
                        var2.type = var6;
                        var6 = _closure2_slot0;
                        var2.channelId = var6;
                        var5 = _closure2_slot1;
                        var2.overwrite = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    case 176:
                        return var1;
                    case 179:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.updatePermissionOverwrite = var6;
    var6 = function(arg0, arg1) { // Original name: clearPermissionOverwrite, environment: var3
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot4;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun35435: for (var _fun35435_ip = 0;;) switch (_fun35435_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun35435_ip = 167;
                            continue _fun35435
                        }
                    case 10:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 8;
                        var1 = var4[var1];
                        var4 = undefined;
                        var1 = var3.bind(var4)(var1);
                        var6 = var1.HTTP;
                        var3 = var6.del;
                        var1 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': false
                        };
                        var10 = _closure1_slot11;
                        var9 = var10.CHANNEL_PERMISSIONS_OVERWRITE;
                        var8 = _closure2_slot0;
                        var7 = _closure2_slot1;
                        var7 = var9.bind(var10)(var8, var7);
                        var1.url = var7;
                        var1 = var3.bind(var6)(var1);
                        SaveGenerator(address = 98);
                    case 96:
                        return var1;
                    case 98:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun35435_ip = 164;
                            continue _fun35435
                        }
                    case 104:
                        var3 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 13;
                        var2 = var6[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS';
                        var2.type = var6;
                        var6 = _closure2_slot0;
                        var2.channelId = var6;
                        var5 = _closure2_slot1;
                        var2.overwriteId = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    case 164:
                        return var1;
                    case 167:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.clearPermissionOverwrite = var6;
    var6 = function(arg0, arg1, arg2, arg3) { // Original name: addRecipient, environment: var3
        var7 = arg0;
        var1 = this;
        var _closure2_slot0 = var1;
        var _closure2_slot1 = var7;
        var1 = arg3;
        var _closure2_slot2 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.put;
        var1 = {};
        var6 = _closure1_slot11;
        var5 = var6.CHANNEL_RECIPIENT;
        var4 = arg1;
        var4 = var5.bind(var6)(var7, var4);
        var1.url = var4;
        var4 = {};
        var5 = arg2;
        var4.location = var5;
        var1.context = var4;
        var4 = true;
        var1.oldFormErrors = var4;
        var1.rejectWithError = var4;
        var3 = var2.bind(var3)(var1);
        var2 = var3.then;
        var1 = function(arg0) { // Environment: var0
            _fun35437: for (var _fun35437_ip = 0;;) switch (_fun35437_ip) {
                case 0:
                    var1 = arg0;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var0 = 17;
                    var0 = var8[var0];
                    var3 = undefined;
                    var0 = var7.bind(var3)(var0);
                    var4 = var0.AccessibilityAnnouncer;
                    var2 = var4.announce;
                    var0 = 18;
                    var5 = var8[var0];
                    var5 = var7.bind(var3)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var0 = var8[var0];
                    var0 = var7.bind(var3)(var0);
                    var0 = var0.t;
                    var0 = var0.cU0t1F;
                    var0 = var5.bind(var6)(var0);
                    var0 = var2.bind(var4)(var0);
                    var4 = _closure2_slot2;
                    var0 = null;
                    if (!(var0 != var4)) {
                        _fun35437_ip = 115;
                        continue _fun35437
                    }
                case 107:
                    var0 = _closure2_slot2;
                    var0 = var0.bind(var3)();
                case 115:
                    var3 = var1.status;
                    var0 = 201;
                    if (!(var0 !== var3)) {
                        _fun35437_ip = 133;
                        continue _fun35437
                    }
                case 127:
                    var0 = _closure2_slot1;
                    _fun35437_ip = 158;
                    continue _fun35437;
                case 133:
                    var3 = _closure2_slot0;
                    var2 = var3._openPrivateChannel;
                    var1 = var1.body;
                    var1 = var2.bind(var3)(var1);
                    var0 = var1.id;
                case 158:
                    return var0;
            }
        };
        var2 = var2.bind(var3)(var1);
        var1 = var2.catch;
        var0 = function() { // Environment: var0
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var0 = 17;
            var0 = var7[var0];
            var5 = undefined;
            var0 = var6.bind(var5)(var0);
            var2 = var0.AccessibilityAnnouncer;
            var1 = var2.announce;
            var0 = 18;
            var3 = var7[var0];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var0 = var7[var0];
            var0 = var6.bind(var5)(var0);
            var0 = var0.t;
            var0 = var0["8GEdej"];
            var0 = var3.bind(var4)(var0);
            var0 = var1.bind(var2)(var0);
            var0 = _closure2_slot1;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.addRecipient = var6;
    var6 = function(arg0, arg1, arg2, arg3) { // Original name: addRecipients, environment: var3
        var2 = arg1;
        var6 = arg2;
        var5 = this;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var2;
        var _closure2_slot2 = var6;
        var4 = var5.addRecipient;
        var1 = 0;
        var9 = var2[var1];
        var10 = arg0;
        var7 = arg3;
        var11 = var5;
        var8 = var6;
        var2 = var11[var4](var10, var9, var8, var7, var6);
        var1 = var2.then;
        var0 = function(arg0) { // Environment: var0
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = global;
            var3 = var1.Promise;
            var2 = var3.all;
            var5 = _closure2_slot1;
            var4 = var5.slice;
            var1 = 1;
            var5 = var4.bind(var5)(var1);
            var4 = var5.map;
            var1 = function(arg0) { // Environment: var0
                var4 = _closure2_slot0;
                var3 = var4.addRecipient;
                var2 = _closure3_slot0;
                var1 = _closure2_slot2;
                var0 = arg0;
                var0 = var3.bind(var4)(var2, var0, var1);
                return var0;
            };
            var1 = var4.bind(var5)(var1);
            var2 = var2.bind(var3)(var1);
            var1 = var2.then;
            var0 = function() { // Environment: var0
                var0 = _closure3_slot0;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.addRecipients = var6;
    var6 = function(arg0, arg1) { // Original name: removeRecipient, environment: var3
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 8;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.del;
        var0 = {
            'url': null,
            'oldFormErrors': true,
            'rejectWithError': true
        };
        var6 = _closure1_slot11;
        var5 = var6.CHANNEL_RECIPIENT;
        var4 = arg0;
        var3 = arg1;
        var3 = var5.bind(var6)(var4, var3);
        var0.url = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.removeRecipient = var6;
    var6 = function(arg0, arg1) { // Original name: setDMOwner, environment: var3
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 8;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.patch;
        var0 = {};
        var5 = _closure1_slot11;
        var4 = var5.CHANNEL;
        var3 = arg0;
        var3 = var4.bind(var5)(var3);
        var0.url = var3;
        var3 = {};
        var4 = arg1;
        var3.owner = var4;
        var0.body = var3;
        var3 = true;
        var0.oldFormErrors = var3;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.setDMOwner = var6;
    var6 = function(arg0, arg1) { // Original name: setName, environment: var3
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot4;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun35447: for (var _fun35447_ip = 0;;) switch (_fun35447_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun35447_ip = 216;
                            continue _fun35447
                        }
                    case 10:
                        var3 = _closure1_slot7;
                        var1 = var3.getChannel;
                        var10 = _closure2_slot0;
                        var8 = var1.bind(var3)(var10);
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 8;
                        var1 = var4[var1];
                        var5 = undefined;
                        var1 = var3.bind(var5)(var1);
                        var4 = var1.HTTP;
                        var3 = var4.patch;
                        var1 = {};
                        var9 = _closure1_slot11;
                        var6 = var9.CHANNEL;
                        var6 = var6.bind(var9)(var10);
                        var1.url = var6;
                        var6 = {};
                        var7 = _closure2_slot1;
                        var6.name = var7;
                        var1.body = var6;
                        var6 = true;
                        var1.oldFormErrors = var6;
                        var1.rejectWithError = var6;
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 122);
                    case 120:
                        return var1;
                    case 122:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun35447_ip = 213;
                            continue _fun35447
                        }
                    case 128:
                        var6 = null;
                        var3 = var6 == var8;
                        var4 = undefined;
                        if (var3) {
                            _fun35447_ip = 149;
                            continue _fun35447
                        }
                    case 139:
                        var3 = var8.getGuildId;
                        var4 = var3.bind(var8)();
                    case 149:
                        var3 = var6 == var4;
                        if (var3) {
                            _fun35447_ip = 176;
                            continue _fun35447
                        }
                    case 156:
                        var6 = var6 != var8;
                        if (!var6) {
                            _fun35447_ip = 173;
                            continue _fun35447
                        }
                    case 163:
                        var7 = var8.isThread;
                        var6 = var7.bind(var8)();
                    case 173:
                        var3 = var6;
                    case 176:
                        if (var3) {
                            _fun35447_ip = 210;
                            continue _fun35447
                        }
                    case 179:
                        var3 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 19;
                        var2 = var6[var2];
                        var3 = var3.bind(var5)(var2);
                        var2 = var3.checkGuildTemplateDirty;
                        var2 = var2.bind(var3)(var4);
                    case 210:
                        return var1;
                    case 213:
                        return var1;
                    case 216:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.setName = var6;
    var6 = function(arg0, arg1, arg2) { // Original name: setIcon, environment: var3
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var2 = _closure1_slot4;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun35450: for (var _fun35450_ip = 0;;) switch (_fun35450_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun35450_ip = 635;
                            continue _fun35450
                        }
                    case 10:
                        var9 = undefined;
                        var15 = undefined;
                        var11 = undefined;
                        var4 = undefined;
                        var7 = undefined;
                        var8 = undefined;
                        var6 = undefined;
                        var10 = _closure1_slot7;
                        var3 = var10.getChannel;
                        var5 = _closure2_slot0;
                        var3 = var3.bind(var10)(var5);
                        var15 = var3;
                        var12 = {};
                        var12.channel_id = var5;
                        var10 = null;
                        var5 = var10 == var3;
                        var3 = undefined;
                        if (var5) {
                            _fun35450_ip = 76;
                            continue _fun35450
                        }
                    case 68:
                        var5 = var15;
                        var3 = var5.type;
                    case 76:
                        var12.channel_type = var3;
                        var3 = var15;
                        var5 = var10 == var3;
                        var3 = undefined;
                        if (var5) {
                            _fun35450_ip = 101;
                            continue _fun35450
                        }
                    case 93:
                        var5 = var15;
                        var3 = var5.icon;
                    case 101:
                        var3 = var10 != var3;
                        var12.old_icon_set = var3;
                        var3 = _closure2_slot1;
                        var3 = var10 != var3;
                        var12.new_icon_set = var3;
                        var3 = _closure2_slot2;
                        var12.location = var3;
                        var11 = var12;
                        var13 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var5 = 15;
                        var3 = var3[var5];
                        var16 = var13.bind(var9)(var3);
                        var14 = var16.track;
                        var3 = _closure1_slot9;
                        var13 = var3.CHANNEL_ICON_EDIT_PROGRESSED;
                        var3 = {};
                        var21 = var3;
                        var20 = var12;
                        var12 = copyDataProperties(var21, var20);
                        var18 = 'initiated';
                        var12 = 'status';
                        var3[var12] = var18;
                        var3 = var14.bind(var16)(var13, var3);
                    case 202: // try_start_0
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var3 = 8;
                        var3 = var14[var3];
                        var3 = var13.bind(var9)(var3);
                        var14 = var3.HTTP;
                        var13 = var14.patch;
                        var3 = {
                            'url': null,
                            'body': null,
                            'oldFormErrors': true,
                            'rejectWithError': true,
                            'failImmediatelyWhenRateLimited': true
                        };
                        var19 = _closure1_slot11;
                        var18 = var19.CHANNEL;
                        var16 = _closure2_slot0;
                        var16 = var18.bind(var19)(var16);
                        var3.url = var16;
                        var16 = {};
                        var17 = _closure2_slot1;
                        var16.icon = var17;
                        var3.body = var16;
                        var3 = var13.bind(var14)(var3);
                        SaveGenerator(address = 293);
                    case 291:
                        return var3;
                    case 293:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 13);
                        if (var13) {
                            _fun35450_ip = 468;
                            continue _fun35450
                        }
                    case 302:
                        var4 = var3;
                        var14 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var13 = var13[var5];
                        var17 = var14.bind(var9)(var13);
                        var16 = var17.track;
                        var13 = _closure1_slot9;
                        var14 = var13.CHANNEL_ICON_EDIT_PROGRESSED;
                        var13 = {};
                        var20 = var11;
                        var21 = var13;
                        var18 = copyDataProperties(var21, var20);
                        var18 = 'success';
                        var13[var12] = var18;
                        var13 = var16.bind(var17)(var14, var13);
                        var13 = var15;
                        var13 = var10 == var13;
                        var14 = undefined;
                        if (var13) {
                            _fun35450_ip = 389;
                            continue _fun35450
                        }
                    case 376:
                        var16 = var15;
                        var13 = var16.getGuildId;
                        var14 = var13.bind(var16)();
                    case 389:
                        var7 = var14;
                        var14 = var10 == var14;
                        var13 = var14;
                        if (var14) {
                            _fun35450_ip = 431;
                            continue _fun35450
                        }
                    case 402:
                        var16 = var15;
                        var16 = var10 != var16;
                        var14 = var16;
                        if (!var16) {
                            _fun35450_ip = 428;
                            continue _fun35450
                        }
                    case 415:
                        var16 = var15;
                        var15 = var16.isThread;
                        var14 = var15.bind(var16)();
                    case 428:
                        var13 = var14;
                    case 431:
                        if (var13) {
                            _fun35450_ip = 465;
                            continue _fun35450
                        }
                    case 434:
                        var14 = _closure1_slot1;
                        var15 = _closure1_slot2;
                        var13 = 19;
                        var13 = var15[var13];
                        var14 = var14.bind(var9)(var13);
                        var13 = var14.checkGuildTemplateDirty;
                        var7 = var13.bind(var14)(var7);
                    case 465: // try_end0
                        return var4;
                    case 468:
                        return var3;
                    case 471: // catch_target0
                        CatchBlockStart(arg_register = 7);
                        var1 = var7;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var5];
                        var5 = var4.bind(var9)(var3);
                        var4 = var5.track;
                        var2 = _closure1_slot9;
                        var3 = var2.CHANNEL_ICON_EDIT_PROGRESSED;
                        var2 = {};
                        var20 = var11;
                        var21 = var2;
                        var11 = copyDataProperties(var21, var20);
                        var11 = 'failed';
                        var2[var12] = var11;
                        var11 = var10 == var7;
                        var7 = undefined;
                        if (var11) {
                            _fun35450_ip = 566;
                            continue _fun35450
                        }
                    case 540:
                        var11 = var1;
                        var11 = var11.body;
                        var8 = var11;
                        var11 = var10 == var11;
                        var7 = undefined;
                        if (var11) {
                            _fun35450_ip = 566;
                            continue _fun35450
                        }
                    case 560:
                        var7 = var8.retry_after;
                    case 566:
                        var8 = var10 != var7;
                        var7 = 'is_rate_limited';
                        var2[var7] = var8;
                        var7 = var1;
                        var8 = var10 == var7;
                        var7 = undefined;
                        if (var8) {
                            _fun35450_ip = 618;
                            continue _fun35450
                        }
                    case 593:
                        var8 = var1;
                        var8 = var8.body;
                        var6 = var8;
                        var8 = var10 == var8;
                        var7 = undefined;
                        if (var8) {
                            _fun35450_ip = 618;
                            continue _fun35450
                        }
                    case 613:
                        var7 = var6.message;
                    case 618:
                        var6 = 'error_message';
                        var2[var6] = var7;
                        var2 = var4.bind(var5)(var3, var2);
                        throw var1;
                    case 635:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.setIcon = var6;
    var6 = function(arg0, arg1, arg2) { // Original name: updateChannel, environment: var3
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var2 = _closure1_slot4;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun35453: for (var _fun35453_ip = 0;;) switch (_fun35453_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun35453_ip = 689;
                            continue _fun35453
                        }
                    case 10:
                        var9 = undefined;
                        var3 = undefined;
                        var14 = undefined;
                        var7 = undefined;
                        var5 = undefined;
                        var11 = undefined;
                        var8 = undefined;
                        var6 = undefined;
                        var4 = _closure2_slot1;
                        var2 = 'icon';
                        var3 = var2 in var4;
                        var13 = _closure1_slot7;
                        var12 = var13.getChannel;
                        var10 = _closure2_slot0;
                        var13 = var12.bind(var13)(var10);
                        var14 = var13;
                        var12 = var4.icon;
                        var4 = {};
                        var4.channel_id = var10;
                        var10 = null;
                        var16 = var10 == var13;
                        var13 = undefined;
                        if (var16) {
                            _fun35453_ip = 95;
                            continue _fun35453
                        }
                    case 87:
                        var16 = var14;
                        var13 = var16.type;
                    case 95:
                        var4.channel_type = var13;
                        var13 = var14;
                        var16 = var10 == var13;
                        var13 = undefined;
                        if (var16) {
                            _fun35453_ip = 120;
                            continue _fun35453
                        }
                    case 112:
                        var16 = var14;
                        var13 = var16.icon;
                    case 120:
                        var13 = var10 != var13;
                        var4.old_icon_set = var13;
                        var12 = var10 != var12;
                        var4.new_icon_set = var12;
                        var12 = _closure2_slot2;
                        var4.location = var12;
                        var7 = var4;
                        var4 = var3;
                        if (!var4) {
                            _fun35453_ip = 223;
                            continue _fun35453
                        }
                    case 155:
                        var12 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var4 = 15;
                        var4 = var13[var4];
                        var16 = var12.bind(var9)(var4);
                        var13 = var16.track;
                        var4 = _closure1_slot9;
                        var12 = var4.CHANNEL_ICON_EDIT_PROGRESSED;
                        var4 = {};
                        var19 = var7;
                        var20 = var4;
                        var17 = copyDataProperties(var20, var19);
                        var18 = 'initiated';
                        var17 = 'status';
                        var4[var17] = var18;
                        var4 = var13.bind(var16)(var12, var4);
                    case 223: // try_start_0
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var4 = 8;
                        var4 = var13[var4];
                        var4 = var12.bind(var9)(var4);
                        var13 = var4.HTTP;
                        var12 = var13.patch;
                        var4 = {};
                        var16 = {};
                        var17 = _closure2_slot2;
                        var16.location = var17;
                        var4.context = var16;
                        var18 = _closure1_slot11;
                        var17 = var18.CHANNEL;
                        var16 = _closure2_slot0;
                        var16 = var17.bind(var18)(var16);
                        var4.url = var16;
                        var15 = _closure2_slot1;
                        var4.body = var15;
                        var15 = true;
                        var4.oldFormErrors = var15;
                        var4.rejectWithError = var15;
                        var4 = var12.bind(var13)(var4);
                        SaveGenerator(address = 321);
                    case 319:
                        return var4;
                    case 321:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 12);
                        if (var12) {
                            _fun35453_ip = 509;
                            continue _fun35453
                        }
                    case 330:
                        var5 = var4;
                        var12 = var14;
                        var12 = var10 == var12;
                        var13 = undefined;
                        if (var12) {
                            _fun35453_ip = 358;
                            continue _fun35453
                        }
                    case 345:
                        var15 = var14;
                        var12 = var15.getGuildId;
                        var13 = var12.bind(var15)();
                    case 358:
                        var11 = var13;
                        var13 = var10 == var13;
                        var12 = var13;
                        if (var13) {
                            _fun35453_ip = 400;
                            continue _fun35453
                        }
                    case 371:
                        var15 = var14;
                        var15 = var10 != var15;
                        var13 = var15;
                        if (!var15) {
                            _fun35453_ip = 397;
                            continue _fun35453
                        }
                    case 384:
                        var15 = var14;
                        var14 = var15.isThread;
                        var13 = var14.bind(var15)();
                    case 397:
                        var12 = var13;
                    case 400:
                        if (var12) {
                            _fun35453_ip = 434;
                            continue _fun35453
                        }
                    case 403:
                        var13 = _closure1_slot1;
                        var14 = _closure1_slot2;
                        var12 = 19;
                        var12 = var14[var12];
                        var13 = var13.bind(var9)(var12);
                        var12 = var13.checkGuildTemplateDirty;
                        var11 = var12.bind(var13)(var11);
                    case 434:
                        var11 = var3;
                        if (!var11) {
                            _fun35453_ip = 506;
                            continue _fun35453
                        }
                    case 440:
                        var12 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var11 = 15;
                        var11 = var13[var11];
                        var14 = var12.bind(var9)(var11);
                        var13 = var14.track;
                        var11 = _closure1_slot9;
                        var12 = var11.CHANNEL_ICON_EDIT_PROGRESSED;
                        var11 = {};
                        var19 = var7;
                        var20 = var11;
                        var15 = copyDataProperties(var20, var19);
                        var16 = 'success';
                        var15 = 'status';
                        var11[var15] = var16;
                        var11 = var13.bind(var14)(var12, var11);
                    case 506: // try_end0
                        return var5;
                    case 509:
                        return var4;
                    case 512: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        if (!var3) {
                            _fun35453_ip = 687;
                            continue _fun35453
                        }
                    case 520:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 15;
                        var3 = var5[var3];
                        var5 = var4.bind(var9)(var3);
                        var4 = var5.track;
                        var2 = _closure1_slot9;
                        var3 = var2.CHANNEL_ICON_EDIT_PROGRESSED;
                        var2 = {};
                        var19 = var7;
                        var20 = var2;
                        var7 = copyDataProperties(var20, var19);
                        var11 = 'failed';
                        var7 = 'status';
                        var2[var7] = var11;
                        var7 = var1;
                        var11 = var10 == var7;
                        var7 = undefined;
                        if (var11) {
                            _fun35453_ip = 620;
                            continue _fun35453
                        }
                    case 594:
                        var11 = var1;
                        var11 = var11.body;
                        var8 = var11;
                        var11 = var10 == var11;
                        var7 = undefined;
                        if (var11) {
                            _fun35453_ip = 620;
                            continue _fun35453
                        }
                    case 614:
                        var7 = var8.retry_after;
                    case 620:
                        var8 = var10 != var7;
                        var7 = 'is_rate_limited';
                        var2[var7] = var8;
                        var7 = var1;
                        var8 = var10 == var7;
                        var7 = undefined;
                        if (var8) {
                            _fun35453_ip = 672;
                            continue _fun35453
                        }
                    case 647:
                        var8 = var1;
                        var8 = var8.body;
                        var6 = var8;
                        var8 = var10 == var8;
                        var7 = undefined;
                        if (var8) {
                            _fun35453_ip = 672;
                            continue _fun35453
                        }
                    case 667:
                        var7 = var6.message;
                    case 672:
                        var6 = 'error_message';
                        var2[var6] = var7;
                        var2 = var4.bind(var5)(var3, var2);
                    case 687:
                        throw var1;
                    case 689:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.updateChannel = var6;
    var6 = function(arg0) { // Original name: convertToGuild, environment: var3
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 8;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.post;
        var0 = {
            'url': null,
            'oldFormErrors': true,
            'rejectWithError': true
        };
        var5 = _closure1_slot11;
        var4 = var5.CHANNEL_CONVERT;
        var3 = arg0;
        var3 = var4.bind(var5)(var3);
        var0.url = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.convertToGuild = var6;
    var6 = function(arg0, arg1) { // Original name: preload, environment: var3
        _fun35455: for (var _fun35455_ip = 0;;) switch (_fun35455_ip) {
            case 0:
                var6 = arg0;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 13;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'CHANNEL_PRELOAD';
                var1.type = var5;
                var7 = _closure1_slot13;
                var5 = null;
                if (!(var6 !== var7)) {
                    _fun35455_ip = 56;
                    continue _fun35455
                }
            case 53:
                var5 = var6;
            case 56:
                var1.guildId = var5;
                var5 = arg1;
                var1.channelId = var5;
                var4 = _closure1_slot14;
                var1.context = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var1.preload = var6;
    var6 = function(arg0, arg1) { // Original name: fetchChannelStoreListing, environment: var3
        _fun35456: for (var _fun35456_ip = 0;;) switch (_fun35456_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var _closure2_slot0 = var5;
                var1 = null;
                if (!(var1 == var4)) {
                    _fun35456_ip = 38;
                    continue _fun35456
                }
            case 18:
                var2 = _closure1_slot11;
                var1 = var2.CHANNEL_STORE_LISTING;
                var3 = var1.bind(var2)(var5);
                _fun35456_ip = 57;
                continue _fun35456;
            case 38:
                var2 = _closure1_slot11;
                var1 = var2.CHANNEL_STORE_LISTING_SKU;
                var3 = var1.bind(var2)(var5, var4);
            case 57:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 20;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.httpGetWithCountryCodeQuery;
                var2 = var1.bind(var2)(var3);
                var1 = var2.then;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 13;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'STORE_LISTING_FETCH_SUCCESS';
                    var1.type = var4;
                    var4 = _closure2_slot0;
                    var1.channelId = var4;
                    var4 = arg0;
                    var4 = var4.body;
                    var1.storeListing = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var1.fetchChannelStoreListing = var6;
    var6 = function(arg0, arg1, arg2, arg3) { // Original name: createTextChannel, environment: var3
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var1 = arg3;
        var _closure2_slot3 = var1;
        var2 = _closure1_slot4;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun35460: for (var _fun35460_ip = 0;;) switch (_fun35460_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun35460_ip = 218;
                            continue _fun35460
                        }
                    case 10:
                        var7 = {};
                        var1 = _closure1_slot15;
                        var1 = var1.GUILD_TEXT;
                        var7.type = var1;
                        var1 = _closure2_slot1;
                        var7.name = var1;
                        var1 = new Array(0);
                        var7.permission_overwrites = var1;
                        var1 = _closure2_slot2;
                        var4 = null;
                        if (!(var4 != var1)) {
                            _fun35460_ip = 69;
                            continue _fun35460
                        }
                    case 59:
                        var1 = _closure2_slot2;
                        var7.parent_id = var1;
                    case 69:
                        var1 = _closure2_slot3;
                        if (!(var4 != var1)) {
                            _fun35460_ip = 87;
                            continue _fun35460
                        }
                    case 77:
                        var1 = _closure2_slot3;
                        var7.topic = var1;
                    case 87:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 8;
                        var1 = var5[var1];
                        var5 = undefined;
                        var1 = var4.bind(var5)(var1);
                        var6 = var1.HTTP;
                        var4 = var6.post;
                        var1 = {};
                        var10 = _closure1_slot11;
                        var9 = var10.GUILD_CHANNELS;
                        var8 = _closure2_slot0;
                        var8 = var9.bind(var10)(var8);
                        var1.url = var8;
                        var1.body = var7;
                        var7 = true;
                        var1.oldFormErrors = var7;
                        var7 = false;
                        var1.rejectWithError = var7;
                        var1 = var4.bind(var6)(var1);
                        SaveGenerator(address = 171);
                    case 169:
                        return var1;
                    case 171:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun35460_ip = 215;
                            continue _fun35460
                        }
                    case 177:
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 19;
                        var3 = var6[var3];
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.checkGuildTemplateDirty;
                        var2 = _closure2_slot0;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    case 215:
                        return var1;
                    case 218:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.createTextChannel = var6;
    var3 = function(arg0) { // Original name: fetchChannel, environment: var3
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot4;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun35463: for (var _fun35463_ip = 0;;) switch (_fun35463_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun35463_ip = 102;
                            continue _fun35463
                        }
                    case 7:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 8;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.get;
                        var1 = {};
                        var6 = _closure1_slot11;
                        var5 = var6.CHANNEL;
                        var4 = _closure2_slot0;
                        var4 = var5.bind(var6)(var4);
                        var1.url = var4;
                        var4 = true;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 85);
                    case 83:
                        return var1;
                    case 85:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun35463_ip = 99;
                            continue _fun35463
                        }
                    case 91:
                        var2 = var1.body;
                        return var2;
                    case 99:
                        return var1;
                    case 102:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.fetchChannel = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'actions/ChannelActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 3905, 1376, 1372, 3906, 660, 7980, 507, 4643, 3879, 3902, 4195, 806, 5856, 795, 1220, 3165, 1234, 6449, 3320, 2]);