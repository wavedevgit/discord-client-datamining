// uikit-native/Timer.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun69388: for (var _fun69388_ip = 0;;) switch (_fun69388_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun69388_ip = 76;
                continue _fun69388;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot9 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var6 = 6;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.jsxs;
    var _closure1_slot8 = var6;
    var3 = var3.PureComponent;
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun69392: for (var _fun69392_ip = 0;;) switch (_fun69392_ip) {
                case 0:
                    var3 = arg0;
                    var5 = this;
                    var0 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var4 = undefined;
                    var0 = var0.bind(var4)(var5, var2);
                    var10 = new Array(1);
                    var10[0] = var3;
                    var0 = _closure1_slot6;
                    var9 = var0.bind(var4)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot9;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun69392_ip = 75;
                        continue _fun69392
                    }
                case 62:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var5, var10);
                    _fun69392_ip = 109;
                    continue _fun69392;
                case 75:
                    var7 = global;
                    var8 = var7.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot6;
                    var6 = var6.bind(var4)(var5);
                    var6 = var6.constructor;
                    var0 = var7.bind(var8)(var9, var10, var6);
                case 109:
                    var0 = var2.bind(var4)(var5, var0);
                    var _closure3_slot0 = var0;
                    var2 = function() { // Environment: var1
                        _fun69393: for (var _fun69393_ip = 0;;) switch (_fun69393_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var3 = var1.state;
                                var2 = var3.seconds;
                                var1 = var3.minutes;
                                var7 = var3.hours;
                                var6 = 1;
                                var5 = var2 + var6;
                                var8 = 60;
                                var4 = var1;
                                var3 = var7;
                                if (!(var5 >= var8)) {
                                    _fun69393_ip = 75;
                                    continue _fun69393
                                }
                            case 50:
                                var2 = var1 + var6;
                                var1 = var7;
                                if (!(var2 >= var8)) {
                                    _fun69393_ip = 67;
                                    continue _fun69393
                                }
                            case 61:
                                var1 = var7 + var6;
                                var2 = 0;
                            case 67:
                                var5 = 0;
                                var4 = var2;
                                var3 = var1;
                            case 75:
                                var2 = _closure3_slot0;
                                var1 = var2.setState;
                                var0 = {};
                                var0.seconds = var5;
                                var0.minutes = var4;
                                var0.hours = var3;
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0._incrementSecond = var2;
                    var1 = function() { // Environment: var1
                        _fun69394: for (var _fun69394_ip = 0;;) switch (_fun69394_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var2 = var1.state;
                                var1 = var2.seconds;
                                var9 = var2.minutes;
                                var7 = var2.hours;
                                var8 = 1;
                                var3 = var1 - var8;
                                var5 = var9;
                                var4 = var7;
                                var6 = var3;
                                if (!(var6 < var8)) {
                                    _fun69394_ip = 105;
                                    continue _fun69394
                                }
                            case 50:
                                if (!(!(var9 >= var8))) {
                                    _fun69394_ip = 86;
                                    continue _fun69394
                                }
                            case 54:
                                var10 = var9 < var8;
                                if (!var10) {
                                    _fun69394_ip = 65;
                                    continue _fun69394
                                }
                            case 61:
                                var10 = var7 >= var8;
                            case 65:
                                var2 = var9;
                                var1 = var7;
                                if (!var10) {
                                    _fun69394_ip = 84;
                                    continue _fun69394
                                }
                            case 74:
                                var1 = var7 - var8;
                                var3 = 59;
                                var2 = var3;
                            case 84:
                                _fun69394_ip = 96;
                                continue _fun69394;
                            case 86:
                                var2 = var9 - var8;
                                var3 = 59;
                                var1 = var7;
                            case 96:
                                var6 = var3;
                                var5 = var2;
                                var4 = var1;
                            case 105:
                                var1 = 0;
                                if (!(!(var6 <= var1))) {
                                    _fun69394_ip = 145;
                                    continue _fun69394
                                }
                            case 111:
                                var3 = _closure3_slot0;
                                var2 = var3.setState;
                                var1 = {};
                                var1.seconds = var6;
                                var1.minutes = var5;
                                var1.hours = var4;
                                var1 = var2.bind(var3)(var1);
                                _fun69394_ip = 197;
                                continue _fun69394;
                            case 145:
                                var1 = global;
                                var3 = var1.clearInterval;
                                var0 = _closure3_slot0;
                                var2 = var0._timerId;
                                var1 = undefined;
                                var2 = var3.bind(var1)(var2);
                                var2 = null;
                                var0._timerId = var2;
                                var0 = var0.props;
                                var0 = var0.onComplete;
                                if (!(var2 != var0)) {
                                    _fun69394_ip = 197;
                                    continue _fun69394
                                }
                            case 193:
                                var0 = var0.bind(var1)();
                            case 197:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0._decrementSecond = var1;
                    var5 = var3.seconds;
                    var2 = var3.minutes;
                    var1 = var3.hours;
                    var10 = var3.timestamp;
                    var4 = null;
                    var7 = var5;
                    var6 = var2;
                    var3 = var1;
                    if (!(var4 != var10)) {
                        _fun69392_ip = 339;
                        continue _fun69392
                    }
                case 187:
                    var9 = 0;
                    var7 = var5;
                    var6 = var2;
                    var3 = var1;
                    if (!(var10 > var9)) {
                        _fun69392_ip = 339;
                        continue _fun69392
                    }
                case 205:
                    var8 = global;
                    var5 = var8.Math;
                    var2 = var5.max;
                    var11 = var8.Date;
                    var1 = var11.now;
                    var1 = var1.bind(var11)();
                    var1 = var1 - var10;
                    var2 = var2.bind(var5)(var9, var1);
                    var1 = 1000;
                    var2 = var2 / var1;
                    var10 = var8.Math;
                    var9 = var10.floor;
                    var1 = 86400;
                    var5 = var2 % var1;
                    var2 = 3600;
                    var1 = var5 / var2;
                    var3 = var9.bind(var10)(var1);
                    var11 = var8.Math;
                    var9 = var11.floor;
                    var10 = var5 % var2;
                    var5 = 60;
                    var2 = var10 / var5;
                    var6 = var9.bind(var11)(var2);
                    var9 = var8.Math;
                    var8 = var9.floor;
                    var5 = var10 % var5;
                    var7 = var8.bind(var9)(var5);
                case 339:
                    var1 = {};
                    var8 = var4 != var7;
                    var5 = 0;
                    if (!var8) {
                        _fun69392_ip = 353;
                        continue _fun69392
                    }
                case 350:
                    var5 = var7;
                case 353:
                    var1.seconds = var5;
                    var7 = var4 != var6;
                    var5 = 0;
                    if (!var7) {
                        _fun69392_ip = 370;
                        continue _fun69392
                    }
                case 367:
                    var5 = var6;
                case 370:
                    var1.minutes = var5;
                    var4 = var4 != var3;
                    var2 = 0;
                    if (!var4) {
                        _fun69392_ip = 387;
                        continue _fun69392
                    }
                case 384:
                    var2 = var3;
                case 387:
                    var1.hours = var2;
                    var0.state = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'componentDidMount';
        var4.key = var0;
        var0 = function() {
            _fun69395: for (var _fun69395_ip = 0;;) switch (_fun69395_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.props;
                    var0 = var0.countdown;
                    var2 = global;
                    var4 = var2.setInterval;
                    if (var0) {
                        _fun69395_ip = 53;
                        continue _fun69395
                    }
                case 25:
                    var3 = var1._incrementSecond;
                    var2 = undefined;
                    var0 = 1000;
                    var0 = var4.bind(var2)(var3, var0);
                    var1._timerId = var0;
                    _fun69395_ip = 79;
                    continue _fun69395;
                case 53:
                    var3 = var1._decrementSecond;
                    var2 = undefined;
                    var0 = 1000;
                    var0 = var4.bind(var2)(var3, var0);
                    var1._timerId = var0;
                case 79:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'componentWillUnmount';
        var4.key = var6;
        var6 = function() {
            var2 = this;
            var0 = global;
            var3 = var0.clearInterval;
            var1 = var2._timerId;
            var0 = undefined;
            var1 = var3.bind(var0)(var1);
            var1 = null;
            var2._timerId = var1;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() {
            _fun69397: for (var _fun69397_ip = 0;;) switch (_fun69397_ip) {
                case 0:
                    var2 = this;
                    var0 = var2.props;
                    var4 = var0.style;
                    var1 = var0.hideHours;
                    var0 = var0.hideMinutes;
                    var3 = var2.state;
                    var2 = var3.seconds;
                    var5 = var3.minutes;
                    var8 = var3.hours;
                    if (!var1) {
                        _fun69397_ip = 61;
                        continue _fun69397
                    }
                case 51:
                    var7 = '';
                    var1 = 0;
                    if (!(var1 !== var8)) {
                        _fun69397_ip = 146;
                        continue _fun69397
                    }
                case 61:
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 7;
                    var1 = var6[var1];
                    var6 = undefined;
                    var10 = var3.bind(var6)(var1);
                    var9 = var10.padStart;
                    var1 = global;
                    var3 = var1.String;
                    var8 = var3.bind(var6)(var8);
                    var6 = 2;
                    var3 = '0';
                    var8 = var9.bind(var10)(var8, var6, var3);
                    var1 = var1.HermesInternal;
                    var6 = var1.concat;
                    var3 = '';
                    var1 = ':';
                    var7 = var6.bind(var3)(var8, var1);
                case 146:
                    if (!var0) {
                        _fun69397_ip = 159;
                        continue _fun69397
                    }
                case 149:
                    var6 = '';
                    var0 = 0;
                    if (!(var0 !== var5)) {
                        _fun69397_ip = 244;
                        continue _fun69397
                    }
                case 159:
                    var1 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 7;
                    var0 = var3[var0];
                    var3 = undefined;
                    var9 = var1.bind(var3)(var0);
                    var8 = var9.padStart;
                    var0 = global;
                    var1 = var0.String;
                    var5 = var1.bind(var3)(var5);
                    var3 = 2;
                    var1 = '0';
                    var5 = var8.bind(var9)(var5, var3, var1);
                    var0 = var0.HermesInternal;
                    var3 = var0.concat;
                    var1 = '';
                    var0 = ':';
                    var6 = var3.bind(var1)(var5, var0);
                case 244:
                    var0 = var7.length;
                    var1 = 0;
                    if (!(!(var0 > var1))) {
                        _fun69397_ip = 267;
                        continue _fun69397
                    }
                case 255:
                    var0 = var6.length;
                    var5 = var2;
                    if (!(var0 > var1)) {
                        _fun69397_ip = 327;
                        continue _fun69397
                    }
                case 267:
                    var3 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 7;
                    var0 = var1[var0];
                    var1 = undefined;
                    var8 = var3.bind(var1)(var0);
                    var3 = var8.padStart;
                    var0 = global;
                    var0 = var0.String;
                    var2 = var0.bind(var1)(var2);
                    var1 = 2;
                    var0 = '0';
                    var5 = var3.bind(var8)(var2, var1, var0);
                case 327:
                    var3 = _closure1_slot8;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 8;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.LegacyText;
                    var0 = {};
                    var0.style = var4;
                    var4 = 'timer';
                    var0.accessibilityRole = var4;
                    var4 = new Array(3);
                    var4[0] = var7;
                    var4[1] = var6;
                    var4[2] = var5;
                    var0.children = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = {
        'hideMinutes': false,
        'hideHours': false
    };
    var1.defaultProps = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/Timer.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 33, 22, 4839, 2]);