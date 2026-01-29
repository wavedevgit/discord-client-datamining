// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function() { // Original name: RequestBase, environment: var0
        var0 = undefined;
        return var0;
    };
    var2 = arg4;
    var2.exports = var1;
    var3 = var1.prototype;
    var2 = function() { // Environment: var0
        var0 = this;
        var1 = global;
        var4 = var1.clearTimeout;
        var2 = var0._timer;
        var3 = undefined;
        var2 = var4.bind(var3)(var2);
        var4 = var1.clearTimeout;
        var2 = var0._responseTimeoutTimer;
        var2 = var4.bind(var3)(var2);
        var2 = var1.clearTimeout;
        var1 = var0._uploadTimeoutTimer;
        var1 = var2.bind(var3)(var1);
        var1 = delete var0._timer;
        var1 = delete var0._responseTimeoutTimer;
        var1 = delete var0._uploadTimeoutTimer;
        return var0;
    };
    var3.clearTimeout = var2;
    var3 = var1.prototype;
    var2 = function(arg0) { // Environment: var0
        var0 = this;
        var1 = arg0;
        var0._parser = var1;
        return var0;
    };
    var3.parse = var2;
    var3 = var1.prototype;
    var2 = function(arg0) { // Environment: var0
        var0 = this;
        var1 = arg0;
        var0._responseType = var1;
        return var0;
    };
    var3.responseType = var2;
    var3 = var1.prototype;
    var2 = function(arg0) { // Environment: var0
        var0 = this;
        var1 = arg0;
        var0._serializer = var1;
        return var0;
    };
    var3.serialize = var2;
    var3 = var1.prototype;
    var2 = function(arg0) { // Environment: var0
        _fun6721: for (var _fun6721_ip = 0;;) switch (_fun6721_ip) {
            case 0:
                var1 = arg0;
                var0 = this;
                if (!var1) {
                    _fun6721_ip = 183;
                    continue _fun6721
                }
            case 12:
                var3 = 'object';
                var2 = typeof var1;
                if (!(var3 === var2)) {
                    _fun6721_ip = 183;
                    continue _fun6721
                }
            case 26:
                var13 = var1;
                var9 = global;
                var8 = 'Unknown timeout option';
                var7 = 'upload';
                var6 = 'response';
                var5 = 'deadline';
                var3 = 0;
                var2 = undefined;
                for (var10 in var13)
                    case 64: {
                        case 73: var17 = var10;
                        var16 = _closure1_slot0;
                        var15 = _closure1_slot1;
                        var15 = var15[var3];
                        var16 = var16.bind(var2)(var15);
                        var15 = var16.hasOwn;
                        var15 = var15.bind(var16)(var1, var17);
                        if (!var15) {
                            _fun6721_ip = 64;
                            continue _fun6721
                        }
                        case 108: if (!(var5 !== var17)) {
                            _fun6721_ip = 167;
                            continue _fun6721
                        }
                        case 112: if (!(var6 !== var17)) {
                            _fun6721_ip = 153;
                            continue _fun6721
                        }
                        case 116: if (!(var7 !== var17)) {
                            _fun6721_ip = 139;
                            continue _fun6721
                        }
                        case 120: var16 = var9.console;
                        var15 = var16.warn;
                        var15 = var15.bind(var16)(var8, var17);
                        _fun6721_ip = 64;
                        continue _fun6721;
                        case 139: var15 = var1.upload;
                        var0._uploadTimeout = var15;
                        _fun6721_ip = 64;
                        continue _fun6721;
                        case 153: var15 = var1.response;
                        var0._responseTimeout = var15;
                        _fun6721_ip = 64;
                        continue _fun6721;
                        case 167: var15 = var1.deadline;
                        var0._timeout = var15;
                        _fun6721_ip = 64;
                        continue _fun6721;
                    }
            case 181:
                return var0;
            case 183:
                var0._timeout = var1;
                var1 = 0;
                var0._responseTimeout = var1;
                var0._uploadTimeout = var1;
                return var0;
        }
    };
    var3.timeout = var2;
    var3 = var1.prototype;
    var2 = function(arg0, arg1) { // Environment: var0
        _fun6722: for (var _fun6722_ip = 0;;) switch (_fun6722_ip) {
            case 0:
                var2 = arg0;
                var0 = this;
                var1 = undefined;
                var3 = arguments.length;
                var1 = 0;
                var3 = var1 !== var3;
                if (!var3) {
                    _fun6722_ip = 26;
                    continue _fun6722
                }
            case 20:
                var4 = true;
                var3 = var4 !== var2;
            case 26:
                if (var3) {
                    _fun6722_ip = 32;
                    continue _fun6722
                }
            case 29:
                var2 = 1;
            case 32:
                if (!(var2 <= var1)) {
                    _fun6722_ip = 38;
                    continue _fun6722
                }
            case 36:
                var2 = 0;
            case 38:
                var0._maxRetries = var2;
                var0._retries = var1;
                var1 = arg1;
                var0._retryCallback = var1;
                return var0;
        }
    };
    var3.retry = var2;
    var2 = global;
    var5 = var2.Set;
    var3 = var5.prototype;
    var4 = Object.create(var3, {
        constructor: {
            value: var5
        }
    });
    var6 = ['ETIMEDOUT', 'ECONNRESET', 'EADDRINUSE', 'ECONNREFUSED', 'EPIPE', 'ENOTFOUND', 'ENETUNREACH', 'EAI_AGAIN'];
    var7 = var4;
    var3 = new var7[var5](var6, var5);
    var3 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot2 = var3;
    var4 = var2.Set;
    var2 = var4.prototype;
    var3 = Object.create(var2, {
        constructor: {
            value: var4
        }
    });
    var6 = [408, 413, 429, 500, 502, 503, 504, 521, 522, 524];
    var7 = var3;
    var2 = new var7[var4](var6, var5);
    var2 = var2 instanceof Object ? var2 : var3;
    var _closure1_slot3 = var2;
    var3 = var1.prototype;
    var2 = function(arg0, arg1) { // Environment: var0
        _fun6723: for (var _fun6723_ip = 0;;) switch (_fun6723_ip) {
            case 0:
                var6 = this;
                var0 = arg0;
                var1 = arg1;
                var3 = undefined;
                var2 = var6._maxRetries;
                if (!var2) {
                    _fun6723_ip = 271;
                    continue _fun6723
                }
            case 23:
                var2 = var6._retries;
                var4 = parseFloat(var2);
                var2 = var4 + 1;
                var6._retries = var2;
                var2 = var6._maxRetries;
                if (!(!(var4 >= var2))) {
                    _fun6723_ip = 271;
                    continue _fun6723
                }
            case 54:
                var2 = var6._retryCallback;
                if (!var2) {
                    _fun6723_ip = 125;
                    continue _fun6723
                }
            case 63: // try_start_0
                var5 = var6._retryCallback;
                var4 = var0;
                var2 = var1;
                var4 = var5.bind(var6)(var4, var2);
                var3 = var4;
                var2 = true;
                if (!(var2 !== var4)) {
                    _fun6723_ip = 103;
                    continue _fun6723
                }
            case 90:
                var4 = var3;
                var3 = false;
                if (!(var3 !== var4)) {
                    _fun6723_ip = 101;
                    continue _fun6723
                }
            case 99: // try_end0
                _fun6723_ip = 125;
                continue _fun6723;
            case 101:
                return var3;
            case 103:
                return var2;
            case 105: // catch_target0
                CatchBlockStart(arg_register = 4);
                var2 = global;
                var3 = var2.console;
                var2 = var3.error;
                var2 = var2.bind(var3)(var4);
            case 125:
                var2 = var1;
                if (!var2) {
                    _fun6723_ip = 167;
                    continue _fun6723
                }
            case 131:
                var2 = var1;
                var2 = var2.status;
                if (!var2) {
                    _fun6723_ip = 167;
                    continue _fun6723
                }
            case 142:
                var3 = _closure1_slot3;
                var2 = var3.has;
                var1 = var1.status;
                var1 = var2.bind(var3)(var1);
                if (var1) {
                    _fun6723_ip = 267;
                    continue _fun6723
                }
            case 167:
                var1 = var0;
                if (!var1) {
                    _fun6723_ip = 251;
                    continue _fun6723
                }
            case 173:
                var1 = var0;
                var1 = var1.code;
                if (!var1) {
                    _fun6723_ip = 212;
                    continue _fun6723
                }
            case 184:
                var3 = _closure1_slot2;
                var2 = var3.has;
                var1 = var0;
                var1 = var1.code;
                var1 = var2.bind(var3)(var1);
                if (var1) {
                    _fun6723_ip = 263;
                    continue _fun6723
                }
            case 212:
                var1 = var0;
                var1 = var1.timeout;
                if (!var1) {
                    _fun6723_ip = 242;
                    continue _fun6723
                }
            case 224:
                var1 = var0;
                var2 = var1.code;
                var1 = 'ECONNABORTED';
                if (!(var1 !== var2)) {
                    _fun6723_ip = 259;
                    continue _fun6723
                }
            case 242:
                var0 = var0.crossDomain;
                if (var0) {
                    _fun6723_ip = 255;
                    continue _fun6723
                }
            case 251:
                var0 = false;
                return var0;
            case 255:
                var0 = true;
                return var0;
            case 259:
                var0 = true;
                return var0;
            case 263:
                var0 = true;
                return var0;
            case 267:
                var0 = true;
                return var0;
            case 271:
                var0 = false;
                return var0;
        }
    };
    var3._shouldRetry = var2;
    var3 = var1.prototype;
    var2 = function() { // Environment: var0
        _fun6724: for (var _fun6724_ip = 0;;) switch (_fun6724_ip) {
            case 0:
                var1 = this;
                var0 = var1.clearTimeout;
                var0 = var0.bind(var1)();
                var0 = var1.req;
                if (!var0) {
                    _fun6724_ip = 46;
                    continue _fun6724
                }
            case 22:
                var0 = null;
                var1.req = var0;
                var0 = var1.request;
                var0 = var0.bind(var1)();
                var1.req = var0;
            case 46:
                var0 = false;
                var1._aborted = var0;
                var1.timedout = var0;
                var0 = null;
                var1.timedoutError = var0;
                var0 = var1._end;
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var3._retry = var2;
    var3 = var1.prototype;
    var2 = function(arg0, arg1) { // Environment: var0
        _fun6725: for (var _fun6725_ip = 0;;) switch (_fun6725_ip) {
            case 0:
                var0 = this;
                var _closure2_slot0 = var0;
                var2 = var0._fullfilledPromise;
                if (var2) {
                    _fun6725_ip = 94;
                    continue _fun6725
                }
            case 18:
                var _closure2_slot1 = var0;
                var2 = var0._endCalled;
                if (!var2) {
                    _fun6725_ip = 55;
                    continue _fun6725
                }
            case 31:
                var2 = global;
                var4 = var2.console;
                var3 = var4.warn;
                var2 = 'Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises';
                var2 = var3.bind(var4)(var2);
            case 55:
                var2 = global;
                var3 = var2.Promise;
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var6 = function(arg0, arg1) { // Environment: var1
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var1 = arg1;
                    var _closure3_slot1 = var1;
                    var5 = _closure2_slot1;
                    var4 = var5.on;
                    var3 = 'abort';
                    var2 = function() { // Environment: var0
                        _fun6727: for (var _fun6727_ip = 0;;) switch (_fun6727_ip) {
                            case 0:
                                var1 = _closure2_slot0;
                                var1 = var1._maxRetries;
                                if (!var1) {
                                    _fun6727_ip = 39;
                                    continue _fun6727
                                }
                            case 16:
                                var1 = _closure2_slot0;
                                var2 = var1._maxRetries;
                                var1 = var1._retries;
                                if (!(!(var2 > var1))) {
                                    _fun6727_ip = 189;
                                    continue _fun6727
                                }
                            case 39:
                                var1 = _closure2_slot0;
                                var1 = var1.timedout;
                                if (!var1) {
                                    _fun6727_ip = 65;
                                    continue _fun6727
                                }
                            case 52:
                                var1 = _closure2_slot0;
                                var1 = var1.timedoutError;
                                if (var1) {
                                    _fun6727_ip = 165;
                                    continue _fun6727
                                }
                            case 65:
                                var1 = global;
                                var3 = var1.Error;
                                var1 = var3.prototype;
                                var2 = Object.create(var1, {
                                    constructor: {
                                        value: var3
                                    }
                                });
                                var4 = 'Aborted';
                                var5 = var2;
                                var1 = new var5[var3](var4, var3);
                                var3 = var1 instanceof Object ? var1 : var2;
                                var1 = 'ABORTED';
                                var3.code = var1;
                                var1 = _closure2_slot0;
                                var2 = var1.status;
                                var3.status = var2;
                                var2 = var1.method;
                                var3.method = var2;
                                var1 = var1.url;
                                var3.url = var1;
                                var2 = _closure3_slot1;
                                var1 = undefined;
                                var1 = var2.bind(var1)(var3);
                                _fun6727_ip = 189;
                                continue _fun6727;
                            case 165:
                                var2 = _closure3_slot1;
                                var0 = _closure2_slot0;
                                var1 = var0.timedoutError;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                            case 189:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var2 = var4.bind(var5)(var3, var2);
                    var2 = _closure2_slot1;
                    var1 = var2.end;
                    var0 = function(arg0, arg1) { // Environment: var0
                        _fun6728: for (var _fun6728_ip = 0;;) switch (_fun6728_ip) {
                            case 0:
                                var2 = arg0;
                                if (var2) {
                                    _fun6728_ip = 25;
                                    continue _fun6728
                                }
                            case 9:
                                var4 = _closure3_slot0;
                                var3 = undefined;
                                var1 = arg1;
                                var1 = var4.bind(var3)(var1);
                                _fun6728_ip = 36;
                                continue _fun6728;
                            case 25:
                                var1 = _closure3_slot1;
                                var0 = undefined;
                                var0 = var1.bind(var0)(var2);
                            case 36:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var7 = var2;
                var1 = new var7[var3](var6, var5);
                var1 = var1 instanceof Object ? var1 : var2;
                var0._fullfilledPromise = var1;
            case 94:
                var3 = var0._fullfilledPromise;
                var2 = var3.then;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3.then = var2;
    var3 = var1.prototype;
    var2 = function(arg0) { // Environment: var0
        var3 = this;
        var2 = var3.then;
        var1 = undefined;
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3.catch = var2;
    var3 = var1.prototype;
    var2 = function(arg0) { // Environment: var0
        var0 = this;
        var2 = arg0;
        var1 = undefined;
        var1 = var2.bind(var1)(var0);
        return var0;
    };
    var3.use = var2;
    var3 = var1.prototype;
    var2 = function(arg0) { // Environment: var0
        _fun6731: for (var _fun6731_ip = 0;;) switch (_fun6731_ip) {
            case 0:
                var1 = arg0;
                var0 = this;
                var3 = 'function';
                var2 = typeof var1;
                if (!(var3 === var2)) {
                    _fun6731_ip = 25;
                    continue _fun6731
                }
            case 17:
                var0._okCallback = var1;
                return var0;
            case 25:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var4 = 'Callback required';
                var5 = var1;
                var0 = new var5[var2](var4, var3);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var3.ok = var2;
    var3 = var1.prototype;
    var2 = function(arg0) { // Environment: var0
        _fun6732: for (var _fun6732_ip = 0;;) switch (_fun6732_ip) {
            case 0:
                var4 = arg0;
                var3 = this;
                var1 = !var4;
                var0 = !var1;
                if (var1) {
                    _fun6732_ip = 70;
                    continue _fun6732
                }
            case 15:
                var1 = var3._okCallback;
                if (var1) {
                    _fun6732_ip = 56;
                    continue _fun6732
                }
            case 24:
                var2 = var4.status;
                var1 = 200;
                var1 = var2 >= var1;
                if (!var1) {
                    _fun6732_ip = 54;
                    continue _fun6732
                }
            case 39:
                var5 = var4.status;
                var2 = 300;
                var1 = var5 < var2;
            case 54:
                _fun6732_ip = 67;
                continue _fun6732;
            case 56:
                var2 = var3._okCallback;
                var1 = var2.bind(var3)(var4);
            case 67:
                var0 = var1;
            case 70:
                return var0;
        }
    };
    var3._isResponseOK = var2;
    var3 = var1.prototype;
    var2 = function(arg0) { // Environment: var0
        var2 = arg0;
        var0 = this;
        var1 = var0._header;
        var0 = var2.toLowerCase;
        var0 = var0.bind(var2)();
        var0 = var1[var0];
        return var0;
    };
    var3.get = var2;
    var3 = var1.prototype;
    var2 = var1.prototype;
    var2 = var2.get;
    var3.getHeader = var2;
    var3 = var1.prototype;
    var2 = function(arg0, arg1) { // Environment: var0
        _fun6734: for (var _fun6734_ip = 0;;) switch (_fun6734_ip) {
            case 0:
                var9 = arg0;
                var2 = arg1;
                var0 = this;
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var7 = 0;
                var1 = var1[var7];
                var6 = undefined;
                var3 = var3.bind(var6)(var1);
                var1 = var3.isObject;
                var1 = var1.bind(var3)(var9);
                if (var1) {
                    _fun6734_ip = 78;
                    continue _fun6734
                }
            case 47:
                var3 = var0._header;
                var1 = var9.toLowerCase;
                var1 = var1.bind(var9)();
                var3[var1] = var2;
                var1 = var0.header;
                var1[var9] = var2;
                return var0;
            case 78:
                var4 = var9;
                for (var1 in var4)
                    case 89: {
                        case 98: var12 = var1;
                        var11 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var10 = var10[var7];
                        var11 = var11.bind(var6)(var10);
                        var10 = var11.hasOwn;
                        var10 = var10.bind(var11)(var9, var12);
                        if (!var10) {
                            _fun6734_ip = 89;
                            continue _fun6734
                        }
                        case 133: var11 = var0.set;
                        var10 = var9[var12];
                        var10 = var11.bind(var0)(var12, var10);
                        _fun6734_ip = 89;
                        continue _fun6734;
                    }
            case 150:
                return var0;
        }
    };
    var3.set = var2;
    var3 = var1.prototype;
    var2 = function(arg0) { // Environment: var0
        var2 = arg0;
        var0 = this;
        var3 = var0._header;
        var1 = var2.toLowerCase;
        var1 = var1.bind(var2)();
        var1 = delete var3[var1];
        var1 = var0.header;
        var1 = delete var1[var2];
        return var0;
    };
    var3.unset = var2;
    var3 = var1.prototype;
    var2 = function(arg0, arg1, arg2) { // Environment: var0
        _fun6736: for (var _fun6736_ip = 0;;) switch (_fun6736_ip) {
            case 0:
                var9 = arg0;
                var10 = arg1;
                var5 = arg2;
                var0 = this;
                var2 = null;
                if (!(var2 != var9)) {
                    _fun6736_ip = 380;
                    continue _fun6736
                }
            case 21:
                var1 = var0._data;
                if (var1) {
                    _fun6736_ip = 344;
                    continue _fun6736
                }
            case 33:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var7 = 0;
                var1 = var1[var7];
                var6 = undefined;
                var3 = var3.bind(var6)(var1);
                var1 = var3.isObject;
                var1 = var1.bind(var3)(var9);
                if (var1) {
                    _fun6736_ip = 269;
                    continue _fun6736
                }
            case 74:
                var1 = global;
                var4 = var1.Array;
                var3 = var4.isArray;
                var3 = var3.bind(var4)(var10);
                if (var3) {
                    _fun6736_ip = 194;
                    continue _fun6736
                }
            case 95:
                if (!(var2 != var10)) {
                    _fun6736_ip = 160;
                    continue _fun6736
                }
            case 99:
                var3 = 'boolean';
                var2 = typeof var10;
                var4 = var10;
                if (!(var3 === var2)) {
                    _fun6736_ip = 124;
                    continue _fun6736
                }
            case 113:
                var2 = var1.String;
                var4 = var2.bind(var6)(var10);
            case 124:
                var2 = var0._getFormData;
                var3 = var2.bind(var0)();
                var2 = var3.append;
                if (var5) {
                    _fun6736_ip = 151;
                    continue _fun6736
                }
            case 143:
                var11 = var2.bind(var3)(var9, var4);
                _fun6736_ip = 158;
                continue _fun6736;
            case 151:
                var2 = var2.bind(var3)(var9, var4, var5);
            case 158:
                return var0;
            case 160:
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var16 = '.field(name, val) val can not be empty';
                var17 = var2;
                var1 = new var17[var3](var16, var15);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 194:
                var4 = var10;
                for (var1 in var4)
                    case 205: {
                        case 214: var11 = var1;
                        var13 = _closure1_slot0;
                        var12 = _closure1_slot1;
                        var12 = var12[var7];
                        var13 = var13.bind(var6)(var12);
                        var12 = var13.hasOwn;
                        var12 = var12.bind(var13)(var10, var11);
                        if (!var12) {
                            _fun6736_ip = 205;
                            continue _fun6736
                        }
                        case 249: var12 = var0.field;
                        var11 = var10[var11];
                        var11 = var12.bind(var0)(var9, var11);
                        _fun6736_ip = 205;
                        continue _fun6736;
                    }
            case 267:
                return var0;
            case 269:
                var4 = var9;
                for (var1 in var4)
                    case 280: {
                        case 289: var12 = var1;
                        var11 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var10 = var10[var7];
                        var11 = var11.bind(var6)(var10);
                        var10 = var11.hasOwn;
                        var10 = var10.bind(var11)(var9, var12);
                        if (!var10) {
                            _fun6736_ip = 280;
                            continue _fun6736
                        }
                        case 324: var11 = var0.field;
                        var10 = var9[var12];
                        var10 = var11.bind(var0)(var12, var10);
                        _fun6736_ip = 280;
                        continue _fun6736;
                    }
            case 342:
                return var0;
            case 344:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var16 = ".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()";
                var17 = var1;
                var0 = new var17[var2](var16, var15);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 380:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var16 = '.field(name, val) name can not be empty';
                var17 = var1;
                var0 = new var17[var2](var16, var15);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var3.field = var2;
    var3 = var1.prototype;
    var2 = function() { // Environment: var0
        _fun6737: for (var _fun6737_ip = 0;;) switch (_fun6737_ip) {
            case 0:
                var0 = this;
                var1 = var0._aborted;
                if (var1) {
                    _fun6737_ip = 247;
                    continue _fun6737
                }
            case 15:
                var1 = true;
                var0._aborted = var1;
                var1 = var0.xhr;
                if (!var1) {
                    _fun6737_ip = 48;
                    continue _fun6737
                }
            case 32:
                var2 = var0.xhr;
                var1 = var2.abort;
                var1 = var1.bind(var2)();
            case 48:
                var1 = var0.req;
                if (!var1) {
                    _fun6737_ip = 186;
                    continue _fun6737
                }
            case 60:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var5 = 1;
                var1 = var1[var5];
                var4 = undefined;
                var8 = var3.bind(var4)(var1);
                var7 = var8.gte;
                var1 = global;
                var3 = var1.process;
                var6 = var3.version;
                var3 = 'v13.0.0';
                var3 = var7.bind(var8)(var6, var3);
                if (!var3) {
                    _fun6737_ip = 170;
                    continue _fun6737
                }
            case 120:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var5 = var3.bind(var4)(var2);
                var4 = var5.lt;
                var2 = var1.process;
                var3 = var2.version;
                var2 = 'v14.0.0';
                var2 = var4.bind(var5)(var3, var2);
                if (var2) {
                    _fun6737_ip = 213;
                    continue _fun6737
                }
            case 170:
                var3 = var0.req;
                var2 = var3.abort;
                var2 = var2.bind(var3)();
            case 186:
                var2 = var0.clearTimeout;
                var2 = var2.bind(var0)();
                var3 = var0.emit;
                var2 = 'abort';
                var2 = var3.bind(var0)(var2);
                return var0;
            case 213:
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var10 = 'Superagent does not work in v13 properly with abort() due to Node.js core changes';
                var11 = var2;
                var1 = new var11[var3](var10, var9);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 247:
                return var0;
        }
    };
    var3.abort = var2;
    var3 = var1.prototype;
    var2 = function(arg0, arg1, arg2, arg3) { // Environment: var0
        _fun6738: for (var _fun6738_ip = 0;;) switch (_fun6738_ip) {
            case 0:
                var7 = arg0;
                var6 = arg1;
                var0 = this;
                var1 = arg2;
                var2 = var1.type;
                var1 = 'basic';
                if (!(var1 !== var2)) {
                    _fun6738_ip = 101;
                    continue _fun6738
                }
            case 25:
                var1 = 'auto';
                if (!(var1 !== var2)) {
                    _fun6738_ip = 87;
                    continue _fun6738
                }
            case 33:
                var1 = 'bearer';
                if (!(var1 === var2)) {
                    _fun6738_ip = 176;
                    continue _fun6738
                }
            case 46:
                var3 = var0.set;
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = 'Bearer ';
                var2 = var2.bind(var1)(var7);
                var1 = 'Authorization';
                var1 = var3.bind(var0)(var1, var2);
                _fun6738_ip = 176;
                continue _fun6738;
            case 87:
                var0.username = var7;
                var0.password = var6;
                _fun6738_ip = 176;
                continue _fun6738;
            case 101:
                var3 = var0.set;
                var1 = global;
                var2 = var1.HermesInternal;
                var5 = var2.concat;
                var4 = '';
                var2 = ':';
                var5 = var5.bind(var4)(var7, var2, var6);
                var4 = arg3;
                var2 = undefined;
                var4 = var4.bind(var2)(var5);
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = 'Basic ';
                var2 = var2.bind(var1)(var4);
                var1 = 'Authorization';
                var1 = var3.bind(var0)(var1, var2);
            case 176:
                return var0;
        }
    };
    var3._auth = var2;
    var3 = var1.prototype;
    var2 = function(arg0) { // Environment: var0
        _fun6739: for (var _fun6739_ip = 0;;) switch (_fun6739_ip) {
            case 0:
                var1 = arg0;
                var0 = this;
                var2 = undefined;
                if (!(var2 === var1)) {
                    _fun6739_ip = 14;
                    continue _fun6739
                }
            case 12:
                var1 = true;
            case 14:
                var0._withCredentials = var1;
                return var0;
        }
    };
    var3.withCredentials = var2;
    var3 = var1.prototype;
    var2 = function(arg0) { // Environment: var0
        var0 = this;
        var1 = arg0;
        var0._maxRedirects = var1;
        return var0;
    };
    var3.redirects = var2;
    var3 = var1.prototype;
    var2 = function(arg0) { // Environment: var0
        _fun6741: for (var _fun6741_ip = 0;;) switch (_fun6741_ip) {
            case 0:
                var1 = arg0;
                var0 = this;
                var3 = 'number';
                var2 = typeof var1;
                if (!(var3 === var2)) {
                    _fun6741_ip = 25;
                    continue _fun6741
                }
            case 17:
                var0._maxResponseSize = var1;
                return var0;
            case 25:
                var0 = global;
                var2 = var0.TypeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var4 = 'Invalid argument';
                var5 = var1;
                var0 = new var5[var2](var4, var3);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var3.maxResponseSize = var2;
    var3 = var1.prototype;
    var2 = function() { // Environment: var0
        var1 = this;
        var0 = {};
        var2 = var1.method;
        var0.method = var2;
        var2 = var1.url;
        var0.url = var2;
        var2 = var1._data;
        var0.data = var2;
        var1 = var1._header;
        var0.headers = var1;
        return var0;
    };
    var3.toJSON = var2;
    var3 = var1.prototype;
    var2 = function(arg0) { // Environment: var0
        _fun6743: for (var _fun6743_ip = 0;;) switch (_fun6743_ip) {
            case 0:
                var4 = arg0;
                var0 = this;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var12 = 0;
                var1 = var1[var12];
                var11 = undefined;
                var2 = var2.bind(var11)(var1);
                var1 = var2.isObject;
                var1 = var1.bind(var2)(var4);
                var2 = var0._header;
                var10 = var2["content-type"];
                var2 = var0._formData;
                if (var2) {
                    _fun6743_ip = 651;
                    continue _fun6743
                }
            case 65:
                if (!var1) {
                    _fun6743_ip = 134;
                    continue _fun6743
                }
            case 68:
                var2 = var0._data;
                if (var2) {
                    _fun6743_ip = 134;
                    continue _fun6743
                }
            case 77:
                var2 = global;
                var3 = var2.Array;
                var2 = var3.isArray;
                var2 = var2.bind(var3)(var4);
                if (var2) {
                    _fun6743_ip = 122;
                    continue _fun6743
                }
            case 98:
                var2 = var0._isHost;
                var2 = var2.bind(var0)(var4);
                if (var2) {
                    _fun6743_ip = 169;
                    continue _fun6743
                }
            case 112:
                var2 = {};
                var0._data = var2;
                _fun6743_ip = 169;
                continue _fun6743;
            case 122:
                var2 = new Array(0);
                var0._data = var2;
                _fun6743_ip = 169;
                continue _fun6743;
            case 134:
                if (!var4) {
                    _fun6743_ip = 169;
                    continue _fun6743
                }
            case 137:
                var2 = var0._data;
                if (!var2) {
                    _fun6743_ip = 169;
                    continue _fun6743
                }
            case 146:
                var3 = var0._isHost;
                var2 = var0._data;
                var2 = var3.bind(var0)(var2);
                if (var2) {
                    _fun6743_ip = 615;
                    continue _fun6743
                }
            case 169:
                if (!var1) {
                    _fun6743_ip = 212;
                    continue _fun6743
                }
            case 172:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var5 = var3.bind(var11)(var2);
                var3 = var5.isObject;
                var2 = var0._data;
                var2 = var3.bind(var5)(var2);
                if (var2) {
                    _fun6743_ip = 429;
                    continue _fun6743
                }
            case 212:
                var3 = typeof var4;
                var2 = 'bigint';
                if (!(var2 !== var3)) {
                    _fun6743_ip = 393;
                    continue _fun6743
                }
            case 226:
                var2 = 'string';
                if (!(var2 !== var3)) {
                    _fun6743_ip = 248;
                    continue _fun6743
                }
            case 234:
                var0._data = var4;
                var2 = var10;
                _fun6743_ip = 573;
                continue _fun6743;
            case 248:
                if (var10) {
                    _fun6743_ip = 265;
                    continue _fun6743
                }
            case 251:
                var5 = var0.type;
                var3 = 'form';
                var3 = var5.bind(var0)(var3);
            case 265:
                var3 = var0._header;
                var6 = var3["content-type"];
                var3 = var6;
                if (!var3) {
                    _fun6743_ip = 303;
                    continue _fun6743
                }
            case 283:
                var5 = var6.toLowerCase;
                var6 = var5.bind(var6)();
                var5 = var6.trim;
                var3 = var5.bind(var6)();
            case 303:
                var5 = 'application/x-www-form-urlencoded';
                if (!(var5 !== var3)) {
                    _fun6743_ip = 330;
                    continue _fun6743
                }
            case 311:
                var5 = var0._data;
                if (var5) {
                    _fun6743_ip = 324;
                    continue _fun6743
                }
            case 320:
                var5 = '';
            case 324:
                var5 = var5 + var4;
                _fun6743_ip = 379;
                continue _fun6743;
            case 330:
                var7 = var0._data;
                var6 = var4;
                if (!var7) {
                    _fun6743_ip = 376;
                    continue _fun6743
                }
            case 342:
                var14 = var0._data;
                var7 = global;
                var7 = var7.HermesInternal;
                var9 = var7.concat;
                var8 = '';
                var7 = '&';
                var6 = var9.bind(var8)(var14, var7, var4);
            case 376:
                var5 = var6;
            case 379:
                var0._data = var5;
                var2 = var3;
                _fun6743_ip = 573;
                continue _fun6743;
            case 393:
                var3 = global;
                var6 = var3.Error;
                var3 = var6.prototype;
                var5 = Object.create(var3, {
                    constructor: {
                        value: var6
                    }
                });
                var20 = 'Cannot send value of type BigInt';
                var21 = var5;
                var3 = new var21[var6](var20, var19);
                var3 = var3 instanceof Object ? var3 : var5;
                throw var3;
            case 429:
                var8 = var4;
                var3 = 'bigint';
                var2 = var10;
                for (var5 in var8)
                    case 450: {
                        var2 = var10;
                        case 462: var16 = var5;
                        var14 = var4[var16];
                        var14 = typeof var14;
                        if (!(var3 === var14)) {
                            _fun6743_ip = 525;
                            continue _fun6743
                        }
                        case 476: var14 = var4[var16];
                        var14 = var14.toJSON;
                        if (var14) {
                            _fun6743_ip = 525;
                            continue _fun6743
                        }
                        case 489: var14 = global;
                        var17 = var14.Error;
                        var14 = var17.prototype;
                        var15 = Object.create(var14, {
                            constructor: {
                                value: var17
                            }
                        });
                        var20 = 'Cannot serialize BigInt value to json';
                        var21 = var15;
                        var14 = new var21[var17](var20, var19);
                        var14 = var14 instanceof Object ? var14 : var15;
                        throw var14;
                        case 525: var15 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var14 = var14[var12];
                        var15 = var15.bind(var11)(var14);
                        var14 = var15.hasOwn;
                        var14 = var14.bind(var15)(var4, var16);
                        if (!var14) {
                            _fun6743_ip = 450;
                            continue _fun6743
                        }
                        case 557: var15 = var0._data;
                        var14 = var4[var16];
                        var15[var16] = var14;
                        _fun6743_ip = 450;
                        continue _fun6743;
                    }
            case 573:
                var1 = !var1;
                if (var1) {
                    _fun6743_ip = 590;
                    continue _fun6743
                }
            case 579:
                var3 = var0._isHost;
                var1 = var3.bind(var0)(var4);
            case 590:
                if (var1) {
                    _fun6743_ip = 596;
                    continue _fun6743
                }
            case 593:
                var1 = var2;
            case 596:
                if (var1) {
                    _fun6743_ip = 613;
                    continue _fun6743
                }
            case 599:
                var2 = var0.type;
                var1 = 'json';
                var1 = var2.bind(var0)(var1);
            case 613:
                return var0;
            case 615:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var20 = "Can't merge these send calls";
                var21 = var1;
                var0 = new var21[var2](var20, var19);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 651:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var20 = ".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()";
                var21 = var1;
                var0 = new var21[var2](var20, var19);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var3.send = var2;
    var3 = var1.prototype;
    var2 = function(arg0) { // Environment: var0
        _fun6744: for (var _fun6744_ip = 0;;) switch (_fun6744_ip) {
            case 0:
                var2 = arg0;
                var0 = this;
                var1 = undefined;
                var1 = var1 === var2;
                if (var1) {
                    _fun6744_ip = 18;
                    continue _fun6744
                }
            case 15:
                var1 = var2;
            case 18:
                var0._sort = var1;
                return var0;
        }
    };
    var3.sortQuery = var2;
    var3 = var1.prototype;
    var2 = function() { // Environment: var0
        _fun6745: for (var _fun6745_ip = 0;;) switch (_fun6745_ip) {
            case 0:
                var1 = this;
                var2 = var1._query;
                var0 = var2.join;
                var4 = '&';
                var3 = var0.bind(var2)(var4);
                if (!var3) {
                    _fun6745_ip = 70;
                    continue _fun6745
                }
            case 26:
                var2 = var1.url;
                var6 = var1.url;
                var5 = var6.includes;
                var0 = '?';
                var5 = var5.bind(var6)(var0);
                if (!var5) {
                    _fun6745_ip = 56;
                    continue _fun6745
                }
            case 53:
                var0 = var4;
            case 56:
                var0 = var0 + var3;
                var0 = var2 + var0;
                var1.url = var0;
            case 70:
                var0 = var1._query;
                var7 = 0;
                var0.length = var7;
                var0 = var1._sort;
                if (!var0) {
                    _fun6745_ip = 238;
                    continue _fun6745
                }
            case 96:
                var3 = var1.url;
                var0 = var3.indexOf;
                var2 = '?';
                var6 = var0.bind(var3)(var2);
                if (!(var6 >= var7)) {
                    _fun6745_ip = 238;
                    continue _fun6745
                }
            case 120:
                var5 = var1.url;
                var3 = var5.slice;
                var0 = 1;
                var0 = var6 + var0;
                var3 = var3.bind(var5)(var0);
                var0 = var3.split;
                var3 = var0.bind(var3)(var4);
                var0 = var1._sort;
                var5 = 'function';
                var0 = typeof var0;
                if (!(var5 !== var0)) {
                    _fun6745_ip = 181;
                    continue _fun6745
                }
            case 169:
                var0 = var3.sort;
                var0 = var0.bind(var3)();
                _fun6745_ip = 198;
                continue _fun6745;
            case 181:
                var5 = var3.sort;
                var0 = var1._sort;
                var0 = var5.bind(var3)(var0);
            case 198:
                var5 = var1.url;
                var0 = var5.slice;
                var0 = var0.bind(var5)(var7, var6);
                var2 = var0 + var2;
                var0 = var3.join;
                var0 = var0.bind(var3)(var4);
                var0 = var2 + var0;
                var1.url = var0;
            case 238:
                var0 = undefined;
                return var0;
        }
    };
    var3._finalizeQueryString = var2;
    var3 = var1.prototype;
    var2 = function() { // Environment: var0
        var0 = global;
        var2 = var0.console;
        var1 = var2.warn;
        var0 = 'Unsupported';
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var3._appendQueryString = var2;
    var3 = var1.prototype;
    var2 = function(arg0, arg1, arg2) { // Environment: var0
        _fun6747: for (var _fun6747_ip = 0;;) switch (_fun6747_ip) {
            case 0:
                var0 = arg1;
                var2 = this;
                var1 = var2._aborted;
                if (var1) {
                    _fun6747_ip = 142;
                    continue _fun6747
                }
            case 18:
                var1 = global;
                var4 = var1.Error;
                var3 = arg0;
                var6 = var3 + var0;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var3 = '';
                var1 = 'ms exceeded';
                var8 = var5.bind(var3)(var6, var1);
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var9 = var3;
                var1 = new var9[var4](var8, var7);
                var1 = var1 instanceof Object ? var1 : var3;
                var1.timeout = var0;
                var0 = 'ECONNABORTED';
                var1.code = var0;
                var0 = arg2;
                var1.errno = var0;
                var0 = true;
                var2.timedout = var0;
                var2.timedoutError = var1;
                var0 = var2.abort;
                var0 = var0.bind(var2)();
                var0 = var2.callback;
                var0 = var0.bind(var2)(var1);
            case 142:
                var0 = undefined;
                return var0;
        }
    };
    var3._timeoutError = var2;
    var1 = var1.prototype;
    var0 = function() { // Environment: var0
        _fun6748: for (var _fun6748_ip = 0;;) switch (_fun6748_ip) {
            case 0:
                var1 = this;
                var _closure2_slot0 = var1;
                var2 = var1._timeout;
                if (!var2) {
                    _fun6748_ip = 27;
                    continue _fun6748
                }
            case 18:
                var3 = var1._timer;
                var2 = !var3;
            case 27:
                if (!var2) {
                    _fun6748_ip = 63;
                    continue _fun6748
                }
            case 30:
                var2 = global;
                var5 = var2.setTimeout;
                var4 = var1._timeout;
                var3 = undefined;
                var2 = function() { // Environment: var0
                    var4 = _closure2_slot0;
                    var3 = var4._timeoutError;
                    var2 = var4._timeout;
                    var1 = 'Timeout of ';
                    var0 = 'ETIME';
                    var0 = var3.bind(var4)(var1, var2, var0);
                    var0 = undefined;
                    return var0;
                };
                var2 = var5.bind(var3)(var2, var4);
                var1._timer = var2;
            case 63:
                var2 = var1._responseTimeout;
                if (!var2) {
                    _fun6748_ip = 81;
                    continue _fun6748
                }
            case 72:
                var3 = var1._responseTimeoutTimer;
                var2 = !var3;
            case 81:
                if (!var2) {
                    _fun6748_ip = 117;
                    continue _fun6748
                }
            case 84:
                var2 = global;
                var4 = var2.setTimeout;
                var3 = var1._responseTimeout;
                var2 = undefined;
                var0 = function() { // Environment: var0
                    var4 = _closure2_slot0;
                    var3 = var4._timeoutError;
                    var2 = var4._responseTimeout;
                    var1 = 'Response timeout of ';
                    var0 = 'ETIMEDOUT';
                    var0 = var3.bind(var4)(var1, var2, var0);
                    var0 = undefined;
                    return var0;
                };
                var0 = var4.bind(var2)(var0, var3);
                var1._responseTimeoutTimer = var0;
            case 117:
                var0 = undefined;
                return var0;
        }
    };
    var1._setTimeouts = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [509, 553]);