// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var3 = 0;
    var7 = var5[var3];
    var6 = metroImportAll;
    var0 = undefined;
    var6 = var6.bind(var0)(var7);
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useMemo;
    var _closure1_slot3 = var3;
    var1 = function(arg0, arg1) { // Original name: useAndroidRippleForView, environment: var1
        _fun5802: for (var _fun5802_ip = 0;;) switch (_fun5802_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var _closure2_slot0 = var1;
                var3 = null;
                if (!(var3 == var2)) {
                    _fun5802_ip = 20;
                    continue _fun5802
                }
            case 18:
                var2 = {};
            case 20:
                var6 = var2.color;
                var _closure2_slot1 = var6;
                var7 = var2.borderless;
                var _closure2_slot2 = var7;
                var4 = var2.radius;
                var _closure2_slot3 = var4;
                var3 = var2.cornerRadius;
                var _closure2_slot4 = var3;
                var5 = var2.foreground;
                var _closure2_slot5 = var5;
                var3 = _closure1_slot3;
                var2 = new Array(5);
                var2[0] = var7;
                var2[1] = var6;
                var2[2] = var5;
                var2[3] = var4;
                var2[4] = var1;
                var1 = undefined;
                var0 = function() { // Environment: var0
                    _fun5803: for (var _fun5803_ip = 0;;) switch (_fun5803_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var3 = null;
                            if (!(var3 == var0)) {
                                _fun5803_ip = 33;
                                continue _fun5803
                            }
                        case 15:
                            var0 = _closure2_slot2;
                            if (!(var3 == var0)) {
                                _fun5803_ip = 33;
                                continue _fun5803
                            }
                        case 23:
                            var0 = _closure2_slot3;
                            if (!(var3 == var0)) {
                                _fun5803_ip = 33;
                                continue _fun5803
                            }
                        case 31:
                            return var3;
                        case 33:
                            var5 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var0 = 1;
                            var0 = var7[var0];
                            var6 = undefined;
                            var4 = var5.bind(var6)(var0);
                            var0 = _closure2_slot1;
                            var0 = var4.bind(var6)(var0);
                            var4 = 2;
                            var4 = var7[var4];
                            var5 = var5.bind(var6)(var4);
                            var4 = var3 == var0;
                            if (var4) {
                                _fun5803_ip = 97;
                                continue _fun5803
                            }
                        case 86:
                            var7 = 'number';
                            var3 = typeof var0;
                            var4 = var7 === var3;
                        case 97:
                            var3 = 'Unexpected color given for Ripple color';
                            var3 = var5.bind(var6)(var4, var3);
                            var4 = {};
                            var3 = 'RippleAndroid';
                            var4.type = var3;
                            var4.color = var0;
                            var0 = _closure2_slot2;
                            var3 = true;
                            var0 = var3 === var0;
                            var4.borderless = var0;
                            var0 = _closure2_slot3;
                            var4.rippleRadius = var0;
                            var0 = _closure2_slot4;
                            var4.rippleCornerRadius = var0;
                            var0 = {};
                            var2 = _closure2_slot5;
                            if (!(var3 !== var2)) {
                                _fun5803_ip = 177;
                                continue _fun5803
                            }
                        case 168:
                            var2 = {};
                            var2.nativeBackgroundAndroid = var4;
                            _fun5803_ip = 187;
                            continue _fun5803;
                        case 177:
                            var3 = {};
                            var3.nativeForegroundAndroid = var4;
                            var2 = var3;
                        case 187:
                            var0.viewProps = var2;
                            var2 = function(arg0) { // Original name: onPressIn, environment: var1
                                _fun5804: for (var _fun5804_ip = 0;;) switch (_fun5804_ip) {
                                    case 0:
                                        var8 = arg0;
                                        var0 = _closure2_slot0;
                                        var3 = var0.current;
                                        var9 = null;
                                        if (!(var9 != var3)) {
                                            _fun5804_ip = 153;
                                            continue _fun5804
                                        }
                                    case 24:
                                        var5 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var4 = 3;
                                        var1 = var1[var4];
                                        var2 = undefined;
                                        var1 = var5.bind(var2)(var1);
                                        var7 = var1.Commands;
                                        var6 = var7.hotspotUpdate;
                                        var1 = var8.nativeEvent;
                                        var10 = var1.locationX;
                                        var11 = var9 != var10;
                                        var1 = 0;
                                        if (!var11) {
                                            _fun5804_ip = 85;
                                            continue _fun5804
                                        }
                                    case 82:
                                        var1 = var10;
                                    case 85:
                                        var8 = var8.nativeEvent;
                                        var8 = var8.locationY;
                                        var9 = var9 != var8;
                                        var5 = 0;
                                        if (!var9) {
                                            _fun5804_ip = 109;
                                            continue _fun5804
                                        }
                                    case 106:
                                        var5 = var8;
                                    case 109:
                                        var1 = var6.bind(var7)(var3, var1, var5);
                                        var1 = _closure1_slot0;
                                        var0 = _closure1_slot2;
                                        var0 = var0[var4];
                                        var0 = var1.bind(var2)(var0);
                                        var2 = var0.Commands;
                                        var1 = var2.setPressed;
                                        var0 = true;
                                        var0 = var1.bind(var2)(var3, var0);
                                    case 153:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0.onPressIn = var2;
                            var2 = function(arg0) { // Original name: onPressMove, environment: var1
                                _fun5805: for (var _fun5805_ip = 0;;) switch (_fun5805_ip) {
                                    case 0:
                                        var5 = arg0;
                                        var0 = _closure2_slot0;
                                        var4 = var0.current;
                                        var6 = null;
                                        if (!(var6 != var4)) {
                                            _fun5805_ip = 113;
                                            continue _fun5805
                                        }
                                    case 21:
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 3;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var0 = var2.bind(var0)(var1);
                                        var3 = var0.Commands;
                                        var2 = var3.hotspotUpdate;
                                        var0 = var5.nativeEvent;
                                        var7 = var0.locationX;
                                        var8 = var6 != var7;
                                        var0 = 0;
                                        if (!var8) {
                                            _fun5805_ip = 82;
                                            continue _fun5805
                                        }
                                    case 79:
                                        var0 = var7;
                                    case 82:
                                        var5 = var5.nativeEvent;
                                        var5 = var5.locationY;
                                        var6 = var6 != var5;
                                        var1 = 0;
                                        if (!var6) {
                                            _fun5805_ip = 106;
                                            continue _fun5805
                                        }
                                    case 103:
                                        var1 = var5;
                                    case 106:
                                        var0 = var2.bind(var3)(var4, var0, var1);
                                    case 113:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0.onPressMove = var2;
                            var1 = function(arg0) { // Original name: onPressOut, environment: var1
                                _fun5806: for (var _fun5806_ip = 0;;) switch (_fun5806_ip) {
                                    case 0:
                                        var0 = _closure2_slot0;
                                        var3 = var0.current;
                                        var0 = null;
                                        if (!(var0 != var3)) {
                                            _fun5806_ip = 63;
                                            continue _fun5806
                                        }
                                    case 18:
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 3;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var0 = var2.bind(var0)(var1);
                                        var2 = var0.Commands;
                                        var1 = var2.setPressed;
                                        var0 = false;
                                        var0 = var1.bind(var2)(var3, var0);
                                    case 63:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0.onPressOut = var1;
                            return var0;
                    }
                };
                var0 = var3.bind(var1)(var0, var2);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 38, 44, 115]);