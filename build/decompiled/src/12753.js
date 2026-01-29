// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun98016: for (var _fun98016_ip = 0;;) switch (_fun98016_ip) {
        case 0:
            var2 = exports;
            var3 = dependencyMap;
            var0 = 0;
            var4 = var3[var0];
            var3 = require;
            var0 = undefined;
            var3 = var3.bind(var0)(var4);
            var _closure1_slot0 = var3;
            var3 = global;
            var7 = var3.Object;
            var6 = var7.defineProperty;
            var5 = {};
            var4 = true;
            var5.value = var4;
            var4 = '__esModule';
            var4 = var6.bind(var7)(var2, var4, var5);
            var2.default = var0;
            var4 = var3.BigInt;
            var5 = 'undefined';
            var4 = typeof var4;
            if (!(var5 !== var4)) {
                _fun98016_ip = 107;
                continue _fun98016
            }
        case 83:
            var3 = var3.BigInt;
            var4 = var3.prototype;
            var3 = function() { // Environment: var1
                var1 = this;
                var0 = var1.toString;
                var0 = var0.bind(var1)();
                return var0;
            };
            var4.toJSON = var3;
        case 107:
            var1 = function(arg0) { // Original name: serialize, environment: var1
                _fun98018: for (var _fun98018_ip = 0;;) switch (_fun98018_ip) {
                    case 0:
                        var4 = undefined;
                        var3 = undefined;
                        var1 = arguments.length;
                        var2 = 1;
                        var1 = var1 > var2;
                        if (!var1) {
                            _fun98018_ip = 27;
                            continue _fun98018
                        }
                    case 19:
                        var5 = arguments[var2];
                        var1 = var4 !== var5;
                    case 27:
                        if (!var1) {
                            _fun98018_ip = 34;
                            continue _fun98018
                        }
                    case 30:
                        var1 = arguments[var2];
                    case 34:
                        var _closure2_slot0 = var1;
                        var1 = new Array(0);
                        var _closure2_slot1 = var1;
                        var1 = new Array(0);
                        var _closure2_slot2 = var1;
                        var1 = global;
                        var3 = var1.JSON;
                        var2 = var3.stringify;
                        var1 = function(arg0) { // Original name: serializer, environment: var0
                            var1 = null;
                            var _closure3_slot0 = var1;
                            var0 = function(arg0, arg1) { // Environment: var0
                                _fun98020: for (var _fun98020_ip = 0;;) switch (_fun98020_ip) {
                                    case 0:
                                        var9 = arg0;
                                        var1 = arg1;
                                        var8 = this;
                                        var0 = true;
                                        if (!(var0 !== var1)) {
                                            _fun98020_ip = 579;
                                            continue _fun98020
                                        }
                                    case 18:
                                        var11 = inf;
                                        if (!(var1 !== var11)) {
                                            _fun98020_ip = 571;
                                            continue _fun98020
                                        }
                                    case 35:
                                        var2 = -inf;
                                        if (!(var1 !== var2)) {
                                            _fun98020_ip = 563;
                                            continue _fun98020
                                        }
                                    case 52:
                                        var6 = 0;
                                        if (!(var6 !== var1)) {
                                            _fun98020_ip = 555;
                                            continue _fun98020
                                        }
                                    case 61:
                                        var7 = undefined;
                                        if (!(var7 !== var1)) {
                                            _fun98020_ip = 547;
                                            continue _fun98020
                                        }
                                    case 70:
                                        var2 = null;
                                        if (!(var2 !== var1)) {
                                            _fun98020_ip = 539;
                                            continue _fun98020
                                        }
                                    case 79:
                                        var3 = false;
                                        if (!(var3 !== var1)) {
                                            _fun98020_ip = 531;
                                            continue _fun98020
                                        }
                                    case 88:
                                        var3 = -0.0;
                                        if (!(var3 !== var1)) {
                                            _fun98020_ip = 523;
                                            continue _fun98020
                                        }
                                    case 105:
                                        var3 = '';
                                        if (!(var3 !== var1)) {
                                            _fun98020_ip = 515;
                                            continue _fun98020
                                        }
                                    case 116:
                                        var5 = _closure2_slot0;
                                        if (!var5) {
                                            _fun98020_ip = 149;
                                            continue _fun98020
                                        }
                                    case 126:
                                        var10 = 'object';
                                        var5 = typeof var1;
                                        if (!(var10 === var5)) {
                                            _fun98020_ip = 149;
                                            continue _fun98020
                                        }
                                    case 137:
                                        var5 = var1.nativeEvent;
                                        if (var5) {
                                            _fun98020_ip = 507;
                                            continue _fun98020
                                        }
                                    case 149:
                                        var10 = typeof var1;
                                        var5 = 'string';
                                        if (!(var5 !== var10)) {
                                            _fun98020_ip = 505;
                                            continue _fun98020
                                        }
                                    case 163:
                                        var5 = 'number';
                                        if (!(var5 !== var10)) {
                                            _fun98020_ip = 505;
                                            continue _fun98020
                                        }
                                    case 174:
                                        var5 = 'bigint';
                                        if (!(var5 !== var10)) {
                                            _fun98020_ip = 494;
                                            continue _fun98020
                                        }
                                    case 185:
                                        var5 = 'function';
                                        if (!(var5 !== var10)) {
                                            _fun98020_ip = 433;
                                            continue _fun98020
                                        }
                                    case 196:
                                        var5 = global;
                                        var10 = var5.Symbol;
                                        var10 = var10.iterator;
                                        var10 = var1[var10];
                                        if (!var10) {
                                            _fun98020_ip = 249;
                                            continue _fun98020
                                        }
                                    case 216:
                                        var10 = var5.Array;
                                        var5 = var10.isArray;
                                        var5 = var5.bind(var10)(var1);
                                        if (var5) {
                                            _fun98020_ip = 249;
                                            continue _fun98020
                                        }
                                    case 235:
                                        var5 = _closure1_slot0;
                                        var5 = var5.bind(var7)(var1);
                                        return var5;
                                    case 249:
                                        var5 = _closure2_slot1;
                                        var5 = var5.length;
                                        if (!(!(var5 > var6))) {
                                            _fun98020_ip = 281;
                                            continue _fun98020
                                        }
                                    case 262:
                                        var6 = _closure2_slot1;
                                        var5 = var6.push;
                                        var5 = var5.bind(var6)(var1);
                                        var7 = var1;
                                        _fun98020_ip = 401;
                                        continue _fun98020;
                                    case 281:
                                        var6 = _closure2_slot1;
                                        var5 = var6.indexOf;
                                        var10 = var5.bind(var6)(var8);
                                        var5 = ~var10;
                                        var12 = _closure2_slot1;
                                        if (var5) {
                                            _fun98020_ip = 318;
                                            continue _fun98020
                                        }
                                    case 306:
                                        var5 = var12.push;
                                        var5 = var5.bind(var12)(var8);
                                        _fun98020_ip = 336;
                                        continue _fun98020;
                                    case 318:
                                        var6 = var12.splice;
                                        var5 = 1;
                                        var5 = var10 + var5;
                                        var5 = var6.bind(var12)(var5);
                                    case 336:
                                        var5 = ~var10;
                                        var6 = _closure2_slot2;
                                        if (var5) {
                                            _fun98020_ip = 358;
                                            continue _fun98020
                                        }
                                    case 346:
                                        var5 = var6.push;
                                        var5 = var5.bind(var6)(var9);
                                        _fun98020_ip = 371;
                                        continue _fun98020;
                                    case 358:
                                        var5 = var6.splice;
                                        var5 = var5.bind(var6)(var10, var11, var9);
                                    case 371:
                                        var5 = _closure2_slot1;
                                        var4 = var5.indexOf;
                                        var4 = var4.bind(var5)(var1);
                                        var4 = ~var4;
                                        var7 = var1;
                                        if (!var4) {
                                            _fun98020_ip = 401;
                                            continue _fun98020
                                        }
                                    case 395:
                                        var7 = '~~~ Circular Reference ~~~';
                                    case 401:
                                        var6 = _closure3_slot0;
                                        var4 = var7;
                                        if (!(var2 !== var6)) {
                                            _fun98020_ip = 431;
                                            continue _fun98020
                                        }
                                    case 415:
                                        var6 = _closure3_slot0;
                                        var5 = var6.call;
                                        var4 = var5.bind(var6)(var8, var9, var7);
                                    case 431:
                                        return var4;
                                    case 433:
                                        var6 = var1.name;
                                        var5 = var2 == var6;
                                        var4 = '~~~ anonymous function ~~~';
                                        var2 = var4;
                                        if (var5) {
                                            _fun98020_ip = 492;
                                            continue _fun98020
                                        }
                                    case 454:
                                        var2 = var4;
                                        if (!(var3 !== var6)) {
                                            _fun98020_ip = 492;
                                            continue _fun98020
                                        }
                                    case 461:
                                        var3 = global;
                                        var3 = var3.HermesInternal;
                                        var5 = var3.concat;
                                        var4 = '~~~ ';
                                        var3 = '() ~~~';
                                        var2 = var5.bind(var4)(var6, var3);
                                    case 492:
                                        return var2;
                                    case 494:
                                        var2 = var1.toString;
                                        var2 = var2.bind(var1)();
                                        return var2;
                                    case 505:
                                        return var1;
                                    case 507:
                                        var1 = var1.nativeEvent;
                                        return var1;
                                    case 515:
                                        var1 = '~~~ empty string ~~~';
                                        return var1;
                                    case 523:
                                        var1 = '~~~ zero ~~~';
                                        return var1;
                                    case 531:
                                        var1 = '~~~ false ~~~';
                                        return var1;
                                    case 539:
                                        var1 = '~~~ null ~~~';
                                        return var1;
                                    case 547:
                                        var1 = '~~~ undefined ~~~';
                                        return var1;
                                    case 555:
                                        var1 = '~~~ zero ~~~';
                                        return var1;
                                    case 563:
                                        var1 = '~~~ -Infinity ~~~';
                                        return var1;
                                    case 571:
                                        var1 = '~~~ Infinity ~~~';
                                        return var1;
                                    case 579:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var0 = null;
                        var1 = var1.bind(var4)(var0);
                        var0 = arg0;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                }
            };
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [65]);