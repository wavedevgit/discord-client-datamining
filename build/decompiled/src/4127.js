// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var6;
    var3 = function(arg0) { // Original name: load, environment: var4
        _fun37824: for (var _fun37824_ip = 0;;) switch (_fun37824_ip) {
            case 0:
                var5 = arg0;
                var4 = undefined;
                var2 = undefined;
                var3 = arguments.length;
                var0 = 1;
                if (!(var3 > var0)) {
                    _fun37824_ip = 27;
                    continue _fun37824
                }
            case 19:
                var3 = arguments[var0];
                if (!(var4 === var3)) {
                    _fun37824_ip = 31;
                    continue _fun37824
                }
            case 27:
                var3 = {};
                _fun37824_ip = 35;
                continue _fun37824;
            case 31:
                var3 = arguments[var0];
            case 35:
                var _closure2_slot0 = var3;
                var2 = 'string';
                var0 = typeof var5;
                if (!(var2 !== var0)) {
                    _fun37824_ip = 135;
                    continue _fun37824
                }
            case 50:
                var2 = global;
                var0 = var2.File;
                var6 = 'undefined';
                var0 = typeof var0;
                var0 = var6 !== var0;
                if (!var0) {
                    _fun37824_ip = 82;
                    continue _fun37824
                }
            case 72:
                var2 = var2.File;
                var0 = var5 instanceof var2;
            case 82:
                if (var0) {
                    _fun37824_ip = 100;
                    continue _fun37824
                }
            case 85:
                var0 = _closure1_slot3;
                var0 = var0.bind(var4)(var5, var3);
                _fun37824_ip = 133;
                continue _fun37824;
            case 100:
                var2 = true;
                var3.async = var2;
                var2 = function(arg0) { // Original name: loadFileObject, environment: var1
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var1 = global;
                    var2 = var1.Promise;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var3 = function(arg0, arg1) { // Environment: var0
                        var1 = arg0;
                        var _closure4_slot0 = var1;
                        var1 = arg1;
                        var _closure4_slot1 = var1;
                        var1 = global;
                        var1 = var1.FileReader;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var4 = var2;
                        var1 = new var4[var1](var3);
                        var2 = var1 instanceof Object ? var1 : var2;
                        var _closure4_slot2 = var2;
                        var1 = function(arg0) { // Environment: var0
                            var2 = _closure4_slot0;
                            var0 = arg0;
                            var0 = var0.target;
                            var1 = var0.result;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var2.onload = var1;
                        var0 = function() { // Environment: var0
                            var2 = _closure4_slot1;
                            var0 = _closure4_slot2;
                            var1 = var0.error;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var2.onerror = var0;
                        var1 = var2.readAsArrayBuffer;
                        var0 = _closure3_slot0;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var4 = var1;
                    var0 = new var4[var2](var3, var2);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
                };
                var7 = var2.bind(var4)(var5);
                var6 = var7.then;
                var2 = function(arg0) { // Environment: var1
                    var3 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var3.bind(var1)(var0, var2);
                    return var0;
                };
                var0 = var6.bind(var7)(var2);
            case 133:
                _fun37824_ip = 169;
                continue _fun37824;
            case 135:
                var2 = true;
                var3.async = var2;
                var2 = function(arg0, arg1) { // Original name: loadFile, environment: var1
                    _fun37825: for (var _fun37825_ip = 0;;) switch (_fun37825_ip) {
                        case 0:
                            var4 = arg0;
                            var3 = arg1;
                            var2 = /^\w+:\\/\\ //;
                            var0 = var2.test;
                            var0 = var0.bind(var2)(var4);
                            if (var0) {
                                _fun37825_ip = 134;
                                continue _fun37825
                            }
                        case 35:
                            var2 = /^data:[^;,]*(;base64)?,/;
                            var0 = var2.test;
                            var0 = var0.bind(var2)(var4);
                            if (var0) {
                                _fun37825_ip = 77;
                                continue _fun37825
                            }
                        case 62:
                            var2 = function(arg0) { // Original name: loadLocalFile, environment: var1
                                _fun37835: for (var _fun37835_ip = 0;;) switch (_fun37835_ip) {
                                    case 0:
                                        var4 = undefined;
                                        var3 = undefined;
                                        var1 = arg0;
                                        var _closure4_slot0 = var1;
                                        var1 = arguments.length;
                                        var2 = 1;
                                        if (!(var1 > var2)) {
                                            _fun37835_ip = 31;
                                            continue _fun37835
                                        }
                                    case 23:
                                        var1 = arguments[var2];
                                        if (!(var4 === var1)) {
                                            _fun37835_ip = 35;
                                            continue _fun37835
                                        }
                                    case 31:
                                        var1 = {};
                                        _fun37835_ip = 39;
                                        continue _fun37835;
                                    case 35:
                                        var1 = arguments[var2];
                                    case 39:
                                        var1 = var1.length;
                                        var _closure4_slot1 = var1;
                                        var1 = global;
                                        var2 = var1.Promise;
                                        var1 = var2.prototype;
                                        var1 = Object.create(var1, {
                                            constructor: {
                                                value: var2
                                            }
                                        });
                                        var5 = function(arg0, arg1) { // Environment: var0
                                            _fun37836: for (var _fun37836_ip = 0;;) switch (_fun37836_ip) {
                                                case 0:
                                                    var1 = arg0;
                                                    var _closure5_slot0 = var1;
                                                    var1 = arg1;
                                                    var _closure5_slot1 = var1;
                                                case 16: // try_start_0
                                                    var1 = global;
                                                    var3 = var1.__non_webpack_require__;
                                                    var2 = undefined;
                                                    var1 = 'fs';
                                                    var1 = var3.bind(var2)(var1);
                                                case 35: // try_end0
                                                    var3 = var1;
                                                    _fun37836_ip = 44;
                                                    continue _fun37836;
                                                case 40: // catch_target0
                                                    CatchBlockStart(arg_register = 1);
                                                    var3 = undefined;
                                                case 44:
                                                    var _closure5_slot2 = var3;
                                                    var2 = var3.open;
                                                    var1 = _closure4_slot0;
                                                    var0 = function(arg0, arg1) { // Environment: var0
                                                        _fun37837: for (var _fun37837_ip = 0;;) switch (_fun37837_ip) {
                                                            case 0:
                                                                var2 = arg0;
                                                                var0 = arg1;
                                                                var _closure6_slot0 = var0;
                                                                if (var2) {
                                                                    _fun37837_ip = 48;
                                                                    continue _fun37837
                                                                }
                                                            case 18:
                                                                var5 = _closure5_slot2;
                                                                var4 = var5.stat;
                                                                var3 = _closure4_slot0;
                                                                var1 = function(arg0, arg1) { // Environment: var1
                                                                    _fun37838: for (var _fun37838_ip = 0;;) switch (_fun37838_ip) {
                                                                        case 0:
                                                                            var2 = arg0;
                                                                            var1 = arg1;
                                                                            if (var2) {
                                                                                _fun37838_ip = 125;
                                                                                continue _fun37838
                                                                            }
                                                                        case 11:
                                                                            var3 = global;
                                                                            var6 = var3.Math;
                                                                            var5 = var6.min;
                                                                            var4 = var1.size;
                                                                            var9 = _closure4_slot1;
                                                                            var8 = undefined;
                                                                            if (!(var8 === var9)) {
                                                                                _fun37838_ip = 49;
                                                                                continue _fun37838
                                                                            }
                                                                        case 42:
                                                                            var1 = var1.size;
                                                                            _fun37838_ip = 53;
                                                                            continue _fun37838;
                                                                        case 49:
                                                                            var1 = _closure4_slot1;
                                                                        case 53:
                                                                            var1 = var5.bind(var6)(var4, var1);
                                                                            var4 = var3.Buffer;
                                                                            var3 = var4.alloc;
                                                                            var3 = var3.bind(var4)(var1);
                                                                            var _closure7_slot0 = var3;
                                                                            var5 = {};
                                                                            var5.buffer = var3;
                                                                            var5.length = var1;
                                                                            var4 = _closure5_slot2;
                                                                            var3 = var4.read;
                                                                            var1 = _closure6_slot0;
                                                                            var0 = function(arg0) { // Environment: var0
                                                                                _fun37839: for (var _fun37839_ip = 0;;) switch (_fun37839_ip) {
                                                                                    case 0:
                                                                                        var2 = arg0;
                                                                                        if (var2) {
                                                                                            _fun37839_ip = 41;
                                                                                            continue _fun37839
                                                                                        }
                                                                                    case 9:
                                                                                        var5 = _closure5_slot2;
                                                                                        var4 = var5.close;
                                                                                        var3 = _closure6_slot0;
                                                                                        var1 = function(arg0) { // Environment: var1
                                                                                            _fun37840: for (var _fun37840_ip = 0;;) switch (_fun37840_ip) {
                                                                                                case 0:
                                                                                                    var3 = arg0;
                                                                                                    if (!var3) {
                                                                                                        _fun37840_ip = 59;
                                                                                                        continue _fun37840
                                                                                                    }
                                                                                                case 6:
                                                                                                    var0 = global;
                                                                                                    var2 = var0.console;
                                                                                                    var1 = var2.warn;
                                                                                                    var6 = _closure4_slot0;
                                                                                                    var0 = var0.HermesInternal;
                                                                                                    var5 = var0.concat;
                                                                                                    var4 = 'Could not close file ';
                                                                                                    var0 = ':';
                                                                                                    var0 = var5.bind(var4)(var6, var0);
                                                                                                    var0 = var1.bind(var2)(var0, var3);
                                                                                                case 59:
                                                                                                    var2 = _closure5_slot0;
                                                                                                    var1 = _closure7_slot0;
                                                                                                    var0 = undefined;
                                                                                                    var1 = var2.bind(var0)(var1);
                                                                                                    return var0;
                                                                                            }
                                                                                        };
                                                                                        var1 = var4.bind(var5)(var3, var1);
                                                                                        _fun37839_ip = 52;
                                                                                        continue _fun37839;
                                                                                    case 41:
                                                                                        var1 = _closure5_slot1;
                                                                                        var0 = undefined;
                                                                                        var0 = var1.bind(var0)(var2);
                                                                                    case 52:
                                                                                        var0 = undefined;
                                                                                        return var0;
                                                                                }
                                                                            };
                                                                            var0 = var3.bind(var4)(var1, var5, var0);
                                                                            _fun37838_ip = 139;
                                                                            continue _fun37838;
                                                                        case 125:
                                                                            var1 = _closure5_slot1;
                                                                            var0 = undefined;
                                                                            var0 = var1.bind(var0)(var2);
                                                                        case 139:
                                                                            var0 = undefined;
                                                                            return var0;
                                                                    }
                                                                };
                                                                var1 = var4.bind(var5)(var3, var1);
                                                                _fun37837_ip = 59;
                                                                continue _fun37837;
                                                            case 48:
                                                                var1 = _closure5_slot1;
                                                                var0 = undefined;
                                                                var0 = var1.bind(var0)(var2);
                                                            case 59:
                                                                var0 = undefined;
                                                                return var0;
                                                        }
                                                    };
                                                    var0 = var2.bind(var3)(var1, var0);
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        var6 = var1;
                                        var0 = new var6[var2](var5, var4);
                                        var0 = var0 instanceof Object ? var0 : var1;
                                        return var0;
                                }
                            };
                            var0 = undefined;
                            var0 = var2.bind(var0)(var4, var3);
                            return var0;
                        case 77:
                            var0 = global;
                            var5 = var0.Promise;
                            var2 = var5.resolve;
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 1;
                            var6 = var6[var0];
                            var0 = undefined;
                            var6 = var7.bind(var0)(var6);
                            var0 = var6.dataUriToBuffer;
                            var0 = var0.bind(var6)(var4);
                            var0 = var2.bind(var5)(var0);
                            return var0;
                        case 134:
                            var0 = global;
                            var0 = var0.fetch;
                            var2 = 'undefined';
                            var0 = typeof var0;
                            if (!(var2 === var0)) {
                                _fun37825_ip = 168;
                                continue _fun37825
                            }
                        case 153:
                            var2 = function(arg0) { // Original name: nodeGetRemoteFile, environment: var1
                                _fun37828: for (var _fun37828_ip = 0;;) switch (_fun37828_ip) {
                                    case 0:
                                        var4 = undefined;
                                        var3 = undefined;
                                        var1 = arg0;
                                        var _closure4_slot0 = var1;
                                        var1 = arguments.length;
                                        var2 = 1;
                                        if (!(var1 > var2)) {
                                            _fun37828_ip = 31;
                                            continue _fun37828
                                        }
                                    case 23:
                                        var1 = arguments[var2];
                                        if (!(var4 === var1)) {
                                            _fun37828_ip = 35;
                                            continue _fun37828
                                        }
                                    case 31:
                                        var1 = {};
                                        _fun37828_ip = 39;
                                        continue _fun37828;
                                    case 35:
                                        var1 = arguments[var2];
                                    case 39:
                                        var1 = var1.length;
                                        var _closure4_slot1 = var1;
                                        var1 = global;
                                        var2 = var1.Promise;
                                        var1 = var2.prototype;
                                        var1 = Object.create(var1, {
                                            constructor: {
                                                value: var2
                                            }
                                        });
                                        var5 = function(arg0, arg1) { // Environment: var0
                                            _fun37829: for (var _fun37829_ip = 0;;) switch (_fun37829_ip) {
                                                case 0:
                                                    var0 = arg0;
                                                    var _closure5_slot0 = var0;
                                                    var0 = arg1;
                                                    var _closure5_slot1 = var0;
                                                    var5 = {};
                                                    var0 = global;
                                                    var6 = var0.Number;
                                                    var4 = var6.isInteger;
                                                    var3 = _closure4_slot1;
                                                    var3 = var4.bind(var6)(var3);
                                                    if (!var3) {
                                                        _fun37829_ip = 57;
                                                        continue _fun37829
                                                    }
                                                case 47:
                                                    var6 = _closure4_slot1;
                                                    var4 = 0;
                                                    var3 = var6 >= var4;
                                                case 57:
                                                    if (!var3) {
                                                        _fun37829_ip = 94;
                                                        continue _fun37829
                                                    }
                                                case 60:
                                                    var3 = {};
                                                    var6 = _closure4_slot1;
                                                    var4 = 1;
                                                    var6 = var6 - var4;
                                                    var4 = 'bytes=0-';
                                                    var4 = var4 + var6;
                                                    var3.range = var4;
                                                    var5.headers = var3;
                                                case 94:
                                                    var4 = _closure4_slot0;
                                                    var3 = /^https:\\/\\ //;
                                                    var2 = var3.test;
                                                    var2 = var2.bind(var3)(var4);
                                                    var6 = var0.__non_webpack_require__;
                                                    var0 = undefined;
                                                    if (var2) {
                                                        _fun37829_ip = 149;
                                                        continue _fun37829
                                                    }
                                                case 133:
                                                    var2 = 'http';
                                                    var2 = var6.bind(var0)(var2);
                                                    var3 = var2.get;
                                                    _fun37829_ip = 163;
                                                    continue _fun37829;
                                                case 149:
                                                    var2 = 'https';
                                                    var2 = var6.bind(var0)(var2);
                                                    var3 = var2.get;
                                                case 163:
                                                    var2 = function(arg0) { // Environment: var1
                                                        _fun37830: for (var _fun37830_ip = 0;;) switch (_fun37830_ip) {
                                                            case 0:
                                                                var3 = arg0;
                                                                var2 = var3.statusCode;
                                                                var1 = 200;
                                                                if (!(var2 >= var1)) {
                                                                    _fun37830_ip = 34;
                                                                    continue _fun37830
                                                                }
                                                            case 18:
                                                                var2 = var3.statusCode;
                                                                var1 = 299;
                                                                if (!(!(var2 <= var1))) {
                                                                    _fun37830_ip = 106;
                                                                    continue _fun37830
                                                                }
                                                            case 34:
                                                                var4 = _closure5_slot1;
                                                                var7 = var3.statusCode;
                                                                var6 = var3.statusMessage;
                                                                var1 = global;
                                                                var1 = var1.HermesInternal;
                                                                var5 = var1.concat;
                                                                var2 = 'Could not fetch file: ';
                                                                var1 = ' ';
                                                                var2 = var5.bind(var2)(var7, var1, var6);
                                                                var1 = undefined;
                                                                var1 = var4.bind(var1)(var2);
                                                                var1 = var3.resume;
                                                                var1 = var1.bind(var3)();
                                                                _fun37830_ip = 177;
                                                                continue _fun37830;
                                                            case 106:
                                                                var1 = new Array(0);
                                                                var _closure6_slot0 = var1;
                                                                var4 = var3.on;
                                                                var2 = 'data';
                                                                var1 = function(arg0) { // Environment: var0
                                                                    var2 = _closure6_slot0;
                                                                    var1 = var2.push;
                                                                    var0 = global;
                                                                    var4 = var0.Buffer;
                                                                    var3 = var4.from;
                                                                    var0 = arg0;
                                                                    var0 = var3.bind(var4)(var0);
                                                                    var0 = var1.bind(var2)(var0);
                                                                    return var0;
                                                                };
                                                                var1 = var4.bind(var3)(var2, var1);
                                                                var4 = var3.on;
                                                                var2 = 'error';
                                                                var1 = function(arg0) { // Environment: var0
                                                                    var2 = _closure5_slot1;
                                                                    var1 = undefined;
                                                                    var0 = arg0;
                                                                    var0 = var2.bind(var1)(var0);
                                                                    return var0;
                                                                };
                                                                var1 = var4.bind(var3)(var2, var1);
                                                                var2 = var3.on;
                                                                var1 = 'end';
                                                                var0 = function() { // Environment: var0
                                                                    var2 = _closure5_slot0;
                                                                    var0 = global;
                                                                    var3 = var0.Buffer;
                                                                    var1 = var3.concat;
                                                                    var0 = _closure6_slot0;
                                                                    var1 = var1.bind(var3)(var0);
                                                                    var0 = undefined;
                                                                    var0 = var2.bind(var0)(var1);
                                                                    return var0;
                                                                };
                                                                var0 = var2.bind(var3)(var1, var0);
                                                            case 177:
                                                                var0 = undefined;
                                                                return var0;
                                                        }
                                                    };
                                                    var4 = var3.bind(var0)(var4, var5, var2);
                                                    var3 = var4.on;
                                                    var2 = 'error';
                                                    var1 = function(arg0) { // Environment: var1
                                                        var2 = _closure5_slot1;
                                                        var1 = undefined;
                                                        var0 = arg0;
                                                        var0 = var2.bind(var1)(var0);
                                                        return var0;
                                                    };
                                                    var1 = var3.bind(var4)(var2, var1);
                                                    return var0;
                                            }
                                        };
                                        var6 = var1;
                                        var0 = new var6[var2](var5, var4);
                                        var0 = var0 instanceof Object ? var0 : var1;
                                        return var0;
                                }
                            };
                            var0 = undefined;
                            var0 = var2.bind(var0)(var4, var3);
                            _fun37825_ip = 181;
                            continue _fun37825;
                        case 168:
                            var2 = function(arg0) { // Original name: fetchRemoteFile, environment: var1
                                _fun37826: for (var _fun37826_ip = 0;;) switch (_fun37826_ip) {
                                    case 0:
                                        var3 = undefined;
                                        var1 = undefined;
                                        var0 = arguments.length;
                                        var5 = 1;
                                        if (!(var0 > var5)) {
                                            _fun37826_ip = 22;
                                            continue _fun37826
                                        }
                                    case 14:
                                        var0 = arguments[var5];
                                        if (!(var3 === var0)) {
                                            _fun37826_ip = 26;
                                            continue _fun37826
                                        }
                                    case 22:
                                        var0 = {};
                                        _fun37826_ip = 30;
                                        continue _fun37826;
                                    case 26:
                                        var0 = arguments[var5];
                                    case 30:
                                        var4 = var0.length;
                                        var2 = {};
                                        var0 = 'GET';
                                        var2.method = var0;
                                        var0 = global;
                                        var6 = var0.Number;
                                        var1 = var6.isInteger;
                                        var1 = var1.bind(var6)(var4);
                                        if (!var1) {
                                            _fun37826_ip = 76;
                                            continue _fun37826
                                        }
                                    case 70:
                                        var6 = 0;
                                        var1 = var4 >= var6;
                                    case 76:
                                        if (!var1) {
                                            _fun37826_ip = 106;
                                            continue _fun37826
                                        }
                                    case 79:
                                        var1 = {};
                                        var5 = var4 - var5;
                                        var4 = 'bytes=0-';
                                        var4 = var4 + var5;
                                        var1.range = var4;
                                        var2.headers = var1;
                                    case 106:
                                        var1 = var0.fetch;
                                        var0 = arg0;
                                        var2 = var1.bind(var3)(var0, var2);
                                        var1 = var2.then;
                                        var0 = function(arg0) { // Environment: var0
                                            var1 = arg0;
                                            var0 = var1.arrayBuffer;
                                            var0 = var0.bind(var1)();
                                            return var0;
                                        };
                                        var0 = var1.bind(var2)(var0);
                                        return var0;
                                }
                            };
                            var1 = undefined;
                            var0 = var2.bind(var1)(var4, var3);
                        case 181:
                            return var0;
                    }
                };
                var3 = var2.bind(var4)(var5, var3);
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var1
                    var3 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var3.bind(var1)(var0, var2);
                    return var0;
                };
                var0 = var2.bind(var3)(var1);
            case 169:
                return var0;
        }
    };
    var0 = function(arg0, arg1) { // Original name: loadFromData, environment: var4
        _fun37847: for (var _fun37847_ip = 0;;) switch (_fun37847_ip) {
            case 0:
                var3 = arg0;
                var0 = var3;
            case 6: // try_start_0
                var1 = global;
                var2 = var1.Buffer;
                var1 = var2.isBuffer;
                var0 = var1.bind(var2)(var0);
            case 25: // try_end0
                _fun37847_ip = 31;
                continue _fun37847;
            case 27: // catch_target0
                CatchBlockStart(arg_register = 1);
                var0 = false;
            case 31:
                var2 = var3;
                if (!var0) {
                    _fun37847_ip = 74;
                    continue _fun37847
                }
            case 37:
                var0 = global;
                var0 = var0.Uint8Array;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var8 = var1;
                var7 = var3;
                var0 = new var8[var0](var7, var6);
                var0 = var0 instanceof Object ? var0 : var1;
                var2 = var0.buffer;
            case 74:
                var3 = _closure1_slot4;
                var0 = var2;
            case 84: // try_start_1
                var2 = global;
                var5 = var2.DataView;
                var7 = var0;
                var4 = var5.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var5
                    }
                });
                var8 = var4;
                var2 = new var8[var5](var7, var6);
                var2 = var2 instanceof Object ? var2 : var4;
            case 115: // try_end1
                _fun37847_ip = 164;
                continue _fun37847;
            case 117: // catch_target1
                CatchBlockStart(arg_register = 4);
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 2;
                var4 = var4[var1];
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                var7 = var0;
                var1 = var4.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var4
                    }
                });
                var8 = var1;
                var0 = new var8[var4](var7, var6);
                var2 = var0 instanceof Object ? var0 : var1;
            case 164:
                var1 = undefined;
                var0 = arg1;
                var0 = var3.bind(var1)(var2, var0);
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var1 = function(arg0) { // Original name: loadView, environment: var4
        _fun37848: for (var _fun37848_ip = 0;;) switch (_fun37848_ip) {
            case 0:
                var13 = arg0;
                var5 = undefined;
                var0 = undefined;
                var23 = function(arg0) { // Original name: addIccTags, environment: var1
                    _fun37849: for (var _fun37849_ip = 0;;) switch (_fun37849_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = _closure2_slot0;
                            if (var2) {
                                _fun37849_ip = 63;
                                continue _fun37849
                            }
                        case 13:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 1;
                            var3 = var3[var2];
                            var2 = undefined;
                            var5 = var4.bind(var2)(var3);
                            var4 = var5.objectAssign;
                            var3 = _closure2_slot1;
                            var2 = {};
                            var2 = var4.bind(var5)(var2, var3, var1);
                            _closure2_slot1 = var2;
                            _fun37849_ip = 73;
                            continue _fun37849;
                        case 63:
                            var0 = _closure2_slot1;
                            var0.icc = var1;
                        case 73:
                            var0 = undefined;
                            return var0;
                    }
                };
                var9 = function(arg0) { // Original name: addPngTextTags, environment: var1
                    _fun37850: for (var _fun37850_ip = 0;;) switch (_fun37850_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = undefined;
                            var9 = undefined;
                            var10 = undefined;
                            var1 = _closure2_slot0;
                            if (var1) {
                                _fun37850_ip = 149;
                                continue _fun37850
                            }
                        case 22:
                            var2 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 1;
                            var1 = var5[var1];
                            var11 = var2.bind(var0)(var1);
                            var8 = var11.objectAssign;
                            var7 = _closure2_slot1;
                            var1 = var3;
                            var1 = var1.__exif;
                            if (var1) {
                                _fun37850_ip = 71;
                                continue _fun37850
                            }
                        case 67:
                            var6 = {};
                            _fun37850_ip = 80;
                            continue _fun37850;
                        case 71:
                            var1 = var3;
                            var6 = var1.__exif;
                        case 80:
                            var1 = var3;
                            var1 = var1.__iptc;
                            if (var1) {
                                _fun37850_ip = 96;
                                continue _fun37850
                            }
                        case 92:
                            var5 = {};
                            _fun37850_ip = 105;
                            continue _fun37850;
                        case 96:
                            var1 = var3;
                            var5 = var1.__iptc;
                        case 105:
                            var19 = var3;
                            var23 = {};
                            var24 = var11;
                            var22 = var7;
                            var21 = var6;
                            var20 = var5;
                            var1 = var24[var8](var23, var22, var21, var20, var19, var18);
                            _closure2_slot1 = var1;
                            var1 = delete var1.__exif;
                            var1 = _closure2_slot1;
                            var1 = delete var1.__iptc;
                            _fun37850_ip = 462;
                            continue _fun37850;
                        case 149:
                            var8 = ['exif', 'iptc'];
                            var2 = var8[Symbol.iterator];
                            var8 = var2().next;
                            var7 = 1;
                            var6 = global;
                            var1 = '__';
                        case 174:
                            var12 = var8().value;
                            var11 = var2;
                            if (!(var11 !== var0)) {
                                _fun37850_ip = 324;
                                continue _fun37850
                            }
                        case 188: // try_start_0
                            var9 = var12;
                            var11 = var6.HermesInternal;
                            var11 = var11.concat;
                            var12 = var11.bind(var1)(var12);
                            var10 = var12;
                            var11 = var3;
                            var11 = var11[var12];
                            if (!var11) {
                                _fun37850_ip = 312;
                                continue _fun37850
                            }
                        case 220:
                            var13 = _closure2_slot1;
                            var12 = var9;
                            var11 = var13[var12];
                            if (var11) {
                                _fun37850_ip = 246;
                                continue _fun37850
                            }
                        case 234:
                            var14 = var3;
                            var11 = var10;
                            var11 = var14[var11];
                            _fun37850_ip = 298;
                            continue _fun37850;
                        case 246:
                            var15 = _closure1_slot0;
                            var14 = _closure1_slot2;
                            var14 = var14[var7];
                            var18 = var15.bind(var0)(var14);
                            var17 = var18.objectAssign;
                            var14 = _closure2_slot1;
                            var16 = var14.exif;
                            var15 = var3;
                            var14 = var10;
                            var15 = var15[var14];
                            var14 = {};
                            var11 = var17.bind(var18)(var14, var16, var15);
                        case 298:
                            var13[var12] = var11;
                            var12 = var3;
                            var11 = var10;
                            var11 = delete var12[var11];
                        case 312: // try_end0
                            _fun37850_ip = 174;
                            continue _fun37850;
                        case 317: // catch_target0
                            CatchBlockStart(arg_register = 1);
                            var2.return();
                            throw var1;
                        case 324:
                            var2 = _closure2_slot1;
                            var1 = var2.png;
                            if (var1) {
                                _fun37850_ip = 342;
                                continue _fun37850
                            }
                        case 337:
                            var1 = var3;
                            _fun37850_ip = 387;
                            continue _fun37850;
                        case 342:
                            var8 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var6 = var6[var7];
                            var11 = var8.bind(var0)(var6);
                            var10 = var11.objectAssign;
                            var6 = _closure2_slot1;
                            var9 = var6.png;
                            var8 = var3;
                            var6 = {};
                            var1 = var10.bind(var11)(var6, var9, var8);
                        case 387:
                            var2.png = var1;
                            var2 = _closure2_slot1;
                            var1 = var2.pngText;
                            if (var1) {
                                _fun37850_ip = 411;
                                continue _fun37850
                            }
                        case 406:
                            var1 = var3;
                            _fun37850_ip = 456;
                            continue _fun37850;
                        case 411:
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var5 = var5[var7];
                            var7 = var6.bind(var0)(var5);
                            var6 = var7.objectAssign;
                            var4 = _closure2_slot1;
                            var5 = var4.png;
                            var4 = var3;
                            var3 = {};
                            var1 = var6.bind(var7)(var3, var5, var4);
                        case 456:
                            var2.pngText = var1;
                        case 462:
                            return var0;
                    }
                };
                var _closure2_slot2 = var9;
                var2 = arguments.length;
                var14 = 1;
                if (!(var2 > var14)) {
                    _fun37848_ip = 41;
                    continue _fun37848
                }
            case 33:
                var2 = arguments[var14];
                if (!(var5 === var2)) {
                    _fun37848_ip = 62;
                    continue _fun37848
                }
            case 41:
                var2 = {
                    'expanded': false,
                    'async': false,
                    'includeUnknown': false
                };
                var2.domParser = var5;
                _fun37848_ip = 66;
                continue _fun37848;
            case 62:
                var2 = arguments[var14];
            case 66:
                var0 = var2.expanded;
                var8 = var5 !== var0;
                if (!var8) {
                    _fun37848_ip = 82;
                    continue _fun37848
                }
            case 79:
                var8 = var0;
            case 82:
                var _closure2_slot0 = var8;
                var3 = var2.async;
                var0 = var5 !== var3;
                if (!var0) {
                    _fun37848_ip = 102;
                    continue _fun37848
                }
            case 99:
                var0 = var3;
            case 102:
                var3 = var2.includeUnknown;
                var19 = var5 !== var3;
                if (!var19) {
                    _fun37848_ip = 118;
                    continue _fun37848
                }
            case 115:
                var19 = var3;
            case 118:
                var2 = var2.domParser;
                var25 = undefined;
                if (!(var25 !== var2)) {
                    _fun37848_ip = 133;
                    continue _fun37848
                }
            case 130:
                var25 = var2;
            case 133:
                var2 = {};
                var _closure2_slot1 = var2;
                var4 = new Array(0);
                var6 = _closure1_slot1;
                var3 = _closure1_slot2;
                var7 = 3;
                var7 = var3[var7];
                var10 = var6.bind(var5)(var7);
                var7 = var10.parseAppMarkers;
                var10 = var7.bind(var10)(var13, var0);
                var7 = var10.fileType;
                var28 = var10.fileDataOffset;
                var27 = var10.jfifDataOffset;
                var12 = var10.tiffHeaderOffset;
                var26 = var10.iptcDataOffset;
                var24 = var10.xmpChunks;
                var22 = var10.iccChunks;
                var21 = var10.mpfDataOffset;
                var20 = var10.pngHeaderOffset;
                var18 = var10.pngTextChunks;
                var16 = var10.pngChunkOffsets;
                var15 = var10.vp8xChunkOffset;
                var10 = var10.gifHeaderOffset;
                var11 = 4;
                var3 = var3[var11];
                var3 = var6.bind(var5)(var3);
                var17 = var3.USE_JPEG;
                var6 = false;
                if (!var17) {
                    _fun37848_ip = 407;
                    continue _fun37848
                }
            case 282:
                var29 = _closure1_slot1;
                var17 = _closure1_slot2;
                var17 = var17[var11];
                var17 = var29.bind(var5)(var17);
                var17 = var17.USE_FILE;
                var6 = false;
                if (!var17) {
                    _fun37848_ip = 407;
                    continue _fun37848
                }
            case 310:
                var6 = false;
                if (!(var5 !== var28)) {
                    _fun37848_ip = 407;
                    continue _fun37848
                }
            case 316:
                var17 = _closure1_slot1;
                var29 = _closure1_slot2;
                var3 = 5;
                var3 = var29[var3];
                var17 = var17.bind(var5)(var3);
                var3 = var17.read;
                var17 = var3.bind(var17)(var13, var28);
                if (var8) {
                    _fun37848_ip = 395;
                    continue _fun37848
                }
            case 351:
                var28 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var14];
                var30 = var28.bind(var5)(var3);
                var29 = var30.objectAssign;
                var28 = _closure2_slot1;
                var3 = {};
                var3 = var29.bind(var30)(var3, var28, var17);
                _closure2_slot1 = var3;
                var6 = true;
                _fun37848_ip = 407;
                continue _fun37848;
            case 395:
                var3 = _closure2_slot1;
                var3.file = var17;
                var6 = true;
            case 407:
                var17 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var11];
                var3 = var17.bind(var5)(var3);
                var17 = var3.USE_JPEG;
                var3 = var6;
                if (!var17) {
                    _fun37848_ip = 568;
                    continue _fun37848
                }
            case 439:
                var28 = _closure1_slot1;
                var17 = _closure1_slot2;
                var17 = var17[var11];
                var17 = var28.bind(var5)(var17);
                var17 = var17.USE_JFIF;
                var3 = var6;
                if (!var17) {
                    _fun37848_ip = 568;
                    continue _fun37848
                }
            case 468:
                var3 = var6;
                if (!(var5 !== var27)) {
                    _fun37848_ip = 568;
                    continue _fun37848
                }
            case 475:
                var17 = _closure1_slot1;
                var28 = _closure1_slot2;
                var6 = 6;
                var6 = var28[var6];
                var17 = var17.bind(var5)(var6);
                var6 = var17.read;
                var17 = var6.bind(var17)(var13, var27);
                if (var8) {
                    _fun37848_ip = 554;
                    continue _fun37848
                }
            case 510:
                var27 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var14];
                var29 = var27.bind(var5)(var6);
                var28 = var29.objectAssign;
                var27 = _closure2_slot1;
                var6 = {};
                var6 = var28.bind(var29)(var6, var27, var17);
                _closure2_slot1 = var6;
                var3 = true;
                _fun37848_ip = 568;
                continue _fun37848;
            case 554:
                var6 = _closure2_slot1;
                var6.jfif = var17;
                var3 = true;
            case 568:
                var17 = _closure1_slot1;
                var6 = _closure1_slot2;
                var6 = var6[var11];
                var6 = var17.bind(var5)(var6);
                var6 = var6.USE_EXIF;
                var17 = var3;
                if (!var6) {
                    _fun37848_ip = 2627;
                    continue _fun37848
                }
            case 600:
                var17 = var3;
                if (!(var5 !== var12)) {
                    _fun37848_ip = 2627;
                    continue _fun37848
                }
            case 610:
                var6 = _closure1_slot1;
                var27 = _closure1_slot2;
                var3 = 7;
                var3 = var27[var3];
                var6 = var6.bind(var5)(var3);
                var3 = var6.read;
                var3 = var3.bind(var6)(var13, var12, var19);
                var6 = var3.tags;
                var29 = var3.byteOrder;
                var3 = var6.Thumbnail;
                if (!var3) {
                    _fun37848_ip = 685;
                    continue _fun37848
                }
            case 664:
                var27 = _closure2_slot1;
                var3 = var6.Thumbnail;
                var27.Thumbnail = var3;
                var3 = delete var6.Thumbnail;
            case 685:
                if (var8) {
                    _fun37848_ip = 733;
                    continue _fun37848
                }
            case 688:
                var27 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var14];
                var30 = var27.bind(var5)(var3);
                var28 = var30.objectAssign;
                var27 = _closure2_slot1;
                var3 = {};
                var3 = var28.bind(var30)(var3, var27, var6);
                _closure2_slot1 = var3;
                _fun37848_ip = 1344;
                continue _fun37848;
            case 733:
                var3 = _closure2_slot1;
                var3.exif = var6;
                var27 = _closure2_slot1;
                var3 = var27;
                var27 = var27.exif;
                if (!var27) {
                    _fun37848_ip = 1344;
                    continue _fun37848
                }
            case 762:
                var27 = var3;
                var27 = var27.exif;
                var27 = var27.GPSLatitude;
                if (!var27) {
                    _fun37848_ip = 963;
                    continue _fun37848
                }
            case 783:
                var27 = var3;
                var27 = var27.exif;
                var27 = var27.GPSLatitudeRef;
                if (!var27) {
                    _fun37848_ip = 963;
                    continue _fun37848
                }
            case 804: // try_start_0
                var28 = var3;
                var30 = var28.gps;
                var27 = var30;
                if (var30) {
                    _fun37848_ip = 821;
                    continue _fun37848
                }
            case 819:
                var27 = {};
            case 821:
                var28.gps = var27;
                var27 = var3;
                var30 = var27.gps;
                var31 = _closure1_slot0;
                var32 = _closure1_slot2;
                var28 = 22;
                var28 = var32[var28];
                var32 = var31.bind(var5)(var28);
                var31 = var32.getCalculatedGpsValue;
                var28 = var27.exif;
                var28 = var28.GPSLatitude;
                var28 = var28.value;
                var28 = var31.bind(var32)(var28);
                var30.Latitude = var28;
                var27 = var27.exif;
                var27 = var27.GPSLatitudeRef;
                var30 = var27.value;
                var28 = var30.join;
                var27 = '';
                var28 = var28.bind(var30)(var27);
                var27 = 'S';
                if (!(var27 === var28)) {
                    _fun37848_ip = 959;
                    continue _fun37848
                }
            case 929:
                var27 = var3;
                var28 = var27.gps;
                var27 = var27.gps;
                var27 = var27.Latitude;
                var27 = -var27;
                var28.Latitude = var27;
            case 959: // try_end0
                _fun37848_ip = 963;
                continue _fun37848;
            case 961: // catch_target0
                CatchBlockStart(arg_register = 27);
            case 963:
                var27 = var3;
                var27 = var27.exif;
                var27 = var27.GPSLongitude;
                if (!var27) {
                    _fun37848_ip = 1164;
                    continue _fun37848
                }
            case 984:
                var27 = var3;
                var27 = var27.exif;
                var27 = var27.GPSLongitudeRef;
                if (!var27) {
                    _fun37848_ip = 1164;
                    continue _fun37848
                }
            case 1005: // try_start_1
                var28 = var3;
                var30 = var28.gps;
                var27 = var30;
                if (var30) {
                    _fun37848_ip = 1022;
                    continue _fun37848
                }
            case 1020:
                var27 = {};
            case 1022:
                var28.gps = var27;
                var27 = var3;
                var30 = var27.gps;
                var31 = _closure1_slot0;
                var32 = _closure1_slot2;
                var28 = 22;
                var28 = var32[var28];
                var32 = var31.bind(var5)(var28);
                var31 = var32.getCalculatedGpsValue;
                var28 = var27.exif;
                var28 = var28.GPSLongitude;
                var28 = var28.value;
                var28 = var31.bind(var32)(var28);
                var30.Longitude = var28;
                var27 = var27.exif;
                var27 = var27.GPSLongitudeRef;
                var30 = var27.value;
                var28 = var30.join;
                var27 = '';
                var28 = var28.bind(var30)(var27);
                var27 = 'W';
                if (!(var27 === var28)) {
                    _fun37848_ip = 1160;
                    continue _fun37848
                }
            case 1130:
                var27 = var3;
                var28 = var27.gps;
                var27 = var27.gps;
                var27 = var27.Longitude;
                var27 = -var27;
                var28.Longitude = var27;
            case 1160: // try_end1
                _fun37848_ip = 1164;
                continue _fun37848;
            case 1162: // catch_target1
                CatchBlockStart(arg_register = 27);
            case 1164:
                var27 = var3;
                var27 = var27.exif;
                var27 = var27.GPSAltitude;
                if (!var27) {
                    _fun37848_ip = 1344;
                    continue _fun37848
                }
            case 1185:
                var27 = var3;
                var27 = var27.exif;
                var27 = var27.GPSAltitudeRef;
                if (!var27) {
                    _fun37848_ip = 1344;
                    continue _fun37848
                }
            case 1206: // try_start_2
                var28 = var3;
                var30 = var28.gps;
                var27 = var30;
                if (var30) {
                    _fun37848_ip = 1223;
                    continue _fun37848
                }
            case 1221:
                var27 = {};
            case 1223:
                var28.gps = var27;
                var27 = var3;
                var30 = var27.gps;
                var28 = var27.exif;
                var28 = var28.GPSAltitude;
                var31 = var28.value;
                var28 = 0;
                var31 = var31[var28];
                var28 = var27.exif;
                var28 = var28.GPSAltitude;
                var28 = var28.value;
                var28 = var28[var14];
                var28 = var31 / var28;
                var30.Altitude = var28;
                var27 = var27.exif;
                var27 = var27.GPSAltitudeRef;
                var27 = var27.value;
                if (!(var14 === var27)) {
                    _fun37848_ip = 1340;
                    continue _fun37848
                }
            case 1313:
                var27 = var3.gps;
                var3 = var3.gps;
                var3 = var3.Altitude;
                var3 = -var3;
                var27.Altitude = var3;
            case 1340: // try_end2
                _fun37848_ip = 1344;
                continue _fun37848;
            case 1342: // catch_target2
                CatchBlockStart(arg_register = 3);
            case 1344:
                var27 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var11];
                var3 = var27.bind(var5)(var3);
                var3 = var3.USE_TIFF;
                if (!var3) {
                    _fun37848_ip = 1524;
                    continue _fun37848
                }
            case 1373:
                var27 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var11];
                var3 = var27.bind(var5)(var3);
                var3 = var3.USE_IPTC;
                if (!var3) {
                    _fun37848_ip = 1524;
                    continue _fun37848
                }
            case 1402:
                var3 = var6["IPTC-NAA"];
                if (!var3) {
                    _fun37848_ip = 1524;
                    continue _fun37848
                }
            case 1411:
                var3 = _closure1_slot5;
                var3 = var3.bind(var5)(var26);
                if (var3) {
                    _fun37848_ip = 1524;
                    continue _fun37848
                }
            case 1423:
                var27 = _closure1_slot1;
                var28 = _closure1_slot2;
                var3 = 8;
                var3 = var28[var3];
                var30 = var27.bind(var5)(var3);
                var28 = var30.read;
                var3 = var6["IPTC-NAA"];
                var27 = var3.value;
                var3 = 0;
                var27 = var28.bind(var30)(var27, var3, var19);
                if (var8) {
                    _fun37848_ip = 1514;
                    continue _fun37848
                }
            case 1472:
                var28 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var14];
                var31 = var28.bind(var5)(var3);
                var30 = var31.objectAssign;
                var28 = _closure2_slot1;
                var3 = {};
                var3 = var30.bind(var31)(var3, var28, var27);
                _closure2_slot1 = var3;
                _fun37848_ip = 1524;
                continue _fun37848;
            case 1514:
                var3 = _closure2_slot1;
                var3.iptc = var27;
            case 1524:
                var27 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var11];
                var3 = var27.bind(var5)(var3);
                var3 = var3.USE_TIFF;
                if (!var3) {
                    _fun37848_ip = 1737;
                    continue _fun37848
                }
            case 1553:
                var27 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var11];
                var3 = var27.bind(var5)(var3);
                var3 = var3.USE_XMP;
                if (!var3) {
                    _fun37848_ip = 1737;
                    continue _fun37848
                }
            case 1582:
                var3 = var6.ApplicationNotes;
                if (!var3) {
                    _fun37848_ip = 1737;
                    continue _fun37848
                }
            case 1594:
                var3 = _closure1_slot6;
                var3 = var3.bind(var5)(var24);
                if (var3) {
                    _fun37848_ip = 1737;
                    continue _fun37848
                }
            case 1609:
                var28 = _closure1_slot1;
                var3 = _closure1_slot2;
                var27 = 9;
                var27 = var3[var27];
                var28 = var28.bind(var5)(var27);
                var27 = var28.read;
                var30 = _closure1_slot0;
                var3 = var3[var14];
                var31 = var30.bind(var5)(var3);
                var30 = var31.getStringValueFromArray;
                var3 = var6.ApplicationNotes;
                var3 = var3.value;
                var3 = var30.bind(var31)(var3);
                var27 = var27.bind(var28)(var3, var5, var25);
                if (var8) {
                    _fun37848_ip = 1727;
                    continue _fun37848
                }
            case 1680:
                var3 = delete var27._raw;
                var28 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var14];
                var31 = var28.bind(var5)(var3);
                var30 = var31.objectAssign;
                var28 = _closure2_slot1;
                var3 = {};
                var3 = var30.bind(var31)(var3, var28, var27);
                _closure2_slot1 = var3;
                _fun37848_ip = 1737;
                continue _fun37848;
            case 1727:
                var3 = _closure2_slot1;
                var3.xmp = var27;
            case 1737:
                var27 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var11];
                var3 = var27.bind(var5)(var3);
                var3 = var3.USE_PHOTOSHOP;
                if (!var3) {
                    _fun37848_ip = 1881;
                    continue _fun37848
                }
            case 1763:
                var3 = var6.ImageSourceData;
                if (!var3) {
                    _fun37848_ip = 1881;
                    continue _fun37848
                }
            case 1774:
                var3 = var6.PhotoshopSettings;
                if (!var3) {
                    _fun37848_ip = 1881;
                    continue _fun37848
                }
            case 1783:
                var27 = _closure1_slot1;
                var28 = _closure1_slot2;
                var3 = 10;
                var3 = var28[var3];
                var28 = var27.bind(var5)(var3);
                var27 = var28.read;
                var3 = var6.PhotoshopSettings;
                var3 = var3.value;
                var27 = var27.bind(var28)(var3, var19);
                if (var8) {
                    _fun37848_ip = 1871;
                    continue _fun37848
                }
            case 1829:
                var28 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var14];
                var31 = var28.bind(var5)(var3);
                var30 = var31.objectAssign;
                var28 = _closure2_slot1;
                var3 = {};
                var3 = var30.bind(var31)(var3, var28, var27);
                _closure2_slot1 = var3;
                _fun37848_ip = 1881;
                continue _fun37848;
            case 1871:
                var3 = _closure2_slot1;
                var3.photoshop = var27;
            case 1881:
                var27 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var11];
                var3 = var27.bind(var5)(var3);
                var3 = var3.USE_TIFF;
                if (!var3) {
                    _fun37848_ip = 2108;
                    continue _fun37848
                }
            case 1910:
                var27 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var11];
                var3 = var27.bind(var5)(var3);
                var3 = var3.USE_ICC;
                if (!var3) {
                    _fun37848_ip = 2108;
                    continue _fun37848
                }
            case 1939:
                var3 = var6.ICC_Profile;
                if (!var3) {
                    _fun37848_ip = 2108;
                    continue _fun37848
                }
            case 1951:
                var3 = _closure1_slot7;
                var3 = var3.bind(var5)(var22);
                if (var3) {
                    _fun37848_ip = 2108;
                    continue _fun37848
                }
            case 1966:
                var27 = _closure1_slot1;
                var28 = _closure1_slot2;
                var3 = 11;
                var3 = var28[var3];
                var30 = var27.bind(var5)(var3);
                var28 = var30.read;
                var3 = var6.ICC_Profile;
                var27 = var3.value;
                var31 = {
                    'offset': 0,
                    'length': null,
                    'chunkNumber': 1,
                    'chunksTotal': 1
                };
                var3 = var6.ICC_Profile;
                var3 = var3.value;
                var3 = var3.length;
                var31.length = var3;
                var3 = new Array(1);
                var3[0] = var31;
                var27 = var28.bind(var30)(var27, var3);
                if (var8) {
                    _fun37848_ip = 2098;
                    continue _fun37848
                }
            case 2056:
                var28 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var14];
                var31 = var28.bind(var5)(var3);
                var30 = var31.objectAssign;
                var28 = _closure2_slot1;
                var3 = {};
                var3 = var30.bind(var31)(var3, var28, var27);
                _closure2_slot1 = var3;
                _fun37848_ip = 2108;
                continue _fun37848;
            case 2098:
                var3 = _closure2_slot1;
                var3.icc = var27;
            case 2108:
                var27 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var11];
                var3 = var27.bind(var5)(var3);
                var3 = var3.USE_MAKER_NOTES;
                if (!var3) {
                    _fun37848_ip = 2603;
                    continue _fun37848
                }
            case 2137:
                var3 = var6.MakerNote;
                if (!var3) {
                    _fun37848_ip = 2603;
                    continue _fun37848
                }
            case 2149:
                var3 = var6.Make;
                if (!var3) {
                    _fun37848_ip = 2169;
                    continue _fun37848
                }
            case 2158:
                var27 = var6.Make;
                var3 = var27.value;
            case 2169:
                if (!var3) {
                    _fun37848_ip = 2201;
                    continue _fun37848
                }
            case 2172:
                var27 = global;
                var30 = var27.Array;
                var28 = var30.isArray;
                var27 = var6.Make;
                var27 = var27.value;
                var3 = var28.bind(var30)(var27);
            case 2201:
                if (!var3) {
                    _fun37848_ip = 2231;
                    continue _fun37848
                }
            case 2204:
                var27 = var6.Make;
                var28 = var27.value;
                var27 = 0;
                var28 = var28[var27];
                var27 = 'Canon';
                var3 = var27 === var28;
            case 2231:
                if (!var3) {
                    _fun37848_ip = 2240;
                    continue _fun37848
                }
            case 2234:
                var3 = var6.MakerNote;
            case 2240:
                if (!var3) {
                    _fun37848_ip = 2255;
                    continue _fun37848
                }
            case 2243:
                var27 = var6.MakerNote;
                var3 = var27.__offset;
            case 2255:
                if (var3) {
                    _fun37848_ip = 2491;
                    continue _fun37848
                }
            case 2261:
                var3 = var6.MakerNote;
                var3 = var3.value;
                var27 = var3.length;
                var28 = 'PENTAX ';
                var3 = var28.length;
                var3 = var27 > var3;
                if (!var3) {
                    _fun37848_ip = 2356;
                    continue _fun37848
                }
            case 2295:
                var30 = _closure1_slot0;
                var27 = _closure1_slot2;
                var27 = var27[var14];
                var31 = var30.bind(var5)(var27);
                var30 = var31.getStringValueFromArray;
                var27 = var6.MakerNote;
                var34 = var27.value;
                var33 = var34.slice;
                var32 = var28.length;
                var27 = 0;
                var27 = var33.bind(var34)(var27, var32);
                var27 = var30.bind(var31)(var27);
                var3 = var27 === var28;
            case 2356:
                if (!var3) {
                    _fun37848_ip = 2371;
                    continue _fun37848
                }
            case 2359:
                var27 = var6.MakerNote;
                var3 = var27.__offset;
            case 2371:
                if (!var3) {
                    _fun37848_ip = 2603;
                    continue _fun37848
                }
            case 2377:
                var27 = _closure1_slot1;
                var28 = _closure1_slot2;
                var3 = 13;
                var3 = var28[var3];
                var28 = var27.bind(var5)(var3);
                var27 = var28.read;
                var3 = var6.MakerNote;
                var37 = var3.__offset;
                var40 = var28;
                var39 = var13;
                var38 = var12;
                var36 = var19;
                var27 = var40[var27](var39, var38, var37, var36, var35);
                if (var8) {
                    _fun37848_ip = 2479;
                    continue _fun37848
                }
            case 2434:
                var28 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var14];
                var31 = var28.bind(var5)(var3);
                var30 = var31.objectAssign;
                var28 = _closure2_slot1;
                var3 = {};
                var3 = var30.bind(var31)(var3, var28, var27);
                _closure2_slot1 = var3;
                _fun37848_ip = 2603;
                continue _fun37848;
            case 2479:
                var3 = _closure2_slot1;
                var3.makerNotes = var27;
                _fun37848_ip = 2603;
                continue _fun37848;
            case 2491:
                var27 = _closure1_slot1;
                var28 = _closure1_slot2;
                var3 = 12;
                var3 = var28[var3];
                var28 = var27.bind(var5)(var3);
                var27 = var28.read;
                var3 = var6.MakerNote;
                var37 = var3.__offset;
                var40 = var28;
                var39 = var13;
                var38 = var12;
                var36 = var29;
                var35 = var19;
                var27 = var40[var27](var39, var38, var37, var36, var35, var34);
                if (var8) {
                    _fun37848_ip = 2593;
                    continue _fun37848
                }
            case 2551:
                var28 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var14];
                var30 = var28.bind(var5)(var3);
                var29 = var30.objectAssign;
                var28 = _closure2_slot1;
                var3 = {};
                var3 = var29.bind(var30)(var3, var28, var27);
                _closure2_slot1 = var3;
                _fun37848_ip = 2603;
                continue _fun37848;
            case 2593:
                var3 = _closure2_slot1;
                var3.makerNotes = var27;
            case 2603:
                var27 = var6.MakerNote;
                var17 = true;
                if (!var27) {
                    _fun37848_ip = 2627;
                    continue _fun37848
                }
            case 2614:
                var6 = var6.MakerNote;
                var6 = delete var6.__offset;
                var17 = true;
            case 2627:
                var6 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var11];
                var3 = var6.bind(var5)(var3);
                var3 = var3.USE_JPEG;
                var6 = var17;
                if (!var3) {
                    _fun37848_ip = 2795;
                    continue _fun37848
                }
            case 2659:
                var27 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var11];
                var3 = var27.bind(var5)(var3);
                var3 = var3.USE_IPTC;
                var6 = var17;
                if (!var3) {
                    _fun37848_ip = 2795;
                    continue _fun37848
                }
            case 2688:
                var3 = _closure1_slot5;
                var3 = var3.bind(var5)(var26);
                var6 = var17;
                if (!var3) {
                    _fun37848_ip = 2795;
                    continue _fun37848
                }
            case 2703:
                var17 = _closure1_slot1;
                var27 = _closure1_slot2;
                var3 = 8;
                var3 = var27[var3];
                var17 = var17.bind(var5)(var3);
                var3 = var17.read;
                var17 = var3.bind(var17)(var13, var26, var19);
                if (var8) {
                    _fun37848_ip = 2783;
                    continue _fun37848
                }
            case 2739:
                var26 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var14];
                var28 = var26.bind(var5)(var3);
                var27 = var28.objectAssign;
                var26 = _closure2_slot1;
                var3 = {};
                var3 = var27.bind(var28)(var3, var26, var17);
                _closure2_slot1 = var3;
                var6 = true;
                _fun37848_ip = 2795;
                continue _fun37848;
            case 2783:
                var3 = _closure2_slot1;
                var3.iptc = var17;
                var6 = true;
            case 2795:
                var17 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var11];
                var3 = var17.bind(var5)(var3);
                var3 = var3.USE_XMP;
                var17 = var6;
                if (!var3) {
                    _fun37848_ip = 2936;
                    continue _fun37848
                }
            case 2824:
                var3 = _closure1_slot6;
                var3 = var3.bind(var5)(var24);
                var17 = var6;
                if (!var3) {
                    _fun37848_ip = 2936;
                    continue _fun37848
                }
            case 2839:
                var6 = _closure1_slot1;
                var26 = _closure1_slot2;
                var3 = 9;
                var3 = var26[var3];
                var6 = var6.bind(var5)(var3);
                var3 = var6.read;
                var6 = var3.bind(var6)(var13, var24, var25);
                if (var8) {
                    _fun37848_ip = 2924;
                    continue _fun37848
                }
            case 2875:
                var3 = delete var6._raw;
                var24 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var14];
                var26 = var24.bind(var5)(var3);
                var25 = var26.objectAssign;
                var24 = _closure2_slot1;
                var3 = {};
                var3 = var25.bind(var26)(var3, var24, var6);
                _closure2_slot1 = var3;
                var17 = true;
                _fun37848_ip = 2936;
                continue _fun37848;
            case 2924:
                var3 = _closure2_slot1;
                var3.xmp = var6;
                var17 = true;
            case 2936:
                var6 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var11];
                var3 = var6.bind(var5)(var3);
                var3 = var3.USE_JPEG;
                if (var3) {
                    _fun37848_ip = 2994;
                    continue _fun37848
                }
            case 2962:
                var6 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var11];
                var3 = var6.bind(var5)(var3);
                var6 = var3.USE_WEBP;
                var3 = var17;
                if (!var6) {
                    _fun37848_ip = 3117;
                    continue _fun37848
                }
            case 2994:
                var24 = _closure1_slot1;
                var6 = _closure1_slot2;
                var6 = var6[var11];
                var6 = var24.bind(var5)(var6);
                var6 = var6.USE_ICC;
                var3 = var17;
                if (!var6) {
                    _fun37848_ip = 3117;
                    continue _fun37848
                }
            case 3023:
                var6 = _closure1_slot7;
                var6 = var6.bind(var5)(var22);
                var3 = var17;
                if (!var6) {
                    _fun37848_ip = 3117;
                    continue _fun37848
                }
            case 3038:
                var17 = _closure1_slot1;
                var24 = _closure1_slot2;
                var6 = 11;
                var6 = var24[var6];
                var17 = var17.bind(var5)(var6);
                var6 = var17.read;
                var22 = var6.bind(var17)(var13, var22, var0);
                var6 = global;
                var6 = var6.Promise;
                var6 = var22 instanceof var6;
                if (var6) {
                    _fun37848_ip = 3095;
                    continue _fun37848
                }
            case 3086:
                var6 = var23.bind(var5)(var22);
                var3 = true;
                _fun37848_ip = 3117;
                continue _fun37848;
            case 3095:
                var17 = var4.push;
                var6 = var22.then;
                var6 = var6.bind(var22)(var23);
                var6 = var17.bind(var4)(var6);
                var3 = true;
            case 3117:
                var17 = _closure1_slot1;
                var6 = _closure1_slot2;
                var6 = var6[var11];
                var6 = var17.bind(var5)(var6);
                var17 = var6.USE_MPF;
                var6 = var3;
                if (!var17) {
                    _fun37848_ip = 3247;
                    continue _fun37848
                }
            case 3146:
                var6 = var3;
                if (!(var5 !== var21)) {
                    _fun37848_ip = 3247;
                    continue _fun37848
                }
            case 3153:
                var17 = _closure1_slot1;
                var22 = _closure1_slot2;
                var3 = 14;
                var3 = var22[var3];
                var17 = var17.bind(var5)(var3);
                var3 = var17.read;
                var17 = var3.bind(var17)(var13, var21, var19);
                if (var8) {
                    _fun37848_ip = 3233;
                    continue _fun37848
                }
            case 3189:
                var21 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var14];
                var23 = var21.bind(var5)(var3);
                var22 = var23.objectAssign;
                var21 = _closure2_slot1;
                var3 = {};
                var3 = var22.bind(var23)(var3, var21, var17);
                _closure2_slot1 = var3;
                var6 = true;
                _fun37848_ip = 3247;
                continue _fun37848;
            case 3233:
                var3 = _closure2_slot1;
                var3.mpf = var17;
                var6 = true;
            case 3247:
                var17 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var11];
                var3 = var17.bind(var5)(var3);
                var17 = var3.USE_PNG;
                var3 = var6;
                if (!var17) {
                    _fun37848_ip = 3478;
                    continue _fun37848
                }
            case 3279:
                var21 = _closure1_slot1;
                var17 = _closure1_slot2;
                var17 = var17[var11];
                var17 = var21.bind(var5)(var17);
                var17 = var17.USE_PNG_FILE;
                var3 = var6;
                if (!var17) {
                    _fun37848_ip = 3478;
                    continue _fun37848
                }
            case 3311:
                var3 = var6;
                if (!(var5 !== var20)) {
                    _fun37848_ip = 3478;
                    continue _fun37848
                }
            case 3321:
                var17 = _closure1_slot1;
                var21 = _closure1_slot2;
                var6 = 15;
                var6 = var21[var6];
                var17 = var17.bind(var5)(var6);
                var6 = var17.read;
                var17 = var6.bind(var17)(var13, var20);
                if (var8) {
                    _fun37848_ip = 3400;
                    continue _fun37848
                }
            case 3356:
                var20 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var14];
                var22 = var20.bind(var5)(var6);
                var21 = var22.objectAssign;
                var20 = _closure2_slot1;
                var6 = {};
                var6 = var21.bind(var22)(var6, var20, var17);
                _closure2_slot1 = var6;
                var3 = true;
                _fun37848_ip = 3478;
                continue _fun37848;
            case 3400:
                var20 = _closure2_slot1;
                var21 = var20.png;
                var6 = var17;
                if (!var21) {
                    _fun37848_ip = 3458;
                    continue _fun37848
                }
            case 3416:
                var22 = _closure1_slot0;
                var21 = _closure1_slot2;
                var21 = var21[var14];
                var24 = var22.bind(var5)(var21);
                var23 = var24.objectAssign;
                var21 = _closure2_slot1;
                var22 = var21.png;
                var21 = {};
                var6 = var23.bind(var24)(var21, var22, var17);
            case 3458:
                var20.png = var6;
                var6 = _closure2_slot1;
                var6.pngFile = var17;
                var3 = true;
            case 3478:
                var17 = _closure1_slot1;
                var6 = _closure1_slot2;
                var6 = var6[var11];
                var6 = var17.bind(var5)(var6);
                var17 = var6.USE_PNG;
                var6 = var3;
                if (!var17) {
                    _fun37848_ip = 3608;
                    continue _fun37848
                }
            case 3507:
                var6 = var3;
                if (!(var5 !== var18)) {
                    _fun37848_ip = 3608;
                    continue _fun37848
                }
            case 3514:
                var17 = _closure1_slot1;
                var20 = _closure1_slot2;
                var3 = 16;
                var3 = var20[var3];
                var17 = var17.bind(var5)(var3);
                var3 = var17.read;
                var40 = var17;
                var39 = var13;
                var38 = var18;
                var37 = var0;
                var36 = var19;
                var17 = var40[var3](var39, var38, var37, var36, var35);
                var3 = var17.readTags;
                var19 = var17.readTagsPromise;
                var3 = var9.bind(var5)(var3);
                var6 = true;
                if (!var19) {
                    _fun37848_ip = 3608;
                    continue _fun37848
                }
            case 3581:
                var17 = var4.push;
                var18 = var19.then;
                var9 = function(arg0) { // Environment: var1
                    var2 = arg0;
                    var1 = var2.forEach;
                    var0 = _closure2_slot2;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var9 = var18.bind(var19)(var9);
                var9 = var17.bind(var4)(var9);
                var6 = true;
            case 3608:
                var9 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var11];
                var3 = var9.bind(var5)(var3);
                var9 = var3.USE_PNG;
                var3 = var6;
                if (!var9) {
                    _fun37848_ip = 3795;
                    continue _fun37848
                }
            case 3640:
                var3 = var6;
                if (!(var5 !== var16)) {
                    _fun37848_ip = 3795;
                    continue _fun37848
                }
            case 3650:
                var9 = _closure1_slot1;
                var17 = _closure1_slot2;
                var6 = 17;
                var6 = var17[var6];
                var9 = var9.bind(var5)(var6);
                var6 = var9.read;
                var20 = var6.bind(var9)(var13, var16);
                if (var8) {
                    _fun37848_ip = 3729;
                    continue _fun37848
                }
            case 3685:
                var9 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var14];
                var17 = var9.bind(var5)(var6);
                var16 = var17.objectAssign;
                var9 = _closure2_slot1;
                var6 = {};
                var6 = var16.bind(var17)(var6, var9, var20);
                _closure2_slot1 = var6;
                var3 = true;
                _fun37848_ip = 3795;
                continue _fun37848;
            case 3729:
                var9 = _closure2_slot1;
                var16 = var9.png;
                var6 = var20;
                if (!var16) {
                    _fun37848_ip = 3787;
                    continue _fun37848
                }
            case 3745:
                var17 = _closure1_slot0;
                var16 = _closure1_slot2;
                var16 = var16[var14];
                var19 = var17.bind(var5)(var16);
                var18 = var19.objectAssign;
                var16 = _closure2_slot1;
                var17 = var16.png;
                var16 = {};
                var6 = var18.bind(var19)(var16, var17, var20);
            case 3787:
                var9.png = var6;
                var3 = true;
            case 3795:
                var9 = _closure1_slot1;
                var6 = _closure1_slot2;
                var6 = var6[var11];
                var6 = var9.bind(var5)(var6);
                var9 = var6.USE_WEBP;
                var6 = var3;
                if (!var9) {
                    _fun37848_ip = 3982;
                    continue _fun37848
                }
            case 3827:
                var6 = var3;
                if (!(var5 !== var15)) {
                    _fun37848_ip = 3982;
                    continue _fun37848
                }
            case 3837:
                var9 = _closure1_slot1;
                var16 = _closure1_slot2;
                var3 = 18;
                var3 = var16[var3];
                var9 = var9.bind(var5)(var3);
                var3 = var9.read;
                var19 = var3.bind(var9)(var13, var15);
                if (var8) {
                    _fun37848_ip = 3916;
                    continue _fun37848
                }
            case 3872:
                var9 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var14];
                var16 = var9.bind(var5)(var3);
                var15 = var16.objectAssign;
                var9 = _closure2_slot1;
                var3 = {};
                var3 = var15.bind(var16)(var3, var9, var19);
                _closure2_slot1 = var3;
                var6 = true;
                _fun37848_ip = 3982;
                continue _fun37848;
            case 3916:
                var9 = _closure2_slot1;
                var15 = var9.riff;
                var3 = var19;
                if (!var15) {
                    _fun37848_ip = 3974;
                    continue _fun37848
                }
            case 3932:
                var16 = _closure1_slot0;
                var15 = _closure1_slot2;
                var15 = var15[var14];
                var18 = var16.bind(var5)(var15);
                var17 = var18.objectAssign;
                var15 = _closure2_slot1;
                var16 = var15.riff;
                var15 = {};
                var3 = var17.bind(var18)(var15, var16, var19);
            case 3974:
                var9.riff = var3;
                var6 = true;
            case 3982:
                var9 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var11];
                var3 = var9.bind(var5)(var3);
                var9 = var3.USE_GIF;
                var3 = var6;
                if (!var9) {
                    _fun37848_ip = 4169;
                    continue _fun37848
                }
            case 4014:
                var3 = var6;
                if (!(var5 !== var10)) {
                    _fun37848_ip = 4169;
                    continue _fun37848
                }
            case 4024:
                var9 = _closure1_slot1;
                var15 = _closure1_slot2;
                var6 = 19;
                var6 = var15[var6];
                var9 = var9.bind(var5)(var6);
                var6 = var9.read;
                var18 = var6.bind(var9)(var13, var10);
                if (var8) {
                    _fun37848_ip = 4103;
                    continue _fun37848
                }
            case 4059:
                var9 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var14];
                var15 = var9.bind(var5)(var6);
                var10 = var15.objectAssign;
                var9 = _closure2_slot1;
                var6 = {};
                var6 = var10.bind(var15)(var6, var9, var18);
                _closure2_slot1 = var6;
                var3 = true;
                _fun37848_ip = 4169;
                continue _fun37848;
            case 4103:
                var9 = _closure2_slot1;
                var10 = var9.gif;
                var6 = var18;
                if (!var10) {
                    _fun37848_ip = 4161;
                    continue _fun37848
                }
            case 4119:
                var15 = _closure1_slot0;
                var10 = _closure1_slot2;
                var10 = var10[var14];
                var17 = var15.bind(var5)(var10);
                var16 = var17.objectAssign;
                var10 = _closure2_slot1;
                var15 = var10.gif;
                var10 = {};
                var6 = var16.bind(var17)(var10, var15, var18);
            case 4161:
                var9.gif = var6;
                var3 = true;
            case 4169:
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var6 = 20;
                var6 = var10[var6];
                var10 = var9.bind(var5)(var6);
                var9 = var10.get;
                var6 = _closure2_slot1;
                var9 = var9.bind(var10)(var6, var8);
                if (!var9) {
                    _fun37848_ip = 4264;
                    continue _fun37848
                }
            case 4207:
                if (var8) {
                    _fun37848_ip = 4252;
                    continue _fun37848
                }
            case 4210:
                var10 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var14];
                var15 = var10.bind(var5)(var6);
                var14 = var15.objectAssign;
                var10 = _closure2_slot1;
                var6 = {};
                var6 = var14.bind(var15)(var6, var10, var9);
                _closure2_slot1 = var6;
                _fun37848_ip = 4264;
                continue _fun37848;
            case 4252:
                var6 = _closure2_slot1;
                var6.composite = var9;
            case 4264:
                var9 = _closure1_slot1;
                var6 = _closure1_slot2;
                var6 = var6[var11];
                var6 = var9.bind(var5)(var6);
                var9 = var6.USE_JPEG;
                if (var9) {
                    _fun37848_ip = 4313;
                    continue _fun37848
                }
            case 4290:
                var10 = _closure1_slot1;
                var6 = _closure1_slot2;
                var6 = var6[var11];
                var6 = var10.bind(var5)(var6);
                var9 = var6.USE_WEBP;
            case 4313:
                if (!var9) {
                    _fun37848_ip = 4339;
                    continue _fun37848
                }
            case 4316:
                var10 = _closure1_slot1;
                var6 = _closure1_slot2;
                var6 = var6[var11];
                var6 = var10.bind(var5)(var6);
                var9 = var6.USE_EXIF;
            case 4339:
                if (!var9) {
                    _fun37848_ip = 4365;
                    continue _fun37848
                }
            case 4342:
                var10 = _closure1_slot1;
                var6 = _closure1_slot2;
                var6 = var6[var11];
                var6 = var10.bind(var5)(var6);
                var9 = var6.USE_THUMBNAIL;
            case 4365:
                if (!var9) {
                    _fun37848_ip = 4410;
                    continue _fun37848
                }
            case 4368:
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var6 = 21;
                var6 = var11[var6];
                var11 = var10.bind(var5)(var6);
                var10 = var11.get;
                var6 = _closure2_slot1;
                var6 = var6.Thumbnail;
                var9 = var10.bind(var11)(var13, var6, var12);
            case 4410:
                var6 = _closure2_slot1;
                if (var9) {
                    _fun37848_ip = 4424;
                    continue _fun37848
                }
            case 4417:
                var10 = delete var6.Thumbnail;
                _fun37848_ip = 4432;
                continue _fun37848;
            case 4424:
                var6.Thumbnail = var9;
                var3 = true;
            case 4432:
                if (!var7) {
                    _fun37848_ip = 4491;
                    continue _fun37848
                }
            case 4435:
                var6 = _closure2_slot1;
                if (var8) {
                    _fun37848_ip = 4452;
                    continue _fun37848
                }
            case 4442:
                var6.FileType = var7;
                var3 = true;
                _fun37848_ip = 4491;
                continue _fun37848;
            case 4452:
                var6 = var6.file;
                if (var6) {
                    _fun37848_ip = 4473;
                    continue _fun37848
                }
            case 4461:
                var8 = _closure2_slot1;
                var6 = {};
                var8.file = var6;
            case 4473:
                var6 = _closure2_slot1;
                var6 = var6.file;
                var6.FileType = var7;
                var3 = true;
            case 4491:
                if (var3) {
                    _fun37848_ip = 4541;
                    continue _fun37848
                }
            case 4494:
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 0;
                var2 = var6[var2];
                var2 = var3.bind(var5)(var2);
                var2 = var2.MetadataMissingError;
                var3 = var2.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var2
                    }
                });
                var40 = var3;
                var2 = new var40[var2](var39);
                var2 = var2 instanceof Object ? var2 : var3;
                throw var2;
            case 4541:
                if (var0) {
                    _fun37848_ip = 4550;
                    continue _fun37848
                }
            case 4544:
                var0 = _closure2_slot1;
                _fun37848_ip = 4584;
                continue _fun37848;
            case 4550:
                var2 = global;
                var3 = var2.Promise;
                var2 = var3.all;
                var3 = var2.bind(var3)(var4);
                var2 = var3.then;
                var1 = function() { // Environment: var1
                    var0 = _closure2_slot1;
                    return var0;
                };
                var0 = var2.bind(var3)(var1);
            case 4584:
                return var0;
        }
    };
    var _closure1_slot4 = var1;
    var0 = function(arg0) { // Original name: hasIptcData, environment: var4
        var1 = undefined;
        var0 = arg0;
        var0 = var1 !== var0;
        return var0;
    };
    var _closure1_slot5 = var0;
    var0 = function(arg0) { // Original name: hasXmpData, environment: var4
        _fun37854: for (var _fun37854_ip = 0;;) switch (_fun37854_ip) {
            case 0:
                var1 = arg0;
                var0 = global;
                var2 = var0.Array;
                var0 = var2.isArray;
                var0 = var0.bind(var2)(var1);
                if (!var0) {
                    _fun37854_ip = 35;
                    continue _fun37854
                }
            case 24:
                var2 = var1.length;
                var1 = 0;
                var0 = var2 > var1;
            case 35:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function(arg0) { // Original name: hasIccData, environment: var4
        _fun37855: for (var _fun37855_ip = 0;;) switch (_fun37855_ip) {
            case 0:
                var1 = arg0;
                var0 = global;
                var2 = var0.Array;
                var0 = var2.isArray;
                var0 = var0.bind(var2)(var1);
                if (!var0) {
                    _fun37855_ip = 35;
                    continue _fun37855
                }
            case 24:
                var2 = var1.length;
                var1 = 0;
                var0 = var2 > var1;
            case 35:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var7 = {};
    var7.load = var3;
    var7.loadView = var1;
    var4 = 0;
    var8 = var6[var4];
    var0 = undefined;
    var8 = var5.bind(var0)(var8);
    var7.errors = var8;
    var2.default = var7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var2.errors = var4;
    var2.load = var3;
    var2.loadView = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4128, 4129, 4130, 4131, 4132, 4145, 4147, 4148, 4160, 4164, 4168, 4170, 4172, 4173, 4174, 4175, 4176, 4177, 4178, 4179, 4180, 4181, 4154]);