// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = function arg0() {
        var0 = global;
        var2 = var0.URLSearchParams;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = arg0;
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var1 = var0 instanceof Object ? var0 : var1;
        var0 = var1.toString;
        var0 = var0.bind(var1)();
        return var0;
    };
    var _closure1_slot3 = var1;
    var0 = 0;
    var4 = var4[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = global;
    var7 = var4.Object;
    var6 = var7.defineProperty;
    var4 = var4.Symbol;
    var5 = var4.toStringTag;
    var4 = {};
    var8 = 'Module';
    var4.value = var8;
    var4 = var6.bind(var7)(var2, var5, var4);
    var4 = function arg0() {
        _fun10932: for (var _fun10932_ip = 0;;) switch (_fun10932_ip) {
            case 0:
                var1 = undefined;
                var6 = undefined;
                var0 = arg0;
                var3 = undefined;
                var4 = arguments.length;
                var5 = 1;
                if (!(var4 > var5)) {
                    _fun10932_ip = 27;
                    continue _fun10932
                }
            case 19:
                var4 = arguments[var5];
                if (!(var1 === var4)) {
                    _fun10932_ip = 55;
                    continue _fun10932
                }
            case 27:
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var5];
                var4 = var7.bind(var1)(var4);
                var4 = var4.debug;
                _fun10932_ip = 59;
                continue _fun10932;
            case 55:
                var4 = arguments[var5];
            case 59:
                var3 = var4;
            case 62: // try_start_0
                var4 = var0;
                var5 = 'string';
                var4 = typeof var4;
                if (!(var5 !== var4)) {
                    _fun10932_ip = 251;
                    continue _fun10932
                }
            case 79:
                var6 = var0;
                var4 = global;
                var5 = var4.URLSearchParams;
                var6 = var6 instanceof var5;
                var5 = var0;
                if (var6) {
                    _fun10932_ip = 232;
                    continue _fun10932
                }
            case 103:
                var4 = var4.FormData;
                var4 = var5 instanceof var4;
                if (var4) {
                    _fun10932_ip = 207;
                    continue _fun10932
                }
            case 116:
                var4 = var0;
                if (var4) {
                    _fun10932_ip = 132;
                    continue _fun10932
                }
            case 122:
                var4 = new Array(1);
                var4[0] = var1;
            case 130: // try_end0
                return var4;
            case 132:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 2;
                var4 = var7[var4];
                var4 = var6.bind(var1)(var4);
                var4 = var4.DEBUG_BUILD;
                if (!var4) {
                    _fun10932_ip = 187;
                    continue _fun10932
                }
            case 164:
                var8 = var3;
                var7 = var8.log;
                var6 = var0;
                var4 = 'Skipping network body because of body type';
                var4 = var7.bind(var8)(var4, var6);
            case 187:
                var4 = new Array(2);
                var4[0] = var1;
                var6 = 'UNPARSEABLE_BODY_TYPE';
                var4[1] = var6;
                return var4;
            case 207: // try_start_1
                var6 = _closure1_slot3;
                var4 = var0;
                var6 = var6.bind(var1)(var4);
                var4 = new Array(1);
                var4[0] = var6;
            case 230: // try_end1
                return var4;
            case 232: // try_start_2
                var4 = var5.toString;
                var5 = var4.bind(var5)();
                var4 = new Array(1);
                var4[0] = var5;
            case 249: // try_end2
                return var4;
            case 251: // try_start_3
                var5 = var0;
                var4 = new Array(1);
                var4[0] = var5;
            case 262: // try_end3
                return var4;
            case 264: // catch_target0 // catch_target1 // catch_target2 // catch_target3
                CatchBlockStart(arg_register = 2);
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 2;
                var4 = var6[var4];
                var4 = var5.bind(var1)(var4);
                var4 = var4.DEBUG_BUILD;
                if (!var4) {
                    _fun10932_ip = 325;
                    continue _fun10932
                }
            case 298:
                var5 = var3;
                var4 = var5.error;
                var3 = var2;
                var2 = var0;
                var0 = 'Failed to serialize body';
                var0 = var4.bind(var5)(var3, var0, var2);
            case 325:
                var0 = new Array(2);
                var0[0] = var1;
                var1 = 'BODY_PARSE_ERROR';
                var0[1] = var1;
                return var0;
        }
    };
    var2.getBodyString = var4;
    var4 = function() {
        _fun10933: for (var _fun10933_ip = 0;;) switch (_fun10933_ip) {
            case 0:
                var2 = undefined;
                var3 = undefined;
                var1 = arguments.length;
                var0 = 0;
                if (!(var1 > var0)) {
                    _fun10933_ip = 21;
                    continue _fun10933
                }
            case 13:
                var1 = arguments[var0];
                if (!(var2 === var1)) {
                    _fun10933_ip = 27;
                    continue _fun10933
                }
            case 21:
                var1 = new Array(0);
                _fun10933_ip = 31;
                continue _fun10933;
            case 27:
                var1 = arguments[var0];
            case 31:
                var3 = var1.length;
                var0 = 2;
                if (!(var0 === var3)) {
                    _fun10933_ip = 61;
                    continue _fun10933
                }
            case 43:
                var0 = 1;
                var3 = var1[var0];
                var4 = 'object';
                var3 = typeof var3;
                if (!(var4 !== var3)) {
                    _fun10933_ip = 63;
                    continue _fun10933
                }
            case 61:
                return var2;
            case 63:
                var0 = var1[var0];
                var0 = var0.body;
                return var0;
        }
    };
    var2.getFetchRequestArgBody = var4;
    var3 = function arg0() {
        _fun10934: for (var _fun10934_ip = 0;;) switch (_fun10934_ip) {
            case 0:
                var0 = arg0;
                var4 = undefined;
                var3 = undefined;
            case 7: // try_start_0
                var5 = var0;
                var2 = var5.getAllResponseHeaders;
                var3 = var2.bind(var5)();
            case 20: // try_end0
                var2 = var3;
                if (var2) {
                    _fun10934_ip = 30;
                    continue _fun10934
                }
            case 26:
                var2 = {};
                _fun10934_ip = 70;
                continue _fun10934;
            case 30:
                var6 = var3;
                var5 = var6.split;
                var3 = '\r\n';
                var7 = var5.bind(var6)(var3);
                var6 = var7.reduce;
                var5 = function(arg0, arg1) { // Environment: var3
                    _fun10935: for (var _fun10935_ip = 0;;) switch (_fun10935_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = arg1;
                            var2 = var3.split;
                            var1 = ': ';
                            var4 = var2.bind(var3)(var1);
                            var3 = _closure1_slot2;
                            var2 = undefined;
                            var1 = 2;
                            var2 = var3.bind(var2)(var4, var1);
                            var1 = 0;
                            var3 = var2[var1];
                            var1 = 1;
                            var2 = var2[var1];
                            if (!var2) {
                                _fun10935_ip = 70;
                                continue _fun10935
                            }
                        case 56:
                            var1 = var3.toLowerCase;
                            var1 = var1.bind(var3)();
                            var0[var1] = var2;
                        case 70:
                            return var0;
                    }
                };
                var3 = {};
                var2 = var6.bind(var7)(var5, var3);
            case 70:
                return var2;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 2;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var3 = var3.DEBUG_BUILD;
                if (!var3) {
                    _fun10934_ip = 156;
                    continue _fun10934
                }
            case 106:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 1;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var4 = var2.debug;
                var3 = var4.error;
                var2 = var1;
                var1 = var0;
                var0 = 'Failed to get xhr response headers';
                var0 = var3.bind(var4)(var2, var0, var1);
            case 156:
                var0 = {};
                return var0;
        }
    };
    var2.parseXhrResponseHeaders = var3;
    var2.serializeFormData = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 817, 1032]);