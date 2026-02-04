// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var6;
    var3 = function() {
        _fun12860: for (var _fun12860_ip = 0;;) switch (_fun12860_ip) {
            case 0:
                var4 = undefined;
                var3 = undefined;
                var2 = _closure1_slot4;
                var0 = arguments.length;
                var1 = 0;
                if (!(var0 > var1)) {
                    _fun12860_ip = 28;
                    continue _fun12860
                }
            case 20:
                var0 = arguments[var1];
                if (!(var4 === var0)) {
                    _fun12860_ip = 32;
                    continue _fun12860
                }
            case 28:
                var0 = {};
                _fun12860_ip = 36;
                continue _fun12860;
            case 32:
                var0 = arguments[var1];
            case 36:
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var6 = var1;
                var5 = var0;
                var0 = new var6[var2](var5, var4);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function() {
            _fun12862: for (var _fun12862_ip = 0;;) switch (_fun12862_ip) {
                case 0:
                    var2 = this;
                    var0 = undefined;
                    var4 = undefined;
                    var1 = arguments.length;
                    var3 = 0;
                    if (!(var1 > var3)) {
                        _fun12862_ip = 24;
                        continue _fun12862
                    }
                case 16:
                    var1 = arguments[var3];
                    if (!(var0 === var1)) {
                        _fun12862_ip = 28;
                        continue _fun12862
                    }
                case 24:
                    var1 = {};
                    _fun12862_ip = 32;
                    continue _fun12862;
                case 28:
                    var1 = arguments[var3];
                case 32:
                    var5 = _closure1_slot2;
                    var4 = _closure2_slot0;
                    var4 = var5.bind(var0)(var2, var4);
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var3 = 2;
                    var3 = var5[var3];
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.makePromiseBuffer;
                    var1 = var1.bufferSize;
                    if (var1) {
                        _fun12862_ip = 90;
                        continue _fun12862
                    }
                case 87:
                    var1 = 30;
                case 90:
                    var1 = var3.bind(var4)(var1);
                    var2._buffer = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'send';
        var0.key = var1;
        var1 = function arg0() {
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = this;
            var3 = var1._buffer;
            var2 = var3.add;
            var1 = function() { // Environment: var0
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var2 = var0.NATIVE;
                var1 = var2.sendEnvelope;
                var0 = _closure3_slot0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.then;
            var0 = function() { // Environment: var0
                var0 = {};
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var1;
        var1 = new Array(2);
        var1[0] = var0;
        var0 = {};
        var5 = 'flush';
        var0.key = var5;
        var4 = function arg0() {
            var0 = this;
            var2 = var0._buffer;
            var1 = var2.drain;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var4;
        var1[1] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var4 = var4.bind(var0)();
    var _closure1_slot4 = var4;
    var5 = 30;
    var2.DEFAULT_BUFFER_SIZE = var5;
    var2.NativeTransport = var4;
    var2.makeNativeTransport = var3;
    var1 = function arg0() {
        _fun12867: for (var _fun12867_ip = 0;;) switch (_fun12867_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.enableNative;
                var0 = null;
                if (!var1) {
                    _fun12867_ip = 64;
                    continue _fun12867
                }
            case 14:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 3;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
                var4 = var2.NATIVE;
                var2 = var4.isNativeAvailable;
                var2 = var2.bind(var4)();
                var0 = null;
                if (!var2) {
                    _fun12867_ip = 64;
                    continue _fun12867
                }
            case 60:
                var0 = _closure1_slot5;
            case 64:
                return var0;
        }
    };
    var2.makeNativeTransportFactory = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 817, 998]);