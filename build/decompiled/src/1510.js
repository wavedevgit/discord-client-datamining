// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function(arg0, arg1) { // Original name: decodeComponents, environment: var0
        _fun17244: for (var _fun17244_ip = 0;;) switch (_fun17244_ip) {
            case 0:
                var0 = arg0;
                var1 = arg1;
            case 6: // try_start_0
                var2 = global;
                var4 = var2.decodeURIComponent;
                var5 = var0;
                var3 = var5.join;
                var2 = '';
                var3 = var3.bind(var5)(var2);
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = new Array(1);
                var2[0] = var3;
            case 46: // try_end0
                return var2;
            case 48: // catch_target0
                CatchBlockStart(arg_register = 2);
                var2 = var0;
                var2 = var2.length;
                var3 = 1;
                if (!(var3 !== var2)) {
                    _fun17244_ip = 164;
                    continue _fun17244
                }
            case 65:
                var4 = var1;
                var2 = var4;
                if (var4) {
                    _fun17244_ip = 77;
                    continue _fun17244
                }
            case 74:
                var2 = var3;
            case 77:
                var4 = var2;
                var1 = var4;
                var2 = var0;
                var3 = var2.slice;
                var1 = 0;
                var3 = var3.bind(var2)(var1, var4);
                var1 = var2.slice;
                var6 = var1.bind(var2)(var4);
                var1 = global;
                var1 = var1.Array;
                var1 = var1.prototype;
                var5 = var1.concat;
                var4 = var5.call;
                var2 = _closure1_slot2;
                var1 = undefined;
                var3 = var2.bind(var1)(var3);
                var2 = var2.bind(var1)(var6);
                var1 = new Array(0);
                var1 = var4.bind(var5)(var1, var3, var2);
                return var1;
            case 164:
                return var0;
        }
    };
    var _closure1_slot2 = var1;
    var1 = function(arg0) { // Original name: decode, environment: var0
        _fun17245: for (var _fun17245_ip = 0;;) switch (_fun17245_ip) {
            case 0:
                var0 = arg0;
                var5 = undefined;
                var6 = undefined;
                var7 = undefined;
            case 9: // try_start_0
                var1 = global;
                var2 = var1.decodeURIComponent;
                var1 = var0;
                var1 = var2.bind(var5)(var1);
            case 25: // try_end0
                return var1;
            case 27: // catch_target0
                CatchBlockStart(arg_register = 1);
                var8 = var0;
                var3 = var8.match;
                var2 = _closure1_slot0;
                var2 = var3.bind(var8)(var2);
                var1 = var2;
                if (var2) {
                    _fun17245_ip = 60;
                    continue _fun17245
                }
            case 56:
                var1 = new Array(0);
            case 60:
                var6 = var1;
                var2 = 1;
                var7 = var2;
                var1 = var1.length;
                var3 = '';
                if (!(var2 < var1)) {
                    _fun17245_ip = 157;
                    continue _fun17245
                }
            case 82:
                var9 = _closure1_slot2;
                var8 = var6;
                var2 = var7;
                var8 = var9.bind(var5)(var8, var2);
                var2 = var8.join;
                var9 = var2.bind(var8)(var3);
                var0 = var9;
                var8 = var9.match;
                var2 = _closure1_slot0;
                var2 = var8.bind(var9)(var2);
                var1 = var2;
                if (var2) {
                    _fun17245_ip = 136;
                    continue _fun17245
                }
            case 132:
                var1 = new Array(0);
            case 136:
                var6 = var1;
                var2 = var7;
                var2 = var2 + 1;
                var7 = var2;
                var1 = var1.length;
                if (var2 < var1) {
                    _fun17245_ip = 82;
                    continue _fun17245
                }
            case 157:
                return var0;
        }
    };
    var _closure1_slot3 = var1;
    var1 = global;
    var5 = var1.RegExp;
    var2 = var5.prototype;
    var3 = Object.create(var2, {
        constructor: {
            value: var5
        }
    });
    var7 = '(%[a-f0-9]{2})|([^%]+?)';
    var4 = 'gi';
    var8 = var3;
    var6 = var4;
    var2 = new var8[var5](var7, var6, var5);
    var2 = var2 instanceof Object ? var2 : var3;
    var _closure1_slot0 = var2;
    var3 = var1.RegExp;
    var1 = var3.prototype;
    var2 = Object.create(var1, {
        constructor: {
            value: var3
        }
    });
    var7 = '(%[a-f0-9]{2})+';
    var8 = var2;
    var1 = new var8[var3](var7, var6, var5);
    var1 = var1 instanceof Object ? var1 : var2;
    var _closure1_slot1 = var1;
    var1 = function(arg0) { // Environment: var0
        _fun17246: for (var _fun17246_ip = 0;;) switch (_fun17246_ip) {
            case 0:
                var1 = arg0;
                var0 = var1;
                var2 = 'string';
                var1 = typeof var1;
                if (!(var2 === var1)) {
                    _fun17246_ip = 353;
                    continue _fun17246
                }
            case 20: // try_start_0
                var4 = var0;
                var3 = var4.replace;
                var2 = /\+/g;
                var1 = ' ';
                var3 = var3.bind(var4)(var2, var1);
                var0 = var3;
                var1 = global;
                var2 = var1.decodeURIComponent;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
            case 72: // try_end0
                return var1;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
                var6 = var0;
                var1 = var6;
                var4 = undefined;
                var7 = undefined;
                var8 = undefined;
                var9 = undefined;
                var7 = {
                    '%FE%FF': '��',
                    '%FF%FE': '��'
                };
                var5 = _closure1_slot1;
                var2 = var5.exec;
                var2 = var2.bind(var5)(var6);
                var8 = var2;
                var6 = 0;
                var5 = global;
                if (!var2) {
                    _fun17246_ip = 233;
                    continue _fun17246
                }
            case 132: // try_start_1
                var11 = var7;
                var2 = var8;
                var10 = var2[var6];
                var12 = var5.decodeURIComponent;
                var2 = var2[var6];
                var2 = var12.bind(var4)(var2);
                var11[var10] = var2;
            case 161: // try_end1
                _fun17246_ip = 209;
                continue _fun17246;
            case 163: // catch_target1
                CatchBlockStart(arg_register = 2);
                var11 = _closure1_slot3;
                var2 = var8;
                var10 = var2[var6];
                var10 = var11.bind(var4)(var10);
                var9 = var10;
                var2 = var2[var6];
                if (!(var10 !== var2)) {
                    _fun17246_ip = 209;
                    continue _fun17246
                }
            case 192:
                var11 = var7;
                var2 = var8;
                var10 = var2[var6];
                var2 = var9;
                var11[var10] = var2;
            case 209:
                var11 = _closure1_slot1;
                var10 = var11.exec;
                var2 = var1;
                var2 = var10.bind(var11)(var2);
                var8 = var2;
                if (var2) {
                    _fun17246_ip = 132;
                    continue _fun17246
                }
            case 233:
                var4 = var7;
                var2 = '�';
                var4['%C2'] = var2;
                var3 = var5.Object;
                var2 = var3.keys;
                var4 = var2.bind(var3)(var4);
                var2 = var4.length;
                var2 = var6 < var2;
                var3 = 'g';
                var6 = 0;
                if (!var2) {
                    _fun17246_ip = 351;
                    continue _fun17246
                }
            case 282:
                var11 = var4[var6];
                var10 = var1;
                var9 = var10.replace;
                var2 = var5.RegExp;
                var8 = var2.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var2
                    }
                });
                var15 = var8;
                var14 = var11;
                var13 = var3;
                var2 = new var15[var2](var14, var13, var12);
                var8 = var2 instanceof Object ? var2 : var8;
                var2 = var7;
                var2 = var2[var11];
                var1 = var9.bind(var10)(var8, var2);
                var6 = var6 + 1;
                var2 = var4.length;
                if (var6 < var2) {
                    _fun17246_ip = 282;
                    continue _fun17246
                }
            case 351:
                return var1;
            case 353:
                var1 = global;
                var2 = var1.TypeError;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var3 = 'Expected `encodedURI` to be of type `string`, got `';
                var0 = typeof var0;
                var3 = var3 + var0;
                var0 = '`';
                var14 = var3 + var0;
                var15 = var1;
                var0 = new var15[var2](var14, var13);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);