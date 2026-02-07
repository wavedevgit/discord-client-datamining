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
        _fun8781: for (var _fun8781_ip = 0;;) switch (_fun8781_ip) {
            case 0:
                var2 = arg0;
                var1 = 'object';
                var0 = typeof var2;
                var0 = var1 === var0;
                if (!var0) {
                    _fun8781_ip = 23;
                    continue _fun8781
                }
            case 17:
                var1 = null;
                var0 = var1 !== var2;
            case 23:
                if (!var0) {
                    _fun8781_ip = 34;
                    continue _fun8781
                }
            case 26:
                var1 = '__sentry_template_string__';
                var0 = var1 in var2;
            case 34:
                if (!var0) {
                    _fun8781_ip = 45;
                    continue _fun8781
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
        _fun8783: for (var _fun8783_ip = 0;;) switch (_fun8783_ip) {
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
    var6 = var5.Symbol;
    var7 = var6.toStringTag;
    var6 = {};
    var10 = 'Module';
    var6.value = var10;
    var6 = var8.bind(var9)(var1, var7, var6);
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
        _fun8786: for (var _fun8786_ip = 0;;) switch (_fun8786_ip) {
            case 0:
                var1 = global;
                var0 = var1.Element;
                var2 = 'undefined';
                var0 = typeof var0;
                var0 = var2 !== var0;
                if (!var0) {
                    _fun8786_ip = 46;
                    continue _fun8786
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
        _fun8787: for (var _fun8787_ip = 0;;) switch (_fun8787_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot0;
                var1 = var2.call;
                var2 = var1.bind(var2)(var3);
                var1 = '[object Error]';
                if (!(var1 !== var2)) {
                    _fun8787_ip = 80;
                    continue _fun8787
                }
            case 28:
                var1 = '[object Exception]';
                if (!(var1 !== var2)) {
                    _fun8787_ip = 80;
                    continue _fun8787
                }
            case 38:
                var1 = '[object DOMException]';
                if (!(var1 !== var2)) {
                    _fun8787_ip = 80;
                    continue _fun8787
                }
            case 48:
                var1 = '[object WebAssembly.Exception]';
                if (!(var1 !== var2)) {
                    _fun8787_ip = 80;
                    continue _fun8787
                }
            case 58:
                var2 = _closure1_slot4;
                var0 = global;
                var1 = var0.Error;
                var0 = undefined;
                var0 = var2.bind(var0)(var3, var1);
                return var0;
            case 80:
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
        _fun8789: for (var _fun8789_ip = 0;;) switch (_fun8789_ip) {
            case 0:
                var1 = global;
                var0 = var1.Event;
                var2 = 'undefined';
                var0 = typeof var0;
                var0 = var2 !== var0;
                if (!var0) {
                    _fun8789_ip = 46;
                    continue _fun8789
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
        _fun8790: for (var _fun8790_ip = 0;;) switch (_fun8790_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                var0 = var0 === var1;
                if (var0) {
                    _fun8790_ip = 26;
                    continue _fun8790
                }
            case 12:
                var3 = _closure1_slot2;
                var2 = undefined;
                var0 = var3.bind(var2)(var1);
            case 26:
                if (var0) {
                    _fun8790_ip = 54;
                    continue _fun8790
                }
            case 29:
                var3 = typeof var1;
                var1 = 'object';
                var1 = var1 !== var3;
                if (!var1) {
                    _fun8790_ip = 51;
                    continue _fun8790
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
        _fun8792: for (var _fun8792_ip = 0;;) switch (_fun8792_ip) {
            case 0:
                var1 = global;
                var0 = var1.Request;
                var2 = 'undefined';
                var0 = typeof var0;
                var0 = var2 !== var0;
                if (!var0) {
                    _fun8792_ip = 46;
                    continue _fun8792
                }
            case 22:
                var4 = _closure1_slot4;
                var3 = var1.Request;
                var2 = undefined;
                var1 = arg0;
                var0 = var4.bind(var2)(var1, var3);
            case 46:
                return var0;
        }
    };
    var1.isRequest = var2;
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
        _fun8794: for (var _fun8794_ip = 0;;) switch (_fun8794_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot3;
                var0 = undefined;
                var0 = var1.bind(var0)(var2);
                if (!var0) {
                    _fun8794_ip = 28;
                    continue _fun8794
                }
            case 20:
                var1 = 'nativeEvent';
                var0 = var1 in var2;
            case 28:
                if (!var0) {
                    _fun8794_ip = 39;
                    continue _fun8794
                }
            case 31:
                var1 = 'preventDefault';
                var0 = var1 in var2;
            case 39:
                if (!var0) {
                    _fun8794_ip = 50;
                    continue _fun8794
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
        _fun8795: for (var _fun8795_ip = 0;;) switch (_fun8795_ip) {
            case 0:
                var3 = arg0;
                var0 = global;
                var2 = var0.Boolean;
                var0 = null;
                var4 = var0 == var3;
                var1 = undefined;
                var0 = undefined;
                if (var4) {
                    _fun8795_ip = 29;
                    continue _fun8795
                }
            case 24:
                var0 = var3.then;
            case 29:
                if (!var0) {
                    _fun8795_ip = 48;
                    continue _fun8795
                }
            case 32:
                var3 = var3.then;
                var4 = 'function';
                var3 = typeof var3;
                var0 = var4 === var3;
            case 48:
                var0 = var2.bind(var1)(var0);
                return var0;
        }
    };
    var1.isThenable = var2;
    var0 = function arg0() {
        _fun8796: for (var _fun8796_ip = 0;;) switch (_fun8796_ip) {
            case 0:
                var2 = arg0;
                var1 = 'object';
                var0 = typeof var2;
                var0 = var1 !== var0;
                if (var0) {
                    _fun8796_ip = 23;
                    continue _fun8796
                }
            case 17:
                var1 = null;
                var0 = var1 === var2;
            case 23:
                if (var0) {
                    _fun8796_ip = 53;
                    continue _fun8796
                }
            case 26:
                var1 = var2.__isVue;
                if (var1) {
                    _fun8796_ip = 41;
                    continue _fun8796
                }
            case 35:
                var1 = var2._isVue;
            case 41:
                if (var1) {
                    _fun8796_ip = 50;
                    continue _fun8796
                }
            case 44:
                var1 = var2.__v_isVNode;
            case 50:
                var0 = !var1;
            case 53:
                var0 = !var0;
                return var0;
        }
    };
    var1.isVueViewModel = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);