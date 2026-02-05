// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = function arg0() {
        var1 = this;
        var0 = arg0;
        var1.data = var0;
        var0 = null;
        var1.left = var0;
        var1.right = var0;
        var0 = true;
        var1.red = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot0 = var0;
    var2 = function arg0() {
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
    var3 = function arg0() {
        _fun93812: for (var _fun93812_ip = 0;;) switch (_fun93812_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                var0 = var0 !== var1;
                if (!var0) {
                    _fun93812_ip = 18;
                    continue _fun93812
                }
            case 12:
                var0 = var1.red;
            case 18:
                return var0;
        }
    };
    var _closure1_slot1 = var3;
    var3 = function arg0, arg1() {
        var2 = arg0;
        var3 = arg1;
        var1 = var2.get_child;
        var0 = !var3;
        var0 = var1.bind(var2)(var0);
        var5 = var2.set_child;
        var4 = !var3;
        var1 = var0.get_child;
        var1 = var1.bind(var0)(var3);
        var1 = var5.bind(var2)(var4, var1);
        var1 = var0.set_child;
        var1 = var1.bind(var0)(var3, var2);
        var1 = true;
        var2.red = var1;
        var1 = false;
        var0.red = var1;
        return var0;
    };
    var _closure1_slot2 = var3;
    var3 = function arg0, arg1() {
        var3 = arg0;
        var2 = arg1;
        var6 = var3.set_child;
        var5 = !var2;
        var1 = _closure1_slot2;
        var4 = var3.get_child;
        var0 = !var2;
        var7 = var4.bind(var3)(var0);
        var4 = !var2;
        var0 = undefined;
        var4 = var1.bind(var0)(var7, var4);
        var4 = var6.bind(var3)(var5, var4);
        var0 = var1.bind(var0)(var3, var2);
        return var0;
    };
    var _closure1_slot3 = var3;
    var4 = var0.prototype;
    var3 = function(arg0) { // Environment: var1
        _fun93815: for (var _fun93815_ip = 0;;) switch (_fun93815_ip) {
            case 0:
                var1 = this;
                var0 = arg0;
                if (var0) {
                    _fun93815_ip = 15;
                    continue _fun93815
                }
            case 8:
                var0 = var1.left;
                _fun93815_ip = 20;
                continue _fun93815;
            case 15:
                var0 = var1.right;
            case 20:
                return var0;
        }
    };
    var4.get_child = var3;
    var3 = var0.prototype;
    var0 = function(arg0, arg1) { // Environment: var1
        _fun93816: for (var _fun93816_ip = 0;;) switch (_fun93816_ip) {
            case 0:
                var1 = arg1;
                var0 = this;
                var2 = arg0;
                if (var2) {
                    _fun93816_ip = 19;
                    continue _fun93816
                }
            case 11:
                var0.left = var1;
                _fun93816_ip = 25;
                continue _fun93816;
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
        _fun93817: for (var _fun93817_ip = 0;;) switch (_fun93817_ip) {
            case 0:
                var4 = arg0;
                var1 = this;
                var0 = var1._root;
                var17 = null;
                if (!(var17 !== var0)) {
                    _fun93817_ip = 425;
                    continue _fun93817
                }
            case 20:
                var0 = _closure1_slot0;
                var2 = var0.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var0
                    }
                });
                var15 = undefined;
                var27 = var2;
                var26 = undefined;
                var0 = new var27[var0](var26, var25);
                var2 = var0 instanceof Object ? var0 : var2;
                var14 = var1._root;
                var0 = var1._root;
                var2.right = var0;
                var13 = false;
                var12 = 0;
                var11 = true;
                var10 = false;
                var9 = 0;
                var8 = 0;
                var7 = null;
                var6 = var2;
                var5 = null;
                var3 = undefined;
            case 90:
                var21 = var9;
                if (!(var17 !== var14)) {
                    _fun93817_ip = 173;
                    continue _fun93817
                }
            case 97:
                var18 = _closure1_slot1;
                var0 = var14.left;
                var19 = var18.bind(var15)(var0);
                if (!var19) {
                    _fun93817_ip = 128;
                    continue _fun93817
                }
            case 114:
                var18 = _closure1_slot1;
                var0 = var14.right;
                var19 = var18.bind(var15)(var0);
            case 128:
                var0 = var10;
                var18 = var14;
                if (!var19) {
                    _fun93817_ip = 231;
                    continue _fun93817
                }
            case 137:
                var14.red = var11;
                var19 = var14.left;
                var19.red = var13;
                var19 = var14.right;
                var19.red = var13;
                var0 = var10;
                var18 = var14;
                _fun93817_ip = 231;
                continue _fun93817;
            case 173:
                var19 = _closure1_slot0;
                var20 = var19.prototype;
                var20 = Object.create(var20, {
                    constructor: {
                        value: var19
                    }
                });
                var27 = var20;
                var26 = var4;
                var19 = new var27[var19](var26, var25);
                var19 = var19 instanceof Object ? var19 : var20;
                var20 = var5.set_child;
                var20 = var20.bind(var5)(var21, var19);
                var20 = var1.size;
                var20 = var20 + 1;
                var1.size = var20;
                var0 = true;
                var18 = var19;
            case 231:
                var19 = _closure1_slot1;
                var19 = var19.bind(var15)(var18);
                var20 = var18;
                var18 = var3;
                if (!var19) {
                    _fun93817_ip = 346;
                    continue _fun93817
                }
            case 249:
                var19 = _closure1_slot1;
                var19 = var19.bind(var15)(var5);
                var18 = var3;
                if (!var19) {
                    _fun93817_ip = 346;
                    continue _fun93817
                }
            case 264:
                var19 = var6.right;
                var19 = var19 === var7;
                var22 = var5.get_child;
                var22 = var22.bind(var5)(var8);
                if (!(var20 !== var22)) {
                    _fun93817_ip = 318;
                    continue _fun93817
                }
            case 288:
                var23 = var6.set_child;
                var24 = _closure1_slot3;
                var22 = !var8;
                var22 = var24.bind(var15)(var7, var22);
                var22 = var23.bind(var6)(var19, var22);
                var18 = var19;
                _fun93817_ip = 346;
                continue _fun93817;
            case 318:
                var23 = var6.set_child;
                var24 = _closure1_slot2;
                var22 = !var8;
                var22 = var24.bind(var15)(var7, var22);
                var22 = var23.bind(var6)(var19, var22);
                var18 = var19;
            case 346:
                var22 = var1._comparator;
                var19 = var20.data;
                var19 = var22.bind(var1)(var19, var4);
                if (!(var12 !== var19)) {
                    _fun93817_ip = 412;
                    continue _fun93817
                }
            case 367:
                var22 = var19 < var12;
                if (!(var17 !== var7)) {
                    _fun93817_ip = 378;
                    continue _fun93817
                }
            case 375:
                var6 = var7;
            case 378:
                var19 = var20.get_child;
                var14 = var19.bind(var20)(var22);
                var10 = var0;
                var9 = var22;
                var8 = var21;
                var7 = var5;
                var5 = var20;
                var3 = var18;
                _fun93817_ip = 90;
                continue _fun93817;
            case 412:
                var2 = var2.right;
                var1._root = var2;
                _fun93817_ip = 477;
                continue _fun93817;
            case 425:
                var2 = _closure1_slot0;
                var3 = var2.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var2
                    }
                });
                var27 = var3;
                var26 = var4;
                var2 = new var27[var2](var26, var25);
                var2 = var2 instanceof Object ? var2 : var3;
                var1._root = var2;
                var2 = var1.size;
                var2 = var2 + 1;
                var1.size = var2;
                var0 = true;
            case 477:
                var2 = var1._root;
                var1 = false;
                var2.red = var1;
                return var0;
        }
    };
    var4.insert = var3;
    var3 = var2.prototype;
    var1 = function(arg0) { // Environment: var1
        _fun93818: for (var _fun93818_ip = 0;;) switch (_fun93818_ip) {
            case 0:
                var18 = arg0;
                var1 = this;
                var0 = var1._root;
                var4 = null;
                if (!(var4 !== var0)) {
                    _fun93818_ip = 731;
                    continue _fun93818
                }
            case 20:
                var0 = _closure1_slot0;
                var2 = var0.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var0
                    }
                });
                var16 = undefined;
                var33 = var2;
                var32 = undefined;
                var0 = new var33[var0](var32, var31);
                var3 = var0 instanceof Object ? var0 : var2;
                var0 = var1._root;
                var3.right = var0;
                var0 = var3.get_child;
                var5 = 1;
                var0 = var0.bind(var3)(var5);
                var15 = true;
                var2 = false;
                var14 = 0;
                var13 = var3;
                var12 = null;
                var11 = null;
                var10 = var5;
                var7 = undefined;
                var5 = undefined;
                var9 = var13;
                var8 = null;
                var6 = null;
                if (!(var6 !== var0)) {
                    _fun93818_ip = 623;
                    continue _fun93818
                }
            case 111:
                var0 = var13.get_child;
                var21 = var0.bind(var13)(var10);
                var19 = var1._comparator;
                var0 = var21.data;
                var0 = var19.bind(var1)(var18, var0);
                var24 = var0 > var14;
                var27 = var13;
                var26 = var10;
                if (!(var14 === var0)) {
                    _fun93818_ip = 156;
                    continue _fun93818
                }
            case 153:
                var11 = var21;
            case 156:
                var0 = _closure1_slot1;
                var0 = var0.bind(var16)(var21);
                var19 = var11;
                var20 = var27;
                var23 = var7;
                var22 = var5;
                if (var0) {
                    _fun93818_ip = 578;
                    continue _fun93818
                }
            case 183:
                var25 = _closure1_slot1;
                var0 = var21.get_child;
                var0 = var0.bind(var21)(var24);
                var0 = var25.bind(var16)(var0);
                var20 = var27;
                var23 = var7;
                var22 = var5;
                if (var0) {
                    _fun93818_ip = 578;
                    continue _fun93818
                }
            case 218:
                var25 = _closure1_slot1;
                var0 = var21.get_child;
                var28 = !var24;
                var0 = var0.bind(var21)(var28);
                var0 = var25.bind(var16)(var0);
                if (var0) {
                    _fun93818_ip = 547;
                    continue _fun93818
                }
            case 247:
                var25 = _closure1_slot1;
                var0 = var21.get_child;
                var0 = var0.bind(var21)(var28);
                var0 = var25.bind(var16)(var0);
                var20 = var27;
                var23 = var7;
                var22 = var5;
                if (var0) {
                    _fun93818_ip = 578;
                    continue _fun93818
                }
            case 282:
                var0 = var27.get_child;
                var30 = !var26;
                var25 = var0.bind(var27)(var30);
                var20 = var27;
                var22 = var5;
                var23 = var25;
                if (!(var4 !== var23)) {
                    _fun93818_ip = 578;
                    continue _fun93818
                }
            case 312:
                var28 = _closure1_slot1;
                var0 = var25.get_child;
                var0 = var0.bind(var25)(var30);
                var0 = var28.bind(var16)(var0);
                if (var0) {
                    _fun93818_ip = 390;
                    continue _fun93818
                }
            case 335:
                var28 = _closure1_slot1;
                var0 = var25.get_child;
                var0 = var0.bind(var25)(var26);
                var0 = var28.bind(var16)(var0);
                if (var0) {
                    _fun93818_ip = 390;
                    continue _fun93818
                }
            case 358:
                var27.red = var2;
                var25.red = var15;
                var21.red = var15;
                var20 = var27;
                var23 = var25;
                var22 = var5;
                _fun93818_ip = 578;
                continue _fun93818;
            case 390:
                var0 = var12.right;
                var0 = var0 === var27;
                var29 = _closure1_slot1;
                var28 = var25.get_child;
                var28 = var28.bind(var25)(var26);
                var28 = var29.bind(var16)(var28);
                if (var28) {
                    _fun93818_ip = 469;
                    continue _fun93818
                }
            case 422:
                var29 = _closure1_slot1;
                var28 = var25.get_child;
                var28 = var28.bind(var25)(var30);
                var28 = var29.bind(var16)(var28);
                if (!var28) {
                    _fun93818_ip = 491;
                    continue _fun93818
                }
            case 445:
                var29 = var12.set_child;
                var28 = _closure1_slot2;
                var28 = var28.bind(var16)(var27, var26);
                var28 = var29.bind(var12)(var0, var28);
                _fun93818_ip = 491;
                continue _fun93818;
            case 469:
                var29 = var12.set_child;
                var28 = _closure1_slot3;
                var28 = var28.bind(var16)(var27, var26);
                var28 = var29.bind(var12)(var0, var28);
            case 491:
                var28 = var12.get_child;
                var28 = var28.bind(var12)(var0);
                var28.red = var15;
                var21.red = var15;
                var29 = var28.left;
                var29.red = var2;
                var28 = var28.right;
                var28.red = var2;
                var20 = var27;
                var23 = var25;
                var22 = var0;
                _fun93818_ip = 578;
                continue _fun93818;
            case 547:
                var0 = _closure1_slot2;
                var0 = var0.bind(var16)(var21, var24);
                var25 = var27.set_child;
                var25 = var25.bind(var27)(var26, var0);
                var20 = var0;
                var23 = var7;
                var22 = var5;
            case 578:
                var0 = var21.get_child;
                var0 = var0.bind(var21)(var24);
                var12 = var20;
                var7 = var23;
                var5 = var22;
                var13 = var21;
                var11 = var19;
                var10 = var24;
                var9 = var13;
                var8 = var12;
                var6 = var11;
                if (var4 !== var0) {
                    _fun93818_ip = 111;
                    continue _fun93818
                }
            case 623:
                var0 = var4 !== var6;
                if (!var0) {
                    _fun93818_ip = 696;
                    continue _fun93818
                }
            case 630:
                var5 = var9.data;
                var6.data = var5;
                var7 = var8.set_child;
                var5 = var8.right;
                var10 = var9.get_child;
                var6 = var9.left;
                var6 = var4 === var6;
                var6 = var10.bind(var9)(var6);
                var5 = var5 === var9;
                var5 = var7.bind(var8)(var5, var6);
                var5 = var1.size;
                var5 = var5 - 1;
                var1.size = var5;
            case 696:
                var3 = var3.right;
                var1._root = var3;
                var3 = var1._root;
                if (!(var4 !== var3)) {
                    _fun93818_ip = 729;
                    continue _fun93818
                }
            case 717:
                var1 = var1._root;
                var1.red = var2;
            case 729:
                return var0;
            case 731:
                var0 = false;
                return var0;
        }
    };
    var3.remove = var1;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12280]);