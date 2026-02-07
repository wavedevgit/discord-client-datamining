// ../discord_common/js/packages/rpc-schema/rpc-schema.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
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
    var0 = 2;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/rpc-schema/rpc-schema.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun98575: for (var _fun98575_ip = 0;;) switch (_fun98575_ip) {
            case 0:
                var0 = arg1;
                var4 = var0.scope;
                var3 = var0.handler;
                var2 = undefined;
                var _closure2_slot0 = var2;
                var _closure2_slot1 = var2;
                var0 = {};
                var0.scope = var4;
                var0.handler = var3;
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 0;
                var3 = var5[var3];
                var3 = var4.bind(var2)(var3);
                var4 = var3.RPCCommandSchemas;
                var3 = arg0;
                var4 = var4[var3];
                var3 = null;
                var5 = var3 == var4;
                if (var5) {
                    _fun98575_ip = 89;
                    continue _fun98575
                }
            case 83:
                var2 = var4.request;
            case 89:
                _closure2_slot0 = var2;
                _closure2_slot1 = var3;
                if (!(var3 != var2)) {
                    _fun98575_ip = 114;
                    continue _fun98575
                }
            case 101:
                var1 = function(arg0) { // Environment: var1
                    _fun98576: for (var _fun98576_ip = 0;;) switch (_fun98576_ip) {
                        case 0:
                            var5 = arg0;
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 == var2)) {
                                _fun98576_ip = 76;
                                continue _fun98576
                            }
                        case 16:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var1 = 1;
                            var1 = var3[var1];
                            var6 = undefined;
                            var3 = var2.bind(var6)(var1);
                            var2 = var3.joiReqObj;
                            var4 = var5.object;
                            var1 = _closure2_slot0;
                            var1 = var1.bind(var6)(var5);
                            var1 = var4.bind(var5)(var1);
                            var1 = var2.bind(var3)(var1);
                            _closure2_slot1 = var1;
                        case 76:
                            var0 = _closure2_slot1;
                            return var0;
                    }
                };
                var0.validation = var1;
            case 114:
                return var0;
        }
    };
    var2.createRPCCommand = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12863, 12864, 2]);