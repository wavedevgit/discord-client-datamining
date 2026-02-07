// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function arg0() {
        _fun16786: for (var _fun16786_ip = 0;;) switch (_fun16786_ip) {
            case 0:
                var0 = arg0;
                var2 = typeof var0;
                var1 = 'string';
                if (!(var1 !== var2)) {
                    _fun16786_ip = 76;
                    continue _fun16786
                }
            case 14:
                var1 = 'boolean';
                if (!(var1 !== var2)) {
                    _fun16786_ip = 63;
                    continue _fun16786
                }
            case 22:
                var1 = 'number';
                if (!(var1 !== var2)) {
                    _fun16786_ip = 36;
                    continue _fun16786
                }
            case 30:
                var1 = '';
                return var1;
            case 36:
                var1 = global;
                var2 = var1.isFinite;
                var1 = undefined;
                var2 = var2.bind(var1)(var0);
                var1 = '';
                if (!var2) {
                    _fun16786_ip = 61;
                    continue _fun16786
                }
            case 58:
                var1 = var0;
            case 61:
                return var1;
            case 63:
                var1 = 'false';
                if (!var0) {
                    _fun16786_ip = 74;
                    continue _fun16786
                }
            case 70:
                var1 = 'true';
            case 74:
                return var1;
            case 76:
                return var0;
        }
    };
    var _closure1_slot0 = var1;
    var1 = function(arg0, arg1, arg2, arg3) { // Environment: var0
        _fun16787: for (var _fun16787_ip = 0;;) switch (_fun16787_ip) {
            case 0:
                var6 = arg0;
                var3 = arg1;
                var8 = arg2;
                var4 = arg3;
                var _closure2_slot0 = var6;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var8;
                if (var3) {
                    _fun16787_ip = 33;
                    continue _fun16787
                }
            case 29:
                var3 = '&';
            case 33:
                _closure2_slot1 = var3;
                if (var8) {
                    _fun16787_ip = 44;
                    continue _fun16787
                }
            case 40:
                var8 = '=';
            case 44:
                _closure2_slot2 = var8;
                var0 = null;
                if (!(var0 === var6)) {
                    _fun16787_ip = 62;
                    continue _fun16787
                }
            case 54:
                var0 = undefined;
                _closure2_slot0 = var0;
                var6 = undefined;
            case 62:
                var1 = 'object';
                var0 = typeof var6;
                if (!(var1 !== var0)) {
                    _fun16787_ip = 133;
                    continue _fun16787
                }
            case 73:
                var0 = '';
                if (!var4) {
                    _fun16787_ip = 131;
                    continue _fun16787
                }
            case 80:
                var5 = global;
                var9 = var5.encodeURIComponent;
                var1 = _closure1_slot0;
                var7 = undefined;
                var4 = var1.bind(var7)(var4);
                var4 = var9.bind(var7)(var4);
                var4 = var4 + var8;
                var5 = var5.encodeURIComponent;
                var1 = var1.bind(var7)(var6);
                var1 = var5.bind(var7)(var1);
                var0 = var4 + var1;
            case 131:
                _fun16787_ip = 192;
                continue _fun16787;
            case 133:
                var1 = global;
                var5 = var1.Object;
                var4 = var5.keys;
                var5 = var4.bind(var5)(var6);
                var4 = var5.map;
                var2 = function(arg0) { // Environment: var2
                    _fun16788: for (var _fun16788_ip = 0;;) switch (_fun16788_ip) {
                        case 0:
                            var4 = arg0;
                            var5 = global;
                            var3 = var5.encodeURIComponent;
                            var1 = _closure1_slot0;
                            var6 = undefined;
                            var1 = var1.bind(var6)(var4);
                            var7 = var3.bind(var6)(var1);
                            var3 = _closure2_slot2;
                            var3 = var7 + var3;
                            var _closure3_slot0 = var3;
                            var9 = var5.Array;
                            var8 = var9.isArray;
                            var7 = _closure2_slot0;
                            var7 = var7[var4];
                            var7 = var8.bind(var9)(var7);
                            if (var7) {
                                _fun16788_ip = 108;
                                continue _fun16788
                            }
                        case 74:
                            var5 = var5.encodeURIComponent;
                            var7 = _closure1_slot0;
                            var0 = _closure2_slot0;
                            var0 = var0[var4];
                            var0 = var7.bind(var6)(var0);
                            var0 = var5.bind(var6)(var0);
                            var0 = var3 + var0;
                            _fun16788_ip = 145;
                            continue _fun16788;
                        case 108:
                            var3 = _closure2_slot0;
                            var4 = var3[var4];
                            var3 = var4.map;
                            var2 = function(arg0) { // Environment: var2
                                var1 = _closure3_slot0;
                                var0 = global;
                                var3 = var0.encodeURIComponent;
                                var4 = _closure1_slot0;
                                var2 = undefined;
                                var0 = arg0;
                                var0 = var4.bind(var2)(var0);
                                var0 = var3.bind(var2)(var0);
                                var0 = var1 + var0;
                                return var0;
                            };
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.join;
                            var1 = _closure2_slot1;
                            var0 = var2.bind(var3)(var1);
                        case 145:
                            return var0;
                    }
                };
                var4 = var4.bind(var5)(var2);
                var2 = var4.filter;
                var1 = var1.Boolean;
                var2 = var2.bind(var4)(var1);
                var1 = var2.join;
                var0 = var1.bind(var2)(var3);
            case 192:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);