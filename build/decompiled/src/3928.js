// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var4 = var3.useCallback;
    var _closure1_slot2 = var4;
    var3 = var3.useContext;
    var _closure1_slot3 = var3;
    var1 = function() {
        _fun35439: for (var _fun35439_ip = 0;;) switch (_fun35439_ip) {
            case 0:
                var4 = undefined;
                var3 = undefined;
                var0 = arguments.length;
                var2 = 0;
                var5 = var0 > var2;
                var6 = 'root';
                var0 = var6;
                if (!var5) {
                    _fun35439_ip = 40;
                    continue _fun35439
                }
            case 25:
                var5 = arguments[var2];
                var0 = var6;
                if (!(var4 !== var5)) {
                    _fun35439_ip = 40;
                    continue _fun35439
                }
            case 36:
                var0 = arguments[var2];
            case 40:
                var _closure2_slot0 = var0;
                var3 = _closure1_slot3;
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 1;
                var2 = var6[var2];
                var2 = var5.bind(var4)(var2);
                var2 = var2.PortalDispatchContext;
                var3 = var3.bind(var4)(var2);
                var _closure2_slot1 = var3;
                var2 = null;
                if (!(var2 !== var3)) {
                    _fun35439_ip = 187;
                    continue _fun35439
                }
            case 92:
                var3 = _closure1_slot2;
                var2 = function() { // Environment: var1
                    var2 = _closure2_slot1;
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var0 = 2;
                    var4 = var4[var0];
                    var0 = undefined;
                    var4 = var5.bind(var0)(var4);
                    var4 = var4.ACTIONS;
                    var4 = var4.REGISTER_HOST;
                    var1.type = var4;
                    var3 = _closure2_slot0;
                    var1.hostName = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = new Array(0);
                var6 = var3.bind(var4)(var2, var0);
                var2 = function() { // Environment: var1
                    var2 = _closure2_slot1;
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var0 = 2;
                    var4 = var4[var0];
                    var0 = undefined;
                    var4 = var5.bind(var0)(var4);
                    var4 = var4.ACTIONS;
                    var4 = var4.DEREGISTER_HOST;
                    var1.type = var4;
                    var3 = _closure2_slot0;
                    var1.hostName = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = new Array(0);
                var5 = var3.bind(var4)(var2, var0);
                var2 = function(arg0, arg1) { // Environment: var1
                    var2 = _closure2_slot1;
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var0 = 2;
                    var4 = var4[var0];
                    var0 = undefined;
                    var4 = var5.bind(var0)(var4);
                    var4 = var4.ACTIONS;
                    var4 = var4.ADD_UPDATE_PORTAL;
                    var1.type = var4;
                    var3 = _closure2_slot0;
                    var1.hostName = var3;
                    var3 = arg0;
                    var1.portalName = var3;
                    var3 = arg1;
                    var1.node = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = new Array(0);
                var2 = var3.bind(var4)(var2, var0);
                var0 = {};
                var0.registerHost = var6;
                var0.deregisterHost = var5;
                var0.addPortal = var2;
                var0.updatePortal = var2;
                var2 = function(arg0) { // Environment: var1
                    var2 = _closure2_slot1;
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var0 = 2;
                    var4 = var4[var0];
                    var0 = undefined;
                    var4 = var5.bind(var0)(var4);
                    var4 = var4.ACTIONS;
                    var4 = var4.REMOVE_PORTAL;
                    var1.type = var4;
                    var3 = _closure2_slot0;
                    var1.hostName = var3;
                    var3 = arg0;
                    var1.portalName = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = new Array(0);
                var1 = var3.bind(var4)(var2, var1);
                var0.removePortal = var1;
                return var0;
            case 187:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var8 = "'PortalDispatchContext' cannot be null, please add 'PortalProvider' to the root component.";
                var9 = var1;
                var0 = new var9[var2](var8, var7);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var2.usePortal = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3929, 3930]);