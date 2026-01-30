// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = global;
    var6 = var2.Object;
    var5 = var6.defineProperty;
    var3 = var2.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var7 = 'Module';
    var3.value = var7;
    var3 = var5.bind(var6)(var1, var4, var3);
    var2 = var2.WeakMap;
    var3 = var2.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var2
        }
    });
    var11 = var3;
    var2 = new var11[var2](var10);
    var2 = var2 instanceof Object ? var2 : var3;
    var _closure1_slot0 = var2;
    var2 = function(arg0) { // Original name: cleanupSessionDataForTransport, environment: var0
        var2 = _closure1_slot0;
        var1 = var2.delete;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.cleanupSessionDataForTransport = var2;
    var2 = function(arg0) { // Original name: getClientInfoForTransport, environment: var0
        _fun9754: for (var _fun9754_ip = 0;;) switch (_fun9754_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = var2.get;
                var0 = arg0;
                var1 = var1.bind(var2)(var0);
                var0 = null;
                var2 = var0 == var1;
                var0 = undefined;
                if (var2) {
                    _fun9754_ip = 37;
                    continue _fun9754
                }
            case 31:
                var0 = var1.clientInfo;
            case 37:
                return var0;
        }
    };
    var1.getClientInfoForTransport = var2;
    var2 = function(arg0) { // Original name: getProtocolVersionForTransport, environment: var0
        _fun9755: for (var _fun9755_ip = 0;;) switch (_fun9755_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = var2.get;
                var0 = arg0;
                var1 = var1.bind(var2)(var0);
                var0 = null;
                var2 = var0 == var1;
                var0 = undefined;
                if (var2) {
                    _fun9755_ip = 37;
                    continue _fun9755
                }
            case 31:
                var0 = var1.protocolVersion;
            case 37:
                return var0;
        }
    };
    var1.getProtocolVersionForTransport = var2;
    var2 = function(arg0) { // Original name: getSessionDataForTransport, environment: var0
        var2 = _closure1_slot0;
        var1 = var2.get;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.getSessionDataForTransport = var2;
    var2 = function(arg0, arg1) { // Original name: storeSessionDataForTransport, environment: var0
        _fun9757: for (var _fun9757_ip = 0;;) switch (_fun9757_ip) {
            case 0:
                var3 = arg0;
                var0 = var3.sessionId;
                if (!var0) {
                    _fun9757_ip = 33;
                    continue _fun9757
                }
            case 12:
                var2 = _closure1_slot0;
                var1 = var2.set;
                var0 = arg1;
                var0 = var1.bind(var2)(var3, var0);
            case 33:
                var0 = undefined;
                return var0;
        }
    };
    var1.storeSessionDataForTransport = var2;
    var0 = function(arg0, arg1) { // Original name: updateSessionDataForTransport, environment: var0
        _fun9758: for (var _fun9758_ip = 0;;) switch (_fun9758_ip) {
            case 0:
                var3 = arg0;
                var0 = var3.sessionId;
                if (!var0) {
                    _fun9758_ip = 74;
                    continue _fun9758
                }
            case 12:
                var2 = _closure1_slot0;
                var1 = var2.get;
                var7 = var1.bind(var2)(var3);
                if (var7) {
                    _fun9758_ip = 34;
                    continue _fun9758
                }
            case 32:
                var7 = {};
            case 34:
                var2 = _closure1_slot0;
                var1 = var2.set;
                var0 = global;
                var6 = var0.Object;
                var5 = var6.assign;
                var4 = {};
                var0 = arg1;
                var0 = var5.bind(var6)(var4, var7, var0);
                var0 = var1.bind(var2)(var3, var0);
            case 74:
                var0 = undefined;
                return var0;
        }
    };
    var1.updateSessionDataForTransport = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);