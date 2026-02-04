// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function() { // Environment: var0
        var2 = this;
        var _closure2_slot0 = var2;
        var3 = global;
        var5 = var3.clearTimeout;
        var4 = var2.resetTimer;
        var0 = undefined;
        var4 = var5.bind(var0)(var4);
        var4 = var3.setTimeout;
        var3 = function() { // Environment: var1
            var1 = _closure2_slot0;
            var0 = var1.resetSequences;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var1 = 1000;
        var1 = var4.bind(var0)(var3, var1);
        var2.resetTimer = var1;
        return var0;
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);