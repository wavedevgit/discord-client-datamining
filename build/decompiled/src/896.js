// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function arg0() {
        _fun9471: for (var _fun9471_ip = 0;;) switch (_fun9471_ip) {
            case 0:
                var4 = arg0;
                var1 = var4.length;
                var0 = 1;
                var0 = var1 - var0;
                var2 = var4[var0];
                var1 = '/';
                var0 = var4;
                if (!(var1 === var2)) {
                    _fun9471_ip = 49;
                    continue _fun9471
                }
            case 30:
                var3 = var4.slice;
                var2 = 0;
                var1 = -1;
                var0 = var3.bind(var4)(var2, var1);
            case 49:
                return var0;
        }
    };
    var _closure1_slot2 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var2 = var2.Symbol;
    var3 = var2.toStringTag;
    var2 = {};
    var6 = 'Module';
    var2.value = var6;
    var2 = var4.bind(var5)(var1, var3, var2);
    var0 = function arg0, arg1() {
        _fun9472: for (var _fun9472_ip = 0;;) switch (_fun9472_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                var0 = null;
                var2 = var0 == var1;
                var5 = undefined;
                var7 = undefined;
                if (var2) {
                    _fun9472_ip = 29;
                    continue _fun9472
                }
            case 19:
                var2 = var1.getDsn;
                var7 = var2.bind(var1)();
            case 29:
                var0 = var0 == var1;
                var4 = undefined;
                if (var0) {
                    _fun9472_ip = 54;
                    continue _fun9472
                }
            case 38:
                var0 = var1.getOptions;
                var0 = var0.bind(var1)();
                var4 = var0.tunnel;
            case 54:
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var10 = 0;
                var0 = var0[var10];
                var1 = var1.bind(var5)(var0);
                var0 = var1.parseStringToURLObject;
                var8 = var0.bind(var1)(var3);
                var0 = false;
                if (!var8) {
                    _fun9472_ip = 195;
                    continue _fun9472
                }
            case 92:
                var9 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var10];
                var9 = var9.bind(var5)(var6);
                var6 = var9.isURLObjectRelative;
                var6 = var6.bind(var9)(var8);
                var0 = false;
                if (var6) {
                    _fun9472_ip = 195;
                    continue _fun9472
                }
            case 125:
                var9 = !var7;
                var6 = !var9;
                if (var9) {
                    _fun9472_ip = 192;
                    continue _fun9472
                }
            case 134:
                var10 = var8.host;
                var9 = var10.includes;
                var7 = var7.host;
                var7 = var9.bind(var10)(var7);
                if (!var7) {
                    _fun9472_ip = 189;
                    continue _fun9472
                }
            case 159:
                var10 = /(^|&|\?)sentry_key=/;
                var9 = var10.test;
                var8 = var8.search;
                var7 = var9.bind(var10)(var8);
            case 189:
                var6 = var7;
            case 192:
                var0 = var6;
            case 195:
                if (var0) {
                    _fun9472_ip = 224;
                    continue _fun9472
                }
            case 198:
                var1 = false;
                if (!var4) {
                    _fun9472_ip = 221;
                    continue _fun9472
                }
            case 203:
                var2 = _closure1_slot2;
                var3 = var2.bind(var5)(var3);
                var2 = var2.bind(var5)(var4);
                var1 = var3 === var2;
            case 221:
                var0 = var1;
            case 224:
                return var0;
        }
    };
    var1.isSentryRequestUrl = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [897]);