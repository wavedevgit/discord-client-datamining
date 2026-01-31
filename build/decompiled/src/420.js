// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var1, var0, var3);
    var3 = function arg0() {
        _fun5884: for (var _fun5884_ip = 0;;) switch (_fun5884_ip) {
            case 0:
                var3 = arg0;
                var2 = this;
                var0 = var2.instancePool;
                var0 = var0.length;
                if (var0) {
                    _fun5884_ip = 45;
                    continue _fun5884
                }
            case 20:
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var6 = var1;
                var5 = var3;
                var0 = new var6[var2](var5, var4);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
            case 45:
                var1 = var2.instancePool;
                var0 = var1.pop;
                var0 = var0.bind(var1)();
                var1 = var2.call;
                var1 = var1.bind(var2)(var0, var3);
                return var0;
        }
    };
    var0 = function arg0() {
        _fun5885: for (var _fun5885_ip = 0;;) switch (_fun5885_ip) {
            case 0:
                var3 = arg0;
                var1 = this;
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 0;
                var2 = var2[var0];
                var0 = undefined;
                var5 = var4.bind(var0)(var2);
                var4 = var3 instanceof var1;
                var2 = 'Trying to release an instance into a pool of a different type.';
                var2 = var5.bind(var0)(var4, var2);
                var2 = var3.destructor;
                var2 = var2.bind(var3)();
                var2 = var1.instancePool;
                var4 = var2.length;
                var2 = var1.poolSize;
                if (!(var4 < var2)) {
                    _fun5885_ip = 93;
                    continue _fun5885
                }
            case 77:
                var2 = var1.instancePool;
                var1 = var2.push;
                var1 = var1.bind(var2)(var3);
            case 93:
                return var0;
        }
    };
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var3;
    var0 = {};
    var4 = function arg0, arg1() {
        _fun5886: for (var _fun5886_ip = 0;;) switch (_fun5886_ip) {
            case 0:
                var0 = arg0;
                var1 = arg1;
                var2 = new Array(0);
                var0.instancePool = var2;
                if (var1) {
                    _fun5886_ip = 26;
                    continue _fun5886
                }
            case 19:
                var1 = _closure1_slot3;
            case 26:
                var0.getPooled = var1;
                var1 = var0.poolSize;
                if (var1) {
                    _fun5886_ip = 50;
                    continue _fun5886
                }
            case 41:
                var1 = 10;
                var0.poolSize = var1;
            case 50:
                var1 = _closure1_slot2;
                var0.release = var1;
                return var0;
        }
    };
    var0.addPoolingTo = var4;
    var0.oneArgumentPooler = var3;
    var3 = function arg0, arg1() {
        _fun5887: for (var _fun5887_ip = 0;;) switch (_fun5887_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var2 = this;
                var0 = var2.instancePool;
                var0 = var0.length;
                if (var0) {
                    _fun5887_ip = 51;
                    continue _fun5887
                }
            case 23:
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var8 = var1;
                var7 = var4;
                var6 = var3;
                var0 = new var8[var2](var7, var6, var5);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
            case 51:
                var1 = var2.instancePool;
                var0 = var1.pop;
                var0 = var0.bind(var1)();
                var1 = var2.call;
                var1 = var1.bind(var2)(var0, var4, var3);
                return var0;
        }
    };
    var0.twoArgumentPooler = var3;
    var3 = function arg0, arg1, arg2() {
        _fun5888: for (var _fun5888_ip = 0;;) switch (_fun5888_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var3 = arg2;
                var2 = this;
                var0 = var2.instancePool;
                var0 = var0.length;
                if (var0) {
                    _fun5888_ip = 57;
                    continue _fun5888
                }
            case 26:
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var10 = var1;
                var9 = var5;
                var8 = var4;
                var7 = var3;
                var0 = new var10[var2](var9, var8, var7, var6);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
            case 57:
                var1 = var2.instancePool;
                var0 = var1.pop;
                var0 = var0.bind(var1)();
                var1 = var2.call;
                var10 = var2;
                var9 = var0;
                var8 = var5;
                var7 = var4;
                var6 = var3;
                var1 = var10[var1](var9, var8, var7, var6, var5);
                return var0;
        }
    };
    var0.threeArgumentPooler = var3;
    var2 = function arg0, arg1, arg2, arg3() {
        _fun5889: for (var _fun5889_ip = 0;;) switch (_fun5889_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var4 = arg2;
                var3 = arg3;
                var2 = this;
                var0 = var2.instancePool;
                var0 = var0.length;
                if (var0) {
                    _fun5889_ip = 63;
                    continue _fun5889
                }
            case 29:
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var12 = var1;
                var11 = var6;
                var10 = var5;
                var9 = var4;
                var8 = var3;
                var0 = new var12[var2](var11, var10, var9, var8, var7);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
            case 63:
                var1 = var2.instancePool;
                var0 = var1.pop;
                var0 = var0.bind(var1)();
                var1 = var2.call;
                var12 = var2;
                var11 = var0;
                var10 = var6;
                var9 = var5;
                var8 = var4;
                var7 = var3;
                var1 = var12[var1](var11, var10, var9, var8, var7, var6);
                return var0;
        }
    };
    var0.fourArgumentPooler = var2;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [44]);