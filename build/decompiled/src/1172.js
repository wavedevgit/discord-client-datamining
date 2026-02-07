// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun12777: for (var _fun12777_ip = 0;;) switch (_fun12777_ip) {
        case 0:
            var2 = exports;
            var3 = this;
            var0 = require;
            var _closure1_slot0 = var0;
            var0 = dependencyMap;
            var _closure1_slot1 = var0;
            var0 = function arg0, arg1, arg2() {
                _fun12778: for (var _fun12778_ip = 0;;) switch (_fun12778_ip) {
                    case 0:
                        var3 = arg0;
                        var2 = arg1;
                        var1 = arg2;
                        var0 = undefined;
                        var5 = undefined;
                        var6 = arguments.length;
                        var4 = 3;
                        var7 = var6 > var4;
                        if (!var7) {
                            _fun12778_ip = 34;
                            continue _fun12778
                        }
                    case 26:
                        var6 = arguments[var4];
                        var7 = var0 !== var6;
                    case 34:
                        var6 = !var7;
                        if (!var7) {
                            _fun12778_ip = 44;
                            continue _fun12778
                        }
                    case 40:
                        var6 = arguments[var4];
                    case 44:
                        var4 = !var1;
                        if (var4) {
                            _fun12778_ip = 63;
                            continue _fun12778
                        }
                    case 50:
                        var5 = var3[var2];
                        if (!var5) {
                            _fun12778_ip = 60;
                            continue _fun12778
                        }
                    case 57:
                        var5 = !var6;
                    case 60:
                        var4 = var5;
                    case 63:
                        if (var4) {
                            _fun12778_ip = 70;
                            continue _fun12778
                        }
                    case 66:
                        var3[var2] = var1;
                    case 70:
                        return var0;
                }
            };
            var _closure1_slot4 = var0;
            var0 = global;
            var6 = var0.Object;
            var5 = var6.defineProperty;
            var4 = {};
            var0 = true;
            var4.value = var0;
            var0 = '__esModule';
            var0 = var5.bind(var6)(var2, var0, var4);
            var0 = var3;
            if (!var0) {
                _fun12777_ip = 75;
                continue _fun12777
            }
        case 69:
            var0 = var3.__awaiter;
        case 75:
            if (var0) {
                _fun12777_ip = 83;
                continue _fun12777
            }
        case 78:
            var0 = function(arg0, arg1, arg2, arg3) { // Environment: var1
                _fun12779: for (var _fun12779_ip = 0;;) switch (_fun12779_ip) {
                    case 0:
                        var2 = arg2;
                        var1 = arg0;
                        var _closure2_slot0 = var1;
                        var1 = arg1;
                        var _closure2_slot1 = var1;
                        var _closure2_slot2 = var2;
                        var1 = arg3;
                        var _closure2_slot3 = var1;
                        if (var2) {
                            _fun12779_ip = 48;
                            continue _fun12779
                        }
                    case 33:
                        var1 = global;
                        var1 = var1.Promise;
                        _closure2_slot2 = var1;
                        var2 = var1;
                    case 48:
                        var1 = var2.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var2
                            }
                        });
                        var4 = function(arg0, arg1) { // Environment: var0
                            _fun12780: for (var _fun12780_ip = 0;;) switch (_fun12780_ip) {
                                case 0:
                                    var1 = arg0;
                                    var _closure3_slot0 = var1;
                                    var1 = arg1;
                                    var _closure3_slot1 = var1;
                                    var1 = function arg0() {
                                        _fun12781: for (var _fun12781_ip = 0;;) switch (_fun12781_ip) {
                                            case 0:
                                                var0 = arg0;
                                            case 3: // try_start_0
                                                var2 = _closure3_slot4;
                                                var3 = _closure2_slot3;
                                                var1 = var3.next;
                                                var1 = var1.bind(var3)(var0);
                                                var0 = undefined;
                                                var0 = var2.bind(var0)(var1);
                                            case 34: // try_end0
                                                _fun12781_ip = 52;
                                                continue _fun12781;
                                            case 36: // catch_target0
                                                CatchBlockStart(arg_register = 2);
                                                var1 = _closure3_slot1;
                                                var0 = undefined;
                                                var0 = var1.bind(var0)(var2);
                                            case 52:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var _closure3_slot2 = var1;
                                    var1 = function arg0() {
                                        _fun12782: for (var _fun12782_ip = 0;;) switch (_fun12782_ip) {
                                            case 0:
                                                var0 = arg0;
                                            case 3: // try_start_0
                                                var2 = _closure3_slot4;
                                                var3 = _closure2_slot3;
                                                var1 = var3.throw;
                                                var1 = var1.bind(var3)(var0);
                                                var0 = undefined;
                                                var0 = var2.bind(var0)(var1);
                                            case 35: // try_end0
                                                _fun12782_ip = 53;
                                                continue _fun12782;
                                            case 37: // catch_target0
                                                CatchBlockStart(arg_register = 2);
                                                var1 = _closure3_slot1;
                                                var0 = undefined;
                                                var0 = var1.bind(var0)(var2);
                                            case 53:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var _closure3_slot3 = var1;
                                    var2 = function arg0() {
                                        _fun12783: for (var _fun12783_ip = 0;;) switch (_fun12783_ip) {
                                            case 0:
                                                var0 = arg0;
                                                var1 = var0.done;
                                                if (var1) {
                                                    _fun12783_ip = 54;
                                                    continue _fun12783
                                                }
                                            case 11:
                                                var3 = var0.value;
                                                var2 = function arg0() {
                                                    _fun12784: for (var _fun12784_ip = 0;;) switch (_fun12784_ip) {
                                                        case 0:
                                                            var0 = arg0;
                                                            var _closure5_slot0 = var0;
                                                            var3 = _closure2_slot2;
                                                            var3 = var0 instanceof var3;
                                                            if (var3) {
                                                                _fun12784_ip = 52;
                                                                continue _fun12784
                                                            }
                                                        case 23:
                                                            var3 = _closure2_slot2;
                                                            var2 = var3.prototype;
                                                            var2 = Object.create(var2, {
                                                                constructor: {
                                                                    value: var3
                                                                }
                                                            });
                                                            var4 = function(arg0) { // Environment: var1
                                                                var2 = _closure5_slot0;
                                                                var1 = arg0;
                                                                var0 = undefined;
                                                                var1 = var1.bind(var0)(var2);
                                                                return var0;
                                                            };
                                                            var5 = var2;
                                                            var1 = new var5[var3](var4, var3);
                                                            var0 = var1 instanceof Object ? var1 : var2;
                                                        case 52:
                                                            return var0;
                                                    }
                                                };
                                                var1 = undefined;
                                                var4 = var2.bind(var1)(var3);
                                                var3 = var4.then;
                                                var2 = _closure3_slot2;
                                                var1 = _closure3_slot3;
                                                var1 = var3.bind(var4)(var2, var1);
                                                _fun12783_ip = 73;
                                                continue _fun12783;
                                            case 54:
                                                var2 = _closure3_slot0;
                                                var1 = var0.value;
                                                var0 = undefined;
                                                var0 = var2.bind(var0)(var1);
                                            case 73:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var _closure3_slot4 = var2;
                                    var5 = _closure2_slot3;
                                    var4 = var5.apply;
                                    var3 = _closure2_slot0;
                                    var1 = _closure2_slot1;
                                    if (var1) {
                                        _fun12780_ip = 70;
                                        continue _fun12780
                                    }
                                case 66:
                                    var1 = new Array(0);
                                case 70:
                                    var1 = var4.bind(var5)(var3, var1);
                                    _closure2_slot3 = var1;
                                    var0 = var1.next;
                                    var1 = var0.bind(var1)();
                                    var0 = undefined;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                            }
                        };
                        var5 = var1;
                        var0 = new var5[var2](var4, var3);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                }
            };
        case 83:
            var _closure1_slot2 = var0;
            var0 = undefined;
            var _closure1_slot3 = var0;
            var1 = function() {
                var0 = {};
                var1 = 'LogEnricher';
                var0.name = var1;
                var1 = function arg0() {
                    var3 = arg0;
                    var _closure3_slot0 = var3;
                    var2 = var3.on;
                    var1 = 'afterInit';
                    var0 = function() { // Environment: var0
                        var2 = function() {
                            var3 = _closure1_slot2;
                            var7 = this;
                            var4 = function*() { // Environment: var0
                                var0 = function*() { // Original name: ?anon_0_, environment: var0
                                    _fun12791: for (var _fun12791_ip = 0;;) switch (_fun12791_ip) {
                                        case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                            if (var1) {
                                                _fun12791_ip = 605;
                                                continue _fun12791
                                            }
                                        case 10:
                                            var12 = undefined;
                                            var9 = undefined;
                                        case 14: // try_start_0
                                            var2 = _closure1_slot0;
                                            var3 = _closure1_slot1;
                                            var1 = 1;
                                            var1 = var3[var1];
                                            var1 = var2.bind(var12)(var1);
                                            var2 = var1.NATIVE;
                                            var1 = var2.fetchNativeLogAttributes;
                                            var1 = var1.bind(var2)();
                                            SaveGenerator(address = 57);
                                        case 55:
                                            return var1;
                                        case 57:
                                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                            if (var2) {
                                                _fun12791_ip = 556;
                                                continue _fun12791
                                            }
                                        case 66:
                                            var9 = var1;
                                            var2 = global;
                                            var7 = var2.Object;
                                            var6 = var7.assign;
                                            var11 = var2.Object;
                                            var8 = var11.assign;
                                            var15 = var2.Object;
                                            var14 = var15.assign;
                                            var13 = null;
                                            var5 = var13 == var1;
                                            var16 = undefined;
                                            if (var5) {
                                                _fun12791_ip = 124;
                                                continue _fun12791
                                            }
                                        case 115:
                                            var5 = var9;
                                            var16 = var5.contexts;
                                        case 124:
                                            var _closure5_slot0 = var16;
                                            var5 = undefined;
                                            if (!(var13 !== var16)) {
                                                _fun12791_ip = 157;
                                                continue _fun12791
                                            }
                                        case 137:
                                            var16 = _closure5_slot0;
                                            var5 = undefined;
                                            if (!(var12 !== var16)) {
                                                _fun12791_ip = 157;
                                                continue _fun12791
                                            }
                                        case 147:
                                            var16 = _closure5_slot0;
                                            var5 = var16.device;
                                        case 157:
                                            var3 = var5;
                                            if (!var5) {
                                                _fun12791_ip = 321;
                                                continue _fun12791
                                            }
                                        case 166:
                                            var5 = {};
                                            var16 = var9;
                                            var16 = var16.contexts;
                                            var17 = var16.device;
                                            var _closure5_slot1 = var17;
                                            var16 = undefined;
                                            if (!(var13 !== var17)) {
                                                _fun12791_ip = 213;
                                                continue _fun12791
                                            }
                                        case 193:
                                            var17 = _closure5_slot1;
                                            var16 = undefined;
                                            if (!(var12 !== var17)) {
                                                _fun12791_ip = 213;
                                                continue _fun12791
                                            }
                                        case 203:
                                            var17 = _closure5_slot1;
                                            var16 = var17.brand;
                                        case 213:
                                            var5.brand = var16;
                                            var16 = var9;
                                            var16 = var16.contexts;
                                            var17 = var16.device;
                                            var _closure5_slot2 = var17;
                                            var16 = undefined;
                                            if (!(var13 !== var17)) {
                                                _fun12791_ip = 263;
                                                continue _fun12791
                                            }
                                        case 243:
                                            var17 = _closure5_slot2;
                                            var16 = undefined;
                                            if (!(var12 !== var17)) {
                                                _fun12791_ip = 263;
                                                continue _fun12791
                                            }
                                        case 253:
                                            var17 = _closure5_slot2;
                                            var16 = var17.model;
                                        case 263:
                                            var5.model = var16;
                                            var16 = var9;
                                            var16 = var16.contexts;
                                            var17 = var16.device;
                                            var _closure5_slot3 = var17;
                                            var16 = undefined;
                                            if (!(var13 !== var17)) {
                                                _fun12791_ip = 313;
                                                continue _fun12791
                                            }
                                        case 293:
                                            var17 = _closure5_slot3;
                                            var16 = undefined;
                                            if (!(var12 !== var17)) {
                                                _fun12791_ip = 313;
                                                continue _fun12791
                                            }
                                        case 303:
                                            var17 = _closure5_slot3;
                                            var16 = var17.family;
                                        case 313:
                                            var5.family = var16;
                                            var3 = var5;
                                        case 321:
                                            var5 = var3;
                                            var3 = {};
                                            var5 = var14.bind(var15)(var3, var5);
                                            var14 = var9;
                                            var14 = var13 == var14;
                                            var15 = undefined;
                                            if (var14) {
                                                _fun12791_ip = 353;
                                                continue _fun12791
                                            }
                                        case 344:
                                            var14 = var9;
                                            var15 = var14.contexts;
                                        case 353:
                                            var _closure5_slot4 = var15;
                                            var14 = undefined;
                                            if (!(var13 !== var15)) {
                                                _fun12791_ip = 383;
                                                continue _fun12791
                                            }
                                        case 363:
                                            var15 = _closure5_slot4;
                                            var14 = undefined;
                                            if (!(var12 !== var15)) {
                                                _fun12791_ip = 383;
                                                continue _fun12791
                                            }
                                        case 373:
                                            var15 = _closure5_slot4;
                                            var14 = var15.os;
                                        case 383:
                                            var3 = var14;
                                            if (!var14) {
                                                _fun12791_ip = 442;
                                                continue _fun12791
                                            }
                                        case 389:
                                            var14 = {};
                                            var15 = var9;
                                            var16 = var15.contexts;
                                            var16 = var16.os;
                                            var16 = var16.name;
                                            var14.os = var16;
                                            var15 = var15.contexts;
                                            var15 = var15.os;
                                            var15 = var15.version;
                                            var14.version = var15;
                                            var3 = var14;
                                        case 442:
                                            var5 = var8.bind(var11)(var5, var3);
                                            var8 = var9;
                                            var8 = var13 == var8;
                                            var11 = undefined;
                                            if (var8) {
                                                _fun12791_ip = 469;
                                                continue _fun12791
                                            }
                                        case 460:
                                            var8 = var9;
                                            var11 = var8.contexts;
                                        case 469:
                                            var _closure5_slot5 = var11;
                                            var8 = undefined;
                                            if (!(var13 !== var11)) {
                                                _fun12791_ip = 499;
                                                continue _fun12791
                                            }
                                        case 479:
                                            var11 = _closure5_slot5;
                                            var8 = undefined;
                                            if (!(var8 !== var11)) {
                                                _fun12791_ip = 499;
                                                continue _fun12791
                                            }
                                        case 489:
                                            var10 = _closure5_slot5;
                                            var8 = var10.release;
                                        case 499:
                                            var3 = var8;
                                            if (!var8) {
                                                _fun12791_ip = 527;
                                                continue _fun12791
                                            }
                                        case 505:
                                            var8 = {};
                                            var9 = var9.contexts;
                                            var9 = var9.release;
                                            var8.release = var9;
                                            var3 = var8;
                                        case 527:
                                            var3 = var6.bind(var7)(var5, var3);
                                            _closure1_slot3 = var3;
                                        case 537: // try_end0
                                            var3 = var2.Promise;
                                            var2 = var3.resolve;
                                            var2 = var2.bind(var3)();
                                            return var2;
                                        case 556:
                                            return var1;
                                        case 559: // catch_target0
                                            CatchBlockStart(arg_register = 5);
                                            var1 = global;
                                            var3 = var1.Promise;
                                            var2 = var3.reject;
                                            var1 = var1.HermesInternal;
                                            var4 = var1.concat;
                                            var1 = '[LOGS]: Failed to prepare attributes from Native Layer: ';
                                            var1 = var4.bind(var1)(var5);
                                            var1 = var2.bind(var3)(var1);
                                            return var1;
                                        case 605:
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            var8 = undefined;
                            var6 = undefined;
                            var5 = undefined;
                            var0 = var8[var3](var7, var6, var5, var4, var3);
                            return var0;
                        };
                        var0 = undefined;
                        var4 = var2.bind(var0)();
                        var3 = var4.then;
                        var2 = function() { // Environment: var1
                            var3 = _closure3_slot0;
                            var2 = var3.on;
                            var1 = 'beforeCaptureLog';
                            var0 = function(arg0) { // Environment: var0
                                _fun12793: for (var _fun12793_ip = 0;;) switch (_fun12793_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var7 = _closure3_slot0;
                                        var1 = _closure1_slot3;
                                        var0 = undefined;
                                        if (!(var0 !== var1)) {
                                            _fun12793_ip = 241;
                                            continue _fun12793
                                        }
                                    case 26:
                                        var1 = var2.attributes;
                                        var3 = null;
                                        if (!(var3 !== var1)) {
                                            _fun12793_ip = 42;
                                            continue _fun12793
                                        }
                                    case 38:
                                        if (!(var0 === var1)) {
                                            _fun12793_ip = 44;
                                            continue _fun12793
                                        }
                                    case 42:
                                        var1 = {};
                                    case 44:
                                        var5 = _closure1_slot4;
                                        var6 = _closure1_slot3;
                                        var8 = var6.brand;
                                        var6 = 'device.brand';
                                        var6 = var5.bind(var0)(var1, var6, var8);
                                        var6 = _closure1_slot3;
                                        var8 = var6.model;
                                        var6 = 'device.model';
                                        var6 = var5.bind(var0)(var1, var6, var8);
                                        var6 = _closure1_slot3;
                                        var8 = var6.family;
                                        var6 = 'device.family';
                                        var6 = var5.bind(var0)(var1, var6, var8);
                                        var6 = _closure1_slot3;
                                        var8 = var6.os;
                                        var6 = 'os.name';
                                        var6 = var5.bind(var0)(var1, var6, var8);
                                        var6 = _closure1_slot3;
                                        var8 = var6.version;
                                        var6 = 'os.version';
                                        var6 = var5.bind(var0)(var1, var6, var8);
                                        var4 = _closure1_slot3;
                                        var6 = var4.release;
                                        var4 = 'sentry.release';
                                        var4 = var5.bind(var0)(var1, var4, var6);
                                        var6 = var7.getIntegrationByName;
                                        var4 = 'MobileReplay';
                                        var6 = var6.bind(var7)(var4);
                                        var3 = var3 == var6;
                                        var4 = undefined;
                                        if (var3) {
                                            _fun12793_ip = 222;
                                            continue _fun12793
                                        }
                                    case 212:
                                        var3 = var6.getReplayId;
                                        var4 = var3.bind(var6)();
                                    case 222:
                                        var3 = 'sentry.replay_id';
                                        var3 = var5.bind(var0)(var1, var3, var4);
                                        var2.attributes = var1;
                                    case 241:
                                        return var0;
                                }
                            };
                            var0 = var2.bind(var3)(var1, var0);
                            var0 = undefined;
                            return var0;
                        };
                        var1 = function(arg0) { // Environment: var1
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var0 = 0;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var3 = var1.debug;
                            var2 = var3.log;
                            var1 = arg0;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
                };
                var0.setup = var1;
                return var0;
            };
            var2.logEnricherIntegration = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [817, 998]);