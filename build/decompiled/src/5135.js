// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var1 = true;
    var3.value = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var2, var1, var3);
    var1 = function() { // Environment: var0
        var0 = function() {
            var0 = undefined;
            return var0;
        };
        var2 = function(arg0, arg1, arg2) { // Environment: var1
            _fun45812: for (var _fun45812_ip = 0;;) switch (_fun45812_ip) {
                case 0:
                    var12 = arg1;
                    var11 = arg2;
                    var0 = arg0;
                    var10 = 1;
                    var9 = var0 - var10;
                    var8 = global;
                    var2 = var8.Math;
                    var1 = var2.floor;
                    var4 = 0;
                    var0 = var4 + var9;
                    var7 = 2;
                    var0 = var0 / var7;
                    var0 = var1.bind(var2)(var0);
                    var5 = var8.Math;
                    var2 = var5.abs;
                    var3 = undefined;
                    var1 = var11.bind(var3)(var0);
                    var1 = var1 - var12;
                    var1 = var2.bind(var5)(var1);
                    if (!(var4 !== var1)) {
                        _fun45812_ip = 278;
                        continue _fun45812
                    }
                case 83:
                    if (!(!(var9 < var4))) {
                        _fun45812_ip = 217;
                        continue _fun45812
                    }
                case 90:
                    var6 = var1;
                    var5 = var0;
                    var1 = var5;
                    var2 = 0;
                    if (!(var2 <= var9)) {
                        _fun45812_ip = 215;
                        continue _fun45812
                    }
                case 105:
                    var15 = var8.Math;
                    var14 = var15.floor;
                    var13 = var2 + var9;
                    var13 = var13 / var7;
                    var15 = var14.bind(var15)(var13);
                    var13 = var11.bind(var3)(var15);
                    var16 = var13 - var12;
                    var17 = var8.Math;
                    var14 = var17.abs;
                    var14 = var14.bind(var17)(var16);
                    var16 = var16 >= var4;
                    if (!var16) {
                        _fun45812_ip = 167;
                        continue _fun45812
                    }
                case 163:
                    var16 = var14 < var6;
                case 167:
                    if (!var16) {
                        _fun45812_ip = 176;
                        continue _fun45812
                    }
                case 170:
                    var6 = var14;
                    var5 = var15;
                case 176:
                    var14 = var5;
                    if (!(!(var12 < var13))) {
                        _fun45812_ip = 195;
                        continue _fun45812
                    }
                case 183:
                    if (!(!(var12 > var13))) {
                        _fun45812_ip = 189;
                        continue _fun45812
                    }
                case 187:
                    return var15;
                case 189:
                    var13 = var15 + var10;
                    _fun45812_ip = 202;
                    continue _fun45812;
                case 195:
                    var9 = var15 - var10;
                    var13 = var2;
                case 202:
                    var2 = var13;
                    var5 = var14;
                    var1 = var5;
                    if (var2 <= var9) {
                        _fun45812_ip = 105;
                        continue _fun45812
                    }
                case 215:
                    return var1;
                case 217:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var4];
                    var1 = var2.bind(var3)(var1);
                    var3 = var1.default;
                    var1 = var3.prototype;
                    var2 = Object.create(var1, {
                        constructor: {
                            value: var3
                        }
                    });
                    var18 = {
                        'message': 'The collection cannot be empty',
                        'type': 'InvalidStateException'
                    };
                    var19 = var2;
                    var1 = new var19[var3](var18, var17);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                case 278:
                    return var0;
            }
        };
        var0.findClosestHigherValueIndex = var2;
        var2 = function(arg0, arg1) { // Environment: var1
            _fun45813: for (var _fun45813_ip = 0;;) switch (_fun45813_ip) {
                case 0:
                    var9 = arg0;
                    var8 = arg1;
                    var1 = var9.length;
                    var0 = 1;
                    var7 = var1 - var0;
                    var6 = global;
                    var3 = var6.Math;
                    var2 = var3.floor;
                    var5 = 0;
                    var1 = var5 + var7;
                    var4 = 2;
                    var1 = var1 / var4;
                    var11 = var2.bind(var3)(var1);
                    var10 = var9[var11];
                    var0 = var10 + var0;
                    var1 = var11;
                    var2 = var10;
                    if (!(var5 <= var7)) {
                        _fun45813_ip = 196;
                        continue _fun45813
                    }
                case 71:
                    var1 = var11;
                    var2 = var10;
                    if (!(var10 !== var0)) {
                        _fun45813_ip = 196;
                        continue _fun45813
                    }
                case 81:
                    var5 = 0;
                    var3 = var11;
                    var0 = var10;
                    var1 = var3;
                    var2 = var0;
                    if (!(var2 !== var8)) {
                        _fun45813_ip = 196;
                        continue _fun45813
                    }
                case 99:
                    var13 = var3;
                    var12 = var7;
                    if (!(!(var0 < var8))) {
                        _fun45813_ip = 125;
                        continue _fun45813
                    }
                case 109:
                    var13 = var5;
                    var12 = var7;
                    if (!(var0 > var8)) {
                        _fun45813_ip = 125;
                        continue _fun45813
                    }
                case 119:
                    var13 = var5;
                    var12 = var3;
                case 125:
                    var14 = var6.Math;
                    var11 = var14.floor;
                    var10 = var13 + var12;
                    var10 = var10 / var4;
                    var11 = var11.bind(var14)(var10);
                    var10 = var9[var11];
                    var1 = var11;
                    var2 = var10;
                    if (!(var13 <= var12)) {
                        _fun45813_ip = 196;
                        continue _fun45813
                    }
                case 164:
                    var1 = var11;
                    var2 = var10;
                    if (!(var10 !== var0)) {
                        _fun45813_ip = 196;
                        continue _fun45813
                    }
                case 174:
                    var5 = var13;
                    var7 = var12;
                    var3 = var11;
                    var0 = var10;
                    var1 = var3;
                    var2 = var0;
                    if (var2 !== var8) {
                        _fun45813_ip = 99;
                        continue _fun45813
                    }
                case 196:
                    var0 = {};
                    var0.value = var2;
                    var0.index = var1;
                    return var0;
            }
        };
        var0.findClosestValueToTarget = var2;
        var2 = function(arg0, arg1) { // Environment: var1
            _fun45814: for (var _fun45814_ip = 0;;) switch (_fun45814_ip) {
                case 0:
                    var2 = arg0;
                    var0 = arg1;
                    var5 = this;
                    var1 = var2.length;
                    var3 = 1;
                    var1 = var1 - var3;
                    var4 = var2[var1];
                    if (!(!(var0 >= var4))) {
                        _fun45814_ip = 108;
                        continue _fun45814
                    }
                case 29:
                    var4 = 0;
                    var4 = var2[var4];
                    if (!(!(var0 < var4))) {
                        _fun45814_ip = 104;
                        continue _fun45814
                    }
                case 39:
                    var4 = var5.findClosestValueToTarget;
                    var4 = var4.bind(var5)(var2, var0);
                    var5 = var4.value;
                    var4 = var4.index;
                    if (!(!(var5 <= var0))) {
                        _fun45814_ip = 89;
                        continue _fun45814
                    }
                case 65:
                    var0 = {};
                    var6 = var4 - var3;
                    var6 = var2[var6];
                    var0.value = var6;
                    var3 = var4 - var3;
                    var0.index = var3;
                    _fun45814_ip = 102;
                    continue _fun45814;
                case 89:
                    var3 = {};
                    var3.value = var5;
                    var3.index = var4;
                    var0 = var3;
                case 102:
                    return var0;
                case 104:
                    var0 = undefined;
                    return var0;
                case 108:
                    var0 = {};
                    var2 = var2[var1];
                    var0.value = var2;
                    var0.index = var1;
                    return var0;
            }
        };
        var0.findValueSmallerThanTarget = var2;
        var2 = function(arg0, arg1) { // Environment: var1
            _fun45815: for (var _fun45815_ip = 0;;) switch (_fun45815_ip) {
                case 0:
                    var2 = arg0;
                    var0 = arg1;
                    var5 = this;
                    var1 = var2.length;
                    var3 = 1;
                    var4 = var1 - var3;
                    var1 = 0;
                    var6 = var2[var1];
                    if (!(!(var0 < var6))) {
                        _fun45815_ip = 108;
                        continue _fun45815
                    }
                case 31:
                    var4 = var2[var4];
                    if (!(!(var0 > var4))) {
                        _fun45815_ip = 104;
                        continue _fun45815
                    }
                case 39:
                    var4 = var5.findClosestValueToTarget;
                    var4 = var4.bind(var5)(var2, var0);
                    var5 = var4.value;
                    var4 = var4.index;
                    if (!(!(var5 >= var0))) {
                        _fun45815_ip = 89;
                        continue _fun45815
                    }
                case 65:
                    var0 = {};
                    var6 = var4 + var3;
                    var6 = var2[var6];
                    var0.value = var6;
                    var3 = var4 + var3;
                    var0.index = var3;
                    _fun45815_ip = 102;
                    continue _fun45815;
                case 89:
                    var3 = {};
                    var3.value = var5;
                    var3.index = var4;
                    var0 = var3;
                case 102:
                    return var0;
                case 104:
                    var0 = undefined;
                    return var0;
                case 108:
                    var0 = {};
                    var2 = var2[var1];
                    var0.value = var2;
                    var0.index = var1;
                    return var0;
            }
        };
        var0.findValueLargerThanTarget = var2;
        var1 = function(arg0, arg1) { // Environment: var1
            _fun45816: for (var _fun45816_ip = 0;;) switch (_fun45816_ip) {
                case 0:
                    var4 = arg0;
                    var3 = arg1;
                    var2 = var4.length;
                    var1 = 0;
                    var5 = var1 < var2;
                    var0 = 1;
                    if (!var5) {
                        _fun45816_ip = 70;
                        continue _fun45816
                    }
                case 23:
                    var5 = var2 + var1;
                    var5 = var5 - var0;
                    var6 = var5 >> var0;
                    var5 = var4[var6];
                    if (!(!(var3 > var5))) {
                        _fun45816_ip = 56;
                        continue _fun45816
                    }
                case 43:
                    var7 = var4[var6];
                    var5 = var6;
                    if (!(!(var3 < var7))) {
                        _fun45816_ip = 63;
                        continue _fun45816
                    }
                case 54:
                    return var6;
                case 56:
                    var1 = var6 + var0;
                    var5 = var2;
                case 63:
                    var2 = var5;
                    if (var1 < var2) {
                        _fun45816_ip = 23;
                        continue _fun45816
                    }
                case 70:
                    var0 = -1;
                    return var0;
            }
        };
        var0.findIndexOf = var1;
        return var0;
    };
    var0 = undefined;
    var1 = var1.bind(var0)();
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5130]);