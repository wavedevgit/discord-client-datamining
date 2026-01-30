// modules/message_request/hooks/useMessageRequestActions.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun91204: for (var _fun91204_ip = 0;;) switch (_fun91204_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun91204_ip = 45;
                    continue _fun91204
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun91204_ip = 54;
                    continue _fun91204
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun91204_ip = 344;
                    continue _fun91204
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun91204_ip = 322;
                    continue _fun91204
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun91204_ip = 282;
                    continue _fun91204
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun91204_ip = 269;
                    continue _fun91204
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
                    _fun91204_ip = 162;
                    continue _fun91204
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun91204_ip = 178;
                    continue _fun91204
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun91204_ip = 248;
                    continue _fun91204
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun91204_ip = 248;
                    continue _fun91204
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun91204_ip = 233;
                    continue _fun91204
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun91204_ip = 246;
                    continue _fun91204
                }
            case 233:
                var8 = _closure1_slot11;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun91204_ip = 264;
                continue _fun91204;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun91204_ip = 282;
                continue _fun91204;
            case 269:
                var6 = _closure1_slot11;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun91204_ip = 322;
                    continue _fun91204
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
                    _fun91204_ip = 329;
                    continue _fun91204
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun91205: for (var _fun91205_ip = 0;;) switch (_fun91205_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun91205_ip = 56;
                                continue _fun91205
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
                            _fun91205_ip = 67;
                            continue _fun91205;
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
            case 344:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun91206: for (var _fun91206_ip = 0;;) switch (_fun91206_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun91206_ip = 23;
                    continue _fun91206
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun91206_ip = 33;
                    continue _fun91206
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
                    _fun91206_ip = 70;
                    continue _fun91206
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun91206_ip = 55;
                    continue _fun91206
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
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
    var7 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.MessageRequestAnalyticsAction;
    var _closure1_slot7 = var6;
    var3 = var3.BATCH_REJECT_LIMIT;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot9 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/message_request/hooks/useMessageRequestActions.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useMessageRequestActions, environment: var1
        _fun91207: for (var _fun91207_ip = 0;;) switch (_fun91207_ip) {
            case 0:
                var1 = arg0;
                var14 = var1.user;
                var _closure2_slot0 = var14;
                var9 = var1.onAcceptSuccess;
                var _closure2_slot1 = var9;
                var17 = var1.onRejectSuccess;
                var _closure2_slot2 = var17;
                var16 = var1.onError;
                var _closure2_slot3 = var16;
                var10 = undefined;
                var _closure2_slot9 = var10;
                var _closure2_slot10 = var10;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 6;
                var1 = var3[var1];
                var1 = var2.bind(var10)(var1);
                var11 = var1.bind(var10)();
                var18 = _closure1_slot5;
                var1 = var18.useState;
                var15 = false;
                var1 = var1.bind(var18)(var15);
                var13 = _closure1_slot4;
                var12 = 2;
                var2 = var13.bind(var10)(var1, var12);
                var1 = 0;
                var5 = var2[var1];
                var8 = 1;
                var2 = var2[var8];
                var _closure2_slot4 = var2;
                var2 = var18.useState;
                var2 = var2.bind(var18)(var15);
                var2 = var13.bind(var10)(var2, var12);
                var4 = var2[var1];
                var2 = var2[var8];
                var _closure2_slot5 = var2;
                var2 = var18.useState;
                var2 = var2.bind(var18)(var15);
                var2 = var13.bind(var10)(var2, var12);
                var3 = var2[var1];
                var2 = var2[var8];
                var _closure2_slot6 = var2;
                var2 = var18.useState;
                var2 = var2.bind(var18)(var15);
                var7 = var13.bind(var10)(var2, var12);
                var2 = var7[var1];
                var7 = var7[var8];
                var _closure2_slot7 = var7;
                var7 = var18.useState;
                var7 = var7.bind(var18)(var15);
                var7 = var13.bind(var10)(var7, var12);
                var1 = var7[var1];
                var7 = var7[var8];
                var _closure2_slot8 = var7;
                var15 = var5;
                if (var15) {
                    _fun91207_ip = 248;
                    continue _fun91207
                }
            case 245:
                var15 = var4;
            case 248:
                if (var15) {
                    _fun91207_ip = 254;
                    continue _fun91207
                }
            case 251:
                var15 = var3;
            case 254:
                _closure2_slot9 = var15;
                var13 = _closure1_slot5;
                var8 = var13.useCallback;
                var6 = function() { // Environment: var0
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*(arg0) { // Environment: var0
                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                            _fun91210: for (var _fun91210_ip = 0;;) switch (_fun91210_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun91210_ip = 232;
                                        continue _fun91210
                                    }
                                case 10:
                                    var4 = arg0;
                                    var1 = undefined;
                                    var2 = undefined;
                                    var5 = _closure2_slot9;
                                    if (var5) {
                                        _fun91210_ip = 229;
                                        continue _fun91210
                                    }
                                case 30:
                                    var5 = _closure2_slot4;
                                    var6 = true;
                                    var5 = var5.bind(var1)(var6);
                                case 41: // try_start_0 // try_start_1
                                    var7 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var5 = 7;
                                    var5 = var8[var5];
                                    var7 = var7.bind(var1)(var5);
                                    var5 = var7.acceptMessageRequest;
                                    var4 = var5.bind(var7)(var4);
                                    SaveGenerator(address = 79);
                                case 77:
                                    return var4;
                                case 79:
                                    ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 5);
                                    if (var5) {
                                        _fun91210_ip = 114;
                                        continue _fun91210
                                    }
                                case 85:
                                    var5 = _closure2_slot7;
                                    var5 = var5.bind(var1)(var6);
                                    var6 = _closure2_slot1;
                                    var5 = null;
                                    if (!(var5 != var6)) {
                                        _fun91210_ip = 112;
                                        continue _fun91210
                                    }
                                case 104:
                                    var5 = _closure2_slot1;
                                    var5 = var5.bind(var1)();
                                case 112: // try_end0
                                    _fun91210_ip = 201;
                                    continue _fun91210;
                                case 114: // try_end1
                                    var6 = _closure2_slot4;
                                    var5 = false;
                                    var5 = var6.bind(var1)(var5);
                                    return var4;
                                case 128: // try_start_2 // catch_target0
                                    CatchBlockStart(arg_register = 6);
                                    var5 = _closure1_slot0;
                                    var7 = _closure1_slot2;
                                    var4 = 8;
                                    var4 = var7[var4];
                                    var4 = var5.bind(var1)(var4);
                                    var4 = var4.APIError;
                                    var5 = var4.prototype;
                                    var5 = Object.create(var5, {
                                        constructor: {
                                            value: var4
                                        }
                                    });
                                    var10 = var5;
                                    var9 = var6;
                                    var4 = new var10[var4](var9, var8);
                                    var2 = var4 instanceof Object ? var4 : var5;
                                    var5 = _closure2_slot3;
                                    var4 = null;
                                    if (!(var4 != var5)) {
                                        _fun91210_ip = 201;
                                        continue _fun91210
                                    }
                                case 192:
                                    var4 = _closure2_slot3;
                                    var2 = var4.bind(var1)(var2);
                                case 201: // try_end2
                                    var4 = _closure2_slot4;
                                    var2 = false;
                                    var2 = var4.bind(var1)(var2);
                                    _fun91210_ip = 229;
                                    continue _fun91210;
                                case 214: // catch_target1 // catch_target2
                                    CatchBlockStart(arg_register = 2);
                                    var4 = _closure2_slot4;
                                    var3 = false;
                                    var3 = var4.bind(var1)(var3);
                                    throw var2;
                                case 229:
                                    return var1;
                                case 232:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    return var0;
                };
                var7 = var6.bind(var10)();
                var6 = new Array(3);
                var6[0] = var15;
                var6[1] = var9;
                var6[2] = var16;
                var9 = var8.bind(var13)(var7, var6);
                _closure2_slot10 = var9;
                var8 = var13.useCallback;
                var6 = function() { // Environment: var0
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*(arg0) { // Environment: var0
                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                            _fun91214: for (var _fun91214_ip = 0;;) switch (_fun91214_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun91214_ip = 232;
                                        continue _fun91214
                                    }
                                case 10:
                                    var4 = arg0;
                                    var1 = undefined;
                                    var2 = undefined;
                                    var5 = _closure2_slot9;
                                    if (var5) {
                                        _fun91214_ip = 229;
                                        continue _fun91214
                                    }
                                case 30:
                                    var5 = _closure2_slot5;
                                    var6 = true;
                                    var5 = var5.bind(var1)(var6);
                                case 41: // try_start_0 // try_start_1
                                    var7 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var5 = 7;
                                    var5 = var8[var5];
                                    var7 = var7.bind(var1)(var5);
                                    var5 = var7.rejectMessageRequest;
                                    var4 = var5.bind(var7)(var4);
                                    SaveGenerator(address = 79);
                                case 77:
                                    return var4;
                                case 79:
                                    ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 5);
                                    if (var5) {
                                        _fun91214_ip = 114;
                                        continue _fun91214
                                    }
                                case 85:
                                    var5 = _closure2_slot8;
                                    var5 = var5.bind(var1)(var6);
                                    var6 = _closure2_slot2;
                                    var5 = null;
                                    if (!(var5 != var6)) {
                                        _fun91214_ip = 112;
                                        continue _fun91214
                                    }
                                case 104:
                                    var5 = _closure2_slot2;
                                    var5 = var5.bind(var1)();
                                case 112: // try_end0
                                    _fun91214_ip = 201;
                                    continue _fun91214;
                                case 114: // try_end1
                                    var6 = _closure2_slot5;
                                    var5 = false;
                                    var5 = var6.bind(var1)(var5);
                                    return var4;
                                case 128: // try_start_2 // catch_target0
                                    CatchBlockStart(arg_register = 6);
                                    var5 = _closure1_slot0;
                                    var7 = _closure1_slot2;
                                    var4 = 8;
                                    var4 = var7[var4];
                                    var4 = var5.bind(var1)(var4);
                                    var4 = var4.APIError;
                                    var5 = var4.prototype;
                                    var5 = Object.create(var5, {
                                        constructor: {
                                            value: var4
                                        }
                                    });
                                    var10 = var5;
                                    var9 = var6;
                                    var4 = new var10[var4](var9, var8);
                                    var2 = var4 instanceof Object ? var4 : var5;
                                    var5 = _closure2_slot3;
                                    var4 = null;
                                    if (!(var4 != var5)) {
                                        _fun91214_ip = 201;
                                        continue _fun91214
                                    }
                                case 192:
                                    var4 = _closure2_slot3;
                                    var2 = var4.bind(var1)(var2);
                                case 201: // try_end2
                                    var4 = _closure2_slot5;
                                    var2 = false;
                                    var2 = var4.bind(var1)(var2);
                                    _fun91214_ip = 229;
                                    continue _fun91214;
                                case 214: // catch_target1 // catch_target2
                                    CatchBlockStart(arg_register = 2);
                                    var4 = _closure2_slot5;
                                    var3 = false;
                                    var3 = var4.bind(var1)(var3);
                                    throw var2;
                                case 229:
                                    return var1;
                                case 232:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    return var0;
                };
                var7 = var6.bind(var10)();
                var6 = new Array(3);
                var6[0] = var15;
                var6[1] = var17;
                var6[2] = var16;
                var8 = var8.bind(var13)(var7, var6);
                var12 = var13.useCallback;
                var6 = function() { // Environment: var0
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*(arg0) { // Environment: var0
                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                            _fun91218: for (var _fun91218_ip = 0;;) switch (_fun91218_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun91218_ip = 323;
                                        continue _fun91218
                                    }
                                case 10:
                                    var7 = arg0;
                                    var1 = undefined;
                                    var5 = undefined;
                                    var9 = undefined;
                                    var10 = undefined;
                                    var2 = undefined;
                                    var4 = _closure2_slot9;
                                    if (var4) {
                                        _fun91218_ip = 320;
                                        continue _fun91218
                                    }
                                case 36:
                                    var4 = _closure2_slot5;
                                    var6 = true;
                                    var4 = var4.bind(var1)(var6);
                                    var11 = _closure1_slot1;
                                    var12 = _closure1_slot2;
                                    var8 = 9;
                                    var8 = var12[var8];
                                    var11 = var11.bind(var1)(var8);
                                    var8 = var7;
                                    var7 = _closure1_slot8;
                                    var5 = var11.bind(var1)(var8, var7);
                                case 83: // try_start_0 // try_start_2
                                    var7 = _closure1_slot10;
                                    var5 = var7.bind(var1)(var5);
                                    var10 = var5;
                                    var5 = var5.bind(var1)();
                                    var9 = var5;
                                    var5 = var5.done;
                                    var8 = 7;
                                    if (var5) {
                                        _fun91218_ip = 193;
                                        continue _fun91218
                                    }
                                case 113:
                                    var5 = var9;
                                    var11 = var5.value;
                                    var7 = _closure1_slot0;
                                    var5 = _closure1_slot2;
                                    var5 = var5[var8];
                                    var7 = var7.bind(var1)(var5);
                                    var5 = var7.rejectMessageRequestBatch;
                                    var5 = var5.bind(var7)(var11);
                                    SaveGenerator(address = 153);
                                case 151:
                                    return var5;
                                case 153:
                                    ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 7);
                                    if (var7) {
                                        _fun91218_ip = 179;
                                        continue _fun91218
                                    }
                                case 159:
                                    var7 = var10;
                                    var7 = var7.bind(var1)();
                                    var9 = var7;
                                    var7 = var7.done;
                                    if (var7) {
                                        _fun91218_ip = 193;
                                        continue _fun91218
                                    }
                                case 177:
                                    _fun91218_ip = 113;
                                    continue _fun91218;
                                case 179: // try_end0 // try_end2
                                    var8 = _closure2_slot5;
                                    var7 = false;
                                    var7 = var8.bind(var1)(var7);
                                    return var5;
                                case 193: // try_start_1 // try_start_3
                                    var5 = _closure2_slot8;
                                    var5 = var5.bind(var1)(var6);
                                    var6 = _closure2_slot2;
                                    var5 = null;
                                    if (!(var5 != var6)) {
                                        _fun91218_ip = 220;
                                        continue _fun91218
                                    }
                                case 212:
                                    var5 = _closure2_slot2;
                                    var5 = var5.bind(var1)();
                                case 220: // try_end1
                                    _fun91218_ip = 292;
                                    continue _fun91218;
                                case 222: // catch_target0 // catch_target1
                                    CatchBlockStart(arg_register = 6);
                                    var5 = _closure1_slot0;
                                    var7 = _closure1_slot2;
                                    var4 = 8;
                                    var4 = var7[var4];
                                    var4 = var5.bind(var1)(var4);
                                    var4 = var4.APIError;
                                    var5 = var4.prototype;
                                    var5 = Object.create(var5, {
                                        constructor: {
                                            value: var4
                                        }
                                    });
                                    var15 = var5;
                                    var14 = var6;
                                    var4 = new var15[var4](var14, var13);
                                    var2 = var4 instanceof Object ? var4 : var5;
                                    var5 = _closure2_slot3;
                                    var4 = null;
                                    if (!(var4 != var5)) {
                                        _fun91218_ip = 292;
                                        continue _fun91218
                                    }
                                case 283:
                                    var4 = _closure2_slot3;
                                    var2 = var4.bind(var1)(var2);
                                case 292: // try_end3
                                    var4 = _closure2_slot5;
                                    var2 = false;
                                    var2 = var4.bind(var1)(var2);
                                    _fun91218_ip = 320;
                                    continue _fun91218;
                                case 305: // catch_target2 // catch_target3
                                    CatchBlockStart(arg_register = 2);
                                    var4 = _closure2_slot5;
                                    var3 = false;
                                    var3 = var4.bind(var1)(var3);
                                    throw var2;
                                case 320:
                                    return var1;
                                case 323:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    return var0;
                };
                var7 = var6.bind(var10)();
                var6 = new Array(3);
                var6[0] = var15;
                var6[1] = var17;
                var6[2] = var16;
                var7 = var12.bind(var13)(var7, var6);
                var12 = var13.useCallback;
                var6 = function() { // Environment: var0
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*(arg0) { // Environment: var0
                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                            _fun91222: for (var _fun91222_ip = 0;;) switch (_fun91222_ip) {
                                case 0:
                                    StartGenerator();
                                    var8 = arg0;
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun91222_ip = 285;
                                        continue _fun91222
                                    }
                                case 15:
                                    var _closure5_slot0 = var8;
                                    var1 = _closure2_slot9;
                                    if (var1) {
                                        _fun91222_ip = 280;
                                        continue _fun91222
                                    }
                                case 32:
                                    var1 = _closure2_slot0;
                                    var4 = null;
                                    if (!(var4 != var1)) {
                                        _fun91222_ip = 193;
                                        continue _fun91222
                                    }
                                case 45:
                                    var7 = _closure1_slot6;
                                    var5 = var7.getMutualGuilds;
                                    var3 = _closure2_slot0;
                                    var3 = var3.id;
                                    var3 = var5.bind(var7)(var3);
                                    if (!(var4 == var3)) {
                                        _fun91222_ip = 193;
                                        continue _fun91222
                                    }
                                case 76:
                                    var5 = _closure2_slot6;
                                    var4 = undefined;
                                    var3 = true;
                                    var3 = var5.bind(var4)(var3);
                                case 89: // try_start_0 // try_start_1
                                    var3 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var1 = 10;
                                    var1 = var5[var1];
                                    var7 = var3.bind(var4)(var1);
                                    var9 = _closure2_slot0;
                                    var5 = var9.id;
                                    var3 = var9.getAvatarURL;
                                    var1 = 80;
                                    var3 = var3.bind(var9)(var4, var1);
                                    var1 = {
                                        'withMutualGuilds': true,
                                        'withMutualFriendsCount': true
                                    };
                                    var1 = var7.bind(var4)(var5, var3, var1);
                                    SaveGenerator(address = 158);
                                case 156:
                                    return var1;
                                case 158:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun91222_ip = 166;
                                        continue _fun91222
                                    }
                                case 164: // try_end0
                                    _fun91222_ip = 182;
                                    continue _fun91222;
                                case 166: // try_end1
                                    var5 = _closure2_slot6;
                                    var3 = false;
                                    var3 = var5.bind(var4)(var3);
                                    return var1;
                                case 180: // try_start_2 // catch_target0
                                    CatchBlockStart(arg_register = 1);
                                case 182: // try_end2
                                    var3 = _closure2_slot6;
                                    var1 = false;
                                    var1 = var3.bind(var4)(var1);
                                case 193:
                                    var1 = function() { // Environment: var6
                                        var3 = _closure1_slot3;
                                        var2 = undefined;
                                        var1 = function*() { // Environment: var0
                                            var0 = function*() { // Original name: ?anon_0_, environment: var0
                                                _fun91225: for (var _fun91225_ip = 0;;) switch (_fun91225_ip) {
                                                    case 0:
                                                        StartGenerator();
                                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                        if (var1) {
                                                            _fun91225_ip = 229;
                                                            continue _fun91225
                                                        }
                                                    case 10:
                                                        var1 = _closure2_slot0;
                                                        var9 = null;
                                                        if (!(var9 == var1)) {
                                                            _fun91225_ip = 29;
                                                            continue _fun91225
                                                        }
                                                    case 23:
                                                        var8 = new Array(0);
                                                        _fun91225_ip = 87;
                                                        continue _fun91225;
                                                    case 29:
                                                        var4 = _closure1_slot6;
                                                        var2 = var4.getMutualGuilds;
                                                        var1 = _closure2_slot0;
                                                        var1 = var1.id;
                                                        var5 = var2.bind(var4)(var1);
                                                        var2 = var9 == var5;
                                                        var1 = undefined;
                                                        if (var2) {
                                                            _fun91225_ip = 84;
                                                            continue _fun91225
                                                        }
                                                    case 65:
                                                        var4 = var5.map;
                                                        var2 = function(arg0) { // Environment: var2
                                                            var0 = arg0;
                                                            var0 = var0.guild;
                                                            var0 = var0.id;
                                                            return var0;
                                                        };
                                                        var1 = var4.bind(var5)(var2);
                                                    case 84:
                                                        var8 = var1;
                                                    case 87:
                                                        var5 = _closure1_slot1;
                                                        var4 = _closure1_slot2;
                                                        var2 = 11;
                                                        var4 = var4[var2];
                                                        var2 = undefined;
                                                        var7 = var5.bind(var2)(var4);
                                                        var6 = var7.track;
                                                        var4 = _closure1_slot9;
                                                        var5 = var4.MESSAGE_REQUEST_ACTION;
                                                        var4 = {};
                                                        var1 = _closure1_slot7;
                                                        var1 = var1.ACCEPT_CONFIRMATION_PROMPT;
                                                        var4.action = var1;
                                                        var10 = _closure5_slot0;
                                                        var4.channel_id = var10;
                                                        if (!(var9 == var8)) {
                                                            _fun91225_ip = 162;
                                                            continue _fun91225
                                                        }
                                                    case 158:
                                                        var8 = new Array(0);
                                                    case 162:
                                                        var4.mutual_guild_ids = var8;
                                                        var8 = _closure2_slot0;
                                                        var9 = var9 == var8;
                                                        var8 = undefined;
                                                        if (var9) {
                                                            _fun91225_ip = 189;
                                                            continue _fun91225
                                                        }
                                                    case 180:
                                                        var9 = _closure2_slot0;
                                                        var8 = var9.id;
                                                    case 189:
                                                        var4.other_user_id = var8;
                                                        var4 = var6.bind(var7)(var5, var4);
                                                        var3 = _closure2_slot10;
                                                        var1 = _closure5_slot0;
                                                        var1 = var3.bind(var2)(var1);
                                                        SaveGenerator(address = 217);
                                                    case 215:
                                                        return var1;
                                                    case 217:
                                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                                        if (var3) {
                                                            _fun91225_ip = 226;
                                                            continue _fun91225
                                                        }
                                                    case 223:
                                                        return var2;
                                                    case 226:
                                                        return var1;
                                                    case 229:
                                                        return var0;
                                                }
                                            };
                                            return var0;
                                        };
                                        var1 = var3.bind(var2)(var1);
                                        var _closure6_slot0 = var1;
                                        var0 = function() { // Environment: var0
                                            var0 = undefined;
                                            var3 = _closure6_slot0;
                                            var2 = var3.apply;
                                            var0 = arguments;
                                            var1 = var0;
                                            var0 = this;
                                            var0 = var2.bind(var3)(var0, var1);
                                            return var0;
                                        };
                                        return var0;
                                    };
                                    var5 = undefined;
                                    var7 = var1.bind(var5)();
                                    var3 = _closure1_slot0;
                                    var9 = _closure1_slot2;
                                    var1 = 12;
                                    var1 = var9[var1];
                                    var5 = var3.bind(var5)(var1);
                                    var3 = var5.openAcceptMessageRequestConfirmModal;
                                    var1 = {};
                                    var1.channelId = var8;
                                    var1.onConfirm = var7;
                                    var6 = function() { // Original name: onCancel, environment: var6
                                        _fun91228: for (var _fun91228_ip = 0;;) switch (_fun91228_ip) {
                                            case 0:
                                                var0 = _closure2_slot0;
                                                var7 = null;
                                                if (!(var7 == var0)) {
                                                    _fun91228_ip = 19;
                                                    continue _fun91228
                                                }
                                            case 13:
                                                var5 = new Array(0);
                                                _fun91228_ip = 77;
                                                continue _fun91228;
                                            case 19:
                                                var2 = _closure1_slot6;
                                                var1 = var2.getMutualGuilds;
                                                var0 = _closure2_slot0;
                                                var0 = var0.id;
                                                var3 = var1.bind(var2)(var0);
                                                var1 = var7 == var3;
                                                var0 = undefined;
                                                if (var1) {
                                                    _fun91228_ip = 74;
                                                    continue _fun91228
                                                }
                                            case 55:
                                                var2 = var3.map;
                                                var1 = function(arg0) { // Environment: var1
                                                    var0 = arg0;
                                                    var0 = var0.guild;
                                                    var0 = var0.id;
                                                    return var0;
                                                };
                                                var0 = var2.bind(var3)(var1);
                                            case 74:
                                                var5 = var0;
                                            case 77:
                                                var2 = _closure1_slot1;
                                                var1 = _closure1_slot2;
                                                var0 = 11;
                                                var1 = var1[var0];
                                                var0 = undefined;
                                                var4 = var2.bind(var0)(var1);
                                                var3 = var4.track;
                                                var1 = _closure1_slot9;
                                                var2 = var1.MESSAGE_REQUEST_ACTION;
                                                var1 = {};
                                                var8 = _closure1_slot7;
                                                var8 = var8.DISMISS_CONFIRMATION_PROMPT;
                                                var1.action = var8;
                                                var8 = _closure5_slot0;
                                                var1.channel_id = var8;
                                                if (!(var7 == var5)) {
                                                    _fun91228_ip = 152;
                                                    continue _fun91228
                                                }
                                            case 148:
                                                var5 = new Array(0);
                                            case 152:
                                                var1.mutual_guild_ids = var5;
                                                var5 = _closure2_slot0;
                                                var7 = var7 == var5;
                                                var5 = undefined;
                                                if (var7) {
                                                    _fun91228_ip = 179;
                                                    continue _fun91228
                                                }
                                            case 170:
                                                var6 = _closure2_slot0;
                                                var5 = var6.id;
                                            case 179:
                                                var1.other_user_id = var5;
                                                var1 = var3.bind(var4)(var2, var1);
                                                return var0;
                                        }
                                    };
                                    var1.onCancel = var6;
                                    var1 = var3.bind(var5)(var1);
                                    _fun91222_ip = 280;
                                    continue _fun91222;
                                case 265: // catch_target1 // catch_target2
                                    CatchBlockStart(arg_register = 1);
                                    var3 = _closure2_slot6;
                                    var2 = false;
                                    var2 = var3.bind(var4)(var2);
                                    throw var1;
                                case 280:
                                    var1 = undefined;
                                    return var1;
                                case 285:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    return var0;
                };
                var10 = var6.bind(var10)();
                var6 = new Array(3);
                var6[0] = var9;
                var6[1] = var15;
                var6[2] = var14;
                var10 = var12.bind(var13)(var10, var6);
                var12 = var13.useCallback;
                var6 = new Array(1);
                var6[0] = var9;
                var0 = function(arg0, arg1, arg2) { // Environment: var0
                    _fun91231: for (var _fun91231_ip = 0;;) switch (_fun91231_ip) {
                        case 0:
                            var6 = arg0;
                            var _closure3_slot0 = var6;
                            var0 = arg1;
                            var _closure3_slot1 = var0;
                            var0 = arg2;
                            var _closure3_slot2 = var0;
                            var5 = function(arg0, arg1) { // Original name: onConfirm, environment: var4
                                _fun91232: for (var _fun91232_ip = 0;;) switch (_fun91232_ip) {
                                    case 0:
                                        var6 = arg0;
                                        var7 = arg1;
                                        if (!var7) {
                                            _fun91232_ip = 51;
                                            continue _fun91232
                                        }
                                    case 9:
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 13;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var0 = var2.bind(var0)(var1);
                                        var1 = var0.NonSpamRetrainingOptIn;
                                        var0 = var1.updateSetting;
                                        var0 = var0.bind(var1)(var6);
                                    case 51:
                                        var0 = var6;
                                        if (!var0) {
                                            _fun91232_ip = 70;
                                            continue _fun91232
                                        }
                                    case 57:
                                        var2 = _closure3_slot1;
                                        var1 = null;
                                        var0 = var1 != var2;
                                    case 70:
                                        if (!var0) {
                                            _fun91232_ip = 116;
                                            continue _fun91232
                                        }
                                    case 73:
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 14;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var2 = var2.bind(var0)(var1);
                                        var1 = var2.submitHamReportForFirstDM;
                                        var0 = _closure3_slot1;
                                        var0 = var1.bind(var2)(var0);
                                    case 116:
                                        var3 = _closure2_slot10;
                                        var8 = _closure3_slot0;
                                        var2 = var8.id;
                                        var0 = undefined;
                                        var2 = var3.bind(var0)(var2);
                                        var3 = _closure1_slot1;
                                        var4 = _closure1_slot2;
                                        var2 = 11;
                                        var2 = var4[var2];
                                        var5 = var3.bind(var0)(var2);
                                        var4 = var5.track;
                                        var2 = _closure1_slot9;
                                        var3 = var2.MESSAGE_REQUEST_ACTION;
                                        var2 = {};
                                        var9 = _closure1_slot7;
                                        var9 = var9.ACCEPT_HAM_CONFIRMATION_PROMPT;
                                        var2.action = var9;
                                        var8 = var8.id;
                                        var2.channel_id = var8;
                                        var2.is_dont_show_again_checked = var7;
                                        var2.non_spam_retraining_opt_in = var6;
                                        var2 = var4.bind(var5)(var3, var2);
                                        var3 = _closure3_slot2;
                                        var2 = null;
                                        if (!(var2 != var3)) {
                                            _fun91232_ip = 241;
                                            continue _fun91232
                                        }
                                    case 233:
                                        var1 = _closure3_slot2;
                                        var1 = var1.bind(var0)();
                                    case 241:
                                        return var0;
                                }
                            };
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 13;
                            var2 = var2[var0];
                            var0 = undefined;
                            var2 = var3.bind(var0)(var2);
                            var3 = var2.NonSpamRetrainingOptIn;
                            var2 = var3.getSetting;
                            var2 = var2.bind(var3)();
                            var3 = null;
                            if (!(var3 != var2)) {
                                _fun91231_ip = 84;
                                continue _fun91231
                            }
                        case 77:
                            var2 = var5.bind(var0)(var2);
                            _fun91231_ip = 138;
                            continue _fun91231;
                        case 84:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 12;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.onMarkAsNotSpamConfirmationModal;
                            var1 = {};
                            var1.channel = var6;
                            var1.onConfirm = var5;
                            var4 = function() { // Original name: onCancel, environment: var4
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 11;
                                var1 = var1[var0];
                                var0 = undefined;
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.track;
                                var1 = _closure1_slot9;
                                var2 = var1.MESSAGE_REQUEST_ACTION;
                                var1 = {};
                                var5 = _closure1_slot7;
                                var5 = var5.DISMISS_HAM_CONFIRMATION_PROMPT;
                                var1.action = var5;
                                var5 = _closure3_slot0;
                                var5 = var5.id;
                                var1.channel_id = var5;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            var1.onCancel = var4;
                            var1 = var2.bind(var3)(var1);
                        case 138:
                            return var0;
                    }
                };
                var6 = var12.bind(var13)(var0, var6);
                var0 = {};
                if (!var11) {
                    _fun91207_ip = 452;
                    continue _fun91207
                }
            case 449:
                var9 = var10;
            case 452:
                var0.acceptMessageRequest = var9;
                var0.rejectMessageRequest = var8;
                var0.rejectAll = var7;
                var0.markAsNotSpam = var6;
                var0.isAcceptLoading = var5;
                var0.isRejectLoading = var4;
                var0.isUserProfileLoading = var3;
                var0.isOptimisticAccepted = var2;
                var0.isOptimisticRejected = var1;
                return var0;
        }
    };
    var2.useMessageRequestActions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 4622, 11785, 660, 11786, 9009, 3309, 8511, 6915, 795, 11788, 1348, 6454, 2]);