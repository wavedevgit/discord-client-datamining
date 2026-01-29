// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = function(arg0) { // Original name: getViewInfo73, environment: var0
        _fun33998: for (var _fun33998_ip = 0;;) switch (_fun33998_ip) {
            case 0:
                var2 = arg0;
                var0 = {};
                var3 = null;
                var5 = var3 == var2;
                var4 = undefined;
                if (var5) {
                    _fun33998_ip = 37;
                    continue _fun33998
                }
            case 16:
                var5 = var2.viewConfig;
                var6 = var3 == var5;
                var4 = undefined;
                if (var6) {
                    _fun33998_ip = 37;
                    continue _fun33998
                }
            case 31:
                var4 = var5.uiViewClassName;
            case 37:
                var0.viewName = var4;
                var5 = var3 == var2;
                var4 = undefined;
                if (var5) {
                    _fun33998_ip = 57;
                    continue _fun33998
                }
            case 51:
                var4 = var2._nativeTag;
            case 57:
                var0.viewTag = var4;
                var3 = var3 == var2;
                var1 = undefined;
                if (var3) {
                    _fun33998_ip = 77;
                    continue _fun33998
                }
            case 71:
                var1 = var2.viewConfig;
            case 77:
                var0.viewConfig = var1;
                return var0;
        }
    };
    var _closure1_slot0 = var2;
    var2 = function(arg0) { // Original name: getViewInfoLatest, environment: var0
        _fun33999: for (var _fun33999_ip = 0;;) switch (_fun33999_ip) {
            case 0:
                var2 = arg0;
                var0 = {};
                var3 = null;
                var5 = var3 == var2;
                var4 = undefined;
                if (var5) {
                    _fun33999_ip = 37;
                    continue _fun33999
                }
            case 16:
                var5 = var2._viewConfig;
                var6 = var3 == var5;
                var4 = undefined;
                if (var6) {
                    _fun33999_ip = 37;
                    continue _fun33999
                }
            case 31:
                var4 = var5.uiViewClassName;
            case 37:
                var0.viewName = var4;
                var5 = var3 == var2;
                var4 = undefined;
                if (var5) {
                    _fun33999_ip = 57;
                    continue _fun33999
                }
            case 51:
                var4 = var2.__nativeTag;
            case 57:
                var0.viewTag = var4;
                var3 = var3 == var2;
                var1 = undefined;
                if (var3) {
                    _fun33999_ip = 77;
                    continue _fun33999
                }
            case 71:
                var1 = var2._viewConfig;
            case 77:
                var0.viewConfig = var1;
                return var0;
        }
    };
    var _closure1_slot1 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var0 = function(arg0) { // Original name: getViewInfo, environment: var0
        _fun34000: for (var _fun34000_ip = 0;;) switch (_fun34000_ip) {
            case 0:
                var3 = arg0;
                var0 = var3._nativeTag;
                var2 = undefined;
                if (!(var2 !== var0)) {
                    _fun34000_ip = 27;
                    continue _fun34000
                }
            case 15:
                var1 = var3.__nativeTag;
                var0 = null;
                if (!(var0 === var1)) {
                    _fun34000_ip = 77;
                    continue _fun34000
                }
            case 27:
                var0 = var3.__nativeTag;
                if (!(var2 !== var0)) {
                    _fun34000_ip = 49;
                    continue _fun34000
                }
            case 37:
                var1 = var3.__nativeTag;
                var0 = null;
                if (!(var0 === var1)) {
                    _fun34000_ip = 63;
                    continue _fun34000
                }
            case 49:
                var0 = _closure1_slot0;
                var0 = var0.bind(var2)(var3);
                _fun34000_ip = 75;
                continue _fun34000;
            case 63:
                var1 = _closure1_slot1;
                var0 = var1.bind(var2)(var3);
            case 75:
                _fun34000_ip = 89;
                continue _fun34000;
            case 77:
                var1 = _closure1_slot0;
                var0 = var1.bind(var2)(var3);
            case 89:
                return var0;
        }
    };
    var1.getViewInfo = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);