// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = function(arg0) { // Original name: isEnumObject, environment: var1
        _fun14988: for (var _fun14988_ip = 0;;) switch (_fun14988_ip) {
            case 0:
                var0 = arg0;
                var5 = var0;
                var4 = undefined;
                var6 = undefined;
                var7 = undefined;
                var8 = undefined;
                var9 = undefined;
                var1 = 'object';
                var0 = typeof var0;
                if (!(var1 === var0)) {
                    _fun14988_ip = 270;
                    continue _fun14988
                }
            case 30:
                var1 = var5;
                var0 = null;
                if (!(var0 !== var1)) {
                    _fun14988_ip = 270;
                    continue _fun14988
                }
            case 42:
                var2 = var5;
                var1 = var2.hasOwnProperty;
                var0 = 0;
                var0 = var1.bind(var2)(var0);
                if (var0) {
                    _fun14988_ip = 65;
                    continue _fun14988
                }
            case 61:
                var0 = false;
                return var0;
            case 65:
                var3 = global;
                var2 = var3.Object;
                var1 = var2.keys;
                var0 = var5;
                var0 = var1.bind(var2)(var0);
                var2 = var0;
                var1 = var2[Symbol.iterator];
                var2 = var1().next;
                var0 = 'number';
            case 96:
                var11 = var2().value;
                var10 = var1;
                if (!(var10 !== var4)) {
                    _fun14988_ip = 266;
                    continue _fun14988
                }
            case 110: // try_start_0
                var6 = var11;
                var10 = var3.parseInt;
                var12 = var10.bind(var4)(var11);
                var7 = var12;
                var11 = var3.Number;
                var10 = var11.isNaN;
                var10 = var10.bind(var11)(var12);
                var11 = var5;
                if (var10) {
                    _fun14988_ip = 195;
                    continue _fun14988
                }
            case 150:
                var10 = var7;
                var10 = var11[var10];
                var9 = var10;
                if (!(var4 !== var10)) {
                    _fun14988_ip = 188;
                    continue _fun14988
                }
            case 164:
                var12 = var5;
                var10 = var9;
                var12 = var12[var10];
                var10 = var7;
                if (!(var12 !== var10)) {
                    _fun14988_ip = 233;
                    continue _fun14988
                }
            case 181: // try_end0
                var1.return();
                var10 = false;
                return var10;
            case 188:
                var1.return();
                var10 = false;
                return var10;
            case 195: // try_start_1
                var10 = var6;
                var10 = var11[var10];
                var8 = var10;
                if (!(var4 !== var10)) {
                    _fun14988_ip = 252;
                    continue _fun14988
                }
            case 209:
                var10 = var8;
                var10 = typeof var10;
                if (!(var0 === var10)) {
                    _fun14988_ip = 245;
                    continue _fun14988
                }
            case 219:
                var11 = var5;
                var10 = var8;
                var10 = var11[var10];
                if (!(var4 !== var10)) {
                    _fun14988_ip = 238;
                    continue _fun14988
                }
            case 233: // try_end1
                _fun14988_ip = 96;
                continue _fun14988;
            case 238:
                var1.return();
                var0 = false;
                return var0;
            case 245:
                var1.return();
                var0 = false;
                return var0;
            case 252:
                var1.return();
                var0 = false;
                return var0;
            case 259: // catch_target0 // catch_target1
                CatchBlockStart(arg_register = 0);
                var1.return();
                throw var0;
            case 266:
                var0 = true;
                return var0;
            case 270:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot1 = var4;
    var3 = function(arg0) { // Original name: listEnumValues, environment: var1
        _fun14989: for (var _fun14989_ip = 0;;) switch (_fun14989_ip) {
            case 0:
                var3 = arg0;
                var8 = undefined;
                var0 = undefined;
                var9 = undefined;
                var10 = undefined;
                var1 = _closure1_slot1;
                var2 = var1.bind(var8)(var3);
                var1 = global;
                if (var2) {
                    _fun14989_ip = 62;
                    continue _fun14989
                }
            case 28:
                var5 = var1.Error;
                var2 = var5.prototype;
                var4 = Object.create(var2, {
                    constructor: {
                        value: var5
                    }
                });
                var16 = 'not a typescript enum object';
                var17 = var4;
                var2 = new var17[var5](var16, var15);
                var2 = var2 instanceof Object ? var2 : var4;
                throw var2;
            case 62:
                var0 = new Array(0);
                var2 = var1.Object;
                var1 = var2.entries;
                var1 = var1.bind(var2)(var3);
                var6 = var1;
                var2 = var6[Symbol.iterator];
                var6 = var2().next;
                var5 = 2;
                var4 = 0;
                var3 = 1;
                var1 = 'number';
            case 101:
                var12 = var6().value;
                var11 = var2;
                if (!(var11 !== var8)) {
                    _fun14989_ip = 179;
                    continue _fun14989
                }
            case 112: // try_start_0
                var11 = _closure1_slot0;
                var11 = var11.bind(var8)(var12, var5);
                var9 = var11[var4];
                var11 = var11[var3];
                var10 = var11;
                var11 = typeof var11;
                if (!(var1 === var11)) {
                    _fun14989_ip = 170;
                    continue _fun14989
                }
            case 140:
                var13 = var0;
                var12 = var13.push;
                var11 = {};
                var14 = var9;
                var11.name = var14;
                var14 = var10;
                var11.number = var14;
                var11 = var12.bind(var13)(var11);
            case 170: // try_end0
                _fun14989_ip = 101;
                continue _fun14989;
            case 172: // catch_target0
                CatchBlockStart(arg_register = 1);
                var2.return();
                throw var1;
            case 179:
                return var0;
        }
    };
    var _closure1_slot2 = var3;
    var5 = arg6;
    var0 = 0;
    var6 = var5[var0];
    var5 = arg1;
    var0 = undefined;
    var5 = var5.bind(var0)(var6);
    var _closure1_slot0 = var5;
    var5 = global;
    var8 = var5.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var5 = true;
    var6.value = var5;
    var5 = '__esModule';
    var5 = var7.bind(var8)(var2, var5, var6);
    var2.isEnumObject = var0;
    var2.listEnumValues = var0;
    var2.listEnumNames = var0;
    var2.listEnumNumbers = var0;
    var2.isEnumObject = var4;
    var2.listEnumValues = var3;
    var3 = function(arg0) { // Original name: listEnumNames, environment: var1
        var2 = _closure1_slot2;
        var1 = undefined;
        var0 = arg0;
        var2 = var2.bind(var1)(var0);
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.name;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.listEnumNames = var3;
    var1 = function(arg0) { // Original name: listEnumNumbers, environment: var1
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = arg0;
        var3 = var3.bind(var2)(var1);
        var2 = var3.map;
        var1 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.number;
            return var0;
        };
        var2 = var2.bind(var3)(var1);
        var1 = var2.filter;
        var0 = function(arg0, arg1, arg2) { // Environment: var0
            var2 = arg2;
            var1 = var2.indexOf;
            var0 = arg0;
            var1 = var1.bind(var2)(var0);
            var0 = arg1;
            var0 = var1 == var0;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.listEnumNumbers = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57]);