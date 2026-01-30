// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = function(arg0, arg1, arg2) { // Original name: safeJoinConsoleArgs, environment: var3
        var2 = arg0;
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            _fun9819: for (var _fun9819_ip = 0;;) switch (_fun9819_ip) {
                case 0:
                    var3 = arg0;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 2;
                    var1 = var2[var1];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var1);
                    var1 = var4.isPrimitive;
                    var4 = var1.bind(var4)(var3);
                    var1 = global;
                    if (var4) {
                        _fun9819_ip = 107;
                        continue _fun9819
                    }
                case 44:
                    var5 = var1.JSON;
                    var4 = var5.stringify;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var0 = 3;
                    var0 = var7[var0];
                    var8 = var6.bind(var2)(var0);
                    var7 = var8.normalize;
                    var6 = _closure2_slot0;
                    var0 = _closure2_slot1;
                    var0 = var7.bind(var8)(var3, var6, var0);
                    var0 = var4.bind(var5)(var0);
                    _fun9819_ip = 118;
                    continue _fun9819;
                case 107:
                    var1 = var1.String;
                    var0 = var1.bind(var2)(var3);
                case 118:
                    return var0;
            }
        };
        var2 = var1.bind(var2)(var0);
        var1 = var2.join;
        var0 = ' ';
        var0 = var1.bind(var2)(var0);
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
    var4 = function(arg0, arg1) { // Original name: createConsoleTemplateAttributes, environment: var3
        var3 = arg1;
        var0 = {};
        var _closure2_slot0 = var0;
        var2 = global;
        var6 = var2.Array;
        var10 = var3.length;
        var5 = var6.prototype;
        var5 = Object.create(var5, {
            constructor: {
                value: var6
            }
        });
        var11 = var5;
        var4 = new var11[var6](var10, var9);
        var6 = var4 instanceof Object ? var4 : var5;
        var5 = var6.fill;
        var4 = '{}';
        var5 = var5.bind(var6)(var4);
        var4 = var5.join;
        var7 = ' ';
        var6 = var4.bind(var5)(var7);
        var2 = var2.HermesInternal;
        var5 = var2.concat;
        var4 = '';
        var2 = arg0;
        var2 = var5.bind(var4)(var2, var7, var6);
        var0['sentry.message.template'] = var2;
        var2 = var3.forEach;
        var1 = function(arg0, arg1) { // Environment: var1
            var2 = _closure2_slot0;
            var0 = global;
            var0 = var0.HermesInternal;
            var3 = var0.concat;
            var1 = 'sentry.message.parameter.';
            var0 = arg1;
            var1 = var3.bind(var1)(var0);
            var0 = arg0;
            var2[var1] = var0;
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.createConsoleTemplateAttributes = var4;
    var4 = function(arg0, arg1, arg2) { // Original name: formatConsoleArgs, environment: var3
        _fun9822: for (var _fun9822_ip = 0;;) switch (_fun9822_ip) {
            case 0:
                var6 = arg0;
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var4 = 1;
                var0 = var0[var4];
                var5 = undefined;
                var0 = var2.bind(var5)(var0);
                var2 = var0.GLOBAL_OBJ;
                var0 = 'util';
                var0 = var0 in var2;
                if (!var0) {
                    _fun9822_ip = 90;
                    continue _fun9822
                }
            case 45:
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var4];
                var0 = var2.bind(var5)(var0);
                var0 = var0.GLOBAL_OBJ;
                var0 = var0.util;
                var0 = var0.format;
                var2 = 'function';
                var0 = typeof var0;
                if (!(var2 !== var0)) {
                    _fun9822_ip = 109;
                    continue _fun9822
                }
            case 90:
                var3 = _closure1_slot3;
                var2 = arg1;
                var0 = arg2;
                var0 = var3.bind(var5)(var6, var2, var0);
                _fun9822_ip = 163;
                continue _fun9822;
            case 109:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var4];
                var2 = var3.bind(var5)(var2);
                var2 = var2.GLOBAL_OBJ;
                var4 = var2.util;
                var3 = var4.format;
                var2 = var3.apply;
                var1 = _closure1_slot2;
                var1 = var1.bind(var5)(var6);
                var0 = var2.bind(var3)(var4, var1);
            case 163:
                return var0;
        }
    };
    var2.formatConsoleArgs = var4;
    var3 = function(arg0) { // Original name: hasConsoleSubstitutions, environment: var3
        var2 = /%[sdifocO]/;
        var1 = var2.test;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.hasConsoleSubstitutions = var3;
    var2.safeJoinConsoleArgs = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 821, 827, 863]);