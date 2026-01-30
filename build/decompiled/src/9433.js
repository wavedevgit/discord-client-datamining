// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function(arg0, arg1) { // Original name: is, environment: var0
        _fun75059: for (var _fun75059_ip = 0;;) switch (_fun75059_ip) {
            case 0:
                var3 = arg0;
                var4 = arg1;
                if (!(var3 !== var4)) {
                    _fun75059_ip = 23;
                    continue _fun75059
                }
            case 10:
                var0 = var3 != var3;
                if (!var0) {
                    _fun75059_ip = 21;
                    continue _fun75059
                }
            case 17:
                var0 = var4 != var4;
            case 21:
                _fun75059_ip = 57;
                continue _fun75059;
            case 23:
                var2 = 0;
                var1 = var2 !== var3;
                if (var1) {
                    _fun75059_ip = 36;
                    continue _fun75059
                }
            case 32:
                var1 = var2 !== var4;
            case 36:
                if (var1) {
                    _fun75059_ip = 54;
                    continue _fun75059
                }
            case 39:
                var2 = 1;
                var3 = var2 / var3;
                var2 = var2 / var4;
                var1 = var3 === var2;
            case 54:
                var0 = var1;
            case 57:
                return var0;
        }
    };
    var _closure1_slot1 = var1;
    var1 = global;
    var1 = var1.Object;
    var1 = var1.prototype;
    var1 = var1.hasOwnProperty;
    var _closure1_slot0 = var1;
    var1 = function(arg0, arg1) { // Original name: shallowEqual, environment: var0
        _fun75060: for (var _fun75060_ip = 0;;) switch (_fun75060_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var0 = _closure1_slot1;
                var3 = undefined;
                var0 = var0.bind(var3)(var6, var5);
                if (var0) {
                    _fun75060_ip = 208;
                    continue _fun75060
                }
            case 27:
                var2 = 'object';
                var0 = typeof var6;
                if (!(var2 === var0)) {
                    _fun75060_ip = 204;
                    continue _fun75060
                }
            case 41:
                var0 = null;
                if (!(var0 !== var6)) {
                    _fun75060_ip = 204;
                    continue _fun75060
                }
            case 50:
                var1 = typeof var5;
                if (!(var2 === var1)) {
                    _fun75060_ip = 204;
                    continue _fun75060
                }
            case 60:
                if (!(var0 !== var5)) {
                    _fun75060_ip = 204;
                    continue _fun75060
                }
            case 67:
                var0 = global;
                var2 = var0.Object;
                var1 = var2.keys;
                var2 = var1.bind(var2)(var6);
                var1 = var0.Object;
                var0 = var1.keys;
                var0 = var0.bind(var1)(var5);
                var1 = var2.length;
                var0 = var0.length;
                if (!(var1 === var0)) {
                    _fun75060_ip = 200;
                    continue _fun75060
                }
            case 115:
                var0 = var2.length;
                var1 = 0;
                var0 = var1 < var0;
                if (!var0) {
                    _fun75060_ip = 196;
                    continue _fun75060
                }
            case 129:
                var8 = _closure1_slot0;
                var7 = var8.call;
                var0 = var2[var1];
                var0 = var7.bind(var8)(var5, var0);
                if (!var0) {
                    _fun75060_ip = 180;
                    continue _fun75060
                }
            case 151:
                var8 = _closure1_slot1;
                var0 = var2[var1];
                var7 = var6[var0];
                var0 = var2[var1];
                var0 = var5[var0];
                var0 = var8.bind(var3)(var7, var0);
                if (var0) {
                    _fun75060_ip = 184;
                    continue _fun75060
                }
            case 180:
                var0 = false;
                return var0;
            case 184:
                var1 = var1 + 1;
                var0 = var2.length;
                if (var1 < var0) {
                    _fun75060_ip = 129;
                    continue _fun75060
                }
            case 196:
                var0 = true;
                return var0;
            case 200:
                var0 = false;
                return var0;
            case 204:
                var0 = false;
                return var0;
            case 208:
                var0 = true;
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);