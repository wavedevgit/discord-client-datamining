// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function arg0() {
        _fun28990: for (var _fun28990_ip = 0;;) switch (_fun28990_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 0;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var4.bind(var2)(var1);
                var1 = var1.bind(var2)(var3);
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                if (var1) {
                    _fun28990_ip = 83;
                    continue _fun28990
                }
            case 43:
                var1 = 1;
                var1 = var4[var1];
                var7 = var6.bind(var2)(var1);
                var1 = var7.prototype;
                var5 = Object.create(var1, {
                    constructor: {
                        value: var7
                    }
                });
                var10 = 'ToPropertyDescriptor requires an object';
                var11 = var5;
                var1 = new var11[var7](var10, var9);
                var1 = var1 instanceof Object ? var1 : var5;
                throw var1;
            case 83:
                var1 = {};
                var5 = 2;
                var4 = var4[var5];
                var6 = var6.bind(var2)(var4);
                var4 = 'enumerable';
                var4 = var6.bind(var2)(var3, var4);
                if (!var4) {
                    _fun28990_ip = 146;
                    continue _fun28990
                }
            case 110:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 3;
                var4 = var7[var4];
                var6 = var6.bind(var2)(var4);
                var4 = var3.enumerable;
                var4 = var6.bind(var2)(var4);
                var1['[[Enumerable]]'] = var4;
            case 146:
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var5];
                var6 = var6.bind(var2)(var4);
                var4 = 'configurable';
                var4 = var6.bind(var2)(var3, var4);
                if (!var4) {
                    _fun28990_ip = 213;
                    continue _fun28990
                }
            case 176:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 3;
                var4 = var7[var4];
                var6 = var6.bind(var2)(var4);
                var4 = var3.configurable;
                var4 = var6.bind(var2)(var4);
                var1['[[Configurable]]'] = var4;
            case 213:
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var5];
                var6 = var6.bind(var2)(var4);
                var4 = 'value';
                var4 = var6.bind(var2)(var3, var4);
                if (!var4) {
                    _fun28990_ip = 254;
                    continue _fun28990
                }
            case 243:
                var4 = var3.value;
                var1['[[Value]]'] = var4;
            case 254:
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var5];
                var6 = var6.bind(var2)(var4);
                var4 = 'writable';
                var4 = var6.bind(var2)(var3, var4);
                if (!var4) {
                    _fun28990_ip = 321;
                    continue _fun28990
                }
            case 284:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 3;
                var4 = var7[var4];
                var6 = var6.bind(var2)(var4);
                var4 = var3.writable;
                var4 = var6.bind(var2)(var4);
                var1['[[Writable]]'] = var4;
            case 321:
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var5];
                var6 = var6.bind(var2)(var4);
                var4 = 'get';
                var4 = var6.bind(var2)(var3, var4);
                if (!var4) {
                    _fun28990_ip = 442;
                    continue _fun28990
                }
            case 351:
                var4 = var3.get;
                if (!(var2 !== var4)) {
                    _fun28990_ip = 436;
                    continue _fun28990
                }
            case 360:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var6 = 4;
                var6 = var8[var6];
                var6 = var7.bind(var2)(var6);
                var6 = var6.bind(var2)(var4);
                if (var6) {
                    _fun28990_ip = 436;
                    continue _fun28990
                }
            case 388:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var6 = 1;
                var6 = var8[var6];
                var8 = var7.bind(var2)(var6);
                var6 = var8.prototype;
                var7 = Object.create(var6, {
                    constructor: {
                        value: var8
                    }
                });
                var10 = 'getter must be a function';
                var11 = var7;
                var6 = new var11[var8](var10, var9);
                var6 = var6 instanceof Object ? var6 : var7;
                throw var6;
            case 436:
                var1['[[Get]]'] = var4;
            case 442:
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var5];
                var6 = var6.bind(var2)(var4);
                var4 = 'set';
                var4 = var6.bind(var2)(var3, var4);
                if (!var4) {
                    _fun28990_ip = 563;
                    continue _fun28990
                }
            case 472:
                var3 = var3.set;
                if (!(var2 !== var3)) {
                    _fun28990_ip = 557;
                    continue _fun28990
                }
            case 481:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 4;
                var4 = var7[var4];
                var4 = var6.bind(var2)(var4);
                var4 = var4.bind(var2)(var3);
                if (var4) {
                    _fun28990_ip = 557;
                    continue _fun28990
                }
            case 509:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 1;
                var4 = var7[var4];
                var7 = var6.bind(var2)(var4);
                var4 = var7.prototype;
                var6 = Object.create(var4, {
                    constructor: {
                        value: var7
                    }
                });
                var10 = 'setter must be a function';
                var11 = var6;
                var4 = new var11[var7](var10, var9);
                var4 = var4 instanceof Object ? var4 : var6;
                throw var4;
            case 557:
                var1['[[Set]]'] = var3;
            case 563:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var5];
                var4 = var4.bind(var2)(var3);
                var3 = '[[Get]]';
                var3 = var4.bind(var2)(var1, var3);
                if (var3) {
                    _fun28990_ip = 623;
                    continue _fun28990
                }
            case 593:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var5];
                var4 = var4.bind(var2)(var3);
                var3 = '[[Set]]';
                var3 = var4.bind(var2)(var1, var3);
                if (!var3) {
                    _fun28990_ip = 683;
                    continue _fun28990
                }
            case 623:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var5];
                var4 = var4.bind(var2)(var3);
                var3 = '[[Value]]';
                var3 = var4.bind(var2)(var1, var3);
                if (var3) {
                    _fun28990_ip = 685;
                    continue _fun28990
                }
            case 653:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var5];
                var4 = var4.bind(var2)(var3);
                var3 = '[[Writable]]';
                var3 = var4.bind(var2)(var1, var3);
                if (var3) {
                    _fun28990_ip = 685;
                    continue _fun28990
                }
            case 683:
                return var1;
            case 685:
                var1 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 1;
                var0 = var3[var0];
                var2 = var1.bind(var2)(var0);
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var10 = 'Invalid property descriptor. Cannot both specify accessors and a value or writable attribute';
                var11 = var1;
                var0 = new var11[var2](var10, var9);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3329, 518, 550, 3382, 3364]);