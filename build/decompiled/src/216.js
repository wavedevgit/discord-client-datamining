// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun2957: for (var _fun2957_ip = 0;;) switch (_fun2957_ip) {
        case 0:
            var2 = exports;
            var1 = global;
            var _closure1_slot0 = var1;
            var1 = function arg0() {
                _fun2958: for (var _fun2958_ip = 0;;) switch (_fun2958_ip) {
                    case 0:
                        var0 = arg0;
                        var5 = var0;
                        var _closure2_slot0 = var0;
                        var0 = undefined;
                        var8 = undefined;
                        var1 = function arg0() {
                            _fun2959: for (var _fun2959_ip = 0;;) switch (_fun2959_ip) {
                                case 0:
                                    var3 = arg0;
                                    var2 = 'string';
                                    var0 = typeof var3;
                                    var1 = var3;
                                    if (!(var2 !== var0)) {
                                        _fun2959_ip = 32;
                                        continue _fun2959
                                    }
                                case 17:
                                    var0 = global;
                                    var2 = var0.String;
                                    var0 = undefined;
                                    var1 = var2.bind(var0)(var3);
                                case 32:
                                    var2 = /[^a-z0-9\-#$%&'*+.^_`|~!]/i;
                                    var0 = var2.test;
                                    var0 = var0.bind(var2)(var1);
                                    if (var0) {
                                        _fun2959_ip = 79;
                                        continue _fun2959
                                    }
                                case 59:
                                    var0 = '';
                                    if (!(var0 !== var1)) {
                                        _fun2959_ip = 79;
                                        continue _fun2959
                                    }
                                case 67:
                                    var0 = var1.toLowerCase;
                                    var0 = var0.bind(var1)();
                                    return var0;
                                case 79:
                                    var0 = global;
                                    var2 = var0.TypeError;
                                    var0 = 'Invalid character in header field name: "';
                                    var3 = var0 + var1;
                                    var0 = var2.prototype;
                                    var1 = Object.create(var0, {
                                        constructor: {
                                            value: var2
                                        }
                                    });
                                    var0 = '"';
                                    var4 = var3 + var0;
                                    var5 = var1;
                                    var0 = new var5[var2](var4, var3);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    throw var0;
                            }
                        };
                        var _closure2_slot11 = var1;
                        var1 = function arg0() {
                            _fun2960: for (var _fun2960_ip = 0;;) switch (_fun2960_ip) {
                                case 0:
                                    var3 = arg0;
                                    var2 = 'string';
                                    var1 = typeof var3;
                                    var0 = var3;
                                    if (!(var2 !== var1)) {
                                        _fun2960_ip = 32;
                                        continue _fun2960
                                    }
                                case 17:
                                    var1 = global;
                                    var2 = var1.String;
                                    var1 = undefined;
                                    var0 = var2.bind(var1)(var3);
                                case 32:
                                    return var0;
                            }
                        };
                        var _closure2_slot12 = var1;
                        var1 = function arg0() {
                            _fun2961: for (var _fun2961_ip = 0;;) switch (_fun2961_ip) {
                                case 0:
                                    var0 = arg0;
                                    var _closure3_slot0 = var0;
                                    var0 = {};
                                    var2 = function() {
                                        var1 = _closure3_slot0;
                                        var0 = var1.shift;
                                        var1 = var0.bind(var1)();
                                        var0 = {};
                                        var2 = undefined;
                                        var2 = var2 === var1;
                                        var0.done = var2;
                                        var0.value = var1;
                                        return var0;
                                    };
                                    var0.next = var2;
                                    var _closure3_slot1 = var0;
                                    var2 = _closure2_slot3;
                                    if (!var2) {
                                        _fun2961_ip = 57;
                                        continue _fun2961
                                    }
                                case 34:
                                    var2 = global;
                                    var2 = var2.Symbol;
                                    var2 = var2.iterator;
                                    var1 = function() { // Environment: var1
                                        var0 = _closure3_slot1;
                                        return var0;
                                    };
                                    var0[var2] = var1;
                                case 57:
                                    return var0;
                            }
                        };
                        var _closure2_slot13 = var1;
                        var1 = function arg0() {
                            _fun2964: for (var _fun2964_ip = 0;;) switch (_fun2964_ip) {
                                case 0:
                                    var3 = arg0;
                                    var2 = this;
                                    var _closure3_slot0 = var3;
                                    var1 = {};
                                    var2.map = var1;
                                    var1 = _closure2_slot14;
                                    var1 = var3 instanceof var1;
                                    if (var1) {
                                        _fun2964_ip = 111;
                                        continue _fun2964
                                    }
                                case 34:
                                    var1 = global;
                                    var5 = var1.Array;
                                    var4 = var5.isArray;
                                    var4 = var4.bind(var5)(var3);
                                    if (var4) {
                                        _fun2964_ip = 93;
                                        continue _fun2964
                                    }
                                case 55:
                                    if (!var3) {
                                        _fun2964_ip = 127;
                                        continue _fun2964
                                    }
                                case 58:
                                    var4 = var1.Object;
                                    var1 = var4.getOwnPropertyNames;
                                    var5 = var1.bind(var4)(var3);
                                    var4 = var5.forEach;
                                    var1 = function(arg0) { // Environment: var0
                                        var3 = arg0;
                                        var2 = this;
                                        var1 = var2.append;
                                        var0 = _closure3_slot0;
                                        var0 = var0[var3];
                                        var0 = var1.bind(var2)(var3, var0);
                                        var0 = undefined;
                                        return var0;
                                    };
                                    var1 = var4.bind(var5)(var1, var2);
                                    _fun2964_ip = 127;
                                    continue _fun2964;
                                case 93:
                                    var4 = var3.forEach;
                                    var1 = function(arg0) { // Environment: var0
                                        _fun2966: for (var _fun2966_ip = 0;;) switch (_fun2966_ip) {
                                            case 0:
                                                var0 = arg0;
                                                var4 = this;
                                                var2 = var0.length;
                                                var1 = 2;
                                                if (!(var1 == var2)) {
                                                    _fun2966_ip = 47;
                                                    continue _fun2966
                                                }
                                            case 18:
                                                var3 = var4.append;
                                                var1 = 0;
                                                var2 = var0[var1];
                                                var1 = 1;
                                                var1 = var0[var1];
                                                var1 = var3.bind(var4)(var2, var1);
                                                var1 = undefined;
                                                return var1;
                                            case 47:
                                                var1 = global;
                                                var2 = var1.TypeError;
                                                var1 = var0.length;
                                                var0 = 'Headers constructor: expected name/value pair to be length 2, found';
                                                var6 = var0 + var1;
                                                var1 = var2.prototype;
                                                var1 = Object.create(var1, {
                                                    constructor: {
                                                        value: var2
                                                    }
                                                });
                                                var7 = var1;
                                                var0 = new var7[var2](var6, var5);
                                                var0 = var0 instanceof Object ? var0 : var1;
                                                throw var0;
                                        }
                                    };
                                    var1 = var4.bind(var3)(var1, var2);
                                    _fun2964_ip = 127;
                                    continue _fun2964;
                                case 111:
                                    var1 = var3.forEach;
                                    var0 = function(arg0, arg1) { // Environment: var0
                                        var3 = this;
                                        var2 = var3.append;
                                        var1 = arg1;
                                        var0 = arg0;
                                        var0 = var2.bind(var3)(var1, var0);
                                        var0 = undefined;
                                        return var0;
                                    };
                                    var0 = var1.bind(var3)(var0, var2);
                                case 127:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var7 = var1;
                        var _closure2_slot14 = var1;
                        var1 = function arg0() {
                            _fun2968: for (var _fun2968_ip = 0;;) switch (_fun2968_ip) {
                                case 0:
                                    var1 = arg0;
                                    var0 = var1._noBody;
                                    if (var0) {
                                        _fun2968_ip = 86;
                                        continue _fun2968
                                    }
                                case 12:
                                    var0 = var1.bodyUsed;
                                    if (var0) {
                                        _fun2968_ip = 33;
                                        continue _fun2968
                                    }
                                case 21:
                                    var0 = true;
                                    var1.bodyUsed = var0;
                                    var0 = undefined;
                                    _fun2968_ip = 84;
                                    continue _fun2968;
                                case 33:
                                    var1 = global;
                                    var3 = var1.Promise;
                                    var2 = var3.reject;
                                    var5 = var1.TypeError;
                                    var1 = var5.prototype;
                                    var4 = Object.create(var1, {
                                        constructor: {
                                            value: var5
                                        }
                                    });
                                    var6 = 'Already read';
                                    var7 = var4;
                                    var1 = new var7[var5](var6, var5);
                                    var1 = var1 instanceof Object ? var1 : var4;
                                    var0 = var2.bind(var3)(var1);
                                case 84:
                                    return var0;
                                case 86:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var _closure2_slot15 = var1;
                        var1 = function arg0() {
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
                                var1 = _closure3_slot0;
                                var2 = function() { // Environment: var0
                                    var2 = _closure4_slot0;
                                    var0 = _closure3_slot0;
                                    var1 = var0.result;
                                    var0 = undefined;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                var1.onload = var2;
                                var0 = function() { // Environment: var0
                                    var2 = _closure4_slot1;
                                    var0 = _closure3_slot0;
                                    var1 = var0.error;
                                    var0 = undefined;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                var1.onerror = var0;
                                var0 = undefined;
                                return var0;
                            };
                            var4 = var1;
                            var0 = new var4[var2](var3, var2);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                        };
                        var _closure2_slot16 = var1;
                        var1 = function arg0() {
                            var0 = global;
                            var0 = var0.FileReader;
                            var1 = var0.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var0
                                }
                            });
                            var5 = var1;
                            var0 = new var5[var0](var4);
                            var3 = var0 instanceof Object ? var0 : var1;
                            var1 = _closure2_slot16;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var3);
                            var2 = var3.readAsArrayBuffer;
                            var1 = arg0;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var _closure2_slot17 = var1;
                        var1 = function arg0() {
                            _fun2974: for (var _fun2974_ip = 0;;) switch (_fun2974_ip) {
                                case 0:
                                    var2 = arg0;
                                    var0 = var2.slice;
                                    if (var0) {
                                        _fun2974_ip = 92;
                                        continue _fun2974
                                    }
                                case 11:
                                    var1 = global;
                                    var4 = var1.Uint8Array;
                                    var5 = var2.byteLength;
                                    var3 = var4.prototype;
                                    var3 = Object.create(var3, {
                                        constructor: {
                                            value: var4
                                        }
                                    });
                                    var6 = var3;
                                    var0 = new var6[var4](var5, var4);
                                    var0 = var0 instanceof Object ? var0 : var3;
                                    var3 = var0.set;
                                    var1 = var1.Uint8Array;
                                    var4 = var1.prototype;
                                    var4 = Object.create(var4, {
                                        constructor: {
                                            value: var1
                                        }
                                    });
                                    var6 = var4;
                                    var5 = var2;
                                    var1 = new var6[var1](var5, var4);
                                    var1 = var1 instanceof Object ? var1 : var4;
                                    var1 = var3.bind(var0)(var1);
                                    var0 = var0.buffer;
                                    return var0;
                                case 92:
                                    var1 = var2.slice;
                                    var0 = 0;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                            }
                        };
                        var _closure2_slot18 = var1;
                        var10 = function() {
                            _fun2975: for (var _fun2975_ip = 0;;) switch (_fun2975_ip) {
                                case 0:
                                    var0 = this;
                                    var2 = false;
                                    var0.bodyUsed = var2;
                                    var2 = function(arg0) { // Environment: var1
                                        _fun2976: for (var _fun2976_ip = 0;;) switch (_fun2976_ip) {
                                            case 0:
                                                var1 = arg0;
                                                var0 = this;
                                                var2 = var0.bodyUsed;
                                                var0.bodyUsed = var2;
                                                var0._bodyInit = var1;
                                                if (var1) {
                                                    _fun2976_ip = 53;
                                                    continue _fun2976
                                                }
                                            case 27:
                                                var2 = true;
                                                var0._noBody = var2;
                                                var2 = '';
                                                var0._bodyText = var2;
                                                var5 = var1;
                                                _fun2976_ip = 473;
                                                continue _fun2976;
                                            case 53:
                                                var3 = 'string';
                                                var2 = typeof var1;
                                                if (!(var3 !== var2)) {
                                                    _fun2976_ip = 464;
                                                    continue _fun2976
                                                }
                                            case 67:
                                                var3 = _closure2_slot4;
                                                if (!var3) {
                                                    _fun2976_ip = 107;
                                                    continue _fun2976
                                                }
                                            case 77:
                                                var3 = global;
                                                var3 = var3.Blob;
                                                var4 = var3.prototype;
                                                var3 = var4.isPrototypeOf;
                                                var3 = var3.bind(var4)(var1);
                                                if (var3) {
                                                    _fun2976_ip = 453;
                                                    continue _fun2976
                                                }
                                            case 107:
                                                var3 = _closure2_slot5;
                                                if (!var3) {
                                                    _fun2976_ip = 144;
                                                    continue _fun2976
                                                }
                                            case 114:
                                                var3 = global;
                                                var3 = var3.FormData;
                                                var4 = var3.prototype;
                                                var3 = var4.isPrototypeOf;
                                                var3 = var3.bind(var4)(var1);
                                                if (var3) {
                                                    _fun2976_ip = 442;
                                                    continue _fun2976
                                                }
                                            case 144:
                                                var3 = _closure2_slot2;
                                                if (!var3) {
                                                    _fun2976_ip = 181;
                                                    continue _fun2976
                                                }
                                            case 151:
                                                var3 = global;
                                                var3 = var3.URLSearchParams;
                                                var4 = var3.prototype;
                                                var3 = var4.isPrototypeOf;
                                                var3 = var3.bind(var4)(var1);
                                                if (var3) {
                                                    _fun2976_ip = 422;
                                                    continue _fun2976
                                                }
                                            case 181:
                                                var3 = _closure2_slot6;
                                                if (!var3) {
                                                    _fun2976_ip = 228;
                                                    continue _fun2976
                                                }
                                            case 188:
                                                var3 = _closure2_slot4;
                                                if (!var3) {
                                                    _fun2976_ip = 228;
                                                    continue _fun2976
                                                }
                                            case 195:
                                                var3 = var1;
                                                if (!var1) {
                                                    _fun2976_ip = 225;
                                                    continue _fun2976
                                                }
                                            case 201:
                                                var4 = global;
                                                var4 = var4.DataView;
                                                var6 = var4.prototype;
                                                var4 = var6.isPrototypeOf;
                                                var3 = var4.bind(var6)(var1);
                                            case 225:
                                                if (var3) {
                                                    _fun2976_ip = 343;
                                                    continue _fun2976
                                                }
                                            case 228:
                                                var3 = _closure2_slot6;
                                                if (!var3) {
                                                    _fun2976_ip = 276;
                                                    continue _fun2976
                                                }
                                            case 235:
                                                var3 = global;
                                                var3 = var3.ArrayBuffer;
                                                var4 = var3.prototype;
                                                var3 = var4.isPrototypeOf;
                                                var3 = var3.bind(var4)(var1);
                                                if (var3) {
                                                    _fun2976_ip = 318;
                                                    continue _fun2976
                                                }
                                            case 262:
                                                var4 = _closure2_slot8;
                                                var3 = undefined;
                                                var3 = var4.bind(var3)(var1);
                                                if (var3) {
                                                    _fun2976_ip = 318;
                                                    continue _fun2976
                                                }
                                            case 276:
                                                var3 = global;
                                                var3 = var3.Object;
                                                var3 = var3.prototype;
                                                var4 = var3.toString;
                                                var3 = var4.call;
                                                var3 = var3.bind(var4)(var1);
                                                var0._bodyText = var3;
                                                var5 = var3;
                                                _fun2976_ip = 473;
                                                continue _fun2976;
                                            case 318:
                                                var4 = _closure2_slot18;
                                                var3 = undefined;
                                                var3 = var4.bind(var3)(var1);
                                                var0._bodyArrayBuffer = var3;
                                                var5 = var1;
                                                _fun2976_ip = 473;
                                                continue _fun2976;
                                            case 343:
                                                var4 = _closure2_slot18;
                                                var3 = var1.buffer;
                                                var2 = undefined;
                                                var2 = var4.bind(var2)(var3);
                                                var0._bodyArrayBuffer = var2;
                                                var2 = global;
                                                var4 = var2.Blob;
                                                var3 = var0._bodyArrayBuffer;
                                                var2 = new Array(1);
                                                var2[0] = var3;
                                                var3 = var4.prototype;
                                                var3 = Object.create(var3, {
                                                    constructor: {
                                                        value: var4
                                                    }
                                                });
                                                var9 = var3;
                                                var8 = var2;
                                                var2 = new var9[var4](var8, var7);
                                                var2 = var2 instanceof Object ? var2 : var3;
                                                var0._bodyInit = var2;
                                                var5 = var1;
                                                _fun2976_ip = 473;
                                                continue _fun2976;
                                            case 422:
                                                var2 = var1.toString;
                                                var2 = var2.bind(var1)();
                                                var0._bodyText = var2;
                                                var5 = var1;
                                                _fun2976_ip = 473;
                                                continue _fun2976;
                                            case 442:
                                                var0._bodyFormData = var1;
                                                var5 = var1;
                                                _fun2976_ip = 473;
                                                continue _fun2976;
                                            case 453:
                                                var0._bodyBlob = var1;
                                                var5 = var1;
                                                _fun2976_ip = 473;
                                                continue _fun2976;
                                            case 464:
                                                var0._bodyText = var1;
                                                var5 = var1;
                                            case 473:
                                                var2 = var0.headers;
                                                var1 = var2.get;
                                                var3 = 'content-type';
                                                var1 = var1.bind(var2)(var3);
                                                if (var1) {
                                                    _fun2976_ip = 648;
                                                    continue _fun2976
                                                }
                                            case 499:
                                                var2 = 'string';
                                                var1 = typeof var5;
                                                if (!(var2 !== var1)) {
                                                    _fun2976_ip = 625;
                                                    continue _fun2976
                                                }
                                            case 510:
                                                var1 = var0._bodyBlob;
                                                if (!var1) {
                                                    _fun2976_ip = 533;
                                                    continue _fun2976
                                                }
                                            case 519:
                                                var1 = var0._bodyBlob;
                                                var1 = var1.type;
                                                if (var1) {
                                                    _fun2976_ip = 595;
                                                    continue _fun2976
                                                }
                                            case 533:
                                                var1 = _closure2_slot2;
                                                if (!var1) {
                                                    _fun2976_ip = 567;
                                                    continue _fun2976
                                                }
                                            case 543:
                                                var2 = global;
                                                var2 = var2.URLSearchParams;
                                                var4 = var2.prototype;
                                                var2 = var4.isPrototypeOf;
                                                var1 = var2.bind(var4)(var5);
                                            case 567:
                                                if (!var1) {
                                                    _fun2976_ip = 648;
                                                    continue _fun2976
                                                }
                                            case 570:
                                                var4 = var0.headers;
                                                var2 = var4.set;
                                                var1 = 'application/x-www-form-urlencoded;charset=UTF-8';
                                                var1 = var2.bind(var4)(var3, var1);
                                                _fun2976_ip = 648;
                                                continue _fun2976;
                                            case 595:
                                                var4 = var0.headers;
                                                var2 = var4.set;
                                                var1 = var0._bodyBlob;
                                                var1 = var1.type;
                                                var1 = var2.bind(var4)(var3, var1);
                                                _fun2976_ip = 648;
                                                continue _fun2976;
                                            case 625:
                                                var2 = var0.headers;
                                                var1 = var2.set;
                                                var0 = 'text/plain;charset=UTF-8';
                                                var0 = var1.bind(var2)(var3, var0);
                                            case 648:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var0._initBody = var2;
                                    var3 = _closure2_slot4;
                                    if (!var3) {
                                        _fun2975_ip = 45;
                                        continue _fun2975
                                    }
                                case 34:
                                    var3 = function() { // Environment: var1
                                        _fun2977: for (var _fun2977_ip = 0;;) switch (_fun2977_ip) {
                                            case 0:
                                                var1 = this;
                                                var2 = _closure2_slot15;
                                                var0 = undefined;
                                                var0 = var2.bind(var0)(var1);
                                                if (var0) {
                                                    _fun2977_ip = 238;
                                                    continue _fun2977
                                                }
                                            case 23:
                                                var3 = var1._bodyBlob;
                                                var2 = global;
                                                if (var3) {
                                                    _fun2977_ip = 213;
                                                    continue _fun2977
                                                }
                                            case 37:
                                                var3 = var1._bodyArrayBuffer;
                                                if (var3) {
                                                    _fun2977_ip = 151;
                                                    continue _fun2977
                                                }
                                            case 46:
                                                var3 = var1._bodyFormData;
                                                if (var3) {
                                                    _fun2977_ip = 117;
                                                    continue _fun2977
                                                }
                                            case 55:
                                                var5 = var2.Promise;
                                                var4 = var5.resolve;
                                                var7 = var2.Blob;
                                                var6 = var1._bodyText;
                                                var3 = new Array(1);
                                                var3[0] = var6;
                                                var6 = var7.prototype;
                                                var6 = Object.create(var6, {
                                                    constructor: {
                                                        value: var7
                                                    }
                                                });
                                                var9 = var6;
                                                var8 = var3;
                                                var3 = new var9[var7](var8, var7);
                                                var3 = var3 instanceof Object ? var3 : var6;
                                                var3 = var4.bind(var5)(var3);
                                                return var3;
                                            case 117:
                                                var5 = var2.Error;
                                                var3 = var5.prototype;
                                                var4 = Object.create(var3, {
                                                    constructor: {
                                                        value: var5
                                                    }
                                                });
                                                var8 = 'could not read FormData body as blob';
                                                var9 = var4;
                                                var3 = new var9[var5](var8, var7);
                                                var3 = var3 instanceof Object ? var3 : var4;
                                                throw var3;
                                            case 151:
                                                var5 = var2.Promise;
                                                var4 = var5.resolve;
                                                var7 = var2.Blob;
                                                var6 = var1._bodyArrayBuffer;
                                                var3 = new Array(1);
                                                var3[0] = var6;
                                                var6 = var7.prototype;
                                                var6 = Object.create(var6, {
                                                    constructor: {
                                                        value: var7
                                                    }
                                                });
                                                var9 = var6;
                                                var8 = var3;
                                                var3 = new var9[var7](var8, var7);
                                                var3 = var3 instanceof Object ? var3 : var6;
                                                var3 = var4.bind(var5)(var3);
                                                return var3;
                                            case 213:
                                                var3 = var2.Promise;
                                                var2 = var3.resolve;
                                                var1 = var1._bodyBlob;
                                                var1 = var2.bind(var3)(var1);
                                                return var1;
                                            case 238:
                                                return var0;
                                        }
                                    };
                                    var0.blob = var3;
                                case 45:
                                    var3 = function() { // Environment: var1
                                        _fun2978: for (var _fun2978_ip = 0;;) switch (_fun2978_ip) {
                                            case 0:
                                                var2 = this;
                                                var1 = var2._bodyArrayBuffer;
                                                if (var1) {
                                                    _fun2978_ip = 84;
                                                    continue _fun2978
                                                }
                                            case 15:
                                                var1 = _closure2_slot4;
                                                if (var1) {
                                                    _fun2978_ip = 58;
                                                    continue _fun2978
                                                }
                                            case 22:
                                                var1 = global;
                                                var4 = var1.Error;
                                                var1 = var4.prototype;
                                                var3 = Object.create(var1, {
                                                    constructor: {
                                                        value: var4
                                                    }
                                                });
                                                var10 = 'could not read as ArrayBuffer';
                                                var11 = var3;
                                                var1 = new var11[var4](var10, var9);
                                                var1 = var1 instanceof Object ? var1 : var3;
                                                throw var1;
                                            case 58:
                                                var1 = var2.blob;
                                                var4 = var1.bind(var2)();
                                                var3 = var4.then;
                                                var1 = _closure2_slot17;
                                                var1 = var3.bind(var4)(var1);
                                                return var1;
                                            case 84:
                                                var1 = _closure2_slot15;
                                                var0 = undefined;
                                                var0 = var1.bind(var0)(var2);
                                                if (var0) {
                                                    _fun2978_ip = 216;
                                                    continue _fun2978
                                                }
                                            case 98:
                                                var3 = global;
                                                var5 = var3.ArrayBuffer;
                                                var4 = var5.isView;
                                                var1 = var2._bodyArrayBuffer;
                                                var1 = var4.bind(var5)(var1);
                                                var4 = var3.Promise;
                                                var3 = var4.resolve;
                                                var5 = var2._bodyArrayBuffer;
                                                if (var1) {
                                                    _fun2978_ip = 151;
                                                    continue _fun2978
                                                }
                                            case 144:
                                                var1 = var3.bind(var4)(var5);
                                                _fun2978_ip = 213;
                                                continue _fun2978;
                                            case 151:
                                                var7 = var5.buffer;
                                                var6 = var7.slice;
                                                var5 = var2._bodyArrayBuffer;
                                                var5 = var5.byteOffset;
                                                var8 = var2._bodyArrayBuffer;
                                                var8 = var8.byteOffset;
                                                var2 = var2._bodyArrayBuffer;
                                                var2 = var2.byteLength;
                                                var2 = var8 + var2;
                                                var2 = var6.bind(var7)(var5, var2);
                                                var1 = var3.bind(var4)(var2);
                                            case 213:
                                                var0 = var1;
                                            case 216:
                                                return var0;
                                        }
                                    };
                                    var0.arrayBuffer = var3;
                                    var3 = function() { // Environment: var1
                                        _fun2979: for (var _fun2979_ip = 0;;) switch (_fun2979_ip) {
                                            case 0:
                                                var3 = this;
                                                var0 = _closure2_slot15;
                                                var2 = undefined;
                                                var0 = var0.bind(var2)(var3);
                                                if (var0) {
                                                    _fun2979_ip = 364;
                                                    continue _fun2979
                                                }
                                            case 23:
                                                var4 = var3._bodyBlob;
                                                if (var4) {
                                                    _fun2979_ip = 261;
                                                    continue _fun2979
                                                }
                                            case 35:
                                                var4 = var3._bodyArrayBuffer;
                                                var10 = global;
                                                if (var4) {
                                                    _fun2979_ip = 114;
                                                    continue _fun2979
                                                }
                                            case 46:
                                                var4 = var3._bodyFormData;
                                                if (var4) {
                                                    _fun2979_ip = 80;
                                                    continue _fun2979
                                                }
                                            case 55:
                                                var6 = var10.Promise;
                                                var5 = var6.resolve;
                                                var4 = var3._bodyText;
                                                var4 = var5.bind(var6)(var4);
                                                return var4;
                                            case 80:
                                                var6 = var10.Error;
                                                var4 = var6.prototype;
                                                var5 = Object.create(var4, {
                                                    constructor: {
                                                        value: var6
                                                    }
                                                });
                                                var14 = 'could not read FormData body as text';
                                                var15 = var5;
                                                var4 = new var15[var6](var14, var13);
                                                var4 = var4 instanceof Object ? var4 : var5;
                                                throw var4;
                                            case 114:
                                                var6 = var10.Promise;
                                                var5 = var6.resolve;
                                                var14 = var3._bodyArrayBuffer;
                                                var4 = var10.Uint8Array;
                                                var7 = var4.prototype;
                                                var7 = Object.create(var7, {
                                                    constructor: {
                                                        value: var4
                                                    }
                                                });
                                                var15 = var7;
                                                var4 = new var15[var4](var14, var13);
                                                var9 = var4 instanceof Object ? var4 : var7;
                                                var8 = var10.Array;
                                                var14 = var9.length;
                                                var7 = var8.prototype;
                                                var7 = Object.create(var7, {
                                                    constructor: {
                                                        value: var8
                                                    }
                                                });
                                                var15 = var7;
                                                var4 = new var15[var8](var14, var13);
                                                var8 = var4 instanceof Object ? var4 : var7;
                                                var4 = var9.length;
                                                var7 = 0;
                                                var4 = var7 < var4;
                                                if (!var4) {
                                                    _fun2979_ip = 240;
                                                    continue _fun2979
                                                }
                                            case 203:
                                                var12 = var10.String;
                                                var11 = var12.fromCharCode;
                                                var4 = var9[var7];
                                                var4 = var11.bind(var12)(var4);
                                                var8[var7] = var4;
                                                var7 = var7 + 1;
                                                var4 = var9.length;
                                                if (var7 < var4) {
                                                    _fun2979_ip = 203;
                                                    continue _fun2979
                                                }
                                            case 240:
                                                var7 = var8.join;
                                                var4 = '';
                                                var4 = var7.bind(var8)(var4);
                                                var4 = var5.bind(var6)(var4);
                                                return var4;
                                            case 261:
                                                var5 = var3._bodyBlob;
                                                var3 = global;
                                                var3 = var3.FileReader;
                                                var4 = var3.prototype;
                                                var4 = Object.create(var4, {
                                                    constructor: {
                                                        value: var3
                                                    }
                                                });
                                                var15 = var4;
                                                var3 = new var15[var3](var14);
                                                var4 = var3 instanceof Object ? var3 : var4;
                                                var1 = _closure2_slot16;
                                                var1 = var1.bind(var2)(var4);
                                                var6 = /charset=([A-Za-z0-9_-]+)/;
                                                var3 = var6.exec;
                                                var2 = var5.type;
                                                var6 = var3.bind(var6)(var2);
                                                var3 = 'utf-8';
                                                if (!var6) {
                                                    _fun2979_ip = 350;
                                                    continue _fun2979
                                                }
                                            case 343:
                                                var2 = 1;
                                                var3 = var6[var2];
                                            case 350:
                                                var2 = var4.readAsText;
                                                var2 = var2.bind(var4)(var5, var3);
                                                return var1;
                                            case 364:
                                                return var0;
                                        }
                                    };
                                    var0.text = var3;
                                    var2 = _closure2_slot5;
                                    if (!var2) {
                                        _fun2975_ip = 85;
                                        continue _fun2975
                                    }
                                case 74:
                                    var2 = function() { // Environment: var1
                                        var1 = this;
                                        var0 = var1.text;
                                        var2 = var0.bind(var1)();
                                        var1 = var2.then;
                                        var0 = _closure2_slot20;
                                        var0 = var1.bind(var2)(var0);
                                        return var0;
                                    };
                                    var0.formData = var2;
                                case 85:
                                    var1 = function() { // Environment: var1
                                        var1 = this;
                                        var0 = var1.text;
                                        var2 = var0.bind(var1)();
                                        var1 = var2.then;
                                        var0 = global;
                                        var0 = var0.JSON;
                                        var0 = var0.parse;
                                        var0 = var1.bind(var2)(var0);
                                        return var0;
                                    };
                                    var0.json = var1;
                                    return var0;
                            }
                        };
                        var1 = function arg0, arg1() {
                            _fun2982: for (var _fun2982_ip = 0;;) switch (_fun2982_ip) {
                                case 0:
                                    var6 = arg0;
                                    var0 = arg1;
                                    var1 = this;
                                    var2 = _closure2_slot19;
                                    var2 = var1 instanceof var2;
                                    if (var2) {
                                        _fun2982_ip = 59;
                                        continue _fun2982
                                    }
                                case 23:
                                    var2 = global;
                                    var5 = var2.TypeError;
                                    var2 = var5.prototype;
                                    var4 = Object.create(var2, {
                                        constructor: {
                                            value: var5
                                        }
                                    });
                                    var10 = 'Please use the "new" operator, this DOM object constructor cannot be called as a function.';
                                    var11 = var4;
                                    var2 = new var11[var5](var10, var9);
                                    var2 = var2 instanceof Object ? var2 : var4;
                                    throw var2;
                                case 59:
                                    if (var0) {
                                        _fun2982_ip = 64;
                                        continue _fun2982
                                    }
                                case 62:
                                    var0 = {};
                                case 64:
                                    var5 = var0.body;
                                    var2 = _closure2_slot19;
                                    var2 = var6 instanceof var2;
                                    if (var2) {
                                        _fun2982_ip = 109;
                                        continue _fun2982
                                    }
                                case 80:
                                    var2 = global;
                                    var4 = var2.String;
                                    var2 = undefined;
                                    var2 = var4.bind(var2)(var6);
                                    var1.url = var2;
                                    var4 = var5;
                                    _fun2982_ip = 262;
                                    continue _fun2982;
                                case 109:
                                    var2 = var6.bodyUsed;
                                    if (var2) {
                                        _fun2982_ip = 886;
                                        continue _fun2982
                                    }
                                case 121:
                                    var2 = var6.url;
                                    var1.url = var2;
                                    var2 = var6.credentials;
                                    var1.credentials = var2;
                                    var2 = var0.headers;
                                    if (var2) {
                                        _fun2982_ip = 189;
                                        continue _fun2982
                                    }
                                case 153:
                                    var8 = _closure2_slot14;
                                    var10 = var6.headers;
                                    var7 = var8.prototype;
                                    var7 = Object.create(var7, {
                                        constructor: {
                                            value: var8
                                        }
                                    });
                                    var11 = var7;
                                    var2 = new var11[var8](var10, var9);
                                    var2 = var2 instanceof Object ? var2 : var7;
                                    var1.headers = var2;
                                case 189:
                                    var2 = var6.method;
                                    var1.method = var2;
                                    var2 = var6.mode;
                                    var1.mode = var2;
                                    var2 = var6.signal;
                                    var1.signal = var2;
                                    var2 = var5;
                                    if (var5) {
                                        _fun2982_ip = 242;
                                        continue _fun2982
                                    }
                                case 230:
                                    var8 = var6._bodyInit;
                                    var7 = null;
                                    var2 = var7 == var8;
                                case 242:
                                    var4 = var5;
                                    if (var2) {
                                        _fun2982_ip = 262;
                                        continue _fun2982
                                    }
                                case 248:
                                    var4 = var6._bodyInit;
                                    var5 = true;
                                    var6.bodyUsed = var5;
                                case 262:
                                    var2 = var0.credentials;
                                    if (var2) {
                                        _fun2982_ip = 277;
                                        continue _fun2982
                                    }
                                case 271:
                                    var2 = var1.credentials;
                                case 277:
                                    if (var2) {
                                        _fun2982_ip = 286;
                                        continue _fun2982
                                    }
                                case 280:
                                    var2 = 'same-origin';
                                case 286:
                                    var1.credentials = var2;
                                    var2 = var0.headers;
                                    var2 = !var2;
                                    if (!var2) {
                                        _fun2982_ip = 310;
                                        continue _fun2982
                                    }
                                case 304:
                                    var2 = var1.headers;
                                case 310:
                                    if (var2) {
                                        _fun2982_ip = 349;
                                        continue _fun2982
                                    }
                                case 313:
                                    var6 = _closure2_slot14;
                                    var10 = var0.headers;
                                    var5 = var6.prototype;
                                    var5 = Object.create(var5, {
                                        constructor: {
                                            value: var6
                                        }
                                    });
                                    var11 = var5;
                                    var2 = new var11[var6](var10, var9);
                                    var2 = var2 instanceof Object ? var2 : var5;
                                    var1.headers = var2;
                                case 349:
                                    var2 = var0.method;
                                    if (var2) {
                                        _fun2982_ip = 364;
                                        continue _fun2982
                                    }
                                case 358:
                                    var2 = var1.method;
                                case 364:
                                    if (var2) {
                                        _fun2982_ip = 373;
                                        continue _fun2982
                                    }
                                case 367:
                                    var2 = 'GET';
                                case 373:
                                    var5 = var2.toUpperCase;
                                    var5 = var5.bind(var2)();
                                    var7 = _closure2_slot9;
                                    var6 = var7.indexOf;
                                    var7 = var6.bind(var7)(var5);
                                    var6 = -1;
                                    if (!(var7 > var6)) {
                                        _fun2982_ip = 411;
                                        continue _fun2982
                                    }
                                case 408:
                                    var2 = var5;
                                case 411:
                                    var1.method = var2;
                                    var2 = var0.mode;
                                    if (var2) {
                                        _fun2982_ip = 430;
                                        continue _fun2982
                                    }
                                case 425:
                                    var2 = var1.mode;
                                case 430:
                                    if (var2) {
                                        _fun2982_ip = 435;
                                        continue _fun2982
                                    }
                                case 433:
                                    var2 = null;
                                case 435:
                                    var1.mode = var2;
                                    var2 = var0.signal;
                                    if (var2) {
                                        _fun2982_ip = 456;
                                        continue _fun2982
                                    }
                                case 450:
                                    var2 = var1.signal;
                                case 456:
                                    if (var2) {
                                        _fun2982_ip = 513;
                                        continue _fun2982
                                    }
                                case 459:
                                    var5 = _closure2_slot1;
                                    var3 = 'AbortController';
                                    var5 = var3 in var5;
                                    var3 = undefined;
                                    if (!var5) {
                                        _fun2982_ip = 510;
                                        continue _fun2982
                                    }
                                case 476:
                                    var5 = global;
                                    var5 = var5.AbortController;
                                    var6 = var5.prototype;
                                    var6 = Object.create(var6, {
                                        constructor: {
                                            value: var5
                                        }
                                    });
                                    var11 = var6;
                                    var5 = new var11[var5](var10);
                                    var5 = var5 instanceof Object ? var5 : var6;
                                    var3 = var5.signal;
                                case 510:
                                    var2 = var3;
                                case 513:
                                    var1.signal = var2;
                                    var2 = null;
                                    var1.referrer = var2;
                                    var2 = var1.method;
                                    var3 = 'GET';
                                    if (!(var3 !== var2)) {
                                        _fun2982_ip = 559;
                                        continue _fun2982
                                    }
                                case 543:
                                    var5 = var1.method;
                                    var2 = 'HEAD';
                                    if (!(var2 === var5)) {
                                        _fun2982_ip = 565;
                                        continue _fun2982
                                    }
                                case 559:
                                    if (var4) {
                                        _fun2982_ip = 850;
                                        continue _fun2982
                                    }
                                case 565:
                                    var2 = var1._initBody;
                                    var2 = var2.bind(var1)(var4);
                                    var2 = var1.method;
                                    if (!(var3 !== var2)) {
                                        _fun2982_ip = 605;
                                        continue _fun2982
                                    }
                                case 586:
                                    var3 = var1.method;
                                    var2 = 'HEAD';
                                    if (!(var2 === var3)) {
                                        _fun2982_ip = 846;
                                        continue _fun2982
                                    }
                                case 605:
                                    var3 = var0.cache;
                                    var2 = 'no-store';
                                    if (!(var2 !== var3)) {
                                        _fun2982_ip = 640;
                                        continue _fun2982
                                    }
                                case 621:
                                    var2 = var0.cache;
                                    var0 = 'no-cache';
                                    if (!(var0 === var2)) {
                                        _fun2982_ip = 846;
                                        continue _fun2982
                                    }
                                case 640:
                                    var4 = /([?&])_=[^&]*/;
                                    var2 = var4.test;
                                    var0 = var1.url;
                                    var0 = var2.bind(var4)(var0);
                                    var3 = var1.url;
                                    if (var0) {
                                        _fun2982_ip = 781;
                                        continue _fun2982
                                    }
                                case 677:
                                    var5 = /\?/;
                                    var2 = var5.test;
                                    var0 = var1.url;
                                    var0 = var2.bind(var5)(var0);
                                    var5 = '?';
                                    if (!var0) {
                                        _fun2982_ip = 717;
                                        continue _fun2982
                                    }
                                case 713:
                                    var5 = '&';
                                case 717:
                                    var0 = global;
                                    var0 = var0.Date;
                                    var2 = var0.prototype;
                                    var2 = Object.create(var2, {
                                        constructor: {
                                            value: var0
                                        }
                                    });
                                    var11 = var2;
                                    var0 = new var11[var0](var10);
                                    var2 = var0 instanceof Object ? var0 : var2;
                                    var0 = var2.getTime;
                                    var2 = var0.bind(var2)();
                                    var0 = '_=';
                                    var0 = var5 + var0;
                                    var0 = var0 + var2;
                                    var0 = var3 + var0;
                                    var1.url = var0;
                                    _fun2982_ip = 846;
                                    continue _fun2982;
                                case 781:
                                    var2 = var3.replace;
                                    var0 = global;
                                    var0 = var0.Date;
                                    var5 = var0.prototype;
                                    var5 = Object.create(var5, {
                                        constructor: {
                                            value: var0
                                        }
                                    });
                                    var11 = var5;
                                    var0 = new var11[var0](var10);
                                    var5 = var0 instanceof Object ? var0 : var5;
                                    var0 = var5.getTime;
                                    var5 = var0.bind(var5)();
                                    var0 = '$1_=';
                                    var0 = var0 + var5;
                                    var0 = var2.bind(var3)(var4, var0);
                                    var1.url = var0;
                                case 846:
                                    var0 = undefined;
                                    return var0;
                                case 850:
                                    var0 = global;
                                    var2 = var0.TypeError;
                                    var0 = var2.prototype;
                                    var1 = Object.create(var0, {
                                        constructor: {
                                            value: var2
                                        }
                                    });
                                    var10 = 'Body not allowed for GET or HEAD requests';
                                    var11 = var1;
                                    var0 = new var11[var2](var10, var9);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    throw var0;
                                case 886:
                                    var0 = global;
                                    var2 = var0.TypeError;
                                    var0 = var2.prototype;
                                    var1 = Object.create(var0, {
                                        constructor: {
                                            value: var2
                                        }
                                    });
                                    var10 = 'Already read';
                                    var11 = var1;
                                    var0 = new var11[var2](var10, var9);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    throw var0;
                            }
                        };
                        var6 = var1;
                        var _closure2_slot19 = var1;
                        var1 = function arg0() {
                            var3 = arg0;
                            var0 = global;
                            var0 = var0.FormData;
                            var2 = var0.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var0
                                }
                            });
                            var6 = var2;
                            var0 = new var6[var0](var5);
                            var0 = var0 instanceof Object ? var0 : var2;
                            var _closure3_slot0 = var0;
                            var2 = var3.trim;
                            var4 = var2.bind(var3)();
                            var3 = var4.split;
                            var2 = '&';
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.forEach;
                            var1 = function(arg0) { // Environment: var1
                                _fun2984: for (var _fun2984_ip = 0;;) switch (_fun2984_ip) {
                                    case 0:
                                        var1 = arg0;
                                        if (!var1) {
                                            _fun2984_ip = 144;
                                            continue _fun2984
                                        }
                                    case 9:
                                        var0 = var1.split;
                                        var2 = '=';
                                        var1 = var0.bind(var1)(var2);
                                        var0 = var1.shift;
                                        var5 = var0.bind(var1)();
                                        var4 = var5.replace;
                                        var0 = /\+/g;
                                        var3 = ' ';
                                        var6 = var4.bind(var5)(var0, var3);
                                        var0 = var1.join;
                                        var2 = var0.bind(var1)(var2);
                                        var1 = var2.replace;
                                        var0 = /\+/g;
                                        var5 = var1.bind(var2)(var0, var3);
                                        var3 = _closure3_slot0;
                                        var2 = var3.append;
                                        var0 = global;
                                        var1 = var0.decodeURIComponent;
                                        var4 = undefined;
                                        var1 = var1.bind(var4)(var6);
                                        var0 = var0.decodeURIComponent;
                                        var0 = var0.bind(var4)(var5);
                                        var0 = var2.bind(var3)(var1, var0);
                                    case 144:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var _closure2_slot20 = var1;
                        var1 = function arg0, arg1() {
                            _fun2985: for (var _fun2985_ip = 0;;) switch (_fun2985_ip) {
                                case 0:
                                    var1 = arg1;
                                    var3 = this;
                                    var0 = _closure2_slot21;
                                    var0 = var3 instanceof var0;
                                    if (var0) {
                                        _fun2985_ip = 56;
                                        continue _fun2985
                                    }
                                case 20:
                                    var0 = global;
                                    var5 = var0.TypeError;
                                    var0 = var5.prototype;
                                    var2 = Object.create(var0, {
                                        constructor: {
                                            value: var5
                                        }
                                    });
                                    var7 = 'Please use the "new" operator, this DOM object constructor cannot be called as a function.';
                                    var8 = var2;
                                    var0 = new var8[var5](var7, var6);
                                    var0 = var0 instanceof Object ? var0 : var2;
                                    throw var0;
                                case 56:
                                    if (var1) {
                                        _fun2985_ip = 61;
                                        continue _fun2985
                                    }
                                case 59:
                                    var1 = {};
                                case 61:
                                    var0 = 'default';
                                    var3.type = var0;
                                    var6 = var1.status;
                                    var5 = 200;
                                    var0 = undefined;
                                    var2 = var5;
                                    if (!(var0 !== var6)) {
                                        _fun2985_ip = 93;
                                        continue _fun2985
                                    }
                                case 88:
                                    var2 = var1.status;
                                case 93:
                                    var3.status = var2;
                                    var2 = var3.status;
                                    if (!(!(var2 < var5))) {
                                        _fun2985_ip = 263;
                                        continue _fun2985
                                    }
                                case 111:
                                    var6 = var3.status;
                                    var2 = 599;
                                    if (!(!(var6 > var2))) {
                                        _fun2985_ip = 263;
                                        continue _fun2985
                                    }
                                case 129:
                                    var2 = var3.status;
                                    var2 = var2 >= var5;
                                    if (!var2) {
                                        _fun2985_ip = 156;
                                        continue _fun2985
                                    }
                                case 141:
                                    var6 = var3.status;
                                    var5 = 300;
                                    var2 = var6 < var5;
                                case 156:
                                    var3.ok = var2;
                                    var6 = var1.statusText;
                                    var2 = '';
                                    var5 = var2;
                                    if (!(var0 !== var6)) {
                                        _fun2985_ip = 188;
                                        continue _fun2985
                                    }
                                case 179:
                                    var6 = var1.statusText;
                                    var5 = '' + var6;
                                case 188:
                                    var3.statusText = var5;
                                    var6 = _closure2_slot14;
                                    var7 = var1.headers;
                                    var5 = var6.prototype;
                                    var5 = Object.create(var5, {
                                        constructor: {
                                            value: var6
                                        }
                                    });
                                    var8 = var5;
                                    var4 = new var8[var6](var7, var6);
                                    var4 = var4 instanceof Object ? var4 : var5;
                                    var3.headers = var4;
                                    var1 = var1.url;
                                    if (var1) {
                                        _fun2985_ip = 241;
                                        continue _fun2985
                                    }
                                case 238:
                                    var1 = var2;
                                case 241:
                                    var3.url = var1;
                                    var2 = var3._initBody;
                                    var1 = arg0;
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                                case 263:
                                    var0 = global;
                                    var2 = var0.RangeError;
                                    var0 = var2.prototype;
                                    var1 = Object.create(var0, {
                                        constructor: {
                                            value: var2
                                        }
                                    });
                                    var7 = "Failed to construct 'Response': The status provided (0) is outside the range [200, 599].";
                                    var8 = var1;
                                    var0 = new var8[var2](var7, var6);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    throw var0;
                            }
                        };
                        var4 = var1;
                        var _closure2_slot21 = var1;
                        var3 = function arg0, arg1() {
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var1 = arg1;
                            var _closure3_slot1 = var1;
                            var1 = global;
                            var2 = var1.Promise;
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var3 = function(arg0, arg1) { // Environment: var0
                                _fun2987: for (var _fun2987_ip = 0;;) switch (_fun2987_ip) {
                                    case 0:
                                        var2 = arg1;
                                        var0 = arg0;
                                        var _closure4_slot0 = var0;
                                        var _closure4_slot1 = var2;
                                        var8 = function() {
                                            var1 = _closure4_slot3;
                                            var0 = var1.abort;
                                            var0 = var0.bind(var1)();
                                            var0 = undefined;
                                            return var0;
                                        };
                                        var _closure4_slot5 = var8;
                                        var7 = _closure2_slot19;
                                        var15 = _closure3_slot0;
                                        var14 = _closure3_slot1;
                                        var5 = var7.prototype;
                                        var5 = Object.create(var5, {
                                            constructor: {
                                                value: var7
                                            }
                                        });
                                        var16 = var5;
                                        var4 = new var16[var7](var15, var14, var13);
                                        var6 = var4 instanceof Object ? var4 : var5;
                                        var _closure4_slot2 = var6;
                                        var4 = var6.signal;
                                        if (!var4) {
                                            _fun2987_ip = 94;
                                            continue _fun2987
                                        }
                                    case 76:
                                        var4 = var6.signal;
                                        var4 = var4.aborted;
                                        if (var4) {
                                            _fun2987_ip = 610;
                                            continue _fun2987
                                        }
                                    case 94:
                                        var4 = global;
                                        var5 = var4.XMLHttpRequest;
                                        var7 = var5.prototype;
                                        var7 = Object.create(var7, {
                                            constructor: {
                                                value: var5
                                            }
                                        });
                                        var16 = var7;
                                        var5 = new var16[var5](var15);
                                        var5 = var5 instanceof Object ? var5 : var7;
                                        var _closure4_slot3 = var5;
                                        var7 = function() { // Environment: var1
                                            _fun2989: for (var _fun2989_ip = 0;;) switch (_fun2989_ip) {
                                                case 0:
                                                    var4 = {};
                                                    var0 = _closure4_slot3;
                                                    var0 = var0.statusText;
                                                    var4.statusText = var0;
                                                    var3 = _closure4_slot3;
                                                    var0 = var3.getAllResponseHeaders;
                                                    var7 = var0.bind(var3)();
                                                    if (var7) {
                                                        _fun2989_ip = 43;
                                                        continue _fun2989
                                                    }
                                                case 39:
                                                    var7 = '';
                                                case 43:
                                                    var0 = _closure2_slot14;
                                                    var3 = var0.prototype;
                                                    var3 = Object.create(var3, {
                                                        constructor: {
                                                            value: var0
                                                        }
                                                    });
                                                    var10 = var3;
                                                    var0 = new var10[var0](var9);
                                                    var0 = var0 instanceof Object ? var0 : var3;
                                                    var _closure5_slot0 = var0;
                                                    var6 = var7.replace;
                                                    var5 = /\r?\n[\t ]+/g;
                                                    var3 = ' ';
                                                    var6 = var6.bind(var7)(var5, var3);
                                                    var5 = var6.split;
                                                    var3 = '\r';
                                                    var6 = var5.bind(var6)(var3);
                                                    var5 = var6.map;
                                                    var3 = function(arg0) { // Environment: var1
                                                        _fun2990: for (var _fun2990_ip = 0;;) switch (_fun2990_ip) {
                                                            case 0:
                                                                var4 = arg0;
                                                                var1 = var4.indexOf;
                                                                var0 = '\n';
                                                                var2 = var1.bind(var4)(var0);
                                                                var1 = 0;
                                                                var0 = var4;
                                                                if (!(var1 === var2)) {
                                                                    _fun2990_ip = 47;
                                                                    continue _fun2990
                                                                }
                                                            case 27:
                                                                var3 = var4.substr;
                                                                var2 = var4.length;
                                                                var1 = 1;
                                                                var0 = var3.bind(var4)(var1, var2);
                                                            case 47:
                                                                return var0;
                                                        }
                                                    };
                                                    var6 = var5.bind(var6)(var3);
                                                    var5 = var6.forEach;
                                                    var3 = function(arg0) { // Environment: var1
                                                        _fun2991: for (var _fun2991_ip = 0;;) switch (_fun2991_ip) {
                                                            case 0:
                                                                var6 = arg0;
                                                                var0 = undefined;
                                                                var3 = undefined;
                                                                var2 = undefined;
                                                                var1 = undefined;
                                                                var4 = var6.split;
                                                                var5 = ':';
                                                                var6 = var4.bind(var6)(var5);
                                                                var3 = var6;
                                                                var4 = var6.shift;
                                                                var6 = var4.bind(var6)();
                                                                var4 = var6.trim;
                                                                var4 = var4.bind(var6)();
                                                                var2 = var4;
                                                                if (!var4) {
                                                                    _fun2991_ip = 133;
                                                                    continue _fun2991
                                                                }
                                                            case 54:
                                                                var4 = var3;
                                                                var3 = var4.join;
                                                                var4 = var3.bind(var4)(var5);
                                                                var3 = var4.trim;
                                                                var1 = var3.bind(var4)();
                                                            case 77: // try_start_0
                                                                var4 = _closure5_slot0;
                                                                var3 = var4.append;
                                                                var1 = var3.bind(var4)(var2, var1);
                                                            case 96: // try_end0
                                                                _fun2991_ip = 133;
                                                                continue _fun2991;
                                                            case 98: // catch_target0
                                                                CatchBlockStart(arg_register = 1);
                                                                var2 = global;
                                                                var3 = var2.console;
                                                                var2 = var3.warn;
                                                                var4 = var1.message;
                                                                var1 = 'Response ';
                                                                var1 = var1 + var4;
                                                                var1 = var2.bind(var3)(var1);
                                                            case 133:
                                                                return var0;
                                                        }
                                                    };
                                                    var3 = var5.bind(var6)(var3);
                                                    var4.headers = var0;
                                                    var _closure5_slot1 = var4;
                                                    var0 = _closure4_slot2;
                                                    var5 = var0.url;
                                                    var3 = var5.indexOf;
                                                    var0 = 'file://';
                                                    var0 = var3.bind(var5)(var0);
                                                    var3 = 0;
                                                    if (!(var3 === var0)) {
                                                        _fun2989_ip = 225;
                                                        continue _fun2989
                                                    }
                                                case 190:
                                                    var0 = _closure4_slot3;
                                                    var5 = var0.status;
                                                    var0 = 200;
                                                    if (!(!(var5 < var0))) {
                                                        _fun2989_ip = 242;
                                                        continue _fun2989
                                                    }
                                                case 206:
                                                    var5 = _closure4_slot3;
                                                    var6 = var5.status;
                                                    var5 = 599;
                                                    if (!(!(var6 > var5))) {
                                                        _fun2989_ip = 242;
                                                        continue _fun2989
                                                    }
                                                case 225:
                                                    var5 = _closure4_slot3;
                                                    var5 = var5.status;
                                                    var4.status = var5;
                                                    _fun2989_ip = 248;
                                                    continue _fun2989;
                                                case 242:
                                                    var4.status = var0;
                                                case 248:
                                                    var5 = _closure4_slot3;
                                                    var0 = 'responseURL';
                                                    var0 = var0 in var5;
                                                    if (var0) {
                                                        _fun2989_ip = 287;
                                                        continue _fun2989
                                                    }
                                                case 263:
                                                    var6 = var4.headers;
                                                    var5 = var6.get;
                                                    var0 = 'X-Request-URL';
                                                    var0 = var5.bind(var6)(var0);
                                                    _fun2989_ip = 297;
                                                    continue _fun2989;
                                                case 287:
                                                    var5 = _closure4_slot3;
                                                    var0 = var5.responseURL;
                                                case 297:
                                                    var4.url = var0;
                                                    var4 = _closure4_slot3;
                                                    var0 = 'response';
                                                    var0 = var0 in var4;
                                                    var2 = _closure4_slot3;
                                                    if (var0) {
                                                        _fun2989_ip = 330;
                                                        continue _fun2989
                                                    }
                                                case 322:
                                                    var0 = var2.responseText;
                                                    _fun2989_ip = 336;
                                                    continue _fun2989;
                                                case 330:
                                                    var0 = var2.response;
                                                case 336:
                                                    var _closure5_slot2 = var0;
                                                    var0 = global;
                                                    var2 = var0.setTimeout;
                                                    var0 = undefined;
                                                    var1 = function() { // Environment: var1
                                                        var2 = _closure4_slot0;
                                                        var4 = _closure2_slot21;
                                                        var6 = _closure5_slot2;
                                                        var5 = _closure5_slot1;
                                                        var1 = var4.prototype;
                                                        var1 = Object.create(var1, {
                                                            constructor: {
                                                                value: var4
                                                            }
                                                        });
                                                        var7 = var1;
                                                        var0 = new var7[var4](var6, var5, var4);
                                                        var1 = var0 instanceof Object ? var0 : var1;
                                                        var0 = undefined;
                                                        var1 = var2.bind(var0)(var1);
                                                        return var0;
                                                    };
                                                    var1 = var2.bind(var0)(var1, var3);
                                                    return var0;
                                            }
                                        };
                                        var5.onload = var7;
                                        var7 = function() { // Environment: var1
                                            var0 = global;
                                            var3 = var0.setTimeout;
                                            var0 = undefined;
                                            var2 = function() { // Environment: var1
                                                var2 = _closure4_slot1;
                                                var0 = global;
                                                var3 = var0.TypeError;
                                                var0 = var3.prototype;
                                                var1 = Object.create(var0, {
                                                    constructor: {
                                                        value: var3
                                                    }
                                                });
                                                var4 = 'Network request failed';
                                                var5 = var1;
                                                var0 = new var5[var3](var4, var3);
                                                var1 = var0 instanceof Object ? var0 : var1;
                                                var0 = undefined;
                                                var1 = var2.bind(var0)(var1);
                                                return var0;
                                            };
                                            var1 = 0;
                                            var1 = var3.bind(var0)(var2, var1);
                                            return var0;
                                        };
                                        var5.onerror = var7;
                                        var7 = function() { // Environment: var1
                                            var0 = global;
                                            var3 = var0.setTimeout;
                                            var0 = undefined;
                                            var2 = function() { // Environment: var1
                                                var2 = _closure4_slot1;
                                                var0 = global;
                                                var3 = var0.TypeError;
                                                var0 = var3.prototype;
                                                var1 = Object.create(var0, {
                                                    constructor: {
                                                        value: var3
                                                    }
                                                });
                                                var4 = 'Network request timed out';
                                                var5 = var1;
                                                var0 = new var5[var3](var4, var3);
                                                var1 = var0 instanceof Object ? var0 : var1;
                                                var0 = undefined;
                                                var1 = var2.bind(var0)(var1);
                                                return var0;
                                            };
                                            var1 = 0;
                                            var1 = var3.bind(var0)(var2, var1);
                                            return var0;
                                        };
                                        var5.ontimeout = var7;
                                        var7 = function() { // Environment: var1
                                            var0 = global;
                                            var3 = var0.setTimeout;
                                            var0 = undefined;
                                            var2 = function() { // Environment: var1
                                                var2 = _closure4_slot1;
                                                var0 = _closure2_slot0;
                                                var4 = var0.DOMException;
                                                var0 = var4.prototype;
                                                var1 = Object.create(var0, {
                                                    constructor: {
                                                        value: var4
                                                    }
                                                });
                                                var6 = 'Aborted';
                                                var5 = 'AbortError';
                                                var7 = var1;
                                                var0 = new var7[var4](var6, var5, var4);
                                                var1 = var0 instanceof Object ? var0 : var1;
                                                var0 = undefined;
                                                var1 = var2.bind(var0)(var1);
                                                return var0;
                                            };
                                            var1 = 0;
                                            var1 = var3.bind(var0)(var2, var1);
                                            return var0;
                                        };
                                        var5.onabort = var7;
                                        var11 = var5.open;
                                        var10 = var6.method;
                                        var9 = var6.url;
                                        var7 = var9;
                                    case 190: // try_start_0
                                        var12 = var7;
                                        var9 = '';
                                        if (!(var9 === var12)) {
                                            _fun2987_ip = 219;
                                            continue _fun2987
                                        }
                                    case 201:
                                        var9 = _closure2_slot1;
                                        var9 = var9.location;
                                        var9 = var9.href;
                                        if (var9) {
                                            _fun2987_ip = 224;
                                            continue _fun2987
                                        }
                                    case 219:
                                        var9 = var7;
                                        _fun2987_ip = 239;
                                        continue _fun2987;
                                    case 224:
                                        var12 = _closure2_slot1;
                                        var12 = var12.location;
                                        var9 = var12.href;
                                    case 239: // try_end0
                                        _fun2987_ip = 246;
                                        continue _fun2987;
                                    case 241: // catch_target0
                                        CatchBlockStart(arg_register = 12);
                                        var9 = var7;
                                    case 246:
                                        var7 = true;
                                        var9 = var11.bind(var5)(var10, var9, var7);
                                        var10 = var6.credentials;
                                        var9 = 'include';
                                        if (!(var9 !== var10)) {
                                            _fun2987_ip = 293;
                                            continue _fun2987
                                        }
                                    case 269:
                                        var10 = var6.credentials;
                                        var9 = 'omit';
                                        if (!(var9 === var10)) {
                                            _fun2987_ip = 299;
                                            continue _fun2987
                                        }
                                    case 283:
                                        var9 = false;
                                        var5.withCredentials = var9;
                                        _fun2987_ip = 299;
                                        continue _fun2987;
                                    case 293:
                                        var5.withCredentials = var7;
                                    case 299:
                                        var7 = 'responseType';
                                        var7 = var7 in var5;
                                        if (!var7) {
                                            _fun2987_ip = 346;
                                            continue _fun2987
                                        }
                                    case 310:
                                        var7 = _closure2_slot4;
                                        if (var7) {
                                            _fun2987_ip = 336;
                                            continue _fun2987
                                        }
                                    case 317:
                                        var7 = _closure2_slot6;
                                        if (!var7) {
                                            _fun2987_ip = 346;
                                            continue _fun2987
                                        }
                                    case 324:
                                        var7 = 'arraybuffer';
                                        var5.responseType = var7;
                                        _fun2987_ip = 346;
                                        continue _fun2987;
                                    case 336:
                                        var7 = 'blob';
                                        var5.responseType = var7;
                                    case 346:
                                        var7 = _closure3_slot1;
                                        if (!var7) {
                                            _fun2987_ip = 514;
                                            continue _fun2987
                                        }
                                    case 356:
                                        var7 = _closure3_slot1;
                                        var7 = var7.headers;
                                        var9 = 'object';
                                        var7 = typeof var7;
                                        if (!(var9 === var7)) {
                                            _fun2987_ip = 514;
                                            continue _fun2987
                                        }
                                    case 380:
                                        var7 = _closure3_slot1;
                                        var9 = var7.headers;
                                        var7 = _closure2_slot14;
                                        var7 = var9 instanceof var7;
                                        if (var7) {
                                            _fun2987_ip = 514;
                                            continue _fun2987
                                        }
                                    case 401:
                                        var7 = _closure2_slot1;
                                        var7 = var7.Headers;
                                        if (!var7) {
                                            _fun2987_ip = 441;
                                            continue _fun2987
                                        }
                                    case 414:
                                        var7 = _closure3_slot1;
                                        var9 = var7.headers;
                                        var7 = _closure2_slot1;
                                        var7 = var7.Headers;
                                        var7 = var9 instanceof var7;
                                        if (var7) {
                                            _fun2987_ip = 514;
                                            continue _fun2987
                                        }
                                    case 441:
                                        var7 = new Array(0);
                                        var _closure4_slot4 = var7;
                                        var7 = var4.Object;
                                        var4 = var7.getOwnPropertyNames;
                                        var3 = _closure3_slot1;
                                        var3 = var3.headers;
                                        var7 = var4.bind(var7)(var3);
                                        var4 = var7.forEach;
                                        var3 = function(arg0) { // Environment: var1
                                            var4 = arg0;
                                            var6 = _closure4_slot4;
                                            var5 = var6.push;
                                            var3 = _closure2_slot11;
                                            var0 = undefined;
                                            var3 = var3.bind(var0)(var4);
                                            var3 = var5.bind(var6)(var3);
                                            var3 = _closure4_slot3;
                                            var2 = var3.setRequestHeader;
                                            var5 = _closure2_slot12;
                                            var1 = _closure3_slot1;
                                            var1 = var1.headers;
                                            var1 = var1[var4];
                                            var1 = var5.bind(var0)(var1);
                                            var1 = var2.bind(var3)(var4, var1);
                                            return var0;
                                        };
                                        var3 = var4.bind(var7)(var3);
                                        var7 = var6.headers;
                                        var4 = var7.forEach;
                                        var3 = function(arg0, arg1) { // Environment: var1
                                            _fun3000: for (var _fun3000_ip = 0;;) switch (_fun3000_ip) {
                                                case 0:
                                                    var3 = arg1;
                                                    var2 = _closure4_slot4;
                                                    var1 = var2.indexOf;
                                                    var2 = var1.bind(var2)(var3);
                                                    var1 = -1;
                                                    if (!(var1 === var2)) {
                                                        _fun3000_ip = 50;
                                                        continue _fun3000
                                                    }
                                                case 31:
                                                    var2 = _closure4_slot3;
                                                    var1 = var2.setRequestHeader;
                                                    var0 = arg0;
                                                    var0 = var1.bind(var2)(var3, var0);
                                                case 50:
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        var3 = var4.bind(var7)(var3);
                                        _fun2987_ip = 535;
                                        continue _fun2987;
                                    case 514:
                                        var7 = var6.headers;
                                        var4 = var7.forEach;
                                        var3 = function(arg0, arg1) { // Environment: var1
                                            var3 = _closure4_slot3;
                                            var2 = var3.setRequestHeader;
                                            var1 = arg1;
                                            var0 = arg0;
                                            var0 = var2.bind(var3)(var1, var0);
                                            var0 = undefined;
                                            return var0;
                                        };
                                        var3 = var4.bind(var7)(var3);
                                    case 535:
                                        var3 = var6.signal;
                                        if (!var3) {
                                            _fun2987_ip = 577;
                                            continue _fun2987
                                        }
                                    case 544:
                                        var7 = var6.signal;
                                        var4 = var7.addEventListener;
                                        var3 = 'abort';
                                        var3 = var4.bind(var7)(var3, var8);
                                        var1 = function() { // Environment: var1
                                            _fun3002: for (var _fun3002_ip = 0;;) switch (_fun3002_ip) {
                                                case 0:
                                                    var1 = _closure4_slot3;
                                                    var2 = var1.readyState;
                                                    var1 = 4;
                                                    if (!(var1 === var2)) {
                                                        _fun3002_ip = 50;
                                                        continue _fun3002
                                                    }
                                                case 20:
                                                    var1 = _closure4_slot2;
                                                    var3 = var1.signal;
                                                    var2 = var3.removeEventListener;
                                                    var1 = _closure4_slot5;
                                                    var0 = 'abort';
                                                    var0 = var2.bind(var3)(var0, var1);
                                                case 50:
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        var5.onreadystatechange = var1;
                                    case 577:
                                        var4 = var5.send;
                                        var7 = var6._bodyInit;
                                        var1 = undefined;
                                        var3 = null;
                                        if (!(var1 !== var7)) {
                                            _fun2987_ip = 603;
                                            continue _fun2987
                                        }
                                    case 597:
                                        var3 = var6._bodyInit;
                                    case 603:
                                        var3 = var4.bind(var5)(var3);
                                        return var1;
                                    case 610:
                                        var0 = _closure2_slot0;
                                        var4 = var0.DOMException;
                                        var0 = var4.prototype;
                                        var1 = Object.create(var0, {
                                            constructor: {
                                                value: var4
                                            }
                                        });
                                        var15 = 'Aborted';
                                        var14 = 'AbortError';
                                        var16 = var1;
                                        var0 = new var16[var4](var15, var14, var13);
                                        var1 = var0 instanceof Object ? var0 : var1;
                                        var0 = undefined;
                                        var0 = var2.bind(var0)(var1);
                                        return var0;
                                }
                            };
                            var4 = var1;
                            var0 = new var4[var2](var3, var2);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                        };
                        var2 = global;
                        var1 = var2.globalThis;
                        var12 = 'undefined';
                        var1 = typeof var1;
                        var11 = var12 !== var1;
                        if (!var11) {
                            _fun2958_ip = 162;
                            continue _fun2958
                        }
                    case 156:
                        var11 = var2.globalThis;
                    case 162:
                        if (var11) {
                            _fun2958_ip = 190;
                            continue _fun2958
                        }
                    case 165:
                        var1 = var2.self;
                        var1 = typeof var1;
                        var1 = var12 !== var1;
                        if (!var1) {
                            _fun2958_ip = 187;
                            continue _fun2958
                        }
                    case 181:
                        var1 = var2.self;
                    case 187:
                        var11 = var1;
                    case 190:
                        if (var11) {
                            _fun2958_ip = 214;
                            continue _fun2958
                        }
                    case 193:
                        var1 = _closure1_slot0;
                        var1 = var0 !== var1;
                        if (!var1) {
                            _fun2958_ip = 211;
                            continue _fun2958
                        }
                    case 207:
                        var1 = _closure1_slot0;
                    case 211:
                        var11 = var1;
                    case 214:
                        if (var11) {
                            _fun2958_ip = 219;
                            continue _fun2958
                        }
                    case 217:
                        var11 = {};
                    case 219:
                        var8 = var11;
                        var _closure2_slot1 = var11;
                        var1 = 'URLSearchParams';
                        var1 = var1 in var11;
                        var _closure2_slot2 = var1;
                        var1 = 'Symbol';
                        var1 = var1 in var11;
                        if (!var1) {
                            _fun2958_ip = 263;
                            continue _fun2958
                        }
                    case 249:
                        var12 = var2.Symbol;
                        var11 = 'iterator';
                        var1 = var11 in var12;
                    case 263:
                        var _closure2_slot3 = var1;
                        var12 = var8;
                        var11 = 'FileReader';
                        var11 = var11 in var12;
                        if (!var11) {
                            _fun2958_ip = 292;
                            continue _fun2958
                        }
                    case 281:
                        var13 = var8;
                        var12 = 'Blob';
                        var11 = var12 in var13;
                    case 292:
                        if (!var11) {
                            _fun2958_ip = 325;
                            continue _fun2958
                        }
                    case 295: // try_start_0
                        var13 = var2.Blob;
                        var12 = var13.prototype;
                        var17 = Object.create(var12, {
                            constructor: {
                                value: var13
                            }
                        });
                        var12 = new var17[var13](var16);
                    case 314: // try_end0
                        var12 = true;
                        _fun2958_ip = 322;
                        continue _fun2958;
                    case 318: // catch_target0
                        CatchBlockStart(arg_register = 13);
                        var12 = false;
                    case 322:
                        var11 = var12;
                    case 325:
                        var _closure2_slot4 = var11;
                        var12 = var8;
                        var11 = 'FormData';
                        var11 = var11 in var12;
                        var _closure2_slot5 = var11;
                        var11 = 'ArrayBuffer';
                        var11 = var11 in var12;
                        var _closure2_slot6 = var11;
                        if (!var11) {
                            _fun2958_ip = 397;
                            continue _fun2958
                        }
                    case 359:
                        var11 = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];
                        var _closure2_slot7 = var11;
                        var11 = var2.ArrayBuffer;
                        var11 = var11.isView;
                        if (var11) {
                            _fun2958_ip = 393;
                            continue _fun2958
                        }
                    case 388:
                        var11 = function(arg0) { // Environment: var9
                            _fun3003: for (var _fun3003_ip = 0;;) switch (_fun3003_ip) {
                                case 0:
                                    var5 = arg0;
                                    var0 = var5;
                                    if (!var0) {
                                        _fun3003_ip = 65;
                                        continue _fun3003
                                    }
                                case 9:
                                    var3 = _closure2_slot7;
                                    var2 = var3.indexOf;
                                    var1 = global;
                                    var1 = var1.Object;
                                    var1 = var1.prototype;
                                    var4 = var1.toString;
                                    var1 = var4.call;
                                    var1 = var1.bind(var4)(var5);
                                    var2 = var2.bind(var3)(var1);
                                    var1 = -1;
                                    var0 = var2 > var1;
                                case 65:
                                    return var0;
                            }
                        };
                    case 393:
                        var _closure2_slot8 = var11;
                    case 397:
                        var11 = var7;
                        var13 = var11.prototype;
                        var12 = function(arg0, arg1) { // Environment: var9
                            _fun3004: for (var _fun3004_ip = 0;;) switch (_fun3004_ip) {
                                case 0:
                                    var1 = this;
                                    var4 = _closure2_slot11;
                                    var0 = undefined;
                                    var3 = arg0;
                                    var3 = var4.bind(var0)(var3);
                                    var4 = _closure2_slot12;
                                    var2 = arg1;
                                    var5 = var4.bind(var0)(var2);
                                    var2 = var1.map;
                                    var6 = var2[var3];
                                    var2 = var1.map;
                                    var1 = var5;
                                    if (!var6) {
                                        _fun3004_ip = 66;
                                        continue _fun3004
                                    }
                                case 52:
                                    var4 = ', ';
                                    var4 = var6 + var4;
                                    var1 = var4 + var5;
                                case 66:
                                    var2[var3] = var1;
                                    return var0;
                            }
                        };
                        var13.append = var12;
                        var13 = var11.prototype;
                        var12 = function(arg0) { // Environment: var9
                            var0 = this;
                            var2 = var0.map;
                            var3 = _closure2_slot11;
                            var0 = undefined;
                            var1 = arg0;
                            var1 = var3.bind(var0)(var1);
                            var1 = delete var2[var1];
                            return var0;
                        };
                        var13.delete = var12;
                        var13 = var11.prototype;
                        var12 = function(arg0) { // Environment: var9
                            _fun3006: for (var _fun3006_ip = 0;;) switch (_fun3006_ip) {
                                case 0:
                                    var1 = this;
                                    var3 = _closure2_slot11;
                                    var2 = undefined;
                                    var0 = arg0;
                                    var2 = var3.bind(var2)(var0);
                                    var0 = var1.has;
                                    var3 = var0.bind(var1)(var2);
                                    var0 = null;
                                    if (!var3) {
                                        _fun3006_ip = 44;
                                        continue _fun3006
                                    }
                                case 35:
                                    var1 = var1.map;
                                    var0 = var1[var2];
                                case 44:
                                    return var0;
                            }
                        };
                        var13.get = var12;
                        var13 = var11.prototype;
                        var12 = function(arg0) { // Environment: var9
                            var0 = this;
                            var2 = var0.map;
                            var1 = var2.hasOwnProperty;
                            var4 = _closure2_slot11;
                            var3 = undefined;
                            var0 = arg0;
                            var0 = var4.bind(var3)(var0);
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var13.has = var12;
                        var13 = var11.prototype;
                        var12 = function(arg0, arg1) { // Environment: var9
                            var0 = this;
                            var3 = var0.map;
                            var4 = _closure2_slot11;
                            var0 = undefined;
                            var2 = arg0;
                            var2 = var4.bind(var0)(var2);
                            var4 = _closure2_slot12;
                            var1 = arg1;
                            var1 = var4.bind(var0)(var1);
                            var3[var2] = var1;
                            return var0;
                        };
                        var13.set = var12;
                        var13 = var11.prototype;
                        var12 = function(arg0, arg1) { // Environment: var9
                            _fun3009: for (var _fun3009_ip = 0;;) switch (_fun3009_ip) {
                                case 0:
                                    var7 = arg0;
                                    var6 = arg1;
                                    var5 = this;
                                    var3 = var5.map;
                                    for (var0 in var3)
                                        case 22: {
                                            case 31: var10 = var0;
                                            var9 = var5.map;
                                            var8 = var9.hasOwnProperty;
                                            var8 = var8.bind(var9)(var10);
                                            if (!var8) {
                                                _fun3009_ip = 22;
                                                continue _fun3009
                                            }
                                            case 53: var9 = var7.call;
                                            var8 = var5.map;
                                            var13 = var8[var10];
                                            var15 = var7;
                                            var14 = var6;
                                            var12 = var10;
                                            var11 = var5;
                                            var8 = var15[var9](var14, var13, var12, var11, var10);
                                            _fun3009_ip = 22;
                                            continue _fun3009;
                                        }
                                case 85:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var13.forEach = var12;
                        var13 = var11.prototype;
                        var12 = function() { // Environment: var9
                            var3 = this;
                            var2 = new Array(0);
                            var _closure3_slot0 = var2;
                            var1 = var3.forEach;
                            var0 = function(arg0, arg1) { // Environment: var0
                                var2 = _closure3_slot0;
                                var1 = var2.push;
                                var0 = arg1;
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                            };
                            var0 = var1.bind(var3)(var0);
                            var1 = _closure2_slot13;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                            return var0;
                        };
                        var13.keys = var12;
                        var13 = var11.prototype;
                        var12 = function() { // Environment: var9
                            var3 = this;
                            var2 = new Array(0);
                            var _closure3_slot0 = var2;
                            var1 = var3.forEach;
                            var0 = function(arg0) { // Environment: var0
                                var2 = _closure3_slot0;
                                var1 = var2.push;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                            };
                            var0 = var1.bind(var3)(var0);
                            var1 = _closure2_slot13;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                            return var0;
                        };
                        var13.values = var12;
                        var12 = var11.prototype;
                        var11 = function() { // Environment: var9
                            var3 = this;
                            var2 = new Array(0);
                            var _closure3_slot0 = var2;
                            var1 = var3.forEach;
                            var0 = function(arg0, arg1) { // Environment: var0
                                var2 = _closure3_slot0;
                                var1 = var2.push;
                                var0 = new Array(2);
                                var3 = arg1;
                                var0[0] = var3;
                                var3 = arg0;
                                var0[1] = var3;
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                            };
                            var0 = var1.bind(var3)(var0);
                            var1 = _closure2_slot13;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                            return var0;
                        };
                        var12.entries = var11;
                        if (!var1) {
                            _fun2958_ip = 582;
                            continue _fun2958
                        }
                    case 547:
                        var1 = var7;
                        var12 = var1.prototype;
                        var11 = var2.Symbol;
                        var11 = var11.iterator;
                        var1 = var1.prototype;
                        var1 = var1.entries;
                        var12[var11] = var1;
                    case 582:
                        var1 = ['CONNECT', 'DELETE', 'GET', 'HEAD', 'OPTIONS', 'PATCH', 'POST', 'PUT', 'TRACE'];
                        var _closure2_slot9 = var1;
                        var1 = var6;
                        var12 = var1.prototype;
                        var11 = function() { // Environment: var9
                            var3 = this;
                            var2 = _closure2_slot19;
                            var0 = {};
                            var1 = var3._bodyInit;
                            var0.body = var1;
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var6 = var1;
                            var5 = var3;
                            var4 = var0;
                            var0 = new var6[var2](var5, var4, var3);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                        };
                        var12.clone = var11;
                        var12 = var10;
                        var10 = var12.call;
                        var1 = var1.prototype;
                        var1 = var10.bind(var12)(var1);
                        var11 = var12.call;
                        var10 = var4;
                        var1 = var10.prototype;
                        var1 = var11.bind(var12)(var1);
                        var11 = var10.prototype;
                        var1 = function() { // Environment: var9
                            var1 = this;
                            var3 = _closure2_slot21;
                            var2 = var1._bodyInit;
                            var0 = {};
                            var5 = var1.status;
                            var0.status = var5;
                            var5 = var1.statusText;
                            var0.statusText = var5;
                            var6 = _closure2_slot14;
                            var8 = var1.headers;
                            var5 = var6.prototype;
                            var5 = Object.create(var5, {
                                constructor: {
                                    value: var6
                                }
                            });
                            var9 = var5;
                            var4 = new var9[var6](var8, var7);
                            var4 = var4 instanceof Object ? var4 : var5;
                            var0.headers = var4;
                            var1 = var1.url;
                            var0.url = var1;
                            var1 = var3.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var9 = var1;
                            var8 = var2;
                            var7 = var0;
                            var0 = new var9[var3](var8, var7, var6);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                        };
                        var11.clone = var1;
                        var1 = function() { // Environment: var9
                            var3 = _closure2_slot21;
                            var0 = var3.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var5 = null;
                            var4 = {
                                'status': 200,
                                'statusText': ''
                            };
                            var6 = var1;
                            var0 = new var6[var3](var5, var4, var3);
                            var0 = var0 instanceof Object ? var0 : var1;
                            var1 = false;
                            var0.ok = var1;
                            var1 = 0;
                            var0.status = var1;
                            var1 = 'error';
                            var0.type = var1;
                            return var0;
                        };
                        var10.error = var1;
                        var1 = [301, 302, 303, 307, 308];
                        var _closure2_slot10 = var1;
                        var1 = function(arg0, arg1) { // Environment: var9
                            _fun3019: for (var _fun3019_ip = 0;;) switch (_fun3019_ip) {
                                case 0:
                                    var0 = arg1;
                                    var3 = _closure2_slot10;
                                    var2 = var3.indexOf;
                                    var3 = var2.bind(var3)(var0);
                                    var2 = -1;
                                    if (!(var2 !== var3)) {
                                        _fun3019_ip = 82;
                                        continue _fun3019
                                    }
                                case 31:
                                    var3 = _closure2_slot21;
                                    var2 = {};
                                    var2.status = var0;
                                    var0 = {};
                                    var1 = arg0;
                                    var0.location = var1;
                                    var2.headers = var0;
                                    var0 = var3.prototype;
                                    var1 = Object.create(var0, {
                                        constructor: {
                                            value: var3
                                        }
                                    });
                                    var5 = null;
                                    var6 = var1;
                                    var4 = var2;
                                    var0 = new var6[var3](var5, var4, var3);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    return var0;
                                case 82:
                                    var0 = global;
                                    var2 = var0.RangeError;
                                    var0 = var2.prototype;
                                    var1 = Object.create(var0, {
                                        constructor: {
                                            value: var2
                                        }
                                    });
                                    var5 = 'Invalid status code';
                                    var6 = var1;
                                    var0 = new var6[var2](var5, var4);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    throw var0;
                            }
                        };
                        var10.redirect = var1;
                        var10 = var5;
                        var1 = var8;
                        var1 = var1.DOMException;
                        var10.DOMException = var1;
                    case 721: // try_start_1
                        var1 = var5;
                        var10 = var1.DOMException;
                        var1 = var10.prototype;
                        var17 = Object.create(var1, {
                            constructor: {
                                value: var10
                            }
                        });
                        var1 = new var17[var10](var16);
                    case 743: // try_end1
                        _fun2958_ip = 823;
                        continue _fun2958;
                    case 745: // catch_target1
                        CatchBlockStart(arg_register = 1);
                        var1 = var5;
                        var9 = function(arg0, arg1) { // Environment: var9
                            var3 = arg0;
                            var2 = this;
                            var2.message = var3;
                            var0 = arg1;
                            var2.name = var0;
                            var0 = global;
                            var1 = var0.Error;
                            var0 = undefined;
                            var1 = var1.bind(var0)(var3);
                            var1 = var1.stack;
                            var2.stack = var1;
                            return var0;
                        };
                        var1.DOMException = var9;
                        var10 = var1.DOMException;
                        var12 = var2.Object;
                        var11 = var12.create;
                        var9 = var2.Error;
                        var9 = var9.prototype;
                        var9 = var11.bind(var12)(var9);
                        var10.prototype = var9;
                        var9 = var1.DOMException;
                        var9 = var9.prototype;
                        var1 = var1.DOMException;
                        var9.constructor = var1;
                    case 823:
                        var9 = var3;
                        var1 = true;
                        var9.polyfill = var1;
                        var9 = var8;
                        var9 = var9.fetch;
                        if (var9) {
                            _fun2958_ip = 885;
                            continue _fun2958
                        }
                    case 846:
                        var9 = var8;
                        var8 = var3;
                        var9.fetch = var8;
                        var8 = var7;
                        var9.Headers = var8;
                        var8 = var6;
                        var9.Request = var8;
                        var8 = var4;
                        var9.Response = var8;
                    case 885:
                        var5.Headers = var7;
                        var5.Request = var6;
                        var5.Response = var4;
                        var5.fetch = var3;
                        var4 = var2.Object;
                        var3 = var4.defineProperty;
                        var2 = {};
                        var2.value = var1;
                        var1 = '__esModule';
                        var1 = var3.bind(var4)(var5, var1, var2);
                        return var0;
                }
            };
            var3 = 'object';
            var0 = typeof var2;
            if (!(var3 === var0)) {
                _fun2957_ip = 37;
                continue _fun2957
            }
        case 28:
            var0 = undefined;
            var3 = arg4;
            if (!(var0 === var3)) {
                _fun2957_ip = 114;
                continue _fun2957
            }
        case 37:
            var3 = global;
            var4 = var3.define;
            var5 = 'function';
            var4 = typeof var4;
            if (!(var5 === var4)) {
                _fun2957_ip = 71;
                continue _fun2957
            }
        case 56:
            var4 = var3.define;
            var4 = var4.amd;
            if (var4) {
                _fun2957_ip = 90;
                continue _fun2957
            }
        case 71:
            var5 = {};
            var4 = this;
            var4.WHATWGFetch = var5;
            var4 = undefined;
            var4 = var1.bind(var4)(var5);
            _fun2957_ip = 119;
            continue _fun2957;
        case 90:
            var5 = var3.define;
            var4 = undefined;
            var3 = ['exports'];
            var3 = var5.bind(var4)(var3, var1);
            _fun2957_ip = 119;
            continue _fun2957;
        case 114:
            var0 = var1.bind(var0)(var2);
        case 119:
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, []);