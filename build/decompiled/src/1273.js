// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var0 = function arg0, arg1() {
        _fun13731: for (var _fun13731_ip = 0;;) switch (_fun13731_ip) {
            case 0:
                var5 = undefined;
                var3 = undefined;
                var0 = arg0;
                var _closure2_slot0 = var0;
                var0 = arg1;
                var _closure2_slot1 = var0;
                var0 = function arg0() {
                    _fun13732: for (var _fun13732_ip = 0;;) switch (_fun13732_ip) {
                        case 0:
                            var6 = arg0;
                            var1 = _closure2_slot2;
                            var0 = var6;
                            if (!var1) {
                                _fun13732_ip = 65;
                                continue _fun13732
                            }
                        case 16:
                            var1 = global;
                            var4 = var1.Object;
                            var3 = var4.assign;
                            var5 = var1.Object;
                            var2 = var5.assign;
                            var1 = {};
                            var2 = var2.bind(var5)(var1, var6);
                            var1 = {};
                            var5 = 'lookup';
                            var1.localeMatcher = var5;
                            var0 = var3.bind(var4)(var2, var1);
                        case 65:
                            return var0;
                    }
                };
                var _closure2_slot3 = var0;
                var0 = arguments.length;
                var2 = 2;
                var0 = var0 > var2;
                if (!var0) {
                    _fun13731_ip = 50;
                    continue _fun13731
                }
            case 42:
                var4 = arguments[var2];
                var0 = var5 !== var4;
            case 50:
                if (!var0) {
                    _fun13731_ip = 57;
                    continue _fun13731
                }
            case 53:
                var0 = arguments[var2];
            case 57:
                var _closure2_slot2 = var0;
                var0 = {};
                var2 = function arg0, arg1() {
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var0 = 0;
                    var0 = var3[var0];
                    var5 = undefined;
                    var0 = var2.bind(var5)(var0);
                    var6 = var0.resolveFormatConfigOptions;
                    var1 = _closure2_slot1;
                    var4 = var1.date;
                    var1 = arg1;
                    var4 = var6.bind(var5)(var4, var1);
                    var1 = 1;
                    var1 = var3[var1];
                    var1 = var2.bind(var5)(var1);
                    var3 = var1.dataFormatterCache;
                    var2 = var3.getDateTimeFormatter;
                    var1 = _closure2_slot0;
                    var0 = _closure2_slot3;
                    var0 = var0.bind(var5)(var4);
                    var2 = var2.bind(var3)(var1, var0);
                    var1 = var2.format;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0.formatDate = var2;
                var2 = function arg0, arg1() {
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var0 = 0;
                    var0 = var3[var0];
                    var5 = undefined;
                    var0 = var2.bind(var5)(var0);
                    var6 = var0.resolveFormatConfigOptions;
                    var1 = _closure2_slot1;
                    var4 = var1.time;
                    var1 = arg1;
                    var4 = var6.bind(var5)(var4, var1);
                    var1 = 1;
                    var1 = var3[var1];
                    var1 = var2.bind(var5)(var1);
                    var3 = var1.dataFormatterCache;
                    var2 = var3.getDurationFormatter;
                    var1 = _closure2_slot0;
                    var0 = _closure2_slot3;
                    var0 = var0.bind(var5)(var4);
                    var2 = var2.bind(var3)(var1, var0);
                    var1 = var2.format;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0.formatDuration = var2;
                var2 = function arg0, arg1() {
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var0 = 0;
                    var0 = var3[var0];
                    var5 = undefined;
                    var0 = var2.bind(var5)(var0);
                    var6 = var0.resolveFormatConfigOptions;
                    var1 = _closure2_slot1;
                    var4 = var1.number;
                    var1 = arg1;
                    var4 = var6.bind(var5)(var4, var1);
                    var1 = 1;
                    var1 = var3[var1];
                    var1 = var2.bind(var5)(var1);
                    var3 = var1.dataFormatterCache;
                    var2 = var3.getNumberFormatter;
                    var1 = _closure2_slot0;
                    var0 = _closure2_slot3;
                    var0 = var0.bind(var5)(var4);
                    var2 = var2.bind(var3)(var1, var0);
                    var1 = var2.format;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0.formatNumber = var2;
                var2 = function arg0, arg1() {
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var0 = 0;
                    var0 = var3[var0];
                    var5 = undefined;
                    var0 = var2.bind(var5)(var0);
                    var6 = var0.resolveFormatConfigOptions;
                    var1 = _closure2_slot1;
                    var4 = var1.list;
                    var1 = arg1;
                    var4 = var6.bind(var5)(var4, var1);
                    var1 = 1;
                    var1 = var3[var1];
                    var1 = var2.bind(var5)(var1);
                    var3 = var1.dataFormatterCache;
                    var2 = var3.getListFormatter;
                    var1 = _closure2_slot0;
                    var0 = _closure2_slot3;
                    var0 = var0.bind(var5)(var4);
                    var2 = var2.bind(var3)(var1, var0);
                    var1 = var2.format;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0.formatList = var2;
                var2 = function arg0, arg1() {
                    _fun13737: for (var _fun13737_ip = 0;;) switch (_fun13737_ip) {
                        case 0:
                            var12 = arg0;
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var1 = 0;
                            var1 = var4[var1];
                            var7 = undefined;
                            var1 = var3.bind(var7)(var1);
                            var5 = var1.resolveFormatConfigOptions;
                            var3 = _closure2_slot1;
                            var4 = var3.list;
                            var3 = arg1;
                            var6 = var5.bind(var7)(var4, var3);
                            var5 = {};
                            var _closure3_slot0 = var5;
                            var10 = var12;
                            var3 = '$+/-$placeholder.';
                            for (var4 in var10)
                                case 80: {
                                    case 89: var13 = var4;
                                    var14 = var3 + var13;
                                    var13 = var12[var13];
                                    var5[var14] = var13;
                                    _fun13737_ip = 80;
                                    continue _fun13737;
                                }
                        case 106:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var2 = 1;
                            var2 = var4[var2];
                            var2 = var3.bind(var7)(var2);
                            var4 = var2.dataFormatterCache;
                            var3 = var4.getListFormatter;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot3;
                            var1 = var1.bind(var7)(var6);
                            var3 = var3.bind(var4)(var2, var1);
                            var2 = var3.formatToParts;
                            var1 = global;
                            var4 = var1.Object;
                            var1 = var4.keys;
                            var1 = var1.bind(var4)(var5);
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.map;
                            var0 = function(arg0) { // Environment: var0
                                _fun13738: for (var _fun13738_ip = 0;;) switch (_fun13738_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var2 = _closure3_slot0;
                                        var0 = var1.value;
                                        var0 = var2[var0];
                                        var2 = null;
                                        if (!(var2 !== var0)) {
                                            _fun13738_ip = 31;
                                            continue _fun13738
                                        }
                                    case 25:
                                        var2 = undefined;
                                        if (!(var2 === var0)) {
                                            _fun13738_ip = 36;
                                            continue _fun13738
                                        }
                                    case 31:
                                        var0 = var1.value;
                                    case 36:
                                        var1.value = var0;
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var0.formatListToParts = var2;
                var2 = function arg0, arg1, arg2() {
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var0 = 0;
                    var0 = var3[var0];
                    var5 = undefined;
                    var0 = var2.bind(var5)(var0);
                    var6 = var0.resolveFormatConfigOptions;
                    var1 = _closure2_slot1;
                    var4 = var1.relativeTime;
                    var1 = arg2;
                    var4 = var6.bind(var5)(var4, var1);
                    var1 = 1;
                    var1 = var3[var1];
                    var1 = var2.bind(var5)(var1);
                    var3 = var1.dataFormatterCache;
                    var2 = var3.getRelativeTimeFormatter;
                    var1 = _closure2_slot0;
                    var0 = _closure2_slot3;
                    var0 = var0.bind(var5)(var4);
                    var3 = var2.bind(var3)(var1, var0);
                    var2 = var3.format;
                    var1 = arg0;
                    var0 = arg1;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0.formatRelativeTime = var2;
                var2 = function arg0, arg1() {
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var0 = 0;
                    var0 = var3[var0];
                    var5 = undefined;
                    var0 = var2.bind(var5)(var0);
                    var6 = var0.resolveFormatConfigOptions;
                    var1 = _closure2_slot1;
                    var4 = var1.time;
                    var1 = arg1;
                    var4 = var6.bind(var5)(var4, var1);
                    var1 = 1;
                    var1 = var3[var1];
                    var1 = var2.bind(var5)(var1);
                    var3 = var1.dataFormatterCache;
                    var2 = var3.getDateTimeFormatter;
                    var1 = _closure2_slot0;
                    var0 = _closure2_slot3;
                    var0 = var0.bind(var5)(var4);
                    var2 = var2.bind(var3)(var1, var0);
                    var1 = var2.format;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0.formatTime = var2;
                var1 = function arg0() {
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 1;
                    var0 = var2[var0];
                    var5 = undefined;
                    var0 = var1.bind(var5)(var0);
                    var3 = var0.dataFormatterCache;
                    var2 = var3.getPluralRules;
                    var1 = _closure2_slot0;
                    var4 = _closure2_slot3;
                    var0 = arg0;
                    var0 = var4.bind(var5)(var0);
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0.getPluralRules = var1;
                return var0;
        }
    };
    var1.makeDataFormatters = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1274, 1275]);