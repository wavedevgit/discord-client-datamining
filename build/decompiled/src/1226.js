// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function(arg0) { // Original name: valueOf, environment: var0
        _fun13505: for (var _fun13505_ip = 0;;) switch (_fun13505_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.valueOf;
                if (var0) {
                    _fun13505_ip = 41;
                    continue _fun13505
                }
            case 11:
                var0 = global;
                var0 = var0.Object;
                var0 = var0.prototype;
                var1 = var0.valueOf;
                var0 = var1.call;
                var0 = var0.bind(var1)(var2);
                _fun13505_ip = 50;
                continue _fun13505;
            case 41:
                var1 = var2.valueOf;
                var0 = var1.bind(var2)();
            case 50:
                return var0;
        }
    };
    var _closure1_slot0 = var1;
    var1 = function(arg0, arg1) { // Original name: valueEqual, environment: var0
        _fun13506: for (var _fun13506_ip = 0;;) switch (_fun13506_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var2;
                if (!(var3 !== var2)) {
                    _fun13506_ip = 233;
                    continue _fun13506
                }
            case 23:
                var0 = null;
                if (!(var0 != var3)) {
                    _fun13506_ip = 229;
                    continue _fun13506
                }
            case 32:
                if (!(var0 != var2)) {
                    _fun13506_ip = 229;
                    continue _fun13506
                }
            case 39:
                var0 = global;
                var5 = var0.Array;
                var4 = var5.isArray;
                var4 = var4.bind(var5)(var3);
                if (var4) {
                    _fun13506_ip = 175;
                    continue _fun13506
                }
            case 60:
                var5 = 'object';
                var4 = typeof var3;
                if (!(var5 !== var4)) {
                    _fun13506_ip = 78;
                    continue _fun13506
                }
            case 71:
                var4 = typeof var2;
                if (!(var5 === var4)) {
                    _fun13506_ip = 171;
                    continue _fun13506
                }
            case 78:
                var4 = _closure1_slot0;
                var8 = undefined;
                var7 = var4.bind(var8)(var3);
                var6 = var4.bind(var8)(var2);
                if (!(var7 === var3)) {
                    _fun13506_ip = 159;
                    continue _fun13506
                }
            case 101:
                if (!(var6 === var2)) {
                    _fun13506_ip = 159;
                    continue _fun13506
                }
            case 105:
                var10 = var0.Object;
                var9 = var10.keys;
                var12 = var0.Object;
                var11 = var12.assign;
                var4 = {};
                var4 = var11.bind(var12)(var4, var3, var2);
                var10 = var9.bind(var10)(var4);
                var9 = var10.every;
                var4 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var3 = _closure1_slot1;
                    var2 = _closure2_slot0;
                    var2 = var2[var1];
                    var0 = _closure2_slot1;
                    var1 = var0[var1];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var4 = var9.bind(var10)(var4);
                _fun13506_ip = 169;
                continue _fun13506;
            case 159:
                var5 = _closure1_slot1;
                var4 = var5.bind(var8)(var7, var6);
            case 169:
                return var4;
            case 171:
                var4 = false;
                return var4;
            case 175:
                var4 = var0.Array;
                var0 = var4.isArray;
                var0 = var0.bind(var4)(var2);
                if (!var0) {
                    _fun13506_ip = 208;
                    continue _fun13506
                }
            case 194:
                var4 = var3.length;
                var2 = var2.length;
                var0 = var4 === var2;
            case 208:
                if (!var0) {
                    _fun13506_ip = 227;
                    continue _fun13506
                }
            case 211:
                var2 = var3.every;
                var1 = function(arg0, arg1) { // Environment: var1
                    var3 = _closure1_slot1;
                    var1 = _closure2_slot1;
                    var0 = arg1;
                    var2 = var1[var0];
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var3.bind(var1)(var0, var2);
                    return var0;
                };
                var0 = var2.bind(var3)(var1);
            case 227:
                return var0;
            case 229:
                var0 = false;
                return var0;
            case 233:
                var0 = true;
                return var0;
        }
    };
    var _closure1_slot1 = var1;
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);