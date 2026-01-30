// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.useCallback;
    var _closure1_slot1 = var6;
    var6 = var3.useEffect;
    var _closure1_slot2 = var6;
    var3 = var3.useRef;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.NativeEventEmitter;
    var _closure1_slot4 = var6;
    var3 = var3.Platform;
    var3 = 3;
    var3 = var5[var3];
    var4 = var4.bind(var0)(var3);
    var3 = var4.getNativeModule;
    var3 = var3.bind(var4)();
    var _closure1_slot5 = var3;
    var1 = function(arg0) { // Original name: useModal, environment: var1
        var0 = arg0;
        var2 = var0.props;
        var _closure2_slot0 = var2;
        var5 = var0.id;
        var _closure2_slot1 = var5;
        var6 = _closure1_slot3;
        var0 = undefined;
        var4 = false;
        var4 = var6.bind(var0)(var4);
        var _closure2_slot2 = var4;
        var4 = function(arg0) { // Original name: usePrevious, environment: var1
            var0 = arg0;
            var _closure3_slot0 = var0;
            var0 = _closure1_slot3;
            var3 = undefined;
            var0 = var0.bind(var3)();
            var _closure3_slot1 = var0;
            var2 = _closure1_slot2;
            var1 = function() { // Environment: var1
                var1 = _closure3_slot1;
                var0 = _closure3_slot0;
                var1.current = var0;
                var0 = undefined;
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            var0 = var0.current;
            return var0;
        };
        var7 = var4.bind(var0)(var2);
        var _closure2_slot3 = var7;
        var8 = _closure1_slot1;
        var6 = new Array(2);
        var6[0] = var5;
        var6[1] = var2;
        var4 = function(arg0) { // Environment: var1
            _fun65385: for (var _fun65385_ip = 0;;) switch (_fun65385_ip) {
                case 0:
                    var1 = arg0;
                    var3 = var1.id;
                    var2 = _closure2_slot1;
                    if (!(var3 === var2)) {
                        _fun65385_ip = 96;
                        continue _fun65385
                    }
                case 19:
                    var3 = _closure2_slot2;
                    var2 = true;
                    var3.current = var2;
                    var4 = var1.date;
                    var1 = _closure2_slot0;
                    var1 = var1.onConfirm;
                    if (!var1) {
                        _fun65385_ip = 96;
                        continue _fun65385
                    }
                case 50:
                    var2 = _closure2_slot0;
                    var1 = var2.onConfirm;
                    var0 = global;
                    var0 = var0.Date;
                    var3 = var0.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var0
                        }
                    });
                    var6 = var3;
                    var5 = var4;
                    var0 = new var6[var0](var5, var4);
                    var0 = var0 instanceof Object ? var0 : var3;
                    var0 = var1.bind(var2)(var0);
                case 96:
                    var0 = undefined;
                    return var0;
            }
        };
        var4 = var8.bind(var0)(var4, var6);
        var _closure2_slot4 = var4;
        var6 = new Array(2);
        var6[0] = var5;
        var6[1] = var2;
        var5 = function(arg0) { // Environment: var1
            _fun65386: for (var _fun65386_ip = 0;;) switch (_fun65386_ip) {
                case 0:
                    var1 = arg0;
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = undefined;
                    var3 = undefined;
                    if (var2) {
                        _fun65386_ip = 21;
                        continue _fun65386
                    }
                case 16:
                    var3 = var1.id;
                case 21:
                    var2 = _closure2_slot1;
                    if (!(var3 === var2)) {
                        _fun65386_ip = 71;
                        continue _fun65386
                    }
                case 32:
                    var3 = _closure2_slot2;
                    var2 = true;
                    var3.current = var2;
                    var2 = _closure2_slot0;
                    var2 = var2.onCancel;
                    if (!var2) {
                        _fun65386_ip = 71;
                        continue _fun65386
                    }
                case 57:
                    var2 = _closure2_slot0;
                    var1 = var2.onCancel;
                    var1 = var1.bind(var2)();
                case 71:
                    return var0;
            }
        };
        var5 = var8.bind(var0)(var5, var6);
        var _closure2_slot5 = var5;
        var3 = _closure1_slot2;
        var8 = new Array(4);
        var8[0] = var5;
        var8[1] = var4;
        var8[2] = var7;
        var8[3] = var2;
        var6 = function() { // Environment: var1
            _fun65387: for (var _fun65387_ip = 0;;) switch (_fun65387_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var3 = _closure2_slot3;
                    var1 = var2.modal;
                    var4 = !var1;
                    var1 = !var4;
                    if (var4) {
                        _fun65387_ip = 38;
                        continue _fun65387
                    }
                case 26:
                    var2 = var2.open;
                    var2 = !var2;
                    var1 = !var2;
                case 38:
                    if (!var1) {
                        _fun65387_ip = 61;
                        continue _fun65387
                    }
                case 41:
                    var2 = null;
                    var4 = var2 == var3;
                    var2 = undefined;
                    if (var4) {
                        _fun65387_ip = 58;
                        continue _fun65387
                    }
                case 52:
                    var2 = var3.open;
                case 58:
                    var1 = !var2;
                case 61:
                    if (!var1) {
                        _fun65387_ip = 123;
                        continue _fun65387
                    }
                case 64:
                    var2 = _closure2_slot2;
                    var1 = false;
                    var2.current = var1;
                    var0 = _closure2_slot0;
                    var5 = new Array(1);
                    var5[0] = var0;
                    var3 = _closure1_slot5;
                    var2 = var3.openPicker;
                    var1 = var2.apply;
                    var4 = _closure1_slot0;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var5);
                    var0 = var1.bind(var2)(var3, var0);
                case 123:
                    var0 = undefined;
                    return var0;
            }
        };
        var6 = var3.bind(var0)(var6, var8);
        var6 = new Array(2);
        var6[0] = var7;
        var6[1] = var2;
        var2 = function() { // Environment: var1
            _fun65388: for (var _fun65388_ip = 0;;) switch (_fun65388_ip) {
                case 0:
                    var3 = _closure2_slot0;
                    var4 = _closure2_slot3;
                    var1 = _closure2_slot2;
                    var2 = var1.current;
                    var1 = var3.modal;
                    var1 = !var1;
                    if (var1) {
                        _fun65388_ip = 38;
                        continue _fun65388
                    }
                case 32:
                    var1 = var3.open;
                case 38:
                    if (var1) {
                        _fun65388_ip = 61;
                        continue _fun65388
                    }
                case 41:
                    var3 = null;
                    var5 = var3 == var4;
                    var3 = undefined;
                    if (var5) {
                        _fun65388_ip = 58;
                        continue _fun65388
                    }
                case 52:
                    var3 = var4.open;
                case 58:
                    var1 = !var3;
                case 61:
                    if (var1) {
                        _fun65388_ip = 67;
                        continue _fun65388
                    }
                case 64:
                    var1 = var2;
                case 67:
                    var1 = !var1;
                    if (!var1) {
                        _fun65388_ip = 104;
                        continue _fun65388
                    }
                case 73:
                    var1 = _closure2_slot2;
                    var0 = true;
                    var1.current = var0;
                    var1 = _closure1_slot5;
                    var0 = var1.closePicker;
                    var0 = var0.bind(var1)();
                case 104:
                    var0 = undefined;
                    return var0;
            }
        };
        var2 = var3.bind(var0)(var2, var6);
        var2 = new Array(2);
        var2[0] = var5;
        var2[1] = var4;
        var1 = function() { // Environment: var1
            var3 = _closure1_slot4;
            var7 = _closure1_slot5;
            var2 = var3.prototype;
            var2 = Object.create(var2, {
                constructor: {
                    value: var3
                }
            });
            var8 = var2;
            var1 = new var8[var3](var7, var6);
            var4 = var1 instanceof Object ? var1 : var2;
            var _closure3_slot0 = var4;
            var5 = var4.addListener;
            var3 = _closure2_slot4;
            var2 = 'onConfirm';
            var2 = var5.bind(var4)(var2, var3);
            var3 = var4.addListener;
            var2 = _closure2_slot5;
            var1 = 'onCancel';
            var1 = var3.bind(var4)(var1, var2);
            var0 = function() { // Environment: var0
                var2 = _closure3_slot0;
                var1 = var2.removeAllListeners;
                var0 = 'onConfirm';
                var0 = var1.bind(var2)(var0);
                var1 = var2.removeAllListeners;
                var0 = 'onCancel';
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            return var0;
        };
        var1 = var3.bind(var0)(var1, var2);
        return var0;
    };
    var2.useModal = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 31, 27, 8080]);