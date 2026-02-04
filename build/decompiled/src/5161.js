// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var1 = function() { // Environment: var0
        var0 = function() {
            var1 = this;
            var0 = {};
            var1._recyclableObjectMap = var0;
            var0 = {};
            var1._availabilitySet = var0;
            var0 = undefined;
            return var0;
        };
        var3 = var0.prototype;
        var2 = function(arg0, arg1) { // Environment: var1
            _fun46124: for (var _fun46124_ip = 0;;) switch (_fun46124_ip) {
                case 0:
                    var2 = arg1;
                    var0 = this;
                    var3 = var0._stringify;
                    var1 = arg0;
                    var1 = var3.bind(var0)(var1);
                    var3 = var0._getRelevantSet;
                    var4 = var3.bind(var0)(var1);
                    var3 = var0._availabilitySet;
                    var3 = var3[var2];
                    if (var3) {
                        _fun46124_ip = 60;
                        continue _fun46124
                    }
                case 44:
                    var3 = null;
                    var4[var2] = var3;
                    var0 = var0._availabilitySet;
                    var0[var2] = var1;
                case 60:
                    var0 = undefined;
                    return var0;
            }
        };
        var3.putRecycledObject = var2;
        var3 = var0.prototype;
        var2 = function(arg0) { // Environment: var1
            _fun46125: for (var _fun46125_ip = 0;;) switch (_fun46125_ip) {
                case 0:
                    var1 = this;
                    var2 = var1._stringify;
                    var0 = arg0;
                    var2 = var2.bind(var1)(var0);
                    var0 = var1._getRelevantSet;
                    var2 = var0.bind(var1)(var2);
                    var8 = var2;
                    var0 = undefined;
                    for (var5 in var8)
                        case 41: {
                            var0 = undefined;
                            case 52: var10 = var5;
                            var3 = var2.hasOwnProperty;
                            var3 = var3.bind(var2)(var10);
                            var0 = var10;
                            if (!var3) {
                                _fun46125_ip = 41;
                                continue _fun46125
                            }
                        }
                case 72:
                    if (!var0) {
                        _fun46125_ip = 89;
                        continue _fun46125
                    }
                case 75:
                    var2 = delete var2[var0];
                    var1 = var1._availabilitySet;
                    var1 = delete var1[var0];
                case 89:
                    return var0;
            }
        };
        var3.getRecycledObject = var2;
        var3 = var0.prototype;
        var2 = function(arg0) { // Environment: var1
            _fun46126: for (var _fun46126_ip = 0;;) switch (_fun46126_ip) {
                case 0:
                    var2 = arg0;
                    var1 = this;
                    var0 = var1._availabilitySet;
                    var0 = var0[var2];
                    var3 = !var0;
                    var0 = !var3;
                    if (var3) {
                        _fun46126_ip = 62;
                        continue _fun46126
                    }
                case 25:
                    var4 = var1._getRelevantSet;
                    var3 = var1._availabilitySet;
                    var3 = var3[var2];
                    var3 = var4.bind(var1)(var3);
                    var3 = delete var3[var2];
                    var1 = var1._availabilitySet;
                    var1 = delete var1[var2];
                    var0 = true;
                case 62:
                    return var0;
            }
        };
        var3.removeFromPool = var2;
        var3 = var0.prototype;
        var2 = function() { // Environment: var1
            var1 = this;
            var0 = {};
            var1._recyclableObjectMap = var0;
            var0 = {};
            var1._availabilitySet = var0;
            var0 = undefined;
            return var0;
        };
        var3.clearAll = var2;
        var3 = var0.prototype;
        var2 = function(arg0) { // Environment: var1
            _fun46128: for (var _fun46128_ip = 0;;) switch (_fun46128_ip) {
                case 0:
                    var3 = arg0;
                    var2 = this;
                    var0 = var2._recyclableObjectMap;
                    var0 = var0[var3];
                    if (var0) {
                        _fun46128_ip = 34;
                        continue _fun46128
                    }
                case 19:
                    var1 = {};
                    var2 = var2._recyclableObjectMap;
                    var2[var3] = var1;
                    var0 = var1;
                case 34:
                    return var0;
            }
        };
        var3._getRelevantSet = var2;
        var2 = var0.prototype;
        var1 = function(arg0) { // Environment: var1
            _fun46129: for (var _fun46129_ip = 0;;) switch (_fun46129_ip) {
                case 0:
                    var2 = arg0;
                    var3 = 'number';
                    var1 = typeof var2;
                    var0 = var2;
                    if (!(var3 === var1)) {
                        _fun46129_ip = 26;
                        continue _fun46129
                    }
                case 17:
                    var1 = var2.toString;
                    var0 = var1.bind(var2)();
                case 26:
                    return var0;
            }
        };
        var2._stringify = var1;
        return var0;
    };
    var0 = undefined;
    var1 = var1.bind(var0)();
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);