// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun16417: for (var _fun16417_ip = 0;;) switch (_fun16417_ip) {
        case 0:
            var0 = undefined;
            var4 = undefined;
            var2 = undefined;
            var3 = global;
            var5 = var3.Function;
            var5 = var5.prototype;
            var5 = var5.toString;
            var _closure1_slot2 = var5;
            var6 = var3.Reflect;
            var5 = 'object';
            var6 = typeof var6;
            var6 = var5 === var6;
            if (!var6) {
                _fun16417_ip = 61;
                continue _fun16417
            }
        case 49:
            var8 = var3.Reflect;
            var7 = null;
            var6 = var7 !== var8;
        case 61:
            if (!var6) {
                _fun16417_ip = 75;
                continue _fun16417
            }
        case 64:
            var7 = var3.Reflect;
            var6 = var7.apply;
        case 75:
            var2 = var6;
            var _closure1_slot3 = var6;
            var7 = 'function';
            var6 = typeof var6;
            if (!(var7 === var6)) {
                _fun16417_ip = 111;
                continue _fun16417
            }
        case 93:
            var6 = var3.Object;
            var6 = var6.defineProperty;
            var6 = typeof var6;
            if (!(var7 !== var6)) {
                _fun16417_ip = 121;
                continue _fun16417
            }
        case 111:
            var6 = null;
            var2 = null;
            _closure1_slot3 = var6;
            _fun16417_ip = 202;
            continue _fun16417;
        case 121: // try_start_0
            var11 = var3.Object;
            var10 = var11.defineProperty;
            var9 = {};
            var6 = function() {
                var0 = _closure1_slot1;
                throw var0;
            };
            var9.get = var6;
            var8 = {};
            var6 = 'length';
            var10 = var10.bind(var11)(var8, var6, var9);
            var _closure1_slot0 = var10;
            var6 = {};
            var4 = var6;
            var _closure1_slot1 = var6;
            var9 = var2;
            var8 = function() { // Environment: var1
                var0 = 42;
                throw var0;
            };
            var6 = null;
            var6 = var9.bind(var0)(var8, var6, var10);
        case 186: // try_end0
            _fun16417_ip = 202;
            continue _fun16417;
        case 188: // catch_target0
            CatchBlockStart(arg_register = 6);
            if (!(var6 !== var4)) {
                _fun16417_ip = 202;
                continue _fun16417
            }
        case 194:
            var4 = null;
            var2 = null;
            _closure1_slot3 = var4;
        case 202:
            var4 = /^\s*class\b/;
            var _closure1_slot4 = var4;
            var4 = function arg0() {
                _fun16420: for (var _fun16420_ip = 0;;) switch (_fun16420_ip) {
                    case 0:
                        var1 = arg0;
                    case 3: // try_start_0
                        var3 = _closure1_slot2;
                        var2 = var3.call;
                        var2 = var2.bind(var3)(var1);
                        var1 = _closure1_slot4;
                        var0 = var1.test;
                        var0 = var0.bind(var1)(var2);
                    case 34: // try_end0
                        return var0;
                    case 36: // catch_target0
                        CatchBlockStart(arg_register = 0);
                        var0 = false;
                        return var0;
                }
            };
            var _closure1_slot5 = var4;
            var4 = function arg0() {
                _fun16421: for (var _fun16421_ip = 0;;) switch (_fun16421_ip) {
                    case 0:
                        var1 = arg0;
                    case 3: // try_start_0
                        var5 = _closure1_slot5;
                        var4 = var1;
                        var3 = undefined;
                        var3 = var5.bind(var3)(var4);
                        var3 = !var3;
                        var0 = var3;
                        if (!var3) {
                            _fun16421_ip = 45;
                            continue _fun16421
                        }
                    case 29:
                        var3 = _closure1_slot2;
                        var2 = var3.call;
                        var1 = var2.bind(var3)(var1);
                        var0 = true;
                    case 45: // try_end0
                        return var0;
                    case 47: // catch_target0
                        CatchBlockStart(arg_register = 0);
                        var0 = false;
                        return var0;
                }
            };
            var _closure1_slot6 = var4;
            var4 = var3.Object;
            var4 = var4.prototype;
            var6 = var4.toString;
            var _closure1_slot7 = var6;
            var4 = var3.Symbol;
            var4 = typeof var4;
            var4 = var7 === var4;
            if (!var4) {
                _fun16417_ip = 291;
                continue _fun16417
            }
        case 273:
            var7 = var3.Symbol;
            var7 = var7.toStringTag;
            var7 = !var7;
            var4 = !var7;
        case 291:
            var _closure1_slot8 = var4;
            var7 = new Array(1);
            var4 = 1;
            var7.length = var4;
            var4 = 0;
            var4 = var4 in var7;
            var4 = !var4;
            var _closure1_slot9 = var4;
            var4 = function() {
                var0 = false;
                return var0;
            };
            var _closure1_slot10 = var4;
            var4 = var3.document;
            var4 = typeof var4;
            if (!(var5 === var4)) {
                _fun16417_ip = 400;
                continue _fun16417
            }
        case 343:
            var4 = var3.document;
            var5 = var4.all;
            var4 = var6.call;
            var4 = var4.bind(var6)(var5);
            var5 = var6.call;
            var3 = var3.document;
            var3 = var3.all;
            var3 = var5.bind(var6)(var3);
            if (!(var4 === var3)) {
                _fun16417_ip = 400;
                continue _fun16417
            }
        case 391:
            var3 = function arg0() {
                _fun16423: for (var _fun16423_ip = 0;;) switch (_fun16423_ip) {
                    case 0:
                        var1 = arg0;
                        var3 = undefined;
                        var4 = undefined;
                        var2 = _closure1_slot9;
                        if (var2) {
                            _fun16423_ip = 26;
                            continue _fun16423
                        }
                    case 17:
                        var2 = var1;
                        if (var2) {
                            _fun16423_ip = 160;
                            continue _fun16423
                        }
                    case 26:
                        var2 = var1;
                        if (!(var3 !== var2)) {
                            _fun16423_ip = 47;
                            continue _fun16423
                        }
                    case 33:
                        var2 = var1;
                        var5 = 'object';
                        var2 = typeof var2;
                        if (!(var5 === var2)) {
                            _fun16423_ip = 160;
                            continue _fun16423
                        }
                    case 47: // try_start_0
                        var5 = _closure1_slot7;
                        var2 = var5.call;
                        var0 = var1;
                        var8 = var2.bind(var5)(var0);
                        var4 = var8;
                        var7 = '[object HTMLAllCollection]';
                        var7 = var7 === var8;
                        var6 = var7;
                        if (var7) {
                            _fun16423_ip = 96;
                            continue _fun16423
                        }
                    case 83:
                        var8 = var4;
                        var7 = '[object HTML document.all class]';
                        var6 = var7 === var8;
                    case 96:
                        var5 = var6;
                        if (var6) {
                            _fun16423_ip = 115;
                            continue _fun16423
                        }
                    case 102:
                        var7 = var4;
                        var6 = '[object HTMLCollection]';
                        var5 = var6 === var7;
                    case 115:
                        var2 = var5;
                        if (var5) {
                            _fun16423_ip = 132;
                            continue _fun16423
                        }
                    case 121:
                        var5 = var4;
                        var4 = '[object Object]';
                        var2 = var4 === var5;
                    case 132:
                        var0 = var2;
                        if (!var2) {
                            _fun16423_ip = 156;
                            continue _fun16423
                        }
                    case 138:
                        var2 = var1;
                        var1 = '';
                        var2 = var2.bind(var3)(var1);
                        var1 = null;
                        var0 = var1 == var2;
                    case 156: // try_end0
                        return var0;
                    case 158: // catch_target0
                        CatchBlockStart(arg_register = 0);
                    case 160:
                        var0 = false;
                        return var0;
                }
            };
            _closure1_slot10 = var3;
        case 400:
            if (var2) {
                _fun16417_ip = 410;
                continue _fun16417
            }
        case 403:
            var2 = function arg0() {
                _fun16425: for (var _fun16425_ip = 0;;) switch (_fun16425_ip) {
                    case 0:
                        var2 = arg0;
                        var3 = _closure1_slot10;
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        if (var3) {
                            _fun16425_ip = 169;
                            continue _fun16425
                        }
                    case 23:
                        if (var2) {
                            _fun16425_ip = 30;
                            continue _fun16425
                        }
                    case 26:
                        var3 = false;
                        return var3;
                    case 30:
                        var4 = typeof var2;
                        var3 = 'function';
                        if (!(var3 !== var4)) {
                            _fun16425_ip = 49;
                            continue _fun16425
                        }
                    case 41:
                        var3 = 'object';
                        if (!(var3 === var4)) {
                            _fun16425_ip = 165;
                            continue _fun16425
                        }
                    case 49:
                        var3 = _closure1_slot8;
                        if (var3) {
                            _fun16425_ip = 154;
                            continue _fun16425
                        }
                    case 56:
                        var3 = _closure1_slot5;
                        var3 = var3.bind(var1)(var2);
                        if (var3) {
                            _fun16425_ip = 150;
                            continue _fun16425
                        }
                    case 68:
                        var4 = _closure1_slot7;
                        var3 = var4.call;
                        var6 = var3.bind(var4)(var2);
                        var3 = '[object Function]';
                        var4 = var3 !== var6;
                        if (!var4) {
                            _fun16425_ip = 103;
                            continue _fun16425
                        }
                    case 93:
                        var3 = '[object GeneratorFunction]';
                        var4 = var3 !== var6;
                    case 103:
                        if (!var4) {
                            _fun16425_ip = 133;
                            continue _fun16425
                        }
                    case 106:
                        var5 = /^\[object HTML/;
                        var3 = var5.test;
                        var3 = var3.bind(var5)(var6);
                        var4 = !var3;
                    case 133:
                        var3 = !var4;
                        if (var4) {
                            _fun16425_ip = 148;
                            continue _fun16425
                        }
                    case 139:
                        var4 = _closure1_slot6;
                        var3 = var4.bind(var1)(var2);
                    case 148:
                        return var3;
                    case 150:
                        var3 = false;
                        return var3;
                    case 154:
                        var0 = _closure1_slot6;
                        var0 = var0.bind(var1)(var2);
                        return var0;
                    case 165:
                        var0 = false;
                        return var0;
                    case 169:
                        var0 = true;
                        return var0;
                }
            };
            _fun16417_ip = 415;
            continue _fun16417;
        case 410:
            var2 = function arg0() {
                _fun16424: for (var _fun16424_ip = 0;;) switch (_fun16424_ip) {
                    case 0:
                        var4 = arg0;
                        var1 = var4;
                        var0 = _closure1_slot10;
                        var3 = undefined;
                        var0 = var0.bind(var3)(var4);
                        if (var0) {
                            _fun16424_ip = 133;
                            continue _fun16424
                        }
                    case 23:
                        var0 = var1;
                        if (var0) {
                            _fun16424_ip = 33;
                            continue _fun16424
                        }
                    case 29:
                        var0 = false;
                        return var0;
                    case 33:
                        var0 = var1;
                        var4 = 'function';
                        var0 = typeof var0;
                        if (!(var4 !== var0)) {
                            _fun16424_ip = 61;
                            continue _fun16424
                        }
                    case 47:
                        var0 = var1;
                        var4 = 'object';
                        var0 = typeof var0;
                        if (!(var4 === var0)) {
                            _fun16424_ip = 129;
                            continue _fun16424
                        }
                    case 61: // try_start_0
                        var6 = _closure1_slot3;
                        var5 = var1;
                        var4 = _closure1_slot0;
                        var0 = null;
                        var0 = var6.bind(var3)(var5, var0, var4);
                    case 81: // try_end0
                        _fun16424_ip = 93;
                        continue _fun16424;
                    case 83: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var0 = _closure1_slot1;
                        if (!(var4 === var0)) {
                            _fun16424_ip = 125;
                            continue _fun16424
                        }
                    case 93:
                        var5 = _closure1_slot5;
                        var4 = var1;
                        var4 = var5.bind(var3)(var4);
                        var4 = !var4;
                        var0 = var4;
                        if (!var4) {
                            _fun16424_ip = 123;
                            continue _fun16424
                        }
                    case 114:
                        var2 = _closure1_slot6;
                        var0 = var2.bind(var3)(var1);
                    case 123:
                        return var0;
                    case 125:
                        var0 = false;
                        return var0;
                    case 129:
                        var0 = false;
                        return var0;
                    case 133:
                        var0 = true;
                        return var0;
                }
            };
        case 415:
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, []);