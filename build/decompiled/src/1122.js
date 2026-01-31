// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun12279: for (var _fun12279_ip = 0;;) switch (_fun12279_ip) {
        case 0:
            var2 = exports;
            var3 = dependencyMap;
            var4 = this;
            var0 = require;
            var _closure1_slot0 = var0;
            var _closure1_slot1 = var3;
            var0 = function arg0, arg1() {
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var3 = _closure1_slot3;
                var7 = this;
                var4 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun12282: for (var _fun12282_ip = 0;;) switch (_fun12282_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun12282_ip = 316;
                                    continue _fun12282
                                }
                            case 10:
                                var7 = undefined;
                                var5 = undefined;
                                var2 = _closure2_slot0;
                                var3 = var2.exception;
                                var _closure2_slot2 = var3;
                                var8 = null;
                                var2 = undefined;
                                if (!(var8 !== var3)) {
                                    _fun12282_ip = 58;
                                    continue _fun12282
                                }
                            case 39:
                                var3 = _closure2_slot2;
                                var2 = undefined;
                                if (!(var7 !== var3)) {
                                    _fun12282_ip = 58;
                                    continue _fun12282
                                }
                            case 49:
                                var3 = _closure2_slot2;
                                var2 = var3.values;
                            case 58:
                                if (!var2) {
                                    _fun12282_ip = 87;
                                    continue _fun12282
                                }
                            case 61:
                                var2 = _closure2_slot0;
                                var2 = var2.exception;
                                var2 = var2.values;
                                var3 = var2.length;
                                var2 = 0;
                                if (!(!(var3 > var2))) {
                                    _fun12282_ip = 94;
                                    continue _fun12282
                                }
                            case 87:
                                var2 = _closure2_slot0;
                                return var2;
                            case 94:
                                var5 = null;
                            case 96: // try_start_0
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot1;
                                var2 = 1;
                                var2 = var4[var2];
                                var2 = var3.bind(var7)(var2);
                                var3 = var2.NATIVE;
                                var2 = var3.fetchViewHierarchy;
                                var2 = var2.bind(var3)();
                                SaveGenerator(address = 139);
                            case 137:
                                return var2;
                            case 139:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun12282_ip = 150;
                                    continue _fun12282
                                }
                            case 145:
                                var5 = var2;
                            case 148: // try_end0
                                _fun12282_ip = 201;
                                continue _fun12282;
                            case 150:
                                return var2;
                            case 153: // catch_target0
                                CatchBlockStart(arg_register = 6);
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot1;
                                var2 = 2;
                                var2 = var4[var2];
                                var2 = var3.bind(var7)(var2);
                                var4 = var2.debug;
                                var3 = var4.error;
                                var2 = 'Failed to get view hierarchy from native.';
                                var2 = var3.bind(var4)(var2, var6);
                            case 201:
                                var2 = var5;
                                if (!var2) {
                                    _fun12282_ip = 309;
                                    continue _fun12282
                                }
                            case 207:
                                var3 = _closure2_slot1;
                                var4 = {};
                                var6 = _closure1_slot4;
                                var4.filename = var6;
                                var6 = _closure1_slot5;
                                var4.contentType = var6;
                                var6 = _closure1_slot6;
                                var4.attachmentType = var6;
                                var4.data = var5;
                                var5 = new Array(1);
                                var5[0] = var4;
                                var4 = var5.concat;
                                var6 = _closure1_slot2;
                                var9 = var8 == var3;
                                var8 = undefined;
                                if (var9) {
                                    _fun12282_ip = 283;
                                    continue _fun12282
                                }
                            case 273:
                                var9 = _closure2_slot1;
                                var8 = var9.attachments;
                            case 283:
                                var2 = var8;
                                if (var8) {
                                    _fun12282_ip = 293;
                                    continue _fun12282
                                }
                            case 289:
                                var2 = new Array(0);
                            case 293:
                                var2 = var6.bind(var7)(var2);
                                var2 = var4.bind(var5)(var2);
                                var3.attachments = var2;
                            case 309:
                                var1 = _closure2_slot0;
                                return var1;
                            case 316:
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
            var _closure1_slot7 = var0;
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
                _fun12279_ip = 95;
                continue _fun12279
            }
        case 89:
            var3 = var4.__awaiter;
        case 95:
            if (var3) {
                _fun12279_ip = 103;
                continue _fun12279
            }
        case 98:
            var3 = function(arg0, arg1, arg2, arg3) { // Environment: var1
                _fun12283: for (var _fun12283_ip = 0;;) switch (_fun12283_ip) {
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
                            _fun12283_ip = 48;
                            continue _fun12283
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
                            _fun12284: for (var _fun12284_ip = 0;;) switch (_fun12284_ip) {
                                case 0:
                                    var1 = arg0;
                                    var _closure3_slot0 = var1;
                                    var1 = arg1;
                                    var _closure3_slot1 = var1;
                                    var1 = function arg0() {
                                        _fun12285: for (var _fun12285_ip = 0;;) switch (_fun12285_ip) {
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
                                                _fun12285_ip = 52;
                                                continue _fun12285;
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
                                        _fun12286: for (var _fun12286_ip = 0;;) switch (_fun12286_ip) {
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
                                                _fun12286_ip = 53;
                                                continue _fun12286;
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
                                        _fun12287: for (var _fun12287_ip = 0;;) switch (_fun12287_ip) {
                                            case 0:
                                                var0 = arg0;
                                                var1 = var0.done;
                                                if (var1) {
                                                    _fun12287_ip = 54;
                                                    continue _fun12287
                                                }
                                            case 11:
                                                var3 = var0.value;
                                                var2 = function arg0() {
                                                    _fun12288: for (var _fun12288_ip = 0;;) switch (_fun12288_ip) {
                                                        case 0:
                                                            var0 = arg0;
                                                            var _closure5_slot0 = var0;
                                                            var3 = _closure2_slot2;
                                                            var3 = var0 instanceof var3;
                                                            if (var3) {
                                                                _fun12288_ip = 52;
                                                                continue _fun12288
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
                                                _fun12287_ip = 73;
                                                continue _fun12287;
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
                                        _fun12284_ip = 70;
                                        continue _fun12284
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
            var3 = 'view-hierarchy.json';
            var _closure1_slot4 = var3;
            var3 = 'application/json';
            var _closure1_slot5 = var3;
            var3 = 'event.view_hierarchy';
            var _closure1_slot6 = var3;
            var1 = function() {
                var0 = {};
                var1 = 'ViewHierarchy';
                var0.name = var1;
                var1 = function() {
                    var0 = undefined;
                    return var0;
                };
                var0.setupOnce = var1;
                var1 = _closure1_slot7;
                var0.processEvent = var1;
                return var0;
            };
            var2.viewHierarchyIntegration = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 998, 817]);