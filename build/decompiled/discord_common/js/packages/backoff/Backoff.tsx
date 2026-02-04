// ../discord_common/js/packages/backoff/Backoff.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot1;
        var2 = function() {
            _fun6769: for (var _fun6769_ip = 0;;) switch (_fun6769_ip) {
                case 0:
                    var1 = arguments[0];
                    var4 = arguments[1];
                    var3 = arguments[2];
                    var0 = this;
                    var2 = undefined;
                    if (!(var1 === var2)) {
                        _fun6769_ip = 24;
                        continue _fun6769
                    }
                case 18:
                    var1 = 500;
                case 24:
                    if (!(var4 === var2)) {
                        _fun6769_ip = 30;
                        continue _fun6769
                    }
                case 28:
                    var4 = null;
                case 30:
                    if (!(var3 === var2)) {
                        _fun6769_ip = 36;
                        continue _fun6769
                    }
                case 34:
                    var3 = true;
                case 36:
                    var6 = _closure1_slot0;
                    var5 = _closure2_slot0;
                    var5 = var6.bind(var2)(var0, var5);
                    var5 = 0;
                    var0._fails = var5;
                    if (!(!(var1 <= var5))) {
                        _fun6769_ip = 107;
                        continue _fun6769
                    }
                case 68:
                    var0.min = var1;
                    var5 = null;
                    if (!(var5 == var4)) {
                        _fun6769_ip = 87;
                        continue _fun6769
                    }
                case 80:
                    var5 = 10;
                    var4 = var5 * var1;
                case 87:
                    var0.max = var4;
                    var0.jitter = var3;
                    var0._current = var1;
                    return var2;
                case 107:
                    var0 = global;
                    var1 = var0.Error;
                    var0 = 'Backoff min value must be greater than zero or backoff will never back-off.';
                    var0 = var1.bind(var2)(var0);
                    throw var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'fails';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var0 = var0._fails;
            return var0;
        };
        var0.get = var1;
        var1 = new Array(6);
        var1[0] = var0;
        var0 = {};
        var5 = 'current';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0._current;
            return var0;
        };
        var0.get = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'pending';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0._timeoutId;
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var0.get = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'succeed';
        var0.key = var5;
        var5 = function() {
            var1 = this;
            var0 = var1.cancel;
            var0 = var0.bind(var1)();
            var0 = 0;
            var1._fails = var0;
            var0 = var1.min;
            var1._current = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'fail';
        var0.key = var5;
        var5 = function arg0() {
            _fun6774: for (var _fun6774_ip = 0;;) switch (_fun6774_ip) {
                case 0:
                    var3 = arg0;
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var _closure3_slot1 = var3;
                    var4 = var1._fails;
                    var0 = 1;
                    var0 = var4 + var0;
                    var1._fails = var0;
                    var4 = var1._current;
                    var0 = 2;
                    var4 = var0 * var4;
                    var0 = var1.jitter;
                    var5 = var4;
                    if (!var0) {
                        _fun6774_ip = 82;
                        continue _fun6774
                    }
                case 60:
                    var0 = global;
                    var6 = var0.Math;
                    var0 = var6.random;
                    var0 = var0.bind(var6)();
                    var5 = var4 * var0;
                case 82:
                    var0 = global;
                    var7 = var0.Math;
                    var6 = var7.min;
                    var4 = var1._current;
                    var5 = var4 + var5;
                    var4 = var1.max;
                    var4 = var6.bind(var7)(var5, var4);
                    var1._current = var4;
                    var5 = null;
                    if (!(var5 != var3)) {
                        _fun6774_ip = 195;
                        continue _fun6774
                    }
                case 128:
                    var4 = var1._timeoutId;
                    if (!(var5 != var4)) {
                        _fun6774_ip = 158;
                        continue _fun6774
                    }
                case 138:
                    var4 = var1._callback;
                    if (!(var4 === var3)) {
                        _fun6774_ip = 203;
                        continue _fun6774
                    }
                case 148:
                    var4 = var1.cancel;
                    var4 = var4.bind(var1)();
                case 158:
                    var1._callback = var3;
                    var5 = var0.setTimeout;
                    var4 = var1._current;
                    var3 = undefined;
                    var2 = function() { // Environment: var2
                        _fun6775: for (var _fun6775_ip = 0;;) switch (_fun6775_ip) {
                            case 0: // try_start_0
                                var2 = _closure3_slot1;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun6775_ip = 23;
                                    continue _fun6775
                                }
                            case 13:
                                var2 = _closure3_slot1;
                                var1 = undefined;
                                var1 = var2.bind(var1)();
                            case 23: // try_end0
                                var1 = _closure3_slot0;
                                var0 = var1.cancel;
                                var0 = var0.bind(var1)();
                                var0 = undefined;
                                return var0;
                            case 41: // catch_target0
                                CatchBlockStart(arg_register = 0);
                                var2 = _closure3_slot0;
                                var1 = var2.cancel;
                                var1 = var1.bind(var2)();
                                throw var0;
                        }
                    };
                    var2 = var5.bind(var3)(var2, var4);
                    var1._timeoutId = var2;
                case 195:
                    var1 = var1._current;
                    return var1;
                case 203:
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var9 = 'callback already pending';
                    var10 = var1;
                    var0 = new var10[var2](var9, var8);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'cancel';
        var0.key = var5;
        var4 = function() {
            _fun6776: for (var _fun6776_ip = 0;;) switch (_fun6776_ip) {
                case 0:
                    var1 = this;
                    var0 = null;
                    var1._callback = var0;
                    var2 = var1._timeoutId;
                    if (!(var0 != var2)) {
                        _fun6776_ip = 48;
                        continue _fun6776
                    }
                case 21:
                    var2 = global;
                    var4 = var2.clearTimeout;
                    var3 = var1._timeoutId;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var1._timeoutId = var0;
                case 48:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var4;
        var1[5] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 2;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/backoff/Backoff.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 2]);