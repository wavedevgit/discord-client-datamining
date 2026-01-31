// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
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
    var _closure1_slot2 = var3;
    var1 = function arg0() {
        _fun4876: for (var _fun4876_ip = 0;;) switch (_fun4876_ip) {
            case 0:
                var1 = arg0;
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                var7 = 1;
                var0 = var0[var7];
                var4 = undefined;
                var3 = var3.bind(var4)(var0);
                var0 = var1.source;
                var13 = var3.bind(var4)(var0);
                var3 = var1.crossOrigin;
                var0 = var1.referrerPolicy;
                var6 = var1.src;
                var11 = var1.srcSet;
                var5 = var1.width;
                var _closure2_slot0 = var5;
                var4 = var1.height;
                var _closure2_slot1 = var4;
                var8 = {};
                var _closure2_slot2 = var8;
                var1 = 'use-credentials';
                if (!(var1 === var3)) {
                    _fun4876_ip = 108;
                    continue _fun4876
                }
            case 98:
                var1 = 'true';
                var8['Access-Control-Allow-Credentials'] = var1;
            case 108:
                var3 = null;
                if (!(var3 != var0)) {
                    _fun4876_ip = 120;
                    continue _fun4876
                }
            case 114:
                var8['Referrer-Policy'] = var0;
            case 120:
                if (!(var3 == var11)) {
                    _fun4876_ip = 256;
                    continue _fun4876
                }
            case 127:
                if (!(var3 == var6)) {
                    _fun4876_ip = 221;
                    continue _fun4876
                }
            case 131:
                var0 = var13;
                if (!(var3 != var13)) {
                    _fun4876_ip = 219;
                    continue _fun4876
                }
            case 138:
                var1 = var13.uri;
                var0 = var13;
                if (!var1) {
                    _fun4876_ip = 219;
                    continue _fun4876
                }
            case 149:
                var1 = global;
                var10 = var1.Object;
                var9 = var10.keys;
                var9 = var9.bind(var10)(var8);
                var10 = var9.length;
                var9 = 0;
                var0 = var13;
                if (!(var10 > var9)) {
                    _fun4876_ip = 219;
                    continue _fun4876
                }
            case 181:
                var12 = var1.Object;
                var10 = var12.assign;
                var9 = {};
                var9.headers = var8;
                var1 = {};
                var9 = var10.bind(var12)(var1, var13, var9);
                var1 = new Array(1);
                var1[0] = var9;
                var0 = var1;
            case 219:
                _fun4876_ip = 251;
                continue _fun4876;
            case 221:
                var9 = {};
                var9.uri = var6;
                var9.headers = var8;
                var9.width = var5;
                var9.height = var4;
                var1 = new Array(1);
                var1[0] = var9;
                var0 = var1;
            case 251:
                _fun4876_ip = 390;
                continue _fun4876;
            case 256:
                var1 = new Array(0);
                var _closure2_slot3 = var1;
                var10 = var11.split;
                var9 = ', ';
                var11 = var10.bind(var11)(var9);
                var9 = true;
                var _closure2_slot4 = var9;
                var10 = var11.forEach;
                var9 = function(arg0) { // Environment: var2
                    _fun4877: for (var _fun4877_ip = 0;;) switch (_fun4877_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = var2.split;
                            var0 = ' ';
                            var3 = var1.bind(var2)(var0);
                            var2 = _closure1_slot2;
                            var0 = undefined;
                            var1 = 2;
                            var2 = var2.bind(var0)(var3, var1);
                            var4 = 0;
                            var5 = var2[var4];
                            var1 = 1;
                            var2 = var2[var1];
                            var6 = '1x';
                            if (!(var0 !== var2)) {
                                _fun4877_ip = 63;
                                continue _fun4877
                            }
                        case 60:
                            var6 = var2;
                        case 63:
                            var2 = var6.endsWith;
                            var8 = 'x';
                            var3 = var2.bind(var6)(var8);
                            var2 = global;
                            var7 = var6;
                            if (var3) {
                                _fun4877_ip = 110;
                                continue _fun4877
                            }
                        case 86:
                            var9 = var2.console;
                            var6 = var9.warn;
                            var3 = 'The provided format for scale is not supported yet. Please use scales like 1x, 2x, etc.';
                            var3 = var6.bind(var9)(var3);
                            _fun4877_ip = 224;
                            continue _fun4877;
                        case 110:
                            var6 = var2.parseInt;
                            var3 = var7.split;
                            var3 = var3.bind(var7)(var8);
                            var4 = var3[var4];
                            var3 = 10;
                            var6 = var6.bind(var0)(var4, var3);
                            var2 = var2.isNaN;
                            var2 = var2.bind(var0)(var6);
                            if (var2) {
                                _fun4877_ip = 224;
                                continue _fun4877
                            }
                        case 153:
                            var1 = var1 !== var6;
                            if (!var1) {
                                _fun4877_ip = 167;
                                continue _fun4877
                            }
                        case 160:
                            var1 = _closure2_slot4;
                        case 167:
                            _closure2_slot4 = var1;
                            var3 = _closure2_slot3;
                            var2 = var3.push;
                            var1 = {};
                            var7 = _closure2_slot2;
                            var1.headers = var7;
                            var1.scale = var6;
                            var1.uri = var5;
                            var5 = _closure2_slot0;
                            var1.width = var5;
                            var4 = _closure2_slot1;
                            var1.height = var4;
                            var1 = var2.bind(var3)(var1);
                        case 224:
                            return var0;
                    }
                };
                var9 = var10.bind(var11)(var9);
                var2 = _closure2_slot4;
                if (!var2) {
                    _fun4876_ip = 312;
                    continue _fun4876
                }
            case 308:
                var2 = var3 != var6;
            case 312:
                if (!var2) {
                    _fun4876_ip = 349;
                    continue _fun4876
                }
            case 315:
                var3 = var1.push;
                var2 = {};
                var2.headers = var8;
                var2.scale = var7;
                var2.uri = var6;
                var2.width = var5;
                var2.height = var4;
                var2 = var3.bind(var1)(var2);
            case 349:
                var3 = var1.length;
                var2 = 0;
                var0 = var1;
                if (!(var2 === var3)) {
                    _fun4876_ip = 390;
                    continue _fun4876
                }
            case 363:
                var2 = global;
                var4 = var2.console;
                var3 = var4.warn;
                var2 = 'The provided value for srcSet is not valid.';
                var2 = var3.bind(var4)(var2);
                var0 = var1;
            case 390:
                return var0;
        }
    };
    var2.getImageSourcesFromImageProps = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 90]);