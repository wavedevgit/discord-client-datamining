// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function(arg0) { // Original name: deriveBFS, environment: var0
        _fun51236: for (var _fun51236_ip = 0;;) switch (_fun51236_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var10 = global;
                var4 = var10.Object;
                var3 = var4.keys;
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var8 = 0;
                var2 = var2[var8];
                var7 = undefined;
                var2 = var5.bind(var7)(var2);
                var4 = var3.bind(var4)(var2);
                var3 = var4.length;
                var5 = var8 < var3;
                var6 = -1;
                var2 = 0;
                if (!var5) {
                    _fun51236_ip = 96;
                    continue _fun51236
                }
            case 67:
                var11 = var4[var2];
                var5 = {
                    'distance': 4294967295,
                    'parent': null
                };
                var0[var11] = var5;
                var2 = var2 + 1;
                if (var2 < var3) {
                    _fun51236_ip = 67;
                    continue _fun51236
                }
            case 96:
                var5 = new Array(1);
                var5[0] = var1;
                var1 = var0[var1];
                var1.distance = var8;
                var1 = var5.length;
                var4 = 1;
                var3 = undefined;
                var2 = undefined;
                if (!var1) {
                    _fun51236_ip = 272;
                    continue _fun51236
                }
            case 132:
                var1 = var5.pop;
                var13 = var1.bind(var5)();
                var12 = var10.Object;
                var11 = var12.keys;
                var14 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var8];
                var1 = var14.bind(var7)(var1);
                var1 = var1[var13];
                var12 = var11.bind(var12)(var1);
                var11 = var12.length;
                var14 = var8 < var11;
                var1 = 0;
                if (!var14) {
                    _fun51236_ip = 261;
                    continue _fun51236
                }
            case 193:
                var15 = var12[var1];
                var14 = var0[var15];
                var16 = var14.distance;
                if (!(var6 === var16)) {
                    _fun51236_ip = 248;
                    continue _fun51236
                }
            case 211:
                var16 = var0[var13];
                var16 = var16.distance;
                var16 = var16 + var4;
                var14.distance = var16;
                var14.parent = var13;
                var16 = var5.unshift;
                var16 = var16.bind(var5)(var15);
            case 248:
                var1 = var1 + 1;
                var3 = var15;
                var2 = var14;
                if (var1 < var11) {
                    _fun51236_ip = 193;
                    continue _fun51236
                }
            case 261:
                var1 = var5.length;
                if (var1) {
                    _fun51236_ip = 132;
                    continue _fun51236
                }
            case 272:
                return var0;
        }
    };
    var _closure1_slot2 = var1;
    var1 = function(arg0, arg1) { // Original name: link, environment: var0
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure2_slot1;
            var3 = _closure2_slot0;
            var1 = undefined;
            var0 = arg0;
            var0 = var3.bind(var1)(var0);
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        return var0;
    };
    var _closure1_slot3 = var1;
    var1 = function(arg0, arg1) { // Original name: wrapConversion, environment: var0
        _fun51239: for (var _fun51239_ip = 0;;) switch (_fun51239_ip) {
            case 0:
                var2 = arg0;
                var8 = arg1;
                var0 = var8[var2];
                var0 = var0.parent;
                var1 = new Array(2);
                var1[0] = var0;
                var1[1] = var2;
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                var6 = 0;
                var0 = var0[var6];
                var5 = undefined;
                var3 = var3.bind(var5)(var0);
                var0 = var8[var2];
                var0 = var0.parent;
                var0 = var3[var0];
                var3 = var0[var2];
                var2 = var8[var2];
                var4 = var2.parent;
                var2 = var8[var4];
                var2 = var2.parent;
                var0 = var3;
                if (!var2) {
                    _fun51239_ip = 180;
                    continue _fun51239
                }
            case 92:
                var9 = var1.unshift;
                var2 = var8[var4];
                var2 = var2.parent;
                var2 = var9.bind(var1)(var2);
                var9 = _closure1_slot3;
                var10 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var6];
                var10 = var10.bind(var5)(var2);
                var2 = var8[var4];
                var2 = var2.parent;
                var2 = var10[var2];
                var2 = var2[var4];
                var3 = var9.bind(var5)(var2, var3);
                var2 = var8[var4];
                var4 = var2.parent;
                var2 = var8[var4];
                var2 = var2.parent;
                var0 = var3;
                if (var2) {
                    _fun51239_ip = 92;
                    continue _fun51239
                }
            case 180:
                var0.conversion = var1;
                return var0;
        }
    };
    var _closure1_slot4 = var1;
    var1 = function(arg0) { // Environment: var0
        _fun51240: for (var _fun51240_ip = 0;;) switch (_fun51240_ip) {
            case 0:
                var1 = _closure1_slot2;
                var6 = undefined;
                var0 = arg0;
                var5 = var1.bind(var6)(var0);
                var0 = {};
                var1 = global;
                var2 = var1.Object;
                var1 = var2.keys;
                var4 = var1.bind(var2)(var5);
                var3 = var4.length;
                var2 = 0;
                var8 = var2 < var3;
                var1 = null;
                if (!var8) {
                    _fun51240_ip = 91;
                    continue _fun51240
                }
            case 53:
                var9 = var4[var2];
                var8 = var5[var9];
                var8 = var8.parent;
                if (!(var1 !== var8)) {
                    _fun51240_ip = 84;
                    continue _fun51240
                }
            case 70:
                var8 = _closure1_slot4;
                var8 = var8.bind(var6)(var9, var5);
                var0[var9] = var8;
            case 84:
                var2 = var2 + 1;
                if (var2 < var3) {
                    _fun51240_ip = 53;
                    continue _fun51240
                }
            case 91:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5788]);