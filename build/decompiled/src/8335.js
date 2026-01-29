// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun67426: for (var _fun67426_ip = 0;;) switch (_fun67426_ip) {
        case 0:
            var1 = {};
            var2 = function(arg0) { // Original name: glog, environment: var0
                _fun67427: for (var _fun67427_ip = 0;;) switch (_fun67427_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = 1;
                        if (!(!(var1 < var0))) {
                            _fun67427_ip = 29;
                            continue _fun67427
                        }
                    case 10:
                        var0 = _closure1_slot0;
                        var0 = var0.LOG_TABLE;
                        var0 = var0[var1];
                        return var0;
                    case 29:
                        var0 = global;
                        var2 = var0.Error;
                        var0 = 'glog(';
                        var3 = var0 + var1;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var0 = ')';
                        var4 = var3 + var0;
                        var5 = var1;
                        var0 = new var5[var2](var4, var3);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var1.glog = var2;
            var2 = function(arg0) { // Original name: gexp, environment: var0
                _fun67428: for (var _fun67428_ip = 0;;) switch (_fun67428_ip) {
                    case 0:
                        var0 = arg0;
                        var3 = 255;
                        var2 = 0;
                        var1 = var0;
                        if (!(var1 < var2)) {
                            _fun67428_ip = 26;
                            continue _fun67428
                        }
                    case 15:
                        var0 = var0 + var3;
                        var1 = var0;
                        if (var1 < var2) {
                            _fun67428_ip = 15;
                            continue _fun67428
                        }
                    case 26:
                        var2 = 256;
                        var0 = var1;
                        var1 = var0;
                        if (!(var1 >= var2)) {
                            _fun67428_ip = 53;
                            continue _fun67428
                        }
                    case 42:
                        var0 = var0 - var3;
                        var1 = var0;
                        if (var1 >= var2) {
                            _fun67428_ip = 42;
                            continue _fun67428
                        }
                    case 53:
                        var0 = _closure1_slot0;
                        var0 = var0.EXP_TABLE;
                        var0 = var0[var1];
                        return var0;
                }
            };
            var1.gexp = var2;
            var2 = global;
            var3 = var2.Array;
            var4 = var3.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var3
                }
            });
            var9 = 256;
            var14 = var4;
            var13 = var9;
            var3 = new var14[var3](var13, var12);
            var3 = var3 instanceof Object ? var3 : var4;
            var1.EXP_TABLE = var3;
            var2 = var2.Array;
            var3 = var2.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var2
                }
            });
            var14 = var3;
            var2 = new var14[var2](var13, var12);
            var2 = var2 instanceof Object ? var2 : var3;
            var1.LOG_TABLE = var2;
            var _closure1_slot0 = var1;
            var10 = 1;
            var7 = 8;
            var6 = 4;
            var5 = 5;
            var4 = 6;
            var2 = 255;
            var0 = 0;
        case 125:
            var11 = var1.EXP_TABLE;
            var3 = var10 << var0;
            var11[var0] = var3;
            var0 = var0 + 1;
            var3 = var7;
            if (var0 < var3) {
                _fun67426_ip = 125;
                continue _fun67426
            }
        case 149:
            var10 = var1.EXP_TABLE;
            var11 = var1.EXP_TABLE;
            var0 = var3 - var6;
            var11 = var11[var0];
            var12 = var1.EXP_TABLE;
            var0 = var3 - var5;
            var0 = var12[var0];
            var11 = var11 ^ var0;
            var12 = var1.EXP_TABLE;
            var0 = var3 - var4;
            var0 = var12[var0];
            var11 = var11 ^ var0;
            var12 = var1.EXP_TABLE;
            var0 = var3 - var7;
            var0 = var12[var0];
            var0 = var11 ^ var0;
            var10[var3] = var0;
            var3 = var3 + 1;
            var0 = 0;
            if (var3 < var9) {
                _fun67426_ip = 149;
                continue _fun67426
            }
        case 236:
            var4 = var1.LOG_TABLE;
            var3 = var1.EXP_TABLE;
            var3 = var3[var0];
            var4[var3] = var0;
            var0 = var0 + 1;
            if (var0 < var2) {
                _fun67426_ip = 236;
                continue _fun67426
            }
        case 263:
            var0 = arg4;
            var0.exports = var1;
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, []);