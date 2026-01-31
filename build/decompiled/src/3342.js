// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun28907: for (var _fun28907_ip = 0;;) switch (_fun28907_ip) {
        case 0:
            var1 = require;
            var _closure1_slot0 = var1;
            var1 = dependencyMap;
            var _closure1_slot1 = var1;
            var2 = global;
            var1 = var2.Symbol;
            var3 = 'function';
            var1 = typeof var1;
            var1 = var3 === var1;
            if (!var1) {
                _fun28907_ip = 60;
                continue _fun28907
            }
        case 37:
            var2 = var2.Symbol;
            var2 = var2.iterator;
            var3 = 'symbol';
            var2 = typeof var2;
            var1 = var3 === var2;
        case 60:
            var _closure1_slot2 = var1;
            var1 = function(arg0) { // Original name: ToPrimitive, environment: var0
                _fun28908: for (var _fun28908_ip = 0;;) switch (_fun28908_ip) {
                    case 0:
                        var0 = arg0;
                        var3 = undefined;
                        var7 = undefined;
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var5 = 1;
                        var1 = var1[var5];
                        var1 = var4.bind(var3)(var1);
                        var1 = var1.bind(var3)(var0);
                        if (var1) {
                            _fun28908_ip = 762;
                            continue _fun28908
                        }
                    case 41:
                        var1 = arguments.length;
                        var1 = var1 > var5;
                        var9 = 'default';
                        var6 = var9;
                        if (!var1) {
                            _fun28908_ip = 105;
                            continue _fun28908
                        }
                    case 58:
                        var10 = arguments[var5];
                        var4 = global;
                        var8 = var4.String;
                        var1 = 'string';
                        if (!(var10 !== var8)) {
                            _fun28908_ip = 102;
                            continue _fun28908
                        }
                    case 78:
                        var8 = arguments[var5];
                        var7 = var4.Number;
                        var4 = var9;
                        if (!(var8 === var7)) {
                            _fun28908_ip = 99;
                            continue _fun28908
                        }
                    case 95:
                        var4 = 'number';
                    case 99:
                        var1 = var4;
                    case 102:
                        var6 = var1;
                    case 105:
                        var1 = _closure1_slot2;
                        var4 = undefined;
                        if (!var1) {
                            _fun28908_ip = 325;
                            continue _fun28908
                        }
                    case 117:
                        var8 = global;
                        var1 = var8.Symbol;
                        var1 = var1.toPrimitive;
                        if (var1) {
                            _fun28908_ip = 185;
                            continue _fun28908
                        }
                    case 134:
                        var7 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var1 = 2;
                        var1 = var10[var1];
                        var1 = var7.bind(var3)(var1);
                        var7 = var1.bind(var3)(var0);
                        var1 = undefined;
                        if (!var7) {
                            _fun28908_ip = 180;
                            continue _fun28908
                        }
                    case 164:
                        var7 = var8.Symbol;
                        var7 = var7.prototype;
                        var1 = var7.valueOf;
                    case 180:
                        _fun28908_ip = 322;
                        continue _fun28908;
                    case 185:
                        var7 = var8.Symbol;
                        var12 = var7.toPrimitive;
                        var13 = var0[var12];
                        var7 = null;
                        var10 = var7 != var13;
                        var7 = undefined;
                        if (!var10) {
                            _fun28908_ip = 319;
                            continue _fun28908
                        }
                    case 212:
                        var11 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var10 = 0;
                        var10 = var14[var10];
                        var10 = var11.bind(var3)(var10);
                        var10 = var10.bind(var3)(var13);
                        var7 = var13;
                        if (var10) {
                            _fun28908_ip = 319;
                            continue _fun28908
                        }
                    case 242:
                        var11 = var8.TypeError;
                        var10 = ' returned for property ';
                        var10 = var13 + var10;
                        var8 = var8.String;
                        var8 = var8.bind(var3)(var12);
                        var10 = var10 + var8;
                        var8 = ' of object ';
                        var8 = var10 + var8;
                        var12 = var8 + var0;
                        var8 = var11.prototype;
                        var10 = Object.create(var8, {
                            constructor: {
                                value: var11
                            }
                        });
                        var8 = ' is not a function';
                        var16 = var12 + var8;
                        var17 = var10;
                        var8 = new var17[var11](var16, var15);
                        var8 = var8 instanceof Object ? var8 : var10;
                        throw var8;
                    case 319:
                        var1 = var7;
                    case 322:
                        var4 = var1;
                    case 325:
                        if (!(var3 === var4)) {
                            _fun28908_ip = 688;
                            continue _fun28908
                        }
                    case 332:
                        var1 = var9 === var6;
                        if (!var1) {
                            _fun28908_ip = 395;
                            continue _fun28908
                        }
                    case 339:
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var7 = 3;
                        var7 = var10[var7];
                        var7 = var8.bind(var3)(var7);
                        var7 = var7.bind(var3)(var0);
                        if (var7) {
                            _fun28908_ip = 392;
                            continue _fun28908
                        }
                    case 367:
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot1;
                        var8 = 2;
                        var8 = var11[var8];
                        var8 = var10.bind(var3)(var8);
                        var7 = var8.bind(var3)(var0);
                    case 392:
                        var1 = var7;
                    case 395:
                        var8 = var6;
                        if (!var1) {
                            _fun28908_ip = 405;
                            continue _fun28908
                        }
                    case 401:
                        var8 = 'string';
                    case 405:
                        var1 = 'number';
                        var7 = var1;
                        if (!(var9 !== var8)) {
                            _fun28908_ip = 419;
                            continue _fun28908
                        }
                    case 416:
                        var7 = var8;
                    case 419:
                        var8 = null;
                        if (!(var8 != var0)) {
                            _fun28908_ip = 648;
                            continue _fun28908
                        }
                    case 428:
                        if (!(var1 !== var7)) {
                            _fun28908_ip = 443;
                            continue _fun28908
                        }
                    case 432:
                        var1 = 'string';
                        if (!(var1 === var7)) {
                            _fun28908_ip = 612;
                            continue _fun28908
                        }
                    case 443:
                        var1 = 'string';
                        if (!(var1 !== var7)) {
                            _fun28908_ip = 463;
                            continue _fun28908
                        }
                    case 451:
                        var11 = ['valueOf', 'toString'];
                        _fun28908_ip = 473;
                        continue _fun28908;
                    case 463:
                        var11 = ['toString', 'valueOf'];
                    case 473:
                        var1 = var11.length;
                        var10 = 0;
                        var1 = var10 < var1;
                        var9 = undefined;
                        var8 = 0;
                        if (!var1) {
                            _fun28908_ip = 574;
                            continue _fun28908
                        }
                    case 491:
                        var1 = var11[var8];
                        var7 = var0[var1];
                        var12 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var1 = var1[var10];
                        var1 = var12.bind(var3)(var1);
                        var1 = var1.bind(var3)(var7);
                        if (!var1) {
                            _fun28908_ip = 562;
                            continue _fun28908
                        }
                    case 524:
                        var1 = var7.call;
                        var1 = var1.bind(var7)(var0);
                        var12 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var7 = var7[var5];
                        var7 = var12.bind(var3)(var7);
                        var7 = var7.bind(var3)(var1);
                        var9 = var1;
                        if (var7) {
                            _fun28908_ip = 610;
                            continue _fun28908
                        }
                    case 562:
                        var8 = var8 + 1;
                        var7 = var11.length;
                        if (var8 < var7) {
                            _fun28908_ip = 491;
                            continue _fun28908
                        }
                    case 574:
                        var7 = global;
                        var9 = var7.TypeError;
                        var7 = var9.prototype;
                        var8 = Object.create(var7, {
                            constructor: {
                                value: var9
                            }
                        });
                        var16 = 'No default value';
                        var17 = var8;
                        var7 = new var17[var9](var16, var15);
                        var7 = var7 instanceof Object ? var7 : var8;
                        throw var7;
                    case 610:
                        return var1;
                    case 612:
                        var1 = global;
                        var8 = var1.TypeError;
                        var1 = var8.prototype;
                        var7 = Object.create(var1, {
                            constructor: {
                                value: var8
                            }
                        });
                        var16 = 'hint must be "string" or "number"';
                        var17 = var7;
                        var1 = new var17[var8](var16, var15);
                        var1 = var1 instanceof Object ? var1 : var7;
                        throw var1;
                    case 648:
                        var1 = global;
                        var8 = var1.TypeError;
                        var1 = 'Cannot call method on ';
                        var16 = var1 + var0;
                        var7 = var8.prototype;
                        var7 = Object.create(var7, {
                            constructor: {
                                value: var8
                            }
                        });
                        var17 = var7;
                        var1 = new var17[var8](var16, var15);
                        var1 = var1 instanceof Object ? var1 : var7;
                        throw var1;
                    case 688:
                        var1 = var4.call;
                        var1 = var1.bind(var4)(var0, var6);
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var2 = var2[var5];
                        var2 = var4.bind(var3)(var2);
                        var2 = var2.bind(var3)(var1);
                        if (var2) {
                            _fun28908_ip = 760;
                            continue _fun28908
                        }
                    case 724:
                        var2 = global;
                        var4 = var2.TypeError;
                        var2 = var4.prototype;
                        var3 = Object.create(var2, {
                            constructor: {
                                value: var4
                            }
                        });
                        var16 = 'unable to convert exotic object to primitive';
                        var17 = var3;
                        var2 = new var17[var4](var16, var15);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
                    case 760:
                        return var1;
                    case 762:
                        return var0;
                }
            };
            var0 = arg4;
            var0.exports = var1;
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [1402, 3343, 3344, 3345]);