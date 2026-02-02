// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var0 = function arg0, arg1, arg2() {
        _fun48621: for (var _fun48621_ip = 0;;) switch (_fun48621_ip) {
            case 0:
                var3 = arg0;
                var5 = arg2;
                var1 = _closure1_slot5;
                var2 = undefined;
                var0 = arg1;
                var8 = var1.bind(var2)(var0);
                var1 = _closure1_slot4;
                var0 = _closure1_slot8;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun48621_ip = 51;
                    continue _fun48621
                }
            case 38:
                var0 = var8.apply;
                var0 = var0.bind(var8)(var3, var5);
                _fun48621_ip = 92;
                continue _fun48621;
            case 51:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                if (var5) {
                    _fun48621_ip = 71;
                    continue _fun48621
                }
            case 67:
                var5 = new Array(0);
            case 71:
                var4 = _closure1_slot5;
                var4 = var4.bind(var2)(var3);
                var4 = var4.constructor;
                var0 = var6.bind(var7)(var8, var5, var4);
            case 92:
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function() {
        _fun48622: for (var _fun48622_ip = 0;;) switch (_fun48622_ip) {
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
            case 70: // try_end0
                _fun48622_ip = 74;
                continue _fun48622;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot8 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot8 = var0;
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
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var5[var3];
    var4 = var4.bind(var0)(var3);
    var3 = function(arg0) { // Environment: var1
        var3 = function() {
            _fun48626: for (var _fun48626_ip = 0;;) switch (_fun48626_ip) {
                case 0:
                    var4 = this;
                    var3 = undefined;
                    var7 = undefined;
                    var5 = _closure1_slot2;
                    var2 = _closure2_slot0;
                    var2 = var5.bind(var3)(var4, var2);
                    var5 = arguments.length;
                    var2 = global;
                    var2 = var2.Array;
                    var6 = var2.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var2
                        }
                    });
                    var12 = var6;
                    var11 = var5;
                    var2 = new var12[var2](var11, var10);
                    var6 = var2 instanceof Object ? var2 : var6;
                    var2 = 0;
                    var8 = var2 < var5;
                    if (!var8) {
                        _fun48626_ip = 85;
                        continue _fun48626
                    }
                case 70:
                    var8 = arguments[var2];
                    var6[var2] = var8;
                    var2 = var2 + 1;
                    if (var2 < var5) {
                        _fun48626_ip = 70;
                        continue _fun48626
                    }
                case 85:
                    var2 = _closure1_slot7;
                    var1 = _closure2_slot0;
                    var5 = new Array(0);
                    var0 = var5.concat;
                    var0 = var0.bind(var5)(var6);
                    var0 = var2.bind(var3)(var4, var1, var0);
                    var1 = 'UNKNOWN';
                    var0.channel = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot3;
        var4 = {};
        var5 = 'render';
        var4.key = var5;
        var0 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 5;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var0 = var1.warnUnimplementedFilter;
            var0 = var0.bind(var1)();
            var0 = null;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var3.bind(var0)(var4);
    var3 = {
        'type': 'identity',
        'tableValues': null,
        'slope': 1,
        'intercept': 0,
        'amplitude': 1,
        'exponent': 1,
        'offset': 0
    };
    var4 = new Array(0);
    var3.tableValues = var4;
    var6.defaultProps = var3;
    var3 = function(arg0) { // Environment: var1
        var2 = function() {
            _fun48629: for (var _fun48629_ip = 0;;) switch (_fun48629_ip) {
                case 0:
                    var4 = this;
                    var3 = undefined;
                    var7 = undefined;
                    var5 = _closure1_slot2;
                    var2 = _closure2_slot0;
                    var2 = var5.bind(var3)(var4, var2);
                    var5 = arguments.length;
                    var2 = global;
                    var2 = var2.Array;
                    var6 = var2.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var2
                        }
                    });
                    var12 = var6;
                    var11 = var5;
                    var2 = new var12[var2](var11, var10);
                    var6 = var2 instanceof Object ? var2 : var6;
                    var2 = 0;
                    var8 = var2 < var5;
                    if (!var8) {
                        _fun48629_ip = 85;
                        continue _fun48629
                    }
                case 70:
                    var8 = arguments[var2];
                    var6[var2] = var8;
                    var2 = var2 + 1;
                    if (var2 < var5) {
                        _fun48629_ip = 70;
                        continue _fun48629
                    }
                case 85:
                    var2 = _closure1_slot7;
                    var1 = _closure2_slot0;
                    var5 = new Array(0);
                    var0 = var5.concat;
                    var0 = var0.bind(var5)(var6);
                    var0 = var2.bind(var3)(var4, var1, var0);
                    var1 = 'R';
                    var0.channel = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot6;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot3;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var5 = var3.bind(var0)(var6);
    var3 = 'FeFuncR';
    var5.displayName = var3;
    var3 = function(arg0) { // Environment: var1
        var2 = function() {
            _fun48631: for (var _fun48631_ip = 0;;) switch (_fun48631_ip) {
                case 0:
                    var4 = this;
                    var3 = undefined;
                    var7 = undefined;
                    var5 = _closure1_slot2;
                    var2 = _closure2_slot0;
                    var2 = var5.bind(var3)(var4, var2);
                    var5 = arguments.length;
                    var2 = global;
                    var2 = var2.Array;
                    var6 = var2.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var2
                        }
                    });
                    var12 = var6;
                    var11 = var5;
                    var2 = new var12[var2](var11, var10);
                    var6 = var2 instanceof Object ? var2 : var6;
                    var2 = 0;
                    var8 = var2 < var5;
                    if (!var8) {
                        _fun48631_ip = 85;
                        continue _fun48631
                    }
                case 70:
                    var8 = arguments[var2];
                    var6[var2] = var8;
                    var2 = var2 + 1;
                    if (var2 < var5) {
                        _fun48631_ip = 70;
                        continue _fun48631
                    }
                case 85:
                    var2 = _closure1_slot7;
                    var1 = _closure2_slot0;
                    var5 = new Array(0);
                    var0 = var5.concat;
                    var0 = var0.bind(var5)(var6);
                    var0 = var2.bind(var3)(var4, var1, var0);
                    var1 = 'G';
                    var0.channel = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot6;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot3;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var4 = var3.bind(var0)(var6);
    var3 = 'FeFuncG';
    var4.displayName = var3;
    var3 = function(arg0) { // Environment: var1
        var2 = function() {
            _fun48633: for (var _fun48633_ip = 0;;) switch (_fun48633_ip) {
                case 0:
                    var4 = this;
                    var3 = undefined;
                    var7 = undefined;
                    var5 = _closure1_slot2;
                    var2 = _closure2_slot0;
                    var2 = var5.bind(var3)(var4, var2);
                    var5 = arguments.length;
                    var2 = global;
                    var2 = var2.Array;
                    var6 = var2.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var2
                        }
                    });
                    var12 = var6;
                    var11 = var5;
                    var2 = new var12[var2](var11, var10);
                    var6 = var2 instanceof Object ? var2 : var6;
                    var2 = 0;
                    var8 = var2 < var5;
                    if (!var8) {
                        _fun48633_ip = 85;
                        continue _fun48633
                    }
                case 70:
                    var8 = arguments[var2];
                    var6[var2] = var8;
                    var2 = var2 + 1;
                    if (var2 < var5) {
                        _fun48633_ip = 70;
                        continue _fun48633
                    }
                case 85:
                    var2 = _closure1_slot7;
                    var1 = _closure2_slot0;
                    var5 = new Array(0);
                    var0 = var5.concat;
                    var0 = var0.bind(var5)(var6);
                    var0 = var2.bind(var3)(var4, var1, var0);
                    var1 = 'B';
                    var0.channel = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot6;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot3;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var3 = var3.bind(var0)(var6);
    var7 = 'FeFuncB';
    var3.displayName = var7;
    var1 = function(arg0) { // Environment: var1
        var2 = function() {
            _fun48635: for (var _fun48635_ip = 0;;) switch (_fun48635_ip) {
                case 0:
                    var4 = this;
                    var3 = undefined;
                    var7 = undefined;
                    var5 = _closure1_slot2;
                    var2 = _closure2_slot0;
                    var2 = var5.bind(var3)(var4, var2);
                    var5 = arguments.length;
                    var2 = global;
                    var2 = var2.Array;
                    var6 = var2.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var2
                        }
                    });
                    var12 = var6;
                    var11 = var5;
                    var2 = new var12[var2](var11, var10);
                    var6 = var2 instanceof Object ? var2 : var6;
                    var2 = 0;
                    var8 = var2 < var5;
                    if (!var8) {
                        _fun48635_ip = 85;
                        continue _fun48635
                    }
                case 70:
                    var8 = arguments[var2];
                    var6[var2] = var8;
                    var2 = var2 + 1;
                    if (var2 < var5) {
                        _fun48635_ip = 70;
                        continue _fun48635
                    }
                case 85:
                    var2 = _closure1_slot7;
                    var1 = _closure2_slot0;
                    var5 = new Array(0);
                    var0 = var5.concat;
                    var0 = var0.bind(var5)(var6);
                    var0 = var2.bind(var3)(var4, var1, var0);
                    var1 = 'A';
                    var0.channel = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot6;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot3;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1 = var1.bind(var0)(var6);
    var7 = 'FeFuncA';
    var1.displayName = var7;
    var2.default = var6;
    var2.FeFuncR = var5;
    var2.FeFuncG = var4;
    var2.FeFuncB = var3;
    var2.FeFuncA = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 5440, 5463]);