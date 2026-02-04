// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun37653: for (var _fun37653_ip = 0;;) switch (_fun37653_ip) {
        case 0:
            var5 = require;
            var2 = exports;
            var7 = dependencyMap;
            var0 = global;
            var6 = var0.Object;
            var4 = var6.defineProperty;
            var1 = {};
            var8 = true;
            var1.value = var8;
            var0 = '__esModule';
            var0 = var4.bind(var6)(var2, var0, var1);
            var1 = {};
            var6 = 'RNLinearGradient';
            var1.uiViewClassName = var6;
            var4 = {};
            var9 = {};
            var11 = 0;
            var10 = var7[var11];
            var0 = undefined;
            var13 = var5.bind(var0)(var10);
            var10 = 'default';
            var14 = var10 in var13;
            var12 = var13;
            if (!var14) {
                _fun37653_ip = 92;
                continue _fun37653
            }
        case 87:
            var12 = var13.default;
        case 92:
            var9.diff = var12;
            var4.startPoint = var9;
            var9 = {};
            var12 = var7[var11];
            var13 = var5.bind(var0)(var12);
            var14 = var10 in var13;
            var12 = var13;
            if (!var14) {
                _fun37653_ip = 128;
                continue _fun37653
            }
        case 123:
            var12 = var13.default;
        case 128:
            var9.diff = var12;
            var4.endPoint = var9;
            var9 = {};
            var12 = 1;
            var12 = var7[var12];
            var13 = var5.bind(var0)(var12);
            var14 = var10 in var13;
            var12 = var13;
            if (!var14) {
                _fun37653_ip = 167;
                continue _fun37653
            }
        case 162:
            var12 = var13.default;
        case 167:
            var9.process = var12;
            var4.colors = var9;
            var4.locations = var8;
            var4.useAngle = var8;
            var9 = {};
            var11 = var7[var11];
            var11 = var5.bind(var0)(var11);
            var12 = var10 in var11;
            var10 = var11;
            if (!var12) {
                _fun37653_ip = 212;
                continue _fun37653
            }
        case 207:
            var10 = var11.default;
        case 212:
            var9.diff = var10;
            var4.angleCenter = var9;
            var4.angle = var8;
            var4.borderRadii = var8;
            var1.validAttributes = var4;
            var _closure1_slot0 = var1;
            var4 = 2;
            var4 = var7[var4];
            var5 = var5.bind(var0)(var4);
            var4 = var5.get;
            var3 = function() { // Environment: var3
                var0 = _closure1_slot0;
                return var0;
            };
            var3 = var4.bind(var5)(var6, var3);
            var2.default = var3;
            var2.__INTERNAL_VIEW_CONFIG = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [87, 89, 42]);