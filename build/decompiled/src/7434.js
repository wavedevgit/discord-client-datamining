// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = module;
    var1 = var0.exports;
    var0 = function(arg0) { // Environment: var0
        _fun60140: for (var _fun60140_ip = 0;;) switch (_fun60140_ip) {
            case 0:
                var2 = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i;
                var1 = var2.exec;
                var0 = arg0;
                var4 = var1.bind(var2)(var0);
                if (var4) {
                    _fun60140_ip = 35;
                    continue _fun60140
                }
            case 31:
                var0 = null;
                return var0;
            case 35:
                var0 = var4.shift;
                var0 = var0.bind(var4)();
                var9 = new Array(0);
                var0 = 2;
                var1 = var4[var0];
                var10 = null;
                if (!var1) {
                    _fun60140_ip = 92;
                    continue _fun60140
                }
            case 61:
                var2 = var4[var0];
                var1 = var2.split;
                var0 = '-';
                var0 = var1.bind(var2)(var0);
                var1 = var0.shift;
                var10 = var1.bind(var0)();
                var9 = var0;
            case 92:
                var7 = new Array(0);
                var0 = 5;
                var1 = var4[var0];
                if (!var1) {
                    _fun60140_ip = 137;
                    continue _fun60140
                }
            case 106:
                var2 = var4[var0];
                var1 = var2.split;
                var0 = '-';
                var0 = var1.bind(var2)(var0);
                var1 = var0.shift;
                var1 = var1.bind(var0)();
                var7 = var0;
            case 137:
                var6 = new Array(0);
                var0 = 6;
                var1 = var4[var0];
                if (!var1) {
                    _fun60140_ip = 321;
                    continue _fun60140
                }
            case 154:
                var2 = var4[var0];
                var1 = var2.split;
                var0 = '-';
                var12 = var1.bind(var2)(var0);
                var0 = var12.shift;
                var0 = var0.bind(var12)();
                var1 = new Array(0);
                var0 = var12.length;
                var8 = undefined;
                var11 = 1;
                var5 = undefined;
                var2 = var1;
                if (!var0) {
                    _fun60140_ip = 299;
                    continue _fun60140
                }
            case 204:
                var0 = var12.shift;
                var15 = var0.bind(var12)();
                var0 = var15.length;
                if (!(var11 !== var0)) {
                    _fun60140_ip = 241;
                    continue _fun60140
                }
            case 223:
                var0 = var1.push;
                var0 = var0.bind(var1)(var15);
                var14 = var8;
                var13 = var1;
                _fun60140_ip = 279;
                continue _fun60140;
            case 241:
                var14 = var15;
                var13 = var1;
                if (!var8) {
                    _fun60140_ip = 279;
                    continue _fun60140
                }
            case 250:
                var16 = var6.push;
                var0 = {};
                var0.singleton = var8;
                var0.extension = var1;
                var0 = var16.bind(var6)(var0);
                var13 = new Array(0);
                var14 = var15;
            case 279:
                var0 = var12.length;
                var8 = var14;
                var1 = var13;
                var5 = var8;
                var2 = var1;
                if (var0) {
                    _fun60140_ip = 204;
                    continue _fun60140
                }
            case 299:
                var1 = var6.push;
                var0 = {};
                var0.singleton = var5;
                var0.extension = var2;
                var0 = var1.bind(var6)(var0);
            case 321:
                var5 = new Array(0);
                var0 = 7;
                var1 = var4[var0];
                if (!var1) {
                    _fun60140_ip = 376;
                    continue _fun60140
                }
            case 335:
                var2 = var4[var0];
                var1 = var2.split;
                var0 = '-';
                var0 = var1.bind(var2)(var0);
                var1 = var0.shift;
                var1 = var1.bind(var0)();
                var1 = var0.shift;
                var1 = var1.bind(var0)();
                var5 = var0;
            case 376:
                var1 = new Array(0);
                var0 = 8;
                var2 = var4[var0];
                if (!var2) {
                    _fun60140_ip = 421;
                    continue _fun60140
                }
            case 390:
                var8 = var4[var0];
                var2 = var8.split;
                var0 = '-';
                var0 = var2.bind(var8)(var0);
                var2 = var0.shift;
                var2 = var2.bind(var0)();
                var1 = var0;
            case 421:
                var0 = {};
                var2 = {};
                var8 = {};
                var8.language = var10;
                var8.extlang = var9;
                var2.language = var8;
                var8 = 3;
                var8 = var4[var8];
                if (var8) {
                    _fun60140_ip = 456;
                    continue _fun60140
                }
            case 454:
                var8 = null;
            case 456:
                var2.script = var8;
                var8 = 4;
                var8 = var4[var8];
                if (var8) {
                    _fun60140_ip = 473;
                    continue _fun60140
                }
            case 471:
                var8 = null;
            case 473:
                var2.region = var8;
                var2.variant = var7;
                var2.extension = var6;
                var2.privateuse = var5;
                var0.langtag = var2;
                var0.privateuse = var1;
                var1 = {};
                var2 = 0;
                var2 = var4[var2];
                if (var2) {
                    _fun60140_ip = 515;
                    continue _fun60140
                }
            case 513:
                var2 = null;
            case 515:
                var1.irregular = var2;
                var2 = 1;
                var2 = var4[var2];
                if (var2) {
                    _fun60140_ip = 534;
                    continue _fun60140
                }
            case 532:
                var2 = null;
            case 534:
                var1.regular = var2;
                var0.grandfathered = var1;
                return var0;
        }
    };
    var1.parse = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);