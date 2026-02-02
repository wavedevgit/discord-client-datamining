// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = function arg0() {
        var2 = arg0;
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            var0 = global;
            var2 = var0.String;
            var1 = var2.fromCharCode;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var2 = var1.bind(var2)(var0);
        var1 = var2.join;
        var0 = '';
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot0 = var2;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var1, var3, var4);
    var1.getStringValue = var2;
    var2 = function arg0() {
        _fun38121: for (var _fun38121_ip = 0;;) switch (_fun38121_ip) {
            case 0:
                var4 = arg0;
                var0 = var4.length;
                var3 = 8;
                if (!(var0 >= var3)) {
                    _fun38121_ip = 82;
                    continue _fun38121
                }
            case 15:
                var5 = _closure1_slot0;
                var2 = var4.slice;
                var1 = 0;
                var1 = var2.bind(var4)(var1, var3);
                var2 = undefined;
                var5 = var5.bind(var2)(var1);
                var1 = 'ASCII\x00\x00\x00';
                if (!(var1 !== var5)) {
                    _fun38121_ip = 114;
                    continue _fun38121
                }
            case 52:
                var1 = 'JIS\x00\x00\x00\x00\x00';
                if (!(var1 !== var5)) {
                    _fun38121_ip = 106;
                    continue _fun38121
                }
            case 62:
                var1 = 'UNICODE\x00';
                if (!(var1 !== var5)) {
                    _fun38121_ip = 98;
                    continue _fun38121
                }
            case 72:
                var1 = '\x00\x00\x00\x00\x00\x00\x00\x00';
                if (!(var1 !== var5)) {
                    _fun38121_ip = 90;
                    continue _fun38121
                }
            case 82:
                var1 = 'Undefined';
                return var1;
            case 90:
                var1 = '[Undefined encoding]';
                return var1;
            case 98:
                var1 = '[Unicode encoded text]';
                return var1;
            case 106:
                var1 = '[JIS encoded text]';
                return var1;
            case 114:
                var1 = _closure1_slot0;
                var0 = var4.slice;
                var0 = var0.bind(var4)(var3);
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var1.getEncodedString = var2;
    var0 = function arg0() {
        var4 = arg0;
        var5 = 0;
        var0 = var4[var5];
        var1 = var0[var5];
        var0 = var4[var5];
        var3 = 1;
        var0 = var0[var3];
        var1 = var1 / var0;
        var0 = var4[var3];
        var2 = var0[var5];
        var0 = var4[var3];
        var0 = var0[var3];
        var2 = var2 / var0;
        var0 = 60;
        var0 = var2 / var0;
        var1 = var1 + var0;
        var0 = 2;
        var2 = var4[var0];
        var2 = var2[var5];
        var0 = var4[var0];
        var0 = var0[var3];
        var2 = var2 / var0;
        var0 = 3600;
        var0 = var2 / var0;
        var0 = var1 + var0;
        return var0;
    };
    var1.getCalculatedGpsValue = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);