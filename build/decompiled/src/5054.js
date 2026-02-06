// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var4 = var3.useEffect;
    var _closure1_slot2 = var4;
    var3 = var3.useRef;
    var _closure1_slot3 = var3;
    var1 = function arg0() {
        _fun45444: for (var _fun45444_ip = 0;;) switch (_fun45444_ip) {
            case 0:
                var0 = arg0;
                var1 = _closure1_slot3;
                var6 = undefined;
                var2 = null;
                var5 = var1.bind(var6)(var2);
                var1 = var1.bind(var6)(var2);
                var _closure2_slot0 = var1;
                var7 = var0;
                if (!var0) {
                    _fun45444_ip = 47;
                    continue _fun45444
                }
            case 36:
                var9 = 'object';
                var8 = typeof var0;
                var7 = var9 === var8;
            case 47:
                if (!var7) {
                    _fun45444_ip = 58;
                    continue _fun45444
                }
            case 50:
                var8 = 'value';
                var7 = var8 in var0;
            case 58:
                if (var7) {
                    _fun45444_ip = 206;
                    continue _fun45444
                }
            case 64:
                var7 = var1.current;
                if (!(var2 !== var7)) {
                    _fun45444_ip = 98;
                    continue _fun45444
                }
            case 73:
                var7 = var5.current;
                if (!(var7 !== var0)) {
                    _fun45444_ip = 206;
                    continue _fun45444
                }
            case 85:
                var7 = var1.current;
                var7.value = var0;
                _fun45444_ip = 206;
                continue _fun45444;
            case 98:
                var5.current = var0;
                var7 = 'object';
                var5 = typeof var0;
                if (!(var7 !== var5)) {
                    _fun45444_ip = 148;
                    continue _fun45444
                }
            case 115:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var5 = 1;
                var5 = var8[var5];
                var7 = var7.bind(var6)(var5);
                var5 = var7.makeMutable;
                var5 = var5.bind(var7)(var0);
                _fun45444_ip = 200;
                continue _fun45444;
            case 148:
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var7 = 1;
                var7 = var9[var7];
                var9 = var8.bind(var6)(var7);
                var8 = var9.makeMutable;
                var7 = global;
                var11 = var7.Object;
                var10 = var11.assign;
                var7 = {};
                var7 = var10.bind(var11)(var7, var0);
                var5 = var8.bind(var9)(var7);
            case 200:
                var1.current = var5;
            case 206:
                var5 = _closure1_slot2;
                var4 = function() { // Environment: var3
                    var0 = function() { // Environment: var0
                        _fun45446: for (var _fun45446_ip = 0;;) switch (_fun45446_ip) {
                            case 0:
                                var1 = _closure2_slot0;
                                var1 = var1.current;
                                if (!var1) {
                                    _fun45446_ip = 60;
                                    continue _fun45446
                                }
                            case 15:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var1 = 1;
                                var2 = var2[var1];
                                var1 = undefined;
                                var2 = var3.bind(var1)(var2);
                                var1 = var2.cancelAnimation;
                                var0 = _closure2_slot0;
                                var0 = var0.current;
                                var0 = var1.bind(var2)(var0);
                            case 60:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    return var0;
                };
                var3 = new Array(0);
                var3 = var5.bind(var6)(var4, var3);
                var1 = var1.current;
                if (!(var2 != var1)) {
                    _fun45444_ip = 237;
                    continue _fun45444
                }
            case 234:
                var0 = var1;
            case 237:
                return var0;
        }
    };
    var2.useReactiveSharedValue = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3723]);