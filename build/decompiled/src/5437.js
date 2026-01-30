// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = metroImportDefault;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var2 = function(arg0) { // Original name: pickNotNil, environment: var0
        _fun48340: for (var _fun48340_ip = 0;;) switch (_fun48340_ip) {
            case 0:
                var9 = arg0;
                var0 = {};
                var7 = var9;
                var2 = null;
                var1 = global;
                var3 = undefined;
                for (var4 in var7)
                    case 22: {
                        case 31: var11 = var4;
                        var10 = var1.Object;
                        var10 = var10.prototype;
                        var12 = var10.hasOwnProperty;
                        var10 = var12.call;
                        var10 = var10.bind(var12)(var9, var11);
                        if (!var10) {
                            _fun48340_ip = 22;
                            continue _fun48340
                        }
                        case 65: var10 = var9[var11];
                        var3 = var10;
                        if (var2 == var3) {
                            _fun48340_ip = 22;
                            continue _fun48340
                        }
                        case 76: var0[var11] = var10;
                        var3 = var10;
                        _fun48340_ip = 22;
                        continue _fun48340;
                    }
            case 85:
                return var0;
        }
    };
    var1.pickNotNil = var2;
    var2 = /#([^)]+)'?\)?$/;
    var1.idPattern = var2;
    var2 = function() { // Original name: getRandomNumber, environment: var0
        var0 = global;
        var2 = var0.Math;
        var1 = var2.floor;
        var4 = var0.Math;
        var3 = var4.random;
        var3 = var3.bind(var4)();
        var5 = var0.Math;
        var4 = var5.floor;
        var7 = var0.Math;
        var6 = var7.random;
        var6 = var6.bind(var7)();
        var7 = var0.Date;
        var0 = var7.now;
        var0 = var0.bind(var7)();
        var0 = var6 * var0;
        var0 = var4.bind(var5)(var0);
        var0 = var3 * var0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.getRandomNumber = var2;
    var0 = function() { // Original name: warnUnimplementedFilter, environment: var0
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var1 = global;
        var6 = var1.JSON;
        var5 = var6.stringify;
        var3 = ['FeComponentTransfer', 'FeConvolveMatrix', 'FeDiffuseLighting', 'FeDisplacementMap', 'FeFuncA', 'FeFuncB', 'FeFuncG', 'FeFuncR', 'FeImage', 'FeMorphology', 'FePointLight', 'FeSpecularLighting', 'FeSpotLight', 'FeTile', 'FeTurbulence'];
        var2 = null;
        var1 = 2;
        var3 = var5.bind(var6)(var3, var2, var1);
        var2 = true;
        var1 = 'Some of the used filters are not yet supported on native platforms. Please check the USAGE.md for more info. Not implemented filters:\n';
        var1 = var4.bind(var0)(var2, var1, var3);
        return var0;
    };
    var1.warnUnimplementedFilter = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4012]);