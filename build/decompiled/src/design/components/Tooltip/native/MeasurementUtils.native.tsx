// design/components/Tooltip/native/MeasurementUtils.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot3 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot2;
        var2 = function*(arg0, arg1, arg2, arg3) { // Environment: var2
            var0 = function*(arg0, arg1, arg2, arg3) { // Original name: ?anon_0_, environment: var0
                _fun57360: for (var _fun57360_ip = 0;;) switch (_fun57360_ip) {
                    case 0:
                        StartGenerator();
                        var11 = arg0;
                        var2 = arg1;
                        var3 = arg2;
                        var1 = arg3;
                        var10 = arguments[4];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 9);
                        if (var9) {
                            _fun57360_ip = 251;
                            continue _fun57360
                        }
                    case 27:
                        var5 = var11;
                        var _closure4_slot0 = var11;
                        var7 = var2;
                        var _closure4_slot1 = var2;
                        var _closure4_slot2 = var3;
                        var8 = var1;
                        var _closure4_slot3 = var1;
                        var2 = undefined;
                        if (!(var10 === var2)) {
                            _fun57360_ip = 60;
                            continue _fun57360
                        }
                    case 58:
                        var10 = 0;
                    case 60:
                        var _closure4_slot4 = var10;
                        var6 = undefined;
                        var _closure4_slot5 = var2;
                        SaveGenerator(address = 74);
                    case 72:
                        return var2;
                    case 74:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 9);
                        if (var9) {
                            _fun57360_ip = 248;
                            continue _fun57360
                        }
                    case 83:
                        var9 = 3;
                        if (!(!(var10 > var9))) {
                            _fun57360_ip = 241;
                            continue _fun57360
                        }
                    case 93: // try_start_0
                        var9 = var5;
                        var5 = function arg0() {
                            var1 = arg0;
                            var _closure5_slot0 = var1;
                            var1 = global;
                            var2 = var1.Promise;
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var3 = function(arg0, arg1) { // Environment: var0
                                _fun57362: for (var _fun57362_ip = 0;;) switch (_fun57362_ip) {
                                    case 0:
                                        var1 = arg1;
                                        var2 = arg0;
                                        var _closure6_slot0 = var2;
                                        var _closure6_slot1 = var1;
                                        var3 = _closure5_slot0;
                                        var4 = var3.current;
                                        var3 = null;
                                        if (!(var3 != var4)) {
                                            _fun57362_ip = 63;
                                            continue _fun57362
                                        }
                                    case 34:
                                        var2 = _closure5_slot0;
                                        var3 = var2.current;
                                        var2 = var3.measureInWindow;
                                        var0 = function(arg0, arg1, arg2, arg3) { // Environment: var0
                                            _fun57363: for (var _fun57363_ip = 0;;) switch (_fun57363_ip) {
                                                case 0:
                                                    var4 = arg2;
                                                    var3 = arg3;
                                                    var0 = 0;
                                                    if (!(var0 === var4)) {
                                                        _fun57363_ip = 16;
                                                        continue _fun57363
                                                    }
                                                case 12:
                                                    if (!(var0 !== var3)) {
                                                        _fun57363_ip = 66;
                                                        continue _fun57363
                                                    }
                                                case 16:
                                                    var2 = undefined;
                                                    if (!(var2 === var4)) {
                                                        _fun57363_ip = 26;
                                                        continue _fun57363
                                                    }
                                                case 22:
                                                    if (!(var2 !== var3)) {
                                                        _fun57363_ip = 66;
                                                        continue _fun57363
                                                    }
                                                case 26:
                                                    var1 = _closure6_slot0;
                                                    var0 = {};
                                                    var5 = arg0;
                                                    var0.x = var5;
                                                    var5 = arg1;
                                                    var0.y = var5;
                                                    var0.width = var4;
                                                    var0.height = var3;
                                                    var0 = var1.bind(var2)(var0);
                                                    var0 = undefined;
                                                    _fun57363_ip = 79;
                                                    continue _fun57363;
                                                case 66:
                                                    var2 = _closure6_slot1;
                                                    var1 = undefined;
                                                    var0 = var2.bind(var1)();
                                                case 79:
                                                    return var0;
                                            }
                                        };
                                        var0 = var2.bind(var3)(var0);
                                        var0 = undefined;
                                        return var0;
                                    case 63:
                                        var0 = undefined;
                                        var0 = var1.bind(var0)();
                                        return var0;
                                }
                            };
                            var4 = var1;
                            var0 = new var4[var2](var3, var2);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                        };
                        var5 = var5.bind(var2)(var9);
                        SaveGenerator(address = 110);
                    case 108:
                        return var5;
                    case 110:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 9);
                        if (var9) {
                            _fun57360_ip = 208;
                            continue _fun57360
                        }
                    case 116:
                        var6 = var5;
                        _closure4_slot5 = var5;
                        var10 = var8;
                        var9 = null;
                        if (!(var9 != var10)) {
                            _fun57360_ip = 200;
                            continue _fun57360
                        }
                    case 132:
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot1;
                        var9 = 1;
                        var9 = var11[var9];
                        var11 = var10.bind(var2)(var9);
                        var10 = var11.isEqual;
                        var9 = var6;
                        var8 = var10.bind(var11)(var9, var8);
                        if (var8) {
                            _fun57360_ip = 200;
                            continue _fun57360
                        }
                    case 173:
                        var8 = global;
                        var10 = var8.setTimeout;
                        var9 = function() { // Environment: var4
                            var5 = _closure1_slot3;
                            var9 = _closure4_slot0;
                            var8 = _closure4_slot1;
                            var7 = _closure4_slot2;
                            var6 = _closure4_slot5;
                            var10 = undefined;
                            var0 = var10[var5](var9, var8, var7, var6, var5);
                            return var0;
                        };
                        var8 = 500;
                        var8 = var10.bind(var2)(var9, var8);
                    case 198: // try_end0
                        _fun57360_ip = 238;
                        continue _fun57360;
                    case 200: // try_start_1
                        var6 = var7.bind(var2)(var6);
                    case 205: // try_end1
                        return var6;
                    case 208:
                        return var5;
                    case 211: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 5);
                        var5 = global;
                        var6 = var5.setTimeout;
                        var5 = function() { // Environment: var4
                            var6 = _closure1_slot3;
                            var11 = _closure4_slot0;
                            var10 = _closure4_slot1;
                            var9 = _closure4_slot2;
                            var8 = _closure4_slot3;
                            var1 = _closure4_slot4;
                            var0 = 1;
                            var7 = var1 + var0;
                            var12 = undefined;
                            var0 = var12[var6](var11, var10, var9, var8, var7, var6);
                            return var0;
                        };
                        var4 = 500;
                        var4 = var6.bind(var2)(var5, var4);
                    case 238:
                        return var2;
                    case 241:
                        var2 = var3.bind(var2)();
                        return var2;
                    case 248:
                        return var1;
                    case 251:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot4 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot4 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 2;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Tooltip/native/MeasurementUtils.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun57366: for (var _fun57366_ip = 0;;) switch (_fun57366_ip) {
            case 0:
                var1 = arguments[1];
                var2 = arg0;
                var _closure2_slot0 = var2;
                var2 = undefined;
                if (!(var1 === var2)) {
                    _fun57366_ip = 20;
                    continue _fun57366
                }
            case 18:
                var1 = false;
            case 20:
                var _closure2_slot1 = var1;
                var1 = global;
                var2 = var1.Promise;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var3 = function(arg0, arg1) { // Environment: var0
                    _fun57367: for (var _fun57367_ip = 0;;) switch (_fun57367_ip) {
                        case 0:
                            var5 = _closure1_slot3;
                            var4 = _closure2_slot0;
                            var0 = _closure2_slot1;
                            var3 = null;
                            if (!var0) {
                                _fun57367_ip = 37;
                                continue _fun57367
                            }
                        case 23:
                            var3 = {
                                'x': 0,
                                'y': 0,
                                'width': 0,
                                'height': 0
                            };
                        case 37:
                            var0 = undefined;
                            var8 = arg0;
                            var7 = arg1;
                            var10 = undefined;
                            var9 = var4;
                            var6 = var3;
                            var1 = var10[var5](var9, var8, var7, var6, var5);
                            return var0;
                    }
                };
                var4 = var1;
                var0 = new var4[var2](var3, var2);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
    };
    var2.getMeasurements = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 22, 2]);