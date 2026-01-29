// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = function(arg0) { // Original name: Node, environment: var1
        var1 = this;
        var0 = arg0;
        var1.data = var0;
        var0 = null;
        var1.left = var0;
        var1.right = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot0 = var0;
    var2 = function(arg0) { // Original name: BinTree, environment: var1
        var1 = this;
        var0 = null;
        var1._root = var0;
        var0 = arg0;
        var1._comparator = var0;
        var0 = 0;
        var1.size = var0;
        var0 = undefined;
        return var0;
    };
    var4 = var0.prototype;
    var3 = function(arg0) { // Environment: var1
        _fun94167: for (var _fun94167_ip = 0;;) switch (_fun94167_ip) {
            case 0:
                var1 = this;
                var0 = arg0;
                if (var0) {
                    _fun94167_ip = 15;
                    continue _fun94167
                }
            case 8:
                var0 = var1.left;
                _fun94167_ip = 20;
                continue _fun94167;
            case 15:
                var0 = var1.right;
            case 20:
                return var0;
        }
    };
    var4.get_child = var3;
    var3 = var0.prototype;
    var0 = function(arg0, arg1) { // Environment: var1
        _fun94168: for (var _fun94168_ip = 0;;) switch (_fun94168_ip) {
            case 0:
                var1 = arg1;
                var0 = this;
                var2 = arg0;
                if (var2) {
                    _fun94168_ip = 19;
                    continue _fun94168
                }
            case 11:
                var0.left = var1;
                _fun94168_ip = 25;
                continue _fun94168;
            case 19:
                var0.right = var1;
            case 25:
                var0 = undefined;
                return var0;
        }
    };
    var3.set_child = var0;
    var3 = arg6;
    var0 = 0;
    var4 = var3[var0];
    var3 = arg1;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var6 = var4;
    var3 = new var6[var3](var5);
    var3 = var3 instanceof Object ? var3 : var4;
    var2.prototype = var3;
    var4 = var2.prototype;
    var3 = function(arg0) { // Environment: var1
        _fun94169: for (var _fun94169_ip = 0;;) switch (_fun94169_ip) {
            case 0:
                var3 = arg0;
                var1 = this;
                var0 = var1._root;
                var8 = null;
                if (!(var8 !== var0)) {
                    _fun94169_ip = 180;
                    continue _fun94169
                }
            case 20:
                var7 = var1._root;
                var6 = 0;
                var2 = 0;
                var0 = null;
            case 32:
                var5 = var2;
                var4 = var0;
                if (!(var8 !== var7)) {
                    _fun94169_ip = 110;
                    continue _fun94169
                }
            case 42:
                var10 = var1._comparator;
                var9 = var7.data;
                var9 = var10.bind(var1)(var9, var3);
                if (!(var6 !== var9)) {
                    _fun94169_ip = 106;
                    continue _fun94169
                }
            case 63:
                var10 = var1._comparator;
                var9 = var7.data;
                var9 = var10.bind(var1)(var9, var3);
                var10 = var9 < var6;
                var9 = var7.get_child;
                var9 = var9.bind(var7)(var10);
                var2 = var10;
                var0 = var7;
                var7 = var9;
                _fun94169_ip = 32;
                continue _fun94169;
            case 106:
                var0 = false;
                return var0;
            case 110:
                var0 = _closure1_slot0;
                var2 = var0.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var0
                    }
                });
                var13 = var2;
                var12 = var3;
                var0 = new var13[var0](var12, var11);
                var2 = var0 instanceof Object ? var0 : var2;
                var0 = var4.set_child;
                var0 = var0.bind(var4)(var5, var2);
                var0 = true;
                var2 = global;
                var2.ret = var0;
                var2 = var1.size;
                var2 = var2 + 1;
                var1.size = var2;
                return var0;
            case 180:
                var0 = _closure1_slot0;
                var2 = var0.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var0
                    }
                });
                var13 = var2;
                var12 = var3;
                var0 = new var13[var0](var12, var11);
                var0 = var0 instanceof Object ? var0 : var2;
                var1._root = var0;
                var0 = var1.size;
                var0 = var0 + 1;
                var1.size = var0;
                var0 = true;
                return var0;
        }
    };
    var4.insert = var3;
    var3 = var2.prototype;
    var1 = function(arg0) { // Environment: var1
        _fun94170: for (var _fun94170_ip = 0;;) switch (_fun94170_ip) {
            case 0:
                var11 = arg0;
                var2 = this;
                var0 = var2._root;
                var9 = null;
                if (!(var9 !== var0)) {
                    _fun94170_ip = 253;
                    continue _fun94170
                }
            case 20:
                var3 = _closure1_slot0;
                var0 = var3.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var3
                    }
                });
                var17 = undefined;
                var18 = var1;
                var0 = new var18[var3](var17, var16);
                var1 = var0 instanceof Object ? var0 : var1;
                var0 = var2._root;
                var1.right = var0;
                var0 = var1.get_child;
                var3 = 1;
                var0 = var0.bind(var1)(var3);
                var10 = 0;
                var8 = var1;
                var5 = null;
                var7 = var8;
                var6 = null;
                var4 = null;
                if (!(var4 !== var0)) {
                    _fun94170_ip = 165;
                    continue _fun94170
                }
            case 93:
                var0 = var8.get_child;
                var14 = var0.bind(var8)(var3);
                var12 = var2._comparator;
                var0 = var14.data;
                var0 = var12.bind(var2)(var11, var0);
                var15 = var0 > var10;
                var13 = var8;
                if (!(var10 === var0)) {
                    _fun94170_ip = 135;
                    continue _fun94170
                }
            case 132:
                var5 = var14;
            case 135:
                var0 = var14.get_child;
                var0 = var0.bind(var14)(var15);
                var8 = var14;
                var3 = var15;
                var7 = var8;
                var6 = var13;
                var4 = var5;
                if (var9 !== var0) {
                    _fun94170_ip = 93;
                    continue _fun94170
                }
            case 165:
                var0 = var9 !== var4;
                if (!var0) {
                    _fun94170_ip = 251;
                    continue _fun94170
                }
            case 172:
                var3 = var7.data;
                var4.data = var3;
                var5 = var6.set_child;
                var3 = var6.right;
                var8 = var7.get_child;
                var4 = var7.left;
                var4 = var9 === var4;
                var4 = var8.bind(var7)(var4);
                var3 = var3 === var7;
                var3 = var5.bind(var6)(var3, var4);
                var1 = var1.right;
                var2._root = var1;
                var1 = var2.size;
                var1 = var1 - 1;
                var2.size = var1;
                var0 = true;
            case 251:
                return var0;
            case 253:
                var0 = false;
                return var0;
        }
    };
    var3.remove = var1;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12259]);