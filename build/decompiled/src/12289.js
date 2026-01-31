// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function(arg0, arg1) { // Original name: minVersion, environment: var0
        _fun94145: for (var _fun94145_ip = 0;;) switch (_fun94145_ip) {
            case 0:
                var7 = _closure1_slot0;
                var2 = _closure1_slot1;
                var6 = 0;
                var3 = var2[var6];
                var4 = undefined;
                var9 = var7.bind(var4)(var3);
                var3 = var9.prototype;
                var5 = Object.create(var3, {
                    constructor: {
                        value: var9
                    }
                });
                var11 = arg0;
                var10 = arg1;
                var12 = var5;
                var3 = new var12[var9](var11, var10, var9);
                var5 = var3 instanceof Object ? var3 : var5;
                var _closure2_slot0 = var5;
                var3 = 1;
                var2 = var2[var3];
                var8 = var7.bind(var4)(var2);
                var2 = var8.prototype;
                var7 = Object.create(var2, {
                    constructor: {
                        value: var8
                    }
                });
                var11 = '0.0.0';
                var12 = var7;
                var2 = new var12[var8](var11, var10);
                var7 = var2 instanceof Object ? var2 : var7;
                var _closure2_slot1 = var7;
                var2 = var5.test;
                var2 = var2.bind(var5)(var7);
                if (var2) {
                    _fun94145_ip = 279;
                    continue _fun94145
                }
            case 114:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var3];
                var3 = var2.bind(var4)(var1);
                var1 = var3.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var11 = '0.0.0-0';
                var12 = var2;
                var1 = new var12[var3](var11, var10);
                var1 = var1 instanceof Object ? var1 : var2;
                _closure2_slot1 = var1;
                var2 = var5.test;
                var1 = _closure2_slot1;
                var1 = var2.bind(var5)(var1);
                if (var1) {
                    _fun94145_ip = 273;
                    continue _fun94145
                }
            case 178:
                var3 = null;
                _closure2_slot1 = var3;
                var2 = function() { // Original name: _loop, environment: var0
                    _fun94146: for (var _fun94146_ip = 0;;) switch (_fun94146_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var3 = var2.set;
                            var2 = _closure2_slot2;
                            var4 = var3[var2];
                            var2 = null;
                            var _closure3_slot0 = var2;
                            var3 = var4.forEach;
                            var2 = function(arg0) { // Environment: var0
                                _fun94147: for (var _fun94147_ip = 0;;) switch (_fun94147_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot1;
                                        var0 = 1;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var5 = var2.bind(var0)(var1);
                                        var1 = var3.semver;
                                        var8 = var1.version;
                                        var2 = var5.prototype;
                                        var2 = Object.create(var2, {
                                            constructor: {
                                                value: var5
                                            }
                                        });
                                        var9 = var2;
                                        var1 = new var9[var5](var8, var7);
                                        var2 = var1 instanceof Object ? var1 : var2;
                                        var5 = var3.operator;
                                        var1 = '>';
                                        if (!(var1 !== var5)) {
                                            _fun94147_ip = 180;
                                            continue _fun94147
                                        }
                                    case 74:
                                        var1 = '';
                                        if (!(var1 !== var5)) {
                                            _fun94147_ip = 245;
                                            continue _fun94147
                                        }
                                    case 85:
                                        var1 = '>=';
                                        if (!(var1 !== var5)) {
                                            _fun94147_ip = 245;
                                            continue _fun94147
                                        }
                                    case 98:
                                        var1 = '<';
                                        if (!(var1 !== var5)) {
                                            _fun94147_ip = 295;
                                            continue _fun94147
                                        }
                                    case 109:
                                        var1 = '<=';
                                        if (!(var1 !== var5)) {
                                            _fun94147_ip = 295;
                                            continue _fun94147
                                        }
                                    case 122:
                                        var1 = global;
                                        var5 = var1.Error;
                                        var6 = var3.operator;
                                        var1 = var1.HermesInternal;
                                        var3 = var1.concat;
                                        var1 = 'Unexpected operation: ';
                                        var8 = var3.bind(var1)(var6);
                                        var3 = var5.prototype;
                                        var3 = Object.create(var3, {
                                            constructor: {
                                                value: var5
                                            }
                                        });
                                        var9 = var3;
                                        var1 = new var9[var5](var8, var7);
                                        var1 = var1 instanceof Object ? var1 : var3;
                                        throw var1;
                                    case 180:
                                        var1 = var2.prerelease;
                                        var1 = var1.length;
                                        var5 = 0;
                                        if (!(var5 !== var1)) {
                                            _fun94147_ip = 215;
                                            continue _fun94147
                                        }
                                    case 197:
                                        var3 = var2.prerelease;
                                        var1 = var3.push;
                                        var1 = var1.bind(var3)(var5);
                                        _fun94147_ip = 230;
                                        continue _fun94147;
                                    case 215:
                                        var1 = var2.patch;
                                        var1 = var1 + 1;
                                        var2.patch = var1;
                                    case 230:
                                        var1 = var2.format;
                                        var1 = var1.bind(var2)();
                                        var2.raw = var1;
                                    case 245:
                                        var3 = _closure3_slot0;
                                        if (!var3) {
                                            _fun94147_ip = 288;
                                            continue _fun94147
                                        }
                                    case 255:
                                        var5 = _closure1_slot0;
                                        var6 = _closure1_slot1;
                                        var4 = 2;
                                        var4 = var6[var4];
                                        var5 = var5.bind(var0)(var4);
                                        var4 = _closure3_slot0;
                                        var4 = var5.bind(var0)(var2, var4);
                                        var3 = !var4;
                                    case 288:
                                        if (var3) {
                                            _fun94147_ip = 295;
                                            continue _fun94147
                                        }
                                    case 291:
                                        _closure3_slot0 = var2;
                                    case 295:
                                        return var0;
                                }
                            };
                            var2 = var3.bind(var4)(var2);
                            var2 = _closure3_slot0;
                            var2 = !var2;
                            if (var2) {
                                _fun94146_ip = 107;
                                continue _fun94146
                            }
                        case 55:
                            var3 = _closure2_slot1;
                            if (!var3) {
                                _fun94146_ip = 104;
                                continue _fun94146
                            }
                        case 62:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var4 = 2;
                            var4 = var6[var4];
                            var7 = undefined;
                            var6 = var5.bind(var7)(var4);
                            var5 = _closure2_slot1;
                            var4 = _closure3_slot0;
                            var4 = var6.bind(var7)(var5, var4);
                            var3 = !var4;
                        case 104:
                            var2 = var3;
                        case 107:
                            if (var2) {
                                _fun94146_ip = 118;
                                continue _fun94146
                            }
                        case 110:
                            var0 = _closure3_slot0;
                            _closure2_slot1 = var0;
                        case 118:
                            var0 = undefined;
                            return var0;
                    }
                };
                var _closure2_slot2 = var6;
                var1 = var5.set;
                var1 = var1.length;
                var1 = var6 < var1;
                var6 = 0;
                if (!var1) {
                    _fun94145_ip = 239;
                    continue _fun94145
                }
            case 214:
                var1 = var2.bind(var4)();
                var6 = var6 + 1;
                _closure2_slot2 = var6;
                var1 = var5.set;
                var1 = var1.length;
                if (var6 < var1) {
                    _fun94145_ip = 214;
                    continue _fun94145
                }
            case 239:
                var2 = _closure2_slot1;
                var1 = null;
                if (!var2) {
                    _fun94145_ip = 271;
                    continue _fun94145
                }
            case 248:
                var4 = var5.test;
                var2 = _closure2_slot1;
                var2 = var4.bind(var5)(var2);
                var1 = null;
                if (!var2) {
                    _fun94145_ip = 271;
                    continue _fun94145
                }
            case 267:
                var1 = _closure2_slot1;
            case 271:
                return var1;
            case 273:
                var1 = _closure2_slot1;
                return var1;
            case 279:
                var0 = _closure2_slot1;
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12283, 12254, 12274]);