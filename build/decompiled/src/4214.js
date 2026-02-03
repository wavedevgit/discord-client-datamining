// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = function arg0() {
        _fun38502: for (var _fun38502_ip = 0;;) switch (_fun38502_ip) {
            case 0:
                var1 = 16;
                var0 = arg0;
                var2 = var1 & var0;
                var0 = {};
                var1 = 0;
                if (!var2) {
                    _fun38502_ip = 20;
                    continue _fun38502
                }
            case 17:
                var1 = 1;
            case 20:
                var0.value = var1;
                var1 = 'No';
                if (!var2) {
                    _fun38502_ip = 39;
                    continue _fun38502
                }
            case 33:
                var1 = 'Yes';
            case 39:
                var0.description = var1;
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = function arg0() {
        _fun38503: for (var _fun38503_ip = 0;;) switch (_fun38503_ip) {
            case 0:
                var1 = 2;
                var0 = arg0;
                var2 = var1 & var0;
                var0 = {};
                var1 = 0;
                if (!var2) {
                    _fun38503_ip = 20;
                    continue _fun38503
                }
            case 17:
                var1 = 1;
            case 20:
                var0.value = var1;
                var1 = 'No';
                if (!var2) {
                    _fun38503_ip = 39;
                    continue _fun38503
                }
            case 33:
                var1 = 'Yes';
            case 39:
                var0.description = var1;
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = function arg0, arg1() {
        var5 = arg0;
        var6 = arg1;
        var4 = _closure1_slot0;
        var7 = _closure1_slot1;
        var0 = 0;
        var1 = var7[var0];
        var3 = undefined;
        var2 = var4.bind(var3)(var1);
        var1 = var2.getByteAt;
        var8 = var1.bind(var2)(var5, var6);
        var1 = var7[var0];
        var10 = var4.bind(var3)(var1);
        var9 = var10.getByteAt;
        var1 = 1;
        var2 = var6 + var1;
        var9 = var9.bind(var10)(var5, var2);
        var2 = 256;
        var2 = var2 * var9;
        var2 = var8 + var2;
        var0 = var7[var0];
        var4 = var4.bind(var3)(var0);
        var3 = var4.getByteAt;
        var0 = 2;
        var0 = var6 + var0;
        var3 = var3.bind(var4)(var5, var0);
        var0 = 65536;
        var0 = var0 * var3;
        var0 = var2 + var0;
        var2 = var0 + var1;
        var0 = {};
        var0.value = var2;
        var1 = 'px';
        var1 = var2 + var1;
        var0.description = var1;
        return var0;
    };
    var _closure1_slot6 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var0 = true;
    var2.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var1, var0, var2);
    var0 = {};
    var2 = function arg0, arg1() {
        var4 = arg0;
        var5 = arg1;
        var0 = {};
        var6 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 0;
        var2 = var3[var2];
        var3 = undefined;
        var6 = var6.bind(var3)(var2);
        var2 = var6.getByteAt;
        var6 = var2.bind(var6)(var4, var5);
        var2 = _closure1_slot4;
        var2 = var2.bind(var3)(var6);
        var0.Alpha = var2;
        var2 = _closure1_slot5;
        var2 = var2.bind(var3)(var6);
        var0.Animation = var2;
        var2 = _closure1_slot6;
        var6 = _closure1_slot2;
        var6 = var5 + var6;
        var6 = var2.bind(var3)(var4, var6);
        var0.ImageWidth = var6;
        var1 = _closure1_slot3;
        var1 = var5 + var1;
        var1 = var2.bind(var3)(var4, var1);
        var0.ImageHeight = var1;
        return var0;
    };
    var0.read = var2;
    var2 = 4;
    var _closure1_slot2 = var2;
    var2 = 7;
    var _closure1_slot3 = var2;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4182]);