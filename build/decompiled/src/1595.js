// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = function arg0, arg1() {
        _fun17738: for (var _fun17738_ip = 0;;) switch (_fun17738_ip) {
            case 0:
                var6 = arg0;
                var2 = arg1;
                var3 = 'string';
                var0 = typeof var6;
                if (!(var3 === var0)) {
                    _fun17738_ip = 81;
                    continue _fun17738
                }
            case 19:
                var0 = {};
                var _closure2_slot0 = var0;
                if (var2) {
                    _fun17738_ip = 30;
                    continue _fun17738
                }
            case 28:
                var2 = {};
            case 30:
                var5 = var6.split;
                var3 = _closure1_slot2;
                var3 = var5.bind(var6)(var3);
                var2 = var2.decode;
                if (var2) {
                    _fun17738_ip = 60;
                    continue _fun17738
                }
            case 56:
                var2 = _closure1_slot0;
            case 60:
                var _closure2_slot1 = var2;
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun17739: for (var _fun17739_ip = 0;;) switch (_fun17739_ip) {
                        case 0:
                            var5 = arg0;
                            var1 = var5.indexOf;
                            var0 = '=';
                            var1 = var1.bind(var5)(var0);
                            var0 = 0;
                            if (!(!(var1 < var0))) {
                                _fun17739_ip = 169;
                                continue _fun17739
                            }
                        case 27:
                            var2 = var5.substr;
                            var3 = var2.bind(var5)(var0, var1);
                            var2 = var3.trim;
                            var2 = var2.bind(var3)();
                            var4 = var5.substr;
                            var3 = var1 + 1;
                            var1 = var5.length;
                            var3 = var4.bind(var5)(var3, var1);
                            var1 = var3.trim;
                            var4 = var1.bind(var3)();
                            var1 = var4[var0];
                            var0 = '"';
                            var5 = var4;
                            if (!(var0 == var1)) {
                                _fun17739_ip = 114;
                                continue _fun17739
                            }
                        case 94:
                            var3 = var4.slice;
                            var1 = 1;
                            var0 = -1;
                            var5 = var3.bind(var4)(var1, var0);
                        case 114:
                            var1 = _closure2_slot0;
                            var3 = var1[var2];
                            var1 = null;
                            if (!(var1 == var3)) {
                                _fun17739_ip = 169;
                                continue _fun17739
                            }
                        case 131:
                            var1 = _closure2_slot0;
                            var4 = _closure2_slot1;
                            var3 = var5;
                            var0 = var4;
                        case 145: // try_start_0
                            var5 = var0;
                            var4 = var3;
                            var0 = undefined;
                            var0 = var5.bind(var0)(var4);
                        case 158: // try_end0
                            _fun17739_ip = 165;
                            continue _fun17739;
                        case 160: // catch_target0
                            CatchBlockStart(arg_register = 4);
                            var0 = var3;
                        case 165:
                            var1[var2] = var0;
                        case 169:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var0;
            case 81:
                var0 = global;
                var2 = var0.TypeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var7 = 'argument str must be a string';
                var8 = var1;
                var0 = new var8[var2](var7, var6);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var2.parse = var0;
    var0 = function arg0, arg1, arg2() {
        _fun17740: for (var _fun17740_ip = 0;;) switch (_fun17740_ip) {
            case 0:
                var4 = arg0;
                var1 = arg2;
                if (var1) {
                    _fun17740_ip = 11;
                    continue _fun17740
                }
            case 9:
                var1 = {};
            case 11:
                var3 = var1.encode;
                if (var3) {
                    _fun17740_ip = 27;
                    continue _fun17740
                }
            case 20:
                var3 = _closure1_slot1;
            case 27:
                var5 = _closure1_slot3;
                var0 = var5.test;
                var0 = var0.bind(var5)(var4);
                if (var0) {
                    _fun17740_ip = 83;
                    continue _fun17740
                }
            case 47:
                var0 = global;
                var6 = var0.TypeError;
                var0 = var6.prototype;
                var5 = Object.create(var0, {
                    constructor: {
                        value: var6
                    }
                });
                var8 = 'argument name is invalid';
                var9 = var5;
                var0 = new var9[var6](var8, var7);
                var0 = var0 instanceof Object ? var0 : var5;
                throw var0;
            case 83:
                var5 = undefined;
                var0 = arg1;
                var3 = var3.bind(var5)(var0);
                if (!var3) {
                    _fun17740_ip = 149;
                    continue _fun17740
                }
            case 96:
                var6 = _closure1_slot3;
                var0 = var6.test;
                var0 = var0.bind(var6)(var3);
                if (var0) {
                    _fun17740_ip = 149;
                    continue _fun17740
                }
            case 113:
                var0 = global;
                var7 = var0.TypeError;
                var0 = var7.prototype;
                var6 = Object.create(var0, {
                    constructor: {
                        value: var7
                    }
                });
                var8 = 'argument val is invalid';
                var9 = var6;
                var0 = new var9[var7](var8, var7);
                var0 = var0 instanceof Object ? var0 : var6;
                throw var0;
            case 149:
                var0 = '=';
                var0 = var4 + var0;
                var0 = var0 + var3;
                var3 = new Array(1);
                var3[0] = var0;
                var4 = var1.maxAge;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun17740_ip = 249;
                    continue _fun17740
                }
            case 181:
                var4 = var1.maxAge;
                var0 = 0;
                var7 = var4 - var0;
                var0 = global;
                var4 = var0.isNaN;
                var4 = var4.bind(var5)(var7);
                if (var4) {
                    _fun17740_ip = 575;
                    continue _fun17740
                }
            case 212:
                var5 = var3.push;
                var6 = var0.Math;
                var4 = var6.floor;
                var6 = var4.bind(var6)(var7);
                var4 = 'Max-Age=';
                var4 = var4 + var6;
                var4 = var5.bind(var3)(var4);
            case 249:
                var4 = var1.domain;
                if (!var4) {
                    _fun17740_ip = 343;
                    continue _fun17740
                }
            case 258:
                var6 = _closure1_slot3;
                var5 = var6.test;
                var4 = var1.domain;
                var4 = var5.bind(var6)(var4);
                if (var4) {
                    _fun17740_ip = 317;
                    continue _fun17740
                }
            case 281:
                var4 = global;
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var8 = 'option domain is invalid';
                var9 = var5;
                var4 = new var9[var6](var8, var7);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 317:
                var5 = var3.push;
                var6 = var1.domain;
                var4 = 'Domain=';
                var4 = var4 + var6;
                var4 = var5.bind(var3)(var4);
            case 343:
                var4 = var1.path;
                if (!var4) {
                    _fun17740_ip = 437;
                    continue _fun17740
                }
            case 352:
                var5 = _closure1_slot3;
                var4 = var5.test;
                var2 = var1.path;
                var2 = var4.bind(var5)(var2);
                if (var2) {
                    _fun17740_ip = 411;
                    continue _fun17740
                }
            case 375:
                var2 = global;
                var5 = var2.TypeError;
                var2 = var5.prototype;
                var4 = Object.create(var2, {
                    constructor: {
                        value: var5
                    }
                });
                var8 = 'option path is invalid';
                var9 = var4;
                var2 = new var9[var5](var8, var7);
                var2 = var2 instanceof Object ? var2 : var4;
                throw var2;
            case 411:
                var4 = var3.push;
                var5 = var1.path;
                var2 = 'Path=';
                var2 = var2 + var5;
                var2 = var4.bind(var3)(var2);
            case 437:
                var2 = var1.expires;
                if (!var2) {
                    _fun17740_ip = 482;
                    continue _fun17740
                }
            case 446:
                var4 = var3.push;
                var5 = var1.expires;
                var2 = var5.toUTCString;
                var5 = var2.bind(var5)();
                var2 = 'Expires=';
                var2 = var2 + var5;
                var2 = var4.bind(var3)(var2);
            case 482:
                var2 = var1.httpOnly;
                if (!var2) {
                    _fun17740_ip = 507;
                    continue _fun17740
                }
            case 491:
                var4 = var3.push;
                var2 = 'HttpOnly';
                var2 = var4.bind(var3)(var2);
            case 507:
                var2 = var1.secure;
                if (!var2) {
                    _fun17740_ip = 532;
                    continue _fun17740
                }
            case 516:
                var4 = var3.push;
                var2 = 'Secure';
                var2 = var4.bind(var3)(var2);
            case 532:
                var1 = var1.firstPartyOnly;
                if (!var1) {
                    _fun17740_ip = 557;
                    continue _fun17740
                }
            case 541:
                var2 = var3.push;
                var1 = 'First-Party-Only';
                var1 = var2.bind(var3)(var1);
            case 557:
                var2 = var3.join;
                var1 = '; ';
                var1 = var2.bind(var3)(var1);
                return var1;
            case 575:
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var8 = 'maxAge should be a Number';
                var9 = var1;
                var0 = new var9[var2](var8, var7);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var2.serialize = var0;
    var0 = global;
    var2 = var0.decodeURIComponent;
    var _closure1_slot0 = var2;
    var0 = var0.encodeURIComponent;
    var _closure1_slot1 = var0;
    var0 = /; */;
    var _closure1_slot2 = var0;
    var0 = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    var _closure1_slot3 = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);