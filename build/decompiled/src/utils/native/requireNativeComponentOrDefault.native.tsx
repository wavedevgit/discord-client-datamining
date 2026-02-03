// utils/native/requireNativeComponentOrDefault.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 0;
    var6 = var5[var0];
    var0 = undefined;
    var6 = var4.bind(var0)(var6);
    var7 = var6.requireNativeComponent;
    var _closure1_slot0 = var7;
    var7 = var6.UIManager;
    var _closure1_slot1 = var7;
    var6 = var6.View;
    var _closure1_slot2 = var6;
    var6 = 1;
    var7 = var5[var6];
    var6 = metroImportDefault;
    var8 = var6.bind(var0)(var7);
    var6 = var8.prototype;
    var7 = Object.create(var6, {
        constructor: {
            value: var8
        }
    });
    var11 = 'RequireNativeComponentOrDefault';
    var12 = var7;
    var6 = new var12[var8](var11, var10);
    var6 = var6 instanceof Object ? var6 : var7;
    var _closure1_slot3 = var6;
    var3 = var3.Map;
    var6 = var3.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var3
        }
    });
    var12 = var6;
    var3 = new var12[var3](var11);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/native/requireNativeComponentOrDefault.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun37542: for (var _fun37542_ip = 0;;) switch (_fun37542_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.componentName;
                var5 = var0.componentFoundInstance;
                var2 = var0.componentMissingFallbackInstance;
                var7 = undefined;
                if (!(var2 === var7)) {
                    _fun37542_ip = 34;
                    continue _fun37542
                }
            case 27:
                var2 = _closure1_slot2;
            case 34:
                var4 = var0.warnWhenMissing;
                if (!(var4 === var7)) {
                    _fun37542_ip = 46;
                    continue _fun37542
                }
            case 44:
                var4 = true;
            case 46:
                var6 = _closure1_slot1;
                var0 = var6.hasViewManagerConfig;
                var0 = var0.bind(var6)(var3);
                if (var0) {
                    _fun37542_ip = 121;
                    continue _fun37542
                }
            case 67:
                var0 = var2;
                if (!var4) {
                    _fun37542_ip = 182;
                    continue _fun37542
                }
            case 73:
                var8 = _closure1_slot3;
                var6 = var8.warn;
                var4 = global;
                var4 = var4.HermesInternal;
                var10 = var4.concat;
                var9 = '';
                var4 = ' not found, you are likely on a branch override without the native code.';
                var4 = var10.bind(var9)(var3, var4);
                var4 = var6.bind(var8)(var4);
                var0 = var2;
                _fun37542_ip = 182;
                continue _fun37542;
            case 121:
                var4 = _closure1_slot4;
                var2 = var4.has;
                var2 = var2.bind(var4)(var3);
                if (var2) {
                    _fun37542_ip = 168;
                    continue _fun37542
                }
            case 138:
                var4 = _closure1_slot4;
                var2 = var4.set;
                var6 = null;
                if (!(var6 == var5)) {
                    _fun37542_ip = 162;
                    continue _fun37542
                }
            case 153:
                var6 = _closure1_slot0;
                var5 = var6.bind(var7)(var3);
            case 162:
                var2 = var2.bind(var4)(var3, var5);
            case 168:
                var2 = _closure1_slot4;
                var1 = var2.get;
                var0 = var1.bind(var2)(var3);
            case 182:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 3, 2]);