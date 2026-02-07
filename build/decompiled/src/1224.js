// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function arg0() {
        var2 = arg0;
        var1 = var2.charAt;
        var0 = 0;
        var1 = var1.bind(var2)(var0);
        var0 = '/';
        var0 = var0 === var1;
        return var0;
    };
    var _closure1_slot0 = var1;
    var1 = function arg0, arg1() {
        _fun13507: for (var _fun13507_ip = 0;;) switch (_fun13507_ip) {
            case 0:
                var1 = arg0;
                var4 = arg1;
                var3 = 1;
                var2 = var4 + var3;
                var0 = var1.length;
                if (!(var2 < var0)) {
                    _fun13507_ip = 42;
                    continue _fun13507
                }
            case 22:
                var5 = var1[var2];
                var1[var4] = var5;
                var4 = var4 + var3;
                var2 = var2 + var3;
                if (var2 < var0) {
                    _fun13507_ip = 22;
                    continue _fun13507
                }
            case 42:
                var0 = var1.pop;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot1 = var1;
    var1 = function arg0, arg1() {
        _fun13508: for (var _fun13508_ip = 0;;) switch (_fun13508_ip) {
            case 0:
                var2 = arg0;
                var7 = arg1;
                var6 = undefined;
                if (!(var6 === var7)) {
                    _fun13508_ip = 16;
                    continue _fun13508
                }
            case 12:
                var7 = '';
            case 16:
                var4 = var2;
                if (!var2) {
                    _fun13508_ip = 36;
                    continue _fun13508
                }
            case 22:
                var1 = var2.split;
                var0 = '/';
                var4 = var1.bind(var2)(var0);
            case 36:
                if (var4) {
                    _fun13508_ip = 43;
                    continue _fun13508
                }
            case 39:
                var4 = new Array(0);
            case 43:
                var3 = var7;
                if (!var7) {
                    _fun13508_ip = 63;
                    continue _fun13508
                }
            case 49:
                var1 = var7.split;
                var0 = '/';
                var3 = var1.bind(var7)(var0);
            case 63:
                if (var3) {
                    _fun13508_ip = 70;
                    continue _fun13508
                }
            case 66:
                var3 = new Array(0);
            case 70:
                var0 = var2;
                if (!var0) {
                    _fun13508_ip = 88;
                    continue _fun13508
                }
            case 76:
                var1 = _closure1_slot0;
                var0 = var1.bind(var6)(var2);
            case 88:
                var1 = var7;
                if (!var1) {
                    _fun13508_ip = 106;
                    continue _fun13508
                }
            case 94:
                var5 = _closure1_slot0;
                var1 = var5.bind(var6)(var7);
            case 106:
                if (var0) {
                    _fun13508_ip = 112;
                    continue _fun13508
                }
            case 109:
                var0 = var1;
            case 112:
                if (!var2) {
                    _fun13508_ip = 133;
                    continue _fun13508
                }
            case 115:
                var1 = _closure1_slot0;
                var2 = var1.bind(var6)(var2);
                var1 = var4;
                if (var2) {
                    _fun13508_ip = 164;
                    continue _fun13508
                }
            case 133:
                var2 = var4.length;
                var1 = var3;
                if (!var2) {
                    _fun13508_ip = 164;
                    continue _fun13508
                }
            case 144:
                var2 = var3.pop;
                var2 = var2.bind(var3)();
                var2 = var3.concat;
                var1 = var2.bind(var3)(var4);
            case 164:
                var2 = var1.length;
                if (var2) {
                    _fun13508_ip = 178;
                    continue _fun13508
                }
            case 172:
                var2 = '/';
                return var2;
            case 178:
                var2 = var1.length;
                var3 = false;
                if (!var2) {
                    _fun13508_ip = 239;
                    continue _fun13508
                }
            case 188:
                var4 = var1.length;
                var2 = 1;
                var2 = var4 - var2;
                var5 = var1[var2];
                var2 = '.';
                var2 = var2 === var5;
                if (var2) {
                    _fun13508_ip = 225;
                    continue _fun13508
                }
            case 215:
                var4 = '..';
                var2 = var4 === var5;
            case 225:
                if (var2) {
                    _fun13508_ip = 236;
                    continue _fun13508
                }
            case 228:
                var4 = '';
                var2 = var4 === var5;
            case 236:
                var3 = var2;
            case 239:
                var10 = var1.length;
                var4 = 0;
                var11 = var4 <= var10;
                var8 = '..';
                var9 = '.';
                var7 = 0;
                var2 = 0;
                if (!var11) {
                    _fun13508_ip = 344;
                    continue _fun13508
                }
            case 270:
                var11 = var1[var10];
                if (!(var9 !== var11)) {
                    _fun13508_ip = 318;
                    continue _fun13508
                }
            case 278:
                if (!(var8 !== var11)) {
                    _fun13508_ip = 303;
                    continue _fun13508
                }
            case 282:
                var11 = var7;
                if (!var7) {
                    _fun13508_ip = 331;
                    continue _fun13508
                }
            case 288:
                var12 = _closure1_slot1;
                var12 = var12.bind(var6)(var1, var10);
                var11 = var7 - 1;
                _fun13508_ip = 331;
                continue _fun13508;
            case 303:
                var12 = _closure1_slot1;
                var12 = var12.bind(var6)(var1, var10);
                var11 = var7 + 1;
                _fun13508_ip = 331;
                continue _fun13508;
            case 318:
                var12 = _closure1_slot1;
                var12 = var12.bind(var6)(var1, var10);
                var11 = var7;
            case 331:
                var10 = var10 - 1;
                var7 = var11;
                var2 = var7;
                if (var4 <= var10) {
                    _fun13508_ip = 270;
                    continue _fun13508
                }
            case 344:
                if (var0) {
                    _fun13508_ip = 376;
                    continue _fun13508
                }
            case 347:
                var2 = parseFloat(var2);
                var7 = var2 - 1;
                if (!var2) {
                    _fun13508_ip = 376;
                    continue _fun13508
                }
            case 356:
                var2 = var1.unshift;
                var2 = var2.bind(var1)(var8);
                var2 = parseFloat(var7);
                var7 = var2 - 1;
                if (var2) {
                    _fun13508_ip = 356;
                    continue _fun13508
                }
            case 376:
                var0 = !var0;
                if (var0) {
                    _fun13508_ip = 394;
                    continue _fun13508
                }
            case 382:
                var7 = var1[var4];
                var2 = '';
                var0 = var2 === var7;
            case 394:
                if (var0) {
                    _fun13508_ip = 420;
                    continue _fun13508
                }
            case 397:
                var2 = var1[var4];
                if (!var2) {
                    _fun13508_ip = 417;
                    continue _fun13508
                }
            case 404:
                var5 = _closure1_slot0;
                var4 = var1[var4];
                var2 = var5.bind(var6)(var4);
            case 417:
                var0 = var2;
            case 420:
                if (var0) {
                    _fun13508_ip = 438;
                    continue _fun13508
                }
            case 423:
                var2 = var1.unshift;
                var0 = '';
                var0 = var2.bind(var1)(var0);
            case 438:
                var0 = var1.join;
                var2 = '/';
                var1 = var0.bind(var1)(var2);
                if (!var3) {
                    _fun13508_ip = 476;
                    continue _fun13508
                }
            case 455:
                var4 = var1.substr;
                var0 = -1;
                var0 = var4.bind(var1)(var0);
                var3 = var2 !== var0;
            case 476:
                var0 = var1;
                if (!var3) {
                    _fun13508_ip = 486;
                    continue _fun13508
                }
            case 482:
                var0 = var1 + var2;
            case 486:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);