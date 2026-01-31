// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var1 = function() { // Environment: var1
        var4 = _closure1_slot3;
        var3 = function() {
            var3 = _closure1_slot2;
            var2 = _closure2_slot0;
            var0 = undefined;
            var1 = this;
            var1 = var3.bind(var0)(var1, var2);
            return var0;
        };
        var _closure2_slot0 = var3;
        var0 = {};
        var2 = 'alert';
        var0.key = var2;
        var2 = function arg0, arg1, arg2, arg3() {
            _fun3225: for (var _fun3225_ip = 0;;) switch (_fun3225_ip) {
                case 0:
                    var6 = arg0;
                    var3 = arg1;
                    var8 = arg2;
                    var2 = arg3;
                    var _closure3_slot0 = var2;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var0 = 2;
                    var4 = var4[var0];
                    var0 = undefined;
                    var4 = var5.bind(var0)(var4);
                    var5 = var4.default;
                    if (!var5) {
                        _fun3225_ip = 293;
                        continue _fun3225
                    }
                case 54:
                    var4 = var5.getConstants;
                    var4 = var4.bind(var5)();
                    var _closure3_slot1 = var4;
                    var4 = {};
                    if (var6) {
                        _fun3225_ip = 77;
                        continue _fun3225
                    }
                case 73:
                    var6 = '';
                case 77:
                    var4.title = var6;
                    if (var3) {
                        _fun3225_ip = 88;
                        continue _fun3225
                    }
                case 84:
                    var3 = '';
                case 88:
                    var4.message = var3;
                    var3 = false;
                    var4.cancelable = var3;
                    var3 = var2;
                    if (!var3) {
                        _fun3225_ip = 111;
                        continue _fun3225
                    }
                case 105:
                    var3 = var2.cancelable;
                case 111:
                    if (!var3) {
                        _fun3225_ip = 126;
                        continue _fun3225
                    }
                case 114:
                    var2 = var2.cancelable;
                    var4.cancelable = var2;
                case 126:
                    if (var8) {
                        _fun3225_ip = 149;
                        continue _fun3225
                    }
                case 129:
                    var2 = {};
                    var3 = 'OK';
                    var2.text = var3;
                    var7 = new Array(1);
                    var7[0] = var2;
                    _fun3225_ip = 165;
                    continue _fun3225;
                case 149:
                    var6 = var8.slice;
                    var3 = 0;
                    var2 = 3;
                    var7 = var6.bind(var8)(var3, var2);
                case 165:
                    var2 = var7.pop;
                    var2 = var2.bind(var7)();
                    var _closure3_slot2 = var2;
                    var3 = var7.pop;
                    var3 = var3.bind(var7)();
                    var _closure3_slot3 = var3;
                    var6 = var7.pop;
                    var6 = var6.bind(var7)();
                    var _closure3_slot4 = var6;
                    if (!var6) {
                        _fun3225_ip = 228;
                        continue _fun3225
                    }
                case 210:
                    var6 = var6.text;
                    if (var6) {
                        _fun3225_ip = 222;
                        continue _fun3225
                    }
                case 218:
                    var6 = '';
                case 222:
                    var4.buttonNeutral = var6;
                case 228:
                    if (!var3) {
                        _fun3225_ip = 249;
                        continue _fun3225
                    }
                case 231:
                    var3 = var3.text;
                    if (var3) {
                        _fun3225_ip = 243;
                        continue _fun3225
                    }
                case 239:
                    var3 = '';
                case 243:
                    var4.buttonNegative = var3;
                case 249:
                    if (!var2) {
                        _fun3225_ip = 270;
                        continue _fun3225
                    }
                case 252:
                    var2 = var2.text;
                    if (var2) {
                        _fun3225_ip = 264;
                        continue _fun3225
                    }
                case 260:
                    var2 = 'OK';
                case 264:
                    var4.buttonPositive = var2;
                case 270:
                    var3 = var5.showAlert;
                    var2 = function arg0() {
                        var0 = global;
                        var2 = var0.console;
                        var1 = var2.warn;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1 = function arg0, arg1() {
                        _fun3227: for (var _fun3227_ip = 0;;) switch (_fun3227_ip) {
                            case 0:
                                var3 = arg0;
                                var2 = arg1;
                                var1 = _closure3_slot1;
                                var1 = var1.buttonClicked;
                                if (!(var3 !== var1)) {
                                    _fun3227_ip = 82;
                                    continue _fun3227
                                }
                            case 23:
                                var1 = _closure3_slot1;
                                var1 = var1.dismissed;
                                var1 = var3 === var1;
                                if (!var1) {
                                    _fun3227_ip = 44;
                                    continue _fun3227
                                }
                            case 40:
                                var1 = _closure3_slot0;
                            case 44:
                                if (!var1) {
                                    _fun3227_ip = 57;
                                    continue _fun3227
                                }
                            case 47:
                                var3 = _closure3_slot0;
                                var1 = var3.onDismiss;
                            case 57:
                                if (!var1) {
                                    _fun3227_ip = 206;
                                    continue _fun3227
                                }
                            case 63:
                                var3 = _closure3_slot0;
                                var1 = var3.onDismiss;
                                var1 = var1.bind(var3)();
                                _fun3227_ip = 206;
                                continue _fun3227;
                            case 82:
                                var1 = _closure3_slot1;
                                var1 = var1.buttonNeutral;
                                if (!(var2 !== var1)) {
                                    _fun3227_ip = 181;
                                    continue _fun3227
                                }
                            case 96:
                                var1 = _closure3_slot1;
                                var1 = var1.buttonNegative;
                                if (!(var2 !== var1)) {
                                    _fun3227_ip = 154;
                                    continue _fun3227
                                }
                            case 110:
                                var1 = _closure3_slot1;
                                var1 = var1.buttonPositive;
                                var1 = var2 === var1;
                                if (!var1) {
                                    _fun3227_ip = 136;
                                    continue _fun3227
                                }
                            case 127:
                                var2 = _closure3_slot2;
                                var1 = var2.onPress;
                            case 136:
                                if (!var1) {
                                    _fun3227_ip = 206;
                                    continue _fun3227
                                }
                            case 139:
                                var2 = _closure3_slot2;
                                var1 = var2.onPress;
                                var1 = var1.bind(var2)();
                                _fun3227_ip = 206;
                                continue _fun3227;
                            case 154:
                                var1 = _closure3_slot3;
                                var1 = var1.onPress;
                                if (!var1) {
                                    _fun3227_ip = 206;
                                    continue _fun3227
                                }
                            case 166:
                                var2 = _closure3_slot3;
                                var1 = var2.onPress;
                                var1 = var1.bind(var2)();
                                _fun3227_ip = 206;
                                continue _fun3227;
                            case 181:
                                var1 = _closure3_slot4;
                                var1 = var1.onPress;
                                if (!var1) {
                                    _fun3227_ip = 206;
                                    continue _fun3227
                                }
                            case 193:
                                var1 = _closure3_slot4;
                                var0 = var1.onPress;
                                var0 = var0.bind(var1)();
                            case 206:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var3.bind(var5)(var4, var2, var1);
                case 293:
                    return var0;
            }
        };
        var0.value = var2;
        var2 = new Array(2);
        var2[0] = var0;
        var0 = {};
        var5 = 'prompt';
        var0.key = var5;
        var1 = function arg0, arg1, arg2() {
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var2[1] = var0;
        var1 = undefined;
        var0 = null;
        var0 = var4.bind(var1)(var3, var0, var2);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 232]);