// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var5 = function arg0() {
        _fun94841: for (var _fun94841_ip = 0;;) switch (_fun94841_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.length;
                var1 = var0 - 1;
                var0 = 0;
                if (!(var1 >= var0)) {
                    _fun94841_ip = 28;
                    continue _fun94841
                }
            case 17:
                var2[var1] = var0;
                var1 = var1 - 1;
                if (var1 >= var0) {
                    _fun94841_ip = 17;
                    continue _fun94841
                }
            case 28:
                var0 = undefined;
                return var0;
        }
    };
    var0 = function arg0, arg1, arg2, arg3, arg4() {
        _fun94842: for (var _fun94842_ip = 0;;) switch (_fun94842_ip) {
            case 0:
                var2 = arg0;
                var1 = this;
                var1.static_tree = var2;
                var0 = arg1;
                var1.extra_bits = var0;
                var0 = arg2;
                var1.extra_base = var0;
                var0 = arg3;
                var1.elems = var0;
                var0 = arg4;
                var1.max_length = var0;
                var0 = var2;
                if (!var0) {
                    _fun94842_ip = 59;
                    continue _fun94842
                }
            case 54:
                var0 = var2.length;
            case 59:
                var1.has_stree = var0;
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function arg0, arg1() {
        var1 = this;
        var0 = arg0;
        var1.dyn_tree = var0;
        var0 = 0;
        var1.max_code = var0;
        var0 = arg1;
        var1.stat_desc = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot17 = var0;
    var0 = function arg0() {
        _fun94844: for (var _fun94844_ip = 0;;) switch (_fun94844_ip) {
            case 0:
                var2 = arg0;
                var3 = 256;
                if (!(!(var2 < var3))) {
                    _fun94844_ip = 37;
                    continue _fun94844
                }
            case 13:
                var1 = _closure1_slot8;
                var0 = 7;
                var0 = var2 >>> var0;
                var0 = var3 + var0;
                var0 = var1[var0];
                _fun94844_ip = 48;
                continue _fun94844;
            case 37:
                var1 = _closure1_slot8;
                var0 = var1[var2];
            case 48:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function arg0, arg1() {
        var5 = arg0;
        var4 = arg1;
        var2 = var5.pending_buf;
        var0 = var5.pending;
        var1 = parseFloat(var0);
        var0 = var1 + 1;
        var5.pending = var0;
        var3 = 255;
        var0 = var3 & var4;
        var2[var1] = var0;
        var2 = var5.pending_buf;
        var0 = var5.pending;
        var1 = parseFloat(var0);
        var0 = var1 + 1;
        var5.pending = var0;
        var0 = 8;
        var0 = var4 >>> var0;
        var0 = var0 & var3;
        var2[var1] = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot19 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun94846: for (var _fun94846_ip = 0;;) switch (_fun94846_ip) {
            case 0:
                var1 = arg0;
                var4 = arg1;
                var3 = arg2;
                var5 = var1.bi_valid;
                var0 = 16;
                var2 = var0 - var3;
                if (!(!(var5 > var2))) {
                    _fun94846_ip = 80;
                    continue _fun94846
                }
            case 26:
                var5 = var1.bi_buf;
                var2 = var1.bi_valid;
                var6 = var4 << var2;
                var2 = 65535;
                var2 = var6 & var2;
                var2 = var5 | var2;
                var1.bi_buf = var2;
                var2 = var1.bi_valid;
                var2 = var2 + var3;
                var1.bi_valid = var2;
                _fun94846_ip = 177;
                continue _fun94846;
            case 80:
                var5 = var1.bi_buf;
                var2 = var1.bi_valid;
                var6 = var4 << var2;
                var2 = 65535;
                var2 = var6 & var2;
                var2 = var5 | var2;
                var1.bi_buf = var2;
                var6 = _closure1_slot19;
                var5 = var1.bi_buf;
                var2 = undefined;
                var2 = var6.bind(var2)(var1, var5);
                var2 = var1.bi_valid;
                var2 = var0 - var2;
                var2 = var4 >> var2;
                var1.bi_buf = var2;
                var2 = var1.bi_valid;
                var0 = var3 - var0;
                var0 = var2 + var0;
                var1.bi_valid = var0;
            case 177:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function arg0, arg1, arg2() {
        var2 = arg1;
        var1 = arg2;
        var4 = _closure1_slot20;
        var0 = 2;
        var3 = var0 * var2;
        var3 = var1[var3];
        var2 = var0 * var2;
        var0 = 1;
        var0 = var2 + var0;
        var2 = var1[var0];
        var0 = undefined;
        var1 = arg0;
        var1 = var4.bind(var0)(var1, var3, var2);
        return var0;
    };
    var _closure1_slot21 = var0;
    var0 = function arg0, arg1() {
        _fun94848: for (var _fun94848_ip = 0;;) switch (_fun94848_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var3 = 0;
                var1 = 1;
                var2 = 0;
            case 13:
                var0 = var1 & var5;
                var5 = var5 >>> var1;
                var0 = var2 | var0;
                var0 = var0 << var1;
                var4 = var4 - 1;
                var2 = var0;
                if (var4 > var3) {
                    _fun94848_ip = 13;
                    continue _fun94848
                }
            case 39:
                var0 = var0 >>> var1;
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun94849: for (var _fun94849_ip = 0;;) switch (_fun94849_ip) {
            case 0:
                var8 = arg0;
                var7 = arg1;
                var3 = arg2;
                var0 = global;
                var2 = var0.Array;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var15 = 16;
                var16 = var1;
                var0 = new var16[var2](var15, var14);
                var6 = var0 instanceof Object ? var0 : var1;
                var5 = 1;
                var4 = 0;
                var2 = 15;
                var1 = var5;
                var0 = 0;
            case 53:
                var9 = var1 - var5;
                var9 = var3[var9];
                var9 = var0 + var9;
                var0 = var9 << var5;
                var6[var1] = var0;
                var1 = var1 + 1;
                if (var1 <= var2) {
                    _fun94849_ip = 53;
                    continue _fun94849
                }
            case 80:
                var9 = var4 <= var7;
                var3 = 2;
                var0 = undefined;
                var1 = 0;
                if (!var9) {
                    _fun94849_ip = 152;
                    continue _fun94849
                }
            case 97:
                var9 = var3 * var1;
                var9 = var9 + var5;
                var12 = var8[var9];
                if (!(var4 !== var12)) {
                    _fun94849_ip = 145;
                    continue _fun94849
                }
            case 113:
                var10 = var3 * var1;
                var11 = _closure1_slot22;
                var9 = var6[var12];
                var9 = parseFloat(var9);
                var13 = var9 + 1;
                var6[var12] = var13;
                var9 = var11.bind(var0)(var9, var12);
                var8[var10] = var9;
            case 145:
                var1 = var1 + 1;
                if (var1 <= var7) {
                    _fun94849_ip = 97;
                    continue _fun94849
                }
            case 152:
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function arg0() {
        _fun94850: for (var _fun94850_ip = 0;;) switch (_fun94850_ip) {
            case 0:
                var1 = arg0;
                var0 = 0;
                var4 = 2;
                var3 = 19;
                var6 = 30;
                var7 = 286;
                var2 = 0;
            case 22:
                var8 = var1.dyn_ltree;
                var5 = var4 * var2;
                var8[var5] = var0;
                var2 = var2 + 1;
                var5 = 0;
                if (var2 < var7) {
                    _fun94850_ip = 22;
                    continue _fun94850
                }
            case 45:
                var7 = var1.dyn_dtree;
                var2 = var4 * var5;
                var7[var2] = var0;
                var5 = var5 + 1;
                var2 = 0;
                if (var5 < var6) {
                    _fun94850_ip = 45;
                    continue _fun94850
                }
            case 68:
                var6 = var1.bl_tree;
                var5 = var4 * var2;
                var6[var5] = var0;
                var2 = var2 + 1;
                if (var2 < var3) {
                    _fun94850_ip = 68;
                    continue _fun94850
                }
            case 89:
                var4 = var1.dyn_ltree;
                var3 = 1;
                var2 = 512;
                var4[var2] = var3;
                var1.static_len = var0;
                var1.opt_len = var0;
                var1.matches = var0;
                var1.last_lit = var0;
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function arg0() {
        _fun94851: for (var _fun94851_ip = 0;;) switch (_fun94851_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.bi_valid;
                var0 = 8;
                if (!(!(var2 > var0))) {
                    _fun94851_ip = 64;
                    continue _fun94851
                }
            case 16:
                var2 = var1.bi_valid;
                var0 = 0;
                if (!(var2 > var0)) {
                    _fun94851_ip = 85;
                    continue _fun94851
                }
            case 28:
                var3 = var1.pending_buf;
                var0 = var1.pending;
                var2 = parseFloat(var0);
                var0 = var2 + 1;
                var1.pending = var0;
                var0 = var1.bi_buf;
                var3[var2] = var0;
                _fun94851_ip = 85;
                continue _fun94851;
            case 64:
                var3 = _closure1_slot19;
                var2 = var1.bi_buf;
                var0 = undefined;
                var0 = var3.bind(var0)(var1, var2);
            case 85:
                var0 = 0;
                var1.bi_buf = var0;
                var1.bi_valid = var0;
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun94852: for (var _fun94852_ip = 0;;) switch (_fun94852_ip) {
            case 0:
                var6 = arg0;
                var3 = arg1;
                var4 = arg2;
                var2 = arg3;
                var0 = 2;
                var5 = var0 * var3;
                var1 = var0 * var4;
                var7 = var6[var5];
                var0 = var6[var1];
                var0 = var7 < var0;
                if (var0) {
                    _fun94852_ip = 68;
                    continue _fun94852
                }
            case 38:
                var5 = var6[var5];
                var1 = var6[var1];
                var1 = var5 === var1;
                if (!var1) {
                    _fun94852_ip = 65;
                    continue _fun94852
                }
            case 53:
                var3 = var2[var3];
                var2 = var2[var4];
                var1 = var3 <= var2;
            case 65:
                var0 = var1;
            case 68:
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun94853: for (var _fun94853_ip = 0;;) switch (_fun94853_ip) {
            case 0:
                var0 = arg0;
                var9 = arg1;
                var10 = arg2;
                var1 = var0.heap;
                var2 = var1[var10];
                var8 = 1;
                var3 = var10 << var8;
                var4 = var0.heap_len;
                var1 = var10;
                if (!(var3 <= var4)) {
                    _fun94853_ip = 306;
                    continue _fun94853
                }
            case 42:
                var4 = var0.heap_len;
                var4 = var3 < var4;
                if (!var4) {
                    _fun94853_ip = 101;
                    continue _fun94853
                }
            case 55:
                var12 = _closure1_slot26;
                var6 = var0.heap;
                var5 = var3 + var8;
                var18 = var6[var5];
                var5 = var0.heap;
                var17 = var5[var3];
                var16 = var0.depth;
                var20 = undefined;
                var19 = var9;
                var4 = var20[var12](var19, var18, var17, var16, var15);
            case 101:
                var7 = var3;
                if (!var4) {
                    _fun94853_ip = 110;
                    continue _fun94853
                }
            case 107:
                var7 = var3 + 1;
            case 110:
                var11 = _closure1_slot26;
                var3 = var0.heap;
                var17 = var3[var7];
                var16 = var0.depth;
                var20 = undefined;
                var19 = var9;
                var18 = var2;
                var3 = var20[var11](var19, var18, var17, var16, var15);
                var4 = var10;
                var1 = var4;
                if (var3) {
                    _fun94853_ip = 306;
                    continue _fun94853
                }
            case 157:
                var10 = var0.heap;
                var3 = var0.heap;
                var3 = var3[var7];
                var10[var4] = var3;
                var3 = var7 << var8;
                var11 = var0.heap_len;
                var10 = var7;
                var1 = var10;
                if (!(var3 <= var11)) {
                    _fun94853_ip = 306;
                    continue _fun94853
                }
            case 197:
                var11 = var0.heap_len;
                var11 = var3 < var11;
                if (!var11) {
                    _fun94853_ip = 253;
                    continue _fun94853
                }
            case 210:
                var15 = _closure1_slot26;
                var13 = var0.heap;
                var12 = var3 + var8;
                var18 = var13[var12];
                var12 = var0.heap;
                var17 = var12[var3];
                var16 = var0.depth;
                var20 = undefined;
                var19 = var9;
                var11 = var20[var15](var19, var18, var17, var16, var15);
            case 253:
                var7 = var3;
                if (!var11) {
                    _fun94853_ip = 262;
                    continue _fun94853
                }
            case 259:
                var7 = var3 + 1;
            case 262:
                var12 = _closure1_slot26;
                var3 = var0.heap;
                var17 = var3[var7];
                var16 = var0.depth;
                var20 = undefined;
                var19 = var9;
                var18 = var2;
                var3 = var20[var12](var19, var18, var17, var16, var15);
                var4 = var10;
                var1 = var4;
                if (!var3) {
                    _fun94853_ip = 157;
                    continue _fun94853
                }
            case 306:
                var0 = var0.heap;
                var0[var1] = var2;
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun94854: for (var _fun94854_ip = 0;;) switch (_fun94854_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var13 = arg2;
                var5 = var4.last_lit;
                var0 = undefined;
                var12 = 0;
                var2 = 256;
                var11 = 1;
                var10 = 2;
                var9 = 8;
                var8 = undefined;
                var7 = undefined;
                var6 = 0;
                if (!(var6 !== var5)) {
                    _fun94854_ip = 310;
                    continue _fun94854
                }
            case 50:
                var14 = var4.pending_buf;
                var15 = var4.d_buf;
                var5 = var10 * var6;
                var5 = var15 + var5;
                var5 = var14[var5];
                var14 = var5 << var9;
                var15 = var4.pending_buf;
                var16 = var4.d_buf;
                var5 = var10 * var6;
                var5 = var16 + var5;
                var5 = var5 + var11;
                var5 = var15[var5];
                var15 = var14 | var5;
                var14 = var4.pending_buf;
                var5 = var4.l_buf;
                var5 = var5 + var6;
                var16 = var14[var5];
                var6 = var6 + 1;
                if (!(var12 !== var15)) {
                    _fun94854_ip = 274;
                    continue _fun94854
                }
            case 140:
                var14 = _closure1_slot21;
                var5 = _closure1_slot9;
                var18 = var5[var16];
                var5 = var18 + var2;
                var5 = var5 + var11;
                var5 = var14.bind(var0)(var4, var5, var3);
                var5 = _closure1_slot2;
                var17 = var5[var18];
                if (!(var12 !== var17)) {
                    _fun94854_ip = 202;
                    continue _fun94854
                }
            case 179:
                var14 = _closure1_slot20;
                var5 = _closure1_slot10;
                var5 = var5[var18];
                var5 = var16 - var5;
                var5 = var14.bind(var0)(var4, var5, var17);
            case 202:
                var5 = _closure1_slot21;
                var14 = _closure1_slot18;
                var20 = var15 - 1;
                var17 = var14.bind(var0)(var20);
                var5 = var5.bind(var0)(var4, var17, var13);
                var5 = _closure1_slot3;
                var5 = var5[var17];
                var15 = var17;
                var14 = var5;
                if (!(var12 !== var5)) {
                    _fun94854_ip = 291;
                    continue _fun94854
                }
            case 243:
                var19 = _closure1_slot20;
                var18 = _closure1_slot14;
                var18 = var18[var17];
                var18 = var20 - var18;
                var18 = var19.bind(var0)(var4, var18, var5);
                var15 = var17;
                var14 = var5;
                _fun94854_ip = 291;
                continue _fun94854;
            case 274:
                var5 = _closure1_slot21;
                var5 = var5.bind(var0)(var4, var16, var3);
                var15 = var8;
                var14 = var7;
            case 291:
                var5 = var4.last_lit;
                var8 = var15;
                var7 = var14;
                if (var6 < var5) {
                    _fun94854_ip = 50;
                    continue _fun94854
                }
            case 310:
                var1 = _closure1_slot21;
                var1 = var1.bind(var0)(var4, var2, var3);
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var0 = function arg0, arg1() {
        _fun94855: for (var _fun94855_ip = 0;;) switch (_fun94855_ip) {
            case 0:
                var1 = arg0;
                var5 = arg1;
                var4 = var5.dyn_tree;
                var0 = var5.stat_desc;
                var7 = var0.static_tree;
                var0 = var5.stat_desc;
                var6 = var0.has_stree;
                var0 = var5.stat_desc;
                var8 = var0.elems;
                var12 = 0;
                var1.heap_len = var12;
                var21 = 573;
                var1.heap_max = var21;
                var9 = var12 < var8;
                var0 = -1;
                var11 = 2;
                var10 = 1;
                var2 = 0;
                var3 = var0;
                if (!var9) {
                    _fun94855_ip = 166;
                    continue _fun94855
                }
            case 92:
                var9 = var11 * var2;
                var9 = var4[var9];
                if (!(var12 === var9)) {
                    _fun94855_ip = 118;
                    continue _fun94855
                }
            case 104:
                var9 = var11 * var2;
                var9 = var9 + var10;
                var4[var9] = var12;
                _fun94855_ip = 156;
                continue _fun94855;
            case 118:
                var13 = var1.heap;
                var9 = var1.heap_len;
                var9 = var9 + 1;
                var1.heap_len = var9;
                var13[var9] = var2;
                var9 = var1.depth;
                var9[var2] = var12;
                var0 = var2;
            case 156:
                var2 = var2 + 1;
                var3 = var0;
                if (var2 < var8) {
                    _fun94855_ip = 92;
                    continue _fun94855
                }
            case 166:
                var0 = var1.heap_len;
                var2 = var3;
                var3 = var2;
                if (!(var0 < var11)) {
                    _fun94855_ip = 302;
                    continue _fun94855
                }
            case 182:
                var14 = var1.heap;
                var0 = var1.heap_len;
                var13 = var0 + 1;
                var1.heap_len = var13;
                var0 = 0;
                var9 = var2;
                if (!(var9 < var11)) {
                    _fun94855_ip = 218;
                    continue _fun94855
                }
            case 212:
                var9 = var2 + 1;
                var0 = var9;
            case 218:
                var14[var13] = var0;
                var13 = var11 * var0;
                var4[var13] = var10;
                var13 = var1.depth;
                var13[var0] = var12;
                var13 = var1.opt_len;
                var13 = var13 - 1;
                var1.opt_len = var13;
                if (!var6) {
                    _fun94855_ip = 286;
                    continue _fun94855
                }
            case 258:
                var13 = var1.static_len;
                var0 = var11 * var0;
                var0 = var0 + var10;
                var0 = var7[var0];
                var0 = var13 - var0;
                var1.static_len = var0;
            case 286:
                var0 = var1.heap_len;
                var2 = var9;
                var3 = var2;
                if (var0 < var11) {
                    _fun94855_ip = 182;
                    continue _fun94855
                }
            case 302:
                var5.max_code = var3;
                var0 = var1.heap_len;
                var6 = var0 >> var10;
                var0 = undefined;
                var7 = var8;
                if (!(var6 >= var10)) {
                    _fun94855_ip = 351;
                    continue _fun94855
                }
            case 330:
                var9 = _closure1_slot27;
                var9 = var9.bind(var0)(var1, var4, var6);
                var6 = var6 - 1;
                var7 = var8;
                if (var6 >= var10) {
                    _fun94855_ip = 330;
                    continue _fun94855
                }
            case 351:
                var6 = var1.heap;
                var6 = var6[var10];
                var9 = var1.heap;
                var13 = var1.heap;
                var8 = var1.heap_len;
                var8 = parseFloat(var8);
                var14 = var8 - 1;
                var1.heap_len = var14;
                var8 = var13[var8];
                var9[var10] = var8;
                var8 = _closure1_slot27;
                var8 = var8.bind(var0)(var1, var4, var10);
                var8 = var1.heap;
                var8 = var8[var10];
                var13 = var1.heap;
                var9 = var1.heap_max;
                var9 = var9 - 1;
                var1.heap_max = var9;
                var13[var9] = var6;
                var13 = var1.heap;
                var9 = var1.heap_max;
                var9 = var9 - 1;
                var1.heap_max = var9;
                var13[var9] = var8;
                var13 = var11 * var7;
                var9 = var11 * var6;
                var14 = var4[var9];
                var9 = var11 * var8;
                var9 = var4[var9];
                var9 = var14 + var9;
                var4[var13] = var9;
                var13 = var1.depth;
                var9 = var1.depth;
                var14 = var9[var6];
                var9 = var1.depth;
                var9 = var9[var8];
                if (!(!(var14 >= var9))) {
                    _fun94855_ip = 540;
                    continue _fun94855
                }
            case 528:
                var9 = var1.depth;
                var9 = var9[var8];
                _fun94855_ip = 550;
                continue _fun94855;
            case 540:
                var14 = var1.depth;
                var9 = var14[var6];
            case 550:
                var9 = var9 + var10;
                var13[var7] = var9;
                var6 = var11 * var6;
                var8 = var11 * var8;
                var8 = var8 + var10;
                var4[var8] = var7;
                var6 = var6 + var10;
                var4[var6] = var7;
                var8 = var1.heap;
                var6 = parseFloat(var7);
                var7 = var6 + 1;
                var8[var10] = var6;
                var6 = _closure1_slot27;
                var6 = var6.bind(var0)(var1, var4, var10);
                var6 = var1.heap_len;
                if (var6 >= var11) {
                    _fun94855_ip = 351;
                    continue _fun94855
                }
            case 622:
                var8 = var1.heap;
                var6 = var1.heap_max;
                var7 = var6 - 1;
                var1.heap_max = var7;
                var6 = var1.heap;
                var6 = var6[var10];
                var8[var7] = var6;
                var9 = var5.dyn_tree;
                var8 = var5.max_code;
                var6 = var5.stat_desc;
                var20 = var6.static_tree;
                var6 = var5.stat_desc;
                var19 = var6.has_stree;
                var6 = var5.stat_desc;
                var18 = var6.extra_bits;
                var6 = var5.stat_desc;
                var17 = var6.extra_base;
                var5 = var5.stat_desc;
                var7 = var5.max_length;
                var6 = 15;
                var5 = 0;
            case 734:
                var13 = var1.bl_count;
                var13[var5] = var12;
                var5 = var5 + 1;
                if (var5 <= var6) {
                    _fun94855_ip = 734;
                    continue _fun94855
                }
            case 751:
                var6 = var1.heap;
                var5 = var1.heap_max;
                var5 = var6[var5];
                var5 = var11 * var5;
                var5 = var5 + var10;
                var9[var5] = var12;
                var5 = var1.heap_max;
                var16 = var5 + var10;
                var15 = undefined;
                var14 = undefined;
                var13 = 0;
                var5 = 0;
                var6 = var16;
                if (!(var6 < var21)) {
                    _fun94855_ip = 1010;
                    continue _fun94855
                }
            case 807:
                var22 = var1.heap;
                var25 = var22[var16];
                var22 = var11 * var25;
                var22 = var22 + var10;
                var22 = var9[var22];
                var22 = var11 * var22;
                var22 = var22 + var10;
                var22 = var9[var22];
                var26 = var22 + var10;
                var23 = var13;
                if (!(var26 > var7)) {
                    _fun94855_ip = 858;
                    continue _fun94855
                }
            case 852:
                var23 = var13 + 1;
                var26 = var7;
            case 858:
                var22 = var11 * var25;
                var22 = var22 + var10;
                var9[var22] = var26;
                if (!(!(var25 > var8))) {
                    _fun94855_ip = 991;
                    continue _fun94855
                }
            case 874:
                var24 = var1.bl_count;
                var22 = var24[var26];
                var22 = var22 + 1;
                var24[var26] = var22;
                var22 = var25 >= var17;
                var24 = 0;
                if (!var22) {
                    _fun94855_ip = 908;
                    continue _fun94855
                }
            case 900:
                var22 = var25 - var17;
                var24 = var18[var22];
            case 908:
                var22 = var11 * var25;
                var22 = var9[var22];
                var27 = var1.opt_len;
                var26 = var26 + var24;
                var26 = var22 * var26;
                var26 = var27 + var26;
                var1.opt_len = var26;
                var15 = var24;
                var14 = var22;
                if (!var19) {
                    _fun94855_ip = 991;
                    continue _fun94855
                }
            case 949:
                var26 = var1.static_len;
                var25 = var11 * var25;
                var25 = var25 + var10;
                var25 = var20[var25];
                var25 = var25 + var24;
                var25 = var22 * var25;
                var25 = var26 + var25;
                var1.static_len = var25;
                var15 = var24;
                var14 = var22;
            case 991:
                var16 = var16 + 1;
                var13 = var23;
                var5 = var13;
                var6 = var16;
                if (var6 < var21) {
                    _fun94855_ip = 807;
                    continue _fun94855
                }
            case 1010:
                if (!(var12 !== var5)) {
                    _fun94855_ip = 1278;
                    continue _fun94855
                }
            case 1017:
                var13 = var7 - var10;
                var14 = var1.bl_count;
                var14 = var14[var13];
                var15 = var13;
                var13 = var15;
                if (!(var12 === var14)) {
                    _fun94855_ip = 1064;
                    continue _fun94855
                }
            case 1041:
                var16 = var15 - 1;
                var14 = var1.bl_count;
                var14 = var14[var16];
                var15 = var16;
                var13 = var15;
                if (var12 === var14) {
                    _fun94855_ip = 1041;
                    continue _fun94855
                }
            case 1064:
                var15 = var1.bl_count;
                var14 = var15[var13];
                var14 = var14 - 1;
                var15[var13] = var14;
                var15 = var1.bl_count;
                var14 = var13 + var10;
                var13 = var15[var14];
                var13 = var13 + var11;
                var15[var14] = var13;
                var14 = var1.bl_count;
                var13 = var14[var7];
                var13 = var13 - 1;
                var14[var7] = var13;
                var5 = var5 - var11;
                if (var5 > var12) {
                    _fun94855_ip = 1017;
                    continue _fun94855
                }
            case 1128:
                var5 = undefined;
                if (!(var12 !== var7)) {
                    _fun94855_ip = 1278;
                    continue _fun94855
                }
            case 1137:
                var13 = var1.bl_count;
                var14 = var13[var7];
                var13 = var6;
                var6 = var13;
                if (!(var12 !== var14)) {
                    _fun94855_ip = 1268;
                    continue _fun94855
                }
            case 1157:
                var15 = var1.heap;
                var17 = var13 - 1;
                var16 = var15[var17];
                var15 = var14;
                if (!(!(var16 > var8))) {
                    _fun94855_ip = 1252;
                    continue _fun94855
                }
            case 1177:
                var18 = var11 * var16;
                var18 = var18 + var10;
                var18 = var9[var18];
                if (!(var18 !== var7)) {
                    _fun94855_ip = 1249;
                    continue _fun94855
                }
            case 1193:
                var19 = var1.opt_len;
                var18 = var11 * var16;
                var18 = var18 + var10;
                var18 = var9[var18];
                var20 = var7 - var18;
                var18 = var11 * var16;
                var18 = var9[var18];
                var18 = var20 * var18;
                var18 = var19 + var18;
                var1.opt_len = var18;
                var18 = var11 * var16;
                var18 = var18 + var10;
                var9[var18] = var7;
            case 1249:
                var15 = var14 - 1;
            case 1252:
                var14 = var15;
                var13 = var17;
                var6 = var13;
                var5 = var16;
                if (var12 !== var14) {
                    _fun94855_ip = 1157;
                    continue _fun94855
                }
            case 1268:
                var7 = var7 - 1;
                if (var12 !== var7) {
                    _fun94855_ip = 1137;
                    continue _fun94855
                }
            case 1278:
                var2 = _closure1_slot23;
                var1 = var1.bl_count;
                var1 = var2.bind(var0)(var4, var3, var1);
                return var0;
        }
    };
    var _closure1_slot29 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun94856: for (var _fun94856_ip = 0;;) switch (_fun94856_ip) {
            case 0:
                var20 = arg0;
                var19 = arg1;
                var18 = arg2;
                var17 = 1;
                var16 = var19[var17];
                var15 = 7;
                var14 = 4;
                var13 = 0;
                var12 = var15;
                var11 = var14;
                if (!(var13 === var16)) {
                    _fun94856_ip = 40;
                    continue _fun94856
                }
            case 34:
                var12 = 138;
                var11 = 3;
            case 40:
                var0 = var18 + var17;
                var1 = 65535;
                var10 = 2;
                var0 = var10 * var0;
                var0 = var0 + var17;
                var19[var0] = var1;
                var21 = var13 <= var18;
                var9 = -1;
                var8 = 6;
                var7 = 3;
                var6 = 138;
                var5 = 32;
                var4 = 34;
                var3 = 36;
                var2 = 10;
                var1 = 0;
                var0 = 0;
                if (!var21) {
                    _fun94856_ip = 329;
                    continue _fun94856
                }
            case 106:
                var21 = var1 + var17;
                var21 = var10 * var21;
                var21 = var21 + var17;
                var22 = var19[var21];
                var27 = var0 + 1;
                var24 = var27 < var12;
                if (!var24) {
                    _fun94856_ip = 136;
                    continue _fun94856
                }
            case 132:
                var24 = var16 === var22;
            case 136:
                var23 = var9;
                var0 = var27;
                var21 = var11;
                if (var24) {
                    _fun94856_ip = 310;
                    continue _fun94856
                }
            case 151:
                if (!(!(var27 < var11))) {
                    _fun94856_ip = 245;
                    continue _fun94856
                }
            case 155:
                if (!(var13 === var16)) {
                    _fun94856_ip = 201;
                    continue _fun94856
                }
            case 159:
                if (!(!(var27 <= var2))) {
                    _fun94856_ip = 182;
                    continue _fun94856
                }
            case 163:
                var25 = var20.bl_tree;
                var24 = var25[var3];
                var24 = var24 + 1;
                var25[var3] = var24;
                _fun94856_ip = 267;
                continue _fun94856;
            case 182:
                var25 = var20.bl_tree;
                var24 = var25[var4];
                var24 = var24 + 1;
                var25[var4] = var24;
                _fun94856_ip = 267;
                continue _fun94856;
            case 201:
                if (!(var16 !== var9)) {
                    _fun94856_ip = 226;
                    continue _fun94856
                }
            case 205:
                var26 = var20.bl_tree;
                var25 = var10 * var16;
                var24 = var26[var25];
                var24 = var24 + 1;
                var26[var25] = var24;
            case 226:
                var25 = var20.bl_tree;
                var24 = var25[var5];
                var24 = var24 + 1;
                var25[var5] = var24;
                _fun94856_ip = 267;
                continue _fun94856;
            case 245:
                var26 = var20.bl_tree;
                var25 = var10 * var16;
                var24 = var26[var25];
                var24 = var24 + var27;
                var26[var25] = var24;
            case 267:
                var25 = var6;
                var24 = var7;
                if (!(var13 !== var22)) {
                    _fun94856_ip = 299;
                    continue _fun94856
                }
            case 277:
                var27 = var15;
                var26 = var14;
                if (!(var16 === var22)) {
                    _fun94856_ip = 293;
                    continue _fun94856
                }
            case 287:
                var27 = var8;
                var26 = var7;
            case 293:
                var25 = var27;
                var24 = var26;
            case 299:
                var12 = var25;
                var21 = var24;
                var23 = var16;
                var0 = 0;
            case 310:
                var1 = var1 + 1;
                var9 = var23;
                var11 = var21;
                var16 = var22;
                if (var1 <= var18) {
                    _fun94856_ip = 106;
                    continue _fun94856
                }
            case 329:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun94857: for (var _fun94857_ip = 0;;) switch (_fun94857_ip) {
            case 0:
                var23 = arg0;
                var22 = arg1;
                var21 = arg2;
                var20 = 1;
                var19 = var22[var20];
                var18 = 7;
                var17 = 4;
                var16 = 0;
                var15 = var18;
                var14 = var17;
                if (!(var16 === var19)) {
                    _fun94857_ip = 40;
                    continue _fun94857
                }
            case 34:
                var15 = 138;
                var14 = 3;
            case 40:
                var24 = var16 <= var21;
                var13 = -1;
                var12 = 6;
                var11 = 3;
                var10 = 138;
                var0 = undefined;
                var8 = 16;
                var7 = 2;
                var6 = 17;
                var5 = 18;
                var4 = 11;
                var3 = 10;
                var2 = 0;
                var1 = 0;
                if (!var24) {
                    _fun94857_ip = 362;
                    continue _fun94857
                }
            case 92:
                var24 = var2 + var20;
                var24 = var7 * var24;
                var24 = var24 + var20;
                var25 = var22[var24];
                var29 = var1 + 1;
                if (!(var29 < var15)) {
                    _fun94857_ip = 131;
                    continue _fun94857
                }
            case 115:
                var26 = var13;
                var1 = var29;
                var24 = var14;
                if (!(var19 !== var25)) {
                    _fun94857_ip = 343;
                    continue _fun94857
                }
            case 131:
                var27 = var29;
                if (!(!(var29 < var14))) {
                    _fun94857_ip = 278;
                    continue _fun94857
                }
            case 141:
                if (!(var16 === var19)) {
                    _fun94857_ip = 217;
                    continue _fun94857
                }
            case 145:
                if (!(!(var29 <= var3))) {
                    _fun94857_ip = 183;
                    continue _fun94857
                }
            case 149:
                var30 = _closure1_slot21;
                var28 = var23.bl_tree;
                var28 = var30.bind(var0)(var23, var5, var28);
                var30 = _closure1_slot20;
                var28 = var29 - var4;
                var28 = var30.bind(var0)(var23, var28, var18);
                _fun94857_ip = 302;
                continue _fun94857;
            case 183:
                var30 = _closure1_slot21;
                var28 = var23.bl_tree;
                var28 = var30.bind(var0)(var23, var6, var28);
                var30 = _closure1_slot20;
                var28 = var29 - var11;
                var28 = var30.bind(var0)(var23, var28, var11);
                _fun94857_ip = 302;
                continue _fun94857;
            case 217:
                var28 = var29;
                if (!(var19 !== var13)) {
                    _fun94857_ip = 244;
                    continue _fun94857
                }
            case 224:
                var31 = _closure1_slot21;
                var30 = var23.bl_tree;
                var30 = var31.bind(var0)(var23, var19, var30);
                var28 = var29 - 1;
            case 244:
                var30 = _closure1_slot21;
                var29 = var23.bl_tree;
                var29 = var30.bind(var0)(var23, var8, var29);
                var29 = _closure1_slot20;
                var28 = var28 - var11;
                var28 = var29.bind(var0)(var23, var28, var7);
                _fun94857_ip = 302;
                continue _fun94857;
            case 278:
                var29 = _closure1_slot21;
                var28 = var23.bl_tree;
                var28 = var29.bind(var0)(var23, var19, var28);
                var27 = var27 - 1;
                if (var16 != var27) {
                    _fun94857_ip = 278;
                    continue _fun94857
                }
            case 302:
                var26 = var19;
                var1 = 0;
                var15 = var10;
                var24 = var11;
                if (!(var16 !== var25)) {
                    _fun94857_ip = 343;
                    continue _fun94857
                }
            case 317:
                var1 = 0;
                var15 = var18;
                var24 = var17;
                var26 = var19;
                if (!(var26 === var25)) {
                    _fun94857_ip = 343;
                    continue _fun94857
                }
            case 332:
                var26 = var19;
                var1 = 0;
                var15 = var12;
                var24 = var11;
            case 343:
                var2 = var2 + 1;
                var13 = var26;
                var14 = var24;
                var19 = var25;
                if (var2 <= var21) {
                    _fun94857_ip = 92;
                    continue _fun94857
                }
            case 362:
                return var0;
        }
    };
    var _closure1_slot31 = var0;
    var3 = function arg0, arg1, arg2, arg3() {
        _fun94858: for (var _fun94858_ip = 0;;) switch (_fun94858_ip) {
            case 0:
                var2 = arg0;
                var3 = arg2;
                var7 = _closure1_slot20;
                var5 = 0;
                var0 = arg3;
                var4 = 0;
                if (!var0) {
                    _fun94858_ip = 26;
                    continue _fun94858
                }
            case 23:
                var4 = 1;
            case 26:
                var0 = undefined;
                var6 = var5 + var4;
                var4 = 3;
                var4 = var7.bind(var0)(var2, var6, var4);
                var4 = _closure1_slot25;
                var4 = var4.bind(var0)(var2);
                var6 = _closure1_slot19;
                var4 = var6.bind(var0)(var2, var3);
                var4 = ~var3;
                var4 = var6.bind(var0)(var2, var4);
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var8 = var4.bind(var0)(var1);
                var7 = var8.arraySet;
                var13 = var2.pending_buf;
                var12 = var2.window;
                var9 = var2.pending;
                var11 = arg1;
                var14 = var8;
                var10 = var3;
                var1 = var14[var7](var13, var12, var11, var10, var9, var8);
                var1 = var2.pending;
                var1 = var1 + var3;
                var2.pending = var1;
                return var0;
        }
    };
    var _closure1_slot32 = var3;
    var0 = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0];
    var _closure1_slot2 = var0;
    var0 = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
    var _closure1_slot3 = var0;
    var0 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7];
    var _closure1_slot4 = var0;
    var0 = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
    var _closure1_slot5 = var0;
    var4 = global;
    var7 = var4.Array;
    var0 = var7.prototype;
    var6 = Object.create(var0, {
        constructor: {
            value: var7
        }
    });
    var9 = 576;
    var10 = var6;
    var0 = new var10[var7](var9, var8);
    var6 = var0 instanceof Object ? var0 : var6;
    var _closure1_slot6 = var6;
    var0 = undefined;
    var6 = var5.bind(var0)(var6);
    var8 = var4.Array;
    var6 = var8.prototype;
    var7 = Object.create(var6, {
        constructor: {
            value: var8
        }
    });
    var9 = 60;
    var10 = var7;
    var6 = new var10[var8](var9, var8);
    var6 = var6 instanceof Object ? var6 : var7;
    var _closure1_slot7 = var6;
    var6 = var5.bind(var0)(var6);
    var8 = var4.Array;
    var6 = var8.prototype;
    var7 = Object.create(var6, {
        constructor: {
            value: var8
        }
    });
    var9 = 512;
    var10 = var7;
    var6 = new var10[var8](var9, var8);
    var6 = var6 instanceof Object ? var6 : var7;
    var _closure1_slot8 = var6;
    var6 = var5.bind(var0)(var6);
    var8 = var4.Array;
    var6 = var8.prototype;
    var7 = Object.create(var6, {
        constructor: {
            value: var8
        }
    });
    var9 = 256;
    var10 = var7;
    var6 = new var10[var8](var9, var8);
    var6 = var6 instanceof Object ? var6 : var7;
    var _closure1_slot9 = var6;
    var6 = var5.bind(var0)(var6);
    var8 = var4.Array;
    var6 = var8.prototype;
    var7 = Object.create(var6, {
        constructor: {
            value: var8
        }
    });
    var9 = 29;
    var10 = var7;
    var6 = new var10[var8](var9, var8);
    var6 = var6 instanceof Object ? var6 : var7;
    var _closure1_slot10 = var6;
    var6 = var5.bind(var0)(var6);
    var7 = var4.Array;
    var4 = var7.prototype;
    var6 = Object.create(var4, {
        constructor: {
            value: var7
        }
    });
    var9 = 30;
    var10 = var6;
    var4 = new var10[var7](var9, var8);
    var4 = var4 instanceof Object ? var4 : var6;
    var _closure1_slot14 = var4;
    var4 = var5.bind(var0)(var4);
    var4 = false;
    var _closure1_slot15 = var4;
    var4 = function arg0() {
        _fun94859: for (var _fun94859_ip = 0;;) switch (_fun94859_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot15;
                if (var1) {
                    _fun94859_ip = 786;
                    continue _fun94859
                }
            case 16:
                var1 = global;
                var3 = var1.Array;
                var4 = var3.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var3
                    }
                });
                var6 = 16;
                var26 = var4;
                var25 = var6;
                var3 = new var26[var3](var25, var24);
                var13 = var3 instanceof Object ? var3 : var4;
                var8 = 0;
                var9 = 28;
                var11 = 1;
                var7 = 0;
                var4 = 0;
            case 62:
                var3 = _closure1_slot10;
                var3[var4] = var7;
                var3 = _closure1_slot2;
                var3 = var3[var4];
                var5 = var11 << var3;
                var10 = var7;
                var12 = 0;
                var3 = var10;
                if (!(var8 < var5)) {
                    _fun94859_ip = 130;
                    continue _fun94859
                }
            case 94:
                var15 = _closure1_slot9;
                var5 = parseFloat(var10);
                var10 = var5 + 1;
                var15[var5] = var4;
                var12 = var12 + 1;
                var5 = _closure1_slot2;
                var5 = var5[var4];
                var5 = var11 << var5;
                var3 = var10;
                if (var12 < var5) {
                    _fun94859_ip = 94;
                    continue _fun94859
                }
            case 130:
                var5 = var4 + 1;
                var7 = var3;
                var4 = var5;
                if (var4 < var9) {
                    _fun94859_ip = 62;
                    continue _fun94859
                }
            case 143:
                var4 = _closure1_slot9;
                var3 = var3 - var11;
                var4[var3] = var5;
                var5 = 0;
                var4 = 0;
            case 159:
                var3 = _closure1_slot14;
                var3[var5] = var4;
                var3 = _closure1_slot3;
                var3 = var3[var5];
                var7 = var11 << var3;
                var9 = var4;
                var10 = 0;
                var3 = var9;
                if (!(var8 < var7)) {
                    _fun94859_ip = 227;
                    continue _fun94859
                }
            case 191:
                var14 = _closure1_slot8;
                var7 = parseFloat(var9);
                var9 = var7 + 1;
                var14[var7] = var5;
                var10 = var10 + 1;
                var7 = _closure1_slot3;
                var7 = var7[var5];
                var7 = var11 << var7;
                var3 = var9;
                if (var10 < var7) {
                    _fun94859_ip = 191;
                    continue _fun94859
                }
            case 227:
                var15 = var5 + 1;
                var5 = var15;
                var4 = var3;
                if (var15 < var6) {
                    _fun94859_ip = 159;
                    continue _fun94859
                }
            case 240:
                var7 = 7;
                var14 = var3 >> var7;
                var6 = 2;
                var4 = 8;
                var12 = 143;
                var10 = 15;
                var9 = 30;
                var5 = 256;
                var3 = 0;
                if (!(var15 < var9)) {
                    _fun94859_ip = 367;
                    continue _fun94859
                }
            case 274:
                var17 = _closure1_slot14;
                var16 = var14 << var7;
                var17[var15] = var16;
                var16 = _closure1_slot3;
                var16 = var16[var15];
                var16 = var16 - var7;
                var16 = var11 << var16;
                var17 = var14;
                var18 = 0;
                var14 = var17;
                if (!(var8 < var16)) {
                    _fun94859_ip = 358;
                    continue _fun94859
                }
            case 314:
                var20 = _closure1_slot8;
                var16 = parseFloat(var17);
                var17 = var16 + 1;
                var16 = var5 + var16;
                var20[var16] = var15;
                var18 = var18 + 1;
                var16 = _closure1_slot3;
                var16 = var16[var15];
                var16 = var16 - var7;
                var16 = var11 << var16;
                var14 = var17;
                if (var18 < var16) {
                    _fun94859_ip = 314;
                    continue _fun94859
                }
            case 358:
                var15 = var15 + 1;
                var3 = 0;
                if (var15 < var9) {
                    _fun94859_ip = 274;
                    continue _fun94859
                }
            case 367:
                var13[var3] = var8;
                var3 = var3 + 1;
                var5 = 0;
                if (var3 <= var10) {
                    _fun94859_ip = 367;
                    continue _fun94859
                }
            case 380:
                var14 = _closure1_slot6;
                var3 = var6 * var5;
                var3 = var3 + var11;
                var14[var3] = var4;
                var3 = var5 + 1;
                var14 = var13[var4];
                var14 = var14 + 1;
                var13[var4] = var14;
                var5 = var3;
                if (var3 <= var12) {
                    _fun94859_ip = 380;
                    continue _fun94859
                }
            case 417:
                var14 = 9;
                var12 = 255;
                var5 = var3;
                var3 = var5;
                if (!(var3 <= var12)) {
                    _fun94859_ip = 470;
                    continue _fun94859
                }
            case 433:
                var16 = _closure1_slot6;
                var15 = var6 * var5;
                var15 = var15 + var11;
                var16[var15] = var14;
                var5 = var5 + 1;
                var16 = var13[var14];
                var16 = var16 + 1;
                var13[var14] = var16;
                var3 = var5;
                if (var3 <= var12) {
                    _fun94859_ip = 433;
                    continue _fun94859
                }
            case 470:
                var12 = 279;
                var5 = var3;
                var3 = var5;
                if (!(var3 <= var12)) {
                    _fun94859_ip = 523;
                    continue _fun94859
                }
            case 486:
                var15 = _closure1_slot6;
                var14 = var6 * var5;
                var14 = var14 + var11;
                var15[var14] = var7;
                var5 = var5 + 1;
                var15 = var13[var7];
                var15 = var15 + 1;
                var13[var7] = var15;
                var3 = var5;
                if (var3 <= var12) {
                    _fun94859_ip = 486;
                    continue _fun94859
                }
            case 523:
                var12 = 287;
                if (!(var3 <= var12)) {
                    _fun94859_ip = 567;
                    continue _fun94859
                }
            case 533:
                var14 = _closure1_slot6;
                var5 = var6 * var3;
                var5 = var5 + var11;
                var14[var5] = var4;
                var3 = var3 + 1;
                var5 = var13[var4];
                var5 = var5 + 1;
                var13[var4] = var5;
                if (var3 <= var12) {
                    _fun94859_ip = 533;
                    continue _fun94859
                }
            case 567:
                var4 = _closure1_slot23;
                var3 = _closure1_slot6;
                var5 = undefined;
                var3 = var4.bind(var5)(var3, var12, var13);
                var4 = 5;
                var3 = 0;
            case 589:
                var14 = _closure1_slot7;
                var12 = var6 * var3;
                var12 = var12 + var11;
                var14[var12] = var4;
                var13 = var6 * var3;
                var12 = _closure1_slot22;
                var12 = var12.bind(var5)(var3, var4);
                var14[var13] = var12;
                var3 = var3 + 1;
                if (var3 < var9) {
                    _fun94859_ip = 589;
                    continue _fun94859
                }
            case 630:
                var6 = _closure1_slot16;
                var25 = _closure1_slot6;
                var24 = _closure1_slot2;
                var3 = var6.prototype;
                var4 = Object.create(var3, {
                    constructor: {
                        value: var6
                    }
                });
                var23 = 257;
                var22 = 286;
                var26 = var4;
                var21 = var10;
                var3 = new var26[var6](var25, var24, var23, var22, var21, var20);
                var3 = var3 instanceof Object ? var3 : var4;
                var _closure1_slot11 = var3;
                var25 = _closure1_slot7;
                var24 = _closure1_slot3;
                var4 = var6.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var26 = var4;
                var23 = 0;
                var22 = var9;
                var3 = new var26[var6](var25, var24, var23, var22, var21, var20);
                var3 = var3 instanceof Object ? var3 : var4;
                var _closure1_slot12 = var3;
                var1 = var1.Array;
                var3 = var1.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var1
                    }
                });
                var26 = var3;
                var25 = 0;
                var1 = new var26[var1](var25, var24);
                var25 = var1 instanceof Object ? var1 : var3;
                var24 = _closure1_slot4;
                var1 = var6.prototype;
                var3 = Object.create(var1, {
                    constructor: {
                        value: var6
                    }
                });
                var22 = 19;
                var26 = var3;
                var21 = var7;
                var1 = new var26[var6](var25, var24, var23, var22, var21, var20);
                var1 = var1 instanceof Object ? var1 : var3;
                var _closure1_slot13 = var1;
                var1 = true;
                _closure1_slot15 = var1;
            case 786:
                var5 = _closure1_slot17;
                var25 = var2.dyn_ltree;
                var24 = _closure1_slot11;
                var3 = var5.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var5
                    }
                });
                var26 = var3;
                var1 = new var26[var5](var25, var24, var23);
                var1 = var1 instanceof Object ? var1 : var3;
                var2.l_desc = var1;
                var25 = var2.dyn_dtree;
                var24 = _closure1_slot12;
                var3 = var5.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var5
                    }
                });
                var26 = var3;
                var1 = new var26[var5](var25, var24, var23);
                var1 = var1 instanceof Object ? var1 : var3;
                var2.d_desc = var1;
                var25 = var2.bl_tree;
                var24 = _closure1_slot13;
                var3 = var5.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var5
                    }
                });
                var26 = var3;
                var1 = new var26[var5](var25, var24, var23);
                var1 = var1 instanceof Object ? var1 : var3;
                var2.bl_desc = var1;
                var1 = 0;
                var2.bi_buf = var1;
                var2.bi_valid = var1;
                var1 = _closure1_slot24;
                var0 = undefined;
                var1 = var1.bind(var0)(var2);
                return var0;
        }
    };
    var2._tr_init = var4;
    var2._tr_stored_block = var3;
    var3 = function arg0, arg1, arg2, arg3() {
        _fun94860: for (var _fun94860_ip = 0;;) switch (_fun94860_ip) {
            case 0:
                var2 = arg0;
                var5 = arg1;
                var4 = arg2;
                var3 = arg3;
                var0 = var2.level;
                var6 = 0;
                if (!(!(var0 > var6))) {
                    _fun94860_ip = 41;
                    continue _fun94860
                }
            case 24:
                var0 = 5;
                var1 = var4 + var0;
                var0 = var1;
                var7 = 0;
                _fun94860_ip = 520;
                continue _fun94860;
            case 41:
                var8 = var2.strm;
                var8 = var8.data_type;
                var14 = 2;
                if (!(var14 === var8)) {
                    _fun94860_ip = 230;
                    continue _fun94860
                }
            case 63:
                var9 = var2.strm;
                var13 = 4093624447.0;
                var12 = 1;
                var11 = 31;
                var10 = 0;
            case 87:
                var8 = var12 & var13;
                if (!var8) {
                    _fun94860_ip = 114;
                    continue _fun94860
                }
            case 94:
                var15 = var2.dyn_ltree;
                var8 = var14 * var10;
                var15 = var15[var8];
                var8 = 0;
                if (!(var6 === var15)) {
                    _fun94860_ip = 224;
                    continue _fun94860
                }
            case 114:
                var10 = var10 + 1;
                var13 = var13 >>> var12;
                if (var10 <= var11) {
                    _fun94860_ip = 87;
                    continue _fun94860
                }
            case 125:
                var11 = var2.dyn_ltree;
                var10 = 18;
                var10 = var11[var10];
                var8 = var12;
                if (!(var6 === var10)) {
                    _fun94860_ip = 224;
                    continue _fun94860
                }
            case 145:
                var11 = var2.dyn_ltree;
                var10 = 20;
                var10 = var11[var10];
                var8 = var12;
                if (!(var6 === var10)) {
                    _fun94860_ip = 224;
                    continue _fun94860
                }
            case 165:
                var11 = var2.dyn_ltree;
                var10 = 26;
                var13 = var11[var10];
                var11 = 32;
                var10 = 256;
                var8 = var12;
                if (!(var6 === var13)) {
                    _fun94860_ip = 224;
                    continue _fun94860
                }
            case 194:
                var15 = var2.dyn_ltree;
                var13 = var14 * var11;
                var13 = var15[var13];
                var8 = var12;
                if (!(var6 === var13)) {
                    _fun94860_ip = 224;
                    continue _fun94860
                }
            case 215:
                var11 = var11 + 1;
                var8 = 0;
                if (var11 < var10) {
                    _fun94860_ip = 194;
                    continue _fun94860
                }
            case 224:
                var9.data_type = var8;
            case 230:
                var10 = _closure1_slot29;
                var8 = var2.l_desc;
                var9 = undefined;
                var8 = var10.bind(var9)(var2, var8);
                var8 = var2.d_desc;
                var8 = var10.bind(var9)(var2, var8);
                var12 = _closure1_slot30;
                var11 = var2.dyn_ltree;
                var8 = var2.l_desc;
                var8 = var8.max_code;
                var8 = var12.bind(var9)(var2, var11, var8);
                var11 = var2.dyn_dtree;
                var8 = var2.d_desc;
                var8 = var8.max_code;
                var8 = var12.bind(var9)(var2, var11, var8);
                var8 = var2.bl_desc;
                var8 = var10.bind(var9)(var2, var8);
                var11 = var2.bl_tree;
                var9 = _closure1_slot5;
                var8 = 18;
                var9 = var9[var8];
                var10 = var14 * var9;
                var9 = 1;
                var10 = var10 + var9;
                var10 = var11[var10];
                var11 = 3;
                var12 = var8;
                var8 = var12;
                if (!(var6 === var10)) {
                    _fun94860_ip = 420;
                    continue _fun94860
                }
            case 374:
                var15 = var12 - 1;
                var8 = var15;
                if (!(var15 >= var11)) {
                    _fun94860_ip = 420;
                    continue _fun94860
                }
            case 384:
                var16 = var2.bl_tree;
                var10 = _closure1_slot5;
                var10 = var10[var15];
                var10 = var14 * var10;
                var10 = var10 + var9;
                var10 = var16[var10];
                var12 = var15;
                var8 = var12;
                if (var6 === var10) {
                    _fun94860_ip = 374;
                    continue _fun94860
                }
            case 420:
                var10 = var2.opt_len;
                var9 = var8 + var9;
                var9 = var11 * var9;
                var12 = 5;
                var9 = var9 + var12;
                var12 = var9 + var12;
                var9 = 4;
                var9 = var12 + var9;
                var9 = var10 + var9;
                var2.opt_len = var9;
                var9 = var2.opt_len;
                var9 = var9 + var11;
                var12 = 7;
                var9 = var9 + var12;
                var1 = var9 >>> var11;
                var9 = var2.static_len;
                var9 = var9 + var11;
                var9 = var9 + var12;
                var9 = var9 >>> var11;
                var0 = var9;
                var7 = var8;
                if (!(var9 <= var1)) {
                    _fun94860_ip = 520;
                    continue _fun94860
                }
            case 511:
                var1 = var9;
                var0 = var1;
                var7 = var8;
            case 520:
                var14 = 4;
                var8 = var4 + var14;
                if (!(var8 <= var1)) {
                    _fun94860_ip = 544;
                    continue _fun94860
                }
            case 531:
                var8 = -1;
                if (!(var8 === var5)) {
                    _fun94860_ip = 847;
                    continue _fun94860
                }
            case 544:
                var8 = var2.strategy;
                if (!(var14 !== var8)) {
                    _fun94860_ip = 792;
                    continue _fun94860
                }
            case 557:
                if (!(var0 !== var1)) {
                    _fun94860_ip = 792;
                    continue _fun94860
                }
            case 564:
                var9 = _closure1_slot20;
                var1 = 0;
                if (!var3) {
                    _fun94860_ip = 579;
                    continue _fun94860
                }
            case 576:
                var1 = 1;
            case 579:
                var8 = undefined;
                var1 = var14 + var1;
                var13 = 3;
                var1 = var9.bind(var8)(var2, var1, var13);
                var1 = var2.l_desc;
                var1 = var1.max_code;
                var11 = 1;
                var1 = var1 + var11;
                var9 = var2.d_desc;
                var9 = var9.max_code;
                var9 = var9 + var11;
                var12 = var7 + var11;
                var10 = _closure1_slot20;
                var7 = 257;
                var15 = var1 - var7;
                var7 = 5;
                var15 = var10.bind(var8)(var2, var15, var7);
                var9 = var9 - var11;
                var7 = var10.bind(var8)(var2, var9, var7);
                var7 = var12 - var14;
                var7 = var10.bind(var8)(var2, var7, var14);
                var10 = 2;
                var7 = 0;
                if (!(var6 < var12)) {
                    _fun94860_ip = 733;
                    continue _fun94860
                }
            case 689:
                var15 = _closure1_slot20;
                var16 = var2.bl_tree;
                var14 = _closure1_slot5;
                var14 = var14[var7];
                var14 = var10 * var14;
                var14 = var14 + var11;
                var14 = var16[var14];
                var14 = var15.bind(var8)(var2, var14, var13);
                var7 = var7 + 1;
                if (var7 < var12) {
                    _fun94860_ip = 689;
                    continue _fun94860
                }
            case 733:
                var7 = _closure1_slot31;
                var10 = var2.dyn_ltree;
                var1 = var1 - var11;
                var1 = var7.bind(var8)(var2, var10, var1);
                var1 = var2.dyn_dtree;
                var1 = var7.bind(var8)(var2, var1, var9);
                var7 = _closure1_slot28;
                var1 = var2.dyn_ltree;
                var0 = var2.dyn_dtree;
                var0 = var7.bind(var8)(var2, var1, var0);
                _fun94860_ip = 872;
                continue _fun94860;
            case 792:
                var8 = _closure1_slot20;
                var6 = 0;
                if (!var3) {
                    _fun94860_ip = 807;
                    continue _fun94860
                }
            case 804:
                var6 = 1;
            case 807:
                var7 = undefined;
                var1 = 2;
                var6 = var1 + var6;
                var1 = 3;
                var1 = var8.bind(var7)(var2, var6, var1);
                var6 = _closure1_slot28;
                var1 = _closure1_slot6;
                var0 = _closure1_slot7;
                var0 = var6.bind(var7)(var2, var1, var0);
                _fun94860_ip = 872;
                continue _fun94860;
            case 847:
                var1 = _closure1_slot32;
                var21 = undefined;
                var20 = var2;
                var19 = var5;
                var18 = var4;
                var17 = var3;
                var0 = var21[var1](var20, var19, var18, var17, var16);
            case 872:
                var4 = _closure1_slot24;
                var0 = undefined;
                var4 = var4.bind(var0)(var2);
                if (!var3) {
                    _fun94860_ip = 898;
                    continue _fun94860
                }
            case 889:
                var1 = _closure1_slot25;
                var1 = var1.bind(var0)(var2);
            case 898:
                return var0;
        }
    };
    var2._tr_flush_block = var3;
    var3 = function arg0, arg1, arg2() {
        _fun94861: for (var _fun94861_ip = 0;;) switch (_fun94861_ip) {
            case 0:
                var0 = arg0;
                var4 = arg1;
                var3 = arg2;
                var7 = var0.pending_buf;
                var5 = var0.d_buf;
                var2 = var0.last_lit;
                var1 = 2;
                var2 = var1 * var2;
                var6 = var5 + var2;
                var2 = 8;
                var2 = var4 >>> var2;
                var5 = 255;
                var2 = var2 & var5;
                var7[var6] = var2;
                var8 = var0.pending_buf;
                var6 = var0.d_buf;
                var2 = var0.last_lit;
                var2 = var1 * var2;
                var6 = var6 + var2;
                var7 = var5 & var4;
                var2 = 1;
                var6 = var6 + var2;
                var8[var6] = var7;
                var7 = var0.pending_buf;
                var8 = var0.l_buf;
                var6 = var0.last_lit;
                var6 = var8 + var6;
                var5 = var5 & var3;
                var7[var6] = var5;
                var5 = var0.last_lit;
                var5 = var5 + 1;
                var0.last_lit = var5;
                var5 = 0;
                if (!(var5 !== var4)) {
                    _fun94861_ip = 246;
                    continue _fun94861
                }
            case 148:
                var5 = var0.matches;
                var5 = var5 + 1;
                var0.matches = var5;
                var7 = var4 - 1;
                var8 = var0.dyn_ltree;
                var5 = _closure1_slot9;
                var6 = var5[var3];
                var5 = 256;
                var5 = var6 + var5;
                var5 = var5 + var2;
                var6 = var1 * var5;
                var5 = var8[var6];
                var5 = var5 + 1;
                var8[var6] = var5;
                var6 = var0.dyn_dtree;
                var5 = _closure1_slot18;
                var4 = undefined;
                var4 = var5.bind(var4)(var7);
                var5 = var1 * var4;
                var4 = var6[var5];
                var4 = var4 + 1;
                var6[var5] = var4;
                _fun94861_ip = 267;
                continue _fun94861;
            case 246:
                var4 = var0.dyn_ltree;
                var3 = var1 * var3;
                var1 = var4[var3];
                var1 = var1 + 1;
                var4[var3] = var1;
            case 267:
                var1 = var0.last_lit;
                var0 = var0.lit_bufsize;
                var0 = var0 - var2;
                var0 = var1 === var0;
                return var0;
        }
    };
    var2._tr_tally = var3;
    var1 = function arg0() {
        _fun94862: for (var _fun94862_ip = 0;;) switch (_fun94862_ip) {
            case 0:
                var2 = arg0;
                var5 = _closure1_slot20;
                var0 = undefined;
                var4 = 2;
                var3 = 3;
                var3 = var5.bind(var0)(var2, var4, var3);
                var5 = _closure1_slot21;
                var4 = _closure1_slot6;
                var3 = 256;
                var3 = var5.bind(var0)(var2, var3, var4);
                var4 = var2.bi_valid;
                var3 = 16;
                if (!(var3 !== var4)) {
                    _fun94862_ip = 147;
                    continue _fun94862
                }
            case 59:
                var3 = var2.bi_valid;
                var4 = 8;
                if (!(var3 >= var4)) {
                    _fun94862_ip = 177;
                    continue _fun94862
                }
            case 72:
                var6 = var2.pending_buf;
                var3 = var2.pending;
                var5 = parseFloat(var3);
                var3 = var5 + 1;
                var2.pending = var3;
                var7 = var2.bi_buf;
                var3 = 255;
                var3 = var3 & var7;
                var6[var5] = var3;
                var3 = var2.bi_buf;
                var3 = var3 >> var4;
                var2.bi_buf = var3;
                var3 = var2.bi_valid;
                var3 = var3 - var4;
                var2.bi_valid = var3;
                _fun94862_ip = 177;
                continue _fun94862;
            case 147:
                var3 = _closure1_slot19;
                var1 = var2.bi_buf;
                var1 = var3.bind(var0)(var2, var1);
                var1 = 0;
                var2.bi_buf = var1;
                var2.bi_valid = var1;
            case 177:
                return var0;
        }
    };
    var2._tr_align = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12433]);