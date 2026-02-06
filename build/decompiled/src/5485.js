// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = metroImportDefault;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var2 = {
        'butt': 0,
        'square': 2,
        'round': 1
    };
    var _closure1_slot2 = var2;
    var2 = {
        'miter': 0,
        'bevel': 2,
        'round': 1
    };
    var _closure1_slot3 = var2;
    var2 = {
        'none': 0,
        'default': 0,
        'nonScalingStroke': 1,
        'non-scaling-stroke': 1,
        'inherit': 2,
        'uri': 3
    };
    var _closure1_slot4 = var2;
    var0 = function arg0, arg1, arg2() {
        _fun48553: for (var _fun48553_ip = 0;;) switch (_fun48553_ip) {
            case 0:
                var1 = arg0;
                var0 = arg1;
                var5 = arg2;
                var13 = var0.stroke;
                var11 = var0.strokeOpacity;
                var8 = var0.strokeLinecap;
                var7 = var0.strokeLinejoin;
                var9 = var0.strokeDasharray;
                var2 = var0.strokeWidth;
                var4 = var0.strokeDashoffset;
                var6 = var0.strokeMiterlimit;
                var3 = var0.vectorEffect;
                var0 = null;
                if (!(var0 != var13)) {
                    _fun48553_ip = 118;
                    continue _fun48553
                }
            case 69:
                var12 = var5.push;
                var10 = 'stroke';
                var10 = var12.bind(var5)(var10);
                var14 = _closure1_slot0;
                var12 = _closure1_slot1;
                var10 = 0;
                var10 = var12[var10];
                var12 = undefined;
                var10 = var14.bind(var12)(var10);
                var10 = var10.bind(var12)(var13);
                var1.stroke = var10;
            case 118:
                if (!(var0 != var2)) {
                    _fun48553_ip = 142;
                    continue _fun48553
                }
            case 122:
                var12 = var5.push;
                var10 = 'strokeWidth';
                var10 = var12.bind(var5)(var10);
                var1.strokeWidth = var2;
            case 142:
                if (!(var0 != var11)) {
                    _fun48553_ip = 196;
                    continue _fun48553
                }
            case 146:
                var10 = var5.push;
                var2 = 'strokeOpacity';
                var2 = var10.bind(var5)(var2);
                var12 = _closure1_slot0;
                var10 = _closure1_slot1;
                var2 = 1;
                var2 = var10[var2];
                var10 = undefined;
                var2 = var12.bind(var10)(var2);
                var2 = var2.bind(var10)(var11);
                var1.strokeOpacity = var2;
            case 196:
                if (!(var0 != var9)) {
                    _fun48553_ip = 303;
                    continue _fun48553
                }
            case 200:
                var10 = var5.push;
                var2 = 'strokeDasharray';
                var2 = var10.bind(var5)(var2);
                var11 = null;
                if (!var9) {
                    _fun48553_ip = 259;
                    continue _fun48553
                }
            case 219:
                var2 = 'none';
                var11 = null;
                if (!(var2 !== var9)) {
                    _fun48553_ip = 259;
                    continue _fun48553
                }
            case 229:
                var12 = _closure1_slot0;
                var10 = _closure1_slot1;
                var2 = 2;
                var2 = var10[var2];
                var10 = undefined;
                var2 = var12.bind(var10)(var2);
                var11 = var2.bind(var10)(var9);
            case 259:
                var2 = var11;
                if (!var11) {
                    _fun48553_ip = 297;
                    continue _fun48553
                }
            case 265:
                var12 = var11.length;
                var10 = 2;
                var12 = var12 % var10;
                var10 = 1;
                var2 = var11;
                if (!(var12 === var10)) {
                    _fun48553_ip = 297;
                    continue _fun48553
                }
            case 287:
                var10 = var11.concat;
                var2 = var10.bind(var11)(var11);
            case 297:
                var1.strokeDasharray = var2;
            case 303:
                if (!(var0 != var4)) {
                    _fun48553_ip = 348;
                    continue _fun48553
                }
            case 307:
                var10 = var5.push;
                var2 = 'strokeDashoffset';
                var2 = var10.bind(var5)(var2);
                var2 = null;
                if (!var9) {
                    _fun48553_ip = 342;
                    continue _fun48553
                }
            case 326:
                var2 = null;
                if (!var4) {
                    _fun48553_ip = 342;
                    continue _fun48553
                }
            case 331:
                var4 = var4 - 0;
                if (var4) {
                    _fun48553_ip = 339;
                    continue _fun48553
                }
            case 337:
                var4 = 0;
            case 339:
                var2 = var4;
            case 342:
                var1.strokeDashoffset = var2;
            case 348:
                if (!(var0 != var8)) {
                    _fun48553_ip = 394;
                    continue _fun48553
                }
            case 352:
                var4 = var5.push;
                var2 = 'strokeLinecap';
                var2 = var4.bind(var5)(var2);
                var2 = var8;
                if (!var2) {
                    _fun48553_ip = 383;
                    continue _fun48553
                }
            case 372:
                var4 = _closure1_slot2;
                var2 = var4[var8];
            case 383:
                if (var2) {
                    _fun48553_ip = 388;
                    continue _fun48553
                }
            case 386:
                var2 = 0;
            case 388:
                var1.strokeLinecap = var2;
            case 394:
                if (!(var0 != var7)) {
                    _fun48553_ip = 440;
                    continue _fun48553
                }
            case 398:
                var4 = var5.push;
                var2 = 'strokeLinejoin';
                var2 = var4.bind(var5)(var2);
                var2 = var7;
                if (!var2) {
                    _fun48553_ip = 429;
                    continue _fun48553
                }
            case 418:
                var4 = _closure1_slot3;
                var2 = var4[var7];
            case 429:
                if (var2) {
                    _fun48553_ip = 434;
                    continue _fun48553
                }
            case 432:
                var2 = 0;
            case 434:
                var1.strokeLinejoin = var2;
            case 440:
                if (!(var0 != var6)) {
                    _fun48553_ip = 505;
                    continue _fun48553
                }
            case 444:
                var4 = var5.push;
                var2 = 'strokeMiterlimit';
                var2 = var4.bind(var5)(var2);
                var2 = var6;
                if (!var6) {
                    _fun48553_ip = 493;
                    continue _fun48553
                }
            case 464:
                var5 = 'number';
                var4 = typeof var6;
                var2 = var6;
                if (!(var5 !== var4)) {
                    _fun48553_ip = 493;
                    continue _fun48553
                }
            case 478:
                var4 = global;
                var5 = var4.parseFloat;
                var4 = undefined;
                var2 = var5.bind(var4)(var6);
            case 493:
                if (var2) {
                    _fun48553_ip = 499;
                    continue _fun48553
                }
            case 496:
                var2 = 4;
            case 499:
                var1.strokeMiterlimit = var2;
            case 505:
                if (!(var0 != var3)) {
                    _fun48553_ip = 537;
                    continue _fun48553
                }
            case 509:
                var0 = var3;
                if (!var0) {
                    _fun48553_ip = 526;
                    continue _fun48553
                }
            case 515:
                var2 = _closure1_slot4;
                var0 = var2[var3];
            case 526:
                if (var0) {
                    _fun48553_ip = 531;
                    continue _fun48553
                }
            case 529:
                var0 = 0;
            case 531:
                var1.vectorEffect = var0;
            case 537:
                var0 = undefined;
                return var0;
        }
    };
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5483, 5471, 5486]);