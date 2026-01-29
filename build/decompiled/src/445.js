// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = global;
    var _closure1_slot0 = var2;
    var2 = metroImportDefault;
    var _closure1_slot1 = var2;
    var2 = dependencyMap;
    var _closure1_slot2 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var0 = function(arg0, arg1) { // Original name: codegenNativeComponent, environment: var0
        _fun6012: for (var _fun6012_ip = 0;;) switch (_fun6012_ip) {
            case 0:
                var7 = arg0;
                var3 = arg1;
                var1 = _closure1_slot0;
                var1 = var1.RN$Bridgeless;
                var4 = var7;
                if (!var3) {
                    _fun6012_ip = 46;
                    continue _fun6012
                }
            case 25:
                var2 = var3.paperComponentName;
                var1 = null;
                var4 = var7;
                if (!(var1 != var2)) {
                    _fun6012_ip = 46;
                    continue _fun6012
                }
            case 40:
                var4 = var3.paperComponentName;
            case 46:
                var5 = null;
                var2 = var4;
                if (!(var5 != var3)) {
                    _fun6012_ip = 252;
                    continue _fun6012
                }
            case 58:
                var1 = var3.paperComponentNameDeprecated;
                var2 = var4;
                if (!(var5 != var1)) {
                    _fun6012_ip = 252;
                    continue _fun6012
                }
            case 74:
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var8 = 0;
                var1 = var1[var8];
                var6 = undefined;
                var4 = var4.bind(var6)(var1);
                var1 = var4.hasViewManagerConfig;
                var1 = var1.bind(var4)(var7);
                var2 = var7;
                if (var1) {
                    _fun6012_ip = 252;
                    continue _fun6012
                }
            case 115:
                var1 = var3.paperComponentNameDeprecated;
                if (!(var5 != var1)) {
                    _fun6012_ip = 170;
                    continue _fun6012
                }
            case 125:
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var8];
                var6 = var4.bind(var6)(var1);
                var4 = var6.hasViewManagerConfig;
                var1 = var3.paperComponentNameDeprecated;
                var1 = var4.bind(var6)(var1);
                if (!var1) {
                    _fun6012_ip = 170;
                    continue _fun6012
                }
            case 162:
                var2 = var3.paperComponentNameDeprecated;
                _fun6012_ip = 252;
                continue _fun6012;
            case 170:
                var1 = global;
                var4 = var1.Error;
                var3 = var3.paperComponentNameDeprecated;
                var5 = var5 != var3;
                var6 = '(unknown)';
                if (!var5) {
                    _fun6012_ip = 200;
                    continue _fun6012
                }
            case 197:
                var6 = var3;
            case 200:
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var3 = 'Failed to find native component for either ';
                var1 = ' or ';
                var11 = var5.bind(var3)(var7, var1, var6);
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var12 = var3;
                var1 = new var12[var4](var11, var10);
                var1 = var1 instanceof Object ? var1 : var3;
                throw var1;
            case 252:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 1;
                var0 = var1[var0];
                var1 = undefined;
                var0 = var3.bind(var1)(var0);
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [46, 446]);