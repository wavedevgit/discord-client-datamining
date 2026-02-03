// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = var2.call;
        var0 = arg0;
        var1 = var1.bind(var2)(var0);
        var0 = global;
        var0 = var0.HermesInternal;
        var4 = var0.concat;
        var3 = '[object ';
        var2 = arg1;
        var0 = ']';
        var0 = var4.bind(var3)(var2, var0);
        var0 = var1 === var0;
        return var0;
    };
    var _closure1_slot1 = var2;
    var3 = function arg0() {
        _fun98714: for (var _fun98714_ip = 0;;) switch (_fun98714_ip) {
            case 0:
                var2 = arg0;
                var1 = 'object';
                var0 = typeof var2;
                var0 = var1 === var0;
                if (!var0) {
                    _fun98714_ip = 23;
                    continue _fun98714
                }
            case 17:
                var1 = null;
                var0 = var1 !== var2;
            case 23:
                if (!var0) {
                    _fun98714_ip = 34;
                    continue _fun98714
                }
            case 26:
                var1 = '__sentry_template_string__';
                var0 = var1 in var2;
            case 34:
                if (!var0) {
                    _fun98714_ip = 45;
                    continue _fun98714
                }
            case 37:
                var1 = '__sentry_template_values__';
                var0 = var1 in var2;
            case 45:
                return var0;
        }
    };
    var _closure1_slot2 = var3;
    var2 = function arg0() {
        var3 = _closure1_slot1;
        var2 = undefined;
        var1 = arg0;
        var0 = 'Object';
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot3 = var2;
    var4 = function arg0, arg1() {
        _fun98716: for (var _fun98716_ip = 0;;) switch (_fun98716_ip) {
            case 0:
                var1 = arg0;
                var0 = arg1;
            case 6: // try_start_0
                var0 = var1 instanceof var0;
            case 10: // try_end0
                return var0;
            case 12: // catch_target0
                CatchBlockStart(arg_register = 0);
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot4 = var4;
    var5 = global;
    var9 = var5.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var6 = true;
    var7.value = var6;
    var6 = '__esModule';
    var6 = var8.bind(var9)(var1, var6, var7);
    var5 = var5.Object;
    var5 = var5.prototype;
    var5 = var5.toString;
    var _closure1_slot0 = var5;
    var5 = function arg0() {
        var3 = _closure1_slot1;
        var2 = undefined;
        var1 = arg0;
        var0 = 'DOMError';
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var1.isDOMError = var5;
    var5 = function arg0() {
        var3 = _closure1_slot1;
        var2 = undefined;
        var1 = arg0;
        var0 = 'DOMException';
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var1.isDOMException = var5;
    var5 = function arg0() {
        _fun98719: for (var _fun98719_ip = 0;;) switch (_fun98719_ip) {
            case 0:
                var1 = global;
                var0 = var1.Element;
                var2 = 'undefined';
                var0 = typeof var0;
                var0 = var2 !== var0;
                if (!var0) {
                    _fun98719_ip = 46;
                    continue _fun98719
                }
            case 22:
                var4 = _closure1_slot4;
                var3 = var1.Element;
                var2 = undefined;
                var1 = arg0;
                var0 = var4.bind(var2)(var1, var3);
            case 46:
                return var0;
        }
    };
    var1.isElement = var5;
    var5 = function arg0() {
        _fun98720: for (var _fun98720_ip = 0;;) switch (_fun98720_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot0;
                var1 = var2.call;
                var2 = var1.bind(var2)(var3);
                var1 = '[object Error]';
                if (!(var1 !== var2)) {
                    _fun98720_ip = 70;
                    continue _fun98720
                }
            case 28:
                var1 = '[object Exception]';
                if (!(var1 !== var2)) {
                    _fun98720_ip = 70;
                    continue _fun98720
                }
            case 38:
                var1 = '[object DOMException]';
                if (!(var1 !== var2)) {
                    _fun98720_ip = 70;
                    continue _fun98720
                }
            case 48:
                var2 = _closure1_slot4;
                var0 = global;
                var1 = var0.Error;
                var0 = undefined;
                var0 = var2.bind(var0)(var3, var1);
                return var0;
            case 70:
                var0 = true;
                return var0;
        }
    };
    var1.isError = var5;
    var5 = function arg0() {
        var3 = _closure1_slot1;
        var2 = undefined;
        var1 = arg0;
        var0 = 'ErrorEvent';
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var1.isErrorEvent = var5;
    var5 = function arg0() {
        _fun98722: for (var _fun98722_ip = 0;;) switch (_fun98722_ip) {
            case 0:
                var1 = global;
                var0 = var1.Event;
                var2 = 'undefined';
                var0 = typeof var0;
                var0 = var2 !== var0;
                if (!var0) {
                    _fun98722_ip = 46;
                    continue _fun98722
                }
            case 22:
                var4 = _closure1_slot4;
                var3 = var1.Event;
                var2 = undefined;
                var1 = arg0;
                var0 = var4.bind(var2)(var1, var3);
            case 46:
                return var0;
        }
    };
    var1.isEvent = var5;
    var1.isInstanceOf = var4;
    var1.isParameterizedString = var3;
    var1.isPlainObject = var2;
    var2 = function arg0() {
        _fun98723: for (var _fun98723_ip = 0;;) switch (_fun98723_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                var0 = var0 === var1;
                if (var0) {
                    _fun98723_ip = 26;
                    continue _fun98723
                }
            case 12:
                var3 = _closure1_slot2;
                var2 = undefined;
                var0 = var3.bind(var2)(var1);
            case 26:
                if (var0) {
                    _fun98723_ip = 54;
                    continue _fun98723
                }
            case 29:
                var3 = typeof var1;
                var1 = 'object';
                var1 = var1 !== var3;
                if (!var1) {
                    _fun98723_ip = 51;
                    continue _fun98723
                }
            case 43:
                var2 = 'function';
                var1 = var2 !== var3;
            case 51:
                var0 = var1;
            case 54:
                return var0;
        }
    };
    var1.isPrimitive = var2;
    var2 = function arg0() {
        var3 = _closure1_slot1;
        var2 = undefined;
        var1 = arg0;
        var0 = 'RegExp';
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var1.isRegExp = var2;
    var2 = function arg0() {
        var3 = _closure1_slot1;
        var2 = undefined;
        var1 = arg0;
        var0 = 'String';
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var1.isString = var2;
    var2 = function arg0() {
        _fun98726: for (var _fun98726_ip = 0;;) switch (_fun98726_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot3;
                var0 = undefined;
                var0 = var1.bind(var0)(var2);
                if (!var0) {
                    _fun98726_ip = 28;
                    continue _fun98726
                }
            case 20:
                var1 = 'nativeEvent';
                var0 = var1 in var2;
            case 28:
                if (!var0) {
                    _fun98726_ip = 39;
                    continue _fun98726
                }
            case 31:
                var1 = 'preventDefault';
                var0 = var1 in var2;
            case 39:
                if (!var0) {
                    _fun98726_ip = 50;
                    continue _fun98726
                }
            case 42:
                var1 = 'stopPropagation';
                var0 = var1 in var2;
            case 50:
                return var0;
        }
    };
    var1.isSyntheticEvent = var2;
    var2 = function arg0() {
        _fun98727: for (var _fun98727_ip = 0;;) switch (_fun98727_ip) {
            case 0:
                var0 = arg0;
                var1 = global;
                var2 = var1.Boolean;
                var1 = var0;
                if (!var1) {
                    _fun98727_ip = 22;
                    continue _fun98727
                }
            case 17:
                var1 = var0.then;
            case 22:
                if (!var1) {
                    _fun98727_ip = 41;
                    continue _fun98727
                }
            case 25:
                var0 = var0.then;
                var3 = 'function';
                var0 = typeof var0;
                var1 = var3 === var0;
            case 41:
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var1.isThenable = var2;
    var0 = function arg0() {
        _fun98728: for (var _fun98728_ip = 0;;) switch (_fun98728_ip) {
            case 0:
                var2 = arg0;
                var1 = 'object';
                var0 = typeof var2;
                var0 = var1 !== var0;
                if (var0) {
                    _fun98728_ip = 23;
                    continue _fun98728
                }
            case 17:
                var1 = null;
                var0 = var1 === var2;
            case 23:
                if (var0) {
                    _fun98728_ip = 50;
                    continue _fun98728
                }
            case 26:
                var1 = var2.__isVue;
                var1 = !var1;
                if (!var1) {
                    _fun98728_ip = 47;
                    continue _fun98728
                }
            case 38:
                var2 = var2._isVue;
                var1 = !var2;
            case 47:
                var0 = var1;
            case 50:
                var0 = !var0;
                return var0;
        }
    };
    var1.isVueViewModel = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);