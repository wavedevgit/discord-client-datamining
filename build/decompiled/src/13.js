// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function arg0() {
        _fun165: for (var _fun165_ip = 0;;) switch (_fun165_ip) {
            case 0:
                var4 = arg0;
                var2 = this;
                var3 = _closure1_slot2;
                var0 = undefined;
                var3 = var3.bind(var0)(var4);
                var2._capacity = var3;
                var3 = 0;
                var2._length = var3;
                var2._front = var3;
                var5 = var2._makeCapacity;
                var5 = var5.bind(var2)();
                var1 = _closure1_slot0;
                var1 = var1.bind(var0)(var4);
                if (!var1) {
                    _fun165_ip = 97;
                    continue _fun165
                }
            case 62:
                var1 = var4.length;
                var5 = var3 < var1;
                var3 = 0;
                if (!var5) {
                    _fun165_ip = 91;
                    continue _fun165
                }
            case 76:
                var5 = var4[var3];
                var2[var3] = var5;
                var3 = var3 + 1;
                if (var3 < var1) {
                    _fun165_ip = 76;
                    continue _fun165
                }
            case 91:
                var2._length = var1;
            case 97:
                return var0;
        }
    };
    var0 = function arg0, arg1, arg2, arg3, arg4() {
        _fun166: for (var _fun166_ip = 0;;) switch (_fun166_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var3 = arg2;
                var2 = arg3;
                var1 = arg4;
                var0 = 0;
                var6 = var0 < var1;
                if (!var6) {
                    _fun166_ip = 47;
                    continue _fun166
                }
            case 24:
                var7 = var0 + var2;
                var6 = var0 + var4;
                var6 = var5[var6];
                var3[var7] = var6;
                var0 = var0 + 1;
                if (var0 < var1) {
                    _fun166_ip = 24;
                    continue _fun166
                }
            case 47:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot1 = var0;
    var0 = function arg0() {
        _fun167: for (var _fun167_ip = 0;;) switch (_fun167_ip) {
            case 0:
                var0 = arg0;
                var2 = 'number';
                var1 = typeof var0;
                var5 = var0;
                if (!(var2 !== var1)) {
                    _fun167_ip = 44;
                    continue _fun167
                }
            case 17:
                var2 = _closure1_slot0;
                var1 = undefined;
                var1 = var2.bind(var1)(var0);
                if (var1) {
                    _fun167_ip = 39;
                    continue _fun167
                }
            case 34:
                var1 = 16;
                return var1;
            case 39:
                var5 = var0.length;
            case 44:
                var0 = global;
                var4 = var0.Math;
                var3 = var4.min;
                var2 = var0.Math;
                var1 = var2.max;
                var0 = 16;
                var2 = var1.bind(var2)(var0, var5);
                var1 = 1073741824;
                var2 = var3.bind(var4)(var2, var1);
                var1 = 0;
                var2 = var2 >>> var1;
                var1 = 1;
                var3 = var2 - var1;
                var2 = var3 >> var1;
                var3 = var3 | var2;
                var2 = 2;
                var2 = var3 >> var2;
                var3 = var3 | var2;
                var2 = 4;
                var2 = var3 >> var2;
                var3 = var3 | var2;
                var2 = 8;
                var2 = var3 >> var2;
                var2 = var3 | var2;
                var0 = var2 >> var0;
                var0 = var2 | var0;
                var0 = var1 + var0;
                return var0;
        }
    };
    var _closure1_slot2 = var0;
    var3 = var1.prototype;
    var0 = function() {
        _fun168: for (var _fun168_ip = 0;;) switch (_fun168_ip) {
            case 0:
                var6 = this;
                var5 = var6._length;
                var0 = global;
                var0 = var0.Array;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var10 = var1;
                var9 = var5;
                var0 = new var10[var0](var9, var8);
                var0 = var0 instanceof Object ? var0 : var1;
                var4 = var6._front;
                var3 = var6._capacity;
                var2 = 0;
                var7 = var2 < var5;
                var1 = 1;
                if (!var7) {
                    _fun168_ip = 91;
                    continue _fun168
                }
            case 64:
                var8 = var4 + var2;
                var7 = var3 - var1;
                var7 = var8 & var7;
                var7 = var6[var7];
                var0[var2] = var7;
                var2 = var2 + 1;
                if (var2 < var5) {
                    _fun168_ip = 64;
                    continue _fun168
                }
            case 91:
                return var0;
        }
    };
    var3.toArray = var0;
    var3 = var1.prototype;
    var0 = function arg0() {
        _fun169: for (var _fun169_ip = 0;;) switch (_fun169_ip) {
            case 0:
                var6 = this;
                var5 = undefined;
                var4 = arguments.length;
                var0 = var6._length;
                var3 = 1;
                if (!(!(var4 > var3))) {
                    _fun169_ip = 92;
                    continue _fun169
                }
            case 21:
                var2 = 0;
                var1 = var0;
                if (!(var2 !== var4)) {
                    _fun169_ip = 90;
                    continue _fun169
                }
            case 30:
                var7 = var6._checkCapacity;
                var2 = var0 + var3;
                var2 = var7.bind(var6)(var2);
                var2 = var6._front;
                var7 = var2 + var0;
                var2 = var6._capacity;
                var2 = var2 - var3;
                var7 = var7 & var2;
                var2 = arg0;
                var6[var7] = var2;
                var2 = var0 + var3;
                var6._length = var2;
                var1 = var0 + var3;
            case 90:
                return var1;
            case 92:
                var7 = var6._capacity;
                var1 = var0 + var4;
                if (!(!(var1 > var7))) {
                    _fun169_ip = 167;
                    continue _fun169
                }
            case 106:
                var2 = var6._front;
                var1 = 0;
                var8 = var1 < var4;
                if (!var8) {
                    _fun169_ip = 151;
                    continue _fun169
                }
            case 121:
                var9 = var2 + var0;
                var8 = var7 - var3;
                var9 = var9 & var8;
                var8 = arguments[var1];
                var6[var9] = var8;
                var2 = var2 + 1;
                var1 = var1 + 1;
                if (var1 < var4) {
                    _fun169_ip = 121;
                    continue _fun169
                }
            case 151:
                var1 = var0 + var4;
                var6._length = var1;
                var1 = var0 + var4;
                return var1;
            case 167:
                var2 = 0;
                var7 = var2 < var4;
                var1 = var0;
                var0 = var1;
                if (!var7) {
                    _fun169_ip = 251;
                    continue _fun169
                }
            case 182:
                var8 = var6._checkCapacity;
                var7 = var1 + var3;
                var7 = var8.bind(var6)(var7);
                var7 = var6._front;
                var8 = var7 + var1;
                var7 = var6._capacity;
                var7 = var7 - var3;
                var8 = var8 & var7;
                var7 = arguments[var2];
                var6[var8] = var7;
                var7 = var1 + 1;
                var6._length = var7;
                var2 = var2 + 1;
                var1 = var7;
                var0 = var1;
                if (var2 < var4) {
                    _fun169_ip = 182;
                    continue _fun169
                }
            case 251:
                return var0;
        }
    };
    var3.push = var0;
    var3 = var1.prototype;
    var0 = function() {
        _fun170: for (var _fun170_ip = 0;;) switch (_fun170_ip) {
            case 0:
                var2 = this;
                var3 = var2._length;
                var0 = 0;
                if (!(var0 === var3)) {
                    _fun170_ip = 19;
                    continue _fun170
                }
            case 15:
                var0 = undefined;
                return var0;
            case 19:
                var0 = var2._front;
                var0 = var0 + var3;
                var1 = 1;
                var4 = var0 - var1;
                var0 = var2._capacity;
                var0 = var0 - var1;
                var5 = var4 & var0;
                var0 = var2[var5];
                var4 = undefined;
                var2[var5] = var4;
                var1 = var3 - var1;
                var2._length = var1;
                return var0;
        }
    };
    var3.pop = var0;
    var3 = var1.prototype;
    var0 = function() {
        _fun171: for (var _fun171_ip = 0;;) switch (_fun171_ip) {
            case 0:
                var2 = this;
                var3 = var2._length;
                var0 = 0;
                if (!(var0 === var3)) {
                    _fun171_ip = 19;
                    continue _fun171
                }
            case 15:
                var0 = undefined;
                return var0;
            case 19:
                var4 = var2._front;
                var0 = var2[var4];
                var1 = undefined;
                var2[var4] = var1;
                var1 = 1;
                var5 = var4 + var1;
                var4 = var2._capacity;
                var4 = var4 - var1;
                var4 = var5 & var4;
                var2._front = var4;
                var1 = var3 - var1;
                var2._length = var1;
                return var0;
        }
    };
    var3.shift = var0;
    var3 = var1.prototype;
    var0 = function arg0() {
        _fun172: for (var _fun172_ip = 0;;) switch (_fun172_ip) {
            case 0:
                var6 = this;
                var5 = undefined;
                var0 = var6._length;
                var1 = arguments.length;
                var4 = 1;
                if (!(!(var1 > var4))) {
                    _fun172_ip = 105;
                    continue _fun172
                }
            case 21:
                var2 = 0;
                if (!(var2 !== var1)) {
                    _fun172_ip = 103;
                    continue _fun172
                }
            case 27:
                var3 = var6._checkCapacity;
                var2 = var0 + var4;
                var2 = var3.bind(var6)(var2);
                var3 = var6._capacity;
                var2 = var6._front;
                var7 = var2 - var4;
                var2 = var3 - var4;
                var2 = var7 & var2;
                var2 = var2 ^ var3;
                var2 = var2 - var3;
                var3 = arg0;
                var6[var2] = var3;
                var3 = var0 + var4;
                var6._length = var3;
                var6._front = var2;
                var2 = var0 + var4;
                return var2;
            case 103:
                return var0;
            case 105:
                var2 = var0 + var1;
                var9 = var6._capacity;
                if (!(!(var2 > var9))) {
                    _fun172_ip = 201;
                    continue _fun172
                }
            case 119:
                var3 = var6._front;
                var8 = var1 - var4;
                var7 = 0;
                var2 = var3;
                if (!(var8 >= var7)) {
                    _fun172_ip = 179;
                    continue _fun172
                }
            case 138:
                var11 = var3 - var4;
                var10 = var9 - var4;
                var10 = var11 & var10;
                var10 = var10 ^ var9;
                var10 = var10 - var9;
                var11 = arguments[var8];
                var6[var10] = var11;
                var8 = var8 - 1;
                var3 = var10;
                var2 = var3;
                if (var8 >= var7) {
                    _fun172_ip = 138;
                    continue _fun172
                }
            case 179:
                var6._front = var2;
                var2 = var0 + var1;
                var6._length = var2;
                var2 = var0 + var1;
                return var2;
            case 201:
                var3 = var1 - var4;
                var2 = 0;
                var1 = var0;
                var0 = var1;
                if (!(var3 >= var2)) {
                    _fun172_ip = 300;
                    continue _fun172
                }
            case 217:
                var8 = var6._checkCapacity;
                var7 = var1 + var4;
                var7 = var8.bind(var6)(var7);
                var8 = var6._capacity;
                var7 = var6._front;
                var9 = var7 - var4;
                var7 = var8 - var4;
                var7 = var9 & var7;
                var7 = var7 ^ var8;
                var8 = var7 - var8;
                var7 = arguments[var3];
                var6[var8] = var7;
                var7 = var1 + 1;
                var6._length = var7;
                var6._front = var8;
                var3 = var3 - 1;
                var1 = var7;
                var0 = var1;
                if (var3 >= var2) {
                    _fun172_ip = 217;
                    continue _fun172
                }
            case 300:
                return var0;
        }
    };
    var3.unshift = var0;
    var3 = var1.prototype;
    var0 = function() {
        _fun173: for (var _fun173_ip = 0;;) switch (_fun173_ip) {
            case 0:
                var1 = this;
                var2 = var1._length;
                var0 = 0;
                if (!(var0 === var2)) {
                    _fun173_ip = 19;
                    continue _fun173
                }
            case 15:
                var0 = undefined;
                return var0;
            case 19:
                var0 = var1._front;
                var0 = var0 + var2;
                var3 = 1;
                var2 = var0 - var3;
                var0 = var1._capacity;
                var0 = var0 - var3;
                var0 = var2 & var0;
                var0 = var1[var0];
                return var0;
        }
    };
    var3.peekBack = var0;
    var3 = var1.prototype;
    var0 = function() {
        _fun174: for (var _fun174_ip = 0;;) switch (_fun174_ip) {
            case 0:
                var1 = this;
                var2 = var1._length;
                var0 = 0;
                if (!(var0 === var2)) {
                    _fun174_ip = 19;
                    continue _fun174
                }
            case 15:
                var0 = undefined;
                return var0;
            case 19:
                var0 = var1._front;
                var0 = var1[var0];
                return var0;
        }
    };
    var3.peekFront = var0;
    var3 = var1.prototype;
    var0 = function arg0() {
        _fun175: for (var _fun175_ip = 0;;) switch (_fun175_ip) {
            case 0:
                var4 = arg0;
                var1 = this;
                var0 = var4 | 0;
                if (!(var4 === var0)) {
                    _fun175_ip = 73;
                    continue _fun175
                }
            case 13:
                var0 = var1._length;
                var3 = 0;
                var2 = var4;
                if (!(var2 < var3)) {
                    _fun175_ip = 32;
                    continue _fun175
                }
            case 28:
                var2 = var4 + var0;
            case 32:
                if (!(!(var2 < var3))) {
                    _fun175_ip = 73;
                    continue _fun175
                }
            case 36:
                if (!(!(var2 >= var0))) {
                    _fun175_ip = 73;
                    continue _fun175
                }
            case 40:
                var0 = var1._front;
                var2 = var0 + var2;
                var3 = var1._capacity;
                var0 = 1;
                var0 = var3 - var0;
                var0 = var2 & var0;
                var0 = var1[var0];
                return var0;
            case 73:
                var0 = undefined;
                return var0;
        }
    };
    var3.get = var0;
    var3 = var1.prototype;
    var0 = function() {
        var0 = this;
        var1 = var0._length;
        var0 = 0;
        var0 = var0 === var1;
        return var0;
    };
    var3.isEmpty = var0;
    var3 = var1.prototype;
    var0 = function() {
        var1 = this;
        var0 = 0;
        var1._length = var0;
        var1._front = var0;
        var0 = var1._makeCapacity;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var3.clear = var0;
    var3 = var1.prototype;
    var0 = function() {
        var1 = this;
        var0 = var1.toArray;
        var1 = var0.bind(var1)();
        var0 = var1.toString;
        var0 = var0.bind(var1)();
        return var0;
    };
    var3.toString = var0;
    var3 = var1.prototype;
    var0 = var1.prototype;
    var0 = var0.toString;
    var3.valueOf = var0;
    var3 = var1.prototype;
    var0 = var1.prototype;
    var0 = var0.shift;
    var3.removeFront = var0;
    var3 = var1.prototype;
    var0 = var1.prototype;
    var0 = var0.pop;
    var3.removeBack = var0;
    var3 = var1.prototype;
    var0 = var1.prototype;
    var0 = var0.unshift;
    var3.insertFront = var0;
    var3 = var1.prototype;
    var0 = var1.prototype;
    var0 = var0.push;
    var3.insertBack = var0;
    var3 = var1.prototype;
    var0 = var1.prototype;
    var0 = var0.push;
    var3.enqueue = var0;
    var3 = var1.prototype;
    var0 = var1.prototype;
    var0 = var0.shift;
    var3.dequeue = var0;
    var3 = var1.prototype;
    var0 = var1.prototype;
    var0 = var0.toArray;
    var3.toJSON = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = var1.prototype;
    var4 = {};
    var3 = function() {
        var0 = this;
        var0 = var0._length;
        return var0;
    };
    var4.get = var3;
    var3 = function() {
        var0 = global;
        var2 = var0.RangeError;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = '';
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        throw var0;
    };
    var4.set = var3;
    var3 = 'length';
    var3 = var6.bind(var7)(var5, var3, var4);
    var4 = var1.prototype;
    var3 = function() {
        _fun181: for (var _fun181_ip = 0;;) switch (_fun181_ip) {
            case 0:
                var3 = this;
                var2 = var3._capacity;
                var1 = 0;
                var4 = var1 < var2;
                var0 = undefined;
                if (!var4) {
                    _fun181_ip = 31;
                    continue _fun181
                }
            case 20:
                var3[var1] = var0;
                var1 = var1 + 1;
                if (var1 < var2) {
                    _fun181_ip = 20;
                    continue _fun181
                }
            case 31:
                return var0;
        }
    };
    var4._makeCapacity = var3;
    var4 = var1.prototype;
    var3 = function arg0() {
        _fun182: for (var _fun182_ip = 0;;) switch (_fun182_ip) {
            case 0:
                var2 = this;
                var1 = var2._capacity;
                var0 = arg0;
                if (!(var1 < var0)) {
                    _fun182_ip = 68;
                    continue _fun182
                }
            case 16:
                var1 = var2._resizeTo;
                var4 = _closure1_slot2;
                var3 = var2._capacity;
                var0 = 1.5;
                var5 = var0 * var3;
                var3 = undefined;
                var0 = 16;
                var0 = var5 + var0;
                var0 = var4.bind(var3)(var0);
                var0 = var1.bind(var2)(var0);
            case 68:
                var0 = undefined;
                return var0;
        }
    };
    var4._checkCapacity = var3;
    var4 = var1.prototype;
    var3 = function arg0() {
        _fun183: for (var _fun183_ip = 0;;) switch (_fun183_ip) {
            case 0:
                var6 = this;
                var5 = var6._front;
                var9 = var6._capacity;
                var0 = global;
                var0 = var0.Array;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var15 = var1;
                var14 = var9;
                var0 = new var15[var0](var14, var13);
                var4 = var0 instanceof Object ? var0 : var1;
                var3 = var6._length;
                var7 = _closure1_slot1;
                var0 = undefined;
                var2 = 0;
                var15 = undefined;
                var14 = var6;
                var13 = 0;
                var12 = var4;
                var11 = 0;
                var10 = var9;
                var7 = var15[var7](var14, var13, var12, var11, var10, var9);
                var7 = arg0;
                var6._capacity = var7;
                var7 = var6._makeCapacity;
                var7 = var7.bind(var6)();
                var6._front = var2;
                var7 = var5 + var3;
                if (!(!(var7 <= var9))) {
                    _fun183_ip = 179;
                    continue _fun183
                }
            case 115:
                var8 = var5 + var3;
                var7 = 1;
                var7 = var9 - var7;
                var7 = var8 & var7;
                var9 = var3 - var7;
                var8 = _closure1_slot1;
                var15 = undefined;
                var14 = var4;
                var13 = var5;
                var12 = var6;
                var11 = 0;
                var10 = var9;
                var7 = var15[var8](var14, var13, var12, var11, var10, var9);
                var10 = var3 - var9;
                var14 = var4;
                var13 = 0;
                var12 = var6;
                var11 = var9;
                var7 = var15[var8](var14, var13, var12, var11, var10, var9);
                _fun183_ip = 203;
                continue _fun183;
            case 179:
                var1 = _closure1_slot1;
                var15 = undefined;
                var14 = var4;
                var13 = var5;
                var12 = var6;
                var11 = 0;
                var10 = var3;
                var1 = var15[var1](var14, var13, var12, var11, var10, var9);
            case 203:
                return var0;
        }
    };
    var4._resizeTo = var3;
    var0 = var0.Array;
    var0 = var0.isArray;
    var _closure1_slot0 = var0;
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);