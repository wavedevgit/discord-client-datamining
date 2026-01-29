// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var1 = true;
    var3.value = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var2, var1, var3);
    var1 = {};
    var3 = 'function getRelativeCoords_Pnpm_getRelativeCoordsTs1(animatedRef,absoluteX,absoluteY){const{measure}=this.__closure;const parentCoords=measure(animatedRef);if(parentCoords===null){return null;}return{x:absoluteX-parentCoords.pageX,y:absoluteY-parentCoords.pageY};}';
    var1.code = var3;
    var _closure1_slot2 = var1;
    var1 = function() { // Environment: var0
        var0 = function(arg0, arg1, arg2) { // Original name: getRelativeCoords, environment: var0
            _fun34891: for (var _fun34891_ip = 0;;) switch (_fun34891_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 0;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.measure;
                    var0 = arg0;
                    var2 = var1.bind(var2)(var0);
                    var0 = null;
                    if (!(var0 !== var2)) {
                        _fun34891_ip = 83;
                        continue _fun34891
                    }
                case 44:
                    var1 = {};
                    var4 = var2.pageX;
                    var3 = arg1;
                    var3 = var3 - var4;
                    var1.x = var3;
                    var3 = var2.pageY;
                    var2 = arg2;
                    var2 = var2 - var3;
                    var1.y = var2;
                    var0 = var1;
                case 83:
                    return var0;
            }
        };
        var2 = {};
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 0;
        var4 = var4[var3];
        var3 = undefined;
        var3 = var5.bind(var3)(var4);
        var3 = var3.measure;
        var2.measure = var3;
        var0.__closure = var2;
        var2 = 11016839059094.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot2;
        var0.__initData = var1;
        return var0;
    };
    var0 = undefined;
    var1 = var1.bind(var0)();
    var2.getRelativeCoords = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3851]);