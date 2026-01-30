// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var2, var3, var4);
    var2.dataFormatterCache = var0;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function() { // Original name: FormatterCache, environment: var4
            var2 = this;
            var3 = _closure1_slot2;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = global;
            var3 = var1.Map;
            var4 = var3.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var3
                }
            });
            var7 = var4;
            var3 = new var7[var3](var6);
            var3 = var3 instanceof Object ? var3 : var4;
            var2.dateTime = var3;
            var3 = var1.Map;
            var4 = var3.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var3
                }
            });
            var7 = var4;
            var3 = new var7[var3](var6);
            var3 = var3 instanceof Object ? var3 : var4;
            var2.duration = var3;
            var3 = var1.Map;
            var4 = var3.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var3
                }
            });
            var7 = var4;
            var3 = new var7[var3](var6);
            var3 = var3 instanceof Object ? var3 : var4;
            var2.list = var3;
            var3 = var1.Map;
            var4 = var3.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var3
                }
            });
            var7 = var4;
            var3 = new var7[var3](var6);
            var3 = var3 instanceof Object ? var3 : var4;
            var2.number = var3;
            var3 = var1.Map;
            var4 = var3.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var3
                }
            });
            var7 = var4;
            var3 = new var7[var3](var6);
            var3 = var3 instanceof Object ? var3 : var4;
            var2.pluralRules = var3;
            var1 = var1.Map;
            var3 = var1.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var1
                }
            });
            var7 = var3;
            var1 = new var7[var1](var6);
            var1 = var1 instanceof Object ? var1 : var3;
            var2.relativeTime = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'getDateTimeFormatter';
        var0.key = var1;
        var1 = function() { // Original name: getDateTimeFormatter, environment: var4
            _fun13741: for (var _fun13741_ip = 0;;) switch (_fun13741_ip) {
                case 0:
                    var4 = this;
                    var2 = undefined;
                    var1 = arguments.length;
                    var0 = global;
                    var0 = var0.Array;
                    var3 = var0.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var0
                        }
                    });
                    var9 = var3;
                    var8 = var1;
                    var0 = new var9[var0](var8, var7);
                    var3 = var0 instanceof Object ? var0 : var3;
                    var0 = 0;
                    var5 = var0 < var1;
                    if (!var5) {
                        _fun13741_ip = 63;
                        continue _fun13741
                    }
                case 48:
                    var5 = arguments[var0];
                    var3[var0] = var5;
                    var0 = var0 + 1;
                    if (var0 < var1) {
                        _fun13741_ip = 48;
                        continue _fun13741
                    }
                case 63:
                    var2 = var4._getCached;
                    var1 = var4.dateTime;
                    var0 = function(arg0) { // Environment: var0
                        var3 = _closure1_slot0;
                        var1 = global;
                        var1 = var1.Intl;
                        var2 = var1.DateTimeFormat;
                        var4 = _closure1_slot1;
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var4.bind(var1)(var0);
                        var0 = var3.bind(var1)(var2, var0);
                        return var0;
                    };
                    var0 = var2.bind(var4)(var1, var3, var0);
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(8);
        var1[0] = var0;
        var0 = {};
        var5 = 'getDurationFormatter';
        var0.key = var5;
        var5 = function() { // Original name: getDurationFormatter, environment: var4
            _fun13743: for (var _fun13743_ip = 0;;) switch (_fun13743_ip) {
                case 0:
                    var4 = this;
                    var2 = undefined;
                    var1 = arguments.length;
                    var0 = global;
                    var0 = var0.Array;
                    var3 = var0.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var0
                        }
                    });
                    var9 = var3;
                    var8 = var1;
                    var0 = new var9[var0](var8, var7);
                    var3 = var0 instanceof Object ? var0 : var3;
                    var0 = 0;
                    var5 = var0 < var1;
                    if (!var5) {
                        _fun13743_ip = 63;
                        continue _fun13743
                    }
                case 48:
                    var5 = arguments[var0];
                    var3[var0] = var5;
                    var0 = var0 + 1;
                    if (var0 < var1) {
                        _fun13743_ip = 48;
                        continue _fun13743
                    }
                case 63:
                    var2 = var4._getCached;
                    var1 = var4.duration;
                    var0 = function(arg0) { // Environment: var0
                        var3 = _closure1_slot0;
                        var1 = global;
                        var1 = var1.Intl;
                        var2 = var1.DurationFormat;
                        var4 = _closure1_slot1;
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var4.bind(var1)(var0);
                        var0 = var3.bind(var1)(var2, var0);
                        return var0;
                    };
                    var0 = var2.bind(var4)(var1, var3, var0);
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'getListFormatter';
        var0.key = var5;
        var5 = function() { // Original name: getListFormatter, environment: var4
            _fun13745: for (var _fun13745_ip = 0;;) switch (_fun13745_ip) {
                case 0:
                    var4 = this;
                    var2 = undefined;
                    var1 = arguments.length;
                    var0 = global;
                    var0 = var0.Array;
                    var3 = var0.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var0
                        }
                    });
                    var9 = var3;
                    var8 = var1;
                    var0 = new var9[var0](var8, var7);
                    var3 = var0 instanceof Object ? var0 : var3;
                    var0 = 0;
                    var5 = var0 < var1;
                    if (!var5) {
                        _fun13745_ip = 63;
                        continue _fun13745
                    }
                case 48:
                    var5 = arguments[var0];
                    var3[var0] = var5;
                    var0 = var0 + 1;
                    if (var0 < var1) {
                        _fun13745_ip = 48;
                        continue _fun13745
                    }
                case 63:
                    var2 = var4._getCached;
                    var1 = var4.list;
                    var0 = function(arg0) { // Environment: var0
                        var3 = _closure1_slot0;
                        var1 = global;
                        var1 = var1.Intl;
                        var2 = var1.ListFormat;
                        var4 = _closure1_slot1;
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var4.bind(var1)(var0);
                        var0 = var3.bind(var1)(var2, var0);
                        return var0;
                    };
                    var0 = var2.bind(var4)(var1, var3, var0);
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'getNumberFormatter';
        var0.key = var5;
        var5 = function() { // Original name: getNumberFormatter, environment: var4
            _fun13747: for (var _fun13747_ip = 0;;) switch (_fun13747_ip) {
                case 0:
                    var4 = this;
                    var2 = undefined;
                    var1 = arguments.length;
                    var0 = global;
                    var0 = var0.Array;
                    var3 = var0.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var0
                        }
                    });
                    var9 = var3;
                    var8 = var1;
                    var0 = new var9[var0](var8, var7);
                    var3 = var0 instanceof Object ? var0 : var3;
                    var0 = 0;
                    var5 = var0 < var1;
                    if (!var5) {
                        _fun13747_ip = 63;
                        continue _fun13747
                    }
                case 48:
                    var5 = arguments[var0];
                    var3[var0] = var5;
                    var0 = var0 + 1;
                    if (var0 < var1) {
                        _fun13747_ip = 48;
                        continue _fun13747
                    }
                case 63:
                    var2 = var4._getCached;
                    var1 = var4.number;
                    var0 = function(arg0) { // Environment: var0
                        var3 = _closure1_slot0;
                        var1 = global;
                        var1 = var1.Intl;
                        var2 = var1.NumberFormat;
                        var4 = _closure1_slot1;
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var4.bind(var1)(var0);
                        var0 = var3.bind(var1)(var2, var0);
                        return var0;
                    };
                    var0 = var2.bind(var4)(var1, var3, var0);
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'getPluralRules';
        var0.key = var5;
        var5 = function() { // Original name: getPluralRules, environment: var4
            _fun13749: for (var _fun13749_ip = 0;;) switch (_fun13749_ip) {
                case 0:
                    var4 = this;
                    var2 = undefined;
                    var1 = arguments.length;
                    var0 = global;
                    var0 = var0.Array;
                    var3 = var0.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var0
                        }
                    });
                    var9 = var3;
                    var8 = var1;
                    var0 = new var9[var0](var8, var7);
                    var3 = var0 instanceof Object ? var0 : var3;
                    var0 = 0;
                    var5 = var0 < var1;
                    if (!var5) {
                        _fun13749_ip = 63;
                        continue _fun13749
                    }
                case 48:
                    var5 = arguments[var0];
                    var3[var0] = var5;
                    var0 = var0 + 1;
                    if (var0 < var1) {
                        _fun13749_ip = 48;
                        continue _fun13749
                    }
                case 63:
                    var2 = var4._getCached;
                    var1 = var4.pluralRules;
                    var0 = function(arg0) { // Environment: var0
                        var3 = _closure1_slot0;
                        var1 = global;
                        var1 = var1.Intl;
                        var2 = var1.PluralRules;
                        var4 = _closure1_slot1;
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var4.bind(var1)(var0);
                        var0 = var3.bind(var1)(var2, var0);
                        return var0;
                    };
                    var0 = var2.bind(var4)(var1, var3, var0);
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'getRelativeTimeFormatter';
        var0.key = var5;
        var5 = function() { // Original name: getRelativeTimeFormatter, environment: var4
            _fun13751: for (var _fun13751_ip = 0;;) switch (_fun13751_ip) {
                case 0:
                    var4 = this;
                    var2 = undefined;
                    var1 = arguments.length;
                    var0 = global;
                    var0 = var0.Array;
                    var3 = var0.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var0
                        }
                    });
                    var9 = var3;
                    var8 = var1;
                    var0 = new var9[var0](var8, var7);
                    var3 = var0 instanceof Object ? var0 : var3;
                    var0 = 0;
                    var5 = var0 < var1;
                    if (!var5) {
                        _fun13751_ip = 63;
                        continue _fun13751
                    }
                case 48:
                    var5 = arguments[var0];
                    var3[var0] = var5;
                    var0 = var0 + 1;
                    if (var0 < var1) {
                        _fun13751_ip = 48;
                        continue _fun13751
                    }
                case 63:
                    var2 = var4._getCached;
                    var1 = var4.relativeTime;
                    var0 = function(arg0) { // Environment: var0
                        var3 = _closure1_slot0;
                        var1 = global;
                        var1 = var1.Intl;
                        var2 = var1.RelativeTimeFormat;
                        var4 = _closure1_slot1;
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var4.bind(var1)(var0);
                        var0 = var3.bind(var1)(var2, var0);
                        return var0;
                    };
                    var0 = var2.bind(var4)(var1, var3, var0);
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = '_getCached';
        var0.key = var5;
        var5 = function(arg0, arg1, arg2) { // Original name: _getCached, environment: var4
            _fun13753: for (var _fun13753_ip = 0;;) switch (_fun13753_ip) {
                case 0:
                    var4 = arg0;
                    var5 = arg1;
                    var1 = this;
                    var0 = var1._getKey;
                    var3 = var0.bind(var1)(var5);
                    var0 = var4.get;
                    var0 = var0.bind(var4)(var3);
                    if (var0) {
                        _fun13753_ip = 56;
                        continue _fun13753
                    }
                case 33:
                    var2 = arg2;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var5);
                    var2 = var4.set;
                    var2 = var2.bind(var4)(var3, var1);
                    return var1;
                case 56:
                    return var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = '_getKey';
        var0.key = var5;
        var4 = function() { // Original name: _getKey, environment: var4
            _fun13754: for (var _fun13754_ip = 0;;) switch (_fun13754_ip) {
                case 0:
                    var4 = undefined;
                    var3 = arguments.length;
                    var0 = global;
                    var1 = var0.Array;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var1
                        }
                    });
                    var7 = var2;
                    var6 = var3;
                    var1 = new var7[var1](var6, var5);
                    var2 = var1 instanceof Object ? var1 : var2;
                    var1 = 0;
                    var5 = var1 < var3;
                    if (!var5) {
                        _fun13754_ip = 60;
                        continue _fun13754
                    }
                case 45:
                    var5 = arguments[var1];
                    var2[var1] = var5;
                    var1 = var1 + 1;
                    if (var1 < var3) {
                        _fun13754_ip = 45;
                        continue _fun13754
                    }
                case 60:
                    var1 = var0.JSON;
                    var0 = var1.stringify;
                    var0 = var0.bind(var1)(var2);
                    return var0;
            }
        };
        var0.value = var4;
        var1[7] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var10 = var3;
    var1 = new var10[var1](var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var2.dataFormatterCache = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [164, 65, 6, 7]);