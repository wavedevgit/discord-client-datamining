// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var0 = global;
    var _closure1_slot0 = var0;
    var1 = function arg0, arg1() {
        var0 = global;
        var0 = var0.Object;
        var0 = var0.prototype;
        var3 = var0.hasOwnProperty;
        var2 = var3.call;
        var1 = arg0;
        var0 = arg1;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot3 = var1;
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
    var _closure1_slot1 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = function arg0() {
        _fun44815: for (var _fun44815_ip = 0;;) switch (_fun44815_ip) {
            case 0:
                var2 = arg0;
                var0 = global;
                var1 = var0.Array;
                var0 = var1.isArray;
                var1 = var0.bind(var1)(var2);
                var0 = var2;
                if (var1) {
                    _fun44815_ip = 38;
                    continue _fun44815
                }
            case 27:
                var1 = new Array(1);
                var1[0] = var2;
                var0 = var1;
            case 38:
                return var0;
        }
    };
    var2.toArray = var4;
    var4 = function arg0, arg1() {
        var0 = arg1;
        var _closure2_slot0 = var0;
        var0 = [null];
        var _closure2_slot1 = var0;
        var3 = _closure1_slot1;
        var2 = undefined;
        var0 = arg0;
        var3 = var3.bind(var2)(var0);
        var0 = new Array(0);
        var _closure2_slot2 = var0;
        var2 = var3.forEach;
        var1 = function(arg0, arg1) { // Environment: var1
            var4 = _closure2_slot1;
            var0 = arg1;
            var5 = var4[var0];
            var3 = _closure2_slot0;
            var0 = undefined;
            var2 = arg0;
            var3 = var3.bind(var0)(var5, var2);
            var2 = var4.push;
            var2 = var2.bind(var4)(var3);
            var2 = _closure2_slot2;
            var1 = var2.push;
            var1 = var1.bind(var2)(var3);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.withPrevAndCurrent = var4;
    var2.hasProperty = var1;
    var1 = function() {
        _fun44818: for (var _fun44818_ip = 0;;) switch (_fun44818_ip) {
            case 0:
                var3 = _closure1_slot3;
                var2 = _closure1_slot0;
                var1 = undefined;
                var0 = 'process';
                var0 = var3.bind(var1)(var2, var0);
                if (!var0) {
                    _fun44818_ip = 28;
                    continue _fun44818
                }
            case 26:
                var0 = false;
            case 28:
                return var0;
        }
    };
    var2.isTestEnv = var1;
    var1 = function arg0() {
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = '[react-native-gesture-handler] ';
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.tagMessage = var1;
    var1 = function() {
        _fun44820: for (var _fun44820_ip = 0;;) switch (_fun44820_ip) {
            case 0:
                var1 = _closure1_slot0;
                var0 = null;
                var0 = var0 == var1;
                if (var0) {
                    _fun44820_ip = 25;
                    continue _fun44820
                }
            case 16:
                var1 = var1._IS_FABRIC;
                var0 = !var1;
            case 25:
                var0 = !var0;
                return var0;
        }
    };
    var2.isFabric = var1;
    var1 = function() {
        var0 = _closure1_slot2;
        var2 = var0.version;
        var1 = var2.startsWith;
        var0 = '19.';
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.isReact19 = var1;
    var1 = function() {
        _fun44822: for (var _fun44822_ip = 0;;) switch (_fun44822_ip) {
            case 0:
                var1 = _closure1_slot0;
                var0 = var1.nativeCallSyncHook;
                if (!var0) {
                    _fun44822_ip = 25;
                    continue _fun44822
                }
            case 16:
                var2 = var1.__REMOTEDEV__;
                var0 = !var2;
            case 25:
                if (var0) {
                    _fun44822_ip = 34;
                    continue _fun44822
                }
            case 28:
                var0 = var1.RN$Bridgeless;
            case 34:
                var0 = !var0;
                return var0;
        }
    };
    var2.isRemoteDebuggingEnabled = var1;
    var1 = function arg0, arg1() {
        _fun44823: for (var _fun44823_ip = 0;;) switch (_fun44823_ip) {
            case 0:
                var1 = arg0;
                var0 = arg1;
                var4 = var1;
                var5 = var0;
                var3 = undefined;
                var6 = undefined;
                var7 = undefined;
                if (!(var1 !== var0)) {
                    _fun44823_ip = 231;
                    continue _fun44823
                }
            case 25:
                var0 = var4;
                var1 = 'object';
                var0 = typeof var0;
                if (!(var1 === var0)) {
                    _fun44823_ip = 227;
                    continue _fun44823
                }
            case 42:
                var0 = var5;
                var0 = typeof var0;
                if (!(var1 === var0)) {
                    _fun44823_ip = 227;
                    continue _fun44823
                }
            case 55:
                var0 = var4;
                var1 = null;
                if (!(var1 !== var0)) {
                    _fun44823_ip = 227;
                    continue _fun44823
                }
            case 67:
                var0 = var5;
                if (!(var1 !== var0)) {
                    _fun44823_ip = 227;
                    continue _fun44823
                }
            case 77:
                var1 = global;
                var8 = var1.Object;
                var2 = var8.keys;
                var0 = var4;
                var0 = var2.bind(var8)(var0);
                var8 = var1.Object;
                var2 = var8.keys;
                var1 = var5;
                var1 = var2.bind(var8)(var1);
                var6 = var1;
                var2 = var0.length;
                var1 = var1.length;
                if (!(var2 === var1)) {
                    _fun44823_ip = 223;
                    continue _fun44823
                }
            case 134:
                var2 = var0;
                var1 = var2[Symbol.iterator];
                var2 = var1().next;
            case 143:
                var10 = var2().value;
                var8 = var1;
                if (!(var8 !== var3)) {
                    _fun44823_ip = 219;
                    continue _fun44823
                }
            case 154: // try_start_0
                var7 = var10;
                var9 = var6;
                var8 = var9.includes;
                var8 = var8.bind(var9)(var10);
                if (!var8) {
                    _fun44823_ip = 203;
                    continue _fun44823
                }
            case 173:
                var10 = _closure1_slot4;
                var8 = var4;
                var11 = var7;
                var9 = var8[var11];
                var8 = var5;
                var8 = var8[var11];
                var8 = var10.bind(var3)(var9, var8);
                if (var8) {
                    _fun44823_ip = 210;
                    continue _fun44823
                }
            case 203: // try_end0
                var1.return();
                var8 = false;
                return var8;
            case 210:
                _fun44823_ip = 143;
                continue _fun44823;
            case 212: // catch_target0
                CatchBlockStart(arg_register = 0);
                var1.return();
                throw var0;
            case 219:
                var0 = true;
                return var0;
            case 223:
                var0 = false;
                return var0;
            case 227:
                var0 = false;
                return var0;
            case 231:
                var0 = true;
                return var0;
        }
    };
    var _closure1_slot4 = var1;
    var2.deepEqual = var1;
    var1 = 2147483647;
    var2.INT32_MAX = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 31]);