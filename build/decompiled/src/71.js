// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function arg0() {
        _fun1451: for (var _fun1451_ip = 0;;) switch (_fun1451_ip) {
            case 0:
                var1 = arg0;
                var2 = function arg0, arg1() {
                    _fun1452: for (var _fun1452_ip = 0;;) switch (_fun1452_ip) {
                        case 0:
                            var5 = this;
                            var2 = arg1;
                            var7 = undefined;
                            var0 = undefined;
                            var3 = _closure2_slot4;
                            var3 = var3.length;
                            if (!var3) {
                                _fun1452_ip = 77;
                                continue _fun1452
                            }
                        case 25:
                            var3 = _closure2_slot4;
                            var4 = 0;
                            var3 = var3[var4];
                            if (!(var5 !== var3)) {
                                _fun1452_ip = 77;
                                continue _fun1452
                            }
                        case 39:
                            var6 = _closure2_slot4;
                            var3 = var6.shift;
                            var3 = var3.bind(var6)();
                            var3 = _closure2_slot4;
                            var3 = var3.length;
                            if (!var3) {
                                _fun1452_ip = 77;
                                continue _fun1452
                            }
                        case 65:
                            var3 = _closure2_slot4;
                            var3 = var3[var4];
                            if (var5 !== var3) {
                                _fun1452_ip = 39;
                                continue _fun1452
                            }
                        case 77:
                            var3 = var2;
                            var4 = 'string';
                            var3 = typeof var3;
                            if (!(var4 !== var3)) {
                                _fun1452_ip = 543;
                                continue _fun1452
                            }
                        case 94:
                            var3 = var2;
                            var5 = 'object';
                            var3 = typeof var3;
                            if (!(var5 === var3)) {
                                _fun1452_ip = 538;
                                continue _fun1452
                            }
                        case 111:
                            var4 = var2;
                            var3 = null;
                            if (!(var3 !== var4)) {
                                _fun1452_ip = 538;
                                continue _fun1452
                            }
                        case 123:
                            var8 = var2;
                            var0 = var8;
                            var3 = global;
                            var6 = var3.Array;
                            var4 = var6.isArray;
                            var4 = var4.bind(var6)(var8);
                            if (var4) {
                                _fun1452_ip = 369;
                                continue _fun1452
                            }
                        case 153:
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var8 = 0;
                            var4 = var4[var8];
                            var9 = var6.bind(var7)(var4);
                            var6 = var2;
                            var4 = typeof var6;
                            var5 = var5 === var4;
                            var4 = 'This was already found earlier';
                            var4 = var9.bind(var7)(var5, var4);
                            var5 = var3.Object;
                            var4 = var5.keys;
                            var4 = var4.bind(var5)(var6);
                            var5 = _closure2_slot4;
                            var6 = var5.length;
                            var5 = _closure2_slot0;
                            if (!(!(var6 >= var5))) {
                                _fun1452_ip = 330;
                                continue _fun1452
                            }
                        case 230:
                            var6 = var4.length;
                            var5 = _closure2_slot3;
                            if (!(var6 > var5)) {
                                _fun1452_ip = 521;
                                continue _fun1452
                            }
                        case 246:
                            var0 = {};
                            var6 = var4.slice;
                            var5 = _closure2_slot3;
                            var8 = var6.bind(var4)(var8, var5);
                            var5 = var8;
                            var6 = var5[Symbol.iterator];
                            var5 = var6().next;
                        case 269:
                            var10 = var5().value;
                            var8 = var6;
                            if (!(var8 !== var7)) {
                                _fun1452_ip = 303;
                                continue _fun1452
                            }
                        case 280: // try_start_0
                            var9 = var0;
                            var8 = var2;
                            var8 = var8[var10];
                            var9[var10] = var8;
                        case 294: // try_end0
                            _fun1452_ip = 269;
                            continue _fun1452;
                        case 296: // catch_target0
                            CatchBlockStart(arg_register = 5);
                            var6.return();
                            throw var5;
                        case 303:
                            var6 = var0;
                            var7 = var4.length;
                            var5 = _closure2_slot3;
                            var5 = var7 - var5;
                            var6['...(truncated keys)...'] = var5;
                            _fun1452_ip = 521;
                            continue _fun1452;
                        case 330:
                            var7 = var4.length;
                            var4 = var3.HermesInternal;
                            var6 = var4.concat;
                            var5 = '{ ... object with ';
                            var4 = ' keys ... }';
                            var0 = var6.bind(var5)(var7, var4);
                            _fun1452_ip = 521;
                            continue _fun1452;
                        case 369:
                            var4 = _closure2_slot4;
                            var5 = var4.length;
                            var4 = _closure2_slot0;
                            if (!(!(var5 >= var4))) {
                                _fun1452_ip = 484;
                                continue _fun1452
                            }
                        case 386:
                            var4 = var2;
                            var5 = var4.length;
                            var4 = _closure2_slot2;
                            if (!(var5 > var4)) {
                                _fun1452_ip = 521;
                                continue _fun1452
                            }
                        case 402:
                            var4 = var2;
                            var7 = var4.slice;
                            var6 = _closure2_slot2;
                            var5 = 0;
                            var6 = var7.bind(var4)(var5, var6);
                            var5 = var6.concat;
                            var7 = var4.length;
                            var4 = _closure2_slot2;
                            var9 = var7 - var4;
                            var4 = var3.HermesInternal;
                            var8 = var4.concat;
                            var7 = '... extra ';
                            var4 = ' values truncated ...';
                            var7 = var8.bind(var7)(var9, var4);
                            var4 = new Array(1);
                            var4[0] = var7;
                            var0 = var5.bind(var6)(var4);
                            _fun1452_ip = 521;
                            continue _fun1452;
                        case 484:
                            var4 = var2;
                            var6 = var4.length;
                            var3 = var3.HermesInternal;
                            var5 = var3.concat;
                            var4 = '[ ... array with ';
                            var3 = ' values ... ]';
                            var0 = var5.bind(var4)(var6, var3);
                        case 521:
                            var4 = _closure2_slot4;
                            var3 = var4.unshift;
                            var3 = var3.bind(var4)(var0);
                            return var0;
                        case 538:
                            var0 = var2;
                            return var0;
                        case 543:
                            var0 = var2;
                            var3 = var0.length;
                            var4 = _closure2_slot1;
                            var0 = 17;
                            var0 = var4 + var0;
                            if (!(!(var3 > var0))) {
                                _fun1452_ip = 571;
                                continue _fun1452
                            }
                        case 566:
                            var0 = var2;
                            _fun1452_ip = 602;
                            continue _fun1452;
                        case 571:
                            var4 = var2;
                            var3 = var4.substring;
                            var2 = _closure2_slot1;
                            var1 = 0;
                            var2 = var3.bind(var4)(var1, var2);
                            var1 = '...(truncated)...';
                            var0 = var2 + var1;
                        case 602:
                            return var0;
                    }
                };
                var _closure2_slot5 = var2;
                var3 = var1.maxDepth;
                var2 = undefined;
                if (!(var2 === var3)) {
                    _fun1451_ip = 40;
                    continue _fun1451
                }
            case 26:
                var4 = global;
                var4 = var4.Number;
                var3 = var4.POSITIVE_INFINITY;
            case 40:
                var _closure2_slot0 = var3;
                var3 = var1.maxStringLimit;
                if (!(var2 === var3)) {
                    _fun1451_ip = 68;
                    continue _fun1451
                }
            case 54:
                var4 = global;
                var4 = var4.Number;
                var3 = var4.POSITIVE_INFINITY;
            case 68:
                var _closure2_slot1 = var3;
                var3 = var1.maxArrayLimit;
                if (!(var2 === var3)) {
                    _fun1451_ip = 96;
                    continue _fun1451
                }
            case 82:
                var4 = global;
                var4 = var4.Number;
                var3 = var4.POSITIVE_INFINITY;
            case 96:
                var _closure2_slot2 = var3;
                var1 = var1.maxObjectKeysLimit;
                if (!(var2 === var1)) {
                    _fun1451_ip = 124;
                    continue _fun1451
                }
            case 110:
                var2 = global;
                var2 = var2.Number;
                var1 = var2.POSITIVE_INFINITY;
            case 124:
                var _closure2_slot3 = var1;
                var1 = new Array(0);
                var _closure2_slot4 = var1;
                var0 = function arg0() {
                    _fun1453: for (var _fun1453_ip = 0;;) switch (_fun1453_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = var2;
                            var4 = undefined;
                            var1 = undefined;
                            if (!(var4 !== var2)) {
                                _fun1453_ip = 252;
                                continue _fun1453
                            }
                        case 17:
                            var3 = var0;
                            var2 = null;
                            if (!(var2 !== var3)) {
                                _fun1453_ip = 246;
                                continue _fun1453
                            }
                        case 29:
                            var3 = var0;
                            var2 = 'function';
                            var3 = typeof var3;
                            if (!(var2 !== var3)) {
                                _fun1453_ip = 222;
                                continue _fun1453
                            }
                        case 46:
                            var6 = var0;
                            var3 = global;
                            var5 = var3.Error;
                            var5 = var6 instanceof var5;
                            if (var5) {
                                _fun1453_ip = 193;
                                continue _fun1453
                            }
                        case 67: // try_start_0
                            var7 = var3.JSON;
                            var6 = var7.stringify;
                            var5 = var0;
                            var3 = _closure2_slot5;
                            var3 = var6.bind(var7)(var5, var3);
                            var1 = var3;
                            if (!(var4 !== var3)) {
                                _fun1453_ip = 104;
                                continue _fun1453
                            }
                        case 102:
                            _fun1453_ip = 130;
                            continue _fun1453;
                        case 104:
                            var3 = var0;
                            var4 = '["';
                            var3 = typeof var3;
                            var4 = var4 + var3;
                            var3 = '" failed to stringify]';
                            var1 = var4 + var3;
                        case 130: // try_end0
                            return var1;
                        case 132: // catch_target0
                            CatchBlockStart(arg_register = 1);
                            var1 = var0;
                            var1 = var1.toString;
                            var1 = typeof var1;
                            if (!(var2 === var1)) {
                                _fun1453_ip = 165;
                                continue _fun1453
                            }
                        case 149: // try_start_1
                            var2 = var0;
                            var1 = var2.toString;
                            var1 = var1.bind(var2)();
                        case 161: // try_end1
                            return var1;
                        case 163: // catch_target1
                            CatchBlockStart(arg_register = 1);
                        case 165:
                            var1 = var0;
                            var2 = '["';
                            var1 = typeof var1;
                            var2 = var2 + var1;
                            var1 = '" failed to stringify]';
                            var1 = var2 + var1;
                            return var1;
                        case 193:
                            var1 = var0;
                            var3 = var1.name;
                            var2 = ': ';
                            var2 = var3 + var2;
                            var1 = var1.message;
                            var1 = var2 + var1;
                            return var1;
                        case 222: // try_start_2
                            var1 = var0;
                            var0 = var1.toString;
                            var0 = var0.bind(var1)();
                        case 234: // try_end2
                            return var0;
                        case 236: // catch_target2
                            CatchBlockStart(arg_register = 0);
                            var0 = '[function unknown]';
                            return var0;
                        case 246:
                            var0 = 'null';
                            return var0;
                        case 252:
                            var0 = 'undefined';
                            return var0;
                    }
                };
                return var0;
        }
    };
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = undefined;
    var3 = {
        'maxDepth': 10,
        'maxStringLimit': 100,
        'maxArrayLimit': 50,
        'maxObjectKeysLimit': 50
    };
    var3 = var1.bind(var0)(var3);
    var2.default = var3;
    var2.createStringifySafeWithLimits = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [44]);