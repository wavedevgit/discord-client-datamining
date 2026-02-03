// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function arg0, arg1, arg2, arg3() {
        _fun94191: for (var _fun94191_ip = 0;;) switch (_fun94191_ip) {
            case 0:
                var9 = arg2;
                var2 = arg3;
                var _closure2_slot2 = var2;
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var5 = 0;
                var1 = var8[var5];
                var4 = undefined;
                var10 = var7.bind(var4)(var1);
                var1 = var10.prototype;
                var3 = Object.create(var1, {
                    constructor: {
                        value: var10
                    }
                });
                var14 = arg0;
                var15 = var3;
                var13 = var2;
                var1 = new var15[var10](var14, var13, var12);
                var1 = var1 instanceof Object ? var1 : var3;
                var _closure2_slot0 = var1;
                var3 = 1;
                var3 = var8[var3];
                var8 = var7.bind(var4)(var3);
                var3 = var8.prototype;
                var7 = Object.create(var3, {
                    constructor: {
                        value: var8
                    }
                });
                var14 = arg1;
                var15 = var7;
                var13 = var2;
                var3 = new var15[var8](var14, var13, var12);
                var3 = var3 instanceof Object ? var3 : var7;
                var _closure2_slot1 = var3;
                var7 = '>';
                if (!(var7 !== var9)) {
                    _fun94191_ip = 232;
                    continue _fun94191
                }
            case 116:
                var8 = '<';
                if (!(var8 !== var9)) {
                    _fun94191_ip = 160;
                    continue _fun94191
                }
            case 124:
                var9 = global;
                var11 = var9.TypeError;
                var9 = var11.prototype;
                var10 = Object.create(var9, {
                    constructor: {
                        value: var11
                    }
                });
                var14 = 'Must provide a hilo val of "<" or ">"';
                var15 = var10;
                var9 = new var15[var11](var14, var13);
                var9 = var9 instanceof Object ? var9 : var10;
                throw var9;
            case 160:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var9 = 4;
                var9 = var11[var9];
                var9 = var10.bind(var4)(var9);
                var _closure2_slot3 = var9;
                var9 = 5;
                var9 = var11[var9];
                var9 = var10.bind(var4)(var9);
                var _closure2_slot4 = var9;
                var9 = 2;
                var9 = var11[var9];
                var9 = var10.bind(var4)(var9);
                var _closure2_slot5 = var9;
                var _closure2_slot6 = var8;
                var8 = '<=';
                var _closure2_slot7 = var8;
                _fun94191_ip = 302;
                continue _fun94191;
            case 232:
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var8 = 2;
                var8 = var10[var8];
                var8 = var9.bind(var4)(var8);
                _closure2_slot3 = var8;
                var8 = 3;
                var8 = var10[var8];
                var8 = var9.bind(var4)(var8);
                _closure2_slot4 = var8;
                var8 = 4;
                var8 = var10[var8];
                var8 = var9.bind(var4)(var8);
                _closure2_slot5 = var8;
                _closure2_slot6 = var7;
                var7 = '>=';
                _closure2_slot7 = var7;
            case 302:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var0 = 6;
                var0 = var8[var0];
                var0 = var7.bind(var4)(var0);
                var0 = var0.bind(var4)(var1, var3, var2);
                if (var0) {
                    _fun94191_ip = 401;
                    continue _fun94191
                }
            case 332:
                var2 = function() {
                    _fun94192: for (var _fun94192_ip = 0;;) switch (_fun94192_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var1 = var0.set;
                            var0 = _closure2_slot8;
                            var3 = var1[var0];
                            var0 = null;
                            var _closure3_slot0 = var0;
                            var _closure3_slot1 = var0;
                            var1 = var3.forEach;
                            var0 = function(arg0) { // Environment: var2
                                _fun94193: for (var _fun94193_ip = 0;;) switch (_fun94193_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var5 = var2.semver;
                                        var6 = _closure1_slot0;
                                        var0 = _closure1_slot1;
                                        var4 = 7;
                                        var3 = var0[var4];
                                        var0 = undefined;
                                        var3 = var6.bind(var0)(var3);
                                        var3 = var3.ANY;
                                        if (!(var5 === var3)) {
                                            _fun94193_ip = 87;
                                            continue _fun94193
                                        }
                                    case 44:
                                        var3 = _closure1_slot0;
                                        var1 = _closure1_slot1;
                                        var1 = var1[var4];
                                        var4 = var3.bind(var0)(var1);
                                        var1 = var4.prototype;
                                        var3 = Object.create(var1, {
                                            constructor: {
                                                value: var4
                                            }
                                        });
                                        var10 = '>=0.0.0';
                                        var11 = var3;
                                        var1 = new var11[var4](var10, var9);
                                        var2 = var1 instanceof Object ? var1 : var3;
                                    case 87:
                                        var3 = _closure3_slot0;
                                        if (var3) {
                                            _fun94193_ip = 100;
                                            continue _fun94193
                                        }
                                    case 97:
                                        var3 = var2;
                                    case 100:
                                        _closure3_slot0 = var3;
                                        var3 = _closure3_slot1;
                                        if (var3) {
                                            _fun94193_ip = 114;
                                            continue _fun94193
                                        }
                                    case 111:
                                        var3 = var2;
                                    case 114:
                                        _closure3_slot1 = var3;
                                        var7 = _closure2_slot3;
                                        var6 = var2.semver;
                                        var4 = _closure3_slot0;
                                        var5 = var4.semver;
                                        var4 = _closure2_slot2;
                                        var4 = var7.bind(var0)(var6, var5, var4);
                                        if (var4) {
                                            _fun94193_ip = 195;
                                            continue _fun94193
                                        }
                                    case 155:
                                        var6 = _closure2_slot5;
                                        var5 = var2.semver;
                                        var4 = _closure3_slot1;
                                        var4 = var4.semver;
                                        var3 = _closure2_slot2;
                                        var3 = var6.bind(var0)(var5, var4, var3);
                                        if (!var3) {
                                            _fun94193_ip = 199;
                                            continue _fun94193
                                        }
                                    case 189:
                                        _closure3_slot1 = var2;
                                        _fun94193_ip = 199;
                                        continue _fun94193;
                                    case 195:
                                        _closure3_slot0 = var2;
                                    case 199:
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var3)(var0);
                            var0 = _closure3_slot0;
                            var1 = var0.operator;
                            var0 = _closure2_slot6;
                            if (!(var1 !== var0)) {
                                _fun94192_ip = 228;
                                continue _fun94192
                            }
                        case 70:
                            var0 = _closure3_slot0;
                            var1 = var0.operator;
                            var0 = _closure2_slot7;
                            if (!(var1 !== var0)) {
                                _fun94192_ip = 228;
                                continue _fun94192
                            }
                        case 91:
                            var0 = _closure3_slot1;
                            var0 = var0.operator;
                            if (!var0) {
                                _fun94192_ip = 122;
                                continue _fun94192
                            }
                        case 104:
                            var0 = _closure3_slot1;
                            var1 = var0.operator;
                            var0 = _closure2_slot6;
                            if (!(var1 === var0)) {
                                _fun94192_ip = 161;
                                continue _fun94192
                            }
                        case 122:
                            var5 = _closure2_slot4;
                            var3 = _closure2_slot0;
                            var0 = _closure3_slot1;
                            var1 = var0.semver;
                            var0 = undefined;
                            var0 = var5.bind(var0)(var3, var1);
                            if (!var0) {
                                _fun94192_ip = 161;
                                continue _fun94192
                            }
                        case 151:
                            var0 = {};
                            var1 = false;
                            var0.v = var1;
                            _fun94192_ip = 226;
                            continue _fun94192;
                        case 161:
                            var1 = _closure3_slot1;
                            var6 = var1.operator;
                            var5 = _closure2_slot7;
                            var3 = undefined;
                            var1 = undefined;
                            if (!(var6 === var5)) {
                                _fun94192_ip = 223;
                                continue _fun94192
                            }
                        case 183:
                            var5 = _closure2_slot5;
                            var4 = _closure2_slot0;
                            var2 = _closure3_slot1;
                            var2 = var2.semver;
                            var2 = var5.bind(var3)(var4, var2);
                            var1 = undefined;
                            if (!var2) {
                                _fun94192_ip = 223;
                                continue _fun94192
                            }
                        case 212:
                            var2 = {};
                            var3 = false;
                            var2.v = var3;
                            var1 = var2;
                        case 223:
                            var0 = var1;
                        case 226:
                            _fun94192_ip = 239;
                            continue _fun94192;
                        case 228:
                            var1 = {};
                            var2 = false;
                            var1.v = var2;
                            var0 = var1;
                        case 239:
                            return var0;
                    }
                };
                var _closure2_slot8 = var5;
                var0 = var3.set;
                var0 = var0.length;
                var0 = var5 < var0;
                var5 = 0;
                if (!var0) {
                    _fun94191_ip = 390;
                    continue _fun94191
                }
            case 362:
                var0 = var2.bind(var4)();
                if (var0) {
                    _fun94191_ip = 394;
                    continue _fun94191
                }
            case 369:
                var5 = var5 + 1;
                _closure2_slot8 = var5;
                var1 = var3.set;
                var1 = var1.length;
                if (var5 < var1) {
                    _fun94191_ip = 362;
                    continue _fun94191
                }
            case 390:
                var1 = true;
                return var1;
            case 394:
                var0 = var0.v;
                return var0;
            case 401:
                var0 = false;
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12301, 12330, 12321, 12326, 12322, 12325, 12332, 12329]);