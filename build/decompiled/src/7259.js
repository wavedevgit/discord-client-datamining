// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var2 = {};
    var0 = true;
    var2.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var1, var0, var2);
    var0 = function() {
        _fun59375: for (var _fun59375_ip = 0;;) switch (_fun59375_ip) {
            case 0:
                var2 = global;
                var0 = var2.WeakSet;
                var3 = 'function';
                var0 = typeof var0;
                var0 = var3 === var0;
                var _closure2_slot0 = var0;
                if (var0) {
                    _fun59375_ip = 34;
                    continue _fun59375
                }
            case 28:
                var0 = new Array(0);
                _fun59375_ip = 60;
                continue _fun59375;
            case 34:
                var2 = var2.WeakSet;
                var3 = var2.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var2
                    }
                });
                var4 = var3;
                var2 = new var4[var2](var3);
                var0 = var2 instanceof Object ? var2 : var3;
            case 60:
                var _closure2_slot1 = var0;
                var0 = new Array(2);
                var2 = function arg0() {
                    _fun59376: for (var _fun59376_ip = 0;;) switch (_fun59376_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = _closure2_slot0;
                            var2 = _closure2_slot1;
                            if (var0) {
                                _fun59376_ip = 81;
                                continue _fun59376
                            }
                        case 17:
                            var0 = var2.length;
                            var4 = 0;
                            var0 = var4 < var0;
                            if (!var0) {
                                _fun59376_ip = 59;
                                continue _fun59376
                            }
                        case 31:
                            var0 = _closure2_slot1;
                            var0 = var0[var4];
                            if (!(var0 !== var3)) {
                                _fun59376_ip = 77;
                                continue _fun59376
                            }
                        case 43:
                            var4 = var4 + 1;
                            var0 = _closure2_slot1;
                            var0 = var0.length;
                            if (var4 < var0) {
                                _fun59376_ip = 31;
                                continue _fun59376
                            }
                        case 59:
                            var4 = _closure2_slot1;
                            var0 = var4.push;
                            var0 = var0.bind(var4)(var3);
                            var0 = false;
                            return var0;
                        case 77:
                            var0 = true;
                            return var0;
                        case 81:
                            var0 = var2.has;
                            var0 = var0.bind(var2)(var3);
                            var2 = !var0;
                            var0 = !var2;
                            if (!var2) {
                                _fun59376_ip = 116;
                                continue _fun59376
                            }
                        case 100:
                            var2 = _closure2_slot1;
                            var1 = var2.add;
                            var1 = var1.bind(var2)(var3);
                            var0 = false;
                        case 116:
                            return var0;
                    }
                };
                var0[0] = var2;
                var1 = function arg0() {
                    _fun59377: for (var _fun59377_ip = 0;;) switch (_fun59377_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            if (var3) {
                                _fun59377_ip = 85;
                                continue _fun59377
                            }
                        case 17:
                            var3 = var1.length;
                            var4 = 0;
                            var3 = var4 < var3;
                            if (!var3) {
                                _fun59377_ip = 95;
                                continue _fun59377
                            }
                        case 31:
                            var3 = _closure2_slot1;
                            var3 = var3[var4];
                            var5 = var4;
                            if (!(var3 !== var2)) {
                                _fun59377_ip = 64;
                                continue _fun59377
                            }
                        case 46:
                            var4 = var5 + 1;
                            var3 = _closure2_slot1;
                            var3 = var3.length;
                            if (var4 < var3) {
                                _fun59377_ip = 31;
                                continue _fun59377
                            }
                        case 62:
                            _fun59377_ip = 95;
                            continue _fun59377;
                        case 64:
                            var4 = _closure2_slot1;
                            var3 = var4.splice;
                            var0 = 1;
                            var0 = var3.bind(var4)(var5, var0);
                            _fun59377_ip = 95;
                            continue _fun59377;
                        case 85:
                            var0 = var1.delete;
                            var0 = var0.bind(var1)(var2);
                        case 95:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0[1] = var1;
                return var0;
        }
    };
    var1.memoBuilder = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);