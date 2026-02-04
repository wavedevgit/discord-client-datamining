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
    var2 = function arg0() {
        var2 = _closure1_slot0;
        var1 = var2.delete;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.cleanupSessionDataForTransport = var2;
    var2 = function arg0() {
        _fun9758: for (var _fun9758_ip = 0;;) switch (_fun9758_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = var2.get;
                var0 = arg0;
                var1 = var1.bind(var2)(var0);
                var0 = null;
                var2 = var0 == var1;
                var0 = undefined;
                if (var2) {
                    _fun9758_ip = 37;
                    continue _fun9758
                }
            case 31:
                var0 = var1.clientInfo;
            case 37:
                return var0;
        }
    };
    var1.getClientInfoForTransport = var2;
    var2 = function arg0() {
        _fun9759: for (var _fun9759_ip = 0;;) switch (_fun9759_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = var2.get;
                var0 = arg0;
                var1 = var1.bind(var2)(var0);
                var0 = null;
                var2 = var0 == var1;
                var0 = undefined;
                if (var2) {
                    _fun9759_ip = 37;
                    continue _fun9759
                }
            case 31:
                var0 = var1.protocolVersion;
            case 37:
                return var0;
        }
    };
    var1.getProtocolVersionForTransport = var2;
    var2 = function arg0() {
        var2 = _closure1_slot0;
        var1 = var2.get;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.getSessionDataForTransport = var2;
    var2 = function arg0, arg1() {
        _fun9761: for (var _fun9761_ip = 0;;) switch (_fun9761_ip) {
            case 0:
                var3 = arg0;
                var0 = var3.sessionId;
                if (!var0) {
                    _fun9761_ip = 33;
                    continue _fun9761
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
    var0 = function arg0, arg1() {
        _fun9762: for (var _fun9762_ip = 0;;) switch (_fun9762_ip) {
            case 0:
                var3 = arg0;
                var0 = var3.sessionId;
                if (!var0) {
                    _fun9762_ip = 74;
                    continue _fun9762
                }
            case 12:
                var2 = _closure1_slot0;
                var1 = var2.get;
                var7 = var1.bind(var2)(var3);
                if (var7) {
                    _fun9762_ip = 34;
                    continue _fun9762
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