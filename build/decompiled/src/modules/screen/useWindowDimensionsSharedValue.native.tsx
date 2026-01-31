// modules/screen/useWindowDimensionsSharedValue.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var12 = true;
    var1.value = var12;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var1 = 0;
    var7 = var6[var1];
    var0 = undefined;
    var10 = var5.bind(var0)(var7);
    var8 = var10.makeMutable;
    var7 = {};
    var9 = 1;
    var11 = var6[var9];
    var13 = var5.bind(var0)(var11);
    var11 = var13.getWindowDimensions;
    var15 = var11.bind(var13)();
    var16 = var7;
    var11 = copyDataProperties(var16, var15);
    var7 = var8.bind(var10)(var7);
    var _closure1_slot2 = var7;
    var1 = var6[var1];
    var8 = var5.bind(var0)(var1);
    var7 = var8.makeMutable;
    var1 = {};
    var9 = var6[var9];
    var11 = var5.bind(var0)(var9);
    var10 = var11.getWindowDimensions;
    var9 = {};
    var9.ignoreKeyboard = var12;
    var15 = var10.bind(var11)(var9);
    var16 = var1;
    var9 = copyDataProperties(var16, var15);
    var1 = var7.bind(var8)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var6[var1];
    var4 = var4.bind(var0)(var1);
    var1 = function(arg0, arg1) { // Environment: var3
        var3 = _closure1_slot0;
        var4 = _closure1_slot1;
        var2 = 3;
        var5 = var4[var2];
        var0 = undefined;
        var7 = var3.bind(var0)(var5);
        var6 = _closure1_slot2;
        var5 = arg0;
        var5 = var7.bind(var0)(var6, var5);
        var2 = var4[var2];
        var3 = var3.bind(var0)(var2);
        var2 = _closure1_slot3;
        var1 = arg1;
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var4.bind(var0)(var1);
    var1 = {};
    var4 = 'function getWindowDimensionsWorklet_useWindowDimensionsSharedValueNativeTsx1(params=undefined){const{windowDimensionsSharedValueIgnoringKeyboard,windowDimensionsSharedValue}=this.__closure;return(params===null||params===void 0?void 0:params.ignoreKeyboard)===true?windowDimensionsSharedValueIgnoringKeyboard.get():windowDimensionsSharedValue.get();}';
    var1.code = var4;
    var _closure1_slot4 = var1;
    var1 = function() { // Environment: var3
        var0 = function() { // Original name: getWindowDimensionsWorklet, environment: var0
            _fun99980: for (var _fun99980_ip = 0;;) switch (_fun99980_ip) {
                case 0:
                    var0 = arguments[0];
                    var1 = undefined;
                    if (!(var0 === var1)) {
                        _fun99980_ip = 11;
                        continue _fun99980
                    }
                case 9:
                    var0 = undefined;
                case 11:
                    var2 = null;
                    var2 = var2 == var0;
                    var1 = undefined;
                    if (var2) {
                        _fun99980_ip = 28;
                        continue _fun99980
                    }
                case 22:
                    var1 = var0.ignoreKeyboard;
                case 28:
                    var0 = true;
                    if (!(var0 !== var1)) {
                        _fun99980_ip = 52;
                        continue _fun99980
                    }
                case 34:
                    var1 = _closure1_slot2;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    _fun99980_ip = 68;
                    continue _fun99980;
                case 52:
                    var2 = _closure1_slot3;
                    var1 = var2.get;
                    var0 = var1.bind(var2)();
                case 68:
                    return var0;
            }
        };
        var2 = {};
        var3 = _closure1_slot3;
        var2.windowDimensionsSharedValueIgnoringKeyboard = var3;
        var3 = _closure1_slot2;
        var2.windowDimensionsSharedValue = var3;
        var0.__closure = var2;
        var2 = 17271034964949.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot4;
        var0.__initData = var1;
        return var0;
    };
    var1 = var1.bind(var0)();
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/screen/useWindowDimensionsSharedValue.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function() { // Original name: useWindowDimensionsSharedValue, environment: var3
        _fun99981: for (var _fun99981_ip = 0;;) switch (_fun99981_ip) {
            case 0:
                var0 = arguments[0];
                var1 = undefined;
                if (!(var0 === var1)) {
                    _fun99981_ip = 11;
                    continue _fun99981
                }
            case 9:
                var0 = undefined;
            case 11:
                var2 = null;
                var2 = var2 == var0;
                var1 = undefined;
                if (var2) {
                    _fun99981_ip = 28;
                    continue _fun99981
                }
            case 22:
                var1 = var0.ignoreKeyboard;
            case 28:
                var0 = true;
                if (!(var0 !== var1)) {
                    _fun99981_ip = 43;
                    continue _fun99981
                }
            case 34:
                var0 = _closure1_slot2;
                _fun99981_ip = 50;
                continue _fun99981;
            case 43:
                var0 = _closure1_slot3;
            case 50:
                return var0;
        }
    };
    var2.default = var3;
    var2.getWindowDimensionsWorklet = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3679, 1464, 5219, 5263, 2]);