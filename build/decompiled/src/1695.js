// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = exports;
    var1 = global;
    var4 = var1.Object;
    var3 = var4.defineProperty;
    var2 = {};
    var1 = true;
    var2.value = var1;
    var1 = '__esModule';
    var1 = var3.bind(var4)(var0, var1, var2);
    var1 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun19294: for (var _fun19294_ip = 0;;) switch (_fun19294_ip) {
                case 0:
                    var3 = arg0;
                    var8 = undefined;
                    var1 = undefined;
                    var2 = arguments.length;
                    var0 = 1;
                    if (!(var2 > var0)) {
                        _fun19294_ip = 25;
                        continue _fun19294
                    }
                case 17:
                    var2 = arguments[var0];
                    if (!(var8 === var2)) {
                        _fun19294_ip = 29;
                        continue _fun19294
                    }
                case 25:
                    var6 = {};
                    _fun19294_ip = 33;
                    continue _fun19294;
                case 29:
                    var6 = arguments[var0];
                case 33:
                    var4 = var6.width;
                    var1 = var4;
                    if (!var4) {
                        _fun19294_ip = 61;
                        continue _fun19294
                    }
                case 44:
                    var0 = _closure2_slot0;
                    var0 = var0.matchPatterns;
                    var1 = var0[var4];
                case 61:
                    if (var1) {
                        _fun19294_ip = 87;
                        continue _fun19294
                    }
                case 64:
                    var0 = _closure2_slot0;
                    var2 = var0.matchPatterns;
                    var0 = var0.defaultMatchWidth;
                    var1 = var2[var0];
                case 87:
                    var0 = var3.match;
                    var0 = var0.bind(var3)(var1);
                    if (var0) {
                        _fun19294_ip = 105;
                        continue _fun19294
                    }
                case 101:
                    var1 = null;
                    return var1;
                case 105:
                    var7 = 0;
                    var1 = var0[var7];
                    var2 = var4;
                    if (!var2) {
                        _fun19294_ip = 134;
                        continue _fun19294
                    }
                case 117:
                    var0 = _closure2_slot0;
                    var0 = var0.parsePatterns;
                    var2 = var0[var4];
                case 134:
                    if (var2) {
                        _fun19294_ip = 160;
                        continue _fun19294
                    }
                case 137:
                    var0 = _closure2_slot0;
                    var4 = var0.parsePatterns;
                    var0 = var0.defaultParseWidth;
                    var2 = var4[var0];
                case 160:
                    var0 = global;
                    var4 = var0.Array;
                    var0 = var4.isArray;
                    var0 = var0.bind(var4)(var2);
                    var5 = var2;
                    if (var0) {
                        _fun19294_ip = 247;
                        continue _fun19294
                    }
                case 184:
                    var11 = var5;
                    var4 = undefined;
                    for (var2 in var11)
                        case 197: {
                            var4 = undefined;
                            case 208: var13 = var2;
                            var0 = var5.hasOwnProperty;
                            var0 = var0.bind(var5)(var13);
                            if (!var0) {
                                _fun19294_ip = 197;
                                continue _fun19294
                            }
                            case 225: var14 = var5[var13];
                            var0 = var14.test;
                            var0 = var0.bind(var14)(var1);
                            var4 = var13;
                            if (!var0) {
                                _fun19294_ip = 197;
                                continue _fun19294
                            }
                        }
                case 245:
                    _fun19294_ip = 303;
                    continue _fun19294;
                case 247:
                    var0 = var5.length;
                    var2 = var7 < var0;
                    var7 = 0;
                    var0 = undefined;
                    if (!var2) {
                        _fun19294_ip = 300;
                        continue _fun19294
                    }
                case 263:
                    var9 = var5[var7];
                    var2 = var9.test;
                    var2 = var2.bind(var9)(var1);
                    var0 = var7;
                    if (var2) {
                        _fun19294_ip = 300;
                        continue _fun19294
                    }
                case 283:
                    var7 = var7 + 1;
                    var2 = var5.length;
                    var2 = var7 < var2;
                    var0 = undefined;
                    if (var2) {
                        _fun19294_ip = 263;
                        continue _fun19294
                    }
                case 300:
                    var4 = var0;
                case 303:
                    var2 = _closure2_slot0;
                    var2 = var2.valueCallback;
                    var5 = var4;
                    if (!var2) {
                        _fun19294_ip = 337;
                        continue _fun19294
                    }
                case 322:
                    var2 = _closure2_slot0;
                    var0 = var2.valueCallback;
                    var5 = var0.bind(var2)(var4);
                case 337:
                    var0 = {};
                    var4 = var6.valueCallback;
                    var2 = var5;
                    if (!var4) {
                        _fun19294_ip = 362;
                        continue _fun19294
                    }
                case 351:
                    var4 = var6.valueCallback;
                    var2 = var4.bind(var6)(var5);
                case 362:
                    var0.value = var2;
                    var2 = var3.slice;
                    var1 = var1.length;
                    var1 = var2.bind(var3)(var1);
                    var0.rest = var1;
                    return var0;
            }
        };
        return var0;
    };
    var0.default = var1;
    var1 = var0.default;
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);