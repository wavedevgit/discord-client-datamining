// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var1, var0, var3);
    var0 = new Array(0);
    var _closure1_slot0 = var0;
    var0 = {};
    var3 = 'default';
    var0.name = var3;
    var _closure1_slot1 = var0;
    var0 = {};
    var3 = function arg0() {
        var1 = arg0;
        _closure1_slot1 = var1;
        var2 = _closure1_slot0;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot1;
            var1 = arg0;
            var0 = undefined;
            var0 = var1.bind(var0)(var2);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var0.setActiveScene = var3;
    var3 = function() {
        var0 = _closure1_slot1;
        return var0;
    };
    var0.getActiveScene = var3;
    var2 = function arg0() {
        var3 = arg0;
        var _closure2_slot0 = var3;
        var2 = _closure1_slot0;
        var0 = var2.push;
        var0 = var0.bind(var2)(var3);
        var0 = {};
        var1 = function() {
            var3 = _closure1_slot0;
            var2 = var3.filter;
            var0 = function(arg0) { // Environment: var0
                var1 = _closure2_slot0;
                var0 = arg0;
                var0 = var1 !== var0;
                return var0;
            };
            var0 = var2.bind(var3)(var0);
            _closure1_slot0 = var0;
            var0 = undefined;
            return var0;
        };
        var0.remove = var1;
        return var0;
    };
    var0.addActiveSceneChangedListener = var2;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);