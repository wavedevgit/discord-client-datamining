// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var6[var3];
    var5 = var5.bind(var0)(var3);
    var _closure1_slot3 = var5;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var4 = var5.createContext;
    var3 = {};
    var3 = var4.bind(var5)(var3);
    var _closure1_slot5 = var3;
    var4 = {};
    var5 = 'function pnpm_indexTsx1(index,dimensions){const{itemDimensions}=this.__closure;itemDimensions.value={...itemDimensions.value,[index]:dimensions};}';
    var4.code = var5;
    var _closure1_slot6 = var4;
    var4 = {};
    var5 = 'function pnpm_indexTsx2(dimensions){const{containerSize}=this.__closure;containerSize.value=dimensions;}';
    var4.code = var5;
    var _closure1_slot7 = var4;
    var2.GlobalStateContext = var3;
    var3 = function arg0() {
        var0 = arg0;
        var4 = var0.children;
        var9 = var0.value;
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var2 = 3;
        var7 = var6[var2];
        var3 = undefined;
        var10 = var5.bind(var3)(var7);
        var8 = var10.useSharedValue;
        var7 = {
            'width': 0,
            'height': 0
        };
        var13 = var8.bind(var10)(var7);
        var _closure2_slot0 = var13;
        var2 = var6[var2];
        var6 = var5.bind(var3)(var2);
        var5 = var6.useSharedValue;
        var2 = {};
        var12 = var5.bind(var6)(var2);
        var _closure2_slot1 = var12;
        var11 = function arg0, arg1() {
            var2 = _closure2_slot1;
            var0 = global;
            var6 = var0.Object;
            var5 = var6.assign;
            var4 = var2.value;
            var8 = _closure1_slot2;
            var0 = undefined;
            var7 = {};
            var3 = arg0;
            var1 = arg1;
            var3 = var8.bind(var0)(var7, var3, var1);
            var1 = {};
            var1 = var5.bind(var6)(var1, var4, var3);
            var2.value = var1;
            return var0;
        };
        var2 = {};
        var2.itemDimensions = var12;
        var11.__closure = var2;
        var2 = 9846581158902.0;
        var11.__workletHash = var2;
        var2 = _closure1_slot6;
        var11.__initData = var2;
        var10 = function arg0() {
            var1 = _closure2_slot0;
            var0 = arg0;
            var1.value = var0;
            var0 = undefined;
            return var0;
        };
        var1 = {};
        var1.containerSize = var13;
        var10.__closure = var1;
        var1 = 5978604737778.0;
        var10.__workletHash = var1;
        var1 = _closure1_slot7;
        var10.__initData = var1;
        var2 = _closure1_slot4;
        var0 = _closure1_slot5;
        var1 = var0.Provider;
        var0 = {};
        var5 = global;
        var8 = var5.Object;
        var7 = var8.assign;
        var6 = {};
        var5 = {};
        var5.containerSize = var13;
        var5.itemDimensions = var12;
        var5.updateItemDimensions = var11;
        var5.updateContainerSize = var10;
        var6.layout = var5;
        var5 = {};
        var5 = var7.bind(var8)(var5, var9, var6);
        var0.value = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.GlobalStateProvider = var3;
    var1 = function() {
        _fun74966: for (var _fun74966_ip = 0;;) switch (_fun74966_ip) {
            case 0:
                var2 = _closure1_slot3;
                var1 = var2.useContext;
                var0 = _closure1_slot5;
                var0 = var1.bind(var2)(var0);
                if (var0) {
                    _fun74966_ip = 61;
                    continue _fun74966
                }
            case 25:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var4 = 'useGlobalState must be used within a GlobalStateProvider';
                var5 = var2;
                var1 = new var5[var3](var4, var3);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 61:
                return var0;
        }
    };
    var2.useGlobalState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 31, 33, 3712]);