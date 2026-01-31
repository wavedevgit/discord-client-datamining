// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var0 = true;
    var2.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var1, var0, var2);
    var0 = {};
    var2 = function(arg0) { // Original name: isXMLFile, environment: var3
        _fun37985: for (var _fun37985_ip = 0;;) switch (_fun37985_ip) {
            case 0:
                var6 = arg0;
                var1 = !var6;
                var0 = !var1;
                if (var1) {
                    _fun37985_ip = 70;
                    continue _fun37985
                }
            case 12:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 0;
                var3 = var3[var2];
                var2 = undefined;
                var5 = var4.bind(var2)(var3);
                var4 = var5.getStringFromDataView;
                var3 = _closure1_slot2;
                var2 = _closure1_slot3;
                var2 = var2.length;
                var2 = var4.bind(var5)(var6, var3, var2);
                var1 = _closure1_slot3;
                var0 = var2 === var1;
            case 70:
                return var0;
        }
    };
    var0.isXMLFile = var2;
    var2 = function(arg0) { // Original name: findOffsets, environment: var3
        var1 = new Array(0);
        var2 = var1.push;
        var0 = {};
        var3 = _closure1_slot2;
        var0.dataOffset = var3;
        var3 = arg0;
        var3 = var3.byteLength;
        var0.length = var3;
        var0 = var2.bind(var1)(var0);
        var0 = {};
        var0.xmpChunks = var1;
        return var0;
    };
    var0.findOffsets = var2;
    var2 = 0;
    var _closure1_slot2 = var2;
    var2 = '<?xpacket begin';
    var _closure1_slot3 = var2;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4129]);