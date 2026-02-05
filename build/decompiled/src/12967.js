// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var2, var3, var4);
    var3 = function arg0, arg1, arg2() {
        _fun99372: for (var _fun99372_ip = 0;;) switch (_fun99372_ip) {
            case 0:
                var0 = undefined;
                var2 = undefined;
                var3 = arguments.length;
                var1 = 3;
                if (!(var3 > var1)) {
                    _fun99372_ip = 22;
                    continue _fun99372
                }
            case 14:
                var3 = arguments[var1];
                if (!(var0 === var3)) {
                    _fun99372_ip = 57;
                    continue _fun99372
                }
            case 22:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 1;
                var3 = var5[var3];
                var4 = var4.bind(var0)(var3);
                var3 = var4.getActiveSpan;
                var3 = var3.bind(var4)();
                _fun99372_ip = 61;
                continue _fun99372;
            case 57:
                var3 = arguments[var1];
            case 61:
                var4 = var3;
                if (!var4) {
                    _fun99372_ip = 101;
                    continue _fun99372
                }
            case 67:
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 1;
                var1 = var5[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.getRootSpan;
                var4 = var1.bind(var2)(var3);
            case 101:
                if (!var4) {
                    _fun99372_ip = 189;
                    continue _fun99372
                }
            case 104:
                var3 = var4.addEvent;
                var6 = _closure1_slot2;
                var2 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 2;
                var5 = var7[var1];
                var5 = var2.bind(var0)(var5);
                var9 = var5.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE;
                var8 = {};
                var5 = arg1;
                var5 = var6.bind(var0)(var8, var9, var5);
                var1 = var7[var1];
                var1 = var2.bind(var0)(var1);
                var2 = var1.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT;
                var1 = arg2;
                var2 = var6.bind(var0)(var5, var2, var1);
                var1 = arg0;
                var1 = var3.bind(var4)(var1, var2);
            case 189:
                return var0;
        }
    };
    var2.setMeasurement = var3;
    var1 = function arg0() {
        _fun99373: for (var _fun99373_ip = 0;;) switch (_fun99373_ip) {
            case 0:
                var3 = arg0;
                if (!var3) {
                    _fun99373_ip = 19;
                    continue _fun99373
                }
            case 8:
                var2 = var3.length;
                var0 = 0;
                if (!(var0 === var2)) {
                    _fun99373_ip = 23;
                    continue _fun99373
                }
            case 19:
                var0 = undefined;
                return var0;
            case 23:
                var0 = {};
                var _closure2_slot0 = var0;
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun99374: for (var _fun99374_ip = 0;;) switch (_fun99374_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = var1.attributes;
                            if (var3) {
                                _fun99374_ip = 14;
                                continue _fun99374
                            }
                        case 12:
                            var3 = {};
                        case 14:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var2 = 2;
                            var4 = var6[var2];
                            var0 = undefined;
                            var4 = var5.bind(var0)(var4);
                            var4 = var4.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT;
                            var4 = var3[var4];
                            var2 = var6[var2];
                            var2 = var5.bind(var0)(var2);
                            var2 = var2.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE;
                            var5 = var3[var2];
                            var3 = 'string';
                            var2 = typeof var4;
                            var2 = var3 === var2;
                            if (!var2) {
                                _fun99374_ip = 93;
                                continue _fun99374
                            }
                        case 82:
                            var6 = 'number';
                            var3 = typeof var5;
                            var2 = var6 === var3;
                        case 93:
                            if (!var2) {
                                _fun99374_ip = 123;
                                continue _fun99374
                            }
                        case 96:
                            var3 = _closure2_slot0;
                            var2 = var1.name;
                            var1 = {};
                            var1.value = var5;
                            var1.unit = var4;
                            var3[var2] = var1;
                        case 123:
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.timedEventsToMeasurements = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 12941, 12942]);