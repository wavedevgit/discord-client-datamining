// modules/summaries/SummaryActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var16 = require;
    var15 = metroImportDefault;
    var2 = exports;
    var17 = dependencyMap;
    var _closure1_slot0 = var16;
    var _closure1_slot1 = var15;
    var _closure1_slot2 = var17;
    var13 = function() {
        var0 = undefined;
        var3 = _closure1_slot13;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot12 = var13;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun73760: for (var _fun73760_ip = 0;;) switch (_fun73760_ip) {
                    case 0:
                        StartGenerator();
                        var10 = arg0;
                        var5 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun73760_ip = 377;
                            continue _fun73760
                        }
                    case 16:
                        var9 = var10;
                        var13 = var5;
                        var1 = undefined;
                        var6 = undefined;
                        var7 = undefined;
                        var8 = undefined;
                        var11 = undefined;
                        var4 = _closure1_slot7;
                        var3 = var4.shouldFetch;
                        var3 = var3.bind(var4)(var10, var5);
                        if (!var3) {
                            _fun73760_ip = 374;
                            continue _fun73760
                        }
                    case 57:
                        var5 = global;
                        var4 = var5.Date;
                        var3 = var4.now;
                        var14 = var3.bind(var4)();
                        var6 = var14;
                        var10 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var4 = 7;
                        var3 = var3[var4];
                        var12 = var10.bind(var1)(var3);
                        var10 = var12.dispatch;
                        var3 = {};
                        var15 = 'REQUEST_CHANNEL_SUMMARY';
                        var3.type = var15;
                        var15 = var9;
                        var3.channelId = var15;
                        var15 = var13;
                        var3.summaryId = var15;
                        var3.requestedAt = var14;
                        var3 = var10.bind(var12)(var3);
                        var7 = undefined;
                        var8 = undefined;
                    case 143: // try_start_0
                        var10 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var3 = 8;
                        var3 = var12[var3];
                        var3 = var10.bind(var1)(var3);
                        var12 = var3.HTTP;
                        var10 = var12.get;
                        var3 = {};
                        var16 = _closure1_slot8;
                        var15 = var16.CHANNEL_SUMMARY;
                        var14 = var9;
                        var13 = var15.bind(var16)(var14, var13);
                        var3.url = var13;
                        var13 = false;
                        var3.rejectWithError = var13;
                        var3 = var10.bind(var12)(var3);
                        SaveGenerator(address = 213);
                    case 211:
                        return var3;
                    case 213:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 10);
                        if (var10) {
                            _fun73760_ip = 243;
                            continue _fun73760
                        }
                    case 219:
                        var11 = var3;
                        var10 = null;
                        var12 = var10 == var3;
                        var10 = undefined;
                        if (var12) {
                            _fun73760_ip = 238;
                            continue _fun73760
                        }
                    case 233:
                        var10 = var11.body;
                    case 238:
                        var8 = var10;
                    case 241: // try_end0
                        _fun73760_ip = 297;
                        continue _fun73760;
                    case 243:
                        return var3;
                    case 246: // catch_target0
                        CatchBlockStart(arg_register = 11);
                        var10 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var3 = 9;
                        var3 = var12[var3];
                        var3 = var10.bind(var1)(var3);
                        var3 = var3.APIError;
                        var10 = var3.prototype;
                        var10 = Object.create(var10, {
                            constructor: {
                                value: var3
                            }
                        });
                        var19 = var10;
                        var18 = var11;
                        var3 = new var19[var3](var18, var17);
                        var7 = var3 instanceof Object ? var3 : var10;
                    case 297:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var4];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var10 = 'RECEIVE_CHANNEL_SUMMARY';
                        var2.type = var10;
                        var2.channelId = var9;
                        var2.summary = var8;
                        var2.error = var7;
                        var2.requestedAt = var6;
                        var6 = var5.Date;
                        var5 = var6.now;
                        var5 = var5.bind(var6)();
                        var2.receivedAt = var5;
                        var2 = var3.bind(var4)(var2);
                    case 374:
                        return var1;
                    case 377:
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
    var12 = function() {
        var0 = undefined;
        var3 = _closure1_slot14;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun73764: for (var _fun73764_ip = 0;;) switch (_fun73764_ip) {
                    case 0:
                        StartGenerator();
                        var9 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun73764_ip = 490;
                            continue _fun73764
                        }
                    case 13:
                        var10 = var9;
                        var1 = undefined;
                        var11 = undefined;
                        var7 = undefined;
                        var12 = undefined;
                        var6 = undefined;
                        var8 = undefined;
                        var3 = undefined;
                        var5 = _closure1_slot7;
                        var4 = var5.shouldFetch;
                        var4 = var4.bind(var5)(var9);
                        if (!var4) {
                            _fun73764_ip = 487;
                            continue _fun73764
                        }
                    case 54:
                        var5 = global;
                        var9 = var5.Date;
                        var4 = var9.now;
                        var15 = var4.bind(var9)();
                        var6 = var15;
                        var13 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var4 = 7;
                        var9 = var9[var4];
                        var14 = var13.bind(var1)(var9);
                        var13 = var14.dispatch;
                        var9 = {};
                        var16 = 'REQUEST_CHANNEL_SUMMARIES';
                        var9.type = var16;
                        var16 = var10;
                        var9.channelId = var16;
                        var9.requestedAt = var15;
                        var9 = var13.bind(var14)(var9);
                        var8 = undefined;
                        var3 = undefined;
                    case 132: // try_start_0
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var9 = 8;
                        var9 = var14[var9];
                        var9 = var13.bind(var1)(var9);
                        var14 = var9.HTTP;
                        var13 = var14.get;
                        var9 = {};
                        var17 = _closure1_slot8;
                        var16 = var17.CHANNEL_SUMMARIES;
                        var15 = var10;
                        var15 = var16.bind(var17)(var15);
                        var9.url = var15;
                        var15 = false;
                        var9.rejectWithError = var15;
                        var9 = var13.bind(var14)(var9);
                        SaveGenerator(address = 201);
                    case 199:
                        return var9;
                    case 201:
                        ResumeGenerator(result_out_reg = 9, return_bool_out_reg = 13);
                        if (var13) {
                            _fun73764_ip = 212;
                            continue _fun73764
                        }
                    case 207:
                        var3 = var9;
                    case 210: // try_end0
                        _fun73764_ip = 266;
                        continue _fun73764;
                    case 212:
                        return var9;
                    case 215: // catch_target0
                        CatchBlockStart(arg_register = 14);
                        var13 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var9 = 9;
                        var9 = var15[var9];
                        var9 = var13.bind(var1)(var9);
                        var9 = var9.APIError;
                        var13 = var9.prototype;
                        var13 = Object.create(var13, {
                            constructor: {
                                value: var9
                            }
                        });
                        var20 = var13;
                        var19 = var14;
                        var9 = new var20[var9](var19, var18);
                        var8 = var9 instanceof Object ? var9 : var13;
                    case 266:
                        var13 = var3;
                        var11 = var13;
                        var9 = null;
                        var14 = var9 == var13;
                        var13 = undefined;
                        if (var14) {
                            _fun73764_ip = 309;
                            continue _fun73764
                        }
                    case 283:
                        var14 = var11;
                        var14 = var14.body;
                        var11 = var14;
                        var14 = var9 == var14;
                        var13 = undefined;
                        if (var14) {
                            _fun73764_ip = 309;
                            continue _fun73764
                        }
                    case 303:
                        var13 = var11.summaries;
                    case 309:
                        var11 = var5.Array;
                        var11 = var13 instanceof var11;
                        if (var11) {
                            _fun73764_ip = 357;
                            continue _fun73764
                        }
                    case 322:
                        var12 = var3;
                        var13 = var9 == var3;
                        var11 = undefined;
                        if (var13) {
                            _fun73764_ip = 339;
                            continue _fun73764
                        }
                    case 334:
                        var11 = var12.body;
                    case 339:
                        var7 = var11;
                        if (!(var9 == var11)) {
                            _fun73764_ip = 352;
                            continue _fun73764
                        }
                    case 346:
                        var13 = new Array(0);
                        _fun73764_ip = 355;
                        continue _fun73764;
                    case 352:
                        var13 = var7;
                    case 355:
                        _fun73764_ip = 368;
                        continue _fun73764;
                    case 357:
                        var3 = var3.body;
                        var13 = var3.summaries;
                    case 368:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var7 = 10;
                        var7 = var2[var7];
                        var12 = var3.bind(var1)(var7);
                        var11 = var12.takeRight;
                        var7 = 75;
                        var7 = var11.bind(var12)(var13, var7);
                        var2 = var2[var4];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var11 = 'RECEIVE_CHANNEL_SUMMARIES';
                        var2.type = var11;
                        var2.channelId = var10;
                        var2.summaries = var7;
                        var7 = var8;
                        var9 = var9 != var7;
                        var7 = undefined;
                        if (!var9) {
                            _fun73764_ip = 453;
                            continue _fun73764
                        }
                    case 450:
                        var7 = var8;
                    case 453:
                        var2.error = var7;
                        var2.requestedAt = var6;
                        var6 = var5.Date;
                        var5 = var6.now;
                        var5 = var5.bind(var6)();
                        var2.receivedAt = var5;
                        var2 = var3.bind(var4)(var2);
                    case 487:
                        return var1;
                    case 490:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot14 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot14 = var0;
    var11 = function arg0, arg1() {
        _fun73765: for (var _fun73765_ip = 0;;) switch (_fun73765_ip) {
            case 0:
                var5 = arg1;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var4 = 'SET_HIGHLIGHTED_SUMMARY';
                var1.type = var4;
                var4 = arg0;
                var1.channelId = var4;
                var4 = null;
                var6 = var4 != var5;
                if (!var6) {
                    _fun73765_ip = 64;
                    continue _fun73765
                }
            case 61:
                var4 = var5;
            case 64:
                var1.summaryId = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var10 = function arg0, arg1() {
        _fun73766: for (var _fun73766_ip = 0;;) switch (_fun73766_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var4 = null;
                var0 = var4 != var6;
                if (!var0) {
                    _fun73766_ip = 19;
                    continue _fun73766
                }
            case 15:
                var0 = var4 != var5;
            case 19:
                if (!var0) {
                    _fun73766_ip = 37;
                    continue _fun73766
                }
            case 22:
                var1 = _closure1_slot12;
                var0 = undefined;
                var0 = var1.bind(var0)(var6, var5);
            case 37:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var7 = 'SET_SELECTED_SUMMARY';
                var1.type = var7;
                var1.channelId = var6;
                var6 = var4 != var5;
                var4 = null;
                if (!var6) {
                    _fun73766_ip = 95;
                    continue _fun73766
                }
            case 92:
                var4 = var5;
            case 95:
                var1.summaryId = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var9 = function arg0, arg1() {
        _fun73767: for (var _fun73767_ip = 0;;) switch (_fun73767_ip) {
            case 0:
                var7 = arg0;
                var5 = arg1;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var4 = 'UPDATE_VISIBLE_MESSAGES';
                var1.type = var4;
                var4 = null;
                var8 = var4 != var7;
                var6 = null;
                if (!var8) {
                    _fun73767_ip = 62;
                    continue _fun73767
                }
            case 59:
                var6 = var7;
            case 62:
                var1.topVisibleMessage = var6;
                var6 = var4 != var5;
                var4 = null;
                if (!var6) {
                    _fun73767_ip = 79;
                    continue _fun73767
                }
            case 76:
                var4 = var5;
            case 79:
                var1.bottomVisibleMessage = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var0 = function arg0, arg1() {
        _fun73768: for (var _fun73768_ip = 0;;) switch (_fun73768_ip) {
            case 0:
                var1 = arg0;
                var4 = arg1;
                var2 = _closure1_slot10;
                var3 = var2[var1];
                var2 = null;
                if (!(var2 == var3)) {
                    _fun73768_ip = 33;
                    continue _fun73768
                }
            case 23:
                var5 = _closure1_slot10;
                var3 = 0;
                var5[var1] = var3;
            case 33:
                if (!(var2 !== var4)) {
                    _fun73768_ip = 55;
                    continue _fun73768
                }
            case 37:
                var3 = _closure1_slot10;
                var2 = var3[var1];
                var2 = var2 + var4;
                var3[var1] = var2;
                _fun73768_ip = 65;
                continue _fun73768;
            case 55:
                var3 = _closure1_slot10;
                var2 = 0;
                var3[var1] = var2;
            case 65:
                var0 = _closure1_slot10;
                var0 = var0[var1];
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var7 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'SET_SUMMARY_FEEDBACK';
        var1.type = var4;
        var4 = arg0;
        var1.summary = var4;
        var4 = arg1;
        var1.rating = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var6 = function() {
        var0 = undefined;
        var3 = _closure1_slot17;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot16 = var6;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun73773: for (var _fun73773_ip = 0;;) switch (_fun73773_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun73773_ip = 386;
                            continue _fun73773
                        }
                    case 10:
                        var1 = undefined;
                        var3 = undefined;
                        var6 = undefined;
                        var8 = undefined;
                        var7 = undefined;
                        var5 = _closure1_slot7;
                        var4 = var5.shouldFetchChannelAffinities;
                        var4 = var4.bind(var5)();
                        var5 = global;
                        if (var4) {
                            _fun73773_ip = 66;
                            continue _fun73773
                        }
                    case 44:
                        var10 = var5.Promise;
                        var9 = var10.resolve;
                        var4 = null;
                        var4 = var9.bind(var10)(var4);
                        return var4;
                    case 66:
                        var9 = var5.Date;
                        var4 = var9.now;
                        var12 = var4.bind(var9)();
                        var6 = var12;
                        var10 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var4 = 7;
                        var9 = var9[var4];
                        var11 = var10.bind(var1)(var9);
                        var10 = var11.dispatch;
                        var9 = {};
                        var13 = 'REQUEST_CHANNEL_AFFINITIES';
                        var9.type = var13;
                        var9.requestedAt = var12;
                        var9 = var10.bind(var11)(var9);
                        var8 = undefined;
                        var7 = undefined;
                    case 135: // try_start_0
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var9 = 8;
                        var9 = var11[var9];
                        var9 = var10.bind(var1)(var9);
                        var11 = var9.HTTP;
                        var10 = var11.get;
                        var9 = {
                            'url': '/users/@me/affinities/channels',
                            'rejectWithError': false
                        };
                        var9 = var10.bind(var11)(var9);
                        SaveGenerator(address = 188);
                    case 186:
                        return var9;
                    case 188:
                        ResumeGenerator(result_out_reg = 9, return_bool_out_reg = 10);
                        if (var10) {
                            _fun73773_ip = 199;
                            continue _fun73773
                        }
                    case 194:
                        var7 = var9;
                    case 197: // try_end0
                        _fun73773_ip = 253;
                        continue _fun73773;
                    case 199:
                        return var9;
                    case 202: // catch_target0
                        CatchBlockStart(arg_register = 11);
                        var10 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var9 = 9;
                        var9 = var12[var9];
                        var9 = var10.bind(var1)(var9);
                        var9 = var9.APIError;
                        var10 = var9.prototype;
                        var10 = Object.create(var10, {
                            constructor: {
                                value: var9
                            }
                        });
                        var15 = var10;
                        var14 = var11;
                        var9 = new var15[var9](var14, var13);
                        var8 = var9 instanceof Object ? var9 : var10;
                    case 253:
                        var3 = var7;
                        var9 = null;
                        var10 = var9 == var7;
                        var7 = undefined;
                        if (var10) {
                            _fun73773_ip = 295;
                            continue _fun73773
                        }
                    case 267:
                        var10 = var3;
                        var10 = var10.body;
                        var3 = var10;
                        var10 = var9 == var10;
                        var7 = undefined;
                        if (var10) {
                            _fun73773_ip = 295;
                            continue _fun73773
                        }
                    case 287:
                        var7 = var3.channel_affinities;
                    case 295:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var4];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var10 = 'RECEIVE_CHANNEL_AFFINITIES';
                        var2.type = var10;
                        var2.affinities = var7;
                        var7 = var8;
                        var9 = var9 != var7;
                        var7 = undefined;
                        if (!var9) {
                            _fun73773_ip = 349;
                            continue _fun73773
                        }
                    case 346:
                        var7 = var8;
                    case 349:
                        var2.error = var7;
                        var2.requestedAt = var6;
                        var6 = var5.Date;
                        var5 = var6.now;
                        var5 = var5.bind(var6)();
                        var2.receivedAt = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    case 386:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot17 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot17 = var0;
    var5 = function() {
        var0 = undefined;
        var3 = _closure1_slot19;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot18 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun73777: for (var _fun73777_ip = 0;;) switch (_fun73777_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arguments[1];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun73777_ip = 555;
                            continue _fun73777
                        }
                    case 15:
                        var10 = arg0;
                        var3 = undefined;
                        if (!(var1 === var3)) {
                            _fun73777_ip = 26;
                            continue _fun73777
                        }
                    case 24:
                        var1 = {};
                    case 26:
                        var18 = var1.useQuickSwitcher;
                        if (!(var18 === var3)) {
                            _fun73777_ip = 40;
                            continue _fun73777
                        }
                    case 38:
                        var18 = true;
                    case 40:
                        var17 = var1.useChannelAffinities;
                        if (!(var17 === var3)) {
                            _fun73777_ip = 54;
                            continue _fun73777
                        }
                    case 52:
                        var17 = true;
                    case 54:
                        var6 = undefined;
                        var11 = undefined;
                        var8 = undefined;
                        var9 = undefined;
                        SaveGenerator(address = 66);
                    case 64:
                        return var3;
                    case 66:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun73777_ip = 552;
                            continue _fun73777
                        }
                    case 75:
                        var2 = var10;
                        var4 = null;
                        if (!(var4 == var2)) {
                            _fun73777_ip = 90;
                            continue _fun73777
                        }
                    case 84:
                        var14 = new Array(0);
                        _fun73777_ip = 93;
                        continue _fun73777;
                    case 90:
                        var14 = var10;
                    case 93:
                        var10 = var14;
                        var2 = global;
                        var12 = var2.Date;
                        var5 = var12.now;
                        var11 = var5.bind(var12)();
                        var13 = var14.concat;
                        var16 = _closure1_slot7;
                        var15 = var16.defaultChannelIds;
                        var12 = {};
                        var12.withQuickSwitcher = var18;
                        var12.withChannelAffinities = var17;
                        var12 = var15.bind(var16)(var12);
                        var14 = var13.bind(var14)(var12);
                        var13 = var14.filter;
                        var12 = function(arg0) { // Environment: var7
                            var3 = _closure1_slot6;
                            var2 = var3.getChannel;
                            var1 = arg0;
                            var4 = var2.bind(var3)(var1);
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 11;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.canSeeChannelSummaries;
                            var1 = false;
                            var0 = true;
                            var0 = var2.bind(var3)(var4, var1, var0);
                            return var0;
                        };
                        var13 = var13.bind(var14)(var12);
                        var12 = var13.filter;
                        var7 = function(arg0) { // Environment: var7
                            _fun73779: for (var _fun73779_ip = 0;;) switch (_fun73779_ip) {
                                case 0:
                                    var0 = global;
                                    var1 = var0.Date;
                                    var0 = var1.now;
                                    var3 = var0.bind(var1)();
                                    var4 = _closure1_slot7;
                                    var2 = var4.status;
                                    var0 = arg0;
                                    var4 = var2.bind(var4)(var0);
                                    var0 = null;
                                    if (!(var0 != var4)) {
                                        _fun73779_ip = 52;
                                        continue _fun73779
                                    }
                                case 43:
                                    var2 = var4.fetching;
                                    if (var2) {
                                        _fun73779_ip = 88;
                                        continue _fun73779
                                    }
                                case 52:
                                    var5 = var0 == var4;
                                    var2 = undefined;
                                    if (var5) {
                                        _fun73779_ip = 67;
                                        continue _fun73779
                                    }
                                case 61:
                                    var2 = var4.lastReceivedAt;
                                case 67:
                                    var0 = var0 == var2;
                                    if (var0) {
                                        _fun73779_ip = 86;
                                        continue _fun73779
                                    }
                                case 74:
                                    var2 = var3 - var2;
                                    var1 = _closure1_slot9;
                                    var0 = var2 > var1;
                                case 86:
                                    return var0;
                                case 88:
                                    var0 = false;
                                    return var0;
                            }
                        };
                        var14 = var12.bind(var13)(var7);
                        var13 = var14.slice;
                        var12 = 0;
                        var7 = 50;
                        var7 = var13.bind(var14)(var12, var7);
                        var10 = var7;
                        var7 = var7.length;
                        if (!(var12 !== var7)) {
                            _fun73777_ip = 532;
                            continue _fun73777
                        }
                    case 218:
                        var13 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var7 = 7;
                        var12 = var12[var7];
                        var14 = var13.bind(var3)(var12);
                        var13 = var14.dispatch;
                        var12 = {};
                        var15 = 'REQUEST_CHANNEL_SUMMARIES_BULK';
                        var12.type = var15;
                        var15 = var10;
                        var12.channelIds = var15;
                        var15 = var11;
                        var12.requestedAt = var15;
                        var12 = var13.bind(var14)(var12);
                        var8 = undefined;
                        var9 = undefined;
                    case 280: // try_start_0
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var12 = 8;
                        var12 = var14[var12];
                        var12 = var13.bind(var3)(var12);
                        var14 = var12.HTTP;
                        var13 = var14.post;
                        var12 = {};
                        var15 = _closure1_slot8;
                        var15 = var15.USER_SUMMARIES;
                        var12.url = var15;
                        var15 = {};
                        var16 = var10;
                        var15.channel_ids = var16;
                        var12.body = var15;
                        var15 = false;
                        var12.rejectWithError = var15;
                        var12 = var13.bind(var14)(var12);
                        SaveGenerator(address = 356);
                    case 354:
                        return var12;
                    case 356:
                        ResumeGenerator(result_out_reg = 12, return_bool_out_reg = 13);
                        if (var13) {
                            _fun73777_ip = 367;
                            continue _fun73777
                        }
                    case 362:
                        var9 = var12;
                    case 365: // try_end0
                        _fun73777_ip = 421;
                        continue _fun73777;
                    case 367:
                        return var12;
                    case 370: // catch_target0
                        CatchBlockStart(arg_register = 14);
                        var13 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var12 = 9;
                        var12 = var15[var12];
                        var12 = var13.bind(var3)(var12);
                        var12 = var12.APIError;
                        var13 = var12.prototype;
                        var13 = Object.create(var13, {
                            constructor: {
                                value: var12
                            }
                        });
                        var21 = var13;
                        var20 = var14;
                        var12 = new var21[var12](var20, var19);
                        var8 = var12 instanceof Object ? var12 : var13;
                    case 421:
                        var6 = var9;
                        var12 = var4 == var9;
                        var9 = undefined;
                        if (var12) {
                            _fun73777_ip = 444;
                            continue _fun73777
                        }
                    case 433:
                        var6 = var6.body;
                        var9 = var6.summaries;
                    case 444:
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var5 = var5[var7];
                        var7 = var6.bind(var3)(var5);
                        var6 = var7.dispatch;
                        var5 = {};
                        var12 = 'RECEIVE_CHANNEL_SUMMARIES_BULK';
                        var5.type = var12;
                        var5.requestedAt = var11;
                        var12 = var2.Date;
                        var11 = var12.now;
                        var11 = var11.bind(var12)();
                        var5.receivedAt = var11;
                        var5.summaries = var9;
                        var9 = {};
                        var9.channelIds = var10;
                        var5.requestArgs = var9;
                        var5.error = var8;
                        var5 = var6.bind(var7)(var5);
                        return var3;
                    case 532:
                        var3 = var2.Promise;
                        var2 = var3.resolve;
                        var2 = var2.bind(var3)(var4);
                        return var2;
                    case 552:
                        return var1;
                    case 555:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot19 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot19 = var0;
    var4 = function() {
        _fun73780: for (var _fun73780_ip = 0;;) switch (_fun73780_ip) {
            case 0:
                var3 = arguments[0];
                var0 = undefined;
                if (!(var3 === var0)) {
                    _fun73780_ip = 15;
                    continue _fun73780
                }
            case 11:
                var3 = new Array(0);
            case 15:
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var0;
                var _closure2_slot2 = var0;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 12;
                var4 = var6[var4];
                var7 = var5.bind(var0)(var4);
                var6 = var7.useStateFromStores;
                var4 = _closure1_slot5;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() { // Environment: var1
                    var1 = _closure1_slot5;
                    var0 = var1.isConnected;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var5 = var6.bind(var7)(var5, var4);
                _closure2_slot1 = var5;
                var7 = _closure1_slot4;
                var6 = var7.useMemo;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = function() { // Environment: var1
                    var2 = _closure2_slot0;
                    var1 = var2.join;
                    var0 = ',';
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var6.bind(var7)(var3, var4);
                _closure2_slot2 = var6;
                var4 = _closure1_slot4;
                var3 = var4.useEffect;
                var2 = new Array(2);
                var2[0] = var6;
                var2[1] = var5;
                var1 = function() { // Environment: var1
                    _fun73783: for (var _fun73783_ip = 0;;) switch (_fun73783_ip) {
                        case 0:
                            var1 = function() {
                                var3 = undefined;
                                var0 = undefined;
                                var2 = _closure1_slot3;
                                var1 = function*() { // Environment: var1
                                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                                        _fun73786: for (var _fun73786_ip = 0;;) switch (_fun73786_ip) {
                                            case 0:
                                                StartGenerator();
                                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                if (var1) {
                                                    _fun73786_ip = 88;
                                                    continue _fun73786
                                                }
                                            case 7: // try_start_0
                                                var2 = _closure1_slot16;
                                                var1 = undefined;
                                                var1 = var2.bind(var1)();
                                                SaveGenerator(address = 24);
                                            case 22:
                                                return var1;
                                            case 24:
                                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                                if (var2) {
                                                    _fun73786_ip = 32;
                                                    continue _fun73786
                                                }
                                            case 30: // try_end0
                                                _fun73786_ip = 37;
                                                continue _fun73786;
                                            case 32:
                                                return var1;
                                            case 35: // catch_target0
                                                CatchBlockStart(arg_register = 1);
                                            case 37:
                                                var3 = _closure1_slot18;
                                                var4 = _closure2_slot2;
                                                var2 = var4.split;
                                                var1 = ',';
                                                var1 = var2.bind(var4)(var1);
                                                var2 = undefined;
                                                var1 = var3.bind(var2)(var1);
                                                SaveGenerator(address = 76);
                                            case 74:
                                                return var1;
                                            case 76:
                                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                                if (var3) {
                                                    _fun73786_ip = 85;
                                                    continue _fun73786
                                                }
                                            case 82:
                                                return var2;
                                            case 85:
                                                return var1;
                                            case 88:
                                                return var0;
                                        }
                                    };
                                    return var0;
                                };
                                var3 = var2.bind(var3)(var1);
                                _closure3_slot0 = var3;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            var _closure3_slot0 = var1;
                            var1 = _closure2_slot1;
                            if (!var1) {
                                _fun73783_ip = 36;
                                continue _fun73783
                            }
                        case 23:
                            var1 = function() {
                                var0 = undefined;
                                var3 = _closure3_slot0;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 36:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var _closure1_slot20 = var4;
    var3 = function arg0() {
        _fun73788: for (var _fun73788_ip = 0;;) switch (_fun73788_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channelIds;
                var3 = undefined;
                if (!(var2 === var3)) {
                    _fun73788_ip = 19;
                    continue _fun73788
                }
            case 15:
                var2 = new Array(0);
            case 19:
                var1 = _closure1_slot20;
                var1 = var1.bind(var3)(var2);
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 12;
                var1 = var4[var1];
                var4 = var2.bind(var3)(var1);
                var3 = var4.useStateFromStoresArray;
                var0 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var0;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot7;
                    var0 = var1.topSummaries;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = new Array(0);
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
        }
    };
    var1 = function arg0() {
        var0 = undefined;
        var3 = _closure1_slot21;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun73793: for (var _fun73793_ip = 0;;) switch (_fun73793_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun73793_ip = 216;
                            continue _fun73793
                        }
                    case 10:
                        var6 = arg0;
                    case 13: // try_start_0
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 8;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var4.bind(var2)(var1);
                        var5 = var1.HTTP;
                        var4 = var5.del;
                        var1 = {};
                        var10 = _closure1_slot8;
                        var9 = var10.CHANNEL_SUMMARY;
                        var7 = var6;
                        var8 = var7.channelId;
                        var7 = var7.id;
                        var7 = var9.bind(var10)(var8, var7);
                        var1.url = var7;
                        var7 = false;
                        var1.rejectWithError = var7;
                        var1 = var4.bind(var5)(var1);
                        SaveGenerator(address = 99);
                    case 97:
                        return var1;
                    case 99:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun73793_ip = 155;
                            continue _fun73793
                        }
                    case 105:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 7;
                        var3 = var5[var3];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var7 = 'DELETE_SUMMARY';
                        var3.type = var7;
                        var3.summary = var6;
                        var3 = var4.bind(var5)(var3);
                    case 152: // try_end0
                        return var2;
                    case 155:
                        return var1;
                    case 158: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 9;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var2);
                        var1 = var1.APIError;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var13 = var2;
                        var12 = var3;
                        var1 = new var13[var1](var12, var11);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 216:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot21 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot21 = var0;
    var0 = global;
    var19 = var0.Object;
    var18 = var19.defineProperty;
    var14 = {};
    var0 = true;
    var14.value = var0;
    var0 = '__esModule';
    var0 = var18.bind(var19)(var2, var0, var14);
    var0 = 0;
    var14 = var17[var0];
    var0 = undefined;
    var14 = var15.bind(var0)(var14);
    var _closure1_slot3 = var14;
    var14 = 1;
    var18 = var17[var14];
    var14 = arg3;
    var14 = var14.bind(var0)(var18);
    var _closure1_slot4 = var14;
    var14 = 2;
    var14 = var17[var14];
    var14 = var15.bind(var0)(var14);
    var _closure1_slot5 = var14;
    var14 = 3;
    var14 = var17[var14];
    var14 = var15.bind(var0)(var14);
    var _closure1_slot6 = var14;
    var14 = 4;
    var14 = var17[var14];
    var14 = var15.bind(var0)(var14);
    var _closure1_slot7 = var14;
    var14 = 5;
    var14 = var17[var14];
    var14 = var16.bind(var0)(var14);
    var14 = var14.Routes;
    var _closure1_slot8 = var14;
    var14 = 6;
    var14 = var17[var14];
    var14 = var15.bind(var0)(var14);
    var14 = var14.Millis;
    var15 = var14.SECOND;
    var14 = 30;
    var14 = var14 * var15;
    var _closure1_slot9 = var14;
    var14 = {};
    var _closure1_slot10 = var14;
    var14 = {};
    var _closure1_slot11 = var14;
    var14 = {};
    var14.setSummaryFeedback = var7;
    var14.updateVisibleMessages = var9;
    var14.setSelectedSummary = var10;
    var14.setHighlightedSummary = var11;
    var14.fetchSummaries = var12;
    var14.fetchSummariesBulk = var5;
    var14.useChannelSummaries = var3;
    var14.deleteSummary = var1;
    var15 = 13;
    var15 = var17[var15];
    var17 = var16.bind(var0)(var15);
    var16 = var17.fileFinishedImporting;
    var15 = 'modules/summaries/SummaryActionCreators.tsx';
    var15 = var16.bind(var17)(var15);
    var2.default = var14;
    var2.fetchSummary = var13;
    var2.fetchSummaries = var12;
    var2.setHighlightedSummary = var11;
    var11 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'TOGGLE_TOPICS_BAR';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.toggleTopicsBar = var11;
    var2.setSelectedSummary = var10;
    var2.updateVisibleMessages = var9;
    var8 = function arg0() {
        _fun73795: for (var _fun73795_ip = 0;;) switch (_fun73795_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot15;
                var0 = undefined;
                var2 = -1;
                var2 = var4.bind(var0)(var3, var2);
                var4 = 0;
                if (!(var2 <= var4)) {
                    _fun73795_ip = 61;
                    continue _fun73795
                }
            case 30:
                var2 = _closure1_slot15;
                var2 = var2.bind(var0)(var3, var4);
                var2 = global;
                var2 = var2.clearInterval;
                var1 = _closure1_slot11;
                var1 = var1[var3];
                var1 = var2.bind(var0)(var1);
            case 61:
                return var0;
        }
    };
    var2.stopPolling = var8;
    var2.setSummaryFeedback = var7;
    var2.fetchChannelAffinities = var6;
    var2.fetchSummariesBulk = var5;
    var2.useMaybeFetchChannelAffinitiesAndSummaries = var4;
    var2.useChannelSummaries = var3;
    var2.deleteSummary = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 3476, 1372, 9285, 660, 667, 806, 507, 3352, 22, 9287, 632, 2]);