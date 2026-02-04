// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun12268: for (var _fun12268_ip = 0;;) switch (_fun12268_ip) {
        case 0:
            var2 = exports;
            var3 = dependencyMap;
            var4 = this;
            var0 = require;
            var _closure1_slot0 = var0;
            var _closure1_slot1 = var3;
            var0 = function arg0, arg1, arg2() {
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var1 = arg2;
                var _closure2_slot2 = var1;
                var3 = _closure1_slot3;
                var7 = this;
                var4 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun12271: for (var _fun12271_ip = 0;;) switch (_fun12271_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun12271_ip = 325;
                                    continue _fun12271
                                }
                            case 10:
                                var2 = _closure2_slot0;
                                var4 = var2.exception;
                                var _closure2_slot3 = var4;
                                var9 = undefined;
                                var3 = null;
                                var2 = undefined;
                                if (!(var3 !== var4)) {
                                    _fun12271_ip = 56;
                                    continue _fun12271
                                }
                            case 37:
                                var4 = _closure2_slot3;
                                var2 = undefined;
                                if (!(var9 !== var4)) {
                                    _fun12271_ip = 56;
                                    continue _fun12271
                                }
                            case 47:
                                var4 = _closure2_slot3;
                                var2 = var4.values;
                            case 56:
                                if (!var2) {
                                    _fun12271_ip = 318;
                                    continue _fun12271
                                }
                            case 62:
                                var2 = _closure2_slot0;
                                var2 = var2.exception;
                                var2 = var2.values;
                                var2 = var2.length;
                                var6 = 0;
                                if (!(var2 > var6)) {
                                    _fun12271_ip = 318;
                                    continue _fun12271
                                }
                            case 91:
                                var4 = _closure2_slot2;
                                var2 = var4.getOptions;
                                var2 = var2.bind(var4)();
                                var _closure2_slot4 = var2;
                                var2 = var2.beforeScreenshot;
                                var _closure2_slot5 = var2;
                                var4 = undefined;
                                if (!(var3 !== var2)) {
                                    _fun12271_ip = 163;
                                    continue _fun12271
                                }
                            case 125:
                                var2 = _closure2_slot5;
                                var4 = undefined;
                                if (!(var9 !== var2)) {
                                    _fun12271_ip = 163;
                                    continue _fun12271
                                }
                            case 135:
                                var10 = _closure2_slot5;
                                var8 = var10.call;
                                var7 = _closure2_slot4;
                                var5 = _closure2_slot0;
                                var2 = _closure2_slot1;
                                var4 = var8.bind(var10)(var7, var5, var2);
                            case 163:
                                var2 = false;
                                if (!(var2 !== var4)) {
                                    _fun12271_ip = 318;
                                    continue _fun12271
                                }
                            case 172:
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot1;
                                var2 = 1;
                                var2 = var5[var2];
                                var2 = var4.bind(var9)(var2);
                                var4 = var2.NATIVE;
                                var2 = var4.captureScreenshot;
                                var2 = var2.bind(var4)();
                                SaveGenerator(address = 215);
                            case 213:
                                return var2;
                            case 215:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                                if (var4) {
                                    _fun12271_ip = 315;
                                    continue _fun12271
                                }
                            case 221:
                                var4 = var2;
                                if (!var4) {
                                    _fun12271_ip = 236;
                                    continue _fun12271
                                }
                            case 227:
                                var5 = var2.length;
                                var4 = var5 > var6;
                            case 236:
                                if (!var4) {
                                    _fun12271_ip = 308;
                                    continue _fun12271
                                }
                            case 239:
                                var4 = _closure2_slot1;
                                var7 = new Array(0);
                                var6 = var7.concat;
                                var5 = _closure1_slot2;
                                var5 = var5.bind(var9)(var2);
                                var8 = _closure1_slot2;
                                var10 = var3 == var4;
                                var3 = undefined;
                                if (var10) {
                                    _fun12271_ip = 284;
                                    continue _fun12271
                                }
                            case 274:
                                var10 = _closure2_slot1;
                                var3 = var10.attachments;
                            case 284:
                                if (var3) {
                                    _fun12271_ip = 291;
                                    continue _fun12271
                                }
                            case 287:
                                var3 = new Array(0);
                            case 291:
                                var3 = var8.bind(var9)(var3);
                                var3 = var6.bind(var7)(var5, var3);
                                var4.attachments = var3;
                            case 308:
                                var3 = _closure2_slot0;
                                return var3;
                            case 315:
                                return var2;
                            case 318:
                                var1 = _closure2_slot0;
                                return var1;
                            case 325:
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
            var _closure1_slot4 = var0;
            var0 = global;
            var7 = var0.Object;
            var6 = var7.defineProperty;
            var5 = {};
            var0 = true;
            var5.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var2, var0, var5);
            var0 = 0;
            var5 = var3[var0];
            var3 = arg2;
            var0 = undefined;
            var3 = var3.bind(var0)(var5);
            var _closure1_slot2 = var3;
            var3 = var4;
            if (!var3) {
                _fun12268_ip = 95;
                continue _fun12268
            }
        case 89:
            var3 = var4.__awaiter;
        case 95:
            if (var3) {
                _fun12268_ip = 103;
                continue _fun12268
            }
        case 98:
            var3 = function(arg0, arg1, arg2, arg3) { // Environment: var1
                _fun12272: for (var _fun12272_ip = 0;;) switch (_fun12272_ip) {
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
                            _fun12272_ip = 48;
                            continue _fun12272
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
                            _fun12273: for (var _fun12273_ip = 0;;) switch (_fun12273_ip) {
                                case 0:
                                    var1 = arg0;
                                    var _closure3_slot0 = var1;
                                    var1 = arg1;
                                    var _closure3_slot1 = var1;
                                    var1 = function arg0() {
                                        _fun12274: for (var _fun12274_ip = 0;;) switch (_fun12274_ip) {
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
                                                _fun12274_ip = 52;
                                                continue _fun12274;
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
                                        _fun12275: for (var _fun12275_ip = 0;;) switch (_fun12275_ip) {
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
                                                _fun12275_ip = 53;
                                                continue _fun12275;
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
                                        _fun12276: for (var _fun12276_ip = 0;;) switch (_fun12276_ip) {
                                            case 0:
                                                var0 = arg0;
                                                var1 = var0.done;
                                                if (var1) {
                                                    _fun12276_ip = 54;
                                                    continue _fun12276
                                                }
                                            case 11:
                                                var3 = var0.value;
                                                var2 = function arg0() {
                                                    _fun12277: for (var _fun12277_ip = 0;;) switch (_fun12277_ip) {
                                                        case 0:
                                                            var0 = arg0;
                                                            var _closure5_slot0 = var0;
                                                            var3 = _closure2_slot2;
                                                            var3 = var0 instanceof var3;
                                                            if (var3) {
                                                                _fun12277_ip = 52;
                                                                continue _fun12277
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
                                                _fun12276_ip = 73;
                                                continue _fun12276;
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
                                        _fun12273_ip = 70;
                                        continue _fun12273
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
        case 103:
            var _closure1_slot3 = var3;
            var1 = function() {
                var0 = {};
                var1 = 'Screenshot';
                var0.name = var1;
                var1 = function() {
                    var0 = undefined;
                    return var0;
                };
                var0.setupOnce = var1;
                var1 = _closure1_slot4;
                var0.processEvent = var1;
                return var0;
            };
            var2.screenshotIntegration = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 998]);