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
    var3 = var3.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var7 = 'Module';
    var3.value = var7;
    var3 = var5.bind(var6)(var2, var4, var3);
    var3 = function(arg0, arg1, arg2) { // Original name: setMeasurement, environment: var1
        _fun9059: for (var _fun9059_ip = 0;;) switch (_fun9059_ip) {
            case 0:
                var4 = arg0;
                var11 = arg1;
                var7 = arg2;
                var0 = undefined;
                var1 = undefined;
                var2 = arguments.length;
                var6 = 3;
                if (!(var2 > var6)) {
                    _fun9059_ip = 31;
                    continue _fun9059
                }
            case 23:
                var2 = arguments[var6];
                if (!(var0 === var2)) {
                    _fun9059_ip = 66;
                    continue _fun9059
                }
            case 31:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 1;
                var2 = var5[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.getActiveSpan;
                var5 = var2.bind(var3)();
                _fun9059_ip = 70;
                continue _fun9059;
            case 66:
                var5 = arguments[var6];
            case 70:
                var3 = var5;
                if (!var3) {
                    _fun9059_ip = 110;
                    continue _fun9059
                }
            case 76:
                var2 = _closure1_slot0;
                var8 = _closure1_slot1;
                var1 = 1;
                var1 = var8[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.getRootSpan;
                var3 = var1.bind(var2)(var5);
            case 110:
                if (!var3) {
                    _fun9059_ip = 298;
                    continue _fun9059
                }
            case 116:
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 2;
                var2 = var8[var2];
                var2 = var5.bind(var0)(var2);
                var2 = var2.DEBUG_BUILD;
                if (!var2) {
                    _fun9059_ip = 225;
                    continue _fun9059
                }
            case 148:
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var6];
                var2 = var5.bind(var0)(var2);
                var6 = var2.debug;
                var5 = var6.log;
                var2 = global;
                var2 = var2.HermesInternal;
                var10 = var2.concat;
                var17 = '[Measurement] Setting measurement on root span: ';
                var15 = ' = ';
                var13 = ' ';
                var16 = var4;
                var14 = var11;
                var12 = var7;
                var2 = var17[var10](var16, var15, var14, var13, var12, var11);
                var2 = var5.bind(var6)(var2);
            case 225:
                var2 = var3.addEvent;
                var6 = _closure1_slot2;
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var1 = 4;
                var5 = var9[var1];
                var5 = var8.bind(var0)(var5);
                var10 = var5.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE;
                var5 = {};
                var5 = var6.bind(var0)(var5, var10, var11);
                var1 = var9[var1];
                var1 = var8.bind(var0)(var1);
                var1 = var1.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT;
                var1 = var6.bind(var0)(var5, var1, var7);
                var1 = var2.bind(var3)(var4, var1);
            case 298:
                return var0;
        }
    };
    var2.setMeasurement = var3;
    var1 = function(arg0) { // Original name: timedEventsToMeasurements, environment: var1
        _fun9060: for (var _fun9060_ip = 0;;) switch (_fun9060_ip) {
            case 0:
                var3 = arg0;
                if (!var3) {
                    _fun9060_ip = 19;
                    continue _fun9060
                }
            case 8:
                var2 = var3.length;
                var0 = 0;
                if (!(var0 === var2)) {
                    _fun9060_ip = 23;
                    continue _fun9060
                }
            case 19:
                var0 = undefined;
                return var0;
            case 23:
                var0 = {};
                var _closure2_slot0 = var0;
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun9061: for (var _fun9061_ip = 0;;) switch (_fun9061_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = var1.attributes;
                            if (var3) {
                                _fun9061_ip = 14;
                                continue _fun9061
                            }
                        case 12:
                            var3 = {};
                        case 14:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var2 = 4;
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
                                _fun9061_ip = 93;
                                continue _fun9061
                            }
                        case 82:
                            var6 = 'number';
                            var3 = typeof var5;
                            var2 = var6 === var3;
                        case 93:
                            if (!var2) {
                                _fun9061_ip = 123;
                                continue _fun9061
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 819, 823, 824, 838]);