// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var3;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 0;
    var4 = var3[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot2 = var3;
    var1 = function arg0() {
        var6 = arg0;
        var _closure2_slot0 = var6;
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var3 = 1;
        var7 = var5[var3];
        var0 = undefined;
        var8 = var4.bind(var0)(var7);
        var7 = var8.useNavigation;
        var7 = var7.bind(var8)();
        var _closure2_slot1 = var7;
        var3 = var5[var3];
        var4 = var4.bind(var0)(var3);
        var3 = var4.useRoute;
        var5 = var3.bind(var4)();
        var _closure2_slot2 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useEffect;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var5 = var5.key;
        var2[2] = var5;
        var1 = function() { // Environment: var1
            _fun17555: for (var _fun17555_ip = 0;;) switch (_fun17555_ip) {
                case 0:
                    var3 = new Array(0);
                    var _closure3_slot0 = var3;
                    var2 = _closure2_slot1;
                    var1 = 'tab';
                    if (!var2) {
                        _fun17555_ip = 69;
                        continue _fun17555
                    }
                case 24:
                    var4 = var2.getState;
                    var4 = var4.bind(var2)();
                    var4 = var4.type;
                    var5 = var2;
                    if (!(var1 === var4)) {
                        _fun17555_ip = 56;
                        continue _fun17555
                    }
                case 46:
                    var4 = var3.push;
                    var4 = var4.bind(var3)(var5);
                case 56:
                    var4 = var5.getParent;
                    var2 = var4.bind(var5)();
                    if (var2) {
                        _fun17555_ip = 24;
                        continue _fun17555
                    }
                case 69:
                    var2 = var3.length;
                    var1 = 0;
                    if (!(var1 === var2)) {
                        _fun17555_ip = 84;
                        continue _fun17555
                    }
                case 80:
                    var1 = undefined;
                    return var1;
                case 84:
                    var2 = var3.map;
                    var1 = function(arg0) { // Environment: var0
                        var3 = arg0;
                        var2 = var3.addListener;
                        var1 = 'tabPress';
                        var0 = function(arg0) { // Environment: var0
                            _fun17557: for (var _fun17557_ip = 0;;) switch (_fun17557_ip) {
                                case 0:
                                    var0 = arg0;
                                    var _closure5_slot0 = var0;
                                    var4 = _closure2_slot1;
                                    var0 = var4.isFocused;
                                    var0 = var0.bind(var4)();
                                    var _closure5_slot1 = var0;
                                    var3 = _closure3_slot0;
                                    var0 = var3.includes;
                                    var0 = var0.bind(var3)(var4);
                                    if (var0) {
                                        _fun17557_ip = 94;
                                        continue _fun17557
                                    }
                                case 50:
                                    var4 = _closure2_slot1;
                                    var3 = var4.getState;
                                    var3 = var3.bind(var4)();
                                    var4 = var3.routes;
                                    var3 = 0;
                                    var3 = var4[var3];
                                    var3 = var3.key;
                                    var2 = _closure2_slot2;
                                    var2 = var2.key;
                                    var0 = var3 === var2;
                                case 94:
                                    var _closure5_slot2 = var0;
                                    var0 = global;
                                    var2 = var0.requestAnimationFrame;
                                    var0 = undefined;
                                    var1 = function() { // Environment: var1
                                        _fun17558: for (var _fun17558_ip = 0;;) switch (_fun17558_ip) {
                                            case 0:
                                                var2 = _closure2_slot0;
                                                var0 = var2.current;
                                                var1 = null;
                                                var0 = var1 == var0;
                                                if (var0) {
                                                    _fun17558_ip = 162;
                                                    continue _fun17558
                                                }
                                            case 24:
                                                var3 = var2.current;
                                                var0 = 'scrollToTop';
                                                var0 = var0 in var3;
                                                if (var0) {
                                                    _fun17558_ip = 154;
                                                    continue _fun17558
                                                }
                                            case 40:
                                                var3 = var2.current;
                                                var0 = 'scrollTo';
                                                var0 = var0 in var3;
                                                if (var0) {
                                                    _fun17558_ip = 154;
                                                    continue _fun17558
                                                }
                                            case 56:
                                                var3 = var2.current;
                                                var0 = 'scrollToOffset';
                                                var0 = var0 in var3;
                                                if (var0) {
                                                    _fun17558_ip = 154;
                                                    continue _fun17558
                                                }
                                            case 72:
                                                var3 = var2.current;
                                                var0 = 'scrollResponderScrollTo';
                                                var0 = var0 in var3;
                                                if (var0) {
                                                    _fun17558_ip = 154;
                                                    continue _fun17558
                                                }
                                            case 88:
                                                var3 = var2.current;
                                                var0 = 'getScrollResponder';
                                                var0 = var0 in var3;
                                                var4 = var2.current;
                                                if (var0) {
                                                    _fun17558_ip = 142;
                                                    continue _fun17558
                                                }
                                            case 109:
                                                var0 = 'getNode';
                                                var0 = var0 in var4;
                                                var5 = var2.current;
                                                if (var0) {
                                                    _fun17558_ip = 130;
                                                    continue _fun17558
                                                }
                                            case 125:
                                                var0 = var5;
                                                _fun17558_ip = 140;
                                                continue _fun17558;
                                            case 130:
                                                var3 = var5.getNode;
                                                var0 = var3.bind(var5)();
                                            case 140:
                                                _fun17558_ip = 152;
                                                continue _fun17558;
                                            case 142:
                                                var3 = var4.getScrollResponder;
                                                var0 = var3.bind(var4)();
                                            case 152:
                                                _fun17558_ip = 159;
                                                continue _fun17558;
                                            case 154:
                                                var0 = var2.current;
                                            case 159:
                                                var1 = var0;
                                            case 162:
                                                var0 = _closure5_slot1;
                                                if (!var0) {
                                                    _fun17558_ip = 176;
                                                    continue _fun17558
                                                }
                                            case 172:
                                                var0 = _closure5_slot2;
                                            case 176:
                                                if (!var0) {
                                                    _fun17558_ip = 182;
                                                    continue _fun17558
                                                }
                                            case 179:
                                                var0 = var1;
                                            case 182:
                                                if (!var0) {
                                                    _fun17558_ip = 198;
                                                    continue _fun17558
                                                }
                                            case 185:
                                                var2 = _closure5_slot0;
                                                var2 = var2.defaultPrevented;
                                                var0 = !var2;
                                            case 198:
                                                if (!var0) {
                                                    _fun17558_ip = 327;
                                                    continue _fun17558
                                                }
                                            case 204:
                                                var0 = 'scrollToTop';
                                                var0 = var0 in var1;
                                                if (var0) {
                                                    _fun17558_ip = 317;
                                                    continue _fun17558
                                                }
                                            case 215:
                                                var0 = 'scrollTo';
                                                var0 = var0 in var1;
                                                if (var0) {
                                                    _fun17558_ip = 294;
                                                    continue _fun17558
                                                }
                                            case 226:
                                                var0 = 'scrollToOffset';
                                                var0 = var0 in var1;
                                                if (var0) {
                                                    _fun17558_ip = 271;
                                                    continue _fun17558
                                                }
                                            case 237:
                                                var0 = 'scrollResponderScrollTo';
                                                var0 = var0 in var1;
                                                if (!var0) {
                                                    _fun17558_ip = 327;
                                                    continue _fun17558
                                                }
                                            case 248:
                                                var2 = var1.scrollResponderScrollTo;
                                                var0 = {
                                                    'y': 0,
                                                    'animated': true
                                                };
                                                var0 = var2.bind(var1)(var0);
                                                _fun17558_ip = 327;
                                                continue _fun17558;
                                            case 271:
                                                var2 = var1.scrollToOffset;
                                                var0 = {
                                                    'offset': 0,
                                                    'animated': true
                                                };
                                                var0 = var2.bind(var1)(var0);
                                                _fun17558_ip = 327;
                                                continue _fun17558;
                                            case 294:
                                                var2 = var1.scrollTo;
                                                var0 = {
                                                    'y': 0,
                                                    'animated': true
                                                };
                                                var0 = var2.bind(var1)(var0);
                                                _fun17558_ip = 327;
                                                continue _fun17558;
                                            case 317:
                                                var0 = var1.scrollToTop;
                                                var0 = var0.bind(var1)();
                                            case 327:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                            }
                        };
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    var _closure3_slot1 = var1;
                    var0 = function() { // Environment: var0
                        var2 = _closure3_slot1;
                        var1 = var2.forEach;
                        var0 = function(arg0) { // Environment: var0
                            var1 = arg0;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1472]);