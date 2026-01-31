// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = /^[-+]0x[0-9a-f]+$/i;
    var _closure1_slot2 = var1;
    var1 = /^0b[01]+$/i;
    var _closure1_slot3 = var1;
    var1 = /^0o[0-7]+$/i;
    var _closure1_slot4 = var1;
    var1 = global;
    var1 = var1.parseInt;
    var _closure1_slot5 = var1;
    var1 = function arg0() {
        _fun6936: for (var _fun6936_ip = 0;;) switch (_fun6936_ip) {
            case 0:
                var0 = arg0;
                var2 = 'number';
                var1 = typeof var0;
                if (!(var2 !== var1)) {
                    _fun6936_ip = 306;
                    continue _fun6936
                }
            case 17:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var3 = 0;
                var1 = var1[var3];
                var7 = undefined;
                var1 = var2.bind(var7)(var1);
                var1 = var1.bind(var7)(var0);
                if (var1) {
                    _fun6936_ip = 296;
                    continue _fun6936
                }
            case 52:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var8 = 1;
                var1 = var1[var8];
                var1 = var2.bind(var7)(var1);
                var1 = var1.bind(var7)(var0);
                var2 = var0;
                if (!var1) {
                    _fun6936_ip = 148;
                    continue _fun6936
                }
            case 83:
                var1 = var0.valueOf;
                var6 = 'function';
                var5 = typeof var1;
                var1 = var0;
                if (!(var6 === var5)) {
                    _fun6936_ip = 111;
                    continue _fun6936
                }
            case 102:
                var5 = var0.valueOf;
                var1 = var5.bind(var0)();
            case 111:
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var8];
                var5 = var6.bind(var7)(var5);
                var6 = var5.bind(var7)(var1);
                var5 = var1;
                var1 = var5;
                if (!var6) {
                    _fun6936_ip = 145;
                    continue _fun6936
                }
            case 142:
                var1 = '' + var5;
            case 145:
                var2 = var1;
            case 148:
                var5 = 'string';
                var1 = typeof var2;
                if (!(var5 === var1)) {
                    _fun6936_ip = 284;
                    continue _fun6936
                }
            case 162:
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var8 = 2;
                var1 = var1[var8];
                var1 = var5.bind(var7)(var1);
                var5 = var1.bind(var7)(var2);
                var6 = _closure1_slot3;
                var1 = var6.test;
                var9 = var1.bind(var6)(var5);
                if (var9) {
                    _fun6936_ip = 253;
                    continue _fun6936
                }
            case 204:
                var6 = _closure1_slot4;
                var1 = var6.test;
                var1 = var1.bind(var6)(var5);
                if (var1) {
                    _fun6936_ip = 253;
                    continue _fun6936
                }
            case 221:
                var6 = _closure1_slot2;
                var1 = var6.test;
                var1 = var1.bind(var6)(var5);
                if (var1) {
                    _fun6936_ip = 243;
                    continue _fun6936
                }
            case 238:
                var1 = var5 - 0;
                _fun6936_ip = 251;
                continue _fun6936;
            case 243:
                var6 = global;
                var1 = var6.NaN;
            case 251:
                _fun6936_ip = 282;
                continue _fun6936;
            case 253:
                var6 = _closure1_slot5;
                var4 = var5.slice;
                var5 = var4.bind(var5)(var8);
                var4 = 8;
                if (!var9) {
                    _fun6936_ip = 276;
                    continue _fun6936
                }
            case 273:
                var4 = var8;
            case 276:
                var1 = var6.bind(var7)(var5, var4);
            case 282:
                return var1;
            case 284:
                var1 = var2;
                if (!(var3 !== var1)) {
                    _fun6936_ip = 294;
                    continue _fun6936
                }
            case 291:
                var1 = var2 - 0;
            case 294:
                return var1;
            case 296:
                var1 = global;
                var1 = var1.NaN;
                return var1;
            case 306:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [576, 573, 584]);