// ../discord_common/js/packages/http-utils/HTTPUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun6444: for (var _fun6444_ip = 0;;) switch (_fun6444_ip) {
        case 0:
            var12 = require;
            var6 = metroImportDefault;
            var2 = exports;
            var13 = dependencyMap;
            var _closure1_slot0 = var12;
            var _closure1_slot1 = var6;
            var _closure1_slot2 = var13;
            var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
                _fun6445: for (var _fun6445_ip = 0;;) switch (_fun6445_ip) {
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
                        _fun6445_ip = 74;
                        continue _fun6445;
                    case 72: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 74:
                        var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                            var0 = _closure2_slot0;
                            var0 = !var0;
                            var0 = !var0;
                            return var0;
                        };
                        _closure1_slot14 = var1;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                }
            };
            var _closure1_slot14 = var0;
            var0 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: sendRequest, environment: var3
                _fun6448: for (var _fun6448_ip = 0;;) switch (_fun6448_ip) {
                    case 0:
                        var2 = arg0;
                        var5 = arg1;
                        var _closure2_slot0 = var2;
                        var _closure2_slot1 = var5;
                        var0 = arg2;
                        var _closure2_slot2 = var0;
                        var0 = arg3;
                        var _closure2_slot3 = var0;
                        var0 = arg4;
                        var _closure2_slot4 = var0;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var0 = 7;
                        var3 = var3[var0];
                        var0 = undefined;
                        var4 = var4.bind(var0)(var3);
                        var3 = var4[var2];
                        var2 = var5.url;
                        var2 = var3.bind(var4)(var2);
                        var _closure2_slot5 = var2;
                        var3 = var5.onRequestCreated;
                        var4 = null;
                        if (!(var4 != var3)) {
                            _fun6448_ip = 103;
                            continue _fun6448
                        }
                    case 92:
                        var3 = var5.onRequestCreated;
                        var3 = var3.bind(var5)(var2);
                    case 103:
                        var3 = var5.query;
                        if (!(var4 != var3)) {
                            _fun6448_ip = 196;
                            continue _fun6448
                        }
                    case 113:
                        var8 = var5.query;
                        var9 = 'object';
                        var3 = typeof var8;
                        var7 = var8;
                        if (!(var9 === var3)) {
                            _fun6448_ip = 185;
                            continue _fun6448
                        }
                    case 133:
                        var3 = {};
                        var13 = var3;
                        var12 = var8;
                        var8 = copyDataProperties(var13, var12);
                        var _closure2_slot6 = var3;
                        var8 = global;
                        var9 = var8.Object;
                        var8 = var9.keys;
                        var10 = var8.bind(var9)(var3);
                        var9 = var10.map;
                        var8 = function(arg0) { // Environment: var1
                            _fun6449: for (var _fun6449_ip = 0;;) switch (_fun6449_ip) {
                                case 0:
                                    var1 = arg0;
                                    var2 = _closure2_slot6;
                                    var3 = var2[var1];
                                    var2 = null;
                                    if (!(var2 == var3)) {
                                        _fun6449_ip = 28;
                                        continue _fun6449
                                    }
                                case 20:
                                    var0 = _closure2_slot6;
                                    var0 = delete var0[var1];
                                case 28:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var8 = var9.bind(var10)(var8);
                        var7 = var3;
                    case 185:
                        var3 = var2.query;
                        var3 = var3.bind(var2)(var7);
                    case 196:
                        var3 = var5.body;
                        if (!var3) {
                            _fun6448_ip = 220;
                            continue _fun6448
                        }
                    case 204:
                        var7 = var2.send;
                        var3 = var5.body;
                        var3 = var7.bind(var2)(var3);
                    case 220:
                        var3 = var5.headers;
                        if (!(var4 != var3)) {
                            _fun6448_ip = 246;
                            continue _fun6448
                        }
                    case 230:
                        var7 = var2.set;
                        var3 = var5.headers;
                        var3 = var7.bind(var2)(var3);
                    case 246:
                        var7 = var5.withCredentials;
                        var3 = true;
                        if (!(var3 === var7)) {
                            _fun6448_ip = 268;
                            continue _fun6448
                        }
                    case 258:
                        var7 = var2.withCredentials;
                        var7 = var7.bind(var2)();
                    case 268:
                        var7 = var5.reason;
                        if (!(var4 != var7)) {
                            _fun6448_ip = 314;
                            continue _fun6448
                        }
                    case 278:
                        var9 = var2.set;
                        var7 = global;
                        var8 = var7.encodeURIComponent;
                        var7 = var5.reason;
                        var8 = var8.bind(var0)(var7);
                        var7 = 'X-Audit-Log-Reason';
                        var7 = var9.bind(var2)(var7, var8);
                    case 314:
                        var9 = var5.attachments;
                        if (!(var4 != var9)) {
                            _fun6448_ip = 339;
                            continue _fun6448
                        }
                    case 324:
                        var8 = var9.forEach;
                        var7 = function(arg0) { // Environment: var1
                            var0 = arg0;
                            var4 = _closure2_slot5;
                            var3 = var4.attach;
                            var2 = var0.name;
                            var1 = var0.file;
                            var0 = var0.filename;
                            var0 = var3.bind(var4)(var2, var1, var0);
                            var0 = undefined;
                            return var0;
                        };
                        var7 = var8.bind(var9)(var7);
                    case 339:
                        var9 = var5.fields;
                        if (!(var4 != var9)) {
                            _fun6448_ip = 364;
                            continue _fun6448
                        }
                    case 349:
                        var8 = var9.forEach;
                        var7 = function(arg0) { // Environment: var1
                            var0 = arg0;
                            var3 = _closure2_slot5;
                            var2 = var3.field;
                            var1 = var0.name;
                            var0 = var0.value;
                            var0 = var2.bind(var3)(var1, var0);
                            var0 = undefined;
                            return var0;
                        };
                        var7 = var8.bind(var9)(var7);
                    case 364:
                        var7 = var5.context;
                        if (!(var4 != var7)) {
                            _fun6448_ip = 408;
                            continue _fun6448
                        }
                    case 373:
                        var8 = _closure1_slot18;
                        var7 = var5.context;
                        var9 = var8.bind(var0)(var7);
                        if (!(var4 != var9)) {
                            _fun6448_ip = 408;
                            continue _fun6448
                        }
                    case 391:
                        var8 = var2.set;
                        var7 = 'X-Context-Properties';
                        var7 = var8.bind(var2)(var7, var9);
                    case 408:
                        var7 = var5.retried;
                        var7 = var4 != var7;
                        if (!var7) {
                            _fun6448_ip = 433;
                            continue _fun6448
                        }
                    case 421:
                        var9 = var5.retried;
                        var8 = 0;
                        var7 = var8 !== var9;
                    case 433:
                        if (!var7) {
                            _fun6448_ip = 481;
                            continue _fun6448
                        }
                    case 436:
                        var9 = var2.set;
                        var10 = var5.retried;
                        var7 = global;
                        var7 = var7.HermesInternal;
                        var8 = var7.concat;
                        var7 = '';
                        var8 = var8.bind(var7)(var10);
                        var7 = 'X-Failed-Requests';
                        var7 = var9.bind(var2)(var7, var8);
                    case 481:
                        var7 = var5.timeout;
                        var7 = var4 != var7;
                        if (!var7) {
                            _fun6448_ip = 506;
                            continue _fun6448
                        }
                    case 494:
                        var9 = var5.timeout;
                        var8 = 0;
                        var7 = var8 !== var9;
                    case 506:
                        if (!var7) {
                            _fun6448_ip = 526;
                            continue _fun6448
                        }
                    case 509:
                        var8 = var2.timeout;
                        var7 = var5.timeout;
                        var7 = var8.bind(var2)(var7);
                    case 526:
                        var7 = var5.binary;
                        if (!var7) {
                            _fun6448_ip = 550;
                            continue _fun6448
                        }
                    case 535:
                        var8 = var2.responseType;
                        var7 = 'blob';
                        var7 = var8.bind(var2)(var7);
                    case 550:
                        var7 = var5.onRequestProgress;
                        if (!(var4 != var7)) {
                            _fun6448_ip = 581;
                            continue _fun6448
                        }
                    case 560:
                        var9 = var2.on;
                        var8 = 'progress';
                        var7 = function(arg0) { // Environment: var1
                            _fun6452: for (var _fun6452_ip = 0;;) switch (_fun6452_ip) {
                                case 0:
                                    var1 = _closure2_slot1;
                                    var2 = var1.onRequestProgress;
                                    var1 = null;
                                    if (!(var1 != var2)) {
                                        _fun6452_ip = 37;
                                        continue _fun6452
                                    }
                                case 19:
                                    var2 = _closure2_slot1;
                                    var1 = var2.onRequestProgress;
                                    var0 = arg0;
                                    var0 = var1.bind(var2)(var0);
                                case 37:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var7 = var9.bind(var2)(var8, var7);
                    case 581:
                        var7 = function() { // Original name: retry, environment: var1
                            _fun6453: for (var _fun6453_ip = 0;;) switch (_fun6453_ip) {
                                case 0:
                                    var2 = _closure2_slot1;
                                    var1 = var2.backoff;
                                    var3 = null;
                                    if (!(var3 == var1)) {
                                        _fun6453_ip = 66;
                                        continue _fun6453
                                    }
                                case 19:
                                    var5 = _closure1_slot1;
                                    var4 = _closure1_slot2;
                                    var1 = 8;
                                    var4 = var4[var1];
                                    var1 = undefined;
                                    var1 = var5.bind(var1)(var4);
                                    var4 = var1.prototype;
                                    var4 = Object.create(var4, {
                                        constructor: {
                                            value: var1
                                        }
                                    });
                                    var7 = var4;
                                    var1 = new var7[var1](var6);
                                    var1 = var1 instanceof Object ? var1 : var4;
                                    _fun6453_ip = 76;
                                    continue _fun6453;
                                case 66:
                                    var4 = _closure2_slot1;
                                    var1 = var4.backoff;
                                case 76:
                                    var2.backoff = var1;
                                    var2 = _closure2_slot1;
                                    var1 = var2.retried;
                                    var1 = var3 != var1;
                                    var3 = 0;
                                    if (!var1) {
                                        _fun6453_ip = 111;
                                        continue _fun6453
                                    }
                                case 101:
                                    var1 = _closure2_slot1;
                                    var3 = var1.retried;
                                case 111:
                                    var1 = 1;
                                    var1 = var3 + var1;
                                    var2.retried = var1;
                                    var0 = _closure2_slot1;
                                    var2 = var0.backoff;
                                    var1 = var2.fail;
                                    var0 = function() { // Environment: var0
                                        var2 = _closure1_slot13;
                                        var0 = _closure2_slot1;
                                        var1 = var0.url;
                                        var0 = undefined;
                                        var2 = var2.bind(var0)(var1);
                                        var1 = var2.then;
                                        var0 = function() { // Environment: var0
                                            var6 = _closure1_slot15;
                                            var11 = _closure2_slot0;
                                            var10 = _closure2_slot1;
                                            var9 = _closure2_slot2;
                                            var8 = _closure2_slot3;
                                            var7 = _closure2_slot4;
                                            var0 = undefined;
                                            var12 = undefined;
                                            var1 = var12[var6](var11, var10, var9, var8, var7, var6);
                                            return var0;
                                        };
                                        var0 = var1.bind(var2)(var0);
                                        return var0;
                                    };
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var _closure2_slot7 = var7;
                        var7 = _closure1_slot12;
                        var6 = var4 == var7;
                        if (var6) {
                            _fun6448_ip = 611;
                            continue _fun6448
                        }
                    case 601:
                        var8 = var7.prepareRequest;
                        var6 = var4 == var8;
                    case 611:
                        if (var6) {
                            _fun6448_ip = 625;
                            continue _fun6448
                        }
                    case 614:
                        var6 = var7.prepareRequest;
                        var6 = var6.bind(var7)(var2);
                    case 625:
                        var7 = var2.ok;
                        var6 = function(arg0) { // Environment: var1
                            var0 = arg0;
                            var1 = var0.status;
                            var0 = null;
                            var0 = var0 != var1;
                            return var0;
                        };
                        var6 = var7.bind(var2)(var6);
                        var8 = var2.then;
                        var7 = function(arg0) { // Environment: var1
                            _fun6457: for (var _fun6457_ip = 0;;) switch (_fun6457_ip) {
                                case 0:
                                    var6 = arg0;
                                    var1 = _closure2_slot1;
                                    var1 = var1.retries;
                                    var3 = null;
                                    if (!(var3 != var1)) {
                                        _fun6457_ip = 80;
                                        continue _fun6457
                                    }
                                case 24:
                                    var4 = _closure2_slot1;
                                    var1 = var4.retries;
                                    var2 = parseFloat(var1);
                                    var1 = var2 - 1;
                                    var4.retries = var1;
                                    var1 = 0;
                                    if (!(var2 > var1)) {
                                        _fun6457_ip = 80;
                                        continue _fun6457
                                    }
                                case 52:
                                    var4 = _closure1_slot9;
                                    var2 = var4.has;
                                    var1 = var6.status;
                                    var1 = var2.bind(var4)(var1);
                                    if (var1) {
                                        _fun6457_ip = 582;
                                        continue _fun6457
                                    }
                                case 80:
                                    var4 = {};
                                    var1 = var6.ok;
                                    var4.ok = var1;
                                    var1 = var6.headers;
                                    var4.headers = var1;
                                    var1 = var6.body;
                                    var4.body = var1;
                                    var1 = var6.text;
                                    var4.text = var1;
                                    var1 = var6.status;
                                    var4.status = var1;
                                    var5 = _closure1_slot17;
                                    var7 = _closure2_slot1;
                                    var1 = undefined;
                                    var5 = var5.bind(var1)(var7, var4);
                                    var5 = false;
                                    var _closure3_slot0 = var5;
                                    var12 = function(arg0, arg1) { // Original name: interceptRetry, environment: var8
                                        var6 = {};
                                        var1 = _closure2_slot1;
                                        var11 = var6;
                                        var10 = var1;
                                        var2 = copyDataProperties(var11, var10);
                                        var2 = {};
                                        var10 = var1.headers;
                                        var11 = var2;
                                        var1 = copyDataProperties(var11, var10);
                                        var10 = arg0;
                                        var11 = var2;
                                        var1 = copyDataProperties(var11, var10);
                                        var1 = 'headers';
                                        var6[var1] = var2;
                                        var2 = arg1;
                                        var1 = 'interceptResponse';
                                        var6[var1] = var2;
                                        var1 = true;
                                        _closure3_slot0 = var1;
                                        var5 = _closure1_slot15;
                                        var11 = _closure2_slot0;
                                        var9 = _closure2_slot2;
                                        var8 = _closure2_slot3;
                                        var7 = _closure2_slot4;
                                        var0 = undefined;
                                        var12 = undefined;
                                        var10 = var6;
                                        var1 = var12[var5](var11, var10, var9, var8, var7, var6);
                                        return var0;
                                    };
                                    var11 = function(arg0) { // Original name: interceptCancel, environment: var8
                                        _fun6459: for (var _fun6459_ip = 0;;) switch (_fun6459_ip) {
                                            case 0:
                                                var3 = arg0;
                                                var0 = _closure3_slot0;
                                                if (var0) {
                                                    _fun6459_ip = 61;
                                                    continue _fun6459
                                                }
                                            case 13:
                                                var1 = _closure2_slot3;
                                                var2 = undefined;
                                                var1 = var1.bind(var2)(var3);
                                                var4 = _closure2_slot4;
                                                var1 = null;
                                                if (!(var1 != var4)) {
                                                    _fun6459_ip = 61;
                                                    continue _fun6459
                                                }
                                            case 37:
                                                var1 = _closure2_slot4;
                                                var0 = {
                                                    'ok': false,
                                                    'hasErr': true
                                                };
                                                var0.err = var3;
                                                var0 = var1.bind(var2)(var0);
                                            case 61:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var8 = var3 == var7;
                                    var7 = undefined;
                                    if (var8) {
                                        _fun6457_ip = 211;
                                        continue _fun6457
                                    }
                                case 175:
                                    var8 = _closure2_slot1;
                                    var8 = var8.interceptResponse;
                                    var8 = var3 == var8;
                                    var7 = undefined;
                                    if (var8) {
                                        _fun6457_ip = 211;
                                        continue _fun6457
                                    }
                                case 194:
                                    var9 = _closure2_slot1;
                                    var8 = var9.interceptResponse;
                                    var7 = var8.bind(var9)(var6, var12, var11);
                                case 211:
                                    var8 = true;
                                    if (!(var8 !== var7)) {
                                        _fun6457_ip = 580;
                                        continue _fun6457
                                    }
                                case 220:
                                    var10 = _closure1_slot12;
                                    var9 = var3 == var10;
                                    var7 = undefined;
                                    if (var9) {
                                        _fun6457_ip = 261;
                                        continue _fun6457
                                    }
                                case 233:
                                    var9 = var10.interceptResponse;
                                    var9 = var3 == var9;
                                    var7 = undefined;
                                    if (var9) {
                                        _fun6457_ip = 261;
                                        continue _fun6457
                                    }
                                case 248:
                                    var9 = var10.interceptResponse;
                                    var7 = var9.bind(var10)(var6, var12, var11);
                                case 261:
                                    if (!(var8 !== var7)) {
                                        _fun6457_ip = 580;
                                        continue _fun6457
                                    }
                                case 268:
                                    var6 = var6.ok;
                                    if (var6) {
                                        _fun6457_ip = 537;
                                        continue _fun6457
                                    }
                                case 280:
                                    var6 = _closure2_slot1;
                                    var6 = var6.oldFormErrors;
                                    if (!var6) {
                                        _fun6457_ip = 403;
                                        continue _fun6457
                                    }
                                case 293:
                                    var6 = var3 == var4;
                                    var7 = undefined;
                                    if (var6) {
                                        _fun6457_ip = 321;
                                        continue _fun6457
                                    }
                                case 302:
                                    var6 = var4.body;
                                    var8 = var3 == var6;
                                    var7 = undefined;
                                    if (var8) {
                                        _fun6457_ip = 321;
                                        continue _fun6457
                                    }
                                case 316:
                                    var7 = var6.code;
                                case 321:
                                    var8 = _closure1_slot0;
                                    var9 = _closure1_slot2;
                                    var6 = 9;
                                    var6 = var9[var6];
                                    var6 = var8.bind(var1)(var6);
                                    var6 = var6.INVALID_FORM_BODY_ERROR_CODE;
                                    if (!(var7 === var6)) {
                                        _fun6457_ip = 403;
                                        continue _fun6457
                                    }
                                case 351:
                                    var6 = var4.body;
                                    var8 = var6.errors;
                                    if (!(var3 != var8)) {
                                        _fun6457_ip = 403;
                                        continue _fun6457
                                    }
                                case 366:
                                    var7 = _closure1_slot0;
                                    var9 = _closure1_slot2;
                                    var6 = 10;
                                    var6 = var9[var6];
                                    var7 = var7.bind(var1)(var6);
                                    var6 = var7.convertSkemaError;
                                    var6 = var6.bind(var7)(var8);
                                    var4.body = var6;
                                case 403:
                                    var6 = _closure2_slot1;
                                    var6 = var6.rejectWithError;
                                    if (var6) {
                                        _fun6457_ip = 426;
                                        continue _fun6457
                                    }
                                case 415:
                                    var6 = _closure2_slot3;
                                    var6 = var6.bind(var1)(var4);
                                    _fun6457_ip = 546;
                                    continue _fun6457;
                                case 426:
                                    var7 = _closure1_slot10;
                                    var2 = {};
                                    var6 = _closure2_slot0;
                                    var2.method = var6;
                                    var6 = _closure2_slot1;
                                    var6 = var6.url;
                                    var2.url = var6;
                                    var6 = var4.ok;
                                    var2.ok = var6;
                                    var6 = var4.status;
                                    var2.status = var6;
                                    var6 = var4.body;
                                    var2.body = var6;
                                    var6 = var4.text;
                                    var2.text = var6;
                                    var6 = var4.headers;
                                    var2.headers = var6;
                                    var6 = var7.prototype;
                                    var6 = Object.create(var6, {
                                        constructor: {
                                            value: var7
                                        }
                                    });
                                    var16 = var6;
                                    var15 = var2;
                                    var2 = new var16[var7](var15, var14);
                                    var6 = var2 instanceof Object ? var2 : var6;
                                    var2 = _closure2_slot3;
                                    var2 = var2.bind(var1)(var6);
                                    _fun6457_ip = 546;
                                    continue _fun6457;
                                case 537:
                                    var2 = _closure2_slot2;
                                    var2 = var2.bind(var1)(var4);
                                case 546:
                                    var2 = _closure2_slot4;
                                    if (!(var3 != var2)) {
                                        _fun6457_ip = 580;
                                        continue _fun6457
                                    }
                                case 554:
                                    var3 = _closure2_slot4;
                                    var2 = {};
                                    var2.hasErr = var5;
                                    var15 = var2;
                                    var14 = var4;
                                    var4 = copyDataProperties(var15, var14);
                                    var2 = var3.bind(var1)(var2);
                                case 580:
                                    return var1;
                                case 582:
                                    var1 = _closure2_slot7;
                                    var0 = undefined;
                                    var0 = var1.bind(var0)();
                                    return var0;
                            }
                        };
                        var6 = function(arg0) { // Environment: var1
                            _fun6460: for (var _fun6460_ip = 0;;) switch (_fun6460_ip) {
                                case 0:
                                    var4 = arg0;
                                    var1 = _closure2_slot1;
                                    var1 = var1.retries;
                                    var2 = null;
                                    if (!(var2 != var1)) {
                                        _fun6460_ip = 65;
                                        continue _fun6460
                                    }
                                case 22:
                                    var5 = _closure2_slot1;
                                    var1 = var5.retries;
                                    var3 = parseFloat(var1);
                                    var1 = var3 - 1;
                                    var5.retries = var1;
                                    var1 = 0;
                                    if (!(var3 > var1)) {
                                        _fun6460_ip = 65;
                                        continue _fun6460
                                    }
                                case 50:
                                    var3 = var4.code;
                                    var1 = 'ABORTED';
                                    if (!(var1 === var3)) {
                                        _fun6460_ip = 126;
                                        continue _fun6460
                                    }
                                case 65:
                                    var5 = _closure1_slot17;
                                    var1 = _closure2_slot1;
                                    var3 = undefined;
                                    var1 = var5.bind(var3)(var1);
                                    var1 = _closure2_slot3;
                                    var1 = var1.bind(var3)(var4);
                                    var1 = _closure2_slot4;
                                    if (!(var2 != var1)) {
                                        _fun6460_ip = 136;
                                        continue _fun6460
                                    }
                                case 100:
                                    var2 = _closure2_slot4;
                                    var1 = {
                                        'ok': false,
                                        'hasErr': true
                                    };
                                    var1.err = var4;
                                    var1 = var2.bind(var3)(var1);
                                    _fun6460_ip = 136;
                                    continue _fun6460;
                                case 126:
                                    var1 = _closure2_slot7;
                                    var0 = undefined;
                                    var0 = var1.bind(var0)();
                                case 136:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var6 = var8.bind(var2)(var7, var6);
                        var6 = var5.signal;
                        if (!(var4 != var6)) {
                            _fun6448_ip = 681;
                            continue _fun6448
                        }
                    case 672:
                        var6 = var6.aborted;
                        if (var6) {
                            _fun6448_ip = 722;
                            continue _fun6448
                        }
                    case 681:
                        var6 = var5.signal;
                        if (!(var4 != var6)) {
                            _fun6448_ip = 732;
                            continue _fun6448
                        }
                    case 691:
                        var5 = var6.addEventListener;
                        var4 = {};
                        var4.once = var3;
                        var3 = 'abort';
                        var1 = function() { // Environment: var1
                            var1 = _closure2_slot5;
                            var0 = var1.abort;
                            var0 = var0.bind(var1)();
                            return var0;
                        };
                        var1 = var5.bind(var6)(var3, var1, var4);
                        _fun6448_ip = 732;
                        continue _fun6448;
                    case 722:
                        var1 = var2.abort;
                        var1 = var1.bind(var2)();
                    case 732:
                        return var0;
                }
            };
            var _closure1_slot15 = var0;
            var0 = function(arg0) { // Original name: rateLimitExpirationHandler, environment: var3
                _fun6462: for (var _fun6462_ip = 0;;) switch (_fun6462_ip) {
                    case 0:
                        var2 = arg0;
                        var3 = _closure1_slot11;
                        var1 = var3.get;
                        var3 = var1.bind(var3)(var2);
                        var1 = null;
                        if (!(var1 == var3)) {
                            _fun6462_ip = 57;
                            continue _fun6462
                        }
                    case 26:
                        var7 = _closure1_slot8;
                        var6 = var7.verbose;
                        var5 = 'rateLimitExpirationHandler: rate limit for';
                        var4 = 'expired, but record was already removed';
                        var4 = var6.bind(var7)(var5, var2, var4);
                        _fun6462_ip = 143;
                        continue _fun6462;
                    case 57:
                        var4 = var3.queue;
                        var3 = var4.shift;
                        var3 = var3.bind(var4)();
                        if (!(var1 != var3)) {
                            _fun6462_ip = 107;
                            continue _fun6462
                        }
                    case 77:
                        var5 = _closure1_slot8;
                        var4 = var5.verbose;
                        var1 = 'rateLimitExpirationHandler: moving to next record for ';
                        var1 = var4.bind(var5)(var1, var2);
                        var1 = undefined;
                        var1 = var3.bind(var1)();
                        _fun6462_ip = 143;
                        continue _fun6462;
                    case 107:
                        var4 = _closure1_slot8;
                        var3 = var4.verbose;
                        var1 = 'rateLimitExpirationHandler: removing key for';
                        var1 = var3.bind(var4)(var1, var2);
                        var1 = _closure1_slot11;
                        var0 = var1.delete;
                        var0 = var0.bind(var1)(var2);
                    case 143:
                        var0 = undefined;
                        return var0;
                }
            };
            var _closure1_slot16 = var0;
            var0 = function(arg0, arg1) { // Original name: cleanupRequestEntry, environment: var3
                _fun6463: for (var _fun6463_ip = 0;;) switch (_fun6463_ip) {
                    case 0:
                        var0 = arg0;
                        var8 = arg1;
                        var _closure2_slot0 = var0;
                        var5 = _closure1_slot11;
                        var4 = var5.get;
                        var3 = var0.url;
                        var11 = var4.bind(var5)(var3);
                        var5 = null;
                        if (!(var5 != var8)) {
                            _fun6463_ip = 55;
                            continue _fun6463
                        }
                    case 40:
                        var4 = var8.status;
                        var3 = 429;
                        if (!(var3 !== var4)) {
                            _fun6463_ip = 150;
                            continue _fun6463
                        }
                    case 55:
                        var3 = var5 != var11;
                        if (!var3) {
                            _fun6463_ip = 89;
                            continue _fun6463
                        }
                    case 62:
                        var6 = var11.retryAfterTimestamp;
                        var4 = global;
                        var7 = var4.Date;
                        var4 = var7.now;
                        var4 = var4.bind(var7)();
                        var3 = var6 < var4;
                    case 89:
                        if (!var3) {
                            _fun6463_ip = 470;
                            continue _fun6463
                        }
                    case 95:
                        var9 = _closure1_slot8;
                        var7 = var9.verbose;
                        var6 = var0.url;
                        var4 = 'cleanupRequestEntry: rate limit for ';
                        var3 = 'expired';
                        var3 = var7.bind(var9)(var4, var6, var3);
                        var6 = _closure1_slot16;
                        var4 = var0.url;
                        var3 = undefined;
                        var3 = var6.bind(var3)(var4);
                        _fun6463_ip = 470;
                        continue _fun6463;
                    case 150:
                        var3 = var8.body;
                        var4 = var5 == var3;
                        var7 = undefined;
                        var10 = undefined;
                        if (var4) {
                            _fun6463_ip = 172;
                            continue _fun6463
                        }
                    case 166:
                        var10 = var3.retry_after;
                    case 172:
                        if (var10) {
                            _fun6463_ip = 178;
                            continue _fun6463
                        }
                    case 175:
                        var10 = 5;
                    case 178:
                        var6 = global;
                        var4 = var6.Date;
                        var3 = var4.now;
                        var9 = var3.bind(var4)();
                        var3 = 1000;
                        var4 = var3 * var10;
                        var9 = var9 + var4;
                        if (!(var5 != var11)) {
                            _fun6463_ip = 298;
                            continue _fun6463
                        }
                    case 213:
                        var4 = var11.retryAfterTimestamp;
                        if (!(!(var4 < var9))) {
                            _fun6463_ip = 254;
                            continue _fun6463
                        }
                    case 223:
                        var14 = _closure1_slot8;
                        var13 = var14.verbose;
                        var12 = var0.url;
                        var4 = 'cleanupRequestEntry: already has rate limit for ';
                        var4 = var13.bind(var14)(var4, var12);
                        var4 = undefined;
                        return var4;
                    case 254:
                        var14 = _closure1_slot8;
                        var13 = var14.verbose;
                        var12 = var0.url;
                        var4 = 'cleanupRequestEntry: extending rate limit for ';
                        var4 = var13.bind(var14)(var4, var12);
                        var12 = var6.clearTimeout;
                        var4 = var11.timeoutId;
                        var4 = var12.bind(var7)(var4);
                    case 298:
                        var13 = _closure1_slot8;
                        var12 = var13.verbose;
                        var21 = var0.url;
                        var4 = var6.HermesInternal;
                        var16 = var4.concat;
                        var22 = 'cleanupRequestEntry: rate limit for ';
                        var20 = ' retry after ';
                        var18 = ' seconds';
                        var19 = var10;
                        var4 = var22[var16](var21, var20, var19, var18, var17);
                        var4 = var12.bind(var13)(var4);
                        var4 = var6.setTimeout;
                        var3 = var3 * var10;
                        var2 = function() { // Environment: var2
                            var2 = _closure1_slot16;
                            var0 = _closure2_slot0;
                            var1 = var0.url;
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var4 = var4.bind(var7)(var2, var3);
                        var3 = _closure1_slot11;
                        var2 = var3.set;
                        var1 = var0.url;
                        var0 = {};
                        var12 = var5 == var11;
                        var10 = undefined;
                        if (var12) {
                            _fun6463_ip = 406;
                            continue _fun6463
                        }
                    case 400:
                        var10 = var11.queue;
                    case 406:
                        if (!(var5 == var10)) {
                            _fun6463_ip = 414;
                            continue _fun6463
                        }
                    case 410:
                        var10 = new Array(0);
                    case 414:
                        var0.queue = var10;
                        var0.retryAfterTimestamp = var9;
                        var6 = var6.String;
                        var8 = var8.body;
                        var9 = var5 == var8;
                        var5 = undefined;
                        if (var9) {
                            _fun6463_ip = 449;
                            continue _fun6463
                        }
                    case 444:
                        var5 = var8.message;
                    case 449:
                        var5 = var6.bind(var7)(var5);
                        var0.latestErrorMessage = var5;
                        var0.timeoutId = var4;
                        var0 = var2.bind(var3)(var1, var0);
                    case 470:
                        var0 = undefined;
                        return var0;
                }
            };
            var _closure1_slot17 = var0;
            var14 = function(arg0, arg1, arg2) { // Original name: makeRequest, environment: var3
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var1 = arg2;
                var _closure2_slot2 = var1;
                var1 = global;
                var2 = var1.Promise;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var3 = function(arg0, arg1) { // Environment: var0
                    _fun6466: for (var _fun6466_ip = 0;;) switch (_fun6466_ip) {
                        case 0:
                            var11 = arg0;
                            var6 = arg1;
                            var1 = _closure2_slot1;
                            var2 = 'string';
                            var1 = typeof var1;
                            if (!(var2 === var1)) {
                                _fun6466_ip = 44;
                                continue _fun6466
                            }
                        case 24:
                            var1 = {};
                            var2 = _closure2_slot1;
                            var1.url = var2;
                            var2 = false;
                            var1.rejectWithError = var2;
                            _closure2_slot1 = var1;
                        case 44:
                            var4 = _closure1_slot11;
                            var3 = var4.get;
                            var1 = _closure2_slot1;
                            var1 = var1.url;
                            var5 = var3.bind(var4)(var1);
                            var1 = null;
                            if (!(var1 != var5)) {
                                _fun6466_ip = 89;
                                continue _fun6466
                            }
                        case 76:
                            var3 = _closure2_slot1;
                            var3 = var3.failImmediatelyWhenRateLimited;
                            if (var3) {
                                _fun6466_ip = 210;
                                continue _fun6466
                            }
                        case 89:
                            if (!(var1 == var5)) {
                                _fun6466_ip = 123;
                                continue _fun6466
                            }
                        case 93:
                            var9 = _closure1_slot15;
                            var17 = _closure2_slot0;
                            var16 = _closure2_slot1;
                            var13 = _closure2_slot2;
                            var18 = undefined;
                            var15 = var11;
                            var14 = var6;
                            var3 = var18[var9](var17, var16, var15, var14, var13, var12);
                            _fun6466_ip = 206;
                            continue _fun6466;
                        case 123:
                            var8 = _closure1_slot8;
                            var7 = var8.verbose;
                            var3 = _closure2_slot1;
                            var4 = var3.url;
                            var3 = 'makeRequest: queueing request for ';
                            var3 = var7.bind(var8)(var3, var4);
                            var4 = var5.queue;
                            var3 = var4.push;
                            var10 = _closure1_slot15;
                            var9 = var10.bind;
                            var16 = _closure2_slot0;
                            var15 = _closure2_slot1;
                            var12 = _closure2_slot2;
                            var18 = var10;
                            var17 = null;
                            var14 = var11;
                            var13 = var6;
                            var2 = var18[var9](var17, var16, var15, var14, var13, var12, var11);
                            var2 = var3.bind(var4)(var2);
                        case 206:
                            var2 = undefined;
                            return var2;
                        case 210:
                            var2 = _closure2_slot2;
                            var4 = var5.retryAfterTimestamp;
                            var0 = global;
                            var7 = var0.Date;
                            var3 = var7.now;
                            var3 = var3.bind(var7)();
                            var7 = var4 - var3;
                            var4 = var0.Math;
                            var3 = var4.round;
                            var0 = 1000;
                            var0 = var7 / var0;
                            var4 = var3.bind(var4)(var0);
                            var3 = {};
                            var0 = 429;
                            var3.status = var0;
                            var0 = {};
                            var7 = var5.latestErrorMessage;
                            var0.message = var7;
                            var0.retry_after = var4;
                            var3.body = var0;
                            var0 = undefined;
                            var3 = var6.bind(var0)(var3);
                            if (!(var1 != var2)) {
                                _fun6466_ip = 356;
                                continue _fun6466
                            }
                        case 311:
                            var1 = {
                                'ok': true,
                                'hasErr': false,
                                'status': 429,
                                'body': null,
                                'text': ''
                            };
                            var3 = {};
                            var5 = var5.latestErrorMessage;
                            var3.message = var5;
                            var3.retry_after = var4;
                            var1.body = var3;
                            var3 = {};
                            var1.headers = var3;
                            var1 = var2.bind(var0)(var1);
                        case 356:
                            return var0;
                    }
                };
                var4 = var1;
                var0 = new var4[var2](var3, var2);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
            };
            var1 = function(arg0) { // Original name: encodeProperties, environment: var3
                _fun6467: for (var _fun6467_ip = 0;;) switch (_fun6467_ip) {
                    case 0:
                        var0 = arg0;
                    case 3: // try_start_0
                        var3 = global;
                        var2 = var3.Buffer;
                        var1 = var2.from;
                        var4 = var3.JSON;
                        var3 = var4.stringify;
                        var0 = var3.bind(var4)(var0);
                        var2 = var1.bind(var2)(var0);
                        var1 = var2.toString;
                        var0 = 'base64';
                        var0 = var1.bind(var2)(var0);
                    case 52: // try_end0
                        return var0;
                    case 54: // catch_target0
                        CatchBlockStart(arg_register = 0);
                        var0 = null;
                        return var0;
                }
            };
            var _closure1_slot18 = var1;
            var4 = global;
            var8 = var4.Object;
            var7 = var8.defineProperty;
            var5 = {};
            var0 = true;
            var5.value = var0;
            var0 = '__esModule';
            var0 = var7.bind(var8)(var2, var0, var5);
            var0 = 0;
            var5 = var13[var0];
            var0 = undefined;
            var5 = var6.bind(var0)(var5);
            var _closure1_slot3 = var5;
            var5 = 1;
            var5 = var13[var5];
            var5 = var6.bind(var0)(var5);
            var _closure1_slot4 = var5;
            var5 = 2;
            var5 = var13[var5];
            var5 = var6.bind(var0)(var5);
            var _closure1_slot5 = var5;
            var5 = 3;
            var5 = var13[var5];
            var5 = var6.bind(var0)(var5);
            var _closure1_slot6 = var5;
            var5 = 4;
            var5 = var13[var5];
            var5 = var6.bind(var0)(var5);
            var _closure1_slot7 = var5;
            var5 = 5;
            var5 = var13[var5];
            var6 = var6.bind(var0)(var5);
            var5 = 6;
            var5 = var13[var5];
            var5 = var12.bind(var0)(var5);
            var8 = var5.Logger;
            var5 = var8.prototype;
            var7 = Object.create(var5, {
                constructor: {
                    value: var8
                }
            });
            var18 = 'HTTPUtils';
            var19 = var7;
            var5 = new var19[var8](var18, var17);
            var5 = var5 instanceof Object ? var5 : var7;
            var _closure1_slot8 = var5;
            var8 = var4.Set;
            var5 = var8.prototype;
            var7 = Object.create(var5, {
                constructor: {
                    value: var8
                }
            });
            var18 = [502, 504, 507, 598, 599, 522, 523, 524];
            var19 = var7;
            var5 = new var19[var8](var18, var17);
            var5 = var5 instanceof Object ? var5 : var7;
            var _closure1_slot9 = var5;
            var5 = var4.Error;
            var6 = var6.bind(var0)(var5);
            var5 = function(arg0) { // Environment: var3
                var2 = function(arg0, arg1) { // Original name: HTTPResponseError, environment: var0
                    _fun6469: for (var _fun6469_ip = 0;;) switch (_fun6469_ip) {
                        case 0:
                            var0 = arg0;
                            var10 = this;
                            var7 = var0.method;
                            var6 = var0.url;
                            var5 = var0.ok;
                            var4 = var0.status;
                            var3 = var0.body;
                            var2 = var0.text;
                            var1 = var0.headers;
                            var13 = 1;
                            var26 = var13;
                            var0 = copyRestArgs(var26);
                            var12 = _closure1_slot4;
                            var8 = _closure2_slot0;
                            var9 = undefined;
                            var12 = var12.bind(var9)(var10, var8);
                            var15 = var6.replace;
                            var14 = /\d+/g;
                            var12 = 'xxx';
                            var24 = var15.bind(var6)(var14, var12);
                            var12 = var7.toUpperCase;
                            var26 = var12.bind(var7)();
                            var12 = global;
                            var14 = var12.HermesInternal;
                            var18 = var14.concat;
                            var27 = '';
                            var25 = ' ';
                            var23 = ' [';
                            var21 = ']';
                            var22 = var4;
                            var14 = var27[var18](var26, var25, var24, var23, var22, var21, var20);
                            var15 = new Array(1);
                            var15[0] = var14;
                            var26 = var15;
                            var25 = var0;
                            var24 = var13;
                            var0 = arraySpread(var26, var25, var24);
                            var0 = _closure1_slot6;
                            var14 = var0.bind(var9)(var8);
                            var8 = _closure1_slot5;
                            var0 = _closure1_slot14;
                            var0 = var0.bind(var9)();
                            if (var0) {
                                _fun6469_ip = 215;
                                continue _fun6469
                            }
                        case 202:
                            var0 = var14.apply;
                            var0 = var0.bind(var14)(var10, var15);
                            _fun6469_ip = 247;
                            continue _fun6469;
                        case 215:
                            var13 = var12.Reflect;
                            var12 = var13.construct;
                            var11 = _closure1_slot6;
                            var11 = var11.bind(var9)(var10);
                            var11 = var11.constructor;
                            var0 = var12.bind(var13)(var14, var15, var11);
                        case 247:
                            var0 = var8.bind(var9)(var10, var0);
                            var8 = 'HTTPResponseError';
                            var0.name = var8;
                            var0.method = var7;
                            var0.url = var6;
                            var0.ok = var5;
                            var0.status = var4;
                            var0.body = var3;
                            var0.text = var2;
                            var0.headers = var1;
                            return var0;
                    }
                };
                var _closure2_slot0 = var2;
                var4 = _closure1_slot7;
                var1 = undefined;
                var3 = arg0;
                var3 = var4.bind(var1)(var2, var3);
                var0 = _closure1_slot3;
                var0 = var0.bind(var1)(var2);
                return var0;
            };
            var10 = var5.bind(var0)(var6);
            var _closure1_slot10 = var10;
            var4 = var4.Map;
            var5 = var4.prototype;
            var5 = Object.create(var5, {
                constructor: {
                    value: var4
                }
            });
            var19 = var5;
            var4 = new var19[var4](var18);
            var4 = var4 instanceof Object ? var4 : var5;
            var _closure1_slot11 = var4;
            var5 = var14.bind;
            var11 = null;
            var4 = 'get';
            var9 = var5.bind(var14)(var11, var4);
            var5 = var14.bind;
            var4 = 'post';
            var8 = var5.bind(var14)(var11, var4);
            var5 = var14.bind;
            var4 = 'put';
            var7 = var5.bind(var14)(var11, var4);
            var5 = var14.bind;
            var4 = 'patch';
            var6 = var5.bind(var14)(var11, var4);
            var5 = var14.bind;
            var4 = 'del';
            var5 = var5.bind(var14)(var11, var4);
            var4 = {};
            var4.get = var9;
            var4.post = var8;
            var4.put = var7;
            var4.patch = var6;
            var4.del = var5;
            var14 = arg0;
            var14 = var14.isServerRendering;
            if (!var14) {
                _fun6444_ip = 476;
                continue _fun6444
            }
        case 459:
            var9 = function() { // Original name: noop, environment: var3
                var0 = global;
                var2 = var0.Promise;
                var1 = var2.resolve;
                var0 = {
                    'ok': true,
                    'status': 200,
                    'headers': null,
                    'body': null,
                    'text': ''
                };
                var3 = {};
                var0.headers = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var8 = var9;
            var7 = var8;
            var6 = var7;
            var5 = var6;
        case 476:
            var _closure1_slot12 = var11;
            var11 = function() { // Original name: awaitOnline, environment: var3
                var0 = global;
                var1 = var0.Promise;
                var0 = var1.resolve;
                var0 = var0.bind(var1)();
                return var0;
            };
            var _closure1_slot13 = var11;
            var11 = 11;
            var11 = var13[var11];
            var15 = var12.bind(var0)(var11);
            var14 = var15.fileFinishedImporting;
            var11 = '../discord_common/js/packages/http-utils/HTTPUtils.tsx';
            var11 = var14.bind(var15)(var11);
            var11 = 9;
            var14 = var13[var11];
            var14 = var12.bind(var0)(var14);
            var14 = var14.INVALID_FORM_BODY_ERROR_CODE;
            var2.INVALID_FORM_BODY_ERROR_CODE = var14;
            var14 = 10;
            var14 = var13[var14];
            var14 = var12.bind(var0)(var14);
            var14 = var14.convertSkemaError;
            var2.convertSkemaError = var14;
            var14 = 12;
            var14 = var13[var14];
            var14 = var12.bind(var0)(var14);
            var14 = var14.stringifyErrors;
            var2.stringifyErrors = var14;
            var14 = 13;
            var14 = var13[var14];
            var14 = var12.bind(var0)(var14);
            var14 = var14.APIError;
            var2.V6OrEarlierAPIError = var14;
            var11 = var13[var11];
            var11 = var12.bind(var0)(var11);
            var11 = var11.APIError;
            var2.V8APIError = var11;
            var2.HTTPResponseError = var10;
            var2.get = var9;
            var2.post = var8;
            var2.put = var7;
            var2.patch = var6;
            var2.del = var5;
            var2.HTTP = var4;
            var4 = function() { // Original name: getAPIBaseURL, environment: var3
                _fun6472: for (var _fun6472_ip = 0;;) switch (_fun6472_ip) {
                    case 0:
                        var3 = arguments[0];
                        var0 = undefined;
                        if (!(var3 === var0)) {
                            _fun6472_ip = 11;
                            continue _fun6472
                        }
                    case 9:
                        var3 = true;
                    case 11:
                        var2 = global;
                        var0 = var2.window;
                        var0 = var0.GLOBAL_ENV;
                        var1 = var0.API_ENDPOINT;
                        var0 = 'https:';
                        var1 = var0 + var1;
                        var0 = '';
                        if (!var3) {
                            _fun6472_ip = 86;
                            continue _fun6472
                        }
                    case 46:
                        var3 = var2.window;
                        var3 = var3.GLOBAL_ENV;
                        var4 = var3.API_VERSION;
                        var2 = var2.HermesInternal;
                        var3 = var2.concat;
                        var2 = '/v';
                        var0 = var3.bind(var2)(var4);
                    case 86:
                        var0 = var1 + var0;
                        return var0;
                }
            };
            var2.getAPIBaseURL = var4;
            var4 = function(arg0) { // Original name: setRequestPatch, environment: var3
                var0 = arg0;
                _closure1_slot12 = var0;
                var0 = undefined;
                return var0;
            };
            var2.setRequestPatch = var4;
            var3 = function(arg0) { // Original name: setAwaitOnline, environment: var3
                var0 = arg0;
                _closure1_slot13 = var0;
                var0 = undefined;
                return var0;
            };
            var2.setAwaitOnline = var3;
            var2.encodeProperties = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 162, 4, 508, 561, 562, 563, 2, 564, 565]);