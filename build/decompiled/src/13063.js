// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var6;
    var0 = ['children', 'style', 'visible', 'size'];
    var _closure1_slot3 = var0;
    var0 = ['backgroundColor'];
    var _closure1_slot4 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 2;
    var5 = var6[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var5 = var3.Animated;
    var _closure1_slot8 = var5;
    var5 = var3.StyleSheet;
    var _closure1_slot9 = var5;
    var3 = 4;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot10 = var3;
    var4 = var5.create;
    var3 = {};
    var6 = {
        'alignSelf': 'flex-end',
        'textAlign': 'center',
        'paddingHorizontal': 4,
        'overflow': 'hidden'
    };
    var3.container = var6;
    var3 = var4.bind(var5)(var3);
    var _closure1_slot11 = var3;
    var1 = function arg0() {
        _fun100582: for (var _fun100582_ip = 0;;) switch (_fun100582_ip) {
            case 0:
                var4 = arg0;
                var8 = var4.children;
                var5 = var4.style;
                var0 = var4.visible;
                var3 = undefined;
                var2 = var3 === var0;
                if (var2) {
                    _fun100582_ip = 33;
                    continue _fun100582
                }
            case 30:
                var2 = var0;
            case 33:
                var _closure2_slot0 = var2;
                var0 = var4.size;
                var15 = 18;
                if (!(var3 !== var0)) {
                    _fun100582_ip = 52;
                    continue _fun100582
                }
            case 49:
                var15 = var0;
            case 52:
                var1 = _closure1_slot6;
                var0 = _closure1_slot3;
                var7 = var1.bind(var3)(var4, var0);
                var13 = _closure1_slot7;
                var1 = var13.useState;
                var0 = function() { // Environment: var9
                    _fun100583: for (var _fun100583_ip = 0;;) switch (_fun100583_ip) {
                        case 0:
                            var0 = _closure1_slot8;
                            var2 = var0.Value;
                            var1 = _closure2_slot0;
                            var0 = 0;
                            if (!var1) {
                                _fun100583_ip = 28;
                                continue _fun100583
                            }
                        case 25:
                            var0 = 1;
                        case 28:
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var4 = var1;
                            var3 = var0;
                            var0 = new var4[var2](var3, var2);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                    }
                };
                var0 = var1.bind(var13)(var0);
                var6 = _closure1_slot5;
                var16 = 1;
                var0 = var6.bind(var3)(var0, var16);
                var4 = 0;
                var14 = var0[var4];
                var _closure2_slot1 = var14;
                var0 = var13.useState;
                var1 = var0.bind(var13)(var2);
                var0 = 2;
                var1 = var6.bind(var3)(var1, var0);
                var6 = var1[var4];
                var _closure2_slot2 = var6;
                var4 = var1[var16];
                var _closure2_slot3 = var4;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 5;
                var1 = var12[var1];
                var11 = var11.bind(var3)(var1);
                var1 = var11.useTheme;
                var1 = var1.bind(var11)();
                var12 = var13.useEffect;
                var11 = new Array(3);
                var11[0] = var14;
                var11[1] = var6;
                var11[2] = var2;
                var9 = function() { // Environment: var9
                    _fun100584: for (var _fun100584_ip = 0;;) switch (_fun100584_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            if (var1) {
                                _fun100584_ip = 16;
                                continue _fun100584
                            }
                        case 12:
                            var1 = undefined;
                            return var1;
                        case 16:
                            var4 = _closure1_slot8;
                            var3 = var4.timing;
                            var2 = _closure2_slot1;
                            var1 = {
                                'toValue': null,
                                'duration': 150,
                                'useNativeDriver': true
                            };
                            var6 = _closure2_slot0;
                            var5 = 0;
                            if (!var6) {
                                _fun100584_ip = 59;
                                continue _fun100584
                            }
                        case 56:
                            var5 = 1;
                        case 59:
                            var1.toValue = var5;
                            var3 = var3.bind(var4)(var2, var1);
                            var2 = var3.start;
                            var1 = function(arg0) { // Environment: var0
                                _fun100585: for (var _fun100585_ip = 0;;) switch (_fun100585_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var0 = var0.finished;
                                        if (!var0) {
                                            _fun100585_ip = 22;
                                            continue _fun100585
                                        }
                                    case 12:
                                        var1 = _closure2_slot0;
                                        var0 = !var1;
                                    case 22:
                                        if (!var0) {
                                            _fun100585_ip = 41;
                                            continue _fun100585
                                        }
                                    case 25:
                                        var2 = _closure2_slot3;
                                        var1 = undefined;
                                        var0 = false;
                                        var0 = var2.bind(var1)(var0);
                                    case 41:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                            var0 = function() { // Environment: var0
                                var1 = _closure2_slot1;
                                var0 = var1.stopAnimation;
                                var0 = var0.bind(var1)();
                                return var0;
                            };
                            return var0;
                    }
                };
                var9 = var12.bind(var13)(var9, var11);
                if (var6) {
                    _fun100582_ip = 229;
                    continue _fun100582
                }
            case 215:
                if (var2) {
                    _fun100582_ip = 222;
                    continue _fun100582
                }
            case 218:
                var2 = null;
                return var2;
            case 222:
                var2 = true;
                var2 = var4.bind(var3)(var2);
            case 229:
                var4 = _closure1_slot9;
                var2 = var4.flatten;
                var5 = var2.bind(var4)(var5);
                if (var5) {
                    _fun100582_ip = 249;
                    continue _fun100582
                }
            case 247:
                var5 = {};
            case 249:
                var2 = var5.backgroundColor;
                if (!(var3 === var2)) {
                    _fun100582_ip = 269;
                    continue _fun100582
                }
            case 258:
                var1 = var1.colors;
                var2 = var1.notification;
            case 269:
                var4 = _closure1_slot6;
                var1 = _closure1_slot4;
                var9 = var4.bind(var3)(var5, var1);
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 6;
                var1 = var5[var1];
                var1 = var4.bind(var3)(var1);
                var4 = var1.bind(var3)(var2);
                var1 = var4.isLight;
                var1 = var1.bind(var4)();
                var17 = 'white';
                var13 = var2;
                if (!var1) {
                    _fun100582_ip = 332;
                    continue _fun100582
                }
            case 328:
                var17 = 'black';
            case 332:
                var0 = var15 / var0;
                var4 = global;
                var5 = var4.Math;
                var2 = var5.floor;
                var1 = 3;
                var6 = var1 * var15;
                var1 = 4;
                var1 = var6 / var1;
                var12 = var2.bind(var5)(var1);
                var2 = _closure1_slot10;
                var1 = _closure1_slot8;
                var1 = var1.Text;
                var6 = var4.Object;
                var5 = var6.assign;
                var4 = {};
                var4.numberOfLines = var16;
                var11 = {};
                var19 = {};
                var20 = var14.interpolate;
                var18 = {};
                var21 = [0, 1];
                var18.inputRange = var21;
                var21 = [0.5, 1];
                var18.outputRange = var21;
                var18 = var20.bind(var14)(var18);
                var19.scale = var18;
                var18 = new Array(1);
                var18[0] = var19;
                var11.transform = var18;
                var11.color = var17;
                var16 = var15 - var16;
                var11.lineHeight = var16;
                var11.height = var15;
                var11.minWidth = var15;
                var11.opacity = var14;
                var11.backgroundColor = var13;
                var11.fontSize = var12;
                var11.borderRadius = var0;
                var0 = new Array(3);
                var0[0] = var11;
                var10 = _closure1_slot11;
                var10 = var10.container;
                var0[1] = var10;
                var0[2] = var9;
                var4.style = var0;
                var0 = {};
                var0.children = var8;
                var0 = var5.bind(var6)(var4, var7, var0);
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 29, 31, 27, 33, 1470, 5792]);